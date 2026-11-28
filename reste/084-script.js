(() => {
  /* Motuiles : skins achetables (tuiles, plateau et fond de jeu) */
  window.sgPx = (g, t) => {
    let o = {};
    try {
      o = g === "c" ? scSkin().own : chSkin().own;
    } catch (e) {}
    return t.p && o[t.id] ? Math.ceil(t.p / 2) : t.p;
  };
  window.sgPxL = (g, t) => {
    const p = sgPx(g, t);
    return p < t.p ? `<s style="opacity:.6;font-weight:400">${t.p}</s> ${p} 🫧` : t.p + " 🫧";
  };
  window.SCSK = [
    { id: "b", n: "Soirée", p: 0, d: "Les tuiles du soir" },
    { id: "h", n: "Hiver", p: 150, d: "Tuiles givrées, plateau de glace, crépuscule enneigé" },
    { id: "o", n: "Océan", p: 350, d: "Tuiles de sable, plateau lagon, eaux profondes" },
    { id: "e", n: "Espace", p: 600, d: "Tuiles d’étoiles, plateau nocturne, ciel étoilé" },
  ];
  const PV = {
    "b": ["#fffdf1", "#ffcf63", "#5a3a14"],
    "h": ["#ffffff", "#cfe5fb", "#21507a"],
    "o": ["#fff6de", "#eecf92", "#1d4f5e"],
    "e": ["#3a4080", "#171a3a", "#ffe08a"],
  };
  window.scSkin = () => {
    const e = st.get("scr:sk", null) || {},
      o = Object.assign({ b: 1 }, e.own && typeof e.own == "object" ? e.own : {});
    return { own: o, cur: SCSK.some((s) => s.id === e.cur && o[s.id]) ? e.cur : "b" };
  };
  const ap = () => {
    document.body.dataset.scsk = scSkin().cur;
  };
  ap();
  setTimeout(() => {
    try {
      const _s = scrHub;
      scrHub = function () {
        ap();
        return _s.apply(this, arguments);
      };
    } catch (e) {}
  }, 0);
  window.scSkUI = () => {
    const w = document.querySelector(".scskw");
    if (!w) return;
    const s = scSkin();
    w.innerHTML =
      `<p class="note" style="margin:0 2px">Les 🫧 gagnées en jouant servent à habiller tes tuiles, ton plateau et le fond de la partie.</p>` +
      SCSK.map((t) => {
        const a = !!s.own[t.id],
          c = s.cur === t.id,
          p = PV[t.id];
        return `<div class="scski${c ? " on" : ""}"><div class="scskp">${"MOTS"
          .split("")
          .map(
            (l) =>
              `<i style="background:radial-gradient(120% 95% at 32% 18%,${p[0]} 0 22%,${p[1]});color:${p[2]}">${l}</i>`,
          )
          .join(
            "",
          )}</div><div class="scskt"><b>${t.n}</b><small>${t.d}</small></div><button class="sb${a || UNL() ? "" : " buy"}" data-a="scSk" data-v="${t.id}"${c ? " disabled" : ""}>${c ? "Choisi" : a || UNL() ? "Choisir" : sgPxL("s", t)}</button></div>`;
      }).join("");
  };
  setTimeout(
    () =>
      Object.assign(act, {
        scSk: (id) => {
          const t = SCSK.find((x) => x.id === id);
          if (!t) return;
          const s = scSkin();
          if (!s.own[id] && !UNL()) {
            if (!spend(sgPx("s", t))) return;
          }
          s.own[id] = 1;
          s.cur = id;
          st.set("scr:sk", s);
          ap();
          document.querySelectorAll(".chip").forEach((c) => {
            /🫧/.test(c.textContent) && (c.textContent = "🫧 " + FLX());
          });
          scSkUI();
        },
      }),
    0,
  );
})();
