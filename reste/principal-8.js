const M3KX = ["#3fae6a", "#e3534f", "#b8742f", "#f4ead2", "#d9a066", "#f2c14e"];
const M3W = ["Bien !", "Super !", "Magnifique !", "Splendide !", "Incroyable !"];
const M3P = [
  "20,2 37,15 20,38 3,15",
  "20,2 35,11 35,29 20,38 5,29 5,11",
  "c",
  "h",
  "r",
  "12,3 28,3 37,12 37,28 28,37 12,37 3,28 3,12",
];
const M3SF = [...Array(10)]
  .map((e, t) => {
    const s = ((36 * t - 90) * Math.PI) / 180,
      l = t % 2 ? 8.8 : 18.5;
    return (20 + l * Math.cos(s)).toFixed(1) + "," + (21 + l * Math.sin(s)).toFixed(1);
  })
  .join(" ");
const M3SD = [...Array(5)]
  .map((e, t) => {
    const s = ((72 * t - 90) * Math.PI) / 180;
    return `<circle cx="${(20 + 11 * Math.cos(s)).toFixed(1)}" cy="${(21 + 11 * Math.sin(s)).toFixed(1)}" r="1.3"/>`;
  })
  .join("");
let M3XM = !1;
const m3GemN = (e) => {
  const t = e % 6,
    s = '<ellipse cx="14" cy="12" rx="6.5" ry="3.4" transform="rotate(-35 14 12)" class="gh"/>';
  let l;
  if (0 === t)
    l =
      '<polygon fill="rgba(25,10,50,.55)" stroke="rgba(25,10,50,.55)" stroke-width="8.6" stroke-linejoin="round" points="20.0,5.5 23.9,15.2 34.3,15.9 26.3,22.5 28.8,32.6 20.0,27.1 11.2,32.6 13.7,22.5 5.7,15.9 16.1,15.2"/><polygon style="fill:var(--c);stroke:var(--c)" stroke-width="5.4" stroke-linejoin="round" points="20.0,5.5 23.9,15.2 34.3,15.9 26.3,22.5 28.8,32.6 20.0,27.1 11.2,32.6 13.7,22.5 5.7,15.9 16.1,15.2"/><polygon fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.07)" stroke-width="2.4" stroke-linejoin="round" points="20.0,5.5 23.9,15.2 34.3,15.9 26.3,22.5 28.8,32.6 20.0,27.1 11.2,32.6 13.7,22.5 5.7,15.9 16.1,15.2" transform="translate(-.6 -1.2) scale(.97)"/><path d="M20.0 20.5 L20.0 7.3M20.0 20.5 L32.6 16.4M20.0 20.5 L27.8 31.2M20.0 20.5 L12.2 31.2M20.0 20.5 L7.4 16.4" fill="none" stroke="rgba(255,255,255,.42)" stroke-width="1.7" stroke-linecap="round"/><g fill="rgba(255,255,255,.8)"><circle cx="20.0" cy="13.7" r="1.15"/><circle cx="20.0" cy="10.3" r="1.15"/><circle cx="26.5" cy="18.4" r="1.15"/><circle cx="29.7" cy="17.3" r="1.15"/><circle cx="24.0" cy="26.0" r="1.15"/><circle cx="26.0" cy="28.8" r="1.15"/><circle cx="16.0" cy="26.0" r="1.15"/><circle cx="14.0" cy="28.8" r="1.15"/><circle cx="13.5" cy="18.4" r="1.15"/><circle cx="10.3" cy="17.3" r="1.15"/><circle cx="20" cy="20.5" r="2.8"/></g>';
  else if (1 === t)
    l = `<path class="gb" d="M20 35 7 22Q3 12 9.5 7.5Q15 4 20 6Q25 4 30.5 7.5Q37 12 33 22z"/><path class="gb" d="M15 34.4h10l-1.6 3.4h-6.8z"/><g class="gr"><path d="M20 34 9.5 9M20 34 14.5 6.5M20 34V6M20 34l5.5-27.5M20 34 30.5 9"/></g>${s}`;
  else if (2 === t)
    l =
      '<circle class="gb" cx="20" cy="20" r="15.5"/><circle cx="18" cy="18" r="11" fill="rgba(255,255,255,.3)"/><circle cx="14.5" cy="13.5" r="4.4" fill="rgba(255,255,255,.9)"/><path d="M31 5l1.3 3.2 3.2 1.3-3.2 1.3L31 14l-1.3-3.2-3.2-1.3 3.2-1.3z" fill="#fff"/>';
  else if (3 === t)
    l =
      '<g class="go"><path d="M20 36V21M20 27 11 18V9M20 22 29 14V6M11 18 5 14M29 14l6-4M20 22V11"/></g><g class="gc"><path d="M20 36V21M20 27 11 18V9M20 22 29 14V6M11 18 5 14M29 14l6-4M20 22V11"/></g><g class="gl"><path d="M18.4 33V22M10.2 16V10"/></g>';
  else if (5 === t)
    l = `<g class="go" style="stroke-width:6.4"><path d="M12.5 24Q9 29 12.5 33T11.5 38M20 25Q16.5 30 20 34T19 38.5M27.5 24Q31 29 27.5 33T28.5 38"/></g><g class="gc" style="stroke-width:3"><path d="M12.5 24Q9 29 12.5 33T11.5 38M20 25Q16.5 30 20 34T19 38.5M27.5 24Q31 29 27.5 33T28.5 38"/></g><path class="gb" d="M6.5 21Q6.5 4.5 20 4.5Q33.5 4.5 33.5 21Q33.5 24.5 30 24Q26.5 26.5 23 24Q20 26 17 24Q13.5 26.5 10 24Q6.5 24.5 6.5 21z"/><path d="M11 18Q11 9 20 9" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="2" stroke-linecap="round"/><circle cx="24" cy="15" r="1.8" fill="rgba(255,255,255,.55)"/><circle cx="28" cy="19.5" r="1.3" fill="rgba(255,255,255,.45)"/>${s}`;
  else if (4 === t)
    l =
      '<ellipse class="gb" cx="9" cy="13" rx="5.2" ry="2.9" transform="rotate(-35 9 13)"/><ellipse class="gb" cx="31" cy="13" rx="5.2" ry="2.9" transform="rotate(35 31 13)"/><ellipse class="gb" cx="10" cy="29" rx="4.4" ry="2.6" transform="rotate(35 10 29)"/><ellipse class="gb" cx="30" cy="29" rx="4.4" ry="2.6" transform="rotate(-35 30 29)"/><path class="gb" d="M17.6 33 20 38.5 22.4 33z"/><ellipse class="gb" cx="20" cy="7" rx="4.1" ry="4.4"/><ellipse class="gb" cx="20" cy="20.5" rx="11.2" ry="12.6"/><path d="M20 13 25 16.5V23.5L20 27 15 23.5V16.5z" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.55)" stroke-width="1.3" stroke-linejoin="round"/><path d="M25 16.5 30 13.5M25 23.5 30 27.5M20 27 20 32M15 23.5 10 27.5M15 16.5 10 13.5M20 13 20 9" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="1.2" stroke-linecap="round"/><path d="M12.5 15Q14 10.5 18 9.5" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="1.8" stroke-linecap="round"/>';
  else {
    const e = M3P[t],
      a = "r" === e ? '<rect x="4" y="4" width="32" height="32" rx="10"/>' : `<polygon points="${e}"/>`;
    l = `<g class="gb">${a}</g><g class="gf">${a}</g>${s}<circle cx="28" cy="29" r="1.8" class="gh2"/>`;
  }
  return `<svg viewBox="0 0 40 40" aria-hidden="true">${l}</svg>`;
};
const m3Gem = (e) => (M3XM ? m3GemX(e) : m3GemN(e));
const m3GemX = (e) => {
  const t = e % 6,
    s = '<ellipse cx="13" cy="12" rx="5" ry="2.6" transform="rotate(-35 13 12)" class="gh" opacity=".55"/>';
  let l;
  const a = 'stroke="rgba(25,10,50,.5)" stroke-width="1.2" stroke-linejoin="round"';
  return (
    (l =
      0 === t
        ? `<rect x="17" y="31" width="6" height="6.5" rx="1" fill="#8a5a33" ${a}/><path class="gb" d="M20 12 32.5 33H7.5z"/><path class="gb" d="M20 6 30.5 24H9.5z"/><path class="gb" d="M20 2.5 28 15H12z"/><path d="M20 2.2l1.5 3.1 3.4.5-2.5 2.4.6 3.4-3-1.6-3 1.6.6-3.4-2.5-2.4 3.4-.5z" fill="#ffd94d" ${a}/><circle cx="16" cy="28" r="2.1" fill="#e3534f"/><circle cx="25" cy="22.5" r="1.9" fill="#ffd94d"/><circle cx="20" cy="15.5" r="1.6" fill="#e3534f"/><circle cx="26.5" cy="30" r="1.8" fill="#6fb6ff"/><circle cx="14.5" cy="21" r="1.6" fill="#6fb6ff"/>`
        : 1 === t
          ? `<rect class="gb" x="6.5" y="17" width="27" height="19" rx="2.2"/><rect class="gb" x="4.5" y="12.5" width="31" height="7.5" rx="2.2"/><rect x="17.7" y="12.5" width="4.6" height="23.5" fill="#ffd94d" ${a}/><path d="M20 12C13 12 9 4.5 14 4.5 18 4.5 20 9 20 12ZM20 12C27 12 31 4.5 26 4.5 22 4.5 20 9 20 12Z" fill="#ffd94d" ${a}/><circle cx="20" cy="12.2" r="2.6" fill="#f2b81e" ${a}/>${s}`
          : 2 === t
            ? `<ellipse cx="20" cy="32" rx="17.5" ry="5.6" fill="#eef2fa" ${a}/><ellipse cx="20" cy="31" rx="12.5" ry="3" fill="#dde4f2"/><g transform="rotate(-38 9 23)"><ellipse class="gb" cx="9" cy="23" rx="3.8" ry="6.8"/><circle cx="9" cy="16.2" r="2.1" fill="#fff6e6" ${a}/></g><g transform="rotate(38 31 23)"><ellipse class="gb" cx="31" cy="23" rx="3.8" ry="6.8"/><circle cx="31" cy="16.2" r="2.1" fill="#fff6e6" ${a}/></g><ellipse class="gb" cx="20" cy="21.5" rx="12" ry="10.2"/><path d="M12 19Q20 12.5 28 19M13 24Q20 19 27 24" fill="none" stroke="rgba(120,60,10,.45)" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="15" cy="16.6" rx="4.4" ry="2.1" transform="rotate(-25 15 16.6)" fill="rgba(255,255,255,.4)"/><g fill="#4fae5f"><ellipse cx="6" cy="31.5" rx="2.4" ry="1.3" transform="rotate(-20 6 31.5)"/><ellipse cx="34" cy="31.5" rx="2.4" ry="1.3" transform="rotate(20 34 31.5)"/></g><circle cx="9" cy="33" r="1.1" fill="#e3534f"/><circle cx="31.5" cy="33" r="1.1" fill="#e3534f"/>`
            : 3 === t
              ? `<path d="M20 3.5C24.5 9 26 12 26 14.5A6 6 0 0 1 14 14.5C14 12 15.5 9 20 3.5Z" fill="#ffb72e" ${a}/><path d="M20 8.5C22.4 11.5 23 13 23 14.4A3 3 0 0 1 17 14.4C17 13 17.6 11.5 20 8.5Z" fill="#fff0a8"/><path d="M20 20.5V17.5" stroke="#3a2a22" stroke-width="1.4" stroke-linecap="round"/><rect class="gb" x="13.5" y="20.5" width="13" height="14" rx="2.2"/><path d="M13.5 24Q16 27 18.5 24T23.5 24 26.5 25" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="20" cy="35.5" rx="10.5" ry="3" fill="#d8a838" ${a}/><path d="M7 33Q10 29.5 14 33Q10.5 35.6 7 33ZM33 33Q30 29.5 26 33Q29.5 35.6 33 33Z" fill="#3fae6a" ${a}/><circle cx="20" cy="36" r="1.7" fill="#e3534f"/><circle cx="23" cy="35.7" r="1.4" fill="#e3534f"/>${s}`
              : 4 === t
                ? '<path class="gb" d="M20 3.2C23.5 3.2 26 5.7 26 9C26 11.6 24.6 13.4 23 14.4L33.5 12.8C36.2 12.4 38 14.4 37.6 17C37.2 19.6 35 20.8 32.6 21L26.5 21.4 32.2 32.6C33.4 35 32 37.6 29.4 38C27 38.4 25.2 36.8 24.2 35L20 28 15.8 35C14.8 36.8 13 38.4 10.6 38C8 37.6 6.6 35 7.8 32.6L13.5 21.4 7.4 21C5 20.8 2.8 19.6 2.4 17C2 14.4 3.8 12.4 6.5 12.8L17 14.4C15.4 13.4 14 11.6 14 9C14 5.7 16.5 3.2 20 3.2Z"/><g fill="none" stroke="#fff8ea" stroke-width="1.5" stroke-linecap="round"><path d="M6.5 16.6Q9 18.4 11.5 16.6M33.5 16.6Q31 18.4 28.5 16.6M10 33.5Q12 35 13.8 33.4M30 33.5Q28 35 26.2 33.4"/><path d="M17.3 11.4Q20 13.6 22.7 11.4"/></g><circle cx="17.6" cy="7.8" r="1.1" fill="#4a2a18"/><circle cx="22.4" cy="7.8" r="1.1" fill="#4a2a18"/><circle cx="20" cy="19" r="1.9" fill="#e3534f"/><circle cx="20" cy="24.2" r="1.9" fill="#3fae6a"/>'
                : `<path d="M14 6Q20 -.5 26 6" fill="none" stroke="#e3534f" stroke-width="2.4" stroke-linecap="round"/><path class="gb" d="M20 4.5C26.2 4.5 29 9.6 29 16.5C29 24 32 27 34.5 30.5H5.5C8 27 11 24 11 16.5C11 9.6 13.8 4.5 20 4.5Z"/><circle cx="20" cy="34" r="3.2" fill="#d99a1c" ${a}/><path d="M12.8 12.5Q14.6 8 19 6.8" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="2" stroke-linecap="round"/><path d="M11.6 28H28.4" stroke="rgba(120,70,0,.3)" stroke-width="1.5"/><path d="M20 5.5C17 3 14 4.5 15 7 16.5 7.5 18.5 7 20 5.5ZM20 5.5C23 3 26 4.5 25 7 23.5 7.5 21.5 7 20 5.5Z" fill="#e3534f" ${a}/>`),
    `<svg viewBox="0 0 40 40" aria-hidden="true">${l}</svg>`
  );
};
const M3SHAPES = {
  n_sq: ["########", "########", "########", "########", "########", "########", "########", "########"],
  n_diamond: ["...##...", "..####..", ".######.", "########", "########", ".######.", "..####..", "...##..."],
  n_circle: ["..####..", ".######.", "########", "########", "########", "########", ".######.", "..####.."],
  n_fish: ["........", "..####.#", ".#######", "########", "########", ".#######", "..####.#", "........"],
  n_coral: [".#..#...", ".#..#.#.", ".#..#.#.", "##.###.#", "##.###.#", "########", "########", "########"],
  n_heart: [".##..##.", "########", "########", "########", ".######.", "..####..", "...##...", "........"],
  n_tree: ["...##...", "..####..", ".######.", "..####..", ".######.", "########", "...##...", "...##..."],
  n_star: ["...##...", "...##...", "########", ".######.", "..####..", "..####..", ".##..##.", ".#....#."],
  n_moon: ["..####..", ".####...", "####....", "####....", "####....", "####....", ".####...", "..####.."],
  n_jelly: ["..####..", ".######.", "########", "########", ".######.", ".#.##.#.", ".#.##.#.", ".#....#."],
  tree: ["...##...", "..####..", ".######.", "..####..", ".######.", "########", "########", "...##..."],
  gift: [".##..##.", ".######.", "########", "########", "########", "########", "########", "########"],
  star: ["...##...", "...##...", "########", "########", ".######.", "..####..", ".######.", ".##..##."],
  candle: ["...##...", "...##...", "..####..", "..####..", "..####..", "..####..", "########", "########"],
  bell: ["...##...", "..####..", ".######.", ".######.", ".######.", "########", "########", "...##..."],
  hat: ["......##", ".....###", "....####", "...#####", "..######", ".#######", "########", "########"],
  beard: ["########", "###..###", ".######.", ".######.", "..####..", "..####..", "...##...", "...##..."],
  stocking: [".#####..", ".####...", ".####...", ".####...", ".####...", ".#######", ".#######", "..#####."],
  snowman: ["..####..", "..####..", "...##...", ".######.", "########", "########", "########", ".######."],
  sleigh: ["......##", "#.....##", "##...###", "########", "########", ".######.", "########", "#......#"],
  reindeer: ["#.#..#.#", ".##..##.", ".######.", ".######.", ".######.", "..####..", "...##...", "...##..."],
  elf: ["...##...", "..####..", ".######.", "..####..", "########", ".######.", "..####..", ".##..##."],
  ginger: ["..####..", "..####..", "########", "########", "..####..", "..####..", ".##..##.", ".##..##."],
  wreath: ["..####..", ".######.", "###..###", "##....##", "##....##", "###..###", ".######.", "..####.."],
  heart: [".##..##.", "########", "########", "########", ".######.", ".######.", "..####..", "...##..."],
  moon: ["..#####.", ".#####..", "#####...", "####....", "####....", "#####...", ".#####..", "..#####."],
  house: ["...##...", "..####..", ".######.", "########", "########", "###..###", "###..###", "###..###"],
  igloo: ["..####..", ".######.", "########", "########", "########", "########", "###..###", "###..###"],
  plus: ["..####..", "..####..", "########", "########", "########", "########", "..####..", "..####.."],
  mitten: [".####...", ".####...", ".####.##", ".#######", ".#######", ".######.", ".######.", "..####.."],
  mug: ["#####...", "######..", "#####.##", "#####.##", "#####.##", "######..", "#####...", ".###...."],
  diamond: ["...##...", "..####..", ".######.", "########", "########", ".######.", "..####..", "...##..."],
  crown: ["#..##..#", "#..##..#", "##.##.##", "########", "########", "########", ".######.", ".######."],
  rocket: ["...##...", "..####..", "..####..", "..####..", "..####..", ".######.", "########", ".##..##."],
  fish: ["..##....", ".####..#", "######.#", "########", "########", "######.#", ".####..#", "..##...."],
  butterfly: ["##....##", "###..###", "########", ".######.", ".######.", "########", "###..###", "##....##"],
  mushroom: ["..####..", ".######.", "########", "########", "..####..", "..####..", "..####..", ".######."],
  owl: ["#......#", "##....##", "########", "##.##.##", "########", ".######.", ".######.", ".##..##."],
  cat: ["##....##", "###..###", "########", "##.##.##", "########", ".######.", "..####..", ".######."],
  arrow: ["...##...", "..####..", ".######.", "########", "...##...", "...##...", "..####..", "..####.."],
  hourglass: ["########", ".######.", "..####..", "...##...", "...##...", "..####..", ".######.", "########"],
  castle: ["#.#..#.#", "########", "########", "##.##.##", "########", "########", "###..###", "###..###"],
  boat: ["...#....", "...##...", "...###..", "...####.", "...#....", "########", ".######.", "..####.."],
  sun: ["...##...", ".######.", ".######.", "########", "########", ".######.", ".######.", "...##..."],
  starfish: ["...##...", "...##...", "########", ".######.", "..####..", ".######.", ".##..##.", "##....##"],
  shell: ["...##...", "..####..", ".######.", "########", "########", "########", "########", ".##..##."],
  turtle: ["...##...", ".######.", "########", "########", "########", "########", ".######.", ".##..##."],
  wave: ["#.......", "##......", "###...##", "####.###", "########", "########", "########", "########"],
  whale: ["#.......", "##..####", ".#######", "########", "########", ".#######", "..######", "....##.."],
  crescent: ["...####.", "..####..", ".####...", ".###....", ".###....", ".####...", "..####..", "...####."],
  anchor: ["..####..", "...##...", ".######.", "..####..", "#..##..#", "##.##.##", ".######.", "..####.."],
  seahorse: ["..###...", ".####...", "..####..", "...####.", "...####.", "..####..", ".####...", ".###...."],
  isl_a: ["####....", "####....", "####....", "####....", "....####", "....####", "....####", "....####"],
  isl_b: ["###..###", "###..###", "###..###", "........", "..####..", "..####..", "..####..", "..####.."],
  isl_c: ["..####..", "..####..", "........", "####....", "####....", "........", "....####", "....####"],
};
const M3PT = {
  a: [
    [24, 36],
    [25, 37],
    [26, 38],
    [27, 39],
  ],
  b: [
    [16, 35],
    [23, 36],
  ],
  c: [
    [10, 24],
    [11, 25],
    [12, 26],
    [13, 27],
    [32, 52],
    [33, 53],
    [34, 54],
    [35, 55],
  ],
};
const M3SHL = [
  "tree",
  "gift",
  "star",
  "candle",
  "bell",
  "hat",
  "beard",
  "stocking",
  "snowman",
  "sleigh",
  "reindeer",
  "elf",
  "ginger",
  "wreath",
  "tree",
  "gift",
  "bell",
  "hat",
  "star",
  "snowman",
  "heart",
  "moon",
  "house",
  "igloo",
  "plus",
  "mitten",
  "mug",
  "diamond",
  "crown",
  "rocket",
  "fish",
  "butterfly",
  "mushroom",
  "owl",
  "cat",
  "arrow",
  "hourglass",
  "castle",
  "boat",
  "sun",
];
const M3SHN = ["sq", "diamond", "circle", "fish", "coral", "sq", "heart", "tree", "star", "moon", "jelly"];
const M3SHC = ["diamond", "circle", "fish", "coral", "heart", "tree", "star", "moon", "jelly"];
const m3Shape = (e, t) =>
  !t && e >= 20
    ? M3SHAPES[M3SHL[e]]
    : t
      ? M3SHAPES[M3SHL[e % M3SHL.length]]
      : M3SHAPES["n_" + (M3SHN[e] || M3SHC[e % 9])];
