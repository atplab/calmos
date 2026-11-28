// Tournade (id « tournade ») : niveaux TL, rotation tnRot, rendu tnCan/tnSvg, écran pTourne.
const TL = [
  {
    n: "Soleil",
    a: "un soleil d’hiver",
    g: ["0004000", "0005000", "006bc00", "2ad07a8", "003e900", "0005000", "0001000"],
  },
  {
    n: "Flocon",
    a: "un flocon",
    g: ["0004000", "002f800", "0405040", "2fafaf8", "0105010", "002f800", "0001000"],
  },
  { n: "Cœur", a: "un cœur", g: ["6ac06ac", "503a905", "3c00069", "03c0690", "003a900"] },
  {
    n: "Sapin",
    a: "un sapin",
    g: ["0004000", "006bc00", "06903c0", "690003c", "5000005", "3ac06a9", "0050500", "003a900"],
  },
  {
    n: "Bonhomme",
    a: "un bonhomme de neige",
    g: ["006ac00", "0050780", "003a900", "0000000", "06aaac0", "0500050", "2d00078", "0500050", "03aaa90"],
  },
  {
    n: "Lune",
    a: "une lune et son étoile",
    g: [
      "006aac00",
      "06900500",
      "69006900",
      "5006906c",
      "50050039",
      "5003c000",
      "3c003c00",
      "03c00500",
      "003aa900",
    ],
  },
  {
    n: "Maison",
    a: "une maison",
    g: [
      "0006c000",
      "00693c00",
      "069003c0",
      "6900003c",
      "50000005",
      "3c000069",
      "0506c050",
      "05055050",
      "03abba90",
    ],
  },
  {
    n: "Cadeau",
    a: "un cadeau",
    g: ["06aeac0", "03afa90", "0005000", "6aafaac", "5005005", "7aafaad", "5005005", "3aabaa9"],
  },
  {
    n: "Fusée",
    a: "une fusée",
    g: ["0004000", "006bc00", "0050500", "007ad00", "0050500", "0050500", "06bebc0", "0105010", "0001000"],
  },
  {
    n: "Planète",
    a: "une planète et son anneau",
    g: ["0006ac000", "000505000", "2aad07aa8", "000505000", "0003a9000"],
  },
  {
    n: "Satellite",
    a: "un satellite",
    g: ["000040000", "6ec0506ec", "7ffafaffd", "3b90503b9", "000050000", "000010000"],
  },
  {
    n: "Casque",
    a: "un casque d’astronaute",
    g: ["06aaac0", "690003c", "506ac05", "5050505", "503a905", "3c00069", "03eae90", "0010100"],
  },
  {
    n: "Parasol",
    a: "un parasol",
    g: ["006aaac00", "06d0007c0", "2bbaeabb8", "000050000", "000050000", "000050000", "2aaabaaa8"],
  },
  {
    n: "Coquillage",
    a: "un coquillage",
    g: ["06aeac0", "690503c", "5005005", "3c05069", "03afa90", "0005000", "002b800"],
  },
  {
    n: "Château de sable",
    a: "un château de sable",
    g: ["404000404", "7ad0007ad", "503aaa905", "500000005", "5006ac005", "500505005", "3aababaa9"],
  },
  {
    n: "Palmier",
    a: "un palmier",
    g: ["06ac06ac0", "6903e903c", "100050001", "000050000", "00003c000", "000005000", "002aabaa8"],
  },
  {
    n: "Arbre",
    a: "un arbre de la forêt",
    g: ["006ac00", "06903c0", "690003c", "5000005", "3c00069", "03aea90", "0005000", "02aba80"],
  },
  {
    n: "Champignon",
    a: "un champignon",
    g: ["006aaac00", "0690003c0", "6d000007c", "3baeaeab9", "000505000", "000505000", "0003a9000"],
  },
  {
    n: "Hibou",
    a: "un hibou",
    g: ["4000004", "7ac06ad", "5050505", "7ababad", "5000005", "5000005", "3eaaae9", "0100010"],
  },
  {
    n: "Gland",
    a: "un gland",
    g: ["0004000", "06afac0", "6d0507c", "3fabaf9", "0500050", "0500050", "03c0690", "003e900", "0001000"],
  },
  { n: "Poisson", a: "un poisson", g: ["006aac000", "069003c04", "2d00007ad", "03c006901", "003aa9000"] },
  {
    n: "Méduse",
    a: "une méduse",
    g: ["006ac00", "06903c0", "6d0007c", "7beaebd", "5050505", "5050505", "1010101"],
  },
  {
    n: "Ancre",
    a: "une ancre",
    g: ["006ac00", "0050500", "003e900", "0005000", "02afa80", "0005000", "4005004", "3c05069", "03aba90"],
  },
  {
    n: "Phare",
    a: "un phare",
    g: ["0004000", "006bc00", "0050500", "007ad00", "0050500", "007ad00", "06d07c0", "03bab90"],
  },
  { n: "Clé", a: "une clé", g: ["6ac000000", "507aaaeac", "3a9000101"] },
  { n: "Lunettes", a: "des lunettes", g: ["6ac0006ac", "507aaad05", "3a90003a9"] },
  {
    n: "Tasse",
    a: "une tasse fumante",
    g: [
      "040404000",
      "010101000",
      "000000000",
      "6aaaaac00",
      "5000007ac",
      "500000505",
      "5000007a9",
      "500000500",
      "3aaaaa900",
    ],
  },
  {
    n: "Avion",
    a: "un avion",
    g: ["000040000", "0006bc000", "2aad07aa8", "000505000", "000505000", "002d07800", "0003a9000"],
  },
  {
    n: "Voiture",
    a: "une voiture",
    g: ["006aeac00", "06d0507c0", "6bbababbc", "500000005", "3aaaaaaa9", "06c0006c0", "039000390"],
  },
  {
    n: "Robot",
    a: "un robot",
    g: ["0004000", "06abac0", "0500050", "03aea90", "0005000", "6eabaec", "3d00079", "0500050", "03aaa90"],
  },
  {
    n: "Cactus",
    a: "un cactus",
    g: ["0004000", "4005004", "5005005", "3aafaa9", "0005000", "0005000", "2aabaa8"],
  },
  {
    n: "Pomme",
    a: "une pomme",
    g: ["0006800", "0005000", "06abac0", "690003c", "5000005", "5000005", "3c00069", "03aaa90"],
  },
  {
    n: "Nuage",
    a: "un nuage de pluie",
    g: ["006ac0000", "06903aac0", "69000003c", "500000005", "3aaaaaaa9", "040404040", "010101010"],
  },
  {
    n: "Couronne de roi",
    a: "une couronne de roi",
    g: ["400040004", "5006bc005", "7aa903aad", "500000005", "3aaaaaaa9"],
  },
  {
    n: "Ampoule",
    a: "une ampoule",
    g: ["006ac00", "06903c0", "690003c", "5000005", "3c00069", "03c0690", "0050500", "007ed00", "003b900"],
  },
  {
    n: "Papillon",
    a: "un papillon",
    g: ["6ac0406ac", "507afad05", "3a90503a9", "000050000", "06aefeac0", "0507bd050", "03a903a90"],
  },
  {
    n: "Montgolfière",
    a: "une montgolfière",
    g: [
      "006aaac00",
      "0690003c0",
      "69000003c",
      "500000005",
      "3c0000069",
      "03c000690",
      "003c06900",
      "000505000",
      "0003a9000",
    ],
  },
  {
    n: "Note de musique",
    a: "une note de musique",
    g: ["006aaac", "0050005", "0050005", "06d006d", "0390039"],
  },
  { n: "Chapeau", a: "un chapeau haut-de-forme", g: ["06aaac0", "0500050", "0500050", "07eeed0", "2bbbbb8"] },
  {
    n: "Tente",
    a: "une tente de camping",
    g: ["000040000", "0006bc000", "006903c00", "0690403c0", "6d005007c", "3baabaab9"],
  },
  {
    n: "Cloche",
    a: "une cloche",
    g: ["0004000", "006bc00", "0050500", "06903c0", "0500050", "690003c", "3aaeaa9", "0001000"],
  },
  {
    n: "Bougie",
    a: "une bougie",
    g: ["006ac00", "0050500", "003e900", "0005000", "06abac0", "0500050", "0500050", "0500050", "03aaa90"],
  },
  {
    n: "Chaussette",
    a: "une chaussette de Noël",
    g: ["6aaac00", "7aaad00", "5000500", "5000500", "50003ac", "5000005", "3aaaaa9"],
  },
  {
    n: "Boule",
    a: "une boule de sapin",
    g: ["006ac00", "003e900", "006bc00", "6a903ac", "5000005", "5000005", "5000005", "3c00069", "03aaa90"],
  },
  {
    n: "Coupe",
    a: "une coupe de champagne",
    g: ["6aaaaac", "3c00069", "03c0690", "003e900", "0005000", "0005000", "0005000", "06abac0", "03aaa90"],
  },
  {
    n: "Sablier",
    a: "un sablier",
    g: ["6aaaaac", "3c00069", "03c0690", "003e900", "006bc00", "06903c0", "690003c", "3aaaaa9"],
  },
  {
    n: "Horloge",
    a: "une horloge à minuit",
    g: [
      "006aeac00",
      "0690103c0",
      "69004003c",
      "500050005",
      "78001002d",
      "500000005",
      "3c0000069",
      "03c040690",
      "003aba900",
    ],
  },
  {
    n: "Feu d’artifice",
    a: "un feu d’artifice",
    g: [
      "000040000",
      "0680502c0",
      "010050010",
      "000050000",
      "2aaafaaa8",
      "000050000",
      "040050040",
      "038050290",
      "000010000",
    ],
  },
  {
    n: "Étoile",
    a: "une étoile des neiges",
    g: [
      "000040000",
      "000050000",
      "000050000",
      "0006fc000",
      "2aafffaa8",
      "0003f9000",
      "000050000",
      "000050000",
      "000010000",
    ],
  },
  {
    n: "Couronne",
    a: "une couronne de Noël",
    g: [
      "006aaac00",
      "0690003c0",
      "6906ac03c",
      "506903c05",
      "505000505",
      "503c06905",
      "3c03a9069",
      "03c000690",
      "003aaa900",
    ],
  },
];
const tnRot = (e, t) => 15 & ((e << t) | (e >> (4 - t)));
const tnCan = (e) => {
  const t = (1 & e) + ((e >> 1) & 1) + ((e >> 2) & 1) + ((e >> 3) & 1);
  return 1 === t ? 1 : 2 === t ? (5 === e || 10 === e ? 5 : 3) : 3 === t ? 7 : 15;
};
const tnSvg = {
  1: '<path d="M50 0V35"/><circle cx="50" cy="50" r="15"/>',
  5: '<path d="M50 0V100"/>',
  3: '<path d="M50 0A50 50 0 0 0 100 50"/>',
  7: '<path d="M50 0V100M50 50H100"/>',
  15: '<path d="M50 0V100M0 50H100"/>',
};
function pTourne(e) {
  const t = TL[lv],
    a = t.g.length,
    s = t.g[0].length,
    n = t.g.flatMap((e) => [...e].map((e) => parseInt(e, 16))),
    o = n.length,
    i = n.map((e) => (e ? tnCan(e) : 0)),
    r = n.map((e, t) => {
      for (let a = 0; a < 4 && e; a++) if (tnRot(i[t], a) === e) return a;
      return 0;
    }),
    l = rng(313 * lv + 17),
    c =
      e && Array.isArray(e.r) && e.r.length === o && e.r.every((e) => e === (3 & e))
        ? e.r.slice()
        : n.map((e, t) => {
            if (!e) return 0;
            const a = [0, 1, 2, 3].filter((a) => tnRot(i[t], a) !== e);
            return l() < 0.9 && a.length ? a[Math.floor(l() * a.length)] : Math.floor(4 * l());
          }),
    d = (e) => (n[e] ? tnRot(i[e], 3 & c[e]) : 0),
    f = [0, 1, 0, -1],
    u = [-1, 0, 1, 0],
    h = (e) => {
      const t = d(e);
      if (!t) return !0;
      const n = e % s,
        o = (e / s) | 0;
      for (let e = 0; e < 4; e++) {
        const i = n + f[e],
          r = o + u[e],
          l = i >= 0 && r >= 0 && i < s && r < a ? r * s + i : -1;
        if (((t >> e) & 1) != (l >= 0 ? (d(l) >> ((e + 2) & 3)) & 1 : 0)) return !1;
      }
      return !0;
    },
    p = () => n.every((e, t) => !e || h(t));
  if (!e && p()) {
    const e = n.findIndex((e, t) => e && tnRot(i[t], 1) !== e);
    c[e] = (c[e] + 1) & 3;
  }
  let m = !1;
  snap = () => ({ r: c.map((e) => 3 & e) });
  const b = () => app.querySelectorAll(".tn-t").forEach((e) => e.classList.toggle("ok", h(+e.dataset.v))),
    g = (e) => app.querySelector('.tn-t[data-v="' + e + '"]'),
    E = (e, t) => t.style.setProperty("--r", 90 * c[e] + "deg"),
    y = () => {
      ((m = !0),
        app.querySelector(".tn-g").classList.add("win"),
        msg("Tu as dessiné " + t.a + "."),
        sfx(660, 0.5),
        vib([20, 40, 20]),
        setTimeout(win, 1900));
    };
  ((act.tn = (e) => {
    if (m) return;
    const t = +e,
      a = g(t);
    if (a) {
      if ((c[t]++, E(t, a), keep(), b(), p())) return y();
      sfx(h(t) ? 560 : 380, h(t) ? 0.2 : 0.1);
    }
  }),
    (act.hint = () => {
      if (m) return;
      const e = n.map((e, t) => t).filter((e) => n[e] && d(e) !== n[e]);
      if (!e.length || !spend(1)) return;
      const t = e[Math.floor(Math.random() * e.length)],
        a = g(t);
      ((c[t] += (r[t] - (3 & c[t]) + 4) & 3),
        E(t, a),
        a.classList.remove("hn"),
        a.offsetWidth,
        a.classList.add("hn"),
        keep(),
        b(),
        p() && y());
    }),
    frame(
      `<div class="tn-g" style="--c:${s};--z:${2 * Math.floor(Math.min(58, (Math.min(innerWidth, 520) - (innerWidth > 700 ? 96 : 56)) / s) / 2)}px">${n.map((e, t) => (e ? `<button class="tn-t" data-a="tn" data-v="${t}" style="--r:${90 * (3 & c[t])}deg" aria-label="Tourner la pièce, ligne ${1 + ((t / s) | 0)}, colonne ${(t % s) + 1}"><svg viewBox="0 0 100 100" aria-hidden="true">${tnSvg[i[t]]}</svg></button>` : '<i class="tn-e"></i>')).join("")}</div><p class="note" style="text-align:center">Touche une pièce pour la faire tourner. Relie tous les fils pour former <b>${t.a}</b>.</p>`,
      1,
    ),
    b(),
    p() && y());
}
