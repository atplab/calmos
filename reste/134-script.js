(function () {
  var W = function () {
    try {
      ["wdMode", "caMode", "wlSel"].forEach(function (k) {
        var f = act[k];
        if (!f) return;
        act[k] = function () {
          app.classList.add("nofa");
          var r = f.apply(this, arguments);
          clearTimeout(window._nofaT);
          window._nofaT = setTimeout(function () {
            app.classList.remove("nofa");
          }, 700);
          return r;
        };
      });
    } catch (e) {}
  };
  W();
  setTimeout(function () {
    if (!act.wlSel.__w) {
      W();
      act.wlSel.__w = 1;
    }
  }, 1500);
})();
