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
const PLN = [
  "Comète",
  "Lune",
  "Mercure",
  "Mars",
  "Vénus",
  "Terre",
  "Neptune",
  "Saturne",
  "Jupiter",
  "Soleil",
];
const PLR = [13, 18, 23, 29, 35, 42, 50, 58, 67, 78];
const PLCL = [
  ["#e8f8ff", "#7fc8ff"],
  ["#f0f0f6", "#9a9ab0"],
  ["#d9c4b4", "#85705f"],
  ["#ffa77e", "#b8402a"],
  ["#fff0b8", "#d9a64c"],
  ["#8fd0ff", "#2a63c8"],
  ["#7f98ff", "#2a2f9a"],
  ["#f6dca8", "#b88a4a"],
  ["#f4c995", "#b0603a"],
  ["#fff4a8", "#ff8a2a"],
];
const PLFN = [
  "Cerise",
  "Fraise",
  "Raisin",
  "Clémentine",
  "Kaki",
  "Pomme",
  "Pêche",
  "Ananas",
  "Melon",
  "Pastèque",
];
const PLFC = [
  ["#ff9aaa", "#c8102e"],
  ["#ffa08a", "#e0302a"],
  ["#d6b3ff", "#6a2a9a"],
  ["#fff0a0", "#ffb41f"],
  ["#ff8a3a", "#b8420a"],
  ["#ffb0a8", "#d8202a"],
  ["#ffe6d2", "#ff8a6a"],
  ["#fff2a0", "#e0a82a"],
  ["#e8ffc0", "#86c64a"],
  ["#8ae07a", "#1f7a3a"],
];
const PLWN = [
  "Bulle",
  "Perle",
  "Oursin",
  "Méduse",
  "Coquillage",
  "Poisson-globe",
  "Tortue",
  "Pieuvre",
  "Poisson-lune",
  "Baleine",
];
const PLWC = [
  ["#ffffff", "#8ad0ff"],
  ["#ffffff", "#d0c8e4"],
  ["#d9b8ff", "#5a2a8a"],
  ["#ffe0f6", "#c87ae0"],
  ["#ffe8dc", "#ff9a8a"],
  ["#fff4b0", "#e8b82a"],
  ["#c8f0a0", "#3a8a4a"],
  ["#ffc0b0", "#e0503a"],
  ["#e4ecf6", "#7a8aa8"],
  ["#9ac4ff", "#2a4a9a"],
];
const plCn = () => {
  let f = 0,
    w = 0;
  for (let a = 0; a < 100; a++)
    (st.get("c:planetes:" + a, !1) && f++, st.get("c:planetes_e:" + a, !1) && w++);
  return [f, w];
};
const plUnl = (e) => {
  try {
    if (UNL() || !e) return !0;
    const [f, w] = plCn();
    return "eau" === e ? f >= 15 : f + w >= 35;
  } catch (e) {
    return !1;
  }
};
const plMd = () => {
  try {
    const e = st.get("pl:mode", "");
    return ("orbite" !== e && "eau" !== e) || !plUnl(e) ? "" : e;
  } catch (e) {
    return "";
  }
};
const PLTB = (() => {
  const c = [];
  for (let T = 3; T <= 8; T++)
    for (const N of [1, 2, 3]) {
      if ((N > 2 && T > 6) || (N > 1 && T > 8)) continue;
      for (let p = 0; p <= 12; p += 2) c.push([T, N, p, 10 * T + 7 * (N - 1) + 0.9 * p]);
    }
  c.sort((a, b) => a[3] - b[3]);
  const r = [];
  for (let i = 0; i < 80; i++) r.push(c[Math.round((i * (c.length - 1)) / 79)]);
  return r;
})();
const PLOS = [
  ["e", 1],
  ["as", 2],
  ["g2", 4],
  ["rg", 6],
  ["gr", 9],
  ["ag", 11],
  ["lu", 13],
  ["f", 15],
];
const PLOM = [
  ["col", 5],
  ["jg", 7],
  ["wd", 8],
  ["my", 10],
  ["bm", 12],
  ["ss", 14],
  ["nt", 16],
];
function plOr(e, o) {
  if (e < 1) return o;
  const sp = (k, x) => {
      ((o.sp = o.sp || {}), (o.sp[k] = x));
    },
    ch = (t) => {
      o.ch = o.ch ? o.ch + " " + t : t;
    };
  if (o.sc)
    return ((o.as = 2), sp("g", 0.12), (o.ch = "Astéroïdes fixes. Planète dorée ✦ : fusion bonus."), o);
  const v = (e - 1) % 6;
  if (2 === v) return o;
  const ap = (k) => {
      "e" === k
        ? ((o.ov = "e"), ch("Bocal ovale : les planètes glissent sur les côtés."))
        : "f" === k
          ? ((o.ov = "f"), ch("Bocal en fleur : cinq lobes."))
          : "as" === k
            ? ((o.as = Math.min(3, 1 + (e >> 4))), ch("Astéroïdes fixes : ils dévient les planètes."))
            : "g2" === k
              ? ((o.g2 = 1), ch("Deux centres de gravité : deux amas."))
              : "gr" === k
                ? ((o.gr = 1), ch("Gravité qui tourne : le tas suit le centre."))
                : "ag" === k
                  ? ((o.ag = 1), ch("Antigravité : une bulle repousse les planètes."))
                  : "rg" === k
                    ? ((o.rg = 1), ch("Anneau tournant : il balaie le tas."))
                    : "lu" === k
                      ? ((o.lu = Math.min(2, 1 + (e >> 5))),
                        ch("Lunes en orbite : elles poussent ce qu’elles touchent."))
                      : "col" === k
                        ? ((o.col = [
                            [o.T - 2, 1],
                            [o.T - 1, 1],
                            [o.T, 1],
                          ]),
                          (o.pre = Math.min(o.pre, 2)),
                          ch("Collection : garde ces planètes ensemble."))
                        : "jg" === k
                          ? (sp("j", 0.07),
                            sp("g", 0.1),
                            ch("Comète arc-en-ciel : fusionne avec tout. Planète dorée ✦ : bonus."))
                          : "wd" === k
                            ? ((o.wd = 1), ch("Vent solaire : il pousse les planètes."))
                            : "my" === k
                              ? (sp("m", 0.16), ch("Planète mystère ? : elle se dévoile en tombant."))
                              : "bm" === k
                                ? (sp("b", 0.07), ch("Météorite : elle repousse tout à l’impact."))
                                : "ss" === k
                                  ? ((o.ss = 1), ch("Étoile filante : elle traverse le bocal."))
                                  : "nt" === k &&
                                    ((o.nt = 1), ch("Éclipse : une ombre cache une partie du bocal."));
    },
    S = PLOS.filter((x) => x[1] <= e).map((x) => x[0]),
    M = PLOM.filter((x) => x[1] <= e).map((x) => x[0]),
    L = S.concat(M),
    c = 5 * Math.floor((e - 1) / 6) + [0, 1, 0, 2, 3, 4][v],
    k = L[(2 * c + (c >> 2)) % L.length];
  if ((ap(k), e >= 24)) {
    const m = S.includes(k) ? M[(3 * c + 1) % M.length] : S[(3 * c + 1) % S.length];
    m && ap(m);
  }
  return o;
}
function plFM(o, x, l) {
  return x ? plOr(l, { T: o.T, N: o.N, sc: o.sc, km: o.km, pre: o.pre }) : o;
}
const PLST = [
  ["v", 1],
  ["c", 9],
  ["pl", 13],
  ["et", 24],
];
const PLMD = [
  ["wd", 3],
  ["hv", 6],
  ["col", 7],
  ["jg", 11],
  ["my", 15],
  ["mg", 17],
  ["bm", 19],
  ["nt", 21],
];
function plCh(e, o) {
  if (e < 1) return o;
  const v = (e - 1) % 6,
    rk = (n) => Math.min(n, 1 + (e >> 3)),
    R1 = "Rochers : les fruits rebondissent dessus.",
    sp = (k, x) => {
      ((o.sp = o.sp || {}), (o.sp[k] = x));
    },
    ch = (t) => {
      o.ch = o.ch ? o.ch + " " + t : t;
    };
  if (o.sc)
    return (
      (o.rk = Math.min(3, 1 + (e >> 4))),
      sp("g", 0.12),
      (o.ch = R1 + " Fruit doré ✦ : fusion bonus."),
      o
    );
  const ap = (k) => {
    "v" === k
      ? ((o.sh = "v"), ch("Bocal en V : il se resserre vers le fond."))
      : "c" === k
        ? ((o.sh = "c"), ch("Bocal en cuvette : le fond est arrondi."))
        : "pl" === k
          ? ((o.pl = 1), (o.pre = 0), ch("Planche à bascule : elle penche selon le poids."))
          : "et" === k
            ? ((o.et = 1), (o.pre = 0), ch("Bocal à étages : guide les fruits par les trappes."))
            : "wd" === k
              ? ((o.wd = 1), ch("Courant d’air : le vent change de sens."))
              : "hv" === k
                ? (sp("h", 0.2), sp("l", 0.15), ch("Fruits lourds (sombres) et légers (pâles)."))
                : "col" === k
                  ? ((o.col = [
                      [o.T - 2, 1],
                      [o.T - 1, 1],
                      [o.T, 1],
                    ]),
                    (o.pre = Math.min(o.pre, 2)),
                    ch("Collection : garde ces fruits ensemble dans le bocal."))
                  : "jg" === k
                    ? (sp("j", 0.07),
                      sp("g", 0.1),
                      ch("Joker arc-en-ciel : fusionne avec tout. Doré ✦ : bonus."))
                    : "my" === k
                      ? (sp("m", 0.16), ch("Fruit mystère ? : il se dévoile en tombant."))
                      : "mg" === k
                        ? ((o.mg = 1), ch("Aimant : les fruits identiques s’attirent."))
                        : "bm" === k
                          ? (sp("b", 0.07), ch("Fruit bombe : il repousse tout à l’impact."))
                          : "nt" === k && ((o.nt = 1), ch("Bocal de nuit : seule la lueur te guide."));
  };
  if (1 === v) return ((o.rk = rk(4)), (o.ch = R1), o);
  if (4 === v) return ((o.km = Math.min(o.km, 1)), (o.ch = "Petits fruits seulement."), o);
  if (2 === v) return o;
  const S = PLST.filter((x) => x[1] <= e).map((x) => x[0]),
    M = PLMD.filter((x) => x[1] <= e).map((x) => x[0]),
    L = S.concat(M),
    c = 3 * Math.floor((e - 1) / 6) + (0 === v ? 0 : 3 === v ? 1 : 2),
    k = L[(2 * c + (c >> 2)) % L.length];
  if ((ap(k), e >= 28)) {
    const m = S.includes(k) ? M[(3 * c + 1) % M.length] : S[(3 * c + 1) % S.length];
    m && ap(m);
  }
  return o;
}
function plLv(e) {
  const a = e >= 20 && e % 5 == 4 && 39 !== e ? 800 + 120 * (e - 20) : 0,
    km = Math.min(4, 2 + Math.floor(e / 10));
  if (a)
    return plCh(e, {
      T: 0,
      N: 0,
      sc: Math.round((1.9 * a) / 10) * 10,
      km: km,
      pre: e % 4 == 3 ? 6 + Math.min(6, e >> 2) : 0,
    });
  let r = e;
  for (let i = 20; i < e; i++) i % 5 == 4 && 39 !== i && r--;
  const q = PLTB[Math.min(r, PLTB.length - 1)];
  return plCh(e, {
    T: q[0],
    N: q[0] <= 5 ? Math.min(6, 2 * q[1] + (e >= 5 ? 1 : 0)) : Math.min(4, q[1] + 1 + (e >= 5 ? 1 : 0)),
    sc: 0,
    km: km,
    pre: q[2],
  });
}
function plModeCard() {
  const e = plMd();
  return `<section class="rc plmode" data-g="●"><div class="rc-t"><small>Mode de jeu</small><b>${"orbite" === e ? "Orbite" : "eau" === e ? "Sous l’eau" : "Fruits"}</b><span>${"orbite" === e ? "Un bocal rond : les planètes sont attirées vers le centre." : "eau" === e ? "Les objets marins remontent vers la surface." : "Les fruits tombent au fond du bocal."}</span></div><div class="plseg"><button class="${e ? "" : "on"}" data-a="plMode" data-v="">Fruits</button><button class="${"orbite" === e ? "on" : ""}" data-a="plMode" data-v="orbite">Planètes${plLk("orbite", 35)}</button><button class="${"eau" === e ? "on" : ""}" data-a="plMode" data-v="eau">Sous l’eau${plLk("eau", 15)}</button></div>${plLockTx()}</section>`;
}
function plLk(m, t) {
  if (plUnl(m)) return "";
  const [f, w] = plCn(),
    n = "eau" === m ? f : f + w;
  return `<small style="display:block;font-size:11px;opacity:.85">🔒 ${Math.min(n, t)}/${t}</small>`;
}
function plLockTx() {
  const l = [];
  plUnl("eau") || l.push("🔒 Sous l’eau : termine 15 niveaux du mode Fruits.");
  plUnl("orbite") || l.push("🔒 Planètes : termine 35 niveaux en mode Fruits ou Sous l’eau.");
  return l.length
    ? `<p class="note" style="margin:8px 0 0;font-size:12.5px;opacity:.85">${l.join("<br>")}</p>`
    : "";
}
function pPlan(e) {
  const t = plMd(),
    a = "orbite" === t,
    s = "eau" === t,
    n = a ? PLN : s ? PLWN : PLFN,
    o = a ? PLCL : s ? PLWC : PLFN.map((e, t) => PLFC[t]),
    i = a ? "planètes" : s ? "objets" : "fruits",
    r = a ? 0.84 : 1,
    l = (e) => PLR[e] * r,
    c = 180,
    d = 312,
    f = 152,
    u = Math.PI,
    h = "planetes" === INFG,
    p = h ? { T: 0, N: 0, sc: 0, km: 2, pre: 0 } : plFM(plLv(lv), a, lv),
    m = 360,
    b = 560,
    g = 24,
    E = 336,
    y = 0.14;
  let YM = null,
    DD = 0,
    RL = null,
    plDR = 0,
    plTL = 0,
    plLS = -1,
    plLM = 0,
    plRK = [],
    plAt = [[180, 312, 1]],
    plAg = { x: 180, y: 312 },
    plSS = 8,
    wx = "",
    Rx = "",
    plPL = [],
    plWd = 0,
    plCK = "";
  const YF = () =>
    s
      ? Math.max(448, Math.min(520, null == YM ? 490 : YM))
      : Math.max(30, Math.min(112, null == YM ? 70 : YM));
  let v = [],
    A = [],
    S = [],
    x = 0,
    M = 0,
    L = Array(10).fill(0),
    T = 180,
    k = -u / 2,
    w = 0,
    R = 0,
    C = 0,
    O = !1,
    I = !1,
    N = !1,
    P = 0,
    U = 1,
    q = Math.min(2, devicePixelRatio || 1),
    D = {},
    H = 0,
    PD = !1;
  snap = h ? null : () => ({});
  const G = rng(6007 * (lv + 5) + 11),
    F = () => {
      const e = [],
        t = h ? Math.min(4, 2 + Math.floor(M / 2500)) : p.km;
      for (let a = 0; a <= t; a++) e.push(Math.pow(0.62, a));
      const a = e.reduce((e, t) => e + t);
      let s = Math.random() * a;
      for (let t = 0; t < e.length; t++) if (((s -= e[t]), s <= 0)) return t;
      return 0;
    },
    B = (e, t, a, s, n) => {
      const o = {
        id: ++x,
        k: e,
        r: l(e),
        x: t,
        y: a,
        vx: s || 0,
        vy: n || 0,
        a: 6 * Math.random(),
        w: 0,
        born: performance.now(),
        age: 0,
        ov: 0,
        dead: !1,
      };
      return (v.push(o), o);
    };
  frame(
    '<div class="bkh"' +
      (h || p.sc ? "" : ' style="justify-content:space-between"') +
      '><div class="pntg" id="plg"></div><div class="ttmid"' +
      (h || p.sc ? "" : ' style="display:none"') +
      '><div class="ttbar"><i id="plbr"></i></div><div class="tts"><span id="plsc">0</span> pts</div></div>\n  <button class="bkpz" data-a="plPause" aria-label="Pause"><svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg></button></div>\n  <div class="ttw pntw" id="pntw"><canvas id="plcv" class="ttcv"></canvas><div class="ttpop" id="plpop"></div><div class="ttov" id="plov" hidden></div></div>',
    1,
  );
  const z = $("#plcv"),
    V = z.getContext("2d"),
    j = $("#pntw"),
    Z = () => {
      scrollTo(0, 0);
      const e = Math.min(j.parentElement.clientWidth || 340, 560) - 8,
        t = Math.max(380, innerHeight - Math.round(j.getBoundingClientRect().top) - 20);
      U = Math.min(e / m, t / b);
      if (a || s) DD = 0;
      else {
        DD = Math.max(0, Math.min(150, Math.floor(t / (e / m) - b)));
        U = Math.min(e / m, t / (b + DD));
      }
      const hh = b + DD;
      ((z.width = Math.round(m * U * q)),
        (z.height = Math.round(hh * U * q)),
        (z.style.width = m * U + "px"),
        (z.style.height = hh * U + "px"),
        (D = {}));
    },
    PY = (q) => (null != q.ay ? q.ay : s ? 32 + q.o : 528 + DD - q.o),
    ORW = (ph) => {
      const z = p.ov;
      if (!z) return f;
      if ("e" === z) {
        const A = 1.12 * f,
          B = 0.86 * f;
        return (A * B) / Math.sqrt(B * B * Math.cos(ph) ** 2 + A * A * Math.sin(ph) ** 2);
      }
      return f * (1 + 0.09 * Math.cos(5 * ph));
    },
    ORP = () => {
      for (let i = 0; i <= 72; i++) {
        const ph = (i / 72) * 2 * Math.PI,
          r = ORW(ph) + 3;
        V[i ? "lineTo" : "moveTo"](c + r * Math.cos(ph), d + r * Math.sin(ph));
      }
      V.closePath();
    },
    OG = (t) => {
      let ax = 0,
        ay = 0;
      for (const q of plAt) {
        const dx = q[0] - t.x,
          dy = q[1] - t.y,
          dd = Math.hypot(dx, dy) || 1;
        ((ax += (dx / dd) * 1e3 * q[2]), (ay += (dy / dd) * 1e3 * q[2]));
      }
      if (p.ag) {
        const dx = t.x - plAg.x,
          dy = t.y - plAg.y,
          dd = Math.hypot(dx, dy) || 1;
        if (dd < 90) {
          const f2 = (1 - dd / 90) * 2600;
          ((ax += (dx / dd) * f2), (ay += (dy / dd) * f2));
        }
      }
      return [ax + 1.6 * plWd, ay];
    },
    ORK = () => {
      const r = [],
        P = Math.PI;
      if (p.as)
        for (let i = 0; i < p.as; i++) {
          const th = 2.3 * i + 0.6,
            rr = 55 + 25 * (i % 2);
          r.push({ x: c + Math.cos(th) * rr, ay: d + Math.sin(th) * rr, o: 0, r: 15 });
        }
      if (p.rg)
        for (let i = 0; i < 4; i++) {
          const th = (i * P) / 2;
          r.push({
            x: c + 80 * Math.cos(th),
            ay: d + 80 * Math.sin(th),
            o: 0,
            r: 13,
            orb: 1,
            th: th,
            rr: 80,
            om: 0.7,
            vx: 0,
            vy: 0,
          });
        }
      if (p.lu)
        for (let i = 0; i < p.lu; i++) {
          const th = i * P;
          r.push({
            x: c + 112 * Math.cos(th),
            ay: d + 112 * Math.sin(th),
            o: 0,
            r: 16,
            orb: 1,
            th: th,
            rr: 112,
            om: -0.8,
            moon: 1,
            vx: 0,
            vy: 0,
          });
        }
      return r;
    },
    OD = (ts) => {
      if (!a) return;
      if (p.g2 || p.gr)
        for (const q of plAt) {
          const gr = V.createRadialGradient(q[0], q[1], 1, q[0], q[1], 16);
          (gr.addColorStop(0, "rgba(255,240,200,.95)"),
            gr.addColorStop(1, "rgba(255,200,120,0)"),
            (V.fillStyle = gr),
            V.beginPath(),
            V.arc(q[0], q[1], 16, 0, 7),
            V.fill());
        }
      if (p.ag) {
        const gr = V.createRadialGradient(plAg.x, plAg.y, 6, plAg.x, plAg.y, 90);
        (gr.addColorStop(0, "rgba(190,140,255,.35)"),
          gr.addColorStop(1, "rgba(190,140,255,0)"),
          (V.fillStyle = gr),
          V.beginPath(),
          V.arc(plAg.x, plAg.y, 90, 0, 7),
          V.fill(),
          (V.strokeStyle = "rgba(210,180,255,.5)"),
          V.setLineDash([4, 6]),
          (V.lineWidth = 1.5),
          V.beginPath(),
          V.arc(plAg.x, plAg.y, 76, 0, 7),
          V.stroke(),
          V.setLineDash([]));
      }
    },
    JW = () => {
      V.moveTo(21, 472);
      for (let n = 442; n > 49; n -= 8) V.lineTo(21 + INS(n), n);
      const i = INS(49);
      (V.lineTo(21 + i, 49),
        V.quadraticCurveTo(21 + i, 29, 43 + i, 29),
        V.lineTo(317 - i, 29),
        V.quadraticCurveTo(339 - i, 29, 339 - i, 49));
      for (let n = 49; n < 442; n += 8) V.lineTo(339 - INS(n), n);
      V.lineTo(339, 472);
    },
    PLF = () => {
      if (a) return [];
      const k = s ? -1 : 1;
      return p.pl
        ? [{ x: 180, o: 170, h: 100, a: 0, w: 0, I: 4e7, mv: 1 }]
        : p.et
          ? [
              { x: 105, o: 310, h: 81, a: 0.14 * k, w: 0 },
              { x: 255, o: 170, h: 81, a: -0.14 * k, w: 0 },
            ]
          : [];
    },
    INS = (y) => {
      const z = p.sh;
      if (!z) return 0;
      const u = s ? Math.min(1, (442 - y) / 410) : y <= 118 ? 0 : Math.min(1, (y - 118) / (528 + DD - 118));
      return u <= 0 ? 0 : "v" === z ? 66 * u : 80 * u * u;
    },
    JP = () => {
      V.moveTo(21, 88);
      for (let n = 118; n < 511 + DD; n += 8) V.lineTo(21 + INS(n), n);
      const i = INS(511 + DD);
      (V.lineTo(21 + i, 511 + DD),
        V.quadraticCurveTo(21 + i, 531 + DD, 43 + i, 531 + DD),
        V.lineTo(317 - i, 531 + DD),
        V.quadraticCurveTo(339 - i, 531 + DD, 339 - i, 511 + DD));
      for (let n = 511 + DD; n > 118; n -= 8) V.lineTo(339 - INS(n), n);
      V.lineTo(339, 88);
    },
    SF = () => {
      const z = p.sp;
      if (!z || h) return "";
      const r = Math.random();
      let c = 0;
      for (const k of ["j", "b", "g", "m", "h", "l"]) if (((c += z[k] || 0), r < c)) return k;
      return "";
    },
    BS = (k, x, y, vx, vy) => {
      const z = wx,
        o = B("m" === z ? 2 : k, x, y, vx, vy);
      return (
        z &&
          ((o.sp = z),
          "m" === z ? ((o.my = !0), (o.k0 = k)) : "h" === z ? (o.mm = 3.2) : "l" === z && (o.mm = 0.3)),
        o
      );
    },
    MG = (n, o) =>
      "b" !== n.sp &&
      "b" !== o.sp &&
      !n.my &&
      !o.my &&
      (n.k === o.k || ("j" === n.sp && "j" !== o.sp) || ("j" === o.sp && "j" !== n.sp)),
    PX = (t) => {
      if (plRK.length) {
        for (const q of plRK)
          q.orb
            ? ((q.th += q.om * t),
              (q.x = c + q.rr * Math.cos(q.th)),
              (q.ay = d + q.rr * Math.sin(q.th)),
              (q.vx = -q.rr * q.om * Math.sin(q.th)),
              (q.vy = q.rr * q.om * Math.cos(q.th)))
            : q.dyn && ((q.x += q.vx * t), (q.ay += q.vy * t));
        plRK.some((q) => q.dyn && Math.hypot(q.x - c, q.ay - d) > 260) &&
          (plRK = plRK.filter((q) => !q.dyn || Math.hypot(q.x - c, q.ay - d) <= 260));
      }
      if (p.ss && PD && !I && !O && ((plSS -= t), plSS <= 0)) {
        plSS = 7 + 5 * Math.random();
        const ph = 6.283 * Math.random(),
          sx = c + 215 * Math.cos(ph),
          sy = d + 215 * Math.sin(ph),
          tx = c + 110 * (Math.random() - 0.5),
          ty = d + 110 * (Math.random() - 0.5),
          dd = Math.hypot(tx - sx, ty - sy);
        plRK.push({
          x: sx,
          ay: sy,
          o: 0,
          r: 11,
          dyn: 1,
          star: 1,
          vx: ((tx - sx) / dd) * 430,
          vy: ((ty - sy) / dd) * 430,
        });
      }
      for (const q of v)
        q.my &&
          q.age > 0.9 &&
          ((q.my = !1), (q.k = q.k0), (q.r = l(q.k)), K(q.x, q.y, o[q.k][1], 12, 110), sfx(520, 0.1));
      for (const q of v)
        if ("b" === q.sp && q.hit && q.age > 0.15 && !q.dead) {
          q.dead = !0;
          const BR = 150 + q.r;
          for (const u of v) {
            if (u === q || u.dead) continue;
            const dx = u.x - q.x,
              dy = u.y - q.y,
              d = Math.hypot(dx, dy) || 1;
            if (d < BR) {
              const f = ((1 - d / BR) * 750) / Math.max(0.6, u.r / 30);
              ((u.vx += (dx / d) * f), (u.vy += (dy / d) * f - 60 * (1 - d / BR)));
            }
          }
          (K(q.x, q.y, "#ffb347", 36, 260), W("Boum !"), sfx(120, 0.3), vib([30, 30]));
        }
      if ((v.some((q) => q.dead) && (v = v.filter((q) => !q.dead)), p.col && PD && !I && !O)) {
        const k = p.col.map((q) => (v.some((u) => u.k === q[0] && !u.my && "b" !== u.sp) ? 1 : 0)).join("");
        k !== plCK && ((plCK = k), Y(), J());
      }
    },
    MYD = (e, n) => {
      (V.save(), (V.globalAlpha = null == n ? 1 : n));
      const t = e.r,
        g1 = V.createRadialGradient(e.x - 0.3 * t, e.y - 0.3 * t, 0.1 * t, e.x, e.y, t);
      (g1.addColorStop(0, "#d9c6ff"),
        g1.addColorStop(1, "#5b3ba8"),
        (V.fillStyle = g1),
        V.beginPath(),
        V.arc(e.x, e.y, t, 0, 7),
        V.fill(),
        (V.fillStyle = "#fff"),
        (V.font = "800 " + Math.round(1.1 * t) + "px sans-serif"),
        (V.textAlign = "center"),
        (V.textBaseline = "middle"),
        V.fillText("?", e.x, e.y + 0.05 * t),
        V.restore());
    },
    SPO = (e) => {
      const t = e.r,
        k = e.sp;
      if (!k || "m" === k) return;
      (V.save(), V.translate(e.x, e.y));
      const ts = performance.now();
      if ("h" === k)
        ((V.fillStyle = "rgba(24,18,56,.4)"),
          V.beginPath(),
          V.arc(0, 0, t, 0, 7),
          V.fill(),
          (V.strokeStyle = "#2a2050"),
          (V.lineWidth = Math.max(2, 0.12 * t)),
          V.beginPath(),
          V.arc(0, 0, 0.94 * t, 0, 7),
          V.stroke());
      else if ("l" === k)
        ((V.fillStyle = "rgba(255,255,255,.32)"),
          V.beginPath(),
          V.arc(0, 0, t, 0, 7),
          V.fill(),
          (V.strokeStyle = "rgba(255,255,255,.9)"),
          (V.lineWidth = 2),
          V.setLineDash([4, 5]),
          V.beginPath(),
          V.arc(0, 0, t + 3, 0, 7),
          V.stroke());
      else if ("g" === k) {
        ((V.strokeStyle = "#ffd34a"),
          (V.lineWidth = Math.max(2.5, 0.1 * t)),
          V.beginPath(),
          V.arc(0, 0, t - 2, 0, 7),
          V.stroke());
        const q = 0.5 + 0.5 * Math.sin(ts / 260);
        ((V.fillStyle = "rgba(255,235,140," + (0.22 + 0.3 * q) + ")"),
          V.beginPath(),
          V.arc(0, 0, t, 0, 7),
          V.fill(),
          (V.fillStyle = "#fff6c0"),
          (V.font = "700 " + Math.round(0.7 * t) + "px sans-serif"),
          (V.textAlign = "center"),
          (V.textBaseline = "middle"),
          V.fillText("✦", 0, 0.05 * t));
      } else if ("j" === k) {
        V.lineWidth = Math.max(3, 0.14 * t);
        for (let i = 0; i < 6; i++)
          ((V.strokeStyle = "hsl(" + ((60 * i + ts / 8) % 360) + ",90%,60%)"),
            V.beginPath(),
            V.arc(0, 0, t - 2, (i * Math.PI) / 3, ((i + 1) * Math.PI) / 3 + 0.05),
            V.stroke());
        ((V.fillStyle = "rgba(255,255,255,.85)"),
          (V.font = "800 " + Math.round(0.8 * t) + "px sans-serif"),
          (V.textAlign = "center"),
          (V.textBaseline = "middle"),
          V.fillText("★", 0, 0.05 * t));
      } else if ("b" === k) {
        ((V.fillStyle = "rgba(18,18,40,.88)"),
          V.beginPath(),
          V.arc(0, 0, t, 0, 7),
          V.fill(),
          (V.strokeStyle = "rgba(255,90,70," + (0.5 + 0.4 * Math.sin(ts / 120)) + ")"),
          (V.lineWidth = Math.max(2, 0.1 * t)),
          V.beginPath(),
          V.arc(0, 0, t - 1, 0, 7),
          V.stroke(),
          (V.font = Math.round(1.2 * t) + "px sans-serif"),
          (V.textAlign = "center"),
          (V.textBaseline = "middle"),
          V.fillText("💣", 0, 0.05 * t));
      }
      V.restore();
    },
    NT = (ts) => {
      if (a) {
        (V.save(), V.beginPath(), ORP(), V.clip());
        const sx = c + 95 * Math.cos(ts / 3700),
          sy = d + 80 * Math.sin(ts / 2900),
          gr = V.createRadialGradient(sx, sy, 20, sx, sy, 85);
        (gr.addColorStop(0, "rgba(6,8,34,.95)"),
          gr.addColorStop(0.7, "rgba(6,8,34,.85)"),
          gr.addColorStop(1, "rgba(6,8,34,0)"),
          (V.fillStyle = gr),
          V.fillRect(0, 0, m, b),
          V.restore());
        return;
      }
      const x = Math.max(g, Math.min(E, T)),
        y1 = s ? 32 : 118,
        hh = s ? 410 : b + DD - y1,
        cy = y1 + 0.55 * hh,
        gr = V.createRadialGradient(x, cy, 30, x, cy, 260);
      (gr.addColorStop(0, "rgba(6,8,34,0)"),
        gr.addColorStop(0.5, "rgba(6,8,34,.45)"),
        gr.addColorStop(1, "rgba(6,8,34,.93)"),
        (V.fillStyle = gr),
        V.fillRect(0, y1, m, hh));
    },
    WD = (ts) => {
      if (!p.wd) return;
      const w = plWd,
        dir = w >= 0 ? 1 : -1,
        al = Math.min(1, Math.abs(w) / 220);
      (V.save(),
        (V.strokeStyle = "rgba(220,240,255," + (0.15 + 0.35 * al) + ")"),
        (V.lineWidth = 2),
        (V.lineCap = "round"));
      for (let i = 0; i < 7; i++) {
        const x = (((ts * 0.09 * dir * (1 + al) + 53 * i) % 360) + 360) % 360,
          yy = 140 + i * (60 + DD / 7);
        (V.beginPath(), V.moveTo(x, yy), V.lineTo(x + 22 * dir, yy), V.stroke());
      }
      ((V.fillStyle = "rgba(255,255,255,.8)"),
        (V.font = '700 12px "Nunito Sans",sans-serif'),
        (V.textAlign = "center"),
        V.fillText("💨 " + (Math.abs(w) < 30 ? "·" : w > 0 ? "→" : "←"), 60, 26),
        V.restore());
    },
    RKF = () => {
      if (a) return ORK();
      if (!p.rk) return [];
      return [
        [[180, 190]],
        [
          [110, 230],
          [250, 160],
        ],
        [
          [85, 250],
          [260, 210],
          [170, 140],
        ],
        [
          [85, 260],
          [275, 250],
          [180, 180],
          [180, 90],
        ],
      ][Math.min(4, p.rk) - 1].map((q) => ({ x: q[0], o: q[1], r: 19 }));
    },
    EX = () =>
      p.lim
        ? " · " + Math.max(0, plLM - plDR) + " restants"
        : p.tm
          ? " · " + Math.max(0, Math.ceil(plTL)) + " s"
          : "",
    OV = (tt, pp, ac, lb) => {
      O = !0;
      const e = $("#plov");
      ((e.hidden = !1),
        (e.innerHTML = `<div><b>${tt}</b><p>${pp}</p><button class="btn" data-a="${ac}">${lb}</button><button class="btn alt" data-a="plRe">Recommencer</button></div>`),
        requestAnimationFrame(() => e.classList.add("on")));
    },
    Y = () => {
      if (h)
        return (
          ($("#plg").innerHTML = "<b>Mode infini</b>"),
          ($("#plbr").style.width = Math.min(100, (M % 2500) / 25) + "%"),
          void ($("#plsc").textContent = M)
        );
      if (p.col)
        return (
          ($("#plg").innerHTML = p.col
            .map(
              (q) =>
                `<i class="pntgi" style="opacity:${v.some((u) => u.k === q[0] && !u.my && "b" !== u.sp) ? 1 : 0.3};background:radial-gradient(circle at 35% 30%,${o[q[0]][0]},${o[q[0]][1]})"></i>`,
            )
            .join("")),
          void ($("#plsc").textContent = M)
        );
      const e = p.sc ? p.sc : p.N,
        t = p.sc ? Math.min(M, p.sc) : Math.min(L[p.T], p.N);
      (($("#plg").innerHTML = p.sc
        ? `<b>Objectif</b> ${p.sc} pts${EX()}`
        : `<i class="pntgi" style="background:radial-gradient(circle at 35% 30%,${o[p.T][0]},${o[p.T][1]})"></i><span>${n[p.T]} ${t}/${p.N}${EX()}</span>`),
        ($("#plbr").style.width = (100 * t) / e + "%"),
        ($("#plsc").textContent = M));
    },
    W = (e, t) => {
      const a = $("#plpop");
      ((a.textContent = e),
        (a.className = "ttpop"),
        a.offsetWidth,
        (a.className = "ttpop on" + (t ? " big" : "")));
    },
    K = (e, t, a, s, n) => {
      for (let o = 0; o < s; o++) {
        const s = 7 * Math.random(),
          o = (n || 90) * (0.4 + Math.random());
        A.push({
          x: e,
          y: t,
          vx: Math.cos(s) * o,
          vy: Math.sin(s) * o - 30,
          l: 1,
          c: a,
          s: 1.2 + 2.4 * Math.random(),
        });
      }
    },
    Q = (e) => {
      const t = ORW(k) + l(e) + 16,
        a = c + Math.cos(k) * t,
        s = d + Math.sin(k) * t;
      return [Math.max(l(e) + 3, Math.min(m - l(e) - 3, a)), Math.max(l(e) + 3, Math.min(b - l(e) - 3, s))];
    },
    X = (e) => {
      if (((PD = !0), (C = e + 420), plDR++, Y(), a)) {
        const [e, t] = Q(w),
          a = Math.hypot(c - e, d - t) || 1;
        BS(w, e, t, ((c - e) / a) * 470, ((d - t) / a) * 470).in = !1;
      } else BS(w, Math.max(g + l(w), Math.min(E - l(w), T)), YF(), 0, s ? -560 : 60);
      ((w = R), (wx = Rx), (R = F()), (Rx = SF()), sfx(240, 0.05));
    },
    J = () => {
      I ||
        O ||
        !PD ||
        (!h &&
          (p.sc
            ? M >= p.sc
            : p.col
              ? p.col.every((q) => v.some((u) => u.k === q[0] && !u.my && "b" !== u.sp))
              : L[p.T] >= p.N) &&
          ((I = !0),
          W("Bravo !", 1),
          v.forEach((e) => K(e.x, e.y, o[e.k][0], 6, 120)),
          setTimeout(win, 1600)));
    },
    _ = () => {
      const e = $("#plov");
      (e.classList.remove("on"), (e.hidden = !0));
    },
    ee = () => {
      ((v = []),
        (A = []),
        (S = []),
        (M = 0),
        (plCK = ""),
        (plPL = PLF()),
        (plSS = 8),
        (plDR = 0),
        (plTL = p.tm || 0),
        (plLS = -1),
        (plLM = p.lim || 0),
        (plRK = RKF()),
        (L = Array(10).fill(0)),
        (O = I = !1),
        (H = 0),
        (PD = !1));
      for (let e = 0; e < p.pre; e++) {
        const t = Math.floor(3 * G());
        if (a) {
          const e = G() * u * 2,
            a = 70 * G();
          B(t, c + Math.cos(e) * a, d + Math.sin(e) * a, 0, 0).in = !0;
        } else {
          const a = g + l(t) + G() * (312 - 2 * l(t));
          B(t, a, s ? 62 + 26 * e + 20 * G() : 498 + DD - 26 * e - 20 * G(), 0, 0);
        }
      }
      ((w = F()),
        (R = F()),
        (wx = SF()),
        (Rx = SF()),
        (C = performance.now() + 300),
        Y(),
        p.ch && msg(s ? p.ch.replace(/Fruit(s?)/g, "Objet$1").replace(/fruit(s?)/g, "objet$1") : p.ch));
    };
  ((act.plCont = () => {
    O &&
      spend(1) &&
      (_(),
      (v = v.filter((e) => (s ? e.y + e.r < 352 : e.y - e.r > 208))),
      v.forEach((e) => (e.ov = 0)),
      (O = !1),
      (H = 0),
      (C = performance.now() + 500));
  }),
    (act.plRe = () => {
      (_(), ee());
    }),
    (act.plTime = () => {
      O && spend(1) && (_(), (O = !1), (plTL = 20), (plLS = -1), (C = performance.now() + 500), Y());
    }),
    (act.plMore = () => {
      O && spend(1) && (_(), (O = !1), (plLM = plDR + 6), (C = performance.now() + 500), Y());
    }),
    (act.plPause = () => {
      if (I || O) return;
      N = !N;
      const e = $("#plov");
      N
        ? ((e.hidden = !1),
          (e.innerHTML =
            "<div><b>Pause</b><p>Les " +
            i +
            ' attendent.</p><button class="btn" data-a="plPause">Reprendre</button></div>'),
          requestAnimationFrame(() => e.classList.add("on")))
        : _();
    }),
    (act.hint = () => {
      I ||
        O ||
        !v.length ||
        (spend(1) &&
          (v
            .slice()
            .sort((e, t) => e.k - t.k || t.y - e.y)
            .slice(0, 3)
            .forEach((e) => {
              ((e.dead = !0), K(e.x, e.y, "#ffffff", 12, 120));
            }),
          (v = v.filter((e) => !e.dead)),
          msg(
            a
              ? "Une météorite emporte les trois plus petites planètes."
              : s
                ? "Un courant emporte les trois plus petits objets."
                : "Un petit oiseau picore les trois plus petits fruits.",
          )));
    }));
  const te = (e) => {
      const t = [];
      for (const t of v) {
        if (a) {
          const a = c - t.x,
            s = d - t.y,
            n = Math.hypot(a, s) || 1;
          ((() => {
            const q = OG(t);
            ((t.vx += q[0] * e), (t.vy += q[1] * e));
          })(),
            t.in && ((t.vx *= 1 - 1.5 * e), (t.vy *= 1 - 1.5 * e)),
            (t.w *= 1 - 1.6 * e),
            Math.abs(t.w) < 0.05 && (t.w = 0),
            (t.x += t.vx * e),
            (t.y += t.vy * e),
            (t.a += t.w * e),
            (t.age += e));
          const o = Math.hypot(t.x - c, t.y - d) || 1;
          if (!t.in) {
            o + t.r < ORW(Math.atan2(t.y - d, t.x - c)) - 1 && (t.in = !0);
            continue;
          }
          const FW = ORW(Math.atan2(t.y - d, t.x - c));
          if (o + t.r > FW) {
            const e = (t.x - c) / o,
              a = (t.y - d) / o;
            ((t.hit = 1), (t.x = c + e * (FW - t.r)), (t.y = d + a * (FW - t.r)));
            const s = t.vx * e + t.vy * a;
            (s > 0 && ((t.vx -= (1 + y) * s * e), (t.vy -= (1 + y) * s * a)), (t.w *= 0.9));
            {
              const s = -a,
                n = e,
                o = t.vx * s + t.vy * n;
              ((t.vx -= s * o * 0.25), (t.vy -= n * o * 0.25));
            }
          }
          continue;
        }
        (s
          ? ((t.vy -= 225 * e),
            (t.vx += plWd * e),
            (t.vx *= 1 - 2.2 * e),
            (t.vy *= Math.max(0, 1 - (1.9 + Math.abs(t.vy) / 260) * e)),
            (t.w *= 1 - 1.2 * e))
          : ((t.vy += 1500 * e),
            (t.vx += plWd * e),
            (t.w *= 1 - 2.2 * e),
            (t.w = Math.max(-6, Math.min(6, t.w))),
            Math.abs(t.w) < 0.04 && (t.w = 0)),
          (t.x += t.vx * e),
          (t.y += t.vy * e),
          (t.a += t.w * e),
          (t.age += e),
          t.x - t.r < g && ((t.x = g + t.r), t.vx < 0 && (t.vx *= -y), (t.w *= 0.97)),
          t.x + t.r > E && ((t.x = E - t.r), t.vx > 0 && (t.vx *= -y), (t.w *= 0.97)),
          s
            ? t.y - t.r < 32 &&
              ((t.y = 32 + t.r),
              (t.hit = 1),
              t.vy < 0 && (t.vy *= -y),
              (t.vx *= 0.985),
              (t.w = 0.9 * t.w - (t.vx / t.r) * 0.1))
            : t.y + t.r > 528 + DD &&
              ((t.y = 528 + DD - t.r),
              (t.hit = 1),
              t.vy > 0 && (t.vy *= -y),
              (t.vx *= 0.985),
              (t.w = 0.9 * t.w + (t.vx / t.r) * 0.1)));
      }
      if (p.mg)
        for (let i = 0; i < v.length; i++)
          for (let j = i + 1; j < v.length; j++) {
            const n = v[i],
              o = v[j];
            if (n.k !== o.k || n.my || o.my) continue;
            const dx = o.x - n.x,
              dy = o.y - n.y,
              d = Math.hypot(dx, dy) || 1,
              gp = d - n.r - o.r;
            if (gp < 0 || gp > 70) continue;
            const f = (1 - gp / 70) * 520 * e;
            ((n.vx += (dx / d) * f), (n.vy += (dy / d) * f), (o.vx -= (dx / d) * f), (o.vy -= (dy / d) * f));
          }
      if (p.sh)
        for (const t of v) {
          const iy = INS(t.y),
            sl = (INS(t.y + 2) - INS(t.y - 2)) / 4,
            nn = Math.sqrt(1 + sl * sl),
            dl = (t.x - (g + iy)) / nn;
          if (dl < t.r) {
            const nx = 1 / nn,
              ny = -sl / nn;
            ((t.x += nx * (t.r - dl)), (t.y += ny * (t.r - dl)), (t.hit = 1));
            const vn = t.vx * nx + t.vy * ny;
            vn < 0 && ((t.vx -= (1 + y) * vn * nx), (t.vy -= (1 + y) * vn * ny));
          }
          const dr = (E - iy - t.x) / nn;
          if (dr < t.r) {
            const nx = -1 / nn,
              ny = -sl / nn;
            ((t.x += nx * (t.r - dr)), (t.y += ny * (t.r - dr)), (t.hit = 1));
            const vn = t.vx * nx + t.vy * ny;
            vn < 0 && ((t.vx -= (1 + y) * vn * nx), (t.vy -= (1 + y) * vn * ny));
          }
        }
      for (const q of plPL) {
        const px = q.x,
          py = PY(q),
          cs = Math.cos(q.a),
          sn = Math.sin(q.a);
        for (const t of v) {
          const u = (t.x - px) * cs + (t.y - py) * sn,
            uc = Math.max(-q.h, Math.min(q.h, u)),
            qx = px + cs * uc,
            qy = py + sn * uc,
            dx = t.x - qx,
            dy = t.y - qy,
            dd = Math.hypot(dx, dy) || 0.01,
            mn = t.r + 6;
          if (dd < mn) {
            const nx = dx / dd,
              ny = dy / dd;
            ((t.x = qx + nx * mn), (t.y = qy + ny * mn), (t.hit = 1));
            const cx = qx - px,
              cy = qy - py,
              vpx = -q.w * cy,
              vpy = q.w * cx,
              vn = (t.vx - vpx) * nx + (t.vy - vpy) * ny;
            if (vn < 0) {
              const m = t.r * t.r * (t.mm || 1),
                cr = cx * ny - cy * nx,
                K2 = 1 / m + (q.mv ? (cr * cr) / q.I : 0),
                j = (-1.1 * vn) / K2;
              ((t.vx += (j / m) * nx), (t.vy += (j / m) * ny), q.mv && (q.w -= (j * cr) / q.I));
              const tx = -ny,
                ty = nx,
                vt = (t.vx - vpx) * tx + (t.vy - vpy) * ty;
              ((t.vx -= tx * vt * 0.04), (t.vy -= ty * vt * 0.04));
            }
          }
        }
        q.mv &&
          ((q.w *= 1 - 2 * e),
          (q.a += q.w * e),
          Math.abs(q.a) > 0.42 && ((q.a = 0.42 * Math.sign(q.a)), (q.w = 0)));
      }
      if (plRK.length)
        for (const t of v)
          for (const q of plRK) {
            const px = q.x,
              py = PY(q),
              dx = t.x - px,
              dy = t.y - py,
              dd = Math.hypot(dx, dy) || 0.01,
              mn = t.r + q.r;
            if (dd < mn) {
              const nx = dx / dd,
                ny = dy / dd;
              ((t.x = px + nx * mn), (t.y = py + ny * mn), (t.hit = 1));
              const vn = (t.vx - (q.vx || 0)) * nx + (t.vy - (q.vy || 0)) * ny;
              vn < 0 && ((t.vx -= 1.3 * vn * nx), (t.vy -= 1.3 * vn * ny));
            }
          }
      for (let e = 0; e < v.length; e++)
        for (let a = e + 1; a < v.length; a++) {
          const n = v[e],
            o = v[a];
          if (n.dead || o.dead) continue;
          const i = o.x - n.x,
            r = o.y - n.y,
            l = n.r + o.r;
          if (i * i + r * r >= l * l) continue;
          n.hit = o.hit = !0;
          if (MG(n, o)) {
            ((n.dead = o.dead = !1), t.push([n, o]));
            continue;
          }
          const c = Math.sqrt(i * i + r * r) || 0.01,
            d = i / c,
            f = r / c,
            u = n.r * n.r * (n.mm || 1),
            h = o.r * o.r * (o.mm || 1),
            p = l - c,
            m = u + h;
          ((n.x -= (d * p * h) / m),
            (n.y -= (f * p * h) / m),
            (o.x += (d * p * u) / m),
            (o.y += (f * p * u) / m));
          const b = (o.vx - n.vx) * d + (o.vy - n.vy) * f;
          if (b < 0) {
            const e = (-(1 + (s ? 0.04 : y)) * b) / (1 / u + 1 / h);
            ((n.vx -= (e * d) / u), (n.vy -= (e * f) / u), (o.vx += (e * d) / h), (o.vy += (e * f) / h));
            const t = -f,
              a = d,
              i = (o.vx - n.vx) * t + (o.vy - n.vy) * a;
            ((n.vx += (t * i * 0.06 * h) / m),
              (n.vy += (a * i * 0.06 * h) / m),
              (o.vx -= (t * i * 0.06 * u) / m),
              (o.vy -= (a * i * 0.06 * u) / m),
              (n.w += (0.02 * i) / n.r),
              (o.w += (0.02 * i) / o.r));
          }
        }
      const i = new Set();
      (t.forEach(([e, t]) => {
        i.has(e) ||
          i.has(t) ||
          (i.add(e),
          i.add(t),
          ((e, t) => {
            const g2 = "g" === e.sp || "g" === t.sp;
            ("j" === e.sp && (e.k = t.k), "j" === t.sp && (t.k = e.k), (e.dead = t.dead = !0));
            const i = e.k,
              r = (e.x * e.r * e.r + t.x * t.r * t.r) / (e.r * e.r + t.r * t.r),
              l = (e.y * e.r * e.r + t.y * t.r * t.r) / (e.r * e.r + t.r * t.r);
            if (i >= 9)
              return (
                (M += 400),
                K(r, l, "#ffe38a", 40, 260),
                W(a ? "Supernova !" : s ? "Raz-de-marée !" : "Super pastèque !", 1),
                sfx(900, 0.4),
                vib([20, 40, 20]),
                L[9]++,
                Y(),
                void J()
              );
            const c = B(i + 1, r, l, (e.vx + t.vx) / 2, (e.vy + t.vy) / 2 - 40);
            ((c.w = (e.w + t.w) / 2),
              (c.age = 1.2),
              PD && ((L[i + 1] += g2 ? 2 : 1), (M += (i + 2) * (i + 2) * 2 * (g2 ? 3 : 1))),
              g2 && K(r, l, "#ffd34a", 26, 210),
              K(r, l, o[i + 1][1], 10 + 3 * i, 90 + 12 * i),
              S.push({ x: r, y: l, r: c.r, t: performance.now(), c: o[i + 1][0] }),
              sfx(300 + 55 * i, 0.14),
              vib(i > 5 ? [12, 30, 12] : 6),
              i + 1 >= 6 && W(n[i + 1] + " !", i + 1 >= 8),
              Y(),
              J());
          })(e, t));
      }),
        t.length && (v = v.filter((e) => !e.dead)));
    },
    ae = (e, t, n) => {
      if (e.my) return void MYD(e, n);
      const i = (t - e.born) / 320,
        r = i < 1 ? 1 + 0.16 * Math.sin(Math.min(1, i) * Math.PI) * (e.age > 1 ? 1 : 0) : 1,
        c = ((e) => {
          if (D[e]) return D[e];
          const t = l(e),
            n = U * q,
            i = Math.ceil(2.9 * t * n),
            r = document.createElement("canvas");
          r.width = r.height = i;
          const c = r.getContext("2d");
          (c.translate(i / 2, i / 2), c.scale(n, n));
          const d = o[e],
            f = c.createRadialGradient(0.35 * -t, 0.4 * -t, 0.1 * t, 0, 0, t);
          (f.addColorStop(0, d[0]),
            f.addColorStop(1, d[1]),
            9 === e && a && ((c.shadowColor = "#ffb347"), (c.shadowBlur = 0.6 * t)),
            c.save(),
            c.beginPath(),
            c.arc(0, 0, t, 0, 7),
            (c.fillStyle = f),
            c.fill(),
            (c.shadowBlur = 0),
            c.clip());
          const u = (e, a, s, n, o, i) => {
            ((c.fillStyle = o), c.beginPath(), c.ellipse(e * t, a * t, s * t, n * t, i || 0, 0, 7), c.fill());
          };
          if (a) {
            if (
              ((1 !== e && 2 !== e) ||
                [
                  [-0.4, -0.3, 0.16],
                  [0.35, 0.2, 0.2],
                  [-0.1, 0.5, 0.12],
                  [0.45, -0.45, 0.1],
                ].forEach((e) => u(e[0], e[1], e[2], e[2], "rgba(80,70,90,.28)")),
              3 === e &&
                (u(-0.2, 0.1, 0.4, 0.22, "rgba(120,40,20,.35)", 0.4),
                u(0.45, -0.35, 0.18, 0.12, "rgba(255,255,255,.45)")),
              4 === e)
            )
              for (let e = -2; e <= 2; e++) u(0, 0.32 * e, 1.1, 0.1, "rgba(255,255,255,.35)", 0.25);
            if (
              (5 === e &&
                (u(-0.3, -0.2, 0.34, 0.26, "#5cc97a", 0.5),
                u(0.35, 0.3, 0.3, 0.2, "#5cc97a", -0.4),
                u(0.1, -0.62, 0.22, 0.1, "#fff")),
              6 === e)
            )
              for (let e = -1; e <= 1; e++) u(0, 0.45 * e, 1.1, 0.12, "rgba(160,200,255,.4)", -0.15);
            if (7 === e) for (let e = -2; e <= 2; e++) u(0, 0.3 * e, 1.1, 0.09, "rgba(160,110,50,.3)", 0.1);
            (8 === e &&
              ([-0.6, -0.3, 0, 0.3, 0.6].forEach((e, t) =>
                u(0, e, 1.1, 0.11, t % 2 ? "rgba(255,240,210,.5)" : "rgba(170,80,40,.4)"),
              ),
              u(0.35, 0.25, 0.2, 0.12, "#d9573a")),
              9 === e &&
                (u(-0.3, -0.2, 0.2, 0.14, "rgba(255,255,220,.6)"),
                u(0.3, 0.3, 0.14, 0.1, "rgba(255,200,80,.6)")));
          } else if (s) {
            if (
              (0 === e &&
                (u(-0.35, -0.35, 0.22, 0.14, "rgba(255,255,255,.9)", -0.6),
                u(0.3, 0.35, 0.1, 0.06, "rgba(255,255,255,.6)")),
              1 === e &&
                (u(-0.3, -0.35, 0.28, 0.18, "rgba(255,255,255,.95)", -0.5),
                u(0.2, 0.4, 0.4, 0.2, "rgba(200,180,230,.35)")),
              2 === e &&
                [
                  [-0.3, -0.2],
                  [0.25, 0.3],
                  [0.3, -0.35],
                  [-0.2, 0.4],
                ].forEach((e) => u(e[0], e[1], 0.12, 0.12, "rgba(255,255,255,.35)")),
              3 === e)
            ) {
              for (let e = -1; e <= 1; e++) u(0.35 * e, 0.1, 0.12, 0.5, "rgba(255,255,255,.3)");
              u(0, -0.45, 0.6, 0.2, "rgba(255,255,255,.35)");
            }
            if (4 === e) {
              ((c.strokeStyle = "rgba(200,90,90,.4)"), (c.lineWidth = 0.06 * t));
              for (let e = -3; e <= 3; e++)
                (c.beginPath(), c.moveTo(0, 0.95 * t), c.lineTo(e * t * 0.32, -t), c.stroke());
            }
            if (5 === e) {
              u(0, -0.4, 0.9, 0.45, "rgba(200,140,30,.35)");
              for (let e = 0; e < 8; e++)
                u(0.55 * Math.cos(e), 0.5 * Math.sin(1.7 * e), 0.05, 0.05, "rgba(140,90,20,.6)");
            }
            if (
              (6 === e &&
                [
                  [0, 0, 0.32],
                  [-0.5, -0.3, 0.2],
                  [0.5, -0.3, 0.2],
                  [-0.5, 0.35, 0.2],
                  [0.5, 0.35, 0.2],
                  [0, -0.62, 0.16],
                  [0, 0.62, 0.16],
                ].forEach((e) => u(e[0], e[1], e[2], 0.85 * e[2], "rgba(30,90,40,.4)")),
              7 === e &&
                [
                  [-0.3, -0.35, 0.1],
                  [0.25, -0.4, 0.12],
                  [0.4, 0, 0.08],
                  [-0.45, 0.05, 0.07],
                ].forEach((e) => u(e[0], e[1], e[2], e[2], "rgba(255,230,220,.55)")),
              8 === e)
            )
              for (let e = -2; e <= 2; e++) u(0, 0.3 * e, 1.1, 0.06, "rgba(255,255,255,.3)");
            if (9 === e) {
              u(0, 0.55, 0.9, 0.35, "rgba(220,235,255,.55)");
              for (let e = 0; e < 4; e++) u(0, 0.38 + 0.13 * e, 0.85, 0.025, "rgba(30,60,140,.4)");
            }
          } else {
            if (((0 !== e && 5 !== e) || u(-0.35, -0.35, 0.22, 0.14, "rgba(255,255,255,.55)", -0.6), 1 === e))
              for (let e = -0.4; e <= 0.6; e += 0.28)
                for (let t = -0.6; t <= 0.6; t += 0.3)
                  u(t + (Math.round(10 * e) % 2 ? 0.15 : 0), e, 0.04, 0.06, "#ffe27a");
            if (
              (2 === e &&
                [
                  [-0.35, -0.35],
                  [0.25, -0.4],
                  [0, 0],
                  [-0.4, 0.3],
                  [0.35, 0.25],
                  [0, 0.55],
                  [0.5, -0.05],
                ].forEach((e) => {
                  (u(e[0], e[1], 0.26, 0.26, "rgba(90,20,130,.35)"),
                    u(e[0] - 0.08, e[1] - 0.08, 0.07, 0.05, "rgba(255,255,255,.5)"));
                }),
              3 === e)
            ) {
              for (let e = 0; e < 14; e++)
                u(0.6 * Math.cos(2.4 * e), 0.6 * Math.sin(2.4 * e), 0.03, 0.03, "rgba(200,90,0,.4)");
              u(-0.3, -0.35, 0.2, 0.12, "rgba(255,255,255,.4)", -0.5);
            }
            if (
              (4 === e && u(-0.3, -0.3, 0.2, 0.12, "rgba(255,255,255,.4)", -0.5),
              6 === e &&
                ((c.strokeStyle = "rgba(220,90,70,.45)"),
                (c.lineWidth = 0.07 * t),
                c.beginPath(),
                c.moveTo(0.1 * -t, -t),
                c.quadraticCurveTo(0.35 * t, 0, 0.05 * -t, t),
                c.stroke(),
                u(0.35, 0.1, 0.4, 0.45, "rgba(255,110,90,.3)")),
              7 === e)
            ) {
              ((c.strokeStyle = "rgba(170,110,20,.45)"), (c.lineWidth = 0.05 * t));
              for (let e = -4; e <= 4; e++)
                (c.beginPath(),
                  c.moveTo(e * t * 0.35 - t, -t),
                  c.lineTo(e * t * 0.35 + t, t),
                  c.stroke(),
                  c.beginPath(),
                  c.moveTo(e * t * 0.35 + t, -t),
                  c.lineTo(e * t * 0.35 - t, t),
                  c.stroke());
            }
            if (8 === e) {
              ((c.strokeStyle = "rgba(255,255,230,.55)"), (c.lineWidth = 0.035 * t));
              for (let e = -4; e <= 4; e++)
                (c.beginPath(),
                  c.moveTo(e * t * 0.3, -t),
                  c.quadraticCurveTo(e * t * 0.3 + 0.2 * t, 0, e * t * 0.3, t),
                  c.stroke(),
                  c.beginPath(),
                  c.moveTo(-t, e * t * 0.3),
                  c.quadraticCurveTo(0, e * t * 0.3 + 0.2 * t, t, e * t * 0.3),
                  c.stroke());
            }
            if (9 === e) {
              ((c.strokeStyle = "rgba(20,70,30,.7)"), (c.lineWidth = 0.13 * t));
              for (let e = -3; e <= 3; e++) {
                (c.beginPath(), c.moveTo(e * t * 0.32, -t));
                for (let a = -1; a <= 1; a += 0.25)
                  c.lineTo(e * t * 0.32 + (Math.round(4 * a) % 2 ? 0.07 * t : 0.07 * -t), a * t);
                c.stroke();
              }
            }
          }
          if ((c.restore(), !a)) {
            const a = (e, a, s, n, o) => {
              ((c.fillStyle = o || "#4aa83a"),
                c.save(),
                c.translate(e * t, a * t),
                c.rotate(s),
                c.beginPath(),
                c.ellipse(0, (-n * t) / 2, n * t * 0.22, (n * t) / 2, 0, 0, 7),
                c.fill(),
                c.restore());
            };
            if (s) {
              if (((c.lineCap = "round"), 2 === e)) {
                ((c.strokeStyle = "#7a3ab8"), (c.lineWidth = 0.06 * t));
                for (let e = 0; e < 20; e++) {
                  const a = (e / 20) * 6.283;
                  (c.beginPath(),
                    c.moveTo(Math.cos(a) * t * 0.95, Math.sin(a) * t * 0.95),
                    c.lineTo(Math.cos(a) * t * 1.28, Math.sin(a) * t * 1.28),
                    c.stroke());
                }
              }
              if (3 === e) {
                ((c.strokeStyle = "rgba(220,140,230,.8)"), (c.lineWidth = 0.07 * t));
                for (let e = -2; e <= 2; e++)
                  (c.beginPath(),
                    c.moveTo(e * t * 0.3, 0.8 * t),
                    c.quadraticCurveTo(e * t * 0.3 + 0.15 * t, 1.1 * t, e * t * 0.3, 1.35 * t),
                    c.stroke());
              }
              if (5 === e) {
                ((c.strokeStyle = "#c8961a"), (c.lineWidth = 0.05 * t));
                for (let e = 0; e < 14; e++) {
                  const a = (e / 14) * 6.283;
                  (c.beginPath(),
                    c.moveTo(Math.cos(a) * t * 0.97, Math.sin(a) * t * 0.97),
                    c.lineTo(Math.cos(a) * t * 1.14, Math.sin(a) * t * 1.14),
                    c.stroke());
                }
              }
              if (7 === e) {
                c.fillStyle = "#e0503a";
                for (let e = -3; e <= 3; e++)
                  (c.beginPath(), c.arc(e * t * 0.26, 0.95 * t, 0.13 * t, 0, 7), c.fill());
              }
              (8 === e &&
                ((c.fillStyle = "#7a8aa8"),
                c.beginPath(),
                c.moveTo(0.2 * -t, 0.9 * -t),
                c.lineTo(0, 1.35 * -t),
                c.lineTo(0.2 * t, 0.9 * -t),
                c.fill(),
                c.beginPath(),
                c.moveTo(0.2 * -t, 0.9 * t),
                c.lineTo(0, 1.35 * t),
                c.lineTo(0.2 * t, 0.9 * t),
                c.fill()),
                9 === e &&
                  ((c.fillStyle = "rgba(200,230,255,.85)"),
                  [
                    [-0.2, -1.25, 0.09],
                    [0, -1.4, 0.11],
                    [0.2, -1.25, 0.09],
                  ].forEach((e) => {
                    (c.beginPath(), c.arc(e[0] * t, e[1] * t, e[2] * t, 0, 7), c.fill());
                  })));
            } else {
              if (
                ((0 !== e && 5 !== e) ||
                  ((c.strokeStyle = "#6a4a2a"),
                  (c.lineWidth = 0.09 * t),
                  (c.lineCap = "round"),
                  c.beginPath(),
                  c.moveTo(0, 0.85 * -t),
                  c.quadraticCurveTo(0.1 * t, 1.2 * -t, 0.3 * t, 1.35 * -t),
                  c.stroke(),
                  a(0.3, -1.2, 1.1, 0.45)),
                1 === e)
              )
                for (let e = -2; e <= 2; e++) a(0.18 * e, -0.85, 0.5 * e, 0.42, "#3aa83a");
              if ((3 === e && a(0.15, -0.9, 0.6, 0.38), 4 === e))
                for (let e = 0; e < 4; e++) a(0, -0.9, 1.57 * e + 0.78, 0.32, "#2f6a2a");
              if (7 === e) for (let e = -2; e <= 2; e++) a(0.14 * e, -0.85, 0.35 * e, 0.7, "#3a9a3a");
            }
          }
          if (
            (7 === e &&
              a &&
              ((c.strokeStyle = "rgba(240,205,140,.9)"),
              (c.lineWidth = 0.16 * t),
              c.beginPath(),
              c.ellipse(0, 0, 1.42 * t, 0.4 * t, -0.35, 0, 7),
              c.stroke(),
              (c.strokeStyle = "rgba(255,255,255,.35)"),
              (c.lineWidth = 0.04 * t),
              c.beginPath(),
              c.ellipse(0, 0, 1.42 * t, 0.4 * t, -0.35, 0, 7),
              c.stroke()),
            9 === e && a)
          ) {
            ((c.strokeStyle = "rgba(255,200,90,.7)"), (c.lineWidth = 0.07 * t), (c.lineCap = "round"));
            for (let e = 0; e < 12; e++) {
              const a = (e / 12) * 6.283;
              (c.beginPath(),
                c.moveTo(Math.cos(a) * t * 1.08, Math.sin(a) * t * 1.08),
                c.lineTo(Math.cos(a) * t * 1.3, Math.sin(a) * t * 1.3),
                c.stroke());
            }
          }
          return (D[e] = r);
        })(e.k),
        d = (c.width / (U * q)) * r;
      (V.save(),
        (V.globalAlpha = null == n ? 1 : n),
        V.translate(e.x, e.y),
        V.rotate(e.a),
        V.drawImage(c, -d / 2, -d / 2, d, d),
        V.restore(),
        (V.globalAlpha = null == n ? 1 : n),
        SPO(e),
        ((e) => {
          const t = e.r,
            a = 0.2 * t,
            s = 0.05 * -t;
          ((V.fillStyle = "rgba(32,26,66,.8)"),
            V.beginPath(),
            V.arc(e.x - a, e.y + s, 0.07 * t, 0, 7),
            V.arc(e.x + a, e.y + s, 0.07 * t, 0, 7),
            V.fill(),
            (V.strokeStyle = "rgba(32,26,66,.8)"),
            (V.lineWidth = Math.max(1, 0.05 * t)),
            (V.lineCap = "round"),
            V.beginPath(),
            V.arc(e.x, e.y + 0.1 * t, 0.15 * t, 0.2, Math.PI - 0.2),
            V.stroke());
        })(e, e.k),
        (V.globalAlpha = 1));
    },
    se = (e) => {
      if (!z.isConnected) return;
      requestAnimationFrame(se);
      scrollY && scrollTo(0, 0);
      ((plWd = p.wd ? p.wd * (Math.sin(e / 3100) + 0.6 * Math.sin(e / 1300 + 1)) * 170 : 0),
        (plAt = p.gr
          ? [[c + 58 * Math.cos(e / 2300), d + 58 * Math.sin(e / 2300), 1]]
          : p.g2
            ? [
                [c - 62, d + 10, 0.65],
                [c + 62, d - 10, 0.65],
              ]
            : [[c, d, 1]]),
        (plAg = { x: c + 55 * Math.cos(e / 5200), y: d + 45 * Math.sin(e / 4300) }));
      const t = Math.min(0.033, (e - (P || e)) / 1e3);
      if (
        ((P = e),
        A.forEach((e) => {
          ((e.x += e.vx * t), (e.y += e.vy * t), (e.vy += 300 * t), (e.l -= 1.3 * t));
        }),
        (A = A.filter((e) => e.l > 0)),
        !N && !O)
      ) {
        for (let e = 0; e < 8; e++) te(t / 8);
        PX(t);
        if (!I) {
          (PD &&
            p.tm &&
            plTL > 0 &&
            ((plTL -= t),
            Math.ceil(plTL) !== plLS && ((plLS = Math.ceil(plTL)), Y()),
            plTL <= 0 &&
              ((plTL = 0),
              Y(),
              OV("Temps écoulé", "Il reste du chemin à parcourir.", "plTime", "Plus 20 s · 1 🫧"))),
            p.lim &&
              !O &&
              plDR >= plLM &&
              performance.now() > C + 3800 &&
              OV(
                "Plus de fruits",
                "Il n’en reste plus pour atteindre l’objectif.",
                "plMore",
                "Plus 6 fruits · 1 🫧",
              ));
        }
        if (!I && !O) {
          let e = 0;
          for (const n of v)
            n.age > 1.4 &&
            (a
              ? n.in && Math.hypot(n.x - c, n.y - d) + n.r > ORW(Math.atan2(n.y - d, n.x - c)) - 5
              : s
                ? n.y + n.r > 442
                : n.y - n.r < 118) &&
            Math.hypot(n.vx, n.vy) < 80
              ? ((n.ov += t), n.ov > e && (e = n.ov))
              : (n.ov = 0);
          ((H = e),
            e > 2.2 &&
              (() => {
                O = !0;
                const e = $("#plov");
                if (((e.hidden = !1), h)) {
                  const t = infSave("planetes", M);
                  return (
                    (e.innerHTML = `<div><b>Fin de partie</b><p>Score : ${M} pts${t ? " · nouveau record !" : " · record : " + infBest("planetes") + " pts"}</p><button class="btn" data-a="plRe">Rejouer</button></div>`),
                    void requestAnimationFrame(() => e.classList.add("on"))
                  );
                }
                ((e.innerHTML = `<div><b>Le bocal déborde</b><p>Les ${i} dépassent la ligne.</p><button class="btn" data-a="plCont">Continuer · 1 🫧</button><button class="btn alt" data-a="plRe">Recommencer</button></div>`),
                  requestAnimationFrame(() => e.classList.add("on")));
              })());
        }
      }
      ((e) => {
        const t = U * q;
        (V.setTransform(1, 0, 0, 1, 0, 0),
          V.clearRect(0, 0, z.width, z.height),
          V.setTransform(t, 0, 0, t, 0, 0));
        const n = !O && !I && !N && e >= C;
        if (a) {
          const t = V.createRadialGradient(c, d, 10, c, d, f);
          (t.addColorStop(0, "rgba(255,210,170,.16)"),
            t.addColorStop(1, "rgba(255,255,255,.06)"),
            (V.fillStyle = t),
            V.beginPath(),
            ORP(),
            V.fill(),
            (V.strokeStyle =
              H > 0 ? "rgba(255,110,120," + (0.6 + 0.4 * Math.sin(e / 120)) + ")" : "rgba(210,230,255,.6)"),
            (V.lineWidth = 3),
            V.beginPath(),
            ORP(),
            V.stroke(),
            (V.fillStyle = "rgba(255,230,180,.5)"),
            V.beginPath(),
            V.arc(c, d, 4, 0, 7),
            V.fill());
          const [a, s] = Q(w);
          (n &&
            ((V.strokeStyle = "rgba(255,255,255,.35)"),
            (V.lineWidth = 1.8),
            V.setLineDash([5, 8]),
            V.beginPath(),
            V.moveTo(a, s),
            V.lineTo(c, d),
            V.stroke(),
            V.setLineDash([])),
            O ||
              I ||
              ae(
                {
                  x: a,
                  y: s,
                  r: "m" === wx ? l(2) : l(w),
                  k: w,
                  a: e / 2600,
                  born: 0,
                  age: 2,
                  sp: wx,
                  my: "m" === wx,
                },
                e,
                n ? 1 : 0.35,
              ));
        } else if (s) {
          const t = V.createLinearGradient(0, 32, 0, 472);
          (t.addColorStop(0, "rgba(120,200,255,.22)"),
            t.addColorStop(1, "rgba(40,90,200,.12)"),
            (V.fillStyle = t),
            V.beginPath(),
            JW(),
            V.fill());
          for (let t = 0; t < 9; t++) {
            const a = g + ((53 * t) % 312),
              s = 462 - ((e / 22 + 67 * t) % 410),
              n = 2 + (t % 3);
            ((V.strokeStyle = "rgba(255,255,255,.35)"),
              (V.lineWidth = 1),
              V.beginPath(),
              V.arc(a, s, n, 0, 7),
              V.stroke());
          }
          ((V.strokeStyle = "rgba(210,230,255,.55)"),
            (V.lineWidth = 3),
            (V.lineJoin = "round"),
            V.beginPath(),
            JW(),
            V.stroke(),
            (V.strokeStyle =
              H > 0 ? "rgba(255,110,120," + (0.55 + 0.4 * Math.sin(e / 120)) + ")" : "rgba(255,255,255,.3)"),
            (V.lineWidth = 2),
            V.setLineDash([8, 8]),
            V.beginPath(),
            V.moveTo(g, 442),
            V.lineTo(E, 442),
            V.stroke(),
            V.setLineDash([]));
          const a = Math.max(g + l(w), Math.min(E - l(w), T));
          (n &&
            ((V.strokeStyle = "rgba(255,255,255,.22)"),
            (V.lineWidth = 1.5),
            V.setLineDash([3, 7]),
            V.beginPath(),
            V.moveTo(a, YF() - l(w)),
            V.lineTo(a, 32),
            V.stroke(),
            V.setLineDash([])),
            O ||
              I ||
              ae(
                {
                  x: a,
                  y: YF(),
                  r: "m" === wx ? l(2) : l(w),
                  k: w,
                  a: e / 2600,
                  born: 0,
                  age: 2,
                  sp: wx,
                  my: "m" === wx,
                },
                e,
                n ? 1 : 0.35,
              ));
        } else {
          ((V.fillStyle = "rgba(255,255,255,.045)"),
            V.beginPath(),
            JP(),
            V.fill(),
            (V.strokeStyle = "rgba(210,230,255,.55)"),
            (V.lineWidth = 3),
            (V.lineJoin = "round"),
            V.beginPath(),
            JP(),
            V.stroke(),
            (V.strokeStyle =
              H > 0 ? "rgba(255,110,120," + (0.55 + 0.4 * Math.sin(e / 120)) + ")" : "rgba(255,255,255,.3)"),
            (V.lineWidth = 2),
            V.setLineDash([8, 8]),
            V.beginPath(),
            V.moveTo(g, 118),
            V.lineTo(E, 118),
            V.stroke(),
            V.setLineDash([]));
          const t = Math.max(g + l(w), Math.min(E - l(w), T));
          (n &&
            ((V.strokeStyle = "rgba(255,255,255,.22)"),
            (V.lineWidth = 1.5),
            V.setLineDash([3, 7]),
            V.beginPath(),
            V.moveTo(t, YF() + l(w)),
            V.lineTo(t, 528 + DD),
            V.stroke(),
            V.setLineDash([])),
            O ||
              I ||
              ae(
                {
                  x: t,
                  y: YF(),
                  r: "m" === wx ? l(2) : l(w),
                  k: w,
                  a: e / 2600,
                  born: 0,
                  age: 2,
                  sp: wx,
                  my: "m" === wx,
                },
                e,
                n ? 1 : 0.35,
              ));
        }
        ((V.fillStyle = "rgba(255,255,255,.7)"),
          (V.font = '700 11px "Nunito Sans",sans-serif'),
          (V.textAlign = "center"));
        const o = s ? 514 : 52;
        V.fillText("Ensuite", 318, s ? 552 : 26);
        {
          const t = R;
          (V.save(), V.translate(318, o));
          const a = 0.55;
          (V.scale(a, a),
            V.translate(-318, -o),
            ae(
              {
                x: 318,
                y: o,
                r: "m" === Rx ? l(2) : l(t),
                k: t,
                a: e / 3e3,
                born: 0,
                age: 2,
                sp: Rx,
                my: "m" === Rx,
              },
              e,
            ),
            V.restore());
        }
        (WD(e),
          OD(e),
          V.save(),
          plPL.forEach((q) => {
            const px = q.x,
              py = PY(q),
              cs = Math.cos(q.a),
              sn = Math.sin(q.a);
            ((V.strokeStyle = q.mv ? "#c9a46a" : "#aab6e6"),
              (V.lineWidth = 12),
              (V.lineCap = "round"),
              V.beginPath(),
              V.moveTo(px - cs * q.h, py - sn * q.h),
              V.lineTo(px + cs * q.h, py + sn * q.h),
              V.stroke(),
              q.mv &&
                ((V.fillStyle = "#7a5a3a"),
                V.beginPath(),
                V.moveTo(px - 14, py + 34),
                V.lineTo(px + 14, py + 34),
                V.lineTo(px, py + 4),
                V.fill()));
          }),
          V.restore(),
          plRK.forEach((q) => {
            const py = PY(q),
              gr = V.createRadialGradient(q.x - 6, py - 6, 2, q.x, py, q.r);
            (gr.addColorStop(0, q.star ? "#fffbe0" : q.moon ? "#cfe6ff" : "#e0dcf0"),
              gr.addColorStop(1, q.star ? "#ffd34a" : q.moon ? "#4a78b8" : "#6a6488"),
              (V.fillStyle = gr),
              V.beginPath(),
              V.arc(q.x, py, q.r, 0, 7),
              V.fill(),
              (V.strokeStyle = "rgba(255,255,255,.35)"),
              (V.lineWidth = 1.5),
              V.stroke(),
              q.star &&
                ((V.strokeStyle = "rgba(255,240,180,.7)"),
                (V.lineWidth = 5),
                (V.lineCap = "round"),
                V.beginPath(),
                V.moveTo(q.x, py),
                V.lineTo(q.x - 0.15 * q.vx, py - 0.15 * q.vy),
                V.stroke()));
          }));
        for (const t of v) ae(t, e);
        (S.forEach((t) => {
          const a = (e - t.t) / 450;
          a >= 1 ||
            ((V.strokeStyle = "rgba(255,255,255," + 0.7 * (1 - a) + ")"),
            (V.lineWidth = 3 * (1 - a) + 0.5),
            V.beginPath(),
            V.arc(
              t.x,
              t.y,
              t.r * (1 + 0.8 * ((e) => 1 - Math.pow(1 - Math.min(1, Math.max(0, e)), 3))(a)),
              0,
              7,
            ),
            V.stroke());
        }),
          (S = S.filter((t) => e - t.t < 450)),
          A.forEach((e) => {
            ((V.globalAlpha = Math.max(0, Math.min(1, e.l))),
              (V.fillStyle = e.c),
              V.beginPath(),
              V.arc(e.x, e.y, e.s, 0, 7),
              V.fill());
          }),
          (V.globalAlpha = 1),
          p.nt && NT(e));
      })(e);
    },
    pt = (e) => {
      const t = z.getBoundingClientRect();
      return [(e.clientX - t.left) / U, (e.clientY - t.top) / U];
    },
    ne = (e) => {
      const [s, n] = pt(e);
      if ("mouse" !== e.pointerType && RL) {
        ((T = Math.max(g, Math.min(E, RL.T + s - RL.x))),
          (YM = null),
          a && (k = RL.k + Math.atan2(n - d, s - c) - RL.a));
        return;
      }
      ((T = s), (YM = "mouse" === e.pointerType ? n : null), a && (k = Math.atan2(n - d, s - c)));
    };
  let oe = null;
  const ie = (e) => {
      if (!z.isConnected) return void document.removeEventListener("pointerdown", ie, !0);
      if (e.button > 0 || I || O || N) return;
      const t = e.target;
      (t.closest && t.closest("button,a,input,.top,.ttov,.nav,nav,dialog")) ||
        (e.preventDefault(),
        (oe = e.pointerId),
        "mouse" !== e.pointerType
          ? (() => {
              const [s, n] = pt(e);
              RL = { T: T, k: k, x: s, a: Math.atan2(n - d, s - c) };
            })()
          : ne(e));
    },
    re = (e) => {
      if (!z.isConnected)
        return (
          document.removeEventListener("pointermove", re),
          void document.removeEventListener("pointerup", le)
        );
      (oe === e.pointerId || "mouse" === e.pointerType) && ne(e);
    },
    le = (e) => {
      if (!z.isConnected || oe !== e.pointerId) return;
      (ne(e), (oe = null), (RL = null));
      const t = performance.now();
      !I && !O && !N && t >= C && X(t);
    };
  (document.addEventListener("pointerdown", ie, !0),
    document.addEventListener("pointermove", re),
    document.addEventListener("pointerup", le));
  const ce = (e) => {
    if (!z.isConnected) return void removeEventListener("keydown", ce);
    const t = performance.now();
    "ArrowLeft" === e.key
      ? ((T = Math.max(g, T - 14)), (k -= 0.12), e.preventDefault())
      : "ArrowRight" === e.key
        ? ((T = Math.min(E, T + 14)), (k += 0.12), e.preventDefault())
        : (" " !== e.key && "Enter" !== e.key && "ArrowDown" !== e.key) ||
          I ||
          O ||
          N ||
          !(t >= C) ||
          (e.preventDefault(), X(t));
  };
  addEventListener("keydown", ce);
  const de = () => {
    z.isConnected ? Z() : removeEventListener("resize", de);
  };
  (addEventListener("resize", de),
    (window.__PLDBG = {
      OR: a,
      ps: () => v,
      made: () => L,
      L: p,
      win: () => {
        ((L[p.T || 0] = 99), (M = 1e5), J());
      },
    }),
    Z(),
    ee(),
    requestAnimationFrame(se));
}
const CUN = 30;
const kzRng = (e) => {
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
const KZI = {
  bb: { n: "pain blanc", k: "b" },
  bn: { n: "pain brun", k: "b" },
  vi: { n: "viande", k: "p" },
  cr: { n: "croquette de poulet", k: "p" },
  la: { n: "laitue", k: "t" },
  to: { n: "tomate", k: "t" },
  fr: { n: "fromage", k: "t" },
  ke: { n: "ketchup", k: "t" },
  co: { n: "cornichons", k: "t" },
  ba: { n: "bacon", k: "t" },
  ph: { n: "pain à hot-dog", k: "b" },
  pb: { n: "pain brioché", k: "b" },
  sa: { n: "saucisse", k: "p" },
  sv: { n: "saucisse végé", k: "p" },
  mo: { n: "moutarde", k: "t" },
  of: { n: "oignons frits", k: "t" },
  fx: { n: "fromage râpé", k: "t" },
  re: { n: "relish", k: "t" },
  ni: { n: "riz à sushi", k: "b" },
  mk: { n: "feuille d’algue", k: "b" },
  sm: { n: "saumon", k: "p" },
  th: { n: "thon", k: "p" },
  cv: { n: "crevette", k: "p" },
  wa: { n: "wasabi", k: "t" },
  av: { n: "avocat", k: "t" },
  oe: { n: "œufs de poisson", k: "t" },
  se: { n: "sésame", k: "t" },
  fries: { n: "frites", k: "s" },
  drink: { n: "boisson", k: "s" },
};
const KZU = [
  ["bb", "vi"],
  ["ke"],
  ["la"],
  ["to"],
  ["fr"],
  ["bn"],
  ["cr"],
  ["co"],
  ["ba"],
  ["fries"],
  ["ph", "sa"],
  ["ke"],
  ["mo"],
  ["of"],
  ["fries"],
  ["fx"],
  ["pb"],
  ["sv"],
  ["re"],
  ["drink"],
  ["ni", "sm"],
  ["wa"],
  ["mk"],
  ["th"],
  ["fries"],
  ["av"],
  ["cv"],
  ["oe"],
  ["se"],
  ["drink"],
];
const KZL = [
  { n: "Pipo", c1: "#ffe9f2", c2: "#f29ac0", an: "heart", ac: "bow", ac2: "#ff6f9f" },
  { n: "Lumi", c1: "#e9fbff", c2: "#7fcde8", an: "moon", ac: "scarf", ac2: "#ffcf5a" },
  { n: "Tika", c1: "#efffe6", c2: "#8fd47a", an: "leaf", ac: "hat", ac2: "#5a8a3a" },
  { n: "Mio", c1: "#fff6df", c2: "#f2bf6a", an: "drop", ac: "glasses", ac2: "#6a4a8a" },
  { n: "Bulle", c1: "#f1ecff", c2: "#a99cf0", an: "flower", ac: "scarf", ac2: "#ff8fa8" },
  { n: "Noisette", c1: "#fff0e4", c2: "#d99a6a", an: "none", ac: "hat", ac2: "#a8452e" },
  { n: "Plume", c1: "#ffffff", c2: "#c8d2e8", an: "heart", ac: "glasses", ac2: "#3a6ab8" },
  { n: "Gazou", c1: "#fffbe0", c2: "#e8d45a", an: "leaf", ac: "bow", ac2: "#6aa8ff" },
  { n: "Nini", c1: "#ffe8e4", c2: "#ff9a8a", an: "moon", ac: "hat", ac2: "#3a4a8a" },
  { n: "Coco", c1: "#e6fff7", c2: "#6ad0b0", an: "flower", ac: "glasses", ac2: "#a84a6a" },
];
function kzGuy(e, t, a) {
  const s = 'stroke="#4a4290" stroke-width="1.9" fill="none" stroke-linecap="round"',
    n = "kzb" + a,
    o =
      {
        heart: `<path d="M1 -38Q4 -45 3 -50" stroke="${e.c2}" stroke-width="2" fill="none"/><path d="M3 -50c-2-4-8-2-6 2l6 5 6-5c2-4-4-6-6-2z" fill="#ff7a9f"/>`,
        moon: `<path d="M1 -38Q5 -45 4 -51" stroke="${e.c2}" stroke-width="2" fill="none"/><path d="M7 -58a6 6 0 1 0 0 10a4.5 4.5 0 1 1 0 -10z" fill="#ffe27a"/>`,
        leaf: `<path d="M1 -38Q2 -45 -1 -50" stroke="${e.c2}" stroke-width="2" fill="none"/><path d="M-1 -50c-8-2-10-8-8-12c6 0 10 5 8 12z" fill="#6ad06a"/>`,
        drop: `<path d="M1 -38Q4 -44 3 -49" stroke="${e.c2}" stroke-width="2" fill="none"/><path d="M3 -59c-4 5-5 8-3 10c2 1.5 4 1.5 6 0c2-2 1-5-3-10z" fill="#7ac8ff"/>`,
        flower: `<path d="M1 -38Q3 -45 2 -50" stroke="${e.c2}" stroke-width="2" fill="none"/>${[0, 72, 144, 216, 288].map((e) => `<circle cx="${(2 + 3.6 * Math.cos((e * Math.PI) / 180)).toFixed(1)}" cy="${(3.6 * Math.sin((e * Math.PI) / 180) - 53).toFixed(1)}" r="2.8" fill="#ffb3cf"/>`).join("")}<circle cx="2" cy="-53" r="2.2" fill="#ffe27a"/>`,
        none: "",
      }[e.an] || "",
    i =
      {
        bow: `<path d="M-4 -37l-7 -4v8zM4 -37l7 -4v8z" fill="${e.ac2}"/><circle cx="0" cy="-37" r="2.2" fill="${e.ac2}"/>`,
        hat: `<path d="M-12 -34h24l-3 -3h-18z" fill="${e.ac2}"/><path d="M-8 -37v-7q8 -3 16 0v7z" fill="${e.ac2}"/><path d="M-8 -39h16" stroke="#fff" stroke-opacity=".5" stroke-width="1.6"/>`,
        scarf: `<path d="M-13 -9q13 6 26 0l1 4q-14 6 -28 0z" fill="${e.ac2}"/><path d="M7 -6l2 8 4 -1 -2 -8z" fill="${e.ac2}"/>`,
        glasses: `<circle cx="-5.8" cy="-23" r="4.4" fill="#fff" fill-opacity=".25" stroke="${e.ac2}" stroke-width="1.4"/><circle cx="5.8" cy="-23" r="4.4" fill="#fff" fill-opacity=".25" stroke="${e.ac2}" stroke-width="1.4"/><path d="M-1.4 -23h2.8" stroke="${e.ac2}" stroke-width="1.4"/>`,
        none: "",
      }[e.ac] || "",
    r =
      "happy" === t
        ? `<path d="M-9.2 -21.4q3.4 -4.2 6.8 0M2.4 -21.4q3.4 -4.2 6.8 0" ${s}/><path d="M-4.6 -17.6Q0 -9.4 4.6 -17.6Z" fill="#b8456a"/><path d="M-2.2 -13.4q2.2 -2.2 4.4 0q-2.2 1.8 -4.4 0z" fill="#ff8fa8"/>`
        : "sad" === t
          ? '<ellipse cx="-5.8" cy="-21" rx="1.9" ry="2.6" fill="#4a4290"/><ellipse cx="5.8" cy="-21" rx="1.9" ry="2.6" fill="#4a4290"/><path d="M-3.8 -13Q0 -17.2 3.8 -13" stroke="#7a6cc0" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M-9.8 -17.6q2.2 2.8 0 4.6q-2.2 -1.8 0 -4.6z" fill="#8fd0ff"/>'
          : "lo" === t
            ? `<ellipse cx="-5.8" cy="-22" rx="2" ry="2.7" fill="#4a4290"/><ellipse cx="5.8" cy="-22" rx="2" ry="2.7" fill="#4a4290"/><path d="M-9.6 -27.4L-3.4 -25.8M9.6 -27.4L3.4 -25.8" ${s}/><path d="M-3 -15.4h6" stroke="#7a6cc0" stroke-width="1.6" stroke-linecap="round"/>`
            : '<ellipse cx="-5.8" cy="-23" rx="2.1" ry="2.9" fill="#4a4290"/><ellipse cx="5.8" cy="-23" rx="2.1" ry="2.9" fill="#4a4290"/><circle cx="-5.1" cy="-24.2" r=".85" fill="#fff"/><circle cx="6.5" cy="-24.2" r=".85" fill="#fff"/><path d="M-2.8 -16.4q2.8 2.6 5.6 0" stroke="#7a6cc0" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
    l =
      "happy" === t
        ? [
            [-17.6, -27],
            [17.6, -27],
          ]
        : [
            [-14.8, -10],
            [14.8, -10],
          ];
  return `<svg viewBox="-28 -66 56 68" aria-hidden="true"><defs><radialGradient id="${n}" cx=".36" cy=".26" r=".98"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="${e.c1}"/><stop offset="1" stop-color="${e.c2}"/></radialGradient></defs><ellipse cx="0" cy="-1" rx="12" ry="2.2" fill="rgba(0,0,0,.2)"/>${o}<path d="M0 -39C10 -39 15.5 -29 15.5 -19C15.5 -8 9 -2 0 -2C-9 -2 -15.5 -8 -15.5 -19C-15.5 -29 -10 -39 0 -39Z" fill="url(#${n})"/><ellipse cx="-6.4" cy="-30" rx="3.2" ry="5.4" fill="#fff" opacity=".6" transform="rotate(18 -6.4 -30)"/>${r}<ellipse cx="-11" cy="-16.6" rx="2.7" ry="1.7" fill="#ff9db8" opacity=".75"/><ellipse cx="11" cy="-16.6" rx="2.7" ry="1.7" fill="#ff9db8" opacity=".75"/>${i}${l.map(([t, a]) => `<circle cx="${t}" cy="${a}" r="4.6" fill="${e.c1}" stroke="${e.c2}" stroke-width="1"/>`).join("")}</svg>`;
}
function kzDish(e) {
  if (!e || !e.b) return "";
  if ("ni" === e.b || "mk" === e.b) return kzSushi(e);
  const t = e.t || [];
  if ("ph" === e.b || "pb" === e.b) {
    const a = "pb" === e.b,
      s = a ? "#e09a3a" : "#f0c27a";
    let n = `<path d="M10 30q0 -12 12 -12h56q12 0 12 12z" fill="${a ? "#b8702a" : "#d29a52"}"/>`;
    return (
      e.p &&
        (n += `<rect x="6" y="21" width="88" height="13" rx="6.5" fill="${"sv" === e.p ? "#8a6a3a" : "#c2563a"}"/><path d="M20 24l4 6M36 24l4 6M52 24l4 6M68 24l4 6" stroke="#000" stroke-opacity=".22" stroke-width="2"/><path d="M12 24h76" stroke="#fff" stroke-opacity=".3" stroke-width="2" stroke-linecap="round"/>`),
      t.includes("fx") &&
        (n += [14, 22, 30, 38, 46, 54, 62, 70, 78]
          .map(
            (e, t) =>
              `<path d="M${e} ${20 + (t % 2) * 2}l5 ${t % 2 ? -3 : 3}" stroke="#ffd34a" stroke-width="2.4" stroke-linecap="round"/>`,
          )
          .join("")),
      t.includes("ke") &&
        (n +=
          '<path d="M12 24l6 -4 6 4 6 -4 6 4 6 -4 6 4 6 -4 6 4 6 -4 6 4 6 -4 6 4" stroke="#e8352a" stroke-width="3" fill="none" stroke-linejoin="round" stroke-linecap="round"/>'),
      t.includes("mo") &&
        (n +=
          '<path d="M14 27l6 -4 6 4 6 -4 6 4 6 -4 6 4 6 -4 6 4 6 -4 6 4 6 -4 6 4" stroke="#ffcf2a" stroke-width="2.6" fill="none" stroke-linejoin="round" stroke-linecap="round"/>'),
      t.includes("of") &&
        (n += [18, 30, 44, 58, 72, 82]
          .map(
            (e) =>
              `<path d="M${e} 21q3 -4 6 0" stroke="#a8622a" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,
          )
          .join("")),
      t.includes("re") &&
        (n += [16, 26, 40, 50, 64, 76, 86]
          .map((e, t) => `<circle cx="${e}" cy="${20 + (t % 3)}" r="1.8" fill="#4ab04a"/>`)
          .join("")),
      (n +=
        `<path d="M4 30q0 12 14 12h64q14 0 14 -12q-4 4 -14 4h-64q-10 0 -14 -4z" fill="${s}"/>` +
        (a
          ? '<path d="M16 39h68" stroke="#fff" stroke-opacity=".45" stroke-width="2" stroke-linecap="round"/>'
          : "")),
      `<svg class="kzd" viewBox="0 6 100 40" aria-hidden="true">${n}</svg>`
    );
  }
  const a = "bn" === e.b ? "#a8703f" : "#f3cf8f",
    s = "bn" === e.b ? "#7a4a24" : "#d9a85a";
  let n = 76,
    o = "";
  const i = (e, t) => {
    ((n -= e), (o += t(n)));
  };
  return (
    i(
      9,
      (e) =>
        `<path d="M14 ${e}h72q2 0 2 3v2q0 4 -6 4h-64q-6 0 -6 -4v-2q0 -3 2 -3z" fill="${a}" stroke="${s}" stroke-width="1"/>`,
    ),
    "vi" === e.p &&
      i(
        9,
        (e) =>
          `<rect x="10" y="${e}" width="80" height="10" rx="5" fill="#6b3a22"/><path d="M18 ${e + 3}h16M44 ${e + 6}h14M66 ${e + 3}h14" stroke="#4a2414" stroke-width="2" stroke-linecap="round"/>`,
      ),
    "cr" === e.p &&
      i(
        10,
        (e) =>
          `<path d="M12 ${e + 5}q0 -6 10 -6h56q10 0 10 6q0 6 -10 6h-56q-10 0 -10 -6z" fill="#e8a540"/>${[22, 36, 52, 66, 78].map((t, a) => `<circle cx="${t}" cy="${e + 3 + (a % 2) * 3}" r="1.6" fill="#c2802a"/>`).join("")}`,
      ),
    t.includes("fr") &&
      i(
        3,
        (e) =>
          `<path d="M10 ${e}h80l-6 6l-4 -3l-8 7l-6 -4l-10 5l-6 -5l-10 6l-8 -6l-8 4l-6 -5z" fill="#ffcf3a"/>`,
      ),
    t.includes("ba") &&
      i(
        4,
        (e) =>
          `<path d="M12 ${e + 2}q8 -4 16 0t16 0t16 0t16 0t14 0" stroke="#b8452a" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M12 ${e + 2}q8 -4 16 0t16 0t16 0t16 0t14 0" stroke="#f2a080" stroke-width="1.4" fill="none"/>`,
      ),
    t.includes("la") &&
      i(
        4,
        (e) =>
          `<path d="M8 ${e + 3}q5 -6 10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t6 0" stroke="#5ac04a" stroke-width="5" fill="none" stroke-linecap="round"/>`,
      ),
    t.includes("to") &&
      i(
        5,
        (e) =>
          `<rect x="14" y="${e}" width="32" height="5" rx="2.5" fill="#e8402e"/><rect x="54" y="${e}" width="32" height="5" rx="2.5" fill="#e8402e"/><path d="M20 ${e + 2.5}h20M60 ${e + 2.5}h20" stroke="#ff9a8a" stroke-width="1" stroke-dasharray="2 3"/>`,
      ),
    t.includes("co") &&
      i(3, (e) =>
        [22, 40, 58, 74]
          .map(
            (t) =>
              `<ellipse cx="${t}" cy="${e + 1.5}" rx="7" ry="2.4" fill="#6aa83a"/><ellipse cx="${t}" cy="${e + 1.5}" rx="4" ry="1.2" fill="#a8d86a"/>`,
          )
          .join(""),
      ),
    t.includes("ke") &&
      i(
        2,
        (e) =>
          `<path d="M16 ${e + 1}q6 4 12 0t12 0t12 0t12 0t12 0t8 0" stroke="#e8352a" stroke-width="3.4" fill="none" stroke-linecap="round"/>`,
      ),
    i(
      22,
      (t) =>
        `<path d="M12 ${t + 22}q0 -22 38 -22q38 0 38 22z" fill="${a}" stroke="${s}" stroke-width="1"/><path d="M24 ${t + 9}q12 -7 26 -6" stroke="#fff" stroke-opacity=".5" stroke-width="3" fill="none" stroke-linecap="round"/>` +
        ("bn" === e.b
          ? [30, 42, 56, 66, 48, 38, 60]
              .map(
                (e, a) => `<ellipse cx="${e}" cy="${t + 6 + (a % 3) * 4}" rx="1.8" ry="1" fill="#f3e2b0"/>`,
              )
              .join("")
          : [32, 46, 60, 52, 40]
              .map(
                (e, a) => `<ellipse cx="${e}" cy="${t + 6 + (a % 2) * 5}" rx="1.8" ry="1" fill="#fff6dc"/>`,
              )
              .join("")),
    ),
    `<svg class="kzd" viewBox="0 ${n - 2} 100 ${80 - n}" aria-hidden="true">${o}</svg>`
  );
}
const kzFries = () =>
  2 === KZR
    ? kzMiso()
    : `<svg viewBox="0 0 40 44" aria-hidden="true">${[8, 13, 18, 23, 28, 32].map((e, t) => `<rect x="${e}" y="${4 + (t % 3) * 3}" width="4" height="22" rx="1.5" fill="#ffd34a" stroke="#e8a82a" stroke-width=".8" transform="rotate(${4 * (t - 2.5)} ${e} 26)"/>`).join("")}<path d="M6 18h28l-3 24h-22z" fill="#e8402e"/><path d="M14 26q6 6 12 0" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>`;
const kzDrink = () =>
  2 === KZR
    ? kzTea()
    : '<svg viewBox="0 0 40 44" aria-hidden="true"><path d="M22 2l-4 12" stroke="#ff6fa0" stroke-width="3" stroke-linecap="round"/><path d="M8 12h24l-3 30h-18z" fill="#fff"/><path d="M9 18h22l-2 22h-18z" fill="#7ac8ff"/><path d="M8 12h24" stroke="#c8d2e8" stroke-width="3" stroke-linecap="round"/><path d="M12 24h16" stroke="#fff" stroke-opacity=".6" stroke-width="2"/></svg>';
function kzIco(e) {
  if (2 === KZR || "ni mk sm th cv wa av oe se".split(" ").includes(e)) {
    const t = kzIcoSu(e);
    if (t) return t;
  }
  const t = (e) => `<svg viewBox="0 0 40 40" aria-hidden="true">${e}</svg>`;
  return (
    {
      bb: t(
        '<path d="M5 26q0 -18 15 -18q15 0 15 18z" fill="#f3cf8f" stroke="#d9a85a"/><rect x="5" y="27" width="30" height="7" rx="3" fill="#f3cf8f" stroke="#d9a85a"/><ellipse cx="15" cy="16" rx="1.6" ry="1" fill="#fff6dc"/><ellipse cx="23" cy="14" rx="1.6" ry="1" fill="#fff6dc"/>',
      ),
      bn: t(
        '<path d="M5 26q0 -18 15 -18q15 0 15 18z" fill="#a8703f" stroke="#7a4a24"/><rect x="5" y="27" width="30" height="7" rx="3" fill="#a8703f" stroke="#7a4a24"/><ellipse cx="14" cy="17" rx="1.6" ry="1" fill="#f3e2b0"/><ellipse cx="22" cy="13" rx="1.6" ry="1" fill="#f3e2b0"/><ellipse cx="26" cy="19" rx="1.6" ry="1" fill="#f3e2b0"/>',
      ),
      vi: t(
        '<ellipse cx="20" cy="22" rx="15" ry="9" fill="#e86a7a"/><path d="M10 20q5 -3 9 1M22 25q5 -3 9 0" stroke="#fff" stroke-opacity=".6" stroke-width="2" fill="none" stroke-linecap="round"/>',
      ),
      cr: t(
        '<path d="M6 22q0 -9 14 -9q14 0 14 9q0 8 -14 8q-14 0 -14 -8z" fill="#f6dcae"/><circle cx="14" cy="20" r="1.4" fill="#e0b880"/><circle cx="24" cy="24" r="1.4" fill="#e0b880"/>',
      ),
      la: t(
        '<path d="M20 34c-12 -2 -16 -14 -10 -24c4 4 8 3 10 -2c2 5 6 6 10 2c6 10 2 22 -10 24z" fill="#5ac04a"/><path d="M20 32v-20" stroke="#a8e890" stroke-width="2"/>',
      ),
      to: t(
        '<circle cx="20" cy="22" r="12" fill="#e8402e"/><path d="M14 11l6 3 6 -3 -3 5h-6z" fill="#4aa83a"/><ellipse cx="15" cy="19" rx="3" ry="2" fill="#fff" opacity=".4"/>',
      ),
      fr: t(
        '<path d="M5 30l15 -22 15 22z" fill="#ffcf3a"/><circle cx="18" cy="22" r="2" fill="#f2b42a"/><circle cx="24" cy="26" r="1.6" fill="#f2b42a"/>',
      ),
      ke: t(
        '<rect x="13" y="12" width="14" height="24" rx="5" fill="#e8352a"/><path d="M17 12v-5h6v5z" fill="#fff"/><rect x="15" y="20" width="10" height="7" rx="1.5" fill="#fff" opacity=".8"/>',
      ),
      mo: t(
        '<rect x="13" y="12" width="14" height="24" rx="5" fill="#ffcf2a"/><path d="M17 12v-5h6v5z" fill="#e8a82a"/><rect x="15" y="20" width="10" height="7" rx="1.5" fill="#fff" opacity=".8"/>',
      ),
      co: t(
        '<path d="M10 30q-4 -10 6 -18q8 -6 14 0q4 6 -4 14q-8 8 -16 4z" fill="#6aa83a"/><circle cx="17" cy="20" r="1.4" fill="#a8d86a"/><circle cx="22" cy="17" r="1.4" fill="#a8d86a"/><circle cx="16" cy="26" r="1.4" fill="#a8d86a"/>',
      ),
      ba: t(
        '<path d="M5 22q5 -6 10 0t10 0t10 0" stroke="#b8452a" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M5 22q5 -6 10 0t10 0t10 0" stroke="#f2a080" stroke-width="2" fill="none"/>',
      ),
      ph: t(
        '<rect x="3" y="18" width="34" height="12" rx="6" fill="#f0c27a"/><path d="M7 20h26" stroke="#d29a52" stroke-width="2"/>',
      ),
      pb: t(
        '<rect x="3" y="18" width="34" height="12" rx="6" fill="#e09a3a"/><path d="M8 21h24" stroke="#fff" stroke-opacity=".5" stroke-width="2" stroke-linecap="round"/>',
      ),
      sa: t(
        '<rect x="3" y="17" width="34" height="9" rx="4.5" fill="#ff9aa0"/><path d="M8 19h24" stroke="#fff" stroke-opacity=".5" stroke-width="1.6"/>',
      ),
      sv: t(
        '<rect x="3" y="17" width="34" height="9" rx="4.5" fill="#b8a46a"/><path d="M10 20l3 3M20 20l3 3M30 20l-3 3" stroke="#6a8a3a" stroke-width="1.6"/>',
      ),
      of: t(
        '<ellipse cx="20" cy="23" rx="12" ry="10" fill="#f2e2c8" stroke="#c9a070"/><path d="M20 13v-5" stroke="#6aa83a" stroke-width="2.4"/><path d="M14 22q6 -8 12 0" stroke="#c9a070" stroke-width="1.4" fill="none"/>',
      ),
      fx: t(
        `${[8, 13, 18, 23, 28, 12, 20, 26].map((e, t) => `<path d="M${e} ${20 + (t % 3) * 4}l5 ${t % 2 ? -3 : 3}" stroke="#ffcf3a" stroke-width="3" stroke-linecap="round"/>`).join("")}`,
      ),
      re: t(
        '<path d="M11 12h18v22q0 3 -3 3h-12q-3 0 -3 -3z" fill="#fff" fill-opacity=".7" stroke="#c8d2e8"/><path d="M12 18h16v15h-16z" fill="#4ab04a"/><rect x="10" y="8" width="20" height="5" rx="2" fill="#e8402e"/>',
      ),
      fries: t(
        '<path d="M10 14h20v22h-20z" fill="#d9c8a0"/><path d="M10 14l3 -5h14l3 5z" fill="#c9b080"/><path d="M14 22q6 4 12 0" stroke="#a88a50" stroke-width="2" fill="none"/>',
      ),
      drink: t(
        '<path d="M10 10h20l-3 26h-14z" fill="#fff" stroke="#c8d2e8"/><path d="M14 18h12" stroke="#c8d2e8" stroke-width="2"/>',
      ),
    }[e] || ""
  );
}
function kzGrill(e, t) {
  if (KZSU[e]) return kzGrillSu(e, t);
  const a = {
    vi: t ? "#6b3a22" : "#e86a7a",
    cr: t ? "#e8a540" : "#f6dcae",
    sa: t ? "#c2563a" : "#ff9aa0",
    sv: t ? "#8a6a3a" : "#b8a46a",
  }[e];
  return "vi" === e || "cr" === e
    ? `<svg viewBox="0 0 40 30" aria-hidden="true"><ellipse cx="20" cy="16" rx="16" ry="10" fill="${a}"/>${t ? '<path d="M10 12l6 8M18 10l6 8M26 10l6 8" stroke="#000" stroke-opacity=".25" stroke-width="2"/>' : ""}</svg>`
    : `<svg viewBox="0 0 40 30" aria-hidden="true"><rect x="3" y="10" width="34" height="10" rx="5" fill="${a}"/>${t ? '<path d="M10 11l3 8M20 11l3 8M30 11l-3 8" stroke="#000" stroke-opacity=".25" stroke-width="2"/>' : ""}</svg>`;
}
function kzBg(e) {
  if (2 === e) return kzBgSu();
  const t = 1 === e,
    a = [...Array(26)]
      .map(
        (e, a) =>
          `<circle cx="${(73 * a + 29) % 400}" cy="${(41 * a + 13) % (t ? 150 : 110)}" r="${1 + (a % 3) * 0.5}" fill="#fff" opacity="${0.5 + (a % 2) * 0.3}"/>`,
      )
      .join("");
  return t
    ? `<svg class="kzbg" viewBox="0 -70 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="kzn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e1240"/><stop offset="1" stop-color="#36307a"/></linearGradient></defs>\n<rect y="-70" width="400" height="400" fill="url(#kzn)"/>${a}<path d="M330 40a20 20 0 1 0 0 34a15 15 0 1 1 0 -34z" fill="#fff3c0"/>\n${[
        [0, 120, 60, 130],
        [50, 140, 50, 110],
        [96, 110, 70, 140],
        [234, 130, 60, 120],
        [300, 126, 60, 124],
        [352, 104, 60, 146],
      ]
        .map(
          ([e, t, a, s]) =>
            `<rect x="${e}" y="${t}" width="${a}" height="${s}" fill="#241e5a"/>${[...Array(6)].map((s, n) => `<rect x="${e + 8 + (n % 2) * (a / 2 - 4)}" y="${t + 10 + 22 * Math.floor(n / 2)}" width="10" height="12" fill="#ffd36b" opacity="${n % 3 ? 0.85 : 0.25}"/>`).join("")}`,
        )
        .join("")}\n<path d="M0 -20q100 30 200 6t200 8" stroke="#3a3060" stroke-width="2" fill="none"/>${[
        ...Array(13),
      ]
        .map((e, t) => {
          const a = 33 * t + 8,
            s = (10 * Math.sin(0.9 * t) - 20 + 12).toFixed(1),
            n = ["#ff8fc8", "#ffe27a", "#8fd8ff", "#a8ff9a"][t % 4];
          return `<circle cx="${a}" cy="${s}" r="9" fill="${n}" opacity=".25"/><circle cx="${a}" cy="${s}" r="3.6" fill="${n}"/>`;
        })
        .join(
          "",
        )}\n<path d="M70 96h260l-16 40h-228z" fill="#e8402e"/>${[...Array(8)].map((e, t) => `<path d="M${86 + 28 * t} 96h14l-2 40h-14z" fill="#fff3e0"/>`).join("")}<path d="M86 136q14 12 28 0t28 0t28 0t28 0t28 0t28 0t28 0t28 0z" fill="#e8402e"/>\n<g transform="translate(0 -40)"><rect x="116" y="58" width="168" height="36" rx="12" fill="#2a1a10" stroke="#ffd34a" stroke-width="3"/><rect x="116" y="58" width="168" height="36" rx="12" fill="none" stroke="#ffd34a" stroke-width="10" stroke-opacity=".18"/><text x="200" y="82" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="15" font-weight="700" fill="#fff0b0">Hot-dog de la Lune</text></g>\n<path d="M24 330v-160" stroke="#5a5480" stroke-width="5"/><circle cx="24" cy="166" r="8" fill="#ffe2a0"/><circle cx="24" cy="166" r="30" fill="#ffe2a0" opacity=".18"/>\n<path d="M0 236q100 -14 200 -4t200 -6v104h-400z" fill="#e8ecff"/></svg>`
    : `<svg class="kzbg" viewBox="0 -70 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="kzw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2160"/><stop offset="1" stop-color="#4b3a8c"/></linearGradient><linearGradient id="kzs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#121848"/><stop offset="1" stop-color="#3a3a8a"/></linearGradient><radialGradient id="kzl"><stop offset="0" stop-color="#ffe2a0" stop-opacity=".55"/><stop offset="1" stop-color="#ffe2a0" stop-opacity="0"/></radialGradient><clipPath id="kzc1"><rect x="16" y="70" width="110" height="120" rx="55"/></clipPath><clipPath id="kzc2"><rect x="274" y="70" width="110" height="120" rx="55"/></clipPath></defs>\n<rect y="-70" width="400" height="400" fill="url(#kzw)"/>${[...Array(12)].map((e, t) => `<path d="M${36 * t} -70v400" stroke="#fff" stroke-opacity=".04" stroke-width="14"/>`).join("")}\n<rect x="16" y="70" width="110" height="120" rx="55" fill="url(#kzs)"/><rect x="274" y="70" width="110" height="120" rx="55" fill="url(#kzs)"/>\n<g clip-path="url(#kzc1)">${a}<circle cx="60" cy="104" r="14" fill="#fff6c8"/><path d="M16 170q30 -18 60 -6t50 -4v40h-110z" fill="#e8ecff"/></g>\n<g clip-path="url(#kzc2)"><g transform="translate(258 0)">${a}</g><path d="M274 166q30 -14 60 -4t50 -6v40h-110z" fill="#e8ecff"/><path d="M330 150l10 -24 10 24z" fill="#3a6a5a"/></g>\n<rect x="16" y="70" width="110" height="120" rx="55" fill="none" stroke="#8a7ad8" stroke-width="5"/><rect x="274" y="70" width="110" height="120" rx="55" fill="none" stroke="#8a7ad8" stroke-width="5"/>\n<g transform="translate(0 -30)"><rect x="110" y="16" width="180" height="48" rx="14" fill="#1a1450" stroke="#ff8fc8" stroke-width="3"/><rect x="110" y="16" width="180" height="48" rx="14" fill="none" stroke="#ff8fc8" stroke-width="10" stroke-opacity=".18"/>\n<text x="200" y="37" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="16" font-weight="700" fill="#ffd6ec">Burger</text><text x="200" y="55" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="11" fill="#ffe9a0" letter-spacing="2.5">DES ÉTOILES</text></g>\n${[150, 250].map((e) => `<path d="M${e} 34v56" stroke="#8a7ad8" stroke-width="2"/><path d="M${e - 14} 98q14 -16 28 0z" fill="#ffcf6a"/><circle cx="${e}" cy="104" r="44" fill="url(#kzl)"/>`).join("")}\n${[...Array(6)].map((e, t) => `<circle cx="${160 + 16 * t}" cy="174" r="5" fill="${["#ff8fc8", "#ffe27a", "#8fd8ff"][t % 3]}" opacity=".85"/>`).join("")}<rect x="150" y="180" width="100" height="5" rx="2" fill="#8a7ad8"/>\n<rect x="0" y="236" width="400" height="94" fill="#3a2c78"/></svg>`;
}
function kzLv(e) {
  const t = Math.max(0, Math.min(29, e)),
    a = Math.floor(t / 10),
    s = 1 === a,
    n = t % 10,
    o = kzRng(7919 * t + 57),
    i = [];
  for (let e = 10 * a; e <= t; e++) i.push(...KZU[e]);
  const r = (e) => i.filter((t) => KZI[t].k === e),
    l = r("b"),
    c = r("p"),
    d = r("t"),
    f = KZU[t],
    u = n < 1 ? 1 : n < 4 ? 2 : 3,
    h = n < 2 ? 1 : n < 5 ? 2 : 3,
    p = n < 5 ? 2 : 3,
    m = 3 + Math.floor(0.6 * n) + (a ? 1 : 0),
    b = 9 === n ? 0 : 1,
    g = (n < 5 ? 2 : 1.7) * (a ? 0.95 : 1),
    E = (e) => e[Math.floor(o() * e.length)],
    y = [];
  for (let e = 0; e < m; e++) {
    const a = f.find((e) => l.includes(e)),
      s = f.find((e) => c.includes(e)),
      r = a && o() < 0.5 ? a : E(l),
      h = s && o() < 0.5 ? s : E(c),
      p = Math.min(d.length, 1 + Math.floor(n / 2.2)),
      m = d.length ? Math.floor(o() * (p + 1)) : 0,
      b = [],
      v = d.slice(),
      A = f.find((e) => d.includes(e));
    for (A && m && o() < 0.6 && (b.push(A), v.splice(v.indexOf(A), 1)); b.length < m && v.length;)
      b.push(v.splice(Math.floor(o() * v.length), 1)[0]);
    const S = i.includes("fries") && o() < (f.includes("fries") ? 0.75 : 0.5),
      x = i.includes("drink") && o() < 0.75,
      M = 4 + b.length + (S ? 2 : 0) + (x ? 2 : 0);
    y.push({
      o: { b: r, p: h, t: b.sort() },
      fries: S,
      drink: x,
      lk: (7 * t + 3 * e) % KZL.length,
      p: Math.round(M * (g + 0.8 * (u - 1)) + 4),
    });
  }
  return { L: t, hd: s, rs: a, r: n, u: i, seats: u, plates: h, grills: p, nc: m, allow: b, Q: y };
}
function pCuis(e) {
  const t = kzLv(lv),
    a = t.hd,
    s = 2 === t.rs;
  ((KZR = t.rs), (KZI.fries.n = s ? "soupe miso" : "frites"), (KZI.drink.n = s ? "thé vert" : "boisson"));
  try {
    kzMu.style(t.rs);
  } catch (e) {}
  const n = {
    q: t.Q.map((e, t) => ({ ...e, id: t })),
    seat: Array(t.seats).fill(null),
    pl: Array.from({ length: t.plates }, () => null),
    sel: 0,
    gr: Array(t.grills).fill(null),
    fr: { n: 0, c: null },
    dr: { n: 0, c: null },
    hold: null,
    sv: 0,
    ms: 0,
    n: 0,
  };
  let o = null,
    i = !1,
    r = (0 === t.L && !st.get("kz:t", 0)) || (20 === t.L && !st.get("kz:t2", 0)),
    l = "";
  snap = () => null;
  const c = ++KZRUN,
    d = (e, t) =>
      setTimeout(() => {
        c === KZRUN && playing && "cuisine" === cur && document.getElementById("kzg") && e();
      }, t),
    f = (e) => {
      if (n.seat[e] || !n.q.length || i) return;
      const t = n.q.shift();
      ((n.seat[e] = { ...t, m: t.p, got: { o: 0, fries: 0, drink: 0 }, st: "in" }),
        sfx(660, 0.08),
        v(),
        d(() => {
          const t = n.seat[e];
          t && "in" === t.st && ((t.st = "wait"), v());
        }, 950));
    },
    u = (e) =>
      [e.b, e.p, ...e.t]
        .filter(Boolean)
        .map((e) => KZI[e].n)
        .join(", "),
    h = (e) =>
      "ph" === e.b || "pb" === e.b
        ? "un hot-dog"
        : "ni" === e.b
          ? "des nigiris"
          : "mk" === e.b
            ? "des makis"
            : "un burger",
    p = (e, t) => {
      const a = n.seat[e];
      a &&
        ((a.st = t ? "out" : "sad"),
        v(),
        d(
          () => {
            ((n.seat[e] = null), v(), m(), d(() => f(e), 450));
          },
          t ? 950 : 1150,
        ));
    },
    m = () => {
      n.q.length ||
        n.seat.some(Boolean) ||
        i ||
        ((i = !0),
        d(() => {
          n.ms <= t.allow ? win() : b();
        }, 500));
    },
    b = () => {
      const e = $("#kzov");
      e &&
        ((e.hidden = !1),
        (e.innerHTML = `<div class="kzbox"><h2>Le restaurant ferme</h2><p>${n.ms} client${n.ms > 1 ? "s sont repartis" : " est reparti"} le ventre vide. ${t.allow ? "Un seul départ est permis à ce niveau." : "À ce niveau, chaque client doit être servi."}</p><p class="kzsm">Astuce : lance la cuisson dès qu’un client arrive, et prépare plusieurs plats à la fois.</p><button class="btn" data-a="kzR">Recommencer</button></div>`));
    },
    g = () => {
      (n.n++,
        n.seat.forEach((e, t) => {
          e &&
            "wait" === e.st &&
            (e.p--,
            e.p <= 0 && (n.ms++, msg(KZL[e.lk].n + " est reparti sans manger…"), sfx(220, 0.3), p(t, !1)));
        }));
    },
    E = () => n.pl[n.sel];
  Object.assign(act, {
    kzR: () => pCuis(void 0),
    kzX: () => {
      ((r = !1), st.set(20 === t.L ? "kz:t2" : "kz:t", 1), v());
    },
    kzP: (e) => {
      ((n.sel = Math.max(0, Math.min(n.pl.length - 1, +e || 0))), (n.hold = null), v());
    },
    kzT: () => {
      if (!i) {
        if (!E()) return msg("Cette assiette est déjà vide.");
        ((n.pl[n.sel] = null), (n.hold = null), (o = null), sfx(260, 0.15), g(), v());
      }
    },
    kzI: (e) => {
      if (i || !t.u.includes(e)) return;
      const r = KZI[e];
      if ("p" === r.k) {
        const t = n.gr.findIndex((e) => !e);
        return t < 0
          ? msg(
              s
                ? "La planche est pleine : utilise d’abord le poisson découpé."
                : "Le grill est plein : sers d’abord ce qui est cuit.",
            )
          : ((n.gr[t] = { id: e, t0: Date.now() }),
            (o = null),
            sfx(330, 0.2),
            g(),
            v(),
            void d(() => v(), 1650));
      }
      if ("fries" === e)
        return n.fr.c
          ? msg(s ? "La soupe chauffe déjà." : "La friteuse est déjà en marche.")
          : n.fr.n >= 4
            ? msg(s ? "Il y a déjà assez de bols de soupe." : "Le bac à frites est plein.")
            : ((n.fr.c = 1),
              (o = null),
              sfx(300, 0.2),
              g(),
              v(),
              void d(() => {
                ((n.fr.c = null), (n.fr.n = Math.min(4, n.fr.n + 2)), sfx(620, 0.15), v());
              }, 2e3));
      if ("drink" === e)
        return n.dr.c
          ? msg("La fontaine remplit déjà un verre.")
          : n.dr.n >= 3
            ? msg("Il y a déjà assez de boissons.")
            : ((n.dr.c = 1),
              (o = null),
              sfx(500, 0.15),
              g(),
              v(),
              void d(() => {
                ((n.dr.c = null), n.dr.n++, v());
              }, 1500));
      const c = E();
      return (
        (n.hold = null),
        "b" === r.k
          ? c
            ? msg("Cette assiette est occupée : touche une assiette vide.")
            : ((n.pl[n.sel] = { b: e, p: null, t: [] }),
              (l = n.sel + ""),
              (o = null),
              sfx(520, 0.12),
              g(),
              v())
          : c
            ? c.t.includes(e)
              ? msg("Il y a déjà " + r.n + " sur ce plat.")
              : (c.t.push(e), c.t.sort(), (l = n.sel + ""), (o = null), sfx(560, 0.12), g(), void v())
            : msg(
                s
                  ? "Commence par du riz ou une feuille d’algue."
                  : a
                    ? "Commence par un pain à hot-dog."
                    : "Commence par un pain à burger.",
              )
      );
    },
    kzG: (e) => {
      if (i) return;
      const t = n.gr[+e];
      if (!t)
        return msg(
          s
            ? "Touche un poisson dans les bacs pour le découper."
            : "Touche " + (a ? "une saucisse" : "une viande") + " dans les bacs pour la mettre à cuire.",
        );
      if (Date.now() - t.t0 < 1600)
        return msg(s ? "Le couteau découpe de fines tranches…" : "Encore un petit instant, ça grésille…");
      const r = E();
      return (
        (n.hold = null),
        r
          ? r.p
            ? msg(
                s ? "Ce plat a déjà son poisson." : "Ce plat a déjà sa " + (a ? "saucisse" : "viande") + ".",
              )
            : ((r.p = t.id), (n.gr[+e] = null), (l = n.sel + ""), (o = null), sfx(620, 0.15), g(), void v())
          : msg(s ? "Pose d’abord le riz ou l’algue sur l’assiette." : "Pose d’abord un pain sur l’assiette.")
      );
    },
    kzF: () => {
      if (!i) {
        if (!n.fr.n)
          return msg(
            s
              ? n.fr.c
                ? "La soupe chauffe…"
                : "Touche le pot de miso pour préparer des bols."
              : n.fr.c
                ? "Les frites dorent…"
                : "Touche le sac de frites pour en faire.",
          );
        ((n.hold = "fries" === n.hold ? null : "fries"), v());
      }
    },
    kzD: () => {
      if (!i) {
        if (!n.dr.n)
          return msg(
            s
              ? n.dr.c
                ? "Le thé infuse…"
                : "Touche la théière pour servir un thé."
              : n.dr.c
                ? "Le verre se remplit…"
                : "Touche le gobelet pour préparer une boisson.",
          );
        ((n.hold = "drink" === n.hold ? null : "drink"), v());
      }
    },
    kzC: (e) => {
      if (i) return;
      const t = n.seat[+e];
      if (!t || "wait" !== t.st) return;
      const a = KZL[t.lk].n;
      if (n.hold) {
        const e = n.hold,
          o = "fries" === e ? n.fr : n.dr;
        if (!t[e] || t.got[e])
          return msg(
            a +
              " n’a pas demandé " +
              ("fries" === e ? (s ? "de soupe" : "de frites") : s ? "de thé" : "de boisson") +
              ".",
          );
        ((t.got[e] = 1), o.n--, o.n || (n.hold = null), sfx(700, 0.15));
      } else {
        const e = E();
        if (!e) return msg(a + " voudrait " + h(t.o) + " : " + u(t.o) + ".");
        if (t.got.o) return msg("Son plat est déjà servi.");
        if (e.b !== t.o.b || e.p !== t.o.p || e.t.join() !== t.o.t.join())
          return msg("Oups, ce n’est pas ma commande…");
        ((t.got.o = 1), (n.pl[n.sel] = null), sfx(784, 0.25));
      }
      ((o = null),
        g(),
        ((e) => e.got.o && (!e.fries || e.got.fries) && (!e.drink || e.got.drink))(t)
          ? (n.sv++, vib(15), sfx(880, 0.3), p(+e, !0))
          : v());
    },
    hint: () => {
      if (i) return;
      const e = y();
      if (!e) return msg("Tout est en route : patiente un instant.");
      spend(1) && ((o = e), v());
    },
  });
  const y = () => {
    const e = n.seat
      .map((e, t) => e && "wait" === e.st && { c: e, i: t })
      .filter(Boolean)
      .sort((e, t) => e.c.p - t.c.p);
    for (const { c: t, i: a } of e) {
      if (!t.got.o) {
        const e = t.o;
        let s = n.pl.findIndex(
          (t) => t && t.b === e.b && (!t.p || t.p === e.p) && t.t.every((t) => e.t.includes(t)),
        );
        if ((s < 0 && (s = n.pl.findIndex((e) => !e)), s < 0)) continue;
        ((n.sel = s), (n.hold = null));
        const o = n.pl[s];
        if (!o) return "I" + e.b;
        if (!o.p) {
          const t = n.gr.findIndex((t) => t && t.id === e.p && Date.now() - t.t0 >= 1600);
          if (t >= 0) return "G" + t;
          if (!n.gr.some((t) => t && t.id === e.p)) return "I" + e.p;
        }
        const i = e.t.find((e) => !o.t.includes(e));
        if (i) return "I" + i;
        if (o.p) return "C" + a;
        continue;
      }
      if (!t.fries || t.got.fries)
        if (!t.drink || t.got.drink);
        else {
          if (n.dr.n) return ((n.hold = "drink"), "C" + a);
          if (!n.dr.c) return "Idrink";
        }
      else {
        if (n.fr.n) return ((n.hold = "fries"), "C" + a);
        if (!n.fr.c) return "Ifries";
      }
    }
    return null;
  };
  ((app.innerHTML = `<div class="kzg ${["bu", "hd", "su"][t.rs]}" id="kzg"><div class="kzt"><button class="back" data-a="back" data-v="hub">‹ Cuisine</button><b>Niveau ${t.L + 1}</b><div class="kztr"><button class="hb hintb" data-a="hint" aria-label="Indice : coûte 1 bulle">${HBI(1)}</button><div class="chip">🫧 ${FLX()}</div></div></div><div class="kzsc">${kzBg(t.rs)}${kzAmb(t.rs, 3 * t.L)}<div class="kzcu" id="kzcu"></div><div class="kzct"></div></div><p class="m kzm" id="m" role="status" aria-live="polite"></p><div class="kzk" id="kzk"></div><div class="kzov" id="kzov" hidden></div></div>`),
    ($("#nav").hidden = !0),
    (mt = "m"));
  const v = () => {
    const e = $("#kzcu"),
      a = $("#kzk");
    if (!e || !a) return;
    const i = (e) => (o === e ? " hn" : ""),
      c = Date.now();
    (e.style.setProperty("--n", n.seat.length),
      (e.innerHTML = n.seat
        .map((e, t) => {
          if (!e) return '<div class="kzs"></div>';
          const a = KZL[e.lk],
            s = "wait" === e.st && e.p / e.m < 0.34,
            n = "out" === e.st ? "happy" : "sad" === e.st ? "sad" : s ? "lo" : "wait";
          return `<div class="kzs"><button class="kzp ${e.st}${s ? " lo" : ""}${i("C" + t)}" data-a="kzC" data-v="${t}" aria-label="${a.n} voudrait ${h(e.o)} : ${u(e.o)}${e.fries ? ", des frites" : ""}${e.drink ? ", une boisson" : ""}">\n<span class="kzb${e.got.o ? " ok" : ""}"><span class="kzbd">${kzDish(e.o)}</span><span class="kzbi">${[e.o.b, e.o.p, ...e.o.t].map((e) => `<i>${kzIco(e)}</i>`).join("")}</span>${e.fries || e.drink ? `<span class="kzbs">${e.fries ? `<i class="${e.got.fries ? "ok" : ""}">${kzFries()}</i>` : ""}${e.drink ? `<i class="${e.got.drink ? "ok" : ""}">${kzDrink()}</i>` : ""}</span>` : ""}</span>\n<span class="kzgy">${kzGuy(a, n, e.id)}</span><span class="kzn">${a.n}</span><span class="kzpt"><i style="width:${Math.max(0, (e.p / e.m) * 100).toFixed(0)}%"></i></span>${"out" === e.st ? '<span class="kzh">♥</span><span class="kzh h2">♥</span>' : ""}</button></div>`;
        })
        .join("")),
      (a.innerHTML = `${r ? `<div class="kznote"><span>${s ? "Bienvenue à bord ! Pose du riz ou une feuille d’algue sur l’assiette, puis touche un poisson : il se découpe sur la planche. Quand les tranches sont prêtes, touche-les, ajoute les garnitures et sers le client." : "Touche un pain pour le poser sur l’assiette, puis la viande pour la cuire sur le grill. Quand elle est dorée, touche-la, ajoute les garnitures demandées, puis touche le client pour le servir. Pas de chrono !"}</span><button data-a="kzX">OK</button></div>` : ""}\n<div class="kzst"><span>Servis <b>${n.sv}</b> / ${t.nc}</span><span>${t.allow ? "Départ permis : <b>" + Math.max(0, t.allow - n.ms) + "</b>" : "Aucun départ permis"}</span></div>\n<div class="kzrow"><div class="kzgr">${n.gr
        .map((e, t) => {
          const a = e && c - e.t0 >= 1600;
          return `<button class="kzgs${e ? (a ? " ok" : " ck") : ""}${i("G" + t)}" data-a="kzG" data-v="${t}" aria-label="${s ? "Planche" : "Grill"} ${t + 1}${e ? (a ? " : " + KZI[e.id].n + " cuite" : " : en cuisson") : " : libre"}">${e ? kzGrill(e.id, a) : ""}${e && !a ? '<i class="kzsm1"></i><i class="kzsm1 s2"></i>' : ""}</button>`;
        })
        .join(
          "",
        )}</div>\n${t.u.includes("fries") ? `<button class="kzfr${"fries" === n.hold ? " on" : ""}${n.fr.c ? " ck" : ""}" data-a="kzF" aria-label="${KZI.fries.n} prêtes : ${n.fr.n}"><span class="kzfi">${kzFries()}</span><b>${n.fr.n}</b></button>` : ""}${t.u.includes("drink") ? `<button class="kzfr${"drink" === n.hold ? " on" : ""}${n.dr.c ? " ck" : ""}" data-a="kzD" aria-label="${KZI.drink.n} prêtes : ${n.dr.n}"><span class="kzfi">${kzDrink()}</span><b>${n.dr.n}</b></button>` : ""}</div>\n<div class="kzpl">${n.pl.map((e, t) => `<button class="kzpa${n.sel !== t || n.hold ? "" : " on"}" data-a="kzP" data-v="${t}" aria-label="Assiette ${t + 1}${e ? " : " + u(e) : " : vide"}"><span class="kzdi${l === t + "" ? " pop" : ""}">${e ? kzDish(e) : ""}</span></button>`).join("")}<button class="kztr2" data-a="kzT" aria-label="Jeter le contenu de l’assiette">🗑</button></div>\n<div class="kzin">${t.u.map((e) => `<button class="kzi k${KZI[e].k}${i("I" + e)}" data-a="kzI" data-v="${e}"><span>${kzIco(e)}</span><small>${KZI[e].n}</small></button>`).join("")}</div>`),
      (l = ""));
  };
  (v(), n.seat.forEach((e, t) => d(() => f(t), 350 + 650 * t)));
}
var KZR = 0;
const KZSU = { sm: "#ff8a5a", th: "#d8304a", cv: "#ff9a6a" };
function kzSushi(e) {
  const t = e.t || [];
  let a = "";
  return "ni" === e.b
    ? ([28, 72].forEach((s) => {
        if (
          ((a += `<ellipse cx="${s}" cy="36" rx="19" ry="9" fill="#fbf8f0" stroke="#e4dccb"/><path d="M${s - 10} 36q2 -2 4 0M${s + 2} 39q2 -2 4 0M${s - 4} 41q2 -2 4 0" stroke="#e4dccb" stroke-width="1" fill="none"/>`),
          e.p)
        ) {
          const t = KZSU[e.p];
          a +=
            `<path d="M${s - 21} 31q21 -16 42 0q-6 6 -21 6t-21 -6z" fill="${t}"/>` +
            ("th" === e.p
              ? `<path d="M${s - 12} 28q12 -6 24 0" stroke="#ff7a8a" stroke-opacity=".5" stroke-width="2" fill="none"/>`
              : `<path d="M${s - 14} 29l6 -6M${s - 4} 27l6 -6M${s + 6} 28l6 -5" stroke="#fff" stroke-opacity=".75" stroke-width="2" stroke-linecap="round"/>`) +
            ("cv" === e.p ? `<path d="M${s + 19} 30l7 -5 -1 8z" fill="#e8582e"/>` : "");
        }
        (t.includes("av") &&
          (a += `<path d="M${s - 12} 24q12 -8 24 0q-12 4 -24 0z" fill="#9ad05a" stroke="#4a8a2a"/>`),
          t.includes("oe") &&
            (a += [-8, -3, 2, 7, -5, 0, 5]
              .map(
                (e, a) =>
                  `<circle cx="${s + e}" cy="${(a < 4 ? 22 : 19) - (t.includes("av") ? 3 : 0)}" r="2.4" fill="#ff7a2a" stroke="#d8501a" stroke-width=".5"/>`,
              )
              .join("")),
          t.includes("se") &&
            (a += [-10, -4, 3, 9]
              .map(
                (e, t) => `<ellipse cx="${s + e}" cy="${30 - (t % 2) * 2}" rx="1.3" ry=".8" fill="#fff6dc"/>`,
              )
              .join("")));
      }),
      t.includes("wa") && (a += '<path d="M46 44q4 -6 8 0q-4 3 -8 0z" fill="#8ad05a"/>'),
      `<svg class="kzd" viewBox="0 8 100 42" aria-hidden="true">${a}</svg>`)
    : ([20, 50, 80].forEach((s) => {
        ((a += `<ellipse cx="${s}" cy="40" rx="14" ry="4" fill="#000" opacity=".15"/><circle cx="${s}" cy="30" r="14" fill="#1f2a24"/><circle cx="${s}" cy="30" r="11" fill="#fbf8f0"/>`),
          e.p && (a += `<circle cx="${s - (t.includes("av") ? 2 : 0)}" cy="30" r="5" fill="${KZSU[e.p]}"/>`),
          t.includes("av") && (a += `<path d="M${s + 2} 25q5 3 3 9l-3 -1z" fill="#9ad05a"/>`),
          t.includes("oe") &&
            (a += [-6, -2, 2, 6]
              .map((e) => `<circle cx="${s + e}" cy="17.5" r="2.3" fill="#ff7a2a"/>`)
              .join("")),
          t.includes("se") &&
            (a += [-6, 0, 6]
              .map(
                (e) =>
                  `<ellipse cx="${s + e}" cy="${23 + Math.abs(e) / 3}" rx="1.2" ry=".7" fill="#e8d8a8"/>`,
              )
              .join("")));
      }),
      t.includes("wa") && (a += '<path d="M86 46q4 -6 8 0q-4 3 -8 0z" fill="#8ad05a"/>'),
      `<svg class="kzd" viewBox="0 10 100 40" aria-hidden="true">${a}</svg>`);
}
const kzMiso = () =>
  '<svg viewBox="0 0 40 44" aria-hidden="true"><path d="M20 4q-3 4 0 8M26 6q-3 4 0 8" stroke="#fff" stroke-opacity=".6" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M4 20h32q-2 18 -16 18t-16 -18z" fill="#a8302a"/><ellipse cx="20" cy="20" rx="16" ry="4" fill="#d9a85a"/><rect x="12" y="18" width="5" height="3" fill="#fff"/><path d="M22 19h6" stroke="#4aa83a" stroke-width="2"/></svg>';
const kzTea = () =>
  '<svg viewBox="0 0 40 44" aria-hidden="true"><path d="M17 6q-3 4 0 8M23 4q-3 4 0 8" stroke="#fff" stroke-opacity=".6" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M9 16h22l-2 22q-1 3 -4 3h-10q-3 0 -4 -3z" fill="#e8e0d0"/><ellipse cx="20" cy="17" rx="11" ry="3" fill="#8ac05a"/><path d="M11 26h18" stroke="#6a8aa8" stroke-width="2"/></svg>';
const kzIcoSu = (e) => {
  const t = (e) => `<svg viewBox="0 0 40 40" aria-hidden="true">${e}</svg>`;
  return {
    ni: t(
      '<ellipse cx="20" cy="24" rx="15" ry="9" fill="#fbf8f0" stroke="#e4dccb"/><path d="M12 23q2 -2 4 0M20 27q2 -2 4 0M24 21q2 -2 4 0" stroke="#d8cfb8" fill="none"/>',
    ),
    mk: t(
      '<rect x="7" y="9" width="26" height="22" rx="2" fill="#1f2a24"/><path d="M10 13h20M10 20h20M10 27h20" stroke="#3a4a3a" stroke-width="1.5"/>',
    ),
    sm: t(
      '<path d="M5 26q15 -16 30 -4q-2 6 -15 7t-15 -3z" fill="#ff8a5a"/><path d="M12 24l5 -5M18 24l5 -5M24 25l5 -5" stroke="#fff" stroke-opacity=".75" stroke-width="2"/>',
    ),
    th: t(
      '<rect x="6" y="14" width="28" height="15" rx="4" fill="#d8304a"/><path d="M10 19h20" stroke="#ff7a8a" stroke-opacity=".6" stroke-width="2"/>',
    ),
    cv: t(
      '<path d="M8 26q2 -14 16 -14q8 0 8 6q0 4 -6 4q-6 0 -8 6z" fill="#ff9a6a"/><path d="M14 16l2 8M20 13l1 8M26 14l-1 6" stroke="#fff" stroke-opacity=".6" stroke-width="1.6"/><path d="M8 26l-4 4 6 1z" fill="#e8582e"/>',
    ),
    wa: t(
      '<path d="M10 28q4 -16 10 -16t10 16q-10 4 -20 0z" fill="#8ad05a"/><path d="M16 22q4 -6 8 0" stroke="#bfe890" stroke-width="2" fill="none"/>',
    ),
    av: t(
      '<path d="M20 6c9 0 13 12 13 18c0 7 -6 11 -13 11s-13 -4 -13 -11c0 -6 4 -18 13 -18z" fill="#4a8a2a"/><path d="M20 9c7 0 10 10 10 15c0 5 -4 8 -10 8s-10 -3 -10 -8c0 -5 3 -15 10 -15z" fill="#bfe08a"/><circle cx="20" cy="25" r="5" fill="#8a5a30"/>',
    ),
    oe: t(
      `<path d="M6 22h28q-2 12 -14 12t-14 -12z" fill="#5a4a8a"/>${[
        [12, 20],
        [17, 18],
        [22, 19],
        [27, 20],
        [15, 15],
        [20, 14],
        [25, 16],
      ]
        .map(([e, t]) => `<circle cx="${e}" cy="${t}" r="3" fill="#ff7a2a"/>`)
        .join("")}`,
    ),
    se: t(
      `<path d="M10 14h20v18q0 3 -3 3h-14q-3 0 -3 -3z" fill="#fff" fill-opacity=".7" stroke="#c8d2e8"/>${[
        [15, 24],
        [20, 28],
        [25, 22],
        [18, 20],
        [23, 30],
      ]
        .map(([e, t]) => `<ellipse cx="${e}" cy="${t}" rx="1.8" ry="1" fill="#d9c08a"/>`)
        .join("")}<rect x="9" y="9" width="22" height="5" rx="2" fill="#2a2a3a"/>`,
    ),
    fries: t(
      '<path d="M6 18h28q-2 14 -14 14t-14 -14z" fill="#a8302a"/><ellipse cx="20" cy="18" rx="14" ry="3.5" fill="#d9a85a"/>',
    ),
    drink: t(
      '<path d="M8 12h24q0 12 -6 14l-2 8h-8l-2 -8q-6 -2 -6 -14z" fill="#3a6a5a"/><path d="M30 14q6 0 5 6t-6 4" stroke="#3a6a5a" stroke-width="3" fill="none"/>',
    ),
  }[e];
};
function kzGrillSu(e, t) {
  const a = KZSU[e];
  return t
    ? `<svg viewBox="0 0 40 30" aria-hidden="true">${[8, 18, 28].map((e, t) => `<path d="M${e - 7} ${19 - t}q7 -8 14 0q-2 4 -7 4t-7 -4z" fill="${a}" stroke="#fff" stroke-opacity=".5"/>`).join("")}</svg>`
    : `<svg viewBox="0 0 40 30" aria-hidden="true"><path d="M4 18q16 -14 32 -2q-2 6 -16 7t-16 -5z" fill="${a}"/><path d="M10 16l4 -4M16 16l4 -4M22 17l4 -4" stroke="#fff" stroke-opacity=".6" stroke-width="1.6"/></svg>`;
}
function kzBgSu() {
  const e = (e, t) =>
      `<path d="M${e} ${t - 24}v10" stroke="#3a2a1a" stroke-width="2"/><circle cx="${e}" cy="${t}" r="30" fill="#ffc870" opacity=".16"/><circle cx="${e}" cy="${t}" r="14" fill="#ffcf7a"/><circle cx="${e - 4}" cy="${t - 4}" r="5" fill="#fff6d0" opacity=".8"/>`,
    t = (e, t) =>
      `<path d="M${e} ${t - 16}v4" stroke="#3a2a1a" stroke-width="2"/><rect x="${e - 9}" y="${t - 12}" width="18" height="4" rx="1" fill="#2a1a10"/><ellipse cx="${e}" cy="${t + 4}" rx="11" ry="14" fill="#e8402e"/><path d="M${e - 10} ${t - 2}h20M${e - 11} ${t + 4}h22M${e - 10} ${t + 10}h20" stroke="#b02a1e" stroke-width="1.2"/><rect x="${e - 9}" y="${t + 17}" width="18" height="4" rx="1" fill="#2a1a10"/><circle cx="${e}" cy="${t + 4}" r="22" fill="#ff7a5a" opacity=".14"/>`;
  return `<svg class="kzbg" viewBox="0 -70 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="kzus" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c1034"/><stop offset=".6" stop-color="#2a2a6a"/><stop offset="1" stop-color="#4a3a7a"/></linearGradient><linearGradient id="kzuw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a3a5a"/><stop offset="1" stop-color="#0c1c34"/></linearGradient><linearGradient id="kzut" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7af0e0" stop-opacity=".75"/><stop offset="1" stop-color="#2aa8b8" stop-opacity=".75"/></linearGradient></defs>\n<rect y="-70" width="400" height="400" fill="url(#kzus)"/>${[...Array(34)].map((e, t) => `<circle cx="${(73 * t + 29) % 400}" cy="${((41 * t + 13) % 200) - 60}" r="${0.8 + (t % 3) * 0.5}" fill="#fff" opacity="${0.45 + (t % 2) * 0.35}"/>`).join("")}<circle cx="300" cy="10" r="16" fill="#fff3c8"/><circle cx="300" cy="10" r="40" fill="#fff3c8" opacity=".1"/>\n<path d="M0 150l30 -26 22 10 26 -30 30 34 20 -8 20 20z" fill="#1c2a44"/><path d="M60 118q-6 -18 2 -26M62 96q-10 -4 -16 2M62 96q8 -6 14 0M62 96q0 -8 6 -12" stroke="#1c2a44" stroke-width="3" fill="none"/><path d="M250 150l40 -36 30 16 40 -24 40 44z" fill="#1c2a44"/><rect x="200" y="132" width="40" height="8" fill="#2a3a54"/><rect x="214" y="122" width="12" height="10" fill="#2a3a54"/><circle cx="220" cy="126" r="2" fill="#ffd36b"/>\n<rect x="0" y="150" width="400" height="90" fill="url(#kzuw)"/>${[...Array(9)].map((e, t) => `<path d="M${280 + (t % 3) * 10 - 2 * t} ${158 + 8 * t}h${30 - 2 * t}" stroke="#fff3c8" stroke-opacity="${0.5 - 0.04 * t}" stroke-width="2.4" stroke-linecap="round"/>`).join("")}${[...Array(10)].map((e, t) => `<path d="M${(47 * t) % 400} ${170 + ((23 * t) % 60)}q8 -4 16 0" stroke="#7ab0d8" stroke-opacity=".35" stroke-width="1.6" fill="none"/>`).join("")}\n<rect x="10" y="-70" width="16" height="306" fill="#5a3a24"/><rect x="374" y="-70" width="16" height="306" fill="#5a3a24"/><rect x="0" y="-34" width="400" height="20" fill="#7a4a2a"/><path d="M0 -14h400" stroke="#3a2414" stroke-width="3"/>${[...Array(16)].map((e, t) => `<circle cx="${12 + 25 * t}" cy="-8" r="2.4" fill="#ff7ac8"/><circle cx="${12 + 25 * t}" cy="-8" r="6" fill="#ff7ac8" opacity=".25"/>`).join("")}\n<path d="M165 -14v18M235 -14v18" stroke="#3a2a1a" stroke-width="2"/><rect x="150" y="4" width="100" height="26" rx="4" fill="#1a1020" stroke="#3a2a3a" stroke-width="2"/><text x="200" y="23" text-anchor="middle" font-family="monospace" font-size="15" font-weight="700" letter-spacing="3" fill="#ff5aa8">OUVERT</text><rect x="146" y="0" width="108" height="34" rx="6" fill="#ff5aa8" opacity=".12"/>\n${e(100, 22)}${e(300, 22)}${t(46, 10)}${t(354, 10)}\n<rect x="30" y="54" width="340" height="7" fill="#6a4228"/>${[
    ...Array(18),
  ]
    .map((e, t) => {
      const a = 40 + 18 * t,
        s = ["#2a5a3a", "#3a2a1a", "#7a2a2a", "#2a5a3a", "#d8c87a"][t % 5];
      return `<rect x="${a}" y="${36 - (t % 3) * 3}" width="8" height="${18 + (t % 3) * 3}" rx="2" fill="${s}"/><rect x="${a + 2}" y="${30 - (t % 3) * 3}" width="4" height="7" fill="${s}"/><rect x="${a + 1}" y="44" width="6" height="6" fill="#f2e8d0" opacity=".85"/>`;
    })
    .join(
      "",
    )}\n<g transform="translate(84 66)"><path d="M14 -5v13M106 -5v13" stroke="#c9a070" stroke-width="2"/><circle cx="14" cy="8" r="2.4" fill="#8a6a40"/><circle cx="106" cy="8" r="2.4" fill="#8a6a40"/>\n<rect x="0" y="8" width="120" height="50" rx="5" fill="#3a2414" stroke="#c9935a" stroke-width="2.5"/><rect x="5" y="13" width="110" height="40" rx="3" fill="#4a2e1a"/>${[19, 27, 35, 43].map((e) => `<path d="M8 ${e}q30 -2 52 0t52 0" stroke="#5a3a24" stroke-width="1.2" fill="none"/>`).join("")}\n<path d="M10 49q8 -6 16 0t16 0" stroke="#7ab0d8" stroke-opacity=".55" stroke-width="1.6" fill="none"/>\n<text x="54" y="35" text-anchor="middle" font-family="'Hiragino Mincho ProN','Yu Mincho','Noto Serif JP',Georgia,serif" font-size="20" font-weight="700" letter-spacing="1.5" fill="#f6e6c4">Sushi</text>\n<text x="54" y="49" text-anchor="middle" font-family="'Hiragino Mincho ProN','Yu Mincho','Noto Serif JP',Georgia,serif" font-size="9.5" font-style="italic" letter-spacing="1.2" fill="#ff8a6a">des Vagues</text>\n<rect x="95" y="22" width="15" height="15" rx="2.5" fill="#c2302a"/><circle cx="102.5" cy="29.5" r="4.2" fill="none" stroke="#f6e6c4" stroke-width="1.4"/><path d="M100 29.5q2.5 -3 5 0" stroke="#f6e6c4" stroke-width="1.2" fill="none"/>\n<rect x="0" y="8" width="120" height="50" rx="5" fill="#ffcf7a" opacity=".07"/></g>\n<rect x="296" y="84" width="72" height="54" rx="4" fill="url(#kzut)" stroke="#bff6ff" stroke-width="2"/>${[
    [312, 104, 1],
    [340, 120, -1],
    [350, 96, 1],
  ]
    .map(
      ([e, t, a]) =>
        `<path d="M${e} ${t}q${8 * a} -6 ${16 * a} 0q${-8 * a} 6 ${-16 * a} 0zM${e} ${t}l${-6 * a} -4v8z" fill="#ff9a6a" opacity=".85"/>`,
    )
    .join(
      "",
    )}<path d="M300 92q30 -6 64 0" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>\n<g opacity=".95">${[
    [372, -60, 16],
    [352, -56, 12],
    [388, -40, 14],
    [360, -34, 10],
    [338, -46, 9],
    [392, -62, 10],
  ]
    .map(([e, t, a]) => `<circle cx="${e}" cy="${t}" r="${a}" fill="#ffb3cf"/>`)
    .join(
      "",
    )}<path d="M400 -50q-30 -4 -46 6" stroke="#4a2a2a" stroke-width="4" fill="none"/></g>\n<rect x="0" y="236" width="400" height="94" fill="#6a4228"/>${[...Array(6)].map((e, t) => `<path d="M0 ${246 + 14 * t}h400" stroke="#4a2a18" stroke-width="2"/>`).join("")}\n<path d="M0 226h400" stroke="#c9935a" stroke-width="4"/>${[...Array(11)].map((e, t) => `<path d="M${40 * t} 226v10" stroke="#c9935a" stroke-width="3"/>`).join("")}</svg>`;
}
function kzAmbSu(e) {
  const t = (t, a, s) => `<span class="kzag">${kzGuy(KZL[(e + t) % KZL.length], a, "a" + s)}</span>`,
    a = kzSushi({ b: "mk", p: "sm", t: ["av"] }),
    s = kzSushi({ b: "ni", p: "th", t: [] }),
    n =
      '<svg class="kzat" viewBox="0 0 80 40" aria-hidden="true"><rect x="2" y="4" width="76" height="8" rx="2" fill="#c9935a"/><path d="M14 12v26M66 12v26" stroke="#6a4228" stroke-width="4"/></svg>',
    o = (e, t) => `<span class="kztk" style="animation-delay:${t}s">${e}</span>`,
    i = (e, t) => `<span class="kzaf ${t || ""}">${e}</span>`;
  return `<div class="kzam" aria-hidden="true">${[...Array(9)].map((e, t) => `<i class="kzpe" style="left:${(37 * t + 11) % 96}%;animation-delay:${1.7 * -t}s;animation-duration:${9 + (t % 4) * 2}s"></i>`).join("")}<div class="kzwk kzcat" style="bottom:calc(25.5% - 14px);animation-duration:40s;animation-delay:-12s"><span class="kzwb"><svg viewBox="0 0 50 30" aria-hidden="true"><path d="M8 22q0 -10 14 -10h12q8 0 8 6v6q0 3 -3 3h-28q-3 0 -3 -5z" fill="#fbf3e6" stroke="#c9a070" stroke-width="1"/><path d="M16 13q6 -2 10 2q-2 6 -10 4z" fill="#f2a24a"/><circle cx="40" cy="12" r="7" fill="#fbf3e6" stroke="#c9a070" stroke-width="1"/><path d="M35 7l1 -6 4 4zM42 6l4 -5 1 6z" fill="#f2a24a"/><path d="M8 20q-8 -2 -6 -12" stroke="#3a2a2a" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="42" cy="12" r="1.3" fill="#3a2a2a"/><circle cx="38" cy="12" r="1.3" fill="#3a2a2a"/><path d="M14 27v3M22 27v3M32 27v3M38 27v3" stroke="#e8dcc8" stroke-width="3"/></svg></span></div>\n<div class="kzaz z1 bt"><div class="kzbob"><svg class="kzboat" viewBox="0 0 130 46" aria-hidden="true"><path d="M2 12h126l-16 22q-2 3 -6 3h-82q-4 0 -6 -3z" fill="#8a5a30"/><path d="M2 12h126" stroke="#c9935a" stroke-width="4" stroke-linecap="round"/><path d="M14 20h102" stroke="#6a4228" stroke-width="2"/><path d="M120 12v-26" stroke="#5a3a24" stroke-width="2.5"/><circle cx="120" cy="-16" r="5" fill="#ffcf7a"/><circle cx="120" cy="-16" r="12" fill="#ffcf7a" opacity=".25"/><path d="M10 42q10 -4 20 0t20 0t20 0t20 0t20 0t16 0" stroke="#9ad8ff" stroke-opacity=".45" stroke-width="2" fill="none"/></svg>${n}<div class="kzaw eat">${t(2, "happy", 1)}${i(a)}</div><div class="kzaw eat d2 fl">${t(6, "wait", 2)}${i(kzTea(), "dk")}</div>${o("…", 1)}${o("Oishii !", 6)}</div></div>\n<div class="kzaz z2 bt"><div class="kzbob b2"><svg class="kzboat" viewBox="0 0 130 46" aria-hidden="true"><path d="M2 12h126l-16 22q-2 3 -6 3h-82q-4 0 -6 -3z" fill="#8a5a30"/><path d="M2 12h126" stroke="#c9935a" stroke-width="4" stroke-linecap="round"/><path d="M14 20h102" stroke="#6a4228" stroke-width="2"/><path d="M120 12v-26" stroke="#5a3a24" stroke-width="2.5"/><circle cx="120" cy="-16" r="5" fill="#ffcf7a"/><circle cx="120" cy="-16" r="12" fill="#ffcf7a" opacity=".25"/><path d="M10 42q10 -4 20 0t20 0t20 0t20 0t20 0t16 0" stroke="#9ad8ff" stroke-opacity=".45" stroke-width="2" fill="none"/></svg>${n}<div class="kzaw eat d3">${t(9, "happy", 3)}${i(s)}</div><div class="kzaw eat fl">${t(4, "wait", 4)}${i(a, "r")}</div>${o("♥", 3.5)}${o("♪", 8)}</div></div></div>`;
}
function kzAmb(e, t) {
  if (2 === e) return kzAmbSu(t);
  const a = 1 === e,
    s = (e, a, s) => `<span class="kzag">${kzGuy(KZL[(t + e) % KZL.length], a, "a" + s)}</span>`,
    n = kzDish({ b: "bb", p: "vi", t: ["la", "to"] }),
    o = kzDish({ b: "ph", p: "sa", t: ["ke", "mo"] }),
    i = `<svg class="kzat" viewBox="0 0 80 40" aria-hidden="true"><ellipse cx="40" cy="8" rx="36" ry="7" fill="${a ? "#c9935a" : "#f2d8b0"}"/><ellipse cx="40" cy="8" rx="36" ry="7" fill="none" stroke="${a ? "#8a5a30" : "#c9a070"}" stroke-width="2"/><path d="M40 14v24M28 38h24" stroke="${a ? "#6a4424" : "#8a7ad8"}" stroke-width="4" stroke-linecap="round"/><ellipse cx="26" cy="7" rx="9" ry="3" fill="#fff"/><ellipse cx="54" cy="7" rx="9" ry="3" fill="#fff"/></svg>`,
    r = (e, t) => `<span class="kztk" style="animation-delay:${t}s">${e}</span>`,
    l = (e, t) => `<span class="kzaf ${t || ""}">${e}</span>`;
  return `<div class="kzam" aria-hidden="true">${(a
    ? `<div class="kzaz z1"><span class="kzbench"></span><div class="kzaw eat">${s(1, "happy", 1)}${l(o)}</div><div class="kzaw eat d2">${s(4, "wait", 2)}${l(o, "r")}</div>${r("…", 1)}${r("♪", 5.5)}</div>\n   <div class="kzaz z2">${i}<div class="kzaw eat d3">${s(7, "happy", 3)}${l(kzDrink(), "dk")}</div>${r("♥", 3)}</div>\n   <div class="kzwk" style="bottom:calc(26px + 150px);animation-duration:30s"><span class="kzwb">${s(2, "wait", 4)}</span></div>\n   <div class="kzwk rv" style="bottom:calc(26px + 158px);animation-duration:38s;animation-delay:-14s"><span class="kzwb">${s(9, "happy", 5)}</span></div>`
    : `<div class="kzaz z1">${i}<div class="kzaw eat">${s(1, "happy", 1)}${l(n)}</div><div class="kzaw eat d2 fl">${s(5, "wait", 2)}${l(n, "r")}</div>${r("…", 1)}${r("Miam !", 6)}</div>\n   <div class="kzaz z2">${i}<div class="kzaw eat d3">${s(3, "wait", 3)}${l(kzFries())}</div><div class="kzaw eat fl">${s(8, "happy", 4)}${l(n, "r")}</div>${r("♥", 3.5)}${r("…", 8)}</div>\n   <div class="kzwk" style="bottom:calc(26px + 152px);animation-duration:34s;animation-delay:-6s"><span class="kzwb">${s(6, "happy", 5)}<span class="kzty">${n}</span></span></div>`
  )
    .split("\n")
    .map((e) => e.trim())
    .sort((e, t) => (t.startsWith('<div class="kzwk') ? 1 : 0) - (e.startsWith('<div class="kzwk') ? 1 : 0))
    .join("")}</div>`;
}
var kzMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  off: 0,
  k: "bu",
  SG: {
    bu: {
      E: 0.3,
      sw: 0.32,
      CH: [
        [48, [60, 64, 67]],
        [45, [60, 64, 69]],
        [41, [60, 65, 69]],
        [43, [59, 62, 67]],
        [48, [60, 64, 67]],
        [45, [60, 64, 69]],
        [38, [62, 65, 69, 72]],
        [43, [59, 62, 65, 67]],
      ],
      BW: [
        [0, 4, 7, 9],
        [0, 3, 7, 10],
        [0, 4, 7, 9],
        [0, 4, 7, 9],
        [0, 4, 7, 9],
        [0, 3, 7, 10],
        [0, 3, 7, 10],
        [0, 4, 7, 10],
      ],
      PH: [
        [
          [0, 72, 2],
          [2, 76, 2],
          [4, 79, 3],
          [7, 76, 1],
        ],
        [
          [0, 81, 2],
          [2, 79, 2],
          [4, 76, 4],
        ],
        [
          [0, 77, 2],
          [2, 81, 2],
          [4, 84, 3],
          [7, 81, 1],
        ],
        [
          [0, 79, 4],
          [4, 74, 2],
          [6, 77, 2],
        ],
        [
          [0, 76, 2],
          [2, 79, 2],
          [4, 84, 2],
          [6, 83, 2],
        ],
        [
          [0, 81, 3],
          [3, 79, 1],
          [4, 76, 4],
        ],
        [
          [0, 77, 2],
          [2, 76, 2],
          [4, 74, 2],
          [6, 77, 2],
        ],
        [[0, 79, 6]],
      ],
    },
    su: {
      E: 0.1442,
      sw: 0,
      n: 16,
      CH: [
        [39, [54, 58, 61, 65]],
        [44, [54, 58, 60, 63]],
        [39, [54, 58, 61, 65]],
        [44, [54, 58, 60, 63]],
        [35, [54, 58, 59, 63]],
        [46, [53, 56, 61, 65]],
        [44, [54, 59, 63, 66]],
        [46, [53, 56, 58, 62]],
      ],
      PH: [
        [
          [0, 75, 2],
          [2, 78, 2],
          [4, 80, 1],
          [5, 78, 1],
          [6, 75, 2],
          [10, 73, 2],
          [12, 75, 4],
        ],
        [
          [0, 70, 2],
          [3, 73, 1],
          [4, 75, 2],
          [6, 78, 4],
          [12, 80, 2],
          [14, 78, 2],
        ],
        [
          [0, 82, 3],
          [3, 80, 1],
          [4, 78, 2],
          [6, 80, 2],
          [8, 75, 6],
        ],
        [
          [4, 73, 2],
          [6, 75, 2],
          [8, 78, 2],
          [10, 80, 2],
          [12, 82, 4],
        ],
        [
          [0, 85, 4],
          [4, 82, 2],
          [6, 80, 2],
          [8, 78, 4],
          [12, 75, 4],
        ],
        [
          [0, 77, 2],
          [2, 78, 2],
          [4, 80, 4],
          [8, 77, 2],
          [10, 73, 2],
          [12, 70, 4],
        ],
        [
          [0, 71, 2],
          [2, 75, 2],
          [4, 78, 2],
          [6, 82, 2],
          [8, 80, 6],
          [14, 78, 2],
        ],
        [
          [0, 77, 4],
          [4, 74, 2],
          [6, 73, 2],
          [8, 70, 8],
        ],
      ],
    },
    pe: {
      E: 0.42,
      sw: 0,
      CH: [
        [38, [62, 66, 69, 73]],
        [35, [62, 66, 69, 71]],
        [31, [62, 66, 67, 71]],
        [33, [61, 64, 66, 69]],
        [40, [62, 64, 67, 71]],
        [42, [61, 64, 66, 69]],
        [31, [62, 66, 67, 71]],
        [33, [61, 64, 69, 73]],
      ],
      PH: [
        [[2, 78, 4]],
        [
          [0, 76, 2],
          [4, 74, 4],
        ],
        [
          [2, 74, 2],
          [4, 71, 4],
        ],
        [[0, 73, 6]],
        [[2, 76, 4]],
        [
          [0, 78, 2],
          [4, 81, 4],
        ],
        [
          [2, 79, 2],
          [4, 78, 4],
        ],
        [[0, 76, 6]],
      ],
    },
    fe: {
      E: 0.2,
      sw: 0.12,
      CH: [
        [43, [59, 62, 67, 71]],
        [40, [59, 64, 67, 71]],
        [48, [60, 64, 67, 72]],
        [50, [62, 66, 69, 74]],
        [43, [59, 62, 67, 71]],
        [40, [59, 64, 67, 71]],
        [48, [60, 64, 67, 72]],
        [50, [62, 66, 69, 74]],
      ],
      PH: [
        [
          [0, 79, 1],
          [2, 79, 1],
          [4, 83, 2],
          [6, 81, 1],
          [7, 79, 1],
        ],
        [
          [0, 76, 2],
          [2, 79, 2],
          [4, 76, 2],
          [6, 74, 2],
        ],
        [
          [0, 76, 1],
          [2, 79, 1],
          [4, 84, 2],
          [6, 83, 1],
          [7, 79, 1],
        ],
        [
          [0, 81, 2],
          [2, 78, 2],
          [4, 74, 4],
        ],
        [
          [0, 79, 1],
          [2, 83, 1],
          [4, 86, 2],
          [6, 83, 1],
          [7, 79, 1],
        ],
        [
          [0, 88, 2],
          [2, 86, 2],
          [4, 83, 2],
          [6, 79, 2],
        ],
        [
          [0, 84, 1],
          [2, 83, 1],
          [4, 79, 2],
          [6, 76, 2],
        ],
        [
          [0, 78, 2],
          [2, 81, 2],
          [4, 79, 4],
        ],
      ],
    },
    p2: {
      E: 0.6,
      sw: 0,
      CH: [
        [50, [62, 66, 69, 74]],
        [52, [64, 69, 71, 76]],
        [47, [62, 66, 71, 74]],
        [54, [66, 69, 71, 78]],
        [50, [62, 69, 74, 78]],
        [52, [64, 69, 71, 76]],
        [57, [66, 69, 74, 81]],
        [50, [62, 66, 69, 74]],
      ],
      PH: [
        [
          [0, 78, 3],
          [3, 76, 1],
          [4, 74, 4],
        ],
        [
          [0, 76, 2],
          [2, 78, 2],
          [4, 81, 4],
        ],
        [
          [0, 83, 3],
          [3, 81, 1],
          [4, 78, 4],
        ],
        [
          [0, 76, 3],
          [3, 74, 1],
          [4, 71, 4],
        ],
        [
          [0, 74, 2],
          [2, 78, 2],
          [4, 81, 2],
          [6, 78, 2],
        ],
        [
          [0, 76, 4],
          [4, 74, 2],
          [6, 71, 2],
        ],
        [
          [0, 81, 3],
          [3, 78, 1],
          [4, 76, 4],
        ],
        [[0, 74, 8]],
      ],
    },
    hd: {
      E: 0.27,
      sw: 0,
      CH: [
        [41, [64, 65, 69, 72]],
        [38, [60, 62, 65, 69]],
        [43, [62, 65, 67, 70]],
        [36, [64, 67, 70, 72]],
        [41, [64, 65, 69, 72]],
        [46, [62, 65, 69, 70]],
        [43, [62, 65, 67, 70]],
        [36, [64, 67, 70, 72]],
      ],
      PH: [
        [
          [0, 81, 3],
          [3, 79, 1],
          [4, 77, 4],
        ],
        [
          [0, 76, 2],
          [2, 77, 2],
          [4, 81, 4],
        ],
        [
          [0, 79, 3],
          [3, 77, 1],
          [4, 74, 2],
          [6, 77, 2],
        ],
        [[0, 76, 8]],
        [
          [0, 72, 2],
          [2, 77, 2],
          [4, 81, 3],
          [7, 84, 1],
        ],
        [
          [0, 82, 4],
          [4, 81, 2],
          [6, 79, 2],
        ],
        [
          [0, 77, 3],
          [3, 79, 1],
          [4, 81, 2],
          [6, 79, 2],
        ],
        [
          [0, 79, 4],
          [4, 76, 4],
        ],
      ],
    },
  },
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    t.gain.value = 0;
    const a = e.createBiquadFilter();
    ((a.type = "lowpass"), (a.frequency.value = 5200), (a.Q.value = 0.3), a.connect(t), t.connect(mg));
    const s = e.createDelay(1),
      n = e.createGain(),
      o = e.createBiquadFilter(),
      i = e.createGain();
    ((s.delayTime.value = 0.36),
      (n.gain.value = 0.26),
      (o.type = "lowpass"),
      (o.frequency.value = 2600),
      (i.gain.value = 0.26),
      s.connect(o),
      o.connect(n),
      n.connect(s),
      o.connect(i),
      i.connect(a));
    const r = e.createGain();
    (r.connect(a), r.connect(s));
    const l = e.createGain();
    l.connect(a);
    const c = e.createGain();
    ((c.gain.value = 0.8), c.connect(a), (e.createGain().gain.value = 0.25), c.connect(s));
    const d = {};
    for (const e in this.SG) {
      d[e] = {};
      const t = this.SG[e].n || 8;
      this.SG[e].PH.forEach((a, s) =>
        a.forEach(([a, n, o]) => {
          d[e][s * t + a] = [n, o];
        }),
      );
    }
    this.L = { out: t, bus: r, dry: l, amb: c, M: d };
  },
  env(e, t, a, s, n) {
    (e.gain.setValueAtTime(1e-4, t),
      e.gain.exponentialRampToValueAtTime(a, t + s),
      e.gain.exponentialRampToValueAtTime(1e-4, t + n));
  },
  vib(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1],
      [1.004, 0.6],
      [4, 0.05],
    ].forEach(([i, r]) => {
      const l = o.createOscillator(),
        c = o.createGain();
      ((l.type = "sine"),
        (l.frequency.value = e * i),
        this.env(c, t, s * r, 0.006, a + 0.7),
        l.connect(c),
        c.connect(n),
        l.start(t),
        l.stop(t + a + 0.8));
    });
  },
  ep(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1],
      [2, 0.25],
      [3, 0.06],
    ].forEach(([i, r]) => {
      const l = o.createOscillator(),
        c = o.createGain();
      ((l.type = "sine"),
        (l.frequency.value = e * i),
        this.env(c, t, s * r, 0.012, a),
        l.connect(c),
        c.connect(n),
        l.start(t),
        l.stop(t + a + 0.05));
    });
  },
  bass(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain(),
      l = o.createBiquadFilter();
    ((i.type = "triangle"),
      (i.frequency.value = e),
      (l.type = "lowpass"),
      (l.frequency.value = 900),
      this.env(r, t, s, 0.01, a),
      i.connect(l),
      l.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + a + 0.05));
  },
  fl(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain(),
      l = o.createOscillator(),
      c = o.createGain();
    ((i.type = "sine"),
      (i.frequency.value = e),
      (l.frequency.value = 5.2),
      (c.gain.value = 0.006 * e),
      l.connect(c),
      c.connect(i.frequency),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.exponentialRampToValueAtTime(s, t + 0.07),
      r.gain.setValueAtTime(s, t + Math.max(0.08, a - 0.12)),
      r.gain.exponentialRampToValueAtTime(1e-4, t + a + 0.25),
      i.connect(r),
      r.connect(n),
      i.start(t),
      l.start(t),
      i.stop(t + a + 0.3),
      l.stop(t + a + 0.3));
  },
  talk(e, t) {
    const a = AC,
      s = 2 + Math.floor(4 * Math.random()),
      n = 150 + 120 * Math.random(),
      o = a.createStereoPanner ? a.createStereoPanner() : null;
    let i = e;
    const r = a.createBiquadFilter();
    ((r.type = "bandpass"), (r.Q.value = 4), (r.frequency.value = 700 + 700 * Math.random()));
    const l = a.createGain();
    ((l.gain.value = 1),
      r.connect(l),
      o ? ((o.pan.value = 1.6 * Math.random() - 0.8), l.connect(o), o.connect(t)) : l.connect(t));
    for (let e = 0; e < s; e++) {
      const e = 0.09 + 0.14 * Math.random(),
        t = a.createOscillator(),
        s = a.createGain(),
        o = n * (0.9 + 0.25 * Math.random());
      ((t.type = "sawtooth"),
        t.frequency.setValueAtTime(o, i),
        t.frequency.linearRampToValueAtTime(o * (0.85 + 0.3 * Math.random()), i + e),
        s.gain.setValueAtTime(1e-4, i),
        s.gain.exponentialRampToValueAtTime(0.006, i + 0.03),
        s.gain.exponentialRampToValueAtTime(1e-4, i + e),
        t.connect(s),
        s.connect(r),
        t.start(i),
        t.stop(i + e + 0.02),
        (i += e + 0.03 + 0.06 * Math.random()));
    }
  },
  clink(e, t, a = 0.012) {
    const s = AC,
      n = 2300 + 1500 * Math.random();
    [
      [1, 1],
      [2.7, 0.3],
    ].forEach(([o, i]) => {
      const r = s.createOscillator(),
        l = s.createGain();
      ((r.type = "sine"),
        (r.frequency.value = n * o),
        this.env(l, e, a * i, 0.002, 0.25),
        r.connect(l),
        l.connect(t),
        r.start(e),
        r.stop(e + 0.3));
    });
  },
  ding(e, t) {
    [1318.5, 1760].forEach((a, s) => {
      const n = AC,
        o = n.createOscillator(),
        i = n.createGain();
      ((o.type = "sine"),
        (o.frequency.value = a),
        this.env(i, e + 0.12 * s, 0.02, 0.004, 0.9),
        o.connect(i),
        i.connect(t),
        o.start(e + 0.12 * s),
        o.stop(e + 0.12 * s + 1));
    });
  },
  amb(e, t, a) {
    if ("fe" === this.k) return;
    if ("p2" === this.k) return void (Math.random() < 0.04 && this.plop(e + 0.3 * Math.random(), a.amb));
    if ("pe" === this.k)
      return (
        Math.random() < 0.05 && this.plop(e + 0.3 * Math.random(), a.amb),
        void (Math.random() < 0.008 && this.owl(e, a.amb))
      );
    (Math.random() < 0.22 && this.talk(e, a.amb),
      Math.random() < 0.05 && this.clink(e + 0.2 * Math.random(), a.amb),
      0 === t && Math.random() < ("su" === this.k ? 0.02 : 0.04) && this.ding(e, a.amb),
      "hd" === this.k &&
        4 === t &&
        Math.random() < 0.03 &&
        (this.clink(e, a.amb, 0.02), this.clink(e + 0.09, a.amb, 0.02)));
  },
  clav(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain(),
      l = o.createBiquadFilter();
    ((i.type = "sawtooth"),
      (i.frequency.value = e),
      (l.type = "lowpass"),
      l.frequency.setValueAtTime(2600, t),
      l.frequency.exponentialRampToValueAtTime(700, t + a),
      this.env(r, t, s, 0.004, a),
      i.connect(l),
      l.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + a + 0.05));
  },
  brass(e, t, a, s, n) {
    const o = AC,
      i = o.createBiquadFilter(),
      r = o.createGain();
    ((i.type = "lowpass"),
      i.frequency.setValueAtTime(600, t),
      i.frequency.linearRampToValueAtTime(2200, t + 0.06),
      i.frequency.linearRampToValueAtTime(1400, t + a),
      i.connect(r),
      r.connect(n),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.exponentialRampToValueAtTime(s, t + 0.04),
      r.gain.setValueAtTime(s, t + Math.max(0.05, a - 0.06)),
      r.gain.exponentialRampToValueAtTime(1e-4, t + a + 0.12),
      [1, 1.006].forEach((s) => {
        const n = o.createOscillator();
        ((n.type = "sawtooth"), (n.frequency.value = e * s), n.connect(i), n.start(t), n.stop(t + a + 0.15));
      }));
  },
  sax(e, t, a, s, n) {
    const o = AC,
      i = o.createBiquadFilter(),
      r = o.createGain(),
      l = o.createOscillator(),
      c = o.createGain();
    ((i.type = "lowpass"),
      (i.Q.value = 2),
      i.frequency.setValueAtTime(900, t),
      i.frequency.linearRampToValueAtTime(2e3, t + 0.05),
      i.frequency.linearRampToValueAtTime(1500, t + a),
      i.connect(r),
      r.connect(n),
      (l.frequency.value = 5.6),
      (c.gain.value = 0.007 * e),
      l.connect(c),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.exponentialRampToValueAtTime(s, t + 0.035),
      r.gain.setValueAtTime(0.85 * s, t + Math.max(0.05, a - 0.05)),
      r.gain.exponentialRampToValueAtTime(1e-4, t + a + 0.1),
      [
        ["sawtooth", 1, 1],
        ["square", 1.003, 0.5],
      ].forEach(([s, n, r]) => {
        const l = o.createOscillator(),
          d = o.createGain();
        ((l.type = s),
          (l.frequency.value = e * n),
          c.connect(l.frequency),
          (d.gain.value = r),
          l.connect(d),
          d.connect(i),
          l.start(t),
          l.stop(t + a + 0.15));
      }),
      l.start(t),
      l.stop(t + a + 0.15));
  },
  koto(e, t, a, s) {
    const n = AC;
    [
      [1, 1, 0.6],
      [2, 0.35, 0.3],
      [3, 0.12, 0.15],
    ].forEach(([o, i, r]) => {
      const l = n.createOscillator(),
        c = n.createGain();
      ((l.type = 1 === o ? "triangle" : "sine"),
        l.frequency.setValueAtTime(e * o * 1.01, t),
        l.frequency.exponentialRampToValueAtTime(e * o, t + 0.03),
        this.env(c, t, a * i, 0.003, r),
        l.connect(c),
        c.connect(s),
        l.start(t),
        l.stop(t + r + 0.05));
    });
  },
  kick(e, t) {
    const a = AC,
      s = a.createOscillator(),
      n = a.createGain();
    ((s.type = "sine"),
      s.frequency.setValueAtTime(110, e),
      s.frequency.exponentialRampToValueAtTime(45, e + 0.12),
      this.env(n, e, 0.12, 0.004, 0.2),
      s.connect(n),
      n.connect(t),
      s.start(e),
      s.stop(e + 0.25));
  },
  plop(e, t) {
    const a = AC,
      s = a.createOscillator(),
      n = a.createGain(),
      o = 500 + 400 * Math.random();
    ((s.type = "sine"),
      s.frequency.setValueAtTime(o, e),
      s.frequency.exponentialRampToValueAtTime(0.35 * o, e + 0.12),
      this.env(n, e, 0.018, 0.004, 0.16),
      s.connect(n),
      n.connect(t),
      s.start(e),
      s.stop(e + 0.2));
  },
  owl(e, t) {
    [0, 0.5, 0.75].forEach((a, s) => {
      const n = AC,
        o = n.createOscillator(),
        i = n.createGain(),
        r = s ? 360 : 380;
      ((o.type = "sine"),
        o.frequency.setValueAtTime(r, e + a),
        o.frequency.linearRampToValueAtTime(0.92 * r, e + a + 0.3),
        i.gain.setValueAtTime(1e-4, e + a),
        i.gain.exponentialRampToValueAtTime(0.012, e + a + 0.08),
        i.gain.exponentialRampToValueAtTime(1e-4, e + a + 0.34),
        o.connect(i),
        i.connect(t),
        o.start(e + a),
        o.stop(e + a + 0.4));
    });
  },
  tok(e, t, a, s = 1100) {
    const n = AC,
      o = n.createOscillator(),
      i = n.createGain();
    ((o.type = "sine"),
      o.frequency.setValueAtTime(s, e),
      o.frequency.exponentialRampToValueAtTime(0.62 * s, e + 0.04),
      this.env(i, e, t, 0.003, 0.06),
      o.connect(i),
      i.connect(a),
      o.start(e),
      o.stop(e + 0.08));
  },
  style(e) {
    const t = "fe" === e ? "fe" : "p2" === e ? "p2" : "pe" === e ? "pe" : 2 === e ? "su" : e ? "hd" : "bu";
    t !== this.k && ((this.k = t), (this.s = 0), (this.t = 0));
  },
  nb() {
    if (!this._nb) {
      const A = AC,
        b = A.createBuffer(1, A.sampleRate, A.sampleRate),
        x = b.getChannelData(0);
      for (let i = 0; i < x.length; i++) x[i] = 2 * Math.random() - 1;
      this._nb = b;
    }
    return this._nb;
  },
  xiao(f, t, d, g, out) {
    const A = AC,
      o = A.createOscillator(),
      o3 = A.createOscillator(),
      m3 = A.createGain(),
      v = A.createOscillator(),
      vg = A.createGain(),
      G = A.createGain(),
      n = A.createBufferSource(),
      bp = A.createBiquadFilter(),
      ng = A.createGain();
    o.type = "sine";
    o3.type = "sine";
    o.frequency.setValueAtTime(0.985 * f, t);
    o.frequency.exponentialRampToValueAtTime(f, t + 0.2);
    o3.frequency.value = 3 * f;
    m3.gain.value = 0.08;
    v.frequency.value = 4.2;
    vg.gain.setValueAtTime(0, t);
    vg.gain.linearRampToValueAtTime(0.004 * f, t + Math.min(0.9 * d, 1.2));
    v.connect(vg);
    vg.connect(o.frequency);
    G.gain.setValueAtTime(1e-4, t);
    G.gain.exponentialRampToValueAtTime(g, t + 0.28);
    G.gain.setValueAtTime(g, t + Math.max(0.3, d - 0.2));
    G.gain.exponentialRampToValueAtTime(1e-4, t + d + 0.4);
    o.connect(G);
    o3.connect(m3);
    m3.connect(G);
    G.connect(out);
    [o, o3, v].forEach((x) => {
      x.start(t);
      x.stop(t + d + 0.5);
    });
  },
  erhu(f, t, d, g, out) {
    const A = AC,
      G = A.createGain(),
      lp = A.createBiquadFilter(),
      v = A.createOscillator(),
      vg = A.createGain();
    lp.type = "lowpass";
    lp.frequency.value = 950;
    lp.Q.value = 0.6;
    v.frequency.value = 5;
    vg.gain.setValueAtTime(0, t);
    vg.gain.linearRampToValueAtTime(0.006 * f, t + 0.5);
    v.connect(vg);
    [
      ["sawtooth", 1, 0.4],
      ["triangle", 1.003, 1],
    ].forEach(([ty, m, k]) => {
      const o = A.createOscillator(),
        c = A.createGain();
      o.type = ty;
      c.gain.value = k;
      o.frequency.setValueAtTime(0.97 * f * m, t);
      o.frequency.exponentialRampToValueAtTime(f * m, t + 0.22);
      vg.connect(o.frequency);
      o.connect(c);
      c.connect(lp);
      o.start(t);
      o.stop(t + d + 0.5);
    });
    G.gain.setValueAtTime(1e-4, t);
    G.gain.exponentialRampToValueAtTime(g, t + 0.3);
    G.gain.setValueAtTime(g, t + Math.max(0.35, d - 0.25));
    G.gain.exponentialRampToValueAtTime(1e-4, t + d + 0.45);
    lp.connect(G);
    G.connect(out);
    v.start(t);
    v.stop(t + d + 0.5);
  },
  zheng(f, t, a, out, rs = 1) {
    const A = AC,
      lp = A.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 2600;
    lp.connect(out);
    [
      [1, 1, 1.3, "triangle"],
      [2, 0.3, 0.7, "sine"],
      [3, 0.1, 0.4, "sine"],
    ].forEach(([m, k, r, ty]) => {
      const o = A.createOscillator(),
        c = A.createGain();
      o.type = ty;
      o.frequency.setValueAtTime(f * m * 1.006, t);
      o.frequency.exponentialRampToValueAtTime(f * m, t + 0.03);
      this.env(c, t, a * k, 0.004, r * rs);
      o.connect(c);
      c.connect(lp);
      o.start(t);
      o.stop(t + r * rs + 0.05);
    });
  },
  pipa(f, t, a, out) {
    for (let k = 0; k < 7; k++) this.zheng(f, t + 0.075 * k, a * (1 - 0.1 * k), out, 0.3);
  },
  guqin(f, t, g, out) {
    const A = AC,
      lp = A.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 700;
    lp.connect(out);
    [
      [1, 1, 2.2],
      [2, 0.25, 1.2],
      [3, 0.08, 0.6],
    ].forEach(([m, k, r]) => {
      const o = A.createOscillator(),
        c = A.createGain();
      o.type = "sine";
      o.frequency.value = f * m;
      this.env(c, t, g * k, 0.012, r);
      o.connect(c);
      c.connect(lp);
      o.start(t);
      o.stop(t + r + 0.05);
    });
  },
  yq(f, t, g, out) {
    const A = AC;
    [1, 2.01].forEach((m, k) => {
      const o = A.createOscillator(),
        c = A.createGain();
      o.type = "sine";
      o.frequency.value = f * m;
      this.env(c, t, g * (k ? 0.3 : 1), 0.002, 0.7);
      o.connect(c);
      c.connect(out);
      o.start(t);
      o.stop(t + 0.75);
    });
  },
  drum(t, g, out) {
    const A = AC,
      o = A.createOscillator(),
      G = A.createGain(),
      lp = A.createBiquadFilter();
    o.type = "sine";
    o.frequency.setValueAtTime(100, t);
    o.frequency.exponentialRampToValueAtTime(58, t + 0.3);
    lp.type = "lowpass";
    lp.frequency.value = 260;
    this.env(G, t, g, 0.012, 0.6);
    o.connect(lp);
    lp.connect(G);
    G.connect(out);
    o.start(t);
    o.stop(t + 0.7);
  },
  bell(f, t, g, out) {
    const A = AC;
    [
      [1, 1],
      [2.4, 0.4],
      [4.7, 0.15],
    ].forEach(([m, k], j) => {
      const o = A.createOscillator(),
        c = A.createGain();
      o.type = "sine";
      o.frequency.value = f * m;
      this.env(c, t, g * k, 0.01, 3 / (j + 1));
      o.connect(c);
      c.connect(out);
      o.start(t);
      o.stop(t + 3.1);
    });
  },
  tick() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (!e || !t) return;
    this.t < t.currentTime && (this.t = t.currentTime + 0.12);
    const a = this.SG[this.k],
      s = a.E,
      n = a.n || 8;
    for (; this.t < t.currentTime + 0.5;) {
      const t = this.s,
        o = Math.floor(t / n) % 8,
        i = t % n,
        [r, l] = a.CH[o],
        c = this.t,
        d = c + (i % 2 ? s * a.sw : 0);
      if ("fe" === this.k) {
        ((0 === i || 4 === i) && (this.bass(this.mf(r), d, 3 * s, 0.13, e.dry), this.kick(d, e.dry)),
          (2 === i || 6 === i) &&
            (l.forEach((x, q) => this.ep(this.mf(x), d + 0.008 * q, 1.2 * s, 0.024, e.bus)),
            this.tok(d, 0.018, e.dry, 1500)),
          i % 2 && this.tok(d, 0.004, e.dry, 5200),
          0 === i && o % 2 == 0 && this.bell(this.mf(l[3] + 12), d, 0.014, e.bus));
        const z = e.M.fe[t];
        z && this.koto(this.mf(z[0]), d, 0.04, e.bus);
      } else if ("p2" === this.k) {
        const T4 = o % 4 == 0;
        (0 === i || (4 === i && o % 2)) && this.guqin(this.mf(r), d, 0.05, e.dry);
        0 === i &&
          (l.slice(0, 3).forEach((x, q) => this.ep(this.mf(x - 12), d + 0.02 * q, 7 * s, 0.007, e.bus)),
          T4 && this.bell(this.mf(r + 24), d, 0.016, e.bus));
        const q = [0, 1, 2, 3, 2, 1, 2, 3][i];
        this.zheng(this.mf(l[q]), d, i % 2 ? 0.016 : 0.026, e.bus);
        0 === i && o % 2 == 0 && this.drum(d, 0.07, e.dry);
        4 === i && o % 2 && this.drum(d, 0.04, e.dry);
        (2 === i || 6 === i) && this.tok(d, 0.008, e.dry, 820);
        4 === i && this.pipa(this.mf(l[2]), d, 0.02, e.bus);
        (5 === i || (7 === i && o % 2)) && this.yq(this.mf(l[3] + 12), d, 0.008, e.bus);
        if (6 === i && (3 === o || 7 === o))
          [57, 59, 62, 66, 69, 71, 74].forEach((x, k) =>
            this.zheng(this.mf(x), d + 0.3 + 0.09 * k, 0.013 + 0.001 * k, e.bus),
          );
        const z = e.M.p2[t];
        z &&
          (o < 4
            ? this.xiao(this.mf(z[0]), d, z[1] * s, 0.04, e.bus)
            : this.erhu(this.mf(z[0]), d, z[1] * s, 0.02, e.bus));
      } else if ("pe" === this.k) {
        0 === i && this.bass(this.mf(r + 12), d, 6 * s, 0.12, e.dry);
        const a = [0, 1, 2, 3, 2, 1, 2, 3][i];
        (this.koto(this.mf(l[a]), d + (i % 2 ? 0.04 * s : 0), 0.022, e.bus),
          4 === i && o % 2 && this.ep(this.mf(l[0] + 12), d, 3 * s, 0.012, e.bus));
        const n = e.M.pe[t];
        n && this.fl(this.mf(n[0]), d, n[1] * s, 0.045, e.bus);
      } else if ("su" === this.k) {
        const n = a.CH[(o + 1) % 8][0],
          c = {
            0: [r, 2, 0.2],
            2: [r + 12, 1, 0.11],
            3: [r, 1, 0.1],
            5: [r + 1, 1, 0.1],
            6: [r + 2, 2, 0.15],
            8: [r, 1, 0.18],
            10: [r + 12, 1, 0.11],
            11: [r + 10, 1, 0.09],
            12: [r + 7, 1, 0.13],
            14: [n - 1, 1, 0.12],
            15: [n - 2 + (o % 2) * 2, 1, 0.08],
          }[i];
        (c && this.bass(this.mf(c[0]), d, s * c[1] * 1.15, c[2], e.dry),
          (0 === i || 8 === i || (10 === i && o % 2)) && this.kick(d, e.dry),
          (4 !== i && 12 !== i) || (this.tok(d, 0.024, e.dry, 1800), this.tok(d + 0.012, 0.014, e.dry, 2400)),
          this.tok(d, i % 2 ? 0.003 : 0.006, e.dry, 6200),
          (3 !== i && 6 !== i && 11 !== i && 14 !== i) ||
            l.slice(1).forEach((t, a) => this.clav(this.mf(t + 12), d + 0.003 * a, 0.6 * s, 0.012, e.bus)),
          o % 2 != 1 ||
            (6 !== i && 14 !== i) ||
            l.forEach((t, a) => this.brass(this.mf(t + 12), d, 1.3 * s, 0.018, e.bus)));
        const f = e.M.su[t];
        if (
          (f && this.sax(this.mf(f[0]), d, f[1] * s, 0.05, e.bus),
          (3 === o && i < 4) || (7 === o && i >= 8 && i % 2 == 0))
        ) {
          const t = [70, 73, 75, 78, 80, 82, 85, 87];
          this.koto(this.mf(t[(3 === o ? i : (i - 8) / 2 + 4) % 8]), d, 0.04, e.bus);
        }
      } else if ("bu" === this.k) {
        (i % 2 == 0 && this.bass(this.mf(r + a.BW[o][i >> 1]), d, 1.7 * s, 0.17, e.dry),
          (2 !== i && 6 !== i) ||
            (l.forEach((t, a) => this.ep(this.mf(t), d + 0.008 * a, 1.4 * s, 0.03, e.bus)),
            this.tok(d, 0.012, e.dry, 900)),
          7 === i && o % 2 && this.ep(this.mf(l[l.length - 1] + 12), d, s, 0.02, e.bus));
        const n = e.M.bu[t];
        n && this.vib(this.mf(n[0]), d, n[1] * s, 0.07, e.bus);
      } else {
        (0 === i || 4 === i
          ? this.bass(this.mf(r), d, 2.6 * s, 0.18, e.dry)
          : (3 !== i && 7 !== i) || this.bass(this.mf(r + 7), d, 0.9 * s, 0.12, e.dry),
          (1 !== i && 3 !== i && 6 !== i) ||
            l.forEach((t, a) => this.ep(this.mf(t), d + 0.006 * a, s * (6 === i ? 1.8 : 0.9), 0.026, e.bus)),
          ((o % 2 != 0 || (0 !== i && 3 !== i && 6 !== i)) && (o % 2 != 1 || (2 !== i && 4 !== i))) ||
            this.tok(d, 0.014, e.dry, 1500));
        const a = e.M.hd[t];
        a && this.fl(this.mf(a[0]), d, a[1] * s, 0.06, e.bus);
      }
      ((8 !== n && i % 2 != 0) || this.amb(c, 8 === n ? i : i / 2, e),
        (this.t += s),
        (this.s = (this.s + 1) % (8 * n)));
    }
  },
  loop() {
    (clearTimeout(this.T),
      this.on &&
        (!this.L && void 0 !== AC && AC && (this.build(), apply()),
        this.L && !document.hidden && prefs().music && this.tick(),
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
        ? (Date.now() - (this.off || 0) > 45e3 && ((this.s = 0), (this.t = 0)), this.build(), this.loop())
        : (clearTimeout(this.T), (this.off = Date.now())),
      void 0 !== AC && AC && void 0 !== music && music && apply());
  },
};
function kzMus(e) {
  "object" == typeof kzMu && kzMu.set(e);
}
const KZAT = 6e4;
const kzReach = (e) => UNL() || st.get(ckey("cuisine") + ":" + (10 * e + 9), !1);
function kzModeArea() {
  const e = st.get("kz:mode", "");
  return `<div class="rcx-b"><div class="rcx-m"><div class="rcx-t"><small>Mode de jeu</small><span>${"arc" === e ? "Sers les bons plats avant la fin du temps" : "Prépare chaque commande"}</span></div><div class="plseg"><button class="${e ? "" : "on"}" data-a="kzMode" data-v="">Histoire</button><button class="${"arc" === e ? "on" : ""}" data-a="kzMode" data-v="arc">Arcade</button></div></div>\n${
    "arc" === e
      ? `<div class="kzabs">${["Burger", "Hot-dog", "Sushi"]
          .map((e, t) => {
            const a = kzReach(t),
              s = st.get("kz:ar" + t, 0);
            return `<button class="kzab${a ? "" : " lk"}" data-a="kzA" data-v="${t}"${a ? "" : ' aria-disabled="true"'}><b>${e}</b><small>${a ? (s ? "Record : " + s : "Pas encore de record") : "🔒 Après le niveau " + (10 * t + 10)}</small></button>`;
          })
          .join("")}</div>`
      : ""
  }</div>`;
}
var KZRUN = 0;
function kzArcade(e) {
  if (!kzReach(e)) return msg("Termine d’abord le niveau " + (10 * e + 10) + " en mode histoire.");
  const t = ++KZRUN,
    a = () => t === KZRUN && playing && "cuisine" === cur && !!document.getElementById("kzra");
  ((cur = "cuisine"), (daily = !1), (lv = 10 * e), (playing = !0));
  try {
    INFG = "";
  } catch (e) {}
  ((snap = null),
    theme("cuisine"),
    (KZR = e),
    (KZI.fries.n = 2 === e ? "soupe miso" : "frites"),
    (KZI.drink.n = 2 === e ? "thé vert" : "boisson"));
  try {
    kzMu.style(e);
  } catch (e) {}
  const s = [];
  for (let t = 10 * e; t < 10 * e + 10; t++) s.push(...KZU[t]);
  const n = (e) => [...new Set(s.filter((t) => KZI[t].k === e))],
    o = n("b"),
    i = n("p"),
    r = n("t"),
    l = (e) => e[Math.floor(Math.random() * e.length)],
    c = (e, t) =>
      setTimeout(() => {
        a() && e();
      }, t),
    d = () => {
      const e = 1 + Math.floor(Math.random() * Math.min(3, r.length)),
        t = [],
        a = r.slice();
      for (; t.length < e && a.length;) t.push(a.splice(Math.floor(Math.random() * a.length), 1)[0]);
      return { b: l(o), p: l(i), t: t.sort() };
    },
    f = [];
  for (const e of [3, 2, 1]) {
    for (let t = 0; f.length < 6 && t < 3e3; t++) {
      const t = d();
      f.every((a) => {
        return (
          (n = t),
          ((s = a).b !== n.b) +
            (s.p !== n.p) +
            s.t.filter((e) => !n.t.includes(e)).length +
            n.t.filter((e) => !s.t.includes(e)).length >=
            e
        );
        var s, n;
      }) && f.push(t);
    }
    if (f.length >= 6) break;
  }
  for (let e = f.length - 1; e > 0; e--) {
    const t = Math.floor(Math.random() * (e + 1));
    [f[e], f[t]] = [f[t], f[e]];
  }
  const u = {
      T: KZAT,
      sc: 0,
      cb: 0,
      best: 0,
      sv: 0,
      seat: [null, null, null],
      id: 0,
      over: !1,
      last: performance.now(),
      bag: [],
    },
    h = (e) => {
      if (u.over || u.seat[e]) return;
      const t = Math.max(9e3, 15e3 - 250 * u.sv),
        a = (() => {
          const e = u.seat.filter(Boolean).map((e) => e.d);
          for (let t = 0; t < 2; t++) {
            u.bag.length || (u.bag = [0, 1, 2, 3, 4, 5].sort(() => Math.random() - 0.5));
            const t = u.bag.findIndex((t) => !e.includes(t));
            if (t >= 0) return u.bag.splice(t, 1)[0];
          }
          return u.bag.shift();
        })();
      ((u.seat[e] = {
        d: a,
        o: f[a],
        lk: Math.floor(Math.random() * KZL.length),
        p: t,
        m: t,
        st: "in",
        id: u.id++,
      }),
        m(),
        c(() => {
          const t = u.seat[e];
          t && "in" === t.st && ((t.st = "wait"), m());
        }, 700));
    },
    p = (e, t) => {
      const a = u.seat[e];
      a &&
        "out" !== a.st &&
        "sad" !== a.st &&
        ((a.st = t ? "out" : "sad"),
        m(),
        c(
          () => {
            u.seat[e] === a && ((u.seat[e] = null), m(), c(() => h(e), 450));
          },
          t ? 800 : 1e3,
        ));
    };
  ((app.innerHTML = `<div class="kzg ${["bu", "hd", "su"][e]}" id="kzg"><div class="kzt"><button class="back" data-a="back" data-v="hub">‹ Cuisine</button><b id="kzsco">Score 0</b><div class="kztr"><div class="chip" id="kzcb">Arcade</div></div></div>\n<div class="kzsc">${kzBg(e)}${kzAmb(e, 7)}<div class="kzcu" id="kzcu"></div><div class="kzct"></div><div class="kztm"><i id="kztm"></i></div></div><p class="m kzm" id="m" role="status" aria-live="polite">Touche le plat qui correspond à une commande.</p><div class="kzk"><div class="kzra" id="kzra"></div></div><div class="kzov" id="kzov" hidden></div></div>`),
    ($("#nav").hidden = !0),
    (mt = "m"),
    ($("#kzra").innerHTML = f
      .map(
        (e, t) =>
          `<button class="kzrd" data-a="kzR1" data-v="${t}" aria-label="${[e.b, e.p, ...e.t].map((e) => KZI[e].n).join(", ")}"><span class="kzrp">${kzDish(e)}</span><span class="kzbi">${[e.b, e.p, ...e.t].map((e) => `<i>${kzIco(e)}</i>`).join("")}</span></button>`,
      )
      .join("")));
  const m = () => {
    if (!a()) return;
    const e = $("#kzcu");
    (e.style.setProperty("--n", 3),
      (e.innerHTML = u.seat
        .map((e, t) => {
          if (!e) return '<div class="kzs"></div>';
          const a = KZL[e.lk],
            s = "wait" === e.st && e.p / e.m < 0.34,
            n = "out" === e.st ? "happy" : "sad" === e.st ? "sad" : s ? "lo" : "wait";
          return `<div class="kzs"><div class="kzp ${e.st}${s ? " lo" : ""}"><span class="kzb"><span class="kzbd">${kzDish(e.o)}</span><span class="kzbi">${[e.o.b, e.o.p, ...e.o.t].map((e) => `<i>${kzIco(e)}</i>`).join("")}</span></span><span class="kzgy">${kzGuy(a, n, "r" + e.id)}</span><span class="kzn">${a.n}</span><span class="kzpt"><i id="kzp${t}" style="width:${Math.max(0, (e.p / e.m) * 100).toFixed(0)}%"></i></span>${"out" === e.st ? '<span class="kzh">♥</span><span class="kzh h2">♥</span>' : ""}</div></div>`;
        })
        .join("")),
      ($("#kzsco").textContent = "Score " + u.sc),
      ($("#kzcb").textContent = u.cb > 1 ? "Série ×" + u.cb : "Arcade"));
  };
  ((act.kzR1 = (e) => {
    if (u.over || t !== KZRUN) return;
    const a = +e;
    if (!(a >= 0 && a < 6)) return;
    const s = u.seat
        .map((e, t) => (e && "wait" === e.st && e.d === a ? { c: e, i: t } : null))
        .filter(Boolean)
        .sort((e, t) => e.c.p - t.c.p),
      n = document.querySelector(`.kzrd[data-v="${a}"]`);
    if (s.length) {
      const { i: e } = s[0];
      (u.cb++, (u.best = Math.max(u.best, u.cb)));
      const t = 10 + 2 * Math.min(5, u.cb - 1);
      ((u.sc += t),
        u.sv++,
        sfx(784, 0.2),
        vib(12),
        msg("✦ +" + t),
        n && (n.classList.remove("ok", "no"), n.offsetWidth, n.classList.add("ok")),
        p(e, !0));
    } else
      ((u.cb = 0),
        (u.T -= 2e3),
        sfx(200, 0.25),
        vib(40),
        msg("Ce plat ne correspond à aucune commande : −2 s"),
        n && (n.classList.remove("ok", "no"), n.offsetWidth, n.classList.add("no")),
        m());
  }),
    m(),
    [0, 1, 2].forEach((e) => c(() => h(e), 300 + 500 * e)));
  const b = () => {
    if (!a() || u.over) return;
    const t = performance.now(),
      s = Math.min(250, t - u.last);
    ((u.last = t),
      document.hidden ||
        ((u.T -= s),
        u.seat.forEach((e, t) => {
          if (!e || "wait" !== e.st) return;
          e.p -= s;
          const a = $("#kzp" + t);
          (a && (a.style.width = Math.max(0, (e.p / e.m) * 100).toFixed(0) + "%"),
            e.p <= 0 && ((u.cb = 0), msg(KZL[e.lk].n + " est reparti…"), p(t, !1)));
        })));
    const n = $("#kztm");
    if (
      (n && ((n.style.width = Math.max(0, (u.T / KZAT) * 100) + "%"), n.classList.toggle("lo", u.T < 1e4)),
      u.T <= 0)
    )
      return (() => {
        if (u.over) return;
        u.over = !0;
        const t = "kz:ar" + e,
          a = st.get(t, 0),
          s = u.sc > a;
        (s && st.set(t, u.sc), sfx(s ? 880 : 520, 0.4));
        const n = $("#kzov");
        n &&
          ((n.hidden = !1),
          (n.innerHTML = `<div class="kzbox"><h2>Le service est terminé</h2><p class="kzbig">${u.sc} points</p><p>${u.sv} plat${u.sv > 1 ? "s" : ""} bien servi${u.sv > 1 ? "s" : ""} · meilleure série ×${u.best}</p><p class="kzsm">${s ? "Nouveau record !" : "Record : " + a}</p><div class="kzbr"><button class="btn" data-a="kzA" data-v="${e}">Rejouer</button><button class="btn alt" data-a="back" data-v="hub">Retour</button></div></div>`));
      })();
    setTimeout(b, 100);
  };
  (setTimeout(b, 100), window.scrollTo(0, 0));
}
setTimeout(() =>
  Object.assign(act, {
    kzA: (e) => {
      const t = +e;
      t >= 0 && t < 3 && kzArcade(t);
    },
    kzMode: (e) => {
      (st.set("kz:mode", "arc" === e ? "arc" : ""), hub("cuisine"));
    },
  }),
);
const PER = [
  { k: "c", n: "Commun", c: "#c9d2e0", v: 1 },
  { k: "u", n: "Peu commun", c: "#7fe0a0", v: 2 },
  { k: "r", n: "Rare", c: "#7ab8ff", v: 4 },
  { k: "e", n: "Épique", c: "#c79aff", v: 7 },
  { k: "l", n: "Légendaire", c: "#ffd36b", v: 50 },
];
const PEF = [
  { id: "gardon", r: "c", n: "Gardon", sh: "std", b: "#b8c4cc", f: "#e8a0a0", sz: 0.9 },
  {
    id: "perche",
    r: "c",
    n: "Perche",
    sh: "std",
    b: "#c9c25a",
    f: "#ff9a5a",
    st: "v",
    sc: "#4a5a2a",
    sz: 0.95,
  },
  { id: "ablette", r: "c", n: "Ablette", sh: "long", b: "#dfe8f2", f: "#b8c8dc", sz: 0.85 },
  { id: "goujon", r: "c", n: "Goujon", sh: "long", b: "#a89a7a", f: "#c9b898", sp: "#6a5a3a", sz: 0.8 },
  { id: "rotengle", r: "c", n: "Rotengle", sh: "std", b: "#c8ccc0", f: "#ff5a4a", sz: 0.9 },
  { id: "breme", r: "c", n: "Brème", sh: "round", b: "#d8dce4", f: "#a8b0c0", sz: 0.95 },
  { id: "vandoise", r: "c", n: "Vandoise", sh: "long", b: "#b8d0ea", f: "#8aa8c8", sp: "#e8f2ff", sz: 0.85 },
  { id: "chevesne", r: "c", n: "Chevesne", sh: "std", b: "#6a7484", f: "#e0804a", sz: 1 },
  { id: "carassin", r: "c", n: "Carassin", sh: "std", b: "#c9a85a", f: "#e0c07a", sz: 0.9 },
  {
    id: "loche",
    r: "c",
    n: "Loche franche",
    sh: "long",
    b: "#a8946a",
    f: "#c8b48a",
    sp: "#5a4a2a",
    sz: 0.75,
  },
  { id: "epinoche", r: "c", n: "Épinoche", sh: "std", b: "#8aa0a8", f: "#e8664a", sz: 0.7 },
  { id: "hotu", r: "c", n: "Hotu", sh: "long", b: "#9aa8b4", f: "#d0a080", sz: 0.9 },
  { id: "gremille", r: "c", n: "Grémille", sh: "std", b: "#a8a070", f: "#c8c090", sp: "#4a4a2a", sz: 0.8 },
  {
    id: "spirlin",
    r: "c",
    n: "Spirlin",
    sh: "long",
    b: "#c8d4e4",
    f: "#9aaccc",
    st: "v",
    sc: "#5a6a8a",
    sz: 0.75,
  },
  {
    id: "truite",
    r: "u",
    n: "Truite arc-en-ciel",
    sh: "long",
    b: "#9ab8a0",
    f: "#c9dcc0",
    sp: "#ff8aa0",
    sz: 1,
  },
  { id: "carpe", r: "u", n: "Carpe", sh: "round", b: "#c99a4a", f: "#e8c07a", sz: 1.05 },
  { id: "tanche", r: "u", n: "Tanche", sh: "std", b: "#5a7a3a", f: "#8aa85a", sz: 1 },
  { id: "fario", r: "u", n: "Truite fario", sh: "long", b: "#b8945a", f: "#d8b880", sp: "#e84a3a", sz: 1 },
  {
    id: "miroir",
    r: "u",
    n: "Carpe miroir",
    sh: "round",
    b: "#d8a83a",
    f: "#f2d27a",
    sp: "#fff2c0",
    sz: 1.05,
  },
  {
    id: "sandre",
    r: "u",
    n: "Sandre",
    sh: "long",
    b: "#8a9a8a",
    f: "#c0ccc0",
    st: "v",
    sc: "#4a5a4a",
    sz: 1.05,
  },
  {
    id: "blackbass",
    r: "u",
    n: "Black-bass",
    sh: "std",
    b: "#5a8a4a",
    f: "#a8c890",
    st: "v",
    sc: "#2a4a2a",
    sz: 1,
  },
  { id: "ombre", r: "u", n: "Ombre commun", sh: "std", b: "#8a94a8", f: "#b88ad0", sp: "#3a3a4a", sz: 1 },
  { id: "barbeau", r: "u", n: "Barbeau", sh: "long", b: "#b8a070", f: "#e09a5a", sz: 1 },
  {
    id: "truitelac",
    r: "u",
    n: "Truite de lac",
    sh: "long",
    b: "#8aa0b8",
    f: "#b8c8d8",
    sp: "#2a3a4a",
    sz: 1.05,
  },
  { id: "lotte", r: "u", n: "Lotte", sh: "long", b: "#7a6a4a", f: "#a89a7a", sp: "#4a3a2a", sz: 1.05 },
  { id: "aspe", r: "u", n: "Aspe", sh: "long", b: "#b8c4d4", f: "#8a9ab4", sz: 1 },
  { id: "brochet", r: "r", n: "Brochet", sh: "long", b: "#6a8a4a", f: "#a8c07a", sp: "#e8f0a0", sz: 1.15 },
  { id: "saumon", r: "r", n: "Saumon", sh: "long", b: "#c8d0e0", f: "#ff9a7a", sp: "#ff8a6a", sz: 1.15 },
  {
    id: "omble",
    r: "r",
    n: "Omble chevalier",
    sh: "std",
    b: "#3a4a6a",
    f: "#ff8a5a",
    sp: "#ffd0a0",
    sz: 1.05,
  },
  { id: "huchon", r: "r", n: "Huchon", sh: "long", b: "#b88a6a", f: "#d8a888", sp: "#5a3a2a", sz: 1.2 },
  { id: "coregone", r: "r", n: "Corégone", sh: "std", b: "#d0dcea", f: "#a8b8d0", sz: 1.05 },
  {
    id: "marbree",
    r: "r",
    n: "Truite marbrée",
    sh: "long",
    b: "#8a9a6a",
    f: "#b8c890",
    sp: "#3a4a2a",
    sz: 1.1,
  },
  { id: "anguille", r: "r", n: "Anguille argentée", sh: "long", b: "#7a8aa0", f: "#a8b8cc", sz: 1.15 },
  { id: "esturgeon", r: "e", n: "Esturgeon", sh: "long", b: "#7a8aa8", f: "#b8c4dc", sc: "#4a5a78", sz: 1.3 },
  { id: "silure", r: "e", n: "Poisson-chat géant", sh: "std", b: "#5a4a3a", f: "#8a7a6a", sz: 1.3 },
  { id: "koidor", r: "e", n: "Koï dorée", sh: "std", b: "#ffcf4a", f: "#fff0b0", sp: "#ffffff", sz: 1.15 },
  {
    id: "koiciel",
    r: "l",
    aq: 1,
    nw: 1,
    n: "Koï céleste",
    sh: "koiciel",
    b: "#f4f2ff",
    f: "#ff6a3a",
    f2: "#ffd27a",
    sz: 1.3,
  },
  {
    id: "raieaur",
    r: "l",
    aq: 1,
    n: "Raie aurore",
    sh: "raieaur",
    b: "#2fd1c5",
    f: "#e9d6ff",
    sc: "#9a6ad8",
    sp: "#fff6d0",
    sz: 2.4,
  },
];
const peR = (e) => PER.find((t) => t.k === e);
function peLk() {
  let l = st.get("pe:lock", {});
  l = l && "object" == typeof l && !Array.isArray(l) ? l : {};
  const ks = Object.keys(l);
  if (ks.length) {
    try {
      const sn = st.get("pe:seen", []),
        s = Array.isArray(sn) ? sn.slice() : [],
        b = st.get("pe:bag", {}) || {};
      (ks.forEach((k) => {
        l[k] && (s.includes(k) || s.push(k), (0 | b[k]) > 0 && (b[k]--, b[k] <= 0 && delete b[k]));
      }),
        st.set("pe:seen", s),
        st.set("pe:bag", b),
        st.set("pe:lock", {}));
    } catch (e) {}
    return {};
  }
  return l;
}
setTimeout(() => {
  try {
    peLk();
  } catch (e) {}
}, 0);
function peSn() {
  const a = st.get("pe:seen", []),
    s = Array.isArray(a) ? a.slice() : [],
    b = peBag();
  let q;
  try {
    q = aqRead().f;
  } catch (e) {
    q = {};
  }
  const n0 = s.length;
  PEF.forEach((f) => {
    !s.includes(f.id) && ((0 | b[f.id]) > 0 || (f.aq && q && q[f.id])) && s.push(f.id);
  });
  if (s.length > n0)
    try {
      st.set("pe:seen", s);
    } catch (e) {}
  return s;
}
function peXm() {
  try {
    return xmAll();
  } catch (e) {
    return !1;
  }
}
function peXf() {
  return peXm();
}
function peXr() {
  return Date.now() >= new Date(2026, 11, 1).getTime();
}
function peUn() {
  try {
    if ("function" == typeof UNL && UNL()) return !0;
    if (Date.now() < new Date(2026, 10, 28, 10).getTime()) return !1;
    if (st.get("pe:u2", 0)) return !0;
    const q = peSn().filter((i) => PEF.some((f) => f.id === i && !f.x && !f.wd)).length;
    if (q >= 40) {
      st.set("pe:u2", 1);
      return !0;
    }
  } catch (e) {}
  return !1;
}
function peU3() {
  try {
    return Date.now() >= new Date(2027, 0, 9, 10).getTime() || ("function" == typeof UNL && UNL());
  } catch (e) {
    return !1;
  }
}
function peWd() {
  try {
    if (peXm()) return 1;
    const w = st.get("pe:wd", 1);
    return 2 === w && peUn() ? 2 : 3 === w && peU3() ? 3 : 1;
  } catch (e) {
    return 1;
  }
}
function peRoll() {
  const X = peXf(),
    e = 1e4 * Math.random();
  let t = e < 2 ? (X ? "e" : "l") : e < 502 ? "e" : e < 2002 ? "r" : e < 5002 ? "u" : "c";
  const W = peWd(),
    ok = (x) => !x.nw && (X ? x.x : W > 1 ? W === x.wd : !x.wd && (!x.x || peXr()));
  let a = PEF.filter((x) => ok(x) && x.r === t);
  if (!a.length) {
    t = "e";
    a = PEF.filter((x) => ok(x) && x.r === t);
  }
  return "l" === t ? a[e < 1 ? 0 : a.length > 1 ? 1 : 0] : a[Math.floor(Math.random() * a.length)];
}
function peBag() {
  const e = st.get("pe:bag", {});
  return e && "object" == typeof e ? e : {};
}
function peBg() {
  return `<svg class="pebg" viewBox="0 0 400 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs>\n<linearGradient id="pes" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b0f33"/><stop offset=".5" stop-color="#2b2a6e"/><stop offset="1" stop-color="#5a4a8e"/></linearGradient>\n<linearGradient id="pew0" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a3a7a"/><stop offset="1" stop-color="#0c1638"/></linearGradient>\n<linearGradient id="pea" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7affd0" stop-opacity="0"/><stop offset=".4" stop-color="#7affd0" stop-opacity=".28"/><stop offset=".7" stop-color="#c9a3ff" stop-opacity=".22"/><stop offset="1" stop-color="#c9a3ff" stop-opacity="0"/></linearGradient>\n<radialGradient id="pem"><stop offset="0" stop-color="#fff6d0" stop-opacity=".5"/><stop offset="1" stop-color="#fff6d0" stop-opacity="0"/></radialGradient></defs>\n<rect width="400" height="700" fill="url(#pes)"/>${[...Array(46)].map((e, t) => `<circle cx="${(83 * t + 17) % 400}" cy="${(47 * t + 11) % 240}" r="${0.7 + (t % 3) * 0.5}" fill="#fff" opacity="${0.35 + (t % 3) * 0.2}"/>`).join("")}\n<path class="peau" d="M-20 120Q80 40 200 100T420 80V140Q300 170 200 150T-20 180Z" fill="url(#pea)"/>\n<circle cx="300" cy="90" r="70" fill="url(#pem)"/><circle cx="300" cy="90" r="22" fill="#fff6d0"/>\n<path d="M0 290L40 230L70 250L120 190L170 250L210 220L260 270L300 210L350 250L400 220V300H0Z" fill="#3a3a7a"/><path d="M120 190L106 210L118 206L126 214L134 204ZM300 210L288 228L300 224L310 230Z" fill="#e8ecff"/>\n${[
    ...Array(26),
  ]
    .map((e, t) => {
      const a = 16 * t - 4;
      return `<path d="M${a} 302L${a + 7} ${302 - (26 + ((37 * t) % 24))}L${a + 14} 302Z" fill="#1c2250"/>`;
    })
    .join(
      "",
    )}\n<rect x="0" y="300" width="400" height="400" fill="url(#pew0)"/>\n${[...Array(9)].map((e, t) => `<path d="M${280 + (t % 3) * 8 - 3 * t} ${312 + 16 * t}h${36 - 3 * t}" stroke="#fff6d0" stroke-opacity="${0.45 - 0.04 * t}" stroke-width="3" stroke-linecap="round"/>`).join("")}\n${[...Array(14)].map((e, t) => `<path class="perp" style="animation-delay:${0.7 * -t}s" d="M${((67 * t) % 380) + 10} ${330 + ((53 * t) % 330)}q10 -4 20 0" stroke="#9ab8ff" stroke-opacity=".35" stroke-width="1.6" fill="none"/>`).join("")}\n</svg>`;
}
const pePier = () =>
  `<svg class="pepi" viewBox="0 0 150 140" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0h140l10 8v132H0Z" fill="#6a4a30"/>${[18, 58, 98, 134].map((e) => `<rect x="${e - 5}" y="6" width="10" height="134" fill="#4a3220"/>`).join("")}${[...Array(6)].map((e, t) => `<path d="M0 ${18 + 20 * t}h150" stroke="#4a3220" stroke-width="2" vector-effect="non-scaling-stroke"/>`).join("")}<path d="M0 0h142" stroke="#e8ecff" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg><svg class="pelmp" viewBox="0 0 40 70" aria-hidden="true"><path d="M20 70V18" stroke="#4a3220" stroke-width="4"/><circle cx="20" cy="14" r="22" fill="#ffcf7a" opacity=".2"/><circle cx="20" cy="14" r="7" fill="#ffcf7a"/></svg>`;
