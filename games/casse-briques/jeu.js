// Casse-briques (id « brick ») : couleurs BKC, niveaux BKN/BKT/BKS/BKH, génération bkGen / bkLv et le jeu pBrick(r).
const BKC = ["#ff9fb2", "#ffb991", "#ffdc8f", "#b3e8a6", "#93d8f5", "#a3b6ff", "#c8adff"];
const BKN = 50;
const BKT = [
  ["", BKC, ""],
  [
    "Forêt",
    ["#9be28a", "#6fcf8f", "#c9e58a", "#4fb88a", "#8fd6a8", "#d4e88a", "#5fc2a0"],
    "linear-gradient(#0c2a22,#123c2f)",
  ],
  [
    "Désert",
    ["#ffd08a", "#ffb26a", "#f2a07a", "#ffe0a0", "#e8a86a", "#ffc58a", "#f5b08a"],
    "linear-gradient(#3a1d10,#5a2f16)",
  ],
  [
    "Océan",
    ["#6fd3ff", "#5fb8f0", "#7fe8e0", "#4fa0e8", "#8fd0ff", "#5fe0c8", "#6fa8ff"],
    "linear-gradient(#06284a,#0a4a7a)",
  ],
  [
    "Crépuscule",
    ["#ff9fb2", "#ffb08a", "#ff8fd0", "#d89aff", "#ffc08a", "#ff9ac8", "#c8a0ff"],
    "linear-gradient(#2a1040,#5a2a62)",
  ],
  [
    "Bonbons",
    ["#ff7fb2", "#7fd8ff", "#ffe27a", "#9fffb2", "#d09fff", "#ffb27a", "#7fffe0"],
    "linear-gradient(#2a1a4a,#3a2a66)",
  ],
  [
    "Volcan",
    ["#ff8a5a", "#ffb05a", "#ff6a6a", "#ffd06a", "#ff9a7a", "#e8705a", "#ffc27a"],
    "linear-gradient(#2a0c0c,#4a1410)",
  ],
  [
    "Cosmos",
    ["#a3b6ff", "#c8a0ff", "#7fd8ff", "#ff9fe0", "#9fffe0", "#ffe27a", "#b0a0ff"],
    "linear-gradient(#05051a,#14123a)",
  ],
];
const BKS = ["multi", "ice", "move", "bomb", "cry", "down"];
const BKH = [
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
function bkGen(e) {
  const R = rng(104729 * e + 977),
    k = e - 50,
    ri = (n) => (R() * n) | 0,
    d = Math.min(1, k / 150);
  let rows = Math.min(9, 5 + ri(3) + Math.round(2 * d));
  const SPL = ["multi", "ice", "move", "bomb", "cry", "down", "wind", "fog", "small", "fast", "rain"],
    sp = k % 3 == 2 ? SPL[ri(SPL.length)] : "";
  sp === "cry" && (rows = Math.max(6, rows));
  const fam = ri(10),
    sym = R() < 0.75,
    a1 = R(),
    a2 = R(),
    a3 = 6.28 * R(),
    a4 = 1 + ri(3);
  let M = [],
    T = [],
    tr = 0;
  const cell = (r, c) => {
    const nx = (c - 4.5) / 4.5,
      ny = rows > 1 ? (r / (rows - 1)) * 2 - 1 : 0;
    switch (fam) {
      case 0:
        return R() < 0.6 + 0.25 * a1;
      case 1:
        return Math.floor((Math.abs(nx) + Math.abs(ny)) * (1.5 + a4)) % 2 == 0;
      case 2:
        return Math.abs(ny - 0.7 * Math.sin(nx * (1.5 + a4) + a3)) < 0.4 + 0.35 * a1;
      case 3:
        return (r + a4) % (a4 + 1) != 0 && R() < 0.94;
      case 4:
        return (Math.floor(c / (1 + (a4 > 1))) + Math.floor(r / (1 + (a1 > 0.5)))) % 2 == 0;
      case 5: {
        const q = a2 > 0.5 ? r + 1 : rows - r;
        return Math.abs(nx) <= (q / rows) * (0.55 + 0.5 * a1) + 0.12;
      }
      case 6:
        return c % (a4 + 1) == 0 || 9 - c == 0 || r == 0 || (r == rows - 1 && a1 > 0.5);
      case 7:
        return (
          c == 0 ||
          c == 9 ||
          r == 0 ||
          r == rows - 1 ||
          (Math.abs(nx) < 0.15 + 0.35 * a1 && Math.abs(ny) < 0.45)
        );
      case 8: {
        const q = nx * nx + ny * ny * 1.2;
        return q < 0.55 + 0.45 * a1 && q > (a2 > 0.5 ? 0.18 : -1);
      }
      default:
        return (c + r * a4) % (a4 + 2) < 2;
    }
  };
  for (; tr < 9; tr++) {
    M = [];
    let n = 0;
    for (let r = 0; r < rows; r++) {
      M[r] = [];
      for (let c = 0; c < 10; c++) {
        if (sym && c > 4) {
          M[r][c] = M[r][9 - c];
          n += M[r][c];
          continue;
        }
        let v = cell(r, c) ? 1 : 0;
        R() < 0.07 && (v = 0);
        R() < 0.03 && (v = 1);
        M[r][c] = v;
        n += v;
      }
    }
    if (n >= 16 && n <= 84) break;
  }
  const tp = [
    ["gift", 0.03 + 0.03 * d],
    ["zap", k > 3 ? 0.035 : 0],
    ["reg", sp ? 0.03 : 0.05 + 0.06 * d],
    ["bomb", k > 8 && !sp ? 0.03 : 0],
    ["ice", k > 12 ? 0.03 : 0],
  ];
  for (let r = 0; r < rows; r++) {
    T[r] = [];
    for (let c = 0; c < 10; c++) {
      if (sym && c > 4) {
        T[r][c] = T[r][9 - c];
        continue;
      }
      let p = R(),
        y = "n";
      for (const [q, w] of tp) {
        if (p < w) {
          y = q;
          break;
        }
        p -= w;
      }
      T[r][c] = M[r][c] ? y : "n";
    }
  }
  const has = (q) => T.some((r) => r.includes(q)),
    tips = {
      multi: "Trois balles partent ensemble.",
      ice: "Rangée de glace : contourne-la.",
      move: "Les rangées glissent doucement.",
      bomb: "Briques bombes : elles cassent leurs voisines.",
      cry: "Libère seulement les cristaux.",
      down: "Le mur descend tous les 6 rebonds.",
      wind: "Vent : la balle dévie doucement.",
      fog: "Brouillard : les briques ne se voient que près de la balle.",
      small: "Raquette étroite : vise bien.",
      fast: "Balle rapide.",
      rain: "Pluie de bonus : des bonus tombent tout seuls.",
    },
    tx = [
      sp && tips[sp],
      has("gift") && "Cadeau : un bonus assuré.",
      has("zap") && "Éclair : casse toute sa rangée.",
      has("reg") && "Brique verte : elle repousse si tu tardes.",
    ].filter(Boolean);
  return {
    f: k % 50,
    sp: sp,
    R: rng(7919 * (e + 11) + 3),
    rows: rows,
    pat: "g",
    M: M,
    T: T,
    h2: Math.min(0.45, 0.2 + 0.25 * d),
    h3: Math.min(0.26, 0.04 + 0.22 * d),
    v: 330 * (1.1 + 0.14 * d) * ("fast" === sp ? 1.25 : 1),
    tip: tx.slice(0, 2).join(" "),
  };
}
function bkLv(e) {
  if (e >= 50) return bkGen(e);
  const t = e % 50,
    a = Math.floor(e / 50);
  return {
    f: t,
    sp: t % 4 == 3 ? BKS[((t - 3) / 4) % BKS.length] : "",
    R: rng(7919 * (e + 11) + 3),
    rows: 0 === e ? 2 : t < 35 ? Math.min(9, 4 + Math.floor(t / 7)) : +"999999999999988"[t - 35],
    pat:
      t < 3 ? t : t < 35 ? (t + 3 * Math.floor(t / 7) + 2 * a) % 9 : (+"813570246867572"[t - 35] + 2 * a) % 9,
    h2: Math.min(0.42, 0.011 * t),
    h3: t > 24 ? Math.min(0.22, 0.012 * (t - 24)) : 0,
    v: 330 * (1 + Math.min(0.22, 0.005 * t) + 0.05 * a),
  };
}
function pBrick(e) {
  const t = bkLv(lv),
    a = 360,
    s = 600,
    n = 29.1,
    o = 6.5,
    i =
      lv >= 50
        ? "mwnsfbd+"
        : lv >= 42
          ? "mwnsfb"
          : lv >= 36
            ? "mwnsf"
            : lv >= 24
              ? "mwns"
              : lv >= 14
                ? "mwn"
                : lv >= 7
                  ? "mw"
                  : lv >= 2
                    ? "m"
                    : "";
  let FZ = 0,
    LZ = 0,
    XZ = 0,
    DZ = 0,
    SG = "",
    SP = t.sp,
    TH = BKT[lv < 4 ? 0 : 1 + (Math.floor((lv - 4) / 4) % (BKT.length - 1))],
    LT = 0,
    SH = [],
    r = null,
    l = [],
    c = [],
    d = [],
    f = [],
    u = [],
    h = "aim",
    p = 0,
    m = !1,
    b = 1,
    g = 0,
    E = 0,
    y = !1,
    v = !1,
    A = !1,
    S = !1,
    x = 180,
    M = 180,
    L = 84,
    T = 84,
    k = 0,
    w = 0,
    R = 0,
    C = 0,
    O = 0,
    I = 0,
    N = 0,
    P = 1,
    U = Math.min(2, devicePixelRatio || 1),
    q = 0,
    D = performance.now();
  snap = () => ({});
  const H = t.R,
    G = (e, t, a, s) => {
      const n = a - 4.5,
        o = t / (s - 1 || 1);
      switch (e) {
        case 0:
          return 1;
        case 1:
          return Math.abs(n) <= 0.62 * (s - t) + 0.6;
        case 2:
          return (a + t) % 2 == 0;
        case 3:
          return Math.abs(n) / 5 + 1.6 * Math.abs(o - 0.5) <= 1.05;
        case 4:
          return t < BKH.length && BKH[t][a];
        case 5:
          return t % 2 == 0 || a % 3 != 1;
        case 6:
          return a < 2 || a > 7 || t < 2;
        case 7:
          return a < 4 || a > 5 || t % 2 == 1;
        default:
          return H() < 0.78;
      }
    },
    F = () => {
      ((l = []), (d = []), (f = []), (FZ = LZ = XZ = DZ = 0), (SH = []));
      const Q = rng(5381 * lv + 11),
        YO =
          lv >= 3 && "down" !== t.sp && Q() < 0.7
            ? Math.min(
                Math.max(0, 380 - (34 + 22 * (t.M ? t.M.length : t.rows) + 17)),
                [-18, -18, 40, 70, 100, 130, 160, 200][(Q() * 8) | 0],
              )
            : 0;
      SG = "";
      const e = t.M ? t.M.length : "cry" === t.sp ? Math.max(6, t.rows) : t.rows + ("multi" === t.sp ? 1 : 0),
        a = [];
      for (let t = 0; t < e; t++) {
        a[t] = [];
        for (let e = 0; e < 5; e++) a[t][e] = H();
      }
      for (let s = 0; s < e; s++)
        for (let o = 0; o < 10; o++) {
          if (!(t.M ? t.M[s][o] : G(t.pat, s, o, e))) continue;
          const i = a[s][o < 5 ? o : 9 - o];
          let r = i < t.h3 ? 3 : i < t.h3 + t.h2 ? 2 : 1,
            c = "n";
          ("ice" === t.sp && s === e - 2 && o % 3 != 1 && (c = "ice"),
            "bomb" === t.sp && H() < 0.16 && (c = "bomb"),
            t.T && "n" !== t.T[s][o] && (c = t.T[s][o]),
            "reg" === c && (r = Math.max(2, r)),
            ("zap" === c || "gift" === c) && (r = 1),
            l.push({
              x0: 12 + 34.1 * o,
              y0: 34 + 22 * s + YO,
              x: 0,
              y: 0,
              w: n,
              h: 17,
              c: TH[1][(s + Math.floor(t.f / 3)) % TH[1].length],
              hp: r,
              max: r,
              t: c,
              row: s,
              col: o,
              a: 1,
              hitT: -1e4,
              dead: 0,
            }));
        }
      const SGS = lv >= 8 && !t.sp && Q() < 0.4 ? (Q() * 4) | 0 : -1;
      if (SGS >= 0) {
        const bot = l.reduce((m, e) => Math.max(m, e.y0 + e.h), 0),
          ic = (o, y) =>
            l.push({
              x0: 12 + 34.1 * o,
              y0: y,
              x: 0,
              y: 0,
              w: n,
              h: 17,
              c: "#c9d8ea",
              hp: 1,
              max: 1,
              t: "ice",
              row: 30,
              col: o,
              a: 1,
              hitT: -1e4,
              dead: 0,
            }),
          nb = (o, y, hp) =>
            l.push({
              x0: 12 + 34.1 * o,
              y0: y,
              x: 0,
              y: 0,
              w: n,
              h: 17,
              c: TH[1][(o + ((y / 22) | 0)) % TH[1].length],
              hp: hp || 1,
              max: hp || 1,
              t: "n",
              row: (y / 22) | 0,
              col: o,
              a: 1,
              hitT: -1e4,
              dead: 0,
            });
        if (SGS === 0) {
          SG = "Slalom : passe par les ouvertures.";
          const g = Q() < 0.5;
          for (let o = 0; o < 10; o++) {
            (g ? o > 1 : o < 8) && ic(o, bot + 36);
            (g ? o < 8 : o > 1) && ic(o, bot + 80);
          }
        } else if (SGS === 1) {
          SG = "Forteresse : trouve l’entrée.";
          l = l.filter((e) => e.col > 0 && e.col < 9);
          [...new Set(l.map((e) => e.y0))].forEach((y) => {
            ic(0, y);
            ic(9, y);
          });
          const g0 = (1 + Q() * 6) | 0;
          for (let o = 0; o < 10; o++) o !== g0 && o !== g0 + 1 && ic(o, bot + 22);
        } else if (SGS === 2) {
          SG = "Îlots : vise bien, les briques sont isolées.";
          l = [];
          const used = new Set();
          for (let i = 0; i < 8; i++) {
            const cx = (Q() * 8) | 0,
              r = (Q() * 13) | 0,
              w = 2 + ((Q() * 2) | 0);
            for (let o = cx; o < Math.min(10, cx + w); o++) {
              const k = o + "," + r;
              used.has(k) || (used.add(k), nb(o, 34 + YO * 0 + 22 * r, Q() < 0.25 ? 2 : 1));
            }
          }
        } else {
          SG = "Colonnes : passe derrière les piliers.";
          l = [];
          const hh = 5 + ((Q() * 4) | 0);
          [0, 3, 6, 9].forEach((o) => {
            for (let r = 0; r < hh; r++)
              nb(o, 34 + 22 * r + Math.max(0, YO), r === 0 && Q() < 0.4 ? 1 : Q() < 0.2 ? 2 : 1);
          });
        }
      }
      if (SGS < 0 && lv >= 6 && "down" !== t.sp && "cry" !== t.sp && Q() < 0.45) {
        const ly = Math.max(250, 34 + 22 * l.reduce((m, e) => Math.max(m, e.row), 0) + YO + 60),
          pt = (Q() * 3) | 0,
          ic = Q() < 0.35;
        for (let r = 0; r < (Q() < 0.5 ? 1 : 2); r++)
          for (let o = 0; o < 10; o++) {
            if (pt === 0 ? o % 3 == 1 : pt === 1 ? o < 2 || o > 7 : o % 2 == 0) continue;
            l.push({
              x0: 12 + 34.1 * o,
              y0: ly + 22 * r,
              x: 0,
              y: 0,
              w: n,
              h: 17,
              c: TH[1][(o + r) % TH[1].length],
              hp: 1,
              max: 1,
              t: ic && r === 0 && (o === 0 || o === 9) ? "ice" : "n",
              row: 20 + r,
              col: o,
              a: 1,
              hitT: -1e4,
              dead: 0,
            });
          }
      }
      if ("cry" === t.sp) {
        const e = l.filter((e) => "n" === e.t);
        for (let a = 0; a < Math.min(5, 3 + Math.floor(t.f / 16)); a++) {
          const t = e.splice((H() * e.length) | 0, 1)[0];
          t && ((t.t = "cry"), (t.hp = t.max = 2));
        }
      }
      ("move" === t.sp &&
        l.forEach((e) => {
          ((e.w = 22.698), (e.x0 += 3.201));
        }),
        (q = l.filter((e) => "ice" !== e.t).length),
        (b = 1),
        (g = 0),
        (v = !1),
        (A = !1),
        (S = !1),
        (k = w = 0),
        (T = L = 84),
        (C = 0),
        (O = 0),
        B(),
        K(performance.now()),
        X());
    },
    B = () => {
      ((c = [{ x: x, y: 522.5, vx: 0, vy: 0, tr: [] }]), (h = "aim"), (m = !1), (E = 0));
    };
  frame(
    '<div class="bkh"><div class="bklv" id="bklv"></div><div class="ttmid"><div class="ttbar"><i id="bkbr"></i></div><div class="tts"><span id="bksc">0</span> pts</div></div>\n  <button class="bkpz" data-a="bkPause" aria-label="Pause"><svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg></button></div>\n  <div class="ttw bkw" id="bkw"><canvas id="bkcv" class="ttcv"></canvas><div class="ttpop" id="bkpop"></div><div class="ttov" id="bkov" hidden></div></div>',
    1,
  );
  const z = $("#bkcv"),
    V = z.getContext("2d"),
    j = $("#bkw"),
    Z = () => {
      const e = Math.min(j.parentElement.clientWidth || 340, 460) - 8,
        t = Math.max(380, innerHeight - 160);
      ((P = Math.min(e / a, t / s)),
        (z.width = Math.round(a * P * U)),
        (z.height = Math.round(s * P * U)),
        (z.style.width = a * P + "px"),
        (z.style.height = s * P + "px"),
        (Y = {}));
    };
  let Y = {};
  const W = (e) => {
      const t = e.c + e.t + e.hp + "|" + e.w;
      if (Y[t]) return Y[t];
      const a = P * U,
        s = document.createElement("canvas"),
        n = Math.ceil(e.w * a) + 4,
        o = Math.ceil(e.h * a) + 4;
      ((s.width = n), (s.height = o));
      const i = s.getContext("2d"),
        r = e.h * a * 0.36,
        l =
          "ice" === e.t
            ? "#c9d8ea"
            : "bomb" === e.t
              ? "#ff8f7a"
              : "cry" === e.t
                ? "#f6d7ff"
                : "gift" === e.t
                  ? "#ffd36a"
                  : "zap" === e.t
                    ? "#9fe8ff"
                    : "reg" === e.t
                      ? "#9ff0c8"
                      : e.c;
      i.translate(2, 2);
      const cw = e.w * a,
        ch = e.h * a;
      if (
        ((i.fillStyle = l),
        (i.globalAlpha = "ice" === e.t ? 0.2 : 0.5),
        i.beginPath(),
        i.roundRect(a, a, cw - 2 * a, ch - 2 * a, 4.5 * a),
        i.fill(),
        (i.globalAlpha = 1),
        (i.strokeStyle = l),
        (i.lineWidth = 1.7 * a),
        (i.shadowColor = l),
        (i.shadowBlur = 3 * a),
        i.beginPath(),
        i.roundRect(1.5 * a, 1.5 * a, cw - 3 * a, ch - 3 * a, 4 * a),
        i.stroke(),
        (i.shadowBlur = 0),
        (i.fillStyle = "rgba(255,255,255,.8)"),
        i.fillRect(3.4 * a, 3.2 * a, 0.2 * cw, 1.2 * a),
        e.hp > 1)
      ) {
        i.fillStyle = "rgba(255,255,255,.6)";
        for (let t = 0; t < e.hp - 1; t++)
          (i.beginPath(),
            i.arc(e.w * a * (0.5 + 0.16 * (t - (e.hp - 2) / 2)), e.h * a * 0.6, e.h * a * 0.11, 0, 7),
            i.fill());
      }
      if (
        ("ice" === e.t &&
          ((i.strokeStyle = "rgba(255,255,255,.7)"),
          (i.lineWidth = a),
          i.beginPath(),
          i.moveTo(e.w * a * 0.2, e.h * a * 0.8),
          i.lineTo(e.w * a * 0.4, e.h * a * 0.25),
          i.moveTo(e.w * a * 0.55, e.h * a * 0.85),
          i.lineTo(e.w * a * 0.75, e.h * a * 0.3),
          i.stroke()),
        "bomb" === e.t &&
          ((i.fillStyle = "#fff"),
          i.beginPath(),
          i.arc((e.w * a) / 2, e.h * a * 0.55, e.h * a * 0.2, 0, 7),
          i.fill(),
          (i.fillStyle = "#ff8f7a"),
          i.beginPath(),
          i.arc((e.w * a) / 2, e.h * a * 0.55, e.h * a * 0.1, 0, 7),
          i.fill()),
        "cry" === e.t)
      ) {
        const t = (e.w * a) / 2,
          s = e.h * a * 0.55;
        ((i.fillStyle = "#fff"), (i.shadowColor = "#ffe38a"), (i.shadowBlur = e.h * a * 0.4), i.beginPath());
        for (let n = 0; n < 8; n++) {
          const o = (n * Math.PI) / 4,
            r = n % 2 ? e.h * a * 0.1 : e.h * a * 0.32;
          i.lineTo(t + Math.cos(o) * r, s + Math.sin(o) * r);
        }
        (i.closePath(), i.fill());
      }
      if (
        ("gift" === e.t &&
          ((i.fillStyle = "rgba(255,255,255,.85)"),
          i.fillRect(e.w * a * 0.46, 2 * a, e.w * a * 0.08, e.h * a - 4 * a),
          i.fillRect(2 * a, e.h * a * 0.44, e.w * a - 4 * a, e.h * a * 0.12)),
        "zap" === e.t &&
          ((i.strokeStyle = "#fff"),
          (i.lineWidth = 1.4 * a),
          i.beginPath(),
          i.moveTo(e.w * a * 0.56, e.h * a * 0.16),
          i.lineTo(e.w * a * 0.42, e.h * a * 0.55),
          i.lineTo(e.w * a * 0.58, e.h * a * 0.5),
          i.lineTo(e.w * a * 0.44, e.h * a * 0.86),
          i.stroke()),
        "reg" === e.t)
      ) {
        ((i.strokeStyle = "rgba(255,255,255,.75)"),
          (i.lineWidth = 1.2 * a),
          i.beginPath(),
          i.arc(e.w * a * 0.2, e.h * a * 0.5, e.h * a * 0.2, 0.6, 5.6),
          i.stroke());
      }
      return (Y[t] = s);
    },
    K = (e) => {
      const a = (e - D) / 1e3;
      (l.forEach((e) => {
        ((e.x =
          e.x0 +
          ("move" === t.sp && e.row % 2 == 0
            ? Math.sin(0.9 * a + e.row) * n * 0.11 * 1.9
            : "move" === t.sp
              ? -Math.sin(0.9 * a + e.row) * n * 0.11 * 1.9
              : 0)),
          (e.y = e.y0 + O));
      }),
        l.forEach((b) => {
          "reg" !== b.t ||
            b.dead ||
            b.hp >= b.max ||
            e - b.hitT < 4200 ||
            ((b.hp = b.max), (b.hitT = e), _(b.x + b.w / 2, b.y + b.h / 2, "#9ff0c8", 6, 40));
        }));
    },
    Q = () =>
      "cry" === t.sp
        ? l.filter((e) => !e.dead && "cry" === e.t).length
        : l.filter((e) => !e.dead && "ice" !== e.t).length,
    X = () => {
      const e = "cry" === t.sp ? l.filter((e) => "cry" === e.t).length : q,
        a = Q();
      (($("#bkbr").style.width = (e ? (100 * (e - a)) / e : 0) + "%"),
        ($("#bksc").textContent = g),
        ($("#bklv").innerHTML = [0, 1, 2].map((e) => `<i class="${e < b ? "on" : ""}"></i>`).join("")));
    },
    J = (e, t) => {
      const a = $("#bkpop");
      ((a.textContent = e),
        (a.className = "ttpop"),
        a.offsetWidth,
        (a.className = "ttpop on" + (t ? " big" : "")));
    },
    _ = (e, t, a, s, n) => {
      for (let o = 0; o < s; o++) {
        const s = 7 * Math.random(),
          o = (n || 90) * (0.4 + Math.random());
        f.push({
          x: e,
          y: t,
          vx: Math.cos(s) * o,
          vy: Math.sin(s) * o - 30,
          l: 1,
          c: a,
          s: 1.2 + 2.2 * Math.random(),
        });
      }
    },
    ee = (e, t, a, s) => {
      ((e.hitT = t),
        "ice" !== e.t
          ? ((e.hp -= a),
            e.hp <= 0
              ? ((e, t, a) => {
                  e.dead ||
                    ((e.dead = t),
                    E++,
                    (g += (DZ > 0 ? 2 : 1) * (10 * e.max + (E > 2 ? 2 * E : 0))),
                    _(
                      e.x + e.w / 2,
                      e.y + e.h / 2,
                      "cry" === e.t ? "#ffe38a" : "bomb" === e.t ? "#ff8f7a" : e.c,
                      "cry" === e.t ? 22 : 12,
                      "cry" === e.t ? 150 : 90,
                    ),
                    sfx(520 + 35 * Math.min(12, E), 0.05),
                    "cry" === e.t && J("Cristal libéré !", 1),
                    "gift" === e.t
                      ? d.push({ x: e.x + e.w / 2, y: e.y + e.h / 2, k: "mwnsfbd+"[(8 * Math.random()) | 0] })
                      : !a &&
                        "cry" !== e.t &&
                        i &&
                        Math.random() < 0.1 &&
                        d.push({ x: e.x + e.w / 2, y: e.y + e.h / 2, k: i[(Math.random() * i.length) | 0] }),
                    "bomb" === e.t &&
                      (j.classList.remove("bump"),
                      j.offsetWidth,
                      j.classList.add("bump"),
                      vib(15),
                      u.push({ x: e.x + e.w / 2, y: e.y + e.h / 2, t: t }),
                      setTimeout(
                        () =>
                          l.forEach((t) => {
                            !t.dead &&
                              "ice" !== t.t &&
                              Math.abs(t.row - e.row) <= 1 &&
                              Math.abs(t.col - e.col) <= 1 &&
                              ee(t, performance.now(), 1, !0);
                          }),
                        90,
                      )),
                    "zap" === e.t &&
                      (u.push({ x: e.x, y: e.y + e.h / 2, t: t, z: 1 }),
                      sfx(980, 0.05),
                      setTimeout(
                        () =>
                          l.forEach((t) => {
                            !t.dead && "ice" !== t.t && t.row === e.row && ee(t, performance.now(), 1, !0);
                          }),
                        90,
                      )),
                    E >= 5 && E % 5 == 0 && J("Enchaînement ×" + E));
                })(e, t, s)
              : sfx(440, 0.04),
            X(),
            te())
          : sfx(300, 0.03));
    },
    te = () => {
      if (!A && 0 === Q()) {
        ((A = !0), (h = "win"));
        const e = performance.now();
        (l.forEach((t) => {
          t.dead || "ice" === t.t || (t.dead = e);
        }),
          c.forEach((e) => _(e.x, e.y, "#ffffff", 18, 140)),
          J("Bravo !", 1),
          setTimeout(win, 1700));
      }
    },
    ae = () => {
      v = !0;
      const e = $("#bkov");
      ((e.hidden = !1),
        (e.innerHTML = `<div><b>La balle s’est envolée</b><p>Il reste ${Q()} brique${Q() > 1 ? "s" : ""}.</p><button class="btn" data-a="bkCont">Continuer · 1 🫧</button><button class="btn alt" data-a="bkRe">Recommencer</button></div>`),
        requestAnimationFrame(() => e.classList.add("on")));
    },
    se = () => {
      const e = $("#bkov");
      (e.classList.remove("on"), (e.hidden = !0));
    };
  ((act.bkCont = () => {
    v && spend(1) && (se(), (v = !1), (b = 1), B(), X());
  }),
    (act.bkRe = () => {
      (se(), (r = null), F());
    }),
    (act.bkPause = () => {
      if (A || v) return;
      y = !y;
      const e = $("#bkov");
      y
        ? ((e.hidden = !1),
          (e.innerHTML =
            '<div><b>Pause</b><p>La balle attend.</p><button class="btn" data-a="bkPause">Reprendre</button></div>'),
          requestAnimationFrame(() => e.classList.add("on")))
        : se();
    }),
    (act.hint = () => {
      A || v || S || (spend(1) && ((S = !0), msg("Un filet de neige protège le sol pour un rebond.")));
    }));
  const ne = () => {
    const e = t.v,
      a = p,
      s = (t) => ({ x: x, y: 522.5, vx: e * Math.sin(a + t), vy: -e * Math.cos(a + t), tr: [] });
    ((c = "multi" === t.sp ? [s(-0.22), s(0), s(0.22)] : [s(0)]), (h = "play"), sfx(620, 0.06), vib(6));
  };
  // Contrôles via la couche Input (shared/input) : toucher / glisser / lâcher pour viser et déplacer la plateforme,
  // flèches (bougerGauche / bougerDroite), Espace (sauter) pour lancer, P ou Échap (pause).
  let oe = null;
  const ie = (e) => {
      const t = z.getBoundingClientRect();
      return [(e.clientX - t.left) / P, (e.clientY - t.top) / P];
    },
    re = (e) => {
      if (!z.isConnected) return void arretPointeur();
      if (e.button > 0 || A || v || y) return;
      const t = e.target;
      if (t.closest && t.closest("button,a,input,.top,.ttov,.nav,nav,dialog")) return;
      e.preventDefault();
      const [a] = ie(e);
      ((oe = { id: e.pointerId, x: a, p: M }), "aim" === h && ((m = !0), (p = 0)));
    },
    le = (e) => {
      if (!z.isConnected) return void arretPointeur();
      if (!oe || e.pointerId !== oe.id) return;
      const [t] = ie(e),
        s = t - oe.x;
      "aim" === h && m
        ? (p = 1.15 * Math.max(-1, Math.min(1, s / 130)))
        : "play" === h && (M = Math.max(L / 2, Math.min(a - L / 2, oe.p + 1.15 * s)));
    },
    ce = (e) => {
      z.isConnected &&
        oe &&
        e.pointerId === oe.id &&
        ((oe = null), "aim" !== h || !m || y || v || ((m = !1), ne()));
    },
    arretAppui = Input.sur("toucher", (_, i) => re(i.evt), { cible: document, capture: !0 }),
    arretSuivi = Input.sur(["glisser", "survoler", "lacher"], (x, i) => ("lacher" === x ? ce : le)(i.evt), {
      cible: document,
    }),
    arretPointeur = () => (arretAppui(), arretSuivi());
  const de = {},
    fe = (x, i) => {
      const e = i.evt;
      if (!z.isConnected) return void arretClavier();
      if ("relache" === i.phase) return void delete de[e.key];
      "bougerGauche" === x || "bougerDroite" === x
        ? ((de[e.key] = 1),
          e.preventDefault(),
          "aim" === h && (p = Math.max(-1.15, Math.min(1.15, p + ("bougerGauche" === x ? -0.12 : 0.12)))))
        : "sauter" === x
          ? (e.preventDefault(), "aim" !== h || y || v || ne())
          : act.bkPause();
    },
    arretClavier = Input.sur(["bougerGauche", "bougerDroite", "sauter", "pause"], fe, {
      touches: { p: "pause", Escape: "pause" },
      relache: !0,
    });
  const he = (e) => 1 - Math.pow(1 - Math.min(1, Math.max(0, e)), 3),
    pe = (e) => {
      if (!z.isConnected) return;
      requestAnimationFrame(pe);
      const n = Math.min(0.033, (e - (N || e)) / 1e3);
      ((N = e),
        f.forEach((e) => {
          ((e.x += e.vx * n), (e.y += e.vy * n), (e.vy += 260 * n), (e.l -= 1.4 * n));
        }),
        (f = f.filter((e) => e.l > 0)),
        y ||
          v ||
          (K(e),
          de.ArrowLeft && "play" === h && (M = Math.max(L / 2, M - 360 * n)),
          de.ArrowRight && "play" === h && (M = Math.min(a - L / 2, M + 360 * n)),
          (k = Math.max(0, k - n)),
          (w = Math.max(0, w - n)),
          (FZ = Math.max(0, FZ - n)),
          (LZ = Math.max(0, LZ - n)),
          (XZ = Math.max(0, XZ - n)),
          (DZ = Math.max(0, DZ - n)),
          "rain" === SP &&
            "play" === h &&
            Math.random() < 0.5 * n &&
            d.push({ x: 30 + 300 * Math.random(), y: 0, k: "mwnsfbd+"[(8 * Math.random()) | 0] }),
          LZ > 0 &&
            "play" === h &&
            (LT -= n) <= 0 &&
            ((LT = 0.45),
            SH.push({ x: x - L / 2 + 8, y: 528 }, { x: x + L / 2 - 8, y: 528 }),
            sfx(900, 0.02)),
          (SH = SH.filter((s) => {
            if (((s.y -= 520 * n), s.y < 0)) return !1;
            for (const b of l)
              if (!b.dead && s.x > b.x && s.x < b.x + b.w && s.y > b.y && s.y < b.y + b.h)
                return (ee(b, e, 1), !1);
            return !0;
          })),
          (T = k > 0 ? 126 : "small" === SP ? 56 : 84),
          (L += (T - L) * Math.min(1, 8 * n)),
          (M = Math.max(L / 2, Math.min(a - L / 2, M))),
          (x += (M - x) * Math.min(1, 22 * n)),
          "aim" === h && c[0] && ((c[0].x = x), (c[0].y = 522.5)),
          "play" === h &&
            ((c = c.filter(
              (a) => (
                a.tr.push([a.x, a.y]),
                a.tr.length > 9 && a.tr.shift(),
                ((e, a, n) => {
                  const i = Math.hypot(e.vx, e.vy) * (w > 0 ? 0.7 : 1),
                    d = Math.max(1, Math.ceil((i * a) / 3.9)),
                    u = a / d,
                    h = w > 0 ? 0.7 : 1;
                  for (let a = 0; a < d; a++) {
                    if ("wind" === t.sp) {
                      const q = Math.sin(n / 2600) * 0.45 * u,
                        c1 = Math.cos(q),
                        s1 = Math.sin(q),
                        x1 = e.vx;
                      ((e.vx = x1 * c1 - e.vy * s1), (e.vy = x1 * s1 + e.vy * c1));
                    }
                    if (
                      ((e.x += e.vx * u * h),
                      (e.y += e.vy * u * h),
                      e.x < o && ((e.x = o), (e.vx = Math.abs(e.vx)), sfx(260, 0.02)),
                      e.x > 353.5 && ((e.x = 353.5), (e.vx = -Math.abs(e.vx)), sfx(260, 0.02)),
                      e.y < o && ((e.y = o), (e.vy = Math.abs(e.vy)), sfx(260, 0.02)),
                      e.vy > 0 &&
                        e.y + o >= 530 &&
                        e.y - o <= 542 &&
                        e.x > x - L / 2 - o &&
                        e.x < x + L / 2 + o)
                    ) {
                      const a = 1.05 * Math.max(-1, Math.min(1, (e.x - x) / (L / 2))),
                        s = Math.hypot(e.vx, e.vy);
                      if (
                        ((e.vx = s * Math.sin(a)),
                        (e.vy = -s * Math.cos(a)),
                        (e.y = 523.5),
                        (R = n),
                        (E = 0),
                        C++,
                        sfx(330, 0.05),
                        vib(5),
                        "down" === t.sp &&
                          C % 6 == 0 &&
                          ((I = n),
                          (O += 22),
                          Math.max(...l.filter((e) => !e.dead && "ice" !== e.t).map((e) => e.y0 + e.h)) + O >
                            500))
                      )
                        return ((b = 0), (c = []), X(), ae(), !1);
                    }
                    for (const t of l) {
                      if (t.dead) continue;
                      if (FZ > 0 && "ice" !== t.t) {
                        const a = Math.max(t.x, Math.min(e.x, t.x + t.w)),
                          s = Math.max(t.y, Math.min(e.y, t.y + t.h));
                        (e.x - a) ** 2 + (e.y - s) ** 2 < 42.25 && ee(t, n, 9);
                        continue;
                      }
                      const a = Math.max(t.x, Math.min(e.x, t.x + t.w)),
                        s = Math.max(t.y, Math.min(e.y, t.y + t.h)),
                        i = e.x - a,
                        r = e.y - s;
                      if (i * i + r * r < 42.25) {
                        const a = Math.min(e.x + o - t.x, t.x + t.w - (e.x - o)),
                          s = Math.min(e.y + o - t.y, t.y + t.h - (e.y - o));
                        (a < s
                          ? ((e.vx = e.x < t.x + t.w / 2 ? -Math.abs(e.vx) : Math.abs(e.vx)),
                            (e.x += e.x < t.x + t.w / 2 ? -a : a))
                          : ((e.vy = e.y < t.y + t.h / 2 ? -Math.abs(e.vy) : Math.abs(e.vy)),
                            (e.y += e.y < t.y + t.h / 2 ? -s : s)),
                          ee(t, n, 1),
                          XZ > 0 &&
                            l.forEach((q) => {
                              !q.dead &&
                                "ice" !== q.t &&
                                q !== t &&
                                Math.abs(q.row - t.row) <= 1 &&
                                Math.abs(q.col - t.col) <= 1 &&
                                ee(q, n, 1);
                            }));
                        break;
                      }
                    }
                    if (
                      r &&
                      !r.br &&
                      e.vy > 0 &&
                      e.y + o >= 566 &&
                      e.y - o <= 574 &&
                      Math.abs(e.x - r.x) < r.w / 2 + o
                    ) {
                      ((e.vy = -Math.abs(e.vy)), (e.y = 559.5), (r.br = n), sfx(560, 0.08), vib(8));
                      for (let e = 0; e < 16; e++)
                        f.push({
                          x: r.x + (Math.random() - 0.5) * r.w,
                          y: 570,
                          vx: 120 * (Math.random() - 0.5),
                          vy: 120 * -Math.random(),
                          l: 1,
                          c: "#c9f0ff",
                          s: 1.2 + 2 * Math.random(),
                        });
                    }
                    const a = Math.hypot(e.vx, e.vy);
                    if (
                      (Math.abs(e.vy) < 0.28 * a &&
                        ((e.vy = Math.sign(e.vy || -1) * a * 0.28),
                        (e.vx = Math.sign(e.vx) * Math.sqrt(a * a - e.vy * e.vy))),
                      e.y - o > s)
                    ) {
                      if (!S) return !1;
                      ((S = !1),
                        (e.y = 593.5),
                        (e.vy = -Math.abs(e.vy)),
                        _(e.x, 596, "#ffffff", 20, 120),
                        sfx(700, 0.08));
                    }
                  }
                  return !0;
                })(a, n, e)
              ),
            )),
            c.length ||
              A ||
              v ||
              (b--,
              X(),
              sfx(200, 0.25),
              vib(20),
              b <= 0 ? ae() : (msg("La balle est tombée. Vise à nouveau."), B()))),
          (d = d.filter((e) => {
            if (((e.y += 110 * n), e.y > 524 && e.y < 546 && Math.abs(e.x - x) < L / 2 + 12)) {
              if ((sfx(780, 0.08), _(e.x, e.y, "#ffffff", 10, 80), "n" === e.k))
                ((r = { x: Math.max(40, Math.min(320, x)), w: 72, t: performance.now(), br: 0 }),
                  J("Petite plateforme"));
              else if ("w" === e.k) ((k = 12), J("Plateforme large"));
              else if ("s" === e.k) ((w = 10), J("Balle douce"));
              else if ("f" === e.k) ((FZ = 7), J("Boule de feu"));
              else if ("b" === e.k) ((XZ = 8), J("Boule explosive"));
              else if ("d" === e.k) ((DZ = 12), J("Points doublés"));
              else if ("+" === e.k) b < 3 ? (b++, X(), J("Une vie de plus")) : ((g += 50), X(), J("+50"));
              else if (c[0] && "play" === h) {
                const e = c[0],
                  t = Math.hypot(e.vx, e.vy),
                  a = Math.atan2(e.vx, -e.vy);
                ([-0.35, 0.35].forEach((s) =>
                  c.push({ x: e.x, y: e.y, vx: t * Math.sin(a + s), vy: -t * Math.cos(a + s), tr: [] }),
                ),
                  J("Trois balles !"));
              }
              return !1;
            }
            return e.y < 620;
          }))),
        ((e) => {
          const t = P * U;
          (V.setTransform(1, 0, 0, 1, 0, 0),
            V.clearRect(0, 0, z.width, z.height),
            V.setTransform(t, 0, 0, t, 0, 0));
          for (const a of l) {
            let s = 1,
              n = 1;
            if (a.dead) {
              const t = (e - a.dead) / 260;
              if (t >= 1) continue;
              ((s = 1 - t), (n = 1 - 0.35 * he(t)));
            } else {
              const t = (e - a.hitT) / 180;
              t < 1 && (n = 1 + 0.08 * Math.sin(t * Math.PI));
            }
            if ("fog" === SP && "play" === h && !a.dead) {
              const m = Math.min(999, ...c.map((b) => Math.hypot(b.x - a.x - a.w / 2, b.y - a.y - a.h / 2)));
              s *= e - a.hitT < 700 ? 1 : Math.max(0.1, Math.min(1, 1.7 - m / 110));
            }
            V.globalAlpha = s;
            const o = W(a),
              i = a.w * n,
              r = a.h * n;
            (V.drawImage(
              o,
              a.x + a.w / 2 - i / 2 - (2 / t) * n,
              a.y + a.h / 2 - r / 2 - (2 / t) * n,
              (o.width / t) * n,
              (o.height / t) * n,
            ),
              !a.dead &&
                e - a.hitT < 160 &&
                ((V.globalAlpha = 0.5 * (1 - (e - a.hitT) / 160)),
                (V.fillStyle = "#fff"),
                V.fillRect(a.x, a.y, a.w, a.h)));
          }
          if (
            ((V.globalAlpha = 1),
            (u = u.filter((t) => e - t.t < 420)),
            u.forEach((t) => {
              const a = (e - t.t) / 420;
              ((V.strokeStyle = "rgba(255,170,140," + 0.7 * (1 - a) + ")"),
                (V.lineWidth = 3 * (1 - a) + 0.5),
                V.beginPath(),
                t.z ? (V.moveTo(6, t.y), V.lineTo(354, t.y)) : V.arc(t.x, t.y, 10 + 70 * he(a), 0, 7),
                V.stroke());
            }),
            d.forEach((e) => {
              const t = {
                m: "#93d8f5",
                w: "#b3e8a6",
                s: "#c8adff",
                n: "#ffdc8f",
                f: "#ff9f6a",
                b: "#ff7a5a",
                d: "#ffe38a",
                "+": "#ff9fb2",
              }[e.k];
              ((V.fillStyle = t),
                (V.shadowColor = t),
                (V.shadowBlur = 10),
                V.beginPath(),
                V.roundRect(e.x - 15, e.y - 7, 30, 14, 3),
                V.fill(),
                (V.shadowBlur = 0),
                (V.fillStyle = "#0a0f2a"),
                (V.font = "800 10px ui-monospace,Menlo,Consolas,monospace"),
                (V.textAlign = "center"),
                (V.textBaseline = "middle"),
                V.fillText(
                  { m: "×3", w: "↔", s: "◔", n: "▁", f: "✸", b: "✺", d: "×2", "+": "♥" }[e.k],
                  e.x,
                  e.y + 0.5,
                ));
            }),
            SH.forEach((s) => {
              ((V.fillStyle = "#bff4ff"),
                (V.shadowColor = "#9fe8ff"),
                (V.shadowBlur = 8),
                V.fillRect(s.x - 1.5, s.y - 9, 3, 11),
                (V.shadowBlur = 0));
            }),
            r)
          ) {
            const t = r.br ? (e - r.br) / 320 : 0,
              a = r.t ? Math.min(1, (e - r.t) / 250) : 1;
            if (t >= 1) r = null;
            else {
              ((V.globalAlpha = (1 - t) * a),
                (V.fillStyle = "#c9f0ff"),
                (V.shadowColor = "rgba(150,220,255,.9)"),
                (V.shadowBlur = 10));
              const e = r.w * (r.br ? 1 + 0.3 * t : 0.6 + 0.4 * he(a));
              (V.beginPath(),
                V.roundRect(r.x - e / 2, 566 + (r.br ? 10 * t : 0), e, 7, 3.5),
                V.fill(),
                (V.shadowBlur = 0),
                (V.globalAlpha = 1));
            }
          }
          if (
            (S &&
              ((V.strokeStyle = "rgba(200,235,255," + (0.55 + 0.25 * Math.sin(e / 260)) + ")"),
              (V.lineWidth = 3),
              V.setLineDash([2, 6]),
              (V.lineCap = "round"),
              V.beginPath(),
              V.moveTo(6, 596),
              V.lineTo(354, 596),
              V.stroke(),
              V.setLineDash([])),
            "aim" === h)
          ) {
            const t = (() => {
                let e = x,
                  t = 522.5,
                  a = Math.sin(p),
                  s = -Math.cos(p);
                const n = [];
                let i = 0,
                  r = 0;
                for (; i < 520 && r < 2;) {
                  if (
                    ((e += 4 * a),
                    (t += 4 * s),
                    (i += 4),
                    e < o && ((e = o), (a = -a), r++),
                    e > 353.5 && ((e = 353.5), (a = -a), r++),
                    t < o && ((t = o), (s = -s), r++),
                    l.some(
                      (a) => !a.dead && e > a.x - o && e < a.x + a.w + o && t > a.y - o && t < a.y + a.h + o,
                    ))
                  ) {
                    n.push([e, t, 1]);
                    break;
                  }
                  i % 14 < 4 && n.push([e, t, 0]);
                }
                return n;
              })(),
              a = m ? 0.95 : 0.35 + 0.2 * Math.sin(e / 300);
            (t.forEach(([e, s, n], o) => {
              ((V.globalAlpha = a * (1 - o / (t.length + 4))),
                (V.fillStyle = "#fff"),
                V.beginPath(),
                V.arc(e, s, n ? 4 : 1.8, 0, 7),
                V.fill());
            }),
              (V.globalAlpha = 1));
          }
          const a = e - R < 200 ? 0.18 * Math.sin(((e - R) / 200) * Math.PI) : 0,
            s = L * (1 + 0.3 * a),
            n = 12 * (1 - a),
            i = V.createLinearGradient(0, 530, 0, 542);
          (i.addColorStop(0, "#f4fff9"),
            i.addColorStop(1, "#27c4a8"),
            (V.fillStyle = i),
            (V.shadowColor = "#5ff0d0"),
            (V.shadowBlur = 16),
            V.beginPath(),
            V.roundRect(x - s / 2, 530 + (12 - n) / 2, s, n, 6),
            V.fill(),
            (V.shadowBlur = 0),
            c.forEach((e) => {
              for (let t = 0; t < e.tr.length; t++) {
                const [a, s] = e.tr[t],
                  n = t / e.tr.length;
                ((V.globalAlpha = 0.35 * n), (V.fillStyle = FZ > 0 ? "#ffb070" : "#bff4ff"));
                const q = o * (0.4 + 0.6 * n);
                (V.beginPath(), V.arc(a, s, q, 0, 7), V.fill());
              }
              ((V.globalAlpha = 1),
                (V.fillStyle = "#f2ffff"),
                (V.shadowColor = FZ > 0 ? "#ff8a3a" : XZ > 0 ? "#ff5a5a" : "#7ef0ff"),
                (V.shadowBlur = 14),
                V.beginPath(),
                V.arc(e.x, e.y, o, 0, 7),
                V.fill(),
                (V.shadowBlur = 0),
                (V.fillStyle = "rgba(120,200,230,.55)"),
                V.beginPath(),
                V.arc(e.x + o * 0.25, e.y + o * 0.3, o * 0.55, 0, 7),
                V.fill(),
                (V.fillStyle = "#fff"),
                V.beginPath(),
                V.arc(e.x - o * 0.32, e.y - o * 0.34, o * 0.3, 0, 7),
                V.fill(),
                (V.shadowBlur = 0));
            }),
            f.forEach((e) => {
              ((V.globalAlpha = Math.max(0, Math.min(1, e.l))),
                (V.fillStyle = e.c),
                V.fillRect(e.x - e.s, e.y - e.s, 2 * e.s, 2 * e.s));
            }),
            (V.globalAlpha = 1));
        })(e));
    },
    me = () => {
      z.isConnected ? Z() : removeEventListener("resize", me);
    };
  (addEventListener("resize", me),
    (window.__BKDBG = {
      st: () => ({ state: h, lives: b, left: Q(), balls: c.length, done: A }),
      net: () => {
        ((r = { x: x + 120, w: 72, t: performance.now(), br: 0 }),
          (h = "play"),
          (c = [{ x: x + 120, y: 400, vx: 0, vy: 300, tr: [] }]));
      },
      st2: () => ({ net: r && { ...r }, b: c[0] && { ...c[0], tr: 0 } }),
      clear: () => {
        (l.forEach((e) => {
          "ice" !== e.t && (e.dead = performance.now());
        }),
          te());
      },
    }),
    TH[2] && ((j.style.background = TH[2]), (j.style.borderRadius = "16px")),
    Z(),
    F(),
    msg((TH[0] ? "Thème : " + TH[0] + ". " : "") + (SG || t.tip || "")),
    requestAnimationFrame(pe));
}
