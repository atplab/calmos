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
const BBC = ["#a066e0", "#f2b632", "#3ab8e8", "#f2752a", "#3a6ae0", "#e8403a", "#3ab84a", "#d058e0"];
const BBS = (() => {
  const e = [];
  return (
    [
      [3, [[0, 0]]],
      [
        5,
        [
          [0, 0],
          [0, 1],
        ],
      ],
      [
        5,
        [
          [0, 0],
          [0, 1],
          [0, 2],
        ],
      ],
      [
        4,
        [
          [0, 0],
          [0, 1],
          [0, 2],
          [0, 3],
        ],
      ],
      [
        2,
        [
          [0, 0],
          [0, 1],
          [0, 2],
          [0, 3],
          [0, 4],
        ],
      ],
      [
        5,
        [
          [0, 0],
          [0, 1],
          [1, 0],
          [1, 1],
        ],
      ],
      [
        1.6,
        [
          [0, 0],
          [0, 1],
          [0, 2],
          [1, 0],
          [1, 1],
          [1, 2],
          [2, 0],
          [2, 1],
          [2, 2],
        ],
      ],
      [
        2.2,
        [
          [0, 0],
          [0, 1],
          [0, 2],
          [1, 0],
          [1, 1],
          [1, 2],
        ],
      ],
      [
        4,
        [
          [0, 0],
          [1, 0],
          [1, 1],
        ],
      ],
      [
        2.4,
        [
          [0, 0],
          [1, 0],
          [2, 0],
          [2, 1],
          [2, 2],
        ],
      ],
      [
        3,
        [
          [0, 0],
          [0, 1],
          [0, 2],
          [1, 1],
        ],
      ],
      [
        3,
        [
          [0, 0],
          [0, 1],
          [1, 1],
          [1, 2],
        ],
      ],
      [
        3,
        [
          [0, 1],
          [0, 2],
          [1, 0],
          [1, 1],
        ],
      ],
      [
        3,
        [
          [0, 0],
          [1, 0],
          [2, 0],
          [2, 1],
        ],
      ],
      [
        3,
        [
          [0, 1],
          [1, 1],
          [2, 1],
          [2, 0],
        ],
      ],
      [
        1.4,
        [
          [0, 0],
          [1, 1],
        ],
      ],
      [
        1,
        [
          [0, 0],
          [1, 1],
          [2, 2],
        ],
      ],
    ].forEach(([t, a]) =>
      ((e) => {
        let t = [],
          a = e;
        for (let e = 0; e < 4; e++) {
          const e = [Math.min(...a.map((e) => e[0])), Math.min(...a.map((e) => e[1]))];
          (t.push(a.map((t) => [t[0] - e[0], t[1] - e[1]])), (a = a.map(([e, t]) => [t, -e])));
        }
        return t;
      })(a).forEach((a) =>
        ((t, a) => {
          const s = a
            .map((e) => e.join(","))
            .sort()
            .join(";");
          e.some((e) => e.k === s) || e.push({ w: t, c: a, k: s });
        })(t, a),
      ),
    ),
    e
  );
})();
function pBlocs(e) {
  const t = "blocs" === INFG,
    a = t ? 0 : lv < 10 ? 50 + 30 * lv : Math.round(90 + 45 * lv + (lv > 20 ? 20 * (lv - 20) : 0)),
    s = rng(7919 * (lv + 3) + 5);
  let n = Array(64).fill(-1),
    o = [null, null, null],
    i = 0,
    r = t ? infBest("blocs") : 0,
    l = 0,
    c = !1,
    d = !1,
    f = null,
    u = null;
  const h = (e, t, a, s) =>
      t.c.every(([t, n]) => {
        const o = a + t,
          i = s + n;
        return o >= 0 && o < 8 && i >= 0 && i < 8 && e[8 * o + i] < 0;
      }),
    p = (e) => {
      const t = [],
        a = [];
      for (let s = 0; s < 8; s++) {
        let n = !0,
          o = !0;
        for (let t = 0; t < 8; t++) (e[8 * s + t] < 0 && (n = !1), e[8 * t + s] < 0 && (o = !1));
        (n && t.push(s), o && a.push(s));
      }
      return { rows: t, cols: a };
    },
    m = (e, t, a, s, n) => {
      const o = e.slice();
      t.c.forEach(([e, t]) => (o[8 * (a + e) + s + t] = n));
      const { rows: i, cols: r } = p(o);
      return (
        i.forEach((e) => {
          for (let t = 0; t < 8; t++) o[8 * e + t] = -1;
        }),
        r.forEach((e) => {
          for (let t = 0; t < 8; t++) o[8 * t + e] = -1;
        }),
        { H: o, n: i.length + r.length, rows: i, cols: r }
      );
    },
    b = (e, t) => {
      if (!t.length) return !0;
      for (let a = 0; a < t.length; a++) {
        const s = t[a],
          n = t.filter((e, t) => t !== a);
        for (let t = 0; t < 8; t++)
          for (let a = 0; a < 8; a++)
            if (h(e, s, t, a)) {
              if (!n.length) return !0;
              if (b(m(e, s, t, a, 0).H, n)) return !0;
            }
      }
      return !1;
    },
    g = t ? Math.min(2.2, 1 + i / 3e3) : lv < 4 ? 0.3 : lv < 10 ? 0.6 : 1 + Math.min(1.2, lv / 30),
    E = () => {
      const e = BBS.map((e) => e.w * (e.c.length >= 5 ? g : 1)),
        t = e.reduce((e, t) => e + t, 0);
      let a = Math.random() * t;
      for (let t = 0; t < BBS.length; t++) if (((a -= e[t]), a <= 0)) return BBS[t];
      return BBS[0];
    },
    y = () => {
      let e = null;
      for (let t = 0; t < 80; t++) {
        const t = [E(), E(), E()];
        if (b(n, t)) {
          e = t;
          break;
        }
      }
      if (!e) {
        const t = BBS.filter((e) => e.c.length <= 3);
        for (let a = 0; a < 200 && !e; a++) {
          const a = [
            t[Math.floor(Math.random() * t.length)],
            t[Math.floor(Math.random() * t.length)],
            t[Math.floor(Math.random() * t.length)],
          ];
          b(n, a) && (e = a);
        }
      }
      (e || (e = [BBS[0], BBS[0], BBS[0]]),
        (o = e.map((e) => ({ s: e, col: Math.floor(Math.random() * BBC.length) }))));
    };
  if (
    ((snap = t
      ? null
      : () => ({ g: n, P: o.map((e) => (e ? { k: e.s.k, col: e.col } : null)), sc: i, combo: l })),
    e && Array.isArray(e.g) && 64 === e.g.length)
  ) {
    for (
      n = e.g.slice(),
        i = 0 | e.sc,
        l = 0 | e.combo,
        o = (e.P || []).map((e) => {
          if (!e) return null;
          const t = BBS.find((t) => t.k === e.k);
          return t ? { s: t, col: 0 | e.col } : null;
        });
      o.length < 3;
    )
      o.push(null);
    o.some(Boolean) || y();
  } else {
    if (!t && lv >= 10) {
      const e = Math.min(20, 4 + Math.floor(lv / 3));
      for (let t = 0; t < 3 * e && n.filter((e) => e >= 0).length < e; t++) {
        const e = Math.floor(8 * s() * 8);
        ((n[e] = Math.floor(s() * BBC.length)), (p(n).rows.length || p(n).cols.length) && (n[e] = -1));
      }
    }
    y();
  }
  frame(
    `<div class="bbh"><div class="bbsc"><small>${t ? "Mode infini" : "Objectif " + a}</small><b id="bbs">${i}</b>${t ? `<span>👑 ${r}</span>` : '<i class="bbbar"><i id="bbbr"></i></i>'}</div></div><div class="bbw"><div class="bbg" id="bbg">${n.map((e, t) => `<i class="bbc" data-i="${t}"></i>`).join("")}</div><div class="bbov" id="bbov" hidden></div></div><div class="bbt" id="bbt"></div><div class="bbdr" id="bbdr" hidden></div>`,
    1,
  );
  const v = $("#bbg"),
    A = [...v.children],
    S = $("#bbt"),
    x = $("#bbdr"),
    M = (e, t) => {
      const a = Math.max(...e.s.c.map((e) => e[1])) + 1,
        s = Math.max(...e.s.c.map((e) => e[0])) + 1;
      return `<span class="bbp" style="--w:${a};--h:${s};--cs:${t}px">${e.s.c.map(([t, a]) => `<i style="grid-row:${t + 1};grid-column:${a + 1};--c:${BBC[e.col]}"></i>`).join("")}</span>`;
    },
    L = () => {
      (A.forEach((e, t) => {
        const a = n[t];
        ((e.className = "bbc" + (a >= 0 ? " f" : "")), e.style.setProperty("--c", a >= 0 ? BBC[a] : ""));
      }),
        (S.innerHTML = o
          .map(
            (e, t) =>
              `<div class="bbs${u && u.i === t ? " hn" : ""}" data-i="${t}">${e ? M(e, 16) : ""}</div>`,
          )
          .join("")),
        ($("#bbs").textContent = i));
      const e = $("#bbbr");
      if ((e && (e.style.width = Math.min(100, (100 * i) / a) + "%"), u)) {
        const e = o[u.i];
        e &&
          e.s.c.forEach(([e, t]) => {
            const a = A[8 * (u.r + e) + u.c + t];
            a && a.classList.add("gh", "hn");
          });
      }
    },
    T = (e, t, a) => {
      if ((A.forEach((e) => e.classList.remove("gh", "bad", "cl")), !e || null == t)) return;
      const s = h(n, e.s, t, a);
      if (
        (e.s.c.forEach(([n, o]) => {
          const i = t + n,
            r = a + o;
          if (i >= 0 && i < 8 && r >= 0 && r < 8) {
            const t = A[8 * i + r];
            (t.classList.add(s ? "gh" : "bad"), t.style.setProperty("--g", BBC[e.col]));
          }
        }),
        s)
      ) {
        const { rows: s, cols: o } = m(n, e.s, t, a, e.col);
        (s.forEach((e) => {
          for (let t = 0; t < 8; t++) A[8 * e + t].classList.add("cl");
        }),
          o.forEach((e) => {
            for (let t = 0; t < 8; t++) A[8 * t + e].classList.add("cl");
          }));
      }
    },
    k = () =>
      !o.some(
        (e) =>
          e &&
          ((e, t) => {
            for (let a = 0; a < 8; a++) for (let s = 0; s < 8; s++) if (h(e, t, a, s)) return [a, s];
            return null;
          })(n, e.s),
      ),
    w = () => {
      c = !0;
      const e = $("#bbov");
      if (((e.hidden = !1), t)) {
        const t = infSave("blocs", i);
        e.innerHTML = `<div><b>Plus de place !</b><p>Score : ${i}${t ? " · nouveau record !" : " · record : " + infBest("blocs")}</p><button class="btn" data-a="bbRe">Rejouer</button></div>`;
      } else
        e.innerHTML = `<div><b>Plus de place !</b><p>Aucune pièce ne rentre. Il te manquait ${Math.max(0, a - i)} points.</p><button class="btn" data-a="bbCo">Continuer · 1 🫧</button><button class="btn alt" data-a="bbRe">Recommencer</button></div>`;
      sfx(220, 0.3);
    };
  ((act.bbRe = () => {
    (($("#bbov").hidden = !0), (n = Array(64).fill(-1)), (i = 0), (l = 0), (c = !1), y(), L());
  }),
    (act.bbCo = () => {
      c &&
        spend(1) &&
        (($("#bbov").hidden = !0),
        (c = !1),
        [...Array(8).keys()]
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .forEach((e) => {
            for (let t = 0; t < 8; t++) n[8 * e + t] = -1;
          }),
        k() && y(),
        L());
    }),
    (act.hint = () => {
      if (!c && !d)
        for (let e = 0; e < 3; e++) {
          const t = o[e];
          if (!t) continue;
          const a = o.filter((t, a) => t && a !== e).map((e) => e.s);
          for (let s = 0; s < 8; s++)
            for (let o = 0; o < 8; o++)
              if (h(n, t.s, s, o) && b(m(n, t.s, s, o, 0).H, a)) {
                if (!spend(1)) return;
                return ((u = { i: e, r: s, c: o }), L(), void msg("Essaie de poser cette pièce ici."));
              }
        }
    }),
    S.addEventListener("pointerdown", (e) => {
      const t = e.target.closest(".bbs");
      if (!t || c || d) return;
      const a = +t.dataset.i,
        s = o[a];
      if (!s) return;
      e.preventDefault();
      const n = v.getBoundingClientRect().width / 8;
      ((f = { i: a, p: s, id: e.pointerId }),
        (x.hidden = !1),
        (x.innerHTML = M(s, n - 2)),
        t.classList.add("dg"));
      try {
        S.setPointerCapture(e.pointerId);
      } catch (e) {}
      R(e);
    }));
  const R = (e) => {
    if (!f || e.pointerId !== f.id) return;
    const [t, a, s, n, o] = ((e, t, a) => {
      const s = v.getBoundingClientRect(),
        n = s.width / 8,
        o = e - ((Math.max(...a.s.c.map((e) => e[1])) + 1) * n) / 2,
        i = t - (Math.max(...a.s.c.map((e) => e[0])) + 1) * n - 1.2 * n;
      return [Math.round((i - s.top) / n), Math.round((o - s.left) / n), n, o, i];
    })(e.clientX, e.clientY, f.p);
    ((x.style.transform = `translate(${n}px,${o}px)`), (f.r = t), (f.c = a), T(f.p, t, a));
  };
  (S.addEventListener("pointermove", R),
    S.addEventListener("pointerup", (e) => {
      if (!f || e.pointerId !== f.id) return;
      const s = f;
      ((f = null), (x.hidden = !0), T(null));
      const r = ((e, s, r) => {
        const f = o[e];
        if (!f || c || d || !h(n, f.s, s, r)) return !1;
        const p = m(n, f.s, s, r, f.col),
          b = p.n,
          g = f.s.c.map(([e, t]) => 8 * (s + e) + r + t);
        ((n = p.H), (o[e] = null), (u = null));
        let E = f.s.c.length;
        return (
          b ? (l++, (E += [0, 10, 30, 60, 100, 150, 210][Math.min(6, b)] * (1 + 0.5 * (l - 1)))) : (l = 0),
          (E = Math.round(E)),
          (i += E),
          o.some(Boolean) || y(),
          L(),
          g.forEach((e) => {
            n[e] >= 0 && A[e].classList.add("pop");
          }),
          b
            ? ([
                ...p.rows.flatMap((e) => [...Array(8).keys()].map((t) => 8 * e + t)),
                ...p.cols.flatMap((e) => [...Array(8).keys()].map((t) => 8 * t + e)),
              ].forEach((e) => {
                const t = A[e];
                (t.classList.add("boom"), t.style.setProperty("--c", BBC[f.col]));
              }),
              sfx(520 + 90 * b, 0.25),
              vib(b > 1 ? [15, 30, 15] : 12),
              msg(
                b > 1
                  ? b + " lignes ! +" + E + (l > 1 ? " · combo ×" + l : "")
                  : "+" + E + (l > 1 ? " · combo ×" + l : ""),
              ))
            : sfx(420, 0.08),
          setTimeout(() => A.forEach((e) => e.classList.remove("pop", "boom")), 450),
          !t && i >= a && !d
            ? ((d = !0), msg("Objectif atteint !"), setTimeout(win, 900), !0)
            : (k() && setTimeout(w, 500), !0)
        );
      })(s.i, s.r, s.c);
      r || L();
    }),
    S.addEventListener("pointercancel", (e) => {
      f && ((f = null), (x.hidden = !0), T(null), L());
    }),
    L(),
    msg(
      t
        ? "Place les pièces le plus longtemps possible."
        : "Complète des lignes et des colonnes pour atteindre " + a + " points.",
    ),
    k() && setTimeout(w, 400));
}
let brT = null;
let brGo = null;
let BR = 2;
function brEnd() {
  if (!brT) return;
  (clearInterval(brT), (brT = null));
  const e = brGo;
  ((brGo = null), e && e());
}
function breathe(e) {
  if (!prefs().breath) return e();
  (clearInterval(brT),
    (brGo = e),
    theme(cur),
    ($("#nav").hidden = !0),
    (playing = !1),
    (app.innerHTML = `<div class="top"><span></span><div class="chip">🫧 ${FLX()}</div></div><section class="glass br"><h2>Respire un instant</h2><small>Cohérence cardiaque · ${BR} respiration${BR > 1 ? "s" : ""}</small><div class="br-w"><div class="br-o" style="animation-iteration-count:${BR}"></div><div class="br-t"><b id="bp" aria-live="polite">Inspire</b><span id="bs">4</span></div></div><p class="br-d" id="bc">1 / ${BR}</p><button class="btn alt" data-a="brSkip">Passer</button><button class="lnk" data-a="brOff">Désactiver la respiration</button></section>`));
  const t = performance.now(),
    a = 12 * (BR - 1) + 10;
  let s = "";
  const n = () => {
    const e = $("#bs");
    if (!e) return (clearInterval(brT), (brT = null), void (brGo = null));
    const n = (performance.now() - t) / 1e3;
    if (n >= a) return brEnd();
    const o = Math.floor(n / 12),
      i = n % 12,
      r = i < 4 ? 0 : i < 6 ? 1 : i < 10 ? 2 : 3,
      l = o + ":" + r;
    ((e.textContent = Math.ceil([4, 6, 10, 12][r] - i)),
      l !== s &&
        ((s = l),
        ($("#bp").textContent = ["Inspire", "Retiens", "Expire", "Pause"][r]),
        ($("#bc").textContent = o + 1 + " / " + BR),
        r < 3 && sfx([330, 392, 262][r], [0.9, 0.4, 1.1][r])));
  };
  ((brT = setInterval(n, 200)), n());
}
const TL = [
  {
    n: "Soleil",
    a: "un soleil d’hiver",
    g: ["0004000", "0005000", "006bc00", "2ad07a8", "003e900", "0005000", "0001000"],
  },
  {
    n: "Flocon",
    a: "un flocon",
    g: ["0004000", "002f800", "0405040", "2fafaf8", "0105010", "002f800", "0001000"],
  },
  { n: "Cœur", a: "un cœur", g: ["6ac06ac", "503a905", "3c00069", "03c0690", "003a900"] },
  {
    n: "Sapin",
    a: "un sapin",
    g: ["0004000", "006bc00", "06903c0", "690003c", "5000005", "3ac06a9", "0050500", "003a900"],
  },
  {
    n: "Bonhomme",
    a: "un bonhomme de neige",
    g: ["006ac00", "0050780", "003a900", "0000000", "06aaac0", "0500050", "2d00078", "0500050", "03aaa90"],
  },
  {
    n: "Lune",
    a: "une lune et son étoile",
    g: [
      "006aac00",
      "06900500",
      "69006900",
      "5006906c",
      "50050039",
      "5003c000",
      "3c003c00",
      "03c00500",
      "003aa900",
    ],
  },
  {
    n: "Maison",
    a: "une maison",
    g: [
      "0006c000",
      "00693c00",
      "069003c0",
      "6900003c",
      "50000005",
      "3c000069",
      "0506c050",
      "05055050",
      "03abba90",
    ],
  },
  {
    n: "Cadeau",
    a: "un cadeau",
    g: ["06aeac0", "03afa90", "0005000", "6aafaac", "5005005", "7aafaad", "5005005", "3aabaa9"],
  },
  {
    n: "Fusée",
    a: "une fusée",
    g: ["0004000", "006bc00", "0050500", "007ad00", "0050500", "0050500", "06bebc0", "0105010", "0001000"],
  },
  {
    n: "Planète",
    a: "une planète et son anneau",
    g: ["0006ac000", "000505000", "2aad07aa8", "000505000", "0003a9000"],
  },
  {
    n: "Satellite",
    a: "un satellite",
    g: ["000040000", "6ec0506ec", "7ffafaffd", "3b90503b9", "000050000", "000010000"],
  },
  {
    n: "Casque",
    a: "un casque d’astronaute",
    g: ["06aaac0", "690003c", "506ac05", "5050505", "503a905", "3c00069", "03eae90", "0010100"],
  },
  {
    n: "Parasol",
    a: "un parasol",
    g: ["006aaac00", "06d0007c0", "2bbaeabb8", "000050000", "000050000", "000050000", "2aaabaaa8"],
  },
  {
    n: "Coquillage",
    a: "un coquillage",
    g: ["06aeac0", "690503c", "5005005", "3c05069", "03afa90", "0005000", "002b800"],
  },
  {
    n: "Château de sable",
    a: "un château de sable",
    g: ["404000404", "7ad0007ad", "503aaa905", "500000005", "5006ac005", "500505005", "3aababaa9"],
  },
  {
    n: "Palmier",
    a: "un palmier",
    g: ["06ac06ac0", "6903e903c", "100050001", "000050000", "00003c000", "000005000", "002aabaa8"],
  },
  {
    n: "Arbre",
    a: "un arbre de la forêt",
    g: ["006ac00", "06903c0", "690003c", "5000005", "3c00069", "03aea90", "0005000", "02aba80"],
  },
  {
    n: "Champignon",
    a: "un champignon",
    g: ["006aaac00", "0690003c0", "6d000007c", "3baeaeab9", "000505000", "000505000", "0003a9000"],
  },
  {
    n: "Hibou",
    a: "un hibou",
    g: ["4000004", "7ac06ad", "5050505", "7ababad", "5000005", "5000005", "3eaaae9", "0100010"],
  },
  {
    n: "Gland",
    a: "un gland",
    g: ["0004000", "06afac0", "6d0507c", "3fabaf9", "0500050", "0500050", "03c0690", "003e900", "0001000"],
  },
  { n: "Poisson", a: "un poisson", g: ["006aac000", "069003c04", "2d00007ad", "03c006901", "003aa9000"] },
  {
    n: "Méduse",
    a: "une méduse",
    g: ["006ac00", "06903c0", "6d0007c", "7beaebd", "5050505", "5050505", "1010101"],
  },
  {
    n: "Ancre",
    a: "une ancre",
    g: ["006ac00", "0050500", "003e900", "0005000", "02afa80", "0005000", "4005004", "3c05069", "03aba90"],
  },
  {
    n: "Phare",
    a: "un phare",
    g: ["0004000", "006bc00", "0050500", "007ad00", "0050500", "007ad00", "06d07c0", "03bab90"],
  },
  { n: "Clé", a: "une clé", g: ["6ac000000", "507aaaeac", "3a9000101"] },
  { n: "Lunettes", a: "des lunettes", g: ["6ac0006ac", "507aaad05", "3a90003a9"] },
  {
    n: "Tasse",
    a: "une tasse fumante",
    g: [
      "040404000",
      "010101000",
      "000000000",
      "6aaaaac00",
      "5000007ac",
      "500000505",
      "5000007a9",
      "500000500",
      "3aaaaa900",
    ],
  },
  {
    n: "Avion",
    a: "un avion",
    g: ["000040000", "0006bc000", "2aad07aa8", "000505000", "000505000", "002d07800", "0003a9000"],
  },
  {
    n: "Voiture",
    a: "une voiture",
    g: ["006aeac00", "06d0507c0", "6bbababbc", "500000005", "3aaaaaaa9", "06c0006c0", "039000390"],
  },
  {
    n: "Robot",
    a: "un robot",
    g: ["0004000", "06abac0", "0500050", "03aea90", "0005000", "6eabaec", "3d00079", "0500050", "03aaa90"],
  },
  {
    n: "Cactus",
    a: "un cactus",
    g: ["0004000", "4005004", "5005005", "3aafaa9", "0005000", "0005000", "2aabaa8"],
  },
  {
    n: "Pomme",
    a: "une pomme",
    g: ["0006800", "0005000", "06abac0", "690003c", "5000005", "5000005", "3c00069", "03aaa90"],
  },
  {
    n: "Nuage",
    a: "un nuage de pluie",
    g: ["006ac0000", "06903aac0", "69000003c", "500000005", "3aaaaaaa9", "040404040", "010101010"],
  },
  {
    n: "Couronne de roi",
    a: "une couronne de roi",
    g: ["400040004", "5006bc005", "7aa903aad", "500000005", "3aaaaaaa9"],
  },
  {
    n: "Ampoule",
    a: "une ampoule",
    g: ["006ac00", "06903c0", "690003c", "5000005", "3c00069", "03c0690", "0050500", "007ed00", "003b900"],
  },
  {
    n: "Papillon",
    a: "un papillon",
    g: ["6ac0406ac", "507afad05", "3a90503a9", "000050000", "06aefeac0", "0507bd050", "03a903a90"],
  },
  {
    n: "Montgolfière",
    a: "une montgolfière",
    g: [
      "006aaac00",
      "0690003c0",
      "69000003c",
      "500000005",
      "3c0000069",
      "03c000690",
      "003c06900",
      "000505000",
      "0003a9000",
    ],
  },
  {
    n: "Note de musique",
    a: "une note de musique",
    g: ["006aaac", "0050005", "0050005", "06d006d", "0390039"],
  },
  { n: "Chapeau", a: "un chapeau haut-de-forme", g: ["06aaac0", "0500050", "0500050", "07eeed0", "2bbbbb8"] },
  {
    n: "Tente",
    a: "une tente de camping",
    g: ["000040000", "0006bc000", "006903c00", "0690403c0", "6d005007c", "3baabaab9"],
  },
  {
    n: "Cloche",
    a: "une cloche",
    g: ["0004000", "006bc00", "0050500", "06903c0", "0500050", "690003c", "3aaeaa9", "0001000"],
  },
  {
    n: "Bougie",
    a: "une bougie",
    g: ["006ac00", "0050500", "003e900", "0005000", "06abac0", "0500050", "0500050", "0500050", "03aaa90"],
  },
  {
    n: "Chaussette",
    a: "une chaussette de Noël",
    g: ["6aaac00", "7aaad00", "5000500", "5000500", "50003ac", "5000005", "3aaaaa9"],
  },
  {
    n: "Boule",
    a: "une boule de sapin",
    g: ["006ac00", "003e900", "006bc00", "6a903ac", "5000005", "5000005", "5000005", "3c00069", "03aaa90"],
  },
  {
    n: "Coupe",
    a: "une coupe de champagne",
    g: ["6aaaaac", "3c00069", "03c0690", "003e900", "0005000", "0005000", "0005000", "06abac0", "03aaa90"],
  },
  {
    n: "Sablier",
    a: "un sablier",
    g: ["6aaaaac", "3c00069", "03c0690", "003e900", "006bc00", "06903c0", "690003c", "3aaaaa9"],
  },
  {
    n: "Horloge",
    a: "une horloge à minuit",
    g: [
      "006aeac00",
      "0690103c0",
      "69004003c",
      "500050005",
      "78001002d",
      "500000005",
      "3c0000069",
      "03c040690",
      "003aba900",
    ],
  },
  {
    n: "Feu d’artifice",
    a: "un feu d’artifice",
    g: [
      "000040000",
      "0680502c0",
      "010050010",
      "000050000",
      "2aaafaaa8",
      "000050000",
      "040050040",
      "038050290",
      "000010000",
    ],
  },
  {
    n: "Étoile",
    a: "une étoile des neiges",
    g: [
      "000040000",
      "000050000",
      "000050000",
      "0006fc000",
      "2aafffaa8",
      "0003f9000",
      "000050000",
      "000050000",
      "000010000",
    ],
  },
  {
    n: "Couronne",
    a: "une couronne de Noël",
    g: [
      "006aaac00",
      "0690003c0",
      "6906ac03c",
      "506903c05",
      "505000505",
      "503c06905",
      "3c03a9069",
      "03c000690",
      "003aaa900",
    ],
  },
];
const tnRot = (e, t) => 15 & ((e << t) | (e >> (4 - t)));
const tnCan = (e) => {
  const t = (1 & e) + ((e >> 1) & 1) + ((e >> 2) & 1) + ((e >> 3) & 1);
  return 1 === t ? 1 : 2 === t ? (5 === e || 10 === e ? 5 : 3) : 3 === t ? 7 : 15;
};
const tnSvg = {
  1: '<path d="M50 0V35"/><circle cx="50" cy="50" r="15"/>',
  5: '<path d="M50 0V100"/>',
  3: '<path d="M50 0A50 50 0 0 0 100 50"/>',
  7: '<path d="M50 0V100M50 50H100"/>',
  15: '<path d="M50 0V100M0 50H100"/>',
};
function pTourne(e) {
  const t = TL[lv],
    a = t.g.length,
    s = t.g[0].length,
    n = t.g.flatMap((e) => [...e].map((e) => parseInt(e, 16))),
    o = n.length,
    i = n.map((e) => (e ? tnCan(e) : 0)),
    r = n.map((e, t) => {
      for (let a = 0; a < 4 && e; a++) if (tnRot(i[t], a) === e) return a;
      return 0;
    }),
    l = rng(313 * lv + 17),
    c =
      e && Array.isArray(e.r) && e.r.length === o && e.r.every((e) => e === (3 & e))
        ? e.r.slice()
        : n.map((e, t) => {
            if (!e) return 0;
            const a = [0, 1, 2, 3].filter((a) => tnRot(i[t], a) !== e);
            return l() < 0.9 && a.length ? a[Math.floor(l() * a.length)] : Math.floor(4 * l());
          }),
    d = (e) => (n[e] ? tnRot(i[e], 3 & c[e]) : 0),
    f = [0, 1, 0, -1],
    u = [-1, 0, 1, 0],
    h = (e) => {
      const t = d(e);
      if (!t) return !0;
      const n = e % s,
        o = (e / s) | 0;
      for (let e = 0; e < 4; e++) {
        const i = n + f[e],
          r = o + u[e],
          l = i >= 0 && r >= 0 && i < s && r < a ? r * s + i : -1;
        if (((t >> e) & 1) != (l >= 0 ? (d(l) >> ((e + 2) & 3)) & 1 : 0)) return !1;
      }
      return !0;
    },
    p = () => n.every((e, t) => !e || h(t));
  if (!e && p()) {
    const e = n.findIndex((e, t) => e && tnRot(i[t], 1) !== e);
    c[e] = (c[e] + 1) & 3;
  }
  let m = !1;
  snap = () => ({ r: c.map((e) => 3 & e) });
  const b = () => app.querySelectorAll(".tn-t").forEach((e) => e.classList.toggle("ok", h(+e.dataset.v))),
    g = (e) => app.querySelector('.tn-t[data-v="' + e + '"]'),
    E = (e, t) => t.style.setProperty("--r", 90 * c[e] + "deg"),
    y = () => {
      ((m = !0),
        app.querySelector(".tn-g").classList.add("win"),
        msg("Tu as dessiné " + t.a + "."),
        sfx(660, 0.5),
        vib([20, 40, 20]),
        setTimeout(win, 1900));
    };
  ((act.tn = (e) => {
    if (m) return;
    const t = +e,
      a = g(t);
    if (a) {
      if ((c[t]++, E(t, a), keep(), b(), p())) return y();
      sfx(h(t) ? 560 : 380, h(t) ? 0.2 : 0.1);
    }
  }),
    (act.hint = () => {
      if (m) return;
      const e = n.map((e, t) => t).filter((e) => n[e] && d(e) !== n[e]);
      if (!e.length || !spend(1)) return;
      const t = e[Math.floor(Math.random() * e.length)],
        a = g(t);
      ((c[t] += (r[t] - (3 & c[t]) + 4) & 3),
        E(t, a),
        a.classList.remove("hn"),
        a.offsetWidth,
        a.classList.add("hn"),
        keep(),
        b(),
        p() && y());
    }),
    frame(
      `<div class="tn-g" style="--c:${s};--z:${2 * Math.floor(Math.min(58, (Math.min(innerWidth, 520) - (innerWidth > 700 ? 96 : 56)) / s) / 2)}px">${n.map((e, t) => (e ? `<button class="tn-t" data-a="tn" data-v="${t}" style="--r:${90 * (3 & c[t])}deg" aria-label="Tourner la pièce, ligne ${1 + ((t / s) | 0)}, colonne ${(t % s) + 1}"><svg viewBox="0 0 100 100" aria-hidden="true">${tnSvg[i[t]]}</svg></button>` : '<i class="tn-e"></i>')).join("")}</div><p class="note" style="text-align:center">Touche une pièce pour la faire tourner. Relie tous les fils pour former <b>${t.a}</b>.</p>`,
      1,
    ),
    b(),
    p() && y());
}
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
const WFR =
  "les est des que pas une pour dans qui sur par plus avec mais vous elle son sont tout fait nous comme être bien ils cette faire aux même ont était été mon ses lui aussi peut deux leur moi ces quand après suis très tous sans avoir non encore alors avait entre temps ans autres dit peu autre rien dire monde fois faut toujours voir bon contre votre avant depuis donc notre sous jamais vie moins dont toi déjà quoi soit trop leurs ton toute chez gens juste oui vraiment ainsi grand pays français mes beaucoup jour quelques comment premier sera nos parce personne cela trois homme ici paris toutes cas chose doit partie car mal première bonne fin mieux pendant petit puis année cet ceux elles moment place pourquoi ville jours mois vers histoire sais années fais nouveau nouvelle part travail compte merci prendre veut état aller cours peux reste veux vos celui chaque grande femme nom prix point seul vais eux lieu lors vrai droit selon coup mettre serait pense quelque tant avais groupe maison saint tête étaient aime aurait avons enfants famille parler suite assez besoin demande genre savoir société trouve celle côté passe pouvoir question raison sens ailleurs avez certains devant dis jeu soir souvent effet général jean partir surtout équipe choses dernier enfin font nombre parle porte site eau ensemble hommes petite femmes mère passer près quel tes vois aucun loi parti pris père rapport peuvent trouver autant face fille fut gros niveau pourrait quatre semaine service seule accord article donne donner ligne problème vient cause crois dieu début exemple fils jeune mis système air aucune bas centre façon heure heures loin possible projet conseil dernière idée nuit vont étais argent tour vue êtes aura dessus film meilleur corps ensuite forme haut plutôt the arrive avaient chef fort public tard ayant main terre titre matin mise plan saison sait type afin aide belle choix long minutes retour sommes vite yeux amour base journée nord devrait etc grâce moyen ordre prend école étant but cinq manière mars pierre semble sujet truc agit enfant ministre parfois quelle rue sud super unis vidéo amis art beau compris gauche livre musique région jeunes match permet simple voilà voit chambre deuxième importe juin lorsque mai peur plein police sécurité série ancien anglais grands jouer membres parmi peine presque services époque allez doute force lire marché mot points santé seront train voix écrit affaires autour avis faites hier juillet millions nombreux parents propre rendre vivre droite environ fond mec mesure ouais pourtant abord affaire envie gars laquelle nouveaux octobre pouvez siècle sortir terme viens voiture ait avril droits frère janvier jeux roi venir action club culture existe laisse malgré milieu produit propos route états derrière doivent emploi feu mots mêmes période tel âge armée bois chance croire date dix décembre laisser manque mode novembre petits plaisir produits six vas août aurais blanc canada classe commence demain demander liste photo rôle bout esprit espère garde internet intérêt noir origine présente regarde rouge sortie auteur bonjour février justice langue met occasion offre perdu qualité risque scène sinon travaux voici appelle cadre changer grandes libre premiers semaines vieux connais facile image lien mer photos pire rester sauf source aider ami campagne coupe cour durant faisait objet partout plupart seconde valeur étude études chacun cher devient données hein hors joue lequel montre national penser poste présent publique réponse réseau salle texte veulent appel celles certain contrôle dois message position succès activité carte chercher connu création devenir euros filles fonction louis nature travers annonce arrêter bientôt chemin demi espace liberté mariage passage présence sort zone économie bureau entrée mains moyenne pied presse prise réalité social sorte utiliser accès dimanche départ générale lit marie mauvais numéro puisque regarder soient soleil taux voie acheter attendre bras charge fini haute manger marque moyens perdre pièces pratique sociale victoire vérité ben cherche domaine idées monsieur payer peuple proche publié quant reçu répondre suivre auprès code entendu faisant gagner honneur journal matière ouest permis résultat sept soirée sol sport version arriver arrivée coeur devoir double midi mission moitié page pièce pourra prêt rend union voyage énergie éviter arrête articles bord combien continue courant derniers devait entendre faits faute fera finale heureux joueur longue porter pouvait samedi second style sérieux terrain villes église créer décision défense frais hôtel instant livres majorité modèle obtenir outre paix puisse rappelle solution tandis bande commune comprend contrat faux forces groupes note suffit total tôt vol voulu éléments avenir bons critique dehors devenu discours dur explique forte fête joueurs maître petites preuve prison propose vendredi adresse attaque avance ceci court dos endroit essayer grave huit lumière médias retrouve régime arrière bonnes commerce faite films grosse montrer physique quartier rendez telle unique vente via vis appelé lettre lieux parole pieds principe prochain projets radio règles table vaut édition analyse assurer carrière chine commun couleur disent durée erreur espèce faible large lundi mauvaise membre neuf objectif pro relation rendu respect secteur soutien tomber utilisé vacances actions allait change concours couple course décidé fonds fou gestion juge mesures mètres normal poids réussi sert sociaux suivant suivi taille viennent village visite voulait voulez bref ciel clair combat comité dirait fallait mémoire ouvert revenir signe suisse tenir tient trucs album ancienne attend bah cinéma crise garder maladie mondiale médecin prends soi tiens valeurs vote vouloir écoute île animaux banque chanson ferme final maire parc parties pleine pose raisons seigneur sorti visage écrire anciens avion calme chien cool enquête envoyer images ligue limite parfait port seuls vitesse étranger cheveux dollars dossier hiver hôpital lutte marine ouvrir pression religion stade théâtre volonté vraie élèves adore camp drôle débat oublier pauvre propres regard revient rêve science souhaite touche voulais absence blanche capable cité clients coups delà habitude jacques poser publics royaume russe sciences secret tombe top usage émission auraient beaux chaîne chinois comptes concerne contact créé dame direct divers effets envers fer fil froid frères futur gaz lignes malade nouvel pareil privé procès rapide réseaux réunion tableau tendance vingt vit atteint boulot bébé choisi familles fasse finir gagné goût humain lettres lois londres madame oublié peau surface tels vendre venu victime écoles élection épisode équipes aimerais allemand appris arrêt avocat bonheur budget certaine choisir compter connaît cru dedans hollande mari musée prince province rentrer retraite revenu sac siège sources surprise vent acte bouche capacité centrale chaud contexte dessous disait faudra gueule hauteur ouvre pages recevoir rire réalisé salut secondes servir victimes vin actuel approche candidat capitale croit désolé européen faveur front mérite noms noël papier portes prévu regardez sites sociétés tribunal télé accident courage dites entrer envoyé festival jeudi nul perte riche régions sainte seraient serais termes unité belles café chat chiffres coin couleurs faudrait identité lance mets moindre parcours partage partis pont protéger préfère remettre somme sujets tirer titres vidéos violence voire élevé appeler attends beauté bleu buts champ cuisine côtés danger député foi football intérêts lycée maisons mercredi mourir objets opinion places planète retard savent situé tenu théorie verre actuelle agence artiste artistes autorité avions bus citoyens content célèbre distance détails entier extrême figure imagine lecture maman masse matchs moderne mur noire pensée privée quitter risques soldats triste vert vide âme échange élu énorme actes bizarre communes conseils contenu dommage empire espoir mardi offrir prennent réserve section sent signifie sociales allons appareil auront château crédit disant don empêcher furent jeunesse liens machine méthode naturel revue rose règle salon silence sympa traité univers venez vice vision écran acteurs auteurs bruit docteur entend formes héros mecs raconte rappeler reine roman star textes tiers voitures écouter étape ajouter avantage bataille boîte capital certes cheval client danse défendre exercice institut locaux logique milliers monter ouverte palais passant proches revoir robert réaliser savez soin statut sûrement tente types vivant zones arts baisse besoins collège domicile efforts employés examen humaine max moteur officiel ouvrage partager patron possède pourrais préparer rentre revenus réel réforme souvenir suit tenter test utile achat bordeaux bâtiment cerveau civile concept députés envoie humains japon lancer matériel montant nations nommé notes paraît parles quitte réaction réduire répond sentir sourire tourner van agir amie battre cartes coût fleurs indique jardin lac marc minute mondial obligé pensez phase rare soins sois séance séries urgence vécu accepter agent allé auto cancer chasse complet complexe concert essaie gérer impact inscrit joie lesquels local métier nez obtenu occupe prises profiter revanche sauver savais scolaire spécial totale troupes trouvent vieille accueil agents aimer aurai biens cadeau cent chefs colère conduit diverses dormir dépend eaux espèces ferait hasard jaune jolie jésus longueur minimum moments morte phrase pointe secours sommet systèmes acheté acteur ajoute arabe assure bar blague champion chute complète crime croix dure dépenses efficace essayé fiche garçon interdit issue juifs mille pain paroles pensais perd plans pouvons quelles quels repas soutenir suivante terminé échelle aimes aéroport canal chiffre comte défaut enfance estime gare glace hommage humanité logement maximum piste plage pouvoirs produire précise prêts restent station telles terres tourne volume voyez égalité élus boire chômage claire clé congrès demeure division effort langues mandat montagne médecine net noirs pape parlent portant portée prête refuse reprise répondu sale tenue amoureux animal bateau bilan blancs cabinet cap classes demandes devenue disparu donnent douleur décès emplois espagnol faim formule lait lune office ordres peinture profit rues seine véhicule apporter arrivent balle barre climat conflit euro for forêt gratuit génie honte invité islam locale menace mettent mobile occuper orange pauvres payé quantité race rares reconnu thème tours usine aient ambiance aventure blessé central contient dessin duc déclaré défaite empêche erreurs finances finit fous huile inquiète messages min médecins métro nation oeuvre penses rapports rivière robe réponses salaire soeur toucher trente vérifier écriture épreuve étoiles académie basse black brésil chaleur commande conduite denis discuter doigts détail fit fruits haine heureuse humour interne légende magasin monte organisé parfaite pensent plaît postes rang recours reprises veille verra vienne vive élément épouse aiment alliance arbre aspect attendu auquel bac bel composé ennemi euh impôt inutile modèles papa passion pourront profil proposer record richard royal savait serai souviens unités uns apparaît avoue belge canadien champs chapitre conduire coucher devrais entends essai gentil japonais jugement limites marcher monnaie murs neige peter pluie pote primaire promis riches rythme tue uni vélo échec amitié bain chances dents devons dirais doux enceinte laissez langage mange original plateau pouvant quasi remise russes réduit salariés semblent située talent tourisme traiter venait vendu venus vrais apprend archives arrêtez bravo chansons couche dispose document domaines déteste empereur fier grosses impôts italien lever mini méthodes option orient plantes policier précis présents remarque sacré scénario signes soyez spéciale tas tort tournée trou venue voies voisins voter étudiant affiche apporte arabes arbres cache caisse casse centres condamné consiste couper eut excuse exprimer fermer hausse joli journaux mairie manuel million passent passée progrès prouver puissant retirer retourne reçoit résumé tire vaste voudrais accepte attente cercle cesse charges chiens connue courte dette doigt douce douze exemples fenêtre former fournir frappe grève imaginer inde jusque mises mélange ombre pilote plat repris servi surpris terrible établir étage agréable avancer bête cible devra donnée décider décrit endroits format génial jambes live lié locales magazine marchés nulle oeil olivier patients plainte portable portrait prenez preuves rouges routes réussir rêves score sors superbe tournoi ventes viande vierge étrange attitude balles batterie chacune christ colonel commis contente copine courses devez entière essence guide impose imposer jeter joseph liés normale ouvrages poisson régler simples stage suppose usa vivent évident acquis actif allais automne bloc chocolat confirme extrait fixe foule fédéral hauts immense immeuble inverse longues léger machines maladies outils pouvais prépare pub pêche rarement recettes rentrée souci soumis sports séjour taxe vigueur voient voile zéro allant aurez banques billets calcul chevaux choc civil clés disque décret désir enlever garçons lourd mener micro mont morale niveaux officier poche prenant prénom rock réelle solide vallée égard agricole attaquer bases circuit courir débats déjeuner délai employé ennemis experts feuilles idéal individu mention mettant née offert pause portent quart remis ridicule seules soucis studio sucre sénat trafic venant voisin échanges étudier affirme angle appui attaques auras billet bière cacher chère clubs coupable culturel debout disais découvre détruire enfer gardien geste jack juger majeur meurt mène notion pardon pousse raconter relève règne récit salles sommeil tome traces tâche ultra établi alpes associé atelier charte donnant démarche foot incendie journées juges julien leader love luxe man marques moral noter parlant positif prof pré pétrole repose show siècles utilisés vague abus active aise bat citoyen convient degré dite drapeau détruit essais franc fuite gamme invités lunettes mine paradis pousser repos reprend royale sec semblait sondage standard trouvait trésor évidence alerte bourse chambres connus coûte crimes cycle dossiers douche falloir fausse fortes franco fêtes henry ira libres lèvres mail montrent offres oiseaux oreilles outil paiement parisien parlait poissons profite publiée queue quinze rejoint régional résoudre réussite souris sûre tests tir tonnes traduit témoin témoins utilisée échapper adultes armées ballon branche caméra combats contrats corse couronne curieux dialogue engagé facteurs fameux feront grec habite humaines laissant larmes libéral liquide lot lutter légère matières patient pensées prime prévenir puissent pur remplir rupture secrets ski sombre suivants suivent temple têtes vies voyons îles ange augmente bleus bouger cou critères croyez destiné directe disons dizaines engager feuille folle forts fortune horreur installé jure liées magasins manche miss montage montée morceau morceaux navire océan piscine poursuit rappel rapporte restera reviens saisons symbole tension thèse troubles trouvez ventre virus voler écrivain abri accusé adopté appels bureaux business cellules couvert culte digne dépôt fidèle graves hâte job jury lis lâche lève missions médaille ménage odeur peuples pitié plante poésie priorité probable ramener refus rendent richesse révèle sachant sensible souffle soutient totalité vise éditions actrice aides aimez arc balance blessés causes comédie croient crème degrés fins folie forum féminin garantie honnête licence manquer normes oreille prêtre pure raté regrette rennes réalisée salaires sportif toit écart actifs adulte anglaise applique assis battu chemins copie cultures dessins devaient diplôme envoi espaces espérer existent faibles fondé foyer fruit horrible humeur inconnu jouent longs magique maintien malades marrant maîtrise pars paru publier remonter romain sable sel suprême syndicat sérieuse terminer toile vues étoile évêque adjoint agissait appelée avenue axe consacré conçu cousin drame durable expert fallu future galerie indice major mines paie papiers pascal pierres pis placer plaque pop privés profond qualités refaire sauvage scènes secteurs seuil signer solo trace vins visible visiter voyages voyant épisodes accent annoncer aspects attirer bassin boutique canon carré casser chapeau col courrier créée destin dizaine déchets dépasse fout logiciel loup marge médical métiers oncle poète préciser rends réfugiés stop stress villages visant voulons élevée accéder aille alliés cadeaux cadres capables charme comporte copain coûts dingue défi facteur gagnant hautes leçon limiter liée mac majeure maria marre mit mystère méchant opposé origines paquet passes paysage pertes pistes pleurer potes prouve pôle recette remonte retrait soldat étions amende amener atteinte chanter chanteur chers destinée diable dirige dise faisons ferais fleur francs fusion gris juif lecteur marins milieux modernes motif métal météo obtient oubliez ouvriers pauvreté prévue refuser remporté retenir sache scandale suède taper terrains verts vivement équipage êtres absolue associés audience censé citer composée conflits dates design faculté faisais fiscale fondée gorge généraux ignore investir joyeux magie modifier médicale nuits open paire pleins prit promesse registre relative rempli serez servent sortant souffrir soutenu suivez tournage trompe val écrits émotions étapes accords annuel bill bob bénéfice chaînes clinique couteau dieux dérange ferai file fleuve gras hockey inscrire intégrer lecteurs liaison miroir paraître procédé préfet rené respecte support vend verte voudrait écrite émotion étonnant amateurs arrivés avocats bouge chargée choisis collègue constate couples couvre croyais dommages défend désert déçu enjeux enseigne esprits feux frapper gardes gilles gloire héritage implique jus latin limitée maillot mark marquer mettez moto oiseau onze parlez plate privées prière profonde pseudo remplacé réponds réunis sauter signal sièges sortent souffre tableaux unies villa volant ère éditeur autorisé carbone cellule chantier chapelle chinoise civils comparer devoirs dira due duo effectué entraîne flics fédérale gamin global hop horizon hésite inspiré intitulé maritime mignon passait pensait précieux rayon saisir semblant stars subir tester vertu écris évoque adopter adoption apprécie assister aveugle baisser beurre biais blessure boucle bulletin chant coach der devais diriger dîner essayez excuses fiction finance financer fine flotte forcer froide fromage guère inter issus jette laissent lion marin masque massif milan moteurs musulman navires observer opéra ose peintre pot racisme remercie récente répète sage savons session sortes tarifs tempête tennis violent épreuves abbé acier adapté allée amateur amené argument cardinal chante chaude définir fenêtres géant libertés légitime mensonge out perdue positive périodes real restes seras solaire sorties subi sénateur tapis taxes traités trouves adapter africain ailes arbitre bandes banlieue bleue bonus bouffe camion camps ceinture cents charbon chats chrétien couvrir dan donnez dons décédé déplacer déposer environs express exprime flux ivoire lumières légumes maîtres mineurs minuit motifs nourrir prendra prévoit relais relever rond ronde stations thèmes tiennent trains vaisseau voyager églises étudié admis analyses ateliers avouer basée bateaux bijoux casque chaise concerts dames devenus douceur débuts exact exécutif forment four fourni foutu inscrits libéraux livrer mariée menaces napoléon noires ondes opinions parent patience piano publiés quarante quête restant riz réformes réserves sauce scrutin stable suivie tabac terminée tissu trône uniforme variété éthique annuelle attendez baie bains basket benoît bible carton chimie crédits diminuer dégâts dépasser exercer fautes fidèles forêts golf gère incident jules légale mères norme observe occident partant parvenir passera plaindre poitrine poudre prétexte qualifié recueil ressort rive rois réagir sons stupide tape tenant tombée tromper urbain volumes acide allaient appelait appelés attaché aussitôt auxquels belges bonsoir box cités créateur diffusé donnera dose débit effectif fatigue forfait fraude fumer gratuite italiens jardins joint leçons listes marier mentir menée mince misère naturels négatif ours ouverts portait poulet recul remet restait réveille sacs serveur signaler sixième survie taxi trait traverse tribune trouble veuillez vieilles élite abandon abonnés accorde ambition anges appuie aube blanches bouton bronze calais cannes chair cherchez clan clip diamètre dénonce exister facture façons habitant numéros néo offrent parts poil prenne prie rage répéter serge séances utiles utilité vocation voisine égal accorder achats admettre affirmer assumer bail banc bosser colonne craint crier criminel césar danser devront existait exposé fesses genres girl gosse gâteau intense joindre las libérer malheur mali marne marquée mien miracle noble optique ouvertes plafond pomme procéder rendus roues rêver suspect talents trajet trouvera ultime veste viendra vols éliminer épaule évoluer actuels appuyer armé baby bancaire boss boy colle conclure conserve contacts durer décor dédié dénoncer enlève entouré escalier externe fierté fournit globale indien informer manager modes musicale options parking parlais pilotes pommes ponts poule pourrez protège quai raciste retenu retire robot romans roue récent réunions rôles sondages soudain tirage tube var visites volé votes voyait épargne aile aimait ampleur arrivera attire barbe blonde bloqué boule calmer choisit conclu conquête costume crâne descente duquel dépit excès failli fausses fontaine fuir fumée féminine genoux guitare hall hôpitaux instance internes location logo lâcher menu moyennes parfum passages phrases pires prévoir rivières réduite serre soigner soirées statue suggère usines vapeur vendeur épée aie bol centaine conte couches cris dirai doutes dragon décrire esclaves fabrique familial fermée figaro flash futurs gain gestes grandi gêne inventé issu jambe jeté lourde légal manquent ment mesurer monument nés pile placée prenait profs promet prononcé prévenu purement roche réalisés sauvé souligne séparer tarif trous unes urbaine vraies époux évaluer altitude amuser animé anonyme arrêtés assise attentes benjamin bloquer bosse brut caméras citation codes confort congé cuir câble destinés dépense déposé exige gosses herbe jazz lancée lorraine masculin mobiles modifié monstre pattes pompiers racines romaine rugby senti soupe survivre synthèse tournant vagues versions vivants acquérir aperçu autonome baron barrage brillant béton canard case cave changent chérie cirque copains courts dignité délit désigne encontre enquêtes extraits figures garantir germain indiens levée libéré louer marchand maréchal mentale meubles mienne montrant mépris panne panneaux provoque ramène rapides relatif rendue reproche rigueur robin roses réparer sauvages sols sonne spéciaux tenait tendre troupe étend agences annonces asile assaut avancée canton chimique communs connues courants crainte divorce donna déclarer délire déroule espoirs espérons facilité finis fiscal foie ignorer intégré laver majesté mémoires off oscar panique passées pique plats rangs restée roule rouler roux réussit soixante stock sévère sûreté variable vendus vif vus écologie édifice établie établit évite absolu afficher aimais arsenal bébés canapé chiant comptait demandez devint district défauts déficit désigner entrées fauteuil fragile garage gravité hélas illustre inclus junior largeur latine lord malin miel moche modeste musiques négocier organes panneau partent passez pension piège plaire plaques prévues rappelé reconnue regardes romains rumeurs réveil saura saut septième sportive supporte tante tâches valable vents élevage épaules étendue étonne amies armés aérienne branches censure cesser chaussée chemise colis colonie connerie contenus coupes dettes donnait emploie explorer exploser fixer fière fièvre grille horaires imaginez indiquer informé insulte loyer mobilité neuve noblesse nuages occupée parlons peint pleure porc portail pourras poème puits quoique résister révolte sacrée sortis souvient sportifs sèche tables taire triple vache valoir élever énormes albums algérien aliments assisté blagues boîtes brevet brun caisses console continu croyait délégué désolée emporter exprès fameuse gang inconnue indices initiale insectes liège loisirs maires manières massacre matinée maxime mineur musées nerveux neutre oeuvres opposer pantalon parcs pasteur peines perds planche plu plume poignée poster posée pouce priori refuge reposer récentes révision saints schéma sentent sincère soyons sépare tirs traits tranche trio violente voulant écho étages abbaye adieu amuse analyser antenne apprends bal blé breton brigade brise charger clos clément constat coucou disposer douter dégage espérant examens extra goûts généreux idiot insiste intime jaloux joues kilos look manteau messe mixte moulin ordonné pari plomb poches produite provient prétend rayons rebelles rendant renoncer retenue réunir saisi salarié suisses tragédie trophée énergies étendre aborder ayez bords briser bulle chaos clavier clôture coffre collecte complot conforme corde densité dispute disques douleurs débile délais emporte enjeu faillite florence gentille globe grecs guinée habitat hectares immédiat invasion lady lapin lourdes manches marquis milliard musical mythe ménages nettoyer payés perdent pic pères pétition quarts ranger réunit sir subit tensions théories tombent témoigne verras veuve échappe égale adhésion agenda aire antique arrêts boston brûler bâton bêtes cage chèque colonies correct craindre cri célèbres deuil démontré envoyés façade fermes fichier gamins goûter grandeur incluant inutiles jouant lourds matches mental média nue occupent ouvrier oxygène pacte parquet pizza poils polonais pâte regards repartir situés tend traduire tunnel verres virer écoutez absent adresser aimerai annuler apport arrivait asseoir aurons avère azur campus chouette collier comptent conclut confié corriger courbe dits dors dort défini dégager entente examiner fidélité filière fur gaffe gré hygiène hôtels initial inviter jaunes laïcité lyonnais manquait maths militant monstres méritent nombres obligés pareille parvient patrons perdus poussée proposée ressenti récolte régulier réside solides séquence terrasse testé tissus varie absurde adoptée alarme ancêtres baptiste barrière coins colonnes confier courante crises céder céréales descend engagée exerce flammes foire horaire huitième hum injuste jouait label majeurs minorité mosquée mâle nommer offrant pavillon paysages pensant plaine prêter racine refusent récents réels régiment régimes sagesse saoudite soirs solde solitude stockage surfaces suspendu tienne turc usages violents âmes échanger amiral artisans assiette audio auguste bornes cahier calculer croisé cuivre dent dessert dirigée discret définit défis effacer embrasse engagés excuser filiale fêter golfe green irai lave nerfs nette neveu notice paroisse pompe poubelle pourrai prier promo prophète préférée prêtres radical rater rejet requête réclame récupéré révéler secrète soutiens suites supprimé suédois séparés trouvée typique verser vivante écrans allure assurée autrui aviez aérien boules carrés casino chéri clef concepts constant contenir coton digital doté faciles faille faune fibre graines grecque havre home héritier hésitez hôte illégal inconnus innocent jet justifie litres marbre maturité mette mètre métrage nana noyau paille panier paysans plages pouces publiées pèse réaliste rétablir sain saurait servant urgent verbe visages visibles éteint étiez évolue affiches aimerait amusant anneau are arrivant calculs chou coco comique compare couler célébrer deviens diesel diffuser débute dédiée fichiers figurent flic group guise handicap harmonie illusion index isolé issues juive larges malaise nommée négative obtenus patrie payant porto pourri renvoie reçois rumeur sachez salade sales serment serons sexuels signée soif souffert symboles tendu torture transmis tueur verrez vides vieil vivait volet âgées éloigner adorable assume attribué boisson canons cash changera chatte choisie cordes coule courtes divine donnes dormi défendu envoyez extrêmes fiable filtre genou grandir géants hello lampe livret mariages massive mat mondes muscles onde pente phases plaintes porteur pourriez prudence respirer ruines récits saisie tenus trahison urgences usagers voyais âgée affecté allié annexe annulé apparu associée bye causer charité chasseur coller colline couloir doctrine esclave exclu filet finales fraîche goutte instants insulter insultes investi jolies libérale légion maux mettra médicaux nier pneus princes prévus races racistes rassurer relief renvoyer rocher sanction soumise terreur tragique vain échoué élue émis évasion accordée angoisse appétit arracher balade ban bars boissons bond capitaux chômeurs clichés composés comptant crie créés data demie devienne diminue dollar duel défilé dépôts détenus exclusif exil existant franchir heu idem inventer lame maximale nuls oeufs partiel podium poing positifs ras requis robots saga saviez serpent serveurs spectre stand sublime tactique tentent tenues treize triomphe variétés échecs éditeurs élevées éternel évêques accompli airs allés assises avancées aviation basses battent bottes camions chasser cherches circuits civiles costumes cuba diffusée décident dépenser envoyée estomac favoris fiers foyers futures grain humide lisez luis marathon mettait nuage organe phare planches ports rachat remplie retours revers réclamer réservée résolu réuni seize sienne soutenue sûrs ticket timide touchant traitant tribu venaient arrêtée blocs blues bonhomme bourg charmant cloche conjoint coréen créant domine durs frigo gardiens grade habitué laine mettons mobilier noix obligée ongles opposant ouvrent pan posent prenons profitez pénal pénale quatorze records regroupe remplis rendra reporter restez rural rédigé réelles réplique sections set signalé sortira vaches vaincre valent victoria visa écoutes éloigne ajoutant amant approuvé auriez axes bague barres bec bisous boutons bruits buteur camping capture caution chic contes crever curé disaient discuté divisé douzaine décennie démon désire emmener emmène ennuie entité entrent exacte fantôme fixée flamme flèche fric glisser gratuits invitée lent linge marais menées more musicien méchants nuances obliger obstacle opérer otage ouf persuadé pirates poèmes profits proie proposés pâtes pékin refait rejeté ressent saute soeurs soie sonore sphère studios syndrome séduire tablette turcs valise veiller épouser abattu adaptée alpha amont athlète attacher aîné biologie bonnet boucher bouffer boys char comprise conçue coran creux dalle déclin démarre embauche exposer fassent favori favorise formée gagnent gel infini instar intrigue loups mandats meurent montres motion pensons posséder précises rassure reconnus rires saine siens spatiale tien tiendra tombes tri vêtement âgés écosse épais éteindre admet agissant autel bourré carnet compagne consulté copies coque couvent crash cristal critère créature datant devise dérive encre envisage exécuter foncé franche galère gentils habiller habituel honoré imprimé inclut jalousie jouets jusqu men moines mondiaux moutons notions nus oubli pack palmarès pardonne plaint portion procurer prudent put report régie sien souhait statuts styles trouvais tubes vedette voudra énerve épidémie améliore animale associer autobus bouches boxe brune brûle bâtir cahiers chants clause comble cousine croyance crédible dangers délicat déplace dévoile explosé exposés femelle gains génocide gérant instinct irais ironie mensuel mortes occupés pair pompes potable poteau poétique prestige protégés racheter recruter relance remède rigole rotation roulant routine sauveur savaient semestre sergent situées sourit suivis tchèque valide venger zoo étroite achevé amours arrange arrêtent berger cachée choqué claires complice croyant créent cycliste dessiner diamant diane décharge détresse emprunt essor exécuté farine fiches filer finira gaza grotte humidité leaders lits marocain meurs missiles mérites métaux naître opposés oublions partagée plancher posez prisons prières pâques rajouter ravi ressens revu reçus résulte sentait signaux sombres surnom suspects synonyme trouvant valait vivons éclat éclate élan élire évoquer agi agisse aidez allusion blocage bracelet camarade canaux cendres cibles composer couverts creuse croiser deviner diocèse dom doré doubles décalage délicate détient exploit factures flou fluide glisse grise hormis intimité jersey lions masses moque nobles nommés nuire orage ouvrant patrice pervers peste pirate porteurs primes préjugés pénible péril rompre routière serrer short tantôt tournois aisément ajoutée amical arnaque assurant atteints attraper audition bis bâti cabine combler couverte croisés devriez drapeaux défaites détenu entrevue estimer feraient formant frein galeries grenier guérir immigrés imposant imprimer jungle kit légers maintenu mangent mariés monopole mortel motivé mutuelle pare peindre pensions perçu protégée puce regret revues risquent singe survécu touchent vaccin valence vendue vives vulgaire vérifie éliminé aires annoncée appelez appuyant athlètes aurions banquier blesser coiffure colloque coureurs creuser disputer doctorat enchères ennui enterré essayant estiment fatiguée fines finie fiscaux frites full gants glaces habits harper hostile illégale imposent inscrite inspirer inédit jupe laser loyers mafia mails morales mouton mutation oral passions plateaux plongée pluies promener pue rebelle renommée routier sentez servira tirés tribus vaincu vitesses voleur voleurs éclater écrites équation étendu éternité aboutir acquise ados adresses angles assurent bagages boit brave break chu circuler coca cochon compteur contacté dominant doué débattre démons désirs détour employée escalade exiger fibres fiscales fondre foudre fournis fox gaulois grippe gênant homo horloge jugée lente limoges lisant légendes marines maudit mentions mercure mythique mêle neuvième nid notaire partit pelouse placard planètes portées poules pubs punir radar radicale rejoins respire reçue robes réserver sentais slogan sonde sortez talons tasse tigre toilette touches tournent ténèbres versé veuille violet virage écraser édité abeilles accuser admirer aiguille ajout arranger auberge boue bourses brute ciné claque commença cuire disparue dut définie démarrer emmerde ethnique filmer fonder fosse fume grasse grenade habiter humble imposée inquiet inspirée lacs lectures littoral luttes meeting mouche nourrit négatifs orbite pipe planter préface pénétrer rat rats reflète relancer relatifs rendait revenue rituel réalités réfléchi sentier servait sortait tarte thérapie traîne triangle turque utilisez viré volée évidente aborde aimée ajoutent bagarre bouquet budgets carter cession coincé collines collèges comédien confiée coude couture coûter cuisiner dense diront déesse désastre détente externes formules impasse jadis lin loge loisir lumineux mans menti monnaies nocturne otages papillon perdant préférés pull pêcheurs radios raid range reflet relevant renard rentrant rideau rit rude ruine réagit résident segment shopping sylvain terminal tirent variés vider virginie visuel établis étranges accroche accusés acheteur armement audit bannière baptisé baptême bizarres bières bordure bouclier bush calculé chauds cheville chèvre citron cliché comptoir comtesse cousins crains dessine directs dixième duchesse délégués détaillé entourée entrain firme forcée fossiles herbes immunité incarne intégrée irait laissait laissée légales marée mers miens miles module nie ouvrière paires parrain perles piquer poussent profils punk rejeter rejette renforce retient risquer rousseau réputé sables sages secte single soulever trottoir tutelle vampire varier vendeurs vélos éclair aidera allumer appelles battue battus bonbons brève cadavres calibre chauffer chauve chêne concret contents convoi copier cross cède dauphin derby dessinée disparus divin débris décors ego envoient familier flore fragiles fréquent gagnants galaxie garanti guerrier idiots idéale inclure indienne jan laissés levant levier lycées majeures marteau masques moine mâles mènent normaux offerte offerts parvenu passager plumes poker pots radicaux reculer regrets renvoyé repérer reçues sommets staff stages stocks stopper tenez tirée urbains valider vends venues voyageur écossais élites abattre about animée animés anneaux arrache attachée bang basque bidon bretons briques carnaval censée cercles chanceux chauffe chutes clefs comités cruel cuisson diplômes dues débarque décisive détendre détruite enrichir entrant fixes flanc girls gâteaux géniale han honneurs honnêtes honteux hymne hôtes jumeaux landes mamie modifiée notable olive opposent passif pete pie pistolet plonger pourvoir poètes punition ratio salons sapin saveur sommaire soulève suffira supposer surplus tatouage teint touchée tuyau user vendent venons vertus vignes vital vogue édit élégance évacuer acides affreux ajoutez appelant argentin atout aval balcon battant boom boucles bourbon bêtise cachés centimes cheminée classée colons connecté cuit céleste danois devenant dérivés détecter employer enfermé entiers ferons filmé fixation fouilles fracture gage générer habitent hésiter inciter jouez laissons maigre menton mou natation obtenue ombres opus partisan peser plaisirs posture pourvu précoce puni purée revivre rival roches répandu répartis résiste résumer sandwich saurais sobre soldes souvenez stades stylo taxis tonne toxiques trésors vitre voisines vomir étonner achetez alias allier archipel balancer berne borne brosse caca cantons clairs clergé colin coma congés coutume crayon doubler drôles défunt députée engin entités estimée exigence extraire fonte grains grammes lignée localité lycéens manques marchent matelas matins mesdames milles miracles missile mousse naît occupant oeuf opère parade payée peintres pilule pleines péchés rail rentable renversé révèlent saluer savon soudan square statues tireur toiles trêve vaux vertes viser écrivent achever aident appuyé attrapé blessée bouts cartons cavalier changes chars clown combiné contrer coq devenues diviser dotée dragons dresse décisif déclarée décédée déposée dépêche désordre emprise emprunté entendue entendus exclure furieux gouttes graisse gratte guérison habillé habitués have impérial jura marina marquant mature matériau menant modéré mourut méchante nièce oscars parcouru passa percer pin plaie platine plonge poli priver ramasser rapidité redonner rives rurale réalisme réunies salue solaires sursis tarder teneur traitée traîner vannes vernis visée vivez écarter épicerie abrite adaptés aigle amendes assassin ballons barrages bétail cachent cessez chaises châteaux ciment cocktail conquis convenu craquer dallas discrète doses douces doyen départs dévoiler essaient fantômes fillette foncière gardent gardez grandit guides honorer jambon jouet joyeuse justesse laissera lisse litre loger lots marchait muscle mélanger mêler noyer nues occupait pairs paquets perdues plier poison poumons procédés quittent rails ralentir refusant remplit repéré rubrique sierra sorcière sortit soumises store supports tentant tommy tranches vigne écrasé édifices émettre épuisé acceptée admire affectés allume anonymes assurés astuce avaler averti avocate baguette ballet bancs branle chagrin chaire chères cohésion country crue cuite cycles damas décida décroche dépens endormir eurent fui gueules guider gènes hais homicide hybride intérim inédite iront massage modestes moquer moreau paient paradoxe phares pisse plaines pourrons préférez pâle recule relevés relié relèvent renonce repart revenant reçut réduits saisis sers souche strict séduit taureau tickets tirant tomates tonnerre tuent tumeur urbaines variées voltaire végétaux vérités écarts échéance éclairer étroit afro ail aimable annuels arrivées banane brevets cabane cafés calcaire canne citée commente consul cordon couloirs couru coûteux cuisse câbles danses delta devenait divisée emparer engagent entame escorte exposées filets gala gamine gares imbécile iris isolés légères marron menacée mignonne mystères natale nickel opposée orienter passons phoenix piliers placées plates préférer prénoms prêtes rappelez recourir rob rurales réussie sirop sorcier souriant syrien textile timbre tombeau toxique trame transit validité veine visions âne éducatif élaboré élargir éventuel adeptes adressée agissent agressif aies airbus allo aperçoit apprête attachés barbecue bleues bonté bouchon bêtises cire clic clin concile coupure coupée créées cuisses demandée douteux draps drive débuter décrite déranger enfermer envies excusez exposée fabuleux fermées frappes fusée gardant greffe impacts indigne intimes ivre jouera lancent limitées loué mexicain modem moindres moule moulins mystique médiocre mêlée nage naufrage nôtres oser palme parte penalty perle plains pleurs poignet pointes pénurie relire remparts renfort rentrent réflexe sabre script selle sinistre spatial sueur suscite trip tuyaux vastes verdict verront violon visent égyptien éphémère équipée abords accrue addition anxiété artifice atlas atomique attentif audace berceau bulles cerf clarté coureur couteaux crève curieuse duché durent dus délits entrés exclus feras fief fouet foutent fraction franchi fédéraux gironde golden halte intégral isoler joints jouir justes laïque liaisons linéaire mens monts mouches méritait navette neiges normales nuance orienté persiste pleut pois portera posées prolongé puy remets rende requin rédiger répandue sentiers sire soupçons stricte surprend tabou teinte tram tuée uranium veines vichy vilaine virtuel visiteur vitrine vivaient ème électeur émet ais anecdote annales ayons banal clique copines correcte croirait cube culotte dorée engins enquêter examiné excité exigeant facultés fardeau filières finesse fuit gilet grimper hauteurs hurler initié land livrée lointain maintes menteur mortels muet neufs notables oignons oublies paisible pareils penche pisser poupée putains pôles reins renforts repasser resta rochers rouleau rousse réformer sacrés sessions singes sonner souple sperme suffrage sultan syriens séparée tailles trahi troll use vallées vase visuelle yen écrivait éléphant émeutes épaisse abris affecter ana aveugles chaudes civique clips combattu complets conteste conçus cortège courbes courent cristaux demanda dresser décidée définis délivrer dôme ennuis exclut faces figurer félicite garantit grange humides icône immenses incite isolée jalouse jolis lapins latéral lucratif mineure minéraux montent ordures patte permets pipi poivre présidé quais relier relâche reparti revienne rigoler réacteur secs songe sou sévères talon tige valu varient volets époques absents achevée allées antennes bassins bats bienvenu bougies bouillon bâtard certifié cieux confus consulat convoqué cran crochet dentaire diamants docteurs dynastie délivré envoyant fantasme femelles firent flemme fromages fée grèves huiles imposées java magiques manoir manuels marges menacer menés natal noces normand observée obéir océans parier partez pat paysan peloton pencher pilier pilotage précédé pyramide rabat rajoute ravie rejetée remises retiens ris robinet rompu ruban récolter régis senior sentence soul sourcils sourd séparent toits tomate tramway transmet tristes tueurs uniques égaux égoïste élaborer évoquant abuser abusé achètent adverse agressé alinéa annexes annuaire araignée arbitres astuces barreau bof brin brutal cape caves cinéaste classer comptez contours cracher craintes cultes demeurer descendu devine déçue efface enfoncer famine ferry fléau folles foulée fournie gym génère hongrois intégrés iranien jobs kurdes lier loyauté matrice montants mortelle nager nain orale parution pavé picard postale propice préparez préparés recevra renvoi repères revenait réagi répondez sas sembler serbe socle soulager spot sprint sucer surnommé syrienne sécher séparées sérénité tee temples torse traitent vendues vestiges vilain vint votent western yoga éclairé énerver épargner établies abouti adorent amer annulée armure artisan avancés avertir balader baleine bilingue bouchons briller cancers cantine cases censés coeurs colonial communal concrète confiant consommé criant cyclisme dignes directes dures défaire détruits emprunts engagées entrepôt excepté exprimés fiancée frappée freins garnison genèse gâcher homogène humilité hérité imagines informés insister investit ironique joueuse khan lames laure libérée liquides lise machin martial mater meuble motiver natif notation néant obscur obus palace parfaits patiente pros racheté ramadan ramasse remédier rhum rime river ruisseau saumon seniors sieste sterling suicider supposée tic tord tournées unir value ver voiles égales éleveurs élégant éponge aboutit accélère aimant allongé anonymat atouts bouquin brille brique camus capturer caraïbes chienne chocs chèques close cohérent coutumes croyants cultiver danseurs danseuse douanes débutant déroulée détester endormi entendez envahi figurant finisse flèches fournies fringues gravure horizons ignorent illimité imprimés jugent jumelles manges massifs menaçant milice millier mixtes méfier mélodie notons oriental oxford pains piles pins polo recevez recruté rein rente roc ruiner réfugié savant scooter soigné soucieux superbes sécurisé tendue thèses tortue trophées trouvons valises verrons voeux volcan voûte écrivant écurie ému équité absente alla amicale arche argile arène autisme autopsie barbares bloqués bot brutale cabinets calvaire capsule capter casier cessent chargeur conduits confondu courtois cravate cuillère cursus desquels diabète dirigés déménagé détroit enchaîne espérait exigent ferez ferment fiables fondu forums fouille fournier féminins gagnante hébreu idole ignorant instable lampes léonard modérée moniteur moïse musicaux niche palette parfums parlera parodie pesant piétons pointer polaire pompier prairies promu ralenti remontée reprends requiert retenus ring rondes rosa sceaux sic soucier souper stupides susciter séisme trancher troupeau vaccins venais versant éclats écoutant étang évangile évoluent abonné achetée aimons amants anatomie antiques apaiser apprenez bacon bijou blocus braves calmes châssis coke corrigé dentiste déni déposés email enfuir entamer entières falaise files flot foncier fées gaule gazon habituer inédits jeans lavage libanais licences litige louche loupé lunaire lésions méfiance mériter ouvrez parité partagés peaux percé permit planning pluriel presses promise prouvent radars repoussé requêtes résidant réviser saintes self seriez sonores spirale stocker surf survient tendent tentes trilogie tronc tunisien verbal vierges visés vitres étouffer évitant achetés actives adaptées amenés armoire arriva attendue basées boeuf buffet bénin cadet catalan cerise chalet chantage chevet chips chrome cloches coiffeur comics concorde converti coréenne coréens devrez décoré découle déduire définies déployer désirez eden enfonce fatale favorite fisc gendarme graine hache hostiles impunité insérer jurés magicien merlin messager minière molécule nerf nourri obtenues orgue orgueil oubliée posés procure préparée reliés reposent requins retirée rivalité routiers rythmes serions sincères surcroît tank tomes traître unie usure visuels zen échéant éprouve accusée agneau agrément amas analogie appelées artère aurore calories capteurs casa casques chemises choux commises consoles coquille corpus coupures croisée crus créatif devrions dominer douane déconner défenses désignés déçus encadré engrais escale fictif flipper formelle fouiller fourrure garantis haleine here horreurs intenses joies karma lanceur logis martyrs maya menus metteur minimale montrait muni naïf nuque panama parie pelle pigeon pince portez poussant prédit prétendu pudeur pureté raisin rallier recteur rentres restons retards round saxons sensé souffler spencer succéder tardive terroir thriller tiroir tirées traction traitées trouvées vampires veau wagon wagons écarté éruption absorber accents activer adorer aidant apparue avatar aveu baies baskets bastille blond bloquée boulet buisson carottes cartier cochons coffret cola couvrant couvrent croyons droites dédicace défait désireux engendre envahir envoyées exploite fatal froides fumeurs glorieux handball hui imiter inauguré jets lâches légalité minerai montés mosquées mythes mélanges once orages osent panorama paroi payent percée permette pianiste pochette prescrit prône rampe recouvre rendrait reposant rideaux sanguin scores secrètes serpents situent subsiste suivies tracer tribunes tronche tuant unit variante verrais viandes vicieux vitale volent végétale échelon écoutent élevait éloge éloignés élèvent abstenir acceptez adhérer alphabet animales anomalie arrivez attrait barbarie biscuits bosses cailloux caserne cercueil chapeaux choquant circule condé confère conçoit croisade crête datée diras drague dépendre dérouler enterrer farce fermier gagnes géante hidalgo infinie insecte inspirés lacunes mare math mâchoire médian notaires partait payées perse philo plaisant poumon précaire présumé préviens rabais recevant receveur recrue rigide réjouir réussis sceau situer sketch slip soja stables stimuler subtil succédé suivait survenue trinité urine vecteur vertical énigme épices adieux apologie appelons apports arrêtera attaquée attirent basculer bougie boycott brandon bâtons cascade chargées clans clou clous coloris coûtent croître croûte déclarés déconne dédiés défoncer embarque exploits flûte forfaits fourmis fuites fureur garant great habile hormones induit latitude lisent malte maternel mercier nées oublient parasite parois patate perçue pièges plaise porcs pourrie profonds prose prévenus prévient raser rivaux rush réfère réputée rétro réélu scanner suggérer suédoise sèches tambour tarde théorème tons trajets vanter vinaigre violette voudront yang zombie épique érection évalué accordés affectée ailier algues anus aptitude atomes avancent azote aériens bagage bagnole baigner baptisée bénévole caravane causée changez chariot cheikh comparée confond crache crèche cubes diffère dirigent disciple divinité donation draguer durement débiles décerné défiler déguisé entrez espion eue excessif explosif facto failles fiat filiales gymnase habit indiquée jade jésuites lauréat libérés loges logiques légèreté marchant marquent marquées martyr multiple mutuel obésité offertes orge parvenus perçoit pics pigeons plaira plâtre posant projeté rangée redoute rendit repli retarder ronds répandre révélée sains sauront soutenus spider steak superman sus séjours théâtres touriste velours verrait vignoble vécue échos élégante émeute érosion acquiert adhère agrandir allonger apte arcs barrer blâme bobo brèche chantent chaux china consigne cruauté cumul datent donnons dorment durables durera décevant déchiré défier détourné estimant exagéré exécutés fasciste fermeté fermiers filtres fixées flagrant flamand formats fraises frappant gai gorges gothique goûté gratter griffes imagerie implanté insolite jouit judo juristes kilo lancés loto lus mamans manquant minable moelle mouillé nets notez nourris octroi palier pans para partagez patriote patronne peurs promets préavis puces péri raisins rallye rame ravis redire relate revendre rigolo robuste ruraux répondit suce suffire suivra tango toc tournure tuerie tunnels wallon zoom échouer équivaut éventail évoquent actrices amitiés aménagé animer anormal apprenti assureur attendus blâmer boxeur brisée butin cassée chrono chut classées clauses clémence corrompu craqué créneau crêpes cultivé digitale donnerai décoller dégradé essayait essayons fermez fluides formuler gouffre grossir guilde investis laid lyrique mentaux mettrait milices modérés motivée museum méfie méprise neurones panthéon passants pentes pivot plane poêle prairie refusait retomber romance royaumes récidive saisit savants scie semer sirène souches tailler tardif tenais torrent trahir trembler verrai versa vocale votée zinc zombies éloignée abruti agirait alimenté amen ampoule arrivais aînés blindé botte bouddha boum brûlée buste calmez cerveaux clope comète comédies concrets consoler corne crucial diffusés dot défensif déposées désignée effondre enfoirés estivale exercent fondées gazette grecques grenades grès hybrides imam insu insurgés juriste lasse let livrent localisé lucide maris merdique montrez moralité motos nanas naïve nova obtint odeurs offrait oreiller ouragan perdez perturbé pourris prenais preneur presser pénètre pêcheur quotas racontes repenser requise rigoles rite saveurs serein servis soupir sue suivit suspense syndical tais trouva urnes vaudrait végétal écharpe émetteur épopée abeille adjectif affilée arctique atroce basant blair bouc brabant brebis cabaret cachet cale carrée chantant choper coquine corses courtier devises dilemme décrets défendue délires déplore ennemie entra espions exprimée far fascisme fours féroce gagnez gendre gravures grossier haineux halle hameau idéaux janv jettent jouée ladite lanterne limitant lobby masquer menthe neuves négliger oasis obsèques originel parcelle pieux piratage plants pneu prospère péage pénalité rafale reliant rendues retirés rites romaines récoltes régner résidus seconds segments servit smart sodium supplie suspens symptôme tempêtes texture timbres tintin tranchée tuiles visées vivres votants érotique évitez abat adjoints ajuster aligner amènent analyste ancêtre apportée arcade arrêtons attirant barbare barreaux bémol calcium canards charisme citant coloré câlin cérébral danseur devis dominent dune dégoût dément démonter déploie déprime détacher embarras encadrer ennuyer essayent essayes fasses faveurs finalité finition foin forge fraudes fraîches fret gelée ghetto gonflé habitait haricots imposés insigne jonction juives latérale laurier lauréats limousin lèvre mangez mentor mineures mordre nef nerveuse observés offensif oignon pallier patronat perche poteaux prédire pèlerins raide ravages recrues refrain regagner revenons rhume rétabli sente solidité soupçon vanne viole énoncé éolien épave érable accru agresser aisée amenée arrières arrêtait aspire aînée banale barbier baroque bourreau braquage brutes béni bêtement cacao caramel cargo carotte carreaux cars chèvres citées cognac commet corner cornes croquis devinez divisés dotés décevoir décrits défends défiance désirer empathie enlevée envois eus excitant exode faisceau façades foules frotter gates griller grilles gérée gêner habillée hercule inédites larme manquera marqueur menacent meute mortier mémorial nains naissent naïveté orientée perde pizzas plaisait plaisent plasma plaçant posait postal propreté puissiez querelle raids remords remplies restants retenues réduites réfugier salée sphères stérile syndic tailleur thon tiges toiture utopie vicomte vivantes éclipse affronte aliment allongée apôtres aveux bananes basique batteur boivent bridge caresse choisies commode compact créa cuisines dealer direz dotation défoncé désirent détaché embêter empare enrichi escroc faubourg folk froids fériés gloria gomme gonfler guichet génies hanches harceler hommages héroïque hésitent influent jenny jetée joker lama lancées lotus mate meunier minima miroirs motivés métrages navale nazisme ores orné osez ouvrira parue passive patates piloter plais pou pouls pourrir projeter pus pyjama quatuor quittant rase recevait recharge refonte refusée reliques rêvent schémas serrure soudaine sourires surfer suspecte tampon timing trempé tuteur tuées typiques unitaire utérus valables valet vanille verbes vicaire violeur volés votez vêtu échelles égide énième étudiés accusent acquises aillent anal ancre assurez baisers ballade bascule biblique blabla bute bêta cachette cadence carnets chelem chialer conclue cor cuve devrai dirigées donjon douches ducs décalé décline décompte enfers ennuyeux envoler exactes excédent expulser formel foulard grottes gâchis haïr illégaux incarner indirect ion ivresse joueuses judaïsme licencié lys malins modifiés moutarde muse mèche môme naviguer neutres odieux opposées ovale papy partira pendre plaider plaies projette promène puzzle pédale périple raciale rattaché requises rituels référer réputés saxe scorpion sorciers sourds subtile survenu trompes verset versées visait voulions voulue voyaient weber écrivez émouvant abstrait ace aiguë appuient appuis baleines bisou bled boucler brunes cachées cerner chanoine choquer cliente clocher cruelle donneur doués déplacés essaies flippant fondent foutue frange freinage fâché garer glacée gouverne grimpe humilier hurle inertie internat isolées jouais jugées lingerie livreur lunette légaux maillots manie manquez milite minime molle orgasme portions primo proclamé propager proverbe puisses punis retrace réflexes réglée répondra secouer semences sucres tac tenons titan tolérer tortues usées vacance vitalité vitamine vomi écrivit éduquer émerger équiper éteinte abdomen abrutis adepte ajoutés amertume arrivons artères atténuer baume binaire building ciseaux convenir coûtera crient cylindre dauphins denrées dentelle disposés disputes dodo doive doter décrites déléguée déroute détecté efforce exclue explore exporter expulsé faction fiancé frustré gaillard halles hexagone ivoirien laissa loir managers maximal meneur mentales mimi modules mosaïque moules moussa ménager nappe négocie offices oracle parcourt poupées purge rançon remake restées retombe royales répartie réunie saisies sauvée sen serrée serrés serve sourde tournait tournés tremble unanime voirie zénith écoulé étaler étroites évoquée abaisser abattus adjointe agité aigu apportés assigné atterrir badge banquet bastion bazar berges bonbon brûlant brûlés bâtie capteur cassette coffres commando coupées coussin croisent dogme dopage drames déchirer déployé emblème event exerçant financée finement fondant freiner fuis gagnera gallo galères gap gibier granit hanche hart heurte ignorait immobile incluent indiqués inquiets inverser latéraux libraire loterie lueur mangeant martel marxiste mentent miettes mixité monarque médiane médiéval opté ornée panel parenté pavés peints pendu pinceau plaide postuler prieur primitif préfets pèsent rattrape rempart renferme reprit ruelle réponde résout saxon schiste sexisme shérif sitôt suivront taule taupe tenaient tentait traduite traduits triche viable vieillir vocal voyous vérifiez émanant émises épingle épouses éveil éveillé amiable ananas anarchie annexion aquarium archive baba billard brochure brume bruns butte capote capte cartel chaton claquer combiner continua coquin créances culot curry dam douteuse dépourvu enclos endormie enfoiré envahit fameuses fatigués fixant flamands fortunes fraise gaga gagnée géologie hachette idiote jetés lice licorne lucidité ludique malheurs mesurée mettrais moeurs montées mourant offrez perdants perçus phone piges piment placent présidée pépin rafales revente revois réf sabine sanguine sentie servie soprano statique suez suicides tenants tonton tracteur trappe traîtres versés vétérans épuisée équateur étalon évader abolir adultère aidée alliée apogée arrêtées atome ave avérer baisses barque battait blindés calvados cils conçues crues créole dauphiné devenez dissous dosage drap déserte entrave fallut gages glacier grêle huissier invitent jetons lançant lécher manège marchera martyre massives matinale minimal mistral mobilisé mêlant nazie nordique oubliant pascale payez paysanne pionnier plié poings polices poulets pressée rames reines renom revoit roumain royaux ruse réjouit répétées résine serra souhaits stipule sérum taxation temporel textiles tigres tombant touchées toussa toux traque vibrer volley yaourt érigé étudiée adoptées aggraver agira allures altesse armer atypique bacs banni caporal carnage centraux chantait chorale clowns comtes cosmique couette dessein diables diplômée discrets diète douée déchet déclara découper déduit escrime espèrent estimait exotique factions fax folies fragment fresque frontale fumeur gallois gant garou gisement guéri habituée hangar hilaire ignoble importer kayak lanceurs langages lenteur lèche malgache maquette marraine maçon membrane menait miennes minier minières montrée méditer occupera oie outrage passais piscines plombier pognon poney pouvions prions protéine publient ralentit rangées redonne reflets reporté revint riant sanglier saucisse saurez signalés soda sonnerie strictes supposés surmonté synopsis syntaxe tait taré terminés terra trier vante vendant verdure versée vieilli villas zut échappée échelons élargi étendues acceptés accusant accède affaibli aisance alpin amalgame aménager attirés avertis barème bouquins brancher buter cachait canicule caresser cascades cassés coincée colorés compacte comprimé contenue coopérer crétin dunes déluge détenue emmerder enfermés enlevés ennemies ferrée ferveur firmes fleuves flottant formées fossile haies idoles illicite imprimée intact invoquer jurer kiosque kurde lessive lima loyal maigrir marrer maçons mettrai mile motards mènera médium mélodies octave oil oranges ordonner oses partiels parvenue patinage peluche perdait perplexe pige pilules plombs poire porta porteuse poussin poutre pénales rebours recréer reliefs retardé roberts romane roumains salaud samedis saoul savourer scoop sieur sirènes souliers torche tournai trompent turques télévisé écouler équipées éthiques abonner abordés adéquate affichée alertes amnistie amorce ars atteste balai bandeau bandits baraque beautés billes booster boursier calculée canyon capot carreau causant cavité centrée charmes cheveu croate culottes cynique diaspora distant dominée dormait déborde démolir dépendra détenir enchanté envole facettes fat fauve flexible flots frissons fuient fusées fuyant garderie gâche gérés infliger jogging juniors labrador laissées laitiers larves ligues lisais menacées mignons minces miser mono mêlent normands notera noyé opter orphelin panda payante perruque pousses prendrai prisme prudente publiant python pêcher quartz quitta quittera ratée rechange refais renier rivage ruche régent rénové répand sacrifié sainteté salir sauvés seau sentant serbes servante sets stressé tablier tomba toscane tronçon trousse vedettes vertige yacht éliminés éprouver étouffe abîme admise agonie aimeriez alliage ambiante amiante amusent anse apollon apparus apportez arrogant bagues berline bingo bobos bravoure brigades bélier capitole capsules carence catalans chie chuter cinémas clerc cols commise distinct douai douzième déguster dénommé déplacée effigie exercée fable fertile flancs foires foutez fronts gangs incline intacte iras jetez jouaient ledit lisses malien mariées martiaux maudite melon minimes mouiller mouvance must nègres occupées penchant peuplée pillage pion plis postales pouviez prodige rabbin raie rassurez recueils reliées remorque riposte réjouis répit semé soufre souscrit spécimen survit tendres tripoli tuez vaillant verbale vertueux vinyle voilée voué vrac écoutais éliminée étroits abriter aimaient apôtre asthme athée auditeur balayer bits bouchée bulgare buteurs caillou caste changée civiques clics combinée conclus corbeau coûteuse crosse crétins cône deçà dinde dispense débouché dédiées démenti dévotion entourer entraide ethnie experte faciale fie flacon gardait gardée habites haie hic holding immonde intensif lâcheté malsain marquise marées mettais moches muraille nomades nuisible néfastes obscure opportun optimale optiques ottoman ouvres ouvrit palmer parlerai perdra produira prudents publia pulsions punch renée retourna rédigée rémunéré rénover révisé sachent sahel seuils sillage soucie soulagé stands tactile tan tarés teintes trolls trompée tumeurs vices virement vitrines élargie émue évitera abattoir absences accroît achetant adoptés amère apparent apprit assimilé bise bougent bouillir bruyant buvez cages catch caverne chassés choquée colombe conduira consenti contrées coques coudes cynisme devance dormant découpe dégagée démunis dépassée enfiler envoya envoyait forage forçant frappent galette grue guet horde héberger initier initiés innover instauré invitant jetant jugeant jugez jupes limitent lue manteaux mensuels messie montages montait nettoie nudité négation opaque ordure pacha parme partons pauses payait penseurs pignon poussées proprio prêtent purs rareté rasoir remèdes roumaine saines salades sanguins secoue sels serveuse signez slogans soignée songer string subis sèvres tata tireurs tombait tyran tyrannie tôle urne vallon valve vendait vifs vigilant virée volontés vétéran watts zèle éclairée écoliers égards égouts émise abattage absorbé affiliés aigles apprenne assurait attirée bailleur barons beat bit blacks blondes boulots cabines cassent caviar centime chimiste cidre claviers cocher contour corail cornet coupant cramer diarrhée digérer doublure drop délibéré englobe entourés envol estimés faucon fig fis fosses franchit fumier gagnait gardera gourmand gueuler hivers immortel inaperçu inculpé indigène informée iraniens lard legs lexique livrées logos lèvent manette manuelle marquage merdier méconnu obligent odyssée offrira paf paternel paume poirier polar portier portland propage proposez pétales rappels ratés rayé rebondir relevée ricains rouleaux roulent réparé saigne salauds salive sapeurs sauts scellé sembles siéger sombrer soumet subies suicidé synode sûres tempo tiède toxicité tsunami usager vielle vikings élaborée éolienne étendant étonnes afflux alsacien aléas ambre amusante anticipé archer ardoise attendra bactérie baril biscuit cake chaleurs cosmos cultivée deniers devions disco donneurs défie déployés dérision escadron essayais essuie essuyer falaises fictions gland gus humilié importés incluse indécis infidèle infime intestin judas jumeau louper meetings mie minérale monture mordu motard munis niches négligé obtenez ouvrait overdose palmiers pancarte papi parvis passeur peinte plafonds pleuvoir prostate recense regardée remuer ressorts répétés saigner saturne secourir shows siennes sioniste sponsor sponsors subvenir symétrie séparant tara taxer timides tonneau tordu tremplin variant veto virgule vivra écorce étale évaluée abrégé acquitté adoptant adoptent adéquat alerter ambiant ampoules aménagée anéantir aperçois avale avisé bannir cactus carême castor chartes choléra colorées comptais cortex couchée crucifix côtière dialecte enterrée envoies espérais fiasco foncer frise férié glaciers gluten gramme gravée grâces guérilla gèrent havane hôtesse longe luttent lycéen légume maigres manier marxisme minéral mirage motte mouchoir nautique noeud nouilles néfaste oratoire orientés osseuse paiera parkings parus passible pers planifié plénière poulain pourpre profile préservé quota regarda reliée relâcher rentrait repasse revenez ride risquait réalisez révélant satire signées slave sobriété survenir survenus tell tendant tissage urgente valides variée vaudra volées écuries écuyer éloges épousa étendent étonnée évoqués ôter accumule admets amicaux ample appuyée ardeur aspirer baissent barbu blouse bride brusque bruts came canot castres causent cavités clopes collant collet colon connasse corridor coupez crochets créative célébrée dater disputée dormez décidés déficits dégrader délivrée dévoilée dévorer effrayé enrichit escrocs exécutée fasciné fatalité fondés foutus galop gaucher gelé glissant glucose griffe guitares habileté habillés hausses huîtres inaction infâme inventée jaguar jargon lambda latins leviers levées liberty lisible lithium litiges luxueux légions lésion marginal micros mire nids obsédé omega ongle opium oxyde paniers parleur pipeline pool priez pures racontée remette rivale ruptures rênes sacrées servez simuler software sonnette surgit tapes tierce touchait tricher trust tsar versets voilier volcans voyou yards énervée évacué affinité agis aiderait alentour alliées alléger amande analogue arménien arroser arête autiste avertit bikini bouffon brunet cadran cal causées ciao coincés comprit confins crabe câlins digestif divertir doublée déchu dégénéré dévoué embête empires entrera exilé finiront flingue folklore fondue formulée glass grades ions irons lança lents liant mailles mettront mil montrera mord murmure méfaits nappes native nounou nullité onzième pal piéton pointu poutres profites recrutés refusa relax renvoyée reprenne revolver revêt royauté rustique râle révérend saches sauces scission sereine signant signent soupire tabasser tandem voudrez égoïsme éponyme étatique étudient étudiées éveiller affilié ancrage anxieux api appuyés ardent autistes bey blason blonds bordée boîtier brousse brûlent cadenas caprice chlore chênes colliers comiques confrère coïncide denses digue dirigea débits décorée décrété décédés démence effrayer elise emballé emmerdes empirer envier erronée exposant fade faisable fictifs gênée habitée huis humeurs hypnose hérésie infra initiée insensé jointe kabyle lentille liturgie lux léopard maille maxwell menteurs mesurant moquent moraux motrices naval omis onéreux opérant opérée papes parlée pinces piqûre pleures poignets polie prieuré prélever prétends rade recensés rendons rendront renouer rentes ressorti rides risquez régence rêvait sifflet skate sodomie sucrée suive séjourné teinture tenta tentez tirait tombées tortures trahis trahit tropical vases venin verso vivais voilées volants vouliez vôtres écoutait étendard accentue acharné adjudant affût aisés ajoutées alignés allergie allumée assistée atterri aubin avoine baignade basiques baux beige bergers bitume blessant bluff bourrée brefs brie brooks brûlures bûcher cambrai caresses chiot colombes colorée concède connut convives costaud coudre cyclable cyclone danoise dealers dora doutais dureté décidera dépeint enfermée entende enterrés exagérer exilés festin flamande fluidité forges frisson fritz fronde gilets gradins guidée guérit hilarant hystérie imite invoque jésuite kick laide lièvre mairies malle maudits modestie muette nettes noyaux obscures outrance pantin perron phobie piques piston potager prirent prologue prélude queues regain relis réglage répétée résolue résolus sabotage safran sanglant slalom soc sursaut swing thorax tonalité tracts traquer unissent vecteurs verger virilité viseur voulut vécut vêtue éditer émergent épées étoffe évoluant îlot achetées affectif agace alcools allions amandes arrondi assorti autos avorter baigne bambou basques batte bilans bille blindée bloquent bohème bonnets boudin boulets braquer cagnotte clore comparez conduis criait croque cruciale dalles dansant doublage débiteur déborder déceler décence décliner décolle décorer désarroi elfes enfreint esquisse exciter expulsés fachos fervent ficelles filtrer flambeau forcent forger fumées funèbre gave gifle grasses heurter imminent incliner juvénile laps leva levez mandarin mascotte menaçait museau méritée métis nombril notoire nulles obéit offense olives omelette orteils paniquer pannes paralysé parental perdit perçues pions piètre pleurant pointent ponte poésies produise proposa punaise pédales racaille ramenée ravir rejets rem renommé repense restauré retirent râler réactif réprimer sachet samba saoudien saturé skis suspend tapent tate terminus vaincus validée values yankees éclairs égout éligible émerge ériger aggrave agitée alchimie arômes assauts assument axée balades balais biche bunker cerises chatons choqués clivage cogne coiffe connexes costard coulée coupent crayons croisées cultivés discount dissout diva dormais dupe dura décidez déguiser embryon encadrée excluant fanfare figurait filmée folio fourre frotte fus gadget gourou grises gîte homos item lacets laïcs leu levure levés lisait lorrain lâchez mangeait manipulé mitigé méthane nomment normande notices obèse olympe orateur orteil parvint passerai permise pharaon piller pirater piéger piémont pleurent pli porche portique poux provenir précédée prévois puiser pénibles pépites rebond renaître retenez rigidité rubis régal réglages saurai scouts shoot sis spots stéréo tain tripes tunique valse vestes virale volaille affreuse agiter ajoutait ambigu amenant animées antan assemblé avide balise bavarois bide boussole brèves cabanes cachant caprices cloître cockpit combinés couplet cubain cueillir cuvette cygne demeures descends desserts dorés doutait débutent défilés délice détachée escadre exposent fonda fument furieuse gate glacial grenelle géniaux halo hectare icônes ignorais imprévu injecter injure irakien jouable jumelle ketchup lai lulu lustres marks méritez nicotine obsolète ordonnée ornement oubliées peigne peintes pinot planer pleurait pollen portage présumés psychose ravin rejouer relevait retracer rie rougir résonne safari sauras saxonne sermon sexiste slaves standing supra tambours traînent vignette virages écroule équestre absurdes albanais allumage avérée bouillie bovins brassard buvant bâtards bâtisse capuche carapace casseurs celtique choeur chômeur citons clone confuse contrée convois craignez cratère créatifs célibat dansent divan dotées décapité désirée détachés détendu dûment embargo emmenée enclin enverra excitée expédié fatiguer fissures fresques gabarit gag géantes harpe hépatite innovant joug karaté kiki lasser maligne marient marquez martiale matures messire migraine mollet mourra métrique natures neveux noie novice occulte ode opèrent paies paresse piégée poignard prélevé puma péquiste pétanque quittait raffiné rameau ration rejetés relégué remettra remous reptiles retraits rocket rouille rouvrir régnait répètent saleté sandales signalée slovaque soignant souri tapez tenace tombera tornade torts tribut valais versus virent vocales voûtes élargit épines étangs abusive acidité affluent alto anodin aptes arrêtant augure bander bayer bidons bises blizzard bouffée bourdon briquet brisés broche cadets calice captures chariots chouchou civilisé courait crêpe devrons dictée driver débauche déportés déserts désirant détenues essences faillit feriez fers flop gammes gardons gazeuse glandes gravier génome habitez haïtien hospice hébergé incarnée incombe infecté infernal injures insuline inversée jetait jument lancez larguer latex laïc lives locatif majors mina montante mue obtenant obtiens pandémie panthère parages paranoïa payants pendule penseur piété plagiat postée poudres propulsé quint rancune ravagé reggae rompt roulait roulette ruelles rétablie sabres sagement spontané subie suivons taverne tendues timidité unions vendeuse vessie vilains violons vitraux élevant épanouir évier évêché aboli agressée agrégé amples ancrée appuyez arènes aspirant assurera barils baronne barrette biennale blanchir brosser buissons bulgares caleçon camper cannelle cantal casinos causa cavale chameau chargent chauves chiites cogner confiés corporel coussins craie crasse côtoie dia dicter dioxyde dises distrait dortoir dynamite déboires défilent déguisée déplorer emmenés espionne exergue farouche ferré flatteur floue forcées fortin freine fétiche gérées hurlant hélice hésitant iceberg inceste infectés ive jeep labeur labour leurre limpide louable maquis marchais mena nageur narines natalité nausée nausées nettoyé noyade offrande onglet ovni ozone passante passeurs patois pepe pioche polis portière posthume potion pouf prouvant puberté punie ramènent raquette refléter renvoyés reparle repars rédigés rêveur saoule semis stoppé styliste succombé tendus thune tisser titans tonneaux touchera touchez tourna traînée usant vacants verrou viking violeurs voyelle zodiaque ébauche éclosion éduqué élevages éminent épine érudit évitent acronyme apparut arbustes arcades arrêta attarder aumônier avançait balises braque canoë castel censées cervelle chanvre chopper cocotte convainc croquer cuites desserte doris dorsale durées déclic délices dénicher déplaise entendra extase extraite fissure fleuri gale homard immigré influer ingrat insomnie intrus investie latines louanges maestro mage marrons matraque messes microbes mirent moisson mèches négoce oliviers oubliais oubliera paliers parterre piper plongeon prothèse proue préjugé présenta présumée prêcher racontez ranch rayures refermer relayer repaire régale rénale révélés sabots sautent savions sectes seizième semelle sil sorts souples tacite tanks tirages trafics turbines vacant visas vitaux yens éclairés égaré éleveur émane énigmes étagère étanche abusent adverses aligné bandit blessées blocages bobine boisé bourrés brasse brillent carcasse carpe cerfs chenille collants compta concerto coulent creuses crèches cumulé datation destins douille doutent drainage duels dégagent dévasté enlevées esquiver ficelle fiesta figurine figé fonciers fouetter fourche frontal frégate féminité galets gerbe gerber glande glauque graisses grandis gratis honteuse imposait institué instruit inséré labels laxisme lester lieues lilas living livrets lézard manettes méta naquit noisette oculaire opposait optimal ouïe parer percuté perses phoque plantée posa prompt prélat raclette refuges retrouva richards rivages rogue silex slow sortais stratège stériles sublimes sushi tirez tolère tordre totales traitait transat tremper tulle twist vaille vanité verbaux viaduc vieillit vigile viril viticole voyelles véracité écoulée écureuil élaborés émettent émirats érigée étui aimera annulés apparues appoint assistés athées athéisme attribut avenues bave brûlées catalane climats clones corrigée cuits côtoyer devin dicte distante domino emportée encaisse enduit entorse estampes ethnies excités exporte expresse fermant fichu fiefs flocons flotter fourmi fournira graffiti gratin habitats hanté incluses injecté invitées largué liqueur liégeois lustre marquera merdé mesurent morphine morsure mous munie nomade nouer offrons oncles ordonna parure perdure pif piqûres placards poignées polaires poterie poupe proies puise purger quotient rebonds redevenu rejoints relayé rentrées replier retirant rouages rubans résumés sadique scotch siffler smash supplice suture sévit sévérité tasses testés torchon torturer toto training veuves voudrai voyagent écartée émigré émigrés émir énoncés évoquées accepta affamés agile allers alloué amicales apanage appât articule assurées austère balances barman bibi biomasse bouquets boxer brio brûlure cloutier comptons confiées conjugal consorts coteaux célestes discorde dégoûté délaissé délivrés démoli déplaire déployée emballer enclave endurer entrait errant escargot euphorie exit filature finies fixent globales graveur grimace grogne gui guignol hormone housse ignorez illuminé indemne inhumain joliment kan libido litière lunes mages marrante millet mustang mépriser natifs oies oscille paquebot pierrot plant pluvieux pointant promos proteste quittes radieux recevons refroidi remue reportée rescapés retirez rongeurs révoltes rêvez scrupule selles sexistes soude statuer surgir tangible tapie termina tiroirs tondeuse tousse tract voudras vouée émérite épaisses étalage abusif affront antre aperçus aplomb attende aubaine avançant aversion basic blanchet bocal brioche bristol carences cassez cavernes cigare citadins claques comparés compense corniche corvée coupons crabes crocs cuves devras donnais dualité décent démarque dérapage détend dîners endort enrichie exacts fables facho fente fesse fourgon gangster geler glaçons gogo gorgée greffier guette imaginée implants induire infiltré inscris jasmin junte malienne mantes martini moquette motrice nageurs narratif navettes packs palmier panoplie poliment posera promeut pronom précoces quittez raz referme reposait roquette réagis réussira sclérose scout sensée siemens soudure sunnites sélectif sésame tact tartes théâtral tonique ténor visitez vivacité voiler volts vêtus ânes écailles écrasée égoïstes épuisés équipier étain évoluait îlots absorbée accouché adorais adorait algèbre anormale anéanti applaudi argenté asphalte atroces axa aération balayage beauf bistrot bloquant bouchées bris bronzage caféine collée complots corbeaux cuvée côtoient dispersé dissiper dynamo déguisés délicats dépassés déposent enflamme eustache exquis federer flirt foncée fonderie fortiori fûts gadgets garni germaine globes graver guichets guidon générés hue hôtelier joyeuses kil laitière lauriers laïques leucémie lucarne luttant lâchent magnum malice morbide mouillée moult murale naïfs noeuds nommées novateur ogre oued pastel payantes penny piquant placebo pléiade pondre postulat pressing propices prévaut psaume pulls putsch pèlerin péages pétard rai ramenez rance ratifié refuses rentrez reparler replacer repérage rimes robustes rodez rosée rêvais rôti samouraï sculpté seller sentis sillon singer sociable sondes tabous tampons taureaux terriens terrier traiteur tramways tétons vapeurs veillée veuf vivier voudriez wallonne étendait évalués abritant adaptent altérer amusez amènera anses assortie bagarres blouson bombardé carabine caser casernes chaudron chiante cohorte collés couchant crotte curés cutanée diocèses diraient dissoute divines dogmes désirait dévier dévolu effraie encadrés encens enlèvent entraver examinée finirait flair fougères fourrer foutait galant globules grossi guignols génèrent insoumis invalide irakiens larve lisière lombard loulou lourdeur maures migrant morue médoc mômes nominale noyés occupa offenser omnibus opacité palettes panache pancréas parleurs perdrait placez profane présider prévenue prêche rallonge recycler rejetant relevées ronge réservez résilier sapins satin savantes sonnent stature survol tchèques terne terreau truite trèfle tune virtuels votant zizi éclatent évidents abattue aideront alpine aménagés anale aqueduc arnaques arrachée arrose assoit atteigne avèrent battez bordé cab cadette caler canular cessera changea chiants citent clientes cobalt conforte conquise coupole croates créneaux diacre dorées débattu déchirée déjouer dérivée dévoré elfe enlevant ermite escapade escouade estimez estival faciès fayard ferrées fictive forgeron frayeur funèbres hippie hisser javel joyau kits libyen libérées ligament loft maniaque marabout marmite mauve motel mécénat niais noirceur nope omnium pasteurs païens persan pesait poilu pomper postent pourries pourvus projetée pépite redis remettez repentir rivales romano roubles réputées sacoche salsa sauna savante sordide sujette surpasse sushis syllabes tombez turbine ténacité vacciner vassaux veaux verve vexé vingts vivace éclatant égaler épineux évacués éviction abordent accusait affiner agréé alarmes alibi apaise argot assumée astres battues bossent brisées bruyante califat cendre chiffon chlorure citerne cobra cochonne cotée couvrait crapaud credo créez cubaine cubains cumuler dalton divisées doutez défunte défunts désarmé encours endors enfile enrayer estimées fautif feinte ferrer festif feuillet filtrage flirter formait franches fugue fumes fusions galaxies gauches gelées germes graphe gérants hibou indécent informel insignes jeudis joyaux jugeait kart lançait lobe loyaux manne manquée maryland mascara merle meure morgue muets mûre nourrice nourrie palpable parfaire pelé piaf pillages pope poussait probité prouvée prélats pérenne rejetées relaxe rigides résider révélées silicium sionisme sourcil stylos sève tabouret taillée tentera thunes torrents troubler troublée têtu visitent volante écartés écoulés écrasés écrira écrivais écrouler abordée acné adage adhérent agilité alliez amusait archers autruche avouez avérés bates beer bloquées bouscule brunch caille caps carrier chabot chopé collent compas comptage conteur coûtait crampons croie crypte crânes créance crédité cépages devants dicton discutée dominés dressage dressent dénigrer dénué déplaît déroulés endormis ennuyé envahie enverrai estuaire exagérée exercées exigée expire fiston flan fol foudres fougue frérot fâcher goal goudron gravées haïtiens honorée immature injustes inouïe irrité jouons lavabo lundis légiste macabre masser matinal murat méfiant nirvana nota orgie paieront parabole phénix plongeur pompée pond poussins prélevés psaumes psyché raisonné rama relu reports retira retirées rigolade romande rétablit scellés siffle solos spatiaux spray spécifié tantes tentée titane tracée trot tua vassal vautours vendez vidange émeraude éminents épuisant étendus afghan aidait ajusté animent antidote apéritif aria aride autocar avare avenant basilic bassiste bea bic border bouclée canette cassées caïd chiite cognitif confesse contres coulisse crampes crêtes cédant ding dingues dirons divisent donateur débutera décidait décorés déloyale dérober déçoit entamée excède expédier faste fessée fia frite frôle féodal gal giron gravir grillage gémeaux heurts ide influe inondé installa ire jauge liquider lycéenne malsaine maltais massages menottes mentez minerais montra murales médocs navales novices obligées opéras papas passifs patentes pelouses peuplées pise plairait plaquer poires postaux postures présage purent rameaux rassurée rebord revendu rocheux réciter rénovée répétant sachets saisine sanglots sardines sauvez serrées squat substrat superflu syllabe tempe tibia totem trompez tronçons trousses tueries utopique veillez vertiges viendrai vil voeu vécues épinards étayer agrandit aisées ajoutons alfa ambiguë appela arêtes attelage ballades bataclan blanchi bondir boues bouée bâties bénisse cachets cadastre cagoule celtes centième constats copilote corrida cotées couscous cricket crèmes côtoyé dep derrick disparut divorcer duras décerner décidant dénommée embellir erronées excelle furie gais grappe grasset griefs gueux habilité haines hammam hordes hymnes imams immuable imprévus inclinée indigo insolent isolant joua libérez lister lynx légué maillon maliens moelleux momie montez mordant morne mouillés muret méconnue navigue nient nomma nuageux omission opérés ovaires pingouin podiums portons prémices punit purifier périls raies rayer repêché resterai ruinée référant régaler résument sautant semblez semence sevrage sole souffrez surnoms séchage tempéré testée thermes tira toitures tournez trappes téléfilm ultras unanimes urinaire vibrant vocable vrille vénère vérifiée zonage égorger épris abaisse affamé alliant alloués apache aperçue archiduc arsenic asphyxie attarde aune baltes bavard biberon bison bruyère cafards cedex chester chilien chiots choisira clercs clochard closes coche colonisé coulant courez césars dessinés drogué duplex débâcle décris délirant déléguer démonté dérivées dévastée entrons envolée enzymes estimons eues fassiez festive flippe gent gin gitans glucides guidage guérie harcelé houle houlette inactif infligé jasper jeta joins kamikaze lande lauréate lime lords loyale marchons massa menteuse muté ménagère méridien mêlés narcisse official offrit opprimés oraux ornées ornés palma palmes perpétue phoques pitre pizzeria pointues poneys pressent prémunir prêteur pupilles quittée recto redresse regorge relique risquée ruches réfute régies répandus sentit shooter sigle silences situait skieur soignés steaks subite summum tomas tops trompeur télés vagabond vaine vergers vexer vibre vigneron vinrent vitales voiliers vécus wallons yard échouent égérie émotif énervant épuiser abondant agora amazone aminés arrosage balayé bannis bougez brigands brouille candide canettes carrées censurer chantée cloison codage coincer colossal compote cordons crevette cruels disgrâce droitier dupes dégât dénivelé dénombre déporté déposant détours effroi essuyé excéder exigeait faisions feutre fleurir focalise foute frénésie fumant funeste futé fâcheuse gaie galettes garce gracieux grill gué hériter illico incitent joignent juteux kif lasers loués malus manille marquait meneurs modérer munster naissant occupez orales parut payeur pend pilon pinceaux piquet poisse pourtour primauté protégez présumer rabattre ramenés rechute reverra revêtu rient rougeole régit réitère réussies salement saurons scratch sep skipper solennel sonder sosie stimule stressée succéda surgi tapant tiennes toxines tuera valorise venge verge vestige virtuose visitant voyance économe émoi épilogue éternels abîmer acharnée admirez agissez aida alarmant allumés alterne amadou amine annonça arbore armada asperger assouvir baissée ballets baser bastide bastions berbère berbères bobines bourgade brick brûlante bâtis caisson calculés chalets chantre chaperon chargera chiffrer cigares coiffer collage corrects dada discutez diverse divorcés docile dressée débloqué décorées dégradée désarmer effacée encombre enfantin escape esquive exclues exhorte fauché filon flottes frustrés fugitif gaine germe gorille grappes grues géniales hait hamster hobby implant infinies inégale iode items lactée lavande livrant macho mangeais mardis matte mausolée mime minceur miner morse mule méfiez naine niqué notée obscurs obèses octroyer odorat pamphlet papilles pensiez perdons piétonne pompage pores prenante pétards pétasse raciales raffinée recèle relaxer retardée ruée récital réfuter résidait résulter salarial scripts serrures shorts sonorité sortants soulagée soupirs stèle subtiles suivais tartine tournera truqué vocaux votées voyante voyeur yaourts échappés écoutée édifier énumère ôte acadiens activée adoucir ailles aimants alignées approcha armures bailli bals banquise barrée beats bergé binaires boiteux bondé bora bouges boulette bouvier buvait bénigne cantines".split(
    " ",
  );
const THM = [
  {
    "n": "Hiver",
    "w": [
      ["NEIGE", "Elle tombe en flocons"],
      ["GLACE", "Eau devenue solide"],
      ["FLOCON", "Petit cristal de neige"],
      ["LUGE", "Petit traîneau pour glisser"],
      ["GIVRE", "Fine couche de glace sur les vitres"],
      ["SKI", "Sport de glisse sur les pentes"],
      ["MOUFLE", "Gant sans doigts séparés"],
      ["ECHARPE", "Elle protège le cou du froid"],
      ["BONNET", "Il garde la tête au chaud"],
      ["FRIMAS", "Brouillard givrant, au pluriel"],
      ["VERGLAS", "Glace traîtresse sur la route"],
      ["IGLOO", "Maison de blocs de neige"],
      ["CHALET", "Maison de montagne en bois"],
      ["PATIN", "On le chausse pour glisser sur la glace"],
    ],
  },
  {
    "n": "Forêt",
    "w": [
      ["SAPIN", "Conifère des fêtes"],
      ["CHENE", "Arbre aux glands"],
      ["MOUSSE", "Tapis vert des sous-bois"],
      ["FOUGERE", "Plante aux grandes feuilles découpées"],
      ["RENARD", "Rusé roux de la forêt"],
      ["ECUREUIL", "Il cache des noisettes"],
      ["SENTIER", "Petit chemin"],
      ["CLAIRIERE", "Espace dégagé au milieu des arbres"],
      ["CHAMPIGNON", "Il pousse après la pluie"],
      ["HIBOU", "Oiseau de nuit aux aigrettes"],
      ["BICHE", "Femelle du cerf"],
      ["ECORCE", "Peau de l’arbre"],
      ["GLAND", "Fruit du chêne"],
    ],
  },
  {
    "n": "Mer",
    "w": [
      ["VAGUE", "Ondulation de la mer"],
      ["MAREE", "Elle monte et descend deux fois par jour"],
      ["PHARE", "Tour qui guide les bateaux"],
      ["CORAIL", "Récif vivant des mers chaudes"],
      ["DAUPHIN", "Mammifère marin joueur"],
      ["BALEINE", "Plus grand animal du monde"],
      ["MOUETTE", "Oiseau des ports"],
      ["ECUME", "Mousse blanche des vagues"],
      ["VOILIER", "Bateau poussé par le vent"],
      ["ANCRE", "Elle retient le navire"],
      ["ALGUE", "Plante marine"],
      ["CRABE", "Il marche de côté"],
      ["ETOILE", "De mer, elle a cinq bras"],
    ],
  },
  {
    "n": "Montagne",
    "w": [
      ["SOMMET", "Point le plus haut"],
      ["GLACIER", "Fleuve de glace"],
      ["CHAMOIS", "Agile habitant des cimes"],
      ["REFUGE", "Abri pour randonneurs"],
      ["VALLEE", "Creux entre deux montagnes"],
      ["CASCADE", "Chute d’eau"],
      ["MARMOTTE", "Elle siffle et hiberne"],
      ["ALPAGE", "Pâturage d’altitude"],
      ["CORDEE", "Alpinistes attachés ensemble"],
      ["EDELWEISS", "Fleur blanche des Alpes"],
      ["COL", "Passage entre deux sommets"],
      ["AIGLE", "Rapace royal"],
    ],
  },
  {
    "n": "Jardin",
    "w": [
      ["ROSE", "Fleur aux épines"],
      ["TULIPE", "Fleur à bulbe de Hollande"],
      ["ARROSOIR", "Il donne à boire aux plantes"],
      ["POTAGER", "Jardin de légumes"],
      ["GRAINE", "Elle deviendra plante"],
      ["BECHE", "Outil pour retourner la terre"],
      ["COCCINELLE", "Petite bête à points noirs"],
      ["ESCARGOT", "Il porte sa maison"],
      ["HAIE", "Clôture de végétaux"],
      ["PELOUSE", "Gazon bien tondu"],
      ["RATEAU", "Outil à dents pour les feuilles"],
      ["LILAS", "Arbuste aux grappes parfumées"],
    ],
  },
  {
    "n": "Cuisine",
    "w": [
      ["CASSEROLE", "Récipient à manche pour cuire"],
      ["FOUET", "Il bat les œufs en neige"],
      ["RECETTE", "Marche à suivre du cuisinier"],
      ["FOUR", "On y fait gratiner"],
      ["SOUPE", "Potage du soir"],
      ["TARTE", "Pâte garnie de fruits"],
      ["POIVRE", "Épice des grains noirs"],
      ["SEL", "Il relève les plats"],
      ["CREPE", "Fine galette de la Chandeleur"],
      ["GRATIN", "Plat doré au four"],
      ["LOUCHE", "Grande cuillère à soupe"],
      ["TABLIER", "Il protège les vêtements du cuisinier"],
    ],
  },
  {
    "n": "Fruits",
    "w": [
      ["POMME", "Fruit de Newton"],
      ["POIRE", "Fruit en forme de goutte"],
      ["CERISE", "Petit fruit rouge à noyau"],
      ["FRAISE", "Fruit rouge du printemps"],
      ["ORANGE", "Agrume de l’hiver"],
      ["CITRON", "Agrume acide"],
      ["BANANE", "Fruit jaune à éplucher"],
      ["ABRICOT", "Fruit orangé à noyau"],
      ["MYRTILLE", "Petite baie bleue"],
      ["FIGUE", "Fruit du Midi plein de graines"],
      ["PRUNE", "Fruit violet à noyau"],
      ["KIWI", "Fruit à peau velue et chair verte"],
      ["MELON", "Gros fruit d’été à la chair orangée"],
    ],
  },
  {
    "n": "Légumes",
    "w": [
      ["CAROTTE", "Racine orange"],
      ["POIREAU", "Légume du pot-au-feu"],
      ["TOMATE", "Fruit rouge cuisiné comme un légume"],
      ["COURGE", "Famille du potiron"],
      ["NAVET", "Racine blanche et violette"],
      ["RADIS", "Petite racine piquante"],
      ["EPINARD", "Légume vert de Popeye"],
      ["CHOU", "Légume pommé"],
      ["OIGNON", "Il fait pleurer"],
      ["LAITUE", "Salade verte"],
      ["PETITPOIS", "Petite graine verte dans une cosse"],
      ["BETTERAVE", "Racine rouge sucrée"],
    ],
  },
  {
    "n": "Oiseaux",
    "w": [
      ["MERLE", "Oiseau noir au bec jaune"],
      ["MESANGE", "Petit oiseau à tête bleue ou noire"],
      ["ROUGEGORGE", "Petit oiseau à la poitrine orange"],
      ["HIRONDELLE", "Elle annonce le printemps"],
      ["CHOUETTE", "Rapace nocturne sans aigrettes"],
      ["PIGEON", "Habitant des places publiques"],
      ["CYGNE", "Grand oiseau blanc des étangs"],
      ["HERON", "Échassier gris des rivières"],
      ["PIC", "Il tambourine sur les troncs"],
      ["CORBEAU", "Grand oiseau noir"],
      ["PERROQUET", "Oiseau coloré qui parle"],
      ["COLIBRI", "Minuscule oiseau butineur"],
    ],
  },
  {
    "n": "Animaux",
    "w": [
      ["LAPIN", "Il a de longues oreilles"],
      ["TORTUE", "Elle avance lentement"],
      ["HERISSON", "Petit animal piquant"],
      ["LOUTRE", "Nageuse des rivières"],
      ["OURS", "Grand animal qui hiberne"],
      ["LOUP", "Il hurle à la lune"],
      ["CERF", "Il porte des bois"],
      ["BLAIREAU", "Animal rayé noir et blanc"],
      ["CASTOR", "Bâtisseur de barrages"],
      ["ZEBRE", "Cheval rayé"],
      ["GIRAFE", "Animal au long cou"],
      ["PANDA", "Ours noir et blanc"],
      ["KOALA", "Il dort dans les eucalyptus"],
    ],
  },
  {
    "n": "Insectes",
    "w": [
      ["ABEILLE", "Elle fait le miel"],
      ["PAPILLON", "Il était chenille"],
      ["LIBELLULE", "Insecte aux ailes transparentes"],
      ["FOURMI", "Petite ouvrière"],
      ["GRILLON", "Il chante la nuit"],
      ["CIGALE", "Elle chante l’été"],
      ["SCARABEE", "Insecte à carapace"],
      ["LUCIOLE", "Insecte qui brille la nuit"],
      ["GUEPE", "Insecte jaune et noir qui pique"],
      ["CHENILLE", "Futur papillon"],
      ["SAUTERELLE", "Insecte sauteur"],
    ],
  },
  {
    "n": "Arbres",
    "w": [
      ["ERABLE", "Arbre au sirop"],
      ["BOULEAU", "Arbre à l’écorce blanche"],
      ["SAULE", "Arbre pleureur"],
      ["PEUPLIER", "Grand arbre élancé"],
      ["TILLEUL", "Arbre aux fleurs en tisane"],
      ["OLIVIER", "Arbre du Midi"],
      ["PLATANE", "Arbre des places de village"],
      ["CEDRE", "Arbre du Liban"],
      ["HETRE", "Arbre aux faines"],
      ["MELEZE", "Conifère qui perd ses aiguilles"],
      ["BAMBOU", "Grande herbe creuse"],
      ["PALMIER", "Arbre des plages tropicales"],
    ],
  },
  {
    "n": "Fleurs",
    "w": [
      ["MARGUERITE", "On l’effeuille"],
      ["LAVANDE", "Fleur violette de Provence"],
      ["TOURNESOL", "Il suit le soleil"],
      ["COQUELICOT", "Fleur rouge des champs"],
      ["MUGUET", "Clochettes du 1er mai"],
      ["VIOLETTE", "Petite fleur mauve parfumée"],
      ["ORCHIDEE", "Fleur exotique délicate"],
      ["PIVOINE", "Grosse fleur rose"],
      ["JONQUILLE", "Fleur jaune du printemps"],
      ["JASMIN", "Fleur blanche au parfum sucré"],
      ["LYS", "Fleur royale"],
      ["IRIS", "Fleur et partie de l’œil"],
    ],
  },
  {
    "n": "Météo",
    "w": [
      ["NUAGE", "Il cache le soleil"],
      ["PLUIE", "Elle mouille"],
      ["ORAGE", "Tonnerre et éclairs"],
      ["BRUME", "Léger brouillard"],
      ["VENT", "Air en mouvement"],
      ["ARCENCIEL", "Il apparaît après l’averse"],
      ["GRELE", "Pluie de glace"],
      ["ECLAIR", "Lumière de l’orage"],
      ["TONNERRE", "Bruit de l’orage"],
      ["ROSEE", "Gouttes du matin"],
      ["AVERSE", "Pluie soudaine"],
      ["CANICULE", "Forte chaleur"],
    ],
  },
  {
    "n": "Ciel",
    "w": [
      ["ETOILE", "Elle brille la nuit"],
      ["LUNE", "Satellite de la Terre"],
      ["COMETE", "Astre à chevelure"],
      ["PLANETE", "Mars en est une"],
      ["GALAXIE", "Notre voie lactée en est une"],
      ["AURORE", "Lever du jour ou lumière polaire"],
      ["CREPUSCULE", "Tombée du jour"],
      ["CONSTELLATION", "Groupe d’étoiles"],
      ["SATURNE", "Planète aux anneaux"],
      ["SOLEIL", "Notre étoile"],
      ["FUSEE", "Elle part dans l’espace"],
      ["ASTRONAUTE", "Voyageur de l’espace"],
    ],
  },
  {
    "n": "Musique",
    "w": [
      ["PIANO", "Instrument à touches"],
      ["VIOLON", "Instrument à archet"],
      ["FLUTE", "Instrument à vent"],
      ["GUITARE", "Instrument à six cordes"],
      ["TAMBOUR", "On frappe dessus"],
      ["HARPE", "Instrument aux nombreuses cordes"],
      ["CHORALE", "Groupe de chanteurs"],
      ["MELODIE", "Suite de notes agréable"],
      ["REFRAIN", "Partie qui revient dans une chanson"],
      ["VIOLONCELLE", "Grand violon joué assis"],
      ["TROMPETTE", "Cuivre éclatant"],
      ["BERCEUSE", "Chanson pour endormir"],
    ],
  },
  {
    "n": "Couleurs",
    "w": [
      ["ROUGE", "Couleur de la fraise"],
      ["BLEU", "Couleur du ciel"],
      ["VERT", "Couleur de l’herbe"],
      ["JAUNE", "Couleur du citron"],
      ["VIOLET", "Couleur de la lavande"],
      ["ORANGE", "Couleur de la carotte"],
      ["TURQUOISE", "Bleu-vert des lagons"],
      ["BEIGE", "Couleur du sable"],
      ["ARGENT", "Métal et couleur de la lune"],
      ["DORE", "Couleur de l’or"],
      ["INDIGO", "Bleu profond"],
      ["CORAIL", "Rose orangé"],
    ],
  },
  {
    "n": "Vêtements",
    "w": [
      ["MANTEAU", "Vêtement chaud d’hiver"],
      ["PULL", "Tricot à enfiler"],
      ["CHAUSSETTE", "On en perd souvent une"],
      ["PYJAMA", "Tenue de nuit"],
      ["ROBE", "Vêtement d’une pièce"],
      ["GILET", "Veste sans manches ou tricot ouvert"],
      ["BOTTES", "Chaussures hautes"],
      ["CHAPEAU", "Couvre-chef"],
      ["GANTS", "Ils couvrent les mains"],
      ["PANTOUFLE", "Chausson d’intérieur"],
      ["JUPE", "Vêtement du bas"],
      ["CRAVATE", "Accessoire noué au cou"],
    ],
  },
  {
    "n": "Maison",
    "w": [
      ["CHEMINEE", "On y fait du feu"],
      ["FENETRE", "Ouverture vitrée"],
      ["GRENIER", "Pièce sous le toit"],
      ["ESCALIER", "Il mène à l’étage"],
      ["COUSSIN", "Petit oreiller du canapé"],
      ["LAMPE", "Elle éclaire"],
      ["TAPIS", "Il couvre le sol"],
      ["CANAPE", "Siège pour plusieurs"],
      ["ETAGERE", "Planche pour les livres"],
      ["VOLET", "Il ferme la fenêtre"],
      ["PLAID", "Couverture du canapé"],
      ["BOUGIE", "Petite flamme de cire"],
    ],
  },
  {
    "n": "Lecture",
    "w": [
      ["ROMAN", "Long récit"],
      ["POEME", "Texte en vers"],
      ["CONTE", "Il était une fois"],
      ["CHAPITRE", "Partie d’un livre"],
      ["AUTEUR", "Celui qui écrit"],
      ["MARQUEPAGE", "Il garde la page"],
      ["BIBLIOTHEQUE", "Lieu plein de livres"],
      ["ROMANCIER", "Écrivain de romans"],
      ["POCHE", "Format de livre léger"],
      ["LIBRAIRE", "Il vend des livres"],
      ["FABLE", "Récit de La Fontaine"],
      ["SONNET", "Poème de quatorze vers"],
    ],
  },
  {
    "n": "Art",
    "w": [
      ["PINCEAU", "Outil du peintre"],
      ["PALETTE", "Planche du peintre"],
      ["TOILE", "Support du tableau"],
      ["CHEVALET", "Support de la toile"],
      ["SCULPTURE", "Œuvre en trois dimensions"],
      ["MUSEE", "Lieu d’exposition"],
      ["AQUARELLE", "Peinture à l’eau"],
      ["PORTRAIT", "Image d’une personne"],
      ["CROQUIS", "Dessin rapide"],
      ["FRESQUE", "Peinture murale"],
      ["MOSAIQUE", "Image de petits carreaux"],
      ["ESQUISSE", "Premier jet d’un dessin"],
    ],
  },
  {
    "n": "Voyage",
    "w": [
      ["VALISE", "Bagage à roulettes"],
      ["BILLET", "Titre de transport"],
      ["CARTE", "Elle montre le chemin"],
      ["BOUSSOLE", "Elle indique le nord"],
      ["PASSEPORT", "Document pour voyager"],
      ["AVION", "Il vole avec des passagers"],
      ["TRAIN", "Il roule sur des rails"],
      ["ESCALE", "Arrêt en cours de voyage"],
      ["SOUVENIR", "On le rapporte de voyage"],
      ["HOTEL", "Logement de vacances"],
      ["GARE", "On y prend le train"],
      ["ROUTE", "Chemin goudronné"],
    ],
  },
  {
    "n": "Métiers",
    "w": [
      ["BOULANGER", "Il fait le pain"],
      ["JARDINIER", "Il soigne les plantes"],
      ["FACTEUR", "Il apporte le courrier"],
      ["PECHEUR", "Il attrape des poissons"],
      ["MEDECIN", "Il soigne les malades"],
      ["POMPIER", "Il éteint les feux"],
      ["MENUISIER", "Il travaille le bois"],
      ["COIFFEUR", "Il coupe les cheveux"],
      ["PILOTE", "Il conduit l’avion"],
      ["INSTITUTEUR", "Maître d’école"],
      ["FLEURISTE", "Il vend des bouquets"],
      ["BERGER", "Il garde les moutons"],
    ],
  },
  {
    "n": "Jeux",
    "w": [
      ["DAMES", "Jeu de pions sur damier"],
      ["ECHECS", "Jeu du roi et de la reine"],
      ["PUZZLE", "Jeu de pièces à assembler"],
      ["CARTES", "On les bat et on les distribue"],
      ["DOMINO", "Pièce à points"],
      ["TOUPIE", "Elle tourne sur elle-même"],
      ["CERFVOLANT", "Il vole au bout d’un fil"],
      ["BILLE", "Petite boule de verre"],
      ["MARELLE", "Jeu de cases à cloche-pied"],
      ["CHARADE", "Devinette en plusieurs parties"],
      ["DEVINETTE", "Petite énigme"],
    ],
  },
  {
    "n": "Contes",
    "w": [
      ["FEE", "Elle a une baguette magique"],
      ["DRAGON", "Il crache du feu"],
      ["CHATEAU", "Demeure du roi"],
      ["PRINCESSE", "Fille du roi"],
      ["SORCIERE", "Elle vole sur un balai"],
      ["LUTIN", "Petit être malicieux"],
      ["GEANT", "Personnage immense"],
      ["LICORNE", "Cheval à corne"],
      ["TRESOR", "Coffre plein d’or"],
      ["OGRE", "Mangeur d’enfants des contes"],
      ["GRIMOIRE", "Livre de sorts"],
      ["CITROUILLE", "Elle devient carrosse"],
    ],
  },
  {
    "n": "Boulangerie",
    "w": [
      ["BAGUETTE", "Pain long"],
      ["CROISSANT", "Viennoiserie en forme de lune"],
      ["BRIOCHE", "Pain moelleux au beurre"],
      ["FARINE", "Poudre de blé"],
      ["LEVAIN", "Il fait lever la pâte"],
      ["PETRIN", "Machine à pétrir ou situation difficile"],
      ["CHOUQUETTE", "Petite boule au sucre perlé"],
      ["ECLAIR", "Pâtisserie au chocolat ou au café"],
      ["MADELEINE", "Gâteau de Proust"],
      ["MACARON", "Petit biscuit coloré"],
      ["FOURNIL", "Atelier du boulanger"],
      ["PAINDEPICE", "Gâteau aux épices et au miel"],
    ],
  },
  {
    "n": "Boissons",
    "w": [
      ["THE", "Infusion de feuilles"],
      ["TISANE", "Infusion du soir"],
      ["CAFE", "Il réveille le matin"],
      ["CHOCOLAT", "Boisson chaude des enfants"],
      ["JUS", "Boisson de fruits pressés"],
      ["LIMONADE", "Boisson pétillante au citron"],
      ["SIROP", "Liquide sucré à diluer"],
      ["LAIT", "Boisson blanche"],
      ["CIDRE", "Boisson de pommes"],
      ["SMOOTHIE", "Boisson de fruits mixés"],
      ["INFUSION", "Boisson de plantes"],
      ["CAPPUCCINO", "Café à la mousse de lait"],
    ],
  },
  {
    "n": "Nuit",
    "w": [
      ["SOMMEIL", "Repos de la nuit"],
      ["REVE", "Histoire de la nuit"],
      ["OREILLER", "On y pose la tête"],
      ["COUETTE", "Elle couvre le lit"],
      ["VEILLEUSE", "Petite lumière de nuit"],
      ["BERCEAU", "Lit du bébé"],
      ["SIESTE", "Petit somme"],
      ["MINUIT", "Douze coups de la nuit"],
      ["NUIT", "Elle suit le jour"],
      ["SILENCE", "Absence de bruit"],
      ["DOUDOU", "Peluche du coucher"],
      ["EDREDON", "Couverture rembourrée"],
    ],
  },
  {
    "n": "Corps",
    "w": [
      ["COEUR", "Il bat"],
      ["MAIN", "Elle a cinq doigts"],
      ["EPAULE", "Elle relie le bras"],
      ["GENOU", "Articulation de la jambe"],
      ["CHEVEUX", "Ils poussent sur la tête"],
      ["SOURIRE", "Expression de joie"],
      ["OREILLE", "Organe de l’ouïe"],
      ["NEZ", "Organe de l’odorat"],
      ["POUMON", "Il respire"],
      ["CHEVILLE", "Articulation du pied"],
      ["SOURCIL", "Poils au-dessus de l’œil"],
      ["PAUPIERE", "Elle se ferme sur l’œil"],
    ],
  },
  {
    "n": "Émotions",
    "w": [
      ["JOIE", "Sentiment de bonheur"],
      ["CALME", "Absence d’agitation"],
      ["PAIX", "Sérénité"],
      ["TENDRESSE", "Douceur affectueuse"],
      ["ESPOIR", "Il fait vivre"],
      ["GRATITUDE", "Reconnaissance"],
      ["SERENITE", "Calme intérieur"],
      ["CONFIANCE", "Elle se gagne"],
      ["COURAGE", "Il aide à affronter"],
      ["REVERIE", "Pensée qui vagabonde"],
      ["AMITIE", "Lien entre amis"],
      ["PATIENCE", "Elle s’exerce en attendant"],
    ],
  },
  {
    "n": "Sports",
    "w": [
      ["TENNIS", "Sport de raquette"],
      ["NATATION", "Sport de piscine"],
      ["VELO", "Deux roues à pédales"],
      ["YOGA", "Gymnastique douce"],
      ["DANSE", "Art du mouvement"],
      ["ESCALADE", "On grimpe des parois"],
      ["RANDONNEE", "Longue marche"],
      ["AVIRON", "Sport de rame"],
      ["JUDO", "Art martial japonais"],
      ["SURF", "Sport de glisse sur les vagues"],
      ["GOLF", "Sport du trou en un"],
      ["ESCRIME", "Sport d’épée"],
    ],
  },
  {
    "n": "Océanie",
    "w": [
      ["KANGOUROU", "Il a une poche"],
      ["CORAIL", "Récif de la Grande Barrière"],
      ["LAGON", "Étendue d’eau calme"],
      ["ATOLL", "Île en anneau"],
      ["PIROGUE", "Embarcation polynésienne"],
      ["TORTUE", "Elle pond sur la plage"],
      ["COCOTIER", "Arbre à noix"],
      ["VOLCAN", "Montagne qui crache du feu"],
      ["OCEAN", "Vaste étendue d’eau salée"],
      ["ILE", "Terre entourée d’eau"],
      ["RECIF", "Rochers sous l’eau"],
      ["TIARE", "Fleur de Tahiti"],
    ],
  },
  {
    "n": "Ferme",
    "w": [
      ["VACHE", "Elle donne du lait"],
      ["MOUTON", "Il donne de la laine"],
      ["POULE", "Elle pond des œufs"],
      ["COCHON", "Il aime la boue"],
      ["CHEVAL", "Il hennit"],
      ["CHEVRE", "Elle donne du fromage"],
      ["TRACTEUR", "Engin agricole"],
      ["GRANGE", "On y range le foin"],
      ["FOIN", "Herbe séchée"],
      ["CANARD", "Il cancane"],
      ["ETABLE", "Maison des vaches"],
      ["FERMIER", "Il s’occupe de la ferme"],
    ],
  },
  {
    "n": "Pâtisserie",
    "w": [
      ["GATEAU", "Dessert d’anniversaire"],
      ["MERINGUE", "Blancs d’œufs cuits sucrés"],
      ["CARAMEL", "Sucre fondu doré"],
      ["CREME", "Garniture onctueuse"],
      ["VANILLE", "Gousse parfumée"],
      ["CANNELLE", "Écorce épicée"],
      ["BEIGNET", "Pâte frite sucrée"],
      ["GAUFRE", "Pâtisserie quadrillée"],
      ["CHANTILLY", "Crème fouettée"],
      ["MILLEFEUILLE", "Gâteau feuilleté à la crème"],
      ["TIRAMISU", "Dessert italien au café"],
      ["SABLE", "Biscuit au beurre"],
    ],
  },
  {
    "n": "Océans et rivières",
    "w": [
      ["RIVIERE", "Cours d’eau"],
      ["ETANG", "Petit lac"],
      ["SOURCE", "Là où naît la rivière"],
      ["FLEUVE", "Il se jette dans la mer"],
      ["DELTA", "Embouchure en éventail"],
      ["BERGE", "Bord de rivière"],
      ["PONT", "Il enjambe la rivière"],
      ["MOULIN", "Il tourne au fil de l’eau"],
      ["NENUPHAR", "Fleur flottante"],
      ["GRENOUILLE", "Elle coasse"],
      ["LIBELLULE", "Elle survole l’eau"],
      ["TRUITE", "Poisson des rivières"],
    ],
  },
  {
    "n": "Camping",
    "w": [
      ["TENTE", "Abri de toile"],
      ["FEU", "On s’y réchauffe le soir"],
      ["LAMPE", "Frontale ou de poche"],
      ["SAC", "À dos, on le porte"],
      ["DUVET", "Sac de couchage"],
      ["GOURDE", "Bouteille de randonnée"],
      ["GUIMAUVE", "On la fait griller"],
      ["CARTE", "Elle guide les randonneurs"],
      ["BOIS", "On le ramasse pour le feu"],
      ["HAMAC", "Lit suspendu"],
      ["CANIF", "Petit couteau pliant"],
      ["LANTERNE", "Lumière de camp"],
    ],
  },
  {
    "n": "Épices",
    "w": [
      ["CANNELLE", "Écorce roulée parfumée"],
      ["MUSCADE", "Noix râpée sur la purée"],
      ["CURRY", "Mélange d’épices indien"],
      ["SAFRAN", "Épice dorée et précieuse"],
      ["GINGEMBRE", "Racine piquante"],
      ["CUMIN", "Graine du couscous"],
      ["PAPRIKA", "Poudre de piment rouge doux"],
      ["GIROFLE", "Clou parfumé"],
      ["ANIS", "Graine au goût de réglisse"],
      ["CARDAMOME", "Petite gousse verte du chai"],
      ["CURCUMA", "Racine jaune orangé"],
      ["PIMENT", "Il fait chauffer la bouche"],
    ],
  },
  {
    "n": "Fromages",
    "w": [
      ["COMTE", "Fromage du Jura"],
      ["BRIE", "Fromage de Meaux"],
      ["CAMEMBERT", "Fromage normand en boîte ronde"],
      ["ROQUEFORT", "Fromage à pâte persillée"],
      ["REBLOCHON", "Fromage de la tartiflette"],
      ["GRUYERE", "Fromage suisse à pâte dure"],
      ["MOZZARELLA", "Fromage de la pizza"],
      ["CHEVRE", "Fromage de lait de chèvre"],
      ["FETA", "Fromage grec en saumure"],
      ["PARMESAN", "Fromage italien râpé"],
      ["RACLETTE", "Fromage fondu des soirées d’hiver"],
      ["EMMENTAL", "Fromage aux trous"],
    ],
  },
  {
    "n": "Petit-déjeuner",
    "w": [
      ["TARTINE", "Pain beurré"],
      ["CONFITURE", "Fruits cuits au sucre"],
      ["MIEL", "Douceur des abeilles"],
      ["CEREALES", "Elles nagent dans le lait"],
      ["OMELETTE", "Œufs battus et cuits"],
      ["BEURRE", "On l’étale sur le pain"],
      ["YAOURT", "Lait fermenté"],
      ["PAMPLEMOUSSE", "Gros agrume"],
      ["BOL", "Tasse sans anse"],
      ["CROISSANT", "Viennoiserie feuilletée"],
      ["COMPOTE", "Fruits cuits écrasés"],
      ["PANCAKE", "Petite crêpe épaisse"],
    ],
  },
  {
    "n": "Pique-nique",
    "w": [
      ["NAPPE", "On l’étend sur l’herbe"],
      ["PANIER", "Il transporte le repas"],
      ["SANDWICH", "Pain garni"],
      ["THERMOS", "Bouteille qui garde chaud"],
      ["PRAIRIE", "Grande étendue d’herbe"],
      ["OMBRE", "Fraîcheur sous l’arbre"],
      ["SALADE", "Mélange de crudités"],
      ["GLACIERE", "Boîte qui garde au frais"],
      ["FRISBEE", "Disque qu’on se lance"],
      ["CERISES", "Fruits rouges de juin"],
      ["COUVERTURE", "On s’assoit dessus"],
      ["SERVIETTE", "Pour s’essuyer les mains"],
    ],
  },
  {
    "n": "Plage",
    "w": [
      ["SABLE", "Grains dorés"],
      ["PARASOL", "Il protège du soleil"],
      ["COQUILLAGE", "Trésor de la plage"],
      ["SERVIETTE", "On s’allonge dessus"],
      ["SEAU", "Récipient du château de sable"],
      ["PELLE", "Outil pour creuser"],
      ["MAILLOT", "Tenue de bain"],
      ["CREME", "Solaire, elle protège la peau"],
      ["DUNE", "Colline de sable"],
      ["LUNETTES", "De soleil, elles protègent les yeux"],
      ["TRANSAT", "Chaise longue"],
      ["GALET", "Pierre polie par la mer"],
    ],
  },
  {
    "n": "École",
    "w": [
      ["CARTABLE", "Sac d’écolier"],
      ["CRAIE", "On écrit au tableau avec"],
      ["CAHIER", "On y écrit ses leçons"],
      ["CRAYON", "Il se taille"],
      ["GOMME", "Elle efface"],
      ["REGLE", "Elle trace droit"],
      ["TROUSSE", "Elle range les stylos"],
      ["RECREATION", "Pause dans la cour"],
      ["DICTEE", "Exercice d’orthographe"],
      ["MAITRESSE", "Elle fait la classe"],
      ["PUPITRE", "Table d’écolier"],
      ["COMPAS", "Il trace des cercles"],
    ],
  },
  {
    "n": "Papeterie",
    "w": [
      ["ENVELOPPE", "Elle contient la lettre"],
      ["TIMBRE", "On le colle sur la lettre"],
      ["AGRAFE", "Petit trombone de métal plié"],
      ["TROMBONE", "Il retient les feuilles"],
      ["CISEAUX", "Ils coupent le papier"],
      ["COLLE", "Elle fait tenir"],
      ["FEUTRE", "Crayon à pointe de fibre"],
      ["SURLIGNEUR", "Il met en couleur"],
      ["CLASSEUR", "Il range les feuilles"],
      ["CARNET", "Petit cahier"],
      ["ETIQUETTE", "On l’écrit et on la colle"],
      ["ENCRE", "Liquide du stylo"],
    ],
  },
  {
    "n": "Couture",
    "w": [
      ["AIGUILLE", "Elle a un chas"],
      ["FIL", "On l’enfile"],
      ["BOBINE", "Elle enroule le fil"],
      ["BOUTON", "Il ferme la chemise"],
      ["ECHEVEAU", "Petit faisceau de fil enroulé"],
      ["OURLET", "Bord replié et cousu"],
      ["PATRON", "Modèle en papier"],
      ["TISSU", "Étoffe"],
      ["RUBAN", "Bande de tissu décorative"],
      ["DENTELLE", "Tissu ajouré"],
      ["FERMETURE", "Éclair, elle zippe"],
    ],
  },
  {
    "n": "Tricot",
    "w": [
      ["LAINE", "Fil de mouton"],
      ["PELOTE", "Boule de laine"],
      ["MAILLE", "Boucle du tricot"],
      ["TORSADE", "Motif tressé"],
      ["JACQUARD", "Motif de couleurs tricoté"],
      ["CHAUSSON", "Petite chaussure tricotée"],
      ["SNOOD", "Écharpe en boucle"],
      ["ALPAGA", "Laine douce des Andes"],
      ["MOHAIR", "Laine de chèvre angora"],
      ["CROCHET", "Aiguille à bout recourbé"],
      ["MITAINE", "Gant aux doigts coupés"],
      ["POMPON", "Boule de laine au sommet du bonnet"],
    ],
  },
  {
    "n": "Outils",
    "w": [
      ["MARTEAU", "Il plante les clous"],
      ["TOURNEVIS", "Il visse"],
      ["SCIE", "Elle coupe le bois"],
      ["PINCE", "Elle serre"],
      ["PERCEUSE", "Elle fait des trous"],
      ["NIVEAU", "Il vérifie l’horizontale"],
      ["CLOU", "On l’enfonce"],
      ["VIS", "Elle se tourne"],
      ["ECROU", "Il va avec le boulon"],
      ["RABOT", "Il aplanit le bois"],
      ["METRE", "Il mesure"],
      ["ETABLI", "Table de travail"],
    ],
  },
  {
    "n": "Italie",
    "w": [
      ["PIZZA", "Galette garnie napolitaine"],
      ["PASTA", "Pâtes en italien"],
      ["GONDOLE", "Barque de Venise"],
      ["COLISEE", "Amphithéâtre de Rome"],
      ["LASAGNE", "Pâtes en couches"],
      ["GELATO", "Glace italienne"],
      ["RISOTTO", "Riz crémeux"],
      ["PESTO", "Sauce au basilic"],
      ["VESPA", "Scooter italien"],
      ["TOSCANE", "Région de Florence"],
      ["OPERA", "Spectacle chanté"],
      ["ESPRESSO", "Café serré"],
    ],
  },
  {
    "n": "Japon",
    "w": [
      ["SUSHI", "Bouchée de riz et de poisson"],
      ["KIMONO", "Vêtement traditionnel"],
      ["ORIGAMI", "Art du papier plié"],
      ["SAKURA", "Fleur de cerisier"],
      ["SAMOURAI", "Guerrier japonais"],
      ["HAIKU", "Poème de trois vers"],
      ["TEMPLE", "Lieu de prière"],
      ["BONSAI", "Arbre miniature"],
      ["MANGA", "Bande dessinée japonaise"],
      ["RAMEN", "Soupe de nouilles"],
      ["TOKYO", "Capitale du Japon"],
      ["FUJI", "Mont sacré"],
    ],
  },
  {
    "n": "Pays",
    "w": [
      ["FRANCE", "Pays de l’Hexagone"],
      ["ITALIE", "Pays en forme de botte"],
      ["ESPAGNE", "Pays du flamenco"],
      ["CANADA", "Pays de l’érable"],
      ["BRESIL", "Pays de la samba"],
      ["JAPON", "Pays du Soleil levant"],
      ["EGYPTE", "Pays des pyramides"],
      ["INDE", "Pays du Taj Mahal"],
      ["CHINE", "Pays de la Grande Muraille"],
      ["MAROC", "Pays de Marrakech"],
      ["GRECE", "Pays de l’Acropole"],
      ["PEROU", "Pays du Machu Picchu"],
    ],
  },
  {
    "n": "Villes",
    "w": [
      ["PARIS", "Ville lumière"],
      ["LYON", "Ville des Lumières en décembre"],
      ["MARSEILLE", "Cité phocéenne"],
      ["BORDEAUX", "Ville du port de la Lune"],
      ["LILLE", "Capitale des Flandres françaises"],
      ["NANTES", "Ville des machines de l’île"],
      ["STRASBOURG", "Ville du Parlement européen"],
      ["NICE", "Ville de la promenade des Anglais"],
      ["QUEBEC", "Ville au Château Frontenac"],
      ["MONTREAL", "Grande ville du Québec"],
      ["GENEVE", "Ville au jet d’eau"],
      ["BRUXELLES", "Ville de l’Atomium"],
    ],
  },
  {
    "n": "Îles",
    "w": [
      ["CORSE", "Île de Beauté"],
      ["SICILE", "Île italienne de l’Etna"],
      ["CRETE", "Île grecque du Minotaure"],
      ["ISLANDE", "Île des geysers"],
      ["TAHITI", "Île de Polynésie"],
      ["MADAGASCAR", "Grande île des lémuriens"],
      ["REUNION", "Île du piton de la Fournaise"],
      ["MARTINIQUE", "Île aux fleurs"],
      ["IRLANDE", "Île verte"],
      ["MALTE", "Petite île méditerranéenne"],
      ["BALI", "Île indonésienne"],
      ["CUBA", "Île des Caraïbes"],
    ],
  },
  {
    "n": "Désert",
    "w": [
      ["DUNE", "Colline de sable"],
      ["OASIS", "Point d’eau dans le désert"],
      ["CHAMEAU", "Il a deux bosses"],
      ["DROMADAIRE", "Il a une bosse"],
      ["MIRAGE", "Illusion du désert"],
      ["CACTUS", "Plante piquante"],
      ["SCORPION", "Il a une queue venimeuse"],
      ["CARAVANE", "File de voyageurs"],
      ["SAHARA", "Grand désert africain"],
      ["SIROCCO", "Vent chaud du sud"],
      ["BEDOUIN", "Nomade du désert"],
      ["PALMERAIE", "Plantation de palmiers"],
    ],
  },
  {
    "n": "Jungle",
    "w": [
      ["LIANE", "Plante grimpante"],
      ["TOUCAN", "Oiseau au gros bec"],
      ["JAGUAR", "Félin tacheté d’Amérique"],
      ["GORILLE", "Grand singe"],
      ["PERROQUET", "Oiseau bavard"],
      ["ORCHIDEE", "Fleur tropicale"],
      ["CAMELEON", "Il change de couleur"],
      ["PARESSEUX", "Animal très lent"],
      ["AMAZONE", "Grand fleuve de la jungle"],
      ["GRENOUILLE", "Elle coasse"],
      ["MANGROVE", "Forêt les pieds dans l’eau"],
      ["SINGE", "Il grimpe aux arbres"],
    ],
  },
  {
    "n": "Savane",
    "w": [
      ["LION", "Roi des animaux"],
      ["ELEPHANT", "Il a une trompe"],
      ["GIRAFE", "Animal au long cou"],
      ["ZEBRE", "Cheval rayé"],
      ["GUEPARD", "Le plus rapide"],
      ["HIPPOPOTAME", "Il vit dans l’eau des rivières africaines"],
      ["RHINOCEROS", "Il a une corne sur le nez"],
      ["BAOBAB", "Arbre géant d’Afrique"],
      ["ANTILOPE", "Herbivore gracieux"],
      ["SAFARI", "Excursion pour voir les animaux"],
      ["AUTRUCHE", "Grand oiseau coureur"],
      ["HYENE", "Elle semble rire"],
    ],
  },
  {
    "n": "Pôle",
    "w": [
      ["BANQUISE", "Glace de mer"],
      ["PINGOUIN", "Oiseau du nord"],
      ["MANCHOT", "Il ne vole pas, au sud"],
      ["PHOQUE", "Mammifère des glaces"],
      ["MORSE", "Il a des défenses"],
      ["ICEBERG", "Montagne de glace flottante"],
      ["AURORE", "Boréale, elle danse dans le ciel"],
      ["TRAINEAU", "Tiré par des chiens"],
      ["NARVAL", "Licorne des mers"],
      ["ANTARCTIQUE", "Continent du pôle Sud"],
      ["RENNE", "Cerf du Grand Nord"],
      ["HUSKY", "Chien de traîneau"],
    ],
  },
  {
    "n": "Dinosaures",
    "w": [
      ["FOSSILE", "Trace pétrifiée"],
      ["TYRANNOSAURE", "Grand carnivore préhistorique"],
      ["DIPLODOCUS", "Herbivore au très long cou"],
      ["TRICERATOPS", "Dinosaure à trois cornes"],
      ["PTERODACTYLE", "Reptile volant"],
      ["STEGOSAURE", "Dinosaure aux plaques dorsales"],
      ["VELOCIRAPTOR", "Petit chasseur rapide"],
      ["OEUF", "Les dinosaures en pondaient"],
      ["SQUELETTE", "Ossature exposée au musée"],
      ["CRETACE", "Dernière période des dinosaures"],
      ["JURASSIQUE", "Période et nom de film"],
      ["PALEONTOLOGUE", "Spécialiste des fossiles"],
    ],
  },
  {
    "n": "Reptiles",
    "w": [
      ["SERPENT", "Il rampe"],
      ["LEZARD", "Il se dore au soleil"],
      ["CROCODILE", "Il a de grandes mâchoires"],
      ["IGUANE", "Grand lézard vert"],
      ["TORTUE", "Elle porte sa carapace"],
      ["VIPERE", "Serpent venimeux de France"],
      ["GECKO", "Il marche au plafond"],
      ["COBRA", "Serpent à capuchon"],
      ["ALLIGATOR", "Crocodilien d’Amérique"],
      ["ECAILLE", "Plaque de peau du reptile"],
      ["MUE", "Changement de peau"],
      ["PYTHON", "Grand serpent constricteur"],
    ],
  },
  {
    "n": "Poissons",
    "w": [
      ["SAUMON", "Il remonte les rivières"],
      ["THON", "Grand poisson des mers"],
      ["SARDINE", "Petit poisson en boîte"],
      ["REQUIN", "Prédateur des mers"],
      ["RAIE", "Poisson plat aux ailes"],
      ["CARPE", "Poisson des étangs"],
      ["BROCHET", "Poisson carnassier d’eau douce"],
      ["DORADE", "Poisson à tête dorée"],
      ["MERLAN", "Poisson blanc"],
      ["ANGUILLE", "Poisson serpentin"],
      ["HIPPOCAMPE", "Cheval de mer"],
      ["POISSONCLOWN", "Ami de l’anémone"],
    ],
  },
  {
    "n": "Chiens",
    "w": [
      ["CANICHE", "Chien frisé"],
      ["LABRADOR", "Chien guide"],
      ["BERGER", "Chien de troupeau"],
      ["CARLIN", "Petit chien au museau écrasé"],
      ["TECKEL", "Chien saucisse"],
      ["DALMATIEN", "Chien à taches noires"],
      ["CHIHUAHUA", "Le plus petit chien"],
      ["BEAGLE", "Chien de meute"],
      ["LEVRIER", "Chien coureur élancé"],
      ["NICHE", "Maison du chien"],
      ["LAISSE", "Elle tient le chien en promenade"],
    ],
  },
  {
    "n": "Chevaux",
    "w": [
      ["POULAIN", "Petit du cheval"],
      ["CRINIERE", "Poils du cou"],
      ["SABOT", "Pied du cheval"],
      ["SELLE", "Siège du cavalier"],
      ["ETRIER", "Appui du pied"],
      ["GALOP", "Allure la plus rapide"],
      ["TROT", "Allure intermédiaire"],
      ["PONEY", "Petit cheval"],
      ["ECURIE", "Maison des chevaux"],
      ["CAVALIER", "Il monte à cheval"],
      ["FER", "Il protège le sabot"],
      ["BRIDE", "Elle guide le cheval"],
    ],
  },
  {
    "n": "Abeilles",
    "w": [
      ["RUCHE", "Maison des abeilles"],
      ["REINE", "Elle pond les œufs"],
      ["NECTAR", "Jus des fleurs"],
      ["POLLEN", "Poussière des fleurs"],
      ["CIRE", "Matière des alvéoles"],
      ["ALVEOLE", "Cellule hexagonale"],
      ["APICULTEUR", "Il élève les abeilles"],
      ["ESSAIM", "Groupe d’abeilles"],
      ["BOURDON", "Grosse abeille velue"],
      ["BUTINER", "Visiter les fleurs"],
      ["DARD", "Aiguillon"],
      ["RAYON", "Plaque d’alvéoles"],
    ],
  },
  {
    "n": "Automne",
    "w": [
      ["FEUILLE", "Elle tombe en automne"],
      ["CHATAIGNE", "Fruit à bogue"],
      ["CITROUILLE", "Grosse courge orange"],
      ["CHAMPIGNON", "Il pousse en sous-bois"],
      ["VENDANGE", "Récolte du raisin"],
      ["NOISETTE", "Fruit de l’écureuil"],
      ["NOVEMBRE", "Onzième mois"],
      ["PARAPLUIE", "Il protège de la pluie"],
      ["BRUINE", "Pluie très fine"],
      ["RENTREE", "Retour à l’école"],
      ["MARRON", "Fruit brillant du marronnier"],
      ["POTIRON", "Courge ronde"],
    ],
  },
  {
    "n": "Printemps",
    "w": [
      ["BOURGEON", "Promesse de feuille"],
      ["PAQUERETTE", "Petite fleur blanche des pelouses"],
      ["HIRONDELLE", "Messagère du printemps"],
      ["AVRIL", "Ne te découvre pas d’un fil"],
      ["NID", "Maison de l’oisillon"],
      ["GIBOULEE", "Averse de mars"],
      ["FLORAISON", "Éclosion des fleurs"],
      ["JACINTHE", "Fleur à clochettes parfumées"],
      ["POUSSE", "Jeune plante"],
      ["EQUINOXE", "Jour égal à la nuit"],
      ["CERISIER", "Arbre en fleurs roses"],
      ["PRIMEVERE", "Première fleur"],
    ],
  },
  {
    "n": "Été",
    "w": [
      ["VACANCES", "Repos estival"],
      ["CIGALE", "Chant de l’été"],
      ["GLACE", "Dessert froid"],
      ["PISCINE", "Bassin de baignade"],
      ["SANDALES", "Chaussures ouvertes"],
      ["CHAPEAU", "Il protège du soleil"],
      ["SIESTE", "Petit somme après le repas"],
      ["PASTEQUE", "Gros fruit rouge à pépins"],
      ["JUILLET", "Septième mois"],
      ["BRONZAGE", "Teint hâlé"],
      ["FEUDARTIFICE", "Spectacle du 14 juillet"],
      ["MOISSON", "Récolte des céréales"],
    ],
  },
  {
    "n": "Halloween",
    "w": [
      ["FANTOME", "Drap qui fait boo"],
      ["SORCIERE", "Elle a un chaudron"],
      ["CHAUDRON", "Marmite magique"],
      ["SQUELETTE", "Os assemblés"],
      ["CHAUVESOURIS", "Mammifère volant de nuit"],
      ["BONBON", "Friandise réclamée aux portes"],
      ["LANTERNE", "Citrouille éclairée"],
      ["MOMIE", "Bandelettes égyptiennes"],
      ["VAMPIRE", "Il craint l’ail"],
      ["ARAIGNEE", "Elle tisse sa toile"],
      ["DEGUISEMENT", "Costume"],
      ["BALAI", "Monture de sorcière"],
    ],
  },
  {
    "n": "Anniversaire",
    "w": [
      ["GATEAU", "On y plante des bougies"],
      ["CADEAU", "Paquet surprise"],
      ["BOUGIE", "On la souffle"],
      ["BALLON", "Il se gonfle"],
      ["GUIRLANDE", "Décoration suspendue"],
      ["INVITATION", "Carte pour la fête"],
      ["CONFETTIS", "Petits papiers lancés"],
      ["CHANSON", "Joyeux anniversaire en est une"],
      ["SURPRISE", "Fête inattendue"],
      ["VOEU", "On le fait en soufflant"],
      ["EMBALLAGE", "Papier cadeau"],
      ["FESTIN", "Grand repas"],
    ],
  },
  {
    "n": "Cirque",
    "w": [
      ["CLOWN", "Il a un nez rouge"],
      ["JONGLEUR", "Il lance des balles"],
      ["ACROBATE", "Il fait des pirouettes"],
      ["TRAPEZE", "Barre suspendue"],
      ["CHAPITEAU", "Grande tente"],
      ["FUNAMBULE", "Il marche sur un fil"],
      ["MAGICIEN", "Il sort un lapin du chapeau"],
      ["DOMPTEUR", "Il dresse les fauves"],
      ["PISTE", "Cercle du spectacle"],
      ["MONOCYCLE", "Vélo à une roue"],
      ["CRACHEUR", "De feu, il souffle des flammes"],
      ["MONSIEURLOYAL", "Présentateur du cirque"],
    ],
  },
  {
    "n": "Fête foraine",
    "w": [
      ["MANEGE", "Il tourne avec des chevaux de bois"],
      ["BARBEAPAPA", "Sucre filé rose"],
      ["GRANDEROUE", "Attraction circulaire géante"],
      ["CHURROS", "Beignets en bâtons"],
      ["PELUCHE", "Lot à gagner"],
      ["TOMBOLA", "Jeu de tirage"],
      ["CHENILLE", "Manège ondulant"],
      ["STAND", "Baraque de jeu"],
      ["TIR", "On vise les cibles"],
      ["POMMEDAMOUR", "Fruit enrobé de sucre rouge"],
      ["LOTERIE", "Jeu de hasard"],
    ],
  },
  {
    "n": "Théâtre",
    "w": [
      ["SCENE", "Plateau des acteurs"],
      ["RIDEAU", "Il se lève au début"],
      ["COULISSES", "Derrière la scène"],
      ["COSTUME", "Habit de scène"],
      ["APPLAUDIR", "Taper des mains"],
      ["REPLIQUE", "Phrase d’un acteur"],
      ["MOLIERE", "Auteur du Malade imaginaire"],
      ["COMEDIE", "Pièce drôle"],
      ["TRAGEDIE", "Pièce triste"],
      ["SOUFFLEUR", "Il aide l’acteur trou de mémoire"],
      ["ENTRACTE", "Pause du spectacle"],
      ["PROJECTEUR", "Il éclaire la scène"],
    ],
  },
  {
    "n": "Cinéma",
    "w": [
      ["FILM", "Œuvre projetée"],
      ["ECRAN", "Grande toile blanche"],
      ["POPCORN", "Maïs éclaté"],
      ["ACTRICE", "Elle joue un rôle"],
      ["REALISATEUR", "Il dirige le tournage"],
      ["SCENARIO", "Histoire écrite du film"],
      ["CAMERA", "Elle filme"],
      ["GENERIQUE", "Liste des noms à la fin"],
      ["OSCAR", "Statuette d’Hollywood"],
      ["DOUBLAGE", "Voix traduite"],
      ["TOURNAGE", "Fabrication du film"],
      ["BANDEANNONCE", "Extrait promotionnel"],
    ],
  },
  {
    "n": "Photographie",
    "w": [
      ["OBJECTIF", "Lentille de l’appareil"],
      ["FLASH", "Éclair lumineux"],
      ["CADRAGE", "Composition de l’image"],
      ["PELLICULE", "Film argentique"],
      ["ZOOM", "Il rapproche l’image"],
      ["TREPIED", "Support à trois pieds"],
      ["PORTRAIT", "Photo d’une personne"],
      ["PAYSAGE", "Photo de la nature"],
      ["ALBUM", "Il range les photos"],
      ["SELFIE", "Autoportrait au téléphone"],
      ["NETTETE", "Image bien précise"],
      ["EXPOSITION", "Quantité de lumière reçue"],
    ],
  },
  {
    "n": "Danse",
    "w": [
      ["VALSE", "Danse à trois temps"],
      ["TANGO", "Danse argentine"],
      ["BALLET", "Spectacle de danseurs classiques"],
      ["TUTU", "Jupe de danseuse"],
      ["SALSA", "Danse latine"],
      ["POINTES", "Chaussons de ballerine"],
      ["CLAQUETTES", "Danse rythmée aux chaussures ferrées"],
      ["FLAMENCO", "Danse espagnole"],
      ["RONDE", "Danse en cercle"],
      ["CHOREGRAPHIE", "Suite de pas"],
      ["HIPHOP", "Danse urbaine"],
      ["PIROUETTE", "Tour sur soi-même"],
    ],
  },
  {
    "n": "Orchestre",
    "w": [
      ["CHEF", "Il dirige avec une baguette"],
      ["PARTITION", "Musique écrite"],
      ["SYMPHONIE", "Grande œuvre orchestrale"],
      ["CONTREBASSE", "Le plus grand des violons"],
      ["CLARINETTE", "Instrument à anche"],
      ["HAUTBOIS", "Instrument à double anche"],
      ["TIMBALE", "Gros tambour"],
      ["PUPITRE", "Support des partitions"],
      ["ALTO", "Entre violon et violoncelle"],
      ["BASSON", "Instrument grave à vent"],
      ["CYMBALES", "Disques de métal frappés"],
      ["TRIANGLE", "Petit instrument tinté"],
    ],
  },
  {
    "n": "Système solaire",
    "w": [
      ["MERCURE", "Planète la plus proche du Soleil"],
      ["VENUS", "Étoile du berger"],
      ["TERRE", "Notre planète"],
      ["MARS", "Planète rouge"],
      ["JUPITER", "Plus grosse planète"],
      ["URANUS", "Planète couchée sur le côté"],
      ["NEPTUNE", "Planète la plus lointaine"],
      ["ORBITE", "Trajectoire autour d’un astre"],
      ["ASTEROIDE", "Petit corps rocheux"],
      ["ECLIPSE", "Le Soleil caché par la Lune"],
      ["SATELLITE", "Il tourne autour d’une planète"],
      ["METEORE", "Étoile filante"],
    ],
  },
  {
    "n": "Formes",
    "w": [
      ["CERCLE", "Rond parfait"],
      ["CARRE", "Quatre côtés égaux"],
      ["TRIANGLE", "Trois côtés"],
      ["LOSANGE", "Carré penché"],
      ["OVALE", "Forme d’œuf"],
      ["ETOILE", "Forme à branches"],
      ["SPIRALE", "Courbe qui s’enroule"],
      ["CUBE", "Six faces carrées"],
      ["SPHERE", "Boule"],
      ["PYRAMIDE", "Monument égyptien"],
      ["CYLINDRE", "Forme de boîte de conserve"],
      ["HEXAGONE", "Six côtés"],
    ],
  },
  {
    "n": "Mathématiques",
    "w": [
      ["ADDITION", "Opération du plus"],
      ["SOUSTRACTION", "Opération du moins"],
      ["FRACTION", "Un demi en est une"],
      ["CALCUL", "Opération mentale"],
      ["EQUATION", "Égalité à résoudre"],
      ["CHIFFRE", "De zéro à neuf"],
      ["NOMBRE", "Il compte"],
      ["ANGLE", "Il se mesure en degrés"],
      ["DIAMETRE", "Il traverse le cercle"],
      ["SOMME", "Résultat de l’addition"],
      ["PRODUIT", "Résultat de la multiplication"],
      ["POURCENTAGE", "Part sur cent"],
    ],
  },
  {
    "n": "Informatique",
    "w": [
      ["CLAVIER", "Il a des touches"],
      ["SOURIS", "Elle déplace le curseur"],
      ["ECRAN", "Il affiche"],
      ["LOGICIEL", "Programme"],
      ["ORDINATEUR", "Machine à calculer moderne"],
      ["INTERNET", "Réseau mondial"],
      ["COURRIEL", "Message électronique"],
      ["FICHIER", "Document enregistré"],
      ["DOSSIER", "Il range les fichiers"],
      ["PIXEL", "Point d’image"],
      ["CLIC", "Appui sur la souris"],
      ["TABLETTE", "Écran tactile"],
    ],
  },
  {
    "n": "Moyen Âge",
    "w": [
      ["CHEVALIER", "Il porte une armure"],
      ["DONJON", "Tour principale du château"],
      ["REMPART", "Muraille de défense"],
      ["ARMURE", "Protection de métal"],
      ["BLASON", "Emblème de famille"],
      ["TROUBADOUR", "Poète musicien"],
      ["PONTLEVIS", "Pont qui se relève"],
      ["CATAPULTE", "Elle lance des pierres"],
      ["ECUYER", "Assistant du chevalier"],
      ["TOURNOI", "Joute de chevaliers"],
      ["MONASTERE", "Couvent de moines"],
      ["MENESTREL", "Musicien de cour"],
    ],
  },
  {
    "n": "Pirates",
    "w": [
      ["CORSAIRE", "Pirate autorisé par le roi"],
      ["TRESOR", "Coffre caché"],
      ["PERROQUET", "Il se perche sur l’épaule"],
      ["CARTE", "Elle mène au trésor"],
      ["ABORDAGE", "Attaque d’un navire"],
      ["CANON", "Il tire des boulets"],
      ["CAPITAINE", "Chef du navire"],
      ["DRAPEAU", "Noir à tête de mort"],
      ["LONGUEVUE", "Petite lunette"],
      ["JAMBEDEBOIS", "Prothèse du vieux pirate"],
      ["ILE", "Où l’on cache le trésor"],
      ["COFFRE", "Boîte à doublons"],
    ],
  },
  {
    "n": "Égypte ancienne",
    "w": [
      ["PYRAMIDE", "Tombeau géant"],
      ["PHARAON", "Roi d’Égypte"],
      ["SPHINX", "Lion à tête humaine"],
      ["HIEROGLYPHE", "Écriture sacrée"],
      ["PAPYRUS", "Papier du Nil"],
      ["NIL", "Fleuve d’Égypte"],
      ["SARCOPHAGE", "Cercueil de pierre"],
      ["SCARABEE", "Insecte sacré"],
      ["OBELISQUE", "Monument en aiguille"],
      ["TOUTANKHAMON", "Jeune pharaon célèbre"],
      ["CLEOPATRE", "Reine d’Égypte"],
      ["ANKH", "Croix de vie"],
    ],
  },
  {
    "n": "Préhistoire",
    "w": [
      ["MAMMOUTH", "Éléphant laineux"],
      ["SILEX", "Pierre taillée"],
      ["GROTTE", "Abri des premiers hommes"],
      ["LASCAUX", "Grotte ornée de Dordogne"],
      ["CHASSEUR", "Il traquait le gibier"],
      ["FEU", "Grande découverte"],
      ["OUTIL", "Pierre taillée utile"],
      ["BISON", "Animal peint sur les parois"],
      ["MENHIR", "Pierre dressée"],
      ["DOLMEN", "Table de pierre"],
      ["TOTEM", "Emblème sculpté"],
      ["CUEILLETTE", "Récolte des baies"],
    ],
  },
  {
    "n": "Minéraux",
    "w": [
      ["CRISTAL", "Minéral transparent"],
      ["QUARTZ", "Minéral des montres"],
      ["GRANIT", "Roche dure de Bretagne"],
      ["MARBRE", "Roche des statues"],
      ["DIAMANT", "Pierre la plus dure"],
      ["RUBIS", "Pierre rouge"],
      ["EMERAUDE", "Pierre verte"],
      ["SAPHIR", "Pierre bleue"],
      ["AMETHYSTE", "Pierre violette"],
      ["AMBRE", "Résine fossilisée"],
      ["PERLE", "Née dans une huître"],
      ["JADE", "Pierre verte d’Asie"],
    ],
  },
  {
    "n": "Métaux",
    "w": [
      ["ARGENT", "Métal brillant blanc"],
      ["CUIVRE", "Métal orangé conducteur"],
      ["FER", "Métal qui rouille"],
      ["ZINC", "Métal des toits de Paris"],
      ["ETAIN", "Métal des vieux soldats de plomb"],
      ["ACIER", "Fer allié au carbone"],
      ["BRONZE", "Alliage de la troisième place"],
      ["PLATINE", "Métal précieux gris"],
      ["ALUMINIUM", "Métal léger"],
      ["PLOMB", "Métal lourd"],
      ["LAITON", "Alliage de cuivre et zinc"],
    ],
  },
  {
    "n": "Bijoux",
    "w": [
      ["BAGUE", "Elle se porte au doigt"],
      ["COLLIER", "Il entoure le cou"],
      ["BRACELET", "Il entoure le poignet"],
      ["BROCHE", "Bijou à épingle"],
      ["DIADEME", "Couronne légère"],
      ["BOUCLE", "D’oreille"],
      ["MEDAILLON", "Pendentif qui s’ouvre"],
      ["GOURMETTE", "Bracelet à plaque"],
      ["CHEVALIERE", "Bague à blason"],
      ["PENDENTIF", "Il pend au collier"],
      ["ECRIN", "Boîte à bijoux"],
      ["ALLIANCE", "Bague de mariage"],
    ],
  },
  {
    "n": "Parfums",
    "w": [
      ["LAVANDE", "Parfum de Provence"],
      ["ROSE", "Fleur reine des parfums"],
      ["VANILLE", "Parfum gourmand"],
      ["MUSC", "Note animale"],
      ["SANTAL", "Bois parfumé"],
      ["AGRUME", "Note fraîche citronnée"],
      ["FLACON", "Il contient le parfum"],
      ["VAPORISATEUR", "Il diffuse en gouttelettes"],
      ["GRASSE", "Capitale du parfum"],
      ["NEZ", "Créateur de parfums"],
      ["ENCENS", "Il brûle en fumée parfumée"],
      ["PATCHOULI", "Note boisée orientale"],
    ],
  },
  {
    "n": "Salle de bain",
    "w": [
      ["SAVON", "Il mousse"],
      ["BAIGNOIRE", "On s’y prélasse"],
      ["DOUCHE", "Pluie d’intérieur"],
      ["SERVIETTE", "Pour se sécher"],
      ["SHAMPOOING", "Pour laver les cheveux"],
      ["MIROIR", "Il reflète"],
      ["BROSSE", "À dents, elle nettoie"],
      ["PEIGNOIR", "Robe de bain"],
      ["EPONGE", "Elle absorbe l’eau"],
      ["LAVABO", "Petit évier"],
      ["DENTIFRICE", "Pâte pour les dents"],
      ["CANARD", "En plastique, il flotte"],
    ],
  },
  {
    "n": "Herbes aromatiques",
    "w": [
      ["BASILIC", "Herbe du pesto"],
      ["THYM", "Herbe de Provence"],
      ["ROMARIN", "Herbe des grillades"],
      ["PERSIL", "Herbe verte du taboulé"],
      ["MENTHE", "Herbe fraîche du thé"],
      ["CIBOULETTE", "Petites tiges vertes"],
      ["ESTRAGON", "Herbe de la sauce béarnaise"],
      ["LAURIER", "Feuille du bouquet garni"],
      ["ORIGAN", "Herbe de la pizza"],
      ["SAUGE", "Herbe aux feuilles veloutées"],
      ["CORIANDRE", "Herbe de la cuisine asiatique"],
      ["ANETH", "Herbe du saumon"],
    ],
  },
  {
    "n": "Champignons",
    "w": [
      ["CEPE", "Champignon à pied ventru"],
      ["GIROLLE", "Champignon jaune orangé"],
      ["TRUFFE", "Diamant noir"],
      ["AMANITE", "Champignon souvent toxique"],
      ["PLEUROTE", "Champignon en éventail"],
      ["CHANTERELLE", "Autre nom de la girolle"],
      ["CUEILLIR", "Ramasser"],
      ["SPORE", "Graine de champignon"],
      ["MYCELIUM", "Réseau souterrain"],
      ["CHAPEAU", "Partie haute du champignon"],
    ],
  },
  {
    "n": "Voiture",
    "w": [
      ["VOLANT", "On le tourne pour diriger"],
      ["MOTEUR", "Cœur de la voiture"],
      ["PNEU", "Il roule"],
      ["ESSENCE", "Carburant"],
      ["PHARE", "Il éclaire la route"],
      ["COFFRE", "On y range les bagages"],
      ["CEINTURE", "De sécurité"],
      ["FREIN", "Il arrête"],
      ["KLAXON", "Il fait tut tut"],
      ["RETROVISEUR", "Il montre l’arrière"],
      ["EMBRAYAGE", "Pédale de gauche"],
      ["GARAGE", "Abri de la voiture"],
    ],
  },
  {
    "n": "Vélo",
    "w": [
      ["PEDALE", "On appuie dessus"],
      ["GUIDON", "On le tient"],
      ["SELLE", "On s’assoit dessus"],
      ["CHAINE", "Elle entraîne la roue"],
      ["RAYON", "Tige de la roue"],
      ["SONNETTE", "Dring dring"],
      ["CASQUE", "Il protège la tête"],
      ["TANDEM", "Vélo à deux places"],
      ["DERAILLEUR", "Il change les vitesses"],
      ["CADRE", "Squelette du vélo"],
      ["CYCLISTE", "Il pédale"],
      ["TOURDEFRANCE", "Grande course de juillet"],
    ],
  },
  {
    "n": "Bateaux",
    "w": [
      ["VOILE", "Elle prend le vent"],
      ["MAT", "Il porte la voile"],
      ["GOUVERNAIL", "Il dirige le bateau"],
      ["HUBLOT", "Fenêtre ronde"],
      ["PROUE", "Avant du navire"],
      ["POUPE", "Arrière du navire"],
      ["CANOE", "Petite embarcation à pagaie"],
      ["PAQUEBOT", "Grand navire de croisière"],
      ["CATAMARAN", "Bateau à deux coques"],
      ["MATELOT", "Marin"],
      ["PORT", "Abri des bateaux"],
      ["KAYAK", "Embarcation à pagaie double"],
    ],
  },
  {
    "n": "Train",
    "w": [
      ["LOCOMOTIVE", "Elle tire les wagons"],
      ["WAGON", "Voiture du train"],
      ["RAILS", "Voie ferrée"],
      ["QUAI", "On y attend le train"],
      ["CONTROLEUR", "Il vérifie les billets"],
      ["TUNNEL", "Passage sous la montagne"],
      ["GARE", "Station de train"],
      ["VAPEUR", "Ancienne force motrice"],
      ["TGV", "Train à grande vitesse"],
      ["AIGUILLAGE", "Il change de voie"],
      ["COUCHETTE", "Lit du train de nuit"],
      ["TERMINUS", "Fin de ligne"],
    ],
  },
  {
    "n": "Monuments",
    "w": [
      ["TOUREIFFEL", "Dame de fer"],
      ["ARCDETRIOMPHE", "Sur les Champs-Élysées"],
      ["LOUVRE", "Musée à la pyramide de verre"],
      ["VERSAILLES", "Château du Roi-Soleil"],
      ["COLISEE", "Arène romaine"],
      ["PARTHENON", "Temple d’Athènes"],
      ["BIGBEN", "Horloge de Londres"],
      ["TAJMAHAL", "Mausolée indien"],
      ["ACROPOLE", "Colline d’Athènes"],
      ["STONEHENGE", "Cercle de pierres anglais"],
    ],
  },
  {
    "n": "Ville",
    "w": [
      ["RUE", "Voie urbaine"],
      ["PLACE", "Espace ouvert en ville"],
      ["FONTAINE", "Elle jaillit sur la place"],
      ["TROTTOIR", "Chemin des piétons"],
      ["LAMPADAIRE", "Il éclaire la rue la nuit"],
      ["IMMEUBLE", "Grand bâtiment"],
      ["MAIRIE", "Bâtiment du maire"],
      ["BOULEVARD", "Large avenue"],
      ["PARC", "Jardin public"],
      ["BOUTIQUE", "Petit magasin"],
      ["CARREFOUR", "Croisement"],
      ["METRO", "Train souterrain"],
    ],
  },
  {
    "n": "Famille",
    "w": [
      ["GRANDMERE", "Mère d’un parent"],
      ["COUSIN", "Enfant de l’oncle"],
      ["ONCLE", "Frère d’un parent"],
      ["TANTE", "Sœur d’un parent"],
      ["NEVEU", "Fils du frère"],
      ["NIECE", "Fille de la sœur"],
      ["PARRAIN", "Il accompagne au baptême"],
      ["JUMEAU", "Né le même jour"],
      ["BEBE", "Tout-petit"],
      ["FRATRIE", "Frères et sœurs"],
      ["AINE", "Le premier né"],
      ["BENJAMIN", "Le plus jeune"],
    ],
  },
  {
    "n": "Animaux de compagnie",
    "w": [
      ["CHATON", "Petit chat"],
      ["HAMSTER", "Petit rongeur à joues"],
      ["COCHONDINDE", "Petit rongeur sans queue"],
      ["CANARI", "Petit oiseau jaune"],
      ["POISSONROUGE", "Il tourne dans son bocal"],
      ["LAPIN", "Il aime les carottes"],
      ["TORTUE", "Elle hiberne dans le jardin"],
      ["PERRUCHE", "Petit perroquet"],
      ["FURET", "Petit animal joueur"],
      ["GAMELLE", "Bol de l’animal"],
      ["CROQUETTES", "Nourriture sèche"],
      ["VETERINAIRE", "Médecin des animaux"],
    ],
  },
  {
    "n": "Céréales",
    "w": [
      ["BLE", "Céréale du pain"],
      ["RIZ", "Céréale d’Asie"],
      ["MAIS", "Céréale à épis jaunes"],
      ["ORGE", "Céréale de la bière"],
      ["AVOINE", "Céréale des chevaux"],
      ["SEIGLE", "Céréale du pain noir"],
      ["QUINOA", "Graine des Andes"],
      ["SARRASIN", "Blé noir des galettes"],
      ["EPI", "Tête de la céréale"],
      ["MOISSON", "Récolte des blés"],
      ["MOULIN", "Il moud le grain"],
      ["SEMOULE", "Blé concassé"],
    ],
  },
  {
    "n": "Desserts",
    "w": [
      ["MOUSSE", "Au chocolat, légère"],
      ["FLAN", "Dessert tremblotant"],
      ["TARTETATIN", "Tarte renversée"],
      ["CREMEBRULEE", "Crème au sucre caramélisé"],
      ["CLAFOUTIS", "Dessert aux cerises"],
      ["PROFITEROLES", "Choux au chocolat chaud"],
      ["SORBET", "Glace sans lait"],
      ["ILEFLOTTANTE", "Meringue sur crème anglaise"],
      ["BAVAROIS", "Dessert moulé"],
      ["CHARLOTTE", "Dessert aux biscuits"],
      ["PANNACOTTA", "Crème cuite italienne"],
      ["FONDANT", "Gâteau au cœur coulant"],
    ],
  },
  {
    "n": "Plats français",
    "w": [
      ["RATATOUILLE", "Mijoté de légumes du Sud"],
      ["CASSOULET", "Plat de haricots de Toulouse"],
      ["BLANQUETTE", "Veau à la sauce blanche"],
      ["POTAUFEU", "Bouilli de bœuf et légumes"],
      ["QUICHE", "Tarte lorraine"],
      ["BOUILLABAISSE", "Soupe de poissons marseillaise"],
      ["TARTIFLETTE", "Gratin savoyard"],
      ["GALETTE", "Crêpe de sarrasin"],
      ["FONDUE", "Fromage fondu partagé"],
      ["SOUFFLE", "Plat qui gonfle au four"],
      ["CHOUCROUTE", "Plat alsacien"],
    ],
  },
  {
    "n": "Fruits exotiques",
    "w": [
      ["MANGUE", "Fruit à gros noyau"],
      ["ANANAS", "Fruit à couronne"],
      ["PAPAYE", "Fruit orange tropical"],
      ["LITCHI", "Petit fruit à coque rose"],
      ["GOYAVE", "Fruit parfumé tropical"],
      ["COCO", "Noix à eau"],
      ["GRENADE", "Fruit aux grains rouges"],
      ["KAKI", "Fruit orange d’automne"],
      ["CARAMBOLE", "Fruit en étoile"],
      ["AVOCAT", "Fruit du guacamole"],
      ["DATTE", "Fruit du palmier"],
    ],
  },
  {
    "n": "Noix",
    "w": [
      ["NOIX", "Fruit du noyer"],
      ["AMANDE", "Fruit de l’amandier"],
      ["NOISETTE", "Fruit du noisetier"],
      ["PISTACHE", "Petite noix verte"],
      ["CACAHUETE", "Arachide"],
      ["NOIXDECAJOU", "Noix en forme de rein"],
      ["PECAN", "Noix américaine"],
      ["GRAINE", "Petite semence"],
      ["SESAME", "Graine du pain burger"],
      ["TOURNESOL", "Ses graines se grignotent"],
      ["PIGNON", "Graine de pin"],
      ["CHATAIGNE", "Fruit d’automne grillé"],
    ],
  },
  {
    "n": "Tissus",
    "w": [
      ["COTON", "Fibre des tee-shirts"],
      ["SOIE", "Fibre précieuse du ver"],
      ["LIN", "Fibre des nappes"],
      ["VELOURS", "Tissu doux à poils ras"],
      ["JEAN", "Toile bleue"],
      ["FLANELLE", "Tissu chaud"],
      ["SATIN", "Tissu brillant"],
      ["TWEED", "Tissu écossais"],
      ["POLAIRE", "Tissu chaud synthétique"],
      ["CACHEMIRE", "Laine très douce"],
      ["DENIM", "Toile du jean"],
      ["MOUSSELINE", "Tissu léger"],
    ],
  },
  {
    "n": "Chaussures",
    "w": [
      ["BASKET", "Chaussure de sport"],
      ["ESCARPIN", "Chaussure à talon"],
      ["MOCASSIN", "Chaussure sans lacets"],
      ["SANDALE", "Chaussure ouverte"],
      ["BOTTINE", "Petite botte"],
      ["TONG", "Sandale de plage"],
      ["CHAUSSON", "Pantoufle douce"],
      ["LACET", "Il se noue"],
      ["SEMELLE", "Dessous de la chaussure"],
      ["TALON", "Il grandit"],
      ["CORDONNIER", "Il répare les chaussures"],
      ["SABOT", "Chaussure de bois"],
    ],
  },
  {
    "n": "Sports d'équipe",
    "w": [
      ["FOOTBALL", "Sport du ballon rond"],
      ["BASKETBALL", "Sport du panier"],
      ["RUGBY", "Sport du ballon ovale"],
      ["HANDBALL", "Sport de balle à la main"],
      ["VOLLEYBALL", "Sport du filet"],
      ["HOCKEY", "Sport de crosse"],
      ["ARBITRE", "Il siffle"],
      ["GARDIEN", "Il protège le but"],
      ["EQUIPE", "Groupe de joueurs"],
      ["MATCH", "Rencontre sportive"],
      ["TROPHEE", "Coupe du vainqueur"],
      ["SUPPORTER", "Il encourage"],
    ],
  },
  {
    "n": "Sports nautiques",
    "w": [
      ["NATATION", "Sport de la piscine"],
      ["PLONGEE", "Exploration sous l’eau"],
      ["VOILE", "Sport du vent"],
      ["SURF", "Glisse sur les vagues"],
      ["KITESURF", "Surf tiré par une aile"],
      ["CANOE", "Pagaie en rivière"],
      ["WATERPOLO", "Polo dans l’eau"],
      ["PLONGEON", "Saut dans l’eau"],
      ["RAFTING", "Descente en radeau"],
      ["PADDLE", "Planche à pagaie debout"],
      ["TUBA", "Tube pour respirer sous l’eau"],
      ["PALMES", "Chaussures de plongée"],
    ],
  },
  {
    "n": "Jeux olympiques",
    "w": [
      ["ANNEAUX", "Symbole olympique"],
      ["FLAMME", "Elle voyage jusqu’au stade"],
      ["MEDAILLE", "Récompense du podium"],
      ["PODIUM", "Marches des vainqueurs"],
      ["MARATHON", "Course de 42 km"],
      ["RELAIS", "Course en équipe"],
      ["JAVELOT", "Lance de l’athlète"],
      ["PERCHE", "Saut à la..."],
      ["DECATHLON", "Dix épreuves"],
      ["STADE", "Lieu des épreuves"],
      ["ATHLETE", "Sportif"],
      ["RECORD", "Meilleure performance"],
    ],
  },
  {
    "n": "Échecs",
    "w": [
      ["ROI", "Pièce à protéger"],
      ["REINE", "Pièce la plus puissante"],
      ["TOUR", "Elle va en ligne droite"],
      ["FOU", "Il va en diagonale"],
      ["CAVALIER", "Il saute en L"],
      ["PION", "Petite pièce"],
      ["ECHEC", "Le roi est menacé"],
      ["MAT", "Fin de partie"],
      ["ROQUE", "Coup du roi et de la tour"],
      ["ECHIQUIER", "Plateau de 64 cases"],
      ["PENDULE", "Elle mesure le temps"],
      ["GAMBIT", "Sacrifice d’ouverture"],
    ],
  },
  {
    "n": "Jouets",
    "w": [
      ["POUPEE", "Jouet à habiller"],
      ["NOUNOURS", "Ours en peluche"],
      ["TRAIN", "Électrique, il tourne"],
      ["CUBES", "On les empile"],
      ["LEGO", "Briques à assembler"],
      ["CERCEAU", "Grand anneau"],
      ["YOYO", "Il monte et descend"],
      ["TROTTINETTE", "Planche à guidon"],
      ["BALLON", "Il rebondit"],
      ["DINETTE", "Petite vaisselle de jeu"],
      ["KALEIDOSCOPE", "Tube à motifs colorés"],
      ["MARIONNETTE", "Poupée animée à la main"],
    ],
  },
  {
    "n": "Écriture",
    "w": [
      ["PLUME", "Ancien stylo"],
      ["LETTRE", "On l’envoie"],
      ["STYLO", "Il écrit à l’encre"],
      ["ALPHABET", "De A à Z"],
      ["VOYELLE", "A, E, I, O, U ou Y"],
      ["CONSONNE", "Lettre qui n’est pas voyelle"],
      ["ACCENT", "Aigu, grave ou circonflexe"],
      ["VIRGULE", "Petite pause écrite"],
      ["POINT", "Fin de phrase"],
      ["CALLIGRAPHIE", "Belle écriture"],
      ["BROUILLON", "Premier jet"],
      ["JOURNAL", "Carnet intime"],
    ],
  },
  {
    "n": "Magie",
    "w": [
      ["BAGUETTE", "Outil du magicien"],
      ["SORTILEGE", "Formule magique"],
      ["POTION", "Breuvage enchanté"],
      ["CHAPEAU", "On en sort un lapin"],
      ["ILLUSION", "Tour de passe-passe"],
      ["ENCHANTEUR", "Merlin en est un"],
      ["AMULETTE", "Porte-bonheur"],
      ["GRIMOIRE", "Livre de sorts"],
      ["CRISTAL", "Boule de voyance"],
      ["TELEPORTATION", "Déplacement instantané"],
      ["INVISIBLE", "Qu’on ne voit pas"],
      ["ABRACADABRA", "Formule magique célèbre"],
    ],
  },
  {
    "n": "Saisons et temps",
    "w": [
      ["JANVIER", "Premier mois"],
      ["FEVRIER", "Mois le plus court"],
      ["DECEMBRE", "Mois de Noël"],
      ["SAISON", "Il y en a quatre"],
      ["SOLSTICE", "Jour le plus long ou le plus court"],
      ["CALENDRIER", "Il compte les jours"],
      ["SEMAINE", "Sept jours"],
      ["HORLOGE", "Elle donne l’heure"],
      ["SABLIER", "Il s’écoule"],
      ["AUBE", "Début du jour"],
      ["MIDI", "Milieu de la journée"],
      ["SOIREE", "Fin de journée"],
    ],
  },
  {
    "n": "Peinture",
    "w": [
      ["PEINTURE", "Liquide coloré"],
      ["ROULEAU", "Il peint les murs"],
      ["BACHE", "Elle protège le sol"],
      ["ENDUIT", "Il bouche les trous"],
      ["PONCEUSE", "Elle lisse"],
      ["ESCABEAU", "Petite échelle"],
      ["VERNIS", "Il fait briller"],
      ["TEINTE", "Nuance de couleur"],
      ["PIGMENT", "Poudre colorée"],
      ["SOLVANT", "Il dilue"],
      ["MASQUE", "Il protège le visage"],
      ["GOUACHE", "Peinture épaisse à l’eau"],
    ],
  },
  {
    "n": "Santé",
    "w": [
      ["INFIRMIERE", "Elle soigne"],
      ["PANSEMENT", "Il protège la plaie"],
      ["STETHOSCOPE", "Il écoute le cœur"],
      ["SIROP", "Médicament sucré"],
      ["THERMOMETRE", "Il mesure la fièvre"],
      ["PHARMACIE", "On y achète les médicaments"],
      ["VITAMINE", "Bonne pour la santé"],
      ["REPOS", "Il aide à guérir"],
      ["CONVALESCENCE", "Période de guérison"],
      ["ORDONNANCE", "Papier du médecin"],
      ["PLATRE", "Il immobilise"],
      ["SOURIRE", "Le meilleur remède"],
    ],
  },
  {
    "n": "Canada",
    "w": [
      ["ERABLE", "Feuille du drapeau"],
      ["CASTOR", "Animal national bâtisseur"],
      ["ORIGNAL", "Grand cervidé du Nord"],
      ["TOTEM", "Mât sculpté autochtone"],
      ["CARIBOU", "Renne d’Amérique"],
      ["HOCKEY", "Sport national d’hiver"],
      ["TOUNDRA", "Plaine glacée du Grand Nord"],
      ["ROCHEUSES", "Chaîne de montagnes de l’Ouest"],
      ["POUTINE", "Frites, fromage en grains et sauce"],
      ["CANOT", "Embarcation des coureurs des bois"],
    ],
  },
  {
    "n": "Québec",
    "w": [
      ["CABANE", "À sucre, au printemps"],
      ["SIROP", "D’érable, on le verse sur la tire"],
      ["TIRE", "Sucre d’érable sur la neige"],
      ["TUQUE", "Bonnet en québécois"],
      ["FLEURDELYS", "Emblème du drapeau québécois"],
      ["GASPESIE", "Péninsule du rocher Percé"],
      ["SAGUENAY", "Fjord et région"],
      ["OUANANICHE", "Saumon d’eau douce"],
      ["TOURTIERE", "Pâté à la viande des fêtes"],
      ["CHICOUTAI", "Plaquebière de la Côte-Nord"],
    ],
  },
  {
    "n": "Mexique",
    "w": [
      ["SOMBRERO", "Grand chapeau"],
      ["TACO", "Galette garnie pliée"],
      ["MARIACHI", "Musicien traditionnel"],
      ["PINATA", "On la casse les yeux bandés"],
      ["CACTUS", "Plante du désert"],
      ["AZTEQUE", "Ancien peuple de Mexico"],
      ["TORTILLA", "Galette de maïs"],
      ["GUACAMOLE", "Purée d’avocat"],
      ["MAYA", "Civilisation du Yucatan"],
      ["PONCHO", "Cape en laine"],
    ],
  },
  {
    "n": "Brésil",
    "w": [
      ["SAMBA", "Danse du carnaval"],
      ["CARNAVAL", "Grande fête de Rio"],
      ["AMAZONIE", "Grande forêt"],
      ["BOSSANOVA", "Musique douce brésilienne"],
      ["TOUCAN", "Oiseau au bec coloré"],
      ["RIO", "Ville du Pain de Sucre"],
      ["CAFE", "Grande culture brésilienne"],
      ["CAPOEIRA", "Art martial dansé"],
      ["ACAI", "Baie violette"],
      ["FOOTBALL", "Passion nationale"],
    ],
  },
  {
    "n": "Argentine",
    "w": [
      ["TANGO", "Danse de Buenos Aires"],
      ["PAMPA", "Grande plaine"],
      ["GAUCHO", "Cavalier des plaines"],
      ["PATAGONIE", "Région du sud"],
      ["ASADO", "Grillade traditionnelle"],
      ["MATE", "Infusion partagée"],
      ["GLACIER", "Perito Moreno en est un"],
      ["ANDES", "Montagnes de l’ouest"],
      ["DULCEDELECHE", "Confiture de lait"],
      ["CONDOR", "Grand rapace"],
    ],
  },
  {
    "n": "Pérou",
    "w": [
      ["INCA", "Ancien empire"],
      ["LAMA", "Animal des Andes"],
      ["ALPAGA", "Cousin du lama"],
      ["QUINOA", "Graine des hauts plateaux"],
      ["TITICACA", "Lac le plus haut"],
      ["CUZCO", "Ancienne capitale inca"],
      ["CONDOR", "Oiseau des Andes"],
      ["PONCHO", "Vêtement de laine"],
      ["CEVICHE", "Poisson mariné au citron"],
      ["NAZCA", "Lignes dessinées dans le désert"],
    ],
  },
  {
    "n": "Royaume-Uni",
    "w": [
      ["LONDRES", "Capitale anglaise"],
      ["TAMISE", "Fleuve de Londres"],
      ["PUDDING", "Dessert anglais"],
      ["CORNEMUSE", "Instrument écossais"],
      ["CRICKET", "Sport à la batte"],
      ["BIGBEN", "Cloche célèbre"],
      ["SCONES", "Petits pains du thé"],
      ["PARAPLUIE", "Accessoire indispensable"],
    ],
  },
  {
    "n": "Irlande",
    "w": [
      ["TREFLE", "Emblème vert"],
      ["LEPRECHAUN", "Lutin farceur"],
      ["HARPE", "Symbole national"],
      ["DUBLIN", "Capitale"],
      ["FALAISES", "De Moher, face à l’Atlantique"],
      ["GAELIQUE", "Langue celtique"],
      ["LANDE", "Paysage de bruyère"],
      ["TOURBE", "Combustible des marais"],
      ["CLADDAGH", "Bague aux mains et cœur"],
      ["SAINTPATRICK", "Fête du 17 mars"],
    ],
  },
  {
    "n": "Écosse",
    "w": [
      ["KILT", "Jupe traditionnelle"],
      ["TARTAN", "Tissu à carreaux"],
      ["LOCHNESS", "Lac du monstre"],
      ["HIGHLANDS", "Hautes terres"],
      ["CHARDON", "Fleur emblème"],
      ["EDIMBOURG", "Capitale"],
      ["CORNEMUSE", "Instrument national"],
      ["HAGGIS", "Plat de panse farcie"],
      ["CLAN", "Grande famille"],
      ["LOCH", "Lac en écossais"],
    ],
  },
  {
    "n": "Allemagne",
    "w": [
      ["BERLIN", "Capitale"],
      ["BRETZEL", "Pain en nœud"],
      ["FORETNOIRE", "Gâteau aux cerises"],
      ["RHIN", "Fleuve des châteaux"],
      ["BAVIERE", "Région de Munich"],
      ["CHOUCROUTE", "Chou fermenté"],
      ["CASSENOISETTE", "Figurine en bois"],
      ["BEETHOVEN", "Compositeur de Bonn"],
      ["STOLLEN", "Pain de Noël"],
      ["GRIMM", "Frères conteurs"],
    ],
  },
  {
    "n": "Suisse",
    "w": [
      ["ALPES", "Montagnes"],
      ["FONDUE", "Fromage fondu"],
      ["CHOCOLAT", "Spécialité gourmande"],
      ["MONTRE", "Horlogerie célèbre"],
      ["COUCOU", "Horloge à oiseau"],
      ["GENEVE", "Ville du lac Léman"],
      ["EDELWEISS", "Fleur des cimes"],
      ["COR", "Des Alpes, long instrument"],
      ["CANTON", "Région suisse"],
      ["LEMAN", "Grand lac"],
    ],
  },
  {
    "n": "Belgique",
    "w": [
      ["BRUXELLES", "Capitale"],
      ["GAUFRE", "Spécialité sucrée"],
      ["FRITES", "Servies en cornet"],
      ["PRALINE", "Bonbon de chocolat"],
      ["ATOMIUM", "Monument géant"],
      ["SPECULOOS", "Biscuit à la cannelle"],
      ["ANVERS", "Port diamantaire"],
      ["BRUGES", "Venise du Nord"],
      ["MOULES", "Plat avec frites"],
    ],
  },
  {
    "n": "Pays-Bas",
    "w": [
      ["TULIPE", "Fleur nationale"],
      ["MOULINAVENT", "Il tourne sur les polders"],
      ["SABOT", "Chaussure de bois"],
      ["CANAL", "Voie d’eau d’Amsterdam"],
      ["POLDER", "Terre gagnée sur la mer"],
      ["DIGUE", "Elle retient la mer"],
      ["VELO", "Transport roi"],
      ["GOUDA", "Fromage rond"],
      ["AMSTERDAM", "Capitale"],
      ["DELFT", "Faïence bleue"],
    ],
  },
  {
    "n": "Scandinavie",
    "w": [
      ["FJORD", "Bras de mer entre falaises"],
      ["VIKING", "Navigateur nordique"],
      ["AURORE", "Boréale, lumière du ciel"],
      ["SAUNA", "Bain de vapeur"],
      ["LAPONIE", "Pays du Père Noël"],
      ["HYGGE", "Art danois du bien-être"],
      ["TROLL", "Créature des contes"],
      ["ELAN", "Grand cervidé"],
      ["RENNE", "Animal du Grand Nord"],
    ],
  },
  {
    "n": "Islande",
    "w": [
      ["GEYSER", "Source jaillissante"],
      ["VOLCAN", "Montagne de feu"],
      ["GLACIER", "Vatnajökull en est un"],
      ["MACAREUX", "Oiseau au bec coloré"],
      ["REYKJAVIK", "Capitale"],
      ["LAGON", "Bleu, bain chaud"],
      ["SAGA", "Récit ancien"],
      ["LAVE", "Roche en fusion"],
      ["BALEINE", "On l’observe en mer"],
      ["FUMEROLLE", "Vapeur volcanique"],
    ],
  },
  {
    "n": "Grèce",
    "w": [
      ["ATHENES", "Capitale"],
      ["OLIVIER", "Arbre sacré"],
      ["ACROPOLE", "Colline aux temples"],
      ["FETA", "Fromage en saumure"],
      ["CYCLADES", "Îles blanches et bleues"],
      ["OLYMPE", "Mont des dieux"],
      ["TZATZIKI", "Sauce au concombre"],
      ["MOUSSAKA", "Gratin d’aubergines"],
      ["SANTORIN", "Île volcanique"],
      ["AMPHORE", "Vase antique"],
    ],
  },
  {
    "n": "Turquie",
    "w": [
      ["ISTANBUL", "Ville sur deux continents"],
      ["BAZAR", "Grand marché couvert"],
      ["LOUKOUM", "Confiserie parfumée"],
      ["CAPPADOCE", "Région des cheminées de fées"],
      ["HAMMAM", "Bain de vapeur"],
      ["TAPIS", "Tissé à la main"],
      ["KEBAB", "Viande grillée"],
      ["BOSPHORE", "Détroit"],
      ["MOSQUEE", "Lieu de prière"],
      ["THE", "Servi dans un verre tulipe"],
    ],
  },
  {
    "n": "Maroc",
    "w": [
      ["MARRAKECH", "Ville rouge"],
      ["TAJINE", "Plat mijoté"],
      ["SOUK", "Marché"],
      ["COUSCOUS", "Graine de semoule"],
      ["RIAD", "Maison à patio"],
      ["ATLAS", "Chaîne de montagnes"],
      ["MENTHE", "Thé à la..."],
      ["MEDINA", "Vieille ville"],
      ["ARGAN", "Huile précieuse"],
      ["BABOUCHE", "Chausson de cuir"],
    ],
  },
  {
    "n": "Inde",
    "w": [
      ["TAJMAHAL", "Mausolée de marbre"],
      ["SARI", "Vêtement drapé"],
      ["CURRY", "Plat épicé"],
      ["GANGE", "Fleuve sacré"],
      ["YOGA", "Discipline née en Inde"],
      ["CHAI", "Thé épicé au lait"],
      ["MOUSSON", "Saison des pluies"],
      ["TIGRE", "Félin du Bengale"],
      ["MANDALA", "Dessin circulaire"],
      ["DIWALI", "Fête des lumières"],
    ],
  },
  {
    "n": "Chine",
    "w": [
      ["PEKIN", "Capitale"],
      ["MURAILLE", "Grande, elle est visible de loin"],
      ["PANDA", "Ours noir et blanc"],
      ["DRAGON", "Créature porte-bonheur"],
      ["LANTERNE", "Fête de la mi-automne"],
      ["DIMSUM", "Bouchées vapeur"],
      ["SOIE", "Tissu de la route ancienne"],
      ["JADE", "Pierre verte précieuse"],
      ["BAGUETTES", "Couverts en bois"],
      ["CALLIGRAPHIE", "Art du pinceau"],
    ],
  },
  {
    "n": "Corée",
    "w": [
      ["SEOUL", "Capitale"],
      ["KIMCHI", "Chou fermenté épicé"],
      ["HANBOK", "Habit traditionnel"],
      ["KPOP", "Musique populaire"],
      ["BIBIMBAP", "Bol de riz garni"],
      ["HANGEUL", "Alphabet coréen"],
      ["TAEKWONDO", "Art martial"],
      ["TEMPLE", "Bouddhiste dans la montagne"],
      ["GINSENG", "Racine tonique"],
      ["CERISIER", "Floraison au printemps"],
    ],
  },
  {
    "n": "Vietnam",
    "w": [
      ["HANOI", "Capitale"],
      ["PHO", "Soupe de nouilles"],
      ["BAIEDHALONG", "Baie aux pitons rocheux"],
      ["RIZIERE", "Champ en terrasses"],
      ["NEM", "Rouleau frit"],
      ["CHAPEAU", "Conique, en feuilles"],
      ["MEKONG", "Grand fleuve"],
      ["LOTUS", "Fleur nationale"],
      ["LANTERNE", "Hoi An en est remplie"],
      ["AODAI", "Tunique traditionnelle"],
    ],
  },
  {
    "n": "Thaïlande",
    "w": [
      ["BANGKOK", "Capitale"],
      ["ELEPHANT", "Animal emblème"],
      ["PADTHAI", "Nouilles sautées"],
      ["TEMPLE", "Wat doré"],
      ["TUKTUK", "Taxi à trois roues"],
      ["MANGUE", "Avec du riz gluant"],
      ["MASSAGE", "Soin traditionnel"],
      ["ORCHIDEE", "Fleur exotique"],
      ["PLAGE", "Sable blanc des îles"],
      ["MARCHE", "Flottant, sur les canaux"],
    ],
  },
  {
    "n": "Australie",
    "w": [
      ["KANGOUROU", "Il saute avec une poche"],
      ["KOALA", "Il dort dans l’eucalyptus"],
      ["OPERA", "De Sydney, en voiles"],
      ["OUTBACK", "Arrière-pays désertique"],
      ["BOOMERANG", "Il revient"],
      ["EUCALYPTUS", "Arbre du koala"],
      ["ULURU", "Rocher rouge sacré"],
      ["DINGO", "Chien sauvage"],
      ["CORAIL", "Grande barrière"],
      ["WOMBAT", "Petit marsupial fouisseur"],
    ],
  },
  {
    "n": "Nouvelle-Zélande",
    "w": [
      ["KIWI", "Oiseau qui ne vole pas"],
      ["MAORI", "Peuple autochtone"],
      ["HAKA", "Danse guerrière"],
      ["FOUGERE", "Argentée, emblème"],
      ["GEYSER", "Rotorua en est plein"],
      ["WELLINGTON", "Capitale"],
      ["FJORD", "Milford Sound en est un"],
      ["MOUTON", "Il y en a beaucoup"],
      ["VOLCAN", "Mont Ruapehu"],
    ],
  },
  {
    "n": "Hawaï",
    "w": [
      ["VOLCAN", "Kilauea en est un"],
      ["SURF", "Né sur ces vagues"],
      ["UKULELE", "Petite guitare"],
      ["HULA", "Danse aux hanches"],
      ["LEI", "Collier de fleurs"],
      ["ALOHA", "Bonjour et au revoir"],
      ["ANANAS", "Fruit de l’archipel"],
      ["TORTUE", "Marine, sur les plages"],
      ["LAVE", "Coulée noire"],
      ["PLAGE", "Sable noir ou doré"],
    ],
  },
  {
    "n": "Antilles",
    "w": [
      ["MARTINIQUE", "Île aux fleurs"],
      ["GUADELOUPE", "Île papillon"],
      ["BANANE", "Culture locale"],
      ["RHUMERIE", "Distillerie de canne"],
      ["CREOLE", "Langue des îles"],
      ["MADRAS", "Tissu à carreaux"],
      ["COLOMBO", "Plat épicé"],
      ["ZOUK", "Musique dansante"],
      ["COCOTIER", "Arbre des plages"],
      ["ACCRAS", "Beignets de morue"],
    ],
  },
  {
    "n": "Sénégal",
    "w": [
      ["DAKAR", "Capitale"],
      ["BAOBAB", "Arbre géant"],
      ["THIEBOUDIENNE", "Riz au poisson"],
      ["TERANGA", "Hospitalité"],
      ["DJEMBE", "Tambour"],
      ["BISSAP", "Boisson à l’hibiscus"],
      ["GOREE", "Île du souvenir"],
      ["PIROGUE", "Bateau de pêche coloré"],
      ["LACROSE", "Lac Rose"],
      ["GRIOT", "Conteur musicien"],
    ],
  },
  {
    "n": "Kenya",
    "w": [
      ["SAFARI", "Voyage d’observation"],
      ["MASAI", "Peuple de bergers"],
      ["SAVANE", "Plaine herbeuse"],
      ["NAIROBI", "Capitale"],
      ["GIRAFE", "Haute silhouette"],
      ["ELEPHANT", "Géant de la savane"],
      ["KILIMANDJARO", "Sommet voisin"],
      ["ACACIA", "Arbre en parasol"],
      ["GNOU", "Grande migration"],
      ["LION", "Roi de la savane"],
    ],
  },
  {
    "n": "Andes",
    "w": [
      ["CORDILLERE", "Chaîne de montagnes"],
      ["LAMA", "Animal de bât"],
      ["CONDOR", "Grand oiseau"],
      ["ALTIPLANO", "Haut plateau"],
      ["PONCHO", "Cape de laine"],
      ["FLUTE", "De Pan, instrument"],
      ["QUECHUA", "Langue des Incas"],
      ["SALAR", "Désert de sel"],
      ["VOLCAN", "Montagne active"],
      ["ACONCAGUA", "Plus haut sommet"],
    ],
  },
  {
    "n": "Alpes",
    "w": [
      ["MONTBLANC", "Plus haut sommet d’Europe"],
      ["CHAMONIX", "Ville au pied du glacier"],
      ["FROMAGE", "Beaufort ou reblochon"],
      ["CHALET", "Maison de bois"],
      ["ESTIVE", "Pâturage d’été"],
      ["TELEPHERIQUE", "Cabine suspendue"],
      ["GENTIANE", "Fleur bleue"],
      ["BOUQUETIN", "Chèvre sauvage"],
      ["SKI", "Sport de glisse"],
      ["ALPINISTE", "Grimpeur des sommets"],
    ],
  },
  {
    "n": "Pyrénées",
    "w": [
      ["PIC", "Du Midi, observatoire"],
      ["CIRQUE", "De Gavarnie"],
      ["ISARD", "Chamois pyrénéen"],
      ["OURS", "Brun, il est de retour"],
      ["TRANSHUMANCE", "Montée des troupeaux"],
      ["GAVE", "Torrent de montagne"],
      ["BERET", "Couvre-chef basque"],
      ["BASQUE", "Pays et langue"],
      ["ANDORRE", "Petit pays"],
      ["PELOTE", "Sport de balle basque"],
    ],
  },
  {
    "n": "Himalaya",
    "w": [
      ["EVEREST", "Plus haut sommet du monde"],
      ["SHERPA", "Guide de montagne"],
      ["YAK", "Bovin à longs poils"],
      ["NEPAL", "Pays des sommets"],
      ["TIBET", "Haut plateau"],
      ["DRAPEAUX", "De prière, colorés"],
      ["MONASTERE", "Perché sur la montagne"],
      ["LEOPARD", "Des neiges, félin rare"],
      ["YETI", "Abominable homme des neiges"],
      ["EXPEDITION", "Ascension en équipe"],
    ],
  },
  {
    "n": "Amazonie",
    "w": [
      ["FLEUVE", "Le plus puissant du monde"],
      ["PIRANHA", "Poisson aux dents pointues"],
      ["ARA", "Perroquet coloré"],
      ["CANOPEE", "Toit de la forêt"],
      ["LIANE", "Elle pend des arbres"],
      ["JAGUAR", "Félin tacheté"],
      ["DAUPHIN", "Rose, il vit dans le fleuve"],
      ["HEVEA", "Arbre à caoutchouc"],
      ["TAPIR", "Animal à trompe courte"],
      ["ANACONDA", "Serpent géant"],
    ],
  },
  {
    "n": "Provence",
    "w": [
      ["LAVANDE", "Champs violets"],
      ["CIGALE", "Chant de l’été"],
      ["OLIVIER", "Arbre argenté"],
      ["MISTRAL", "Vent du nord"],
      ["CALISSON", "Douceur d’Aix"],
      ["SANTON", "Figurine de crèche"],
      ["PASTIS", "Apéritif anisé"],
      ["GARRIGUE", "Lande parfumée"],
      ["BOULES", "Jeu de pétanque"],
      ["TOMETTE", "Carreau de terre cuite"],
    ],
  },
  {
    "n": "Bretagne",
    "w": [
      ["CREPE", "Spécialité au froment"],
      ["GALETTE", "Crêpe de sarrasin"],
      ["MENHIR", "Pierre levée"],
      ["PHARE", "Il veille sur les côtes"],
      ["KOUIGNAMANN", "Gâteau au beurre"],
      ["BINIOU", "Cornemuse bretonne"],
      ["MAREE", "Grande à Saint-Malo"],
      ["CIDRE", "Boisson de pommes"],
      ["LANDES", "Bruyère et ajoncs"],
    ],
  },
  {
    "n": "Normandie",
    "w": [
      ["CAMEMBERT", "Fromage de la région"],
      ["POMME", "Fruit des vergers"],
      ["FALAISES", "D’Étretat"],
      ["TEURGOULE", "Riz au lait à la cannelle"],
      ["COLOMBAGE", "Maison à pans de bois"],
      ["DEBARQUEMENT", "Plages de 1944"],
      ["VACHE", "Normande, tachetée"],
      ["BOCAGE", "Champs entourés de haies"],
      ["CALVADOS", "Département et eau-de-vie"],
    ],
  },
  {
    "n": "Alsace",
    "w": [
      ["CIGOGNE", "Oiseau emblème"],
      ["BRETZEL", "Pain noué"],
      ["KOUGELHOF", "Brioche en couronne"],
      ["COLMAR", "Petite Venise"],
      ["STRASBOURG", "Ville de la cathédrale"],
      ["FLAMMEKUECHE", "Tarte flambée"],
      ["MARCHE", "De Noël, très célèbre"],
      ["COLOMBAGE", "Maisons à pans de bois"],
      ["VOSGES", "Massif voisin"],
      ["BAECKEOFFE", "Plat mijoté"],
    ],
  },
  {
    "n": "Paris",
    "w": [
      ["SEINE", "Fleuve de la capitale"],
      ["TOUREIFFEL", "Dame de fer"],
      ["LOUVRE", "Musée célèbre"],
      ["MONTMARTRE", "Butte des peintres"],
      ["METRO", "Transport souterrain"],
      ["BATEAUMOUCHE", "Croisière sur le fleuve"],
      ["NOTREDAME", "Cathédrale"],
      ["TERRASSE", "Café en plein air"],
      ["BOUQUINISTE", "Libraire des quais"],
      ["OPERA", "Palais Garnier"],
    ],
  },
  {
    "n": "Venise",
    "w": [
      ["GONDOLE", "Barque noire"],
      ["CANAL", "Grand, il traverse la ville"],
      ["CARNAVAL", "Fête masquée"],
      ["MASQUE", "On le porte au carnaval"],
      ["RIALTO", "Pont célèbre"],
      ["LAGUNE", "Étendue d’eau salée"],
      ["MURANO", "Île du verre"],
      ["VAPORETTO", "Bateau-bus"],
      ["GONDOLIER", "Il rame en chantant"],
      ["PALAIS", "Des Doges"],
    ],
  },
  {
    "n": "Londres",
    "w": [
      ["TAMISE", "Fleuve"],
      ["TOWERBRIDGE", "Pont à bascule"],
      ["BUS", "Rouge à étage"],
      ["TAXI", "Noir, typique"],
      ["BIGBEN", "Cloche de l’horloge"],
      ["METRO", "Tube en anglais"],
      ["PALAIS", "De Buckingham"],
      ["GARDE", "Au bonnet à poils"],
      ["BROUILLARD", "Fog londonien"],
      ["PARC", "Hyde Park en est un"],
    ],
  },
  {
    "n": "New York",
    "w": [
      ["GRATTECIEL", "Immeuble immense"],
      ["TAXI", "Jaune"],
      ["STATUE", "De la Liberté"],
      ["BROADWAY", "Rue des théâtres"],
      ["CENTRALPARK", "Grand parc"],
      ["BAGEL", "Petit pain en anneau"],
      ["METRO", "Subway"],
      ["PONT", "De Brooklyn"],
      ["TIMESSQUARE", "Place aux écrans"],
      ["HUDSON", "Fleuve"],
    ],
  },
  {
    "n": "Rome",
    "w": [
      ["COLISEE", "Amphithéâtre"],
      ["FONTAINE", "De Trevi, on y jette une pièce"],
      ["VATICAN", "Plus petit État"],
      ["FORUM", "Place antique"],
      ["PIZZA", "Spécialité italienne"],
      ["TIBRE", "Fleuve"],
      ["GLADIATEUR", "Combattant antique"],
      ["VESPA", "Scooter"],
      ["GELATO", "Glace italienne"],
      ["LOUVE", "Elle a nourri Romulus"],
    ],
  },
  {
    "n": "Océans",
    "w": [
      ["PACIFIQUE", "Le plus grand"],
      ["ATLANTIQUE", "Entre Europe et Amérique"],
      ["INDIEN", "Océan de Madagascar"],
      ["ARCTIQUE", "Au nord, glacé"],
      ["AUSTRAL", "Autour de l’Antarctique"],
      ["ABYSSE", "Grande profondeur"],
      ["COURANT", "Mouvement de l’eau"],
      ["FOSSE", "Des Mariannes"],
      ["HOULE", "Mouvement de la mer"],
      ["ATOLL", "Île en anneau"],
    ],
  },
  {
    "n": "Fleuves du monde",
    "w": [
      ["NIL", "Fleuve d’Égypte"],
      ["AMAZONE", "Le plus puissant"],
      ["YANGTSE", "Fleuve chinois"],
      ["MISSISSIPPI", "Fleuve américain"],
      ["DANUBE", "Bleu, il traverse l’Europe"],
      ["RHIN", "Fleuve des châteaux"],
      ["LOIRE", "Plus long fleuve français"],
      ["GANGE", "Fleuve sacré"],
      ["VOLGA", "Fleuve russe"],
      ["MEKONG", "Fleuve d’Asie du Sud-Est"],
    ],
  },
  {
    "n": "Lacs",
    "w": [
      ["LEMAN", "Lac de Genève"],
      ["BAIKAL", "Le plus profond"],
      ["TITICACA", "Lac des Andes"],
      ["VICTORIA", "Grand lac africain"],
      ["COME", "Lac italien"],
      ["ANNECY", "Lac aux eaux pures"],
      ["SUPERIEUR", "Un des Grands Lacs"],
      ["TAHOE", "Lac de montagne américain"],
      ["ONTARIO", "Lac et province"],
      ["LOCH", "Lac écossais"],
    ],
  },
  {
    "n": "Volcans",
    "w": [
      ["CRATERE", "Bouche du volcan"],
      ["LAVE", "Roche en fusion"],
      ["MAGMA", "Roche fondue souterraine"],
      ["ERUPTION", "Réveil du volcan"],
      ["CENDRES", "Poussière volcanique"],
      ["VESUVE", "Il a enseveli Pompéi"],
      ["ETNA", "Volcan de Sicile"],
      ["FUJI", "Mont japonais"],
      ["PUY", "Volcan d’Auvergne"],
      ["BASALTE", "Roche noire volcanique"],
    ],
  },
  {
    "n": "Grottes",
    "w": [
      ["STALACTITE", "Elle tombe du plafond"],
      ["STALAGMITE", "Elle monte du sol"],
      ["SPELEOLOGUE", "Explorateur souterrain"],
      ["GOUFFRE", "Grand trou profond"],
      ["CAVERNE", "Grande grotte"],
      ["CHAUVESOURIS", "Habitant des grottes"],
      ["CONCRETION", "Dépôt calcaire"],
      ["LAMPE", "Frontale, indispensable"],
      ["ECHO", "Son qui revient"],
      ["LAC", "Souterrain et calme"],
    ],
  },
  {
    "n": "Canyons",
    "w": [
      ["GRANDCANYON", "Gorge de l’Arizona"],
      ["GORGES", "Du Verdon"],
      ["FALAISE", "Paroi rocheuse"],
      ["EROSION", "Usure de la roche"],
      ["RIVIERE", "Elle a creusé la roche"],
      ["STRATES", "Couches de roche"],
      ["BELVEDERE", "Point de vue"],
      ["MESA", "Plateau rocheux"],
      ["ARCHE", "Rocher en pont"],
      ["CANYONING", "Descente sportive"],
    ],
  },
  {
    "n": "Capitales d'Europe",
    "w": [
      ["LISBONNE", "Capitale du Portugal"],
      ["MADRID", "Capitale de l’Espagne"],
      ["VIENNE", "Capitale de l’Autriche"],
      ["PRAGUE", "Capitale tchèque"],
      ["BUDAPEST", "Capitale hongroise"],
      ["OSLO", "Capitale norvégienne"],
      ["VARSOVIE", "Capitale polonaise"],
      ["DUBLIN", "Capitale irlandaise"],
      ["HELSINKI", "Capitale finlandaise"],
      ["COPENHAGUE", "Capitale danoise"],
    ],
  },
  {
    "n": "Capitales du monde",
    "w": [
      ["OTTAWA", "Capitale du Canada"],
      ["TOKYO", "Capitale du Japon"],
      ["NAIROBI", "Capitale du Kenya"],
      ["LIMA", "Capitale du Pérou"],
      ["CANBERRA", "Capitale de l’Australie"],
      ["SEOUL", "Capitale de la Corée du Sud"],
      ["RABAT", "Capitale du Maroc"],
      ["DAKAR", "Capitale du Sénégal"],
      ["HANOI", "Capitale du Vietnam"],
      ["BRASILIA", "Capitale du Brésil"],
    ],
  },
  {
    "n": "Continents",
    "w": [
      ["EUROPE", "Continent de la France"],
      ["AFRIQUE", "Continent du Sahara"],
      ["ASIE", "Le plus grand continent"],
      ["AMERIQUE", "Nord et Sud"],
      ["OCEANIE", "Continent de l’Australie"],
      ["ANTARCTIQUE", "Continent glacé"],
      ["EURASIE", "Europe et Asie réunies"],
      ["PANGEE", "Supercontinent ancien"],
      ["PLAQUE", "Tectonique"],
      ["ISTHME", "Bande de terre étroite"],
    ],
  },
  {
    "n": "Orientation",
    "w": [
      ["NORD", "Où pointe la boussole"],
      ["SUD", "Opposé du nord"],
      ["EST", "Où se lève le soleil"],
      ["OUEST", "Où se couche le soleil"],
      ["BOUSSOLE", "Elle indique le nord"],
      ["CARTE", "Elle représente le terrain"],
      ["LATITUDE", "Coordonnée horizontale"],
      ["LONGITUDE", "Coordonnée verticale"],
      ["EQUATEUR", "Ligne au milieu du globe"],
      ["TROPIQUE", "Du Cancer ou du Capricorne"],
    ],
  },
  {
    "n": "Langues",
    "w": [
      ["FRANCAIS", "Langue de Molière"],
      ["ANGLAIS", "Langue de Shakespeare"],
      ["ESPAGNOL", "Langue de Cervantès"],
      ["ITALIEN", "Langue de Dante"],
      ["ALLEMAND", "Langue de Goethe"],
      ["JAPONAIS", "Langue de Tokyo"],
      ["ARABE", "Langue écrite de droite à gauche"],
      ["LATIN", "Langue ancienne de Rome"],
      ["BRETON", "Langue celtique de France"],
      ["ESPERANTO", "Langue inventée universelle"],
    ],
  },
  {
    "n": "Monnaies",
    "w": [
      ["EURO", "Monnaie européenne"],
      ["DOLLAR", "Monnaie américaine"],
      ["YEN", "Monnaie japonaise"],
      ["LIVRE", "Monnaie britannique"],
      ["FRANC", "Monnaie suisse"],
      ["ROUPIE", "Monnaie indienne"],
      ["PESO", "Monnaie mexicaine"],
      ["ROUBLE", "Monnaie russe"],
      ["DIRHAM", "Monnaie marocaine"],
      ["TIRELIRE", "Cochon à pièces"],
    ],
  },
  {
    "n": "Arbres fruitiers",
    "w": [
      ["POMMIER", "Il donne des pommes"],
      ["POIRIER", "Il donne des poires"],
      ["CERISIER", "Il donne des cerises"],
      ["PRUNIER", "Il donne des prunes"],
      ["ABRICOTIER", "Il donne des abricots"],
      ["FIGUIER", "Arbre du Midi aux fruits mous"],
      ["NOYER", "Il donne des noix"],
      ["AMANDIER", "Il fleurit tôt au printemps"],
      ["CITRONNIER", "Arbre aux agrumes jaunes"],
      ["OLIVIER", "Arbre de Méditerranée"],
    ],
  },
  {
    "n": "Conifères",
    "w": [
      ["PIN", "Il donne des pommes de pin"],
      ["EPICEA", "Sapin de Noël courant"],
      ["MELEZE", "Il perd ses aiguilles l’hiver"],
      ["CEDRE", "Arbre majestueux du Liban"],
      ["SEQUOIA", "Arbre géant de Californie"],
      ["CYPRES", "Arbre élancé du Sud"],
      ["GENEVRIER", "Arbuste aux baies bleues"],
      ["AIGUILLE", "Feuille du conifère"],
      ["RESINE", "Sève collante"],
    ],
  },
  {
    "n": "Plantes grimpantes",
    "w": [
      ["LIERRE", "Il couvre les murs"],
      ["GLYCINE", "Grappes mauves"],
      ["CHEVREFEUILLE", "Fleur au parfum sucré"],
      ["CLEMATITE", "Grimpante aux grandes fleurs"],
      ["VIGNE", "Elle donne le raisin"],
      ["HOUBLON", "Plante de la bière"],
      ["JASMIN", "Grimpante parfumée"],
      ["PASSIFLORE", "Fleur de la passion"],
      ["TREILLE", "Support de vigne"],
    ],
  },
  {
    "n": "Succulentes",
    "w": [
      ["ALOES", "Plante au gel apaisant"],
      ["AGAVE", "Grande rosette piquante"],
      ["CACTUS", "Plante à épines"],
      ["ECHEVERIA", "Rosette charnue"],
      ["CRASSULA", "Arbre de jade"],
      ["OPUNTIA", "Figuier de Barbarie"],
      ["EPINE", "Piquant du cactus"],
      ["DESERT", "Milieu aride"],
      ["SEDUM", "Orpin des rocailles"],
      ["JOUBARBE", "Elle pousse sur les toits"],
    ],
  },
  {
    "n": "Plantes d'intérieur",
    "w": [
      ["FICUS", "Plante verte d’appartement"],
      ["MONSTERA", "Feuilles trouées"],
      ["POTHOS", "Plante retombante facile"],
      ["ORCHIDEE", "Fleur d’appartement élégante"],
      ["SANSEVIERIA", "Langue de belle-mère"],
      ["CACHEPOT", "Il habille le pot"],
      ["TERREAU", "Terre pour pots"],
      ["ARROSAGE", "Eau pour les plantes"],
      ["BOUTURE", "Morceau qu’on replante"],
      ["REMPOTAGE", "Changement de pot"],
    ],
  },
  {
    "n": "Fleurs sauvages",
    "w": [
      ["BLEUET", "Fleur bleue des champs"],
      ["PISSENLIT", "On souffle ses graines"],
      ["TREFLE", "À quatre feuilles, porte-bonheur"],
      ["BOUTONDOR", "Petite fleur jaune brillante"],
      ["CAMOMILLE", "Fleur de tisane"],
      ["ACHILLEE", "Fleur des prés en ombelle"],
      ["SCABIEUSE", "Fleur mauve des talus"],
      ["CHARDON", "Fleur piquante"],
      ["DIGITALE", "Fleur en doigts de gant"],
      ["ORTIE", "Elle pique"],
    ],
  },
  {
    "n": "Bulbes",
    "w": [
      ["TULIPE", "Fleur en coupe"],
      ["JONQUILLE", "Fleur jaune trompette"],
      ["CROCUS", "Il perce la neige"],
      ["JACINTHE", "Fleur parfumée en épi"],
      ["NARCISSE", "Fleur blanche au cœur jaune"],
      ["PERCENEIGE", "Première fleur de l’hiver"],
      ["DAHLIA", "Fleur aux nombreux pétales"],
      ["GLAIEUL", "Fleur en épée"],
      ["AMARYLLIS", "Grande fleur d’hiver"],
      ["AIL", "Bulbe de cuisine"],
    ],
  },
  {
    "n": "Mousses et lichens",
    "w": [
      ["MOUSSE", "Tapis vert humide"],
      ["LICHEN", "Algue et champignon associés"],
      ["SPHAIGNE", "Mousse des tourbières"],
      ["TOURBIERE", "Marais acide"],
      ["HUMIDITE", "Ce qu’aime la mousse"],
      ["ROCHER", "Support du lichen"],
      ["ECORCE", "Peau de l’arbre"],
      ["NORD", "Côté où pousse la mousse"],
      ["FOUGERE", "Plante sans fleurs"],
      ["PRELE", "Plante préhistorique"],
    ],
  },
  {
    "n": "Rapaces",
    "w": [
      ["AIGLE", "Rapace royal"],
      ["FAUCON", "Rapace très rapide"],
      ["BUSE", "Rapace des bords de route"],
      ["EPERVIER", "Petit rapace chasseur"],
      ["VAUTOUR", "Charognard planeur"],
      ["MILAN", "Rapace à queue fourchue"],
      ["HIBOU", "Rapace nocturne à aigrettes"],
      ["CHOUETTE", "Rapace nocturne"],
      ["SERRE", "Griffe du rapace"],
      ["FAUCONNIER", "Dresseur de rapaces"],
    ],
  },
  {
    "n": "Oiseaux marins",
    "w": [
      ["MOUETTE", "Oiseau du port"],
      ["GOELAND", "Grande mouette"],
      ["MACAREUX", "Perroquet de mer"],
      ["CORMORAN", "Oiseau plongeur noir"],
      ["FOU", "De Bassan, il plonge"],
      ["ALBATROS", "Grand planeur des mers"],
      ["STERNE", "Hirondelle de mer"],
      ["PETREL", "Oiseau des tempêtes"],
      ["PELICAN", "Bec à poche"],
      ["FREGATE", "Oiseau à gorge rouge"],
    ],
  },
  {
    "n": "Oiseaux exotiques",
    "w": [
      ["FLAMANT", "Rose, il tient sur une patte"],
      ["PAON", "Il fait la roue"],
      ["COLIBRI", "Oiseau-mouche"],
      ["TOUCAN", "Gros bec coloré"],
      ["ARA", "Perroquet coloré"],
      ["CACATOES", "Perroquet à huppe"],
      ["IBIS", "Oiseau sacré égyptien"],
      ["MARABOUT", "Grand échassier africain"],
      ["PERRUCHE", "Petit perroquet"],
    ],
  },
  {
    "n": "Oiseaux du jardin",
    "w": [
      ["MOINEAU", "Petit oiseau brun"],
      ["PINSON", "Gai comme lui"],
      ["SITTELLE", "Elle descend la tête en bas"],
      ["VERDIER", "Oiseau vert-jaune"],
      ["CHARDONNERET", "Oiseau au masque rouge"],
      ["ROITELET", "Plus petit oiseau d’Europe"],
      ["GRIVE", "Oiseau tacheté chanteur"],
      ["TOURTERELLE", "Elle roucoule"],
      ["ETOURNEAU", "Il vole en nuées"],
      ["NICHOIR", "Petite maison pour oiseaux"],
    ],
  },
  {
    "n": "Échassiers",
    "w": [
      ["HERON", "Il pêche immobile"],
      ["CIGOGNE", "Elle apporte les bébés"],
      ["GRUE", "Grand oiseau migrateur"],
      ["AIGRETTE", "Héron blanc"],
      ["SPATULE", "Oiseau au bec plat"],
      ["BECASSE", "Oiseau au long bec"],
      ["VANNEAU", "Oiseau huppé des champs"],
      ["FLAMANT", "Échassier rose"],
      ["BUTOR", "Héron discret des roseaux"],
      ["CHEVALIER", "Petit échassier"],
    ],
  },
  {
    "n": "Canards et cie",
    "w": [
      ["COLVERT", "Canard à tête verte"],
      ["CANETON", "Petit du canard"],
      ["CYGNE", "Grand oiseau blanc"],
      ["OIE", "Elle cacarde"],
      ["SARCELLE", "Petit canard"],
      ["MANDARIN", "Canard très coloré"],
      ["EIDER", "Canard au duvet précieux"],
      ["MARE", "Petite étendue d’eau"],
      ["PALMES", "Pieds du canard"],
      ["PLUMAGE", "Ensemble des plumes"],
    ],
  },
  {
    "n": "Rongeurs",
    "w": [
      ["SOURIS", "Petit rongeur gris"],
      ["ECUREUIL", "Rongeur roux des arbres"],
      ["HAMSTER", "Rongeur aux bajoues"],
      ["MARMOTTE", "Rongeur des montagnes"],
      ["CASTOR", "Rongeur bâtisseur"],
      ["LOIR", "Il dort longtemps"],
      ["MULOT", "Souris des champs"],
      ["CAMPAGNOL", "Petit rongeur des prés"],
      ["CHINCHILLA", "Rongeur à fourrure douce"],
      ["PORCEPIC", "Rongeur à piquants"],
    ],
  },
  {
    "n": "Félins",
    "w": [
      ["LION", "Félin à crinière"],
      ["TIGRE", "Félin rayé"],
      ["LEOPARD", "Félin tacheté"],
      ["GUEPARD", "Félin le plus rapide"],
      ["LYNX", "Félin aux oreilles pointues"],
      ["PUMA", "Couguar"],
      ["JAGUAR", "Félin d’Amérique"],
      ["OCELOT", "Petit félin tacheté"],
      ["SERVAL", "Félin aux grandes oreilles"],
      ["CHAT", "Félin domestique"],
    ],
  },
  {
    "n": "Primates",
    "w": [
      ["GORILLE", "Le plus grand singe"],
      ["CHIMPANZE", "Singe très intelligent"],
      ["ORANGOUTAN", "Homme de la forêt"],
      ["GIBBON", "Singe acrobate"],
      ["BABOUIN", "Singe au museau allongé"],
      ["LEMURIEN", "Primate de Madagascar"],
      ["OUISTITI", "Tout petit singe"],
      ["MACAQUE", "Singe des neiges au Japon"],
      ["MANDRILL", "Singe au visage coloré"],
      ["BONOBO", "Cousin du chimpanzé"],
    ],
  },
  {
    "n": "Cétacés",
    "w": [
      ["BALEINE", "Plus grand animal"],
      ["DAUPHIN", "Cétacé joueur"],
      ["ORQUE", "Baleine tueuse"],
      ["CACHALOT", "Grand cétacé à dents"],
      ["NARVAL", "Licorne des mers"],
      ["BELUGA", "Baleine blanche"],
      ["MARSOUIN", "Petit cétacé"],
      ["EVENT", "Narine sur le dos"],
      ["FANON", "Lame de la bouche"],
      ["CHANT", "Celui des baleines"],
    ],
  },
  {
    "n": "Marsupiaux",
    "w": [
      ["KANGOUROU", "Grand sauteur"],
      ["KOALA", "Dormeur des eucalyptus"],
      ["WALLABY", "Petit kangourou"],
      ["WOMBAT", "Marsupial fouisseur"],
      ["OPOSSUM", "Marsupial d’Amérique"],
      ["DIABLE", "De Tasmanie"],
      ["POCHE", "Marsupium"],
      ["QUOKKA", "Marsupial souriant"],
      ["PHALANGER", "Marsupial planeur"],
      ["BANDICOOT", "Petit marsupial"],
    ],
  },
  {
    "n": "Animaux nocturnes",
    "w": [
      ["HIBOU", "Il hulule la nuit"],
      ["CHAUVESOURIS", "Elle vole la nuit"],
      ["HERISSON", "Il cherche des limaces la nuit"],
      ["LUCIOLE", "Elle brille"],
      ["RENARD", "Il rôde au crépuscule"],
      ["BLAIREAU", "Il sort la nuit"],
      ["LOIR", "Petit dormeur"],
      ["PAPILLON", "De nuit, attiré par la lumière"],
      ["CHOUETTE", "Elle chasse dans l’obscurité"],
      ["RATONLAVEUR", "Masqué nocturne"],
    ],
  },
  {
    "n": "Hibernation",
    "w": [
      ["OURS", "Il dort tout l’hiver"],
      ["MARMOTTE", "Grande dormeuse"],
      ["LOIR", "Dormeur proverbial"],
      ["HERISSON", "Il hiberne sous les feuilles"],
      ["TERRIER", "Abri souterrain"],
      ["TORPEUR", "Sommeil profond"],
      ["RESERVES", "Graisse pour l’hiver"],
      ["TANIERE", "Abri de l’ours"],
      ["REVEIL", "Au printemps"],
      ["LEROT", "Cousin du loir"],
    ],
  },
  {
    "n": "Mare",
    "w": [
      ["TETARD", "Bébé grenouille"],
      ["NENUPHAR", "Feuille flottante"],
      ["CRAPAUD", "Cousin de la grenouille"],
      ["TRITON", "Petit amphibien à queue"],
      ["GERRIS", "Il marche sur l’eau"],
      ["DYTIQUE", "Coléoptère aquatique"],
      ["ROSEAU", "Plante des berges"],
      ["LENTILLE", "D’eau, minuscule plante"],
      ["LIBELLULE", "Elle survole l’eau"],
      ["SALAMANDRE", "Amphibien tacheté"],
    ],
  },
  {
    "n": "Mollusques",
    "w": [
      ["ESCARGOT", "Il bave et a une coquille"],
      ["LIMACE", "Escargot sans coquille"],
      ["POULPE", "Huit bras"],
      ["CALAMAR", "Céphalopode"],
      ["SEICHE", "Elle projette de l’encre"],
      ["HUITRE", "Elle fabrique la perle"],
      ["MOULE", "Coquillage noir"],
      ["COQUILLE", "Saint-Jacques"],
      ["BIGORNEAU", "Petit coquillage spiralé"],
      ["PALOURDE", "Coquillage des plages"],
    ],
  },
  {
    "n": "Crustacés",
    "w": [
      ["CRABE", "Il marche de côté"],
      ["HOMARD", "Il a de grosses pinces"],
      ["LANGOUSTE", "Crustacé sans pinces"],
      ["CREVETTE", "Petit crustacé rose"],
      ["ECREVISSE", "Crustacé d’eau douce"],
      ["PINCE", "Arme du crabe"],
      ["CARAPACE", "Armure du crustacé"],
      ["BERNARD", "L’ermite"],
      ["KRILL", "Nourriture des baleines"],
      ["TOURTEAU", "Gros crabe"],
    ],
  },
  {
    "n": "Coquillages",
    "w": [
      ["NACRE", "Intérieur brillant"],
      ["CONQUE", "Coquillage qu’on souffle"],
      ["COQUE", "Coquillage des sables"],
      ["PATELLE", "Chapeau chinois"],
      ["CAURI", "Coquillage monnaie"],
      ["OURSIN", "Boule à piquants"],
      ["NAUTILE", "Coquillage spiralé"],
      ["ETOILE", "De mer"],
      ["BULOT", "Gros escargot de mer"],
      ["PERLE", "Née dans l’huître"],
    ],
  },
  {
    "n": "Araignées et cie",
    "w": [
      ["ARAIGNEE", "Huit pattes"],
      ["TOILE", "Elle la tisse"],
      ["TARENTULE", "Grosse araignée velue"],
      ["MYGALE", "Araignée géante"],
      ["FAUCHEUX", "Araignée aux longues pattes"],
      ["SOIE", "Fil de l’araignée"],
      ["SCORPION", "Il a un dard"],
      ["ACARIEN", "Minuscule habitant des tapis"],
      ["TIQUE", "Elle s’accroche"],
      ["ROSEE", "Sur la toile au matin"],
    ],
  },
  {
    "n": "Animaux légendaires",
    "w": [
      ["LICORNE", "Cheval à corne"],
      ["PHENIX", "Il renaît de ses cendres"],
      ["DRAGON", "Il crache du feu"],
      ["GRIFFON", "Aigle et lion"],
      ["SIRENE", "Femme poisson"],
      ["CENTAURE", "Homme cheval"],
      ["PEGASE", "Cheval ailé"],
      ["KRAKEN", "Monstre des mers"],
      ["YETI", "Homme des neiges"],
      ["MINOTAURE", "Homme taureau"],
    ],
  },
  {
    "n": "Habitats",
    "w": [
      ["NID", "Maison de l’oiseau"],
      ["TERRIER", "Maison du lapin"],
      ["RUCHE", "Maison des abeilles"],
      ["TANIERE", "Repaire du loup"],
      ["FOURMILIERE", "Maison des fourmis"],
      ["HUTTE", "Maison du castor"],
      ["ETABLE", "Maison de la vache"],
      ["CLAPIER", "Cabane à lapins"],
      ["POULAILLER", "Maison des poules"],
      ["ECURIE", "Maison du cheval"],
    ],
  },
  {
    "n": "Nuages",
    "w": [
      ["CUMULUS", "Nuage en chou-fleur"],
      ["CIRRUS", "Nuage en filaments"],
      ["STRATUS", "Nuage en couche grise"],
      ["NIMBUS", "Nuage de pluie"],
      ["CUMULONIMBUS", "Nuage d’orage"],
      ["BROUILLARD", "Nuage au sol"],
      ["ALTOSTRATUS", "Voile d’altitude moyenne"],
      ["MOUTONS", "Petits nuages"],
      ["CIEL", "Il porte les nuages"],
      ["CONDENSATION", "Formation des gouttes"],
    ],
  },
  {
    "n": "Vents",
    "w": [
      ["MISTRAL", "Vent du Rhône"],
      ["TRAMONTANE", "Vent du Roussillon"],
      ["SIROCCO", "Vent chaud du Sahara"],
      ["ALIZE", "Vent régulier des tropiques"],
      ["BISE", "Vent froid du nord"],
      ["ZEPHYR", "Brise légère"],
      ["FOEHN", "Vent chaud des Alpes"],
      ["TORNADE", "Tourbillon violent"],
      ["OURAGAN", "Tempête tropicale"],
      ["GIROUETTE", "Elle indique le vent"],
    ],
  },
  {
    "n": "Phénomènes lumineux",
    "w": [
      ["ARCENCIEL", "Après la pluie"],
      ["AURORE", "Boréale ou australe"],
      ["HALO", "Cercle autour de la lune"],
      ["MIRAGE", "Illusion de chaleur"],
      ["ECLAIR", "Flash de l’orage"],
      ["REFLET", "Image sur l’eau"],
      ["SCINTILLEMENT", "Étoiles qui tremblent"],
      ["CREPUSCULE", "Lumière du soir"],
      ["GLOIRE", "Auréole autour de l’ombre"],
    ],
  },
  {
    "n": "Géologie",
    "w": [
      ["ROCHE", "Matériau de la Terre"],
      ["CALCAIRE", "Roche blanche"],
      ["GRES", "Roche de sable"],
      ["ARGILE", "Terre à modeler"],
      ["SCHISTE", "Roche en feuillets"],
      ["SEDIMENT", "Dépôt au fond de l’eau"],
      ["FOSSILE", "Trace ancienne"],
      ["SEISME", "Tremblement de terre"],
      ["FAILLE", "Cassure de l’écorce"],
      ["MINERAL", "Il compose la roche"],
    ],
  },
  {
    "n": "Eau",
    "w": [
      ["GLACE", "Eau solide"],
      ["VAPEUR", "Eau gazeuse"],
      ["GOUTTE", "Petite quantité"],
      ["SOURCE", "Où naît l’eau"],
      ["NAPPE", "Phréatique, sous terre"],
      ["EVAPORATION", "L’eau devient vapeur"],
      ["PLUIE", "Eau du ciel"],
      ["OCEAN", "Grande étendue salée"],
      ["FILTRE", "Il purifie"],
      ["ROBINET", "On l’ouvre pour boire"],
    ],
  },
  {
    "n": "Agrumes",
    "w": [
      ["ORANGE", "Agrume juteux"],
      ["CITRON", "Agrume jaune acide"],
      ["PAMPLEMOUSSE", "Gros agrume amer"],
      ["MANDARINE", "Petit agrume"],
      ["CLEMENTINE", "Agrume de Noël"],
      ["BERGAMOTE", "Agrume du thé Earl Grey"],
      ["YUZU", "Agrume japonais"],
      ["KUMQUAT", "Agrume qu’on mange avec la peau"],
      ["LIME", "Citron vert"],
      ["ZESTE", "Peau râpée"],
    ],
  },
  {
    "n": "Fruits rouges",
    "w": [
      ["FRAISE", "Fruit du printemps"],
      ["FRAMBOISE", "Fruit rouge velouté"],
      ["GROSEILLE", "Petites perles rouges"],
      ["CASSIS", "Baie noire"],
      ["MURE", "Baie des ronces"],
      ["MYRTILLE", "Baie bleue"],
      ["CANNEBERGE", "Baie acidulée"],
      ["CERISE", "Fruit à queue"],
      ["AIRELLE", "Baie des montagnes"],
      ["SUREAU", "Baies noires en ombelles"],
    ],
  },
  {
    "n": "Légumes racines",
    "w": [
      ["CAROTTE", "Racine orange"],
      ["PANAIS", "Racine blanche sucrée"],
      ["NAVET", "Racine ronde"],
      ["RADIS", "Petite racine piquante"],
      ["BETTERAVE", "Racine rouge"],
      ["CELERI", "Rave, en rémoulade"],
      ["TOPINAMBOUR", "Racine oubliée"],
      ["SALSIFIS", "Racine longue et noire"],
      ["PATATE", "Douce, orange"],
      ["GINGEMBRE", "Racine épicée"],
    ],
  },
  {
    "n": "Légumineuses",
    "w": [
      ["LENTILLE", "Petite graine plate"],
      ["POISCHICHE", "Base du houmous"],
      ["HARICOT", "Rouge, blanc ou vert"],
      ["FEVE", "On la cache dans la galette"],
      ["SOJA", "Graine du tofu"],
      ["FLAGEOLET", "Petit haricot vert pâle"],
      ["PETITPOIS", "Graine verte ronde"],
      ["ARACHIDE", "Cacahuète"],
      ["LUPIN", "Graine jaune"],
      ["COSSE", "Enveloppe des pois"],
    ],
  },
  {
    "n": "Courges",
    "w": [
      ["POTIRON", "Grosse courge orange"],
      ["CITROUILLE", "Courge d’Halloween"],
      ["COURGETTE", "Courge verte allongée"],
      ["BUTTERNUT", "Courge en forme de poire"],
      ["POTIMARRON", "Courge au goût de châtaigne"],
      ["PATISSON", "Courge en soucoupe"],
      ["CONCOMBRE", "Cousin des courges"],
      ["MELON", "Fruit de la même famille"],
      ["SPAGHETTI", "Courge aux filaments"],
      ["VELOUTE", "Soupe de courge"],
    ],
  },
  {
    "n": "Salades",
    "w": [
      ["LAITUE", "Salade tendre"],
      ["ROQUETTE", "Salade poivrée"],
      ["MACHE", "Petite salade d’hiver"],
      ["ENDIVE", "Chicon"],
      ["FRISEE", "Salade aux feuilles bouclées"],
      ["SCAROLE", "Chicorée large"],
      ["CRESSON", "Salade des fontaines"],
      ["VINAIGRETTE", "Sauce de la salade"],
      ["CROUTONS", "Petits pains grillés"],
      ["ESSOREUSE", "Elle sèche la salade"],
    ],
  },
  {
    "n": "Pains du monde",
    "w": [
      ["BAGUETTE", "Pain français"],
      ["NAAN", "Pain indien"],
      ["PITA", "Pain à poche"],
      ["FOCACCIA", "Pain italien à l’huile"],
      ["BRETZEL", "Pain noué"],
      ["BAGEL", "Pain en anneau"],
      ["CIABATTA", "Pain en pantoufle"],
      ["TORTILLA", "Galette mexicaine"],
      ["PAINDEMIE", "Pain de mie"],
      ["FOUGASSE", "Pain provençal ajouré"],
    ],
  },
  {
    "n": "Biscuits",
    "w": [
      ["SABLE", "Biscuit au beurre"],
      ["SPECULOOS", "Biscuit à la cannelle"],
      ["MACARON", "Biscuit coloré"],
      ["TUILE", "Biscuit fin incurvé"],
      ["CIGARETTE", "Biscuit roulé"],
      ["BOUDOIR", "Biscuit à cuillère"],
      ["FINANCIER", "Petit gâteau aux amandes"],
      ["PALMIER", "Biscuit feuilleté en cœur"],
      ["COOKIE", "Biscuit aux pépites"],
      ["BISCOTTE", "Pain grillé croquant"],
    ],
  },
  {
    "n": "Bonbons",
    "w": [
      ["GUIMAUVE", "Bonbon moelleux"],
      ["REGLISSE", "Bonbon noir"],
      ["CARAMEL", "Bonbon doré"],
      ["NOUGAT", "Spécialité de Montélimar"],
      ["SUCETTE", "Bonbon sur bâton"],
      ["DRAGEE", "Amande sucrée des baptêmes"],
      ["BERLINGOT", "Bonbon de Carpentras"],
      ["CALISSON", "Bonbon d’Aix"],
      ["PATE", "De fruits"],
      ["SUCREDORGE", "Bâton sucré"],
    ],
  },
  {
    "n": "Glaces",
    "w": [
      ["SORBET", "Glace aux fruits sans lait"],
      ["CORNET", "Gaufrette conique"],
      ["BOULE", "Portion de glace"],
      ["VANILLE", "Parfum classique"],
      ["CHANTILLY", "Crème fouettée"],
      ["COUPE", "Glace en verre"],
      ["SUNDAE", "Glace nappée"],
      ["ESQUIMAU", "Glace sur bâton"],
      ["GRANITE", "Glace pilée"],
      ["GLACIER", "Il vend des glaces"],
    ],
  },
  {
    "n": "Soupes",
    "w": [
      ["VELOUTE", "Soupe onctueuse"],
      ["GASPACHO", "Soupe froide espagnole"],
      ["MINESTRONE", "Soupe italienne aux légumes"],
      ["BOUILLON", "Liquide de cuisson parfumé"],
      ["POTAGE", "Soupe du soir"],
      ["CONSOMME", "Bouillon clair"],
      ["BISQUE", "Soupe de crustacés"],
      ["SOUPEALOIGNON", "Soupe gratinée"],
      ["LOUCHE", "Elle sert la soupe"],
      ["SOUPIERE", "Récipient de service"],
    ],
  },
  {
    "n": "Sauces",
    "w": [
      ["BECHAMEL", "Sauce blanche"],
      ["MAYONNAISE", "Sauce aux œufs et à l’huile"],
      ["VINAIGRETTE", "Sauce à salade"],
      ["PESTO", "Sauce au basilic"],
      ["KETCHUP", "Sauce tomate sucrée"],
      ["AIOLI", "Sauce à l’ail"],
      ["BEARNAISE", "Sauce à l’estragon"],
      ["HOLLANDAISE", "Sauce au beurre et citron"],
      ["TARTARE", "Sauce aux câpres"],
      ["MOUTARDE", "Condiment de Dijon"],
    ],
  },
  {
    "n": "Pâtes",
    "w": [
      ["SPAGHETTI", "Pâtes longues"],
      ["PENNE", "Pâtes en tube"],
      ["FARFALLE", "Pâtes papillon"],
      ["RAVIOLI", "Pâtes farcies"],
      ["TAGLIATELLE", "Pâtes en ruban"],
      ["LASAGNE", "Pâtes en feuilles"],
      ["GNOCCHI", "Petites boules de pomme de terre"],
      ["FUSILLI", "Pâtes en spirale"],
      ["MACARONI", "Petits tubes"],
      ["TORTELLINI", "Petites pâtes farcies en anneau"],
    ],
  },
  {
    "n": "Cuisine asiatique",
    "w": [
      ["WOK", "Poêle profonde"],
      ["TOFU", "Pâté de soja"],
      ["NOUILLES", "Pâtes asiatiques"],
      ["SUSHI", "Riz et poisson cru"],
      ["GYOZA", "Ravioli grillé"],
      ["MISO", "Pâte fermentée"],
      ["TERIYAKI", "Sauce sucrée-salée"],
      ["CURRY", "Plat épicé"],
      ["CITRONNELLE", "Herbe parfumée"],
      ["LAIT", "De coco"],
    ],
  },
  {
    "n": "Cuisine indienne",
    "w": [
      ["NAAN", "Pain cuit au four tandoor"],
      ["TANDOORI", "Cuisson au four d’argile"],
      ["DAHL", "Plat de lentilles"],
      ["BIRYANI", "Riz épicé"],
      ["SAMOSA", "Beignet triangulaire"],
      ["LASSI", "Boisson au yaourt"],
      ["CHUTNEY", "Condiment sucré-salé"],
      ["GARAM", "Masala, mélange d’épices"],
      ["PANEER", "Fromage frais indien"],
      ["RAITA", "Sauce au yaourt et concombre"],
    ],
  },
  {
    "n": "Cuisine libanaise",
    "w": [
      ["HOUMOUS", "Purée de pois chiches"],
      ["TABOULE", "Salade au persil"],
      ["FALAFEL", "Boulette frite"],
      ["PITA", "Pain rond"],
      ["BABAGANOUSH", "Caviar d’aubergine"],
      ["BAKLAVA", "Pâtisserie au miel"],
      ["KEBBE", "Boulette de boulgour"],
      ["ZAATAR", "Mélange au thym"],
      ["FATTOUCH", "Salade au pain grillé"],
      ["MEZZE", "Petites entrées variées"],
    ],
  },
  {
    "n": "Cuisine québécoise",
    "w": [
      ["POUTINE", "Frites, fromage et sauce"],
      ["TOURTIERE", "Pâté de viande"],
      ["PUDDING", "Chômeur, dessert sucré"],
      ["CRETONS", "Tartinade de porc"],
      ["FEVES", "Au lard"],
      ["TIRE", "Sur la neige"],
      ["SUCRE", "À la crème"],
      ["GRANDPERES", "Dans le sirop"],
      ["BEIGNES", "Beignets"],
      ["BLEUETS", "Petites baies bleues"],
    ],
  },
  {
    "n": "Ustensiles",
    "w": [
      ["SPATULE", "Elle retourne"],
      ["ECUMOIRE", "Grande cuillère trouée"],
      ["PASSOIRE", "Elle égoutte"],
      ["ECONOME", "Il épluche"],
      ["RAPE", "Elle râpe le fromage"],
      ["ROULEAU", "À pâtisserie"],
      ["BALANCE", "Elle pèse"],
      ["CHINOIS", "Passoire fine conique"],
      ["MANDOLINE", "Elle tranche finement"],
      ["PILON", "Il écrase dans le mortier"],
    ],
  },
  {
    "n": "Vaisselle",
    "w": [
      ["ASSIETTE", "On y sert le repas"],
      ["VERRE", "On y boit"],
      ["TASSE", "Pour le thé"],
      ["BOL", "Pour la soupe"],
      ["SAUCIERE", "Pour la sauce"],
      ["SALADIER", "Pour la salade"],
      ["PLAT", "De service"],
      ["CARAFE", "Pour l’eau"],
      ["SOUCOUPE", "Sous la tasse"],
      ["THEIERE", "Pour infuser"],
    ],
  },
  {
    "n": "Électroménager",
    "w": [
      ["FRIGO", "Il garde au frais"],
      ["FOUR", "Il cuit"],
      ["MICROONDES", "Il réchauffe vite"],
      ["GRILLEPAIN", "Il dore les tartines"],
      ["BOUILLOIRE", "Elle chauffe l’eau"],
      ["MIXEUR", "Il mélange"],
      ["CAFETIERE", "Elle prépare le café"],
      ["ASPIRATEUR", "Il aspire la poussière"],
      ["LAVELINGE", "Il lave les vêtements"],
      ["CONGELATEUR", "Il garde au froid"],
    ],
  },
  {
    "n": "Marché",
    "w": [
      ["ETAL", "Table du marchand"],
      ["CAGEOT", "Caisse de fruits"],
      ["PRIMEUR", "Marchand de légumes"],
      ["PANIER", "On y met ses achats"],
      ["BALANCE", "Elle pèse les fruits"],
      ["MONNAIE", "Pièces rendues"],
      ["FROMAGER", "Marchand de fromages"],
      ["POISSONNIER", "Marchand de poissons"],
      ["FLEURISTE", "Marchande de fleurs"],
      ["SAISON", "Fruits de..."],
    ],
  },
  {
    "n": "Restaurant",
    "w": [
      ["SERVEUR", "Il apporte les plats"],
      ["MENU", "Liste des plats"],
      ["ENTREE", "Premier plat"],
      ["DESSERT", "Fin du repas"],
      ["ADDITION", "On la paie"],
      ["CHEF", "Il dirige la cuisine"],
      ["POURBOIRE", "Petit supplément"],
      ["TERRASSE", "Tables dehors"],
      ["RESERVATION", "Table retenue"],
      ["NAPPE", "Elle couvre la table"],
    ],
  },
  {
    "n": "Café et barista",
    "w": [
      ["EXPRESSO", "Café serré"],
      ["CAPPUCCINO", "Café mousseux"],
      ["LATTE", "Café au lait"],
      ["ARABICA", "Variété de café"],
      ["MOUTURE", "Café moulu"],
      ["TORREFACTION", "Grillage des grains"],
      ["BARISTA", "Expert du café"],
      ["MOUSSE", "De lait"],
      ["GRAIN", "De café"],
      ["TASSE", "On y boit le café"],
    ],
  },
  {
    "n": "Thés du monde",
    "w": [
      ["MATCHA", "Thé vert en poudre"],
      ["SENCHA", "Thé vert japonais"],
      ["DARJEELING", "Thé noir indien"],
      ["EARLGREY", "Thé à la bergamote"],
      ["ROOIBOS", "Thé rouge sans théine"],
      ["OOLONG", "Thé semi-oxydé"],
      ["CHAI", "Thé épicé"],
      ["MENTHE", "Thé à la marocaine"],
      ["THEIERE", "Elle infuse"],
      ["INFUSION", "Temps de pause"],
    ],
  },
  {
    "n": "Boissons fraîches",
    "w": [
      ["CITRONNADE", "Boisson au citron"],
      ["ORANGEADE", "Boisson à l’orange"],
      ["SMOOTHIE", "Fruits mixés"],
      ["MILKSHAKE", "Lait frappé"],
      ["GLACON", "Cube de glace"],
      ["PAILLE", "Pour aspirer"],
      ["GRENADINE", "Sirop rouge"],
      ["MENTHE", "À l’eau, boisson verte"],
      ["THEGLACE", "Thé froid"],
      ["DIABOLO", "Limonade et sirop"],
    ],
  },
  {
    "n": "Condiments",
    "w": [
      ["MOUTARDE", "Condiment de Dijon"],
      ["CORNICHON", "Petit concombre au vinaigre"],
      ["CAPRE", "Bouton floral au vinaigre"],
      ["VINAIGRE", "Liquide acide"],
      ["OLIVE", "Fruit noir ou vert"],
      ["KETCHUP", "Sauce tomate"],
      ["RELISH", "Condiment haché"],
      ["CHUTNEY", "Condiment aux fruits"],
      ["SAUCESOJA", "Sauce salée asiatique"],
      ["WASABI", "Raifort japonais"],
    ],
  },
  {
    "n": "Produits laitiers",
    "w": [
      ["LAIT", "Boisson blanche"],
      ["BEURRE", "On le tartine"],
      ["CREME", "Fraîche ou liquide"],
      ["YAOURT", "Lait fermenté"],
      ["FROMAGE", "Il y en a des centaines"],
      ["FAISSELLE", "Fromage blanc égoutté"],
      ["KEFIR", "Lait fermenté pétillant"],
      ["PETITSUISSE", "Petit fromage frais"],
      ["LACTOSE", "Sucre du lait"],
      ["LAITERIE", "Où l’on transforme le lait"],
    ],
  },
  {
    "n": "Œufs",
    "w": [
      ["COQUILLE", "Enveloppe de l’œuf"],
      ["JAUNE", "Centre de l’œuf"],
      ["BLANC", "Il monte en neige"],
      ["OMELETTE", "Œufs battus cuits"],
      ["COQUE", "Œuf à la..., avec mouillettes"],
      ["POCHE", "Œuf cuit dans l’eau"],
      ["BROUILLES", "Œufs remués"],
      ["MIROIR", "Œuf au plat"],
      ["MOUILLETTE", "Pain trempé"],
      ["COQUETIER", "Support de l’œuf"],
    ],
  },
  {
    "n": "Fruits de mer",
    "w": [
      ["HUITRE", "Coquillage à perle"],
      ["MOULE", "Coquillage noir"],
      ["CREVETTE", "Petit crustacé"],
      ["LANGOUSTINE", "Crustacé à pinces fines"],
      ["SAINTJACQUES", "Coquille noble"],
      ["CRABE", "Crustacé à pinces"],
      ["OURSIN", "Boule à piquants"],
      ["PLATEAU", "De fruits de mer"],
      ["COQUE", "Petit coquillage"],
      ["BULOT", "Escargot de mer"],
    ],
  },
  {
    "n": "Gâteaux de fête",
    "w": [
      ["BUCHE", "Gâteau de Noël"],
      ["GALETTE", "Gâteau des rois"],
      ["FRAISIER", "Gâteau aux fraises"],
      ["PIECEMONTEE", "Gâteau de mariage"],
      ["FORETNOIRE", "Gâteau aux cerises"],
      ["OPERA", "Gâteau café-chocolat"],
      ["SAVARIN", "Gâteau imbibé en couronne"],
      ["PARISBREST", "Gâteau en roue"],
      ["CHARLOTTE", "Gâteau aux biscuits"],
      ["MOELLEUX", "Gâteau fondant"],
    ],
  },
  {
    "n": "Crêperie",
    "w": [
      ["CREPE", "Pâte fine sucrée"],
      ["GALETTE", "Crêpe salée de sarrasin"],
      ["BILIG", "Plaque à crêpes"],
      ["ROZELL", "Râteau à crêpe"],
      ["CIDRE", "Boisson bretonne"],
      ["BOLEE", "Tasse à cidre"],
      ["CARAMEL", "Au beurre salé"],
      ["SUZETTE", "Crêpe flambée"],
      ["COMPLETE", "Jambon, œuf, fromage"],
      ["FROMENT", "Farine de blé"],
    ],
  },
  {
    "n": "Pizzeria",
    "w": [
      ["PIZZA", "Galette garnie"],
      ["FOUR", "À bois"],
      ["PATE", "Base de la pizza"],
      ["MOZZARELLA", "Fromage filant"],
      ["ORIGAN", "Herbe aromatique"],
      ["MARGHERITA", "Tomate, mozzarella, basilic"],
      ["CALZONE", "Pizza pliée"],
      ["PIZZAIOLO", "Il fait les pizzas"],
      ["TOMATE", "Sauce rouge"],
      ["OLIVES", "Noires sur la pizza"],
    ],
  },
  {
    "n": "Sandwichs",
    "w": [
      ["JAMBONBEURRE", "Classique parisien"],
      ["CLUB", "Sandwich en étages"],
      ["PANINI", "Sandwich grillé italien"],
      ["WRAP", "Galette roulée"],
      ["HAMBURGER", "Sandwich rond au steak"],
      ["CROQUE", "Monsieur ou madame"],
      ["BAGNAT", "Pan bagnat niçois"],
      ["FALAFEL", "En sandwich pita"],
      ["BAGUETTE", "Pain du sandwich"],
      ["GARNITURE", "Ce qu’on met dedans"],
    ],
  },
  {
    "n": "Saveurs",
    "w": [
      ["SUCRE", "Saveur des bonbons"],
      ["SALE", "Saveur des chips"],
      ["ACIDE", "Saveur du citron"],
      ["AMER", "Saveur du café noir"],
      ["UMAMI", "Cinquième saveur"],
      ["EPICE", "Qui pique"],
      ["DOUX", "Sans force"],
      ["FUME", "Goût de feu de bois"],
      ["ACIDULE", "Légèrement acide"],
      ["SUCRESALE", "Mélange des deux"],
    ],
  },
  {
    "n": "Textures",
    "w": [
      ["CROQUANT", "Qui fait crac"],
      ["MOELLEUX", "Doux et tendre"],
      ["FONDANT", "Qui fond en bouche"],
      ["CROUSTILLANT", "Qui craque légèrement"],
      ["ONCTUEUX", "Riche et crémeux"],
      ["MOUSSEUX", "Plein de bulles"],
      ["GRANULEUX", "Avec des grains"],
      ["SOYEUX", "Doux comme la soie"],
      ["VELOUTE", "Lisse et doux"],
      ["GLUANT", "Qui colle"],
    ],
  },
  {
    "n": "Chambre",
    "w": [
      ["LIT", "On y dort"],
      ["ARMOIRE", "Elle range les vêtements"],
      ["COMMODE", "Meuble à tiroirs"],
      ["TABLEDENUIT", "À côté du lit"],
      ["RIDEAU", "Il cache la fenêtre"],
      ["MATELAS", "Base moelleuse du lit"],
      ["TRAVERSIN", "Long oreiller"],
      ["REVEIL", "Il sonne le matin"],
      ["CHEVET", "Lampe de..."],
      ["PENDERIE", "Placard à cintres"],
    ],
  },
  {
    "n": "Salon",
    "w": [
      ["CANAPE", "Siège moelleux"],
      ["FAUTEUIL", "Siège individuel"],
      ["TELEVISION", "Écran du salon"],
      ["BIBLIOTHEQUE", "Meuble à livres"],
      ["TABLEBASSE", "Petite table du salon"],
      ["POUF", "Siège sans dossier"],
      ["CHEMINEE", "Foyer"],
      ["TAPIS", "Il réchauffe le sol"],
      ["COUSSIN", "Petit oreiller décoratif"],
      ["LAMPADAIRE", "Lampe sur pied"],
    ],
  },
  {
    "n": "Ménage",
    "w": [
      ["BALAI", "Il balaie"],
      ["SERPILLIERE", "Elle lave le sol"],
      ["PLUMEAU", "Il chasse la poussière"],
      ["CHIFFON", "Tissu pour essuyer"],
      ["SEAU", "Récipient d’eau"],
      ["EPONGE", "Elle frotte"],
      ["POUSSIERE", "Elle se dépose"],
      ["ASPIRATEUR", "Il aspire"],
      ["PELLE", "Avec la balayette"],
      ["VITRES", "On les fait briller"],
    ],
  },
  {
    "n": "Lessive",
    "w": [
      ["LINGE", "Vêtements à laver"],
      ["ETENDOIR", "Il sèche le linge"],
      ["PINCE", "À linge"],
      ["FER", "À repasser"],
      ["REPASSAGE", "Défroissage du linge"],
      ["ADOUCISSANT", "Il rend le linge doux"],
      ["PANIER", "À linge sale"],
      ["TACHE", "Elle doit partir"],
      ["ESSORAGE", "Rotation rapide"],
      ["LESSIVE", "Produit de lavage"],
    ],
  },
  {
    "n": "Déménagement",
    "w": [
      ["CARTON", "Boîte du déménagement"],
      ["CAMION", "Il transporte les meubles"],
      ["SCOTCH", "Il ferme les cartons"],
      ["ETIQUETTE", "Elle indique le contenu"],
      ["DEMENAGEUR", "Il porte les meubles"],
      ["CLES", "Celles du nouveau logement"],
      ["ETAGE", "Il faut le monter"],
      ["INVENTAIRE", "Liste des affaires"],
      ["EMBALLAGE", "Papier bulle"],
      ["CREMAILLERE", "Fête du nouveau logement"],
    ],
  },
  {
    "n": "Décoration",
    "w": [
      ["CADRE", "Il entoure le tableau"],
      ["VASE", "Il accueille les fleurs"],
      ["MIROIR", "Il agrandit la pièce"],
      ["GUIRLANDE", "Lumineuse ou en papier"],
      ["BOUGEOIR", "Support de bougie"],
      ["POTERIE", "Objet en terre cuite"],
      ["TENTURE", "Tissu mural"],
      ["PAPIERPEINT", "Revêtement mural"],
      ["BIBELOT", "Petit objet décoratif"],
      ["TABLEAU", "Œuvre accrochée"],
    ],
  },
  {
    "n": "Lumières",
    "w": [
      ["AMPOULE", "Elle s’allume"],
      ["LUSTRE", "Luminaire suspendu"],
      ["APPLIQUE", "Lampe murale"],
      ["VEILLEUSE", "Petite lumière de nuit"],
      ["LANTERNE", "Lampe portable"],
      ["BOUGIE", "Flamme de cire"],
      ["INTERRUPTEUR", "Il allume"],
      ["ABATJOUR", "Il adoucit la lumière"],
      ["LAMPION", "Lanterne de papier"],
      ["LUMIERE", "Ce qui éclaire"],
    ],
  },
  {
    "n": "Meubles",
    "w": [
      ["TABLE", "On y mange"],
      ["CHAISE", "On s’y assoit"],
      ["BUFFET", "Meuble de salle à manger"],
      ["TABOURET", "Siège sans dossier"],
      ["BUREAU", "Table de travail"],
      ["ETAGERE", "Planche de rangement"],
      ["BANC", "Siège long"],
      ["VAISSELIER", "Meuble à vaisselle"],
      ["SECRETAIRE", "Bureau à abattant"],
      ["BERCEUSE", "Chaise qui se balance"],
    ],
  },
  {
    "n": "Rangement",
    "w": [
      ["BOITE", "Elle contient"],
      ["TIROIR", "Il coulisse"],
      ["PLACARD", "Armoire encastrée"],
      ["PANIER", "En osier"],
      ["CASIER", "Compartiment"],
      ["CROCHET", "Pour suspendre"],
      ["CINTRE", "Pour les vêtements"],
      ["MALLE", "Grand coffre"],
      ["ETIQUETTE", "Pour s’y retrouver"],
      ["CARTON", "Boîte en papier fort"],
    ],
  },
  {
    "n": "Bureau",
    "w": [
      ["AGENDA", "Il note les rendez-vous"],
      ["CLASSEUR", "Il range les documents"],
      ["LAMPE", "De bureau"],
      ["AGRAFEUSE", "Elle attache les feuilles"],
      ["CALCULATRICE", "Elle compte"],
      ["IMPRIMANTE", "Elle sort les pages"],
      ["POSTIT", "Petite note collante"],
      ["CORBEILLE", "Pour les papiers"],
      ["CHAISE", "De bureau"],
      ["REUNION", "Rencontre de travail"],
    ],
  },
  {
    "n": "Plomberie",
    "w": [
      ["TUYAU", "Il conduit l’eau"],
      ["ROBINET", "Il s’ouvre"],
      ["FUITE", "Goutte qui s’échappe"],
      ["JOINT", "Il assure l’étanchéité"],
      ["SIPHON", "Sous l’évier"],
      ["EVIER", "Bac de cuisine"],
      ["CHAUFFEEAU", "Ballon d’eau chaude"],
      ["PLOMBIER", "Il répare les fuites"],
      ["CLE", "À molette"],
      ["VANNE", "Elle coupe l’eau"],
    ],
  },
  {
    "n": "Électricité",
    "w": [
      ["PRISE", "On y branche"],
      ["FIL", "Conducteur"],
      ["FUSIBLE", "Il protège le circuit"],
      ["DISJONCTEUR", "Il coupe le courant"],
      ["AMPOULE", "Elle éclaire"],
      ["PILE", "Petite source d’énergie"],
      ["BATTERIE", "Elle se recharge"],
      ["COURANT", "Électrique"],
      ["ELECTRICIEN", "Il installe les circuits"],
      ["RALLONGE", "Câble plus long"],
    ],
  },
  {
    "n": "Chauffage",
    "w": [
      ["RADIATEUR", "Il chauffe la pièce"],
      ["POELE", "À bois"],
      ["CHAUDIERE", "Elle chauffe l’eau"],
      ["THERMOSTAT", "Il règle la température"],
      ["BOUILLOTTE", "Elle chauffe le lit"],
      ["BUCHE", "Morceau de bois"],
      ["ISOLATION", "Elle garde la chaleur"],
      ["CHALEUR", "Ce qu’on cherche l’hiver"],
      ["COUVERTURE", "Elle réchauffe"],
      ["PLAID", "Petite couverture"],
    ],
  },
  {
    "n": "Bébé",
    "w": [
      ["BIBERON", "Bouteille du bébé"],
      ["TETINE", "Elle apaise"],
      ["COUCHE", "Change du bébé"],
      ["LANDAU", "Voiture d’enfant"],
      ["BERCEAU", "Lit qui se balance"],
      ["HOCHET", "Jouet qui fait du bruit"],
      ["BAVOIR", "Il protège des taches"],
      ["DOUDOU", "Peluche préférée"],
      ["LAYETTE", "Vêtements de bébé"],
      ["COMPTINE", "Chanson d’enfant"],
    ],
  },
  {
    "n": "Bien-être",
    "w": [
      ["SPA", "Lieu de détente"],
      ["MASSAGE", "Il détend les muscles"],
      ["SAUNA", "Chaleur sèche"],
      ["HAMMAM", "Bain de vapeur"],
      ["PEIGNOIR", "Après le bain"],
      ["TISANE", "Infusion relaxante"],
      ["HUILE", "Essentielle, parfumée"],
      ["RELAXATION", "Détente profonde"],
      ["RESPIRATION", "Inspire, expire"],
      ["SIESTE", "Petit somme réparateur"],
    ],
  },
  {
    "n": "Yoga",
    "w": [
      ["POSTURE", "Asana"],
      ["LOTUS", "Position assise jambes croisées"],
      ["SALUTATION", "Au soleil, enchaînement"],
      ["TAPIS", "On y pratique"],
      ["ARBRE", "Posture en équilibre"],
      ["CHAT", "Posture du dos rond"],
      ["SOUFFLE", "Respiration"],
      ["MANTRA", "Formule répétée"],
      ["NAMASTE", "Salut final"],
      ["EQUILIBRE", "Stabilité du corps"],
    ],
  },
  {
    "n": "Rêves",
    "w": [
      ["SONGE", "Rêve"],
      ["CAUCHEMAR", "Mauvais rêve"],
      ["REVERIE", "Rêve éveillé"],
      ["IMAGINATION", "Elle crée des images"],
      ["NUAGE", "On y est dans la lune"],
      ["ETOILE", "On en a plein les yeux"],
      ["ATTRAPEREVES", "Objet amérindien"],
      ["SOMMEIL", "Moment des rêves"],
      ["PAUPIERES", "Elles se ferment"],
      ["OREILLER", "Confident des rêves"],
    ],
  },
  {
    "n": "Matin",
    "w": [
      ["REVEIL", "Il sonne"],
      ["CAFE", "Il réveille"],
      ["DOUCHE", "Elle réveille"],
      ["TARTINE", "Pain beurré"],
      ["AUBE", "Lever du jour"],
      ["ROSEE", "Gouttes sur l’herbe"],
      ["CROISSANT", "Viennoiserie du matin"],
      ["ETIREMENT", "Mouvement au réveil"],
      ["BOL", "Pour les céréales"],
      ["COQ", "Il chante à l’aube"],
    ],
  },
  {
    "n": "Courses",
    "w": [
      ["LISTE", "On la prépare avant"],
      ["CHARIOT", "On le pousse"],
      ["CADDIE", "Chariot de supermarché"],
      ["CAISSE", "On y paie"],
      ["TICKET", "Preuve d’achat"],
      ["SAC", "Pour transporter"],
      ["RAYON", "Allée du magasin"],
      ["PROMOTION", "Prix réduit"],
      ["EPICERIE", "Petit commerce"],
      ["PANIER", "Pour les courses"],
    ],
  },
  {
    "n": "Noël",
    "w": [
      ["SAPIN", "Arbre décoré"],
      ["GUIRLANDE", "Elle scintille"],
      ["BOULE", "Décoration ronde"],
      ["ETOILE", "Au sommet du sapin"],
      ["CADEAU", "Sous le sapin"],
      ["TRAINEAU", "Tiré par des rennes"],
      ["LUTIN", "Assistant du père Noël"],
      ["CHAUSSETTE", "Accrochée à la cheminée"],
      ["RENNE", "Rudolph en est un"],
      ["CRECHE", "Scène de la Nativité"],
    ],
  },
  {
    "n": "Nouvel An",
    "w": [
      ["MINUIT", "Douze coups"],
      ["FEUDARTIFICE", "Spectacle de lumière"],
      ["RESOLUTION", "Bonne intention"],
      ["CALENDRIER", "Il change"],
      ["CHAMPAGNE", "Bulles de fête"],
      ["COTILLON", "Accessoire de fête"],
      ["VOEUX", "On les présente"],
      ["DECOMPTE", "Dix, neuf, huit…"],
      ["GUI", "On s’embrasse dessous"],
      ["REVEILLON", "Repas de fête"],
    ],
  },
  {
    "n": "Chandeleur",
    "w": [
      ["CREPE", "On la fait sauter"],
      ["POELE", "Pour cuire les crêpes"],
      ["FARINE", "Ingrédient de la pâte"],
      ["FEVRIER", "Mois de la fête"],
      ["CHANDELLE", "Bougie de la fête"],
      ["PIECE", "Dans la main en faisant sauter"],
      ["SUCRE", "On en saupoudre"],
      ["CONFITURE", "Garniture sucrée"],
      ["PATE", "À crêpes"],
      ["LOUCHE", "Pour verser la pâte"],
    ],
  },
  {
    "n": "Saint-Valentin",
    "w": [
      ["COEUR", "Symbole d’amour"],
      ["ROSE", "Fleur des amoureux"],
      ["CUPIDON", "Ange à l’arc"],
      ["CHOCOLAT", "Douceur offerte"],
      ["LETTRE", "D’amour"],
      ["FEVRIER", "Mois de la fête"],
      ["BAISER", "Geste tendre"],
      ["CARTE", "On l’envoie"],
      ["DINER", "Aux chandelles"],
      ["TENDRESSE", "Douceur affectueuse"],
    ],
  },
  {
    "n": "Pâques",
    "w": [
      ["OEUF", "En chocolat"],
      ["CLOCHES", "Elles reviennent de Rome"],
      ["LAPIN", "Il cache les œufs"],
      ["CHASSE", "Aux œufs"],
      ["POUSSIN", "Petit de la poule"],
      ["PANIER", "Pour ramasser"],
      ["PRINTEMPS", "Saison de la fête"],
      ["AGNEAU", "Repas traditionnel"],
      ["FRITURE", "Petits poissons en chocolat"],
      ["LUNDI", "De Pâques, férié"],
    ],
  },
  {
    "n": "Carnaval",
    "w": [
      ["MASQUE", "Il cache le visage"],
      ["CONFETTIS", "Petits papiers colorés"],
      ["CHAR", "Défilé décoré"],
      ["DEGUISEMENT", "Costume"],
      ["DEFILE", "Parade dans les rues"],
      ["FANFARE", "Musique de rue"],
      ["BEIGNETS", "Douceurs de carnaval"],
      ["MARDIGRAS", "Jour de fête"],
      ["SERPENTIN", "Ruban de papier lancé"],
      ["NICE", "Carnaval célèbre en France"],
    ],
  },
  {
    "n": "Fête nationale",
    "w": [
      ["DRAPEAU", "Symbole du pays"],
      ["FEUDARTIFICE", "Spectacle du soir"],
      ["DEFILE", "Militaire ou populaire"],
      ["BAL", "Danse populaire"],
      ["HYMNE", "Chant national"],
      ["LAMPION", "Lanterne de papier"],
      ["JUILLET", "Mois du 14"],
      ["PARADE", "Défilé"],
      ["CELEBRATION", "Fête"],
      ["PATRIE", "Pays natal"],
    ],
  },
  {
    "n": "Mariage",
    "w": [
      ["ALLIANCE", "Bague des mariés"],
      ["BOUQUET", "La mariée le lance"],
      ["VOILE", "Tulle sur la tête"],
      ["TEMOIN", "Il signe le registre"],
      ["PIECEMONTEE", "Gâteau en choux"],
      ["VALSE", "Première danse"],
      ["DRAGEES", "Amandes sucrées"],
      ["CORTEGE", "Défilé des invités"],
      ["MAIRIE", "Lieu de la cérémonie"],
      ["LUNEDEMIEL", "Voyage des mariés"],
    ],
  },
  {
    "n": "Naissance",
    "w": [
      ["BEBE", "Nouveau-né"],
      ["BERCEAU", "Petit lit"],
      ["FAIREPART", "Annonce envoyée"],
      ["PRENOM", "On le choisit"],
      ["MATERNITE", "Lieu de naissance"],
      ["LAYETTE", "Habits de bébé"],
      ["BAPTEME", "Cérémonie d’accueil"],
      ["MARRAINE", "Elle veille sur l’enfant"],
      ["PARRAIN", "Il veille sur l’enfant"],
      ["CIGOGNE", "Elle apporte les bébés"],
    ],
  },
  {
    "n": "Amitié",
    "w": [
      ["AMI", "Compagnon fidèle"],
      ["CONFIANCE", "Elle unit les amis"],
      ["SECRET", "On le partage"],
      ["COMPLICITE", "Entente profonde"],
      ["FIDELITE", "Constance"],
      ["RIRE", "On le partage"],
      ["SOUTIEN", "Aide dans l’épreuve"],
      ["PARTAGE", "Mettre en commun"],
      ["COPAIN", "Ami familier"],
      ["RETROUVAILLES", "Joie de se revoir"],
    ],
  },
  {
    "n": "Politesse",
    "w": [
      ["MERCI", "Mot de gratitude"],
      ["BONJOUR", "Salutation du matin"],
      ["PARDON", "Pour s’excuser"],
      ["SILVOUSPLAIT", "Formule de demande"],
      ["BONSOIR", "Salutation du soir"],
      ["AUREVOIR", "Formule de départ"],
      ["EXCUSE", "Demande de pardon"],
      ["SOURIRE", "Signe d’accueil"],
      ["POLITESSE", "Bonnes manières"],
      ["COURTOISIE", "Amabilité"],
    ],
  },
  {
    "n": "Qualités",
    "w": [
      ["GENTILLESSE", "Bonté naturelle"],
      ["HONNETETE", "Franchise"],
      ["GENEROSITE", "Elle donne sans compter"],
      ["PATIENCE", "Elle sait attendre"],
      ["COURAGE", "Il affronte la peur"],
      ["HUMOUR", "Il fait rire"],
      ["CURIOSITE", "Envie d’apprendre"],
      ["BIENVEILLANCE", "Attention aux autres"],
      ["HUMILITE", "Modestie"],
      ["SAGESSE", "Jugement juste"],
    ],
  },
  {
    "n": "Cinq sens",
    "w": [
      ["VUE", "Sens des yeux"],
      ["OUIE", "Sens des oreilles"],
      ["ODORAT", "Sens du nez"],
      ["GOUT", "Sens de la langue"],
      ["TOUCHER", "Sens de la peau"],
      ["REGARD", "Action de voir"],
      ["ECOUTE", "Action d’entendre"],
      ["PARFUM", "Il se sent"],
      ["SAVEUR", "Elle se goûte"],
      ["CARESSE", "Elle se sent sur la peau"],
    ],
  },
  {
    "n": "Sons",
    "w": [
      ["MURMURE", "Son très doux"],
      ["CHUCHOTEMENT", "Paroles basses"],
      ["CLAPOTIS", "Bruit de l’eau"],
      ["BRUISSEMENT", "Bruit des feuilles"],
      ["GRINCEMENT", "Bruit de porte"],
      ["TINTEMENT", "Son de clochette"],
      ["CREPITEMENT", "Bruit du feu"],
      ["RONRONNEMENT", "Bruit du chat content"],
      ["ECHO", "Son qui revient"],
      ["SILENCE", "Absence de son"],
    ],
  },
  {
    "n": "Odeurs",
    "w": [
      ["PARFUM", "Odeur agréable"],
      ["AROME", "Odeur du café"],
      ["SENTEUR", "Odeur"],
      ["EFFLUVE", "Émanation"],
      ["FRAGRANCE", "Parfum délicat"],
      ["BOUQUET", "Odeur du vin"],
      ["PETRICHOR", "Odeur après la pluie"],
      ["ENCENS", "Fumée parfumée"],
      ["LAVANDE", "Odeur de linge propre"],
      ["CANNELLE", "Odeur de Noël"],
    ],
  },
  {
    "n": "Bleus",
    "w": [
      ["AZUR", "Bleu du ciel"],
      ["MARINE", "Bleu foncé"],
      ["TURQUOISE", "Bleu-vert"],
      ["CIEL", "Bleu clair"],
      ["COBALT", "Bleu profond"],
      ["INDIGO", "Bleu violet"],
      ["SAPHIR", "Bleu précieux"],
      ["PETROLE", "Bleu-vert sombre"],
      ["LAVANDE", "Bleu mauve"],
      ["OUTREMER", "Bleu intense"],
    ],
  },
  {
    "n": "Verts",
    "w": [
      ["EMERAUDE", "Vert précieux"],
      ["OLIVE", "Vert kaki"],
      ["SAPIN", "Vert foncé"],
      ["MENTHE", "Vert frais"],
      ["PISTACHE", "Vert tendre"],
      ["KAKI", "Vert militaire"],
      ["JADE", "Vert pierre"],
      ["ANIS", "Vert pâle"],
      ["CELADON", "Vert d’eau"],
      ["BOUTEILLE", "Vert foncé du verre"],
    ],
  },
  {
    "n": "Rouges",
    "w": [
      ["CERISE", "Rouge vif"],
      ["CARMIN", "Rouge intense"],
      ["BORDEAUX", "Rouge foncé"],
      ["VERMILLON", "Rouge orangé"],
      ["GRENAT", "Rouge sombre"],
      ["CORAIL", "Rouge rosé"],
      ["RUBIS", "Rouge précieux"],
      ["POURPRE", "Rouge violacé"],
      ["FRAMBOISE", "Rouge rosé"],
      ["ECARLATE", "Rouge éclatant"],
    ],
  },
  {
    "n": "Matériaux",
    "w": [
      ["BOIS", "Matériau des arbres"],
      ["VERRE", "Matériau transparent"],
      ["PIERRE", "Matériau minéral"],
      ["METAL", "Matériau brillant"],
      ["PLASTIQUE", "Matériau synthétique"],
      ["CARTON", "Papier épais"],
      ["BETON", "Matériau des immeubles"],
      ["BRIQUE", "Bloc d’argile cuite"],
      ["OSIER", "Branches tressées"],
      ["LIEGE", "Écorce du chêne-liège"],
    ],
  },
  {
    "n": "Essences de bois",
    "w": [
      ["CHENE", "Bois dur et noble"],
      ["PIN", "Bois résineux clair"],
      ["HETRE", "Bois des meubles"],
      ["NOYER", "Bois sombre précieux"],
      ["ACAJOU", "Bois rouge exotique"],
      ["EBENE", "Bois noir"],
      ["TECK", "Bois des bateaux"],
      ["BOULEAU", "Bois clair"],
      ["MERISIER", "Bois de cerisier sauvage"],
      ["BAMBOU", "Bois léger"],
    ],
  },
  {
    "n": "Motifs",
    "w": [
      ["RAYURES", "Lignes parallèles"],
      ["POIS", "Petits ronds"],
      ["CARREAUX", "Motif en damier"],
      ["FLEURS", "Motif printanier"],
      ["CHEVRONS", "Zigzags"],
      ["PAISLEY", "Motif en goutte"],
      ["VICHY", "Petits carreaux"],
      ["ECOSSAIS", "Tartan"],
      ["LIBERTY", "Petites fleurs"],
      ["PIEDDEPOULE", "Motif en dents"],
    ],
  },
  {
    "n": "Accessoires",
    "w": [
      ["SAC", "On y met ses affaires"],
      ["CEINTURE", "Elle tient le pantalon"],
      ["FOULARD", "Carré de soie"],
      ["LUNETTES", "Pour mieux voir"],
      ["PARAPLUIE", "Contre la pluie"],
      ["MONTRE", "Elle donne l’heure"],
      ["PORTEFEUILLE", "Il contient l’argent"],
      ["EVENTAIL", "Pour se rafraîchir"],
      ["CHAPEAU", "Sur la tête"],
      ["BRETELLES", "Elles tiennent le pantalon"],
    ],
  },
  {
    "n": "Chapeaux",
    "w": [
      ["BERET", "Chapeau plat basque"],
      ["CASQUETTE", "Chapeau à visière"],
      ["CANOTIER", "Chapeau de paille"],
      ["BOB", "Chapeau de pêcheur"],
      ["HAUTDEFORME", "Chapeau de magicien"],
      ["FEUTRE", "Chapeau mou"],
      ["CAPELINE", "Grand chapeau souple"],
      ["TURBAN", "Tissu enroulé"],
      ["CHAPKA", "Bonnet russe fourré"],
      ["PANAMA", "Chapeau de paille fine"],
    ],
  },
  {
    "n": "Costumes traditionnels",
    "w": [
      ["KIMONO", "Japon"],
      ["SARI", "Inde"],
      ["KILT", "Écosse"],
      ["HANBOK", "Corée"],
      ["PONCHO", "Andes"],
      ["DIRNDL", "Bavière"],
      ["COIFFE", "Bretonne, en dentelle"],
      ["DJELLABA", "Maroc"],
      ["BOUBOU", "Afrique de l’Ouest"],
      ["SOMBRERO", "Mexique"],
    ],
  },
  {
    "n": "Coiffure",
    "w": [
      ["TRESSE", "Cheveux entrelacés"],
      ["CHIGNON", "Cheveux relevés"],
      ["FRANGE", "Mèche sur le front"],
      ["QUEUE", "De cheval"],
      ["BOUCLE", "Mèche ondulée"],
      ["CARRE", "Coupe courte droite"],
      ["BARRETTE", "Elle tient les cheveux"],
      ["PEIGNE", "Il démêle"],
      ["BROSSE", "Elle coiffe"],
      ["CHOUCHOU", "Élastique en tissu"],
    ],
  },
  {
    "n": "Poésie",
    "w": [
      ["VERS", "Ligne de poème"],
      ["RIME", "Sons identiques en fin de vers"],
      ["STROPHE", "Groupe de vers"],
      ["ALEXANDRIN", "Vers de douze syllabes"],
      ["HAIKU", "Poème japonais court"],
      ["POETE", "Il écrit des poèmes"],
      ["RECUEIL", "Livre de poèmes"],
      ["SONNET", "Quatorze vers"],
      ["MUSE", "Inspiratrice"],
      ["QUATRAIN", "Strophe de quatre vers"],
    ],
  },
  {
    "n": "Dessin",
    "w": [
      ["CRAYON", "Il trace"],
      ["FUSAIN", "Charbon à dessin"],
      ["ESQUISSE", "Premier tracé"],
      ["OMBRE", "Elle donne du volume"],
      ["CARNET", "De croquis"],
      ["PASTEL", "Bâtonnet de couleur"],
      ["GOMME", "Elle corrige"],
      ["PERSPECTIVE", "Illusion de profondeur"],
      ["TRAIT", "Ligne dessinée"],
      ["MODELE", "Ce qu’on dessine"],
    ],
  },
  {
    "n": "Sculpture",
    "w": [
      ["MARBRE", "Pierre noble"],
      ["BRONZE", "Métal coulé"],
      ["CISEAU", "Outil du sculpteur"],
      ["GLAISE", "Argile à modeler"],
      ["STATUE", "Œuvre en volume"],
      ["BUSTE", "Sculpture du haut du corps"],
      ["SOCLE", "Support de la statue"],
      ["RODIN", "Auteur du Penseur"],
      ["MOULAGE", "Copie par moule"],
      ["BASRELIEF", "Sculpture sur un fond"],
    ],
  },
  {
    "n": "Poterie",
    "w": [
      ["ARGILE", "Terre à modeler"],
      ["TOUR", "Il tourne la terre"],
      ["EMAIL", "Vernis vitrifié"],
      ["CUISSON", "Passage au four"],
      ["FOUR", "Où l’on cuit la terre"],
      ["VASE", "Objet tourné"],
      ["BOL", "Pièce creuse"],
      ["POTIER", "Artisan de la terre"],
      ["FAIENCE", "Céramique émaillée"],
      ["PORCELAINE", "Céramique fine blanche"],
    ],
  },
  {
    "n": "Origami",
    "w": [
      ["PAPIER", "Matière de l’origami"],
      ["PLIAGE", "Action de plier"],
      ["GRUE", "Oiseau plié célèbre"],
      ["JAPON", "Pays d’origine"],
      ["CARRE", "Forme de départ"],
      ["GRENOUILLE", "Elle saute en papier"],
      ["BATEAU", "Plié, il flotte"],
      ["AVION", "Plié, il vole"],
      ["FLEUR", "Lotus en papier"],
      ["MODULE", "Pièce assemblée"],
    ],
  },
  {
    "n": "Broderie",
    "w": [
      ["AIGUILLE", "Elle pique le tissu"],
      ["FIL", "Brin coloré"],
      ["CANEVAS", "Toile à broder"],
      ["TAMBOUR", "Cercle qui tend le tissu"],
      ["POINTDECROIX", "Point en X"],
      ["MOTIF", "Dessin brodé"],
      ["ECHEVEAU", "Fil enroulé"],
      ["DENTELLIERE", "Elle fait de la dentelle"],
      ["PERLE", "On la coud"],
      ["TOILE", "Support du brodeur"],
    ],
  },
  {
    "n": "Menuiserie",
    "w": [
      ["PLANCHE", "Morceau de bois plat"],
      ["RABOT", "Il lisse"],
      ["CIRE", "Pour faire briller"],
      ["COLLE", "Pour assembler"],
      ["TENON", "Partie qui s’emboîte"],
      ["MORTAISE", "Trou d’assemblage"],
      ["SCIURE", "Poussière de bois"],
      ["COPEAU", "Fine lamelle de bois"],
      ["VERNIS", "Protection brillante"],
      ["ETABLI", "Table de travail"],
    ],
  },
  {
    "n": "Pêche de loisir",
    "w": [
      ["CANNE", "À pêche"],
      ["HAMECON", "Crochet pour le poisson"],
      ["APPAT", "Pour attirer"],
      ["FLOTTEUR", "Il bouge quand ça mord"],
      ["MOULINET", "Il enroule le fil"],
      ["EPUISETTE", "Petit filet"],
      ["TRUITE", "Poisson de rivière"],
      ["GARDON", "Petit poisson blanc"],
      ["WADERS", "Bottes-pantalon"],
      ["PATIENCE", "Qualité du pêcheur"],
    ],
  },
  {
    "n": "Chasse au trésor",
    "w": [
      ["CARTE", "Elle mène au butin"],
      ["INDICE", "Il aide à trouver"],
      ["ENIGME", "Question à résoudre"],
      ["COFFRE", "Contenant du trésor"],
      ["CROIX", "Elle marque l’endroit"],
      ["BOUSSOLE", "Elle oriente"],
      ["PELLE", "Pour creuser"],
      ["PARCHEMIN", "Vieux papier"],
      ["CODE", "Combinaison secrète"],
      ["BUTIN", "Ce qu’on trouve"],
    ],
  },
  {
    "n": "Randonnée",
    "w": [
      ["SAC", "À dos"],
      ["BATONS", "De marche"],
      ["CHAUSSURES", "De rando"],
      ["BALISE", "Marque du sentier"],
      ["GOURDE", "Pour boire"],
      ["PANORAMA", "Vue d’ensemble"],
      ["ETAPE", "Partie du parcours"],
      ["DENIVELE", "Montée et descente"],
      ["GITE", "Hébergement d’étape"],
      ["SENTIER", "Chemin de rando"],
    ],
  },
  {
    "n": "Escalade",
    "w": [
      ["CORDE", "Elle assure"],
      ["BAUDRIER", "Harnais du grimpeur"],
      ["MOUSQUETON", "Anneau à fermoir"],
      ["PRISE", "Où l’on s’accroche"],
      ["MAGNESIE", "Poudre pour les mains"],
      ["CHAUSSONS", "D’escalade"],
      ["ASSUREUR", "Il tient la corde"],
      ["PAROI", "Mur rocheux"],
      ["VOIE", "Itinéraire d’ascension"],
      ["RELAIS", "Point d’arrêt"],
    ],
  },
  {
    "n": "Ski",
    "w": [
      ["PISTE", "Parcours enneigé"],
      ["FORFAIT", "Pass des remontées"],
      ["TELESIEGE", "Remontée assise"],
      ["TIREFESSES", "Remontée à perche"],
      ["SLALOM", "Parcours entre portes"],
      ["CHASSENEIGE", "Position en V"],
      ["BATONS", "De ski"],
      ["FARTAGE", "Préparation des skis"],
      ["APRESSKI", "Botte ou moment de détente"],
    ],
  },
  {
    "n": "Patinage",
    "w": [
      ["PATIN", "Chaussure à lame"],
      ["LAME", "Sous le patin"],
      ["PATINOIRE", "Piste de glace"],
      ["PIROUETTE", "Rotation"],
      ["SAUT", "Axel ou lutz"],
      ["GLISSE", "Mouvement sur la glace"],
      ["COUPLE", "Patinage à deux"],
      ["ARTISTIQUE", "Patinage avec figures"],
      ["VITESSE", "Patinage de course"],
      ["ZAMBONI", "Surfaceuse"],
    ],
  },
  {
    "n": "Course à pied",
    "w": [
      ["FOULEE", "Grand pas de course"],
      ["CHRONO", "Il mesure le temps"],
      ["DOSSARD", "Numéro du coureur"],
      ["MARATHON", "42 kilomètres"],
      ["JOGGING", "Course tranquille"],
      ["ENDURANCE", "Capacité à durer"],
      ["ECHAUFFEMENT", "Préparation"],
      ["ARRIVEE", "Ligne finale"],
      ["SPRINT", "Course rapide"],
      ["BASKETS", "Chaussures de course"],
    ],
  },
  {
    "n": "Chant",
    "w": [
      ["VOIX", "Instrument du chanteur"],
      ["SOPRANO", "Voix la plus aiguë"],
      ["TENOR", "Voix masculine aiguë"],
      ["BASSE", "Voix la plus grave"],
      ["CHORALE", "Groupe de chanteurs"],
      ["REFRAIN", "Partie répétée"],
      ["COUPLET", "Partie de chanson"],
      ["VOCALISE", "Exercice de voix"],
      ["DUO", "Chanson à deux"],
      ["AIR", "Mélodie d’opéra"],
    ],
  },
  {
    "n": "Instruments à cordes",
    "w": [
      ["VIOLON", "Joué à l’archet"],
      ["ALTO", "Violon un peu plus grand"],
      ["VIOLONCELLE", "Joué assis"],
      ["CONTREBASSE", "La plus grave"],
      ["GUITARE", "Six cordes"],
      ["HARPE", "Cordes pincées"],
      ["MANDOLINE", "Petit luth"],
      ["BANJO", "Instrument country"],
      ["LUTH", "Ancêtre de la guitare"],
      ["CITHARE", "Cordes sur caisse plate"],
    ],
  },
  {
    "n": "Instruments à vent",
    "w": [
      ["FLUTE", "Traversière ou à bec"],
      ["CLARINETTE", "Anche simple"],
      ["SAXOPHONE", "Instrument du jazz"],
      ["TROMPETTE", "Cuivre aigu"],
      ["TROMBONE", "Cuivre à coulisse"],
      ["TUBA", "Cuivre grave"],
      ["COR", "Cuivre enroulé"],
      ["HAUTBOIS", "Double anche"],
      ["BASSON", "Grave du bois"],
      ["HARMONICA", "Instrument de poche"],
    ],
  },
  {
    "n": "Percussions",
    "w": [
      ["TAMBOUR", "On frappe la peau"],
      ["BATTERIE", "Ensemble de fûts"],
      ["XYLOPHONE", "Lames de bois"],
      ["MARIMBA", "Grand xylophone"],
      ["TAMBOURIN", "Petit tambour à grelots"],
      ["MARACAS", "Hochets de musique"],
      ["CASTAGNETTES", "Claquettes espagnoles"],
      ["GONG", "Grand disque de métal"],
      ["DJEMBE", "Tambour africain"],
      ["CAJON", "Caisse qu’on frappe"],
    ],
  },
  {
    "n": "Genres musicaux",
    "w": [
      ["JAZZ", "Musique improvisée"],
      ["BLUES", "Musique mélancolique"],
      ["ROCK", "Musique électrique"],
      ["REGGAE", "Musique jamaïcaine"],
      ["CLASSIQUE", "Mozart, Bach..."],
      ["SOUL", "Musique de l’âme"],
      ["FOLK", "Musique populaire acoustique"],
      ["OPERA", "Théâtre chanté"],
      ["ELECTRO", "Musique électronique"],
      ["SWING", "Jazz dansant"],
    ],
  },
  {
    "n": "Opéra",
    "w": [
      ["DIVA", "Grande chanteuse"],
      ["LIVRET", "Texte de l’opéra"],
      ["ARIA", "Air chanté"],
      ["ORCHESTRE", "Ensemble de musiciens"],
      ["LOGE", "Place privée"],
      ["BALCON", "Étage de la salle"],
      ["OUVERTURE", "Début musical"],
      ["CARMEN", "Opéra de Bizet"],
      ["RIDEAU", "Il s’ouvre"],
      ["MAESTRO", "Chef d’orchestre"],
    ],
  },
  {
    "n": "Animation",
    "w": [
      ["DESSINANIME", "Film dessiné"],
      ["STOPMOTION", "Image par image"],
      ["STORYBOARD", "Plan dessiné"],
      ["PERSONNAGE", "Héros animé"],
      ["DOUBLAGE", "Voix des personnages"],
      ["IMAGE", "Unité du film"],
      ["CRAYONNE", "Dessiné au crayon"],
      ["STUDIO", "Lieu de création"],
      ["SCENARIO", "Histoire"],
      ["ANIMATEUR", "Il fait bouger les dessins"],
    ],
  },
  {
    "n": "Radio",
    "w": [
      ["ANTENNE", "Elle capte"],
      ["ONDES", "Elles transportent le son"],
      ["MICRO", "Il capte la voix"],
      ["ANIMATEUR", "Il présente"],
      ["EMISSION", "Programme"],
      ["FREQUENCE", "Numéro de station"],
      ["STUDIO", "Lieu d’enregistrement"],
      ["AUDITEUR", "Celui qui écoute"],
      ["DIRECT", "En temps réel"],
      ["JINGLE", "Petit air de transition"],
    ],
  },
  {
    "n": "Jeux vidéo",
    "w": [
      ["MANETTE", "On la tient"],
      ["CONSOLE", "Machine de jeu"],
      ["NIVEAU", "Étape du jeu"],
      ["SCORE", "Points obtenus"],
      ["AVATAR", "Personnage joueur"],
      ["QUETE", "Mission"],
      ["BOSS", "Ennemi final"],
      ["SAUVEGARDE", "On reprend plus tard"],
      ["PIXEL", "Petit carré d’image"],
      ["MANCHE", "Partie"],
    ],
  },
  {
    "n": "Jeux de cartes",
    "w": [
      ["COEUR", "Couleur rouge"],
      ["PIQUE", "Couleur noire"],
      ["TREFLE", "Couleur noire"],
      ["CARREAU", "Couleur rouge"],
      ["ROI", "Figure couronnée"],
      ["DAME", "Figure féminine"],
      ["VALET", "Figure du jeune homme"],
      ["JOKER", "Carte spéciale"],
      ["BELOTE", "Jeu de cartes français"],
    ],
  },
  {
    "n": "Jeux de lettres",
    "w": [
      ["ANAGRAMME", "Mot aux lettres mélangées"],
      ["MOTSCROISES", "Grille et définitions"],
      ["MOTSCACHES", "Mots dans une grille"],
      ["ALPHABET", "Les lettres, de A à Z"],
      ["PALINDROME", "Mot lisible dans les deux sens"],
      ["PENDU", "Jeu de devinette"],
      ["LETTRE", "Unité de l’alphabet"],
      ["DEFINITION", "Sens d’un mot"],
      ["VOCABULAIRE", "Ensemble des mots"],
      ["CHARADE", "Devinette en syllabes"],
    ],
  },
  {
    "n": "Casse-tête",
    "w": [
      ["PUZZLE", "Pièces à assembler"],
      ["LABYRINTHE", "Chemin à trouver"],
      ["SUDOKU", "Grille de chiffres"],
      ["TANGRAM", "Pièces géométriques chinoises"],
      ["RUBIKSCUBE", "Cube à faces colorées"],
      ["DEVINETTE", "Question à deviner"],
      ["ENIGME", "Problème à résoudre"],
      ["CODE", "Message chiffré"],
      ["LOGIQUE", "Raisonnement"],
      ["SOLUTION", "Réponse trouvée"],
    ],
  },
  {
    "n": "Collections",
    "w": [
      ["TIMBRE", "Collection de philatéliste"],
      ["PIECE", "Collection de numismate"],
      ["COQUILLAGE", "Trésor de plage"],
      ["CARTEPOSTALE", "Souvenir illustré"],
      ["FIGURINE", "Petit personnage"],
      ["BILLE", "Petite boule de verre"],
      ["VINYLE", "Disque ancien"],
      ["AUTOGRAPHE", "Signature célèbre"],
      ["ALBUM", "Pour ranger"],
      ["VITRINE", "Pour exposer"],
    ],
  },
  {
    "n": "Astronomie amateur",
    "w": [
      ["TELESCOPE", "Instrument à miroir"],
      ["LUNETTE", "Astronomique"],
      ["CONSTELLATION", "Groupe d’étoiles"],
      ["NEBULEUSE", "Nuage cosmique"],
      ["GALAXIE", "Ensemble d’étoiles"],
      ["ETOILEFILANTE", "Trait lumineux"],
      ["PLANISPHERE", "Carte du ciel"],
      ["OBSERVATOIRE", "Bâtiment à coupole"],
      ["COMETE", "Astre chevelu"],
      ["ORION", "Constellation du chasseur"],
    ],
  },
  {
    "n": "Ornithologie",
    "w": [
      ["JUMELLES", "Pour observer de loin"],
      ["NICHOIR", "Abri pour oiseaux"],
      ["MANGEOIRE", "Graines pour oiseaux"],
      ["MIGRATION", "Grand voyage"],
      ["PLUME", "Couverture de l’oiseau"],
      ["CHANT", "Mélodie d’oiseau"],
      ["BAGUAGE", "Identification des oiseaux"],
      ["AFFUT", "Cachette d’observation"],
      ["OISILLON", "Bébé oiseau"],
      ["GUIDE", "Livre d’identification"],
    ],
  },
  {
    "n": "Modélisme",
    "w": [
      ["MAQUETTE", "Modèle réduit"],
      ["ECHELLE", "Rapport de taille"],
      ["COLLE", "Pour assembler"],
      ["PEINTURE", "Pour décorer"],
      ["DIORAMA", "Scène miniature"],
      ["AVION", "En kit"],
      ["VOILIER", "Dans une bouteille"],
      ["FIGURINE", "Petit personnage"],
      ["PINCETTE", "Pour les petites pièces"],
    ],
  },
  {
    "n": "Aquariophilie",
    "w": [
      ["AQUARIUM", "Bac à poissons"],
      ["FILTRE", "Il nettoie l’eau"],
      ["GUPPY", "Petit poisson coloré"],
      ["NEON", "Poisson bleu fluo"],
      ["SCALAIRE", "Poisson en triangle"],
      ["COMBATTANT", "Poisson aux longues nageoires"],
      ["PLANTE", "Aquatique"],
      ["GRAVIER", "Fond du bac"],
      ["BULLEUR", "Il oxygène"],
      ["CREVETTE", "D’eau douce"],
    ],
  },
  {
    "n": "Croisière",
    "w": [
      ["PAQUEBOT", "Grand navire"],
      ["CABINE", "Chambre à bord"],
      ["PONT", "Étage extérieur"],
      ["ESCALE", "Arrêt dans un port"],
      ["HUBLOT", "Fenêtre ronde"],
      ["CAPITAINE", "Commandant"],
      ["EQUIPAGE", "Personnel du navire"],
      ["SILLAGE", "Trace sur l’eau"],
      ["BOUEE", "De sauvetage"],
      ["COUCHER", "De soleil sur la mer"],
    ],
  },
  {
    "n": "Colonie de vacances",
    "w": [
      ["MONITEUR", "Animateur des enfants"],
      ["DORTOIR", "Chambre commune"],
      ["VEILLEE", "Soirée animée"],
      ["FEUDECAMP", "Feu du soir"],
      ["GRANDJEU", "Jeu en plein air"],
      ["CHANSON", "On la chante en bus"],
      ["CANTINE", "Où l’on mange"],
      ["CARTEPOSTALE", "On l’envoie aux parents"],
      ["BAIGNADE", "Moment dans l’eau"],
      ["SOUVENIRS", "Ce qu’on rapporte"],
    ],
  },
  {
    "n": "Scoutisme",
    "w": [
      ["FOULARD", "Noué autour du cou"],
      ["BADGE", "Insigne cousu"],
      ["PATROUILLE", "Petit groupe"],
      ["CAMP", "Séjour sous la tente"],
      ["NOEUD", "Corde attachée"],
      ["TOTEM", "Nom de scout"],
      ["BOUSSOLE", "Pour s’orienter"],
      ["UNIFORME", "Tenue du groupe"],
      ["PROMESSE", "Engagement"],
      ["JAMBOREE", "Grand rassemblement"],
    ],
  },
  {
    "n": "Bibliothèque",
    "w": [
      ["LIVRE", "On l’emprunte"],
      ["RAYON", "Étagère thématique"],
      ["FICHE", "Carte de lecteur"],
      ["EMPRUNT", "Prêt de livre"],
      ["SILENCE", "Il est demandé"],
      ["CATALOGUE", "Liste des ouvrages"],
      ["LECTEUR", "Celui qui lit"],
      ["ALBUM", "Livre illustré"],
      ["ENCYCLOPEDIE", "Livre de savoir"],
    ],
  },
  {
    "n": "Concert",
    "w": [
      ["SCENE", "Plateau des musiciens"],
      ["PUBLIC", "Spectateurs"],
      ["RAPPEL", "Bis demandé"],
      ["GUITARISTE", "Musicien à cordes"],
      ["BILLET", "Entrée"],
      ["SONO", "Système de son"],
      ["LUMIERES", "Projecteurs colorés"],
      ["TOURNEE", "Série de concerts"],
      ["ENCORE", "Cri pour un bis"],
    ],
  },
  {
    "n": "Festival",
    "w": [
      ["AFFICHE", "Programme illustré"],
      ["CHAPITEAU", "Grande tente"],
      ["BRACELET", "Accès au festival"],
      ["PROGRAMME", "Liste des spectacles"],
      ["ARTISTE", "Il se produit"],
      ["PELOUSE", "Où l’on s’assoit"],
      ["SCENE", "Plateau"],
      ["BENEVOLE", "Il aide gratuitement"],
      ["CAMPING", "Pour dormir sur place"],
      ["ETE", "Saison des festivals"],
    ],
  },
  {
    "n": "Zoo",
    "w": [
      ["ENCLOS", "Espace des animaux"],
      ["SOIGNEUR", "Il nourrit les animaux"],
      ["GIRAFE", "Long cou"],
      ["ELEPHANT", "Grande trompe"],
      ["PINGOUIN", "Oiseau noir et blanc"],
      ["OTARIE", "Elle fait des tours"],
      ["SINGE", "Il grimpe"],
      ["VOLIERE", "Grande cage à oiseaux"],
      ["VIVARIUM", "Abri des reptiles"],
      ["PLAN", "Pour visiter"],
    ],
  },
  {
    "n": "Jardin botanique",
    "w": [
      ["SERRE", "Bâtiment vitré"],
      ["HERBIER", "Collection de plantes séchées"],
      ["BOTANISTE", "Spécialiste des plantes"],
      ["ROSERAIE", "Jardin de roses"],
      ["ALLEE", "Chemin du jardin"],
      ["BASSIN", "Pièce d’eau"],
      ["ETIQUETTE", "Nom latin de la plante"],
      ["ARBORETUM", "Collection d’arbres"],
      ["CACTUS", "Plante du désert"],
      ["ORCHIDEE", "Fleur rare"],
    ],
  },
  {
    "n": "Météorologie",
    "w": [
      ["BAROMETRE", "Il mesure la pression"],
      ["THERMOMETRE", "Il mesure la température"],
      ["ANEMOMETRE", "Il mesure le vent"],
      ["PLUVIOMETRE", "Il mesure la pluie"],
      ["PREVISION", "Annonce du temps"],
      ["DEPRESSION", "Zone de basse pression"],
      ["ANTICYCLONE", "Zone de beau temps"],
      ["FRONT", "Froid ou chaud"],
      ["SATELLITE", "Il observe la Terre"],
      ["BULLETIN", "Météo du jour"],
    ],
  },
  {
    "n": "Physique",
    "w": [
      ["GRAVITE", "Elle fait tomber"],
      ["ENERGIE", "Capacité à agir"],
      ["LUMIERE", "Elle voyage vite"],
      ["ATOME", "Brique de la matière"],
      ["AIMANT", "Il attire le fer"],
      ["FORCE", "Elle pousse ou tire"],
      ["VITESSE", "Distance par temps"],
      ["MASSE", "Quantité de matière"],
      ["ONDE", "Vibration qui se propage"],
      ["PRISME", "Il décompose la lumière"],
    ],
  },
  {
    "n": "Chimie",
    "w": [
      ["MOLECULE", "Assemblage d’atomes"],
      ["ELEMENT", "Case du tableau"],
      ["OXYGENE", "On le respire"],
      ["HYDROGENE", "Élément le plus léger"],
      ["CARBONE", "Base du vivant"],
      ["AZOTE", "Principal gaz de l’air"],
      ["EPROUVETTE", "Tube de verre"],
      ["REACTION", "Transformation chimique"],
      ["CRISTAL", "Solide ordonné"],
      ["SOLUTION", "Mélange dissous"],
    ],
  },
  {
    "n": "Biologie",
    "w": [
      ["CELLULE", "Unité du vivant"],
      ["ADN", "Molécule de l’hérédité"],
      ["GENE", "Unité d’hérédité"],
      ["MICROSCOPE", "Il grossit"],
      ["ESPECE", "Groupe d’êtres semblables"],
      ["EVOLUTION", "Changement des espèces"],
      ["BACTERIE", "Être microscopique"],
      ["PHOTOSYNTHESE", "Les plantes la font"],
      ["ORGANISME", "Être vivant"],
      ["ECOSYSTEME", "Milieu et êtres vivants"],
    ],
  },
  {
    "n": "Squelette",
    "w": [
      ["CRANE", "Os de la tête"],
      ["COLONNE", "Vertébrale"],
      ["COTE", "Os de la cage thoracique"],
      ["FEMUR", "Os de la cuisse"],
      ["TIBIA", "Os de la jambe"],
      ["CLAVICULE", "Os de l’épaule"],
      ["BASSIN", "Os de la hanche"],
      ["ROTULE", "Os du genou"],
      ["OMOPLATE", "Os du dos"],
      ["VERTEBRE", "Os de la colonne"],
    ],
  },
  {
    "n": "Organes",
    "w": [
      ["COEUR", "Il pompe le sang"],
      ["POUMON", "Il respire"],
      ["CERVEAU", "Il pense"],
      ["FOIE", "Il filtre"],
      ["ESTOMAC", "Il digère"],
      ["REIN", "Il filtre le sang"],
      ["INTESTIN", "Long tube digestif"],
      ["PEAU", "Plus grand organe"],
      ["MUSCLE", "Il fait bouger"],
      ["VEINE", "Elle ramène le sang"],
    ],
  },
  {
    "n": "Écologie",
    "w": [
      ["RECYCLAGE", "Seconde vie des déchets"],
      ["COMPOST", "Engrais naturel"],
      ["BIODIVERSITE", "Variété du vivant"],
      ["CLIMAT", "Temps sur la durée"],
      ["POLLUTION", "Ce qui salit"],
      ["SOBRIETE", "Consommer moins"],
      ["NATURE", "Ce qu’on protège"],
      ["HABITAT", "Lieu de vie"],
      ["PROTECTION", "Sauvegarde"],
      ["POTAGER", "Jardin nourricier"],
    ],
  },
  {
    "n": "Énergies renouvelables",
    "w": [
      ["SOLAIRE", "Énergie du soleil"],
      ["EOLIENNE", "Elle tourne au vent"],
      ["HYDRAULIQUE", "Énergie de l’eau"],
      ["GEOTHERMIE", "Chaleur de la Terre"],
      ["BIOMASSE", "Énergie des végétaux"],
      ["PANNEAU", "Solaire, sur le toit"],
      ["BARRAGE", "Il retient l’eau"],
      ["TURBINE", "Elle produit du courant"],
      ["MAREMOTRICE", "Énergie des marées"],
      ["BATTERIE", "Elle stocke"],
    ],
  },
  {
    "n": "Recyclage",
    "w": [
      ["POUBELLE", "Où l’on jette"],
      ["TRI", "Séparation des déchets"],
      ["VERRE", "Bac vert"],
      ["COMPOSTEUR", "Pour les épluchures"],
      ["EMBALLAGE", "Carton ou plastique"],
      ["DECHETTERIE", "Centre de dépôt"],
      ["BOUTEILLE", "En plastique ou verre"],
      ["CANETTE", "En aluminium"],
      ["PAPIER", "Il se recycle"],
      ["REEMPLOI", "Utiliser à nouveau"],
    ],
  },
  {
    "n": "Inventions",
    "w": [
      ["ROUE", "Elle tourne"],
      ["IMPRIMERIE", "Gutenberg"],
      ["TELEPHONE", "Il porte la voix"],
      ["AMPOULE", "Elle éclaire"],
      ["BOUSSOLE", "Elle oriente"],
      ["AVION", "Il vole"],
      ["VACCIN", "Il protège"],
      ["TELESCOPE", "Il voit loin"],
      ["PHOTOGRAPHIE", "Elle fige l’instant"],
      ["INTERNET", "Réseau mondial"],
    ],
  },
  {
    "n": "Scientifiques",
    "w": [
      ["CURIE", "Pionnière de la radioactivité"],
      ["NEWTON", "La pomme et la gravité"],
      ["EINSTEIN", "Relativité"],
      ["PASTEUR", "Vaccin contre la rage"],
      ["DARWIN", "Évolution des espèces"],
      ["GALILEE", "Lunette et planètes"],
      ["EDISON", "Ampoule électrique"],
      ["MENDEL", "Lois de l’hérédité"],
      ["LAVOISIER", "Rien ne se perd"],
      ["TESLA", "Courant alternatif"],
    ],
  },
  {
    "n": "Peintres",
    "w": [
      ["MONET", "Nymphéas"],
      ["VANGOGH", "Les Tournesols"],
      ["CEZANNE", "Montagne Sainte-Victoire"],
      ["RENOIR", "Bal du moulin de la Galette"],
      ["MATISSE", "Papiers découpés"],
      ["PICASSO", "Cubisme"],
      ["DEGAS", "Danseuses"],
      ["VERMEER", "Jeune fille à la perle"],
      ["CHAGALL", "Couples volants"],
      ["REMBRANDT", "Maître du clair-obscur"],
    ],
  },
  {
    "n": "Compositeurs",
    "w": [
      ["MOZART", "Flûte enchantée"],
      ["BACH", "Toccata et fugue"],
      ["BEETHOVEN", "Neuvième symphonie"],
      ["CHOPIN", "Nocturnes pour piano"],
      ["VIVALDI", "Quatre Saisons"],
      ["DEBUSSY", "Clair de lune"],
      ["RAVEL", "Boléro"],
      ["SATIE", "Gymnopédies"],
      ["TCHAIKOVSKI", "Casse-Noisette"],
      ["BIZET", "Carmen"],
    ],
  },
  {
    "n": "Écrivains",
    "w": [
      ["HUGO", "Les Misérables"],
      ["ZOLA", "Germinal"],
      ["VERNE", "Vingt mille lieues sous les mers"],
      ["COLETTE", "Claudine"],
      ["PROUST", "La madeleine"],
      ["SAND", "La Mare au diable"],
      ["DUMAS", "Les Trois Mousquetaires"],
      ["CAMUS", "L’Étranger"],
      ["BALZAC", "La Comédie humaine"],
      ["MOLIERE", "Le Bourgeois gentilhomme"],
    ],
  },
  {
    "n": "Mythologie grecque",
    "w": [
      ["ZEUS", "Roi des dieux"],
      ["ATHENA", "Déesse de la sagesse"],
      ["APOLLON", "Dieu du soleil et des arts"],
      ["POSEIDON", "Dieu des mers"],
      ["HERMES", "Messager aux sandales ailées"],
      ["ARTEMIS", "Déesse de la chasse"],
      ["HERCULE", "Héros aux douze travaux"],
      ["ULYSSE", "Héros de l’Odyssée"],
      ["MEDUSE", "Gorgone aux serpents"],
      ["OLYMPE", "Montagne des dieux"],
    ],
  },
  {
    "n": "Mythologie nordique",
    "w": [
      ["ODIN", "Père des dieux"],
      ["THOR", "Dieu au marteau"],
      ["LOKI", "Dieu malicieux"],
      ["FREYA", "Déesse de l’amour"],
      ["VALHALLA", "Séjour des guerriers"],
      ["YGGDRASIL", "Arbre du monde"],
      ["RUNES", "Alphabet ancien"],
      ["ASGARD", "Royaume des dieux"],
      ["VALKYRIE", "Guerrière ailée"],
      ["MJOLNIR", "Marteau de Thor"],
    ],
  },
  {
    "n": "Mythologie égyptienne",
    "w": [
      ["ISIS", "Déesse mère"],
      ["OSIRIS", "Dieu des morts"],
      ["ANUBIS", "Dieu à tête de chacal"],
      ["HORUS", "Dieu faucon"],
      ["BASTET", "Déesse chatte"],
      ["THOT", "Dieu de l’écriture"],
      ["SPHINX", "Gardien des pyramides"],
      ["NIL", "Fleuve nourricier"],
      ["SCARABEE", "Symbole du soleil"],
    ],
  },
  {
    "n": "Créatures fantastiques",
    "w": [
      ["ELFE", "Être des forêts aux oreilles pointues"],
      ["NAIN", "Mineur barbu"],
      ["GOBELIN", "Petit être malicieux"],
      ["FARFADET", "Lutin espiègle"],
      ["GARGOUILLE", "Créature de pierre"],
      ["SPHINX", "Lion à tête humaine"],
      ["CHIMERE", "Monstre composite"],
      ["HYDRE", "Serpent à plusieurs têtes"],
      ["BASILIC", "Serpent au regard mortel"],
      ["FEE", "Elle exauce les vœux"],
    ],
  },
  {
    "n": "Antiquité romaine",
    "w": [
      ["CESAR", "Grand général romain"],
      ["SENAT", "Assemblée romaine"],
      ["TOGE", "Vêtement romain"],
      ["AQUEDUC", "Il transporte l’eau"],
      ["THERMES", "Bains publics"],
      ["ARENE", "Lieu des jeux"],
      ["LEGION", "Armée romaine"],
      ["FORUM", "Place publique"],
      ["AMPHORE", "Jarre à huile"],
      ["LATIN", "Langue de Rome"],
    ],
  },
  {
    "n": "Renaissance",
    "w": [
      ["LEONARD", "De Vinci"],
      ["JOCONDE", "Portrait au sourire"],
      ["MICHELANGE", "Chapelle Sixtine"],
      ["FLORENCE", "Ville des Médicis"],
      ["HUMANISME", "Courant de pensée"],
      ["FRESQUE", "Peinture murale"],
      ["IMPRIMERIE", "Diffusion des livres"],
      ["CHAMBORD", "Château de François Ier"],
      ["MECENE", "Protecteur des artistes"],
      ["PERSPECTIVE", "Profondeur en peinture"],
    ],
  },
  {
    "n": "Explorateurs",
    "w": [
      ["MAGELLAN", "Premier tour du monde"],
      ["COLOMB", "Amérique en 1492"],
      ["CARTIER", "Découverte du Saint-Laurent"],
      ["CHAMPLAIN", "Fondateur de Québec"],
      ["COOK", "Explorateur du Pacifique"],
      ["POLO", "Voyage en Chine"],
      ["AMUNDSEN", "Premier au pôle Sud"],
      ["COUSTEAU", "Explorateur des mers"],
      ["BOUGAINVILLE", "Navigateur français"],
      ["LIVINGSTONE", "Explorateur de l’Afrique"],
    ],
  },
  {
    "n": "Navigation ancienne",
    "w": [
      ["CARAVELLE", "Navire des découvertes"],
      ["ASTROLABE", "Instrument des étoiles"],
      ["SEXTANT", "Il mesure la hauteur des astres"],
      ["GOUVERNAIL", "Il dirige"],
      ["VOILURE", "Ensemble des voiles"],
      ["MOUSSE", "Jeune marin"],
      ["VIGIE", "Guetteur en haut du mât"],
      ["CARTE", "Marine"],
      ["ESTUAIRE", "Embouchure"],
      ["LONGUEVUE", "Lunette du marin"],
    ],
  },
  {
    "n": "Architecture",
    "w": [
      ["COLONNE", "Pilier rond"],
      ["VOUTE", "Plafond courbe"],
      ["COUPOLE", "Dôme"],
      ["ARCADE", "Arc sur colonnes"],
      ["FACADE", "Devant du bâtiment"],
      ["FRONTON", "Triangle au-dessus de l’entrée"],
      ["CHARPENTE", "Structure du toit"],
      ["ARCHITECTE", "Il dessine les bâtiments"],
      ["PLAN", "Dessin du bâtiment"],
      ["BALCON", "Plateforme en façade"],
    ],
  },
  {
    "n": "Châteaux de la Loire",
    "w": [
      ["CHAMBORD", "Le plus grand"],
      ["CHENONCEAU", "Château des Dames"],
      ["AMBOISE", "Où repose Léonard de Vinci"],
      ["BLOIS", "Château royal"],
      ["VILLANDRY", "Château aux jardins"],
      ["CHEVERNY", "Château blanc du Loir-et-Cher"],
      ["AZAYLERIDEAU", "Château sur l’eau"],
      ["LOIRE", "Fleuve royal"],
      ["TOURELLE", "Petite tour"],
      ["DOUVES", "Fossés remplis d’eau"],
    ],
  },
  {
    "n": "Ponts célèbres",
    "w": [
      ["PONTNEUF", "Le plus vieux de Paris"],
      ["GOLDENGATE", "Pont rouge de San Francisco"],
      ["RIALTO", "Pont de Venise"],
      ["GARD", "Pont romain"],
      ["MILLAU", "Viaduc géant"],
      ["CHARLES", "Pont de Prague"],
      ["AVIGNON", "Sur le pont on y danse"],
      ["TOWERBRIDGE", "Pont de Londres"],
      ["VECCHIO", "Pont de Florence"],
      ["ARCHE", "Partie courbe du pont"],
    ],
  },
  {
    "n": "Merveilles du monde",
    "w": [
      ["PYRAMIDE", "De Khéops"],
      ["PHARE", "D’Alexandrie"],
      ["COLOSSE", "De Rhodes"],
      ["JARDINS", "Suspendus de Babylone"],
      ["MAUSOLEE", "D’Halicarnasse"],
      ["TEMPLE", "D’Artémis"],
      ["STATUE", "De Zeus"],
      ["PETRA", "Cité rose de Jordanie"],
      ["CHICHENITZA", "Pyramide maya"],
      ["CHRIST", "Rédempteur de Rio"],
    ],
  },
  {
    "n": "Grammaire",
    "w": [
      ["NOM", "Il désigne"],
      ["VERBE", "Il exprime l’action"],
      ["ADJECTIF", "Il qualifie"],
      ["ADVERBE", "Il modifie le verbe"],
      ["PRONOM", "Il remplace le nom"],
      ["ARTICLE", "Le, la, les"],
      ["SUJET", "Celui qui fait l’action"],
      ["COMPLEMENT", "Il complète"],
      ["PHRASE", "Suite de mots"],
      ["ACCORD", "Genre et nombre"],
    ],
  },
  {
    "n": "Conjugaison",
    "w": [
      ["PRESENT", "Temps d’aujourd’hui"],
      ["PASSE", "Temps d’hier"],
      ["FUTUR", "Temps de demain"],
      ["IMPARFAIT", "Temps du récit"],
      ["INFINITIF", "Forme de base"],
      ["PARTICIPE", "Passé ou présent"],
      ["SUBJONCTIF", "Mode du souhait"],
      ["CONDITIONNEL", "Mode de l’hypothèse"],
      ["IMPERATIF", "Mode de l’ordre"],
      ["AUXILIAIRE", "Être ou avoir"],
    ],
  },
  {
    "n": "Ponctuation",
    "w": [
      ["POINT", "Fin de phrase"],
      ["VIRGULE", "Petite pause"],
      ["GUILLEMETS", "Ils encadrent une citation"],
      ["PARENTHESES", "Pour une précision"],
      ["TIRET", "Dans un dialogue"],
      ["APOSTROPHE", "Elle remplace une voyelle"],
      ["POINTVIRGULE", "Pause moyenne"],
      ["DEUXPOINTS", "Avant une explication"],
      ["INTERROGATION", "Point de question"],
      ["EXCLAMATION", "Point de surprise"],
    ],
  },
  {
    "n": "Figures de style",
    "w": [
      ["METAPHORE", "Comparaison sans comme"],
      ["COMPARAISON", "Avec comme"],
      ["HYPERBOLE", "Exagération"],
      ["LITOTE", "Dire moins pour suggérer plus"],
      ["ALLITERATION", "Répétition de consonnes"],
      ["OXYMORE", "Obscure clarté"],
      ["ANAPHORE", "Répétition en début de phrase"],
      ["IRONIE", "Dire le contraire"],
      ["ONOMATOPEE", "Mot qui imite un son"],
    ],
  },
  {
    "n": "Nombres",
    "w": [
      ["DEUX", "Paire"],
      ["TROIS", "Trio"],
      ["DIX", "Dizaine"],
      ["CENT", "Centaine"],
      ["MILLE", "Millier"],
      ["ZERO", "Rien"],
      ["DOUZE", "Douzaine"],
      ["PAIR", "Divisible par deux"],
      ["IMPAIR", "Non divisible par deux"],
    ],
  },
  {
    "n": "Mesures",
    "w": [
      ["METRE", "Unité de longueur"],
      ["GRAMME", "Unité de masse"],
      ["LITRE", "Unité de volume"],
      ["SECONDE", "Unité de temps"],
      ["DEGRE", "Unité de température"],
      ["KILOMETRE", "Mille mètres"],
      ["CENTIMETRE", "Centième de mètre"],
      ["TONNE", "Mille kilos"],
      ["HECTARE", "Surface agricole"],
      ["BALANCE", "Elle pèse"],
    ],
  },
  {
    "n": "Heure",
    "w": [
      ["HORLOGE", "Elle sonne les heures"],
      ["AIGUILLE", "Elle tourne sur le cadran"],
      ["CADRAN", "Face de l’horloge"],
      ["MINUTE", "Soixante secondes"],
      ["SECONDE", "Fraction de minute"],
      ["QUART", "Quinze minutes"],
      ["DEMIE", "Trente minutes"],
      ["SABLIER", "Il mesure avec du sable"],
      ["CHRONOMETRE", "Il mesure une durée"],
      ["PENDULE", "Horloge à balancier"],
    ],
  },
  {
    "n": "Argent",
    "w": [
      ["PIECE", "Monnaie métallique"],
      ["BILLET", "Monnaie en papier"],
      ["TIRELIRE", "Pour économiser"],
      ["BANQUE", "Elle garde l’argent"],
      ["EPARGNE", "Argent mis de côté"],
      ["BUDGET", "Prévision des dépenses"],
      ["PORTEMONNAIE", "Petite pochette"],
      ["MONNAIE", "Rendue après achat"],
      ["CHEQUE", "Paiement écrit"],
      ["CARTE", "Bancaire"],
    ],
  },
  {
    "n": "Métiers d'art",
    "w": [
      ["EBENISTE", "Menuisier d’art"],
      ["VERRIER", "Souffleur de verre"],
      ["TAPISSIER", "Il recouvre les sièges"],
      ["RELIEUR", "Il habille les livres"],
      ["VITRAILLISTE", "Il crée des vitraux"],
      ["DOREUR", "Il pose la feuille d’or"],
      ["LUTHIER", "Il fabrique des violons"],
      ["JOAILLIER", "Il crée des bijoux"],
      ["SELLIER", "Il travaille le cuir"],
      ["FERRONNIER", "Il forge le fer"],
    ],
  },
  {
    "n": "Métiers de la mer",
    "w": [
      ["MARIN", "Il navigue"],
      ["PECHEUR", "Il pêche"],
      ["CAPITAINE", "Il commande"],
      ["GARDIEN", "De phare"],
      ["OSTREICULTEUR", "Éleveur d’huîtres"],
      ["DOCKER", "Il charge les navires"],
      ["PLONGEUR", "Il travaille sous l’eau"],
      ["SAUVETEUR", "En mer"],
      ["MAREYEUR", "Vendeur de poisson en gros"],
      ["CHARPENTIER", "De marine"],
    ],
  },
  {
    "n": "Métiers de la santé",
    "w": [
      ["MEDECIN", "Il soigne"],
      ["INFIRMIER", "Il fait les soins"],
      ["DENTISTE", "Il soigne les dents"],
      ["PHARMACIEN", "Il délivre les médicaments"],
      ["KINE", "Il rééduque"],
      ["SAGEFEMME", "Elle accompagne les naissances"],
      ["PEDIATRE", "Médecin des enfants"],
      ["OPTICIEN", "Il vend des lunettes"],
      ["CHIRURGIEN", "Il opère"],
      ["AMBULANCIER", "Il transporte les malades"],
    ],
  },
  {
    "n": "Métiers de la terre",
    "w": [
      ["AGRICULTEUR", "Il cultive les champs"],
      ["MARAICHER", "Il cultive les légumes"],
      ["VITICULTEUR", "Il cultive la vigne"],
      ["APICULTEUR", "Il élève les abeilles"],
      ["ELEVEUR", "Il élève les animaux"],
      ["ARBORICULTEUR", "Il cultive les arbres fruitiers"],
      ["HORTICULTEUR", "Il cultive les fleurs"],
      ["BUCHERON", "Il coupe les arbres"],
      ["FORESTIER", "Il gère la forêt"],
      ["PAYSAGISTE", "Il crée des jardins"],
    ],
  },
  {
    "n": "Métiers du spectacle",
    "w": [
      ["COMEDIEN", "Il joue un rôle"],
      ["DANSEUR", "Il danse"],
      ["MUSICIEN", "Il joue de la musique"],
      ["CLOWN", "Il fait rire"],
      ["MAGICIEN", "Il fait des tours"],
      ["COSTUMIER", "Il crée les costumes"],
      ["REGISSEUR", "Il gère la technique"],
      ["MAQUILLEUR", "Il maquille les artistes"],
      ["ACROBATE", "Il fait des figures"],
    ],
  },
  {
    "n": "Métiers anciens",
    "w": [
      ["FORGERON", "Il bat le fer"],
      ["MEUNIER", "Il moud le grain"],
      ["TONNELIER", "Il fabrique des tonneaux"],
      ["RAMONEUR", "Il nettoie les cheminées"],
      ["CHARRON", "Il fabrique les roues"],
      ["LAVANDIERE", "Elle lave le linge au lavoir"],
      ["ALLUMEUR", "De réverbères"],
      ["CORDONNIER", "Il répare les chaussures"],
      ["TISSERAND", "Il tisse"],
      ["CRIEUR", "Public, il annonce les nouvelles"],
    ],
  },
  {
    "n": "Outils du jardin",
    "w": [
      ["SECATEUR", "Il taille"],
      ["BINETTE", "Elle désherbe"],
      ["FOURCHE", "Pour le foin"],
      ["BROUETTE", "Pour transporter"],
      ["TONDEUSE", "Pour la pelouse"],
      ["SERFOUETTE", "Pour biner"],
      ["TUYAU", "D’arrosage"],
      ["PLANTOIR", "Pour faire des trous"],
      ["GANTS", "De jardinage"],
      ["SCARIFICATEUR", "Pour aérer la pelouse"],
    ],
  },
  {
    "n": "Aviation",
    "w": [
      ["AVION", "Il vole"],
      ["PILOTE", "Il pilote"],
      ["HOTESSE", "De l’air"],
      ["AEROPORT", "Lieu des vols"],
      ["PISTE", "De décollage"],
      ["COCKPIT", "Poste de pilotage"],
      ["AILE", "Elle porte l’avion"],
      ["HELICE", "Elle tourne"],
      ["HUBLOT", "Fenêtre d’avion"],
      ["DECOLLAGE", "Départ en l’air"],
    ],
  },
  {
    "n": "Espace",
    "w": [
      ["FUSEE", "Elle décolle"],
      ["ASTRONAUTE", "Voyageur spatial"],
      ["STATION", "Spatiale"],
      ["SCAPHANDRE", "Combinaison spatiale"],
      ["APESANTEUR", "Absence de poids"],
      ["ORBITE", "Trajectoire"],
      ["LUNE", "Premier pas en 1969"],
      ["NAVETTE", "Véhicule réutilisable"],
      ["SONDE", "Robot explorateur"],
      ["COSMOS", "L’univers"],
    ],
  },
  {
    "n": "Transports en commun",
    "w": [
      ["BUS", "Grand véhicule urbain"],
      ["TRAMWAY", "Train de ville"],
      ["METRO", "Train souterrain"],
      ["ARRET", "Où l’on attend"],
      ["TICKET", "Titre de transport"],
      ["CHAUFFEUR", "Il conduit"],
      ["HORAIRE", "Heure de passage"],
      ["LIGNE", "Itinéraire"],
      ["NAVETTE", "Va-et-vient"],
    ],
  },
  {
    "n": "Véhicules de chantier",
    "w": [
      ["GRUE", "Elle soulève"],
      ["PELLETEUSE", "Elle creuse"],
      ["BULLDOZER", "Il pousse la terre"],
      ["BETONNIERE", "Elle mélange le béton"],
      ["ROULEAU", "Compresseur"],
      ["CAMION", "Benne"],
      ["CHARIOT", "Élévateur"],
      ["NACELLE", "Plateforme élévatrice"],
      ["CASQUE", "Protection du chantier"],
    ],
  },
  {
    "n": "Véhicules d'urgence",
    "w": [
      ["AMBULANCE", "Elle transporte les blessés"],
      ["CAMIONPOMPIER", "Rouge, avec une échelle"],
      ["SIRENE", "Elle prévient"],
      ["GYROPHARE", "Lumière tournante"],
      ["HELICOPTERE", "De secours"],
      ["ECHELLE", "Grande, des pompiers"],
      ["LANCE", "À incendie"],
      ["BRANCARD", "Pour porter un blessé"],
      ["URGENCE", "Situation pressante"],
      ["SECOURISTE", "Il porte secours"],
    ],
  },
  {
    "n": "Deux-roues",
    "w": [
      ["VELO", "À pédales"],
      ["SCOOTER", "Petite moto"],
      ["MOTO", "Deux-roues à moteur"],
      ["TROTTINETTE", "À pousser"],
      ["CASQUE", "Protection obligatoire"],
      ["GUIDON", "Pour diriger"],
      ["BEQUILLE", "Elle tient le deux-roues"],
      ["SELLE", "Pour s’asseoir"],
      ["MOBYLETTE", "Ancien cyclomoteur"],
      ["SIDECAR", "Panier latéral"],
    ],
  },
  {
    "n": "Signalisation",
    "w": [
      ["FEU", "Rouge, orange ou vert"],
      ["PANNEAU", "Il informe"],
      ["STOP", "Arrêt obligatoire"],
      ["PASSAGE", "Piéton"],
      ["ROND", "Point, carrefour giratoire"],
      ["FLECHE", "Elle indique la direction"],
      ["LIMITATION", "De vitesse"],
      ["SENSUNIQUE", "Une seule direction"],
      ["PRIORITE", "Elle se respecte"],
      ["BORNE", "Kilométrique"],
    ],
  },
  {
    "n": "Quartier",
    "w": [
      ["VOISIN", "Il habite à côté"],
      ["BOULANGERIE", "Pain frais"],
      ["SQUARE", "Petit jardin public"],
      ["KIOSQUE", "À journaux"],
      ["FONTAINE", "Point d’eau"],
      ["MARCHE", "Du samedi"],
      ["ECOLE", "Où vont les enfants"],
      ["BIBLIOTHEQUE", "Livres à emprunter"],
      ["PHARMACIE", "Croix verte"],
    ],
  },
  {
    "n": "Commerces",
    "w": [
      ["BOULANGERIE", "Pain et viennoiseries"],
      ["BOUCHERIE", "Viande"],
      ["FROMAGERIE", "Fromages"],
      ["LIBRAIRIE", "Livres"],
      ["FLEURISTE", "Fleurs"],
      ["QUINCAILLERIE", "Clous et outils"],
      ["PATISSERIE", "Gâteaux"],
      ["EPICERIE", "Produits variés"],
      ["POISSONNERIE", "Poissons"],
      ["MERCERIE", "Fils et boutons"],
    ],
  },
  {
    "n": "Matières scolaires",
    "w": [
      ["FRANCAIS", "Langue et littérature"],
      ["MATHEMATIQUES", "Calcul et géométrie"],
      ["HISTOIRE", "Le passé"],
      ["GEOGRAPHIE", "Les lieux du monde"],
      ["SCIENCES", "Expériences"],
      ["MUSIQUE", "Chant et instruments"],
      ["DESSIN", "Arts plastiques"],
      ["SPORT", "Éducation physique"],
      ["ANGLAIS", "Langue étrangère"],
      ["LECTURE", "Apprendre à lire"],
    ],
  },
  {
    "n": "Université",
    "w": [
      ["AMPHITHEATRE", "Grande salle de cours"],
      ["ETUDIANT", "Il étudie"],
      ["PROFESSEUR", "Il enseigne"],
      ["DIPLOME", "On l’obtient"],
      ["EXAMEN", "Épreuve"],
      ["MEMOIRE", "Travail de recherche"],
      ["CAMPUS", "Lieu universitaire"],
      ["LICENCE", "Premier diplôme"],
      ["BIBLIOTHEQUE", "Universitaire"],
      ["COLOCATION", "Logement partagé"],
    ],
  },
  {
    "n": "Internet",
    "w": [
      ["SITE", "Page web"],
      ["LIEN", "On clique dessus"],
      ["NAVIGATEUR", "Logiciel de navigation"],
      ["MOTDEPASSE", "Il protège le compte"],
      ["WIFI", "Connexion sans fil"],
      ["EMOJI", "Petit visage"],
      ["RECHERCHE", "Sur un moteur"],
      ["BLOG", "Journal en ligne"],
      ["NUAGE", "Stockage en ligne"],
    ],
  },
  {
    "n": "Téléphone",
    "w": [
      ["SMARTPHONE", "Téléphone intelligent"],
      ["ECRAN", "Tactile"],
      ["APPLICATION", "Programme du téléphone"],
      ["SONNERIE", "Elle annonce l’appel"],
      ["TEXTO", "Message court"],
      ["CHARGEUR", "Il recharge"],
      ["REPONDEUR", "Messagerie"],
      ["VIBREUR", "Mode silencieux"],
      ["CONTACT", "Personne enregistrée"],
      ["APPEL", "Coup de fil"],
    ],
  },
  {
    "n": "Robots",
    "w": [
      ["ROBOT", "Machine automatique"],
      ["CAPTEUR", "Il détecte"],
      ["MOTEUR", "Il fait bouger"],
      ["PROGRAMME", "Suite d’instructions"],
      ["BRAS", "Articulé"],
      ["ANDROIDE", "Robot humanoïde"],
      ["CIRCUIT", "Électronique"],
      ["AUTOMATE", "Ancêtre du robot"],
      ["DRONE", "Robot volant"],
      ["ALGORITHME", "Méthode de calcul"],
    ],
  },
  {
    "n": "Toundra",
    "w": [
      ["LICHEN", "Nourriture du renne"],
      ["PERGELISOL", "Sol gelé en permanence"],
      ["RENARDPOLAIRE", "Renard blanc"],
      ["HARFANG", "Chouette des neiges"],
      ["LEMMING", "Petit rongeur du Nord"],
      ["BOEUFMUSQUE", "Bovin laineux"],
      ["INUIT", "Peuple du Grand Nord"],
      ["KAYAK", "Embarcation inuite"],
    ],
  },
  {
    "n": "Forêt tropicale",
    "w": [
      ["EPIPHYTE", "Plante qui pousse sur une autre"],
      ["BROMELIACEE", "Plante en rosette tropicale"],
      ["GRENOUILLE", "Venimeuse et colorée"],
      ["PAPILLON", "Morpho bleu"],
      ["HUMIDITE", "Air saturé"],
      ["MOUSSON", "Pluies abondantes"],
      ["CANOPEE", "Étage supérieur"],
      ["SINGE", "Hurleur"],
    ],
  },
  {
    "n": "Récif corallien",
    "w": [
      ["CORAIL", "Animal bâtisseur"],
      ["POISSONCLOWN", "Dans l’anémone"],
      ["ANEMONE", "Abri du poisson clown"],
      ["MURENE", "Poisson serpent des récifs"],
      ["TORTUE", "Imbriquée"],
      ["LAGON", "Eau turquoise"],
      ["PLANCTON", "Nourriture minuscule"],
      ["PLONGEUR", "Il observe les poissons"],
    ],
  },
  {
    "n": "Marais",
    "w": [
      ["ROSEAU", "Plante des berges"],
      ["HERON", "Il pêche patiemment"],
      ["TOURBE", "Sol de marais"],
      ["BARQUE", "Pour circuler"],
      ["GRENOUILLE", "Elle coasse"],
      ["MOUSTIQUE", "Il pique"],
      ["LOUTRE", "Elle nage"],
      ["NENUPHAR", "Il flotte"],
    ],
  },
  {
    "n": "Prairie",
    "w": [
      ["HERBE", "Elle couvre le sol"],
      ["FOIN", "Herbe coupée séchée"],
      ["COQUELICOT", "Fleur rouge"],
      ["VACHE", "Elle broute"],
      ["SAUTERELLE", "Elle saute"],
      ["ALOUETTE", "Elle chante en volant"],
      ["TREFLE", "Petite plante à trois feuilles"],
      ["BOTTE", "De paille"],
    ],
  },
  {
    "n": "Bord de mer",
    "w": [
      ["DIGUE", "Promenade le long de la mer"],
      ["JETEE", "Avancée dans la mer"],
      ["CABINE", "De plage"],
      ["CERFVOLANT", "Il vole au vent"],
      ["CHATEAU", "De sable"],
      ["EMBRUNS", "Gouttes d’eau salée"],
      ["GOELAND", "Grand oiseau marin"],
      ["ESTRAN", "Zone découverte à marée basse"],
    ],
  },
  {
    "n": "Vergers",
    "w": [
      ["POMME", "Fruit croquant"],
      ["POIRE", "Fruit fondant"],
      ["CUEILLETTE", "Récolte des fruits"],
      ["ECHELLE", "Pour atteindre les branches"],
      ["PANIER", "Pour la récolte"],
      ["GREFFE", "Technique d’arboriculteur"],
      ["FLORAISON", "Arbres en fleurs"],
      ["COMPOTE", "Fruits cuits"],
    ],
  },
  {
    "n": "Vignobles",
    "w": [
      ["VIGNE", "Elle donne le raisin"],
      ["RAISIN", "Grappes de fruits"],
      ["VENDANGES", "Récolte du raisin"],
      ["CEP", "Pied de vigne"],
      ["GRAPPE", "Ensemble de grains"],
      ["TONNEAU", "Fût en bois"],
      ["PRESSOIR", "Il presse le raisin"],
      ["COTEAU", "Pente plantée"],
    ],
  },
  {
    "n": "Fermes d'Asie",
    "w": [
      ["RIZIERE", "Champ inondé"],
      ["BUFFLE", "Il laboure"],
      ["THE", "Plantation en terrasses"],
      ["BAMBOU", "Plante géante"],
      ["CANARD", "Il nage dans la rizière"],
      ["TERRASSE", "Champ en escalier"],
      ["CHAPEAU", "Conique"],
      ["MOUSSON", "Saison des pluies"],
    ],
  },
  {
    "n": "Animaux d'Afrique",
    "w": [
      ["ZEBRE", "Rayé noir et blanc"],
      ["GNOU", "Migrateur"],
      ["PHACOCHERE", "Sanglier africain"],
      ["SURICATE", "Guetteur debout"],
      ["OKAPI", "Girafe des forêts"],
      ["LYCAON", "Chien sauvage"],
      ["HIPPOPOTAME", "Il vit dans l’eau"],
      ["CROCODILE", "Du Nil"],
    ],
  },
  {
    "n": "Animaux d'Asie",
    "w": [
      ["PANDA", "Mange du bambou"],
      ["TIGRE", "Du Bengale"],
      ["YAK", "Bovin des montagnes"],
      ["ORANGOUTAN", "Singe roux"],
      ["GIBBON", "Singe aux longs bras"],
      ["ELEPHANT", "D’Asie"],
      ["PAON", "Oiseau d’Inde"],
    ],
  },
  {
    "n": "Animaux d'Amérique",
    "w": [
      ["BISON", "Bovin des plaines"],
      ["GRIZZLY", "Grand ours brun"],
      ["RATONLAVEUR", "Masqué"],
      ["MOUFETTE", "Elle sent mauvais"],
      ["COYOTE", "Chien des prairies"],
      ["TATOU", "Animal à carapace"],
      ["LAMA", "Des Andes"],
      ["COLIBRI", "Minuscule oiseau"],
    ],
  },
  {
    "n": "Animaux d'Europe",
    "w": [
      ["CHEVREUIL", "Petit cervidé"],
      ["SANGLIER", "Cochon sauvage"],
      ["BLAIREAU", "Rayé noir et blanc"],
      ["HERMINE", "Blanche en hiver"],
      ["BELETTE", "Petit carnivore"],
      ["LYNX", "Félin d’Europe"],
      ["BOUQUETIN", "Chèvre des Alpes"],
      ["CIGOGNE", "Oiseau migrateur"],
    ],
  },
  {
    "n": "Glaciers",
    "w": [
      ["CREVASSE", "Fente dans la glace"],
      ["MORAINE", "Débris rocheux"],
      ["SERAC", "Bloc de glace"],
      ["ICEBERG", "Glace flottante"],
      ["FONTE", "Recul du glacier"],
      ["CORDEE", "Alpinistes reliés"],
      ["PIOLET", "Outil d’alpiniste"],
      ["CRAMPONS", "Pointes sous les chaussures"],
    ],
  },
  {
    "n": "Animaux rigolos",
    "w": [
      ["AXOLOTL", "Il sourit toujours"],
      ["PARESSEUX", "Très lent"],
      ["ORNITHORYNQUE", "Bec de canard"],
      ["TAPIR", "Petite trompe"],
      ["QUOKKA", "Animal souriant"],
      ["CAPYBARA", "Gros rongeur paisible"],
      ["FENNEC", "Renard aux grandes oreilles"],
      ["PANGOLIN", "Couvert d’écailles"],
    ],
  },
  {
    "n": "Petites bêtes du sol",
    "w": [
      ["VERDETERRE", "Il aère la terre"],
      ["CLOPORTE", "Il se roule en boule"],
      ["MILLEPATTES", "Beaucoup de pattes"],
      ["LIMACE", "Sans coquille"],
      ["FOURMI", "Ouvrière"],
      ["SCARABEE", "Coléoptère"],
      ["LARVE", "Insecte jeune"],
      ["COLLEMBOLE", "Petit sauteur du sol"],
    ],
  },
  {
    "n": "Papillons",
    "w": [
      ["MONARQUE", "Grand migrateur orange"],
      ["MACHAON", "Papillon jaune à queues"],
      ["PAON", "Du jour, aux ocelles"],
      ["PIERIDE", "Papillon blanc du chou"],
      ["CITRON", "Papillon jaune"],
      ["VULCAIN", "Papillon noir et rouge"],
      ["SPHINX", "Papillon de nuit"],
      ["CHRYSALIDE", "Étape de la métamorphose"],
    ],
  },
  {
    "n": "Arbres d'Afrique",
    "w": [
      ["BAOBAB", "Arbre bouteille"],
      ["ACACIA", "Arbre en parasol"],
      ["FROMAGER", "Arbre géant"],
      ["PALMIER", "À huile"],
      ["KARITE", "Arbre au beurre"],
      ["EBENE", "Bois noir"],
      ["FLAMBOYANT", "Arbre aux fleurs rouges"],
      ["MANGUIER", "Arbre à mangues"],
    ],
  },
  {
    "n": "Plantes médicinales",
    "w": [
      ["CAMOMILLE", "Calmante"],
      ["VERVEINE", "Tisane du soir"],
      ["TILLEUL", "Apaisant"],
      ["SAUGE", "Plante aux vertus nombreuses"],
      ["ECHINACEE", "Fleur pourpre"],
      ["MILLEPERTUIS", "Fleur jaune"],
      ["ALOEVERA", "Gel apaisant"],
      ["VALERIANE", "Aide au sommeil"],
    ],
  },
  {
    "n": "Céramique",
    "w": [
      ["VAISSELLE", "Assiettes et bols"],
      ["EMAIL", "Couche brillante"],
      ["BISCUIT", "Céramique non émaillée"],
      ["TERRECUITE", "Argile cuite"],
      ["GRES", "Céramique dure"],
      ["RAKU", "Technique japonaise"],
      ["FOUR", "Il cuit"],
      ["MOSAIQUE", "Carreaux assemblés"],
    ],
  },
  {
    "n": "Verre",
    "w": [
      ["SOUFFLEUR", "Il façonne le verre"],
      ["VITRAIL", "Fenêtre colorée"],
      ["CRISTAL", "Verre fin"],
      ["MIROIR", "Verre réfléchissant"],
      ["BOCAL", "Récipient en verre"],
      ["FLACON", "Petite bouteille"],
      ["PERLE", "De verre"],
      ["SABLE", "Matière première du verre"],
    ],
  },
  {
    "n": "Cuir et tissage",
    "w": [
      ["CUIR", "Peau travaillée"],
      ["METIER", "À tisser"],
      ["NAVETTE", "Elle passe le fil"],
      ["TRAME", "Fils horizontaux"],
      ["CHAINE", "Fils verticaux"],
      ["TAPIS", "Tissé à la main"],
      ["OSIER", "Branches tressées"],
      ["VANNERIE", "Art de tresser"],
    ],
  },
  {
    "n": "Bricolage",
    "w": [
      ["PERCEUSE", "Elle perce"],
      ["CHEVILLE", "Pour fixer au mur"],
      ["ECROU", "Avec un boulon"],
      ["NIVEAU", "À bulle"],
      ["METRE", "Ruban"],
      ["PONCAGE", "Lissage"],
      ["ESCABEAU", "Petite échelle"],
      ["PEINTURE", "Couleur des murs"],
    ],
  },
  {
    "n": "Papeterie fine",
    "w": [
      ["PLUME", "Pour écrire"],
      ["ENCRIER", "Pot d’encre"],
      ["CACHET", "De cire"],
      ["PAPIERKRAFT", "Papier brun"],
      ["CARNET", "De notes"],
      ["ENVELOPPE", "Pour la lettre"],
      ["CALLIGRAPHIE", "Belle écriture"],
      ["BUVARD", "Il absorbe l’encre"],
    ],
  },
  {
    "n": "Fêtes du monde",
    "w": [
      ["DIWALI", "Fête des lumières"],
      ["HANOUKA", "Fête juive des lumières"],
      ["AID", "Fête musulmane"],
      ["NOUVELAN", "Chinois, lunaire"],
      ["THANKSGIVING", "Action de grâce"],
      ["HOLI", "Fête des couleurs"],
      ["HALLOWEEN", "Nuit des citrouilles"],
      ["CARNAVAL", "Fête masquée"],
    ],
  },
  {
    "n": "Jeux de cour",
    "w": [
      ["ELASTIQUE", "Jeu de saut"],
      ["MARELLE", "On saute de case en case"],
      ["BILLES", "Petites boules"],
      ["CORDE", "À sauter"],
      ["CACHECACHE", "On se cache"],
      ["CHAT", "Perché"],
      ["BALLON", "Prisonnier"],
      ["TOUPIE", "Elle tourne"],
    ],
  },
  {
    "n": "Jeux de société",
    "w": [
      ["DAMES", "Jeu de pions"],
      ["ECHECS", "Jeu de stratégie"],
      ["DOMINOS", "Pièces à points"],
      ["DES", "Petits cubes"],
      ["PLATEAU", "Support du jeu"],
      ["PION", "Pièce qu’on avance"],
      ["TOUR", "À chacun son tour"],
      ["JETON", "Pièce de jeu"],
    ],
  },
  {
    "n": "Peluches",
    "w": [
      ["OURSON", "Nounours"],
      ["LAPIN", "Aux longues oreilles"],
      ["DOUDOU", "Compagnon du coucher"],
      ["LICORNE", "En peluche"],
      ["CHIEN", "Fidèle peluche"],
      ["ELEPHANT", "À trompe douce"],
      ["PINGOUIN", "Tout doux"],
      ["PANDA", "Noir et blanc"],
    ],
  },
  {
    "n": "Contes de fées",
    "w": [
      ["PRINCESSE", "Héroïne"],
      ["CENDRILLON", "Pantoufle de verre"],
      ["BLANCHENEIGE", "Sept nains"],
      ["CHAPERON", "Rouge, dans la forêt"],
      ["POUCET", "Petit, avec ses cailloux"],
      ["CITROUILLE", "Devient carrosse"],
      ["BAGUETTE", "Magique"],
      ["PANTOUFLE", "De vair"],
    ],
  },
  {
    "n": "Fables",
    "w": [
      ["CIGALE", "Elle chante tout l’été"],
      ["FOURMI", "Elle n’est pas prêteuse"],
      ["CORBEAU", "Fromage au bec"],
      ["RENARD", "Flatteur"],
      ["LIEVRE", "Il perd la course"],
      ["TORTUE", "Elle gagne la course"],
      ["LAFONTAINE", "Auteur des fables"],
      ["MORALE", "Leçon de la fable"],
    ],
  },
  {
    "n": "Héros de contes",
    "w": [
      ["PINOCCHIO", "Son nez s’allonge"],
      ["ALADIN", "Lampe merveilleuse"],
      ["PETERPAN", "Ne veut pas grandir"],
      ["HEIDI", "Petite fille des montagnes"],
      ["ALICE", "Au pays des merveilles"],
      ["SINBAD", "Le marin"],
      ["GULLIVER", "Voyageur chez les Lilliputiens"],
      ["OLIVERTWIST", "Orphelin de Dickens"],
    ],
  },
  {
    "n": "Chevalerie",
    "w": [
      ["EPEE", "Arme du chevalier"],
      ["BOUCLIER", "Il protège"],
      ["HEAUME", "Casque fermé"],
      ["LANCE", "Pour la joute"],
      ["ADOUBEMENT", "Cérémonie du chevalier"],
      ["DESTRIER", "Cheval de bataille"],
      ["HONNEUR", "Valeur du chevalier"],
      ["QUETE", "Du Graal"],
    ],
  },
  {
    "n": "Rois et reines",
    "w": [
      ["COURONNE", "Sur la tête du roi"],
      ["SCEPTRE", "Bâton royal"],
      ["TRONE", "Siège du roi"],
      ["PALAIS", "Demeure royale"],
      ["PRINCE", "Fils du roi"],
      ["DUCHESSE", "Femme noble"],
      ["COUR", "Entourage du roi"],
      ["DYNASTIE", "Famille royale"],
    ],
  },
  {
    "n": "Pirates et corsaires",
    "w": [
      ["SURCOUF", "Célèbre corsaire malouin"],
      ["BARBENOIRE", "Pirate redouté"],
      ["SABRE", "Arme courbe"],
      ["BOUSSOLE", "Pour naviguer"],
      ["TONNEAU", "De rhum"],
      ["HAMAC", "Lit de marin"],
      ["MOUSSAILLON", "Jeune marin"],
      ["GALION", "Navire espagnol"],
    ],
  },
  {
    "n": "Savoir-vivre à table",
    "w": [
      ["SERVIETTE", "Sur les genoux"],
      ["COUTEAU", "Pour couper"],
      ["FOURCHETTE", "Pour piquer"],
      ["CUILLERE", "Pour la soupe"],
      ["NAPPE", "Couvre la table"],
      ["CHANDELIER", "Porte-bougies"],
      ["MENU", "Liste du repas"],
      ["CONVIVE", "Invité à table"],
    ],
  },
  {
    "n": "Goûter",
    "w": [
      ["TARTINE", "Pain et chocolat"],
      ["COMPOTE", "Purée de fruits"],
      ["JUS", "De fruits"],
      ["BISCUIT", "Sec ou fourré"],
      ["GAUFRE", "Quadrillée"],
      ["MADELEINE", "Petit gâteau en coquille"],
      ["QUATREHEURES", "Autre nom du goûter"],
    ],
  },
  {
    "n": "Brunch",
    "w": [
      ["OEUFS", "Brouillés"],
      ["PANCAKES", "Petites crêpes épaisses"],
      ["AVOCAT", "Sur toast"],
      ["JUS", "D’orange pressé"],
      ["GRANOLA", "Céréales croustillantes"],
      ["BACON", "Lard grillé"],
      ["SMOOTHIE", "Fruits mixés"],
      ["CAFE", "Pour se réveiller"],
    ],
  },
  {
    "n": "Barbecue",
    "w": [
      ["GRILLE", "Pour cuire"],
      ["BRAISES", "Charbons rouges"],
      ["BROCHETTE", "Morceaux sur pic"],
      ["CHARBON", "Combustible"],
      ["PINCE", "Pour retourner"],
      ["MARINADE", "Pour parfumer"],
      ["MAIS", "Épi grillé"],
      ["FUMEE", "Elle monte"],
    ],
  },
  {
    "n": "Épicerie fine",
    "w": [
      ["TRUFFE", "Champignon précieux"],
      ["CAVIAR", "Œufs d’esturgeon"],
      ["FOIEGRAS", "Spécialité festive"],
      ["SAFRAN", "Épice chère"],
      ["HUILE", "D’olive extra vierge"],
      ["VINAIGRE", "Balsamique"],
      ["CONFIT", "Cuit dans la graisse"],
      ["TAPENADE", "Purée d’olives"],
    ],
  },
  {
    "n": "Fruits secs",
    "w": [
      ["RAISIN", "Sec"],
      ["ABRICOT", "Sec et orangé"],
      ["PRUNEAU", "Prune séchée"],
      ["DATTE", "Fruit du palmier"],
      ["FIGUE", "Sèche"],
      ["CRANBERRY", "Canneberge séchée"],
      ["MANGUE", "Séchée"],
      ["BANANE", "Chips"],
    ],
  },
  {
    "n": "Desserts du monde",
    "w": [
      ["TIRAMISU", "Italie"],
      ["BAKLAVA", "Orient"],
      ["CHEESECAKE", "États-Unis"],
      ["BROWNIE", "Gâteau chocolat américain"],
      ["PAVLOVA", "Meringue d’Océanie"],
      ["MOCHI", "Japon"],
      ["CHURROS", "Espagne"],
      ["STRUDEL", "Autriche"],
    ],
  },
  {
    "n": "Fromages du monde",
    "w": [
      ["CHEDDAR", "Angleterre"],
      ["GOUDA", "Pays-Bas"],
      ["MANCHEGO", "Espagne"],
      ["FETA", "Grèce"],
      ["PARMESAN", "Italie"],
      ["HALLOUMI", "Chypre"],
      ["GRUYERE", "Suisse"],
      ["RICOTTA", "Italie"],
    ],
  },
  {
    "n": "Pains français",
    "w": [
      ["BAGUETTE", "Pain long"],
      ["BATARD", "Pain moyen"],
      ["FICELLE", "Pain fin"],
      ["COURONNE", "Pain en anneau"],
      ["CAMPAGNE", "Pain rustique"],
      ["BRIOCHE", "Pain au beurre"],
      ["FOUGASSE", "Pain plat ajouré"],
      ["PAINDEMIE", "Pain moelleux"],
    ],
  },
  {
    "n": "Sports de raquette",
    "w": [
      ["TENNIS", "Sur terre battue"],
      ["BADMINTON", "Avec un volant"],
      ["PINGPONG", "Tennis de table"],
      ["SQUASH", "Contre un mur"],
      ["PADEL", "Tennis en cage"],
      ["RAQUETTE", "On la tient"],
      ["FILET", "Au milieu du terrain"],
      ["SERVICE", "Premier coup"],
    ],
  },
  {
    "n": "Arts martiaux",
    "w": [
      ["JUDO", "Voie de la souplesse"],
      ["KARATE", "Main vide"],
      ["AIKIDO", "Art de l’harmonie"],
      ["KUNGFU", "Art martial chinois"],
      ["TAICHI", "Gymnastique lente"],
      ["KIMONO", "Tenue d’entraînement"],
      ["CEINTURE", "Couleur du niveau"],
      ["TATAMI", "Tapis"],
    ],
  },
  {
    "n": "Gymnastique",
    "w": [
      ["POUTRE", "Équilibre en hauteur"],
      ["BARRES", "Asymétriques"],
      ["ANNEAUX", "Suspendus"],
      ["CHEVAL", "D’arçons"],
      ["SOL", "Enchaînement au tapis"],
      ["SALTO", "Saut périlleux"],
      ["ROUE", "Figure acrobatique"],
      ["TRAMPOLINE", "Toile rebondissante"],
    ],
  },
  {
    "n": "Sports d'hiver",
    "w": [
      ["SKI", "Alpin ou de fond"],
      ["SNOWBOARD", "Planche à neige"],
      ["LUGE", "Petit traîneau"],
      ["BIATHLON", "Ski et tir"],
      ["CURLING", "Pierres sur la glace"],
      ["BOBSLEIGH", "Engin sur piste glacée"],
      ["RAQUETTES", "Pour marcher sur la neige"],
      ["SAUT", "À ski"],
    ],
  },
  {
    "n": "Équipe de football",
    "w": [
      ["GARDIEN", "Il protège le but"],
      ["DEFENSEUR", "Il défend"],
      ["MILIEU", "Joueur central"],
      ["ATTAQUANT", "Il marque"],
      ["ARBITRE", "Il siffle"],
      ["CORNER", "Coup de coin"],
      ["PENALTY", "Tir au but"],
      ["VESTIAIRE", "Où l’on se change"],
    ],
  },
  {
    "n": "Tour de France",
    "w": [
      ["MAILLOT", "Jaune du leader"],
      ["PELOTON", "Groupe de coureurs"],
      ["ETAPE", "Course du jour"],
      ["COL", "Montée en montagne"],
      ["SPRINT", "Final rapide"],
      ["CARAVANE", "Publicitaire"],
      ["GRIMPEUR", "Bon en montagne"],
      ["CHAMPSELYSEES", "Arrivée finale"],
    ],
  },
  {
    "n": "Navigation de plaisance",
    "w": [
      ["VOILIER", "Bateau à voiles"],
      ["SPI", "Grande voile colorée"],
      ["FOC", "Voile avant"],
      ["BOME", "Barre de la grand-voile"],
      ["BARRE", "Pour diriger"],
      ["REGATE", "Course de voiliers"],
      ["MOUILLAGE", "Arrêt à l’ancre"],
      ["PONTON", "Quai flottant"],
    ],
  },
  {
    "n": "Plongée",
    "w": [
      ["MASQUE", "Pour voir sous l’eau"],
      ["TUBA", "Pour respirer en surface"],
      ["PALMES", "Pour nager vite"],
      ["BOUTEILLE", "D’air"],
      ["COMBINAISON", "En néoprène"],
      ["PALIER", "Arrêt de décompression"],
      ["EPAVE", "Bateau coulé"],
      ["CORAIL", "Récif"],
    ],
  },
  {
    "n": "Surf",
    "w": [
      ["PLANCHE", "On glisse dessus"],
      ["VAGUE", "On la prend"],
      ["SPOT", "Lieu de surf"],
      ["WAX", "Cire antidérapante"],
      ["TUBE", "Vague enroulée"],
      ["LEASH", "Cordon de la planche"],
      ["HOULE", "Mouvement de la mer"],
      ["SURFEUR", "Il glisse"],
    ],
  },
  {
    "n": "Pique-nique en forêt",
    "w": [
      ["CLAIRIERE", "Endroit ensoleillé"],
      ["SOUCHE", "Siège naturel"],
      ["FRAMBOISES", "Cueillies au bord du chemin"],
      ["FOURMIS", "Invitées surprises"],
      ["COUVERTURE", "À carreaux"],
      ["GOURDE", "Eau fraîche"],
      ["OMBRE", "Fraîcheur des arbres"],
      ["GLANDS", "Au sol"],
    ],
  },
  {
    "n": "Nuit étoilée",
    "w": [
      ["ETOILE", "Point brillant"],
      ["LUNE", "Croissant ou pleine"],
      ["VOIELACTEE", "Notre galaxie"],
      ["CONSTELLATION", "Dessin d’étoiles"],
      ["CHOUETTE", "Elle veille"],
      ["SILENCE", "Calme de la nuit"],
      ["LUCIOLE", "Petite lumière"],
      ["REVE", "Il commence"],
    ],
  },
  {
    "n": "Lever de soleil",
    "w": [
      ["AUBE", "Première lumière"],
      ["AURORE", "Ciel rose"],
      ["ROSEE", "Gouttes du matin"],
      ["HORIZON", "Ligne lointaine"],
      ["CHANT", "Des oiseaux"],
      ["BRUME", "Elle se dissipe"],
      ["DORE", "Couleur du ciel"],
      ["REVEIL", "Début du jour"],
    ],
  },
  {
    "n": "Coucher de soleil",
    "w": [
      ["CREPUSCULE", "Tombée du jour"],
      ["ORANGE", "Couleur du ciel"],
      ["SILHOUETTE", "Ombre découpée"],
      ["HORIZON", "Où le soleil disparaît"],
      ["ROSE", "Nuages colorés"],
      ["VEILLEE", "Soirée qui commence"],
      ["LUEUR", "Dernière lumière"],
      ["SOIR", "Fin de journée"],
    ],
  },
  {
    "n": "Pluie",
    "w": [
      ["GOUTTE", "D’eau"],
      ["FLAQUE", "On saute dedans"],
      ["PARAPLUIE", "On l’ouvre"],
      ["BOTTES", "En caoutchouc"],
      ["CIRE", "Manteau imperméable"],
      ["AVERSE", "Pluie soudaine"],
      ["BRUINE", "Pluie fine"],
      ["ARCENCIEL", "Après la pluie"],
    ],
  },
  {
    "n": "Neige",
    "w": [
      ["FLOCON", "Cristal de glace"],
      ["BONHOMME", "De neige"],
      ["BOULE", "Bataille de neige"],
      ["LUGE", "Pour glisser"],
      ["CONGERE", "Amas de neige"],
      ["POUDREUSE", "Neige légère"],
      ["SKI", "Sport de neige"],
      ["TRACE", "Empreinte dans la neige"],
    ],
  },
  {
    "n": "Vent",
    "w": [
      ["BRISE", "Vent léger"],
      ["RAFALE", "Coup de vent"],
      ["GIROUETTE", "Elle tourne"],
      ["EOLIENNE", "Elle produit de l’énergie"],
      ["CERFVOLANT", "Il danse dans le ciel"],
      ["MOULIN", "À vent"],
      ["VOILE", "Elle se gonfle"],
      ["TOURBILLON", "Vent qui tourne"],
    ],
  },
  {
    "n": "Feu de camp",
    "w": [
      ["BRAISE", "Charbon rouge"],
      ["ETINCELLE", "Petite lumière qui saute"],
      ["FLAMME", "Elle danse"],
      ["BUCHE", "Bois à brûler"],
      ["GUIMAUVE", "Grillée au bout d’un bâton"],
      ["CHANSON", "Autour du feu"],
      ["CENDRES", "Restes du feu"],
      ["FUMEE", "Elle monte vers le ciel"],
    ],
  },
  {
    "n": "Bibliothèque intime",
    "w": [
      ["ROMAN", "Long récit"],
      ["POLAR", "Roman policier"],
      ["BIOGRAPHIE", "Récit d’une vie"],
      ["ESSAI", "Réflexion écrite"],
      ["NOUVELLE", "Court récit"],
      ["ATLAS", "Livre de cartes"],
      ["DICTIONNAIRE", "Livre de mots"],
    ],
  },
  {
    "n": "Instruments du monde",
    "w": [
      ["SITAR", "Inde"],
      ["KORA", "Afrique de l’Ouest"],
      ["BALALAIKA", "Russie"],
      ["DIDGERIDOO", "Australie"],
      ["UKULELE", "Hawaï"],
      ["CORNEMUSE", "Écosse"],
      ["BANDONEON", "Argentine"],
      ["KOTO", "Japon"],
    ],
  },
  {
    "n": "Danses du monde",
    "w": [
      ["VALSE", "Vienne"],
      ["TANGO", "Buenos Aires"],
      ["FLAMENCO", "Andalousie"],
      ["SAMBA", "Rio"],
      ["SIRTAKI", "Grèce"],
      ["SALSA", "Cuba"],
      ["POLKA", "Bohême"],
      ["HULA", "Hawaï"],
    ],
  },
  {
    "n": "Plats du monde",
    "w": [
      ["PAELLA", "Espagne"],
      ["SUSHI", "Japon"],
      ["PIZZA", "Italie"],
      ["TACOS", "Mexique"],
      ["COUSCOUS", "Maghreb"],
      ["PHO", "Vietnam"],
      ["GOULASH", "Hongrie"],
      ["FONDUE", "Suisse"],
    ],
  },
  {
    "n": "Boissons chaudes",
    "w": [
      ["THE", "Infusion de feuilles"],
      ["CAFE", "Grains torréfiés"],
      ["CHOCOLAT", "Cacao et lait"],
      ["TISANE", "Plantes infusées"],
      ["CHAI", "Thé épicé"],
      ["VINCHAUD", "Boisson de Noël"],
      ["LAITCHAUD", "Au miel"],
      ["GROG", "Boisson chaude au citron"],
    ],
  },
  {
    "n": "Nature en ville",
    "w": [
      ["ARBRE", "D’alignement"],
      ["PARC", "Espace vert"],
      ["JARDINIER", "Municipal"],
      ["ABEILLE", "Ruches sur les toits"],
      ["MOINEAU", "Oiseau des villes"],
      ["POTAGER", "Partagé"],
      ["COMPOST", "De quartier"],
      ["TOITURE", "Végétalisée"],
    ],
  },
  {
    "n": "Jardin japonais",
    "w": [
      ["BONSAI", "Arbre miniature"],
      ["CARPEKOI", "Poisson coloré du bassin"],
      ["LANTERNE", "En pierre"],
      ["ERABLE", "Rouge à l’automne"],
      ["GRAVIER", "Ratissé en vagues"],
      ["PONT", "Arrondi au-dessus de l’eau"],
      ["BAMBOU", "Fontaine qui bascule"],
      ["MOUSSE", "Tapis vert"],
    ],
  },
  {
    "n": "Jardin anglais",
    "w": [
      ["ROSIER", "Grimpant sur l’arche"],
      ["PELOUSE", "Bien tondue"],
      ["TONNELLE", "Abri fleuri"],
      ["PIVOINE", "Grosse fleur"],
      ["GLORIETTE", "Petit pavillon"],
      ["BANC", "Pour se reposer"],
      ["MASSIF", "De fleurs"],
      ["ALLEE", "Chemin sinueux"],
    ],
  },
  {
    "n": "Jardin d'hiver",
    "w": [
      ["VERANDA", "Pièce vitrée"],
      ["AGRUMES", "Citronniers en pot"],
      ["FOUGERE", "Plante d’ombre"],
      ["FAUTEUIL", "En rotin"],
      ["SOLEIL", "Il réchauffe la pièce"],
      ["ORCHIDEE", "Fleur exotique"],
      ["THE", "Servi entre les plantes"],
      ["LUMIERE", "Douce et filtrée"],
    ],
  },
  {
    "n": "Balcon",
    "w": [
      ["JARDINIERE", "Bac à fleurs"],
      ["GERANIUM", "Fleur des balcons"],
      ["TOMATE", "Cerise en pot"],
      ["TRANSAT", "Pour se détendre"],
      ["GUIRLANDE", "Lumineuse"],
      ["RAMBARDE", "Garde-corps"],
      ["VUE", "Sur la ville"],
      ["FRAISIER", "En suspension"],
    ],
  },
  {
    "n": "Grenier",
    "w": [
      ["MALLE", "Coffre ancien"],
      ["POUSSIERE", "Elle recouvre tout"],
      ["LUCARNE", "Petite fenêtre"],
      ["POUTRE", "En bois"],
      ["SOUVENIR", "Objet du passé"],
      ["ARAIGNEE", "Toile dans un coin"],
      ["CARTON", "De vieux jouets"],
      ["ESCALIER", "Raide pour monter"],
    ],
  },
  {
    "n": "Cave",
    "w": [
      ["BOCAL", "De conserves"],
      ["POMMES", "Stockées pour l’hiver"],
      ["ETAGERE", "Pour ranger"],
      ["FRAICHEUR", "Température constante"],
      ["VOUTE", "Plafond de pierre"],
      ["LAMPE", "Torche"],
      ["CHAUDIERE", "Au sous-sol"],
      ["OUTILS", "Rangés au mur"],
    ],
  },
  {
    "n": "Cabane dans les arbres",
    "w": [
      ["ECHELLE", "Pour monter"],
      ["PLANCHES", "Pour construire"],
      ["CORDE", "Pour hisser"],
      ["FEUILLAGE", "Il cache la cabane"],
      ["LONGUEVUE", "Pour observer"],
      ["DRAPEAU", "Sur le toit"],
      ["TRAPPE", "Pour entrer"],
      ["SECRET", "Code d’accès"],
    ],
  },
  {
    "n": "Château de sable",
    "w": [
      ["SEAU", "Moule à tours"],
      ["PELLE", "Pour creuser"],
      ["DOUVES", "Fossé rempli d’eau"],
      ["TOUR", "En forme de seau"],
      ["COQUILLAGE", "Décoration"],
      ["DRAPEAU", "Sur le sommet"],
      ["VAGUE", "Elle détruit tout"],
      ["SABLE", "Mouillé, il tient"],
    ],
  },
  {
    "n": "Atelier d'artiste",
    "w": [
      ["CHEVALET", "Support de toile"],
      ["PALETTE", "Mélange des couleurs"],
      ["TABLIER", "Taché de peinture"],
      ["VERRIERE", "Grande fenêtre de lumière"],
      ["TUBE", "De peinture"],
      ["PINCEAUX", "Dans un pot"],
      ["TOILE", "Vierge ou peinte"],
      ["MODELE", "Il pose"],
    ],
  },
  {
    "n": "Boîte à couture",
    "w": [
      ["BOBINE", "De fil"],
      ["EPINGLE", "Elle tient le tissu"],
      ["METRE", "Ruban de couturière"],
      ["CISEAUX", "À tissu"],
      ["PELOTE", "À épingles"],
      ["BOUTONS", "De toutes les couleurs"],
      ["CRAIE", "De tailleur"],
    ],
  },
  {
    "n": "Fournitures d'école",
    "w": [
      ["ARDOISE", "Pour écrire à la craie"],
      ["CRAYONS", "De couleur"],
      ["TAILLECRAYON", "Pour l’aiguiser"],
      ["EQUERRE", "Angle droit"],
      ["RAPPORTEUR", "Pour les angles"],
      ["FEUTRES", "Pour colorier"],
      ["AGENDA", "Pour les devoirs"],
      ["PROTEGECAHIER", "Couverture de cahier"],
    ],
  },
  {
    "n": "Récréation",
    "w": [
      ["MARELLE", "Craie au sol"],
      ["BALLON", "On joue avec"],
      ["CORDE", "À sauter"],
      ["CHAT", "Jeu de poursuite"],
      ["PREAU", "Abri de la cour"],
      ["SONNERIE", "Fin de récré"],
      ["GOUTER", "Petite collation"],
      ["COPAINS", "Amis de jeu"],
    ],
  },
  {
    "n": "Sortie scolaire",
    "w": [
      ["CAR", "Bus scolaire"],
      ["MUSEE", "Visite culturelle"],
      ["PIQUENIQUE", "Repas dehors"],
      ["GUIDE", "Il explique"],
      ["GROUPE", "Ensemble d’élèves"],
      ["AUTORISATION", "Signée par les parents"],
      ["SOUVENIR", "De la journée"],
    ],
  },
  {
    "n": "Atelier pâtisserie",
    "w": [
      ["FOUET", "Pour battre"],
      ["MOULE", "Pour cuire"],
      ["POCHE", "À douille"],
      ["DOUILLE", "Embout décoratif"],
      ["TAMIS", "Pour la farine"],
      ["SPATULE", "Pour lisser"],
      ["BALANCE", "Pour peser"],
      ["MINUTEUR", "Pour la cuisson"],
    ],
  },
  {
    "n": "Potager d'été",
    "w": [
      ["TOMATE", "Rouge et juteuse"],
      ["COURGETTE", "Elle pousse vite"],
      ["HARICOT", "Vert ou beurre"],
      ["AUBERGINE", "Violette"],
      ["POIVRON", "Rouge, jaune ou vert"],
      ["CONCOMBRE", "Frais"],
      ["BASILIC", "Aromatique"],
      ["ARROSOIR", "Indispensable l’été"],
    ],
  },
  {
    "n": "Serre",
    "w": [
      ["SEMIS", "Jeunes pousses"],
      ["VITRE", "Laisse passer la lumière"],
      ["CHALEUR", "Elle s’accumule"],
      ["GODET", "Petit pot"],
      ["ARROSAGE", "Goutte à goutte"],
      ["TERREAU", "Terre riche"],
      ["BOUTURE", "Morceau de plante replanté"],
      ["HUMIDITE", "Air chargé d’eau"],
    ],
  },
  {
    "n": "Abécédaire des animaux",
    "w": [
      ["ANTILOPE", "A comme..."],
      ["BALEINE", "B comme..."],
      ["CHAMEAU", "C comme..."],
      ["DAUPHIN", "D comme..."],
      ["ELEPHANT", "E comme..."],
      ["FURET", "F comme..."],
      ["GIRAFE", "G comme..."],
      ["HERISSON", "H comme..."],
    ],
  },
  {
    "n": "Bruits de la ferme",
    "w": [
      ["MEUGLEMENT", "Cri de la vache"],
      ["BELEMENT", "Cri du mouton"],
      ["HENNISSEMENT", "Cri du cheval"],
      ["CAQUETAGE", "Cri de la poule"],
      ["COCORICO", "Chant du coq"],
      ["GROGNEMENT", "Cri du cochon"],
      ["ABOIEMENT", "Cri du chien"],
      ["MIAULEMENT", "Cri du chat"],
    ],
  },
  {
    "n": "Bébés animaux",
    "w": [
      ["POULAIN", "Bébé cheval"],
      ["VEAU", "Bébé vache"],
      ["AGNEAU", "Bébé mouton"],
      ["CHATON", "Bébé chat"],
      ["CHIOT", "Bébé chien"],
      ["FAON", "Bébé biche"],
      ["OURSON", "Bébé ours"],
      ["LIONCEAU", "Bébé lion"],
    ],
  },
  {
    "n": "Couleurs des animaux",
    "w": [
      ["FLAMANT", "Rose"],
      ["CORBEAU", "Noir"],
      ["CYGNE", "Blanc"],
      ["CANARI", "Jaune"],
      ["ECUREUIL", "Roux"],
      ["GRENOUILLE", "Verte"],
      ["ZEBRE", "Rayé"],
      ["COCCINELLE", "Rouge à points noirs"],
    ],
  },
  {
    "n": "Animaux et vitesse",
    "w": [
      ["GUEPARD", "Le plus rapide sur terre"],
      ["FAUCON", "Le plus rapide en piqué"],
      ["ESCARGOT", "Très lent"],
      ["TORTUE", "Lente mais sûre"],
      ["LIEVRE", "Rapide coureur"],
      ["ESPADON", "Poisson très rapide"],
      ["PARESSEUX", "Le plus lent"],
      ["AUTRUCHE", "Grande coureuse"],
    ],
  },
  {
    "n": "Records de la nature",
    "w": [
      ["BALEINE", "Plus grand animal"],
      ["GIRAFE", "Plus grand animal terrestre en hauteur"],
      ["SEQUOIA", "Arbre géant"],
      ["EVEREST", "Plus haut sommet"],
      ["NIL", "Long fleuve"],
      ["PACIFIQUE", "Plus grand océan"],
      ["SAHARA", "Grand désert chaud"],
      ["COLIBRI", "Plus petit oiseau"],
    ],
  },
  {
    "n": "Les quatre éléments",
    "w": [
      ["EAU", "Élément liquide"],
      ["FEU", "Élément brûlant"],
      ["AIR", "Élément invisible"],
      ["TERRE", "Élément solide"],
      ["VAGUE", "Mouvement de l’eau"],
      ["FLAMME", "Langue de feu"],
      ["SOUFFLE", "Mouvement de l’air"],
      ["ARGILE", "Terre à modeler"],
    ],
  },
  {
    "n": "Le temps qui passe",
    "w": [
      ["SECONDE", "Instant bref"],
      ["JOURNEE", "Du matin au soir"],
      ["SEMAINE", "Sept jours"],
      ["SAISON", "Trois mois"],
      ["ANNEE", "Douze mois"],
      ["SIECLE", "Cent ans"],
      ["MILLENAIRE", "Mille ans"],
      ["INSTANT", "Moment présent"],
    ],
  },
  {
    "n": "Instants de bonheur",
    "w": [
      ["SOURIRE", "Signe de joie"],
      ["CALIN", "Câlin chaleureux"],
      ["FOURIRE", "Rire incontrôlable"],
      ["SIESTE", "Petit repos"],
      ["LECTURE", "Moment calme"],
      ["BALADE", "Promenade"],
      ["RETROUVAILLES", "Joie de se revoir"],
      ["SURPRISE", "Bonne nouvelle"],
    ],
  },
  {
    "n": "Rituels du soir",
    "w": [
      ["PYJAMA", "Tenue de nuit"],
      ["HISTOIRE", "Avant de dormir"],
      ["BROSSEADENTS", "Avant le coucher"],
      ["VEILLEUSE", "Petite lumière"],
      ["TISANE", "Boisson du soir"],
      ["BERCEUSE", "Chanson douce"],
      ["BISOU", "De bonne nuit"],
      ["COUETTE", "Pour se blottir"],
    ],
  },
  {
    "n": "Voyage en train de nuit",
    "w": [
      ["COUCHETTE", "Lit étroit"],
      ["COMPARTIMENT", "Petite cabine"],
      ["CONTROLEUR", "Il passe la nuit"],
      ["PAYSAGE", "Qui défile"],
      ["GARE", "Arrivée au matin"],
      ["VALISE", "Sous la banquette"],
      ["RAILS", "Bercement régulier"],
      ["LAMPE", "De lecture"],
    ],
  },
  {
    "n": "Road trip",
    "w": [
      ["CARTE", "Routière"],
      ["COFFRE", "Plein de bagages"],
      ["AUTOROUTE", "Voie rapide"],
      ["AIRE", "De repos"],
      ["PLAYLIST", "Musique du voyage"],
      ["MOTEL", "Hôtel de bord de route"],
      ["PANORAMA", "Point de vue"],
      ["ESSENCE", "Plein du réservoir"],
    ],
  },
  {
    "n": "Vacances à la montagne",
    "w": [
      ["CHALET", "En bois"],
      ["RANDONNEE", "Balade en altitude"],
      ["TELEPHERIQUE", "Cabine suspendue"],
      ["LAC", "D’altitude"],
      ["FROMAGE", "De montagne"],
      ["MARMOTTE", "Elle siffle"],
      ["SOMMET", "Point culminant"],
      ["REFUGE", "Abri de montagne"],
    ],
  },
  {
    "n": "Vacances à la campagne",
    "w": [
      ["FERME", "Lieu de séjour"],
      ["TRACTEUR", "Engin agricole"],
      ["POTAGER", "Légumes frais"],
      ["CHEMIN", "De terre"],
      ["VELO", "Pour se balader"],
      ["GITE", "Logement rural"],
      ["VERGER", "Arbres fruitiers"],
      ["MARCHE", "Du village"],
    ],
  },
  {
    "n": "Vacances en ville",
    "w": [
      ["MUSEE", "Visite culturelle"],
      ["TERRASSE", "De café"],
      ["METRO", "Pour se déplacer"],
      ["MONUMENT", "À visiter"],
      ["PLAN", "De la ville"],
      ["BOUTIQUE", "Pour flâner"],
      ["QUARTIER", "À découvrir"],
      ["SPECTACLE", "Le soir"],
    ],
  },
  {
    "n": "Brocante",
    "w": [
      ["VIDEGRENIER", "Vente entre particuliers"],
      ["CHINER", "Chercher des trésors"],
      ["ANTIQUAIRE", "Marchand d’objets anciens"],
      ["VAISSELLE", "Ancienne"],
      ["DISQUE", "Vinyle"],
      ["BIBELOT", "Petit objet"],
      ["MARCHANDER", "Négocier le prix"],
      ["TROUVAILLE", "Objet déniché"],
    ],
  },
  {
    "n": "Vieux objets",
    "w": [
      ["GRAMOPHONE", "Ancien tourne-disque"],
      ["MACHINE", "À écrire"],
      ["LAMPEAPETROLE", "Ancien éclairage"],
      ["CADRAN", "Téléphone à..."],
      ["MALLE", "Coffre de voyage"],
      ["HORLOGE", "Comtoise"],
      ["MOULIN", "À café"],
      ["DIAPOSITIVE", "Photo projetée"],
    ],
  },
  {
    "n": "Calligraphie",
    "w": [
      ["PLUME", "Outil d’écriture"],
      ["ENCRE", "De Chine"],
      ["LETTRINE", "Grande lettre décorée"],
      ["PAPIER", "Épais et doux"],
      ["ONCIALE", "Écriture médiévale"],
      ["TRAIT", "Plein et délié"],
      ["PINCEAU", "Calligraphie chinoise"],
      ["PATIENCE", "Qualité nécessaire"],
    ],
  },
  {
    "n": "Comètes et astéroïdes",
    "w": [
      ["COMETE", "Astre à queue"],
      ["HALLEY", "Comète célèbre"],
      ["QUEUE", "Traînée lumineuse"],
      ["NOYAU", "Cœur glacé"],
      ["METEORITE", "Pierre tombée du ciel"],
      ["CRATERE", "Trou d’impact"],
      ["CEINTURE", "D’astéroïdes"],
      ["ETOILEFILANTE", "Trait dans la nuit"],
    ],
  },
  {
    "n": "Lune",
    "w": [
      ["CROISSANT", "Phase en forme de C"],
      ["PLEINE", "Lune toute ronde"],
      ["NOUVELLE", "Lune invisible"],
      ["CRATERE", "Trou à la surface"],
      ["MAREE", "Influencée par la lune"],
      ["ECLIPSE", "Ombre de la Terre"],
      ["APOLLO", "Missions lunaires"],
      ["QUARTIER", "Moitié éclairée"],
    ],
  },
  {
    "n": "Soleil",
    "w": [
      ["RAYON", "De lumière"],
      ["ETOILE", "Le Soleil en est une"],
      ["ECLIPSE", "Soleil caché"],
      ["TACHE", "Solaire"],
      ["CHALEUR", "Elle nous réchauffe"],
      ["LEVER", "Du soleil"],
      ["COUCHER", "Du soleil"],
      ["SOLSTICE", "Jour le plus long"],
    ],
  },
  {
    "n": "Cristaux de neige",
    "w": [
      ["FLOCON", "Cristal de neige"],
      ["HEXAGONE", "Forme à six côtés"],
      ["SYMETRIE", "Équilibre parfait"],
      ["GIVRE", "Fins cristaux"],
      ["GELEE", "Blanche"],
      ["FRIMAS", "Brouillard glacé"],
      ["CRISTAL", "Forme géométrique"],
      ["DENDRITE", "Branche du flocon"],
    ],
  },
  {
    "n": "Bonbons d'antan",
    "w": [
      ["COQUELICOT", "Bonbon de Nemours"],
      ["VIOLETTE", "Bonbon de Toulouse"],
      ["BETISE", "De Cambrai"],
      ["BERLINGOT", "De Carpentras"],
      ["CALISSON", "D’Aix"],
      ["NOUGAT", "De Montélimar"],
      ["CARAMBAR", "Barre au caramel"],
      ["ROUDOUDOU", "Bonbon dans un coquillage"],
    ],
  },
  {
    "n": "Bord de rivière",
    "w": [
      ["BERGE", "Rive"],
      ["SAULE", "Pleureur"],
      ["PECHEUR", "Avec sa canne"],
      ["BARQUE", "Amarrée"],
      ["LIBELLULE", "Elle survole l’eau"],
      ["GALET", "Pierre ronde"],
      ["CLAPOTIS", "Bruit de l’eau"],
      ["GUE", "Passage peu profond"],
    ],
  },
  {
    "n": "Vie au phare",
    "w": [
      ["GARDIEN", "Il veille"],
      ["LANTERNE", "Elle tourne"],
      ["ESCALIER", "En colimaçon"],
      ["TEMPETE", "Les vagues frappent"],
      ["CORNE", "De brume"],
      ["REGISTRE", "Journal de bord"],
      ["ILOT", "Rocher isolé"],
      ["SIGNAL", "Lumineux"],
    ],
  },
  {
    "n": "Vie en mer",
    "w": [
      ["NAVIRE", "Grand bateau"],
      ["EQUIPAGE", "Marins à bord"],
      ["QUART", "Tour de garde"],
      ["ROULIS", "Balancement"],
      ["BOUSSOLE", "Pour s’orienter"],
      ["HORIZON", "Ligne lointaine"],
      ["GOUVERNAIL", "Pour diriger"],
      ["MOUETTE", "Elle suit le bateau"],
    ],
  },
  {
    "n": "Atelier du Père Noël",
    "w": [
      ["LUTIN", "Assistant"],
      ["JOUET", "Fabriqué avec soin"],
      ["TRAINEAU", "Prêt pour le 24"],
      ["RENNE", "Attelé au traîneau"],
      ["LISTE", "Des enfants sages"],
      ["HOTTE", "Sac de jouets"],
      ["CHEMINEE", "Pour descendre"],
      ["POLE", "Nord, adresse de l’atelier"],
    ],
  },
  {
    "n": "Fête de la musique",
    "w": [
      ["JUIN", "Le 21"],
      ["RUE", "Scène improvisée"],
      ["CONCERT", "Gratuit"],
      ["GUITARE", "Instrument populaire"],
      ["CHORALE", "Chant collectif"],
      ["DANSE", "Dans les rues"],
      ["AMATEUR", "Musicien du dimanche"],
      ["SOLSTICE", "D’été"],
    ],
  },
  {
    "n": "Kermesse",
    "w": [
      ["STAND", "De jeux"],
      ["CHAMBOULETOUT", "Jeu de boîtes"],
      ["PECHE", "Aux canards"],
      ["TOMBOLA", "Jeu de lots"],
      ["LOT", "À gagner"],
      ["GATEAUX", "Faits maison"],
      ["MAQUILLAGE", "Pour enfants"],
      ["CREPES", "Vendues sur place"],
    ],
  },
  {
    "n": "Cuisine mexicaine",
    "w": [
      ["TORTILLA", "Galette de maïs"],
      ["GUACAMOLE", "Purée d’avocat"],
      ["BURRITO", "Tortilla roulée garnie"],
      ["NACHOS", "Chips de maïs"],
      ["SALSA", "Sauce tomate pimentée"],
      ["PIMENT", "Jalapeño"],
      ["ENCHILADA", "Tortilla nappée de sauce"],
      ["HARICOTS", "Noirs ou rouges"],
    ],
  },
  {
    "n": "Cuisine bretonne",
    "w": [
      ["GALETTE", "De sarrasin"],
      ["CIDRE", "Boisson de pomme"],
      ["KOUIGNAMANN", "Gâteau au beurre"],
      ["FARBRETON", "Flan aux pruneaux"],
      ["SARRASIN", "Blé noir"],
      ["CRAMPOUZ", "Crêpe en breton"],
      ["BEURRESALE", "Spécialité bretonne"],
      ["CARAMEL", "Au beurre salé"],
    ],
  },
  {
    "n": "Cuisine provençale",
    "w": [
      ["RATATOUILLE", "Légumes mijotés"],
      ["BOUILLABAISSE", "Soupe de poissons"],
      ["AIOLI", "Mayonnaise à l’ail"],
      ["PISSALADIERE", "Tarte aux oignons"],
      ["NAVETTE", "Biscuit de Marseille"],
      ["SOCCA", "Galette de pois chiches"],
      ["PISTOU", "Sauce au basilic"],
      ["HERBES", "De Provence"],
    ],
  },
  {
    "n": "Cuisine italienne",
    "w": [
      ["RISOTTO", "Riz crémeux"],
      ["LASAGNES", "Pâtes en couches"],
      ["GNOCCHI", "Boulettes de pomme de terre"],
      ["PESTO", "Sauce au basilic"],
      ["CARBONARA", "Pâtes aux œufs"],
      ["POLENTA", "Semoule de maïs"],
      ["FOCACCIA", "Pain plat à l’huile"],
      ["GELATO", "Glace italienne"],
    ],
  },
  {
    "n": "Journalisme",
    "w": [
      ["REPORTER", "Il enquête sur le terrain"],
      ["REDACTION", "Équipe du journal"],
      ["UNE", "Première page"],
      ["EDITORIAL", "Article d’opinion"],
      ["INTERVIEW", "Questions-réponses"],
      ["SCOOP", "Information exclusive"],
      ["SOURCE", "Origine de l’info"],
      ["BOUCLAGE", "Fin de la mise en page"],
    ],
  },
  {
    "n": "Cinéma de quartier",
    "w": [
      ["AFFICHE", "Annonce du film"],
      ["SEANCE", "Horaire de projection"],
      ["FAUTEUIL", "Rouge et moelleux"],
      ["PROJECTEUR", "Machine à images"],
      ["ECRAN", "Grand et blanc"],
      ["POPCORN", "Grignotage"],
      ["OUVREUSE", "Elle place les spectateurs"],
      ["BANDEANNONCE", "Avant-goût du film"],
    ],
  },
  {
    "n": "Métiers du bois",
    "w": [
      ["MENUISIER", "Il fait des meubles"],
      ["CHARPENTIER", "Il fait les toits"],
      ["EBENISTE", "Meubles précieux"],
      ["TONNELIER", "Il fabrique des tonneaux"],
      ["SCULPTEUR", "Il taille le bois"],
      ["BUCHERON", "Il abat les arbres"],
      ["RABOT", "Pour aplanir"],
      ["SCIERIE", "Où l’on débite les troncs"],
    ],
  },
  {
    "n": "Océan profond",
    "w": [
      ["ABYSSES", "Grandes profondeurs"],
      ["CALMAR", "Géant"],
      ["BAUDROIE", "Poisson lanterne"],
      ["PRESSION", "Écrasante au fond"],
      ["SOUSMARIN", "Engin d’exploration"],
      ["FOSSE", "Des Mariannes"],
      ["OBSCURITE", "Noir complet"],
    ],
  },
  {
    "n": "Animaux d'Australie",
    "w": [
      ["KANGOUROU", "Il saute avec sa poche"],
      ["KOALA", "Mange de l’eucalyptus"],
      ["WOMBAT", "Marsupial fouisseur"],
      ["EMEU", "Grand oiseau coureur"],
      ["DINGO", "Chien sauvage"],
      ["OPOSSUM", "Marsupial nocturne"],
      ["KOOKABURRA", "Oiseau rieur"],
      ["ECHIDNE", "Fourmilier épineux"],
    ],
  },
  {
    "n": "Insectes du jardin",
    "w": [
      ["COCCINELLE", "Mangeuse de pucerons"],
      ["BOURDON", "Gros et velu"],
      ["SAUTERELLE", "Bonne sauteuse"],
      ["PUCERON", "Sur les rosiers"],
      ["PERCEOREILLE", "Pinces au bout du corps"],
      ["GUEPE", "Rayée jaune et noir"],
      ["CRIQUET", "Il stridule"],
      ["SYRPHE", "Mouche déguisée en guêpe"],
    ],
  },
  {
    "n": "Musique classique",
    "w": [
      ["SYMPHONIE", "Œuvre pour orchestre"],
      ["CONCERTO", "Soliste et orchestre"],
      ["SONATE", "Pour un ou deux instruments"],
      ["OPERA", "Théâtre chanté"],
      ["CHEF", "D’orchestre"],
      ["PARTITION", "Musique écrite"],
      ["MOZART", "Compositeur autrichien"],
      ["BACH", "Compositeur allemand"],
    ],
  },
  {
    "n": "Jeux de mots",
    "w": [
      ["CHARADE", "Mon premier..."],
      ["REBUS", "Dessins à déchiffrer"],
      ["ANAGRAMME", "Lettres mélangées"],
      ["PALINDROME", "Se lit dans les deux sens"],
      ["CONTREPETERIE", "Inversion de sons"],
      ["CALEMBOUR", "Jeu sur les sons"],
      ["DEVINETTE", "Question amusante"],
      ["ACROSTICHE", "Poème aux initiales"],
    ],
  },
  {
    "n": "Calendrier",
    "w": [
      ["JANVIER", "Premier mois"],
      ["FEVRIER", "Mois le plus court"],
      ["MARS", "Arrivée du printemps"],
      ["AVRIL", "Poisson d’avril"],
      ["MAI", "Muguet"],
      ["JUIN", "Début de l’été"],
      ["JUILLET", "Fête nationale"],
      ["AOUT", "Grandes vacances"],
    ],
  },
  {
    "n": "Fin d'année",
    "w": [
      ["SEPTEMBRE", "Rentrée"],
      ["OCTOBRE", "Feuilles mortes"],
      ["NOVEMBRE", "Brouillard"],
      ["DECEMBRE", "Fêtes"],
      ["CALENDRIER", "Pour compter les jours"],
      ["AGENDA", "Rendez-vous notés"],
      ["SAISON", "Il y en a quatre"],
      ["REVEILLON", "Dernier soir de l’année"],
    ],
  },
  {
    "n": "Cuisine grecque",
    "w": [
      ["MOUSSAKA", "Gratin d’aubergines"],
      ["TZATZIKI", "Yaourt au concombre"],
      ["FETA", "Fromage de brebis"],
      ["SOUVLAKI", "Brochette"],
      ["OLIVES", "De Kalamata"],
      ["DOLMAS", "Feuilles de vigne farcies"],
      ["GYROS", "Viande en pita"],
      ["SPANAKOPITA", "Feuilleté aux épinards"],
    ],
  },
  {
    "n": "Studio de radio",
    "w": [
      ["MICROPHONE", "Il capte la voix"],
      ["CASQUE", "Pour s’entendre"],
      ["CONSOLE", "Table de mixage"],
      ["DIRECT", "Émission en..."],
      ["REGIE", "Derrière la vitre"],
      ["CHRONIQUEUR", "Il tient une rubrique"],
      ["FLASHINFO", "Bref bulletin"],
      ["PODCAST", "Émission à réécouter"],
    ],
  },
  {
    "n": "Mercerie",
    "w": [
      ["RUBAN", "Bande de tissu"],
      ["GALON", "Bordure décorative"],
      ["DENTELLE", "Tissu ajouré"],
      ["PRESSION", "Bouton qui claque"],
      ["VELCRO", "Bande auto-agrippante"],
      ["BIAIS", "Bande coupée en diagonale"],
      ["ELASTIQUE", "Il s’étire"],
      ["APPLIQUE", "Motif à coudre"],
    ],
  },
  {
    "n": "Fils et pelotes",
    "w": [
      ["MOHAIR", "Laine de chèvre"],
      ["ALPAGA", "Laine douce des Andes"],
      ["COTON", "Fil d’été"],
      ["ANGORA", "Laine de lapin"],
      ["CACHEMIRE", "Laine précieuse"],
      ["CROCHET", "Aiguille à bout recourbé"],
      ["PELOTE", "Boule de laine"],
      ["ECHEVEAU", "Fil enroulé"],
    ],
  },
];
const GENC = {};
function lvB(g) {
  return "caches" === g && caOn() ? CANL : NLS[g];
}
function lvD(g, a) {
  return ((a = void 0 === a ? lv : a), a >= 1e9 ? lvB(g) + a - 1e9 : a);
}
function LVX(A, g, f) {
  if (lv >= 1e9) {
    const d = lvD(g);
    if (A[d]) return A[d];
  }
  const k = g + ":" + lv;
  return GENC[k] || (GENC[k] = f(lv));
}
function lvMA(e) {
  const k0 = ckey(e),
    d = (t) => st.get(k0 + ":" + t, !1) || st.get("k:" + k0.slice(2) + ":" + t, !1);
  let k = 10;
  for (; [...Array(10).keys()].some((t) => d(k - 10 + t));) k += 10;
  return k;
}
const lvShuf = (a, R) => {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = (R() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
let WV0 = null;
function wfV() {
  if (WV0) return WV0;
  WV0 = WFR.map((w, i) => ({ w: w, k: nk(w), i: i })).filter(
    (x) =>
      x.k.length >= 3 &&
      !/^(CONNERIES?|CHIANTE?S?|FOUTUE?S?|MERDIQUE|NUL|NULLE|CRETINS?|IDIOTE?S?|DEBILES?|STUPIDES?|HAINE|HAIR|TUE|TUES|TUER|MORTE?S?|NEO|LET|EUT|ETC)$/.test(
        x.k,
      ),
  );
  return WV0;
}
const WBC = {};
const WCV = {};
function wfCand(n, top, need, a) {
  const key = n + ":" + top,
    L0 =
      WBC[key] ||
      (WBC[key] = lvShuf(
        wfV().filter((x) => x.k.length === n && x.i < top),
        rng(1009 * n + top),
      )),
    V = WCV[key + ":" + need] || (WCV[key + ":" + need] = { l: [], p: 0, S: null });
  V.S ||
    (V.S = wfV().filter(
      (x) =>
        x.k.length <= n &&
        x.i < (n <= 5 ? 5e3 : 8e3) &&
        !/^(ETC|LEU|ACE|TAC|FIA|LAI|ACES|ETAT|ETATS)$/.test(x.k),
    ));
  while (V.l.length <= Math.min(a, 500) && V.p < L0.length) {
    const b = L0[V.p++],
      s = V.S.filter((w) => w.k !== b.k && fits(w.k, b.k));
    s.length >= need && V.l.push({ b: b, s: s });
  }
  return V.l.length ? V.l[a % V.l.length] : null;
}
function wfPick(e, N, R) {
  const s = e.s
    .slice()
    .sort((x, y) => x.i - y.i)
    .slice(0, Math.max(N + 3, Math.ceil(1.6 * N)));
  return lvShuf(s, R)
    .slice(0, N)
    .sort((x, y) => x.k.length - y.k.length || x.i - y.i);
}
function wfLen(a, ana) {
  const R = rng(3571 * a + 11),
    x = R();
  return a < 1e3
    ? ana
      ? 5
      : a < 20
        ? 4
        : x < 0.7
          ? 5
          : 4
    : a < 5e3
      ? x < 0.5
        ? 5
        : 6
      : a < 1e4
        ? x < 0.34
          ? 5
          : x < 0.67
            ? 6
            : 7
        : x < 0.34
          ? 6
          : x < 0.67
            ? 7
            : 8;
}
function wfN(a, n) {
  return Math.min({ 4: 5, 5: 6, 6: 8, 7: 10, 8: 12 }[n], 3 + Math.floor(Math.log2(a + 2)));
}
function lvLay(W, R, mx, tg) {
  const G = new Map(),
    D = new Map(),
    P = [],
    K = (r, c) => r + "," + c;
  let r0 = 0,
    r1 = 0,
    c0 = 0,
    c1 = 0;
  const ok = (k, r, c, h) => {
      const dr = h ? 0 : 1,
        dc = h ? 1 : 0;
      if (G.has(K(r - dr, c - dc)) || G.has(K(r + dr * k.length, c + dc * k.length))) return -1;
      let x = 0;
      for (let i = 0; i < k.length; i++) {
        const a = r + dr * i,
          b = c + dc * i,
          q = K(a, b),
          g = G.get(q);
        if (g) {
          if (g !== k[i] || D.get(q).includes(h ? "h" : "v")) return -1;
          x++;
        } else if (G.has(K(a + dc, b + dr)) || G.has(K(a - dc, b - dr))) return -1;
      }
      return x;
    },
    put = (w, r, c, h) => {
      const dr = h ? 0 : 1,
        dc = h ? 1 : 0;
      for (let i = 0; i < w.k.length; i++) {
        const q = K(r + dr * i, c + dc * i);
        (G.set(q, w.k[i]), D.set(q, (D.get(q) || "") + (h ? "h" : "v")));
      }
      (P.push({ w: w, r: r, c: c, h: h }),
        (r0 = Math.min(r0, r)),
        (c0 = Math.min(c0, c)),
        (r1 = Math.max(r1, r + dr * (w.k.length - 1))),
        (c1 = Math.max(c1, c + dc * (w.k.length - 1))));
    };
  put(W[0], 0, 0, !0);
  for (const w of W.slice(1)) {
    if (P.length >= tg) break;
    let B = null,
      S = -1e9;
    for (const [q, ch] of G) {
      const [a, b] = q.split(",").map(Number);
      for (let i = 0; i < w.k.length; i++) {
        if (w.k[i] !== ch) continue;
        for (const h of [!0, !1]) {
          const r = h ? a : a - i,
            c = h ? b - i : b,
            x = ok(w.k, r, c, h);
          if (x < 1) continue;
          const R0 = Math.min(r0, r),
            C0 = Math.min(c0, c),
            R1 = Math.max(r1, r + (h ? 0 : w.k.length - 1)),
            C1 = Math.max(c1, c + (h ? w.k.length - 1 : 0));
          if (R1 - R0 + 1 > mx || C1 - C0 + 1 > mx) continue;
          const s = 10 * x - (R1 - R0 + 1) * (C1 - C0 + 1) * 0.3 + 3 * R();
          s > S && ((S = s), (B = [r, c, h]));
        }
      }
    }
    B && put(w, B[0], B[1], B[2]);
  }
  return P.map((p) => ({ w: p.w, r: p.r - r0, c: p.c - c0, h: p.h }));
}
function anaGen(a) {
  const n = wfLen(a, 1),
    tg = Math.min(n + 2, wfN(a, n) - 1),
    R = rng(9973 * a + 17);
  for (let t = 0; t < 30; t++) {
    const c = wfCand(n, n <= 5 ? 6e3 : 12e3, 4, a + 97 * t);
    if (!c) continue;
    const b = c.b,
      s = wfPick(c, Math.min(c.s.length, tg + 4), R).sort((x, y) => y.k.length - x.k.length),
      P = lvLay([b, ...s], R, n + 2, tg);
    if (P.length < Math.min(4, tg)) continue;
    const W = P.map((p) => ({ d: p.w.w, k: p.w.k, r: p.r, c: p.c, h: p.h })),
      IN = new Set(W.map((w) => w.k));
    return {
      b: b.k,
      h: Math.max(...W.map((w) => w.r + (w.h ? 1 : w.k.length))),
      c: Math.max(...W.map((w) => w.c + (w.h ? w.k.length : 1))),
      W: W,
      X: new Set(c.s.map((w) => w.k).filter((k) => !IN.has(k))),
    };
  }
  return ANL2[a % ANL2.length];
}
const thOrd = (a, n) =>
  lvShuf([...Array(THM.length).keys()], rng(53 + Math.floor(a / THM.length)))[a % THM.length];