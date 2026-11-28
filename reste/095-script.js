(() => {
  /* Ludothèque : le plateau 3D suit le skin choisi */ const rf = (id) => {
    const b = document.querySelector(".sgw .sgbd");
    if (!b || !window.sgTD) return;
    const n = document.createElement("div");
    n.innerHTML = sgTD(id);
    const x = n.firstElementChild;
    x && ((x.style.animationDelay = b.style.animationDelay), (x.dataset.sy = 1), b.replaceWith(x));
  };
  document.addEventListener(
    "click",
    (e) => {
      if (!e.target.closest || !e.target.closest("[data-a=chsk],[data-a=scSk]")) return;
      [60, 250].forEach((t) =>
        setTimeout(() => {
          const b = document.querySelector(".sgw .sgbd");
          b && rf(b.classList.contains("ch") ? "chess" : "scrabble");
        }, t),
      );
    },
    !0,
  );
})();
