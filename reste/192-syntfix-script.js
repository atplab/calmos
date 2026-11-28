(() => {
  const fix = () => {
    document.querySelectorAll('linearGradient[id^="synt"]:not([data-fx])').forEach((g) => {
      g.dataset.fx = 1;
      const s = g.querySelector("stop");
      if (!s) return;
      const c = s.cloneNode();
      c.setAttribute("offset", ".14");
      s.setAttribute("stop-opacity", "0");
      s.after(c);
    });
  };
  new MutationObserver(fix).observe(document.documentElement, { childList: !0, subtree: !0 });
  fix();
})();
