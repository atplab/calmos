(() => {
  let sx = null,
    sy = 0;
  addEventListener(
    "pointerdown",
    (e) => {
      sx = null;
      const g = document.getElementById("gfw");
      if (
        !g ||
        !g.querySelector(".gflc") ||
        !g.contains(e.target) ||
        e.target.closest("button,#gflp,#gfzp,a")
      )
        return;
      sx = e.clientX;
      sy = e.clientY;
    },
    { passive: true },
  );
  addEventListener(
    "pointermove",
    (e) => {
      if (sx == null) return;
      if (Math.hypot(e.clientX - sx, e.clientY - sy) < 26) return;
      sx = null;
      const p = document.getElementById("gflp"),
        z = document.getElementById("gfzp");
      if ((p && !p.hidden) || z) return;
      const b = document.querySelector("#gfw .gflc .gfl-p");
      b && b.click();
    },
    { passive: true },
  );
})();
