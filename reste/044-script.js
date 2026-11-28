(() => {
  const K = new Map();
  const fix = (c) => {
    const now = performance.now(),
      seen = new Set();
    c.querySelectorAll(".kzs").forEach((s, i) => {
      const p = s.querySelector(".kzp");
      if (!p) return;
      const st = ["in", "out", "sad"].find((x) => p.classList.contains(x));
      if (!st) return;
      const k = i + "|" + ((p.querySelector(".kzn") || {}).textContent || "") + "|" + st;
      seen.add(k);
      K.has(k) || K.set(k, now);
      p.style.setProperty("--kzd", -(now - K.get(k)) / 1e3 + "s");
    });
    for (const k of K.keys()) seen.has(k) || K.delete(k);
  };
  const mo = new MutationObserver((ms) => {
    for (const m of ms) {
      const t = m.target;
      if (t && t.id === "kzcu") {
        fix(t);
        return;
      }
    }
  });
  mo.observe(document.body, { childList: !0, subtree: !0 });
})();
