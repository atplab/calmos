// Fusion à gogo : jeu (PLN…pPlan), contrôles via Input
const PLN = [
  "Comète",
  "Lune",
  "Mercure",
  "Mars",
  "Vénus",
  "Terre",
  "Neptune",
  "Saturne",
  "Jupiter",
  "Soleil",
];
const PLR = [13, 18, 23, 29, 35, 42, 50, 58, 67, 78];
const PLCL = [
  ["#e8f8ff", "#7fc8ff"],
  ["#f0f0f6", "#9a9ab0"],
  ["#d9c4b4", "#85705f"],
  ["#ffa77e", "#b8402a"],
  ["#fff0b8", "#d9a64c"],
  ["#8fd0ff", "#2a63c8"],
  ["#7f98ff", "#2a2f9a"],
  ["#f6dca8", "#b88a4a"],
  ["#f4c995", "#b0603a"],
  ["#fff4a8", "#ff8a2a"],
];
const PLFN = [
  "Cerise",
  "Fraise",
  "Raisin",
  "Clémentine",
  "Kaki",
  "Pomme",
  "Pêche",
  "Ananas",
  "Melon",
  "Pastèque",
];
const PLFC = [
  ["#ff9aaa", "#c8102e"],
  ["#ffa08a", "#e0302a"],
  ["#d6b3ff", "#6a2a9a"],
  ["#fff0a0", "#ffb41f"],
  ["#ff8a3a", "#b8420a"],
  ["#ffb0a8", "#d8202a"],
  ["#ffe6d2", "#ff8a6a"],
  ["#fff2a0", "#e0a82a"],
  ["#e8ffc0", "#86c64a"],
  ["#8ae07a", "#1f7a3a"],
];
const PLWN = [
  "Bulle",
  "Perle",
  "Oursin",
  "Méduse",
  "Coquillage",
  "Poisson-globe",
  "Tortue",
  "Pieuvre",
  "Poisson-lune",
  "Baleine",
];
const PLWC = [
  ["#ffffff", "#8ad0ff"],
  ["#ffffff", "#d0c8e4"],
  ["#d9b8ff", "#5a2a8a"],
  ["#ffe0f6", "#c87ae0"],
  ["#ffe8dc", "#ff9a8a"],
  ["#fff4b0", "#e8b82a"],
  ["#c8f0a0", "#3a8a4a"],
  ["#ffc0b0", "#e0503a"],
  ["#e4ecf6", "#7a8aa8"],
  ["#9ac4ff", "#2a4a9a"],
];
const plCn = () => {
  let f = 0,
    w = 0;
  for (let a = 0; a < 100; a++)
    (st.get("c:planetes:" + a, !1) && f++, st.get("c:planetes_e:" + a, !1) && w++);
  return [f, w];
};
const plUnl = (e) => {
  try {
    if (UNL() || !e) return !0;
    const [f, w] = plCn();
    return "eau" === e ? f >= 15 : f + w >= 35;
  } catch (e) {
    return !1;
  }
};
const plMd = () => {
  try {
    const e = st.get("pl:mode", "");
    return ("orbite" !== e && "eau" !== e) || !plUnl(e) ? "" : e;
  } catch (e) {
    return "";
  }
};
const PLTB = (() => {
  const c = [];
  for (let T = 3; T <= 8; T++)
    for (const N of [1, 2, 3]) {
      if ((N > 2 && T > 6) || (N > 1 && T > 8)) continue;
      for (let p = 0; p <= 12; p += 2) c.push([T, N, p, 10 * T + 7 * (N - 1) + 0.9 * p]);
    }
  c.sort((a, b) => a[3] - b[3]);
  const r = [];
  for (let i = 0; i < 80; i++) r.push(c[Math.round((i * (c.length - 1)) / 79)]);
  return r;
})();
const PLOS = [
  ["e", 1],
  ["as", 2],
  ["g2", 4],
  ["rg", 6],
  ["gr", 9],
  ["ag", 11],
  ["lu", 13],
  ["f", 15],
];
const PLOM = [
  ["col", 5],
  ["jg", 7],
  ["wd", 8],
  ["my", 10],
  ["bm", 12],
  ["ss", 14],
  ["nt", 16],
];
function plOr(e, o) {
  if (e < 1) return o;
  const sp = (k, x) => {
      ((o.sp = o.sp || {}), (o.sp[k] = x));
    },
    ch = (t) => {
      o.ch = o.ch ? o.ch + " " + t : t;
    };
  if (o.sc)
    return ((o.as = 2), sp("g", 0.12), (o.ch = "Astéroïdes fixes. Planète dorée ✦ : fusion bonus."), o);
  const v = (e - 1) % 6;
  if (2 === v) return o;
  const ap = (k) => {
      "e" === k
        ? ((o.ov = "e"), ch("Bocal ovale : les planètes glissent sur les côtés."))
        : "f" === k
          ? ((o.ov = "f"), ch("Bocal en fleur : cinq lobes."))
          : "as" === k
            ? ((o.as = Math.min(3, 1 + (e >> 4))), ch("Astéroïdes fixes : ils dévient les planètes."))
            : "g2" === k
              ? ((o.g2 = 1), ch("Deux centres de gravité : deux amas."))
              : "gr" === k
                ? ((o.gr = 1), ch("Gravité qui tourne : le tas suit le centre."))
                : "ag" === k
                  ? ((o.ag = 1), ch("Antigravité : une bulle repousse les planètes."))
                  : "rg" === k
                    ? ((o.rg = 1), ch("Anneau tournant : il balaie le tas."))
                    : "lu" === k
                      ? ((o.lu = Math.min(2, 1 + (e >> 5))),
                        ch("Lunes en orbite : elles poussent ce qu’elles touchent."))
                      : "col" === k
                        ? ((o.col = [
                            [o.T - 2, 1],
                            [o.T - 1, 1],
                            [o.T, 1],
                          ]),
                          (o.pre = Math.min(o.pre, 2)),
                          ch("Collection : garde ces planètes ensemble."))
                        : "jg" === k
                          ? (sp("j", 0.07),
                            sp("g", 0.1),
                            ch("Comète arc-en-ciel : fusionne avec tout. Planète dorée ✦ : bonus."))
                          : "wd" === k
                            ? ((o.wd = 1), ch("Vent solaire : il pousse les planètes."))
                            : "my" === k
                              ? (sp("m", 0.16), ch("Planète mystère ? : elle se dévoile en tombant."))
                              : "bm" === k
                                ? (sp("b", 0.07), ch("Météorite : elle repousse tout à l’impact."))
                                : "ss" === k
                                  ? ((o.ss = 1), ch("Étoile filante : elle traverse le bocal."))
                                  : "nt" === k &&
                                    ((o.nt = 1), ch("Éclipse : une ombre cache une partie du bocal."));
    },
    S = PLOS.filter((x) => x[1] <= e).map((x) => x[0]),
    M = PLOM.filter((x) => x[1] <= e).map((x) => x[0]),
    L = S.concat(M),
    c = 5 * Math.floor((e - 1) / 6) + [0, 1, 0, 2, 3, 4][v],
    k = L[(2 * c + (c >> 2)) % L.length];
  if ((ap(k), e >= 24)) {
    const m = S.includes(k) ? M[(3 * c + 1) % M.length] : S[(3 * c + 1) % S.length];
    m && ap(m);
  }
  return o;
}
function plFM(o, x, l) {
  return x ? plOr(l, { T: o.T, N: o.N, sc: o.sc, km: o.km, pre: o.pre }) : o;
}
const PLST = [
  ["v", 1],
  ["c", 9],
  ["pl", 13],
  ["et", 24],
];
const PLMD = [
  ["wd", 3],
  ["hv", 6],
  ["col", 7],
  ["jg", 11],
  ["my", 15],
  ["mg", 17],
  ["bm", 19],
  ["nt", 21],
];
function plCh(e, o) {
  if (e < 1) return o;
  const v = (e - 1) % 6,
    rk = (n) => Math.min(n, 1 + (e >> 3)),
    R1 = "Rochers : les fruits rebondissent dessus.",
    sp = (k, x) => {
      ((o.sp = o.sp || {}), (o.sp[k] = x));
    },
    ch = (t) => {
      o.ch = o.ch ? o.ch + " " + t : t;
    };
  if (o.sc)
    return (
      (o.rk = Math.min(3, 1 + (e >> 4))),
      sp("g", 0.12),
      (o.ch = R1 + " Fruit doré ✦ : fusion bonus."),
      o
    );
  const ap = (k) => {
    "v" === k
      ? ((o.sh = "v"), ch("Bocal en V : il se resserre vers le fond."))
      : "c" === k
        ? ((o.sh = "c"), ch("Bocal en cuvette : le fond est arrondi."))
        : "pl" === k
          ? ((o.pl = 1), (o.pre = 0), ch("Planche à bascule : elle penche selon le poids."))
          : "et" === k
            ? ((o.et = 1), (o.pre = 0), ch("Bocal à étages : guide les fruits par les trappes."))
            : "wd" === k
              ? ((o.wd = 1), ch("Courant d’air : le vent change de sens."))
              : "hv" === k
                ? (sp("h", 0.2), sp("l", 0.15), ch("Fruits lourds (sombres) et légers (pâles)."))
                : "col" === k
                  ? ((o.col = [
                      [o.T - 2, 1],
                      [o.T - 1, 1],
                      [o.T, 1],
                    ]),
                    (o.pre = Math.min(o.pre, 2)),
                    ch("Collection : garde ces fruits ensemble dans le bocal."))
                  : "jg" === k
                    ? (sp("j", 0.07),
                      sp("g", 0.1),
                      ch("Joker arc-en-ciel : fusionne avec tout. Doré ✦ : bonus."))
                    : "my" === k
                      ? (sp("m", 0.16), ch("Fruit mystère ? : il se dévoile en tombant."))
                      : "mg" === k
                        ? ((o.mg = 1), ch("Aimant : les fruits identiques s’attirent."))
                        : "bm" === k
                          ? (sp("b", 0.07), ch("Fruit bombe : il repousse tout à l’impact."))
                          : "nt" === k && ((o.nt = 1), ch("Bocal de nuit : seule la lueur te guide."));
  };
  if (1 === v) return ((o.rk = rk(4)), (o.ch = R1), o);
  if (4 === v) return ((o.km = Math.min(o.km, 1)), (o.ch = "Petits fruits seulement."), o);
  if (2 === v) return o;
  const S = PLST.filter((x) => x[1] <= e).map((x) => x[0]),
    M = PLMD.filter((x) => x[1] <= e).map((x) => x[0]),
    L = S.concat(M),
    c = 3 * Math.floor((e - 1) / 6) + (0 === v ? 0 : 3 === v ? 1 : 2),
    k = L[(2 * c + (c >> 2)) % L.length];
  if ((ap(k), e >= 28)) {
    const m = S.includes(k) ? M[(3 * c + 1) % M.length] : S[(3 * c + 1) % S.length];
    m && ap(m);
  }
  return o;
}
function plLv(e) {
  const a = e >= 20 && e % 5 == 4 && 39 !== e ? 800 + 120 * (e - 20) : 0,
    km = Math.min(4, 2 + Math.floor(e / 10));
  if (a)
    return plCh(e, {
      T: 0,
      N: 0,
      sc: Math.round((1.9 * a) / 10) * 10,
      km: km,
      pre: e % 4 == 3 ? 6 + Math.min(6, e >> 2) : 0,
    });
  let r = e;
  for (let i = 20; i < e; i++) i % 5 == 4 && 39 !== i && r--;
  const q = PLTB[Math.min(r, PLTB.length - 1)];
  return plCh(e, {
    T: q[0],
    N: q[0] <= 5 ? Math.min(6, 2 * q[1] + (e >= 5 ? 1 : 0)) : Math.min(4, q[1] + 1 + (e >= 5 ? 1 : 0)),
    sc: 0,
    km: km,
    pre: q[2],
  });
}
function plModeCard() {
  const e = plMd();
  return `<section class="rc plmode" data-g="●"><div class="rc-t"><small>Mode de jeu</small><b>${"orbite" === e ? "Orbite" : "eau" === e ? "Sous l’eau" : "Fruits"}</b><span>${"orbite" === e ? "Un bocal rond : les planètes sont attirées vers le centre." : "eau" === e ? "Les objets marins remontent vers la surface." : "Les fruits tombent au fond du bocal."}</span></div><div class="plseg"><button class="${e ? "" : "on"}" data-a="plMode" data-v="">Fruits</button><button class="${"orbite" === e ? "on" : ""}" data-a="plMode" data-v="orbite">Planètes${plLk("orbite", 35)}</button><button class="${"eau" === e ? "on" : ""}" data-a="plMode" data-v="eau">Sous l’eau${plLk("eau", 15)}</button></div>${plLockTx()}</section>`;
}
function plLk(m, t) {
  if (plUnl(m)) return "";
  const [f, w] = plCn(),
    n = "eau" === m ? f : f + w;
  return `<small style="display:block;font-size:11px;opacity:.85">🔒 ${Math.min(n, t)}/${t}</small>`;
}
function plLockTx() {
  const l = [];
  plUnl("eau") || l.push("🔒 Sous l’eau : termine 15 niveaux du mode Fruits.");
  plUnl("orbite") || l.push("🔒 Planètes : termine 35 niveaux en mode Fruits ou Sous l’eau.");
  return l.length
    ? `<p class="note" style="margin:8px 0 0;font-size:12.5px;opacity:.85">${l.join("<br>")}</p>`
    : "";
}
function pPlan(e) {
  const t = plMd(),
    a = "orbite" === t,
    s = "eau" === t,
    n = a ? PLN : s ? PLWN : PLFN,
    o = a ? PLCL : s ? PLWC : PLFN.map((e, t) => PLFC[t]),
    i = a ? "planètes" : s ? "objets" : "fruits",
    r = a ? 0.84 : 1,
    l = (e) => PLR[e] * r,
    c = 180,
    d = 312,
    f = 152,
    u = Math.PI,
    h = "planetes" === INFG,
    p = h ? { T: 0, N: 0, sc: 0, km: 2, pre: 0 } : plFM(plLv(lv), a, lv),
    m = 360,
    b = 560,
    g = 24,
    E = 336,
    y = 0.14;
  let YM = null,
    DD = 0,
    RL = null,
    plDR = 0,
    plTL = 0,
    plLS = -1,
    plLM = 0,
    plRK = [],
    plAt = [[180, 312, 1]],
    plAg = { x: 180, y: 312 },
    plSS = 8,
    wx = "",
    Rx = "",
    plPL = [],
    plWd = 0,
    plCK = "";
  const YF = () =>
    s
      ? Math.max(448, Math.min(520, null == YM ? 490 : YM))
      : Math.max(30, Math.min(112, null == YM ? 70 : YM));
  let v = [],
    A = [],
    S = [],
    x = 0,
    M = 0,
    L = Array(10).fill(0),
    T = 180,
    k = -u / 2,
    w = 0,
    R = 0,
    C = 0,
    O = !1,
    I = !1,
    N = !1,
    P = 0,
    U = 1,
    q = Math.min(2, devicePixelRatio || 1),
    D = {},
    H = 0,
    PD = !1;
  snap = h ? null : () => ({});
  const G = rng(6007 * (lv + 5) + 11),
    F = () => {
      const e = [],
        t = h ? Math.min(4, 2 + Math.floor(M / 2500)) : p.km;
      for (let a = 0; a <= t; a++) e.push(Math.pow(0.62, a));
      const a = e.reduce((e, t) => e + t);
      let s = Math.random() * a;
      for (let t = 0; t < e.length; t++) if (((s -= e[t]), s <= 0)) return t;
      return 0;
    },
    B = (e, t, a, s, n) => {
      const o = {
        id: ++x,
        k: e,
        r: l(e),
        x: t,
        y: a,
        vx: s || 0,
        vy: n || 0,
        a: 6 * Math.random(),
        w: 0,
        born: performance.now(),
        age: 0,
        ov: 0,
        dead: !1,
      };
      return (v.push(o), o);
    };
  frame(
    '<div class="bkh"' +
      (h || p.sc ? "" : ' style="justify-content:space-between"') +
      '><div class="pntg" id="plg"></div><div class="ttmid"' +
      (h || p.sc ? "" : ' style="display:none"') +
      '><div class="ttbar"><i id="plbr"></i></div><div class="tts"><span id="plsc">0</span> pts</div></div>\n  <button class="bkpz" data-a="plPause" aria-label="Pause"><svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg></button></div>\n  <div class="ttw pntw" id="pntw"><canvas id="plcv" class="ttcv"></canvas><div class="ttpop" id="plpop"></div><div class="ttov" id="plov" hidden></div></div>',
    1,
  );
  const z = $("#plcv"),
    V = z.getContext("2d"),
    j = $("#pntw"),
    Z = () => {
      scrollTo(0, 0);
      const e = Math.min(j.parentElement.clientWidth || 340, 560) - 8,
        t = Math.max(380, innerHeight - Math.round(j.getBoundingClientRect().top) - 20);
      U = Math.min(e / m, t / b);
      if (a || s) DD = 0;
      else {
        DD = Math.max(0, Math.min(150, Math.floor(t / (e / m) - b)));
        U = Math.min(e / m, t / (b + DD));
      }
      const hh = b + DD;
      ((z.width = Math.round(m * U * q)),
        (z.height = Math.round(hh * U * q)),
        (z.style.width = m * U + "px"),
        (z.style.height = hh * U + "px"),
        (D = {}));
    },
    PY = (q) => (null != q.ay ? q.ay : s ? 32 + q.o : 528 + DD - q.o),
    ORW = (ph) => {
      const z = p.ov;
      if (!z) return f;
      if ("e" === z) {
        const A = 1.12 * f,
          B = 0.86 * f;
        return (A * B) / Math.sqrt(B * B * Math.cos(ph) ** 2 + A * A * Math.sin(ph) ** 2);
      }
      return f * (1 + 0.09 * Math.cos(5 * ph));
    },
    ORP = () => {
      for (let i = 0; i <= 72; i++) {
        const ph = (i / 72) * 2 * Math.PI,
          r = ORW(ph) + 3;
        V[i ? "lineTo" : "moveTo"](c + r * Math.cos(ph), d + r * Math.sin(ph));
      }
      V.closePath();
    },
    OG = (t) => {
      let ax = 0,
        ay = 0;
      for (const q of plAt) {
        const dx = q[0] - t.x,
          dy = q[1] - t.y,
          dd = Math.hypot(dx, dy) || 1;
        ((ax += (dx / dd) * 1e3 * q[2]), (ay += (dy / dd) * 1e3 * q[2]));
      }
      if (p.ag) {
        const dx = t.x - plAg.x,
          dy = t.y - plAg.y,
          dd = Math.hypot(dx, dy) || 1;
        if (dd < 90) {
          const f2 = (1 - dd / 90) * 2600;
          ((ax += (dx / dd) * f2), (ay += (dy / dd) * f2));
        }
      }
      return [ax + 1.6 * plWd, ay];
    },
    ORK = () => {
      const r = [],
        P = Math.PI;
      if (p.as)
        for (let i = 0; i < p.as; i++) {
          const th = 2.3 * i + 0.6,
            rr = 55 + 25 * (i % 2);
          r.push({ x: c + Math.cos(th) * rr, ay: d + Math.sin(th) * rr, o: 0, r: 15 });
        }
      if (p.rg)
        for (let i = 0; i < 4; i++) {
          const th = (i * P) / 2;
          r.push({
            x: c + 80 * Math.cos(th),
            ay: d + 80 * Math.sin(th),
            o: 0,
            r: 13,
            orb: 1,
            th: th,
            rr: 80,
            om: 0.7,
            vx: 0,
            vy: 0,
          });
        }
      if (p.lu)
        for (let i = 0; i < p.lu; i++) {
          const th = i * P;
          r.push({
            x: c + 112 * Math.cos(th),
            ay: d + 112 * Math.sin(th),
            o: 0,
            r: 16,
            orb: 1,
            th: th,
            rr: 112,
            om: -0.8,
            moon: 1,
            vx: 0,
            vy: 0,
          });
        }
      return r;
    },
    OD = (ts) => {
      if (!a) return;
      if (p.g2 || p.gr)
        for (const q of plAt) {
          const gr = V.createRadialGradient(q[0], q[1], 1, q[0], q[1], 16);
          (gr.addColorStop(0, "rgba(255,240,200,.95)"),
            gr.addColorStop(1, "rgba(255,200,120,0)"),
            (V.fillStyle = gr),
            V.beginPath(),
            V.arc(q[0], q[1], 16, 0, 7),
            V.fill());
        }
      if (p.ag) {
        const gr = V.createRadialGradient(plAg.x, plAg.y, 6, plAg.x, plAg.y, 90);
        (gr.addColorStop(0, "rgba(190,140,255,.35)"),
          gr.addColorStop(1, "rgba(190,140,255,0)"),
          (V.fillStyle = gr),
          V.beginPath(),
          V.arc(plAg.x, plAg.y, 90, 0, 7),
          V.fill(),
          (V.strokeStyle = "rgba(210,180,255,.5)"),
          V.setLineDash([4, 6]),
          (V.lineWidth = 1.5),
          V.beginPath(),
          V.arc(plAg.x, plAg.y, 76, 0, 7),
          V.stroke(),
          V.setLineDash([]));
      }
    },
    JW = () => {
      V.moveTo(21, 472);
      for (let n = 442; n > 49; n -= 8) V.lineTo(21 + INS(n), n);
      const i = INS(49);
      (V.lineTo(21 + i, 49),
        V.quadraticCurveTo(21 + i, 29, 43 + i, 29),
        V.lineTo(317 - i, 29),
        V.quadraticCurveTo(339 - i, 29, 339 - i, 49));
      for (let n = 49; n < 442; n += 8) V.lineTo(339 - INS(n), n);
      V.lineTo(339, 472);
    },
    PLF = () => {
      if (a) return [];
      const k = s ? -1 : 1;
      return p.pl
        ? [{ x: 180, o: 170, h: 100, a: 0, w: 0, I: 4e7, mv: 1 }]
        : p.et
          ? [
              { x: 105, o: 310, h: 81, a: 0.14 * k, w: 0 },
              { x: 255, o: 170, h: 81, a: -0.14 * k, w: 0 },
            ]
          : [];
    },
    INS = (y) => {
      const z = p.sh;
      if (!z) return 0;
      const u = s ? Math.min(1, (442 - y) / 410) : y <= 118 ? 0 : Math.min(1, (y - 118) / (528 + DD - 118));
      return u <= 0 ? 0 : "v" === z ? 66 * u : 80 * u * u;
    },
    JP = () => {
      V.moveTo(21, 88);
      for (let n = 118; n < 511 + DD; n += 8) V.lineTo(21 + INS(n), n);
      const i = INS(511 + DD);
      (V.lineTo(21 + i, 511 + DD),
        V.quadraticCurveTo(21 + i, 531 + DD, 43 + i, 531 + DD),
        V.lineTo(317 - i, 531 + DD),
        V.quadraticCurveTo(339 - i, 531 + DD, 339 - i, 511 + DD));
      for (let n = 511 + DD; n > 118; n -= 8) V.lineTo(339 - INS(n), n);
      V.lineTo(339, 88);
    },
    SF = () => {
      const z = p.sp;
      if (!z || h) return "";
      const r = Math.random();
      let c = 0;
      for (const k of ["j", "b", "g", "m", "h", "l"]) if (((c += z[k] || 0), r < c)) return k;
      return "";
    },
    BS = (k, x, y, vx, vy) => {
      const z = wx,
        o = B("m" === z ? 2 : k, x, y, vx, vy);
      return (
        z &&
          ((o.sp = z),
          "m" === z ? ((o.my = !0), (o.k0 = k)) : "h" === z ? (o.mm = 3.2) : "l" === z && (o.mm = 0.3)),
        o
      );
    },
    MG = (n, o) =>
      "b" !== n.sp &&
      "b" !== o.sp &&
      !n.my &&
      !o.my &&
      (n.k === o.k || ("j" === n.sp && "j" !== o.sp) || ("j" === o.sp && "j" !== n.sp)),
    PX = (t) => {
      if (plRK.length) {
        for (const q of plRK)
          q.orb
            ? ((q.th += q.om * t),
              (q.x = c + q.rr * Math.cos(q.th)),
              (q.ay = d + q.rr * Math.sin(q.th)),
              (q.vx = -q.rr * q.om * Math.sin(q.th)),
              (q.vy = q.rr * q.om * Math.cos(q.th)))
            : q.dyn && ((q.x += q.vx * t), (q.ay += q.vy * t));
        plRK.some((q) => q.dyn && Math.hypot(q.x - c, q.ay - d) > 260) &&
          (plRK = plRK.filter((q) => !q.dyn || Math.hypot(q.x - c, q.ay - d) <= 260));
      }
      if (p.ss && PD && !I && !O && ((plSS -= t), plSS <= 0)) {
        plSS = 7 + 5 * Math.random();
        const ph = 6.283 * Math.random(),
          sx = c + 215 * Math.cos(ph),
          sy = d + 215 * Math.sin(ph),
          tx = c + 110 * (Math.random() - 0.5),
          ty = d + 110 * (Math.random() - 0.5),
          dd = Math.hypot(tx - sx, ty - sy);
        plRK.push({
          x: sx,
          ay: sy,
          o: 0,
          r: 11,
          dyn: 1,
          star: 1,
          vx: ((tx - sx) / dd) * 430,
          vy: ((ty - sy) / dd) * 430,
        });
      }
      for (const q of v)
        q.my &&
          q.age > 0.9 &&
          ((q.my = !1), (q.k = q.k0), (q.r = l(q.k)), K(q.x, q.y, o[q.k][1], 12, 110), sfx(520, 0.1));
      for (const q of v)
        if ("b" === q.sp && q.hit && q.age > 0.15 && !q.dead) {
          q.dead = !0;
          const BR = 150 + q.r;
          for (const u of v) {
            if (u === q || u.dead) continue;
            const dx = u.x - q.x,
              dy = u.y - q.y,
              d = Math.hypot(dx, dy) || 1;
            if (d < BR) {
              const f = ((1 - d / BR) * 750) / Math.max(0.6, u.r / 30);
              ((u.vx += (dx / d) * f), (u.vy += (dy / d) * f - 60 * (1 - d / BR)));
            }
          }
          (K(q.x, q.y, "#ffb347", 36, 260), W("Boum !"), sfx(120, 0.3), vib([30, 30]));
        }
      if ((v.some((q) => q.dead) && (v = v.filter((q) => !q.dead)), p.col && PD && !I && !O)) {
        const k = p.col.map((q) => (v.some((u) => u.k === q[0] && !u.my && "b" !== u.sp) ? 1 : 0)).join("");
        k !== plCK && ((plCK = k), Y(), J());
      }
    },
    MYD = (e, n) => {
      (V.save(), (V.globalAlpha = null == n ? 1 : n));
      const t = e.r,
        g1 = V.createRadialGradient(e.x - 0.3 * t, e.y - 0.3 * t, 0.1 * t, e.x, e.y, t);
      (g1.addColorStop(0, "#d9c6ff"),
        g1.addColorStop(1, "#5b3ba8"),
        (V.fillStyle = g1),
        V.beginPath(),
        V.arc(e.x, e.y, t, 0, 7),
        V.fill(),
        (V.fillStyle = "#fff"),
        (V.font = "800 " + Math.round(1.1 * t) + "px sans-serif"),
        (V.textAlign = "center"),
        (V.textBaseline = "middle"),
        V.fillText("?", e.x, e.y + 0.05 * t),
        V.restore());
    },
    SPO = (e) => {
      const t = e.r,
        k = e.sp;
      if (!k || "m" === k) return;
      (V.save(), V.translate(e.x, e.y));
      const ts = performance.now();
      if ("h" === k)
        ((V.fillStyle = "rgba(24,18,56,.4)"),
          V.beginPath(),
          V.arc(0, 0, t, 0, 7),
          V.fill(),
          (V.strokeStyle = "#2a2050"),
          (V.lineWidth = Math.max(2, 0.12 * t)),
          V.beginPath(),
          V.arc(0, 0, 0.94 * t, 0, 7),
          V.stroke());
      else if ("l" === k)
        ((V.fillStyle = "rgba(255,255,255,.32)"),
          V.beginPath(),
          V.arc(0, 0, t, 0, 7),
          V.fill(),
          (V.strokeStyle = "rgba(255,255,255,.9)"),
          (V.lineWidth = 2),
          V.setLineDash([4, 5]),
          V.beginPath(),
          V.arc(0, 0, t + 3, 0, 7),
          V.stroke());
      else if ("g" === k) {
        ((V.strokeStyle = "#ffd34a"),
          (V.lineWidth = Math.max(2.5, 0.1 * t)),
          V.beginPath(),
          V.arc(0, 0, t - 2, 0, 7),
          V.stroke());
        const q = 0.5 + 0.5 * Math.sin(ts / 260);
        ((V.fillStyle = "rgba(255,235,140," + (0.22 + 0.3 * q) + ")"),
          V.beginPath(),
          V.arc(0, 0, t, 0, 7),
          V.fill(),
          (V.fillStyle = "#fff6c0"),
          (V.font = "700 " + Math.round(0.7 * t) + "px sans-serif"),
          (V.textAlign = "center"),
          (V.textBaseline = "middle"),
          V.fillText("✦", 0, 0.05 * t));
      } else if ("j" === k) {
        V.lineWidth = Math.max(3, 0.14 * t);
        for (let i = 0; i < 6; i++)
          ((V.strokeStyle = "hsl(" + ((60 * i + ts / 8) % 360) + ",90%,60%)"),
            V.beginPath(),
            V.arc(0, 0, t - 2, (i * Math.PI) / 3, ((i + 1) * Math.PI) / 3 + 0.05),
            V.stroke());
        ((V.fillStyle = "rgba(255,255,255,.85)"),
          (V.font = "800 " + Math.round(0.8 * t) + "px sans-serif"),
          (V.textAlign = "center"),
          (V.textBaseline = "middle"),
          V.fillText("★", 0, 0.05 * t));
      } else if ("b" === k) {
        ((V.fillStyle = "rgba(18,18,40,.88)"),
          V.beginPath(),
          V.arc(0, 0, t, 0, 7),
          V.fill(),
          (V.strokeStyle = "rgba(255,90,70," + (0.5 + 0.4 * Math.sin(ts / 120)) + ")"),
          (V.lineWidth = Math.max(2, 0.1 * t)),
          V.beginPath(),
          V.arc(0, 0, t - 1, 0, 7),
          V.stroke(),
          (V.font = Math.round(1.2 * t) + "px sans-serif"),
          (V.textAlign = "center"),
          (V.textBaseline = "middle"),
          V.fillText("💣", 0, 0.05 * t));
      }
      V.restore();
    },
    NT = (ts) => {
      if (a) {
        (V.save(), V.beginPath(), ORP(), V.clip());
        const sx = c + 95 * Math.cos(ts / 3700),
          sy = d + 80 * Math.sin(ts / 2900),
          gr = V.createRadialGradient(sx, sy, 20, sx, sy, 85);
        (gr.addColorStop(0, "rgba(6,8,34,.95)"),
          gr.addColorStop(0.7, "rgba(6,8,34,.85)"),
          gr.addColorStop(1, "rgba(6,8,34,0)"),
          (V.fillStyle = gr),
          V.fillRect(0, 0, m, b),
          V.restore());
        return;
      }
      const x = Math.max(g, Math.min(E, T)),
        y1 = s ? 32 : 118,
        hh = s ? 410 : b + DD - y1,
        cy = y1 + 0.55 * hh,
        gr = V.createRadialGradient(x, cy, 30, x, cy, 260);
      (gr.addColorStop(0, "rgba(6,8,34,0)"),
        gr.addColorStop(0.5, "rgba(6,8,34,.45)"),
        gr.addColorStop(1, "rgba(6,8,34,.93)"),
        (V.fillStyle = gr),
        V.fillRect(0, y1, m, hh));
    },
    WD = (ts) => {
      if (!p.wd) return;
      const w = plWd,
        dir = w >= 0 ? 1 : -1,
        al = Math.min(1, Math.abs(w) / 220);
      (V.save(),
        (V.strokeStyle = "rgba(220,240,255," + (0.15 + 0.35 * al) + ")"),
        (V.lineWidth = 2),
        (V.lineCap = "round"));
      for (let i = 0; i < 7; i++) {
        const x = (((ts * 0.09 * dir * (1 + al) + 53 * i) % 360) + 360) % 360,
          yy = 140 + i * (60 + DD / 7);
        (V.beginPath(), V.moveTo(x, yy), V.lineTo(x + 22 * dir, yy), V.stroke());
      }
      ((V.fillStyle = "rgba(255,255,255,.8)"),
        (V.font = '700 12px "Nunito Sans",sans-serif'),
        (V.textAlign = "center"),
        V.fillText("💨 " + (Math.abs(w) < 30 ? "·" : w > 0 ? "→" : "←"), 60, 26),
        V.restore());
    },
    RKF = () => {
      if (a) return ORK();
      if (!p.rk) return [];
      return [
        [[180, 190]],
        [
          [110, 230],
          [250, 160],
        ],
        [
          [85, 250],
          [260, 210],
          [170, 140],
        ],
        [
          [85, 260],
          [275, 250],
          [180, 180],
          [180, 90],
        ],
      ][Math.min(4, p.rk) - 1].map((q) => ({ x: q[0], o: q[1], r: 19 }));
    },
    EX = () =>
      p.lim
        ? " · " + Math.max(0, plLM - plDR) + " restants"
        : p.tm
          ? " · " + Math.max(0, Math.ceil(plTL)) + " s"
          : "",
    OV = (tt, pp, ac, lb) => {
      O = !0;
      const e = $("#plov");
      ((e.hidden = !1),
        (e.innerHTML = `<div><b>${tt}</b><p>${pp}</p><button class="btn" data-a="${ac}">${lb}</button><button class="btn alt" data-a="plRe">Recommencer</button></div>`),
        requestAnimationFrame(() => e.classList.add("on")));
    },
    Y = () => {
      if (h)
        return (
          ($("#plg").innerHTML = "<b>Mode infini</b>"),
          ($("#plbr").style.width = Math.min(100, (M % 2500) / 25) + "%"),
          void ($("#plsc").textContent = M)
        );
      if (p.col)
        return (
          ($("#plg").innerHTML = p.col
            .map(
              (q) =>
                `<i class="pntgi" style="opacity:${v.some((u) => u.k === q[0] && !u.my && "b" !== u.sp) ? 1 : 0.3};background:radial-gradient(circle at 35% 30%,${o[q[0]][0]},${o[q[0]][1]})"></i>`,
            )
            .join("")),
          void ($("#plsc").textContent = M)
        );
      const e = p.sc ? p.sc : p.N,
        t = p.sc ? Math.min(M, p.sc) : Math.min(L[p.T], p.N);
      (($("#plg").innerHTML = p.sc
        ? `<b>Objectif</b> ${p.sc} pts${EX()}`
        : `<i class="pntgi" style="background:radial-gradient(circle at 35% 30%,${o[p.T][0]},${o[p.T][1]})"></i><span>${n[p.T]} ${t}/${p.N}${EX()}</span>`),
        ($("#plbr").style.width = (100 * t) / e + "%"),
        ($("#plsc").textContent = M));
    },
    W = (e, t) => {
      const a = $("#plpop");
      ((a.textContent = e),
        (a.className = "ttpop"),
        a.offsetWidth,
        (a.className = "ttpop on" + (t ? " big" : "")));
    },
    K = (e, t, a, s, n) => {
      for (let o = 0; o < s; o++) {
        const s = 7 * Math.random(),
          o = (n || 90) * (0.4 + Math.random());
        A.push({
          x: e,
          y: t,
          vx: Math.cos(s) * o,
          vy: Math.sin(s) * o - 30,
          l: 1,
          c: a,
          s: 1.2 + 2.4 * Math.random(),
        });
      }
    },
    Q = (e) => {
      const t = ORW(k) + l(e) + 16,
        a = c + Math.cos(k) * t,
        s = d + Math.sin(k) * t;
      return [Math.max(l(e) + 3, Math.min(m - l(e) - 3, a)), Math.max(l(e) + 3, Math.min(b - l(e) - 3, s))];
    },
    X = (e) => {
      if (((PD = !0), (C = e + 420), plDR++, Y(), a)) {
        const [e, t] = Q(w),
          a = Math.hypot(c - e, d - t) || 1;
        BS(w, e, t, ((c - e) / a) * 470, ((d - t) / a) * 470).in = !1;
      } else BS(w, Math.max(g + l(w), Math.min(E - l(w), T)), YF(), 0, s ? -560 : 60);
      ((w = R), (wx = Rx), (R = F()), (Rx = SF()), sfx(240, 0.05));
    },
    J = () => {
      I ||
        O ||
        !PD ||
        (!h &&
          (p.sc
            ? M >= p.sc
            : p.col
              ? p.col.every((q) => v.some((u) => u.k === q[0] && !u.my && "b" !== u.sp))
              : L[p.T] >= p.N) &&
          ((I = !0),
          W("Bravo !", 1),
          v.forEach((e) => K(e.x, e.y, o[e.k][0], 6, 120)),
          setTimeout(win, 1600)));
    },
    _ = () => {
      const e = $("#plov");
      (e.classList.remove("on"), (e.hidden = !0));
    },
    ee = () => {
      ((v = []),
        (A = []),
        (S = []),
        (M = 0),
        (plCK = ""),
        (plPL = PLF()),
        (plSS = 8),
        (plDR = 0),
        (plTL = p.tm || 0),
        (plLS = -1),
        (plLM = p.lim || 0),
        (plRK = RKF()),
        (L = Array(10).fill(0)),
        (O = I = !1),
        (H = 0),
        (PD = !1));
      for (let e = 0; e < p.pre; e++) {
        const t = Math.floor(3 * G());
        if (a) {
          const e = G() * u * 2,
            a = 70 * G();
          B(t, c + Math.cos(e) * a, d + Math.sin(e) * a, 0, 0).in = !0;
        } else {
          const a = g + l(t) + G() * (312 - 2 * l(t));
          B(t, a, s ? 62 + 26 * e + 20 * G() : 498 + DD - 26 * e - 20 * G(), 0, 0);
        }
      }
      ((w = F()),
        (R = F()),
        (wx = SF()),
        (Rx = SF()),
        (C = performance.now() + 300),
        Y(),
        p.ch && msg(s ? p.ch.replace(/Fruit(s?)/g, "Objet$1").replace(/fruit(s?)/g, "objet$1") : p.ch));
    };
  ((act.plCont = () => {
    O &&
      spend(1) &&
      (_(),
      (v = v.filter((e) => (s ? e.y + e.r < 352 : e.y - e.r > 208))),
      v.forEach((e) => (e.ov = 0)),
      (O = !1),
      (H = 0),
      (C = performance.now() + 500));
  }),
    (act.plRe = () => {
      (_(), ee());
    }),
    (act.plTime = () => {
      O && spend(1) && (_(), (O = !1), (plTL = 20), (plLS = -1), (C = performance.now() + 500), Y());
    }),
    (act.plMore = () => {
      O && spend(1) && (_(), (O = !1), (plLM = plDR + 6), (C = performance.now() + 500), Y());
    }),
    (act.plPause = () => {
      if (I || O) return;
      N = !N;
      const e = $("#plov");
      N
        ? ((e.hidden = !1),
          (e.innerHTML =
            "<div><b>Pause</b><p>Les " +
            i +
            ' attendent.</p><button class="btn" data-a="plPause">Reprendre</button></div>'),
          requestAnimationFrame(() => e.classList.add("on")))
        : _();
    }),
    (act.hint = () => {
      I ||
        O ||
        !v.length ||
        (spend(1) &&
          (v
            .slice()
            .sort((e, t) => e.k - t.k || t.y - e.y)
            .slice(0, 3)
            .forEach((e) => {
              ((e.dead = !0), K(e.x, e.y, "#ffffff", 12, 120));
            }),
          (v = v.filter((e) => !e.dead)),
          msg(
            a
              ? "Une météorite emporte les trois plus petites planètes."
              : s
                ? "Un courant emporte les trois plus petits objets."
                : "Un petit oiseau picore les trois plus petits fruits.",
          )));
    }));
  const te = (e) => {
      const t = [];
      for (const t of v) {
        if (a) {
          const a = c - t.x,
            s = d - t.y,
            n = Math.hypot(a, s) || 1;
          ((() => {
            const q = OG(t);
            ((t.vx += q[0] * e), (t.vy += q[1] * e));
          })(),
            t.in && ((t.vx *= 1 - 1.5 * e), (t.vy *= 1 - 1.5 * e)),
            (t.w *= 1 - 1.6 * e),
            Math.abs(t.w) < 0.05 && (t.w = 0),
            (t.x += t.vx * e),
            (t.y += t.vy * e),
            (t.a += t.w * e),
            (t.age += e));
          const o = Math.hypot(t.x - c, t.y - d) || 1;
          if (!t.in) {
            o + t.r < ORW(Math.atan2(t.y - d, t.x - c)) - 1 && (t.in = !0);
            continue;
          }
          const FW = ORW(Math.atan2(t.y - d, t.x - c));
          if (o + t.r > FW) {
            const e = (t.x - c) / o,
              a = (t.y - d) / o;
            ((t.hit = 1), (t.x = c + e * (FW - t.r)), (t.y = d + a * (FW - t.r)));
            const s = t.vx * e + t.vy * a;
            (s > 0 && ((t.vx -= (1 + y) * s * e), (t.vy -= (1 + y) * s * a)), (t.w *= 0.9));
            {
              const s = -a,
                n = e,
                o = t.vx * s + t.vy * n;
              ((t.vx -= s * o * 0.25), (t.vy -= n * o * 0.25));
            }
          }
          continue;
        }
        (s
          ? ((t.vy -= 225 * e),
            (t.vx += plWd * e),
            (t.vx *= 1 - 2.2 * e),
            (t.vy *= Math.max(0, 1 - (1.9 + Math.abs(t.vy) / 260) * e)),
            (t.w *= 1 - 1.2 * e))
          : ((t.vy += 1500 * e),
            (t.vx += plWd * e),
            (t.w *= 1 - 2.2 * e),
            (t.w = Math.max(-6, Math.min(6, t.w))),
            Math.abs(t.w) < 0.04 && (t.w = 0)),
          (t.x += t.vx * e),
          (t.y += t.vy * e),
          (t.a += t.w * e),
          (t.age += e),
          t.x - t.r < g && ((t.x = g + t.r), t.vx < 0 && (t.vx *= -y), (t.w *= 0.97)),
          t.x + t.r > E && ((t.x = E - t.r), t.vx > 0 && (t.vx *= -y), (t.w *= 0.97)),
          s
            ? t.y - t.r < 32 &&
              ((t.y = 32 + t.r),
              (t.hit = 1),
              t.vy < 0 && (t.vy *= -y),
              (t.vx *= 0.985),
              (t.w = 0.9 * t.w - (t.vx / t.r) * 0.1))
            : t.y + t.r > 528 + DD &&
              ((t.y = 528 + DD - t.r),
              (t.hit = 1),
              t.vy > 0 && (t.vy *= -y),
              (t.vx *= 0.985),
              (t.w = 0.9 * t.w + (t.vx / t.r) * 0.1)));
      }
      if (p.mg)
        for (let i = 0; i < v.length; i++)
          for (let j = i + 1; j < v.length; j++) {
            const n = v[i],
              o = v[j];
            if (n.k !== o.k || n.my || o.my) continue;
            const dx = o.x - n.x,
              dy = o.y - n.y,
              d = Math.hypot(dx, dy) || 1,
              gp = d - n.r - o.r;
            if (gp < 0 || gp > 70) continue;
            const f = (1 - gp / 70) * 520 * e;
            ((n.vx += (dx / d) * f), (n.vy += (dy / d) * f), (o.vx -= (dx / d) * f), (o.vy -= (dy / d) * f));
          }
      if (p.sh)
        for (const t of v) {
          const iy = INS(t.y),
            sl = (INS(t.y + 2) - INS(t.y - 2)) / 4,
            nn = Math.sqrt(1 + sl * sl),
            dl = (t.x - (g + iy)) / nn;
          if (dl < t.r) {
            const nx = 1 / nn,
              ny = -sl / nn;
            ((t.x += nx * (t.r - dl)), (t.y += ny * (t.r - dl)), (t.hit = 1));
            const vn = t.vx * nx + t.vy * ny;
            vn < 0 && ((t.vx -= (1 + y) * vn * nx), (t.vy -= (1 + y) * vn * ny));
          }
          const dr = (E - iy - t.x) / nn;
          if (dr < t.r) {
            const nx = -1 / nn,
              ny = -sl / nn;
            ((t.x += nx * (t.r - dr)), (t.y += ny * (t.r - dr)), (t.hit = 1));
            const vn = t.vx * nx + t.vy * ny;
            vn < 0 && ((t.vx -= (1 + y) * vn * nx), (t.vy -= (1 + y) * vn * ny));
          }
        }
      for (const q of plPL) {
        const px = q.x,
          py = PY(q),
          cs = Math.cos(q.a),
          sn = Math.sin(q.a);
        for (const t of v) {
          const u = (t.x - px) * cs + (t.y - py) * sn,
            uc = Math.max(-q.h, Math.min(q.h, u)),
            qx = px + cs * uc,
            qy = py + sn * uc,
            dx = t.x - qx,
            dy = t.y - qy,
            dd = Math.hypot(dx, dy) || 0.01,
            mn = t.r + 6;
          if (dd < mn) {
            const nx = dx / dd,
              ny = dy / dd;
            ((t.x = qx + nx * mn), (t.y = qy + ny * mn), (t.hit = 1));
            const cx = qx - px,
              cy = qy - py,
              vpx = -q.w * cy,
              vpy = q.w * cx,
              vn = (t.vx - vpx) * nx + (t.vy - vpy) * ny;
            if (vn < 0) {
              const m = t.r * t.r * (t.mm || 1),
                cr = cx * ny - cy * nx,
                K2 = 1 / m + (q.mv ? (cr * cr) / q.I : 0),
                j = (-1.1 * vn) / K2;
              ((t.vx += (j / m) * nx), (t.vy += (j / m) * ny), q.mv && (q.w -= (j * cr) / q.I));
              const tx = -ny,
                ty = nx,
                vt = (t.vx - vpx) * tx + (t.vy - vpy) * ty;
              ((t.vx -= tx * vt * 0.04), (t.vy -= ty * vt * 0.04));
            }
          }
        }
        q.mv &&
          ((q.w *= 1 - 2 * e),
          (q.a += q.w * e),
          Math.abs(q.a) > 0.42 && ((q.a = 0.42 * Math.sign(q.a)), (q.w = 0)));
      }
      if (plRK.length)
        for (const t of v)
          for (const q of plRK) {
            const px = q.x,
              py = PY(q),
              dx = t.x - px,
              dy = t.y - py,
              dd = Math.hypot(dx, dy) || 0.01,
              mn = t.r + q.r;
            if (dd < mn) {
              const nx = dx / dd,
                ny = dy / dd;
              ((t.x = px + nx * mn), (t.y = py + ny * mn), (t.hit = 1));
              const vn = (t.vx - (q.vx || 0)) * nx + (t.vy - (q.vy || 0)) * ny;
              vn < 0 && ((t.vx -= 1.3 * vn * nx), (t.vy -= 1.3 * vn * ny));
            }
          }
      for (let e = 0; e < v.length; e++)
        for (let a = e + 1; a < v.length; a++) {
          const n = v[e],
            o = v[a];
          if (n.dead || o.dead) continue;
          const i = o.x - n.x,
            r = o.y - n.y,
            l = n.r + o.r;
          if (i * i + r * r >= l * l) continue;
          n.hit = o.hit = !0;
          if (MG(n, o)) {
            ((n.dead = o.dead = !1), t.push([n, o]));
            continue;
          }
          const c = Math.sqrt(i * i + r * r) || 0.01,
            d = i / c,
            f = r / c,
            u = n.r * n.r * (n.mm || 1),
            h = o.r * o.r * (o.mm || 1),
            p = l - c,
            m = u + h;
          ((n.x -= (d * p * h) / m),
            (n.y -= (f * p * h) / m),
            (o.x += (d * p * u) / m),
            (o.y += (f * p * u) / m));
          const b = (o.vx - n.vx) * d + (o.vy - n.vy) * f;
          if (b < 0) {
            const e = (-(1 + (s ? 0.04 : y)) * b) / (1 / u + 1 / h);
            ((n.vx -= (e * d) / u), (n.vy -= (e * f) / u), (o.vx += (e * d) / h), (o.vy += (e * f) / h));
            const t = -f,
              a = d,
              i = (o.vx - n.vx) * t + (o.vy - n.vy) * a;
            ((n.vx += (t * i * 0.06 * h) / m),
              (n.vy += (a * i * 0.06 * h) / m),
              (o.vx -= (t * i * 0.06 * u) / m),
              (o.vy -= (a * i * 0.06 * u) / m),
              (n.w += (0.02 * i) / n.r),
              (o.w += (0.02 * i) / o.r));
          }
        }
      const i = new Set();
      (t.forEach(([e, t]) => {
        i.has(e) ||
          i.has(t) ||
          (i.add(e),
          i.add(t),
          ((e, t) => {
            const g2 = "g" === e.sp || "g" === t.sp;
            ("j" === e.sp && (e.k = t.k), "j" === t.sp && (t.k = e.k), (e.dead = t.dead = !0));
            const i = e.k,
              r = (e.x * e.r * e.r + t.x * t.r * t.r) / (e.r * e.r + t.r * t.r),
              l = (e.y * e.r * e.r + t.y * t.r * t.r) / (e.r * e.r + t.r * t.r);
            if (i >= 9)
              return (
                (M += 400),
                K(r, l, "#ffe38a", 40, 260),
                W(a ? "Supernova !" : s ? "Raz-de-marée !" : "Super pastèque !", 1),
                sfx(900, 0.4),
                vib([20, 40, 20]),
                L[9]++,
                Y(),
                void J()
              );
            const c = B(i + 1, r, l, (e.vx + t.vx) / 2, (e.vy + t.vy) / 2 - 40);
            ((c.w = (e.w + t.w) / 2),
              (c.age = 1.2),
              PD && ((L[i + 1] += g2 ? 2 : 1), (M += (i + 2) * (i + 2) * 2 * (g2 ? 3 : 1))),
              g2 && K(r, l, "#ffd34a", 26, 210),
              K(r, l, o[i + 1][1], 10 + 3 * i, 90 + 12 * i),
              S.push({ x: r, y: l, r: c.r, t: performance.now(), c: o[i + 1][0] }),
              sfx(300 + 55 * i, 0.14),
              vib(i > 5 ? [12, 30, 12] : 6),
              i + 1 >= 6 && W(n[i + 1] + " !", i + 1 >= 8),
              Y(),
              J());
          })(e, t));
      }),
        t.length && (v = v.filter((e) => !e.dead)));
    },
    ae = (e, t, n) => {
      if (e.my) return void MYD(e, n);
      const i = (t - e.born) / 320,
        r = i < 1 ? 1 + 0.16 * Math.sin(Math.min(1, i) * Math.PI) * (e.age > 1 ? 1 : 0) : 1,
        c = ((e) => {
          if (D[e]) return D[e];
          const t = l(e),
            n = U * q,
            i = Math.ceil(2.9 * t * n),
            r = document.createElement("canvas");
          r.width = r.height = i;
          const c = r.getContext("2d");
          (c.translate(i / 2, i / 2), c.scale(n, n));
          const d = o[e],
            f = c.createRadialGradient(0.35 * -t, 0.4 * -t, 0.1 * t, 0, 0, t);
          (f.addColorStop(0, d[0]),
            f.addColorStop(1, d[1]),
            9 === e && a && ((c.shadowColor = "#ffb347"), (c.shadowBlur = 0.6 * t)),
            c.save(),
            c.beginPath(),
            c.arc(0, 0, t, 0, 7),
            (c.fillStyle = f),
            c.fill(),
            (c.shadowBlur = 0),
            c.clip());
          const u = (e, a, s, n, o, i) => {
            ((c.fillStyle = o), c.beginPath(), c.ellipse(e * t, a * t, s * t, n * t, i || 0, 0, 7), c.fill());
          };
          if (a) {
            if (
              ((1 !== e && 2 !== e) ||
                [
                  [-0.4, -0.3, 0.16],
                  [0.35, 0.2, 0.2],
                  [-0.1, 0.5, 0.12],
                  [0.45, -0.45, 0.1],
                ].forEach((e) => u(e[0], e[1], e[2], e[2], "rgba(80,70,90,.28)")),
              3 === e &&
                (u(-0.2, 0.1, 0.4, 0.22, "rgba(120,40,20,.35)", 0.4),
                u(0.45, -0.35, 0.18, 0.12, "rgba(255,255,255,.45)")),
              4 === e)
            )
              for (let e = -2; e <= 2; e++) u(0, 0.32 * e, 1.1, 0.1, "rgba(255,255,255,.35)", 0.25);
            if (
              (5 === e &&
                (u(-0.3, -0.2, 0.34, 0.26, "#5cc97a", 0.5),
                u(0.35, 0.3, 0.3, 0.2, "#5cc97a", -0.4),
                u(0.1, -0.62, 0.22, 0.1, "#fff")),
              6 === e)
            )
              for (let e = -1; e <= 1; e++) u(0, 0.45 * e, 1.1, 0.12, "rgba(160,200,255,.4)", -0.15);
            if (7 === e) for (let e = -2; e <= 2; e++) u(0, 0.3 * e, 1.1, 0.09, "rgba(160,110,50,.3)", 0.1);
            (8 === e &&
              ([-0.6, -0.3, 0, 0.3, 0.6].forEach((e, t) =>
                u(0, e, 1.1, 0.11, t % 2 ? "rgba(255,240,210,.5)" : "rgba(170,80,40,.4)"),
              ),
              u(0.35, 0.25, 0.2, 0.12, "#d9573a")),
              9 === e &&
                (u(-0.3, -0.2, 0.2, 0.14, "rgba(255,255,220,.6)"),
                u(0.3, 0.3, 0.14, 0.1, "rgba(255,200,80,.6)")));
          } else if (s) {
            if (
              (0 === e &&
                (u(-0.35, -0.35, 0.22, 0.14, "rgba(255,255,255,.9)", -0.6),
                u(0.3, 0.35, 0.1, 0.06, "rgba(255,255,255,.6)")),
              1 === e &&
                (u(-0.3, -0.35, 0.28, 0.18, "rgba(255,255,255,.95)", -0.5),
                u(0.2, 0.4, 0.4, 0.2, "rgba(200,180,230,.35)")),
              2 === e &&
                [
                  [-0.3, -0.2],
                  [0.25, 0.3],
                  [0.3, -0.35],
                  [-0.2, 0.4],
                ].forEach((e) => u(e[0], e[1], 0.12, 0.12, "rgba(255,255,255,.35)")),
              3 === e)
            ) {
              for (let e = -1; e <= 1; e++) u(0.35 * e, 0.1, 0.12, 0.5, "rgba(255,255,255,.3)");
              u(0, -0.45, 0.6, 0.2, "rgba(255,255,255,.35)");
            }
            if (4 === e) {
              ((c.strokeStyle = "rgba(200,90,90,.4)"), (c.lineWidth = 0.06 * t));
              for (let e = -3; e <= 3; e++)
                (c.beginPath(), c.moveTo(0, 0.95 * t), c.lineTo(e * t * 0.32, -t), c.stroke());
            }
            if (5 === e) {
              u(0, -0.4, 0.9, 0.45, "rgba(200,140,30,.35)");
              for (let e = 0; e < 8; e++)
                u(0.55 * Math.cos(e), 0.5 * Math.sin(1.7 * e), 0.05, 0.05, "rgba(140,90,20,.6)");
            }
            if (
              (6 === e &&
                [
                  [0, 0, 0.32],
                  [-0.5, -0.3, 0.2],
                  [0.5, -0.3, 0.2],
                  [-0.5, 0.35, 0.2],
                  [0.5, 0.35, 0.2],
                  [0, -0.62, 0.16],
                  [0, 0.62, 0.16],
                ].forEach((e) => u(e[0], e[1], e[2], 0.85 * e[2], "rgba(30,90,40,.4)")),
              7 === e &&
                [
                  [-0.3, -0.35, 0.1],
                  [0.25, -0.4, 0.12],
                  [0.4, 0, 0.08],
                  [-0.45, 0.05, 0.07],
                ].forEach((e) => u(e[0], e[1], e[2], e[2], "rgba(255,230,220,.55)")),
              8 === e)
            )
              for (let e = -2; e <= 2; e++) u(0, 0.3 * e, 1.1, 0.06, "rgba(255,255,255,.3)");
            if (9 === e) {
              u(0, 0.55, 0.9, 0.35, "rgba(220,235,255,.55)");
              for (let e = 0; e < 4; e++) u(0, 0.38 + 0.13 * e, 0.85, 0.025, "rgba(30,60,140,.4)");
            }
          } else {
            if (((0 !== e && 5 !== e) || u(-0.35, -0.35, 0.22, 0.14, "rgba(255,255,255,.55)", -0.6), 1 === e))
              for (let e = -0.4; e <= 0.6; e += 0.28)
                for (let t = -0.6; t <= 0.6; t += 0.3)
                  u(t + (Math.round(10 * e) % 2 ? 0.15 : 0), e, 0.04, 0.06, "#ffe27a");
            if (
              (2 === e &&
                [
                  [-0.35, -0.35],
                  [0.25, -0.4],
                  [0, 0],
                  [-0.4, 0.3],
                  [0.35, 0.25],
                  [0, 0.55],
                  [0.5, -0.05],
                ].forEach((e) => {
                  (u(e[0], e[1], 0.26, 0.26, "rgba(90,20,130,.35)"),
                    u(e[0] - 0.08, e[1] - 0.08, 0.07, 0.05, "rgba(255,255,255,.5)"));
                }),
              3 === e)
            ) {
              for (let e = 0; e < 14; e++)
                u(0.6 * Math.cos(2.4 * e), 0.6 * Math.sin(2.4 * e), 0.03, 0.03, "rgba(200,90,0,.4)");
              u(-0.3, -0.35, 0.2, 0.12, "rgba(255,255,255,.4)", -0.5);
            }
            if (
              (4 === e && u(-0.3, -0.3, 0.2, 0.12, "rgba(255,255,255,.4)", -0.5),
              6 === e &&
                ((c.strokeStyle = "rgba(220,90,70,.45)"),
                (c.lineWidth = 0.07 * t),
                c.beginPath(),
                c.moveTo(0.1 * -t, -t),
                c.quadraticCurveTo(0.35 * t, 0, 0.05 * -t, t),
                c.stroke(),
                u(0.35, 0.1, 0.4, 0.45, "rgba(255,110,90,.3)")),
              7 === e)
            ) {
              ((c.strokeStyle = "rgba(170,110,20,.45)"), (c.lineWidth = 0.05 * t));
              for (let e = -4; e <= 4; e++)
                (c.beginPath(),
                  c.moveTo(e * t * 0.35 - t, -t),
                  c.lineTo(e * t * 0.35 + t, t),
                  c.stroke(),
                  c.beginPath(),
                  c.moveTo(e * t * 0.35 + t, -t),
                  c.lineTo(e * t * 0.35 - t, t),
                  c.stroke());
            }
            if (8 === e) {
              ((c.strokeStyle = "rgba(255,255,230,.55)"), (c.lineWidth = 0.035 * t));
              for (let e = -4; e <= 4; e++)
                (c.beginPath(),
                  c.moveTo(e * t * 0.3, -t),
                  c.quadraticCurveTo(e * t * 0.3 + 0.2 * t, 0, e * t * 0.3, t),
                  c.stroke(),
                  c.beginPath(),
                  c.moveTo(-t, e * t * 0.3),
                  c.quadraticCurveTo(0, e * t * 0.3 + 0.2 * t, t, e * t * 0.3),
                  c.stroke());
            }
            if (9 === e) {
              ((c.strokeStyle = "rgba(20,70,30,.7)"), (c.lineWidth = 0.13 * t));
              for (let e = -3; e <= 3; e++) {
                (c.beginPath(), c.moveTo(e * t * 0.32, -t));
                for (let a = -1; a <= 1; a += 0.25)
                  c.lineTo(e * t * 0.32 + (Math.round(4 * a) % 2 ? 0.07 * t : 0.07 * -t), a * t);
                c.stroke();
              }
            }
          }
          if ((c.restore(), !a)) {
            const a = (e, a, s, n, o) => {
              ((c.fillStyle = o || "#4aa83a"),
                c.save(),
                c.translate(e * t, a * t),
                c.rotate(s),
                c.beginPath(),
                c.ellipse(0, (-n * t) / 2, n * t * 0.22, (n * t) / 2, 0, 0, 7),
                c.fill(),
                c.restore());
            };
            if (s) {
              if (((c.lineCap = "round"), 2 === e)) {
                ((c.strokeStyle = "#7a3ab8"), (c.lineWidth = 0.06 * t));
                for (let e = 0; e < 20; e++) {
                  const a = (e / 20) * 6.283;
                  (c.beginPath(),
                    c.moveTo(Math.cos(a) * t * 0.95, Math.sin(a) * t * 0.95),
                    c.lineTo(Math.cos(a) * t * 1.28, Math.sin(a) * t * 1.28),
                    c.stroke());
                }
              }
              if (3 === e) {
                ((c.strokeStyle = "rgba(220,140,230,.8)"), (c.lineWidth = 0.07 * t));
                for (let e = -2; e <= 2; e++)
                  (c.beginPath(),
                    c.moveTo(e * t * 0.3, 0.8 * t),
                    c.quadraticCurveTo(e * t * 0.3 + 0.15 * t, 1.1 * t, e * t * 0.3, 1.35 * t),
                    c.stroke());
              }
              if (5 === e) {
                ((c.strokeStyle = "#c8961a"), (c.lineWidth = 0.05 * t));
                for (let e = 0; e < 14; e++) {
                  const a = (e / 14) * 6.283;
                  (c.beginPath(),
                    c.moveTo(Math.cos(a) * t * 0.97, Math.sin(a) * t * 0.97),
                    c.lineTo(Math.cos(a) * t * 1.14, Math.sin(a) * t * 1.14),
                    c.stroke());
                }
              }
              if (7 === e) {
                c.fillStyle = "#e0503a";
                for (let e = -3; e <= 3; e++)
                  (c.beginPath(), c.arc(e * t * 0.26, 0.95 * t, 0.13 * t, 0, 7), c.fill());
              }
              (8 === e &&
                ((c.fillStyle = "#7a8aa8"),
                c.beginPath(),
                c.moveTo(0.2 * -t, 0.9 * -t),
                c.lineTo(0, 1.35 * -t),
                c.lineTo(0.2 * t, 0.9 * -t),
                c.fill(),
                c.beginPath(),
                c.moveTo(0.2 * -t, 0.9 * t),
                c.lineTo(0, 1.35 * t),
                c.lineTo(0.2 * t, 0.9 * t),
                c.fill()),
                9 === e &&
                  ((c.fillStyle = "rgba(200,230,255,.85)"),
                  [
                    [-0.2, -1.25, 0.09],
                    [0, -1.4, 0.11],
                    [0.2, -1.25, 0.09],
                  ].forEach((e) => {
                    (c.beginPath(), c.arc(e[0] * t, e[1] * t, e[2] * t, 0, 7), c.fill());
                  })));
            } else {
              if (
                ((0 !== e && 5 !== e) ||
                  ((c.strokeStyle = "#6a4a2a"),
                  (c.lineWidth = 0.09 * t),
                  (c.lineCap = "round"),
                  c.beginPath(),
                  c.moveTo(0, 0.85 * -t),
                  c.quadraticCurveTo(0.1 * t, 1.2 * -t, 0.3 * t, 1.35 * -t),
                  c.stroke(),
                  a(0.3, -1.2, 1.1, 0.45)),
                1 === e)
              )
                for (let e = -2; e <= 2; e++) a(0.18 * e, -0.85, 0.5 * e, 0.42, "#3aa83a");
              if ((3 === e && a(0.15, -0.9, 0.6, 0.38), 4 === e))
                for (let e = 0; e < 4; e++) a(0, -0.9, 1.57 * e + 0.78, 0.32, "#2f6a2a");
              if (7 === e) for (let e = -2; e <= 2; e++) a(0.14 * e, -0.85, 0.35 * e, 0.7, "#3a9a3a");
            }
          }
          if (
            (7 === e &&
              a &&
              ((c.strokeStyle = "rgba(240,205,140,.9)"),
              (c.lineWidth = 0.16 * t),
              c.beginPath(),
              c.ellipse(0, 0, 1.42 * t, 0.4 * t, -0.35, 0, 7),
              c.stroke(),
              (c.strokeStyle = "rgba(255,255,255,.35)"),
              (c.lineWidth = 0.04 * t),
              c.beginPath(),
              c.ellipse(0, 0, 1.42 * t, 0.4 * t, -0.35, 0, 7),
              c.stroke()),
            9 === e && a)
          ) {
            ((c.strokeStyle = "rgba(255,200,90,.7)"), (c.lineWidth = 0.07 * t), (c.lineCap = "round"));
            for (let e = 0; e < 12; e++) {
              const a = (e / 12) * 6.283;
              (c.beginPath(),
                c.moveTo(Math.cos(a) * t * 1.08, Math.sin(a) * t * 1.08),
                c.lineTo(Math.cos(a) * t * 1.3, Math.sin(a) * t * 1.3),
                c.stroke());
            }
          }
          return (D[e] = r);
        })(e.k),
        d = (c.width / (U * q)) * r;
      (V.save(),
        (V.globalAlpha = null == n ? 1 : n),
        V.translate(e.x, e.y),
        V.rotate(e.a),
        V.drawImage(c, -d / 2, -d / 2, d, d),
        V.restore(),
        (V.globalAlpha = null == n ? 1 : n),
        SPO(e),
        ((e) => {
          const t = e.r,
            a = 0.2 * t,
            s = 0.05 * -t;
          ((V.fillStyle = "rgba(32,26,66,.8)"),
            V.beginPath(),
            V.arc(e.x - a, e.y + s, 0.07 * t, 0, 7),
            V.arc(e.x + a, e.y + s, 0.07 * t, 0, 7),
            V.fill(),
            (V.strokeStyle = "rgba(32,26,66,.8)"),
            (V.lineWidth = Math.max(1, 0.05 * t)),
            (V.lineCap = "round"),
            V.beginPath(),
            V.arc(e.x, e.y + 0.1 * t, 0.15 * t, 0.2, Math.PI - 0.2),
            V.stroke());
        })(e, e.k),
        (V.globalAlpha = 1));
    },
    se = (e) => {
      if (!z.isConnected) return;
      requestAnimationFrame(se);
      scrollY && scrollTo(0, 0);
      ((plWd = p.wd ? p.wd * (Math.sin(e / 3100) + 0.6 * Math.sin(e / 1300 + 1)) * 170 : 0),
        (plAt = p.gr
          ? [[c + 58 * Math.cos(e / 2300), d + 58 * Math.sin(e / 2300), 1]]
          : p.g2
            ? [
                [c - 62, d + 10, 0.65],
                [c + 62, d - 10, 0.65],
              ]
            : [[c, d, 1]]),
        (plAg = { x: c + 55 * Math.cos(e / 5200), y: d + 45 * Math.sin(e / 4300) }));
      const t = Math.min(0.033, (e - (P || e)) / 1e3);
      if (
        ((P = e),
        A.forEach((e) => {
          ((e.x += e.vx * t), (e.y += e.vy * t), (e.vy += 300 * t), (e.l -= 1.3 * t));
        }),
        (A = A.filter((e) => e.l > 0)),
        !N && !O)
      ) {
        for (let e = 0; e < 8; e++) te(t / 8);
        PX(t);
        if (!I) {
          (PD &&
            p.tm &&
            plTL > 0 &&
            ((plTL -= t),
            Math.ceil(plTL) !== plLS && ((plLS = Math.ceil(plTL)), Y()),
            plTL <= 0 &&
              ((plTL = 0),
              Y(),
              OV("Temps écoulé", "Il reste du chemin à parcourir.", "plTime", "Plus 20 s · 1 🫧"))),
            p.lim &&
              !O &&
              plDR >= plLM &&
              performance.now() > C + 3800 &&
              OV(
                "Plus de fruits",
                "Il n’en reste plus pour atteindre l’objectif.",
                "plMore",
                "Plus 6 fruits · 1 🫧",
              ));
        }
        if (!I && !O) {
          let e = 0;
          for (const n of v)
            n.age > 1.4 &&
            (a
              ? n.in && Math.hypot(n.x - c, n.y - d) + n.r > ORW(Math.atan2(n.y - d, n.x - c)) - 5
              : s
                ? n.y + n.r > 442
                : n.y - n.r < 118) &&
            Math.hypot(n.vx, n.vy) < 80
              ? ((n.ov += t), n.ov > e && (e = n.ov))
              : (n.ov = 0);
          ((H = e),
            e > 2.2 &&
              (() => {
                O = !0;
                const e = $("#plov");
                if (((e.hidden = !1), h)) {
                  const t = infSave("planetes", M);
                  return (
                    (e.innerHTML = `<div><b>Fin de partie</b><p>Score : ${M} pts${t ? " · nouveau record !" : " · record : " + infBest("planetes") + " pts"}</p><button class="btn" data-a="plRe">Rejouer</button></div>`),
                    void requestAnimationFrame(() => e.classList.add("on"))
                  );
                }
                ((e.innerHTML = `<div><b>Le bocal déborde</b><p>Les ${i} dépassent la ligne.</p><button class="btn" data-a="plCont">Continuer · 1 🫧</button><button class="btn alt" data-a="plRe">Recommencer</button></div>`),
                  requestAnimationFrame(() => e.classList.add("on")));
              })());
        }
      }
      ((e) => {
        const t = U * q;
        (V.setTransform(1, 0, 0, 1, 0, 0),
          V.clearRect(0, 0, z.width, z.height),
          V.setTransform(t, 0, 0, t, 0, 0));
        const n = !O && !I && !N && e >= C;
        if (a) {
          const t = V.createRadialGradient(c, d, 10, c, d, f);
          (t.addColorStop(0, "rgba(255,210,170,.16)"),
            t.addColorStop(1, "rgba(255,255,255,.06)"),
            (V.fillStyle = t),
            V.beginPath(),
            ORP(),
            V.fill(),
            (V.strokeStyle =
              H > 0 ? "rgba(255,110,120," + (0.6 + 0.4 * Math.sin(e / 120)) + ")" : "rgba(210,230,255,.6)"),
            (V.lineWidth = 3),
            V.beginPath(),
            ORP(),
            V.stroke(),
            (V.fillStyle = "rgba(255,230,180,.5)"),
            V.beginPath(),
            V.arc(c, d, 4, 0, 7),
            V.fill());
          const [a, s] = Q(w);
          (n &&
            ((V.strokeStyle = "rgba(255,255,255,.35)"),
            (V.lineWidth = 1.8),
            V.setLineDash([5, 8]),
            V.beginPath(),
            V.moveTo(a, s),
            V.lineTo(c, d),
            V.stroke(),
            V.setLineDash([])),
            O ||
              I ||
              ae(
                {
                  x: a,
                  y: s,
                  r: "m" === wx ? l(2) : l(w),
                  k: w,
                  a: e / 2600,
                  born: 0,
                  age: 2,
                  sp: wx,
                  my: "m" === wx,
                },
                e,
                n ? 1 : 0.35,
              ));
        } else if (s) {
          const t = V.createLinearGradient(0, 32, 0, 472);
          (t.addColorStop(0, "rgba(120,200,255,.22)"),
            t.addColorStop(1, "rgba(40,90,200,.12)"),
            (V.fillStyle = t),
            V.beginPath(),
            JW(),
            V.fill());
          for (let t = 0; t < 9; t++) {
            const a = g + ((53 * t) % 312),
              s = 462 - ((e / 22 + 67 * t) % 410),
              n = 2 + (t % 3);
            ((V.strokeStyle = "rgba(255,255,255,.35)"),
              (V.lineWidth = 1),
              V.beginPath(),
              V.arc(a, s, n, 0, 7),
              V.stroke());
          }
          ((V.strokeStyle = "rgba(210,230,255,.55)"),
            (V.lineWidth = 3),
            (V.lineJoin = "round"),
            V.beginPath(),
            JW(),
            V.stroke(),
            (V.strokeStyle =
              H > 0 ? "rgba(255,110,120," + (0.55 + 0.4 * Math.sin(e / 120)) + ")" : "rgba(255,255,255,.3)"),
            (V.lineWidth = 2),
            V.setLineDash([8, 8]),
            V.beginPath(),
            V.moveTo(g, 442),
            V.lineTo(E, 442),
            V.stroke(),
            V.setLineDash([]));
          const a = Math.max(g + l(w), Math.min(E - l(w), T));
          (n &&
            ((V.strokeStyle = "rgba(255,255,255,.22)"),
            (V.lineWidth = 1.5),
            V.setLineDash([3, 7]),
            V.beginPath(),
            V.moveTo(a, YF() - l(w)),
            V.lineTo(a, 32),
            V.stroke(),
            V.setLineDash([])),
            O ||
              I ||
              ae(
                {
                  x: a,
                  y: YF(),
                  r: "m" === wx ? l(2) : l(w),
                  k: w,
                  a: e / 2600,
                  born: 0,
                  age: 2,
                  sp: wx,
                  my: "m" === wx,
                },
                e,
                n ? 1 : 0.35,
              ));
        } else {
          ((V.fillStyle = "rgba(255,255,255,.045)"),
            V.beginPath(),
            JP(),
            V.fill(),
            (V.strokeStyle = "rgba(210,230,255,.55)"),
            (V.lineWidth = 3),
            (V.lineJoin = "round"),
            V.beginPath(),
            JP(),
            V.stroke(),
            (V.strokeStyle =
              H > 0 ? "rgba(255,110,120," + (0.55 + 0.4 * Math.sin(e / 120)) + ")" : "rgba(255,255,255,.3)"),
            (V.lineWidth = 2),
            V.setLineDash([8, 8]),
            V.beginPath(),
            V.moveTo(g, 118),
            V.lineTo(E, 118),
            V.stroke(),
            V.setLineDash([]));
          const t = Math.max(g + l(w), Math.min(E - l(w), T));
          (n &&
            ((V.strokeStyle = "rgba(255,255,255,.22)"),
            (V.lineWidth = 1.5),
            V.setLineDash([3, 7]),
            V.beginPath(),
            V.moveTo(t, YF() + l(w)),
            V.lineTo(t, 528 + DD),
            V.stroke(),
            V.setLineDash([])),
            O ||
              I ||
              ae(
                {
                  x: t,
                  y: YF(),
                  r: "m" === wx ? l(2) : l(w),
                  k: w,
                  a: e / 2600,
                  born: 0,
                  age: 2,
                  sp: wx,
                  my: "m" === wx,
                },
                e,
                n ? 1 : 0.35,
              ));
        }
        ((V.fillStyle = "rgba(255,255,255,.7)"),
          (V.font = '700 11px "Nunito Sans",sans-serif'),
          (V.textAlign = "center"));
        const o = s ? 514 : 52;
        V.fillText("Ensuite", 318, s ? 552 : 26);
        {
          const t = R;
          (V.save(), V.translate(318, o));
          const a = 0.55;
          (V.scale(a, a),
            V.translate(-318, -o),
            ae(
              {
                x: 318,
                y: o,
                r: "m" === Rx ? l(2) : l(t),
                k: t,
                a: e / 3e3,
                born: 0,
                age: 2,
                sp: Rx,
                my: "m" === Rx,
              },
              e,
            ),
            V.restore());
        }
        (WD(e),
          OD(e),
          V.save(),
          plPL.forEach((q) => {
            const px = q.x,
              py = PY(q),
              cs = Math.cos(q.a),
              sn = Math.sin(q.a);
            ((V.strokeStyle = q.mv ? "#c9a46a" : "#aab6e6"),
              (V.lineWidth = 12),
              (V.lineCap = "round"),
              V.beginPath(),
              V.moveTo(px - cs * q.h, py - sn * q.h),
              V.lineTo(px + cs * q.h, py + sn * q.h),
              V.stroke(),
              q.mv &&
                ((V.fillStyle = "#7a5a3a"),
                V.beginPath(),
                V.moveTo(px - 14, py + 34),
                V.lineTo(px + 14, py + 34),
                V.lineTo(px, py + 4),
                V.fill()));
          }),
          V.restore(),
          plRK.forEach((q) => {
            const py = PY(q),
              gr = V.createRadialGradient(q.x - 6, py - 6, 2, q.x, py, q.r);
            (gr.addColorStop(0, q.star ? "#fffbe0" : q.moon ? "#cfe6ff" : "#e0dcf0"),
              gr.addColorStop(1, q.star ? "#ffd34a" : q.moon ? "#4a78b8" : "#6a6488"),
              (V.fillStyle = gr),
              V.beginPath(),
              V.arc(q.x, py, q.r, 0, 7),
              V.fill(),
              (V.strokeStyle = "rgba(255,255,255,.35)"),
              (V.lineWidth = 1.5),
              V.stroke(),
              q.star &&
                ((V.strokeStyle = "rgba(255,240,180,.7)"),
                (V.lineWidth = 5),
                (V.lineCap = "round"),
                V.beginPath(),
                V.moveTo(q.x, py),
                V.lineTo(q.x - 0.15 * q.vx, py - 0.15 * q.vy),
                V.stroke()));
          }));
        for (const t of v) ae(t, e);
        (S.forEach((t) => {
          const a = (e - t.t) / 450;
          a >= 1 ||
            ((V.strokeStyle = "rgba(255,255,255," + 0.7 * (1 - a) + ")"),
            (V.lineWidth = 3 * (1 - a) + 0.5),
            V.beginPath(),
            V.arc(
              t.x,
              t.y,
              t.r * (1 + 0.8 * ((e) => 1 - Math.pow(1 - Math.min(1, Math.max(0, e)), 3))(a)),
              0,
              7,
            ),
            V.stroke());
        }),
          (S = S.filter((t) => e - t.t < 450)),
          A.forEach((e) => {
            ((V.globalAlpha = Math.max(0, Math.min(1, e.l))),
              (V.fillStyle = e.c),
              V.beginPath(),
              V.arc(e.x, e.y, e.s, 0, 7),
              V.fill());
          }),
          (V.globalAlpha = 1),
          p.nt && NT(e));
      })(e);
    },
    pt = (e) => {
      const t = z.getBoundingClientRect();
      return [(e.clientX - t.left) / U, (e.clientY - t.top) / U];
    },
    ne = (e) => {
      const [s, n] = pt(e);
      if ("mouse" !== e.pointerType && RL) {
        ((T = Math.max(g, Math.min(E, RL.T + s - RL.x))),
          (YM = null),
          a && (k = RL.k + Math.atan2(n - d, s - c) - RL.a));
        return;
      }
      ((T = s), (YM = "mouse" === e.pointerType ? n : null), a && (k = Math.atan2(n - d, s - c)));
    };
  let oe = null;
  const ie = (e) => {
      if (!z.isConnected) return void arretAppui();
      if (e.button > 0 || I || O || N) return;
      const t = e.target;
      (t.closest && t.closest("button,a,input,.top,.ttov,.nav,nav,dialog")) ||
        (e.preventDefault(),
        (oe = e.pointerId),
        "mouse" !== e.pointerType
          ? (() => {
              const [s, n] = pt(e);
              RL = { T: T, k: k, x: s, a: Math.atan2(n - d, s - c) };
            })()
          : ne(e));
    },
    re = (e) => {
      if (!z.isConnected) return void arretSuivi();
      (oe === e.pointerId || "mouse" === e.pointerType) && ne(e);
    },
    le = (e) => {
      if (!z.isConnected || oe !== e.pointerId) return;
      (ne(e), (oe = null), (RL = null));
      const t = performance.now();
      !I && !O && !N && t >= C && X(t);
    };
  // Contrôles via Input : toucher (document, en capture), glisser/survoler et lacher (document).
  const arretAppui = Input.sur("toucher", (q, { evt: e }) => ie(e), { cible: document, capture: !0 }),
    arretSuivi = Input.sur(
      ["glisser", "survoler", "lacher"],
      (q, { evt: e }) => ("lacher" === q ? le : re)(e),
      {
        cible: document,
      },
    );
  // Clavier via Input : gauche/droite déplacent, sauter/valider/descendre (Espace, Entrée, flèche bas) lâchent.
  const ce = (q, { evt: e }) => {
    if (!z.isConnected) return void arretClavier();
    const t = performance.now();
    "bougerGauche" === q
      ? ((T = Math.max(g, T - 14)), (k -= 0.12), e.preventDefault())
      : "bougerDroite" === q
        ? ((T = Math.min(E, T + 14)), (k += 0.12), e.preventDefault())
        : I || O || N || !(t >= C) || (e.preventDefault(), X(t));
  };
  const arretClavier = Input.sur(["bougerGauche", "bougerDroite", "sauter", "valider", "descendre"], ce, {
    sources: ["clavier"],
  });
  const de = () => {
    z.isConnected ? Z() : removeEventListener("resize", de);
  };
  (addEventListener("resize", de),
    (window.__PLDBG = {
      OR: a,
      ps: () => v,
      made: () => L,
      L: p,
      win: () => {
        ((L[p.T || 0] = 99), (M = 1e5), J());
      },
    }),
    Z(),
    ee(),
    requestAnimationFrame(se));
}
