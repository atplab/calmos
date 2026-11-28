(() => {
  /* Ludothèque : petites animations des objets de la 2e étagère ; le dé donne un chiffre de 1 à 6 */
  const an = (el, c, ms) => {
    el.classList.remove(c);
    void el.offsetWidth;
    el.classList.add(c);
    setTimeout(() => el.classList.remove(c), ms);
  };
  const S = (f, d) => {
    try {
      sfx(f, d || 0.06);
    } catch (e) {}
  };
  document.addEventListener(
    "click",
    (e) => {
      const t = e.target;
      if (!t.closest || !t.closest(".sgw .sgrow")) return;
      const d = t.closest(".sgdc i");
      if (d) {
        if (d.classList.contains("rl")) return;
        const n = 1 + Math.floor(Math.random() * 6);
        let k = 0;
        const iv = setInterval(() => {
          d.dataset.f = 1 + Math.floor(Math.random() * 6);
          S(300 + Math.random() * 200, 0.03);
          if (++k > 5) {
            clearInterval(iv);
            d.dataset.f = n;
            S(440 + n * 40, 0.09);
            const b = document.createElement("b");
            b.className = "sgnum";
            b.textContent = n;
            d.appendChild(b);
            setTimeout(() => b.remove(), 1150);
          }
        }, 85);
        an(d, "rl", 620);
        return;
      }
      const u = t.closest(".sgdc u");
      if (u) {
        an(u, "hp", 560);
        S(520, 0.05);
        setTimeout(() => S(660, 0.05), 180);
        return;
      }
      const s = t.closest(".sgst");
      if (s) {
        an(s, "wb", 620);
        S(220, 0.05);
        return;
      }
    },
    !0,
  );
})();
