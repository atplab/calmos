(function () {
  "use strict";
  let el = null,
    x0 = 0,
    y0 = 0,
    dx = 0,
    mv = 0;
  const pt = (e) => (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]) || e;
  addEventListener(
    "touchstart",
    (e) => {
      const t = e.target.closest && e.target.closest("#cvnt,#ntt");
      if (!t) return;
      el = t;
      const p = pt(e);
      x0 = p.clientX;
      y0 = p.clientY;
      dx = 0;
      mv = 0;
      t.style.transition = "none";
    },
    { passive: true },
  );
  addEventListener(
    "touchmove",
    (e) => {
      if (!el) return;
      const p = pt(e);
      dx = p.clientX - x0;
      if (!mv && Math.abs(p.clientY - y0) > Math.abs(dx)) return;
      mv = 1;
      el.style.transform = "translateX(" + dx + "px)";
      el.style.opacity = String(Math.max(0.2, 1 - Math.abs(dx) / 260));
    },
    { passive: true },
  );
  addEventListener("touchend", () => {
    if (!el) return;
    const t = el;
    el = null;
    if (mv && Math.abs(dx) > 70) {
      t.style.transition = "transform .2s,opacity .2s";
      t.style.transform = "translateX(" + (dx > 0 ? "110%" : "-110%") + ")";
      t.style.opacity = "0";
      setTimeout(() => t.remove(), 200);
    } else {
      t.style.transition = "transform .2s,opacity .2s";
      t.style.transform = "";
      t.style.opacity = "";
    }
    if (mv) {
      const c = (e) => {
        e.stopPropagation();
        e.preventDefault();
      };
      addEventListener("click", c, { capture: true, once: true });
      setTimeout(() => removeEventListener("click", c, true), 50);
    }
    mv = 0;
  });
})();
