(function () {
  "use strict";
  const p = act.socPlay;
  act.socPlay = function (e) {
    const [t, a] = String(e).split(":");
    if (a && SO.P[a]) {
      if (t === "billard") {
        act.open("billard");
        setTimeout(() => act.biOn && act.biOn(a), 500);
        return;
      }
      if (t === "carcache") {
        act.rmNewS && act.rmNewS();
        setTimeout(() => {
          try {
            act.rmInvS(a);
          } catch (_) {}
        }, 2200);
        return;
      }
    }
    return p.apply(this, arguments);
  };
})();
