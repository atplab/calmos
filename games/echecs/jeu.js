// Échecs : salon, partie, horloge et glisser des pièces via Input (chHub…chDragInit)
function chHub() {
  (chInstall(),
    (cur = "chess"),
    nv("games"),
    theme("chess"),
    chTheme(),
    (CH.scr = "hub"),
    (CH.fid = ""),
    (CH.g = null),
    (CH.nw = !1),
    (app.innerHTML = `<div class="top stk">${bk("home")}<div class="chip">🫧 ${FLX()}</div></div><section class="glass story pt-chess"><i>♞</i><h2>La clairière</h2><p>Une partie d’échecs au calme, sous les sapins. Joue contre le Lapereau, le Renard ou le Hibou, à deux sur le même appareil, ou à distance contre un ami. Contre un ami ou sur le même appareil, tu choisis la durée au début : sans limite, ou de 1 à 30 minutes par joueur. Chaque partie un peu longue rapporte des 🫧, que tu peux dépenser plus bas en apparences pour tes pièces.</p></section><div id="chh"></div>`),
    "net" === CH.cfg.op && chNetInit(),
    chHubDraw(),
    window.scrollTo(0, 0));
}
function chNetInit() {
  (SO.col || "conn" === SO.st || socInit(), chSyncAll());
}
setTimeout(() =>
  Object.assign(act, {
    cdAlb: () => cdAlbum(),
    cdAlbBk: () => cbHub(),
    cdAlbV: (e) => cdAlbV(e),
    cdAlbX: () => {
      const e = $("#albv");
      e && e.remove();
    },
  }),
);
const chChip = (e, t, a, s, n) =>
  `<button class="chc${s ? " on" : ""}" data-a="chcfg" data-v="${e}:${t}" aria-pressed="${s ? "true" : "false"}">${n || ""}${a}</button>`;
