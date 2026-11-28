(() => {
  /* ===== Règles illustrées pour chaque jeu : RULES[id] = {g:'but du jeu', s:[[image, titre, texte]...], t:'astuce'} ===== */
  const W = (b) =>
    `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="2" y="2" width="60" height="60" rx="16" fill="#1d2a5c"/>${b}</svg>`;
  const F =
    '<path d="M30 58V40l-6-6c-2-2 0-5 3-4l5 3V18a3 3 0 0 1 6 0v12l9 2c3 1 4 3 4 6l-2 12c-1 5-4 8-9 8z" fill="#ffd9c2" stroke="#7a4a3a" stroke-width="2" stroke-linejoin="round"/>';
  const P = {
    tap: W(
      '<circle cx="35" cy="20" r="11" fill="none" stroke="#7ef0ff" stroke-width="3" opacity=".7"/><circle cx="35" cy="20" r="5" fill="#7ef0ff"/>' +
        F,
    ),
    swipe: W(
      '<path d="M10 16h36M38 9l9 7-9 7" stroke="#7ef0ff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
        F,
    ),
    drag: W(
      '<rect x="8" y="8" width="16" height="16" rx="4" fill="#f2c24a"/><path d="M24 16q16 0 16 12" stroke="#7ef0ff" stroke-width="3" stroke-dasharray="3 4" fill="none"/>' +
        F,
    ),
    wheel: W(
      '<circle cx="32" cy="32" r="22" fill="#2a3a7a" stroke="#9fb7ff" stroke-width="2"/><g font-family="system-ui" font-weight="800" font-size="11" fill="#fff" text-anchor="middle"><text x="32" y="18">N</text><text x="47" y="36">E</text><text x="32" y="51">I</text><text x="17" y="36">G</text></g><path d="M32 15L47 33 32 48" stroke="#ffd32a" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>',
    ),
    grid: W(
      '<g fill="#f4efe6" stroke="#9fb7ff" stroke-width="1.5">' +
        [
          [14, 14],
          [26, 14],
          [38, 14],
          [38, 26],
          [38, 38],
          [26, 38],
          [14, 38],
        ]
          .map(([x, y]) => `<rect x="${x}" y="${y}" width="12" height="12" rx="2"/>`)
          .join("") +
        '</g><g font-family="system-ui" font-weight="800" font-size="9" fill="#2a3a7a" text-anchor="middle"><text x="20" y="23">S</text><text x="32" y="23">O</text><text x="44" y="23">L</text></g>',
    ),
    find: W(
      '<g fill="#9fb7ff" font-family="system-ui" font-weight="700" font-size="9">' +
        "KEUAPRMOI"
          .split("")
          .map((c, i) => `<text x="${12 + (i % 3) * 14}" y="${18 + Math.floor(i / 3) * 14}">${c}</text>`)
          .join("") +
        '</g><circle cx="40" cy="38" r="11" fill="rgba(126,240,255,.2)" stroke="#7ef0ff" stroke-width="3.5"/><path d="M48 46l8 8" stroke="#7ef0ff" stroke-width="5" stroke-linecap="round"/>',
    ),
    pair: W(
      '<rect x="10" y="14" width="18" height="26" rx="4" fill="#f4efe6"/><rect x="36" y="14" width="18" height="26" rx="4" fill="#f4efe6"/><path d="M19 22l2.5 5 5 .5-4 3.5 1 5-4.5-2.5-4.5 2.5 1-5-4-3.5 5-.5z" fill="#f2c24a"/><path d="M45 22l2.5 5 5 .5-4 3.5 1 5-4.5-2.5-4.5 2.5 1-5-4-3.5 5-.5z" fill="#f2c24a"/><path d="M22 48q10 8 20 0" stroke="#7dffb0" stroke-width="3.5" fill="none" stroke-linecap="round"/>',
    ),
    rotate: W(
      '<rect x="18" y="18" width="28" height="28" rx="5" fill="#2a3a7a" stroke="#9fb7ff" stroke-width="2"/><path d="M32 18v14h14" stroke="#ffd32a" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M50 18a22 22 0 0 0-18-8M32 10l-3-4M32 10l-4 3" stroke="#7ef0ff" stroke-width="3" fill="none" stroke-linecap="round"/>',
    ),
    path: W(
      '<circle cx="14" cy="48" r="6" fill="#ff8ab8"/><circle cx="50" cy="16" r="6" fill="#ff8ab8"/><path d="M14 48h14V30h22V16" stroke="#ff8ab8" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    ),
    maze: W(
      '<path d="M10 10h44v44H10zM10 22h30M24 22v20M54 34H36M24 42h18" stroke="#9fb7ff" stroke-width="3" fill="none"/><circle cx="16" cy="16" r="4" fill="#ffb35a"/><path d="M16 16h30v6" stroke="#ffd32a" stroke-width="2" stroke-dasharray="2 3" fill="none"/>',
    ),
    line3: W(
      '<g stroke="#fff" stroke-width="1.5"><circle cx="16" cy="32" r="8" fill="#7db9ee"/><circle cx="32" cy="32" r="8" fill="#7db9ee"/><circle cx="48" cy="32" r="8" fill="#7db9ee"/></g><path d="M8 46h48" stroke="#ffd32a" stroke-width="3" stroke-linecap="round"/><path d="M28 14l4-6 4 6M32 8v10" stroke="#7ef0ff" stroke-width="3" fill="none" stroke-linecap="round"/>',
    ),
    box: W(
      '<path d="M10 30l14-6 14 6v18l-14 6-14-6z" fill="#c9a26a" stroke="#7a5a36" stroke-width="2"/><path d="M10 30l14 6 14-6M24 36v18" stroke="#7a5a36" stroke-width="2" fill="none"/><path d="M30 18q10-10 20 0" stroke="#7ef0ff" stroke-width="3" fill="none" stroke-dasharray="3 3"/><rect x="44" y="20" width="12" height="10" rx="2" fill="#ff8ab8"/>',
    ),
    quiz: W(
      '<path d="M10 14h44v26H30l-10 10V40H10z" fill="#f4efe6"/><text x="32" y="35" text-anchor="middle" font-family="system-ui" font-weight="900" font-size="20" fill="#5a6fd9">?</text>',
    ),
    merge: W(
      '<circle cx="16" cy="22" r="8" fill="#f2c24a"/><circle cx="32" cy="22" r="8" fill="#f2c24a"/><path d="M24 34v6" stroke="#7ef0ff" stroke-width="3"/><path d="M19 38l5 5 5-5" stroke="#7ef0ff" stroke-width="3" fill="none"/><circle cx="24" cy="50" r="9" fill="#ff8f5a"/><text x="47" y="44" font-family="system-ui" font-weight="900" font-size="16" fill="#ffd32a">×2</text>',
    ),
    fall: W(
      '<g fill="#7db9ee" stroke="#fff" stroke-width="1"><rect x="26" y="8" width="8" height="8"/><rect x="34" y="8" width="8" height="8"/><rect x="34" y="16" width="8" height="8"/></g><path d="M38 28v6" stroke="#7ef0ff" stroke-width="3"/><g fill="#5fbf84">' +
        [0, 1, 2, 3, 4].map((i) => `<rect x="${12 + i * 8}" y="44" width="8" height="8"/>`).join("") +
        '</g><path d="M8 48h48" stroke="#ffd32a" stroke-width="2" stroke-dasharray="3 3"/>',
    ),
    target: W(
      '<circle cx="32" cy="32" r="22" fill="#ff6b8a"/><circle cx="32" cy="32" r="15" fill="#fff"/><circle cx="32" cy="32" r="8" fill="#ff6b8a"/><path d="M32 32L52 12M46 10l6 2 2 6" stroke="#ffd32a" stroke-width="3.5" fill="none" stroke-linecap="round"/>',
    ),
    star: W(
      '<g stroke="#bfe6ff" stroke-width="3.5" stroke-linecap="round"><path d="M32 12v40M14 22l36 20M14 42l36-20"/></g><g stroke="#bfe6ff" stroke-width="2.4" stroke-linecap="round"><path d="M27 15l5 4 5-4M27 49l5-4 5 4"/></g><circle cx="32" cy="32" r="4" fill="#fff"/>',
    ),
    heart: W(
      '<path d="M32 50S12 38 12 24a10 10 0 0 1 20-3 10 10 0 0 1 20 3c0 14-20 26-20 26z" fill="#ff6b8a"/>',
    ),
    trophy: W(
      '<path d="M20 12h24v12c0 9-5 14-12 14s-12-5-12-14z" fill="#f2c24a"/><path d="M20 16h-8c0 8 4 12 9 12M44 16h8c0 8-4 12-9 12" stroke="#f2c24a" stroke-width="3" fill="none"/><rect x="28" y="38" width="8" height="8" fill="#e2a82a"/><rect x="20" y="46" width="24" height="8" rx="2" fill="#a8724a"/>',
    ),
    clock: W(
      '<circle cx="32" cy="34" r="20" fill="#f4efe6"/><path d="M32 34V22M32 34l9 6" stroke="#2a3a7a" stroke-width="3.5" stroke-linecap="round"/><rect x="27" y="8" width="10" height="6" rx="2" fill="#f4efe6"/>',
    ),
    calm: W(
      '<circle cx="32" cy="28" r="14" fill="#a98fe0" opacity=".5"/><circle cx="32" cy="28" r="8" fill="#c9b8ff"/><path d="M10 48q6-5 11 0t11 0 11 0 11 0" stroke="#7ef0ff" stroke-width="3" fill="none" stroke-linecap="round"/>',
    ),
    cards: W(
      '<rect x="12" y="16" width="20" height="30" rx="4" fill="#f4efe6" transform="rotate(-12 22 31)"/><rect x="22" y="14" width="20" height="30" rx="4" fill="#fff" stroke="#9fb7ff"/><rect x="32" y="16" width="20" height="30" rx="4" fill="#e8605a" transform="rotate(12 42 31)"/><text x="32" y="34" text-anchor="middle" font-family="system-ui" font-weight="900" font-size="14" fill="#2a3a7a">7</text>',
    ),
    knight: W(
      '<path d="M20 52h26v-6H22l4-8c-6-4-6-12 0-18l4-8 4 4c8 2 12 10 10 18l-4 4 6 8" fill="#f4efe6" stroke="#2a3a7a" stroke-width="2" stroke-linejoin="round"/><circle cx="32" cy="22" r="2" fill="#2a3a7a"/>',
    ),
    brush: W(
      '<path d="M14 40c0-14 12-26 26-26 8 0 12 5 12 10 0 6-6 6-8 10s4 8-6 12c-12 4-24 6-24-6z" fill="#f4efe6"/><circle cx="26" cy="28" r="4" fill="#e8605a"/><circle cx="36" cy="22" r="4" fill="#f2c24a"/><circle cx="24" cy="40" r="4" fill="#5f9ad9"/><circle cx="36" cy="40" r="3" fill="#5fbf84"/><text x="48" y="54" font-family="system-ui" font-weight="900" font-size="12" fill="#ffd32a">3</text>',
    ),
    rod: W(
      '<path d="M12 52L46 10" stroke="#c9a26a" stroke-width="3.5" stroke-linecap="round"/><path d="M46 10q8 10 4 30" stroke="#dfe6ff" stroke-width="1.5" fill="none"/><path d="M42 44q8-6 16 0-8 6-16 0z" fill="#f2c24a"/><path d="M42 44l-4-3v6z" fill="#f2c24a"/><path d="M6 56q8-4 16 0t16 0 16 0" stroke="#7ef0ff" stroke-width="2.5" fill="none"/>',
    ),
    cue: W(
      '<circle cx="40" cy="38" r="8" fill="#f2c24a"/><circle cx="24" cy="44" r="7" fill="#fff"/><path d="M6 56L20 47" stroke="#c9a26a" stroke-width="4" stroke-linecap="round"/><path d="M30 41l4-2" stroke="#7ef0ff" stroke-width="2" stroke-dasharray="2 2"/>',
    ),
    puck: W(
      '<ellipse cx="32" cy="40" rx="14" ry="6" fill="#e8605a"/><ellipse cx="32" cy="37" rx="14" ry="6" fill="#ff8a7a"/><circle cx="20" cy="18" r="8" fill="#5f9ad9"/><circle cx="20" cy="18" r="3" fill="#bfe0ff"/><path d="M26 24l4 8" stroke="#7ef0ff" stroke-width="2.5"/>',
    ),
    enemy: W(
      '<path d="M16 40a16 16 0 0 1 32 0z" fill="#ff6ec7"/><path d="M19 40v8M26 40v10M32 40v8M38 40v10M45 40v8" stroke="#ff6ec7" stroke-width="3" stroke-linecap="round"/><circle cx="26" cy="32" r="3" fill="#fff"/><circle cx="38" cy="32" r="3" fill="#fff"/><path d="M48 8l6 10H42z" fill="#ffd32a"/><text x="48" y="17" text-anchor="middle" font-size="8" font-weight="900" fill="#2a3a7a">!</text>',
    ),
    bonus: W(
      '<rect x="16" y="26" width="32" height="24" rx="3" fill="#7ef0ff"/><rect x="13" y="20" width="38" height="8" rx="2" fill="#bff6ff"/><rect x="29" y="20" width="6" height="30" fill="#ff8ab8"/><path d="M32 20c-8 0-12-8-6-8 4 0 6 4 6 8zM32 20c8 0 12-8 6-8-4 0-6 4-6 8z" fill="#ff8ab8"/>',
    ),
    joy: W(
      '<circle cx="32" cy="34" r="20" fill="none" stroke="#7ef0ff" stroke-width="2.5" opacity=".7"/><circle cx="40" cy="28" r="9" fill="#22d3ee"/><path d="M32 34l8-6" stroke="#7ef0ff" stroke-width="2"/>',
    ),
    build: W(
      '<path d="M12 50h40" stroke="#9fb7ff" stroke-width="2"/><path d="M18 50a14 14 0 0 1 28 0z" fill="#5fe3ff"/><rect x="40" y="30" width="12" height="20" fill="#ff8a5c"/><path d="M46 22v8" stroke="#ffd32a" stroke-width="2"/><circle cx="46" cy="21" r="3" fill="#ffd32a"/><path d="M14 46q2-8 0-14" stroke="#4fd08a" stroke-width="3" fill="none"/>',
    ),
    food: W(
      '<path d="M12 30a20 14 0 0 1 40 0z" fill="#e8a24a"/><rect x="10" y="30" width="44" height="5" rx="2" fill="#7fc48a"/><rect x="11" y="35" width="42" height="6" rx="2" fill="#8a4a2a"/><path d="M12 41h40a20 8 0 0 1-40 0z" fill="#e8a24a"/><circle cx="24" cy="24" r="1.5" fill="#fff6e0"/><circle cx="36" cy="22" r="1.5" fill="#fff6e0"/>',
    ),
    planet: W(
      '<circle cx="32" cy="32" r="12" fill="#a98fe0"/><ellipse cx="32" cy="32" rx="22" ry="6" fill="none" stroke="#ffd32a" stroke-width="2.5" transform="rotate(-18 32 32)"/><path d="M10 54l10-6" stroke="#7ef0ff" stroke-width="3" stroke-linecap="round"/><path d="M8 50l4 2-2 4z" fill="#ff8ab8"/>',
    ),
    jar: W(
      '<path d="M16 14h32v8l-4 4v24a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V26l-4-4z" fill="rgba(191,230,255,.25)" stroke="#bfe6ff" stroke-width="2.5"/><circle cx="28" cy="44" r="6" fill="#e8605a"/><circle cx="38" cy="44" r="5" fill="#f2c24a"/><circle cx="33" cy="34" r="4" fill="#7fc48a"/><path d="M20 24h24" stroke="#ff6b8a" stroke-width="2" stroke-dasharray="3 3"/>',
    ),
    tile: W(
      '<g fill="#f4e2b8" stroke="#a8845a" stroke-width="1.5"><rect x="10" y="22" width="14" height="16" rx="2"/><rect x="25" y="22" width="14" height="16" rx="2"/><rect x="40" y="22" width="14" height="16" rx="2"/></g><g font-family="system-ui" font-weight="900" font-size="11" fill="#2a3a7a" text-anchor="middle"><text x="17" y="34">M</text><text x="32" y="34">O</text><text x="47" y="34">T</text></g>',
    ),
    word5: W(
      '<g stroke="#fff" stroke-width="1">' +
        ["#5fbf84", "#f2c24a", "#3a4570", "#5fbf84", "#3a4570"]
          .map((c, i) => `<rect x="${7 + i * 10.5}" y="24" width="9.5" height="14" rx="2" fill="${c}"/>`)
          .join("") +
        '</g><g font-family="system-ui" font-weight="900" font-size="9" fill="#fff" text-anchor="middle">' +
        "NEIGE"
          .split("")
          .map((c, i) => `<text x="${11.8 + i * 10.5}" y="34">${c}</text>`)
          .join("") +
        "</g>",
    ),
    rank: W(
      '<path d="M14 50V34h10v16M27 50V22h10v28M40 50V28h10v22" fill="#7ef0ff"/><path d="M10 50h44" stroke="#9fb7ff" stroke-width="2"/><path d="M32 8l2 4 4 .5-3 3 1 4-4-2-4 2 1-4-3-3 4-.5z" fill="#ffd32a"/>',
    ),
  };
  const R = {
    mots: {
      g: "Retrouver tous les mots cachés de la grille.",
      s: [
        [
          "wheel",
          "Relie les lettres",
          "Glisse ton doigt sur la roue, de lettre en lettre, puis lève-le pour proposer le mot.",
        ],
        ["grid", "Remplis la grille", "Chaque bon mot se place tout seul dans la grille du haut."],
        ["star", "Mots bonus", "Un vrai mot qui n’est pas dans la grille rapporte quand même des bulles."],
      ],
      t: "Bloqué ? L’indice dévoile une lettre, et le bouton de mélange fait tourner les lettres.",
    },
    ana: {
      g: "Retrouver tous les mots qui s’entremêlent dans la grille.",
      s: [
        ["wheel", "Relie les lettres", "Glisse sur la roue pour former un mot, puis lève le doigt."],
        ["grid", "Mots croisés", "Les mots trouvés se placent dans la grille et se croisent entre eux."],
        ["star", "Mots bonus", "Les autres mots trouvés rapportent des bulles."],
      ],
      t: "Commence par les petits mots de 3 lettres : ils révèlent des lettres des plus longs.",
    },
    croises: {
      g: "Remplir toute la grille de mots croisés.",
      s: [
        [
          "tap",
          "Choisis une case",
          "Touche une case : sa définition s’affiche. Touche-la encore pour changer de sens.",
        ],
        ["grid", "Écris le mot", "Tape les lettres au clavier : le curseur avance tout seul."],
        ["star", "Grille complète", "Quand tout est juste, le motif de givre apparaît."],
      ],
      t: "Les lettres déjà placées par les autres mots t’aident à deviner les plus longs.",
    },
    caches: {
      g: "Retrouver tous les mots de la liste dans la grille.",
      s: [
        [
          "find",
          "Cherche le mot",
          "Les mots se lisent dans tous les sens : horizontal, vertical ou en diagonale, à l’endroit ou à l’envers.",
        ],
        [
          "swipe",
          "Trace-le",
          "Glisse le doigt de la première à la dernière lettre, ou touche ces deux lettres.",
        ],
        ["star", "Liste terminée", "Chaque mot trouvé est barré dans la liste."],
      ],
      t: "Cherche d’abord une lettre rare du mot (K, Z, X…).",
    },
    phrase: {
      g: "Compléter chaque phrase mystère.",
      s: [
        ["quiz", "Lis la phrase", "Des mots manquent dans le message du facteur."],
        ["tile", "Place les lettres", "Touche les lettres proposées pour reconstituer chaque mot manquant."],
        ["star", "Phrase complète", "La phrase entière se révèle quand tous les mots sont justes."],
      ],
      t: "Le sens de la phrase est ton meilleur indice.",
    },
    wordle: {
      g: "Deviner le mot du jour en 6 essais.",
      s: [
        ["word5", "Propose un mot", "Écris un mot de 5 lettres et valide-le."],
        [
          "word5",
          "Lis les couleurs",
          "Vert : bonne lettre, bonne place. Jaune : la lettre est dans le mot, mais ailleurs. Gris : elle n’y est pas.",
        ],
        ["clock", "Un mot par jour", "Un nouveau mot arrive chaque jour."],
      ],
      t: "Commence par un mot avec beaucoup de voyelles différentes.",
    },
    quiz: {
      g: "Répondre aux questions de culture générale.",
      s: [
        ["quiz", "Lis la question", "Le bonhomme te pose une question avec quatre réponses."],
        ["tap", "Choisis", "Touche la réponse qui te semble bonne."],
        ["star", "Récompense", "Bonne réponse : une bulle. Sinon, la bonne réponse t’est montrée."],
      ],
      t: "Pas de chrono : prends ton temps.",
    },
    tournade: {
      g: "Reformer le dessin en reliant tous les fils de lumière.",
      s: [
        ["rotate", "Fais tourner", "Touche une pièce pour la faire pivoter d’un quart de tour."],
        ["path", "Relie les fils", "Chaque fil doit rejoindre son voisin, sans bout qui dépasse."],
        ["star", "Dessin révélé", "Quand tout est relié, le dessin s’illumine."],
      ],
      t: "Commence par les coins et les bords : ils ont moins d’orientations possibles.",
    },
    maze: {
      g: "Ramener le petit renard jusqu’à son terrier.",
      s: [
        ["maze", "Trace le chemin", "Glisse le doigt dans les allées pour guider le renard."],
        ["swipe", "Ou utilise les flèches", "Au clavier, les flèches le font avancer."],
        ["target", "Le terrier", "Atteins la sortie pour finir le niveau."],
      ],
      t: "Si tu tombes sur une impasse, reviens au dernier carrefour.",
    },
    memo: {
      g: "Retrouver toutes les paires de lanternes.",
      s: [
        ["tap", "Retourne deux cartes", "Touche une carte, puis une deuxième."],
        [
          "pair",
          "Fais des paires",
          "Si elles sont pareilles, elles restent allumées. Sinon, elles se referment.",
        ],
        ["star", "Toutes rallumées", "Le niveau est fini quand toutes les paires sont trouvées."],
      ],
      t: "Mémorise l’emplacement des cartes déjà vues.",
    },
    sudoku: {
      g: "Remplir la grille avec les chiffres de 1 à 9.",
      s: [
        [
          "grid",
          "La règle",
          "Chaque ligne, chaque colonne et chaque carré de 3 × 3 contient une seule fois chaque chiffre.",
        ],
        ["tap", "Écris un chiffre", "Touche une case vide, puis un chiffre en bas."],
        ["star", "Grille complète", "Une fois tout juste, la grille est résolue."],
      ],
      t: "Cherche les cases où un seul chiffre est possible.",
    },
    match3: {
      g: "Remplir les objectifs du niveau, affichés en haut.",
      s: [
        [
          "line3",
          "Aligne 3 pièces",
          "Fais glisser une pièce vers sa voisine pour aligner 3 pièces pareilles ou plus.",
        ],
        [
          "bonus",
          "Pièces spéciales",
          "4 alignées : une lune. Carré de 4 : une étoile. En L : une étoile filante. En T ou en croix : une comète. 5 alignées : un soleil.",
        ],
        [
          "target",
          "Objectifs",
          "Couleurs à ramasser, sable, algues, huîtres, encre, méduses… chaque niveau a les siens.",
        ],
      ],
      t: "Joue en bas du plateau : les cascades font plus de combos.",
    },
    demenage: {
      g: "Ranger chaque objet à sa place dans la pièce.",
      s: [
        ["box", "Ouvre les cartons", "Touche un carton pour sortir les objets un à un."],
        [
          "drag",
          "Place les objets",
          "Glisse chaque objet là où il va : sur le lit, dans l’armoire, sur l’étagère…",
        ],
        ["star", "Pièce rangée", "Valide : les objets mal placés clignotent pour t’aider."],
      ],
      t: "Les tiroirs et les portes s’ouvrent : touche-les avant d’y glisser un objet.",
    },
    cherche: {
      g: "Retrouver le petit bonhomme et les objets de la liste.",
      s: [
        ["find", "Explore la scène", "Glisse pour te déplacer, pince pour agrandir."],
        ["tap", "Touche ce que tu trouves", "Chaque objet trouvé est coché dans la liste."],
        ["star", "Univers terminé", "Quand tout est trouvé, le bonhomme passe à l’univers suivant."],
      ],
      t: "Zoome sur les coins de la scène : les objets aiment s’y cacher.",
    },
    flow: {
      g: "Relier chaque paire de points et remplir toute la grille.",
      s: [
        ["path", "Trace un fil", "Glisse d’un point vers le point de la même couleur."],
        ["grid", "Sans croiser", "Les fils ne peuvent pas se croiser."],
        ["star", "Grille pleine", "Toutes les cases doivent être remplies pour gagner."],
      ],
      t: "Relie d’abord les points proches des bords.",
    },
    nono: {
      g: "Faire apparaître l’image cachée.",
      s: [
        [
          "grid",
          "Lis les chiffres",
          "Chaque chiffre est un groupe de cases de sa couleur, dans l’ordre. Deux groupes de même couleur sont séparés par au moins une case vide.",
        ],
        [
          "tap",
          "Colorie",
          "Choisis une couleur puis touche ou glisse sur les cases. Le × marque une case vide.",
        ],
        ["star", "Image complète", "Quand toutes les lignes et colonnes sont justes, l’image apparaît."],
      ],
      t: "Commence par les grands chiffres : ils remplissent presque toute la ligne.",
    },
    g2048: {
      g: "Faire naître le flocon objectif du niveau.",
      s: [
        ["swipe", "Fais glisser", "Tous les flocons partent ensemble dans la direction choisie."],
        ["merge", "Assemble", "Deux flocons pareils se rejoignent et doublent."],
        ["target", "Objectif", "Atteins la valeur demandée avant que la grille se remplisse."],
      ],
      t: "Garde ton plus gros flocon dans un coin.",
    },
    tetris: {
      g: "Faire le nombre de lignes demandé.",
      s: [
        ["fall", "Range les blocs", "Déplace et fais tourner les blocs qui tombent."],
        ["grid", "Remplis des lignes", "Une ligne pleine fond en flocons."],
        ["target", "Objectif", "Atteins le nombre de lignes du niveau avant que les blocs touchent le haut."],
      ],
      t: "Laisse un couloir libre sur le côté pour les longues pièces.",
    },
    blocs: {
      g: "Atteindre le score de l’objectif.",
      s: [
        ["drag", "Place les pièces", "Glisse chaque pièce dans la grille de 8 × 8."],
        ["grid", "Lignes et colonnes", "Une ligne ou une colonne pleine disparaît."],
        [
          "target",
          "Trois à la fois",
          "Trois pièces arrivent ensemble : place-les pour qu’elles rentrent toutes.",
        ],
      ],
      t: "Garde de la place pour les grandes pièces de 3 × 3.",
    },
    planetes: {
      g: "Faire naître le fruit (ou la planète) de l’objectif.",
      s: [
        ["jar", "Laisse tomber", "Touche pour lâcher un fruit dans le bocal."],
        ["merge", "Fusionne", "Deux fruits pareils se touchent et deviennent un plus gros."],
        ["target", "Attention à la ligne", "Ne dépasse pas la ligne en haut du bocal."],
      ],
      t: "Garde les plus gros fruits d’un même côté.",
    },
    brick: {
      g: "Casser toutes les briques sans laisser tomber la balle.",
      s: [
        ["swipe", "Vise et lance", "Glisse pour viser, lâche pour lancer la balle."],
        ["drag", "Déplace la raquette", "Glisse pour faire bouger la raquette et renvoyer la balle."],
        ["bonus", "Bonus", "Attrape les bonus qui tombent : trois balles, grande raquette, filet, ralenti."],
      ],
      t: "L’almanach décrit toutes les briques spéciales.",
    },
    recif: {
      g: "Ramasser toutes les perles du labyrinthe.",
      s: [
        ["swipe", "Nage", "Glisse le doigt (ou les flèches) pour choisir la direction de Zeni."],
        ["enemy", "Évite les prédateurs", "Murène, méduse, lanterne, crabe… chacun a sa façon de chasser."],
        ["bonus", "Anémones", "Touche une anémone : les prédateurs ont peur et tu peux les attraper."],
      ],
      t: "Le Mode Rank se débloque au niveau 30 : 3 vies et un classement.",
    },
    bulles: {
      g: "Dissoudre toute l’encre de chaque niveau.",
      s: [
        ["joy", "Joystick", "Pose le doigt n’importe où : un joystick apparaît. Glisse pour diriger Zeni."],
        [
          "target",
          "Tir automatique",
          "Zeni souffle seul des bulles vers la tache la plus proche. Les taches se divisent en plus petites.",
        ],
        [
          "enemy",
          "Dangers",
          "Rochers, oursins, courants, méduses, anguilles, et un Kraken tous les 5 niveaux.",
        ],
      ],
      t: "Le Mode Rank part du niveau 1 avec 3 vies et envoie ton score au classement.",
    },
    garde: {
      g: "Vider chaque banc avant qu’il n’atteigne le fond.",
      s: [
        ["swipe", "Déplace Zeni", "Glisse le doigt à gauche et à droite : Zeni tire tout seul."],
        [
          "enemy",
          "Ennemis variés",
          "Crabes à carapace, tortues, seiches, anguilles… et un boss tous les 5 niveaux.",
        ],
        ["bonus", "Bonus et abris", "Attrape les bonus qui tombent et cache-toi derrière les coraux."],
      ],
      t: "Le poisson doré qui passe en haut lâche toujours un bonus.",
    },
    galac: {
      g: "Aller le plus loin possible entre les planètes.",
      s: [
        ["planet", "Guide le poisson", "Glisse le doigt (ou les flèches) pour diriger ton poisson étoile."],
        [
          "star",
          "Frôle et ramasse",
          "Frôle les planètes sans les toucher pour les combos, et ramasse les poussières.",
        ],
        ["enemy", "Évite les dangers", "L’almanach te présente chaque ennemi."],
      ],
      t: "Après le niveau 100, le mode Rank t’ouvre un voyage sans fin.",
    },
    cuisine: {
      g: "Servir chaque client comme il le demande.",
      s: [
        ["food", "Compose le plat", "Empile les ingrédients dans l’ordre de la commande."],
        ["tap", "Sers", "Touche le client pour lui donner son plat."],
        ["clock", "Sans chrono", "Seuls tes gestes font patienter les clients. En mode arcade, sers vite !"],
      ],
      t: "Regarde la bulle du client avant de commencer.",
    },
    peche: {
      g: "Pêcher, remplir ton almanach et vendre tes doublons.",
      s: [
        ["rod", "Lance", "Touche le lac pour lancer ta ligne, puis attends que le flotteur plonge."],
        ["tap", "Ferre", "Quand « Ça mord ! » s’affiche, touche vite pour ferrer."],
        [
          "drag",
          "Remonte",
          "Maintiens le bouton sans lâcher. Quand le poisson tire, relâche ; quand il se fatigue, maintiens à nouveau. Taper 3 fois de suite bloque la ligne un instant.",
        ],
        [
          "find",
          "Almanach",
          "Ta première prise de chaque espèce entre dans l’almanach pour toujours. Elle ne se vend pas.",
        ],
        [
          "star",
          "Doublons",
          "Les poissons en double vont dans ton panier : vends-les contre des bulles ou offre certains à ton aquarium.",
        ],
      ],
      t: "Certains poissons légendaires ne sortent qu’à certaines heures.",
    },
    scrabble: {
      g: "Marquer plus de points que ton adversaire.",
      s: [
        ["tile", "Pose un mot", "Glisse les lettres de ton chevalet sur le plateau pour former un mot."],
        ["grid", "Croise les mots", "Chaque nouveau mot doit toucher un mot déjà posé."],
        ["star", "Cases bonus", "Les cases colorées doublent ou triplent les lettres ou les mots."],
      ],
      t: "Les lettres rares valent plus : garde-les pour une case bonus.",
    },
    chess: {
      g: "Mettre le roi adverse échec et mat.",
      s: [
        [
          "knight",
          "Déplace une pièce",
          "Touche une pièce : ses coups possibles s’affichent. Touche une case pour jouer.",
        ],
        ["target", "Échec et mat", "Le roi adverse est attaqué et ne peut plus s’échapper : tu as gagné."],
        ["clock", "À ton rythme", "Avec ou sans limite de temps, contre l’ordinateur ou un ami."],
      ],
      t: "Sors tes cavaliers et tes fous tôt, et protège ton roi en roquant.",
    },
    hoho: {
      g: "Te débarrasser de toutes tes cartes en premier.",
      s: [
        [
          "cards",
          "Joue une carte",
          "Pose une carte de la même couleur ou du même chiffre que celle du dessus.",
        ],
        ["bonus", "Cartes spéciales", "Passe, Inversion, +2, Joker et +4 changent le cours de la partie."],
        [
          "tap",
          "HoHo !",
          "Quand il te reste 2 cartes, touche « HoHo ! » avant de jouer, sinon tu en pioches 2.",
        ],
      ],
      t: "Garde tes jokers pour la fin.",
    },
    solitaire: {
      g: "Ranger toutes les cartes sur les quatre piles, de l’as au roi.",
      s: [
        ["cards", "Les colonnes", "Empile les cartes en descendant, en alternant rouge et noir."],
        ["drag", "Déplace", "Glisse une carte ou une suite de cartes vers une autre colonne."],
        ["tap", "La pioche", "Touche la pioche pour retourner de nouvelles cartes."],
      ],
      t: "Libère d’abord les cartes cachées des grandes colonnes.",
    },
    carcache: {
      g: "Avoir le moins de points à la fin de la partie.",
      s: [
        [
          "cards",
          "Tes cartes cachées",
          "Tu as une grille de cartes face cachée : retourne-les petit à petit.",
        ],
        ["pair", "Fais des paires", "Deux cartes pareilles dans une même colonne s’annulent."],
        ["tap", "Échange", "Pioche, puis échange avec une de tes cartes, ou défausse."],
      ],
      t: "Les cartes à faible valeur sont tes amies.",
    },
    colorie: {
      g: "Colorier tout le dessin.",
      s: [
        ["brush", "Choisis une couleur", "Touche une couleur dans la palette en bas."],
        ["tap", "Colorie", "Touche les zones qui portent son numéro."],
        ["find", "Zoome", "Pince pour agrandir, glisse pour te déplacer."],
      ],
      t: "Les zones de la couleur choisie sont mises en évidence.",
    },
    medit: {
      g: "Prendre un moment pour te détendre.",
      s: [
        ["calm", "Choisis une séance", "Respiration, méditation guidée ou sons d’ambiance."],
        ["clock", "Choisis la durée", "De quelques minutes à plus longtemps."],
        ["star", "Laisse-toi guider", "Suis le cercle qui grandit et rétrécit au rythme de ta respiration."],
      ],
      t: "Des écouteurs rendent l’ambiance encore plus douce.",
    },
    billard: {
      g: "Rentrer toutes tes billes, puis la noire.",
      s: [
        ["cue", "Vise", "Glisse autour de la bille blanche pour orienter la queue."],
        ["swipe", "Tire", "Règle la puissance, puis lâche pour frapper."],
        ["target", "La bille 8", "Rentre-la en dernier : trop tôt, tu perds la partie."],
      ],
      t: "Pense à où la bille blanche va s’arrêter après le coup.",
    },
    airhockey: {
      g: "Marquer des buts dans le but adverse.",
      s: [
        ["puck", "Déplace ton maillet", "Glisse ton doigt pour bouger ton maillet."],
        ["swipe", "Frappe le palet", "Touche le palet pour l’envoyer vers le but adverse."],
        ["trophy", "Gagne", "Le premier à atteindre le score gagne la partie."],
      ],
      t: "Les rebonds sur les bords trompent souvent l’adversaire.",
    },
  };
  window.RULES = R;
  const css = document.createElement("style");
  css.textContent = `.rlo{position:fixed;inset:0;z-index:9999;display:flex;align-items:flex-end;justify-content:center;background:rgba(6,8,24,.55);backdrop-filter:blur(3px);animation:rlf .25s}@keyframes rlf{from{opacity:0}}
.rlp{position:relative;width:min(560px,100%);max-height:88dvh;overflow:auto;box-sizing:border-box;padding:18px 16px 22px;border-radius:24px 24px 0 0;background:linear-gradient(180deg,#232b66,#151a42);color:#f4f6ff;box-shadow:0 -10px 40px rgba(0,0,0,.4);animation:rlu .4s cubic-bezier(.2,1.2,.4,1);transform-origin:var(--ox,50%) var(--oy,100%)}@keyframes rlu{from{transform:scale(.2);opacity:0}}
@media(min-width:640px){.rlo{align-items:center}.rlp{border-radius:24px}}
.rlh{display:flex;align-items:center;gap:12px;margin-bottom:12px}.rlh .rll{width:56px;height:56px;flex:none}.rlh .rll svg{width:100%;height:100%}.rlh h2{margin:0;font:700 1.35rem/1.15 Fraunces,Georgia,serif}.rlh small{display:block;opacity:.75;font-size:13px}.rlx{margin-left:auto;align-self:flex-start;width:36px;height:36px;border-radius:50%;border:0;background:rgba(255,255,255,.12);color:#fff;font-size:18px}
.rlg{display:flex;gap:10px;align-items:center;margin:0 0 14px;padding:10px 12px;border-radius:14px;background:rgba(255,211,42,.12);border:1px solid rgba(255,211,42,.35);font-size:15px;line-height:1.4}.rlg b{color:#ffd32a;white-space:nowrap}
.rls{display:flex;gap:12px;align-items:center;padding:10px;border-radius:16px;background:rgba(255,255,255,.06)}.rls+.rls{margin-top:8px}.rls .rli{flex:none;width:68px;height:68px}.rls .rli svg{width:100%;height:100%}.rls em{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:50%;background:#7ef0ff;color:#0f1640;font:800 12px system-ui;font-style:normal;margin-right:6px;vertical-align:1px}.rls b{font-size:16px}.rls p{margin:3px 0 0;font-size:15px;line-height:1.45;color:#dfe6ff}
.rlt{margin-top:14px;padding:10px 12px;border-radius:14px;background:rgba(126,240,255,.1);border:1px dashed rgba(126,240,255,.45);font-size:14.5px;line-height:1.45}.rlt b{color:#7ef0ff}
.rlb{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:999px;border:1px solid rgba(255,255,255,.3);background:rgba(20,24,60,.55);color:#fff;font:700 13px system-ui;cursor:pointer}.rlb svg{width:15px;height:15px}`;
  document.head.appendChild(css);
  const BK =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5V5.5M9 8h7M9 12h5"/></svg>';
  window.rulesOpen = (id, from) => {
    const r = R[id];
    if (!r) return false;
    const g = ALL.find((x) => x.id === id) || { n: id };
    const old = document.querySelector(".rlo");
    old && old.remove();
    const o = document.createElement("div");
    o.className = "rlo";
    o.innerHTML = `<div class="rlp" role="dialog" aria-label="Règles : ${esc(g.n)}"><div class="rlh"><div class="rll">${window.GIL && GIL[id] ? `<svg viewBox="0 0 64 64">${GIL[id]}</svg>` : ""}</div><div><h2>${esc(g.n)}</h2><small>Les règles</small></div><button class="rlx" aria-label="Fermer">✕</button></div>
 <div class="rlg"><b>But du jeu</b><span>${r.g}</span></div>${r.s.map(([k, ti, d], i) => `<div class="rls"><div class="rli">${P[k] || ""}</div><div><b><em>${i + 1}</em>${ti}</b><p>${d}</p></div></div>`).join("")}${r.t ? `<div class="rlt"><b>Astuce : </b>${r.t}</div>` : ""}</div>`;
    document.body.appendChild(o);
    const p = o.firstChild;
    if (from && from.getBoundingClientRect) {
      const a = from.getBoundingClientRect();
      p.style.animation = "none";
      const bl = p.offsetLeft,
        bt = p.offsetTop - p.scrollTop;
      p.style.setProperty("--ox", a.left + a.width / 2 - bl + "px");
      p.style.setProperty("--oy", a.top + a.height / 2 - bt + "px");
      void p.offsetWidth;
      p.style.animation = "";
    }
    const close = () => {
      if (o.dataset.c) return;
      o.dataset.c = 1;
      o.classList.add("out");
      setTimeout(() => o.remove(), 380);
    };
    o.addEventListener("click", (e) => {
      if (e.target === o || e.target.closest(".rlx")) close();
    });
    addEventListener("keydown", function k(e) {
      if (e.key === "Escape") {
        close();
        removeEventListener("keydown", k);
      }
    });
    try {
      sfx(660, 0.06);
    } catch (e) {}
    return true;
  };
  /* quel jeu ? */
  const idOf = (b) => {
    const a = b.dataset.a;
    const m = {
      zrRu: "recif",
      bzRu: "bulles",
      zgRu: "garde",
      gfRu: "galac",
      kzRu: "cuisine",
      hhSh: "hoho",
      soSh: "solitaire",
      ccSh: "carcache",
    };
    if (m[a]) return m[a];
    let c = typeof cur === "string" ? cur : "";
    if (a === "arRu") {
      try {
        c = st.get("ar:sel", "brick");
      } catch (e) {}
      if (c === "garde" && st.get("ar:m:garde", "g") === "b") c = "bulles";
    }
    return c;
  };
  document.addEventListener(
    "click",
    (e) => {
      const b = e.target.closest && e.target.closest("button");
      if (!b) return;
      const a = b.dataset.a || "";
      if (!(
        a === "rulesGo" ||
        /Ru$/.test(a) ||
        ((a === "hhSh" || a === "soSh" || a === "ccSh") && /R[èe]gles/.test(b.textContent))
      ))
        return;
      const id = idOf(b);
      if (!R[id]) return;
      e.stopPropagation();
      e.preventDefault();
      rulesOpen(id, b);
    },
    !0,
  );
  /* bouton « Règles » ajouté aux écrans qui n'en ont pas */
  const inj = () => {
    const a = document.getElementById("app");
    if (!a || typeof cur !== "string" || !R[cur]) return;
    if (!a.querySelector(".story,.wlf,.kzlb,.peg,.qz")) return;
    if (
      [...a.querySelectorAll("button")].some(
        (b) =>
          /^R[èe]gles/.test(b.textContent.trim()) ||
          b.dataset.a === "rulesGo" ||
          /Ru$/.test(b.dataset.a || ""),
      )
    )
      return;
    const bk = a.querySelector(".back");
    if (!bk) return;
    const b = document.createElement("button");
    b.className = "rlb";
    b.dataset.a = "rulesGo";
    b.innerHTML = BK + "Règles";
    bk.insertAdjacentElement("afterend", b);
  };
  let qd = 0;
  const mo = new MutationObserver(() => {
    if (qd) return;
    qd = 1;
    requestAnimationFrame(() => {
      qd = 0;
      inj();
    });
  });
  const st0 = () => {
    const a = document.getElementById("app");
    a ? mo.observe(a, { childList: !0, subtree: !0 }) : setTimeout(st0, 200);
  };
  st0();
  setTimeout(() => {
    act.rulesGo = () => {};
  }, 200);
})();