const M3N = 8;
const M3E = ["❄️", "🌲", "🔔", "🍄", "🧣", "🍪"];
const M3XE = ["🎄", "🎁", "🦃", "🕯️", "🍪", "🔔"];
const M3K = ["#7db9ee", "#a98fe0", "#f0c15c", "#e3706a", "#5fbf84", "#f089b8"];
const M3S = {
  z: '<svg viewBox="0 0 40 40" aria-hidden="true"><g transform="translate(0 0)"><polygon fill="#f2a91e" stroke="#8a4f08" stroke-width="2.4" stroke-linejoin="round" points="18.5,12 3,3 12,18.5 17,24 24,17"/><polygon fill="#ffe680" points="17,14.5 6.5,6.5 14.5,17 19,20 20,19"/><polygon fill="#f2a91e" stroke="#8a4f08" stroke-width="2.6" stroke-linejoin="round" points="15.5,21.0 19.0,15.0 27.0,14.0 34.0,19.5 34.5,28.0 28.0,34.5 19.5,33.0 15.0,27.5"/><polygon fill="#ffe680" points="25,24.5 15.5,21.0 19.0,15.0"/><polygon fill="#f2a91e" points="25,24.5 19.0,15.0 27.0,14.0"/><polygon fill="#ffe680" points="25,24.5 27.0,14.0 34.0,19.5"/><polygon fill="#f2a91e" points="25,24.5 34.0,19.5 34.5,28.0"/><polygon fill="#ffe680" points="25,24.5 34.5,28.0 28.0,34.5"/><polygon fill="#f2a91e" points="25,24.5 28.0,34.5 19.5,33.0"/><polygon fill="#ffe680" points="25,24.5 19.5,33.0 15.0,27.5"/><polygon fill="#f2a91e" points="25,24.5 15.0,27.5 15.5,21.0"/><circle cx="29.5" cy="28.5" r="2" fill="#f2a91e" stroke="#8a4f08" stroke-width=".8"/><circle cx="22" cy="29.5" r="1.3" fill="#f2a91e"/><path d="M31 5l1.2 2.8 2.8 1.2-2.8 1.2L31 13l-1.2-2.8-2.8-1.2 2.8-1.2z" fill="#fff" stroke="none"/></g></svg>',
  m: '<svg viewBox="0 0 40 40" aria-hidden="true"><g transform="translate(3.95 -.65)"><path d="M18.83 4.50A15.5 15.5 0 1 0 32.57 26.49A13 13 0 0 1 18.83 4.50z" fill="#f2a91e" stroke="#8a4f08" stroke-width="2.6" stroke-linejoin="round"/><path d="M18.83 4.50A15.5 15.5 0 1 0 32.57 26.49A13 13 0 0 1 18.83 4.50z" fill="#ffe680" transform="translate(18 20) scale(.86) translate(-18 -20) translate(-1.6 -.6)"/><circle cx="14.5" cy="22" r="1.5" fill="#fff6c8"/><path d="M31 5l1.2 2.8 2.8 1.2-2.8 1.2L31 13l-1.2-2.8-2.8-1.2 2.8-1.2z" fill="#fff" stroke="none"/></g></svg>',
  s: '<svg viewBox="0 0 40 40" aria-hidden="true"><g transform="translate(0 .9)"><polygon fill="#f2a91e" stroke="#8a4f08" stroke-width="2.6" stroke-linejoin="round" points="20.0,2.3 24.9,13.7 37.3,14.9 28.0,23.1 30.7,35.2 20.0,28.9 9.3,35.2 12.0,23.1 2.7,14.9 15.1,13.7"/><polygon fill="#ffe680" points="20,20.5 15.1,13.7 20.0,2.3"/><polygon fill="#f2a91e" points="20,20.5 20.0,2.3 24.9,13.7"/><polygon fill="#ffe680" points="20,20.5 24.9,13.7 37.3,14.9"/><polygon fill="#f2a91e" points="20,20.5 37.3,14.9 28.0,23.1"/><polygon fill="#ffe680" points="20,20.5 28.0,23.1 30.7,35.2"/><polygon fill="#f2a91e" points="20,20.5 30.7,35.2 20.0,28.9"/><polygon fill="#ffe680" points="20,20.5 20.0,28.9 9.3,35.2"/><polygon fill="#f2a91e" points="20,20.5 9.3,35.2 12.0,23.1"/><polygon fill="#ffe680" points="20,20.5 12.0,23.1 2.7,14.9"/><polygon fill="#f2a91e" points="20,20.5 2.7,14.9 15.1,13.7"/><circle cx="20" cy="20.5" r="2.4" fill="#fff6c8"/><path d="M31 5l1.2 2.8 2.8 1.2-2.8 1.2L31 13l-1.2-2.8-2.8-1.2 2.8-1.2z" fill="#fff" stroke="none"/></g></svg>',
  x: '<svg viewBox="0 0 40 40" aria-hidden="true"><g transform="translate(.4 -.9)"><polygon fill="#f2a91e" stroke="#8a4f08" stroke-width="2.6" stroke-linejoin="round" points="20.0,2.1 23.0,9.3 29.2,4.6 28.2,12.3 35.9,11.3 31.2,17.5 38.4,20.5 31.2,23.5 35.9,29.7 28.2,28.7 29.2,36.4 23.0,31.7 20.0,38.9 17.0,31.7 10.8,36.4 11.8,28.7 4.1,29.7 8.8,23.5 1.6,20.5 8.8,17.5 4.1,11.3 11.8,12.3 10.8,4.6 17.0,9.3"/><polygon fill="#ffe680" points="20,20.5 17.0,9.3 20.0,2.1"/><polygon fill="#f2a91e" points="20,20.5 20.0,2.1 23.0,9.3"/><polygon fill="#ffe680" points="20,20.5 23.0,9.3 29.2,4.6"/><polygon fill="#f2a91e" points="20,20.5 29.2,4.6 28.2,12.3"/><polygon fill="#ffe680" points="20,20.5 28.2,12.3 35.9,11.3"/><polygon fill="#f2a91e" points="20,20.5 35.9,11.3 31.2,17.5"/><polygon fill="#ffe680" points="20,20.5 31.2,17.5 38.4,20.5"/><polygon fill="#f2a91e" points="20,20.5 38.4,20.5 31.2,23.5"/><polygon fill="#ffe680" points="20,20.5 31.2,23.5 35.9,29.7"/><polygon fill="#f2a91e" points="20,20.5 35.9,29.7 28.2,28.7"/><polygon fill="#ffe680" points="20,20.5 28.2,28.7 29.2,36.4"/><polygon fill="#f2a91e" points="20,20.5 29.2,36.4 23.0,31.7"/><polygon fill="#ffe680" points="20,20.5 23.0,31.7 20.0,38.9"/><polygon fill="#f2a91e" points="20,20.5 20.0,38.9 17.0,31.7"/><polygon fill="#ffe680" points="20,20.5 17.0,31.7 10.8,36.4"/><polygon fill="#f2a91e" points="20,20.5 10.8,36.4 11.8,28.7"/><polygon fill="#ffe680" points="20,20.5 11.8,28.7 4.1,29.7"/><polygon fill="#f2a91e" points="20,20.5 4.1,29.7 8.8,23.5"/><polygon fill="#ffe680" points="20,20.5 8.8,23.5 1.6,20.5"/><polygon fill="#f2a91e" points="20,20.5 1.6,20.5 8.8,17.5"/><polygon fill="#ffe680" points="20,20.5 8.8,17.5 4.1,11.3"/><polygon fill="#f2a91e" points="20,20.5 4.1,11.3 11.8,12.3"/><polygon fill="#ffe680" points="20,20.5 11.8,12.3 10.8,4.6"/><polygon fill="#f2a91e" points="20,20.5 10.8,4.6 17.0,9.3"/><circle cx="20" cy="20.5" r="8.4" fill="#ffc533" stroke="#8a4f08" stroke-width="1.6"/><circle cx="20" cy="20.5" r="5.3" fill="#ffe680"/><ellipse cx="17.6" cy="18" rx="2.2" ry="1.3" transform="rotate(-35 17.6 18)" fill="#fff"/><path d="M31 5l1.2 2.8 2.8 1.2-2.8 1.2L31 13l-1.2-2.8-2.8-1.2 2.8-1.2z" fill="#fff" stroke="none"/></g></svg>',
  c: '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M3 37 21 19" stroke="#ffe680" stroke-width="8" stroke-linecap="round" opacity=".5"/><path d="M8 38 23 23M2 31 17 16" stroke="#f2a91e" stroke-width="2.6" stroke-linecap="round"/><circle cx="25" cy="15" r="10.5" fill="#f2a91e" stroke="#8a4f08" stroke-width="2.4"/><circle cx="25" cy="15" r="6.6" fill="#ffe680"/><circle cx="22.5" cy="12.5" r="2.2" fill="#fff"/><path d="M34 26l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z" fill="#fff"/></svg>',
};
const M3G = [
  { mv: 24, k: 4, c: { 0: 10 } },
  { mv: 24, k: 4, p: 600 },
  { mv: 24, k: 5, c: { 0: 12, 1: 12 } },
  { mv: 22, k: 5, m: { m: 2 } },
  { mv: 24, k: 5, c: { 2: 16 } },
  { mv: 24, k: 5, p: 1e3 },
  { mv: 24, k: 5, c: { 1: 14, 3: 14 } },
  { mv: 22, k: 5, m: { s: 1 } },
  { mv: 26, k: 5, c: { 0: 16, 4: 14 } },
  { mv: 24, k: 5, m: { m: 2, s: 1 } },
  { mv: 26, k: 5, p: 1500 },
  { mv: 24, k: 5, c: { 2: 18, 3: 18 } },
  { mv: 24, k: 5, m: { x: 1 } },
  { mv: 28, k: 5, c: { 0: 15, 1: 15, 2: 15 } },
  { mv: 26, k: 6, p: 1800 },
  { mv: 26, k: 6, c: { 4: 18, 5: 18 } },
  { mv: 26, k: 6, m: { m: 2, s: 2 } },
  { mv: 28, k: 6, c: { 0: 16, 2: 16, 5: 16 } },
  { mv: 28, k: 6, p: 2400 },
  { mv: 30, k: 6, m: { x: 1, m: 1, s: 1 }, c: { 3: 20 } },
  { mv: 26, k: 6, c: { 0: 18, 1: 18 } },
  { mv: 26, k: 6, p: 2400 },
  { mv: 26, k: 6, m: { m: 3 } },
  { mv: 28, k: 6, c: { 2: 20, 4: 20 } },
  { mv: 26, k: 6, m: { s: 2, m: 1 } },
  { mv: 28, k: 6, p: 2900 },
  { mv: 28, k: 6, c: { 1: 18, 3: 18, 5: 18 } },
  { mv: 26, k: 6, m: { x: 1, s: 1 } },
  { mv: 28, k: 6, c: { 0: 20, 5: 20 } },
  { mv: 28, k: 6, p: 2800 },
  { mv: 28, k: 6, m: { m: 3, s: 2 } },
  { mv: 30, k: 6, c: { 2: 20, 3: 20, 4: 20 } },
  { mv: 28, k: 6, m: { x: 2 } },
  { mv: 30, k: 6, p: 3400 },
  { mv: 30, k: 6, c: { 0: 24, 1: 24 } },
  { mv: 28, k: 6, m: { x: 1, m: 2, s: 1 } },
  { mv: 30, k: 6, c: { 3: 20, 5: 20 }, m: { s: 1 } },
  { mv: 30, k: 6, p: 3600 },
  { mv: 32, k: 6, c: { 0: 16, 2: 16, 4: 16, 5: 16 } },
  { mv: 32, k: 6, m: { x: 2, m: 2, s: 2 }, c: { 1: 20 } },
  { mv: 24, k: 5, rz: "bot2", sh: "n_sq" },
  { mv: 24, k: 5, rz: "mid", sh: "diamond" },
  { mv: 26, k: 5, rz: "ring", sh: "n_circle" },
  { mv: 26, k: 6, rz: "chk", sh: "heart" },
  { mv: 26, k: 6, rz: "bot3", c: { 2: 16 }, sh: "igloo" },
  { mv: 28, k: 6, rz: "x", sh: "plus" },
  { mv: 28, k: 6, rz: "core", sh: "castle" },
  { mv: 28, k: 6, rz: "bot2d", sh: "crown" },
  { mv: 30, k: 6, rz: "all", sh: "n_sq" },
  { mv: 30, k: 6, rz: "ring2", sh: "butterfly" },
  { mv: 24, k: 5, al: 4, sh: "n_sq" },
  { mv: 26, k: 5, al: 6, c: { 1: 14 }, sh: "n_circle" },
  { mv: 26, k: 6, al: 6, rz: "bot2", sh: "igloo" },
  { mv: 26, k: 6, al: 7, sh: "diamond" },
  { mv: 28, k: 6, al: 8, m: { m: 2 }, sh: "plus" },
  { mv: 28, k: 6, al: 8, rz: "ring", sh: "castle" },
  { mv: 28, k: 6, al: 10, sh: "n_sq" },
  { mv: 30, k: 6, al: 9, rz: "mid", sh: "crown" },
  { mv: 30, k: 6, al: 10, p: 2400, sh: "heart" },
  { mv: 32, k: 6, al: 12, rz: "chk", sh: "n_circle" },
  { mv: 26, k: 5, an: 2, sh: "n_sq" },
  { mv: 28, k: 5, an: 3, c: { 0: 12 }, sh: "n_circle" },
  { mv: 28, k: 6, an: 3, rz: "bot2", sh: "diamond" },
  { mv: 30, k: 6, an: 4, al: 5, sh: "castle" },
  { mv: 32, k: 6, an: 5, sh: "n_sq" },
  { mv: 28, k: 6, an: 3, c: { 2: 16 }, sh: "heart" },
  { mv: 30, k: 6, rz: "ring", al: 6, sh: "n_circle" },
  { mv: 30, k: 6, an: 4, m: { s: 2 }, sh: "crown" },
  { mv: 32, k: 6, rz: "x", al: 8, c: { 0: 18 }, sh: "castle" },
  { mv: 34, k: 6, an: 5, rz: "chk", al: 6, sh: "n_sq" },
  { k: 5, oy: 4, sh: "n_sq" },
  { k: 5, oy: 5, m: { c: 1 }, sh: "shell" },
  { k: 5, oy: 5, sh: "n_circle" },
  { k: 6, oy: 6, sh: "starfish" },
  { k: 6, oy: 6, rz: "bot2", sh: "turtle" },
  { k: 6, oy: 6, al: 4, sh: "n_sq" },
  { k: 6, oy: 7, m: { c: 2 }, sh: "wave" },
  { k: 6, oy: 7, c: { 1: 18 }, sh: "shell" },
  { k: 6, oy: 8, rz: "ring", sh: "turtle" },
  { k: 6, jb: { r: 1, c: 3, hp: 14 }, oy: 4, sh: "n_sq" },
  { k: 5, ink: 3, sh: "n_sq" },
  { k: 5, ink: 4, sh: "whale" },
  { k: 6, ink: 4, m: { c: 1 }, sh: "n_circle" },
  { k: 6, ink: 5, oy: 3, sh: "crescent" },
  { k: 6, ink: 5, sh: "anchor" },
  { k: 6, ink: 6, al: 4, sh: "n_sq" },
  { k: 6, ink: 6, c: { 2: 18 }, sh: "whale" },
  { k: 6, ink: 6, rz: "mid", sh: "starfish" },
  { k: 6, ink: 7, oy: 4, sh: "shell" },
  { k: 6, jb: { r: 3, c: 3, hp: 18 }, ink: 3, sh: "n_sq" },
  { k: 5, cu: [[3, 1]], p: 1500, sh: "n_sq" },
  {
    k: 5,
    cu: [
      [2, 1],
      [5, -1],
    ],
    c: { 0: 16 },
    sh: "n_sq",
  },
  { k: 6, cu: [[4, 1]], oy: 4, sh: "n_circle" },
  {
    k: 6,
    cu: [
      [1, -1],
      [6, 1],
    ],
    m: { c: 2 },
    sh: "wave",
  },
  {
    k: 6,
    cu: [
      [3, 1],
      [4, -1],
    ],
    ink: 4,
    sh: "n_sq",
  },
  { k: 6, cu: [[2, -1]], rz: "bot3", sh: "turtle" },
  { k: 6, cu: [[5, 1]], an: 3, sh: "n_sq" },
  {
    k: 6,
    cu: [
      [1, 1],
      [3, -1],
      [5, 1],
    ],
    oy: 6,
    sh: "n_sq",
  },
  {
    k: 6,
    cu: [
      [2, 1],
      [6, -1],
    ],
    ink: 5,
    al: 4,
    sh: "n_circle",
  },
  { k: 5, fe: 1, p: 32e3, sh: "n_sq" },
  { k: 5, pt: "a", p: 1500, sh: "isl_a" },
  { k: 5, pt: "a", c: { 1: 16 }, sh: "isl_a" },
  { k: 6, pt: "b", oy: 4, sh: "isl_b" },
  { k: 6, pt: "c", p: 2e3, sh: "isl_c" },
  { k: 6, pt: "a", ink: 4, sh: "isl_a" },
  { k: 6, pt: "b", m: { c: 2 }, sh: "isl_b" },
  { k: 6, pt: "c", oy: 4, sh: "isl_c" },
  { k: 6, pt: "a", rz: "chk", sh: "isl_a" },
  { k: 6, pt: "b", ink: 4, c: { 3: 16 }, sh: "isl_b" },
  { k: 6, jb: { r: 5, c: 5, hp: 16 }, pt: "a", sh: "isl_a" },
  { k: 6, oy: 5, ink: 3, sh: "seahorse" },
  { k: 6, cu: [[3, 1]], oy: 5, m: { c: 1 }, sh: "n_sq" },
  { k: 6, pt: "c", ink: 4, oy: 3, sh: "isl_c" },
  { k: 6, ink: 5, an: 3, sh: "n_sq" },
  {
    k: 6,
    cu: [
      [2, -1],
      [5, 1],
    ],
    ink: 4,
    oy: 4,
    sh: "n_sq",
  },
  { k: 6, oy: 6, rz: "x", al: 4, sh: "n_circle" },
  { k: 6, pt: "b", cu: [[5, 1]], oy: 4, sh: "isl_b" },
  { k: 6, ink: 6, m: { c: 2 }, c: { 0: 18 }, sh: "starfish" },
  {
    k: 6,
    cu: [
      [1, 1],
      [6, -1],
    ],
    oy: 5,
    ink: 4,
    an: 2,
    sh: "n_sq",
  },
  { k: 6, jb: { r: 2, c: 3, hp: 26 }, ink: 4, oy: 4, cu: [[6, 1]], sh: "n_sq" },
];
const M3AN = ["🐠", "🦀", "🐙", "🐡", "🦐", "🐬"];
const M3ORD = [
  ...Array(24).keys(),
  40,
  24,
  25,
  41,
  26,
  27,
  42,
  28,
  29,
  43,
  30,
  31,
  44,
  32,
  45,
  50,
  33,
  46,
  51,
  34,
  52,
  47,
  35,
  53,
  36,
  54,
  48,
  37,
  55,
  56,
  38,
  49,
  57,
  39,
  58,
  59,
];
M3ORD.splice(54, 0, 60, 61, 62, 63, 64);
{
  const e = M3ORD.slice(55, 65);
  M3ORD.splice(55, 10, e[4], e[0], e[5], e[6], e[1], e[7], e[2], e[8], e[9], e[3]);
}
M3ORD.push(65, 66, 67, 68, 69);
for (let e = 70; e < 120; e++) M3ORD.push(e);
function m3RZ(e, t) {
  const s = (e) => e >= 0 && e < 64 && t[e],
    l = (e) => {
      const t = (e / 8) | 0,
        l = e % 8;
      return !(0 !== t && 7 !== t && 0 !== l && 7 !== l && s(e - 1) && s(e + 1) && s(e - 8) && s(e + 8));
    };
  return t.map((t, s) => {
    if (!t) return 0;
    const a = (s / 8) | 0,
      o = s % 8;
    switch (e) {
      case "bot2":
        return a >= 6 ? 1 : 0;
      case "bot3":
        return a >= 5 ? 1 : 0;
      case "bot2d":
        return a >= 6 ? 2 : 5 === a ? 1 : 0;
      case "mid":
        return 3 === a || 4 === a ? 1 : 0;
      case "ring":
        return l(s) ? 1 : 0;
      case "ring2":
        return l(s) ? 2 : 0;
      case "core":
        return l(s) ? 0 : 1;
      case "chk":
        return (a + o) % 2 ? 0 : 1;
      case "x":
        return a === o || a + o === 7 ? 1 : 0;
      case "all":
        return 1;
    }
    return 0;
  });
}
const M3ALG =
  '<svg viewBox="0 0 40 40" aria-hidden="true"><g fill="none" stroke-linecap="round"><path d="M6 40C2 30 12 26 7 16S10 4 8 0" stroke="#1f7a45" stroke-width="5"/><path d="M34 40C38 31 28 25 33 15S30 5 33 0" stroke="#1f7a45" stroke-width="5"/><path d="M2 26Q20 14 38 26M2 16Q20 26 38 14" stroke="#2fa35f" stroke-width="4.2"/><path d="M6 40C2 30 12 26 7 16S10 4 8 0M34 40C38 31 28 25 33 15S30 5 33 0" stroke="#6fd38f" stroke-width="1.6" opacity=".7"/></g></svg>';
let m3Tok = 0;
const M3OY =
  '<svg viewBox="0 0 40 40" aria-hidden="true"><path class="oyb" d="M4 23Q4 33 20 34.5Q36 33 36 23Q28 26.5 20 26.5T4 23z" fill="#c9b8e6" stroke="#5a4a7a" stroke-width="1.8" stroke-linejoin="round"/><circle class="oyp" cx="20" cy="24" r="5" fill="#fff8ee"/><path class="oyt" d="M4 23Q5 7 20 6Q35 7 36 23Q28 26.5 20 26.5T4 23z" fill="#e6dcf6" stroke="#5a4a7a" stroke-width="1.8" stroke-linejoin="round"/><path class="oyt" d="M20 8v17M12 10l4 15M28 10l-4 15M7 16l7 9M33 16l-7 9" stroke="#b8a6d8" stroke-width="1.3" fill="none"/><path class="oyc" d="M14 9l3 5-2 3 3 4M27 12l-2 4 3 3" stroke="#5a4a7a" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>';
const M3PE =
  '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="13" fill="#fff8ee" stroke="#d9c8e6" stroke-width="2"/><circle cx="15" cy="15" r="4.5" fill="#fff"/><path d="M27 26a9 9 0 0 1-9 4" stroke="#e6d6f2" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>';
const M3INK =
  '<svg viewBox="0 0 40 40" aria-hidden="true"><path class="inkb" d="M20 4C27 4 29 9 33 11S38 20 34 25 33 34 26 35 16 38 11 33 3 27 5 20 7 9 12 6 16 4 20 4z" fill="#2a1648" stroke="#7a5ab0" stroke-width="1.6"/><circle cx="15" cy="18" r="3.2" fill="#fff"/><circle cx="25" cy="18" r="3.2" fill="#fff"/><circle cx="15.6" cy="19" r="1.5" fill="#1a0a30"/><circle cx="25.6" cy="19" r="1.5" fill="#1a0a30"/><path d="M16 26q4 2 8 0" stroke="#c9a8ff" stroke-width="1.6" fill="none" stroke-linecap="round"/><circle cx="12" cy="11" r="2" fill="#5a3a90"/></svg>';
const M3JB =
  '<svg viewBox="0 0 80 80" aria-hidden="true"><g class="tn" fill="none" stroke-linecap="round" stroke-width="4"><path d="M18 46q-4 10 2 18t0 14" stroke="#e08ad9"/><path d="M30 48q4 10-2 18t2 12" stroke="#c9a8ff"/><path d="M40 48q-4 12 2 20" stroke="#ff9ed0"/><path d="M50 48q4 10-2 18t2 12" stroke="#c9a8ff"/><path d="M62 46q4 10-2 18t0 14" stroke="#e08ad9"/></g><path d="M8 44Q8 8 40 8T72 44Q66 50 58 46Q50 52 40 47Q30 52 22 46Q14 50 8 44z" fill="#ff9ed0" stroke="#a8418a" stroke-width="2.4"/><path d="M16 36Q18 16 40 14" stroke="#ffd6ef" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/><circle cx="30" cy="32" r="5.5" fill="#fff"/><circle cx="50" cy="32" r="5.5" fill="#fff"/><circle cx="31" cy="33" r="2.8" fill="#3a1030"/><circle cx="51" cy="33" r="2.8" fill="#3a1030"/><path d="M33 41q7 4 14 0" stroke="#a8418a" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M24 26l7 3M56 26l-7 3" stroke="#a8418a" stroke-width="2.4" stroke-linecap="round"/><circle cx="56" cy="20" r="2.5" fill="#fff" opacity=".8"/></svg>';
const M3JBI =
  '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M5 22Q5 5 20 5T35 22Q31 25 27 23Q24 26 20 24Q16 26 13 23Q9 25 5 22z" fill="#ff9ed0" stroke="#a8418a" stroke-width="1.6"/><path d="M12 25q-2 5 1 10M20 26v10M28 25q2 5-1 10" stroke="#e08ad9" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="15" cy="16" r="2.2" fill="#3a1030"/><circle cx="25" cy="16" r="2.2" fill="#3a1030"/></svg>';
