const ANA = {
  id: "ana",
  n: "Anagramme",
  ic: "✦",
  a: "#a99cf0",
  b: "#5458AB",
  t: "Le vent brouille les lettres",
  s: "Le vent a mélangé les lettres de la roue. Relie-les pour retrouver tous les mots qui s’entremêlent dans la grille. Les autres mots trouvés rapportent des bulles.",
  w: "Les lettres retrouvent leur place. Au village de Givre, le vent s’apaise.",
  nox: 1,
};
const GSV = {
  galac:
    '<path d="M12 4.5c3 0 5.2 2.6 5.2 5.6 0 2.6-1.7 4.7-4 5.4"/><path d="M12 4.5c-3 0-5.2 2.6-5.2 5.6 0 2.6 1.7 4.7 4 5.4"/><path d="M10.8 15.5c-1 2-1.3 3.4-2.8 4.5M13.2 15.5c1 2 1.3 3.4 2.8 4.5"/><circle cx="10" cy="9" r="1.2" fill="currentColor" stroke="none"/><circle cx="14" cy="9" r="1.2" fill="currentColor" stroke="none"/><path d="M19.5 4.5l.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5z" fill="currentColor" stroke="none"/>',
  medit:
    '<path d="M12 19c-4 0-7-2.5-8-6 2.5-.3 5 .6 6.6 2.4M12 19c4 0 7-2.5 8-6-2.5-.3-5 .6-6.6 2.4M12 19c-2-1.5-3-3.8-3-6.3 0-2.2 1.2-4.4 3-6.2 1.8 1.8 3 4 3 6.2 0 2.5-1 4.8-3 6.3z"/>',
  mots: '<circle cx="12" cy="12" r="9"/><path d="M8.6 15.6 12 7.6l3.4 8M9.9 12.9h4.2"/>',
  croises:
    '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16"/><rect x="9.3" y="9.3" width="5.4" height="5.4" fill="currentColor" stroke="none"/>',
  phrase:
    '<path d="M5.5 4.5h13A2.5 2.5 0 0 1 21 7v7a2.5 2.5 0 0 1-2.5 2.5H12l-4.5 3.5v-3.5h-2A2.5 2.5 0 0 1 3 14V7a2.5 2.5 0 0 1 2.5-2.5z"/><path d="M9.8 9.2a2.2 2.2 0 1 1 3.2 1.9c-.7.4-1 .8-1 1.5"/><circle cx="12" cy="14.4" r=".5" fill="currentColor"/>',
  tournade:
    '<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20.2 3.8v4.6h-4.6"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>',
  memo: '<rect x="3.5" y="6.5" width="10" height="13" rx="2.2" transform="rotate(-9 8.5 13)"/><rect x="10.5" y="4.5" width="10" height="13" rx="2.2" transform="rotate(9 15.5 11)"/><circle cx="15.5" cy="11" r="1.7" fill="currentColor" stroke="none"/>',
  puzzle:
    '<path d="M9 4h3.2v1.2a1.9 1.9 0 1 0 3.8 0V4H19v4.2h-1.2a1.9 1.9 0 1 0 0 3.8H19V20H5v-8h1.2a1.9 1.9 0 1 0 0-3.8H5V4h4z"/>',
  sudoku:
    '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16" stroke-width="1.2"/><path d="M11.3 11.3 12 10.8v3.6" stroke-width="1.5"/>',
  caches:
    '<circle cx="10.5" cy="10.5" r="6.3"/><path d="m15.2 15.2 5 5"/><path d="M7.6 10.5h5.8M10.5 7.6v5.8" stroke-width="1.4" opacity=".7"/>',
  maze: '<rect x="4" y="4" width="16" height="16" rx="2.5"/><path d="M8.5 4v11.5h7V9.2H12"/><circle cx="12" cy="12.6" r="1.1" fill="currentColor" stroke="none"/>',
  match3:
    '<path d="m4.8 17.2 5-7.6 4.5 4.4 4.9-8.2" stroke-dasharray="1 2.4"/><circle cx="4.8" cy="17.2" r="1.9" fill="currentColor" stroke="none"/><circle cx="9.8" cy="9.6" r="1.9" fill="currentColor" stroke="none"/><circle cx="14.3" cy="14" r="1.9" fill="currentColor" stroke="none"/><circle cx="19.2" cy="5.8" r="1.9" fill="currentColor" stroke="none"/>',
  demenage: '<path d="M3.5 8 12 4l8.5 4v8L12 20l-8.5-4z"/><path d="m3.5 8 8.5 4 8.5-4M12 12v8"/>',
  quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.6a2.6 2.6 0 1 1 3.9 2.2c-.9.5-1.4 1-1.4 2"/><circle cx="12" cy="16.6" r=".6" fill="currentColor"/>',
  cherche:
    '<path d="M2.8 12S6.2 5.6 12 5.6 21.2 12 21.2 12 17.8 18.4 12 18.4 2.8 12 2.8 12z"/><circle cx="12" cy="12" r="3"/>',
  flow: '<path d="M6 6.6c6.5 0 1.5 10.8 12 10.8"/><circle cx="6" cy="6.6" r="2.2" fill="currentColor" stroke="none"/><circle cx="18" cy="17.4" r="2.2" fill="currentColor" stroke="none"/>',
  g2048:
    '<rect x="3.5" y="12.5" width="8" height="8" rx="2"/><rect x="12.5" y="3.5" width="8" height="8" rx="2"/><rect x="12.5" y="12.5" width="8" height="8" rx="2" fill="currentColor" fill-opacity=".35"/>',
  tetris:
    '<rect x="9" y="3.8" width="6" height="6" rx="1.3"/><rect x="3" y="9.8" width="6" height="6" rx="1.3"/><rect x="9" y="9.8" width="6" height="6" rx="1.3" fill="currentColor" fill-opacity=".35"/><rect x="15" y="9.8" width="6" height="6" rx="1.3"/>',
  brick:
    '<rect x="3.5" y="4" width="7" height="3.6" rx="1"/><rect x="13.5" y="4" width="7" height="3.6" rx="1"/><rect x="8.5" y="9" width="7" height="3.6" rx="1" fill="currentColor" fill-opacity=".35"/><circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none"/><path d="M7 20h10"/>',
  planetes:
    '<circle cx="12" cy="12" r="5.2"/><ellipse cx="12" cy="12" rx="10" ry="3.3" transform="rotate(-20 12 12)"/>',
  ana: '<path d="M3 7h3.2c5 0 5.6 10 10.6 10H21M3 17h3.2c1.7 0 2.9-.8 3.8-2M13.9 9.2C14.8 7.9 16 7 17.7 7H21"/><path d="m18.5 4.5 2.5 2.5-2.5 2.5M18.5 14.5l2.5 2.5-2.5 2.5"/>',
  wordle:
    '<rect x="2.8" y="8.8" width="5.4" height="6.4" rx="1.4" fill="currentColor" fill-opacity=".4"/><rect x="9.3" y="8.8" width="5.4" height="6.4" rx="1.4"/><rect x="15.8" y="8.8" width="5.4" height="6.4" rx="1.4" fill="currentColor" fill-opacity=".4"/><path d="m10.9 12 1.1 1.2 1.9-2.3" stroke-width="1.5"/>',
  scrabble: '<rect x="4" y="4" width="16" height="16" rx="3.2"/><path d="M8 16V8l4 4.5L16 8v8"/>',
  chess: '<circle cx="12" cy="7.3" r="3"/><path d="M10 11.4h4l1.2 5.1H8.8zM7 20h10M8.2 16.5h7.6"/>',
  hoho: '<rect x="6" y="3.2" width="12" height="17.6" rx="2.8"/><ellipse cx="12" cy="12" rx="3.3" ry="5.8" transform="rotate(28 12 12)"/>',
  solitaire:
    '<path d="M12 3.6c3 3.4 7.4 5.4 7.4 9.2 0 2.1-1.7 3.6-3.6 3.6-1.2 0-2.1-.5-2.8-1.4.2 1.7.8 2.9 1.8 4.4H9.2c1-1.5 1.6-2.7 1.8-4.4-.7.9-1.6 1.4-2.8 1.4-1.9 0-3.6-1.5-3.6-3.6 0-3.8 4.4-5.8 7.4-9.2z" fill="currentColor" fill-opacity=".3"/>',
  colorie:
    '<path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.3 0 2-.8 2-1.8 0-1-.8-1.4-.8-2.2 0-.9.7-1.5 1.6-1.5H17a3.5 3.5 0 0 0 3.5-3.5c0-4.1-3.8-8-8.5-8z"/><circle cx="7.8" cy="11.6" r="1.1" fill="currentColor" stroke="none"/><circle cx="10.2" cy="7.6" r="1.1" fill="currentColor" stroke="none"/><circle cx="14.8" cy="7.6" r="1.1" fill="currentColor" stroke="none"/>',
  airhockey:
    '<circle cx="9" cy="15" r="5.2"/><circle cx="9" cy="15" r="1.8" fill="currentColor" stroke="none"/><ellipse cx="17.2" cy="7.4" rx="3.1" ry="1.8" fill="currentColor" fill-opacity=".4"/><path d="m12.4 11.6 2.5-2.4"/>',
  cuisine:
    '<path d="M4 11q0-6 8-6t8 6z"/><path d="M3.5 14h17"/><path d="M4 17h16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M9 8h.01M13 7.5h.01"/>',
  peche:
    '<path d="M3 13c3-4 9-4 12 0-3 4-9 4-12 0z"/><path d="M15 13l4-3v6z"/><path d="M18 3v4a2 2 0 0 1-4 0"/>',
  blocs:
    '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/>',
};
const gSv = (e) =>
  (window.GIL && GIL[e.id]
    ? '<svg class="gsv gil" viewBox="0 0 64 64" aria-hidden="true">' + GIL[e.id] + "</svg>"
    : 0) ||
  ("ana" === e.id && (e = ALL.find((e) => "mots" === e.id)),
  GSV[e.id]
    ? '<svg class="gsv" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      GSV[e.id] +
      "</svg>"
    : e.ic || "");
