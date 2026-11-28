(() => {
  const K = "sty:end";
  const chk = () => {
    try {
      if (!document.getElementById("smap") || document.getElementById("stend") || st.get(K, 0)) return;
      const e = styRead();
      if (!(e.p >= SMX) || styGate(e)) return;
      const d = document.createElement("div");
      d.id = "stend";
      d.className = "sfr";
      d.setAttribute("role", "dialog");
      d.setAttribute("aria-modal", "true");
      d.innerHTML =
        '<div class="glass sfc shpc" style="text-align:center"><div class="shph"><h2>🎉 Bravo !</h2></div><p style="font-size:17px;line-height:1.5;margin:6px 0 10px">Tu as terminé <b>Le voyage de Zeni</b>. Félicitations !</p><p class="note" style="font-size:15px;line-height:1.5">Pour te remercier, le <b>Lumignon étoilé</b> t’attend désormais dans la boutique de l’aquarium.<br>D’autres histoires sont à venir ✦</p><button class="btn" data-a="stEndX" style="margin-top:12px">Merci !</button></div>';
      d.addEventListener("click", (t) => {
        t.target === d && act.stEndX();
      });
      document.body.appendChild(d);
    } catch (x) {}
  };
  act.stEndX = () => {
    st.set(K, 1);
    const d = document.getElementById("stend");
    d && d.remove();
  };
  setInterval(chk, 1200);
})();