function m3Runs(e) {
  const t = [],
    s = [];
  for (let s = 0; s < 8; s++)
    for (const l of ["h", "v"]) {
      let a = 0;
      for (; a < 8;) {
        const o = (t) => ("h" === l ? e[8 * s + t] : e[8 * t + s]),
          n = o(a);
        let i = a + 1;
        if (n >= 0) for (; i < 8 && o(i) === n;) i++;
        (n >= 0 &&
          i - a >= 3 &&
          t.push({
            d: l,
            c: Array.from({ length: i - a }, (e, t) => ("h" === l ? 8 * s + a + t : 8 * (a + t) + s)),
          }),
          (a = i));
      }
    }
  for (let t = 0; t < 7; t++)
    for (let l = 0; l < 7; l++) {
      const a = 8 * t + l,
        o = e[a];
      o >= 0 &&
        e[a + 1] === o &&
        e[a + 8] === o &&
        e[a + 8 + 1] === o &&
        s.push([a, a + 1, a + 8, a + 8 + 1]);
    }
  return { runs: t, sq: s };
}
const m3Has = (e) => {
  const t = m3Runs(e);
  return t.runs.length > 0 || t.sq.length > 0;
};
function m3Swap(e, t) {
  for (let s = 0; s < 8; s++)
    for (let l = 0; l < 8; l++)
      for (const [a, o] of [
        [0, 1],
        [1, 0],
      ]) {
        const n = s + a,
          i = l + o;
        if (n >= 8 || i >= 8) continue;
        const r = 8 * s + l,
          c = 8 * n + i;
        if (e[r] < 0 || e[c] < 0 || e[r] === e[c] || (t && (t[r] || t[c]))) continue;
        [e[r], e[c]] = [e[c], e[r]];
        const f = m3Has(e);
        if ((([e[r], e[c]] = [e[c], e[r]]), f)) return [r, c];
      }
  return null;
}
function m3Plan(e, t, s) {
  const { runs: l, sq: a } = m3Runs(e),
    o = new Set(),
    n = new Map();
  (l.forEach((e) => e.c.forEach((e) => o.add(e))), a.forEach((e) => e.forEach((e) => o.add(e))));
  const i = (e) => {
    const l = (e) => !n.has(e) && !s(e);
    let a = e.find((e) => t && t.includes(e) && l(e));
    if (void 0 !== a) return a;
    const o = e[e.length >> 1];
    return l(o) ? o : ((a = e.find(l)), a);
  };
  l.filter((e) => e.c.length >= 5).forEach((e) => {
    const t = i(e.c);
    void 0 !== t && n.set(t, { s: "x" });
  });
  for (let t = 0; t < 64; t++) {
    const l = e[t];
    if (l < 0 || n.has(t) || s(t)) continue;
    const a = 8,
      o = (t / a) | 0,
      i = t % a,
      r = (s) => e[t + s] === l,
      c = i > 0 && i < a - 1 && r(-1) && r(1),
      f = o > 0 && o < a - 1 && r(-a) && r(a),
      d = o > 1 && r(-a) && r(-2 * a),
      h = o < a - 2 && r(a) && r(2 * a),
      m = i > 1 && r(-1) && r(-2),
      p = i < a - 2 && r(1) && r(2);
    (c && f) || (c && (d || h)) || (f && (m || p))
      ? n.set(t, { s: "c" })
      : (m || p) && (d || h) && n.set(t, { s: "z" });
  }
  l.filter((e) => 4 === e.c.length).forEach((e) => {
    const t = i(e.c);
    void 0 !== t && n.set(t, { s: "m", o: e.d });
  });
  const r = [];
  return (
    a.forEach((e) => {
      const t = r.filter((t) => e.some((e) => t.includes(e))),
        s = [...new Set([].concat(e, ...t))];
      (t.forEach((e) => r.splice(r.indexOf(e), 1)), r.push(s));
    }),
    r.forEach((e) => {
      const t = i(e.sort((e, t) => e - t));
      void 0 !== t && n.set(t, { s: "s" });
    }),
    { cells: o, mk: n }
  );
}
function pMatch(e) {
  const t = 8,
    s = isX("match3", lv),
    l = s ? 10 + xn("match3", lv) - 1 : (M3ORD[lv] ?? lv),
    a = M3G[l],
    o = ((M3XM = s), s ? m3Shape(l, s) : a.sh ? M3SHAPES[a.sh] : m3Shape(l, s))
      .join("")
      .split("")
      .map((e) => "#" === e),
    n = o.some((e) => !e),
    i = s ? M3KX : M3K,
    r = ++m3Tok,
    c =
      l >= 110
        ? "m3q5"
        : l >= 100
          ? "m3q4"
          : 99 === l
            ? "m3fe"
            : l >= 90
              ? "m3q3"
              : l >= 80
                ? "m3q2"
                : l >= 70
                  ? "m3q1"
                  : "";
  let f = !1,
    d = null,
    h = 0;
  const m = (e) => !(!e || (!e.a && !e.b));
  let p = Array(t * t).fill(null),
    u = 0,
    k = 0,
    g = { c: {}, m: { m: 0, s: 0, x: 0 } },
    y = !1,
    M = null,
    v = 0,
    x = 0,
    b = !1;
  e && ((g.c = e.c || {}), (g.m = Object.assign(g.m, e.m || {})), (u = e.n || 0), (k = e.sc));
  const w = a.rz ? m3RZ(a.rz, o) : null,
    E = w ? (e && e.R ? e.R.slice() : w.slice()) : null,
    L = w ? w.reduce((e, t) => e + t, 0) : 0,
    C = () => p.map((e) => m(e));
  snap = () => ({
    T: p.map((e) =>
      e ? (e.b ? [-3, 0, 0, 0, 0, e.b, e.hp || 0] : [e.t, e.s || 0, e.o || 0, e.a || 0, e.an || 0]) : null,
    ),
    n: u,
    sc: k,
    c: g.c,
    m: g.m,
    R: E ? E.slice() : void 0,
    J: d ? d.hp : 0,
    I: h,
  });
  const T = [];
  (E && T.push({ k: "r", n: L }),
    a.al && T.push({ k: "a", n: a.al }),
    a.an && T.push({ k: "n", n: a.an }),
    a.c && Object.entries(a.c).forEach(([e, t]) => T.push({ k: "c", t: +e, n: t })),
    a.p && T.push({ k: "p", n: a.p }),
    a.m && Object.entries(a.m).forEach(([e, t]) => T.push({ k: "m", s: e, n: t })),
    a.oy && T.unshift({ k: "pe", n: a.oy }),
    a.ink && T.unshift({ k: "i", n: 1 }),
    a.jb && T.unshift({ k: "jb", n: 1 }));
  const z = () => p.filter((e) => e && "ink" === e.b).length,
    S = (e) =>
      "pe" === e.k
        ? g.m.pe || 0
        : "i" === e.k
          ? z()
            ? 0
            : 1
          : "jb" === e.k
            ? d && d.hp > 0
              ? 0
              : 1
            : "r" === e.k
              ? L - E.reduce((e, t) => e + t, 0)
              : "a" === e.k
                ? a.al - p.filter((e) => e && e.a).length
                : "n" === e.k
                  ? g.m.rs || 0
                  : "c" === e.k
                    ? g.c[e.t] || 0
                    : "p" === e.k
                      ? k
                      : g.m[e.s] || 0,
    _ = (e) => S(e) >= e.n,
    j = () => T.every(_),
    q = (e) =>
      `<span class="m3g${_(e) ? " ok" : ""}" data-k="${e.k}">${"pe" === e.k ? `<i>${M3PE}</i>` : "i" === e.k ? `<i>${M3INK}</i>` : "jb" === e.k ? `<i>${M3JBI}</i>` : "r" === e.k ? '<i><span class="m3gr"></span></i>' : "a" === e.k ? `<i>${M3ALG}</i>` : "n" === e.k ? '<i class="m3gn">🐠</i>' : "c" === e.k ? `<i style="--c:${i[e.t]}">${m3Gem(e.t)}</i>` : "p" === e.k ? "<i>✦</i>" : `<i>${M3S[e.s]}</i>`}<b>${_(e) ? "✓" : "i" === e.k ? "× " + z() : "jb" === e.k ? Math.max(0, d ? d.hp : 0) + " ♥" : Math.min(S(e), e.n) + " / " + e.n}</b></span>`,
    Q = () => {
      const e = $("#m3mv"),
        t = $("#m3sc"),
        s = $("#m3go");
      (e && (e.textContent = u), t && (t.textContent = k), s && (s.innerHTML = T.map(q).join("")));
    };
  frame(
    `<div class="m3 ${c}"><div class="m3sea" aria-hidden="true">${[8, 22, 35, 50, 63, 77, 90].map((e, t) => `<span class="m3bu" style="left:${e}%;--s:${6 + (t % 3) * 4}px;--d:${5 + (t % 4) * 1.7}s;animation-delay:-${1.3 * t}s"></span>`).join("")}<span class="m3fi" style="top:20%;--t:34s">${fishSVG(FISH.find((e) => "tortue" === e.id))}</span><span class="m3fi r" style="top:52%;--t:26s;animation-delay:-9s">${fishSVG(FISH.find((e) => "meduse" === e.id))}</span><span class="m3fi" style="top:80%;--t:30s;animation-delay:-17s">${fishSVG(FISH.find((e) => "raie" === e.id))}</span></div><div class="m3h"><div class="m3m"><b id="m3mv">${u}</b><small>coups joués</small></div><div class="m3o" id="m3go"></div><div class="m3m"><b id="m3sc">${k}</b><small>points</small></div></div><div class="m3b" id="m3b" role="application" aria-label="Plateau de jeu"></div></div>`,
    5,
  );
  {
    let e = document.getElementById("m3wall");
    c
      ? (e || ((e = document.createElement("div")), (e.id = "m3wall"), document.body.appendChild(e)),
        (e.className = "m3wall " + c),
        window.m3WI ||
          (window.m3WI = setInterval(() => {
            if (!document.querySelector("#m3b")) {
              const e = document.getElementById("m3wall");
              e && e.remove();
            }
          }, 400)))
      : e && e.remove();
  }
  const N = $("#m3b"),
    H = () => r === m3Tok && playing && $("#m3b") === N,
    A = (e) =>
      new Promise((t) => setTimeout(t, matchMedia("(prefers-reduced-motion: reduce)").matches ? e / 3 : e)),
    B = (e, t, s) => {
      ((e.r = t), (e.c = s), (e.el.style.transform = `translate(${100 * s}%,${100 * t}%)`));
    };
  let I = N,
    R = N;
  if (n) {
    N.classList.add("sh");
    const e = (e, t, s) => {
      const l = document.createElement("i");
      ((l.className = "m3c " + e),
        (l.style.cssText = `left:${12.5 * s}%;top:${12.5 * t}%`),
        N.appendChild(l));
    };
    (["f2", "f1"].forEach((s) =>
      o.forEach((l, a) => {
        l && e(s, (a / t) | 0, a % t);
      }),
    ),
      o.forEach((s, l) => {
        s && e("c" + ((((l / t) | 0) + (l % t)) % 2), (l / t) | 0, l % t);
      }),
      (R = document.createElement("div")),
      (R.className = "m3tl"));
    const s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" preserveAspectRatio="none">${o.map((e, s) => (e ? `<rect x="${((s % t) - 0.06).toFixed(2)}" y="${(((s / t) | 0) - 0.06).toFixed(2)}" width="1.12" height="1.12"/>` : "")).join("")}</svg>`,
      l = `url("data:image/svg+xml,${encodeURIComponent(s)}")`;
    ((R.style.webkitMaskImage = l),
      (R.style.maskImage = l),
      N.appendChild(R),
      (I = document.createElement("div")),
      (I.className = "m3fx"),
      N.appendChild(I));
  }
  const P = [];
  if (E) {
    const e = document.createElement("div");
    ((e.className = "m3rz"),
      o.forEach((s, l) => {
        if (!s) return;
        const a = document.createElement("i");
        ((a.className = "m3r"),
          (a.style.cssText = `left:${(l % t) * 12.5}%;top:${12.5 * ((l / t) | 0)}%`),
          e.appendChild(a),
          (P[l] = a));
      }),
      R.appendChild(e));
  }
  const F = a.pt ? M3PT[a.pt] : null,
    O = {},
    W = new Set();
  F &&
    F.forEach(([e, t]) => {
      ((O[e] = t), W.add(t));
    });
  const D = (e) => {
      if (void 0 !== O[e]) return O[e];
      const s = e % t;
      for (let l = 1 + ((e / t) | 0); l < t; l++) {
        const e = l * t + s;
        if (o[e]) return W.has(e) ? -1 : e;
      }
      return -1;
    },
    G = (() => {
      const e = new Set();
      o.forEach((t, s) => {
        if (t) {
          const t = D(s);
          t >= 0 && e.add(t);
        }
      });
      const t = [];
      return (
        o.forEach((s, l) => {
          if (s && !e.has(l)) {
            const e = [];
            let s = l;
            for (; s >= 0 && e.length < 64;) (e.push(s), (s = D(s)));
            t.push(e);
          }
        }),
        t
      );
    })();
  if (a.cu) {
    const e = document.createElement("div");
    ((e.className = "m3cul"),
      a.cu.forEach(([t, s]) => {
        const l = document.createElement("i");
        ((l.className = "m3cu " + (s > 0 ? "r" : "l")), (l.style.top = 12.5 * t + "%"), e.appendChild(l));
      }),
      R.appendChild(e));
  }
  if (F) {
    const e = [190, 300, 45, 130];
    F.forEach(([s, l], a) => {
      [
        [s, "f"],
        [l, "t"],
      ].forEach(([s, l]) => {
        const o = document.createElement("i");
        ((o.className = "m3po " + l),
          (o.style.cssText = `left:${(s % t) * 12.5}%;top:${12.5 * ((s / t) | 0)}%;--h:${e[Math.floor(a / (F.length > 4 ? 2 : 1)) % 4]}`),
          I.appendChild(o));
      });
    });
  }
  const V = (e) => {
    const t = P[e];
    t && (t.dataset.n = E[e]);
  };
  E &&
    o.forEach((e, t) => {
      e && V(t);
    });
  const Z = (e) =>
      e.b
        ? ((e.el.className = "m3t m3k k-" + e.b + ("oy" === e.b && e.hp < 2 ? " cr" : "")),
          (e.el.dataset.t = -3),
          e.el.style.setProperty("--c", "#fff"),
          void (e.el.innerHTML = "oy" === e.b ? `<i>${M3OY}</i>` : "ink" === e.b ? `<i>${M3INK}</i>` : ""))
        : e.an
          ? ((e.el.className = "m3t an"),
            (e.el.dataset.t = -2),
            e.el.style.setProperty("--c", "#bfe8ff"),
            void (e.el.innerHTML = `<i class="m3an"><span>${M3AN[(e.an - 1) % M3AN.length]}</span></i>`))
          : ((e.el.className =
              "m3t" + (e.s ? " sp sp-" + e.s + (e.o ? " o-" + e.o : "") : "") + (e.a ? " al" : "")),
            (e.el.dataset.t = e.t),
            e.el.style.setProperty("--c", e.t >= 0 ? i[e.t] : "#fff"),
            void (e.el.innerHTML =
              (e.s ? `<i><u>${M3S[e.s]}</u></i>` : `<i>${m3Gem(e.t)}</i>`) +
              (e.a ? `<b class="m3al">${M3ALG}</b>` : ""))),
    X = (e, t, s, l, a) => {
      const o = document.createElement("div"),
        n = { id: ++v, t: e, s: t || 0, o: s || 0, el: o };
      return (
        o.setAttribute("role", "img"),
        o.setAttribute("aria-hidden", "true"),
        Z(n),
        B(n, l, a),
        R.appendChild(o),
        n
      );
    },
    J = () => p.map((e) => (e && e.t >= 0 ? e.t : -1)),
    K = Array(t * t).fill(0);
  if (!e) {
    const e = new Set();
    if (a.jb) {
      const { r: s, c: l } = a.jb;
      [0, 1, t, t + 1].forEach((a) => {
        ((K[s * t + l + a] = "jb"), e.add(s * t + l + a));
      });
    }
    const s = sh(
        o
          .map((s, l) =>
            s &&
            l >= t &&
            !e.has(l) &&
            l !==
              ((e) => {
                for (let s = t - 1; s >= 0; s--) if (o[s * t + e]) return s * t + e;
                return -1;
              })(l % t) &&
            !W.has(l) &&
            void 0 === O[l]
              ? l
              : -1,
          )
          .filter((e) => e >= 0),
      ),
      l = (a.oy || 0) + (a.ink || 0);
    s.length < l &&
      sh(o.map((t, l) => (!t || e.has(l) || s.includes(l) ? -1 : l)).filter((e) => e >= 0)).forEach((e) =>
        s.unshift(e),
      );
    const n = a.pt
      ? (() => {
          const e = new Set(),
            l = (e) => {
              let s = e;
              for (; s % t > 0 && o[s - 1];) s--;
              return s;
            },
            a = (e) => e % t === 0 || !o[e - 1] || e % t === t - 1 || !o[e + 1];
          return () => {
            for (let t = s.length - 1; t >= 0; t--) {
              const o = s[t];
              if (a(o) && !e.has(l(o))) return (e.add(l(o)), s.splice(t, 1), o);
            }
            return s.pop();
          };
        })()
      : () => s.pop();
    for (let e = 0; e < (a.oy || 0) && s.length; e++) {
      const e = n();
      void 0 !== e && (K[e] = "oy");
    }
    for (let e = 0; e < (a.ink || 0) && s.length; e++) {
      const e = n();
      void 0 !== e && (K[e] = "ink");
    }
  }
  const U = (e, s, l) => {
      const a = (s / t) | 0,
        o = s % t,
        n = document.createElement("div"),
        i = { id: ++v, t: -3, b: e, hp: l || ("oy" === e ? 2 : 1), s: 0, el: n };
      return (
        B(i, a, o),
        R.appendChild(n),
        "jb" === e ? ((i.boss = d), (n.style.display = "none")) : Z(i),
        i
      );
    },
    Y = (e, s) => {
      const l = (e / t) | 0,
        o = e % t;
      d = { hp: s, mx: a.jb.hp, i0: e, el: document.createElement("div") };
      const n = d.el;
      ((n.className = "m3jb"),
        (n.style.cssText = `left:${12.5 * o}%;top:${12.5 * l}%`),
        (n.innerHTML = `<div class="m3jbb">${M3JB}</div><div class="m3jbh"><u></u></div>`),
        N.appendChild(n),
        ee());
    },
    ee = () => {
      if (!d) return;
      const e = d.el.querySelector(".m3jbh u");
      e && (e.style.width = Math.max(0, (100 * d.hp) / d.mx) + "%");
    };
  let te = null;
  const se = () => {
    const e = o.map((e, t) => (e ? t : -1)).filter((e) => e >= 0 && e >= t),
      s = Array(t * t).fill(!1);
    return (
      sh(e)
        .slice(0, a.al)
        .forEach((e) => (s[e] = !0)),
      s
    );
  };
  if ((e && a.jb && e.J > 0 && Y(a.jb.r * t + a.jb.c, e.J), e && e.I && (h = e.I), e))
    e.T.forEach((e, s) => {
      e && o[s] && e[5]
        ? ("jb" !== e[5] || d) && (p[s] = U(e[5], s, e[6]))
        : e &&
          o[s] &&
          ((p[s] = X(e[4] ? 0 : e[0], e[1], e[2], (s / t) | 0, s % t)),
          e[3] && ((p[s].a = 1), Z(p[s])),
          e[4] && ((p[s].an = e[4]), (p[s].t = -2), Z(p[s])));
    });
  else {
    let e;
    do {
      e = Array(t * t).fill(-1);
      for (let s = 0; s < t * t; s++) {
        if (!o[s] || K[s]) continue;
        let t,
          l = 0;
        do {
          ((t = Math.floor(Math.random() * a.k)), (e[s] = t), l++);
        } while (l < 30 && m3Has(e.map((e, t) => (t <= s ? e : -1))));
      }
    } while (m3Has(e) || !m3Swap(e, (te = a.al ? se() : null)));
    (a.jb && Y(a.jb.r * t + a.jb.c, a.jb.hp),
      e.forEach((e, s) => {
        if (o[s]) {
          if (K[s]) return void (p[s] = U(K[s], s));
          ((p[s] = X(e, 0, 0, (s / t) | 0, s % t)), te && te[s] && ((p[s].a = 1), Z(p[s])));
        }
      }));
  }
  const le = () => Math.floor(Math.random() * a.k),
    ae = ["m", "s", "c", "z"],
    oe = (e, t) => {
      ((e.s = t || ae[Math.floor(Math.random() * ae.length)]),
        (e.o = "m" === e.s ? (Math.random() < 0.5 ? "v" : "h") : 0),
        "x" === e.s && (e.t = -1),
        Z(e));
    };
  if (a.fe && !e) {
    const e = sh(p.map((e, t) => (!e || e.b || e.a ? -1 : t)).filter((e) => e >= 0)).slice(0, 8);
    ["c", "c", "c", "m", "m", "s", "s", "x"].forEach((t, s) => {
      const l = p[e[s]];
      l && oe(l, t);
    });
  }
  const ne = () => p.filter((e) => e && e.an).length,
    ie = (e) => {
      ((e.an = 1 + Math.floor(Math.random() * M3AN.length)), (e.t = -2), (e.s = 0), (e.a = 0), Z(e));
    };
  if (a.an && !e) {
    const e = [];
    for (let s = 0; s < 3; s++)
      for (let l = 0; l < t; l++) {
        const a = s * t + l;
        o[a] && p[a] && !p[a].a && e.push(a);
      }
    (sh(e)
      .slice(0, Math.min(2, a.an))
      .forEach((e) => ie(p[e])),
      (g.m.sp = Math.min(2, a.an)));
  }
  if (e) for (let e = 0; e < t * t; e++) o[e] && !p[e] && (p[e] = X(le(), 0, 0, (e / t) | 0, e % t));
  {
    const e = T.find((e) => "pe" === e.k);
    e && (e.n = Math.max(1, (g.m.pe || 0) + p.filter((e) => e && "oy" === e.b).length));
  }
  const re = (e, s) => {
      if ("diag" === e)
        return void [45, -45].forEach((e) => {
          const l = document.createElement("div");
          ((l.className = "m3f diag"),
            (l.style.cssText = `left:${(100 * ((s % t) + 0.5)) / t - 80}%;top:${(100 * (0.5 + ((s / t) | 0))) / t - 6.25}%;rotate:${e}deg`),
            I.appendChild(l),
            setTimeout(() => l.remove(), 500));
        });
      const l = document.createElement("div");
      ((l.className = "m3f " + e),
        "row" === e
          ? (l.style.top = (100 * ((s / t) | 0)) / t + "%")
          : "col" === e
            ? (l.style.left = ((s % t) * 100) / t + "%")
            : ((l.style.left = (100 * ((s % t) - 1)) / t + "%"),
              (l.style.top = (100 * (((s / t) | 0) - 1)) / t + "%")),
        I.appendChild(l),
        setTimeout(() => l.remove(), 500));
    },
    ce = (e) => {
      const s = [...e].filter((e) => p[e] && p[e].s),
        l = new Set(),
        a = [];
      for (; s.length;) {
        const o = s.pop();
        if (l.has(o)) continue;
        l.add(o);
        const n = p[o];
        if (!n || !n.s) continue;
        const i = (o / t) | 0,
          r = o % t,
          c = [];
        if ("m" === n.s) {
          if ("v" === n.o) for (let e = 0; e < t; e++) c.push(e * t + r);
          else for (let e = 0; e < t; e++) c.push(i * t + e);
          a.push({ s: "m", i: o, o: n.o });
        } else if ("z" === n.s) {
          c.push(o);
          for (let e = 1; e < t; e++)
            for (const [s, l] of [
              [-1, -1],
              [-1, 1],
              [1, -1],
              [1, 1],
            ]) {
              const a = i + s * e,
                o = r + l * e;
              a >= 0 && a < t && o >= 0 && o < t && c.push(a * t + o);
            }
          a.push({ s: "z", i: o });
        } else if ("c" === n.s) {
          for (let e = 0; e < t; e++) (c.push(i * t + e), c.push(e * t + r));
          a.push({ s: "c", i: o });
        } else if ("s" === n.s) {
          for (let e = -1; e <= 1; e++)
            for (let s = -1; s <= 1; s++) {
              const l = i + e,
                a = r + s;
              l >= 0 && l < t && a >= 0 && a < t && c.push(l * t + a);
            }
          a.push({ s: "s", i: o });
        } else {
          let e = n.col;
          if (void 0 === e) {
            const t = {};
            (p.forEach((e) => {
              e && e.t >= 0 && (t[e.t] = (t[e.t] || 0) + 1);
            }),
              (e = +(Object.entries(t).sort((e, t) => t[1] - e[1])[0] || [0])[0]));
          }
          (p.forEach((t, s) => {
            t && (n.all || t.t === e) && c.push(s);
          }),
            a.push({ s: "x", i: o }));
        }
        c.forEach((t) => {
          p[t] && (e.add(t), p[t].s && !l.has(t) && s.push(t));
        });
      }
      return a;
    },
    fe = (e, s, l) => {
      const a = (e / t) | 0,
        o = e % t;
      for (let e = 0; e < l; e++) {
        const l = document.createElement("i"),
          n = 6.283 * Math.random(),
          i = 22 + 34 * Math.random();
        ((l.className = "m3sp" + (e % 2 ? " b" : "")),
          (l.style.cssText = `left:${(100 * (o + 0.5)) / t}%;top:${(100 * (a + 0.5)) / t}%;--c:${s};--dx:${Math.cos(n) * i}%;--dy:${Math.sin(n) * i}%`),
          N.appendChild(l),
          setTimeout(() => l.remove(), 650));
      }
    },
    de = (e, s, l) => {
      const a = document.createElement("b");
      ((a.className = "m3pt " + (s || "")),
        (a.textContent = e),
        void 0 !== l &&
          ((a.style.left = (100 * ((l % t) + 0.5)) / t + "%"),
          (a.style.top = (100 * (0.5 + ((l / t) | 0))) / t + "%")),
        N.appendChild(a),
        setTimeout(() => a.remove(), 1100));
    },
    he = async (e, s, l, o) => {
      (s.forEach((e) => {
        "c" === e.s
          ? (re("row", e.i), re("col", e.i), ye(e.i))
          : "m" === e.s
            ? re("v" === e.o ? "col" : "row", e.i)
            : "s" === e.s
              ? re("blast", e.i)
              : "z" === e.s && re("diag", e.i);
      }),
        [...e].forEach((t) => {
          p[t] && p[t].an && e.delete(t);
        }));
      const n = new Set(),
        r = [];
      let c = 0;
      if (
        ([...e].forEach((t) => {
          const s = p[t];
          s && s.b && (e.delete(t), "jb" === s.b ? (c += 2) : n.add(t));
        }),
        e.forEach((e) => {
          const s = p[e];
          s &&
            !s.a &&
            [e - t, e + t, e % t ? e - 1 : -1, e % t < t - 1 ? e + 1 : -1].forEach((e) => {
              if (e < 0 || e >= t * t) return;
              const s = p[e];
              s && s.b && ("jb" === s.b ? c++ : n.add(e));
            });
        }),
        n.forEach((e) => {
          const t = p[e];
          t &&
            (t.hp--,
            (k += 20),
            "oy" === t.b
              ? t.hp > 0
                ? (Z(t),
                  t.el.classList.remove("hit"),
                  t.el.offsetWidth,
                  t.el.classList.add("hit"),
                  sfx(330, 0.12))
                : (t.el.classList.add("open"),
                  ge(e),
                  (g.m.pe = (g.m.pe || 0) + 1),
                  r.push(e),
                  sfx(1046, 0.3),
                  setTimeout(() => sfx(1318, 0.25), 110))
              : "ink" === t.b &&
                ((f = !0), h++, t.el.classList.add("splat"), fe(e, "#3a1f6a", 6), r.push(e), sfx(260, 0.15)));
        }),
        c && d && d.hp > 0)
      ) {
        ((c = Math.min(6, c)), (d.hp -= c), (k += 25 * c), ee());
        const e = d.el;
        if (
          (e.classList.remove("hurt"),
          e.offsetWidth,
          e.classList.add("hurt"),
          de("-" + c, "jbd", d.i0 + t + 1),
          sfx(200, 0.15),
          d.hp <= 0)
        ) {
          ((d.hp = 0), e.classList.add("dead"), (k += 500), de("Méduse vaincue !", "w"));
          for (let e = 0; e < 4; e++)
            setTimeout(
              () => fe(d.i0 + [0, 1, t, t + 1][e], ["#ff9ed0", "#c9a8ff", "#7fd8ff", "#fff6c8"][e], 10),
              90 * e,
            );
          ([0, 1, t, t + 1].forEach((e) => r.push(d.i0 + e)),
            sfx(523, 0.3),
            setTimeout(() => sfx(784, 0.4), 160),
            setTimeout(() => {
              e.remove();
            }, 900));
        }
      }
      a.fe && (l >= 3 || s.length >= 2) && Me(Math.min(6, l + s.length));
      let m = 0;
      const u = new Set();
      (e.forEach((e) => {
        const t = p[e];
        t &&
          t.a &&
          ((t.a = 0),
          u.add(e),
          t.el.classList.add("free"),
          setTimeout(() => {
            Z(t);
          }, 200),
          fe(e, "#4fc77f", 4),
          sfx(660, 0.2));
      }),
        u.forEach((t) => e.delete(t)),
        e.forEach((e) => {
          if (E && E[e] > 0 && p[e]) {
            (E[e]--, V(e));
            const t = P[e];
            t && (t.classList.remove("hit"), t.offsetWidth, t.classList.add("hit"));
          }
        }),
        e.forEach((t) => {
          const l = p[t];
          l &&
            (((e) => {
              e.t >= 0 && (g.c[e.t] = (g.c[e.t] || 0) + 1);
            })(l),
            l.el.classList.add("out"),
            s.length && l.el.classList.add("boom"),
            fe(t, l.t >= 0 ? i[l.t] : "#fff6c8", e.size > 14 ? 2 : 4),
            m++);
        }));
      const y = Math.round(10 * m * (1 + 0.5 * (l - 1)));
      if (((k += y), sfx(440 + 70 * Math.min(l, 6), 0.18), vib(8), Q(), m)) {
        const t = [...e],
          a = t[t.length >> 1];
        (de("+" + y, "pt", a),
          l >= 2
            ? setTimeout(() => de(M3W[Math.min(l - 2, M3W.length - 1)], "w"), 120)
            : m >= 5 && !s.length && setTimeout(() => de(M3W[0], "w"), 120));
      }
      (await A(260),
        H() &&
          (e.forEach((e) => {
            const t = p[e];
            t && (t.el.remove(), (p[e] = null));
          }),
          r.forEach((e) => {
            const t = p[e];
            t && (setTimeout(() => t.el.remove(), "oy" === t.b ? 380 : 0), (p[e] = null));
          }),
          Q()));
    },
    me = async () => {
      const e = [];
      for (const s of G) {
        const l = s.filter((e) => !m(p[e]));
        if (!l.length) continue;
        let o = l.length - 1;
        for (let e = l.length - 1; e >= 0; e--) {
          const s = p[l[e]];
          if (s) {
            if (e !== o) {
              const a = l[o];
              ((p[a] = s),
                (p[l[e]] = null),
                s.c !== a % t && (s.el.classList.remove("wp"), s.el.offsetWidth, s.el.classList.add("wp")),
                B(s, (a / t) | 0, a % t));
            }
            o--;
          }
        }
        const i = l[0],
          r = i % t,
          c = (i / t) | 0;
        let f = 0;
        for (let s = o; s >= 0; s--) {
          f++;
          const o = l[s],
            i = o % t,
            d = X(le(), 0, 0, i === r ? c - f : ((o / t) | 0) - 1, i);
          (a.an && (g.m.sp || 0) < a.an && ne() < 2 && Math.random() < 0.35
            ? (ie(d), (g.m.sp = (g.m.sp || 0) + 1))
            : a.fe && Math.random() < 0.13 && (oe(d), d.el.classList.add("born")),
            (n || i !== r) && (d.el.style.opacity = 0),
            e.push([d, (o / t) | 0, i]),
            (p[o] = d));
        }
      }
      if (e.length && !m3Swap(J(), C())) {
        const t = e.map((e) => e[0]).filter((e) => !e.s && !e.an && !e.b);
        for (
          let e = 0;
          e < 40 &&
          t.length &&
          (t.forEach((e) => {
            e.t = le();
          }),
          !m3Swap(J(), C()));
          e++
        );
        t.forEach((e) => Z(e));
      }
      (N.offsetWidth,
        e.forEach(([e, t, s]) => {
          (B(e, t, s), (e.el.style.opacity = ""));
        }),
        await A(340));
    },
    pe = (e) => {
      for (let s = t - 1; s >= 0; s--) if (o[s * t + e]) return s * t + e;
      return -1;
    },
    ue = async () => {
      if (!a.an) return !1;
      const e = [];
      for (let s = 0; s < t; s++) {
        const t = pe(s);
        t >= 0 && p[t] && p[t].an && e.push(t);
      }
      return (
        !!e.length &&
        (e.forEach((e) => {
          (p[e].el.classList.add("saved"),
            de("Sauvé !", "w", e),
            fe(e, "#7fd8ff", 6),
            (g.m.rs = (g.m.rs || 0) + 1));
        }),
        sfx(990, 0.25),
        vib(15),
        Q(),
        await A(650),
        e.forEach((e) => {
          const t = p[e];
          t && (t.el.remove(), (p[e] = null));
        }),
        !0)
      );
    },
    ke = (e) => {
      const s = N.getBoundingClientRect().width / t;
      return [((e % t) + 0.5) * s, (0.5 + ((e / t) | 0)) * s];
    },
    ge = (e) => {
      const [t, s] = ke(e),
        l = $('#m3go .m3g[data-k="pe"] i'),
        a = N.getBoundingClientRect();
      let o = t,
        n = s - 120;
      if (l) {
        const e = l.getBoundingClientRect();
        ((o = e.left + e.width / 2 - a.left), (n = e.top + e.height / 2 - a.top));
      }
      const i = document.createElement("i");
      ((i.className = "m3pe"),
        (i.style.cssText = `left:${t}px;top:${s}px;--dx:${o - t}px;--dy:${n - s}px`),
        N.appendChild(i),
        fe(e, "#fff6e0", 8),
        setTimeout(() => {
          i.remove();
          const e = $('#m3go .m3g[data-k="pe"]');
          e && (e.classList.remove("got"), e.offsetWidth, e.classList.add("got"));
        }, 900));
    },
    ye = (e) => {
      const t = document.createElement("i");
      t.className = "m3cm";
      const [s, l] = ke(e);
      ((t.style.cssText = `left:${s}px;top:${l}px`), N.appendChild(t), setTimeout(() => t.remove(), 700));
    },
    Me = (e) => {
      const t = N.getBoundingClientRect().width;
      for (let s = 0; s < e; s++)
        setTimeout(() => {
          if (!H()) return;
          const e = document.createElement("i"),
            s = t * (0.1 + 0.8 * Math.random()),
            l = t * (0.08 + 0.6 * Math.random()),
            a = Math.floor(360 * Math.random());
          ((e.className = "m3fw"),
            (e.style.cssText = `left:${s}px;top:${l}px;--h:${a}`),
            (e.innerHTML = [...Array(14)].map((e, t) => `<b style="--a:${25.7 * t}deg"></b>`).join("")),
            N.appendChild(e),
            sfx(700 + 700 * Math.random(), 0.08),
            setTimeout(() => e.remove(), 1100));
        }, 170 * s);
    },
    ve = (e, t) => {
      const s = p[e];
      if (
        s &&
        ((s.b = "ink"),
        (s.hp = 1),
        (s.t = -3),
        (s.s = 0),
        (s.o = 0),
        Z(s),
        s.el.classList.add("inkin"),
        sfx(180, 0.18),
        void 0 !== t)
      ) {
        const [s, l] = ke(t),
          [a, o] = ke(e),
          n = document.createElement("i");
        ((n.className = "m3blob"),
          (n.style.cssText = `left:${s}px;top:${l}px;--dx:${a - s}px;--dy:${o - l}px`),
          N.appendChild(n),
          setTimeout(() => n.remove(), 600));
      }
    },
    xe = async () => {
      let e = !1;
      if (a.ink && !f) {
        const s = sh(p.map((e, t) => (e && "ink" === e.b ? t : -1)).filter((e) => e >= 0));
        for (const l of s) {
          const s = [l - t, l + t, l % t ? l - 1 : -1, l % t < t - 1 ? l + 1 : -1].filter(
            (e) => e >= 0 && e < t * t && p[e] && !p[e].s && !p[e].an && !m(p[e]) && p[e].t >= 0,
          );
          if (s.length) {
            (ve(s[Math.floor(Math.random() * s.length)], l), (e = !0));
            break;
          }
        }
      }
      if (d && d.hp > 0 && u % 4 == 0) {
        const s = (() => {
          const e = p.map((e, t) => (e && !e.s && !e.an && !m(e) && e.t >= 0 ? t : -1)).filter((e) => e >= 0);
          return e.length ? e[Math.floor(Math.random() * e.length)] : -1;
        })();
        s >= 0 &&
          (d.el.classList.remove("spit"),
          d.el.offsetWidth,
          d.el.classList.add("spit"),
          await A(250),
          ve(s, d.i0 + t),
          (e = !0));
      }
      return (e && (await A(560)), e);
    },
    be = async (e) => {
      let t = 0;
      for (; H();) {
        const s = m3Plan(J(), e, (e) => !(!p[e] || (!p[e].s && !p[e].a)));
        if (((e = null), !s.cells.size)) {
          if (await ue()) {
            await me();
            continue;
          }
          break;
        }
        t++;
        const l = new Set([...s.cells].filter((e) => !s.mk.has(e))),
          a = ce(l),
          o = [...s.mk].filter(([e]) => !l.has(e) && p[e]);
        if ((o.forEach(([e]) => l.delete(e)), await he(l, a, t), !H())) return;
        (o.forEach(([e, t]) => {
          const s = p[e];
          s &&
            ((s.s = t.s),
            (s.o = t.o || 0),
            "x" === t.s && (s.t = -1),
            Z(s),
            s.el.classList.add("born"),
            (g.m[t.s] = (g.m[t.s] || 0) + 1),
            (k += 40));
        }),
          o.length && sfx(880, 0.3),
          await me());
      }
    },
    we = async () => {
      const e = p.filter((e) => e && !e.s && !e.an && !e.b);
      let t = !1;
      const s = document.createElement("div");
      ((s.className = "m3sh"),
        (s.innerHTML = "<i>✦</i><b>Les pièces se mélangent…</b><i>✦</i>"),
        N.appendChild(s),
        N.classList.add("shw"));
      const l = (e, t, s, l) =>
          `translate(350%,350%) rotate(${t}deg) translate(${100 * (e.c - 3.5) * l}%,${100 * (e.r - 3.5) * l}%) scale(${s})`,
        a = (e) => 38 * Math.hypot(e.c - 3.5, e.r - 3.5),
        o = [],
        n = (t, s) =>
          Promise.all(
            e.map((e) => {
              const l = e.el.animate(t(e), { duration: s || 620, delay: t.d(e), easing: t.e, fill: "both" });
              return (o.push(l), l.finished.catch(() => {}));
            }),
          ),
        i = document.createElement("div");
      ((i.className = "m3vx"), (i.innerHTML = "<i></i><i></i><i></i>"), N.appendChild(i));
      const r = () => {
        (o.forEach((e) => {
          try {
            e.cancel();
          } catch (e) {}
        }),
          s.remove(),
          i.remove(),
          N.classList.remove("shw"));
      };
      if ((sfx(520, 0.3), wRM)) await A(500);
      else {
        const e = (e) => [{ transform: l(e, 0, 1, 1) }, { transform: l(e, 440, 0.2, 0), opacity: 0.85 }];
        ((e.d = a), (e.e = "cubic-bezier(.5,0,.85,.45)"), await n(e));
      }
      if (H()) {
        for (let s = 0; s < 80 && !t; s++) {
          const s = sh(e.map((e) => e.t));
          e.forEach((e, t) => {
            e.t = s[t];
          });
          const l = J();
          t = !m3Has(l) && !!m3Swap(l, C());
        }
        if ((e.forEach((e) => Z(e)), sfx(780, 0.3), !wRM)) {
          (() => {
            i.classList.add("out");
            const e = document.createElement("div");
            e.className = "m3gu";
            let t = '<b></b><b class="b2"></b>';
            const s = N.getBoundingClientRect().width;
            for (let e = 0; e < 26; e++) {
              const e = 130 * (Math.random() - 0.5) - 90,
                l = s * (0.18 + 0.32 * Math.random());
              t += `<i style="--x:${(Math.cos((e * Math.PI) / 180) * l).toFixed(0)}px;--y:${(Math.sin((e * Math.PI) / 180) * l).toFixed(0)}px;--s:${(4 + 8 * Math.random()).toFixed(1)}px;animation-delay:${(160 * Math.random()).toFixed(0)}ms"></i>`;
            }
            ((e.innerHTML = t), N.appendChild(e), setTimeout(() => e.remove(), 1400));
          })();
          const t = (e) => {
            const t = 55 * (e.c - 3.5) + 60 * (Math.random() - 0.5),
              s = -120 - 110 * Math.random() - 14 * (7 - e.r),
              a = 540 * (Math.random() - 0.5);
            return [
              {
                transform: "translate(350%,350%) rotate(-200deg) scale(.2)",
                opacity: 0.85,
                easing: "cubic-bezier(.15,.75,.35,1)",
              },
              {
                offset: 0.42,
                transform: `translate(calc(350% + ${t.toFixed(0)}%),calc(350% + ${s.toFixed(0)}%)) rotate(${a.toFixed(0)}deg) scale(.95)`,
                opacity: 1,
                easing: "cubic-bezier(.55,0,.75,.4)",
              },
              { transform: l(e, 0, 1, 1), opacity: 1 },
            ];
          };
          ((t.d = (e) => 140 * Math.random()),
            (t.e = "linear"),
            (o.length = 0),
            e.forEach((e) => e.el.getAnimations().forEach((e) => e.cancel())),
            await n(t, 1050));
        }
        r();
      } else r();
    },
    $e = async () => {
      if ((Q(), sv(), j())) {
        if (a.fe)
          return (async () => {
            ((b = !0), (y = !0));
            const e = document.createElement("div");
            if (
              ((e.className = "m3sh fin"),
              (e.innerHTML = "<i>✦</i><b>Bouquet final !</b><i>✦</i>"),
              N.appendChild(e),
              Me(8),
              sfx(784, 0.3),
              await A(900),
              !H())
            )
              return;
            const t = sh(
              p.map((e, t) => (e && !e.s && !m(e) && !e.an && e.t >= 0 ? t : -1)).filter((e) => e >= 0),
            ).slice(0, 12);
            for (const e of t) {
              const t = p[e];
              if (
                t &&
                (oe(t, Math.random() < 0.5 ? "c" : "s"),
                t.el.classList.add("born"),
                sfx(880 + 500 * Math.random(), 0.08),
                await A(90),
                !H())
              )
                return;
            }
            (await A(400), e.remove());
            for (let e = 0; e < 3 && H(); e++) {
              const t = new Set(p.map((e, t) => (e && e.s && "x" !== e.s ? t : -1)).filter((e) => e >= 0));
              if (!t.size) break;
              Me(6);
              const s = ce(t);
              if ((await he(t, s, 3 + e), !H())) return;
              (await me(), await A(150));
            }
            (Q(), sv());
            const s = $("#m3b");
            (s && confetti(s),
              Me(10),
              setTimeout(() => {
                r === m3Tok && playing && win();
              }, 1500));
          })();
        b = !0;
        const e = $("#m3b");
        return (
          e && confetti(e),
          void setTimeout(() => {
            r === m3Tok && playing && win();
          }, 900)
        );
      }
      if (a.cu || a.ink || d) {
        y = !0;
        let e = await (async () => {
          if (!a.cu) return !1;
          let e = !1;
          return (
            a.cu.forEach(([s, l]) => {
              const a = [];
              for (let e = 0; e < t; e++) {
                const l = s * t + e;
                o[l] && p[l] && !m(p[l]) && !p[l].an && a.push(l);
              }
              const n = a.length;
              if (n < 2) return;
              e = !0;
              const i = a.map((e) => p[e]);
              (a.forEach((e, t) => {
                p[e] = i[(((t - l) % n) + n) % n];
              }),
                a.forEach((e, a) => {
                  const o = p[e],
                    i = e % t;
                  (((l > 0 && 0 === a) || (l < 0 && a === n - 1)) &&
                    ((o.el.style.transition = "none"),
                    B(o, s, i - 1.2 * l),
                    (o.el.style.opacity = 0),
                    o.el.offsetWidth,
                    (o.el.style.transition = ""),
                    (o.el.style.opacity = "")),
                    B(o, s, i));
                }));
            }),
            !!e &&
              (sfx(392, 0.15),
              N.querySelectorAll(".m3cu").forEach((e) => {
                (e.classList.remove("go"), e.offsetWidth, e.classList.add("go"));
              }),
              await A(460),
              !0)
          );
        })();
        if (!H()) return;
        if (e && (await be(), !H())) return;
        if (((e = await xe()), !H())) return;
        if (((y = !1), Q(), sv(), j())) return $e();
      }
      const e = J();
      if (!p.some((e) => e && e.s) && !m3Swap(e, C())) {
        const t = C(),
          s = sh(p.map((e, t) => (e && !e.s && !e.an && !m(e) && e.t >= 0 ? t : -1)).filter((e) => e >= 0));
        let l = !1;
        for (const o of s) {
          const s = e[o];
          for (let n of sh([...Array(a.k).keys()]))
            if (n !== s && ((e[o] = n), !m3Has(e) && m3Swap(e, t))) {
              const e = p[o];
              ((e.t = n), Z(e), e.el.classList.add("born"), fe(o, i[n], 5), sfx(880, 0.15), (l = !0));
              break;
            }
          if (l) break;
          e[o] = s;
        }
        l || (await we());
      }
      Ee();
    },
    Ee = () => {
      if (!a.pt || b) return;
      const e = J(),
        s = C(),
        l = new Set();
      for (let n = 0; n < t * t; n++) {
        if (!o[n] || l.has(n)) continue;
        const r = [],
          c = [n];
        for (l.add(n); c.length;) {
          const e = c.pop();
          r.push(e);
          for (const [s, a] of [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
          ]) {
            const n = Math.floor(e / t) + s,
              i = (e % t) + a,
              r = n * t + i;
            n >= 0 && n < t && i >= 0 && i < t && o[r] && !l.has(r) && (l.add(r), c.push(r));
          }
        }
        const f = e.map((e, t) => (r.includes(t) ? e : -1));
        if (m3Swap(f, s)) continue;
        const d = sh(r.filter((e) => p[e] && !p[e].s && !p[e].an && !m(p[e]) && p[e].t >= 0));
        let h = !1;
        for (const t of d) {
          const l = f[t];
          for (const o of sh([...Array(a.k).keys()]))
            if (o !== l) {
              if (((f[t] = o), (e[t] = o), !m3Has(e) && m3Swap(f, s))) {
                const e = p[t];
                ((e.t = o), Z(e), e.el.classList.add("born"), fe(t, i[o], 5), (h = !0));
                break;
              }
              e[t] = l;
            }
          if (h) break;
          f[t] = l;
        }
      }
    },
    Le = async (e, s) => {
      if (y || b) return;
      if (((f = !1), (p[e] && p[e].b) || (p[s] && p[s].b))) {
        Ce();
        const t = (p[e] && p[e].b ? p[e] : p[s]).el;
        return (
          t && (t.classList.remove("no"), t.offsetWidth, t.classList.add("no")),
          void msg(
            (p[e] && "ink" === p[e].b) || (p[s] && "ink" === p[s].b)
              ? "L’encre ne bouge pas : fais une alignement juste à côté pour l’effacer."
              : "Cette case est bloquée : fais un alignement juste à côté.",
          )
        );
      }
      if ((p[e] && p[e].a) || (p[s] && p[s].a)) {
        (Ce(), msg("Cette pièce est prise dans les algues : aligne-la pour la libérer."));
        const t = (p[e] && p[e].a ? p[e] : p[s]).el;
        return (
          t.classList.remove("no"),
          t.offsetWidth,
          t.classList.add("no"),
          void setTimeout(() => t.classList.remove("no"), 260)
        );
      }
      ((y = !0), Ce(), msg(""));
      const l = p[e],
        o = p[s],
        n = () => {
          const t = l.r,
            a = l.c;
          (B(l, o.r, o.c), B(o, t, a), ([p[e], p[s]] = [p[s], p[e]]));
        };
      if ("x" === l.s || "x" === o.s) {
        const a = "x" === l.s ? l : o,
          n = a === l ? o : l,
          r = a === l ? e : s;
        (u++, Q());
        const c = new Set([r]);
        if ("x" === n.s)
          (p.forEach((e, t) => {
            e && c.add(t);
          }),
            (a.all = !0));
        else if (n.s) {
          const t = n.t;
          if (
            (p.forEach((e, s) => {
              !e ||
                e.s ||
                e.an ||
                e.t !== t ||
                ((e.s = n.s),
                (e.o = "m" === n.s ? (Math.random() < 0.5 ? "v" : "h") : 0),
                Z(e),
                e.el.classList.add("born"),
                c.add(s));
            }),
            c.add(e),
            c.add(s),
            de("Combo !", "w", r),
            sfx(990, 0.3),
            await A(520),
            !H())
          )
            return;
        } else
          ((a.col = n.t),
            p.forEach((e, t) => {
              e && e.t === n.t && c.add(t);
            }),
            c.add(e),
            c.add(s));
        if (
          (a.el.classList.add("sunfx"),
          ((e, s) => {
            const l = N.getBoundingClientRect().width / t,
              a = ((e % t) + 0.5) * l,
              o = (0.5 + ((e / t) | 0)) * l;
            s.forEach((e, s) => {
              const n = p[e];
              if (!n) return;
              n.el.classList.add("zap");
              const r = ((e % t) + 0.5) * l,
                c = (0.5 + ((e / t) | 0)) * l,
                f = Math.hypot(r - a, c - o),
                d = document.createElement("i");
              ((d.className = "m3ray"),
                (d.style.cssText = `left:${a}px;top:${o}px;width:${f}px;transform:rotate(${Math.atan2(c - o, r - a)}rad);--c:${n.t >= 0 ? i[n.t] : "#fff6c8"};animation-delay:${Math.min(14 * s, 260)}ms`),
                N.appendChild(d),
                setTimeout(() => d.remove(), 700));
            });
          })(
            r,
            [...c].filter((e) => e !== r),
          ),
          await A(700),
          !H())
        )
          return;
        const f = ce(c);
        if ((f.push({ s: "x", i: r }), await he(c, f, 1), !H())) return;
        if ((await me(), await be(), !H())) return;
        return ((y = !1), $e());
      }
      const r = (e) => "m" === e.s || "s" === e.s || "z" === e.s || "c" === e.s;
      if (r(l) || r(o)) {
        if ((u++, Q(), n(), await A(210), !H())) return;
        const i = new Set();
        [e, s].forEach((e) => {
          const t = p[e];
          t && r(t) && i.add(e);
        });
        const c = [];
        if (r(l) && r(o)) {
          const e = [l.s, o.s].sort().join(""),
            n = (s / t) | 0,
            r = s % t,
            f = "m" === l.s ? l : o,
            d = [],
            h = (e) => {
              for (let s = 0; s < t; s++)
                for (let l = 0; l < t; l++)
                  Math.abs(Math.abs(s - n) - Math.abs(l - r)) <= e && d.push(s * t + l);
            };
          if ("ms" === e)
            for (let e = -1; e <= 1; e++)
              if ("v" === f.o) {
                const s = r + e;
                if (s >= 0 && s < t) {
                  for (let e = 0; e < t; e++) d.push(e * t + s);
                  c.push({ s: "m", i: n * t + s, o: "v" });
                }
              } else {
                const s = n + e;
                if (s >= 0 && s < t) {
                  for (let e = 0; e < t; e++) d.push(s * t + e);
                  c.push({ s: "m", i: s * t + r, o: "h" });
                }
              }
          else if ("mm" === e) {
            for (let e = 0; e < t; e++) d.push(n * t + e, e * t + r);
            c.push({ s: "m", i: s, o: "h" }, { s: "m", i: s, o: "v" });
          } else if ("ss" === e) {
            for (let e = n - 2; e <= n + 2; e++)
              for (let s = r - 2; s <= r + 2; s++) e >= 0 && e < t && s >= 0 && s < t && d.push(e * t + s);
            c.push({ s: "s", i: s });
          } else if (e.includes("c")) {
            for (let e = -1; e <= 1; e++) {
              const s = n + e,
                l = r + e;
              if (s >= 0 && s < t) {
                for (let e = 0; e < t; e++) d.push(s * t + e);
                c.push({ s: "m", i: s * t + r, o: "h" });
              }
              if (l >= 0 && l < t) {
                for (let e = 0; e < t; e++) d.push(e * t + l);
                c.push({ s: "m", i: n * t + l, o: "v" });
              }
            }
            (c.push({ s: "c", i: s }), a.fe && Me(4));
          } else if ("sz" === e) (h(1), c.push({ s: "z", i: s }));
          else if ("zz" === e) (h(2), c.push({ s: "z", i: s }));
          else if ("mz" === e) {
            for (let e = 0; e < t; e++) d.push(n * t + e, e * t + r);
            (h(0), c.push({ s: "m", i: s, o: "h" }, { s: "m", i: s, o: "v" }, { s: "z", i: s }));
          }
          (d.forEach((e) => {
            p[e] && i.add(e);
          }),
            d.length && (de("Combo !", "w", s), sfx(990, 0.3)));
        }
        const f = ce(i);
        if ((c.forEach((e) => f.push(e)), await he(i, f, 1), !H())) return;
        if ((await me(), await be(), !H())) return;
        return ((y = !1), $e());
      }
      if ((n(), await A(210), !H())) return;
      const c = J();
      if (!m3Has(c)) {
        if ((n(), l.el.classList.add("no"), o.el.classList.add("no"), await A(210), !H())) return;
        return (
          l.el.classList.remove("no"),
          o.el.classList.remove("no"),
          msg("Pas d’alignement ici."),
          void (y = !1)
        );
      }
      (u++, Q(), await be([e, s]), H() && ((y = !1), $e()));
    },
    Ce = () => {
      (M && M.el.classList.remove("sel"), (M = null));
    },
    Te = (e) => {
      if (!y && !b) {
        if (M && M !== e && ((t = M), (s = e), Math.abs(t.r - s.r) + Math.abs(t.c - s.c) === 1))
          return Le(p.indexOf(M), p.indexOf(e));
        var t, s;
        if (M === e) return Ce();
        if (e.b) return (e.el.classList.remove("no"), e.el.offsetWidth, void e.el.classList.add("no"));
        if ("m" === e.s || "s" === e.s || "z" === e.s || "c" === e.s)
          return (async (e) => {
            if (y || b) return;
            ((f = !1), (y = !0), Ce(), msg(""), u++, Q());
            const t = p.indexOf(e),
              s = new Set([t]),
              l = ce(s);
            (await he(s, l, 1), H() && (await me(), await be(), H() && ((y = !1), $e())));
          })(e);
        (Ce(), (M = e), e.el.classList.add("sel"));
      }
    };
  let ze = null;
  (N.addEventListener("pointerdown", (e) => {
    const t = e.target.closest(".m3t");
    if (!t || y) return;
    const s = p.find((e) => e && e.el === t);
    if (s) {
      ze = { t: s, x: e.clientX, y: e.clientY, mv: !1 };
      try {
        N.setPointerCapture(e.pointerId);
      } catch (e) {}
      e.preventDefault();
    }
  }),
    N.addEventListener("pointermove", (e) => {
      if (!ze || ze.mv) return;
      const s = N.getBoundingClientRect().width / t,
        l = e.clientX - ze.x,
        a = e.clientY - ze.y;
      if (Math.hypot(l, a) < 0.4 * s) return;
      ze.mv = !0;
      const o = Math.abs(l) > Math.abs(a),
        n = ze.t.r + (o ? 0 : Math.sign(a)),
        i = ze.t.c + (o ? Math.sign(l) : 0);
      if (n < 0 || n >= t || i < 0 || i >= t) return;
      p[n * t + i] && Le(p.indexOf(ze.t), n * t + i);
    }));
  if (
    (N.addEventListener("pointerup", () => {
      (ze && !ze.mv && Te(ze.t), (ze = null));
    }),
    N.addEventListener("pointercancel", () => {
      ze = null;
    }),
    N.addEventListener("contextmenu", (e) => e.preventDefault()),
    (act.m3r = () => {
      (st.set(pkey(), null), start("match3", !1, lv));
    }),
    (act.hint = () => {
      if (y || b) return;
      let e = null;
      const t = m3Swap(J(), C());
      if (t) e = t;
      else {
        const t = p.findIndex((e) => e && e.s);
        t >= 0 && (e = [t]);
      }
      e &&
        spend(5) &&
        (e.forEach((e) => p[e] && p[e].el.classList.add("hint")),
        clearTimeout(x),
        (x = setTimeout(() => p.forEach((e) => e && e.el.classList.remove("hint")), 2200)));
    }),
    a.pt)
  ) {
    let e = 0;
    const t = setInterval(() => {
      if (r !== m3Tok || ++e > 12) return clearInterval(t);
      !y && p.some((e) => e) && (Ee(), clearInterval(t));
    }, 400);
  }
  (window.__M3DBG &&
    window.__M3DBG({
      g: () => p,
      look: Z,
      swap: Le,
      types: J,
      tap: Te,
      shuffle: we,
      boss: () => d,
      fall: me,
      settle: be,
      finish: $e,
      ob: () => T.map((e) => [e.k, S(e), e.n]),
      allDone: j,
      islFix: Ee,
    }),
    Q());
  const Se = {
    70: "Des huîtres sont fermées sur le plateau : fais deux alignements juste à côté pour les ouvrir et récolter leur perle.",
    71: "Nouveau : aligne 5 pièces en T ou en croix pour créer une comète, qui efface sa ligne et sa colonne d’un coup !",
    79: "Une méduse géante bloque le plateau ! Chaque alignement à côté d’elle la touche, et les pièces spéciales lui font encore plus mal.",
    80: "Attention à l’encre : si tu n’en effaces aucune tache pendant un coup, elle se répand sur une pièce voisine.",
    90: "Un courant marin traverse le plateau : après chaque coup, les pièces de cette rangée glissent d’une case.",
    99: "Niveau 100 ! Une pluie d’étoiles tombe du ciel : les pièces spéciales pleuvent. Fais exploser le ciel !",
    100: "Le plateau est coupé en îles. Les pièces qui tombent dans un tourbillon ressortent sur l’autre île.",
    109: "La méduse géante est de retour, sur les îles !",
    119: "La grande méduse des abysses ! Elle crache de l’encre tous les 4 coups. Courage !",
  };
  e || s || !Se[l]
    ? e || 0 !== lv || s
      ? e || s || !a.an
        ? e || s || !a.al
          ? e || s || !E
            ? e && j()
              ? setTimeout(() => {
                  r === m3Tok && playing && win();
                }, 400)
              : e &&
                setTimeout(async () => {
                  r === m3Tok && playing && ((y = !0), await be(), (y = !1), H() && $e());
                }, 300)
            : msg(
                "Du sable s’est déposé sous certaines pièces : fais disparaître les pièces posées dessus pour le nettoyer.",
              )
          : msg(
              "Des pièces sont prises dans les algues : aligne-les une fois pour les libérer, puis encore pour les faire disparaître.",
            )
        : msg(
            "De petits animaux marins sont perdus parmi les étoiles : fais-les descendre tout en bas du plateau pour les sauver !",
          )
      : msg("Fais glisser une pièce vers sa voisine pour aligner 3 pièces identiques.")
    : msg(Se[l]);
}
const DU = 21;
const DZ = 24;
const dSh = (e, t) => {
  const a = parseInt(e.slice(1), 16);
  return (
    "#" +
    [a >> 16, (a >> 8) & 255, 255 & a]
      .map((e) => Math.max(0, Math.min(255, Math.round(e * t))))
      .map((e) => e.toString(16).padStart(2, "0"))
      .join("")
  );
};
const dHull = (e) => {
  const t = e.slice().sort((e, t) => e[0] - t[0] || e[1] - t[1]),
    a = (e, t, a) => (t[0] - e[0]) * (a[1] - e[1]) - (t[1] - e[1]) * (a[0] - e[0]),
    s = [],
    n = [];
  for (const e of t) {
    for (; s.length > 1 && a(s[s.length - 2], s[s.length - 1], e) <= 0;) s.pop();
    s.push(e);
  }
  for (const e of t.reverse()) {
    for (; n.length > 1 && a(n[n.length - 2], n[n.length - 1], e) <= 0;) n.pop();
    n.push(e);
  }
  return s.slice(0, -1).concat(n.slice(0, -1));
};
const dIn = (e, t) => {
  let a = !1;
  for (let s = 0, n = t.length - 1; s < t.length; n = s++) {
    const [o, i] = t[s],
      [r, l] = t[n];
    i > e[1] != l > e[1] && e[0] < ((r - o) * (e[1] - i)) / (l - i) + o && (a = !a);
  }
  return a;
};
const dCen = (e) => [e.reduce((e, t) => e + t[0], 0) / e.length, e.reduce((e, t) => e + t[1], 0) / e.length];
const dClamp = (e, t) => {
  if (dIn(e, t)) return e;
  const a = dCen(t);
  let s = e;
  for (let e = 0; e < 24 && !dIn(s, t); e++) s = [s[0] + 0.15 * (a[0] - s[0]), s[1] + 0.15 * (a[1] - s[1])];
  return s;
};
function dNew(e, t, a, s, n, o, i) {
  const r = 21 * t + 18,
    l = 24 * a + 18,
    c = (e, t, a = 0) => [r + 21 * (e - t), l + (21 * (e + t)) / 2 - 24 * a],
    d = {
      P: c,
      OX: r,
      OY: l,
      ch: [],
      W: e,
      D: t,
      Hh: a,
      s: "",
      zs: [],
      st: [],
      vw: Math.round(21 * (e + t) + 36),
      vh: Math.round(24 * a + (21 * (e + t)) / 2 + 44),
      pg: (e, t, a, s) => {
        d.s += `<polygon points="${((e) => e.map((e) => e[0].toFixed(1) + "," + e[1].toFixed(1)).join(" "))(e)}" fill="${t}"${a ? ` stroke="${a}" stroke-width="${s || 0.8}" stroke-linejoin="round"` : ""}/>`;
      },
      ln: (e, t, a, s) => {
        d.s += `<line x1="${e[0].toFixed(1)}" y1="${e[1].toFixed(1)}" x2="${t[0].toFixed(1)}" y2="${t[1].toFixed(1)}" stroke="${a}" stroke-width="${s || 1}" stroke-linecap="round"/>`;
      },
    };
  if (
    (d.pg([c(0, t), c(e, t), c(e, t, -0.4), c(0, t, -0.4)], dSh(o, 0.72)),
    d.pg([c(e, 0), c(e, t), c(e, t, -0.4), c(e, 0, -0.4)], dSh(o, 0.56)),
    d.pg([c(0, 0), c(e, 0), c(e, t), c(0, t)], o),
    i)
  )
    for (let a = 0; a < e; a++)
      for (let e = 0; e < t; e++)
        (a + e) % 2 && d.pg([c(a, e), c(a + 1, e), c(a + 1, e + 1), c(a, e + 1)], i);
  return (
    d.pg([c(0, 0), c(0, t), c(0, t, a), c(0, 0, a)], s),
    d.pg([c(0, 0), c(e, 0), c(e, 0, a), c(0, 0, a)], n),
    d.pg([c(0, t, 0), c(-0.35, t, 0), c(-0.35, t, a), c(0, t, a)], dSh(s, 0.62)),
    d.pg([c(e, 0, 0), c(e, -0.35, 0), c(e, -0.35, a), c(e, 0, a)], dSh(n, 0.6)),
    d.pg([c(0, 0, a), c(0, t, a), c(-0.35, t, a), c(-0.35, 0, a)], dSh(s, 0.8)),
    d.pg([c(0, 0, a), c(e, 0, a), c(e, -0.35, a), c(0, -0.35, a)], dSh(n, 0.8)),
    d.ln(c(0, 0, 0), c(0, 0, a), dSh(s, 0.6), 1.4),
    (d.qL = (e, t, a, s) => [c(0, e, a), c(0, t, a), c(0, t, s), c(0, e, s)]),
    (d.qR = (e, t, a, s) => [c(e, 0, a), c(t, 0, a), c(t, 0, s), c(e, 0, s)]),
    (d.zone = (e, t, a, s) => {
      d.zs.push({ k: e, top: t, hull: a || t, a: s || "b", ci: d.ch.length - 1 });
    }),
    d.zone("floor", [c(0, 0), c(e, 0), c(e, t), c(0, t)], null, "b"),
    d.zone("wall", d.qL(0, t, 0.2, a - 0.2), null, "c"),
    d.zone("wall", d.qR(0, e, 0.2, a - 0.2), null, "c"),
    (d.box = (e, t, a, s, n, o, i, r = {}) => {
      (s > 0.05 || n > 0.05) && d.ch.push({ at: d.s.length, x: e, y: t, z: a, w: s, d: n, h: o });
      const l = [c(e, t, a + o), c(e + s, t, a + o), c(e + s, t + n, a + o), c(e, t + n, a + o)],
        f = [c(e, t + n, a), c(e + s, t + n, a), c(e + s, t + n, a + o), c(e, t + n, a + o)],
        u = [c(e + s, t, a), c(e + s, t + n, a), c(e + s, t + n, a + o), c(e + s, t, a + o)],
        h = r.st || dSh(i, 0.62);
      return (
        r.noL || d.pg(f, r.l || i, h),
        r.noR || d.pg(u, r.r || dSh(i, 0.8), h),
        d.pg(l, r.t || dSh(i, 1.12), h),
        { top: l, hull: dHull([...l, ...f, ...u]), L: f, R: u }
      );
    }),
    (d.cyl = (e, t, a, s, n, o) => {
      d.ch.push({ at: d.s.length, x: e - s, y: t - s, z: a, w: 2 * s, d: 2 * s, h: n });
      const [i, r] = c(e, t, a),
        l = 21 * s * 1.41,
        f = l / 2,
        u = 24 * n;
      d.s += `<path d="M${(i - l).toFixed(1)} ${r.toFixed(1)}v${-u.toFixed(1)}a${l.toFixed(1)} ${f.toFixed(1)} 0 0 1 ${(2 * l).toFixed(1)} 0v${u.toFixed(1)}a${l.toFixed(1)} ${f.toFixed(1)} 0 0 1 ${(-2 * l).toFixed(1)} 0z" fill="${o}" stroke="${dSh(o, 0.62)}" stroke-width=".8"/><ellipse cx="${i.toFixed(1)}" cy="${(r - u).toFixed(1)}" rx="${l.toFixed(1)}" ry="${f.toFixed(1)}" fill="${dSh(o, 1.12)}" stroke="${dSh(o, 0.62)}" stroke-width=".8"/>`;
    }),
    d
  );
}
const DIT = {
  teddy: [
    "Toutou",
    '<ellipse cx="16" cy="22.5" rx="8" ry="7" fill="#c98f5e"/><circle cx="16" cy="12" r="7.4" fill="#d9a06c"/><circle cx="10" cy="6.4" r="2.8" fill="#d9a06c"/><circle cx="22" cy="6.4" r="2.8" fill="#d9a06c"/><circle cx="10" cy="6.4" r="1.3" fill="#f1d3ad"/><circle cx="22" cy="6.4" r="1.3" fill="#f1d3ad"/><ellipse cx="16" cy="14.4" rx="3.4" ry="2.6" fill="#f1d3ad"/><circle cx="13" cy="11" r=".95" fill="#3a2a22"/><circle cx="19" cy="11" r=".95" fill="#3a2a22"/><ellipse cx="16" cy="13.2" rx="1.1" ry=".8" fill="#3a2a22"/><ellipse cx="8.4" cy="21.5" rx="2.4" ry="3.6" fill="#c98f5e"/><ellipse cx="23.6" cy="21.5" rx="2.4" ry="3.6" fill="#c98f5e"/><ellipse cx="16" cy="23" rx="4.4" ry="4" fill="#e3b68a"/>',
    ["bed", "crib", "shelf", "sofa"],
  ],
  pillow: [
    "Oreiller",
    '<path d="M3 11q13-5 26 0l-1 11q-12 5-24 0z" fill="#f5f2ff"/><path d="M3 11q13-5 26 0l-1 11q-12 5-24 0z" fill="none" stroke="#c9c2e6" stroke-width="1.2"/><path d="M9 14q7-3 14 0" stroke="#dcd6f2" stroke-width="1.2" fill="none"/>',
    ["bed", "crib", "sofa"],
  ],
  computer: [
    "Ordinateur",
    '<rect x="4" y="3" width="24" height="17" rx="2.5" fill="#e9e3cf"/><rect x="7" y="6" width="18" height="11" rx="1.5" fill="#34406e"/><path d="M9 9h8M9 12h5" stroke="#8fb6f0" stroke-width="1.2"/><rect x="12" y="20" width="8" height="4" fill="#d3ccb3"/><rect x="7" y="24" width="18" height="3.5" rx="1.5" fill="#e9e3cf"/>',
    ["desk"],
  ],
  lamp: [
    "Lampe",
    '<path d="M9 5h14l3 11H6z" fill="#ffd978"/><path d="M9 5h14l1 4H8z" fill="#ffe9a8"/><rect x="15" y="16" width="2" height="9" fill="#8d7a63"/><ellipse cx="16" cy="27" rx="6" ry="2.2" fill="#8d7a63"/>',
    ["desk", "side", "shelf", "tv", "dresser", "coffee"],
  ],
  books: [
    "Livres",
    '<rect x="4" y="14" width="24" height="5.5" rx="1" fill="#d96f6f"/><rect x="6" y="19.5" width="22" height="5.5" rx="1" fill="#6f9fd9"/><rect x="3" y="8.5" width="22" height="5.5" rx="1" fill="#7fc48a"/><path d="M7 11h8M9 22h8M8 16.5h9" stroke="#fff8" stroke-width="1"/>',
    ["shelf", "desk", "side", "coffee"],
  ],
  shirt: [
    "Chemise",
    '<path d="M10 6l-6 5 3 4 3-2v13h12V13l3 2 3-4-6-5-3 2q-3 2-6 0z" fill="#cf4e55"/><path d="M13 8l3 3 3-3" fill="#e57a80"/><path d="M10 17h12M10 22h12M16 11v17M10 12v16M22 12v16" stroke="#a63a41" stroke-width=".9" opacity=".6"/>',
    ["wardrobe"],
  ],
  poster: [
    "Affiche",
    '<rect x="6" y="2" width="20" height="28" rx="1.5" fill="#f3efe6"/><rect x="8" y="4" width="16" height="15" fill="#7a8fe0"/><circle cx="16" cy="11" r="4" fill="#ffd978"/><path d="M8 19q4-5 8-1t8-3v4H8z" fill="#4a5db0"/><rect x="9" y="22" width="14" height="2" fill="#c9c2b0"/><rect x="11" y="26" width="10" height="1.6" fill="#d8d2c2"/>',
    ["wall"],
  ],
  clock: [
    "Réveil",
    '<ellipse cx="16" cy="17" rx="10.5" ry="10.5" fill="#f4efe0" stroke="#d95f5f" stroke-width="3"/><path d="M16 17V10M16 17l5 3" stroke="#3a3350" stroke-width="1.8" stroke-linecap="round"/><circle cx="9.5" cy="5.5" r="3" fill="#d95f5f"/><circle cx="22.5" cy="5.5" r="3" fill="#d95f5f"/><path d="M8 28l3-4M24 28l-3-4" stroke="#d95f5f" stroke-width="2" stroke-linecap="round"/>',
    ["side", "desk", "shelf", "dresser"],
  ],
  frame: [
    "Cadre",
    '<rect x="3" y="4" width="26" height="24" rx="1.5" fill="#b88a58"/><rect x="6" y="7" width="20" height="18" fill="#cfe5f5"/><path d="M6 25l6-8 5 5 4-4 5 7z" fill="#79b58d"/><circle cx="21" cy="12" r="2.4" fill="#ffd978"/>',
    ["wall", "shelf", "dresser", "side"],
  ],
  plant: [
    "Plante",
    '<path d="M16 17Q8 14 7 5q8 1 9 12z" fill="#69b87a"/><path d="M16 17Q24 14 25 6q-8 0-9 11z" fill="#4fa266"/><path d="M16 18Q15 9 16 3q3 7 0 15z" fill="#7cca8b"/><path d="M9 18h14l-2 10q-5 2-10 0z" fill="#d98c63"/><rect x="8" y="16.5" width="16" height="3" rx="1" fill="#e9a37b"/>',
    ["shelf", "side", "desk", "tv", "counter", "table", "coffee", "sink", "dresser", "ptable"],
  ],
  toothbrush: [
    "Brosse à dents",
    '<rect x="12" y="2" width="4.4" height="26" rx="2" transform="rotate(18 16 15)" fill="#5bb7e8"/><rect x="18" y="2.5" width="5" height="9" rx="1.2" transform="rotate(18 16 15)" fill="#fff"/><path d="M19.2 4h3M19.2 6h3M19.2 8h3" stroke="#e86f8a" stroke-width="1" transform="rotate(18 16 15)"/>',
    ["sink"],
  ],
  soap: [
    "Savon",
    '<rect x="5" y="12" width="22" height="13" rx="5" fill="#f4c8d8"/><rect x="5" y="12" width="22" height="7" rx="4" fill="#fbe0ea"/><circle cx="23" cy="8" r="3.2" fill="#e9f6ff" stroke="#b9dcf2"/><circle cx="26" cy="12" r="1.8" fill="#e9f6ff" stroke="#b9dcf2"/>',
    ["sink", "tub"],
  ],
  towel: [
    "Serviette",
    '<rect x="5" y="3" width="22" height="3.4" rx="1.6" fill="#a9a9b8"/><path d="M8 6h16l1.5 21H6.5z" fill="#5fa9e0"/><path d="M7 21h18v3H7zM7 15h18" fill="#7fc0ee"/><path d="M8 11h16" stroke="#7fc0ee" stroke-width="2"/>',
    ["rail"],
  ],
  shampoo: [
    "Shampoing",
    '<rect x="9" y="9" width="14" height="19" rx="4" fill="#58c0b0"/><rect x="12" y="3" width="8" height="7" rx="2" fill="#e9f6f3"/><rect x="11" y="15" width="10" height="7" rx="1.5" fill="#e9f6f3"/><circle cx="16" cy="18.5" r="2" fill="#58c0b0"/>',
    ["tub", "sink"],
  ],
  paper: [
    "Papier toilette",
    '<ellipse cx="16" cy="9" rx="9.5" ry="4" fill="#fff"/><path d="M6.5 9v14c0 2.2 4.2 4 9.5 4s9.5-1.8 9.5-4V9" fill="#f1eee6"/><ellipse cx="16" cy="9" rx="9.5" ry="4" fill="#fff" stroke="#e2dccf"/><ellipse cx="16" cy="9" rx="3.2" ry="1.4" fill="#c6a982"/><path d="M7 16q9 4 18 0M7 21q9 4 18 0" stroke="#e2dccf" stroke-width="1" fill="none"/>',
    ["toilet", "rail"],
  ],
  duck: [
    "Canard",
    '<ellipse cx="14" cy="21" rx="10" ry="6.5" fill="#ffd54a"/><circle cx="21" cy="11" r="6.4" fill="#ffd54a"/><path d="M26 11.4l5 1.4-5 2z" fill="#f0883e"/><circle cx="22.6" cy="9.4" r="1.1" fill="#3a3030"/><path d="M6 20q6-5 10-1" stroke="#f0b92a" stroke-width="1.6" fill="none"/>',
    ["tub", "shelf", "bed", "sink"],
  ],
  mirror: [
    "Miroir",
    '<rect x="6" y="2" width="20" height="27" rx="10" fill="#7c6a58"/><rect x="8.4" y="4.4" width="15.2" height="22" rx="8" fill="#cfe6f4"/><path d="M12 8q4-2 8 0M11 13l5-5" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".8"/>',
    ["wall"],
  ],
  bathmat: [
    "Tapis de bain",
    '<path d="M3 14q13-6 26 0l-3 10q-10 4-20 0z" fill="#8fd0c8"/><path d="M3 14q13-6 26 0l-1 4q-12-5-24 0z" fill="#a9ded7"/><path d="M8 21q8 3 16 0" stroke="#6bb8ae" stroke-width="1.2" fill="none"/>',
    ["floor"],
  ],
  pot: [
    "Casserole",
    '<path d="M5 13h22l-2 12q-9 3-18 0z" fill="#9aa6b8"/><ellipse cx="16" cy="13" rx="11" ry="3.4" fill="#c4cedc"/><ellipse cx="16" cy="13.4" rx="8.5" ry="2.2" fill="#7b889c"/><rect x="26" y="13" width="5" height="2.6" rx="1.2" fill="#6a5a4a"/><path d="M5 13H1.5" stroke="#6a5a4a" stroke-width="2.4"/>',
    ["stove"],
  ],
  pan: [
    "Poêle",
    '<ellipse cx="13" cy="17" rx="11" ry="6" fill="#3e4352"/><ellipse cx="13" cy="16" rx="9" ry="4.4" fill="#5c6376"/><rect x="21" y="15" width="10" height="3.4" rx="1.6" fill="#8a5a36" transform="rotate(-12 21 15)"/>',
    ["stove"],
  ],
  kettle: [
    "Bouilloire",
    '<path d="M8 12q-1 14 2 15h12q3-1 2-15z" fill="#e2e6ee"/><rect x="9" y="8" width="14" height="5" rx="2" fill="#c0c8d6"/><circle cx="16" cy="6.5" r="2" fill="#d96f6f"/><path d="M24 14q6 1 4 8" stroke="#6a5a4a" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M8 16l-4-3" stroke="#c0c8d6" stroke-width="2.4" stroke-linecap="round"/>',
    ["stove", "counter"],
  ],
  toaster: [
    "Grille-pain",
    '<rect x="4" y="11" width="24" height="15" rx="4" fill="#4fa88a"/><rect x="4" y="11" width="24" height="6" rx="3" fill="#6fc4a6"/><rect x="8" y="9" width="7" height="3" rx="1" fill="#2e3a38"/><rect x="17" y="9" width="7" height="3" rx="1" fill="#2e3a38"/><rect x="24" y="17" width="5" height="2.4" rx="1" fill="#2e3a38"/>',
    ["counter", "table"],
  ],
  mug: [
    "Tasse",
    '<path d="M6 8h16v13q0 6-8 6t-8-6z" fill="#f2a65a"/><path d="M22 11q7 0 6 6t-6 4" stroke="#f2a65a" stroke-width="3" fill="none"/><ellipse cx="14" cy="8" rx="8" ry="2.4" fill="#fff3dc"/><ellipse cx="14" cy="8.4" rx="6.4" ry="1.7" fill="#7a4a2e"/>',
    ["counter", "table", "desk", "side", "coffee", "tv", "sink", "ptable", "dresser", "shelf"],
  ],
  fruit: [
    "Fruits",
    '<path d="M4 15h24q-1 12-12 12T4 15z" fill="#b98c5b"/><circle cx="11" cy="11" r="5" fill="#e0524f"/><circle cx="19" cy="10" r="5" fill="#f0a93a"/><circle cx="15" cy="7.5" r="4.6" fill="#8fce5f"/><path d="M11 6.4q1-2 2-2" stroke="#6a3a2a" stroke-width="1.2" fill="none"/>',
    ["table", "counter", "ptable"],
  ],
  plate: [
    "Assiettes",
    '<ellipse cx="16" cy="21" rx="13" ry="5.4" fill="#e9eef6"/><ellipse cx="16" cy="19" rx="13" ry="5.4" fill="#f6f9fd" stroke="#cfd8e6"/><ellipse cx="16" cy="18.6" rx="8" ry="3" fill="#e4eaf4"/><ellipse cx="16" cy="14" rx="11" ry="4.4" fill="#f6f9fd" stroke="#cfd8e6"/><ellipse cx="16" cy="13.7" rx="6.6" ry="2.4" fill="#e4eaf4"/>',
    ["table", "counter"],
  ],
  magnet: [
    "Aimant",
    '<path d="M16 28S4 19 4 11a6.4 6.4 0 0 1 12-3 6.4 6.4 0 0 1 12 3c0 8-12 17-12 17z" fill="#e35d7a"/><path d="M9 10q1-3 4-3" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".7"/>',
    ["fridge"],
  ],
  tv: [
    "Télé",
    '<rect x="2" y="4" width="28" height="19" rx="2.4" fill="#2c303f"/><rect x="4.4" y="6.4" width="23.2" height="14.2" rx="1" fill="#46526e"/><path d="M6 9l8 5" stroke="#6f7fa3" stroke-width="1.2" opacity=".7"/><rect x="11" y="23" width="10" height="3" fill="#2c303f"/><rect x="7" y="26" width="18" height="2.4" rx="1" fill="#2c303f"/>',
    ["tv"],
  ],
  gamepad: [
    "Manette",
    '<path d="M5 12q3-5 8-4h6q5-1 8 4l3 10q0 4-4 3l-4-4h-12l-4 4q-4 1-4-3z" fill="#6c6f88"/><path d="M9 14v5M6.5 16.5h5" stroke="#e8e8f0" stroke-width="1.8" stroke-linecap="round"/><circle cx="22" cy="14.5" r="1.6" fill="#e8667a"/><circle cx="25" cy="17.5" r="1.6" fill="#6fcf9a"/>',
    ["tv", "coffee", "sofa", "side"],
  ],
  remote: [
    "Télécommande",
    '<rect x="11" y="3" width="10" height="26" rx="3" fill="#3f4358" transform="rotate(14 16 16)"/><circle cx="16" cy="9" r="1.8" fill="#e8667a" transform="rotate(14 16 16)"/><g fill="#9aa3c4" transform="rotate(14 16 16)"><circle cx="14" cy="15" r="1.2"/><circle cx="18" cy="15" r="1.2"/><circle cx="14" cy="19" r="1.2"/><circle cx="18" cy="19" r="1.2"/><circle cx="14" cy="23" r="1.2"/><circle cx="18" cy="23" r="1.2"/></g>',
    ["coffee", "sofa", "side", "tv"],
  ],
  book: [
    "Livre",
    '<path d="M3 9q6-3 13 1 7-4 13-1v17q-6-3-13 1-7-4-13-1z" fill="#f5efe0"/><path d="M16 10v17" stroke="#c9b894" stroke-width="1.2"/><path d="M6 13q4-1.4 8 .6M6 17q4-1.4 8 .6M18 13.6q4-2 8-.6M18 17.6q4-2 8-.6" stroke="#b8a888" stroke-width="1" fill="none"/><path d="M3 9q6-3 13 1v17q-7-4-13-1z" fill="none" stroke="#6f87d9" stroke-width="1.6"/>',
    ["coffee", "side", "shelf", "desk", "table", "counter", "sofa", "ptable"],
  ],
  cushion: [
    "Coussin",
    '<path d="M4 8q12-4 24 0 3 8 0 16-12 4-24 0-3-8 0-16z" fill="#e8946c"/><path d="M4 8q12-4 24 0M4 24q12 4 24 0" stroke="#c9774f" stroke-width="1.4" fill="none"/><path d="M10 12l12 8M22 12L10 20" stroke="#f3b693" stroke-width="1.4" opacity=".8"/>',
    ["sofa", "bed"],
  ],
  blanket: [
    "Couverture",
    '<path d="M3 11q13-6 26 0l-1 14q-12 5-24 0z" fill="#8f7fe0"/><path d="M3 11q13-6 26 0l-.3 3q-12-5-25.4 0z" fill="#a89af0"/><path d="M6 17q10 4 20 0M6 21q10 4 20 0" stroke="#7667c8" stroke-width="1.2" fill="none"/>',
    ["sofa", "bed", "crib"],
  ],
  vase: [
    "Vase",
    '<path d="M12 12q-5 6-1 15h10q4-9-1-15z" fill="#6fb6d9"/><path d="M12 6h8l-1 6h-6z" fill="#8fcbe6"/><path d="M16 6q-3-4-6-3M16 6q0-5 3-5M16 6q3-3 6-1" stroke="#69b87a" stroke-width="1.6" fill="none"/><circle cx="10" cy="3" r="2" fill="#f08aa8"/><circle cx="19" cy="1.4" r="2" fill="#f4c24a"/><circle cx="22" cy="5" r="2" fill="#f08aa8"/>',
    ["side", "coffee", "shelf", "tv", "table", "dresser", "ptable"],
  ],
  quilt: [
    "Édredon",
    '<path d="M2 12q14-7 28 0l-1 13q-13 5-26 0z" fill="#7fb8c9"/><path d="M2 12q14-7 28 0v3q-14-6-28 0z" fill="#a3d0de"/><path d="M10 12v15M16 11v16M22 12v15" stroke="#5f9aad" stroke-width="1.1"/>',
    ["bed"],
  ],
  perfume: [
    "Parfum",
    '<rect x="8" y="12" width="16" height="15" rx="4" fill="#e9a0c8"/><rect x="12" y="6" width="8" height="6" rx="1.5" fill="#f3d4e6"/><rect x="13.5" y="2.5" width="5" height="4" rx="1.4" fill="#c9a96c"/><rect x="11" y="16" width="10" height="6" rx="1" fill="#fbe6f1"/>',
    ["dresser", "side", "sink"],
  ],
  jewel: [
    "Boîte à bijoux",
    '<rect x="4" y="14" width="24" height="13" rx="3" fill="#8e5fb0"/><path d="M4 17q12-9 24 0v-3q-12-9-24 0z" fill="#a87bc9"/><circle cx="16" cy="19" r="2.2" fill="#ffd978"/><circle cx="16" cy="9.6" r="1.8" fill="#9fe0f4"/>',
    ["dresser", "side"],
  ],
  blocks: [
    "Cubes",
    '<rect x="3" y="16" width="12" height="12" rx="1.4" fill="#e8667a"/><rect x="15.5" y="16" width="12" height="12" rx="1.4" fill="#5fa9e0"/><rect x="9" y="4" width="12" height="12" rx="1.4" fill="#f4c24a"/><text x="9" y="26" font-size="9" font-weight="700" fill="#fff" font-family="Arial">A</text><text x="21" y="26" font-size="9" font-weight="700" fill="#fff" font-family="Arial">B</text><text x="15" y="14" font-size="9" font-weight="700" fill="#fff" font-family="Arial">C</text>',
    ["floor", "shelf", "crib"],
  ],
  ball: [
    "Ballon",
    '<circle cx="16" cy="16" r="12.5" fill="#f2f2f6" stroke="#cfcfdc" stroke-width="1"/><path d="M16 9l5 3.6-2 6h-6l-2-6z" fill="#3a3d52"/><path d="M16 9V3.6M21 12.6l5-1.8M19 18.6l3.4 4.6M13 18.6l-3.4 4.6M11 12.6L6 10.8" stroke="#3a3d52" stroke-width="1.4"/>',
    ["floor"],
  ],
  train: [
    "Petit train",
    '<rect x="2" y="14" width="13" height="9" rx="2" fill="#e8667a"/><rect x="4" y="8" width="7" height="7" rx="1" fill="#e8667a"/><rect x="15" y="16" width="9" height="7" rx="1.6" fill="#5fa9e0"/><rect x="25" y="16" width="6" height="7" rx="1.6" fill="#f4c24a"/><circle cx="6" cy="25" r="2.6" fill="#3a3d52"/><circle cx="12" cy="25" r="2.6" fill="#3a3d52"/><circle cx="18" cy="25" r="2.2" fill="#3a3d52"/><circle cx="28" cy="25" r="2.2" fill="#3a3d52"/><rect x="6" y="4" width="3" height="5" fill="#8a8aa0"/>',
    ["floor", "shelf"],
  ],
  horse: [
    "Cheval à bascule",
    '<path d="M2 25q14 5 28 0" stroke="#b88a58" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M9 22l-1-9q-3-6 4-9 4-1 6 2l5 5q4 3 3 9l-2 2-3-4-4 1 1 5z" fill="#d9a06c"/><path d="M12 6q-5 3-3 9" stroke="#8a5a36" stroke-width="2.4" fill="none"/><circle cx="17" cy="8" r="1" fill="#3a2a22"/><path d="M11 6l-1-3 3 1z" fill="#d9a06c"/>',
    ["floor"],
  ],
  nightlight: [
    "Veilleuse",
    '<circle cx="16" cy="13" r="9" fill="#ffe9a8"/><circle cx="16" cy="13" r="12" fill="#ffe9a8" opacity=".3"/><path d="M19 8a5 5 0 1 0 2 8 4 4 0 0 1-2-8z" fill="#f4c24a"/><rect x="11" y="21" width="10" height="4" rx="1.4" fill="#8f7fe0"/><rect x="9" y="25" width="14" height="3" rx="1.4" fill="#6c5cc0"/>',
    ["side", "shelf", "dresser", "desk"],
  ],
  bucket: [
    "Seau",
    '<path d="M7 11h18l-2.4 15q-6.6 2.4-13.2 0z" fill="#e8667a"/><path d="M7 11h18l-.4 3H7.4z" fill="#f08aa0"/><path d="M8 11q8-12 16 0" stroke="#8a8aa0" stroke-width="1.6" fill="none"/>',
    ["sandbox", "floor"],
  ],
  shovel: [
    "Pelle",
    '<rect x="14.4" y="2" width="3.2" height="17" rx="1.4" fill="#b88a58"/><rect x="12" y="1.4" width="8" height="3" rx="1.4" fill="#b88a58"/><path d="M10 19h12l-1 9q-5 2.4-10 0z" fill="#5fa9e0"/><path d="M10 19h12l-.4 3H10.4z" fill="#8fc4f0"/>',
    ["sandbox", "floor"],
  ],
  can: [
    "Arrosoir",
    '<path d="M5 12h16l-1.6 14H6.6z" fill="#5fb08a"/><path d="M21 15l9-7 1.6 2.4-9 7z" fill="#5fb08a"/><path d="M5 14q-4 0-3 5t5 4" stroke="#4a9473" stroke-width="2.4" fill="none"/><path d="M7 12q4-6 12 0" stroke="#4a9473" stroke-width="2.2" fill="none"/><circle cx="31" cy="8.4" r="1.6" fill="#8fd0f0"/>',
    ["flowerbed", "floor", "ptable"],
  ],
  flowerpot: [
    "Pot de fleurs",
    '<path d="M9 18h14l-2 10q-5 1.6-10 0z" fill="#d98c63"/><rect x="8" y="16.5" width="16" height="3.4" rx="1.2" fill="#e9a37b"/><path d="M16 17V8M16 12q-5-1-5-5M16 10q5 0 5-5" stroke="#4fa266" stroke-width="1.8" fill="none"/><circle cx="11" cy="6" r="3.2" fill="#f08aa8"/><circle cx="21" cy="4.6" r="3.2" fill="#f4c24a"/><circle cx="16" cy="6.4" r="3" fill="#f2f2f6"/>',
    ["ptable", "flowerbed", "floor", "table", "shelf"],
  ],
  bike: [
    "Vélo",
    '<circle cx="7" cy="22" r="6" fill="none" stroke="#3a3d52" stroke-width="2"/><circle cx="25" cy="22" r="6" fill="none" stroke="#3a3d52" stroke-width="2"/><path d="M7 22l6-11h8l4 11M13 11l5 11H7M21 11l-1-4h4" stroke="#e8667a" stroke-width="2.2" fill="none" stroke-linejoin="round" stroke-linecap="round"/><rect x="11" y="9" width="6" height="2.4" rx="1" fill="#3a3d52"/>',
    ["shed", "floor"],
  ],
  chair: [
    "Chaise de jardin",
    '<path d="M9 4q-2 0-1 6l1 9" stroke="#e9e3d0" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M9 11h14v4H9z" fill="#f4efe0"/><path d="M9 4h14v7H9z" fill="#5fa9e0"/><path d="M9 15h14l1 13M9 15l-2 13M23 15v13" stroke="#e9e3d0" stroke-width="2.6" fill="none" stroke-linecap="round"/>',
    ["floor"],
  ],
  tree: [
    "Sapin",
    '<path d="M16 2l9 11h-4l7 9h-6l5 6H5l5-6H4l7-9H7z" fill="#3f9a62"/><path d="M16 2l9 11h-4l7 9h-6l5 6H16z" fill="#35875a"/><rect x="14" y="27" width="4" height="4" fill="#8a5a36"/><circle cx="12" cy="14" r="1.6" fill="#e8667a"/><circle cx="20" cy="19" r="1.6" fill="#f4c24a"/><circle cx="11" cy="22" r="1.6" fill="#5fa9e0"/><path d="M16 1l1 2.4 2.6.2-2 1.7.7 2.5-2.3-1.4-2.3 1.4.7-2.5-2-1.7 2.6-.2z" fill="#ffd978"/>',
    ["floor"],
  ],
  gift: [
    "Cadeau",
    '<rect x="4" y="12" width="24" height="16" rx="2" fill="#e8667a"/><rect x="4" y="12" width="24" height="5" rx="1.6" fill="#f08aa0"/><rect x="14" y="12" width="4" height="16" fill="#ffd978"/><path d="M16 12q-7-9-9-4t9 4zM16 12q7-9 9-4t-9 4z" fill="#ffd978"/>',
    ["floor"],
  ],
  gift2: [
    "Cadeau",
    '<rect x="5" y="14" width="22" height="14" rx="2" fill="#5fa9e0"/><rect x="5" y="14" width="22" height="4.4" rx="1.6" fill="#8fc4f0"/><rect x="14.4" y="14" width="3.2" height="14" fill="#fff"/><path d="M16 14q-6-8-8-4t8 4zM16 14q6-8 8-4t-8 4z" fill="#fff"/>',
    ["floor"],
  ],
  garland: [
    "Guirlande",
    '<path d="M2 8q7 12 14 4t14-4" stroke="#3f9a62" stroke-width="3.4" fill="none" stroke-linecap="round"/><circle cx="7" cy="14" r="2" fill="#e8667a"/><circle cx="16" cy="12.6" r="2" fill="#ffd978"/><circle cx="25" cy="10" r="2" fill="#5fa9e0"/><circle cx="11" cy="16" r="1.4" fill="#ffd978"/><circle cx="21" cy="14" r="1.4" fill="#e8667a"/>',
    ["wall"],
  ],
  stocking: [
    "Chaussette",
    '<path d="M9 3h12v14l7 7q2 5-3 5-4 0-6-4l-10-7z" fill="#e8667a"/><rect x="8" y="2" width="14" height="6" rx="2" fill="#fff"/><path d="M22 24q3 3 5 1" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>',
    ["wall"],
  ],
  globe: [
    "Boule à neige",
    '<circle cx="16" cy="13" r="10.5" fill="#cfe9fa" stroke="#9fc8e0" stroke-width="1.2"/><path d="M8 19q8-5 16 0v3H8z" fill="#fff"/><path d="M16 9l4 6h-8z" fill="#3f9a62"/><circle cx="11" cy="9" r="1" fill="#fff"/><circle cx="21" cy="12" r="1" fill="#fff"/><rect x="8" y="22" width="16" height="7" rx="2.4" fill="#8f6a46"/>',
    ["desk", "side", "shelf", "sink", "counter", "table", "coffee", "tv", "dresser", "ptable"],
  ],
  candle: [
    "Bougie",
    '<rect x="11" y="11" width="10" height="16" rx="2" fill="#f4efe0"/><rect x="11" y="11" width="10" height="4" rx="2" fill="#fff"/><path d="M16 10V7" stroke="#6a5a4a" stroke-width="1.2"/><path d="M16 1q4 4 0 7-4-3 0-7z" fill="#f4a24a"/><path d="M16 3.6q2 2.4 0 4-2-1.6 0-4z" fill="#ffe9a8"/><ellipse cx="16" cy="28" rx="8" ry="2" fill="#c9774f"/>',
    ["desk", "side", "shelf", "sink", "counter", "table", "coffee", "tv", "dresser", "ptable"],
  ],
  cocoa: [
    "Chocolat chaud",
    '<path d="M6 10h16v11q0 6-8 6t-8-6z" fill="#e8667a"/><path d="M22 13q7 0 6 5t-6 3" stroke="#e8667a" stroke-width="3" fill="none"/><ellipse cx="14" cy="10" rx="8" ry="2.4" fill="#fff3dc"/><ellipse cx="14" cy="10.4" rx="6.4" ry="1.7" fill="#6a3a22"/><circle cx="11" cy="9" r="2" fill="#fff"/><circle cx="16" cy="8.4" r="2" fill="#fff"/><path d="M10 6q-2-3 1-4M16 5q-2-3 1-4" stroke="#fff" stroke-width="1" fill="none" opacity=".7"/>',
    ["desk", "side", "shelf", "sink", "counter", "table", "coffee", "tv", "dresser", "ptable"],
  ],
  wreath: [
    "Couronne",
    '<circle cx="16" cy="16" r="11" fill="none" stroke="#3f9a62" stroke-width="6"/><circle cx="16" cy="16" r="11" fill="none" stroke="#35875a" stroke-width="2" stroke-dasharray="3 3"/><circle cx="9" cy="10" r="1.8" fill="#e8667a"/><circle cx="23" cy="12" r="1.8" fill="#e8667a"/><circle cx="18" cy="26" r="1.8" fill="#e8667a"/><path d="M16 27l-4 4 4-1 4 1z" fill="#e8667a"/>',
    ["wall"],
  ],
  cshirt: [
    "Chemise sur cintre",
    '<path d="M16 2.6a2.3 2.3 0 1 1 2.3 2.3L16 6.6 4 14h24L16 6.6" fill="none" stroke="#9aa0ad" stroke-width="1.4" stroke-linejoin="round"/><path d="M9 13l-5 4 2.5 3.5L9 19v10h14V19l2.5 1.5L28 17l-5-4-2.4 1.6q-2.6 1.6-5.2 0z" fill="#4f86d9"/><path d="M13 14.6l3 3 3-3" fill="#8fb4ee"/><path d="M16 17.6V29" stroke="#3a69b8" stroke-width=".9"/>',
    ["wardrobe"],
  ],
  dress: [
    "Robe sur cintre",
    '<path d="M16 2.6a2.3 2.3 0 1 1 2.3 2.3L16 6.6 6 13h20L16 6.6" fill="none" stroke="#9aa0ad" stroke-width="1.4" stroke-linejoin="round"/><path d="M12 12h8l1.6 6L27 30H5l5.4-12z" fill="#d9689a"/><path d="M10.4 18q5.6 2.6 11.2 0" stroke="#b34b7e" stroke-width="1.4" fill="none"/><path d="M12 12h8v2.4h-8z" fill="#ec8db6"/>',
    ["wardrobe"],
  ],
  sweater: [
    "Chandail",
    '<path d="M10 5l-7 6.4 2.6 5.4 3.2-1.6V27h14.4V15.2l3.2 1.6 2.6-5.4L22 5q-3 3.4-6 3.4T10 5z" fill="#e8a24a"/><rect x="8.8" y="24" width="14.4" height="3.2" fill="#cf8a34"/><path d="M12 5q4 5 8 0" fill="none" stroke="#cf8a34" stroke-width="1.6"/><path d="M10 14v8M16 12v10M22 14v8" stroke="#f3c07e" stroke-width="1" opacity=".7"/>',
    ["wardrobe"],
  ],
  socks: [
    "Bas",
    '<path d="M4 3h9v15l5 5q2.4 4.6-2.4 5.4-4 .2-6.4-3.4L4 18z" fill="#8fc4f0"/><rect x="4" y="3" width="9" height="4" fill="#fff"/><path d="M19 7h8v10l3.4 3.6q2 4.4-2.4 5-3.6 0-5.6-3L19 17z" fill="#e8667a"/><rect x="19" y="7" width="8" height="3.6" fill="#fff"/>',
    ["wardrobe"],
  ],
  cutlery: [
    "Ustensiles",
    '<path d="M8 3v9q0 3 2.2 3.6V29h2.6V15.6Q15 15 15 12V3h-1.6v8h-1.2V3h-1.6v8H9.4V3z" fill="#b9c3d2"/><path d="M19 3q4 1 4 9v4h-2V29h-2.6z" fill="#cdd5e1"/><path d="M26.5 3q3 2 2.6 8-.4 3-2.2 3.6V29h-2.6V14.6q-1.8-.6-2.1-3.6-.3-6 2.6-8z" fill="#aab4c4" opacity=".0"/><rect x="10" y="20" width="2.6" height="9" rx="1.2" fill="#8a6a4a"/><rect x="19" y="20" width="2.6" height="9" rx="1.2" fill="#8a6a4a"/>',
    ["kdrawer"],
  ],
  spatula: [
    "Spatule",
    '<rect x="10" y="3" width="12" height="12" rx="3" fill="#e2833f"/><path d="M13 6v6M16 6v6M19 6v6" stroke="#b9612a" stroke-width="1.4" stroke-linecap="round"/><rect x="14.5" y="14" width="3" height="15" rx="1.5" fill="#6b4a35"/>',
    ["kdrawer", "counter"],
  ],
};
((DIT.towel2 = DIT.towel2 || null),
  delete DIT.towel2,
  ["shirt", "cshirt", "dress"].forEach((e) => {
    DIT[e][2] = ["wardrobe"];
  }),
  (DIT.sweater[2] = ["wardrobe", "drawer"]),
  (DIT.socks[2] = ["drawer", "wardrobe"]),
  (DIT.pot[2] = ["stove", "cab"]),
  (DIT.pan[2] = ["stove", "cab"]),
  (DIT.plate[2] = ["table", "counter", "cab"]));
