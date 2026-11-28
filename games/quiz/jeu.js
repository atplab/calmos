// Quiz (id « quiz ») : questions QZ/QZX, tirage qzPool/qzDeck, génération QGEN, écran pQuiz.
const QZ = [
  [
    "Quelle est la capitale de l’Australie ?",
    ["Canberra", "Sydney", "Melbourne", "Perth"],
    "Canberra a été choisie comme compromis entre Sydney et Melbourne.",
  ],
  [
    "Quel est le plus grand océan du monde ?",
    ["L’océan Pacifique", "L’océan Atlantique", "L’océan Indien", "L’océan Arctique"],
    "Il couvre environ un tiers de la surface de la Terre.",
  ],
  [
    "Qui a peint la Joconde ?",
    ["Léonard de Vinci", "Michel-Ange", "Raphaël", "Botticelli"],
    "Elle est exposée au musée du Louvre, à Paris.",
  ],
  [
    "Quelle planète est surnommée la planète rouge ?",
    ["Mars", "Vénus", "Jupiter", "Mercure"],
    "Sa couleur vient de l’oxyde de fer présent à sa surface.",
  ],
  ["Combien de côtés a un hexagone ?", ["6", "5", "7", "8"], ""],
  [
    "Quel est le plus long fleuve de France ?",
    ["La Loire", "La Seine", "Le Rhône", "La Garonne"],
    "La Loire mesure environ 1 000 km.",
  ],
  [
    "Dans quel pays se trouve le Machu Picchu ?",
    ["Le Pérou", "Le Mexique", "La Bolivie", "Le Chili"],
    "Cette cité inca est perchée dans les Andes.",
  ],
  [
    "Quel gaz les plantes absorbent-elles pour la photosynthèse ?",
    ["Le dioxyde de carbone", "L’oxygène", "L’azote", "L’hélium"],
    "Elles captent le CO₂ et rejettent de l’oxygène.",
  ],
  [
    "Qui a écrit « Le Petit Prince » ?",
    ["Antoine de Saint-Exupéry", "Jules Verne", "Victor Hugo", "Albert Camus"],
    "",
  ],
  [
    "Quel est l’animal terrestre le plus rapide ?",
    ["Le guépard", "Le lion", "L’antilope", "Le cheval"],
    "Il peut dépasser 100 km/h sur de courtes distances.",
  ],
  [
    "En quelle année l’être humain a-t-il marché sur la Lune pour la première fois ?",
    ["1969", "1965", "1972", "1959"],
    "Neil Armstrong a posé le pied sur la Lune en juillet 1969.",
  ],
  [
    "Quelle langue compte le plus de locuteurs natifs dans le monde ?",
    ["Le mandarin", "L’anglais", "L’espagnol", "Le hindi"],
    "",
  ],
  ["Combien de joueurs une équipe de soccer aligne-t-elle sur le terrain ?", ["11", "10", "9", "12"], ""],
  ["Quel est le symbole chimique de l’or ?", ["Au", "Or", "Ag", "Fe"], "Au vient du mot latin « aurum »."],
  ["Quelle ville est surnommée la Ville lumière ?", ["Paris", "Lyon", "Rome", "Vienne"], ""],
  [
    "Combien de touches compte un piano standard ?",
    ["88", "76", "92", "100"],
    "52 touches blanches et 36 touches noires.",
  ],
  [
    "Quel est le plus grand mammifère du monde ?",
    ["La baleine bleue", "L’éléphant d’Afrique", "La girafe", "Le requin-baleine"],
    "Elle peut mesurer près de 30 mètres.",
  ],
  ["Quel pays a la forme d’une botte ?", ["L’Italie", "L’Espagne", "La Grèce", "Le Portugal"], ""],
  [
    "Qui a atteint l’Amérique en 1492 pour le compte de l’Espagne ?",
    ["Christophe Colomb", "Magellan", "Vasco de Gama", "Jacques Cartier"],
    "",
  ],
  ["Combien de cordes a une guitare classique ?", ["6", "4", "5", "7"], ""],
  [
    "À quelle température l’eau bout-elle au niveau de la mer ?",
    ["100 °C", "90 °C", "110 °C", "120 °C"],
    "C’est à la pression atmosphérique normale.",
  ],
  [
    "Quel peintre a réalisé « La Nuit étoilée » ?",
    ["Vincent van Gogh", "Claude Monet", "Paul Cézanne", "Pablo Picasso"],
    "Il l’a peinte en 1889.",
  ],
  [
    "Quel est le plus petit pays du monde ?",
    ["Le Vatican", "Monaco", "Saint-Marin", "Le Liechtenstein"],
    "Il couvre à peine plus de 0,4 km².",
  ],
  [
    "Quelle est la capitale du Canada ?",
    ["Ottawa", "Toronto", "Montréal", "Québec"],
    "Ottawa se trouve en Ontario, juste en face du Québec.",
  ],
  ["Combien d’os compte le squelette d’un adulte ?", ["206", "186", "226", "256"], ""],
  [
    "Qui a écrit « Les Misérables » ?",
    ["Victor Hugo", "Émile Zola", "Alexandre Dumas", "Gustave Flaubert"],
    "Le roman a été publié en 1862.",
  ],
  [
    "Quelle planète est connue pour ses anneaux spectaculaires ?",
    ["Saturne", "Mars", "Mercure", "Vénus"],
    "",
  ],
  [
    "Quel est le plus vaste désert chaud du monde ?",
    ["Le Sahara", "Le Gobi", "Le Kalahari", "L’Atacama"],
    "Il s’étend sur environ 9 millions de km².",
  ],
  [
    "En quelle année a débuté la Révolution française ?",
    ["1789", "1799", "1769", "1815"],
    "La prise de la Bastille a eu lieu le 14 juillet 1789.",
  ],
  [
    "Quel est le plus grand organe du corps humain ?",
    ["La peau", "Le foie", "Le cerveau", "Les poumons"],
    "",
  ],
  ["Quelle est la monnaie du Japon ?", ["Le yen", "Le won", "Le yuan", "Le baht"], ""],
  [
    "Quelle est la plus haute montagne du monde ?",
    ["L’Everest", "Le K2", "Le mont Blanc", "Le Kilimandjaro"],
    "Elle culmine à environ 8 849 mètres.",
  ],
  [
    "Quel animal pond des œufs tout en allaitant ses petits ?",
    ["L’ornithorynque", "Le kangourou", "La chauve-souris", "Le pingouin"],
    "",
  ],
  [
    "Combien de minutes compte une journée ?",
    ["1 440", "1 240", "1 640", "1 340"],
    "24 heures × 60 minutes.",
  ],
  ["Quel fleuve traverse Le Caire ?", ["Le Nil", "Le Tigre", "Le Congo", "Le Niger"], ""],
  [
    "Quel est l’élément chimique le plus abondant de l’univers ?",
    ["L’hydrogène", "L’hélium", "L’oxygène", "Le carbone"],
    "",
  ],
  [
    "Quel peintre est célèbre pour ses séries de nymphéas ?",
    ["Claude Monet", "Édouard Manet", "Auguste Renoir", "Edgar Degas"],
    "Il les a peints dans son jardin de Giverny.",
  ],
  [
    "Quelle feuille figure sur le drapeau du Canada ?",
    ["L’érable", "Le chêne", "Le bouleau", "Le peuplier"],
    "C’est une feuille d’érable à onze pointes.",
  ],
  [
    "Quel est le plus grand récif corallien du monde ?",
    ["La Grande Barrière de corail", "Le récif de Belize", "Le récif de la mer Rouge", "Le récif de Floride"],
    "Il se trouve au large de l’Australie et mesure plus de 2 000 km.",
  ],
];
const QZX = [
  [
    "Quels animaux tirent le traîneau du père Noël ?",
    ["Des rennes", "Des chevaux", "Des loups", "Des bœufs"],
    "",
  ],
  [
    "Dans quel pays est née la tradition du sapin de Noël décoré ?",
    ["L’Allemagne", "La France", "L’Italie", "L’Espagne"],
    "",
  ],
  [
    "Combien de branches principales ont en général les cristaux de neige ?",
    ["6", "4", "8", "5"],
    "Les cristaux de glace s’organisent en hexagone.",
  ],
  ["Où vivent les manchots empereurs ?", ["En Antarctique", "Au Groenland", "En Alaska", "En Sibérie"], ""],
  [
    "Quel dessert de Noël a la forme d’un tronc d’arbre ?",
    ["La bûche", "Le Paris-Brest", "Le saint-honoré", "Le mille-feuille"],
    "",
  ],
  [
    "Quelle plante aux feuilles piquantes et aux baies rouges décore Noël ?",
    ["Le houx", "Le lierre", "Le laurier", "L’if"],
    "",
  ],
  [
    "Quel pays offre chaque année un grand sapin à Londres, à Trafalgar Square ?",
    ["La Norvège", "La Suède", "La Finlande", "Le Danemark"],
    "C’est un remerciement pour l’aide reçue pendant la guerre.",
  ],
  [
    "Quelle saison commence vers le 21 décembre dans l’hémisphère nord ?",
    ["L’hiver", "L’automne", "Le printemps", "L’été"],
    "C’est le solstice d’hiver, la nuit la plus longue de l’année.",
  ],
  [
    "Quel phénomène lumineux colore le ciel près des pôles ?",
    ["L’aurore boréale", "L’arc-en-ciel", "La comète", "L’éclipse"],
    "Elle naît de particules du Soleil qui rencontrent l’atmosphère.",
  ],
  [
    "Quelle grande île est couverte de glace à environ 80 % ?",
    ["Le Groenland", "L’Islande", "Madagascar", "Bornéo"],
    "",
  ],
];
const qzFr = (e) =>
  String(e)
    .replace(/ ([?!:;»])/g, " $1")
    .replace(/« /g, "« ");
