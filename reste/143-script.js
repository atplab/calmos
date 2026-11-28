(function () {
  var q = 0;
  function upd(c) {
    var l = c.parentNode.querySelector(".aqar.l"),
      r = c.parentNode.querySelector(".aqar.r");
    if (!l || !r) return;
    l.hidden = c.scrollLeft < 6;
    r.hidden = c.scrollLeft + c.clientWidth >= c.scrollWidth - 6;
  }
  function setup(c) {
    c.dataset.ar = 1;
    var w = document.createElement("div");
    w.className = "aqcw";
    c.parentNode.insertBefore(w, c);
    w.appendChild(c);
    ["l", "r"].forEach(function (k) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "aqar " + k;
      b.setAttribute("aria-label", k === "l" ? "Précédent" : "Suivant");
      b.textContent = k === "l" ? "‹" : "›";
      b.addEventListener("click", function (e) {
        e.stopPropagation();
        c.scrollBy({ left: (k === "l" ? -1 : 1) * Math.max(160, c.clientWidth * 0.75), behavior: "smooth" });
      });
      w.appendChild(b);
    });
    c.addEventListener(
      "scroll",
      function () {
        upd(c);
      },
      { passive: true },
    );
    var d = null,
      sx = 0,
      sl = 0,
      mv = 0;
    c.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      d = e.pointerId;
      sx = e.clientX;
      sl = c.scrollLeft;
      mv = 0;
    });
    window.addEventListener("pointermove", function (e) {
      if (d !== e.pointerId) return;
      var dx = e.clientX - sx;
      if (!mv && Math.abs(dx) > 5) {
        mv = 1;
        c.classList.add("drg");
      }
      if (mv) c.scrollLeft = sl - dx;
    });
    function end(e) {
      if (d !== e.pointerId) return;
      d = null;
      c.classList.remove("drg");
      if (mv)
        setTimeout(function () {
          mv = 0;
        }, 0);
    }
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
    c.addEventListener(
      "click",
      function (e) {
        if (mv) {
          e.stopPropagation();
          e.preventDefault();
        }
      },
      true,
    );
    c.addEventListener("dragstart", function (e) {
      e.preventDefault();
    });
    setTimeout(function () {
      upd(c);
    }, 60);
  }
  function scan() {
    q = 0;
    document.querySelectorAll("#aqsh .aqcar:not([data-ar])").forEach(setup);
    document.querySelectorAll("#aqsh .aqcar[data-ar]").forEach(upd);
  }
  new MutationObserver(function () {
    q || (q = requestAnimationFrame(scan));
  }).observe(document.body, { childList: true, subtree: true });
  window.addEventListener("resize", function () {
    q || (q = requestAnimationFrame(scan));
  });
})();
