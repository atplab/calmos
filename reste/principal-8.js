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
