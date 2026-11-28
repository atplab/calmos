(() => {
  const CD = {
      Eb: [39, [55, 58, 62, 65]],
      Cm: [36, [51, 55, 58, 62]],
      Fm: [41, [56, 60, 63, 67]],
      Bb: [34, [50, 53, 56, 60]],
      Ab: [44, [55, 60, 63, 67]],
      Gm: [43, [53, 58, 62, 65]],
      C7: [36, [52, 58, 62, 67]],
      Fm7: [41, [56, 60, 63, 65]],
      Cm7: [36, [51, 55, 58, 62]],
    },
    SQ = ["Eb", "Cm", "Fm", "Bb", "Eb", "Cm", "Ab", "Bb", "Gm", "C7", "Fm7", "Bb", "Ab", "Gm", "Cm7", "Bb"],
    MB = [
      [
        [0, 74, 3],
        [4, 70, 2],
        [6, 72, 2],
      ],
      [
        [0, 72, 3],
        [4, 75, 2],
        [6, 74, 2],
      ],
      [
        [0, 75, 2],
        [2, 72, 2],
        [4, 68, 3],
      ],
      [
        [0, 70, 2],
        [2, 74, 2],
        [4, 77, 2],
        [6, 74, 2],
      ],
      [
        [0, 79, 3],
        [4, 77, 2],
        [6, 74, 2],
      ],
      [
        [0, 75, 2],
        [2, 72, 2],
        [4, 67, 4],
      ],
      [
        [0, 72, 3],
        [4, 75, 2],
        [6, 79, 2],
      ],
      [
        [0, 77, 4],
        [4, 74, 2],
        [6, 72, 2],
      ],
      [
        [0, 74, 2],
        [2, 77, 2],
        [4, 74, 2],
        [6, 70, 2],
      ],
      [
        [0, 76, 3],
        [4, 70, 2],
        [6, 72, 2],
      ],
      [
        [0, 72, 2],
        [2, 75, 2],
        [4, 77, 3],
      ],
      [
        [0, 74, 3],
        [4, 72, 1],
        [5, 70, 3],
      ],
      [
        [0, 79, 3],
        [4, 75, 2],
        [6, 72, 2],
      ],
      [
        [0, 77, 3],
        [4, 74, 2],
        [6, 70, 2],
      ],
      [
        [0, 72, 2],
        [2, 75, 2],
        [4, 79, 3],
      ],
      [
        [0, 77, 2],
        [2, 74, 2],
        [4, 70, 4],
      ],
    ];
  const mk = () => {
    if (typeof ccMu === "undefined")
      try {
        ccMus(!1);
      } catch (e) {}
    if (typeof ccMu !== "object") return null;
    return Object.assign({}, ccMu, {
      on: !1,
      L: null,
      T: 0,
      s: 0,
      t: 0,
      rep: 0,
      off: 0,
      E: 0.4167,
      tick() {
        const e = this.L,
          A = typeof AC !== "undefined" ? AC : null;
        if (!e || !A) return;
        for (this.t < A.currentTime && (this.t = A.currentTime + 0.12); this.t < A.currentTime + 0.5;) {
          const p = this.s,
            bar = p >> 3,
            k = p & 7,
            E = this.E,
            id = SQ[bar],
            [r, v] = CD[id],
            nr = CD[SQ[(bar + 1) & 15]][0],
            intro = this.rep === 0 && bar < 4,
            T = Math.max(
              A.currentTime + 0.01,
              this.t + (k % 2 ? E * 0.3 : 0) + 0.006 * (Math.random() - 0.5),
            ),
            h = () => 0.9 + 0.2 * Math.random(),
            dy = bar < 8 ? 1 : 1.08;
          if (k === 0) {
            v.forEach((n, j) => this.ep(this.mf(n), T + 0.016 * j, 3.4 * E, 0.05 * h() * dy, e.bus));
          } else if (k === 3 && bar % 2) {
            v.slice(1).forEach((n, j) => this.ep(this.mf(n), T + 0.012 * j, 1.6 * E, 0.03 * h(), e.bus));
          }
          if (k % 2 === 0) {
            const n = [r, r + 7, r + 12, nr - 1][k >> 1];
            this.pz(this.mf(n > 60 ? n - 12 : n), T, 1.7 * E, [0.24, 0.17, 0.19, 0.15][k >> 1] * h(), e.dry);
          }
          if (!intro) {
            k === 0 || k === 2 || k === 4 || k === 6 || k === 7
              ? this.hh(T, (k === 3 || k === 7 ? 0.02 : 0.014) * h(), e.dry)
              : 0;
            (k === 2 || k === 6) && this.hh(T + 0.01, 0.022 * h(), e.dry);
            k === 0 && bar % 4 === 0 && this.kk(T, 0.05, e.dry);
            const m = MB[bar].find((x) => x[0] === k);
            m && this.gl(this.mf(m[1]), T + 0.012, m[2] * E * 1.25, 0.058 * h() * dy, e.bus);
          }
          this.t += E;
          this.s = (p + 1) % 128;
          0 === this.s && this.rep++;
        }
      },
    });
  };
  window.blMus = (e) => {
    if (typeof blMu === "undefined" || !blMu) {
      const m = mk();
      if (!m) return;
      window.blMu = m;
    }
    blMu.set(e);
  };
})();
