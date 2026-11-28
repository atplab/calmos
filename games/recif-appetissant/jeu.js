(() => {
  /* ===== Récif de Zeni : labyrinthe sous-marin, Zeni fuit les prédateurs ===== */
  const ID = "recif",
    NAME = "Récif appétissant",
    RKU = 30;
  const G0 = {
    id: ID,
    n: NAME,
    ic: "",
    a: "#5ad8ff",
    b: "#0c2a6a",
    t: "La grande fuite sous-marine",
    s: "Zeni nage dans le récif et ramasse les perles. Murène, méduse, poisson-lanterne et crabe le pourchassent : une anémone lumineuse l’entoure d’une bulle et lui permet de les enfermer à leur tour.",
  };
  try {
    GD.push(G0);
    ALL.push(G0);
    GUNL.includes(ID) || GUNL.push(ID);
    const c = GCAT.find((c) => c[0] === "arca");
    c && !c[2].includes(ID) && c[2].splice(1, 0, ID);
  } catch (e) {}
  const zrHide = () => {
    try {
      delete GAV[ID];
    } catch (e) {}
  };
  zrHide();
  setTimeout(zrHide, 0);
  const lvMax = () => st.get("zr:lv", 0),
    rkOn = () => !0;
  /* Zeni */
  let ZI = null,
    ZH = null;
  const zImg = (k) => {
    const m = k ? ZH : ZI;
    if (m) return m;
    let v = typeof qzGuy === "function" ? qzGuy(k ? "ok" : "") : "";
    v = v.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ');
    const i = new Image();
    i.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(v);
    k ? (ZH = i) : (ZI = i);
    return i;
  };
  const zSvg = () => (typeof qzGuy === "function" ? qzGuy("ok") : "");
  /* Mondes */
  const WD = [
    {
      n: "Lagon turquoise",
      bg: ["#06243f", "#0a4a6e"],
      w1: "#2fc4c0",
      w2: "#1a6f8a",
      gl: "#7ff6ff",
      pe: "#e9fdff",
    },
    {
      n: "Jardin de corail",
      bg: ["#2a0f3f", "#5a1f5e"],
      w1: "#ff7aa8",
      w2: "#a8366e",
      gl: "#ffb3d4",
      pe: "#fff0f6",
    },
    {
      n: "Forêt de kelp",
      bg: ["#062a22", "#0f4a32"],
      w1: "#5fd88a",
      w2: "#2a7a4a",
      gl: "#b4ffcf",
      pe: "#f0fff4",
    },
    { n: "Abysses", bg: ["#04061c", "#141a4a"], w1: "#7a7aff", w2: "#3a2f9a", gl: "#b9b3ff", pe: "#e9e6ff" },
  ];
  const wOf = (n) => WD[Math.floor((n - 1) / 5) % WD.length];
  /* Labyrinthe généré, symétrique, sans cul-de-sac */
  const W = 15,
    H = 21,
    DY = 10;
  const rng = (s) => () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
  function maze(seed) {
    const R = rng(seed * 7919 + 13),
      g = [...Array(H)].map(() => Array(W).fill(1)),
      op = (x, y) => {
        g[y][x] = 0;
        g[y][W - 1 - x] = 0;
      };
    const vis = new Set(),
      st0 = [[1, 1]];
    op(1, 1);
    vis.add("1,1");
    while (st0.length) {
      const [x, y] = st0[st0.length - 1],
        nb = [
          [2, 0],
          [-2, 0],
          [0, 2],
          [0, -2],
        ]
          .map(([a, b]) => [x + a, y + b])
          .filter(([a, b]) => a >= 1 && a <= 7 && b >= 1 && b <= H - 2 && !vis.has(a + "," + b));
      if (!nb.length) {
        st0.pop();
        continue;
      }
      const [nx, ny] = nb[Math.floor(R() * nb.length)];
      op((x + nx) / 2, (y + ny) / 2);
      op(nx, ny);
      vis.add(nx + "," + ny);
      st0.push([nx, ny]);
    }
    const deg = (x, y) =>
      [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ].filter(([a, b]) => g[y + b] && !g[y + b][x + a]).length;
    for (let y = 1; y < H - 1; y += 2)
      for (let x = 1; x <= 7; x += 2) {
        let k = 0;
        while (deg(x, y) < 2 && k++ < 8) {
          const c = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
          ].filter(([a, b]) => {
            const X = x + 2 * a,
              Y = y + 2 * b;
            return X >= 1 && X <= W - 2 && Y >= 1 && Y <= H - 2 && g[y + b][x + a];
          })[Math.floor(R() * 4)];
          if (c) op(x + c[0], y + c[1]);
        }
      }
    for (let k = 0; k < 5; k++) {
      const x = 1 + 2 * Math.floor(R() * 4),
        y = 1 + 2 * Math.floor(R() * 7);
      const d = [
        [1, 0],
        [0, 1],
      ][Math.floor(R() * 2)];
      x + 2 * d[0] <= W - 2 && y + 2 * d[1] <= H - 2 && op(x + d[0], y + d[1]);
    }
    for (let x = 5; x <= 9; x++) g[DY][x] = 0;
    g[DY - 1][7] = 0;
    g[DY - 2][7] = 0;
    return g;
  }
  const isW = (g, x, y) =>
    g.inf ? x < 0 || x >= W || g.get(x, y) === 1 : y < 0 || y >= H || x < 0 || x >= W || g[y][x] === 1;
  const DIR = { u: [0, -1], d: [0, 1], l: [-1, 0], r: [1, 0] },
    REV = { u: "d", d: "u", l: "r", r: "l" };
  /* ===== Lobby ===== */
  const IC = {
    r: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5V5.5M9 8h7M9 12h5"/></svg>',
    c: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    l: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    k: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
    t: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3"/></svg>',
  };
  let RAF = 0,
    BGT = null;
  const stopAll = () => {
    cancelAnimationFrame(RAF);
    RAF = 0;
    BGT && (BGT.off = 1);
    BGT = null;
    G = null;
  };
  function bgLoop(cv, wd) {
    const o = { off: 0 },
      c = cv.getContext("2d"),
      P = [...Array(46)].map((_, i) => ({
        x: Math.random(),
        y: Math.random(),
        r: 0.6 + Math.random() * 2.2,
        v: 0.01 + Math.random() * 0.03,
        b: Math.random() < 0.25,
      }));
    BGT = o;
    const fr = (t) => {
      if (o.off || !cv.isConnected) return;
      const d = Math.min(2, devicePixelRatio || 1),
        w = cv.clientWidth,
        h = cv.clientHeight;
      (cv.width !== w * d || cv.height !== h * d) && ((cv.width = w * d), (cv.height = h * d));
      c.setTransform(d, 0, 0, d, 0, 0);
      const gr = c.createLinearGradient(0, 0, 0, h);
      gr.addColorStop(0, wd.bg[1]);
      gr.addColorStop(1, wd.bg[0]);
      c.fillStyle = gr;
      c.fillRect(0, 0, w, h);
      c.globalCompositeOperation = "lighter";
      for (let k = 0; k < 4; k++) {
        const x = w * (0.15 + 0.25 * k) + Math.sin(t / 3e3 + k) * 30;
        const lg = c.createLinearGradient(x, 0, x + 60, h * 0.8);
        lg.addColorStop(0, "rgba(180,240,255,.10)");
        lg.addColorStop(1, "rgba(180,240,255,0)");
        c.fillStyle = lg;
        c.beginPath();
        c.moveTo(x - 20, 0);
        c.lineTo(x + 40, 0);
        c.lineTo(x + 140, h * 0.85);
        c.lineTo(x + 40, h * 0.85);
        c.fill();
      }
      P.forEach((p) => {
        p.y -= p.v * 0.016;
        p.y < -0.02 && ((p.y = 1.02), (p.x = Math.random()));
        const x = p.x * w + Math.sin(t / 1400 + p.y * 9) * 8,
          y = p.y * h;
        c.beginPath();
        if (p.b) {
          c.strokeStyle = "rgba(200,245,255,.45)";
          c.lineWidth = 1;
          c.arc(x, y, p.r * 2.2, 0, 7);
          c.stroke();
        } else {
          c.fillStyle = wd.gl;
          c.globalAlpha = 0.55;
          c.arc(x, y, p.r, 0, 7);
          c.fill();
          c.globalAlpha = 1;
        }
      });
      c.globalCompositeOperation = "source-over";
      requestAnimationFrame(fr);
    };
    requestAnimationFrame(fr);
  }
  const sheet = (t, h) => {
    const o = $("#vzsh");
    o && o.remove();
    const d = document.createElement("div");
    d.id = "vzsh";
    d.className = "vzsh";
    d.innerHTML = `<div class="vzsp" role="dialog" aria-label="${t}"><div class="vzsx"><h2>${t}</h2><button data-a="zrShX" aria-label="Fermer">✕</button></div>${h}</div>`;
    d.addEventListener("click", (e) => {
      (e.target === d || e.target.closest("[data-a=zrLv]")) && setTimeout(() => d.remove(), 0);
    });
    document.body.appendChild(d);
  };
  function lobby() {
    stopAll();
    cur = ID;
    nv("games");
    try {
      theme(ID);
    } catch (e) {}
    const nb = $("#nav");
    nb && (nb.hidden = !0);
    const n = lvMax() + 1,
      wd = wOf(n),
      rb = st.get("zr:rkb", 0),
      ro = rkOn();
    app.innerHTML = `<div class="zrw"><canvas class="zrbg"></canvas><div class="zrtp">${bk("home")}<div class="zrti"><b>${NAME}</b><small>${wd.n}</small></div><div class="chip">🫧 ${FLX()}</div></div>
<div class="zrmid"><div class="zrhero"><div class="zrz">${zSvg()}</div><svg class="zrpr p1" viewBox="0 0 60 30">${eelSvg()}</svg><svg class="zrpr p2" viewBox="0 0 40 44">${jelSvg()}</svg></div><h1 class="zrname">${NAME}</h1><p class="zrsub">Ramasse les perles, fuis les prédateurs,<br>allume les anémones pour les enfermer.</p></div>
<div class="zrbt"><div class="zrsd">${B("zrRu", IC.r, "Règles")}${B("zrLs", IC.l, "Niveaux")}</div>
<div class="zrcn"><button class="zrbig" data-a="zrGo" data-v="${n}">Jouer<small>Niveau ${n}</small></button><button class="zrpill${ro ? "" : " lk"}" data-a="zrRk"${ro ? "" : ' aria-disabled="true"'}>${ro ? "" : IC.k}Mode Rank<small>${ro ? (rb ? "Record " + rb + " pts" : "Sans fin, 1 vie") : "Après le niveau " + RKU}</small></button></div>
<div class="zrsd">${B("infBd", IC.c, "Classement", ID)}</div></div></div>`;
    bgLoop(app.querySelector(".zrbg"), wd);
    window.scrollTo(0, 0);
  }
  const B = (a, i, t, v) =>
    `<button class="zrsb" data-a="${a}"${v ? ` data-v="${v}"` : ""}><i>${i}</i><span>${t}</span></button>`;
  function eelSvg() {
    return '<path d="M4 16q8-10 16 0t16 0t16 0" stroke="#3fd07a" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="52" cy="15" r="6" fill="#3fd07a"/><circle cx="54" cy="13" r="2" fill="#fff"/><circle cx="54.6" cy="13" r="1" fill="#0b2a1a"/>';
  }
  function jelSvg() {
    return '<path d="M6 20a14 14 0 0 1 28 0z" fill="#c77dff"/><path d="M10 20q-2 10 2 20M17 20q2 12-1 22M24 20q-2 10 2 20M30 20q2 8-1 16" stroke="#e3b8ff" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="15" cy="13" r="2" fill="#fff"/><circle cx="25" cy="13" r="2" fill="#fff"/>';
  }
  /* ===== Jeu ===== */
  let G = null;
  window.ZRG = () => G;
  const PRD = [
    { k: "eel", n: "Murène", c: "#3fd07a" },
    { k: "jel", n: "Méduse", c: "#c77dff" },
    { k: "lan", n: "Poisson-lanterne", c: "#ffb347" },
    { k: "crb", n: "Crabe", c: "#ff6b5a" },
    { k: "sqd", n: "Calmar", c: "#5ab8ff" },
    { k: "shk", n: "Requin", c: "#9aa8c0" },
  ];
  function start(n, rank) {
    stopAll();
    cur = ID;
    const nb = $("#nav");
    nb && (nb.hidden = !0);
    app.innerHTML = `<div class="zrg zrr"><canvas class="zrbg"></canvas><div class="zrtp"><button class="back" data-a="zrQ">‹ Récif</button><div class="zrti"><b id="zrlv"></b><small id="zrsc"></small></div><div class="zrlf" id="zrlf"></div></div><div class="zrbox"><canvas id="zrc" aria-label="${NAME}"></canvas><div class="zrov" id="zrov"></div></div><p class="zrhint">Glisse le doigt pour nager · flèches au clavier</p></div>`;
    G = { n, rank, score: 0, lives: 3, chain: 0 };
    bgLoop(app.querySelector(".zrbg"), wOf(n));
    level(n);
    bind();
    RAF = requestAnimationFrame(loop);
    window.scrollTo(0, 0);
  }
  function level(n) {
    const g = maze(n),
      wd = wOf(n),
      pe = new Set(),
      pw = new Set();
    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++)
        if (
          !g[y][x] &&
          !(y === DY && x >= 5 && x <= 9) &&
          !(y === DY - 1 && x === 7) &&
          !(x === 7 && y === H - 4)
        )
          pe.add(x + "," + y);
    [
      [1, 1],
      [13, 1],
      [1, H - 2],
      [13, H - 2],
    ].forEach(([x, y]) => {
      if (!g[y][x]) {
        pe.delete(x + "," + y);
        pw.add(x + "," + y);
      }
    });
    const np = n >= 20 ? 6 : n >= 10 ? 5 : Math.min(4, 2 + Math.floor((n - 1) / 3)),
      sp = 5.2;
    Object.assign(G, {
      n,
      g,
      wd,
      pe,
      pw,
      tot: pe.size,
      np,
      zs: sp,
      ps: sp * (0.7 + Math.min(0.27, (n - 1) * 0.012)),
      pdur: Math.max(2.6, 7 - (n - 1) * 0.14),
      pow: 0,
      snd: 0,
      t: 0,
      state: "ready",
      flash: 0,
      fx: [],
    });
    reset();
    draw0();
    ov(
      `<div class="zrot"><small>${G.rank ? "Mode Rank" : wd.n}</small><b>Niveau ${n}</b><span>Touche ou glisse pour commencer</span></div>`,
    );
    hud();
  }
  function reset() {
    G.z = { x: 7, y: H - 4, d: "", nd: "", p: 0, f: 1 };
    G.P = PRD.slice(0, G.np).map((q, i) => ({
      ...q,
      i,
      x: [7, 6, 8, 7, 6, 8][i],
      y: i ? DY : DY - 1,
      d: "u",
      p: 0,
      st: "home",
      rel: i * 2.6,
      sc: 0,
    }));
    G.pow = 0;
    G.t = 0;
  }
  const ov = (h) => {
    const o = $("#zrov");
    o && ((o.innerHTML = h), (o.hidden = !h));
  };
  function hud() {
    const a = $("#zrlv"),
      b = $("#zrsc"),
      c = $("#zrlf");
    a && (a.textContent = G.inf ? "Rank · " + G.dist + " m" : (G.rank ? "Rank · " : "") + "Niveau " + G.n);
    b &&
      (b.textContent =
        G.score + " pts" + (G.inf ? "" : " · " + (G.tot - G.pe.size - 0) + "/" + G.tot + " perles"));
    c && (c.innerHTML = [0, 1, 2].map((i) => `<i class="${i < G.lives ? "on" : ""}"></i>`).join(""));
  }
  /* Rendu */
  let CV,
    CX,
    TS = 20,
    OFF = null;
  function size() {
    CV = $("#zrc");
    if (!CV) return;
    const bw = Math.min(app.clientWidth || innerWidth, 520) - 20,
      bh = (innerHeight || 700) - 150;
    TS = Math.max(14, Math.floor(Math.min(bw / W, bh / H)));
    const d = Math.min(2, devicePixelRatio || 1);
    CV.width = W * TS * d;
    CV.height = H * TS * d;
    CV.style.width = W * TS + "px";
    CV.style.height = H * TS + "px";
    CX = CV.getContext("2d");
    CX.setTransform(d, 0, 0, d, 0, 0);
  }
  function draw0() {
    size();
    const d = Math.min(2, devicePixelRatio || 1);
    OFF = document.createElement("canvas");
    OFF.width = W * TS * d;
    OFF.height = H * TS * d;
    const c = OFF.getContext("2d");
    c.setTransform(d, 0, 0, d, 0, 0);
    const { g, wd } = G;
    c.fillStyle = "#04061a";
    c.fillRect(0, 0, W * TS, H * TS);
    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++) {
        if (!g[y][x]) continue;
        const X = x * TS,
          Y = y * TS,
          r = TS * 0.32,
          o = TS * 0.06,
          n = (a, b) => isW(g, x + a, y + b) && !(x + a < 0 || x + a >= W || y + b < 0 || y + b >= H);
        c.fillStyle = wd.w2;
        c.globalAlpha = 0.3;
        c.fillRect(X, Y, TS, TS);
        c.globalAlpha = 1;
        c.strokeStyle = wd.w1;
        c.lineWidth = 2;
        c.shadowColor = wd.w1;
        c.shadowBlur = 9;
        c.beginPath();
        !n(0, -1) && (c.moveTo(X, Y + 1), c.lineTo(X + TS, Y + 1));
        !n(0, 1) && (c.moveTo(X, Y + TS - 1), c.lineTo(X + TS, Y + TS - 1));
        !n(-1, 0) && (c.moveTo(X + 1, Y), c.lineTo(X + 1, Y + TS));
        !n(1, 0) && (c.moveTo(X + TS - 1, Y), c.lineTo(X + TS - 1, Y + TS));
        c.stroke();
        c.shadowBlur = 0;
      }
    c.save();
    c.globalCompositeOperation = "source-atop";
    c.restore();
    c.strokeStyle = "rgba(255,255,255,.35)";
    c.lineWidth = 2;
    c.setLineDash([4, 4]);
    c.beginPath();
    c.moveTo(6.6 * TS, (DY - 0.5) * TS);
    c.lineTo(8.4 * TS, (DY - 0.5) * TS);
    c.stroke();
    c.setLineDash([]);
  }
  function zDraw(c, x, y, s, t) {
    const Z = G && G.z;
    Z && Z.d && (Z.ld = Z.d);
    const im = zeniPx((Z && (Z.d || Z.ld)) || "r", G && G.pow > 0);
    const w = s * 1.5,
      h = w;
    c.save();
    c.translate(x, y + Math.sin(t / 180) * s * 0.04);
    if (G && G.pow > 0) {
      c.globalAlpha = 0.55 + 0.25 * Math.sin(t / 90);
      c.strokeStyle = "#bff6ff";
      c.lineWidth = 2.5;
      c.beginPath();
      c.arc(0, -s * 0.05, s * 0.62, 0, 7);
      c.stroke();
      c.fillStyle = "rgba(190,246,255,.18)";
      c.fill();
      c.globalAlpha = 1;
    }
    c.imageSmoothingEnabled = !1;
    c.drawImage(im, -w / 2, -h * 0.62, w, h);
    c.imageSmoothingEnabled = !0;
    c.restore();
  }
  function pDraw(c, p, x, y, s, t) {
    c.save();
    c.translate(x, y);
    c.shadowColor = p.c;
    c.shadowBlur = 9;
    const sc = G.pow > 0 && p.st === "scared",
      bub = p.st === "eyes";
    const blink = sc && G.pow < 1.6 && Math.floor(t / 160) % 2;
    const col = sc ? (blink ? "#fff" : "#8fd8ff") : G.frz > 0 ? "#b8e6ff" : p.c;
    if (bub) {
      c.strokeStyle = "rgba(200,245,255,.8)";
      c.lineWidth = 2;
      c.fillStyle = "rgba(200,245,255,.15)";
      c.beginPath();
      c.arc(0, 0, s * 0.42, 0, 7);
      c.fill();
      c.stroke();
      eyes(c, s, 0);
      c.restore();
      return;
    }
    const w = Math.sin(t / 120 + p.i);
    const dx = DIR[p.d] ? DIR[p.d][0] : 1;
    dx < 0 && c.scale(-1, 1);
    if (p.k === "eel") {
      c.strokeStyle = col;
      c.lineCap = "round";
      c.lineWidth = s * 0.34;
      c.beginPath();
      c.moveTo(-s * 0.45, w * s * 0.12);
      c.quadraticCurveTo(-s * 0.15, -w * s * 0.18, s * 0.05, w * s * 0.06);
      c.quadraticCurveTo(s * 0.2, w * s * 0.15, s * 0.28, 0);
      c.stroke();
      c.fillStyle = col;
      c.beginPath();
      c.ellipse(s * 0.26, 0, s * 0.24, s * 0.2, 0, 0, 7);
      c.fill();
      c.fillStyle = "rgba(0,0,0,.25)";
      c.beginPath();
      c.moveTo(s * 0.32, s * 0.08);
      c.lineTo(s * 0.5, s * 0.04);
      c.lineTo(s * 0.32, s * 0.12);
      c.fill();
      eyes(c, s, s * 0.28, -s * 0.06, 1);
    } else if (p.k === "jel") {
      c.fillStyle = col;
      c.beginPath();
      c.arc(0, -s * 0.02, s * 0.36, Math.PI, 0);
      c.quadraticCurveTo(0, s * 0.12, -s * 0.36, -s * 0.02);
      c.fill();
      c.strokeStyle = col;
      c.lineWidth = s * 0.07;
      c.lineCap = "round";
      for (let k = -2; k <= 2; k++) {
        c.beginPath();
        c.moveTo(k * s * 0.13, s * 0.04);
        c.quadraticCurveTo(k * s * 0.13 + w * s * 0.1, s * 0.24, k * s * 0.13 - w * s * 0.06, s * 0.44);
        c.stroke();
      }
      eyes(c, s, 0, -s * 0.12);
    } else if (p.k === "lan") {
      c.fillStyle = col;
      c.beginPath();
      c.ellipse(0, 0, s * 0.38, s * 0.3, 0, 0, 7);
      c.fill();
      c.beginPath();
      c.moveTo(-s * 0.32, 0);
      c.lineTo(-s * 0.54, -s * 0.18 + w * s * 0.04);
      c.lineTo(-s * 0.54, s * 0.18 - w * s * 0.04);
      c.fill();
      c.strokeStyle = col;
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(s * 0.1, -s * 0.26);
      c.quadraticCurveTo(s * 0.3, -s * 0.62, s * 0.44, -s * 0.42);
      c.stroke();
      c.fillStyle = "#fff6b0";
      c.shadowColor = "#ffe27a";
      c.shadowBlur = 10;
      c.beginPath();
      c.arc(s * 0.44, -s * 0.4, s * 0.09, 0, 7);
      c.fill();
      c.shadowBlur = 0;
      c.fillStyle = "#fff";
      c.beginPath();
      c.moveTo(s * 0.2, s * 0.08);
      for (let k = 0; k < 3; k++) {
        c.lineTo(s * (0.24 + k * 0.05), s * 0.16);
        c.lineTo(s * (0.27 + k * 0.05), s * 0.08);
      }
      c.fill();
      eyes(c, s, s * 0.14, -s * 0.08, 1);
    } else if (p.k === "sqd") {
      c.fillStyle = col;
      c.beginPath();
      c.moveTo(s * 0.44, 0);
      c.quadraticCurveTo(s * 0.2, -s * 0.26, -s * 0.1, -s * 0.18);
      c.lineTo(-s * 0.1, s * 0.18);
      c.quadraticCurveTo(s * 0.2, s * 0.26, s * 0.44, 0);
      c.fill();
      c.beginPath();
      c.moveTo(s * 0.38, -s * 0.06);
      c.lineTo(s * 0.52, -s * 0.2);
      c.lineTo(s * 0.46, 0);
      c.lineTo(s * 0.52, s * 0.2);
      c.lineTo(s * 0.38, s * 0.06);
      c.fill();
      c.strokeStyle = col;
      c.lineWidth = s * 0.06;
      c.lineCap = "round";
      for (let k = -2; k <= 2; k++) {
        c.beginPath();
        c.moveTo(-s * 0.1, k * s * 0.06);
        c.quadraticCurveTo(-s * 0.3, k * s * 0.08 + w * s * 0.06, -s * 0.5, k * s * 0.11 - w * s * 0.04);
        c.stroke();
      }
      eyes(c, s, s * 0.02, -s * 0.02);
    } else if (p.k === "shk") {
      c.fillStyle = col;
      c.beginPath();
      c.moveTo(s * 0.5, s * 0.02);
      c.quadraticCurveTo(s * 0.3, -s * 0.26, -s * 0.2, -s * 0.12);
      c.lineTo(-s * 0.5, -s * 0.26 + w * s * 0.04);
      c.lineTo(-s * 0.4, 0);
      c.lineTo(-s * 0.5, s * 0.24 - w * s * 0.04);
      c.lineTo(-s * 0.2, s * 0.12);
      c.quadraticCurveTo(s * 0.3, s * 0.22, s * 0.5, s * 0.02);
      c.fill();
      c.beginPath();
      c.moveTo(-s * 0.04, -s * 0.18);
      c.lineTo(s * 0.06, -s * 0.44);
      c.lineTo(s * 0.16, -s * 0.18);
      c.fill();
      c.fillStyle = "#e9eef8";
      c.beginPath();
      c.ellipse(s * 0.12, s * 0.08, s * 0.28, s * 0.08, 0, 0, 7);
      c.fill();
      c.fillStyle = "#fff";
      c.beginPath();
      for (let k = 0; k < 4; k++) {
        c.moveTo(s * (0.26 + k * 0.05), s * 0.06);
        c.lineTo(s * (0.285 + k * 0.05), s * 0.12);
        c.lineTo(s * (0.31 + k * 0.05), s * 0.06);
      }
      c.fill();
      eyes(c, s, s * 0.3, -s * 0.06, 1);
    } else {
      c.fillStyle = col;
      c.beginPath();
      c.ellipse(0, s * 0.04, s * 0.36, s * 0.24, 0, 0, 7);
      c.fill();
      c.strokeStyle = col;
      c.lineWidth = s * 0.07;
      c.lineCap = "round";
      for (const k of [-1, 1]) {
        for (let j = 0; j < 3; j++) {
          c.beginPath();
          c.moveTo(k * s * 0.25, s * 0.1 + j * s * 0.05);
          c.lineTo(k * s * (0.45 + 0.03 * w), s * 0.24 + j * s * 0.08);
          c.stroke();
        }
        c.beginPath();
        c.arc(k * s * 0.42, -s * 0.16 + k * w * s * 0.03, s * 0.12, 0, 7);
        c.fill();
      }
      eyes(c, s, 0, -s * 0.12);
    }
    c.restore();
  }
  function eyes(c, s, x, y = 0, one) {
    const e = (X) => {
      c.fillStyle = "#fff";
      c.beginPath();
      c.arc(X, y, s * 0.09, 0, 7);
      c.fill();
      c.fillStyle = "#141433";
      c.beginPath();
      c.arc(X + s * 0.025, y, s * 0.045, 0, 7);
      c.fill();
    };
    one ? e(x) : (e(x - s * 0.12), e(x + s * 0.12));
  }
  function render(t) {
    if (!CX || !G) return;
    const c = CX,
      { wd } = G;
    c.clearRect(0, 0, W * TS, H * TS);
    OFF && c.drawImage(OFF, 0, 0, W * TS, H * TS);
    c.fillStyle = wd.pe;
    c.shadowColor = wd.gl;
    c.shadowBlur = 6;
    G.pe.forEach((k) => {
      const [x, y] = k.split(",").map(Number);
      const q = TS * 0.09;
      c.fillRect((x + 0.5) * TS - q, (y + 0.5) * TS - q, 2 * q, 2 * q);
    });
    c.shadowBlur = 0;
    G.pw.forEach((k) => {
      const [x, y] = k.split(",").map(Number),
        X = (x + 0.5) * TS,
        Y = (y + 0.5) * TS,
        pu = 1 + 0.15 * Math.sin(t / 200);
      c.save();
      c.translate(X, Y);
      c.scale(pu, pu);
      c.shadowColor = "#ff9ad8";
      c.shadowBlur = 14;
      for (let a = 0; a < 7; a++) {
        c.strokeStyle = a % 2 ? "#ff9ad8" : "#ffd0ec";
        c.lineWidth = TS * 0.08;
        c.lineCap = "round";
        c.beginPath();
        c.moveTo(0, TS * 0.18);
        const an = -Math.PI / 2 + (a - 3) * 0.35;
        c.quadraticCurveTo(
          Math.cos(an) * TS * 0.2,
          Math.sin(an) * TS * 0.1,
          Math.cos(an) * TS * 0.32 + Math.sin(t / 300 + a) * TS * 0.04,
          Math.sin(an) * TS * 0.32,
        );
        c.stroke();
      }
      c.fillStyle = "#ffe3f4";
      c.beginPath();
      c.arc(0, TS * 0.16, TS * 0.1, 0, 7);
      c.fill();
      c.restore();
    });
    G.fx = G.fx.filter((f) => t - f.t < 700);
    G.fx.forEach((f) => {
      const a = (t - f.t) / 700;
      c.globalAlpha = 1 - a;
      c.fillStyle = "#fff3a0";
      c.font = `800 ${TS * 0.5}px ui-monospace,Menlo,Consolas,monospace`;
      c.textAlign = "center";
      c.fillText(f.s, f.x, f.y - a * TS);
    });
    c.globalAlpha = 1;
    const pos = (e) => {
      const d = DIR[e.d] || [0, 0];
      return [(e.x + 0.5 + d[0] * e.p) * TS, (e.y + 0.5 + d[1] * e.p) * TS];
    };
    G.P.forEach((p) => {
      const [x, y] = pos(p);
      pDraw(c, p, x, y, TS, t);
    });
    const [zx, zy] = pos(G.z);
    G.state === "dead"
      ? ((c.globalAlpha = Math.max(0, 1 - G.flash)),
        zDraw(c, zx, zy, TS * (1 - G.flash * 0.5), t),
        (c.globalAlpha = 1))
      : zDraw(c, zx, zy, TS, t);
  }
  /* Logique */
  const can = (x, y, d) => {
    const v = DIR[d];
    return v && !isW(G.g, x + v[0], y + v[1]) && !(d === "d" && x === 7 && y === DY - 2);
  };
  const canP = (x, y, d) => {
    const v = DIR[d];
    return v && !isW(G.g, x + v[0], y + v[1]);
  };
  function moveZ(dt) {
    const z = G.z;
    if (z.nd && z.d && z.nd === REV[z.d] && z.p > 0) {
      z.x += DIR[z.d][0];
      z.y += DIR[z.d][1];
      z.p = 1 - z.p;
      z.d = z.nd;
    }
    let m = G.zs * dt;
    while (m > 0) {
      if (z.p === 0) {
        if (z.nd && canP(z.x, z.y, z.nd)) z.d = z.nd;
        if (!z.d || !canP(z.x, z.y, z.d)) {
          z.d && (z.d = "");
          return;
        }
        DIR[z.d][0] && (z.f = DIR[z.d][0]);
      }
      const r = Math.min(m, 1 - z.p);
      z.p += r;
      m -= r;
      if (z.p >= 1) {
        z.x += DIR[z.d][0];
        z.y += DIR[z.d][1];
        z.p = 0;
        eat();
      }
    }
  }
  function eat() {
    if (G.inf) return eatI();
    const k = G.z.x + "," + G.z.y;
    if (G.pe.delete(k)) {
      G.score += 10;
      G.snd = (G.snd + 1) % 2;
      try {
        sfx(G.snd ? 740 : 820, 0.035);
      } catch (e) {}
    }
    if (G.pw.delete(k)) {
      G.score += 50;
      G.pow = G.pdur;
      G.chain = 0;
      G.P.forEach((p) => {
        p.st === "chase" &&
          ((p.st = "scared"),
          (p.d = REV[p.d] || p.d),
          (p.p = p.p ? 1 - p.p : 0),
          p.p && ((p.x += DIR[REV[p.d]][0]), (p.y += DIR[REV[p.d]][1])));
      });
      try {
        sfx(520, 0.25);
        setTimeout(() => sfx(780, 0.25), 90);
      } catch (e) {}
    }
    hud();
    G.pe.size || win();
  }
  function tgt(p) {
    const z = G.z,
      d = DIR[z.d] || [0, 0];
    if (p.st === "eyes") return [7, DY];
    if (p.st === "scared") return null;
    if (p.k === "eel") return [z.x, z.y];
    if (p.k === "jel") return [z.x + d[0] * 4, z.y + d[1] * 4];
    if (p.k === "lan") return Math.random() < 0.5 ? [z.x, z.y] : null;
    if (p.k === "sqd") {
      const e = G.P[0];
      return e ? [2 * z.x - e.x, 2 * z.y - e.y] : [z.x, z.y];
    }
    if (p.k === "shk") return [z.x, z.y];
    const dd = Math.hypot(p.x - z.x, p.y - z.y);
    return dd > 6 ? [z.x, z.y] : G.inf ? [14 - z.x, z.y + 5] : [1, H - 2];
  }
  function moveP(p, dt) {
    if (p.st === "home") {
      p.rel -= dt;
      if (p.rel <= 0) {
        p.st = "leave";
        p.x = 7;
        p.y = DY;
        p.p = 0;
        p.d = "u";
      }
      return;
    }
    const sp =
      G.ps *
      (p.k === "shk" && p.st === "chase" ? 1.08 : 1) *
      (p.st === "scared" ? 0.55 : p.st === "eyes" ? 2.1 : 1);
    let m = sp * dt;
    while (m > 0) {
      if (p.p === 0) {
        if (p.st === "leave") {
          if (p.y <= DY - 2) {
            p.st = G.pow > 0 && p.sc === 0 ? "chase" : "chase";
          } else {
            p.d = "u";
          }
        }
        if (p.st === "eyes" && p.x === 7 && p.y === DY) {
          p.st = "chase";
          p.d = "u";
          p.sc = 1;
        }
        if (p.st !== "leave") {
          const T = tgt(p),
            ops = ["u", "l", "d", "r"].filter(
              (d) =>
                (d !== REV[p.d] || 0) &&
                (canP(p.x, p.y, d) || (p.st === "eyes" && p.x === 7 && p.y === DY - 2 && d === "d")),
            );
          let o = ops.length ? ops : ["u", "l", "d", "r"].filter((d) => canP(p.x, p.y, d));
          if (p.st === "eyes" && p.x === 7 && p.y === DY - 2) o = ["d"];
          if (!o.length) return;
          if (!T) p.d = o[Math.floor(Math.random() * o.length)];
          else
            p.d = o.reduce((b, d) => {
              const q = Math.hypot(p.x + DIR[d][0] - T[0], p.y + DIR[d][1] - T[1]),
                Q = Math.hypot(p.x + DIR[b][0] - T[0], p.y + DIR[b][1] - T[1]);
              return q < Q ? d : b;
            }, o[0]);
        }
      }
      const r = Math.min(m, 1 - p.p);
      p.p += r;
      m -= r;
      if (p.p >= 1) {
        p.x += DIR[p.d][0];
        p.y += DIR[p.d][1];
        p.p = 0;
      }
    }
  }
  function hit() {
    const zp = [
      G.z.x + (DIR[G.z.d] ? DIR[G.z.d][0] * G.z.p : 0),
      G.z.y + (DIR[G.z.d] ? DIR[G.z.d][1] * G.z.p : 0),
    ];
    for (const p of G.P) {
      if (p.st === "home" || p.st === "eyes") continue;
      const pp = [p.x + (DIR[p.d] ? DIR[p.d][0] * p.p : 0), p.y + (DIR[p.d] ? DIR[p.d][1] * p.p : 0)];
      if (Math.hypot(pp[0] - zp[0], pp[1] - zp[1]) < 0.62) {
        if (p.st === "scared" && G.pow > 0) {
          p.st = "eyes";
          G.inf && (p.rm = 1);
          G.chain++;
          const v = 200 * 2 ** (G.chain - 1);
          G.score += v;
          G.fx.push({
            s: "+" + v,
            x: (pp[0] + 0.5) * TS,
            y: (pp[1] + 0.5) * TS,
            wx: pp[0] + 0.5,
            wy: pp[1] + 0.5,
            t: performance.now(),
          });
          try {
            sfx(990, 0.12);
            setTimeout(() => sfx(1320, 0.12), 80);
          } catch (e) {}
          hud();
        } else if (!(G.inv > 0)) {
          die();
          return;
        }
      }
    }
  }
  function die() {
    G.state = "dead";
    G.flash = 0;
    G.lives--;
    hud();
    try {
      sfx(330, 0.2);
      setTimeout(() => sfx(220, 0.35), 160);
      vib && vib(40);
    } catch (e) {}
  }
  function win() {
    if (G.state !== "play") return;
    G.state = "win";
    const n = G.n,
      first = !G.rank && n > lvMax();
    let gain = 0;
    if (first) {
      st.set("zr:lv", n);
      gain = dmR(ID, n % 10 === 0 ? 5 : 2);
      gain && scrGain(gain);
    }
    G.score += 500;
    hud();
    try {
      [660, 880, 1100].forEach((f, i) => setTimeout(() => sfx(f, 0.3), i * 120));
    } catch (e) {}
    setTimeout(() => {
      if (!G) return;
      if (G.rank) {
        level(n + 1);
        G.state = "ready";
        ov(
          `<div class="zrot"><small>Mode Rank · ${G.score} pts</small><b>Niveau ${n + 1}</b><span>Touche pour continuer</span></div>`,
        );
        return;
      }
      ov(
        `<div class="zrot win"><small>${G.wd.n}</small><b>Niveau ${n} réussi !</b><span>${G.score} pts${gain ? " · +" + gain + " 🫧" : ""}</span><div class="zrob"><button class="zrbig" data-a="zrGo" data-v="${n + 1}">Niveau ${n + 1}</button><button class="zrpill" data-a="zrQ">Récif</button></div></div>`,
      );
    }, 700);
  }
  function over() {
    G.state = "over";
    let rec = "";
    if (G.rank) {
      const b = st.get("zr:rkb", 0);
      G.score > b && (st.set("zr:rkb", G.score), (rec = " · nouveau record !"));
      try {
        infSave(ID, G.score);
      } catch (e) {}
    }
    ov(
      `<div class="zrot lose"><small>${G.rank ? "Mode Rank" : "Niveau " + G.n}</small><b>${G.rank ? G.score + " pts" : "Zeni s’est fait attraper"}</b><span>${G.rank ? (G.inf ? "Remonté de " + G.dist + " m" : "Atteint le niveau " + G.n) + rec : "Plus de vies"}</span><div class="zrob">${G.rank ? `<button class="zrbig" data-a="zrRk">Rejouer</button><button class="zrpill" data-a="infBd" data-v="${ID}">Classement</button>` : `<button class="zrbig" data-a="zrGo" data-v="${G.n}">Réessayer</button>`}<button class="zrpill" data-a="zrQ">Récif</button></div></div>`,
    );
  }
  let LT = 0;
  function loop(t) {
    if (!G || !$("#zrc")) return stopAll();
    RAF = requestAnimationFrame(loop);
    const dt = Math.min(0.05, (t - (LT || t)) / 1e3);
    LT = t;
    if (G.state === "play") {
      G.t += dt;
      G.pow > 0 &&
        ((G.pow = Math.max(0, G.pow - dt)),
        G.pow === 0 && G.P.forEach((p) => p.st === "scared" && (p.st = "chase")));
      moveZ(dt);
      G.frz > 0 || G.P.forEach((p) => moveP(p, dt));
      G.inf && stepInf(dt);
      G.state === "play" && hit();
    } else if (G.state === "dead") {
      G.flash += dt * 1.2;
      if (G.flash >= 1) {
        if (G.lives <= 0) over();
        else {
          G.inf ? reviveI() : reset();
          G.state = "ready";
          ov(
            '<div class="zrot"><small>Encore ' +
              G.lives +
              " vie" +
              (G.lives > 1 ? "s" : "") +
              "</small><b>Courage, Zeni !</b><span>Touche pour repartir</span></div>",
          );
        }
      }
    }
    G.inf ? renderInf(t) : render(t);
  }
  const go = (d) => {
    if (!G) return;
    if (G.state === "ready") {
      G.state = "play";
      ov("");
      LT = 0;
    }
    G.state === "play" && d && (G.z.nd = d);
  };
  let BD = 0;
  function bind() {
    if (BD) return;
    BD = 1;
    // Contrôles via Input : flèches, ZQSD / WASD et Espace ; au doigt ou à la souris, glisser dans la grille.
    const DIR = { monter: "u", descendre: "d", bougerGauche: "l", bougerDroite: "r" },
      LET = {
        w: "monter",
        s: "descendre",
        a: "bougerGauche",
        d: "bougerDroite",
        z: "monter",
        q: "bougerGauche",
      },
      touches = {};
    for (const k in LET) touches[k] = touches[k.toUpperCase()] = LET[k];
    Input.sur(
      ["monter", "descendre", "bougerGauche", "bougerDroite", "sauter"],
      (a, i) => {
        if (cur !== ID || !G || !$("#zrc")) return;
        i.evt.preventDefault();
        go(DIR[a]);
      },
      { touches },
    );
    let sx = 0,
      sy = 0,
      on = 0;
    Input.sur(
      ["toucher", "glisser", "survoler", "lacher"],
      (a, i) => {
        const e = i.evt;
        if (a === "toucher") {
          if (!G || !e.target.closest || !e.target.closest(".zrg") || e.target.closest("button")) return;
          sx = e.clientX;
          sy = e.clientY;
          on = 1;
          G.state === "ready" && go("");
        } else if (a === "lacher") on = 0;
        else {
          if (!on || !G) return;
          const dx = e.clientX - sx,
            dy = e.clientY - sy;
          if (Math.hypot(dx, dy) < 22) return;
          go(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "r" : "l") : dy > 0 ? "d" : "u");
          sx = e.clientX;
          sy = e.clientY;
        }
      },
      { passive: !0 },
    );
    addEventListener("resize", () => {
      if (G && $("#zrc")) {
        G.inf ? sizeInf() : draw0();
      }
    });
  }
  /* ===== Mode Rank : Marée d’encre (sans fin, vue 3D) ===== */
  let CVW = 0,
    CVH = 0;
  const mixH = (a, b, f) => {
      const A = hx(a),
        B = hx(b);
      return "#" + A.map((v, i) => ((v + (B[i] - v) * f) | 0).toString(16).padStart(2, "0")).join("");
    },
    wdAt = (d) => {
      const p = d / 150,
        k = Math.floor(p),
        f = p - k,
        a = WI[k % WI.length],
        b = WI[(k + 1) % WI.length];
      return {
        n: f < 0.5 ? a.n : b.n,
        bg: [mixH(a.bg[0], b.bg[0], f), mixH(a.bg[1], b.bg[1], f)],
        w1: mixH(a.w1, b.w1, f),
        w2: mixH(a.w2, b.w2, f),
        gl: mixH(a.gl, b.gl, f),
        pe: mixH(a.pe, b.pe, f),
      };
    };
  const WI = [
    ...WD,
    {
      n: "Épave dorée",
      bg: ["#1a1204", "#3a2808"],
      w1: "#ffc54d",
      w2: "#b07a1a",
      gl: "#ffe9a8",
      pe: "#fff6dc",
    },
    { n: "Banquise", bg: ["#06203a", "#0d4a6e"], w1: "#bfe8ff", w2: "#6aa8d0", gl: "#e8f8ff", pe: "#ffffff" },
    {
      n: "Lave sous-marine",
      bg: ["#1c0508", "#4a0f12"],
      w1: "#ff7a4d",
      w2: "#b8321a",
      gl: "#ffb08a",
      pe: "#fff0e0",
    },
    {
      n: "Nuit phosphorescente",
      bg: ["#050014", "#1a0a3a"],
      w1: "#d36bff",
      w2: "#6a1fb0",
      gl: "#f0b8ff",
      pe: "#f6e6ff",
    },
    {
      n: "Cité engloutie",
      bg: ["#0a1a1a", "#1f3a3a"],
      w1: "#a8c8a0",
      w2: "#5a7a5a",
      gl: "#d8f0d0",
      pe: "#f4fff0",
    },
  ];
  const hx = (h) => {
      const n = parseInt(h.slice(1), 16);
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    },
    rgb = (h, f, a = 1) => {
      const [r, g, b] = hx(h);
      return `rgba(${Math.min(255, r * f) | 0},${Math.min(255, g * f) | 0},${Math.min(255, b * f) | 0},${a})`;
    };
  function power() {
    G.pow = G.pdur;
    G.chain = 0;
    G.P.forEach((p) => {
      p.st === "chase" &&
        ((p.st = "scared"),
        (p.d = REV[p.d] || p.d),
        (p.p = p.p ? 1 - p.p : 0),
        p.p && ((p.x += DIR[REV[p.d]][0]), (p.y += DIR[REV[p.d]][1])));
    });
    try {
      sfx(520, 0.25);
      setTimeout(() => sfx(780, 0.25), 90);
    } catch (e) {}
  }
  function genChunk() {
    const g = G.g,
      K = 6,
      yb = g.top;
    for (let i = 1; i <= 2 * K; i++) g.R[yb - i] = Array(W).fill(1);
    const cell = (cx, cy) => [1 + 2 * cx, yb - 1 - 2 * cy],
      vis = [...Array(K)].map(() => Array(7).fill(0)),
      sk = [[3, 0]];
    vis[0][3] = 1;
    g.R[yb - 1][7] = 0;
    while (sk.length) {
      const [cx, cy] = sk[sk.length - 1],
        nb = [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
        ]
          .map(([a, b]) => [cx + a, cy + b])
          .filter(([a, b]) => a >= 0 && a < 7 && b >= 0 && b < K && !vis[b][a]);
      if (!nb.length) {
        sk.pop();
        continue;
      }
      const [nx, ny] = nb[(Math.random() * nb.length) | 0],
        [x0, y0] = cell(cx, cy),
        [x1, y1] = cell(nx, ny);
      g.R[(y0 + y1) / 2][(x0 + x1) / 2] = 0;
      g.R[y1][x1] = 0;
      vis[ny][nx] = 1;
      sk.push([nx, ny]);
    }
    for (let cy = 0; cy < K; cy++)
      for (let cx = 0; cx < 7; cx++) {
        const [x, y] = cell(cx, cy);
        cx < 6 && Math.random() < 0.32 && (g.R[y][x + 1] = 0);
        cy < K - 1 && Math.random() < 0.32 && (g.R[y - 1][x] = 0);
      }
    if (!g.first) {
      const cs = [0, 1, 2, 3, 4, 5, 6]
        .sort(() => Math.random() - 0.5)
        .slice(0, 2 + (Math.random() < 0.5 ? 1 : 0));
      cs.forEach((c) => {
        g.R[yb][1 + 2 * c] = 0;
        G.pe.add(1 + 2 * c + "," + yb);
      });
    }
    g.first = 0;
    const dg = (x, y) =>
        [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
        ].filter(([a, b]) => !g.get(x + a, y + b)).length,
      fix = (x, y) => {
        let k = 0;
        while (dg(x, y) < 2 && k++ < 6) {
          const cd = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
          ].filter(
            ([a, b]) => g.get(x + a, y + b) === 1 && g.R[y + 2 * b] && g.R[y + 2 * b][x + 2 * a] === 0,
          );
          if (!cd.length) break;
          const [a, b] = cd[(Math.random() * cd.length) | 0];
          g.R[y + b][x + a] = 0;
        }
      };
    for (let cy = 0; cy < K; cy++)
      for (let cx = 0; cx < 7; cx++) {
        const [x, y] = cell(cx, cy);
        fix(x, y);
      }
    if (yb < 3) for (let cx = 0; cx < 7; cx++) fix(1 + 2 * cx, yb + 1);
    const cn = (x0, y0, x1, y1) => {
      const q = [[x0, y0]],
        sn = new Set([x0 + "," + y0]);
      while (q.length) {
        const [x, y] = q.pop();
        if (x === x1 && y === y1) return 1;
        for (const [a, b] of [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
        ]) {
          const X = x + a,
            Y = y + b,
            k = X + "," + Y;
          if (!sn.has(k) && g.get(X, Y) === 0) {
            sn.add(k);
            q.push([X, Y]);
          }
        }
      }
      return 0;
    };
    for (let x = 1; x < W - 1; x += 2) {
      let run = 0;
      for (let y = Math.min(g.hi, yb + 14); y >= yb - 2 * K; y--) {
        g.get(x, y) === 0 ? run++ : (run = 0);
        if (run >= 8) {
          const yy = y % 2 ? y + 4 : y + 3;
          if (g.get(x, yy) === 0 && dg(x, yy - 1) >= 3 && dg(x, yy + 1) >= 3) {
            g.R[yy][x] = 1;
            if (cn(x, yy - 1, x, yy + 1)) {
              G.pe.delete(x + "," + yy);
              run = 0;
            } else g.R[yy][x] = 0;
          }
          if (run) run = 4;
        }
      }
    }
    for (let y = yb - 2 * K; y < yb; y++)
      for (let x = 1; x < W - 1; x++) g.R[y][x] === 0 && G.pe.add(x + "," + y);
    G.pe.delete("7,2");
    const oc = [];
    for (let cy = 0; cy < K; cy++) for (let cx = 0; cx < 7; cx++) oc.push(cell(cx, cy));
    const [ix, iy] = oc[(Math.random() * oc.length) | 0],
      ty = (G.cn = (G.cn || 0) + 1) % 2 ? "w" : ["s", "f", "r", "w"][(Math.random() * 4) | 0];
    G.pe.delete(ix + "," + iy);
    G.it.set(ix + "," + iy, ty);
    g.top = yb - 2 * K;
  }
  function spawnP() {
    const zy = G.z.y;
    for (let k = 0; k < 40; k++) {
      const y = Math.round(zy - 14 - Math.random() * 8),
        x = 1 + ((Math.random() * 13) | 0);
      if (G.g.get(x, y) === 0) {
        const nt = Math.min(6, 2 + Math.floor(G.dist / 60)),
          q = PRD[(Math.random() * nt) | 0];
        G.P.push({ ...q, i: G.pid++, x, y, d: "u", p: 0, st: "chase", rel: 0, sc: 0 });
        return;
      }
    }
  }
  function eatI() {
    const z = G.z,
      k = z.x + "," + z.y;
    if (G.pe.delete(k)) {
      G.score += 10;
      G.snd = (G.snd + 1) % 2;
      G.tideY += 0.05;
      try {
        sfx(G.snd ? 740 : 820, 0.035);
      } catch (e) {}
    }
    const it = G.it.get(k);
    if (it) {
      G.it.delete(k);
      const now = performance.now(),
        fx = (s) => G.fx.push({ s, x: CVW / 2, y: CVH * 0.3, t: now });
      G.score += 50;
      if (it === "w") {
        power();
        fx("Bulle !");
      } else if (it === "s") {
        G.bst = 6;
        fx("Courant ! ⚡");
      } else if (it === "f") {
        G.frz = 5;
        fx("Gel ! ❄");
      } else {
        G.tideY += 7;
        fx("Remous ! 🌀");
      }
      try {
        sfx(620, 0.2);
        setTimeout(() => sfx(930, 0.2), 80);
      } catch (e) {}
    }
    hud();
  }
  function stepInf(dt) {
    const g = G.g,
      z = G.z,
      zy = z.y + (DIR[z.d] ? DIR[z.d][1] * z.p : 0);
    G.cam += (zy - G.cam) * Math.min(1, dt * 6);
    while (g.top > G.cam - 32) genChunk();
    while (g.hi > G.cam + 34) delete g.R[g.hi--];
    const dst = Math.max(G.dist, Math.floor(2 - zy));
    if (dst > G.dist) {
      const old = G.dist;
      G.dist = dst;
      G.score += 10 * (dst - old);
      if (Math.floor(dst / 150) > Math.floor(old / 150)) {
        G.score += 300;
        const nw = WI[(Math.floor(dst / 150) + 1) % WI.length];
        G.fx.push({ s: dst + " m · vers : " + nw.n, x: CVW / 2, y: CVH * 0.35, t: performance.now() });
      }
      hud();
    }
    G.zs = 5.2 * (G.bst > 0 ? 1.28 : 1);
    G.ps = 3.3 + Math.min(1.9, G.dist / 320);
    G.pdur = Math.max(3.4, 6.5 - G.dist / 180);
    ["bst", "frz", "inv"].forEach((k) => G[k] > 0 && (G[k] = Math.max(0, G[k] - dt)));
    G.wd = wdAt(G.dist);
    G.tideY > zy + 34 && (G.tideY = zy + 34);
    if (G.tdl > 0) G.tdl -= dt;
    else {
      const gp = G.tideY - zy;
      G.tideY -=
        (1 + 2.2 * (1 - Math.exp(-G.dist / 260))) * (gp > 13 ? 1 + Math.min(3, (gp - 13) * 0.35) : 1) * dt;
    }
    if (zy + 0.45 >= G.tideY) {
      die();
      return;
    }
    G.spawnT -= dt;
    if (G.spawnT <= 0 && G.P.length < Math.min(7, 2 + Math.floor(G.dist / 40))) {
      spawnP();
      G.spawnT = 2.4;
    }
    G.P = G.P.filter((p) => !p.rm && p.y < G.tideY - 0.6 && p.y < zy + 20);
  }
  function reviveI() {
    const z = G.z;
    z.p = 0;
    z.d = "";
    z.nd = "";
    G.P = [];
    G.tideY = z.y + 9;
    G.tdl = 2;
    G.inv = 2.5;
    G.pow = 0;
    G.frz = 0;
    G.bst = 0;
    G.spawnT = 4;
  }
  function sizeInf() {
    CV = $("#zrc");
    if (!CV) return;
    const bw = Math.min(app.clientWidth || innerWidth, 520) - 20,
      bh = (innerHeight || 700) - 150;
    TS = Math.max(14, Math.floor(bw / W));
    CVW = W * TS;
    CVH = Math.max(380, Math.floor(bh));
    const d = Math.min(2, devicePixelRatio || 1);
    CV.width = CVW * d;
    CV.height = CVH * d;
    CV.style.width = CVW + "px";
    CV.style.height = CVH + "px";
    CX = CV.getContext("2d");
    CX.setTransform(d, 0, 0, d, 0, 0);
    const rb = 4,
      rt = 22,
      N = rb + rt,
      Db = N / (1 / 0.58 - 1),
      F = TS * Db,
      Dt = Db + N,
      Yt = 34,
      Hc = (CVH - Yt - 26) / (F * (1 / Db - 1 / Dt));
    G.pj = { rb, rt, Db, F, Dt, Yt, Hc };
  }
  function startInf() {
    stopAll();
    cur = ID;
    const nb = $("#nav");
    nb && (nb.hidden = !0);
    app.innerHTML = `<div class="zrg zrr"><canvas class="zrbg"></canvas><div class="zrtp"><button class="back" data-a="zrQ">‹ Récif</button><div class="zrti"><b id="zrlv"></b><small id="zrsc"></small></div><div class="zrlf" id="zrlf"></div></div><div class="zrbox"><canvas id="zrc" aria-label="${NAME}"></canvas><div class="zrov" id="zrov"></div></div><p class="zrhint">Glisse le doigt pour nager · fuis la marée d’encre !</p></div>`;
    const g = {
      inf: 1,
      R: {},
      top: 3,
      hi: 3,
      first: 1,
      get(x, y) {
        const r = this.R[y];
        return r ? r[x] : 1;
      },
    };
    g.R[3] = Array(W).fill(1);
    G = {
      n: 1,
      rank: 1,
      inf: 1,
      score: 0,
      lives: 1,
      chain: 0,
      g,
      wd: WI[0],
      pe: new Set(),
      pw: new Set(),
      it: new Map(),
      tot: 0,
      np: 0,
      zs: 5.2,
      ps: 3.3,
      pdur: 6.5,
      pow: 0,
      snd: 0,
      t: 0,
      state: "ready",
      flash: 0,
      fx: [],
      dist: 0,
      cam: 2,
      P: [],
      z: { x: 7, y: 2, d: "", nd: "", p: 0, f: 1 },
      tideY: 10,
      tdl: 3.5,
      bst: 0,
      frz: 0,
      inv: 0,
      spawnT: 6,
      pid: 0,
    };
    for (let i = 0; i < 5; i++) genChunk();
    bgLoop(app.querySelector(".zrbg"), WD[0]);
    sizeInf();
    bind();
    ov(
      `<div class="zrot"><small>Mode Rank</small><b>Marée d’encre</b><span>Remonte sans fin · touche ou glisse pour commencer</span></div>`,
    );
    hud();
    RAF = requestAnimationFrame(loop);
    window.scrollTo(0, 0);
  }
  function drawItem(c, it, X, Y, s, t) {
    const pu = 1 + 0.12 * Math.sin(t / 200);
    c.save();
    c.translate(X, Y);
    c.scale(pu, pu);
    if (it === "w") {
      c.shadowColor = "#ff9ad8";
      c.shadowBlur = 10;
      for (let a = 0; a < 7; a++) {
        c.strokeStyle = a % 2 ? "#ff9ad8" : "#ffd0ec";
        c.lineWidth = s * 0.08;
        c.lineCap = "round";
        c.beginPath();
        c.moveTo(0, s * 0.18);
        const an = -Math.PI / 2 + (a - 3) * 0.35;
        c.quadraticCurveTo(
          Math.cos(an) * s * 0.2,
          Math.sin(an) * s * 0.1,
          Math.cos(an) * s * 0.32 + Math.sin(t / 300 + a) * s * 0.04,
          Math.sin(an) * s * 0.32,
        );
        c.stroke();
      }
      c.fillStyle = "#ffe3f4";
      c.beginPath();
      c.arc(0, s * 0.16, s * 0.1, 0, 7);
      c.fill();
    } else {
      const col = { s: "#ffe066", f: "#9ee8ff", r: "#b98bff" }[it];
      c.shadowColor = col;
      c.shadowBlur = 12;
      c.fillStyle = col;
      c.beginPath();
      c.arc(0, 0, s * 0.32, 0, 7);
      c.fill();
      c.shadowBlur = 0;
      c.fillStyle = "#102040";
      c.font = ((s * 0.4) | 0) + "px sans-serif";
      c.textAlign = "center";
      c.textBaseline = "middle";
      c.fillText({ s: "⚡", f: "❄", r: "🌀" }[it], 0, 1);
    }
    c.restore();
  }
  function renderInf(t) {
    if (!CX || !G || !G.pj) return;
    const c = CX,
      g = G.g,
      P = G.pj,
      w = CVW,
      h = CVH,
      wd = G.wd,
      cam = G.cam,
      Hw = 0.8;
    const Dy = (y) => P.Db + P.rb - (y - cam),
      Sc = (y) => P.F / Dy(y),
      Pj = (x, y, z) => {
        const D = Dy(y);
        return [w / 2 + ((x - 7.5) * P.F) / D, P.Yt + (P.F * (P.Hc - z)) / D - (P.F * P.Hc) / P.Dt];
      };
    c.clearRect(0, 0, w, h);
    const gr = c.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, rgb(wd.bg[0], 1));
    gr.addColorStop(1, rgb(wd.bg[1], 1));
    c.fillStyle = gr;
    c.fillRect(0, 0, w, h);
    const fl = rgb(wd.bg[0], 0.35, 0.9),
      ff = rgb(wd.w1, 0.5),
      fs = rgb(wd.w1, 0.72),
      ft = rgb(wd.w1, 1.1),
      fd = rgb(wd.w1, 0.85),
      ed = rgb(wd.gl, 1, 0.8);
    const Q = (a) => {
      a.forEach(([X, Y], i) => (i ? c.lineTo(X, Y) : c.moveTo(X, Y)));
      c.closePath();
    };
    const zp = [
        G.z.x + 0.5 + (DIR[G.z.d] ? DIR[G.z.d][0] * G.z.p : 0),
        G.z.y + 0.5 + (DIR[G.z.d] ? DIR[G.z.d][1] * G.z.p : 0),
      ],
      E = [{ x: zp[0], y: zp[1] }];
    G.P.forEach((p) => {
      const d = DIR[p.d] || [0, 0];
      E.push({ p, x: p.x + 0.5 + d[0] * p.p, y: p.y + 0.5 + d[1] * p.p });
    });
    E.sort((a, b) => a.y - b.y);
    while (E.length && E[E.length - 1].y > cam + P.rb + 1.5) E.pop();
    let ei = 0;
    const dE = (e) => {
      const [X, Y] = Pj(e.x, e.y, 0.42),
        s = Sc(e.y),
        [X0, Y0] = Pj(e.x, e.y, 0);
      c.fillStyle = "rgba(0,0,0,.3)";
      c.beginPath();
      c.ellipse(X0, Y0, s * 0.3, s * 0.12, 0, 0, 7);
      c.fill();
      if (e.p) pDraw(c, e.p, X, Y, s * 0.95, t);
      else {
        if (G.state === "dead") c.globalAlpha = Math.max(0, 1 - G.flash);
        else if (G.inv > 0 && Math.floor(t / 110) % 2) c.globalAlpha = 0.4;
        zDraw(c, X, Y, s * (G.state === "dead" ? 1 - G.flash * 0.5 : 1), t);
        c.globalAlpha = 1;
      }
    };
    const y0 = Math.floor(cam - P.rt) - 1,
      y1 = Math.ceil(cam + P.rb) + 1;
    for (let y = y0; y <= y1; y++) {
      c.fillStyle = fl;
      c.beginPath();
      for (let x = 1; x < W - 1; x++)
        g.get(x, y) === 0 && Q([Pj(x, y, 0), Pj(x + 1, y, 0), Pj(x + 1, y + 1, 0), Pj(x, y + 1, 0)]);
      c.fill();
      c.fillStyle = ff;
      c.beginPath();
      for (let x = 0; x < W; x++)
        g.get(x, y) === 1 &&
          g.get(x, y + 1) === 0 &&
          Q([Pj(x, y + 1, Hw), Pj(x + 1, y + 1, Hw), Pj(x + 1, y + 1, 0), Pj(x, y + 1, 0)]);
      c.fill();
      c.fillStyle = fs;
      c.beginPath();
      for (let x = 0; x < W; x++) {
        if (g.get(x, y) !== 1) continue;
        if (x < 7 && g.get(x + 1, y) === 0)
          Q([Pj(x + 1, y, Hw), Pj(x + 1, y + 1, Hw), Pj(x + 1, y + 1, 0), Pj(x + 1, y, 0)]);
        else if (x > 7 && g.get(x - 1, y) === 0)
          Q([Pj(x, y, Hw), Pj(x, y + 1, Hw), Pj(x, y + 1, 0), Pj(x, y, 0)]);
      }
      c.fill();
      c.fillStyle = fd;
      c.beginPath();
      const lit = [];
      for (let x = 0; x < W; x++) {
        if (g.get(x, y) !== 1) continue;
        const q = [Pj(x, y, Hw), Pj(x + 1, y, Hw), Pj(x + 1, y + 1, Hw), Pj(x, y + 1, Hw)];
        if (g.get(x - 1, y) === 1 && g.get(x + 1, y) === 1 && g.get(x, y - 1) === 1 && g.get(x, y + 1) === 1)
          Q(q);
        else lit.push(q);
      }
      c.fill();
      c.fillStyle = ft;
      c.strokeStyle = ed;
      c.lineWidth = 1;
      c.beginPath();
      lit.forEach(Q);
      c.fill();
      c.stroke();
      c.fillStyle = wd.pe;
      c.beginPath();
      for (let x = 1; x < W - 1; x++)
        if (G.pe.has(x + "," + y)) {
          const [X, Y] = Pj(x + 0.5, y + 0.5, 0.1),
            r = Sc(y) * 0.09;
          c.moveTo(X + r, Y);
          c.arc(X, Y, r, 0, 7);
        }
      c.fill();
      for (let x = 1; x < W - 1; x++) {
        const it = G.it.get(x + "," + y);
        if (it) {
          const [X, Y] = Pj(x + 0.5, y + 0.5, 0.3);
          drawItem(c, it, X, Y, Sc(y), t);
        }
      }
      while (ei < E.length && E[ei].y < y + 1) dE(E[ei++]);
    }
    while (ei < E.length) dE(E[ei++]);
    const ty = G.tideY,
      tv = ty < cam + P.rb + 2,
      pts = [];
    if (tv)
      for (let x = -8; x <= 23; x += 0.5)
        pts.push(Pj(x, ty + 0.2 * Math.sin(x * 1.2 + t / 280) + 0.12 * Math.sin(x * 2.7 - t / 170), 0));
    if (tv) {
      c.save();
      c.lineCap = "round";
      [2.5, 6, 9.5, 12.5].forEach((tx, i) => {
        const sw = Math.sin(t / 420 + i * 1.7),
          [bx, by] = Pj(tx, ty + 0.6, 0),
          s = Sc(ty),
          L = s * (2.2 + 0.8 * Math.sin(t / 700 + i)),
          tp = [bx + sw * s * 0.9, by - L];
        c.strokeStyle = "#1a0a3d";
        c.lineWidth = s * 0.5;
        c.beginPath();
        c.moveTo(bx, by + s * 0.5);
        c.quadraticCurveTo(bx - sw * s * 0.7, by - L * 0.55, tp[0], tp[1]);
        c.stroke();
        c.strokeStyle = "#3b1c7a";
        c.lineWidth = s * 0.2;
        c.beginPath();
        c.moveTo(bx, by);
        c.quadraticCurveTo(bx - sw * s * 0.7, by - L * 0.55, tp[0], tp[1]);
        c.stroke();
      });
      c.restore();
      let ey = h;
      pts.forEach((p) => (ey = Math.min(ey, p[1])));
      const ig = c.createLinearGradient(0, ey, 0, h);
      ig.addColorStop(0, "rgba(38,14,78,.97)");
      ig.addColorStop(0.4, "rgba(12,4,32,.99)");
      ig.addColorStop(1, "#02000a");
      c.fillStyle = ig;
      c.beginPath();
      pts.forEach(([X, Y], i) => (i ? c.lineTo(X, Y) : c.moveTo(X, Y)));
      c.lineTo(w + 90, h + 40);
      c.lineTo(-90, h + 40);
      c.closePath();
      c.fill();
    }
    c.save();
    [4.5, 10.5].forEach((ex) => {
      if (!tv) return;
      const [X, Y] = Pj(ex, ty + 2.8, 0),
        s = Sc(ty + 2.8);
      if (Y < h) {
        c.shadowColor = "#ff7be0";
        c.shadowBlur = 12;
        c.fillStyle = "#ffc4f2";
        c.beginPath();
        c.ellipse(X, Y, s * 0.34, s * 0.2, 0, 0, 7);
        c.fill();
        c.shadowBlur = 0;
        c.fillStyle = "#2a0a40";
        c.beginPath();
        c.arc(X, Y, s * 0.1, 0, 7);
        c.fill();
      }
    });
    c.restore();
    const dd = ty - G.z.y;
    if (dd < 6) {
      const vg = c.createLinearGradient(0, h * 0.45, 0, h);
      vg.addColorStop(0, "rgba(140,0,60,0)");
      vg.addColorStop(1, `rgba(140,0,60,${(0.5 * (6 - dd)) / 6})`);
      c.fillStyle = vg;
      c.fillRect(0, h * 0.45, w, h * 0.55);
    }
    G.fx = G.fx.filter((f) => t - f.t < 1100);
    c.save();
    G.fx.forEach((f) => {
      const a = (t - f.t) / 1100,
        [X, Y] = f.wx != null ? Pj(f.wx, f.wy, 1) : [f.x, f.y];
      c.globalAlpha = 1 - a * a;
      c.fillStyle = "#fff3a0";
      c.font = `800 ${(TS * 0.6) | 0}px ui-monospace,Menlo,Consolas,monospace`;
      c.textAlign = "center";
      c.fillText(f.s, X, Y - a * TS);
    });
    c.restore();
    c.save();
    let cx2 = 8;
    [
      ["bst", "⚡"],
      ["frz", "❄"],
      ["pow", "🫧"],
    ].forEach(([k, e]) => {
      if (G[k] > 0) {
        c.fillStyle = "rgba(0,0,0,.45)";
        c.fillRect(cx2, 6, 66, 22);
        c.fillStyle = "#fff";
        c.font = "700 13px system-ui,sans-serif";
        c.textAlign = "left";
        c.textBaseline = "middle";
        c.fillText(e + " " + Math.ceil(G[k]) + "s", cx2 + 6, 17);
        cx2 += 72;
      }
    });
    c.restore();
  }
  /* Actions */
  setTimeout(() => {
    Object.assign(act, {
      zrGo: (v) => {
        const n = Math.max(1, +v || lvMax() + 1);
        start(n, 0);
      },
      zrRk: () => {
        if (!rkOn()) return (msg?.("Termine le niveau " + RKU + " pour débloquer le Mode Rank."), void 0);
        startInf();
      },
      zrQ: () => {
        lobby();
      },
      zrShX: () => {
        const d = $("#vzsh");
        d && d.remove();
      },
      zrRu: () =>
        sheet(
          "Les règles",
          `<p class="note" style="margin:0 0 8px">Zeni nage dans le récif. Glisse le doigt (ou utilise les flèches) pour changer de direction et ramasse toutes les <b>perles</b> pour finir le niveau.</p><p class="note" style="margin:0 0 8px">Quatre prédateurs le pourchassent, chacun à sa façon : la <b>murène</b> le suit à la trace, la <b>méduse</b> lui coupe la route, le <b>poisson-lanterne</b> hésite, et le <b>crabe</b> garde son coin. Au niveau 10 arrive le <b>calmar</b>, qui le prend en tenaille avec la murène, puis au niveau 20 le <b>requin</b>, plus rapide que les autres.</p><p class="note" style="margin:0">Touche une <b>anémone lumineuse</b> : Zeni s’entoure d’une bulle et peut enfermer les prédateurs dans des bulles qui les ramènent à leur grotte. 3 vies par partie. Le <b>Mode Rank</b> (disponible dès le début) est une remontée sans fin en vue 3D : le labyrinthe se construit au fur et à mesure et la <b>marée d’encre</b> monte derrière Zeni en accélérant. Ramasse les bonus (⚡ courant, ❄ gel, 🌀 remous) et les anémones pour tenir le plus longtemps.</p>`,
        ),
      zrLs: () => {
        const m = lvMax() + 1;
        sheet(
          "Choisir un niveau",
          `<div class="lvg">${[...Array(Math.min(m, 400))].map((_, i) => `<button class="lv${i + 1 === m ? " cur" : " done"}" data-a="zrGo" data-v="${i + 1}">${i + 1}</button>`).join("")}</div>`,
        );
      },
      zrSt: () =>
        sheet(
          "Records",
          `<div class="vzstt"><div><b>${lvMax()}</b><small>niveaux réussis</small></div><div><b>${st.get("zr:rkb", 0)}</b><small>record Rank</small></div></div>`,
        ),
    });
    const _o = act.open;
    act.open = function (e) {
      if (e === ID) return lobby();
      return _o.apply(this, arguments);
    };
    const _h = home;
    home = function () {
      stopAll();
      return _h.apply(this, arguments);
    };
    try {
      cur === null && document.querySelector(".tile") && home();
    } catch (e) {}
  }, 90);
})();
