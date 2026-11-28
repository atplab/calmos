(() => {
  /* Almanach des jeux d'arcade : ennemis, obstacles et bonus rencontrés. Ajouter une entrée : [clé icône, nom, niveau de découverte, description] */
  const S = (b, v = "0 0 40 40") => `<svg viewBox="${v}" aria-hidden="true">${b}</svg>`;
  const IC = {
    coral: S(
      '<g fill="#ff7ab8" filter="drop-shadow(0 0 3px #ff4fd8)"><rect x="6" y="18" width="5" height="16"/><rect x="13" y="10" width="5" height="24"/><rect x="20" y="14" width="5" height="20"/><rect x="27" y="8" width="5" height="26"/></g><rect x="4" y="33" width="31" height="3" fill="#ffd0ee"/>',
    ),
    rock: S('<path d="M6 26l5-12 11-5 10 6 3 12-9 6H12z" fill="#101a3a" stroke="#7ea6ff" stroke-width="2"/>'),
    mine: S(
      '<g stroke="#ff9f43" stroke-width="2.4">' +
        [0, 45, 90, 135].map((a) => `<path d="M20 4v32" transform="rotate(${a} 20 20)"/>`).join("") +
        '</g><circle cx="20" cy="20" r="10" fill="#1a1030" stroke="#ff9f43" stroke-width="2"/><rect x="17" y="17" width="6" height="6" fill="#ff3b3b"/>',
    ),
    whirl: S(
      '<g fill="none" stroke="#7ef0ff" stroke-width="2.6" stroke-linecap="round"><path d="M20 6a14 14 0 1 1-14 14"/><path d="M20 12a8 8 0 1 1-8 8"/><path d="M20 17a3 3 0 1 1-3 3"/></g>',
    ),
    current: S(
      '<g fill="none" stroke="#7ef0ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12l7 8-7 8M17 12l7 8-7 8M28 12l7 8-7 8"/></g>',
    ),
    pearl: S(
      '<circle cx="20" cy="20" r="11" fill="#fff6e0" stroke="#e6d6f2" stroke-width="2"/><circle cx="16" cy="16" r="3.5" fill="#fff"/>',
    ),
    urchin: S(
      '<g stroke="#b08aff" stroke-width="2.4">' +
        [...Array(10)]
          .map(
            (_, k) =>
              `<path d="M20 20L${(20 + Math.cos(k * 0.628) * 17).toFixed(1)} ${(20 + Math.sin(k * 0.628) * 17).toFixed(1)}"/>`,
          )
          .join("") +
        '</g><circle cx="20" cy="20" r="9" fill="#2a1a4a"/><circle cx="17" cy="19" r="1.6" fill="#ff6a8a"/><circle cx="23" cy="19" r="1.6" fill="#ff6a8a"/>',
    ),
    anemone: S(
      '<g stroke="#ff9ad8" stroke-width="3" stroke-linecap="round" fill="none">' +
        [-3, -2, -1, 0, 1, 2, 3]
          .map((a) => {
            const an = -Math.PI / 2 + a * 0.35;
            return `<path d="M20 30Q${(20 + Math.cos(an) * 8).toFixed(1)} ${(26 + Math.sin(an) * 4).toFixed(1)} ${(20 + Math.cos(an) * 14).toFixed(1)} ${(26 + Math.sin(an) * 14).toFixed(1)}"/>`;
          })
          .join("") +
        '</g><circle cx="20" cy="30" r="4" fill="#ffe3f4"/>',
    ),
    eel: S(
      '<path d="M4 24q8-12 16 0t14-4" stroke="#3fd07a" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="33" cy="19" r="6" fill="#3fd07a"/><circle cx="35" cy="17" r="2" fill="#fff"/>',
    ),
    jel: S(
      '<path d="M8 20a12 12 0 0 1 24 0z" fill="#c77dff"/><path d="M11 20q-2 8 1 14M17 20q2 9-1 15M23 20q-2 8 1 14M29 20q2 6-1 12" stroke="#e3b8ff" stroke-width="2.2" fill="none" stroke-linecap="round"/><circle cx="16" cy="15" r="2" fill="#fff"/><circle cx="24" cy="15" r="2" fill="#fff"/>',
    ),
    lan: S(
      '<ellipse cx="20" cy="24" rx="13" ry="9" fill="#ffb347"/><path d="M7 24l-5-6v12z" fill="#ffb347"/><path d="M24 15q6-12 12-6" stroke="#ffd59a" stroke-width="2" fill="none"/><circle cx="36" cy="9" r="3.5" fill="#fff7a0"/><circle cx="26" cy="21" r="2.4" fill="#fff"/><path d="M27 29h6" stroke="#7a3a00" stroke-width="1.6"/>',
    ),
    crb: S(
      '<ellipse cx="20" cy="25" rx="12" ry="8" fill="#ff6b5a"/><path d="M8 22L3 12M32 22l5-10" stroke="#ff6b5a" stroke-width="3"/><circle cx="3" cy="11" r="4" fill="#ff6b5a"/><circle cx="37" cy="11" r="4" fill="#ff6b5a"/><circle cx="16" cy="19" r="2.4" fill="#fff"/><circle cx="24" cy="19" r="2.4" fill="#fff"/><path d="M12 32l-3 5M28 32l3 5" stroke="#ff6b5a" stroke-width="2.4"/>',
    ),
    sqd: S(
      '<path d="M20 3l9 13v8H11v-8z" fill="#5ab8ff"/><path d="M13 24q-3 8 0 13M18 24v13M22 24v13M27 24q3 8 0 13" stroke="#5ab8ff" stroke-width="2.6" fill="none" stroke-linecap="round"/><circle cx="16" cy="18" r="2.2" fill="#fff"/><circle cx="24" cy="18" r="2.2" fill="#fff"/>',
    ),
    shk: S(
      '<path d="M3 24q14-12 30-2l5-6v14l-5-4Q18 34 3 24z" fill="#9aa8c0"/><path d="M17 15l4-9 4 10z" fill="#9aa8c0"/><circle cx="10" cy="22" r="2" fill="#fff"/><path d="M6 27l3-2 2 2 2-2 2 2" stroke="#fff" stroke-width="1.4" fill="none"/>',
    ),
    brick: (c) =>
      S(
        `<rect x="4" y="13" width="32" height="14" fill="${c}" opacity=".32"/><rect x="5" y="14" width="30" height="12" fill="none" stroke="${c}" stroke-width="2.4" filter="drop-shadow(0 0 3px ${c})"/><rect x="8" y="16.5" width="7" height="1.6" fill="#fff"/>`,
      ),
    brick2: (c) =>
      IC.brick(c).replace(
        "</svg>",
        '<circle cx="20" cy="21" r="2" fill="#fff"/><circle cx="27" cy="21" r="2" fill="#fff"/></svg>',
      ),
    multi: S(
      '<g fill="#fff" filter="drop-shadow(0 0 4px #ff4fd8)"><rect x="8" y="22" width="7" height="7"/><rect x="17" y="12" width="7" height="7"/><rect x="26" y="22" width="7" height="7"/></g>',
    ),
    move: S(
      '<path d="M4 20h32M10 14l-6 6 6 6M30 14l6 6-6 6" stroke="#7ef0ff" stroke-width="3" fill="none" stroke-linecap="round"/>',
    ),
    bomb: S(
      '<rect x="5" y="13" width="30" height="14" fill="#ff8f7a" opacity=".35"/><rect x="6" y="14" width="28" height="12" fill="none" stroke="#ff8f7a" stroke-width="2.4"/><circle cx="20" cy="20" r="4" fill="#fff"/><circle cx="20" cy="20" r="2" fill="#ff8f7a"/>',
    ),
    cry: S(
      '<path d="M20 5l4 11 11 4-11 4-4 11-4-11-11-4 11-4z" fill="#fff" filter="drop-shadow(0 0 5px #ffe38a)"/>',
    ),
    down: S(
      '<path d="M20 6v26M12 24l8 8 8-8" stroke="#c8adff" stroke-width="3.4" fill="none" stroke-linecap="round"/>',
    ),
    pw: (t, c) =>
      S(
        `<rect x="5" y="12" width="30" height="16" rx="3" fill="${c}" filter="drop-shadow(0 0 4px ${c})"/><text x="20" y="24.5" text-anchor="middle" font-size="12" font-weight="800" fill="#0a0f2a" font-family="ui-monospace,monospace">${t}</text>`,
      ),
  };
  const spr = (f, k, w) => {
    try {
      const c = f(k, w);
      return `<img src="${c.toDataURL()}" alt="">`;
    } catch (e) {
      return "";
    }
  };
  const GS = (k) => (window.ZGSPR ? spr(window.ZGSPR, k) : ""),
    BS = (k, w) => (window.BZSPR ? spr(window.BZSPR, k, w || 30) : "");
  const BN = (t, c) => IC.pw(t, c);
  const A = {
    garde: {
      n: "Garde du Lagon",
      lv: () => Math.max(st.get("zg:lv", 1), st.get("zg:best", 0) + 1),
      S: [
        [
          "Ennemis",
          [
            [() => GS("m"), "Méduse", 1, "L’ennemi de base du banc. Une seule bulle suffit."],
            [
              () => GS("c"),
              "Crabe",
              2,
              "Sa carapace encaisse 2 bulles : elle change de couleur au premier coup.",
            ],
            [
              () => GS("l"),
              "Lanterne",
              3,
              "Sa lumière vise Zeni : elle crache des gouttes d’encre, que tes bulles peuvent détruire.",
            ],
            [
              () => GS("r"),
              "Raie",
              3,
              "Elle traverse sous le banc en lâchant de l’encre, puis s’en va. 2 bulles, 80 points.",
            ],
            [
              () => GS("o"),
              "Oursin",
              4,
              "Il quitte parfois le banc pour plonger droit sur Zeni en tournoyant.",
            ],
            [() => GS("p"), "Poisson-globe", 6, "Il encaisse 3 bulles, puis explose et emporte ses voisins."],
            [
              () => GS("t"),
              "Tortue",
              7,
              "Invulnérable quand sa carapace est fermée (cercle vert) : tire quand elle s’ouvre.",
            ],
            [
              () => GS("s"),
              "Seiche",
              8,
              "Touchée, elle lâche un nuage d’encre qui cache l’écran quelques secondes.",
            ],
            [
              () => GS("g"),
              "Méduse géante",
              9,
              "3 bulles, puis elle se divise en deux petites méduses qui foncent vers toi.",
            ],
            [
              () => GS("e"),
              "Anguille",
              11,
              "Un pointillé jaune annonce son rayon électrique. Abrite-toi derrière un corail.",
            ],
            [() => GS("y"), "Étoile", 12, "Elle tire trois gouttes d’encre en éventail."],
            [
              () => GS("$"),
              "Poisson doré",
              1,
              "Il passe tout en haut de l’écran : touche-le et il lâche toujours un bonus.",
            ],
          ],
        ],
        [
          "Boss",
          [
            [
              () => GS("K"),
              "Calmar géant",
              5,
              "Niveaux 5, 15, 25… Il tire en éventail et appelle des méduses. Le vaincre rend une vie.",
            ],
            [
              () => GS("Q"),
              "Crabe royal",
              10,
              "Niveaux 10, 20, 30… Son rayon descend tout droit et il lâche de petites méduses.",
            ],
          ],
        ],
        [
          "Obstacles",
          [
            [
              IC.coral,
              "Corail",
              1,
              "Trois abris : ils arrêtent l’encre, mais aussi tes bulles, et s’usent à chaque coup.",
            ],
            [IC.rock, "Rocher", 4, "Il dérive de côté et bloque les tirs des deux camps."],
            [IC.mine, "Mine", 6, "Ne la touche pas ! Tire dessus pour souffler les ennemis autour."],
            [IC.whirl, "Tourbillon", 8, "Il dévie tes bulles sur le côté."],
          ],
        ],
        [
          "Bonus",
          [
            [BN("2×", "#7ef0ff"), "Double", 1, "Deux bulles à la fois."],
            [BN("3×", "#7ef0ff"), "Triple", 1, "Trois bulles en éventail."],
            [BN("»", "#7ef0ff"), "Rapide", 1, "Tir deux fois plus rapide."],
            [BN("↑", "#7ef0ff"), "Perforant", 1, "Les bulles traversent plusieurs ennemis."],
            [BN("◍", "#7dffb0"), "Bouclier", 1, "Protège Zeni d’un coup."],
            [BN("❄", "#b5d8ff"), "Gel", 1, "Fige les ennemis quelques secondes."],
            [BN("✹", "#ff9f43"), "Bombe", 1, "Efface l’encre et touche tous les ennemis."],
            [BN("♣", "#ff7ab8"), "Corail", 1, "Répare les trois coraux."],
            [BN("×2", "#ffd32a"), "Score ×2", 1, "Points doublés pendant 10 secondes."],
            [BN("♥", "#ff6b8a"), "Vie", 1, "Une vie de plus (5 au maximum)."],
          ],
        ],
      ],
    },
    bulles: {
      n: "Protéger Zeni",
      lv: () => Math.max(st.get("bz:cur", 1), st.get("bz:lv", 0)),
      S: [
        [
          "Ennemis",
          [
            [
              () => BS("b", 30),
              "Tache d’encre",
              1,
              "Elle se divise en deux moyennes, puis en petites qui se dissolvent.",
            ],
            [() => BS("h", 30), "Poisson-globe", 3, "Il te pourchasse : 3 bulles pour le repousser."],
            [() => BS("m", 30), "Méduse", 5, "Elle ondule de haut en bas et crache des gouttes d’encre."],
            [
              () => BS("e", 30),
              "Anguille",
              8,
              "Elle clignote en rouge, puis charge en ligne droite vers toi.",
            ],
          ],
        ],
        [
          "Boss",
          [
            [
              () => BS("K", 34),
              "Kraken d’encre",
              5,
              "Tous les 5 niveaux : il tire en éventail et crée de nouvelles taches. Le vaincre rend une vie.",
            ],
          ],
        ],
        [
          "Obstacles",
          [
            [IC.rock, "Rocher", 2, "Il bloque Zeni et les bulles ; les taches rebondissent dessus."],
            [IC.urchin, "Oursin", 4, "Fixe et piquant : son contact fait perdre une vie."],
            [IC.current, "Courant", 6, "Il pousse Zeni et les taches sur le côté."],
          ],
        ],
        ["Bonus", [[IC.pearl, "Perle", 1, "Laissée parfois par les petites taches : +50 points."]]],
      ],
    },
    recif: {
      n: "Récif appétissant",
      lv: () => st.get("zr:lv", 0) + 1,
      S: [
        [
          "Prédateurs",
          [
            [IC.eel, "Murène", 1, "Elle te fonce droit dessus, sans détour."],
            [IC.jel, "Méduse", 1, "Elle vise l’endroit où tu vas, quelques cases devant toi."],
            [
              IC.lan,
              "Poisson-lanterne",
              4,
              "Imprévisible : elle te suit une fois sur deux, sinon elle erre.",
            ],
            [IC.crb, "Crabe", 7, "Il te poursuit de loin, puis retourne dans son coin quand il s’approche."],
            [IC.sqd, "Calmar", 10, "Il te prend en tenaille avec la murène."],
            [IC.shk, "Requin", 20, "Le plus rapide : il accélère quand il te chasse."],
          ],
        ],
        [
          "Récif",
          [
            [IC.pearl, "Perle", 1, "Ramasse-les toutes pour terminer le niveau."],
            [IC.anemone, "Anémone", 1, "Touche-la : les prédateurs prennent peur et tu peux les attraper."],
          ],
        ],
      ],
    },
    brick: {
      n: "Casse-briques",
      lv: () => {
        let n = 0;
        for (let i = 0; i < 3000; i++) if (st.get("c:brick:" + i, !1)) n = i + 1;
        return n + 1;
      },
      S: [
        [
          "Briques",
          [
            [IC.brick("#7ef0ff"), "Brique", 1, "Une seule touche suffit."],
            [
              IC.brick2("#c8adff"),
              "Brique solide",
              2,
              "Les points blancs indiquent combien de touches il reste.",
            ],
            [IC.bomb, "Brique bombe", 16, "Elle éclate et casse ses voisines."],
            [IC.brick("#c9d8ea"), "Glace", 8, "Les briques grises ne cassent pas : contourne-les."],
            [IC.cry, "Cristal", 20, "Dans ces niveaux, libère seulement les cristaux pour gagner."],
            [IC.brick("#ffd36a"), "Brique cadeau", 51, "Elle libère toujours un bonus."],
            [IC.brick("#9fe8ff"), "Brique éclair", 51, "Elle casse toute sa rangée."],
            [
              IC.brick2("#9ff0c8"),
              "Brique verte",
              51,
              "Elle reprend ses forces si tu ne l’achèves pas vite.",
            ],
          ],
        ],
        [
          "Niveaux spéciaux",
          [
            [IC.multi, "Trois balles", 4, "Trois balles partent ensemble."],
            [IC.move, "Rangées mobiles", 12, "Les rangées glissent doucement de gauche à droite."],
            [IC.down, "Descente", 24, "Les briques descendent un peu tous les 6 rebonds."],
            [IC.move, "Vent", 51, "La balle dévie doucement en vol."],
            [IC.multi, "Brouillard", 52, "Les briques ne se voient que près de la balle."],
            [IC.move, "Raquette étroite", 53, "La raquette rétrécit : vise bien."],
            [IC.down, "Balle rapide", 54, "La balle va plus vite."],
            [IC.multi, "Pluie de bonus", 55, "Des bonus tombent tout seuls."],
          ],
        ],
        [
          "Bonus",
          [
            [BN("×3", "#93d8f5"), "Trois balles", 3, "Ta balle se divise en trois."],
            [BN("↔", "#b3e8a6"), "Grande raquette", 8, "La raquette s’élargit un moment."],
            [BN("▁", "#ffdc8f"), "Filet de neige", 15, "Un filet protège le sol pour un rebond."],
            [BN("◔", "#c8adff"), "Ralenti", 25, "La balle ralentit un moment."],
            [BN("✸", "#ff9f6a"), "Boule de feu", 37, "La balle traverse les briques un moment."],
            [
              BN("✺", "#ff7a5a"),
              "Boule explosive",
              43,
              "La balle fait exploser les briques voisines un moment.",
            ],
            [BN("×2", "#ffe38a"), "Points doublés", 50, "Tous les points comptent double un moment."],
            [BN("♥", "#ff9fb2"), "Vie", 51, "Rend une vie (ou +50 points)."],
          ],
        ],
      ],
    },
  };
  const css = document.createElement("style");
  css.textContent = `.alw{display:flex;flex-direction:column;gap:14px;max-height:62vh;overflow:auto;padding-right:2px}.alh{margin:0 0 6px;font:800 12px ui-monospace,Menlo,Consolas,monospace;letter-spacing:.12em;text-transform:uppercase;color:#7ef0ff}.alc{display:flex;gap:10px;align-items:center;padding:8px 10px;border-radius:12px;background:rgba(10,20,50,.55);border:1px solid rgba(126,240,255,.18)}.alc+.alc{margin-top:6px}.ali{flex:none;width:46px;height:46px;border-radius:10px;display:grid;place-items:center;background:radial-gradient(circle,rgba(34,211,238,.14),rgba(5,10,36,.8))}.ali svg,.ali img{width:38px;height:38px;object-fit:contain}.alc b{display:block;font-size:14px}.alc p{margin:2px 0 0;font-size:12.5px;line-height:1.35;opacity:.85}.alc.lk .ali>*{filter:brightness(0) opacity(.45)}.alc.lk b{opacity:.6}.alc.lk p{font-style:italic;opacity:.6}.aln{font-size:12px;opacity:.8;margin:-4px 0 4px}`;
  document.head.appendChild(css);
  window.ALMA = A;
  window.almOpen = (id) => {
    const a = A[id];
    if (!a) return;
    const L = a.lv();
    let n = 0,
      t = 0;
    const body = a.S.map(
      ([h, es]) =>
        `<div><h3 class="alh">${h}</h3>${es
          .map(([ic, nm, l, d]) => {
            t++;
            const ok = L >= l;
            ok && n++;
            const i = typeof ic === "function" ? ic() : ic;
            return `<div class="alc${ok ? "" : " lk"}"><div class="ali">${i}</div><div><b>${ok ? nm : "???"}</b><p>${ok ? d : "Se découvre au niveau " + l + "."}</p></div></div>`;
          })
          .join("")}</div>`,
    ).join("");
    const o = $("#vzsh");
    o && o.remove();
    const dv = document.createElement("div");
    dv.id = "vzsh";
    dv.className = "vzsh";
    dv.innerHTML = `<div class="vzsp" role="dialog" aria-label="Almanach"><div class="vzsx"><h2>Almanach · ${a.n}</h2><button data-a="arShX" aria-label="Fermer">✕</button></div><p class="aln">${n} / ${t} découverts</p><div class="alw">${body}</div></div>`;
    dv.addEventListener("click", (e) => {
      e.target === dv && dv.remove();
    });
    document.body.appendChild(dv);
  };
  setTimeout(() => {
    act.arAl = (v) => almOpen(v);
  }, 150);
})();
