var GFW = 0;
var gfMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  a: 0,
  W: 0,
  off: 0,
  rep: 0,
  MD: {
    mix: [0, 2, 4, 5, 7, 9, 10],
    dor: [0, 2, 3, 5, 7, 9, 10],
    aeo: [0, 2, 3, 5, 7, 8, 10],
    lyd: [0, 2, 4, 6, 7, 9, 11],
  },
  MO: {
    A: [
      [0, 7, 3],
      [3, 6, 1],
      [4, 5, 2],
      [6, 4, 2],
    ],
    B: [
      [0, 4, 2],
      [2, 5, 2],
      [4, 7, 3],
      [7, 6, 1],
    ],
    C: [
      [0, 3, 3],
      [3, 4, 1],
      [4, 5, 4],
    ],
    D: [
      [0, 5, 2],
      [2, 4, 2],
      [4, 3, 2],
      [6, 1, 2],
    ],
    E: [
      [0, 7, 1],
      [1, 8, 1],
      [2, 7, 2],
      [4, 5, 2],
      [6, 4, 2],
    ],
  },
  DT: [
    [7, "mix", 87, "0M 7M 5M 0M 0M 7M 10M 5M", "A-B-A-C-", "10100101", 1100, 1],
    [2, "dor", 84, "0m 10M 0m 5M 0m 10M 8M 10M", "A-C-B-D-", "10010010", 1000, 1],
    [9, "mix", 90, "0M 7M 5M 0M 0M 10M 5M 7M", "B-A-D-A-", "10101010", 1300, 1],
    [4, "aeo", 82, "0m 8M 3M 10M 0m 8M 10M 7M", "C-A-B-D-", "10010100", 800, 0],
    [0, "lyd", 88, "0M 2M 0M 7M 0M 2M 4m 7M", "A-B-C-D-", "11010101", 1500, 1],
    [11, "dor", 80, "0m 10M 0m 5M 0m 10M 8M 10M", "B--A--C-", "10000100", 700, 0],
    [7, "aeo", 84, "0m 8M 3M 10M 0m 8M 10M 7M", "A-D-A-B-", "10100100", 900, 1],
    [3, "lyd", 86, "0M 2M 0M 7M 0M 2M 4m 7M", "C-B-A-D-", "10101001", 1400, 1],
    [2, "aeo", 78, "0m 8M 3M 10M 0m 8M 10M 7M", "B-D--A-C", "10010010", 650, 0],
    [7, "mix", 96, "0M 7M 5M 0M 0M 7M 10M 5M", "AB-CAB-D", "11011011", 1600, 2],
  ],
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  cf(w) {
    const d = this.DT[w % 10];
    return {
      r: d[0],
      sc: this.MD[d[1]],
      bpm: d[2],
      pr: d[3].split(" ").map((x) => [parseInt(x), x.slice(-1)]),
      ph: d[4],
      ar: d[5],
      cut: d[6],
      kk: d[7],
    };
  },
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const out = e.createGain();
    out.gain.value = 0;
    const lp = e.createBiquadFilter();
    ((lp.type = "lowpass"), (lp.frequency.value = 5200), lp.connect(out), out.connect(mg));
    const dl = e.createDelay(2),
      fb = e.createGain(),
      df = e.createBiquadFilter(),
      wet = e.createGain();
    ((dl.delayTime.value = 0.69),
      (fb.gain.value = 0.42),
      (df.type = "lowpass"),
      (df.frequency.value = 1800),
      (wet.gain.value = 0.5),
      dl.connect(df),
      df.connect(fb),
      fb.connect(dl),
      df.connect(wet),
      wet.connect(lp));
    const bus = e.createGain();
    (bus.connect(lp), bus.connect(dl));
    const dry = e.createGain();
    (dry.connect(lp), (this.L = { out, bus, dry }));
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
  kick(i, v) {
    const t = AC,
      o = t.createOscillator(),
      g = t.createGain();
    ((o.type = "sine"),
      o.frequency.setValueAtTime(120, i),
      o.frequency.exponentialRampToValueAtTime(48, i + 0.12),
      g.gain.setValueAtTime(1e-4, i),
      g.gain.exponentialRampToValueAtTime(v, i + 0.006),
      g.gain.exponentialRampToValueAtTime(1e-4, i + 0.4),
      o.connect(g),
      g.connect(this.L.dry),
      o.start(i),
      o.stop(i + 0.45));
  },
  nz(i, d, ty, fq, v, dst) {
    const t = AC;
    if (!this.NB) {
      const n = t.createBuffer(1, t.sampleRate, t.sampleRate),
        c = n.getChannelData(0);
      for (let k = 0; k < c.length; k++) c[k] = 2 * Math.random() - 1;
      this.NB = n;
    }
    const o = t.createBufferSource(),
      f = t.createBiquadFilter(),
      g = t.createGain();
    ((o.buffer = this.NB),
      (o.loop = !0),
      (f.type = ty),
      (f.frequency.value = fq),
      (f.Q.value = 0.8),
      g.gain.setValueAtTime(1e-4, i),
      g.gain.exponentialRampToValueAtTime(v, i + 0.004),
      g.gain.exponentialRampToValueAtTime(1e-4, i + d),
      o.connect(f),
      f.connect(g),
      g.connect(dst),
      o.start(i),
      o.stop(i + d + 0.05));
  },
  rise(i, len) {
    const t = AC,
      o = t.createBufferSource(),
      f = t.createBiquadFilter(),
      g = t.createGain();
    if (!this.NB) this.nz(i, 0.01, "highpass", 9000, 1e-3, this.L.dry);
    ((o.buffer = this.NB),
      (o.loop = !0),
      (f.type = "bandpass"),
      (f.Q.value = 1.2),
      f.frequency.setValueAtTime(300, i),
      f.frequency.exponentialRampToValueAtTime(5000, i + len),
      g.gain.setValueAtTime(1e-4, i),
      g.gain.exponentialRampToValueAtTime(0.05, i + len),
      g.gain.linearRampToValueAtTime(1e-4, i + len + 0.08),
      o.connect(f),
      f.connect(g),
      g.connect(this.L.bus),
      o.start(i),
      o.stop(i + len + 0.1));
  },
  pl(i, n, v, d) {
    const t = AC,
      o = t.createOscillator(),
      g = t.createGain(),
      f = t.createBiquadFilter();
    ((o.type = "triangle"),
      (o.frequency.value = this.mf(n)),
      (f.type = "lowpass"),
      (f.frequency.value = 700),
      g.gain.setValueAtTime(1e-4, i),
      g.gain.exponentialRampToValueAtTime(v, i + 0.01),
      g.gain.exponentialRampToValueAtTime(1e-4, i + d),
      o.connect(f),
      f.connect(g),
      g.connect(this.L.dry),
      o.start(i),
      o.stop(i + d + 0.05));
  },
  bar(i, C, root, q, len, P) {
    const e = this.L,
      t = AC,
      B = 36 + (root % 12),
      th = "m" === q ? 3 : 4,
      notes = [B + 12, B + 12 + th, B + 19, B + 24],
      f = t.createBiquadFilter();
    ((f.type = "lowpass"),
      (f.Q.value = 0.5),
      f.frequency.setValueAtTime(0.5 * C.cut, i),
      f.frequency.linearRampToValueAtTime(C.cut, i + 0.5 * len),
      f.frequency.linearRampToValueAtTime(0.6 * C.cut, i + len + 0.8));
    const g = t.createGain();
    (g.gain.setValueAtTime(1e-4, i),
      g.gain.linearRampToValueAtTime(0.065 * P, i + 0.35 * len),
      g.gain.setValueAtTime(0.065 * P, i + 0.8 * len),
      g.gain.linearRampToValueAtTime(1e-4, i + len + 1.2),
      f.connect(g),
      g.connect(e.bus),
      notes.forEach((n, k) =>
        [-6, 6].forEach((d) => {
          const o = t.createOscillator();
          ((o.type = k % 2 ? "triangle" : "sawtooth"),
            (o.frequency.value = this.mf(n)),
            (o.detune.value = d));
          const v = t.createGain();
          ((v.gain.value = 3 === k ? 0.5 : 1), o.connect(v), v.connect(f), o.start(i), o.stop(i + len + 1.3));
        }),
      ));
    const sb = t.createOscillator(),
      sg = t.createGain(),
      tr = t.createOscillator(),
      tg = t.createGain();
    ((sb.type = "sine"),
      (sb.frequency.value = this.mf(B < 40 ? B : B - 12)),
      (tr.type = "triangle"),
      (tr.frequency.value = this.mf(B)),
      [
        [sg, 0.2],
        [tg, 0.07],
      ].forEach(([n, a]) => {
        (n.gain.setValueAtTime(1e-4, i),
          n.gain.linearRampToValueAtTime(a, i + 0.12),
          n.gain.setValueAtTime(a, i + len - 0.1),
          n.gain.linearRampToValueAtTime(1e-4, i + len + 0.35));
      }),
      sb.connect(sg),
      sg.connect(e.dry),
      tr.connect(tg),
      tg.connect(e.dry),
      sb.start(i),
      sb.stop(i + len + 0.5),
      tr.start(i),
      tr.stop(i + len + 0.5));
  },

  pad(i, ns, len, v, cut) {
    const t = AC,
      e = this.L,
      f = t.createBiquadFilter();
    ((f.type = "lowpass"),
      (f.Q.value = 0.4),
      f.frequency.setValueAtTime(0.6 * cut, i),
      f.frequency.linearRampToValueAtTime(cut, i + 0.5 * len));
    const g = t.createGain();
    (g.gain.setValueAtTime(1e-4, i),
      g.gain.linearRampToValueAtTime(v, i + 0.45 * len),
      g.gain.setValueAtTime(v, i + 0.8 * len),
      g.gain.linearRampToValueAtTime(1e-4, i + len + 0.9),
      f.connect(g),
      g.connect(e.bus));
    ns.forEach((n, k) =>
      [-7, 7].forEach((d) => {
        const o = t.createOscillator();
        ((o.type = k % 2 ? "triangle" : "sawtooth"), (o.frequency.value = this.mf(n)), (o.detune.value = d));
        const vg = t.createGain();
        ((vg.gain.value = 0.5), o.connect(vg), vg.connect(f), o.start(i), o.stop(i + len + 1));
      }),
    );
  },
  fl(i, fq, d, v) {
    const t = AC,
      e = this.L,
      o = t.createOscillator(),
      o2 = t.createOscillator(),
      g = t.createGain(),
      g2 = t.createGain(),
      lp = t.createBiquadFilter(),
      lf = t.createOscillator(),
      lg = t.createGain();
    ((o.type = "sine"),
      (o2.type = "triangle"),
      (o.frequency.value = fq),
      (o2.frequency.value = 2 * fq),
      (lp.type = "lowpass"),
      (lp.frequency.value = 3200),
      (lf.frequency.value = 5.2),
      lg.gain.setValueAtTime(0, i),
      lg.gain.linearRampToValueAtTime(0.006 * fq, i + Math.min(0.3, d)),
      lf.connect(lg),
      lg.connect(o.frequency),
      g.gain.setValueAtTime(1e-4, i),
      g.gain.linearRampToValueAtTime(v, i + 0.04),
      g.gain.setValueAtTime(v, i + Math.max(0.05, d - 0.12)),
      g.gain.exponentialRampToValueAtTime(1e-4, i + d + 0.18),
      (g2.gain.value = 0.22),
      o.connect(g),
      o2.connect(g2),
      g2.connect(g),
      g.connect(lp),
      lp.connect(e.bus),
      lp.connect(e.dry),
      [o, o2, lf].forEach((x) => {
        (x.start(i), x.stop(i + d + 0.25));
      }));
  },
  br(i, fq, d, v) {
    const t = AC,
      e = this.L,
      f = t.createBiquadFilter(),
      g = t.createGain();
    ((f.type = "lowpass"),
      (f.Q.value = 0.8),
      f.frequency.setValueAtTime(500, i),
      f.frequency.exponentialRampToValueAtTime(2600, i + 0.09),
      f.frequency.exponentialRampToValueAtTime(900, i + d),
      g.gain.setValueAtTime(1e-4, i),
      g.gain.linearRampToValueAtTime(v, i + 0.03),
      g.gain.setValueAtTime(v, i + d * 0.7),
      g.gain.exponentialRampToValueAtTime(1e-4, i + d + 0.12),
      f.connect(g),
      g.connect(e.dry),
      g.connect(e.bus),
      [-8, 8].forEach((c) => {
        const o = t.createOscillator();
        ((o.type = "sawtooth"),
          (o.frequency.value = fq),
          (o.detune.value = c),
          o.connect(f),
          o.start(i),
          o.stop(i + d + 0.2));
      }));
  },
  tickW() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (e && t)
      for (this.t < t.currentTime && (this.t = t.currentTime + 0.12); this.t < t.currentTime + 0.5;) {
        const s = this.s,
          b = s >> 3,
          k = 7 & s,
          i = this.t + 0.012 * (Math.random() - 0.5),
          sec = b >> 3,
          bi = 7 & b;
        0 === k && (this.W = (window.GFW | 0) % 10);
        const C = this.cf(this.W),
          E = 60 / C.bpm / 2,
          [off, q] = C.pr[bi],
          root = C.r + off,
          B = 36 + (root % 12),
          br = 3 === sec && bi < 4,
          bu = 3 === sec && bi >= 4;
        0 === k &&
          (this.bar(
            i,
            C,
            root,
            q,
            8 * E,
            [0.55, 0.85, 1.15, 0.7][sec] * (1 + 0.1 * [0, 0.5, 1, 0.3][bi % 4]),
          ),
          ((2 === sec && 0 === bi) || (1 === sec && 0 === bi && this.rep)) &&
            this.nz(i, 1.8, "highpass", 5200, 0.05, e.bus),
          bu && 7 === bi && this.rise(i, 8 * E));
        (1 === sec || 3 === sec) && 0 === k && 0 === bi && this.nz(i, 1.6, "highpass", 5200, 0.03, e.bus);
        let kk = 0;
        1 === sec
          ? (kk = 0 === k || (4 === k && C.kk > 1))
          : 2 === sec
            ? (kk = 0 === k || 4 === k || (6 === k && 1 & bi))
            : bu
              ? (kk = (!(1 & k) && bi > 4) || 0 === k)
              : 0 === sec && 7 === bi && k >= 4 && !(1 & k) && (kk = !0);
        kk && this.kick(i, 0.15 + 0.05 * C.kk + (2 === sec ? 0.04 : 0));
        if (
          (2 === sec && (2 === k || 6 === k)) ||
          (bu && 6 === bi && !(1 & k) && k >= 2) ||
          (bu && 7 === bi)
        ) {
          const v = bu && 7 === bi ? 0.03 + 0.012 * k : 0.05;
          (this.nz(i, 0.16, "bandpass", 1900, v, e.dry), this.nz(i, 0.09, "highpass", 3000, v * 0.6, e.dry));
        }
        ((1 === sec && 1 & k) || 2 === sec || (bu && 1 & k)) &&
          this.nz(i, 0.05, "highpass", 7500, 2 === sec ? (1 & k ? 0.022 : 0.013) : 0.012, e.dry);
        2 === sec && (0 === k || 3 === k || 6 === k) && this.pl(i, B < 40 ? B : B - 12, 0.11, 0.3);
        if (
          ((0 === sec && bi >= 4) || 1 === sec || 2 === sec || bu) &&
          ((bu && bi >= 6) || "1" === C.ar[k])
        ) {
          const ch = [B + 24, B + 24 + ("m" === q ? 3 : 4), B + 31, B + 36];
          this.gl(
            this.mf(ch[[0, 1, 2, 3, 2, 1][this.a++ % 6]]),
            i,
            0.5,
            (2 === sec ? 0.03 : 0.024) * (0.8 + 0.35 * Math.random()),
            e.bus,
          );
        }
        const T = 55 + ((C.r - 7 + 12) % 12),
          N = (d, o) => T + C.sc[d % 7] + 12 * Math.floor(d / 7) + (o || 0);
        if (br)
          0 === k &&
            (this.gl(this.mf(N([7, 8, 10, 8][bi])), i, 8 * E, 0.06, e.bus),
            this.gl(this.mf(N([7, 8, 10, 8][bi], 12)), i, 8 * E, 0.025, e.bus));
        else if (!bu) {
          let p = C.ph[bi];
          const g = 0 === sec ? 0.05 : 0.078;
          2 === sec && ("-" === p || 3 === bi % 4) && (p = "E");
          if ("-" !== p && (0 !== sec || bi >= 4)) {
            const pc = [root % 12, (root + ("m" === q ? 3 : 4)) % 12, (root + 7) % 12],
              sn = (m) => {
                for (const x of [0, -1, 1, -2, 2]) if (pc.includes((m + x) % 12)) return m + x;
                return m;
              };
            this.MO[p].forEach(([st, d, du]) => {
              if (st !== k) return;
              let nn = N(d);
              (0 === st || 4 === st || st + du >= 8) && (nn = sn(nn));
              (this.gl(
                this.mf(nn),
                i + (st % 4 ? 0.006 : -0.003),
                du * E * (0.9 + 0.15 * Math.random()),
                g * (st % 4 == 0 ? 1.18 : st % 2 ? 0.82 : 0.95) * (0.88 + 0.08 * (bi % 4)),
                e.bus,
              ),
                2 === sec && this.gl(this.mf(nn + 12), i + 0.012, du * E, 0.03, e.bus));
              if (sec > 0) {
                let h = nn - 2;
                for (; h > nn - 7 && !pc.includes(h % 12);) h--;
                pc.includes(h % 12) && this.gl(this.mf(h), i + 0.02, du * E, 0.026, e.bus);
              }
            });
          }
        }
        this.t += E;
        let n = s + 1;
        (n >= 256 && ((n = 64), (this.rep = 1)), (this.s = n));
      }
  },

  trm(i, fq, d, v) {
    const t = AC,
      e = this.L,
      o = t.createOscillator(),
      f = t.createBiquadFilter(),
      g = t.createGain(),
      lf = t.createOscillator(),
      lg = t.createGain();
    ((o.type = "sawtooth"),
      (o.frequency.value = fq),
      (f.type = "lowpass"),
      (f.frequency.value = 2200),
      g.gain.setValueAtTime(1e-4, i),
      g.gain.linearRampToValueAtTime(v / 2, i + 0.3 * d),
      g.gain.setValueAtTime(v / 2, i + 0.8 * d),
      g.gain.linearRampToValueAtTime(1e-4, i + d + 0.3),
      (lf.frequency.value = 13),
      (lg.gain.value = v / 2),
      lf.connect(lg),
      lg.connect(g.gain),
      o.connect(f),
      f.connect(g),
      g.connect(e.bus),
      g.connect(e.dry),
      o.start(i),
      lf.start(i),
      o.stop(i + d + 0.4),
      lf.stop(i + d + 0.4));
  },
  shr(i, len, v) {
    const t = AC,
      e = this.L,
      o = t.createOscillator(),
      g = t.createGain(),
      lf = t.createOscillator(),
      lg = t.createGain();
    ((o.type = "sine"),
      o.frequency.setValueAtTime(500, i),
      o.frequency.exponentialRampToValueAtTime(2600, i + len),
      (lf.frequency.value = 7),
      (lg.gain.value = 30),
      lf.connect(lg),
      lg.connect(o.frequency),
      g.gain.setValueAtTime(1e-4, i),
      g.gain.linearRampToValueAtTime(v, i + 0.8 * len),
      g.gain.linearRampToValueAtTime(1e-4, i + len + 0.1),
      o.connect(g),
      g.connect(e.bus),
      o.start(i),
      lf.start(i),
      o.stop(i + len + 0.2),
      lf.stop(i + len + 0.2));
  },
  tickB() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (!e || !t) return;
    this.pb || ((this.pb = 1), (this.bk = 0));
    for (this.t < t.currentTime && (this.t = t.currentTime + 0.12); this.t < t.currentTime + 0.5;) {
      const k = 7 & this.bk,
        n = (this.bk >> 3) & 7,
        i = this.t + 0.012 * (Math.random() - 0.5);
      0 === k && 0 === n && (this.W = (window.GFW | 0) % 10);
      const W = this.W,
        E = 60 / (96 + 5.5 * W) / 2,
        T = 46 + (this.cf(W).r % 12),
        PH = [0, 1, 3, 5, 7, 8, 10],
        N = (d) => T + PH[((d % 7) + 7) % 7] + 12 * Math.floor(d / 7),
        c = [0, 1, 0, 1, 5, 1, 0, 1][n],
        tr = [N(c), N(c + 2), N(c + 4)],
        bs = N(c) - 12,
        m = 0.7 + 0.05 * W,
        ra = n / 7;
      0 === k &&
        (this.pad(i, W >= 6 ? [T - 12, T - 6, T] : [T - 12, T - 5, T], 8 * E, 0.06 * m, 1400),
        W >= 4 && this.pad(i, [N(c) + 12, N(c) + 13], 8 * E, 0.03 * m, 2800),
        W >= 3 && this.trm(i, this.mf(N(c) + 12), 8 * E, 0.035 * m),
        W >= 6 && this.trm(i, this.mf(N(c) + 13), 8 * E, 0.03 * m));
      0 === k && n % 4 == 0 && this.nz(i, 2, "highpass", 3800, 0.035 * m, e.bus);
      (0 === k || 3 === k || (W >= 3 && (4 === k || 6 === k))) && this.kick(i, (0 === k ? 0.22 : 0.13) * m);
      W >= 2 && this.pl(i, bs + (3 === k % 4 ? 1 : 0), 0.1 * m, 0.9 * E);
      W >= 2 &&
        (2 === k || 6 === k) &&
        (this.nz(i, 0.14, "bandpass", 1900, 0.07 * m, e.dry),
        this.nz(i, 0.08, "highpass", 3000, 0.04 * m, e.dry));
      W >= 3 && this.nz(i, 0.04, "highpass", 8000, (k % 2 ? 0.012 : 0.02) * m, e.dry);
      W >= 6 &&
        (0 === k || 3 === k || 6 === k) &&
        (this.br(i, this.mf(N(c) + 12), [2.2, 1.2, 1.4][(k / 3) | 0] * E, 0.045),
        this.br(i, this.mf(N(c) + 13), [2.2, 1.2, 1.4][(k / 3) | 0] * E, 0.03));
      W >= 4 && n >= 4 && this.fl(i, this.mf(T + 24 + [0, 1, 0, -1, 0, 1, 3, 1][k]), 0.9 * E, 0.035 * m);
      5 === k && (1 === n || 5 === n) && this.gl(this.mf(T + 30), i, 0.9, 0.022, e.bus);
      W >= 5 && 7 === n && k >= 4 && this.kick(i, 0.08 + 0.03 * k);
      W >= 4 && 7 === n && 0 === k && this.rise(i, 8 * E);
      W >= 7 && (3 === n || 7 === n || (W >= 9 && 5 === n)) && 0 === k && this.shr(i, 8 * E, 0.03);
      W >= 8 && 0 === k && this.kick(i, 0.3);
      (this.bk++, (this.t += E));
    }
  },
  tick() {
    this.I ? this.tickB() : ((this.pb = 0), this.tickW());
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
        ? (Date.now() - (this.off || 0) > 45e3 && ((this.s = 0), (this.t = 0), (this.rep = 0)),
          this.build(),
          this.loop())
        : (clearTimeout(this.T), (this.off = Date.now())),
      void 0 !== AC && AC && void 0 !== music && music && apply());
  },
};
function gfMus(e) {
  "object" == typeof gfMu && gfMu.set(e);
}
var fiMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  rep: 0,
  off: 0,
  E: 0.43,
  SC: [50, 57, 58, 60, 62, 64, 65, 69, 72, 74],
  PH: {
    A: [4, -1, 7, 6, -1, 4, 3, -1],
    B: [4, -1, 6, 5, -1, 3, 4, -1],
    C: [3, -1, 5, 4, -1, 2, 1, -1],
    D: [2, -1, 4, -1, 3, 1, -1, 2],
  },
  SEQ: "ABAC ABDC ABAC ADBC".replace(/ /g, "").split(""),
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    t.gain.value = 0;
    const a = e.createBiquadFilter();
    ((a.type = "lowpass"), (a.frequency.value = 3200), (a.Q.value = 0.3), a.connect(t), t.connect(mg));
    const s = (t, s, n) => {
        const o = e.createDelay(3),
          i = e.createGain(),
          r = e.createBiquadFilter(),
          l = e.createGain();
        return (
          (o.delayTime.value = t),
          (i.gain.value = s),
          (r.type = "lowpass"),
          (r.frequency.value = 1800),
          (l.gain.value = n),
          o.connect(r),
          r.connect(i),
          i.connect(o),
          r.connect(l),
          l.connect(a),
          o
        );
      },
      n = s(3 * this.E, 0.42, 0.34),
      o = s(5 * this.E, 0.36, 0.28),
      i = e.createGain();
    (i.connect(a), i.connect(n), i.connect(o));
    const r = e.createGain();
    (r.connect(a), (this.L = { out: t, bus: i, dry: r }));
  },
  hp(e, t, a, s) {
    const n = AC;
    [
      [1, 1, 2.8],
      [2, 0.34, 1.4],
      [2.99, 0.1, 0.7],
    ].forEach(([o, i, r]) => {
      const l = n.createOscillator(),
        c = n.createGain();
      ((l.type = "sine"),
        l.frequency.setValueAtTime(e * o * 1.012, t),
        l.frequency.exponentialRampToValueAtTime(e * o, t + 0.05),
        c.gain.setValueAtTime(1e-4, t),
        c.gain.exponentialRampToValueAtTime(a * i, t + 0.005),
        c.gain.exponentialRampToValueAtTime(1e-4, t + r),
        l.connect(c),
        c.connect(s),
        l.start(t),
        l.stop(t + r + 0.05));
    });
  },
  drone(e, t, a, s, n) {
    const o = AC;
    [-3, 3].forEach((i) => {
      const r = o.createOscillator(),
        l = o.createGain();
      ((r.type = "sine"),
        (r.frequency.value = e),
        (r.detune.value = i),
        l.gain.setValueAtTime(1e-4, t),
        l.gain.linearRampToValueAtTime(s, t + 0.4 * a),
        l.gain.linearRampToValueAtTime(1e-4, t + 1.1 * a),
        r.connect(l),
        l.connect(n),
        r.start(t),
        r.stop(t + 1.15 * a));
    });
  },
  tick() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (e && t)
      for (this.t < t.currentTime && (this.t = t.currentTime + 0.12); this.t < t.currentTime + 0.8;) {
        const t = this.s,
          a = (t >> 3) % 16,
          s = t % 8,
          n = this.E,
          o = this.t + (s ? 0.012 * Math.random() : 0),
          i = this.PH[this.SEQ[a]];
        (t % 32 == 0 &&
          (this.drone(this.mf(38), this.t, 32 * n, 0.05, e.dry),
          this.drone(this.mf(45), this.t, 32 * n, 0.022, e.dry)),
          0 === s && this.hp(this.mf(this.SC[0]), o, 0.13, e.dry));
        const r = i[s];
        (r >= 0 && this.hp(this.mf(this.SC[r] + (this.rep, 0)), o, 0.07 + 0.02 * Math.random(), e.bus),
          s % 2 == 1 &&
            Math.random() < 0.16 &&
            this.hp(this.mf(this.SC[[7, 8, 9][(3 * Math.random()) | 0]]), o, 0.035, e.bus),
          (this.t += n),
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
function fiMus(e) {
  "object" == typeof fiMu && fiMu.set(e);
}
