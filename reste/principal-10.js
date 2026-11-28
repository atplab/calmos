function soHub() {
  (soActs(), (cur = "solitaire"), nv("games"), theme("solitaire"));
  const e = st.get("sol:d", []),
    t = (() => {
      let t = 0;
      for (; e.includes(t);) t++;
      return t;
    })(),
    a = st.get("sol:sv", null),
    s = st.get("sol:inf", 0);
  ((app.innerHTML = `<div class="top stk">${bk("home")}<div class="chip">🫧 ${FLX()}</div></div><section class="glass story pt-solitaire"><i>♠</i><h2>La patience</h2><p>Le solitaire classique, au calme : range les cartes par couleur de l’as au roi. Touche une carte pour qu’elle trouve sa place toute seule. Toutes les donnes ont une solution.</p></section>\n ${a && a.g ? `<section class="glass play"><h2>Partie en cours</h2><p class="note" style="margin:0 0 12px">${"lv" === a.mode ? "Niveau " + (a.lv + 1) : "Mode infini"} · ${a.g.mv} coups</p><div class="chrow"><button class="btn" data-a="soRes">Reprendre</button><button class="btn alt" data-a="soDrop">Laisser tomber</button></div></section>` : ""}\n <section class="glass play"><h2>Mode infini</h2><p class="note" style="margin:0 0 12px">Une nouvelle donne au hasard à chaque partie. ${s ? s + " partie" + (s > 1 ? "s" : "") + " gagnée" + (s > 1 ? "s" : "") + "." : ""} +2 🫧 par victoire.</p><button class="btn chgo" data-a="soInf">Jouer</button></section>\n <section class="glass play"><h2>Niveaux</h2>${UNL() ? '<div class="golv"><label>Aller au niveau <input id="golv" type="number" min="1" inputmode="numeric" placeholder="ex. 1203"></label><button class="rc-go" data-a="soGo">Jouer</button></div>' : ""}<p class="note" style="margin:0 0 12px">${e.length ? e.length + " niveau" + (e.length > 1 ? "s" : "") + " terminé" + (e.length > 1 ? "s" : "") : "Aucun niveau terminé"} · de plus en plus coriaces</p><button class="btn chgo" data-a="soLv" data-v="${t}">Niveau ${t + 1}</button></section>`),
    window.scrollTo(0, 0));
}
let soAO = !1;
function soActs() {
  soAO ||
    ((soAO = !0),
    Object.assign(act, {
      soBk: () => {
        (soSave(), soHub());
      },
      soInf: () => soNew("inf", 0),
      soLv: (e) => soNew("lv", +e),
      soNext: () => soNew("lv", SL.lv + 1),
      soRes: () => {
        const e = st.get("sol:sv", null);
        if (!e) return soHub();
        ((SL.g = e.g),
          (SL.mode = e.mode),
          (SL.lv = e.lv),
          (SL.h = e.h || []),
          (SL.hint = null),
          (SL.done = !1),
          soScreen());
      },
      soDrop: () => {
        (st.set("sol:sv", null), soHub());
      },
      soUndo: () => {
        SL.busy ||
          SL.done ||
          !SL.h.length ||
          ((SL.g = JSON.parse(SL.h.pop())), (SL.hint = null), soSave(), soLay(), sfx(300, 0.05));
      },
      soRe: () => {
        SL.busy || ("lv" === SL.mode ? soNew("lv", SL.lv) : soNew("inf", 0));
      },
      soHint: () => {
        if (SL.busy || SL.done) return;
        if (!UNL()) {
          if (fl < 1) {
            const e = $("#m");
            return void (e && (e.textContent = "Il te manque une bulle pour un indice."));
          }
          ((fl -= 1), st.set("fl", fl));
          const e = $(".chip:not(.hintb)");
          e && (e.textContent = "🫧 " + FLX());
        }
        const e = soHintFind();
        SL.hint = e.c >= 0 ? e : null;
        const t = $("#m");
        if ((t && (t.textContent = e.t), soLay(), e.c < 0 && SL.g.S.length)) {
          const e = $(".sstk");
          e && (e.classList.remove("shk"), e.offsetWidth, e.classList.add("shk"));
        }
      },
      soFin: () => soFin(),
    }));
}
