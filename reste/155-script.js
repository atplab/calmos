(() => {
  const L = ".wlf,.arw,.rftp,.sjw,.sgw";
  let t;
  const f = () => {
    const d = document.documentElement;
    d.classList.remove("nsl");
    const g = document.body.classList.contains("g");
    if (!g && !document.querySelector(L)) return;
    if (d.scrollHeight - innerHeight <= (g ? 220 : 70)) d.classList.add("nsl");
  };
  const a = document.getElementById("app");
  a &&
    new MutationObserver(() => {
      clearTimeout(t);
      t = setTimeout(f, 80);
    }).observe(a, { childList: true });
  addEventListener("resize", f);
  setInterval(f, 1200);
})();
