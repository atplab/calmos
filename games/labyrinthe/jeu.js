// Labyrinthe (id « maze ») : construction mzBuild, chemins mzPath, écran pMaze.
const MZS = [
  [7, 8],
  [7, 9],
  [8, 9],
  [8, 10],
  [9, 10],
  [9, 11],
  [10, 11],
  [10, 12],
  [10, 13],
  [11, 13],
  [11, 14],
  [11, 14],
  [11, 15],
  [11, 15],
  [11, 16],
  [11, 16],
  [11, 17],
  [11, 17],
  [11, 18],
  [11, 18],
  [11, 19],
  [11, 19],
  [11, 20],
  [11, 20],
  [11, 21],
  [11, 21],
  [11, 22],
  [11, 22],
  [11, 23],
  [11, 24],
  [11, 24],
  [11, 24],
  [11, 24],
  [11, 24],
  [11, 24],
  [11, 24],
  [11, 24],
  [11, 25],
  [11, 25],
  [11, 25],
  [11, 25],
  [11, 25],
  [11, 25],
  [11, 25],
  [11, 26],
  [11, 26],
  [11, 26],
  [11, 26],
  [11, 26],
  [11, 26],
  [8, 9],
  [9, 10],
  [9, 11],
  [10, 11],
  [10, 12],
  [10, 13],
  [11, 13],
  [11, 14],
  [11, 15],
  [11, 16],
];
const MZB = [
  0, 0, 0, 2, 3, 4, 5, 6, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
  9, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7,
];
const MZP = [
  1, 1, 1, 1, 1, 1, 1, 1, 0.85, 0.8, 0.75, 0.7, 0.65, 0.62, 0.6, 0.58, 0.56, 0.54, 0.52, 0.5, 0.52, 0.5, 0.5,
  0.5, 0.48, 0.48, 0.48, 0.46, 0.46, 0.45, 0.45, 0.447, 0.444, 0.441, 0.438, 0.435, 0.432, 0.429, 0.426,
  0.423, 0.42, 0.417, 0.414, 0.411, 0.408, 0.405, 0.402, 0.399, 0.396, 0.393, 1, 1, 0.9, 0.85, 0.8, 0.75, 0.7,
  0.65, 0.6, 0.55,
];
const MZK = [
  126, 182, 20, 433, 42, 5, 1, 252, 45, 97, 121, 1783, 1803, 1173, 3887, 846, 4812, 1411, 4090, 1430, 662,
  184, 1124, 62, 1282, 737, 2, 346, 2712, 1540, 787, 201, 660, 2163, 2531, 1166, 1317, 2259, 989, 2259, 669,
  656, 1493, 1159, 1213, 994, 1907, 2464, 1425, 1628, 166, 123, 285, 124, 349, 6, 324, 321, 288, 126,
];
const MZC = {};
function mzBuild(e) {
  if (MZC[e]) return MZC[e];
  const [t, a] = MZS[e],
    s = t * a,
    n = rng(7919 * (e >= 50 ? e - 30 : e) + 101 + 104729 * MZK[e]),
    o = new Uint8Array(s),
    i = new Uint8Array(s),
    r = new Uint8Array(s),
    l = [0],
    c = MZP[e];
  for (r[0] = 1; l.length;) {
    const e = c >= 1 || n() < c ? l.length - 1 : Math.floor(n() * l.length),
      s = l[e],
      d = s % t,
      f = (s / t) | 0,
      u = [];
    if (
      (f > 0 && !r[s - t] && u.push(0),
      d < t - 1 && !r[s + 1] && u.push(1),
      f < a - 1 && !r[s + t] && u.push(2),
      d > 0 && !r[s - 1] && u.push(3),
      !u.length)
    ) {
      l.splice(e, 1);
      continue;
    }
    const h = u[Math.floor(n() * u.length)];
    0 === h
      ? ((i[s - t] = 1), (r[s - t] = 1), l.push(s - t))
      : 1 === h
        ? ((o[s] = 1), (r[s + 1] = 1), l.push(s + 1))
        : 2 === h
          ? ((i[s] = 1), (r[s + t] = 1), l.push(s + t))
          : ((o[s - 1] = 1), (r[s - 1] = 1), l.push(s - 1));
  }
  for (let r = 0, l = 0; r < MZB[e] && l < 800; l++) {
    const e = Math.floor(n() * s),
      l = e % t,
      c = (e / t) | 0;
    n() < 0.5 ? l < t - 1 && !o[e] && ((o[e] = 1), r++) : c < a - 1 && !i[e] && ((i[e] = 1), r++);
  }
  const d = { W: t, H: a, R: o, D: i, s: [0, t - 1][e % 2], e: 0 },
    f = new Int16Array(s).fill(-1);
  f[d.s] = 0;
  let u = [d.s],
    h = d.s;
  for (; u.length;) {
    const e = [];
    for (const t of u)
      for (let a = 0; a < 4; a++) {
        const s = mzN(d, t, a);
        s >= 0 && f[s] < 0 && ((f[s] = f[t] + 1), f[s] > f[h] && (h = s), e.push(s));
      }
    u = e;
  }
  return ((d.e = h), (d.len = f[h]), (MZC[e] = d));
}
const mzO = (e, t, a) => {
  const s = t % e.W,
    n = (t / e.W) | 0;
  return 0 === a
    ? n > 0 && !!e.D[t - e.W]
    : 1 === a
      ? s < e.W - 1 && !!e.R[t]
      : 2 === a
        ? n < e.H - 1 && !!e.D[t]
        : s > 0 && !!e.R[t - 1];
};
const mzN = (e, t, a) => (mzO(e, t, a) ? t + (0 === a ? -e.W : 1 === a ? 1 : 2 === a ? e.W : -1) : -1);
function mzPath(e, t, a, s) {
  if (t === a) return [];
  const n = new Map([[t, -1]]);
  let o = [t];
  for (let i = 0; i < s && o.length; i++) {
    const s = [];
    for (const i of o)
      for (let o = 0; o < 4; o++) {
        const r = mzN(e, i, o);
        if (r >= 0 && !n.has(r)) {
          if ((n.set(r, i), r === a)) {
            const e = [];
            for (let a = r; a !== t; a = n.get(a)) e.push(a);
            return e.reverse();
          }
          s.push(r);
        }
      }
    o = s;
  }
  return null;
}
function pMaze(e) {
  const t = mzBuild(lv),
    { W: a, H: s } = t,
    n = a * s,
    o = !daily && isX("maze", lv),
    i = (e) => (e % a) * 10 + 5,
    r = (e) => 10 * ((e / a) | 0) + 5;
  let l =
      e &&
      ((f = e.p),
      Array.isArray(f) &&
        f.length >= 1 &&
        f.length <= n &&
        f[0] === t.s &&
        f.every(
          (e, a) =>
            Number.isInteger(e) &&
            e >= 0 &&
            e < n &&
            f.indexOf(e) === a &&
            (0 === a || [0, 1, 2, 3].some((s) => mzN(t, f[a - 1], s) === e)),
        ))
        ? e.p.slice()
        : [t.s],
    c = !1,
    d = 0;
  var f;
  snap = () => ({ p: l.slice() });
  let u = "";
  for (let e = 0; e < s; e++)
    for (let n = 0; n < a; n++) {
      const o = e * a + n;
      (n < a - 1 && !t.R[o] && (u += "M" + (10 * n + 10) + " " + 10 * e + "v10"),
        e < s - 1 && !t.D[o] && (u += "M" + 10 * n + " " + (10 * e + 10) + "h10"));
    }
  const h = (e) => e.map((e) => i(e) + "," + r(e)).join(" ");
  frame(
    `<svg class="mz-b" id="mzb" style="--c:${a};--r:${s}" viewBox="0 0 ${10 * a} ${10 * s}" role="img" aria-label="Labyrinthe de ${a} sur ${s} cases : guide ${o ? "le cerf jusqu’au pôle Nord" : "le renard jusqu’au terrier"}"><rect class="mz-bg" x="0" y="0" width="${10 * a}" height="${10 * s}" rx="2.5"/><g transform="translate(${i(t.e)} ${r(t.e)})"><circle r="4.9" fill="rgba(255,226,160,.17)"/>${o ? '<path d="M0 4V-2.4" stroke="#fff" stroke-width=".95" stroke-linecap="round" fill="none"/><path d="M0 3.8V-2.2" stroke="#d9453d" stroke-width=".95" stroke-dasharray="1 1" fill="none"/><path d="M0-5.1L.38-4.13 1.43-4.06 .62-3.4 .88-2.39 0-2.95-.88-2.39-.62-3.4-1.43-4.06-.38-4.13Z" fill="#ffe2a0"/><path d="M-3.2 4.3Q0 2.4 3.2 4.3Z" fill="#eaf3ff"/>' : '<path d="M-3.3 3.8V-.2A3.3 3.3 0 0 1 3.3-.2V3.8Z" fill="#10152e" stroke="#ffe2a0" stroke-width=".6" stroke-linejoin="round"/>'}</g><polyline class="mz-tg" id="mzg" points=""/><polyline class="mz-tr" id="mzt" points=""/><polyline class="mz-hn" id="mzh" points=""/><path class="mz-wl" d="${u}"/><g class="mz-f" id="mzf"><circle r="4.5" fill="rgba(255,226,160,.26)"/>${o ? '<path d="M-1.7-2.2-2.9-4.2M-2.5-3.5-3.9-3.7M-2.9-4.2-3-5M1.7-2.2 2.9-4.2M2.5-3.5 3.9-3.7M2.9-4.2 3-5" fill="none" stroke="#f0d49a" stroke-width=".65" stroke-linecap="round"/><path d="M-3.2-1.6-4.7-2.6-3.1-3ZM3.2-1.6 4.7-2.6 3.1-3Z" fill="#a8693a"/><path d="M-3.2-2.1Q0-3.4 3.2-2.1Q3.6 1.4 1.5 3.7Q0 4.3-1.5 3.7Q-3.6 1.4-3.2-2.1Z" fill="#c2824a"/><ellipse cy="2.7" rx="1.7" ry="1.25" fill="#f1d9b4"/><circle cy="2.9" r=".95" fill="#e0382f"/><circle cx="-1.5" cy="-.4" r=".5" fill="#2a1d2e"/><circle cx="1.5" cy="-.4" r=".5" fill="#2a1d2e"/>' : '<path d="M-3.7-1.3-3.5-4.7-.9-2.7ZM3.7-1.3 3.5-4.7.9-2.7Z" fill="#e8873f"/><path d="M-3.9-1.6Q0-3.4 3.9-1.6Q4.3 1.6 0 3.9Q-4.3 1.6-3.9-1.6Z" fill="#f4a259"/><path d="M-2.5 1Q0 .1 2.5 1Q1.2 3.5 0 3.9Q-1.2 3.5-2.5 1Z" fill="#fff3e2"/><circle cx="-1.6" cy="-.4" r=".5" fill="#2a1d2e"/><circle cx="1.6" cy="-.4" r=".5" fill="#2a1d2e"/><circle cy="2.6" r=".55" fill="#2a1d2e"/>'}</g></svg><div class="mz-k"><button data-a="mzk" data-v="3" aria-label="Aller à gauche"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></button><button data-a="mzk" data-v="0" aria-label="Aller en haut"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg></button><button data-a="mzk" data-v="2" aria-label="Aller en bas"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg></button><button data-a="mzk" data-v="1" aria-label="Aller à droite"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></div><p class="note" style="text-align:center">Glisse le doigt le long du sentier, ou touche un couloir droit pour y filer. Les flèches du clavier marchent aussi.</p>`,
    1,
  );
  const p = $("#mzb"),
    m = $("#mzf"),
    b = $("#mzt"),
    g = $("#mzg"),
    E = $("#mzh"),
    y = (e) => {
      const t = h(l);
      (b.setAttribute("points", t), g.setAttribute("points", t));
      const a = l[l.length - 1];
      ((m.style.transitionDuration = e ? "0s" : ""),
        (m.style.transform = "translate(" + i(a) + "px," + r(a) + "px)"));
    },
    v = (e) => {
      const t = l.indexOf(e);
      t >= 0 ? (l.length = t + 1) : l.push(e);
    },
    A = () => {
      ((c = !0),
        p.classList.add("win"),
        msg(
          o
            ? "Le cerf est rentré au pôle Nord, juste à temps pour Noël."
            : "Le renard est rentré au terrier.",
        ),
        sfx(660, 0.5),
        vib([20, 40, 20]));
      const e = lv;
      setTimeout(() => {
        playing && "maze" === cur && lv === e && win();
      }, 1900);
    },
    S = (e) =>
      !!e.length &&
      ((() => {
        const e = p.getBoundingClientRect(),
          t = e.width / (10 * a);
        (e.top, r(l[l.length - 1]));
      })(),
      e.forEach(v),
      y(),
      keep(),
      l[l.length - 1] === t.e ? A() : sfx(380 + 7 * Math.min(l.length, 40), 0.07),
      !0),
    x = (e) => {
      const t = p.getBoundingClientRect(),
        n = t.width / (10 * a),
        o = (e.clientX - t.left) / n / 10,
        i = (e.clientY - t.top) / n / 10,
        r = Math.floor(o),
        l = Math.floor(i);
      return r < 0 || l < 0 || r >= a || l >= s ? -1 : l * a + r;
    };
  let M = null,
    L = null,
    T = 0;
  const k = (e) => {
      const a = x(e);
      if (a < 0) return;
      a !== M.c0 && (M.mv = !0);
      const s = l[l.length - 1];
      if (a === s) return;
      const n = mzPath(t, s, a, 4);
      n && n.length && ((M.mv = !0), S(n));
    },
    w = (e) => {
      const t = p.getBoundingClientRect(),
        s = t.width / (10 * a),
        n = l[l.length - 1];
      return (
        Math.hypot(e.clientX - (t.left + i(n) * s), e.clientY - (t.top + r(n) * s)) <= Math.max(24, 9 * s)
      );
    };
  ((wsG = {
    all: !0,
    down: (e) => {
      if (((T = performance.now()), c)) return;
      const t = "mouse" !== e.pointerType;
      t && M && M.fox && M.id !== e.pointerId
        ? L || (L = { id: e.pointerId, y: e.clientY })
        : e.target.closest &&
          e.target.closest(".mz-b") &&
          (M = { id: e.pointerId, c0: x(e), mv: !1, fox: !t || w(e), x: e.clientX, y: e.clientY });
    },
    move: (e) => {
      if (L && e.pointerId === L.id) return (window.scrollBy(0, L.y - e.clientY), void (L.y = e.clientY));
      M &&
        e.pointerId === M.id &&
        !c &&
        (M.fox ? k(e) : Math.hypot(e.clientX - M.x, e.clientY - M.y) > 8 && (M.mv = !0));
    },
    up: (e) => {
      if (L && e.pointerId === L.id) return void (L = null);
      if (!M || e.pointerId !== M.id) return;
      const s = M;
      ((M = null),
        !s.mv &&
          !c &&
          s.c0 >= 0 &&
          x(e) === s.c0 &&
          ((e) => {
            const s = l[l.length - 1];
            if (e < 0 || e === s) return;
            const n = s % a,
              o = (s / a) | 0,
              i = e % a,
              r = (e / a) | 0;
            if (n !== i && o !== r) return msg("Suis le sentier du doigt, ou touche un couloir droit.");
            const c = o === r ? (i > n ? 1 : 3) : r > o ? 2 : 0,
              d = [];
            let f = s;
            for (; f !== e;) {
              const e = mzN(t, f, c);
              if (e < 0) return msg("Un mur barre le chemin.");
              (d.push(e), (f = e));
            }
            S(d);
          })(s.c0));
    },
    cancel: (e) => {
      (L && e.pointerId === L.id && (L = null), M && e.pointerId === M.id && (M = null));
    },
    ts: (e) => {
      if (
        !c &&
        performance.now() - T > 80 &&
        (!M || !M.fox) &&
        e.target.closest &&
        e.target.closest(".mz-b")
      ) {
        const t = [...e.changedTouches].find((e) => w(e));
        t &&
          (M = {
            id: "t" + t.identifier,
            tid: t.identifier,
            c0: x(t),
            mv: !1,
            fox: !0,
            x: t.clientX,
            y: t.clientY,
          });
      }
      !((M && M.fox) || L) ||
        !e.cancelable ||
        (e.target.closest && e.target.closest("button")) ||
        e.preventDefault();
    },
    tm: (e) => {
      if (M && void 0 !== M.tid && !c) {
        const t = [...e.changedTouches].find((e) => e.identifier === M.tid);
        t && k(t);
      }
      ((M && M.fox) || L) && e.cancelable && e.preventDefault();
    },
    te: (e) => {
      M && void 0 !== M.tid && [...e.changedTouches].some((e) => e.identifier === M.tid) && (M = null);
    },
    key: (e) => {
      if (c) return;
      const a = mzN(t, l[l.length - 1], e);
      if (a < 0) return sfx(220, 0.06);
      S([a]);
    },
  }),
    (act.mzk = (e) => wsG && wsG.key && wsG.key(+e)),
    (act.hint = () => {
      if (c) return;
      const e = mzPath(t, l[l.length - 1], t.e, n);
      e &&
        e.length &&
        spend(1) &&
        (E.setAttribute("points", h([l[l.length - 1], ...e.slice(0, 6)])),
        E.classList.remove("on"),
        E.getBoundingClientRect(),
        E.classList.add("on"),
        clearTimeout(d),
        (d = setTimeout(() => {
          (E.classList.remove("on"), E.setAttribute("points", ""));
        }, 3100)),
        msg(
          o ? "Le chemin du pôle Nord s’éclaire un instant." : "Le sentier de la lune s’éclaire un instant.",
        ));
    }),
    y(!0),
    msg(o ? "Aide le cerf à retourner au pôle Nord." : "Guide le renard jusqu’au terrier."),
    l[l.length - 1] === t.e && A());
}
