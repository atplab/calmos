(() => {
  /* ===== Garde du Lagon : Zeni repousse les bancs qui descendent ===== */
  const ID = "garde",
    NAME = "Attaque marine";
  const G0 = {
    id: ID,
    n: NAME,
    ic: "",
    a: "#7dffb0",
    b: "#0f4a4a",
    t: "Les bancs descendent",
    s: "Des bancs de créatures descendent vers le lagon. Glisse le doigt pour déplacer Zeni : il tire tout seul. Vide chaque banc avant qu’il n’atteigne le fond.<br><br><b>Ennemis</b> : méduses, crabes à carapace, lanternes à encre, oursins plongeurs, poissons-globes explosifs, tortues (attends que la carapace s’ouvre), seiches à nuage d’encre, méduses géantes qui se divisent, anguilles à rayon, étoiles à tir en éventail, raies de passage, et un boss tous les 5 niveaux.<br><br><b>Obstacles</b> : coraux (abris), rochers, mines (tire dessus pour souffler les ennemis proches), tourbillons qui dévient tes tirs.<br><br><b>Bonus</b> : double, triple, rapide, perforant, bouclier, gel, bombe, corail réparé, score ×2, +100, vie. Le poisson doré qui passe en haut en lâche toujours un.<br><br>Le Mode Rank part du niveau 1 avec 3 vies et envoie ton score au classement.",
  };
  try {
    window.GIL &&
      (GIL[ID] =
        '<ellipse cx="32" cy="58" rx="19" ry="3.6" fill="#000" opacity=".22"/><rect x="5" y="5" width="54" height="52" rx="12" fill="#0f4a4a"/><g fill="#ff9ed0"><path d="M12 18a5 5 0 0 1 10 0z"/><path d="M27 18a5 5 0 0 1 10 0z"/><path d="M42 18a5 5 0 0 1 10 0z"/></g><g stroke="#ff9ed0" stroke-width="1.3"><path d="M14 18v4M17 18v5M20 18v4M29 18v4M32 18v5M35 18v4M44 18v4M47 18v5M50 18v4"/></g><g fill="#ffb35a"><rect x="14" y="26" width="8" height="5" rx="2"/><rect x="28" y="26" width="8" height="5" rx="2"/><rect x="42" y="26" width="8" height="5" rx="2"/></g><g fill="none" stroke="#dffaff" stroke-width="1.5"><circle cx="32" cy="38" r="2.4"/></g><path d="M10 44h9v5h-9zM45 44h9v5h-9z" fill="#ff7a9a"/><path d="M32 43c5 0 7 4 7 8s-3 5-7 5-7-1-7-5 2-8 7-8z" fill="#f1ecff"/><circle cx="29.500" cy="50" r="1.200" fill="#3a3070"/><circle cx="34.500" cy="50" r="1.200" fill="#3a3070"/>');
    GD.push(G0);
    ALL.push(G0);
    GUNL.includes(ID) || GUNL.push(ID);
    const c = GCAT.find((c) => c[0] === "arca");
    c && !c[2].includes(ID) && c[2].push(ID);
  } catch (e) {}
  const hide = () => {
    try {
      delete GAV[ID];
    } catch (e) {}
  };
  hide();
  setTimeout(hide, 0);
  let ZI = null;
  const zImg = () => {
    if (ZI) return ZI;
    let v = typeof qzGuy === "function" ? qzGuy("") : "";
    v = v.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ');
    ZI = new Image();
    ZI.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(v);
    return ZI;
  };
  const st0 = document.createElement("style");
  st0.textContent = `.zgg .zrti b{font:800 13px ui-monospace,Menlo,Consolas,monospace;letter-spacing:.12em;text-transform:uppercase;color:#7dffb0;text-shadow:0 0 8px #7dffb0}.zgg .zrti small{font:700 12px ui-monospace,Menlo,Consolas,monospace;letter-spacing:.1em;color:#7ef0ff;text-shadow:0 0 6px #22d3ee;opacity:1}.zgbox{background:#03040d}.zgbox:after{content:"";position:absolute;inset:0;pointer-events:none;z-index:1;background:repeating-linear-gradient(0deg,rgba(255,255,255,.045) 0 1px,transparent 1px 3px),radial-gradient(120% 90% at 50% 45%,transparent 60%,rgba(0,0,0,.55))}.zgbox .zrov{z-index:3}`;
  document.head.appendChild(st0);
  let S = null,
    RAF = 0,
    CV,
    CX,
    W = 360,
    H = 600,
    LT = 0,
    ZY = 540,
    BG = null;
  const stop = () => {
    cancelAnimationFrame(RAF);
    RAF = 0;
    S = null;
  };
  const sheet = (t, h) => {
    const o = $("#vzsh");
    o && o.remove();
    const d = document.createElement("div");
    d.id = "vzsh";
    d.className = "vzsh";
    d.innerHTML = `<div class="vzsp" role="dialog" aria-label="${t}"><div class="vzsx"><h2>${t}</h2><button data-a="zgShX" aria-label="Fermer">✕</button></div>${h}</div>`;
    d.addEventListener("click", (e) => {
      e.target === d && d.remove();
    });
    document.body.appendChild(d);
  };
  const ov = (h) => {
    const o = $("#zgov");
    o && ((o.innerHTML = h), (o.hidden = !h));
  };
  const hud = () => {
    const a = $("#zglv"),
      b = $("#zgsc"),
      c = $("#zglf");
    a && (a.textContent = S.rk ? "Rank" : "Niveau " + S.level);
    b && (b.textContent = String(S.score).padStart(6, "0"));
    c &&
      (c.innerHTML = [...Array(Math.max(3, S.lives)).keys()]
        .map((i) => `<i class="${i < S.lives ? "on" : ""}"></i>`)
        .join(""));
  };
  /* ---- sprites pixel ---- */
  const SP = {
    m: ["..11111..", ".1111111.", "113111311", "111111111", ".1111111.", ".1.1.1.1.", "1..1.1..1"],
    c: ["22.....22", "2.2...2.2", ".1111111.", "113111311", "111111111", ".1.1.1.1.", "1.......1"],
    l: ["......2..", ".....2.2.", ".11111...", "1131111.1", "111111111", "1111111.1", ".11111..."],
    o: ["1...1...1", ".1.111.1.", "..11111..", "111313111", "..11111..", ".1.111.1.", "1...1...1"],
    p: ["..1.1.1..", ".1111111.", "113111311", "111111111", "111222111", ".1111111.", "..1.1.1.."],
    s: ["...111...", "..11111..", ".1131311.", ".1111111.", "..11111..", ".2.2.2.2.", ".2.2.2.2."],
    t: ["..22222..", ".2212122.", "221222122", "222222222", "1.22222.1", "11.....11"],
    e: ["..2......", ".111..2..", "1131.11..", "11111111.", ".11.1111.", "......2.."],
    y: ["....1....", "....1....", ".1113111.", "..11111..", "..11111..", ".11...11.", ".1.....1."],
    r: ["1.......1", "11.....11", "111111111", ".1131311.", "..11111..", "....2....", "....2...."],
    $: ["..111.....", ".11111.1..", "1131111111", ".11111.1..", "..111....."],
    K: [
      "...11111...",
      "..1111111..",
      ".111111111.",
      ".113111311.",
      ".113111311.",
      ".111111111.",
      "..1111111..",
      ".2.2.2.2.2.",
      "2..2.2.2..2",
      "2.2..2..2.2",
    ],
    Q: [
      "..2.2.2.2..",
      "..2222222..",
      ".111111111.",
      ".113111311.",
      ".111111111.",
      "11111111111",
      "1.1111111.1",
      "1..11111..1",
      "...1...1...",
    ],
  };
  const CL = {
    m: ["#ff6ec7", "#ffd0ee"],
    c: ["#ff9f43", "#ffd27a"],
    l: ["#54a0ff", "#fff27a"],
    o: ["#a55eea", "#d8b4ff"],
    p: ["#feca57", "#ff6b6b"],
    s: ["#1dd1a1", "#9fffe0"],
    t: ["#b8ffcf", "#2ed573"],
    e: ["#f9f871", "#00e5ff"],
    y: ["#ff6b6b", "#ffc2c2"],
    r: ["#48dbfb", "#b5f3ff"],
    $: ["#ffd32a", "#fff3a0"],
    g: ["#c56cf0", "#f0d0ff"],
    n: ["#7efff5", "#fff"],
    K: ["#ff4d8d", "#ff9cc0"],
    Q: ["#ff9f1a", "#ffe27a"],
  };
  const SC = { g: 1.55, n: 0.62, K: 2.3, Q: 2.3, r: 1.15 },
    CA = {};
  window.ZGSPR = (k) => spr(k);
  function spr(k) {
    if (CA[k]) return CA[k];
    const R = SP[k] || SP.m,
      col = CL[k],
      px = 3 * (SC[k] || 1),
      w = R[0].length * px + 20,
      h = R.length * px + 20,
      cv = document.createElement("canvas");
    cv.width = w * 2;
    cv.height = h * 2;
    const c = cv.getContext("2d");
    c.scale(2, 2);
    c.shadowColor = col[0];
    c.shadowBlur = 7;
    R.forEach((row, y) =>
      [...row].forEach((ch, x) => {
        if (ch === ".") return;
        c.fillStyle = ch === "1" ? col[0] : ch === "2" ? col[1] : "#fff";
        c.fillRect(10 + x * px, 10 + y * px, px + 0.4, px + 0.4);
      }),
    );
    cv.w = w;
    cv.h = h;
    return (CA[k] = cv);
  }
  let PKg = 1;
  function size() {
    CV = $("#zgc");
    if (!CV) return;
    PKg = window.PCK ? PCK() : 1;
    H = Math.max(360, Math.round(((innerHeight || 700) - 86) / PKg));
    W = Math.min(Math.floor((app.clientWidth || innerWidth) / PKg), PKg > 1 ? 520 : 560);
    ZY = H - 46;
    const d = Math.min(2, devicePixelRatio || 1) * PKg;
    CV.width = W * d;
    CV.height = H * d;
    CV.style.width = W * PKg + "px";
    CV.style.height = H * PKg + "px";
    CX = CV.getContext("2d");
    CX.setTransform(d, 0, 0, d, 0, 0);
    BG = document.createElement("canvas");
    BG.width = W * d;
    BG.height = H * d;
    const c = BG.getContext("2d");
    c.scale(d, d);
    const g = c.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#050a24");
    g.addColorStop(0.6, "#07163a");
    g.addColorStop(1, "#0a0420");
    c.fillStyle = g;
    c.fillRect(0, 0, W, H);
    const hz = H - 20;
    c.strokeStyle = "rgba(255,79,216,.35)";
    c.lineWidth = 1;
    for (let i = -8; i <= 8; i++) {
      c.beginPath();
      c.moveTo(W / 2 + i * 16, hz);
      c.lineTo(W / 2 + i * 70, H);
      c.stroke();
    }
    [0, 5, 12, 20].forEach((o) => {
      c.beginPath();
      c.moveTo(0, hz + o);
      c.lineTo(W, hz + o);
      c.stroke();
    });
    c.shadowColor = "#ff4fd8";
    c.shadowBlur = 12;
    c.strokeStyle = "#ff4fd8";
    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(0, hz);
    c.lineTo(W, hz);
    c.stroke();
  }
  const NEW = {
    2: "Crabes : carapace, 2 bulles",
    3: "Lanternes à encre · raies de passage",
    4: "Oursins plongeurs · rochers",
    6: "Poissons-globes explosifs · mines",
    7: "Tortues : attends que la carapace s’ouvre",
    8: "Seiches : nuage d’encre · tourbillons",
    9: "Méduses géantes : elles se divisent",
    11: "Anguilles : rayon électrique",
    12: "Étoiles : tir en éventail",
  };
  const PTS = {
      m: 10,
      c: 20,
      l: 30,
      o: 40,
      p: 50,
      s: 40,
      t: 60,
      e: 70,
      y: 50,
      g: 60,
      n: 15,
      r: 80,
      $: 150,
      K: 800,
      Q: 1000,
    },
    HP = { m: 1, c: 2, l: 1, o: 1, p: 3, s: 2, t: 2, e: 2, y: 1, g: 3 };
  const UNL = [
    ["c", 2],
    ["l", 3],
    ["o", 4],
    ["p", 6],
    ["t", 7],
    ["s", 8],
    ["g", 9],
    ["e", 11],
    ["y", 12],
  ];
  const BN = {
      d: ["DOUBLE", "2×", "#7ef0ff"],
      t: ["TRIPLE", "3×", "#7ef0ff"],
      r: ["RAPIDE", "»", "#7ef0ff"],
      p: ["PERFORANT", "↑", "#7ef0ff"],
      s: ["BOUCLIER", "◍", "#7dffb0"],
      f: ["GEL", "❄", "#b5d8ff"],
      n: ["BOMBE", "✹", "#ff9f43"],
      c: ["CORAIL", "♣", "#ff7ab8"],
      x: ["SCORE ×2", "×2", "#ffd32a"],
      b: ["+100", "★", "#fff3a0"],
      l: ["+1 VIE", "♥", "#ff6b8a"],
    },
    BW = "ddttrrppssffnnccxxbbbl";
  const isB = (e) => e.k === "K" || e.k === "Q";
  function start(rk) {
    stop();
    cur = ID;
    const nb = $("#nav");
    nb && (nb.hidden = !0);
    app.innerHTML = `<div class="zrg zgg"><div class="zrtp"><button class="back" data-a="zgQ">‹ Retour</button><div class="zrti"><b id="zglv"></b><small id="zgsc"></small></div><div class="zrlf" id="zglf"></div></div><div class="zrbox zgbox" style="touch-action:none"><canvas id="zgc" aria-label="${NAME}"></canvas><div class="zrov" id="zgov"></div></div></div>`;
    size();
    S = {
      rk,
      level: rk ? 1 : Math.max(1, st.get("zg:lv", 1)),
      z: { x: W / 2, inv: 0 },
      tx: W / 2,
      E: [],
      Sh: [],
      D: [],
      P: [],
      C: [],
      R: [],
      M: [],
      WH: [],
      I: [],
      PT: [],
      FX: [],
      score: 0,
      lives: 3,
      cd: 0,
      wp: "",
      wt: 0,
      shd: 0,
      frz: 0,
      x2: 0,
      shk: 0,
      t: 0,
      ft: 0,
      fy: 0,
      done: 0,
      state: "ready",
      amb: [...Array(40)].map(() => ({
        x: Math.random(),
        y: Math.random(),
        v: 0.008 + Math.random() * 0.03,
        c: ["#7ef0ff", "#ff8ae0", "#fff"][Math.floor(Math.random() * 3)],
      })),
    };
    level(1);
    hud();
    bind();
    LT = 0;
    RAF = requestAnimationFrame(loop);
  }
  function level(f, keep) {
    const n = S.level,
      boss = n % 5 === 0;
    keep || (S.E = []);
    S.Sh = [];
    S.D = [];
    keep || (S.P = []);
    S.R = [];
    S.M = [];
    S.WH = [];
    S.I = [];
    S.ft = 0;
    S.fy = 0;
    S.frz = 0;
    S.rt = 10 + Math.random() * 6;
    S.gt = 12 + Math.random() * 8;
    S.mt = 5;
    const pool = ["m"];
    UNL.forEach(([k, l]) => n >= l && pool.push(k));
    const cols = 6,
      rows = boss ? 2 : S.rk ? Math.min(6, 3 + Math.floor(n / 2)) : Math.min(5, 2 + Math.floor(n / 2));
    S.sx = Math.min(54, (W - 70) / cols);
    S.amp = Math.max(8, (W - (cols - 1) * S.sx - 44) / 2);
    let last = "";
    for (let r = 0; r < rows; r++) {
      let k = "m";
      if (!boss && !(r === rows - 1 && n < 8)) {
        const nw = pool[pool.length - 1];
        k = r === 0 && NEW[n] && pool.length > 1 ? nw : pool[Math.floor(Math.random() * pool.length)];
        k === last && (k = pool[Math.floor(Math.random() * pool.length)]);
      }
      last = k;
      for (let q = 0; q < cols; q++)
        S.E.push({
          rx: 30 + Math.random() * (W - 60),
          rv: S.rk && Math.random() < 0.3 ? (26 + Math.min(30, n)) * (0.7 + Math.random() * 0.7) : 0,
          dl: S.t + Math.random() * 2,
          k,
          q,
          r,
          hp: HP[k] + (S.rk && n >= 15 ? 1 + Math.floor((n - 15) / 10) : 0),
          x: W / 2,
          y: -40,
          st: 0,
          cd: 1 + Math.random() * 3.5,
          ph: Math.random() * 6,
          bm: 0,
        });
    }
    if (boss) {
      const k = n % 10 === 0 ? "Q" : "K",
        hp = 18 + n * 2;
      S.E.push({ k, hp, mx: hp, x: W / 2, y: 74, vx: k === "Q" ? 85 : 60, cd: 2, cs: 4, ph: 0, bm: 0 });
    }
    S.tot = S.E.length;
    S.C = [...Array(3)].map((_, i) => {
      const o = keep && S.C.find((c) => Math.abs(c.x - (W * (i + 1)) / 4) < 5);
      return { x: (W * (i + 1)) / 4, y: ZY - 74, hp: o ? Math.min(5, o.hp + 2) : 5 };
    });
    if (n >= 4)
      for (let i = 0; i < Math.min(3, 1 + Math.floor(n / 6)); i++)
        S.R.push({
          x: Math.random() * W,
          y: ZY - 150 - i * 60,
          vx: (i % 2 ? -1 : 1) * (28 + Math.min(40, n)),
          r: 15,
        });
    if (n >= 8 && !boss)
      for (let i = 0; i < (n >= 14 ? 2 : 1); i++)
        S.WH.push({
          x: W * (i ? 0.72 : 0.28) + Math.random() * 30,
          y: ZY - 230 + i * 50,
          r: 44,
          d: i ? -1 : 1,
        });
    if (keep) {
      S.state = "play";
      S.FX.push({
        x: W / 2,
        y: H * 0.4,
        r: 0,
        t: 0,
        txt: "Vague " + n + (boss ? " · Boss" : NEW[n] ? " · " + NEW[n].split(" · ")[0] : ""),
      });
      hud();
      return;
    }
    S.state = f ? "ready" : "trans";
    S.tr = 2.2;
    ov(
      `<div class="zrot"><small>${S.rk ? "Mode Rank · partie sans fin · 3 vies" : "Niveaux sans fin"}</small><b>${S.rk ? "Rank" : "Niveau " + n}</b><span>${boss ? "⚠ Boss : " + (n % 10 === 0 ? "le crabe royal" : "le calmar géant") : NEW[n] ? "⚠ " + NEW[n] : "Vide le banc avant qu’il n’atteigne le fond"}</span>${f ? "<span>Glisse le doigt pour déplacer Zeni</span>" : ""}</div>`,
    );
    hud();
  }
  const add = (p) => {
    S.score += p * (S.x2 > 0 ? 2 : 1);
  };
  const boom = (x, y, c, n) => {
    for (let i = 0; i < (n || 7); i++) {
      const a = Math.random() * 6.28,
        v = 40 + Math.random() * 130;
      S.PT.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, l: 0.4 + Math.random() * 0.35, c });
    }
  };
  function hurt() {
    const z = S.z;
    if (z.inv > 0 || S.state !== "play") return;
    if (S.shd) {
      S.shd = 0;
      z.inv = 1;
      try {
        sfx(500, 0.1);
      } catch (e) {}
      return;
    }
    S.lives--;
    z.inv = 2;
    S.shk = 0.35;
    S.wp = "";
    boom(z.x, ZY, "#fff", 12);
    hud();
    try {
      sfx(240, 0.3);
      vib && vib(40);
    } catch (e) {}
    S.lives <= 0 && over();
  }
  const pearl = (x, y, k) => S.P.push({ x, y, k: k || BW[Math.floor(Math.random() * BW.length)] });
  function dmg(e, d, chain) {
    if (!S.E.includes(e)) return;
    if (e.k === "t" && e.sh && !chain) {
      try {
        sfx(1500, 0.02);
      } catch (x) {}
      S.FX.push({ x: e.x, y: e.y, r: 12, t: 0, c: "#b8ffcf" });
      return;
    }
    e.hp -= d;
    e.hit = 0.12;
    if (e.k === "s" && !e.ik) {
      e.ik = 1;
      S.I.push({ x: e.x, y: Math.min(ZY - 170, e.y + 80), r: 56, l: 6 });
    }
    if (e.hp > 0) {
      try {
        sfx(480, 0.03);
      } catch (x) {}
      return;
    }
    kill(e, chain);
  }
  function kill(e, chain) {
    const i = S.E.indexOf(e);
    if (i < 0) return;
    S.E.splice(i, 1);
    const p = PTS[e.k];
    add(p);
    boom(e.x, e.y, CL[e.k][0], isB(e) ? 40 : 8);
    S.FX.push({ x: e.x, y: e.y, r: 0, t: 0, txt: "" + p * (S.x2 > 0 ? 2 : 1), s: 1 });
    if (e.k === "p" && !chain) {
      S.FX.push({ x: e.x, y: e.y, r: 46, t: 0, c: "#feca57" });
      S.E.filter((o) => !isB(o) && Math.hypot(o.x - e.x, o.y - e.y) < S.sx * 1.25).forEach((o) =>
        dmg(o, 3, 1),
      );
    }
    if (e.k === "g")
      [-1, 1].forEach((d) =>
        S.E.push({ k: "n", free: 1, hp: 1, x: e.x + d * 12, y: e.y, ph: Math.random() * 6, bm: 0 }),
      );
    if (isB(e)) {
      S.lives = Math.min(5, S.lives + 1);
      S.shk = 0.5;
      S.E.forEach((o) => boom(o.x, o.y, CL[o.k][0], 5));
      S.E = [];
      S.D = [];
      [-30, 0, 30].forEach((d) => pearl(e.x + d, e.y));
    } else if (e.k === "$") pearl(e.x, e.y);
    else Math.random() < 0.13 && pearl(e.x, e.y);
    try {
      sfx(chain ? 520 : 680, 0.05);
    } catch (x) {}
    hud();
  }
  function explode(m) {
    const i = S.M.indexOf(m);
    if (i < 0) return;
    S.M.splice(i, 1);
    S.FX.push({ x: m.x, y: m.y, r: 60, t: 0, c: "#ff9f43" });
    boom(m.x, m.y, "#ff9f43", 16);
    S.shk = 0.2;
    try {
      sfx(140, 0.25);
    } catch (e) {}
    S.E.filter((o) => Math.hypot(o.x - m.x, o.y - m.y) < 64).forEach((o) => dmg(o, 2, 1));
    S.D = S.D.filter((d) => Math.hypot(d.x - m.x, d.y - m.y) > 64);
    Math.abs(S.z.x - m.x) < 42 && Math.abs(ZY - m.y) < 42 && hurt();
  }
  function take(k) {
    const z = S.z;
    if ("dtrp".includes(k)) {
      S.wp = k;
      S.wt = 9;
    } else if (k === "s") S.shd = 1;
    else if (k === "f") S.frz = 4;
    else if (k === "n") {
      S.D = [];
      S.shk = 0.3;
      S.FX.push({ x: W / 2, y: H / 2, r: W * 0.7, t: 0, c: "#ff9f43" });
      S.E.slice().forEach((o) => dmg(o, isB(o) ? 5 : 1, 1));
    } else if (k === "c") S.C.forEach((c) => (c.hp = 5));
    else if (k === "x") S.x2 = 10;
    else if (k === "b") add(100);
    else S.lives = Math.min(5, S.lives + 1);
    S.FX.push({ x: z.x, y: ZY - 40, r: 0, t: 0, txt: BN[k][0] });
    try {
      sfx(1200, 0.1);
      k === "n" && sfx(120, 0.3);
    } catch (e) {}
    hud();
  }
  function step(dt) {
    const z = S.z,
      n = S.level;
    S.t += dt;
    z.inv > 0 && (z.inv -= dt);
    S.shk > 0 && (S.shk -= dt);
    S.x2 > 0 && (S.x2 -= dt);
    S.wt > 0 && (S.wt -= dt) <= 0 && (S.wp = "");
    const fz = S.frz > 0;
    fz && (S.frz -= dt);
    const et = fz ? 0 : dt;
    const dx = S.tx - z.x;
    z.x += Math.sign(dx) * Math.min(Math.abs(dx), 340 * dt);
    z.x = Math.max(18, Math.min(W - 18, z.x));
    S.cd -= dt;
    if (S.cd <= 0) {
      const w = S.wp;
      S.cd = w === "r" ? 0.17 : 0.36;
      (w === "d"
        ? [
            [-9, 0],
            [9, 0],
          ]
        : w === "t"
          ? [
              [0, -110],
              [0, 0],
              [0, 110],
            ]
          : [[0, 0]]
      ).forEach(([o, vx]) => S.Sh.push({ x: z.x + o, y: ZY - 22, vx, pc: w === "p" ? 3 : 1, hs: [] }));
      try {
        sfx(900, 0.015);
      } catch (e) {}
    }
    const boss = S.E.some(isB),
      form = S.E.filter((e) => !e.free && !isB(e)),
      al = form.length / Math.max(1, S.tot);
    S.ft += et * (0.7 + (1 - al) * 0.9);
    S.fy += et * (3 + Math.min(S.rk ? 16 : 9, n * 0.3)) * (1 + (1 - al) * 1.6);
    const ox = Math.sin(S.ft) * S.amp,
      drop = (x, y, vx, vy) => S.D.push({ x, y, vx, vy });
    if (!fz) {
      if (n >= 3 && !boss && (S.rt -= dt) <= 0) {
        S.rt = 13 + Math.random() * 9;
        const d = Math.random() < 0.5 ? 1 : -1;
        S.E.push({
          k: "r",
          free: 1,
          hp: 2,
          x: d > 0 ? -24 : W + 24,
          y: ZY - 150 - Math.random() * 70,
          vx: d * (70 + Math.min(60, n * 2)),
          cd: 0.8,
          ph: 0,
          bm: 0,
        });
      }
      if ((S.gt -= dt) <= 0) {
        S.gt = 17 + Math.random() * 9;
        const d = Math.random() < 0.5 ? 1 : -1;
        S.E.push({ k: "$", free: 1, hp: 1, x: d > 0 ? -24 : W + 24, y: 30, vx: d * 125, ph: 0, bm: 0 });
      }
      if (n >= 6 && (S.mt -= dt) <= 0) {
        S.mt = Math.max(4, 9 - n * 0.15) + Math.random() * 3;
        S.M.length < 3 && S.M.push({ x: 30 + Math.random() * (W - 60), y: -14, ph: Math.random() * 6 });
      }
    }
    !fz &&
      S.E.slice().forEach((e) => {
        if (e.bm > 0) {
          e.bm -= dt;
          if (e.bm < 0.45) {
            const c = S.C.find((c) => c.hp > 0 && Math.abs(c.x - e.x) < 24);
            if (c) {
              e.bc || ((e.bc = 1), (c.hp -= 2), boom(c.x, c.y, "#ff7ab8", 6));
            } else Math.abs(z.x - e.x) < 12 && hurt();
          }
        }
        if (isB(e)) {
          e.x += e.vx * dt;
          if (e.x < 50) {
            e.x = 50;
            e.vx = Math.abs(e.vx);
          }
          if (e.x > W - 50) {
            e.x = W - 50;
            e.vx = -Math.abs(e.vx);
          }
          e.y = 74 + Math.sin(S.t) * 14;
          e.cd -= dt;
          e.cs -= dt;
          if (e.cd <= 0) {
            e.cd = Math.max(1.2, 2.4 - n * 0.03);
            if (e.k === "Q") {
              e.bm = 1.3;
              e.bc = 0;
            } else [-0.3, 0, 0.3].forEach((a) => drop(e.x, e.y + 30, Math.sin(a) * 150, Math.cos(a) * 150));
          }
          if (e.cs <= 0) {
            e.cs = e.k === "Q" ? 3.5 : 5;
            e.k === "Q"
              ? S.E.push({ k: "n", free: 1, hp: 1, x: e.x, y: e.y + 20, ph: Math.random() * 6, bm: 0 })
              : form.length < 14 &&
                S.E.push({
                  k: "m",
                  q: Math.floor(Math.random() * 6),
                  r: 2 + Math.floor(Math.random() * 2),
                  hp: 1,
                  x: e.x,
                  y: e.y,
                  st: 0,
                  cd: 9,
                  ph: 0,
                  bm: 0,
                });
          }
          return;
        }
        if (e.free) {
          if (e.k === "n") {
            e.y += (55 + Math.min(50, n)) * dt;
            e.x += Math.sin(S.t * 3 + e.ph) * 70 * dt;
            if (e.y > H + 20) return S.E.splice(S.E.indexOf(e), 1);
          } else {
            e.x += e.vx * dt;
            if (e.k === "r" && (e.cd -= dt) <= 0) {
              e.cd = 0.75;
              drop(e.x, e.y + 8, 0, 150);
            }
            if (e.x < -40 || e.x > W + 40) return S.E.splice(S.E.indexOf(e), 1);
          }
          if (Math.abs(e.x - z.x) < 20 && Math.abs(e.y - ZY) < 22) {
            hurt();
            S.E.splice(S.E.indexOf(e), 1);
          }
          return;
        }
        const rkm = e.rv > 0,
          sx = rkm
            ? e.rx + Math.sin(S.t * 0.9 + e.ph) * (12 + Math.min(30, n))
            : W / 2 + (e.q - 2.5) * S.sx + ox,
          sy = rkm
            ? (S.t < e.dl ? -60 : -30 + (S.t - e.dl) * e.rv) + Math.sin(S.t * 2 + e.ph) * 3
            : 58 + e.r * 38 + S.fy + Math.sin(S.t * 2 + e.ph) * 3;
        rkm && S.t < e.dl && (e.cd = Math.max(e.cd, 1.5));
        e.k === "t" && (e.sh = Math.sin(S.t * 1.3 + e.ph) > 0.15);
        if (e.st === 0) {
          e.x += (sx - e.x) * Math.min(1, dt * 6);
          e.y += (sy - e.y) * Math.min(1, dt * 6);
          e.cd -= dt;
          if (e.cd <= 0) {
            const k = e.k,
              v = 130 + Math.min(90, n * 3);
            if (k === "l") {
              e.cd = Math.max(1.6, 3 + Math.random() * 3 - n * 0.05);
              drop(e.x, e.y + 10, 0, v);
            } else if (k === "y") {
              e.cd = 4 + Math.random() * 3;
              [-0.35, 0, 0.35].forEach((a) => drop(e.x, e.y + 10, Math.sin(a) * v, Math.cos(a) * v));
            } else if (k === "e") {
              e.cd = 5 + Math.random() * 4;
              e.bm = 1.3;
              e.bc = 0;
            } else if (k === "o") {
              e.cd = 5 + Math.random() * 5;
              e.st = 1;
              e.tx = z.x;
            } else e.cd = 9;
          }
        } else if (e.st === 1) {
          const a = Math.atan2(H + 40 - e.y, e.tx - e.x);
          e.x += Math.cos(a) * 230 * dt;
          e.y += Math.sin(a) * 230 * dt;
          if (e.y > H + 20) {
            e.y = -20;
            e.st = 2;
          }
        } else {
          const d = Math.hypot(sx - e.x, sy - e.y);
          if (d < 8) e.st = 0;
          else {
            e.x += ((sx - e.x) / d) * 220 * dt;
            e.y += ((sy - e.y) / d) * 220 * dt;
          }
        }
        if (Math.abs(e.x - z.x) < 22 && Math.abs(e.y - ZY) < 24) {
          hurt();
          e.st === 1 && (e.y = H + 30);
        }
        S.C.forEach((c) => {
          if (c.hp > 0 && !e.cc && Math.abs(e.x - c.x) < 28 && Math.abs(e.y - c.y) < 18) {
            e.cc = 1;
            c.hp -= e.st ? 2 : 5;
            boom(c.x, c.y, "#ff7ab8", 6);
          }
        });
        e.st || (e.cc = 0);
        if (e.st === 0 && sy > ZY - 34) {
          hurt();
          if (rkm) {
            e.dl = S.t + 1 + Math.random() * 3;
            e.rx = 30 + Math.random() * (W - 60);
            e.y = -60;
          } else S.fy = Math.max(0, S.fy - 150);
        }
      });
    S.R.forEach((r) => {
      r.x += r.vx * dt;
      r.x < -20 && (r.x = W + 20);
      r.x > W + 20 && (r.x = -20);
    });
    S.M.slice().forEach((m) => {
      m.y += (fz ? 8 : 28) * dt;
      m.x += Math.sin(S.t * 1.5 + m.ph) * 18 * dt;
      if (Math.abs(m.x - z.x) < 22 && Math.abs(m.y - ZY) < 22) explode(m);
      else m.y > H + 20 && S.M.splice(S.M.indexOf(m), 1);
    });
    S.I = S.I.filter((i) => {
      i.y += 10 * dt;
      return (i.l -= dt) > 0;
    });
    const blk = (x, y) => {
      for (const c of S.C)
        if (c.hp > 0 && Math.abs(x - c.x) < 24 && Math.abs(y - c.y) < 12) {
          c.hp--;
          boom(x, y, "#ff7ab8", 3);
          return !0;
        }
      return S.R.some((r) => Math.hypot(x - r.x, y - r.y) < r.r + 2);
    };
    S.Sh = S.Sh.filter((s) => {
      S.WH.forEach((w) => {
        Math.hypot(s.x - w.x, s.y - w.y) < w.r && (s.vx += w.d * 620 * dt);
      });
      s.x += s.vx * dt;
      s.y -= 430 * dt;
      if (s.y < -10 || s.x < -10 || s.x > W + 10 || blk(s.x, s.y)) return !1;
      for (const m of S.M)
        if (Math.hypot(m.x - s.x, m.y - s.y) < 13) {
          explode(m);
          return !1;
        }
      for (const e of S.E) {
        if (s.hs.includes(e)) continue;
        const b = isB(e),
          rx = b ? 40 : e.k === "g" ? 22 : 15;
        if (Math.abs(e.x - s.x) < rx && Math.abs(e.y - s.y) < (b ? 30 : rx - 1)) {
          dmg(e, 1);
          if (--s.pc <= 0) return !1;
          s.hs.push(e);
        }
      }
      for (let i = S.D.length - 1; i >= 0; i--)
        if (Math.hypot(S.D[i].x - s.x, S.D[i].y - s.y) < 9) {
          boom(s.x, s.y, "#ff4fd8", 3);
          S.D.splice(i, 1);
          add(5);
          return s.pc > 1;
        }
      return !0;
    });
    S.D = S.D.filter((d) => {
      const k = fz ? 0.25 : 1;
      d.x += d.vx * dt * k;
      d.y += d.vy * dt * k;
      if (d.y > H + 10 || d.x < -10 || d.x > W + 10 || blk(d.x, d.y)) return !1;
      if (Math.abs(d.x - z.x) < 13 && Math.abs(d.y - ZY) < 17) {
        hurt();
        return !1;
      }
      return !0;
    });
    S.P = S.P.filter((p) => {
      p.y += 95 * dt;
      if (Math.abs(p.x - z.x) < 26 && Math.abs(p.y - ZY) < 26) {
        take(p.k);
        return !1;
      }
      return p.y < H + 10;
    });
    S.PT = S.PT.filter((p) => {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += 160 * dt;
      return (p.l -= dt) > 0;
    });
    S.E.forEach((e) => e.hit > 0 && (e.hit -= dt));
    S.FX = S.FX.filter((f) => (f.t += dt) < (f.txt ? 0.9 : 0.4));
    S.rk && S.state === "play" && rkTick(dt);
    if (S.state === "play" && !S.rk && !S.E.some((e) => !e.free)) {
      add(50 * n);
      S.done++;
      try {
        [660, 880, 1320].forEach((f, i) => setTimeout(() => sfx(f, 0.15), i * 90));
      } catch (e) {}
      S.level++;
      if (!S.rk) {
        st.set("zg:lv", S.level);
        S.level - 1 > st.get("zg:best", 0) && st.set("zg:best", S.level - 1);
      }
      level(0, S.rk);
    }
  }
  function rkTick(dt) {
    S.sp = (S.sp || 0) - dt;
    S.lt = (S.lt || 0) + dt;
    if (S.lt >= 22) {
      S.lt = 0;
      S.level++;
      S.done++;
      add(50 * S.level);
      try {
        [660, 880, 1320].forEach((f, i) => setTimeout(() => sfx(f, 0.15), i * 90));
      } catch (e) {}
      S.C.forEach((c) => (c.hp = Math.min(5, c.hp + 1)));
    }
    const n = S.level,
      act = S.E.filter((e) => !e.free && !isB(e)).length,
      cap = Math.min(30, 10 + Math.floor(n * 1.5));
    S.tot = Math.max(10, act);
    const mk = (r, q, dv) => {
      const pool = ["m"];
      UNL.forEach(([k, l]) => n >= l && pool.push(k));
      const k =
        Math.random() < 0.4 && pool.length > 1
          ? pool[pool.length - 1 - Math.floor(Math.random() * Math.min(3, pool.length - 1))]
          : pool[Math.floor(Math.random() * pool.length)];
      S.E.push({
        rx: 30 + Math.random() * (W - 60),
        rv: dv ? (26 + Math.min(30, n)) * (0.7 + Math.random() * 0.7) : 0,
        dl: S.t + Math.random() * 2,
        k,
        q,
        r: r - S.fy / 38,
        hp: HP[k] + (n >= 15 ? 1 + Math.floor((n - 15) / 10) : 0),
        x: W / 2,
        y: -40,
        st: 0,
        cd: 1 + Math.random() * 3,
        ph: Math.random() * 6,
        bm: 0,
      });
    };
    if (S.wvp) {
      if (act <= S.thr) {
        S.wvp = 0;
        S.sp = 2.5;
        const c = Math.min(14, 5 + Math.floor(n / 3) + Math.floor(Math.random() * 4)),
          r0 = Math.random() * 1.2;
        for (let i = 0; i < c; i++) mk(r0 + Math.floor(i / 6), i % 6, 0);
        S.FX.push({ x: W / 2, y: H * 0.4, r: 0, t: 0, txt: "Vague !" });
      }
      return;
    }
    if (S.sp > 0) return;
    if (act < 5) {
      mk(Math.random() * 2.5, Math.floor(Math.random() * 6), Math.random() < 0.3);
      S.sp = 0.4;
      return;
    }
    if (act < cap) {
      mk(Math.random() * 2.5, Math.floor(Math.random() * 6), Math.random() < 0.3);
      S.sp = Math.max(0.8, 3.2 - n * 0.08) * (0.6 + Math.random() * 0.8);
      if (Math.random() < 0.12) {
        S.wvp = 1;
        S.thr = 2 + Math.floor(Math.random() * 3);
      }
    } else S.sp = 1;
  }
  function over() {
    S.state = "over";
    const K = S.rk ? "zg:rkb" : "zg:sb",
      b = st.get(K, 0),
      rec = S.score > b;
    rec && st.set(K, S.score);
    if (S.rk)
      try {
        infSave(ID, S.score);
      } catch (e) {}
    let g = 0;
    try {
      g = dmR(ID, Math.min(10, S.done));
      g && scrGain(g);
    } catch (e) {}
    ov(
      `<div class="zrot lose"><small>${S.rk ? "Mode Rank · " + Math.floor(S.t) + " s" : "Niveau " + S.level}</small><b>${S.score} pts</b><span>${rec ? "Nouveau record !" : "Record : " + b + " pts"}${g ? " · +" + g + " 🫧" : ""}</span><div class="zrob"><button class="zrbig" data-a="${S.rk ? "zgRk" : "zgGo"}">${S.rk ? "Rejouer" : "Réessayer le niveau " + S.level}</button>${S.rk ? `<button class="zrpill" data-a="infBd" data-v="${ID}">Classement</button>` : ""}<button class="zrpill" data-a="zgQ">Retour</button></div></div>`,
    );
  }
  const MONO = "ui-monospace,Menlo,Consolas,monospace";
  function draw(t) {
    const c = CX;
    if (!c || !BG) return;
    c.save();
    S.shk > 0 && c.translate((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8);
    c.drawImage(BG, 0, 0, W, H);
    S.amb.forEach((p) => {
      p.y -= p.v * 0.016;
      p.y < 0 && (p.y = 1);
      c.globalAlpha = 0.35 + 0.35 * Math.sin(t / 400 + p.x * 40);
      c.fillStyle = p.c;
      c.fillRect(p.x * W, p.y * (H - 24), 2, 2);
    });
    c.globalAlpha = 1;
    S.WH.forEach((w) => {
      c.strokeStyle = "rgba(126,240,255,.55)";
      c.lineWidth = 2;
      for (let i = 0; i < 3; i++) {
        const a = (t / 300) * w.d + i * 2.1;
        c.beginPath();
        c.arc(w.x, w.y, w.r * (0.35 + i * 0.3), a, a + 2.2);
        c.stroke();
      }
    });
    S.C.forEach((k) => {
      if (k.hp <= 0) return;
      c.globalAlpha = 0.4 + k.hp * 0.12;
      c.shadowColor = "#ff4fd8";
      c.shadowBlur = 10;
      c.fillStyle = "#ff7ab8";
      [
        [-20, 10],
        [-12, 18],
        [-4, 13],
        [4, 20],
        [12, 14],
      ].forEach(([x, h]) => c.fillRect(k.x + x, k.y + 10 - h, 7, h));
      c.fillStyle = "#ffd0ee";
      c.fillRect(k.x - 22, k.y + 8, 44, 4);
      c.shadowBlur = 0;
      c.globalAlpha = 1;
    });
    S.R.forEach((r) => {
      c.fillStyle = "#101a3a";
      c.strokeStyle = "#7ea6ff";
      c.lineWidth = 2;
      c.shadowColor = "#7ea6ff";
      c.shadowBlur = 8;
      c.beginPath();
      for (let i = 0; i < 7; i++) {
        const a = i * 0.898,
          q = r.r * (0.85 + 0.25 * Math.sin(i * 2.7));
        c.lineTo(r.x + Math.cos(a) * q * 1.15, r.y + Math.sin(a) * q * 0.85);
      }
      c.closePath();
      c.fill();
      c.stroke();
      c.shadowBlur = 0;
    });
    S.M.forEach((m) => {
      c.strokeStyle = "#ff9f43";
      c.lineWidth = 2;
      for (let i = 0; i < 8; i++) {
        const a = i * 0.785 + t / 900;
        c.beginPath();
        c.moveTo(m.x + Math.cos(a) * 8, m.y + Math.sin(a) * 8);
        c.lineTo(m.x + Math.cos(a) * 13, m.y + Math.sin(a) * 13);
        c.stroke();
      }
      c.fillStyle = "#1a1030";
      c.beginPath();
      c.arc(m.x, m.y, 9, 0, 7);
      c.fill();
      c.stroke();
      c.fillStyle = Math.floor(t / 250) % 2 ? "#ff3b3b" : "#7a1010";
      c.fillRect(m.x - 2, m.y - 2, 4, 4);
    });
    S.E.forEach((e) => {
      if (e.bm > 0) {
        const cr = S.C.find((q) => q.hp > 0 && Math.abs(q.x - e.x) < 24),
          y1 = cr ? cr.y : H;
        if (e.bm < 0.45) {
          c.shadowColor = "#00e5ff";
          c.shadowBlur = 14;
          c.fillStyle = "#eaffff";
          c.fillRect(e.x - 4, e.y + 8, 8, y1 - e.y - 8);
          c.shadowBlur = 0;
        } else {
          c.strokeStyle = "rgba(249,248,113," + (0.3 + 0.4 * (Math.floor(t / 70) % 2)) + ")";
          c.lineWidth = 1.5;
          c.setLineDash([5, 6]);
          c.beginPath();
          c.moveTo(e.x, e.y + 8);
          c.lineTo(e.x, y1);
          c.stroke();
          c.setLineDash([]);
        }
      }
      const s = spr(e.k),
        b = 1 + 0.05 * Math.sin(t / 160 + (e.ph || 0) * 3);
      c.globalAlpha = e.hit > 0 ? 0.5 : 1;
      S.frz > 0 && (c.globalAlpha *= 0.75);
      const fl = e.vx < 0 && (e.k === "$" || e.k === "r") ? -1 : 1;
      c.save();
      c.translate(e.x, e.y);
      c.scale(fl, 1);
      e.st === 1 && c.rotate(t / 90);
      c.drawImage(s, -s.w / 2, (-s.h * b) / 2, s.w, s.h * b);
      c.restore();
      c.globalAlpha = 1;
      if (e.k === "t" && e.sh) {
        c.strokeStyle = "#b8ffcf";
        c.lineWidth = 2;
        c.beginPath();
        c.arc(e.x, e.y, 17, 0, 7);
        c.stroke();
      }
      if (isB(e)) {
        c.fillStyle = "rgba(255,255,255,.15)";
        c.fillRect(W * 0.2, 10, W * 0.6, 6);
        c.fillStyle = CL[e.k][0];
        c.fillRect(W * 0.2, 10, (W * 0.6 * Math.max(0, e.hp)) / e.mx, 6);
      }
    });
    c.shadowColor = "#ff4fd8";
    c.shadowBlur = 8;
    c.fillStyle = "#ff8ae0";
    S.D.forEach((d) => {
      c.fillRect(d.x - 2, d.y - 6, 4, 12);
      c.fillRect(d.x - 4, d.y - 2, 8, 4);
    });
    c.shadowColor = "#22d3ee";
    c.fillStyle = "#eaffff";
    S.Sh.forEach((s) => {
      c.fillRect(s.x - 2, s.y - 7, 4, s.pc > 1 ? 18 : 12);
    });
    c.shadowBlur = 0;
    c.font = "800 10px " + MONO;
    c.textAlign = "center";
    S.P.forEach((p) => {
      const b = BN[p.k];
      c.shadowColor = b[2];
      c.shadowBlur = 10;
      c.fillStyle = "#0a0f2a";
      c.strokeStyle = b[2];
      c.lineWidth = 2;
      c.beginPath();
      c.roundRect(p.x - 11, p.y - 9, 22, 18, 5);
      c.fill();
      c.stroke();
      c.shadowBlur = 0;
      c.fillStyle = b[2];
      c.fillText(b[1], p.x, p.y + 3.5);
    });
    S.PT.forEach((p) => {
      c.globalAlpha = Math.min(1, p.l * 2.5);
      c.fillStyle = p.c;
      c.fillRect(p.x - 1.5, p.y - 1.5, 3, 3);
    });
    c.globalAlpha = 1;
    const z = S.z,
      im = zImg();
    if (!(z.inv > 0 && Math.floor(t / 110) % 2)) {
      c.save();
      c.translate(z.x, ZY);
      c.shadowColor = "#22d3ee";
      c.shadowBlur = 12;
      c.fillStyle = "#22d3ee";
      c.fillRect(-18, 10, 36, 6);
      c.fillRect(-12, 5, 24, 5);
      c.fillRect(-2, -26, 4, 10);
      c.shadowBlur = 0;
      im.complete && im.naturalWidth
        ? ((c.imageSmoothingEnabled = !1),
          c.drawImage(zeniPx("u", S.shd), -15, -26, 30, 30),
          (c.imageSmoothingEnabled = !0))
        : ((c.fillStyle = "#fff"), c.beginPath(), c.arc(0, 0, 12, 0, 7), c.fill());
      if (S.shd) {
        c.strokeStyle = "#7dffb0";
        c.shadowColor = "#7dffb0";
        c.shadowBlur = 10;
        c.lineWidth = 2;
        c.beginPath();
        c.arc(0, -2, 26, 0, 7);
        c.stroke();
      }
      c.restore();
    }
    S.I.forEach((i) => {
      c.globalAlpha = Math.min(0.9, i.l * 0.6);
      c.fillStyle = "#12062a";
      for (let k = 0; k < 6; k++) {
        const a = k * 1.05 + t / 1400;
        c.beginPath();
        c.arc(i.x + Math.cos(a) * i.r * 0.45, i.y + Math.sin(a) * i.r * 0.35, i.r * 0.6, 0, 7);
        c.fill();
      }
      c.globalAlpha = 1;
    });
    S.FX.forEach((f) => {
      const a = f.t / (f.txt ? 0.9 : 0.4);
      c.globalAlpha = 1 - a;
      if (f.txt) {
        c.fillStyle = f.s ? "#fff3a0" : "#fff";
        c.font = "800 " + (f.s ? 11 : 15) + "px " + MONO;
        c.textAlign = "center";
        c.fillText(f.txt, Math.max(60, Math.min(W - 60, f.x)), f.y - a * 20);
      } else {
        c.strokeStyle = f.c || "#7ef0ff";
        c.lineWidth = 2;
        c.beginPath();
        c.arc(f.x, f.y, f.r * (0.4 + a), 0, 7);
        c.stroke();
      }
      c.globalAlpha = 1;
    });
    if (S.frz > 0) {
      c.fillStyle = "rgba(140,200,255,.1)";
      c.fillRect(0, 0, W, H);
    }
    const hb = [];
    S.wp && hb.push(BN[S.wp][0] + " " + Math.ceil(S.wt));
    S.x2 > 0 && hb.push("×2 " + Math.ceil(S.x2));
    S.frz > 0 && hb.push("GEL " + Math.ceil(S.frz));
    if (hb.length) {
      c.font = "800 10px " + MONO;
      c.textAlign = "left";
      c.fillStyle = "#ffd32a";
      c.shadowColor = "#ffd32a";
      c.shadowBlur = 6;
      c.fillText(hb.join("  "), 8, H - 6);
      c.shadowBlur = 0;
    }
    c.restore();
  }
  function loop(t) {
    if (!S || !$("#zgc")) return stop();
    RAF = requestAnimationFrame(loop);
    const dt = Math.min(0.05, (t - (LT || t)) / 1e3);
    LT = t;
    S.state === "play" && step(dt);
    S.state === "trans" && (S.tr -= dt) <= 0 && ((S.state = "play"), ov(""));
    draw(t);
  }
  let BD = 0;
  function bind() {
    if (BD) return;
    BD = 1;
    const pt = (e) => {
      if (!S || !CV) return;
      S.tx = (e.clientX - CV.getBoundingClientRect().left) / PKg;
    };
    // Contrôles via Input : glisser dans la borne pour viser ; flèches gauche / droite.
    let on = 0;
    Input.sur(
      ["toucher", "glisser", "survoler", "lacher"],
      (a, i) => {
        const e = i.evt;
        if (a === "toucher") {
          if (!S || !e.target.closest || !e.target.closest(".zgbox") || e.target.closest("button")) return;
          on = 1;
          if (S.state === "ready") {
            S.state = "play";
            ov("");
          }
          pt(e);
        } else if (a === "lacher") on = 0;
        else on && pt(e);
      },
      { passive: !0 },
    );
    Input.sur(["bougerGauche", "bougerDroite"], (a, i) => {
      if (cur !== ID || !S) return;
      const d = a === "bougerGauche" ? -1 : 1;
      i.evt.preventDefault();
      if (S.state === "ready") {
        S.state = "play";
        ov("");
      }
      S.tx = Math.max(0, Math.min(W, S.z.x + d * 70));
    });
    addEventListener("resize", () => {
      S && $("#zgc") && size();
    });
  }
  setTimeout(() => {
    Object.assign(act, {
      zgGo: () => start(0),
      zgRk: () => start(1),
      zgQ: () => {
        stop();
        act.open(ID);
      },
      zgShX: () => {
        const d = $("#vzsh");
        d && d.remove();
      },
      zgRu: () => sheet("Les règles", `<p class="note" style="margin:0">${G0.s}</p>`),
    });
    const _h = home;
    home = function () {
      stop();
      return _h.apply(this, arguments);
    };
  }, 95);
})();
