(() => {
  const K = "tu:",
    get = (k, d) => st.get(K + k, d),
    set = (k, v) => st.set(K + k, v);
  const q = (s) => document.querySelector(s),
    qv = (s) => [...document.querySelectorAll(s)].find((e) => e.getClientRects().length) || null,
    nv_ = (v) => `#nav>button[data-v="${v}"]`;
  const GUY = () =>
    `<svg viewBox="-29 -46 58 68" aria-hidden="true">${typeof GUYAQ === "string" ? GUYAQ : ""}</svg>`;
  const ST = [
    { go: "aqua", sel: nv_("aqua"), t: "Ici, le <b>Bassin</b> : un aquarium et un jardin à faire vivre." },
    {
      pre: () => {
        try {
          act.aqmd("a");
        } catch (e) {}
      },
      sel: "[data-a=aqmd][data-v=a]",
      t: "Voici ton <b>Aquarium</b> : tes poissons y nagent et te rapportent des <b>bulles</b> 🫧, la monnaie de Calmos.",
    },
    {
      pre: () => {
        try {
          act.aqmd("g");
        } catch (e) {}
      },
      sel: "[data-a=aqmd][data-v=g]",
      t: "Et voici le <b>Jardin</b> : tu y fais pousser des plantes et tu t’en occupes pour les voir grandir.",
    },
    {
      go: "games",
      sel: nv_("games"),
      t: "Ici, les <b>Jeux</b> : mots, énigmes, cartes, arcade… Chaque niveau terminé te donne des bulles et des fragments de nacre.",
    },
    {
      go: "daily",
      sel: nv_("daily"),
      t: "Là, l’<b>Histoire</b> : mon grand voyage dans les profondeurs. Dix fragments de nacre font une <b>perle</b>, et chaque perle me fait avancer.",
    },
    {
      go: "soc",
      sel: nv_("soc"),
      t: "Le <b>Social</b>, c’est pour jouer avec des amis : défis, salons avec un code…",
    },
    { go: "set", sel: nv_("set"), t: "Et les <b>Réglages</b> : musique, mode calme, apparence…" },
    {
      m: "t",
      t: "Voilà pour la visite ! Tu peux me retrouver quand tu veux dans les Réglages. Bonne détente !",
      end: 1,
    },
    {
      m: "f",
      t: "Assez parlé : à toi de jouer ! On va faire deux niveaux de <b>jeu de mots</b>. Je te dis quoi faire.",
    },
    {
      m: "f",
      go: "games",
      sel: '.tile[data-v="jeuxmots"]',
      click: 1,
      t: "Touche la catégorie <b>Jeux de mots</b>.",
    },
    {
      m: "f",
      sel: ".wlgo",
      click: 1,
      pos: "mid",
      pre: () => {
        try {
          act.wlSel("mots");
        } catch (e) {}
      },
      t: "Le <b>Jeu de mots</b> est déjà choisi en haut. Appuie sur <b>Jouer</b>.",
    },
    {
      m: "f",
      play: 1,
      until: () => st.get(ckey("mots") + ":0", !1),
      t: "<b>Niveau 1.</b> Fais glisser ton doigt sur les lettres de la roue pour former un mot, puis relâche. Chaque mot trouvé va dans la grille. Besoin d’aide ? Touche l’ampoule : c’est un indice.",
    },
    {
      m: "f",
      wait: 1200,
      sel: ".nxb",
      click: 1,
      g: 1,
      until: () => !qv(".nxb") && !!qv("#whl") && Date.now() - S.t0 > 1500,
      t: "Bravo ! Tu gagnes des <b>bulles</b> 🫧 et des <b>fragments de nacre</b>. Passe au niveau suivant.",
    },
    {
      m: "f",
      play: 1,
      until: () => {
        try {
          return snap().got.length >= 4 || st.get(ckey("mots") + ":1", !1);
        } catch (e) {
          return !1;
        }
      },
      t: "<b>Niveau 2.</b> Même principe : relie les lettres pour retrouver tous les mots.",
    },
    {
      m: "f",
      sel: ".hintb",
      click: 1,
      g: 1,
      skip: () => st.get(ckey("mots") + ":1", !1),
      pre: () => {
        try {
          fl += 2;
          st.set("fl", fl);
          document.querySelectorAll(".chip").forEach((c) => {
            if (c.textContent.includes("🫧")) c.innerHTML = "🫧 " + FLX();
          });
        } catch (e) {}
      },
      t: "Déjà 4 mots trouvés ! Je t’offre 2 🫧. S’il te manque un mot, touche l’<b>ampoule</b> : un indice coûte 1 bulle et te révèle des lettres.",
    },
    {
      m: "f",
      play: 1,
      until: () => st.get(ckey("mots") + ":1", !1),
      t: "Voilà, tu sais demander un indice. Il ne reste plus qu’à terminer le niveau !",
    },
    {
      m: "f",
      wait: 1200,
      t: "Bien joué ! Ça fait 10 fragments de nacre : ta première <b>perle</b> ! Allons m’aider à avancer dans l’histoire.",
    },
    {
      m: "f",
      go: "daily",
      sel: "#sbar button[data-a=sgo]",
      click: 1,
      t: "Appuie sur <b>Avancer</b> : ta perle m’emmène un peu plus loin.",
    },
    {
      m: "f",
      until: () => {
        try {
          return styRead().p >= 1 && !sBusy;
        } catch (e) {
          return !0;
        }
      },
      nocard: 1,
    },
    {
      m: "f",
      go: "aqua",
      pre: () => {
        try {
          act.aqmd("a");
          aqTab = "fish";
          if (fl < 10) {
            fl = 10;
            st.set("fl", fl);
          }
        } catch (e) {}
      },
      sel: "[data-a=aqshop]",
      click: 1,
      skip: () => {
        try {
          return !!aqRead().f.rouge;
        } catch (e) {
          return !1;
        }
      },
      t: "Merci ! Avec tes bulles, achetons mon premier compagnon. Ouvre la <b>boutique</b>.",
    },
    {
      m: "f",
      wait: 600,
      sel: '[data-a=aqbuy][data-v="f:rouge"]',
      click: 1,
      skip: () => {
        try {
          return !!aqRead().f.rouge;
        } catch (e) {
          return !1;
        }
      },
      t: "Voici le <b>poisson rouge</b> : appuie sur <b>Acheter · 10 🫧</b>.",
    },
    {
      m: "f",
      wait: 600,
      sel: "[data-a=aqny]",
      hole: ".aqnm",
      pos: "top",
      click: 1,
      skip: () => {
        try {
          return !!aqRead().f.rouge;
        } catch (e) {
          return !1;
        }
      },
      t: "Choisis un nom pour ton poisson, ou laisse vide pour un nom au hasard. Puis appuie sur <b>Adopter</b>.",
    },
    {
      m: "f",
      wait: 900,
      until: () => {
        try {
          return !!aqRead().f.rouge;
        } catch (e) {
          return !0;
        }
      },
      nocard: 1,
    },
    {
      m: "f",
      go: "aqua",
      pre: () => {
        try {
          act.aqmd("a");
          const t = aqRead();
          if (t.f.rouge) {
            t.f.rouge.t = 0;
            aqSave(t);
            aqStatus();
          }
        } catch (e) {}
      },
      sel: "#aqb",
      click: 1,
      t: "Ton poisson a faim ! Appuie sur le bouton pour le <b>nourrir</b> : chaque repas te rapporte des bulles 🫧. Tu peux le faire régulièrement.",
    },
    {
      m: "f",
      wait: 700,
      nocard: 1,
      until: () => {
        try {
          return Date.now() - aqRead().f.rouge.t < 5000;
        } catch (e) {
          return !0;
        }
      },
    },
    {
      m: "f",
      t: "Tu as tout compris : joue, gagne des bulles et des perles, fais grandir ton aquarium et avance dans l’histoire. Je compte sur toi, et bonne détente !",
      end: 1,
    },
  ];
  let S = null,
    O = null,
    R = null,
    C = null,
    T = 0,
    ent = 0,
    sel = null,
    tk = 0;
  const steps = () => ST.filter((s) => !s.m || s.m === (S.full ? "f" : "t"));
  const clear = () => {
    S && S.raf && cancelAnimationFrame(S.raf);
    [O, R, C].forEach((e) => e && e.remove());
    O = R = C = null;
    clearInterval(tk);
    tk = 0;
  };
  function end(done) {
    clear();
    S = null;
    if (done !== 0) set("done", 1);
  }
  function offer() {
    if (S) return;
    set("asked", 1);
    S = { offer: 1 };
    clear();
    O = document.createElement("div");
    O.id = "tuo";
    document.body.appendChild(O);
    C = document.createElement("div");
    C.id = "tuc";
    C.className = "mid";
    C.innerHTML = `<div class="tuz">${GUY()}</div><div class="tub"><b class="tun">ZENI</b><p>Bienvenue ! Moi, c’est Zeni. Veux-tu une <b>petite visite guidée</b> de Calmos, un coin de calme où l’on joue sans se presser ? On joue même deux niveaux ensemble : ça prend quelques minutes.</p><div class="tur"><button class="tus" data-tu="no">Non merci</button><button class="tup" data-tu="yes">Oui, montre-moi</button></div></div>`;
    document.body.appendChild(C);
  }
  function start(full) {
    clear();
    S = { full: !!full, i: -1 };
    next();
  }
  function next() {
    if (!S) return;
    S.i++;
    const L = steps();
    if (S.i >= L.length) return end();
    const s = L[S.i];
    if (s.skip && s.skip()) return next();
    enter(s);
  }
  function enter(s) {
    S.s = s;
    S.t0 = Date.now();
    S.hold = 0;
    S.lk = 0;
    sel = null;
    clear();
    if (s.go) {
      try {
        act.tab(s.go);
      } catch (e) {}
    }
    try {
      s.pre && s.pre();
    } catch (e) {}
    if (s.go && s.pre)
      setTimeout(() => {
        try {
          S && S.s === s && s.pre();
        } catch (e) {}
      }, 600);
    const dim = !s.play && !s.nocard;
    if (!s.nocard) {
      C = document.createElement("div");
      C.id = "tuc";
      C.className = s.sel
        ? s.below
          ? ""
          : s.pos || (s.g ? "bot2" : s.sel.startsWith("#nav") ? "bot" : "top")
        : s.play
          ? "bot2 cmp"
          : "mid";
      C.innerHTML = `<div class="tuz">${GUY()}</div><div class="tub"><b class="tun">ZENI</b><p>${s.t}</p><div class="tur"><button class="tus" data-tu="skip">Passer la visite</button>${s.click || (s.until && !s.play) ? "" : `<button class="tup${s.play ? " alt" : ""}" data-tu="${s.play ? "hide" : "next"}">${s.end ? "Terminer" : s.play ? "Compris" : "Suivant"}</button>`}</div></div>`;
      document.body.appendChild(C);
    }
    if (dim) {
      O = document.createElement("div");
      O.id = "tuo";
      document.body.appendChild(O);
      if (s.sel) {
        R = document.createElement("div");
        R.id = "tur";
        document.body.appendChild(R);
      }
    }
    tk = setInterval(tick, 220);
    tick();
    cancelAnimationFrame(S.raf);
    const fr = () => {
      if (!S || S.s !== s) return;
      if (s.sel && !(s.wait && Date.now() - S.t0 < s.wait)) {
        const t = qv(s.hole || s.sel);
        t && place(t.getBoundingClientRect());
      }
      S.raf = requestAnimationFrame(fr);
    };
    S.raf = requestAnimationFrame(fr);
  }
  function place(r) {
    const W = innerWidth,
      H = innerHeight,
      p = 8,
      x1 = Math.max(0, r.left - p),
      y1 = Math.max(0, r.top - p),
      x2 = Math.min(W, r.right + p),
      y2 = Math.min(H, r.bottom + p);
    let rd = 16;
    try {
      rd = (parseFloat(getComputedStyle(sel).borderRadius) || 0) + p;
      sel.getBoundingClientRect().width > 0 &&
        (rd = Math.max(14, Math.min(rd, (x2 - x1) / 2, (y2 - y1) / 2)));
    } catch (e) {
      rd = 16;
    }
    if (O)
      O.style.clipPath = `path(evenodd,"M0 0H${W}V${H}H0Z M${x1 + rd} ${y1}H${x2 - rd}A${rd} ${rd} 0 0 1 ${x2} ${y1 + rd}V${y2 - rd}A${rd} ${rd} 0 0 1 ${x2 - rd} ${y2}H${x1 + rd}A${rd} ${rd} 0 0 1 ${x1} ${y2 - rd}V${y1 + rd}A${rd} ${rd} 0 0 1 ${x1 + rd} ${y1}Z")`;
    if (R) {
      R.style.borderRadius = rd + "px";
      R.style.left = x1 + "px";
      R.style.top = y1 + "px";
      R.style.width = x2 - x1 + "px";
      R.style.height = y2 - y1 + "px";
    }
    if (C && !C.classList.contains("cmp")) {
      const z = S.s,
        top = (r.top + r.bottom) / 2 > H * 0.5 && !(z.sel || "").startsWith("#nav");
      if (z.below) C.style.top = Math.min(H - 170, r.bottom + 16) + "px";
      else if (
        !z.pos &&
        !z.g &&
        !S.lk &&
        !(z.sel || "").startsWith("#nav") &&
        r.height > 0 &&
        r.top >= 0 &&
        r.bottom <= H
      ) {
        S.lk = 1;
        C.className = (r.top + r.bottom) / 2 < H * 0.5 ? "bot" : "top";
      }
    }
  }
  function tick() {
    if (!S || !S.s) return;
    const s = S.s;
    if (s.wait && Date.now() - S.t0 < s.wait) return;
    if (s.until && s.until()) {
      if (!S.hold) {
        S.hold = 1;
        return setTimeout(next, s.play ? 900 : 300);
      }
      return;
    }
    if (s.sel) {
      let t = qv(s.hole || s.sel);
      if (t) {
        O && (O.style.pointerEvents = "");
        if (t !== sel) {
          sel = t;
          const q0 = t.getBoundingClientRect();
          if (q0.bottom > innerHeight || q0.top < 0)
            try {
              t.scrollIntoView({ block: "center", behavior: "instant" });
            } catch (e) {}
        }
        place(t.getBoundingClientRect());
      } else {
        const d = Date.now() - S.t0;
        if (O) {
          O.style.clipPath = "none";
          if (R) R.style.width = "0";
          if (d > 1800) O.style.pointerEvents = "none";
        }
        if (s.click && d > 7000 && !S.hold) {
          S.hold = 1;
          next();
        }
      }
    }
  }
  document.addEventListener(
    "click",
    (e) => {
      if (!S) return;
      const b = e.target.closest && e.target.closest("[data-tu]");
      if (b) {
        const a = b.dataset.tu;
        if (a === "yes") return start(!0);
        if (a === "no") {
          end();
          return;
        }
        if (a === "skip") {
          end();
          return;
        }
        if (a === "next") return next();
        if (a === "hide") {
          C && (C.style.display = "none");
          return;
        }
        return;
      }
      const s = S.s;
      if (s && s.click && s.sel && !S.hold) {
        const t = qv(s.sel);
        if (t && t.contains(e.target)) {
          S.hold = 1;
          setTimeout(next, s.until ? 200 : 450);
        }
      }
    },
    !0,
  );
  window.TU = { start, offer };
  try {
    const a = act.apSet;
    act.apSet = function () {
      const r = a.apply(this, arguments);
      set("done", 0);
      let seen = 0,
        n = 0,
        tr = 0;
      const w = setInterval(() => {
        try {
          if (S || ++n > 140) {
            clearInterval(w);
            return;
          }
          if (q("#apm")) return;
          const b = q("#sfr.pro");
          if (b) {
            seen = 1;
            return;
          }
          if (seen) {
            clearInterval(w);
            setTimeout(offer, 700);
            return;
          }
          if ((q("#stg") && n > 6) || n > 40) {
            clearInterval(w);
            offer();
            return;
          }
          if (!q("#stg") && tr < 5 && n % 4 === 1) {
            tr++;
            dayScreen();
          }
        } catch (e) {
          clearInterval(w);
        }
      }, 500);
      return r;
    };
  } catch (e) {}
  try {
    act.tuStart = () => start(!1);
    const p = prefScreen;
    prefScreen = function () {
      const r = p.apply(this, arguments);
      try {
        app.insertAdjacentHTML(
          "beforeend",
          '<section class="glass play pf"><button class="btn alt" data-a="tuStart">Visite guidée avec Zeni</button></section>',
        );
      } catch (e) {}
      return r;
    };
  } catch (e) {}
})();
