(() => {
  let y0 = null,
    sh = null;
  document.addEventListener(
    "pointerdown",
    (e) => {
      const h = e.target.closest && e.target.closest("#aqsh .aqsht");
      if (!h || e.target.closest("button")) return;
      y0 = e.clientY;
      sh = h.closest("#aqsh");
    },
    !0,
  );
  document.addEventListener(
    "pointermove",
    (e) => {
      if (y0 == null || !sh) return;
      const d = Math.max(0, e.clientY - y0);
      sh.style.transition = "none";
      sh.style.translate = "-50% " + d + "px";
    },
    !0,
  );
  const up = (e) => {
    if (y0 == null || !sh) return;
    const d = e.clientY - y0,
      s = sh;
    y0 = null;
    sh = null;
    s.style.transition = "";
    s.style.translate = "";
    d > 70 && (typeof act !== "undefined" && act.aqclose ? act.aqclose() : 0);
  };
  document.addEventListener("pointerup", up, !0);
  document.addEventListener("pointercancel", up, !0);
})();
