const dMx = (e, t, a) => [e[0] + (t[0] - e[0]) * a, e[1] + (t[1] - e[1]) * a];
const dWallShelf = (e, t, a, s, n, o = dWood) => {
  const i = "R" === t ? e.box(a, 0, n, s - a, 0.6, 0.12, o) : e.box(0, a, n, 0.6, s - a, 0.12, o),
    r =
      "R" === t
        ? [
            e.P(a + 0.15, 0.05, n),
            e.P(a + 0.15, 0.05, n - 0.35),
            e.P(s - 0.15, 0.05, n),
            e.P(s - 0.15, 0.05, n - 0.35),
          ]
        : [
            e.P(0.05, a + 0.15, n),
            e.P(0.05, a + 0.15, n - 0.35),
            e.P(0.05, s - 0.15, n),
            e.P(0.05, s - 0.15, n - 0.35),
          ];
  (e.ln(r[0], r[1], dSh(o, 0.6), 1.4), e.ln(r[2], r[3], dSh(o, 0.6), 1.4));
  const l =
    "R" === t
      ? [e.P(a, 0, n + 0.12), e.P(s, 0, n + 0.12), e.P(s, 0.6, n + 0.12), e.P(a, 0.6, n + 0.12)]
      : [e.P(0, a, n + 0.12), e.P(0.6, a, n + 0.12), e.P(0.6, s, n + 0.12), e.P(0, s, n + 0.12)];
  e.zone(
    "wshelf",
    l,
    dHull([
      ...i.hull,
      ...("R" === t ? [e.P(a, 0, n + 1.1), e.P(s, 0, n + 1.1)] : [e.P(0, a, n + 1.1), e.P(0, s, n + 1.1)]),
    ]),
  );
};
const dHooks = (e, t, a, s, n, o = "#8a5a36") => {
  const i = Math.max(3, Math.round((s - a) / 0.6));
  if ("R" === t) {
    e.pg(e.qR(a, s, n - 0.12, n + 0.22), o, dSh(o, 0.7));
    for (let t = 0; t < i; t++) {
      const o = a + ((t + 0.5) * (s - a)) / i,
        r = e.P(o, 0.05, n),
        l = e.P(o, 0.35, n - 0.1);
      e.ln(r, l, "#d9c08a", 2);
    }
    e.zone("hook", e.qR(a - 0.1, s + 0.1, n - 1.8, n + 0.4), null, "c");
  } else {
    e.pg(e.qL(a, s, n - 0.12, n + 0.22), o, dSh(o, 0.7));
    for (let t = 0; t < i; t++) {
      const o = a + ((t + 0.5) * (s - a)) / i,
        r = e.P(0.05, o, n),
        l = e.P(0.35, o, n - 0.1);
      e.ln(r, l, "#d9c08a", 2);
    }
    e.zone("hook", e.qL(a - 0.1, s + 0.1, n - 1.8, n + 0.4), null, "c");
  }
};
const dBench = (e, t, a, s, n, o = "#b98a5a") => {
  (e.box(t, a, 0, s, 0.15, 1.3, dSh(o, 0.85)), e.box(t, a + n - 0.15, 0, s, 0.15, 1.3, dSh(o, 0.85)));
  const i = e.box(t, a + 0.15, 0.12, s, n - 0.3, 0.1, dSh(o, 0.95)),
    r = [
      e.P(t + s, a + 0.2, 0.22),
      e.P(t + s, a + n - 0.2, 0.22),
      e.P(t + s, a + n - 0.2, 0.95),
      e.P(t + s, a + 0.2, 0.95),
    ];
  e.zone("shoes", r, dHull([...i.hull, ...r]), "b");
  const l = e.box(t, a, 1.3, s, n, 0.16, o);
  (e.box(t, a, 1.46, 0.25, n, 1.4, dSh(o, 0.9)), e.zone("bench", l.top, l.hull));
};
const dConsole = (e, t, a, s, n, o = "#8a5a36") => {
  ([
    [0.05, 0.05],
    [s - 0.2, 0.05],
    [0.05, n - 0.2],
    [s - 0.2, n - 0.2],
  ].forEach(([s, n]) => e.box(t + s, a + n, 0, 0.15, 0.15, 1.9, dSh(o, 0.8))),
    e.box(t + 0.05, a + 0.05, 0.5, s - 0.1, n - 0.1, 0.08, dSh(o, 0.9)));
  const i = e.box(t, a, 1.9, s, n, 0.16, o);
  e.zone("console", i.top, i.hull);
};
const dUStand = (e, t, a, s = "#5f86a8") => {
  e.cyl(t, a, 0, 0.32, 1.3, s);
  const n = e.P(t, a, 1.3),
    o = 9.4752;
  e.zone(
    "ustand",
    [
      [n[0] - o, n[1] - 28],
      [n[0] + o, n[1] - 28],
      [n[0] + o, n[1] + 4],
      [n[0] - o, n[1] + 4],
    ],
    [
      [n[0] - o - 2, n[1] - 34],
      [n[0] + o + 2, n[1] - 34],
      [n[0] + o + 2, n[1] + 1.3 * 24 + 8],
      [n[0] - o - 2, n[1] + 1.3 * 24 + 8],
    ],
    "b",
  );
};
const dChanging = (e, t, a, s, n, o = "#f4efe6", i = "L") => {
  const r = e.box(t, a, 0, s, n, 2, o),
    l = e.box(t + 0.1, a + 0.1, 2, s - 0.2, n - 0.2, 0.18, "#bfe6da", { t: "#d4f2e8" });
  (e.zone("change", l.top, dHull([...r.hull, ...l.hull])),
    dStore(e, t, a, s, n, i, o, [
      { t: "drawer", k: "bdrawer", a: 0.05, b: 0.95, z0: 1.05, z1: 1.92, cap: 2 },
      { t: "drawer", k: "bdrawer", a: 0.05, b: 0.95, z0: 0.1, z1: 0.95, cap: 2 },
    ]));
};
const dToyBox = (e, t, a, s, n, o = "#7fc0ee") => {
  const i = e.box(t, a, 0, s, n, 1, o),
    r = [
      e.P(t + 0.1, a + 0.1, 1),
      e.P(t + s - 0.1, a + 0.1, 1),
      e.P(t + s - 0.1, a + n - 0.1, 1),
      e.P(t + 0.1, a + n - 0.1, 1),
    ];
  e.pg(r, dSh(o, 0.55));
  const l = e.P(t + 0.5 * s, a + n, 0.5);
  ((e.s += `<circle cx="${l[0].toFixed(1)}" cy="${l[1].toFixed(1)}" r="5" fill="#ffd36b"/><circle cx="${(l[0] + 9).toFixed(1)}" cy="${(l[1] + 4).toFixed(1)}" r="3.4" fill="#ff9ab8"/>`),
    e.zone("toybox", r, i.hull));
};
const dRocker = (e, t, a, s = "#e8c9a0") => {
  ((e.s += `<path d="M${e.P(t, a, 0)[0].toFixed(1)} ${e.P(t, a, 0)[1].toFixed(1)}Q${e.P(t + 0.6, a + 0.6, -0.3)[0].toFixed(1)} ${e.P(t + 0.6, a + 0.6, -0.3)[1].toFixed(1)} ${e.P(t + 1.2, a + 1.2, 0)[0].toFixed(1)} ${e.P(t + 1.2, a + 1.2, 0)[1].toFixed(1)}" stroke="${dSh(s, 0.6)}" stroke-width="2.4" fill="none"/>`),
    e.box(t + 0.1, a + 0.1, 0.2, 1, 1, 0.7, dSh(s, 0.9)),
    e.box(t + 0.1, a + 0.1, 0.9, 1, 1, 0.22, s),
    e.box(t + 0.1, a + 0.1, 1.12, 0.22, 1, 1.3, dSh(s, 0.95)));
};
const dFiling = (e, t, a, s, n, o = "#9aa6b8", i = "R") => {
  const r = e.box(t, a, 0, s, n, 2.7, o);
  (e.zone("side", r.top, r.hull),
    dStore(
      e,
      t,
      a,
      s,
      n,
      i,
      o,
      [2, 1, 0].map((e) => ({
        t: "drawer",
        k: "files",
        a: 0.06,
        b: 0.94,
        z0: (2.7 * e) / 3 + 0.08,
        z1: (2.7 * (e + 1)) / 3 - 0.08,
        cap: 2,
      })),
    ));
};
const dDeskO = (e, t, a, s, n, o = dWood) => {
  (e.box(t + 0.05, a, 0, 0.22, n, 2, dSh(o, 0.8)), e.box(t + s - 1.1, a, 0, 1.05, n, 2, dSh(o, 0.92)));
  const i = e.box(t, a, 2, s, n, 0.2, o);
  (e.zone("desk", i.top, dHull([...i.hull, e.P(t + 0.05, a + n, 0)])),
    dStore(e, t + s - 1.1, a, 1.05, n, "L", dSh(o, 0.92), [
      { t: "drawer", k: "odrawer", a: 0.06, b: 0.94, z0: 1.05, z1: 1.92, cap: 2 },
      { t: "drawer", k: "odrawer", a: 0.06, b: 0.94, z0: 0.1, z1: 0.97, cap: 2 },
    ]));
};
const dUpperC = (e, t, a, s = "#e8e4da") => {
  e.box(t, 0, 3.2, a - t, 0.8, 1.4, s);
  const n = Math.max(1, Math.round((a - t) / 0.95));
  dStore(
    e,
    t,
    0,
    a - t,
    0.8,
    "L",
    s,
    [...Array(n)].map((e, t) => ({
      t: "door",
      k: "ucab",
      a: t / n + 0.02,
      b: (t + 1) / n - 0.02,
      z0: 3.28,
      z1: 4.52,
      hg: t % 2 ? "r" : "l",
      cap: 2,
    })),
  );
};
const dCounterF = (e, t, a, s, n, o = "L", i = "#e8e4da", r = "#7a8896") => {
  const l = 1.9,
    c = e.box(t, a, 0, s, n, l, r, { t: i });
  e.box(t - 0.03, a - 0.03, l, s + 0.06, n + 0.06, 0.18, i);
  const d = [e.P(t, a, 2.08), e.P(t + s, a, 2.08), e.P(t + s, a + n, 2.08), e.P(t, a + n, 2.08)];
  (e.zone("counter", d, c.hull),
    dStore(e, t, a, s, n, o, r, [
      { t: "drawer", k: "kdrawer", a: 0.04, b: 0.96, z0: 1.4, z1: l - 0.06, cap: 2 },
      ...(("L" === o ? s : n) >= 1.7
        ? [
            { t: "door", k: "cab", a: 0.04, b: 0.5, z0: 0.1, z1: l - 0.6, hg: "l", cap: 2 },
            { t: "door", k: "cab", a: 0.5, b: 0.96, z0: 0.1, z1: l - 0.6, hg: "r", cap: 2 },
          ]
        : [{ t: "door", k: "cab", a: 0.04, b: 0.96, z0: 0.1, z1: l - 0.6, hg: "l", cap: 2 }]),
    ]));
};
const dVanityC = (e, t, a, s, n, o, i = "#f1f2f7") => {
  (dVanity(e, t, a, s, n, o, i),
    dStore(e, t, a, s, n, "R", o, [
      { t: "door", k: "bcab", a: 0.05, b: 0.5, z0: 0.12, z1: 1.65, hg: "l", cap: 2 },
      { t: "door", k: "bcab", a: 0.5, b: 0.95, z0: 0.12, z1: 1.65, hg: "r", cap: 2 },
    ]));
};
const dHamper = (e, t, a, s = "#d9c08a") => {
  const n = e.box(t, a, 0, 0.9, 0.9, 1.3, s);
  for (let t = 1; t < 4; t++) {
    const a = t / 4;
    (e.ln(dMx(n.L[0], n.L[3], a), dMx(n.L[1], n.L[2], a), dSh(s, 0.7), 1),
      e.ln(dMx(n.R[0], n.R[3], a), dMx(n.R[1], n.R[2], a), dSh(s, 0.6), 1));
  }
  (e.pg(
    [
      e.P(t + 0.08, a + 0.08, 1.3),
      e.P(t + 0.82, a + 0.08, 1.3),
      e.P(t + 0.82, a + 0.82, 1.3),
      e.P(t + 0.08, a + 0.82, 1.3),
    ],
    dSh(s, 0.5),
  ),
    e.zone("hamper", n.top, n.hull));
};
const dBase = (e, t) => {
  (e.ln(e.P(0, 0, 0.12), e.P(0, e.D, 0.12), dSh(t, 0.8), 2.2),
    e.ln(e.P(0, 0, 0.12), e.P(e.W, 0, 0.12), dSh(t, 0.8), 2.2));
};
const dArtR = (e, t, a, s, n, o) => {
  (e.pg(e.qR(t - 0.1, a + 0.1, s - 0.1, n + 0.1), "#f4efe6", "#c9bfae"),
    e.pg(e.qR(t, a, s, n), o[0]),
    e.pg(
      [
        e.P(t, 0, s),
        e.P(a, 0, s),
        e.P(a, 0, s + 0.45 * (n - s)),
        e.P((t + a) / 2, 0, s + 0.7 * (n - s)),
        e.P(t, 0, s + 0.4 * (n - s)),
      ],
      o[1],
    ));
  const i = e.P(t + 0.72 * (a - t), 0, s + 0.75 * (n - s));
  e.s += `<circle cx="${i[0].toFixed(1)}" cy="${i[1].toFixed(1)}" r="2.4" fill="${o[2]}"/>`;
};
const dArtL = (e, t, a, s, n, o) => {
  (e.pg(e.qL(t - 0.1, a + 0.1, s - 0.1, n + 0.1), "#f4efe6", "#c9bfae"),
    e.pg(e.qL(t, a, s, n), o[0]),
    e.pg(
      [
        e.P(0, t, s),
        e.P(0, a, s),
        e.P(0, a, s + 0.4 * (n - s)),
        e.P(0, (t + a) / 2, s + 0.7 * (n - s)),
        e.P(0, t, s + 0.45 * (n - s)),
      ],
      o[1],
    ));
  const i = e.P(0, t + 0.3 * (a - t), s + 0.75 * (n - s));
  e.s += `<circle cx="${i[0].toFixed(1)}" cy="${i[1].toFixed(1)}" r="2.4" fill="${o[2]}"/>`;
};
const dPotPlant = (e, t, a, s = 1, n = "#d98c63") => {
  (e.cyl(t, a, 0, 0.32 * s, 0.7 * s, n), (e.ch[e.ch.length - 1].h = 2.2 * s));
  const o = e.P(t, a, 0.7 * s);
  e.s += `<g transform="translate(${o[0].toFixed(1)} ${o[1].toFixed(1)}) scale(${s})"><path d="M0 0C-12 -6-14-22-4-30C-6-18 0-10 0 0Z" fill="#5fae6a"/><path d="M0 0C12 -6 16-20 6-30C8-18 2-10 0 0Z" fill="#4f9a5a"/><path d="M0 0C-3-12 0-24 2-36C6-24 4-10 0 0Z" fill="#6fc07a"/></g>`;
};
const dCurtR = (e, t, a, s, n, o) => {
  ([
    [t - 0.45, t + 0.05],
    [a - 0.05, a + 0.45],
  ].forEach(([t, a]) => {
    (e.pg(e.qR(t, a, s - 0.6, n + 0.25), o, dSh(o, 0.8)),
      e.ln(e.P((t + a) / 2, 0, s - 0.5), e.P((t + a) / 2, 0, n + 0.2), dSh(o, 0.85), 1));
  }),
    e.ln(e.P(t - 0.6, 0.04, n + 0.35), e.P(a + 0.6, 0.04, n + 0.35), "#8a6a4a", 2));
};
const dCurtL = (e, t, a, s, n, o) => {
  ([
    [t - 0.45, t + 0.05],
    [a - 0.05, a + 0.45],
  ].forEach(([t, a]) => {
    (e.pg(e.qL(t, a, s - 0.6, n + 0.25), o, dSh(o, 0.8)),
      e.ln(e.P(0, (t + a) / 2, s - 0.5), e.P(0, (t + a) / 2, n + 0.2), dSh(o, 0.85), 1));
  }),
    e.ln(e.P(0.04, t - 0.6, n + 0.35), e.P(0.04, a + 0.6, n + 0.35), "#8a6a4a", 2));
};
const dLampF = (e, t, a) => {
  (e.box(t + 0.15, a + 0.15, 0, 0.3, 0.3, 0.08, "#7a6a5a"),
    e.box(t + 0.27, a + 0.27, 0.08, 0.06, 0.06, 3.1, "#8a7a6a", { noL: 0 }),
    e.cyl(t + 0.3, a + 0.3, 3, 0.38, 0.6, "#ffe2a8"));
};
const dClockW = (e, t, a, s) => {
  const n = "R" === t ? e.P(a, 0, s) : e.P(0, a, s);
  e.s += `<circle cx="${n[0].toFixed(1)}" cy="${n[1].toFixed(1)}" r="7" fill="#f4efe6" stroke="#8a6a4a" stroke-width="1.6"/><path d="M${n[0].toFixed(1)} ${(n[1] - 4.5).toFixed(1)}V${n[1].toFixed(1)}h3.4" stroke="#5a4a3a" stroke-width="1.2" fill="none" stroke-linecap="round"/>`;
};
const dSlide = (e, t, a) => {
  (e.box(t, a, 0, 0.15, 0.15, 2.6, "#e86a6a"),
    e.box(t + 0.85, a, 0, 0.15, 0.15, 2.6, "#e86a6a"),
    e.box(t, a, 2.4, 1, 0.9, 0.15, "#ffd36b"),
    e.pg(
      [e.P(t, a + 0.9, 2.45), e.P(t + 1, a + 0.9, 2.45), e.P(t + 1, a + 3, 0), e.P(t, a + 3, 0)],
      "#7fc0ee",
      "#5fa2d4",
    ));
};
const dShower = (e, t, a, s, n) => {
  const o = e.box(t, a, 0, s, n, 0.22, "#f4f6fa"),
    i = [
      e.P(t + 0.12, a + 0.12, 0.22),
      e.P(t + s - 0.12, a + 0.12, 0.22),
      e.P(t + s - 0.12, a + n - 0.12, 0.22),
      e.P(t + 0.12, a + n - 0.12, 0.22),
    ];
  e.pg(i, "#dfe9f2", "#b8c6d4");
  for (let o = 1; o < 6; o++)
    e.ln(
      e.P(t + 0.12 + (o * (s - 0.24)) / 6, a + 0.12, 0.23),
      e.P(t + 0.12 + (o * (s - 0.24)) / 6, a + n - 0.12, 0.23),
      "#c9d6e2",
      0.8,
    );
  const r = e.P(t + 0.15, a + 0.5 * n, 3.9);
  (e.ln(e.P(0.04, a + 0.5 * n, 3.1), e.P(0.04, a + 0.5 * n, 3.95), "#aab4c4", 2),
    (e.s += `<ellipse cx="${(r[0] + 5).toFixed(1)}" cy="${(r[1] + 1).toFixed(1)}" rx="5" ry="2.4" fill="#aab4c4"/>`),
    e.zone("tub", i, dHull([...o.hull, e.P(t, a + n, 2.2), e.P(t + s, a, 2.2), e.P(t + s, a + n, 2.2)])));
  const l = (t) => {
    e.pg(t, "rgba(190,225,245,.32)", "#9fb3c4", 1.2);
  };
  (l([e.P(t, a + n, 0.22), e.P(t + s, a + n, 0.22), e.P(t + s, a + n, 3.9), e.P(t, a + n, 3.9)]),
    l([e.P(t + s, a, 0.22), e.P(t + s, a + n, 0.22), e.P(t + s, a + n, 3.9), e.P(t + s, a, 3.9)]),
    e.ln(e.P(t + s, a + n, 0.22), e.P(t + s, a + n, 3.9), "#9fb3c4", 2.2),
    e.ln(e.P(t, a + n, 3.9), e.P(t + s, a + n, 3.9), "#9fb3c4", 1.6),
    e.ln(e.P(t + s, a, 3.9), e.P(t + s, a + n, 3.9), "#9fb3c4", 1.6),
    e.ln(e.P(t + 0.55 * s, a + n, 1.6), e.P(t + 0.55 * s, a + n, 2.4), "#e8eef4", 2.4),
    e.ch.push({ at: e.s.length, x: t, y: a, z: 0, w: s, d: n, h: 3.9 }));
};
const dVanityL = (e, t, a, s, n, o, i = "#f4f4f6") => {
  const r = e.box(t, a, 0, s, n, 1.9, o, { t: i });
  ([0.28, 0.72].forEach((o) => {
    const i = e.P(t + s * o, a + 0.5 * n, 1.9);
    e.s += `<ellipse cx="${i[0].toFixed(1)}" cy="${i[1].toFixed(1)}" rx="9" ry="4.4" fill="#dfe7ee" stroke="#b8c6d4"/>`;
    const r = e.P(t + s * o, a + 0.12, 1.9);
    e.s += `<rect x="${(r[0] - 1.5).toFixed(1)}" y="${(r[1] - 8).toFixed(1)}" width="3" height="8" rx="1.2" fill="#aab4c4"/>`;
  }),
    e.zone("sink", [e.P(t, a, 1.9), e.P(t + s, a, 1.9), e.P(t + s, a + n, 1.9), e.P(t, a + n, 1.9)], r.hull),
    dStore(e, t, a, s, n, "L", o, [
      { t: "door", k: "bcab", a: 0.03, b: 0.26, z0: 0.12, z1: 1.7, hg: "l", cap: 1 },
      { t: "door", k: "bcab", a: 0.26, b: 0.5, z0: 0.12, z1: 1.7, hg: "r", cap: 1 },
      { t: "door", k: "bcab", a: 0.5, b: 0.74, z0: 0.12, z1: 1.7, hg: "l", cap: 1 },
      { t: "door", k: "bcab", a: 0.74, b: 0.97, z0: 0.12, z1: 1.7, hg: "r", cap: 1 },
    ]));
};
const dSwing = (e, t, a, s) => {
  const n = 2.6,
    o = "#e86a6a";
  (e.ch.push({ at: e.s.length, x: t, y: a, z: 0, w: 1, d: s, h: n }),
    [[a], [a + s]].forEach(([a]) => {
      (e.ln(e.P(t, a, 0), e.P(t + 0.5, a, n), dSh(o, 0.8), 4),
        e.ln(e.P(t + 1, a, 0), e.P(t + 0.5, a, n), o, 4));
    }),
    e.box(t + 0.44, a - 0.05, 2.52, 0.12, s + 0.1, 0.14, "#c9523f"),
    [a + 0.3 * s, a + 0.7 * s].forEach((a) => {
      (e.ln(e.P(t + 0.5, a - 0.2, n - 0.05), e.P(t + 0.5, a - 0.2, 0.75), "#8a8f9a", 1.2),
        e.ln(e.P(t + 0.5, a + 0.2, n - 0.05), e.P(t + 0.5, a + 0.2, 0.75), "#8a8f9a", 1.2),
        e.box(t + 0.3, a - 0.28, 0.62, 0.4, 0.56, 0.1, "#ffd36b"));
    }),
    e.ln(e.P(t, a, 0), e.P(t, a, 0), o, 1));
};
const dYard2 = (e) => {
  for (let t = 0.35; t < 7; t += 0.5)
    (e.ln(e.P(0, t, 0.05), e.P(0, t, 2), "#b9a782", 1.2),
      e.ln(e.P(t, 0, 0.05), e.P(t, 0, 2), "#b9a782", 1.2));
  (e.ln(e.P(0, 0, 1.75), e.P(0, 7, 1.75), "#a8966f", 2),
    e.ln(e.P(0, 0, 1.75), e.P(7, 0, 1.75), "#a8966f", 2),
    [
      [2.6, 1.8],
      [3.3, 2.5],
      [3.9, 3.3],
      [4.3, 4.2],
      [4.5, 5.2],
      [4.6, 6.2],
    ].forEach(([t, a]) => {
      e.pg([e.P(t, a), e.P(t + 0.5, a), e.P(t + 0.5, a + 0.42), e.P(t, a + 0.42)], "#d9d2c2", "#bdb4a0", 0.8);
    }));
  for (let t = 0; t < 26; t++) {
    const a = 0.3 + ((37 * t) % 63) / 10,
      s = 0.3 + ((53 * t) % 65) / 10,
      n = e.P(a, s);
    e.s += `<path d="M${n[0].toFixed(1)} ${n[1].toFixed(1)}l-2-5M${n[0].toFixed(1)} ${n[1].toFixed(1)}l0-6M${n[0].toFixed(1)} ${n[1].toFixed(1)}l2-5" stroke="#6fb46a" stroke-width="1.2" stroke-linecap="round"/>`;
  }
  const t = e.box(0.4, 0.15, 0, 3.2, 1.1, 0.6, "#8a5a3a", { t: "#7a4e32" }),
    a = [e.P(0.5, 0.25, 0.6), e.P(3.5, 0.25, 0.6), e.P(3.5, 1.15, 0.6), e.P(0.5, 1.15, 0.6)];
  (e.pg(a, "#5a3d2a"),
    [
      [0.9, 0.5],
      [1.4, 0.9],
      [1.9, 0.5],
      [2.4, 0.9],
      [2.9, 0.55],
      [3.2, 0.9],
    ].forEach(([t, a], s) => {
      const n = e.P(t, a, 0.6);
      e.s += `<path d="M${n[0].toFixed(1)} ${n[1].toFixed(1)}v-7" stroke="#4f9a5a" stroke-width="1.4"/><circle cx="${n[0].toFixed(1)}" cy="${(n[1] - 8).toFixed(1)}" r="3.2" fill="${["#f08aa8", "#f4c24a", "#fff", "#a98fe0", "#ff9a5a", "#f08aa8"][s]}"/>`;
    }),
    e.zone("flowerbed", a, t.hull));
  const s = 4.3,
    n = 1.7,
    o = 2.5;
  e.box(s, 0, 0, 2.5, n, o, "#c9a06a");
  for (let t = 1; t < 9; t++) {
    const a = s + (2.5 * t) / 9;
    e.ln(e.P(a, n, 0.05), e.P(a, n, o), "#b08a58", 1);
  }
  (e.pg(
    [e.P(s - 0.15, -0.1, o), e.P(6.95, -0.1, o), e.P(6.95, 0.85, 3.4), e.P(s - 0.15, 0.85, 3.4)],
    "#8a4a3a",
    "#6a3a2a",
  ),
    e.pg(
      [e.P(s - 0.15, 0.85, 3.4), e.P(6.95, 0.85, 3.4), e.P(6.95, n + 0.15, o), e.P(s - 0.15, n + 0.15, o)],
      "#a85a46",
      "#6a3a2a",
    ),
    e.pg(
      [
        e.P(6.8, -0.1, o),
        e.P(6.8, n + 0.15, o),
        e.P(6.95, n + 0.15, o),
        e.P(6.95, 0.85, 3.4),
        e.P(6.95, -0.1, o),
      ],
      "#7a3e30",
    ));
  const i = e.P(6.8, 0.85, 1.7);
  ((e.s += `<rect x="${(i[0] - 4).toFixed(1)}" y="${(i[1] - 9).toFixed(1)}" width="8" height="8" fill="#bfe3ff" stroke="#8a6a4a" transform="skewY(-26.6)" transform-origin="${i[0].toFixed(1)} ${i[1].toFixed(1)}"/>`),
    dStore(e, s, 0, 2.5, n, "L", "#c9a06a", [
      { t: "door", k: "shed", a: 0.1, b: 0.5, z0: 0.05, z1: 2.1, hg: "l", cap: 2 },
      { t: "door", k: "shed", a: 0.5, b: 0.9, z0: 0.05, z1: 2.1, hg: "r", cap: 2 },
    ]),
    e.box(0.7, 3, 0, 1.8, 0.35, 0.8, "#a8784a"),
    dTable(e, 0.7, 3.5, 1.8, 1.3, 1.5, "#b98a5a", "ptable"),
    e.box(0.7, 5, 0, 1.8, 0.35, 0.8, "#a8784a"));
  const r = e.box(4.9, 4.5, 0, 1.9, 1.9, 0.5, "#c9a36a"),
    l = [e.P(5.05, 4.65, 0.5), e.P(6.65, 4.65, 0.5), e.P(6.65, 6.25, 0.5), e.P(5.05, 6.25, 0.5)];
  (e.pg(l, "#f0d9a0"), e.zone("sandbox", l, r.hull));
};
const dYardOld = DRM[DRM.length - 1].b;
((DRM.length = 0),
  DRM.push(
    {
      h: "Condo",
      n: "La chambre",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#c9d3f0", "#b7c3ea", "#d8b58a", "#d1ad80"],
      b: (e) => {
        (dBase(e, "#b7c3ea"),
          dWinR(e, 0.9, 2.5, 2.4, 4.4),
          dCurtR(e, 0.9, 2.5, 2.4, 4.4, "#f4c7d4"),
          dArtL(e, 2.3, 3.9, 3, 4.2, ["#f6e1b8", "#8fb0c9", "#e8946c"]),
          dWallShelf(e, "R", 3.1, 5.1, 3.5),
          dRug(e, 2.9, 2.6, 3, 2.8, "#b9a6e0"),
          dSide(e, 0, 0.1, 0.9, 0.9),
          dDesk(e, 3, 0, 2.2, 1.3),
          dWard(e, 5.4, 0, 1.6, 1.3, 4.2, "#e2d3b8", "L"),
          dBed(e, 0, 1.2, 2.6, 4.2, "#8f7fe0"),
          dChairOf(e, 3.7, 1.7),
          dDresser(e, 0, 5.6, 1.1, 1.3, 1.7, dWood, "R"),
          dPotPlant(e, 6.4, 2.2, 0.9));
      },
      items: [
        "pillow",
        "teddy",
        "lamp",
        "clock",
        "books",
        "computer",
        "shirt",
        "dress",
        "sweater",
        "socks",
        "poster",
        "plant",
      ],
    },
    {
      h: "Condo",
      n: "La salle de bain",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#cfe6ee", "#bcd9e4", "#e6eef2", "#cfdde4"],
      b: (e) => {
        (dBase(e, "#bcd9e4"),
          dWinR(e, 3.3, 5.3, 2.4, 4.5),
          dWallShelf(e, "R", 5.7, 6.9, 3.3, "#f4efe6"),
          dVanityC(e, 0, 0.3, 1.6, 2.2, "#a9825a"),
          dTub(e, 2.2, 0, 4.6, 2.2),
          dRail(e, 3.4, 5.2, 3),
          dToilet(e, 0, 3.6),
          dRug(e, 2.6, 3, 2.4, 1.4, "#9ad0e0"),
          dHamper(e, 5.8, 5.6, "#d9c08a"),
          dPotPlant(e, 0.45, 6.45, 0.7, "#7fc0ee"));
      },
      items: [
        "toothbrush",
        "toothpaste",
        "soap",
        "towel",
        "shampoo",
        "paper",
        "duck",
        "mirror",
        "bathmat",
        "hairdryer",
        "cream",
      ],
    },
    {
      h: "Condo",
      n: "La cuisine",
      stk: 1,
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#efe6d2", "#e2d8c2", "#b98a5a", "#b0814f"],
      b: (e) => {
        (dBase(e, "#e2d8c2"),
          dWinL(e, 2.3, 4.5, 2, 4.3),
          dCurtL(e, 2.3, 4.5, 2, 4.3, "#f2c79a"),
          dUpperC(e, 0.4, 3.3),
          dUpperC(e, 3.3, 5.2),
          dRug(e, 1.6, 3, 3.6, 3.2, "#e9c9b0"),
          dCounter(e, 0.4, 0, 1.5, 1.3),
          dStove(e, 1.9, 0, 1.4, 1.3),
          dCounter(e, 3.3, 0, 1.9, 1.3),
          dFridge(e, 5.4, 0, 1.4, 1.3),
          dChairOf(e, 1.3, 3.6, "#e8946c"),
          dTable(e, 2.5, 3.3, 2, 1.8, 1.7),
          dChairOf(e, 4.9, 3.6, "#e8946c"));
      },
      items: [
        "pot",
        "pan",
        "plate",
        "mug",
        "bowl",
        "cutlery",
        "spatula",
        "kettle",
        "toaster",
        "fruit",
        "magnet",
        "plant",
      ],
    },
    {
      h: "Condo",
      n: "Le salon",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#e8d9c4", "#dccbb2", "#b08e6a", "#a8865f"],
      b: (e) => {
        (dBase(e, "#dccbb2"),
          dWinR(e, 2.9, 4.9, 2.4, 4.4),
          dCurtR(e, 2.9, 4.9, 2.4, 4.4, "#a9c6d9"),
          dWallShelf(e, "L", 2.2, 4.2, 3.6),
          dRug(e, 2.4, 2, 3.6, 3.4, "#8fb0c9"),
          dSide(e, 0, 0.2, 1, 1),
          dTV(e, 2.4, 0, 2.8, 1.2),
          dShelf(e, 5.6, 0, 1.4, 1, 3.4, dWood, "L"),
          dSofa(e, 0, 1.8, 2.1, 3.8, "#6f86a8"),
          dTable(e, 3.3, 2.7, 1.6, 1.7, 0.9, dWood, "coffee"),
          dLampF(e, 0.3, 5.9));
      },
      items: [
        "tv",
        "gamepad",
        "remote",
        "books",
        "book",
        "cushion",
        "blanket",
        "vase",
        "frame",
        "lamp",
        "plant",
      ],
    },
    {
      h: "Condo",
      n: "La chambre de bébé",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#f8ead0", "#f0dfbe", "#e6cfa8", "#dfc69c"],
      b: (e) => {
        (dBase(e, "#f0dfbe"),
          dWinR(e, 3, 4.6, 2.4, 4.3),
          dCurtR(e, 3, 4.6, 2.4, 4.3, "#bfe6da"),
          dArtL(e, 1.4, 2.8, 3.2, 4.3, ["#fff6e0", "#ffc9d6", "#ffd36b"]),
          dWallShelf(e, "L", 4.4, 6.2, 3.1, "#f4efe6"),
          dRug(e, 2.4, 2.6, 3.2, 3.2, "#cfe8f6"),
          dChanging(e, 2.9, 0, 2, 1.2),
          dShelf(e, 5.3, 0, 1.5, 1, 2.8, "#f1e6d4", "L"),
          dCrib(e, 0, 0.6, 2, 3.2),
          dRocker(e, 1, 4.9, "#e8c9a0"),
          dToyBox(e, 4.6, 5, 1.6, 1.2, "#7fc0ee"));
      },
      items: [
        "blanket",
        "teddy",
        "bottle",
        "diapers",
        "onesie",
        "rattle",
        "blocks",
        "nightlight",
        "book",
        "duck",
        "horse",
      ],
    },
    {
      h: "Maison",
      n: "La nouvelle salle de bain",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#dde9e2", "#cfe0d6", "#f4f6f4", "#e2ebe5"],
      b: (e) => {
        (dBase(e, "#cfe0d6"),
          dWinL(e, 4.9, 6.3, 2.6, 4.4),
          dCurtL(e, 4.9, 6.3, 2.6, 4.4, "#b9d8c6"),
          dShower(e, 0, 0, 1.7, 1.7),
          dWallShelf(e, "L", 2.9, 4.4, 3.7, "#f4efe6"),
          dRailR(e, 5.3, 6.8, 3.1),
          dVanityL(e, 2.1, 0, 2.8, 1.25, "#7fa38f"),
          dToilet(e, 0, 3),
          dRug(e, 2.4, 2.4, 2.6, 1.6, "#a8ccb6"),
          dHamper(e, 5.9, 2, "#e8d2a8"),
          dPotPlant(e, 0.5, 6.4, 0.85, "#e8d2a8"));
      },
      items: [
        "toothbrush",
        "toothpaste",
        "soap",
        "towel",
        "shampoo",
        "perfume",
        "plant",
        "bathmat",
        "cream",
        "hairdryer",
        "laundry",
        "duck",
      ],
    },
    {
      h: "Maison",
      n: "L’entrée",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#f2e2cc", "#e8d4b8", "#c9a77e", "#c19f76"],
      b: (e) => {
        (dBase(e, "#e8d4b8"),
          dDoorR(e, 4.4, 6, 3.7, "#a87a52"),
          dHooks(e, "R", 0.9, 3.7, 3.4),
          dArtL(e, 4.6, 6, 3.1, 4.2, ["#e9f2f6", "#9ac2a0", "#f2b84a"]),
          dRug(e, 4.2, 0.9, 2, 1.6, "#c98a6a"),
          dUStand(e, 6.45, 0.5),
          dBench(e, 0, 0.8, 1.1, 2.8),
          dConsole(e, 0, 4.5, 1, 2),
          dPotPlant(e, 6.2, 6.2, 1.1));
      },
      items: [
        "coat",
        "hat",
        "scarf",
        "boots",
        "sneakers",
        "umbrella",
        "keys",
        "bag",
        "mirror",
        "plant",
        "frame",
        "letters",
      ],
    },
    {
      h: "Maison",
      n: "La chambre des parents",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#f0dccd", "#e6cdb9", "#c9a27e", "#c19a76"],
      b: (e) => {
        (dBase(e, "#e6cdb9"),
          dWinL(e, 2.4, 4.2, 2.6, 4.5),
          dCurtL(e, 2.4, 4.2, 2.6, 4.5, "#d98c6a"),
          dArtR(e, 2.7, 4.6, 3.2, 4.3, ["#fbefe2", "#e8946c", "#f2c24a"]),
          dRug(e, 2, 2.6, 3.6, 3.2, "#d9b8a0"),
          dWard(e, 0, 0.2, 1.3, 2, 4.2, "#e8d8c0", "R"),
          dChairOf(e, 0.2, 2.9, "#c98a6a"),
          dSide(e, 1.4, 0.1, 0.9, 0.9, 1.25, "#a8724a"),
          dSide(e, 5, 0.1, 0.9, 0.9, 1.25, "#a8724a"),
          dBed(e, 2.3, 0.2, 2.6, 4.2, "#e8a28a", "#8a5236", "#fbf6ee"),
          dDresser(e, 0, 4.6, 1.1, 1.9, 1.7, "#a8724a", "R"),
          dPotPlant(e, 6.4, 6.3, 1));
      },
      items: [
        "pillow",
        "quilt",
        "lamp",
        "clock",
        "perfume",
        "jewel",
        "shirt",
        "cshirt",
        "dress",
        "sweater",
        "socks",
        "frame",
        "book",
      ],
    },
    {
      h: "Maison",
      n: "Le bureau",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#dfe6ee", "#cfd9e4", "#b9956c", "#b08c64"],
      b: (e) => {
        (dBase(e, "#cfd9e4"),
          dWinL(e, 2.2, 4.4, 2.2, 4.4),
          dCurtL(e, 2.2, 4.4, 2.2, 4.4, "#9fb7d9"),
          dWallShelf(e, "R", 1.5, 4.2, 3.7),
          dClockW(e, "R", 0.8, 4.2),
          dRug(e, 1.8, 2.4, 3.2, 2.8, "#c9a6a0"),
          dPotPlant(e, 0.5, 0.6, 1),
          dDeskO(e, 1.3, 0, 3.1, 1.3),
          dShelf(e, 5, 0, 1.9, 1.1, 4.4, dWood, "L"),
          dChairOf(e, 2.3, 1.6, "#5f6f8a"),
          dFiling(e, 0, 5.4, 1.1, 1.2));
      },
      items: [
        "computer",
        "lamp",
        "books",
        "book",
        "pens",
        "folder",
        "notebook",
        "earth",
        "clock",
        "plant",
        "mug",
        "frame",
      ],
    },
    {
      h: "Maison",
      n: "La petite cour",
      W: 7,
      D: 7,
      Hh: 2.2,
      yard: 1,
      c: ["#d9c8a6", "#cdbb98", "#8fcf8a"],
      b: (e) => dYard2(e),
      items: [
        "ball",
        "bucket",
        "shovel",
        "truck",
        "can",
        "flowerpot",
        "bike",
        "scooter",
        "kite",
        "chair",
        "train",
      ],
    },
    {
      h: "Maison",
      n: "La nouvelle cuisine",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#f3e4c6", "#e8d6b0", "#c59a68", "#bd9262"],
      b: (e) => {
        (dBase(e, "#e8d6b0"),
          dWinL(e, 2.6, 4.6, 2, 4.3),
          dCurtL(e, 2.6, 4.6, 2, 4.3, "#e8946c"),
          dWallShelf(e, "L", 0.9, 2.1, 3.4, "#8a6a4a"),
          dUpperC(e, 0.3, 2.2, "#8a6a4a"),
          dUpperC(e, 3.6, 5.5, "#8a6a4a"),
          dRug(e, 2, 3, 3.8, 3, "#d98c63"),
          dCounterF(e, 0.3, 0, 1.9, 1.3, "L", "#d9cdb6", "#8a6a4a"),
          dStove(e, 2.2, 0, 1.4, 1.3),
          dCounterF(e, 3.6, 0, 1.9, 1.3, "L", "#d9cdb6", "#8a6a4a"),
          dFridge(e, 5.6, 0, 1.3, 1.3),
          dChairOf(e, 1.6, 3.6, "#5fa9a0"),
          dTable(e, 2.8, 3.3, 2, 1.8, 1.7),
          dChairOf(e, 5.2, 3.6, "#5fa9a0"),
          dPotPlant(e, 6.3, 6.2, 1));
      },
      items: [
        "pot",
        "pan",
        "plate",
        "bowl",
        "mug",
        "cutlery",
        "spatula",
        "kettle",
        "toaster",
        "fruit",
        "magnet",
        "spices",
        "board",
      ],
    },
  ),
  (G.find((e) => "demenage" === e.id).wl = [
    "La chambre est prête. Le lit attend déjà ses premières nuits.",
    "La salle de bain sent le savon frais. Le canard a trouvé son bain.",
    "La cuisine est rangée. Ça sent presque le café du matin.",
    "Le salon est prêt : un plaid sur le divan, la télé, et déjà des soirées tranquilles.",
    "La chambre de bébé est prête. Un mobile, une veilleuse, et beaucoup d’amour.",
    "La nouvelle salle de bain brille. La maison commence à ressembler à un chez-soi.",
    "L’entrée est prête : les manteaux sur les patères, les bottes bien rangées.",
    "La chambre des parents est prête. Un grand lit, une fenêtre, un peu de silence.",
    "Le bureau est rangé. Les idées viendront plus facilement ici.",
    "La cour est prête pour les jeux : le seau dans le sable, le vélo dans la cabane.",
    "La nouvelle cuisine est rangée. La dernière boîte est vide : bienvenue chez toi.",
  ]),
  Object.keys(dStory).forEach((e) => delete dStory[e]),
  Object.assign(dStory, {
    0: [
      "Année 1 · Le condo",
      "Tes parents emménagent dans leur tout premier condo. Des boîtes partout, une odeur de peinture fraîche… et la chambre à installer en premier.",
    ],
    4: [
      "Année 3 · Une bonne nouvelle",
      "Un bébé s’en vient ! La petite pièce du fond devient une chambre toute douce.",
    ],
    5: [
      "Année 6 · La maison",
      "Le condo devient trop petit : la famille déménage dans une vraie maison, avec une cour. On recommence à déballer.",
    ],
    9: ["Un samedi de printemps", "Il fait enfin beau. Les jouets d’extérieur attendent dans leurs boîtes."],
  }),
  (DBT.length = 0),
  DBT.push(...DRM.map((e) => e.n)),
  Object.assign(DIT, {
    map: [
      "Carte du Nord",
      '<path d="M3 7l8-3 10 3 8-3v21l-8 3-10-3-8 3z" fill="#f2e6c8"/><path d="M11 4v21M21 7v21" stroke="#d9c69a" stroke-width="1.2"/><path d="M6 19q4-6 8-2t9-6" stroke="#e8667a" stroke-width="1.6" fill="none" stroke-dasharray="2 2"/><path d="M23 8l3 3M26 8l-3 3" stroke="#3a3d52" stroke-width="1.4"/>',
    ],
    lantern: [
      "Lanterne",
      '<path d="M12 4h8M16 2v2" stroke="#6a5a4a" stroke-width="1.6"/><rect x="10" y="6" width="12" height="3" rx="1" fill="#3e4352"/><rect x="11" y="9" width="10" height="15" rx="2" fill="#ffd978"/><path d="M11 9h10v15H11z" fill="none" stroke="#3e4352" stroke-width="1.6"/><path d="M16 13q3 3 0 7-3-4 0-7z" fill="#f4a24a"/><rect x="9" y="24" width="14" height="3" rx="1" fill="#3e4352"/>',
    ],
    backpack: [
      "Sac à dos",
      '<rect x="8" y="7" width="16" height="21" rx="5" fill="#d96f4f"/><path d="M12 7V5a4 4 0 0 1 8 0v2" fill="none" stroke="#a8503a" stroke-width="2"/><rect x="11" y="17" width="10" height="7" rx="2" fill="#e8946c"/><path d="M11 13h10" stroke="#a8503a" stroke-width="1.4"/>',
    ],
    mittens: [
      "Moufles",
      '<path d="M4 26V13q0-6 5-6t5 6v13z" fill="#e8667a"/><path d="M13 17q4-2 4 2t-3 3" fill="#d9555f"/><rect x="3.5" y="24" width="11" height="4" rx="1.5" fill="#fff"/><path d="M18 26V13q0-6 5-6t5 6v13z" fill="#5fa9e0"/><rect x="17.5" y="24" width="11" height="4" rx="1.5" fill="#fff"/>',
    ],
    flask: [
      "Gourde chaude",
      '<rect x="9" y="9" width="14" height="19" rx="6" fill="#7a8896"/><rect x="9" y="14" width="14" height="8" fill="#c96a5a"/><rect x="12" y="4" width="8" height="5" rx="1.5" fill="#3e4352"/><path d="M13 18h6" stroke="#f4d9c6" stroke-width="1.2"/><path d="M14 0q1.4 1.4 0 3M18 0q1.4 1.4 0 3" stroke="#cfd8e6" stroke-width="1" fill="none"/>',
    ],
    logs: [
      "Bûches",
      '<rect x="3" y="18" width="26" height="8" rx="4" fill="#9a6a3e"/><circle cx="25" cy="22" r="3.6" fill="#d9a066"/><circle cx="25" cy="22" r="1.4" fill="none" stroke="#8a5a36"/><rect x="6" y="10" width="22" height="8" rx="4" fill="#8a5a36"/><circle cx="24" cy="14" r="3.6" fill="#e6b57a"/><circle cx="24" cy="14" r="1.4" fill="none" stroke="#9a6a3e"/>',
    ],
    compass: [
      "Boussole",
      '<circle cx="16" cy="17" r="12" fill="#e2b84a"/><circle cx="16" cy="17" r="9.5" fill="#f6f1e2"/><path d="M16 9l2.6 8h-5.2z" fill="#e8667a"/><path d="M16 25l-2.6-8h5.2z" fill="#3e4352"/><circle cx="16" cy="17" r="1.4" fill="#e2b84a"/><rect x="14.5" y="2.4" width="3" height="3" rx="1" fill="#c99a2e"/>',
    ],
    flag: [
      "Drapeau",
      '<rect x="7" y="3" width="2.4" height="26" rx="1" fill="#8a8f9a"/><path d="M9.4 4h17l-4 5 4 5h-17z" fill="#e8667a"/><path d="M15 6.4l1 2h2.2l-1.8 1.3.7 2.1-2.1-1.3-2.1 1.3.7-2.1-1.8-1.3h2.2z" fill="#fff"/><ellipse cx="8.2" cy="28.5" rx="5" ry="1.6" fill="#e6eef6"/>',
    ],
    sled: [
      "Luge",
      '<path d="M3 24h22q4 0 4-4" stroke="#c9404a" stroke-width="2.4" fill="none" stroke-linecap="round"/><rect x="5" y="13" width="20" height="5" rx="1.6" fill="#c58a54"/><path d="M8 18v6M22 18v6" stroke="#8a5a36" stroke-width="2"/><path d="M5 13q-3-3-1-6" stroke="#e2b84a" stroke-width="1.4" fill="none"/>',
    ],
    spyglass: [
      "Longue-vue",
      '<path d="M13 28l3-9 3 9" stroke="#6a5a4a" stroke-width="1.6" fill="none"/><path d="M6 21l5-3" stroke="#8a5a36" stroke-width="6" stroke-linecap="round"/><path d="M10 18l8-5" stroke="#c99a2e" stroke-width="6" stroke-linecap="round"/><path d="M17 13l9-6" stroke="#e2b84a" stroke-width="8" stroke-linecap="round"/><circle cx="27" cy="6.4" r="2.6" fill="#cfe9fa"/>',
    ],
    pstar: [
      "Étoile polaire",
      '<path d="M16 2l3.6 8.6 9.4.8-7.2 6 2.2 9.2L16 21.8 8 26.6l2.2-9.2-7.2-6 9.4-.8z" fill="#ffd978"/><path d="M16 2l3.6 8.6 9.4.8-7.2 6L16 21.8z" fill="#f4c24a"/>',
    ],
    bell: [
      "Cloche",
      '<path d="M16 5q-8 0-8 10v5l-3 4h22l-3-4v-5q0-10-8-10z" fill="#e2b84a"/><path d="M16 5q-8 0-8 10v5l-3 4h11z" fill="#f2cc5e"/><circle cx="16" cy="26.5" r="2.8" fill="#c99a2e"/><path d="M11 5q5-4 10 0" stroke="#e8667a" stroke-width="2.6" fill="none"/><circle cx="16" cy="3" r="2" fill="#3f9a62"/>',
    ],
    cookie: [
      "Biscuit",
      '<circle cx="16" cy="7" r="5" fill="#c98a4a"/><path d="M10 13h12l6 4-2 3-4-2v4l3 7-3 1.6-4-5-4 5L7 29l3-7v-4l-4 2-2-3z" fill="#c98a4a"/><circle cx="14.4" cy="6.4" r=".9" fill="#3a2a1a"/><circle cx="17.6" cy="6.4" r=".9" fill="#3a2a1a"/><path d="M14 9q2 1.4 4 0" stroke="#fff" stroke-width=".9" fill="none"/><circle cx="16" cy="15.5" r="1" fill="#e8667a"/><circle cx="16" cy="19" r="1" fill="#5fa9e0"/>',
    ],
    milk: [
      "Verre de lait",
      '<path d="M10 5h12l-2 23h-8z" fill="#f2f5fb" stroke="#cfd8e6" stroke-width="1.2"/><path d="M10.6 11h10.8l-1.4 17h-8z" fill="#fff"/><ellipse cx="16" cy="11" rx="5.4" ry="1.2" fill="#e6ecf6"/><path d="M18.6 14v10" stroke="#e6ecf6" stroke-width="1.4"/>',
    ],
    cupcake: [
      "Petit gâteau",
      '<path d="M8 17h16l-2.4 11h-11.2z" fill="#e8946c"/><path d="M11 17l1 11M14.6 17v11M18 17v11M21 17l-1 11" stroke="#c9774f" stroke-width="1"/><path d="M7 17q-1-6 5-7 1-5 4-5t4 5q6 1 5 7z" fill="#ffc2d6"/><circle cx="16" cy="4.4" r="2.6" fill="#e8445a"/><circle cx="12" cy="12.4" r=".9" fill="#5fa9e0"/><circle cx="19.4" cy="11.4" r=".9" fill="#ffd978"/><circle cx="16" cy="14.4" r=".9" fill="#7fc48a"/>',
    ],
    choco: [
      "Chocolat",
      '<rect x="6" y="5" width="20" height="22" rx="2" fill="#6a3a22"/><path d="M6 11h20M12.7 5v12M19.3 5v12" stroke="#4a2614" stroke-width="1.2"/><path d="M6 15h20v12H6z" fill="#e8667a"/><rect x="9" y="18.4" width="14" height="5" rx="1" fill="#ffd978"/>',
    ],
    wrench: [
      "Clé à molette",
      '<path d="M8 26l12-12" stroke="#9aa6b8" stroke-width="5" stroke-linecap="round"/><path d="M19 4a6 6 0 0 0-1 8l3 3a6 6 0 0 0 8-1l-4-1-2-2-1-4z" fill="#b9c3d2"/><circle cx="8" cy="26" r="1.6" fill="#7b889c"/>',
    ],
    paint: [
      "Pot de peinture",
      '<path d="M7 11h18v14q0 3-9 3t-9-3z" fill="#cfd8e6"/><ellipse cx="16" cy="11" rx="9" ry="3" fill="#5fa9e0"/><path d="M10 12v5q0 2 1.6 2t1.6-2v-4" fill="#5fa9e0"/><path d="M7 11q9-12 18 0" stroke="#8a8f9a" stroke-width="1.4" fill="none"/><rect x="15" y="18" width="8" height="5" rx="1" fill="#fff"/><circle cx="19" cy="20.5" r="1.6" fill="#e8667a"/>',
    ],
    spool: [
      "Bobine de fil",
      '<rect x="8" y="4" width="16" height="3.4" rx="1.4" fill="#c58a54"/><rect x="8" y="24.6" width="16" height="3.4" rx="1.4" fill="#c58a54"/><rect x="10" y="7.4" width="12" height="17.2" fill="#e8667a"/><path d="M10 10h12M10 13h12M10 16h12M10 19h12M10 22h12" stroke="#c9505a" stroke-width=".9"/><path d="M22 18q6 2 4 9" stroke="#e8667a" stroke-width="1.2" fill="none"/>',
    ],
    robot: [
      "Robot",
      '<rect x="15" y="2" width="2" height="4" fill="#8a8f9a"/><circle cx="16" cy="2.4" r="1.6" fill="#e8667a"/><rect x="9" y="6" width="14" height="10" rx="2.4" fill="#9fc8e0"/><circle cx="13" cy="11" r="1.8" fill="#3e4352"/><circle cx="19" cy="11" r="1.8" fill="#3e4352"/><rect x="8" y="17" width="16" height="9" rx="2" fill="#7fa6c8"/><rect x="13" y="19" width="6" height="4" rx="1" fill="#ffd978"/><path d="M8 19l-4 4M24 19l4 4" stroke="#7fa6c8" stroke-width="2.4" stroke-linecap="round"/><rect x="10" y="26" width="4" height="4" fill="#5f86a8"/><rect x="18" y="26" width="4" height="4" fill="#5f86a8"/>',
    ],
    ribbon: [
      "Ruban",
      '<path d="M16 27q8 0 12 3" stroke="#e8445a" stroke-width="3" fill="none"/><circle cx="16" cy="16" r="11" fill="#e8445a"/><circle cx="16" cy="16" r="7.6" fill="#f06a7e"/><circle cx="16" cy="16" r="4" fill="#f4efe6"/>',
    ],
    scissors: [
      "Ciseaux",
      '<path d="M11.6 19.6L22 3M20.4 19.6L10 3" stroke="#b9c3d2" stroke-width="2.4" stroke-linecap="round"/><circle cx="9" cy="23" r="4.4" fill="none" stroke="#e8667a" stroke-width="2.6"/><circle cx="23" cy="23" r="4.4" fill="none" stroke="#e8667a" stroke-width="2.6"/><circle cx="16" cy="11" r="1.2" fill="#7b889c"/>',
    ],
    tag: [
      "Étiquette",
      '<path d="M4 12l7-7h17v18H11z" fill="#f2e6c8"/><circle cx="10" cy="14" r="2" fill="#fff" stroke="#c9b894"/><path d="M15 11h9M15 15h7M15 19h5" stroke="#d96f6f" stroke-width="1.4"/><path d="M10 14q-6 6-6 14" stroke="#e8445a" stroke-width="1.4" fill="none"/>',
    ],
    paperroll: [
      "Papier cadeau",
      '<rect x="4" y="11" width="24" height="10" rx="5" fill="#3f9a62"/><path d="M8 11l3 10M14 11l3 10M20 11l3 10" stroke="#ffd978" stroke-width="1.6"/><ellipse cx="27" cy="16" rx="2.4" ry="5" fill="#f4efe6"/><circle cx="27" cy="16" r="1.2" fill="#c9b894"/><path d="M5 21q-1 4 4 6l14-2" fill="#56b07a"/>',
    ],
    tape: [
      "Ruban adhésif",
      '<circle cx="15" cy="17" r="10" fill="#f4e6a8"/><circle cx="15" cy="17" r="5" fill="#fff"/><circle cx="15" cy="17" r="10" fill="none" stroke="#e2cf7a" stroke-width="1.2"/><path d="M24 14l6 1v4l-6 1" fill="#b9c3d2"/>',
    ],
    bow: [
      "Nœud",
      '<path d="M16 16l-6 12 3-.6 3 2.6M16 16l6 12-3-.6-3 2.6" fill="#c9303f"/><path d="M16 16q-10-11-13-6t13 6zM16 16q10-11 13-6t-13 6z" fill="#e8445a"/><circle cx="16" cy="16" r="3.2" fill="#f06a7e"/>',
    ],
    carrot: [
      "Carottes",
      '<path d="M8 25L22 9l3 3L11 27q-3 1-3-2z" fill="#f08a3a"/><path d="M13 21l2 1M16 17l2 1M19 13l2 1" stroke="#c9692a" stroke-width="1.2"/><path d="M23 9q0-6 4-6-1 4-2 6 4-2 6 0-3 2-6 3" fill="#5fae6a"/>',
    ],
    apple: [
      "Pommes",
      '<path d="M16 9q-4-3-8 0-5 5-1 13 3 6 6 5 3-1 6 0 3 1 6-5 4-8-1-13-4-3-8 0z" fill="#e0524f"/><path d="M16 9q0-4 2-6" stroke="#6a3a2a" stroke-width="1.6" fill="none"/><path d="M17 6q4-3 7 0-4 2-7 0z" fill="#69b87a"/><path d="M10 13q-2 3-1 6" stroke="#f08a88" stroke-width="1.6" fill="none"/>',
    ],
    hay: [
      "Botte de foin",
      '<rect x="3" y="10" width="26" height="16" rx="3" fill="#e6c76a"/><rect x="3" y="10" width="26" height="5" rx="2" fill="#f2d98a"/><path d="M10 10v16M22 10v16" stroke="#a8743a" stroke-width="1.6"/><path d="M6 18l2 4M14 17l1 5M18 18l2 3M25 17l1 5" stroke="#c9a24a" stroke-width="1"/>',
    ],
    jingle: [
      "Grelots",
      '<path d="M3 8q13 14 26 0" stroke="#c9404a" stroke-width="3.4" fill="none"/><circle cx="8" cy="15" r="3.2" fill="#e2b84a"/><circle cx="16" cy="18" r="3.4" fill="#e2b84a"/><circle cx="24" cy="15" r="3.2" fill="#e2b84a"/><path d="M6.6 16h2.8M14.4 19h3.2M22.6 16h2.8" stroke="#a8802a" stroke-width="1"/>',
    ],
    brush: [
      "Brosse",
      '<rect x="4" y="9" width="24" height="9" rx="4" fill="#c58a54"/><path d="M6 18v7M9 18v8M12 18v7M15 18v8M18 18v7M21 18v8M24 18v7M27 18v6" stroke="#5a4636" stroke-width="1.6"/><rect x="9" y="11" width="14" height="3.4" rx="1.6" fill="#a8724a"/>',
    ],
    fork: [
      "Fourche",
      '<rect x="14.7" y="10" width="2.6" height="20" rx="1" fill="#b98a58"/><path d="M8 3v6q0 3 3 3h10q3 0 3-3V3M12.6 3v9M19.4 3v9" stroke="#9aa6b8" stroke-width="2" fill="none"/>',
    ],
    sack: [
      "Hotte",
      '<path d="M8 10q-5 8-3 15 2 4 11 4t11-4q2-7-3-15z" fill="#a8723a"/><path d="M8 10q8 4 16 0l-2-3q-6 2-12 0z" fill="#c9905a"/><rect x="11" y="2" width="5" height="6" rx="1" fill="#e8667a"/><rect x="16" y="3" width="5" height="5" rx="1" fill="#5fa9e0"/><path d="M8 17q8 3 16 0" stroke="#8a5a2a" stroke-width="1.2" fill="none"/>',
    ],
    ticket: [
      "Billet de train",
      '<path d="M3 9h26v5a2 2 0 0 0 0 4v5H3v-5a2 2 0 0 0 0-4z" fill="#f2c24a"/><path d="M10 9v14" stroke="#c99a2e" stroke-dasharray="2 2"/><path d="M14 13h11M14 17h8" stroke="#8a5a2a" stroke-width="1.4"/>',
    ],
    suitcase: [
      "Valise",
      '<rect x="4" y="10" width="24" height="17" rx="3" fill="#b9573e"/><path d="M12 10V6h8v4" fill="none" stroke="#6a3a2a" stroke-width="2"/><path d="M4 16h24" stroke="#8a3a2a" stroke-width="1.4"/><rect x="9" y="10" width="2.4" height="17" fill="#e2b84a"/><rect x="20.6" y="10" width="2.4" height="17" fill="#e2b84a"/><circle cx="7.6" cy="22" r="1.8" fill="#f4efe6"/>',
    ],
    radio: [
      "Radio",
      '<path d="M8 10L20 3" stroke="#8a8f9a" stroke-width="1.6"/><rect x="4" y="10" width="24" height="16" rx="3" fill="#5f6f8a"/><circle cx="11" cy="18" r="4.4" fill="#3e4352"/><circle cx="11" cy="18" r="2" fill="#7b889c"/><rect x="18" y="14" width="7" height="3" rx="1" fill="#9af0b0"/><circle cx="20" cy="22" r="1.4" fill="#e8667a"/><circle cx="24" cy="22" r="1.4" fill="#ffd978"/>',
    ],
    camera: [
      "Appareil photo",
      '<rect x="10" y="6" width="9" height="5" rx="1.4" fill="#5c6376"/><rect x="3" y="10" width="26" height="16" rx="3" fill="#3e4352"/><circle cx="16" cy="18" r="6" fill="#7b889c"/><circle cx="16" cy="18" r="3.6" fill="#2a3a5a"/><circle cx="15" cy="17" r="1.2" fill="#9fc8e0"/><rect x="23" y="12" width="3" height="2" rx=".6" fill="#ffd978"/>',
    ],
    skymap: [
      "Carte du ciel",
      '<rect x="4" y="3" width="24" height="26" rx="2" fill="#1f2a5a"/><circle cx="16" cy="16" r="10" fill="none" stroke="#5a6aa8" stroke-width="1"/><path d="M9 11l5 3 4-4 5 6M12 22l4-3 4 3" stroke="#9fb4e8" stroke-width=".8" fill="none"/><g fill="#fff6c0"><circle cx="9" cy="11" r="1.2"/><circle cx="14" cy="14" r="1"/><circle cx="18" cy="10" r="1.2"/><circle cx="23" cy="16" r="1"/><circle cx="12" cy="22" r="1"/><circle cx="16" cy="19" r="1.2"/><circle cx="20" cy="22" r="1"/></g>',
    ],
    bear: ["Ourson", "DIT"],
    ttrain: ["Petit train", "DIT"],
    escarf: ["Écharpe brodée", "DIT"],
  }),
  (DIT.bear[1] = DIT.teddy[1] + '<path d="M12 18l4 2 4-2-1 3-3-1-3 1z" fill="#e8445a"/>'),
  (DIT.ttrain[1] = DIT.train[1]),
  (DIT.escarf[1] = DIT.scarf[1]
    .replace(/#5fae8a/g, "#c9404a")
    .replace(/#4f9a78/g, "#a8303a")
    .replace(/#e8f4ec/g, "#ffd978")),
  Object.entries({
    map: { c: ["console", "table"], a: ["bench", "desk"] },
    lantern: { c: ["hook"], a: ["console", "table", "side", "bench"] },
    backpack: { c: ["bench", "hook"], a: ["floor"] },
    mittens: { c: ["bench", "hook"], a: ["console"] },
    flask: { c: ["counter", "table"], a: ["side"] },
    logs: { c: ["floor"], a: [] },
    compass: { c: ["desk"], a: ["odrawer", "wshelf", "shelf"] },
    flag: { c: ["wall"], a: ["floor"] },
    sled: { c: ["floor"], a: [] },
    spyglass: { c: ["desk"], a: ["wshelf", "shelf"] },
    pstar: { c: ["wall"], a: ["wshelf", "shelf"] },
    bell: { c: ["wall", "hook"], a: ["wshelf", "shelf"] },
    cookie: { c: ["coffee", "table"], a: ["counter", "side"] },
    milk: { c: ["table"], a: ["counter"] },
    cupcake: { c: ["counter"], a: ["table", "ucab"] },
    choco: { c: ["ucab"], a: ["cab", "counter"] },
    wrench: { c: ["odrawer"], a: ["desk", "shelf"] },
    paint: { c: ["shelf"], a: ["wshelf", "floor"] },
    spool: { c: ["desk"], a: ["odrawer", "shelf"] },
    robot: { c: ["shelf", "wshelf"], a: ["toybox", "floor"] },
    ribbon: { c: ["table"], a: ["desk", "shelf"] },
    scissors: { c: ["odrawer"], a: ["desk", "table"] },
    tag: { c: ["desk"], a: ["odrawer", "table"] },
    paperroll: { c: ["shelf"], a: ["floor", "table"] },
    tape: { c: ["desk"], a: ["odrawer", "table"] },
    bow: { c: ["table"], a: ["wshelf", "desk"] },
    carrot: { c: ["trough"], a: ["floor"] },
    apple: { c: ["trough"], a: ["shelf"] },
    hay: { c: ["floor"], a: [] },
    jingle: { c: ["hook"], a: ["bench", "wall"] },
    brush: { c: ["shelf"], a: ["bench"] },
    fork: { c: ["floor"], a: [] },
    sack: { c: ["sleigh"], a: ["floor"] },
    bear: { c: ["sleigh"], a: ["shelf", "table"] },
    ttrain: { c: ["sleigh"], a: ["shelf", "table"] },
    escarf: { c: ["sleigh"], a: ["hook", "table"] },
    ticket: { c: ["console"], a: ["bench"] },
    suitcase: { c: ["wshelf", "floor"], a: ["bench"] },
    radio: { c: ["desk"], a: ["shelf", "side"] },
    camera: { c: ["desk", "side"], a: ["table", "sofa"] },
    skymap: { c: ["wall"], a: ["table", "desk"] },
  }).forEach(([e, t]) => {
    ((DOK[e] = t), (DIT[e][2] = t.c));
  }),
  Object.assign(DSZ, {
    ticket: 20,
    suitcase: 28,
    radio: 24,
    camera: 22,
    skymap: 24,
    sled: 32,
    logs: 28,
    hay: 30,
    fork: 30,
    sack: 28,
    flag: 26,
    paperroll: 26,
    compass: 20,
    scissors: 20,
    tag: 20,
    tape: 20,
    bow: 22,
    cookie: 22,
    milk: 20,
    cupcake: 22,
    choco: 22,
    wrench: 22,
    spool: 20,
    jingle: 24,
    brush: 24,
    carrot: 22,
    apple: 20,
    lantern: 24,
    pstar: 24,
    bell: 24,
    spyglass: 26,
    mittens: 24,
    flask: 20,
  }));
const dTrough = (e, t, a, s, n, o = "#8a5a36") => {
  const i = e.box(t, a, 0, s, n, 1, o),
    r = [
      e.P(t + 0.12, a + 0.12, 1),
      e.P(t + s - 0.12, a + 0.12, 1),
      e.P(t + s - 0.12, a + n - 0.12, 1),
      e.P(t + 0.12, a + n - 0.12, 1),
    ];
  (e.pg(r, "#e6c76a", dSh(o, 0.7)), e.zone("trough", r, i.hull));
};
const dSleigh = (e, t, a, s, n) => {
  ([a + 0.15, a + n - 0.15].forEach((a) => {
    (e.ln(e.P(t - 0.3, a, 0.05), e.P(t + s + 0.15, a, 0.05), "#e2b84a", 2.6),
      e.ln(e.P(t + s + 0.15, a, 0.05), e.P(t + s + 0.45, a, 0.5), "#e2b84a", 2.6));
  }),
    e.box(t, a, 0.25, 0.45, n, 2.1, "#b8343e"));
  const o = e.box(t + 0.45, a, 0.25, s - 0.45, n, 1.1, "#c9404a", { t: "#7a1f2a" }),
    i = [
      e.P(t + 0.6, a + 0.15, 1.35),
      e.P(t + s - 0.15, a + 0.15, 1.35),
      e.P(t + s - 0.15, a + n - 0.15, 1.35),
      e.P(t + 0.6, a + n - 0.15, 1.35),
    ];
  (e.pg(i, "#5a1520"),
    e.ln(e.P(t + 0.45, a + n, 0.8), e.P(t + s, a + n, 0.8), "#e2b84a", 1.6),
    e.zone("sleigh", i, o.hull));
};
const dXr = (e) => () => (e = (16807 * e) % 2147483647) / 2147483647;
const dF = (e) => e.map((e) => e[0].toFixed(1) + "," + e[1].toFixed(1)).join(" ");
const dPt = (e, t, a, s) => ("L" === t ? e.P(0, a, s) : e.P(a, 0, s));
const dPl = (e, t, a) => a.map(([a, s]) => dPt(e, t, a, s));
let dXid = 0;
const dWalls = (e, t, a) => {
  const { P: s, W: n, D: o, Hh: i } = e;
  (e.pg([s(0, 0), s(0, o), s(0, o, i), s(0, 0, i)], t), e.pg([s(0, 0), s(n, 0), s(n, 0, i), s(0, 0, i)], a));
};
const dEdges = (e, t, a) => {
  const { P: s, W: n, D: o, Hh: i } = e;
  (e.pg([s(0, o, 0), s(-0.35, o, 0), s(-0.35, o, i), s(0, o, i)], dSh(t, 0.62)),
    e.pg([s(n, 0, 0), s(n, -0.35, 0), s(n, -0.35, i), s(n, 0, i)], dSh(a, 0.6)),
    e.pg([s(0, 0, i), s(0, o, i), s(-0.35, o, i), s(-0.35, 0, i)], dSh(t, 0.8)),
    e.pg([s(0, 0, i), s(n, 0, i), s(n, -0.35, i), s(0, -0.35, i)], dSh(a, 0.8)),
    e.ln(s(0, 0, 0), s(0, 0, i), dSh(t, 0.6), 1.4));
};
const dTxt = (e, t, a, s, n, o, i, r = "middle", l = 700) => {
  const c = dPt(e, t, a, s),
    d = "L" === t ? [1, -0.5] : [1, 0.5],
    f = Math.hypot(d[0], d[1]);
  e.s += `<text transform="matrix(${(d[0] / f).toFixed(3)} ${(d[1] / f).toFixed(3)} 0 1 ${c[0].toFixed(1)} ${c[1].toFixed(1)})" font-size="${o}" font-weight="${l}" fill="${i}" font-family="Fraunces,Georgia,serif" text-anchor="${r}">${n}</text>`;
};
const dLogs = (e, t) => {
  const { W: a, D: s, Hh: n } = e;
  for (let o = 0, i = 0; o < n - 0.05; o += 0.5, i++) {
    const r = Math.min(n, o + 0.5),
      l = i % 2 ? 0.93 : 1;
    (e.pg(e.qL(0, s, o, r), dSh(t, 0.94 * l)),
      e.pg(e.qR(0, a, o, r), dSh(t, l)),
      [
        ["L", s],
        ["R", a],
      ].forEach(([a, s]) => {
        (e.ln(dPt(e, a, 0, r), dPt(e, a, s, r), dSh(t, 0.62), 1.8),
          e.ln(dPt(e, a, 0, o + 0.36), dPt(e, a, s, o + 0.36), dSh(t, 1.12), 1));
        const n = dPt(e, a, s, o + 0.25);
        e.s += `<ellipse cx="${n[0].toFixed(1)}" cy="${n[1].toFixed(1)}" rx="5.4" ry="5.4" fill="${dSh(t, 1.25)}" stroke="${dSh(t, 0.7)}" stroke-width="1.2"/><circle cx="${n[0].toFixed(1)}" cy="${n[1].toFixed(1)}" r="2" fill="none" stroke="${dSh(t, 0.85)}"/>`;
      }));
  }
};
const dPlanks = (e, t, a, s = 0, n = e.Hh, o = 0.45) => {
  const i = "L" === t ? e.D : e.W;
  e.pg(
    dPl(e, t, [
      [0, s],
      [i, s],
      [i, n],
      [0, n],
    ]),
    a,
  );
  for (let r = o; r < i; r += o) e.ln(dPt(e, t, r, s), dPt(e, t, r, n), dSh(a, 0.78), 1.1);
  for (let r = o / 2; r < i; r += o)
    e.s += [s + 0.2, n - 0.2]
      .map((s) => {
        const n = dPt(e, t, r, s);
        return `<circle cx="${n[0].toFixed(1)}" cy="${n[1].toFixed(1)}" r=".9" fill="${dSh(a, 0.6)}"/>`;
      })
      .join("");
};
const dBricks = (e, t, a, s, n = 0, o = e.Hh, i = 0.42, r = 0.9) => {
  const l = "L" === t ? e.D : e.W;
  e.pg(
    dPl(e, t, [
      [0, n],
      [l, n],
      [l, o],
      [0, o],
    ]),
    a,
  );
  for (let a = n, c = 0; a < o - 0.01; a += i, c++) {
    e.ln(dPt(e, t, 0, a), dPt(e, t, l, a), s, 1);
    for (let n = ((c % 2) * r) / 2; n < l; n += r)
      n > 0 && e.ln(dPt(e, t, n, a), dPt(e, t, n, Math.min(o, a + i)), s, 1);
  }
};
const dPanels = (e, t, a) => {
  const s = "L" === t ? e.D : e.W,
    n = e.Hh;
  (e.pg(
    dPl(e, t, [
      [0, 0],
      [s, 0],
      [s, n],
      [0, n],
    ]),
    a,
  ),
    [1.1, n - 0.7].forEach((n) => e.ln(dPt(e, t, 0, n), dPt(e, t, s, n), dSh(a, 0.75), 1.4)));
  for (let o = 1.4; o < s; o += 1.4) e.ln(dPt(e, t, o, 0), dPt(e, t, o, n), dSh(a, 0.75), 1.4);
  for (let o = 0.15; o < s; o += 0.35)
    [1.25, n - 0.85].forEach((s) => {
      const n = dPt(e, t, o, s);
      e.s += `<circle cx="${n[0].toFixed(1)}" cy="${n[1].toFixed(1)}" r="1" fill="${dSh(a, 0.62)}"/>`;
    });
  e.pg(
    dPl(e, t, [
      [0, 0],
      [s, 0],
      [s, 1.1],
      [0, 1.1],
    ]),
    dSh(a, 0.86),
  );
};
const dStripes = (e, t, a, s, n = 0.4, o) => {
  const i = "L" === t ? e.D : e.W,
    r = e.Hh;
  e.pg(
    dPl(e, t, [
      [0, 0],
      [i, 0],
      [i, r],
      [0, r],
    ]),
    a,
  );
  for (let a = 0; a < i; a += 2 * n)
    e.pg(
      dPl(e, t, [
        [a, 0],
        [Math.min(i, a + n), 0],
        [Math.min(i, a + n), r],
        [a, r],
      ]),
      s,
    );
  if (o) for (let a = n; a < i; a += 2 * n) e.ln(dPt(e, t, a, 0), dPt(e, t, a, r), o, 1);
};
const dDots = (e, t, a, s, n, o, i) => {
  const r = dXr(i),
    l = "L" === t ? e.D : e.W;
  for (let i = 0; i < o; i++) {
    const o = dPt(e, t, 0.2 + r() * (l - 0.4), s + r() * (n - s));
    e.s += `<circle cx="${o[0].toFixed(1)}" cy="${o[1].toFixed(1)}" r="${(1.6 + 1.6 * r()).toFixed(1)}" fill="${a[i % a.length]}"/>`;
  }
};
const dFlPl = (e, t, a = 0.55) => {
  const { P: s, W: n, D: o } = e,
    i = dXr(7);
  for (let i = a; i < o; i += a) e.ln(s(0, i), s(n, i), dSh(t, 0.8), 1);
  for (let r = 0; r < o; r += a)
    for (let l = 2 * i(); l < n; l += 1.6 + 1.8 * i())
      e.ln(s(l, r), s(l, Math.min(o, r + a)), dSh(t, 0.8), 1);
};
const dFlSnow = (e, t = 3) => {
  const { P: a, W: s, D: n } = e,
    o = dXr(t);
  for (let t = 0; t < 90; t++) {
    const t = a(o() * s, o() * n);
    e.s += `<circle cx="${t[0].toFixed(1)}" cy="${t[1].toFixed(1)}" r="${(0.6 + 1.4 * o()).toFixed(1)}" fill="${o() < 0.5 ? "#cfe2f4" : "#fff"}"/>`;
  }
};
const dFlGrid = (e, t) => {
  const { P: a, W: s, D: n } = e;
  for (let o = 1; o < 7; o++)
    (e.ln(a(o, 0), a(o, n), dSh(t, 0.78), 1.2), e.ln(a(0, o), a(s, o), dSh(t, 0.78), 1.2));
  for (let o = 0.5; o < s; o += 1)
    for (let s = 0.5; s < n; s += 1) {
      const n = a(o, s);
      e.s += `<circle cx="${n[0].toFixed(1)}" cy="${n[1].toFixed(1)}" r="1.1" fill="${dSh(t, 0.7)}"/>`;
    }
};
const dFlBlob = (e, t, a, s, n, o, i = 18) => {
  const r = [];
  for (let o = 0; o < i; o++) {
    const l = (o / i) * Math.PI * 2,
      c = 1 + 0.12 * Math.sin(5 * l);
    r.push(e.P(t + s * c * Math.cos(l), a + n * c * Math.sin(l)));
  }
  e.pg(r, o, dSh(o, 0.8), 1);
};
const dScape = (e, t, a, s, n, o, i = {}) => {
  const r = "dx" + ++dXid,
    l = dXr(i.seed || 11),
    c = (a + s) / 2;
  let d;
  if ("arch" === i.shape) {
    const e = o - ((s - a) / 2) * (i.ar || 0.8);
    d = [
      [a, n],
      [s, n],
      [s, e],
    ];
    for (let t = 1; t < 16; t++) {
      const n = (t / 16) * Math.PI;
      d.push([c + ((s - a) / 2) * Math.cos(n), e + (o - e) * Math.sin(n)]);
    }
    d.push([a, e]);
  } else if ("round" === i.shape) {
    const e = (n + o) / 2;
    d = [];
    for (let t = 0; t < 24; t++) {
      const i = (t / 24) * Math.PI * 2;
      d.push([c + ((s - a) / 2) * Math.cos(i), e + ((o - n) / 2) * Math.sin(i)]);
    }
  } else
    d = [
      [a, n],
      [s, n],
      [s, o],
      [a, o],
    ];
  const f = dPl(e, t, d),
    u = i.sky || ["#141a4a", "#3a4a8a"],
    h = o - n;
  e.s += `<defs><linearGradient id="${r}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${u[0]}"/><stop offset="1" stop-color="${u[1]}"/></linearGradient><clipPath id="${r}c"><polygon points="${dF(f)}"/></clipPath>${(i.au || []).map((e, t) => `<linearGradient id="${r}a${t}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${e}" stop-opacity="0"/><stop offset=".55" stop-color="${e}" stop-opacity=".7"/><stop offset="1" stop-color="${e}" stop-opacity="1"/></linearGradient>`).join("")}<filter id="${r}b" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.6"/></filter><filter id="${r}g" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5"/></filter></defs><g clip-path="url(#${r}c)"><polygon points="${dF(f)}" fill="url(#${r}s)"/>`;
  for (let o = 0; o < (i.stars || 0); o++) {
    const o = dPt(e, t, a + l() * (s - a), n + h * (0.35 + 0.65 * l()));
    e.s += `<circle cx="${o[0].toFixed(1)}" cy="${o[1].toFixed(1)}" r="${(0.5 + 1.1 * l()).toFixed(1)}" fill="#fff" opacity="${(0.5 + 0.5 * l()).toFixed(2)}"/>`;
  }
  if (i.moon) {
    const o = dPt(e, t, a + 0.78 * (s - a), n + 0.8 * h);
    e.s += `<circle cx="${o[0].toFixed(1)}" cy="${o[1].toFixed(1)}" r="9" fill="#fff6d0" opacity=".25"/><circle cx="${o[0].toFixed(1)}" cy="${o[1].toFixed(1)}" r="5.4" fill="#fff6d0"/>`;
  }
  if (
    ((i.au || []).forEach((o, i) => {
      const l = (e) => n + h * (0.36 + 0.11 * i) + 0.08 * h * Math.sin(2.3 * e + 1.9 * i),
        c = (e) => h * (0.34 + 0.14 * Math.sin(1.5 * e + 2.4 * i)),
        d = [],
        f = [];
      for (let e = a - 0.2; e <= s + 0.2; e += 0.1) (d.push([e, l(e)]), f.unshift([e, l(e) + c(e)]));
      const u = dF(dPl(e, t, d.concat(f)));
      e.s += `<polygon points="${u}" fill="${o}" opacity=".35" filter="url(#${r}g)"/><polygon points="${u}" fill="url(#${r}a${i})" filter="url(#${r}b)"/>`;
      for (let n = a; n <= s; n += 0.06) {
        const a = dPt(e, t, n, l(n)),
          s = dPt(e, t, n, l(n) + c(n) * (0.55 + 0.4 * Math.abs(Math.sin(9 * n + i))));
        e.s += `<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${s[0].toFixed(1)}" y2="${s[1].toFixed(1)}" stroke="${o}" stroke-opacity=".28" stroke-width="1"/>`;
      }
    }),
    i.mt)
  ) {
    const o = [[a - 0.1, n]];
    for (let e = a - 0.1; e <= s + 0.2; e += 0.55)
      o.push([e, n + h * (0.18 + 0.22 * Math.abs(Math.sin(1.7 * e + 0.6)))]);
    (o.push([s + 0.2, n]), e.pg(dPl(e, t, o), i.mt));
  }
  if (i.houses)
    for (let o = a + 0.3; o < s - 0.2; o += 0.7 + 0.3 * l()) {
      const a = n + 0.12 * h,
        s = 0.12 * h;
      e.pg(
        dPl(e, t, [
          [o, a],
          [o + 0.4, a],
          [o + 0.4, a + s],
          [o + 0.2, a + 1.6 * s],
          [o, a + s],
        ]),
        "#3a2a4a",
      );
      const i = dPt(e, t, o + 0.2, a + 0.5 * s);
      e.s += `<rect x="${(i[0] - 1.6).toFixed(1)}" y="${(i[1] - 1.6).toFixed(1)}" width="3.2" height="3.2" fill="#ffd36b"/>`;
    }
  if (i.pines)
    for (let o = 0; o < i.pines; o++) {
      const o = a + l() * (s - a),
        r = n + h * (0.08 + 0.08 * l()),
        c = h * (0.16 + 0.14 * l());
      e.pg(
        dPl(e, t, [
          [o - 0.16, r],
          [o, r + c],
          [o + 0.16, r],
        ]),
        i.pc || "#1f4a4a",
      );
    }
  (e.pg(
    dPl(e, t, [
      [a - 0.1, n],
      [s + 0.1, n],
      [s + 0.1, n + 0.1 * h],
      [c, n + 0.14 * h],
      [a - 0.1, n + 0.09 * h],
    ]),
    i.gr || "#eef4fb",
  ),
    (e.s += `</g><polygon points="${dF(f)}" fill="none" stroke="${i.fr || "#f4f1ea"}" stroke-width="${i.fw || 4}" stroke-linejoin="round"/>`),
    i.mul &&
      (e.ln(dPt(e, t, c, n), dPt(e, t, c, o), i.fr || "#f4f1ea", 1.8),
      e.ln(dPt(e, t, a, n + 0.5 * h), dPt(e, t, s, n + 0.5 * h), i.fr || "#f4f1ea", 1.8)));
};
const dDeer = (e, t, a, s = 1, n) => {
  const o = e.P(t, a, 0);
  e.s += `<g transform="translate(${o[0].toFixed(1)} ${o[1].toFixed(1)}) scale(${s})"><path d="M-16 -22v22M-8 -21v21M8 -21v21M15 -22v22" stroke="#6a4024" stroke-width="3.6" stroke-linecap="round"/><ellipse cx="0" cy="-27" rx="19" ry="10" fill="#a8723a"/><ellipse cx="2" cy="-22" rx="13" ry="4" fill="#e6c79a"/><path d="M-14 -31q-6-9-5-20" stroke="#a8723a" stroke-width="8" stroke-linecap="round"/><ellipse cx="-22" cy="-52" rx="8" ry="6" fill="#a8723a"/><ellipse cx="-28" cy="-50" rx="3.4" ry="2.6" fill="#5a3a22"/><circle cx="-21" cy="-54" r="1.3" fill="#2a1a10"/><path d="M-19 -57q-2-10 5-15M-16 -66l6-2M-23 -57q-9-8-7-16M-29 -66l-5-3" stroke="#e2c99a" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M18 -31q5-1 5 4" stroke="#a8723a" stroke-width="4" stroke-linecap="round"/>${n ? '<path d="M-17 -40q8 6 14 14" stroke="#c9404a" stroke-width="3.4" fill="none"/><circle cx="-12" cy="-36" r="2.2" fill="#e2b84a"/><circle cx="-7" cy="-31" r="2.2" fill="#e2b84a"/>' : ""}</g>`;
};
const dGear = (e, t, a, s, n, o) => {
  const i = [];
  for (let e = 0; e < 32; e++) {
    const t = (e / 32) * Math.PI * 2,
      o = n * (e % 4 < 2 ? 1.18 : 1);
    i.push([a + o * Math.cos(t), s + o * Math.sin(t)]);
  }
  e.pg(dPl(e, t, i), o, dSh(o, 0.7), 1);
  const r = [];
  for (let e = 0; e < 16; e++) {
    const t = (e / 16) * Math.PI * 2;
    r.push([a + 0.38 * n * Math.cos(t), s + 0.38 * n * Math.sin(t)]);
  }
  e.pg(dPl(e, t, r), dSh(o, 0.7));
};
const dPine = (e, t, a, s = 1) => {
  (e.cyl(t, a, 0, 0.3 * s, 0.5 * s, "#8a5a36"), (e.ch[e.ch.length - 1].h = 2.4 * s));
  const n = e.P(t, a, 0.5 * s);
  e.s += `<g transform="translate(${n[0].toFixed(1)} ${n[1].toFixed(1)}) scale(${s})"><path d="M0-46l13 18h-6l10 14h-7l9 14h-38l9-14h-7l10-14h-6z" fill="#2f7a52"/><path d="M0-46l13 18h-6l10 14h-7l9 14H0z" fill="#276a46"/><path d="M-9-18h18M-12-4h24" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"/></g>`;
};
const dGifts = (e, t, a) => {
  [
    [0, 0, 0.9, 0.9, 0.7, "#e8667a"],
    [0.9, 0.1, 0.8, 0.8, 0.55, "#5fa9e0"],
    [0.15, 0.1, 0.65, 0.65, 0.5, "#7fc48a", ".7"],
    [1, 0.2, 0.55, 0.55, 0.45, "#f2c24a", ".55"],
  ].forEach(([s, n, o, i, r, l, c]) => {
    const d = c ? +c : 0;
    (e.box(t + s, a + n, d, o, i, r, l),
      e.ln(e.P(t + s + o / 2, a + n + i, d), e.P(t + s + o / 2, a + n + i, d + r), "#fff", 2),
      e.ln(e.P(t + s + o, a + n + i / 2, d), e.P(t + s + o, a + n + i / 2, d + r), "#fff", 2));
  });
};
const dBunting = (e, t, a, s, n, o) => {
  e.ln(dPt(e, t, a, n), dPt(e, t, s, n), "#8a6a4a", 1);
  let i = 0;
  for (let r = a + 0.05; r < s - 0.35; r += 0.45)
    e.pg(
      dPl(e, t, [
        [r, n],
        [r + 0.36, n],
        [r + 0.18, n - 0.42],
      ]),
      o[i++ % o.length],
    );
};
const dWoodStove = (e, t, a) => {
  const s = e.box(t, a, 0, 1.3, 1.1, 1.6, "#3a3d48", { t: "#2a2c34" });
  (e.pg(
    [
      e.P(t + 0.3, a + 1.1, 0.35),
      e.P(t + 1, a + 1.1, 0.35),
      e.P(t + 1, a + 1.1, 1.05),
      e.P(t + 0.3, a + 1.1, 1.05),
    ],
    "#f4a24a",
    "#2a2c34",
    1.4,
  ),
    e.pg(
      [e.P(t + 0.42, a + 1.1, 0.42), e.P(t + 0.88, a + 1.1, 0.42), e.P(t + 0.65, a + 1.1, 0.95)],
      "#ffd36b",
    ),
    e.box(t + 0.5, a + 0.4, 1.6, 0.3, 0.3, e.Hh - 1.6, "#4a4e5a"),
    e.zone("stove", s.top, s.hull));
};
const dOven = (e, t, a, s, n) => {
  const o = 2.4,
    i = e.box(t, a, 0, s, n, o, "#c0634a", { t: "#a8523c" });
  for (let i = 0.4; i < o; i += 0.4) e.ln(e.P(t + s, a, i), e.P(t + s, a + n, i), "#9a4a36", 1);
  const r = [];
  for (let o = 0; o <= 12; o++) {
    const i = (o / 12) * Math.PI;
    r.push(e.P(t + s, a + n / 2 + 0.55 * Math.cos(i), 0.35 + 0.7 * Math.sin(i)));
  }
  (r.push(e.P(t + s, a + n / 2 - 0.55, 0.35), e.P(t + s, a + n / 2 + 0.55, 0.35)),
    e.pg(r, "#2a1a14"),
    e.pg(
      [e.P(t + s, a + n / 2 - 0.35, 0.36), e.P(t + s, a + n / 2 + 0.35, 0.36), e.P(t + s, a + n / 2, 0.8)],
      "#f4a24a",
    ),
    e.box(t + s / 2 - 0.3, a + n / 2 - 0.3, o, 0.6, 0.6, e.Hh - o, "#a8523c"),
    e.zone("stove", i.top, i.hull));
};
const dFireplace = (e, t, a) => {
  const s = e.box(0, t, 0, 0.9, a, 2.2, "#d9c8b0", { t: "#c9b89e" });
  (e.pg(
    [e.P(0.9, t + 0.4, 0.2), e.P(0.9, t + a - 0.4, 0.2), e.P(0.9, t + a - 0.4, 1.4), e.P(0.9, t + 0.4, 1.4)],
    "#2a1a14",
  ),
    e.pg([e.P(0.9, t + 0.6, 0.22), e.P(0.9, t + a - 0.6, 0.22), e.P(0.9, t + a / 2, 1)], "#f4a24a"),
    e.pg([e.P(0.9, t + 0.85, 0.22), e.P(0.9, t + a - 0.85, 0.22), e.P(0.9, t + a / 2, 0.7)], "#ffd36b"),
    e.box(-0.05, t - 0.15, 2.2, 1.15, a + 0.3, 0.22, "#a8724a"),
    e.zone(
      "wshelf",
      [
        e.P(0, t - 0.15, 2.42),
        e.P(1.1, t - 0.15, 2.42),
        e.P(1.1, t + a + 0.15, 2.42),
        e.P(0, t + a + 0.15, 2.42),
      ],
      s.hull,
    ));
};
const dIceBench = (e, t, a, s, n) => {
  const o = e.box(t, a, 0, s, n, 0.9, "#d6e8f6", { t: "#e6f1fa" }),
    i = e.box(t, a, 0.9, s, n, 0.22, "#c9a27a", { t: "#d9b48a" });
  (e.box(t + 0.1, a + n - 0.7, 1.12, 0.8, 0.6, 0.3, "#e8946c"),
    e.zone("sofa", i.top, dHull([...o.hull, ...i.hull])));
};
const dIceBlock = (e, t, a, s, n, o, i) => {
  const r = e.box(t, a, 0, s, n, o, "#cfe4f4", { t: "#e3f0fa" });
  (e.ln(e.P(t, a + n, 0.5 * o), e.P(t + s, a + n, 0.5 * o), "#b6d0e6", 1),
    e.ln(e.P(t + s, a, 0.5 * o), e.P(t + s, a + n, 0.5 * o), "#b6d0e6", 1),
    e.zone(i, r.top, r.hull));
};
const dIgloo = (e) => {
  const { P: t, W: a, D: s, Hh: n } = e,
    o = (e, t) => 1.9 + (n - 1.9) * Math.cos((((e / t) * Math.PI) / 2) * 0.92);
  ([
    ["L", s, "#dcebf7"],
    ["R", a, "#e9f3fb"],
  ].forEach(([t, a, s]) => {
    const i = [
      [0, 0],
      [a, 0],
    ];
    for (let e = a; e >= 0; e -= 0.2) i.push([e, o(e, a)]);
    const r = "dx" + ++dXid,
      l = dF(dPl(e, t, i));
    e.s += `<defs><clipPath id="${r}"><polygon points="${l}"/></clipPath></defs><polygon points="${l}" fill="${s}"/><g clip-path="url(#${r})">`;
    for (let s = 0, o = 0; s < n; s += 0.55, o++) {
      (e.ln(dPt(e, t, 0, s), dPt(e, t, a, s), "#b6d0e6", 1.3),
        e.ln(dPt(e, t, 0, s + 0.08), dPt(e, t, a, s + 0.08), "#fff", 0.8));
      for (let n = (o % 2) * 0.6; n < a; n += 1.2)
        n > 0 && e.ln(dPt(e, t, n, s), dPt(e, t, n, s + 0.55), "#b6d0e6", 1.3);
    }
    e.s += "</g>";
    const c = [];
    for (let s = a; s >= 0; s -= 0.2) c.push(dPt(e, t, s, o(s, a)));
    e.s += `<polyline points="${dF(c)}" fill="none" stroke="#a9c4dc" stroke-width="3.4" stroke-linejoin="round"/>`;
  }),
    e.ln(t(0, 0, 0), t(0, 0, n), "#b6d0e6", 1.4));
};
const DNIGHT = "#232a66";
const DXR = [
  {
    n: "Le départ vers le Nord",
    s: "Zeni part pour le pôle Nord ! Dans la petite gare du village, il attend le train de nuit. Range ses affaires avant le départ : billet, valise, carte du Nord et lanterne.",
    c: ["#efe3cc", "#efe3cc", "#cdb89a", "#bfa98a"],
    w: (e) => {
      (dWalls(e, "#efe3cc", "#f4e9d6"),
        dPlanks(e, "L", "#4f7a5a", 0, 1.7, 0.32),
        dPlanks(e, "R", "#4f7a5a", 0, 1.7, 0.32),
        dEdges(e, "#efe3cc", "#f4e9d6"),
        e.pg(
          dPl(e, "L", [
            [1, 2.9],
            [3.9, 2.9],
            [3.9, 4.6],
            [1, 4.6],
          ]),
          "#2a2f3a",
          "#8a6a4a",
          2,
        ),
        dTxt(e, "L", 2.45, 4.25, "DÉPARTS", 8, "#ffd978"),
        [
          ["Pôle Nord", "22:15"],
          ["Toundra", "22:40"],
          ["Aurores", "23:05"],
        ].forEach(([t, a], s) => {
          (dTxt(e, "L", 3.7, 3.9 - 0.32 * s, t, 6.5, "#f4efe6", "start", 600),
            dTxt(e, "L", 1.2, 3.9 - 0.32 * s, a, 6.5, "#ffd978", "end", 600));
        }),
        dScape(e, "R", 1.2, 3.9, 1.9, 4.7, {
          shape: "arch",
          stars: 26,
          moon: 1,
          mt: "#9fb0d6",
          pines: 9,
          fr: "#4f7a5a",
          fw: 5,
          mul: 1,
          seed: 5,
        }),
        dClockW(e, "R", 5.2, 4.4),
        dTxt(e, "R", 5.2, 4.95, "GARE", 8, "#4f7a5a"));
    },
    b: (e) => {
      (dHooks(e, "R", 4.2, 6.6, 3.4, "#4f7a5a"),
        dWallShelf(e, "L", 4.6, 6.6, 3.6, "#4f7a5a"),
        dRug(e, 3.4, 2.2, 3, 1, "#e2b84a"),
        dBench(e, 0, 0.8, 1.1, 2.8, "#4f7a5a"),
        dConsole(e, 0, 4.5, 1, 2, "#6a4a3a"),
        dPine(e, 6.2, 6.2, 1.1));
    },
    items: ["coat", "hat", "scarf", "boots", "mittens", "backpack", "ticket", "suitcase", "map", "lantern"],
  },
  {
    n: "La cabane de la toundra",
    s: "Au milieu de la toundra glacée, Zeni trouve une cabane en rondins pour la nuit. Il range ses affaires près du poêle, bien au chaud.",
    c: ["#b9824e", "#b9824e", "#a8784a", "#9a6c40"],
    w: (e) => {
      (dLogs(e, "#b9824e"),
        dScape(e, "L", 0.8, 2.6, 2.3, 4.2, {
          stars: 14,
          moon: 1,
          mt: "#c9d6ec",
          pines: 7,
          fr: "#7a4a2a",
          fw: 5,
          mul: 1,
          seed: 9,
          sky: ["#1a2050", "#5a6aa8"],
        }));
      const t = e.P(3.6, 0, 4.4);
      ((e.s += `<g transform="translate(${t[0].toFixed(1)} ${t[1].toFixed(1)})"><path d="M0 0q-12-4-16-16M-8-4q-4-6-3-12M-13-9l-7 1M0 0q12-4 16-16M8-4q4-6 3-12M13-9l7 1" stroke="#e2c99a" stroke-width="2.6" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="3" rx="6" ry="5" fill="#7a4a2a"/></g>`),
        dFlPl(e, "#a8784a"));
    },
    b: (e) => {
      (dHooks(e, "R", 4.2, 6.6, 3.4, "#6a4024"),
        dFlBlob(e, 4.6, 4, 1.5, 1.2, "#e6d6bc"),
        dWoodStove(e, 0.6, 0.3),
        dSide(e, 0, 1.9, 0.9, 0.9, 1.25, "#8a5a36"),
        dBed(e, 0, 3, 2.4, 3.6, "#a8503a", "#6a4024", "#efe2c8"),
        dTable(e, 3.4, 2.2, 1.6, 1.4, 1.7, "#8a5a36"),
        dChairOf(e, 5.3, 2.4, "#8a5a36"),
        e.box(2.4, 0.15, 0, 1.4, 0.7, 0.5, "#9a6a3e", { t: "#c9965e" }));
    },
    items: ["pot", "kettle", "cocoa", "flask", "logs", "blanket", "pillow", "lantern", "hat", "scarf"],
  },
  {
    n: "La station du pôle Nord",
    s: "Le voici au pôle Nord ! Dans la station des explorateurs, entre la radio et les hublots, Zeni range la boussole, le drapeau et la luge.",
    c: ["#cfd8e2", "#cfd8e2", "#9aa6b4", "#8e9aa8"],
    w: (e) => {
      (dPanels(e, "L", "#cfd8e2"),
        dPanels(e, "R", "#dbe3ec"),
        dEdges(e, "#cfd8e2", "#dbe3ec"),
        e.pg(e.qL(0, e.D, 1.1, 1.35), "#e8945a"),
        e.pg(e.qR(0, e.W, 1.1, 1.35), "#e8945a"),
        dScape(e, "L", 1, 2.4, 2.6, 3.9, {
          shape: "round",
          stars: 8,
          mt: "#e6eef8",
          sky: ["#2a3a7a", "#8aa6d9"],
          gr: "#f4f8fc",
          fr: "#7b889c",
          fw: 6,
          seed: 4,
        }),
        dScape(e, "L", 3, 4.4, 2.6, 3.9, {
          shape: "round",
          stars: 8,
          sky: ["#2a3a7a", "#8aa6d9"],
          gr: "#f4f8fc",
          fr: "#7b889c",
          fw: 6,
          seed: 8,
          pines: 0,
        }));
      const t = dPt(e, "L", 3.7, 2.95);
      ((e.s += `<path d="M${t[0].toFixed(1)} ${t[1].toFixed(1)}v-16l9 3-9 4" stroke="#555" fill="#e8667a"/>`),
        e.pg(
          dPl(e, "R", [
            [1.4, 3],
            [4.2, 3],
            [4.2, 4.4],
            [1.4, 4.4],
          ]),
          "#1f2a36",
          "#7b889c",
          2,
        ));
      const a = dPt(e, "R", 2.2, 3.7);
      ((e.s += `<ellipse cx="${a[0].toFixed(1)}" cy="${a[1].toFixed(1)}" rx="13" ry="13" fill="none" stroke="#5ff59a" stroke-width="1.2" opacity=".8"/><ellipse cx="${a[0].toFixed(1)}" cy="${a[1].toFixed(1)}" rx="7" ry="7" fill="none" stroke="#5ff59a" opacity=".6"/><line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${(a[0] + 11).toFixed(1)}" y2="${(a[1] - 6).toFixed(1)}" stroke="#5ff59a" stroke-width="1.4"/>`),
        [
          [3, 4.1],
          [3, 3.75],
          [3, 3.4],
        ].forEach(([t, a], s) => e.ln(dPt(e, "R", t, a), dPt(e, "R", t + 0.9 - 0.2 * s, a), "#5ff59a", 1.4)),
        dTxt(e, "R", 2.8, 4.85, "STATION POLAIRE", 7.5, "#3e4a5c"),
        dFlGrid(e, "#9aa6b4"));
    },
    b: (e) => {
      (dHooks(e, "L", 5, 6.6, 3.4, "#5c6376"),
        dRug(e, 1.8, 2.6, 3, 2.4, "#e8945a"),
        dDeskO(e, 1.3, 0, 3.1, 1.3, "#8a96a8"),
        dShelf(e, 5, 0, 1.9, 1.1, 4.4, "#7b889c", "L"),
        dChairOf(e, 2.3, 1.6, "#e8945a"),
        dFiling(e, 0, 5.4, 1.1, 1.2, "#9aa6b8"));
    },
    items: ["compass", "flag", "sled", "earth", "notebook", "folder", "books", "radio", "mug", "coat"],
  },
  {
    n: "L’igloo des aurores",
    s: "Zeni passe la nuit dans un igloo. Par la grande ouverture, le ciel s’illumine de vert et de rose : les aurores boréales dansent au-dessus de la neige.",
    c: ["#dcebf7", "#dcebf7", "#f2f7fc", "#e8f0f8"],
    Hh: 5.6,
    w: (e) => {
      (dIgloo(e),
        dScape(e, "R", 0.9, 5.6, 0.7, 3.7, {
          shape: "arch",
          ar: 0.5,
          stars: 46,
          sky: ["#060a24", "#123a5a"],
          au: ["#5ff5b0", "#5ad8f0", "#f08ad8"],
          mt: "#1f3550",
          pines: 10,
          pc: "#0e2230",
          gr: "#dfeefa",
          fr: "#c9dff0",
          fw: 7,
          seed: 13,
        }),
        dFlSnow(e, 5));
    },
    b: (e) => {
      (dFlBlob(e, 3.6, 3.6, 1.7, 1.3, "#c9a27a"),
        dFlBlob(e, 3.6, 3.6, 1.2, 0.9, "#d9b48a"),
        dIceBench(e, 0, 1.8, 1.6, 3.6),
        dIceBlock(e, 3, 3, 1.3, 1.3, 0.9, "table"),
        dIceBlock(e, 5.6, 0.4, 1, 1, 1.6, "desk"),
        dIceBlock(e, 0, 0.2, 1, 1, 1.25, "side"),
        dIceBlock(e, 0, 5.8, 1, 1, 1.25, "side"));
      const t = e.P(6.1, 0.9, 1.6);
      e.s += `<path d="M${t[0].toFixed(1)} ${t[1].toFixed(1)}m-8 0l-6 18M${t[0].toFixed(1)} ${t[1].toFixed(1)}m0 0l0 20M${t[0].toFixed(1)} ${t[1].toFixed(1)}m8 0l6 18" stroke="#6a5a4a" stroke-width="1.4" opacity="0"/>`;
    },
    items: ["spyglass", "camera", "skymap", "pstar", "candle", "blanket", "cocoa", "flask", "globe", "book"],
  },
  {
    n: "Une maison en pain d’épices",
    s: "Au village du Père Noël, les maisons sont en pain d’épices ! Zeni aide à décorer celle-ci : sapin, guirlande, cloche et chaussettes devant la cheminée.",
    c: ["#b9783e", "#b9783e", "#f6e6e6", "#e8a8a8"],
    w: (e) => {
      (dWalls(e, "#b06e36", "#bf7c40"),
        dEdges(e, "#b06e36", "#bf7c40"),
        [
          ["L", e.D],
          ["R", e.W],
        ].forEach(([t, a]) => {
          for (let s = 0; s < a - 0.01; s += 0.5)
            e.pg(
              dPl(e, t, [
                [s, e.Hh - 0.02],
                [s + 0.5, e.Hh - 0.02],
                [s + 0.25, e.Hh - 0.42],
              ]),
              "#fff",
            );
          e.ln(dPt(e, t, 0, 1.2), dPt(e, t, a, 1.2), "#fff", 2.4);
          for (let s = 0.25; s < a; s += 0.5) {
            const a = dPt(e, t, s, 1.2);
            e.s += `<circle cx="${a[0].toFixed(1)}" cy="${(a[1] - 3).toFixed(1)}" r="2.4" fill="${["#e8445a", "#7fc48a", "#ffd978", "#5fa9e0"][Math.round(2 * s) % 4]}"/>`;
          }
          dDots(e, t, ["#e8445a", "#7fc48a", "#ffd978", "#fff"], 1.6, e.Hh - 0.7, 10, "L" === t ? 3 : 7);
        }),
        dScape(e, "R", 2.9, 4.9, 2.3, 4.3, {
          shape: "arch",
          stars: 18,
          moon: 1,
          houses: 1,
          pines: 4,
          fr: "#fff",
          fw: 5,
          mul: 1,
          seed: 21,
        }),
        [
          [0, e.D],
          [e.W, 0],
        ].forEach(([t, a]) => {
          const s = e.P(t, a, 0),
            n = e.P(t, a, e.Hh);
          e.s += `<line x1="${s[0].toFixed(1)}" y1="${s[1].toFixed(1)}" x2="${n[0].toFixed(1)}" y2="${n[1].toFixed(1)}" stroke="#fff" stroke-width="7"/><line x1="${s[0].toFixed(1)}" y1="${s[1].toFixed(1)}" x2="${n[0].toFixed(1)}" y2="${n[1].toFixed(1)}" stroke="#e8445a" stroke-width="7" stroke-dasharray="6 6"/>`;
        }));
    },
    b: (e) => {
      (dFireplace(e, 2, 2.4),
        dRug(e, 2.4, 2, 3.6, 3.4, "#c9505a"),
        dSide(e, 0, 5.2, 1, 1, 1.25, "#7a3a1a"),
        dShelf(e, 5.6, 0, 1.4, 1, 3.4, "#a8603a", "L"),
        dSofa(e, 1.4, 5.2, 3, 1.6, "#f4a6c0", !1),
        dTable(e, 3.3, 2.7, 1.6, 1.7, 0.9, "#6a3a22", "coffee"));
    },
    items: ["tree", "gift", "gift2", "garland", "stocking", "wreath", "bell", "cookie", "globe", "candle"],
  },
  {
    n: "La boulangerie des lutins",
    s: "Ça sent le chocolat chaud ! Près du grand four à pain, Zeni donne un coup de main aux lutins boulangers et range leur boutique.",
    c: ["#f4e2c8", "#f4e2c8", "#c9704a", "#e8c0a0"],
    w: (e) => {
      (dWalls(e, "#f4e2c8", "#f8ead4"),
        dBricks(e, "L", "#f4f6f8", "#cfd8e2", 0, 1.9, 0.38, 0.38),
        dBricks(e, "R", "#f4f6f8", "#cfd8e2", 0, 1.9, 0.38, 0.38),
        dEdges(e, "#f4e2c8", "#f8ead4"),
        dScape(e, "L", 0.8, 2.5, 2.4, 4.2, {
          shape: "arch",
          stars: 12,
          houses: 1,
          fr: "#a8603a",
          fw: 5,
          mul: 1,
          seed: 17,
        }),
        dTxt(e, "L", 1.65, 4.7, "Boulangerie", 11, "#a8603a", void 0, 700),
        dBunting(e, "R", 0.2, 6.8, 5, ["#e8445a", "#ffd978", "#7fc48a", "#5fa9e0"]));
    },
    b: (e) => {
      (dOven(e, 0, 3.8, 1.5, 2.2),
        dUpperC(e, 0.3, 2.2, "#c98a6a"),
        dUpperC(e, 3.6, 5.5, "#c98a6a"),
        dWallShelf(e, "R", 2.35, 3.45, 3.6, "#a8603a"),
        dRug(e, 2, 3, 3.8, 3, "#e8946c"),
        dCounterF(e, 0.3, 0, 1.9, 1.3, "L", "#f4e6d6", "#a8603a"),
        dCounterF(e, 2.2, 0, 1.4, 1.3, "L", "#f4e6d6", "#a8603a"),
        dCounterF(e, 3.6, 0, 1.9, 1.3, "L", "#f4e6d6", "#a8603a"),
        dFridge(e, 5.6, 0, 1.3, 1.3),
        dChairOf(e, 2, 3.6, "#e8667a"),
        dTable(e, 3, 3.3, 2, 1.8, 1.7, "#a8603a"),
        dChairOf(e, 5.4, 3.6, "#e8667a"),
        e.box(5.6, 5.4, 0, 0.8, 0.7, 1, "#efe2c8", { t: "#f6ecd8" }),
        e.box(6, 6.2, 0, 0.7, 0.6, 0.9, "#e6d6bc", { t: "#f6ecd8" }));
    },
    items: ["milk", "cupcake", "choco", "cocoa", "cookie", "mug", "plate", "bowl", "spatula", "pot"],
  },
  {
    n: "L’usine à jouets",
    s: "Dans l’usine à jouets, les engrenages tournent et les jouets défilent sur le tapis roulant. Zeni remet chaque jouet et chaque outil à sa place.",
    c: ["#9aa0a8", "#9aa0a8", "#a8aeb6", "#9aa0a8"],
    w: (e) => {
      (dBricks(e, "L", "#b9574a", "#8a3a32", 0, e.Hh, 0.42, 0.9),
        dPanels(e, "R", "#c9ced6"),
        dEdges(e, "#b9574a", "#c9ced6"),
        dGear(e, "L", 3.4, 3.4, 0.75, "#e2b84a"),
        dGear(e, "L", 4.6, 4.2, 0.5, "#9aa6b8"),
        dGear(e, "L", 5.4, 3.1, 0.42, "#e8667a"),
        [3.7, 4.3].forEach((t) => e.ln(dPt(e, "R", 0, t), dPt(e, "R", e.W, t), "#7b889c", 4)),
        e.ln(dPt(e, "R", 5.9, 0), dPt(e, "R", 5.9, 4.3), "#7b889c", 4));
      const t = dPt(e, "R", 5.9, 2.6);
      ((e.s += `<circle cx="${t[0].toFixed(1)}" cy="${t[1].toFixed(1)}" r="6" fill="#f4efe6" stroke="#5c6376" stroke-width="1.6"/><line x1="${t[0].toFixed(1)}" y1="${t[1].toFixed(1)}" x2="${(t[0] + 3).toFixed(1)}" y2="${(t[1] - 4).toFixed(1)}" stroke="#e8445a" stroke-width="1.4"/>`),
        dTxt(e, "R", 2.6, 4.9, "ATELIER DES JOUETS", 8, "#e8445a"));
      const { P: a, W: s, D: n } = e;
      for (let t = 0; t < 14; t++)
        e.pg(
          [
            a(0.2 + 0.45 * t, n - 0.5),
            a(0.42 + 0.45 * t, n - 0.5),
            a(0.62 + 0.45 * t, n - 0.2),
            a(0.4 + 0.45 * t, n - 0.2),
          ],
          t % 2 ? "#3a3d48" : "#f2c24a",
        );
    },
    b: (e) => {
      (dRug(e, 2, 2.4, 3, 2.6, "#5fa9e0"), dDeskO(e, 0.3, 0, 3.1, 1.3, "#b98a5a"));
      const t = e.box(3.6, 0, 0, 3.3, 1, 1.2, "#5c6376", { t: "#3a3d48" });
      for (let t = 3.8; t < 6.9; t += 0.35) e.ln(e.P(t, 1, 1.2), e.P(t, 1, 1), "#9aa6b8", 1.4);
      (e.zone("shelf", t.top, t.hull),
        e.box(6, 0.2, 1.2, 0.45, 0.45, 0.4, "#e8667a"),
        e.box(4, 0.3, 1.2, 0.4, 0.4, 0.35, "#7fc48a"),
        dShelf(e, 0, 1, 1.1, 2, 3.6, "#e8946c", "R"),
        dChairOf(e, 1.3, 1.6, "#e8667a"),
        dToyBox(e, 0, 5.2, 1.6, 1.2, "#5fa9e0"));
    },
    items: ["wrench", "paint", "spool", "robot", "train", "blocks", "ball", "horse", "duck", "rattle"],
  },
  {
    n: "L’atelier d’emballage",
    s: "Des montagnes de paquets, des rubans de toutes les couleurs : c’est l’atelier d’emballage. Zeni y range le papier, les ciseaux et les étiquettes.",
    c: ["#f4e2ea", "#f4e2ea", "#d9b08a", "#cfa680"],
    w: (e) => {
      (dStripes(e, "L", "#f4ece0", "#e8667a", 0.32, "#e2b84a"),
        dStripes(e, "R", "#3f9a62", "#36885a", 0.5),
        dDots(e, "R", ["#ffd978", "#fff"], 0.3, e.Hh - 0.3, 40, 5),
        dEdges(e, "#e8667a", "#3f9a62"),
        e.ln(dPt(e, "R", 0.6, 4.3), dPt(e, "R", 4.6, 4.3), "#8a6a4a", 2),
        ["#e8445a", "#5fa9e0", "#ffd978", "#b48ae8", "#fff", "#7fc48a", "#f08aa8"].forEach((t, a) => {
          const s = dPt(e, "R", 0.9 + 0.55 * a, 4.3);
          e.s += `<circle cx="${s[0].toFixed(1)}" cy="${s[1].toFixed(1)}" r="6.4" fill="${t}" stroke="${dSh(t, 0.75)}"/><path d="M${s[0].toFixed(1)} ${(s[1] + 5).toFixed(1)}q2 10-2 18" stroke="${t}" stroke-width="2.2" fill="none"/>`;
        }),
        dScape(e, "L", 2, 3.6, 2.6, 4.3, { stars: 16, houses: 1, fr: "#f4ece0", fw: 5, mul: 1, seed: 31 }),
        dTxt(e, "L", 5, 4.6, "Emballage", 10, "#3f9a62"),
        dFlPl(e, "#d9b08a"),
        dFlSnow(e, 9));
    },
    b: (e) => {
      (dDeskO(e, 1.3, 0, 2.4, 1.3, "#c58a54"),
        dShelf(e, 4, 0, 1.6, 1.1, 3.6, "#a8724a", "L"),
        dChairOf(e, 2, 1.6, "#e8667a"),
        dTable(e, 2.4, 3.2, 2.4, 1.8, 1.7, "#c58a54"),
        dToyBox(e, 0, 5.2, 1.6, 1.2, "#e8667a"),
        dGifts(e, 5.4, 4.6),
        dGifts(e, 5.8, 0.2));
    },
    items: ["ribbon", "bow", "scissors", "tag", "tape", "pens", "paperroll", "gift", "gift2", "stocking"],
  },
  {
    n: "L’écurie des rennes",
    s: "À l’écurie, les rennes se reposent avant la grande nuit. Zeni leur apporte des carottes et range tout le matériel.",
    c: ["#8a5a36", "#8a5a36", "#c9a86a", "#bf9e60"],
    w: (e) => {
      (dPlanks(e, "L", "#9a6a3e"),
        dPlanks(e, "R", "#a8763f"),
        dEdges(e, "#9a6a3e", "#a8763f"),
        [
          ["L", e.D],
          ["R", e.W],
        ].forEach(([t, a]) => {
          e.pg(
            dPl(e, t, [
              [0, 4.2],
              [a, 4.2],
              [a, 4.55],
              [0, 4.55],
            ]),
            "#6a4024",
          );
          for (let s = 0.8; s < a; s += 2.2)
            e.pg(
              dPl(e, t, [
                [s, 0],
                [s + 0.3, 0],
                [s + 0.3, 4.2],
                [s, 4.2],
              ]),
              "#7a4a2a",
            );
        }),
        dScape(e, "R", 2.6, 4.2, 2.8, 3.9, {
          stars: 16,
          moon: 1,
          pines: 5,
          fr: "#6a4024",
          fw: 5,
          mul: 1,
          seed: 41,
        }));
      const { P: t, W: a, D: s } = e,
        n = dXr(19);
      for (let o = 0; o < 70; o++) {
        const o = n() * a,
          i = n() * s,
          r = t(o, i),
          l = t(o + 0.25, i + 0.3 * (n() - 0.5));
        e.ln(r, l, n() < 0.5 ? "#e6c76a" : "#d9b45a", 1);
      }
    },
    b: (e) => {
      (dDeer(e, 0.7, 1.6, 1),
        dDeer(e, 0.7, 4, 0.95),
        [
          [1.6, 0.2],
          [1.6, 2.7],
          [1.6, 5.2],
        ].forEach(([t, a]) => {
          (e.box(t, a, 0, 0.18, 1.6, 1.3, "#7a4a2a", { t: "#8a5a36" }),
            e.ln(e.P(t + 0.18, a, 0.5), e.P(t + 0.18, a + 1.6, 0.5), "#6a4024", 2));
        }),
        dHooks(e, "R", 4.7, 6.7, 3.4, "#6a4024"),
        dTrough(e, 4.6, 0, 2.2, 1),
        dChest(e, 5.4, 4, 1.3, 1.3, "#7a4a2a"),
        e.box(5.6, 5.6, 0, 1.3, 1.2, 0.9, "#e6c76a", { t: "#f2d98a" }));
    },
    items: ["carrot", "apple", "hay", "fork", "jingle", "lantern", "brush", "mittens", "hat", "scarf"],
  },
  {
    n: "Le traîneau du Père Noël",
    s: "Le grand soir est arrivé ! Dehors, sous les étoiles, les rennes attendent. Zeni charge le traîneau : l’ourson pour sa fille, le petit train pour son fils et l’écharpe brodée pour sa compagne.",
    c: ["#1a2050", "#1a2050", "#f2f7fc", "#e8f0f8"],
    w: (e) => {
      ([
        ["L", e.D],
        ["R", e.W],
      ].forEach(([t, a]) => {
        dScape(e, t, 0, a, 0, e.Hh, {
          stars: 60,
          moon: "R" === t,
          mt: "#2a3a6a",
          houses: "L" === t,
          pines: 8,
          pc: "#14304a",
          sky: ["#0a0e30", "#3a3a8a"],
          fr: "#0a0e30",
          fw: 0.1,
          seed: "L" === t ? 51 : 53,
        });
        for (let s = 0.3; s < a; s += 0.9)
          e.pg(
            dPl(e, t, [
              [s, 0],
              [s + 0.18, 0],
              [s + 0.18, 1.2],
              [s + 0.09, 1.35],
              [s, 1.2],
            ]),
            "#8a5a36",
          );
        [0.45, 0.95].forEach((s) =>
          e.pg(
            dPl(e, t, [
              [0, s],
              [a, s],
              [a, s + 0.14],
              [0, s + 0.14],
            ]),
            "#a8723a",
          ),
        );
      }),
        e.ln(e.P(0, 0, 0), e.P(0, 0, e.Hh), "#0a0e30", 1),
        e.pg(
          dPl(e, "L", [
            [0.8, 1.7],
            [3.8, 1.7],
            [3.8, 3.9],
            [0.8, 3.9],
          ]),
          "#8a5a36",
          "#6a4024",
          1.4,
        ));
      for (let t = 1.1; t < 3.8; t += 0.35) e.ln(dPt(e, "L", t, 1.7), dPt(e, "L", t, 3.9), "#7a4a2a", 1);
      dFlSnow(e, 11);
    },
    b: (e) => {
      (dHooks(e, "L", 1, 3.6, 3.4, "#6a4024"),
        dRug(e, 1.8, 1.8, 4.2, 3.4, "#dfeefa"),
        dSleigh(e, 1.9, 2.4, 3, 1.8),
        dDeer(e, 5.6, 2.9, 0.9, 1),
        dDeer(e, 6.4, 3.9, 0.9, 1));
      const t = e.box(0, 4.6, 0, 1.5, 1.5, 1.6, "#b98a5a", { t: "#c99a68" });
      (e.ln(e.P(0, 6.1, 0.8), e.P(1.5, 6.1, 0.8), "#8a5a36", 1.6),
        e.ln(e.P(1.5, 4.6, 0.8), e.P(1.5, 6.1, 0.8), "#8a5a36", 1.6),
        e.zone("table", t.top, t.hull),
        dPine(e, 6.3, 0.6, 1.1));
    },
    items: ["sack", "bear", "ttrain", "escarf", "bell", "lantern", "map", "pstar", "wreath", "gift"],
  },
];
DXR.forEach((e) => {
  ((e.W = e.W || 7), (e.D = e.D || 7), (e.Hh = e.Hh || 5.2));
});
const sv = keep;
const chip = () => {
  const e = $(".chip");
  e && (e.textContent = "🫧 " + FLX());
};
const nk = (e) =>
  e
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
const GW = new Set(L.flat().concat(LB.split(" ")).map(nk));
const fits = (e, t) => {
  const a = [...t];
  for (const t of e) {
    const e = a.indexOf(t);
    if (e < 0) return !1;
    a.splice(e, 1);
  }
  return !0;
};
const rng = (e) => {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), 1 | e)),
      (e ^= e + Math.imul(e ^ (e >>> 7), 61 | e)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
};