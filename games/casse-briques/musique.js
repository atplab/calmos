// Musique du Casse-briques : module bkMu (chiptune glacé) et bkMus(on) branché dans theme() / apply().
var bkMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  rep: 0,
  off: 0,
  E: 0.25,
  CH: [
    [43, [67, 71, 74, 79]],
    [40, [64, 67, 71, 74]],
    [36, [60, 64, 67, 71]],
    [38, [62, 66, 69, 74]],
    [47, [62, 67, 71, 74]],
    [45, [64, 67, 69, 72]],
    [36, [60, 64, 67, 71]],
    [38, [62, 66, 69, 74]],
  ],
  PH: [
    [
      [0, 79, 2],
      [2, 83, 1],
      [3, 86, 1],
      [4, 83, 2],
      [8, 81, 2],
      [10, 79, 2],
      [12, 83, 3],
    ],
    [
      [0, 79, 2],
      [2, 81, 1],
      [3, 83, 1],
      [4, 86, 3],
      [8, 83, 2],
      [10, 81, 2],
      [12, 79, 3],
    ],
    [
      [0, 84, 2],
      [2, 83, 1],
      [3, 79, 1],
      [4, 76, 2],
      [6, 79, 2],
      [8, 83, 2],
      [12, 84, 3],
    ],
    [
      [0, 81, 2],
      [2, 78, 1],
      [3, 81, 1],
      [4, 86, 3],
      [8, 85, 2],
      [10, 81, 2],
      [12, 78, 3],
    ],
    [
      [0, 83, 2],
      [2, 86, 1],
      [3, 88, 1],
      [4, 86, 2],
      [6, 83, 2],
      [8, 79, 2],
      [12, 83, 3],
    ],
    [
      [0, 84, 2],
      [2, 81, 1],
      [3, 84, 1],
      [4, 88, 3],
      [8, 86, 2],
      [10, 84, 2],
      [12, 81, 3],
    ],
    [
      [0, 84, 2],
      [2, 86, 1],
      [3, 88, 1],
      [4, 91, 3],
      [8, 88, 2],
      [10, 86, 2],
      [12, 84, 3],
    ],
    [
      [0, 86, 3],
      [4, 85, 1],
      [5, 86, 1],
      [6, 90, 2],
      [8, 86, 4],
      [12, 81, 3],
      [14, 86, 2],
    ],
  ],
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    t.gain.value = 0;
    const a = e.createBiquadFilter();
    ((a.type = "lowpass"), (a.frequency.value = 4800), (a.Q.value = 0.3), a.connect(t), t.connect(mg));
    const s = e.createDelay(1),
      n = e.createGain(),
      o = e.createBiquadFilter(),
      i = e.createGain();
    ((s.delayTime.value = 3 * this.E),
      (n.gain.value = 0.3),
      (o.type = "lowpass"),
      (o.frequency.value = 2800),
      (i.gain.value = 0.3),
      s.connect(o),
      o.connect(n),
      n.connect(s),
      o.connect(i),
      i.connect(a));
    const r = e.createGain();
    (r.connect(a), r.connect(s));
    const l = e.createGain();
    l.connect(a);
    const c = {};
    (this.PH.forEach((e, t) =>
      e.forEach(([e, a, s]) => {
        c[16 * t + e] = [a, s];
      }),
    ),
      (this.L = { out: t, bus: r, dry: l, M: c }));
  },
  gl(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1, a + 0.5],
      [2.76, 0.12, 0.3],
      [5.4, 0.04, 0.12],
    ].forEach(([a, i, r]) => {
      const l = o.createOscillator(),
        c = o.createGain();
      ((l.type = "sine"),
        (l.frequency.value = e * a),
        c.gain.setValueAtTime(1e-4, t),
        c.gain.exponentialRampToValueAtTime(s * i, t + 0.004),
        c.gain.exponentialRampToValueAtTime(1e-4, t + r),
        l.connect(c),
        c.connect(n),
        l.start(t),
        l.stop(t + r + 0.05));
    });
  },
  pz(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain(),
      l = o.createBiquadFilter();
    ((i.type = "triangle"),
      (i.frequency.value = e),
      (l.type = "lowpass"),
      (l.frequency.value = 1500),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.exponentialRampToValueAtTime(s, t + 0.006),
      r.gain.exponentialRampToValueAtTime(1e-4, t + a),
      i.connect(l),
      l.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + a + 0.05));
  },
  tok(e, t, a) {
    const s = AC,
      n = s.createOscillator(),
      o = s.createGain();
    ((n.type = "sine"),
      n.frequency.setValueAtTime(1100, e),
      n.frequency.exponentialRampToValueAtTime(700, e + 0.04),
      o.gain.setValueAtTime(1e-4, e),
      o.gain.exponentialRampToValueAtTime(t, e + 0.003),
      o.gain.exponentialRampToValueAtTime(1e-4, e + 0.06),
      n.connect(o),
      o.connect(a),
      n.start(e),
      n.stop(e + 0.08));
  },
  tick() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (e && t)
      for (this.t < t.currentTime && (this.t = t.currentTime + 0.12); this.t < t.currentTime + 0.5;) {
        const t = this.s,
          a = (t >> 4) % 8,
          s = t % 8,
          [n, o] = this.CH[a],
          i = this.t,
          r = this.E;
        (0 === s
          ? this.pz(this.mf(n), i, 3 * r, 0.2, e.dry)
          : 4 === s
            ? this.pz(this.mf(n + 7), i, 2 * r, 0.13, e.dry)
            : 6 === s && this.pz(this.mf(n + 12), i, 1.2 * r, 0.07, e.dry),
          (2 !== s && 5 !== s) ||
            o.slice(0, 3).forEach((t, a) => this.pz(this.mf(t - 12), i + 0.006 * a, 1.1 * r, 0.03, e.bus)),
          (2 !== s && 6 !== s) || this.tok(i, 0.016, e.dry));
        const l = e.M[t];
        (l && this.gl(this.mf(l[0]), i, l[1] * r, 0.075, e.bus),
          7 === s &&
            Math.random() < 0.4 &&
            this.gl(this.mf(o[(4 * Math.random()) | 0] + 24), i, 0.3, 0.025, e.bus),
          (this.t += r),
          (this.s = (this.s + 1) % 128),
          0 === this.s && this.rep++);
      }
  },
  loop() {
    (clearTimeout(this.T),
      this.on &&
        (!this.L && void 0 !== AC && AC && (this.build(), apply()),
        this.L && (!document.hidden || bgOn()) && prefs().music && this.tick(),
        (this.T = setTimeout(() => this.loop(), 110))));
  },
  vol(e) {
    this.L &&
      void 0 !== AC &&
      AC &&
      this.L.out.gain.setTargetAtTime(e && this.on ? 0.9 : 0, AC.currentTime, 0.6);
  },
  set(e) {
    (e = !!e) !== this.on &&
      ((this.on = e),
      e
        ? (Date.now() - (this.off || 0) > 45e3 && ((this.s = 0), (this.rep = 0), (this.t = 0)),
          this.build(),
          this.loop())
        : (clearTimeout(this.T), (this.off = Date.now())),
      void 0 !== AC && AC && void 0 !== music && music && apply());
  },
};
function bkMus(e) {
  "object" == typeof bkMu && bkMu.set(e);
}
