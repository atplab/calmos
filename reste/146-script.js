(function () {
  var last = "",
    wasOn = false;
  function t() {
    try {
      var w = innerWidth,
        h = innerHeight,
        ok =
          !!window.matchMedia &&
          !matchMedia("(pointer:coarse)").matches &&
          w >= 900 &&
          typeof cur !== "undefined" &&
          cur !== "flow" &&
          !!document.getElementById("app") &&
          !document.querySelector(".gfw,.arw,.vzf,#hv,#zcc,#zgc,#bzc,#zrc,#ttw"),
        on =
          ok &&
          ((typeof playing !== "undefined" && playing) ||
            !!document.querySelector("#ung") ||
            (wasOn && !!document.querySelector("#app .story>.pkb")));
      wasOn = on;
      var z = 1;
      var k = on + "|" + z.toFixed(2);
      if (k === last) return;
      last = k;
      document.documentElement.style.setProperty("--pcz", z.toFixed(3));
      document.body.classList.toggle("pcg", on && z > 1.02);
    } catch (e) {}
  }
  setInterval(t, 300);
  window.addEventListener("resize", t);
  try {
    new MutationObserver(t).observe(document.getElementById("app"), { childList: true });
  } catch (e) {}
})();
