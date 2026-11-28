// Billard : jeu (BI…biHub), contrôles via Input
const BI = {
  W: 1000,
  H: 2000,
  R: 22.5,
  g: 7720,
  mus: 0.2,
  mur: 0.011,
  eb: 0.95,
  ec: 0.78,
  mubb: 0.06,
  cg: 60,
  sg: 54,
  pr: 40,
};
BI.COL = [
  "#f4f1e6",
  "#f2c21a",
  "#1f4fb8",
  "#d8282e",
  "#5a2a8a",
  "#ee7a1a",
  "#1f8a4a",
  "#7a1a22",
  "#15151a",
  "#f2c21a",
  "#1f4fb8",
  "#d8282e",
  "#5a2a8a",
  "#ee7a1a",
  "#1f8a4a",
  "#7a1a22",
];
BI.PK = [
  [-6, -6, 54],
  [1006, -6, 54],
  [-22, 1000, 52],
  [1022, 1000, 52],
  [-6, 2006, 54],
  [1006, 2006, 54],
];
let BG = null;
let BIO = !1;
const BISK = {
  std: {
    n: "Classique",
    r: ["#5a2e14", "#8a4a22", "#4a2410"],
    tr: "rgba(255,220,170,.25)",
    cu: "#1d5a3a",
    f: ["#2fa063", "#1d7448"],
    dm: "#f4e8c8",
    pk: "#3a2a1a",
    gold: 0,
    cue: ["#f4dcb0", "#c8904a", "#7a4a1a"],
    butt: "#1a1a1a",
    ring: "#2a6ab0",
  },
  roy: {
    n: "Royale",
    p: 400,
    r: ["#1a0a10", "#4a1424", "#12060a"],
    tr: "#e8c060",
    cu: "#14204a",
    f: ["#2c4aa8", "#121c52"],
    dm: "#ffd86a",
    pk: "#c8962a",
    gold: 1,
    cue: ["#3a2a20", "#1a120c", "#050302"],
    butt: "#c8962a",
    ring: "#ffd86a",
  },
};
const biSk = () => BISK[st.get("bi:skin", "std")] || BISK.std;
function biSegs() {
  const { W, H, cg, sg } = BI;
  return [
    [cg, 0, W - cg, 0, 0, 1],
    [cg, H, W - cg, H, 0, -1],
    [0, cg, 0, 1e3 - sg, 1, 0],
    [0, 1e3 + sg, 0, H - cg, 1, 0],
    [W, cg, W, 1e3 - sg, -1, 0],
    [W, 1e3 + sg, W, H - cg, -1, 0],
  ];
}
BI.S = biSegs();
function biRot(q, ax, ay, ang) {
  const c = Math.cos(ang),
    s = Math.sin(ang),
    [x, y, z] = q,
    d = ax * x + ay * y;
  const cx = ay * z,
    cy = -ax * z,
    cz = ax * y - ay * x;
  return [x * c + cx * s + ax * d * (1 - c), y * c + cy * s + ay * d * (1 - c), z * c + cz * s];
}
function biRack() {
  const { R } = BI,
    b = [];
  b.push({ n: 0, x: 500, y: 500, vx: 0, vy: 0, sx: 0, sy: 0, w: 0, in: !1, q: [0, 0, 1] });
  const ord = [1, 9, 2, 10, 8, 3, 11, 4, 12, 13, 5, 14, 6, 15, 7],
    rows = [[1], [9, 2], [10, 8, 3], [11, 4, 12, 5], [13, 6, 14, 15, 7]];
  const pool = [2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15].sort(() => Math.random() - 0.5),
    sol = pool.filter((e) => e < 8),
    str = pool.filter((e) => e > 8);
  const L = [[1], [0, 0], [0, 8, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]];
  L[4][0] = str.pop();
  L[4][4] = sol.pop();
  const rest = sol.concat(str).sort(() => Math.random() - 0.5);
  L.forEach((r) =>
    r.forEach((v, i) => {
      if (!v) r[i] = rest.pop();
    }),
  );
  const dy = R * 2 * Math.sin(Math.PI / 3) + 0.15;
  L.forEach((r, ri) =>
    r.forEach((n, ci) => {
      const x = 500 + (ci - ri / 2) * (2 * R + 0.3) + (Math.random() - 0.5) * 0.25,
        y = 1500 + ri * dy;
      const a = Math.random() * 6.3,
        z = Math.random() * 2 - 1,
        k = Math.sqrt(1 - z * z);
      b.push({ n, x, y, vx: 0, vy: 0, sx: 0, sy: 0, w: 0, in: !1, q: [k * Math.cos(a), k * Math.sin(a), z] });
    }),
  );
  return b.sort((a, c) => a.n - c.n);
}
function biNew(mode, lv) {
  BG = {
    mode,
    lv: lv || 0,
    b: biRack(),
    turn: 0,
    grp: [0, 0],
    st: "place",
    brk: !0,
    aim: Math.PI / 2,
    pow: 0,
    sp: [0, 0],
    msg: "",
    shot: null,
    over: -1,
    hand: !0,
    head: !0,
    moving: !1,
    ai: 0,
    guide: st.get("bi:guide", 2),
    pk: [],
  };
  if (mode === "free") {
    BG.st = "aim";
    BG.hand = !1;
    BG.brk = !1;
  }
  BG.aim = biAimAt(500, 1500);
  biAimFix();
}
function biAimAt(x, y) {
  const c = BG.b[0];
  return Math.atan2(y - c.y, x - c.x);
}
function biAimFix() {}
const biCue = () => BG.b[0];
const biOn = () => BG.b.filter((e) => !e.in);
function biType(n) {
  return n === 0 ? 0 : n === 8 ? 8 : n < 8 ? 1 : 2;
}
function biStep(dt) {
  const { R, g, mus, mur, eb, ec, W, H } = BI,
    B = BG.b,
    ev = BG.shot;
  let moving = !1;
  for (const b of B) {
    if (b.in) continue;
    const v = Math.hypot(b.vx, b.vy),
      ux = b.vx - b.sx,
      uy = b.vy - b.sy,
      u = Math.hypot(ux, uy);
    if (u > 2) {
      const a = mus * g * dt,
        k = Math.min(1, u / (3.5 * a)) * a;
      ((b.vx -= (ux / u) * k), (b.vy -= (uy / u) * k));
      ((b.sx += (ux / u) * 2.5 * k), (b.sy += (uy / u) * 2.5 * k));
      moving = !0;
    } else if (v > 0) {
      const a = mur * g * dt;
      if (v <= a) {
        b.vx = b.vy = b.sx = b.sy = 0;
      } else {
        ((b.vx -= (b.vx / v) * a), (b.vy -= (b.vy / v) * a));
        ((b.sx = b.vx), (b.sy = b.vy));
      }
      moving = !0;
    }
    b.w *= Math.exp(-dt * 0.9);
    if (Math.abs(b.w) < 0.05) b.w = 0;
    const sp = Math.hypot(b.sx, b.sy);
    if (sp > 0) {
      b.q = biRot(b.q, -b.sy / sp, b.sx / sp, (sp * dt) / R);
    }
    ((b.x += b.vx * dt), (b.y += b.vy * dt));
  }
  for (let i = 0; i < B.length; i++) {
    const a = B[i];
    if (a.in) continue;
    for (let j = i + 1; j < B.length; j++) {
      const b = B[j];
      if (b.in) continue;
      let dx = b.x - a.x,
        dy = b.y - a.y;
      const d2 = dx * dx + dy * dy;
      if (d2 >= 4 * R * R || d2 === 0) continue;
      const d = Math.sqrt(d2),
        nx = dx / d,
        ny = dy / d,
        ov = 2 * R - d;
      ((a.x -= (nx * ov) / 2), (a.y -= (ny * ov) / 2), (b.x += (nx * ov) / 2), (b.y += (ny * ov) / 2));
      const rv = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny;
      if (rv <= 0) continue;
      const jn = ((1 + eb) / 2) * rv;
      ((a.vx -= jn * nx), (a.vy -= jn * ny), (b.vx += jn * nx), (b.vy += jn * ny));
      const tx = -ny,
        ty = nx,
        rt = (a.vx - b.vx) * tx + (a.vy - b.vy) * ty + R * (a.w + b.w) * 0.02,
        jt = Math.max(-BI.mubb * jn, Math.min(BI.mubb * jn, rt / 7));
      ((a.vx -= jt * tx), (a.vy -= jt * ty), (b.vx += jt * tx), (b.vy += jt * ty));
      if (ev) {
        if (ev.first < 0 && (a.n === 0 || b.n === 0)) ev.first = a.n === 0 ? b.n : a.n;
        if (ev.first >= 0) ev.touch = !0;
      }
      biClack(rv);
    }
  }
  for (const b of B) {
    if (b.in) continue;
    for (const p of BI.PK) {
      const dx = b.x - p[0],
        dy = b.y - p[1];
      if (dx * dx + dy * dy < p[2] * p[2]) {
        b.in = !0;
        b.vx = b.vy = b.sx = b.sy = 0;
        b.drop = { x: b.x, y: b.y, px: p[0], py: p[1], t: 0 };
        BG.pk.push(b.n);
        ev && ev.pot.push(b.n);
        biThud();
        break;
      }
    }
    if (b.in) continue;
    for (const s of BI.S) {
      const [x1, y1, x2, y2, nx, ny] = s;
      const t = Math.max(
          0,
          Math.min(1, ((b.x - x1) * (x2 - x1) + (b.y - y1) * (y2 - y1)) / ((x2 - x1) ** 2 + (y2 - y1) ** 2)),
        ),
        cx = x1 + t * (x2 - x1),
        cy = y1 + t * (y2 - y1);
      let dx = b.x - cx,
        dy = b.y - cy;
      const d = Math.hypot(dx, dy);
      if (d >= R) continue;
      let mx, my;
      if (t > 0 && t < 1) {
        ((mx = nx), (my = ny));
      } else {
        ((mx = dx / (d || 1)), (my = dy / (d || 1)));
      }
      ((b.x += mx * (R - d + 0.01)), (b.y += my * (R - d + 0.01)));
      const vn = b.vx * mx + b.vy * my;
      if (vn >= 0) continue;
      const sp = Math.abs(vn),
        e = Math.max(0.58, ec - sp / 9000),
        tx = -my,
        ty = mx;
      let vt = b.vx * tx + b.vy * ty;
      vt -= b.w * R * 0.18 * Math.min(1, sp / 600);
      b.w *= 0.55;
      ((b.vx = -vn * e * mx + vt * tx), (b.vy = -vn * e * my + vt * ty));
      const sn = b.sx * mx + b.sy * my,
        st2 = b.sx * tx + b.sy * ty;
      ((b.sx = -sn * 0.5 * mx + st2 * 0.8 * tx), (b.sy = -sn * 0.5 * my + st2 * 0.8 * ty));
      if (ev) {
        ev.rail++;
        if (ev.first >= 0) ev.railAfter = !0;
        ev.rb.add(b.n);
      }
      biCush(sp);
    }
  }
  return moving;
}
function biNoise(f, v, d) {
  try {
    if (!AC || !mg || !prefs().sfx) return;
    const n = AC.currentTime,
      len = Math.max(1, Math.floor(AC.sampleRate * d)),
      buf = AC.createBuffer(1, len, AC.sampleRate),
      c = buf.getChannelData(0);
    for (let i = 0; i < len; i++) c[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 6);
    const s = AC.createBufferSource(),
      fl = AC.createBiquadFilter(),
      g = AC.createGain();
    s.buffer = buf;
    fl.type = "bandpass";
    fl.frequency.value = f;
    fl.Q.value = 3;
    g.gain.value = Math.min(1, v);
    s.connect(fl).connect(g).connect(mg);
    s.start(n);
  } catch (e) {}
}
let biLc = 0;
function biClack(v) {
  const t = performance.now();
  if (t - biLc < 18) return;
  biLc = t;
  biNoise(2600 + Math.random() * 600, Math.min(0.9, v / 2500) + 0.05, 0.05);
}
function biCush(v) {
  biNoise(380, Math.min(0.6, v / 3000) + 0.03, 0.08);
}
function biThud() {
  biNoise(220, 0.5, 0.18);
  setTimeout(() => biNoise(160, 0.3, 0.12), 90);
}
function biStrike(p, cb) {
  BG.st = "strike";
  const t0 = performance.now(),
    D = 60 + p * 70,
    an = () => {
      if (!BG || BG.st !== "strike") return;
      const k = Math.min(1, (performance.now() - t0) / D);
      BG.pow = p * (1 - k * k);
      biDraw();
      if (k < 1) requestAnimationFrame(an);
      else {
        BG.pow = 0;
        cb();
      }
    };
  an();
}
function biShoot(pow, aim, sp) {
  BG.mode === "online" &&
    !BG.rp &&
    (BG.on.sh = {
      a: +aim.toFixed(4),
      pw: +pow.toFixed(3),
      sp: [+sp[0].toFixed(3), +sp[1].toFixed(3)],
      brk: BG.brk ? 1 : 0,
      pb: BG.b.map(biArr),
    });
  const c = biCue(),
    V = 120 + pow * 4650,
    dx = Math.cos(aim),
    dy = Math.sin(aim);
  ((c.vx = V * dx), (c.vy = V * dy));
  const top = sp[1];
  ((c.sx = c.vx * 1.25 * top), (c.sy = c.vy * 1.25 * top));
  c.w = (2.5 * (sp[0] * 0.5) * V) / BI.R;
  if (Math.abs(sp[0]) > 0.05) {
    const sq = -sp[0] * 0.035 * Math.min(1, pow * 1.5);
    ((c.vx = V * Math.cos(aim + sq)), (c.vy = V * Math.sin(aim + sq)));
  }
  BG.hand = !1;
  BG.shot = { first: -1, pot: [], rail: 0, railAfter: !1, touch: !1, rb: new Set(), brk: BG.brk };
  BG.st = "moving";
  BG.pow = 0;
  biNoise(1500, 0.25 + pow * 0.5, 0.04);
  vib(12);
}
function biLeft(t) {
  return BG.b.filter((b) => !b.in && biType(b.n) === t).length;
}
function biEval() {
  BG.msg = "";
  const s = BG.shot,
    P = BG.turn,
    O = 1 - P,
    mine = BG.grp[P];
  BG.shot = null;
  if (BG.mode === "free") {
    if (biCue().in) biRespot();
    BG.st = "aim";
    BG.msg = "";
    return biDraw();
  }
  const scratch = s.pot.includes(0),
    pot8 = s.pot.includes(8),
    objs = s.pot.filter((n) => n && n !== 8);
  let foul = "";
  if (s.first < 0) foul = "Aucune bille touchée";
  else if (mine && biType(s.first) !== mine && !(biType(s.first) === 8 && biLeft(mine) === 0))
    foul = "Il fallait toucher d’abord ses propres billes";
  else if (!mine && s.first === 8 && !s.brk) foul = "La 8 ne peut pas être touchée en premier";
  if (scratch) foul = "Bille blanche empochée";
  if (!foul && !s.pot.length && !s.railAfter && !s.brk) foul = "Aucune bande touchée après le contact";
  if (s.brk && !foul && !s.pot.length && s.rb.size < 4) {
    BG.msg = "Casse trop faible : à l’adversaire.";
  }
  if (pot8) {
    const was = mine && biLeft(mine) === 0 && !objs.some((n) => biType(n) === mine);
    if (s.brk && !scratch) {
      biRespot8();
      BG.msg = "La 8 est tombée à la casse : elle est replacée.";
    } else {
      const win = !foul && mine && biLeft(mine) === 0;
      return biEnd(
        win ? P : O,
        win
          ? "La 8 dans la poche !"
          : "La 8 est tombée trop tôt" + (foul ? " (" + foul.toLowerCase() + ")" : "") + ".",
      );
    }
  }
  if (!mine && !foul && objs.length && !s.brk) {
    const t = biType(objs[0]);
    BG.grp[P] = t;
    BG.grp[O] = 3 - t;
    BG.msg = (biSelf(P) ? "Tu joues les " : biNm(P) + " joue les ") + (t === 1 ? "pleines" : "rayées") + ".";
  }
  const m2 = BG.grp[P];
  const keep = !foul && objs.length && (m2 ? objs.some((n) => biType(n) === m2) : !0);
  BG.brk = !1;
  if (foul) {
    BG.msg =
      "Faute" +
      (BG.mode === "ai" && P ? " de l’ordinateur" : "") +
      " : " +
      foul.toLowerCase() +
      ". Bille en main pour " +
      (BG.mode === "ai" && !O ? "toi" : biNm(O)) +
      ".";
    BG.turn = O;
    if (scratch || biCue().in) biRespot();
    BG.hand = !0;
    BG.head = !1;
    BG.st = "place";
    biVib();
  } else if (keep) {
    BG.st = "aim";
    if (!BG.msg) BG.msg = biSelf(P) ? "Tu continues." : biNm(P) + " continue.";
  } else {
    BG.turn = O;
    BG.st = "aim";
    if (!BG.msg) BG.msg = biSelf(O) ? "À toi de jouer." : "Au tour de " + biNm(O) + ".";
  }
  biAfter();
}
function biCap(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
function biVib() {
  vib([20, 40, 20]);
}
function biRespot() {
  const c = biCue();
  c.in = !1;
  c.drop = null;
  c.vx = c.vy = c.sx = c.sy = c.w = 0;
  c.x = 500;
  c.y = 500;
  let k = 0;
  while (biOverlap(c) && k++ < 60) c.y += 12;
}
function biRespot8() {
  const b = BG.b[8];
  b.in = !1;
  b.drop = null;
  b.x = 500;
  b.y = 1500;
  let k = 0;
  while (biOverlap(b) && k++ < 60) b.y += 10;
  BG.pk = BG.pk.filter((n) => n !== 8);
}
function biOverlap(c) {
  return BG.b.some((b) => b !== c && !b.in && Math.hypot(b.x - c.x, b.y - c.y) < 2 * BI.R);
}
function biNm(p) {
  return BG.mode === "libre"
    ? "toi"
    : BG.mode === "ai"
      ? p
        ? "l’ordinateur"
        : "toi"
      : BG.mode === "online"
        ? p === BG.on.me
          ? "toi"
          : scrNm(BG.on.opp)
        : "Joueur " + (p + 1);
}
const biSelf = (p) => (BG.mode === "ai" ? p === 0 : BG.mode === "online" ? p === BG.on.me : !1);
const biOpp = () =>
  !!BG && ((BG.mode === "ai" && BG.turn === 1) || (BG.mode === "online" && BG.turn !== BG.on.me));
const biPN = (p) =>
  BG.mode === "libre"
    ? "Toi"
    : BG.mode === "ai"
      ? p
        ? "Ordinateur"
        : "Toi"
      : BG.mode === "online"
        ? p === BG.on.me
          ? "Toi"
          : scrNm(BG.on.opp)
        : "Joueur " + (p + 1);
function biEnd(w, txt) {
  if (BG.mode === "libre") {
    BG.b = biRack();
    BG.turn = 0;
    BG.grp = [0, 0];
    BG.st = "place";
    BG.brk = !0;
    BG.hand = !0;
    BG.head = !0;
    BG.over = -1;
    BG.msg = "Nouvelle partie !";
    biDraw();
    biUI();
    return;
  }
  BG.over = w;
  BG.st = "over";
  BG.msg = txt;
  BG.mode === "online" && !BG.nopub && biPub();
  let rw = 0;
  if (BG.mode === "online" && biSelf(w) && st.get("bi:paid") !== BG.on.id) {
    st.set("bi:paid", BG.on.id);
    rw = 3;
    fl += rw;
    st.set("fl", fl);
  }
  if (BG.mode === "ai" && w === 0) {
    rw = dmR("billard", [2, 4, 7][BG.lv]);
    fl += rw;
    st.set("fl", fl);
    const s = st.get("bi:w", [0, 0, 0]);
    s[BG.lv]++;
    st.set("bi:w", s);
  }
  biDraw();
  biUI();
  setTimeout(() => {
    const o = $("#biov");
    if (!o) return;
    o.hidden = !1;
    o.innerHTML = `<div><b>${BG.mode === "ai" || BG.mode === "online" ? (biSelf(w) ? "Victoire !" : "Défaite") : biNm(w) + " gagne !"}</b><p>${esc(biCap(txt))}${rw ? " +" + rw + " 🫧" : ""}</p><div class="chrow"><button class="btn" data-a="biAgain">Rejouer</button><button class="btn alt" data-a="biBk">Menu</button></div></div>`;
    [523, 659, 784].forEach((e, t) =>
      setTimeout(() => (w === 0 || BG.mode !== "ai" ? sfx(e, 0.5) : 0), 180 * t),
    );
  }, 900);
}
function biAfter() {
  BG.mode === "libre" && (BG.turn = 0);
  biUI();
  biDraw();
  BG.mode === "online" && biPub();
  if (BG.mode === "ai" && BG.turn === 1 && BG.st !== "over") setTimeout(biAI, 700);
}
function biClear(x1, y1, x2, y2, skip) {
  const dx = x2 - x1,
    dy = y2 - y1,
    L = Math.hypot(dx, dy) || 1;
  for (const b of BG.b) {
    if (b.in || skip.includes(b)) continue;
    const t = ((b.x - x1) * dx + (b.y - y1) * dy) / (L * L);
    if (t < 0 || t > 1) continue;
    if (Math.hypot(x1 + t * dx - b.x, y1 + t * dy - b.y) < 2 * BI.R - 0.5) return !1;
  }
  return !0;
}
function biAI() {
  if (!BG || BG.st === "over" || BG.turn !== 1) return;
  const c = biCue(),
    R = BI.R,
    lv = BG.lv;
  if (BG.st === "place") {
    let best = null;
    for (let k = 0; k < 60; k++) {
      const x = 80 + Math.random() * 840,
        y = 80 + Math.random() * 1840;
      c.x = x;
      c.y = y;
      if (biOverlap(c)) continue;
      const s = biPlan();
      if (s && (!best || s.sc > best.sc)) best = { ...s, x, y };
    }
    if (best) {
      c.x = best.x;
      c.y = best.y;
    } else biRespot();
    BG.st = "aim";
    BG.hand = !1;
  }
  const pl = biPlan();
  let aim,
    pow,
    sp = [0, 0];
  if (BG.brk) {
    aim = biAimAt(500 + (Math.random() - 0.5) * 8, 1500);
    pow = 0.92 + Math.random() * 0.08;
  } else if (pl) {
    aim = pl.a;
    pow = Math.min(0.95, 0.18 + pl.d / 2600);
    sp = [(Math.random() - 0.5) * 0.2, lv ? (Math.random() - 0.55) * 0.6 : 0];
  } else {
    const t = biTargets(),
      tg =
        t.sort((a, b) => Math.hypot(a.x - c.x, a.y - c.y) - Math.hypot(b.x - c.x, b.y - c.y))[0] ||
        BG.b.find((b) => !b.in && b.n);
    aim = biAimAt(tg.x, tg.y);
    pow = 0.35;
  }
  const err = [0.05, 0.022, 0.007][lv] * (Math.random() * 2 - 1);
  aim += err;
  BG.aim = aim;
  BG.sp = sp;
  BG.st = "aiaim";
  biUI();
  let t0 = performance.now();
  const an = () => {
    if (!BG || BG.st !== "aiaim") return;
    const k = Math.min(1, (performance.now() - t0) / 900);
    BG.pow = pow * (k < 0.6 ? k / 0.6 : 1 - ((k - 0.6) / 0.4) * 0.0);
    biDraw();
    if (k < 1) requestAnimationFrame(an);
    else
      biStrike(pow * 1, () => {
        biShoot(pow, aim, sp);
        biRun();
      });
  };
  requestAnimationFrame(an);
}
function biTargets() {
  const g = BG.grp[BG.turn];
  return BG.b.filter((b) => !b.in && b.n && (g ? (biLeft(g) ? biType(b.n) === g : b.n === 8) : b.n !== 8));
}
function biPlan() {
  const c = biCue(),
    R = BI.R;
  let best = null;
  for (const b of biTargets())
    for (const p of BI.PK) {
      const px = p[0] < 0 ? 18 : p[0] > 1e3 ? 982 : 500,
        py = p[1] < 0 ? 18 : p[1] > 2e3 ? 1982 : 1e3;
      const dx = px - b.x,
        dy = py - b.y,
        L = Math.hypot(dx, dy),
        gx = b.x - (dx / L) * 2 * R,
        gy = b.y - (dy / L) * 2 * R;
      if (Math.abs(py - 1e3) < 5 && Math.abs(dy) > L * 0.85) continue;
      const ax = gx - c.x,
        ay = gy - c.y,
        La = Math.hypot(ax, ay),
        cut = Math.acos(Math.max(-1, Math.min(1, (ax * dx + ay * dy) / (La * L))));
      if (cut > 1.25) continue;
      if (!biClear(c.x, c.y, gx, gy, [c, b]) || !biClear(b.x, b.y, px, py, [b, c])) continue;
      const sc = -cut * 2.2 - L / 900 - La / 1400;
      if (!best || sc > best.sc) best = { a: Math.atan2(ay, ax), d: La + L * 1.3, sc };
    }
  return best;
}
function biRay() {
  const c = biCue(),
    R = BI.R,
    dx = Math.cos(BG.aim),
    dy = Math.sin(BG.aim);
  let tmin = 1e9,
    hit = null;
  for (const b of BG.b) {
    if (b.in || b === c) continue;
    const ox = b.x - c.x,
      oy = b.y - c.y,
      t = ox * dx + oy * dy,
      d2 = ox * ox + oy * oy - t * t,
      r2 = 4 * R * R;
    if (t < 0 || d2 > r2) continue;
    const th = t - Math.sqrt(r2 - d2);
    if (th < tmin) {
      tmin = th;
      hit = b;
    }
  }
  const lim = [(BI.W - R - c.x) / dx, (R - c.x) / dx, (BI.H - R - c.y) / dy, (R - c.y) / dy].filter(
    (t) => t > 0 && isFinite(t),
  );
  const tw = Math.min(...lim);
  if (tw < tmin) return { x: c.x + dx * tw, y: c.y + dy * tw, b: null };
  return { x: c.x + dx * tmin, y: c.y + dy * tmin, b: hit };
}
function biView() {
  const cv = $("#bicv");
  if (!cv) return null;
  const r = cv.getBoundingClientRect(),
    d = devicePixelRatio || 1;
  if (cv.width !== Math.round(r.width * d)) {
    cv.width = Math.round(r.width * d);
    cv.height = Math.round(r.height * d);
  }
  const m = r.width * 0.075,
    s = (r.width - 2 * m) / BI.W;
  return { cv, x: cv.getContext("2d"), d, m, s, w: r.width, h: r.height };
}
function biDraw() {
  const V = biView();
  if (!V || !BG) return;
  const { x: c, d, m, s, w, h } = V;
  c.setTransform(d, 0, 0, d, 0, 0);
  c.clearRect(0, 0, w, h);
  const rw = c.createLinearGradient(0, 0, w, 0);
  const K = biSk();
  rw.addColorStop(0, K.r[0]);
  rw.addColorStop(0.5, K.r[1]);
  rw.addColorStop(1, K.r[2]);
  c.fillStyle = rw;
  biRR(c, 0, 0, w, h, m * 0.6);
  c.fill();
  c.strokeStyle = K.tr;
  c.lineWidth = K.gold ? 2 : 1;
  biRR(c, 2, 2, w - 4, h - 4, m * 0.55);
  c.stroke();
  if (K.gold) {
    c.strokeStyle = "rgba(232,192,96,.55)";
    c.lineWidth = 1;
    biRR(c, m * 0.42, m * 0.42, w - m * 0.84, h - m * 0.84, m * 0.25);
    c.stroke();
    const sh = c.createLinearGradient(0, 0, w, h);
    sh.addColorStop(0, "rgba(255,255,255,.10)");
    sh.addColorStop(0.4, "rgba(255,255,255,0)");
    c.fillStyle = sh;
    biRR(c, 0, 0, w, h, m * 0.6);
    c.fill();
  }
  c.save();
  c.translate(m, m);
  c.scale(s, s);
  c.fillStyle = K.cu;
  c.fillRect(-22, -22, BI.W + 44, BI.H + 44);
  const fe = c.createRadialGradient(500, 1e3, 200, 500, 1e3, 1300);
  fe.addColorStop(0, K.f[0]);
  fe.addColorStop(1, K.f[1]);
  c.fillStyle = fe;
  c.fillRect(0, 0, BI.W, BI.H);
  if (K.gold) {
    c.save();
    c.globalAlpha = 0.07;
    c.strokeStyle = "#fff";
    c.lineWidth = 1.2;
    for (let y = -1e3; y < 2e3; y += 60) {
      c.beginPath();
      c.moveTo(0, y);
      c.lineTo(BI.W, y + BI.W);
      c.stroke();
      c.beginPath();
      c.moveTo(BI.W, y);
      c.lineTo(0, y + BI.W);
      c.stroke();
    }
    c.restore();
    c.save();
    c.globalAlpha = 0.18;
    c.strokeStyle = "#ffd86a";
    c.lineWidth = 2;
    c.beginPath();
    c.arc(500, 1e3, 160, 0, 7);
    c.stroke();
    c.beginPath();
    c.arc(500, 1e3, 120, 0, 7);
    c.stroke();
    c.restore();
  }
  c.strokeStyle = "rgba(255,255,255,.12)";
  c.lineWidth = 2;
  c.beginPath();
  c.moveTo(0, 500);
  c.lineTo(BI.W, 500);
  c.stroke();
  c.fillStyle = "rgba(255,255,255,.35)";
  [
    [500, 500],
    [500, 1500],
  ].forEach(([a, b]) => {
    c.beginPath();
    c.arc(a, b, 5, 0, 7);
    c.fill();
  });
  c.fillStyle = K.dm;
  for (let i = 1; i < 8; i++) {
    if (i === 4) continue;
    const y = i * 250;
    [-44, BI.W + 44].forEach((x) => {
      c.beginPath();
      c.arc(x, y, 6, 0, 7);
      c.fill();
    });
  }
  for (let i = 1; i < 4; i++) {
    const x = i * 250;
    [-44, BI.H + 44].forEach((y) => {
      c.beginPath();
      c.arc(x, y, 6, 0, 7);
      c.fill();
    });
  }
  for (const p of BI.PK) {
    const g = c.createRadialGradient(p[0], p[1], p[2] * 0.3, p[0], p[1], p[2] + 8);
    g.addColorStop(0, "#000");
    g.addColorStop(0.8, "#0a0a0a");
    g.addColorStop(1, K.pk);
    c.fillStyle = g;
    c.beginPath();
    c.arc(p[0], p[1], p[2] + 6, 0, 7);
    c.fill();
    if (K.gold) {
      c.strokeStyle = "#e8c060";
      c.lineWidth = 3;
      c.beginPath();
      c.arc(p[0], p[1], p[2] + 7, 0, 7);
      c.stroke();
    }
  }
  const B = BG.b,
    R = BI.R,
    cu = B[0];
  if (BG.st === "aim" || BG.st === "aiaim" || BG.st === "place" || BG.st === "pow") {
    if (
      !cu.in &&
      BG.guide > 0 &&
      !(BG.mode === "ai" && BG.turn === 1 && BG.lv > 0) &&
      !(BG.mode === "online" && biOpp())
    ) {
      const r = biRay();
      c.setLineDash([10, 10]);
      c.strokeStyle = "rgba(255,255,255,.55)";
      c.lineWidth = 2.5;
      c.beginPath();
      c.moveTo(cu.x, cu.y);
      c.lineTo(r.x, r.y);
      c.stroke();
      c.setLineDash([]);
      c.strokeStyle = "rgba(255,255,255,.6)";
      c.beginPath();
      c.arc(r.x, r.y, R, 0, 7);
      c.stroke();
      if (r.b) {
        const nx = r.b.x - r.x,
          ny = r.b.y - r.y,
          L = Math.hypot(nx, ny),
          k = BG.guide === 2 ? 260 : 110;
        c.strokeStyle = "rgba(255,240,180,.75)";
        c.lineWidth = 3;
        c.beginPath();
        c.moveTo(r.b.x, r.b.y);
        c.lineTo(r.b.x + (nx / L) * k, r.b.y + (ny / L) * k);
        c.stroke();
        if (BG.guide === 2) {
          const dx = Math.cos(BG.aim),
            dy = Math.sin(BG.aim),
            cr = (dx * ny) / L - (dy * nx) / L;
          let tx = -ny / L,
            ty = nx / L;
          if (tx * dx + ty * dy < 0) {
            tx = -tx;
            ty = -ty;
          }
          const fo = BG.sp[1];
          const vx = tx * (1 - Math.abs(fo) * 0.3) + (nx / L) * fo * 0.7,
            vy = ty * (1 - Math.abs(fo) * 0.3) + (ny / L) * fo * 0.7,
            Lv = Math.hypot(vx, vy) || 1;
          c.strokeStyle = "rgba(255,255,255,.35)";
          c.lineWidth = 2;
          c.beginPath();
          c.moveTo(r.x, r.y);
          c.lineTo(r.x + (vx / Lv) * 120, r.y + (vy / Lv) * 120);
          c.stroke();
        }
      }
    }
  }
  for (const b of B) {
    if (b.in && !b.drop) continue;
    let x = b.x,
      y = b.y,
      sc = 1,
      al = 1;
    if (b.drop) {
      b.drop.t = Math.min(1, b.drop.t + 0.06);
      const k = b.drop.t;
      x = b.drop.x + (b.drop.px - b.drop.x) * Math.min(1, k * 1.4);
      y = b.drop.y + (b.drop.py - b.drop.y) * Math.min(1, k * 1.4);
      sc = 1 - k * 0.55;
      al = 1 - k;
      if (k >= 1) {
        b.drop = null;
        continue;
      }
    }
    c.globalAlpha = al;
    c.fillStyle = "rgba(0,0,0,.35)";
    c.beginPath();
    c.ellipse(x + 5, y + 7, R * sc, R * sc * 0.9, 0, 0, 7);
    c.fill();
    biBall(c, b, x, y, R * sc);
    c.globalAlpha = 1;
  }
  if (
    (BG.st === "aim" || BG.st === "pow" || BG.st === "aiaim" || BG.st === "strike") &&
    !cu.in &&
    !(BG.mode === "ai" && BG.turn === 1 && BG.st !== "aiaim" && BG.st !== "strike") &&
    !(BG.mode === "online" && biOpp())
  ) {
    {
      let d = BG.aim - (BG.da == null ? BG.aim : BG.da);
      d = Math.atan2(Math.sin(d), Math.cos(d));
      BG.da = Math.abs(d) < 0.002 || BG.st !== "aim" ? BG.aim : (BG.da == null ? BG.aim : BG.da) + d * 0.4;
      if (BG.da !== BG.aim) requestAnimationFrame(() => BG && biDraw());
    }
    const dx = Math.cos(BG.da),
      dy = Math.sin(BG.da),
      off = R + 10 + BG.pow * 150,
      L = 900;
    c.save();
    c.translate(cu.x - dx * off, cu.y - dy * off);
    c.rotate(BG.da + Math.PI);
    c.translate(0, BG.sp[0] * R * 0.5);
    const g = c.createLinearGradient(0, -8, 0, 8);
    g.addColorStop(0, K.cue[0]);
    g.addColorStop(0.5, K.cue[1]);
    g.addColorStop(1, K.cue[2]);
    c.fillStyle = K.ring;
    c.fillRect(0, -5, 8, 10);
    c.fillStyle = "#f4f0e4";
    c.fillRect(8, -5.5, 14, 11);
    c.fillStyle = g;
    c.beginPath();
    c.moveTo(22, -6);
    c.lineTo(L * 0.7, -9);
    c.lineTo(L * 0.7, 9);
    c.lineTo(22, 6);
    c.fill();
    if (K.gold) {
      c.fillStyle = "#e8c060";
      [0.3, 0.45, 0.6].forEach((f) => c.fillRect(L * f, -7.5, 6, 15));
    }
    c.fillStyle = K.butt;
    c.beginPath();
    c.moveTo(L * 0.7, -9);
    c.lineTo(L, -12);
    c.lineTo(L, 12);
    c.lineTo(L * 0.7, 9);
    c.fill();
    c.restore();
  }
  if (BG.hand && BG.st !== "moving" && !biOpp()) {
    c.strokeStyle = "rgba(255,255,255,.8)";
    c.setLineDash([6, 6]);
    c.lineWidth = 3;
    c.beginPath();
    c.arc(cu.x, cu.y, R + 12, 0, 7);
    c.stroke();
    c.setLineDash([]);
    c.font = "34px sans-serif";
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillText("✋", cu.x + R * 1.9, cu.y - R * 1.9);
    if (BG.head) {
      c.fillStyle = "rgba(255,255,255,.06)";
      c.fillRect(0, 0, BI.W, 500);
    }
  }
  c.restore();
}
function biRR(c, x, y, w, h, r) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}
function biBall(c, b, x, y, R) {
  const col = BI.COL[b.n],
    q = b.q,
    strp = b.n > 8;
  c.save();
  c.beginPath();
  c.arc(x, y, R, 0, 7);
  c.clip();
  c.fillStyle = strp ? "#f6f2e8" : col;
  c.fillRect(x - R, y - R, 2 * R, 2 * R);
  if (strp) {
    c.fillStyle = col;
    const ang = Math.atan2(q[1], q[0]),
      qz = Math.abs(q[2]);
    c.save();
    c.translate(x, y);
    c.rotate(ang);
    c.fillRect(-R * 0.62 * (1 - qz) - R * 0.55 * qz - 1, -R, R * 1.24 * (1 - qz) + R * 1.1 * qz + 2, 2 * R);
    c.restore();
    [
      [1, q],
      [-1, [-q[0], -q[1], -q[2]]],
    ].forEach(([s, v]) => {
      if (v[2] < -0.25) return;
      c.fillStyle = "#f6f2e8";
      c.beginPath();
      c.ellipse(
        x + v[0] * R * 0.62,
        y + v[1] * R * 0.62,
        R * 0.7,
        R * 0.7 * Math.max(0.12, Math.abs(v[2])),
        Math.atan2(v[1], v[0]) + Math.PI / 2,
        0,
        7,
      );
      c.fill();
    });
  }
  if (b.n && q[2] > -0.2) {
    const k = Math.max(0, q[2] + 0.2) / 1.2,
      px = x + q[0] * R * 0.62,
      py = y + q[1] * R * 0.62,
      rr = R * 0.42;
    c.fillStyle = "#fbf8ee";
    c.beginPath();
    c.ellipse(px, py, rr, rr * Math.max(0.25, q[2]), Math.atan2(q[1], q[0]) + Math.PI / 2, 0, 7);
    c.fill();
    if (q[2] > 0.35) {
      c.fillStyle = "#111";
      c.font = `700 ${R * 0.5}px "Nunito Sans",sans-serif`;
      c.textAlign = "center";
      c.textBaseline = "middle";
      c.globalAlpha *= Math.min(1, (q[2] - 0.35) * 3);
      c.fillText(b.n, px, py + R * 0.02);
    }
    c.globalAlpha = 1;
  }
  if (b.n === 0) {
    const k = Math.max(0, q[2]);
    c.fillStyle = "#d8282e";
    c.globalAlpha = 0.85;
    c.beginPath();
    c.arc(x + q[0] * R * 0.62, y + q[1] * R * 0.62, R * 0.12 * (0.4 + k * 0.6), 0, 7);
    c.fill();
    c.globalAlpha = 1;
  }
  const g = c.createRadialGradient(x - R * 0.35, y - R * 0.4, R * 0.05, x, y, R * 1.05);
  g.addColorStop(0, "rgba(255,255,255,.75)");
  g.addColorStop(0.18, "rgba(255,255,255,.12)");
  g.addColorStop(0.7, "rgba(0,0,0,0)");
  g.addColorStop(1, "rgba(0,0,0,.38)");
  c.fillStyle = g;
  c.fillRect(x - R, y - R, 2 * R, 2 * R);
  if (biSk().gold) {
    c.fillStyle = "rgba(255,255,255,.9)";
    c.beginPath();
    c.ellipse(x - R * 0.38, y - R * 0.45, R * 0.22, R * 0.12, -0.6, 0, 7);
    c.fill();
    c.strokeStyle = "rgba(255,230,160,.35)";
    c.lineWidth = R * 0.08;
    c.beginPath();
    c.arc(x, y, R * 0.93, 0.3, 1.6);
    c.stroke();
  }
  c.restore();
}
const biArr = (b) => [b.n, +b.x.toFixed(1), +b.y.toFixed(1), b.in ? 1 : 0];
function biBalls(a) {
  const o = new Map((BG.b || []).map((b) => [b.n, b]));
  return a
    .map(([n, x, y, i]) => {
      const p = o.get(n);
      return { n, x, y, vx: 0, vy: 0, sx: 0, sy: 0, w: 0, in: !!i, q: p ? p.q : [0, 0, 1] };
    })
    .sort((a, b) => a.n - b.n);
}
function biClean(r) {
  try {
    if (
      !r ||
      "object" != typeof r ||
      !Array.isArray(r.p) ||
      2 !== r.p.length ||
      !r.p.every((e) => "string" == typeof e && SOK.test(e)) ||
      r.p.indexOf(SO.uid) < 0
    )
      return null;
    const N = Number.isFinite,
      I = (v, a, b) => N(v) && v >= a && v <= b;
    if (!(
      "string" == typeof r.id &&
      /^[a-z0-9]{1,16}$/.test(r.id) &&
      N(r.seq) &&
      I(r.turn, 0, 1) &&
      I(r.bk, 0, 1) &&
      I(r.by, 0, 1) &&
      I(r.over, -1, 1) &&
      ["aim", "place", "over"].includes(r.st) &&
      Array.isArray(r.grp) &&
      2 === r.grp.length &&
      r.grp.every((e) => I(e, 0, 2)) &&
      Array.isArray(r.pk) &&
      r.pk.length <= 16 &&
      r.pk.every((e) => I(e, 0, 15))
    ))
      return null;
    const ok = (a) =>
      Array.isArray(a) &&
      16 === a.length &&
      a.every(
        (e, i) =>
          Array.isArray(e) && 4 === e.length && e[0] === i && I(e[1], -60, 1060) && I(e[2], -60, 2060),
      );
    if (!ok(r.b)) return null;
    let sh = null;
    if (r.sh) {
      const h = r.sh;
      if (!(
        N(h.a) &&
        I(h.pw, 0, 1) &&
        Array.isArray(h.sp) &&
        2 === h.sp.length &&
        I(h.sp[0], -1, 1) &&
        I(h.sp[1], -1, 1) &&
        ok(h.pb)
      ))
        return null;
      sh = { a: h.a, pw: h.pw, sp: h.sp.slice(), brk: h.brk ? 1 : 0, pb: h.pb };
    }
    return {
      id: r.id,
      p: r.p.slice(),
      seq: r.seq,
      by: r.by,
      bk: r.bk,
      b: r.b,
      turn: r.turn,
      grp: r.grp.slice(),
      st: r.st,
      hand: r.hand ? 1 : 0,
      head: r.head ? 1 : 0,
      brk: r.brk ? 1 : 0,
      msg: String(r.msg || "").slice(0, 200),
      over: r.over,
      pk: r.pk.slice(),
      sh,
    };
  } catch (e) {
    return null;
  }
}
function biApply(r) {
  const o = BG.on;
  BG.b = biBalls(r.b);
  BG.turn = r.turn;
  BG.grp = r.grp.slice();
  BG.st = r.st;
  BG.hand = !!r.hand;
  BG.head = !!r.head;
  BG.brk = !!r.brk;
  BG.msg = r.msg;
  BG.pk = r.pk.slice();
  BG.shot = null;
  BG.da = null;
  BG.rp = null;
  o.seq = r.seq;
  o.id = r.id;
  o.bk = r.bk;
  BG.pow = 0;
  if (BG.brk && BG.st !== "over") BG.aim = biAimAt(500, 1500);
  if (r.over >= 0) {
    BG.nopub = 1;
    biEnd(r.over, r.msg);
    BG.nopub = 0;
    return;
  }
  BG.over = -1;
  const v = $("#biov");
  v && (v.hidden = !0);
  biUI();
  biDraw();
}
function biRecv(r) {
  if (!BG || BG.mode !== "online" || !BG.on) return;
  const o = BG.on;
  if (r.id === o.id && r.seq <= o.seq) return;
  if (BG.st === "moving" || BG.st === "strike") {
    r.by !== o.me && (BG.rp = r);
    return;
  }
  if (r.by !== o.me && r.id === o.id && r.sh && o.seq === r.seq - 1 && r.over < 2) {
    BG.rp = r;
    BG.b = biBalls(r.sh.pb);
    BG.turn = r.by;
    BG.brk = !!r.sh.brk;
    BG.pk = [];
    BG.over = -1;
    const v = $("#biov");
    v && (v.hidden = !0);
    BG.aim = r.sh.a;
    biShoot(r.sh.pw, r.sh.a, r.sh.sp);
    biUI();
    biRun();
    return;
  }
  biApply(r);
}
async function biPub() {
  const o = BG.on;
  if (!o) return;
  const r = {
    v: 1,
    id: o.id,
    p: o.p,
    seq: o.seq + 1,
    by: o.me,
    bk: o.bk,
    b: BG.b.map(biArr),
    turn: BG.turn,
    grp: BG.grp,
    st: BG.st,
    hand: BG.hand ? 1 : 0,
    head: BG.head ? 1 : 0,
    brk: BG.brk ? 1 : 0,
    msg: BG.msg || "",
    over: BG.over,
    pk: BG.pk,
    sh: o.sh || null,
    at: Date.now(),
  };
  o.sh = null;
  o.seq = r.seq;
  biSend(r, 0);
}
async function biSend(r, n) {
  const o = BG && BG.on;
  if (!o || o.id !== r.id) return;
  try {
    const d = await scrDb();
    if (!d) throw 0;
    await d.collection("sc").doc(o.gid).set(r);
  } catch (e) {
    if (n < 6) return void setTimeout(() => biSend(r, n + 1), 2500 * (n + 1));
    BG.msg = "Ton coup n’a pas pu être envoyé : vérifie ta connexion.";
    biUI();
  }
}
async function biWatch() {
  const o = BG.on,
    d = await scrDb();
  if (!d || !BG || BG.on !== o) return;
  o.un = d
    .collection("sc")
    .doc(o.gid)
    .onSnapshot(
      (s) => {
        if (!s || !s.exists) return;
        const r = biClean(s.data());
        r && biRecv(r);
      },
      () => {},
    );
}
function biOff() {
  if (BG && BG.on && BG.on.un) {
    try {
      BG.on.un();
    } catch (e) {}
    BG.on.un = null;
  }
}
async function biOnline(opp) {
  if (!SOK.test(opp) || !SO.uid || !SO.got) return gToast("Connecte-toi d’abord dans l’onglet Social.");
  const d = await scrDb();
  if (!d) return gToast("Le jeu en ligne n’est pas disponible ici.");
  const p = [SO.uid, opp].sort(),
    gid = p.join("_") + "_bl";
  let r = null;
  try {
    const s = await d.collection("sc").doc(gid).get();
    s.exists && (r = biClean(s.data()));
  } catch (e) {
    return gToast("Connexion impossible pour l’instant.");
  }
  biOff();
  biNew("online");
  const me = p.indexOf(SO.uid);
  BG.on = { opp, p, me, gid, id: "", seq: 0, bk: me, sh: null, un: null };
  if (r) biApply(r);
  else {
    BG.on.id = Math.random().toString(36).slice(2, 10);
    BG.turn = me;
    biPub();
  }
  biScreen();
  biWatch();
  r || socInv(opp, "billard");
}
function biOnAgain() {
  const o = BG.on;
  biOff();
  biNew("online");
  BG.on = o;
  o.bk = 1 - o.bk;
  o.id = Math.random().toString(36).slice(2, 10);
  o.sh = null;
  BG.turn = o.bk;
  biPub();
  biScreen();
  biWatch();
}
async function biOnList(n) {
  const e = $("#bonl");
  if (!e || "billard" !== cur) return;
  const a = st.get("soc:me", null);
  if (!(SO.uid && SO.got && a && a.code)) {
    e.innerHTML = `<p class="note" style="margin:0">${"na" === SO.st ? "Connecte-toi dans l’onglet Social pour jouer à distance avec tes amis." : "Un instant…"}</p>`;
    "na" === SO.st || SO.col || "conn" === SO.st || socInit();
    n < 8 && setTimeout(() => biOnList(n + 1), 1500);
    return;
  }
  const F = Object.keys(a.fr || {}).filter((k) => a.fr[k] > 0 && SO.P[k]);
  if (!F.length) {
    e.innerHTML =
      '<p class="note" style="margin:0">Ajoute un ami dans l’onglet Social pour le défier au billard.</p>';
    return;
  }
  e.innerHTML = F.map(
    (k) =>
      `<div class="fr-i"><button class="fr-o" data-a="biOn" data-v="${esc(k)}">${socAv(k)}<span class="fr-t"><b>${esc(scrNm(k))}</b><small data-bu="${esc(k)}">Partie à distance</small></span></button><div class="fr-b"><button class="sb" data-a="biOn" data-v="${esc(k)}">Jouer</button></div></div>`,
  ).join("");
  const d = await scrDb();
  if (!d) return;
  for (const k of F.slice(0, 12)) {
    try {
      const s = await d
          .collection("sc")
          .doc([SO.uid, k].sort().join("_") + "_bl")
          .get(),
        r = s.exists ? biClean(s.data()) : null,
        m = r ? r.p.indexOf(SO.uid) : 0,
        t = [...document.querySelectorAll("[data-bu]")].find((x) => x.dataset.bu === k);
      if (!t) continue;
      t.textContent = !r
        ? "Nouvelle partie"
        : r.over >= 0
          ? "Partie terminée"
          : r.turn === m
            ? "À toi de jouer"
            : "Au tour de " + scrNm(k);
      r && r.over < 0 && r.turn === m && t.classList.add("scgo");
    } catch (x) {}
  }
}
let biRaf = 0;
let biLast = 0;
function biRun() {
  cancelAnimationFrame(biRaf);
  biLast = performance.now();
  const f = (t) => {
    if (!BG || !$("#bicv")) return;
    let dt = Math.max(0.002, Math.min(0.04, (t - biLast) / 1e3));
    biLast = t;
    let mv = !1;
    const n = Math.ceil(dt / 0.0015);
    for (let i = 0; i < n; i++) mv = biStep(dt / n) || mv;
    biDraw();
    if (mv || BG.b.some((b) => b.drop)) biRaf = requestAnimationFrame(f);
    else if (BG.st === "moving") {
      if (BG.rp) {
        const r = BG.rp;
        BG.rp = null;
        biApply(r);
      } else biEval();
    }
  };
  biRaf = requestAnimationFrame(f);
}
function biUI() {
  const s = $("#bist");
  if (!s || !BG) return;
  const P = BG.turn,
    G = BG.grp,
    mode = BG.mode;
  const row = (p) => {
    const g = G[p],
      bl = g ? BG.b.filter((b) => biType(b.n) === g) : [];
    return `<div class="bip${P === p && mode !== "free" ? " on" : ""}"><b>${esc(biPN(p))}</b><span>${g ? bl.map((b) => `<i class="${b.in ? "x" : ""}" style="--c:${BI.COL[b.n]}"${b.n > 8 ? ' data-s="1"' : ""}>${b.n}</i>`).join("") : "<em>table ouverte</em>"}</span></div>`;
  };
  s.innerHTML =
    mode === "free"
      ? `<div class="bip on"><b>Entraînement libre</b><span><em>${15 - BG.pk.filter((n) => n).length} billes sur la table</em></span></div>`
      : row(0) + row(1);
  const m = $("#bim");
  m &&
    (m.textContent =
      BG.hand && BG.st !== "moving" && !biOpp()
        ? BG.head
          ? "Place la blanche dans la zone de départ, puis vise."
          : "Bille en main : place la blanche où tu veux."
        : biCap(BG.msg) ||
          (mode === "ai" && P === 1
            ? "L’ordinateur réfléchit…"
            : mode === "online" && biOpp()
              ? "En attente de " + biNm(P) + "…"
              : "Glisse sur la table pour tourner la queue (ou touche une bille pour viser), règle finement avec la molette, puis tire la jauge vers le bas."));
  const sb = $("#bisp");
  sb && (sb.style.setProperty("--x", BG.sp[0]), sb.style.setProperty("--y", -BG.sp[1]));
  const lock = BG.st === "moving" || BG.st === "over" || biOpp();
  document.querySelectorAll("#bipw,#biwh,#bisp,.bire").forEach((e) => e.classList.toggle("off", lock));
}
function biScreen() {
  biActs();
  cur = "billard";
  nv("games");
  theme("billard");
  $("#nav").hidden = !0;
  app.innerHTML = `<div class="bis"><div class="top stk"><button class="back" data-a="biBk">‹ Menu</button><span class="tl">${BG.mode === "ai" ? "Contre l’ordinateur · " + ["débutant", "confirmé", "expert"][BG.lv] : BG.mode === "duo" ? "À deux" : BG.mode === "libre" ? "Mode libre" : BG.mode === "online" ? "En ligne · " + esc(scrNm(BG.on.opp)) : "Entraînement"}</span><div class="chip">🫧 ${FLX()}</div></div>
 <div class="bist" id="bist"></div>
 <div class="biw"><div class="bipw" id="bipw" aria-label="Puissance : tire vers le bas puis relâche"><div class="bipf" id="bipf"></div><div class="bicq" id="bicq"></div><span>Tirer</span></div>
 <div class="bicw"><canvas id="bicv" aria-label="Table de billard"></canvas><button class="bisp" id="bisp" data-a="biSpin" aria-label="Effet"><i></i></button>${BG.mode === "free" ? '<button class="bire" data-a="biRe" aria-label="Replacer les billes">↺</button>' : ""}<div class="biov" id="biov" hidden></div></div>
 <div class="biwh" id="biwh" aria-label="Réglage fin de la visée : glisse vers le haut ou le bas"><div class="biwr" id="biwr"></div></div></div><p class="bim" id="bim" role="status" aria-live="polite"></p>
 <div class="bisv" id="bisv" hidden><div><b>Effet</b><p>Touche la bille blanche où la queue doit la frapper : en haut, elle suit (coulé) ; en bas, elle revient (rétro) ; sur le côté, effet latéral sur les bandes.</p><div class="bisb" id="bisb"><i></i></div><div class="chrow"><button class="btn alt" data-a="biSpC">Centrer</button><button class="btn" data-a="biSpX">OK</button></div></div></div></div>`;
  const wr = $(".biw"),
    av = innerHeight - wr.getBoundingClientRect().top - 62,
    ww = Math.min(wr.clientWidth - 2 * 54, av / 1.85);
  const cv = $("#bicv");
  cv.style.width = ww + "px";
  cv.style.height = ww * 1.85 + "px";
  $("#bipw").style.height = $("#biwh").style.height = Math.min(ww * 1.85 * 0.7, 420) + "px";
  biBind();
  biUI();
  biDraw();
  if (BG.mode === "ai" && BG.turn === 1) setTimeout(biAI, 600);
}
function biPt(e) {
  const V = biView(),
    r = V.cv.getBoundingClientRect();
  return { x: (e.clientX - r.left - V.m) / V.s, y: (e.clientY - r.top - V.m) / V.s };
}
function biCan() {
  return BG && BG.st !== "moving" && BG.st !== "over" && BG.st !== "aiaim" && BG.st !== "strike" && !biOpp();
}
function biBind() {
  const cv = $("#bicv");
  let drag = 0,
    st0 = null;
  // Contrôles via Input : queue (canvas), jauge de puissance, molette de visée et bille d'effet.
  Input.sur(
    "toucher",
    (q, { evt: e }) => {
      if (!biCan()) return;
      const p = biPt(e),
        c = biCue();
      cv.setPointerCapture(e.pointerId);
      if (BG.hand && Math.hypot(p.x - c.x, p.y - c.y) < BI.R * 3) {
        drag = 2;
      } else {
        drag = 1;
        st0 = { x: e.clientX, y: e.clientY, a: Math.atan2(p.y - c.y, p.x - c.x), aim: BG.aim, mv: !1 };
      }
    },
    { cible: cv },
  );
  Input.sur(
    ["glisser", "survoler"],
    (q, { evt: e }) => {
      if (!drag) return;
      const p = biPt(e),
        c = biCue();
      if (drag === 2) {
        const R = BI.R,
          x = Math.max(R, Math.min(BI.W - R, p.x)),
          y = Math.max(R, Math.min(BG.head ? 500 : BI.H - R, p.y)),
          ox = c.x,
          oy = c.y;
        c.x = x;
        c.y = y;
        if (biOverlap(c)) {
          c.x = ox;
          c.y = oy;
        }
        biDraw();
        return;
      }
      if (!st0.mv && Math.hypot(e.clientX - st0.x, e.clientY - st0.y) < 6) return;
      st0.mv = !0;
      if (BG.st === "place") BG.st = "aim";
      const a = Math.atan2(p.y - c.y, p.x - c.x);
      let d = a - st0.a;
      d = Math.atan2(Math.sin(d), Math.cos(d));
      BG.aim = st0.aim + d;
      biDraw();
    },
    { cible: cv },
  );
  const up = (e) => {
    if (drag === 1 && st0 && !st0.mv) {
      const p = biPt(e);
      if (BG.st === "place") BG.st = "aim";
      BG.aim = biAimAt(p.x, p.y);
      biDraw();
      biUI();
    }
    if (drag === 2 && BG.st === "place") {
      BG.st = "aim";
      biUI();
    }
    drag = 0;
    st0 = null;
  };
  // pointerup → up, pointercancel → simple remise à zéro (comme avant).
  Input.sur(
    "lacher",
    (q, { evt: e }) => {
      if (e.type === "pointercancel") {
        drag = 0;
        st0 = null;
        return;
      }
      up(e);
    },
    { cible: cv, annulation: !0 },
  );
  const pw = $("#bipw"),
    pf = $("#bipf"),
    cq = $("#bicq");
  let pd = null;
  Input.sur(
    "toucher",
    (q, { evt: e }) => {
      if (!biCan()) return;
      if (BG.st === "place") BG.st = "aim";
      pd = { y: e.clientY, h: pw.clientHeight, k: 0 };
      pf.style.backgroundSize = "100% " + pw.clientHeight + "px";
      pw.setPointerCapture(e.pointerId);
      BG.st = "pow";
    },
    { cible: pw },
  );
  Input.sur(
    ["glisser", "survoler"],
    (q, { evt: e }) => {
      if (!pd) return;
      BG.pow = Math.max(0, Math.min(1, (e.clientY - pd.y) / (pd.h * 0.8)));
      pf.style.height = BG.pow * 100 + "%";
      {
        const k = Math.floor(BG.pow * 12);
        if (k !== pd.k) {
          pd.k = k;
          vib(4);
          biNoise(2400 + k * 120, 0.06, 0.012);
        }
      }
      pw.classList.toggle("hot", BG.pow > 0.85);
      cq.style.transform = `translateY(${BG.pow * pd.h * 0.8}px)`;
      biDraw();
    },
    { cible: pw },
  );
  const pup = () => {
    if (!pd) return;
    pd = null;
    const p = BG.pow;
    pf.style.height = "0";
    cq.style.transform = "";
    pw.classList.remove("hot");
    if (p < 0.03) {
      BG.st = "aim";
      BG.pow = 0;
      biDraw();
      return;
    }
    const a0 = BG.aim,
      s0 = BG.sp;
    biStrike(p, () => {
      biShoot(p, a0, s0);
      biUI();
      biRun();
    });
  };
  Input.sur("lacher", () => pup(), { cible: pw, annulation: !0 });
  const wh = $("#biwh"),
    wrb = $("#biwr");
  let wy = null,
    off = 0;
  Input.sur(
    "toucher",
    (q, { evt: e }) => {
      if (!biCan()) return;
      if (BG.st === "place") BG.st = "aim";
      wy = e.clientY;
      wh.setPointerCapture(e.pointerId);
    },
    { cible: wh },
  );
  Input.sur(
    ["glisser", "survoler"],
    (q, { evt: e }) => {
      if (wy === null) return;
      const dy = e.clientY - wy;
      wy = e.clientY;
      off += dy;
      wrb.style.backgroundPositionY = off + "px";
      if (Math.floor(off / 9) !== wh._k) {
        wh._k = Math.floor(off / 9);
        vib(3);
        biNoise(4200, 0.05, 0.01);
      }
      BG.aim += dy * 0.0011;
      biDraw();
    },
    { cible: wh },
  );
  const wup = () => {
    if (wy !== null) {
      wy = null;
      biUI();
    }
  };
  Input.sur("lacher", () => wup(), { cible: wh, annulation: !0 });
  const sb = $("#bisb");
  Input.sur(
    "toucher",
    (q, { evt: e }) => {
      const r = sb.getBoundingClientRect();
      let x = ((e.clientX - r.left) / r.width) * 2 - 1,
        y = -(((e.clientY - r.top) / r.height) * 2 - 1);
      const L = Math.hypot(x, y);
      if (L > 0.85) {
        x *= 0.85 / L;
        y *= 0.85 / L;
      }
      {
        const q = 0.85 / 3,
          z = (v) => (Math.abs(v) < 0.2 ? 0 : Math.round(v / q) * q);
        ((x = z(x)), (y = z(y)));
        const L2 = Math.hypot(x, y);
        L2 > 0.85 && ((x *= 0.85 / L2), (y *= 0.85 / L2));
      }
      BG.sp = [x, y];
      sb.style.setProperty("--x", x);
      sb.style.setProperty("--y", -y);
      biUI();
      biDraw();
    },
    { cible: sb },
  );
}
function biActs() {
  if (BIO) return;
  BIO = !0;
  Object.assign(act, {
    biBk: () => {
      cancelAnimationFrame(biRaf);
      biHub();
    },
    biOn: (e) => biOnline(String(e)),
    biOnT: () => {
      const e = $("#bidd");
      ((BIOO = e.classList.toggle("open")), e.querySelector(".dd-h").setAttribute("aria-expanded", BIOO));
    },
    biGo: (e) => {
      const [m, l] = String(e).split(":");
      biNew(m, +l || 0);
      biScreen();
    },
    biAgain: () => {
      if (BG.mode === "online") return biOnAgain();
      biNew(BG.mode, BG.lv);
      biScreen();
    },
    biRe: () => {
      biNew("free", 0);
      biScreen();
    },
    biFine: (e) => {
      if (!BG || BG.st === "moving" || BG.st === "over") return;
      if (BG.st === "place") BG.st = "aim";
      BG.aim += +e * 0.0035;
      biDraw();
      biUI();
    },
    biSpin: () => {
      const v = $("#bisv");
      if (!v) return;
      v.hidden = !1;
      const sb = $("#bisb");
      sb.style.setProperty("--x", BG.sp[0]);
      sb.style.setProperty("--y", -BG.sp[1]);
    },
    biSpX: () => {
      const v = $("#bisv");
      v && (v.hidden = !0);
    },
    biSpC: () => {
      BG.sp = [0, 0];
      const sb = $("#bisb");
      sb.style.setProperty("--x", 0);
      sb.style.setProperty("--y", 0);
      biUI();
      biDraw();
    },
    biGd: (e) => {
      st.set("bi:guide", +e);
      biHub();
    },
    biSk: (e) => {
      const v = BISK[e];
      if (!v) return;
      const own = e === "std" || st.get("bi:own", []).includes(e);
      if (!own) {
        if (!UNL() && fl < v.p) return gToast("Il te faut " + v.p + " 🫧 pour la table " + v.n + ".");
        if (!spend(v.p)) return;
        st.set("bi:own", [...st.get("bi:own", []), e]);
        sfx(880, 0.3);
      }
      st.set("bi:skin", e);
      biHub();
    },
  });
}
window.biAiLv = () => {
  const w = st.get("bi:w", [0, 0, 0]);
  return (w[0] | 0) < 3 ? 0 : (w[1] | 0) < 3 ? 1 : 2;
};
var BIOO = !1;
const BIC = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
function biHub() {
  biActs();
  biOff();
  cur = "billard";
  nv("games");
  theme("billard");
  const w = st.get("bi:w", [0, 0, 0]),
    g = st.get("bi:guide", 2);
  app.innerHTML = `<div class="top stk">${bk("home")}<div class="chip">🫧 ${FLX()}</div></div><section class="glass story pt-billard"><i>${gSv({ id: "billard" })}</i><h2>Le tapis vert</h2><p>Billard américain à la bille 8. Les billes glissent, roulent, rebondissent et tournent comme sur une vraie table : donne de l’effet à la blanche pour la faire revenir (rétro), la faire suivre (coulé) ou modifier ses rebonds sur les bandes (effet latéral).</p></section>
 <div class="opts">
 <section class="rc rcx pt-billard" data-g="🎱"><div class="rc-ic">🤖</div><div class="rc-t"><small>Contre l’ordinateur</small><b>Niveau ${["Débutant", "Confirmé", "Expert"][biAiLv()]}</b><span>Victoires ${w[0]} · ${w[1]} · ${w[2]} · 3 victoires pour monter (2, 4 ou 7 🫧)</span></div><button class="rc-go" data-a="biGo" data-v="ai:${biAiLv()}">Jouer${BIC}</button></section>
 <section class="rc pt-billard" data-g="👥"><div class="rc-ic">👥</div><div class="rc-t"><small>Sur cet écran</small><b>À deux</b><span>Même appareil, chacun son tour</span></div><button class="rc-go" data-a="biGo" data-v="duo:0">Jouer${BIC}</button></section>
 <section class="rc pt-billard" data-g="♾"><div class="rc-ic">♾️</div><div class="rc-t"><small>Seul</small><b>Mode libre</b><span>À l’infini : la bille 8 rentre, une nouvelle partie commence</span></div><button class="rc-go" data-a="biGo" data-v="libre:0">Jouer${BIC}</button></section>
 <section class="rc pt-billard" data-g="🎯"><div class="rc-ic">🎯</div><div class="rc-t"><small>Sans règles</small><b>Entraînement</b><span>Travaille la casse, les effets et les rebonds</span></div><button class="rc-go" data-a="biGo" data-v="free:0">Jouer${BIC}</button></section>
 <div class="dd pt-billard${BIOO ? " open" : ""}" id="bidd"><button class="dd-h" data-a="biOnT" aria-expanded="${!!BIOO}" aria-controls="bonl"><span><b>En ligne avec un ami</b><small>Chacun son tour, la partie t’attend</small></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button><div class="dd-l"><div class="dd-i soc-i"><p class="note" style="margin:0 0 8px">Joue avec n’importe qui grâce à un code : crée-le et partage-le, ou entre celui de ton adversaire.</p><div style="display:flex;gap:8px;margin-bottom:12px"><button class="btn" data-a="rmNew" data-v="billard" style="flex:1">🔑 Créer un code</button><button class="btn alt" data-a="rmCode" style="flex:1">Entrer un code</button></div><div id="bonl"></div></div></div></div>
 </div>
 <section class="glass play"><h2>Tables</h2><div class="bisk">${Object.entries(BISK)
   .map(([k, v]) => {
     const own = k === "std" || st.get("bi:own", []).includes(k),
       on = st.get("bi:skin", "std") === k;
     return `<div class="biski"><i class="bisv-${k}"></i><b>${v.n}</b><button class="btn${on ? " alt" : ""}" data-a="biSk" data-v="${k}"${on ? " disabled" : ""}>${on ? "Utilisée" : own ? "Utiliser" : "Acheter · " + v.p + " 🫧"}</button></div>`;
   })
   .join("")}</div></section>
 <section class="glass play"><h2>Aide à la visée</h2><div class="seg">${[
   [2, "Complète"],
   [1, "Courte"],
   [0, "Aucune"],
 ]
   .map(([v, t]) => `<button class="${g === v ? "on" : ""}" data-a="biGd" data-v="${v}">${t}</button>`)
   .join("")}</div>
 <p class="note" style="margin:6px 0 0">Les règles : casse depuis la zone de départ ; la première bille empochée te donne les pleines (1 à 7) ou les rayées (9 à 15). Empoche toutes les tiennes, puis la 8. Faute (blanche empochée, mauvaise bille touchée en premier, aucune bande après le contact) : bille en main pour l’adversaire. La 8 empochée trop tôt fait perdre.</p></section>`;
  biOnList(0);
  window.scrollTo(0, 0);
}