const DMSTIM = ["airhockey", "cuisine", "tetris", "brick", "galac"];
const APM = () => "reg";
const dmR = (e, t) => ("calm" === APM() && DMSTIM.includes(e) ? 0 : t);
try {
  st.get("mig:hoho") ||
    (st.set(
      "g:hide",
      st.get("g:hide", []).filter((e) => "hoho" !== e),
    ),
    st.set("mig:hoho", 1));
} catch (e) {}
function apMode(e) {
  const t = new Set(st.get("g:hide", []));
  (DMSTIM.forEach((a) => ("calm" === e ? t.add(a) : t.delete(a))),
    st.set("g:hide", [...t]),
    st.set("app:mode", e));
}
let APS = null;
let APT = !1;
let DLA = !1;
const APD = {
  calm: {
    ic: "🌙",
    n: "Mode calme",
    tg: "Plus casual, à ton rythme",
    svg: '<svg viewBox="0 0 320 110" aria-hidden="true"><defs><linearGradient id="apg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b1f5e"/><stop offset="1" stop-color="#5a4fa8"/></linearGradient></defs><rect width="320" height="110" fill="url(#apg1)"/><circle cx="252" cy="34" r="19" fill="#fff6d0"/><circle cx="260" cy="29" r="17" fill="#2a2a78" opacity=".55"/><g fill="#fff"><circle cx="40" cy="22" r="1.8"/><circle cx="92" cy="40" r="1.3"/><circle cx="150" cy="16" r="2"/><circle cx="196" cy="48" r="1.3"/><circle cx="118" cy="62" r="1.5"/><circle cx="290" cy="70" r="1.4"/></g><path d="M0 92C50 66 100 74 150 86S250 70 320 84V110H0Z" fill="#2c2f7a"/><path d="M0 102C60 88 130 98 190 94S280 88 320 98V110H0Z" fill="#3b3b94"/></svg>',
    d: "Le mode calme est plus casual : pour jouer sans pression et se détendre, le soir comme le jour. Pas de rythme imposé, pas de course au score.",
    pts: [
      ["🧘", "Rythme tranquille", "Des jeux de réflexion et de détente, sans pression."],
      [
        "🔒",
        "Jeux stimulants cachés",
        "HoHo, air hockey, cuisine, Tèconta, casse-briques et Galacfish n’apparaissent pas.",
      ],
      ["🎄", "Noël en douceur", "Histoire de Noël en 20 étapes et 10 chapitres."],
    ],
    g: [
      ["🔤", "Mots"],
      ["🌀", "Labyrinthe"],
      ["🔢", "Sudoku"],
      ["🃏", "Mémoire"],
      ["🧩", "Puzzles"],
    ],
  },
  reg: {
    ic: "✦",
    n: "Mode régulier",
    tg: "Pour les joueurs réguliers",
    svg: '<svg viewBox="0 0 320 110" aria-hidden="true"><defs><linearGradient id="apg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7a59"/><stop offset="1" stop-color="#7a2fb8"/></linearGradient></defs><rect width="320" height="110" fill="url(#apg2)"/><g stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".55"><path d="M20 90L70 40"/><path d="M60 100L130 30"/><path d="M200 100L270 30"/></g><path d="M160 14l9 24 26 1-21 16 8 25-22-15-22 15 8-25-21-16 26-1z" fill="#ffe27a"/><circle cx="262" cy="26" r="6" fill="#fff" opacity=".8"/><circle cx="46" cy="30" r="4" fill="#fff" opacity=".7"/></svg>',
    d: "Des jeux pour tous les moments, des plus calmes aux plus rapides, avec leurs bulles de récompense.",
    pts: [
      ["🎮", "Tout est accessible", "Les jeux calmes comme les plus stimulants."],
      ["🏆", "Classement global", "Compare tes scores avec les autres joueurs."],
      ["🎄", "Noël complet", "Histoire de Noël en 40 étapes et 20 chapitres, avec 100 🫧 de plus au final."],
    ],
    g: [
      ["🎈", "HoHo"],
      ["🏒", "Air hockey"],
      ["🍳", "Cuisine"],
      ["🧱", "Tèconta"],
      ["🏓", "Casse-briques"],
      ["🐟", "Galacfish"],
    ],
  },
};
function apR() {
  const e = document.getElementById("apm");
  if (!e) return;
  if (APT)
    return void (e.innerHTML =
      '<div class="glass sfc apmc"><h2>Conditions d’utilisation</h2><p class="apd2">En utilisant le jeu, tu acceptes ces conditions.</p><ul class="apl apt2"><li><div><span>Calmos s’adresse aux personnes de 14 ans et plus. Si tu as moins de 14 ans, demande l’accord d’un parent ou d’un tuteur avant de créer un compte, d’acheter ou d’utiliser les fonctions sociales.</span></div></li><li><div><span>Le jeu est fourni pour un usage personnel, tel quel, sans garantie de disponibilité continue.</span></div></li><li><div><span>Pas de triche ni d’abus qui fausseraient les classements ou perturberaient les autres joueurs. Nextonset peut suspendre un compte en cas d’abus.</span></div></li><li><div><span>Les bulles 🫧 sont une monnaie virtuelle du jeu : ils n’ont aucune valeur réelle, ne sont ni échangeables contre de l’argent, ni transférables entre comptes.</span></div></li><li><div><span>Nextonset peut modifier le jeu, ses niveaux et ces conditions. L’utilisation continue du jeu vaut acceptation.</span></div></li><li><div><span>Ces conditions sont régies par les lois du Québec et les lois fédérales du Canada qui s’y appliquent. Si tu es consommateur, tu conserves les droits que la loi t’accorde, y compris celui d’agir devant le tribunal de ton lieu de résidence.</span></div></li></ul><p class="note">Les achats, remboursements et la confidentialité sont détaillés dans Réglages › À propos.</p><button class="btn" data-a="apTermsBack">Retour</button></div>');
  const t = APS && APD[APS],
    a = []
      .map(
        (e) =>
          `<button class="apt${APS === e ? " on" : ""}" data-a="apSel" data-v="${e}" aria-pressed="${APS === e}"><i>${APD[e].ic}</i><b>${APD[e].n}</b><span>${APD[e].tg}</span></button>`,
      )
      .join("");
  e.innerHTML = `<div class="glass sfc apmc apw"><small>Bienvenue</small><h2>Bienvenue dans Calmos</h2><p class="apwt">Des jeux doux pour se détendre, le soir comme le jour, à ton rythme.</p><div class="apwh">${APD.calm.svg.replace("<svg ", '<svg style="width:100%!important;height:auto!important;max-height:none!important;display:block" ')}</div><ul class="apl">${[
    [
      "🧩",
      "Des dizaines de jeux",
      "Mots, blocs, cartes, salle d’arcade, jeux de société, casse-tête et plus encore.",
    ],
    ["📖", "Une histoire d’hiver", "Avance de chapitre en chapitre et découvre l’aquarium et ses habitants."],
    [
      "🫧",
      "Des bulles à gagner",
      "Chaque partie rapporte des bulles pour débloquer des thèmes et des skins.",
    ],
    ["👥", "Avec tes amis", "Défie-les, joue chacun ton tour et compare vos scores dans les classements."],
    [
      "🌙",
      "Sans pression",
      "Une ambiance calme, des musiques apaisantes et une respiration entre les niveaux.",
    ],
  ]
    .map((x) => `<li><i>${x[0]}</i><div><b>${x[1]}</b><span>${x[2]}</span></div></li>`)
    .join(
      "",
    )}</ul><div class="cmch"><b>Comment veux-tu jouer ?</b><button class="cmc cmr${(window.CMSEL || "reg") === "reg" ? " on" : ""}" data-a="cmPick" data-v="reg"><i>✨</i><span><b>Mode régulier <em class="cmrec">Recommandé</em></b><small>Toutes les animations et tous les effets, sans interruption avant les jeux.</small></span></button><button class="cmc${(window.CMSEL || "reg") === "calm" ? " on" : ""}" data-a="cmPick" data-v="calm"><i>🌙</i><span><b>Mode calme</b><small>Animations adoucies, le moins de distractions possible. Avant un jeu plus dynamique, on te demande si tu veux continuer.</small></span></button><small class="cmn">Tu pourras changer à tout moment dans les Réglages.</small></div><button class="btn" data-a="apSet" data-v="reg">Commencer</button><p class="note apn">En commençant, tu acceptes les <button class="lnk apk" data-a="apTerms">conditions d’utilisation</button>.</p></div>`;
}
function apChoose() {
  if (document.getElementById("apm")) return;
  ((APS = "reg"), (APT = !1));
  const e = document.createElement("div");
  ((e.className = "sfr"),
    (e.id = "apm"),
    e.setAttribute("role", "dialog"),
    e.setAttribute("aria-modal", "true"),
    document.body.appendChild(e),
    apR());
}
setTimeout(() => {
  try {
    null === st.get("app:mode", null) || !st.get("app:wel2", 0)
      ? ((window.CMSEL = (() => {
          try {
            return prefs().calm ? "calm" : "reg";
          } catch (e) {
            return "reg";
          }
        })()),
        apChoose())
      : "reg" !== st.get("app:mode", "reg") && apMode("reg");
  } catch (e) {}
}, 700);
const ALL = [...G, ANA, ...DL, ...SP];
const lh = (e) => (DL.some((t) => t.id === e) ? dayScreen() : hub(e));
const Q = [
  "Chaque flocon tombe sans se presser, et pourtant la neige couvre tout.",
  "Ce soir, il suffit de respirer lentement. Le reste attendra le matin.",
  "Le silence n’est pas un vide : c’est une couverture.",
  "Tout ce qui est doux prend le temps d’arriver.",
  "Dépose ta journée comme on pose un manteau mouillé près du feu.",
  "Même la forêt la plus dense dort quand la neige tombe.",
  "Tu as fait assez aujourd’hui.",
  "Fermer les yeux, c’est ouvrir la porte aux rêves.",
  "La lune ne se presse jamais, et pourtant elle fait le tour du ciel.",
  "Une pensée à la fois, comme on allume une seule bougie dans le noir.",
  "Les arbres ne s’inquiètent pas de l’hiver : ils savent que le printemps reviendra.",
  "Ce qui n’a pas été fait aujourd’hui attendra sagement demain.",
  "Laisse tes soucis sur le pas de la porte, comme des bottes pleines de neige.",
  "La nuit n’éteint pas le monde, elle le berce.",
  "Respirer lentement, c’est déjà se faire un cadeau.",
  "Même le plus petit feu réchauffe une grande pièce.",
  "Le calme n’est pas l’absence de bruit, c’est un endroit en toi.",
  "Les étoiles brillent mieux quand on cesse de courir.",
  "Chaque soir est une page blanche que le sommeil écrit pour toi.",
  "Tu n’as pas besoin de tout comprendre ce soir. Repose-toi.",
  "La neige efface les traces de la journée et prépare un chemin tout neuf.",
  "Sois doux avec toi-même, comme avec un ami qui rentre du froid.",
  "Le vent peut souffler dehors : ici, la lampe reste allumée.",
  "Ce n’est pas grave d’avancer lentement, tant que tu avances avec douceur.",
  "Une tasse chaude entre les mains, et le monde paraît plus léger.",
  "Les rivières gelées continuent de couler, tout bas, sous la glace.",
  "Demain sera un autre jour, et il saura t’attendre.",
  "Le sommeil est une forêt tranquille où personne ne te presse.",
  "Ferme les volets, éteins les écrans, et laisse la nuit faire le reste.",
  "Il y a de la beauté dans les choses qui prennent leur temps.",
];
const D = {
  mots: [
    { w: "LUNE", c: "Elle éclaire la nuit." },
    { w: "GIVRE", c: "Il blanchit la vitre au petit matin." },
    { w: "FLOCON", c: "Il tombe en silence du ciel." },
    { w: "ETOILE", c: "Elle veille dans la nuit." },
    { w: "SILENCE", c: "Il enveloppe la forêt enneigée." },
    { w: "TRAINEAU", c: "Il glisse sur la neige." },
    { w: "CHEMINEE", c: "Elle crépite quand il fait froid." },
    { w: "BONHOMME", c: "Il a un nez en carotte." },
  ],
};
const L =
  "lits lit lis ils\nnuit unit nui\nange nage âne âge\nlune une nue nul lue\ngivre rive vire vie gré ver\nnuage eau âge une nue âne\nlaine lien élan aile lin île\npluie plie pile lui île peu\nsoir roi soi ris\nmiel lime lie mie île mil\nhiver rive ivre vie ver hier\nsapin pain sain pas pis ans\nglace égal cage âge lac gel\nfleur leur feu fer rue élu\nlampe palme ample lame âme mal\ncalme lame mal âme lac clé\nlapin plan pain pan pin lin\nlivre lire rive ivre vie île\nrepos poser pose rose oser pré\nmonde démon mode onde mon nom don\nneige génie gêne née nie gin\nciel île clé lie\nporte trop port pot top prêt\nluge gel élu lue gué\nsable base sale sel blé bas\nsoupe pose peu sou ose use\nroute tour outre tuer euro rue\nfroid roi foi for\npiano pain pion pan pin ion\ntarte état art rat raté tâter tare\nvoile voie vol loi vie île\nnote ton ont net\npoire proie pire roi pré prie\ndanse dans des âne anse nés\nplage page âge égal pâle\norage gare rage orge ogre gré\ntrain riant air art tir rat\npoule loupe loup pôle loue peu\ncidre dire cire ride cri crie\nplume mule ému plu mue lue peu\nforêt fort fret ôter\nétang agent ange gant nage\nlueur leur rue\nmont mot ton nom mon\nmoule mule mou moue mue loue élu\nlait ail lit\ncâlin clin lin ail lac cil\nsoie soi ose oie\ncroit troc roi toi cri cor tic\nétoile toile élite tôle toi loi lit île\nlion loin ion lin\ncomte tome cote mot met cet\nbrise bise bris ris sire\nplaid laid ail\nsaine sain sein ans anse sien\nentre rente terne net ère\nchant chat tan\ndouce coude code ode duc\nmatin main ami\narène rêne née ère are\nfruit fuir tir\nprune pure pur rue une nue\nmenu mue nue une\nsucre curé écru cure sur rue\ntrône note ton net ont\ncarte trace écart acte race arc car rat\nmarin main mari ami air\nourse rose user sur rue roue ose\ngrain rang gain air\nrime mire émir\nocéan canoë acné âne once\ncrêpe perce père pré\nronce corne once cône\nruche cure écru\ntigre gîte rite tir gré\nolive voile vole vol loi vie\npaire pire aire prie air\nrobe orbe\nlinge ligne gel lie nie gin\nsorte store rose ôter sort\népine peine pie épi nie\ntalon tonal lot ton\naigle agile gale gel lie île\nsirop pois roi pris ris\ngerbe berge gré\nrame mare arme âme mer\nlever lèvre rêve ver levé\nronde rond onde ode\npaume puma âme mue\nortie trio rite tire roi toi\ncadre race arc car\nlotus tous lots sol\npâte tape pat\nmerle mêler mer\nposte pote stop pot\ntuile luit lit île\nchien niche chine\nblanc banc clan lac\nnoire rien roi nier\nfête fée été\nhotte tôt thé hôte\nlutin nuit lui lit nul uni unit\nboule bleu bol blé boue loue élu\nbûche cube bec chu euh\ndinde nid déni nie\nfumée feu fume mue ému fée\népice pièce pic pie épi\ncoupe pouce cou peu écu\nneuf une feu nue nef"
    .split("\n")
    .map((e) => e.trim().split(" "));
const LB =
  "abri acte aie aient aies aire aires airs ais aise ait ana are aune aîné bac baie baise baiser bal ban bar bars bec ben bis bon bonté bot cale cela censé ces cet chat ciné clin clés coeur corde cou cour couru cru crue curé côté der doré doué duc due duo dur dure décor déçu dôme entiers entrés etc euros forte gnu géant hâte inter ira ire lent les liens lier lise liée liées liés lot mai man mat mec met mets mie miel mil min mit mots naît nier nièce non néant néo oeil oie olive oui ours pal paon pie pieu pou prose ras rein reine reins rené reste retiens reçu rie rien rires rit roc rois roue roues rude rues réel sainte sait sec sein seine sent senti sera serai sert ses set sic sien sir sire soeur sous sur sénat série sûre tas tee tel tenir tes thé tic tien tiers tire tirs tirée tirés tri trou très télé tôt user vélo ème ère éclat émet épi étais été êtes être êtres api bel clé coup eut fur gale ils las leu lice lie lieu lié lue mac mâle nés opter opté opus ose pan pli plu pote pro près puce pue péri sue tan tue tué uni viole viré vole volé élu émue";