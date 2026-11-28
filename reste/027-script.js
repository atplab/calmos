(() => {
  if (typeof aqMu !== "object") return;
  Object.assign(aqMu, {
    kk(t, v) {
      const A = AC,
        o = A.createOscillator(),
        g = A.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(120, t);
      o.frequency.exponentialRampToValueAtTime(46, t + 0.11);
      g.gain.setValueAtTime(1e-4, t);
      g.gain.exponentialRampToValueAtTime(v, t + 0.008);
      g.gain.exponentialRampToValueAtTime(1e-4, t + 0.32);
      o.connect(g);
      g.connect(this.L.out);
      o.start(t);
      o.stop(t + 0.36);
    },
    nzb() {
      if (!this.NB2) {
        const A = AC,
          n = A.createBuffer(1, A.sampleRate * 0.4, A.sampleRate),
          c = n.getChannelData(0);
        for (let k = 0; k < c.length; k++) c[k] = Math.random() * 2 - 1;
        this.NB2 = n;
      }
      return this.NB2;
    },
    hx(t, v, f, d, q) {
      const A = AC,
        o = A.createBufferSource(),
        fl = A.createBiquadFilter(),
        g = A.createGain();
      o.buffer = this.nzb();
      fl.type = q ? "bandpass" : "highpass";
      fl.frequency.value = f;
      q && (fl.Q.value = q);
      g.gain.setValueAtTime(1e-4, t);
      g.gain.linearRampToValueAtTime(v, t + 0.004);
      g.gain.exponentialRampToValueAtTime(1e-4, t + d);
      o.connect(fl);
      fl.connect(g);
      g.connect(this.L.out);
      o.start(t);
      o.stop(t + d + 0.03);
    },
    sb(f, t, d, v) {
      const A = AC,
        o = A.createOscillator(),
        o2 = A.createOscillator(),
        lp = A.createBiquadFilter(),
        g = A.createGain();
      o.type = "sine";
      o2.type = "triangle";
      o.frequency.value = f;
      o2.frequency.value = f * 2;
      lp.type = "lowpass";
      lp.frequency.value = 420;
      g.gain.setValueAtTime(1e-4, t);
      g.gain.linearRampToValueAtTime(v, t + 0.02);
      g.gain.setValueAtTime(v * 0.8, t + d * 0.6);
      g.gain.exponentialRampToValueAtTime(1e-4, t + d);
      const g2 = A.createGain();
      g2.gain.value = 0.25;
      o.connect(lp);
      o2.connect(g2);
      g2.connect(lp);
      lp.connect(g);
      g.connect(this.L.out);
      [o, o2].forEach((x) => {
        x.start(t);
        x.stop(t + d + 0.05);
      });
    },
    tick() {
      const e = this.L,
        A = typeof AC !== "undefined" ? AC : null;
      if (!e || !A) return;
      for (this.t < A.currentTime && (this.t = A.currentTime + 0.12); this.t < A.currentTime + 0.5;) {
        const s = this.s,
          b = s >> 3,
          k = 7 & s,
          sec = b >> 3,
          bi = 7 & b,
          E = 0.3,
          i = Math.max(A.currentTime + 0.01, this.t + (k % 2 ? 0.012 : 0)),
          [bs, pd] = (2 === sec ? this.PB : this.PA)[bi],
          h = () => 0.9 + 0.2 * Math.random();
        0 === k && this.pad(i, pd, bs, 8 * E, [0.5, 0.7, 0.85, 0.75][sec]);
        if (sec >= 1) {
          (k === 0 || k === 4) && this.kk(i, 0.13 * h());
          sec === 3 && k === 3 && bi % 2 && this.kk(i, 0.07);
          k === 0
            ? this.sb(this.mf(bs), i, 1.6 * E, 0.16 * h())
            : k === 3
              ? this.sb(this.mf(bs), i, 0.8 * E, 0.11 * h())
              : k === 6 && this.sb(this.mf(bs + 12), i, 0.9 * E, 0.09 * h());
        }
        sec >= 2 && (k === 2 || k === 6) && this.hx(i, 0.05 * h(), 1700, 0.14, 1.1);
        if (sec >= 1 && !(3 === sec && 7 === bi)) {
          const ai = [0, 1, 2, 3, 2, 1, 0, 2][k];
          (sec === 2 || !(k % 2)) &&
            this.gl(this.mf(pd[ai] + 12), i, 0.35, (sec === 2 ? 0.02 : 0.017) * h(), e.bus);
        }
        if (0 !== sec || bi >= 4) {
          const g = 0 === sec ? 0.045 : 0.065;
          (2 === sec ? this.MB : this.MA)[bi].forEach(([st, n, d]) => {
            st === k && this.gl(this.mf(n), i + 0.008, d * E * 1.2, g * h(), e.bus);
          });
        }
        this.t += E;
        let n = s + 1;
        (n >= 256 && (n = 64), (this.s = n));
      }
    },
  });
})();
