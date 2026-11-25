/* Boutique de flocons : Stripe Checkout + webhook. Le prix et le nombre de flocons sont fixés ICI (côté serveur) :
   l'appli n'envoie que l'identifiant du paquet, elle ne peut donc pas changer le prix. */
const {onRequest}=require('firebase-functions/v2/https');
const {defineSecret}=require('firebase-functions/params');
const admin=require('firebase-admin');
const Stripe=require('stripe');
const {google}=require('googleapis');
const crypto=require('crypto');
admin.initializeApp();
const STRIPE_KEY=defineSecret('STRIPE_SECRET_KEY'),STRIPE_WH=defineSecret('STRIPE_WEBHOOK_SECRET');
const SITE='https://atplab.github.io/calmos/';
const ORIGINS=['https://atplab.github.io'];
const PACKS={p1:{f:100,c:99},p2:{f:350,c:299},p3:{f:700,c:499},p4:{f:2000,c:999},p5:{f:4500,c:1999}};

/* 1. Créer une session de paiement (joueur connecté obligatoire) */
exports.createCheckout=onRequest({secrets:[STRIPE_KEY],cors:ORIGINS,region:'us-central1'},async(req,res)=>{
  if(req.method!=='POST')return res.status(405).send('');
  try{
    const tok=(req.get('Authorization')||'').replace(/^Bearer /,'');
    const {uid}=await admin.auth().verifyIdToken(tok);
    const k=String((req.body&&req.body.pack)||''),P=PACKS[k];
    if(!P)return res.status(400).json({error:'pack'});
    const stripe=Stripe(STRIPE_KEY.value(),{apiVersion:'2025-03-31.basil'});
    const s=await stripe.checkout.sessions.create({
      mode:'payment',
      client_reference_id:uid,
      metadata:{uid,pack:k,flakes:String(P.f)},
      payment_intent_data:{metadata:{uid,pack:k,flakes:String(P.f)}},
      line_items:[{quantity:1,price_data:{currency:'cad',unit_amount:P.c,product_data:{name:P.f+' bulles',description:'Calmos',tax_code:'txcd_10201000'}}}],
      success_url:SITE+'?achat=ok',
      cancel_url:SITE+'?achat=annule'
    },{idempotencyKey:uid+':'+k+':'+Math.floor(Date.now()/10000)});
    res.json({url:s.url});
  }catch(e){console.error(e);res.status(e&&e.code&&String(e.code).startsWith('auth/')?401:500).json({error:'x'})}
});

/* 2. Webhook : Stripe confirme le paiement → on ajoute les flocons, une seule fois par session */
async function credit(s){
  if(s.payment_status!=='paid')return;
  const uid=s.metadata&&s.metadata.uid,P=PACKS[s.metadata&&s.metadata.pack];
  if(!uid||!P)return;
  const db=admin.firestore(),R=db.doc('buys/'+uid),L=db.doc('buys/'+uid+'/s/'+s.id);
  await db.runTransaction(async t=>{
    if((await t.get(L)).exists)return;
    t.set(L,{f:P.f,c:s.amount_total,at:admin.firestore.FieldValue.serverTimestamp()});
    t.set(R,{t:admin.firestore.FieldValue.increment(P.f)},{merge:true});
  });
}
exports.stripeWebhook=onRequest({secrets:[STRIPE_KEY,STRIPE_WH],region:'us-central1'},async(req,res)=>{
  let ev;
  try{ev=Stripe(STRIPE_KEY.value()).webhooks.constructEvent(req.rawBody,req.get('stripe-signature'),STRIPE_WH.value())}
  catch(e){return res.status(400).send('signature')}
  try{
    if(ev.type==='checkout.session.completed'||ev.type==='checkout.session.async_payment_succeeded')await credit(ev.data.object);
    res.json({ok:true});
  }catch(e){console.error(e);res.status(500).send('x')}
});

/* 3. Google Play Billing : l'app envoie le jeton d'achat ; on le vérifie auprès de Google puis on crédite (une seule fois par jeton).
   Produits Play (consommables) : bulles_p1 … bulles_p5, mêmes paquets que ci-dessus. */
const PLAY_PKG='com.nextonset.calmos';
exports.verifyPlayPurchase=onRequest({cors:true,region:'us-central1'},async(req,res)=>{
  if(req.method!=='POST')return res.status(405).send('');
  try{
    const tok=(req.get('Authorization')||'').replace(/^Bearer /,'');
    const {uid}=await admin.auth().verifyIdToken(tok);
    const k=String((req.body&&req.body.pack)||''),P=PACKS[k],token=String((req.body&&req.body.token)||'');
    if(!P||token.length<20)return res.status(400).json({error:'pack'});
    const auth=new google.auth.GoogleAuth({scopes:['https://www.googleapis.com/auth/androidpublisher']});
    const r=await google.androidpublisher({version:'v3',auth}).purchases.products.get({packageName:PLAY_PKG,productId:'bulles_'+k,token});
    if(r.data.purchaseState!==0)return res.status(402).json({error:'unpaid'});
    const h=crypto.createHash('sha256').update(token).digest('hex'),db=admin.firestore();
    const T=db.doc('playTokens/'+h),R=db.doc('buys/'+uid),L=db.doc('buys/'+uid+'/s/play_'+h.slice(0,32));
    await db.runTransaction(async t=>{
      const o=await t.get(T);
      if(o.exists){if(o.data().uid!==uid)throw Object.assign(new Error('dup'),{http:409});return}
      t.set(T,{uid,pack:k,at:admin.firestore.FieldValue.serverTimestamp()});
      t.set(L,{f:P.f,src:'play',at:admin.firestore.FieldValue.serverTimestamp()});
      t.set(R,{t:admin.firestore.FieldValue.increment(P.f)},{merge:true});
    });
    res.json({ok:true});
  }catch(e){console.error(e);res.status(e&&e.http||(e&&e.code&&String(e.code).startsWith('auth/')?401:500)).json({error:'x'})}
});


