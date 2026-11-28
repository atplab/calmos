(function () {
  "use strict";
  let hid = 0,
    last = 0;
  function resub() {
    const n = Date.now();
    if (n - last < 2000) return;
    last = n;
    [
      [SC, "scrWatch"],
      [CH, "chWatch"],
      [DM, "dmWatch"],
      [UN, "unWatch"],
    ].forEach(([o, w]) => {
      try {
        if (!o || !o.subs || typeof window[w] !== "function") return;
        Object.keys(o.subs).forEach((k) => {
          const t = o.subs[k];
          try {
            t && typeof t.un === "function" && t.un();
          } catch (_) {}
          try {
            t && t.t && clearTimeout(t.t);
          } catch (_) {}
          delete o.subs[k];
          window[w](k);
        });
      } catch (_) {}
    });
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      hid = Date.now();
      return;
    }
    if (Date.now() - hid > 3000) resub();
  });
  addEventListener("online", resub);
  try {
    const A = window.Capacitor && Capacitor.Plugins && Capacitor.Plugins.App;
    A &&
      A.addListener &&
      A.addListener("appStateChange", (e) => {
        e && e.isActive ? resub() : (hid = Date.now());
      });
  } catch (_) {}
})();
