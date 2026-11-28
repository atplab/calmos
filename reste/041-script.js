(() => {
  if (typeof hub !== "function") return;
  /* Salon « Jeux de blocs » : ajouter un futur jeu de blocs ici. */
  const BG = ["tetris", "g2048", "blocs"];
  window.BLG = BG;
  const JB = {
    id: "jeuxblocs",
    n: "Jeux de blocs",
    ic: "",
    a: "#5a7ae0",
    b: "#24306e",
    t: "L’atelier des blocs",
    s: "Tèconta, 2048 et Enligne-bloc réunis.",
    sp: "",
  };
  try {
    const i = GD.findIndex((g) => g.id === "g2048");
    GD.splice(i < 0 ? GD.length : i, 0, JB);
    ALL.push(JB);
    const j = GUNL.indexOf("g2048");
    GUNL.splice(j < 0 ? GUNL.length : j, 0, "jeuxblocs");
    const o = st.get("g:ord", []);
    if (o.length && !o.includes("jeuxblocs")) {
      const k = o.indexOf("g2048");
      o.splice(k < 0 ? o.length : k, 0, "jeuxblocs");
      st.set("g:ord", o);
    }
    const c = GCAT.find((c) => c[0] === "refl");
    c && !c[2].includes("jeuxblocs") && c[2].splice(Math.max(0, c[2].indexOf("g2048")), 0, "jeuxblocs");
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
    const v = st.get("bl:sel", "tetris");
    return BG.includes(v) ? v : BG[0];
  };
  const ico = (id) =>
    window.GIL && GIL[id] ? `<svg viewBox="0 0 64 64" aria-hidden="true">${GIL[id]}</svg>` : "";
  const SV = {
    l: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    r: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5V5.5M9 8h7M9 12h5"/></svg>',
    c: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    k: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  };
  const B = (a, v, i, t, k, x) =>
    `<button class="vzb${x ? " " + x : ""}" style="--k:${k}" data-a="${a}"${v != null ? ` data-v="${v}"` : ""}><i>${i}</i><span>${t}</span></button>`;
  const frame = (id, mid, bt) =>
    `<div class="vzf hub blf" data-g="${id}"><div class="vzfelt"></div><div class="vztp">${bk("home")}<div class="vzti"><b>Jeux de blocs</b><small>L’atelier des blocs</small></div><div class="chip">🫧 ${FLX()}</div></div><div class="cgsw blsw" role="tablist">${BG.map((k) => `<button role="tab" data-a="blSel" data-v="${k}" aria-selected="${k === id}">${lk(k) ? SV.k : ""}${G(k).n}</button>`).join("")}</div><div class="vzmid">${mid}</div><div class="vzbt">${bt}</div></div>`;
  const mid = (id) => {
    const g = G(id);
    return `<div class="vzst"><div class="blart">${ico(id)}</div><div class="vzname">${g.n}</div><p class="vzsub">${g.t || ""}</p></div>`;
  };
  let LV = "",
    DS = "";
  const sheet = (t, h) => {
    const o = $("#vzsh");
    o && o.remove();
    const d = document.createElement("div");
    d.id = "vzsh";
    d.className = "vzsh";
    d.innerHTML = `<div class="vzsp" role="dialog" aria-label="${t}"><div class="vzsx"><h2>${t}</h2><button data-a="blShX" aria-label="Fermer">✕</button></div>${h}</div>`;
    d.addEventListener("click", (e) => {
      (e.target === d || e.target.closest("[data-a=play]")) && setTimeout(() => d.remove(), 0);
    });
    document.body.appendChild(d);
  };
  const put = (id, h) => {
    const old = app.querySelector(".blf");
    if (old) {
      const t = document.createElement("div");
      t.innerHTML = h;
      const n = t.firstElementChild;
      old.querySelector(".vzmid").replaceWith(n.querySelector(".vzmid"));
      old.querySelector(".vzbt").replaceWith(n.querySelector(".vzbt"));
      old.dataset.g = id;
      old
        .querySelectorAll(".blsw button")
        .forEach((x) => x.setAttribute("aria-selected", x.dataset.v === id));
      app.replaceChildren(old);
    } else app.innerHTML = h;
    const nb = $("#nav");
    nb && (nb.hidden = !0);
  };
  const xf = (id, old) => {
    const a = app,
      go = a.querySelector(".opts .rc-go[data-a=play]") || a.querySelector("[data-a=play]");
    if (!go) return;
    const lvB = (a.querySelector(".opts .rc-t b") || {}).textContent || "",
      inf = a.querySelector(".opts .rcx-r"),
      lvg = a.querySelector(".lvg"),
      dd = a.querySelector(".dd-h small");
    DS = (a.querySelector(".story p") || {}).textContent || G(id).s || "";
    LV = lvg
      ? `<p class="note" style="margin:0 0 10px">${dd ? dd.textContent : ""}</p><div class="lvg">${lvg.innerHTML}</div>`
      : "";
    const ig = inf && inf.querySelector("[data-a=infGo]"),
      ib = inf && inf.querySelector("[data-a=infBd]"),
      it = ((inf && inf.querySelector(".rcx-t span")) || {}).textContent || "",
      il = ((inf && inf.querySelector(".rcx-t small")) || {}).textContent || "";
    const bt = `<div class="vzhl">${LV ? B("blLv", null, SV.l, "Niveaux", "#6fb7ff") : ""}${B("blRu", null, SV.r, "Règles", "#ffd36a")}</div><div class="vzcn"><button class="vzbig" data-a="play" data-v="${go.dataset.v}">Jouer<small>${lvB}</small></button>${ig ? `<button class="vzpill" data-a="infGo" data-v="${ig.dataset.v}">Infini<small>${it}</small></button>` : inf ? `<button class="vzpill" disabled>Infini<small>${it || il}</small></button>` : ""}</div><div class="vzhr">${"tetris" === id ? B("blCt", null, '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18M8 8l-4 4 4 4M16 8l4 4-4 4"/></svg>', "Commandes", "#9be3a0") : ""}${ib ? B("infBd", ib.dataset.v, SV.c, "Classement", "#ff9a6b") : ""}</div>`;
    if (old) app.replaceChildren(old);
    put(id, frame(id, mid(id), bt));
    app.dataset.hub = id;
  };
  const lock = (id) => {
    cur = id;
    nv("games");
    try {
      theme(id);
    } catch (e) {}
    const s = typeof GSTEP !== "undefined" && GSTEP[id];
    put(
      id,
      frame(
        id,
        mid(id),
        `<div class="vzhl"></div><div class="vzcn"><button class="vzbig" disabled>${SV.k} Verrouillé<small>Se débloque à l’étape ${s || "?"} de l’histoire</small></button></div><div class="vzhr"></div>`,
      ),
    );
  };
  const show = (id) => {
    window.BLM = 1;
    if (lk(id)) return lock(id);
    hub(id);
  };
  const _hub = hub;
  hub = function (e) {
    BG.includes(e) && (window.BLM = 1);
    const old = window.BLM && BG.includes(e) ? app.querySelector(".blf") : null;
    const r = _hub.apply(this, arguments);
    try {
      window.BLM && BG.includes(e) && xf(e, old);
    } catch (x) {}
    return r;
  };
  setTimeout(() => {
    Object.assign(act, {
      blSel: (v) => {
        if (!BG.includes(v) || v === app.querySelector(".blf")?.dataset.g) return;
        st.set("bl:sel", v);
        try {
          sfx(560, 0.06);
        } catch (e) {}
        app.dataset.hub = "";
        show(v);
      },
      blLv: () => sheet("Choisir un niveau", LV),
      blRu: () => sheet("Les règles", `<p class="note" style="margin:0">${DS}</p>`),
      blShX: () => {
        const d = $("#vzsh");
        d && d.remove();
      },
      blCt: () => {
        const I = (p) =>
            `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`,
          R = (p, t, d) => `<div class="ctr"><i>${I(p)}</i><span><b>${t}</b><small>${d}</small></span></div>`,
          BT = [
            ['<path d="M15 5l-7 7 7 7"/>', "Gauche", "Déplace la pièce à gauche"],
            ['<path d="M9 5l7 7-7 7"/>', "Droite", "Déplace la pièce à droite"],
            [
              '<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>',
              "Tourner",
              "Fait pivoter la pièce",
            ],
            ['<path d="M12 5v13M6 12l6 6 6-6"/>', "Descendre", "Fait descendre plus vite"],
            ['<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>', "Lâcher", "Fait tomber d’un coup"],
            ['<path d="M7 7h11l-3-3M17 17H6l3 3"/>', "Garder", "Met de côté, ou échange"],
          ],
          GS = [
            [
              '<circle cx="12" cy="12" r="3.5"/><circle cx="12" cy="12" r="8" opacity=".4"/>',
              "Toucher",
              "Fait pivoter la pièce",
            ],
            ['<path d="M4 12h16M8 8l-4 4 4 4M16 8l4 4-4 4"/>', "Glisser ← →", "Déplace la pièce"],
            ['<path d="M12 4v16M7 15l5 5 5-5"/>', "Glisser ↓", "Fait tomber d’un coup"],
            ['<path d="M12 20V4M7 9l5-5 5 5"/>', "Glisser ↑", "Met de côté, ou échange"],
          ],
          f = () => {
            const c = st.get("tt:ctl", "");
            return `<div class="plseg"><button class="${"g" === c ? "" : "on"}" data-a="blCtS" data-v="b">Boutons</button><button class="${"g" === c ? "on" : ""}" data-a="blCtS" data-v="g">Au doigt</button></div><div class="ctl">${("g" === c ? GS : BT).map((x) => R(...x)).join("")}</div><p class="note" style="margin:10px 0 0">Tu peux changer ici à tout moment.</p>`;
          };
        window.__blCtF = f;
        sheet("Commandes de Tèconta", f());
      },
      blCtS: (v) => {
        st.set("tt:ctl", "g" === v ? "g" : "b");
        const d = $("#vzsh .vzsp");
        if (d) {
          const h = d.querySelector(".vzsx");
          [...d.children].forEach((x) => x !== h && x.remove());
          h.insertAdjacentHTML("afterend", window.__blCtF());
        }
      },
    });
    const _o = act.open;
    act.open = function (e) {
      if (e === "jeuxblocs") return show(sel());
      return _o.apply(this, arguments);
    };
  }, 80);
  const _h = home;
  home = function () {
    window.BLM = 0;
    return _h.apply(this, arguments);
  };
  try {
    cur === null && document.querySelector(".tile") && home();
  } catch (e) {}
})();
