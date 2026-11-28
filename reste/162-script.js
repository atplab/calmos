(() => {
  let d = null,
    x = 0,
    y = 0,
    tk = 0;
  const B = (e) => e.target.closest && e.target.closest("[data-a=aqshop]");
  document.addEventListener(
    "pointerdown",
    (e) => {
      d = B(e);
      x = e.clientX;
      y = e.clientY;
    },
    !0,
  );
  document.addEventListener(
    "pointerup",
    (e) => {
      const b = B(e);
      if (d && b && Math.hypot(e.clientX - x, e.clientY - y) < 14) {
        tk = Date.now();
        try {
          act.aqshop();
        } catch (_) {}
      }
      d = null;
    },
    !0,
  );
  document.addEventListener(
    "click",
    (e) => {
      if (Date.now() - tk < 600) {
        e.stopPropagation();
        e.preventDefault();
      }
    },
    !0,
  );
})();
