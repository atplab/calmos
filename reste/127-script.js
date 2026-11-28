(() => {
  /* Navigation : chaque page retrouve sa position (et le Social sa conversation) quand on revient dessus */
  const TS = {},
    SS = {},
    K = ["cv", "cvPn", "rm", "pf", "h", "cf"];
  const _t = act.tab;
  act.tab = function (e) {
    const c = document.body.dataset.xt;
    if (c) {
      TS[c] = window.scrollY;
      if (c === "soc") {
        try {
          K.forEach((k) => (SS[k] = SO[k]));
        } catch (x) {}
      }
    }
    const r = _t.apply(this, arguments);
    if (e === "soc" && c !== "soc" && SS.cv !== undefined) {
      try {
        K.forEach((k) => {
          if (SS[k]) SO[k] = SS[k];
        });
        socRefresh();
      } catch (x) {}
    }
    const y = TS[e] || 0,
      go = () => window.scrollTo(0, y);
    go();
    requestAnimationFrame(go);
    setTimeout(go, 120);
    return r;
  };
})();