function chStat(e) {
  const t = CH.G[e];
  if (CH.err[e]) return { k: "err", t: "Partie injoignable pour l’instant" };
  if (!t) return CH.got[e] || !CH.subs[e] ? { k: "new", t: "Pas encore de partie" } : { k: "load", t: "…" };
  const a = chRes(t);
  if (a) return { k: "end", t: 0 === a.w ? "Partie nulle" : a.w === t.me ? "Gagné" : "Perdu" };
  const s = t.tc ? " · " + t.tc + " min" : "";
  return chTurn(t) === t.me
    ? { k: "me", t: "À toi de jouer" + s }
    : { k: "them", t: "Au tour de " + chNm(e) + s };
}
function chHubDraw() {
  const e = $("#chh");
  if (!e) return;
  const t = CH.cfg,
    a = window.scrollX,
    s = window.scrollY,
    n = chLoad(),
    o = st.get("soc:me", null);
  let i = "";
  if (n) {
    const e = chReplay(n.mv);
    i += `<section class="glass play chres"><h2>Partie en cours</h2><p class="note" style="margin:0 0 12px">${"ai" === n.k ? (n.il ? "Niveau " + n.il + " · " : "") + "Contre le " + CHLV[n.lv - 1].n : "À deux, même appareil"} · ${Math.ceil(e.ms.length / 2)} coup${e.ms.length > 2 ? "s" : ""}${"ai" === n.k ? "" : " · " + chTcT(n.tc)}</p><div class="chrow"><button class="btn" data-a="chRes">Reprendre</button><button class="btn alt" data-a="chDrop">Laisser tomber</button></div></section>`;
  }
  ((i += `<section class="glass play chnew"><h2>Nouvelle partie</h2>\n <div class="chgr"><div class="chl">Adversaire</div><div class="chq">${chChip("op", "ai", "L’ordinateur", "ai" === t.op)}${chChip("op", "net", "Un ami", "net" === t.op)}${chChip("op", "loc", "Même appareil", "loc" === t.op)}</div></div>\n ${"ai" === t.op ? `<div class="chgr"><div class="chl">Niveau</div><div class="chq">${CHLV.map((e, a) => chChip("lv", a + 1, e.n, t.lv === a + 1, '<span class="chem">' + e.e + "</span>")).join("")}</div><p class="note chdn">${CHLV[t.lv - 1].d}.</p></div>` : ""}\n ${"loc" !== t.op ? `<div class="chgr"><div class="chl">Ta couleur</div><div class="chq">${chChip("col", 1, "Blancs", 1 === t.col)}${chChip("col", -1, "Noirs", -1 === t.col)}${chChip("col", 0, "Au hasard", 0 === t.col)}</div></div>` : ""}\n ${"ai" === t.op ? "" : `<div class="chgr"><div class="chl">Durée de la partie <span class="chs2">par joueur</span></div><div class="chq">${CHTC.map((e) => chChip("tc", e, chTcT(e), t.tc === e)).join("")}</div></div>`}\n ${"net" === t.op ? "" : '<button class="btn chgo" data-a="chStart">Commencer la partie</button>'}</section>`),
    "net" === t.op && (i += chFriends(o)),
    (i += chSkinUI()),
    (e.innerHTML = i),
    window.scrollTo(a, s));
}
function chSkinUI() {
  const e = chSkin();
  return `<section class="glass play chsk"><h2>Apparence des pièces</h2><p class="note" style="margin:0 0 10px">Les 🫧 gagnées en jouant servent à habiller tes pièces.</p>${CHSK.map(
    (t) => {
      const a = !!e.own[t.id],
        s = e.cur === t.id;
      return `<div class="chski${s ? " on" : ""}"><div class="chsp">${chPc(1, t.id)}${chPc(5, t.id)}${chPc(-2, t.id)}${chPc(-6, t.id)}</div><div class="chst"><b>${t.n}</b><small>${t.d}</small></div><button class="sb${a || UNL() ? "" : " buy"}" data-a="chsk" data-v="${t.id}"${s ? " disabled" : ""}>${s ? "Choisi" : a || UNL() ? "Choisir" : sgPxL("c", t)}</button></div>`;
    },
  ).join("")}</section>`;
}
function chFriends(e) {
  const t = (e, t, a) =>
    `<section class="glass play soc-i"><h2>${e}</h2><p class="note" style="margin:0">${t}</p>${a ? `<button class="btn" style="margin-top:14px" data-a="chSoc">${a}</button>` : ""}</section>`;
  if ("na" === SO.st)
    return t(
      "Une connexion est nécessaire",
      "Jouer contre un ami demande d’être connecté(e) et d’avoir ajouté cet ami : tout se passe dans l’onglet Social.",
      "Ouvrir Social",
    );
  if (!(SO.uid && SO.got && e && e.code)) {
    const e = "slow" === SO.st || "err" === SO.st;
    return t(
      e ? "Pas de réponse pour l’instant" : "Un instant…",
      e ? "Tes amis se chargeront dès que possible." : "Tes amis arrivent.",
    );
  }
  const a = Object.keys(e.fr).filter((t) => e.fr[t] > 0 && SO.P[t]);
  if (!a.length)
    return t(
      "Il te faut un ami",
      "Ajoute un ami avec son code ami, dans l’onglet Social : vous pourrez alors jouer ensemble.",
      "Ouvrir Social",
    );
  const s = { me: 0, them: 1, new: 2, load: 2, err: 3, end: 2 };
  return `<section class="glass play soc-i"><h2 class="s" style="margin-top:0">Inviter un ami</h2><p class="note" style="margin:0 0 8px">Ta couleur et la durée ci-dessus seront utilisées pour la nouvelle partie.</p>${a
    .sort((e, t) => s[chStat(e).k] - s[chStat(t).k] || chNm(e).localeCompare(chNm(t), "fr"))
    .map((e) => {
      const t = chStat(e),
        a = "new" === t.k || "end" === t.k ? "chInv" : "chOpen",
        s = "me" === t.k ? "Jouer" : "them" === t.k ? "Voir" : "err" === t.k ? "Ouvrir" : "Inviter";
      return `<div class="fr-i"><button class="fr-o" data-a="${"end" === t.k ? "chOpen" : a}" data-v="${esc(e)}">${socAv(e)}<span class="fr-t"><b>${esc(chNm(e))}</b><small${"me" === t.k ? ' class="scgo"' : ""}>${esc(t.t)}</small></span></button><div class="fr-b"><button class="sb${"me" === t.k ? " buy" : ""}" data-a="${a}" data-v="${esc(e)}">${s}</button></div></div>`;
    })
    .join("")}</section>`;
}
function chBegin(e, t) {
  ((CH.g = e),
    (CH.fid = t || ""),
    (CH.scr = "game"),
    (CH.fl = null),
    (CH.sel = -1),
    (CH.lg = []),
    (CH.pr = null),
    (CH.m = ""),
    (CH.cf = ""),
    (CH.pay = ""),
    (CH.busy = !1),
    (CH.think = !1),
    (CH.t0 = Date.now()),
    (CH.rc = null),
    (CH.flg = !1));
  const a = "ai" === e.k ? "Contre le " + chOpp(e).n : "net" === e.k ? chNm(t) : "À deux";
  (theme("chess"),
    chTheme(),
    ($("#nav").hidden = !0),
    (app.innerHTML = `<div class="top stk"><button class="back" data-a="chBk">‹ Échecs</button><span class="tl">${esc(a)}</span><div class="tr"><div class="chip">🫧 ${FLX()}</div></div></div><section class="glass play pg-chess" id="chg" aria-label="Partie d’échecs"></section>`),
    chDraw(),
    chAfter(),
    window.scrollTo(0, 0));
}
function chOpenNet(e) {
  if ((chInstall(), !SO.uid)) return chHub();
  chWatch(e);
  const t = CH.G[e];
  if (((CH.scr = "game"), (CH.fid = e), t)) return chBegin(t, e);
  ((CH.g = null),
    theme("chess"),
    chTheme(),
    ($("#nav").hidden = !0),
    (app.innerHTML = `<div class="top stk"><button class="back" data-a="chBk">‹ Échecs</button><span class="tl">${esc(chNm(e))}</span><div class="tr"><div class="chip">🫧 ${FLX()}</div></div></div><section class="glass play pg-chess" id="chg"><p class="note">Un instant…</p></section>`));
  const a = Date.now(),
    s = setInterval(() => {
      "game" === CH.scr && CH.fid === e && null !== $("#chg")
        ? CH.G[e]
          ? (clearInterval(s), chBegin(CH.G[e], e))
          : (CH.err[e] || Date.now() - a > 9e3) &&
            (clearInterval(s),
            ($("#chg").innerHTML =
              `<h2 style="margin:0 0 6px">Partie injoignable</h2><p class="note" style="margin:0 0 14px">${esc(CH.ec[e] || "Pas de réponse du serveur.")} Ton ami doit aussi t’avoir ajouté dans Social.</p><button class="btn" data-a="chBk">Retour</button>`))
        : clearInterval(s);
    }, 300);
}
function chNewGame(e) {
  const t = CH.cfg,
    a = t.col || (Math.random() < 0.5 ? 1 : -1),
    s = Math.random().toString(36).slice(2, 10),
    n = e && "ai" === e.k ? 0 : t.tc,
    o = [6e4 * n, 6e4 * n];
  return Object.assign({ id: s, mv: [], tc: n, rm: o, r: null, dr: 0, paid: 0, me: a, lv: t.lv }, e);
}
function chAfter() {
  const e = CH.g;
  if (e && "game" === CH.scr) {
    if ("ai" === e.k && !chRes(e) && chTurn(e) !== e.me && !CH.think) {
      ((CH.think = !0), chDraw());
      const t = e.mv.length,
        a = Date.now();
      setTimeout(() => {
        if (CH.g !== e || e.mv.length !== t) return void (CH.think = !1);
        const s = chSearch(chD(e).S, e.il ? chILp(e.il) : e.lv),
          n = Math.max(0, 700 - (Date.now() - a));
        setTimeout(() => {
          ((CH.think = !1), CH.g === e && e.mv.length === t && s && !chRes(e) ? chPlay(s) : chDraw());
        }, n);
      }, 60);
    }
    chTickOn();
  }
}
function chTickOn() {
  CH.tick ||
    (CH.tick = setInterval(() => {
      if ("game" !== CH.scr || !$("#chg")) return (clearInterval(CH.tick), void (CH.tick = 0));
      chClk();
    }, 250));
}
function chClk() {
  const e = CH.g;
  if (e && e.tc) {
    for (const t of [1, -1]) {
      const a = $('#chg .chk[data-c="' + t + '"]');
      if (a) {
        const s = chRem(e, t);
        ((a.textContent = chFmt(s)),
          a.classList.toggle("lo", s < 3e4),
          a.classList.toggle("on", chRun(e) && chTurn(e) === t));
      }
    }
    if (chRun(e) && !CH.flg && !CH.busy && Date.now() > CH.fgT) {
      const t = chTurn(e),
        a = chRem(e, t);
      a <= 0 && ("net" !== e.k || t === e.me || a <= -3e3) && chFlag(t);
    }
  }
}
async function chFlag(e) {
  const t = CH.g;
  if (!t) return;
  CH.flg = !0;
  const a = { rm: t.rm.slice(), r: t.r, dr: t.dr };
  ((t.rm[e > 0 ? 0 : 1] = 0), (t.r = { w: -e, y: "tmp" }), (t.dr = 0), (CH.rc = null));
  const s = await chCommit(a);
  ((CH.flg = !1), s || (CH.fgT = Date.now() + 5e3));
}
async function chPlay(e) {
  const t = CH.g;
  if (!t || CH.busy || chRes(t)) return !1;
  const a = chTurn(t),
    s = { mv: t.mv.slice(), rm: t.rm.slice(), dr: t.dr, r: t.r };
  t.tc && t.mv.length >= 2 && (t.rm[a > 0 ? 0 : 1] = Math.max(0, chRem(t, a)));
  const n = chD(t).S.b[e.t];
  (t.mv.push(chUci(e)),
    (t.dr = 0),
    (CH.t0 = Date.now()),
    (CH.sel = -1),
    (CH.lg = []),
    (CH.pr = null),
    (CH.m = ""),
    (CH.cf = ""),
    (CH.rc = null));
  const o = await chCommit(s);
  if (o) {
    const e = chRes(t);
    (sfx(e ? 523 : n ? 240 : 330, e ? 0.4 : 0.1), vib(e ? 25 : n ? 14 : 8));
  }
  return o;
}
async function chCommit(e) {
  const t = CH.g;
  if ("net" === t.k) {
    if (!(await chSend(t))) return (e && (Object.assign(t, e), (CH.rc = null)), chDraw(), !1);
  } else chSave();
  return (chPay(t), chDraw(), chAfter(), !0);
}
async function chSend(e) {
  const t = CH.subs[e.f];
  if (!t || !t.ref) return ((CH.m = "La partie n’est pas encore prête : réessaie dans un instant."), !1);
  if (CH.busy) return !1;
  ((CH.busy = !0), chDraw());
  try {
    await t.ref.set(chDoc(e));
  } catch (e) {
    return ((CH.busy = !1), (CH.m = "Ton coup n’est pas parti. " + scrWhy(e)), !1);
  }
  return ((CH.busy = !1), (CH.G[e.f] = e), (CH.got[e.f] = !0), !0);
}
const chCf = (e) =>
  CH.cf === e
    ? (clearTimeout(CH.cft), (CH.cf = ""), !0)
    : ((CH.cf = e),
      clearTimeout(CH.cft),
      (CH.cft = setTimeout(() => {
        ((CH.cf = ""), chDraw());
      }, 3500)),
      chDraw(),
      !1);
