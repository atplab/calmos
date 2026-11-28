(() => {
  /* ===== Crabes Farceurs : des farceurs sortent du sable, tape-les avant qu’ils ne replongent (borne d’arcade) ===== */
  const ID = "crabes",
    NAME = "Crabes Farceurs";
  const G0 = {
    id: ID,
    n: NAME,
    ic: "",
    a: "#ffb347",
    b: "#2a0f3a",
    t: "Tape les farceurs",
    s: "Des farceurs sortent des trous de sable de la plage. Touche-les avant qu’ils ne replongent !<br><br><b>Mode niveaux</b> : atteins l’objectif avant la fin du chrono, puis passe au niveau suivant, à l’infini. Un roi crabe tous les 5 niveaux.<br><br><b>Mode Rank</b> : 3 vies, ça accélère sans fin. Tu perds une vie si tu tapes un oursin ou si 5 farceurs t’échappent.<br><br><b>Combo</b> : enchaîne les coups sans rater pour multiplier tes points (×2, ×3, ×4).",
  };
  try {
    window.GIL &&
      (GIL[ID] =
        '<ellipse cx="32" cy="58" rx="19" ry="3.6" fill="#000" opacity=".22"/><rect x="5" y="5" width="54" height="52" rx="12" fill="#2a0f3a"/><ellipse cx="32" cy="44" rx="19" ry="6" fill="#120618"/><ellipse cx="32" cy="44" rx="19" ry="6" fill="none" stroke="#ffb347" stroke-width="2"/><path d="M17 44c0-12 7-18 15-18s15 6 15 18z" fill="#ff6a3d"/><path d="M15 30c-4-3-4-9 1-10 3 1 3 5 1 6M49 30c4-3 4-9-1-10-3 1-3 5-1 6" fill="#ff8a5a" stroke="#ff6a3d" stroke-width="2"/><path d="M26 27v-6M38 27v-6" stroke="#ff6a3d" stroke-width="2.4"/><circle cx="26" cy="19" r="3.4" fill="#fff"/><circle cx="38" cy="19" r="3.4" fill="#fff"/><circle cx="26.6" cy="19.4" r="1.6" fill="#1a1030"/><circle cx="38.6" cy="19.4" r="1.6" fill="#1a1030"/><path d="M27 37q5 4 10 0" stroke="#5a1408" stroke-width="1.8" fill="none" stroke-linecap="round"/><rect x="40" y="6" width="17" height="7" rx="2" fill="#ffd27a" transform="rotate(30 48 9)"/><rect x="45" y="12" width="3" height="13" rx="1.5" fill="#a86a3a" transform="rotate(30 48 9)"/>');
    GD.push(G0);
    ALL.push(G0);
    GUNL.includes(ID) || GUNL.push(ID);
    const c = GCAT.find((c) => c[0] === "arca");
    c && !c[2].includes(ID) && c[2].push(ID);
  } catch (e) {}
  try {
    delete GAV[ID];
  } catch (e) {}
  try {
    window.RULES &&
      (RULES[ID] = {
        g: "Taper les farceurs qui sortent du sable avant qu’ils ne replongent.",
        s: [
          ["tap", "Tape vite", "Touche un farceur dès qu’il sort de son trou. Certains demandent 2 coups."],
          [
            "enemy",
            "Attention à l’oursin",
            "Ne tape jamais l’oursin violet : il pique ! Laisse-le replonger.",
          ],
          [
            "bonus",
            "Bonus",
            "Sablier (+5 s), flocon (tout le monde gèle), étoile (marteau d’or qui frappe aussi les voisins).",
          ],
          ["rank", "Mode Rank", "3 vies et de plus en plus vite. Ton score part au classement."],
        ],
        t: "Ne tape pas au hasard : un coup dans le vide casse ton combo.",
      });
  } catch (e) {}

  const st0 = document.createElement("style");
  st0.textContent = `.zcg .zrti b{color:#ffb347;text-shadow:0 0 8px #ffb347}.zcg .zrti small{color:#ffe08a;text-shadow:0 0 6px #ff9f43}.zcbox{background:#0c0414}.zcbox canvas{cursor:pointer}`;
  document.head.appendChild(st0);

  const $ = (q) => document.querySelector(q),
    R = Math.random,
    MONO = "ui-monospace,Menlo,Consolas,monospace";
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
  const ov = (h) => {
    const o = $("#zcov");
    o && ((o.innerHTML = h), (o.hidden = !h));
  };
  const hud = () => {
    const a = $("#zclv"),
      b = $("#zcsc"),
      c = $("#zclf");
    a && (a.textContent = S.rk ? "Rank · " + Math.floor(S.t) + " s" : "Niveau " + S.level);
    b && (b.textContent = String(S.score).padStart(6, "0"));
    c &&
      (c.innerHTML = S.rk
        ? [...Array(3).keys()].map((i) => `<i class="${i < S.lives ? "on" : ""}"></i>`).join("")
        : "");
  };
  const sheet = (t, h) => {
    const o = $("#vzsh");
    o && o.remove();
    const d = document.createElement("div");
    d.id = "vzsh";
    d.className = "vzsh";
    d.innerHTML = `<div class="vzsp" role="dialog" aria-label="${t}"><div class="vzsx"><h2>${t}</h2><button data-a="zcShX" aria-label="Fermer">✕</button></div>${h}</div>`;
    d.addEventListener("click", (e) => {
      e.target === d && d.remove();
    });
    document.body.appendChild(d);
  };
  const snd = (f, d) => {
    try {
      sfx(f, d);
    } catch (e) {}
  };

  /* ---- les farceurs : [nom, points, coups, compte pour l’objectif, niveau d’apparition, description] ---- */
  const K = {
    c: ["Crabe", 10, 1, 1, 1, "Le farceur de base. Un seul coup suffit."],
    h: ["Crabe casqué", 25, 2, 1, 2, "Son casque encaisse le premier coup : tape deux fois."],
    u: ["Oursin", 0, 1, 0, 3, "Ne le tape surtout pas : il pique ! Laisse-le replonger."],
    g: ["Crabe doré", 50, 1, 1, 4, "Très rapide, il rapporte gros. Sois vif !"],
    t: ["Sablier", 0, 1, 0, 4, "+5 secondes au chrono (en Rank : +100 points)."],
    s: ["Crevette sauteuse", 30, 1, 1, 6, "Elle saute dans un autre trou en cours de route."],
    p: ["Pieuvre", 20, 1, 1, 7, "Touchée, elle crache de l’encre qui cache une partie de la plage."],
    f: ["Flocon", 0, 1, 0, 8, "Gèle tout le monde quelques secondes : les farceurs ne bougent plus."],
    m: [
      "Étoile d’or",
      0,
      1,
      0,
      9,
      "Ton marteau devient doré : tes 6 coups suivants frappent aussi les trous voisins.",
    ],
    b: [
      "Bernard l’ermite",
      15,
      1,
      1,
      11,
      "Il se cache dans sa coquille quand on tape à côté. Attends qu’il en sorte.",
    ],
    K: [
      "Roi crabe",
      200,
      7,
      5,
      5,
      "Tous les 5 niveaux. Il change de trou sans arrêt : 7 coups pour le renvoyer.",
    ],
  };
  const ORD = ["c", "h", "u", "g", "t", "s", "p", "f", "m", "b"];

  let PKc = 1;
  function size() {
    CV = $("#zcc");
    if (!CV) return;
    PKc = window.PCK ? PCK() : 1;
    H = Math.max(380, Math.round(((innerHeight || 700) - 86) / PKc));
    W = Math.min(Math.floor((app.clientWidth || innerWidth) / PKc), PKc > 1 ? 520 : 560);
    const d = Math.min(2, devicePixelRatio || 1) * PKc;
    CV.width = W * d;
    CV.height = H * d;
    CV.style.width = W * PKc + "px";
    CV.style.height = H * PKc + "px";
    CX = CV.getContext("2d");
    CX.setTransform(d, 0, 0, d, 0, 0);
    S && layout();
  }
  function layout() {
    const n = S.cols * S.rows,
      top = 96,
      bot = 40,
      cw = W / S.cols,
      rh = (H - top - bot) / S.rows;
    S.HO = [...Array(n)].map((_, i) => {
      const c = i % S.cols,
        r = Math.floor(i / S.cols);
      return {
        x: cw * (c + 0.5),
        y: top + rh * (r + 0.72),
        rx: Math.min(cw * 0.36, 62),
        ry: Math.min(cw * 0.36, 62) * 0.32,
        sz: Math.min(cw * 0.34, rh * 0.42, 58),
      };
    });
  }

  function start(rk) {
    stop();
    cur = ID;
    const nb = $("#nav");
    nb && (nb.hidden = !0);
    app.innerHTML = `<div class="zrg zgg zcg"><div class="zrtp"><button class="back" data-a="zcQ">‹ Retour</button><div class="zrti"><b id="zclv"></b><small id="zcsc"></small></div><div class="zrlf" id="zclf"></div></div><div class="zrbox zgbox zcbox" style="touch-action:none"><canvas id="zcc" aria-label="${NAME}"></canvas><div class="zrov" id="zcov"></div></div></div>`;
    S = {
      rk,
      level: rk ? 1 : Math.max(1, st.get("zc:lv", 1)),
      score: 0,
      lives: 3,
      esc: 0,
      cb: 0,
      best: 0,
      done: 0,
      state: "ready",
      E: [],
      FX: [],
      INK: [],
      ML: null,
      gold: 0,
      frz: 0,
      t: 0,
      cols: 3,
      rows: 3,
      amb: [...Array(30)].map(() => ({
        x: R(),
        y: R(),
        v: 0.01 + R() * 0.03,
        c: ["#ffb347", "#ff6ad5", "#7ef0ff"][Math.floor(R() * 3)],
      })),
    };
    size();
    level();
    hud();
    bind();
    ov(
      `<div class="zrot"><small>${rk ? "Mode Rank" : "Niveau " + S.level}</small><b>${rk ? "3 vies" : "Objectif : " + S.goal}</b><span>Touche l’écran pour commencer</span></div>`,
    );
    LT = 0;
    RAF = requestAnimationFrame(loop);
  }
  function level() {
    const n = S.level;
    S.cols = n >= 10 && !S.rk ? 4 : 3;
    S.rows = n >= 15 && !S.rk ? 4 : 3;
    S.E = [];
    S.INK = [];
    S.frz = 0;
    S.gold = 0;
    S.sp = 0.6;
    S.cnt = 0;
    S.boss = !S.rk && n % 5 === 0;
    S.goal = S.boss ? 10 + n : 8 + Math.round(n * 2.2);
    S.time = S.boss ? 40 : 30;
    S.left = S.time;
    S.bt = S.boss ? 2 : 0;
    CV && layout();
  }
  const dif = () => (S.rk ? 1 + S.t / 14 : S.level);
  function pick() {
    const n = dif(),
      P = [];
    ORD.forEach((k) => {
      if (n < K[k][4]) return;
      const w = {
        c: 10,
        h: 4,
        u: 2.4 + Math.min(3, n * 0.12),
        g: 1.2,
        t: S.rk ? 0.6 : 1,
        s: 2.2,
        p: 2,
        f: 0.7,
        m: 0.7,
        b: 2,
      }[k];
      P.push([k, w]);
    });
    let s = P.reduce((a, p) => a + p[1], 0) * R();
    for (const [k, w] of P) {
      if ((s -= w) <= 0) return k;
    }
    return "c";
  }
  function spawn(k) {
    const free = S.HO.map((_, i) => i).filter((i) => !S.E.some((e) => e.h === i));
    if (!free.length) return;
    const h = free[Math.floor(R() * free.length)],
      n = dif();
    k = k || pick();
    const stay = Math.max(0.5, 1.45 - n * 0.045) * (k === "g" ? 0.55 : k === "K" ? 0.9 : k === "u" ? 1.3 : 1);
    S.E.push({
      h,
      k,
      up: 0,
      st: "up",
      ts: stay,
      hp: K[k][2],
      hit: 0,
      hop: k === "s" ? 1 : 0,
      sh: 0,
      ph: R() * 7,
    });
  }
  function add(p) {
    const m = Math.min(4, 1 + Math.floor(S.cb / 5));
    S.score += p * m;
    return m;
  }
  function fx(x, y, txt, c) {
    S.FX.push({ x, y, txt, c: c || "#fff", t: 0 });
  }
  function boom(x, y, c) {
    for (let i = 0; i < 12; i++) {
      const a = R() * 7;
      S.FX.push({
        x,
        y,
        vx: Math.cos(a) * (60 + R() * 90),
        vy: Math.sin(a) * (60 + R() * 90) - 60,
        c,
        t: 0,
        p: 1,
      });
    }
  }
  function hitE(e, main) {
    const o = S.HO[e.h],
      k = e.k;
    if (k === "b" && e.sh > 0) {
      fx(o.x, o.y - o.sz, "🐚", "#fff");
      return 0;
    }
    if (k === "u") {
      if (!main) return 0;
      S.cb = 0;
      snd(160, 0.25);
      try {
        vib && vib(60);
      } catch (x) {}
      e.st = "down";
      boom(o.x, o.y - o.sz * 0.6, "#c86aff");
      if (S.rk) {
        S.lives--;
        fx(o.x, o.y - o.sz * 1.4, "Aïe !", "#ff6b8a");
        S.lives <= 0 && over();
      } else {
        S.left = Math.max(0, S.left - 4);
        fx(o.x, o.y - o.sz * 1.4, "−4 s", "#ff6b8a");
      }
      S.shk = 0.25;
      return 1;
    }
    e.hp--;
    e.hit = 0.15;
    snd(k === "K" ? 260 : 520 + R() * 200, 0.06);
    if (e.hp > 0) {
      fx(o.x, o.y - o.sz * 1.3, k === "h" ? "Clang !" : "−1", "#dfe7ff");
      return 1;
    }
    e.st = "down";
    S.cb++;
    S.best = Math.max(S.best, S.cb);
    if (k === "t") {
      S.rk
        ? (add(100), fx(o.x, o.y - o.sz * 1.3, "+100", "#ffe08a"))
        : ((S.left += 5), fx(o.x, o.y - o.sz * 1.3, "+5 s", "#7dffb0"));
      snd(990, 0.12);
      return 1;
    }
    if (k === "f") {
      S.frz = 3.5;
      fx(o.x, o.y - o.sz * 1.3, "Gel !", "#9ad8ff");
      snd(1320, 0.18);
      return 1;
    }
    if (k === "m") {
      S.gold = 6;
      fx(o.x, o.y - o.sz * 1.3, "Marteau d’or !", "#ffd23a");
      snd(880, 0.2);
      return 1;
    }
    if (k === "p")
      for (let i = 0; i < 3; i++)
        S.INK.push({
          x: o.x + (R() - 0.5) * W * 0.5,
          y: o.y - o.sz + (R() - 0.5) * 120,
          r: 40 + R() * 40,
          l: 2.6,
        });
    const m = add(K[k][1]);
    S.cnt += K[k][3];
    S.done += K[k][3];
    boom(o.x, o.y - o.sz * 0.6, k === "g" ? "#ffd23a" : k === "K" ? "#ff3b5c" : "#ff8a5a");
    fx(o.x, o.y - o.sz * 1.4, "+" + K[k][1] * m + (m > 1 ? " ×" + m : ""), k === "g" ? "#ffd23a" : "#fff");
    if (k === "K") {
      snd(220, 0.4);
      S.shk = 0.35;
    }
    return 1;
  }
  function tap(x, y) {
    if (!S) return;
    if (S.state === "ready") {
      S.state = "play";
      ov("");
      return;
    }
    if (S.state !== "play") return;
    S.ML = { x, y, t: 0, g: S.gold > 0 };
    let bi = -1,
      bd = 1e9;
    S.HO.forEach((o, i) => {
      const dx = (x - o.x) / (o.rx * 1.15),
        dy = (y - (o.y - o.sz * 0.7)) / (o.sz * 1.25);
      const d = dx * dx + dy * dy;
      d < 1.25 && d < bd && ((bd = d), (bi = i));
    });
    const e = bi >= 0 && S.E.find((e) => e.h === bi && e.st !== "down" && e.up > 0.35);
    if (!e) {
      S.cb = 0;
      snd(120, 0.05);
      S.E.forEach((b) => {
        b.k === "b" && b.st !== "down" && (b.sh = 1.1);
      });
      return;
    }
    hitE(e, 1);
    if (S.gold > 0 && e.k !== "u") {
      S.gold--;
      const o = S.HO[bi];
      S.E.filter(
        (b) =>
          b !== e &&
          b.st !== "down" &&
          b.up > 0.35 &&
          b.k !== "u" &&
          Math.hypot(S.HO[b.h].x - o.x, S.HO[b.h].y - o.y) < (W / S.cols) * 1.6,
      ).forEach((b) => hitE(b, 0));
    }
    hud();
  }
  function step(dt) {
    S.t += dt;
    S.shk = Math.max(0, (S.shk || 0) - dt);
    const fr = S.frz > 0;
    fr && (S.frz -= dt);
    if (!S.rk && !fr) {
      S.left -= dt;
      if (S.left <= 0) {
        S.left = 0;
        return over();
      }
    }
    if (!fr) {
      S.sp -= dt;
      if (S.sp <= 0) {
        const n = dif(),
          c = Math.min(S.HO.length - 1, 1 + Math.floor(n / 6));
        S.E.filter((e) => e.st !== "down").length < c + 1 && spawn();
        S.sp = Math.max(0.32, 1 - n * 0.035) * (0.75 + R() * 0.5);
      }
      if (S.boss && S.cnt >= S.goal - 6 && !S.E.some((e) => e.k === "K") && !S.bossDone) {
        S.bossDone = 1;
        spawn("K");
      }
      if (S.rk && S.t > 40 && !S.E.some((e) => e.k === "K") && R() < dt / 25) spawn("K");
    }
    S.E.forEach((e) => {
      e.hit = Math.max(0, e.hit - dt);
      e.sh = Math.max(0, e.sh - dt);
      if (e.st === "up") {
        e.up = Math.min(1, e.up + dt * 7);
        e.up >= 1 && (e.st = "stay");
      } else if (e.st === "stay") {
        if (!fr) {
          e.ts -= dt;
          if (e.k === "K" && e.ts <= 0 && e.hp > 0) {
            const free = S.HO.map((_, i) => i).filter((i) => !S.E.some((b) => b.h === i));
            if (free.length) {
              e.h = free[Math.floor(R() * free.length)];
              e.up = 0;
              e.st = "up";
              e.ts = 0.85;
              return;
            }
          }
          if (e.hop && e.ts < 0.45) {
            const free = S.HO.map((_, i) => i).filter((i) => !S.E.some((b) => b.h === i));
            if (free.length) {
              e.hop = 0;
              e.h = free[Math.floor(R() * free.length)];
              e.up = 0;
              e.st = "up";
              e.ts = 0.7;
              snd(1100, 0.04);
              return;
            }
          }
          e.ts <= 0 && ((e.st = "down"), (e.esc = 1));
        }
      } else {
        e.up -= dt * 6;
      }
    });
    S.E = S.E.filter((e) => {
      if (e.up > 0) return !0;
      if (e.esc && K[e.k][3] && S.rk) {
        S.esc++;
        S.cb = 0;
        if (S.esc >= 5) {
          S.esc = 0;
          S.lives--;
          fx(W / 2, 80, "5 farceurs envolés : −1 vie", "#ff6b8a");
          snd(180, 0.3);
          S.lives <= 0 && over();
        }
      }
      return !1;
    });
    S.INK.forEach((i) => (i.l -= dt));
    S.INK = S.INK.filter((i) => i.l > 0);
    S.FX.forEach((f) => {
      f.t += dt;
      f.p && ((f.x += f.vx * dt), (f.y += f.vy * dt), (f.vy += 260 * dt));
    });
    S.FX = S.FX.filter((f) => f.t < (f.p ? 0.6 : 0.9));
    S.ML && ((S.ML.t += dt), S.ML.t > 0.22 && (S.ML = null));
    if (!S.rk && S.cnt >= S.goal && !S.E.some((e) => e.k === "K" && e.st !== "down")) win();
    hud();
  }
  function win() {
    S.state = "trans";
    const n = S.level,
      bonus = Math.round(S.left) * 5;
    S.score += bonus;
    [660, 880, 1320].forEach((f, i) => setTimeout(() => snd(f, 0.15), i * 90));
    S.level++;
    st.set("zc:lv", S.level);
    n > st.get("zc:best", 0) && st.set("zc:best", n);
    let g = 0;
    try {
      g = dmR(ID, Math.min(10, 1 + Math.floor(n / 3)));
      g && scrGain(g);
    } catch (e) {}
    ov(
      `<div class="zrot"><small>Niveau ${n} réussi !</small><b>${S.score} pts</b><span>Bonus temps +${bonus}${g ? " · +" + g + " 🫧" : ""}</span><div class="zrob"><button class="zrbig" data-a="zcNx">Niveau ${S.level}</button><button class="zrpill" data-a="zcQ">Retour</button></div></div>`,
    );
  }
  function over() {
    if (S.state === "over") return;
    S.state = "over";
    const K2 = S.rk ? "zc:rkb" : "zc:sb",
      b = st.get(K2, 0),
      rec = S.score > b;
    rec && st.set(K2, S.score);
    if (S.rk)
      try {
        infSave(ID, S.score);
      } catch (e) {}
    let g = 0;
    try {
      g = dmR(ID, Math.min(10, Math.floor(S.done / 8)));
      g && scrGain(g);
    } catch (e) {}
    snd(200, 0.4);
    ov(
      `<div class="zrot lose"><small>${S.rk ? "Mode Rank · " + Math.floor(S.t) + " s" : "Niveau " + S.level + " · " + S.cnt + "/" + S.goal}</small><b>${S.score} pts</b><span>${rec ? "Nouveau record !" : "Record : " + b + " pts"} · combo max ${S.best}${g ? " · +" + g + " 🫧" : ""}</span><div class="zrob"><button class="zrbig" data-a="${S.rk ? "zcRk" : "zcGo"}">${S.rk ? "Rejouer" : "Réessayer le niveau " + S.level}</button>${S.rk ? `<button class="zrpill" data-a="infBd" data-v="${ID}">Classement</button>` : ""}<button class="zrpill" data-a="zcQ">Retour</button></div></div>`,
    );
  }

  /* ---- dessin ---- */
  function crab(c, x, y, s, col, t, o) {
    const w = Math.sin(t * 8) * 0.15;
    c.fillStyle = col[0];
    c.strokeStyle = col[1];
    c.lineWidth = s * 0.07;
    [[-1], [1]].forEach(([d]) => {
      c.beginPath();
      c.moveTo(x + d * s * 0.55, y - s * 0.25);
      c.quadraticCurveTo(x + d * s * 0.95, y - s * 0.5, x + d * s * 0.85, y - s * (0.85 + w * d));
      c.stroke();
      c.beginPath();
      c.ellipse(x + d * s * 0.85, y - s * (0.95 + w * d), s * 0.24, s * 0.18, d * 0.5, 0, 7);
      c.fill();
      c.stroke();
      c.fillStyle = "#120618";
      c.beginPath();
      c.moveTo(x + d * s * 0.85, y - s * (0.95 + w * d));
      c.lineTo(x + d * s * 1.12, y - s * (1.1 + w * d));
      c.lineTo(x + d * s * 1.05, y - s * (0.9 + w * d));
      c.fill();
      c.fillStyle = col[0];
    });
    c.beginPath();
    c.ellipse(x, y - s * 0.1, s * 0.68, s * 0.5, 0, Math.PI, 0);
    c.lineTo(x + s * 0.68, y + s * 0.2);
    c.lineTo(x - s * 0.68, y + s * 0.2);
    c.closePath();
    c.fill();
    c.stroke();
    c.strokeStyle = col[1];
    c.lineWidth = s * 0.08;
    [-0.22, 0.22].forEach((d) => {
      c.beginPath();
      c.moveTo(x + d * s, y - s * 0.5);
      c.lineTo(x + d * s, y - s * 0.82);
      c.stroke();
      c.fillStyle = "#fff";
      c.beginPath();
      c.arc(x + d * s, y - s * 0.88, s * 0.13, 0, 7);
      c.fill();
      c.fillStyle = "#1a1030";
      c.beginPath();
      c.arc(x + d * s + s * 0.03, y - s * 0.86, s * 0.065, 0, 7);
      c.fill();
    });
    c.strokeStyle = "#4a1006";
    c.lineWidth = s * 0.06;
    c.beginPath();
    c.arc(x, y - s * 0.18, s * 0.16, 0.2, Math.PI - 0.2);
    c.stroke();
    if (o === "h") {
      c.fillStyle = "#b8c4dc";
      c.strokeStyle = "#5a6a8a";
      c.lineWidth = s * 0.06;
      c.beginPath();
      c.ellipse(x, y - s * 0.42, s * 0.62, s * 0.3, 0, Math.PI, 0);
      c.closePath();
      c.fill();
      c.stroke();
      c.fillStyle = "#fff";
      c.globalAlpha = 0.6;
      c.fillRect(x - s * 0.3, y - s * 0.66, s * 0.18, s * 0.08);
      c.globalAlpha = 1;
    }
    if (o === "K") {
      c.fillStyle = "#ffd23a";
      c.strokeStyle = "#a86a0a";
      c.lineWidth = s * 0.05;
      c.beginPath();
      c.moveTo(x - s * 0.4, y - s * 1.05);
      c.lineTo(x - s * 0.4, y - s * 1.4);
      c.lineTo(x - s * 0.2, y - s * 1.2);
      c.lineTo(x, y - s * 1.48);
      c.lineTo(x + s * 0.2, y - s * 1.2);
      c.lineTo(x + s * 0.4, y - s * 1.4);
      c.lineTo(x + s * 0.4, y - s * 1.05);
      c.closePath();
      c.fill();
      c.stroke();
    }
  }
  function urchin(c, x, y, s, t) {
    c.strokeStyle = "#c86aff";
    c.lineWidth = s * 0.08;
    for (let i = 0; i < 14; i++) {
      const a = Math.PI + (i / 13) * Math.PI + Math.sin(t * 6 + i) * 0.05;
      c.beginPath();
      c.moveTo(x + Math.cos(a) * s * 0.45, y - s * 0.2 + Math.sin(a) * s * 0.45);
      c.lineTo(x + Math.cos(a) * s * 0.95, y - s * 0.2 + Math.sin(a) * s * 0.95);
      c.stroke();
    }
    c.fillStyle = "#3a1460";
    c.beginPath();
    c.arc(x, y - s * 0.15, s * 0.55, Math.PI, 0);
    c.lineTo(x + s * 0.55, y + s * 0.2);
    c.lineTo(x - s * 0.55, y + s * 0.2);
    c.fill();
    c.fillStyle = "#ff3b5c";
    [-0.2, 0.2].forEach((d) => {
      c.beginPath();
      c.arc(x + d * s, y - s * 0.3, s * 0.08, 0, 7);
      c.fill();
    });
    c.strokeStyle = "#ff3b5c";
    c.lineWidth = s * 0.05;
    c.beginPath();
    c.moveTo(x - s * 0.32, y - s * 0.46);
    c.lineTo(x - s * 0.1, y - s * 0.38);
    c.moveTo(x + s * 0.32, y - s * 0.46);
    c.lineTo(x + s * 0.1, y - s * 0.38);
    c.stroke();
  }
  function octo(c, x, y, s, t) {
    c.fillStyle = "#ff6ad5";
    for (let i = 0; i < 5; i++) {
      const d = (i - 2) * 0.24;
      c.beginPath();
      c.moveTo(x + d * s - s * 0.08, y);
      c.quadraticCurveTo(
        x + d * s + Math.sin(t * 5 + i) * s * 0.2,
        y + s * 0.2,
        x + d * s + s * 0.05,
        y + s * 0.35,
      );
      c.lineTo(x + d * s + s * 0.1, y);
      c.fill();
    }
    c.beginPath();
    c.ellipse(x, y - s * 0.35, s * 0.5, s * 0.6, 0, 0, 7);
    c.fill();
    c.fillStyle = "#fff";
    [-0.18, 0.18].forEach((d) => {
      c.beginPath();
      c.arc(x + d * s, y - s * 0.4, s * 0.12, 0, 7);
      c.fill();
    });
    c.fillStyle = "#1a1030";
    [-0.18, 0.18].forEach((d) => {
      c.beginPath();
      c.arc(x + d * s, y - s * 0.38, s * 0.06, 0, 7);
      c.fill();
    });
    c.fillStyle = "#ffb0ea";
    c.globalAlpha = 0.6;
    c.beginPath();
    c.ellipse(x - s * 0.18, y - s * 0.72, s * 0.14, s * 0.08, -0.4, 0, 7);
    c.fill();
    c.globalAlpha = 1;
  }
  function shrimp(c, x, y, s, t) {
    c.strokeStyle = "#ff9a6a";
    c.lineCap = "round";
    c.lineWidth = s * 0.34;
    c.beginPath();
    c.arc(x, y - s * 0.3, s * 0.42, Math.PI * 0.9, Math.PI * 2.15);
    c.stroke();
    c.lineWidth = s * 0.05;
    c.strokeStyle = "#ffd0b0";
    c.beginPath();
    c.moveTo(x + s * 0.4, y - s * 0.5);
    c.quadraticCurveTo(x + s * 0.9, y - s * 1.1, x + s * 0.5, y - s * 1.2 + Math.sin(t * 9) * s * 0.05);
    c.moveTo(x + s * 0.35, y - s * 0.55);
    c.quadraticCurveTo(x + s * 0.7, y - s * 1.2, x + s * 0.2, y - s * 1.25);
    c.stroke();
    c.fillStyle = "#1a1030";
    c.beginPath();
    c.arc(x + s * 0.32, y - s * 0.45, s * 0.06, 0, 7);
    c.fill();
    c.lineCap = "butt";
  }
  function hermit(c, x, y, s, t, sh) {
    c.fillStyle = "#f2d0a0";
    c.strokeStyle = "#a8743a";
    c.lineWidth = s * 0.06;
    c.beginPath();
    c.moveTo(x - s * 0.65, y + s * 0.2);
    c.quadraticCurveTo(x - s * 0.6, y - s * 0.9, x + s * 0.1, y - s * 0.95);
    c.quadraticCurveTo(x + s * 0.7, y - s * 0.8, x + s * 0.6, y + s * 0.2);
    c.closePath();
    c.fill();
    c.stroke();
    c.beginPath();
    c.arc(x, y - s * 0.4, s * 0.32, 0, 7);
    c.moveTo(x + s * 0.15, y - s * 0.4);
    c.arc(x, y - s * 0.4, s * 0.15, 0, 7);
    c.stroke();
    if (sh) return;
    crab(c, x + s * 0.35, y + s * 0.05, s * 0.55, ["#ff8a5a", "#c04a2a"], t);
  }
  function badge(c, x, y, s, k, t) {
    const col = { t: "#7dffb0", f: "#9ad8ff", m: "#ffd23a" }[k],
      b = 1 + Math.sin(t * 6) * 0.06;
    c.save();
    c.translate(x, y - s * 0.4);
    c.scale(b, b);
    c.shadowColor = col;
    c.shadowBlur = 16;
    c.fillStyle = "#140a26";
    c.strokeStyle = col;
    c.lineWidth = 3;
    c.beginPath();
    c.arc(0, 0, s * 0.55, 0, 7);
    c.fill();
    c.stroke();
    c.shadowBlur = 0;
    c.fillStyle = col;
    c.font = "800 " + Math.round(s * 0.5) + "px " + MONO;
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillText(k === "t" ? "+5" : k === "f" ? "❄" : "★", 0, s * 0.03);
    c.restore();
    c.textBaseline = "alphabetic";
  }
  function drawK(c, e, x, y, s, t) {
    const k = e.k;
    e.hit > 0 && (c.globalAlpha = 0.55);
    k === "c"
      ? crab(c, x, y, s, ["#ff6a3d", "#b02a10"], t + e.ph)
      : k === "h"
        ? crab(c, x, y, s, ["#ff6a3d", "#b02a10"], t + e.ph, e.hp > 1 ? "h" : "")
        : k === "g"
          ? (crab(c, x, y, s, ["#ffd23a", "#b08010"], t + e.ph),
            (c.fillStyle = "#fff"),
            [0, 1, 2].forEach((i) => {
              const a = t * 4 + i * 2.1;
              c.fillRect(x + Math.cos(a) * s * 0.9 - 1.5, y - s * 0.4 + Math.sin(a) * s * 0.6 - 1.5, 3, 3);
            }))
          : k === "K"
            ? crab(c, x, y, s * 1.2, ["#ff3b5c", "#8a0a20"], t, "K")
            : k === "u"
              ? urchin(c, x, y, s, t)
              : k === "p"
                ? octo(c, x, y, s, t + e.ph)
                : k === "s"
                  ? shrimp(c, x, y, s, t)
                  : k === "b"
                    ? hermit(c, x, y, s, t + e.ph, e.sh > 0)
                    : badge(c, x, y, s, k, t);
    c.globalAlpha = 1;
  }
  let BG = null;
  function bg() {
    const b = document.createElement("canvas");
    b.width = W;
    b.height = H;
    const c = b.getContext("2d"),
      g = c.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#1a0630");
    g.addColorStop(0.35, "#3a0f4a");
    g.addColorStop(1, "#1a0a18");
    c.fillStyle = g;
    c.fillRect(0, 0, W, H);
    c.strokeStyle = "rgba(255,106,213,.18)";
    c.lineWidth = 1;
    const hz = 96;
    for (let i = 0; i <= 16; i++) {
      c.beginPath();
      c.moveTo(W / 2 + (i - 8) * W * 0.04, hz);
      c.lineTo(W / 2 + (i - 8) * W * 0.22, H);
      c.stroke();
    }
    for (let i = 0; i < 12; i++) {
      const y = hz + (H - hz) * Math.pow(i / 11, 1.8);
      c.beginPath();
      c.moveTo(0, y);
      c.lineTo(W, y);
      c.stroke();
    }
    c.fillStyle = "#120418";
    c.fillRect(0, 0, W, 58);
    c.strokeStyle = "#ffb347";
    c.shadowColor = "#ffb347";
    c.shadowBlur = 10;
    c.lineWidth = 2;
    c.strokeRect(6, 6, W - 12, 46);
    c.shadowBlur = 0;
    return b;
  }
  function draw(t) {
    const c = CX;
    if (!c) return;
    if (!BG || BG.width !== W || BG.height !== H) BG = bg();
    c.save();
    S.shk > 0 && c.translate((R() - 0.5) * 8, (R() - 0.5) * 8);
    c.drawImage(BG, 0, 0, W, H);
    const ts = t / 1e3;
    for (let i = 0; i < Math.floor((W - 24) / 16); i++) {
      const on = (Math.floor(ts * 6) + i) % 3 === 0;
      c.fillStyle = on ? "#ffe08a" : "#5a3a1a";
      c.beginPath();
      c.arc(16 + i * 16, 8, 2.4, 0, 7);
      c.fill();
      c.beginPath();
      c.arc(16 + i * 16, 50, 2.4, 0, 7);
      c.fill();
    }
    c.font = "800 18px " + MONO;
    c.textAlign = "center";
    c.fillStyle = "#ffb347";
    c.shadowColor = "#ff6ad5";
    c.shadowBlur = 12;
    c.fillText("CRABES FARCEURS", W / 2, 36);
    c.shadowBlur = 0;
    S.amb.forEach((p) => {
      p.y -= p.v * 0.016;
      p.y < 0.12 && (p.y = 1);
      c.globalAlpha = 0.3 + 0.3 * Math.sin(ts * 2 + p.x * 40);
      c.fillStyle = p.c;
      c.fillRect(p.x * W, p.y * H, 2, 2);
    });
    c.globalAlpha = 1;
    /* barre chrono / objectif */
    c.font = "800 11px " + MONO;
    c.textAlign = "left";
    if (!S.rk) {
      const f = Math.max(0, S.left / S.time);
      c.fillStyle = "rgba(255,255,255,.12)";
      c.fillRect(12, 66, W - 24, 8);
      c.fillStyle = f < 0.25 ? "#ff3b5c" : S.frz > 0 ? "#9ad8ff" : "#7dffb0";
      c.fillRect(12, 66, (W - 24) * Math.min(1, f), 8);
      c.fillStyle = "#ffe08a";
      c.fillText("OBJECTIF " + Math.min(S.cnt, S.goal) + "/" + S.goal, 12, 90);
      c.textAlign = "right";
      c.fillText(Math.ceil(S.left) + " s", W - 12, 90);
    } else {
      c.fillStyle = "#ffe08a";
      c.fillText("ÉCHAPPÉS " + S.esc + "/5", 12, 82);
      c.textAlign = "right";
      c.fillText("VITESSE ×" + dif().toFixed(1), W - 12, 82);
    }
    const m = Math.min(4, 1 + Math.floor(S.cb / 5));
    if (S.cb > 1) {
      c.textAlign = "center";
      c.fillStyle = m > 1 ? "#ffd23a" : "#fff";
      c.font = "800 " + (12 + m * 2) + "px " + MONO;
      c.fillText("COMBO " + S.cb + (m > 1 ? " ×" + m : ""), W / 2, S.rk ? 82 : 90);
    }
    S.HO.forEach((o, i) => {
      c.fillStyle = "#0c0310";
      c.beginPath();
      c.ellipse(o.x, o.y, o.rx, o.ry, 0, 0, 7);
      c.fill();
      c.strokeStyle = "rgba(255,179,71,.5)";
      c.lineWidth = 2;
      c.shadowColor = "#ffb347";
      c.shadowBlur = 8;
      c.beginPath();
      c.ellipse(o.x, o.y, o.rx, o.ry, 0, Math.PI, 0);
      c.stroke();
      c.shadowBlur = 0;
      const e = S.E.find((e) => e.h === i);
      if (e && e.up > 0) {
        const s = o.sz,
          y = o.y + s * 0.35 - e.up * s * (e.k === "K" ? 1.35 : 1.15);
        c.save();
        c.beginPath();
        c.rect(o.x - o.rx * 1.6, 0, o.rx * 3.2, o.y);
        c.ellipse(o.x, o.y, o.rx, o.ry, 0, 0, Math.PI);
        c.clip();
        drawK(c, e, o.x, y, s, ts);
        if (e.k === "K") {
          c.fillStyle = "rgba(255,255,255,.2)";
          c.fillRect(o.x - s, y - s * 1.75, s * 2, 5);
          c.fillStyle = "#ff3b5c";
          c.fillRect(o.x - s, y - s * 1.75, (s * 2 * e.hp) / K.K[2], 5);
        }
        c.restore();
      }
      c.strokeStyle = "#ffb347";
      c.lineWidth = 3;
      c.shadowColor = "#ffb347";
      c.shadowBlur = 10;
      c.beginPath();
      c.ellipse(o.x, o.y, o.rx, o.ry, 0, 0, Math.PI);
      c.stroke();
      c.shadowBlur = 0;
    });
    S.INK.forEach((i) => {
      c.globalAlpha = Math.min(0.92, i.l * 0.6);
      c.fillStyle = "#14061e";
      for (let k = 0; k < 6; k++) {
        const a = k * 1.05;
        c.beginPath();
        c.arc(i.x + Math.cos(a) * i.r * 0.45, i.y + Math.sin(a) * i.r * 0.35, i.r * 0.6, 0, 7);
        c.fill();
      }
      c.globalAlpha = 1;
    });
    S.FX.forEach((f) => {
      const a = f.t / (f.p ? 0.6 : 0.9);
      c.globalAlpha = 1 - a;
      if (f.p) {
        c.fillStyle = f.c;
        c.fillRect(f.x - 2, f.y - 2, 4, 4);
      } else {
        c.fillStyle = f.c;
        c.font = "800 15px " + MONO;
        c.textAlign = "center";
        c.fillText(f.txt, Math.max(50, Math.min(W - 50, f.x)), f.y - a * 26);
      }
      c.globalAlpha = 1;
    });
    if (S.ML) {
      const l = S.ML,
        a = l.t / 0.22,
        r = -0.9 + Math.sin(Math.min(1, a * 2) * Math.PI) * 1.1;
      c.save();
      c.translate(l.x + 18, l.y - 10);
      c.rotate(r);
      c.fillStyle = "#a86a3a";
      c.fillRect(-3, -4, 6, 40);
      c.fillStyle = l.g ? "#ffd23a" : "#ff6ad5";
      c.shadowColor = c.fillStyle;
      c.shadowBlur = 10;
      c.beginPath();
      c.roundRect(-20, -18, 40, 18, 5);
      c.fill();
      c.shadowBlur = 0;
      c.restore();
      if (a < 0.5) {
        c.strokeStyle = "rgba(255,255,255," + (1 - a * 2) + ")";
        c.lineWidth = 3;
        c.beginPath();
        c.arc(l.x, l.y, 10 + a * 40, 0, 7);
        c.stroke();
      }
    }
    if (S.frz > 0) {
      c.fillStyle = "rgba(140,200,255,.12)";
      c.fillRect(0, 0, W, H);
    }
    if (S.gold > 0) {
      c.font = "800 11px " + MONO;
      c.textAlign = "left";
      c.fillStyle = "#ffd23a";
      c.fillText("MARTEAU D’OR ×" + S.gold, 12, H - 14);
    }
    c.fillStyle = "rgba(0,0,0,.12)";
    for (let y = 0; y < H; y += 3) c.fillRect(0, y, W, 1);
    c.restore();
  }
  function loop(t) {
    if (!S || !$("#zcc")) return stop();
    RAF = requestAnimationFrame(loop);
    const dt = Math.min(0.05, (t - (LT || t)) / 1e3);
    LT = t;
    S.state === "play" && step(dt);
    draw(t);
  }
  let BD = 0;
  function bind() {
    if (BD) return;
    BD = 1;
    addEventListener(
      "pointerdown",
      (e) => {
        if (!S || !e.target.closest || !e.target.closest(".zcbox") || e.target.closest("button")) return;
        e.cancelable && e.preventDefault();
        const r = CV.getBoundingClientRect();
        tap((e.clientX - r.left) / PKc, (e.clientY - r.top) / PKc);
      },
      { passive: !1 },
    );
    addEventListener("resize", () => {
      S && $("#zcc") && (size(), (BG = null));
    });
  }

  /* ---- almanach ---- */
  const ICO = {};
  const ico = (k) => {
    if (ICO[k]) return ICO[k];
    const cv = document.createElement("canvas");
    cv.width = cv.height = 96;
    const c = cv.getContext("2d");
    c.fillStyle = "#2a0f3a";
    c.fillRect(0, 0, 96, 96);
    drawK(c, { k, hp: K[k][2], ph: 0, sh: 0, hit: 0 }, 48, 72, 30, 0.3);
    return (ICO[k] =
      `<img src="${cv.toDataURL()}" alt="" style="width:100%;height:100%;border-radius:10px">`);
  };
  try {
    window.ALMA &&
      (ALMA[ID] = {
        n: NAME,
        lv: () => Math.max(st.get("zc:lv", 1), st.get("zc:best", 0) + 1),
        S: [
          [
            "Farceurs",
            ["c", "h", "g", "s", "p", "b", "K"].map((k) => [() => ico(k), K[k][0], K[k][4], K[k][5]]),
          ],
          ["À éviter", [[() => ico("u"), K.u[0], K.u[4], K.u[5]]]],
          ["Bonus", ["t", "f", "m"].map((k) => [() => ico(k), K[k][0], K[k][4], K[k][5]])],
        ],
      });
  } catch (e) {}

  setTimeout(() => {
    Object.assign(act, {
      zcGo: () => start(0),
      zcRk: () => start(1),
      zcNx: () => {
        if (!S) return;
        level();
        S.state = "play";
        ov("");
        hud();
      },
      zcQ: () => {
        stop();
        act.open(ID);
      },
      zcShX: () => {
        const d = $("#vzsh");
        d && d.remove();
      },
      zcRu: () => {
        if (window.rulesOpen && rulesOpen(ID)) return;
        sheet("Les règles", `<p class="note" style="margin:0">${G0.s}</p>`);
      },
    });
    const _h = home;
    home = function () {
      stop();
      return _h.apply(this, arguments);
    };
  }, 95);
  window.ZCDBG = () => S;
})();
