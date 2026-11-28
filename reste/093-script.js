(() => {
  /* Ludothèque : le plateau 3D garde la même rotation d’un jeu à l’autre */ const T0 = performance.now(),
    f = () =>
      document.querySelectorAll(".sgbd:not([data-sy])").forEach((b) => {
        b.dataset.sy = 1;
        b.style.animationDelay = -((performance.now() - T0) % 18e3) / 1e3 + "s";
      });
  new MutationObserver(f).observe(document.body, { childList: !0, subtree: !0 });
})();
