// Galacfish : jeu (GF…act.gf*, course rc*), contrôles via Input
const GF = { raf: 0, run: 0 };
const GFB = [
  {
    n: "Nébuleuse rose",
    bg: ["#2c0a3c", "#12041f"],
    neb: ["#ff3fa8", "#9b2bff", "#ff7ac8", "#5a1a9a"],
    pl: ["rose", "rose", "rose", "gaz"],
  },
  {
    n: "Océan d’étoiles",
    bg: ["#0b1d52", "#040a26"],
    neb: ["#2f7bff", "#47d6ff", "#7a5cff", "#1a3a9a"],
    pl: ["ocean", "ocean", "ice", "ocean"],
  },
  {
    n: "Soleil d’ambre",
    bg: ["#3e1a0a", "#170803"],
    neb: ["#ff8a2a", "#ffb347", "#ff4f6a", "#8a2a1a"],
    pl: ["ambre", "ambre", "lava", "ambre"],
  },
  {
    n: "Aurore verte",
    bg: ["#06291f", "#02110d"],
    neb: ["#2fffb0", "#2fb4ff", "#7aff6a", "#0a5a4a"],
    pl: ["vert", "jade", "vert", "jade"],
  },
  {
    n: "Abysses violettes",
    bg: ["#1c0b40", "#07031a"],
    neb: ["#a46bff", "#ff4fd8", "#4f6bff", "#3a1a7a"],
    pl: ["viol", "gaz", "viol", "viol"],
  },
];
const GFP = {
  ocean: { c: ["#d6f2ff", "#3f8cff", "#0a2a8a"], h: "#47a8ff", k: "spot" },
  ambre: { c: ["#fff0b0", "#ffb02a", "#8a4a08"], h: "#ffb347", k: "lava" },
  jade: { c: ["#d0fff6", "#2fd4d0", "#0a5a6a"], h: "#2fe6e0", k: "spot" },
  viol: { c: ["#e6d0ff", "#8a4fff", "#2a0f6a"], h: "#9a5fff", k: "spot" },
  rose: { c: ["#ffa6d6", "#ff4fa3", "#8a0f52"], h: "#ff3fa8", k: "spot" },
  lava: { c: ["#ffe08a", "#ff8a2a", "#9a2408"], h: "#ff7a1a", k: "lava" },
  ice: { c: ["#ffffff", "#bfeaff", "#4f9ad8"], h: "#9fe6ff", k: "ice" },
  gaz: { c: ["#e0c8ff", "#9a6bff", "#3a1a8a"], h: "#a46bff", k: "band" },
  vert: { c: ["#c8ffe8", "#3fe0a0", "#0a6a4e"], h: "#2fffb0", k: "spot" },
  lune: { c: ["#f4f0ff", "#bab4d8", "#55507a"], h: "#d8d0ff", k: "crat" },
};
function gfCv(w, h) {
  const c = document.createElement("canvas");
  return ((c.width = Math.max(1, Math.ceil(w))), (c.height = Math.max(1, Math.ceil(h))), c);
}
function gfBlob(col) {
  const c = gfCv(64, 64),
    x = c.getContext("2d"),
    g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  return (
    g.addColorStop(0, col),
    g.addColorStop(0.35, col.replace(/[\d.]+\)$/, ".45)")),
    g.addColorStop(1, "rgba(0,0,0,0)"),
    (x.fillStyle = g),
    x.fillRect(0, 0, 64, 64),
    c
  );
}
function gfRgba(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${255 & n},${a})`;
}
function gfPlanet(type, r, seed) {
  const P = GFP[type],
    R = rng(seed),
    m = 1.5,
    S = Math.ceil(2 * r * m),
    c = gfCv(S, S),
    x = c.getContext("2d"),
    o = S / 2;
  let g = x.createRadialGradient(o, o, 0.82 * r, o, o, r * m);
  (g.addColorStop(0, gfRgba(P.h, 0.55)),
    g.addColorStop(0.35, gfRgba(P.h, 0.18)),
    g.addColorStop(1, gfRgba(P.h, 0)),
    (x.fillStyle = g),
    x.fillRect(0, 0, S, S),
    x.save(),
    x.beginPath(),
    x.arc(o, o, r, 0, 7),
    x.clip(),
    (g = x.createRadialGradient(o - 0.38 * r, o - 0.42 * r, 0.05 * r, o, o, 1.05 * r)),
    g.addColorStop(0, P.c[0]),
    g.addColorStop(0.45, P.c[1]),
    g.addColorStop(1, P.c[2]),
    (x.fillStyle = g),
    x.fillRect(o - r, o - r, 2 * r, 2 * r));
  if ("band" === P.k) {
    const n = 7 + Math.floor(5 * R()),
      t = R() * 6;
    for (let e = 0; e < n; e++) {
      const a = o - r + (2 * r * (e + R() * 0.5)) / n;
      (x.beginPath(), x.moveTo(o - r, a));
      for (let s = 0; s <= 20; s++) {
        const n = o - r + (2 * r * s) / 20;
        x.lineTo(n, a + Math.sin(s * 0.7 + t + e) * r * 0.04);
      }
      (x.lineTo(o + r, a + r * 0.13),
        x.lineTo(o - r, a + r * 0.13),
        x.closePath(),
        (x.fillStyle = e % 2 ? "rgba(255,255,255,.13)" : "rgba(40,0,80,.16)"),
        x.fill());
    }
  } else if ("ice" === P.k) {
    const n = [];
    for (let e = 0; e < 16; e++) {
      const t = R() * Math.PI * 2,
        a = r * Math.sqrt(R()) * 1.05;
      n.push([o + Math.cos(t) * a, o + Math.sin(t) * a]);
    }
    for (let e = 0; e < 26; e++) {
      const t = n[Math.floor(R() * n.length)],
        a = n[Math.floor(R() * n.length)],
        s = n[Math.floor(R() * n.length)];
      (x.beginPath(),
        x.moveTo(t[0], t[1]),
        x.lineTo(a[0], a[1]),
        x.lineTo(s[0], s[1]),
        x.closePath(),
        (x.fillStyle =
          R() < 0.5 ? `rgba(255,255,255,${0.06 + 0.14 * R()})` : `rgba(30,80,160,${0.05 + 0.1 * R()})`),
        x.fill(),
        (x.strokeStyle = "rgba(255,255,255,.35)"),
        (x.lineWidth = Math.max(1, r * 0.012)),
        x.stroke());
    }
  } else {
    const n = "crat" === P.k ? 14 : 30;
    for (let e = 0; e < n; e++) {
      const t = o + (R() * 2 - 1) * r,
        a = o + (R() * 2 - 1) * r,
        s = r * (0.04 + 0.2 * R());
      if ("crat" === P.k) {
        (x.beginPath(),
          x.arc(t, a, s, 0, 7),
          (x.fillStyle = "rgba(60,50,100,.22)"),
          x.fill(),
          x.beginPath(),
          x.arc(t - s * 0.15, a - s * 0.15, s * 0.82, 0, 7),
          (x.strokeStyle = "rgba(255,255,255,.18)"),
          (x.lineWidth = Math.max(1, s * 0.18)),
          x.stroke());
      } else
        (x.beginPath(),
          x.arc(t, a, s, 0, 7),
          (x.fillStyle =
            R() < 0.5 ? `rgba(255,255,255,${0.05 + 0.1 * R()})` : `rgba(60,0,40,${0.06 + 0.12 * R()})`),
          x.fill());
    }
    if ("lava" === P.k) {
      ((x.strokeStyle = "rgba(255,240,170,.35)"), (x.lineWidth = Math.max(1.2, r * 0.025)));
      for (let e = 0; e < 6; e++) {
        x.beginPath();
        let t = o + (R() * 2 - 1) * r * 0.8,
          a = o + (R() * 2 - 1) * r * 0.8;
        x.moveTo(t, a);
        for (let s = 0; s < 5; s++)
          ((t += (R() * 2 - 1) * r * 0.25), (a += (R() * 2 - 1) * r * 0.25), x.lineTo(t, a));
        x.stroke();
      }
    }
  }
  ((g = x.createRadialGradient(o - 0.35 * r, o - 0.4 * r, 0.4 * r, o, o, 1.08 * r)),
    g.addColorStop(0, "rgba(0,0,0,0)"),
    g.addColorStop(1, "rgba(10,0,40,.5)"),
    (x.fillStyle = g),
    x.fillRect(o - r, o - r, 2 * r, 2 * r),
    x.restore(),
    x.beginPath(),
    x.arc(o, o, r - 1, 0, 7),
    (x.strokeStyle = gfRgba(P.h, 0.75)),
    (x.lineWidth = Math.max(1.5, r * 0.035)),
    x.stroke(),
    x.beginPath(),
    x.arc(o, o, 0.97 * r, Math.PI * 1.05, Math.PI * 1.65),
    (x.strokeStyle = "rgba(255,255,255,.45)"),
    (x.lineWidth = Math.max(1, r * 0.025)),
    x.stroke());
  return c;
}
function gfNeb(cols, seed) {
  const R = rng(seed),
    c = gfCv(420, 420),
    x = c.getContext("2d");
  x.globalCompositeOperation = "lighter";
  const C = [0, 1, 2].map(() => [140 + 140 * R(), 140 + 140 * R(), cols[Math.floor(R() * cols.length)]]);
  for (let e = 0; e < 54; e++) {
    const k = C[e % 3],
      s = 24 + 56 * R(),
      t = Math.max(s + 6, Math.min(414 - s, k[0] + (R() * 2 - 1) * 110)),
      a = Math.max(s + 6, Math.min(414 - s, k[1] + (R() * 2 - 1) * 110)),
      n = R() < 0.7 ? k[2] : cols[Math.floor(R() * cols.length)],
      o = x.createRadialGradient(t, a, 0, t, a, s);
    (o.addColorStop(0, gfRgba(n, 0.07 + 0.07 * R())),
      o.addColorStop(0.6, gfRgba(n, 0.03)),
      o.addColorStop(1, gfRgba(n, 0)),
      (x.fillStyle = o),
      x.beginPath(),
      x.arc(t, a, s, 0, 7),
      x.fill());
  }
  return c;
}
function gfStars(w, h, n, seed) {
  const R = rng(seed),
    c = gfCv(w, h),
    x = c.getContext("2d");
  for (let e = 0; e < n; e++) {
    const t = R() * w,
      a = R() * h,
      s = R() < 0.08 ? 1.6 + R() : 0.5 + R() * 0.9;
    ((x.fillStyle = `rgba(${(220 + 35 * R()) | 0},${(220 + 35 * R()) | 0},255,${0.35 + 0.6 * R()})`),
      x.beginPath(),
      x.arc(t, a, s, 0, 7),
      x.fill(),
      s > 1.6 &&
        ((x.fillStyle = "rgba(255,255,255,.07)"), x.beginPath(), x.arc(t, a, 2.6 * s, 0, 7), x.fill()));
  }
  return c;
}
function gfDustSpr() {
  const c = gfCv(56, 56),
    x = c.getContext("2d");
  let g = x.createRadialGradient(28, 28, 0, 28, 28, 28);
  (g.addColorStop(0, "rgba(120,230,255,.55)"),
    g.addColorStop(0.4, "rgba(80,170,255,.18)"),
    g.addColorStop(1, "rgba(60,120,255,0)"),
    (x.fillStyle = g),
    x.fillRect(0, 0, 56, 56),
    x.translate(28, 28),
    x.beginPath());
  for (let e = 0; e < 12; e++) {
    const t = (e * Math.PI) / 6 - Math.PI / 2,
      a = e % 2 ? 4.2 : 11;
    x.lineTo(Math.cos(t) * a, Math.sin(t) * a);
  }
  return (
    x.closePath(),
    (x.fillStyle = "#bff6ff"),
    (x.shadowColor = "#5fd8ff"),
    (x.shadowBlur = 8),
    x.fill(),
    (x.shadowBlur = 0),
    x.beginPath(),
    x.arc(0, 0, 2.6, 0, 7),
    (x.fillStyle = "#fff"),
    x.fill(),
    c
  );
}
const GFTH = "mer";
const GFFL = !1;
const GFBM = [
  {
    n: "Surface ensoleillée",
    bg: ["#46c8f2", "#1b8ad0"],
    neb: ["#bff3ff", "#7fe3ff", "#5fd0ff", "#9fe8ff"],
    pl: ["ballon", "dauphin", "tortue"],
  },
  {
    n: "Lagon turquoise",
    bg: ["#34d8cc", "#1a9fb0"],
    neb: ["#7fffe8", "#bff3ff", "#3fe0d0", "#a0ffe0"],
    pl: ["globe", "eponge", "meduse"],
  },
  {
    n: "Récif corallien",
    bg: ["#1f9fd0", "#0d5c9a"],
    neb: ["#3fe0d0", "#7fe3ff", "#ffb36b", "#ff7aa8"],
    pl: ["corail", "etoile", "hippocampe"],
  },
  {
    n: "Fonds sableux",
    bg: ["#2a86b0", "#14507a"],
    neb: ["#ffd9a0", "#7fc8e0", "#ffb36b", "#5ab0d0"],
    pl: ["crabe", "raie", "poulpe"],
  },
  {
    n: "Cimetière des épaves",
    bg: ["#12527a", "#0a2e4e"],
    neb: ["#4a9aa8", "#2a6a88", "#8aa080", "#3a7a8a"],
    pl: ["epave", "ancre", "coffre"],
  },
  {
    n: "Le grand large",
    bg: ["#0b3f86", "#06214f"],
    neb: ["#2f7bff", "#47a8ff", "#1a4aaa", "#6fd0ff"],
    pl: ["requin", "espadon", "orque"],
  },
  {
    n: "Falaises sous-marines",
    bg: ["#0a2c6a", "#051a40"],
    neb: ["#3a6ac8", "#5a4ab0", "#2a4a9a", "#6a8ae0"],
    pl: ["rocher", "oursin", "poissonlune"],
  },
  {
    n: "Eaux profondes",
    bg: ["#071a4a", "#030d2a"],
    neb: ["#2f5bd0", "#4a3ad0", "#1a3a9a", "#4fa0ff"],
    pl: ["baleine", "calmar", "medusb"],
  },
  {
    n: "Les abysses",
    bg: ["#06163a", "#030b1e"],
    neb: ["#2fc8ff", "#5a4aff", "#1a3a9a", "#3fffd0"],
    pl: ["baudroie", "medusv", "mine"],
  },
  {
    n: "La fosse des ténèbres",
    bg: ["#0a0614", "#020106"],
    neb: ["#ff5a2a", "#a02aff", "#ff3a5a", "#4a1a6a"],
    pl: ["vent", "cristal", "sousmarin"],
  },
];
function gfPearl() {
  const c = gfCv(56, 56),
    x = c.getContext("2d");
  let g = x.createRadialGradient(28, 28, 0, 28, 28, 28);
  (g.addColorStop(0, "rgba(255,230,250,.5)"),
    g.addColorStop(0.45, "rgba(255,200,240,.15)"),
    g.addColorStop(1, "rgba(255,200,240,0)"),
    (x.fillStyle = g),
    x.fillRect(0, 0, 56, 56),
    (g = x.createRadialGradient(24, 24, 1, 28, 28, 11)),
    g.addColorStop(0, "#fff"),
    g.addColorStop(0.5, "#ffe3f4"),
    g.addColorStop(1, "#d9a6e8"),
    x.beginPath(),
    x.arc(28, 28, 10, 0, 7),
    (x.fillStyle = g),
    (x.shadowColor = "#ffd0f0"),
    (x.shadowBlur = 8),
    x.fill(),
    (x.shadowBlur = 0),
    x.beginPath(),
    x.arc(24.5, 24.5, 3, 0, 7),
    (x.fillStyle = "rgba(255,255,255,.9)"),
    x.fill());
  return c;
}
function gfSea(T, r, seed) {
  if (GFXS[T]) return GFXS[T](r, seed);
  if (T === "debc" || T === "debe") return gfDeb(T, r, seed);
  if (GFH[T]) return gfSea2(T, r, seed);
  const R = rng(seed),
    m = 1.4,
    S = Math.ceil(2 * r * m),
    c = gfCv(S, S),
    x = c.getContext("2d"),
    o = S / 2,
    TP = Math.PI * 2,
    lw = (v) => Math.max(1.2, v * r);
  const halo = (h, a) => {
    const g = x.createRadialGradient(o, o, 0.7 * r, o, o, r * m);
    (g.addColorStop(0, gfRgba(h, a)),
      g.addColorStop(1, gfRgba(h, 0)),
      (x.fillStyle = g),
      x.fillRect(0, 0, S, S));
  };
  const disc = (c0, c1, c2, rr) => {
    rr = rr || r;
    const g = x.createRadialGradient(o - 0.35 * rr, o - 0.4 * rr, 0.05 * rr, o, o, 1.05 * rr);
    (g.addColorStop(0, c0),
      g.addColorStop(0.5, c1),
      g.addColorStop(1, c2),
      x.beginPath(),
      x.arc(o, o, rr, 0, TP),
      (x.fillStyle = g),
      x.fill());
  };
  const clipD = () => {
    (x.save(), x.beginPath(), x.arc(o, o, r, 0, TP), x.clip());
  };
  const dot = (px, py, rr, col) => {
    (x.beginPath(), x.arc(px, py, rr, 0, TP), (x.fillStyle = col), x.fill());
  };
  if (T === "ballon") {
    const cs = ["#ff4b5c", "#ffffff", "#ffd23f", "#ffffff", "#3fa8ff", "#ffffff"];
    for (let i = 0; i < 6; i++)
      (x.beginPath(),
        x.moveTo(o, o),
        x.arc(o, o, r, (i * TP) / 6, ((i + 1) * TP) / 6),
        x.closePath(),
        (x.fillStyle = cs[i]),
        x.fill());
    const g = x.createRadialGradient(o - 0.35 * r, o - 0.4 * r, 0.05 * r, o, o, 1.05 * r);
    (g.addColorStop(0, "rgba(255,255,255,.45)"),
      g.addColorStop(0.5, "rgba(255,255,255,0)"),
      g.addColorStop(1, "rgba(0,40,90,.35)"),
      x.beginPath(),
      x.arc(o, o, r, 0, TP),
      (x.fillStyle = g),
      x.fill(),
      dot(o, o, 0.15 * r, "#ffd23f"),
      dot(o, o, 0.07 * r, "#fff"));
  } else if (T === "meduse" || T === "medusb" || T === "medusv") {
    const P = {
      meduse: ["#ffe0f2", "#ff7ac0", "#a02a7a", "#ff7ac0"],
      medusb: ["#d0e8ff", "#5a9aff", "#1a3a9a", "#7ab4ff"],
      medusv: ["#d8fff6", "#2fe0d0", "#0a5a7a", "#3fffe0"],
    }[T];
    halo(P[3], T === "medusv" ? 0.45 : 0.18);
    for (let i = 0; i < 7; i++) {
      const x0 = o - 0.7 * r + (i * 1.4 * r) / 6;
      (x.beginPath(), x.moveTo(x0, o + 0.05 * r));
      for (let k = 1; k <= 10; k++)
        x.lineTo(x0 + Math.sin(k * 0.9 + i + (seed % 5)) * 0.05 * r, o + 0.05 * r + k * 0.095 * r);
      ((x.strokeStyle = gfRgba(P[3], 0.7)), (x.lineWidth = lw(0.05)), (x.lineCap = "round"), x.stroke());
    }
    (x.beginPath(), x.moveTo(o - 0.95 * r, o + 0.12 * r), x.arc(o, o + 0.12 * r, 0.95 * r, Math.PI, TP));
    for (let i = 0; i < 6; i++)
      x.quadraticCurveTo(
        o + 0.95 * r - (i + 0.5) * 0.3167 * r,
        o + 0.32 * r,
        o + 0.95 * r - (i + 1) * 0.3167 * r,
        o + 0.12 * r,
      );
    x.closePath();
    const g = x.createRadialGradient(o - 0.3 * r, o - 0.35 * r, 0.05 * r, o, o, r);
    (g.addColorStop(0, P[0]),
      g.addColorStop(0.5, P[1]),
      g.addColorStop(1, P[2]),
      (x.globalAlpha = 0.93),
      (x.fillStyle = g),
      x.fill(),
      (x.globalAlpha = 1),
      (x.strokeStyle = gfRgba(P[0], 0.6)),
      (x.lineWidth = lw(0.03)),
      x.stroke());
    for (let i = 0; i < 6; i++)
      dot(o + (R() * 2 - 1) * 0.55 * r, o - R() * 0.5 * r, (0.04 + 0.06 * R()) * r, "rgba(255,255,255,.35)");
  } else if (T === "etoile") {
    x.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / 5,
        d = i % 2 ? 0.42 * r : 0.93 * r;
      x.lineTo(o + Math.cos(a) * d, o + Math.sin(a) * d);
    }
    x.closePath();
    const g = x.createRadialGradient(o - 0.2 * r, o - 0.2 * r, 0.05 * r, o, o, r);
    (g.addColorStop(0, "#ffd9a0"),
      g.addColorStop(0.55, "#ff8a3a"),
      g.addColorStop(1, "#b03a1a"),
      (x.fillStyle = g),
      (x.strokeStyle = "#ff8a3a"),
      (x.lineJoin = "round"),
      (x.lineWidth = 0.1 * r),
      x.fill(),
      x.stroke());
    for (let i = 0; i < 5; i++) {
      const a = -Math.PI / 2 + (i * TP) / 5;
      for (let k = 1; k <= 4; k++)
        dot(o + Math.cos(a) * k * 0.2 * r, o + Math.sin(a) * k * 0.2 * r, 0.035 * r, "rgba(255,240,200,.8)");
    }
  } else if (T === "corail") {
    (disc("#ffc9d6", "#ff6f91", "#9a2a5a"), clipD());
    for (let i = 0; i < 22; i++) {
      (x.beginPath(),
        x.arc(
          o + (R() * 2 - 1) * r * 0.8,
          o + (R() * 2 - 1) * r * 0.8,
          r * (0.1 + 0.2 * R()),
          R() * 6,
          R() * 6 + 2 + 2 * R(),
        ),
        (x.strokeStyle = i % 3 ? "rgba(110,20,60,.35)" : "rgba(255,230,240,.35)"),
        (x.lineWidth = lw(0.05)),
        x.stroke());
    }
    x.restore();
  } else if (T === "eponge") {
    (disc("#fff2a8", "#ffc93a", "#b8780a"), clipD());
    for (let i = 0; i < 10; i++) {
      const a = R() * TP,
        d = r * 0.7 * Math.sqrt(R()),
        px = o + Math.cos(a) * d,
        py = o + Math.sin(a) * d,
        rr = r * (0.07 + 0.09 * R());
      (dot(px, py, rr * 1.25, "rgba(255,245,190,.5)"), dot(px, py, rr, "rgba(120,60,0,.5)"));
    }
    x.restore();
  } else if (T === "oursin") {
    for (let i = 0; i < 46; i++) {
      const a = (i * TP) / 46;
      (x.beginPath(),
        x.moveTo(o + Math.cos(a) * 0.4 * r, o + Math.sin(a) * 0.4 * r),
        x.lineTo(o + Math.cos(a) * r * (0.88 + 0.12 * R()), o + Math.sin(a) * r * (0.88 + 0.12 * R())),
        (x.strokeStyle = i % 2 ? "#8a5fe8" : "#5a2aa8"),
        (x.lineWidth = lw(0.04)),
        (x.lineCap = "round"),
        x.stroke());
    }
    disc("#b08aff", "#6a3ac0", "#240a54", 0.6 * r);
  } else if (T === "globe") {
    for (let i = 0; i < 28; i++) {
      const a = (i * TP) / 28;
      (x.beginPath(),
        x.moveTo(o + Math.cos(a) * 0.86 * r, o + Math.sin(a) * 0.86 * r),
        x.lineTo(o + Math.cos(a) * 0.99 * r, o + Math.sin(a) * 0.99 * r),
        (x.strokeStyle = "#fff3b0"),
        (x.lineWidth = lw(0.035)),
        (x.lineCap = "round"),
        x.stroke());
    }
    disc("#fff4b8", "#f2c14a", "#b8741a", 0.9 * r);
    clipD();
    (x.beginPath(),
      x.ellipse(o, o + 0.5 * r, 0.7 * r, 0.35 * r, 0, 0, TP),
      (x.fillStyle = "rgba(255,255,255,.3)"),
      x.fill());
    for (let i = 0; i < 9; i++)
      dot(o + (R() * 2 - 1) * 0.6 * r, o - 0.2 * r + (R() - 0.3) * 0.5 * r, 0.04 * r, "rgba(120,60,10,.45)");
    (x.restore(),
      dot(o - 0.3 * r, o - 0.15 * r, 0.17 * r, "#fff"),
      dot(o - 0.3 * r, o - 0.13 * r, 0.09 * r, "#1a1a2a"),
      dot(o - 0.33 * r, o - 0.17 * r, 0.03 * r, "#fff"),
      x.beginPath(),
      x.ellipse(o + 0.2 * r, o + 0.12 * r, 0.16 * r, 0.09 * r, 0.6, 0, TP),
      (x.fillStyle = "rgba(255,190,80,.8)"),
      x.fill(),
      x.beginPath(),
      x.arc(o - 0.55 * r, o + 0.2 * r, 0.12 * r, 0.2, 2.4),
      (x.strokeStyle = "#7a3a0a"),
      (x.lineWidth = lw(0.03)),
      x.stroke());
  } else if (T === "rocher") {
    x.beginPath();
    for (let i = 0; i < 22; i++) {
      const a = (i * TP) / 22,
        d = r * (0.8 + 0.2 * R());
      x.lineTo(o + Math.cos(a) * d, o + Math.sin(a) * d);
    }
    x.closePath();
    const g = x.createRadialGradient(o - 0.35 * r, o - 0.4 * r, 0.05 * r, o, o, 1.05 * r);
    (g.addColorStop(0, "#8a9cb0"),
      g.addColorStop(0.5, "#46586c"),
      g.addColorStop(1, "#18222f"),
      (x.fillStyle = g),
      x.fill(),
      x.save(),
      x.clip());
    for (let i = 0; i < 4; i++) {
      (x.beginPath(), x.moveTo(o + (R() * 2 - 1) * 0.6 * r, o + (R() * 2 - 1) * 0.6 * r));
      for (let k = 0; k < 3; k++) x.lineTo(o + (R() * 2 - 1) * 0.8 * r, o + (R() * 2 - 1) * 0.8 * r);
      ((x.strokeStyle = "rgba(0,0,0,.35)"), (x.lineWidth = lw(0.03)), x.stroke());
    }
    for (let i = 0; i < 5; i++)
      dot(
        o + (R() * 2 - 1) * 0.6 * r,
        o - 0.45 * r + R() * 0.4 * r,
        r * (0.08 + 0.1 * R()),
        "rgba(70,170,110,.5)",
      );
    x.restore();
  } else if (T === "mine") {
    for (let i = 0; i < 10; i++) {
      const a = (i * TP) / 10,
        px = o + Math.cos(a) * 0.88 * r,
        py = o + Math.sin(a) * 0.88 * r;
      (dot(px, py, 0.12 * r, "#2c353d"), dot(px - 0.03 * r, py - 0.03 * r, 0.05 * r, "#8a96a2"));
    }
    (disc("#8d9aa6", "#4c5864", "#1a2128", 0.86 * r),
      clipD(),
      x.beginPath(),
      x.arc(o, o, 0.5 * r, 0, TP),
      (x.strokeStyle = "rgba(0,0,0,.3)"),
      (x.lineWidth = lw(0.05)),
      x.stroke());
    for (let i = 0; i < 5; i++)
      dot(
        o + (R() * 2 - 1) * 0.6 * r,
        o + (R() * 2 - 1) * 0.6 * r,
        r * (0.06 + 0.1 * R()),
        "rgba(170,90,35,.32)",
      );
    x.restore();
    const g = x.createRadialGradient(o, o, 0, o, o, 0.32 * r);
    (g.addColorStop(0, "rgba(255,80,70,.95)"),
      g.addColorStop(1, "rgba(255,60,60,0)"),
      (x.fillStyle = g),
      x.fillRect(0, 0, S, S));
  } else if (T === "baudroie") {
    disc("#5a4a7a", "#2c2042", "#0c0716", 0.92 * r);
    (x.beginPath(),
      x.ellipse(o, o + 0.3 * r, 0.62 * r, 0.3 * r, 0, 0, TP),
      (x.fillStyle = "#07030d"),
      x.fill());
    for (let i = 0; i < 7; i++) {
      const xx = o - 0.52 * r + i * 0.173 * r;
      (x.beginPath(),
        x.moveTo(xx, o + 0.16 * r),
        x.lineTo(xx + 0.09 * r, o + 0.16 * r),
        x.lineTo(xx + 0.045 * r, o + 0.32 * r),
        x.closePath(),
        (x.fillStyle = "#f4f0ff"),
        x.fill(),
        x.beginPath(),
        x.moveTo(xx + 0.04 * r, o + 0.46 * r),
        x.lineTo(xx + 0.13 * r, o + 0.46 * r),
        x.lineTo(xx + 0.085 * r, o + 0.31 * r),
        x.closePath(),
        x.fill());
    }
    for (const s of [-1, 1])
      (dot(o + s * 0.42 * r, o - 0.2 * r, 0.15 * r, "#ffe95a"),
        dot(o + s * 0.42 * r, o - 0.2 * r, 0.07 * r, "#120a1a"));
    (x.beginPath(),
      x.moveTo(o - 0.05 * r, o - 0.82 * r),
      x.quadraticCurveTo(o + 0.05 * r, o - 1.15 * r, o + 0.4 * r, o - 1.0 * r),
      (x.strokeStyle = "#3a2a52"),
      (x.lineWidth = lw(0.04)),
      x.stroke(),
      (x.globalCompositeOperation = "lighter"));
    const g = x.createRadialGradient(o + 0.4 * r, o - r, 0, o + 0.4 * r, o - r, 0.4 * r);
    (g.addColorStop(0, "rgba(220,255,120,.95)"),
      g.addColorStop(0.3, "rgba(190,255,90,.35)"),
      g.addColorStop(1, "rgba(190,255,90,0)"),
      (x.fillStyle = g),
      x.fillRect(0, 0, S, S),
      (x.globalCompositeOperation = "source-over"),
      dot(o + 0.4 * r, o - r, 0.07 * r, "#f6ffc0"));
  } else if (T === "vent") {
    (halo("#ff7a1a", 0.35),
      disc("#5a3a3a", "#2a1618", "#0a0507", 0.95 * r),
      clipD(),
      (x.shadowColor = "#ff7a1a"),
      (x.shadowBlur = 0.08 * r));
    for (let i = 0; i < 8; i++) {
      (x.beginPath(), x.moveTo(o + (R() * 2 - 1) * 0.15 * r, o + (R() * 2 - 1) * 0.15 * r));
      for (let k = 0; k < 3; k++) {
        const a = (i * TP) / 8 + (R() - 0.5) * 0.7,
          d = (k + 1) * 0.3 * r;
        x.lineTo(o + Math.cos(a) * d, o + Math.sin(a) * d);
      }
      ((x.strokeStyle = "#ff8a2a"), (x.lineWidth = lw(0.04)), x.stroke());
    }
    x.shadowBlur = 0;
    const g = x.createRadialGradient(o, o, 0, o, o, 0.55 * r);
    (g.addColorStop(0, "rgba(255,150,40,.8)"),
      g.addColorStop(1, "rgba(255,90,20,0)"),
      (x.fillStyle = g),
      x.fillRect(0, 0, S, S),
      x.restore());
  } else {
    (halo("#7fe6ff", 0.3), disc("#e6fbff", "#5ad8ff", "#1a4aa0"), clipD());
    for (let i = 0; i < 22; i++) {
      const p = () => [o + (R() * 2 - 1) * r, o + (R() * 2 - 1) * r],
        a = p(),
        b = p(),
        d = p();
      (x.beginPath(),
        x.moveTo(a[0], a[1]),
        x.lineTo(b[0], b[1]),
        x.lineTo(d[0], d[1]),
        x.closePath(),
        (x.fillStyle =
          R() < 0.5 ? `rgba(255,255,255,${0.08 + 0.15 * R()})` : `rgba(110,60,200,${0.08 + 0.14 * R()})`),
        x.fill(),
        (x.strokeStyle = "rgba(255,255,255,.35)"),
        (x.lineWidth = lw(0.012)),
        x.stroke());
    }
    x.restore();
  }
  const d = gfCv(S, S),
    y = d.getContext("2d");
  GFFL ? (y.translate(0, S), y.scale(1, -1), y.drawImage(c, 0, 0)) : y.drawImage(c, 0, 0);
  return d;
}
const GFM = {
  vent: 62,
  cristal: 58,
  rocher: 54,
  corail: 52,
  eponge: 52,
  dauphin: 56,
  crabe: 46,
  hippocampe: 42,
  calmar: 72,
  poissonlune: 58,
  coffre: 42,
  requin: 66,
  baleine: 100,
  orque: 80,
  raie: 62,
  tortue: 48,
  espadon: 64,
  epave: 78,
  ancre: 40,
  sousmarin: 64,
  poulpe: 46,
};
const GFSW = {
  dauphin: 1,
  crabe: 1,
  calmar: 1,
  poissonlune: 1,
  requin: 1,
  baleine: 1,
  orque: 1,
  raie: 1,
  tortue: 1,
  espadon: 1,
  sousmarin: 1,
};
const GFHR = {
  vent: 0.8,
  cristal: 0.8,
  rocher: 0.7,
  corail: 0.85,
  eponge: 0.8,
  dauphin: 0.35,
  crabe: 0.75,
  hippocampe: 0.85,
  calmar: 0.28,
  poissonlune: 0.75,
  coffre: 0.45,
  requin: 0.35,
  baleine: 0.42,
  orque: 0.45,
  raie: 0.8,
  tortue: 0.7,
  espadon: 0.3,
  epave: 0.5,
  ancre: 0.8,
  sousmarin: 0.5,
  poulpe: 0.8,
};
const GFHW = [
  [-0.6, 0, 0.2],
  [-0.3, 0, 0.28],
  [0, 0, 0.3],
  [0.35, 0, 0.26],
  [0.7, 0, 0.16],
  [-0.95, -0.1, 0.18],
  [-0.1, -0.5, 0.14],
];
const GFWH = [
  [0.65, 0.05, 0.3],
  [0.3, 0.05, 0.4],
  [-0.1, 0, 0.4],
  [-0.5, 0, 0.3],
  [-0.8, -0.02, 0.18],
  [-1.05, -0.1, 0.2],
];
const GFH = {
  dauphin: [
    [0.6, 0, 0.16],
    [0.3, 0, 0.22],
    [0, 0, 0.24],
    [-0.35, 0, 0.2],
    [-0.7, -0.02, 0.14],
    [-1, -0.12, 0.17],
    [-0.1, -0.45, 0.12],
  ],
  crabe: [
    [0, 0, 0.45],
    [-0.4, 0, 0.3],
    [0.4, 0, 0.3],
    [0.7, -0.55, 0.22],
    [-0.7, -0.55, 0.22],
  ],
  hippocampe: [
    [0.12, -0.62, 0.2],
    [0.3, -0.3, 0.17],
    [0.37, 0.05, 0.22],
    [0.2, 0.37, 0.18],
    [-0.1, 0.62, 0.12],
    [0, 0.85, 0.1],
    [0.3, 0.72, 0.1],
  ],
  corail: [
    [0, 0.6, 0.3],
    [0, 0.2, 0.28],
    [-0.3, -0.2, 0.26],
    [0.3, -0.2, 0.26],
    [-0.55, -0.55, 0.18],
    [0.55, -0.55, 0.18],
    [0, -0.55, 0.22],
  ],
  eponge: [
    [-0.62, 0.55, 0.2],
    [-0.62, 0.15, 0.17],
    [-0.2, 0.55, 0.22],
    [-0.2, 0.1, 0.2],
    [-0.2, -0.35, 0.18],
    [0.27, 0.55, 0.21],
    [0.27, 0.1, 0.19],
    [0.27, -0.15, 0.17],
    [0.66, 0.55, 0.18],
    [0.66, 0.2, 0.16],
  ],
  calmar: [
    [-0.7, 0, 0.22],
    [-0.35, 0, 0.25],
    [0, 0, 0.22],
    [0.4, 0, 0.12],
    [0.75, 0, 0.08],
  ],
  poissonlune: [
    [0, 0, 0.6],
    [0.35, 0, 0.4],
    [-0.4, 0, 0.42],
    [-0.25, -0.7, 0.15],
    [-0.25, 0.7, 0.15],
  ],
  coffre: [
    [-0.5, 0.2, 0.28],
    [0, 0.2, 0.3],
    [0.5, 0.2, 0.28],
    [0, -0.25, 0.3],
  ],
  requin: GFHW,
  baleine: GFWH,
  orque: GFWH.concat([[-0.05, -0.6, 0.15]]),
  raie: [
    [0.2, 0, 0.3],
    [-0.05, -0.4, 0.22],
    [-0.05, 0.4, 0.22],
    [-0.3, 0, 0.2],
    [-0.1, -0.7, 0.12],
    [-0.1, 0.7, 0.12],
  ],
  tortue: [
    [0, 0, 0.55],
    [0.8, 0, 0.2],
    [0.45, 0.55, 0.2],
    [0.45, -0.55, 0.2],
  ],
  espadon: [
    [-0.5, 0, 0.2],
    [-0.15, 0, 0.2],
    [0.2, 0, 0.14],
    [0.7, 0, 0.07],
    [-0.85, 0, 0.12],
  ],
  epave: [
    [-0.65, 0.1, 0.3],
    [-0.2, 0.1, 0.32],
    [0.25, 0.08, 0.32],
    [0.65, 0.05, 0.28],
    [-0.12, -0.45, 0.14],
  ],
  ancre: [
    [0, -0.2, 0.2],
    [0, 0.3, 0.2],
    [-0.45, 0.45, 0.16],
    [0.45, 0.45, 0.16],
    [0, -0.7, 0.18],
  ],
  sousmarin: [
    [-0.6, 0, 0.3],
    [-0.2, 0, 0.36],
    [0.2, 0, 0.36],
    [0.6, 0, 0.3],
    [-0.05, -0.5, 0.16],
  ],
  poulpe: [
    [0, -0.25, 0.5],
    [-0.5, 0.4, 0.2],
    [0.5, 0.4, 0.2],
    [0, 0.55, 0.2],
  ],
  vent: [
    [0, 0.65, 0.42],
    [0, 0.3, 0.3],
    [0, -0.05, 0.27],
    [0, -0.4, 0.24],
    [-0.7, 0.88, 0.3],
    [0.7, 0.88, 0.3],
  ],
  cristal: [
    [0, 0.45, 0.3],
    [0, 0, 0.3],
    [0, -0.45, 0.25],
  ],
  rocher: [
    [0, 0.45, 0.5],
    [-0.55, 0.5, 0.38],
    [0.6, 0.5, 0.4],
    [-0.3, 0, 0.4],
    [0.25, -0.1, 0.4],
    [0, -0.45, 0.28],
  ],
};
const GFHH = {
  vent: 1.1,
  cristal: 1,
  rocher: 0.9,
  corail: 1.05,
  eponge: 1,
  dauphin: 0.65,
  crabe: 0.95,
  hippocampe: 1.05,
  calmar: 0.6,
  poissonlune: 1,
  coffre: 0.65,
  requin: 0.75,
  baleine: 0.8,
  orque: 0.85,
  raie: 1,
  tortue: 0.95,
  espadon: 0.55,
  epave: 0.9,
  ancre: 1,
  sousmarin: 0.8,
  poulpe: 1.05,
};
function gfDeb(T, r, seed) {
  const R = rng(seed),
    S = Math.ceil(2.6 * r),
    c = gfCv(S, S),
    x = c.getContext("2d"),
    o = S / 2,
    TP = Math.PI * 2;
  if (T === "debc") {
    x.lineCap = "round";
    for (let i = 0; i < 3; i++) {
      const a = -1.2 + i * 1.2 + (R() - 0.5) * 0.3,
        l = r * (0.7 + 0.3 * R());
      (x.beginPath(),
        x.moveTo(o, o),
        x.lineTo(o + Math.sin(a) * l, o - Math.cos(a) * l),
        (x.strokeStyle = R() < 0.3 ? "#eadfd2" : "#ff6f91"),
        (x.lineWidth = Math.max(2, 0.3 * r)),
        x.stroke(),
        x.beginPath(),
        x.moveTo(o + Math.sin(a) * l, o - Math.cos(a) * l),
        x.lineTo(o + Math.sin(a) * (l + 0.12 * r), o - Math.cos(a) * (l + 0.12 * r)),
        (x.strokeStyle = "#f2e8dc"),
        (x.lineCap = "butt"),
        x.stroke(),
        (x.lineCap = "round"));
    }
  } else {
    x.beginPath();
    for (let i = 0; i < 8; i++) {
      const a = (i * TP) / 8,
        d = r * (0.62 + 0.38 * R());
      x.lineTo(o + Math.cos(a) * d, o + Math.sin(a) * d);
    }
    x.closePath();
    const g = x.createRadialGradient(o - 0.3 * r, o - 0.3 * r, 0.05 * r, o, o, r);
    (g.addColorStop(0, "#ffe27a"),
      g.addColorStop(0.7, "#d9a22a"),
      g.addColorStop(1, "#8a5a10"),
      (x.fillStyle = g),
      x.fill());
    for (let i = 0; i < 5; i++)
      (x.beginPath(),
        x.arc(o + (R() * 2 - 1) * 0.5 * r, o + (R() * 2 - 1) * 0.5 * r, r * (0.06 + 0.08 * R()), 0, TP),
        (x.fillStyle = "rgba(80,40,0,.4)"),
        x.fill());
  }
  return c;
}
function gfSea2(T, r, seed) {
  const R = rng(seed),
    W2 = Math.ceil(2.5 * r),
    H2 = Math.ceil(2 * r * GFHH[T]),
    c = gfCv(W2, H2),
    x = c.getContext("2d"),
    TP = Math.PI * 2;
  x.translate(W2 / 2, H2 / 2);
  const u = r,
    lw = (v) => Math.max(1.2, v * r),
    dot = (px, py, rr, col) => {
      (x.beginPath(), x.arc(px * u, py * u, rr * u, 0, TP), (x.fillStyle = col), x.fill());
    },
    ell = (px, py, rx, ry, rot, col) => {
      (x.beginPath(), x.ellipse(px * u, py * u, rx * u, ry * u, rot, 0, TP), (x.fillStyle = col), x.fill());
    },
    lg = (y0, y1, st) => {
      const g = x.createLinearGradient(0, y0 * u, 0, y1 * u);
      for (const [p, k] of st) g.addColorStop(p, k);
      return g;
    },
    bz = (...a) => x.bezierCurveTo(...a.map((v) => v * u)),
    mv = (a, b) => x.moveTo(a * u, b * u),
    ln = (a, b) => x.lineTo(a * u, b * u),
    qd = (a, b, d, e) => x.quadraticCurveTo(a * u, b * u, d * u, e * u);
  if (T === "requin") {
    (x.beginPath(),
      mv(-0.78, -0.05),
      ln(-1.12, -0.42),
      qd(-0.95, -0.05, -1.1, 0.32),
      ln(-0.78, 0.03),
      x.closePath(),
      (x.fillStyle = "#5d768e"),
      x.fill(),
      x.beginPath(),
      mv(0.1, -0.3),
      qd(-0.05, -0.6, -0.3, -0.7),
      qd(-0.3, -0.45, -0.33, -0.27),
      x.closePath(),
      (x.fillStyle = "#5d768e"),
      x.fill(),
      x.beginPath(),
      mv(0.2, 0.18),
      qd(0, 0.5, -0.25, 0.58),
      qd(-0.1, 0.3, -0.05, 0.2),
      x.closePath(),
      (x.fillStyle = "#6f8aa3"),
      x.fill(),
      x.beginPath(),
      mv(1, 0.05),
      bz(0.6, -0.3, -0.2, -0.35, -0.8, -0.08),
      ln(-0.8, 0.05),
      bz(-0.3, 0.28, 0.5, 0.32, 1, 0.05),
      x.closePath(),
      (x.fillStyle = lg(-0.33, 0.3, [
        [0, "#5d768e"],
        [0.5, "#8fa7bd"],
        [0.62, "#e8f0f5"],
        [1, "#f6fafc"],
      ])),
      x.fill());
    for (let i = 0; i < 3; i++)
      (x.beginPath(),
        mv(0.38 + i * 0.06, -0.12),
        qd(0.34 + i * 0.06, 0, 0.38 + i * 0.06, 0.1),
        (x.strokeStyle = "rgba(40,60,80,.45)"),
        (x.lineWidth = lw(0.02)),
        x.stroke());
    (dot(0.7, -0.06, 0.045, "#fff"),
      dot(0.71, -0.06, 0.025, "#0a1520"),
      x.beginPath(),
      mv(0.95, 0.1),
      qd(0.8, 0.16, 0.62, 0.1),
      (x.strokeStyle = "#2a3a4a"),
      (x.lineWidth = lw(0.02)),
      x.stroke());
  } else if (T === "baleine" || T === "orque") {
    const O = T === "orque",
      top = O ? "#14181f" : "#4a7099",
      mid = O ? "#242a33" : "#7fa5c8",
      bel = O ? "#f4f6f8" : "#dfeaf2";
    for (const s of [-1, 1])
      (x.save(),
        x.translate(-1.02 * u, s * 0.1 * u - 0.1 * u),
        x.rotate(-s * 0.55),
        x.beginPath(),
        x.ellipse(0, 0, 0.24 * u, 0.08 * u, 0, 0, TP),
        (x.fillStyle = top),
        x.fill(),
        x.restore());
    (x.beginPath(),
      mv(1, 0.1),
      bz(0.95, -0.38, 0.3, -0.52, -0.3, -0.3),
      bz(-0.6, -0.2, -0.8, -0.1, -0.95, -0.1),
      ln(-0.95, -0.02),
      bz(-0.7, 0.1, -0.5, 0.3, -0.2, 0.38),
      bz(0.3, 0.52, 0.95, 0.4, 1, 0.1),
      x.closePath(),
      (x.fillStyle = lg(-0.5, 0.5, [
        [0, top],
        [0.55, mid],
        [0.7, bel],
        [1, bel],
      ])),
      x.fill());
    if (O) {
      (ell(0.55, -0.13, 0.16, 0.07, -0.2, "#fff"),
        ell(-0.1, -0.22, 0.2, 0.1, 0, "rgba(120,130,140,.55)"),
        x.beginPath(),
        mv(0.15, -0.4),
        qd(0.05, -0.7, -0.1, -0.95),
        qd(-0.12, -0.65, -0.3, -0.35),
        x.closePath(),
        (x.fillStyle = top),
        x.fill());
    } else
      for (let i = 0; i < 7; i++)
        (x.beginPath(),
          mv(0.7 - i * 0.12, 0.2),
          qd(0.66 - i * 0.12, 0.28, 0.64 - i * 0.12, 0.36),
          (x.strokeStyle = "rgba(120,160,190,.45)"),
          (x.lineWidth = lw(0.015)),
          x.stroke());
    (x.save(),
      x.translate(0.2 * u, 0.38 * u),
      x.rotate(0.7),
      x.beginPath(),
      x.ellipse(0, 0, 0.24 * u, 0.075 * u, 0, 0, TP),
      (x.fillStyle = O ? "#242a33" : "#4f78a8"),
      x.fill(),
      x.restore(),
      dot(0.7, 0.02, 0.035, "#fff"),
      dot(0.71, 0.02, 0.02, "#0a1520"),
      x.beginPath(),
      mv(0.97, 0.16),
      qd(0.7, 0.24, 0.4, 0.2),
      (x.strokeStyle = "rgba(10,20,30,.5)"),
      (x.lineWidth = lw(0.02)),
      x.stroke());
  } else if (T === "raie") {
    (x.beginPath(),
      mv(-0.5, 0),
      ln(-1.15, 0.02),
      (x.strokeStyle = "#34506e"),
      (x.lineWidth = lw(0.04)),
      x.stroke(),
      x.beginPath(),
      mv(0.75, 0),
      bz(0.5, -0.35, 0.2, -0.7, -0.1, -0.95),
      bz(-0.25, -0.6, -0.45, -0.3, -0.5, 0),
      bz(-0.45, 0.3, -0.25, 0.6, -0.1, 0.95),
      bz(0.2, 0.7, 0.5, 0.35, 0.75, 0),
      x.closePath(),
      (x.fillStyle = lg(-0.9, 0.9, [
        [0, "#2c4a6e"],
        [0.5, "#4a7099"],
        [1, "#2c4a6e"],
      ])),
      x.fill());
    for (const s of [-1, 1])
      (x.beginPath(),
        mv(0.78, s * 0.1),
        qd(0.95, s * 0.2, 0.88, s * 0.32),
        (x.strokeStyle = "#2c4a6e"),
        (x.lineWidth = lw(0.07)),
        (x.lineCap = "round"),
        x.stroke());
    for (let i = 0; i < 9; i++) dot(-0.3 + R() * 0.7, (R() * 2 - 1) * 0.45, 0.03, "rgba(255,255,255,.55)");
    (dot(0.5, -0.1, 0.035, "#fff"), dot(0.5, 0.1, 0.035, "#fff"));
  } else if (T === "tortue") {
    for (const [px, py, rx, ry, rt] of [
      [0.45, -0.6, 0.28, 0.1, -0.7],
      [0.45, 0.6, 0.28, 0.1, 0.7],
      [-0.45, -0.45, 0.2, 0.08, 0.6],
      [-0.45, 0.45, 0.2, 0.08, -0.6],
      [-0.85, 0, 0.15, 0.06, 0],
    ])
      ell(px, py, rx, ry, rt, "#5aa874");
    (ell(0.82, 0, 0.22, 0.18, 0, "#6dbb86"),
      dot(0.9, -0.07, 0.03, "#102a20"),
      dot(0.9, 0.07, 0.03, "#102a20"));
    const g = x.createRadialGradient(-0.1 * u, -0.15 * u, 0.05 * u, 0, 0, 0.62 * u);
    (g.addColorStop(0, "#b6a05a"),
      g.addColorStop(0.6, "#7a8a3a"),
      g.addColorStop(1, "#3a5a28"),
      x.beginPath(),
      x.ellipse(0, 0, 0.62 * u, 0.52 * u, 0, 0, TP),
      (x.fillStyle = g),
      x.fill(),
      (x.strokeStyle = "rgba(40,50,20,.55)"),
      (x.lineWidth = lw(0.03)));
    for (const [px, py] of [
      [0, 0],
      [0.3, -0.2],
      [0.3, 0.2],
      [-0.3, -0.2],
      [-0.3, 0.2],
    ]) {
      x.beginPath();
      for (let i = 0; i < 6; i++)
        x.lineTo((px + Math.cos((i * TP) / 6) * 0.2) * u, (py + Math.sin((i * TP) / 6) * 0.2) * u);
      (x.closePath(), x.stroke());
    }
  } else if (T === "espadon") {
    (x.beginPath(),
      mv(0.4, 0),
      ln(1.5, 0),
      (x.strokeStyle = "#9fb4c8"),
      (x.lineWidth = lw(0.045)),
      (x.lineCap = "round"),
      x.stroke(),
      x.beginPath(),
      mv(-0.85, 0),
      ln(-1.15, -0.3),
      qd(-1, 0, -1.15, 0.3),
      ln(-0.85, 0),
      (x.fillStyle = "#3a5a84"),
      x.fill(),
      x.beginPath(),
      mv(0.2, -0.18),
      qd(-0.2, -0.7, -0.55, -0.5),
      qd(-0.4, -0.3, -0.35, -0.2),
      x.closePath(),
      (x.fillStyle = "#2a4a78"),
      x.fill(),
      x.beginPath(),
      mv(0.45, 0),
      bz(0.25, -0.25, -0.4, -0.27, -0.9, -0.04),
      ln(-0.9, 0.04),
      bz(-0.4, 0.2, 0.25, 0.2, 0.45, 0),
      x.closePath(),
      (x.fillStyle = lg(-0.25, 0.2, [
        [0, "#2a4a78"],
        [0.55, "#6f9ad0"],
        [0.65, "#e6f0fa"],
        [1, "#e6f0fa"],
      ])),
      x.fill(),
      dot(0.25, -0.05, 0.04, "#fff"),
      dot(0.26, -0.05, 0.022, "#0a1520"));
  } else if (T === "poulpe") {
    const body = "#c25a9a";
    for (let i = 0; i < 8; i++) {
      const a0 = Math.PI * (0.15 + (0.7 * i) / 7),
        sx = (i - 3.5) * 0.13,
        sd = i < 4 ? -1 : 1;
      (x.beginPath(), mv(sx, -0.05));
      for (let k = 1; k <= 10; k++) {
        const p = k / 10;
        ln(
          sx + sd * p * 0.5 * (0.4 + Math.abs(i - 3.5) / 3.5) + Math.sin(p * 5 + i) * 0.08,
          -0.05 + p * 0.95,
        );
      }
      ((x.strokeStyle = body), (x.lineWidth = lw(0.13 - 0.08 * 0)), (x.lineCap = "round"), x.stroke());
      for (let k = 2; k < 9; k += 2) {
        const p = k / 10;
        dot(
          sx + sd * p * 0.5 * (0.4 + Math.abs(i - 3.5) / 3.5) + Math.sin(p * 5 + i) * 0.08,
          -0.05 + p * 0.95,
          0.022,
          "rgba(255,220,240,.8)",
        );
      }
    }
    const g = x.createRadialGradient(-0.15 * u, -0.5 * u, 0.05 * u, 0, -0.25 * u, 0.6 * u);
    (g.addColorStop(0, "#ff9ad0"),
      g.addColorStop(0.6, body),
      g.addColorStop(1, "#6a1a5a"),
      x.beginPath(),
      x.ellipse(0, -0.25 * u, 0.5 * u, 0.55 * u, 0, 0, TP),
      (x.fillStyle = g),
      x.fill());
    for (const s of [-1, 1]) (dot(s * 0.2, -0.12, 0.12, "#fff"), dot(s * 0.2 + 0.02, -0.1, 0.06, "#1a0a20"));
    for (let i = 0; i < 6; i++) dot((R() * 2 - 1) * 0.3, -0.5 + R() * 0.3, 0.03, "rgba(255,200,230,.4)");
  } else if (T === "epave") {
    for (let i = 0; i < 3; i++) dot(-0.15 + i * 0.0, -0.1, 0, "#000");
    (x.beginPath(),
      mv(-0.12, -0.12),
      ln(-0.18, -0.78),
      (x.strokeStyle = "#4a3220"),
      (x.lineWidth = lw(0.06)),
      x.stroke(),
      x.beginPath(),
      mv(-0.5, -0.55),
      ln(0.25, -0.62),
      x.stroke(),
      x.beginPath(),
      mv(-0.45, -0.55),
      ln(-0.2, -0.5),
      ln(-0.3, -0.2),
      ln(-0.12, -0.15),
      ln(-0.1, -0.12),
      x.closePath(),
      (x.fillStyle = "rgba(200,190,160,.5)"),
      x.fill(),
      x.beginPath(),
      mv(-0.95, -0.05),
      ln(0.95, -0.18),
      ln(0.72, 0.38),
      ln(-0.7, 0.42),
      x.closePath(),
      (x.fillStyle = lg(-0.2, 0.4, [
        [0, "#7a5636"],
        [0.6, "#4a3220"],
        [1, "#24160c"],
      ])),
      x.fill(),
      (x.strokeStyle = "rgba(0,0,0,.35)"),
      (x.lineWidth = lw(0.02)));
    for (let i = 1; i < 4; i++)
      (x.beginPath(), mv(-0.9 + i * 0.02, -0.05 + i * 0.1), ln(0.9 - i * 0.05, -0.17 + i * 0.14), x.stroke());
    for (let i = 0; i < 4; i++)
      (dot(-0.5 + i * 0.35, 0.12, 0.07, "#101a24"), dot(-0.5 + i * 0.35, 0.12, 0.07 * 0.55, "#2a4a6a"));
    for (let i = 0; i < 7; i++)
      dot(-0.9 + R() * 1.8, -0.12 + R() * 0.1, 0.07 + R() * 0.08, "rgba(60,150,90,.55)");
  } else if (T === "ancre") {
    ((x.strokeStyle = lg(-0.8, 0.8, [
      [0, "#7a8794"],
      [1, "#3a444e"],
    ])),
      (x.lineCap = "round"),
      (x.lineWidth = lw(0.13)),
      x.beginPath(),
      mv(0, -0.62),
      ln(0, 0.55),
      x.stroke(),
      x.beginPath(),
      mv(-0.38, -0.45),
      ln(0.38, -0.45),
      x.stroke(),
      x.beginPath(),
      x.arc(0, 0.2 * u, 0.62 * u, 0.12 * Math.PI, 0.88 * Math.PI),
      x.stroke());
    for (const s of [-1, 1])
      (x.beginPath(),
        mv(s * 0.6, 0.52),
        ln(s * 0.82, 0.3),
        ln(s * 0.38, 0.34),
        x.closePath(),
        (x.fillStyle = "#4a5560"),
        x.fill());
    (x.beginPath(),
      x.arc(0, -0.76 * u, 0.15 * u, 0, TP),
      (x.lineWidth = lw(0.07)),
      (x.strokeStyle = "#6f7d8a"),
      x.stroke());
    for (let i = 0; i < 6; i++)
      dot((R() * 2 - 1) * 0.4, -0.5 + R() * 1.1, 0.05 + 0.05 * R(), "rgba(60,150,90,.5)");
  } else if (T === "sousmarin") {
    (x.beginPath(),
      mv(-0.2, -0.38),
      ln(-0.2, -0.62),
      ln(0.1, -0.62),
      ln(0.1, -0.38),
      x.closePath(),
      (x.fillStyle = "#e0a800"),
      x.fill(),
      x.beginPath(),
      mv(-0.05, -0.62),
      ln(-0.05, -0.85),
      ln(0.3, -0.85),
      (x.strokeStyle = "#9a7000"),
      (x.lineWidth = lw(0.05)),
      x.stroke());
    for (let i = 0; i < 3; i++) {
      (x.save(),
        x.translate(-0.98 * u, 0),
        x.rotate((i * TP) / 3),
        x.beginPath(),
        x.ellipse(0, -0.17 * u, 0.05 * u, 0.17 * u, 0, 0, TP),
        (x.fillStyle = "#8a6a10"),
        x.fill(),
        x.restore());
    }
    const g = x.createLinearGradient(0, -0.38 * u, 0, 0.38 * u);
    (g.addColorStop(0, "#ffe55a"),
      g.addColorStop(0.5, "#f2b800"),
      g.addColorStop(1, "#b07a00"),
      x.beginPath(),
      x.ellipse(0, 0, 0.92 * u, 0.38 * u, 0, 0, TP),
      (x.fillStyle = g),
      x.fill());
    for (const px of [-0.45, -0.05, 0.35])
      (dot(px, -0.02, 0.12, "#fff0b0"),
        dot(px, -0.02, 0.085, "#4aa8e0"),
        dot(px - 0.02, -0.05, 0.025, "rgba(255,255,255,.9)"));
  } else if (T === "dauphin") {
    for (const s of [-1, 1])
      (x.save(),
        x.translate(-1 * u, s * 0.08 * u),
        x.rotate(-s * 0.5),
        x.beginPath(),
        x.ellipse(0, 0, 0.2 * u, 0.07 * u, 0, 0, TP),
        (x.fillStyle = "#5f7f9c"),
        x.fill(),
        x.restore());
    (x.beginPath(),
      mv(0, -0.33),
      qd(-0.1, -0.62, -0.32, -0.68),
      qd(-0.26, -0.45, -0.28, -0.3),
      x.closePath(),
      (x.fillStyle = "#5f7f9c"),
      x.fill(),
      x.beginPath(),
      mv(1.05, 0.05),
      bz(0.9, -0.04, 0.7, -0.32, 0.3, -0.34),
      bz(-0.2, -0.34, -0.6, -0.2, -0.9, -0.04),
      ln(-0.9, 0.04),
      bz(-0.5, 0.2, 0.1, 0.32, 0.5, 0.22),
      bz(0.75, 0.14, 0.9, 0.1, 1.05, 0.05),
      x.closePath(),
      (x.fillStyle = lg(-0.34, 0.3, [
        [0, "#4a6a88"],
        [0.5, "#7fa0bc"],
        [0.62, "#eaf2f8"],
        [1, "#f6fafc"],
      ])),
      x.fill(),
      x.save(),
      x.translate(0.3 * u, 0.24 * u),
      x.rotate(0.8),
      x.beginPath(),
      x.ellipse(0, 0, 0.22 * u, 0.06 * u, 0, 0, TP),
      (x.fillStyle = "#5f7f9c"),
      x.fill(),
      x.restore(),
      dot(0.62, -0.04, 0.035, "#fff"),
      dot(0.63, -0.04, 0.02, "#0a1520"),
      x.beginPath(),
      mv(1.02, 0.08),
      qd(0.85, 0.12, 0.68, 0.08),
      (x.strokeStyle = "rgba(10,20,30,.5)"),
      (x.lineWidth = lw(0.02)),
      x.stroke());
  } else if (T === "crabe") {
    ((x.strokeStyle = "#b8342a"), (x.lineWidth = lw(0.06)), (x.lineCap = "round"));
    for (let i = 0; i < 3; i++)
      for (const s of [-1, 1])
        (x.beginPath(),
          mv(s * 0.3, 0.05 + i * 0.12),
          ln(s * (0.62 + 0.08 * i), 0.0 + i * 0.2),
          ln(s * (0.78 + 0.1 * i), 0.22 + i * 0.2),
          x.stroke());
    for (const s of [-1, 1]) {
      (x.beginPath(),
        mv(s * 0.38, -0.22),
        ln(s * 0.55, -0.5),
        ln(s * 0.7, -0.55),
        (x.lineWidth = lw(0.09)),
        x.stroke(),
        ell(s * 0.78, -0.7, 0.2, 0.17, s * 0.4, "#e04a3a"),
        x.beginPath(),
        mv(s * 0.8, -0.8),
        ln(s * 0.9, -0.95),
        ln(s * 0.68, -0.86),
        x.closePath(),
        (x.fillStyle = "#e04a3a"),
        x.fill());
    }
    const g = x.createRadialGradient(-0.15 * u, -0.12 * u, 0.05 * u, 0, 0, 0.55 * u);
    (g.addColorStop(0, "#ff8a6a"),
      g.addColorStop(0.6, "#e04a3a"),
      g.addColorStop(1, "#8a1a1a"),
      x.beginPath(),
      x.ellipse(0, 0, 0.52 * u, 0.4 * u, 0, 0, TP),
      (x.fillStyle = g),
      x.fill());
    for (const s of [-1, 1])
      (x.beginPath(),
        mv(s * 0.13, -0.35),
        ln(s * 0.15, -0.5),
        (x.strokeStyle = "#b8342a"),
        (x.lineWidth = lw(0.04)),
        x.stroke(),
        dot(s * 0.15, -0.52, 0.06, "#fff"),
        dot(s * 0.15, -0.53, 0.03, "#101010"));
    for (let i = 0; i < 5; i++) dot((R() * 2 - 1) * 0.3, (R() * 2 - 1) * 0.22, 0.03, "rgba(255,220,200,.35)");
  } else if (T === "hippocampe") {
    const bez = (p, t) => {
        const m = 1 - t;
        return [
          m * m * m * p[0][0] + 3 * m * m * t * p[1][0] + 3 * m * t * t * p[2][0] + t * t * t * p[3][0],
          m * m * m * p[0][1] + 3 * m * m * t * p[1][1] + 3 * m * t * t * p[2][1] + t * t * t * p[3][1],
        ];
      },
      SP = [
        [
          [0.1, -0.45],
          [0.45, -0.2],
          [0.45, 0.3],
          [0.05, 0.45],
        ],
        [
          [0.05, 0.45],
          [-0.3, 0.6],
          [-0.2, 0.95],
          [0.15, 0.88],
        ],
        [
          [0.15, 0.88],
          [0.4, 0.82],
          [0.38, 0.62],
          [0.22, 0.62],
        ],
      ],
      RD = [
        [0.17, 0.24, 0.15],
        [0.15, 0.1, 0.08],
        [0.08, 0.06, 0.04],
      ];
    ell(-0.2, 0.05, 0.07, 0.22, 0.15, "rgba(255,215,140,.55)");
    for (let i = 0; i < 6; i++)
      (x.beginPath(),
        mv(-0.12, -0.05 + i * 0.08),
        ln(-0.3, -0.12 + i * 0.08),
        (x.strokeStyle = "rgba(255,200,110,.6)"),
        (x.lineWidth = lw(0.012)),
        x.stroke());
    for (let sg = 0; sg < 3; sg++)
      for (let i = 0; i <= 40; i++) {
        const t = i / 40,
          pt = bez(SP[sg], t),
          rd =
            sg === 0
              ? t < 0.55
                ? RD[0][0] + ((RD[0][1] - RD[0][0]) * t) / 0.55
                : RD[0][1] + ((RD[0][2] - RD[0][1]) * (t - 0.55)) / 0.45
              : RD[sg][0] + (RD[sg][2] - RD[sg][0]) * t,
          g = x.createRadialGradient(
            (pt[0] + rd * 0.35) * u,
            (pt[1] - rd * 0.3) * u,
            0.01 * u,
            pt[0] * u,
            pt[1] * u,
            rd * u,
          );
        (g.addColorStop(0, "#ffd89a"),
          g.addColorStop(0.55, "#f59a2a"),
          g.addColorStop(1, "#c0610a"),
          x.beginPath(),
          x.arc(pt[0] * u, pt[1] * u, rd * u, 0, TP),
          (x.fillStyle = g),
          x.fill(),
          i % 4 === 2 &&
            (x.beginPath(),
            x.arc(pt[0] * u, pt[1] * u, rd * u * 0.92, -0.8, 0.8),
            (x.strokeStyle = "rgba(150,70,10,.5)"),
            (x.lineWidth = lw(0.018)),
            x.stroke()));
      }
    (ell(0.38, -0.6, 0.24, 0.055, 0.08, "#f59a2a"),
      ell(0.13, -0.62, 0.19, 0.17, 0, "#f59a2a"),
      ell(0.1, -0.58, 0.1, 0.07, 0.3, "rgba(255,230,180,.6)"));
    for (let i = 0; i < 3; i++)
      (x.beginPath(),
        mv(0.02 + i * 0.09, -0.76),
        ln(0.04 + i * 0.09, -0.88),
        ln(0.09 + i * 0.09, -0.76),
        x.closePath(),
        (x.fillStyle = "#c0610a"),
        x.fill());
    (dot(0.17, -0.66, 0.05, "#fff"),
      dot(0.18, -0.66, 0.03, "#101010"),
      dot(0.19, -0.67, 0.01, "#fff"),
      ell(0.17, -0.45, 0.05, 0.1, -0.5, "rgba(255,215,140,.7)"));
    for (let i = 0; i < 6; i++) dot(0.15 + R() * 0.25, -0.2 + R() * 0.5, 0.018, "rgba(120,50,10,.45)");
  } else if (T === "corail") {
    const br = (px, py, a, l, wd, dp) => {
      const ex = px + Math.sin(a) * l,
        ey = py - Math.cos(a) * l;
      if (
        (x.beginPath(),
        mv(px, py),
        ln(ex, ey),
        (x.strokeStyle =
          R() < 0.18 ? "#eadfd2" : dp > 2 ? "#c8386a" : dp > 1 ? "#ff6f91" : dp > 0 ? "#ff93ae" : "#ffb4c6"),
        (x.lineWidth = Math.max(1.5, wd * u)),
        (x.lineCap = "round"),
        x.stroke(),
        dp > 0)
      ) {
        (br(ex, ey, a - 0.5 + (R() - 0.5) * 0.25, l * 0.76, wd * 0.74, dp - 1),
          br(ex, ey, a + 0.5 + (R() - 0.5) * 0.25, l * 0.76, wd * 0.74, dp - 1),
          dp > 1 && br(ex, ey, a + (R() - 0.5) * 0.3, l * 0.8, wd * 0.72, dp - 1));
      } else {
        (x.beginPath(),
          mv(ex, ey),
          ln(ex + Math.sin(a) * 0.05, ey - Math.cos(a) * 0.05),
          (x.strokeStyle = "#f2e8dc"),
          (x.lineWidth = Math.max(1.5, wd * u * 0.85)),
          (x.lineCap = "butt"),
          x.stroke(),
          (x.lineCap = "round"),
          dot(ex, ey - 0.02, 0.015, "#fff"));
      }
    };
    ell(0, 0.86, 0.55, 0.13, 0, "#7a2a4a");
    br(0, 0.86, 0, 0.5, 0.26, 3);
  } else if (T === "eponge") {
    const TB = [
      [-0.62, 0.9, 0.2, "#c8921a", "#ffe27a"],
      [-0.2, 1.4, 0.23, "#d06a1a", "#ffb866"],
      [0.27, 1.1, 0.21, "#7a3ac0", "#d6aaff"],
      [0.66, 0.7, 0.18, "#c8921a", "#ffe27a"],
    ];
    (ell(0, 0.84, 0.9, 0.14, 0, "rgba(90,60,20,.55)"),
      ell(-0.9, 0.83, 0.13, 0.07, 0.3, "#c8921a"),
      ell(0.9, 0.84, 0.1, 0.06, -0.3, "#d6a02a"));
    for (const [xx, h, w, c0, c1] of TB) {
      const g = x.createLinearGradient((xx - w) * u, 0, (xx + w) * u, 0);
      (g.addColorStop(0, c0),
        g.addColorStop(0.45, c1),
        g.addColorStop(1, c0),
        x.beginPath(),
        mv(xx - w, 0.84),
        ln(xx - w * 0.8, 0.84 - h),
        ln(xx + w * 0.8, 0.84 - h),
        ln(xx + w, 0.84),
        x.closePath(),
        (x.fillStyle = g),
        x.fill());
      for (let i = 0; i < 10; i++)
        dot(xx + (R() * 2 - 1) * w * 0.7, 0.84 - R() * h, 0.025, "rgba(60,30,0,.28)");
      (x.beginPath(), mv(xx - w * 0.8, 0.84 - h + 0.04));
      for (let k = 1; k <= 6; k++)
        ln(xx - w * 0.8 + (k * w * 1.6) / 6, 0.84 - h - (k % 2 ? 0.13 : 0.01) * (0.5 + R()));
      (ln(xx + w * 0.8, 0.84 - h + 0.06),
        x.closePath(),
        (x.fillStyle = "#fff0c0"),
        x.fill(),
        (x.strokeStyle = c0),
        (x.lineWidth = lw(0.02)),
        x.stroke(),
        x.beginPath(),
        mv(xx + (R() - 0.5) * w, 0.84 - h * 0.85),
        ln(xx + (R() - 0.5) * w, 0.84 - h * 0.6),
        ln(xx + (R() - 0.5) * w, 0.84 - h * 0.4),
        (x.strokeStyle = "rgba(60,30,0,.45)"),
        (x.lineWidth = lw(0.02)),
        x.stroke());
    }
  } else if (T === "calmar") {
    for (const s of [-1, 1])
      (x.beginPath(),
        mv(-0.95, s * 0.05),
        ln(-0.75, s * 0.5),
        ln(-0.5, s * 0.28),
        x.closePath(),
        (x.fillStyle = "#c04a68"),
        x.fill());
    (x.beginPath(),
      mv(-1.05, 0),
      bz(-0.8, -0.3, -0.3, -0.34, 0.05, -0.2),
      ln(0.05, 0.2),
      bz(-0.3, 0.34, -0.8, 0.3, -1.05, 0),
      x.closePath(),
      (x.fillStyle = lg(-0.34, 0.34, [
        [0, "#f8909e"],
        [0.5, "#e0607a"],
        [1, "#a0304e"],
      ])),
      x.fill());
    for (let i = 0; i < 10; i++) dot(-0.9 + R() * 0.9, (R() * 2 - 1) * 0.2, 0.025, "rgba(255,230,230,.5)");
    ((x.strokeStyle = "#e0607a"), (x.lineCap = "round"));
    for (let i = 0; i < 8; i++) {
      const y1 = (i - 3.5) * 0.045,
        y2 = (i - 3.5) * 0.12;
      (x.beginPath(),
        mv(0.2, y1),
        bz(0.5, y1, 0.7, y2 * 0.6, 0.95, y2),
        (x.lineWidth = lw(0.04)),
        x.stroke());
    }
    for (const s of [-1, 1]) {
      (x.beginPath(),
        mv(0.2, s * 0.04),
        bz(0.6, s * 0.1, 0.9, s * 0.02, 1.2, s * 0.12),
        (x.lineWidth = lw(0.03)),
        x.stroke(),
        ell(1.2, s * 0.12, 0.07, 0.04, 0, "#f8909e"));
    }
    (ell(0.15, 0, 0.2, 0.2, 0, "#e8708a"),
      dot(0.2, -0.13, 0.075, "#fff"),
      dot(0.21, -0.13, 0.04, "#101010"),
      dot(0.2, 0.13, 0.075, "#fff"),
      dot(0.21, 0.13, 0.04, "#101010"));
  } else if (T === "poissonlune") {
    (x.beginPath(),
      mv(-0.1, -0.6),
      bz(-0.15, -0.95, -0.4, -0.98, -0.52, -0.9),
      bz(-0.42, -0.75, -0.32, -0.65, -0.27, -0.58),
      x.closePath(),
      (x.fillStyle = "#7a8896"),
      x.fill(),
      x.beginPath(),
      mv(-0.1, 0.6),
      bz(-0.15, 0.95, -0.4, 0.98, -0.52, 0.9),
      bz(-0.42, 0.75, -0.32, 0.65, -0.27, 0.58),
      x.closePath(),
      x.fill(),
      ell(-0.82, 0, 0.1, 0.5, 0, "#8c99a6"),
      ell(0, 0, 0.84, 0.68, 0, "#b3becb"));
    const g = x.createLinearGradient(0, -0.68 * u, 0, 0.68 * u);
    (g.addColorStop(0, "#7a8896"),
      g.addColorStop(0.5, "#b3becb"),
      g.addColorStop(1, "#e4eaf0"),
      x.beginPath(),
      x.ellipse(0, 0, 0.84 * u, 0.68 * u, 0, 0, TP),
      (x.fillStyle = g),
      x.fill());
    for (let i = 0; i < 8; i++) dot((R() * 2 - 1) * 0.5, (R() * 2 - 1) * 0.4, 0.03, "rgba(70,85,100,.25)");
    (dot(0.55, -0.12, 0.06, "#fff"),
      dot(0.56, -0.12, 0.033, "#101820"),
      x.beginPath(),
      x.arc(0.8 * u, 0.04 * u, 0.05 * u, -1.2, 1.2),
      (x.strokeStyle = "#5a6876"),
      (x.lineWidth = lw(0.03)),
      x.stroke(),
      ell(0.3, 0.22, 0.14, 0.06, 0.5, "#8c99a6"));
  } else if (T === "coffre") {
    (x.beginPath(),
      mv(-0.7, 0.5),
      ln(-0.7, -0.05),
      ln(0.7, -0.05),
      ln(0.7, 0.5),
      x.closePath(),
      (x.fillStyle = lg(-0.05, 0.5, [
        [0, "#8a5a30"],
        [1, "#4a2e16"],
      ])),
      x.fill(),
      x.beginPath(),
      mv(-0.7, -0.05),
      ln(-0.7, -0.28),
      bz(-0.7, -0.75, 0.7, -0.75, 0.7, -0.28),
      ln(0.7, -0.05),
      x.closePath(),
      (x.fillStyle = lg(-0.7, -0.05, [
        [0, "#a06a38"],
        [1, "#6a4020"],
      ])),
      x.fill(),
      (x.fillStyle = "#e0b030"));
    for (const px of [-0.5, 0.4]) x.fillRect(px * u, -0.58 * u, 0.12 * u, 1.08 * u);
    (x.fillRect(-0.7 * u, -0.1 * u, 1.4 * u, 0.07 * u),
      x.fillRect(-0.09 * u, -0.04 * u, 0.18 * u, 0.24 * u),
      dot(0, 0.08, 0.03, "#4a2e16"));
    for (let i = 0; i < 6; i++) dot(0.4 + R() * 0.5, 0.5 - R() * 0.08, 0.06, "#ffd24a");
    for (let i = 0; i < 5; i++)
      dot(-0.7 + R() * 1.4, -0.05 + R() * 0.5, 0.05 + 0.05 * R(), "rgba(60,150,90,.5)");
  } else if (T === "vent") {
    const tp = -0.5,
      bs = 0.98;
    ell(0, 0.92, 1.18, 0.2, 0, "rgba(0,0,0,.28)");
    (x.beginPath(),
      mv(-1.15, bs),
      bz(-0.95, 0.78, -0.7, 0.7, -0.42, 0.62),
      ln(0.42, 0.62),
      bz(0.7, 0.7, 0.95, 0.8, 1.15, bs),
      x.closePath(),
      (x.fillStyle = lg(0.6, bs, [
        [0, "#4a3a36"],
        [1, "#171110"],
      ])),
      x.fill());
    (x.beginPath(), mv(-0.46, 0.74), ln(-0.3, 0.2));
    for (let i = 0; i < 6; i++) ln(-0.3 + 0.04 * (R() - 0.5) + i * 0.015, 0.2 - i * 0.12 + 0.03 * R());
    (ln(-0.22, tp + 0.03), ln(-0.1, tp - 0.02), ln(0.08, tp + 0.02), ln(0.2, tp - 0.01), ln(0.26, tp + 0.03));
    for (let i = 0; i < 6; i++) ln(0.27 + i * 0.02 + 0.04 * (R() - 0.5), tp + 0.1 + i * 0.12);
    (ln(0.46, 0.74), x.closePath());
    const gg = x.createLinearGradient(-0.4 * u, 0, 0.4 * u, 0);
    (gg.addColorStop(0, "#6a5650"),
      gg.addColorStop(0.4, "#33282a"),
      gg.addColorStop(1, "#0e0a0b"),
      (x.fillStyle = gg),
      x.fill(),
      x.save(),
      x.clip());
    for (let i = 0; i < 7; i++) {
      const yy = 0.62 - i * 0.17 + 0.04 * R();
      (x.beginPath(),
        mv(-0.5, yy),
        bz(-0.2, yy + 0.05, 0.2, yy - 0.03, 0.5, yy + 0.02),
        (x.strokeStyle = i % 2 ? "rgba(190,120,40,.5)" : "rgba(230,200,150,.3)"),
        (x.lineWidth = lw(0.035 + 0.03 * R())),
        x.stroke());
    }
    for (let i = 0; i < 10; i++)
      ell(
        -0.35 + R() * 0.7,
        tp + 0.15 + R() * 1.05,
        0.05 + 0.04 * R(),
        0.02 + 0.03 * R(),
        0,
        i % 3 ? "rgba(0,0,0,.4)" : "rgba(210,120,40,.35)",
      );
    (x.restore(),
      ell(0, tp, 0.27, 0.075, 0, "#171011"),
      ell(0, tp + 0.005, 0.2, 0.045, 0, "#ff6a20"),
      ell(0, tp + 0.01, 0.12, 0.026, 0, "#ffd070"));
    for (let i = 0; i < 9; i++) {
      const bx = -1 + R() * 2,
        by = 0.82 + 0.1 * R(),
        hh = 0.14 + 0.14 * R();
      (x.beginPath(),
        mv(bx - 0.025, by),
        ln(bx - 0.02, by - hh),
        ln(bx + 0.02, by - hh),
        ln(bx + 0.025, by),
        x.closePath(),
        (x.fillStyle = "#efe6dc"),
        x.fill(),
        ell(bx, by - hh, 0.032, 0.016, 0, "#e8412a"));
    }
  } else if (T === "cristal") {
    const k = Math.floor(seed / 997) % 3,
      C = [
        ["#e9dbff", "#b48cff", "#7a4ad8", "#4a24a0"],
        ["#d6f4ff", "#7fd0ff", "#3f8fe0", "#2450a8"],
        ["#ffd6f0", "#ff8ad0", "#c04aa0", "#7a2a78"],
      ][k],
      G = ["190,140,255", "127,208,255", "255,138,208"][k];
    x.globalCompositeOperation = "lighter";
    const gl = x.createRadialGradient(0, 0, 0.1 * u, 0, 0, 1.15 * u);
    (gl.addColorStop(0, `rgba(${G},.4)`),
      gl.addColorStop(1, `rgba(${G},0)`),
      (x.fillStyle = gl),
      x.fillRect(-W2 / 2, -H2 / 2, W2, H2),
      (x.globalCompositeOperation = "source-over"));
    const cr = (bx, by, an, ln_, wd) => {
      (x.save(), x.translate(bx * u, by * u), x.rotate(an));
      const w = wd / 2,
        hh = ln_ * 0.76;
      (x.beginPath(),
        mv(-w, 0),
        ln(-w, -hh),
        ln(0, -ln_),
        ln(0, 0),
        x.closePath(),
        (x.fillStyle = lg(-ln_, 0, [
          [0, C[0]],
          [1, C[1]],
        ])),
        x.fill(),
        x.beginPath(),
        mv(w, 0),
        ln(w, -hh),
        ln(0, -ln_),
        ln(0, 0),
        x.closePath(),
        (x.fillStyle = lg(-ln_, 0, [
          [0, C[2]],
          [1, C[3]],
        ])),
        x.fill(),
        x.beginPath(),
        mv(-w, -hh),
        ln(0, -ln_),
        ln(0, -hh - 0.04),
        x.closePath(),
        (x.fillStyle = "rgba(255,255,255,.5)"),
        x.fill(),
        x.beginPath(),
        mv(-w * 0.55, -0.04),
        ln(-w * 0.55, -hh * 0.85),
        (x.strokeStyle = "rgba(255,255,255,.55)"),
        (x.lineWidth = lw(0.018)),
        x.stroke(),
        x.restore());
    };
    cr(0, 0.78, 0, 1.56, 0.6);
    for (let i = 0; i < 4; i++)
      dot(-0.3 + R() * 0.6, -0.5 + R() * 1, 0.015 + 0.015 * R(), "rgba(255,255,255,.7)");
  } else if (T === "rocher") {
    ell(0, 0.82, 1.1, 0.16, 0, "rgba(0,0,0,.28)");
    const pts = [
      [-1.1, 0.85],
      [-1.0, 0.35],
      [-0.7, -0.1],
      [-0.35, -0.55],
      [0.05, -0.8],
      [0.45, -0.6],
      [0.8, -0.2],
      [1.05, 0.3],
      [1.12, 0.85],
    ];
    (x.beginPath(), mv(pts[0][0], pts[0][1]));
    for (const p of pts) ln(p[0] + 0.04 * (R() - 0.5), p[1] + 0.04 * (R() - 0.5));
    (x.closePath(),
      (x.fillStyle = lg(-0.8, 0.85, [
        [0, "#93a3b4"],
        [0.5, "#566678"],
        [1, "#232d3a"],
      ])),
      x.fill(),
      x.save(),
      x.clip());
    const fc = [
        [
          [-0.35, -0.55],
          [0.05, -0.8],
          [0.45, -0.6],
          [0.1, -0.2],
        ],
        "#a9b8c8",
      ],
      fd = [
        [
          [0.45, -0.6],
          [0.8, -0.2],
          [1.05, 0.3],
          [0.5, 0.1],
          [0.1, -0.2],
        ],
        "#76879a",
      ],
      fe = [
        [
          [-0.7, -0.1],
          [-0.35, -0.55],
          [0.1, -0.2],
          [-0.2, 0.25],
          [-0.8, 0.3],
        ],
        "#6a7b8e",
      ],
      ff = [
        [
          [-0.2, 0.25],
          [0.1, -0.2],
          [0.5, 0.1],
          [0.4, 0.85],
          [-0.3, 0.85],
        ],
        "#46566a",
      ];
    for (const [P, cl] of [fc, fd, fe, ff]) {
      (x.beginPath(), mv(P[0][0], P[0][1]));
      for (const q of P) ln(q[0], q[1]);
      (x.closePath(),
        (x.fillStyle = cl),
        (x.globalAlpha = 0.55),
        x.fill(),
        (x.globalAlpha = 1),
        (x.strokeStyle = "rgba(10,16,24,.5)"),
        (x.lineWidth = lw(0.02)),
        x.stroke());
    }
    for (let i = 0; i < 4; i++) {
      (x.beginPath(),
        mv(-0.8 + R() * 1.6, -0.3 + R() * 0.9),
        ln(-0.8 + R() * 1.6, -0.3 + R() * 0.9),
        (x.strokeStyle = "rgba(10,16,24,.4)"),
        (x.lineWidth = lw(0.02)),
        x.stroke());
    }
    x.restore();
    for (let i = 0; i < 10; i++) {
      const px = -0.7 + R() * 1.4,
        py = 0.1 + R() * 0.7;
      dot(px, py, 0.025 + 0.02 * R(), "rgba(235,230,215,.7)");
    }
    for (let i = 0; i < 7; i++) {
      const px = -0.8 + R() * 1.6,
        py = -0.35 + R() * 0.6;
      (x.beginPath(),
        mv(px, py),
        qd(px + 0.05, py - 0.18, px - 0.02, py - 0.3),
        (x.strokeStyle = "rgba(60,160,100,.75)"),
        (x.lineWidth = lw(0.03)),
        (x.lineCap = "round"),
        x.stroke());
    }
  }
  const out = gfCv(W2, H2);
  out.getContext("2d").drawImage(c, 0, 0);
  return out;
}
function gfAnim(c, e, t, T) {
  const sp = e.spr,
    w = sp.width,
    h = sp.height,
    ty = e.t,
    p = e.ph,
    r = e.r,
    JL = { meduse: 1, medusb: 1, medusv: 1, poulpe: 0.5 },
    WV = {
      requin: [2.4, 0.11, 1.7],
      baleine: [1.3, 0.1, 2],
      orque: [1.9, 0.1, 1.8],
      espadon: [3, 0.07, 1.5],
      dauphin: [3, 0.14, 1.7],
      calmar: [2.4, 0.06, 1.6],
      poissonlune: [1.8, 0.05, 1.2],
    },
    ROT = {
      crabe: [0.05, 5],
      hippocampe: [0.1, 1.2],
      coffre: [0.015, 0.7],
      ballon: [0.18, 0.7],
      etoile: [0.12, 0.9],
      oursin: [0.15, 0.8],
      epave: [0.03, 0.7],
      ancre: [0.06, 0.8],
      sousmarin: [0.03, 1.3],
      mine: [0.05, 0.9],
      globe: [0.06, 1.5],
      baudroie: [0.04, 1],
    };
  (c.save(), c.translate(e.x, t), e.flip && c.scale(-1, 1), e.rw && c.rotate(e.rw));
  if (e.deb) (c.rotate(T * (0.8 + (p % 1)) + 3 * p), c.drawImage(sp, -w / 2, -h / 2));
  else if (JL[ty]) {
    const q = JL[ty];
    let u = (T * 0.85 + p / 6.283) % 1,
      k = u < 0.28 ? u / 0.28 : 1 - (u - 0.28) / 0.72;
    ((k = k * k * (3 - 2 * k)),
      c.translate(0, -k * 0.07 * r * q),
      c.scale(1 - 0.1 * k * q, 1 + 0.06 * k * q));
    for (let y = 0; y < h; y += 2) {
      const fr = Math.max(0, (y - 0.42 * h) / (0.58 * h)),
        dx =
          (Math.sin(T * 2.1 + 0.07 * y + p - 2 * k) * 0.07 * r +
            Math.sin(T * 1.3 + 0.13 * y + p * 2) * 0.03 * r) *
          Math.pow(fr, 1.4);
      c.drawImage(sp, 0, y, w, 2, -w / 2 + dx, y - h / 2, w, 2);
    }
  } else if ("corail" === ty || "eponge" === ty) {
    const q = "corail" === ty ? 1 : 0.6;
    for (let y = 0; y < h; y += 2) {
      const fr = Math.pow(Math.max(0, (0.9 * h - y) / (0.9 * h)), 1.4),
        dx = Math.sin(T * 1.1 + 0.03 * y + p) * 0.045 * r * fr * q;
      c.drawImage(sp, 0, y, w, 2, -w / 2 + dx, y - h / 2, w, 2);
    }
  } else if (WV[ty]) {
    const [sf, am, wl] = WV[ty],
      tt = T * sf * 1.6 + p;
    c.rotate(0.025 * Math.sin(tt + 1.2) + 0.012 * Math.sin(T * 0.5 + p));
    for (let x = 0; x < w; x += 2) {
      const d = 1 - x / w,
        dy =
          Math.sin(tt + (wl * 3.4 * x) / w) * am * r * Math.pow(d, 1.8) +
          ("calmar" === ty && x > 0.62 * w ? Math.sin(T * 6 + 0.2 * x) * 0.03 * r * (x / w - 0.6) : 0);
      c.drawImage(sp, x, 0, 2, h, -w / 2 + x, -h / 2 + dy, 2, h);
    }
  } else if ("raie" === ty) {
    const tt = T * 1.9 + p;
    (c.translate(0, 0.03 * r * Math.sin(tt * 0.5)),
      c.rotate(0.025 * Math.sin(tt * 0.5)),
      c.scale(1, 1 + 0.07 * Math.sin(tt)),
      c.drawImage(sp, -w / 2, -h / 2));
  } else if ("tortue" === ty) {
    const tt = T * 1.4 + p;
    (c.rotate(0.05 * Math.sin(tt * 0.6)),
      c.translate(0, 0.025 * r * Math.sin(tt)),
      c.scale(1 + 0.02 * Math.sin(tt * 1.3), 1 + 0.02 * Math.sin(tt * 1.3 + 1)),
      c.drawImage(sp, -w / 2, -h / 2));
  } else {
    const q = ROT[ty];
    (q && c.rotate(q[0] * Math.sin(T * q[1] + p)),
      ("globe" === ty || "oursin" === ty || "mine" === ty) && c.scale(e.sc || 1, e.sc || 1),
      c.drawImage(sp, -w / 2, -h / 2));
  }
  c.restore();
}
function gfAlb() {
  try {
    return JSON.parse(localStorage.getItem("nds-gfalb") || "[]");
  } catch (e) {
    return [];
  }
}
function gfAlbAdd(p) {
  try {
    const a = gfAlb();
    (a.unshift(p), localStorage.setItem("nds-gfalb", JSON.stringify(a.slice(0, 16))));
  } catch (e) {}
}
function gfXm() {
  try {
    return sxOn();
  } catch (e) {
    return !1;
  }
}
function gfXB() {
  return GFTH === "mer" ? 6 : 3;
}
function gfXs() {
  const s = st.get("gf:st", {}) || {};
  let n = 0;
  for (let i = 101; i <= 110; i++) n += s[i] | 0;
  return n;
}
function gfTs() {
  const s = st.get("gf:st", {}) || {};
  return Object.keys(s).reduce((a, k) => a + (+k <= 100 ? s[k] | 0 : 0), 0);
}
function gfXn() {
  const s = st.get("gf:st", {}) || {};
  for (let i = 1; i <= 10; i++) if (!(s[100 + i] | 0)) return i;
  return 1;
}
function gfXPanel(ss) {
  const x = gfXn();
  let h =
    "<h3>Fêtes <small>★ " +
    gfXs() +
    '/30</small></h3><div class="gfwh cur"><b>Monde de Noël</b><span>10 niveaux · tous rejouables</span></div><div class="gflg">';
  for (let t = 1; t <= 10; t++) {
    const n = ss[100 + t] | 0;
    h += `<button class="lv ${n ? "d" : t === x ? "nx" : ""}${10 === t ? " bs" : ""}" style="--i:${t - 1}" data-a="gfStory" data-v="${100 + t}" aria-label="Fêtes ${t}">${t}<em>${[1, 2, 3].map((i) => `<i${i <= n ? ' class="on"' : ""}>★</i>`).join("")}</em></button>`;
  }
  return h + "</div>";
}
let GFXN = null;
const GFXBIO = {
  n: "Monde de Noël",
  bg: ["#0e5a40", "#5e0f22"],
  neb: ["#ff6a6a", "#7affa0", "#ffe08a", "#ff9ad0"],
  pl: ["boulenoel", "cadeau", "canne", "flocon", "sapin", "boulenoel", "cadeau"],
};
const GFXWK = {
  n: "Tempête de Noël",
  d: "Des rafales te poussent de côté et des cadeaux, des boules et des cannes dévalent vers toi. Frôle les flocons !",
  z: "cu",
  p: 0.55,
  rain: 1,
};
setTimeout(() => {
  (Object.assign(GFM, { boulenoel: 56, cadeau: 54, canne: 58, flocon: 62, sapin: 72 }),
    Object.assign(GFHR, { boulenoel: 0.8, cadeau: 0.75, canne: 0.7, flocon: 0.72, sapin: 0.62 }),
    (GFBT[10] = "sapin"),
    (GFBN[10] = "Le Grand Sapin"),
    (GFBC[10] = "120,255,150"));
}, 0);
const GFXS = (() => {
  const mk = (r, f) => {
      const S = Math.ceil(2.8 * r),
        c = gfCv(S, S),
        x = c.getContext("2d"),
        o = S / 2;
      f(x, o, r);
      return c;
    },
    TP = Math.PI * 2,
    PAL = [
      ["#ffd0d4", "#ff4a5a", "#8a0a1e"],
      ["#d0e8ff", "#4a8aff", "#0a2a8a"],
      ["#fff0b0", "#ffc23a", "#a06a08"],
      ["#d8ffd8", "#3ac86a", "#0a5a2a"],
    ];
  return {
    boulenoel: (r, sd) =>
      mk(r, (x, o, r) => {
        const p = PAL[(sd | 0) % 4],
          g = x.createRadialGradient(o - 0.3 * r, o - 0.3 * r, 0.05 * r, o, o + 0.05 * r, 0.95 * r);
        (g.addColorStop(0, p[0]),
          g.addColorStop(0.45, p[1]),
          g.addColorStop(1, p[2]),
          x.beginPath(),
          x.arc(o, o + 0.08 * r, 0.9 * r, 0, TP),
          (x.fillStyle = g),
          x.fill(),
          (x.strokeStyle = "rgba(255,255,255,.55)"),
          (x.lineWidth = 0.07 * r),
          x.beginPath(),
          x.ellipse(o, o + 0.08 * r, 0.9 * r, 0.32 * r, 0, 0, TP),
          x.stroke(),
          x.beginPath(),
          x.ellipse(o, o + 0.08 * r, 0.34 * r, 0.9 * r, 0, 0, TP),
          x.stroke(),
          (x.fillStyle = "#ffd25a"),
          x.fillRect(o - 0.16 * r, o - 0.92 * r, 0.32 * r, 0.2 * r),
          x.beginPath(),
          x.arc(o, o - 1.0 * r, 0.12 * r, 0, TP),
          (x.strokeStyle = "#ffd25a"),
          (x.lineWidth = 0.06 * r),
          x.stroke(),
          x.beginPath(),
          x.ellipse(o - 0.32 * r, o - 0.3 * r, 0.16 * r, 0.09 * r, -0.6, 0, TP),
          (x.fillStyle = "rgba(255,255,255,.7)"),
          x.fill());
      }),
    cadeau: (r, sd) =>
      mk(r, (x, o, r) => {
        const p = PAL[((sd | 0) + 1) % 4];
        (x.translate(o, o + 0.05 * r), x.rotate((((sd | 0) % 7) - 3) * 0.09));
        const s = 0.76 * r,
          g = x.createLinearGradient(-s, -s, s, s);
        (g.addColorStop(0, p[1]),
          g.addColorStop(1, p[2]),
          (x.fillStyle = g),
          x.fillRect(-s, -s, 2 * s, 2 * s),
          (x.fillStyle = "#ffe08a"),
          x.fillRect(-0.14 * r, -s, 0.28 * r, 2 * s),
          x.fillRect(-s, -0.14 * r, 2 * s, 0.28 * r),
          (x.fillStyle = "#ffd25a"));
        for (const m of [-1, 1])
          (x.beginPath(),
            x.ellipse(m * 0.22 * r, -s - 0.1 * r, 0.24 * r, 0.15 * r, m * 0.5, 0, TP),
            x.fill());
        (x.beginPath(), x.arc(0, -s - 0.04 * r, 0.1 * r, 0, TP), (x.fillStyle = "#fff2b0"), x.fill());
      }),
    canne: (r, sd) =>
      mk(r, (x, o, r) => {
        x.translate(o - 0.1 * r, o + 0.05 * r);
        const P = () => {
          (x.beginPath(),
            x.moveTo(-0.3 * r, 0.9 * r),
            x.lineTo(-0.3 * r, -0.3 * r),
            x.arc(0.1 * r, -0.3 * r, 0.4 * r, Math.PI, 0, !1),
            x.lineTo(0.5 * r, -0.05 * r));
        };
        ((x.lineCap = "round"),
          (x.lineJoin = "round"),
          P(),
          (x.strokeStyle = "#fff"),
          (x.lineWidth = 0.34 * r),
          x.stroke(),
          x.save(),
          x.setLineDash([0.15 * r, 0.15 * r]),
          (x.lineCap = "butt"),
          P(),
          (x.strokeStyle = "#e8283a"),
          (x.lineWidth = 0.34 * r),
          x.stroke(),
          x.restore(),
          P(),
          (x.strokeStyle = "rgba(255,255,255,.35)"),
          (x.lineWidth = 0.07 * r),
          x.stroke());
      }),
    flocon: (r, sd) =>
      mk(r, (x, o, r) => {
        const g = x.createRadialGradient(o, o, 0.1 * r, o, o, 1.3 * r);
        (g.addColorStop(0, "rgba(190,235,255,.45)"),
          g.addColorStop(1, "rgba(190,235,255,0)"),
          (x.fillStyle = g),
          x.fillRect(0, 0, 2.8 * r, 2.8 * r),
          x.translate(o, o),
          (x.strokeStyle = "#e6f7ff"),
          (x.lineCap = "round"),
          (x.lineWidth = 0.09 * r));
        for (let i = 0; i < 6; i++) {
          (x.save(),
            x.rotate((i * TP) / 6),
            x.beginPath(),
            x.moveTo(0, 0),
            x.lineTo(0, -0.95 * r),
            x.stroke());
          for (const k of [0.45, 0.7]) {
            (x.beginPath(),
              x.moveTo(0, -k * r),
              x.lineTo(-0.22 * r, -(k + 0.2) * r),
              x.moveTo(0, -k * r),
              x.lineTo(0.22 * r, -(k + 0.2) * r),
              x.stroke());
          }
          x.restore();
        }
        (x.beginPath(), x.arc(0, 0, 0.14 * r, 0, TP), (x.fillStyle = "#fff"), x.fill());
      }),
    sapin: (r, sd) =>
      mk(r, (x, o, r) => {
        x.translate(o, o);
        ((x.fillStyle = "#6a3a1a"), x.fillRect(-0.12 * r, 0.72 * r, 0.24 * r, 0.26 * r));
        const T = [
          [0.6, -0.15, 0.55],
          [0.3, 0.28, 0.68],
          [0, 0.72, 0.82],
        ];
        for (let i = 0; i < 3; i++) {
          const y0 = -0.95 * r + i * 0.5 * r,
            w = (0.5 + 0.22 * i) * r,
            g = x.createLinearGradient(0, y0, 0, y0 + 0.75 * r);
          (g.addColorStop(0, "#3ac86a"),
            g.addColorStop(1, "#0e5a2a"),
            x.beginPath(),
            x.moveTo(0, y0),
            x.lineTo(w, y0 + 0.75 * r),
            x.lineTo(-w, y0 + 0.75 * r),
            x.closePath(),
            (x.fillStyle = g),
            x.fill(),
            x.beginPath(),
            x.moveTo(0, y0),
            x.lineTo(0.34 * w, y0 + 0.26 * r),
            x.lineTo(-0.34 * w, y0 + 0.26 * r),
            x.closePath(),
            (x.fillStyle = "rgba(255,255,255,.85)"),
            x.fill());
        }
        const C = ["#ff4a5a", "#ffd25a", "#6ab8ff", "#ff8ad8"];
        for (let i = 0; i < 8; i++)
          (x.beginPath(),
            x.arc((((i * 37) % 11) / 11 - 0.5) * 1.1 * r, -0.2 * r + (i % 4) * 0.3 * r, 0.07 * r, 0, TP),
            (x.fillStyle = C[i % 4]),
            x.fill());
        x.beginPath();
        for (let i = 0; i < 10; i++) {
          const a = -Math.PI / 2 + (i * Math.PI) / 5,
            d = i % 2 ? 0.1 * r : 0.24 * r;
          x.lineTo(Math.cos(a) * d, -1.05 * r + Math.sin(a) * d);
        }
        (x.closePath(), (x.fillStyle = "#ffd25a"), x.fill());
      }),
  };
})();
function gfHub() {
  (GF.race && rcOff(), (GF.race = null), (GF.zen = 0));
  const lv = Math.min(100, st.get("gf:lv", 0)),
    nx = Math.min(100, lv + 1),
    XM = gfXm(),
    xn0 = gfXn(),
    w = XM ? gfXB() : Math.floor((nx - 1) / 10),
    B0 = GFTH === "mer" ? GFBM : GFB,
    wn = XM ? "Monde de Noël" : B0[w % B0.length].n + (w >= B0.length ? " II" : ""),
    b = 0;
  ((GF.sk = gfSkId()),
    (GF.sl = 0),
    (GF.lb = 1),
    (GF.lw = w),
    gfStop(),
    (cur = "galac"),
    nv("games"),
    theme("galac"),
    ($("#nav").hidden = !0),
    (GFW = w % 10),
    (app.innerHTML = `<div class="gfw" id="gfw"><canvas id="gfc" aria-label="Galacfish"></canvas><div class="gfhud" style="display:none"><div class="gfd"><i>${GFTH === "mer" ? "●" : "✦"}</i><b id="gfdu">0</b><small id="gffl">0 🫧</small></div><div class="gfm"><b id="gfdi">0 m</b><small id="gfbe"></small></div><button class="gfb" data-a="gfPause" aria-label="Pause"><svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg></button></div><div class="gfcb" id="gfcb" hidden><small id="gfmu">x2</small><b id="gfco">0</b></div><div class="gfbn" id="gfbn"></div><div class="gfov" id="gfov"></div>
 <div class="gflt">${bk("home")}<div class="gflw">${XM ? "" : "Monde " + (w + 1) + " · "}${esc(wn)}</div><div class="chip">🫧 ${FLX()}</div></div>
 <div class="gflc">${XM ? `<button class="gfl-p gfl-big" data-a="gfStory" data-v="${100 + xn0}">Jouer Fêtes ${xn0}</button>` : gfRkOn() ? `<button class="gfl-p gfl-big" data-a="gfRank">Mode Rank${st.get("gf:rkb", 0) ? " · " + st.get("gf:rkb", 0) + " m" : ""}</button>` : `<button class="gfl-p gfl-big" data-a="gfStory" data-v="${nx}">Jouer le niveau ${nx}</button>`}<button class="gfl-b gfl-n" data-a="gfLv" aria-label="Choisir un niveau"><b>${XM ? "Fêtes " + xn0 : "Niveau " + nx} ▾</b><small><i>★</i> ${XM ? gfXs() + "/30" : gfTs() + "/300"}</small></button></div>
 
 <div class="gflside">${XM || gfRkOn() ? "" : '<button class="gfl-i" style="--c:#b69cff" data-a="gfInf" aria-label="Mode infini"><svg class="infic" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12c0-2.5 2-4 4-4 4 0 6 8 10 8 2 0 4-1.5 4-4s-2-4-4-4c-4 0-6 8-10 8-2 0-4-1.5-4-4z"/></svg><span>Infini</span></button>'}<button class="gfl-i" style="--c:#5ef2c4" data-a="gfZen" aria-label="Mode zen"><svg class="infic" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9c3-3 6 3 9 0s6 3 9 0M3 15c3-3 6 3 9 0s6 3 9 0"/></svg><span>Zen</span></button><button class="gfl-i" style="--c:#ff9a6b" data-a="gfRc" aria-label="Course en ligne">${IC_MP}<span>Social</span></button><button class="gfl-i gfsk" style="--c:#7fe0ff" data-a="gfSk" aria-label="Choisir ton poisson"><svg class="infic" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12c4-6 11-6 14 0-3 6-10 6-14 0zM17 12l4-4v8z"/></svg><span>Poisson</span></button></div><div class="gflbr"><button class="gfl-i" style="--c:#ff8ad8" data-a="gfRu" aria-label="Règles"><svg class="infic" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5V5.5M9 8h7M9 12h5"/></svg><span>Règles</span></button><button class="gfl-i" style="--c:#9ad4ff" data-a="gfAm" aria-label="Almanach des ennemis"><svg class="infic" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11a3 3 0 013 3v13H8a3 3 0 01-3-3zM5 17a3 3 0 013-3h11"/></svg><span>Almanach</span></button><button class="gfl-i" style="--c:#ffd86b" data-a="infBd" data-v="galac" aria-label="Classement">${IC_LB}<span>Top</span></button></div>
 <div class="gflp" id="gflp" hidden></div></div>`),
    window.scrollTo(0, 0),
    gfGame(),
    gfEm(),
    $("#gfw").addEventListener("pointerdown", (e) => {
      const p = $("#gflp");
      p && !p.hidden && !e.target.closest(".gflp,button") && gfCls(p);
    }),
    GF.rcOpp &&
      (() => {
        const o = GF.rcOpp;
        ((GF.rcOpp = 0),
          setTimeout(() => {
            (act.gfRc(), RCS.m || setTimeout(() => act.gfRcAc(o), 400));
          }, 300));
      })());
}
function gfHubOld() {
  (gfStop(),
    st.get("gf:best", 0) > 0 && !infBest("galac") && infSave("galac", st.get("gf:best", 0)),
    (cur = "galac"),
    nv("games"),
    theme("galac"));
  const T = ALL.find((e) => "galac" === e.id) || { id: "galac", t: "La nage cosmique" },
    b = Math.max(st.get("gf:best", 0), infBest("galac")),
    d = st.get("gf:bd", 0),
    n = st.get("gf:n", 0),
    lv = Math.min(100, st.get("gf:lv", 0)),
    BS0 = GFTH === "mer" ? GFBM : GFB,
    gw = (GFW = Math.min(9, Math.floor(lv / 10))),
    wn = (w) => BS0[w % BS0.length].n + (w >= BS0.length ? " II" : ""),
    go = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  ((app.innerHTML = `<div class="top stk">${bk("home")}<div class="chip">🫧 ${FLX()}</div></div><details class="glass story pt-galac gdet"${!1 !== window.GDO ? " open" : ""}><summary><i>${gSv(T)}</i><h2>${GFTH === "mer" ? "La grande plongée" : "La nage cosmique"}</h2><span class="gdc" aria-hidden="true"></span></summary><p>${GFTH === "mer" ? "Un petit poisson plonge de la surface jusqu’aux profondeurs de l’océan. Garde ton doigt sur l’écran et glisse : il nage vers ton doigt. Esquive les obstacles, frôle-les pour enchaîner les combos et ramasse les perles : 10 perles = 1 🫧. Plus tu descends, plus l’océan devient mystérieux !" : "Un petit poisson s’est perdu entre les étoiles. Garde ton doigt sur l’écran et glisse : il nage vers ton doigt. Esquive les planètes, frôle-les pour enchaîner les combos et ramasse les poussières de bulles : 10 poussières = 1 🫧. Le voyage ne s’arrête jamais, va le plus loin possible !"}</p></details><div class="opts"><section class="rc rcx pt-galac" data-g="${T.ic || "🐟"}"><div class="rc-ic">${gSv(T)}</div><div class="rc-t"><small>${lv ? "Continuer" : "Commencer"}</small><b>${lv >= 100 ? "Histoire terminée !" : "Niveau " + (lv + 1)}</b><span>${lv ? lv + " niveau" + (lv > 1 ? "x" : "") + " terminé" + (lv > 1 ? "s" : "") : "Aucun niveau terminé"} · Monde ${Math.min(10, Math.floor(lv / 10) + 1)} · ${esc(wn(Math.min(9, Math.floor(lv / 10))))}</span></div><button class="rc-go" data-a="gfStory" data-v="${Math.min(100, lv + 1)}">Jouer${go}</button><div class="rcx-b"><div class="rcx-r"><div class="rcx-t"><small>Mode infini</small><span>${b ? "Record : " + b + " m" : "Pas encore de record"}${n ? " · " + n + " voyage" + (n > 1 ? "s" : "") : ""}</span></div><button class="rc-go" data-a="infGo" data-v="galac">Jouer ∞</button><button class="rcx-lb" data-a="infBd" data-v="galac" aria-label="Classement">${IC_LB}</button></div></div><div class="dd pt-galac${lvOpen ? " open" : ""}"><button class="dd-h" data-a="dd" aria-expanded="${lvOpen}" aria-controls="lvl"><span><b>Choisir un niveau</b><small>${lv} / 100 terminés</small></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button><div class="dd-l" id="lvl"><div class="dd-i"><div class="lvg">${Array.from(
    { length: 100 },
    (_, t) => {
      const L = t + 1;
      return `<button class="lv ${L <= lv ? "d" : L === lv + 1 ? "nx" : "far"}" data-a="gfStory" data-v="${L}" aria-label="Niveau ${L}${L <= lv ? ", terminé" : ""}">${L}</button>`;
    },
  ).join("")}</div></div></div></div></section></div>`),
    window.scrollTo(0, 0));
}
function gfStop() {
  ((GF.run = 0), cancelAnimationFrame(GF.raf), GF.cl && GF.cl(), (GF.cl = null));
  const n = $("#nav");
  n && (n.hidden = !1);
}
const GFAT = { meduse: 50, medusb: 50, medusv: 50, baudroie: 75 };
const GFCH = { requin: 170, orque: 150, espadon: 230, dauphin: 140, raie: 90 };
const GFRF = { crabe: 130, poulpe: 110, hippocampe: 100 };
const GFBT = [
  "dauphin",
  "tortue",
  "crabe",
  "raie",
  "epave",
  "requin",
  "espadon",
  "baleine",
  "baudroie",
  "calmar",
];
const GFBN = [
  "Le Grand Dauphin",
  "La Tortue Ancienne",
  "Le Crabe Roi",
  "La Raie Géante",
  "Le Spectre de l’Épave",
  "Le Grand Requin",
  "L’Espadon Fou",
  "La Baleine Colossale",
  "Le Roi des Abysses",
  "Le Kraken",
];
const GFBC = [
  "255,120,90",
  "90,220,170",
  "255,170,60",
  "255,120,200",
  "170,255,120",
  "120,200,255",
  "255,230,90",
  "160,150,255",
  "120,255,200",
  "255,70,70",
];
const GFWK = [
  { n: "Courants de surface", d: "Des courants te poussent de côté.", z: "cu", p: 0.4 },
  { n: "Colonnes de bulles", d: "Traverse-les pour accélérer.", z: "bu", p: 0.5 },
  { n: "Forêts d’algues", d: "Elles te ralentissent.", z: "al", p: 0.5 },
  { n: "Tourbillons", d: "Ils t’aspirent : contourne-les.", z: "to", p: 0.5 },
  {
    n: "Brouillard",
    d: "Des nappes de brume épaisse t’aveuglent presque : retiens ce que tu as vu.",
    fog: 0.3,
    z: "fg",
    p: 0.4,
  },
  { n: "Nappes glacées", d: "Dans les nappes glacées, ton poisson répond plus lentement.", z: "ic", p: 0.3 },
  { n: "Éboulements", d: "Des rochers dévalent vers toi.", rain: 1 },
  { n: "Eaux sombres", d: "Seule la lueur autour de toi éclaire.", night: 0.6 },
  { n: "Noir des abysses", d: "Presque noir ; des bulles t’aident.", night: 0.78, z: "bu", p: 0.35 },
  {
    n: "Battements du magma",
    d: "Le courant accélère et ralentit au rythme des pulsations rouges.",
    night: 0.4,
    z: "pu",
    p: 0.5,
  },
];
const GFOC = {};
function gfOrb(r, col) {
  const k = "orb" + Math.round(r) + col;
  return (
    GFOC[k] ||
    (GFOC[k] = (() => {
      const n = Math.ceil(4.4 * r),
        c = gfCv(n, n),
        g = c.getContext("2d"),
        o = n / 2,
        q = g.createRadialGradient(o, o, 0, o, o, o);
      (q.addColorStop(0, "rgba(255,255,255,1)"),
        q.addColorStop(0.22, `rgba(${col},1)`),
        q.addColorStop(0.5, `rgba(${col},.45)`),
        q.addColorStop(1, `rgba(${col},0)`),
        (g.fillStyle = q),
        g.fillRect(0, 0, n, n));
      return c;
    })())
  );
}
const RCS = {};
const rcIds = () => Math.random().toString(36).slice(2, 10);
const rcGid = (o, u) => [SO.uid, o].sort().join("_") + "_r" + u;
function rcClean(r) {
  try {
    if (
      !r ||
      "object" != typeof r ||
      "gfr" !== r.k ||
      !/^[a-z0-9]{1,16}$/.test(r.id || "") ||
      !["ch", "ok", "run", "end", "fin", "x"].includes(r.st)
    )
      return null;
    const N = Number.isFinite;
    if (
      !N(r.d) ||
      r.d < 0 ||
      r.d > 6e3 ||
      !N(r.t) ||
      !N(r.at) ||
      !N(r.seed) ||
      r.seed < 1 ||
      r.seed > 1e9 ||
      !N(r.w) ||
      r.w < 0 ||
      r.w > 9 ||
      !N(r.goal) ||
      r.goal < 300 ||
      r.goal > 3e3
    )
      return null;
    if ("fin" === r.st && !N(r.ft)) return null;
    return r;
  } catch (e) {
    return null;
  }
}
async function rcPut(p) {
  const m = RCS.m;
  if (!m) return;
  Object.assign(m, p, { t: Date.now() });
  const d = await scrDb();
  if (!d) return;
  for (let i = 0; i < 3; i++) {
    try {
      await d.collection("sc").doc(RCS.gid).set(m);
      return;
    } catch (e) {
      await new Promise((r) => setTimeout(r, 1500 * (i + 1)));
    }
  }
}
function rcOff() {
  try {
    RCS.un && RCS.un();
  } catch (e) {}
  ((RCS.un = null), clearInterval(RCS.iv), (RCS.iv = 0));
}
async function rcWatch() {
  rcOff();
  const d = await scrDb();
  if (!d) return;
  const id = RCS.id;
  ((RCS.un = d
    .collection("sc")
    .doc(RCS.gidO)
    .onSnapshot(
      (s) => {
        if (!s || !s.exists || RCS.id !== id) return;
        const r = rcClean(s.data());
        r && r.id === id && ((RCS.o = r), (RCS.ot = Date.now()), rcCheck());
      },
      () => {},
    )),
    clearInterval(RCS.iv),
    (RCS.iv = setInterval(rcCheck, 1e3)));
}
function rcStart() {
  ((GF.race = RCS), (GF.nx = 0), (GF.zn = 0), (RCS.md = 0), (RCS.done = 0), gfPlay());
}
function rcCheck() {
  const o = RCS.o,
    m = RCS.m;
  if (!m || !o) return;
  if (!RCS.go && "ch" === RCS.role && "ok" === o.st && "ch" === m.st) {
    ((RCS.go = 1), rcStart());
    return;
  }
  if (!RCS.go || RCS.done) return;
  const md = RCS.md | 0,
    stale = "run" === o.st && RCS.ot && Date.now() - RCS.ot > 25e3,
    oE = "end" === o.st || "fin" === o.st || "x" === o.st || stale,
    oF = "fin" === o.st,
    mE = "end" === m.st || "fin" === m.st,
    mF = "fin" === m.st;
  let r = null;
  (mF && oF
    ? (r = m.ft <= o.ft ? "w" : "l")
    : mF
      ? (r = "w")
      : oF
        ? (r = "l")
        : mE
          ? o.d > m.d
            ? (r = "l")
            : oE && (r = m.d > o.d ? "w" : m.d === o.d ? "t" : "l")
          : oE && md > o.d && (r = "w"),
    r && rcEnd(r));
}
function rcEnd(r) {
  if (RCS.done) return;
  ((RCS.done = r), GF.rcStop && GF.rcStop());
  let g = 0;
  if ("w" === r) {
    g = dmR("galac", 10);
    g > 0 && scrGain(g);
  }
  const o = RCS.o || { d: 0 },
    e = document.getElementById("gfov");
  (e &&
    ((e.innerHTML = `<div class="gfgo"><small>${"w" === r ? "Victoire !" : "t" === r ? "Égalité" : "Défaite"}</small><h2>${RCS.md | 0} m · ${o.d | 0} m</h2><p>Toi · ${esc(scrNm(RCS.opp))}</p>${"w" === r ? `<div class="gfgs"><div><b>+${g} 🫧</b><span>bulles gagnées</span></div></div>` : ""}<button class="btn" data-a="gfRcAgain">Revanche</button><button class="btn alt" data-a="gfQuit">Quitter</button></div>`),
    e.classList.add("on")),
    sfx("w" === r ? 880 : 200, 0.5),
    vib([30, 40, 30]));
}
function rcWaitUI() {
  const e = $("#gfrl");
  e &&
    (e.innerHTML = `<p class="note">Défi envoyé à <b>${esc(scrNm(RCS.opp))}</b>. La course démarre dès qu’il l’accepte (il doit ouvrir Galacfish).</p><button class="btn alt" data-a="gfRcX">Annuler</button>`);
}
async function rcList(n) {
  const e = $("#gfrl");
  if (!e) return;
  if ("ch" === RCS.role && RCS.id && !RCS.go && RCS.m && "ch" === RCS.m.st) return rcWaitUI();
  const a = st.get("soc:me", null);
  if (!(SO.uid && SO.got && a && a.code)) {
    ((e.innerHTML = `<p class="note">${"na" === SO.st ? "Connecte-toi dans l’onglet Social pour défier tes amis." : "Un instant…"}</p>`),
      "na" === SO.st || SO.col || "conn" === SO.st || socInit(),
      n < 8 && setTimeout(() => rcList(n + 1), 1500));
    return;
  }
  const F = Object.keys(a.fr || {}).filter((k) => a.fr[k] > 0 && SO.P[k]);
  if (!F.length) {
    e.innerHTML = '<p class="note">Ajoute un ami dans l’onglet Social pour le défier.</p>';
    return;
  }
  const d = await scrDb();
  if (!d) return;
  const now = Date.now(),
    rows = await Promise.all(
      F.slice(0, 10).map(async (k) => {
        let th = null,
          mi = null;
        try {
          const s = await d.collection("sc").doc(rcGid(k, k)).get();
          s.exists && (th = rcClean(s.data()));
        } catch (x) {}
        try {
          const s = await d.collection("sc").doc(rcGid(k, SO.uid)).get();
          s.exists && (mi = rcClean(s.data()));
        } catch (x) {}
        return {
          k,
          inv: th && "ch" === th.st && now - th.at < 9e5 && (!mi || mi.id !== th.id),
          sent: mi && "ch" === mi.st && now - mi.at < 9e5 && (!th || th.id !== mi.id),
        };
      }),
    ),
    el = $("#gfrl");
  el &&
    ((h) => {
      el.dataset.h !== h && ((el.dataset.h = h), (el.innerHTML = h));
    })(
      rows
        .map(({ k, inv, sent }) => {
          const ac = inv ? "gfRcAc" : sent ? "gfRcWt" : "gfRcCh";
          return `<div class="fr-i"><button class="fr-o" data-a="${ac}" data-v="${esc(k)}">${socAv(k)}<span class="fr-t"><b>${esc(scrNm(k))}</b><small>${inv ? "T’a défié !" : sent ? "Défi envoyé" : "Course de 1 000 m"}</small></span></button><div class="fr-b"><button class="sb${inv ? " buy" : ""}" data-a="${ac}" data-v="${esc(k)}">${inv ? "Relever" : sent ? "Attendre" : "Défier"}</button></div></div>`;
        })
        .join(""),
    );
}
function rcFresh() {
  for (const k of Object.keys(RCS)) delete RCS[k];
}
function rcBar() {
  const g = $("#gfw");
  g.classList.add("gfrace");
  const d = document.createElement("div");
  ((d.className = "gfrc"),
    (d.innerHTML = '<div id="gfrt"></div><div class="gfrb"><i id="gfro"></i><i id="gfrm"></i></div>'),
    g.appendChild(d));
}
let GFO = null;
function gfBtn(k) {
  return document.querySelector(
    {
      m: "[data-a=gfAm]",
      l: ".gfl-n",
      a: "[data-a=gfAl]",
      r: "[data-a=gfRc]",
      t: "[data-a=infBd]",
      f: "[data-a=gfSk]",
      u: "[data-a=gfRu]",
    }[k] || "x",
  );
}
function gfOrg(el, k) {
  const b = gfBtn(k) || null,
    P = el.offsetParent || document.body,
    pr = P.getBoundingClientRect(),
    L = pr.left + P.clientLeft + el.offsetLeft,
    T = pr.top + P.clientTop + el.offsetTop;
  if (b) {
    const q = b.getBoundingClientRect();
    return [q.left + q.width / 2 - L, q.top + q.height / 2 - T];
  }
  return GFO ? [GFO.x - L, GFO.y - T] : [el.offsetWidth / 2, el.offsetHeight];
}
function gfInfOut(t) {
  if (!t) {
    infLbBtn(!1);
    return;
  }
  if (!$("#gfw") || t.classList.contains("gfz")) {
    t.classList.contains("gfz") || (t.remove(), infLbBtn(!1));
    return;
  }
  const b = t.querySelector(".infb");
  if (b) {
    const o = gfOrg(b, "t");
    (t.style.setProperty("--ox", o[0] + "px"), t.style.setProperty("--oy", o[1] + "px"));
  }
  (t.classList.remove("gfo"), t.classList.add("gfz"), infLbBtn(!1), setTimeout(() => t.remove(), 250));
}
function gfEm() {
  const p = $("#gflp");
  if (!window.GFMO) {
    window.GFMO = 1;
    document.addEventListener(
      "pointerdown",
      (e) => {
        const b = e.target.closest && e.target.closest(".gfl-i,.gfl-n");
        if (b) {
          const r = b.getBoundingClientRect();
          GFO = { x: r.left + r.width / 2, y: r.top + r.height / 2, t: performance.now() };
        }
      },
      !0,
    );
    (new MutationObserver((ms) => {
      for (const m of ms)
        for (const n of m.addedNodes)
          if (n.id === "infd" && $("#gfw") && GFO && performance.now() - GFO.t < 1500) {
            const b = n.querySelector(".infb");
            if (!b) continue;
            const o = gfOrg(b, "t");
            n.style.setProperty("--ox", o[0] + "px");
            n.style.setProperty("--oy", o[1] + "px");
            n.classList.add("gfo");
            setTimeout(() => n.classList.remove("gfo"), 700);
          }
    }).observe(document.body, { childList: !0 }),
      document.addEventListener(
        "click",
        (e) => {
          if (!$("#gfw")) return;
          const b = e.target.closest && e.target.closest("button");
          if (!b) return;
          const p = $("#gflp"),
            d = $("#infd.infd"),
            po = p && !p.hidden && !p.classList.contains("out"),
            dO = d && !d.classList.contains("gfz");
          if ((!po && !dO) || b.closest("#gflp,#infd")) return;
          (e.stopPropagation(), e.preventDefault(), po && gfCls(p), dO && gfInfOut(d));
        },
        !0,
      ),
      document.addEventListener("click", (e) => {
        const t = e.target;
        t && t.classList && t.classList.contains("infd") && $("#gfw") && gfInfOut(t);
      }));
  }
  p &&
    new MutationObserver((ms) => {
      if (!ms.some((m) => m.oldValue !== p.getAttribute(m.attributeName))) return;
      if (p.hidden || p.classList.contains("out")) return;
      const o = gfOrg(p, p.dataset.k);
      p.style.transformOrigin = o[0] + "px " + o[1] + "px";
      gfDim(p, 1);
      p.style.animation = "none";
      void p.offsetWidth;
      p.style.animation = "";
    }).observe(p, { attributes: !0, attributeOldValue: !0, attributeFilter: ["hidden", "data-k"] });
}
function gfDim(p, on) {
  const w = $("#gfw");
  w && w.classList.toggle("gfdim", !!on && !p.hidden && /^[arfm]$/.test(p.dataset.k));
}
const GFAL = [
  ["meduse", "Méduse", "Flotte au gré des courants et se rapproche doucement de toi. Garde tes distances."],
  ["medusb", "Méduse bleue", "Même dérive que sa cousine : elle glisse lentement vers ton poisson."],
  ["medusv", "Méduse violette", "La plus lumineuse. Elle suit ta trajectoire en ondulant."],
  ["baudroie", "Baudroie", "Poisson des profondeurs : attirée par ta lueur, elle avance vers toi."],
  ["requin", "Requin", "Rapide, il se déporte pour se placer sur ta route."],
  ["orque", "Orque", "Chasseuse tenace : elle te prend en chasse sur les côtés."],
  ["espadon", "Espadon", "Le plus vif des chasseurs : il fonce de côté pour t’intercepter."],
  ["dauphin", "Dauphin", "Joueur mais imprévisible : il nage vers ta position."],
  ["raie", "Raie", "Grande envergure, glisse lentement vers toi."],
  ["crabe", "Crabe", "Peureux : il s’écarte vivement quand tu approches."],
  ["poulpe", "Poulpe", "Il bat en retraite dès que tu t’en approches."],
  ["hippocampe", "Hippocampe", "Timide, il s’éloigne de toi en ondulant."],
  ["oursin", "Oursin", "Il se hérisse et gonfle quand tu passes près de lui."],
  ["mine", "Mine", "Elle gonfle quand elle te sent approcher. Ne la touche pas."],
  ["globe", "Poisson-globe", "Il s’enfle et se dégonfle en rythme : surveille sa taille."],
  [
    "vent",
    "Cheminée volcanique",
    "Crache un jet brûlant à intervalles réguliers : passe entre deux éruptions.",
  ],
  ["calmar", "Calmar", "Il balaie l’écran d’un côté à l’autre."],
  ["poissonlune", "Poisson-lune", "Énorme et placide, il traverse lentement l’écran."],
  ["baleine", "Baleine", "Immense : elle occupe presque toute la largeur en nageant."],
  ["tortue", "Tortue", "Lente et massive, elle traverse l’écran d’un bord à l’autre."],
  ["sousmarin", "Sous-marin", "Machine rouillée qui patrouille d’un côté à l’autre."],
  ["cristal", "Cristal", "Flocon de glace flottant, il tourne sur lui-même."],
  ["rocher", "Rocher", "Immobile et solide : contourne-le."],
  ["corail", "Corail", "Fixé au récif, il laisse échapper des débris qui dérivent."],
  ["eponge", "Éponge", "Elle relâche des bulles et des débris qui montent vers toi."],
  ["coffre", "Coffre", "Vieux coffre englouti, ballotté par le courant."],
  ["epave", "Épave", "Ce qui reste d’un navire. Des courants rôdent autour."],
  ["ancre", "Ancre", "Lourde et rouillée, elle se balance doucement."],
  ["ballon", "Ballon", "Léger et rebondi, il dérive au gré des remous."],
  ["etoile", "Étoile de mer", "Elle tourne lentement sur elle-même."],
  ["boulenoel", "Boule de Noël", "Dévale vers toi en brillant, de toutes les couleurs."],
  ["cadeau", "Cadeau", "Joli paquet, mais mieux vaut ne pas l’ouvrir en nageant."],
  ["canne", "Canne en sucre", "Rayée et collante, elle tombe en tournoyant."],
  ["flocon", "Flocon", "Un flocon géant. Frôle-le pour enchaîner les combos."],
  ["sapin", "Sapin", "Un petit sapin qui dévale la tempête de Noël."],
];
const GFAB = [
  [
    "dauphin",
    "Le Grand Dauphin",
    "Recule, puis charge tête première : esquive sa trajectoire rouge. Il lance aussi des bulles visées.",
  ],
  ["tortue", "La Tortue Ancienne", "Lente et massive : murs de bulles avec une brèche, et pluie de bulles."],
  ["crabe", "Le Crabe Roi", "Lance ses pinces depuis chaque bord de l’écran et des murs de bulles."],
  ["raie", "La Raie Géante", "Plonge en piqué sur toi et déploie des vagues en éventail."],
  ["epave", "Le Spectre de l’Épave", "Envoie des âmes qui te poursuivent, et un anneau d’ondes."],
  ["requin", "Le Grand Requin", "Fonce droit sur toi, puis tire des jets visés."],
  ["espadon", "L’Espadon Fou", "Charge ultra-rapide et éventails d’épées."],
  ["baleine", "La Baleine Colossale", "Son chant crée des anneaux d’ondes et des vagues décalées."],
  [
    "baudroie",
    "Le Roi des Abysses",
    "Lance des leurres lumineux qui te poursuivent, entourés d’anneaux de lumière.",
  ],
  ["calmar", "Le Kraken", "Tentacules des deux côtés, encre, mines guidées et charges."],
  ["sapin", "Le Grand Sapin", "Pluie de boules, éventails de cannes et cadeaux guidés."],
];
const GFAI = {};
function gfAlmImg(t) {
  if (GFAI[t]) return GFAI[t];
  let u = "";
  try {
    u = gfSea(t, 64, 0).toDataURL("image/png");
  } catch (e) {}
  return (GFAI[t] = u);
}
function gfAlmR() {
  const p = $("#gflp");
  if (!p) return;
  if (!window.__gfo) {
    window.__gfo = 1;
    document.addEventListener(
      "pointerdown",
      (ev) => {
        const q = $("#gflp");
        q &&
          !q.hidden &&
          "m" === q.dataset.k &&
          !q.contains(ev.target) &&
          !(ev.target.closest && ev.target.closest("[data-a=gfAm]")) &&
          gfCls(q);
      },
      !0,
    );
  }
  const S0 = st.get("gf:seen", {}) || {},
    wi = GF.amw | 0,
    D = {},
    B = {};
  GFAL.forEach((e) => (D[e[0]] = e));
  GFAB.forEach((e) => (B[e[0]] = e));
  const worlds = [
      ...GFBM.map((b, i) => ({ n: b.n, pl: [...new Set(b.pl)], bt: GFBT[i] })),
      { n: GFXBIO.n, pl: [...new Set(GFXBIO.pl)], bt: "sapin" },
    ],
    W = worlds[wi] || worlds[0],
    card = (k, n, d, ok, sk) =>
      ok
        ? `<div class="am"><img src="${gfAlmImg(k)}" alt=""><div><b>${esc(n)}</b><small>${esc(d)}</small></div></div>`
        : "",
    cnt = (w) => w.pl.filter((t) => S0[t]).length + (S0["b_" + w.bt] ? 1 : 0),
    tot = (w) => w.pl.length + 1,
    all = worlds.reduce((q, w) => q + cnt(w), 0),
    allT = worlds.reduce((q, w) => q + tot(w), 0),
    bo = B[W.bt];
  ((p.dataset.k = "m"),
    (p.hidden = !1),
    p.classList.remove("out"),
    (p.innerHTML =
      "<h3>Almanach <small>" +
      all +
      "/" +
      allT +
      '</small><button class="gfx" data-a="gfAmX" aria-label="Fermer">✕</button></h3><div class="amt">' +
      worlds
        .map(
          (w, i) =>
            `<button class="${i === wi ? "on" : ""}" data-a="gfAmW" data-v="${i}" aria-label="${esc(w.n)}">${i === 10 ? "❄" : i + 1}</button>`,
        )
        .join("") +
      "</div><h4>" +
      esc(W.n) +
      " <small>" +
      cnt(W) +
      "/" +
      tot(W) +
      '</small></h4><div class="gfam">' +
      (bo
        ? card(W.bt, bo[1], bo[2], !!S0["b_" + W.bt], "Boss du monde, pas encore rencontré.").replace(
            'class="am',
            'class="am bos',
          )
        : "") +
      W.pl.map((t) => (D[t] ? card(t, D[t][1], D[t][2], !!S0[t], "Pas encore croisé.") : "")).join("") +
      "</div>"),
    (() => {
      const o = p.querySelector(".amt .on");
      o && (p.querySelector(".amt").scrollLeft = o.offsetLeft - 80);
    })());
}
function gfAlm() {
  const p = $("#gflp");
  if (!p) return;
  if (!p.hidden && "m" === p.dataset.k) return void gfCls(p);
  ((GF.amw = gfXm() ? 10 : Math.min(9, GF.lw | 0)), gfAlmR());
}
function gfCls(p) {
  gfDim(p, 0);
  const o = gfOrg(p, p.dataset.k);
  ((p.style.transformOrigin = o[0] + "px " + o[1] + "px"),
    p.classList.add("out"),
    setTimeout(() => {
      p.classList.contains("out") && ((p.hidden = !0), p.classList.remove("out"));
    }, 230));
}
function gfDieSnd() {
  if (!AC || !mg || !prefs().sfx) return;
  const t = AC.currentTime,
    lp = AC.createBiquadFilter(),
    g = AC.createGain(),
    o = AC.createOscillator();
  ((lp.type = "lowpass"),
    lp.frequency.setValueAtTime(2400, t),
    lp.frequency.exponentialRampToValueAtTime(300, t + 0.9),
    (o.type = "triangle"),
    o.frequency.setValueAtTime(520, t),
    o.frequency.exponentialRampToValueAtTime(110, t + 0.85),
    g.gain.setValueAtTime(1e-4, t),
    g.gain.exponentialRampToValueAtTime(0.2, t + 0.02),
    g.gain.exponentialRampToValueAtTime(1e-4, t + 0.95),
    o.connect(lp),
    lp.connect(g),
    g.connect(mg),
    o.start(t),
    o.stop(t + 1));
  const k = AC.createOscillator(),
    kg = AC.createGain();
  ((k.type = "sine"),
    k.frequency.setValueAtTime(110, t),
    k.frequency.exponentialRampToValueAtTime(42, t + 0.3),
    kg.gain.setValueAtTime(1e-4, t),
    kg.gain.exponentialRampToValueAtTime(0.35, t + 0.01),
    kg.gain.exponentialRampToValueAtTime(1e-4, t + 0.45),
    k.connect(kg),
    kg.connect(mg),
    k.start(t),
    k.stop(t + 0.5));
  [880, 740, 620, 480].forEach((fq, i) => {
    const b = AC.createOscillator(),
      bg = AC.createGain(),
      s = t + 0.18 + 0.11 * i;
    ((b.type = "sine"),
      b.frequency.setValueAtTime(fq, s),
      b.frequency.exponentialRampToValueAtTime(fq * 1.5, s + 0.07),
      bg.gain.setValueAtTime(1e-4, s),
      bg.gain.exponentialRampToValueAtTime(0.07, s + 0.01),
      bg.gain.exponentialRampToValueAtTime(1e-4, s + 0.1),
      b.connect(bg),
      bg.connect(mg),
      b.start(s),
      b.stop(s + 0.12));
  });
}
const gfSkList = () => FISH.filter((e) => "mar" !== aqFC(e) && "etoile" !== e.id && "etoile2d" !== e.id);
const gfSkId = () => {
  const e = st.get("gf:sk", "");
  return "e2d" === e
    ? UNL() || st.get("gf:lv", 0) >= 100
      ? e
      : ""
    : e && gfSkList().some((t) => t.id === e) && (UNL() || aqRead().f[e])
      ? e
      : "";
};
const gfRkOn = () => UNL() || st.get("gf:lv", 0) >= 100;
const gfNW = (n) => (UNL() ? n : Math.min(n, Math.floor(st.get("gf:lv", 0) / 10) + 1));
function gfUnl() {
  if (GF.zen) return [];
  if (GF.race) return ["bulle"];
  const l = st.get("gf:lv", 0),
    u = UNL(),
    k = [];
  return (
    (u || l >= 10) && k.push("bulle"),
    (u || l >= 30) && k.push("aimant"),
    (u || l >= 50) && k.push("banc"),
    k
  );
}
function gfPlay() {
  GF.sk = gfSkId();
  ((GF.rkm = GF.rk | 0),
    (GF.rk = 0),
    (GF.infm = GF.inf | 0),
    (GF.inf = 0),
    (GF.lb = 0),
    (GF.sl = GF.nx | 0),
    (GF.nx = 0),
    (GF.zen = GF.zn | 0),
    (GF.zn = 0),
    (GF.zwf = GF.zen && GF.zw != null ? GF.zw : null),
    (GF.zsf = GF.zs | 0),
    (GF.zw = null),
    gfStop(),
    (cur = "galac"),
    nv("games"),
    theme("galac"),
    ($("#nav").hidden = !0),
    (app.innerHTML =
      '<div class="gfw" id="gfw"><canvas id="gfc" aria-label="Galacfish"></canvas><div class="gfhud"><div class="gfd"><i>' +
      (GFTH === "mer" ? "●" : "✦") +
      '</i><b id="gfdu">0</b><small id="gffl">0 🫧</small></div><div class="gfm"><b id="gfdi">0 m</b><small id="gfbe"></small></div><button class="gfb" data-a="gfPause" aria-label="Pause"><svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg></button></div><div class="gfcb" id="gfcb" hidden><small id="gfmu">x2</small><b id="gfco">0</b></div><div class="gfbn" id="gfbn"></div><div class="gfov" id="gfov"></div></div>'),
    window.scrollTo(0, 0),
    gfGame());
}
function gfGame() {
  let SL = GF.sl | 0,
    LB = GF.lb | 0,
    RK = GF.rkm | 0;
  const ZN = GF.zen | 0,
    RC = GF.race || null,
    INF = GF.infm | 0,
    RKB = INF ? "gf:ib" : "gf:rkb";
  const BS = GFTH === "mer" ? GFBM : GFB,
    cv = $("#gfc"),
    x = cv.getContext("2d"),
    W0 = () => {
      const g = $("#gfw");
      return (g && g.clientWidth) || innerWidth;
    },
    H0 = () => innerHeight;
  let W = W0(),
    H = H0(),
    D = Math.min(2, devicePixelRatio || 1),
    K = W < 700 ? Math.min(1.25, Math.max(0.8, W / 400)) : W / 490;
  const fit = () => {
    ((W = W0()),
      (H = H0()),
      (D = Math.min(2, devicePixelRatio || 1)),
      (K = W < 700 ? Math.min(1.25, Math.max(0.8, W / 400)) : W / 490),
      (cv.width = W * D),
      (cv.height = H * D),
      (cv.style.width = W + "px"),
      (cv.style.height = H + "px"),
      (cv.style.transform = GFFL ? "scaleY(-1)" : ""));
  };
  fit();
  const SEEN = st.get("gf:seen", {}) || {},
    best = st.get("gf:best", 0),
    $be = $("#gfbe"),
    $du = $("#gfdu"),
    $fl = $("#gffl"),
    $di = $("#gfdi"),
    $cb = $("#gfcb"),
    $co = $("#gfco"),
    $mu = $("#gfmu"),
    $bn = $("#gfbn"),
    $ov = $("#gfov");
  $be.textContent = RK && st.get(RKB, 0) ? "Record : " + st.get(RKB, 0) + " m" : "";
  const DS = GFTH === "mer" ? gfPearl() : gfDustSpr(),
    BC = gfBlob("rgba(110,230,255,1)"),
    BP = gfBlob("rgba(255,110,210,1)"),
    BW = gfBlob("rgba(255,255,255,1)"),
    BG = gfBlob("rgba(220,255,120,1)"),
    BR = gfBlob("rgba(255,90,60,1)"),
    BO = gfBlob("rgba(255,150,40,1)"),
    ST = [gfStars(512, 1024, 170, 11), gfStars(512, 1024, 90, 23)],
    NB = BS.map((b, i) => [0, 1, 2].map((j) => gfNeb(b.neb, 100 * i + j + 7))),
    PC = {},
    pspr = (t, r, s) => {
      const k = t + ":" + Math.round(r / 4) + ":" + (s % 3);
      return (
        PC[k] || (PC[k] = (GFTH === "mer" ? gfSea : gfPlanet)(t, 4 * Math.round(r / 4), 997 * (s % 3) + r))
      );
    };
  let S,
    f,
    last = 0,
    acc = 0;
  const FQ = [1, 1];
  const reset = () => {
      ((S = {
        st: "ready",
        t: 0,
        dist: 0,
        dust: 0,
        cb: 0,
        mult: 1,
        cbT: 0,
        shield: 0,
        mag: 0,
        inv: 0,
        slow: 1,
        dead: 0,
        sY: 0,
        nextY: 0,
        bi: RC
          ? RC.w
          : LB
            ? GF.lw | 0
            : SL > 100
              ? gfXB()
              : SL
                ? Math.floor((SL - 1) / 10)
                : ZN && GF.zwf != null
                  ? GF.zwf
                  : 0,
        bt: 0,
        bannerT: 0,
        streak: 0,
        stT: 0,
        pl: [],
        du: [],
        pu: [],
        pa: [],
        sm: [],
        tr: [],
        nb: [],
        po: [],
        zn: [],
        bs: null,
        zv: 1,
        lm: 0,
        sd: RC ? RC.seed : Math.floor(Math.random() * 1e9),
      }),
        (f = { x: W / 2, y: 0, vx: 0, a: 0, ph: 0, oy: 0, vy: 0 }),
        (S.by = 0),
        (S.cam = f.y - 0.7 * H),
        (S.nextY = f.y - 0.9 * H),
        (S.R = rng(S.sd)),
        (S.bk = 0),
        (S.bNext = SL || LB || RC || (ZN && GF.zwf != null) ? 1e12 : (450 + 200 * S.R()) * 14));
      for (let e = 0; e < 6; e++)
        S.nb.push({
          x: S.R() * W,
          y: 0.35 * S.cam + H * (1.3 - 0.5 * e),
          s: 0.9 + 0.8 * S.R(),
          i: Math.floor(3 * S.R()),
          b: 0,
          r: S.R() * 6,
        });
      ((ptr.on = 0),
        hud(),
        ($ov.innerHTML =
          '<div class="gfkt"><h2>' +
          (SL > 100
            ? "Fêtes " + (SL - 100) + " · Monde de Noël"
            : SL
              ? "Niveau " + SL + " · Monde " + (Math.floor((SL - 1) / 10) + 1)
              : ZN
                ? "Mode zen"
                : "Galacfish") +
          "</h2><p>" +
          (ZN ? "Ici, rien ne peut te blesser.<br>" : "") +
          (SL ? "Parcours " + gfGoal() + " m dans " + gfWn() + ".<br>" + gfHint() : "") +
          "Garde ton doigt appuyé et glisse :<br>ton poisson nage vers lui.</p><span>Touche pour commencer</span></div>"),
        $ov.classList.add("on"),
        (GFW = S.bi % 10),
        SL && ($be.textContent = "Objectif " + gfGoal() + " m"),
        ZN && ($be.textContent = "Mode zen"),
        RK && ($be.textContent = INF ? "Mode infini" : "Mode Rank"));
    },
    ptr = { on: 0, x: 0 },
    R = () => (S.GR || S.R)(),
    gfXl = () => SL > 100 || (LB && gfXm()),
    biome = () => (gfXl() ? GFXBIO : BS[S.bi % BS.length]),
    gfL = () => (SL > 100 ? Math.round(16 + (29 * (SL - 101)) / 9) : SL),
    dif = () =>
      SL
        ? Math.min(1, 0.06 + (0.94 * (gfL() - 1)) / 99)
        : RC
          ? Math.min(1, 0.15 + 0.03 * (S.ck | 0))
          : Math.min(ZN ? 0.25 : 1, S.dist / (RK ? 15e3 : 24e3)),
    gfGoal = () => 10 * Math.round(((300 + 58.56 * (gfL() - 1)) * (SL % 10 == 0 ? 1.3 : 1)) / 10),
    gfWn = () =>
      SL > 100 ? "Monde de Noël" : biome().n + (SL && Math.floor((SL - 1) / 10) >= BS.length ? " II" : ""),
    gfBn = () =>
      SL > 100 ? "Fêtes " + (SL - 100) + " · " + gfWn() : SL ? "Niveau " + SL + " · " + gfWn() : biome().n;
  function gen() {
    for (; S.nextY > S.cam - 1.6 * H;) {
      S.GR = rng(S.sd + 977 * (S.ck = (S.ck | 0) + 1));
      const y0 = S.nextY,
        h = 420 * K,
        d = dif(),
        b = biome(),
        n = ZN
          ? 1
          : (() => {
              const q = 1 + (R() < 0.15 + 0.5 * d ? 1 : 0) + (R() < 0.25 * d ? 1 : 0);
              return q + (R() < Math.max(0, W / K / 400 - 1) * q ? 1 : 0);
            })(),
        mv = (SL || RC ? d > 0.12 : S.dist > 3000) && R() < 0.25 + 0.35 * d;
      for (let e = 0; e < n; e++) {
        for (let t = 0; t < 24; t++) {
          const ty = b.pl[Math.floor(R() * b.pl.length)],
            gb = R() < 0.22 ? 1.55 : 1,
            a = GFM[ty]
              ? Math.min(0.4 * W, GFM[ty] * K * (0.7 + 0.4 * R()) * gb)
              : K * (26 + R() * (46 + 40 * d) + (R() < 0.12 ? 50 : 0)) * gb,
            s = GFSW[ty] ? W * (0.22 + 0.56 * R()) : a * 0.4 + R() * (W - a * 0.8),
            o = y0 - R() * h;
          if (o > f.y - 0.75 * H) continue;
          let i = !0;
          for (const n of S.pl)
            if (Math.hypot(n.x0 - s, n.y - o) < n.r + a + (100 + 30 * (1 - d)) * K) {
              i = !1;
              break;
            }
          if (!i) continue;
          if ("cristal" === ty && S.pl.some((q) => "cristal" === q.t)) continue;
          if (!gapOk(s, o, a)) continue;
          const n = ty,
            fxv = GFSW[n] ? (R() < 0.5 ? -1 : 1) * K * (16 + 26 * R()) : (s < W / 2 ? 1 : -1) * K * R() * 22;
          (S.pl.push({
            fy: K * (14 + 30 * R()),
            fx: fxv,
            flip: fxv < 0,
            sw: GFSW[n] ? 1 : 0,
            hc: GFH[n],
            hr: GFHR[n] ? GFHR[n] * a : 0,
            x0: s,
            x: s,
            y: o,
            r: a,
            t: n,
            sd: Math.floor(1e6 * R()),
            spr: pspr(n, a, Math.floor(1e3 * R())),
            A: !GFH[n] && mv && e === 0 ? K * (18 + 40 * R()) : 0,
            w: 0.5 + 0.7 * R(),
            ph: R() * 6,
            md: 1e9,
            pass: 0,
            rot: R() * 6,
          }),
            ("eponge" === n || "corail" === n) && S.pl.pop());
          if ("corail" === n || "eponge" === n)
            for (let q = 0, m = 4 + Math.floor(3 * R()); q < m; q++) {
              const dr = K * (11 + 12 * R()),
                dt = "corail" === n ? "debc" : "debe";
              S.pl.push({
                deb: 1,
                fy: K * (55 + 65 * R()),
                fx: (R() - 0.5) * K * 34,
                x0: Math.max(
                  0.04 * W,
                  Math.min(0.96 * W, s + (R() - 0.5) * a * 2.2 * ("eponge" === n ? 2.2 : 1)),
                ),
                x: s,
                y: o - (60 + 200 * R() * ("eponge" === n ? 2.2 : 1)) * K,
                r: dr,
                t: dt,
                sd: 0,
                spr: pspr(dt, dr, Math.floor(1e3 * R())),
                A: 0,
                w: 1,
                ph: R() * 6,
                md: 1e9,
                pass: 0,
                rot: 0,
              });
            }
          break;
        }
      }
      if (b.pl.includes("corail") && R() < 0.6) {
        const wr = K * (55 + 55 * R()),
          wl = R() < 0.5,
          wx = wl ? 0.72 * wr : W - 0.72 * wr,
          wy = y0 - R() * h;
        wy < f.y - 0.75 * H &&
          gapOk(wx, wy, wr) &&
          S.pl.push({
            fy: 0,
            fx: 0,
            flip: 0,
            rw: wl ? Math.PI / 2 : -Math.PI / 2,
            hc: GFH.corail,
            hr: GFHR.corail * wr,
            x0: wx,
            x: wx,
            y: wy,
            r: wr,
            t: "corail",
            sd: 0,
            spr: pspr("corail", wr, Math.floor(1e3 * R())),
            A: 0,
            w: 1,
            ph: R() * 6,
            md: 1e9,
            pass: 0,
            rot: 0,
          });
      }
      (gfZoneGen(y0, h),
        dustPat(y0, h),
        (() => {
          const rr = R(),
            U = gfUnl();
          rr < 0.12 + 0.05 * d &&
            (RC || S.dist > 1500) &&
            U.length &&
            S.pu.push({
              x: W * (0.15 + 0.7 * R()),
              y: y0 - h * R(),
              k: U[Math.floor(R() * U.length)],
              got: 0,
            });
        })(),
        (S.GR = null),
        (S.nextY -= h));
    }
    ((S.pl = S.pl.filter((e) => !e.dead && e.y - e.r < S.cam + H + 200)),
      (S.du = S.du.filter((e) => (e.got ? !1 : e.y < S.cam + H + 60 || ((S.dm = (S.dm | 0) + 1), !1)))),
      (S.pu = S.pu.filter((e) => !e.got && e.y < S.cam + H + 60)));
  }
  function gapOk(px, py, pr) {
    const L = [[px - pr, px + pr]];
    for (const e of S.pl) {
      const t = Math.abs(e.y - py);
      t < e.r + pr && L.push([e.x0 - e.r - e.A, e.x0 + e.r + e.A]);
    }
    L.sort((e, t) => e[0] - t[0]);
    let e = 0,
      t = 0;
    for (const [a, s] of L) (a - e > t && (t = a - e), (e = Math.max(e, s)));
    return (W - e > t && (t = W - e), t >= 120 * K);
  }
  function inPl(px, py, m) {
    for (const e of S.pl) if (Math.hypot(e.x0 - px, e.y - py) < e.r + m + e.A) return !0;
    return !1;
  }
  function dustPat(y0, h) {
    const n = (ZN ? 4 : 2) + Math.floor(R() * 3);
    for (let e = 0; e < n; e++) {
      const x = W * (0.08 + 0.84 * R()),
        y = y0 - h * R() - H * 0.25 * R();
      inPl(x, y, 14 * K) || S.du.push({ x, y, got: 0, p: R() * 6, vy: (35 + 55 * R()) * K });
    }
  }
  function burst(px, py, n, cols, sp) {
    for (let e = 0; e < n; e++) {
      const t = R() * Math.PI * 2,
        a = sp * (0.3 + R());
      S.pa.push({
        x: px,
        y: py,
        vx: Math.cos(t) * a,
        vy: Math.sin(t) * a,
        l: 1,
        d: 0.6 + 0.6 * R(),
        s: 2 + 3 * R(),
        c: cols[e % cols.length],
      });
    }
  }
  function banner(t) {
    (($bn.textContent = t), $bn.classList.remove("on"), void $bn.offsetWidth, $bn.classList.add("on"));
    if ((GFTH === "mer" || SL > 100) && !LB && S && t === gfBn()) {
      const wk = gfWkOn() && (SL > 100 ? GFXWK : GFWK[S.bi % 10]);
      wk &&
        setTimeout(() => {
          S && "play" === S.st && banner(wk.n);
        }, 2400);
    }
  }
  function hud() {
    (($du.textContent = S.dust),
      ($fl.textContent = Math.floor(S.dust / 10) + " 🫧"),
      ($di.textContent = Math.floor(S.dist / 14) + " m"),
      S.cb > 0
        ? (($cb.hidden = !1),
          ($co.textContent = S.cb),
          ($mu.textContent = S.mult > 1 ? "x" + S.mult : ""),
          ($cb.dataset.m = S.mult))
        : ($cb.hidden = !0));
  }
  function snap() {
    try {
      const w = 240,
        h = Math.round((240 * H) / W),
        c = document.createElement("canvas");
      ((c.width = w), (c.height = h));
      const g = c.getContext("2d");
      (GFFL && (g.translate(0, h), g.scale(1, -1)), g.drawImage(cv, 0, 0, w, h));
      return c.toDataURL("image/jpeg", 0.6);
    } catch (e) {
      return "";
    }
  }
  function die() {
    (!SL && !LB && RK && Math.floor(S.dist / 14) > st.get(RKB, 0) && (S.ph = snap()),
      (S.st = "dead"),
      (S.dead = 0),
      burst(f.x, f.y, 70, ["#bff6ff", "#ff8ad8", "#ffffff", "#7fe6ff"], 320),
      vib([30, 40, 60]),
      gfDieSnd(),
      RC && ((RCS.md = Math.floor(S.dist / 14)), rcPut({ st: "end", d: RCS.md }), rcCheck()));
  }
  function win() {
    S.st = "won";
    if (S.bs) {
      (burst(S.bs.x, S.bs.y, 140, ["#ffe9a8", "#ff8ad8", "#ffffff", "#7fe6ff"], 460),
        (S.pl = S.pl.filter((e) => !e.proj)),
        (S.bs = null));
      const bb = $("#gfbsb");
      (bb && bb.remove(), sfx(300, 0.8));
    }
    ptr.on = 0;
    const done = st.get("gf:lv", 0),
      first = SL <= 100 && SL === done + 1,
      f0 = Math.floor(S.dust / 10),
      bonus = first ? 2 + Math.floor((SL - 1) / 10) + (SL % 10 == 0 ? 10 : 0) + (100 === SL ? 50 : 0) : 0;
    first && st.set("gf:lv", SL);
    const tn = (S.dg | 0) + (S.dm | 0),
      rt = tn ? (S.dg | 0) / tn : 1,
      ns = 1 + (rt >= 0.5 && (S.dg | 0) >= 4 ? 1 : 0) + (rt >= 0.8 && !S.hit && (S.dg | 0) >= 6 ? 1 : 0),
      SS = st.get("gf:st", {}) || {},
      ps = SS[SL] | 0,
      gn = Math.max(0, ns - ps);
    ns > ps && ((SS[SL] = ns), st.set("gf:st", SS));
    const tot = dmR("galac", f0 + bonus + gn),
      fg = dmR(
        "galac",
        first && SL <= 100 ? [3, 4, 5, 6, 6, 7, 7, 8, 9, 10][Math.min(9, Math.ceil(SL / 10) - 1)] : 1,
      );
    try {
      fg > 0 && (SL <= 100 ? styGain(fg) : xGain(fg));
    } catch (e) {}
    const ul = first
      ? { 10: "Bulle protectrice", 30: "Aimant à bulles", 50: "Banc de poissons amis", 100: "Mode Rank" }[SL]
      : "";
    tot > 0 && scrGain(tot);
    (sfx(660, 0.5),
      setTimeout(() => sfx(880, 0.5), 150),
      setTimeout(() => sfx(1100, 0.5), 300),
      vib([20, 30, 40]),
      ($cb.hidden = !0),
      ($ov.innerHTML = `<div class="gfgo"><small>${100 === SL ? "Histoire terminée !" : 110 === SL ? "Monde de Noël terminé !" : SL > 100 ? "Fêtes terminées" : SL % 10 == 0 ? "Monde " + SL / 10 + " terminé !" : "Niveau terminé"}</small><h2>${SL > 100 ? "Fêtes " + (SL - 100) : "Niveau " + SL}</h2><div class="gfkt3">${[1, 2, 3].map((i) => `<i class="${i <= ns ? "on" : ""}">★</i>`).join("")}</div><p class="gfhint">★★ : 50 % des ${GFTH === "mer" ? "perles" : "poussières"} · ★★★ : 80 % sans aucun choc</p>${ul ? `<p>🔓 Bonus débloqué : ${ul}</p>` : ""}<div class="gfgs"><div><b>${S.dust}</b><span>${GFTH === "mer" ? "perles" : "poussières"}</span></div><div><b>+${tot} 🫧</b><span>bulles gagnées</span></div></div>${SL < 100 || (SL > 100 && SL < 110) ? '<button class="btn" data-a="gfNext">Niveau suivant</button>' : ""}<button class="btn alt" data-a="gfAgain">Rejouer</button><button class="btn alt" data-a="gfQuit">Menu</button></div>`),
      $ov.classList.add("on"));
  }
  function over() {
    if (RC) {
      ((S.st = "over"),
        ($cb.hidden = !0),
        RCS.done ||
          (($ov.innerHTML = `<div class="gfgo"><small>Ta course est terminée</small><h2>${RCS.md | 0} m</h2><p>En attente de ${esc(scrNm(RCS.opp))}…</p><button class="btn alt" data-a="gfQuit">Abandonner</button></div>`),
          $ov.classList.add("on")),
        rcCheck());
      return;
    }
    if (SL) {
      ((S.st = "over"), ($cb.hidden = !0));
      const g0 = dmR("galac", Math.floor(S.dust / 10));
      (g0 > 0 && scrGain(g0),
        ($ov.innerHTML = `<div class="gfgo"><small>Presque !</small><h2>${Math.floor(S.dist / 14)} / ${gfGoal()} m</h2><div class="gfgs"><div><b>${S.dust}</b><span>${GFTH === "mer" ? "perles" : "poussières"}</span></div><div><b>+${g0} 🫧</b><span>bulles gagnées</span></div></div><button class="btn" data-a="gfAgain">Réessayer</button><button class="btn alt" data-a="gfQuit">Menu</button></div>`),
        $ov.classList.add("on"));
      return;
    }
    S.st = "over";
    const m = Math.floor(S.dist / 14),
      fl = Math.floor(S.dust / 10),
      b0 = st.get(RK ? RKB : "gf:best", 0),
      rec = RK && m > b0;
    (rec && st.set(RKB, m),
      RK && !INF && infSave("galac", m),
      rec && S.ph && gfAlbAdd({ s: m, t: Date.now(), w: gfWn(), i: S.ph }),
      S.dust > st.get("gf:bd", 0) && st.set("gf:bd", S.dust),
      st.set("gf:n", st.get("gf:n", 0) + 1),
      fl > 0 && scrGain(fl),
      ($cb.hidden = !0),
      ($di.textContent = m + " m"),
      ($ov.innerHTML = `<div class="gfgo"><small>${rec ? "Nouveau record !" : "Fin du voyage"}</small><h2>${m} m</h2>${RK && !INF ? "<p>Score envoyé au classement ✦</p>" : ""}${rec && S.ph ? "<p>📷 Photo ajoutée à l’album</p>" : ""}<div class="gfgs"><div><b>${S.dust}</b><span>${GFTH === "mer" ? "perles" : "poussières"}</span></div><div><b>+${fl} 🫧</b><span>bulles gagnées</span></div>${RK ? `<div><b>${Math.max(m, b0)} m</b><span>record</span></div>` : ""}</div><button class="btn" data-a="gfAgain">Rejouer</button><button class="btn alt" data-a="gfQuit">Quitter</button></div>`),
      $ov.classList.add("on"),
      ($be.textContent = RK ? "Record : " + Math.max(m, b0) + " m" : ""));
  }
  function step(dt) {
    ("object" == typeof gfMu && (gfMu.I = S && S.bs && "dead" !== S.st ? 1 : 0),
      (S.t += dt),
      (S.dtk = dt),
      (FQ[0] += (1 - FQ[0]) * Math.min(1, 10 * dt) * ("launch" !== S.st)),
      (FQ[1] += (1 - FQ[1]) * Math.min(1, 10 * dt) * ("launch" !== S.st)));
    if ("count" === S.st) return void rcCount(dt);
    if ("play" !== S.st && "dead" !== S.st && "lobby" !== S.st && "launch" !== S.st) return void (f.ph += dt);
    gfZ();
    const d = dif(),
      v = (165 + 210 * d) * K * (ZN ? 0.72 : 1) * ("dead" === S.st ? 0.25 : 1) * (S.zv || 1);
    if ("lobby" === S.st) {
      const u = 95 * K,
        tx = W * (0.5 + 0.28 * Math.sin(0.33 * S.t) + 0.1 * Math.sin(0.9 * S.t + 1));
      ((f.vx += (Math.max(-700 * K, Math.min(700 * K, 3 * (tx - f.x))) - f.vx) * Math.min(1, 3 * dt)),
        (f.x += f.vx * dt),
        (S.by -= u * dt),
        (f.y = S.by),
        (f.oy = 0),
        (f.vy = 0),
        (S.dist += (u * dt) / K),
        (f.a += (Math.atan2(f.vx, u) - f.a) * Math.min(1, 6 * dt)),
        (f.ph += dt * (1 + Math.abs(f.vx) / 200)));
    }
    if ("launch" === S.st) {
      const lt = (S.lt += dt),
        n = S.ln,
        vv = (165 + 210 * Math.min(1, 0.06 + (0.94 * (n - 1)) / 99)) * K,
        q0 = Math.min(1, lt / 0.7),
        q = q0 * q0 * (3 - 2 * q0),
        r = Math.max(0, Math.min(1, (lt - 0.7) / 0.3));
      let sp;
      (lt < 0.7
        ? ((sp = 95 * K * (1 - q) + 8 * K * q),
          (FQ[0] = 1 + 0.12 * q),
          (FQ[1] = 1 - 0.18 * q),
          (f.a = 0.07 * Math.sin(45 * lt) * q))
        : ((sp = 8 * K + (vv - 8 * K) * r * r), (FQ[0] = 1), (FQ[1] = 1), (f.a *= Math.max(0, 1 - 12 * dt))),
        (f.vx += (Math.max(-700 * K, Math.min(700 * K, 3 * (W / 2 - f.x))) - f.vx) * Math.min(1, 6 * dt)),
        (f.x += f.vx * dt),
        (S.by -= sp * dt),
        (f.y = S.by),
        (f.oy = 0),
        (f.vy = 0),
        (S.dist += (sp * dt) / K),
        (f.ph += dt * (lt < 0.7 ? 3 + 9 * q : 14)));
      if (lt >= 1) {
        ((SL = n), (GF.sl = n), (LB = 0), (GF.lb = 0));
        const o = S,
          of = f,
          g = $("#gfw");
        (g.classList.remove("gflgo"),
          g.querySelectorAll(".gflt,.gflc,.gflbl,.gflbr,.gflp,.gflside").forEach((e) => e.remove()));
        const h = g.querySelector(".gfhud");
        (h && (h.style.display = ""),
          reset(),
          (S.st = "play"),
          (S.by = o.by),
          (S.cam = o.cam),
          (S.t = o.t),
          (S.nb = o.nb),
          (S.nextY = o.by - 0.9 * H),
          (f.x = of.x),
          (f.y = o.by),
          (f.vx = of.vx),
          (f.a = of.a),
          (f.ph = of.ph),
          ($ov.innerHTML = ""),
          $ov.classList.remove("on"),
          banner(gfBn()),
          (last = 0));
      }
    }
    if ("play" === S.st) {
      if ((ptr.k && ((ptr.on = 1), (ptr.x = f.x + ptr.k * 0.06 * W)), ptr.on)) {
        const e = Math.max(-2600, Math.min(2600, (ptr.x - f.x) * 22 * (S.rv ? -1 : 1))) * K;
        f.vx += (e - f.vx) * Math.min(1, (S.ic ? 2.6 : 70) * dt);
      } else f.vx *= Math.max(0, 1 - (S.ic ? 0.35 : 2.2) * dt);
      ((f.x += f.vx * dt),
        f.x < 4 && ((f.x = 4), (f.vx = Math.abs(f.vx) * 0.07)),
        f.x > W - 4 && ((f.x = W - 4), (f.vx = -Math.abs(f.vx) * 0.07)),
        (f.oy = 0),
        (f.vy = 0),
        (S.by -= v * dt),
        (f.y = S.by + f.oy),
        (S.dist += (v * dt) / K),
        (f.a += (Math.atan2(f.vx, v) - f.a) * Math.min(1, 10 * dt)),
        (f.ph += dt * (1 + Math.abs(f.vx) / 200)));
      (S.dist >= S.bNext &&
        ((S.bi = (S.bi + 1) % gfNW(BS.length)),
        (GFW = S.bi % 10),
        S.bk++,
        (S.bNext += (450 + 200 * R()) * Math.pow(1.1, S.bk) * 14),
        gfNW(BS.length) > 1 && (banner(gfBn()), sfx(880, 0.5))),
        S.inv > 0 && (S.inv -= dt),
        S.mag > 0 && (S.mag -= dt),
        S.gd &&
          (S.gd.forEach((g) => {
            ((g.t += dt), g.dead && (g.t2 += dt));
          }),
          (S.gd = S.gd.filter((g) => !g.dead || g.t2 < 0.7)),
          S.gd.length || (S.gd = null)),
        S.frT > 0 && (S.frT -= dt) <= 0 && (S.fr = 0),
        S.cb > 0 && (S.cbT -= dt) <= 0 && ((S.cb = 0), (S.mult = 1), hud()),
        S.stT > 0 ? (S.stT -= dt) : (S.streak = 0));
    }
    ((S.cam += (S.by - 0.7 * H - S.cam) * Math.min(1, 6 * dt)), LB || S.bs || gen(), gfBoss(dt));
    const fr = 17 * K;
    for (const e of S.pl) {
      e.proj || e.deb || SEEN[e.t] || e.y < S.cam || ((SEEN[e.t] = 1), st.set("gf:seen", SEEN));
      ("globe" === e.t &&
        (() => {
          const u = (0.45 * S.t + e.ph / 6.283) % 1;
          let k = u < 0.35 ? u / 0.35 : u < 0.6 ? 1 : u < 0.8 ? 1 - (u - 0.6) / 0.2 : 0;
          e.sc = 1 + 0.42 * k * k * (3 - 2 * k);
        })(),
        (e.y += e.fy * dt),
        (e.x0 += e.fx * dt),
        e.u && e.u(e, dt),
        e.proj || gfReact(e, dt),
        (e.x = e.A ? e.x0 + Math.sin(S.t * e.w + e.ph) * e.A : e.x0),
        (e.rot += dt * 0.05),
        "cristal" === e.t &&
          (e.vr || ((e.vr = (e.sd % 2 ? -1 : 1) * (0.8 + (e.sd % 7) * 0.1)), (e.rw = e.rot)),
          (e.rw += e.vr * dt),
          (e.flip = 0)));
      if ("play" !== S.st || e.dead) continue;
      let t = Math.hypot(e.x - f.x, e.y - f.y),
        a = t - e.r * (e.sc || 1) - fr,
        hit = t < 0.95 * e.r * (e.sc || 1) + fr;
      if (e.hc) {
        let m = 1e9;
        for (const h of e.hc) {
          let hx = e.flip ? -h[0] : h[0],
            hy = h[1];
          if (e.rw) {
            const c = Math.cos(e.rw),
              n = Math.sin(e.rw);
            [hx, hy] = [hx * c - hy * n, hx * n + hy * c];
          }
          const d = Math.hypot(e.x + hx * e.r - f.x, e.y + hy * e.r - f.y) - h[2] * e.r;
          d < m && (m = d);
        }
        ((a = m - fr), (hit = m < fr));
      }
      if (S.gd && S.gd.length && !hit && "vent" !== e.t) {
        const sp = gfSch();
        for (const q of sp) {
          let m = 1e9;
          if (e.hc) {
            for (const h of e.hc) {
              let hx = e.flip ? -h[0] : h[0],
                hy = h[1];
              if (e.rw) {
                const c = Math.cos(e.rw),
                  n = Math.sin(e.rw);
                [hx, hy] = [hx * c - hy * n, hx * n + hy * c];
              }
              const d = Math.hypot(e.x + hx * e.r - q[0], e.y + hy * e.r - q[1]) - h[2] * e.r;
              d < m && (m = d);
            }
          } else m = Math.hypot(e.x - q[0], e.y - q[1]) - 0.95 * e.r * (e.sc || 1);
          if (m < 26 * K) {
            (gfGdHit(q[2]), (e.dead = 1), sfx(480, 0.3), vib(15));
            break;
          }
        }
        if (e.dead) continue;
      }
      if ((a < e.md && (e.md = a), hit)) {
        if (ZN) {
          f.vx += (f.x < e.x ? -1 : 1) * 1500 * K * dt;
          continue;
        }
        if (S.fr > 0) {
          (S.fr--,
            (e.dead = 1),
            (S.inv = Math.max(S.inv, 0.4)),
            burst(e.x, e.y, 24, ["#ffb36b", "#ff8ad8", "#ffffff"], 220),
            sfx(480, 0.3),
            vib(20));
          continue;
        }
        if (S.shield && S.inv <= 0) {
          ((S.shield = 0),
            (S.inv = 1),
            (S.hit = 1),
            (f.vx = (f.x < e.x ? -1 : 1) * 420 * K),
            burst(f.x, f.y, 24, ["#bff6ff", "#ffffff"], 240),
            sfx(520, 0.3),
            vib(20));
          continue;
        }
        if (S.inv > 0) continue;
        return void die();
      }
      if (!e.pass && f.y < e.y - (e.hr || e.r)) {
        e.pass = 1;
        if (e.md < 30 * K && !ZN) {
          (S.cb++, (S.cbT = 4.5), (S.mult = Math.min(5, 1 + Math.floor(S.cb / 3))));
          const s = 5 * S.mult;
          ((S.dist += 14 * s),
            burst(f.x, f.y, 12, ["#ffe9a8", "#ffffff"], 160),
            pop("Frôlé ! +" + s + " m", f.x, f.y - 30),
            sfx(990 + 40 * Math.min(S.cb, 10), 0.25),
            vib(8),
            hud());
        }
      }
    }
    for (const e of S.du) {
      if (e.got) continue;
      e.vy && ((e.y += e.vy * dt), (e.x += Math.sin(S.t * 1.3 + e.p) * 14 * dt));
      if ((S.mag > 0 || S.fr > 0) && "play" === S.st) {
        const t = f.x - e.x,
          a = f.y - e.y,
          s = Math.hypot(t, a);
        s < (S.mag > 0 ? 170 : 110) * K && ((e.x += (t / s) * 420 * K * dt), (e.y += (a / s) * 420 * K * dt));
      }
      if ("play" === S.st && Math.hypot(e.x - f.x, e.y - f.y) < 30 * K) {
        ((e.got = 1),
          (S.dg = (S.dg | 0) + 1),
          (S.dust += S.mult),
          S.streak++,
          (S.stT = 0.9),
          burst(e.x, e.y, 6, ["#bff6ff", "#7fe6ff", "#ffffff"], 110),
          sfx(700 + 28 * Math.min(S.streak, 14), 0.12),
          hud());
      }
    }
    for (const e of S.pu)
      !e.got &&
        "play" === S.st &&
        Math.hypot(e.x - f.x, e.y - f.y) < 26 * K &&
        ((e.got = 1),
        "bulle" === e.k
          ? (S.shield = 1)
          : "banc" === e.k
            ? ((S.gd = Array.from({ length: 7 }, (_, i) => ({ i, t: 0, t2: 0, dead: 0, x: 0, y: 0 }))),
              sfx(900, 0.25))
            : (S.mag = 9),
        burst(e.x, e.y, 18, ["#ffffff", "#bff6ff", "#ffe9a8"], 180),
        pop(
          "bulle" === e.k
            ? "Bulle protectrice"
            : "banc" === e.k
              ? "Banc de poissons amis"
              : GFTH === "mer"
                ? "Aimant à perles"
                : "Aimant à poussières",
          f.x,
          f.y - 34,
        ),
        sfx(1180, 0.35));
    if ("play" === S.st) {
      (S.tr.unshift({ x: f.x - Math.sin(f.a) * 20 * K, y: f.y + Math.cos(f.a) * 20 * K }),
        S.tr.length > 34 && S.tr.pop());
      for (let e = 0; e < 2; e++)
        S.sm.push({
          x: f.x - Math.sin(f.a) * 30 * K + (R() - 0.5) * 8,
          y: f.y + Math.cos(f.a) * 30 * K + (R() - 0.5) * 8,
          vx: (R() - 0.5) * 30 - f.vx * 0.15,
          vy: (R() - 0.5) * 30 + v * 0.25,
          l: 1,
          d: 0.9 + 0.5 * R(),
          s: (5 + 5 * R()) * K,
          c: R() < 0.55 ? 0 : 1,
        });
    }
    for (const e of S.sm) ((e.x += e.vx * dt), (e.y += e.vy * dt), (e.l -= dt / e.d), (e.s += dt * 18 * K));
    S.sm = S.sm.filter((e) => e.l > 0).slice(-140);
    for (const e of S.pa)
      ((e.x += e.vx * dt),
        (e.y += e.vy * dt),
        (e.vx *= 1 - 1.6 * dt),
        (e.vy *= 1 - 1.6 * dt),
        (e.l -= dt / e.d));
    S.pa = S.pa.filter((e) => e.l > 0);
    for (const e of S.po) ((e.l -= dt / 1.1), (e.y -= (GFFL ? -26 : 26) * dt));
    S.po = S.po.filter((e) => e.l > 0);
    ("dead" === S.st && (S.dead += dt) > 1.3 && over(),
      SL && "play" === S.st && S.dist >= 14 * gfGoal() && win(),
      "play" === S.st &&
        Math.floor(S.dist / 14) !== S.lm &&
        ((S.lm = Math.floor(S.dist / 14)), ($di.textContent = S.lm + " m")),
      RC && rcTick(dt));
  }
  function pop(t, px, py) {
    S.po.push({ t, x: px, y: py, l: 1 });
  }
  function lerpC(a, b, t) {
    const s = parseInt(a.slice(1), 16),
      n = parseInt(b.slice(1), 16),
      o = (e) => Math.round(((s >> e) & 255) + (((n >> e) & 255) - ((s >> e) & 255)) * t);
    return `rgb(${o(16)},${o(8)},${o(0)})`;
  }
  function draw() {
    const c = x;
    c.setTransform(D, 0, 0, D, 0, 0);
    const bi = S.bi % BS.length,
      b = gfXl() ? GFXBIO : BS[bi],
      nx = gfXl() ? GFXBIO : BS[(bi + 1) % (SL || LB || RC ? BS.length : gfNW(BS.length))],
      tt = Math.max(0, Math.min(1, (S.dist - S.bNext + 560) / 560)),
      g = c.createLinearGradient(0, 0, 0, H);
    ((() => {
      const a0 = lerpC(b.bg[0], nx.bg[0], tt),
        a1 = lerpC(b.bg[1], nx.bg[1], tt);
      (g.addColorStop(0, a0), g.addColorStop(1, a1));
      if (S.q0 !== a0 || S.q1 !== a1) {
        ((S.q0 = a0), (S.q1 = a1));
        const w = $("#gfw");
        w && (w.style.setProperty("--g0", a0), w.style.setProperty("--g1", a1));
      }
    })(),
      (c.fillStyle = g),
      c.fillRect(0, 0, W, H));
    if (GFTH === "mer") {
      const ra = 0.2 * Math.max(0, 1 - S.dist / 9000);
      if (ra > 0.005) {
        const o0 = GFFL ? H : 0,
          o1 = GFFL ? 0.1 * H : 0.9 * H,
          rg = c.createLinearGradient(0, o0, 0, o1);
        (rg.addColorStop(0, `rgba(255,255,255,${ra})`),
          rg.addColorStop(1, "rgba(255,255,255,0)"),
          (c.fillStyle = rg));
        for (let i = 0; i < 5; i++) {
          const x0 = W * (0.05 + 0.22 * i) + Math.sin(S.t * 0.4 + i * 1.7) * 24;
          (c.beginPath(),
            c.moveTo(x0 - 14, o0),
            c.lineTo(x0 + 22, o0),
            c.lineTo(x0 + 22 + 110 * K, o1),
            c.lineTo(x0 - 14 + 60 * K, o1),
            c.closePath(),
            c.fill());
        }
      }
    }
    const cy = S.cam;
    c.globalCompositeOperation = "lighter";
    for (const e of S.nb) {
      let t = e.y - cy * 0.35;
      t > H + 300 &&
        ((e.y -= 2.9 * H + R() * 0.3 * H),
        (e.x = R() * W),
        (e.i = Math.floor(3 * R())),
        (e.b = bi),
        (e.s = 0.9 + 0.8 * R()),
        (t = e.y - cy * 0.35));
      const a = 860 * e.s * K,
        s = (
          gfXl() ? GFXN || (GFXN = [0, 1, 2].map((j) => gfNeb(GFXBIO.neb, 907 + j))) : NB[e.b % NB.length]
        )[e.i];
      ((c.globalAlpha = e.b === bi ? 0.75 : 0.6), c.drawImage(s, e.x - a / 2, t - a / 2, a, a));
    }
    c.globalAlpha = 1;
    for (let e = 0; e < 2; e++) {
      const t = ST[e],
        a = [0.12, 0.28][e],
        s = (((cy * a) % 1024) + 1024) % 1024;
      for (let e = -1; e < Math.ceil(H / 1024) + 1; e++)
        for (let n = 0; n < W; n += 512) c.drawImage(t, n, e * 1024 - s);
    }
    ((c.globalCompositeOperation = "source-over"),
      gfZoneDraw(c, cy),
      gfXl() &&
        (() => {
          c.globalCompositeOperation = "lighter";
          const BC = ["255,70,80", "80,255,140", "255,220,110"];
          for (let i = 0; i < 9; i++) {
            const px = ((((0.31 * i + 0.07 * Math.sin(0.25 * S.t + i)) % 1) + 1) % 1) * W,
              py =
                ((((((0.47 * i) % 1) * 1.3 * H + S.t * 14 * K - cy * 0.08) % (1.3 * H)) + 1.3 * H) %
                  (1.3 * H)) -
                0.15 * H,
              rr = (40 + 22 * (i % 3)) * K,
              g = c.createRadialGradient(px, py, 0, px, py, rr);
            (g.addColorStop(0, "rgba(" + BC[i % 3] + ",.28)"),
              g.addColorStop(1, "rgba(" + BC[i % 3] + ",0)"),
              (c.fillStyle = g),
              c.fillRect(px - rr, py - rr, 2 * rr, 2 * rr));
          }
          c.globalCompositeOperation = "source-over";
          c.fillStyle = "#fff";
          const HH = 1.2 * H;
          for (let i = 0; i < 64; i++) {
            const d = 0.3 + ((7 * i) % 10) / 14,
              px = (((((0.618034 * i) % 1) * W + Math.sin(0.6 * S.t + i) * 18 * K) % W) + W) % W,
              py =
                ((((((0.754878 * i) % 1) * HH + S.t * 38 * K * d - cy * 0.12 * d) % HH) + HH) % HH) - 0.1 * H;
            ((c.globalAlpha = 0.3 + 0.5 * d),
              c.beginPath(),
              c.arc(px, py, (1 + 2 * d) * K * 0.8, 0, 7),
              c.fill());
          }
          c.globalAlpha = 1;
        })(),
      void 0);
    for (const e of S.pl) {
      const t = e.y - cy;
      if (t < -e.r * 1.6 || t > H + e.r * 1.6) continue;
      gfAnim(c, e, t, S.t);
      {
        const ty = e.t,
          k = 3 * S.t + e.ph,
          r = e.r;
        "baudroie" === ty
          ? ((c.globalCompositeOperation = "lighter"),
            (c.globalAlpha = 0.45 + 0.35 * Math.sin(k)),
            c.drawImage(BG, e.x - 0.1 * r, t - 1.5 * r, r, r),
            (c.globalCompositeOperation = "source-over"),
            (c.globalAlpha = 1))
          : "mine" === ty
            ? ((c.globalCompositeOperation = "lighter"),
              (c.globalAlpha = Math.sin(k) > 0.2 ? 0.8 : 0.12),
              c.drawImage(BR, e.x - 0.4 * r, t - 0.4 * r, 0.8 * r, 0.8 * r),
              (c.globalCompositeOperation = "source-over"),
              (c.globalAlpha = 1))
            : "vent" === ty &&
              ((c.globalCompositeOperation = "lighter"),
              (c.globalAlpha = 0.25 + 0.15 * Math.sin(2 * S.t + e.ph)),
              c.drawImage(BO, e.x - 0.75 * r, t - 1.25 * r, 1.5 * r, 1.5 * r),
              (c.globalCompositeOperation = "source-over"),
              (c.globalAlpha = 1),
              (() => {
                const er = Math.max(0, Math.sin(0.9 * S.t + e.ph * 3) - 0.55) * 2.2;
                for (let i = 0; i < 6; i++) {
                  const u = (S.t * 0.45 + i / 6 + e.ph) % 1,
                    sz = r * (0.14 + 0.3 * u) * (1 + 0.8 * er);
                  ((c.globalAlpha = 0.4 * (1 - u)),
                    (c.fillStyle = "#1d171c"),
                    c.beginPath(),
                    c.arc(
                      e.x + Math.sin(S.t + i * 2 + e.ph) * 0.12 * r * u + (e.flip ? -1 : 1) * 0.1 * r * u * 3,
                      t - 1.1 * r - u * r * (1.1 + 0.7 * er),
                      sz,
                      0,
                      7,
                    ),
                    c.fill());
                }
                c.globalAlpha = 1;
              })(),
              (() => {
                const gs = e.gs | 0,
                  ph = (S.t + 0.6 * e.ph) % 3.6,
                  T = S.t,
                  top = t - 0.5 * r;
                ((c.globalCompositeOperation = "lighter"),
                  (c.globalAlpha = gs
                    ? 2 === gs
                      ? 1
                      : 0.55 + 0.3 * Math.sin(35 * T)
                    : 0.15 + 0.1 * Math.sin(2 * T + e.ph)),
                  c.drawImage(BO, e.x - 0.5 * r, top - 0.5 * r, r, r),
                  (c.globalAlpha = 1));
                if (1 === gs) {
                  c.fillStyle = "rgba(255,160,70,.85)";
                  for (let i = 0; i < 5; i++) {
                    const u = (1.5 * T + i / 5) % 1;
                    (c.beginPath(),
                      c.arc(
                        e.x + Math.sin(3 * i + 4 * T) * 0.12 * r,
                        top - u * 0.8 * r,
                        (1.2 + 1.2 * (1 - u)) * K,
                        0,
                        7,
                      ),
                      c.fill());
                  }
                }
                if (2 === gs) {
                  const k = Math.min(1, (ph - 2.4) / 0.22),
                    fd = ph > 3.3 ? (3.6 - ph) / 0.3 : 1,
                    L = 3.2 * r * k;
                  for (let i = 0; i < 16; i++) {
                    const u = (2.2 * T + i / 16) % 1,
                      hy = top - u * L,
                      rad = r * (0.1 + 0.2 * u) * (1 + 0.2 * Math.sin(5 * i + 9 * T)),
                      xx = e.x + Math.sin(2.7 * i + 7 * T) * 0.14 * r * u;
                    ((c.fillStyle = `rgba(255,${Math.round(230 - 150 * u)},${Math.round(160 - 140 * u)},${0.55 * (1 - 0.6 * u) * fd})`),
                      c.beginPath(),
                      c.arc(xx, hy, rad, 0, 7),
                      c.fill());
                  }
                  c.fillStyle = `rgba(255,210,120,${0.95 * fd})`;
                  for (let i = 0; i < 7; i++) {
                    const u = (0.9 * T + 0.37 * i) % 1,
                      vx = Math.sin(4.1 * i) * 1.1 * r;
                    (c.beginPath(),
                      c.arc(e.x + vx * u, top - 4 * u * (1 - u) * 3.4 * r * k, (2 + (i % 3)) * K, 0, 7),
                      c.fill());
                  }
                  ((c.globalCompositeOperation = "source-over"),
                    (c.fillStyle = `rgba(40,30,34,${0.32 * fd})`));
                  for (let i = 0; i < 4; i++) {
                    const u = (0.6 * T + i / 4) % 1;
                    (c.beginPath(),
                      c.arc(
                        e.x + Math.sin(2 * i + T) * 0.3 * r * u,
                        top - L - u * 0.8 * r,
                        r * (0.2 + 0.35 * u),
                        0,
                        7,
                      ),
                      c.fill());
                  }
                }
                c.globalCompositeOperation = "source-over";
              })());
      }
    }
    gfBossDraw(c, cy);
    const tw = S.t * 3;
    for (const e of S.du) {
      if (e.got) continue;
      const t = e.y - cy;
      if (t < -30 || t > H + 30) continue;
      const a = (0.85 + 0.15 * Math.sin(tw + e.p)) * 26 * K;
      (c.save(),
        c.translate(e.x, t),
        c.rotate(0.4 * Math.sin(S.t + e.p)),
        c.drawImage(DS, -a, -a, 2 * a, 2 * a),
        c.restore());
    }
    for (const e of S.pu) {
      if (e.got) continue;
      const t = e.y - cy;
      if (t < -40 || t > H + 40) continue;
      const a = (16 + 2 * Math.sin(S.t * 4)) * K;
      ((c.globalCompositeOperation = "lighter"),
        c.drawImage(BW, e.x - 2.2 * a, t - 2.2 * a, 4.4 * a, 4.4 * a),
        (c.globalCompositeOperation = "source-over"),
        c.beginPath(),
        c.arc(e.x, t, a, 0, 7),
        (c.fillStyle =
          "bulle" === e.k
            ? "rgba(150,230,255,.35)"
            : "banc" === e.k
              ? "rgba(255,150,200,.4)"
              : "rgba(255,220,140,.35)"),
        c.fill(),
        (c.strokeStyle = "#fff"),
        (c.lineWidth = 2),
        c.stroke(),
        (c.fillStyle = "#fff"),
        (c.font = `700 ${14 * K}px Inter,system-ui,sans-serif`),
        (c.textAlign = "center"),
        (c.textBaseline = "middle"),
        c.fillText("bulle" === e.k ? "◯" : "banc" === e.k ? "🐟" : "✦", e.x, t + 1));
    }
    c.globalCompositeOperation = "lighter";
    for (const e of S.sm) {
      const t = e.y - cy,
        a = e.s * (1 + 0.6 * (1 - e.l));
      ((c.globalAlpha = Math.max(0, 0.42 * e.l)), c.drawImage(e.c ? BP : BC, e.x - a, t - a, 2 * a, 2 * a));
    }
    c.globalAlpha = 1;
    if (S.tr.length > 2 && "play" === S.st)
      for (let e = 1; e < S.tr.length; e++) {
        const t = S.tr[e - 1],
          a = S.tr[e],
          s = 1 - e / S.tr.length;
        ((c.strokeStyle =
          e < S.tr.length * 0.45 ? `rgba(120,235,255,${0.55 * s})` : `rgba(255,120,220,${0.55 * s})`),
          (c.lineWidth = (2 + 9 * s) * K),
          (c.lineCap = "round"),
          c.beginPath(),
          c.moveTo(t.x, t.y - cy),
          c.lineTo(a.x, a.y - cy),
          c.stroke());
      }
    for (const e of S.pa) {
      const t = e.y - cy,
        a = e.s * K * (0.6 + 0.6 * e.l);
      ((c.globalAlpha = Math.max(0, e.l)),
        (c.fillStyle = e.c),
        c.beginPath(),
        c.arc(e.x, t, a, 0, 7),
        c.fill());
    }
    ((c.globalAlpha = 1),
      (c.globalCompositeOperation = "source-over"),
      "dead" !== S.st &&
        "over" !== S.st &&
        fish(c, f.x, f.y - cy + ("ready" === S.st ? 6 * Math.sin(S.t * 2.4) : 0), f.a),
      S.gd && "play" === S.st && gfFr(c, cy),
      gfOverlay(c, cy));
    ((c.textAlign = "center"), (c.textBaseline = "middle"));
    for (const e of S.po) {
      (c.save(),
        c.translate(e.x, e.y - cy),
        GFFL && c.scale(1, -1),
        (c.globalAlpha = Math.min(1, 2 * e.l)),
        (c.font = `800 ${15 * K}px Inter,system-ui,sans-serif`),
        (c.lineWidth = 4),
        (c.strokeStyle = "rgba(20,8,50,.6)"),
        c.strokeText(e.t, 0, 0),
        (c.fillStyle = "#ffe9a8"),
        c.fillText(e.t, 0, 0),
        c.restore());
    }
    c.globalAlpha = 1;
    if ($cb && !$cb.hidden) {
      const e = GFFL ? H - (f.y - cy) - 46 * K : f.y - cy - 46 * K;
      $cb.style.transform = `translate(${f.x}px,${e}px) translate(-50%,-50%)`;
    }
  }
  function rcCount(dt) {
    ((f.ph += dt), (S.cn -= dt));
    const n = Math.ceil(S.cn);
    if (n !== S.cl) {
      S.cl = n;
      if (n > 0)
        (($ov.innerHTML = `<div class="gfkt"><h2>${n}</h2><p>Course contre ${esc(scrNm(RC.opp))}<br>${RC.goal} m : le premier arrivé gagne.</p></div>`),
          sfx(500 + 80 * (3 - n), 0.2));
      else $ov.innerHTML = "";
    }
    if (S.cn <= 0) {
      ((S.st = "play"),
        $ov.classList.remove("on"),
        ($ov.innerHTML = ""),
        banner("Go !"),
        sfx(900, 0.4),
        (last = 0));
    }
  }
  function rcTick(dt) {
    const m = Math.floor(S.dist / 14);
    RCS.md = m;
    const o = RCS.o,
      od = o ? ("fin" === o.st ? RC.goal : o.d | 0) : 0,
      a = $("#gfrm"),
      b = $("#gfro"),
      t = $("#gfrt");
    (a && (a.style.left = Math.min(100, (100 * m) / RC.goal) + "%"),
      b && (b.style.left = Math.min(100, (100 * od) / RC.goal) + "%"),
      t && (t.textContent = "Toi " + m + " m · " + scrNm(RC.opp) + " " + od + " m"));
    if ("play" === S.st) {
      if (m >= RC.goal) {
        ((S.st = "won"),
          (ptr.on = 0),
          (RCS.md = RC.goal),
          rcPut({ st: "fin", d: RC.goal, ft: Date.now() }),
          rcCheck());
        return;
      }
      ((S.pt = (S.pt || 0) - dt), S.pt <= 0 && ((S.pt = 1.1), rcPut({ st: "run", d: m })));
    }
  }
  function gfWkOn() {
    if (SL) return SL > 100 ? SL > 101 : (SL - 1) % 10 >= 4;
    if (ZN && GF.zwf != null) return !!GF.zsf;
    if (LB || RC || !S) return !0;
    return UNL() || st.get("gf:lv", 0) >= (S.bi % 10) * 10 + 4;
  }
  function gfHint() {
    if (!SL || (GFTH !== "mer" && SL <= 100)) return "";
    const w = SL > 100 ? 10 : Math.floor((SL - 1) / 10) % 10,
      k = gfWkOn() ? (SL > 100 ? GFXWK : GFWK[w]) : null;
    return (
      (k ? "<b>" + k.n + "</b> : " + k.d + "<br>" : "") +
      (SL % 10 == 0 && !ZN ? "Boss : " + GFBN[w] + ".<br>" : "")
    );
  }
  function gfZoneGen(y0, h) {
    if ((GFTH !== "mer" && SL <= 100) || LB || !gfWkOn()) return;
    S.zn = S.zn.filter((z) => z.y - z.h < S.cam + H + 300);
    const wk = SL > 100 ? GFXWK : GFWK[S.bi % 10];
    if (!wk) return;
    const q = SL ? 0.5 + 0.5 * dif() : 1;
    if (wk.z && R() < wk.p * q) {
      const k = wk.z;
      S.zn.push(
        k === "gy"
          ? {
              k,
              y: y0 - R() * h,
              h: 300 * K,
              x: W * (0.12 + 0.76 * R()),
              w: Math.max(0.1 * W, 38 * K),
              o: R() * 3.6,
              d: 1,
              st: 1,
              r: 0,
            }
          : {
              k,
              y: y0 - R() * h,
              h:
                (k === "to" ? 0 : k === "pu" ? 420 : k === "ho" ? 360 : k === "ic" ? 420 : 200 + 120 * R()) *
                K,
              d: R() < 0.5 ? -1 : 1,
              x: k === "cu" ? W / 2 : W * (0.2 + 0.6 * R()),
              r: k === "to" ? Math.max(90 * K, 0.2 * W) : 0.2 * W + 0.05 * W * R(),
              st: wk.st || 1,
            },
      );
    }
    if (wk.rain && R() < 0.55) {
      const a = K * (30 + 22 * R()),
        sx = a + R() * (W - 2 * a),
        o = y0 - R() * h,
        tr = SL > 100 ? ["boulenoel", "cadeau", "canne", "flocon"][(R() * 4) | 0] : "rocher";
      o < f.y - 0.75 * H &&
        gapOk(sx, o, a) &&
        S.pl.push({
          fy: K * (170 + 110 * R()),
          fx: (R() - 0.5) * K * 30,
          flip: 0,
          sw: 0,
          hc: SL > 100 ? void 0 : GFH.rocher,
          hr: (SL > 100 ? 0.8 : GFHR.rocher) * a,
          x0: sx,
          x: sx,
          y: o,
          r: a,
          t: tr,
          sd: 0,
          spr: pspr(tr, a, Math.floor(1e3 * R())),
          A: 0,
          w: 1,
          ph: R() * 6,
          md: 1e9,
          pass: 0,
          rot: 0,
        });
    }
  }
  function gfZ() {
    if ("play" !== S.st) return;
    ((S.zv = 1), (S.rv = 0), (S.ic = 0), (S.fz = 0));
    for (const z of S.zn) {
      const dy = f.y - z.y;
      if (z.k === "gy") {
        if (
          (S.t + z.o) % 3.6 > 2.4 &&
          Math.abs(dy) < z.h / 2 &&
          Math.abs(f.x - z.x) < z.w &&
          S.inv <= 0 &&
          !ZN
        ) {
          if (S.shield)
            ((S.shield = 0),
              (S.inv = 1),
              (S.hit = 1),
              (f.vx = (f.x < z.x ? -1 : 1) * 420 * K),
              burst(f.x, f.y, 24, ["#ffb36b", "#ffffff"], 240),
              sfx(520, 0.3),
              vib(20));
          else return void die();
        }
      } else if (z.k === "to") {
        const dd = Math.hypot(f.x - z.x, dy);
        if (dd < z.r) {
          const q = 1 - dd / z.r;
          ((f.x +=
            (Math.sign(z.x - f.x) * Math.min(Math.abs(z.x - f.x) * 3, 360 * K) + z.d * 140 * K) *
            q *
            (S.dtk || 0.016)),
            (S.zv = Math.min(S.zv, 0.85)));
        }
      } else if (Math.abs(dy) < z.h / 2) {
        if (z.k === "rv") S.rv = 1;
        else if (z.k === "pu") S.zv *= 1 + 0.5 * Math.sin(5.2 * S.t);
        else if (z.k === "ic") S.ic = 1;
        else if (z.k === "fg") S.fz = 1;
        else if (z.k === "ho") f.x += Math.sin(3.2 * S.t + 0.01 * z.y) * 480 * K * (S.dtk || 0.016);
        else if (z.k === "cu") f.x += z.d * z.st * 480 * K * (S.dtk || 0.016);
        else if (Math.abs(f.x - z.x) < z.r) {
          if (z.k === "bu") S.zv = Math.max(S.zv, 1.55);
          else
            z.k === "al" &&
              ((S.zv = Math.min(S.zv, 0.62)), (f.x += Math.sin(3 * S.t) * 50 * K * (S.dtk || 0.016)));
        }
      }
    }
    for (const e of S.pl)
      if ("vent" === e.t) {
        const ph = (S.t + 0.6 * e.ph) % 3.6;
        e.gs = ph > 2.4 ? 2 : ph > 1.8 ? 1 : 0;
        if (
          2 === e.gs &&
          !ZN &&
          S.inv <= 0 &&
          Math.abs(f.x - e.x) < 0.3 * e.r &&
          f.y < e.y - 0.5 * e.r &&
          f.y > e.y - 3.7 * e.r
        ) {
          if (S.fr > 0)
            (S.fr--,
              (S.inv = 1),
              (S.hit = 1),
              (f.vx = (f.x < e.x ? -1 : 1) * 420 * K),
              burst(f.x, f.y, 20, ["#ffb36b", "#ff8ad8", "#ffffff"], 220),
              sfx(480, 0.3),
              vib(20));
          else if (S.shield)
            ((S.shield = 0),
              (S.inv = 1),
              (S.hit = 1),
              (f.vx = (f.x < e.x ? -1 : 1) * 420 * K),
              burst(f.x, f.y, 24, ["#ffb36b", "#ffffff"], 240),
              sfx(520, 0.3),
              vib(20));
          else return void die();
        }
      }
  }
  function gfReact(e, dt) {
    if ("play" !== S.st || e.deb) return;
    const ty = e.t,
      ah = f.y - e.y;
    if (ah < -0.3 * e.r || ah > 0.6 * H) {
      e.sc > 1 && ("oursin" === ty || "mine" === ty) && (e.sc += (1 - e.sc) * Math.min(1, 4 * dt));
      return;
    }
    const dx = f.x - e.x0,
      ad = Math.abs(dx);
    if (GFAT[ty]) ad > 16 * K && (e.x0 += Math.sign(dx) * GFAT[ty] * K * dt);
    else if (GFCH[ty]) {
      const tv = Math.sign(dx) * GFCH[ty] * K;
      ((e.fx += (tv - e.fx) * Math.min(1, 1.5 * dt)), (e.flip = e.fx < 0));
    } else if (GFRF[ty]) {
      if (ad < 2.6 * e.r + 70 * K) {
        const tv = -Math.sign(dx || 1) * GFRF[ty] * K;
        ((e.fx += (tv - e.fx) * Math.min(1, 3 * dt)), (e.flip = e.fx < 0));
      }
    } else if ("oursin" === ty || "mine" === ty) {
      const tg = ad < 2.4 * e.r + 50 * K ? 1.3 : 1;
      e.sc = (e.sc || 1) + (tg - (e.sc || 1)) * Math.min(1, 6 * dt);
    }
  }
  const GFBS = [
      [7, 0, 2, 7, 0],
      [1, 2, 9, 4, 9, 2],
      [10, 1, 6, 10, 2],
      [3, 7, 4, 3],
      [8, 2, 5, 8],
      [7, 0, 7, 5],
      [0, 7, 3, 7],
      [5, 4, 2, 5, 1],
      [8, 5, 8, 0],
      [6, 2, 8, 4, 7],
      [2, 3, 8, 4],
    ],
    GFCS = { 3: 0.85, 6: 1.35 };
  function gfPn(b, dt) {
    const c = b.pn;
    c.t += dt;
    if (0 === c.ph) {
      ((c.tx += (f.x - c.tx) * Math.min(1, 5 * dt)),
        (c.ty += (f.y - 30 * K - c.ty) * Math.min(1, 5 * dt)),
        (c.ex = Math.min(1, c.t / 0.35)),
        (c.op = 0.75),
        c.t >= 0.9 && ((c.ph = 1), (c.t = 0), sfx(220, 0.2)));
    } else if (1 === c.ph)
      ((c.op = 0.75 + 0.08 * Math.sin(40 * c.t)), c.t >= 0.35 && ((c.ph = 2), (c.t = 0)));
    else if (2 === c.ph) {
      c.op = Math.max(0, 0.75 * (1 - c.t / 0.1));
      if (c.t >= 0.1) {
        ((c.ph = 3),
          (c.t = 0),
          sfx(120, 0.4),
          vib(25),
          burst(c.tx, c.ty, 16, ["#ffb36b", "#ffffff"], 200),
          Math.hypot(f.x - c.tx, f.y - c.ty) < 48 * K && gfBHit());
      }
    } else ((c.ex = Math.max(0, 1 - Math.max(0, c.t - 0.25) / 0.5)), c.t >= 0.75 && (b.pn = null));
  }
  function gfPnDraw(c, cy) {
    const b = S.bs,
      p = b && b.pn;
    if (!p) return;
    const R = b.Rb,
      L = p.tx > b.x ? 1 : -1,
      sx = b.x + L * 0.5 * R,
      sy = b.y - cy + 0.1 * R,
      tx = p.tx,
      ty = p.ty - cy,
      q = Math.min(1, p.ex || 0),
      ez = q * q * (3 - 2 * q),
      ax = sx + (tx - sx) * ez,
      ay = sy + (ty - sy) * ez,
      dx = ax - sx,
      dy = ay - sy,
      d = Math.hypot(dx, dy) || 1,
      l = 0.53 * d,
      h = Math.sqrt(Math.max(0, l * l - (d * d) / 4)),
      sg = (-dy / d) * L >= 0 ? 1 : -1,
      mx = (sx + ax) / 2 + (-dy / d) * h * sg,
      my = (sy + ay) / 2 + (dx / d) * h * sg;
    if (p.ph < 2) {
      const a = 0.4 + 0.25 * Math.sin(14 * S.t);
      (c.save(),
        (c.strokeStyle = `rgba(255,70,50,${a})`),
        (c.fillStyle = `rgba(255,70,50,${0.12 * a})`),
        (c.lineWidth = 3 * K),
        c.beginPath(),
        c.arc(tx, ty, 48 * K, 0, 7),
        c.fill(),
        c.stroke(),
        c.restore());
    }
    (c.save(), (c.lineCap = "round"), (c.lineJoin = "round"));
    for (const [w, col] of [
      [18 * K, "#7a3210"],
      [12 * K, "#f08030"],
    ])
      ((c.strokeStyle = col),
        (c.lineWidth = w),
        c.beginPath(),
        c.moveTo(sx, sy),
        c.lineTo(mx, my),
        c.lineTo(ax, ay),
        c.stroke());
    ((c.fillStyle = "#f08030"),
      (c.strokeStyle = "#7a3210"),
      (c.lineWidth = 2 * K),
      c.beginPath(),
      c.arc(mx, my, 8 * K, 0, 7),
      c.fill(),
      c.stroke());
    const ang = Math.atan2(ay - my, ax - mx);
    for (const g of [-1, 1]) {
      (c.save(),
        c.translate(ax - 30 * K * Math.cos(ang), ay - 30 * K * Math.sin(ang)),
        c.rotate(ang + g * (p.op == null ? 0.2 : p.op)),
        (c.fillStyle = "#ff8a3a"),
        (c.strokeStyle = "#7a3210"),
        (c.lineWidth = 2.5 * K),
        c.beginPath(),
        c.moveTo(0, 0),
        c.quadraticCurveTo(26 * K, -14 * K * g, 52 * K, -3 * K * g),
        c.quadraticCurveTo(26 * K, 2 * K * g, 0, 10 * K * g),
        c.closePath(),
        c.fill(),
        c.stroke(),
        c.restore());
    }
    c.restore();
  }
  function gfBHit() {
    if (S.inv > 0) return;
    const b = S.bs;
    if (S.fr > 0)
      (S.fr--,
        (S.inv = 1),
        (S.hit = 1),
        (f.vx = (f.x < b.x ? -1 : 1) * 420 * K),
        burst(f.x, f.y, 20, ["#ffb36b", "#ff8ad8", "#ffffff"], 220),
        sfx(480, 0.3),
        vib(20));
    else if (S.shield)
      ((S.shield = 0),
        (S.inv = 1),
        (S.hit = 1),
        (f.vx = (f.x < b.x ? -1 : 1) * 420 * K),
        burst(f.x, f.y, 24, ["#bff6ff", "#ffffff"], 240),
        sfx(520, 0.3),
        vib(20));
    else die();
  }
  function gfBoss(dt) {
    if (!SL || SL % 10 || ZN || (GFTH !== "mer" && SL <= 100) || LB || "play" !== S.st) return;
    const goal = 14 * gfGoal(),
      w = SL > 100 ? 10 : Math.floor((SL - 1) / 10) % 10;
    if (!S.bs) {
      if (S.dist < 0.6 * goal || S.dist >= goal) return;
      const Rb = Math.min(0.34 * W, 150 * K),
        ty = GFBT[w];
      S.bs = {
        x: W / 2,
        y: S.cam + 0.16 * H,
        t: 0,
        cd: 3,
        pat: 0,
        fl: 0,
        Rb,
        col: GFBC[w],
        e: { spr: pspr(ty, Rb, 0), t: ty, ph: 0, r: Rb, x: 0, flip: 0 },
      };
      const g = $("#gfw");
      if (g && !$("#gfbsb")) {
        const d = document.createElement("div");
        ((d.id = "gfbsb"),
          (d.className = "gfbsb"),
          (d.innerHTML = "<span>⚠ " + GFBN[w] + "</span><i><b></b></i>"),
          g.appendChild(d));
      }
      (SEEN["b_" + ty] || ((SEEN["b_" + ty] = 1), st.set("gf:seen", SEEN)),
        banner("⚠ " + GFBN[w]),
        sfx(120, 0.9),
        vib([40, 60, 40]));
    }
    const b = S.bs;
    ((b.t += dt), b.pu > 0 && (b.pu -= dt));
    const sw = 0.65 + 0.05 * w,
      sx =
        W / 2 +
        Math.sin(b.t * sw) * (0.16 + 0.014 * w) * W +
        (w % 2 ? Math.sin(b.t * sw * 2.3) * 0.07 * W : 0);
    b.fl = Math.cos(b.t * sw) < 0 ? 1 : 0;
    if (b.sp) {
      const c = b.sp,
        Rb = b.Rb;
      ((c.t += dt),
        (b.sa =
          (b.sa || 0) +
          dt *
            (0 === c.ph ? 14 * Math.min(1, c.t / 0.6) : 3 === c.ph ? 14 * Math.max(0, 1 - c.t / 0.7) : 15)));
      if (0 === c.ph) {
        b.x = c.x + Math.sin(60 * c.t) * 2 * K;
        b.dy = 0;
        if (c.t >= 0.7) {
          ((c.ph = 1), (c.t = 0));
          const a = 0.35 + 0.9 * R(),
            sg = R() < 0.5 ? -1 : 1;
          ((c.vx = sg * Math.sin(a) * 340 * K),
            (c.vy = Math.cos(a) * 340 * K),
            (c.px = b.x),
            (c.py = 0),
            sfx(120, 0.3),
            vib(15));
        }
      } else if (1 === c.ph) {
        ((c.px += c.vx * dt), (c.py += c.vy * dt));
        let bn = 0;
        (c.px < 0.55 * Rb && ((c.px = 0.55 * Rb), (c.vx = Math.abs(c.vx)), (bn = 1)),
          c.px > W - 0.55 * Rb && ((c.px = W - 0.55 * Rb), (c.vx = -Math.abs(c.vx)), (bn = 1)),
          c.py > 0.58 * H &&
            ((c.py = 0.58 * H),
            (c.vy = -Math.abs(c.vy) * (0.7 + 0.3 * R())),
            (c.vx += (R() - 0.5) * 120 * K),
            (bn = 1)),
          c.py < 0 && ((c.py = 0), (c.vy = Math.abs(c.vy)), (bn = 1)),
          bn && (c.n++, sfx(180 + 40 * c.n, 0.15), vib(8)),
          (b.x = c.px),
          (b.dy = c.py),
          (c.n >= 6 || c.t > 5) && ((c.ph = 2), (c.t = 0), (c.x0 = b.x), (c.y0 = b.dy)));
      } else if (2 === c.ph) {
        const q = Math.min(1, c.t / 1.2),
          ez = q * q * (3 - 2 * q);
        ((b.x = c.x0 + (sx - c.x0) * ez),
          (b.dy = c.y0 * (1 - ez)),
          q >= 1 &&
            ((c.ph = 3),
            (c.t = 0),
            burst(b.x, S.cam + 0.16 * H, 18, ["#9fe0b4", "#ffffff"], 200),
            sfx(300, 0.3)));
      } else ((b.x = sx), (b.dy = 0), c.t >= 0.7 && (b.sp = null));
    } else if (b.ch) {
      const c = b.ch;
      c.t += dt;
      if (0 === c.ph) {
        c.t < 0.8 && (c.tx += (f.x - c.tx) * Math.min(1, 2.5 * dt));
        b.x = c.tx + Math.sin(c.t * 55) * 3 * K;
        b.dy = -Math.min(1, c.t / 0.9) * 0.05 * H;
        c.t >= 1.2 && ((c.ph = 1), (c.t = 0), sfx(160, 0.4), vib(20));
      } else if (1 === c.ph) {
        b.x = c.tx;
        b.dy = c.t * c.sp;
        b.dy > c.dm && ((c.ph = 2), (c.t = 0), (c.d0 = b.dy));
      } else {
        b.dy = c.d0 * (1 - Math.min(1, c.t / 1.1));
        b.x = c.tx + (sx - c.tx) * Math.min(1, c.t / 1.1);
        c.t >= 1.1 && ((b.ch = null), (b.dy = 0));
      }
    } else ((b.x = sx), (b.dy = 0));
    b.y = S.cam + 0.16 * H + b.dy;
    if (b.ch && 1 === b.ch.ph && Math.hypot(b.x - f.x, b.y - f.y) < 0.6 * b.Rb + 14 * K) gfBHit();
    if (b.sp && 1 === b.sp.ph && Math.hypot(b.x - f.x, b.y - f.y) < 0.55 * b.Rb + 14 * K) gfBHit();
    b.pn && gfPn(b, dt);
    const bb = $("#gfbsb");
    bb &&
      (bb.querySelector("b").style.width =
        Math.max(0, Math.min(100, 100 * (1 - (S.dist / goal - 0.6) / 0.4))) + "%");
    ((S.pl = S.pl.filter((e) => !e.dead && e.y - e.r < S.cam + H + 200)),
      (S.du = S.du.filter((e) => (e.got ? !1 : e.y < S.cam + H + 60 || ((S.dm = (S.dm | 0) + 1), !1)))),
      (S.pu = S.pu.filter((e) => !e.got && e.y < S.cam + H + 60)));
    if (b.ch || b.sp || b.pn) return;
    b.cd -= dt;
    if (b.cd > 0) return;
    ((b.pu = 0.4), (b.cd = Math.max(1.5, 2.8 - 0.1 * w) * (0.9 + 0.2 * R())));
    const px = b.x,
      py = b.y + 0.1 * b.Rb,
      v = (120 + 110 * dif()) * K * (S.zv || 1),
      orb = gfOrb(11 * K, b.col),
      mk = (x0, y, vx, vy) =>
        S.pl.push({
          proj: 1,
          t: "proj",
          r: 11 * K,
          x0,
          x: x0,
          y,
          fx: vx,
          fy: vy,
          flip: 0,
          hr: 0,
          A: 0,
          w: 1,
          ph: R() * 6,
          md: 1e9,
          pass: 0,
          rot: 0,
          spr: orb,
        }),
      SQ = GFBS[w] || GFBS[0],
      p = SQ[b.pat++ % SQ.length];
    if (0 === p)
      for (const k of [-1, 0, 1]) {
        const fy = 150 * K,
          T = Math.max(0.3, (f.y - py) / (v + fy));
        mk(px, py, (f.x - px) / T + 90 * K * k, fy);
      }
    else if (1 === p) {
      const n = 7,
        g = Math.floor(R() * (n - 2));
      for (let i = 0; i < n; i++) (i >= g && i < g + 3) || mk(((i + 0.5) * W) / n, py, 0, 130 * K);
    } else if (2 === p)
      for (let i = 0; i < 6; i++) mk(W * (0.06 + 0.88 * R()), py - R() * 0.3 * H, 0, K * (120 + 80 * R()));
    else if (3 === p)
      for (let i = -2; i <= 2; i++) {
        const a = i * 0.34;
        mk(px, py, Math.sin(a) * 140 * K, Math.cos(a) * 140 * K);
      }
    else if (4 === p) {
      const n = 7,
        g = Math.floor(R() * (n - 4)),
        d = R() < 0.5 ? 1 : -1;
      for (let q = 0; q < 2; q++) {
        const gq = Math.max(0, Math.min(n - 3, g + q * 2 * d + (d < 0 ? 2 : 0)));
        for (let i = 0; i < n; i++)
          (i >= gq && i < gq + 3) || mk(((i + 0.5) * W) / n, py - q * 0.16 * H, 0, 120 * K);
      }
    } else if (5 === p) {
      const a0 = Math.atan2(f.x - px, f.y - py);
      for (let i = 0; i < 14; i++) {
        const a = (i * Math.PI) / 7;
        let dd = Math.abs(((((a - a0 + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) - Math.PI);
        dd < 0.5 || mk(px, py, Math.sin(a) * 115 * K, Math.cos(a) * 115 * K);
      }
    } else if (6 === p)
      for (let i = 0; i < 3; i++) {
        const L = i % 2;
        mk(L ? 0 : W, py + (0.12 + 0.13 * i) * H, (L ? 1 : -1) * 170 * K, 60 * K);
      }
    else if (10 === p) {
      b.pn = { ph: 0, t: 0, tx: f.x, ty: f.y - 30 * K, ex: 0, op: 0.75 };
      sfx(200, 0.3);
    } else if (9 === p) {
      b.sp = { ph: 0, t: 0, x: b.x, n: 0, px: 0, py: 0, vx: 0, vy: 0 };
      sfx(150, 0.4);
    } else if (7 === p) {
      const dm = 0.62 * H + b.Rb;
      b.ch = { ph: 0, t: 0, tx: b.x, dm, sp: (dm / 0.75) * (GFCS[w] || 1) };
      sfx(200, 0.3);
    } else {
      const ms = b.ms || (b.ms = pspr("mine", 16 * K, 0));
      for (let q = 0; q < (w >= 8 ? 2 : 1); q++)
        S.pl.push({
          proj: 1,
          t: "proj",
          r: 16 * K,
          x0: px + (q ? 1 : -1) * 0.12 * W * (q || 1),
          x: px,
          y: py,
          fx: 0,
          fy: 60 * K,
          flip: 0,
          hr: 0,
          A: 0,
          w: 1,
          ph: R() * 6,
          md: 1e9,
          pass: 0,
          rot: 0,
          spr: ms,
          u: (e, dt) => {
            if (((e.age = (e.age || 0) + dt), e.age > 5.5))
              return ((e.dead = 1), void burst(e.x, e.y, 16, ["#ff9a6a", "#ffffff"], 160));
            if (!e.lost && e.y < f.y + 40 * K) {
              const dx = f.x - e.x0,
                dy = f.y - e.y,
                d = Math.hypot(dx, dy) || 1,
                k = Math.min(1, 1.3 * dt);
              ((e.fx += ((dx / d) * 100 * K - e.fx) * k),
                (e.fy += (Math.max(35 * K, (dy / d) * 100 * K) - e.fy) * k));
            } else e.lost = 1;
          },
        });
      sfx(140, 0.25);
    }
    sfx(260, 0.18);
  }
  function gfZoneDraw(c, cy) {
    for (const z of S.zn) {
      const ty = z.y - cy;
      if (ty < -z.h - z.r || ty > H + z.h + z.r) continue;
      const T = S.t;
      if ("cu" === z.k) {
        const g = c.createLinearGradient(0, ty - z.h / 2, 0, ty + z.h / 2);
        (g.addColorStop(0, "rgba(200,240,255,0)"),
          g.addColorStop(0.5, "rgba(200,240,255,.13)"),
          g.addColorStop(1, "rgba(200,240,255,0)"),
          (c.fillStyle = g),
          c.fillRect(0, ty - z.h / 2, W, z.h),
          (c.strokeStyle = "rgba(255,255,255,.3)"),
          (c.lineWidth = 2 * K),
          (c.lineCap = "round"));
        for (let i = 0; i < 16; i++) {
          const yy = ty + (((i * 47) % 100) / 100 - 0.5) * z.h,
            ln = (50 + 30 * (i % 3)) * K * z.st,
            L = W + ln,
            xx = ((((T * (150 + 40 * (i % 4)) * K * z.d * z.st + (i * W) / 8) % L) + L) % L) - ln / 2;
          (c.beginPath(), c.moveTo(xx, yy), c.lineTo(xx + ln * z.d, yy), c.stroke());
        }
      } else if ("bu" === z.k) {
        const g = c.createLinearGradient(z.x - z.r, 0, z.x + z.r, 0);
        (g.addColorStop(0, "rgba(220,250,255,0)"),
          g.addColorStop(0.5, "rgba(220,250,255,.16)"),
          g.addColorStop(1, "rgba(220,250,255,0)"),
          (c.fillStyle = g),
          c.fillRect(z.x - z.r, ty - z.h / 2, 2 * z.r, z.h),
          (c.strokeStyle = "rgba(255,255,255,.6)"),
          (c.lineWidth = 1.5 * K));
        for (let i = 0; i < 14; i++) {
          const p = (T * 95 * K + (i * z.h) / 14) % z.h,
            xx = z.x + Math.sin(i * 2.3 + T) * z.r * 0.8;
          (c.beginPath(), c.arc(xx, ty + z.h / 2 - p, (3 + (i % 4) * 1.6) * K, 0, 7), c.stroke());
        }
      } else if ("al" === z.k) {
        c.lineCap = "round";
        for (let i = 0; i < 9; i++) {
          const bx = z.x - z.r + ((i + 0.5) * 2 * z.r) / 9;
          for (const [wd, al, cl] of [
            [8, 0.5, "60,170,110"],
            [3.5, 0.6, "140,240,170"],
          ]) {
            ((c.strokeStyle = `rgba(${cl},${al})`),
              (c.lineWidth = wd * K),
              c.beginPath(),
              c.moveTo(bx, ty + z.h / 2));
            for (let j = 1; j <= 8; j++)
              c.lineTo(bx + (Math.sin(T * 1.6 + i + j * 0.5) * 12 * K * j) / 8, ty + z.h / 2 - (j * z.h) / 8);
            c.stroke();
          }
        }
      } else if ("ic" === z.k) {
        const g = c.createLinearGradient(0, ty - z.h / 2, 0, ty + z.h / 2);
        (g.addColorStop(0, "rgba(170,230,255,0)"),
          g.addColorStop(0.12, "rgba(190,240,255,.42)"),
          g.addColorStop(0.5, "rgba(210,245,255,.55)"),
          g.addColorStop(0.88, "rgba(190,240,255,.42)"),
          g.addColorStop(1, "rgba(170,230,255,0)"),
          (c.fillStyle = g),
          c.fillRect(0, ty - z.h / 2, W, z.h),
          (c.fillStyle = "rgba(235,250,255,.9)"));
        for (let i = 0; i < 16; i++) {
          const xx = ((((((i * 97) % 100) / 100) * W + T * 10 * K * ((i % 3) - 1)) % W) + W) % W,
            yy = ty + (((i * 37) % 100) / 100 - 0.5) * z.h;
          (c.beginPath(), c.arc(xx, yy, (1.4 + (i % 3)) * K, 0, 7), c.fill());
        }
      } else if ("fg" === z.k) {
        const g = c.createLinearGradient(0, ty - z.h / 2, 0, ty + z.h / 2);
        (g.addColorStop(0, "rgba(220,230,240,0)"),
          g.addColorStop(0.5, "rgba(220,230,240,.22)"),
          g.addColorStop(1, "rgba(220,230,240,0)"),
          (c.fillStyle = g),
          c.fillRect(0, ty - z.h / 2, W, z.h));
      } else if ("ho" === z.k) {
        const g = c.createLinearGradient(0, ty - z.h / 2, 0, ty + z.h / 2);
        (g.addColorStop(0, "rgba(120,200,255,0)"),
          g.addColorStop(0.5, "rgba(120,200,255,.14)"),
          g.addColorStop(1, "rgba(120,200,255,0)"),
          (c.fillStyle = g),
          c.fillRect(0, ty - z.h / 2, W, z.h),
          (c.strokeStyle = "rgba(255,255,255,.35)"),
          (c.lineWidth = 2 * K));
        for (let i = 0; i < 5; i++) {
          const yy = ty + (i / 4 - 0.5) * z.h * 0.8;
          c.beginPath();
          for (let x = 0; x <= W; x += 12) {
            const y = yy + Math.sin(0.03 * x + 3.2 * T + i) * 8 * K;
            0 === x ? c.moveTo(x, y) : c.lineTo(x, y);
          }
          c.stroke();
        }
      } else if ("pu" === z.k) {
        const b = Math.max(0, Math.sin(5.2 * T)),
          g = c.createLinearGradient(0, ty - z.h / 2, 0, ty + z.h / 2);
        (g.addColorStop(0, "rgba(255,70,30,0)"),
          g.addColorStop(0.5, `rgba(255,70,30,${0.1 + 0.16 * b})`),
          g.addColorStop(1, "rgba(255,70,30,0)"),
          (c.fillStyle = g),
          c.fillRect(0, ty - z.h / 2, W, z.h),
          (c.lineWidth = 2 * K));
        for (let i = 0; i < 3; i++) {
          const p = (0.83 * T + i / 3) % 1,
            yy = ty + (p - 0.5) * z.h;
          ((c.strokeStyle = `rgba(255,130,80,${0.5 * (1 - Math.abs(2 * p - 1))})`),
            c.beginPath(),
            c.moveTo(0, yy),
            c.lineTo(W, yy),
            c.stroke());
        }
      } else if ("rv" === z.k) {
        const g = c.createLinearGradient(0, ty - z.h / 2, 0, ty + z.h / 2);
        (g.addColorStop(0, "rgba(200,60,255,0)"),
          g.addColorStop(0.5, "rgba(200,60,255,.24)"),
          g.addColorStop(1, "rgba(200,60,255,0)"),
          (c.fillStyle = g),
          c.fillRect(0, ty - z.h / 2, W, z.h),
          (c.strokeStyle = "rgba(255,170,255,.6)"),
          (c.lineWidth = 3 * K),
          (c.lineCap = "round"),
          (c.lineJoin = "round"));
        for (let i = 0; i < 3; i++) {
          const d = i % 2 ? -1 : 1,
            xx = (((T * 70 * K * d + (i * W) / 3) % W) + W) % W,
            yy = ty + (((i * 37) % 100) / 100 - 0.5) * z.h * 0.8;
          (c.beginPath(),
            c.moveTo(xx - 10 * K * d, yy - 9 * K),
            c.lineTo(xx + 8 * K * d, yy),
            c.lineTo(xx - 10 * K * d, yy + 9 * K),
            c.stroke());
        }
      } else if ("gy" === z.k) {
        const ph = (T + z.o) % 3.6,
          on = ph > 2.4,
          ch = ph > 1.8 && !on,
          w = z.w,
          a = on ? 0.8 : ch ? 0.2 + 0.14 * Math.sin(30 * T) : 0.08,
          g = c.createLinearGradient(z.x - w, 0, z.x + w, 0);
        (g.addColorStop(0, "rgba(255,70,20,0)"),
          g.addColorStop(0.5, (on ? "rgba(255,190,80," : "rgba(255,90,30,") + a + ")"),
          g.addColorStop(1, "rgba(255,70,20,0)"),
          (c.fillStyle = g),
          c.fillRect(z.x - w, ty - z.h / 2, 2 * w, z.h),
          (c.fillStyle = on ? "rgba(255,240,190,.95)" : "rgba(255,120,40,.6)"));
        for (let i = 0; i < (on ? 16 : 6); i++) {
          const p = (T * (on ? 260 : 50) * K + (i * z.h) / 16) % z.h,
            xx = z.x + Math.sin(2.1 * i + 2 * T) * w * 0.7;
          (c.beginPath(), c.arc(xx, ty + z.h / 2 - p, (2 + (i % 3) * 1.4) * K, 0, 7), c.fill());
        }
        ((c.fillStyle = "rgba(255,80,20," + (ch || on ? 0.7 : 0.35) + ")"),
          c.beginPath(),
          c.ellipse(z.x, ty + z.h / 2, 0.8 * w, 6 * K, 0, 0, 7),
          c.fill());
      } else {
        const g = c.createRadialGradient(z.x, ty, 0, z.x, ty, z.r);
        (g.addColorStop(0, "rgba(0,20,50,.32)"),
          g.addColorStop(1, "rgba(0,20,50,0)"),
          (c.fillStyle = g),
          c.fillRect(z.x - z.r, ty - z.r, 2 * z.r, 2 * z.r),
          (c.lineWidth = 3 * K),
          (c.lineCap = "round"));
        for (let i = 0; i < 4; i++) {
          const a0 = T * z.d * (1.5 + 0.4 * i) + i * 1.7;
          ((c.strokeStyle = `rgba(255,255,255,${0.34 - 0.06 * i})`),
            c.beginPath(),
            c.arc(z.x, ty, z.r * (1 - 0.22 * i), a0, a0 + 3.2),
            c.stroke());
        }
      }
    }
  }
  function gfBossDraw(c, cy) {
    const b = S.bs;
    if (b && b.ch && b.ch.ph < 2) {
      const q = b.Rb * 0.6;
      ((c.fillStyle = `rgba(255,60,60,${0.14 + 0.1 * Math.sin(25 * S.t)})`),
        c.fillRect(b.x - q, b.y - cy, 2 * q, H));
    }
    if (b) {
      ((b.e.x = b.x), (b.e.flip = b.fl));
      const ch = b.ch,
        by = b.y - cy + 6 * K * Math.sin(2 * S.t);
      let rw = 0.09 * Math.sin(1.1 * b.t);
      if (ch) {
        const q0 = 0 === ch.ph ? Math.min(1, ch.t / 0.7) : 1 === ch.ph ? 1 : 1 - Math.min(1, ch.t / 1.1),
          q = q0 * q0 * (3 - 2 * q0);
        rw = rw * (1 - q) + (q * Math.PI) / 2;
      }
      const sp = b.sp;
      let sk = 0;
      sp &&
        ((sk = 0 === sp.ph ? Math.min(1, sp.t / 0.6) : 3 === sp.ph ? Math.max(0, 1 - sp.t / 0.7) : 1),
        (sk = sk * sk * (3 - 2 * sk)),
        (rw = ((b.sa || 0) % 6.2832) * (3 === sp.ph ? sk : 1)));
      b.e.rw = rw;
      if (ch && 1 === ch.ph) {
        ((c.strokeStyle = "rgba(255,255,255,.55)"), (c.lineWidth = 2.5 * K), (c.lineCap = "round"));
        for (let i = 0; i < 7; i++) {
          const xx = b.x + (i - 3) * b.Rb * 0.2,
            l = (90 + 40 * (i % 3)) * K;
          (c.beginPath(), c.moveTo(xx, by - b.Rb * 0.6 - l), c.lineTo(xx, by - b.Rb * 0.6), c.stroke());
        }
      }
      const sc = (b.pu > 0 ? 1 + 0.1 * Math.sin(Math.PI * (1 - b.pu / 0.4)) : 1) * (1 - 0.3 * sk);
      if (
        (c.save(),
        c.translate(b.x, by),
        c.scale(sc, sc),
        c.translate(-b.x, -by),
        gfAnim(c, b.e, by, S.t),
        c.restore(),
        sp && sk > 0.02)
      ) {
        const R0 = 0.5 * b.Rb,
          gr = c.createRadialGradient(-0.3 * R0, -0.3 * R0, 0.1 * R0, 0, 0, R0);
        (c.save(),
          c.translate(b.x, by),
          c.rotate(rw),
          (c.globalAlpha = sk),
          gr.addColorStop(0, "#9fd29a"),
          gr.addColorStop(0.6, "#4f9a62"),
          gr.addColorStop(1, "#2a5a3a"),
          (c.fillStyle = gr),
          c.beginPath(),
          c.arc(0, 0, R0, 0, 7),
          c.fill(),
          (c.strokeStyle = "rgba(20,60,40,.7)"),
          (c.lineWidth = 2.5 * K),
          c.stroke(),
          c.beginPath());
        for (let q = 0; q < 6; q++) {
          const a = (q * Math.PI) / 3;
          (c.moveTo(0.34 * R0 * Math.cos(a), 0.34 * R0 * Math.sin(a)),
            c.lineTo(R0 * Math.cos(a), R0 * Math.sin(a)));
        }
        (c.stroke(), c.beginPath(), c.arc(0, 0, 0.34 * R0, 0, 7), c.stroke(), c.restore());
      }
      gfPnDraw(c, cy);
    }
  }
  function gfOverlay(c, cy) {
    const wk = (GFTH === "mer" || SL > 100) && gfWkOn() ? (SL > 100 ? GFXWK : GFWK[S.bi % 10]) : null,
      tn = (wk && wk.night) || 0,
      tf = wk && wk.fog ? (S.fz ? 0.92 : wk.fog) : 0;
    ((S.on = (S.on || 0) + (tn - (S.on || 0)) * 0.03), (S.of = (S.of || 0) + (tf - (S.of || 0)) * 0.03));
    const px = f.x,
      py = f.y - cy;
    if (S.on > 0.02) {
      const col = S.bi % 10 == 9 ? "28,0,8" : "0,3,16",
        g = c.createRadialGradient(px, py, 60 * K, px, py, 300 * K),
        a = S.on * (S.bs ? 0.6 : 1);
      (g.addColorStop(0, `rgba(${col},0)`),
        g.addColorStop(0.45, `rgba(${col},${0.35 * a})`),
        g.addColorStop(1, `rgba(${col},${a})`),
        (c.fillStyle = g),
        c.fillRect(0, 0, W, H));
    }
    if (S.of > 0.02) {
      const g = c.createRadialGradient(px, py, 110 * K, px, py, 380 * K);
      (g.addColorStop(0, "rgba(150,178,172,0)"),
        g.addColorStop(1, `rgba(150,178,172,${S.of * (0.9 + 0.1 * Math.sin(S.t * 0.7))})`),
        (c.fillStyle = g),
        c.fillRect(0, 0, W, H));
    }
  }
  function gfGdPos(g) {
    if (g.dead) return [g.hx + g.vx * g.t2, f.y + g.hy + g.vy * g.t2];
    const p = Math.max(0, Math.min(1, (g.t - 0.08 * g.i) / 0.7)),
      e = p * p * (3 - 2 * p),
      sx = (W * (g.i + 0.5)) / 7 + 3 * K * Math.sin(1.6 * S.t + g.i),
      sy = -92 * K + 6 * K * Math.sin(2 * S.t + 1.1 * g.i);
    return [f.x + (sx - f.x) * e + (1 - e) * 20 * K * Math.sin(5 * p + g.i), f.y + sy * e];
  }
  function gfSch() {
    const o = [];
    for (const g of S.gd || [])
      if (!g.dead && g.t - 0.08 * g.i > 0.45) {
        const q = gfGdPos(g);
        o.push([q[0], q[1], g]);
      }
    return o;
  }
  function gfGdHit(g) {
    if (g.dead) return;
    const q = gfGdPos(g);
    ((g.dead = 1),
      (g.t2 = 0),
      (g.hx = q[0]),
      (g.hy = q[1] - f.y),
      (g.vx = (g.i - 3) * 28 * K + (g.i % 2 ? 1 : -1) * 30 * K),
      (g.vy = -120 * K),
      burst(q[0], q[1], 20, ["#bff6ff", "#ffffff", "#7fe6ff"], 220),
      sfx(620, 0.25));
  }
  function gfFr(c, cy) {
    for (const g of S.gd || []) {
      const q = gfGdPos(g),
        px = q[0],
        py = q[1] - cy,
        R0 = 26 * K;
      if (g.dead) {
        const u = g.t2 / 0.7;
        (c.save(),
          (c.globalAlpha = Math.max(0, 1 - u)),
          (c.strokeStyle = "#dff8ff"),
          (c.lineWidth = 3 * K * (1 - u)),
          c.beginPath(),
          c.arc(g.hx + 0 * u, g.hy + f.y - cy, R0 * (1 + 1.1 * u), 0, 7),
          c.stroke(),
          c.translate(px, py),
          c.rotate(0.5 * Math.sin(18 * g.t2) * (g.i % 2 ? 1 : -1)),
          c.scale(0.42, 0.42),
          fish(c, 0, 0, 0),
          c.restore());
        continue;
      }
      const p = Math.max(0, Math.min(1, (g.t - 0.08 * g.i) / 0.7)),
        sh = p < 1 ? p : 1 + 0.05 * Math.sin(3 * S.t + g.i),
        lo = p > 0;
      if (!lo) continue;
      (c.save(), c.translate(px, py), (c.globalAlpha = Math.min(1, 2 * p)));
      const gr = c.createRadialGradient(-0.3 * R0, -0.35 * R0, 0.1 * R0, 0, 0, R0 * sh);
      (gr.addColorStop(0, "rgba(190,245,255,.10)"),
        gr.addColorStop(0.75, "rgba(150,230,255,.16)"),
        gr.addColorStop(1, "rgba(190,250,255,.5)"),
        (c.fillStyle = gr),
        c.beginPath(),
        c.arc(0, 0, R0 * sh, 0, 7),
        c.fill(),
        (c.strokeStyle = "rgba(255,255,255,.75)"),
        (c.lineWidth = 1.8 * K),
        c.stroke(),
        c.beginPath(),
        c.arc(0, 0, R0 * sh * 0.78, 3.6, 4.6),
        (c.strokeStyle = "rgba(255,255,255,.8)"),
        (c.lineWidth = 2 * K),
        c.stroke(),
        c.save(),
        c.rotate(0.1 * Math.sin(2.2 * S.t + g.i)),
        c.scale(0.42, 0.42),
        fish(c, 0, 0, 0),
        c.restore(),
        c.restore());
    }
  }
  const GFSP = {
    danio: { w: 5.4, l: 13, t: "fork", p: "h", n: 4 },
    cardinal: { w: 5.6, l: 13, t: "fork", p: "h", n: 2 },
    platy: { w: 7.6, l: 12, t: "fan", p: "s" },
    molly: { w: 7.8, l: 12.5, t: "fan", tl: 1.2, p: "s" },
    betta: { w: 5.8, l: 12, t: "veil", p: "d", bf: 1 },
    gourami: { w: 7.4, l: 12, t: "round", p: "s", x: "ant" },
    globe: { w: 9, l: 10.5, t: "none", p: "s", x: "spk" },
    ange: { w: 6.2, l: 11.5, t: "fork", tl: 1.1, p: "b" },
    clown: { w: 7.6, l: 12.3, t: "round", p: "b", pc: "#ffffff", o: 1 },
    discus: { w: 10, l: 10.5, t: "none", p: "b" },
    lune: { w: 9.8, l: 10, t: "none", p: "s" },
    hockey: { w: 7.4, l: 12.3, t: "fork", p: "b", pc: "#d63a52", x: "cap" },
    gardien: { w: 7.8, l: 12.5, t: "fork", p: "b", pc: "#1b2a6a", x: "gk" },
    royal: { w: 6.4, l: 12, t: "veil", tl: 1.3, p: "d", bf: 1 },
    lumignon: { w: 8.4, l: 10.8, t: "round", p: "s", x: "lure" },
    koiciel: { w: 6.2, l: 14, t: "fan", p: "o" },
    noel: { w: 7.8, l: 12.4, t: "fan", p: "s", pc: "#ffffff", x: "noel" },
    sapin: { w: 7.4, l: 12, t: "fork", p: "s", pc: "#ffd34d", x: "sap" },
  };
  function gfSh(h, k) {
    const n = parseInt(h.slice(1), 16),
      r = n >> 16,
      g = (n >> 8) & 255,
      b = 255 & n,
      m = k < 0 ? 0 : 255,
      a = Math.abs(k),
      x = (v) => Math.round(v + (m - v) * a);
    return "#" + ((1 << 24) + (x(r) << 16) + (x(g) << 8) + x(b)).toString(16).slice(1);
  }
  function gfTopGen(c, px, py, an, id) {
    const F = FISH.find((e) => e.id === id) || { b: "#ff7a4d", f: "#ffb089" },
      P = GFSP[id] || { w: 7.4, l: 12, t: "fan", p: "s" },
      s = 2.1 * K * (0.9 + 0.1 * (F.sz || 1)),
      t = S.t,
      fl = Math.sin(f.ph * 12),
      ex = Math.max(-1.2, Math.min(1.2, f.vx / 180)),
      sw = 0.32 * Math.sin(t * 7) + 0.25 * ex,
      W = P.w * s,
      L = P.l * s,
      b = F.b,
      lt = gfSh(b, 0.38),
      dk = gfSh(b, -0.35),
      pc = P.pc || F.sc || F.sp || dk,
      tc = F.f2 || gfSh(b, 0.22),
      tl = (P.tl || 1) * s;
    (c.save(),
      c.translate(px, py),
      c.rotate(an),
      c.scale(FQ[0], FQ[1]),
      (c.globalCompositeOperation = "lighter"),
      (c.globalAlpha = 0.8),
      c.drawImage(BP, -34 * s, -34 * s, 68 * s, 68 * s),
      (c.globalAlpha = 1),
      (c.globalCompositeOperation = "source-over"),
      c.save(),
      c.translate(0, 0.9 * L),
      c.rotate(sw * ("veil" === P.t ? 1.3 : 1)),
      (c.fillStyle = tc),
      (c.globalAlpha = 0.88),
      c.beginPath());
    if ("fork" === P.t)
      (c.moveTo(0, -2 * s), c.lineTo(-6.5 * tl, 12 * tl), c.lineTo(0, 7 * tl), c.lineTo(6.5 * tl, 12 * tl));
    else if ("veil" === P.t)
      (c.moveTo(0, -2 * s),
        c.bezierCurveTo(-9 * tl, 6 * tl, -12 * tl, 18 * tl, -5 * tl, 26 * tl),
        c.bezierCurveTo(-2 * tl, 21 * tl, 2 * tl, 21 * tl, 5 * tl, 26 * tl),
        c.bezierCurveTo(12 * tl, 18 * tl, 9 * tl, 6 * tl, 0, -2 * s));
    else if ("round" === P.t)
      (c.moveTo(0, -2 * s),
        c.bezierCurveTo(-9 * tl, 4 * tl, -9 * tl, 13 * tl, 0, 14 * tl),
        c.bezierCurveTo(9 * tl, 13 * tl, 9 * tl, 4 * tl, 0, -2 * s));
    else if ("fan" === P.t)
      (c.moveTo(0, -2 * s),
        c.bezierCurveTo(-8 * tl, 2 * tl, -14 * tl, 12 * tl, -8 * tl, 21 * tl),
        c.bezierCurveTo(-4 * tl, 18 * tl, -2 * tl, 19 * tl, 0, 14 * tl),
        c.bezierCurveTo(2 * tl, 19 * tl, 4 * tl, 18 * tl, 8 * tl, 21 * tl),
        c.bezierCurveTo(14 * tl, 12 * tl, 8 * tl, 2 * tl, 0, -2 * s));
    else c.ellipse(0, 3 * s, 0.55 * W, 4 * s, 0, 0, 7);
    if ((c.closePath(), c.fill(), (c.globalAlpha = 1), "none" !== P.t)) {
      ((c.strokeStyle = "rgba(255,255,255,.35)"),
        (c.lineWidth = 0.9 * s),
        c.beginPath(),
        c.moveTo(0, 0),
        c.lineTo(0, 10 * tl),
        c.moveTo(0, 0),
        c.lineTo(-4 * tl, 9 * tl),
        c.moveTo(0, 0),
        c.lineTo(4 * tl, 9 * tl),
        c.stroke());
    }
    c.restore();
    for (const e of [-1, 1]) {
      (c.save(),
        c.translate(0.85 * W * e, -0.2 * L),
        c.rotate(e * (0.6 + 0.35 * fl)),
        c.beginPath(),
        c.ellipse(0, (P.bf ? 7 : 4) * s, (P.bf ? 3.6 : 2.8) * s, (P.bf ? 9 : 6) * s, 0, 0, 7),
        (c.fillStyle = P.bf ? tc : lt),
        (c.globalAlpha = 0.8),
        c.fill(),
        c.restore());
    }
    const bp = () => {
        (c.beginPath(),
          c.moveTo(0, -L),
          c.bezierCurveTo(0.9 * W, -L, 1.05 * W, -0.25 * L, 0.85 * W, 0.3 * L),
          c.bezierCurveTo(0.6 * W, 0.85 * L, 0.28 * W, L, 0, L),
          c.bezierCurveTo(-0.28 * W, L, -0.6 * W, 0.85 * L, -0.85 * W, 0.3 * L),
          c.bezierCurveTo(-1.05 * W, -0.25 * L, -0.9 * W, -L, 0, -L),
          c.closePath());
      },
      g = c.createLinearGradient(-W, 0, W, 0);
    (g.addColorStop(0, dk),
      g.addColorStop(0.3, b),
      g.addColorStop(0.5, lt),
      g.addColorStop(0.7, b),
      g.addColorStop(1, dk),
      bp(),
      (c.fillStyle = g),
      (c.shadowColor = b),
      (c.shadowBlur = 12 * s),
      c.fill(),
      (c.shadowBlur = 0),
      c.save(),
      bp(),
      c.clip());
    if ("h" === P.p) {
      const n = P.n || 4;
      ((c.strokeStyle = pc), (c.lineWidth = 1.3 * s));
      for (let i = 0; i < n; i++) {
        const x = ((i + 0.5) / n - 0.5) * W * 1.5;
        (c.beginPath(), c.moveTo(1.1 * x, -L), c.lineTo(0.9 * x, L), c.stroke());
      }
    } else if ("b" === P.p) {
      c.lineCap = "butt";
      for (const y of [-0.35, 0.08, 0.5]) {
        const yy = L * y,
          h = 0.15 * L;
        if (P.o) {
          ((c.strokeStyle = "#1a0a0a"),
            (c.lineWidth = h + 2 * s),
            c.beginPath(),
            c.moveTo(-1.3 * W, yy),
            c.quadraticCurveTo(0, yy + 0.12 * L, 1.3 * W, yy),
            c.stroke());
        }
        ((c.strokeStyle = pc),
          (c.lineWidth = h),
          c.beginPath(),
          c.moveTo(-1.3 * W, yy),
          c.quadraticCurveTo(0, yy + 0.12 * L, 1.3 * W, yy),
          c.stroke());
      }
    } else if ("s" === P.p) {
      ((c.fillStyle = pc), (c.globalAlpha = 0.75));
      for (const q of [
        [-0.4, -0.45],
        [0.35, -0.3],
        [-0.2, -0.05],
        [0.45, 0.15],
        [-0.45, 0.3],
        [0.1, 0.4],
        [0.3, 0.62],
        [-0.25, 0.66],
        [0, -0.22],
      ]) {
        (c.beginPath(), c.arc(q[0] * W, q[1] * L, (0.9 + 0.4 * Math.abs(q[0])) * s, 0, 7), c.fill());
      }
      c.globalAlpha = 1;
    } else if ("d" === P.p) {
      ((c.strokeStyle = tc), (c.globalAlpha = 0.55), (c.lineWidth = 1.2 * s));
      for (const x of [-0.5, 0, 0.5]) {
        (c.beginPath(), c.moveTo(x * W, -L), c.lineTo(x * W * 0.8, L), c.stroke());
      }
      c.globalAlpha = 1;
    } else if ("o" === P.p) {
      ((c.fillStyle = F.f), (c.globalAlpha = 0.95));
      for (const q of [
        [-0.3, -0.3, 0.55, 0.2],
        [0.25, 0.1, 0.6, 0.24],
        [-0.2, 0.5, 0.45, 0.18],
      ]) {
        (c.beginPath(), c.ellipse(q[0] * W, q[1] * L, q[2] * W, q[3] * L, 0, 0, 7), c.fill());
      }
      ((c.fillStyle = F.f2 || "#ffd27a"),
        c.beginPath(),
        c.ellipse(0.3 * W, 0.1 * L, 0.28 * W, 0.1 * L, 0, 0, 7),
        c.fill(),
        (c.globalAlpha = 1));
    }
    ((c.fillStyle = "rgba(255,255,255,.3)"),
      c.beginPath(),
      c.ellipse(-0.3 * W, -0.35 * L, 0.22 * W, 0.3 * L, -0.15, 0, 7),
      c.fill(),
      (c.strokeStyle = "rgba(255,255,255,.22)"),
      (c.lineWidth = s),
      c.beginPath(),
      c.moveTo(0, -0.7 * L),
      c.lineTo(0, 0.8 * L),
      c.stroke(),
      c.restore());
    const X = P.x;
    if ("ant" === X) {
      ((c.strokeStyle = tc), (c.lineWidth = 0.9 * s));
      for (const e of [-1, 1]) {
        (c.beginPath(),
          c.moveTo(e * s, -L),
          c.quadraticCurveTo(e * 5 * s, -L - 6 * s, e * (3 + 2 * Math.sin(2 * t)) * s, -L - 13 * s),
          c.stroke());
      }
    } else if ("spk" === X) {
      ((c.strokeStyle = dk), (c.lineWidth = s));
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * 6.2832,
          ca = Math.cos(a),
          sa = Math.sin(a);
        (c.beginPath(),
          c.moveTo(0.97 * ca * W, 0.93 * sa * L),
          c.lineTo(1.2 * ca * W, 1.15 * sa * L),
          c.stroke());
      }
    } else if ("lure" === X) {
      ((c.strokeStyle = dk),
        (c.lineWidth = 1.2 * s),
        c.beginPath(),
        c.moveTo(0, -0.9 * L),
        c.quadraticCurveTo(0.5 * W * Math.sin(3 * t), -L - 6 * s, 0, -L - 10 * s),
        c.stroke(),
        (c.globalCompositeOperation = "lighter"),
        c.drawImage(BP, -9 * s, -L - 19 * s, 18 * s, 18 * s),
        (c.globalCompositeOperation = "source-over"),
        (c.fillStyle = "#ffc83d"),
        c.beginPath(),
        c.arc(0, -L - 10 * s, 2.6 * s, 0, 7),
        c.fill());
    } else if ("cap" === X || "gk" === X || "noel" === X) {
      const cy = -0.38 * L,
        r = ("noel" === X ? 0.72 : 0.93) * W;
      (c.beginPath(),
        c.arc(0, cy, r, 0, 7),
        (c.fillStyle = "cap" === X ? "#1f4fbf" : "gk" === X ? "#f4f6fa" : "#d3232f"),
        c.fill(),
        (c.lineWidth = ("gk" === X ? 1 : 2.2) * s),
        (c.strokeStyle = "gk" === X ? "#9aa3b5" : "#eef3ff"),
        c.stroke());
      if ("gk" === X) {
        ((c.strokeStyle = "#2a4fa8"),
          (c.lineWidth = 1.6 * s),
          c.beginPath(),
          c.moveTo(0, cy - r),
          c.lineTo(0, cy + r),
          c.stroke(),
          (c.strokeStyle = "#6f7890"),
          (c.lineWidth = 0.8 * s));
        for (const d of [0.25, 0.55]) {
          (c.beginPath(), c.moveTo(-r * 0.8, cy + r * d), c.lineTo(r * 0.8, cy + r * d), c.stroke());
        }
      } else {
        ((c.strokeStyle = "rgba(255,255,255,.3)"), (c.lineWidth = 0.7 * s));
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * 6.2832;
          (c.beginPath(),
            c.moveTo(0, cy),
            c.lineTo(Math.cos(a) * r * 0.85, cy + Math.sin(a) * r * 0.85),
            c.stroke());
        }
        ((c.fillStyle = "#eef3ff"), c.beginPath(), c.arc(0, cy, 1.9 * s, 0, 7), c.fill());
      }
    } else if ("sap" === X) {
      ((c.fillStyle = "#ffd34d"), c.beginPath());
      for (let i = 0; i < 10; i++) {
        const a = -Math.PI / 2 + (i * Math.PI) / 5,
          r = i % 2 ? 1.4 * s : 3.2 * s;
        c.lineTo(Math.cos(a) * r, -0.3 * L + Math.sin(a) * r);
      }
      (c.closePath(), c.fill());
    }
    for (const e of [-1, 1]) {
      const a = ("cap" === X || "gk" === X ? 1.02 : 0.8) * W * e,
        n = -0.6 * L;
      (c.beginPath(),
        c.arc(a, n, 2.5 * s, 0, 7),
        (c.fillStyle = "#fff"),
        c.fill(),
        c.beginPath(),
        c.arc(a + ex * 0.9 * s, n - 0.4 * s, 1.5 * s, 0, 7),
        (c.fillStyle = "#15151f"),
        c.fill(),
        c.beginPath(),
        c.arc(a + ex * 0.9 * s - 0.5 * s, n - 1 * s, 0.5 * s, 0, 7),
        (c.fillStyle = "#fff"),
        c.fill());
    }
    if (S.shield || (S.inv > 0 && Math.floor(12 * S.t) % 2)) {
      (c.beginPath(),
        c.arc(0, 2 * s, 24 * s, 0, 7),
        (c.strokeStyle = "rgba(190,245,255,.85)"),
        (c.lineWidth = 2 * s),
        c.stroke(),
        (c.fillStyle = "rgba(150,230,255,.12)"),
        c.fill());
    }
    if (S.mag > 0) {
      ((c.globalAlpha = 0.4 + 0.25 * Math.sin(8 * t)),
        c.beginPath(),
        c.arc(0, 0, 30 * s + 3 * Math.sin(6 * t), 0, 7),
        (c.strokeStyle = "#ffe9a8"),
        c.setLineDash([4 * s, 6 * s]),
        (c.lineWidth = 1.6 * s),
        c.stroke(),
        c.setLineDash([]),
        (c.globalAlpha = 1));
    }
    c.restore();
  }

  function gfTopFish(c, px, py, an, id) {
    if ("rouge" !== id && "neon" !== id) return gfTopGen(c, px, py, an, id);
    const s = 2.1 * K * (id === "neon" ? 0.95 : 1.05),
      t = S.t,
      fl = Math.sin(f.ph * 12),
      ex = Math.max(-1.2, Math.min(1.2, f.vx / 180)),
      sw = 0.32 * Math.sin(t * 7) + 0.25 * ex;
    (c.save(),
      c.translate(px, py),
      c.rotate(an),
      c.scale(FQ[0], FQ[1]),
      (c.globalCompositeOperation = "lighter"),
      c.drawImage(id === "neon" ? BC : BP, -34 * s, -34 * s, 68 * s, 68 * s),
      (c.globalCompositeOperation = "source-over"));
    if (id === "neon") {
      (c.save(),
        c.translate(0, 10.5 * s),
        c.rotate(sw),
        c.beginPath(),
        c.moveTo(0, 0),
        c.lineTo(-6 * s, 13 * s),
        c.lineTo(0, 9 * s),
        c.lineTo(6 * s, 13 * s),
        c.closePath(),
        (c.fillStyle = "rgba(255,110,140,.85)"),
        c.fill(),
        c.restore());
      for (const e of [-1, 1]) {
        (c.save(),
          c.translate(4.6 * s * e, -3 * s),
          c.rotate(e * (0.55 + 0.3 * fl)),
          c.beginPath(),
          c.ellipse(0, 3 * s, 1.8 * s, 4.6 * s, 0, 0, 7),
          (c.fillStyle = "rgba(190,240,255,.7)"),
          c.fill(),
          c.restore());
      }
      const g = c.createLinearGradient(-7 * s, 0, 7 * s, 0);
      (g.addColorStop(0, "#2c7fd8"),
        g.addColorStop(0.5, "#8fe2ff"),
        g.addColorStop(1, "#2c7fd8"),
        c.beginPath(),
        c.ellipse(0, -1 * s, 6.8 * s, 13.2 * s, 0, 0, 7),
        (c.fillStyle = g),
        (c.shadowColor = "#4cc3ff"),
        (c.shadowBlur = 14 * s),
        c.fill(),
        (c.shadowBlur = 0),
        c.save(),
        c.clip());
      const r = c.createLinearGradient(0, -1 * s, 0, 12 * s);
      (r.addColorStop(0, "rgba(255,77,109,0)"),
        r.addColorStop(0.6, "rgba(255,77,109,.9)"),
        r.addColorStop(1, "rgba(255,77,109,1)"),
        (c.fillStyle = r),
        c.fillRect(-8 * s, -1 * s, 16 * s, 16 * s),
        (c.strokeStyle = "#3fe8ff"),
        (c.lineWidth = 1.8 * s),
        (c.lineCap = "round"));
      for (const e of [-1, 1]) {
        (c.beginPath(),
          c.moveTo(3.8 * s * e, -15 * s),
          c.quadraticCurveTo(4.8 * s * e, 0, 3.2 * s * e, 15 * s),
          c.stroke());
      }
      (c.restore(),
        c.beginPath(),
        c.moveTo(0, -11 * s),
        c.lineTo(0, 5 * s),
        (c.strokeStyle = "rgba(255,255,255,.35)"),
        (c.lineWidth = 1 * s),
        c.stroke());
      for (const e of [-1, 1]) {
        const a = 4.4 * s * e,
          n = -9.2 * s;
        (c.beginPath(),
          c.arc(a, n, 2.9 * s, 0, 7),
          (c.fillStyle = "#fff"),
          c.fill(),
          c.beginPath(),
          c.arc(a + ex * 1.1 * s, n - 0.5 * s, 1.7 * s, 0, 7),
          (c.fillStyle = "#123a3a"),
          c.fill(),
          c.beginPath(),
          c.arc(a + ex * 1.1 * s - 0.6 * s, n - 1.2 * s, 0.6 * s, 0, 7),
          (c.fillStyle = "#fff"),
          c.fill());
      }
    } else {
      (c.save(), c.translate(0, 9 * s), c.rotate(sw));
      for (const e of [-1, 1]) {
        (c.beginPath(),
          c.moveTo(0, 0),
          c.bezierCurveTo(7 * s * e, 3 * s, 15 * s * e, 12 * s, 9 * s * e, 24 * s),
          c.bezierCurveTo(5 * s * e, 21 * s, 2 * s * e, 23 * s, 0, 17 * s),
          c.closePath(),
          (c.fillStyle = "rgba(255,140,90,.82)"),
          c.fill(),
          (c.strokeStyle = "rgba(255,225,200,.5)"),
          (c.lineWidth = 1 * s),
          c.beginPath(),
          c.moveTo(0, 2 * s),
          c.lineTo(8 * s * e, 20 * s),
          c.moveTo(0, 2 * s),
          c.lineTo(4 * s * e, 21 * s),
          c.stroke());
      }
      c.restore();
      for (const e of [-1, 1]) {
        (c.save(),
          c.translate(7.4 * s * e, -1 * s),
          c.rotate(e * (0.75 + 0.35 * fl)),
          c.beginPath(),
          c.ellipse(0, 4 * s, 3.2 * s, 6.2 * s, 0, 0, 7),
          (c.fillStyle = "rgba(255,176,137,.85)"),
          c.fill(),
          c.restore());
      }
      const g = c.createLinearGradient(-9 * s, 0, 9 * s, 0);
      (g.addColorStop(0, "#e8582d"),
        g.addColorStop(0.5, "#ffa070"),
        g.addColorStop(1, "#e8582d"),
        c.beginPath(),
        c.ellipse(0, -1 * s, 8.4 * s, 12.8 * s, 0, 0, 7),
        (c.fillStyle = g),
        (c.shadowColor = "#ff9a66"),
        (c.shadowBlur = 14 * s),
        c.fill(),
        (c.shadowBlur = 0),
        (c.strokeStyle = "rgba(255,255,255,.4)"),
        (c.lineWidth = 1.2 * s),
        c.beginPath(),
        c.moveTo(0, -5 * s),
        c.lineTo(0, 9 * s),
        c.stroke());
      for (let i = 0; i < 4; i++) {
        (c.beginPath(),
          c.arc(0, (-3 + i * 3.4) * s, 3.2 * s, 0.2 * Math.PI, 0.8 * Math.PI),
          (c.strokeStyle = "rgba(255,230,210,.35)"),
          c.stroke());
      }
      (c.beginPath(),
        c.ellipse(-3 * s, -6.5 * s, 2.2 * s, 3.4 * s, -0.4, 0, 7),
        (c.fillStyle = "rgba(255,255,255,.4)"),
        c.fill());
      for (const e of [-1, 1]) {
        const a = 6.2 * s * e,
          n = -8.4 * s;
        (c.beginPath(),
          c.arc(a, n, 3.1 * s, 0, 7),
          (c.fillStyle = "#fff"),
          c.fill(),
          c.beginPath(),
          c.arc(a + ex * 1.2 * s, n - 0.4 * s, 1.8 * s, 0, 7),
          (c.fillStyle = "#2a1530"),
          c.fill(),
          c.beginPath(),
          c.arc(a + ex * 1.2 * s - 0.6 * s, n - 1.2 * s, 0.6 * s, 0, 7),
          (c.fillStyle = "#fff"),
          c.fill());
      }
      (c.beginPath(), c.arc(0, -12.4 * s, 1.2 * s, 0, 7), (c.fillStyle = "#b33a1a"), c.fill());
    }
    if (S.shield || (S.inv > 0 && Math.floor(S.t * 12) % 2)) {
      (c.beginPath(),
        c.arc(0, 2 * s, 24 * s, 0, 7),
        (c.strokeStyle = "rgba(190,245,255,.85)"),
        (c.lineWidth = 2 * s),
        c.stroke(),
        (c.fillStyle = "rgba(150,230,255,.12)"),
        c.fill());
    }
    if (S.mag > 0) {
      ((c.globalAlpha = 0.4 + 0.25 * Math.sin(t * 8)),
        c.beginPath(),
        c.arc(0, 0, 30 * s + 3 * Math.sin(t * 6), 0, 7),
        (c.strokeStyle = "#ffe9a8"),
        c.setLineDash([4 * s, 6 * s]),
        (c.lineWidth = 1.6 * s),
        c.stroke(),
        c.setLineDash([]),
        (c.globalAlpha = 1));
    }
    c.restore();
  }
  function gfStar(c, px, py, an, F2) {
    const s = 2.1 * K,
      t = S.t,
      fl = Math.sin(f.ph * 12),
      ex = Math.max(-1.2, Math.min(1.2, f.vx / 180)),
      L = 14 * s,
      W = 7.4 * s,
      O = "#1a1040",
      st = (x, y, R, r) => {
        c.beginPath();
        for (let i = 0; i < 10; i++) {
          const a = -Math.PI / 2 + (i * Math.PI) / 5,
            q = i % 2 ? r : R;
          c.lineTo(x + Math.cos(a) * q, y + Math.sin(a) * q);
        }
        c.closePath();
      };
    (c.save(), c.translate(px, py), c.rotate(an), c.scale(FQ[0], FQ[1]));
    if (!F2) {
      ((c.globalCompositeOperation = "lighter"),
        (c.globalAlpha = 0.9),
        c.drawImage(BC, -40 * s, -40 * s, 80 * s, 80 * s),
        (c.globalAlpha = 0.55),
        c.drawImage(BP, -30 * s, -26 * s, 60 * s, 60 * s),
        (c.globalAlpha = 1),
        (c.globalCompositeOperation = "source-over"));
    }
    if (!F2) {
      (c.beginPath(),
        c.moveTo(-5 * s, 9 * s),
        c.bezierCurveTo(-18 * s, 22 * s, -15 * s, 40 * s, 0, 48 * s + 3 * s * Math.sin(t * 4)),
        c.bezierCurveTo(15 * s, 40 * s, 18 * s, 22 * s, 5 * s, 9 * s),
        c.closePath());
      const g = c.createLinearGradient(0, 9 * s, 0, 48 * s);
      (g.addColorStop(0, "rgba(255,138,216,.7)"),
        g.addColorStop(1, "rgba(160,110,255,0)"),
        (c.fillStyle = g),
        c.fill());
    }
    for (let i = -1; i <= 1; i++) {
      const w = Math.sin(t * 5 + i * 1.3) * 6 * s,
        E = (i ? 44 : 56) * s;
      (c.beginPath(),
        c.moveTo(i * 3 * s, 10 * s),
        c.bezierCurveTo(i * 8 * s + w, 22 * s, i * 14 * s - w, 0.7 * E, i * 10 * s + w * 1.4, E),
        (c.lineWidth = (i ? 2.6 : 3.4) * s),
        (c.lineCap = "round"));
      if (F2) c.strokeStyle = i ? "#7fe0ff" : "#ff8ad8";
      else {
        const g = c.createLinearGradient(0, 10 * s, 0, E);
        (g.addColorStop(0, "#9fe9ff"), g.addColorStop(1, "rgba(255,138,216,0)"), (c.strokeStyle = g));
      }
      c.stroke();
    }
    for (const e of [-1, 1]) {
      (c.save(),
        c.translate(6 * s * e, -1 * s),
        c.rotate(e * (0.12 + 0.14 * fl)),
        c.beginPath(),
        c.moveTo(0, 0),
        c.bezierCurveTo(10 * s * e, -6 * s, 24 * s * e, -2 * s, 26 * s * e, 10 * s),
        c.bezierCurveTo(16 * s * e, 7 * s, 8 * s * e, 12 * s, 0, 9 * s),
        c.closePath());
      if (F2)
        ((c.fillStyle = "#5a8cff"),
          c.fill(),
          (c.strokeStyle = O),
          (c.lineWidth = 2 * s),
          (c.lineJoin = "round"),
          c.stroke());
      else {
        const g = c.createLinearGradient(0, 0, 26 * s * e, 0);
        (g.addColorStop(0, "rgba(126,224,255,.9)"),
          g.addColorStop(1, "rgba(160,90,255,.4)"),
          (c.fillStyle = g),
          c.fill(),
          (c.strokeStyle = "rgba(255,255,255,.6)"),
          (c.lineWidth = 0.8 * s),
          c.stroke(),
          c.beginPath());
        for (const r of [0.35, 0.65])
          (c.moveTo(0, 4 * s),
            c.quadraticCurveTo(12 * s * e * r, 2 * s, (10 + 16 * r) * s * e, (2 + 8 * r) * s));
        ((c.strokeStyle = "rgba(255,255,255,.35)"), c.stroke());
      }
      ((c.fillStyle = "#fff7c8"), st(26 * s * e, 10 * s, 2.6 * s, 1 * s), c.fill(), c.restore());
    }
    const bp = () => {
      (c.beginPath(),
        c.moveTo(0, -L),
        c.bezierCurveTo(0.9 * W, -L, 1.05 * W, -0.25 * L, 0.85 * W, 0.3 * L),
        c.bezierCurveTo(0.6 * W, 0.85 * L, 0.28 * W, L, 0, L),
        c.bezierCurveTo(-0.28 * W, L, -0.6 * W, 0.85 * L, -0.85 * W, 0.3 * L),
        c.bezierCurveTo(-1.05 * W, -0.25 * L, -0.9 * W, -L, 0, -L),
        c.closePath());
    };
    if (F2) {
      (bp(),
        (c.fillStyle = "#7a6bff"),
        c.fill(),
        (c.strokeStyle = O),
        (c.lineWidth = 2.4 * s),
        (c.lineJoin = "round"),
        c.stroke(),
        c.beginPath(),
        c.ellipse(0, 0.1 * L, 0.5 * W, 0.55 * L, 0, 0, 7),
        (c.fillStyle = "#b9c8ff"),
        c.fill(),
        (c.fillStyle = "#fff"));
      for (const q of [
        [-0.4, -0.3],
        [0.45, -0.1],
        [-0.3, 0.5],
        [0.3, 0.65],
        [0, 0.2],
      ]) {
        (c.beginPath(), c.arc(q[0] * W, q[1] * L, 0.8 * s, 0, 7), c.fill());
      }
    } else {
      const g = c.createLinearGradient(0, -L, 0, L);
      (g.addColorStop(0, "#e8fbff"),
        g.addColorStop(0.35, "#7fe0ff"),
        g.addColorStop(0.7, "#8a6bff"),
        g.addColorStop(1, "#ff8ad8"),
        bp(),
        (c.fillStyle = g),
        (c.shadowColor = "#7fe0ff"),
        (c.shadowBlur = 16 * s),
        c.fill(),
        (c.shadowBlur = 0),
        c.save(),
        bp(),
        c.clip());
      const h = c.createLinearGradient(-W, 0, W, 0);
      (h.addColorStop(0, "rgba(20,0,80,.6)"),
        h.addColorStop(0.35, "rgba(20,0,80,0)"),
        h.addColorStop(0.65, "rgba(20,0,80,0)"),
        h.addColorStop(1, "rgba(20,0,80,.6)"),
        (c.fillStyle = h),
        c.fillRect(-W, -L, 2 * W, 2 * L));
      const P = [];
      for (let i = 0; i < 18; i++) {
        const x = (((37 * i) % 100) / 100 - 0.5) * W * 1.6,
          y = (((53 * i) % 100) / 100 - 0.5) * L * 1.8;
        (P.push([x, y]),
          (c.globalAlpha = 0.45 + 0.55 * Math.max(0, Math.sin(3 * t + i * 2.1))),
          (c.fillStyle = "#fff"),
          c.beginPath(),
          c.arc(x, y, (0.3 + (i % 5) * 0.14) * s, 0, 7),
          c.fill());
      }
      ((c.globalAlpha = 0.3), (c.strokeStyle = "#fff"), (c.lineWidth = 0.6 * s), c.beginPath());
      for (const i of [0, 3, 7, 11, 14]) c.lineTo(P[i][0], P[i][1]);
      (c.stroke(),
        (c.globalAlpha = 1),
        (c.fillStyle = "rgba(255,255,255,.3)"),
        c.beginPath(),
        c.ellipse(-0.3 * W, -0.35 * L, 0.2 * W, 0.3 * L, -0.15, 0, 7),
        c.fill(),
        c.restore());
    }
    (c.save(),
      F2 || ((c.shadowColor = "#ffe9a8"), (c.shadowBlur = 10 * s)),
      (c.fillStyle = "#ffe9a8"),
      st(0, -0.52 * L, 3.6 * s, 1.6 * s),
      c.fill(),
      F2 && ((c.strokeStyle = O), (c.lineWidth = 1.4 * s), c.stroke()),
      c.restore());
    for (const e of [-1, 1]) {
      const a = 0.62 * W * e,
        n = -0.62 * L;
      (c.beginPath(),
        c.arc(a, n, 2.9 * s, 0, 7),
        (c.fillStyle = "#fff"),
        c.fill(),
        F2 && ((c.strokeStyle = O), (c.lineWidth = 1.2 * s), c.stroke()));
      if (F2) c.fillStyle = O;
      else {
        const g = c.createRadialGradient(a, n, 0, a, n, 2 * s);
        (g.addColorStop(0, "#bff6ff"),
          g.addColorStop(0.6, "#6a5cff"),
          g.addColorStop(1, "#1a1060"),
          (c.fillStyle = g));
      }
      (c.beginPath(),
        c.arc(a + ex * 0.9 * s, n - 0.3 * s, 1.9 * s, 0, 7),
        c.fill(),
        (c.fillStyle = "#fff"),
        c.beginPath(),
        c.arc(a + ex * 0.9 * s - 0.6 * s, n - 1 * s, 0.6 * s, 0, 7),
        c.fill());
    }
    if (!F2) {
      for (let i = 0; i < 4; i++) {
        const a = 1.2 * t + (i * Math.PI) / 2,
          x = Math.cos(a) * 25 * s,
          y = Math.sin(a) * 11 * s - 2 * s;
        ((c.globalCompositeOperation = "lighter"),
          c.drawImage(BC, x - 4 * s, y - 4 * s, 8 * s, 8 * s),
          (c.globalCompositeOperation = "source-over"),
          (c.fillStyle = "#fff"),
          st(x, y, 1.8 * s, 0.7 * s),
          c.fill());
      }
    }
    if (S.shield || (S.inv > 0 && Math.floor(12 * S.t) % 2)) {
      (c.beginPath(),
        c.arc(0, 2 * s, 26 * s, 0, 7),
        (c.strokeStyle = "rgba(190,245,255,.85)"),
        (c.lineWidth = 2 * s),
        c.stroke(),
        (c.fillStyle = "rgba(150,230,255,.12)"),
        c.fill());
    }
    if (S.mag > 0) {
      ((c.globalAlpha = 0.4 + 0.25 * Math.sin(8 * t)),
        c.beginPath(),
        c.arc(0, 0, 32 * s + 3 * Math.sin(6 * t), 0, 7),
        (c.strokeStyle = "#ffe9a8"),
        c.setLineDash([4 * s, 6 * s]),
        (c.lineWidth = 1.6 * s),
        c.stroke(),
        c.setLineDash([]),
        (c.globalAlpha = 1));
    }
    c.restore();
  }

  function fish(c, px, py, an) {
    const KS = gfXl() ? "sapin" : GF.sk;
    if (KS && "e2d" !== KS) return gfTopFish(c, px, py, an, KS);
    return gfStar(c, px, py, an, "e2d" === KS);
    const s = 2.1 * K,
      t = S.t,
      fl = Math.sin(f.ph * 12);
    (c.save(),
      c.translate(px, py),
      c.rotate(an),
      c.scale(FQ[0], FQ[1]),
      (c.globalCompositeOperation = "lighter"),
      c.drawImage(BC, -34 * s, -34 * s, 68 * s, 68 * s),
      (c.globalCompositeOperation = "source-over"));
    for (const e of [-1, 1]) {
      (c.save(),
        c.translate(9 * s * e, 4 * s),
        c.rotate(e * (0.5 + 0.35 * fl)),
        c.beginPath(),
        c.moveTo(0, 0),
        c.quadraticCurveTo(10 * s * e, 4 * s, 13 * s * e, 13 * s),
        c.quadraticCurveTo(4 * s * e, 9 * s, 0, 6 * s),
        c.closePath(),
        (c.fillStyle = "rgba(160,240,255,.75)"),
        c.fill(),
        c.restore());
    }
    for (const e of [-1, 1]) {
      (c.beginPath(), c.moveTo(4 * s * e, 9 * s));
      const a = Math.sin(t * 6 + e) * 5 * s;
      (c.bezierCurveTo(6 * s * e + a, 20 * s, -4 * s * e - a, 28 * s, 3 * s * e + a, 38 * s),
        (c.strokeStyle = e < 0 ? "rgba(140,240,255,.8)" : "rgba(255,140,220,.8)"),
        (c.lineWidth = 2.4 * s),
        (c.lineCap = "round"),
        c.stroke());
    }
    const g = c.createLinearGradient(0, -14 * s, 0, 14 * s);
    (g.addColorStop(0, "#d6fbff"),
      g.addColorStop(0.55, "#7fe0ff"),
      g.addColorStop(1, "#ff8ad8"),
      c.beginPath(),
      c.ellipse(0, 0, 10.5 * s, 13.5 * s, 0, 0, 7),
      (c.fillStyle = g),
      (c.shadowColor = "#6fe3ff"),
      (c.shadowBlur = 16 * s),
      c.fill(),
      (c.shadowBlur = 0),
      c.beginPath(),
      c.ellipse(-3.5 * s, -6 * s, 3 * s, 4.5 * s, -0.5, 0, 7),
      (c.fillStyle = "rgba(255,255,255,.45)"),
      c.fill(),
      c.beginPath(),
      c.moveTo(-4 * s, -12 * s),
      c.quadraticCurveTo(0, -19 * s, 4 * s, -12 * s),
      (c.fillStyle = "#a8f0ff"),
      c.fill());
    const ex = Math.max(-1.2, Math.min(1.2, f.vx / 180));
    for (const e of [-1, 1]) {
      const a = 5.2 * s * e,
        n = -5 * s;
      (c.beginPath(),
        c.arc(a, n, 4.6 * s, 0, 7),
        (c.fillStyle = "#fff"),
        c.fill(),
        c.beginPath(),
        c.arc(a + ex * 1.4 * s, n - 1.2 * s, 2.6 * s, 0, 7),
        (c.fillStyle = "#123a3a"),
        c.fill(),
        c.beginPath(),
        c.arc(a + ex * 1.4 * s - 0.9 * s, n - 2.2 * s, 0.9 * s, 0, 7),
        (c.fillStyle = "#fff"),
        c.fill());
    }
    (c.beginPath(),
      c.arc(-6 * s, 1.5 * s, 1.8 * s, 0, 7),
      c.arc(6 * s, 1.5 * s, 1.8 * s, 0, 7),
      (c.fillStyle = "rgba(255,140,210,.55)"),
      c.fill(),
      c.beginPath(),
      c.arc(0, 3 * s, 2.2 * s, 0.15 * Math.PI, 0.85 * Math.PI),
      (c.strokeStyle = "#1a4a5a"),
      (c.lineWidth = 1.3 * s),
      c.stroke());
    if (S.shield || (S.inv > 0 && Math.floor(S.t * 12) % 2)) {
      (c.beginPath(),
        c.arc(0, 2 * s, 24 * s, 0, 7),
        (c.strokeStyle = "rgba(190,245,255,.85)"),
        (c.lineWidth = 2 * s),
        c.stroke(),
        (c.fillStyle = "rgba(150,230,255,.12)"),
        c.fill(),
        c.beginPath(),
        c.arc(-8 * s, -8 * s, 5 * s, Math.PI * 1.1, Math.PI * 1.6),
        (c.strokeStyle = "rgba(255,255,255,.8)"),
        c.stroke());
    }
    if (S.mag > 0) {
      ((c.globalAlpha = 0.4 + 0.25 * Math.sin(t * 8)),
        c.beginPath(),
        c.arc(0, 0, 30 * s + 3 * Math.sin(t * 6), 0, 7),
        (c.strokeStyle = "#ffe9a8"),
        c.setLineDash([4 * s, 6 * s]),
        (c.lineWidth = 1.6 * s),
        c.stroke(),
        c.setLineDash([]),
        (c.globalAlpha = 1));
    }
    c.restore();
  }
  function loop(e) {
    if (!GF.run) return;
    if (!document.body.contains(cv)) return gfStop();
    const t = Math.min(0.05, (e - (last || e)) / 1e3);
    ((last = e), "pause" !== S.st && step(t), draw(), (GF.raf = requestAnimationFrame(loop)));
  }
  const pd = (e) => {
      if (LB || (e.target.closest && e.target.closest("button,.gfgo"))) return;
      if ("mouse" === e.pointerType && 0 !== e.button) return;
      try {
        e.target.setPointerCapture(e.pointerId);
      } catch (x) {}
      if ("ready" === S.st) {
        ((S.st = "play"), $ov.classList.remove("on"), ($ov.innerHTML = ""), banner(gfBn()));
      }
      if ("pause" === S.st || "count" === S.st) return;
      ((ptr.on = 1),
        (ptr.x0 = e.clientX),
        (ptr.f0 = f.x),
        (ptr.x = f.x),
        (ptr.y0 = e.clientY),
        (ptr.o0 = f.oy),
        (ptr.oy = f.oy),
        e.preventDefault());
    },
    pm = (e) => {
      if (ptr.on && "mouse" === e.pointerType && !e.buttons) {
        ptr.on = 0;
        return;
      }
      if (ptr.on) {
        const rx = ptr.f0 + (e.clientX - ptr.x0) * 1.5,
          ry = ptr.o0 + (e.clientY - ptr.y0) * 1.5;
        ((ptr.x = Math.max(-40, Math.min(W + 40, rx))),
          (ptr.oy = Math.max(-0.4 * H, Math.min(0.18 * H, ry))),
          rx !== ptr.x && ((ptr.x0 = e.clientX), (ptr.f0 = ptr.x)),
          ry !== ptr.oy && ((ptr.y0 = e.clientY), (ptr.o0 = ptr.oy)));
      }
    },
    pu = () => {
      ptr.on = 0;
    },
    KS = {},
    kdir = () => (KS.r ? 1 : 0) - (KS.l ? 1 : 0),
    kdv = () => (KS.d ? 1 : 0) - (KS.u ? 1 : 0),
    kd = (e) => {
      const c = e.code,
        L = "ArrowLeft" === c || "KeyA" === c,
        Rr = "ArrowRight" === c || "KeyD" === c,
        U = "ArrowUp" === c || "KeyW" === c,
        Dn = "ArrowDown" === c || "KeyS" === c;
      if (!(L || Rr || U || Dn)) return;
      (e.preventDefault(),
        "ready" === S.st &&
          ((S.st = "play"), $ov.classList.remove("on"), ($ov.innerHTML = ""), banner(gfBn())),
        L && (KS.l = 1),
        Rr && (KS.r = 1),
        U && (KS.u = 1),
        Dn && (KS.d = 1),
        (ptr.k = kdir()),
        (ptr.ky = kdv()));
    },
    ku = (e) => {
      const c = e.code,
        h = "ArrowLeft" === c || "KeyA" === c || "ArrowRight" === c || "KeyD" === c,
        v = "ArrowUp" === c || "KeyW" === c || "ArrowDown" === c || "KeyS" === c;
      (("ArrowLeft" !== c && "KeyA" !== c) || (KS.l = 0),
        ("ArrowRight" !== c && "KeyD" !== c) || (KS.r = 0),
        ("ArrowUp" !== c && "KeyW" !== c) || (KS.u = 0),
        ("ArrowDown" !== c && "KeyS" !== c) || (KS.d = 0),
        (ptr.k = kdir()),
        (ptr.ky = kdv()),
        h && !ptr.k && ((ptr.on = 0), (f.vx = 0)),
        v && !ptr.ky && (f.vy = 0));
    },
    vis = () => {
      document.hidden && "play" === S.st && !RC && act.gfPause();
    },
    rs = () => fit(),
    W$ = $("#gfw"),
    arretsIn = [];
  (arretsIn.push(Input.sur("toucher", (a, i) => pd(i.evt), { cible: W$ })),
    (GF.lbt = 0),
    W$.addEventListener("click", (e) => {
      if (
        !LB ||
        GF.lbt ||
        e.target.closest("button,a,input,.gflp,.gflside,.gflt") ||
        W$.querySelector(".gflp:not([hidden])")
      )
        return;
      const b = W$.querySelector(".gfl-big");
      b && ((GF.lbt = 1), b.click());
    }),
    arretsIn.push(
      Input.sur(["glisser", "survoler"], (a, i) => pm(i.evt)),
      Input.sur("lacher", () => pu(), { annulation: !0 }),
    ),
    addEventListener("blur", pu),
    arretsIn.push(
      Input.sur("*", (a, i) => ("relache" === i.phase ? ku(i.evt) : kd(i.evt)), {
        sources: ["clavier"],
        relache: !0,
      }),
    ),
    document.addEventListener("visibilitychange", vis),
    addEventListener("resize", rs),
    (GF.cl = () => {
      ((GF.launch = null),
        arretsIn.splice(1).forEach((f) => f()),
        document.removeEventListener("visibilitychange", vis),
        removeEventListener("resize", rs));
    }),
    (GF.again = () => {
      reset();
    }),
    (GF.next = () => {
      (SL < 100 || (SL > 100 && SL < 110)) && (SL++, reset());
    }),
    (GF.launch = LB
      ? (n) => {
          if ("launch" === S.st) return !0;
          if ("lobby" !== S.st) return !1;
          (GF.rk && ((RK = 1), (GF.rk = 0)), (S.st = "launch"), (S.lt = 1), (S.ln = n));
          const g = $("#gfw");
          g && g.classList.add("gflgo");
          const p = $("#gflp");
          return (p && (p.hidden = !0), !0);
        }
      : null),
    (GF.end = ZN
      ? () => {
          if ("pause" !== S.st && "play" !== S.st) return;
          ((S.st = "over"), (ptr.on = 0));
          const g0 = dmR("galac", Math.min(6, Math.floor(S.dust / 10)));
          (g0 > 0 && scrGain(g0),
            ($cb.hidden = !0),
            ($ov.innerHTML = `<div class="gfgo"><small>Balade terminée</small><h2>${Math.floor(S.dist / 14)} m</h2><div class="gfgs"><div><b>${S.dust}</b><span>${GFTH === "mer" ? "perles" : "poussières"}</span></div><div><b>+${g0} 🫧</b><span>bulles (6 max)</span></div></div><button class="btn" data-a="gfAgain">Nager encore</button><button class="btn alt" data-a="gfQuit">Quitter</button></div>`),
            $ov.classList.add("on"));
        }
      : null),
    (GF.pause = () => {
      if ("play" === S.st)
        ((S.st = "pause"),
          (ptr.on = 0),
          ($ov.innerHTML =
            '<div class="gfgo"><small>Pause</small><h2>' +
            Math.floor(S.dist / 14) +
            ' m</h2><button class="btn" data-a="gfRes">Reprendre</button>' +
            (ZN
              ? '<button class="btn alt" data-a="gfEnd">Terminer</button>'
              : '<button class="btn alt" data-a="gfQuit">Quitter</button>') +
            "</div>"),
          $ov.classList.add("on"));
      else if ("pause" === S.st) GF.res();
    }),
    (GF.res = () => {
      "pause" === S.st && ((S.st = "play"), $ov.classList.remove("on"), ($ov.innerHTML = ""), (last = 0));
    }),
    reset(),
    LB && ((S.st = "lobby"), ($ov.innerHTML = ""), $ov.classList.remove("on")),
    RC &&
      ((S.st = "count"),
      (S.cn = 3.4),
      (S.cl = 0),
      ($ov.innerHTML = ""),
      $ov.classList.add("on"),
      (GF.rcStop = () => {
        ((S.st = "over"), (ptr.on = 0), ($cb.hidden = !0));
      }),
      rcBar()),
    (GF.run = 1),
    (GF.raf = requestAnimationFrame(loop)));
}
setTimeout(
  () =>
    Object.assign(act, {
      gfPlay: () => {
        ((GF.nx = 0), gfPlay());
      },
      gfStory: (e) => {
        if (+e > 100) {
          ((GF.nx = Math.min(110, +e)), (GF.lb && GF.launch && GF.launch(GF.nx)) || gfPlay());
          return;
        }
        if (+e > Math.min(100, st.get("gf:lv", 0) + 1) && !UNL())
          return msg("Termine d’abord le niveau " + (st.get("gf:lv", 0) + 1) + ".");
        ((GF.nx = Math.max(1, Math.min(100, +e || 1))), (GF.lb && GF.launch && GF.launch(GF.nx)) || gfPlay());
      },
      gfNext: () => {
        GF.next && GF.next();
      },
      gfLv: () => {
        const p = $("#gflp");
        if (!p) return;
        if (!p.hidden && "l" === p.dataset.k) return void gfCls(p);
        const lv = Math.min(100, st.get("gf:lv", 0)),
          ss = st.get("gf:st", {}) || {},
          ts = gfTs(),
          B0 = GFTH === "mer" ? GFBM : GFB;
        ((p.dataset.k = "l"), (p.hidden = !1), p.classList.remove("out"), p.classList.remove("out"));
        let h = gfXm() ? gfXPanel(ss) : "<h3>Choisir un niveau <small>★ " + ts + "/300</small></h3>";
        for (let w = 0; w < (gfXm() ? 0 : 10); w++) {
          h += `<div class="gfwh${w === Math.floor(Math.min(99, lv) / 10) ? " cur" : ""}"><b>Monde ${w + 1}</b><span>${esc(B0[w % B0.length].n)}</span></div><div class="gflg">`;
          for (let t = 1; t <= 10; t++) {
            const L = w * 10 + t,
              n = ss[L] | 0;
            h += `<button class="lv ${L <= lv ? "d" : L === lv + 1 ? "nx" : "far"}${10 === t ? " bs" : ""}" style="--i:${w * 10 + t - 1}" data-a="gfStory" data-v="${L}" aria-label="Niveau ${L}">${L}${L <= lv || L === lv + 1 ? `<em>${[1, 2, 3].map((i) => `<i${i <= n ? ' class="on"' : ""}>★</i>`).join("")}</em>` : 10 === t ? "<em>👑</em>" : ""}</button>`;
          }
          h += "</div>";
        }
        p.innerHTML = h;
        const c = p.querySelector(".nx") || [...p.querySelectorAll(".lv.d")].pop();
        c && (p.scrollTop = Math.max(0, c.offsetTop - p.clientHeight / 2 + 30));
      },
      gfAl: () => {
        const p = $("#gflp");
        if (!p) return;
        if (!p.hidden && "a" === p.dataset.k) return void gfCls(p);
        const a = gfAlb();
        ((p.dataset.k = "a"),
          (p.hidden = !1),
          p.classList.remove("out"),
          (p.innerHTML =
            "<h3>Album photo</h3>" +
            (!gfRkOn()
              ? '<p class="note">🔒 L’album photo se débloque après le niveau 100.</p>'
              : a.length
                ? '<div class="gfal">' +
                  a
                    .map(
                      (e) =>
                        `<figure><img src="${e.i}" alt="Record de ${e.s} m"><figcaption><b>${e.s} m</b>${esc(e.w || "")} · ${new Date(e.t).toLocaleDateString("fr", { day: "numeric", month: "short" })}</figcaption></figure>`,
                    )
                    .join("") +
                  "</div>"
                : '<p class="note">Bats ton record en mode Rank : une photo est prise à chaque nouveau record.</p>')));
      },
      gfRu: () => {
        const p = $("#gflp");
        if (!p) return;
        if (!p.hidden && "u" === p.dataset.k) return void gfCls(p);
        ((p.dataset.k = "u"),
          (p.hidden = !1),
          p.classList.remove("out"),
          (p.innerHTML =
            '<h3>Les règles</h3><p class="note" style="margin:0 0 8px">Guide ton poisson étoile entre les planètes : glisse le doigt (ou utilise les flèches) pour le diriger.</p><p class="note" style="margin:0 0 8px">Frôle les planètes sans les toucher pour enchaîner les combos, et ramasse les poussières de bulles en chemin. Évite les ennemis : l’almanach te les présente.</p><p class="note" style="margin:0">Le mode histoire compte 100 niveaux. Ensuite, le mode Rank débloque un voyage sans fin avec un classement en ligne. Le mode zen se joue sans pression.</p>'));
      },
      gfAm: () => gfAlm(),
      gfAmX: () => {
        const p = $("#gflp");
        p && !p.hidden && gfCls(p);
      },
      gfAmW: (e) => {
        ((GF.amw = +e), gfAlmR());
      },
      gfAgain: () => {
        GF.again && GF.again();
      },
      gfEnd: () => {
        GF.end && GF.end();
      },
      gfZen: () => {
        const old = document.getElementById("gfzp");
        if (old) {
          old.remove();
          return;
        }
        const g = $("#gfw");
        if (!g) return;
        const BS0 = GFTH === "mer" ? GFBM : GFB,
          lv = Math.min(100, st.get("gf:lv", 0)),
          nw = Math.min(10, gfNW(BS0.length)),
          mer = GFTH === "mer",
          bs =
            "border:0;border-radius:12px;padding:10px 8px;font:700 13px system-ui,sans-serif;color:#fff;background:rgba(120,140,255,.35);",
          d = document.createElement("div");
        d.id = "gfzp";
        d.style.cssText =
          "position:absolute;inset:0;z-index:30;overflow:auto;background:rgba(6,6,28,.94);padding:calc(env(safe-area-inset-top,0px) + 14px) 14px 28px;color:#fff;text-align:left";
        d.innerHTML =
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><b style="font-size:18px">Mode zen</b><button data-a="gfZenX" aria-label="Fermer" style="' +
          bs +
          'width:44px;height:44px;border-radius:50%">✕</button></div><p style="margin:0 0 10px;opacity:.85;font-size:13px">Choisis un monde et ton ambiance : le monde seul, ou avec sa spécialité.</p>' +
          [...Array(nw).keys()]
            .map((w) => {
              const k = mer ? GFWK[w % 10] : null,
                ok = UNL() || lv >= w * 10 + 4;
              return (
                '<div style="margin:8px 0;padding:10px;border-radius:16px;background:rgba(255,255,255,.08)"><small style="opacity:.7">Monde ' +
                (w + 1) +
                '</small><br><b style="font-size:15px">' +
                esc(BS0[w % BS0.length].n) +
                (w >= BS0.length ? " II" : "") +
                '</b><div style="display:grid;grid-template-columns:' +
                (k ? "1fr 1fr" : "1fr") +
                ';gap:8px;margin-top:8px"><button data-a="gfZenGo" data-v="' +
                w +
                ':0" style="' +
                bs +
                '">Ennemis seulement</button>' +
                (k
                  ? '<button data-a="gfZenGo" data-v="' +
                    w +
                    ':1" ' +
                    (ok ? "" : "disabled ") +
                    'style="' +
                    bs +
                    (ok ? "" : "opacity:.4;") +
                    '">' +
                    (ok ? "" : "🔒 ") +
                    esc(k.n) +
                    "</button>"
                  : "") +
                "</div></div>"
              );
            })
            .join("");
        g.appendChild(d);
      },
      gfZenX: () => {
        const d = document.getElementById("gfzp");
        d && d.remove();
      },
      gfZenGo: (v) => {
        const p = String(v).split(":").map(Number);
        GF.zw = p[0] | 0;
        GF.zs = p[1] | 0;
        GF.nx = 0;
        GF.zn = 1;
        gfPlay();
      },
      gfInf: () => {
        ((GF.nx = 0),
          (GF.zn = 0),
          (GF.rk = 1),
          (GF.inf = 1),
          (GF.lb && GF.launch && GF.launch(0)) || gfPlay());
      },
      gfSk: () => {
        const p = $("#gflp");
        if (!p) return;
        if (!p.hidden && "f" === p.dataset.k) return void gfCls(p);
        const cur = gfSkId(),
          tile = (id, n, svg, ok) =>
            `<div class="gfkt${id === cur ? " on" : ""}${ok ? "" : " lk"}" style="height:128px;overflow:hidden" role="button"${ok ? ` data-a="gfSkP" data-v="${id}"` : ""}><div class="gfkv" style="display:block;width:100%;height:100px;overflow:hidden;background:none;border:0;box-shadow:none;border-radius:0">${svg}</div><b>${esc(n)}</b>${ok ? "" : "<i>🔒</i>"}</div>`;
        ((p.dataset.k = "f"),
          (p.hidden = !1),
          p.classList.remove("out"),
          (p.innerHTML =
            '<h3>Choisir ton poisson</h3><div class="gfkg">' +
            (gfRkOn()
              ? tile(
                  "e2d",
                  "Étoile 2D",
                  `<svg viewBox="2 -2 90 58" style="width:100%;height:100px;display:block"><path d="M26 26C14 22 8 14 4 10 6 22 6 30 4 42 8 38 14 30 26 26Z" fill="#ff8ad8" stroke="#1a1040" stroke-width="2" stroke-linejoin="round"/><path d="M42 18C46 4 62 -1 74 8 64 12 54 16 50 20Z" fill="#5a8cff" stroke="#1a1040" stroke-width="2" stroke-linejoin="round"/><ellipse cx="54" cy="26" rx="29" ry="14" fill="#7a6bff" stroke="#1a1040" stroke-width="2.4"/><ellipse cx="54" cy="30" rx="20" ry="7" fill="#b9c8ff"/><circle cx="46" cy="23" r="1.2" fill="#fff"/><circle cx="60" cy="31" r="1.2" fill="#fff"/><path d="M62 15l1.6 3.6 3.8.4-2.8 2.6.8 3.8-3.4-2-3.4 2 .8-3.8-2.8-2.6 3.8-.4z" fill="#ffe9a8" stroke="#1a1040" stroke-width="1.2"/><circle cx="73" cy="22" r="4.4" fill="#fff" stroke="#1a1040" stroke-width="1.4"/><circle cx="74" cy="22.4" r="2.4" fill="#1a1040"/><circle cx="73" cy="21" r="1" fill="#fff"/></svg>`,
                  gfRkOn(),
                )
              : "") +
            tile(
              "",
              "Poisson étoile",
              `<svg viewBox="2 -2 90 58" style="width:100%;height:100px;display:block"><defs><linearGradient id="gsA" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#e8fbff"/><stop offset=".45" stop-color="#7fe0ff"/><stop offset=".75" stop-color="#8a6bff"/><stop offset="1" stop-color="#ff8ad8"/></linearGradient><radialGradient id="gsG"><stop offset="0" stop-color="#7fe0ff" stop-opacity=".55"/><stop offset="1" stop-color="#7fe0ff" stop-opacity="0"/></radialGradient></defs><ellipse cx="52" cy="26" rx="44" ry="26" fill="url(#gsG)"/><path d="M26 26C14 22 8 14 4 10 6 22 6 30 4 42 8 38 14 30 26 26Z" fill="#ff8ad8" opacity=".75"/><path d="M42 18C46 4 62 -1 74 8 64 12 54 16 50 20Z" fill="#7fe0ff" opacity=".7"/><path d="M42 34C46 48 62 53 74 44 64 40 54 36 50 32Z" fill="#a98aff" opacity=".7"/><ellipse cx="54" cy="26" rx="29" ry="14" fill="url(#gsA)"/><circle cx="46" cy="23" r="1" fill="#fff"/><circle cx="52" cy="30" r="1.2" fill="#fff"/><circle cx="60" cy="31" r=".9" fill="#fff"/><circle cx="40" cy="28" r=".8" fill="#fff"/><path d="M62 15l1.6 3.6 3.8.4-2.8 2.6.8 3.8-3.4-2-3.4 2 .8-3.8-2.8-2.6 3.8-.4z" fill="#ffe9a8"/><circle cx="73" cy="22" r="4.4" fill="#fff"/><circle cx="74" cy="22.4" r="2.8" fill="#4a3cd8"/><circle cx="73" cy="21" r="1" fill="#fff"/></svg>`,
              !0,
            ) +
            [...gfSkList()]
              .filter((e) => UNL() || !!aqRead().f[e.id])
              .sort((a, b) => (b.p || 0) - (a.p || 0))
              .map((e) =>
                tile(
                  e.id,
                  e.n,
                  `<svg viewBox="2 -2 90 58" style="width:100%;height:100px;display:block">${FSH[e.sh] ? FSH[e.sh]({}) : ""}</svg>`,
                  UNL() || !!aqRead().f[e.id],
                ),
              )
              .join("") +
            "</div>"),
          (p.scrollTop = 0),
          setTimeout(() => {
            p.scrollTop = 0;
          }, 60));
      },
      gfSkP: (e) => {
        (st.set("gf:sk", e || ""), (GF.sk = gfSkId()));
        const p = $("#gflp");
        p &&
          !p.hidden &&
          "f" === p.dataset.k &&
          (p
            .querySelectorAll(".gfkt")
            .forEach((b) => b.classList.toggle("on", b.dataset.v === (GF.sk || ""))),
          setTimeout(() => gfCls(p), 260));
      },
      gfRank: () => {
        gfRkOn() && ((GF.nx = 0), (GF.zn = 0), (GF.rk = 1), (GF.lb && GF.launch && GF.launch(0)) || gfPlay());
      },
      gfQuit: () => {
        (gfStop(), gfHub());
      },
      gfRc: () => {
        const p = $("#gflp");
        if (!p) return;
        if (!p.hidden && "r" === p.dataset.k) return void gfCls(p);
        ((p.dataset.k = "r"),
          (p.hidden = !1),
          p.classList.remove("out"),
          (p.innerHTML = '<h3>Course en ligne</h3><div id="gfrl"><p class="note">Un instant…</p></div>'),
          rcList(0));
      },
      gfRcCh: async (o) => {
        if (!SOK.test(o) || !SO.uid || !SO.got) return gToast("Connecte-toi d’abord dans l’onglet Social.");
        (rcOff(), rcFresh());
        const id = rcIds(),
          seed = 1 + Math.floor(999999998 * Math.random()),
          w = Math.floor(10 * Math.random());
        Object.assign(RCS, {
          id,
          seed,
          w,
          goal: 1e3,
          opp: o,
          role: "ch",
          gid: rcGid(o, SO.uid),
          gidO: rcGid(o, o),
          md: 0,
          m: {
            k: "gfr",
            id,
            seed,
            w,
            goal: 1e3,
            st: "ch",
            d: 0,
            n: scrNm(SO.uid),
            at: Date.now(),
            t: Date.now(),
          },
        });
        const p = $("#gflp");
        (p &&
          ((p.dataset.k = "r"),
          (p.hidden = !1),
          p.classList.remove("out"),
          (p.innerHTML = '<h3>Course en ligne</h3><div id="gfrl"></div>')),
          rcWaitUI(),
          await rcPut({}),
          socInv(o, "galac"),
          rcWatch());
      },
      gfRcWt: async (o) => {
        try {
          const d = await scrDb(),
            s = await d.collection("sc").doc(rcGid(o, SO.uid)).get(),
            m = s.exists && rcClean(s.data());
          if (!m || "ch" !== m.st) return act.gfRcCh(o);
          (rcOff(),
            rcFresh(),
            Object.assign(RCS, {
              id: m.id,
              seed: m.seed,
              w: m.w,
              goal: m.goal,
              opp: o,
              role: "ch",
              gid: rcGid(o, SO.uid),
              gidO: rcGid(o, o),
              md: 0,
              m,
            }),
            rcWaitUI(),
            rcWatch());
        } catch (e) {
          gToast("Connexion impossible pour l’instant.");
        }
      },
      gfRcAc: async (o) => {
        try {
          const d = await scrDb(),
            s = await d.collection("sc").doc(rcGid(o, o)).get(),
            h = s.exists && rcClean(s.data());
          if (!h || "ch" !== h.st || Date.now() - h.at > 9e5) return gToast("Ce défi a expiré.");
          (rcOff(),
            rcFresh(),
            Object.assign(RCS, {
              id: h.id,
              seed: h.seed,
              w: h.w,
              goal: h.goal,
              opp: o,
              role: "ac",
              gid: rcGid(o, SO.uid),
              gidO: rcGid(o, o),
              md: 0,
              go: 1,
              o: h,
              ot: Date.now(),
              m: {
                k: "gfr",
                id: h.id,
                seed: h.seed,
                w: h.w,
                goal: h.goal,
                st: "ok",
                d: 0,
                n: scrNm(SO.uid),
                at: Date.now(),
                t: Date.now(),
              },
            }),
            await rcPut({}),
            rcWatch(),
            rcStart());
        } catch (e) {
          gToast("Connexion impossible pour l’instant.");
        }
      },
      gfRcX: () => {
        (RCS.m && rcPut({ st: "x" }), rcOff(), rcFresh(), rcList(0));
      },
      gfRcAgain: () => {
        const o = RCS.opp;
        (gfStop(), gfHub(), o && setTimeout(() => act.gfRcCh(o), 150));
      },
      gfPause: () => {
        GF.pause && !GF.race && GF.pause();
      },
      gfRes: () => {
        GF.res && GF.res();
      },
    }),
  0,
);