const dSpr = (e, t) =>
  `<svg viewBox="0 0 32 32" width="${t}" height="${t}" aria-hidden="true">${DIT[e][1]}</svg>`;
const dWood = "#c58a54";
const dDark = "#8a5a36";
const dWhite = "#f1f2f7";
const dWinR = (e, t, a, s, n, o = "#a9d6f2") => {
  (e.pg(e.qR(t - 0.12, a + 0.12, s - 0.12, n + 0.12), "#f4f1ea", "#cfc8b8"), e.pg(e.qR(t, a, s, n), o));
  const i = (t + a) / 2,
    r = (s + n) / 2;
  (e.ln(e.P(i, 0, s), e.P(i, 0, n), "#f4f1ea", 1.6),
    e.ln(e.P(t, 0, r), e.P(a, 0, r), "#f4f1ea", 1.6),
    e.pg(
      [e.P(t, 0, s), e.P(t + 0.45 * (a - t), 0, s), e.P(t + 0.2 * (a - t), 0, n), e.P(t, 0, n)],
      "#fff",
      null,
    ),
    (e.s = e.s.replace(/(<polygon [^>]*fill="#fff"\/>)$/, '<g opacity=".35">$1</g>')));
};
const dWinL = (e, t, a, s, n, o = "#a9d6f2") => {
  (e.pg(e.qL(t - 0.12, a + 0.12, s - 0.12, n + 0.12), "#f4f1ea", "#cfc8b8"), e.pg(e.qL(t, a, s, n), o));
  const i = (t + a) / 2,
    r = (s + n) / 2;
  (e.ln(e.P(0, i, s), e.P(0, i, n), "#f4f1ea", 1.6), e.ln(e.P(0, t, r), e.P(0, a, r), "#f4f1ea", 1.6));
};
const dDoorR = (e, t, a, s, n) => {
  (e.pg(e.qR(t - 0.1, a + 0.1, 0, s + 0.1), dSh(n, 0.7)), e.pg(e.qR(t, a, 0, s), n, dSh(n, 0.7)));
  const o = e.P(a - 0.25, 0, 0.48 * s);
  e.s += `<circle cx="${o[0].toFixed(1)}" cy="${o[1].toFixed(1)}" r="2.2" fill="#e8d9a8"/>`;
};
const dRug = (e, t, a, s, n, o) => {
  (e.pg([e.P(t, a), e.P(t + s, a), e.P(t + s, a + n), e.P(t, a + n)], o, dSh(o, 0.8), 1),
    e.pg(
      [
        e.P(t + 0.25, a + 0.25),
        e.P(t + s - 0.25, a + 0.25),
        e.P(t + s - 0.25, a + n - 0.25),
        e.P(t + 0.25, a + n - 0.25),
      ],
      dSh(o, 1.12),
    ));
};
const dBed = (e, t, a, s, n, o, i = "#a9744a", r = "#f3f0fa") => {
  e.box(t, a - 0.1, 0, s, 0.3, 1.9, i);
  const l = e.box(t, a, 0, s, n, 0.6, i),
    c = e.box(t + 0.1, a + 0.2, 0.6, s - 0.2, n - 0.3, 0.45, r, { t: dSh(r, 1.04) }),
    d = e.box(t + 0.06, a + 0.4 * n, 1.05, s - 0.12, 0.6 * n - 0.08, 0.16, o, { t: dSh(o, 1.1) });
  e.zone("bed", c.top, dHull([...l.hull, ...c.hull, ...d.hull]));
};
const dDesk = (e, t, a, s, n, o = dWood) => {
  (e.box(t + 0.05, a, 0, 0.22, n, 2, dSh(o, 0.8)), e.box(t + s - 0.27, a, 0, 0.22, n, 2, dSh(o, 0.8)));
  const i = e.box(t, a, 2, s, n, 0.24, o);
  e.zone(
    "desk",
    i.top,
    dHull([
      ...i.hull,
      ...e.box(t, a, 0, 0.01, 0.01, 0.01, o, { noL: 1, noR: 1 }).hull,
      e.P(t + 0.05, a + n, 0),
      e.P(t + s - 0.05, a + n, 0),
    ]),
  );
};
const dChairOf = (e, t, a, s = "#6f8fd8") => {
  (e.box(t + 0.35, a + 0.35, 0, 0.2, 0.2, 0.8, "#555a6a"),
    e.box(t, a, 0.8, 1, 1, 0.25, s),
    e.box(t, a, 1.05, 1, 0.2, 0.9, dSh(s, 0.9)));
};
const dStore = (e, t, a, s, n, o, i, r) => {
  const l = "R" !== o,
    c = l ? 0 : t + s,
    d = l ? a + n : 0,
    f = l ? t : a;
  e.st.push({
    at: e.s.length,
    c: i,
    fp: (t, a, s = 0, n = 0) => (l ? e.P(t + n, d + s, a) : e.P(c + s, t + n, a)),
    parts: r.map((e) => Object.assign({}, e, { u0: f + e.a * (l ? s : n), u1: f + e.b * (l ? s : n) })),
  });
};
const dWard = (e, t, a, s, n, o, i, r = "R") => {
  const l = e.box(t, a, 0, s, n, o, i),
    c = "R" === r ? l.R : l.L,
    d = c[0],
    f = c[1],
    u = c[2],
    h = c[3],
    p = (e, t, a) => [e[0] + (t[0] - e[0]) * a, e[1] + (t[1] - e[1]) * a];
  e.ln(p(d, f, 0.5), p(h, u, 0.5), dSh(i, 0.55), 1.2);
  const m = p(p(d, f, 0.44), p(h, u, 0.44), 0.5),
    b = p(p(d, f, 0.56), p(h, u, 0.56), 0.5);
  ((e.s += `<circle cx="${m[0].toFixed(1)}" cy="${m[1].toFixed(1)}" r="1.3" fill="#e8d9a8"/><circle cx="${b[0].toFixed(1)}" cy="${b[1].toFixed(1)}" r="1.3" fill="#e8d9a8"/>`),
    dStore(
      e,
      t,
      a,
      s,
      n,
      r,
      i,
      ("R" === r ? n : s) >= 1.4
        ? [
            { t: "door", k: "wardrobe", a: 0.03, b: 0.5, z0: 0.15, z1: o - 0.2, hg: "l", cap: 3 },
            { t: "door", k: "wardrobe", a: 0.5, b: 0.97, z0: 0.15, z1: o - 0.2, hg: "r", cap: 3 },
          ]
        : [{ t: "door", k: "wardrobe", a: 0.04, b: 0.96, z0: 0.15, z1: o - 0.2, hg: "l", cap: 3 }],
    ));
};
const dShelf = (e, t, a, s, n, o, i = dWood, r = "R") => {
  const l = e.box(t, a, 0, s, n, o, i, { t: dSh(i, 1.12) }),
    c = "R" === r ? l.R : l.L,
    d = (e, t, a) => [e[0] + (t[0] - e[0]) * a, e[1] + (t[1] - e[1]) * a];
  for (let t = 1; t < 4; t++) {
    const a = t / 4;
    e.ln(d(c[0], c[3], a), d(c[1], c[2], a), dSh(i, 0.55), 1.6);
  }
  e.zone(
    "shelf",
    c.map((e) => [e[0], e[1]]),
    l.hull,
    "b",
  );
};
const dSide = (e, t, a, s, n, o = 1.25, i = dWood) => {
  const r = e.box(t, a, 0, s, n, o, i);
  e.zone("side", r.top, r.hull);
};
const dDresser = (e, t, a, s, n, o = 1.7, i = dWood, r = "L") => {
  const l = e.box(t, a, 0, s, n, o, i),
    c = "R" === r ? l.R : l.L,
    d = (e, t, a) => [e[0] + (t[0] - e[0]) * a, e[1] + (t[1] - e[1]) * a];
  for (let t = 1; t < 3; t++) {
    const a = t / 3;
    e.ln(d(c[0], c[3], a), d(c[1], c[2], a), dSh(i, 0.55), 1.2);
  }
  (e.zone("dresser", l.top, l.hull),
    dStore(
      e,
      t,
      a,
      s,
      n,
      r,
      i,
      [0, 1, 2].map((e) => ({
        t: "drawer",
        k: "drawer",
        a: 0.04,
        b: 0.96,
        z0: (e * o) / 3 + 0.06,
        z1: ((e + 1) * o) / 3 - 0.06,
        cap: 2,
      })),
    ));
};
const dTable = (e, t, a, s, n, o, i = dWood, r = "table") => {
  [
    [0, 0],
    [s - 0.22, 0],
    [0, n - 0.22],
    [s - 0.22, n - 0.22],
  ].forEach(([s, n]) => e.box(t + s, a + n, 0, 0.22, 0.22, o, dSh(i, 0.8)));
  const l = e.box(t, a, o, s, n, 0.22, i);
  e.zone(r, l.top, l.hull);
};
const dSofa = (e, t, a, s, n, o, i = !0) => {
  (e.box(t, a, 0, 0.5, n, 1.7, o), e.box(t + 0.5, a, 0, s - 0.5, 0.4, 1.3, dSh(o, 0.95)));
  const r = e.box(t + 0.5, a + 0.4, 0, s - 0.5, n - 0.8, 0.9, dSh(o, 1.05));
  e.box(t + 0.5, a + n - 0.4, 0, s - 0.5, 0.4, 1.3, dSh(o, 0.9));
  const l = [
    e.P(t + 0.5, a + 0.4, 0.9),
    e.P(t + s, a + 0.4, 0.9),
    e.P(t + s, a + n - 0.4, 0.9),
    e.P(t + 0.5, a + n - 0.4, 0.9),
  ];
  e.zone("sofa", l, dHull([...r.hull, e.P(t, a + n, 1.7), e.P(t, a, 1.7)]));
};
const dTV = (e, t, a, s, n, o = 1.1, i = "#5b4636") => {
  const r = e.box(t, a, 0, s, n, o, i);
  e.zone("tv", r.top, r.hull);
};
const dCounter = (e, t, a, s, n, o = 1.9, i = "#e8e4da", r = "counter", l = "#7a8896") => {
  const c = e.box(t, a, 0, s, n, o, l, { t: i });
  (e.box(t - 0.03, a - 0.03, o, s + 0.06, n + 0.06, 0.18, i),
    e.box(t, a, o + 0.18, 0.001, 0.001, 0.001, i, { noL: 1, noR: 1 }));
  const d = [
    e.P(t, a, o + 0.18),
    e.P(t + s, a, o + 0.18),
    e.P(t + s, a + n, o + 0.18),
    e.P(t, a + n, o + 0.18),
  ];
  return (
    e.zone(r, d, c.hull),
    "counter" === r &&
      dStore(e, t, a, s, n, "L", l, [
        { t: "drawer", k: "kdrawer", a: 0.04, b: 0.96, z0: o - 0.5, z1: o - 0.06, cap: 2 },
        ...(s >= 1.7
          ? [
              { t: "door", k: "cab", a: 0.04, b: 0.5, z0: 0.1, z1: o - 0.6, hg: "l", cap: 2 },
              { t: "door", k: "cab", a: 0.5, b: 0.96, z0: 0.1, z1: o - 0.6, hg: "r", cap: 2 },
            ]
          : [{ t: "door", k: "cab", a: 0.04, b: 0.96, z0: 0.1, z1: o - 0.6, hg: "l", cap: 2 }]),
      ]),
    d
  );
};
const dStove = (e, t, a, s, n, o = 1.9) => {
  const i = e.box(t, a, 0, s, n, o, "#4a4f5c", { t: "#2e323c" }),
    r = [e.P(t, a, o), e.P(t + s, a, o), e.P(t + s, a + n, o), e.P(t, a + n, o)];
  [
    [0.28, 0.28],
    [0.72, 0.28],
    [0.28, 0.72],
    [0.72, 0.72],
  ].forEach(([i, r]) => {
    const l = e.P(t + s * i, a + n * r, o);
    e.s += `<ellipse cx="${l[0].toFixed(1)}" cy="${l[1].toFixed(1)}" rx="6" ry="3" fill="#1a1c22" stroke="#555b6c" stroke-width=".8"/>`;
  });
  const l = i.L,
    c = (e, t, a) => [e[0] + (t[0] - e[0]) * a, e[1] + (t[1] - e[1]) * a];
  (e.pg(
    [
      c(c(l[0], l[3], 0.2), c(l[1], l[2], 0.2), 0.15),
      c(c(l[0], l[3], 0.2), c(l[1], l[2], 0.2), 0.85),
      c(c(l[0], l[3], 0.7), c(l[1], l[2], 0.7), 0.85),
      c(c(l[0], l[3], 0.7), c(l[1], l[2], 0.7), 0.15),
    ],
    "#6b7385",
    "#2e323c",
  ),
    e.zone("stove", r, i.hull));
};
const dFridge = (e, t, a, s, n, o = 4.4) => {
  const i = e.box(t, a, 0, s, n, o, "#dfe6ee"),
    r = i.L,
    l = (e, t, a) => [e[0] + (t[0] - e[0]) * a, e[1] + (t[1] - e[1]) * a];
  (e.ln(l(r[3], r[2], 0) && l(r[0], r[3], 0.62), l(r[1], r[2], 0.62), "#9aa6b6", 1.2),
    e.pg(
      [
        l(l(r[0], r[3], 0.3), l(r[1], r[2], 0.3), 0.1),
        l(l(r[0], r[3], 0.3), l(r[1], r[2], 0.3), 0.14),
        l(l(r[0], r[3], 0.55), l(r[1], r[2], 0.55), 0.14),
        l(l(r[0], r[3], 0.55), l(r[1], r[2], 0.55), 0.1),
      ],
      "#9aa6b6",
    ),
    e.zone(
      "fridge",
      r.map((e) => [e[0], e[1]]),
      i.hull,
      "c",
    ));
};
const dTub = (e, t, a, s, n, o = "#f4f6fa") => {
  const i = e.box(t, a, 0, s, n, 1.3, o),
    r = [
      e.P(t + 0.22, a + 0.22, 1.3),
      e.P(t + s - 0.22, a + 0.22, 1.3),
      e.P(t + s - 0.22, a + n - 0.22, 1.3),
      e.P(t + 0.22, a + n - 0.22, 1.3),
    ];
  (e.pg(r, "#b9d9ec", dSh(o, 0.7)),
    e.pg(
      [
        e.P(t + 0.3, a + 0.3, 1.3),
        e.P(t + s - 0.3, a + 0.3, 1.3),
        e.P(t + s - 0.3, a + 0.55 * n, 1.3),
        e.P(t + 0.3, a + 0.55 * n, 1.3),
      ],
      "#cfe8f6",
    ));
  const l = e.P(t + s - 0.4, a + 0.1, 1.3);
  ((e.s += `<rect x="${(l[0] - 2).toFixed(1)}" y="${(l[1] - 9).toFixed(1)}" width="4" height="9" rx="1.5" fill="#aab4c4"/><rect x="${(l[0] - 6).toFixed(1)}" y="${(l[1] - 11).toFixed(1)}" width="12" height="3" rx="1.5" fill="#aab4c4"/>`),
    e.zone("tub", r, i.hull));
};
const dToilet = (e, t, a, s = "#f6f8fb") => {
  e.box(t, a + 0.15, 0, 0.7, 1.3, 1.9, s);
  const n = e.box(t + 0.7, a, 0, 1, 1.6, 0.9, s),
    o = [
      e.P(t + 0.82, a + 0.12, 0.9),
      e.P(t + 1.58, a + 0.12, 0.9),
      e.P(t + 1.58, a + 1.48, 0.9),
      e.P(t + 0.82, a + 1.48, 0.9),
    ];
  e.pg(o, "#dfe6ee", dSh(s, 0.7));
  const i = e.P(t + 1.2, a + 0.8, 0.9);
  e.s += `<ellipse cx="${i[0].toFixed(1)}" cy="${i[1].toFixed(1)}" rx="9" ry="5" fill="#c9d4e0"/>`;
  const r = [
    e.P(t, a + 0.15, 1.9),
    e.P(t + 0.7, a + 0.15, 1.9),
    e.P(t + 0.7, a + 1.45, 1.9),
    e.P(t, a + 1.45, 1.9),
  ];
  e.zone("toilet", r, dHull([...n.hull, ...r]));
};
const dVanity = (e, t, a, s, n, o = "#9a7050", i = "#f1f2f7") => {
  const r = e.box(t, a, 0, s, n, 1.9, o, { t: i }),
    l = [e.P(t, a, 1.9), e.P(t + s, a, 1.9), e.P(t + s, a + n, 1.9), e.P(t, a + n, 1.9)],
    c = e.P(t + s / 2, a + n / 2, 1.9);
  ((e.s += `<ellipse cx="${c[0].toFixed(1)}" cy="${c[1].toFixed(1)}" rx="10" ry="5" fill="#cfd9e4" stroke="#aab4c4" stroke-width=".8"/>`),
    e.zone("sink", l, r.hull));
};
const dRail = (e, t, a, s) => {
  (e.ln(e.P(0.08, t, s), e.P(0.08, a, s), "#aab4c4", 2.2),
    e.zone("rail", e.qL(t - 0.1, a + 0.1, s - 1.2, s + 0.3), null, "c"));
};
const dRailR = (e, t, a, s) => {
  (e.ln(e.P(t, 0.08, s), e.P(a, 0.08, s), "#aab4c4", 2.2),
    e.zone("rail", e.qR(t - 0.1, a + 0.1, s - 1.2, s + 0.3), null, "c"));
};
const dUpper = (e, t, a, s = "#e8e4da") => {
  const n = e.box(t, 0, 3.2, a - t, 0.8, 1.4, s).L,
    o = (e, t, a) => [e[0] + (t[0] - e[0]) * a, e[1] + (t[1] - e[1]) * a],
    i = Math.max(1, Math.round((a - t) / 1.3));
  for (let t = 1; t < i; t++) e.ln(o(n[0], n[1], t / i), o(n[3], n[2], t / i), dSh(s, 0.6), 1);
};
const dCrib = (e, t, a, s, n) => {
  e.box(t, a - 0.1, 0, s, 0.25, 1.6, "#f4efe6");
  const o = e.box(t, a, 0, s, n, 0.6, "#f4efe6"),
    i = e.box(t + 0.1, a + 0.2, 0.6, s - 0.2, n - 0.3, 0.4, "#dfeaf6"),
    r = e.box(t + 0.06, a + 0.45 * n, 0.98, s - 0.12, 0.55 * n - 0.08, 0.14, "#a9d6c8", { t: "#bfe6da" });
  for (let o = 0; o <= 10; o++) {
    const i = a + 0.15 + (o * (n - 0.3)) / 10;
    e.ln(e.P(t + s, i, 0.6), e.P(t + s, i, 1.4), "#e6dccb", 1.4);
  }
  for (let o = 0; o <= 5; o++) {
    const i = t + 0.1 + (o * (s - 0.2)) / 5;
    e.ln(e.P(i, a + n, 0.6), e.P(i, a + n, 1.4), "#e6dccb", 1.4);
  }
  (e.ln(e.P(t + s, a, 1.4), e.P(t + s, a + n, 1.4), "#f4efe6", 2.6),
    e.ln(e.P(t, a + n, 1.4), e.P(t + s, a + n, 1.4), "#f4efe6", 2.6),
    e.box(t, a + n - 0.12, 0, s, 0.12, 0.02, "#f4efe6", { noL: 1, noR: 1 }),
    e.zone("bed", i.top, dHull([...o.hull, ...i.hull, ...r.hull, e.P(t, a + n, 1.4), e.P(t + s, a, 1.4)])));
};
const dChest = (e, t, a, s, n, o = "#5fa9e0") => {
  const i = e.box(t, a, 0, s, n, 0.9, o);
  e.zone("shelf", i.top, i.hull);
};
const dBath = (e) => (t) => {
  (dWinR(t, 3.3, 5.5, 2.3, 4.5),
    dVanity(t, 0, 0.3, 1.6, 2.2, e.cab),
    dTub(t, 2.2, 0, 4.6, 2.2),
    dRailAt(t),
    dToilet(t, 0, 3.6));
};
const dRailAt = (e) => dRail(e, 3.4, 5.2, 3);
const DRM = [
  {
    h: "Condo",
    n: "La chambre",
    W: 7,
    D: 7,
    Hh: 5.2,
    c: ["#c9d3f0", "#b7c3ea", "#d8b58a"],
    b: (e) => {
      (dWinR(e, 3, 4.8, 2.3, 4.4),
        dRug(e, 3.1, 2.8, 2.8, 2.6, "#b9a6e0"),
        dSide(e, 0, 0.1, 0.9, 0.9),
        dBed(e, 0, 1.2, 2.6, 4.2, "#8f7fe0"),
        dDesk(e, 3, 0, 2.2, 1.3),
        dChairOf(e, 3.7, 1.7),
        dWard(e, 5.4, 0, 1.6, 1.3, 4.2, "#d8c9ae", "L"),
        dShelf(e, 0, 5.7, 1.1, 1.3, 3.4, dWood, "R"));
    },
    items: ["teddy", "pillow", "computer", "lamp", "books", "shirt", "poster", "clock"],
  },
  {
    h: "Condo",
    n: "La salle de bain",
    W: 7,
    D: 7,
    Hh: 5.2,
    c: ["#cfe6ee", "#bcd9e4", "#e6eef2", "#cfdde4"],
    b: dBath({ cab: "#a9825a" }),
    items: ["toothbrush", "soap", "towel", "shampoo", "paper", "duck", "mirror", "bathmat"],
  },
  {
    h: "Condo",
    n: "La cuisine",
    W: 7,
    D: 7,
    Hh: 5.2,
    c: ["#efe6d2", "#e2d8c2", "#b98a5a"],
    b: (e) => {
      (dWinL(e, 2.3, 4.5, 2, 4.3),
        dUpper(e, 0.4, 3.3),
        dUpper(e, 3.3, 5.2),
        dRug(e, 1.6, 3, 3.6, 3.2, "#e9c9b0"),
        dCounter(e, 0.4, 0, 1.5, 1.3),
        dStove(e, 1.9, 0, 1.4, 1.3),
        dCounter(e, 3.3, 0, 1.9, 1.3),
        dFridge(e, 5.4, 0, 1.4, 1.3),
        dChairOf(e, 1.3, 3.6, "#e8946c"),
        dTable(e, 2.5, 3.3, 2, 1.8, 1.7),
        dChairOf(e, 4.9, 3.6, "#e8946c"));
    },
    items: ["pot", "kettle", "toaster", "mug", "fruit", "plate", "magnet", "plant", "cutlery"],
  },
  {
    h: "Condo",
    n: "Le salon",
    W: 7,
    D: 7,
    Hh: 5.2,
    c: ["#e8d9c4", "#dccbb2", "#b08e6a"],
    b: (e) => {
      (dWinR(e, 2.9, 4.9, 2.4, 4.4),
        dRug(e, 2.4, 2, 3.6, 3.4, "#8fb0c9"),
        dSide(e, 0, 0.2, 1, 1),
        dSofa(e, 0, 1.8, 2.1, 3.8, "#6f86a8"),
        dTV(e, 2.4, 0, 2.8, 1.2),
        dShelf(e, 5.6, 0, 1.4, 1, 3.4, dWood, "L"),
        dTable(e, 3.3, 2.7, 1.6, 1.7, 0.9, dWood, "coffee"));
    },
    items: ["tv", "gamepad", "remote", "book", "cushion", "plant", "lamp", "frame"],
  },
  {
    h: "Maison",
    n: "La chambre des parents",
    W: 7,
    D: 7,
    Hh: 5.2,
    c: ["#d8e6d8", "#c5d8c8", "#d3ae82"],
    b: (e) => {
      (dWinR(e, 2.8, 4.6, 2.6, 4.5),
        dRug(e, 3.6, 2.8, 3, 3, "#e0bfa0"),
        dSide(e, 0, 0.3, 0.9, 1.1),
        dBed(e, 0, 1.6, 3.2, 4.2, "#7fb8c9", "#8a5a36"),
        dDresser(e, 2.6, 0, 2.2, 1.1),
        dWard(e, 5.3, 0, 1.7, 1.3, 4.2, "#c8b08c", "L"));
    },
    items: [
      "pillow",
      "quilt",
      "lamp",
      "clock",
      "perfume",
      "jewel",
      "shirt",
      "frame",
      "cshirt",
      "dress",
      "sweater",
      "socks",
    ],
  },
  {
    h: "Maison",
    n: "Ta chambre",
    W: 7,
    D: 7,
    Hh: 5.2,
    c: ["#f6d9e4", "#eecbda", "#e7cfae"],
    b: (e) => {
      (dWinR(e, 5.2, 6.6, 2.4, 4.4),
        dRug(e, 2.6, 2.4, 3.2, 3.2, "#b9d9a0"),
        dSide(e, 0, 0.2, 0.9, 0.9),
        dBed(e, 0, 1.2, 2.2, 3.2, "#7fb8c9", "#f4efe6"),
        dShelf(e, 2.8, 0, 2.4, 0.9, 2.8, "#f1e6d4", "L"),
        dChest(e, 5, 4.8, 1.6, 1.1));
    },
    items: ["teddy", "blocks", "ball", "train", "horse", "book", "nightlight", "duck", "pillow", "poster"],
  },
  {
    h: "Maison",
    n: "La salle de bain",
    W: 7,
    D: 7,
    Hh: 5.2,
    c: ["#e9dff4", "#d9cdeb", "#efe9f6", "#dcd2ea"],
    b: dBath({ cab: "#8b6fb0" }),
    items: [
      "toothbrush",
      "soap",
      "towel",
      "shampoo",
      "paper",
      "duck",
      "bathmat",
      "plant",
      "mirror",
      "perfume",
    ],
  },
  {
    h: "Maison",
    n: "La cuisine",
    W: 7,
    D: 7,
    Hh: 5.2,
    c: ["#f3e4c6", "#e8d6b0", "#c59a68"],
    b: (e) => {
      (dWinL(e, 2.3, 4.5, 2, 4.3),
        dUpper(e, 0.4, 3.3, "#8a6a4a"),
        dUpper(e, 3.3, 5.2, "#8a6a4a"),
        dRug(e, 1.6, 3, 3.6, 3.2, "#d98c63"),
        dCounter(e, 0.4, 0, 1.5, 1.3, 1.9, "#d9cdb6", "counter", "#8a6a4a"),
        dStove(e, 1.9, 0, 1.4, 1.3),
        dCounter(e, 3.3, 0, 1.9, 1.3, 1.9, "#d9cdb6", "counter", "#8a6a4a"),
        dFridge(e, 5.4, 0, 1.4, 1.3),
        dChairOf(e, 1.3, 3.6, "#5fa9a0"),
        dTable(e, 2.5, 3.3, 2, 1.8, 1.7),
        dChairOf(e, 4.9, 3.6, "#5fa9a0"));
    },
    items: [
      "pot",
      "pan",
      "mug",
      "plate",
      "fruit",
      "kettle",
      "magnet",
      "book",
      "toaster",
      "plant",
      "cutlery",
      "spatula",
    ],
  },
  {
    h: "Maison",
    n: "Le salon",
    W: 7,
    D: 7,
    Hh: 5.2,
    c: ["#e4e8f4", "#d4daea", "#a98d6c"],
    b: (e) => {
      (dWinR(e, 2.9, 4.9, 2.4, 4.4),
        dRug(e, 2.4, 2, 3.6, 3.4, "#e0a99a"),
        dSide(e, 0, 0.2, 1, 1),
        dSofa(e, 0, 1.8, 2.1, 3.8, "#c97b6a"),
        dTV(e, 2.4, 0, 2.8, 1.2),
        dShelf(e, 5.6, 0, 1.4, 1, 3.4, dWood, "L"),
        dTable(e, 3.3, 2.7, 1.6, 1.7, 0.9, dWood, "coffee"));
    },
    items: ["tv", "remote", "cushion", "blanket", "vase", "book", "plant", "frame", "gamepad", "lamp"],
  },
  {
    h: "Maison",
    n: "La cour",
    W: 7,
    D: 7,
    Hh: 2.2,
    yard: 1,
    c: ["#d9c8a6", "#cdbb98", "#8fcf8a"],
    b: (e) => {
      for (let t = 0.25; t < 7; t += 0.5)
        (e.ln(e.P(0, t, 0.05), e.P(0, t, 2), "#b9a782", 1.1),
          e.ln(e.P(t, 0, 0.05), e.P(t, 0, 2), "#b9a782", 1.1));
      dRug(e, 1, 3, 3.2, 3.4, "#cfc4ae");
      const t = e.box(0.5, 0.5, 0, 3, 1.1, 0.5, "#6b4a35", { t: "#5a3d2c" }),
        a = [e.P(0.7, 0.7, 0.5), e.P(3.3, 0.7, 0.5), e.P(3.3, 1.4, 0.5), e.P(0.7, 1.4, 0.5)];
      (e.pg(a, "#4a3426"),
        [
          [1, 1],
          [1.6, 1.1],
          [2.2, 0.95],
          [2.8, 1.15],
        ].forEach(([t, a], s) => {
          const n = e.P(t, a, 0.5);
          e.s += `<circle cx="${n[0].toFixed(1)}" cy="${(n[1] - 4).toFixed(1)}" r="3" fill="${["#f08aa8", "#f4c24a", "#fff", "#a98fe0"][s]}"/>`;
        }),
        e.zone("flowerbed", a, t.hull));
      const s = e.box(5, 0.4, 0, 1.8, 1.7, 2.4, "#b98a5a");
      (e.pg(
        [e.P(4.9, 0.3, 2.4), e.P(6.9, 0.3, 2.4), e.P(6.9, 2.2, 2.4), e.P(4.9, 2.2, 2.4)].map((e) => e),
        "#8a4a3a",
        "#6a3a2a",
      ),
        e.zone("shed", s.L, dHull([...s.hull]), "c"),
        dTable(e, 1.4, 3.5, 1.6, 1.4, 1.5, "#b98a5a", "ptable"));
      const n = e.box(4.4, 4.2, 0, 2.2, 2.2, 0.55, "#c9a36a"),
        o = [e.P(4.55, 4.35, 0.55), e.P(6.45, 4.35, 0.55), e.P(6.45, 6.25, 0.55), e.P(4.55, 6.25, 0.55)];
      (e.pg(o, "#f0d9a0"), e.zone("sandbox", o, n.hull));
    },
    items: ["ball", "bucket", "shovel", "can", "flowerpot", "bike", "chair", "book", "train", "blocks"],
  },
];
const dPool = ["tree", "gift", "gift2", "garland", "stocking", "wreath", "globe", "candle", "cocoa"];
const DXI = DRM.map((e, t) => dPool.filter((e, a) => a !== t % 9));
function dScene(e, t) {
  const a = DRM[e],
    s = dNew(a.W, a.D, a.Hh, a.c[0], a.c[1], (a.yard, a.c[2]), a.c[3]);
  return (a.yard, a.b(s), s);
}
G.find((e) => "demenage" === e.id).wl = [
  "La chambre est prête. Le lit attend déjà ses premières nuits.",
  "La salle de bain sent le savon frais. Le canard a trouvé son bain.",
  "La cuisine est rangée. Ça sent presque le café du matin.",
  "Le condo est prêt : quatre pièces, et déjà un chez-soi. Mais le temps passe vite…",
  "La chambre des parents est prête. Un grand lit, une fenêtre, un peu de silence.",
  "Ta chambre est prête. Le toutou veille déjà sur tes premières nuits.",
  "La salle de bain est en place, avec un tapis tout doux pour tes petits pieds.",
  "La cuisine fume déjà de promesses : des repas, des rires, des matins.",
  "Le salon est prêt. On y fera des câlins, des histoires et des siestes.",
  "La cour est prête. Les ballons, le sable et les fleurs t’attendent. La petite maison est complète !",
];
const dStory = {
  0: [
    "Année 1 · Le condo",
    "Tes parents emménagent dans leur tout premier condo : quatre pièces, beaucoup de boîtes et la douce lumière de la fin d’été. Toi, tu n’existes pas encore… mais déjà, cet endroit pense à toi. Range chaque objet là où il va.",
  ],
  4: [
    "Année 3 · La petite maison",
    "Deux ans ont passé, et te voilà : tu viens de naître. Le condo est devenu trop petit pour une famille qui grandit. Tes parents choisissent une petite maison, avec deux chambres, un salon, une cuisine, une salle de bain… et une petite cour. Ta toute première chambre t’attend.",
  ],
};
function dmOv(e, t) {
  const a = $("#dmo");
  a && a.remove();
  const s = document.createElement("div");
  ((s.className = "sfr"),
    (s.id = "dmo"),
    s.setAttribute("role", "dialog"),
    s.setAttribute("aria-modal", "true"),
    (s.innerHTML = `<div class="glass sfc">${e}<button class="btn" data-a="dmx">${t || "Commencer"}</button></div>`),
    app.appendChild(s));
}
function pDemen(e) {
  const t = isX("demenage", lv),
    a = t ? xn("demenage", lv) - 1 : lv,
    s = DRM[a],
    n = t ? DXI[a] : s.items,
    o = dScene(a);
  let i = e && e.p ? e.p.filter((e) => n.includes(e[0])) : [],
    r = null,
    l = 0,
    c = !1,
    d = new Set();
  const f = [];
  o.st.forEach((e, t) => e.parts.forEach((a, s) => f.push(Object.assign({ id: t + "." + s, S: e }, a))));
  const u = new Set(e && e.o ? e.o.filter((e) => f.some((t) => t.id === e)) : []);
  ((i = i.filter((e) => !e[6] || f.some((t) => t.id === e[6]))),
    (snap = () => ({ p: i, o: [...u], b: void 0 !== w ? w : void 0, bo: void 0 !== R ? [...R] : void 0 })));
  const h = (e) => e.map((e) => e[0].toFixed(1) + "," + e[1].toFixed(1)).join(" ");
  f.forEach(
    (e) =>
      (e.g = ((e) => {
        const t = e.S.fp,
          { u0: a, u1: s, z0: n, z1: o } = e,
          i = { front: [t(a, n), t(s, n), t(s, o), t(a, o)] };
        if ("door" === e.t) {
          const r = 0.96 * (s - a),
            l = "l" === e.hg ? -1 : 1,
            c = "l" === e.hg ? a : s,
            d = "l" === e.hg ? 0.34 : 1.15,
            f = l * r * Math.sin(d),
            u = r * Math.cos(d);
          ((i.panel = [t(c, n), t(c, n, u, f), t(c, o, u, f), t(c, o)]),
            (i.zone = i.front),
            (i.slots = [...Array(e.cap)].map((i, r) => t((a + s) / 2, o - ((r + 0.5) * (o - n)) / e.cap))),
            (i.an = "c"));
        } else {
          const r = 0.8,
            l = n + 0.06;
          ((i.floor = [t(a, l), t(s, l), t(s, l, r), t(a, l, r)]),
            (i.fr = [t(a, n, r), t(s, n, r), t(s, o, r), t(a, o, r)]),
            (i.sl = [t(a, n), t(a, n, r), t(a, o, r), t(a, o)]),
            (i.sr = [t(s, n), t(s, n, r), t(s, o, r), t(s, o)]),
            (i.panel = i.fr),
            (i.zone = dHull([...i.floor, ...i.fr])),
            (i.slots = [...Array(e.cap)].map((n, o) => t(a + ((o + 1) * (s - a)) / (e.cap + 1), l, 0.5 * r))),
            (i.an = "b"));
        }
        return i;
      })(e)),
  );
  const p = (e) => i.filter((t) => t[6] === e),
    m = () => {
      const e = $("#dmst");
      if (!e) return;
      let t = "";
      ([...new Set(f.map((e) => e.S))]
        .flatMap((e) => {
          const t = f.filter((t) => t.S === e);
          return [
            ...t.filter((e) => !u.has(e.id)),
            ...t.filter((e) => u.has(e.id)).sort((e, t) => e.z0 - t.z0),
          ];
        })
        .forEach((e) => {
          const a = e.g,
            s = e.S.c,
            n = (e, t, a) => [e[0] + (t[0] - e[0]) * a, e[1] + (t[1] - e[1]) * a];
          if (!u.has(e.id)) {
            if (
              ((t += `<polygon class="dmd" data-c="${e.id}" points="${h(a.front)}" fill="${dSh(s, "door" === e.t ? 0.96 : 0.92)}" stroke="${dSh(s, 0.55)}" stroke-width=".9" stroke-linejoin="round"/>`),
              "door" === e.t)
            ) {
              const o = "l" === e.hg ? n(a.front[1], a.front[2], 0.5) : n(a.front[0], a.front[3], 0.5),
                i = n(
                  o,
                  "l" === e.hg ? n(a.front[0], a.front[3], 0.5) : n(a.front[1], a.front[2], 0.5),
                  0.14,
                );
              t += ((e, t) =>
                `<circle cx="${e[0].toFixed(1)}" cy="${e[1].toFixed(1)}" r="1.4" fill="#e8d9a8" stroke="${dSh(t, 0.5)}" stroke-width=".4"/>`)(
                i,
                s,
              );
            } else {
              const e = n(n(a.front[0], a.front[3], 0.5), n(a.front[1], a.front[2], 0.5), 0.4),
                s = n(n(a.front[0], a.front[3], 0.5), n(a.front[1], a.front[2], 0.5), 0.6);
              t += `<line x1="${e[0].toFixed(1)}" y1="${e[1].toFixed(1)}" x2="${s[0].toFixed(1)}" y2="${s[1].toFixed(1)}" stroke="#e8d9a8" stroke-width="1.8" stroke-linecap="round"/>`;
            }
            return;
          }
          const o = p(e.id)
            .map((t) =>
              y(
                t[0],
                t[1],
                t[2],
                t[3],
                (t[4] ? "pop " : "") + (d.has(t[0]) ? "bad" : ""),
                ((e) => ("door" === e.t && "wardrobe" === e.k ? 20 : 15))(e),
              ),
            )
            .join("");
          if ("door" === e.t) {
            ((t += `<polygon points="${h(a.front)}" fill="#3b2a20" stroke="${dSh(s, 0.5)}" stroke-width=".9"/>`),
              n(a.front[3], a.front[2], 0),
              n(a.front[3], a.front[2], 1));
            const i = n(n(a.front[0], a.front[3], 0.88), n(a.front[1], a.front[2], 0.88), 0),
              r = n(n(a.front[0], a.front[3], 0.88), n(a.front[1], a.front[2], 0.88), 1);
            ((t +=
              "wardrobe" === e.k
                ? `<line x1="${i[0].toFixed(1)}" y1="${i[1].toFixed(1)}" x2="${r[0].toFixed(1)}" y2="${r[1].toFixed(1)}" stroke="#b9c3d2" stroke-width="1.6"/>`
                : `<polygon points="${h([n(a.front[0], a.front[3], 0.5), n(a.front[1], a.front[2], 0.5), n(a.front[1], a.front[2], 0.54), n(a.front[0], a.front[3], 0.54)])}" fill="#6b4c38"/>`),
              (t +=
                o +
                `<polygon class="dmd o" data-c="${e.id}" points="${h(a.panel)}" fill="${dSh(s, 1.05)}" stroke="${dSh(s, 0.55)}" stroke-width=".9" stroke-linejoin="round"/>`));
          } else {
            t +=
              `<polygon points="${h(a.front)}" fill="#2e2018"/><polygon points="${h(a.sl)}" fill="${dSh(s, 0.7)}" stroke="${dSh(s, 0.5)}" stroke-width=".6"/><polygon points="${h(a.floor)}" fill="#5a4030" stroke="${dSh(s, 0.5)}" stroke-width=".6"/>` +
              o +
              `<polygon points="${h(a.sr)}" fill="${dSh(s, 0.8)}" stroke="${dSh(s, 0.5)}" stroke-width=".6"/><polygon class="dmd o" data-c="${e.id}" points="${h(a.fr)}" fill="${dSh(s, 0.95)}" stroke="${dSh(s, 0.55)}" stroke-width=".9" stroke-linejoin="round"/>`;
            const i = n(n(a.fr[0], a.fr[3], 0.5), n(a.fr[1], a.fr[2], 0.5), 0.4),
              r = n(n(a.fr[0], a.fr[3], 0.5), n(a.fr[1], a.fr[2], 0.5), 0.6);
            t += `<line x1="${i[0].toFixed(1)}" y1="${i[1].toFixed(1)}" x2="${r[0].toFixed(1)}" y2="${r[1].toFixed(1)}" stroke="#e8d9a8" stroke-width="1.8" stroke-linecap="round"/>`;
          }
        }),
        (e.innerHTML = t));
    },
    b = (e) => {
      for (const t of f.slice().reverse()) {
        const a = t.g,
          s = u.has(t.id);
        if (s && dIn(e, a.panel)) return { c: t, panel: 1 };
        if (s && dIn(e, a.zone)) return { c: t, inside: 1 };
        if (!s && dIn(e, a.front)) return { c: t, closed: 1 };
      }
      return null;
    },
    g = (e, t) => {
      (t ? u.add(e.id) : u.delete(e.id), sfx(t ? 420 : 330, 0.18), vib(6), m(), v(), sv());
    };
  act.dmx = () => {
    const e = $("#dmo");
    e && e.remove();
  };
  const E = () => n.filter((e) => !i.some((t) => t[0] === e)),
    y = (e, t, a, s, n = "", o = 27) =>
      `<svg class="dmp ${n}" data-id="${e}" x="${(t - o / 2).toFixed(1)}" y="${(a - ("c" === s ? o / 2 : 0.937 * o)).toFixed(1)}" width="${o}" height="${o}" viewBox="0 0 32 32"><title>${DIT[e][0]}</title>${DIT[e][1]}</svg>`,
    v = () => {
      const e = $("#dmr");
      (e && e.classList.toggle("hb", d.size > 0), m());
      const t = $("#dml");
      t &&
        (t.innerHTML = i
          .filter((e) => !e[6])
          .sort((e, t) => e[2] - t[2])
          .map((e) => y(e[0], e[1], e[2], e[3], (e[4] ? "pop" : "") + (d.has(e[0]) ? " bad" : "")))
          .join(""));
    },
    A = o.P,
    S = ((L = 7919 * lv + (t ? 77 : 13)), () => (L = (1103515245 * L + 12345) & 2147483647) / 2147483647),
    x = 1.05,
    M = 0.8;
  var L;
  const T = (e, t) =>
      dHull([
        A(e, t),
        A(e + x, t),
        A(e + x, t + x),
        A(e, t + x),
        A(e, t, M),
        A(e + x, t, M),
        A(e + x, t + x, M),
        A(e, t + x, M),
      ]),
    k = (() => {
      const e = Math.max(1, Math.ceil(n.length / 4)),
        t = o.zs
          .filter((e) => "floor" !== e.k && "wall" !== e.k)
          .map((e) => e.hull)
          .concat(f.map((e) => dHull([...e.g.front, ...(e.g.panel || []), ...(e.g.floor || [])]))),
        a = [];
      for (let e = 0.25; e <= s.W - x - 0.2; e += 0.35)
        for (let t = 0.25; t <= s.D - x - 0.2; t += 0.35) a.push([e, t, e + t + 2.5 * S()]);
      a.sort((e, t) => t[2] - e[2]);
      const i = [];
      for (const s of [0, 1])
        for (const [n, o] of a) {
          if (i.length >= e) break;
          i.some(([e, t]) => Math.abs(e - n) < 1.45 && Math.abs(t - o) < 1.45) ||
            (!s &&
              t.some((e) => {
                return (
                  (t = T(n, o)),
                  (a = e),
                  t.some((e) => dIn(e, a)) || a.some((e) => dIn(e, t)) || dIn(dCen(t), a)
                );
                var t, a;
              })) ||
            i.push([n, o]);
        }
      return i.sort((e, t) => e[0] + e[1] - (t[0] + t[1]));
    })();
  let w = (() => {
    if (e && e.b && e.b.length === k.length && e.b.flat().slice().sort().join() === n.slice().sort().join())
      return e.b.map((e) => e.slice());
    const t = k.map(() => []),
      a = n.slice();
    for (let e = a.length - 1; e > 0; e--) {
      const t = Math.floor(S() * (e + 1));
      [a[e], a[t]] = [a[t], a[e]];
    }
    return (a.forEach((e, a) => t[a % k.length].push(e)), t);
  })();
  const R = new Set(e && e.bo ? e.bo : []),
    C = (e) => w[e].filter((e) => !i.some((t) => t[0] === e)),
    O = () => {
      const e = $("#dmbx");
      if (!e) return;
      let t = "";
      const a = "#c8955a";
      (k.forEach(([e, s], n) => {
        const o = C(n);
        if (!o.length) return;
        const i = [A(e, s, M), A(e + x, s, M), A(e + x, s + x, M), A(e, s + x, M)],
          l = [A(e, s + x), A(e + x, s + x), A(e + x, s + x, M), A(e, s + x, M)],
          c = [A(e + x, s), A(e + x, s + x), A(e + x, s + x, M), A(e + x, s, M)],
          d = (e, t, s) =>
            `<polygon points="${h(e)}" fill="${t}" stroke="${s || dSh(a, 0.6)}" stroke-width=".8" stroke-linejoin="round"/>`;
        if (((t += `<g class="dmbx${R.has(n) ? " op" : ""}" data-bx="${n}">`), R.has(n))) {
          const n = (e, t, a, s) => [e, t, [t[0] + a, t[1] + s], [e[0] + a, e[1] + s]];
          t +=
            d(n(i[0], i[1], -7, -11), dSh(a, 1.05)) +
            d(n(i[1], i[2], 9, -9), dSh(a, 0.95)) +
            d(l, a) +
            d(c, dSh(a, 0.82)) +
            d(i, "#5a3d22");
          const f = A(e + x / 2, s + x / 2, M),
            u = o.slice(-4);
          (u.forEach((e, a) => {
            const s = a === u.length - 1,
              n = s ? 30 : 22,
              o = f[1] + 6 - 9 * a;
            t += `<g class="${s ? "dmtop" + (r === e ? " sel" : "") : "dmsk"}" data-id="${e}">${y(e, f[0], o, "b", "", n).replace('class="dmp ', 'class="dmp dmq ')}</g>`;
          }),
            (t += d(n(i[3], i[0], -9, -3), dSh(a, 1.1)) + d(n(i[2], i[3], -2, 10), dSh(a, 1.15))));
        } else {
          t += d(l, a) + d(c, dSh(a, 0.82)) + d(i, dSh(a, 1.12));
          const n = A(e + x / 2, s, M),
            o = A(e + x / 2, s + x, M),
            r = A(e + x / 2, s + x, 0.5);
          t += `<line x1="${n[0].toFixed(1)}" y1="${n[1].toFixed(1)}" x2="${o[0].toFixed(1)}" y2="${o[1].toFixed(1)}" stroke="#e8d2a2" stroke-width="3"/><line x1="${o[0].toFixed(1)}" y1="${o[1].toFixed(1)}" x2="${r[0].toFixed(1)}" y2="${r[1].toFixed(1)}" stroke="#e8d2a2" stroke-width="3"/>`;
        }
        t += "</g>";
      }),
        (e.innerHTML = t));
    },
    I = () => {
      const e = E(),
        t = w.map((e, t) => {
          const a = C(t);
          return R.has(t) && a.length ? a[a.length - 1] : null;
        });
      r && !t.includes(r) && (r = null);
      const a = $("#dmn");
      (a && (a.textContent = e.length ? " · " + e.length + " objet" + (e.length > 1 ? "s" : "") : ""), O());
    };
  frame(
    `<div class="dm"><p class="lit">${t ? "Fêtes · " : s.h + " · "}${s.n}<b id="dmn"></b></p><div class="dmw"><svg id="dmr" viewBox="0 0 ${o.vw} ${o.vh}" role="img" aria-label="${s.n}">${o.s}<g id="dmst"></g><g id="dmbx"></g><g id="dml"></g><g id="dmh"></g></svg></div></div>`,
    1,
  );
  const N = $("#dmr"),
    P = (e) => {
      const t = N.getScreenCTM();
      if (!t) return null;
      const a = new DOMPoint(e.clientX, e.clientY).matrixTransform(t.inverse());
      return [a.x, a.y];
    },
    U = () => $("#dmr") === N && playing,
    q = (e, t) => {
      const a = b(t);
      if (a && a.inside) {
        const t = a.c,
          s = new Set(p(t.id).map((e) => e[7])),
          n = [...Array(t.cap).keys()].find((e) => !s.has(e));
        if (void 0 === n) {
          const e = f.find((e) => e.S === t.S && e !== t && "door" === e.t && "door" === t.t);
          return (
            msg(e && !u.has(e.id) ? "Plus de place de ce côté : ouvre l’autre porte." : "Plus de place ici."),
            sfx(260, 0.2),
            !1
          );
        }
        const o = t.g.slots[n];
        return (
          i.push([e, +o[0].toFixed(1), +o[1].toFixed(1), t.g.an, 1, t.k, t.id, n]),
          (r = null),
          msg(""),
          sfx(520, 0.2),
          vib(8),
          d.delete(e),
          v(),
          I(),
          i.forEach((e) => (e[4] = 0)),
          sv(),
          E().length ||
            setTimeout(() => {
              U() && D();
            }, 350),
          !0
        );
      }
      if (a && a.closed && DIT[e][2].includes(a.c.k))
        return (
          msg(
            "door" === a.c.t
              ? "C’est fermé : touche la porte pour l’ouvrir."
              : "Touche le tiroir pour l’ouvrir.",
          ),
          !1
        );
      const s = [...o.zs].reverse().find((e) => dIn(t, e.hull));
      if (!s) return (msg("Pose-le dans la pièce."), !1);
      const n = dClamp(t, s.top);
      return (
        i.push([e, +n[0].toFixed(1), +n[1].toFixed(1), s.a, 1, s.k]),
        (r = null),
        msg(""),
        sfx(520, 0.2),
        vib(8),
        d.delete(e),
        v(),
        I(),
        i.forEach((e) => (e[4] = 0)),
        sv(),
        E().length ||
          setTimeout(() => {
            U() && D();
          }, 350),
        !0
      );
    },
    D = () => {
      if (!E().length && !c) {
        if (
          ((d = new Set(
            i
              .filter(
                (e) =>
                  !((e) => {
                    let t = e[5];
                    if (!t) {
                      const a = [...o.zs].reverse().find((t) => dIn([e[1], e[2]], t.hull));
                      t = a && a.k;
                    }
                    return !t || DIT[e[0]][2].includes(t);
                  })(e),
              )
              .map((e) => e[0]),
          )),
          i.forEach((e) => {
            d.has(e[0]) && e[6] && u.add(e[6]);
          }),
          v(),
          I(),
          d.size)
        )
          return (
            msg(
              d.size > 1
                ? d.size + " objets ne sont pas au bon endroit : touche-les pour les replacer."
                : "Un objet n’est pas au bon endroit : touche-le pour le replacer.",
            ),
            vib(14),
            void sfx(260, 0.25)
          );
        ((c = !0),
          confetti($("#dmr")),
          setTimeout(() => {
            U() && win();
          }, 900));
      }
    };
  let H = null;
  const G = () => {
      const e = $("#dmg");
      e && e.remove();
    },
    F = document.createElement("div"),
    B = (e) => {
      H &&
        (!H.mv && Math.hypot(e.clientX - H.x, e.clientY - H.y) > 8 && ((H.mv = !0), (r = H.id), O()),
        H.mv &&
          ((e, t, a) => {
            let s = $("#dmg");
            (s ||
              ((s = document.createElement("div")),
              (s.id = "dmg"),
              (s.className = "dmg"),
              document.body.appendChild(s)),
              (s.innerHTML = dSpr(e, 40)),
              (s.style.left = t + "px"),
              (s.style.top = a + "px"));
          })(H.id, e.clientX, e.clientY));
    },
    z = (e) => {
      if (
        (document.removeEventListener("pointermove", B),
        document.removeEventListener("pointerup", z),
        document.removeEventListener("pointercancel", V),
        !H)
      )
        return;
      const t = H;
      if (((H = null), G(), t.mv)) {
        const a = N.getBoundingClientRect();
        if (e.clientX >= a.left && e.clientX <= a.right && e.clientY >= a.top && e.clientY <= a.bottom) {
          const a = P(e);
          a && !q(t.id, a) && ((r = null), I());
        } else ((r = null), I());
      } else ((r = r === t.id ? null : t.id), I(), msg(r ? "Touche l’endroit où le ranger." : ""));
    },
    V = () => {
      (document.removeEventListener("pointermove", B),
        document.removeEventListener("pointerup", z),
        document.removeEventListener("pointercancel", V),
        (H = null),
        G());
    };
  (F.addEventListener("pointerdown", (e) => {
    const t = e.target.closest(".dmi");
    t &&
      ((H = { id: t.dataset.id, x: e.clientX, y: e.clientY, mv: !1 }),
      document.addEventListener("pointermove", B),
      document.addEventListener("pointerup", z),
      document.addEventListener("pointercancel", V));
  }),
    N.addEventListener("pointerdown", (e) => {
      const t = e.target.closest && e.target.closest(".dmp.bad");
      if (!t || H) return;
      e.preventDefault();
      const a = t.dataset.id,
        s = i.findIndex((e) => e[0] === a);
      s < 0 ||
        (i.splice(s, 1),
        w.forEach((e, t) => {
          const s = e.indexOf(a);
          s >= 0 && (e.splice(s, 1), e.push(a), R.add(t));
        }),
        d.delete(a),
        (r = null),
        v(),
        I(),
        sv(),
        (H = { id: a, x: e.clientX, y: e.clientY, mv: !1 }),
        document.addEventListener("pointermove", B),
        document.addEventListener("pointerup", z),
        document.addEventListener("pointercancel", V));
    }),
    N.addEventListener("pointerdown", (e) => {
      const t = e.target.closest && e.target.closest(".dmtop");
      t &&
        !H &&
        (e.preventDefault(),
        ((e, t) => {
          ((H = { id: e, x: t.clientX, y: t.clientY, mv: !1 }),
            document.addEventListener("pointermove", B),
            document.addEventListener("pointerup", z),
            document.addEventListener("pointercancel", V));
        })(t.dataset.id, e));
    }),
    N.addEventListener("pointerup", (e) => {
      if (H) return;
      const t = e.target.closest && e.target.closest(".dmbx:not(.op)");
      if (t)
        return (
          R.add(+t.dataset.bx),
          sfx(300, 0.2),
          setTimeout(() => sfx(420, 0.18), 90),
          vib(8),
          I(),
          sv(),
          void msg("Prends l’objet du dessus et range-le dans la pièce.")
        );
      const a = P(e);
      if (!a) return;
      const s = b(a);
      return s && s.closed
        ? (g(s.c, !0),
          void msg(r ? "" : "door" === s.c.t ? "La porte est ouverte." : "Le tiroir est ouvert."))
        : s && s.panel && !r
          ? (g(s.c, !1), void msg(""))
          : void (r && q(r, a));
    }),
    (act.hint = () => {
      const e = r || E()[0] || [...d][0];
      if (!e || !spend(1)) return;
      const t = $("#dmh");
      t &&
        ((t.innerHTML =
          o.zs
            .filter(
              (t) =>
                (DIT[e][2].includes(t.k) && "wall" !== t.k && "floor" !== t.k) ||
                (DIT[e][2].includes(t.k) && ("wall" === t.k || "floor" === t.k)),
            )
            .map(
              (e) =>
                `<polygon class="dmhz" points="${e.hull.map((e) => e[0].toFixed(1) + "," + e[1].toFixed(1)).join(" ")}"/>`,
            )
            .join("") +
          f
            .filter((t) => DIT[e][2].includes(t.k))
            .map((e) => `<polygon class="dmhz" points="${h(u.has(e.id) ? e.g.zone : e.g.front)}"/>`)
            .join("")),
        msg(`Indice : « ${DIT[e][0]} » se range sur la zone qui brille.`),
        clearTimeout(l),
        (l = setTimeout(() => {
          const e = $("#dmh");
          e && (e.innerHTML = "");
        }, 3200)));
    }),
    v(),
    I(),
    e || msg("Touche une boîte pour l’ouvrir."),
    e || t || !dStory[lv] || st.get(ckey("demenage") + ":" + lv, !1)
      ? e ||
        E().length ||
        setTimeout(() => {
          U() && win();
        }, 300)
      : dmOv(`<small>${dStory[lv][0]}</small><p class="sfq">${dStory[lv][1]}</p>`, "Ouvrir les boîtes"),
    e &&
      !E().length &&
      setTimeout(() => {
        U() && D();
      }, 400));
}
const SCRD =
  "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";