/* 4. Notifications push (FCM). L'app écrit pt/<uid> = {j:{t:jeton,p:{on,rm,turn,msg,fr}}} ; ces déclencheurs envoient seulement
   les types que le joueur a activés. Les documents de l'app sont {j:"<json>"} (on accepte aussi un objet direct). */
const {onDocumentWritten}=require('firebase-functions/v2/firestore');
const PJ=snap=>{try{const x=snap&&snap.exists&&snap.data();if(!x)return null;return typeof x.j==='string'?JSON.parse(x.j):x}catch(e){return null}};
async function pName(uid){try{const p=PJ(await admin.firestore().doc('profiles/'+uid).get());return(p&&p.name)||'Un ami'}catch(e){return'Un ami'}}
async function push(uid,type,title,body,data){
  try{
    const d=PJ(await admin.firestore().doc('pt/'+uid).get());
    if(!d||!d.t||!d.p||!d.p.on||!d.p[type])return;
    await admin.messaging().send({token:d.t,notification:{title,body:String(body).slice(0,120)},data:Object.assign({k:type},data||{}),android:{priority:'high'}});
  }catch(e){console.error('push',type,e&&e.code||e)}
}
const REG={region:'us-central1'};
/* messages et invitations de salon : cv/<uid1>_<uid2>_<auteur> */
exports.pushCv=onDocumentWritten(Object.assign({document:'cv/{id}'},REG),async ev=>{
  const [a,b,au]=ev.params.id.split('_');if(!au)return;
  const to=a===au?b:a,B=(PJ(ev.data.before)||{}).m||[],A=(PJ(ev.data.after)||{}).m||[];
  const t0=B.length?+B[B.length-1].t||0:0,nw=A.filter(x=>x&&+x.t>t0);if(!nw.length||Date.now()-nw[nw.length-1].t>6e4)return;
  const l=nw[nw.length-1],nm=await pName(au);
  if(l.k==='inv')return push(to,'rm',nm,'t’invite dans un salon',{v:au});
  push(to,'msg',nm,l.k==='stk'?'Sticker':String(l.x||'Nouveau message'),{v:au});
});
/* Parties en ligne : même collection sc. <u1>_<u2> = Motuiles (t = tour), _c = échecs, _d = dames (n coups : pair → p[0], impair → p[1]),
   _u = Hoho (2 à 4 joueurs ; S[t].u = joueur dont c'est le tour). */
exports.pushSc=onDocumentWritten(Object.assign({document:'sc/{gid}'},REG),async ev=>{
  const B=PJ(ev.data.before),A=PJ(ev.data.after);
  if(!A||!Array.isArray(A.p)||(B&&B.id===A.id&&B.n===A.n&&B.t===A.t&&B.st===A.st))return;
  const suf=(ev.params.gid.split('_')[2]||'');
  let me,op,name='Motuiles';
  if(suf==='u'){
    if(A.st!=='play'||!Array.isArray(A.S)||!A.S[A.t])return;
    me=A.S[A.t].u;op=A.h;name='HoHo';
    if(B&&B.st==='play'&&B.S&&B.S[B.t]&&B.S[B.t].u===me&&B.id===A.id)return;
  }else if(suf==='c'||suf==='d'){
    if(A.k!=='chess'&&A.k!=='draughts'||A.r||A.p.length!==2)return;
    me=A.p[(A.n||0)%2];op=A.p[1-(A.n||0)%2];name=suf==='c'?'Échecs':'Dames';
  }else{
    if(A.e||A.p.length!==2)return;
    me=A.p[A.t];op=A.p[1-A.t];
  }
  if(!me||!op||me===op)return;
  push(me,'turn',name,'À toi de jouer contre '+await pName(op),{v:op});
});
/* amis et cadeaux : inbox/<destinataire> = {<expéditeur>:1} */
exports.pushInbox=onDocumentWritten(Object.assign({document:'inbox/{rcpt}'},REG),async ev=>{
  const B=(ev.data.before.exists&&ev.data.before.data())||{},A=(ev.data.after.exists&&ev.data.after.data())||{};
  const nw=Object.keys(A).filter(k=>!B[k]);if(!nw.length)return;
  push(ev.params.rcpt,'fr','Calmos',(await pName(nw[0]))+' pense à toi',{});
});
