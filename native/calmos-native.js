/* Pont natif Calmos (Capacitor) : marque l'app "en magasin" et expose CalmosAds (AdMob),
   CalmosAuth (connexion Google native) et CalmosBilling (Google Play Billing). */
(function () {
  try { sessionStorage.setItem('twa', '1'); } catch (e) {}
  var C = window.Capacitor;
  if (!C || !C.isNativePlatform || !C.isNativePlatform()) return;
  var PL = C.Plugins || {};

  /* ---- À REMPLACER avant la publication (voir PUBLICATION-PLAY.md) ---- */
  var REWARDED_ID = 'ca-app-pub-3940256099942544/5224354917'; // ID de TEST AdMob
  var WEB_CLIENT_ID = 'REMPLACER.apps.googleusercontent.com'; // client OAuth "Web" du projet Firebase

  /* ---- Pubs récompensées (AdMob) ---- */
  var A = PL.AdMob;
  if (A) {
    var privacy = { adsEnabled: true, minor: false }, ready = null;
    var init = function () {
      return ready || (ready = (async function () {
        try {
          var info = await A.requestConsentInfo();
          if (info && info.isConsentFormAvailable && info.status === 'REQUIRED') await A.showConsentForm();
        } catch (e) {}
        await A.initialize({ initializeForTesting: false, tagForChildDirectedTreatment: !!privacy.minor,
          tagForUnderAgeOfConsent: !!privacy.minor, maxAdContentRating: privacy.minor ? 'G' : 'MA' });
      })());
    };
    window.CalmosAds = {
      setPrivacyMode: function (p) { privacy = Object.assign(privacy, p || {}); },
      showRewarded: async function () {
        if (privacy.adsEnabled === false) return false;
        await init();
        var rewarded = false, h = await A.addListener('onRewardedVideoAdReward', function () { rewarded = true; });
        try { await A.prepareRewardVideoAd({ adId: REWARDED_ID, isTesting: false }); await A.showRewardVideoAd(); }
        finally { try { h.remove(); } catch (e) {} }
        return rewarded;
      }
    };
  }

  /* ---- Connexion Google native (la fenêtre popup ne marche pas dans l'app) ---- */
  var S = PL.SocialLogin;
  if (S && WEB_CLIENT_ID.indexOf('REMPLACER') < 0) {
    window.CalmosAuth = {
      google: async function () {
        await S.initialize({ google: { webClientId: WEB_CLIENT_ID } });
        var r = await S.login({ provider: 'google', options: {} }), x = r && r.result;
        if (!x || !x.idToken) throw new Error('no token');
        return x.idToken;
      }
    };
  }

  /* ---- Achats de bulles (Google Play Billing, produits consommables bulles_p1 … bulles_p5) ---- */
  var packs = ['p1', 'p2', 'p3', 'p4', 'p5'], storeP = null;
  function getStore() {
    if (storeP) return storeP;
    storeP = new Promise(function (resolve, reject) {
      var tries = 0;
      (function go() {
        var P = window.CdvPurchase;
        if (!P) { if (++tries > 40) return reject(new Error('plugin')); return setTimeout(go, 250); }
        var store = P.store, GP = P.Platform.GOOGLE_PLAY;
        store.register(packs.map(function (k) { return { id: 'bulles_' + k, type: P.ProductType.CONSUMABLE, platform: GP }; }));
        store.when().approved(async function (tr) {
          var id = (tr.products && tr.products[0] && tr.products[0].id) || '';
          var token = (tr.nativePurchase && tr.nativePurchase.purchaseToken) || tr.purchaseToken;
          if (!token || !window.fbShop || !window.fbShop.playVerify) return;
          var r = await window.fbShop.playVerify(id.replace('bulles_', ''), token);
          if (r && !r.err) tr.finish(); // consomme l'achat ; sinon il sera relivré au prochain lancement
        });
        store.initialize([GP]).then(function () { resolve({ store: store, GP: GP }); }, reject);
      })();
    });
    return storeP;
  }
  window.CalmosBilling = {
    buy: async function (pack) {
      try {
        if (!window.fbShop || !(await window.fbShop.playReady())) return { err: 'login' };
        var o = await getStore(), offer = (o.store.get('bulles_' + pack, o.GP) || {}).getOffer && o.store.get('bulles_' + pack, o.GP).getOffer();
        if (!offer) return { err: 'x' };
        var r = await o.store.order(offer);
        return r && r.isError ? { err: 'x' } : {};
      } catch (e) { return { err: 'x' }; }
    }
  };
  getStore().catch(function () {}); // démarre tôt pour relivrer les achats en attente

  /* ---- Mises à jour du contenu sans passer par le Play Store (Capgo, mode manuel) ----
     Le zip et latest.json sont publiés sur GitHub Pages par `npm run update` (dépôt atplab/calmos-updates). Vérifié et appliqué dès l'ouverture (écran de chargement), avant d'utiliser l'app. */
  var U = PL.CapacitorUpdater;
  if (U) {
    U.notifyAppReady().catch(function () {});
    var ota = function (t) { window.__ota = t; };
    var ov = null;
    var showOv = function () {
      var go = function () {
        if (ov || !document.body) return;
        var st = document.createElement('style');
        st.textContent = '#cmo{animation:cmin .6s ease-out;position:fixed;inset:0;z-index:2147483647;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;background:linear-gradient(180deg,#1a2a7a 0%,#0e0f34 70%);color:#fff;font:600 17px system-ui,sans-serif;text-align:center;transition:opacity .5s}'
          + '@keyframes cmin{from{opacity:0}to{opacity:1}}'
          + '#cmo svg.z{width:92px;height:112px;margin-top:10px;animation:cmz 3.6s ease-in-out infinite;filter:drop-shadow(0 0 14px rgba(143,233,255,.55))}'
          + '@keyframes cmz{0%,100%{transform:translateY(7px) rotate(-3deg)}50%{transform:translateY(-9px) rotate(3deg)}}'
          + '#cmo .b{position:absolute;bottom:-30px;border-radius:50%;border:1.5px solid rgba(255,255,255,.55);background:rgba(255,255,255,.1);animation:cmb linear infinite}'
          + '@keyframes cmb{0%{transform:translateY(0) translateX(0);opacity:0}15%{opacity:.8}100%{transform:translateY(-115vh) translateX(18px);opacity:0}}'
          + '#cmo .g{position:absolute;bottom:-80px;border-radius:50%;border:2px solid rgba(255,255,255,.7);background:radial-gradient(circle at 32% 28%,rgba(255,255,255,.75),rgba(255,255,255,.12) 55%,rgba(143,233,255,.18));box-shadow:0 0 12px rgba(143,233,255,.35);animation:cmb linear forwards;touch-action:manipulation}'
          + '#cmo .g.p{animation:cmx .28s ease-out forwards;pointer-events:none}@keyframes cmx{to{transform:scale(1.7);opacity:0}}'
          + '#cmo .k{position:absolute;top:calc(env(safe-area-inset-top,0px) + 18px);left:0;right:0;font-size:15px;opacity:.9}#cmo .k small{display:block;font-weight:400;opacity:.65;font-size:12.5px;margin-top:3px}'
          + '#cmo .x{position:absolute;z-index:2;top:calc(env(safe-area-inset-top,0px) + 10px);right:12px;width:44px;height:44px;border:0;border-radius:50%;background:rgba(255,255,255,.14);color:#fff;font:600 18px system-ui,sans-serif;cursor:pointer}'
          + '#cmo .s{position:absolute;width:3px;height:3px;border-radius:50%;background:#ffe9a0;animation:cmt 3s ease-in-out infinite}'
          + '@keyframes cmt{0%,100%{opacity:.15}50%{opacity:.95}}'
          + '#cmo .t{opacity:.85;animation:cmp 2.6s ease-in-out infinite}@keyframes cmp{0%,100%{opacity:.45}50%{opacity:.95}}'
          + '#cmo .w{position:absolute;left:-10%;right:-10%;bottom:-8px;height:70px;border-radius:50% 50% 0 0;background:rgba(143,233,255,.1);animation:cmw 6s ease-in-out infinite alternate}'
          + '@keyframes cmw{from{transform:translateX(-4%)}to{transform:translateX(4%)}}'
          + '@media(prefers-reduced-motion:reduce){#cmo *{animation-duration:12s!important}}';
        document.head.appendChild(st);
        ov = document.createElement('div');
        ov.id = 'cmo';
        var h = '<div class="w"></div>', i;
        for (i = 0; i < 9; i++) h += '<i class="s" style="left:' + ((i * 37 + 8) % 92) + '%;top:' + ((i * 23 + 6) % 45) + '%;animation-delay:-' + (i * 0.7).toFixed(1) + 's"></i>';
        h += '<svg viewBox="-28 -66 56 68" class="z" aria-hidden="true"><defs><radialGradient id="cmzb" cx=".36" cy=".26" r=".98"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="#ece6ff"/><stop offset="1" stop-color="#b9acec"/></radialGradient><radialGradient id="cmzs" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#fff6c2"/><stop offset="1" stop-color="#ffc83d"/></radialGradient><radialGradient id="cmzg"><stop offset="0" stop-color="#fff3c0" stop-opacity=".85"/><stop offset="1" stop-color="#fff3c0" stop-opacity="0"/></radialGradient></defs><ellipse cx="0" cy="-1" rx="12" ry="2.2" fill="rgba(0,0,0,.2)"/><path d="M1 -38Q6 -46 4 -52" stroke="#a79bdc" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="4" cy="-55" r="9" fill="url(#cmzg)"/><polygon points="4.0,-60.8 5.6,-57.3 9.5,-56.8 6.7,-54.1 7.4,-50.3 4.0,-52.2 0.6,-50.3 1.3,-54.1 -1.5,-56.8 2.4,-57.3" fill="url(#cmzs)" stroke="#ffc83d" stroke-width="1.6" stroke-linejoin="round"/><path d="M0 -39C10 -39 15.5 -29 15.5 -19C15.5 -8 9 -2 0 -2C-9 -2 -15.5 -8 -15.5 -19C-15.5 -29 -10 -39 0 -39Z" fill="url(#cmzb)"/><ellipse cx="-6.4" cy="-30" rx="3.2" ry="5.4" fill="#fff" opacity=".6" transform="rotate(18 -6.4 -30)"/><ellipse cx="-5.8" cy="-23" rx="2.1" ry="2.9" fill="#4a4290"/><ellipse cx="5.8" cy="-23" rx="2.1" ry="2.9" fill="#4a4290"/><circle cx="-5.1" cy="-24.2" r=".85" fill="#fff"/><circle cx="6.5" cy="-24.2" r=".85" fill="#fff"/><path d="M-2.8 -16.4q2.8 2.6 5.6 0" stroke="#7a6cc0" stroke-width="1.5" fill="none" stroke-linecap="round"/><g fill="#efb63e"><circle cx="-11.8" cy="-18.4" r="1.1"/><circle cx="-9.6" cy="-16" r="1.1"/><circle cx="-12.6" cy="-15.2" r=".9"/><circle cx="11.8" cy="-18.4" r="1.1"/><circle cx="9.6" cy="-16" r="1.1"/><circle cx="12.6" cy="-15.2" r=".9"/></g><circle cx="-14.8" cy="-10" r="4.6" fill="#e6defc" stroke="#c7bbf0" stroke-width="1"/><circle cx="14.8" cy="-10" r="4.6" fill="#e6defc" stroke="#c7bbf0" stroke-width="1"/></svg>';
        h += '<button type="button" class="x" aria-label="Fermer">✕</button>';
        h += '<div class="k"><span id="cmn">🫧 0</span><small>Éclate les bulles en attendant</small></div>';
        h += '<div class="t">Vérification des mises à jour…</div>';
        ov.innerHTML = h;
        document.body.appendChild(ov);
        var n = 0, live = 0;
        ov.addEventListener('pointerdown', function (e) {
          var t = e.target; if (t.classList && t.classList.contains('x')) { closed = true; hideOv(); return; }
          if (!t.classList || !t.classList.contains('g') || t.classList.contains('p')) return;
          t.classList.add('p'); live--; n++;
          var c = document.getElementById('cmn'); if (c) c.textContent = '🫧 ' + n;
          setTimeout(function () { try { t.remove(); } catch (x) {} }, 300);
        });
        var spawn = function () {
          if (!ov || live >= 7) return;
          var d = document.createElement('i'), sz = 44 + Math.floor(Math.random() * 26);
          d.className = 'g'; live++;
          d.style.cssText = 'left:' + (4 + Math.random() * 78) + '%;width:' + sz + 'px;height:' + sz + 'px;animation-duration:' + (5.5 + Math.random() * 3) + 's';
          d.addEventListener('animationend', function (e) { if (e.animationName === 'cmb' && !d.classList.contains('p')) { live--; d.remove(); } });
          ov.appendChild(d);
        };
        ov.__gt = setInterval(spawn, 650); spawn(); spawn();
      };
      if (document.body) go(); else document.addEventListener('DOMContentLoaded', go);
    };
    var hideOv = function () { try { var o = ov; clearInterval(o && o.__gt); if (o) { o.style.opacity = '0'; setTimeout(function () { try { o.remove(); } catch (e) {} }, 500); } } catch (e) {} ov = null; };
    var tmo = function (p, ms) { return Promise.race([p, new Promise(function (_, rj) { setTimeout(function () { rj(new Error('délai dépassé')); }, ms); })]); };
    /* Vérification manuelle (bouton dans les Réglages) : cb(texte) reçoit l'état ; l'app se recharge si une mise à jour est installée. */
    window.CalmosUpdate = {
      check: async function (cb) {
        var say = function (t) { try { cb && cb(t); } catch (e) {} };
        try {
          say('Vérification…');
          var m = await tmo(fetch('https://atplab.github.io/calmos-updates/latest.json', { cache: 'no-store' }).then(function (r) { return r.json(); }), 8000);
          var nat = (await tmo(U.getBuiltinVersion(), 5000)).version, cur = await tmo(U.current(), 5000);
          if (!m.version) return say('Fichier de mise à jour illisible.');
          if (m.native !== nat) return say('Cette mise à jour demande une nouvelle version de l’application (Play Store).');
          if (cur && cur.bundle && cur.bundle.version === m.version) return say('Tu as déjà la dernière version ✓');
          say('Téléchargement…');
          var b = await tmo(U.download({ url: m.url, version: m.version, checksum: m.checksum }), 60000);
          await tmo(U.next({ id: b.id }), 5000);
          say('Installation… l’app va redémarrer.');
          var l = await tmo(U.list(), 5000), keep = [b.id, cur && cur.bundle && cur.bundle.id];
          for (var i = 0; i < l.bundles.length; i++) if (keep.indexOf(l.bundles[i].id) < 0) await U.delete({ id: l.bundles[i].id }).catch(function () {});
          await U.set({ id: b.id });
        } catch (e) { say('Impossible de vérifier pour l’instant. Réessaie avec une meilleure connexion.'); }
      }
    };
    var closed = false, ovT = setTimeout(showOv, 600), capT = setTimeout(function () { closed = true; hideOv(); }, (function () { try { return localStorage.getItem('ota:ran') ? 20000 : 60000; } catch (e) { return 20000; } })()); // plafond : 60 s au 1er démarrage, sinon 20 s // l'écran n'apparaît que si la vérification traîne
    (async function () {
      var reloading = false;
      try {
        ota('vérif…');
        var first = false; try { first = !localStorage.getItem('ota:ran'); localStorage.setItem('ota:ran', '1'); } catch (e) {} // 1er démarrage : 8 s, ensuite 4 s
        var m = await tmo(fetch('https://atplab.github.io/calmos-updates/latest.json', { cache: 'no-store' }).then(function (r) { return r.json(); }), first ? 8000 : 4000);
        var nat = (await tmo(U.getBuiltinVersion(), 5000)).version, cur = await tmo(U.current(), 5000);
        if (!m.version) return ota('fichier illisible');
        if (m.native !== nat) return ota('app ' + nat + ' ≠ ' + m.native);
        if (cur && cur.bundle && cur.bundle.version === m.version) return ota('à jour');
        var LK = 'ota:last', lt = null;
        try { lt = JSON.parse(localStorage.getItem(LK) || 'null'); } catch (e) {}
        if (lt && lt.v === m.version && Date.now() - lt.t < 6e5) return ota('déjà installée ou tentée récemment'); // anti-boucle de rechargement
        ota('téléchargement…');
        clearTimeout(ovT); if (!closed) { showOv(); if (ov) ov.lastChild.textContent = 'Zeni prépare la nouveauté…'; }
        var b = await tmo(U.download({ url: m.url, version: m.version, checksum: m.checksum }), 15000);
        await tmo(U.next({ id: b.id }), 5000);
        ota('installation…');
        var l = await tmo(U.list(), 5000), keep = [b.id, cur && cur.bundle && cur.bundle.id];
        for (var i = 0; i < l.bundles.length; i++) if (keep.indexOf(l.bundles[i].id) < 0) await U.delete({ id: l.bundles[i].id }).catch(function () {});
        if (closed) return ota('prête, relance l’app');
        try { localStorage.setItem('ota:last', JSON.stringify({ v: m.version, t: Date.now() })); } catch (e) {}
        reloading = true;
        await U.set({ id: b.id }); // recharge l'app avec la nouvelle version, avant qu'on ne l'utilise
      } catch (e) { ota('échec : ' + String(e && (e.message || e)).slice(0, 60)); }
      finally { clearTimeout(ovT); if (!reloading) hideOv(); else setTimeout(hideOv, 8000); }
    })();
  }
})();