const SCP = {
  A: 1,
  E: 1,
  I: 1,
  L: 1,
  N: 1,
  O: 1,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  D: 2,
  G: 2,
  M: 2,
  B: 3,
  C: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  J: 8,
  Q: 8,
  K: 10,
  W: 10,
  X: 10,
  Y: 10,
  Z: 10,
  "?": 0,
};
const SCQ = {
  A: 9,
  B: 2,
  C: 2,
  D: 3,
  E: 15,
  F: 2,
  G: 2,
  H: 2,
  I: 8,
  J: 1,
  K: 1,
  L: 5,
  M: 3,
  N: 6,
  O: 6,
  P: 2,
  Q: 1,
  R: 6,
  S: 6,
  T: 6,
  U: 6,
  V: 2,
  W: 1,
  X: 1,
  Y: 1,
  Z: 1,
  "?": 2,
};
const SCB = (() => {
  const e = Array(225).fill("."),
    t = (t, a) =>
      t.forEach(([t, s]) => {
        e[15 * t + s] = a;
      }),
    a = [],
    s = [[7, 7]];
  return (
    [0, 7, 14].forEach((e) =>
      [0, 7, 14].forEach((t) => {
        (7 === e && 7 === t) || a.push([e, t]);
      }),
    ),
    [1, 2, 3, 4, 10, 11, 12, 13].forEach((e) => {
      s.push([e, e], [e, 14 - e]);
    }),
    t(
      [
        [0, 3],
        [0, 11],
        [2, 6],
        [2, 8],
        [3, 0],
        [3, 7],
        [3, 14],
        [6, 2],
        [6, 6],
        [6, 8],
        [6, 12],
        [7, 3],
        [7, 11],
        [8, 2],
        [8, 6],
        [8, 8],
        [8, 12],
        [11, 0],
        [11, 7],
        [11, 14],
        [12, 6],
        [12, 8],
        [14, 3],
        [14, 11],
      ],
      "l",
    ),
    t(
      [
        [1, 5],
        [1, 9],
        [5, 1],
        [5, 5],
        [5, 9],
        [5, 13],
        [9, 1],
        [9, 5],
        [9, 9],
        [9, 13],
        [13, 5],
        [13, 9],
      ],
      "L",
    ),
    t(s, "m"),
    t(a, "M"),
    e
  );
})();
const scrShuf = (e) => {
  for (let t = e.length - 1; t > 0; t--) {
    const a = Math.floor(Math.random() * (t + 1));
    [e[t], e[a]] = [e[a], e[t]];
  }
  return e;
};
const scrVal = (e) => [...e].reduce((e, t) => e + (SCP[t] || 0), 0);
const SCQ11 = {
  A: 6,
  B: 1,
  C: 1,
  D: 2,
  E: 10,
  F: 1,
  G: 1,
  H: 1,
  I: 5,
  J: 1,
  K: 1,
  L: 3,
  M: 2,
  N: 4,
  O: 4,
  P: 1,
  Q: 1,
  R: 4,
  S: 4,
  T: 4,
  U: 4,
  V: 1,
  W: 1,
  X: 1,
  Y: 1,
  Z: 1,
  "?": 1,
};
const SCB11 = (() => {
  const e = Array(121).fill("."),
    t = (a, v) =>
      a.forEach(([r, c]) => {
        [
          [r, c],
          [r, 10 - c],
          [10 - r, c],
          [10 - r, 10 - c],
        ].forEach(([y, x]) => {
          e[11 * y + x] = v;
        });
      });
  t(
    [
      [0, 0],
      [2, 2],
      [3, 3],
    ],
    "L",
  );
  t(
    [
      [0, 2],
      [2, 0],
    ],
    "M",
  );
  t(
    [
      [1, 1],
      [1, 5],
      [5, 1],
    ],
    "m",
  );
  t(
    [
      [2, 4],
      [4, 2],
    ],
    "l",
  );
  return e;
})();
const scN = (b) => (b.length === 121 ? 11 : 15);
const scBM = (b) => (b.length === 121 ? SCB11 : SCB);
function scrRun(e, t, a, s) {
  const n = (a) => t.has(a) || "." !== e[a],
    N = scN(e);
  let o = a,
    i = a;
  if (1 === s) {
    for (; o % N > 0 && n(o - 1);) o--;
    for (; i % N < N - 1 && n(i + 1);) i++;
  } else {
    for (; o - N >= 0 && n(o - N);) o -= N;
    for (; i + N < N * N && n(i + N);) i += N;
  }
  const r = [];
  for (let e = o; e <= i; e += s) r.push(e);
  return r;
}
function scrEval(e, t, a) {
  const N = scN(e),
    BM = scBM(e),
    C = (e.length - 1) / 2,
    s = { e: "", words: [], bad: [], total: 0, ok: !1 };
  if (!t.length) return ((s.e = "Pose au moins une lettre."), s);
  const n = new Map();
  for (const [a, o, i] of t) {
    if (!(a >= 0 && a < e.length) || "." !== e[a] || n.has(a) || !/^[A-Z]$/.test(o))
      return ((s.e = "Cette case est déjà occupée."), s);
    n.set(a, [o, !!i]);
  }
  const o = t.map((e) => (e[0] / N) | 0),
    i = t.map((e) => e[0] % N),
    r = o.every((e) => e === o[0]),
    l = i.every((e) => e === i[0]);
  if (!r && !l) return ((s.e = "Place tes lettres sur une seule ligne, ou une seule colonne."), s);
  const c = (t) => n.has(t) || "." !== e[t],
    d = !/[A-Za-z]/.test(e);
  if (t.length > 1) {
    const e = r ? 1 : N,
      a = t.map((e) => e[0]).sort((e, t) => e - t);
    for (let t = a[0]; t <= a[a.length - 1]; t += e)
      if (!c(t)) return ((s.e = "Les lettres doivent se suivre, sans trou."), s);
  }
  const f = [],
    u = new Set(),
    h = (t, a) => {
      const s = scrRun(e, n, t, a);
      if (s.length < 2) return;
      const o = s[0] + ":" + a;
      u.has(o) || (u.add(o), f.push({ c: s, d: a }));
    };
  if (t.length > 1) {
    const e = r ? 1 : N;
    (h(t[0][0], e), t.forEach((t) => h(t[0], 1 === e ? N : 1)));
  } else (h(t[0][0], 1), h(t[0][0], N));
  if (d) {
    if (!n.has(C)) return ((s.e = "Le premier mot passe par l’étoile, au centre."), s);
    if (t.length < 2) return ((s.e = "Le premier mot compte au moins deux lettres."), s);
  } else if (!f.some((e) => e.c.some((e) => !n.has(e))))
    return ((s.e = "Ton mot doit toucher une lettre déjà posée."), s);
  let p = 0;
  for (const t of f) {
    let o = 0,
      i = 1,
      r = "";
    for (const a of t.c) {
      const t = n.get(a),
        s = t ? t[0] : e[a].toUpperCase(),
        l = (t ? t[1] : e[a] !== e[a].toUpperCase()) ? 0 : SCP[s] || 0;
      if (((r += s), t)) {
        const e = BM[a];
        ((o += "l" === e ? 2 * l : "L" === e ? 3 * l : l), "m" === e ? (i *= 2) : "M" === e && (i *= 3));
      } else o += l;
    }
    ((p += o * i), s.words.push({ w: r, p: o * i }), a && !a(r) && s.bad.push(r));
  }
  return (
    7 === t.length && (p += 50),
    s.words.sort((e, t) => t.w.length - e.w.length),
    (s.total = p),
    (s.ok = !s.bad.length),
    s
  );
}
function scrNew(e, t, a) {
  const s = [];
  (Object.keys(SCQ11).forEach((e) => {
    for (let t = 0; t < SCQ11[e]; t++) s.push(e);
  }),
    scrShuf(s));
  const n = [e, t].sort(),
    o = n.indexOf(e),
    i = [s.splice(0, 7).join(""), s.splice(0, 7).join("")];
  return {
    v: 1,
    id: Math.random().toString(36).slice(2, 10),
    p: n,
    cr: o,
    n: 0,
    t: o,
    b: ".".repeat(121),
    g: s.join(""),
    r: i,
    s: [0, 0],
    ps: 0,
    h: [],
    lm: [],
    e: 0,
    w: -1,
    rs: -1,
    pv: a || null,
    at: Date.now(),
  };
}
function scrClean(e) {
  if (
    !e ||
    "object" != typeof e ||
    !Array.isArray(e.p) ||
    2 !== e.p.length ||
    !e.p.every((e) => "string" == typeof e && SOK.test(e))
  )
    return null;
  const t = (e, t) => "string" == typeof e && t.test(e),
    a = (e, t) => Array.isArray(e) && 2 === e.length && e.every(t);
  if (!(
    t(e.id, /^[a-z0-9]{1,16}$/) &&
    t(e.b, /^(?:[.A-Za-z]{121}|[.A-Za-z]{225})$/) &&
    t(e.g, /^[A-Z?]{0,110}$/) &&
    a(e.r, (e) => t(e, /^[A-Z?]{0,7}$/)) &&
    a(e.s, (e) => Number.isFinite(e) && Math.abs(e) < 5e3)
  ))
    return null;
  const s = (e, t, a) => Math.max(t, Math.min(a, Math.floor(+e) || 0)),
    n =
      e.pv && "object" == typeof e.pv && t(e.pv.id, /^[a-z0-9]{1,16}$/)
        ? { id: e.pv.id, w: s(e.pv.w, -1, 1), rs: s(e.pv.rs, -1, 1), n: s(e.pv.n, 0, 9999) }
        : null;
  return {
    v: 1,
    id: e.id,
    p: e.p.slice(),
    cr: s(e.cr, 0, 1),
    n: s(e.n, 0, 9999),
    t: s(e.t, 0, 1),
    b: e.b,
    g: e.g,
    r: e.r.slice(),
    s: e.s.map(Math.round),
    ps: s(e.ps, 0, 9),
    h: (Array.isArray(e.h) ? e.h : []).filter((e) => t(e, /^[01]\|[A-Z~\-x]{1,15}\|-?\d{1,4}$/)).slice(-30),
    lm: (Array.isArray(e.lm) ? e.lm : []).filter((e) => Number.isInteger(e) && e >= 0 && e < 225).slice(0, 7),
    e: e.e ? 1 : 0,
    w: s(e.w, -1, 1),
    rs: s(e.rs, -1, 1),
    pv: n,
    at: +e.at || 0,
  };
}
function scrFinish(e, t) {
  if (t >= 0) {
    const a = 1 - t,
      s = scrVal(e.r[a]);
    ((e.s[t] += s), (e.s[a] -= s));
  } else ((e.s[0] -= scrVal(e.r[0])), (e.s[1] -= scrVal(e.r[1])));
  ((e.e = 1), (e.w = e.s[0] > e.s[1] ? 0 : e.s[1] > e.s[0] ? 1 : -1));
}
function scrPlay(e, t, a, s) {
  const n = JSON.parse(JSON.stringify(e)),
    o = n.b.split("");
  (a.forEach(([e, t, a]) => {
    o[e] = a ? t.toLowerCase() : t;
  }),
    (n.b = o.join("")));
  const i = n.r[t].split("");
  a.forEach(([e, t, a]) => {
    const s = i.indexOf(a ? "?" : t);
    s >= 0 && i.splice(s, 1);
  });
  const r = Math.min(7 - i.length, n.g.length);
  return (
    (n.r[t] = i.concat(n.g.slice(0, r).split("")).join("")),
    (n.g = n.g.slice(r)),
    (n.s[t] += s.total),
    (n.ps = 0),
    n.n++,
    (n.lm = a.map((e) => e[0])),
    (n.h = n.h.concat(t + "|" + s.words[0].w + "|" + s.total).slice(-30)),
    (n.t = 1 - t),
    n.r[t] || n.g || scrFinish(n, t),
    n
  );
}
function scrPass(e, t) {
  const a = JSON.parse(JSON.stringify(e));
  return (
    a.n++,
    a.ps++,
    (a.lm = []),
    (a.h = a.h.concat(t + "|-|0").slice(-30)),
    (a.t = 1 - t),
    a.ps >= 4 && scrFinish(a, -1),
    a
  );
}
function scrSwap(e, t, a) {
  if (e.g.length < 7 || !a.length) return null;
  const s = JSON.parse(JSON.stringify(e)),
    n = s.r[t].split(""),
    o = [];
  if (
    ([...new Set(a)]
      .sort((e, t) => t - e)
      .forEach((e) => {
        e >= 0 && e < n.length && o.push(n.splice(e, 1)[0]);
      }),
    !o.length)
  )
    return null;
  const i = s.g.split("");
  scrShuf(i);
  const r = i.splice(0, o.length);
  return (
    i.push(...o),
    scrShuf(i),
    (s.r[t] = n.concat(r).join("")),
    (s.g = i.join("")),
    s.n++,
    s.ps++,
    (s.lm = []),
    (s.h = s.h.concat(t + "|~|0").slice(-30)),
    (s.t = 1 - t),
    s.ps >= 4 && scrFinish(s, -1),
    s
  );
}
function scrResign(e, t) {
  const a = JSON.parse(JSON.stringify(e));
  return (
    a.n++,
    (a.lm = []),
    (a.h = a.h.concat(t + "|x|0").slice(-30)),
    (a.e = 1),
    (a.rs = t),
    (a.w = 1 - t),
    a
  );
}
const scrReward = (e, t) => (e < 0 ? 6 : e === t ? 10 : 2);
let scrDic = null;
let scrDicP = null;
function scrLoad() {
  return (
    scrDicP ||
    (scrDicP = (async () => {
      const e = atob(SCRD),
        t = new Uint8Array(e.length);
      for (let a = 0; a < e.length; a++) t[a] = e.charCodeAt(a);
      const a = await new Response(
          new Blob([t]).stream().pipeThrough(new DecompressionStream("gzip")),
        ).text(),
        s = new Set();
      let n = "";
      for (const e of a.split("\n")) e && ((n = n.slice(0, e.charCodeAt(0) - 48) + e.slice(1)), s.add(n));
      return (scrDic = s);
    })().catch(() => ((scrDic = !1), !1)))
  );
}
const scrHas = (e) => !scrDic || scrDic.has(e);
const SC = {
  scr: "",
  fid: "",
  subs: {},
  G: {},
  got: {},
  err: {},
  ec: {},
  slow: 0,
  db: null,
  pend: [],
  sel: -1,
  mode: "",
  swp: [],
  zoom: !1,
  jk: null,
  cf: "",
  cft: 0,
  busy: !1,
  m: "",
  rkk: "",
  ord: [],
  pay: "",
};
const scrDb = () =>
  SC.db ||
  (SC.db = (async () => {
    const e = window.claude;
    if (!e || !e.use) return null;
    try {
      return await e.use("db");
    } catch (e) {
      return null;
    }
  })());
