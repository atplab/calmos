(function () {
  var pc = function () {
    try {
      return !matchMedia("(pointer:coarse)").matches && innerWidth >= 900;
    } catch (e) {
      return !1;
    }
  };
  window.NM = function () {
    return pc() ? 72 : 64;
  };
  window.NW = function () {
    return pc() ? 900 : 500;
  };
  window.NZ = function () {
    return pc() ? Math.min(1.5, Math.max(1, (innerHeight - 40) / 720)) : 1;
  };
})();
