(() => {
  if (typeof soActs !== "function") return;
  const lose = () => {
    try {
      SL.g && !SL.done && SL.g.mv > 0 && st.set("sol:lose", st.get("sol:lose", 0) + 1);
    } catch (e) {}
  };
  const wrap = () => {
    if (!act.soRe || act.soRe.lw) return;
    const r = act.soRe,
      b = act.soBk;
    act.soRe = (v) => {
      lose();
      r(v);
    };
    act.soRe.lw = 1;
    act.soBk = (v) => {
      lose();
      try {
        st.set("sol:sv", null);
      } catch (e) {}
      SL.done = !0;
      soHub();
    };
  };
  const _a = soActs;
  soActs = function () {
    const x = _a.apply(this, arguments);
    wrap();
    return x;
  };
  setInterval(() => {
    const e = document.getElementById("sotm");
    if (!e || !SL.g || !SL.g.t0 || SL.done) return;
    const q = Math.floor((Date.now() - SL.g.t0) / 1e3);
    e.textContent = Math.floor(q / 60) + ":" + String(q % 60).padStart(2, "0");
  }, 500);
})();
