(() => {
  const CG = {
    id: "cartes",
    n: "Jeux de cartes",
    ic: "",
    a: "#c8566a",
    b: "#5a1f3a",
    t: "Le salon de cartes",
    s: "HoHo, Carcaché et Solitaire réunis.",
    sp: "",
  };
  try {
    const i = GD.findIndex((g) => g.id === "solitaire");
    GD.splice(i < 0 ? GD.length : i, 0, CG);
    ALL.push(CG);
    const j = GUNL.indexOf("solitaire");
    GUNL.splice(j < 0 ? GUNL.length : j, 0, "cartes");
    const o = st.get("g:ord", []);
    if (o.length && !o.includes("cartes")) {
      const k = o.indexOf("solitaire");
      o.splice(k < 0 ? o.length : k, 0, "cartes");
      st.set("g:ord", o);
    }
  } catch (e) {}
  const GM = [
    ["hoho", "HoHo"],
    ["carcache", "Carcaché"],
    ["solitaire", "Solitaire"],
  ];
  const sel = () => {
    const v = st.get("cg:sel", "hoho");
    return GM.some((g) => g[0] === v) ? v : "hoho";
  };
  const HB = { hoho: () => unHub(), carcache: () => ccHub(), solitaire: () => soHub() };
  const sw = () => {
    if (!window.CGM) return;
    const t = document.querySelector(".vzf.hub .vztp");
    if (!t || document.querySelector(".cgsw")) return;
    const c = cur;
    t.insertAdjacentHTML(
      "afterend",
      `<div class="cgsw" role="tablist">${GM.map(([k, n]) => `<button role="tab" data-a="cgSel" data-v="${k}" aria-selected="${k === c}">${n}</button>`).join("")}</div>`,
    );
    const ti = t.querySelector(".vzti b");
    ti && (ti.textContent = "Jeux de cartes");
  };
  const W = (n) => {
    const f = window[n];
    if (typeof f !== "function") return;
    window[n] = function () {
      window.CGM = 1;
      const r = f.apply(this, arguments);
      try {
        sw();
      } catch (e) {}
      return r;
    };
  };
  const SU = {
    s: '<path d="M12 3C8 8 4 10.5 4 14a4 4 0 0 0 7 2.5L10 21h4l-1-4.5a4 4 0 0 0 7-2.5c0-3.5-4-6-8-11z"/>',
    h: '<path d="M12 21C5 16 2 12.5 2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 10 2.8C22 12.5 19 16 12 21z"/>',
    d: '<path d="M12 2l8 10-8 10-8-10z"/>',
    c: '<circle cx="12" cy="7" r="4"/><circle cx="7" cy="13" r="4"/><circle cx="17" cy="13" r="4"/><path d="M11 13h2l1 8h-4z"/>',
  };
  const pc = (r, s) =>
    `<span class="plc${s === "h" || s === "d" ? " rd" : ""}"><b>${r}</b><svg class="ps" viewBox="0 0 24 24">${SU[s]}</svg><svg class="pb" viewBox="0 0 24 24">${SU[s]}</svg></span>`;
  const B = (a, v, i, t, k) =>
    `<button class="vzb" style="--k:${k}" data-a="${a}"${v != null ? ` data-v="${v}"` : ""}><i>${i}</i><span>${t}</span></button>`;
  const IC = {
    r: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5V5.5M9 8h7M9 12h5"/></svg>',
    t: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3"/></svg>',
    i: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.2 8.5a5 5 0 1 1 0 7c-2-2-4.4-7-6.2-7s-4.2 5-6.2 7a5 5 0 1 1 0-7c2 2 4.4 7 6.2 7s4.2-5 6.2-7z"/></svg>',
    g: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  };
  const soH2 = function () {
    soActs();
    cur = "solitaire";
    nv("games");
    theme("solitaire");
    const o = $("#vzsh");
    o && o.remove();
    const nb = $("#nav");
    nb && (nb.hidden = !0);
    const d = st.get("sol:d", []);
    let n = 0;
    for (; d.includes(n);) n++;
    const sv = st.get("sol:sv", null),
      res = sv && sv.g;
    app.innerHTML = `<div class="vzf hub sof"><div class="vzfelt"></div><div class="vztp">${bk("home")}<div class="vzti"><b>Solitaire</b><small>Salon de cartes</small></div><div class="chip">🫧 ${FLX()}</div></div>
<div class="vzmid"><div class="vzst"><div class="vzfan">${[
      ["A", "s"],
      ["7", "h"],
      ["R", "c"],
      ["D", "d"],
      ["V", "h"],
    ]
      .map(
        (c, i) =>
          `<div class="vzfc" style="--r:${(i - 2) * 13}deg;--x:${(i - 2) * 38}px;--d:${(i * 0.35).toFixed(2)}s">${pc(c[0], c[1])}</div>`,
      )
      .join(
        "",
      )}</div><div class="vzname">Solitaire</div><p class="vzsub">Range les cartes par couleur, de l’as au roi.<br>Toutes les donnes ont une solution.</p></div></div>
<div class="vzbt"><div class="vzhl">${B("soSh", "rules", IC.r, "Règles", "#6fb7ff")}${B("soSh", "stats", IC.t, "Records", "#ffd36a")}</div>
<div class="vzcn"><button class="vzbig" data-a="soLv" data-v="${n}">Jouer<small>Niveau ${n + 1}</small></button><button class="vzpill" data-a="soInf">Rapide<small>${((b) => (b ? "Record " + Math.floor((1e5 - b) / 60) + ":" + String((1e5 - b) % 60).padStart(2, "0") : "Contre la montre"))(infBest("solitaire"))}</small></button></div>
<div class="vzhr">${B("infBd", "solitaire", '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>', "Classement", "#ff9a6b")}${UNL() ? B("soSh", "go", IC.g, "Aller à", "#a98cff") : ""}</div></div></div>`;
    window.scrollTo(0, 0);
  };
  const soSheet = (k) => {
    const old = $("#vzsh");
    old && old.remove();
    let t = "",
      h = "";
    const d = st.get("sol:d", []),
      w = st.get("sol:inf", 0);
    if (k === "rules") {
      t = "Les règles";
      h =
        '<p class="note" style="margin:0">Le solitaire classique, au calme : range les cartes par couleur de l’as au roi sur les quatre piles du haut. Dans les colonnes, empile les cartes en alternant rouge et noir, en descendant. Touche une carte pour qu’elle trouve sa place toute seule. Toutes les donnes ont une solution.</p><p class="note" style="margin:10px 0 0"><b>Rapide</b> : une donne au hasard contre la montre, avec un classement en ligne. +2 🫧 par victoire. <b>Niveaux</b> : de plus en plus coriaces.</p>';
    } else if (k === "stats") {
      t = "Records";
      h = `<div class="vzstt"><div><b>${d.length}</b><small>niveaux réussis</small></div><div><b>${st.get("sol:lose", 0)}</b><small>défaites</small></div></div>`;
    } else if (k === "go") {
      t = "Aller au niveau";
      h =
        '<div class="golv"><label>Niveau <input id="golv" type="number" min="1" inputmode="numeric" placeholder="ex. 1203"></label><button class="rc-go" data-a="soGo">Jouer</button></div>';
    }
    const e = document.createElement("div");
    e.id = "vzsh";
    e.className = "vzsh";
    e.innerHTML = `<div class="vzsp" role="dialog" aria-label="${t}"><div class="vzsx"><h2>${t}</h2><button data-a="soShX" aria-label="Fermer">✕</button></div>${h}</div>`;
    e.addEventListener("click", (x) => {
      x.target === e && e.remove();
    });
    document.body.appendChild(e);
  };
  if (typeof soHub === "function") {
    soHub = soH2;
  }
  W("ccHub");
  W("unHub");
  W("soHub");
  try {
    new MutationObserver(() => {
      try {
        sw();
      } catch (e) {}
    }).observe(app, { childList: true });
  } catch (e) {}
  setTimeout(() => {
    Object.assign(act, {
      soSh: soSheet,
      soShX: () => {
        const d = $("#vzsh");
        d && d.remove();
      },
      cgSel: (v) => {
        if (!HB[v] || v === cur) return;
        st.set("cg:sel", v);
        const d = $("#vzsh");
        d && d.remove();
        try {
          sfx(520, 0.08);
        } catch (e) {}
        HB[v]();
      },
    });
    const _g = act.soGo;
    _g &&
      (act.soGo = (v) => {
        const d = $("#vzsh");
        _g(v);
        d && !document.getElementById("golv") && d.remove();
      });
    const _o = act.open;
    act.open = function (e) {
      if (e === "cartes") {
        window.CGM = 1;
        return HB[sel()]();
      }
      if (e !== "hoho" && e !== "carcache" && e !== "solitaire") window.CGM = 0;
      return _o.apply(this, arguments);
    };
  }, 60);
  const _h = home;
  home = function () {
    window.CGM = 0;
    return _h.apply(this, arguments);
  };
  try {
    cur === null && document.querySelector(".tile") && home();
  } catch (e) {}
})();
