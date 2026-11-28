(() => {
  if (typeof unHub !== "function") return;
  const SV = {
    r: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5V5.5M9 8h7M9 12h5"/></svg>',
    v: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    b: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6"/></svg>',
    f: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14c3 0 5 2 5 5"/></svg>',
  };
  const B = (a, v, i, t, k) =>
    `<button class="vzb" style="--k:${k}" data-a="${a}"${v ? ` data-v="${v}"` : ""}><i>${i}</i><span>${t}</span></button>`;
  unHub = function () {
    unActs();
    cur = "hoho";
    nv("games");
    theme("hoho");
    UN.scr = "hub";
    UN.g = null;
    UN.room = "";
    clearInterval(UN.iv);
    UN.iv = 0;
    const o = $("#vzsh");
    o && o.remove();
    const nb = $("#nav");
    nb && (nb.hidden = !0);
    const n = unSNext(),
      sv = st.get("hoho:sv", null),
      res = sv && sv.k === "hoho" && sv.st === "play",
      rm = typeof unMine === "function" ? unMine().length : 0;
    app.innerHTML = `<div class="vzf hub hhf"><div class="vzfelt"></div><div class="vztp">${bk("home")}<div class="vzti"><b>HoHo</b><small>Salon de cartes</small></div><div class="chip">🫧 ${FLX()}</div></div>
<div class="vzmid"><div class="vzst"><div class="vzfan">${["r7", "gs", "kw", "bv", "yd"].map((c, i) => `<div class="vzfc" style="--r:${(i - 2) * 13}deg;--x:${(i - 2) * 38}px;--d:${(i * 0.35).toFixed(2)}s">${unCard(c)}</div>`).join("")}</div><div class="vzname">HoHo</div><p class="vzsub">Pose la même couleur ou le même symbole.<br>Le premier sans cartes gagne.</p></div></div>
<div class="vzbt"><div class="vzhl">${B("hhSh", "rules", SV.r, "Règles", "#6fb7ff")}${B("hhSh", "vx", SV.v, "Voix", "#ffd36a")}</div>
<div class="vzcn"><button class="vzbig" data-a="unSt" data-v="${n}">Histoire<small>Niveau ${n + 1}</small></button><button class="vzpill" data-a="unGo">Rapide<small>${UN.cfg.nb} bot${UN.cfg.nb > 1 ? "s" : ""}</small></button></div>
<div class="vzhr">${B("hhSh", "bots", SV.b, "Bots", "#ff9a6b")}${B("hhSh", "fr", SV.f, "Social" + (rm ? " (" + rm + ")" : ""), "#a98cff")}</div></div></div><div id="unhb" hidden></div>`;
    try {
      SO.col || "conn" === SO.st || "function" != typeof socInit || socInit();
    } catch (e) {}
    try {
      unSync();
    } catch (e) {}
    window.scrollTo(0, 0);
  };
  const sheet = (k) => {
    const old = $("#vzsh");
    old && old.remove();
    const c = UN.cfg;
    let t = "",
      h = "";
    if (k === "rules") {
      t = "Les règles";
      h = `<p class="note" style="margin:0 0 12px">Débarrasse-toi de toutes tes cartes avant les autres : pose une carte de la même couleur ou du même symbole, et sers-toi des cartes spéciales.</p><div class="unrg">${["r5", "gs", "bv", "yd", "kw", "kf"].map((e) => unCard(e, "sm")).join("")}</div><p class="note" style="margin:10px 0 0"><b>Passe</b> : le suivant passe son tour. <b>Inversion</b> : le sens change. <b>+2</b> : le suivant pioche 2 et passe. <b>Joker</b> : tu choisis la couleur. <b>+4</b> : tu choisis la couleur, le suivant pioche 4 et passe. Quand il te reste 2 cartes, touche <b>HoHo !</b> avant de jouer, sinon tu pioches 2 cartes.</p>`;
    } else if (k === "vx") {
      t = "Voix du salon";
      h = '<section class="hvs" id="hvx"></section>';
    } else if (k === "bots") {
      t = "Contre des bots";
      h = `<div class="chgr"><div class="chl">Nombre de bots</div><div class="chq">${[1, 2, 3].map((e) => `<button class="chc${c.nb === e ? " on" : ""}" data-a="unCfg" data-v="nb:${e}" aria-pressed="${c.nb === e}">${e}</button>`).join("")}</div></div><p class="note" style="margin:6px 0 14px">Sans minuteur : prends ton temps.</p><button class="btn chgo" data-a="unGo">Commencer la partie</button>`;
    } else if (k === "fr") {
      t = "Social";
      h =
        (typeof unSalon === "function" ? unSalon() : "") +
        (typeof unRooms === "function" ? unRooms() : "") +
        (typeof unFriends === "function" ? unFriends() : "");
    }
    const d = document.createElement("div");
    d.id = "vzsh";
    d.className = "vzsh";
    d.dataset.k = k;
    d.innerHTML = `<div class="vzsp" role="dialog" aria-label="${t}"><div class="vzsx"><h2>${t}</h2><button data-a="hhShX" aria-label="Fermer">✕</button></div>${h}</div>`;
    d.addEventListener("click", (e) => {
      if (e.target === d) d.remove();
    });
    document.body.appendChild(d);
    if (k === "vx")
      try {
        hvDraw();
      } catch (e) {}
  };
  const wrap = () => {
    if (act.unCfg && act.unCfg.hh) return;
    act.hhSh = sheet;
    act.hhShX = () => {
      const d = $("#vzsh");
      d && d.remove();
    };
    const _c = act.unCfg;
    act.unCfg = (v) => {
      _c(v);
      const d = $("#vzsh");
      if (cur === "hoho" && UN.scr === "hub") {
        d && sheet(d.dataset.k);
        const p = document.querySelector(".hhf [data-a=unGo] small");
        p && (p.textContent = UN.cfg.nb + " bot" + (UN.cfg.nb > 1 ? "s" : ""));
      }
    };
    const _d = act.unDrop;
    _d &&
      (act.unDrop = (v) => {
        _d(v);
        cur === "hoho" && UN.scr === "hub" && unHub();
      });
    const _g = act.unGo;
    _g &&
      (act.unGo = (v) => {
        const d = $("#vzsh");
        d && d.remove();
        _g(v);
      });
    act.unCfg.hh = 1;
  };
  const _ua = unActs;
  unActs = function () {
    const r = _ua.apply(this, arguments);
    try {
      wrap();
    } catch (e) {}
    return r;
  };
  setTimeout(wrap, 0);
})();
