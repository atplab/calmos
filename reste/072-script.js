(() => {
  if (typeof hub !== "function") return;
  /* Salon « Jeux de réflexion » : pour ajouter un jeu, ajouter son id dans RG (il doit exister dans ALL). */
  const RG = ["sudoku", "tournade", "flow", "nono"];
  window.RFG = RG;
  const JR = {
    id: "jeuxrefl",
    n: "Jeux de réflexion",
    ic: "",
    a: "#6fc2b8",
    b: "#2f5f8f",
    t: "Le salon des casse-têtes",
    s: "Sudoku, Tournade, Relie les points et Nonogramme réunis.",
    sp: "",
  };
  const NONO =
    '<defs><linearGradient id="rfn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb0cf"/><stop offset="1" stop-color="#d9568f"/></linearGradient></defs><rect x="6" y="6" width="52" height="52" rx="10" fill="#fff" opacity=".92"/><g fill="#9aa6d6" font-family="Georgia,serif" font-weight="700" font-size="6" text-anchor="middle"><text x="24" y="15">1</text><text x="32" y="15">3</text><text x="40" y="15">1</text><text x="14" y="27">2</text><text x="14" y="35">3</text><text x="14" y="43">1</text></g><g fill="url(#rfn)"><rect x="29" y="20" width="6" height="6" rx="1.5"/><rect x="21" y="26" width="6" height="6" rx="1.5"/><rect x="29" y="26" width="6" height="6" rx="1.5"/><rect x="37" y="26" width="6" height="6" rx="1.5"/><rect x="21" y="34" width="6" height="6" rx="1.5"/><rect x="29" y="34" width="6" height="6" rx="1.5"/><rect x="37" y="34" width="6" height="6" rx="1.5"/><rect x="29" y="42" width="6" height="6" rx="1.5"/></g><g stroke="#c9d0ea" stroke-width=".8"><path d="M19 18v34M27 18v34M35 18v34M43 18v34M19 18h28M19 26h28M19 34h28M19 42h28M19 50h28" fill="none"/></g>';
  const JRA =
    '<defs><linearGradient id="rfj" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fe0d2"/><stop offset="1" stop-color="#3f86b8"/></linearGradient></defs><rect x="6" y="6" width="52" height="52" rx="12" fill="url(#rfj)"/><g fill="#fff"><rect x="14" y="14" width="10" height="10" rx="2.5" opacity=".95"/><rect x="27" y="14" width="10" height="10" rx="2.5" opacity=".5"/><rect x="40" y="14" width="10" height="10" rx="2.5" opacity=".95"/><rect x="14" y="27" width="10" height="10" rx="2.5" opacity=".5"/><rect x="27" y="27" width="10" height="10" rx="2.5" opacity=".95"/><rect x="40" y="27" width="10" height="10" rx="2.5" opacity=".5"/><rect x="14" y="40" width="10" height="10" rx="2.5" opacity=".95"/><rect x="27" y="40" width="10" height="10" rx="2.5" opacity=".5"/><rect x="40" y="40" width="10" height="10" rx="2.5" opacity=".95"/></g><path d="M46 8l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fff6b0"/>';
  try {
    window.GIL = window.GIL || {};
    GIL.nono = GIL.nono || NONO;
    GIL.jeuxrefl = JRA;
  } catch (e) {}
  try {
    const i = GD.findIndex((g) => g.id === "sudoku");
    GD.splice(i < 0 ? GD.length : i, 0, JR);
    ALL.push(JR);
    const j = GUNL.indexOf("sudoku");
    GUNL.splice(j < 0 ? GUNL.length : j, 0, "jeuxrefl");
    const o = st.get("g:ord", []);
    if (o.length && !o.includes("jeuxrefl")) {
      const k = o.indexOf("sudoku");
      o.splice(k < 0 ? o.length : k, 0, "jeuxrefl");
      st.set("g:ord", o);
    }
    const c = GCAT.find((c) => c[0] === "refl");
    c && !c[2].includes("jeuxrefl") && c[2].splice(Math.max(0, c[2].indexOf("sudoku")), 0, "jeuxrefl");
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
    const v = st.get("rf:sel", "sudoku");
    return RG.includes(v) ? v : RG[0];
  };
  const ico = (id) =>
    window.GIL && GIL[id] ? `<svg viewBox="0 0 64 64" aria-hidden="true">${GIL[id]}</svg>` : "";
  const LKI =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
  const RD = {
    sudoku:
      "Remplis la grille avec les chiffres de 1 à 9, sans répéter un chiffre dans une ligne, une colonne ou un carré.",
    tournade: "Fais pivoter les pièces pour reconnecter tous les fils de lumière et redessiner la forme.",
    flow: "Relie les points de même couleur par un fil, sans croiser les autres, et remplis toute la grille.",
    nono: "Colorie les cases grâce aux chiffres des lignes et des colonnes pour faire apparaître l’image.",
  };
  let LV = "";
  const heroH = (id, opt) => {
    const g = G(id);
    return `<div class="rfst" data-g="${id}"><div class="rfpn"><div class="rfart">${ico(id)}</div></div><h2>${esc(g.n)}</h2><p class="rft">${esc(g.t || "")}</p><p class="rfs">${esc(RD[id] || g.s || "")}</p><div class="rfopt">${opt}</div></div>`;
  };
  const tabs = (id) =>
    RG.map(
      (k) =>
        `<button role="tab" data-a="rfSel" data-v="${k}" aria-selected="${k === id}" class="${lk(k) ? "lk" : ""}"><i>${ico(k)}</i><span>${esc(G(k).n)}</span>${lk(k) ? `<em>${LKI}</em>` : ""}</button>`,
    ).join("");
  const frame = (id, h) =>
    `<div class="rfl" data-g="${id}" style="--ga:${G(id).a};--gb:${G(id).b}">${[
      [6, 3, 22, 0, 24],
      [18, 4, 28, -9, -18],
      [30, 2, 19, -4, 14],
      [44, 5, 30, -14, -22],
      [56, 3, 24, -7, 20],
      [68, 4, 27, -16, -14],
      [80, 2, 21, -2, 18],
      [92, 3, 26, -11, -20],
      [12, 2, 23, -18, 16],
      [50, 3, 25, -21, -12],
    ]
      .map(
        ([x, z, d, l, w]) =>
          `<span class="rfsn" style="--x:${x}%;--s:${z}px;--d:${d}s;--l:${l}s;--w:${w}px"></span>`,
      )
      .join(
        "",
      )}<div class="rftp">${bk("home")}<div class="rfti"><b>Jeux de réflexion</b><small>Le salon des casse-têtes</small></div><div class="chip">🫧 ${FLX()}</div></div><div class="rfsel" role="tablist" aria-label="Jeux de réflexion">${tabs(id)}</div>${h}</div>`;
  const put = (id, opt) => {
    const old = app.querySelector(".rfl");
    const nw = heroH(id, opt);
    if (old) {
      const same = old.dataset.g === id,
        st0 = old.querySelector(".rfst");
      if (same && st0) {
        const t = document.createElement("div");
        t.innerHTML = nw;
        st0.querySelector(".rfopt").replaceWith(t.querySelector(".rfopt"));
      } else {
        const t = document.createElement("div");
        t.innerHTML = nw;
        st0.replaceWith(t.firstElementChild);
      }
      old.dataset.g = id;
      old.style.setProperty("--ga", G(id).a);
      old.style.setProperty("--gb", G(id).b);
      old
        .querySelectorAll(".rfsel button")
        .forEach((x) => x.setAttribute("aria-selected", x.dataset.v === id));
      app.replaceChildren(old);
    } else {
      app.innerHTML = frame(id, nw);
      window.scrollTo(0, 0);
    }
  };
  const sheet = (t, h) => {
    const o = $("#vzsh");
    o && o.remove();
    const d = document.createElement("div");
    d.id = "vzsh";
    d.className = "vzsh";
    d.innerHTML = `<div class="vzsp" role="dialog" aria-label="${t}"><div class="vzsx"><h2>${t}</h2><button data-a="rfShX" aria-label="Fermer">✕</button></div>${h}</div>`;
    d.addEventListener("click", (e) => {
      (e.target === d || e.target.closest("[data-a=play],[data-a=goLv]")) && setTimeout(() => d.remove(), 0);
    });
    document.body.appendChild(d);
  };
  const xf = (id, old) => {
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
      dd = a.querySelector(".dd-h small"),
      gl = a.querySelector(".golv");
    LV =
      (gl ? `<div class="golv">${gl.innerHTML}</div>` : "") +
      (lvg ? `<div class="lvg">${lvg.innerHTML}</div>` : "");
    const infH = inf
      ? `<div class="rfinf">${[...inf.querySelectorAll("[data-a]")].map((b) => b.outerHTML).join("")}<small>${(inf.querySelector(".rcx-t span") || {}).textContent || ""}</small></div>`
      : "";
    if (old) app.replaceChildren(old);
    put(
      id,
      `${seg ? `<div class="rfmd"><div class="rfseg">${seg.innerHTML}</div><small>${segL}</small></div>` : ""}${note ? `<p class="rfnote">${note.innerHTML}</p>` : ""}<button class="rfgo" data-a="play" data-v="${go.dataset.v}">Jouer<small>${esc(lvB)}</small></button><div class="rfrow">${LV ? `<button class="rfpl" data-a="rfLv">Niveaux</button>` : ""}<button class="rfpl" data-a="rulesGo">Règles</button></div>${infH}`,
    );
    app.dataset.hub = id;
    st.set("rf:sel", id);
  };
  const lockV = (id, old) => {
    cur = id;
    nv("games");
    try {
      theme(id);
    } catch (e) {}
    const s = typeof GSTEP !== "undefined" && GSTEP[id];
    if (old) app.replaceChildren(old);
    put(id, `<div class="rflk">${LKI}<span>Se débloque à l’étape ${s || "?"} de l’histoire.</span></div>`);
  };
  const _hub = hub;
  hub = function (e) {
    const rg = RG.includes(e);
    rg && (window.RFM = 1);
    const old = rg ? app.querySelector(".rfl") : null;
    if (rg && lk(e)) {
      lockV(e, old);
      return;
    }
    const r = _hub.apply(this, arguments);
    try {
      rg && xf(e, old);
    } catch (x) {}
    return r;
  };
  setTimeout(() => {
    Object.assign(act, {
      rfSel: (v) => {
        if (!RG.includes(v) || v === (app.querySelector(".rfl") || { dataset: {} }).dataset.g) return;
        st.set("rf:sel", v);
        try {
          sfx(520, 0.05);
        } catch (e) {}
        app.dataset.hub = "";
        hub(v);
      },
      rfLv: () => sheet("Choisir un niveau", LV),
      rfShX: () => {
        const d = $("#vzsh");
        d && d.remove();
      },
    });
    const _o = act.open;
    act.open = function (e) {
      if (e === "jeuxrefl") return hub(sel());
      return _o.apply(this, arguments);
    };
  }, 90);
  const RP = ["#3d95b4", "#243a78"];
  const _th = theme;
  theme = function (e, t) {
    const r = _th.apply(this, arguments);
    try {
      const b = document.body,
        n = b.style;
      if (!t && (RG.includes(e) || e === "jeuxrefl")) {
        b.dataset.rfbg = "1";
        n.setProperty("--a", RP[0]);
        n.setProperty("--b", RP[1]);
      } else {
        delete b.dataset.rfbg;
        delete b.dataset.wlbg;
        if (!t && ((window.WLG || []).includes(e) || e === "ana" || e === "jeuxmots")) {
          const m = ALL.find((x) => x.id === "mots");
          m && (n.setProperty("--a", m.a), n.setProperty("--b", m.b), (b.dataset.wlbg = "1"));
        }
      }
    } catch (x) {}
    return r;
  };
  const _h = home;
  home = function () {
    window.RFM = 0;
    try {
      delete document.body.dataset.rfbg;
      delete document.body.dataset.wlbg;
    } catch (e) {}
    const d = $("#vzsh");
    d && d.remove();
    return _h.apply(this, arguments);
  };
  try {
    cur === null && document.querySelector(".tile") && home();
  } catch (e) {}
})();
