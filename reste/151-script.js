(function () {
  var bk = null,
    cx = null;
  function pc() {
    try {
      return !matchMedia("(pointer:coarse)").matches && innerWidth >= 900;
    } catch (e) {
      return !1;
    }
  }
  function tick() {
    try {
      var src = document.getElementById("gfc"),
        w = document.querySelector(".gfw");
      if (!src || !w || !pc()) {
        if (bk) {
          bk.remove();
          bk = null;
          cx = null;
        }
        return;
      }
      if (!bk || bk.parentNode !== w) {
        bk && bk.remove();
        bk = document.createElement("canvas");
        bk.width = 128;
        bk.height = 72;
        bk.id = "gfbk";
        bk.setAttribute("aria-hidden", "true");
        bk.style.cssText =
          "position:absolute;left:50%;margin-left:-50vw;top:0;width:100vw;height:100%;z-index:-1;pointer-events:none;filter:blur(28px) saturate(1.15) brightness(.85)";
        w.insertBefore(bk, w.firstChild);
        cx = bk.getContext("2d");
      }
      if (src.width > 0 && src.height > 0) cx.drawImage(src, 0, 0, 128, 72);
    } catch (e) {}
  }
  setInterval(tick, 140);
})();