function chTry(e, t) {
  const a = CH.g;
  if (!a || CH.busy || CH.think || chRes(a) || !chMy(a) || CH.pr) return !1;
  const s = chLegal(chD(a).S).filter((a) => a.f === e && a.t === t);
  return !!s.length && (s.length > 1 ? ((CH.pr = { f: e, t: t }), chDraw(), !0) : (chPlay(s[0]), !0));
}
function chSel(e) {
  const t = CH.g;
  if (!t || CH.busy || CH.think || chRes(t) || !chMy(t)) return;
  const a = chD(t).S,
    s = a.b[e];
  ((CH.pr = null),
    (CH.m = ""),
    (CH.sel >= 0 && CH.sel !== e && chTry(CH.sel, e)) ||
      (s && s > 0 == a.t > 0 && e !== CH.sel
        ? ((CH.sel = e), (CH.lg = chLegal(a).filter((t) => t.f === e)))
        : ((CH.sel = -1), (CH.lg = [])),
      chDraw()));
}
function chDraw() {
  const e = $("#chg");
  if (!e || "game" !== CH.scr) return;
  const t = CH.g;
  if (!t) return;
  const a = chD(t),
    s = a.S,
    n = chRes(t),
    o = s.t,
    i = chMy(t),
    r = null !== CH.fl ? CH.fl : "loc" !== t.k && t.me < 0,
    l = r ? -1 : 1,
    c = -l,
    d = a.ms.length ? a.ms[a.ms.length - 1] : null,
    f = chChk(s) && !n ? chKing(s.b, o) : -1,
    u = {};
  for (let e = 0; e < 64; e++) s.b[e] && (u[s.b[e]] = (u[s.b[e]] || 0) + 1);
  const h = { 1: 8, 2: 2, 3: 2, 4: 2, 5: 1 };
  let p = 0;
  for (const e of [1, 2, 3, 4, 5]) p += (CHV[e] / 100) * ((u[e] || 0) - (u[-e] || 0));
  const m = (e) => {
    const a = Math.round(p * e);
    return `<div class="chpl${n || o !== e ? "" : " on"}">${chAvOf(t, e)}<span class="chn"><b>${esc(chWho(t, e))}</b><span class="chcap" aria-hidden="true">${((
      e,
    ) => {
      let t = "";
      for (const a of [5, 4, 3, 2, 1]) {
        const s = Math.max(0, h[a] - (u[-e * a] || 0));
        for (let n = 0; n < s; n++) t += chPc(-e * a);
      }
      return t;
    })(
      e,
    )}${a > 0 ? "<em>+" + a + "</em>" : ""}</span></span>${t.tc ? `<span class="chk${chRun(t) && o === e ? " on" : ""}${chRem(t, e) < 3e4 ? " lo" : ""}" data-c="${e}">${chFmt(chRem(t, e))}</span>` : ""}</div>`;
  };
  let b = "";
  for (let e = 0; e < 64; e++) {
    const t = r ? 63 - e : e,
      a = s.b[t],
      n = t >> 3,
      o = 7 & t,
      i = ["chs", (n + o) & 1 ? "d" : "l"];
    (CH.sel === t && i.push("sel"),
      !d || (t !== d.f && t !== d.t) || i.push("lm"),
      t === f && i.push("ck"),
      CH.lg.some((e) => e.t === t) &&
        i.push(a || (CH.sel >= 0 && 1 === Math.abs(s.b[CH.sel]) && t === s.ep) ? "cp" : "mv"));
    const l =
      (e % 8 == 0 ? `<i class="cr">${8 - n}</i>` : "") + (e >= 56 ? `<i class="cf">${CHF[o]}</i>` : "");
    b += `<div class="${i.join(" ")}" role="gridcell" data-a="chq" data-v="${t}" aria-label="${chSq(t)}${a ? ", " + CHPN[a < 0 ? -a : a] + (a > 0 ? " blanc" : " noir") : ""}">${l}${a ? chPc(a) : ""}</div>`;
  }
  const g = CH.pr
    ? `<div class="chpr" role="dialog" aria-label="Choisir la pièce"><b>Promotion</b><div>${[5, 4, 3, 2].map((e) => `<button data-a="chpr" data-v="${e}" aria-label="${CHPN[e]}">${chPc(o > 0 ? e : -e)}</button>`).join("")}</div></div>`
    : "";
  let E;
  if (n) E = chMsg(t, n);
  else if (CH.m) E = CH.m;
  else if (CH.think) E = "Le " + chOpp(t).n + " réfléchit…";
  else {
    const e = chChk(s) ? "Échec au roi. " : "";
    E =
      "loc" === t.k
        ? e + (o > 0 ? "Aux blancs de jouer." : "Aux noirs de jouer.")
        : i
          ? e + "À toi de jouer."
          : e + "Au tour de " + chWho(t, o) + ".";
  }
  let y = "";
  for (let e = 0; e < a.sans.length; e++)
    y +=
      (e % 2 ? "" : `<span class="chnb">${e / 2 + 1}.</span>`) +
      `<span class="chmv${e === a.sans.length - 1 ? " last" : ""}">${esc(a.sans[e])}</span>`;
  let v = '<button class="sb" data-a="chfl">⇅ Retourner</button>';
  n ||
    ("net" !== t.k &&
      !t.tc &&
      t.mv.length &&
      (v += '<button class="sb" data-a="chUndo">↶ Reprendre le coup</button>'),
    "net" === t.k &&
      t.mv.length >= 2 &&
      !t.dr &&
      (v += '<button class="sb" data-a="chDraw">Proposer nulle</button>'),
    "net" === t.k && t.dr === t.me && (v += '<button class="sb" disabled>Nulle proposée…</button>'),
    "loc" === t.k &&
      t.mv.length >= 2 &&
      (v += `<button class="sb${"draw" === CH.cf ? " buy" : ""}" data-a="chDraw">${"draw" === CH.cf ? "Confirmer la nulle" : "Nulle"}</button>`),
    (v += `<button class="sb${"res" === CH.cf ? " buy" : ""}" data-a="chQuit">${"res" === CH.cf ? "Confirmer l’abandon" : "Abandonner"}</button>`));
  const A =
      n || "net" !== t.k || t.dr !== -t.me
        ? ""
        : `<div class="chof"><b>${esc(chNm(t.f))} propose la nulle.</b><div class="chrow"><button class="btn" data-a="chAcc">Accepter</button><button class="btn alt" data-a="chRef">Refuser</button></div></div>`,
    S = n
      ? `<div class="chend"><b>${esc(E)}</b>${CH.pay ? `<span class="chpay">${CH.pay}</span>` : ""}<div class="chrow"><button class="btn" data-a="chRev"${CH.busy ? " disabled" : ""}>Revanche</button><button class="btn alt" data-a="chBk">Menu</button></div></div>`
      : "",
    x = $("#chmv"),
    M = x ? x.scrollLeft : 0;
  e.innerHTML = `${S}${m(c)}<div class="chbw sk-${CH.sk}${CH.think ? " th" : ""}"><div class="chb${r ? " fl" : ""}" role="grid" aria-label="Échiquier">${b}</div>${g}</div>${m(l)}${n ? "" : `<p class="m chm" id="chm" role="status" aria-live="polite">${esc(E)}</p>`}${A}<div class="chmvs" id="chmv" aria-label="Coups joués">${y || '<span class="note">Les coups apparaîtront ici.</span>'}</div><div class="cha">${v}</div>`;
  const L = $("#chmv");
  L && (L.scrollLeft = x && M < L.scrollWidth - L.clientWidth - 40 ? M : L.scrollWidth);
}
const chMine = () => ("game" === CH.scr && CH.g ? CH.g : null);
const CHA = {
  chSoc: () => socScreen(),
  chsk: (e) => {
    const t = CHSK.find((t) => t.id === e);
    if (!t) return;
    const a = chSkin();
    if (!a.own[t.id]) {
      if (!spend(sgPx("c", t))) return;
      a.own[t.id] = 1;
    }
    ((a.cur = t.id), st.set("ch:sk", a), (CH.sk = t.id), chTheme());
    const s = $(".chip");
    (s && (s.textContent = "🫧 " + FLX()), chHubDraw());
  },
  chcfg: (e) => {
    const [t, a] = e.split(":"),
      s = +a;
    ("op" === t && ["ai", "net", "loc"].includes(a)
      ? (CH.cfg.op = a)
      : "lv" === t && s >= 1 && s <= 3
        ? (CH.cfg.lv = s)
        : "col" === t && [1, -1, 0].includes(s)
          ? (CH.cfg.col = s)
          : "tc" === t && CHTC.includes(s) && (CH.cfg.tc = s),
      st.set("ch:cfg", CH.cfg),
      "net" === CH.cfg.op && chNetInit(),
      chHubDraw());
  },
  chStart: () => {
    const e = CH.cfg;
    if ("net" === e.op) return;
    const t = "ai" === e.op ? chNewGame({ k: "ai" }) : chNewGame({ k: "loc", me: 1 });
    ("ai" === t.k && (t.lv = e.lv), st.set("ch:g", null), chBegin(t), chSave());
  },
  chRes: () => {
    const e = chLoad();
    e && chBegin(e);
  },
  chDrop: () => {
    (st.set("ch:g", null), chHubDraw());
  },
  chOpen: (e) => chOpenNet(e),
  chInv: async (e) => {
    if (!SO.uid || CH.nw) return;
    chWatch(e);
    const t = CH.subs[e];
    if (!t) return;
    CH.nw = !0;
    try {
      await t.p;
    } catch (e) {}
    const a = CH.G[e];
    if (a && !chRes(a)) return ((CH.nw = !1), chOpenNet(e));
    const s = CH.cfg.col || (Math.random() < 0.5 ? 1 : -1),
      n = chNewGame({ k: "net", f: e, me: s, p: s > 0 ? [SO.uid, e] : [e, SO.uid] });
    if ((socInv(e, "chess"), (CH.scr = "game"), (CH.fid = e), (CH.g = n), !t.ref))
      return (
        (CH.nw = !1),
        (CH.m = "La partie n’est pas encore prête : réessaie dans un instant."),
        chOpenNet(e)
      );
    CH.busy = !1;
    try {
      await t.ref.set(chDoc(n));
    } catch (e) {
      ((CH.nw = !1), (CH.scr = "hub"), (CH.g = null));
      const t = $("#chh");
      return void (
        t &&
        t.insertAdjacentHTML(
          "afterbegin",
          `<section class="glass play soc-i"><p class="note" style="margin:0">Invitation non envoyée. ${esc(scrWhy(e))}</p></section>`,
        )
      );
    }
    ((CH.nw = !1), (CH.G[e] = n), (CH.got[e] = !0), chBegin(n, e));
  },
  chBk: () => {
    ((CH.scr = "hub"), chHub());
  },
  chq: (e) => chSel(+e),
  chpr: (e) => {
    const t = CH.g,
      a = CH.pr;
    if (!t || !a) return;
    const s = chLegal(chD(t).S).find((t) => t.f === a.f && t.t === a.t && t.p === +e);
    ((CH.pr = null), s ? chPlay(s) : chDraw());
  },
  chfl: () => {
    const e = CH.g;
    if (!e) return;
    const t = null !== CH.fl ? CH.fl : "loc" !== e.k && e.me < 0;
    ((CH.fl = !t), chDraw());
  },
  chUndo: () => {
    const e = CH.g;
    if (!e || "net" === e.k || e.tc || CH.think || !e.mv.length) return;
    const t = "ai" === e.k && chTurn(e) === e.me ? 2 : 1;
    (e.mv.splice(Math.max(0, e.mv.length - t)),
      (e.r = null),
      (CH.rc = null),
      (CH.sel = -1),
      (CH.lg = []),
      (CH.pr = null),
      (CH.m = ""),
      chSave(),
      chDraw(),
      chAfter());
  },
  chDraw: async () => {
    const e = CH.g;
    if (e && !chRes(e) && !CH.busy) {
      if ("loc" === e.k) {
        if (!chCf("draw")) return;
        return ((e.r = { w: 0, y: "acc" }), (CH.rc = null), (CH.cf = ""), chSave(), void chDraw());
      }
      if ("net" === e.k && !e.dr) {
        const t = { dr: e.dr };
        ((e.dr = e.me),
          (CH.m = "Nulle proposée à " + chNm(e.f) + "."),
          (await chSend(e)) || Object.assign(e, t),
          chDraw());
      }
    }
  },
  chAcc: async () => {
    const e = CH.g;
    if (!e || "net" !== e.k || e.dr !== -e.me || chRes(e) || CH.busy) return;
    const t = { r: e.r, dr: e.dr };
    ((e.r = { w: 0, y: "acc" }), (e.dr = 0), (CH.rc = null), await chCommit(t));
  },
  chRef: async () => {
    const e = CH.g;
    if (!e || "net" !== e.k || e.dr !== -e.me || CH.busy) return;
    const t = { dr: e.dr };
    ((e.dr = 0), (await chSend(e)) || Object.assign(e, t), chDraw());
  },
  chQuit: async () => {
    const e = CH.g;
    if (!e || chRes(e) || CH.busy) return;
    if (!chCf("res")) return;
    const t = "loc" === e.k ? chTurn(e) : e.me,
      a = { r: e.r, dr: e.dr };
    ((e.r = { w: -t, y: "res" }), (e.dr = 0), (CH.rc = null), (CH.cf = ""), await chCommit(a));
  },
  chRev: async () => {
    const e = CH.g;
    if (!e || !chRes(e) || CH.busy) return;
    if (((CH.pay = ""), "net" === e.k)) {
      const t = e.f,
        a = CH.subs[t];
      if (!a || !a.ref) return;
      const s = chNewGame({
        k: "net",
        f: t,
        me: -e.me,
        p: [e.p[1], e.p[0]],
        tc: e.tc,
        rm: [6e4 * e.tc, 6e4 * e.tc],
      });
      ((CH.busy = !0), chDraw());
      try {
        await a.ref.set(chDoc(s));
      } catch (e) {
        return ((CH.busy = !1), (CH.m = "La revanche n’est pas partie. " + scrWhy(e)), void chDraw());
      }
      return ((CH.busy = !1), (CH.G[t] = s), void chBegin(s, t));
    }
    const N = e.il ? st.get("ch:il", 1) : 0,
      t = chNewGame(
        N
          ? chILg(N)
          : { k: e.k, me: "loc" === e.k ? 1 : -e.me, lv: e.lv, tc: e.tc, rm: [6e4 * e.tc, 6e4 * e.tc] },
      );
    (st.set("ch:g", null), chBegin(t), chSave());
  },
};
const chInstall = () => {
  (chDragInit(), Object.assign(act, CHA));
};
let CHD = null;
let CHDt = 0;
const chDragInit = () => {
  if (window.__chd) return;
  window.__chd = 1;
  const e = (e, t) => {
      const a = document.elementFromPoint(e, t);
      return a && a.closest ? a.closest("#chg .chs[data-v]") : null;
    },
    t = () => {
      document.querySelectorAll(".chs.dh").forEach((e) => e.classList.remove("dh"));
    },
    a = () => {
      (CHD && (CHD.g && CHD.g.remove(), CHD.t && CHD.t.classList.remove("dg")), t(), (CHD = null));
    };
  (Input.sur(
    "toucher",
    (q, { evt: e }) => {
      CHD && a();
      const t = e.target.closest && e.target.closest("#chg .chs[data-v]");
      if (!t || ("mouse" === e.pointerType && 0 !== e.button)) return;
      const s = chMine();
      if (!s || CH.busy || CH.think || chRes(s) || !chMy(s) || CH.pr) return;
      const n = +t.dataset.v,
        o = chD(s).S,
        i = o.b[n];
      i && i > 0 == o.t > 0 && (CHD = { t: t, id: e.pointerId, x0: e.clientX, y0: e.clientY, on: !1, sq: n });
    },
    { cible: document, capture: !0 },
  ),
    Input.sur(
      ["glisser", "survoler"],
      (q, { evt: s }) => {
        const n = CHD;
        if (!n || s.pointerId !== n.id) return;
        if (!n.on) {
          if (Math.hypot(s.clientX - n.x0, s.clientY - n.y0) < 8) return;
          const e = chMine();
          if (!e) return a();
          n.on = !0;
          const t = chD(e).S;
          ((CH.sel = n.sq), (CH.lg = chLegal(t).filter((e) => e.f === n.sq)), chDraw());
          const o = document.querySelector('#chg .chs[data-v="' + n.sq + '"]');
          n.t = o;
          const i = document.createElement("div");
          ((i.className = "chgh"), (i.innerHTML = o ? o.innerHTML.replace(/<i[^>]*>.*?<\/i>/g, "") : ""));
          const r = o ? o.getBoundingClientRect().width : 48;
          ((i.style.width = i.style.height = 1.15 * r + "px"),
            document.body.appendChild(i),
            (n.g = i),
            o && o.classList.add("dg"),
            vib && vib(6));
        }
        s.preventDefault();
        const o = parseFloat(n.g.style.width) || 48;
        ((n.g.style.left = s.clientX - o / 2 + "px"), (n.g.style.top = s.clientY - 0.8 * o + "px"), t());
        const i = e(s.clientX, s.clientY);
        i && CH.lg.some((e) => e.t === +i.dataset.v) && i.classList.add("dh");
      },
      { cible: document, passive: !1 },
    ));
  const s = (t) => {
    const s = CHD;
    if (!s || t.pointerId !== s.id) return;
    if (!s.on) return void (CHD = null);
    CHDt = Date.now();
    const n = "pointerup" === t.type ? e(t.clientX, t.clientY) : null,
      o = n ? +n.dataset.v : -1,
      i = s.sq;
    (a(),
      (o >= 0 && o !== i && chTry(i, o)) ||
        ((CH.sel = o === i ? i : -1), CH.sel < 0 && (CH.lg = []), chDraw()));
  };
  (Input.sur("lacher", (q, { evt: t }) => s(t), { cible: document, annulation: !0 }),
    window.addEventListener(
      "click",
      (e) => {
        Date.now() - CHDt < 80 && (e.stopPropagation(), e.preventDefault());
      },
      !0,
    ),
    document.addEventListener("dragstart", (e) => {
      CHD && e.preventDefault();
    }));
};
