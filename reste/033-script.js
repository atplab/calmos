(() => {
  if (typeof aqBuy !== "function") return;
  const _b = aqBuy;
  aqBuy = function (e) {
    const [t, a] = String(e).split(":");
    let had = 1;
    try {
      had = aqRead().d[a] !== undefined;
    } catch (x) {}
    const r = _b.apply(this, arguments);
    try {
      if (t === "d" && !had && aqRead().d[a] !== undefined) {
        const D = DECO.find((d) => d.id === a);
        aqEd = !0;
        try {
          aqShut();
        } catch (x) {}
        aquaRefresh();
        mt = "m-aq";
        msg("Glisse « " + (D ? D.n : "la décoration") + " » où tu veux, puis termine.");
        setTimeout(() => {
          const el = document.querySelector('#tank .dc[data-id="' + a + '"]');
          el && el.classList.add("dnew");
        }, 80);
      }
    } catch (x) {}
    return r;
  };
})();
