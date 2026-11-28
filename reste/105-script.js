(() => {
  /* Mode calme (nouveau) : animations adoucies, moins de distractions, confirmation avant les jeux dynamiques */
  const DYN = {
    sallearcade: "La salle d’arcade",
    brick: "Casse-briques",
    recif: "Récif appétissant",
    garde: "Garde du Lagon",
    bulles: "Protéger Zeni",
    crabes: "Crabes Farceurs",
    airhockey: "Air hockey",
    bowling: "Bowling",
    hoho: "HoHo",
    cuisine: "Cuisine",
    galac: "Galacfish",
    tetris: "Tèconta",
  };
  const on = () => {
    try {
      return !!prefs().calm;
    } catch (e) {
      return !1;
    }
  };
  window.CALM = on;
  const sync = () => document.body.classList.toggle("calm", on());
  sync();
  setInterval(sync, 1500);
  /* les vérifications « mouvement réduit » existantes suivent le mode calme */
  const mm = window.matchMedia.bind(window);
  window.matchMedia = (q) => {
    const r = mm(q);
    if (/prefers-reduced-motion:\s*reduce/.test(q) && on() && !document.body.classList.contains("seabg"))
      return {
        matches: !0,
        media: q,
        addListener() {},
        removeListener() {},
        addEventListener() {},
        removeEventListener() {},
        onchange: null,
        dispatchEvent() {
          return !1;
        },
      };
    return r;
  };
  const st0 = document.createElement("style");
  st0.textContent = `.cmrow{margin-bottom:10px}.cmch{display:grid;gap:8px;margin:4px 0 14px}.cmch>b{font-size:14px}.cmc{display:flex;gap:10px;align-items:flex-start;text-align:left;border:0;border-radius:16px;padding:11px 12px;background:rgba(255,255,255,.08);color:inherit;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.12)}.cmc.on{background:rgba(160,200,255,.18);box-shadow:inset 0 0 0 2px #a8c8ff}.cmc i{font-style:normal;font-size:20px}.cmc span b{display:block;font-size:14px}.cmc small{opacity:.8;font-size:12px;line-height:1.35}.cmn{opacity:.65;font-size:11.5px;text-align:center}
.cmq{position:fixed;inset:0;z-index:10000;display:grid;place-items:center;background:rgba(6,8,24,.6);backdrop-filter:blur(3px);animation:rlf .35s ease-out;padding:20px}.cmqp{width:min(380px,100%);background:linear-gradient(180deg,#232b66,#151a42);color:#f4f6ff;border-radius:22px;padding:20px 18px 16px;box-shadow:0 20px 50px rgba(0,0,0,.45);text-align:center}.cmqp h2{margin:4px 0 6px;font:700 1.2rem Fraunces,Georgia,serif}.cmqp p{margin:0 0 14px;opacity:.85;line-height:1.45;font-size:14px}.cmqp .btn{width:100%;margin-bottom:8px}.cmqp label{display:flex;gap:8px;align-items:center;justify-content:center;font-size:13px;opacity:.85;margin-top:6px}.cmqp input{width:18px;height:18px;accent-color:#a8c8ff}
body.calm:not(.seabg) #snow{opacity:.35;animation-duration:200s!important}body.calm:not(.seabg) #sjwall .neon,body.calm:not(.seabg) #sjwall .dust,body.calm:not(.seabg) #scfx *,body.calm:not(.seabg) .rlp>*{animation:none!important}body.calm:not(.seabg) #sjwall .dust{display:none}body.calm:not(.seabg) .tile,body.calm:not(.seabg) .tile *{transition-duration:.15s!important}body.calm:not(.seabg) .tile:hover{transform:none!important}body.calm:not(.seabg) *{scroll-behavior:auto!important}
body.calm:not(.seabg) .rlp,body.calm:not(.seabg) .rlo{animation-duration:.25s!important}body.calm.seabg .m3bu{display:none!important}body.calm:not(.seabg) .born,body.calm:not(.seabg) .pop,body.calm:not(.seabg) .bump{animation-duration:.01s!important}`;
  document.head.appendChild(st0);
  /* fenêtre de confirmation */
  const ask = (id, go) => {
    if (!on() || !DYN[id] || st.get("cm:ok:" + id, 0)) return go();
    const o = document.createElement("div");
    o.className = "cmq";
    o.innerHTML = `<div class="cmqp" role="dialog" aria-label="Jeu dynamique"><div style="font-size:30px">🌊</div><h2>${DYN[id]} est plus dynamique</h2><p>${id === "sallearcade" ? "Cette salle bouge" : "Ce jeu bouge"} davantage et peut être moins calme que le reste de l’application. Veux-tu continuer ?</p><button class="btn" data-x="y">Oui, continuer</button><button class="btn alt" data-x="n">Retour</button><label><input type="checkbox"> Ne plus afficher pour ce jeu</label></div>`;
    document.body.appendChild(o);
    o.addEventListener("click", (e) => {
      const b = e.target.closest("[data-x]");
      if (!b && e.target !== o) return;
      const ok = b && b.dataset.x === "y";
      o.querySelector("input").checked && ok && st.set("cm:ok:" + id, 1);
      o.remove();
      ok && go();
    });
  };
  window.calmAsk = ask;
  setTimeout(() => {
    const _o = act.open;
    act.open = function (e) {
      const a = arguments,
        t = this;
      if (on() && DYN[e] && document.querySelector(".tile")) return ask(e, () => _o.apply(t, a));
      return _o.apply(t, a);
    };
    const _d = act.sjDo;
    _d &&
      (act.sjDo = function (v) {
        const a = arguments,
          t = this,
          g = (document.querySelector(".sjpl [aria-selected=true]") || {}).dataset?.v;
        if (g && DYN[g] && !window.CMIN)
          return ask(g, () => {
            window.CMIN = 1;
            try {
              _d.apply(t, a);
            } finally {
              window.CMIN = 0;
            }
          });
        return _d.apply(t, a);
      });
    const _p = act.play;
    _p &&
      (act.play = function () {
        const a = arguments,
          t = this,
          g = typeof cur !== "undefined" ? cur : null;
        if (g && DYN[g] && on() && !window.CMIN) {
          return ask(g, () => {
            window.CMIN = 1;
            try {
              _p.apply(t, a);
            } finally {
              window.CMIN = 0;
            }
          });
        }
        return _p.apply(t, a);
      });
    [
      ["infGo", (v) => v],
      ["ahLv", () => "airhockey"],
      ["ahLoc", () => "airhockey"],
      ["ahOnGo", () => "airhockey"],
      ["ahMM", () => "airhockey"],
    ].forEach(([k, f]) => {
      const o = act[k];
      o &&
        (act[k] = function (v) {
          const a = arguments,
            t = this,
            g = f(v);
          if (g && DYN[g] && on() && !window.CMIN)
            return ask(g, () => {
              window.CMIN = 1;
              try {
                o.apply(t, a);
              } finally {
                window.CMIN = 0;
              }
            });
          return o.apply(t, a);
        });
    });
    act.cmPick = (v) => {
      window.CMSEL = v;
      try {
        const p = prefs();
        p.calm = v === "calm";
        savePrefs();
        apply();
      } catch (e) {}
      document.querySelectorAll(".cmc").forEach((b) => b.classList.toggle("on", b.dataset.v === v));
      sync();
    };
    const _t = act.tg;
    act.tg = function (v) {
      const r = _t.apply(this, arguments);
      v === "calm" && sync();
      return r;
    };
  }, 900);
})();
