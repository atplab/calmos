// Motuiles : plateau, IA, chevalet et glisser des tuiles via Input (scrHub…scrInstall)
function scrHub(K) {
  (scrInstall(), (cur = "scrabble"), nv("games"), theme("scrabble"), (SC.scr = "hub"), (SC.fid = ""));
  const T = ALL.find((e) => "scrabble" === e.id),
    S = "s" === st.get("scr:mode", "n"),
    G = st.get("scr:ia", null),
    on = G && !G.e,
    L = scrIaGl(),
    W = Object.keys(st.get("scr:iaw", {})).length,
    mm = st.get("scr:mm", 0),
    go = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    seg = `<div class="rcx-b"><div class="rcx-m"><div class="rcx-t"><small>Mode de jeu</small><span>${S ? "Avec un ami ou un inconnu, chacun son tour" : "Contre l’IA, niveau après niveau"}</span></div><div class="plseg"><button class="${S ? "" : "on"}" data-a="scrMode" data-v="n">Normal</button><button class="${S ? "on" : ""}" data-a="scrMode" data-v="s">Social</button></div></div></div>`;
  ((app.innerHTML =
    `<div class="top stk">${bk("home")}<div class="chip">🫧 ${FLX()}</div></div><details class="glass story pt-scrabble gdet"${!1 !== window.GDO ? " open" : ""}><summary><i>${gSv(T)}</i><h2>La partie du soir</h2><span class="gdc" aria-hidden="true"></span></summary><p>Pose des mots sur le plateau avec les sept lettres de ton chevalet. En mode Normal, affronte l’IA : elle devient plus forte à chaque niveau. En mode Social, joue avec un ami ou un inconnu, chacun son tour, plusieurs parties à la fois si tu veux. Chaque mot rapporte 2 🫧 ; à la fin, le gagnant reçoit 10 🫧 et l’autre 2 🫧. Pas d’indices ici.</p></details><div class="opts">` +
    (S
      ? `<section class="rc rcx pt-scrabble scso" data-g="Ⓛ"><div class="rc-ic">${gSv(T)}</div><div class="rc-t"><small>Social</small><b>${mm ? "Recherche en cours" : "Parties en ligne"}</b><span>${esc(SC.mmMsg || (mm ? "Tu seras prévenu(e) dès que quelqu’un te rejoint, même plus tard." : "Avec un ami ou un joueur au hasard, plusieurs parties à la fois."))}</span></div><div class="scbt">${mm ? `<button class="rc-go" data-a="scrMMx">Annuler la recherche</button>` : `<button class="rc-go" data-a="scrMM"${SC.mmBusy ? " disabled" : ""}>Chercher une partie</button>`}<button class="rc-go${SC.pick ? " on" : ""}" data-a="scrPick">${SC.pick ? "Fermer" : "Jouer avec un ami"}</button></div><div id="scrh" class="scrh"></div>${seg}</section>`
      : `<section class="rc rcx pt-scrabble" data-g="Ⓛ"><div class="rc-ic">${gSv(T)}</div><div class="rc-t"><small>${on ? "Continuer" : "Commencer"}</small><b>Niveau ${L}</b><span>${on ? "Partie en cours · " + G.s[G.p.indexOf("me")] + " – " + G.s[G.p.indexOf("ia")] : W ? W + " niveau" + (W > 1 ? "s" : "") + " terminé" + (W > 1 ? "s" : "") : "Aucun niveau terminé"}</span></div><button class="rc-go" data-a="scrIa">Jouer${go}</button>${seg}${UNL() ? '<div class="golv"><label>Aller au niveau <input id="golv" type="number" min="1" inputmode="numeric" placeholder="ex. 120"></label><button class="rc-go" data-a="scrGo">Jouer</button></div>' : ""}</section>`) +
    `</div>${S ? "" : `<div id="scrh"></div>`}`),
    S &&
      (SO.col || "conn" === SO.st || socInit(),
      scrSync(),
      scrHub2(),
      mm &&
        window.__fb &&
        __fb.mmHas &&
        !SC.mmChk &&
        ((SC.mmChk = 1),
        __fb
          .mmHas()
          .then((e) => {
            ((SC.mmChk = 0),
              e ||
                !st.get("scr:mm", 0) ||
                (st.set("scr:mm", 0),
                (SC.mmMsg = "Quelqu’un a répondu à ta recherche : ta partie est dans la liste."),
                "hub" === SC.scr && scrHub(1)));
          })
          .catch(() => {
            SC.mmChk = 0;
          }))),
    scrLoad(),
    K || window.scrollTo(0, 0));
}
const scrMMok = () => !!(window.__fb && __fb.mmList);
async function scrSearch() {
  if (SC.mmBusy) return;
  const me = st.get("soc:me", null);
  if (!scrMMok())
    return (
      (SC.mmMsg = "La recherche de partie fonctionne dans l’application Calmos, avec un compte."),
      scrHub(1)
    );
  if (!SO.uid || !SO.got || !me || !me.code)
    return (
      (SC.mmMsg = "Connecte-toi d’abord dans l’onglet Social."),
      SO.col || "conn" === SO.st || socInit(),
      scrHub(1)
    );
  ((SC.mmBusy = 1), (SC.mmMsg = "Recherche d’un joueur…"), scrHub(1));
  try {
    const L = (await __fb.mmList()).filter(
      (x) =>
        x.id !== SO.uid &&
        SOK.test(x.id) &&
        !/^♟/.test(x.n) &&
        !(SC.G[x.id] && !SC.G[x.id].e) &&
        Date.now() - x.t < 30 * 864e5,
    );
    for (const c of L) {
      try {
        await __fb.mmDel(c.id);
      } catch (e) {
        continue;
      }
      const o = SC.G[c.id],
        g = scrNew(SO.uid, c.id, o && o.e ? { id: o.id, w: o.w, rs: o.rs, n: o.n } : null),
        db = await scrDb();
      if (!db) throw 0;
      (await db.collection("sc").doc(scrGid(c.id)).set(g),
        (SC.G[c.id] = g),
        (SC.got[c.id] = !0),
        scrMark(c.id, g),
        scrSeen(c.id, g));
      try {
        await __fb.addUid(c.id);
      } catch (e) {}
      try {
        await __fb.ping(c.id);
      } catch (e) {}
      (st.get("scr:mm", 0) && (st.set("scr:mm", 0), __fb.mmDel(SO.uid).catch(() => {})),
        (SC.mmBusy = 0),
        (SC.mmMsg = ""),
        scrWatch(c.id));
      return scrOpen(c.id);
    }
    (await __fb.mmPut(me.name || "Joueur"),
      st.set("scr:mm", Date.now()),
      (SC.mmMsg =
        "Personne n’attend pour l’instant : ta demande est enregistrée. Le prochain joueur qui cherche une partie tombera sur toi."));
  } catch (e) {
    SC.mmMsg = "La recherche n’a pas abouti. " + scrWhy(e);
  }
  ((SC.mmBusy = 0), "hub" === SC.scr && scrHub(1));
}
function scrHub2() {
  const e = $("#scrh");
  if (!e) return;
  if ("s" !== st.get("scr:mode", "n")) return void (e.innerHTML = "");
  const a = st.get("soc:me", null),
    M = (t, x, b) =>
      `<div class="scsx"><b>${t}</b><p class="note">${x}</p>${b ? `<button class="btn alt" data-a="scrSoc">${b}</button>` : ""}</div>`;
  if ("na" === SO.st)
    return void (e.innerHTML = M(
      "Une connexion est nécessaire",
      "Pour jouer en ligne, connecte-toi dans l’onglet Social. Le mode Normal se joue sans connexion.",
      "Ouvrir Social",
    ));
  if (!(SO.uid && SO.got && a && a.code)) {
    const t = "slow" === SO.st || "err" === SO.st;
    return void (e.innerHTML = M(
      t ? "Pas de réponse pour l’instant" : "Un instant…",
      t ? "Tes parties se chargeront dès que possible." : "Tes parties arrivent.",
    ));
  }
  const F = Object.keys(a.fr || {}).filter((e) => a.fr[e] > 0 && SO.P[e]),
    G = new Set();
  (F.forEach((e) => SC.G[e] && G.add(e)),
    Object.entries(SO.P).forEach(([e, t]) => {
      e !== SO.uid && t.sg && t.sg[SO.uid] && SC.G[e] && G.add(e);
    }),
    Object.keys(a.sg || {}).forEach((e) => {
      SC.G[e] && SO.P[e] && G.add(e);
    }));
  const O = { me: 0, them: 1, new: 2, load: 2, err: 3, end: 3 },
    srt = (x) =>
      x.sort((e, t) => O[scrStat(e).k] - O[scrStat(t).k] || scrNm(e).localeCompare(scrNm(t), "fr")),
    R = (e, b) => {
      const t = scrStat(e);
      return `<div class="fr-i"><button class="fr-o" data-a="scrOpen" data-v="${esc(e)}">${socAv(e)}<span class="fr-t"><b>${esc(scrNm(e))}</b><small${"me" === t.k ? ' class="scgo"' : ""}>${esc(b && "new" === t.k ? "Pas encore de partie" : t.t)}</small></span></button><div class="fr-b"><button class="sb${"me" === t.k ? " buy" : ""}" data-a="scrOpen" data-v="${esc(e)}">${b && "new" === t.k ? "Défier" : scrBtn(e)}</button></div></div>`;
    },
    L = srt([...G].filter((e) => !SC.G[e].e)),
    D = srt([...G].filter((e) => SC.G[e].e));
  let o = "";
  (SC.pick &&
    (o +=
      `<div class="sch2">Choisis un ami</div>` +
      (F.length
        ? `<div class="scgl">${srt(F.slice())
            .map((e) => R(e, 1))
            .join("")}</div>`
        : M("Pas encore d’ami", "Ajoute un ami avec son code ami dans l’onglet Social.", "Ouvrir Social"))),
    (o +=
      `<div class="scmy"><div class="sch2">Parties en cours${L.length ? " · " + L.length : ""}</div>` +
      (L.length
        ? `<div class="scgl">${L.map((e) => R(e)).join("")}</div>`
        : '<p class="note scn">Aucune partie en cours. Cherche une partie ou joue avec un ami.</p>')),
    D.length &&
      (o += `<details class="scdn"><summary>Parties terminées · ${D.length}</summary><div class="scgl">${D.map((e) => R(e)).join("")}</div></details>`),
    (o += "</div>"),
    (e.innerHTML = o));
}
function scrZl(u, z, mx, my) {
  const b = u.querySelector(".scb");
  if (!b) return;
  const ow = b.offsetWidth || 1,
    px = u.scrollLeft + mx,
    py = u.scrollTop + my;
  z = Math.max(1, Math.min(3.2, z));
  SC.zl = z;
  SC.zoom = z > 1.04;
  u.classList.toggle("z", SC.zoom);
  b.style.width = z * 100 + "%";
  const r = b.offsetWidth / ow;
  u.scrollLeft = px * r - mx;
  u.scrollTop = py * r - my;
  const zb = document.querySelector('[data-a="scZ"]');
  zb &&
    (zb.classList.toggle("buy", SC.zoom),
    (zb.textContent = SC.zoom ? "Zoom ×" + z.toFixed(1).replace(".", ",") : "Zoom"));
}
if (0 && !window.SCPZ) {
  window.SCPZ = 1;
  let P = null;
  const D = (t) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
  document.addEventListener(
    "touchstart",
    (e) => {
      const u = e.target.closest && e.target.closest("#scbw");
      if (u && e.touches.length === 2) {
        P = { u, d: D(e.touches), z: SC.zl || 1 };
        e.preventDefault();
      }
    },
    { passive: !1 },
  );
  document.addEventListener(
    "touchmove",
    (e) => {
      if (!P || e.touches.length !== 2) return;
      e.preventDefault();
      const r = P.u.getBoundingClientRect(),
        mx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - r.left,
        my = (e.touches[0].clientY + e.touches[1].clientY) / 2 - r.top;
      scrZl(P.u, (P.z * D(e.touches)) / P.d, mx, my);
    },
    { passive: !1 },
  );
  document.addEventListener("touchend", (e) => {
    if (P && e.touches.length < 2) {
      if ((SC.zl || 1) < 1.08) scrZl(P.u, 1, 0, 0);
      P = null;
    }
  });
  document.addEventListener(
    "wheel",
    (e) => {
      const u = e.target.closest && e.target.closest("#scbw");
      if (!u || !e.ctrlKey) return;
      e.preventDefault();
      const r = u.getBoundingClientRect();
      scrZl(u, (SC.zl || 1) * Math.exp(-e.deltaY * 0.01), e.clientX - r.left, e.clientY - r.top);
    },
    { passive: !1 },
  );
  let M = null;
  document.addEventListener("pointerdown", (e) => {
    const u = e.pointerType === "mouse" && SC.zoom && e.target.closest && e.target.closest("#scbw");
    if (u && !e.target.closest(".pd"))
      M = { u, x: e.clientX, y: e.clientY, l: u.scrollLeft, t: u.scrollTop, m: 0 };
  });
  document.addEventListener("pointermove", (e) => {
    if (!M) return;
    const dx = e.clientX - M.x,
      dy = e.clientY - M.y;
    if (Math.abs(dx) + Math.abs(dy) > 6) M.m = 1;
    M.u.scrollLeft = M.l - dx;
    M.u.scrollTop = M.t - dy;
  });
  document.addEventListener("pointerup", () => {
    M && M.m && (SC.nopan = Date.now());
    M = null;
  });
}
function scrRects() {
  const m = {};
  document.querySelectorAll("#scg .sct[data-v]").forEach((e) => {
    m[e.dataset.v] = e.getBoundingClientRect();
  });
  document.querySelectorAll("#scg .scc.pd[data-k]").forEach((e) => {
    m[e.dataset.k] = e.getBoundingClientRect();
  });
  if (window.SCGR) {
    SCGR.k != null && (m[SCGR.k] = SCGR.r);
    window.SCGR = null;
  }
  return m;
}
function scrFlip(m) {
  if (!m || !Element.prototype.animate) return;
  document.querySelectorAll("#scg .sct[data-v],#scg .scc.pd[data-k]").forEach((e) => {
    if (e.classList.contains("nw")) return;
    const k = e.classList.contains("sct") ? e.dataset.v : e.dataset.k,
      o = m[k];
    if (!o) return;
    const n = e.getBoundingClientRect();
    if (!n.width) return;
    const dx = o.left - n.left,
      dy = o.top - n.top,
      sx = o.width / n.width,
      sy = o.height / n.height;
    if (Math.abs(dx) + Math.abs(dy) < 1 && Math.abs(sx - 1) < 0.03) return;
    const d = Math.hypot(dx, dy);
    e.style.zIndex = 6;
    const an = e.animate(
      [
        { transform: `translate(${dx}px,${dy}px) scale(${sx},${sy})`, transformOrigin: "0 0" },
        { transform: "translate(0,0) scale(1,1)", transformOrigin: "0 0" },
      ],
      { duration: Math.min(460, 200 + d * 0.45), easing: "cubic-bezier(.22,1.25,.36,1)" },
    );
    an.onfinish = an.oncancel = () => {
      e.style.zIndex = "";
    };
  });
}
function scrRackMv(s, a) {
  if (!s || !s.r) return;
  const h = document.elementFromPoint(a.clientX, a.clientY),
    R = h && h.closest && h.closest("#scg .scrk");
  if (!R) return;
  const kids = [...R.children],
    cur = SC.ord.slice(),
    oth = cur.filter((x) => x !== s.v);
  let p = 0;
  kids.forEach((c, i) => {
    if (cur[i] === s.v) return;
    const r = c.getBoundingClientRect();
    a.clientX > r.left + r.width / 2 && p++;
  });
  const nw = oth.slice();
  nw.splice(p, 0, s.v);
  if (nw.join() === cur.join()) return;
  SC.ord = nw;
  SC.dd = 1;
  scrDraw();
  SC.dd = 0;
  const t = document.querySelector(`#scg .sct[data-v="${s.v}"]`);
  t && (t.classList.add("dg"), (s.t = t));
  vib && vib(5);
}
function scrFit() {
  document.querySelectorAll("#scg .s5 span").forEach((s) => {
    const f = s.dataset.f || (s.dataset.f = s.textContent);
    s.textContent = f;
    const F =
      {
        Abandonner: ["Aband.", "Ab."],
        "Échanger": ["Éch."],
        "Mélanger": ["Mél."],
        Passer: ["Pass."],
        Valider: ["Val."],
      }[f] || [];
    for (const a of F) {
      if (s.scrollWidth <= s.clientWidth + 1) return;
      s.textContent = a;
    }
    if (s.scrollWidth <= s.clientWidth + 1) return;
    let n = f.length;
    while (s.scrollWidth > s.clientWidth + 1 && n > 2) {
      n--;
      s.textContent = f.slice(0, n).replace(/[\s.]+$/, "") + ".";
    }
  });
}
window.addEventListener("resize", () => {
  window.scrFit && scrFit();
});
function scrOpen(e) {
  if ((scrInstall(), !SO.uid)) return scrHub();
  ((cur = "scrabble"), nv("games"), theme("scrabble"), ($("#nav").hidden = !0), (SC.zoom = !1));
  SC.zl = 1;
  (Object.assign(SC, {
    scr: "game",
    fid: e,
    pend: [],
    sel: -1,
    mode: "",
    swp: [],
    jk: null,
    cf: "",
    m: "",
    rkk: "",
    pay: "",
    slow: 0,
  }),
    (app.innerHTML = `<div class="top stk"><button class="back" data-a="scrBk">‹ Parties</button><button class="tl" data-a="scHist">Derniers coups</button><div class="tr"><div class="chip">🫧 ${FLX()}</div></div></div><section class="glass play pg-scrabble" id="scg" aria-label="Motuiles avec ${esc(scrNm(e))}"></section>`),
    scrWatch(e),
    scrLoad().then(() => {
      $("#scg") && scrDraw();
    }),
    scrDraw(),
    window.scrollTo(0, 0));
}
const scrCl = (e, t) => {
  const a = e.id + ":" + e.r[t];
  (SC.rkk !== a &&
    ((SC.rkk = a),
    (SC.pend = []),
    (SC.sel = -1),
    (SC.mode = ""),
    (SC.swp = []),
    (SC.jk = null),
    (SC.ord = [...e.r[t]].map((e, t) => t)),
    (SC.rkR = 1),
    SC.drawN > 0 &&
      ((SC.newT = new Set([...e.r[t]].map((e, t) => t).slice(-SC.drawN))),
      (SC.ntS = performance.now()),
      (SC.drawN = 0),
      clearTimeout(SC.ntT),
      (SC.ntT = setTimeout(() => {
        SC.newT = null;
      }, 1700)))),
    (SC.pend = SC.pend.filter((t) => "." === e.b[t.i])));
};
function scrPrev(e, t) {
  if (!SC.pend.length)
    return "swap" === SC.mode
      ? "Choisis les lettres à échanger."
      : '<span class="hint">Touche une lettre de ton chevalet, puis une case du plateau.</span>';
  const a = scrEval(
    e.b,
    SC.pend.map((e) => [e.i, e.c, e.j]),
    scrHas,
  );
  return a.e
    ? `<span class="hint">${esc(a.e)}</span>`
    : a.ok
      ? `<span class="okp">${a.words.map((e) => esc(e.w)).join(" · ")} — <b>${a.total}</b> pts${7 === SC.pend.length ? " · Motuiles ! +50" : ""}</span>`
      : `<span class="bad">${a.bad.map((e) => "« " + esc(e) + " »").join(", ")} ${a.bad.length > 1 ? "ne sont pas dans" : "n’est pas dans"} le dictionnaire.</span>`;
}
function scrDraw() {
  if (SCD && SCD.on && !SC.dd) return void (SC.drawP = 1);
  const e = $("#scg");
  if (!e || "game" !== SC.scr) return;
  const t = SC.fid,
    a = SC.G[t],
    s = scrNm(t),
    n = scrMe(),
    o = a ? a.p.indexOf(n) : -1,
    i = $("#scbw"),
    r = i ? i.scrollLeft : 0,
    l = i ? i.scrollTop : 0,
    c = i && i.classList.contains("z"),
    d = (e, t) => `<h2 style="margin:0 0 6px">${e}</h2><p class="note" style="margin:0 0 14px">${t}</p>`;
  let f;
  if (SC.err[t])
    f =
      d(
        "Partie injoignable",
        "La partie avec " +
          esc(s) +
          " ne répond pas pour l’instant. " +
          esc(SC.ec[t] || "") +
          " Ton ami doit aussi t’avoir ajouté dans Social.",
      ) + '<button class="btn" data-a="scrRetry">Réessayer</button>';
  else if (SC.got[t])
    if (!a || o < 0)
      f =
        "ia" === t
          ? d(
              "Contre l’IA · " + scrIaTl(),
              "Chacun reçoit sept lettres. Tu commences : pose un premier mot qui passe par l’étoile, au centre. Bats l’IA pour passer au niveau suivant : elle devient plus forte à chaque niveau. Chaque mot rapporte 2 🫧 ; à la fin, le gagnant reçoit 10 🫧 et l’autre 2 🫧.",
            ) + `<button class="btn" data-a="scNew">Lancer la partie</button>`
          : d(
              "Motuiles avec " + esc(s),
              "Chacun reçoit sept lettres. Tu commences : pose un premier mot qui passe par l’étoile, au centre. " +
                esc(s) +
                " jouera son tour quand il le voudra, et tu verras sa réponse ici. Chaque mot rapporte 2 🫧 ; en fin de partie, le gagnant reçoit 10 🫧 et l’autre 2 🫧. Pas d’indices.",
            ) + `<button class="btn" data-a="scNew"${SC.busy ? " disabled" : ""}>Lancer la partie</button>`;
    else {
      scrCl(a, o);
      const e = a.t === o && !a.e,
        t = a.r[o],
        n = new Set(SC.pend.map((e) => e.k)),
        i = new Map(SC.pend.map((e) => [e.i, e])),
        r = new Set(a.lm || []);
      let l = "";
      const NW = (() => {
          const k = (a.lm || []).join();
          if (SC.lmk !== k) {
            const f = SC.lmk !== undefined;
            SC.lmk = k;
            return f;
          }
          return 0;
        })(),
        BM = scBM(a.b),
        CC = (a.b.length - 1) / 2,
        EV = SC.pend.length
          ? scrEval(
              a.b,
              SC.pend.map((e) => [e.i, e.c, e.j]),
              scrHas,
            )
          : null,
        LP = EV && EV.ok ? Math.max(...SC.pend.map((e) => e.i)) : -1;
      for (let e = 0; e < a.b.length; e++) {
        const t = a.b[e],
          s = i.get(e),
          n = BM[e];
        if ("." !== t || s) {
          const a = s ? s.c : t.toUpperCase(),
            n = s ? s.j : t !== t.toUpperCase();
          l += `<div class="scc t${s ? " pd" : ""}${r.has(e) ? " lm" + (NW ? " nw" : "") : ""}${n ? " jk" : ""}"${s ? ` data-k="${s.k}"` : ""} role="gridcell" ${s ? `data-a="scc" data-v="${e}" ` : ""}aria-label="${a}${n ? " (joker)" : ""}"><b>${a}</b>${n ? "" : `<small>${SCP[a]}</small>`}${e === LP ? `<em class="scsc${SC.scK !== LP + ":" + EV.total ? " pop" : ""}">${EV.total}</em>` : ""}</div>`;
        } else
          l += `<div class="scc${"." !== n ? " pm-" + n : ""}${CC === e ? " ctr" : ""}" role="gridcell" data-a="scc" data-v="${e}">${CC === e ? '<i class="st"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" fill="#fff" stroke="#fff" stroke-width="3" stroke-linejoin="round" transform="translate(0 -.9)"/></svg></i>' : "l" === n ? "<i>LD</i>" : "L" === n ? "<i>LT</i>" : "m" === n ? "<i>MD</i>" : "M" === n ? "<i>MT</i>" : ""}</div>`;
      }
      const c = SC.ord
          .map((e) =>
            n.has(e)
              ? '<span class="sct emp"></span>'
              : `<button${SC.newT && SC.newT.has(e) ? ` style="animation-delay:${Math.round([...SC.newT].indexOf(e) * 120 + 120 - (performance.now() - SC.ntS))}ms"` : ""} class="sct${SC.newT && SC.newT.has(e) ? " nw" : ""}${SC.sel === e && "swap" !== SC.mode ? " on" : ""}${"swap" === SC.mode && SC.swp.includes(e) ? " sw" : ""}${"?" === t[e] ? " jk" : ""}" data-a="scr" data-v="${e}" aria-label="Lettre ${"?" === t[e] ? "joker" : t[e]}"><b>${"?" === t[e] ? '<svg class="scjs" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="scjg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8378a"/><stop offset="1" stop-color="#6a3fd8"/></linearGradient></defs><g transform="translate(0 -1.6)"><path d="M12 4.3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" fill="#fff" stroke="#fff" stroke-width="6" stroke-linejoin="round"/><path d="M12 4.3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" fill="url(#scjg)" stroke="url(#scjg)" stroke-width="2.6" stroke-linejoin="round"/></g></svg>' : t[e]}</b>${"?" === t[e] ? "" : `<small>${SCP[t[e]]}</small>`}</button>`,
          )
          .join(""),
        d = SC.pend.length
          ? scrEval(
              a.b,
              SC.pend.map((e) => [e.i, e.c, e.j]),
              scrHas,
            )
          : null,
        u = e && d && d.ok && !SC.busy,
        h = (e) => SC.cf === e;
      let p;
      p = a.e
        ? `<button class="btn" data-a="scNew"${SC.busy ? " disabled" : ""}>Nouvelle partie</button>`
        : "swap" === SC.mode
          ? `<button class="btn" data-a="scSwOk"${SC.swp.length && e && !SC.busy ? "" : " disabled"}>Échanger ${SC.swp.length || ""} lettre${SC.swp.length > 1 ? "s" : ""}</button><button class="btn alt" data-a="scSwNo">Annuler</button>`
          : `<div class="scx5"><button class="s5 ok" data-a="scOk"${u ? "" : " disabled"} style="animation-delay:-${Math.round(performance.now() % 1800)}ms"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg><span>Valider</span></button><button class="s5" data-a="scSh"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h3c4 0 6 10 10 10h3M17 14l3 3-3 3M4 17h3c1.6 0 2.8-1.5 3.8-3.3M17 4l3 3-3 3M13.2 9.3C14.2 7.9 15.4 7 17 7h3"/></svg><span>Mélanger</span></button><button class="s5" data-a="scSwap"${e && a.g.length >= 7 && !SC.busy ? "" : " disabled"}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/></svg><span>Échanger</span></button><button class="s5${h("pass") ? " cf" : ""}" data-a="scPass"${e && !SC.busy ? "" : " disabled"}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l8 6-8 6zM18 6v12"/></svg><span>${h("pass") ? "Sûr ?" : "Passer"}</span></button><button class="s5${h("quit") ? " cf" : ""}" data-a="scQuit"${SC.busy ? " disabled" : ""}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 21V4M6 4h11l-2 4 2 4H6"/></svg><span>${h("quit") ? "Sûr ?" : "Abandonner"}</span></button></div>`;
      const m = a.h
        .slice(-8)
        .reverse()
        .map((e) => {
          const [t, a, n] = e.split("|");
          return `<li><b>${+t === o ? "Toi" : esc(s)}</b> ${"-" === a ? "passe son tour" : "~" === a ? "échange des lettres" : "x" === a ? "abandonne" : esc(a) + " · " + n + " pts"}</li>`;
        })
        .join("");
      let b;
      if (a.e) {
        const e = a.rs >= 0 && a.n < 6;
        b = `<div class="scend"><b>${a.rs >= 0 ? (a.rs === o ? "Tu as abandonné." : esc(s) + " a abandonné.") : a.w < 0 ? "Égalité !" : a.w === o ? "Bravo, tu as gagné !" : esc(s) + " a gagné."}</b><span>${a.s[o]} – ${a.s[1 - o]}</span><small>${e ? "Partie abandonnée trop tôt : pas de bulles." : "Tu reçois " + scrReward(a.w, o) + " 🫧" + ("ia" === SC.fid && a.w === o && !a.fr ? " · Niveau " + scrIaGl0() + " débloqué" : "")}</small></div>`;
      } else
        b = `<p class="m" id="m" role="status" aria-live="polite">${esc(SC.m || (e ? "À toi de jouer." : "ia" === SC.fid ? "L’IA réfléchit…" : "Au tour de " + s + ". Prépare ton prochain mot en attendant."))}</p>`;
      f = `${a.e ? b : ""}<div class="scs"><div class="scpl${e ? " on" : ""}" style="animation-delay:-${Math.round(performance.now() % 2600)}ms"><small>Toi</small><b>${a.s[o]}</b></div><div class="scmid"><small>Sac</small><b>${a.g.length}</b></div><div class="scpl${e || a.e ? "" : " on"}" style="animation-delay:-${Math.round(performance.now() % 2600)}ms"><small>${esc(s)}</small><b>${a.s[1 - o]}</b></div></div>${a.e ? "" : b}<div class="scbw${SC.zoom ? " z" : ""}" id="scbw"><div class="scb" style="--n:${scN(a.b)};width:${SC.zoom ? (SC.zl || 1.8) * 100 : 100}%" role="grid" aria-label="Plateau">${l}</div></div><div class="scpv" id="scpv" role="status" aria-live="polite"${SC.bpC ? ' style="row-gap:0"' : ""}>${a.e ? "" : scrBar(a, o)}</div>${a.e ? "" : `<div class="scrk" role="group" aria-label="Ton chevalet">${c}</div>`}<div class="sca">${p}</div>${m ? `<details class="sch"><summary>Derniers coups</summary><ul>${m}</ul></details>` : ""}${SC.jk ? `<div class="scjo" role="dialog" aria-label="Lettre du joker"><div class="scjc"><b>Quelle lettre pour le joker ?</b><div class="scjg">${[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((e) => `<button data-a="scJ" data-v="${e}">${e}</button>`).join("")}</div><button class="btn alt" data-a="scJx">Annuler</button></div></div>` : ""}`;
    }
  else
    f = SC.slow
      ? d(
          "Pas de réponse pour l’instant",
          "Le serveur ne répond pas. Vérifie ta connexion : ton ami doit aussi t’avoir ajouté dans Social.",
        ) + '<button class="btn" data-a="scrRetry">Réessayer</button>'
      : '<p class="note" style="margin:0">Un instant…</p>';
  const FR = scrRects();
  e.innerHTML = f;
  {
    const s = e.querySelector(".scsc");
    SC.scK = s ? (s.closest(".scc").dataset.v || "") + ":" + s.textContent : "";
  }
  scrFit();
  SC.rkR ? (SC.rkR = 0) : scrFlip(FR);
  (SC.gxE > Date.now() && scrGhost(1), scrPopPos());
  {
    const B = e.querySelector(".scbar");
    B && requestAnimationFrame(() => requestAnimationFrame(() => B.classList.add("go")));
  }
  const u = $("#scbw");
  u &&
    (SC.zoom && !c
      ? ((u.scrollLeft = (u.scrollWidth - u.clientWidth) / 2),
        (u.scrollTop = (u.scrollHeight - u.clientHeight) / 2))
      : ((u.scrollLeft = r), (u.scrollTop = l)));
}
const scrIaLv = () => st.get("scr:ialv", 1);
const scrIaGl0 = () => st.get("scr:iagl", 0) || scrIaLv();
const SCFR = [
  [1, "Facile", "Des mots simples, joués sans se presser"],
  [20, "Moyen", "Un adversaire attentif"],
  [60, "Difficile", "Il cherche souvent les meilleurs coups"],
  [150, "Expert", "Il joue presque toujours le meilleur mot"],
];
const scrIaFr = () => {
  const g = typeof SC != "undefined" && SC.G && SC.G.ia;
  return "ia" === SC.fid && "game" === SC.scr && g && g.fr ? g.fr : 0;
};
const scrIaGl = () => scrIaFr() || scrIaGl0();
const scrIaTl = () => {
  const f = scrIaFr();
  return f ? "Libre · " + (SCFR.find((x) => x[0] === f) || [0, "Niveau " + f])[1] : "Niveau " + scrIaGl0();
};
function scrIaCardOld() {
  const g = st.get("scr:ia", null),
    L = scrIaLv(),
    on = g && !g.e;
  return `<section class="glass play soc-i"><h2>Contre l’IA</h2><p class="note" style="margin:0">Niveau ${L}${on ? " · partie en cours, " + g.s[g.p.indexOf("me")] + " – " + g.s[g.p.indexOf("ia")] : " · gagne pour passer au niveau suivant"}</p><button class="btn" style="margin-top:14px" data-a="scrIa">${on ? "Reprendre" : "Jouer le niveau " + L}</button></section>`;
}
function scrOpenIA(N) {
  scrInstall();
  N >= 1 && (st.set("scr:iagl", N), st.set("scr:ia", null));
  ((cur = "scrabble"), nv("games"), theme("scrabble"), ($("#nav").hidden = !0), (SC.zoom = !1));
  SC.zl = 1;
  Object.assign(SC, {
    scr: "game",
    fid: "ia",
    pend: [],
    sel: -1,
    mode: "",
    swp: [],
    jk: null,
    cf: "",
    m: "",
    rkk: "",
    pay: "",
    slow: 0,
    busy: !1,
  });
  let g = null;
  try {
    const r = st.get("scr:ia", null);
    g = scrClean(r);
    g && r && r.fr && (g.fr = r.fr);
  } catch (e) {}
  (!g || g.e) && ((g = scrNew("me", "ia", null)), SC.frN && (g.fr = SC.frN), st.set("scr:ia", g));
  ((SC.G.ia = g), (SC.got.ia = !0), (SC.err.ia = 0));
  ((app.innerHTML = `<div class="top stk"><button class="back" data-a="scrBk">‹ Parties</button><span class="tl">IA · ${scrIaTl()}</span><div class="tr"><div class="chip">🫧 ${FLX()}</div></div></div><section class="glass play pg-scrabble" id="scg" aria-label="Motuiles contre l’IA"></section>`),
    scrLoad().then(() => {
      $("#scg") && scrDraw();
    }),
    scrDraw(),
    g && !g.e && g.t === g.p.indexOf("ia") && scrIaTurn(),
    window.scrollTo(0, 0));
}
function scrIaSave(e, t) {
  if (!e.n) {
    const l = $(".top .tl");
    l && (l.textContent = "IA · " + scrIaTl());
  }
  ((SC.G.ia = e),
    st.set("scr:ia", e),
    t && scrGain(2),
    scrIaEnd(e),
    e.e || e.t !== e.p.indexOf("ia") || scrIaTurn());
  return !0;
}
function scrIaEnd(e) {
  if (!e.e || st.get("scr:iap", "") === e.id) return;
  st.set("scr:iap", e.id);
  const m = e.p.indexOf("me");
  if (e.rs === m && e.n < 6) return;
  if ((scrGain(scrReward(e.w, m)), e.w === m && !e.fr)) {
    const g = scrIaGl0(),
      w = Object.assign({}, st.get("scr:iaw", {}));
    ((w[g] = 1),
      st.set("scr:iaw", w),
      st.set("scr:ialv", Math.max(scrIaLv(), g + 1)),
      st.set("scr:iagl", g + 1));
  }
}
let SCIX = null;
let SCWF = null;
function scrIaTurn() {
  (clearTimeout(SC.iat),
    (SC.iat = setTimeout(
      async () => {
        await scrLoad();
        const g = SC.G.ia;
        if (!g || g.e) return;
        const ai = g.p.indexOf("ia");
        if (g.t !== ai) return;
        scrAiMovesA(g, ai, (MM) => {
          const g2 = SC.G.ia;
          if (g2 !== g || g.e || g.t !== ai) return;
          const mv = scrAiPick(g, ai, scrIaGl(), MM);
          let n;
          (mv
            ? ((n = scrPlay(g, ai, mv.pl, mv.ev)),
              (SC.m = "L’IA joue " + mv.ev.words[0].w + " · " + mv.ev.total + " pts"))
            : g.g.length >= 7
              ? ((n = scrSwap(
                  g,
                  ai,
                  [...g.r[ai]].map((e, t) => t),
                )),
                (SC.m = "L’IA échange ses lettres."))
              : ((n = scrPass(g, ai)), (SC.m = "L’IA passe son tour.")),
            (SC.G.ia = n),
            st.set("scr:ia", n),
            scrIaEnd(n),
            "ia" === SC.fid && $("#scg") && (scrDraw(), sfx && sfx(440, 0.3)));
        });
      },
      900 + Math.random() * 700,
    )));
}
function* scrAiG(g, ai) {
  const b = g.b,
    N = scN(b),
    C = (b.length - 1) / 2,
    rk = g.r[ai],
    cnt = {};
  let J = 0;
  for (const c of rk) "?" === c ? J++ : (cnt[c] = (cnt[c] || 0) + 1);
  const E = !/[A-Za-z]/.test(b),
    U = b.toUpperCase(),
    BL = new Set([...U].filter((c) => "." !== c)),
    nb = Math.min(4, [...U].filter((c) => "." !== c).length);
  if (!SCIX) {
    const X = {};
    let q = 0;
    for (const w of scrDic)
      (w.length >= 2 && w.length <= 11 && (X[w.length] || (X[w.length] = [])).push(w), ++q % 2e4 || (yield));
    SCIX = X;
  }
  let yq = 0;
  const CA = {};
  for (let L = 2; L <= N; L++) {
    const A = (CA[L] = []);
    for (const w of SCIX[L] || []) {
      const k = {};
      let m = 0,
        o = 0;
      for (const c of w) (k[c] = (k[c] || 0) + 1) > (cnt[c] || 0) && (m++, BL.has(c) || o++);
      (o <= J && m <= J + (E ? 0 : nb) && A.push(w), ++yq % 8e3 || (yield));
    }
  }
  const R = [],
    seen = new Set(),
    oc = (i) => "." !== b[i];
  for (const d of [1, N])
    for (let ln = 0; ln < N; ln++) {
      yield;
      for (let s = 0; s < N; s++) {
        const st0 = 1 === d ? ln * N + s : s * N + ln;
        if (s > 0 && oc(st0 - d)) continue;
        let em = 0,
          fx = 0,
          adj = !1,
          ctr = !1;
        for (let L = 1; s + L - 1 < N; L++) {
          const ci = st0 + (L - 1) * d;
          if (oc(ci)) fx++;
          else {
            em++;
            ctr = ctr || ci === C;
            const r = (ci / N) | 0,
              c = ci % N;
            (1 === d ? [r > 0 && ci - N, r < N - 1 && ci + N] : [c > 0 && ci - 1, c < N - 1 && ci + 1]).some(
              (x) => !1 !== x && oc(x),
            ) && (adj = !0);
          }
          if (em > rk.length) break;
          if (L < 2 || !em || (s + L < N && oc(ci + d))) continue;
          if (E ? !ctr : !fx && !adj) continue;
          for (const w of CA[L]) {
            const k = Object.assign({}, cnt);
            let j = J,
              pl = [],
              ok = !0;
            for (let x = 0; x < L; x++) {
              const q = st0 + x * d,
                c = w[x];
              if (oc(q)) {
                if (U[q] !== c) {
                  ok = !1;
                  break;
                }
              } else
                k[c] > 0 ? (k[c]--, pl.push([q, c, !1])) : j > 0 ? (j--, pl.push([q, c, !0])) : (ok = !1);
              if (!ok) break;
            }
            if (!ok) continue;
            const key = pl.map((e) => e.join()).join(";");
            if (seen.has(key)) continue;
            seen.add(key);
            const ev = scrEval(b, pl, scrHas);
            ev.ok && !ev.e && R.push({ pl, ev, w });
          }
        }
      }
    }
  return R.sort((a, b) => b.ev.total - a.ev.total);
}
function scrAiMoves(g, ai) {
  if (!scrDic) return [];
  const it = scrAiG(g, ai);
  let r;
  for (; !(r = it.next()).done;);
  return r.value;
}
function scrAiMovesA(g, ai, cb) {
  if (!scrDic) return cb([]);
  const it = scrAiG(g, ai),
    st0 = () => {
      const t = performance.now();
      let r;
      for (; !(r = it.next()).done;) if (performance.now() - t > 7) return void setTimeout(st0, 0);
      cb(r.value);
    };
  setTimeout(st0, 0);
}
function scrAiPick(g, ai, L, MM) {
  const BX =
    /^(ANUS|CONS?|CONNES?|CULS?|MERDES?|PUTES?|PUTAINS?|BITES?|NIQUER?|ZOBS?|CHIER|CHIES?|FOUTRE|SALOPES?|SALAUDS?|BORDELS?|CONNERIES?|PISSER?|PET|PETS|ROTER?|SEXES?)$/;
  let M = (MM || scrAiMoves(g, ai)).filter((m) => m.ev.words.every((e) => !BX.test(e.w)));
  if (!M.length) return null;
  if (L < 25) {
    SCWF || (SCWF = new Set(WFR.map((e) => e.toUpperCase())));
    const c = M.filter((m) => SCWF.has(m.w) && m.ev.words.every((e) => SCWF.has(e.w)));
    c.length && (M = c);
  }
  if (Math.random() < (L >= 150 ? 0.75 : L >= 50 ? 0.5 : 0)) return M[0];
  const q = Math.min(0.9, 0.3 + 0.0125 * (L - 1));
  let i = Math.round((1 - q) * (M.length - 1) * (0.6 + 0.8 * Math.random()));
  return M[Math.max(0, Math.min(M.length - 1, i))];
}
const scrBK = (a, o) => a.id + ":" + a.n + ":" + a.b + ":" + a.r[o];
function scrBest(a, o) {
  const k = scrBK(a, o);
  if (SC.bst && SC.bst.k === k) return SC.bst;
  if (!scrDic || SC.bstP === k) return null;
  SC.bstP = k;
  scrAiMovesA(a, o, (M) => {
    if (SC.bstP !== k) return;
    ((SC.bst = { k, v: M.length ? M[0].ev.total : 0, mv: M[0] || null }), (SC.bstP = ""));
    const v = $("#scpv"),
      G = SC.G[SC.fid];
    if (v && G && "game" === SC.scr && SC.pend.length && scrBK(G, o) === k && !v.querySelector(".scbpm")) {
      v.innerHTML = scrBar(G, o);
      const B = v.querySelector(".scbar");
      B && requestAnimationFrame(() => requestAnimationFrame(() => B.classList.add("go")));
    }
  });
  return null;
}
function scrBpRec(g, o, y, yw) {
  try {
    const k = scrBK(g, o);
    let B = SC.bst && SC.bst.k === k ? SC.bst : null;
    if (!B && scrDic) {
      const M = scrAiMoves(g, o);
      B = { v: M.length ? M[0].ev.total : 0, mv: M[0] || null };
    }
    (B &&
      (scrGhostOff(),
      scrPopKill(),
      (SC.bpC = 0),
      clearTimeout(SC.bpT),
      clearTimeout(SC.bpT2),
      document.querySelectorAll("#scgxl .scgx").forEach((e) => e.remove())),
      st.set("scr:bp:" + SC.fid, {
        w: B.mv ? B.mv.ev.words[0].w : "",
        p: B.v,
        y: y,
        yw: yw,
        pl: B.mv ? B.mv.pl : [],
      }),
      (SC.bpo = 0));
  } catch (e) {}
}
function scrPopKill() {
  (clearTimeout(SC.popT), clearInterval(SC.popI));
  const d = document.getElementById("scpop");
  d && d.remove();
}
function scrPopPos() {
  const d = document.getElementById("scpop"),
    b = $("#scg .scbb");
  if (!d || !b) return;
  const r = b.getBoundingClientRect(),
    W = Math.min(340, innerWidth - 24),
    L = Math.max(12, Math.min(innerWidth - 12 - W, r.right - W + 4));
  ((d.style.width = W + "px"),
    (d.style.left = L + scrollX + "px"),
    (d.style.top = r.bottom + scrollY + 14 + "px"),
    d.style.setProperty("--tx", Math.round(r.left + r.width / 2 - L) + "px"));
}
function scrPopOpen() {
  scrPopKill();
  if (!SC.popM || !$("#scg .scbb")) return;
  const d = document.createElement("div");
  ((d.id = "scpop"),
    (d.className = "scpop"),
    d.setAttribute("role", "status"),
    (d.innerHTML = SC.popM),
    (d.onclick = () => scrPopClose(1)),
    document.body.appendChild(d),
    scrPopPos(),
    (SC.popT = setTimeout(() => scrPopClose(0), 9600)),
    (SC.popI = setInterval(() => {
      $("#scg .scbb")
        ? (scrPopPos(), scrGhostPos())
        : (scrPopKill(), (SC.bpo = 0), document.getElementById("scgxl")?.remove());
    }, 250)));
}
function scrPopClose(q) {
  (clearTimeout(SC.popT), (SC.bpo = 0));
  const b = $("#scg .scbb");
  (b && b.classList.remove("on"),
    q &&
      (scrGhostOff(),
      document.querySelectorAll("#scgxl .scgx").forEach((e) => e.classList.add("out", "q")),
      setTimeout(
        () =>
          document.querySelectorAll("#scgxl .scgx").forEach((e) => e.classList.contains("q") && e.remove()),
        420,
      )));
  const d = document.getElementById("scpop");
  if (!d) return clearInterval(SC.popI);
  ((d.id = ""),
    d.classList.add("out"),
    q && d.classList.add("q"),
    setTimeout(
      () => {
        (d.remove(), document.getElementById("scpop") || clearInterval(SC.popI));
      },
      q ? 280 : 440,
    ));
}
function scrBpClose(d, q) {
  (clearTimeout(SC.bpT),
    clearTimeout(SC.bpT2),
    (SC.bpC = 1),
    q &&
      (scrGhostOff(), document.querySelectorAll("#scgxl .scgx").forEach((e) => e.classList.add("out", "q"))));
  const e = $("#scg .scbpm");
  (e && (e.classList.add("out"), q && e.classList.add("q"), scrBubC(e, d)),
    (SC.bpT2 = setTimeout(
      () => {
        (q && document.querySelectorAll("#scgxl .scgx").forEach((e) => e.remove()),
          (SC.bpo = 0),
          (SC.bpC = 0),
          "game" === SC.scr && $("#scg") && scrDraw());
      },
      1e3 * d + 200,
    )));
}
function scrBelow() {
  return [...document.querySelectorAll("#scg .scrk,#scg .sca,#scg .sch")].map(
    (e) => e.getBoundingClientRect().top,
  );
}
function scrBelowA(R) {
  Element.prototype.animate &&
    [...document.querySelectorAll("#scg .scrk,#scg .sca,#scg .sch")].forEach((e, i) => {
      if (R[i] == null) return;
      const d = R[i] - e.getBoundingClientRect().top;
      Math.abs(d) > 1 &&
        e.animate([{ transform: `translateY(${d}px)` }, { transform: "none" }], {
          duration: 450,
          easing: "cubic-bezier(.22,1,.36,1)",
        });
    });
}
function scrBubO(h0, g0) {
  const e = $("#scg .scbpm");
  if (!e) return;
  const p = e.parentNode,
    c = getComputedStyle(e),
    H = e.offsetHeight,
    pt = c.paddingTop,
    pb = c.paddingBottom,
    mt = c.marginTop;
  (Object.assign(e.style, {
    overflow: "hidden",
    height: (h0 || 0) + "px",
    paddingTop: "0px",
    paddingBottom: "0px",
    marginTop: "0px",
  }),
    e.style.setProperty("border-width", "0px", "important"),
    (p.style.rowGap = g0 || "0px"),
    e.offsetHeight);
  const t =
    "height .45s cubic-bezier(.22,1,.36,1),padding .45s cubic-bezier(.22,1,.36,1),margin .45s cubic-bezier(.22,1,.36,1),border-width .45s ease";
  ((e.style.transition = t),
    (p.style.transition = "row-gap .45s cubic-bezier(.22,1,.36,1)"),
    Object.assign(e.style, { height: H + "px", paddingTop: pt, paddingBottom: pb, marginTop: mt }),
    e.style.setProperty("border-width", "1px", "important"),
    (p.style.rowGap = "8px"),
    clearTimeout(SC.boT),
    (SC.boT = setTimeout(() => {
      e.isConnected && !e.classList.contains("out") && ((e.style.cssText = ""), (p.style.cssText = ""));
    }, 520)));
}
function scrBubC(e, d) {
  ((e.style.overflow = "hidden"),
    (e.style.height = e.offsetHeight + "px"),
    e.offsetHeight,
    (e.style.transition = `height ${d}s ease,margin ${d}s ease,padding ${d}s ease,border-width ${d}s ease`),
    (e.style.height = "0px"),
    (e.style.paddingTop = e.style.paddingBottom = "0px"),
    (e.style.marginTop = "0px"),
    e.style.setProperty("border-width", "0px", "important"));
  const p = e.parentNode;
  p && ((p.style.transition = `row-gap ${d}s ease`), (p.style.rowGap = "0px"));
}
function scrGhost(re) {
  const P = st.get("scr:bp:" + SC.fid, null),
    g = $("#scg .scb");
  if (!P || !P.pl || !P.pl.length || !g || P.y >= P.p) return;
  if (re) return scrGhostPos();
  let L = document.getElementById("scgxl");
  (L && L.remove(),
    (L = document.createElement("div")),
    (L.id = "scgxl"),
    (L.className = "pg-scrabble scgxl"),
    L.style.setProperty("--n", getComputedStyle(g).getPropertyValue("--n") || 11),
    P.pl.forEach(([i, c, j], k) => {
      const d = document.createElement("div");
      ((d.className = "scc t scgx" + (j ? " jk" : "")),
        (d.dataset.i = i),
        d.style.setProperty("--d", k),
        (d.innerHTML = `<b>${c}</b>${j ? "" : `<small>${SCP[c]}</small>`}`),
        L.appendChild(d));
    }),
    document.body.appendChild(L),
    scrGhostPos());
}
function scrGhostPos() {
  const L = document.getElementById("scgxl"),
    g = $("#scg .scb");
  if (!L) return;
  if (!g) return void L.remove();
  L.querySelectorAll(".scgx").forEach((d) => {
    const x = g.children[+d.dataset.i];
    if (!x) return;
    const r = x.getBoundingClientRect();
    ((d.style.left = r.left + scrollX + "px"),
      (d.style.top = r.top + scrollY + "px"),
      (d.style.width = r.width + "px"),
      (d.style.height = r.height + "px"));
  });
}
function scrGhostOff() {
  (clearTimeout(SC.gxT), clearTimeout(SC.gxT2), (SC.gxE = 0), (SC.gxO = 0));
}
function scrShowBest() {
  (scrGhostOff(),
    (SC.gxE = Date.now() + 1e4),
    scrGhost(0),
    (SC.gxT = setTimeout(() => {
      ((SC.gxO = 1), document.querySelectorAll("#scgxl .scgx").forEach((e) => e.classList.add("out")));
    }, 9400)),
    (SC.gxT2 = setTimeout(() => {
      scrGhostOff();
      const L = document.getElementById("scgxl");
      L && L.remove();
    }, 1e4)));
}
function scrBar(a, o) {
  const B = scrBest(a, o),
    bv = B ? B.v : 0;
  let r = 0,
    t,
    c = "";
  if ("swap" === SC.mode) t = "Choisis les lettres à échanger.";
  else if (SC.pend.length) {
    const v = scrEval(
      a.b,
      SC.pend.map((e) => [e.i, e.c, e.j]),
      scrHas,
    );
    v.e
      ? ((t = v.e), (c = " er"))
      : v.ok
        ? ((r = bv ? Math.min(1, v.total / bv) : B ? 1 : 0),
          (t =
            v.words.map((e) => e.w).join(" · ") +
            " · " +
            v.total +
            " pt" +
            (v.total > 1 ? "s" : "") +
            (7 === SC.pend.length ? " · Bingo !" : "")))
        : ((t =
            v.bad.map((e) => "« " + e + " »").join(", ") +
            (v.bad.length > 1 ? " ne sont pas dans" : " n’est pas dans") +
            " le dictionnaire"),
          (c = " er"));
  } else
    t =
      SC.m ||
      (a.t === o
        ? "Pose un mot"
        : "ia" === SC.fid
          ? "L’IA réfléchit…"
          : "Au tour de " + scrNm(SC.fid) + " · prépare ton mot");
  const P = st.get("scr:bp:" + SC.fid, null),
    m = (SC.popM = P
      ? P.w
        ? P.y >= P.p
          ? `Au coup précédent, tu as joué le meilleur mot possible : « ${esc(P.yw)} », ${P.y} pts. Bravo !`
          : `Au coup précédent, ton meilleur mot était « <b>${esc(P.w)}</b> » pour <b>${P.p} pts</b>${P.y ? ` (tu as joué « ${esc(P.yw)} », ${P.y} pts).` : " (tu as passé ou échangé)."}`
        : "Au coup précédent, aucun mot n’était possible."
      : "");
  const r0 = SC.barR == null ? 0 : SC.barR,
    nt = SC.barT !== t;
  ((SC.barR = r), (SC.barT = t));
  return `<div class="scbar${c}${r >= 0.999 ? " mx" : ""}" style="--r0:${r0.toFixed(3)};--r:${r.toFixed(3)};--ph:-${Math.round(performance.now() % 2600)}ms"><i></i><span${nt ? ' class="nt"' : ""}>${esc(t)}</span></div><button class="scbb${SC.bpo ? " on" : ""}" data-a="scBest"${P ? "" : " disabled"} aria-label="Meilleur mot du coup précédent" title="Meilleur mot du coup précédent"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6.5" cy="15.5" r="3.8"/><circle cx="17.5" cy="15.5" r="3.8"/><path d="M10.3 15.2c.6-.7 2.8-.7 3.4 0M4 13l2.4-7.2c.3-.9 1.9-1 2.4-.1l.9 2.5M20 13l-2.4-7.2c-.3-.9-1.9-1-2.4-.1l-.9 2.5"/></svg></button>`;
}
async function scrSend(e, t) {
  if ("ia" === SC.fid) return scrIaSave(e, t);
  if ("loc" === SC.fid) return window.scrLocSave(e);
  const a = SC.fid,
    s = SC.subs[a];
  if (!s || !s.ref)
    return ((SC.m = "La partie n’est pas encore prête : réessaie dans un instant."), scrDraw(), !1);
  if (SC.busy) return !1;
  ((SC.busy = !0), scrDraw());
  try {
    await s.ref.set(e);
  } catch (e) {
    return ((SC.busy = !1), (SC.m = "Ton coup n’est pas parti. " + scrWhy(e)), scrDraw(), !1);
  }
  return (
    (SC.busy = !1),
    (SC.G[a] = e),
    (SC.got[a] = !0),
    scrMark(a, e),
    scrSeen(a, e),
    t && scrGain(2),
    scrPaid(a, e),
    !0
  );
}
const scrCf = (e) =>
  SC.cf === e
    ? (clearTimeout(SC.cft), (SC.cf = ""), !0)
    : ((SC.cf = e),
      clearTimeout(SC.cft),
      (SC.cft = setTimeout(() => {
        ((SC.cf = ""), scrDraw());
      }, 3500)),
      scrDraw(),
      !1);
const scrMine = () => {
  const e = SC.G[SC.fid];
  if (!e || "game" !== SC.scr) return null;
  const t = e.p.indexOf(scrMe());
  return t < 0 ? null : { S: e, mi: t, my: e.t === t && !e.e };
};
const SCA = {
  scrRetry: () => {
    const e = SC.fid;
    if (!e) return;
    const t = SC.subs[e];
    if (t) {
      clearTimeout(t.t);
      try {
        t.un && t.un();
      } catch (e) {}
    }
    (delete SC.subs[e],
      (SC.err[e] = 0),
      (SC.ec[e] = ""),
      (SC.got[e] = !1),
      (SC.slow = 0),
      scrWatch(e),
      scrDraw());
  },
  scrSoc: () => socScreen(),
  scrIa: () => scrOpenIA(),
  scrGo: () => {
    const e = $("#golv"),
      t = Math.floor(+(e && e.value));
    t >= 1 && t < 1e9 ? scrOpenIA(t) : e && e.focus();
  },
  scrMode: (e) => {
    (st.set("scr:mode", "s" === e ? "s" : "n"), (SC.mmMsg = ""), scrHub(1));
  },
  scrMM: () => scrSearch(),
  scBest: () => {
    if (SC.bpo) return scrPopClose(1);
    ((SC.bpo = !0), scrDraw(), scrPopOpen(), scrShowBest());
  },
  scrPick: () => {
    ((SC.pick = !SC.pick), SC.pick && (SO.col || "conn" === SO.st || socInit()), scrHub(1));
  },
  scrMMx: () => {
    (st.set("scr:mm", 0),
      (SC.mmMsg = "Recherche annulée."),
      window.__fb && __fb.mmDel && SO.uid && __fb.mmDel(SO.uid).catch(() => {}),
      scrHub(1));
  },
  scHist: () => {
    const g = SC.G[SC.fid];
    if (!g) return;
    const old = document.getElementById("schm");
    old && old.remove();
    const o = g.p.indexOf(SO.uid),
      nm = esc(scrNm(SC.fid));
    const L = (g.h || [])
      .slice(-14)
      .reverse()
      .map((e) => {
        const [t, a, n] = e.split("|");
        return `<li><b>${+t === o ? "Toi" : nm}</b> ${"-" === a ? "passe son tour" : "~" === a ? "échange des lettres" : "x" === a ? "abandonne" : esc(a) + " · " + n + " pts"}</li>`;
      })
      .join("");
    const d = document.createElement("div");
    d.id = "schm";
    d.className = "ccov";
    d.innerHTML = `<div class="glass ccbox"><h2>Derniers coups</h2>${L ? `<ul class="schl">${L}</ul>` : '<p class="note">Aucun coup pour l’instant.</p>'}<button class="btn alt" data-a="scHistX">Fermer</button></div>`;
    document.body.appendChild(d);
    d.addEventListener("click", (e) => {
      e.target === d && d.remove();
    });
  },
  scHistX: () => {
    const d = document.getElementById("schm");
    d && d.remove();
  },
  scrOpen: (e) => scrOpen(e),
  scrFrom: (e) => scrOpen(e),
  scrBk: () => {
    ((SC.scr = "hub"), scrHub());
  },
  scr: (e) => {
    const t = scrMine();
    if (!t || t.S.e) return;
    const a = +e;
    if ("swap" === SC.mode) {
      const e = SC.swp.indexOf(a);
      e >= 0 ? SC.swp.splice(e, 1) : SC.swp.push(a);
    } else SC.sel = SC.sel === a ? -1 : a;
    ((SC.m = ""), scrDraw());
  },
  scc: (e) => {
    const t = scrMine();
    if (!t || t.S.e || "swap" === SC.mode) return;
    const a = +e,
      s = SC.pend.findIndex((e) => e.i === a);
    if (((SC.m = ""), s >= 0)) return (SC.pend.splice(s, 1), scrDraw());
    if ("." !== t.S.b[a]) return;
    if (SC.sel < 0) return ((SC.m = "Touche d’abord une lettre de ton chevalet."), scrDraw());
    const n = t.S.r[t.mi][SC.sel];
    if (n) {
      if ("?" === n) return ((SC.jk = { k: SC.sel, i: a }), scrDraw());
      (SC.pend.push({ i: a, k: SC.sel, c: n, j: !1 }), (SC.sel = -1), scrDraw());
    }
  },
  scJ: (e) => {
    SC.jk &&
      (SC.pend.push({ i: SC.jk.i, k: SC.jk.k, c: e, j: !0 }), (SC.jk = null), (SC.sel = -1), scrDraw());
  },
  scJx: () => {
    ((SC.jk = null), scrDraw());
  },
  scRe: () => {
    ((SC.pend = []), (SC.sel = -1), (SC.m = ""), scrDraw());
  },
  scSh: () => {
    scrMine() && (scrShuf(SC.ord), (SC.m = ""), scrDraw());
  },
  scZ: () => {
    const u = $("#scbw"),
      o = SC.zl || 1,
      n = o < 1.5 ? 1.8 : o < 2.4 ? 2.6 : 1;
    if (u && o > 1 && n > 1) return scrZl(u, n, u.clientWidth / 2, u.clientHeight / 2);
    SC.zl = n;
    SC.zoom = n > 1;
    scrDraw();
  },
  scNew: async () => {
    if ("loc" === SC.fid) return window.scrLocNew();
    (st.set("scr:bp:" + SC.fid, null), (SC.bpo = 0));
    const e = SC.fid,
      t = SC.G[e];
    if (SC.busy || (t && !t.e) || !scrMe()) return;
    const a = scrNew(scrMe(), e, t && t.e ? { id: t.id, w: t.w, rs: t.rs, n: t.n } : null);
    "ia" === e && SC.frN && (a.fr = SC.frN);
    ((SC.pend = []),
      (SC.sel = -1),
      (SC.mode = ""),
      (SC.pay = ""),
      (SC.m = ""),
      (SC.rkk = ""),
      ((SC.drawN = 7), await scrSend(a, 0)) &&
        (sfx(523, 0.4), vib(15), "ia" !== SC.fid && socInv(SC.fid, "scrabble")),
      scrDraw());
  },
  scOk: async () => {
    const e = scrMine();
    if (!e || !e.my || SC.busy) return;
    await scrLoad();
    const t = SC.pend.map((e) => [e.i, e.c, e.j]),
      a = scrEval(e.S.b, t, scrHas);
    if (a.e || !a.ok) return ((SC.m = a.e || "Ce mot n’est pas dans le dictionnaire."), scrDraw());
    scrBpRec(e.S, e.mi, a.total, a.words[0].w);
    const s = SC.pend.slice(),
      n = scrPlay(e.S, e.mi, t, a);
    SC.drawN = Math.min(s.length, e.S.g.length);
    ((SC.pend = []),
      (SC.sel = -1),
      (SC.m = ""),
      (await scrSend(n, 1))
        ? ((SC.m = a.words[0].w + " · +" + a.total + " pts · +2 🫧"), sfx(660, 0.4), vib(20))
        : (SC.pend = s),
      scrDraw());
  },
  scPass: () => {
    const e = scrMine();
    e &&
      e.my &&
      !SC.busy &&
      scrCf("pass") &&
      (scrBpRec(e.S, e.mi, 0, ""),
      (SC.pend = []),
      (SC.sel = -1),
      scrSend(scrPass(e.S, e.mi), 0).then((e) => {
        (e && (SC.m = "Tu passes ton tour."), scrDraw());
      }));
  },
  scSwap: () => {
    const e = scrMine();
    !e ||
      !e.my ||
      e.S.g.length < 7 ||
      ((SC.mode = "swap"), (SC.swp = []), (SC.pend = []), (SC.sel = -1), (SC.m = ""), scrDraw());
  },
  scSwNo: () => {
    ((SC.mode = ""), (SC.swp = []), scrDraw());
  },
  scSwOk: () => {
    const e = scrMine();
    if (!e || !e.my || SC.busy || !SC.swp.length) return;
    scrBpRec(e.S, e.mi, 0, "");
    const t = scrSwap(e.S, e.mi, SC.swp);
    t &&
      ((SC.drawN = SC.swp.length),
      (SC.mode = ""),
      (SC.swp = []),
      scrSend(t, 0).then((e) => {
        (e && (SC.m = "Lettres échangées."), scrDraw());
      }));
  },
  scQuit: () => {
    const e = scrMine();
    !e ||
      e.S.e ||
      SC.busy ||
      (scrCf("quit") &&
        ((SC.pend = []), (SC.sel = -1), scrSend(scrResign(e.S, e.mi), 0).then(() => scrDraw())));
  },
};
let SCD = null;
let SCDt = 0;
const scrDragInit = () => {
  if (window.__scd) return;
  window.__scd = 1;
  const e = (e, t) => {
      const a = document.elementFromPoint(e, t);
      return a && a.closest ? a.closest("#scbw .scc[data-v]") : null;
    },
    t = () => {
      document.querySelectorAll(".scc.dh").forEach((e) => e.classList.remove("dh"));
    },
    a = () => {
      (SCD && (SCD.g && SCD.g.remove(), SCD.t && SCD.t.classList.remove("dg")),
        t(),
        (SCD = null),
        SC.drawP && ((SC.drawP = 0), setTimeout(scrDraw, 0)));
    };
  (Input.sur(
    "toucher",
    (q, { evt: e }) => {
      SCD && a();
      const t = e.target.closest && e.target.closest('#scg .sct[data-a="scr"],#scg .scc.pd');
      if (!t || ("mouse" === e.pointerType && 0 !== e.button)) return;
      const s = scrMine();
      if (!s || s.S.e || "swap" === SC.mode || SC.busy) return;
      const n = t.classList.contains("sct");
      SCD = { t: t, r: n, id: e.pointerId, x0: e.clientX, y0: e.clientY, on: !1, v: +t.dataset.v };
    },
    { cible: document, capture: !0 },
  ),
    Input.sur(
      ["glisser", "survoler"],
      (q, { evt: a }) => {
        const s = SCD;
        if (!s || a.pointerId !== s.id) return;
        if (!s.on) {
          if (Math.hypot(a.clientX - s.x0, a.clientY - s.y0) < 8) return;
          s.on = !0;
          try {
            document.documentElement.setPointerCapture(a.pointerId);
          } catch (e) {}
          const e = document.createElement("div");
          ((e.className = "sct scgh"),
            (e.innerHTML = s.t.innerHTML),
            document.body.appendChild(e),
            (s.g = e),
            s.t.classList.add("dg"),
            vib && vib(8));
        }
        (a.preventDefault(),
          (s.g.style.left = a.clientX + "px"),
          (s.g.style.top = a.clientY + "px"),
          scrRackMv(s, a),
          t());
        const n = e(a.clientX, a.clientY);
        n && "scc" === n.dataset.a && !n.classList.contains("t") && n.classList.add("dh");
      },
      { cible: document, passive: !1 },
    ));
  const s = (t) => {
    const s = SCD;
    if (!s || t.pointerId !== s.id) return;
    if (!s.on) return void (SCD = null);
    SCDt = Date.now();
    const n = "pointerup" === t.type ? e(t.clientX, t.clientY) : null,
      o = n && "scc" === n.dataset.a && !n.classList.contains("t") ? +n.dataset.v : -1;
    s.g &&
      (window.SCGR = {
        k: s.r ? s.v : (SC.pend.find((e) => e.i === s.v) || {}).k,
        r: s.g.getBoundingClientRect(),
      });
    a();
    const i = scrMine();
    if (i && !i.S.e)
      if (s.r) {
        if (o < 0) return scrDraw();
        ((SC.sel = s.v), act.scc(o));
      } else {
        const e = SC.pend.findIndex((e) => e.i === s.v);
        if (e < 0) return scrDraw();
        o >= 0
          ? ((SC.pend[e].i = o), (SC.m = ""), scrDraw())
          : (n || (SC.pend.splice(e, 1), (SC.m = "")), scrDraw());
      }
  };
  (Input.sur("lacher", (q, { evt: t }) => s(t), { cible: document, annulation: !0 }),
    window.addEventListener(
      "click",
      (e) => {
        Date.now() - SCDt < 80 && (e.stopPropagation(), e.preventDefault());
      },
      !0,
    ),
    document.addEventListener("dragstart", (e) => {
      SCD && e.preventDefault();
    }));
};
const scrInstall = () => {
  (scrDragInit(), Object.assign(act, SCA));
};
