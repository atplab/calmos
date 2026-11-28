var ttMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  rep: 0,
  CH: [
    [45, [57, 60, 64, 69, 72, 76]],
    [45, [57, 60, 64, 69, 72, 76]],
    [40, [56, 59, 64, 68, 71, 76]],
    [40, [56, 59, 64, 68, 71, 76]],
    [45, [57, 60, 64, 69, 72, 76]],
    [38, [57, 62, 65, 69, 74, 77]],
    [40, [56, 59, 64, 68, 71, 76]],
    [45, [57, 60, 64, 69, 72, 76]],
    [41, [57, 60, 65, 69, 72, 77]],
    [48, [55, 60, 64, 67, 72, 76]],
    [38, [57, 62, 65, 69, 74, 77]],
    [40, [56, 59, 64, 68, 71, 76]],
    [45, [57, 60, 64, 69, 72, 76]],
    [38, [57, 62, 65, 69, 74, 77]],
    [40, [56, 59, 64, 68, 71, 76]],
    [45, [57, 60, 64, 69, 72, 76]],
  ],
  MEL: [
    [
      [76, 3],
      [72, 1],
      [74, 2],
      [71, 2],
    ],
    [
      [72, 2],
      [69, 2],
      [69, 2],
      [72, 2],
    ],
    [
      [71, 3],
      [68, 1],
      [71, 2],
      [74, 2],
    ],
    [
      [76, 2],
      [74, 2],
      [71, 4],
    ],
    [
      [74, 2],
      [76, 2],
      [77, 1],
      [76, 1],
      [74, 2],
    ],
    [
      [72, 4],
      [74, 2],
      [71, 2],
    ],
    [
      [74, 2],
      [71, 2],
      [68, 2],
      [71, 2],
    ],
    [
      [69, 6],
      [0, 2],
    ],
    [
      [77, 3],
      [81, 1],
      [79, 2],
      [77, 2],
    ],
    [
      [76, 3],
      [72, 1],
      [76, 2],
      [74, 2],
    ],
    [
      [74, 2],
      [77, 2],
      [81, 3],
      [79, 1],
    ],
    [
      [80, 4],
      [76, 4],
    ],
    [
      [81, 2],
      [76, 2],
      [72, 2],
      [76, 2],
    ],
    [
      [77, 3],
      [74, 1],
      [77, 2],
      [81, 2],
    ],
    [
      [80, 2],
      [76, 2],
      [74, 2],
      [71, 2],
    ],
    [
      [69, 4],
      [0, 4],
    ],
  ],
  PAT: [0, 2, 1, 3, 2, 4, 3, 2],
  E: 0.25,
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    ((t.gain.value = 0), t.connect(mg));
    const a = e.createDelay(1.2),
      s = e.createGain(),
      n = e.createBiquadFilter(),
      o = e.createGain();
    ((a.delayTime.value = 3 * this.E),
      (s.gain.value = 0.3),
      (n.type = "lowpass"),
      (n.frequency.value = 2200),
      (o.gain.value = 0.4),
      a.connect(n),
      n.connect(s),
      s.connect(a),
      n.connect(o),
      o.connect(t));
    const i = e.createGain();
    (i.connect(t), i.connect(a));
    const r = e.createGain();
    r.connect(t);
    const l = 0.3 * e.sampleRate,
      c = e.createBuffer(1, l, e.sampleRate),
      d = c.getChannelData(0);
    for (let e = 0; e < l; e++) d[e] = 2 * Math.random() - 1;
    const f = {};
    let u = 0;
    (this.MEL.forEach((e) =>
      e.forEach(([e, t]) => {
        (e && (f[u] = [e, t]), (u += t));
      }),
    ),
      (this.L = { out: t, bus: i, dry: r, nb: c, M: f }));
  },
  lead(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createOscillator(),
      l = o.createGain(),
      c = o.createGain(),
      d = o.createBiquadFilter();
    ((i.type = "triangle"),
      (r.type = "sine"),
      (i.frequency.value = e),
      (r.frequency.value = 2 * e),
      (r.detune.value = 4),
      (c.gain.value = 0.05),
      (d.type = "lowpass"),
      d.frequency.setValueAtTime(1500, t),
      d.frequency.exponentialRampToValueAtTime(650, t + a),
      (d.Q.value = 0.7),
      l.gain.setValueAtTime(1e-4, t),
      l.gain.exponentialRampToValueAtTime(s, t + 0.03),
      l.gain.setTargetAtTime(0.6 * s, t + 0.08, 0.16),
      l.gain.setTargetAtTime(1e-4, t + 0.9 * a, 0.08),
      i.connect(d),
      r.connect(c),
      c.connect(d),
      d.connect(l),
      l.connect(n),
      i.start(t),
      r.start(t),
      i.stop(t + a + 0.5),
      r.stop(t + a + 0.5));
  },
  bass(e, t, a, s) {
    const n = AC,
      o = n.createOscillator(),
      i = n.createGain(),
      r = n.createBiquadFilter();
    ((o.type = "triangle"),
      (o.frequency.value = e),
      (r.type = "lowpass"),
      (r.frequency.value = 600),
      i.gain.setValueAtTime(1e-4, t),
      i.gain.exponentialRampToValueAtTime(a, t + 0.008),
      i.gain.exponentialRampToValueAtTime(1e-4, t + 0.32),
      o.connect(r),
      r.connect(i),
      i.connect(s),
      o.start(t),
      o.stop(t + 0.36));
  },
  bell(e, t, a, s) {
    const n = AC;
    [
      [1, 1, 0.7],
      [2.76, 0.12, 0.25],
    ].forEach(([o, i, r]) => {
      const l = n.createOscillator(),
        c = n.createGain();
      ((l.type = "sine"),
        (l.frequency.value = e * o),
        c.gain.setValueAtTime(1e-4, t),
        c.gain.exponentialRampToValueAtTime(a * i, t + 0.004),
        c.gain.exponentialRampToValueAtTime(1e-4, t + r),
        l.connect(c),
        c.connect(s),
        l.start(t),
        l.stop(t + r + 0.05));
    });
  },
  pad(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain();
    ((i.type = "sine"),
      (i.frequency.value = e),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.linearRampToValueAtTime(s, t + 0.3 * a),
      r.gain.linearRampToValueAtTime(1e-4, t + 1.2 * a),
      i.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + 1.25 * a));
  },
  thump(e, t, a) {
    const s = AC,
      n = s.createOscillator(),
      o = s.createGain();
    ((n.type = "sine"),
      n.frequency.setValueAtTime(95, e),
      n.frequency.exponentialRampToValueAtTime(48, e + 0.14),
      o.gain.setValueAtTime(1e-4, e),
      o.gain.exponentialRampToValueAtTime(t, e + 0.006),
      o.gain.exponentialRampToValueAtTime(1e-4, e + 0.2),
      n.connect(o),
      o.connect(a),
      n.start(e),
      n.stop(e + 0.22));
  },
  brush(e, t, a, s) {
    const n = AC,
      o = n.createBufferSource(),
      i = n.createBiquadFilter(),
      r = n.createGain();
    ((o.buffer = s),
      (i.type = "highpass"),
      (i.frequency.value = 5200),
      r.gain.setValueAtTime(1e-4, e),
      r.gain.exponentialRampToValueAtTime(t, e + 0.01),
      r.gain.exponentialRampToValueAtTime(1e-4, e + 0.09),
      o.connect(i),
      i.connect(r),
      r.connect(a),
      o.start(e),
      o.stop(e + 0.12));
  },
  tick() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (e && t)
      for (this.t < t.currentTime && (this.t = t.currentTime + 0.12); this.t < t.currentTime + 0.4;) {
        const t = this.s,
          a = (t >> 3) % 16,
          s = t % 8,
          [n, o] = this.CH[a],
          i = this.t,
          r = this.E,
          l = this.rep % 2 == 1;
        (0 === s && [o[0], o[1], o[2]].forEach((t) => this.pad(this.mf(t), i, 8 * r, 0.026, e.dry)),
          (0 !== s && 4 !== s) || this.bass(this.mf(n), i, 0 === s ? 0.17 : 0.11, e.dry),
          6 === s && this.bass(this.mf(n + 12), i, 0.06, e.dry),
          0 === s && this.thump(i, 0.05, e.dry),
          (3 !== s && 7 !== s) || this.brush(i, 0.014, e.dry, e.nb),
          this.bell(this.mf(o[this.PAT[s]] + 12), i, l ? 0.032 : 0.022, e.bus));
        const c = e.M[t];
        (c &&
          this.lead(this.mf(c[0] + (l && a >= 8 ? 12 : 0)), i, c[1] * r, l && a >= 8 ? 0.06 : 0.085, e.bus),
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
      this.L.out.gain.setTargetAtTime(e && this.on ? 0.85 : 0, AC.currentTime, 0.6);
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
function ttMus(e) {
  "object" == typeof ttMu && ttMu.set(e);
}
var cbMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  rep: 0,
  off: 0,
  CH: [
    [42, [57, 61, 64, 68]],
    [47, [54, 58, 61, 66]],
    [40, [56, 59, 61, 64]],
    [45, [57, 61, 64, 68]],
    [38, [57, 61, 62, 66]],
    [38, [57, 61, 64, 66]],
    [37, [56, 59, 61, 64]],
    [37, [56, 59, 64, 68]],
  ],
  MEL: [
    [
      [73, 3],
      [71, 1],
      [69, 4],
    ],
    [
      [70, 2],
      [71, 2],
      [73, 4],
    ],
    [
      [68, 4],
      [0, 2],
      [71, 2],
    ],
    [
      [69, 6],
      [0, 2],
    ],
    [
      [66, 2],
      [69, 2],
      [73, 3],
      [74, 1],
    ],
    [
      [76, 4],
      [73, 2],
      [69, 2],
    ],
    [
      [71, 3],
      [68, 1],
      [64, 4],
    ],
    [
      [68, 4],
      [0, 4],
    ],
    [
      [0, 2],
      [73, 2],
      [76, 2],
      [73, 2],
    ],
    [
      [71, 4],
      [70, 2],
      [66, 2],
    ],
    [
      [68, 2],
      [71, 2],
      [76, 4],
    ],
    [
      [73, 6],
      [0, 2],
    ],
    [
      [74, 3],
      [73, 1],
      [69, 2],
      [66, 2],
    ],
    [
      [69, 4],
      [73, 4],
    ],
    [
      [71, 2],
      [68, 2],
      [64, 2],
      [68, 2],
    ],
    [
      [64, 6],
      [0, 2],
    ],
  ],
  E: 0.29,
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    t.gain.value = 0;
    const a = e.createBiquadFilter();
    ((a.type = "lowpass"), (a.frequency.value = 3200), a.connect(t), t.connect(mg));
    const s = e.createDelay(1.5),
      n = e.createGain(),
      o = e.createBiquadFilter(),
      i = e.createGain();
    ((s.delayTime.value = 3 * this.E),
      (n.gain.value = 0.28),
      (o.type = "lowpass"),
      (o.frequency.value = 1800),
      (i.gain.value = 0.34),
      s.connect(o),
      o.connect(n),
      n.connect(s),
      o.connect(i),
      i.connect(a));
    const r = e.createGain();
    (r.connect(a), r.connect(s));
    const l = e.createGain();
    l.connect(a);
    const c = e.createOscillator(),
      d = e.createGain(),
      f = e.createGain();
    ((f.gain.value = 1),
      (c.frequency.value = 4.2),
      (d.gain.value = 0.08),
      c.connect(d),
      d.connect(f.gain),
      c.start(),
      f.connect(r));
    const u = 0.3 * e.sampleRate,
      h = e.createBuffer(1, u, e.sampleRate),
      p = h.getChannelData(0);
    for (let e = 0; e < u; e++) p[e] = 2 * Math.random() - 1;
    const m = {};
    let b = 0;
    (this.MEL.forEach((e) =>
      e.forEach(([e, t]) => {
        (e && (m[b] = [e, t]), (b += t));
      }),
    ),
      (this.L = { out: t, bus: r, dry: l, ep: f, nb: h, M: m }));
  },
  epn(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1, s],
      [2, 0.22, 0.6 * s],
      [7.1, 0.035, 0.18],
    ].forEach(([s, i, r]) => {
      const l = o.createOscillator(),
        c = o.createGain();
      ((l.type = "sine"),
        (l.frequency.value = e * s),
        c.gain.setValueAtTime(1e-4, t),
        c.gain.exponentialRampToValueAtTime(a * i, t + (s > 5 ? 0.002 : 0.012)),
        c.gain.exponentialRampToValueAtTime(1e-4, t + r),
        l.connect(c),
        c.connect(n),
        l.start(t),
        l.stop(t + r + 0.05));
    });
  },
  bass(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain();
    ((i.type = "sine"),
      (i.frequency.value = e),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.exponentialRampToValueAtTime(a, t + 0.02),
      r.gain.exponentialRampToValueAtTime(1e-4, t + s),
      i.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + s + 0.05));
  },
  pad(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain();
    ((i.type = "triangle"),
      (i.frequency.value = e),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.linearRampToValueAtTime(s, t + 0.4 * a),
      r.gain.linearRampToValueAtTime(1e-4, t + 1.15 * a),
      i.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + 1.2 * a));
  },
  brush(e, t, a, s) {
    const n = AC,
      o = n.createBufferSource(),
      i = n.createBiquadFilter(),
      r = n.createGain();
    ((o.buffer = s),
      (i.type = "bandpass"),
      (i.frequency.value = 3800),
      (i.Q.value = 0.6),
      r.gain.setValueAtTime(1e-4, e),
      r.gain.exponentialRampToValueAtTime(t, e + 0.03),
      r.gain.exponentialRampToValueAtTime(1e-4, e + 0.2),
      o.connect(i),
      i.connect(r),
      r.connect(a),
      o.start(e),
      o.stop(e + 0.25));
  },
  thump(e, t, a) {
    const s = AC,
      n = s.createOscillator(),
      o = s.createGain();
    ((n.type = "sine"),
      n.frequency.setValueAtTime(80, e),
      n.frequency.exponentialRampToValueAtTime(45, e + 0.16),
      o.gain.setValueAtTime(1e-4, e),
      o.gain.exponentialRampToValueAtTime(t, e + 0.008),
      o.gain.exponentialRampToValueAtTime(1e-4, e + 0.24),
      n.connect(o),
      o.connect(a),
      n.start(e),
      n.stop(e + 0.26));
  },
  tick() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (e && t)
      for (this.t < t.currentTime && (this.t = t.currentTime + 0.12); this.t < t.currentTime + 0.45;) {
        const t = this.s,
          a = (t >> 3) % 16,
          s = t % 8,
          [n, o] = this.CH[a % 8],
          i = this.t,
          r = this.E;
        (0 === s &&
          (o.forEach((t, a) => this.epn(this.mf(t), i + 0.018 * a, 0.05, 2.6, e.ep)),
          o.forEach((t) => this.pad(this.mf(t - 12), i, 8 * r, 0.012, e.dry))),
          (3 === s || (6 === s && a % 2 == 1)) &&
            o.slice(1).forEach((t, a) => this.epn(this.mf(t), i + 0.014 * a, 0.026, 1.2, e.ep)),
          0 === s && this.bass(this.mf(n), i, 0.2, 4.5 * r, e.dry),
          5 === s && this.bass(this.mf(n + (a % 2 ? 7 : 12)), i, 0.11, 2.5 * r, e.dry),
          0 === s && this.rep > 0 && this.thump(i, 0.05, e.dry),
          (2 === s || 6 === s) && this.rep > 0 && this.brush(i, 0.016, e.dry, e.nb));
        const l = e.M[t];
        (l && this.epn(this.mf(l[0] + 12), i, this.rep % 2 ? 0.06 : 0.07, Math.min(3, l[1] * r + 1.2), e.bus),
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
      this.L.out.gain.setTargetAtTime(e && this.on ? 0.9 : 0, AC.currentTime, 0.8);
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
function cbMus(e) {
  "object" == typeof cbMu && cbMu.set(e);
}
var unMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  rep: 0,
  off: 0,
  Q: 0.68,
  CH: [
    [41, 4, [57, 60, 64, 67]],
    [38, 4, [54, 59, 60, 64]],
    [43, 3, [58, 62, 65, 69]],
    [48, 4, [52, 57, 58, 62]],
    [45, 3, [55, 59, 60, 64]],
    [38, 4, [54, 59, 60, 64]],
    [43, 3, [58, 62, 65, 69]],
    [48, 4, [52, 57, 58, 62]],
    [41, 4, [57, 60, 64, 67]],
    [41, 4, [57, 62, 63, 67]],
    [46, 4, [57, 60, 62, 65]],
    [39, 4, [55, 60, 61, 65]],
    [45, 3, [55, 59, 60, 64]],
    [38, 4, [54, 59, 60, 64]],
    [43, 3, [58, 62, 65, 69]],
    [48, 4, [52, 57, 58, 62]],
  ],
  MEL: [
    [
      [72, 3],
      [69, 1],
      [76, 4],
    ],
    [
      [74, 2],
      [72, 2],
      [66, 4],
    ],
    [
      [67, 3],
      [70, 1],
      [74, 2],
      [72, 2],
    ],
    [
      [70, 4],
      [0, 2],
      [67, 2],
    ],
    [
      [72, 3],
      [71, 1],
      [69, 2],
      [67, 2],
    ],
    [
      [66, 2],
      [69, 2],
      [72, 4],
    ],
    [
      [74, 3],
      [72, 1],
      [70, 2],
      [69, 2],
    ],
    [
      [67, 6],
      [0, 2],
    ],
    [
      [69, 2],
      [72, 2],
      [76, 2],
      [79, 2],
    ],
    [
      [77, 4],
      [75, 2],
      [74, 2],
    ],
    [
      [74, 3],
      [72, 1],
      [69, 4],
    ],
    [
      [67, 2],
      [70, 2],
      [73, 4],
    ],
    [
      [72, 4],
      [0, 2],
      [71, 2],
    ],
    [
      [69, 3],
      [66, 1],
      [69, 2],
      [72, 2],
    ],
    [
      [70, 2],
      [69, 2],
      [67, 2],
      [65, 2],
    ],
    [
      [64, 2],
      [67, 2],
      [70, 2],
      [0, 2],
    ],
  ],
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    t.gain.value = 0;
    const a = e.createBiquadFilter();
    ((a.type = "lowpass"), (a.frequency.value = 5200), a.connect(t), t.connect(mg));
    const s = e.createDelay(1),
      n = e.createGain(),
      o = e.createBiquadFilter(),
      i = e.createGain();
    ((s.delayTime.value = 0.19),
      (n.gain.value = 0.22),
      (o.type = "lowpass"),
      (o.frequency.value = 2400),
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
    const c = e.createGain(),
      d = e.createOscillator(),
      f = e.createGain();
    ((d.frequency.value = 5.2),
      (f.gain.value = 0.22),
      d.connect(f),
      f.connect(c.gain),
      d.start(),
      c.connect(r));
    const u = 0.6 * e.sampleRate,
      h = e.createBuffer(1, u, e.sampleRate),
      p = h.getChannelData(0);
    for (let e = 0; e < u; e++) p[e] = 2 * Math.random() - 1;
    const m = {};
    let b = 0;
    (this.MEL.forEach((e) =>
      e.forEach(([e, t]) => {
        (e && (m[b] = [e, t]), (b += t));
      }),
    ),
      (this.L = { out: t, bus: r, dry: l, vb: c, nb: h, M: m }));
  },
  vib(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1, a],
      [4, 0.06, 0.25],
      [10, 0.015, 0.08],
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
  ep(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1, s],
      [2, 0.2, 0.6 * s],
      [7.1, 0.03, 0.12],
    ].forEach(([s, i, r]) => {
      const l = o.createOscillator(),
        c = o.createGain();
      ((l.type = "sine"),
        (l.frequency.value = e * s),
        c.gain.setValueAtTime(1e-4, t),
        c.gain.exponentialRampToValueAtTime(a * i, t + (s > 5 ? 0.002 : 0.01)),
        c.gain.exponentialRampToValueAtTime(1e-4, t + r),
        l.connect(c),
        c.connect(n),
        l.start(t),
        l.stop(t + r + 0.05));
    });
  },
  bass(e, t, a, s) {
    const n = AC,
      o = n.createOscillator(),
      i = n.createOscillator(),
      r = n.createGain(),
      l = n.createBiquadFilter();
    ((o.type = "triangle"),
      (i.type = "sine"),
      (o.frequency.value = e),
      (i.frequency.value = e),
      (l.type = "lowpass"),
      l.frequency.setValueAtTime(900, t),
      l.frequency.exponentialRampToValueAtTime(300, t + 0.4),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.exponentialRampToValueAtTime(a, t + 0.012),
      r.gain.exponentialRampToValueAtTime(0.35 * a, t + 0.18),
      r.gain.exponentialRampToValueAtTime(1e-4, t + 0.62),
      o.connect(l),
      i.connect(l),
      l.connect(r),
      r.connect(s),
      o.start(t),
      i.start(t),
      o.stop(t + 0.66),
      i.stop(t + 0.66));
  },
  nz(e, t, a, s, n, o, i, r) {
    const l = AC,
      c = l.createBufferSource(),
      d = l.createBiquadFilter(),
      f = l.createGain();
    ((c.buffer = this.L.nb),
      (c.playbackRate.value = 0.9 + 0.2 * Math.random()),
      (d.type = r || "bandpass"),
      (d.frequency.value = a),
      (d.Q.value = s),
      f.gain.setValueAtTime(1e-4, e),
      f.gain.exponentialRampToValueAtTime(t, e + n),
      f.gain.exponentialRampToValueAtTime(1e-4, e + n + o),
      c.connect(d),
      d.connect(f),
      f.connect(i),
      c.start(e, 0.2 * Math.random()),
      c.stop(e + n + o + 0.05));
  },
  ride(e, t, a) {
    this.nz(e, t, 8200, 1.2, 0.003, 0.32, a);
    const s = AC,
      n = s.createOscillator(),
      o = s.createGain();
    ((n.type = "sine"),
      (n.frequency.value = 3150),
      o.gain.setValueAtTime(1e-4, e),
      o.gain.exponentialRampToValueAtTime(0.18 * t, e + 0.003),
      o.gain.exponentialRampToValueAtTime(1e-4, e + 0.5),
      n.connect(o),
      o.connect(a),
      n.start(e),
      n.stop(e + 0.55));
  },
  sd(e) {
    return e % 2 == 0 ? (2 * this.Q) / 3 : this.Q / 3;
  },
  tick() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (e && t)
      for (this.t < t.currentTime && (this.t = t.currentTime + 0.12); this.t < t.currentTime + 0.5;) {
        const t = this.s,
          a = (t >> 3) % 16,
          s = t % 8,
          [n, o, i] = this.CH[a],
          r = this.CH[(a + 1) % 16][0],
          l = this.t,
          c = this.Q,
          d = () => 0.012 * Math.random();
        if (s % 2 == 0) {
          const t = s / 2;
          let i = 0 === t ? n : 1 === t ? n + o : 2 === t ? n + 7 : r + (a % 2 ? 1 : -1);
          for (; i > 52;) i -= 12;
          for (; i < 34;) i += 12;
          this.bass(this.mf(i), l + d(), 0 === t ? 0.2 : 0.16, e.dry);
        }
        ((0 === s || 3 === s || (7 === s && a % 4 == 3) || (5 === s && a % 2 == 1 && Math.random() < 0.5)) &&
          i.forEach((t, a) =>
            this.ep(this.mf(t), l + 0.01 * a + d(), 0 === s ? 0.035 : 0.028, 0 === s ? 1 : 0.55, e.bus),
          ),
          (0 !== s && 2 !== s && 3 !== s && 4 !== s && 6 !== s && 7 !== s) ||
            this.ride(l + d(), 3 === s || 7 === s ? 0.018 : 0.03, e.dry),
          (2 !== s && 6 !== s) ||
            (this.nz(l, 0.028, 2400, 0.5, 0.05, 0.22, e.dry),
            this.nz(l, 0.02, 7e3, 0.7, 0.002, 0.05, e.dry, "highpass")),
          0 === s && a % 8 == 7 && this.rep > 0 && this.nz(l + c, 0.02, 1800, 0.4, 0.12, 0.4, e.dry));
        const f = e.M[t];
        if (f && !(this.rep % 2 == 1 && a < 8 && Math.random() < 0.4)) {
          let t = 0;
          for (let e = 0; e < f[1]; e++) t += this.sd(s + e);
          this.vib(this.mf(f[0]), l + d(), Math.min(2.4, t + 0.9), this.rep % 2 ? 0.06 : 0.075, e.vb);
        }
        ((this.t += this.sd(s)), (this.s = (this.s + 1) % 128), 0 === this.s && this.rep++);
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
      this.L.out.gain.setTargetAtTime(e && this.on ? 0.85 : 0, AC.currentTime, 0.8);
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
function unMus(e) {
  "object" == typeof unMu && unMu.set(e);
}
var chMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  rep: 0,
  off: 0,
  E: 0.42,
  CH: [
    [38, [57, 62, 64, 66, 69]],
    [43, [54, 59, 62, 66, 73]],
    [47, [54, 57, 61, 62, 66]],
    [45, [52, 57, 59, 61, 64]],
    [38, [57, 62, 64, 66, 69]],
    [43, [54, 59, 62, 66, 73]],
    [40, [52, 55, 59, 62, 66]],
    [45, [52, 57, 61, 64, 71]],
  ],
  MEL: [
    [
      [78, 6],
      [76, 2],
    ],
    [[74, 8]],
    [
      [0, 4],
      [73, 2],
      [74, 2],
    ],
    [[78, 8]],
    [
      [81, 6],
      [78, 2],
    ],
    [[76, 8]],
    [
      [0, 4],
      [74, 2],
      [73, 2],
    ],
    [[71, 8]],
    [
      [69, 4],
      [74, 4],
    ],
    [
      [76, 6],
      [78, 2],
    ],
    [[73, 8]],
    [[0, 8]],
    [
      [78, 3],
      [76, 1],
      [74, 4],
    ],
    [
      [71, 4],
      [69, 4],
    ],
    [
      [73, 6],
      [71, 2],
    ],
    [[69, 8]],
  ],
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    t.gain.value = 0;
    const a = e.createBiquadFilter();
    ((a.type = "lowpass"), (a.frequency.value = 4200), a.connect(t), t.connect(mg));
    const s = (t, s, n) => {
        const o = e.createDelay(2),
          i = e.createGain(),
          r = e.createBiquadFilter(),
          l = e.createGain();
        return (
          (o.delayTime.value = t),
          (i.gain.value = s),
          (r.type = "lowpass"),
          (r.frequency.value = 2e3),
          (l.gain.value = n),
          o.connect(r),
          r.connect(i),
          i.connect(o),
          r.connect(l),
          l.connect(a),
          o
        );
      },
      n = s(3 * this.E, 0.42, 0.4),
      o = s(5 * this.E, 0.35, 0.3),
      i = e.createGain();
    (i.connect(a), i.connect(n), i.connect(o));
    const r = e.createGain();
    r.connect(a);
    const l = e.createBiquadFilter();
    ((l.type = "lowpass"), (l.frequency.value = 900), (l.Q.value = 0.5));
    const c = e.createGain();
    ((c.gain.value = 1), l.connect(c), c.connect(r));
    const d = e.createOscillator(),
      f = e.createGain();
    ((d.frequency.value = 0.06), (f.gain.value = 380), d.connect(f), f.connect(l.frequency), d.start());
    const u = {};
    let h = 0;
    (this.MEL.forEach((e) =>
      e.forEach(([e, t]) => {
        (e && (u[h] = [e, t]), (h += t));
      }),
    ),
      (this.L = { out: t, bus: i, dry: r, pf: l, M: u }));
  },
  harp(e, t, a, s, n = 2.4) {
    const o = AC;
    [
      [1, 1, n],
      [2, 0.25, 0.5 * n],
      [3, 0.07, 0.25 * n],
    ].forEach(([n, i, r]) => {
      const l = o.createOscillator(),
        c = o.createGain();
      ((l.type = 1 === n ? "triangle" : "sine"),
        (l.frequency.value = e * n),
        c.gain.setValueAtTime(1e-4, t),
        c.gain.exponentialRampToValueAtTime(a * i, t + 0.006),
        c.gain.exponentialRampToValueAtTime(1e-4, t + r),
        l.connect(c),
        c.connect(s),
        l.start(t),
        l.stop(t + r + 0.05));
    });
  },
  bell(e, t, a, s) {
    const n = AC;
    [
      [1, 1, 3],
      [2.76, 0.14, 1],
      [5.4, 0.05, 0.4],
    ].forEach(([o, i, r]) => {
      const l = n.createOscillator(),
        c = n.createGain();
      ((l.type = "sine"),
        (l.frequency.value = e * o),
        c.gain.setValueAtTime(1e-4, t),
        c.gain.exponentialRampToValueAtTime(a * i, t + 0.004),
        c.gain.exponentialRampToValueAtTime(1e-4, t + r),
        l.connect(c),
        c.connect(s),
        l.start(t),
        l.stop(t + r + 0.05));
    });
  },
  pad(e, t, a, s, n) {
    const o = AC;
    [-6, 6].forEach((i) => {
      const r = o.createOscillator(),
        l = o.createGain();
      ((r.type = "sawtooth"),
        (r.frequency.value = e),
        (r.detune.value = i),
        l.gain.setValueAtTime(1e-4, t),
        l.gain.linearRampToValueAtTime(s, t + 0.4 * a),
        l.gain.linearRampToValueAtTime(1e-4, t + 1.1 * a),
        r.connect(l),
        l.connect(n.pf),
        r.start(t),
        r.stop(t + 1.15 * a));
    });
  },
  bass(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain();
    ((i.type = "sine"),
      (i.frequency.value = e),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.linearRampToValueAtTime(s, t + 0.3),
      r.gain.exponentialRampToValueAtTime(1e-4, t + a),
      i.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + a + 0.05));
  },
  tick() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (e && t)
      for (this.t < t.currentTime && (this.t = t.currentTime + 0.12); this.t < t.currentTime + 0.6;) {
        const t = this.s,
          a = ((t >> 3) >> 1) % 8,
          s = t % 16,
          [n, o] = this.CH[a],
          i = this.t,
          r = this.E;
        0 === s &&
          (o.slice(0, 4).forEach((t) => this.pad(this.mf(t), i, 16 * r, 0.012, e)),
          this.bass(this.mf(n), i, 15 * r, 0.13, e.dry));
        const l = [0, 2, 4, 1, 3, 4, 2, 1];
        s % 2 == 0 &&
          this.harp(this.mf(o[l[(s / 2) % 8]]), i + 0.02 * Math.random(), 0 === s ? 0.07 : 0.045, e.bus);
        const c = e.M[t % 128];
        (c && this.harp(this.mf(c[0]), i, 0.09, e.bus, Math.min(4, c[1] * r + 1.6)),
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
        (this.T = setTimeout(() => this.loop(), 120))));
  },
  vol(e) {
    this.L &&
      void 0 !== AC &&
      AC &&
      this.L.out.gain.setTargetAtTime(e && this.on ? 0.9 : 0, AC.currentTime, 1);
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
function chMus(e) {
  "object" == typeof chMu && chMu.set(e);
}
var lfMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  rep: 0,
  off: 0,
  E: 0.6,
  CH: [
    [33, [57, 60, 64, 67, 71]],
    [29, [57, 60, 64, 69]],
    [36, [55, 60, 64, 67, 71]],
    [31, [55, 59, 62, 66, 69]],
    [38, [57, 60, 64, 65, 69]],
    [29, [57, 60, 64, 69]],
    [28, [55, 59, 62, 67]],
    [33, [57, 60, 64, 67, 71]],
  ],
  MEL: [
    [4, 76, 6],
    [14, 72, 4],
    [22, 74, 8],
    [34, 72, 5],
    [44, 69, 6],
    [52, 71, 8],
    [66, 76, 6],
    [76, 79, 5],
    [84, 76, 8],
    [98, 74, 5],
    [106, 72, 6],
    [114, 71, 5],
    [122, 69, 6],
  ],
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    t.gain.value = 0;
    const a = e.createBiquadFilter();
    ((a.type = "lowpass"), (a.frequency.value = 2600), (a.Q.value = 0.3), a.connect(t), t.connect(mg));
    const s = (t, s, n) => {
        const o = e.createDelay(3),
          i = e.createGain(),
          r = e.createBiquadFilter(),
          l = e.createGain();
        return (
          (o.delayTime.value = t),
          (i.gain.value = s),
          (r.type = "lowpass"),
          (r.frequency.value = 1500),
          (l.gain.value = n),
          o.connect(r),
          r.connect(i),
          i.connect(o),
          r.connect(l),
          l.connect(a),
          o
        );
      },
      n = s(3 * this.E, 0.38, 0.34),
      o = s(5 * this.E, 0.3, 0.26),
      i = e.createGain();
    (i.connect(a), i.connect(n), i.connect(o));
    const r = e.createGain();
    r.connect(a);
    const l = {};
    (this.MEL.forEach(([e, t, a]) => {
      l[e] = [t, a];
    }),
      (this.L = { out: t, bus: i, dry: r, M: l }));
  },
  pno(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1, "sine"],
      [2, 0.16, "sine"],
      [3, 0.04, "sine"],
      [1, 0.2, "triangle"],
    ].forEach(([i, r, l], c) => {
      const d = o.createOscillator(),
        f = o.createGain();
      ((d.type = l),
        (d.frequency.value = e * i),
        3 === c && (d.detune.value = 4),
        f.gain.setValueAtTime(1e-4, t),
        f.gain.exponentialRampToValueAtTime(s * r, t + 0.025),
        f.gain.exponentialRampToValueAtTime(s * r * 0.35, t + 0.7),
        f.gain.exponentialRampToValueAtTime(1e-4, t + a),
        d.connect(f),
        f.connect(n),
        d.start(t),
        d.stop(t + a + 0.05));
    });
  },
  pad(e, t, a, s, n) {
    const o = AC;
    [-5, 5].forEach((i) => {
      const r = o.createOscillator(),
        l = o.createGain();
      ((r.type = "triangle"),
        (r.frequency.value = e),
        (r.detune.value = i),
        l.gain.setValueAtTime(1e-4, t),
        l.gain.linearRampToValueAtTime(s, t + 0.45 * a),
        l.gain.linearRampToValueAtTime(1e-4, t + 1.1 * a),
        r.connect(l),
        l.connect(n),
        r.start(t),
        r.stop(t + 1.15 * a));
    });
  },
  bass(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain();
    ((i.type = "sine"),
      (i.frequency.value = e),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.linearRampToValueAtTime(s, t + 0.4),
      r.gain.exponentialRampToValueAtTime(1e-4, t + a),
      i.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + a + 0.05));
  },
  tick() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (e && t)
      for (this.t < t.currentTime && (this.t = t.currentTime + 0.12); this.t < t.currentTime + 0.8;) {
        const t = this.s,
          a = (t >> 4) % 8,
          s = t % 16,
          [n, o] = this.CH[a],
          i = this.t,
          r = this.E;
        0 === s &&
          (o.slice(0, 4).forEach((t) => this.pad(this.mf(t - 12), i, 16 * r, 0.01, e.dry)),
          this.bass(this.mf(n), i, 14 * r, 0.16, e.dry));
        const l = { 0: 0, 5: 2, 9: 1, 12: 3 };
        s in l && this.pno(this.mf(o[l[s] % o.length]), i, 6 * r, 0 === s ? 0.06 : 0.04, e.bus);
        const c = e.M[t];
        (c && this.pno(this.mf(c[0]), i, c[1] * r + 1, 0.07, e.bus),
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
        (this.T = setTimeout(() => this.loop(), 120))));
  },
  vol(e) {
    this.L &&
      void 0 !== AC &&
      AC &&
      this.L.out.gain.setTargetAtTime(e && this.on ? 0.9 : 0, AC.currentTime, 1);
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
function lfMus(e) {
  "object" == typeof lfMu && lfMu.set(e);
}
var ecMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  rep: 0,
  off: 0,
  E: 0.4,
  CH: [
    [38, [57, 62, 65, 69, 74]],
    [34, [58, 62, 67, 70, 74]],
    [33, [57, 61, 64, 67, 73]],
    [38, [57, 62, 65, 69, 74]],
    [41, [57, 60, 65, 69, 72]],
    [34, [58, 62, 65, 70, 74]],
    [31, [58, 62, 65, 67, 70]],
    [33, [57, 61, 64, 69, 73]],
    [38, [57, 62, 65, 69, 74]],
    [37, [57, 61, 64, 69, 73]],
    [41, [57, 62, 65, 69, 74]],
    [31, [58, 62, 67, 70, 74]],
    [40, [60, 64, 67, 70, 76]],
    [41, [57, 60, 65, 69, 72]],
    [33, [57, 61, 64, 67, 73]],
    [38, [57, 62, 65, 69, 74]],
  ],
  PAT: [0, 1, 2, 3, 4, 3, 2, 1],
  MEL: [
    [0, 0, 81, 8],
    [1, 0, 82, 4],
    [1, 4, 81, 4],
    [2, 0, 79, 4],
    [2, 4, 76, 4],
    [3, 0, 77, 6],
    [3, 6, 74, 2],
    [4, 0, 77, 4],
    [4, 4, 81, 4],
    [5, 0, 82, 6],
    [5, 6, 79, 2],
    [6, 0, 82, 4],
    [6, 4, 79, 4],
    [7, 0, 81, 4],
    [7, 4, 85, 4],
    [8, 0, 86, 8],
    [9, 0, 85, 4],
    [9, 4, 81, 4],
    [10, 0, 81, 4],
    [10, 4, 77, 4],
    [11, 0, 79, 4],
    [11, 4, 82, 4],
    [12, 0, 76, 4],
    [12, 4, 79, 4],
    [13, 0, 81, 6],
    [13, 6, 77, 2],
    [14, 0, 76, 4],
    [14, 4, 73, 4],
    [15, 0, 74, 8],
  ],
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    t.gain.value = 0;
    const a = e.createBiquadFilter();
    ((a.type = "lowpass"), (a.frequency.value = 3e3), (a.Q.value = 0.3), a.connect(t), t.connect(mg));
    const s = (t, s, n) => {
        const o = e.createDelay(3),
          i = e.createGain(),
          r = e.createBiquadFilter(),
          l = e.createGain();
        return (
          (o.delayTime.value = t),
          (i.gain.value = s),
          (r.type = "lowpass"),
          (r.frequency.value = 1700),
          (l.gain.value = n),
          o.connect(r),
          r.connect(i),
          i.connect(o),
          r.connect(l),
          l.connect(a),
          o
        );
      },
      n = s(0.37, 0.4, 0.3),
      o = s(0.61, 0.34, 0.24),
      i = e.createGain();
    (i.connect(a), i.connect(n), i.connect(o));
    const r = e.createGain();
    r.connect(a);
    const l = {};
    (this.MEL.forEach(([e, t, a, s]) => {
      l[8 * e + t] = [a, s];
    }),
      (this.L = { out: t, bus: i, dry: r, M: l }));
  },
  pno(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1, "triangle"],
      [2, 0.18, "sine"],
      [3, 0.06, "sine"],
      [4, 0.02, "sine"],
    ].forEach(([i, r, l], c) => {
      const d = o.createOscillator(),
        f = o.createGain();
      ((d.type = l),
        (d.frequency.value = e * i),
        f.gain.setValueAtTime(1e-4, t),
        f.gain.exponentialRampToValueAtTime(s * r, t + 0.008),
        f.gain.exponentialRampToValueAtTime(s * r * 0.3, t + 0.5),
        f.gain.exponentialRampToValueAtTime(1e-4, t + a),
        d.connect(f),
        f.connect(n),
        d.start(t),
        d.stop(t + a + 0.05));
    });
  },
  vln(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createOscillator(),
      l = o.createGain(),
      c = o.createBiquadFilter(),
      d = o.createOscillator(),
      f = o.createGain();
    ((i.type = "sawtooth"),
      (r.type = "sine"),
      (i.frequency.value = e),
      (r.frequency.value = e),
      (c.type = "lowpass"),
      (c.frequency.value = 1500),
      (c.Q.value = 0.5),
      (d.frequency.value = 5),
      (f.gain.value = 0.006 * e),
      d.connect(f),
      f.connect(i.frequency),
      f.connect(r.frequency),
      l.gain.setValueAtTime(1e-4, t),
      l.gain.linearRampToValueAtTime(s, t + 0.25),
      l.gain.setTargetAtTime(0.75 * s, t + 0.4, 0.6),
      l.gain.setTargetAtTime(1e-4, t + a - 0.25, 0.18),
      i.connect(c),
      r.connect(c),
      c.connect(l),
      l.connect(n),
      [i, r, d].forEach((e) => {
        (e.start(t), e.stop(t + a + 0.6));
      }));
  },
  bass(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain(),
      l = o.createBiquadFilter();
    ((i.type = "triangle"),
      (i.frequency.value = e),
      (l.type = "lowpass"),
      (l.frequency.value = 420),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.exponentialRampToValueAtTime(s, t + 0.03),
      r.gain.exponentialRampToValueAtTime(0.5 * s, t + 0.5 * a),
      r.gain.exponentialRampToValueAtTime(1e-4, t + a),
      i.connect(l),
      l.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + a + 0.05));
  },
  tick() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (e && t)
      for (this.t < t.currentTime && (this.t = t.currentTime + 0.12); this.t < t.currentTime + 0.8;) {
        const t = this.s,
          a = (t >> 3) % 16,
          s = t % 8,
          [n, o] = this.CH[a],
          i = this.t + (s ? 0.01 * Math.random() : 0),
          r = this.E;
        (0 === s && this.bass(this.mf(n), i, 8 * r, 0.15, e.dry),
          this.pno(this.mf(o[this.PAT[s]]), i, 5 * r, 0 === s ? 0.055 : s % 2 ? 0.028 : 0.036, e.bus));
        const l = e.M[t];
        (l && this.vln(this.mf(l[0]), i, l[1] * r, 0.03, e.bus),
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
        (this.T = setTimeout(() => this.loop(), 120))));
  },
  vol(e) {
    this.L &&
      void 0 !== AC &&
      AC &&
      this.L.out.gain.setTargetAtTime(e && this.on ? 0.9 : 0, AC.currentTime, 1);
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
function ecMus(e) {
  "object" == typeof ecMu && ecMu.set(e);
}
var dmMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  rep: 0,
  off: 0,
  E: 0.46,
  CH: [
    [41, [57, 60, 65, 69, 72]],
    [38, [57, 62, 65, 69, 74]],
    [34, [58, 62, 65, 70, 74]],
    [36, [55, 60, 64, 67, 72]],
    [41, [57, 60, 65, 69, 72]],
    [33, [57, 60, 64, 69, 72]],
    [34, [58, 62, 65, 70, 74]],
    [36, [55, 60, 64, 67, 72]],
    [41, [57, 60, 65, 69, 72]],
    [38, [57, 62, 65, 69, 74]],
    [31, [55, 58, 62, 67, 70]],
    [36, [55, 60, 64, 67, 72]],
    [41, [57, 60, 65, 69, 72]],
    [34, [58, 62, 65, 70, 74]],
    [36, [55, 60, 64, 67, 72]],
    [41, [57, 60, 65, 69, 72]],
  ],
  PAT: [0, 2, 1, 3, 2, 4, 3, 1],
  MEL: [
    [0, 0, 81, 4],
    [0, 4, 79, 2],
    [0, 6, 77, 2],
    [1, 0, 74, 4],
    [1, 4, 77, 4],
    [2, 0, 79, 4],
    [2, 4, 77, 2],
    [2, 6, 74, 2],
    [3, 0, 76, 6],
    [3, 6, 72, 2],
    [4, 0, 77, 4],
    [4, 4, 81, 4],
    [5, 0, 84, 4],
    [5, 4, 81, 4],
    [6, 0, 82, 4],
    [6, 4, 79, 2],
    [6, 6, 77, 2],
    [7, 0, 79, 8],
    [8, 0, 81, 4],
    [8, 4, 84, 2],
    [8, 6, 81, 2],
    [9, 0, 77, 4],
    [9, 4, 74, 4],
    [10, 0, 79, 4],
    [10, 4, 82, 4],
    [11, 0, 79, 4],
    [11, 4, 76, 4],
    [12, 0, 77, 4],
    [12, 4, 72, 2],
    [12, 6, 74, 2],
    [13, 0, 77, 4],
    [13, 4, 74, 4],
    [14, 0, 76, 4],
    [14, 4, 79, 4],
    [15, 0, 77, 8],
  ],
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    t.gain.value = 0;
    const a = e.createBiquadFilter();
    ((a.type = "lowpass"), (a.frequency.value = 3e3), (a.Q.value = 0.3), a.connect(t), t.connect(mg));
    const s = (t, s, n) => {
        const o = e.createDelay(3),
          i = e.createGain(),
          r = e.createBiquadFilter(),
          l = e.createGain();
        return (
          (o.delayTime.value = t),
          (i.gain.value = s),
          (r.type = "lowpass"),
          (r.frequency.value = 1700),
          (l.gain.value = n),
          o.connect(r),
          r.connect(i),
          i.connect(o),
          r.connect(l),
          l.connect(a),
          o
        );
      },
      n = s(0.37, 0.4, 0.3),
      o = s(0.61, 0.34, 0.24),
      i = e.createGain();
    (i.connect(a), i.connect(n), i.connect(o));
    const r = e.createGain();
    r.connect(a);
    const l = {};
    (this.MEL.forEach(([e, t, a, s]) => {
      l[8 * e + t] = [a, s];
    }),
      (this.L = { out: t, bus: i, dry: r, M: l }));
  },
  pno(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1, "triangle"],
      [2, 0.18, "sine"],
      [3, 0.06, "sine"],
      [4, 0.02, "sine"],
    ].forEach(([i, r, l], c) => {
      const d = o.createOscillator(),
        f = o.createGain();
      ((d.type = l),
        (d.frequency.value = e * i),
        f.gain.setValueAtTime(1e-4, t),
        f.gain.exponentialRampToValueAtTime(s * r, t + 0.008),
        f.gain.exponentialRampToValueAtTime(s * r * 0.3, t + 0.5),
        f.gain.exponentialRampToValueAtTime(1e-4, t + a),
        d.connect(f),
        f.connect(n),
        d.start(t),
        d.stop(t + a + 0.05));
    });
  },
  vln(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createOscillator(),
      l = o.createGain(),
      c = o.createBiquadFilter(),
      d = o.createOscillator(),
      f = o.createGain();
    ((i.type = "sawtooth"),
      (r.type = "sine"),
      (i.frequency.value = e),
      (r.frequency.value = e),
      (c.type = "lowpass"),
      (c.frequency.value = 1500),
      (c.Q.value = 0.5),
      (d.frequency.value = 5),
      (f.gain.value = 0.006 * e),
      d.connect(f),
      f.connect(i.frequency),
      f.connect(r.frequency),
      l.gain.setValueAtTime(1e-4, t),
      l.gain.linearRampToValueAtTime(s, t + 0.25),
      l.gain.setTargetAtTime(0.75 * s, t + 0.4, 0.6),
      l.gain.setTargetAtTime(1e-4, t + a - 0.25, 0.18),
      i.connect(c),
      r.connect(c),
      c.connect(l),
      l.connect(n),
      [i, r, d].forEach((e) => {
        (e.start(t), e.stop(t + a + 0.6));
      }));
  },
  bass(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain(),
      l = o.createBiquadFilter();
    ((i.type = "triangle"),
      (i.frequency.value = e),
      (l.type = "lowpass"),
      (l.frequency.value = 420),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.exponentialRampToValueAtTime(s, t + 0.03),
      r.gain.exponentialRampToValueAtTime(0.5 * s, t + 0.5 * a),
      r.gain.exponentialRampToValueAtTime(1e-4, t + a),
      i.connect(l),
      l.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + a + 0.05));
  },
  tick() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (e && t)
      for (this.t < t.currentTime && (this.t = t.currentTime + 0.12); this.t < t.currentTime + 0.8;) {
        const t = this.s,
          a = (t >> 3) % 16,
          s = t % 8,
          [n, o] = this.CH[a],
          i = this.t + (s ? 0.01 * Math.random() : 0),
          r = this.E;
        (0 === s && this.bass(this.mf(n), i, 8 * r, 0.15, e.dry),
          this.pno(this.mf(o[this.PAT[s]]), i, 5 * r, 0 === s ? 0.055 : s % 2 ? 0.028 : 0.036, e.bus));
        const l = e.M[t];
        (l && this.vln(this.mf(l[0]), i, l[1] * r, 0.03, e.bus),
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
        (this.T = setTimeout(() => this.loop(), 120))));
  },
  vol(e) {
    this.L &&
      void 0 !== AC &&
      AC &&
      this.L.out.gain.setTargetAtTime(e && this.on ? 0.9 : 0, AC.currentTime, 1);
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
function dmMus(e) {
  "object" == typeof dmMu && dmMu.set(e);
}
var mtMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  rep: 0,
  off: 0,
  E: 0.62,
  CH: [
    [41, [60, 65, 69, 72, 76]],
    [38, [57, 62, 65, 69, 72]],
    [34, [58, 62, 65, 69, 74]],
    [36, [60, 64, 67, 72, 74]],
    [41, [60, 65, 67, 72, 77]],
    [33, [57, 60, 64, 69, 72]],
    [34, [58, 62, 65, 70, 74]],
    [36, [55, 60, 64, 67, 72]],
    [38, [57, 62, 65, 69, 76]],
    [33, [57, 60, 64, 69, 71]],
    [34, [58, 62, 67, 70, 74]],
    [36, [60, 64, 67, 72, 76]],
    [41, [60, 65, 69, 72, 79]],
    [38, [57, 62, 64, 69, 74]],
    [34, [58, 62, 65, 69, 72]],
    [36, [55, 60, 64, 67, 74]],
  ],
  PAT: [0, 2, 4, 1, 3, 2, 4, 2],
  MEL: [
    [0, 0, 76, 8],
    [2, 0, 77, 8],
    [4, 0, 72, 8],
    [6, 0, 74, 8],
    [8, 0, 76, 6],
    [8, 6, 77, 2],
    [10, 0, 74, 8],
    [12, 0, 79, 8],
    [14, 0, 77, 4],
    [14, 4, 76, 4],
    [15, 0, 72, 8],
  ],
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    t.gain.value = 0;
    const a = e.createBiquadFilter();
    ((a.type = "lowpass"), (a.frequency.value = 2200), (a.Q.value = 0.3), a.connect(t), t.connect(mg));
    const s = (t, s, n) => {
        const o = e.createDelay(3),
          i = e.createGain(),
          r = e.createBiquadFilter(),
          l = e.createGain();
        return (
          (o.delayTime.value = t),
          (i.gain.value = s),
          (r.type = "lowpass"),
          (r.frequency.value = 1700),
          (l.gain.value = n),
          o.connect(r),
          r.connect(i),
          i.connect(o),
          r.connect(l),
          l.connect(a),
          o
        );
      },
      n = s(0.52, 0.42, 0.32),
      o = s(0.83, 0.36, 0.26),
      i = e.createGain();
    (i.connect(a), i.connect(n), i.connect(o));
    const r = e.createGain();
    r.connect(a);
    const l = {};
    (this.MEL.forEach(([e, t, a, s]) => {
      l[8 * e + t] = [a, s];
    }),
      (this.L = { out: t, bus: i, dry: r, M: l }));
  },
  pno(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1, "triangle"],
      [2, 0.18, "sine"],
      [3, 0.06, "sine"],
      [4, 0.02, "sine"],
    ].forEach(([i, r, l], c) => {
      const d = o.createOscillator(),
        f = o.createGain();
      ((d.type = l),
        (d.frequency.value = e * i),
        f.gain.setValueAtTime(1e-4, t),
        f.gain.exponentialRampToValueAtTime(s * r, t + 0.008),
        f.gain.exponentialRampToValueAtTime(s * r * 0.3, t + 0.5),
        f.gain.exponentialRampToValueAtTime(1e-4, t + a),
        d.connect(f),
        f.connect(n),
        d.start(t),
        d.stop(t + a + 0.05));
    });
  },
  vln(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createOscillator(),
      l = o.createGain(),
      c = o.createBiquadFilter(),
      d = o.createOscillator(),
      f = o.createGain();
    ((i.type = "sawtooth"),
      (r.type = "sine"),
      (i.frequency.value = e),
      (r.frequency.value = e),
      (c.type = "lowpass"),
      (c.frequency.value = 1500),
      (c.Q.value = 0.5),
      (d.frequency.value = 5),
      (f.gain.value = 0.006 * e),
      d.connect(f),
      f.connect(i.frequency),
      f.connect(r.frequency),
      l.gain.setValueAtTime(1e-4, t),
      l.gain.linearRampToValueAtTime(s, t + 0.25),
      l.gain.setTargetAtTime(0.75 * s, t + 0.4, 0.6),
      l.gain.setTargetAtTime(1e-4, t + a - 0.25, 0.18),
      i.connect(c),
      r.connect(c),
      c.connect(l),
      l.connect(n),
      [i, r, d].forEach((e) => {
        (e.start(t), e.stop(t + a + 0.6));
      }));
  },
  bass(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain(),
      l = o.createBiquadFilter();
    ((i.type = "triangle"),
      (i.frequency.value = e),
      (l.type = "lowpass"),
      (l.frequency.value = 420),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.exponentialRampToValueAtTime(s, t + 0.03),
      r.gain.exponentialRampToValueAtTime(0.5 * s, t + 0.5 * a),
      r.gain.exponentialRampToValueAtTime(1e-4, t + a),
      i.connect(l),
      l.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + a + 0.05));
  },
  tick() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (e && t)
      for (this.t < t.currentTime && (this.t = t.currentTime + 0.12); this.t < t.currentTime + 0.8;) {
        const t = this.s,
          a = (t >> 3) % 16,
          s = t % 8,
          [n, o] = this.CH[a],
          i = this.t + (s ? 0.01 * Math.random() : 0),
          r = this.E;
        (0 === s && this.bass(this.mf(n), i, 8 * r, 0.11, e.dry),
          (s % 2 === 0 || Math.random() < 0.35) &&
            this.pno(this.mf(o[this.PAT[s]]), i, 6 * r, 0 === s ? 0.04 : 0.022, e.bus));
        const l = e.M[t];
        (l && this.vln(this.mf(l[0]), i, l[1] * r, 0.018, e.bus),
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
        (this.T = setTimeout(() => this.loop(), 120))));
  },
  vol(e) {
    this.L &&
      void 0 !== AC &&
      AC &&
      this.L.out.gain.setTargetAtTime(e && this.on ? 0.8 : 0, AC.currentTime, 1);
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
function mtMus(e) {
  "object" == typeof mtMu && mtMu.set(e);
}
