(function () {
  "use strict";
  const D = { rm: 1, turn: 1, msg: 0, fr: 0 },
    TY = [
      ["rm", "Invitation à un salon", "Un ami t’invite à rejoindre son salon"],
      ["turn", "À ton tour de jouer", "Motuiles, échecs, dames… quand c’est à toi"],
      ["msg", "Nouveaux messages", "Messages de tes amis"],
      ["fr", "Amis et cadeaux", "Quelqu’un t’ajoute ou t’offre des bulles"],
    ];
  const P = () => Object.assign({ on: 1 }, D, st.get("nt:p", {}) || {}),
    nat = () => !!(window.__calmosPush && window.__calmosPush.ok);
  let lk = "",
    busy = 0;
  async function sync() {
    try {
      const t = st.get("nt:tok", ""),
        u = window.SO && SO.uid;
      if (!t || !u || busy) return;
      const k = u + "|" + t + "|" + JSON.stringify(P());
      if (k === lk) return;
      busy = 1;
      const db = await scrDb();
      if (!db) throw 0;
      await db.collection("pt").doc(u).set({ t: t, p: P() });
      lk = k;
    } catch (e) {}
    busy = 0;
  }
  async function ask() {
    try {
      if (!nat()) return false;
      const r = await window.__calmosPush.ask();
      st.set("nt:asked", 1);
      return !!r;
    } catch (e) {
      return false;
    }
  }
  document.addEventListener("calmos-push-token", () => {
    sync();
  });
  setInterval(() => {
    try {
      if (!nat() || !(window.SO && SO.uid)) return;
      if (!st.get("nt:asked", 0) && P().on) ask();
      sync();
    } catch (e) {}
  }, 8000);
  window.__calmosPushOpen = (d) => {
    try {
      const k = d && d.k,
        v = d && d.v;
      if (k === "rm" || k === "msg") {
        try {
          act.back("soc");
        } catch (_) {}
        v &&
          setTimeout(() => {
            try {
              act.cvOpen(v);
            } catch (_) {}
          }, 300);
      } else if (k === "turn" && v) scrOpen(v);
      else if (k === "fr") act.tab("soc");
    } catch (e) {}
  };
  function scr() {
    ((cur = null), nv("set"));
    const p = P(),
      n = nat(),
      b = (k, l, sm) =>
        `<button class="tg ${p[k] ? "on" : ""}" role="switch" aria-checked="${!!p[k]}" data-a="ntTg" data-v="${k}"><span>${l}${sm ? `<small>${sm}</small>` : ""}</span><i></i></button>`;
    app.innerHTML = `<header class="top pfh"><h1>Notifications</h1></header><section class="glass play pf">${b("on", "Notifications hors de l’appli", n ? "Reçues sur ton téléphone même quand Calmos est fermée" : "Disponibles dans l’application Android, avec un compte Social")}${TY.map(([k, l, sm]) => b(k, l, sm)).join("")}</section><button class="btn" data-a="ntBack">Retour aux réglages</button>`;
    window.scrollTo(0, 0);
  }
  Object.assign(act, {
    ntSet: scr,
    ntBack: () => prefScreen(),
    ntTg: (k) => {
      const p = P();
      p[k] = p[k] ? 0 : 1;
      st.set("nt:p", p);
      scr();
      if (p.on && k === "on") ask().then(sync);
      else sync();
    },
  });
})();
