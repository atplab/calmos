(() => {
  const CD = {
    C: [36, [64, 67, 71]],
    Am: [45, [60, 64, 67]],
    F: [41, [64, 69, 72]],
    G: [43, [62, 67, 71]],
    Em: [40, [62, 67, 71]],
    Dm: [38, [62, 65, 69]],
  };
  const SQ = ["C", "Am", "F", "G", "C", "Em", "F", "G", "Am", "Em", "F", "C", "Dm", "G", "C", "C"];
  const MB = [
    [[0, 76, 4]],
    [
      [0, 72, 2],
      [4, 76, 3],
    ],
    [
      [0, 77, 4],
      [6, 76, 2],
    ],
    [[0, 74, 5]],
    [
      [0, 72, 3],
      [4, 74, 2],
      [6, 76, 2],
    ],
    [[0, 79, 5]],
    [
      [0, 77, 3],
      [4, 76, 3],
    ],
    [[0, 74, 6]],
    [
      [0, 72, 4],
      [4, 76, 3],
    ],
    [
      [0, 71, 4],
      [4, 74, 3],
    ],
    [
      [0, 72, 3],
      [4, 69, 3],
    ],
    [[0, 67, 6]],
    [
      [0, 69, 3],
      [4, 72, 3],
    ],
    [
      [0, 71, 4],
      [4, 74, 3],
    ],
    [[0, 72, 7]],
    [],
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
      E: 0.55,
      tick() {
        const e = this.L,
          A = typeof AC !== "undefined" ? AC : null;
        if (!e || !A) return;
        for (this.t < A.currentTime && (this.t = A.currentTime + 0.12); this.t < A.currentTime + 0.6;) {
          const p = this.s,
            bar = p >> 3,
            k = p & 7,
            E = this.E,
            [r, v] = CD[SQ[bar]],
            intro = this.rep === 0 && bar < 2,
            T = Math.max(A.currentTime + 0.01, this.t + 0.006 * (Math.random() - 0.5)),
            h = () => 0.9 + 0.2 * Math.random();
          if (k === 0) {
            v.forEach((n, j) => this.ep(this.mf(n), T + 0.03 * j, 7 * E, 0.034 * h(), e.bus));
            this.pz(this.mf(r), T, 6 * E, 0.13 * h(), e.dry);
          }
          if (k === 4) this.pz(this.mf(r + 7), T, 3.5 * E, 0.07 * h(), e.dry);
          if ((k === 2 || k === 6) && bar % 2)
            this.ep(this.mf(v[k === 2 ? 1 : 2] + 12), T, 2.4 * E, 0.012 * h(), e.bus);
          if (!intro) {
            const m = MB[bar].find((x) => x[0] === k);
            m && this.gl(this.mf(m[1]), T + 0.01, m[2] * E * 1.2, 0.038 * h(), e.bus);
          }
          this.t += E;
          this.s = (p + 1) % 128;
          0 === this.s && this.rep++;
        }
      },
    });
  };
  window.soMus = (e) => {
    if (typeof soMu === "undefined" || !soMu) {
      if (!e) return;
      const m = mk();
      if (!m) return;
      window.soMu = m;
    }
    soMu.set(e);
  };
  try {
    typeof plApply === "function" && cur === "solitaire" && plApply();
  } catch (e) {}
})();
