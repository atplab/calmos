// Air hockey : jeu (AH…ahActs), contrôles via Input
const AHN = 20;
const AHH = 1.7;
const AHR = 0.042;
const AHM = 0.072;
const AHG = [0.32, 0.68];
const AHMAX = 3.4;
const AH = {
  mode: "",
  lv: 0,
  raf: 0,
  cv: null,
  x: null,
  W: 0,
  S: null,
  ptr: {},
  room: null,
  nr: null,
  code: "",
  fr: "",
  role: "",
  last: 0,
  hp: null,
  hpT: 0,
  ended: !1,
  cd: 0,
  unsub: null,
  pt: 0,
  msg: "",
};
const ahTo = () => ("lv" === AH.mode ? 5 : 7);
const ahLvAI = (e) => (
  (e = Math.min(e, 30)),
  {
    spd: 0.85 + 0.13 * e,
    rx: Math.max(0.05, 0.32 - 0.014 * e),
    err: Math.max(0.01, 0.13 - 0.0062 * e),
    agg: Math.min(0.95, 0.35 + 0.032 * e),
  }
);
function ahMark(e, t) {
  const a = st.get("soc:me", null);
  a &&
    ((a.ah = { g: e, w: t || "", t: Date.now() }),
    st.set("soc:me", a),
    "function" == typeof socLater && socLater());
}
function ahHub() {
  (ahActs(), ahStop(), (cur = "airhockey"), nv("games"), theme("airhockey"));
  const e = st.get("ah:d", []),
    t = (() => {
      let k = 0;
      for (; e.includes(k);) k++;
      return k;
    })(),
    N = Math.max(20, 5 * Math.ceil((t + 6) / 5)),
    a = st.get("soc:me", null),
    s =
      a && a.fr
        ? Object.keys(a.fr)
            .filter((e) => a.fr[e] > 0 && SO.P[e])
            .sort((e, t) => scrNm(e).localeCompare(scrNm(t), "fr"))
        : [],
    n = ahInv(),
    o =
      window.claude && window.claude.use
        ? SO.uid
          ? s.length
            ? `<p class="note" style="margin:0 0 6px">Invite un ami : la partie commence dès qu’il accepte.</p>${s.map((e) => `<div class="fr-i"><span class="fr-o">${socAv(e)}<span class="fr-t"><b>${esc(scrNm(e))}</b></span></span><div class="fr-b"><button class="sb buy" data-a="ahAsk" data-v="${esc(e)}">Inviter</button></div></div>`).join("")}`
            : '<p class="note" style="margin:0">Ajoute des amis dans l’onglet Amis pour les défier.</p>'
          : '<p class="note" style="margin:0">Active ton profil dans l’onglet Amis pour jouer en ligne.</p>'
        : '<p class="note" style="margin:0">Le jeu en ligne est offert dans l’app Claude.</p>',
    i = ALL.find((e) => "airhockey" === e.id) || { t: "Air hockey", s: "", ic: "🏒" },
    r = e.length,
    l = t,
    c = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    d = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  ((app.innerHTML = `<div class="top stk">${bk("home")}<div class="chip">🫧 ${FLX()}</div></div><section class="glass story pt-airhockey"><i>${gSv(i)}</i><h2>${i.t}</h2><p>Glisse ton maillet du bout du doigt et envoie la rondelle dans le but d’en face. Contre l’IA, le premier à 5 buts gagne. Dès certains niveaux, des obstacles apparaissent, et une cible dorée touchée donne la victoire directe (la rouge, celle de l’IA, la défaite) ; à deux ou en ligne, le premier à 7.</p></section>\n <div class="opts">${n.map((e) => `<section class="rc pt-airhockey" data-g="🏒"><div class="rc-ic">${socAv(e.id)}</div><div class="rc-t"><small>Invitation</small><b>${esc(e.nm)}</b><span>t’invite à une partie en ligne</span></div><button class="rc-go" data-a="ahJoin" data-v="${esc(e.g)}">Jouer${c}</button><button class="ahx" data-a="ahNo" data-v="${esc(e.g)}" aria-label="Refuser l’invitation de ${esc(e.nm)}">✕</button></section>`).join("")}\n <section class="rc rcx pt-airhockey" data-g="🏒"><div class="rc-ic">🏒</div><div class="rc-t"><small>${r ? "Continuer" : "Commencer"}</small><b>Niveau ${l + 1}</b><span>${r} gagné${r > 1 ? "s" : ""} · niveaux infinis · contre l’IA</span></div><button class="rc-go" data-a="ahLv" data-v="${l}">Jouer${c}</button><div class="dd pt-airhockey${lvOpen ? " open" : ""}" id="ahdd"><button class="dd-h" data-a="ahDd" aria-expanded="${lvOpen}" aria-controls="lvl"><span><b>Choisir un niveau</b><small>${r} gagné${r > 1 ? "s" : ""}</small></span>${d}</button><div class="dd-l" id="lvl"><div class="dd-i"><div class="lvg">${[
    ...Array(N).keys(),
  ]
    .map((a) => {
      const s = e.includes(a);
      return `<button class="lv ${s ? "d" : a === t ? "nx" : "far"}" data-a="ahLv" data-v="${a}" aria-label="Niveau ${a + 1}${s ? ", gagné" : ""}">${a + 1}</button>`;
    })
    .join(
      "",
    )}</div></div></div></div></section>\n <section class="rc" data-g="⇅"><div class="rc-ic">👥</div><div class="rc-t"><small>Sur cet écran</small><b>À deux</b><span>Posez le téléphone à plat entre vous</span></div><button class="rc-go" data-a="ahLoc">Jouer${c}</button></section>\n <div class="dd pt-airhockey${AH.onOpen ? " open" : ""}" id="ahdd2"><button class="dd-h" data-a="ahOnT" aria-expanded="${!!AH.onOpen}" aria-controls="ahonl"><span><b>En ligne avec un ami</b><small>${n.length ? n.length + " invitation" + (n.length > 1 ? "s" : "") : "Invite un ami à jouer"}</small></span>${d}</button><div class="dd-l" id="ahonl"><div class="dd-i soc-i">${o}</div></div></div>\n </div>`),
    window.scrollTo(0, 0));
}
function ahMod(e) {
  const t = 1.7,
    a = t / 2,
    s = [],
    n = [],
    o = (e, t, a, n, o) => s.push({ x: e, y: t, r: a || 0.06, ax: n || 0, sp: o || 1.2, ph: 1.7 * s.length }),
    i = (e, a) => {
      (n.push({ x: e, y: a, r: 0.05, w: "a" }), n.push({ x: 1 - e, y: t - a, r: 0.05, w: "b" }));
    };
  return (
    3 === e && o(0.5, a),
    4 === e && (o(0.3, a), o(0.7, a)),
    5 === e && i(0.14, 0.5),
    6 === e && o(0.5, a, 0.06, 0.25),
    7 === e && (o(0.5, 0.62), o(0.5, 1.08)),
    8 === e && i(0.5, 0.46),
    9 === e && (o(0.25, a), o(0.75, a), i(0.14, 0.5)),
    10 === e && (o(0.5, a - 0.2, 0.055, 0.2), o(0.5, 1.05, 0.055, 0.2, -1.2)),
    11 === e && (o(0.5, a, 0.085), i(0.14, 0.5)),
    12 === e && (o(0.3, 0.62), o(0.7, 0.62), o(0.3, 1.08), o(0.7, 1.08)),
    13 === e && (o(0.5, a, 0.06, 0.25), i(0.5, 0.46)),
    14 === e && (o(0.2, a, 0.05), o(0.5, a, 0.05), o(0.8, a, 0.05)),
    15 === e && (o(0.5, 0.63, 0.055, 0.22), o(0.5, 1.07, 0.055, 0.22, -1.3), i(0.14, 0.5)),
    16 === e && (o(0.28, 0.7), o(0.72, 0.7), o(0.28, 1), o(0.72, 1), i(0.5, 0.46)),
    17 === e && (o(0.3, a, 0.05, 0.18), o(0.5, a, 0.05, 0.18, -1.1), o(0.7, a, 0.05, 0.18)),
    18 === e &&
      (o(0.25, 0.65),
      o(0.75, 0.65),
      o(0.25, t - 0.65),
      o(0.75, t - 0.65),
      o(0.5, a, 0.06, 0.22),
      i(0.14, 0.5)),
    19 === e &&
      (o(0.2, 0.7, 0.05, 0.12),
      o(0.8, 0.7, 0.05, 0.12, -1),
      o(0.2, 1, 0.05, 0.12),
      o(0.8, 1, 0.05, 0.12, -1),
      o(0.5, a, 0.07, 0.28),
      i(0.5, 0.46),
      i(0.12, 0.8)),
    e >= 20 && ahGen(e, o, i),
    { o: s, t: n }
  );
}
function ahGen(e, o, i) {
  let h = (e * 2654435761) >>> 0;
  const R = () => {
      h = (h + 1831565813) >>> 0;
      let t = Math.imul(h ^ (h >>> 15), h | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    },
    n = Math.min(8, 4 + Math.floor((e - 20) / 4)),
    P = [];
  for (let k = 0, g = 0; k < n && g < 80; g++) {
    const r = 0.045 + 0.03 * R(),
      x = 0.14 + 0.72 * R(),
      y = 0.55 + 0.6 * R();
    if (
      Math.hypot(x - 0.5, y - 0.51) < 0.2 ||
      Math.hypot(x - 0.5, y - 1.19) < 0.2 ||
      P.some((p) => Math.hypot(p[0] - x, p[1] - y) < 0.2)
    )
      continue;
    (P.push([x, y]), k++);
    const m = R() < 0.55 ? Math.min(0.08 + 0.2 * R(), x - 0.1, 0.9 - x) : 0;
    o(x, y, r, m, (0.8 + 0.9 * R()) * (R() < 0.5 ? -1 : 1));
  }
  for (let k = 0, c = 1 + Math.min(2, Math.floor((e - 20) / 8)); k < c; k++)
    i(0.1 + 0.26 * R(), 0.3 + 0.35 * R());
}
window.ahInv = () => {
  try {
    if (!SO.uid) return [];
    const e = st.get("ah:no", []),
      t = Date.now();
    return Object.entries(SO.P)
      .filter(
        ([a, s]) =>
          a !== SO.uid &&
          s &&
          s.ah &&
          s.ah.w === SO.uid &&
          s.ah.g &&
          t - (+s.ah.t || 0) < 9e5 &&
          !e.includes(s.ah.g),
      )
      .map(([e, t]) => ({ id: e, g: t.ah.g, nm: scrNm(e) }));
  } catch (e) {
    return [];
  }
};
const ahOp = (e, t) => ({ x: e.x + (e.ax ? Math.sin(t * e.sp + e.ph) * e.ax : 0), y: e.y });
function ahNewState() {
  return {
    p: { x: 0.5, y: 0.85, vx: 0, vy: 0 },
    a: { x: 0.5, y: 1.5, vx: 0, vy: 0, tx: 0.5, ty: 1.5 },
    b: { x: 0.5, y: 0.2, vx: 0, vy: 0, tx: 0.5, ty: 0.2 },
    s: [0, 0],
    st: "play",
    pause: 0,
    ai: { t: 0, tx: 0.5, ty: 0.2, mode: "home" },
    fl: 0,
    fls: 0,
  };
}
function ahScreen(e) {
  (ahActs(), ahStop(), (cur = "airhockey"), nv("games"), theme("airhockey"));
  const t = "lv" === AH.mode ? "Niveau " + (AH.lv + 1) : "loc" === AH.mode ? "À deux" : "En ligne";
  app.innerHTML = `<div class="ahs"><div class="top stk"><button class="back" data-a="ahBk">‹ Air hockey</button><b class="sott">${t}</b><div class="chip">🫧 ${FLX()}</div></div><div class="ahw" id="ahw"><canvas id="ahc" aria-label="Table d’air hockey"></canvas><div class="ahov" id="ahov" hidden></div></div><p class="m" id="m" role="status" aria-live="polite">${e ? esc(e) : ""}</p></div>`;
  const a = (AH.cv = $("#ahc"));
  ((AH.x = a.getContext("2d")),
    ahSize(),
    (AH.ptr = {}),
    // Contrôles via Input : toucher / glisser / lacher (aussi sur pointercancel) ; lostpointercapture reste direct.
    Input.sur("toucher", (q, { evt: e }) => ahPD(e), { cible: a }),
    Input.sur(["glisser", "survoler"], (q, { evt: e }) => ahPM(e), { cible: a }),
    Input.sur("lacher", (q, { evt: e }) => ahPU(e), { cible: a, annulation: !0 }),
    a.addEventListener("lostpointercapture", ahPU),
    addEventListener("resize", ahSize),
    (AH.last = 0),
    (AH.raf = requestAnimationFrame(ahLoop)),
    window.scrollTo(0, 0));
}
function ahSize() {
  const e = AH.cv;
  if (!e || !e.isConnected) return;
  const t = Math.min(($("#ahw") || e).clientWidth || 360, 440),
    a = Math.max(300, innerHeight - 170);
  let s = t,
    n = 1.7 * s;
  n > a && ((n = a), (s = n / 1.7));
  const o = Math.min(2.5, devicePixelRatio || 1);
  ((e.style.width = s + "px"),
    (e.style.height = n + "px"),
    (e.width = Math.round(s * o)),
    (e.height = Math.round(n * o)),
    (AH.W = s),
    (AH.dpr = o));
}
const ahFlip = () => "net" === AH.mode && "g" === AH.role;
function ahPos(e) {
  const t = AH.cv.getBoundingClientRect();
  let a = (e.clientX - t.left) / t.width,
    s = ((e.clientY - t.top) / t.height) * 1.7;
  return (ahFlip() && ((a = 1 - a), (s = 1.7 - s)), { x: a, y: s });
}
function ahPD(e) {
  if (!AH.S) return;
  const t = ahPos(e);
  let a;
  if (
    ((a = "loc" === AH.mode ? (t.y > 0.85 ? "a" : "b") : "net" === AH.mode && "g" === AH.role ? "b" : "a"),
    !Object.values(AH.ptr).includes(a))
  ) {
    AH.ptr[e.pointerId] = a;
    try {
      AH.cv.setPointerCapture(e.pointerId);
    } catch (e) {}
    (ahAim(a, t), e.preventDefault());
  }
}
function ahPM(e) {
  const t = AH.ptr[e.pointerId];
  t && (ahAim(t, ahPos(e)), e.preventDefault());
}
function ahPU(e) {
  delete AH.ptr[e.pointerId];
}
function ahAim(e, t) {
  const a = AH.S[e],
    s = "a" === e ? 0.85 + AHM : AHM,
    n = "a" === e ? 1.628 : 0.778;
  if (
    ((a.tx = Math.max(AHM, Math.min(0.928, t.x))),
    (a.ty = Math.max(s, Math.min(n, t.y))),
    "net" === AH.mode && "g" === AH.role && AH.nr)
  ) {
    const e = performance.now();
    e - AH.pt > 30 &&
      ((AH.pt = e), AH.nr.presence({ r: "g", m: [+a.tx.toFixed(4), +a.ty.toFixed(4)] }).catch(() => {}));
  }
}
function ahMove(e, t, a) {
  const s = e.tx - e.x,
    n = e.ty - e.y,
    o = Math.hypot(s, n),
    i = Math.min(o, a * t),
    r = o ? e.x + (s / o) * i : e.x,
    l = o ? e.y + (n / o) * i : e.y;
  ((e.vx = (r - e.x) / t), (e.vy = (l - e.y) / t), (e.x = r), (e.y = l));
}
function ahHit(e, t) {
  const a = e.x - t.x,
    s = e.y - t.y,
    n = Math.hypot(a, s),
    o = AHR + AHM;
  if (n >= o || 0 === n) return !1;
  const i = a / n,
    r = s / n;
  ((e.x = t.x + i * o), (e.y = t.y + r * o));
  const l = (e.vx - t.vx) * i + (e.vy - t.vy) * r;
  l < 0 && ((e.vx -= 1.85 * l * i), (e.vy -= 1.85 * l * r));
  const c = Math.hypot(e.vx, e.vy);
  return (c > 3.4 && ((e.vx *= 3.4 / c), (e.vy *= 3.4 / c)), l < -0.3);
}
function ahStep(e, t) {
  const a = e.p,
    s = t / 4;
  let n = 0;
  e.t = (e.t || 0) + t;
  const o = e.mod;
  for (let t = 0; t < 4; t++) {
    if (
      ((a.x += a.vx * s),
      (a.y += a.vy * s),
      a.x < AHR
        ? ((a.x = AHR), (a.vx = 0.9 * Math.abs(a.vx)), (n = 1))
        : a.x > 0.958 && ((a.x = 0.958), (a.vx = 0.9 * -Math.abs(a.vx)), (n = 1)),
      a.x > AHG[0] && a.x < AHG[1])
    )
      for (const e of AHG)
        for (const t of [0, 1.7]) {
          const s = a.x - e,
            o = a.y - t,
            i = Math.hypot(s, o);
          if (i < AHR && i > 0) {
            const r = s / i,
              l = o / i,
              c = a.vx * r + a.vy * l;
            ((a.x = e + r * AHR),
              (a.y = t + l * AHR),
              c < 0 && ((a.vx -= 1.8 * c * r), (a.vy -= 1.8 * c * l)),
              (n = 1));
          }
        }
    else
      a.y < AHR
        ? ((a.y = AHR), (a.vy = 0.9 * Math.abs(a.vy)), (n = 1))
        : a.y > 1.658 && ((a.y = 1.658), (a.vy = 0.9 * -Math.abs(a.vy)), (n = 1));
    if (o) {
      for (const t of o.o) {
        const s = ahOp(t, e.t),
          o = a.x - s.x,
          i = a.y - s.y,
          r = Math.hypot(o, i),
          l = AHR + t.r;
        if (r < l && r > 0) {
          const e = o / r,
            t = i / r,
            c = a.vx * e + a.vy * t;
          ((a.x = s.x + e * l),
            (a.y = s.y + t * l),
            c < 0 && ((a.vx -= 2 * c * e), (a.vy -= 2 * c * t)),
            (n = 1));
        }
      }
      for (const e of o.t)
        if (Math.hypot(a.x - e.x, a.y - e.y) < e.r + 0.4 * AHR) return "a" === e.w ? "A" : "B";
    }
    if (((ahHit(a, e.a) || ahHit(a, e.b)) && (n = 2), a.y < -0.0504)) return "a";
    if (a.y > 1.7504) return "b";
  }
  {
    const q = Math.min(a.x - AHR, 0.958 - a.x),
      w = Math.min(a.y - AHR, 1.658 - a.y);
    if (q < 0.09 && w < 0.09 && Math.hypot(a.vx, a.vy) < 0.4 && (a.x < AHG[0] || a.x > AHG[1])) {
      if ((e.stk = (e.stk || 0) + t) > 0.4) {
        const d = Math.hypot(0.5 - a.x, 0.85 - a.y) || 1;
        ((a.vx = (1.7 * (0.5 - a.x)) / d + 0.4 * (Math.random() - 0.5)),
          (a.vy = (1.7 * (0.85 - a.y)) / d + 0.4 * (Math.random() - 0.5)),
          (e.stk = 0),
          sfx(300, 0.05));
      }
    } else e.stk = 0;
  }
  const i = Math.pow(0.992, 60 * t);
  return (
    (a.vx *= i),
    (a.vy *= i),
    2 === n ? sfx(520 + 80 * Math.random(), 0.04) : 1 === n && Math.hypot(a.vx, a.vy) > 0.6 && sfx(260, 0.03),
    ""
  );
}
function ahAI(e, t) {
  const a = ahLvAI(AH.lv),
    s = e.b,
    n = e.p,
    o = e.ai;
  if (((o.t -= t), o.t <= 0)) {
    o.t = a.rx * (0.7 + 0.6 * Math.random());
    const e = 2 * (Math.random() - 0.5) * a.err;
    if (n.y < 0.85 && (n.vy > -1.2 || n.y < s.y))
      if (n.y < s.y + 0.02)
        ((o.mode = "back"), (o.tx = n.x + (n.x < 0.5 ? 0.12 : -0.12)), (o.ty = Math.max(AHM, n.y - 0.16)));
      else {
        const t = 1.7,
          i = 0.5 + 3 * e - n.x,
          r = t - n.y,
          l = Math.hypot(i, r) || 1,
          c = i / l,
          d = r / l;
        Math.hypot(s.x - (n.x - c * (AHR + AHM)), s.y - (n.y - d * (AHR + AHM))) < 0.05 ||
        Math.random() < 0.25 * a.agg
          ? ((o.mode = "hit"), (o.tx = n.x + 0.18 * c), (o.ty = n.y + 0.18 * d))
          : ((o.mode = "set"), (o.tx = n.x - c * (AHR + AHM) * 1.05), (o.ty = n.y - d * (AHR + AHM) * 1.05));
      }
    else {
      o.mode = "home";
      let t = n.x;
      if (n.vy < -0.1) {
        const e = (n.y - 0.22) / -n.vy;
        t = n.x + n.vx * e;
        for (let e = 0; e < 4; e++) t < AHR ? (t = 0.084 - t) : t > 0.958 && (t = 1.916 - t);
      }
      ((o.tx = 0.5 + (t - 0.5) * (0.45 + 0.4 * a.agg) + e), (o.ty = 0.17 + 0.3 * e));
    }
  }
  ((s.tx = Math.max(AHM, Math.min(0.928, o.tx))), (s.ty = Math.max(AHM, Math.min(0.778, o.ty))));
}
function ahGoal(e, t) {
  (("A" !== t && "B" !== t) || ((e.s["A" === t ? 0 : 1] = ahTo() - 1), (t = t.toLowerCase())),
    e.s["a" === t ? 0 : 1]++,
    (e.fl = 1),
    (e.fls = "a" === t ? 1 : 0),
    sfx("a" === t ? 880 : 330, 0.22));
  try {
    vib(20);
  } catch (e) {}
  const a = e.p;
  ((a.vx = a.vy = 0),
    (a.x = 0.5),
    (a.y = "a" === t ? 0.51 : 1.19),
    (e.pause = 1),
    (e.s[0] >= ahTo() || e.s[1] >= ahTo()) &&
      ((e.st = "end"), (e.pause = 0), setTimeout(() => ahEnd(e.s[0] > e.s[1]), 700)));
}
function ahLoop(e) {
  const t = AH.cv;
  if (!t || !t.isConnected) return void ahStop();
  const a = Math.min(0.033, AH.last ? (e - AH.last) / 1e3 : 0.016);
  AH.last = e;
  const s = AH.S;
  if (s) {
    if ("net" === AH.mode && "g" === AH.role) ahGuest(a);
    else {
      if ("play" === s.st || "cd" === s.st)
        if (
          (ahMove(s.a, a, 7),
          "lv" === AH.mode && ahAI(s, a),
          "lv" === AH.mode ? ahMove(s.b, a, ahLvAI(AH.lv).spd) : ahMove(s.b, a, 7),
          "cd" === s.st)
        )
          ((s.cd -= a), s.cd <= 0 && (s.st = "play"));
        else if (s.pause > 0) s.pause -= a;
        else {
          const e = ahStep(s, a);
          e && ahGoal(s, e);
        }
      if ((s.fl > 0 && (s.fl = Math.max(0, s.fl - 1.6 * a)), "net" === AH.mode && AH.nr)) {
        const e = performance.now();
        if (e - AH.pt > 30) {
          AH.pt = e;
          const t = (e) => +e.toFixed(4);
          AH.nr
            .presence({
              r: "h",
              st: s.st,
              cd: +(s.cd || 0).toFixed(2),
              s: s.s,
              a: [t(s.a.x), t(s.a.y)],
              b: [t(s.b.x), t(s.b.y)],
              p: [t(s.p.x), t(s.p.y), t(s.p.vx), t(s.p.vy)],
              fl: +s.fl.toFixed(2),
              fs: s.fls,
            })
            .catch(() => {});
        }
        AH.hpT && e - AH.hpT > 6e3 && "end" !== s.st && ahLost();
      }
    }
    ahDraw();
  }
  AH.raf = requestAnimationFrame(ahLoop);
}
function ahGuest(e) {
  const t = AH.S,
    a = AH.hp;
  if (!a) return;
  const s = performance.now(),
    n = Math.min(0.12, (s - AH.hpT) / 1e3);
  ((t.s = a.s),
    (t.st = a.st),
    (t.cd = a.cd),
    (t.fl = a.fl),
    (t.fls = a.fs),
    (t.a.x = a.a[0]),
    (t.a.y = a.a[1]));
  const o = a.p[0] + a.p[2] * n,
    i = a.p[1] + a.p[3] * n;
  ((t.p.x += 0.6 * (o - t.p.x)),
    (t.p.y += 0.6 * (i - t.p.y)),
    Math.hypot(o - t.p.x, i - t.p.y) > 0.2 && ((t.p.x = o), (t.p.y = i)));
  const r = t.b;
  ((r.x += (r.tx - r.x) * Math.min(1, 20 * e)),
    (r.y += (r.ty - r.y) * Math.min(1, 20 * e)),
    s - AH.hpT > 6e3 && "end" !== t.st && ahLost(),
    "end" !== t.st || AH.ended || ((AH.ended = !0), setTimeout(() => ahEnd(t.s[1] > t.s[0]), 500)));
}
function ahDraw() {
  const e = AH.x,
    t = AH.S,
    a = AH.dpr,
    s = AH.W * a,
    n = 1.7 * s,
    o = ahFlip();
  (e.setTransform(1, 0, 0, 1, 0, 0),
    e.clearRect(0, 0, s, n),
    e.setTransform(o ? -s : s, 0, 0, o ? -s : s, o ? s : 0, o ? n : 0));
  const i = e.createLinearGradient(0, 0, 0, 1.7);
  (i.addColorStop(0, "#dff3ff"),
    i.addColorStop(0.5, "#f4fbff"),
    i.addColorStop(1, "#dff3ff"),
    (e.fillStyle = i),
    e.beginPath(),
    e.roundRect(0, 0, 1, 1.7, 0.06),
    e.fill(),
    (e.fillStyle = "rgba(80,140,190,.16)"));
  for (let t = 0.06; t < 1.7; t += 0.07)
    for (let a = 0.06 + (Math.round(t / 0.07) % 2) * 0.035; a < 1; a += 0.07)
      (e.beginPath(), e.arc(a, t, 0.0045, 0, 7), e.fill());
  if (
    ((e.lineWidth = 0.008),
    (e.strokeStyle = "rgba(214,54,63,.55)"),
    e.beginPath(),
    e.moveTo(0, 0.85),
    e.lineTo(1, 0.85),
    e.stroke(),
    (e.strokeStyle = "rgba(60,110,200,.45)"),
    e.beginPath(),
    e.arc(0.5, 0.85, 0.16, 0, 7),
    e.stroke(),
    e.beginPath(),
    e.arc(0.5, 0, 0.2, 0, Math.PI),
    e.stroke(),
    e.beginPath(),
    e.arc(0.5, 1.7, 0.2, Math.PI, 2 * Math.PI),
    e.stroke(),
    t &&
      t.fl > 0 &&
      ((e.fillStyle = `rgba(${t.fls ? "255,210,90" : "120,170,255"},${0.35 * t.fl})`),
      e.fillRect(0, t.fls ? 0 : 0.85, 1, 0.85)),
    (e.lineWidth = 0.03),
    (e.strokeStyle = "#2c3e66"),
    (e.lineCap = "round"),
    e.beginPath(),
    e.moveTo(0, 0),
    e.lineTo(AHG[0], 0),
    e.moveTo(AHG[1], 0),
    e.lineTo(1, 0),
    e.moveTo(0, 1.7),
    e.lineTo(AHG[0], 1.7),
    e.moveTo(AHG[1], 1.7),
    e.lineTo(1, 1.7),
    e.moveTo(0, 0),
    e.lineTo(0, 1.7),
    e.moveTo(1, 0),
    e.lineTo(1, 1.7),
    e.stroke(),
    (e.fillStyle = "#16213d"),
    e.fillRect(AHG[0], -0.02, AHG[1] - AHG[0], 0.03),
    e.fillRect(AHG[0], 1.69, AHG[1] - AHG[0], 0.03),
    !t)
  )
    return;
  const r = (t, a, s) => {
    ((e.fillStyle = "rgba(0,0,0,.15)"), e.beginPath(), e.arc(t.x + 0.008, t.y + 0.012, AHM, 0, 7), e.fill());
    const n = e.createRadialGradient(t.x - 0.02, t.y - 0.02, 0.01, t.x, t.y, AHM);
    (n.addColorStop(0, a),
      n.addColorStop(1, s),
      (e.fillStyle = n),
      e.beginPath(),
      e.arc(t.x, t.y, AHM, 0, 7),
      e.fill(),
      (e.fillStyle = s),
      e.beginPath(),
      e.arc(t.x, t.y, 0.0324, 0, 7),
      e.fill(),
      (e.fillStyle = "rgba(255,255,255,.35)"),
      e.beginPath(),
      e.arc(t.x - 0.01, t.y - 0.012, 0.01584, 0, 7),
      e.fill());
  };
  if (t.mod) {
    for (const a of t.mod.t) {
      const t = "a" === a.w;
      ((e.fillStyle = t ? "rgba(255,200,60,.35)" : "rgba(230,70,80,.3)"),
        e.beginPath(),
        e.arc(a.x, a.y, 1.5 * a.r, 0, 7),
        e.fill(),
        (e.fillStyle = t ? "#ffc83c" : "#e5464f"),
        e.beginPath(),
        e.arc(a.x, a.y, a.r, 0, 7),
        e.fill(),
        (e.strokeStyle = "#fff"),
        (e.lineWidth = 0.006),
        e.beginPath(),
        e.arc(a.x, a.y, 0.6 * a.r, 0, 7),
        e.stroke());
    }
    for (const a of t.mod.o) {
      const s = ahOp(a, t.t || 0);
      ((e.fillStyle = "rgba(0,0,0,.15)"),
        e.beginPath(),
        e.arc(s.x + 0.008, s.y + 0.012, a.r, 0, 7),
        e.fill());
      const n = e.createRadialGradient(s.x - 0.015, s.y - 0.015, 0.005, s.x, s.y, a.r);
      (n.addColorStop(0, "#8fa6d8"),
        n.addColorStop(1, "#34457a"),
        (e.fillStyle = n),
        e.beginPath(),
        e.arc(s.x, s.y, a.r, 0, 7),
        e.fill(),
        (e.strokeStyle = "#dff3ff"),
        (e.lineWidth = 0.007),
        e.beginPath(),
        e.arc(s.x, s.y, 0.55 * a.r, 0, 7),
        e.stroke());
    }
  }
  (r(t.b, "#7fb0ff", "#2f5fc4"), r(t.a, "#ff8a8f", "#c9323d"));
  const l = t.p;
  ((e.fillStyle = "rgba(0,0,0,.18)"),
    e.beginPath(),
    e.arc(l.x + 0.006, l.y + 0.009, AHR, 0, 7),
    e.fill(),
    (e.fillStyle = "#22283a"),
    e.beginPath(),
    e.arc(l.x, l.y, AHR, 0, 7),
    e.fill(),
    (e.strokeStyle = "#4b5470"),
    (e.lineWidth = 0.006),
    e.beginPath(),
    e.arc(l.x, l.y, 0.02604, 0, 7),
    e.stroke(),
    e.setTransform(1, 0, 0, 1, 0, 0),
    e.save(),
    (e.globalAlpha = 0.2),
    (e.fillStyle = "#16213d"),
    (e.font = `800 ${Math.round(0.17 * s)}px Fraunces,Georgia,serif`),
    (e.textAlign = "center"),
    (e.textBaseline = "middle"));
  {
    const a = o ? t.s[1] : t.s[0],
      i = o ? t.s[0] : t.s[1];
    (e.fillText(String(a), 0.86 * s, 0.6 * n),
      e.save(),
      e.translate(0.86 * s, 0.4 * n),
      "loc" === AH.mode && e.rotate(Math.PI),
      e.fillText(String(i), 0, 0),
      e.restore());
  }
  (e.restore(),
    "cd" === t.st &&
      t.cd > 0 &&
      (e.save(),
      (e.fillStyle = "rgba(22,33,61,.75)"),
      (e.font = `800 ${Math.round(0.22 * s)}px Fraunces,Georgia,serif`),
      (e.textAlign = "center"),
      (e.textBaseline = "middle"),
      e.fillText(String(Math.ceil(t.cd)), s / 2, n / 2),
      e.restore()));
}
function ahOv(e) {
  const t = $("#ahov");
  if (t) {
    if (!e) return ((t.hidden = !0), void (t.innerHTML = ""));
    ((t.innerHTML = `<div class="glass ahbox">${e}</div>`), (t.hidden = !1));
  }
}
function ahEnd(e) {
  const t = AH.S;
  if (!t || !$("#ahov")) return;
  t.st = "end";
  let a = 0,
    s = "";
  if ("lv" === AH.mode) {
    if (e) {
      const e = st.get("ah:d", []),
        t = !e.includes(AH.lv);
      (t && (e.push(AH.lv), st.set("ah:d", e)), (a = t ? Math.min(10, 2 + Math.floor(AH.lv / 5)) : 1));
    }
  } else "net" === AH.mode && e && (a = 2);
  if (((a = dmR("airhockey", a)), a)) {
    ((fl += a), st.set("fl", fl));
    const e = $(".chip");
    e && (e.textContent = "🫧 " + FLX());
  }
  ((s =
    "loc" === AH.mode
      ? `<h2>${t.s[0] > t.s[1] ? "Rouge" : "Bleu"} gagne !</h2><p class="note">${t.s[0]} à ${t.s[1]}</p><div class="chrow"><button class="btn" data-a="ahLoc">Rejouer</button><button class="btn alt" data-a="ahBk">Terminer</button></div>`
      : `<h2>${e ? "Victoire !" : "Défaite"}</h2><p class="note">${"g" === AH.role ? t.s[1] : t.s[0]} à ${"g" === AH.role ? t.s[0] : t.s[1]}${a ? ` · +${a} 🫧` : ""}</p><div class="chrow">${"lv" === AH.mode ? (e ? `<button class="btn" data-a="ahLv" data-v="${AH.lv + 1}">Niveau suivant</button>` : `<button class="btn" data-a="ahLv" data-v="${AH.lv}">Rejouer</button>`) : ""}<button class="btn alt" data-a="ahBk">Terminer</button></div>`),
    sfx(e ? 990 : 220, 0.3),
    ahOv(s),
    "net" === AH.mode &&
      ("h" === AH.role
        ? setTimeout(() => {
            AH.S === t && ahNetEnd();
          }, 3500)
        : ahNetEnd()));
}
function ahLost() {
  AH.ended ||
    ((AH.ended = !0),
    AH.S && (AH.S.st = "end"),
    ahOv(
      '<h2>Connexion perdue</h2><p class="note">Ton ami n’est plus là.</p><div class="chrow"><button class="btn alt" data-a="ahBk">Terminer</button></div>',
    ),
    ahNetEnd());
}
function ahStop() {
  (cancelAnimationFrame(AH.raf),
    (AH.raf = 0),
    removeEventListener("resize", ahSize),
    ("net" === AH.mode || AH.nr) && ahNetEnd());
}
function ahNetEnd() {
  const e = AH.nr;
  if (((AH.nr = null), AH.unsub)) {
    try {
      AH.unsub();
    } catch (e) {}
    AH.unsub = null;
  }
  if ((e && e.leave().catch(() => {}), "h" === AH.role && AH.code)) {
    const e = st.get("soc:me", null);
    e && e.ah && e.ah.g === AH.code && ahMark("", "");
  }
}
async function ahRoom(e) {
  try {
    const t = await window.claude.use("room");
    return t ? await t.join("ah-" + e) : null;
  } catch (e) {
    return null;
  }
}
async function ahHost(e, c) {
  const t = c || Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4);
  ((AH.mode = "net"),
    (AH.role = "h"),
    (AH.code = t),
    (AH.fr = e),
    (AH.ended = !1),
    (AH.S = ahNewState()),
    (AH.S.st = "wait"),
    (AH.hp = null),
    (AH.hpT = 0),
    ahScreen(""),
    ahOv(
      `<h2>Invitation envoyée</h2><p class="note">En attente de ${esc(scrNm(e))}…</p><div class="chrow"><button class="btn alt" data-a="ahBk">Annuler</button></div>`,
    ),
    ahMark(t, e),
    socInv(e, "airhockey"));
  const a = await ahRoom(t);
  a && AH.code === t
    ? ((AH.nr = a),
      a.presence({ r: "h", st: "wait" }).catch(() => {}),
      (AH.unsub = a.onPeers((t) => {
        const a = t.peers.find((t) => !t.isMe && t.presence && "g" === t.presence.r && (!t.by || t.by === e));
        if (a) {
          AH.hpT = performance.now();
          const t = a.presence.m;
          (Array.isArray(t) &&
            2 === t.length &&
            isFinite(t[0]) &&
            isFinite(t[1]) &&
            ((AH.S.b.tx = Math.max(AHM, Math.min(0.928, +t[0]))),
            (AH.S.b.ty = Math.max(AHM, Math.min(0.778, +t[1])))),
            "wait" === AH.S.st && ((AH.S.st = "cd"), (AH.S.cd = 3), ahOv(""), ahMark("", e)));
        } else
          "wait" !== AH.S.st &&
            "end" !== AH.S.st &&
            t.left.some((e) => e.presence && "g" === e.presence.r) &&
            ahLost();
      })))
    : AH.code === t &&
      ahOv(
        '<h2>Jeu en ligne indisponible</h2><p class="note">La salle n’a pas pu être ouverte. Réessaie plus tard.</p><div class="chrow"><button class="btn alt" data-a="ahBk">Retour</button></div>',
      );
}
async function ahGuestJoin(e) {
  ((AH.mode = "net"),
    (AH.role = "g"),
    (AH.code = e),
    (AH.ended = !1),
    (AH.S = ahNewState()),
    (AH.S.st = "wait"),
    (AH.hp = null),
    (AH.hpT = 0));
  const t = ahInv().find((t) => t.g === e);
  ((AH.fr = t ? t.id : ""),
    ahScreen(""),
    ahOv(
      '<h2>Connexion…</h2><p class="note">On rejoint la table de ton ami.</p><div class="chrow"><button class="btn alt" data-a="ahBk">Annuler</button></div>',
    ));
  const a = await ahRoom(e);
  if (!a || AH.code !== e)
    return void (
      AH.code === e &&
      ahOv(
        '<h2>Jeu en ligne indisponible</h2><p class="note">La salle n’a pas pu être rejointe.</p><div class="chrow"><button class="btn alt" data-a="ahBk">Retour</button></div>',
      )
    );
  AH.nr = a;
  const s = AH.S.b;
  (a.presence({ r: "g", m: [s.tx, s.ty] }).catch(() => {}),
    (AH.unsub = a.onPeers((e) => {
      const t = e.peers.find(
        (e) => !e.isMe && e.presence && "h" === e.presence.r && (!e.by || !AH.fr || e.by === AH.fr),
      );
      if (t) {
        const e = t.presence;
        Array.isArray(e.p) &&
          4 === e.p.length &&
          Array.isArray(e.a) &&
          Array.isArray(e.s) &&
          (AH.hp || ahOv(""),
          (AH.hp = {
            s: [+e.s[0] || 0, +e.s[1] || 0],
            st: String(e.st || "play"),
            cd: +e.cd || 0,
            a: [+e.a[0], +e.a[1]],
            p: e.p.map(Number),
            fl: +e.fl || 0,
            fs: +e.fs || 0,
          }),
          (AH.hpT = performance.now()));
      } else AH.hp && e.left.length && !AH.ended && ahLost();
    })));
  const n = Date.now(),
    o = setInterval(() => {
      AH.code !== e || AH.hp
        ? clearInterval(o)
        : Date.now() - n > 2e4 &&
          (clearInterval(o),
          ahOv(
            '<h2>Ton ami n’est plus là</h2><p class="note">L’invitation a expiré.</p><div class="chrow"><button class="btn alt" data-a="ahBk">Retour</button></div>',
          ),
          ahNetEnd());
    }, 1e3);
}
let ahAO = !1;
function ahActs() {
  ahAO ||
    ((ahAO = !0),
    Object.assign(act, {
      ahBk: () => {
        (ahStop(), (AH.mode = ""), (AH.code = ""), (AH.S = null), ahHub());
      },
      ahLv: (e) => {
        ((AH.mode = "lv"),
          (AH.lv = +e),
          (AH.role = ""),
          (AH.S = ahNewState()),
          (AH.S.mod = ahMod(AH.lv)),
          (AH.S.st = "cd"),
          (AH.S.cd = 3),
          ahScreen(""));
      },
      ahLoc: () => {
        ((AH.mode = "loc"),
          (AH.role = ""),
          (AH.S = ahNewState()),
          (AH.S.st = "cd"),
          (AH.S.cd = 3),
          ahScreen("Rouge en bas, bleu en haut."));
      },
      ahAsk: (e, c) => {
        SO.P[e] && ahHost(e, c);
      },
      ahJoin: (e) => {
        /^[a-z0-9]{4,20}$/.test(e) && ahGuestJoin(e);
      },
      ahDd: () => {
        const e = $("#ahdd");
        ((lvOpen = e.classList.toggle("open")),
          e.querySelector(".dd-h").setAttribute("aria-expanded", lvOpen));
      },
      ahOnT: () => {
        const e = $("#ahdd2");
        ((AH.onOpen = e.classList.toggle("open")),
          e.querySelector(".dd-h").setAttribute("aria-expanded", AH.onOpen));
      },
      ahNo: (e) => {
        const t = st.get("ah:no", []);
        (t.push(e), st.set("ah:no", t.slice(-30)), ahHub());
      },
    }));
}
