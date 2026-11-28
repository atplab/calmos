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
  (document.addEventListener(
    "pointerdown",
    (e) => {
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
    !0,
  ),
    document.addEventListener(
      "pointermove",
      (s) => {
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
      { passive: !1 },
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
  (document.addEventListener("pointerup", s),
    document.addEventListener("pointercancel", s),
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
const DBT = [
  "La chambre",
  "La salle de bain",
  "La cuisine",
  "Le condo",
  "La chambre des parents",
  "Ta chambre",
  "La salle de bain",
  "La cuisine",
  "Le salon",
  "La cour",
];
function demBook() {
  const e = G.find((e) => "demenage" === e.id),
    t = DRM.length,
    a = [...Array(t).keys()].filter((e) => st.get(ckey("demenage") + ":" + e, !1)),
    s = [...Array(t).keys()].find((e) => !a.includes(e)),
    n = [
      { k: "cov" },
      { k: "pro" },
      ...a.map((e) => ({ k: "fr", n: e })),
      void 0 !== s ? { k: "lk", n: s } : { k: "end" },
    ];
  storyBook({
    ks: a,
    P: n,
    pg: (t, a, s) =>
      "cov" === t.k
        ? '<div class="bki"><svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><path d="M8 32 32 10l24 22" fill="none" stroke="#ffe9a0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 30v24h36V30" fill="#e8b98a" stroke="#ffe9a0" stroke-width="3" stroke-linejoin="round"/><rect x="26" y="38" width="12" height="16" rx="3" fill="#9a5f3a"/></svg><h2>Le déménagement</h2><p>l’histoire d’une maison qui se remplit</p><p class="bkh">Fais glisser ou touche un bord pour ouvrir</p></div>'
        : "pro" === t.k
          ? `<div class="bki"><span class="bke">Prologue</span><p class="bkt">${e.s}</p>${s}</div>`
          : "fr" === t.k
            ? `<div class="bki"><span class="bke">Niveau ${t.n + 1} · ${DBT[t.n]}</span><p class="bkt">${e.wl[t.n]}</p>${s}</div>`
            : "lk" === t.k
              ? `<div class="bki"><span class="bke">Niveau ${t.n + 1}</span><p class="bkt" style="margin-top:34px">Cette page s’écrira quand tu auras rangé cette pièce.</p>${s}</div>`
              : `<div class="bki"><span class="bke">La maison est complète</span><p class="bkt" style="margin-top:34px">Tout est rangé. Bonne nuit, et bienvenue chez toi.</p>${s}</div>`,
  });
}
(() => {
  if (!st.get("mig72", 0)) {
    st.set("mig72", 1);
    for (let e = 0; e < 10; e++) {
      const t = "c:mots:" + (40 + e),
        a = "c:mots:" + (60 + e),
        s = "k:mots:" + (40 + e);
      (st.get(t, !1) && (st.set(a, !0), st.set(t, null)),
        st.get(s, !1) && (st.set("k:mots:" + (60 + e), !0), st.set(s, null)));
    }
    for (let e = 0; e < 70; e++) st.set("p:mots:" + e, null);
  }
})();
var aqMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  off: 0,
  PA: [
    [48, [60, 64, 67, 71]],
    [45, [57, 60, 64, 67]],
    [41, [53, 57, 60, 64]],
    [43, [55, 59, 62, 64]],
    [40, [52, 55, 59, 62]],
    [45, [57, 60, 64, 67]],
    [41, [53, 57, 60, 64]],
    [43, [55, 59, 62, 67]],
  ],
  PB: [
    [41, [53, 57, 60, 64]],
    [40, [52, 55, 59, 62]],
    [38, [50, 53, 57, 60]],
    [43, [55, 59, 62, 67]],
    [41, [53, 57, 60, 64]],
    [40, [52, 55, 59, 62]],
    [45, [57, 60, 64, 67]],
    [43, [55, 60, 62, 67]],
  ],
  MA: [
    [
      [0, 79, 3],
      [3, 76, 1],
      [4, 79, 2],
      [6, 84, 2],
    ],
    [
      [0, 81, 3],
      [3, 79, 1],
      [4, 76, 4],
    ],
    [
      [0, 77, 3],
      [3, 81, 1],
      [4, 84, 2],
      [6, 81, 2],
    ],
    [
      [0, 79, 4],
      [4, 74, 2],
      [6, 71, 2],
    ],
    [
      [0, 76, 3],
      [3, 79, 1],
      [4, 83, 2],
      [6, 79, 2],
    ],
    [
      [0, 81, 2],
      [2, 84, 2],
      [4, 81, 2],
      [6, 76, 2],
    ],
    [
      [0, 81, 3],
      [3, 79, 1],
      [4, 77, 2],
      [6, 76, 2],
    ],
    [
      [0, 74, 4],
      [4, 79, 3],
    ],
  ],
  MB: [
    [
      [0, 84, 2],
      [2, 81, 2],
      [4, 84, 2],
      [6, 89, 2],
    ],
    [
      [0, 88, 3],
      [3, 83, 1],
      [4, 79, 4],
    ],
    [
      [0, 86, 2],
      [2, 81, 2],
      [4, 77, 2],
      [6, 81, 2],
    ],
    [
      [0, 83, 4],
      [4, 79, 2],
      [6, 74, 2],
    ],
    [
      [0, 84, 3],
      [3, 86, 1],
      [4, 88, 2],
      [6, 84, 2],
    ],
    [
      [0, 83, 2],
      [2, 79, 2],
      [4, 83, 2],
      [6, 88, 2],
    ],
    [
      [0, 84, 3],
      [3, 81, 1],
      [4, 79, 2],
      [6, 76, 2],
    ],
    [
      [0, 79, 6],
      [6, 74, 2],
    ],
  ],
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  gl(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1, a + 0.6],
      [2.76, 0.12, 0.3],
      [5.4, 0.04, 0.12],
    ].forEach(([a, i, r]) => {
      const l = o.createOscillator(),
        c = o.createGain();
      ((l.type = "sine"),
        (l.frequency.value = e * a),
        c.gain.setValueAtTime(1e-4, t),
        c.gain.exponentialRampToValueAtTime(s * i, t + 0.006),
        c.gain.exponentialRampToValueAtTime(1e-4, t + r),
        l.connect(c),
        c.connect(n),
        l.start(t),
        l.stop(t + r + 0.05));
    });
  },
  pad(i, pd, bs, len, P) {
    const e = this.L,
      t = AC,
      f = t.createBiquadFilter();
    ((f.type = "lowpass"), (f.frequency.value = 1100), (f.Q.value = 0.4));
    const g = t.createGain();
    (g.gain.setValueAtTime(1e-4, i),
      g.gain.linearRampToValueAtTime(0.055 * P, i + 0.4 * len),
      g.gain.setValueAtTime(0.055 * P, i + 0.8 * len),
      g.gain.linearRampToValueAtTime(1e-4, i + len + 1),
      f.connect(g),
      g.connect(e.bus),
      pd.forEach((n) =>
        [-6, 6].forEach((d) => {
          const o = t.createOscillator();
          ((o.type = "triangle"),
            (o.frequency.value = this.mf(n)),
            (o.detune.value = d),
            o.connect(f),
            o.start(i),
            o.stop(i + len + 1.1));
        }),
      ));
    const o = t.createOscillator(),
      b = t.createGain();
    ((o.type = "sine"),
      (o.frequency.value = this.mf(bs)),
      b.gain.setValueAtTime(1e-4, i),
      b.gain.linearRampToValueAtTime(0.09 * P, i + 0.15),
      b.gain.setValueAtTime(0.09 * P, i + len - 0.15),
      b.gain.linearRampToValueAtTime(1e-4, i + len + 0.3),
      o.connect(b),
      b.connect(e.out),
      o.start(i),
      o.stop(i + len + 0.4));
  },
  pulse(i) {
    const t = AC,
      o = t.createOscillator(),
      g = t.createGain();
    ((o.type = "sine"),
      o.frequency.setValueAtTime(95, i),
      o.frequency.exponentialRampToValueAtTime(52, i + 0.15),
      g.gain.setValueAtTime(1e-4, i),
      g.gain.exponentialRampToValueAtTime(0.07, i + 0.01),
      g.gain.exponentialRampToValueAtTime(1e-4, i + 0.35),
      o.connect(g),
      g.connect(this.L.out),
      o.start(i),
      o.stop(i + 0.4));
  },
  tick() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (e && t)
      for (this.t < t.currentTime && (this.t = t.currentTime + 0.12); this.t < t.currentTime + 0.5;) {
        const s = this.s,
          b = s >> 3,
          k = 7 & s,
          sec = b >> 3,
          bi = 7 & b,
          i = this.t,
          E = 0.43,
          [bs, pd] = (2 === sec ? this.PB : this.PA)[bi];
        0 === k && this.pad(i, pd, bs, 8 * E, [0.6, 0.9, 1.1, 0.95][sec]);
        if (sec >= 1 && !(1 & k) && !(3 === sec && 7 === bi)) {
          const ai = (1 & bi ? [0, 2, 1, 3] : [0, 1, 2, 3])[k >> 1];
          this.gl(this.mf(pd[ai] + 12), i, 0.5, 2 === sec ? 0.026 : 0.02, e.bus);
        }
        2 === sec && (0 === k || 4 === k) && this.pulse(i);
        if (0 !== sec || bi >= 4) {
          const g = 0 === sec ? 0.05 : 0.078;
          (2 === sec ? this.MB : this.MA)[bi].forEach(([st, n, d]) => {
            st === k &&
              (this.gl(this.mf(n), i, d * E, g, e.bus),
              3 === sec && d >= 2 && this.gl(this.mf(n + 12), i + 0.01, d * E, 0.03, e.bus));
          });
        }
        7 === k &&
          sec > 0 &&
          Math.random() < 0.4 &&
          this.gl(this.mf(pd[(4 * Math.random()) | 0] + 24), i, 0.4, 0.028, e.bus);
        this.t += E;
        let n = s + 1;
        (n >= 256 && (n = 64), (this.s = n));
      }
  },
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    ((t.gain.value = 0), t.connect(mg));
    const a = e.createDelay(1.5);
    a.delayTime.value = 0.45;
    const s = e.createGain();
    s.gain.value = 0.2;
    const n = e.createBiquadFilter();
    ((n.type = "lowpass"), (n.frequency.value = 1700), a.connect(n), n.connect(s), s.connect(a));
    const o = e.createGain();
    ((o.gain.value = 0.28), n.connect(o), o.connect(t));
    const i = e.createGain();
    (i.connect(t), i.connect(a));
    const r = e.createGain();
    r.gain.value = 0.55;
    const l = e.createBiquadFilter();
    ((l.type = "lowpass"), (l.frequency.value = 650), (l.Q.value = 0.8), l.connect(r), r.connect(t));
    const c = e.createOscillator(),
      d = e.createGain();
    ((c.frequency.value = 0.07),
      (d.gain.value = 360),
      c.connect(d),
      d.connect(l.frequency),
      c.start(),
      [130.8, 196, 261.6].forEach((t, a) =>
        [-7, 7].forEach((s) => {
          const n = e.createOscillator(),
            o = e.createGain(),
            i = e.createOscillator(),
            r = e.createGain();
          ((n.type = "triangle"),
            (n.frequency.value = t),
            (n.detune.value = s),
            (o.gain.value = 0.022),
            (i.frequency.value = 0.05 + 0.023 * a),
            (r.gain.value = 0.02),
            i.connect(r),
            r.connect(o.gain),
            n.connect(o),
            o.connect(l),
            n.start(),
            i.start());
        }),
      ));
    const f = 3 * e.sampleRate,
      u = e.createBuffer(1, f, e.sampleRate),
      h = u.getChannelData(0);
    let p = 0;
    for (let e = 0; e < f; e++) ((p = 0.97 * p + 0.03 * (2 * Math.random() - 1)), (h[e] = 7 * p));
    const m = e.createBufferSource();
    ((m.buffer = u), (m.loop = !0));
    const b = e.createBiquadFilter();
    ((b.type = "bandpass"), (b.frequency.value = 420), (b.Q.value = 0.6));
    const g = e.createGain();
    g.gain.value = 0.04;
    const E = e.createOscillator(),
      y = e.createGain();
    ((E.frequency.value = 0.11),
      (y.gain.value = 0.08),
      E.connect(y),
      y.connect(g.gain),
      m.connect(b),
      b.connect(g),
      g.connect(t),
      m.start(),
      E.start(),
      (this.L = { out: t, bus: i }));
  },
  pip() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (!e || !t) return;
    const a = t.currentTime,
      s = t.createOscillator(),
      n = t.createGain();
    if (((s.type = "sine"), Math.random() < 0.55)) {
      const t = 380 + 520 * Math.random();
      (s.frequency.setValueAtTime(t, a),
        s.frequency.exponentialRampToValueAtTime(1.7 * t, a + 0.14),
        n.gain.setValueAtTime(1e-4, a),
        n.gain.exponentialRampToValueAtTime(0.1, a + 0.02),
        n.gain.exponentialRampToValueAtTime(1e-4, a + 0.2),
        s.connect(n),
        n.connect(e.bus),
        s.start(a),
        s.stop(a + 0.25));
    } else {
      const o = [523.3, 587.3, 659.3, 784, 880, 1046.5],
        i = o[(Math.random() * o.length) | 0],
        r = t.createOscillator(),
        l = t.createGain();
      ((s.frequency.value = i),
        (r.frequency.value = 2 * i),
        (r.type = "sine"),
        (l.gain.value = 0.25),
        n.gain.setValueAtTime(1e-4, a),
        n.gain.exponentialRampToValueAtTime(0.08, a + 0.012),
        n.gain.exponentialRampToValueAtTime(1e-4, a + 1.5),
        s.connect(n),
        r.connect(l),
        l.connect(n),
        n.connect(e.bus),
        s.start(a),
        r.start(a),
        s.stop(a + 1.6),
        r.stop(a + 1.6));
    }
  },
  fx(e, t) {
    const a = AC;
    if (!a || !mg) return;
    const s = a.currentTime;
    if (!this.F) {
      const e = a.createGain(),
        t = a.createDelay(1),
        s = a.createGain(),
        n = a.createBiquadFilter(),
        o = a.createGain();
      ((t.delayTime.value = 0.27),
        (s.gain.value = 0.33),
        (n.type = "lowpass"),
        (n.frequency.value = 1600),
        (o.gain.value = 0.45),
        e.connect(mg),
        e.connect(t),
        t.connect(n),
        n.connect(s),
        s.connect(t),
        n.connect(o),
        o.connect(mg));
      const i = 0.6 * a.sampleRate,
        r = a.createBuffer(1, i, a.sampleRate),
        l = r.getChannelData(0);
      for (let e = 0; e < i; e++) l[e] = 2 * Math.random() - 1;
      this.F = { bus: e, nb: r };
    }
    const n = this.F,
      o = (e, t, o, i) => {
        const r = a.createBufferSource(),
          l = a.createBiquadFilter(),
          c = a.createGain();
        ((r.buffer = n.nb),
          (l.type = "bandpass"),
          (l.Q.value = 0.9),
          l.frequency.setValueAtTime(o, s),
          l.frequency.exponentialRampToValueAtTime(i, s + t),
          c.gain.setValueAtTime(1e-4, s),
          c.gain.exponentialRampToValueAtTime(e, s + 0.25 * t),
          c.gain.exponentialRampToValueAtTime(1e-4, s + t),
          r.connect(l),
          l.connect(c),
          c.connect(n.bus),
          r.start(s),
          r.stop(s + t + 0.05));
      },
      i = (e, t, s) => {
        const o = a.createOscillator(),
          i = a.createGain();
        ((o.type = "sine"),
          o.frequency.setValueAtTime(t, e),
          o.frequency.exponentialRampToValueAtTime(1.8 * t, e + 0.12),
          i.gain.setValueAtTime(1e-4, e),
          i.gain.exponentialRampToValueAtTime(s, e + 0.015),
          i.gain.exponentialRampToValueAtTime(1e-4, e + 0.17),
          o.connect(i),
          i.connect(n.bus),
          o.start(e),
          o.stop(e + 0.2));
      };
    if (t < 0.22) {
      const t = 0.9 * e;
      (i(s, t, 0.16), i(s + 0.045, 1.25 * t, 0.12), i(s + 0.1, 1.58 * t, 0.09), o(0.07, 0.2, 1800, 500));
    } else if (t >= 0.28 && e >= 800) {
      o(0.11, 0.55, 300, 1800);
      const t = a.createOscillator(),
        i = a.createGain();
      ((t.type = "sine"),
        (t.frequency.value = 1.5 * e),
        i.gain.setValueAtTime(1e-4, s + 0.12),
        i.gain.exponentialRampToValueAtTime(0.1, s + 0.14),
        i.gain.exponentialRampToValueAtTime(1e-4, s + 1.4),
        t.connect(i),
        i.connect(n.bus),
        t.start(s + 0.12),
        t.stop(s + 1.5));
    } else {
      const i = a.createOscillator(),
        r = a.createOscillator(),
        l = a.createGain(),
        c = a.createGain();
      ((i.type = "sine"),
        (r.type = "sine"),
        (i.frequency.value = e),
        (r.frequency.value = 2 * e),
        (c.gain.value = 0.22),
        l.gain.setValueAtTime(1e-4, s),
        l.gain.exponentialRampToValueAtTime(0.16, s + 0.012),
        l.gain.exponentialRampToValueAtTime(1e-4, s + Math.max(0.5, 2.2 * t)),
        i.connect(l),
        r.connect(c),
        c.connect(l),
        l.connect(n.bus),
        i.start(s),
        r.start(s),
        i.stop(s + Math.max(0.5, 2.2 * t) + 0.1),
        r.stop(s + Math.max(0.5, 2.2 * t) + 0.1),
        o(0.05, 0.3, 900, 350));
    }
  },
  loop() {
    (clearTimeout(this.T),
      this.on &&
        (!this.L && void 0 !== AC && AC && (this.build(), apply()),
        this.L && (!document.hidden || bgOn()) && prefs().music && this.tick(),
        (this.T = setTimeout(() => this.loop(), 110))));
  },
  vol(e) {
    this.L &&
      void 0 !== AC &&
      AC &&
      this.L.out.gain.setTargetAtTime(e && this.on ? 0.9 : 0, AC.currentTime, 1.4);
  },
  set(e) {
    (e = !!e) !== this.on &&
      ((this.on = e),
      e
        ? (Date.now() - (this.off || 0) > 45e3 && ((this.s = 0), (this.t = 0)), this.build(), this.loop())
        : (clearTimeout(this.T), (this.off = Date.now())),
      void 0 !== AC && AC && void 0 !== music && music && apply());
  },
};
function m3Mus(e) {
  "object" == typeof aqMu && aqMu.set(e);
}
var xmMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  CH: [
    [43, [55, 59, 62, 67, 71, 74]],
    [40, [52, 55, 59, 64, 67, 71]],
    [48, [60, 64, 67, 72, 76, 79]],
    [50, [57, 62, 66, 69, 74, 78]],
    [43, [55, 59, 62, 67, 71, 74]],
    [40, [52, 55, 59, 64, 67, 71]],
    [48, [60, 64, 67, 72, 76, 79]],
    [50, [57, 62, 66, 69, 74, 78]],
    [40, [52, 55, 59, 64, 67, 71]],
    [48, [60, 64, 67, 72, 76, 79]],
    [43, [55, 59, 62, 67, 71, 74]],
    [50, [57, 62, 66, 69, 74, 78]],
    [48, [60, 64, 67, 72, 76, 79]],
    [43, [55, 59, 62, 67, 71, 74]],
    [45, [57, 60, 64, 69, 72, 76]],
    [50, [57, 62, 66, 69, 74, 78]],
  ],
  MEL: [
    [
      [71, 2],
      [74, 2],
      [79, 3],
      [76, 1],
    ],
    [
      [74, 2],
      [71, 2],
      [76, 4],
    ],
    [
      [76, 2],
      [79, 2],
      [76, 2],
      [72, 2],
    ],
    [
      [74, 4],
      [69, 2],
      [71, 2],
    ],
    [
      [71, 2],
      [74, 2],
      [79, 3],
      [81, 1],
    ],
    [
      [83, 3],
      [79, 1],
      [76, 4],
    ],
    [
      [79, 2],
      [76, 2],
      [74, 2],
      [72, 2],
    ],
    [
      [74, 6],
      [0, 2],
    ],
    [
      [76, 2],
      [79, 2],
      [83, 4],
    ],
    [
      [81, 2],
      [79, 2],
      [76, 4],
    ],
    [
      [74, 2],
      [79, 2],
      [83, 3],
      [81, 1],
    ],
    [
      [78, 4],
      [81, 2],
      [78, 2],
    ],
    [
      [79, 2],
      [76, 2],
      [79, 4],
    ],
    [
      [83, 2],
      [79, 2],
      [74, 4],
    ],
    [
      [76, 2],
      [72, 2],
      [71, 2],
      [69, 2],
    ],
    [
      [74, 4],
      [69, 2],
      [74, 2],
    ],
  ],
  PAT: [0, 1, 2, 3, 2, 1, 3, 2],
  E: 0.34,
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    ((t.gain.value = 0), t.connect(mg));
    const a = e.createDelay(1.2),
      s = e.createGain(),
      n = e.createBiquadFilter(),
      o = e.createGain();
    ((a.delayTime.value = 0.34),
      (s.gain.value = 0.34),
      (n.type = "lowpass"),
      (n.frequency.value = 3200),
      (o.gain.value = 0.42),
      a.connect(n),
      n.connect(s),
      s.connect(a),
      n.connect(o),
      o.connect(t));
    const i = e.createGain();
    (i.connect(t), i.connect(a));
    const r = 0.4 * e.sampleRate,
      l = e.createBuffer(1, r, e.sampleRate),
      c = l.getChannelData(0);
    for (let e = 0; e < r; e++) c[e] = 2 * Math.random() - 1;
    const d = {};
    let f = 0;
    (this.MEL.forEach((e) =>
      e.forEach(([e, t]) => {
        (e && (d[f] = [e, t]), (f += t));
      }),
    ),
      (this.L = { out: t, bus: i, nb: l, M: d }));
  },
  cel(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1],
      [2, 0.3],
      [4.01, 0.09],
    ].forEach(([i, r]) => {
      const l = o.createOscillator(),
        c = o.createGain();
      ((l.type = "sine"),
        (l.frequency.value = e * i),
        c.gain.setValueAtTime(1e-4, t),
        c.gain.exponentialRampToValueAtTime(s * r, t + 0.008),
        c.gain.exponentialRampToValueAtTime(1e-4, t + a / i ** 0.35),
        l.connect(c),
        c.connect(n),
        l.start(t),
        l.stop(t + a + 0.1));
    });
  },
  kal(e, t, a, s, n = 0.5) {
    const o = AC;
    [
      [1, 1, n],
      [5.4, 0.07, 0.07],
    ].forEach(([n, i, r]) => {
      const l = o.createOscillator(),
        c = o.createGain();
      ((l.type = "sine"),
        (l.frequency.value = e * n),
        c.gain.setValueAtTime(1e-4, t),
        c.gain.exponentialRampToValueAtTime(a * i, t + 0.002),
        c.gain.exponentialRampToValueAtTime(1e-4, t + r),
        l.connect(c),
        c.connect(s),
        l.start(t),
        l.stop(t + r + 0.05));
    });
  },
  harp(e, t, a, s) {
    const n = AC,
      o = n.createOscillator(),
      i = n.createGain(),
      r = n.createBiquadFilter();
    ((o.type = "triangle"),
      (o.frequency.value = e),
      (r.type = "lowpass"),
      (r.frequency.value = 2200),
      i.gain.setValueAtTime(1e-4, t),
      i.gain.exponentialRampToValueAtTime(a, t + 0.01),
      i.gain.exponentialRampToValueAtTime(1e-4, t + 1.1),
      o.connect(r),
      r.connect(i),
      i.connect(s),
      o.start(t),
      o.stop(t + 1.2));
  },
  pad(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain();
    ((i.type = "sine"),
      (i.frequency.value = e),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.linearRampToValueAtTime(s, t + 0.35 * a),
      r.gain.linearRampToValueAtTime(1e-4, t + 1.25 * a),
      i.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + 1.3 * a));
  },
  jing(e, t, a, s) {
    const n = AC,
      o = n.createBufferSource(),
      i = n.createBiquadFilter(),
      r = n.createGain();
    ((o.buffer = s),
      (o.playbackRate.value = 1 + 0.2 * Math.random()),
      (i.type = "bandpass"),
      (i.frequency.value = 6800 + 1500 * Math.random()),
      (i.Q.value = 2.2),
      r.gain.setValueAtTime(1e-4, e),
      r.gain.exponentialRampToValueAtTime(t, e + 0.008),
      r.gain.exponentialRampToValueAtTime(1e-4, e + 0.14),
      o.connect(i),
      i.connect(r),
      r.connect(a),
      o.start(e),
      o.stop(e + 0.2));
  },
  tick() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (e && t)
      for (this.t < t.currentTime && (this.t = t.currentTime + 0.12); this.t < t.currentTime + 0.4;) {
        const t = this.s,
          a = (t >> 3) % 16,
          s = t % 8,
          [n, o] = this.CH[a],
          i = this.t,
          r = this.E;
        (0 === s &&
          ([o[0], o[2], o[3]].forEach((t, a) => this.pad(this.mf(t - 12), i, 8 * r, 0.03, e.bus)),
          this.harp(this.mf(n), i, 0.1, e.bus)),
          4 === s && this.harp(this.mf(n + 7), i, 0.06, e.bus),
          this.harp(this.mf(o[this.PAT[s]]), i, 0 === s ? 0.05 : 0.035, e.bus));
        const l = e.M[t];
        (l && this.cel(this.mf(l[0]), i, Math.min(2.2, l[1] * r + 1), 0.13, e.bus),
          (2 !== s && 6 !== s) || this.jing(i, 0.035, e.bus, e.nb),
          5 === s &&
            Math.random() < 0.35 &&
            this.cel(this.mf(o[4 + Math.floor(2 * Math.random())] + 12), i, 1.4, 0.04, e.bus),
          (this.t += r),
          (this.s = (this.s + 1) % 128));
      }
  },
  sn(e) {
    const t = Math.round(69 + 12 * Math.log2(e / 440)),
      a = [7, 9, 11, 2, 4];
    let s = t,
      n = 99;
    for (let e = -3; e <= 3; e++)
      a.includes((((t + e) % 12) + 12) % 12) && Math.abs(e) < n && ((n = Math.abs(e)), (s = t + e));
    for (; s < 67;) s += 12;
    for (; s > 88;) s -= 12;
    return s;
  },
  fx(e, t) {
    const a = AC;
    if (!a || !mg) return;
    if (!this.F) {
      const e = a.createGain(),
        t = a.createDelay(1),
        s = a.createGain(),
        n = a.createBiquadFilter(),
        o = a.createGain();
      ((t.delayTime.value = 0.22),
        (s.gain.value = 0.28),
        (n.type = "lowpass"),
        (n.frequency.value = 3200),
        (o.gain.value = 0.38),
        e.connect(mg),
        e.connect(t),
        t.connect(n),
        n.connect(s),
        s.connect(t),
        n.connect(o),
        o.connect(mg));
      const i = 0.4 * a.sampleRate,
        r = a.createBuffer(1, i, a.sampleRate),
        l = r.getChannelData(0);
      for (let e = 0; e < i; e++) l[e] = 2 * Math.random() - 1;
      this.F = { bus: e, nb: r };
    }
    const s = this.F,
      n = a.currentTime,
      o = this.sn(e);
    t < 0.22
      ? this.kal(this.mf(o), n, 0.08, s.bus, 0.2)
      : t >= 0.6
        ? ([0, 4, 7, 12].forEach((e, t) =>
            this.cel(this.mf(this.sn(this.mf(o + e))), n + 0.09 * t, 1.4, 0.14, s.bus),
          ),
          this.jing(n + 0.3, 0.05, s.bus, s.nb))
        : this.kal(this.mf(o), n, 0.09, s.bus, 0.24);
  },
  loop() {
    (clearTimeout(this.T),
      this.on &&
        (!this.L && void 0 !== AC && AC && (this.build(), apply()),
        this.L && (!document.hidden || bgOn()) && prefs().music && this.tick(),
        (this.T = setTimeout(() => this.loop(), 120))));
  },
  vol(e) {
    this.L &&
      void 0 !== AC &&
      AC &&
      this.L.out.gain.setTargetAtTime(e && this.on ? 0.9 : 0, AC.currentTime, 0.8);
  },
  set(e) {
    (e = !!e) !== this.on &&
      ((this.on = e),
      e ? ((this.t = 0), (this.s = 0), this.build(), this.loop()) : clearTimeout(this.T),
      void 0 !== AC && AC && void 0 !== music && music && apply());
  },
};
const PRT = [
  0,
  { r: 60, s: [0, 2, 4, 5, 7, 9, 11], p: [0, 5, 3, 4, 0, 2, 3, 4], b: 72, l: "bell", h: 0 },
  { r: 62, s: [0, 2, 3, 5, 7, 9, 10], p: [0, 3, 0, 4, 0, 3, 6, 4], b: 62, l: "flute", h: 2 },
  { r: 57, s: [0, 2, 3, 5, 7, 8, 10], p: [0, 5, 2, 6, 0, 5, 3, 4], b: 54, l: "glass", h: 1, sv: 1.2 },
  { r: 64, s: [0, 2, 4, 6, 7, 9, 11], p: [0, 1, 0, 4, 0, 1, 5, 4], b: 56, l: "bell", h: 1 },
  { r: 65, s: [0, 2, 4, 5, 7, 9, 10], p: [0, 6, 3, 0, 0, 6, 3, 4], b: 66, l: "flute", h: 0 },
  { r: 55, s: [0, 2, 4, 5, 7, 9, 11], p: [0, 4, 5, 3, 0, 4, 3, 0], b: 60, l: "bell", h: 2 },
  {
    r: 62,
    s: [0, 2, 3, 5, 7, 8, 10],
    p: [0, 5, 3, 6, 0, 5, 2, 4],
    b: 50,
    l: "cello",
    h: 1,
    sv: 1.3,
    mo: -12,
  },
  { r: 58, s: [0, 2, 4, 5, 7, 9, 11], p: [0, 3, 4, 0, 5, 3, 4, 0], b: 74, l: "bell", h: 0 },
  { r: 57, s: [0, 2, 4, 5, 7, 9, 10], p: [0, 6, 3, 0, 0, 6, 4, 0], b: 68, l: "flute", h: 2 },
  { r: 63, s: [0, 2, 4, 6, 7, 9, 11], p: [0, 1, 4, 0, 5, 1, 0, 4], b: 48, l: "glass", h: 1, sv: 1.4 },
];
function prTheme(e) {
  if (!e)
    return {
      B: 1.04,
      l: "flute",
      h: 0,
      sv: 1,
      lv: 1,
      CH: [
        [36, [55, 60, 64, 71]],
        [33, [55, 60, 64, 69]],
        [41, [53, 57, 60, 64]],
        [43, [55, 59, 62, 64]],
        [40, [55, 59, 62, 67]],
        [45, [57, 60, 64, 71]],
        [41, [53, 57, 60, 64]],
        [43, [55, 62, 65, 67]],
      ],
      ML: [
        [
          [79, 2],
          [76, 1],
          [74, 1],
        ],
        [
          [72, 2],
          [76, 2],
        ],
        [
          [77, 2],
          [76, 1],
          [72, 1],
        ],
        [
          [74, 3],
          [0, 1],
        ],
        [
          [79, 2],
          [83, 1],
          [81, 1],
        ],
        [
          [79, 1.5],
          [76, 0.5],
          [72, 2],
        ],
        [
          [77, 2],
          [74, 1],
          [72, 1],
        ],
        [
          [71, 2],
          [74, 2],
        ],
      ],
    };
  const q = PRT[e];
  let a = 1013 * e;
  const R = () => {
      a = (a + 1831565813) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      return ((t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t), ((t ^ (t >>> 14)) >>> 0) / 4294967296);
    },
    M = (j) => q.r + q.s[((j % 7) + 7) % 7] + 12 * Math.floor(j / 7),
    CH = q.p.map((d) => {
      const t = [0, 2, 4, 6]
        .map((i) => M(d + i))
        .map((n) => {
          for (; n > q.r + 9;) n -= 12;
          for (; n < q.r - 7;) n += 12;
          return n;
        })
        .sort((a, b) => a - b);
      let b = M(d) - 24;
      for (; b < 31;) b += 12;
      return [b, t];
    });
  let pv = q.p[0] + 7;
  const ML = q.p.map((d, bi) => {
    const P = [
        [2, 1, 1],
        [2, 2],
        [1, 1, 2],
        [3, 1],
        [1.5, 0.5, 2],
        [1, 1, 1, 1],
      ],
      pt = 3 === bi ? [3, 1] : 7 === bi ? [2, 2] : P[(R() * P.length) | 0];
    let ix = pv;
    const out = pt.map((du, k) => {
      if (0 === k) {
        const ct = [d, d + 2, d + 4].map((i) => i + 7);
        ix = ct.reduce((a, c) => (Math.abs(c - pv) < Math.abs(a - pv) ? c : a), ct[0]);
      } else ix += (R() < 0.5 ? -1 : 1) * (R() < 0.3 ? 2 : 1);
      return (
        (ix = Math.max(5, Math.min(14, ix))),
        7 === bi && k === pt.length - 1 && (ix = 7),
        3 === bi && 1 === k ? [0, du] : [M(ix) + (q.mo || 0), du]
      );
    });
    return ((pv = ix), out);
  });
  return { B: (1.14 * 60) / q.b, CH, ML, l: q.l, h: q.h, sv: q.sv || 1, lv: 1 };
}
var prMu = {
  on: !1,
  L: null,
  T: 0,
  t: 0,
  n: 0,
  B: 0.909,
  nk: 0,
  ck: null,
  th: null,
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const a = void 0 !== AC ? AC : null;
    if (!a || void 0 === mg || !mg || this.L) return;
    const o = a.createGain();
    ((o.gain.value = 0), o.connect(mg));
    const b = a.createGain(),
      s = a.createGain(),
      l = a.createBiquadFilter(),
      c = a.createConvolver(),
      w = a.createGain(),
      f = a.createBiquadFilter(),
      r = Math.floor(3.6 * a.sampleRate),
      u = a.createBuffer(2, r, a.sampleRate);
    for (let e = 0; e < 2; e++) {
      const t = u.getChannelData(e);
      for (let e = 0; e < r; e++) t[e] = (2 * Math.random() - 1) * Math.pow(1 - e / r, 2.2);
    }
    ((c.buffer = u),
      b.connect(o),
      (s.gain.value = 0.55),
      b.connect(s),
      (l.type = "lowpass"),
      (l.frequency.value = 2600),
      s.connect(l),
      l.connect(c),
      (w.gain.value = 0.72),
      c.connect(w),
      w.connect(o),
      (f.type = "lowpass"),
      (f.frequency.value = 900),
      f.connect(b),
      (this.L = { out: o, bus: b, sl: f }));
  },
  harp(e, t, v) {
    const a = AC,
      o = this.L.bus;
    [
      [1, 1, "triangle"],
      [2, 0.25, "sine"],
    ].forEach(([r, g, y]) => {
      const s = a.createOscillator(),
        n = a.createGain();
      ((s.type = y),
        (s.frequency.value = e * r),
        n.gain.setValueAtTime(1e-4, t),
        n.gain.exponentialRampToValueAtTime(v * g, t + 0.005),
        n.gain.exponentialRampToValueAtTime(1e-4, t + 1.7),
        s.connect(n),
        n.connect(o),
        s.start(t),
        s.stop(t + 1.8));
    });
  },
  str(e, t, d, v) {
    const a = AC,
      o = this.L.sl;
    [-7, 7].forEach((r) => {
      const s = a.createOscillator(),
        n = a.createGain();
      ((s.type = "sawtooth"),
        (s.frequency.value = e),
        (s.detune.value = r),
        n.gain.setValueAtTime(1e-4, t),
        n.gain.linearRampToValueAtTime(v, t + 1.2),
        n.gain.setValueAtTime(v, t + d - 1.4),
        n.gain.linearRampToValueAtTime(1e-4, t + d),
        s.connect(n),
        n.connect(o),
        s.start(t),
        s.stop(t + d + 0.1));
    });
  },
  bass(e, t, d, v) {
    const a = AC,
      s = a.createOscillator(),
      n = a.createGain();
    ((s.type = "sine"),
      (s.frequency.value = e),
      n.gain.setValueAtTime(1e-4, t),
      n.gain.linearRampToValueAtTime(v, t + 0.12),
      n.gain.linearRampToValueAtTime(v * 0.55, t + d),
      n.gain.linearRampToValueAtTime(1e-4, t + d + 0.5),
      s.connect(n),
      n.connect(this.L.bus),
      s.start(t),
      s.stop(t + d + 0.6));
  },
  flute(e, t, d, v) {
    const a = AC,
      o = a.createOscillator(),
      o2 = a.createOscillator(),
      g = a.createGain(),
      g2 = a.createGain(),
      l = a.createOscillator(),
      lg = a.createGain();
    ((o.type = "sine"),
      (o2.type = "sine"),
      (o.frequency.value = e),
      (o2.frequency.value = 2 * e),
      (g2.gain.value = 0.12),
      (l.frequency.value = 4.8),
      lg.gain.setValueAtTime(0, t),
      lg.gain.linearRampToValueAtTime(6, t + 0.6),
      l.connect(lg),
      lg.connect(o.detune),
      g.gain.setValueAtTime(1e-4, t),
      g.gain.linearRampToValueAtTime(v, t + 0.1),
      g.gain.setValueAtTime(v, t + d - 0.1),
      g.gain.linearRampToValueAtTime(1e-4, t + d + 0.3),
      o.connect(g),
      o2.connect(g2),
      g2.connect(g),
      g.connect(this.L.bus));
    [o, o2, l].forEach((e) => {
      (e.start(t), e.stop(t + d + 0.4));
    });
  },
  lead(e, t, d, v, l) {
    const a = AC;
    "bell" === l
      ? this.bell(e, t, Math.min(2.8, 1.3 * d + 0.6), 1.5 * v)
      : "glass" === l
        ? [
            [1, 1],
            [3.01, 0.12],
          ].forEach(([r, g]) => {
            const o = a.createOscillator(),
              n = a.createGain();
            ((o.type = "sine"),
              (o.frequency.value = e * r),
              n.gain.setValueAtTime(1e-4, t),
              n.gain.linearRampToValueAtTime(v * g, t + 0.28),
              n.gain.setValueAtTime(v * g, t + d),
              n.gain.linearRampToValueAtTime(1e-4, t + d + 0.9),
              o.connect(n),
              n.connect(this.L.bus),
              o.start(t),
              o.stop(t + d + 1));
          })
        : "cello" === l
          ? (() => {
              const o = a.createOscillator(),
                n = a.createGain(),
                f = a.createBiquadFilter(),
                q = a.createOscillator(),
                qg = a.createGain();
              ((o.type = "sawtooth"),
                (o.frequency.value = e),
                (f.type = "lowpass"),
                (f.frequency.value = 720),
                qg.gain.setValueAtTime(0, t),
                qg.gain.linearRampToValueAtTime(9, t + 0.7),
                (q.frequency.value = 5),
                q.connect(qg),
                qg.connect(o.detune),
                n.gain.setValueAtTime(1e-4, t),
                n.gain.linearRampToValueAtTime(v * 0.5, t + 0.2),
                n.gain.setValueAtTime(v * 0.5, t + d - 0.1),
                n.gain.linearRampToValueAtTime(1e-4, t + d + 0.4),
                o.connect(f),
                f.connect(n),
                n.connect(this.L.bus),
                [o, q].forEach((x) => {
                  (x.start(t), x.stop(t + d + 0.5));
                }));
            })()
          : this.flute(e, t, d, v);
  },
  bell(e, t, d, v) {
    const a = AC,
      o = this.L.bus;
    [
      [1, 1, d],
      [2.76, 0.1, d * 0.25],
      [5.4, 0.03, d * 0.12],
    ].forEach(([r, g, l]) => {
      const s = a.createOscillator(),
        n = a.createGain();
      ((s.type = "sine"),
        (s.frequency.value = e * r),
        n.gain.setValueAtTime(1e-4, t),
        n.gain.exponentialRampToValueAtTime(v * g, t + 0.006),
        n.gain.exponentialRampToValueAtTime(1e-4, t + l),
        s.connect(n),
        n.connect(o),
        s.start(t),
        s.stop(t + l + 0.1));
    });
  },
  sw(e) {
    this.nk = e || 0;
  },
  bar(t) {
    (null !== this.ck && this.ck === this.nk) ||
      ((this.ck = this.nk), (this.th = prTheme(this.ck)), (this.n = 0));
    const T = this.th,
      n = this.n++,
      c = T.CH[n % 8],
      m = T.ML[n % 8],
      B = T.B,
      od = Math.floor(n / 8) % 2;
    (c[1].forEach((e) => this.str(this.mf(e), t, 4 * B + 1.4, 0.016 * T.sv)),
      this.bass(this.mf(c[0]), t, 4 * B, 0.09));
    const A = c[1].concat(c[1].slice(0, 2).map((e) => e + 12)),
      P = [
        [0, 1, 2, 3, 4, 5, 4, 3],
        [0, -1, 2, -1, 4, -1, 2, -1],
        [5, 4, 3, 2, 3, 4, 2, 1],
      ][T.h],
      Q = od && 0 === T.h ? [5, 4, 3, 2, 3, 4, 2, 1] : P;
    Q.forEach((e, k) => {
      e >= 0 && this.harp(this.mf(A[e]), t + (k * B) / 2, 0.024 + 0.008 * Math.random());
    });
    for (let k = 0; k < 3; k++)
      if (Math.random() < 0.7) {
        const q = A[Math.floor(Math.random() * A.length)] + 12;
        this.bell(
          this.mf(q + (Math.random() < 0.5 ? 12 : 0)),
          t + ((0.5 + Math.floor(Math.random() * 7)) * B) / 2,
          3.2,
          0.011,
        );
      }
    let u = 0;
    m.forEach(([e, d]) => {
      (e && this.lead(this.mf(e - (od && n % 8 < 4 ? 12 : 0)), t + u * B, d * B * 0.97, 0.06 * T.lv, T.l),
        (u += d));
    });
  },
  loop() {
    clearTimeout(this.T);
    if (!this.on) return;
    if (!this.__pl && !$("#sfr .prb")) return this.set(!1);
    if (this.L && void 0 !== AC && AC && (!document.hidden || bgOn()) && prefs().music) {
      const e = AC.currentTime;
      for (this.t < e && (this.t = e + 0.2); this.t < e + 1.4;) (this.bar(this.t), (this.t += 4 * this.th.B));
    }
    this.T = setTimeout(() => this.loop(), 200);
  },
  set(e) {
    (e = !!e) !== this.on &&
      ((this.on = e),
      e
        ? ((this.t = 0),
          (this.n = 0),
          (this.ck = null),
          this.build(),
          this.L && void 0 !== AC && AC && this.L.out.gain.setTargetAtTime(0.9, AC.currentTime, 1.2),
          this.loop())
        : (clearTimeout(this.T),
          this.L && void 0 !== AC && AC && this.L.out.gain.setTargetAtTime(0, AC.currentTime, 0.6)),
      void 0 !== AC && AC && void 0 !== music && music && apply());
  },
};
function prMus(e, k) {
  if (PLK && !PLPA && /^pr\d+$/.test(PLK)) return;
  "object" == typeof prMu && ((prMu.nk = k || 0), prMu.set(!(!e || (void 0 !== PLK && PLK && !PLPA))));
}
function xmMus(e) {
  "object" == typeof xmMu && ((xmMu.want = !!e), xmMu.set(!(!e || (void 0 !== PLK && PLK && !PLPA))));
}
Object.assign(DIT, {
  bottle: [
    "Biberon",
    '<rect x="11" y="10" width="10" height="18" rx="4" fill="#eef6ff" stroke="#9cc3e6"/><rect x="11.5" y="18" width="9" height="9.5" rx="3" fill="#ffe7b0"/><rect x="10" y="7" width="12" height="4" rx="1.5" fill="#7fc0ee"/><path d="M13.5 7Q16 1 18.5 7z" fill="#f2c79a"/><path d="M13 14h3M13 17h3M13 20h3" stroke="#9cc3e6" stroke-width="1"/>',
  ],
  diapers: [
    "Couches",
    '<rect x="5" y="9" width="22" height="18" rx="3" fill="#bfe3ff"/><rect x="5" y="9" width="22" height="6" rx="3" fill="#e9f6ff"/><circle cx="16" cy="19.5" r="4.2" fill="#ffd36b"/><path d="M14 19q2 2 4 0" stroke="#c98a2a" stroke-width="1" fill="none"/><circle cx="14.6" cy="18" r=".6" fill="#7a4a1a"/><circle cx="17.4" cy="18" r=".6" fill="#7a4a1a"/>',
  ],
  onesie: [
    "Pyjama de bébé",
    '<path d="M11 4h10l5 5-3 4-2-1v6l3 8h-6l-2-4-2 4H8l3-8v-6l-2 1-3-4z" fill="#f4b6c9"/><path d="M13 4q3 3 6 0" fill="#f8d3df"/><circle cx="16" cy="12" r="1.2" fill="#fff"/><circle cx="16" cy="16" r="1.2" fill="#fff"/><path d="M8.5 24h5M18.5 24h5" stroke="#e892ae" stroke-width="1.4"/>',
  ],
  rattle: [
    "Hochet",
    '<rect x="15" y="14" width="4" height="14" rx="2" fill="#7fc0ee" transform="rotate(-35 17 21)"/><circle cx="12" cy="11" r="7" fill="#ffd36b"/><circle cx="12" cy="11" r="4.2" fill="#ff9ab8"/><circle cx="10.5" cy="9.5" r="1.4" fill="#fff" opacity=".8"/><circle cx="24.5" cy="26" r="3" fill="#ffd36b"/>',
  ],
  coat: [
    "Manteau",
    '<path d="M16 3.5a2 2 0 1 1 2 2L16 7" fill="none" stroke="#8a8f9a" stroke-width="1.4"/><path d="M8.5 10 16 7l7.5 3L26 28H6z" fill="#c9734a"/><path d="M16 7v21" stroke="#9a5232" stroke-width="1.2"/><path d="M12 8.6l4 5 4-5" fill="#e09a70"/><circle cx="17.6" cy="15" r="1" fill="#f2d39a"/><circle cx="17.6" cy="20" r="1" fill="#f2d39a"/><path d="M9 19h4M19.5 19h4" stroke="#9a5232" stroke-width="1.2"/>',
  ],
  hat: [
    "Tuque",
    '<path d="M7 22q0-14 9-14t9 14z" fill="#d9555f"/><path d="M11 12v8M16 9v11M21 12v8" stroke="#b8414b" stroke-width="1.2"/><rect x="5.5" y="20" width="21" height="6" rx="3" fill="#f4efe6"/><circle cx="16" cy="7" r="3.5" fill="#f4efe6"/>',
  ],
  scarf: [
    "Foulard",
    '<path d="M6 8q10 6 20 0v5q-10 6-20 0z" fill="#5fae8a"/><path d="M19 12l2 15h-5l-1-14z" fill="#4f9a78"/><path d="M16.5 27v3M18.5 27v3M20.5 27v3" stroke="#4f9a78" stroke-width="1.2"/><path d="M9 10l2 3M13 11.5l1 3M23 10l-2 3" stroke="#e8f4ec" stroke-width="1.4"/>',
  ],
  boots: [
    "Bottes",
    '<path d="M5 4h8v16l6 3q3 1.5 3 5H5z" fill="#7a5236"/><path d="M5 8h8" stroke="#5c3c26" stroke-width="1.4"/><path d="M14 6h7v14l5 2.6q3 1.4 3 4.4H14z" fill="#8f6242"/><path d="M14 10h7" stroke="#6a4630" stroke-width="1.4"/><rect x="4.6" y="27" width="17.6" height="2.4" rx="1" fill="#3e2a1e"/><rect x="13.6" y="26.4" width="15.8" height="2.4" rx="1" fill="#3e2a1e"/>',
  ],
  sneakers: [
    "Espadrilles",
    '<path d="M3 18q0-6 6-6 3 0 5 3l6 2q9 2 9 7v2H3z" fill="#f4f4f8"/><path d="M3 24h26v3H3z" fill="#7fc0ee"/><path d="M9 14l2 3M12 15l2 3M15 16l1 2" stroke="#7fc0ee" stroke-width="1.4"/><path d="M20 19q4 1 6 3" stroke="#e86a6a" stroke-width="2" fill="none"/>',
  ],
  umbrella: [
    "Parapluie",
    '<path d="M4 15q12-16 24 0q-3-2-6 0-3-2-6 0-3-2-6 0-3-2-6 0z" fill="#6f86d9"/><path d="M10 13q6-9 12 0" fill="#8fa2e8"/><path d="M16 3.5v1.5" stroke="#555" stroke-width="1.6"/><path d="M16 14v11q0 3 3 3t3-3" stroke="#6b4a35" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
  ],
  keys: [
    "Clés",
    '<circle cx="11" cy="12" r="6" fill="none" stroke="#e2b84a" stroke-width="3"/><path d="M15 16l10 10M21 22l3-3M24 25l2-2" stroke="#e2b84a" stroke-width="3" stroke-linecap="round"/><circle cx="21" cy="9" r="4" fill="#e86a6a"/><circle cx="21" cy="9" r="1.4" fill="#fff" opacity=".6"/>',
  ],
  bag: [
    "Sac à main",
    '<path d="M11 12V9a5 5 0 0 1 10 0v3" fill="none" stroke="#7a4a32" stroke-width="2"/><path d="M6 12h20l-2 15H8z" fill="#c98a5a"/><path d="M6.4 15h19.2" stroke="#a96e42" stroke-width="1.2"/><rect x="14" y="16" width="4" height="3" rx="1" fill="#f2d39a"/>',
  ],
  letters: [
    "Courrier",
    '<rect x="4" y="10" width="20" height="14" rx="1.5" fill="#f4efe6" transform="rotate(-8 14 17)"/><rect x="8" y="12" width="20" height="14" rx="1.5" fill="#fff" stroke="#d9cfbd"/><path d="M8 12l10 8 10-8" fill="none" stroke="#d9cfbd" stroke-width="1.2"/><rect x="23" y="14" width="3.5" height="4" fill="#e86a6a"/>',
  ],
  pens: [
    "Pot à crayons",
    '<path d="M12 12V4l1.5-2 1.5 2v8" fill="#ffd36b"/><path d="M16.5 12V6l1.5-2 1.5 2v6" fill="#e86a6a"/><path d="M19.5 12V7.5h2.2V12" fill="#5fae8a"/><path d="M10 12h12l-1.5 16h-9z" fill="#7fc0ee"/><path d="M10.3 15h11.4" stroke="#5fa2d4" stroke-width="1.2"/>',
  ],
  folder: [
    "Classeur",
    '<rect x="7" y="4" width="16" height="24" rx="1.5" fill="#5f86d9"/><rect x="21" y="4" width="3" height="24" fill="#3e5fae"/><rect x="10" y="7" width="10" height="5" rx="1" fill="#fff"/><circle cx="15" cy="21" r="2.4" fill="none" stroke="#3e5fae" stroke-width="1.4"/>',
  ],
  notebook: [
    "Cahier",
    '<rect x="7" y="4" width="18" height="24" rx="2" fill="#f2b84a"/><path d="M10 4v24" stroke="#c98a2a" stroke-width="1.6"/><rect x="13" y="9" width="9" height="4" rx="1" fill="#fff8e6"/><path d="M5 8h4M5 13h4M5 18h4M5 23h4" stroke="#8a8f9a" stroke-width="1.4"/>',
  ],
  earth: [
    "Globe terrestre",
    '<circle cx="16" cy="13" r="9" fill="#7fc0ee"/><path d="M11 8q3 2 2 5t3 4q1 3-1 5M19 6q-1 3 2 4t3 3" fill="none" stroke="#5fae6a" stroke-width="3" stroke-linecap="round"/><path d="M7 13a9 9 0 0 0 18 0" fill="none" stroke="#c98a5a" stroke-width="1.4"/><path d="M16 22v5M11 28h10" stroke="#8a5a36" stroke-width="2.2" stroke-linecap="round"/>',
  ],
  scooter: [
    "Trottinette",
    '<path d="M22 4v20M19 4h6" stroke="#e86a6a" stroke-width="2.6" stroke-linecap="round"/><path d="M6 24h17" stroke="#555a6a" stroke-width="3" stroke-linecap="round"/><circle cx="7" cy="26" r="3" fill="#3e4352"/><circle cx="23" cy="26" r="3" fill="#3e4352"/>',
  ],
  truck: [
    "Camion jouet",
    '<path d="M3 12l3-4h10l3 4" fill="#f2c24a"/><rect x="3" y="12" width="16" height="10" rx="2" fill="#ffd36b"/><path d="M19 15h5l4 4v3h-9z" fill="#e86a6a"/><rect x="21" y="16" width="3" height="3" fill="#bfe3ff"/><circle cx="8" cy="24" r="3" fill="#3e4352"/><circle cx="23" cy="24" r="3" fill="#3e4352"/>',
  ],
  kite: [
    "Cerf-volant",
    '<path d="M16 2l9 10-9 12-9-12z" fill="#ff9ab8"/><path d="M16 2 25 12H16zM16 24 7 12h9z" fill="#ffc2d6"/><path d="M16 2v22M7 12h18" stroke="#fff" stroke-width="1.2"/><path d="M16 24q-3 2 0 3t0 4" stroke="#7a8896" stroke-width="1" fill="none"/>',
  ],
  bowl: [
    "Bols",
    '<path d="M4 15h24q-1 10-12 10T4 15z" fill="#a9d6c8"/><ellipse cx="16" cy="15" rx="12" ry="3" fill="#cdeee4"/><path d="M8 19q8 4 16 0" stroke="#7fbfae" stroke-width="1.2" fill="none"/>',
  ],
  spices: [
    "Épices",
    '<rect x="4" y="12" width="7" height="15" rx="2" fill="#e8946c"/><rect x="12.5" y="10" width="7" height="17" rx="2" fill="#5fae6a"/><rect x="21" y="13" width="7" height="14" rx="2" fill="#f2c24a"/><rect x="4" y="9" width="7" height="4" rx="1" fill="#7a5236"/><rect x="12.5" y="7" width="7" height="4" rx="1" fill="#7a5236"/><rect x="21" y="10" width="7" height="4" rx="1" fill="#7a5236"/><path d="M5.5 18h4M14 17h4M22.5 19h4" stroke="#fff" stroke-width="1.4" opacity=".7"/>',
  ],
  board: [
    "Planche à découper",
    '<rect x="4" y="9" width="22" height="16" rx="4" fill="#d9a066"/><circle cx="23" cy="13" r="1.6" fill="#8a5a36"/><path d="M8 14h11M8 18h13M8 22h9" stroke="#c48a52" stroke-width="1"/>',
  ],
  hairdryer: [
    "Séchoir",
    '<rect x="12" y="18" width="5" height="11" rx="2" fill="#a46ae0"/><path d="M5 9h15a6 6 0 0 1 0 12H5z" fill="#c58aff"/><circle cx="20" cy="15" r="3" fill="#ead9ff"/><path d="M2 12h3M2 15h3M2 18h3" stroke="#a46ae0" stroke-width="1.4"/>',
  ],
  cream: [
    "Crème",
    '<rect x="7" y="14" width="18" height="12" rx="3" fill="#ffd3e0"/><rect x="6" y="10" width="20" height="5" rx="2" fill="#f2a6c0"/><path d="M11 20h10" stroke="#fff" stroke-width="1.6"/>',
  ],
  toothpaste: [
    "Dentifrice",
    '<path d="M4 12h18l4 3v2l-4 3H4z" fill="#f4f8ff" stroke="#9cc3e6"/><path d="M8 12v8M12 12v8" stroke="#e86a6a" stroke-width="2"/><rect x="26" y="14" width="3" height="4" rx="1" fill="#7fc0ee"/>',
  ],
  laundry: [
    "Linge à laver",
    '<path d="M4 24q2-8 8-8t6 4q3-6 8-3t2 9z" fill="#9cc3e6"/><path d="M8 20q4-6 10-2" fill="#f2b84a"/><path d="M14 18q6-4 10 2" fill="#e86a6a" opacity=".85"/><rect x="4" y="24" width="24" height="3" rx="1.5" fill="#7fa6c8"/>',
  ],
});
const DOK = {
  pillow: { c: ["bed"], a: ["sofa"] },
  teddy: { c: ["bed"], a: ["wshelf", "shelf", "dresser", "side", "toybox"] },
  lamp: { c: ["side", "desk"], a: ["dresser", "wshelf", "shelf", "tv", "console"] },
  clock: { c: ["side", "wshelf"], a: ["desk", "dresser", "shelf"] },
  books: { c: ["shelf", "wshelf"], a: ["desk", "side", "dresser", "coffee"] },
  computer: { c: ["desk"], a: [] },
  shirt: { c: ["wardrobe"], a: [] },
  cshirt: { c: ["wardrobe"], a: [] },
  dress: { c: ["wardrobe"], a: [] },
  sweater: { c: ["wardrobe", "drawer"], a: [] },
  socks: { c: ["drawer"], a: ["wardrobe"] },
  poster: { c: ["wall"], a: [] },
  frame: { c: ["wall"], a: ["shelf", "wshelf", "side", "dresser", "console", "desk"] },
  mirror: { c: ["wall"], a: [] },
  plant: {
    c: ["wshelf", "shelf", "side", "dresser", "console", "table"],
    a: ["floor", "desk", "coffee", "tv", "counter", "sink"],
  },
  toothbrush: { c: ["sink"], a: ["wshelf"] },
  toothpaste: { c: ["sink"], a: ["wshelf", "bcab"] },
  soap: { c: ["sink", "tub"], a: ["wshelf"] },
  towel: { c: ["rail"], a: ["hook"] },
  shampoo: { c: ["tub"], a: ["wshelf", "sink"] },
  paper: { c: ["toilet"], a: ["rail", "bcab"] },
  duck: { c: ["tub", "toybox"], a: ["wshelf", "shelf", "sink"] },
  bathmat: { c: ["floor"], a: [] },
  hairdryer: { c: ["bcab"], a: ["sink", "wshelf"] },
  cream: { c: ["wshelf", "sink"], a: ["bcab"] },
  perfume: { c: ["dresser", "wshelf", "sink"], a: ["side", "bcab"] },
  laundry: { c: ["hamper"], a: [] },
  pot: { c: ["cab", "stove"], a: [] },
  pan: { c: ["stove", "cab"], a: [] },
  plate: { c: ["ucab"], a: ["cab", "table"] },
  mug: { c: ["ucab", "desk"], a: ["counter", "table", "side", "coffee", "wshelf"] },
  bowl: { c: ["ucab"], a: ["cab", "table"] },
  cutlery: { c: ["kdrawer"], a: ["table"] },
  spatula: { c: ["kdrawer"], a: ["counter"] },
  kettle: { c: ["stove", "counter"], a: [] },
  toaster: { c: ["counter"], a: ["table"] },
  fruit: { c: ["table"], a: ["counter"] },
  magnet: { c: ["fridge"], a: [] },
  spices: { c: ["wshelf", "ucab"], a: ["counter"] },
  board: { c: ["counter"], a: ["kdrawer", "cab"] },
  tv: { c: ["tv"], a: [] },
  gamepad: { c: ["tv"], a: ["coffee", "sofa"] },
  remote: { c: ["coffee"], a: ["sofa", "tv", "side"] },
  book: { c: ["shelf", "coffee", "side"], a: ["wshelf", "desk", "sofa", "bed", "dresser"] },
  cushion: { c: ["sofa"], a: ["bed"] },
  blanket: { c: ["sofa", "bed"], a: [] },
  vase: { c: ["side", "wshelf"], a: ["coffee", "shelf", "tv", "console", "table"] },
  quilt: { c: ["bed"], a: [] },
  jewel: { c: ["dresser"], a: ["side"] },
  bottle: { c: ["change"], a: ["shelf", "wshelf", "side"] },
  diapers: { c: ["bdrawer"], a: ["change", "shelf"] },
  onesie: { c: ["bdrawer"], a: ["change"] },
  rattle: { c: ["toybox"], a: ["bed", "shelf"] },
  blocks: { c: ["toybox"], a: ["shelf", "floor"] },
  nightlight: { c: ["wshelf", "shelf"], a: ["change", "side"] },
  horse: { c: ["floor"], a: [] },
  coat: { c: ["hook"], a: [] },
  hat: { c: ["hook"], a: ["bench", "console"] },
  scarf: { c: ["hook"], a: ["bench"] },
  boots: { c: ["shoes"], a: ["floor"] },
  sneakers: { c: ["shoes"], a: ["floor"] },
  umbrella: { c: ["ustand"], a: ["hook"] },
  keys: { c: ["console"], a: ["bench"] },
  bag: { c: ["hook", "bench"], a: ["console"] },
  letters: { c: ["console"], a: ["bench"] },
  pens: { c: ["desk"], a: ["odrawer", "wshelf"] },
  folder: { c: ["files"], a: ["shelf", "odrawer"] },
  notebook: { c: ["odrawer"], a: ["desk", "shelf"] },
  earth: { c: ["wshelf", "shelf"], a: ["desk"] },
  ball: { c: ["floor"], a: ["sandbox"] },
  bucket: { c: ["sandbox"], a: ["floor"] },
  shovel: { c: ["sandbox"], a: ["floor"] },
  truck: { c: ["sandbox"], a: ["floor"] },
  can: { c: ["flowerbed"], a: ["ptable", "floor"] },
  flowerpot: { c: ["ptable", "flowerbed"], a: ["floor"] },
  bike: { c: ["shed"], a: ["floor"] },
  scooter: { c: ["shed"], a: ["floor"] },
  kite: { c: ["shed"], a: ["ptable"] },
  chair: { c: ["floor"], a: [] },
  train: { c: ["floor", "sandbox"], a: [] },
};
Object.entries(DOK).forEach(([e, t]) => {
  DIT[e] && (DIT[e][2] = t.c);
});
const DSZ = {
  tv: 34,
  plant: 30,
  horse: 34,
  bike: 38,
  chair: 32,
  scooter: 30,
  coat: 30,
  lamp: 28,
  computer: 30,
  mirror: 28,
  poster: 28,
  frame: 24,
  umbrella: 28,
  bathmat: 30,
  quilt: 32,
  blanket: 30,
  toothbrush: 18,
  soap: 18,
  keys: 18,
  letters: 20,
  pens: 20,
  rattle: 20,
  remote: 19,
  gamepad: 22,
  magnet: 16,
  cutlery: 20,
  spatula: 20,
  clock: 22,
  perfume: 20,
  jewel: 22,
  toothpaste: 20,
  cream: 20,
  socks: 22,
  nightlight: 20,
  mug: 20,
  spices: 22,
  bottle: 20,
  duck: 20,
  earth: 24,
  notebook: 22,
};