(() => {
  /* Motuiles à deux sur le même appareil : joueurs « j1 » et « j2 », lettres cachées entre les tours */
  window.scrLocSave = (e) => {
    SC.G.loc = e;
    try {
      st.set("scr:loc", e.e ? null : e);
    } catch (x) {}
    SC.hand = !e.e;
    return true;
  };
  window.scrLocNew = () => {
    const g0 = SC.G.loc;
    if (g0 && !g0.e) return;
    const g = Math.random() < 0.5 ? scrNew("j2", "j1", null) : scrNew("j1", "j2", null);
    SC.pend = [];
    SC.sel = -1;
    SC.mode = "";
    SC.pay = "";
    SC.m = "";
    SC.rkk = "";
    SC.drawN = 7;
    SC.hand = false;
    SC.G.loc = g;
    st.set("scr:loc", g);
    try {
      sfx(523, 0.4);
      vib(15);
    } catch (x) {}
    scrDraw();
  };
  window.scrOpenLoc = () => {
    scrInstall();
    cur = "scrabble";
    nv("games");
    theme("scrabble");
    $("#nav").hidden = !0;
    SC.zoom = !1;
    SC.zl = 1;
    Object.assign(SC, {
      scr: "game",
      fid: "loc",
      pend: [],
      sel: -1,
      mode: "",
      swp: [],
      jk: null,
      cf: "",
      m: "",
      rkk: "",
      pay: "",
      slow: 0,
      busy: !1,
    });
    let g = null;
    try {
      g = scrClean(st.get("scr:loc", null));
    } catch (x) {}
    (!g || g.e) &&
      ((g = Math.random() < 0.5 ? scrNew("j2", "j1", null) : scrNew("j1", "j2", null)), st.set("scr:loc", g));
    SC.G.loc = g;
    SC.got.loc = true;
    SC.err.loc = 0;
    SC.hand = g.n > 0 && !g.e;
    act.scLocGo = () => {
      SC.hand = false;
      scrDraw();
    };
    app.innerHTML = `<div class="top stk"><button class="back" data-a="scrBk">‹ Parties</button><span class="tl">À deux · même appareil</span><div class="tr"><div class="chip">🫧 ${FLX()}</div></div></div><section class="glass play pg-scrabble" id="scg" aria-label="Motuiles à deux"></section>`;
    scrLoad().then(() => {
      $("#scg") && scrDraw();
    });
    scrDraw();
    window.scrollTo(0, 0);
  };
  const _d = window.scrDraw;
  window.scrDraw = function () {
    const loc = "loc" === SC.fid && "game" === SC.scr;
    if (loc && SC.m)
      SC.m = SC.m
        .replace(" · +2 🫧", "")
        .replace("Tu passes ton tour.", "Le joueur précédent a passé son tour.")
        .replace("Tu échanges tes lettres.", "Le joueur précédent a échangé ses lettres.");
    const r = _d.apply(this, arguments);
    if (loc) {
      const e = $("#scg"),
        g = SC.G.loc;
      if (e && g) {
        e.querySelectorAll(".scend small").forEach((x) => x.remove());
        const pl = e.querySelectorAll(".scpl small");
        if (pl.length > 1 && !g.e) {
          pl[0].textContent = "Joueur " + (g.t + 1);
          pl[1].textContent = "Joueur " + (2 - g.t);
        }
        const en = e.querySelector(".scend");
        if (en && g.e) {
          const b = en.querySelector("b"),
            sp = en.querySelector("span");
          b &&
            (b.textContent =
              g.w < 0
                ? "Égalité !"
                : g.rs >= 0
                  ? "Joueur " + (g.rs + 1) + " a abandonné. Joueur " + (g.w + 1) + " gagne."
                  : "Joueur " + (g.w + 1) + " a gagné !");
          sp && (sp.textContent = "Joueur 1 : " + g.s[0] + " – Joueur 2 : " + g.s[1]);
        }
        if (SC.hand && !g.e && !e.querySelector(".schand")) {
          const d = document.createElement("div");
          d.className = "schand";
          d.innerHTML = `<div><b>Au tour du joueur ${g.t + 1}</b><p>Passe l’appareil à ce joueur : les lettres de l’autre sont cachées.</p><button class="btn" data-a="scLocGo">Je suis prêt(e)</button></div>`;
          e.appendChild(d);
        }
      }
    }
    return r;
  };
  const css = document.createElement("style");
  css.textContent =
    ".schand{position:fixed;inset:0;z-index:9500;display:grid;place-items:center;background:#120c28;color:#fff;text-align:center;padding:24px}.schand b{display:block;font-size:1.5rem;margin-bottom:10px}.schand p{margin:0 0 20px;opacity:.85}";
  document.head.appendChild(css);
})();
