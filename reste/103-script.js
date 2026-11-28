/* Musiques 2048 (cloches lumineuses, do majeur) et Blocs (bois doux, ré dorien), dans l’esprit de Tèconta, plus calmes */
var g2Mu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  rep: 0,
  CH: [
    [48, [60, 64, 67, 71, 72, 76]],
    [45, [57, 60, 64, 67, 69, 72]],
    [41, [57, 60, 65, 69, 72, 77]],
    [43, [55, 59, 62, 67, 71, 74]],
    [48, [60, 64, 67, 71, 72, 76]],
    [45, [57, 60, 64, 67, 69, 72]],
    [41, [57, 60, 65, 69, 72, 77]],
    [43, [55, 59, 62, 67, 71, 74]],
    [41, [57, 60, 65, 69, 72, 77]],
    [43, [55, 59, 62, 67, 71, 74]],
    [40, [55, 59, 64, 67, 71, 76]],
    [45, [57, 60, 64, 67, 69, 72]],
    [41, [57, 60, 65, 69, 72, 77]],
    [43, [55, 59, 62, 67, 71, 74]],
    [48, [60, 64, 67, 71, 72, 76]],
    [48, [60, 64, 67, 71, 72, 76]],
  ],
  MEL: [
    [
      [72, 2],
      [76, 2],
      [79, 4],
    ],
    [
      [76, 2],
      [72, 2],
      [69, 4],
    ],
    [
      [69, 2],
      [72, 2],
      [77, 2],
      [76, 2],
    ],
    [
      [74, 6],
      [0, 2],
    ],
    [
      [72, 2],
      [79, 2],
      [84, 4],
    ],
    [
      [81, 2],
      [79, 2],
      [76, 4],
    ],
    [
      [77, 2],
      [76, 2],
      [74, 2],
      [72, 2],
    ],
    [
      [71, 6],
      [0, 2],
    ],
    [
      [69, 3],
      [72, 1],
      [77, 4],
    ],
    [
      [74, 3],
      [71, 1],
      [79, 4],
    ],
    [
      [76, 2],
      [74, 2],
      [71, 2],
      [76, 2],
    ],
    [
      [72, 6],
      [0, 2],
    ],
    [
      [77, 2],
      [76, 2],
      [74, 4],
    ],
    [
      [79, 2],
      [77, 2],
      [74, 4],
    ],
    [
      [76, 2],
      [79, 2],
      [84, 2],
      [83, 2],
    ],
    [
      [84, 6],
      [0, 2],
    ],
  ],
  PAT: [0, 2, 1, 3, 2, 4, 3, 2],
  E: 0.34,
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
      (n.frequency.value = 1800),
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
        c.gain.exponentialRampToValueAtTime(a * i, t + 0.025),
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
          s % 2 || this.bell(this.mf(o[this.PAT[s]] + 12), i, l ? 0.02 : 0.014, e.bus));
        const c = e.M[t];
        (c &&
          this.lead(this.mf(c[0] + (l && a >= 8 ? 12 : 0)), i, c[1] * r, l && a >= 8 ? 0.036 : 0.05, e.bus),
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
      this.L.out.gain.setTargetAtTime(e && this.on ? 0.78 : 0, AC.currentTime, 0.6);
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
function g2Mus(e) {
  "object" == typeof g2Mu && g2Mu.set(e);
}
var bxMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  rep: 0,
  CH: [
    [38, [57, 60, 62, 65, 69, 74]],
    [43, [55, 59, 62, 67, 71, 74]],
    [45, [57, 60, 64, 67, 69, 72]],
    [48, [55, 60, 64, 67, 72, 76]],
    [38, [57, 60, 62, 65, 69, 74]],
    [43, [55, 59, 62, 67, 71, 74]],
    [45, [57, 60, 64, 67, 69, 72]],
    [48, [55, 60, 64, 67, 72, 76]],
    [46, [58, 62, 65, 69, 70, 74]],
    [48, [55, 60, 64, 67, 72, 76]],
    [38, [57, 60, 62, 65, 69, 74]],
    [45, [57, 60, 64, 67, 69, 72]],
    [46, [58, 62, 65, 69, 70, 74]],
    [48, [55, 60, 64, 67, 72, 76]],
    [43, [55, 59, 62, 67, 71, 74]],
    [38, [57, 60, 62, 65, 69, 74]],
  ],
  MEL: [
    [
      [74, 2],
      [72, 2],
      [69, 4],
    ],
    [
      [71, 2],
      [74, 2],
      [76, 4],
    ],
    [
      [72, 2],
      [69, 2],
      [67, 2],
      [69, 2],
    ],
    [
      [72, 6],
      [0, 2],
    ],
    [
      [74, 2],
      [77, 2],
      [76, 2],
      [74, 2],
    ],
    [
      [71, 4],
      [67, 4],
    ],
    [
      [69, 2],
      [71, 2],
      [72, 2],
      [74, 2],
    ],
    [
      [76, 6],
      [0, 2],
    ],
    [
      [77, 3],
      [74, 1],
      [70, 4],
    ],
    [
      [72, 3],
      [76, 1],
      [79, 4],
    ],
    [
      [77, 2],
      [76, 2],
      [74, 2],
      [72, 2],
    ],
    [
      [69, 6],
      [0, 2],
    ],
    [
      [70, 2],
      [74, 2],
      [77, 4],
    ],
    [
      [76, 2],
      [72, 2],
      [67, 4],
    ],
    [
      [71, 2],
      [74, 2],
      [72, 2],
      [71, 2],
    ],
    [
      [74, 6],
      [0, 2],
    ],
  ],
  PAT: [0, 2, 1, 3, 2, 4, 3, 2],
  E: 0.36,
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
      (n.frequency.value = 1800),
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
    ((i.type = "sine"),
      (r.type = "triangle"),
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
        c.gain.exponentialRampToValueAtTime(a * i, t + 0.025),
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
          s % 2 || this.bell(this.mf(o[this.PAT[s]] + 12), i, l ? 0.02 : 0.014, e.bus));
        const c = e.M[t];
        (c &&
          this.lead(this.mf(c[0] + (l && a >= 8 ? 12 : 0)), i, c[1] * r, l && a >= 8 ? 0.036 : 0.05, e.bus),
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
      this.L.out.gain.setTargetAtTime(e && this.on ? 0.78 : 0, AC.currentTime, 0.6);
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
function bxMus(e) {
  "object" == typeof bxMu && bxMu.set(e);
}
