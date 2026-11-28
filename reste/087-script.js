(() => {
  /* Motuiles : effets de fond des skins Espace (étoiles scintillantes) et Océan (eau en mouvement) */
  const mk = () => {
    let f = document.getElementById("scfx");
    const k = document.body.dataset.scsk;
    if (k !== "o" && k !== "e") {
      f && f.remove();
      return;
    }
    if (f && f.dataset.k === k) return;
    f && f.remove();
    f = document.createElement("div");
    f.id = "scfx";
    f.dataset.k = k;
    const R = Math.random;
    let s = "";
    if (k === "e") {
      for (let i = 0; i < 70; i++) {
        const z = (R() * 2 + 1).toFixed(1);
        s += `<i class="st" style="left:${(R() * 100).toFixed(1)}%;top:${(R() * 100).toFixed(1)}%;width:${z}px;height:${z}px;--d:${(2.5 + R() * 4).toFixed(1)}s;--l:-${(R() * 6).toFixed(1)}s"></i>`;
      }
    } else {
      s = '<i class="w"></i><i class="w w2"></i>';
      [12, 38, 64, 86].forEach(
        (x, i) => (s += `<i class="ray" style="left:${x}%;animation-delay:-${i * 2.3}s"></i>`),
      );
      for (let i = 0; i < 14; i++)
        s += `<i class="bb" style="left:${(R() * 100).toFixed(1)}%;--s:${(4 + R() * 9).toFixed(0)}px;--d:${(12 + R() * 14).toFixed(0)}s;--l:-${(R() * 26).toFixed(0)}s"></i>`;
    }
    f.innerHTML = s;
    document.body.prepend(f);
  };
  mk();
  new MutationObserver(mk).observe(document.body, { attributes: !0, attributeFilter: ["data-scsk"] });
})();