function pePlay() {
  if ("function" == typeof gLock && gLock("peche")) return;
  ((cur = "peche"), (daily = !1), (playing = !1), (snap = null), theme("peche"));
  try {
    kzMu.style("pe");
  } catch (e) {}
  const e = ++KZRUN,
    t = () => e === KZRUN && "peche" === cur && !!document.getElementById("peg");
  ((app.innerHTML = `<div class="peg" id="peg"><div class="pet"><button class="back pehome" data-a="back" data-v="home" aria-label="Retour"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11.5 12 4.5l8 7"/><path d="M6 10v9h4.5v-5h3v5H18v-9"/></svg></button><b>Pêche</b><div class="petr"><button class="hb pebk" data-a="peOdds" aria-label="Probabilités"><span>%</span></button><div class="chip" id="pefl">🫧 ${FLX()}</div></div></div>\n<div class="pesc${peXm() ? " pexm" : ""}" id="pesc">${peBg()}${peXm() ? peHolesX() : ""}<div class="pesh"><i style="top:62%;animation-duration:26s"></i><i style="top:74%;animation-duration:34s;animation-delay:-12s"></i><i style="top:84%;animation-duration:30s;animation-delay:-20s" class="r"></i></div>${peXm() ? pePierX() : pePier()}<button class="pedk" data-a="peBook" aria-label="Carnet de pêche" style="left:max(4px,calc(20% - 84px))"><svg viewBox="0 0 40 40" aria-hidden="true"><ellipse cx="20" cy="35" rx="15" ry="3" fill="#000" opacity=".3"/><rect x="6" y="9" width="28" height="25" rx="3" fill="#8a2f3a" stroke="#4a1018" stroke-width="1.4"/><rect x="9" y="9" width="3" height="25" fill="#5e1a24"/><rect x="14" y="13" width="16" height="10" rx="1.5" fill="#f3d58a" stroke="#a8781a" stroke-width=".8"/><path d="M22 15.5l1.5 3 3.3.5-2.4 2.3.6 3.2-3-1.6-3 1.6.6-3.2-2.4-2.3 3.3-.5z" fill="#8a2f3a" transform="translate(-.2 -1.4) scale(.95) translate(1 1)"/><path d="M14 28h16" stroke="#f3d58a" stroke-width="1.4" stroke-linecap="round"/></svg></button><button class="pedk" data-a="peBag" aria-label="Ouvrir le panier" style="left:calc(20% + 34px)"><svg viewBox="0 0 40 40" aria-hidden="true"><ellipse cx="20" cy="35" rx="15" ry="3" fill="#000" opacity=".3"/><path d="M9 17Q20 -2 31 17" fill="none" stroke="#7a4e22" stroke-width="2.6" stroke-linecap="round"/><path d="M5 17h30l-3.5 17H8.5z" fill="#c8924a" stroke="#6a4218" stroke-width="1.4" stroke-linejoin="round"/><path d="M6.5 23h27M7.6 29h24.8M14 17l1.2 17M20 17v17M26 17l-1.2 17" stroke="#8a5a28" stroke-width="1.2"/></svg><b class="pebdg" id="pebn">0</b></button><svg class="peln" id="peln" aria-hidden="true"><path id="perd" d="" stroke="#8a5a30" stroke-width="3.2" stroke-linecap="round" fill="none"/><path id="pelp" d="" stroke="#e8ecff" stroke-opacity=".75" stroke-width="1.4" fill="none"/><circle id="perh" r="6" cx="-20" cy="-20" fill="#fff" stroke="#cfc8ea" stroke-width="1.2"/></svg>\n<div class="pezn" id="pezn">${"function" == typeof qzGuy ? qzGuy("ask") : ""}</div>\n\n<div class="pefl" id="pefo" hidden><svg viewBox="0 0 20 30" aria-hidden="true"><path d="M10 0v8" stroke="#fff" stroke-width="1.4"/><ellipse cx="10" cy="14" rx="6" ry="7" fill="#ff5a5a"/><path d="M4 14a6 7 0 0 0 12 0z" fill="#fff"/><ellipse cx="10" cy="21" rx="9" ry="2.2" fill="#9ab8ff" opacity=".5"/></svg><b class="pex" id="pex" hidden>!</b></div></div>\n<div class="pehud"><p class="m pem" id="m" role="status" aria-live="polite">${peXm() ? "Touche un trou dans la glace pour lancer ta ligne." : "Touche le lac pour lancer ta ligne."}</p><div class="pepr" id="pepr" hidden><i id="pepi"></i><b class="pete"><i id="pete"></i></b></div><button class="btn pebt" id="pebt" data-a="peAct">Lancer</button></div><div class="peov" id="peov" hidden></div></div>`),
    ($("#nav").hidden = !0),
    (mt = "m"));
  {
    const U = document.createElement("div");
    ((U.className = "peup"), U.append($("#pepr"), $("#m")), $("#pesc").appendChild(U));
  }
  const a = $("#pesc"),
    s = $("#pefo"),
    n = $("#pelp"),
    o = $("#pebt"),
    i = $("#pepr"),
    r = $("#pepi");
  let l = { st: "idle", x: 0, y: 0, fish: null, p: 0, hold: !1, pull: 0, pt: 0, t0: 0, bite: 0 },
    c = 0;
  const d = () => a.clientWidth,
    f = () => a.clientHeight,
    u = () => ({ x: 0.33 * d(), y: 0.62 * f() }),
    h = () => {
      const e = peBag(),
        t = Object.values(e).reduce((e, t) => e + (0 | t), 0),
        a = $("#pebn");
      a && (a.textContent = t);
    };
  h();
  const p = () => {
      const e = u(),
        t = $("#perd"),
        H = $("#perh");
      H && (H.setAttribute("cx", 0.2 * d() + 15), H.setAttribute("cy", 0.8 * f() - 10));
      if ((t && t.setAttribute("d", `M${0.2 * d() + 15} ${0.8 * f() - 10}L${e.x} ${e.y}`), s.hidden))
        return void n.setAttribute("d", "");
      const a = "reel" === l.st ? (l.pull ? 2 : 14) : 30;
      n.setAttribute("d", `M${e.x} ${e.y}Q${(e.x + l.x) / 2} ${Math.max(e.y, l.y) + a} ${l.x} ${l.y}`);
    },
    m = (e, t) => {
      s.style.transform = `translate(${e - 10}px,${t - 21}px)`;
    },
    b = (e, t) => {
      ((o.textContent = e), (o.dataset.a = t));
    },
    g = (e) => {
      ((l.st = "idle"),
        (s.hidden = !0),
        (i.hidden = !0),
        ($("#pex").hidden = !0),
        b("Lancer", "peAct"),
        e && msg(e),
        p());
    },
    E = (e, a) => {
      if ("idle" !== l.st) return;
      const n = u(),
        o = d(),
        i = f();
      ((e = Math.max(0.42 * o, Math.min(o - 20, e))),
        (a = Math.max(0.5 * i, Math.min(0.86 * i, a))),
        (l.st = "cast"),
        (s.hidden = !1),
        b("…", "peAct"),
        sfx(420, 0.12));
      const r = performance.now(),
        c = (s) => {
          if (!t()) return;
          const o = Math.min(1, (s - r) / 750);
          if (
            ((l.x = n.x + (e - n.x) * o),
            (l.y = n.y + (a - n.y) * o - Math.sin(o * Math.PI) * i * 0.18),
            m(l.x, l.y),
            p(),
            o < 1)
          )
            return requestAnimationFrame(c);
          ((l.st = "wait"),
            (l.t0 = performance.now()),
            (l.bite = l.t0 + 2500 + 5500 * Math.random()),
            sfx(240, 0.15),
            msg("Patience… le flotteur se balance."),
            b("Ramener", "peAct"),
            y());
        };
      requestAnimationFrame(c);
    },
    y = () => {
      cancelAnimationFrame(c);
      const e = (a) => {
        if (!t()) return;
        const s = (a - l.t0) / 1e3;
        if ("wait" === l.st) {
          const e = Math.sin(9 * s) * (Math.sin(1.3 * s) > 0.92 ? 3 : 0);
          (m(l.x, l.y + 1.6 * Math.sin(2 * s) + e),
            a >= l.bite &&
              ((l.st = "bite"),
              (l.bt = a),
              ($("#pex").hidden = !1),
              sfx(700, 0.2),
              vib([20, 40, 20]),
              msg("Ça mord ! Ferre vite !"),
              b("Ferrer !", "peAct")));
        } else if ("bite" === l.st)
          (m(l.x, l.y + 6 + 3 * Math.sin(30 * s)),
            a - l.bt > 3e3 &&
              ((l.st = "wait"),
              ($("#pex").hidden = !0),
              (l.bite = a + 2500 + 5e3 * Math.random()),
              msg("Le poisson est reparti. Un autre viendra…"),
              b("Ramener", "peAct")));
        else if ("reel" === l.st) {
          const e = l.fish,
            t = "curel".indexOf(e.r),
            s = Math.min(0.05, (a - (l.ln || a)) / 1e3);
          ((l.ln = a),
            a >= l.pt &&
              ((l.pull = l.pull ? 0 : 1),
              (l.pt = a + (l.pull ? 700 + 250 * t : 1600 - 200 * t + 900 * Math.random())),
              l.pull
                ? (msg("Il tire ! Relâche un peu…"), sfx(300, 0.08))
                : msg("Il se fatigue : remonte-le doucement.")));
          const EH = l.hold && a >= (l.lk || 0),
            n = 0.3 - 0.04 * t;
          ((l.p += EH ? (l.pull ? -0.1 - 0.03 * t : n) * s : (l.pull ? -0.03 * (1 + t) : 0) * s),
            (l.p = Math.max(0, Math.min(1, l.p))),
            (r.style.width = 100 * l.p + "%"),
            i.classList.toggle("pl", !!l.pull),
            (l.te = Math.max(0, (l.te || 0) + (EH && l.pull ? [0.3, 0.55, 0.85, 0.95, 1.6][t] : -0.45) * s)));
          const o = $("#pete");
          if (
            ((e.chest || "l" === e.r) && (l.te = Math.min(l.te, 0.9)),
            o && ((o.style.width = Math.min(100, 100 * l.te) + "%"), o.classList.toggle("hi", l.te > 0.6)),
            l.te >= 1)
          ) {
            (cancelAnimationFrame(c), sfx(180, 0.3), vib(60));
            const t =
              "l" === e.r || "e" === e.r
                ? "un poisson très puissant"
                : "r" === e.r
                  ? "un beau poisson"
                  : "le poisson";
            return void g(
              "Oh ! " + t[0].toUpperCase() + t.slice(1) + " s’est décroché… Relâche quand il tire !",
            );
          }
          const d = u(),
            f = l.p;
          if (
            ((l.x = l.rx + (d.x + 30 - l.rx) * f + (l.pull ? 4 * Math.sin(a / 60) : 0)),
            (l.y = l.ry + (d.y + 20 - l.ry) * f),
            m(l.x, l.y + 2 * Math.sin(a / 90)),
            p(),
            l.p >= 1)
          )
            return A();
        }
        c = requestAnimationFrame(e);
      };
      c = requestAnimationFrame(e);
    },
    v = () => {
      ((l.pr = []),
        (l.lk = 0),
        (l.fish = Math.random() < 0.02 ? { id: "*chest", r: "r", n: "Coffre", chest: 1 } : peRoll()),
        (l.st = "reel"),
        (l.p = 0.08),
        (l.te = 0),
        (l.pull = 0),
        (l.pt = performance.now() + 900),
        (l.rx = l.x),
        (l.ry = l.y),
        (l.ln = 0),
        ($("#pex").hidden = !0),
        (i.hidden = !1),
        sfx(520, 0.15),
        msg(
          "l" === l.fish.r
            ? "Quelle force… c’est un poisson extraordinaire !"
            : "e" === l.fish.r
              ? "Il est lourd ! Prends ton temps."
              : "Ferré ! Maintiens le bouton sans lâcher pour remonter.",
        ),
        b("Maintenir pour remonter", "peHold"),
        i.classList.toggle("lg", "l" === l.fish.r));
    },
    A = () => {
      cancelAnimationFrame(c);
      if (l.fish.chest) return (g(""), h(), void PEC());
      const e = l.fish,
        t = peR(e.r),
        a = peBag(),
        s = peSn(),
        n = !s.includes(e.id);
      n || ((a[e.id] = 1 + (0 | a[e.id])), st.set("pe:bag", a));
      if (n) {
        (s.push(e.id), st.set("pe:seen", s));
        try {
          styGain(1);
          msg("🦪 +1 fragment de nacre");
        } catch (x) {}
      }
      (h(),
        sfx("l" === e.r ? 990 : 784, 0.35),
        vib("l" === e.r ? [40, 60, 40, 60, 80] : [20, 30, 20]),
        g(""));
      const o = $("#peov");
      ((o.hidden = !1),
        (o.innerHTML = `<div class="pecard pr${e.r}"><small style="color:${t.c}">${t.n}${n ? " · nouveau !" : ""}</small><div class="pefi">${fishSVG(e)}</div><h2>${e.n}</h2><p>${n ? "Première prise de cette espèce : elle entre dans l’almanach (elle ne se vend pas)." : "Doublon : il va dans ton panier. Vends-le " + t.v + " 🫧" + (e.aq ? " ou offre-le à l’aquarium" : "") + "."}</p><button class="btn" data-a="peOk">${n ? "Continuer" : "Dans le panier"}</button></div>`));
    },
    S = (e) => {
      if ("reel" !== l.st) return;
      if (e && !l.hold) {
        const n = performance.now(),
          p = (l.pr = (l.pr || []).filter((x) => n - x < 1200));
        p.push(n);
        if (p.length >= 3) {
          l.lk = n + 1500;
          l.pr = [];
          msg("Ne tapote pas : maintiens le bouton sans lâcher !");
        }
      }
      l.hold = e;
    };
  (a.addEventListener("pointerdown", (e) => {
    if (e.target.closest && e.target.closest(".pedk")) return;
    if ("idle" === l.st) {
      const t = a.getBoundingClientRect();
      E(...pexs(e.clientX - t.left, e.clientY - t.top, t.width, t.height));
    } else "bite" === l.st ? v() : "reel" === l.st && S(!0);
  }),
    o.addEventListener("pointerdown", (e) => {
      "reel" === l.st && (e.preventDefault(), S(!0));
    }));
  const x = () => S(!1);
  (addEventListener("pointerup", x),
    addEventListener("pointercancel", x),
    Object.assign(act, {
      peAct: () => {
        t() &&
          ("idle" === l.st
            ? E(...pexs(d() * (0.55 + 0.35 * Math.random()), f() * (0.58 + 0.25 * Math.random()), d(), f()))
            : "bite" === l.st
              ? v()
              : "wait" === l.st && (cancelAnimationFrame(c), g("Ligne ramenée.")));
      },
      peHold: () => {},
      peOk: () => {
        const e = $("#peov");
        (e && ((e.hidden = !0), (e.innerHTML = "")),
          msg(peXm() ? "Touche un trou dans la glace pour relancer." : "Touche le lac pour relancer."));
      },
      peBag: () => L(),
      peBook: () => act.peAl(),
      peAlW: (e) => {
        const w = +e;
        if (2 === w && !peUn())
          return msg(
            Date.now() < new Date(2026, 10, 28, 10).getTime()
              ? "🔒 Monde 2 : disponible samedi 28 novembre à 10 h."
              : "🔒 Monde 2 : pêche 40 espèces du monde 1.",
          );
        if (3 === w && !(peXr() || peXm() || peU3())) return msg("🔒 Monde des fêtes : dès le 1er décembre.");
        act.__s.w = w;
        act.peAl();
      },
      peAlR: (e) => {
        act.__s.r = e || "";
        act.peAl();
      },
      peAlF: (e) => {
        act.__s.f = e || "";
        act.peAl();
      },
      peAl: () => {
        const e = $("#peov");
        if (!e) return;
        const S = act.__s || (act.__s = { w: 1, r: "", f: "" }),
          t = peSn(),
          u2 = peUn(),
          u3 = peXr() || peXm() || peU3(),
          WL = [
            [1, "Monde 1", "🐟", (f) => !f.x && !f.wd, 1],
            [2, "Monde 2", "🌸", (f) => 2 === f.wd, u2],
            [3, "Fêtes", "🎄", (f) => !!f.x, u3],
          ];
        WL.find((x) => x[0] === S.w && x[4]) || (S.w = 1);
        const W = WL.find((x) => x[0] === S.w),
          A = PEF.filter(W[3]),
          got = A.filter((f) => t.includes(f.id)).length,
          pc = A.length ? Math.round((100 * got) / A.length) : 0,
          ok = (g) => ("ok" === S.f ? g : "no" === S.f ? !g : !0),
          card = (g, sv, nm, c) =>
            `<div class="pebki${g ? "" : " no"}"${g ? ` style="box-shadow:inset 0 0 0 1.5px ${c}"` : ""}><span>${sv}</span><small>${g ? nm : "???"}</small></div>`;
        let h = "";
        PER.forEach((r) => {
          if (S.r && S.r !== r.k) return;
          const L = A.filter((f) => f.r === r.k);
          if (!L.length) return;
          const g = L.filter((f) => t.includes(f.id)).length,
            V = L.filter((f) => ok(t.includes(f.id)));
          h +=
            `<h3 class="pebkh" style="color:${r.c}">${r.n} <small>${g}/${L.length}</small><em>${r.v} 🫧</em></h3>` +
            (V.length
              ? `<div class="pebkg">${V.map((f) => card(t.includes(f.id), fishSVG(f), f.n, r.c)).join("")}</div>`
              : '<p class="kzsm">Rien ici avec ce filtre.</p>');
        });
        if (1 === S.w && !S.r) {
          const M = [
            ["cristalf", "Poisson cristal"],
            ["marais", "Coffre des marais"],
          ].filter((x) => ok(!!peOwn(x[0])));
          M.length &&
            (h += `<h3 class="pebkh" style="color:#9ff0ff">Mythique <small>dans les coffres</small></h3><div class="pebkg">${M.map((x) => card(!!peOwn(x[0]), peIco(x[0]), x[1], "#9ff0ff")).join("")}</div>`);
        }
        h || (h = '<p class="kzsm">Rien à afficher avec ce filtre.</p>');
        const chip = (a, v, cur, l, c) =>
          `<button class="pealc${cur === v ? " on" : ""}" data-a="${a}" data-v="${v}"${c ? ` style="--c:${c}"` : ""}>${l}</button>`;
        ((e.hidden = !1),
          (e.innerHTML = `<div class="pebag peal"><div class="pealh"><div class="pebh"><h2>Almanach</h2><button class="pealb pealq" data-a="peOdds" aria-label="Probabilités">%</button><button class="pealb pealx" data-a="peBagX" aria-label="Fermer">✕</button></div><div class="pealt">${WL.map((x) => `<button class="pealw${x[0] === S.w ? " on" : ""}${x[4] ? "" : " lk"}" data-a="peAlW" data-v="${x[0]}">${x[4] ? x[2] : "🔒"}<span>${x[1]}</span></button>`).join("")}</div><div class="pealp"><i style="width:${pc}%"></i><b>${got} / ${A.length} · ${pc} %</b></div><div class="pealr">${chip("peAlR", "", S.r, "Toutes")}${PER.map((r) => chip("peAlR", r.k, S.r, r.n, r.c)).join("")}</div></div>${h}</div>`));
      },
      peSell: (e) => {
        const t = peBag(),
          a = PEF.find((t) => t.id === e);
        if (!(a && t[e] > 0)) return;
        const LK = peLk(),
          sl = t[e] - (LK[e] ? 1 : 0);
        if (sl <= 0) return msg("Garde ta nouvelle espèce : tu pourras vendre les suivantes.");
        const s = sl * peR(a.r).v;
        (LK[e] ? (t[e] = 1) : delete t[e],
          st.set("pe:bag", t),
          (fl += s),
          st.set("fl", fl),
          sfx(880, 0.2),
          msg("+" + s + " 🫧"),
          L(),
          h(),
          M());
      },
      peSellAll: () => {
        const e = peBag(),
          LK = peLk();
        let t = 0;
        for (const a in e) {
          const s = PEF.find((e) => e.id === a);
          if (s && "l" !== s.r) {
            const q = (0 | e[a]) - (LK[a] ? 1 : 0);
            q > 0 && ((t += q * peR(s.r).v), LK[a] ? (e[a] = 1) : delete e[a]);
          }
        }
        if (!t) return msg("Rien à vendre pour l’instant.");
        (st.set("pe:bag", e),
          (fl += t),
          st.set("fl", fl),
          sfx(880, 0.25),
          msg("Tu as vendu ta pêche : +" + t + " 🫧"),
          L(),
          h(),
          M());
      },
      peAq: (e) => {
        const t = peBag(),
          a = PEF.find((t) => t.id === e && t.aq);
        if (!(a && t[e] > 0)) return;
        const s = aqRead();
        if (s.f[e]) return msg("Ce poisson nage déjà dans ton aquarium.");
        const n = "function" != typeof aqOn || void 0 === MAXF || aqOn(s).length < MAXF;
        ((s.f[e] = { t: Date.now(), on: n ? 1 : 0, n: a.n }),
          aqSave(s),
          t[e]--,
          t[e] || delete t[e],
          (() => {
            const q = peLk();
            q[e] && (delete q[e], st.set("pe:lock", q));
          })(),
          st.set("pe:bag", t),
          sfx(990, 0.3),
          msg(a.n + " nage maintenant dans ton aquarium" + (n ? " !" : " (en réserve).")),
          L(),
          h());
      },
      peBagX: () => {
        const e = $("#peov");
        e && ((e.hidden = !0), (e.innerHTML = ""));
      },
      peHelp: () => {
        const e = $("#peov");
        if (!e) return;
        st.set("pe:w", 1);
        const F = PEF.find((x) => !x.x) || PEF[0],
          B =
            '<svg viewBox="0 0 20 30"><path d="M10 0v8" stroke="#fff" stroke-width="1.4"/><ellipse cx="10" cy="14" rx="6" ry="7" fill="#ff5a5a"/><path d="M4 14a6 7 0 0 0 12 0z" fill="#fff"/><ellipse cx="10" cy="21" rx="9" ry="2.2" fill="#9ab8ff" opacity=".5"/></svg>',
          K =
            '<svg viewBox="0 0 40 40"><rect x="6" y="9" width="28" height="25" rx="3" fill="#8a2f3a" stroke="#4a1018" stroke-width="1.4"/><rect x="9" y="9" width="3" height="25" fill="#5e1a24"/><rect x="14" y="13" width="16" height="10" rx="1.5" fill="#f3d58a" stroke="#a8781a" stroke-width=".8"/><path d="M14 28h16" stroke="#f3d58a" stroke-width="1.4" stroke-linecap="round"/></svg>',
          P =
            '<svg viewBox="0 0 40 40"><path d="M9 17Q20 -2 31 17" fill="none" stroke="#7a4e22" stroke-width="2.6" stroke-linecap="round"/><path d="M5 17h30l-3.5 17H8.5z" fill="#c8924a" stroke="#6a4218" stroke-width="1.4" stroke-linejoin="round"/><path d="M6.5 23h27M7.6 29h24.8M14 17l1.2 17M20 17v17M26 17l-1.2 17" stroke="#8a5a28" stroke-width="1.2"/></svg>',
          H = (i, t) => '<div class="pehw"><span class="pehi">' + i + "</span><p>" + t + "</p></div>";
        e.hidden = !1;
        e.innerHTML =
          '<div class="pecard pehc"><h2 style="margin:0 0 4px">Comment pêcher</h2>' +
          H(B, "<b>1. Lance.</b> Touche le lac pour lancer ta ligne, puis attends que le flotteur plonge.") +
          H(
            '<span style="font:800 26px system-ui;color:#ffd45a">!</span>',
            "<b>2. Ferre.</b> Quand « Ça mord ! » s’affiche, touche vite pour ferrer.",
          ) +
          H(
            fishSVG(F),
            "<b>3. Remonte.</b> Maintiens le bouton sans lâcher. Quand le poisson tire, relâche ; quand il se fatigue, maintiens à nouveau. Marteler le bouton ne marche pas : il faut maintenir.",
          ) +
          H(
            K,
            "<b>4. Almanach.</b> Ta première prise de chaque espèce entre dans l’almanach pour toujours. Elle ne se vend pas.",
          ) +
          H(
            P,
            "<b>5. Doublons.</b> Les poissons en double vont dans ton panier : vends-les contre des bulles 🫧 ou offre certains à ton aquarium.",
          ) +
          '<button class="btn" data-a="peBagX">J’ai compris</button></div>';
      },
    }));
  const M = () => {
    const e = $("#pefl");
    e && (e.textContent = "🫧 " + FLX());
  };
  function L() {
    const e = $("#peov");
    if (!e) return;
    const t = peBag(),
      a = peSn(),
      s = aqRead(),
      LK = peLk(),
      n = PEF.filter((e) => t[e.id] > 0)
        .map((e) => {
          const a = peR(e.r),
            n = t[e.id],
            sl = n - (LK[e.id] ? 1 : 0);
          return `<div class="pebr"><span class="pebf">${fishSVG(e)}</span><span class="pebt2"><b>${e.n} × ${n}</b><small style="color:${a.c}">${a.n} · ${a.v} 🫧 pièce</small></span><span class="pebb">${sl > 0 ? `<button class="sb" data-a="peSell" data-v="${e.id}">Vendre · ${sl * a.v} 🫧</button>` : `<small class="pebk1">Nouvelle espèce : gardée</small>`}${e.aq ? `<button class="sb buy" data-a="peAq" data-v="${e.id}"${s.f[e.id] ? " disabled" : ""}>${s.f[e.id] ? "Déjà à l’aquarium" : "Aquarium"}</button>` : ""}</span></div>`;
        })
        .join(""),
      o = PEF.filter((e) => "l" !== e.r).reduce(
        (e, a) => e + Math.max(0, (0 | t[a.id]) - (LK[a.id] ? 1 : 0)) * peR(a.r).v,
        0,
      );
    ((e.hidden = !1),
      (e.innerHTML = `<div class="pebag"><div class="pebh"><h2>Ton panier</h2><button class="pealb pealx" data-a="peBagX" aria-label="Fermer">✕</button></div><p class="kzsm">Carnet de pêche : ${a.filter((i) => PEF.some((f) => f.id === i && !f.x && !f.wd)).length} / ${PEF.filter((f) => !f.x && !f.wd).length} espèces découvertes</p><p class="kzsm">Seuls les doublons se vendent : ta première prise de chaque espèce reste dans l’almanach.</p>${n || '<p class="kzsm">Ton panier est vide. Lance ta ligne !</p>'}${o ? `<button class="btn" data-a="peSellAll">Tout vendre · ${o} 🫧</button><p class="kzsm">Les poissons légendaires ne sont pas vendus avec le reste.</p>` : ""}</div>`));
  }
  (g(),
    st.get("pe:w", 0) ||
      setTimeout(() => {
        t() && act.peHelp();
      }, 350));
}
const BBN = 40;