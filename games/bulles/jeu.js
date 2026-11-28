(() => {
  /* ===== Bulles de Zeni : Zeni nettoie la marée d'encre ===== */
  const ID = "bulles",
    NAME = "Protéger Zeni";
  const G0 = {
    id: ID,
    n: NAME,
    ic: "",
    a: "#6fe0ff",
    b: "#1a2a7a",
    t: "La marée d’encre",
    s: "Des taches d’encre dérivent dans le lagon. Zeni nage vers ton doigt et souffle des bulles pour les dissoudre : chaque tache se divise avant de disparaître.",
  };
  try {
    window.GIL &&
      (GIL[ID] =
        '<ellipse cx="32" cy="58" rx="19" ry="3.6" fill="#000" opacity=".22"/><rect x="5" y="5" width="54" height="52" rx="12" fill="#0a3a6a"/><path d="M18 14c7-4 15 0 15 7s-4 12-11 11-10-6-9-11 2-5 5-7z" fill="#3a1f6a"/><circle cx="20" cy="20" r="2" fill="#fff"/><circle cx="27" cy="21" r="2" fill="#fff"/><path d="M42 36c4-2 8 0 8 4s-3 6-6 5-5-3-4-6z" fill="#3a1f6a"/><g fill="none" stroke="#bff6ff" stroke-width="1.6"><circle cx="38" cy="27" r="3"/><circle cx="33" cy="34" r="2.2"/></g><path d="M22 38c6 0 9 5 9 10s-4 7-9 7-9-2-9-7 3-10 9-10z" fill="#f1ecff"/><circle cx="19" cy="47" r="1.4" fill="#3a3070"/><circle cx="25" cy="47" r="1.4" fill="#3a3070"/><path d="M23 38q2-4 1-6" stroke="#a79bdc" stroke-width="1.3" fill="none"/><circle cx="24" cy="30" r="2.4" fill="#ffd45a"/>');
    GD.push(G0);
    ALL.push(G0);
    GUNL.includes(ID) || GUNL.push(ID);
    const c = GCAT.find((c) => c[0] === "arca");
    c && !c[2].includes(ID) && c[2].splice(2, 0, ID);
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
  const IC = {
    r: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5V5.5M9 8h7M9 12h5"/></svg>',
    c: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  };
  const CHP = [
    ["#0c5a86", "#061a3c", "Le lagon s’assombrit", "L’encre a envahi le lagon : Zeni part le nettoyer."],
    ["#0e6a5a", "#052a2a", "La forêt de coraux", "Des rochers barrent la route."],
    ["#2a4a8a", "#0a1030", "Les courants froids", "Les eaux glacées emportent tout."],
    ["#5a4a2a", "#1a1208", "L’épave oubliée", "Les vieux navires cachent bien des dangers."],
    ["#4a2a6a", "#10061c", "La fosse d’encre", "Plus on descend, plus l’encre est dense."],
    ["#7a2a4a", "#1a0610", "Le palais du Kraken", "La source de la marée est tout près."],
  ];
  const NEW = {
    2: "Rochers : tes bulles ne les traversent pas",
    3: "Poissons-globes : ils te pourchassent",
    4: "Oursins : ne les touche pas",
    5: "Méduses : elles crachent de l’encre",
    6: "Courants marins : ils t’emportent",
    8: "Anguilles : elles chargent !",
  };
  const intro = (n, f) => {
    const ci = Math.floor((n - 1) / 5),
      p = CHP[ci % 6],
      nm = p[2] + (ci >= 6 ? " " + (1 + Math.floor(ci / 6)) : ""),
      nw = n % 5 === 0 ? "Boss : le Kraken d’encre" : NEW[n];
    return `<div class="zrot"><small>Chapitre ${ci + 1} · ${nm}</small><b>Niveau ${n}</b><span>${nw ? "⚠ " + nw : n % 5 === 1 ? p[3] : "Dissous toute l’encre"}</span>${f ? "<span>Fais glisser le joystick pour diriger Zeni</span>" : ""}</div>`;
  };
  let S = null,
    RAF = 0,
    CV,
    CX,
    W = 360,
    H = 600,
    LT = 0;
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
    d.innerHTML = `<div class="vzsp" role="dialog" aria-label="${t}"><div class="vzsx"><h2>${t}</h2><button data-a="bzShX" aria-label="Fermer">✕</button></div>${h}</div>`;
    d.addEventListener("click", (e) => {
      e.target === d && d.remove();
    });
    document.body.appendChild(d);
  };
  function lobby() {
    stop();
    cur = ID;
    nv("games");
    try {
      theme(ID);
    } catch (e) {}
    const nb = $("#nav");
    nb && (nb.hidden = !0);
    const b = st.get("bz:lv", 0);
    app.innerHTML = `<div class="zrw bzw"><div class="zrtp">${bk("home")}<div class="zrti"><b>${NAME}</b><small>La marée d’encre</small></div><div class="chip">🫧 ${FLX()}</div></div>
<div class="zrmid"><div class="zrhero"><div class="zrz">${typeof qzGuy === "function" ? qzGuy("ok") : ""}</div><i class="bzink i1"></i><i class="bzink i2"></i><i class="bzbb b1"></i><i class="bzbb b2"></i></div><h1 class="zrname">${NAME}</h1><p class="zrsub">Histoire infinie : traverse les chapitres,<br>évite les obstacles et vaincs les boss.</p></div>
<div class="zrbt"><div class="zrsd"><button class="zrsb" data-a="bzRu"><i>${IC.r}</i><span>Règles</span></button></div>
<div class="zrcn"><button class="zrbig" data-a="bzGo">Histoire<small>${b ? "Niveau record " + b : "Niveaux sans fin"}</small></button><button class="zrpill" data-a="bzWv" style="margin-top:10px">Mode vagues</button></div>
<div class="zrsd"><button class="zrsb" data-a="infBd" data-v="${ID}"><i>${IC.c}</i><span>Classement</span></button></div></div></div>`;
    window.scrollTo(0, 0);
  }
  const ov = (h) => {
    const o = $("#bzov");
    o && ((o.innerHTML = h), (o.hidden = !h));
  };
  const hud = () => {
    const a = $("#bzlv"),
      b = $("#bzsc"),
      c = $("#bzlf");
    a &&
      (a.textContent =
        S.mode === "r"
          ? "Rank · " + Math.floor(S.t / 60) + ":" + String(Math.floor(S.t % 60)).padStart(2, "0")
          : "Niveau " + S.level);
    b && (b.textContent = String(S.score).padStart(6, "0"));
    c &&
      (c.innerHTML = [...Array(Math.max(3, S.lives)).keys()]
        .map((i) => `<i class="${i < S.lives ? "on" : ""}"></i>`)
        .join(""));
  };
  let PKb = 1;
  function size() {
    CV = $("#bzc");
    if (!CV) return;
    PKb = window.PCK ? PCK() : 1;
    H = Math.max(360, Math.round(((innerHeight || 700) - 86) / PKb));
    W = Math.min(Math.floor((app.clientWidth || innerWidth) / PKb), PKb > 1 ? 520 : 560);
    const d = Math.min(2, devicePixelRatio || 1) * PKb;
    CV.width = W * d;
    CV.height = H * d;
    CV.style.width = W * PKb + "px";
    CV.style.height = H * PKb + "px";
    CX = CV.getContext("2d");
    CX.setTransform(d, 0, 0, d, 0, 0);
  }
  function start(m) {
    stop();
    cur = ID;
    const nb = $("#nav");
    nb && (nb.hidden = !0);
    app.innerHTML = `<div class="zrg bzg"><div class="zrtp"><button class="back" data-a="bzQ">‹ Retour</button><div class="zrti"><b id="bzlv"></b><small id="bzsc"></small></div><div class="zrlf" id="bzlf"></div></div><div class="zrbox bzbox"><canvas id="bzc" aria-label="${NAME}"></canvas><div class="bzjs" id="bzjs"><i></i></div><div class="zrov" id="bzov"></div></div></div>`;
    size();
    S = {
      z: { x: W / 2, y: H * 0.6, f: 1, inv: 0 },
      tx: W / 2,
      ty: H * 0.6,
      mode: m === "r" ? "r" : "s",
      level: m === "r" ? 1 : Math.max(1, st.get("bz:cur", 1)),
      E: [],
      O: [],
      C: [],
      B: [],
      Sh: [],
      P: [],
      FX: [],
      wave: 0,
      score: 0,
      lives: 3,
      cd: 0,
      state: "ready",
      t: 0,
      amb: [...Array(26)].map(() => ({
        x: Math.random(),
        y: Math.random(),
        r: 1 + Math.random() * 2.5,
        v: 0.01 + Math.random() * 0.03,
      })),
    };
    m === "s"
      ? level(1)
      : (next(),
        ov(
          '<div class="zrot"><small>Partie sans fin · 3 vies · ça se corse avec le temps</small><b>Prêt, Zeni ?</b><span>Fais glisser le joystick pour diriger Zeni</span></div>',
        ));
    hud();
    bind();
    LT = 0;
    RAF = requestAnimationFrame(loop);
  }
  const rad = (b) =>
    b.k === "K" ? 46 : b.k === "h" ? 17 : b.k === "m" ? 16 : b.k === "e" ? 15 : b.s * 13 + 7;
  function spawn(s, k) {
    let x,
      y,
      n = 0;
    do {
      const e = Math.floor(Math.random() * 4);
      x = e < 2 ? Math.random() * W : e === 2 ? 0 : W;
      y = e >= 2 ? Math.random() * H : e === 0 ? 0 : H;
    } while (Math.hypot(x - S.z.x, y - S.z.y) < 160 && n++ < 20);
    const a = Math.random() * 6.28,
      v = (26 + S.wave * 3.5) * (1 + 0.35 * (3 - s));
    S.B.push({
      x,
      y,
      vx: Math.cos(a) * v,
      vy: Math.sin(a) * v,
      s,
      k: k || "",
      hp: k ? { h: 3, m: 2, e: 4 }[k] : 1,
      ph: Math.random() * 6,
      cd: 2 + Math.random() * 2,
      st: 0,
      tm: 2,
      ax: 0,
    });
  }
  function level(f) {
    const n = S.level,
      boss = n % 5 === 0,
      z = S.z;
    S.wave = n;
    S.B = [];
    S.Sh = [];
    S.E = [];
    S.O = [];
    S.C = [];
    z.x = W / 2;
    z.y = H * 0.78;
    S.tx = z.x;
    S.ty = z.y;
    z.inv = 1.5;
    const pl = (r) => {
      for (let i = 0; i < 40; i++) {
        const x = r + 12 + Math.random() * (W - 2 * r - 24),
          y = r + 70 + Math.random() * (H - 2 * r - 170);
        if (
          Math.hypot(x - z.x, y - z.y) > r + 120 &&
          S.O.every((o) => Math.hypot(o.x - x, o.y - y) > o.r + r + 30)
        )
          return { x, y };
      }
      return null;
    };
    if (n >= 2)
      for (let i = 0; i < Math.min(5, 1 + (n >> 1)); i++) {
        const r = 20 + Math.random() * 14,
          p = pl(r);
        p && S.O.push({ x: p.x, y: p.y, r, t: "r" });
      }
    if (n >= 4 && !boss)
      for (let i = 0; i < Math.min(4, Math.floor(n / 3)); i++) {
        const p = pl(14);
        p && S.O.push({ x: p.x, y: p.y, r: 14, t: "u" });
      }
    if (n >= 6 && !boss)
      S.C.push({
        y: 60 + Math.random() * (H - 260),
        h: 70 + Math.random() * 50,
        fx: (Math.random() < 0.5 ? -1 : 1) * (45 + Math.min(40, n * 2)),
      });
    if (boss) {
      const hp = 8 + Math.floor(n / 5) * 3;
      S.B.push({
        x: W / 2,
        y: 90,
        vx: 40,
        vy: 25,
        s: 1,
        k: "K",
        hp,
        mx: hp,
        ph: 0,
        cd: 2,
        cs: 3,
        st: 0,
        tm: 0,
        ax: 0,
      });
    }
    for (let i = 0; i < (boss ? 2 : Math.min(8, 1 + Math.ceil(n / 2))); i++) spawn(3);
    if (n >= 3) for (let i = 0; i < Math.min(3, Math.floor(n / 3)); i++) spawn(1, "h");
    if (n >= 5) for (let i = 0; i < Math.min(3, Math.floor((n - 2) / 3)); i++) spawn(1, "m");
    if (n >= 8) for (let i = 0; i < Math.min(2, Math.floor((n - 5) / 3)); i++) spawn(1, "e");
    S.state = f ? "ready" : "trans";
    S.tr = 2.4;
    ov(intro(n, f));
    hud();
  }
  function hurt() {
    const z = S.z;
    if (z.inv > 0) return;
    S.lives--;
    z.inv = 2.2;
    hud();
    try {
      sfx(260, 0.3);
      vib && vib(40);
    } catch (e) {}
    S.lives <= 0 && over();
  }
  function fire(b, n) {
    const z = S.z,
      a = Math.atan2(z.y - b.y, z.x - b.x);
    for (let i = 0; i < n; i++) {
      const q = a + (i - (n - 1) / 2) * 0.35;
      S.E.push({ x: b.x, y: b.y, vx: Math.cos(q) * 125, vy: Math.sin(q) * 125, l: 4.5 });
    }
  }
  function next() {
    S.wave++;
    const n = Math.min(9, 1 + S.wave);
    for (let i = 0; i < n; i++) spawn(3);
    if (S.wave >= 3) for (let i = 0; i < Math.min(3, Math.floor(S.wave / 3)); i++) spawn(1, "h");
    hud();
  }
  function hitB(b, i) {
    b.hp--;
    if (b.hp > 0) {
      try {
        sfx(500, 0.04);
      } catch (e) {}
      return;
    }
    S.B.splice(i, 1);
    S.FX.push({ x: b.x, y: b.y, r: rad(b), t: 0 });
    if (b.k) {
      S.score += { h: 150, m: 200, e: 250, K: 1000 }[b.k];
      if (b.k === "K") {
        S.lives = Math.min(5, S.lives + 1);
        for (let i = 0; i < 5; i++)
          S.P.push({ x: b.x + (Math.random() - 0.5) * 80, y: b.y + (Math.random() - 0.5) * 60, l: 9 });
        S.B = S.B.filter((q) => q.k);
      }
    } else {
      S.score += 20 * (4 - b.s);
      if (b.s > 1) {
        const a = Math.atan2(b.vy, b.vx),
          v = Math.hypot(b.vx, b.vy) * 1.25;
        [-0.7, 0.7].forEach((d) =>
          S.B.push({
            x: b.x,
            y: b.y,
            vx: Math.cos(a + d) * v,
            vy: Math.sin(a + d) * v,
            s: b.s - 1,
            k: "",
            hp: 1,
            ph: Math.random() * 6,
          }),
        );
      } else Math.random() < 0.4 && S.P.push({ x: b.x, y: b.y, l: 7 });
    }
    try {
      sfx(b.s > 1 ? 420 : 640, 0.06);
    } catch (e) {}
    hud();
  }
  function step(dt) {
    const z = S.z;
    S.t += dt;
    z.inv > 0 && (z.inv -= dt);
    if (S.jo) {
      z.x += S.jx * 250 * dt;
      z.y += S.jy * 250 * dt;
      Math.abs(S.jx) > 0.15 && (z.f = S.jx > 0 ? 1 : -1);
      S.tx = z.x;
      S.ty = z.y;
    }
    const dx = S.tx - z.x,
      dy = S.ty - z.y,
      d = Math.hypot(dx, dy);
    if (d > 3) {
      const sp = Math.min(230, d * 5);
      z.x += (dx / d) * sp * dt;
      z.y += (dy / d) * sp * dt;
      Math.abs(dx) > 4 && (z.f = dx > 0 ? 1 : -1);
    }
    S.C.forEach((c) => {
      z.y > c.y && z.y < c.y + c.h && (z.x += c.fx * dt);
    });
    S.O.forEach((o) => {
      const d = Math.hypot(z.x - o.x, z.y - o.y),
        m = o.r + 13;
      if (d < m && d > 0) {
        z.x = o.x + ((z.x - o.x) / d) * m;
        z.y = o.y + ((z.y - o.y) / d) * m;
        o.t === "u" && hurt();
      }
    });
    z.x = Math.max(16, Math.min(W - 16, z.x));
    z.y = Math.max(20, Math.min(H - 16, z.y));
    S.cd -= dt;
    if (S.cd <= 0 && S.B.length) {
      let m = null,
        md = 1e9;
      S.B.forEach((b) => {
        const q = Math.hypot(b.x - z.x, b.y - z.y);
        q < md && ((md = q), (m = b));
      });
      if (m && md < Math.max(W, H) * 0.75) {
        const a = Math.atan2(m.y - z.y, m.x - z.x);
        S.Sh.push({ x: z.x, y: z.y - 6, vx: Math.cos(a) * 380, vy: Math.sin(a) * 380, l: 0.95 });
        S.cd = 0.3;
        try {
          sfx(900, 0.02);
        } catch (e) {}
      }
    }
    S.Sh = S.Sh.filter((s) => {
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.l -= dt;
      if (s.l <= 0) return !1;
      if (S.O.some((o) => Math.hypot(o.x - s.x, o.y - s.y) < o.r + 3)) {
        S.FX.push({ x: s.x, y: s.y, r: 6, t: 0 });
        return !1;
      }
      for (let i = S.E.length - 1; i >= 0; i--)
        if (Math.hypot(S.E[i].x - s.x, S.E[i].y - s.y) < 9) {
          S.E.splice(i, 1);
          S.score += 10;
          return !1;
        }
      for (let i = S.B.length - 1; i >= 0; i--) {
        const b = S.B[i];
        if (Math.hypot(b.x - s.x, b.y - s.y) < rad(b) + 4) {
          hitB(b, i);
          return !1;
        }
      }
      return !0;
    });
    S.B.slice().forEach((b) => {
      const r = rad(b);
      if (b.k === "h") {
        const a = Math.atan2(z.y - b.y, z.x - b.x),
          v = 42 + S.wave * 2;
        b.vx = Math.cos(a) * v;
        b.vy = Math.sin(a) * v;
      } else if (b.k === "m") {
        b.vy = Math.cos(S.t * 1.6 + b.ph) * 55;
        b.cd -= dt;
        b.cd <= 0 && ((b.cd = 2.8), fire(b, 1));
      } else if (b.k === "e") {
        b.tm -= dt;
        if (b.st === 0) {
          const a = Math.atan2(z.y - b.y, z.x - b.x);
          b.vx = Math.cos(a) * 38;
          b.vy = Math.sin(a) * 38;
          b.tm <= 0 && ((b.st = 1), (b.tm = 0.7));
        } else if (b.st === 1) {
          b.vx = b.vy = 0;
          b.ax = Math.atan2(z.y - b.y, z.x - b.x);
          b.tm <= 0 && ((b.st = 2), (b.tm = 0.6));
        } else {
          b.vx = Math.cos(b.ax) * 320;
          b.vy = Math.sin(b.ax) * 320;
          b.tm <= 0 && ((b.st = 0), (b.tm = 2.5));
        }
      } else if (b.k === "K") {
        b.cd -= dt;
        b.cs -= dt;
        b.cd <= 0 && ((b.cd = 2.4), fire(b, 3));
        if (b.cs <= 0) {
          b.cs = 4;
          if (S.B.length < 14) {
            const a = Math.random() * 6.28;
            S.B.push({
              x: b.x,
              y: b.y,
              vx: Math.cos(a) * 70,
              vy: Math.sin(a) * 70,
              s: 1,
              k: "",
              hp: 1,
              ph: 0,
              cd: 0,
              st: 0,
              tm: 0,
              ax: 0,
            });
          }
        }
      }
      const sl = S.slow > 0 ? 0.4 : 1;
      b.x += b.vx * dt * sl;
      b.y += b.vy * dt * sl;
      if (b.k !== "h" && b.k !== "K")
        S.C.forEach((c) => {
          b.y > c.y && b.y < c.y + c.h && (b.x += c.fx * dt);
        });
      S.O.forEach((o) => {
        const d = Math.hypot(b.x - o.x, b.y - o.y),
          m = o.r + r;
        if (d < m && d > 0) {
          const nx = (b.x - o.x) / d,
            ny = (b.y - o.y) / d;
          b.x = o.x + nx * m;
          b.y = o.y + ny * m;
          const dp = b.vx * nx + b.vy * ny;
          if (dp < 0 && b.k !== "h") {
            b.vx -= 2 * dp * nx;
            b.vy -= 2 * dp * ny;
          }
        }
      });
      if (b.k === "K") {
        if (b.x < r) {
          b.x = r;
          b.vx = Math.abs(b.vx);
        }
        if (b.x > W - r) {
          b.x = W - r;
          b.vx = -Math.abs(b.vx);
        }
        if (b.y < r + 10) {
          b.y = r + 10;
          b.vy = Math.abs(b.vy);
        }
        if (b.y > H * 0.5) {
          b.y = H * 0.5;
          b.vy = -Math.abs(b.vy);
        }
      } else {
        b.x < -r && (b.x = W + r);
        b.x > W + r && (b.x = -r);
        b.y < -r && (b.y = H + r);
        b.y > H + r && (b.y = -r);
      }
      Math.hypot(b.x - z.x, b.y - z.y) < r + 11 && hurt();
    });
    S.E = S.E.filter((e) => {
      e.x += e.vx * dt;
      e.y += e.vy * dt;
      e.l -= dt;
      if (e.l <= 0 || S.O.some((o) => Math.hypot(o.x - e.x, o.y - e.y) < o.r)) return !1;
      if (Math.hypot(e.x - z.x, e.y - z.y) < 11) {
        hurt();
        return !1;
      }
      return !0;
    });
    S.P = S.P.filter((p) => {
      p.l -= dt;
      if (Math.hypot(p.x - z.x, p.y - z.y) < 24) {
        const k = p.k || "p",
          tx = { v: "+1 vie", b: "Explosion !", s: "Ralenti", i: "Bouclier" }[k];
        k === "v"
          ? (S.lives = Math.min(5, S.lives + 1))
          : k === "b"
            ? (S.B.filter((q) => !q.k).forEach((q) => {
                S.FX.push({ x: q.x, y: q.y, r: rad(q), t: 0 });
                S.score += 20;
              }),
              (S.B = S.B.filter((q) => q.k)))
            : k === "s"
              ? (S.slow = 7)
              : k === "i" && (z.inv = 6);
        S.score += 50;
        tx && S.FX.push({ x: z.x, y: z.y - 30, r: 0, t: 0, txt: tx });
        hud();
        try {
          sfx(1200, 0.1);
        } catch (e) {}
        return !1;
      }
      return p.l > 0;
    });
    S.FX = S.FX.filter((f) => (f.t += dt) < 0.4);
    S.mode === "r" && S.state === "play" && rkStep(dt);
    if (S.state === "play" && !S.B.length && S.mode !== "r") {
      try {
        [660, 880].forEach((f, i) => setTimeout(() => sfx(f, 0.2), i * 110));
      } catch (e) {}
      if (S.mode !== "w") {
        S.score += 100 * S.level;
        S.level++;
        S.mode === "s" && st.set("bz:cur", S.level);
        level(0);
      } else {
        next();
        S.FX.push({ x: W / 2, y: H / 2, r: 0, t: 0, txt: "Vague " + S.wave });
      }
    }
  }
  function rkStep(dt) {
    const D = 1 + S.t / 28,
      z = S.z;
    S.slow > 0 && (S.slow -= dt);
    S.wave = 1 + Math.floor(D * 1.6);
    Math.floor(S.t) !== S.ts && ((S.ts = Math.floor(S.t)), hud());
    S.rs = (S.rs || 0) - dt;
    !S.B.length && (S.rs = Math.min(S.rs, 0.4));
    if (S.rs <= 0 && S.B.length < Math.min(22, 4 + Math.floor(D * 2.3))) {
      S.rs = Math.max(0.8, 3.2 - D * 0.2);
      const r = Math.random();
      let k = "";
      if (D >= 2.2 && r < 0.2) k = "h";
      else if (D >= 3.5 && r < 0.36) k = "m";
      else if (D >= 5.5 && r < 0.5) k = "e";
      k ? spawn(1, k) : spawn(3);
    }
    S.nb = S.nb || 75;
    if (S.t >= S.nb && !S.B.some((b) => b.k === "K")) {
      S.nb = S.t + 70;
      const hp = 8 + Math.floor(S.t / 70) * 3;
      S.B.push({
        x: W / 2,
        y: 90,
        vx: 40,
        vy: 25,
        s: 1,
        k: "K",
        hp,
        mx: hp,
        ph: 0,
        cd: 2,
        cs: 3,
        st: 0,
        tm: 0,
        ax: 0,
      });
      S.FX.push({ x: W / 2, y: H / 2, r: 0, t: 0, txt: "Le Kraken !" });
    }
    S.ro = (S.ro || 14) - dt;
    if (S.ro <= 0) {
      S.ro = Math.max(8, 18 - D);
      const pl = (r) => {
          for (let i = 0; i < 40; i++) {
            const x = r + 12 + Math.random() * (W - 2 * r - 24),
              y = r + 70 + Math.random() * (H - 2 * r - 170);
            if (
              Math.hypot(x - z.x, y - z.y) > r + 120 &&
              S.O.every((o) => Math.hypot(o.x - x, o.y - y) > o.r + r + 30)
            )
              return { x, y };
          }
          return null;
        },
        nu = S.O.filter((o) => o.t === "u").length,
        nr = S.O.length - nu;
      if (D >= 3 && nu < 4 && Math.random() < 0.45) {
        const p = pl(14);
        p && S.O.push({ x: p.x, y: p.y, r: 14, t: "u" });
      } else if (D >= 1.8 && nr < 6) {
        const r = 20 + Math.random() * 14,
          p = pl(r);
        p && S.O.push({ x: p.x, y: p.y, r, t: "r" });
      }
      if (D >= 4.5 && S.C.length < 3 && Math.random() < 0.35)
        S.C.push({
          y: 60 + Math.random() * (H - 260),
          h: 70 + Math.random() * 50,
          fx: (Math.random() < 0.5 ? -1 : 1) * (45 + Math.min(40, D * 4)),
        });
    }
    S.rp = (S.rp || 12) - dt;
    if (S.rp <= 0) {
      S.rp = Math.max(9, 16 - D * 0.6);
      const ks = ["p", "p", "v", "b", "s", "i"],
        k = ks[(Math.random() * ks.length) | 0];
      S.P.push({ x: 30 + Math.random() * (W - 60), y: 90 + Math.random() * (H - 200), l: 10, k });
    }
  }
  function over() {
    S.state = "over";
    const rk = S.mode === "r",
      sm = 1,
      K = rk ? "bz:rkb" : "bz:best",
      b = st.get(K, 0),
      rec = S.score > b,
      L = S.level;
    rec && st.set(K, S.score);
    L > st.get("bz:lv", 0) && st.set("bz:lv", L);
    if (rk)
      try {
        infSave(ID, S.score);
      } catch (e) {}
    let g = 0;
    try {
      g = dmR(ID, Math.min(10, rk ? Math.floor(S.t / 40) : Math.floor((L - 1) / 2)));
      g && scrGain(g);
    } catch (e) {}
    ov(
      `<div class="zrot lose"><small>${rk ? "Mode Rank · " + Math.floor(S.t / 60) + ":" + String(Math.floor(S.t % 60)).padStart(2, "0") : "Niveau " + L}</small><b>${S.score} pts</b><span>${rec ? "Nouveau record !" : "Record : " + b + " pts"}${g ? " · +" + g + " 🫧" : ""}</span><div class="zrob"><button class="zrbig" data-a="${rk ? "bzRk" : "bzGo"}">${rk ? "Rejouer" : "Réessayer le niveau " + L}</button>${rk ? `<button class="zrpill" data-a="infBd" data-v="${ID}">Classement</button>` : ""}<button class="zrpill" data-a="bzQ">Retour</button></div></div>`,
    );
  }
  const st0 = document.createElement("style");
  st0.textContent = `.bzg .zrti b{font:800 13px ui-monospace,Menlo,Consolas,monospace;letter-spacing:.12em;text-transform:uppercase;color:#7dffb0;text-shadow:0 0 8px #7dffb0}.bzg .zrti small{font:700 12px ui-monospace,Menlo,Consolas,monospace;letter-spacing:.1em;color:#7ef0ff;text-shadow:0 0 6px #22d3ee;opacity:1}.bzbox{background:#03040d}.bzbox:after{content:"";position:absolute;inset:0;pointer-events:none;z-index:1;background:repeating-linear-gradient(0deg,rgba(255,255,255,.045) 0 1px,transparent 1px 3px),radial-gradient(120% 90% at 50% 45%,transparent 60%,rgba(0,0,0,.55))}.bzbox .zrov{z-index:3}`;
  document.head.appendChild(st0);
  const SP = {
    b: [".11111.", "1111111", "1131311", "1111111", "1111111", ".11111."],
    h: ["..1.1.1..", ".1111111.", "113111311", "111111111", "111222111", ".1111111.", "..1.1.1.."],
    m: ["..11111..", ".1111111.", "113111311", "111111111", ".1111111.", ".1.1.1.1.", "1..1.1..1"],
    e: ["..2......", ".111..2..", "1131.11..", "11111111.", ".11.1111.", "......2.."],
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
    u: ["1...1...1", ".1.111.1.", "..11111..", "111313111", "..11111..", ".1.111.1.", "1...1...1"],
  };
  const CL = {
      b: ["#a55eea", "#d8b4ff"],
      h: ["#feca57", "#ff6b6b"],
      m: ["#ff6ec7", "#ffd0ee"],
      e: ["#4fe0a0", "#00e5ff"],
      K: ["#ff4d8d", "#ff9cc0"],
      u: ["#c56cf0", "#f0d0ff"],
    },
    CA = {},
    MONO = "ui-monospace,Menlo,Consolas,monospace";
  window.BZSPR = (k, w) => spr(k, w);
  function spr(k, wd) {
    const key = k + Math.round(wd);
    if (CA[key]) return CA[key];
    const R = SP[k],
      col = CL[k],
      px = wd / R[0].length,
      w = wd + 20,
      h = R.length * px + 20,
      cv = document.createElement("canvas");
    cv.width = w * 2;
    cv.height = h * 2;
    const c = cv.getContext("2d");
    c.scale(2, 2);
    c.shadowColor = col[0];
    c.shadowBlur = 8;
    R.forEach((row, y) =>
      [...row].forEach((ch, x) => {
        if (ch === ".") return;
        c.fillStyle = ch === "1" ? col[0] : ch === "2" ? col[1] : "#fff";
        c.fillRect(10 + x * px, 10 + y * px, px + 0.4, px + 0.4);
      }),
    );
    cv.w = w;
    cv.h = h;
    return (CA[key] = cv);
  }
  function draw(t) {
    const c = CX;
    if (!c) return;
    const pp = S.mode === "s" ? CHP[Math.floor((S.level - 1) / 5) % 6] : CHP[0],
      g = c.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#050a24");
    g.addColorStop(0.6, "#07163a");
    g.addColorStop(1, "#0a0420");
    c.fillStyle = g;
    c.fillRect(0, 0, W, H);
    c.globalAlpha = 0.22;
    c.fillStyle = pp[0];
    c.fillRect(0, 0, W, H);
    c.globalAlpha = 1;
    const hz = H - 18;
    c.strokeStyle = "rgba(255,79,216,.3)";
    c.lineWidth = 1;
    for (let i = -8; i <= 8; i++) {
      c.beginPath();
      c.moveTo(W / 2 + i * 16, hz);
      c.lineTo(W / 2 + i * 70, H);
      c.stroke();
    }
    c.strokeStyle = "#ff4fd8";
    c.beginPath();
    c.moveTo(0, hz);
    c.lineTo(W, hz);
    c.stroke();
    S.amb.forEach((p, i) => {
      p.y -= p.v * 0.016;
      p.y < -0.02 && (p.y = 1.02);
      c.globalAlpha = 0.35 + 0.35 * Math.sin(t / 400 + p.x * 40);
      c.fillStyle = ["#7ef0ff", "#ff8ae0", "#fff"][i % 3];
      c.fillRect(p.x * W, p.y * H, 2, 2);
    });
    c.globalAlpha = 1;
    S.C.forEach((q) => {
      c.fillStyle = "rgba(34,211,238,.07)";
      c.fillRect(0, q.y, W, q.h);
      c.strokeStyle = "rgba(126,240,255,.5)";
      c.lineWidth = 2;
      const d = Math.sign(q.fx),
        o = (((S.t * q.fx) % 64) + 64) % 64;
      [0.28, 0.72].forEach((f) => {
        const m = q.y + q.h * f;
        for (let x = -64 + o; x < W + 64; x += 64) {
          c.beginPath();
          c.moveTo(x - 7 * d, m - 8);
          c.lineTo(x, m);
          c.lineTo(x - 7 * d, m + 8);
          c.stroke();
        }
      });
    });
    S.O.forEach((o) => {
      if (o.t === "r") {
        c.fillStyle = "#101a3a";
        c.strokeStyle = "#7ea6ff";
        c.lineWidth = 2;
        c.shadowColor = "#7ea6ff";
        c.shadowBlur = 8;
        c.beginPath();
        for (let i = 0; i < 8; i++) {
          const a = i * 0.785,
            q = o.r * (0.9 + 0.14 * Math.sin(i * 2.7 + o.r));
          c.lineTo(o.x + Math.cos(a) * q, o.y + Math.sin(a) * q);
        }
        c.closePath();
        c.fill();
        c.stroke();
        c.shadowBlur = 0;
      } else {
        const s = spr("u", o.r * 2.6);
        c.save();
        c.translate(o.x, o.y);
        c.rotate(t / 1200);
        c.drawImage(s, -s.w / 2, -s.h / 2, s.w, s.h);
        c.restore();
      }
    });
    S.P.forEach((p) => {
      c.globalAlpha = Math.min(1, p.l);
      const pk = p.k || "p",
        pc = { p: "#fff3a0", v: "#ff7a9a", b: "#9fe8ff", s: "#c8adff", i: "#7dffb0" }[pk];
      c.shadowColor = pc;
      c.shadowBlur = 12;
      c.fillStyle = pc;
      const y = p.y + Math.sin(t / 200) * 2;
      if (pk === "p") {
        c.fillRect(p.x - 3, y - 6, 6, 12);
        c.fillRect(p.x - 6, y - 3, 12, 6);
      } else {
        c.beginPath();
        c.arc(p.x, y, 10, 0, 7);
        c.fill();
        c.shadowBlur = 0;
        c.fillStyle = "#0a0f2a";
        c.font = "800 12px " + MONO;
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.fillText({ v: "♥", b: "✸", s: "◔", i: "◈" }[pk], p.x, y + 0.5);
      }
      c.shadowBlur = 0;
      c.globalAlpha = 1;
    });
    S.B.forEach((b) => {
      const r = rad(b),
        k = b.k || "b",
        s = spr(k, r * 2.15),
        bb = 1 + 0.05 * Math.sin(t / 160 + b.ph * 3);
      c.save();
      c.translate(b.x, b.y);
      if (k === "e") {
        const a = b.st ? b.ax : Math.atan2(b.vy, b.vx);
        c.rotate(a);
        Math.abs(a) > 1.57 && c.scale(1, -1);
        b.st === 1 && Math.floor(t / 80) % 2 && (c.globalAlpha = 0.4);
      }
      c.drawImage(s, -s.w / 2, (-s.h * bb) / 2, s.w, s.h * bb);
      c.restore();
    });
    c.shadowColor = "#ff4fd8";
    c.shadowBlur = 8;
    c.fillStyle = "#ff8ae0";
    S.E.forEach((e) => {
      c.fillRect(e.x - 2, e.y - 5, 4, 10);
      c.fillRect(e.x - 5, e.y - 2, 10, 4);
    });
    c.shadowColor = "#22d3ee";
    c.strokeStyle = "#eaffff";
    c.lineWidth = 2;
    S.Sh.forEach((s) => c.strokeRect(s.x - 3.5, s.y - 3.5, 7, 7));
    c.shadowBlur = 0;
    const kb = S.B.find((q) => q.k === "K");
    if (kb) {
      c.fillStyle = "rgba(255,255,255,.15)";
      c.fillRect(W * 0.2, 10, W * 0.6, 6);
      c.fillStyle = "#ff4d8d";
      c.fillRect(W * 0.2, 10, (W * 0.6 * kb.hp) / kb.mx, 6);
    }
    S.FX.forEach((f) => {
      const a = f.t / 0.4;
      c.globalAlpha = 1 - a;
      if (f.txt) {
        c.fillStyle = "#7dffb0";
        c.shadowColor = "#7dffb0";
        c.shadowBlur = 10;
        c.font = "800 22px " + MONO;
        c.textAlign = "center";
        c.fillText(f.txt.toUpperCase(), f.x, f.y - a * 20);
        c.shadowBlur = 0;
      } else {
        c.strokeStyle = "#c9a8ff";
        c.lineWidth = 2;
        const q = f.r * (1 + a);
        c.strokeRect(f.x - q, f.y - q, q * 2, q * 2);
      }
      c.globalAlpha = 1;
    });
    const z = S.z,
      im = zImg();
    if (!(z.inv > 0 && Math.floor(t / 110) % 2)) {
      c.save();
      c.translate(z.x, z.y + Math.sin(t / 200) * 2);
      z.f < 0 && c.scale(-1, 1);
      c.shadowColor = "#ff9f43";
      c.shadowBlur = 8;
      c.fillStyle = "#ff9f43";
      c.fillRect(-30 - Math.random() * 6, 7, 12, 5);
      c.shadowColor = "#22d3ee";
      c.shadowBlur = 12;
      c.fillStyle = "#ff4fd8";
      c.fillRect(-22, -4, 8, 18);
      c.fillStyle = "rgba(34,211,238,.25)";
      c.fillRect(-14, -17, 28, 24);
      c.shadowBlur = 0;
      im.complete &&
        im.naturalWidth &&
        ((c.imageSmoothingEnabled = !1),
        c.drawImage(zeniPx("r"), -13, -20, 26, 26),
        (c.imageSmoothingEnabled = !0));
      c.strokeStyle = "#7ef0ff";
      c.lineWidth = 2;
      c.strokeRect(-14, -17, 28, 24);
      c.shadowColor = "#22d3ee";
      c.shadowBlur = 10;
      c.fillStyle = "#22d3ee";
      c.fillRect(-24, 6, 48, 7);
      c.fillStyle = "#eaffff";
      c.fillRect(-18, 13, 36, 4);
      c.shadowBlur = 0;
      c.fillStyle = "#ffd32a";
      [-14, 0, 14].forEach((x) => c.fillRect(x - 2, 8, 4, 3));
      c.restore();
    }
  }
  function loop(t) {
    if (!S || !$("#bzc")) return stop();
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
      const r = CV.getBoundingClientRect();
      S.tx = (e.clientX - r.left) / PKb;
      S.ty = (e.clientY - r.top) / PKb - 34;
    };
    let on = 0;
    const J = { id: null, x: 0, y: 0 },
      JR = 48,
      jel = () => $("#bzjs"),
      jrest = () => {
        const e = jel();
        e && (e.classList.remove("on"), (e.firstChild.style.transform = ""));
      };
    // Contrôles via Input : manette virtuelle au doigt ou à la souris (appui, glisser, lâcher) ; flèches.
    const jdown = (e) => {
        if (
          !S ||
          J.id !== null ||
          !e.target.closest ||
          !e.target.closest(".bzbox") ||
          e.target.closest("button")
        )
          return;
        const bx = e.target.closest(".bzbox").getBoundingClientRect(),
          el = jel();
        if (!el) return;
        J.id = e.pointerId;
        J.x = e.clientX;
        J.y = e.clientY;
        el.style.left = e.clientX - bx.left + "px";
        el.style.top = e.clientY - bx.top + "px";
        el.classList.add("on");
        S.jo = 1;
        S.jx = S.jy = 0;
        if (S.state === "ready") {
          S.state = "play";
          ov("");
        }
      },
      jmove = (e) => {
        if (!S || e.pointerId !== J.id) return;
        let dx = e.clientX - J.x,
          dy = e.clientY - J.y;
        const d = Math.hypot(dx, dy);
        if (d > JR) {
          dx *= JR / d;
          dy *= JR / d;
        }
        S.jx = dx / JR;
        S.jy = dy / JR;
        const el = jel();
        el && (el.firstChild.style.transform = `translate(${dx}px,${dy}px)`);
      },
      jup = (e) => {
        if (e.pointerId !== J.id) return;
        J.id = null;
        if (S) {
          S.jo = 0;
          S.jx = S.jy = 0;
        }
        jrest();
      };
    Input.sur(
      ["toucher", "glisser", "survoler", "lacher"],
      (a, i) => (a === "toucher" ? jdown : a === "lacher" ? jup : jmove)(i.evt),
      { passive: !0, annulation: !0 },
    );
    const DIR = { monter: [0, -1], descendre: [0, 1], bougerGauche: [-1, 0], bougerDroite: [1, 0] };
    Input.sur(["monter", "descendre", "bougerGauche", "bougerDroite"], (a, i) => {
      if (cur !== ID || !S) return;
      const d = DIR[a];
      i.evt.preventDefault();
      if (S.state === "ready") {
        S.state = "play";
        ov("");
      }
      S.tx = Math.max(0, Math.min(W, S.z.x + d[0] * 90));
      S.ty = Math.max(0, Math.min(H, S.z.y + d[1] * 90));
    });
    addEventListener("resize", () => {
      S && $("#bzc") && size();
    });
  }
  setTimeout(() => {
    Object.assign(act, {
      bzGo: () => start("s"),
      bzRk: () => start("r"),
      bzWv: () => start("r"),
      bzQ: () => lobby(),
      bzShX: () => {
        const d = $("#vzsh");
        d && d.remove();
      },
      bzRu: () =>
        sheet(
          "Les règles",
          '<p class="note" style="margin:0 0 8px">Pose le doigt n’importe où : le joystick apparaît sous ton doigt. Glisse pour diriger Zeni ; il souffle tout seul des bulles vers la tache d’encre la plus proche.</p><p class="note" style="margin:0 0 8px">Une grosse tache se divise en deux moyennes, puis en petites, qui se dissolvent. Les petites laissent parfois une <b>perle</b> : +50 points. À partir de la vague 3, des <b>poissons-globes</b> suivent Zeni : il faut 3 bulles pour les repousser.</p><p class="note" style="margin:0 0 8px"><b>Jouer</b> : des niveaux sans fin, du niveau 1, puis 2, etc. ; tu reprends là où tu t’es arrêté. <b>Mode Rank</b> : départ au niveau 1 avec 3 vies, ton score va au classement. Les <b>rochers</b> bloquent les bulles, les <b>oursins</b> blessent, les <b>courants</b> t’emportent, les <b>méduses</b> crachent de l’encre, les <b>anguilles</b> chargent. Un <b>boss</b> t’attend tous les 5 niveaux et te rend une vie.</p><p class="note" style="margin:0">3 vies (5 au maximum). Ton score de l’histoire part au classement ; le mode vagues reste un record personnel.</p>',
        ),
    });
    const _o = act.open;
    act.open = function (e) {
      if (e === ID) return lobby();
      return _o.apply(this, arguments);
    };
    const _h = home;
    home = function () {
      stop();
      return _h.apply(this, arguments);
    };
    try {
      cur === null && document.querySelector(".tile") && home();
    } catch (e) {}
  }, 95);
})();
