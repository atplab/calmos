document.addEventListener("keydown", function (e) {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  var t = e.target;
  if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
  var sd = document.querySelector('.sd[role="grid"]');
  if (sd && typeof act !== "undefined" && act.sdn) {
    var d = /^[1-9]$/.test(e.key) ? +e.key : /^Numpad[1-9]$/.test(e.code) ? +e.code.slice(6) : 0;
    if (d) {
      e.preventDefault();
      act.sdn(d);
      return;
    }
    if (e.key === "Backspace" || e.key === "Delete" || e.key === "0") {
      e.preventDefault();
      act.sde();
      return;
    }
    var mv = {
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
      ArrowUp: [0, -1],
      ArrowDown: [0, 1],
      KeyA: [-1, 0],
      KeyD: [1, 0],
      KeyW: [0, -1],
      KeyS: [0, 1],
    }[e.key.indexOf("Arrow") === 0 ? e.key : e.code];
    if (mv) {
      e.preventDefault();
      var cs = sd.querySelectorAll(".sd-c"),
        i = -1;
      for (var k = 0; k < cs.length; k++)
        if (cs[k].classList.contains("sel")) {
          i = k;
          break;
        }
      if (i < 0) i = 40;
      else {
        var x = Math.max(0, Math.min(8, (i % 9) + mv[0])),
          y = Math.max(0, Math.min(8, ((i / 9) | 0) + mv[1]));
        var ni = y * 9 + x;
        if (ni === i) return;
        i = ni;
      }
      act.sdc(String(i));
      return;
    }
  }
  if (document.querySelector(".qz-ch") && typeof act !== "undefined" && act.qa) {
    var kk = e.key.toLowerCase(),
      ix = kk.length === 1 ? ("1234".indexOf(kk) >= 0 ? +kk - 1 : "abcd".indexOf(kk)) : -1;
    if (ix >= 0) {
      e.preventDefault();
      act.qa(ix);
      return;
    }
    if ((e.key === "Enter" || e.key === " ") && document.querySelector(".qz-next")) {
      e.preventDefault();
      act.qn();
    }
  }
});
