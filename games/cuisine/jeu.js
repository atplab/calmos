// Cuisine : jeu (CUN…act.kz*)
const CUN = 30;
const kzRng = (e) => {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), 1 | e)),
      (e ^= e + Math.imul(e ^ (e >>> 7), 61 | e)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
};
const KZI = {
  bb: { n: "pain blanc", k: "b" },
  bn: { n: "pain brun", k: "b" },
  vi: { n: "viande", k: "p" },
  cr: { n: "croquette de poulet", k: "p" },
  la: { n: "laitue", k: "t" },
  to: { n: "tomate", k: "t" },
  fr: { n: "fromage", k: "t" },
  ke: { n: "ketchup", k: "t" },
  co: { n: "cornichons", k: "t" },
  ba: { n: "bacon", k: "t" },
  ph: { n: "pain à hot-dog", k: "b" },
  pb: { n: "pain brioché", k: "b" },
  sa: { n: "saucisse", k: "p" },
  sv: { n: "saucisse végé", k: "p" },
  mo: { n: "moutarde", k: "t" },
  of: { n: "oignons frits", k: "t" },
  fx: { n: "fromage râpé", k: "t" },
  re: { n: "relish", k: "t" },
  ni: { n: "riz à sushi", k: "b" },
  mk: { n: "feuille d’algue", k: "b" },
  sm: { n: "saumon", k: "p" },
  th: { n: "thon", k: "p" },
  cv: { n: "crevette", k: "p" },
  wa: { n: "wasabi", k: "t" },
  av: { n: "avocat", k: "t" },
  oe: { n: "œufs de poisson", k: "t" },
  se: { n: "sésame", k: "t" },
  fries: { n: "frites", k: "s" },
  drink: { n: "boisson", k: "s" },
};
const KZU = [
  ["bb", "vi"],
  ["ke"],
  ["la"],
  ["to"],
  ["fr"],
  ["bn"],
  ["cr"],
  ["co"],
  ["ba"],
  ["fries"],
  ["ph", "sa"],
  ["ke"],
  ["mo"],
  ["of"],
  ["fries"],
  ["fx"],
  ["pb"],
  ["sv"],
  ["re"],
  ["drink"],
  ["ni", "sm"],
  ["wa"],
  ["mk"],
  ["th"],
  ["fries"],
  ["av"],
  ["cv"],
  ["oe"],
  ["se"],
  ["drink"],
];
const KZL = [
  { n: "Pipo", c1: "#ffe9f2", c2: "#f29ac0", an: "heart", ac: "bow", ac2: "#ff6f9f" },
  { n: "Lumi", c1: "#e9fbff", c2: "#7fcde8", an: "moon", ac: "scarf", ac2: "#ffcf5a" },
  { n: "Tika", c1: "#efffe6", c2: "#8fd47a", an: "leaf", ac: "hat", ac2: "#5a8a3a" },
  { n: "Mio", c1: "#fff6df", c2: "#f2bf6a", an: "drop", ac: "glasses", ac2: "#6a4a8a" },
  { n: "Bulle", c1: "#f1ecff", c2: "#a99cf0", an: "flower", ac: "scarf", ac2: "#ff8fa8" },
  { n: "Noisette", c1: "#fff0e4", c2: "#d99a6a", an: "none", ac: "hat", ac2: "#a8452e" },
  { n: "Plume", c1: "#ffffff", c2: "#c8d2e8", an: "heart", ac: "glasses", ac2: "#3a6ab8" },
  { n: "Gazou", c1: "#fffbe0", c2: "#e8d45a", an: "leaf", ac: "bow", ac2: "#6aa8ff" },
  { n: "Nini", c1: "#ffe8e4", c2: "#ff9a8a", an: "moon", ac: "hat", ac2: "#3a4a8a" },
  { n: "Coco", c1: "#e6fff7", c2: "#6ad0b0", an: "flower", ac: "glasses", ac2: "#a84a6a" },
];
function kzGuy(e, t, a) {
  const s = 'stroke="#4a4290" stroke-width="1.9" fill="none" stroke-linecap="round"',
    n = "kzb" + a,
    o =
      {
        heart: `<path d="M1 -38Q4 -45 3 -50" stroke="${e.c2}" stroke-width="2" fill="none"/><path d="M3 -50c-2-4-8-2-6 2l6 5 6-5c2-4-4-6-6-2z" fill="#ff7a9f"/>`,
        moon: `<path d="M1 -38Q5 -45 4 -51" stroke="${e.c2}" stroke-width="2" fill="none"/><path d="M7 -58a6 6 0 1 0 0 10a4.5 4.5 0 1 1 0 -10z" fill="#ffe27a"/>`,
        leaf: `<path d="M1 -38Q2 -45 -1 -50" stroke="${e.c2}" stroke-width="2" fill="none"/><path d="M-1 -50c-8-2-10-8-8-12c6 0 10 5 8 12z" fill="#6ad06a"/>`,
        drop: `<path d="M1 -38Q4 -44 3 -49" stroke="${e.c2}" stroke-width="2" fill="none"/><path d="M3 -59c-4 5-5 8-3 10c2 1.5 4 1.5 6 0c2-2 1-5-3-10z" fill="#7ac8ff"/>`,
        flower: `<path d="M1 -38Q3 -45 2 -50" stroke="${e.c2}" stroke-width="2" fill="none"/>${[0, 72, 144, 216, 288].map((e) => `<circle cx="${(2 + 3.6 * Math.cos((e * Math.PI) / 180)).toFixed(1)}" cy="${(3.6 * Math.sin((e * Math.PI) / 180) - 53).toFixed(1)}" r="2.8" fill="#ffb3cf"/>`).join("")}<circle cx="2" cy="-53" r="2.2" fill="#ffe27a"/>`,
        none: "",
      }[e.an] || "",
    i =
      {
        bow: `<path d="M-4 -37l-7 -4v8zM4 -37l7 -4v8z" fill="${e.ac2}"/><circle cx="0" cy="-37" r="2.2" fill="${e.ac2}"/>`,
        hat: `<path d="M-12 -34h24l-3 -3h-18z" fill="${e.ac2}"/><path d="M-8 -37v-7q8 -3 16 0v7z" fill="${e.ac2}"/><path d="M-8 -39h16" stroke="#fff" stroke-opacity=".5" stroke-width="1.6"/>`,
        scarf: `<path d="M-13 -9q13 6 26 0l1 4q-14 6 -28 0z" fill="${e.ac2}"/><path d="M7 -6l2 8 4 -1 -2 -8z" fill="${e.ac2}"/>`,
        glasses: `<circle cx="-5.8" cy="-23" r="4.4" fill="#fff" fill-opacity=".25" stroke="${e.ac2}" stroke-width="1.4"/><circle cx="5.8" cy="-23" r="4.4" fill="#fff" fill-opacity=".25" stroke="${e.ac2}" stroke-width="1.4"/><path d="M-1.4 -23h2.8" stroke="${e.ac2}" stroke-width="1.4"/>`,
        none: "",
      }[e.ac] || "",
    r =
      "happy" === t
        ? `<path d="M-9.2 -21.4q3.4 -4.2 6.8 0M2.4 -21.4q3.4 -4.2 6.8 0" ${s}/><path d="M-4.6 -17.6Q0 -9.4 4.6 -17.6Z" fill="#b8456a"/><path d="M-2.2 -13.4q2.2 -2.2 4.4 0q-2.2 1.8 -4.4 0z" fill="#ff8fa8"/>`
        : "sad" === t
          ? '<ellipse cx="-5.8" cy="-21" rx="1.9" ry="2.6" fill="#4a4290"/><ellipse cx="5.8" cy="-21" rx="1.9" ry="2.6" fill="#4a4290"/><path d="M-3.8 -13Q0 -17.2 3.8 -13" stroke="#7a6cc0" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M-9.8 -17.6q2.2 2.8 0 4.6q-2.2 -1.8 0 -4.6z" fill="#8fd0ff"/>'
          : "lo" === t
            ? `<ellipse cx="-5.8" cy="-22" rx="2" ry="2.7" fill="#4a4290"/><ellipse cx="5.8" cy="-22" rx="2" ry="2.7" fill="#4a4290"/><path d="M-9.6 -27.4L-3.4 -25.8M9.6 -27.4L3.4 -25.8" ${s}/><path d="M-3 -15.4h6" stroke="#7a6cc0" stroke-width="1.6" stroke-linecap="round"/>`
            : '<ellipse cx="-5.8" cy="-23" rx="2.1" ry="2.9" fill="#4a4290"/><ellipse cx="5.8" cy="-23" rx="2.1" ry="2.9" fill="#4a4290"/><circle cx="-5.1" cy="-24.2" r=".85" fill="#fff"/><circle cx="6.5" cy="-24.2" r=".85" fill="#fff"/><path d="M-2.8 -16.4q2.8 2.6 5.6 0" stroke="#7a6cc0" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
    l =
      "happy" === t
        ? [
            [-17.6, -27],
            [17.6, -27],
          ]
        : [
            [-14.8, -10],
            [14.8, -10],
          ];
  return `<svg viewBox="-28 -66 56 68" aria-hidden="true"><defs><radialGradient id="${n}" cx=".36" cy=".26" r=".98"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="${e.c1}"/><stop offset="1" stop-color="${e.c2}"/></radialGradient></defs><ellipse cx="0" cy="-1" rx="12" ry="2.2" fill="rgba(0,0,0,.2)"/>${o}<path d="M0 -39C10 -39 15.5 -29 15.5 -19C15.5 -8 9 -2 0 -2C-9 -2 -15.5 -8 -15.5 -19C-15.5 -29 -10 -39 0 -39Z" fill="url(#${n})"/><ellipse cx="-6.4" cy="-30" rx="3.2" ry="5.4" fill="#fff" opacity=".6" transform="rotate(18 -6.4 -30)"/>${r}<ellipse cx="-11" cy="-16.6" rx="2.7" ry="1.7" fill="#ff9db8" opacity=".75"/><ellipse cx="11" cy="-16.6" rx="2.7" ry="1.7" fill="#ff9db8" opacity=".75"/>${i}${l.map(([t, a]) => `<circle cx="${t}" cy="${a}" r="4.6" fill="${e.c1}" stroke="${e.c2}" stroke-width="1"/>`).join("")}</svg>`;
}
function kzDish(e) {
  if (!e || !e.b) return "";
  if ("ni" === e.b || "mk" === e.b) return kzSushi(e);
  const t = e.t || [];
  if ("ph" === e.b || "pb" === e.b) {
    const a = "pb" === e.b,
      s = a ? "#e09a3a" : "#f0c27a";
    let n = `<path d="M10 30q0 -12 12 -12h56q12 0 12 12z" fill="${a ? "#b8702a" : "#d29a52"}"/>`;
    return (
      e.p &&
        (n += `<rect x="6" y="21" width="88" height="13" rx="6.5" fill="${"sv" === e.p ? "#8a6a3a" : "#c2563a"}"/><path d="M20 24l4 6M36 24l4 6M52 24l4 6M68 24l4 6" stroke="#000" stroke-opacity=".22" stroke-width="2"/><path d="M12 24h76" stroke="#fff" stroke-opacity=".3" stroke-width="2" stroke-linecap="round"/>`),
      t.includes("fx") &&
        (n += [14, 22, 30, 38, 46, 54, 62, 70, 78]
          .map(
            (e, t) =>
              `<path d="M${e} ${20 + (t % 2) * 2}l5 ${t % 2 ? -3 : 3}" stroke="#ffd34a" stroke-width="2.4" stroke-linecap="round"/>`,
          )
          .join("")),
      t.includes("ke") &&
        (n +=
          '<path d="M12 24l6 -4 6 4 6 -4 6 4 6 -4 6 4 6 -4 6 4 6 -4 6 4 6 -4 6 4" stroke="#e8352a" stroke-width="3" fill="none" stroke-linejoin="round" stroke-linecap="round"/>'),
      t.includes("mo") &&
        (n +=
          '<path d="M14 27l6 -4 6 4 6 -4 6 4 6 -4 6 4 6 -4 6 4 6 -4 6 4 6 -4 6 4" stroke="#ffcf2a" stroke-width="2.6" fill="none" stroke-linejoin="round" stroke-linecap="round"/>'),
      t.includes("of") &&
        (n += [18, 30, 44, 58, 72, 82]
          .map(
            (e) =>
              `<path d="M${e} 21q3 -4 6 0" stroke="#a8622a" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,
          )
          .join("")),
      t.includes("re") &&
        (n += [16, 26, 40, 50, 64, 76, 86]
          .map((e, t) => `<circle cx="${e}" cy="${20 + (t % 3)}" r="1.8" fill="#4ab04a"/>`)
          .join("")),
      (n +=
        `<path d="M4 30q0 12 14 12h64q14 0 14 -12q-4 4 -14 4h-64q-10 0 -14 -4z" fill="${s}"/>` +
        (a
          ? '<path d="M16 39h68" stroke="#fff" stroke-opacity=".45" stroke-width="2" stroke-linecap="round"/>'
          : "")),
      `<svg class="kzd" viewBox="0 6 100 40" aria-hidden="true">${n}</svg>`
    );
  }
  const a = "bn" === e.b ? "#a8703f" : "#f3cf8f",
    s = "bn" === e.b ? "#7a4a24" : "#d9a85a";
  let n = 76,
    o = "";
  const i = (e, t) => {
    ((n -= e), (o += t(n)));
  };
  return (
    i(
      9,
      (e) =>
        `<path d="M14 ${e}h72q2 0 2 3v2q0 4 -6 4h-64q-6 0 -6 -4v-2q0 -3 2 -3z" fill="${a}" stroke="${s}" stroke-width="1"/>`,
    ),
    "vi" === e.p &&
      i(
        9,
        (e) =>
          `<rect x="10" y="${e}" width="80" height="10" rx="5" fill="#6b3a22"/><path d="M18 ${e + 3}h16M44 ${e + 6}h14M66 ${e + 3}h14" stroke="#4a2414" stroke-width="2" stroke-linecap="round"/>`,
      ),
    "cr" === e.p &&
      i(
        10,
        (e) =>
          `<path d="M12 ${e + 5}q0 -6 10 -6h56q10 0 10 6q0 6 -10 6h-56q-10 0 -10 -6z" fill="#e8a540"/>${[22, 36, 52, 66, 78].map((t, a) => `<circle cx="${t}" cy="${e + 3 + (a % 2) * 3}" r="1.6" fill="#c2802a"/>`).join("")}`,
      ),
    t.includes("fr") &&
      i(
        3,
        (e) =>
          `<path d="M10 ${e}h80l-6 6l-4 -3l-8 7l-6 -4l-10 5l-6 -5l-10 6l-8 -6l-8 4l-6 -5z" fill="#ffcf3a"/>`,
      ),
    t.includes("ba") &&
      i(
        4,
        (e) =>
          `<path d="M12 ${e + 2}q8 -4 16 0t16 0t16 0t16 0t14 0" stroke="#b8452a" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M12 ${e + 2}q8 -4 16 0t16 0t16 0t16 0t14 0" stroke="#f2a080" stroke-width="1.4" fill="none"/>`,
      ),
    t.includes("la") &&
      i(
        4,
        (e) =>
          `<path d="M8 ${e + 3}q5 -6 10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t6 0" stroke="#5ac04a" stroke-width="5" fill="none" stroke-linecap="round"/>`,
      ),
    t.includes("to") &&
      i(
        5,
        (e) =>
          `<rect x="14" y="${e}" width="32" height="5" rx="2.5" fill="#e8402e"/><rect x="54" y="${e}" width="32" height="5" rx="2.5" fill="#e8402e"/><path d="M20 ${e + 2.5}h20M60 ${e + 2.5}h20" stroke="#ff9a8a" stroke-width="1" stroke-dasharray="2 3"/>`,
      ),
    t.includes("co") &&
      i(3, (e) =>
        [22, 40, 58, 74]
          .map(
            (t) =>
              `<ellipse cx="${t}" cy="${e + 1.5}" rx="7" ry="2.4" fill="#6aa83a"/><ellipse cx="${t}" cy="${e + 1.5}" rx="4" ry="1.2" fill="#a8d86a"/>`,
          )
          .join(""),
      ),
    t.includes("ke") &&
      i(
        2,
        (e) =>
          `<path d="M16 ${e + 1}q6 4 12 0t12 0t12 0t12 0t12 0t8 0" stroke="#e8352a" stroke-width="3.4" fill="none" stroke-linecap="round"/>`,
      ),
    i(
      22,
      (t) =>
        `<path d="M12 ${t + 22}q0 -22 38 -22q38 0 38 22z" fill="${a}" stroke="${s}" stroke-width="1"/><path d="M24 ${t + 9}q12 -7 26 -6" stroke="#fff" stroke-opacity=".5" stroke-width="3" fill="none" stroke-linecap="round"/>` +
        ("bn" === e.b
          ? [30, 42, 56, 66, 48, 38, 60]
              .map(
                (e, a) => `<ellipse cx="${e}" cy="${t + 6 + (a % 3) * 4}" rx="1.8" ry="1" fill="#f3e2b0"/>`,
              )
              .join("")
          : [32, 46, 60, 52, 40]
              .map(
                (e, a) => `<ellipse cx="${e}" cy="${t + 6 + (a % 2) * 5}" rx="1.8" ry="1" fill="#fff6dc"/>`,
              )
              .join("")),
    ),
    `<svg class="kzd" viewBox="0 ${n - 2} 100 ${80 - n}" aria-hidden="true">${o}</svg>`
  );
}
const kzFries = () =>
  2 === KZR
    ? kzMiso()
    : `<svg viewBox="0 0 40 44" aria-hidden="true">${[8, 13, 18, 23, 28, 32].map((e, t) => `<rect x="${e}" y="${4 + (t % 3) * 3}" width="4" height="22" rx="1.5" fill="#ffd34a" stroke="#e8a82a" stroke-width=".8" transform="rotate(${4 * (t - 2.5)} ${e} 26)"/>`).join("")}<path d="M6 18h28l-3 24h-22z" fill="#e8402e"/><path d="M14 26q6 6 12 0" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>`;
const kzDrink = () =>
  2 === KZR
    ? kzTea()
    : '<svg viewBox="0 0 40 44" aria-hidden="true"><path d="M22 2l-4 12" stroke="#ff6fa0" stroke-width="3" stroke-linecap="round"/><path d="M8 12h24l-3 30h-18z" fill="#fff"/><path d="M9 18h22l-2 22h-18z" fill="#7ac8ff"/><path d="M8 12h24" stroke="#c8d2e8" stroke-width="3" stroke-linecap="round"/><path d="M12 24h16" stroke="#fff" stroke-opacity=".6" stroke-width="2"/></svg>';
function kzIco(e) {
  if (2 === KZR || "ni mk sm th cv wa av oe se".split(" ").includes(e)) {
    const t = kzIcoSu(e);
    if (t) return t;
  }
  const t = (e) => `<svg viewBox="0 0 40 40" aria-hidden="true">${e}</svg>`;
  return (
    {
      bb: t(
        '<path d="M5 26q0 -18 15 -18q15 0 15 18z" fill="#f3cf8f" stroke="#d9a85a"/><rect x="5" y="27" width="30" height="7" rx="3" fill="#f3cf8f" stroke="#d9a85a"/><ellipse cx="15" cy="16" rx="1.6" ry="1" fill="#fff6dc"/><ellipse cx="23" cy="14" rx="1.6" ry="1" fill="#fff6dc"/>',
      ),
      bn: t(
        '<path d="M5 26q0 -18 15 -18q15 0 15 18z" fill="#a8703f" stroke="#7a4a24"/><rect x="5" y="27" width="30" height="7" rx="3" fill="#a8703f" stroke="#7a4a24"/><ellipse cx="14" cy="17" rx="1.6" ry="1" fill="#f3e2b0"/><ellipse cx="22" cy="13" rx="1.6" ry="1" fill="#f3e2b0"/><ellipse cx="26" cy="19" rx="1.6" ry="1" fill="#f3e2b0"/>',
      ),
      vi: t(
        '<ellipse cx="20" cy="22" rx="15" ry="9" fill="#e86a7a"/><path d="M10 20q5 -3 9 1M22 25q5 -3 9 0" stroke="#fff" stroke-opacity=".6" stroke-width="2" fill="none" stroke-linecap="round"/>',
      ),
      cr: t(
        '<path d="M6 22q0 -9 14 -9q14 0 14 9q0 8 -14 8q-14 0 -14 -8z" fill="#f6dcae"/><circle cx="14" cy="20" r="1.4" fill="#e0b880"/><circle cx="24" cy="24" r="1.4" fill="#e0b880"/>',
      ),
      la: t(
        '<path d="M20 34c-12 -2 -16 -14 -10 -24c4 4 8 3 10 -2c2 5 6 6 10 2c6 10 2 22 -10 24z" fill="#5ac04a"/><path d="M20 32v-20" stroke="#a8e890" stroke-width="2"/>',
      ),
      to: t(
        '<circle cx="20" cy="22" r="12" fill="#e8402e"/><path d="M14 11l6 3 6 -3 -3 5h-6z" fill="#4aa83a"/><ellipse cx="15" cy="19" rx="3" ry="2" fill="#fff" opacity=".4"/>',
      ),
      fr: t(
        '<path d="M5 30l15 -22 15 22z" fill="#ffcf3a"/><circle cx="18" cy="22" r="2" fill="#f2b42a"/><circle cx="24" cy="26" r="1.6" fill="#f2b42a"/>',
      ),
      ke: t(
        '<rect x="13" y="12" width="14" height="24" rx="5" fill="#e8352a"/><path d="M17 12v-5h6v5z" fill="#fff"/><rect x="15" y="20" width="10" height="7" rx="1.5" fill="#fff" opacity=".8"/>',
      ),
      mo: t(
        '<rect x="13" y="12" width="14" height="24" rx="5" fill="#ffcf2a"/><path d="M17 12v-5h6v5z" fill="#e8a82a"/><rect x="15" y="20" width="10" height="7" rx="1.5" fill="#fff" opacity=".8"/>',
      ),
      co: t(
        '<path d="M10 30q-4 -10 6 -18q8 -6 14 0q4 6 -4 14q-8 8 -16 4z" fill="#6aa83a"/><circle cx="17" cy="20" r="1.4" fill="#a8d86a"/><circle cx="22" cy="17" r="1.4" fill="#a8d86a"/><circle cx="16" cy="26" r="1.4" fill="#a8d86a"/>',
      ),
      ba: t(
        '<path d="M5 22q5 -6 10 0t10 0t10 0" stroke="#b8452a" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M5 22q5 -6 10 0t10 0t10 0" stroke="#f2a080" stroke-width="2" fill="none"/>',
      ),
      ph: t(
        '<rect x="3" y="18" width="34" height="12" rx="6" fill="#f0c27a"/><path d="M7 20h26" stroke="#d29a52" stroke-width="2"/>',
      ),
      pb: t(
        '<rect x="3" y="18" width="34" height="12" rx="6" fill="#e09a3a"/><path d="M8 21h24" stroke="#fff" stroke-opacity=".5" stroke-width="2" stroke-linecap="round"/>',
      ),
      sa: t(
        '<rect x="3" y="17" width="34" height="9" rx="4.5" fill="#ff9aa0"/><path d="M8 19h24" stroke="#fff" stroke-opacity=".5" stroke-width="1.6"/>',
      ),
      sv: t(
        '<rect x="3" y="17" width="34" height="9" rx="4.5" fill="#b8a46a"/><path d="M10 20l3 3M20 20l3 3M30 20l-3 3" stroke="#6a8a3a" stroke-width="1.6"/>',
      ),
      of: t(
        '<ellipse cx="20" cy="23" rx="12" ry="10" fill="#f2e2c8" stroke="#c9a070"/><path d="M20 13v-5" stroke="#6aa83a" stroke-width="2.4"/><path d="M14 22q6 -8 12 0" stroke="#c9a070" stroke-width="1.4" fill="none"/>',
      ),
      fx: t(
        `${[8, 13, 18, 23, 28, 12, 20, 26].map((e, t) => `<path d="M${e} ${20 + (t % 3) * 4}l5 ${t % 2 ? -3 : 3}" stroke="#ffcf3a" stroke-width="3" stroke-linecap="round"/>`).join("")}`,
      ),
      re: t(
        '<path d="M11 12h18v22q0 3 -3 3h-12q-3 0 -3 -3z" fill="#fff" fill-opacity=".7" stroke="#c8d2e8"/><path d="M12 18h16v15h-16z" fill="#4ab04a"/><rect x="10" y="8" width="20" height="5" rx="2" fill="#e8402e"/>',
      ),
      fries: t(
        '<path d="M10 14h20v22h-20z" fill="#d9c8a0"/><path d="M10 14l3 -5h14l3 5z" fill="#c9b080"/><path d="M14 22q6 4 12 0" stroke="#a88a50" stroke-width="2" fill="none"/>',
      ),
      drink: t(
        '<path d="M10 10h20l-3 26h-14z" fill="#fff" stroke="#c8d2e8"/><path d="M14 18h12" stroke="#c8d2e8" stroke-width="2"/>',
      ),
    }[e] || ""
  );
}
function kzGrill(e, t) {
  if (KZSU[e]) return kzGrillSu(e, t);
  const a = {
    vi: t ? "#6b3a22" : "#e86a7a",
    cr: t ? "#e8a540" : "#f6dcae",
    sa: t ? "#c2563a" : "#ff9aa0",
    sv: t ? "#8a6a3a" : "#b8a46a",
  }[e];
  return "vi" === e || "cr" === e
    ? `<svg viewBox="0 0 40 30" aria-hidden="true"><ellipse cx="20" cy="16" rx="16" ry="10" fill="${a}"/>${t ? '<path d="M10 12l6 8M18 10l6 8M26 10l6 8" stroke="#000" stroke-opacity=".25" stroke-width="2"/>' : ""}</svg>`
    : `<svg viewBox="0 0 40 30" aria-hidden="true"><rect x="3" y="10" width="34" height="10" rx="5" fill="${a}"/>${t ? '<path d="M10 11l3 8M20 11l3 8M30 11l-3 8" stroke="#000" stroke-opacity=".25" stroke-width="2"/>' : ""}</svg>`;
}
function kzBg(e) {
  if (2 === e) return kzBgSu();
  const t = 1 === e,
    a = [...Array(26)]
      .map(
        (e, a) =>
          `<circle cx="${(73 * a + 29) % 400}" cy="${(41 * a + 13) % (t ? 150 : 110)}" r="${1 + (a % 3) * 0.5}" fill="#fff" opacity="${0.5 + (a % 2) * 0.3}"/>`,
      )
      .join("");
  return t
    ? `<svg class="kzbg" viewBox="0 -70 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="kzn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e1240"/><stop offset="1" stop-color="#36307a"/></linearGradient></defs>\n<rect y="-70" width="400" height="400" fill="url(#kzn)"/>${a}<path d="M330 40a20 20 0 1 0 0 34a15 15 0 1 1 0 -34z" fill="#fff3c0"/>\n${[
        [0, 120, 60, 130],
        [50, 140, 50, 110],
        [96, 110, 70, 140],
        [234, 130, 60, 120],
        [300, 126, 60, 124],
        [352, 104, 60, 146],
      ]
        .map(
          ([e, t, a, s]) =>
            `<rect x="${e}" y="${t}" width="${a}" height="${s}" fill="#241e5a"/>${[...Array(6)].map((s, n) => `<rect x="${e + 8 + (n % 2) * (a / 2 - 4)}" y="${t + 10 + 22 * Math.floor(n / 2)}" width="10" height="12" fill="#ffd36b" opacity="${n % 3 ? 0.85 : 0.25}"/>`).join("")}`,
        )
        .join("")}\n<path d="M0 -20q100 30 200 6t200 8" stroke="#3a3060" stroke-width="2" fill="none"/>${[
        ...Array(13),
      ]
        .map((e, t) => {
          const a = 33 * t + 8,
            s = (10 * Math.sin(0.9 * t) - 20 + 12).toFixed(1),
            n = ["#ff8fc8", "#ffe27a", "#8fd8ff", "#a8ff9a"][t % 4];
          return `<circle cx="${a}" cy="${s}" r="9" fill="${n}" opacity=".25"/><circle cx="${a}" cy="${s}" r="3.6" fill="${n}"/>`;
        })
        .join(
          "",
        )}\n<path d="M70 96h260l-16 40h-228z" fill="#e8402e"/>${[...Array(8)].map((e, t) => `<path d="M${86 + 28 * t} 96h14l-2 40h-14z" fill="#fff3e0"/>`).join("")}<path d="M86 136q14 12 28 0t28 0t28 0t28 0t28 0t28 0t28 0t28 0z" fill="#e8402e"/>\n<g transform="translate(0 -40)"><rect x="116" y="58" width="168" height="36" rx="12" fill="#2a1a10" stroke="#ffd34a" stroke-width="3"/><rect x="116" y="58" width="168" height="36" rx="12" fill="none" stroke="#ffd34a" stroke-width="10" stroke-opacity=".18"/><text x="200" y="82" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="15" font-weight="700" fill="#fff0b0">Hot-dog de la Lune</text></g>\n<path d="M24 330v-160" stroke="#5a5480" stroke-width="5"/><circle cx="24" cy="166" r="8" fill="#ffe2a0"/><circle cx="24" cy="166" r="30" fill="#ffe2a0" opacity=".18"/>\n<path d="M0 236q100 -14 200 -4t200 -6v104h-400z" fill="#e8ecff"/></svg>`
    : `<svg class="kzbg" viewBox="0 -70 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="kzw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2160"/><stop offset="1" stop-color="#4b3a8c"/></linearGradient><linearGradient id="kzs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#121848"/><stop offset="1" stop-color="#3a3a8a"/></linearGradient><radialGradient id="kzl"><stop offset="0" stop-color="#ffe2a0" stop-opacity=".55"/><stop offset="1" stop-color="#ffe2a0" stop-opacity="0"/></radialGradient><clipPath id="kzc1"><rect x="16" y="70" width="110" height="120" rx="55"/></clipPath><clipPath id="kzc2"><rect x="274" y="70" width="110" height="120" rx="55"/></clipPath></defs>\n<rect y="-70" width="400" height="400" fill="url(#kzw)"/>${[...Array(12)].map((e, t) => `<path d="M${36 * t} -70v400" stroke="#fff" stroke-opacity=".04" stroke-width="14"/>`).join("")}\n<rect x="16" y="70" width="110" height="120" rx="55" fill="url(#kzs)"/><rect x="274" y="70" width="110" height="120" rx="55" fill="url(#kzs)"/>\n<g clip-path="url(#kzc1)">${a}<circle cx="60" cy="104" r="14" fill="#fff6c8"/><path d="M16 170q30 -18 60 -6t50 -4v40h-110z" fill="#e8ecff"/></g>\n<g clip-path="url(#kzc2)"><g transform="translate(258 0)">${a}</g><path d="M274 166q30 -14 60 -4t50 -6v40h-110z" fill="#e8ecff"/><path d="M330 150l10 -24 10 24z" fill="#3a6a5a"/></g>\n<rect x="16" y="70" width="110" height="120" rx="55" fill="none" stroke="#8a7ad8" stroke-width="5"/><rect x="274" y="70" width="110" height="120" rx="55" fill="none" stroke="#8a7ad8" stroke-width="5"/>\n<g transform="translate(0 -30)"><rect x="110" y="16" width="180" height="48" rx="14" fill="#1a1450" stroke="#ff8fc8" stroke-width="3"/><rect x="110" y="16" width="180" height="48" rx="14" fill="none" stroke="#ff8fc8" stroke-width="10" stroke-opacity=".18"/>\n<text x="200" y="37" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="16" font-weight="700" fill="#ffd6ec">Burger</text><text x="200" y="55" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="11" fill="#ffe9a0" letter-spacing="2.5">DES ÉTOILES</text></g>\n${[150, 250].map((e) => `<path d="M${e} 34v56" stroke="#8a7ad8" stroke-width="2"/><path d="M${e - 14} 98q14 -16 28 0z" fill="#ffcf6a"/><circle cx="${e}" cy="104" r="44" fill="url(#kzl)"/>`).join("")}\n${[...Array(6)].map((e, t) => `<circle cx="${160 + 16 * t}" cy="174" r="5" fill="${["#ff8fc8", "#ffe27a", "#8fd8ff"][t % 3]}" opacity=".85"/>`).join("")}<rect x="150" y="180" width="100" height="5" rx="2" fill="#8a7ad8"/>\n<rect x="0" y="236" width="400" height="94" fill="#3a2c78"/></svg>`;
}
function kzLv(e) {
  const t = Math.max(0, Math.min(29, e)),
    a = Math.floor(t / 10),
    s = 1 === a,
    n = t % 10,
    o = kzRng(7919 * t + 57),
    i = [];
  for (let e = 10 * a; e <= t; e++) i.push(...KZU[e]);
  const r = (e) => i.filter((t) => KZI[t].k === e),
    l = r("b"),
    c = r("p"),
    d = r("t"),
    f = KZU[t],
    u = n < 1 ? 1 : n < 4 ? 2 : 3,
    h = n < 2 ? 1 : n < 5 ? 2 : 3,
    p = n < 5 ? 2 : 3,
    m = 3 + Math.floor(0.6 * n) + (a ? 1 : 0),
    b = 9 === n ? 0 : 1,
    g = (n < 5 ? 2 : 1.7) * (a ? 0.95 : 1),
    E = (e) => e[Math.floor(o() * e.length)],
    y = [];
  for (let e = 0; e < m; e++) {
    const a = f.find((e) => l.includes(e)),
      s = f.find((e) => c.includes(e)),
      r = a && o() < 0.5 ? a : E(l),
      h = s && o() < 0.5 ? s : E(c),
      p = Math.min(d.length, 1 + Math.floor(n / 2.2)),
      m = d.length ? Math.floor(o() * (p + 1)) : 0,
      b = [],
      v = d.slice(),
      A = f.find((e) => d.includes(e));
    for (A && m && o() < 0.6 && (b.push(A), v.splice(v.indexOf(A), 1)); b.length < m && v.length;)
      b.push(v.splice(Math.floor(o() * v.length), 1)[0]);
    const S = i.includes("fries") && o() < (f.includes("fries") ? 0.75 : 0.5),
      x = i.includes("drink") && o() < 0.75,
      M = 4 + b.length + (S ? 2 : 0) + (x ? 2 : 0);
    y.push({
      o: { b: r, p: h, t: b.sort() },
      fries: S,
      drink: x,
      lk: (7 * t + 3 * e) % KZL.length,
      p: Math.round(M * (g + 0.8 * (u - 1)) + 4),
    });
  }
  return { L: t, hd: s, rs: a, r: n, u: i, seats: u, plates: h, grills: p, nc: m, allow: b, Q: y };
}
function pCuis(e) {
  const t = kzLv(lv),
    a = t.hd,
    s = 2 === t.rs;
  ((KZR = t.rs), (KZI.fries.n = s ? "soupe miso" : "frites"), (KZI.drink.n = s ? "thé vert" : "boisson"));
  try {
    kzMu.style(t.rs);
  } catch (e) {}
  const n = {
    q: t.Q.map((e, t) => ({ ...e, id: t })),
    seat: Array(t.seats).fill(null),
    pl: Array.from({ length: t.plates }, () => null),
    sel: 0,
    gr: Array(t.grills).fill(null),
    fr: { n: 0, c: null },
    dr: { n: 0, c: null },
    hold: null,
    sv: 0,
    ms: 0,
    n: 0,
  };
  let o = null,
    i = !1,
    r = (0 === t.L && !st.get("kz:t", 0)) || (20 === t.L && !st.get("kz:t2", 0)),
    l = "";
  snap = () => null;
  const c = ++KZRUN,
    d = (e, t) =>
      setTimeout(() => {
        c === KZRUN && playing && "cuisine" === cur && document.getElementById("kzg") && e();
      }, t),
    f = (e) => {
      if (n.seat[e] || !n.q.length || i) return;
      const t = n.q.shift();
      ((n.seat[e] = { ...t, m: t.p, got: { o: 0, fries: 0, drink: 0 }, st: "in" }),
        sfx(660, 0.08),
        v(),
        d(() => {
          const t = n.seat[e];
          t && "in" === t.st && ((t.st = "wait"), v());
        }, 950));
    },
    u = (e) =>
      [e.b, e.p, ...e.t]
        .filter(Boolean)
        .map((e) => KZI[e].n)
        .join(", "),
    h = (e) =>
      "ph" === e.b || "pb" === e.b
        ? "un hot-dog"
        : "ni" === e.b
          ? "des nigiris"
          : "mk" === e.b
            ? "des makis"
            : "un burger",
    p = (e, t) => {
      const a = n.seat[e];
      a &&
        ((a.st = t ? "out" : "sad"),
        v(),
        d(
          () => {
            ((n.seat[e] = null), v(), m(), d(() => f(e), 450));
          },
          t ? 950 : 1150,
        ));
    },
    m = () => {
      n.q.length ||
        n.seat.some(Boolean) ||
        i ||
        ((i = !0),
        d(() => {
          n.ms <= t.allow ? win() : b();
        }, 500));
    },
    b = () => {
      const e = $("#kzov");
      e &&
        ((e.hidden = !1),
        (e.innerHTML = `<div class="kzbox"><h2>Le restaurant ferme</h2><p>${n.ms} client${n.ms > 1 ? "s sont repartis" : " est reparti"} le ventre vide. ${t.allow ? "Un seul départ est permis à ce niveau." : "À ce niveau, chaque client doit être servi."}</p><p class="kzsm">Astuce : lance la cuisson dès qu’un client arrive, et prépare plusieurs plats à la fois.</p><button class="btn" data-a="kzR">Recommencer</button></div>`));
    },
    g = () => {
      (n.n++,
        n.seat.forEach((e, t) => {
          e &&
            "wait" === e.st &&
            (e.p--,
            e.p <= 0 && (n.ms++, msg(KZL[e.lk].n + " est reparti sans manger…"), sfx(220, 0.3), p(t, !1)));
        }));
    },
    E = () => n.pl[n.sel];
  Object.assign(act, {
    kzR: () => pCuis(void 0),
    kzX: () => {
      ((r = !1), st.set(20 === t.L ? "kz:t2" : "kz:t", 1), v());
    },
    kzP: (e) => {
      ((n.sel = Math.max(0, Math.min(n.pl.length - 1, +e || 0))), (n.hold = null), v());
    },
    kzT: () => {
      if (!i) {
        if (!E()) return msg("Cette assiette est déjà vide.");
        ((n.pl[n.sel] = null), (n.hold = null), (o = null), sfx(260, 0.15), g(), v());
      }
    },
    kzI: (e) => {
      if (i || !t.u.includes(e)) return;
      const r = KZI[e];
      if ("p" === r.k) {
        const t = n.gr.findIndex((e) => !e);
        return t < 0
          ? msg(
              s
                ? "La planche est pleine : utilise d’abord le poisson découpé."
                : "Le grill est plein : sers d’abord ce qui est cuit.",
            )
          : ((n.gr[t] = { id: e, t0: Date.now() }),
            (o = null),
            sfx(330, 0.2),
            g(),
            v(),
            void d(() => v(), 1650));
      }
      if ("fries" === e)
        return n.fr.c
          ? msg(s ? "La soupe chauffe déjà." : "La friteuse est déjà en marche.")
          : n.fr.n >= 4
            ? msg(s ? "Il y a déjà assez de bols de soupe." : "Le bac à frites est plein.")
            : ((n.fr.c = 1),
              (o = null),
              sfx(300, 0.2),
              g(),
              v(),
              void d(() => {
                ((n.fr.c = null), (n.fr.n = Math.min(4, n.fr.n + 2)), sfx(620, 0.15), v());
              }, 2e3));
      if ("drink" === e)
        return n.dr.c
          ? msg("La fontaine remplit déjà un verre.")
          : n.dr.n >= 3
            ? msg("Il y a déjà assez de boissons.")
            : ((n.dr.c = 1),
              (o = null),
              sfx(500, 0.15),
              g(),
              v(),
              void d(() => {
                ((n.dr.c = null), n.dr.n++, v());
              }, 1500));
      const c = E();
      return (
        (n.hold = null),
        "b" === r.k
          ? c
            ? msg("Cette assiette est occupée : touche une assiette vide.")
            : ((n.pl[n.sel] = { b: e, p: null, t: [] }),
              (l = n.sel + ""),
              (o = null),
              sfx(520, 0.12),
              g(),
              v())
          : c
            ? c.t.includes(e)
              ? msg("Il y a déjà " + r.n + " sur ce plat.")
              : (c.t.push(e), c.t.sort(), (l = n.sel + ""), (o = null), sfx(560, 0.12), g(), void v())
            : msg(
                s
                  ? "Commence par du riz ou une feuille d’algue."
                  : a
                    ? "Commence par un pain à hot-dog."
                    : "Commence par un pain à burger.",
              )
      );
    },
    kzG: (e) => {
      if (i) return;
      const t = n.gr[+e];
      if (!t)
        return msg(
          s
            ? "Touche un poisson dans les bacs pour le découper."
            : "Touche " + (a ? "une saucisse" : "une viande") + " dans les bacs pour la mettre à cuire.",
        );
      if (Date.now() - t.t0 < 1600)
        return msg(s ? "Le couteau découpe de fines tranches…" : "Encore un petit instant, ça grésille…");
      const r = E();
      return (
        (n.hold = null),
        r
          ? r.p
            ? msg(
                s ? "Ce plat a déjà son poisson." : "Ce plat a déjà sa " + (a ? "saucisse" : "viande") + ".",
              )
            : ((r.p = t.id), (n.gr[+e] = null), (l = n.sel + ""), (o = null), sfx(620, 0.15), g(), void v())
          : msg(s ? "Pose d’abord le riz ou l’algue sur l’assiette." : "Pose d’abord un pain sur l’assiette.")
      );
    },
    kzF: () => {
      if (!i) {
        if (!n.fr.n)
          return msg(
            s
              ? n.fr.c
                ? "La soupe chauffe…"
                : "Touche le pot de miso pour préparer des bols."
              : n.fr.c
                ? "Les frites dorent…"
                : "Touche le sac de frites pour en faire.",
          );
        ((n.hold = "fries" === n.hold ? null : "fries"), v());
      }
    },
    kzD: () => {
      if (!i) {
        if (!n.dr.n)
          return msg(
            s
              ? n.dr.c
                ? "Le thé infuse…"
                : "Touche la théière pour servir un thé."
              : n.dr.c
                ? "Le verre se remplit…"
                : "Touche le gobelet pour préparer une boisson.",
          );
        ((n.hold = "drink" === n.hold ? null : "drink"), v());
      }
    },
    kzC: (e) => {
      if (i) return;
      const t = n.seat[+e];
      if (!t || "wait" !== t.st) return;
      const a = KZL[t.lk].n;
      if (n.hold) {
        const e = n.hold,
          o = "fries" === e ? n.fr : n.dr;
        if (!t[e] || t.got[e])
          return msg(
            a +
              " n’a pas demandé " +
              ("fries" === e ? (s ? "de soupe" : "de frites") : s ? "de thé" : "de boisson") +
              ".",
          );
        ((t.got[e] = 1), o.n--, o.n || (n.hold = null), sfx(700, 0.15));
      } else {
        const e = E();
        if (!e) return msg(a + " voudrait " + h(t.o) + " : " + u(t.o) + ".");
        if (t.got.o) return msg("Son plat est déjà servi.");
        if (e.b !== t.o.b || e.p !== t.o.p || e.t.join() !== t.o.t.join())
          return msg("Oups, ce n’est pas ma commande…");
        ((t.got.o = 1), (n.pl[n.sel] = null), sfx(784, 0.25));
      }
      ((o = null),
        g(),
        ((e) => e.got.o && (!e.fries || e.got.fries) && (!e.drink || e.got.drink))(t)
          ? (n.sv++, vib(15), sfx(880, 0.3), p(+e, !0))
          : v());
    },
    hint: () => {
      if (i) return;
      const e = y();
      if (!e) return msg("Tout est en route : patiente un instant.");
      spend(1) && ((o = e), v());
    },
  });
  const y = () => {
    const e = n.seat
      .map((e, t) => e && "wait" === e.st && { c: e, i: t })
      .filter(Boolean)
      .sort((e, t) => e.c.p - t.c.p);
    for (const { c: t, i: a } of e) {
      if (!t.got.o) {
        const e = t.o;
        let s = n.pl.findIndex(
          (t) => t && t.b === e.b && (!t.p || t.p === e.p) && t.t.every((t) => e.t.includes(t)),
        );
        if ((s < 0 && (s = n.pl.findIndex((e) => !e)), s < 0)) continue;
        ((n.sel = s), (n.hold = null));
        const o = n.pl[s];
        if (!o) return "I" + e.b;
        if (!o.p) {
          const t = n.gr.findIndex((t) => t && t.id === e.p && Date.now() - t.t0 >= 1600);
          if (t >= 0) return "G" + t;
          if (!n.gr.some((t) => t && t.id === e.p)) return "I" + e.p;
        }
        const i = e.t.find((e) => !o.t.includes(e));
        if (i) return "I" + i;
        if (o.p) return "C" + a;
        continue;
      }
      if (!t.fries || t.got.fries)
        if (!t.drink || t.got.drink);
        else {
          if (n.dr.n) return ((n.hold = "drink"), "C" + a);
          if (!n.dr.c) return "Idrink";
        }
      else {
        if (n.fr.n) return ((n.hold = "fries"), "C" + a);
        if (!n.fr.c) return "Ifries";
      }
    }
    return null;
  };
  ((app.innerHTML = `<div class="kzg ${["bu", "hd", "su"][t.rs]}" id="kzg"><div class="kzt"><button class="back" data-a="back" data-v="hub">‹ Cuisine</button><b>Niveau ${t.L + 1}</b><div class="kztr"><button class="hb hintb" data-a="hint" aria-label="Indice : coûte 1 bulle">${HBI(1)}</button><div class="chip">🫧 ${FLX()}</div></div></div><div class="kzsc">${kzBg(t.rs)}${kzAmb(t.rs, 3 * t.L)}<div class="kzcu" id="kzcu"></div><div class="kzct"></div></div><p class="m kzm" id="m" role="status" aria-live="polite"></p><div class="kzk" id="kzk"></div><div class="kzov" id="kzov" hidden></div></div>`),
    ($("#nav").hidden = !0),
    (mt = "m"));
  const v = () => {
    const e = $("#kzcu"),
      a = $("#kzk");
    if (!e || !a) return;
    const i = (e) => (o === e ? " hn" : ""),
      c = Date.now();
    (e.style.setProperty("--n", n.seat.length),
      (e.innerHTML = n.seat
        .map((e, t) => {
          if (!e) return '<div class="kzs"></div>';
          const a = KZL[e.lk],
            s = "wait" === e.st && e.p / e.m < 0.34,
            n = "out" === e.st ? "happy" : "sad" === e.st ? "sad" : s ? "lo" : "wait";
          return `<div class="kzs"><button class="kzp ${e.st}${s ? " lo" : ""}${i("C" + t)}" data-a="kzC" data-v="${t}" aria-label="${a.n} voudrait ${h(e.o)} : ${u(e.o)}${e.fries ? ", des frites" : ""}${e.drink ? ", une boisson" : ""}">\n<span class="kzb${e.got.o ? " ok" : ""}"><span class="kzbd">${kzDish(e.o)}</span><span class="kzbi">${[e.o.b, e.o.p, ...e.o.t].map((e) => `<i>${kzIco(e)}</i>`).join("")}</span>${e.fries || e.drink ? `<span class="kzbs">${e.fries ? `<i class="${e.got.fries ? "ok" : ""}">${kzFries()}</i>` : ""}${e.drink ? `<i class="${e.got.drink ? "ok" : ""}">${kzDrink()}</i>` : ""}</span>` : ""}</span>\n<span class="kzgy">${kzGuy(a, n, e.id)}</span><span class="kzn">${a.n}</span><span class="kzpt"><i style="width:${Math.max(0, (e.p / e.m) * 100).toFixed(0)}%"></i></span>${"out" === e.st ? '<span class="kzh">♥</span><span class="kzh h2">♥</span>' : ""}</button></div>`;
        })
        .join("")),
      (a.innerHTML = `${r ? `<div class="kznote"><span>${s ? "Bienvenue à bord ! Pose du riz ou une feuille d’algue sur l’assiette, puis touche un poisson : il se découpe sur la planche. Quand les tranches sont prêtes, touche-les, ajoute les garnitures et sers le client." : "Touche un pain pour le poser sur l’assiette, puis la viande pour la cuire sur le grill. Quand elle est dorée, touche-la, ajoute les garnitures demandées, puis touche le client pour le servir. Pas de chrono !"}</span><button data-a="kzX">OK</button></div>` : ""}\n<div class="kzst"><span>Servis <b>${n.sv}</b> / ${t.nc}</span><span>${t.allow ? "Départ permis : <b>" + Math.max(0, t.allow - n.ms) + "</b>" : "Aucun départ permis"}</span></div>\n<div class="kzrow"><div class="kzgr">${n.gr
        .map((e, t) => {
          const a = e && c - e.t0 >= 1600;
          return `<button class="kzgs${e ? (a ? " ok" : " ck") : ""}${i("G" + t)}" data-a="kzG" data-v="${t}" aria-label="${s ? "Planche" : "Grill"} ${t + 1}${e ? (a ? " : " + KZI[e.id].n + " cuite" : " : en cuisson") : " : libre"}">${e ? kzGrill(e.id, a) : ""}${e && !a ? '<i class="kzsm1"></i><i class="kzsm1 s2"></i>' : ""}</button>`;
        })
        .join(
          "",
        )}</div>\n${t.u.includes("fries") ? `<button class="kzfr${"fries" === n.hold ? " on" : ""}${n.fr.c ? " ck" : ""}" data-a="kzF" aria-label="${KZI.fries.n} prêtes : ${n.fr.n}"><span class="kzfi">${kzFries()}</span><b>${n.fr.n}</b></button>` : ""}${t.u.includes("drink") ? `<button class="kzfr${"drink" === n.hold ? " on" : ""}${n.dr.c ? " ck" : ""}" data-a="kzD" aria-label="${KZI.drink.n} prêtes : ${n.dr.n}"><span class="kzfi">${kzDrink()}</span><b>${n.dr.n}</b></button>` : ""}</div>\n<div class="kzpl">${n.pl.map((e, t) => `<button class="kzpa${n.sel !== t || n.hold ? "" : " on"}" data-a="kzP" data-v="${t}" aria-label="Assiette ${t + 1}${e ? " : " + u(e) : " : vide"}"><span class="kzdi${l === t + "" ? " pop" : ""}">${e ? kzDish(e) : ""}</span></button>`).join("")}<button class="kztr2" data-a="kzT" aria-label="Jeter le contenu de l’assiette">🗑</button></div>\n<div class="kzin">${t.u.map((e) => `<button class="kzi k${KZI[e].k}${i("I" + e)}" data-a="kzI" data-v="${e}"><span>${kzIco(e)}</span><small>${KZI[e].n}</small></button>`).join("")}</div>`),
      (l = ""));
  };
  (v(), n.seat.forEach((e, t) => d(() => f(t), 350 + 650 * t)));
}
var KZR = 0;
const KZSU = { sm: "#ff8a5a", th: "#d8304a", cv: "#ff9a6a" };
function kzSushi(e) {
  const t = e.t || [];
  let a = "";
  return "ni" === e.b
    ? ([28, 72].forEach((s) => {
        if (
          ((a += `<ellipse cx="${s}" cy="36" rx="19" ry="9" fill="#fbf8f0" stroke="#e4dccb"/><path d="M${s - 10} 36q2 -2 4 0M${s + 2} 39q2 -2 4 0M${s - 4} 41q2 -2 4 0" stroke="#e4dccb" stroke-width="1" fill="none"/>`),
          e.p)
        ) {
          const t = KZSU[e.p];
          a +=
            `<path d="M${s - 21} 31q21 -16 42 0q-6 6 -21 6t-21 -6z" fill="${t}"/>` +
            ("th" === e.p
              ? `<path d="M${s - 12} 28q12 -6 24 0" stroke="#ff7a8a" stroke-opacity=".5" stroke-width="2" fill="none"/>`
              : `<path d="M${s - 14} 29l6 -6M${s - 4} 27l6 -6M${s + 6} 28l6 -5" stroke="#fff" stroke-opacity=".75" stroke-width="2" stroke-linecap="round"/>`) +
            ("cv" === e.p ? `<path d="M${s + 19} 30l7 -5 -1 8z" fill="#e8582e"/>` : "");
        }
        (t.includes("av") &&
          (a += `<path d="M${s - 12} 24q12 -8 24 0q-12 4 -24 0z" fill="#9ad05a" stroke="#4a8a2a"/>`),
          t.includes("oe") &&
            (a += [-8, -3, 2, 7, -5, 0, 5]
              .map(
                (e, a) =>
                  `<circle cx="${s + e}" cy="${(a < 4 ? 22 : 19) - (t.includes("av") ? 3 : 0)}" r="2.4" fill="#ff7a2a" stroke="#d8501a" stroke-width=".5"/>`,
              )
              .join("")),
          t.includes("se") &&
            (a += [-10, -4, 3, 9]
              .map(
                (e, t) => `<ellipse cx="${s + e}" cy="${30 - (t % 2) * 2}" rx="1.3" ry=".8" fill="#fff6dc"/>`,
              )
              .join("")));
      }),
      t.includes("wa") && (a += '<path d="M46 44q4 -6 8 0q-4 3 -8 0z" fill="#8ad05a"/>'),
      `<svg class="kzd" viewBox="0 8 100 42" aria-hidden="true">${a}</svg>`)
    : ([20, 50, 80].forEach((s) => {
        ((a += `<ellipse cx="${s}" cy="40" rx="14" ry="4" fill="#000" opacity=".15"/><circle cx="${s}" cy="30" r="14" fill="#1f2a24"/><circle cx="${s}" cy="30" r="11" fill="#fbf8f0"/>`),
          e.p && (a += `<circle cx="${s - (t.includes("av") ? 2 : 0)}" cy="30" r="5" fill="${KZSU[e.p]}"/>`),
          t.includes("av") && (a += `<path d="M${s + 2} 25q5 3 3 9l-3 -1z" fill="#9ad05a"/>`),
          t.includes("oe") &&
            (a += [-6, -2, 2, 6]
              .map((e) => `<circle cx="${s + e}" cy="17.5" r="2.3" fill="#ff7a2a"/>`)
              .join("")),
          t.includes("se") &&
            (a += [-6, 0, 6]
              .map(
                (e) =>
                  `<ellipse cx="${s + e}" cy="${23 + Math.abs(e) / 3}" rx="1.2" ry=".7" fill="#e8d8a8"/>`,
              )
              .join("")));
      }),
      t.includes("wa") && (a += '<path d="M86 46q4 -6 8 0q-4 3 -8 0z" fill="#8ad05a"/>'),
      `<svg class="kzd" viewBox="0 10 100 40" aria-hidden="true">${a}</svg>`);
}
const kzMiso = () =>
  '<svg viewBox="0 0 40 44" aria-hidden="true"><path d="M20 4q-3 4 0 8M26 6q-3 4 0 8" stroke="#fff" stroke-opacity=".6" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M4 20h32q-2 18 -16 18t-16 -18z" fill="#a8302a"/><ellipse cx="20" cy="20" rx="16" ry="4" fill="#d9a85a"/><rect x="12" y="18" width="5" height="3" fill="#fff"/><path d="M22 19h6" stroke="#4aa83a" stroke-width="2"/></svg>';
const kzTea = () =>
  '<svg viewBox="0 0 40 44" aria-hidden="true"><path d="M17 6q-3 4 0 8M23 4q-3 4 0 8" stroke="#fff" stroke-opacity=".6" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M9 16h22l-2 22q-1 3 -4 3h-10q-3 0 -4 -3z" fill="#e8e0d0"/><ellipse cx="20" cy="17" rx="11" ry="3" fill="#8ac05a"/><path d="M11 26h18" stroke="#6a8aa8" stroke-width="2"/></svg>';
const kzIcoSu = (e) => {
  const t = (e) => `<svg viewBox="0 0 40 40" aria-hidden="true">${e}</svg>`;
  return {
    ni: t(
      '<ellipse cx="20" cy="24" rx="15" ry="9" fill="#fbf8f0" stroke="#e4dccb"/><path d="M12 23q2 -2 4 0M20 27q2 -2 4 0M24 21q2 -2 4 0" stroke="#d8cfb8" fill="none"/>',
    ),
    mk: t(
      '<rect x="7" y="9" width="26" height="22" rx="2" fill="#1f2a24"/><path d="M10 13h20M10 20h20M10 27h20" stroke="#3a4a3a" stroke-width="1.5"/>',
    ),
    sm: t(
      '<path d="M5 26q15 -16 30 -4q-2 6 -15 7t-15 -3z" fill="#ff8a5a"/><path d="M12 24l5 -5M18 24l5 -5M24 25l5 -5" stroke="#fff" stroke-opacity=".75" stroke-width="2"/>',
    ),
    th: t(
      '<rect x="6" y="14" width="28" height="15" rx="4" fill="#d8304a"/><path d="M10 19h20" stroke="#ff7a8a" stroke-opacity=".6" stroke-width="2"/>',
    ),
    cv: t(
      '<path d="M8 26q2 -14 16 -14q8 0 8 6q0 4 -6 4q-6 0 -8 6z" fill="#ff9a6a"/><path d="M14 16l2 8M20 13l1 8M26 14l-1 6" stroke="#fff" stroke-opacity=".6" stroke-width="1.6"/><path d="M8 26l-4 4 6 1z" fill="#e8582e"/>',
    ),
    wa: t(
      '<path d="M10 28q4 -16 10 -16t10 16q-10 4 -20 0z" fill="#8ad05a"/><path d="M16 22q4 -6 8 0" stroke="#bfe890" stroke-width="2" fill="none"/>',
    ),
    av: t(
      '<path d="M20 6c9 0 13 12 13 18c0 7 -6 11 -13 11s-13 -4 -13 -11c0 -6 4 -18 13 -18z" fill="#4a8a2a"/><path d="M20 9c7 0 10 10 10 15c0 5 -4 8 -10 8s-10 -3 -10 -8c0 -5 3 -15 10 -15z" fill="#bfe08a"/><circle cx="20" cy="25" r="5" fill="#8a5a30"/>',
    ),
    oe: t(
      `<path d="M6 22h28q-2 12 -14 12t-14 -12z" fill="#5a4a8a"/>${[
        [12, 20],
        [17, 18],
        [22, 19],
        [27, 20],
        [15, 15],
        [20, 14],
        [25, 16],
      ]
        .map(([e, t]) => `<circle cx="${e}" cy="${t}" r="3" fill="#ff7a2a"/>`)
        .join("")}`,
    ),
    se: t(
      `<path d="M10 14h20v18q0 3 -3 3h-14q-3 0 -3 -3z" fill="#fff" fill-opacity=".7" stroke="#c8d2e8"/>${[
        [15, 24],
        [20, 28],
        [25, 22],
        [18, 20],
        [23, 30],
      ]
        .map(([e, t]) => `<ellipse cx="${e}" cy="${t}" rx="1.8" ry="1" fill="#d9c08a"/>`)
        .join("")}<rect x="9" y="9" width="22" height="5" rx="2" fill="#2a2a3a"/>`,
    ),
    fries: t(
      '<path d="M6 18h28q-2 14 -14 14t-14 -14z" fill="#a8302a"/><ellipse cx="20" cy="18" rx="14" ry="3.5" fill="#d9a85a"/>',
    ),
    drink: t(
      '<path d="M8 12h24q0 12 -6 14l-2 8h-8l-2 -8q-6 -2 -6 -14z" fill="#3a6a5a"/><path d="M30 14q6 0 5 6t-6 4" stroke="#3a6a5a" stroke-width="3" fill="none"/>',
    ),
  }[e];
};
function kzGrillSu(e, t) {
  const a = KZSU[e];
  return t
    ? `<svg viewBox="0 0 40 30" aria-hidden="true">${[8, 18, 28].map((e, t) => `<path d="M${e - 7} ${19 - t}q7 -8 14 0q-2 4 -7 4t-7 -4z" fill="${a}" stroke="#fff" stroke-opacity=".5"/>`).join("")}</svg>`
    : `<svg viewBox="0 0 40 30" aria-hidden="true"><path d="M4 18q16 -14 32 -2q-2 6 -16 7t-16 -5z" fill="${a}"/><path d="M10 16l4 -4M16 16l4 -4M22 17l4 -4" stroke="#fff" stroke-opacity=".6" stroke-width="1.6"/></svg>`;
}
function kzBgSu() {
  const e = (e, t) =>
      `<path d="M${e} ${t - 24}v10" stroke="#3a2a1a" stroke-width="2"/><circle cx="${e}" cy="${t}" r="30" fill="#ffc870" opacity=".16"/><circle cx="${e}" cy="${t}" r="14" fill="#ffcf7a"/><circle cx="${e - 4}" cy="${t - 4}" r="5" fill="#fff6d0" opacity=".8"/>`,
    t = (e, t) =>
      `<path d="M${e} ${t - 16}v4" stroke="#3a2a1a" stroke-width="2"/><rect x="${e - 9}" y="${t - 12}" width="18" height="4" rx="1" fill="#2a1a10"/><ellipse cx="${e}" cy="${t + 4}" rx="11" ry="14" fill="#e8402e"/><path d="M${e - 10} ${t - 2}h20M${e - 11} ${t + 4}h22M${e - 10} ${t + 10}h20" stroke="#b02a1e" stroke-width="1.2"/><rect x="${e - 9}" y="${t + 17}" width="18" height="4" rx="1" fill="#2a1a10"/><circle cx="${e}" cy="${t + 4}" r="22" fill="#ff7a5a" opacity=".14"/>`;
  return `<svg class="kzbg" viewBox="0 -70 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="kzus" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c1034"/><stop offset=".6" stop-color="#2a2a6a"/><stop offset="1" stop-color="#4a3a7a"/></linearGradient><linearGradient id="kzuw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a3a5a"/><stop offset="1" stop-color="#0c1c34"/></linearGradient><linearGradient id="kzut" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7af0e0" stop-opacity=".75"/><stop offset="1" stop-color="#2aa8b8" stop-opacity=".75"/></linearGradient></defs>\n<rect y="-70" width="400" height="400" fill="url(#kzus)"/>${[...Array(34)].map((e, t) => `<circle cx="${(73 * t + 29) % 400}" cy="${((41 * t + 13) % 200) - 60}" r="${0.8 + (t % 3) * 0.5}" fill="#fff" opacity="${0.45 + (t % 2) * 0.35}"/>`).join("")}<circle cx="300" cy="10" r="16" fill="#fff3c8"/><circle cx="300" cy="10" r="40" fill="#fff3c8" opacity=".1"/>\n<path d="M0 150l30 -26 22 10 26 -30 30 34 20 -8 20 20z" fill="#1c2a44"/><path d="M60 118q-6 -18 2 -26M62 96q-10 -4 -16 2M62 96q8 -6 14 0M62 96q0 -8 6 -12" stroke="#1c2a44" stroke-width="3" fill="none"/><path d="M250 150l40 -36 30 16 40 -24 40 44z" fill="#1c2a44"/><rect x="200" y="132" width="40" height="8" fill="#2a3a54"/><rect x="214" y="122" width="12" height="10" fill="#2a3a54"/><circle cx="220" cy="126" r="2" fill="#ffd36b"/>\n<rect x="0" y="150" width="400" height="90" fill="url(#kzuw)"/>${[...Array(9)].map((e, t) => `<path d="M${280 + (t % 3) * 10 - 2 * t} ${158 + 8 * t}h${30 - 2 * t}" stroke="#fff3c8" stroke-opacity="${0.5 - 0.04 * t}" stroke-width="2.4" stroke-linecap="round"/>`).join("")}${[...Array(10)].map((e, t) => `<path d="M${(47 * t) % 400} ${170 + ((23 * t) % 60)}q8 -4 16 0" stroke="#7ab0d8" stroke-opacity=".35" stroke-width="1.6" fill="none"/>`).join("")}\n<rect x="10" y="-70" width="16" height="306" fill="#5a3a24"/><rect x="374" y="-70" width="16" height="306" fill="#5a3a24"/><rect x="0" y="-34" width="400" height="20" fill="#7a4a2a"/><path d="M0 -14h400" stroke="#3a2414" stroke-width="3"/>${[...Array(16)].map((e, t) => `<circle cx="${12 + 25 * t}" cy="-8" r="2.4" fill="#ff7ac8"/><circle cx="${12 + 25 * t}" cy="-8" r="6" fill="#ff7ac8" opacity=".25"/>`).join("")}\n<path d="M165 -14v18M235 -14v18" stroke="#3a2a1a" stroke-width="2"/><rect x="150" y="4" width="100" height="26" rx="4" fill="#1a1020" stroke="#3a2a3a" stroke-width="2"/><text x="200" y="23" text-anchor="middle" font-family="monospace" font-size="15" font-weight="700" letter-spacing="3" fill="#ff5aa8">OUVERT</text><rect x="146" y="0" width="108" height="34" rx="6" fill="#ff5aa8" opacity=".12"/>\n${e(100, 22)}${e(300, 22)}${t(46, 10)}${t(354, 10)}\n<rect x="30" y="54" width="340" height="7" fill="#6a4228"/>${[
    ...Array(18),
  ]
    .map((e, t) => {
      const a = 40 + 18 * t,
        s = ["#2a5a3a", "#3a2a1a", "#7a2a2a", "#2a5a3a", "#d8c87a"][t % 5];
      return `<rect x="${a}" y="${36 - (t % 3) * 3}" width="8" height="${18 + (t % 3) * 3}" rx="2" fill="${s}"/><rect x="${a + 2}" y="${30 - (t % 3) * 3}" width="4" height="7" fill="${s}"/><rect x="${a + 1}" y="44" width="6" height="6" fill="#f2e8d0" opacity=".85"/>`;
    })
    .join(
      "",
    )}\n<g transform="translate(84 66)"><path d="M14 -5v13M106 -5v13" stroke="#c9a070" stroke-width="2"/><circle cx="14" cy="8" r="2.4" fill="#8a6a40"/><circle cx="106" cy="8" r="2.4" fill="#8a6a40"/>\n<rect x="0" y="8" width="120" height="50" rx="5" fill="#3a2414" stroke="#c9935a" stroke-width="2.5"/><rect x="5" y="13" width="110" height="40" rx="3" fill="#4a2e1a"/>${[19, 27, 35, 43].map((e) => `<path d="M8 ${e}q30 -2 52 0t52 0" stroke="#5a3a24" stroke-width="1.2" fill="none"/>`).join("")}\n<path d="M10 49q8 -6 16 0t16 0" stroke="#7ab0d8" stroke-opacity=".55" stroke-width="1.6" fill="none"/>\n<text x="54" y="35" text-anchor="middle" font-family="'Hiragino Mincho ProN','Yu Mincho','Noto Serif JP',Georgia,serif" font-size="20" font-weight="700" letter-spacing="1.5" fill="#f6e6c4">Sushi</text>\n<text x="54" y="49" text-anchor="middle" font-family="'Hiragino Mincho ProN','Yu Mincho','Noto Serif JP',Georgia,serif" font-size="9.5" font-style="italic" letter-spacing="1.2" fill="#ff8a6a">des Vagues</text>\n<rect x="95" y="22" width="15" height="15" rx="2.5" fill="#c2302a"/><circle cx="102.5" cy="29.5" r="4.2" fill="none" stroke="#f6e6c4" stroke-width="1.4"/><path d="M100 29.5q2.5 -3 5 0" stroke="#f6e6c4" stroke-width="1.2" fill="none"/>\n<rect x="0" y="8" width="120" height="50" rx="5" fill="#ffcf7a" opacity=".07"/></g>\n<rect x="296" y="84" width="72" height="54" rx="4" fill="url(#kzut)" stroke="#bff6ff" stroke-width="2"/>${[
    [312, 104, 1],
    [340, 120, -1],
    [350, 96, 1],
  ]
    .map(
      ([e, t, a]) =>
        `<path d="M${e} ${t}q${8 * a} -6 ${16 * a} 0q${-8 * a} 6 ${-16 * a} 0zM${e} ${t}l${-6 * a} -4v8z" fill="#ff9a6a" opacity=".85"/>`,
    )
    .join(
      "",
    )}<path d="M300 92q30 -6 64 0" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>\n<g opacity=".95">${[
    [372, -60, 16],
    [352, -56, 12],
    [388, -40, 14],
    [360, -34, 10],
    [338, -46, 9],
    [392, -62, 10],
  ]
    .map(([e, t, a]) => `<circle cx="${e}" cy="${t}" r="${a}" fill="#ffb3cf"/>`)
    .join(
      "",
    )}<path d="M400 -50q-30 -4 -46 6" stroke="#4a2a2a" stroke-width="4" fill="none"/></g>\n<rect x="0" y="236" width="400" height="94" fill="#6a4228"/>${[...Array(6)].map((e, t) => `<path d="M0 ${246 + 14 * t}h400" stroke="#4a2a18" stroke-width="2"/>`).join("")}\n<path d="M0 226h400" stroke="#c9935a" stroke-width="4"/>${[...Array(11)].map((e, t) => `<path d="M${40 * t} 226v10" stroke="#c9935a" stroke-width="3"/>`).join("")}</svg>`;
}
function kzAmbSu(e) {
  const t = (t, a, s) => `<span class="kzag">${kzGuy(KZL[(e + t) % KZL.length], a, "a" + s)}</span>`,
    a = kzSushi({ b: "mk", p: "sm", t: ["av"] }),
    s = kzSushi({ b: "ni", p: "th", t: [] }),
    n =
      '<svg class="kzat" viewBox="0 0 80 40" aria-hidden="true"><rect x="2" y="4" width="76" height="8" rx="2" fill="#c9935a"/><path d="M14 12v26M66 12v26" stroke="#6a4228" stroke-width="4"/></svg>',
    o = (e, t) => `<span class="kztk" style="animation-delay:${t}s">${e}</span>`,
    i = (e, t) => `<span class="kzaf ${t || ""}">${e}</span>`;
  return `<div class="kzam" aria-hidden="true">${[...Array(9)].map((e, t) => `<i class="kzpe" style="left:${(37 * t + 11) % 96}%;animation-delay:${1.7 * -t}s;animation-duration:${9 + (t % 4) * 2}s"></i>`).join("")}<div class="kzwk kzcat" style="bottom:calc(25.5% - 14px);animation-duration:40s;animation-delay:-12s"><span class="kzwb"><svg viewBox="0 0 50 30" aria-hidden="true"><path d="M8 22q0 -10 14 -10h12q8 0 8 6v6q0 3 -3 3h-28q-3 0 -3 -5z" fill="#fbf3e6" stroke="#c9a070" stroke-width="1"/><path d="M16 13q6 -2 10 2q-2 6 -10 4z" fill="#f2a24a"/><circle cx="40" cy="12" r="7" fill="#fbf3e6" stroke="#c9a070" stroke-width="1"/><path d="M35 7l1 -6 4 4zM42 6l4 -5 1 6z" fill="#f2a24a"/><path d="M8 20q-8 -2 -6 -12" stroke="#3a2a2a" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="42" cy="12" r="1.3" fill="#3a2a2a"/><circle cx="38" cy="12" r="1.3" fill="#3a2a2a"/><path d="M14 27v3M22 27v3M32 27v3M38 27v3" stroke="#e8dcc8" stroke-width="3"/></svg></span></div>\n<div class="kzaz z1 bt"><div class="kzbob"><svg class="kzboat" viewBox="0 0 130 46" aria-hidden="true"><path d="M2 12h126l-16 22q-2 3 -6 3h-82q-4 0 -6 -3z" fill="#8a5a30"/><path d="M2 12h126" stroke="#c9935a" stroke-width="4" stroke-linecap="round"/><path d="M14 20h102" stroke="#6a4228" stroke-width="2"/><path d="M120 12v-26" stroke="#5a3a24" stroke-width="2.5"/><circle cx="120" cy="-16" r="5" fill="#ffcf7a"/><circle cx="120" cy="-16" r="12" fill="#ffcf7a" opacity=".25"/><path d="M10 42q10 -4 20 0t20 0t20 0t20 0t20 0t16 0" stroke="#9ad8ff" stroke-opacity=".45" stroke-width="2" fill="none"/></svg>${n}<div class="kzaw eat">${t(2, "happy", 1)}${i(a)}</div><div class="kzaw eat d2 fl">${t(6, "wait", 2)}${i(kzTea(), "dk")}</div>${o("…", 1)}${o("Oishii !", 6)}</div></div>\n<div class="kzaz z2 bt"><div class="kzbob b2"><svg class="kzboat" viewBox="0 0 130 46" aria-hidden="true"><path d="M2 12h126l-16 22q-2 3 -6 3h-82q-4 0 -6 -3z" fill="#8a5a30"/><path d="M2 12h126" stroke="#c9935a" stroke-width="4" stroke-linecap="round"/><path d="M14 20h102" stroke="#6a4228" stroke-width="2"/><path d="M120 12v-26" stroke="#5a3a24" stroke-width="2.5"/><circle cx="120" cy="-16" r="5" fill="#ffcf7a"/><circle cx="120" cy="-16" r="12" fill="#ffcf7a" opacity=".25"/><path d="M10 42q10 -4 20 0t20 0t20 0t20 0t20 0t16 0" stroke="#9ad8ff" stroke-opacity=".45" stroke-width="2" fill="none"/></svg>${n}<div class="kzaw eat d3">${t(9, "happy", 3)}${i(s)}</div><div class="kzaw eat fl">${t(4, "wait", 4)}${i(a, "r")}</div>${o("♥", 3.5)}${o("♪", 8)}</div></div></div>`;
}
function kzAmb(e, t) {
  if (2 === e) return kzAmbSu(t);
  const a = 1 === e,
    s = (e, a, s) => `<span class="kzag">${kzGuy(KZL[(t + e) % KZL.length], a, "a" + s)}</span>`,
    n = kzDish({ b: "bb", p: "vi", t: ["la", "to"] }),
    o = kzDish({ b: "ph", p: "sa", t: ["ke", "mo"] }),
    i = `<svg class="kzat" viewBox="0 0 80 40" aria-hidden="true"><ellipse cx="40" cy="8" rx="36" ry="7" fill="${a ? "#c9935a" : "#f2d8b0"}"/><ellipse cx="40" cy="8" rx="36" ry="7" fill="none" stroke="${a ? "#8a5a30" : "#c9a070"}" stroke-width="2"/><path d="M40 14v24M28 38h24" stroke="${a ? "#6a4424" : "#8a7ad8"}" stroke-width="4" stroke-linecap="round"/><ellipse cx="26" cy="7" rx="9" ry="3" fill="#fff"/><ellipse cx="54" cy="7" rx="9" ry="3" fill="#fff"/></svg>`,
    r = (e, t) => `<span class="kztk" style="animation-delay:${t}s">${e}</span>`,
    l = (e, t) => `<span class="kzaf ${t || ""}">${e}</span>`;
  return `<div class="kzam" aria-hidden="true">${(a
    ? `<div class="kzaz z1"><span class="kzbench"></span><div class="kzaw eat">${s(1, "happy", 1)}${l(o)}</div><div class="kzaw eat d2">${s(4, "wait", 2)}${l(o, "r")}</div>${r("…", 1)}${r("♪", 5.5)}</div>\n   <div class="kzaz z2">${i}<div class="kzaw eat d3">${s(7, "happy", 3)}${l(kzDrink(), "dk")}</div>${r("♥", 3)}</div>\n   <div class="kzwk" style="bottom:calc(26px + 150px);animation-duration:30s"><span class="kzwb">${s(2, "wait", 4)}</span></div>\n   <div class="kzwk rv" style="bottom:calc(26px + 158px);animation-duration:38s;animation-delay:-14s"><span class="kzwb">${s(9, "happy", 5)}</span></div>`
    : `<div class="kzaz z1">${i}<div class="kzaw eat">${s(1, "happy", 1)}${l(n)}</div><div class="kzaw eat d2 fl">${s(5, "wait", 2)}${l(n, "r")}</div>${r("…", 1)}${r("Miam !", 6)}</div>\n   <div class="kzaz z2">${i}<div class="kzaw eat d3">${s(3, "wait", 3)}${l(kzFries())}</div><div class="kzaw eat fl">${s(8, "happy", 4)}${l(n, "r")}</div>${r("♥", 3.5)}${r("…", 8)}</div>\n   <div class="kzwk" style="bottom:calc(26px + 152px);animation-duration:34s;animation-delay:-6s"><span class="kzwb">${s(6, "happy", 5)}<span class="kzty">${n}</span></span></div>`
  )
    .split("\n")
    .map((e) => e.trim())
    .sort((e, t) => (t.startsWith('<div class="kzwk') ? 1 : 0) - (e.startsWith('<div class="kzwk') ? 1 : 0))
    .join("")}</div>`;
}
var kzMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  off: 0,
  k: "bu",
  SG: {
    bu: {
      E: 0.3,
      sw: 0.32,
      CH: [
        [48, [60, 64, 67]],
        [45, [60, 64, 69]],
        [41, [60, 65, 69]],
        [43, [59, 62, 67]],
        [48, [60, 64, 67]],
        [45, [60, 64, 69]],
        [38, [62, 65, 69, 72]],
        [43, [59, 62, 65, 67]],
      ],
      BW: [
        [0, 4, 7, 9],
        [0, 3, 7, 10],
        [0, 4, 7, 9],
        [0, 4, 7, 9],
        [0, 4, 7, 9],
        [0, 3, 7, 10],
        [0, 3, 7, 10],
        [0, 4, 7, 10],
      ],
      PH: [
        [
          [0, 72, 2],
          [2, 76, 2],
          [4, 79, 3],
          [7, 76, 1],
        ],
        [
          [0, 81, 2],
          [2, 79, 2],
          [4, 76, 4],
        ],
        [
          [0, 77, 2],
          [2, 81, 2],
          [4, 84, 3],
          [7, 81, 1],
        ],
        [
          [0, 79, 4],
          [4, 74, 2],
          [6, 77, 2],
        ],
        [
          [0, 76, 2],
          [2, 79, 2],
          [4, 84, 2],
          [6, 83, 2],
        ],
        [
          [0, 81, 3],
          [3, 79, 1],
          [4, 76, 4],
        ],
        [
          [0, 77, 2],
          [2, 76, 2],
          [4, 74, 2],
          [6, 77, 2],
        ],
        [[0, 79, 6]],
      ],
    },
    su: {
      E: 0.1442,
      sw: 0,
      n: 16,
      CH: [
        [39, [54, 58, 61, 65]],
        [44, [54, 58, 60, 63]],
        [39, [54, 58, 61, 65]],
        [44, [54, 58, 60, 63]],
        [35, [54, 58, 59, 63]],
        [46, [53, 56, 61, 65]],
        [44, [54, 59, 63, 66]],
        [46, [53, 56, 58, 62]],
      ],
      PH: [
        [
          [0, 75, 2],
          [2, 78, 2],
          [4, 80, 1],
          [5, 78, 1],
          [6, 75, 2],
          [10, 73, 2],
          [12, 75, 4],
        ],
        [
          [0, 70, 2],
          [3, 73, 1],
          [4, 75, 2],
          [6, 78, 4],
          [12, 80, 2],
          [14, 78, 2],
        ],
        [
          [0, 82, 3],
          [3, 80, 1],
          [4, 78, 2],
          [6, 80, 2],
          [8, 75, 6],
        ],
        [
          [4, 73, 2],
          [6, 75, 2],
          [8, 78, 2],
          [10, 80, 2],
          [12, 82, 4],
        ],
        [
          [0, 85, 4],
          [4, 82, 2],
          [6, 80, 2],
          [8, 78, 4],
          [12, 75, 4],
        ],
        [
          [0, 77, 2],
          [2, 78, 2],
          [4, 80, 4],
          [8, 77, 2],
          [10, 73, 2],
          [12, 70, 4],
        ],
        [
          [0, 71, 2],
          [2, 75, 2],
          [4, 78, 2],
          [6, 82, 2],
          [8, 80, 6],
          [14, 78, 2],
        ],
        [
          [0, 77, 4],
          [4, 74, 2],
          [6, 73, 2],
          [8, 70, 8],
        ],
      ],
    },
    pe: {
      E: 0.42,
      sw: 0,
      CH: [
        [38, [62, 66, 69, 73]],
        [35, [62, 66, 69, 71]],
        [31, [62, 66, 67, 71]],
        [33, [61, 64, 66, 69]],
        [40, [62, 64, 67, 71]],
        [42, [61, 64, 66, 69]],
        [31, [62, 66, 67, 71]],
        [33, [61, 64, 69, 73]],
      ],
      PH: [
        [[2, 78, 4]],
        [
          [0, 76, 2],
          [4, 74, 4],
        ],
        [
          [2, 74, 2],
          [4, 71, 4],
        ],
        [[0, 73, 6]],
        [[2, 76, 4]],
        [
          [0, 78, 2],
          [4, 81, 4],
        ],
        [
          [2, 79, 2],
          [4, 78, 4],
        ],
        [[0, 76, 6]],
      ],
    },
    fe: {
      E: 0.2,
      sw: 0.12,
      CH: [
        [43, [59, 62, 67, 71]],
        [40, [59, 64, 67, 71]],
        [48, [60, 64, 67, 72]],
        [50, [62, 66, 69, 74]],
        [43, [59, 62, 67, 71]],
        [40, [59, 64, 67, 71]],
        [48, [60, 64, 67, 72]],
        [50, [62, 66, 69, 74]],
      ],
      PH: [
        [
          [0, 79, 1],
          [2, 79, 1],
          [4, 83, 2],
          [6, 81, 1],
          [7, 79, 1],
        ],
        [
          [0, 76, 2],
          [2, 79, 2],
          [4, 76, 2],
          [6, 74, 2],
        ],
        [
          [0, 76, 1],
          [2, 79, 1],
          [4, 84, 2],
          [6, 83, 1],
          [7, 79, 1],
        ],
        [
          [0, 81, 2],
          [2, 78, 2],
          [4, 74, 4],
        ],
        [
          [0, 79, 1],
          [2, 83, 1],
          [4, 86, 2],
          [6, 83, 1],
          [7, 79, 1],
        ],
        [
          [0, 88, 2],
          [2, 86, 2],
          [4, 83, 2],
          [6, 79, 2],
        ],
        [
          [0, 84, 1],
          [2, 83, 1],
          [4, 79, 2],
          [6, 76, 2],
        ],
        [
          [0, 78, 2],
          [2, 81, 2],
          [4, 79, 4],
        ],
      ],
    },
    p2: {
      E: 0.6,
      sw: 0,
      CH: [
        [50, [62, 66, 69, 74]],
        [52, [64, 69, 71, 76]],
        [47, [62, 66, 71, 74]],
        [54, [66, 69, 71, 78]],
        [50, [62, 69, 74, 78]],
        [52, [64, 69, 71, 76]],
        [57, [66, 69, 74, 81]],
        [50, [62, 66, 69, 74]],
      ],
      PH: [
        [
          [0, 78, 3],
          [3, 76, 1],
          [4, 74, 4],
        ],
        [
          [0, 76, 2],
          [2, 78, 2],
          [4, 81, 4],
        ],
        [
          [0, 83, 3],
          [3, 81, 1],
          [4, 78, 4],
        ],
        [
          [0, 76, 3],
          [3, 74, 1],
          [4, 71, 4],
        ],
        [
          [0, 74, 2],
          [2, 78, 2],
          [4, 81, 2],
          [6, 78, 2],
        ],
        [
          [0, 76, 4],
          [4, 74, 2],
          [6, 71, 2],
        ],
        [
          [0, 81, 3],
          [3, 78, 1],
          [4, 76, 4],
        ],
        [[0, 74, 8]],
      ],
    },
    hd: {
      E: 0.27,
      sw: 0,
      CH: [
        [41, [64, 65, 69, 72]],
        [38, [60, 62, 65, 69]],
        [43, [62, 65, 67, 70]],
        [36, [64, 67, 70, 72]],
        [41, [64, 65, 69, 72]],
        [46, [62, 65, 69, 70]],
        [43, [62, 65, 67, 70]],
        [36, [64, 67, 70, 72]],
      ],
      PH: [
        [
          [0, 81, 3],
          [3, 79, 1],
          [4, 77, 4],
        ],
        [
          [0, 76, 2],
          [2, 77, 2],
          [4, 81, 4],
        ],
        [
          [0, 79, 3],
          [3, 77, 1],
          [4, 74, 2],
          [6, 77, 2],
        ],
        [[0, 76, 8]],
        [
          [0, 72, 2],
          [2, 77, 2],
          [4, 81, 3],
          [7, 84, 1],
        ],
        [
          [0, 82, 4],
          [4, 81, 2],
          [6, 79, 2],
        ],
        [
          [0, 77, 3],
          [3, 79, 1],
          [4, 81, 2],
          [6, 79, 2],
        ],
        [
          [0, 79, 4],
          [4, 76, 4],
        ],
      ],
    },
  },
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    t.gain.value = 0;
    const a = e.createBiquadFilter();
    ((a.type = "lowpass"), (a.frequency.value = 5200), (a.Q.value = 0.3), a.connect(t), t.connect(mg));
    const s = e.createDelay(1),
      n = e.createGain(),
      o = e.createBiquadFilter(),
      i = e.createGain();
    ((s.delayTime.value = 0.36),
      (n.gain.value = 0.26),
      (o.type = "lowpass"),
      (o.frequency.value = 2600),
      (i.gain.value = 0.26),
      s.connect(o),
      o.connect(n),
      n.connect(s),
      o.connect(i),
      i.connect(a));
    const r = e.createGain();
    (r.connect(a), r.connect(s));
    const l = e.createGain();
    l.connect(a);
    const c = e.createGain();
    ((c.gain.value = 0.8), c.connect(a), (e.createGain().gain.value = 0.25), c.connect(s));
    const d = {};
    for (const e in this.SG) {
      d[e] = {};
      const t = this.SG[e].n || 8;
      this.SG[e].PH.forEach((a, s) =>
        a.forEach(([a, n, o]) => {
          d[e][s * t + a] = [n, o];
        }),
      );
    }
    this.L = { out: t, bus: r, dry: l, amb: c, M: d };
  },
  env(e, t, a, s, n) {
    (e.gain.setValueAtTime(1e-4, t),
      e.gain.exponentialRampToValueAtTime(a, t + s),
      e.gain.exponentialRampToValueAtTime(1e-4, t + n));
  },
  vib(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1],
      [1.004, 0.6],
      [4, 0.05],
    ].forEach(([i, r]) => {
      const l = o.createOscillator(),
        c = o.createGain();
      ((l.type = "sine"),
        (l.frequency.value = e * i),
        this.env(c, t, s * r, 0.006, a + 0.7),
        l.connect(c),
        c.connect(n),
        l.start(t),
        l.stop(t + a + 0.8));
    });
  },
  ep(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1],
      [2, 0.25],
      [3, 0.06],
    ].forEach(([i, r]) => {
      const l = o.createOscillator(),
        c = o.createGain();
      ((l.type = "sine"),
        (l.frequency.value = e * i),
        this.env(c, t, s * r, 0.012, a),
        l.connect(c),
        c.connect(n),
        l.start(t),
        l.stop(t + a + 0.05));
    });
  },
  bass(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain(),
      l = o.createBiquadFilter();
    ((i.type = "triangle"),
      (i.frequency.value = e),
      (l.type = "lowpass"),
      (l.frequency.value = 900),
      this.env(r, t, s, 0.01, a),
      i.connect(l),
      l.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + a + 0.05));
  },
  fl(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain(),
      l = o.createOscillator(),
      c = o.createGain();
    ((i.type = "sine"),
      (i.frequency.value = e),
      (l.frequency.value = 5.2),
      (c.gain.value = 0.006 * e),
      l.connect(c),
      c.connect(i.frequency),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.exponentialRampToValueAtTime(s, t + 0.07),
      r.gain.setValueAtTime(s, t + Math.max(0.08, a - 0.12)),
      r.gain.exponentialRampToValueAtTime(1e-4, t + a + 0.25),
      i.connect(r),
      r.connect(n),
      i.start(t),
      l.start(t),
      i.stop(t + a + 0.3),
      l.stop(t + a + 0.3));
  },
  talk(e, t) {
    const a = AC,
      s = 2 + Math.floor(4 * Math.random()),
      n = 150 + 120 * Math.random(),
      o = a.createStereoPanner ? a.createStereoPanner() : null;
    let i = e;
    const r = a.createBiquadFilter();
    ((r.type = "bandpass"), (r.Q.value = 4), (r.frequency.value = 700 + 700 * Math.random()));
    const l = a.createGain();
    ((l.gain.value = 1),
      r.connect(l),
      o ? ((o.pan.value = 1.6 * Math.random() - 0.8), l.connect(o), o.connect(t)) : l.connect(t));
    for (let e = 0; e < s; e++) {
      const e = 0.09 + 0.14 * Math.random(),
        t = a.createOscillator(),
        s = a.createGain(),
        o = n * (0.9 + 0.25 * Math.random());
      ((t.type = "sawtooth"),
        t.frequency.setValueAtTime(o, i),
        t.frequency.linearRampToValueAtTime(o * (0.85 + 0.3 * Math.random()), i + e),
        s.gain.setValueAtTime(1e-4, i),
        s.gain.exponentialRampToValueAtTime(0.006, i + 0.03),
        s.gain.exponentialRampToValueAtTime(1e-4, i + e),
        t.connect(s),
        s.connect(r),
        t.start(i),
        t.stop(i + e + 0.02),
        (i += e + 0.03 + 0.06 * Math.random()));
    }
  },
  clink(e, t, a = 0.012) {
    const s = AC,
      n = 2300 + 1500 * Math.random();
    [
      [1, 1],
      [2.7, 0.3],
    ].forEach(([o, i]) => {
      const r = s.createOscillator(),
        l = s.createGain();
      ((r.type = "sine"),
        (r.frequency.value = n * o),
        this.env(l, e, a * i, 0.002, 0.25),
        r.connect(l),
        l.connect(t),
        r.start(e),
        r.stop(e + 0.3));
    });
  },
  ding(e, t) {
    [1318.5, 1760].forEach((a, s) => {
      const n = AC,
        o = n.createOscillator(),
        i = n.createGain();
      ((o.type = "sine"),
        (o.frequency.value = a),
        this.env(i, e + 0.12 * s, 0.02, 0.004, 0.9),
        o.connect(i),
        i.connect(t),
        o.start(e + 0.12 * s),
        o.stop(e + 0.12 * s + 1));
    });
  },
  amb(e, t, a) {
    if ("fe" === this.k) return;
    if ("p2" === this.k) return void (Math.random() < 0.04 && this.plop(e + 0.3 * Math.random(), a.amb));
    if ("pe" === this.k)
      return (
        Math.random() < 0.05 && this.plop(e + 0.3 * Math.random(), a.amb),
        void (Math.random() < 0.008 && this.owl(e, a.amb))
      );
    (Math.random() < 0.22 && this.talk(e, a.amb),
      Math.random() < 0.05 && this.clink(e + 0.2 * Math.random(), a.amb),
      0 === t && Math.random() < ("su" === this.k ? 0.02 : 0.04) && this.ding(e, a.amb),
      "hd" === this.k &&
        4 === t &&
        Math.random() < 0.03 &&
        (this.clink(e, a.amb, 0.02), this.clink(e + 0.09, a.amb, 0.02)));
  },
  clav(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain(),
      l = o.createBiquadFilter();
    ((i.type = "sawtooth"),
      (i.frequency.value = e),
      (l.type = "lowpass"),
      l.frequency.setValueAtTime(2600, t),
      l.frequency.exponentialRampToValueAtTime(700, t + a),
      this.env(r, t, s, 0.004, a),
      i.connect(l),
      l.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + a + 0.05));
  },
  brass(e, t, a, s, n) {
    const o = AC,
      i = o.createBiquadFilter(),
      r = o.createGain();
    ((i.type = "lowpass"),
      i.frequency.setValueAtTime(600, t),
      i.frequency.linearRampToValueAtTime(2200, t + 0.06),
      i.frequency.linearRampToValueAtTime(1400, t + a),
      i.connect(r),
      r.connect(n),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.exponentialRampToValueAtTime(s, t + 0.04),
      r.gain.setValueAtTime(s, t + Math.max(0.05, a - 0.06)),
      r.gain.exponentialRampToValueAtTime(1e-4, t + a + 0.12),
      [1, 1.006].forEach((s) => {
        const n = o.createOscillator();
        ((n.type = "sawtooth"), (n.frequency.value = e * s), n.connect(i), n.start(t), n.stop(t + a + 0.15));
      }));
  },
  sax(e, t, a, s, n) {
    const o = AC,
      i = o.createBiquadFilter(),
      r = o.createGain(),
      l = o.createOscillator(),
      c = o.createGain();
    ((i.type = "lowpass"),
      (i.Q.value = 2),
      i.frequency.setValueAtTime(900, t),
      i.frequency.linearRampToValueAtTime(2e3, t + 0.05),
      i.frequency.linearRampToValueAtTime(1500, t + a),
      i.connect(r),
      r.connect(n),
      (l.frequency.value = 5.6),
      (c.gain.value = 0.007 * e),
      l.connect(c),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.exponentialRampToValueAtTime(s, t + 0.035),
      r.gain.setValueAtTime(0.85 * s, t + Math.max(0.05, a - 0.05)),
      r.gain.exponentialRampToValueAtTime(1e-4, t + a + 0.1),
      [
        ["sawtooth", 1, 1],
        ["square", 1.003, 0.5],
      ].forEach(([s, n, r]) => {
        const l = o.createOscillator(),
          d = o.createGain();
        ((l.type = s),
          (l.frequency.value = e * n),
          c.connect(l.frequency),
          (d.gain.value = r),
          l.connect(d),
          d.connect(i),
          l.start(t),
          l.stop(t + a + 0.15));
      }),
      l.start(t),
      l.stop(t + a + 0.15));
  },
  koto(e, t, a, s) {
    const n = AC;
    [
      [1, 1, 0.6],
      [2, 0.35, 0.3],
      [3, 0.12, 0.15],
    ].forEach(([o, i, r]) => {
      const l = n.createOscillator(),
        c = n.createGain();
      ((l.type = 1 === o ? "triangle" : "sine"),
        l.frequency.setValueAtTime(e * o * 1.01, t),
        l.frequency.exponentialRampToValueAtTime(e * o, t + 0.03),
        this.env(c, t, a * i, 0.003, r),
        l.connect(c),
        c.connect(s),
        l.start(t),
        l.stop(t + r + 0.05));
    });
  },
  kick(e, t) {
    const a = AC,
      s = a.createOscillator(),
      n = a.createGain();
    ((s.type = "sine"),
      s.frequency.setValueAtTime(110, e),
      s.frequency.exponentialRampToValueAtTime(45, e + 0.12),
      this.env(n, e, 0.12, 0.004, 0.2),
      s.connect(n),
      n.connect(t),
      s.start(e),
      s.stop(e + 0.25));
  },
  plop(e, t) {
    const a = AC,
      s = a.createOscillator(),
      n = a.createGain(),
      o = 500 + 400 * Math.random();
    ((s.type = "sine"),
      s.frequency.setValueAtTime(o, e),
      s.frequency.exponentialRampToValueAtTime(0.35 * o, e + 0.12),
      this.env(n, e, 0.018, 0.004, 0.16),
      s.connect(n),
      n.connect(t),
      s.start(e),
      s.stop(e + 0.2));
  },
  owl(e, t) {
    [0, 0.5, 0.75].forEach((a, s) => {
      const n = AC,
        o = n.createOscillator(),
        i = n.createGain(),
        r = s ? 360 : 380;
      ((o.type = "sine"),
        o.frequency.setValueAtTime(r, e + a),
        o.frequency.linearRampToValueAtTime(0.92 * r, e + a + 0.3),
        i.gain.setValueAtTime(1e-4, e + a),
        i.gain.exponentialRampToValueAtTime(0.012, e + a + 0.08),
        i.gain.exponentialRampToValueAtTime(1e-4, e + a + 0.34),
        o.connect(i),
        i.connect(t),
        o.start(e + a),
        o.stop(e + a + 0.4));
    });
  },
  tok(e, t, a, s = 1100) {
    const n = AC,
      o = n.createOscillator(),
      i = n.createGain();
    ((o.type = "sine"),
      o.frequency.setValueAtTime(s, e),
      o.frequency.exponentialRampToValueAtTime(0.62 * s, e + 0.04),
      this.env(i, e, t, 0.003, 0.06),
      o.connect(i),
      i.connect(a),
      o.start(e),
      o.stop(e + 0.08));
  },
  style(e) {
    const t = "fe" === e ? "fe" : "p2" === e ? "p2" : "pe" === e ? "pe" : 2 === e ? "su" : e ? "hd" : "bu";
    t !== this.k && ((this.k = t), (this.s = 0), (this.t = 0));
  },
  nb() {
    if (!this._nb) {
      const A = AC,
        b = A.createBuffer(1, A.sampleRate, A.sampleRate),
        x = b.getChannelData(0);
      for (let i = 0; i < x.length; i++) x[i] = 2 * Math.random() - 1;
      this._nb = b;
    }
    return this._nb;
  },
  xiao(f, t, d, g, out) {
    const A = AC,
      o = A.createOscillator(),
      o3 = A.createOscillator(),
      m3 = A.createGain(),
      v = A.createOscillator(),
      vg = A.createGain(),
      G = A.createGain(),
      n = A.createBufferSource(),
      bp = A.createBiquadFilter(),
      ng = A.createGain();
    o.type = "sine";
    o3.type = "sine";
    o.frequency.setValueAtTime(0.985 * f, t);
    o.frequency.exponentialRampToValueAtTime(f, t + 0.2);
    o3.frequency.value = 3 * f;
    m3.gain.value = 0.08;
    v.frequency.value = 4.2;
    vg.gain.setValueAtTime(0, t);
    vg.gain.linearRampToValueAtTime(0.004 * f, t + Math.min(0.9 * d, 1.2));
    v.connect(vg);
    vg.connect(o.frequency);
    G.gain.setValueAtTime(1e-4, t);
    G.gain.exponentialRampToValueAtTime(g, t + 0.28);
    G.gain.setValueAtTime(g, t + Math.max(0.3, d - 0.2));
    G.gain.exponentialRampToValueAtTime(1e-4, t + d + 0.4);
    o.connect(G);
    o3.connect(m3);
    m3.connect(G);
    G.connect(out);
    [o, o3, v].forEach((x) => {
      x.start(t);
      x.stop(t + d + 0.5);
    });
  },
  erhu(f, t, d, g, out) {
    const A = AC,
      G = A.createGain(),
      lp = A.createBiquadFilter(),
      v = A.createOscillator(),
      vg = A.createGain();
    lp.type = "lowpass";
    lp.frequency.value = 950;
    lp.Q.value = 0.6;
    v.frequency.value = 5;
    vg.gain.setValueAtTime(0, t);
    vg.gain.linearRampToValueAtTime(0.006 * f, t + 0.5);
    v.connect(vg);
    [
      ["sawtooth", 1, 0.4],
      ["triangle", 1.003, 1],
    ].forEach(([ty, m, k]) => {
      const o = A.createOscillator(),
        c = A.createGain();
      o.type = ty;
      c.gain.value = k;
      o.frequency.setValueAtTime(0.97 * f * m, t);
      o.frequency.exponentialRampToValueAtTime(f * m, t + 0.22);
      vg.connect(o.frequency);
      o.connect(c);
      c.connect(lp);
      o.start(t);
      o.stop(t + d + 0.5);
    });
    G.gain.setValueAtTime(1e-4, t);
    G.gain.exponentialRampToValueAtTime(g, t + 0.3);
    G.gain.setValueAtTime(g, t + Math.max(0.35, d - 0.25));
    G.gain.exponentialRampToValueAtTime(1e-4, t + d + 0.45);
    lp.connect(G);
    G.connect(out);
    v.start(t);
    v.stop(t + d + 0.5);
  },
  zheng(f, t, a, out, rs = 1) {
    const A = AC,
      lp = A.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 2600;
    lp.connect(out);
    [
      [1, 1, 1.3, "triangle"],
      [2, 0.3, 0.7, "sine"],
      [3, 0.1, 0.4, "sine"],
    ].forEach(([m, k, r, ty]) => {
      const o = A.createOscillator(),
        c = A.createGain();
      o.type = ty;
      o.frequency.setValueAtTime(f * m * 1.006, t);
      o.frequency.exponentialRampToValueAtTime(f * m, t + 0.03);
      this.env(c, t, a * k, 0.004, r * rs);
      o.connect(c);
      c.connect(lp);
      o.start(t);
      o.stop(t + r * rs + 0.05);
    });
  },
  pipa(f, t, a, out) {
    for (let k = 0; k < 7; k++) this.zheng(f, t + 0.075 * k, a * (1 - 0.1 * k), out, 0.3);
  },
  guqin(f, t, g, out) {
    const A = AC,
      lp = A.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 700;
    lp.connect(out);
    [
      [1, 1, 2.2],
      [2, 0.25, 1.2],
      [3, 0.08, 0.6],
    ].forEach(([m, k, r]) => {
      const o = A.createOscillator(),
        c = A.createGain();
      o.type = "sine";
      o.frequency.value = f * m;
      this.env(c, t, g * k, 0.012, r);
      o.connect(c);
      c.connect(lp);
      o.start(t);
      o.stop(t + r + 0.05);
    });
  },
  yq(f, t, g, out) {
    const A = AC;
    [1, 2.01].forEach((m, k) => {
      const o = A.createOscillator(),
        c = A.createGain();
      o.type = "sine";
      o.frequency.value = f * m;
      this.env(c, t, g * (k ? 0.3 : 1), 0.002, 0.7);
      o.connect(c);
      c.connect(out);
      o.start(t);
      o.stop(t + 0.75);
    });
  },
  drum(t, g, out) {
    const A = AC,
      o = A.createOscillator(),
      G = A.createGain(),
      lp = A.createBiquadFilter();
    o.type = "sine";
    o.frequency.setValueAtTime(100, t);
    o.frequency.exponentialRampToValueAtTime(58, t + 0.3);
    lp.type = "lowpass";
    lp.frequency.value = 260;
    this.env(G, t, g, 0.012, 0.6);
    o.connect(lp);
    lp.connect(G);
    G.connect(out);
    o.start(t);
    o.stop(t + 0.7);
  },
  bell(f, t, g, out) {
    const A = AC;
    [
      [1, 1],
      [2.4, 0.4],
      [4.7, 0.15],
    ].forEach(([m, k], j) => {
      const o = A.createOscillator(),
        c = A.createGain();
      o.type = "sine";
      o.frequency.value = f * m;
      this.env(c, t, g * k, 0.01, 3 / (j + 1));
      o.connect(c);
      c.connect(out);
      o.start(t);
      o.stop(t + 3.1);
    });
  },
  tick() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (!e || !t) return;
    this.t < t.currentTime && (this.t = t.currentTime + 0.12);
    const a = this.SG[this.k],
      s = a.E,
      n = a.n || 8;
    for (; this.t < t.currentTime + 0.5;) {
      const t = this.s,
        o = Math.floor(t / n) % 8,
        i = t % n,
        [r, l] = a.CH[o],
        c = this.t,
        d = c + (i % 2 ? s * a.sw : 0);
      if ("fe" === this.k) {
        ((0 === i || 4 === i) && (this.bass(this.mf(r), d, 3 * s, 0.13, e.dry), this.kick(d, e.dry)),
          (2 === i || 6 === i) &&
            (l.forEach((x, q) => this.ep(this.mf(x), d + 0.008 * q, 1.2 * s, 0.024, e.bus)),
            this.tok(d, 0.018, e.dry, 1500)),
          i % 2 && this.tok(d, 0.004, e.dry, 5200),
          0 === i && o % 2 == 0 && this.bell(this.mf(l[3] + 12), d, 0.014, e.bus));
        const z = e.M.fe[t];
        z && this.koto(this.mf(z[0]), d, 0.04, e.bus);
      } else if ("p2" === this.k) {
        const T4 = o % 4 == 0;
        (0 === i || (4 === i && o % 2)) && this.guqin(this.mf(r), d, 0.05, e.dry);
        0 === i &&
          (l.slice(0, 3).forEach((x, q) => this.ep(this.mf(x - 12), d + 0.02 * q, 7 * s, 0.007, e.bus)),
          T4 && this.bell(this.mf(r + 24), d, 0.016, e.bus));
        const q = [0, 1, 2, 3, 2, 1, 2, 3][i];
        this.zheng(this.mf(l[q]), d, i % 2 ? 0.016 : 0.026, e.bus);
        0 === i && o % 2 == 0 && this.drum(d, 0.07, e.dry);
        4 === i && o % 2 && this.drum(d, 0.04, e.dry);
        (2 === i || 6 === i) && this.tok(d, 0.008, e.dry, 820);
        4 === i && this.pipa(this.mf(l[2]), d, 0.02, e.bus);
        (5 === i || (7 === i && o % 2)) && this.yq(this.mf(l[3] + 12), d, 0.008, e.bus);
        if (6 === i && (3 === o || 7 === o))
          [57, 59, 62, 66, 69, 71, 74].forEach((x, k) =>
            this.zheng(this.mf(x), d + 0.3 + 0.09 * k, 0.013 + 0.001 * k, e.bus),
          );
        const z = e.M.p2[t];
        z &&
          (o < 4
            ? this.xiao(this.mf(z[0]), d, z[1] * s, 0.04, e.bus)
            : this.erhu(this.mf(z[0]), d, z[1] * s, 0.02, e.bus));
      } else if ("pe" === this.k) {
        0 === i && this.bass(this.mf(r + 12), d, 6 * s, 0.12, e.dry);
        const a = [0, 1, 2, 3, 2, 1, 2, 3][i];
        (this.koto(this.mf(l[a]), d + (i % 2 ? 0.04 * s : 0), 0.022, e.bus),
          4 === i && o % 2 && this.ep(this.mf(l[0] + 12), d, 3 * s, 0.012, e.bus));
        const n = e.M.pe[t];
        n && this.fl(this.mf(n[0]), d, n[1] * s, 0.045, e.bus);
      } else if ("su" === this.k) {
        const n = a.CH[(o + 1) % 8][0],
          c = {
            0: [r, 2, 0.2],
            2: [r + 12, 1, 0.11],
            3: [r, 1, 0.1],
            5: [r + 1, 1, 0.1],
            6: [r + 2, 2, 0.15],
            8: [r, 1, 0.18],
            10: [r + 12, 1, 0.11],
            11: [r + 10, 1, 0.09],
            12: [r + 7, 1, 0.13],
            14: [n - 1, 1, 0.12],
            15: [n - 2 + (o % 2) * 2, 1, 0.08],
          }[i];
        (c && this.bass(this.mf(c[0]), d, s * c[1] * 1.15, c[2], e.dry),
          (0 === i || 8 === i || (10 === i && o % 2)) && this.kick(d, e.dry),
          (4 !== i && 12 !== i) || (this.tok(d, 0.024, e.dry, 1800), this.tok(d + 0.012, 0.014, e.dry, 2400)),
          this.tok(d, i % 2 ? 0.003 : 0.006, e.dry, 6200),
          (3 !== i && 6 !== i && 11 !== i && 14 !== i) ||
            l.slice(1).forEach((t, a) => this.clav(this.mf(t + 12), d + 0.003 * a, 0.6 * s, 0.012, e.bus)),
          o % 2 != 1 ||
            (6 !== i && 14 !== i) ||
            l.forEach((t, a) => this.brass(this.mf(t + 12), d, 1.3 * s, 0.018, e.bus)));
        const f = e.M.su[t];
        if (
          (f && this.sax(this.mf(f[0]), d, f[1] * s, 0.05, e.bus),
          (3 === o && i < 4) || (7 === o && i >= 8 && i % 2 == 0))
        ) {
          const t = [70, 73, 75, 78, 80, 82, 85, 87];
          this.koto(this.mf(t[(3 === o ? i : (i - 8) / 2 + 4) % 8]), d, 0.04, e.bus);
        }
      } else if ("bu" === this.k) {
        (i % 2 == 0 && this.bass(this.mf(r + a.BW[o][i >> 1]), d, 1.7 * s, 0.17, e.dry),
          (2 !== i && 6 !== i) ||
            (l.forEach((t, a) => this.ep(this.mf(t), d + 0.008 * a, 1.4 * s, 0.03, e.bus)),
            this.tok(d, 0.012, e.dry, 900)),
          7 === i && o % 2 && this.ep(this.mf(l[l.length - 1] + 12), d, s, 0.02, e.bus));
        const n = e.M.bu[t];
        n && this.vib(this.mf(n[0]), d, n[1] * s, 0.07, e.bus);
      } else {
        (0 === i || 4 === i
          ? this.bass(this.mf(r), d, 2.6 * s, 0.18, e.dry)
          : (3 !== i && 7 !== i) || this.bass(this.mf(r + 7), d, 0.9 * s, 0.12, e.dry),
          (1 !== i && 3 !== i && 6 !== i) ||
            l.forEach((t, a) => this.ep(this.mf(t), d + 0.006 * a, s * (6 === i ? 1.8 : 0.9), 0.026, e.bus)),
          ((o % 2 != 0 || (0 !== i && 3 !== i && 6 !== i)) && (o % 2 != 1 || (2 !== i && 4 !== i))) ||
            this.tok(d, 0.014, e.dry, 1500));
        const a = e.M.hd[t];
        a && this.fl(this.mf(a[0]), d, a[1] * s, 0.06, e.bus);
      }
      ((8 !== n && i % 2 != 0) || this.amb(c, 8 === n ? i : i / 2, e),
        (this.t += s),
        (this.s = (this.s + 1) % (8 * n)));
    }
  },
  loop() {
    (clearTimeout(this.T),
      this.on &&
        (!this.L && void 0 !== AC && AC && (this.build(), apply()),
        this.L && !document.hidden && prefs().music && this.tick(),
        (this.T = setTimeout(() => this.loop(), 110))));
  },
  vol(e) {
    this.L &&
      void 0 !== AC &&
      AC &&
      this.L.out.gain.setTargetAtTime(e && this.on ? 0.9 : 0, AC.currentTime, 0.6);
  },
  set(e) {
    (e = !!e) !== this.on &&
      ((this.on = e),
      e
        ? (Date.now() - (this.off || 0) > 45e3 && ((this.s = 0), (this.t = 0)), this.build(), this.loop())
        : (clearTimeout(this.T), (this.off = Date.now())),
      void 0 !== AC && AC && void 0 !== music && music && apply());
  },
};
function kzMus(e) {
  "object" == typeof kzMu && kzMu.set(e);
}
const KZAT = 6e4;
const kzReach = (e) => UNL() || st.get(ckey("cuisine") + ":" + (10 * e + 9), !1);
function kzModeArea() {
  const e = st.get("kz:mode", "");
  return `<div class="rcx-b"><div class="rcx-m"><div class="rcx-t"><small>Mode de jeu</small><span>${"arc" === e ? "Sers les bons plats avant la fin du temps" : "Prépare chaque commande"}</span></div><div class="plseg"><button class="${e ? "" : "on"}" data-a="kzMode" data-v="">Histoire</button><button class="${"arc" === e ? "on" : ""}" data-a="kzMode" data-v="arc">Arcade</button></div></div>\n${
    "arc" === e
      ? `<div class="kzabs">${["Burger", "Hot-dog", "Sushi"]
          .map((e, t) => {
            const a = kzReach(t),
              s = st.get("kz:ar" + t, 0);
            return `<button class="kzab${a ? "" : " lk"}" data-a="kzA" data-v="${t}"${a ? "" : ' aria-disabled="true"'}><b>${e}</b><small>${a ? (s ? "Record : " + s : "Pas encore de record") : "🔒 Après le niveau " + (10 * t + 10)}</small></button>`;
          })
          .join("")}</div>`
      : ""
  }</div>`;
}
var KZRUN = 0;
function kzArcade(e) {
  if (!kzReach(e)) return msg("Termine d’abord le niveau " + (10 * e + 10) + " en mode histoire.");
  const t = ++KZRUN,
    a = () => t === KZRUN && playing && "cuisine" === cur && !!document.getElementById("kzra");
  ((cur = "cuisine"), (daily = !1), (lv = 10 * e), (playing = !0));
  try {
    INFG = "";
  } catch (e) {}
  ((snap = null),
    theme("cuisine"),
    (KZR = e),
    (KZI.fries.n = 2 === e ? "soupe miso" : "frites"),
    (KZI.drink.n = 2 === e ? "thé vert" : "boisson"));
  try {
    kzMu.style(e);
  } catch (e) {}
  const s = [];
  for (let t = 10 * e; t < 10 * e + 10; t++) s.push(...KZU[t]);
  const n = (e) => [...new Set(s.filter((t) => KZI[t].k === e))],
    o = n("b"),
    i = n("p"),
    r = n("t"),
    l = (e) => e[Math.floor(Math.random() * e.length)],
    c = (e, t) =>
      setTimeout(() => {
        a() && e();
      }, t),
    d = () => {
      const e = 1 + Math.floor(Math.random() * Math.min(3, r.length)),
        t = [],
        a = r.slice();
      for (; t.length < e && a.length;) t.push(a.splice(Math.floor(Math.random() * a.length), 1)[0]);
      return { b: l(o), p: l(i), t: t.sort() };
    },
    f = [];
  for (const e of [3, 2, 1]) {
    for (let t = 0; f.length < 6 && t < 3e3; t++) {
      const t = d();
      f.every((a) => {
        return (
          (n = t),
          ((s = a).b !== n.b) +
            (s.p !== n.p) +
            s.t.filter((e) => !n.t.includes(e)).length +
            n.t.filter((e) => !s.t.includes(e)).length >=
            e
        );
        var s, n;
      }) && f.push(t);
    }
    if (f.length >= 6) break;
  }
  for (let e = f.length - 1; e > 0; e--) {
    const t = Math.floor(Math.random() * (e + 1));
    [f[e], f[t]] = [f[t], f[e]];
  }
  const u = {
      T: KZAT,
      sc: 0,
      cb: 0,
      best: 0,
      sv: 0,
      seat: [null, null, null],
      id: 0,
      over: !1,
      last: performance.now(),
      bag: [],
    },
    h = (e) => {
      if (u.over || u.seat[e]) return;
      const t = Math.max(9e3, 15e3 - 250 * u.sv),
        a = (() => {
          const e = u.seat.filter(Boolean).map((e) => e.d);
          for (let t = 0; t < 2; t++) {
            u.bag.length || (u.bag = [0, 1, 2, 3, 4, 5].sort(() => Math.random() - 0.5));
            const t = u.bag.findIndex((t) => !e.includes(t));
            if (t >= 0) return u.bag.splice(t, 1)[0];
          }
          return u.bag.shift();
        })();
      ((u.seat[e] = {
        d: a,
        o: f[a],
        lk: Math.floor(Math.random() * KZL.length),
        p: t,
        m: t,
        st: "in",
        id: u.id++,
      }),
        m(),
        c(() => {
          const t = u.seat[e];
          t && "in" === t.st && ((t.st = "wait"), m());
        }, 700));
    },
    p = (e, t) => {
      const a = u.seat[e];
      a &&
        "out" !== a.st &&
        "sad" !== a.st &&
        ((a.st = t ? "out" : "sad"),
        m(),
        c(
          () => {
            u.seat[e] === a && ((u.seat[e] = null), m(), c(() => h(e), 450));
          },
          t ? 800 : 1e3,
        ));
    };
  ((app.innerHTML = `<div class="kzg ${["bu", "hd", "su"][e]}" id="kzg"><div class="kzt"><button class="back" data-a="back" data-v="hub">‹ Cuisine</button><b id="kzsco">Score 0</b><div class="kztr"><div class="chip" id="kzcb">Arcade</div></div></div>\n<div class="kzsc">${kzBg(e)}${kzAmb(e, 7)}<div class="kzcu" id="kzcu"></div><div class="kzct"></div><div class="kztm"><i id="kztm"></i></div></div><p class="m kzm" id="m" role="status" aria-live="polite">Touche le plat qui correspond à une commande.</p><div class="kzk"><div class="kzra" id="kzra"></div></div><div class="kzov" id="kzov" hidden></div></div>`),
    ($("#nav").hidden = !0),
    (mt = "m"),
    ($("#kzra").innerHTML = f
      .map(
        (e, t) =>
          `<button class="kzrd" data-a="kzR1" data-v="${t}" aria-label="${[e.b, e.p, ...e.t].map((e) => KZI[e].n).join(", ")}"><span class="kzrp">${kzDish(e)}</span><span class="kzbi">${[e.b, e.p, ...e.t].map((e) => `<i>${kzIco(e)}</i>`).join("")}</span></button>`,
      )
      .join("")));
  const m = () => {
    if (!a()) return;
    const e = $("#kzcu");
    (e.style.setProperty("--n", 3),
      (e.innerHTML = u.seat
        .map((e, t) => {
          if (!e) return '<div class="kzs"></div>';
          const a = KZL[e.lk],
            s = "wait" === e.st && e.p / e.m < 0.34,
            n = "out" === e.st ? "happy" : "sad" === e.st ? "sad" : s ? "lo" : "wait";
          return `<div class="kzs"><div class="kzp ${e.st}${s ? " lo" : ""}"><span class="kzb"><span class="kzbd">${kzDish(e.o)}</span><span class="kzbi">${[e.o.b, e.o.p, ...e.o.t].map((e) => `<i>${kzIco(e)}</i>`).join("")}</span></span><span class="kzgy">${kzGuy(a, n, "r" + e.id)}</span><span class="kzn">${a.n}</span><span class="kzpt"><i id="kzp${t}" style="width:${Math.max(0, (e.p / e.m) * 100).toFixed(0)}%"></i></span>${"out" === e.st ? '<span class="kzh">♥</span><span class="kzh h2">♥</span>' : ""}</div></div>`;
        })
        .join("")),
      ($("#kzsco").textContent = "Score " + u.sc),
      ($("#kzcb").textContent = u.cb > 1 ? "Série ×" + u.cb : "Arcade"));
  };
  ((act.kzR1 = (e) => {
    if (u.over || t !== KZRUN) return;
    const a = +e;
    if (!(a >= 0 && a < 6)) return;
    const s = u.seat
        .map((e, t) => (e && "wait" === e.st && e.d === a ? { c: e, i: t } : null))
        .filter(Boolean)
        .sort((e, t) => e.c.p - t.c.p),
      n = document.querySelector(`.kzrd[data-v="${a}"]`);
    if (s.length) {
      const { i: e } = s[0];
      (u.cb++, (u.best = Math.max(u.best, u.cb)));
      const t = 10 + 2 * Math.min(5, u.cb - 1);
      ((u.sc += t),
        u.sv++,
        sfx(784, 0.2),
        vib(12),
        msg("✦ +" + t),
        n && (n.classList.remove("ok", "no"), n.offsetWidth, n.classList.add("ok")),
        p(e, !0));
    } else
      ((u.cb = 0),
        (u.T -= 2e3),
        sfx(200, 0.25),
        vib(40),
        msg("Ce plat ne correspond à aucune commande : −2 s"),
        n && (n.classList.remove("ok", "no"), n.offsetWidth, n.classList.add("no")),
        m());
  }),
    m(),
    [0, 1, 2].forEach((e) => c(() => h(e), 300 + 500 * e)));
  const b = () => {
    if (!a() || u.over) return;
    const t = performance.now(),
      s = Math.min(250, t - u.last);
    ((u.last = t),
      document.hidden ||
        ((u.T -= s),
        u.seat.forEach((e, t) => {
          if (!e || "wait" !== e.st) return;
          e.p -= s;
          const a = $("#kzp" + t);
          (a && (a.style.width = Math.max(0, (e.p / e.m) * 100).toFixed(0) + "%"),
            e.p <= 0 && ((u.cb = 0), msg(KZL[e.lk].n + " est reparti…"), p(t, !1)));
        })));
    const n = $("#kztm");
    if (
      (n && ((n.style.width = Math.max(0, (u.T / KZAT) * 100) + "%"), n.classList.toggle("lo", u.T < 1e4)),
      u.T <= 0)
    )
      return (() => {
        if (u.over) return;
        u.over = !0;
        const t = "kz:ar" + e,
          a = st.get(t, 0),
          s = u.sc > a;
        (s && st.set(t, u.sc), sfx(s ? 880 : 520, 0.4));
        const n = $("#kzov");
        n &&
          ((n.hidden = !1),
          (n.innerHTML = `<div class="kzbox"><h2>Le service est terminé</h2><p class="kzbig">${u.sc} points</p><p>${u.sv} plat${u.sv > 1 ? "s" : ""} bien servi${u.sv > 1 ? "s" : ""} · meilleure série ×${u.best}</p><p class="kzsm">${s ? "Nouveau record !" : "Record : " + a}</p><div class="kzbr"><button class="btn" data-a="kzA" data-v="${e}">Rejouer</button><button class="btn alt" data-a="back" data-v="hub">Retour</button></div></div>`));
      })();
    setTimeout(b, 100);
  };
  (setTimeout(b, 100), window.scrollTo(0, 0));
}
setTimeout(() =>
  Object.assign(act, {
    kzA: (e) => {
      const t = +e;
      t >= 0 && t < 3 && kzArcade(t);
    },
    kzMode: (e) => {
      (st.set("kz:mode", "arc" === e ? "arc" : ""), hub("cuisine"));
    },
  }),
);
