(() => {
  /* Musique arcade Casse-briques : chiptune glacé et néon (même moteur que le Récif de Zeni) */
  const mf = (n) => 440 * 2 ** ((n - 69) / 12);
  const PROG = [
    [
      [52, [67, 71, 76]],
      [48, [67, 72, 76]],
      [55, [67, 71, 74]],
      [50, [66, 69, 74]],
    ],
    [
      [48, [67, 72, 76]],
      [50, [66, 69, 74]],
      [52, [67, 71, 76]],
      [47, [66, 71, 75]],
    ],
  ];
  const SCALE = [64, 66, 67, 69, 71, 72, 74, 76, 78, 79, 81, 83, 84, 86, 88];
  const RH = [
    [0, 3, 6, 8, 10, 12, 14],
    [0, 2, 4, 6, 10, 12],
    [0, 3, 6, 10, 12],
    [0, 4, 6, 8, 11, 14],
    [0, 2, 3, 6, 8, 12, 14],
  ];
  let NB = null;
  window.kbMu = {
    on: !1,
    L: null,
    T: 0,
    s: 0,
    t: 0,
    off: 0,
    ph: null,
    seed: 1,
    build() {
      const A = typeof AC !== "undefined" ? AC : null;
      if (!A || typeof mg === "undefined" || !mg || this.L) return;
      const out = A.createGain();
      out.gain.value = 0;
      const comp = A.createDynamicsCompressor();
      comp.threshold.value = -18;
      comp.ratio.value = 3;
      comp.connect(out);
      out.connect(mg);
      const dl = A.createDelay(1),
        fb = A.createGain(),
        df = A.createBiquadFilter(),
        dw = A.createGain();
      dl.delayTime.value = 0.341;
      fb.gain.value = 0.32;
      df.type = "lowpass";
      df.frequency.value = 3000;
      dw.gain.value = 0.3;
      dl.connect(df);
      df.connect(fb);
      fb.connect(dl);
      df.connect(dw);
      dw.connect(comp);
      const flt = A.createBiquadFilter();
      flt.type = "lowpass";
      flt.frequency.value = 9000;
      flt.Q.value = 0.7;
      flt.connect(comp);
      const send = A.createGain();
      send.connect(dl);
      send.connect(flt);
      if (!NB) {
        NB = A.createBuffer(1, (A.sampleRate * 0.5) | 0, A.sampleRate);
        const c = NB.getChannelData(0);
        for (let i = 0; i < c.length; i++) c[i] = Math.random() * 2 - 1;
      }
      this.L = { out, flt, send, dry: flt };
    },
    vol(e) {
      this.L &&
        typeof AC !== "undefined" &&
        AC &&
        this.L.out.gain.setTargetAtTime(e && this.on ? 0.55 : 0, AC.currentTime, 0.5);
    },
    env(g, t, v, a, d) {
      g.gain.setValueAtTime(1e-4, t);
      g.gain.linearRampToValueAtTime(v, t + a);
      g.gain.exponentialRampToValueAtTime(1e-4, t + a + d);
    },
    osc(type, f, t, v, a, d, dest, det) {
      const A = AC,
        o = A.createOscillator(),
        g = A.createGain();
      o.type = type;
      o.frequency.value = f;
      det && (o.detune.value = det);
      this.env(g, t, v, a, d);
      o.connect(g);
      g.connect(dest);
      o.start(t);
      o.stop(t + a + d + 0.05);
      return o;
    },
    kick(t, v) {
      const A = AC,
        o = A.createOscillator(),
        g = A.createGain();
      o.frequency.setValueAtTime(155, t);
      o.frequency.exponentialRampToValueAtTime(42, t + 0.16);
      this.env(g, t, 0.62 * v, 0.003, 0.28);
      o.connect(g);
      g.connect(this.L.dry);
      o.start(t);
      o.stop(t + 0.35);
    },
    noise(t, v, fq, typ, d, q) {
      const A = AC,
        s = A.createBufferSource(),
        f = A.createBiquadFilter(),
        g = A.createGain();
      s.buffer = NB;
      s.playbackRate.value = 0.9 + Math.random() * 0.2;
      f.type = typ;
      f.frequency.value = fq;
      f.Q.value = q || 0.8;
      this.env(g, t, v, 0.002, d);
      s.connect(f);
      f.connect(g);
      g.connect(this.L.dry);
      s.start(t, Math.random() * 0.3);
      s.stop(t + d + 0.05);
    },
    bass(t, n, v, E) {
      const A = AC,
        f = A.createBiquadFilter(),
        g = A.createGain();
      f.type = "lowpass";
      f.Q.value = 6;
      f.frequency.setValueAtTime(1400, t);
      f.frequency.exponentialRampToValueAtTime(220, t + E * 1.6);
      this.env(g, t, 0.2 * v, 0.004, E * 1.7);
      f.connect(g);
      g.connect(this.L.dry);
      [-7, 7].forEach((d) => {
        const o = A.createOscillator();
        o.type = "sawtooth";
        o.frequency.value = mf(n);
        o.detune.value = d;
        o.connect(f);
        o.start(t);
        o.stop(t + E * 2);
      });
    },
    lead(t, n, v, len) {
      const A = AC,
        f = A.createBiquadFilter(),
        g = A.createGain(),
        lf = A.createOscillator(),
        lg = A.createGain();
      f.type = "lowpass";
      f.frequency.value = 2600 + 1400 * v;
      f.Q.value = 2;
      g.gain.setValueAtTime(1e-4, t);
      g.gain.linearRampToValueAtTime(0.07 * v, t + 0.012);
      g.gain.setTargetAtTime(0.05 * v, t + 0.05, 0.08);
      g.gain.setTargetAtTime(1e-4, t + len, 0.07);
      lf.frequency.value = 5.5;
      lg.gain.value = 0;
      lg.gain.setValueAtTime(0, t);
      lg.gain.linearRampToValueAtTime(9, t + Math.min(len, 0.4));
      lf.connect(lg);
      f.connect(g);
      g.connect(this.L.send);
      [
        [-6, "square"],
        [6, "square"],
        [12, "triangle"],
      ].forEach(([d, ty], i) => {
        const o = A.createOscillator();
        o.type = ty;
        o.frequency.value = mf(n + (i === 2 ? -12 : 0));
        o.detune.value = d;
        lg.connect(o.detune);
        const gg = A.createGain();
        gg.gain.value = i === 2 ? 0.4 : 1;
        o.connect(gg);
        gg.connect(f);
        o.start(t);
        o.stop(t + len + 0.4);
      });
      lf.start(t);
      lf.stop(t + len + 0.4);
    },
    pad(t, ns, dur, v) {
      const A = AC,
        f = A.createBiquadFilter(),
        g = A.createGain();
      f.type = "lowpass";
      f.frequency.value = 1100;
      g.gain.setValueAtTime(1e-4, t);
      g.gain.linearRampToValueAtTime(0.035 * v, t + dur * 0.3);
      g.gain.linearRampToValueAtTime(1e-4, t + dur);
      f.connect(g);
      g.connect(this.L.send);
      ns.forEach((n) =>
        [-12, 12].forEach((d) => {
          const o = A.createOscillator();
          o.type = "sawtooth";
          o.frequency.value = mf(n - 12);
          o.detune.value = d;
          o.connect(f);
          o.start(t);
          o.stop(t + dur + 0.1);
        }),
      );
    },
    phrase(bar) {
      let s = (this.seed * 9301 + bar * 49297) >>> 0;
      const R = () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
      const ph = [];
      for (let b = 0; b < 4; b++) {
        const rh = RH[Math.floor(R() * RH.length)],
          ch = PROG[Math.floor(bar / 16) % 2][b][1];
        let i = SCALE.indexOf(ch[Math.floor(R() * 3)]);
        i < 0 && (i = 7);
        rh.forEach((st, k) => {
          if (k > 0)
            i = Math.max(2, Math.min(SCALE.length - 1, i + [-2, -1, -1, 0, 1, 1, 2, 3][Math.floor(R() * 8)]));
          const nx = rh[k + 1] ?? 16;
          ph.push([b * 16 + st, SCALE[i], Math.min(nx - st, 4)]);
        });
      }
      return ph;
    },
    sec(bar) {
      const c = bar % 64;
      return c < 8
        ? "intro"
        : c < 16
          ? "rise"
          : c < 32
            ? "drop"
            : c < 40
              ? "break"
              : c < 48
                ? "build"
                : "drop2";
    },
    step(s, t, E) {
      const bar = Math.floor(s / 16),
        k = s % 16,
        sec = this.sec(bar),
        P = PROG[Math.floor(bar / 16) % 2],
        [root, ch] = P[bar % 4],
        h = () => 0.85 + 0.3 * Math.random(),
        T = t + (k % 2 ? E * 0.06 : 0) + 0.004 * (Math.random() - 0.5);
      const drums = sec === "rise" || sec === "drop" || sec === "drop2" || sec === "build",
        full = sec === "drop" || sec === "drop2";
      if (k === 0 && (bar % 4 === 0 || sec === "break"))
        this.pad(
          t,
          ch,
          E * 16 * (sec === "break" ? 1 : 4) * 0.98,
          sec === "intro" || sec === "break" ? 1.2 : 0.8,
        );
      if (sec !== "break") {
        const ar = [0, 1, 2, 1, 0, 2, 1, 2][k % 8],
          oc = k >= 8 && sec !== "intro" ? 12 : 0;
        (k % 2 === 0 || full) &&
          this.osc("square", mf(ch[ar] + oc + 12), T, 0.022 * h(), 0.004, E * 0.8, this.L.send);
      }
      if (drums) {
        if (sec === "build") {
          k % 4 === 0 && this.kick(t, 1);
          const r = bar % 8;
          (r >= 6 ? k % 1 === 0 : r >= 4 ? k % 2 === 0 : k % 4 === 2) &&
            this.noise(T, 0.05 + 0.01 * k * (r >= 6 ? 1 : 0), 1800 + r * 300, "bandpass", 0.08, 1.2);
        } else {
          k % 4 === 0 && this.kick(t, 1);
          (k === 4 || k === 12) && full && this.noise(T, 0.13 * h(), 1700, "bandpass", 0.16, 0.9);
          k % 2 === 1 && this.noise(T, 0.035 * h(), 8000, "highpass", 0.035);
          full && k % 4 === 2 && this.noise(T, 0.05 * h(), 9000, "highpass", 0.09);
        }
      }
      if (full || sec === "build") {
        const bn = root - 12 + ([0, 0, 12, 0, 0, 12, 0, 7][Math.floor(k / 2)] || 0);
        k % 2 === 0 && this.bass(T, bn, (k % 4 === 0 ? 1 : 0.75) * h(), E);
      }
      if (full || sec === "break") {
        if (k === 0 && bar % 4 === 0)
          this.ph = this.phrase(bar + (sec === "drop2" ? 1000 : 0) + Math.floor(this.rep / 2) * 7);
        const off = (bar % 4) * 16 + k,
          n = this.ph && this.ph.find((x) => x[0] === off);
        n &&
          this.lead(
            T,
            n[1] + (sec === "drop2" && bar % 8 >= 4 ? 12 : 0),
            (sec === "break" ? 0.6 : 1) * h(),
            n[2] * E * 0.95,
          );
      }
      if (k === 15 && bar % 64 === 63) this.rep++;
    },
    rep: 0,
    loop() {
      if (!this.on || !this.L) return;
      const A = AC;
      const E = 60 / (132 + Math.min(10, (typeof lv !== "undefined" ? lv : 0) * 0.2)) / 4;
      this.t < A.currentTime && (this.t = A.currentTime + 0.08);
      while (this.t < A.currentTime + 0.3) {
        try {
          this.step(this.s, this.t, E);
        } catch (e) {}
        this.t += E;
        this.s++;
      }
      this.T = setTimeout(() => this.loop(), 60);
    },
    set(e) {
      (e = !!e) !== this.on &&
        ((this.on = e),
        e
          ? (Date.now() - (this.off || 0) > 45e3 &&
              ((this.s = 0), (this.t = 0), (this.rep = 0), (this.seed = 1 + Math.floor(Math.random() * 999))),
            this.build(),
            this.loop())
          : (clearTimeout(this.T), (this.off = Date.now())),
        typeof AC !== "undefined" && AC && typeof music !== "undefined" && music && apply());
    },
  };
  window.kbMus = (e) => {
    kbMu.set(e);
  };
})();