const scrGid = (e) => [SO.uid, e].sort().join("_");
const scrMe = () =>
  "ia" === SC.fid ? "me" : "loc" === SC.fid ? (SC.G.loc ? SC.G.loc.p[SC.G.loc.t] : "j1") : SO.uid;
const scrNm = (e) =>
  "ia" === e
    ? "IA"
    : "loc" === e
      ? "Joueur " + (SC.G.loc ? 2 - SC.G.loc.t : 2)
      : (SO.P[e] && SO.P[e].name) || "ton ami";
const scrGain = (e) => {
  ((fl = Math.min(1e8, fl + e)), st.set("fl", fl), chip());
};
const scrSeen = (e, t) => {
  const a = Object.assign({}, st.get("scr:seen", {}));
  ((a[e] = [t.id, t.n]), st.set("scr:seen", a));
};
function scrMark(e, t) {
  const a = st.get("soc:me", null);
  if (!a) return;
  ((a.sg = Object.assign({}, a.sg)), (a.sg[e] = [t.id, t.n, Date.now()]));
  const s = Object.keys(a.sg);
  (s.length > 40 &&
    s
      .sort((e, t) => a.sg[e][2] - a.sg[t][2])
      .slice(0, s.length - 40)
      .forEach((e) => delete a.sg[e]),
    st.set("soc:me", a),
    socLater());
}
function scrPaid(e, t) {
  const a = t.p.indexOf(SO.uid);
  if (a < 0) return;
  const s = Object.assign({}, st.get("scr:paid", {})),
    n = scrGid(e);
  let o = 0,
    i = !1,
    r = null;
  const l = (e, t, l, c) => {
    const d = n + ":" + e;
    if (s[d]) return;
    if (((s[d] = 1), (i = !0), l >= 0 && c < 6)) return;
    const f = scrReward(t, a);
    ((o += f), (r = f));
  };
  if ((t.pv && l(t.pv.id, t.pv.w, t.pv.rs, t.pv.n), t.e && l(t.id, t.w, t.rs, t.n), !i)) return;
  const c = Object.keys(s);
  (c.length > 60 && c.slice(0, c.length - 60).forEach((e) => delete s[e]),
    st.set("scr:paid", s),
    o > 0 && (scrGain(o), (SC.pay = "+" + o + " 🫧")));
}
const scrWhy = (e) => {
  const t = String((e && (e.code || e.message)) || e || "").toLowerCase();
  return e && 0 !== e
    ? /permission-denied/.test(t)
      ? "Firebase refuse l’accès aux parties : il manque la règle « sc » dans les règles de sécurité Firestore."
      : /not_granted|not_writer|unauth/.test(t)
        ? "Cette page doit être partagée avec toi avec un droit d’interaction."
        : /invalid/.test(t)
          ? "Ce compte n’a pas le droit d’écrire ici : la page doit être partagée avec un droit d’interaction."
          : /unavail|network|offline|deadline|timeout/.test(t)
            ? "Pas de connexion au serveur."
            : "Erreur : " + t.slice(0, 60)
    : "La base de données n’est pas disponible ici.";
};
async function scrWatch(e) {
  if (SC.subs[e] || !SO.uid || Object.keys(SC.subs).length >= 24) return;
  const t = (SC.subs[e] = { ref: null, un: null, t: 0 });
  try {
    const a = await scrDb();
    if (!a) throw 0;
    const s = (t.ref = a.collection("sc").doc(scrGid(e)));
    ((t.t = setTimeout(() => {
      SC.got[e] || ((SC.slow = 1), scrRefresh());
    }, 1e4)),
      (t.un = s.onSnapshot(
        (a) => {
          if ((a.metadata || {}).fromCache && !a.exists) return;
          clearTimeout(t.t);
          let s = null;
          if (a.exists)
            try {
              s = scrClean(a.data());
            } catch (e) {}
          (s && (s.p.indexOf(SO.uid) < 0 || scrGid(e) !== s.p.slice().sort().join("_")) && (s = null),
            s && SC.G[e] && SC.G[e].id === s.id && SC.G[e].n !== s.n && (SC.m = ""),
            (SC.G[e] = s),
            (SC.got[e] = !0),
            (SC.err[e] = 0),
            s && scrPaid(e, s),
            scrRefresh(),
            scrTileUp());
        },
        (a) => {
          (clearTimeout(t.t), delete SC.subs[e], (SC.err[e] = 1), (SC.ec[e] = scrWhy(a)), scrRefresh());
        },
      )));
  } catch (t) {
    (delete SC.subs[e], (SC.err[e] = 1), (SC.ec[e] = scrWhy(t)), scrRefresh());
  }
}
function scrSync() {
  if (!SO.uid || !SO.got) return;
  const e = st.get("soc:me", null),
    t = new Set();
  (e && e.sg && Object.keys(e.sg).forEach((e) => t.add(e)),
    Object.entries(SO.P).forEach(([e, a]) => {
      e !== SO.uid && a.sg && a.sg[SO.uid] && t.add(e);
    }),
    [...t].slice(0, 24).forEach(scrWatch));
}
function scrPend() {
  if (!SO.uid) return 0;
  const e = st.get("scr:seen", {});
  let t = 0;
  return (
    Object.entries(SO.P).forEach(([a, s]) => {
      if (a === SO.uid) return;
      const n = SC.G[a],
        o = s.sg && s.sg[SO.uid];
      if (n) t += n.e || n.t !== n.p.indexOf(SO.uid) ? 0 : 1;
      else if (o && !SC.got[a]) {
        const s = e[a];
        (!s || s[0] !== o[0] || s[1] < o[1]) && t++;
      }
    }),
    t
  );
}
const scrTile = () => {
  const e = scrPend();
  return e ? e + (e > 1 ? " parties t’attendent" : " partie t’attend") : "";
};
function scrTileUp() {
  const e = $(".tile.pt-scrabble small");
  e && (e.textContent = scrTile());
}
function scrOnProfiles() {
  (cvSync(), scrSync(), scrTileUp(), scrRefresh());
}
const scrRefresh = () => {
  if ($("#scg")) {
    if ("ia" === SC.fid) return;
    const f = SC.fid,
      g = SC.G[f],
      k = JSON.stringify([
        g && g.id,
        g && g.n,
        g && g.e,
        SC.err[f],
        SC.got[f],
        !!SC.subs[f],
        SC.slow,
        SC.busy,
        scrNm(f),
        SC.m,
      ]);
    if (k === SC.rfk) return;
    ((SC.rfk = k), scrDraw());
  } else $("#scrh") && scrHub2();
};
function scrStat(e) {
  const t = SC.G[e];
  if (SC.err[e]) return { k: "err", t: "Partie injoignable pour l’instant" };
  if (!t) return SC.got[e] || !SC.subs[e] ? { k: "new", t: "Pas encore de partie" } : { k: "load", t: "…" };
  const a = t.p.indexOf(SO.uid),
    s = t.s[a] + " – " + t.s[1 - a];
  return t.e
    ? { k: "end", t: (t.w < 0 ? "Égalité" : t.w === a ? "Gagné" : "Perdu") + " · " + s }
    : t.t === a
      ? { k: "me", t: "À toi de jouer · " + s }
      : { k: "them", t: "Au tour de " + scrNm(e) + " · " + s };
}
const scrBtn = (e) => {
  const t = scrStat(e).k;
  return "me" === t
    ? "Jouer"
    : "them" === t
      ? "Voir"
      : "end" === t
        ? "Revoir"
        : "err" === t
          ? "Ouvrir"
          : "Commencer";
};
const scrProf = (e) => {
  const t = scrStat(e);
  return `<div class="sy-h">Motuiles</div><p class="note" style="margin:0 0 10px">${esc("new" === t.k ? "Une partie à deux, chacun son tour, quand vous voulez." : t.t)}</p><button class="btn${"me" === t.k ? "" : " alt"}" data-a="scrFrom" data-v="${esc(e)}">${"new" === t.k ? "Lancer une partie" : "me" === t.k ? "C’est ton tour !" : "Ouvrir la partie"}</button>`;
};
