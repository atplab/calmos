// Air hockey : musique (ahMu, ahMus)
var ahMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  rep: 0,
  off: 0,
  E: 0.288,
  CH: [
    [41, [65, 69, 72, 76]],
    [45, [64, 67, 71, 72]],
    [46, [62, 65, 69, 70]],
    [48, [64, 67, 69, 72]],
    [38, [62, 65, 69, 72]],
    [43, [62, 65, 67, 70]],
    [46, [62, 65, 69, 70]],
    [48, [60, 65, 67, 70]],
  ],
  PH: [
    [
      [0, 81, 2],
      [3, 84, 1],
      [4, 81, 2],
      [8, 79, 2],
      [11, 81, 1],
      [12, 77, 3],
    ],
    [
      [0, 76, 2],
      [3, 79, 1],
      [4, 81, 2],
      [8, 79, 2],
      [12, 76, 3],
    ],
    [
      [0, 77, 2],
      [3, 81, 1],
      [4, 82, 2],
      [8, 81, 2],
      [11, 79, 1],
      [12, 77, 3],
    ],
    [
      [0, 79, 2],
      [3, 81, 1],
      [4, 84, 3],
      [8, 81, 2],
      [12, 79, 3],
    ],
    [
      [0, 81, 2],
      [3, 77, 1],
      [4, 81, 2],
      [8, 84, 2],
      [11, 81, 1],
      [12, 77, 3],
    ],
    [
      [0, 79, 2],
      [3, 82, 1],
      [4, 86, 2],
      [8, 82, 2],
      [12, 79, 3],
    ],
    [
      [0, 81, 2],
      [3, 82, 1],
      [4, 81, 2],
      [8, 77, 2],
      [12, 74, 3],
    ],
    [
      [0, 72, 2],
      [3, 76, 1],
      [4, 79, 2],
      [8, 84, 4],
      [14, 81, 2],
    ],
  ],
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    t.gain.value = 0;
    const a = e.createBiquadFilter();
    ((a.type = "lowpass"), (a.frequency.value = 3400), (a.Q.value = 0.3), a.connect(t), t.connect(mg));
    const s = e.createDelay(1),
      n = e.createGain(),
      o = e.createBiquadFilter(),
      i = e.createGain();
    ((s.delayTime.value = 3 * this.E),
      (n.gain.value = 0.3),
      (o.type = "lowpass"),
      (o.frequency.value = 2e3),
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
  mar(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1, "sine", a],
      [3.9, 0.1, "sine", 0.12],
      [2, 0.18, "triangle", 0.5 * a],
    ].forEach(([a, i, r, l]) => {
      const c = o.createOscillator(),
        d = o.createGain();
      ((c.type = r),
        (c.frequency.value = e * a),
        d.gain.setValueAtTime(1e-4, t),
        d.gain.exponentialRampToValueAtTime(s * i, t + 0.006),
        d.gain.exponentialRampToValueAtTime(1e-4, t + l + 0.15),
        c.connect(d),
        d.connect(n),
        c.start(t),
        c.stop(t + l + 0.2));
    });
  },
  keys(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain();
    ((i.type = "triangle"),
      (i.frequency.value = e),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.exponentialRampToValueAtTime(s, t + 0.012),
      r.gain.exponentialRampToValueAtTime(1e-4, t + a),
      i.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + a + 0.05));
  },
  bass(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain(),
      l = o.createBiquadFilter();
    ((i.type = "triangle"),
      (i.frequency.value = e),
      (l.type = "lowpass"),
      (l.frequency.value = 450),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.exponentialRampToValueAtTime(s, t + 0.01),
      r.gain.exponentialRampToValueAtTime(1e-4, t + a),
      i.connect(l),
      l.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + a + 0.05));
  },
  kick(e, t, a) {
    const s = AC,
      n = s.createOscillator(),
      o = s.createGain();
    ((n.type = "sine"),
      n.frequency.setValueAtTime(115, e),
      n.frequency.exponentialRampToValueAtTime(48, e + 0.12),
      o.gain.setValueAtTime(1e-4, e),
      o.gain.exponentialRampToValueAtTime(t, e + 0.006),
      o.gain.exponentialRampToValueAtTime(1e-4, e + 0.2),
      n.connect(o),
      o.connect(a),
      n.start(e),
      n.stop(e + 0.22));
  },
  tok(e, t, a) {
    const s = AC,
      n = s.createOscillator(),
      o = s.createGain();
    ((n.type = "sine"),
      n.frequency.setValueAtTime(900, e),
      n.frequency.exponentialRampToValueAtTime(520, e + 0.05),
      o.gain.setValueAtTime(1e-4, e),
      o.gain.exponentialRampToValueAtTime(t, e + 0.003),
      o.gain.exponentialRampToValueAtTime(1e-4, e + 0.07),
      n.connect(o),
      o.connect(a),
      n.start(e),
      n.stop(e + 0.09));
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
          ? o.forEach((t, a) => this.keys(this.mf(t - 12), i + 0.008 * a, 3 * r, 0.022, e.bus))
          : (3 !== s && 6 !== s) ||
            o.slice(1).forEach((t) => this.keys(this.mf(t - 12), i, 1.5 * r, 0.016, e.bus)),
          0 === s
            ? this.bass(this.mf(n), i, 2.5 * r, 0.2, e.dry)
            : 3 === s
              ? this.bass(this.mf(n + 12), i, 1.2 * r, 0.1, e.dry)
              : 4 === s
                ? this.bass(this.mf(n + 7), i, 1.5 * r, 0.13, e.dry)
                : 6 === s && this.bass(this.mf(n + 12), i, 1.2 * r, 0.09, e.dry),
          (0 !== s && 4 !== s) || this.kick(i, 0 === s ? 0.26 : 0.18, e.dry),
          (2 !== s && 6 !== s) || this.tok(i, 0.03, e.dry));
        const l = e.M[t];
        (l && this.mar(this.mf(l[0]), i, l[1] * r, 0.07, e.bus),
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
function ahMus(e) {
  "object" == typeof ahMu && ahMu.set(e);
}
