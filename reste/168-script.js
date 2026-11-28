(() => {
  let q = 0;
  const f = () => {
    q = 0;
    const w = document.querySelector(".cvw"),
      n = document.getElementById("nav");
    if (!w) return;
    const t = w.getBoundingClientRect().top,
      nt = n && !n.hidden ? n.getBoundingClientRect().top : innerHeight;
    const h = Math.floor(nt - t - 12);
    if (h > 200) {
      w.style.minHeight = "0";
      w.style.height = h + "px";
    }
  };
  const g = () => {
    q || (q = requestAnimationFrame(f));
  };
  const a = document.getElementById("app");
  a && new MutationObserver(g).observe(a, { childList: true, subtree: true });
  addEventListener("resize", g);
  setInterval(g, 1500);
})();
