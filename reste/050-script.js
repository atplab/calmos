/* Zeni en pixel néon (jeux d'arcade) : zeniPx(dir 'r'|'l'|'u'|'d', puissance) -> canvas 16×16 px agrandi */
(() => {
  const C = {};
  window.zeniPx = (d, pw) => {
    d = d || "r";
    const k = d + (pw ? 1 : 0);
    if (C[k]) return C[k];
    const N = 16,
      S = 6,
      cv = document.createElement("canvas");
    cv.width = cv.height = N * S;
    const c = cv.getContext("2d"),
      G = [];
    const ox = { r: 1, l: -1, u: 0, d: 0 }[d] || 0,
      oy = { r: 0, l: 0, u: -1, d: 1 }[d] || 0,
      cx = 7.5,
      cy = 9,
      R = 5.6,
      set = (x, y, v) => {
        if (x >= 0 && x < N && y >= 0 && y < N) G[y * N + x] = v;
      };
    for (let y = 0; y < N; y++)
      for (let x = 0; x < N; x++) {
        const e = Math.hypot((x + 0.5 - cx) / 1.05, (y + 0.5 - cy) / 0.95);
        if (e < R - 1) set(x, y, "b");
        else if (e < R) set(x, y, "o");
      }
    /* nageoires et petits pieds du côté opposé au mouvement */
    if (d === "r" || d === "l") {
      const s = -ox;
      [
        [cx + s * 6, cy],
        [cx + s * 6.6, cy - 1],
        [cx + s * 6.6, cy + 1],
      ].forEach(([x, y]) => set(Math.floor(x), Math.floor(y), "f"));
    } else {
      const s = -oy;
      [
        [cx - 2, cy + s * 6],
        [cx + 1, cy + s * 6],
        [cx - 3, cy + s * 5.6],
        [cx + 2, cy + s * 5.6],
      ].forEach(([x, y]) => set(Math.floor(x), Math.floor(y), "f"));
    }
    /* antenne et étoile */
    const ay = Math.floor(cy - R) - (oy > 0 ? 0 : 0);
    set(7, ay, "o");
    set(7, ay - 1, "o");
    [
      [7, ay - 3],
      [6, ay - 2],
      [8, ay - 2],
      [7, ay - 2],
    ].forEach(([x, y]) => set(x, y, "s"));
    /* yeux, joues, sourire tournés vers la direction */
    if (d !== "u") {
      const ey = Math.round(cy - 1 + oy * 1.5),
        ex = Math.round(cx + ox * 2.3);
      [
        [ex - 2, ey],
        [ex + 1, ey],
      ].forEach(([x, y]) => {
        set(x, y, "e");
        set(x, y - 1, "e");
        set(x + (ox >= 0 ? 0 : 0), y - 1, "w");
      });
      set(ex - 3, ey + 2, "p");
      set(ex + 2, ey + 2, "p");
      set(ex - 1, ey + 2, "e");
      set(ex, ey + 2, "e");
    } else {
      [
        [5, cy - 3],
        [9, cy - 3],
      ].forEach(([x, y]) => set(x, Math.round(y), "h"));
    }
    const P = {
      b: pw ? "#bff6ff" : "#f4f6ff",
      o: pw ? "#22d3ee" : "#8fe9ff",
      e: "#141433",
      w: "#ffffff",
      p: "#ff8ab8",
      s: "#ffd32a",
      f: pw ? "#7ef0ff" : "#c9b8ff",
      h: "#dfe6ff",
    };
    c.shadowColor = pw ? "#22d3ee" : "#9fe8ff";
    c.shadowBlur = pw ? 14 : 9;
    G.forEach((v, i) => {
      if (!v) return;
      c.fillStyle = P[v];
      c.fillRect((i % N) * S, ((i / N) | 0) * S, S + 0.3, S + 0.3);
    });
    c.shadowBlur = 0;
    G.forEach((v, i) => {
      if (v === "b") {
        const x = i % N,
          y = (i / N) | 0;
        if (x < cx - 1 && y < cy - 1) {
          c.fillStyle = "rgba(255,255,255,.35)";
          c.fillRect(x * S, y * S, S, S);
        }
      }
    });
    return (C[k] = cv);
  };
})();
