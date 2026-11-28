(() => {
  const _d = act.delAcc;
  if (typeof _d !== "function") return;
  act.delAcc = () => {
    const o = document.getElementById("dlc");
    o && o.remove();
    const e = document.createElement("div");
    e.id = "dlc";
    e.className = "sfr";
    e.setAttribute("role", "dialog");
    e.setAttribute("aria-modal", "true");
    e.innerHTML =
      '<div class="glass sfc"><h2>Supprimer ton compte ?</h2><p class="note">Ton compte et toutes tes données en ligne (progression, bulles, amis, messages) seront supprimés définitivement. Cette action est irréversible.</p><button class="btn dlok" id="dlok" disabled>Confirmer (5)</button><button class="btn alt" id="dlno">Annuler</button></div>';
    document.body.appendChild(e);
    let n = 5;
    const b = e.querySelector("#dlok"),
      c = () => {
        clearInterval(t);
        e.remove();
      },
      t = setInterval(() => {
        n--;
        if (n > 0) b.textContent = "Confirmer (" + n + ")";
        else {
          clearInterval(t);
          b.disabled = !1;
          b.textContent = "Confirmer la suppression";
        }
      }, 1e3);
    e.querySelector("#dlno").addEventListener("click", c);
    e.addEventListener("click", (x) => {
      x.target === e && c();
    });
    b.addEventListener("click", () => {
      if (b.disabled) return;
      c();
      DLA = !0;
      _d();
    });
  };
})();