const qzPool = () => QZ.length + (xmasOn() ? QZX.length : 0) + QGEN().length;
const qzAt = (e) => {
  const x = xmasOn() ? QZX.length : 0;
  return e < QZ.length ? QZ[e] : e < QZ.length + x ? QZX[e - QZ.length] : QGEN()[e - QZ.length - x];
};
let QG0 = null;
function QGEN() {
  if (QG0) return QG0;
  const R = rng(424243),
    pk = (L, x, n) =>
      lvShuf(
        L.filter((e) => e !== x),
        R,
      ).slice(0, n),
    Q = [];
  const CAP = [
      ["la France", "Paris"],
      ["la Belgique", "Bruxelles"],
      ["la Suisse", "Berne"],
      ["le Canada", "Ottawa"],
      ["l’Italie", "Rome"],
      ["l’Espagne", "Madrid"],
      ["le Portugal", "Lisbonne"],
      ["l’Allemagne", "Berlin"],
      ["l’Autriche", "Vienne"],
      ["les Pays-Bas", "Amsterdam"],
      ["le Danemark", "Copenhague"],
      ["la Norvège", "Oslo"],
      ["la Suède", "Stockholm"],
      ["la Finlande", "Helsinki"],
      ["l’Islande", "Reykjavik"],
      ["l’Irlande", "Dublin"],
      ["le Royaume-Uni", "Londres"],
      ["la Pologne", "Varsovie"],
      ["la Tchéquie", "Prague"],
      ["la Hongrie", "Budapest"],
      ["la Grèce", "Athènes"],
      ["la Turquie", "Ankara"],
      ["la Russie", "Moscou"],
      ["l’Égypte", "Le Caire"],
      ["le Maroc", "Rabat"],
      ["l’Algérie", "Alger"],
      ["la Tunisie", "Tunis"],
      ["le Sénégal", "Dakar"],
      ["le Kenya", "Nairobi"],
      ["le Nigeria", "Abuja"],
      ["le Japon", "Tokyo"],
      ["la Chine", "Pékin"],
      ["la Corée du Sud", "Séoul"],
      ["l’Inde", "New Delhi"],
      ["la Thaïlande", "Bangkok"],
      ["le Viêt Nam", "Hanoï"],
      ["les Philippines", "Manille"],
      ["la Nouvelle-Zélande", "Wellington"],
      ["les États-Unis", "Washington"],
      ["le Mexique", "Mexico"],
      ["le Brésil", "Brasilia"],
      ["l’Argentine", "Buenos Aires"],
      ["le Chili", "Santiago"],
      ["le Pérou", "Lima"],
      ["la Colombie", "Bogota"],
      ["Cuba", "La Havane"],
      ["l’Iran", "Téhéran"],
      ["l’Arabie saoudite", "Riyad"],
      ["le Népal", "Katmandou"],
      ["la Mongolie", "Oulan-Bator"],
      ["la Croatie", "Zagreb"],
      ["la Roumanie", "Bucarest"],
      ["la Bulgarie", "Sofia"],
      ["la Serbie", "Belgrade"],
      ["la Slovaquie", "Bratislava"],
      ["la Slovénie", "Ljubljana"],
      ["l’Estonie", "Tallinn"],
      ["la Lettonie", "Riga"],
      ["la Lituanie", "Vilnius"],
      ["Madagascar", "Antananarivo"],
      ["l’Éthiopie", "Addis-Abeba"],
      ["le Ghana", "Accra"],
      ["le Cameroun", "Yaoundé"],
      ["le Mali", "Bamako"],
      ["Haïti", "Port-au-Prince"],
      ["la Jamaïque", "Kingston"],
      ["le Venezuela", "Caracas"],
      ["l’Équateur", "Quito"],
      ["l’Uruguay", "Montevideo"],
      ["le Paraguay", "Asuncion"],
    ],
    cap = (e) => e[0].replace(/^(la |le |les |l’)/, ""),
    C = CAP.map((e) => e[1]),
    P = CAP.map(cap);
  CAP.forEach((e) => {
    Q.push(["Quelle est la capitale de " + e[0] + " ?", [e[1], ...pk(C, e[1], 3)], ""]);
    Q.push(["De quel pays " + e[1] + " est-elle la capitale ?", [cap(e), ...pk(P, cap(e), 3)], ""]);
  });
  const BB = [
      ["de la vache", "Le veau"],
      ["de la jument", "Le poulain"],
      ["de la brebis", "L’agneau"],
      ["de la chèvre", "Le chevreau"],
      ["de la truie", "Le porcelet"],
      ["de la chienne", "Le chiot"],
      ["de la chatte", "Le chaton"],
      ["de la lapine", "Le lapereau"],
      ["de la cane", "Le caneton"],
      ["de la poule", "Le poussin"],
      ["de la biche", "Le faon"],
      ["de la lionne", "Le lionceau"],
      ["de l’ourse", "L’ourson"],
      ["de la louve", "Le louveteau"],
      ["du renard", "Le renardeau"],
      ["de l’ânesse", "L’ânon"],
      ["de l’oie", "L’oison"],
      ["de l’éléphant", "L’éléphanteau"],
      ["de la baleine", "Le baleineau"],
      ["de la grenouille", "Le têtard"],
      ["du cygne", "Le cygneau"],
      ["de l’aigle", "L’aiglon"],
      ["de la laie (sanglier)", "Le marcassin"],
      ["du pigeon", "Le pigeonneau"],
      ["de la souris", "Le souriceau"],
    ],
    B = BB.map((e) => e[1]);
  BB.forEach((e) => Q.push(["Comment appelle-t-on le petit " + e[0] + " ?", [e[1], ...pk(B, e[1], 3)], ""]));
  const CR = [
      ["Le cerf", "brame"],
      ["Le loup", "hurle"],
      ["Le lion", "rugit"],
      ["Le cheval", "hennit"],
      ["La vache", "meugle"],
      ["Le mouton", "bêle"],
      ["Le chien", "aboie"],
      ["Le chat", "miaule"],
      ["L’âne", "brait"],
      ["Le cochon", "grogne"],
      ["La poule", "caquette"],
      ["Le canard", "cancane"],
      ["La grenouille", "coasse"],
      ["Le corbeau", "croasse"],
      ["Le hibou", "hulule"],
      ["L’éléphant", "barrit"],
      ["L’abeille", "bourdonne"],
      ["La colombe", "roucoule"],
      ["Le dindon", "glougloute"],
      ["L’oie", "cacarde"],
    ],
    V = CR.map((e) => e[1]);
  CR.forEach((e) => {
    const a = e[0].toLowerCase();
    Q.push([
      "Quel verbe décrit le cri " +
        (/^l’/.test(a) ? "de " + a : /^la /.test(a) ? "de " + a : "du " + a.slice(3)) +
        " ?",
      ["Il " + e[1], ...pk(V, e[1], 3).map((x) => "Il " + x)],
      e[0] + " " + e[1] + ".",
    ]);
  });
  for (let a = 3; a <= 9; a++)
    for (let b = a; b <= 9; b++) {
      const r = a * b,
        d = lvShuf(
          [r + a, r - a, r + b, r - b, r + 1, r - 1, r + 10].filter(
            (x, i, A) => x > 0 && x !== r && A.indexOf(x) === i,
          ),
          R,
        ).slice(0, 3);
      Q.push(["Combien font " + a + " × " + b + " ?", ["" + r, ...d.map(String)], ""]);
    }
  return (QG0 = Q);
}
function qzDeck() {
  const e = qzPool();
  let t = st.get("qz:d", null);
  if (!t || !Array.isArray(t.o) || t.n !== e || !Number.isInteger(t.i) || t.i < 0 || t.i >= t.o.length) {
    const a =
      t && Array.isArray(t.o) && t.o.length ? t.o[Math.min(t.o.length - 1, Math.max(0, (t.i || 0) - 1))] : -1;
    ((t = { n: e, i: 0, o: sh([...Array(e).keys()]) }),
      e > 1 && t.o[0] === a && t.o.push(t.o.shift()),
      st.set("qz:d", t));
  }
  return t;
}
function pQuiz(e) {
  const t = qzDeck(),
    a = e && Number.isInteger(e.i) && e.i >= 0 && e.i < qzPool() ? e.i : t.o[t.i],
    s = qzAt(a),
    n =
      e && Array.isArray(e.o) && 4 === e.o.length && [0, 1, 2, 3].every((t) => e.o.includes(t))
        ? e.o
        : sh([0, 1, 2, 3]),
    o = n.indexOf(0);
  let i = !1,
    r = !1,
    l = -1,
    c = "",
    d = 0;
  snap = () => ({ o: n, i: a });
  const f = () => {
    const e = i ? (r ? "ok" : "no") : "ask";
    if (
      (frame(
        `<div class="qz"><div class="qz-h"><div class="qz-m ${e}">${qzGuy(e)}</div><div class="qz-bub"><small>${i ? c : a >= QZ.length && a < QZ.length + (xmasOn() ? QZX.length : 0) ? "Question de fêtes" : "Question"}</small><p class="qz-q">${qzFr(s[0])}</p></div></div><div class="qz-ch" role="group" aria-label="Réponses">${n.map((e, t) => `<button class="qz-b${i ? (t === o ? " ok" : t === l ? " no" : " dim") : ""}" data-a="qa" data-v="${t}"${i ? " disabled" : ""}><i>${"ABCD"[t]}</i><span>${qzFr(s[1][e])}</span></button>`).join("")}</div><p class="qz-fb" id="qzfb" role="status" aria-live="polite">${i ? (r ? "Bonne réponse ! +1 🫧" : "La bonne réponse : <b>" + qzFr(s[1][0]) + "</b>") : ""}${i && s[2] ? `<span class="qz-e">${qzFr(s[2])}</span>` : ""}</p>${i ? '<button class="btn qz-next" data-a="qn">Question suivante</button>' : ""}</div>`,
      ),
      i)
    ) {
      const e = $(".qz-next");
      e && e.focus({ preventScroll: !0 });
    }
  };
  ((act.qa = (e) => {
    if (i) return;
    const t = +e;
    if (!(t >= 0 && t < 4)) return;
    ((i = !0), (l = t), (r = t === o), (d = 0), r && ((fl += 1), st.set("fl", fl), styGain(1), (d = 1)));
    const a = qzDeck();
    ((a.i = Math.min(a.o.length, a.i + 1)),
      st.set("qz:d", a),
      st.set("p:quiz:0", null),
      st.set("last", { g: "quiz", daily: !1, lv: 0, date: today, done: 0 }),
      (snap = null));
    const s = r
      ? ["Bravo !", "Exact !", "Bien joué !", "Parfait !"]
      : ["Oh non…", "Dommage…", "Aïe…", "Presque…"];
    if (((c = s[Math.floor(Math.random() * s.length)]), f(), r)) {
      ([523, 659, 784].forEach((e, t) => setTimeout(() => sfx(e, 0.5), 130 * t)), vib([20, 40, 20]));
      const e = $(".qz-m");
      e && confetti(e);
    } else (sfx(262, 0.35), setTimeout(() => sfx(196, 0.5), 180), vib(60));
  }),
    (act.qn = () => {
      i && start("quiz", !1, 0);
    }),
    f());
}
