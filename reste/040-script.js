(() => {
  if (typeof hub !== "function") return;
  /* Salon « Jeux de mots » : pour ajouter un futur jeu, ajouter son id ici (il doit exister dans ALL). */
  const WG = ["mots", "caches", "croises", "phrase", "quiz"];
  window.WLG = WG;
  const JM = {
    id: "jeuxmots",
    n: "Jeux de mots",
    ic: "",
    a: "#9a86e8",
    b: "#4a3f9a",
    t: "Le salon des mots",
    s: "Tous les jeux de mots réunis.",
    sp: "",
  };
  try {
    const i = GD.findIndex((g) => g.id === "mots");
    GD.splice(i < 0 ? 0 : i, 0, JM);
    ALL.push(JM);
    const j = GUNL.indexOf("mots");
    GUNL.splice(j < 0 ? 0 : j, 0, "jeuxmots");
    const o = st.get("g:ord", []);
    if (o.length && !o.includes("jeuxmots")) {
      const k = o.indexOf("mots");
      o.splice(k < 0 ? 0 : k, 0, "jeuxmots");
      st.set("g:ord", o);
    }
    const c = GCAT.find((c) => c[0] === "mots");
    c && !c[2].includes("jeuxmots") && c[2].unshift("jeuxmots");
  } catch (e) {}
  const G = (id) => ALL.find((g) => g.id === id) || { id, n: id };
  const lk = (id) => {
    try {
      return typeof gLock === "function" && gLock(id) && !sxOn();
    } catch (e) {
      return !1;
    }
  };
  const sel = () => {
    const v = st.get("wl:sel", "mots");
    return WG.includes(v) ? v : "mots";
  };
  const ico = (id) => {
    const g = G(id);
    return window.GIL && GIL[id] ? `<svg viewBox="0 0 64 64" aria-hidden="true">${GIL[id]}</svg>` : "";
  };
  const LKI =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
  const top =
    () => `<div class="wltp">${bk("home")}<div class="wlti"><b>Jeux de mots</b><small>Le salon des mots</small></div><div class="chip">🫧 ${FLX()}</div></div>
<div class="wlsel" role="tablist">${WG.map((id) => `<button role="tab" data-a="wlSel" data-v="${id}" aria-selected="${id === cur}" class="${lk(id) ? "lk" : ""}"><i>${ico(id)}</i><span>${G(id).n}</span>${lk(id) ? `<em>${LKI}</em>` : ""}</button>`).join("")}</div>`;
  const SD = (id, inner) => {
    const ana = id === "ana" || /class="on"[^>]*data-v="ana"/.test(inner || "");
    const c = (() => {
      try {
        return caOn();
      } catch (e) {
        return !1;
      }
    })();
    return {
      mots: ana
        ? "Anagramme : remets les lettres dans le bon ordre pour retrouver le mot."
        : "Relie les lettres de la roue pour remplir tous les mots de la grille.",
      ana: "Anagramme : remets les lettres dans le bon ordre pour retrouver le mot.",
      caches: c
        ? "Cascade : trouve un mot, il disparaît et les lettres au-dessus tombent."
        : "Trouve les mots cachés dans la grille, dans tous les sens.",
      croises: "Remplis la grille à l’aide des définitions.",
      phrase: "Retrouve la phrase mystère lettre par lettre, comme un code secret.",
      quiz: "Réponds aux questions de culture générale, à ton rythme.",
    }[id];
  };
  const stage = (id, inner) => {
    const g = G(id);
    return `<div class="wlst"><div class="wlart">${ico(id)}</div><h2>${g.n}</h2><p>${SD(id, inner) || g.s || ""}</p>${inner}</div>`;
  };
  const sheet = (t, h) => {
    const o = $("#wlsh");
    o && o.remove();
    const d = document.createElement("div");
    d.id = "wlsh";
    d.className = "wlsh";
    d.innerHTML = `<div class="wlsp" role="dialog" aria-label="${t}"><div class="wlsx"><h2>${t}</h2><button data-a="wlShX" aria-label="Fermer">✕</button></div>${h}</div>`;
    d.addEventListener("click", (e) => {
      (e.target === d || e.target.closest("[data-a=play]")) && setTimeout(() => d.remove(), 0);
    });
    document.body.appendChild(d);
  };
  let LV = "";
  const xf = (id) => {
    const a = app,
      go = a.querySelector(".opts .rc-go[data-a=play]") || a.querySelector("[data-a=play]");
    if (!go) return;
    const lvB = (a.querySelector(".opts .rc-t b") || {}).textContent || "",
      lvS = (a.querySelector(".opts .rc-t span") || {}).textContent || "",
      seg = a.querySelector(".opts .rcx-m .plseg"),
      segL = (a.querySelector(".opts .rcx-m .rcx-t span") || {}).textContent || "",
      note = a.querySelector(".opts .rcx-b>p.note"),
      inf = a.querySelector(".opts .rcx-r"),
      lvg = a.querySelector(".lvg"),
      dd = a.querySelector(".dd-h small");
    LV = lvg
      ? `<p class="note wlnt">${dd ? dd.textContent : ""}</p><div class="lvg">${lvg.innerHTML}</div>`
      : "";
    const infH = inf
      ? `<div class="wlinf">${[...inf.querySelectorAll("[data-a]")].map((b) => b.outerHTML).join("")}<small>${(inf.querySelector(".rcx-t span") || {}).textContent || ""}</small></div>`
      : "";
    a.innerHTML = `<div class="wlf" data-g="${id}">${top()}${stage(id, `<div class="wlctl">${seg ? `<div class="wlmd"><div class="wlseg">${seg.innerHTML}</div><small>${segL}</small></div>` : ""}${note ? `<p class="wlnote">${note.innerHTML}</p>` : ""}<button class="wlgo" data-a="play" data-v="${go.dataset.v}">Jouer<small>${lvB}${lvS ? " · " + lvS : ""}</small></button><div class="wlrow"><button class="wlsm" data-a="rulesGo">Règles</button>${infH}</div></div>`)}</div>`;
    a.dataset.hub = id;
  };
  const keep = (id, h) => {
    const old = app.querySelector(".wlf");
    app.innerHTML = h;
    const nw = app.querySelector(".wlf");
    if (old && nw) {
      old.querySelector(".wlst").replaceWith(nw.querySelector(".wlst"));
      old.dataset.g = id;
      old
        .querySelectorAll(".wlsel button")
        .forEach((x) => x.setAttribute("aria-selected", x.dataset.v === id));
      app.replaceChildren(old);
    }
  };
  const quiz = () => {
    const o = app.querySelector(".wlf");
    cur = "quiz";
    nv("games");
    try {
      theme("quiz");
    } catch (e) {}
    app.innerHTML = `<div class="wlf" data-g="quiz">${top()}${stage("quiz", '<button class="wlgo" data-a="wlQz">Jouer<small>Questions de culture générale</small></button>')}</div>`;
    if (o) {
      const h = app.innerHTML;
      app.replaceChildren(o);
      keep("quiz", h);
    }
  };
  const lock = (id) => {
    cur = id;
    nv("games");
    try {
      theme(id);
    } catch (e) {}
    const s = typeof GSTEP !== "undefined" && GSTEP[id];
    keep(
      id,
      `<div class="wlf" data-g="${id}">${top()}${stage(id, `<div class="wllk">${LKI}<span>Se débloque à l’étape ${s || "?"} de l’histoire.</span></div>`)}</div>`,
    );
  };
  const show = (id) => {
    window.WLM = 1;
    const nb = $("#nav");
    nb && (nb.hidden = !1);
    if (lk(id)) return lock(id);
    if (id === "quiz") return quiz();
    hub(id);
  };
  const _hub = hub;
  hub = function (e0) {
    const e = e0 === "ana" ? "mots" : e0;
    WG.includes(e) && (window.WLM = 1);
    const old = window.WLM && app.querySelector(".wlf"),
      y = window.scrollY;
    const r = _hub.apply(this, arguments);
    try {
      if (window.WLM && WG.includes(e) && e !== "quiz") {
        xf(e);
        const nw = app.querySelector(".wlf");
        if (old && nw) {
          if (old.dataset.g === e) {
            const a = old.querySelector(".wlctl"),
              b = nw.querySelector(".wlctl");
            a && b ? a.replaceWith(b) : old.querySelector(".wlst").replaceWith(nw.querySelector(".wlst"));
          } else {
            old.querySelector(".wlst").replaceWith(nw.querySelector(".wlst"));
            old.dataset.g = e;
          }
          old
            .querySelectorAll(".wlsel button")
            .forEach((x) => x.setAttribute("aria-selected", x.dataset.v === e));
          app.replaceChildren(old);
        }
        window.scrollTo(0, old ? y : 0);
      }
    } catch (x) {}
    return r;
  };
  setTimeout(() => {
    Object.assign(act, {
      wlSel: (v) => {
        if (!WG.includes(v) || v === cur) return;
        st.set("wl:sel", v);
        try {
          sfx(560, 0.06);
        } catch (e) {}
        app.dataset.hub = "";
        show(v);
      },
      wlLv: () => sheet("Choisir un niveau", LV),
      wlShX: () => {
        const d = $("#wlsh");
        d && d.remove();
      },
      wlQz: () => {
        const o = window.WLM;
        window.WLM = 0;
        try {
          start("quiz", !1, 0);
        } catch (e) {}
        window.WLM = o;
      },
    });
    const _o = act.open;
    act.open = function (e) {
      if (e === "jeuxmots") return show(sel());
      return _o.apply(this, arguments);
    };
  }, 70);
  const _h = home;
  home = function () {
    window.WLM = 0;
    const d = $("#wlsh");
    d && d.remove();
    return _h.apply(this, arguments);
  };
  try {
    cur === null && document.querySelector(".tile") && home();
  } catch (e) {}
})();
