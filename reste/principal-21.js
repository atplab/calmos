const HR = 576e5;
const MAXF = 20;
const fv = (e) => Math.max(1, Math.floor((e.p || 0) / 100));
const FISH = [
  { id: "rouge", n: "Poisson rouge", p: 10, sh: "zv_rouge", b: "#ff7a4d", f: "#ffb089", sz: 1 },
  { id: "neon", n: "Néon bleu", p: 60, sh: "zv_neon", b: "#4cc3ff", f: "#a8e6ff", sc: "#ff4d6d", sz: 0.84 },
  {
    id: "danio",
    n: "Danio zébré",
    p: 90,
    sh: "zv_danio",
    b: "#e4eaf5",
    f: "#a9b9db",
    sc: "#4c68d8",
    sz: 0.9,
  },
  {
    id: "cardinal",
    n: "Tétra cardinal",
    p: 110,
    sh: "zv_cardinal",
    b: "#ff4560",
    f: "#ffb0bb",
    sc: "#3fa9ff",
    sz: 0.86,
  },
  {
    id: "platy",
    n: "Platy corail",
    p: 140,
    sh: "zv_platy",
    b: "#ff6f8f",
    f: "#ffc2d0",
    sp: "#fff0f4",
    sz: 0.95,
  },
  { id: "molly", n: "Molly noir", p: 160, sh: "zv_molly", b: "#34365c", f: "#7377b3", sp: "#9a9fe0", sz: 1 },
  { id: "betta", n: "Combattant lilas", p: 180, sh: "zv_betta", b: "#8b5cf6", f: "#e48bf5", sz: 1.06 },
  {
    id: "gourami",
    n: "Gourami perlé",
    p: 200,
    sh: "zv_gourami",
    b: "#4fd1b8",
    f: "#a6f0e0",
    sp: "#e9fffa",
    sz: 1,
  },
  {
    id: "globe",
    n: "Poisson-globe",
    p: 220,
    sh: "zv_globe",
    b: "#f2c94c",
    f: "#fff0b0",
    sc: "#c9972a",
    sp: "#e0a93a",
    sz: 1,
  },
  {
    id: "ange",
    n: "Poisson-ange",
    p: 240,
    sh: "zv_ange",
    b: "#f3e2a0",
    f: "#d8b96b",
    st: "v",
    sc: "#3b3f6b",
    sz: 1,
  },
  {
    id: "clown",
    n: "Poisson-clown",
    p: 310,
    sh: "zv_clown",
    b: "#ff8a2b",
    f: "#ffb36b",
    st: "v",
    sc: "#ffffff",
    sz: 1,
  },
  { id: "hippo", n: "Hippocampe", p: 350, sh: "zv_hippo", b: "#ff9f5a", f: "#ffd9a8", sc: "#d9692a", sz: 1 },
  {
    id: "discus",
    n: "Discus turquoise",
    p: 400,
    sh: "zv_discus",
    b: "#2fd1c5",
    f: "#8bf0e8",
    st: "v",
    sc: "#14867f",
    sz: 1.1,
  },
  {
    id: "raie",
    n: "Raie manta",
    p: 500,
    sh: "zv_manta",
    b: "#4d5aa8",
    f: "#e9eeff",
    sc: "#2c3573",
    sp: "#8f9be0",
    sz: 2.4,
  },
  {
    id: "lune",
    n: "Poisson-lune doré",
    p: 600,
    sh: "zv_lune",
    b: "#ffd34d",
    f: "#ffe9a3",
    sp: "#fff6d0",
    sz: 1.25,
  },
  {
    id: "tortue",
    n: "Tortue de mer",
    p: 650,
    sh: "zv_tortue",
    b: "#4fae6a",
    f: "#ecdca2",
    sc: "#8bcf86",
    sz: 1.3,
  },
  {
    id: "hockey",
    n: "Poisson hockeyeur",
    p: 767,
    sh: "zv_hockey",
    b: "#7ed3ff",
    f: "#e9f7ff",
    hk: 1,
    sz: 1.12,
  },
  {
    id: "gardien",
    n: "Poisson gardien de but",
    p: 470,
    sh: "zv_gardien",
    b: "#ffcf5c",
    f: "#fff4d6",
    gk: 1,
    sz: 1.16,
  },
  { id: "meduse", n: "Méduse", p: 850, sh: "zv_meduse", b: "#c9a3ff", f: "#f2e3ff", sc: "#ff9ad5", sz: 1.15 },
  {
    id: "royal",
    n: "Betta royal",
    p: 1e3,
    sh: "zv_royal",
    b: "#2a47d6",
    f: "#e24bd0",
    f2: "#ffd2f4",
    sz: 1.2,
  },
  {
    id: "lumignon",
    n: "Lumignon étoilé",
    sl: 100,
    p: 1200,
    sh: "lumignon",
    b: "#ece6ff",
    f: "#b9acec",
    sc: "#ffc83d",
    sp: "#fff6c2",
    sz: 1.25,
  },
];
const GB = (() => {
  let e = "",
    t = 0;
  const a = ["#ff6b6b", "#ffd66b", "#6bd4ff", "#8dff9c", "#d08bff"];
  for (let s = 0; s < 4; s++)
    [0.25, 0.5, 0.75].forEach((n) => {
      const o = 25 * s + 2 * (1 - n) * n * 12.5 + n * n * 25,
        i = (1 - n) * (1 - n) + 2 * (1 - n) * n * 15 + n * n * 2,
        r = a[t % 5],
        l = ((-0.37 * t) % 2.4).toFixed(2);
      ((e += `<circle class="twk" cx="${o.toFixed(1)}" cy="${i.toFixed(1)}" r="3" fill="${r}" opacity=".3" style="animation-delay:${l}s"/><circle class="twk" cx="${o.toFixed(1)}" cy="${(i + 0.6).toFixed(1)}" r="1.4" fill="${r}" style="animation-delay:${l}s"/>`),
        t++);
    });
  return e;
})();
const DECO_G = [
  ["sea", "Fond marin"],
  ["winter", "Hiver"],
  ["ceil", "Lumières"],
];
const DECO = [
  {
    id: "algues",
    n: "Algues ondulantes",
    p: 30,
    x: 0,
    w: 14,
    svg: '<defs><linearGradient id="DalA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9af0a0"/><stop offset="0.6" stop-color="#2fa85a"/><stop offset="1" stop-color="#0e5a30"/></linearGradient><linearGradient id="DalB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8f890"/><stop offset="0.6" stop-color="#4ac06a"/><stop offset="1" stop-color="#14683a"/></linearGradient></defs><g class="dqT1"><g class="dqSw" style="animation-duration:3.2s;transform-origin:24px 100px"><path d="M19 100C15 72.7 32.0 53.2 25.5 22C35.0 51.64 34 75.03999999999999 29 100Z" fill="url(#DalA)"/><path d="M24 100C23 68.8 29 49.3 26.0 24.340000000000003" stroke="#d8ffd0" stroke-opacity=".45" stroke-width=".9" fill="none"/></g><g class="dqSw" style="animation-duration:3.8s;animation-delay:0.6s;transform-origin:44px 100px"><path d="M38 100C34 67.1 53.6 43.6 45.8 6C57.2 41.72 55 69.92 50 100Z" fill="url(#DalB)"/><path d="M44 100C43 62.4 50 38.9 46.4 8.820000000000007" stroke="#d8ffd0" stroke-opacity=".45" stroke-width=".9" fill="none"/></g><g class="dqSw" style="animation-duration:3s;animation-delay:1.2s;transform-origin:62px 100px"><path d="M57 100C53 75.5 70.0 58.0 63.5 30C73.0 56.6 72 77.6 67 100Z" fill="url(#DalA)"/><path d="M62 100C61 72.0 67 54.5 64.0 32.10000000000001" stroke="#d8ffd0" stroke-opacity=".45" stroke-width=".9" fill="none"/></g><g class="dqSw" style="animation-duration:3.6s;animation-delay:0.3s;transform-origin:78px 100px"><path d="M72.5 100C68.5 69.9 86.8 48.4 79.65 14C90.1 46.68 88.5 72.48 83.5 100Z" fill="url(#DalB)"/><path d="M78 100C77 65.6 83.5 44.1 80.2 16.58" stroke="#d8ffd0" stroke-opacity=".45" stroke-width=".9" fill="none"/></g><g class="dqSw" style="animation-duration:2.8s;animation-delay:0.9s;transform-origin:36px 100px"><path d="M32 100C28 80.4 42.4 66.4 37.2 44C44.8 65.28 45 82.08 40 100Z" fill="url(#DalB)"/><path d="M36 100C35 77.6 40 63.6 37.6 45.68" stroke="#d8ffd0" stroke-opacity=".45" stroke-width=".9" fill="none"/></g></g><g fill="#dff6ff" fill-opacity=".25" stroke="#fff" stroke-opacity=".8" stroke-width="1"><circle class="dqBub" style="animation-duration:4s" cx="50" cy="30" r="1.6"/><circle class="dqBub" style="animation-duration:4.4s;animation-delay:1.6s" cx="70" cy="40" r="1.2"/></g><g class="dqTB" fill="#dff6ff" fill-opacity=".3" stroke="#fff" stroke-width="1"><circle style="animation-delay:0.00s" cx="44" cy="20" r="2.4"/><circle style="animation-delay:0.08s" cx="52" cy="20" r="3.2"/><circle style="animation-delay:0.16s" cx="58" cy="20" r="2"/><circle style="animation-delay:0.24s" cx="48" cy="20" r="1.6"/><circle style="animation-delay:0.32s" cx="55" cy="20" r="2.6"/></g>',
  },
  {
    id: "rocher",
    n: "Rocher moussu",
    p: 40,
    x: 80,
    w: 14,
    svg: '<path d="M6 100L12 62 34 42 62 50 86 38 98 70 94 100Z" fill="#707d9e"/><path d="M12 62 34 42 40 72Z" fill="#8e9bba"/><path d="M60 52l20-12 8 24z" fill="#5f6c8d"/><path d="M20 78q10-8 20-2" stroke="#58c87a" stroke-width="5" fill="none" stroke-linecap="round"/>',
  },
  {
    id: "coquillage",
    n: "Grand coquillage",
    p: 50,
    x: 73,
    w: 8,
    svg: '<defs><radialGradient id="DcoA" cx="0.5" cy="0.85" r="0.8"><stop offset="0" stop-color="#fff4f6"/><stop offset="0.6" stop-color="#f6c0d0"/><stop offset="1" stop-color="#d87a98"/></radialGradient><radialGradient id="DcoP" cx="0.35" cy="0.3" r="0.7"><stop offset="0" stop-color="#ffffff"/><stop offset="0.6" stop-color="#f4eef8"/><stop offset="1" stop-color="#c8b8d8"/></radialGradient></defs><path d="M14 90Q50 104 86 90L84 96Q50 106 16 96Z" fill="#c86a8a"/><ellipse cx="50" cy="90" rx="34" ry="7" fill="#f8dce6"/><circle class="dqPearl" cx="50" cy="86" r="7" fill="url(#DcoP)"/><circle cx="47.6" cy="83.6" r="2" fill="#fff"/><g class="dqLid"><path d="M50 92C26 92 8 74 10 56 14 36 32 22 50 22 68 22 86 36 90 56 92 74 74 92 50 92Z" fill="url(#DcoA)"/><path d="M50 92L89.05 77.28" stroke="#e48fab" stroke-width="2" stroke-opacity=".7"/><path d="M50 92L82.78 66.99" stroke="#e48fab" stroke-width="2" stroke-opacity=".7"/><path d="M50 92L73.61 58.92" stroke="#e48fab" stroke-width="2" stroke-opacity=".7"/><path d="M50 92L62.35 53.77" stroke="#e48fab" stroke-width="2" stroke-opacity=".7"/><path d="M50 92L50 52" stroke="#e48fab" stroke-width="2" stroke-opacity=".7"/><path d="M50 92L37.65 53.77" stroke="#e48fab" stroke-width="2" stroke-opacity=".7"/><path d="M50 92L26.39 58.92" stroke="#e48fab" stroke-width="2" stroke-opacity=".7"/><path d="M50 92L17.22 66.99" stroke="#e48fab" stroke-width="2" stroke-opacity=".7"/><path d="M50 92L10.95 77.28" stroke="#e48fab" stroke-width="2" stroke-opacity=".7"/><path d="M38 92h24l-4 6h-16z" fill="#e8a0b8"/><path d="M24 44Q36 30 50 28" stroke="#fff" stroke-width="3" stroke-opacity=".6" fill="none" stroke-linecap="round"/></g><g class="dqTS"><g style="animation-delay:0.00s"><path class="" d="M50 65l1.5 3.5 3.5 1.5 -3.5 1.5 -1.5 3.5 -1.5 -3.5 -3.5 -1.5 3.5 -1.5z" fill="#fff6c8"/></g><g style="animation-delay:0.09s"><path class="" d="M40 59l0.9 2.1 2.1 0.9 -2.1 0.9 -0.9 2.1 -0.9 -2.1 -2.1 -0.9 2.1 -0.9z" fill="#fff6c8"/></g><g style="animation-delay:0.18s"><path class="" d="M60 60.6l1.02 2.38 2.38 1.02 -2.38 1.02 -1.02 2.38 -1.02 -2.38 -2.38 -1.02 2.38 -1.02z" fill="#fff6c8"/></g></g>',
  },
  {
    id: "corail",
    n: "Corail rose",
    p: 80,
    x: 12,
    w: 12,
    svg: '<defs><linearGradient id="DcrA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb0c8"/><stop offset="0.5" stop-color="#ff6a92"/><stop offset="1" stop-color="#c83a68"/></linearGradient></defs><g class="dqT2" style="transform-origin:50px 100px"><path d="M50 100V60" stroke="url(#DcrA)" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M50 82C40 74 28 66 24 48V34" stroke="url(#DcrA)" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M50 72C60 64 70 54 74 40V20" stroke="url(#DcrA)" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M50 60V28" stroke="url(#DcrA)" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M26 56C18 52 14 46 13 40" stroke="url(#DcrA)" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M72 52C80 48 84 42 86 34" stroke="url(#DcrA)" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M50 44C44 40 40 34 40 26" stroke="url(#DcrA)" stroke-width="5" fill="none" stroke-linecap="round"/><circle class="dqPol" style="animation-duration:2.4s" cx="24" cy="34" r="3.2" fill="#ffe0ea"/><circle class="dqPol" style="animation-duration:2.4s;animation-delay:0.3s" cx="74" cy="20" r="3.2" fill="#ffe0ea"/><circle class="dqPol" style="animation-duration:2.4s;animation-delay:0.6s" cx="50" cy="28" r="3" fill="#ffe0ea"/><circle class="dqPol" style="animation-duration:2.4s;animation-delay:0.9s" cx="13" cy="40" r="2.6" fill="#ffe0ea"/><circle class="dqPol" style="animation-duration:2.4s;animation-delay:1.2s" cx="86" cy="34" r="2.6" fill="#ffe0ea"/><circle class="dqPol" style="animation-duration:2.4s;animation-delay:1.5s" cx="40" cy="26" r="2.4" fill="#ffe0ea"/><g fill="#ffd0de" opacity=".7"><circle cx="46" cy="76" r="1.4"/><circle cx="55" cy="66" r="1.2"/><circle cx="32" cy="62" r="1.1"/><circle cx="66" cy="56" r="1.2"/></g></g><g class="dqTB" fill="#dff6ff" fill-opacity=".3" stroke="#fff" stroke-width="1"><circle style="animation-delay:0.00s" cx="44" cy="16" r="2.4"/><circle style="animation-delay:0.08s" cx="52" cy="16" r="3.2"/><circle style="animation-delay:0.16s" cx="58" cy="16" r="2"/><circle style="animation-delay:0.24s" cx="48" cy="16" r="1.6"/><circle style="animation-delay:0.32s" cx="55" cy="16" r="2.6"/></g>',
  },
  {
    id: "etoile",
    n: "Étoile de mer",
    p: 90,
    x: 47,
    w: 7,
    svg: '<defs><radialGradient id="DetA" cx="0.5" cy="0.5" r="0.6"><stop offset="0" stop-color="#ffd08a"/><stop offset="0.5" stop-color="#ff9a3a"/><stop offset="1" stop-color="#d8601a"/></radialGradient></defs><g class="dqStar" style="transform-origin:50px 62px"><path d="M50 62L41.27 22.96Q50 16 58.73 22.96Z" fill="url(#DetA)"/><path d="M50 62L84.43 41.64Q93.75 47.79 89.82 58.24Z" fill="url(#DetA)"/><path d="M50 62L80.01 88.45Q77.04 99.21 65.88 98.71Z" fill="url(#DetA)"/><path d="M50 62L34.12 98.71Q22.96 99.21 19.99 88.45Z" fill="url(#DetA)"/><path d="M50 62L10.18 58.24Q6.25 47.79 15.57 41.64Z" fill="url(#DetA)"/><circle cx="50" cy="62" r="11" fill="url(#DetA)"/><circle cx="50" cy="52" r="1.6" fill="#ffe0b0"/><circle cx="50" cy="44" r="1.6" fill="#ffe0b0"/><circle cx="50" cy="36" r="1.2" fill="#ffe0b0"/><circle cx="59.51" cy="58.91" r="1.6" fill="#ffe0b0"/><circle cx="67.12" cy="56.44" r="1.6" fill="#ffe0b0"/><circle cx="74.73" cy="53.97" r="1.2" fill="#ffe0b0"/><circle cx="55.88" cy="70.09" r="1.6" fill="#ffe0b0"/><circle cx="60.58" cy="76.56" r="1.6" fill="#ffe0b0"/><circle cx="65.28" cy="83.03" r="1.2" fill="#ffe0b0"/><circle cx="44.12" cy="70.09" r="1.6" fill="#ffe0b0"/><circle cx="39.42" cy="76.56" r="1.6" fill="#ffe0b0"/><circle cx="34.72" cy="83.03" r="1.2" fill="#ffe0b0"/><circle cx="40.49" cy="58.91" r="1.6" fill="#ffe0b0"/><circle cx="32.88" cy="56.44" r="1.6" fill="#ffe0b0"/><circle cx="25.27" cy="53.97" r="1.2" fill="#ffe0b0"/><circle cx="50" cy="62" r="3.4" fill="#ffecc8"/></g><g class="dqTS"><g style="animation-delay:0.00s"><path class="" d="M30 36l1.2 2.8 2.8 1.2 -2.8 1.2 -1.2 2.8 -1.2 -2.8 -2.8 -1.2 2.8 -1.2z" fill="#fff6c8"/></g><g style="animation-delay:0.09s"><path class="" d="M72 40.6l1.02 2.38 2.38 1.02 -2.38 1.02 -1.02 2.38 -1.02 -2.38 -2.38 -1.02 2.38 -1.02z" fill="#fff6c8"/></g><g style="animation-delay:0.18s"><path class="" d="M50 27l0.9 2.1 2.1 0.9 -2.1 0.9 -0.9 2.1 -0.9 -2.1 -2.1 -0.9 2.1 -0.9z" fill="#fff6c8"/></g></g>',
  },
  {
    id: "bulleur",
    n: "Pierre à bulles",
    p: 120,
    x: 93,
    w: 7,
    svg: '<defs><radialGradient id="DbuA" cx="0.4" cy="0.3" r="0.75"><stop offset="0" stop-color="#c8d0e0"/><stop offset="0.6" stop-color="#7a849c"/><stop offset="1" stop-color="#3a4258"/></radialGradient></defs><path d="M10 100C8 84 20 70 38 68 52 60 74 64 84 76 94 86 92 100 92 100Z" fill="url(#DbuA)"/><ellipse cx="52" cy="72" rx="7" ry="3.4" fill="#1a1e2a"/><path d="M22 84Q30 78 40 80" stroke="#5ac87a" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M28 72Q40 66 52 66" stroke="#fff" stroke-opacity=".35" stroke-width="2.4" fill="none" stroke-linecap="round"/><g fill="#dff6ff" fill-opacity=".25" stroke="#fff" stroke-opacity=".8" stroke-width="1"><circle class="dqBubU" style="animation-duration:2.2s" cx="52" cy="66" r="2.6"/><circle class="dqBubU" style="animation-duration:2.4s;animation-delay:0.5s" cx="54" cy="66" r="1.8"/><circle class="dqBubU" style="animation-duration:2.6s;animation-delay:1.1s" cx="50" cy="66" r="3.2"/><circle class="dqBubU" style="animation-duration:2.1s;animation-delay:1.6s" cx="53" cy="66" r="1.4"/></g><g class="dqTB2" fill="#dff6ff" fill-opacity=".3" stroke="#fff" stroke-width="1"><circle style="animation-delay:0.00s" cx="49" cy="66" r="3"/><circle style="animation-delay:0.06s" cx="54" cy="66" r="4"/><circle style="animation-delay:0.12s" cx="52" cy="66" r="2.2"/><circle style="animation-delay:0.18s" cx="56" cy="66" r="2.6"/><circle style="animation-delay:0.24s" cx="48" cy="66" r="1.8"/><circle style="animation-delay:0.30s" cx="53" cy="66" r="3.4"/><circle style="animation-delay:0.36s" cx="51" cy="66" r="2"/></g>',
  },
  {
    id: "ancre",
    n: "Vieille ancre",
    p: 130,
    x: 65,
    w: 9,
    svg: '<defs><linearGradient id="DanA" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8a96a8"/><stop offset="0.5" stop-color="#4a5468"/><stop offset="1" stop-color="#2a3040"/></linearGradient></defs><g class="dqChain" style="transform-origin:50px 0"><ellipse cx="50" cy="2" rx="3" ry="4.6" fill="none" stroke="#6a7488" stroke-width="2"/><ellipse cx="50" cy="9" rx="3" ry="4.6" fill="none" stroke="#6a7488" stroke-width="2"/><ellipse cx="50" cy="16" rx="3" ry="4.6" fill="none" stroke="#6a7488" stroke-width="2"/></g><g class="dqSwing" style="transform-origin:50px 22px"><circle cx="50" cy="26" r="6" fill="none" stroke="url(#DanA)" stroke-width="4"/><rect x="47" y="31" width="6" height="56" rx="2" fill="url(#DanA)"/><rect x="34" y="38" width="32" height="6" rx="3" fill="url(#DanA)"/><path d="M50 92C34 92 20 84 16 70L10 74 14 58 26 66 20 68C24 78 36 84 50 84 64 84 76 78 80 68L74 66 86 58 90 74 84 70C80 84 66 92 50 92Z" fill="url(#DanA)"/><g fill="#c8b48a"><circle cx="30" cy="80" r="2"/><circle cx="33" cy="83" r="1.4"/><circle cx="66" cy="81" r="1.8"/><circle cx="52" cy="60" r="1.5"/></g><path d="M47 34v50" stroke="#fff" stroke-opacity=".25" stroke-width="1.4"/></g><path class="dqSw" style="animation-duration:3s;transform-origin:60px 100px" d="M58 100C56 92 64 88 60 80S66 70 64 64" stroke="#3fae6a" stroke-width="3" fill="none" stroke-linecap="round"/>',
  },
  {
    id: "coffre",
    n: "Coffre au trésor",
    p: 150,
    x: 52,
    w: 13,
    svg: '<defs><linearGradient id="DcfA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b8783a"/><stop offset="1" stop-color="#6a3a14"/></linearGradient><linearGradient id="DcfB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a0"/><stop offset="1" stop-color="#c8902a"/></linearGradient><radialGradient id="DcfG" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fff4b0" stop-opacity="0.95"/><stop offset="1" stop-color="#ffd23a" stop-opacity="0"/></radialGradient></defs><ellipse class="dqGlow" cx="50" cy="58" rx="40" ry="20" fill="url(#DcfG)"/><g class="dqCoins"><circle cx="34" cy="60" r="4" fill="url(#DcfB)" stroke="#a8781a" stroke-width=".6"/><circle cx="44" cy="57" r="4" fill="url(#DcfB)" stroke="#a8781a" stroke-width=".6"/><circle cx="54" cy="58" r="4" fill="url(#DcfB)" stroke="#a8781a" stroke-width=".6"/><circle cx="64" cy="60" r="4" fill="url(#DcfB)" stroke="#a8781a" stroke-width=".6"/><circle cx="40" cy="63" r="4" fill="url(#DcfB)" stroke="#a8781a" stroke-width=".6"/><circle cx="58" cy="63" r="4" fill="url(#DcfB)" stroke="#a8781a" stroke-width=".6"/><circle cx="49" cy="62" r="4" fill="url(#DcfB)" stroke="#a8781a" stroke-width=".6"/></g><rect x="12" y="60" width="76" height="38" rx="4" fill="url(#DcfA)"/><path d="M12 72H88M12 86H88" stroke="#4a2810" stroke-width="1.2" opacity=".5"/><rect x="10" y="60" width="6" height="38" fill="url(#DcfB)"/><rect x="84" y="60" width="6" height="38" fill="url(#DcfB)"/><rect x="44" y="64" width="12" height="14" rx="2" fill="url(#DcfB)"/><circle class="dqTw" cx="50" cy="70" r="1.8" fill="#3a2410"/><g class="dqLid2" style="transform-origin:50px 60px"><path d="M12 60V48Q12 30 50 30 88 30 88 48V60Z" fill="url(#DcfA)"/><path d="M10 60V48Q10 28 16 30V60ZM84 30Q90 28 90 48V60H84Z" fill="url(#DcfB)"/><path d="M22 40Q50 32 78 40" stroke="#fff" stroke-opacity=".25" stroke-width="2" fill="none"/></g><g fill="#dff6ff" fill-opacity=".25" stroke="#fff" stroke-opacity=".8" stroke-width="1"><circle class="dqBub" style="animation-duration:3.4s" cx="50" cy="58" r="1.4"/><circle class="dqBub" style="animation-duration:3.8s;animation-delay:1.7s" cx="56" cy="58" r="1"/></g><g class="dqTS"><g style="animation-delay:0.00s"><path class="" d="M36 36l1.2 2.8 2.8 1.2 -2.8 1.2 -1.2 2.8 -1.2 -2.8 -2.8 -1.2 2.8 -1.2z" fill="#fff2a0"/></g><g style="animation-delay:0.09s"><path class="" d="M62 31.6l1.32 3.08 3.08 1.32 -3.08 1.32 -1.32 3.08 -1.32 -3.08 -3.08 -1.32 3.08 -1.32z" fill="#fff2a0"/></g><g style="animation-delay:0.18s"><path class="" d="M50 27l0.9 2.1 2.1 0.9 -2.1 0.9 -0.9 2.1 -0.9 -2.1 -2.1 -0.9 2.1 -0.9z" fill="#fff2a0"/></g><g style="animation-delay:0.27s"><path class="" d="M72 45l0.9 2.1 2.1 0.9 -2.1 0.9 -0.9 2.1 -0.9 -2.1 -2.1 -0.9 2.1 -0.9z" fill="#fff2a0"/></g></g>',
  },
  {
    id: "chateau",
    n: "Petit château",
    p: 220,
    x: 24,
    w: 22,
    svg: '<defs><linearGradient id="DchA" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f4dca0"/><stop offset="1" stop-color="#c89a5a"/></linearGradient><linearGradient id="DchR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a8ad8"/><stop offset="1" stop-color="#2a4a9a"/></linearGradient></defs><rect x="14" y="40" width="18" height="60" fill="url(#DchA)"/><rect x="14" y="36" width="3.5" height="5" fill="url(#DchA)"/><rect x="23" y="36" width="3.5" height="5" fill="url(#DchA)"/><rect x="28.5" y="36" width="3.5" height="5" fill="url(#DchA)"/><rect x="68" y="40" width="18" height="60" fill="url(#DchA)"/><rect x="68" y="36" width="3.5" height="5" fill="url(#DchA)"/><rect x="77" y="36" width="3.5" height="5" fill="url(#DchA)"/><rect x="82.5" y="36" width="3.5" height="5" fill="url(#DchA)"/><rect x="30" y="56" width="40" height="44" fill="url(#DchA)"/><rect x="30" y="52" width="5" height="5" fill="url(#DchA)"/><rect x="38" y="52" width="5" height="5" fill="url(#DchA)"/><rect x="46" y="52" width="5" height="5" fill="url(#DchA)"/><rect x="54" y="52" width="5" height="5" fill="url(#DchA)"/><rect x="62" y="52" width="5" height="5" fill="url(#DchA)"/><rect x="42" y="24" width="16" height="76" fill="url(#DchA)"/><rect x="42" y="20" width="3" height="5" fill="url(#DchA)"/><rect x="50" y="20" width="3" height="5" fill="url(#DchA)"/><rect x="55" y="20" width="3" height="5" fill="url(#DchA)"/><path d="M12 40 23 22 34 40Z" fill="url(#DchR)"/><path d="M66 40 77 22 88 40Z" fill="url(#DchR)"/><path d="M40 24 50 6 60 24Z" fill="url(#DchR)"/><g class="dqFlag" style="animation-duration:1.2s;transform-origin:0 50%"><path d="M50 6V-6" stroke="#6a4a2a" stroke-width="1.2"/><path d="M50 -6Q56 -8 60 -4 56 -2 50 -2Z" fill="#ff5a6a"/></g><path d="M42 100V82Q50 72 58 82V100Z" fill="#3a2410"/><path class="dqWin" style="animation-delay:0s" d="M20.5 56V52Q23.0 49 25.5 52V56Z" fill="#ffd27a"/><path class="dqWin" style="animation-delay:0.4s" d="M74.5 56V52Q77.0 49 79.5 52V56Z" fill="#ffd27a"/><path class="dqWin" style="animation-delay:0.8s" d="M47.5 38V34Q50.0 31 52.5 34V38Z" fill="#ffd27a"/><path class="dqWin" style="animation-delay:1.2s" d="M20.5 72V68Q23.0 65 25.5 68V72Z" fill="#ffd27a"/><path class="dqWin" style="animation-delay:0.6s" d="M74.5 72V68Q77.0 65 79.5 68V72Z" fill="#ffd27a"/><g stroke="#a87a3a" stroke-width=".6" opacity=".5"><path d="M14 62h18M14 78h18M68 62h18M68 78h18M30 70h40M30 86h40"/></g><g class="dqTB" fill="#dff6ff" fill-opacity=".3" stroke="#fff" stroke-width="1"><circle style="animation-delay:0.00s" cx="44" cy="10" r="2.4"/><circle style="animation-delay:0.08s" cx="52" cy="10" r="3.2"/><circle style="animation-delay:0.16s" cx="58" cy="10" r="2"/><circle style="animation-delay:0.24s" cx="48" cy="10" r="1.6"/><circle style="animation-delay:0.32s" cx="55" cy="10" r="2.6"/></g>',
  },
  {
    id: "sapin",
    g: "winter",
    n: "Sapin enneigé",
    p: 40,
    x: 34,
    w: 12,
    svg: '<defs><linearGradient id="DsaA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a9a5a"/><stop offset="1" stop-color="#124a2a"/></linearGradient></defs><rect x="46" y="88" width="8" height="12" fill="#6a4a2a"/><g class="dqShake" style="transform-origin:50px 100px"><path d="M50 66L84 90Q50 95 16 90Z" fill="url(#DsaA)"/><path d="M50 66L65.3 76.8Q50 79.2 34.7 76.8Z" fill="#fbfdff"/><path d="M16 90Q50 95 84 90" stroke="#f4faff" stroke-width="2.4" fill="none"/><path d="M50 50L77 72Q50 77 23 72Z" fill="url(#DsaA)"/><path d="M50 50L62.15 59.9Q50 62.1 37.85 59.9Z" fill="#fbfdff"/><path d="M23 72Q50 77 77 72" stroke="#f4faff" stroke-width="2.4" fill="none"/><path d="M50 34L70 54Q50 59 30 54Z" fill="url(#DsaA)"/><path d="M50 34L59 43Q50 45 41 43Z" fill="#fbfdff"/><path d="M30 54Q50 59 70 54" stroke="#f4faff" stroke-width="2.4" fill="none"/><path d="M50 20L63 38Q50 43 37 38Z" fill="url(#DsaA)"/><path d="M50 20L55.85 28.1Q50 29.9 44.15 28.1Z" fill="#fbfdff"/><path d="M37 38Q50 43 63 38" stroke="#f4faff" stroke-width="2.4" fill="none"/><path class="dqTw" style="animation-delay:0.4s" d="M40 58l0.6 1.4 1.4 0.6 -1.4 0.6 -0.6 1.4 -0.6 -1.4 -1.4 -0.6 1.4 -0.6z" fill="#fff"/><path class="dqTw" style="animation-delay:1.2s" d="M62 76.4l0.48 1.12 1.12 0.48 -1.12 0.48 -0.48 1.12 -0.48 -1.12 -1.12 -0.48 1.12 -0.48z" fill="#fff"/><path class="dqTw" style="animation-delay:2s" d="M52 38.6l0.42 0.98 0.98 0.42 -0.98 0.42 -0.42 0.98 -0.42 -0.98 -0.98 -0.42 0.98 -0.42z" fill="#fff"/></g><g class="dqSnow" fill="#fff"><circle style="animation-delay:0.00s" cx="30" cy="40" r="1.4"/><circle style="animation-delay:0.12s" cx="66" cy="46" r="1.4"/><circle style="animation-delay:0.24s" cx="44" cy="30" r="1.4"/><circle style="animation-delay:0.36s" cx="58" cy="60" r="1.4"/><circle style="animation-delay:0.48s" cx="36" cy="66" r="1.4"/><circle style="animation-delay:0.60s" cx="70" cy="70" r="1.4"/></g>',
  },
  {
    id: "bonhomme",
    g: "winter",
    n: "Bonhomme de neige",
    p: 100,
    x: 58,
    w: 11,
    svg: '<defs><radialGradient id="DboA" cx="0.38" cy="0.32" r="0.75"><stop offset="0" stop-color="#ffffff"/><stop offset="0.7" stop-color="#e8f0fa"/><stop offset="1" stop-color="#a8b8d0"/></radialGradient></defs><g class="dqArmL" style="transform-origin:30px 62px"><path d="M30 62L14 52M20 56l-4-6" stroke="#6a4a2a" stroke-width="2.4" stroke-linecap="round"/></g><path d="M70 62L86 54M80 57l2-6" stroke="#6a4a2a" stroke-width="2.4" stroke-linecap="round"/><circle cx="50" cy="82" r="18" fill="url(#DboA)"/><circle cx="50" cy="58" r="13" fill="url(#DboA)"/><circle cx="50" cy="38" r="10" fill="url(#DboA)"/><g fill="#2a2a3a"><circle cx="50" cy="56" r="1.6"/><circle cx="50" cy="63" r="1.6"/><circle cx="50" cy="78" r="1.8"/></g><g class="dqBlink" style="transform-origin:50px 35px"><circle cx="46.4" cy="35.4" r="1.5" fill="#2a2a3a"/><circle cx="53.6" cy="35.4" r="1.5" fill="#2a2a3a"/></g><path d="M50 39L60 41 50 41.6Z" fill="#ff8a2a"/><path d="M46 43.4Q50 45.4 54 43.4" stroke="#2a2a3a" stroke-width="1" fill="none" stroke-linecap="round"/><path d="M38 47Q50 52 62 47L62 51Q50 56 38 51Z" fill="#d8283a"/><path class="dqScarf" style="animation-duration:1.4s;transform-origin:50% 0" d="M56 50L60 64 54 64 52 51Z" fill="#c8202e"/><g class="dqHat" style="transform-origin:42px 30px"><rect x="40" y="16" width="20" height="13" rx="1.4" fill="#22222e"/><rect x="36" y="28" width="28" height="3.4" rx="1.6" fill="#22222e"/><rect x="40" y="25" width="20" height="3" fill="#c8202e"/></g>',
  },
  {
    id: "igloo",
    g: "winter",
    n: "Igloo",
    p: 170,
    x: 4,
    w: 20,
    svg: '<defs><radialGradient id="DigA" cx="0.4" cy="0.3" r="0.8"><stop offset="0" stop-color="#ffffff"/><stop offset="0.6" stop-color="#dceeff"/><stop offset="1" stop-color="#8ab4e0"/></radialGradient><radialGradient id="DigL" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffd27a" stop-opacity="1"/><stop offset="1" stop-color="#ff8a2a" stop-opacity="0"/></radialGradient></defs><path d="M8 100C8 64 28 42 50 42 72 42 92 64 92 100Z" fill="url(#DigA)"/><g stroke="#a8c8e8" stroke-width="1" fill="none" opacity=".8"><path d="M14 86H86M18 72H82M26 58H74M38 46H62"/><path d="M30 100V86M50 100V86M70 100V86M24 86V72M40 86V72M60 86V72M76 86V72M34 72V58M50 72V58M66 72V58M44 58V46M56 58V46"/></g><path d="M60 100V84Q60 74 70 74 80 74 80 84V100Z" fill="#dceeff"/><path d="M64 100V86Q64 79 70 79 76 79 76 86V100Z" fill="#2a3a5a"/><ellipse class="dqWarm" cx="70" cy="92" rx="10" ry="9" fill="url(#DigL)"/><path d="M24 62Q36 48 50 46" stroke="#fff" stroke-width="3" stroke-opacity=".7" fill="none" stroke-linecap="round"/><path class="dqTw" style="animation-delay:0.6s" d="M30 68.2l0.54 1.26 1.26 0.54 -1.26 0.54 -0.54 1.26 -0.54 -1.26 -1.26 -0.54 1.26 -0.54z" fill="#fff"/><path class="dqTw" style="animation-delay:1.6s" d="M56 52.6l0.42 0.98 0.98 0.42 -0.98 0.42 -0.42 0.98 -0.42 -0.98 -0.98 -0.42 0.98 -0.42z" fill="#fff"/><g class="dqTB" fill="#dff6ff" fill-opacity=".3" stroke="#fff" stroke-width="1"><circle style="animation-delay:0.00s" cx="64" cy="70" r="2.4"/><circle style="animation-delay:0.08s" cx="72" cy="70" r="3.2"/><circle style="animation-delay:0.16s" cx="78" cy="70" r="2"/><circle style="animation-delay:0.24s" cx="68" cy="70" r="1.6"/><circle style="animation-delay:0.32s" cx="75" cy="70" r="2.6"/></g>',
  },
  {
    id: "glace",
    g: "winter",
    n: "Cristaux de glace",
    p: 110,
    x: 20,
    w: 12,
    svg: '<defs><linearGradient id="DglA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="0.5" stop-color="#bfeeff"/><stop offset="1" stop-color="#4ab8e8"/></linearGradient></defs><g class="dqCry" style="animation-delay:0s;transform-origin:30px 100px"><g transform="rotate(-18 30 100)"><path d="M23 100V63L30 56L37 63V100Z" fill="url(#DglA)"/><path d="M30 56V100L37 100V63Z" fill="#8ad8f8" opacity=".55"/><path d="M26.5 98V65" stroke="#fff" stroke-width="1.2" stroke-opacity=".8"/></g></g><g class="dqCry" style="animation-delay:0.3s;transform-origin:70px 100px"><g transform="rotate(16 70 100)"><path d="M64 100V66L70 60L76 66V100Z" fill="url(#DglA)"/><path d="M70 60V100L76 100V66Z" fill="#8ad8f8" opacity=".55"/><path d="M67.0 98V68" stroke="#fff" stroke-width="1.2" stroke-opacity=".8"/></g></g><g class="dqCry" style="animation-delay:0.6s;transform-origin:50px 100px"><g transform="rotate(0 50 100)"><path d="M41 100V39L50 30L59 39V100Z" fill="url(#DglA)"/><path d="M50 30V100L59 100V39Z" fill="#8ad8f8" opacity=".55"/><path d="M45.5 98V41" stroke="#fff" stroke-width="1.2" stroke-opacity=".8"/></g></g><g class="dqCry" style="animation-delay:0.9s;transform-origin:40px 100px"><g transform="rotate(-6 40 100)"><path d="M35 100V75L40 70L45 75V100Z" fill="url(#DglA)"/><path d="M40 70V100L45 100V75Z" fill="#8ad8f8" opacity=".55"/><path d="M37.5 98V77" stroke="#fff" stroke-width="1.2" stroke-opacity=".8"/></g></g><g class="dqCry" style="animation-delay:1.2s;transform-origin:62px 100px"><g transform="rotate(8 62 100)"><path d="M57 100V71L62 66L67 71V100Z" fill="url(#DglA)"/><path d="M62 66V100L67 100V71Z" fill="#8ad8f8" opacity=".55"/><path d="M59.5 98V73" stroke="#fff" stroke-width="1.2" stroke-opacity=".8"/></g></g><path class="dqTw" style="animation-delay:0.2s" d="M50 31l0.9 2.1 2.1 0.9 -2.1 0.9 -0.9 2.1 -0.9 -2.1 -2.1 -0.9 2.1 -0.9z" fill="#fff"/><path class="dqTw" style="animation-delay:1s" d="M34 62l0.6 1.4 1.4 0.6 -1.4 0.6 -0.6 1.4 -0.6 -1.4 -1.4 -0.6 1.4 -0.6z" fill="#fff"/><path class="dqTw" style="animation-delay:1.8s" d="M68 63.8l0.66 1.54 1.54 0.66 -1.54 0.66 -0.66 1.54 -0.66 -1.54 -1.54 -0.66 1.54 -0.66z" fill="#fff"/>',
  },
  {
    id: "cadeaux",
    g: "winter",
    n: "Paquets cadeaux",
    p: 25,
    x: 44,
    w: 12,
    svg: '<defs><linearGradient id="DcaS" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="0.4" stop-color="#ffffff"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><g class="dqHop" style="animation-delay:0s;transform-origin:25.0px 100px"><rect x="8" y="64" width="34" height="36" rx="1.6" fill="#d8283a"/><rect x="8" y="64" width="34" height="36" rx="1.6" fill="url(#DcaS)" opacity=".16"/><rect x="22.6" y="64" width="4.8" height="36" fill="#ffd23a"/><rect x="7" y="61" width="36" height="6" rx="1.4" fill="#b81e2e"/><rect x="22.6" y="61" width="4.8" height="6" fill="#ffd23a"/><path d="M25.0 61C15.0 52 13.0 62 25.0 61C37.0 62 35.0 52 25.0 61Z" fill="#ffd23a"/></g><g class="dqHop" style="animation-delay:0.15s;transform-origin:72.0px 100px"><rect x="56" y="70" width="32" height="30" rx="1.6" fill="#2a6ad8"/><rect x="56" y="70" width="32" height="30" rx="1.6" fill="url(#DcaS)" opacity=".16"/><rect x="69.6" y="70" width="4.8" height="30" fill="#f4f4f4"/><rect x="55" y="67" width="34" height="6" rx="1.4" fill="#1e54b8"/><rect x="69.6" y="67" width="4.8" height="6" fill="#f4f4f4"/><path d="M72.0 67C62.0 58 60.0 68 72.0 67C84.0 68 82.0 58 72.0 67Z" fill="#f4f4f4"/></g><g class="dqHop" style="animation-delay:0.3s;transform-origin:45.0px 100px"><rect x="32" y="42" width="26" height="24" rx="1.6" fill="#2a9a5a"/><rect x="32" y="42" width="26" height="24" rx="1.6" fill="url(#DcaS)" opacity=".16"/><rect x="42.6" y="42" width="4.8" height="24" fill="#ff5a8a"/><rect x="31" y="39" width="28" height="6" rx="1.4" fill="#1e7a46"/><rect x="42.6" y="39" width="4.8" height="6" fill="#ff5a8a"/><path d="M45.0 39C35.0 30 33.0 40 45.0 39C57.0 40 55.0 30 45.0 39Z" fill="#ff5a8a"/></g><path class="dqTw" style="animation-delay:0.5s" d="M45 28l0.6 1.4 1.4 0.6 -1.4 0.6 -0.6 1.4 -0.6 -1.4 -1.4 -0.6 1.4 -0.6z" fill="#fff6c8"/><g class="dqTS"><g style="animation-delay:0.00s"><path class="" d="M45 20l1.2 2.8 2.8 1.2 -2.8 1.2 -1.2 2.8 -1.2 -2.8 -2.8 -1.2 2.8 -1.2z" fill="#fff6c8"/></g><g style="animation-delay:0.09s"><path class="" d="M30 37l0.9 2.1 2.1 0.9 -2.1 0.9 -0.9 2.1 -0.9 -2.1 -2.1 -0.9 2.1 -0.9z" fill="#fff6c8"/></g><g style="animation-delay:0.18s"><path class="" d="M64 42.6l1.02 2.38 2.38 1.02 -2.38 1.02 -1.02 2.38 -1.02 -2.38 -2.38 -1.02 2.38 -1.02z" fill="#fff6c8"/></g></g>',
  },
  {
    id: "meduse",
    k: "float",
    n: "Méduse lumineuse",
    p: 130,
    x: 12,
    w: 13,
    b: 58,
    svg: '<defs><radialGradient id="DmeA" cx="0.5" cy="0.25" r="0.75"><stop offset="0" stop-color="#ffffff"/><stop offset="0.5" stop-color="#f4d8ff"/><stop offset="1" stop-color="#b48ae8"/></radialGradient><radialGradient id="DmeG" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffb8f0" stop-opacity="0.6"/><stop offset="1" stop-color="#c48aff" stop-opacity="0"/></radialGradient></defs><circle class="dqGlow" cx="50" cy="42" r="46" fill="url(#DmeG)"/><g class="dqTent2" fill="none" stroke-linecap="round" style="transform-origin:50px 50px"><path d="M34 52Q30 66 36 78T32 98" stroke="#e8b8ff" stroke-width="2"/><path d="M44 54Q42 70 48 82T44 100" stroke="#ffc8ec" stroke-width="2.6"/><path d="M56 54Q60 70 54 82T58 100" stroke="#ffc8ec" stroke-width="2.6"/><path d="M66 52Q70 66 64 78T68 98" stroke="#e8b8ff" stroke-width="2"/></g><g class="dqBell2" style="transform-origin:50px 54px"><path d="M18 54C18 30 32 14 50 14 68 14 82 30 82 54Q75 50 68 55 59 50 50 55 41 50 32 55 25 50 18 54Z" fill="url(#DmeA)"/><path d="M30 32Q40 20 52 20" stroke="#fff" stroke-width="2.6" stroke-opacity=".75" fill="none" stroke-linecap="round"/><circle class="dqTw" style="animation-delay:0.0s" cx="24" cy="51" r="1.3" fill="#9ff8ff"/><circle class="dqTw" style="animation-delay:0.3s" cx="38" cy="51" r="1.3" fill="#ffb8f0"/><circle class="dqTw" style="animation-delay:0.6s" cx="50" cy="51" r="1.3" fill="#9ff8ff"/><circle class="dqTw" style="animation-delay:0.9s" cx="62" cy="51" r="1.3" fill="#ffb8f0"/><circle class="dqTw" style="animation-delay:1.2s" cx="76" cy="51" r="1.3" fill="#9ff8ff"/></g>',
  },
  {
    id: "cristal",
    k: "float",
    n: "Flocon de glace flottant",
    p: 110,
    x: 78,
    w: 10,
    b: 68,
    svg: '<defs><linearGradient id="DcrB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#7ad0f8"/></linearGradient><radialGradient id="DcrG" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#bff4ff" stop-opacity="0.7"/><stop offset="1" stop-color="#7ad0f8" stop-opacity="0"/></radialGradient></defs><circle class="dqGlow" cx="50" cy="50" r="46" fill="url(#DcrG)"/><g class="dqSpin" style="transform-origin:50px 50px"><g transform="rotate(0 50 50)"><path d="M50 50V10" stroke="url(#DcrB)" stroke-width="4" stroke-linecap="round"/><path d="M50 24L41 15M50 24L59 15M50 36L43 30M50 36L57 30" stroke="#e8f8ff" stroke-width="2.4" stroke-linecap="round"/></g><g transform="rotate(60 50 50)"><path d="M50 50V10" stroke="url(#DcrB)" stroke-width="4" stroke-linecap="round"/><path d="M50 24L41 15M50 24L59 15M50 36L43 30M50 36L57 30" stroke="#e8f8ff" stroke-width="2.4" stroke-linecap="round"/></g><g transform="rotate(120 50 50)"><path d="M50 50V10" stroke="url(#DcrB)" stroke-width="4" stroke-linecap="round"/><path d="M50 24L41 15M50 24L59 15M50 36L43 30M50 36L57 30" stroke="#e8f8ff" stroke-width="2.4" stroke-linecap="round"/></g><g transform="rotate(180 50 50)"><path d="M50 50V10" stroke="url(#DcrB)" stroke-width="4" stroke-linecap="round"/><path d="M50 24L41 15M50 24L59 15M50 36L43 30M50 36L57 30" stroke="#e8f8ff" stroke-width="2.4" stroke-linecap="round"/></g><g transform="rotate(240 50 50)"><path d="M50 50V10" stroke="url(#DcrB)" stroke-width="4" stroke-linecap="round"/><path d="M50 24L41 15M50 24L59 15M50 36L43 30M50 36L57 30" stroke="#e8f8ff" stroke-width="2.4" stroke-linecap="round"/></g><g transform="rotate(300 50 50)"><path d="M50 50V10" stroke="url(#DcrB)" stroke-width="4" stroke-linecap="round"/><path d="M50 24L41 15M50 24L59 15M50 36L43 30M50 36L57 30" stroke="#e8f8ff" stroke-width="2.4" stroke-linecap="round"/></g><polygon points="50,41 52.94,45.95 58.56,47.22 54.76,51.55 55.29,57.28 50,55 44.71,57.28 45.24,51.55 41.44,47.22 47.06,45.95" fill="#fff"/></g><path class="dqTw" style="animation-delay:0.5s" d="M78 19.6l0.72 1.68 1.68 0.72 -1.68 0.72 -0.72 1.68 -0.72 -1.68 -1.68 -0.72 1.68 -0.72z" fill="#fff"/><path class="dqTw" style="animation-delay:1.4s" d="M22 74l0.6 1.4 1.4 0.6 -1.4 0.6 -0.6 1.4 -0.6 -1.4 -1.4 -0.6 1.4 -0.6z" fill="#fff"/>',
  },
  {
    id: "lanterne",
    k: "float",
    n: "Lanterne flottante",
    p: 90,
    x: 42,
    w: 9,
    b: 54,
    svg: '<defs><radialGradient id="DlaA" cx="0.5" cy="0.45" r="0.6"><stop offset="0" stop-color="#fff4c8"/><stop offset="0.45" stop-color="#ffb84a"/><stop offset="1" stop-color="#d8481a"/></radialGradient><radialGradient id="DlaG" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffd27a" stop-opacity="0.75"/><stop offset="1" stop-color="#ff8a2a" stop-opacity="0"/></radialGradient></defs><circle class="dqFlick" cx="50" cy="50" r="46" fill="url(#DlaG)"/><g class="dqSwing2" style="transform-origin:50px 6px"><path d="M50 2V12" stroke="#5a3a1a" stroke-width="1.4"/><rect x="38" y="12" width="24" height="5" rx="2" fill="#4a2a14"/><ellipse class="dqFlick2" cx="50" cy="44" rx="26" ry="28" fill="url(#DlaA)"/><path d="M34 22Q26 44 34 66M43 18Q38 44 43 70M57 18Q62 44 57 70M66 22Q74 44 66 66" stroke="#c84a1a" stroke-width="1.2" fill="none" opacity=".55"/><rect x="38" y="70" width="24" height="5" rx="2" fill="#4a2a14"/><g class="dqTassel" style="transform-origin:50px 75px"><path d="M50 75V86" stroke="#d8283a" stroke-width="1.6"/><path d="M46 86h8l-1 10h-6z" fill="#d8283a"/></g></g>',
  },
  {
    id: "guirlande",
    g: "ceil",
    k: "ceil",
    fix: 1,
    n: "Guirlande lumineuse",
    p: 120,
    x: 0,
    w: 100,
    ar: 6,
    vb: "0 0 100 17",
    svg: '<path d="M0 1Q12.5 15 25 2 37.5 15 50 2 62.5 15 75 2 87.5 15 100 1" stroke="#243058" stroke-width=".9" fill="none"/><g><path d="M6 5.6v1.6" stroke="#243058" stroke-width=".8"/><ellipse class="dqBulb" style="animation-delay:0.00s" cx="6" cy="9" rx="1.8" ry="2.6" fill="#ff5a6a"/></g><g><path d="M14 10.4v1.6" stroke="#243058" stroke-width=".8"/><ellipse class="dqBulb" style="animation-delay:0.18s" cx="14" cy="13.8" rx="1.8" ry="2.6" fill="#ffd23a"/></g><g><path d="M22 4v1.6" stroke="#243058" stroke-width=".8"/><ellipse class="dqBulb" style="animation-delay:0.36s" cx="22" cy="7.4" rx="1.8" ry="2.6" fill="#5ae07a"/></g><g><path d="M31 6.5v1.6" stroke="#243058" stroke-width=".8"/><ellipse class="dqBulb" style="animation-delay:0.54s" cx="31" cy="9.9" rx="1.8" ry="2.6" fill="#5ab8ff"/></g><g><path d="M40 10.8v1.6" stroke="#243058" stroke-width=".8"/><ellipse class="dqBulb" style="animation-delay:0.72s" cx="40" cy="14.2" rx="1.8" ry="2.6" fill="#ff8af0"/></g><g><path d="M47 4.6v1.6" stroke="#243058" stroke-width=".8"/><ellipse class="dqBulb" style="animation-delay:0.90s" cx="47" cy="8" rx="1.8" ry="2.6" fill="#ffd23a"/></g><g><path d="M56 5.2v1.6" stroke="#243058" stroke-width=".8"/><ellipse class="dqBulb" style="animation-delay:1.08s" cx="56" cy="8.6" rx="1.8" ry="2.6" fill="#ff5a6a"/></g><g><path d="M64 10.4v1.6" stroke="#243058" stroke-width=".8"/><ellipse class="dqBulb" style="animation-delay:1.26s" cx="64" cy="13.8" rx="1.8" ry="2.6" fill="#5ae07a"/></g><g><path d="M72 4v1.6" stroke="#243058" stroke-width=".8"/><ellipse class="dqBulb" style="animation-delay:1.44s" cx="72" cy="7.4" rx="1.8" ry="2.6" fill="#5ab8ff"/></g><g><path d="M81 6.6v1.6" stroke="#243058" stroke-width=".8"/><ellipse class="dqBulb" style="animation-delay:1.62s" cx="81" cy="10" rx="1.8" ry="2.6" fill="#ff8af0"/></g><g><path d="M90 10.6v1.6" stroke="#243058" stroke-width=".8"/><ellipse class="dqBulb" style="animation-delay:1.80s" cx="90" cy="14" rx="1.8" ry="2.6" fill="#ffd23a"/></g><g><path d="M97 4v1.6" stroke="#243058" stroke-width=".8"/><ellipse class="dqBulb" style="animation-delay:1.98s" cx="97" cy="7.4" rx="1.8" ry="2.6" fill="#ff5a6a"/></g>',
  },
  {
    id: "lampions",
    g: "ceil",
    k: "ceil",
    n: "Lampions suspendus",
    p: 150,
    x: 62,
    w: 30,
    ar: 1.61,
    vb: "0 0 100 62",
    svg: '<defs><radialGradient id="DlpR" cx="0.45" cy="0.4" r="0.65"><stop offset="0" stop-color="#ffe0b0"/><stop offset="0.5" stop-color="#ff5a3a"/><stop offset="1" stop-color="#b81e1e"/></radialGradient><radialGradient id="DlpY" cx="0.45" cy="0.4" r="0.65"><stop offset="0" stop-color="#fff8d0"/><stop offset="0.5" stop-color="#ffc83a"/><stop offset="1" stop-color="#d8781a"/></radialGradient><radialGradient id="DlpP" cx="0.45" cy="0.4" r="0.65"><stop offset="0" stop-color="#ffe0f4"/><stop offset="0.5" stop-color="#ff6ab8"/><stop offset="1" stop-color="#b82a7a"/></radialGradient></defs><g class="dqSwing2" style="animation-delay:0s;transform-origin:14px 0"><path d="M14 0V8" stroke="#4a3a2a" stroke-width=".8"/><rect x="10" y="8" width="8" height="2" rx=".8" fill="#3a2a1a"/><ellipse class="dqFlick2" cx="14" cy="18" rx="9" ry="9.5" fill="url(#DlpR)"/><path d="M9 10.4Q6 18 9 25.6M14 10V26M19 10.4Q22 18 19 25.6" stroke="#000" stroke-opacity=".18" stroke-width=".7" fill="none"/><ellipse cx="11" cy="14" rx="2.4" ry="3.4" fill="#fff" opacity=".35"/><rect x="10" y="26.6" width="8" height="2" rx=".8" fill="#3a2a1a"/><path d="M14 28.6v6" stroke="url(#DlpR)" stroke-width="1.4"/></g><g class="dqSwing2" style="animation-delay:0.4s;transform-origin:38px 0"><path d="M38 0V20" stroke="#4a3a2a" stroke-width=".8"/><rect x="34" y="20" width="8" height="2" rx=".8" fill="#3a2a1a"/><ellipse class="dqFlick2" cx="38" cy="30" rx="9" ry="9.5" fill="url(#DlpY)"/><path d="M33 22.4Q30 30 33 37.6M38 22V38M43 22.4Q46 30 43 37.6" stroke="#000" stroke-opacity=".18" stroke-width=".7" fill="none"/><ellipse cx="35" cy="26" rx="2.4" ry="3.4" fill="#fff" opacity=".35"/><rect x="34" y="38.6" width="8" height="2" rx=".8" fill="#3a2a1a"/><path d="M38 40.6v6" stroke="url(#DlpY)" stroke-width="1.4"/></g><g class="dqSwing2" style="animation-delay:0.8s;transform-origin:62px 0"><path d="M62 0V12" stroke="#4a3a2a" stroke-width=".8"/><rect x="58" y="12" width="8" height="2" rx=".8" fill="#3a2a1a"/><ellipse class="dqFlick2" cx="62" cy="22" rx="9" ry="9.5" fill="url(#DlpP)"/><path d="M57 14.4Q54 22 57 29.6M62 14V30M67 14.4Q70 22 67 29.6" stroke="#000" stroke-opacity=".18" stroke-width=".7" fill="none"/><ellipse cx="59" cy="18" rx="2.4" ry="3.4" fill="#fff" opacity=".35"/><rect x="58" y="30.6" width="8" height="2" rx=".8" fill="#3a2a1a"/><path d="M62 32.6v6" stroke="url(#DlpP)" stroke-width="1.4"/></g><g class="dqSwing2" style="animation-delay:1.2s;transform-origin:86px 0"><path d="M86 0V22" stroke="#4a3a2a" stroke-width=".8"/><rect x="82" y="22" width="8" height="2" rx=".8" fill="#3a2a1a"/><ellipse class="dqFlick2" cx="86" cy="32" rx="9" ry="9.5" fill="url(#DlpR)"/><path d="M81 24.4Q78 32 81 39.6M86 24V40M91 24.4Q94 32 91 39.6" stroke="#000" stroke-opacity=".18" stroke-width=".7" fill="none"/><ellipse cx="83" cy="28" rx="2.4" ry="3.4" fill="#fff" opacity=".35"/><rect x="82" y="40.6" width="8" height="2" rx=".8" fill="#3a2a1a"/><path d="M86 42.6v6" stroke="url(#DlpR)" stroke-width="1.4"/></g>',
  },
];
const WATER = [
  { id: "nuit", n: "Nuit bleue", p: 0, c1: "#2f56a8", c2: "#0f2552" },
  { id: "turquoise", n: "Lagon turquoise", p: 75, c1: "#33bfd0", c2: "#0d5a78" },
  { id: "foret", n: "Eau de forêt", p: 160, c1: "#43b88a", c2: "#0f5648" },
  { id: "aurore", n: "Aurore violette", p: 380, c1: "#9a78e0", c2: "#35297a" },
];
(DECO_G.splice(DECO_G.findIndex((e) => "winter" === e[0]) + 1, 0, ["xmas", "Noël"]),
  ["sapin", "cadeaux"].forEach((e) => {
    const t = DECO.find((t) => t.id === e);
    t && ((t.g = "xmas"), (t.lk = 10));
  }),
  DECO.push(
    {
      id: "xsapin",
      g: "xmas",
      lk: 10,
      n: "Sapin de Noël décoré",
      p: 160,
      x: 70,
      w: 14,
      svg: '<defs><linearGradient id="DxsA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3aa860"/><stop offset="1" stop-color="#0e4a26"/></linearGradient><radialGradient id="DxsS" cx="0.4" cy="0.35" r="0.6"><stop offset="0" stop-color="#fff8c8"/><stop offset="1" stop-color="#ffc23a"/></radialGradient></defs><rect x="45" y="90" width="10" height="10" fill="#6a4a2a"/><path d="M50 20L84 92Q50 98 16 92Z" fill="url(#DxsA)"/><path d="M50 20 70 64Q50 68 30 64Z" fill="#3aa860" opacity=".45"/><path d="M24 80Q50 90 76 78M30 64Q50 72 70 62M36 48Q50 54 62 46" stroke="#ffd23a" stroke-width="1.6" fill="none"/><circle class="dqLite" style="animation-delay:0.00s" cx="40" cy="80" r="3" fill="#ff3a4a"/><circle class="dqLite" style="animation-delay:0.25s" cx="62" cy="76" r="2.8" fill="#ffd23a"/><circle class="dqLite" style="animation-delay:0.50s" cx="50" cy="62" r="2.6" fill="#5ab8ff"/><circle class="dqLite" style="animation-delay:0.75s" cx="36" cy="66" r="2.2" fill="#ffd23a"/><circle class="dqLite" style="animation-delay:1.00s" cx="60" cy="56" r="2.2" fill="#ff3a4a"/><circle class="dqLite" style="animation-delay:1.25s" cx="46" cy="46" r="2" fill="#ff8af0"/><circle class="dqLite" style="animation-delay:1.50s" cx="54" cy="36" r="1.8" fill="#ffd23a"/><circle class="dqLite" style="animation-delay:1.75s" cx="70" cy="86" r="2.6" fill="#5ab8ff"/><circle class="dqLite" style="animation-delay:2.00s" cx="28" cy="86" r="2.4" fill="#ff8af0"/><g class="dqStarS" style="transform-origin:50px 18px"><polygon points="50,10 52,15.25 57.61,15.53 53.23,19.05 54.7,24.47 50,21.4 45.3,24.47 46.77,19.05 42.39,15.53 48,15.25" fill="url(#DxsS)" stroke="#c8902a" stroke-width=".6"/></g>',
    },
    {
      id: "sucre",
      g: "xmas",
      lk: 10,
      n: "Sucres d’orge",
      p: 60,
      x: 86,
      w: 9,
      svg: '<g class="dqCane" style="animation-delay:0s;transform-origin:26px 100px"><g transform="rotate(-6 26 100)"><path d="M26 100V38Q26 24 38 24T50 38" stroke="#fffaf4" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M26 100V38Q26 24 38 24T50 38" stroke="#e8283a" stroke-width="9" fill="none" stroke-linecap="round" stroke-dasharray="5 5"/><path d="M24 98V38" stroke="#fff" stroke-opacity=".6" stroke-width="1.6" stroke-linecap="round"/></g></g><g class="dqCane" style="animation-delay:0.25s;transform-origin:50px 100px"><g transform="rotate(4 50 100)"><path d="M50 100V26Q50 12 62 12T74 26" stroke="#fffaf4" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M50 100V26Q50 12 62 12T74 26" stroke="#e8283a" stroke-width="9" fill="none" stroke-linecap="round" stroke-dasharray="5 5"/><path d="M48 98V26" stroke="#fff" stroke-opacity=".6" stroke-width="1.6" stroke-linecap="round"/></g></g><path class="dqTw" style="animation-delay:0.6s" d="M40 20l0.6 1.4 1.4 0.6 -1.4 0.6 -0.6 1.4 -0.6 -1.4 -1.4 -0.6 1.4 -0.6z" fill="#fff"/><g class="dqTS"><g style="animation-delay:0.00s"><path class="" d="M36 10.6l1.02 2.38 2.38 1.02 -2.38 1.02 -1.02 2.38 -1.02 -2.38 -2.38 -1.02 2.38 -1.02z" fill="#fff6c8"/></g><g style="animation-delay:0.09s"><path class="" d="M66 21l0.9 2.1 2.1 0.9 -2.1 0.9 -0.9 2.1 -0.9 -2.1 -2.1 -0.9 2.1 -0.9z" fill="#fff6c8"/></g></g>',
    },
    {
      id: "couronne",
      g: "xmas",
      lk: 10,
      n: "Couronne de Noël",
      p: 90,
      x: 8,
      w: 11,
      svg: '<defs><linearGradient id="DcuB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a0"/><stop offset="1" stop-color="#c8902a"/></linearGradient></defs><ellipse cx="80" cy="56" rx="9" ry="4.6" transform="rotate(60 80 56)" fill="#1e7a46"/><ellipse cx="78.19" cy="66.26" rx="9" ry="4.6" transform="rotate(80 78.19 66.26)" fill="#2a9a5a"/><ellipse cx="72.98" cy="75.28" rx="9" ry="4.6" transform="rotate(100 72.98 75.28)" fill="#145a32"/><ellipse cx="65" cy="81.98" rx="9" ry="4.6" transform="rotate(120 65 81.98)" fill="#1e7a46"/><ellipse cx="55.21" cy="85.54" rx="9" ry="4.6" transform="rotate(140 55.21 85.54)" fill="#2a9a5a"/><ellipse cx="44.79" cy="85.54" rx="9" ry="4.6" transform="rotate(160 44.79 85.54)" fill="#145a32"/><ellipse cx="35" cy="81.98" rx="9" ry="4.6" transform="rotate(180 35 81.98)" fill="#1e7a46"/><ellipse cx="27.02" cy="75.28" rx="9" ry="4.6" transform="rotate(200 27.02 75.28)" fill="#2a9a5a"/><ellipse cx="21.81" cy="66.26" rx="9" ry="4.6" transform="rotate(220 21.81 66.26)" fill="#145a32"/><ellipse cx="20" cy="56" rx="9" ry="4.6" transform="rotate(240 20 56)" fill="#1e7a46"/><ellipse cx="21.81" cy="45.74" rx="9" ry="4.6" transform="rotate(260 21.81 45.74)" fill="#2a9a5a"/><ellipse cx="27.02" cy="36.72" rx="9" ry="4.6" transform="rotate(280 27.02 36.72)" fill="#145a32"/><ellipse cx="35" cy="30.02" rx="9" ry="4.6" transform="rotate(300 35 30.02)" fill="#1e7a46"/><ellipse cx="44.79" cy="26.46" rx="9" ry="4.6" transform="rotate(320 44.79 26.46)" fill="#2a9a5a"/><ellipse cx="55.21" cy="26.46" rx="9" ry="4.6" transform="rotate(340 55.21 26.46)" fill="#145a32"/><ellipse cx="65" cy="30.02" rx="9" ry="4.6" transform="rotate(360 65 30.02)" fill="#1e7a46"/><ellipse cx="72.98" cy="36.72" rx="9" ry="4.6" transform="rotate(380 72.98 36.72)" fill="#2a9a5a"/><ellipse cx="78.19" cy="45.74" rx="9" ry="4.6" transform="rotate(400 78.19 45.74)" fill="#145a32"/><circle cx="78.66" cy="64.87" r="2.4" fill="#e8283a"/><circle cx="77.96" cy="64.17" r=".8" fill="#fff" opacity=".7"/><circle cx="64" cy="82.53" r="2.4" fill="#e8283a"/><circle cx="63.3" cy="81.83" r=".8" fill="#fff" opacity=".7"/><circle cx="41.13" cy="84.66" r="2.4" fill="#e8283a"/><circle cx="40.43" cy="83.96" r=".8" fill="#fff" opacity=".7"/><circle cx="23.47" cy="70" r="2.4" fill="#e8283a"/><circle cx="22.77" cy="69.3" r=".8" fill="#fff" opacity=".7"/><circle cx="21.34" cy="47.13" r="2.4" fill="#e8283a"/><circle cx="20.64" cy="46.43" r=".8" fill="#fff" opacity=".7"/><circle cx="36" cy="29.47" r="2.4" fill="#e8283a"/><circle cx="35.3" cy="28.77" r=".8" fill="#fff" opacity=".7"/><circle cx="58.87" cy="27.34" r="2.4" fill="#e8283a"/><circle cx="58.17" cy="26.64" r=".8" fill="#fff" opacity=".7"/><circle cx="76.53" cy="42" r="2.4" fill="#e8283a"/><circle cx="75.83" cy="41.3" r=".8" fill="#fff" opacity=".7"/><path d="M50 30C40 20 30 26 34 32 38 36 46 34 50 30ZM50 30C60 20 70 26 66 32 62 36 54 34 50 30Z" fill="#d8283a"/><path d="M48 31L42 46M52 31L58 46" stroke="#c8202e" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="30" r="3.4" fill="#b81e2e"/><g class="dqBell" style="transform-origin:50px 34px"><path d="M50 34V40" stroke="#c8902a" stroke-width="1"/><path d="M44 52Q44 42 50 41 56 42 56 52Z" fill="url(#DcuB)"/><circle cx="50" cy="53" r="1.6" fill="#a8781a"/></g><g class="dqTS"><g style="animation-delay:0.00s"><path class="" d="M30 21l0.9 2.1 2.1 0.9 -2.1 0.9 -0.9 2.1 -0.9 -2.1 -2.1 -0.9 2.1 -0.9z" fill="#fff6c8"/></g><g style="animation-delay:0.09s"><path class="" d="M70 22.6l1.02 2.38 2.38 1.02 -2.38 1.02 -1.02 2.38 -1.02 -2.38 -2.38 -1.02 2.38 -1.02z" fill="#fff6c8"/></g><g style="animation-delay:0.18s"><path class="" d="M50 11.4l0.78 1.82 1.82 0.78 -1.82 0.78 -0.78 1.82 -0.78 -1.82 -1.82 -0.78 1.82 -0.78z" fill="#fff6c8"/></g></g>',
    },
    {
      id: "traineau",
      g: "xmas",
      lk: 10,
      n: "Traîneau du Père Noël",
      p: 220,
      x: 30,
      w: 20,
      svg: '<defs><linearGradient id="DtrA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff5a5a"/><stop offset="1" stop-color="#a8121e"/></linearGradient><linearGradient id="DtrG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a0"/><stop offset="1" stop-color="#c8902a"/></linearGradient><linearGradient id="DtrS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c89a6a"/><stop offset="1" stop-color="#8a5a2a"/></linearGradient></defs><g class="dqSled" style="transform-origin:50px 100px"><path d="M6 92H84Q96 92 96 80" stroke="url(#DtrG)" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M20 92V82M66 92V82" stroke="url(#DtrG)" stroke-width="3"/><path d="M30 40C26 30 34 22 44 26 50 18 62 22 60 32 70 32 72 44 64 48H32Z" fill="url(#DtrS)"/><rect x="40" y="30" width="10" height="9" fill="#2a6ad8"/><rect x="44" y="30" width="2" height="9" fill="#ffd23a"/><path d="M14 82V56Q14 46 24 46H62L80 58Q86 62 86 70V82Z" fill="url(#DtrA)"/><path d="M18 52H62L78 62" stroke="url(#DtrG)" stroke-width="2" fill="none"/><path d="M20 72Q36 64 52 72T80 72" stroke="url(#DtrG)" stroke-width="1.6" fill="none"/><path d="M22 50Q40 48 58 50" stroke="#fff" stroke-opacity=".35" stroke-width="2" fill="none"/></g><g class="dqTS"><g style="animation-delay:0.00s"><path class="" d="M90 67l0.9 2.1 2.1 0.9 -2.1 0.9 -0.9 2.1 -0.9 -2.1 -2.1 -0.9 2.1 -0.9z" fill="#fff6c8"/></g><g style="animation-delay:0.09s"><path class="" d="M80 57.4l0.78 1.82 1.82 0.78 -1.82 0.78 -0.78 1.82 -0.78 -1.82 -1.82 -0.78 1.82 -0.78z" fill="#fff6c8"/></g><g style="animation-delay:0.18s"><path class="" d="M94 53.8l0.66 1.54 1.54 0.66 -1.54 0.66 -0.66 1.54 -0.66 -1.54 -1.54 -0.66 1.54 -0.66z" fill="#fff6c8"/></g></g>',
    },
    {
      id: "pain",
      g: "xmas",
      lk: 10,
      n: "Maison en pain d’épices",
      p: 180,
      x: 56,
      w: 15,
      svg: '<defs><linearGradient id="DpaA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8945a"/><stop offset="1" stop-color="#9a5a2a"/></linearGradient></defs><rect x="18" y="54" width="64" height="46" fill="url(#DpaA)"/><path d="M10 58 50 20 90 58" fill="#8a4a1e"/><path d="M10 58 50 20 90 58" stroke="#fffaf4" stroke-width="5" fill="none" stroke-linejoin="round" stroke-dasharray="7 3"/><circle cx="30" cy="46" r="2.4" fill="#ff3a5a"/><circle cx="50" cy="30" r="2.4" fill="#5ae07a"/><circle cx="70" cy="46" r="2.4" fill="#5ab8ff"/><circle cx="40" cy="38" r="2.4" fill="#ffd23a"/><circle cx="60" cy="38" r="2.4" fill="#ff3a5a"/><g><rect class="dqWin" style="animation-delay:0s" x="24" y="64" width="12" height="11" rx="1" fill="#ffd27a"/><path d="M24 64h12v11h-12zM30 64v11M24 69.5h12" stroke="#fffaf4" stroke-width="1.4" fill="none"/></g><g><rect class="dqWin" style="animation-delay:0.5s" x="64" y="64" width="12" height="11" rx="1" fill="#ffd27a"/><path d="M64 64h12v11h-12zM70 64v11M64 69.5h12" stroke="#fffaf4" stroke-width="1.4" fill="none"/></g><path d="M42 100V80Q50 72 58 80V100Z" fill="#6a3414"/><g class="dqDoor" style="transform-origin:42px 90px"><path d="M42 100V80Q50 72 58 80V100Z" fill="#c8784a"/><circle cx="55" cy="90" r="1.2" fill="#ffd23a"/></g><path d="M18 54h64" stroke="#fffaf4" stroke-width="3" stroke-dasharray="4 2"/><g class="dqTS"><g style="animation-delay:0.00s"><path class="" d="M30 27l0.9 2.1 2.1 0.9 -2.1 0.9 -0.9 2.1 -0.9 -2.1 -2.1 -0.9 2.1 -0.9z" fill="#fff6c8"/></g><g style="animation-delay:0.09s"><path class="" d="M70 27l0.9 2.1 2.1 0.9 -2.1 0.9 -0.9 2.1 -0.9 -2.1 -2.1 -0.9 2.1 -0.9z" fill="#fff6c8"/></g><g style="animation-delay:0.18s"><path class="" d="M50 8.6l1.02 2.38 2.38 1.02 -2.38 1.02 -1.02 2.38 -1.02 -2.38 -2.38 -1.02 2.38 -1.02z" fill="#fff6c8"/></g></g>',
    },
    {
      id: "xboule",
      g: "xmas",
      lk: 10,
      k: "float",
      n: "Boule de Noël géante",
      p: 110,
      x: 24,
      w: 10,
      b: 60,
      svg: '<defs><radialGradient id="DxbA" cx="0.36" cy="0.32" r="0.75"><stop offset="0" stop-color="#ffd0d4"/><stop offset="0.4" stop-color="#ff4a5a"/><stop offset="1" stop-color="#8a0a1e"/></radialGradient><linearGradient id="DxbG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a0"/><stop offset="1" stop-color="#c8902a"/></linearGradient><radialGradient id="DxbH" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ff8a8a" stop-opacity="0.4"/><stop offset="1" stop-color="#ff8a8a" stop-opacity="0"/></radialGradient></defs><circle class="dqGlow" cx="50" cy="58" r="46" fill="url(#DxbH)"/><g class="dqSpin2" style="transform-origin:50px 58px"><circle cx="50" cy="58" r="34" fill="url(#DxbA)"/><path d="M16 58Q50 70 84 58M18 46Q50 56 82 46M18 70Q50 82 82 70" stroke="url(#DxbG)" stroke-width="2.2" fill="none"/><polygon points="34,48.6 34.82,50.87 37.23,50.95 35.33,52.43 36,54.75 34,53.4 32,54.75 32.67,52.43 30.77,50.95 33.18,50.87" fill="#ffe9a0"/><polygon points="50,60.6 50.82,62.87 53.23,62.95 51.33,64.43 52,66.75 50,65.4 48,66.75 48.67,64.43 46.77,62.95 49.18,62.87" fill="#ffe9a0"/><polygon points="66,48.6 66.82,50.87 69.23,50.95 67.33,52.43 68,54.75 66,53.4 64,54.75 64.67,52.43 62.77,50.95 65.18,50.87" fill="#ffe9a0"/><polygon points="42,72.6 42.82,74.87 45.23,74.95 43.33,76.43 44,78.75 42,77.4 40,78.75 40.67,76.43 38.77,74.95 41.18,74.87" fill="#ffe9a0"/><polygon points="60,72.6 60.82,74.87 63.23,74.95 61.33,76.43 62,78.75 60,77.4 58,78.75 58.67,76.43 56.77,74.95 59.18,74.87" fill="#ffe9a0"/></g><ellipse cx="38" cy="42" rx="9" ry="5" fill="#fff" opacity=".55" transform="rotate(-30 38 42)"/><rect x="42" y="18" width="16" height="9" rx="2" fill="url(#DxbG)"/><path d="M46 18Q50 8 54 18" stroke="#c8902a" stroke-width="1.6" fill="none"/><g class="dqTS"><g style="animation-delay:0.00s"><path class="" d="M24 26.6l1.02 2.38 2.38 1.02 -2.38 1.02 -1.02 2.38 -1.02 -2.38 -2.38 -1.02 2.38 -1.02z" fill="#fff6c8"/></g><g style="animation-delay:0.09s"><path class="" d="M78 31l0.9 2.1 2.1 0.9 -2.1 0.9 -0.9 2.1 -0.9 -2.1 -2.1 -0.9 2.1 -0.9z" fill="#fff6c8"/></g><g style="animation-delay:0.18s"><path class="" d="M50 7.4l0.78 1.82 1.82 0.78 -1.82 0.78 -0.78 1.82 -0.78 -1.82 -1.82 -0.78 1.82 -0.78z" fill="#fff6c8"/></g></g>',
    },
    {
      id: "xetoile",
      g: "xmas",
      lk: 10,
      k: "float",
      n: "Étoile de Noël",
      p: 90,
      x: 62,
      w: 9,
      b: 70,
      svg: '<defs><radialGradient id="DxeG" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffe27a" stop-opacity="0.7"/><stop offset="1" stop-color="#ffd23a" stop-opacity="0"/></radialGradient></defs><circle class="dqGlow" cx="50" cy="50" r="46" fill="url(#DxeG)"/><g class="dqSpin3" style="transform-origin:50px 50px"><path d="M50 50L50 10L59.99 36.25Z" fill="#fff2a8"/><path d="M50 50L88.04 37.64L66.17 55.25Z" fill="#fff2a8"/><path d="M50 50L73.51 82.36L50 67Z" fill="#fff2a8"/><path d="M50 50L26.49 82.36L33.83 55.25Z" fill="#fff2a8"/><path d="M50 50L11.96 37.64L40.01 36.25Z" fill="#fff2a8"/><path d="M50 50L59.99 36.25L88.04 37.64Z" fill="#ffd23a"/><path d="M50 50L66.17 55.25L73.51 82.36Z" fill="#c8861a"/><path d="M50 50L50 67L26.49 82.36Z" fill="#ffd23a"/><path d="M50 50L33.83 55.25L11.96 37.64Z" fill="#c8861a"/><path d="M50 50L40.01 36.25L50 10Z" fill="#ffd23a"/></g><path class="dqTw" style="animation-delay:0.3s" d="M78 17.4l0.78 1.82 1.82 0.78 -1.82 0.78 -0.78 1.82 -0.78 -1.82 -1.82 -0.78 1.82 -0.78z" fill="#fff"/><path class="dqTw" style="animation-delay:1.2s" d="M22 28l0.6 1.4 1.4 0.6 -1.4 0.6 -0.6 1.4 -0.6 -1.4 -1.4 -0.6 1.4 -0.6z" fill="#fff"/><path class="dqTw" style="animation-delay:2s" d="M70 78.2l0.54 1.26 1.26 0.54 -1.26 0.54 -0.54 1.26 -0.54 -1.26 -1.26 -0.54 1.26 -0.54z" fill="#fff"/>',
    },
  ),
  FISH.push({
    id: "noel",
    n: "Poisson Père Noël",
    p: 520,
    sh: "zv_noel",
    b: "#e8434f",
    f: "#ffd2d2",
    sp: "#fff",
    sa: 1,
    sz: 1.12,
    lk: 20,
  }),
  FISH.push({
    id: "etoile",
    n: "Poisson étoile",
    p: 0,
    sh: "zv_etoile",
    b: "#7fe0ff",
    f: "#e8fbff",
    sc: "#8a6bff",
    sz: 1.25,
    gl: 100,
  }),
  FISH.push({
    id: "etoile2d",
    n: "Poisson étoile 2D",
    p: 0,
    sh: "zv_etoile2d",
    b: "#7a6bff",
    f: "#b9c8ff",
    sc: "#1a1040",
    sz: 1.25,
    xx: 1,
  }),
  FISH.push({
    id: "sapin",
    n: "Poisson sapin de Noël",
    p: 600,
    sh: "zv_sapin",
    b: "#2a8a46",
    f: "#d8f0c8",
    sz: 1.15,
    lk: 30,
  }),
  PEF.filter((e) => e.aq).forEach((e) => FISH.push({ ...e, p: 2e3, pe: 1 })),
  FISH.push({
    id: "cristalf",
    n: "Poisson cristal",
    p: 2e3,
    sh: "crys",
    b: "#bfe9ff",
    f: "#ffffff",
    sc: "#7fcfff",
    sp: "#ffffff",
    sz: 1.2,
    pe: 1,
  }),
  DECO.push(
    {
      id: "pontonpeche",
      n: "Ponton de pêche",
      p: 0,
      ch: 1,
      x: 6,
      w: 22,
      svg: '<defs><linearGradient id="DppA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b8844a"/><stop offset="1" stop-color="#6a4220"/></linearGradient><radialGradient id="DppG" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe9a0" stop-opacity=".9"/><stop offset="1" stop-color="#ffd23a" stop-opacity="0"/></radialGradient></defs><ellipse cx="50" cy="91" rx="40" ry="5" fill="#06201a" opacity=".4"/><rect x="18" y="52" width="7" height="39" rx="2" fill="#5a3a1c"/><rect x="74" y="52" width="7" height="39" rx="2" fill="#5a3a1c"/><rect x="8" y="44" width="84" height="10" rx="2" fill="url(#DppA)" stroke="#3a2210" stroke-width="1"/><path d="M22 44v10M36 44v10M50 44v10M64 44v10M78 44v10" stroke="#3a2210" stroke-width=".8"/><rect x="80" y="12" width="3" height="33" fill="#5a3a1c"/><ellipse class="dqGlow" cx="82" cy="26" rx="16" ry="16" fill="url(#DppG)"/><rect x="77" y="20" width="11" height="13" rx="2.5" fill="#ffd36b" stroke="#a8781a" stroke-width="1"/><path d="M77 20h11M82.5 14v6" stroke="#5a3a1c" stroke-width="1.4"/><path d="M20 44L42 14" stroke="#8a5a2a" stroke-width="2.2" stroke-linecap="round"/><path d="M42 14Q47 40 43 72" stroke="#e8ecff" stroke-width=".8" fill="none"/><circle cx="43" cy="73" r="2.2" fill="#d8282e"/><circle class="dqBub" style="animation-duration:3.8s" cx="30" cy="70" r="1.6" fill="#dffff0" fill-opacity=".6"/>',
    },
    {
      id: "roseaulum",
      n: "Roseaux lumineux",
      p: 0,
      ch: 1,
      x: 64,
      w: 16,
      svg: '<defs><radialGradient id="DrlG" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#bffff0"/><stop offset="1" stop-color="#3affd0" stop-opacity="0"/></radialGradient></defs><ellipse cx="50" cy="93" rx="30" ry="4" fill="#06201a" opacity=".35"/><g class="dqSw" style="transform-box:fill-box;transform-origin:50% 100%;animation-delay:-0s"><path d="M30 92Q24 60 21.0 26" stroke="#2f9a6a" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M26.4 70Q34.4 62 37.4 52" stroke="#4cc88a" stroke-width="1.6" fill="none" stroke-linecap="round"/><circle class="dqGlow" cx="21.0" cy="26" r="9" fill="url(#DrlG)"/><ellipse cx="21.0" cy="26" rx="3" ry="4.4" fill="#c8fff0" stroke="#5ff0c0" stroke-width=".8"/></g><g class="dqSw" style="transform-box:fill-box;transform-origin:50% 100%;animation-delay:-1s"><path d="M42 92Q45 60 46.5 16" stroke="#2f9a6a" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M43.8 70Q51.8 62 54.8 52" stroke="#4cc88a" stroke-width="1.6" fill="none" stroke-linecap="round"/><circle class="dqGlow" cx="46.5" cy="16" r="9" fill="url(#DrlG)"/><ellipse cx="46.5" cy="16" rx="3" ry="4.4" fill="#c8fff0" stroke="#5ff0c0" stroke-width=".8"/></g><g class="dqSw" style="transform-box:fill-box;transform-origin:50% 100%;animation-delay:-2s"><path d="M54 92Q52 60 51.0 22" stroke="#2f9a6a" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M52.8 70Q60.8 62 63.8 52" stroke="#4cc88a" stroke-width="1.6" fill="none" stroke-linecap="round"/><circle class="dqGlow" cx="51.0" cy="22" r="9" fill="url(#DrlG)"/><ellipse cx="51.0" cy="22" rx="3" ry="4.4" fill="#c8fff0" stroke="#5ff0c0" stroke-width=".8"/></g><g class="dqSw" style="transform-box:fill-box;transform-origin:50% 100%;animation-delay:-3s"><path d="M66 92Q72 60 75.0 30" stroke="#2f9a6a" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M69.6 70Q77.6 62 80.6 52" stroke="#4cc88a" stroke-width="1.6" fill="none" stroke-linecap="round"/><circle class="dqGlow" cx="75.0" cy="30" r="9" fill="url(#DrlG)"/><ellipse cx="75.0" cy="30" rx="3" ry="4.4" fill="#c8fff0" stroke="#5ff0c0" stroke-width=".8"/></g><g class="dqSw" style="transform-box:fill-box;transform-origin:50% 100%;animation-delay:-4s"><path d="M76 92Q85 60 89.5 40" stroke="#2f9a6a" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M81.4 70Q89.4 62 92.4 52" stroke="#4cc88a" stroke-width="1.6" fill="none" stroke-linecap="round"/><circle class="dqGlow" cx="89.5" cy="40" r="9" fill="url(#DrlG)"/><ellipse cx="89.5" cy="40" rx="3" ry="4.4" fill="#c8fff0" stroke="#5ff0c0" stroke-width=".8"/></g>',
    },
  ),
  DECO.push({
    id: "coffremarais",
    n: "Coffre des marais",
    p: 0,
    ch: 1,
    x: 30,
    w: 13,
    svg: '<defs><linearGradient id="DmaA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6a7a46"/><stop offset="1" stop-color="#2e3a1e"/></linearGradient><linearGradient id="DmaB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7f9455"/><stop offset="1" stop-color="#3f5028"/></linearGradient><radialGradient id="DmaG" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#9affc8" stop-opacity=".8"/><stop offset="1" stop-color="#3affb0" stop-opacity="0"/></radialGradient></defs><ellipse class="dqGlow" cx="50" cy="62" rx="44" ry="26" fill="url(#DmaG)"/><ellipse cx="50" cy="86" rx="38" ry="6" fill="#06201a" opacity=".45"/><path d="M14 52h72v31a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4z" fill="url(#DmaA)" stroke="#1e2a14" stroke-width="1.2"/><path d="M14 52Q14 27 50 27Q86 27 86 52Z" fill="url(#DmaB)" stroke="#1e2a14" stroke-width="1.2"/><rect x="14" y="50" width="72" height="5" fill="#46603a"/><path d="M30 28v24M70 28v24" stroke="#46603a" stroke-width="4"/><rect x="43" y="47" width="14" height="16" rx="3" fill="#d8c86a" stroke="#8a7a2a" stroke-width="1"/><circle cx="50" cy="53" r="2.4" fill="#2e3a1e"/><path d="M50 54v5" stroke="#2e3a1e" stroke-width="2" stroke-linecap="round"/><path d="M16 34q6-8 14-3q5-5 11-1q-2 7-11 6q-7 4-14-2zM60 30q6-5 12 0q6-3 11 4q-8 5-13 1q-6 1-10-5z" fill="#4ca85a"/><path d="M22 86q-2-10 2-14M78 86q3-9-1-14" stroke="#3a9a4a" stroke-width="3" stroke-linecap="round" fill="none"/><circle class="dqBub" style="animation-duration:3.6s" cx="38" cy="30" r="2" fill="#dffff0" fill-opacity=".6"/><circle class="dqBub" style="animation-duration:4.4s;animation-delay:1.2s" cx="62" cy="26" r="1.6" fill="#dffff0" fill-opacity=".6"/>',
  }),
  WATER.push({ id: "noel", n: "Nuit de Noël", p: 0, c1: "#1f7a4c", c2: "#7a1626", lk: 30 }));
const XMBG = `<div class="xmbg" aria-hidden="true"><svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMax meet"><defs><radialGradient id="xmau"><stop offset="0" stop-color="#7affc8" stop-opacity=".35"/><stop offset="1" stop-color="#7affc8" stop-opacity="0"/></radialGradient><radialGradient id="xmau2"><stop offset="0" stop-color="#ff8ab0" stop-opacity=".25"/><stop offset="1" stop-color="#ff8ab0" stop-opacity="0"/></radialGradient></defs>${[
  [20, 248, 46],
  [52, 252, 38],
  [300, 246, 52],
  [338, 250, 40],
  [372, 247, 48],
]
  .map(
    ([e, t, a]) =>
      `<path d="M${e} ${t - a}L${e - 0.38 * a} ${t}H${e + 0.38 * a}Z" fill="#0e3d26" opacity=".8"/><path d="M${e} ${t - a}L${e - 0.14 * a} ${t - 0.6 * a}H${e + 0.14 * a}Z" fill="#dfe9ff" opacity=".7"/>`,
  )
  .join(
    "",
  )}<g opacity=".8"><rect x="120" y="222" width="34" height="28" fill="#22366e"/><path d="M114 224 137 204 160 224Z" fill="#2c427e"/><path d="M114 224 137 204 160 224" stroke="#e8f0ff" stroke-width="4" fill="none"/><rect x="128" y="230" width="8" height="8" fill="#ffd36b"/><rect x="142" y="230" width="8" height="8" fill="#ffd36b"/><rect x="200" y="216" width="44" height="34" fill="#22366e"/><path d="M194 218 222 194 250 218Z" fill="#2c427e"/><path d="M194 218 222 194 250 218" stroke="#e8f0ff" stroke-width="4" fill="none"/><rect x="208" y="226" width="9" height="9" fill="#ffd36b"/><rect x="226" y="226" width="9" height="9" fill="#ffcf5a"/><rect x="238" y="200" width="6" height="12" fill="#22366e"/></g><path d="M0 252Q100 238 200 250T400 246V300H0Z" fill="#e9f1ff" opacity=".55"/></svg><i class="xms"></i><i class="xms b"></i></div>`;
function aqGLk(e) {
  return !!(
    e &&
    (e.xx || e.gl || e.ad || e.sl) &&
    !UNL() &&
    (e.xx || e.ad || (e.sl ? (0 | styRead().p) < e.sl : (0 | st.get("gf:lv", 0)) < e.gl))
  );
}
function aqXL(e) {
  return !!(e && e.lk && !UNL() && (0 | styRead().xp) < XM(e.lk));
}
const hs = (e) => [...e].reduce((e, t) => (31 * e + t.charCodeAt(0)) >>> 0, 7);
let FSN = 0;
const eyeS = (e, t, a = 3.3) =>
  `<circle cx="${e}" cy="${t}" r="${a}" fill="#fff"/><circle cx="${e + 0.8}" cy="${t + 0.1}" r="${0.52 * a}" fill="#1b1b2f"/><circle cx="${e + 1.5}" cy="${t - 0.8}" r="${0.2 * a}" fill="#fff"/>`;
const FSH = {
  neon: (e) => {
    const t = "fc" + ++FSN,
      a = "M77 25C76 19 67 14.5 53 14.5C39 14.5 27 18 18 24C27 31 39 34.5 53 34.5C67 34.5 76 31 77 25Z";
    return `<defs><clipPath id="${t}"><path d="${a}"/></clipPath></defs><path d="M20 24 3 9Q9 24 3 39Z" fill="${e.f}" opacity=".85"/><path d="M41 15 48 6 55 15Z" fill="${e.f}"/><path d="M33 33.5 40 42 52 34Z" fill="${e.f}"/><path d="M58 33 62 41 67 32Z" fill="${e.f}" opacity=".8"/><path d="M29 17.5C27 14 24 13.5 22 15.5L25 19Z" fill="${e.f}" opacity=".8"/><path d="${a}" fill="#e4f1ff"/><g clip-path="url(#${t})"><rect x="10" y="10" width="75" height="9" fill="#23408a"/><path d="M8 25H55Q50.5 31.5 45 38H8Z" fill="${e.sc}"/><path d="M24 19.5H76V25H26Z" fill="${e.b}"/><path d="M28 21.6H74" stroke="#d6f8ff" stroke-width="1.6" stroke-linecap="round"/></g><path d="M63 16.5Q58.5 25 63 33" stroke="#7a8cb5" stroke-width="1" fill="none" opacity=".5"/>${eyeS(68, 22.6, 3.3)}`;
  },
  danio: (e) => {
    const t = "fc" + ++FSN,
      a = "M79 25C78 20 69 16.5 55 16.5C41 16.5 27 19 15 24.5C27 29.5 41 33.5 55 33.5C69 33.5 78 30 79 25Z",
      s = "M17 24.5 1 8Q8 24.5 1 41Z",
      n = [19.3, 22.4, 25.5, 28.6]
        .map((t) => `<path d="M-2 ${t}H80" stroke="${e.sc}" stroke-width="1.9" stroke-linecap="round"/>`)
        .join("");
    return `<defs><clipPath id="${t}"><path d="${a}"/><path d="${s}"/></clipPath></defs><path d="M30 17.5 36 8 47 17.5Z" fill="${e.f}"/><path d="M29 32.5 35 41 53 33.5Z" fill="${e.f}"/><path d="M60 33 64 40 68 32.5Z" fill="${e.f}" opacity=".8"/><path d="${s}" fill="${e.f}"/><path d="${a}" fill="${e.b}"/><g clip-path="url(#${t})">${n}</g><path d="M78 26Q82 28 83 31M78 24.5Q83 24.5 84 27.5" stroke="${e.f}" stroke-width=".9" fill="none" stroke-linecap="round"/><path d="M64 17.5Q60 25 64 32.5" stroke="#8a97bd" stroke-width="1" fill="none" opacity=".5"/>${eyeS(69, 22.4, 3)}`;
  },
  cardinal: (e) => {
    const t = "fc" + ++FSN,
      a = "M78 25C77 17 67 12.5 53 12.5C39 12.5 27 17 18 24C27 31.5 39 36.5 53 36.5C67 36.5 77 33 78 25Z";
    return `<defs><clipPath id="${t}"><path d="${a}"/></clipPath></defs><path d="M20 24 3 11Q8.5 24 3 37Z" fill="${e.f}" opacity=".9"/><path d="M38 13 46 1 55 13Z" fill="${e.f}"/><path d="M31 35.5 41 45 57 36.5Z" fill="${e.f}"/><path d="M60 35 65 43 69 34Z" fill="${e.f}" opacity=".85"/><ellipse cx="25.5" cy="17" rx="5" ry="2.6" fill="${e.f}" opacity=".8"/><path d="${a}" fill="${e.b}"/><g clip-path="url(#${t})"><rect x="10" y="9" width="75" height="9.5" fill="#1f2f7d"/><path d="M22 18.5H80V23.5H24Z" fill="${e.sc}"/><path d="M26 20.6H77" stroke="#c8e9ff" stroke-width="1.5" stroke-linecap="round"/><ellipse cx="48" cy="36" rx="30" ry="5" fill="#ff93a6" opacity=".45"/></g><path d="M64 14.5Q59 24.5 64 35" stroke="#a0243c" stroke-width="1" fill="none" opacity=".45"/>${eyeS(69, 22.2, 3.4)}`;
  },
  betta: (e) => {
    const t = (e, t) => `${(34 + t * Math.cos(e)).toFixed(1)} ${(25 + t * Math.sin(e)).toFixed(1)}`,
      a = [],
      s = [];
    for (let e = 0; e < 7; e++) {
      const n = Math.PI + (((124 * e) / 6 - 62) * Math.PI) / 180,
        o = 0 === e || 6 === e ? 25 : 1 === e || 5 === e ? 29 : 32;
      if ((s.push(`M34 25L${t(n, o)}`), a.push(t(n, o)), e < 6)) {
        const s = Math.PI + (((124 * (e + 0.5)) / 6 - 62) * Math.PI) / 180;
        a.push(t(s, 0.58 * o));
      }
    }
    return `<path d="M34 25L${a.join("L")}Z" fill="${e.f}" opacity=".95"/><path d="${s.join("")}" stroke="${e.b}" stroke-width="1.3" stroke-linecap="round" opacity=".85"/><path d="M60 22 57 3 52 10 47 -1 43 9 38 2 36 24Z" fill="${e.f}"/><path d="M57 28 55 47 50 40 46 51 42 41 38 47 36 26Z" fill="${e.f}"/><path d="M65 33Q71 43 66 53M61 33.5Q64 44 59 52" stroke="${e.b}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M77 26C75 19 67 16 57 16 47 16 39 19.5 33 25 39 30.5 47 34 57 34 67 34 75 32 77 26Z" fill="${e.b}"/><path d="M69 19.5C62 16.5 52 17 44 21.5" stroke="#d2c0ff" stroke-width="1.8" fill="none" stroke-linecap="round" opacity=".55"/><path d="M48 27Q55 31 63 29M44 24Q50 28 56 26" stroke="#5d37c2" stroke-width="1" fill="none" opacity=".35"/>${eyeS(69, 23.3, 3.3)}`;
  },
  gourami: (e) => {
    const t = "fc" + ++FSN,
      a = "M71 27C69 18 59 10.5 46 10.5C33 10.5 24 17 22 26C24 35 33 42.5 46 42.5C59 42.5 69 36 71 27Z";
    let s = "";
    for (let e = 0; e < 6; e++)
      for (let t = 0; t < 9; t++)
        s += `<circle cx="${22 + 6 * t + (e % 2 ? 3 : 0)}" cy="${(14 + 5.3 * e).toFixed(1)}" r="1.25"/>`;
    return `<defs><clipPath id="${t}"><path d="${a}"/></clipPath></defs><path d="M25 26C17 17 9 14 4 18 8 24 8 29 4 35 9 39 18 36 25 28Z" fill="${e.f}"/><path d="M28 13C30 5 38 2 44 3 47 6 49 9 50 11Z" fill="${e.f}"/><path d="M31 38Q27 46 35 47 37 52 44 49 50 53 54 44 58 42 61 38Z" fill="${e.f}"/><path d="M60 37C66 44 64 51 72 55M57 38C60 46 56 51 62 55" stroke="${e.sp2 || "#ffcf7a"}" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="${a}" fill="${e.b}"/><g clip-path="url(#${t})"><g fill="${e.sp}" opacity=".85">${s}</g><path d="M72 27.5H24" stroke="#17756d" stroke-width="2.4" stroke-linecap="round" opacity=".75"/><circle cx="31" cy="27.5" r="2.9" fill="#17756d" opacity=".85"/><ellipse cx="46" cy="14.5" rx="18" ry="3" fill="#fff" opacity=".18"/></g><path d="M65 14Q59.5 26 65 39" stroke="#17756d" stroke-width="1" fill="none" opacity=".4"/>${eyeS(64.5, 21.5, 3.4)}`;
  },
};
function veilSVG(e) {
  return `<svg viewBox="-6 -8 90 64" aria-hidden="true"><path d="M30 25C20 6 6 -2 0 6 -3 14 2 22 5 26 1 31 -3 40 3 47 9 53 22 46 30 25Z" fill="${e.f}"/><path d="M28 25C19 12 10 6 4 9M28 25C16 22 8 22 5 26M28 25C18 33 10 41 5 45" stroke="${e.f2}" stroke-width="1.6" fill="none" opacity=".75"/><path d="M36 18C38 -4 60 -8 66 16Z" fill="${e.f}"/><path d="M36 32C38 54 60 58 66 34Z" fill="${e.f}"/><ellipse cx="50" cy="25" rx="22" ry="11" fill="${e.b}"/><ellipse cx="50" cy="21" rx="13" ry="2.6" fill="#fff" opacity=".2"/><circle cx="62" cy="22" r="3.3" fill="#fff"/><circle cx="63" cy="22" r="1.7" fill="#1b1b2f"/></svg>`;
}
function fishSVG(e) {
  if ("veil" === e.sh) return veilSVG(e);
  if (FSH[e.sh]) return `<svg viewBox="0 -8 84 64" aria-hidden="true">${FSH[e.sh](e)}</svg>`;
  const t = e.sh;
  let a = 44,
    s = 25,
    n = 24,
    o = 14;
  ("long" === t && ((n = 28), (o = 9), (s = 24)),
    "tall" === t && ((s = 28), (n = 16), (o = 18)),
    "round" === t && ((a = 46), (s = 26), (n = 20), (o = 19)));
  const i = a - n + 3,
    r = "round" === t ? 16 : 18;
  let l = `<path d="M${i} ${s}L${i - r} ${s - 0.95 * o}Q${i - 0.55 * r} ${s} ${i - r} ${s + 0.95 * o}Z" fill="${e.f}"/>`;
  ((l +=
    "tall" === t
      ? `<path d="M${a - 9} ${s - o + 4}L${a + 2} ${s - o - 15}L${a + 11} ${s - o + 6}Z" fill="${e.f}"/><path d="M${a - 7} ${s + o - 4}L${a + 1} ${s + o + 13}L${a + 9} ${s + o - 4}Z" fill="${e.f}"/>`
      : `<path d="M${a - 9} ${s - o + 3}Q${a} ${s - o - 10} ${a + 11} ${s - o + 3}Z" fill="${e.f}"/>`),
    (l += `<ellipse cx="${a}" cy="${s}" rx="${n}" ry="${o}" fill="${e.b}"/>`));
  const c = (e) => o * Math.sqrt(Math.max(0, 1 - (e / n) ** 2)),
    d = (e) => n * Math.sqrt(Math.max(0, 1 - (e / o) ** 2));
  if (
    ("v" === e.st &&
      [-9, 0, 9].forEach((t) => {
        const n = c(t) - 1;
        l += `<rect x="${a + t - 2.4}" y="${s - n}" width="4.8" height="${2 * n}" rx="2" fill="${e.sc}" opacity=".92"/>`;
      }),
    "h" === e.st)
  ) {
    const t = d(3) - 4;
    l += `<rect x="${a - t}" y="${s + 1}" width="${2 * t}" height="4.5" rx="2.2" fill="${e.sc}"/>`;
  }
  return (
    "hh" === e.st &&
      [-3.5, 3.5].forEach((t) => {
        const n = d(t) - 4;
        l += `<rect x="${a - n}" y="${s + t - 1.6}" width="${2 * n}" height="3.2" rx="1.6" fill="${e.sc}"/>`;
      }),
    e.sp &&
      [
        [-6, -3, 2.3],
        [4, 4, 2.1],
        [10, -5, 1.9],
        [-13, 4, 1.8],
        [-1, 8, 1.6],
      ].forEach(([t, n, i]) => {
        l += `<circle cx="${a + t}" cy="${s + (n * o) / 14}" r="${i}" fill="${e.sp}" opacity=".85"/>`;
      }),
    (e.hk || e.gk) &&
      [
        [-12, 6, e.gk ? "#1d2b5a" : "#d63a52"],
        [-7, 3.2, "#fff"],
        [-2, 6, e.gk ? "#1d2b5a" : "#d63a52"],
      ].forEach(([e, t, n]) => {
        const o = Math.min(c(e - t / 2), c(e + t / 2)) - 0.6;
        l += `<rect x="${a + e - t / 2}" y="${s - o}" width="${t}" height="${2 * o}" fill="${n}" opacity=".95"/>`;
      }),
    (l += `<ellipse cx="${a}" cy="${s - 0.4 * o}" rx="${0.6 * n}" ry="${0.2 * o}" fill="#fff" opacity=".18"/><circle cx="${a + 0.55 * n}" cy="${s - 0.2 * o}" r="3.3" fill="#fff"/><circle cx="${a + 0.6 * n}" cy="${s - 0.2 * o}" r="1.7" fill="#1b1b2f"/>`),
    e.sa &&
      (l += `<path d="M${a + 0.05 * n} ${s - 0.72 * o}Q${a + 0.2 * n} ${s - o - 20} ${a - 0.35 * n} ${s - o - 14}Q${a + 0.5 * n} ${s - o - 12} ${a + 0.9 * n} ${s - 0.5 * o}Z" fill="#d6363f"/><path d="M${a} ${s - 0.7 * o}Q${a + 0.5 * n} ${s - 1.05 * o} ${a + 0.95 * n} ${s - 0.48 * o}" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="${a - 0.38 * n}" cy="${s - o - 13}" r="3.8" fill="#fff"/><g fill="#fff"><circle cx="${a + 0.92 * n}" cy="${s + 0.18 * o}" r="3.6"/><circle cx="${a + 0.78 * n}" cy="${s + 0.42 * o}" r="4.4"/><circle cx="${a + 0.56 * n}" cy="${s + 0.55 * o}" r="4.2"/><circle cx="${a + 0.36 * n}" cy="${s + 0.5 * o}" r="3.4"/></g>`),
    e.gk &&
      (l +=
        '<circle cx="36" cy="38" r="6.5" fill="#c8913b" stroke="#7a5420" stroke-width="1.2"/><path d="M31 36Q36 31 41 36" stroke="#7a5420" stroke-width="1" fill="none"/><path class="gstk" d="M55 30L64 46" stroke="#c98a4b" stroke-width="3" stroke-linecap="round"/><path class="gstk" d="M62 42L66 49" stroke="#2a2a3a" stroke-width="5" stroke-linecap="round"/><path class="gstk" d="M65 50L80 51" stroke="#2a2a3a" stroke-width="4.5" stroke-linecap="round"/><path d="M53.6 13.6C52.6 7 57.5 5 62.5 5.2C67.5 5.6 70.8 11 72 20.6C69.5 18.6 66 17 64.5 16.1C61 14.6 57 14 53.6 13.6Z" fill="#f4f6fa" stroke="#9aa3b5" stroke-width=".9"/><path d="M62.6 5.4Q66 10.5 64.8 16" stroke="#2a4fa8" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M53.6 13.6C57 14 61 14.6 64.5 16.1C66 17 69.5 18.6 72 20.6" stroke="#c3cbdd" stroke-width="2.4" fill="none" stroke-linecap="round"/><ellipse cx="57" cy="15.6" rx="2" ry="2.6" transform="rotate(-18 57 15.6)" fill="#dfe4ee" stroke="#9aa3b5" stroke-width=".7"/><path d="M60.5 17.4L73.4 19.6Q74.6 27 70.6 31.4Q65.6 34.4 61 31Z" fill="rgba(255,255,255,.12)" stroke="#9aa3b5" stroke-width=".9"/><path d="M64 17.9V32.4M67.4 18.5V33M70.6 19.2V31.6M61 22.2H74M61 26.2H74M61.6 30H71.4" stroke="#6f7890" stroke-width=".8" fill="none"/>'),
    e.hk &&
      (l +=
        '<path d="M52 30L70 49" stroke="#c98a4b" stroke-width="3" stroke-linecap="round"/><path d="M70 49L80 50" stroke="#3a2a1a" stroke-width="4" stroke-linecap="round"/><ellipse cx="82" cy="54" rx="3.2" ry="1.6" fill="#1b1b2f"/><path d="M53.8 11.8C52.2 5.6 57.4 3.4 62.8 3.8C68.2 4.2 71.4 9 72.4 18.2C68 15.4 62 13.4 53.8 11.8Z" fill="#1f4fbf"/><path d="M57 5.4Q55.6 9 55.6 12.4M60.5 4.4Q59.6 8.6 60 13.4M64.2 4.6Q64.2 9.6 65 14.4M67.8 6.2Q68.6 10.6 69.6 16" stroke="#6f93ff" stroke-width=".7" fill="none" opacity=".55"/><path d="M53.4 12.6C57 13.2 61 14 64.5 15.2C67.6 16.4 70.2 18.2 72 20.2" stroke="#eef3ff" stroke-width="3.6" fill="none" stroke-linecap="round"/><path d="M56 11.6L56.6 14.2M59.4 12.4L59.8 15M62.8 13.2L63 15.8M66.2 14.6L66 17.2M69.2 16.4L68.6 18.8" stroke="#b9c8f0" stroke-width=".8" stroke-linecap="round"/><circle cx="63" cy="3" r="2.7" fill="#eef3ff"/><circle cx="62.2" cy="2.3" r=".7" fill="#fff"/><circle cx="64" cy="3.6" r=".6" fill="#c9d6f6"/>'),
    `<svg viewBox="0 -8 84 64" aria-hidden="true">${l}</svg>`
  );
}
function aqRead() {
  const e = st.get("aq", null);
  if (e && e.f && "object" == typeof e.f) {
    if (
      ((e.d = e.d || {}),
      (e.p = e.p || {}),
      (e.pl = e.pl || {}),
      (e.ws = e.ws || ["nuit"]),
      (e.w = e.w || "nuit"),
      !(e.fc > 0 && e.wc > 0))
    ) {
      const t = Date.now();
      (e.fc > 0 || (e.fc = t), e.wc > 0 || (e.wc = t), st.set("aq", e));
    }
    return e;
  }
  const t = Date.now();
  return { f: {}, d: {}, p: {}, ws: ["nuit"], w: "nuit", at: 0, fc: t, wc: t };
}
(Object.assign(FSH, {
  globe: (e) => {
    let t = "";
    for (let a = 0; a < 360; a += 22) {
      if (a > -1 && (a < 24 || a > 336)) continue;
      const s = (a * Math.PI) / 180,
        n = Math.cos(s),
        o = Math.sin(s),
        i = 0.14;
      t += `<path d="M${(44 + 19.5 * Math.cos(s - i)).toFixed(1)} ${(26 + 17.5 * Math.sin(s - i)).toFixed(1)}L${(44 + 27.5 * n).toFixed(1)} ${(26 + 25.5 * o).toFixed(1)}L${(44 + 19.5 * Math.cos(s + i)).toFixed(1)} ${(26 + 17.5 * Math.sin(s + i)).toFixed(1)}Z" fill="${e.sc}"/>`;
    }
    return `<path d="M24 26 11 15Q15 26 11 37Z" fill="${e.sc}"/>${t}<ellipse cx="44" cy="26" rx="21" ry="19" fill="${e.b}"/><path d="M24 31Q44 54 64 31Q62 45 44 45Q26 45 24 31Z" fill="${e.f}"/><g fill="${e.sp}" opacity=".9"><circle cx="34" cy="16" r="2.2"/><circle cx="42" cy="12.5" r="1.8"/><circle cx="31" cy="25" r="1.8"/><circle cx="40" cy="21" r="1.6"/><circle cx="48" cy="15" r="2"/></g><path d="M42 31Q36 28 34 35Q38 38 44 35Z" fill="${e.sc}" opacity=".9"/><ellipse cx="65" cy="30" rx="3" ry="2.4" fill="#d9573a"/><ellipse cx="65.4" cy="30" rx="1.3" ry="1" fill="#6b1d12"/><circle cx="55" cy="20" r="5.6" fill="#fff"/><circle cx="56.4" cy="20.3" r="3" fill="#1b1b2f"/><circle cx="57.4" cy="19" r="1.1" fill="#fff"/>`;
  },
  hippo: (e) =>
    `<path d="M49 20Q40 22 49 31Z" fill="${e.f}" opacity=".85"/><path d="M57 34C62 41 59 50 50 48C44 46 44 40 48 38" fill="none" stroke="${e.b}" stroke-width="6" stroke-linecap="round"/><path d="M54 8C61 8 63 14 59 19C54 25 53 31 58 36" fill="none" stroke="${e.b}" stroke-width="12" stroke-linecap="round"/><path d="M52 16C58 22 59 30 56 34" fill="none" stroke="${e.f}" stroke-width="4" stroke-linecap="round" opacity=".8"/><path d="M56 21l7 1.6M55.5 26l7.4 1M56 31l6.6-.4" stroke="${e.sc}" stroke-width="1.6" stroke-linecap="round"/><circle cx="53" cy="4" r="8" fill="${e.b}"/><path d="M58 4L72 6.6Q75 8 72.6 10L58 9.6Z" fill="${e.b}"/><path d="M46 -1 44 -7 50 -3 52 -9 55 -3Z" fill="${e.sc}"/><circle cx="55" cy="2.4" r="2.6" fill="#fff"/><circle cx="55.6" cy="2.6" r="1.4" fill="#1b1b2f"/><circle cx="56.1" cy="2" r=".5" fill="#fff"/><path d="M47 38C44 39 41 37 41 34" fill="none" stroke="${e.sc}" stroke-width="2.4" stroke-linecap="round"/>`,
  manta: (e) =>
    `<path d="M40 24 1 24" stroke="${e.sc}" stroke-width="2" stroke-linecap="round"/><path d="M80 24C70 12 50 1 22 4 31 13 36 20 38 24 36 28 31 35 22 44 50 47 70 36 80 24Z" fill="${e.b}"/><path d="M76 24C66 17 52 11 40 11 46 17 49 21 50 24 49 27 46 31 40 37 52 37 66 31 76 24Z" fill="${e.f}" opacity=".35"/><g fill="${e.sp}" opacity=".85"><circle cx="58" cy="17" r="1.8"/><circle cx="48" cy="12.5" r="1.5"/><circle cx="60" cy="31" r="1.8"/><circle cx="48" cy="35.5" r="1.5"/><circle cx="68" cy="24" r="1.4"/></g><path d="M80 24 86 20.5 83 24 86 27.5Z" fill="${e.sc}"/><circle cx="73" cy="16.5" r="2.6" fill="#fff"/><circle cx="73.7" cy="16.7" r="1.4" fill="#1b1b2f"/><circle cx="73" cy="31.5" r="2.6" fill="#fff"/><circle cx="73.7" cy="31.7" r="1.4" fill="#1b1b2f"/>`,
  tortue: (e) =>
    `<path d="M25 33Q14 41 9 50Q23 48 33 38Z" fill="${e.sc}"/><path d="M22 28 11 30 22 33Z" fill="${e.sc}"/><path d="M52 33Q66 36 72 54Q55 50 46 37Z" fill="${e.sc}"/><path d="M60 28Q66 26 70 28" fill="none" stroke="${e.sc}" stroke-width="7" stroke-linecap="round"/><ellipse cx="75" cy="25" rx="9.5" ry="7" fill="${e.sc}"/><circle cx="78.4" cy="22.6" r="2.7" fill="#fff"/><circle cx="79.2" cy="22.8" r="1.4" fill="#1b1b2f"/><path d="M79 29.6Q82 30.4 84 29" stroke="#2f7a4a" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M19 32C19 12 33 5 47 6 61 8 70 17 69 32Z" fill="${e.b}"/><path d="M19 32H69Q66 40 44 40 22 40 19 32Z" fill="${e.f}"/><g fill="none" stroke="#2f7a4a" stroke-width="1.6" stroke-linejoin="round" opacity=".75"><path d="M44 12 53 17V26L44 31 35 26V17Z"/><path d="M53 17 62 15M53 26 63 28M44 31V32M35 26 26 28M35 17 27 15M44 12V7"/></g><path d="M30 12Q40 5 52 6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" opacity=".28"/>`,
  meduse: (e) =>
    `<g fill="none" stroke-linecap="round"><path d="M52 15Q44 10 37 16T21 14" stroke="${e.sc}" stroke-width="1.6" opacity=".8"/><path d="M52 33Q44 38 37 32T21 36" stroke="${e.sc}" stroke-width="1.6" opacity=".8"/><path d="M52 19Q42 24 33 18T10 22" stroke="${e.f}" stroke-width="3.4"/><path d="M52 24Q42 30 33 24T6 28" stroke="${e.f}" stroke-width="3"/><path d="M52 29Q42 35 33 30T14 34" stroke="${e.f}" stroke-width="3.4"/></g><path d="M50 3C71 3 83 14 83 24 83 34 71 45 50 45 56 35 56 13 50 3Z" fill="${e.b}" opacity=".9"/><ellipse cx="68" cy="24" rx="9" ry="13" fill="${e.f}" opacity=".5"/><path d="M52 6Q60 5 68 9" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" opacity=".5"/><g fill="${e.sc}" opacity=".85"><circle cx="61" cy="14" r="1.6"/><circle cx="62" cy="34" r="1.6"/><circle cx="58" cy="24" r="1.4"/></g><circle cx="72" cy="20" r="2" fill="#4a2f7a"/><circle cx="72" cy="28" r="2" fill="#4a2f7a"/><circle cx="72.6" cy="19.3" r=".7" fill="#fff"/><circle cx="72.6" cy="27.3" r=".7" fill="#fff"/><path d="M74 23.4Q75.4 25 74 26.6" stroke="#4a2f7a" stroke-width="1.1" fill="none" stroke-linecap="round"/>`,
}),
  (FSH.koiciel = (e) =>
    '<defs><linearGradient id="KcB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#f4f1ff"/><stop offset="1" stop-color="#d9d2f6"/></linearGradient><linearGradient id="KcT" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#ffe9b0" stop-opacity=".95"/><stop offset=".55" stop-color="#ffc66a" stop-opacity=".75"/><stop offset="1" stop-color="#fff3d6" stop-opacity=".25"/></linearGradient><radialGradient id="KcO" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#ff9a5a"/><stop offset=".7" stop-color="#ff5a2a"/><stop offset="1" stop-color="#e0401a"/></radialGradient><radialGradient id="KcG"><stop offset="0" stop-color="#fff0b0" stop-opacity=".45"/><stop offset="1" stop-color="#fff0b0" stop-opacity="0"/></radialGradient><pattern id="KcS" width="3" height="2.6" patternUnits="userSpaceOnUse"><path d="M0 2.6a1.5 1.5 0 0 1 3 0M-1.5 1.3a1.5 1.5 0 0 1 3 0M1.5 1.3a1.5 1.5 0 0 1 3 0" stroke="#b9acec" stroke-width=".26" fill="none" opacity=".35"/></pattern><clipPath id="KcK"><path d="M78 26C77 16 64 12.5 52 12.5C41 12.5 33 20 29 22L29 30C33 32 41 39.5 52 39.5C64 39.5 77 35 78 26Z"/></clipPath><radialGradient id="KcI" cx=".45" cy=".4" r=".6"><stop offset="0" stop-color="#ffe9a8"/><stop offset=".7" stop-color="#c88a2a"/><stop offset="1" stop-color="#3a2410"/></radialGradient></defs><ellipse cx="48" cy="26" rx="44" ry="30" fill="url(#KcG)"/><g class="zvW tFlare"><g class="zvFlow" style="animation-duration:2.4s;transform-origin:100% 50%"><path d="M31 22C20 8 7 -2 0 3C6 12 4 20 9 26C4 32 6 40 0 49C7 54 20 44 31 30Z" fill="url(#KcT)"/><g stroke="#fff6d8" stroke-width=".5" opacity=".7" fill="none" stroke-linecap="round"><path d="M30 26Q15 14 1 4"/><path d="M30 26Q17 20 4 15"/><path d="M30 26Q19 26 8 26"/><path d="M30 26Q17 32 4 37"/><path d="M30 26Q15 38 1 48"/></g></g><g class="zvRip" style="animation-duration:2.6s;transform-origin:30% 100%"><path d="M44 14C47 4 54 1 61 3C62 8 62 12 62 15Z" fill="url(#KcT)"/></g><g class="zvRip" style="animation-duration:2.6s;animation-delay:.7s;transform-origin:30% 0"><path d="M46 37C49 45 54 47 58 46C58 42 58 40 57 37Z" fill="url(#KcT)"/><path d="M64 37C66 42 69 43 71 42C70 40 69 38 68 36Z" fill="url(#KcT)"/></g><path d="M78 26C77 16 64 12.5 52 12.5C41 12.5 33 20 29 22L29 30C33 32 41 39.5 52 39.5C64 39.5 77 35 78 26Z" fill="url(#KcB)"/><g clip-path="url(#KcK)"><rect x="28" y="10" width="52" height="32" fill="url(#KcS)"/><path d="M40 12C46 8 58 9 62 15C58 20 48 21 41 18Z" fill="url(#KcO)"/><path d="M33 30C38 27 46 29 47 34C44 39 37 38 33 35Z" fill="url(#KcO)"/><path d="M60 31C64 29 69 30 70 33C67 36 62 36 60 34Z" fill="url(#KcO)" opacity=".9"/><path d="M66 14C70 13 74 16 75 19C71 19 68 18 66 14Z" fill="#ffd27a" opacity=".9"/></g><path d="M68 33Q72 34 76 30" stroke="#b9acec" stroke-width=".5" fill="none" opacity=".6"/><circle cx="71" cy="22.5" r="2.2" fill="#15151f"/><circle cx="71" cy="22.5" r="1.6" fill="url(#KcI)"/><circle cx="71.6" cy="21.9" r=".55" fill="#fff"/><g class="zvMo"><ellipse cx="77.6" cy="26.6" rx="1" ry="1.5" fill="#c86a5a"/></g><path d="M77 28q5 3 6 9M76.5 28.5q2 5 0 9" stroke="#ffd27a" stroke-width=".9" fill="none" stroke-linecap="round"/><ellipse class="zvSheen" cx="58" cy="17" rx="10" ry="1.6" fill="#fff" transform="rotate(-6 58 17)"/><g fill="#ffe9a8"><path d="M36 4l.9 2 2 .9-2 .9-.9 2-.9-2-2-.9 2-.9z"/><path d="M84 8l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7z"/><path d="M60 47l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z"/></g></g>'),
  (FSH.lumignon = (e) =>
    '<defs><radialGradient id="lmB" cx=".38" cy=".3" r=".95"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="#ece6ff"/><stop offset="1" stop-color="#b9acec"/></radialGradient><radialGradient id="lmS" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#fff6c2"/><stop offset="1" stop-color="#ffc83d"/></radialGradient><radialGradient id="lmG"><stop offset="0" stop-color="#fff3c0" stop-opacity=".9"/><stop offset="1" stop-color="#fff3c0" stop-opacity="0"/></radialGradient></defs><g class="lmW"><ellipse cx="46" cy="25" rx="40" ry="27" fill="#ece6ff" opacity=".14"/><g class="lmT"><path d="M28 25C20 14 10 9 3 12 8 18 9 22 8 25 9 28 8 32 3 38 10 41 20 36 28 25Z" fill="#b9acec"/><path d="M26 25C19 18 13 15 9 16 12 20 12 23 12 25 12 27 12 30 9 34 13 35 19 32 26 25Z" fill="#ddd5fb"/></g><path class="lmF" d="M35 11Q41 0 54 6Q45 7 35 11Z" fill="#cfc4f4"/><path class="lmF2" d="M39 40Q43 51 53 44Q46 43 39 40Z" fill="#cfc4f4"/><g class="lmA"><path d="M61 9Q64 1 71 1.5" stroke="#a79bdc" stroke-width="1.8" fill="none" stroke-linecap="round"/><circle class="lmGl" cx="73" cy="1.5" r="7.5" fill="url(#lmG)"/><polygon class="lmSt" points="73.00,-4.10 74.59,-0.68 78.33,-0.23 75.57,2.33 76.29,6.03 73.00,4.20 69.71,6.03 70.43,2.33 67.67,-0.23 71.41,-0.68" fill="url(#lmS)" stroke="#ffc83d" stroke-width="1.4" stroke-linejoin="round"/></g><path d="M46 6C62 6 72 15 72 25C72 36 62 44 46 44C32 44 24 36 24 25C24 15 32 6 46 6Z" fill="url(#lmB)"/><ellipse cx="37" cy="14" rx="3.4" ry="6" fill="#fff" opacity=".6" transform="rotate(35 37 14)"/><g stroke="#b9acec" stroke-width="1.1" fill="none" stroke-linecap="round" opacity=".55"><path d="M35 21q3 3 0 6M41 17q3 3 0 6M41 29q3 3 0 6"/></g><path class="lmK" d="M33 30.8l0.66 1.54 1.54 0.66 -1.54 0.66 -0.66 1.54 -0.66 -1.54 -1.54 -0.66 1.54 -0.66z" fill="#ffe27a"/><path class="lmK k2" d="M46 11.4l0.48 1.1199999999999999 1.1199999999999999 0.48 -1.1199999999999999 0.48 -0.48 1.1199999999999999 -0.48 -1.1199999999999999 -1.1199999999999999 -0.48 1.1199999999999999 -0.48z" fill="#fff6c8"/><path class="lmE" d="M53 23.5q3-4 6 0M63 23.5q3-4 6 0" stroke="#4a4290" stroke-width="1.9" fill="none" stroke-linecap="round"/><g class="lmEo"><circle cx="56" cy="22" r="2.6" fill="#4a4290"/><circle cx="66" cy="22" r="2.6" fill="#4a4290"/><circle cx="56.9" cy="21.1" r=".9" fill="#fff"/><circle cx="66.9" cy="21.1" r=".9" fill="#fff"/></g><path class="lmS" d="M58.6 28.6Q61 31.8 63.4 28.6" stroke="#4a4290" stroke-width="1.6" fill="none" stroke-linecap="round"/><g class="lmO"><ellipse cx="61" cy="30" rx="2.6" ry="2.9" fill="#7a3a6a"/><ellipse cx="61" cy="31.2" rx="1.6" ry="1.2" fill="#ff8fa8"/></g><ellipse class="lmC" cx="52.6" cy="28.4" rx="2.6" ry="1.6" fill="#ff9db8" opacity=".75"/><ellipse class="lmC" cx="69" cy="28.4" rx="2.2" ry="1.5" fill="#ff9db8" opacity=".75"/></g>'),
  (FSH.zv_rouge = (e) =>
    '<defs><linearGradient id="ArB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8380e"/><stop offset="0.45" stop-color="#f2701e"/><stop offset="0.8" stop-color="#ffb24a"/><stop offset="1" stop-color="#ffe2a8"/></linearGradient><pattern id="ArS" width="3" height="2.6" patternUnits="userSpaceOnUse"><path d="M0 2.6a1.5 1.5 0 0 1 3 0M-1.5 1.3a1.5 1.5 0 0 1 3 0M1.5 1.3a1.5 1.5 0 0 1 3 0" stroke="#ffe7b0" stroke-width=".26" fill="none" opacity="0.25"/></pattern><clipPath id="ArK"><path d="M76 26.6C75.4 15.5 62.8 12 52 12C41 12 33 20.3 30 21.5L30 30.5C33 31.7 41 41.4 52 41.4C64 41.4 75.4 34.4 76 26.6Z"/></clipPath><linearGradient id="ArT" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#e8551a"/><stop offset="0.7" stop-color="#ff9a3a"/><stop offset="1" stop-color="#ffe3b8"/></linearGradient><radialGradient id="ArI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#fff3c0"/><stop offset="0.7" stop-color="#d89a2a"/><stop offset="1" stop-color="#6a3a10"/></radialGradient></defs><g class="zvW tFlare"><g class="zvFlow" style="animation-duration:1.8s;transform-origin:100% 50%"><path d="M31.5 21.5C19.6 12.4 6.6 6.45 2.7 9.85C7.9 16.65 5.3 21.75 11.8 25.15C5.3 30.25 7.9 35.35 2.7 42.15C6.6 45.55 19.6 39.6 31.5 30.5Z" fill="url(#ArT)"/><g stroke="#fff3d6" stroke-width="0.45" opacity="0.55" fill="none" stroke-linecap="round"><path d="M31 26Q16.85 17.12 2.7 9.85"/><path d="M31 26Q18.8 21.79 6.6 18.35"/><path d="M31 26Q21.4 26 11.8 26"/><path d="M31 26Q18.8 30.21 6.6 33.65"/><path d="M31 26Q16.85 34.88 2.7 42.15"/></g></g><g class="zvRip" style="animation-duration:2.2s;transform-origin:30% 100%"><path d="M42 15C45 6 51 4.5 56 5C59 9 60.8 13 62 16Z" fill="url(#ArT)"/><path d="M42 15C45 6 51 4.5 56 5C59 9 60.8 13 62 16Z" fill="none" stroke="#fff3d6" stroke-width=".35" opacity="0.5"/></g><g class="zvRip" style="animation-duration:2.2s;animation-delay:0.6s;transform-origin:30% 0"><path d="M44 37C46.4 43.3 50 44.35 53 44C54.2 40.5 55.4 38.4 56 36Z" fill="url(#ArT)"/><path d="M44 37C46.4 43.3 50 44.35 53 44C54.2 40.5 55.4 38.4 56 36Z" fill="none" stroke="#fff3d6" stroke-width=".35" opacity="0.5"/></g><path d="M76 26.6C75.4 15.5 62.8 12 52 12C41 12 33 20.3 30 21.5L30 30.5C33 31.7 41 41.4 52 41.4C64 41.4 75.4 34.4 76 26.6Z" fill="url(#ArB)"/><g clip-path="url(#ArK)"><rect x="28" y="10" width="50" height="40.4" fill="url(#ArS)"/></g><path class="zvGill" d="M60.49 16.61Q56.4 24.05 60.49 31.49" stroke="#00000055" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.5s;transform-origin:85% 15%" d="M60 31C57 32.5 54 35 53.5 37.2C56 36.5 58.5 34.4 60.6 32.2Z" fill="#ff9a3a"/><circle cx="67" cy="22.5" r="3.1" fill="#15151f"/><circle cx="67" cy="22.5" r="2.48" fill="url(#ArI)"/><g class="zvLook"><circle cx="67.37" cy="22.66" r="1.3" fill="#07070c"/></g><ellipse cx="67.99" cy="21.32" rx="0.93" ry="0.62" fill="#fff" opacity=".9" transform="rotate(-30 67.99 21.32)"/><circle cx="65.92" cy="23.74" r="0.34" fill="#fff" opacity=".7"/><path class="zvM" d="M75.8 26.7q-1.6 0.9 -3.2 0.2" stroke="#7a2a10" stroke-width="0.8" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="74.7" cy="27.1" rx="1.5" ry="2" fill="#2a1418"/><ellipse cx="74.5" cy="27.8" rx="0.8" ry="0.6" fill="#c25a6a"/></g><ellipse class="zvSheen" cx="50" cy="15" rx="9" ry="2.4" fill="#fff" transform="rotate(-6 50 15)"/></g>'),
  (FSH.zv_neon = (e) =>
    '<defs><linearGradient id="AnB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a4658"/><stop offset="0.42" stop-color="#6a7a8a"/><stop offset="0.56" stop-color="#c8d4e0"/><stop offset="1" stop-color="#e8eef4"/></linearGradient><pattern id="AnS" width="3" height="2.6" patternUnits="userSpaceOnUse"><path d="M0 2.6a1.5 1.5 0 0 1 3 0M-1.5 1.3a1.5 1.5 0 0 1 3 0M1.5 1.3a1.5 1.5 0 0 1 3 0" stroke="#fff" stroke-width=".26" fill="none" opacity="0.14"/></pattern><clipPath id="AnK"><path d="M79 25.5C78.4 21.18 63.05 16.5 50 16.5C37 16.5 27 20.8 24 22L24 28C27 29.2 37 33.5 50 33.5C64.5 33.5 78.4 28.06 79 25.5Z"/></clipPath><linearGradient id="AnN" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#28d8ff"/><stop offset="0.5" stop-color="#7ff8ff"/><stop offset="1" stop-color="#38a8ff"/></linearGradient><linearGradient id="AnR" gradientUnits="userSpaceOnUse" x1="30" y1="0" x2="58" y2="0"><stop offset="0" stop-color="#e0263a" stop-opacity="0"/><stop offset="0.55" stop-color="#e0263a" stop-opacity=".95"/><stop offset="1" stop-color="#e8283c"/></linearGradient><linearGradient id="AnT" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#9aa8b8"/><stop offset="1" stop-color="#dfe8f0"/></linearGradient><radialGradient id="AnI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#c8f4ff"/><stop offset="0.7" stop-color="#3aa0c8"/><stop offset="1" stop-color="#123a5a"/></radialGradient></defs><g class="zvW tDart"><g class="zvTail" style="animation-duration:0.9s;transform-origin:100% 50%"><path d="M25.5 22C17.2 20.5 10.4 16 7 15.55C11.25 21.4 13.8 24.1 14.65 25C13.8 25.9 11.25 28.6 7 34.45C10.4 34 17.2 29.5 25.5 28Z" fill="url(#AnT)"/><g stroke="#ffffff" stroke-width="0.45" opacity="0.45" fill="none" stroke-linecap="round"><path d="M25 25Q16 19.8 7 15.55"/><path d="M25 25Q17.87 22.28 10.74 20.05"/><path d="M25 25Q19.82 25 14.65 25"/><path d="M25 25Q17.87 27.72 10.74 29.95"/><path d="M25 25Q16 30.2 7 34.45"/></g></g><g class="zvRip" style="animation-duration:1.6s;transform-origin:30% 100%"><path d="M46 18C47.2 13.5 49.6 12.75 51.6 13C52.8 15 53.52 17 54 19Z" fill="#b8c4d0"/><path d="M46 18C47.2 13.5 49.6 12.75 51.6 13C52.8 15 53.52 17 54 19Z" fill="none" stroke="#fff" stroke-width=".35" opacity="0.45"/></g><g class="zvRip" style="animation-duration:1.6s;animation-delay:0.5s;transform-origin:30% 0"><path d="M48 32C50 35.6 53 36.2 55.5 36C56.5 34 57.5 32.8 58 31Z" fill="#b8c4d0"/><path d="M48 32C50 35.6 53 36.2 55.5 36C56.5 34 57.5 32.8 58 31Z" fill="none" stroke="#fff" stroke-width=".35" opacity="0.45"/></g><path d="M79 25.5C78.4 21.18 63.05 16.5 50 16.5C37 16.5 27 20.8 24 22L24 28C27 29.2 37 33.5 50 33.5C64.5 33.5 78.4 28.06 79 25.5Z" fill="url(#AnB)"/><g clip-path="url(#AnK)"><rect x="22" y="14.5" width="59" height="26.1" fill="url(#AnS)"/><path d="M20 28C40 27 60 27.4 82 28.6L82 40L20 40Z" fill="url(#AnR)"/><path class="zvNeon" style="animation-duration:2.2s" d="M20 23.6C38 21.6 60 20.6 82 22.2L82 25C60 24.2 38 25.2 20 26Z" fill="url(#AnN)"/><path d="M20 22.6C38 20.8 60 19.8 82 21.4" stroke="#bdf6ff" stroke-width=".5" fill="none" opacity=".55"/></g><path class="zvGill" d="M65.75 18.65Q62.45 24.65 65.75 30.65" stroke="#2a3a4a" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.5s;transform-origin:85% 15%" d="M66 27C63.9 28.05 61.8 29.8 61.45 31.34C63.2 30.85 64.95 29.38 66.42 27.84Z" fill="#c8d4e0"/><circle cx="71" cy="23.4" r="2.5" fill="#15151f"/><circle cx="71" cy="23.4" r="2" fill="url(#AnI)"/><g class="zvLook"><circle cx="71.3" cy="23.52" r="1.05" fill="#07070c"/></g><ellipse cx="71.8" cy="22.45" rx="0.75" ry="0.5" fill="#fff" opacity=".9" transform="rotate(-30 71.8 22.45)"/><circle cx="70.12" cy="24.4" r="0.28" fill="#fff" opacity=".7"/><path class="zvM" d="M78.8 25.6q-1.28 0.72 -2.56 0.16" stroke="#2a3040" stroke-width="0.64" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="77.92" cy="25.92" rx="1.2" ry="1.6" fill="#2a1418"/><ellipse cx="77.76" cy="26.48" rx="0.64" ry="0.48" fill="#c25a6a"/></g><ellipse class="zvSheen" cx="50" cy="19.5" rx="12" ry="1.6" fill="#fff" transform="rotate(-2 50 19.5)"/></g>'),
  (FSH.zv_danio = (e) =>
    '<defs><linearGradient id="AdG" gradientUnits="userSpaceOnUse" x1="21" y1="0" x2="81" y2="0"><stop offset="0" stop-color="#25459a" stop-opacity=".95"/><stop offset=".7" stop-color="#25459a"/><stop offset="1" stop-color="#25459a" stop-opacity=".25"/></linearGradient><linearGradient id="AdB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b8a878"/><stop offset="0.4" stop-color="#efe6c4"/><stop offset="1" stop-color="#fffaf0"/></linearGradient><pattern id="AdS" width="3" height="2.6" patternUnits="userSpaceOnUse"><path d="M0 2.6a1.5 1.5 0 0 1 3 0M-1.5 1.3a1.5 1.5 0 0 1 3 0M1.5 1.3a1.5 1.5 0 0 1 3 0" stroke="#8a7a4a" stroke-width=".26" fill="none" opacity="0.17"/></pattern><clipPath id="AdK"><path d="M80 25.5C79.4 20.7 63.5 16.4 50 16.4C36.5 16.4 26 20.8 23 22L23 28C26 29.2 36.5 33.6 50 33.6C65 33.6 79.4 28.44 80 25.5Z"/></clipPath><radialGradient id="AdI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#fff8d8"/><stop offset="0.7" stop-color="#c8a050"/><stop offset="1" stop-color="#4a3010"/></radialGradient></defs><g class="zvW tZip"><g class="zvTail" style="animation-duration:0.6s;transform-origin:100% 50%"><path d="M24.5 22C16.6 20.75 10.2 16.5 7 16.07C11 21.6 13.4 24.15 14.2 25C13.4 25.85 11 28.4 7 33.92C10.2 33.5 16.6 29.25 24.5 28Z" fill="#e8e2cc"/><g stroke="#25459a" stroke-width="0.45" opacity="0.8" fill="none" stroke-linecap="round"><path d="M24 25Q15.5 20.09 7 16.07"/><path d="M24 25Q17.26 22.43 10.52 20.32"/><path d="M24 25Q19.1 25 14.2 25"/><path d="M24 25Q17.26 27.57 10.52 29.68"/><path d="M24 25Q15.5 29.91 7 33.92"/></g></g><g class="zvPec2" style="animation-duration:0.5s;transform-origin:30% 100%"><path d="M46 18C47.35 13.5 50.05 12.75 52.3 13C53.65 15 54.46 17 55 19Z" fill="#d8d0b0"/><path d="M46 18C47.35 13.5 50.05 12.75 52.3 13C53.65 15 54.46 17 55 19Z" fill="none" stroke="#25459a" stroke-width=".35" opacity="0.6"/></g><g class="zvPec2" style="animation-duration:0.5s;animation-delay:0.25s;transform-origin:30% 0"><path d="M48 32C50.2 35.96 53.5 36.62 56.25 36.4C57.35 34.2 58.45 32.88 59 31Z" fill="#d8d0b0"/><path d="M48 32C50.2 35.96 53.5 36.62 56.25 36.4C57.35 34.2 58.45 32.88 59 31Z" fill="none" stroke="#25459a" stroke-width=".35" opacity="0.6"/></g><path d="M80 25.5C79.4 20.7 63.5 16.4 50 16.4C36.5 16.4 26 20.8 23 22L23 28C26 29.2 36.5 33.6 50 33.6C65 33.6 79.4 28.44 80 25.5Z" fill="url(#AdB)"/><g clip-path="url(#AdK)"><rect x="21" y="14.4" width="61" height="26.36" fill="url(#AdS)"/><path d="M22 20.2C40 18.7 60 18.9 80 20.8" stroke="url(#AdG)" stroke-width="1.5" fill="none"/><path d="M22 24.6C40 23.1 60 23.3 80 25.2" stroke="url(#AdG)" stroke-width="1.9" fill="none"/><path d="M22 29C40 27.5 60 27.7 80 29.6" stroke="url(#AdG)" stroke-width="1.5" fill="none"/><path d="M22 32.6C40 31.1 60 31.3 80 33.2" stroke="url(#AdG)" stroke-width="0.9" fill="none"/></g><path class="zvGill" d="M66.54 18.06Q63.11 24.3 66.54 30.54" stroke="#7a6a4a" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.5s;transform-origin:85% 15%" d="M67 27C64.9 28.05 62.8 29.8 62.45 31.34C64.2 30.85 65.95 29.38 67.42 27.84Z" fill="#e8e0c4"/><circle cx="72" cy="23" r="2.6" fill="#15151f"/><circle cx="72" cy="23" r="2.08" fill="url(#AdI)"/><g class="zvLook"><circle cx="72.31" cy="23.13" r="1.09" fill="#07070c"/></g><ellipse cx="72.83" cy="22.01" rx="0.78" ry="0.52" fill="#fff" opacity=".9" transform="rotate(-30 72.83 22.01)"/><circle cx="71.09" cy="24.04" r="0.29" fill="#fff" opacity=".7"/><path class="zvM" d="M79.8 25.6q-1.28 0.72 -2.56 0.16" stroke="#3a3020" stroke-width="0.64" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="78.92" cy="25.92" rx="1.2" ry="1.6" fill="#2a1418"/><ellipse cx="78.76" cy="26.48" rx="0.64" ry="0.48" fill="#c25a6a"/></g><ellipse class="zvSheen" cx="52" cy="19" rx="12" ry="1.5" fill="#fff" transform="rotate(-2 52 19)"/></g>'),
  (FSH.zv_cardinal = (e) =>
    '<defs><linearGradient id="AcB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a3a5a"/><stop offset="0.4" stop-color="#6a5a7a"/><stop offset="0.5" stop-color="#e81e36"/><stop offset="1" stop-color="#ff5a4a"/></linearGradient><pattern id="AcS" width="3" height="2.6" patternUnits="userSpaceOnUse"><path d="M0 2.6a1.5 1.5 0 0 1 3 0M-1.5 1.3a1.5 1.5 0 0 1 3 0M1.5 1.3a1.5 1.5 0 0 1 3 0" stroke="#fff" stroke-width=".26" fill="none" opacity="0.12"/></pattern><clipPath id="AcK"><path d="M79 25.6C78.4 20.5 63.05 16 50 16C37.5 16 28 20.8 25 22L25 28C28 29.2 37.5 34 50 34C64.5 34 78.4 28.6 79 25.6Z"/></clipPath><linearGradient id="AcN" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3ac8ff"/><stop offset="0.6" stop-color="#6af0ff"/><stop offset="1" stop-color="#3a7aff"/></linearGradient><linearGradient id="AcT" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#d84050"/><stop offset="1" stop-color="#f4c4c8"/></linearGradient><radialGradient id="AcI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#ffe0c8"/><stop offset="0.7" stop-color="#c86a3a"/><stop offset="1" stop-color="#4a1a10"/></radialGradient></defs><g class="zvW tDart"><g class="zvTail" style="animation-duration:0.9s;transform-origin:100% 50%"><path d="M26.5 22C18.6 20.75 12.2 16.5 9 16.07C13 21.6 15.4 24.15 16.2 25C15.4 25.85 13 28.4 9 33.92C12.2 33.5 18.6 29.25 26.5 28Z" fill="url(#AcT)"/><g stroke="#fff" stroke-width="0.45" opacity="0.45" fill="none" stroke-linecap="round"><path d="M26 25Q17.5 20.09 9 16.07"/><path d="M26 25Q19.26 22.43 12.52 20.32"/><path d="M26 25Q21.1 25 16.2 25"/><path d="M26 25Q19.26 27.57 12.52 29.68"/><path d="M26 25Q17.5 29.91 9 33.92"/></g></g><g class="zvRip" style="animation-duration:1.8s;transform-origin:30% 100%"><path d="M47 17.5C48.2 13 50.6 12.25 52.6 12.5C53.8 14.5 54.52 16.5 55 18.5Z" fill="#c8a8b4"/><path d="M47 17.5C48.2 13 50.6 12.25 52.6 12.5C53.8 14.5 54.52 16.5 55 18.5Z" fill="none" stroke="#fff" stroke-width=".35" opacity="0.45"/></g><g class="zvRip" style="animation-duration:1.8s;animation-delay:0.5s;transform-origin:30% 0"><path d="M46 33C48.4 37.14 52 37.83 55 37.6C56.2 35.3 57.4 33.92 58 32Z" fill="#f08088"/><path d="M46 33C48.4 37.14 52 37.83 55 37.6C56.2 35.3 57.4 33.92 58 32Z" fill="none" stroke="#fff" stroke-width=".35" opacity="0.45"/></g><path d="M79 25.6C78.4 20.5 63.05 16 50 16C37.5 16 28 20.8 25 22L25 28C28 29.2 37.5 34 50 34C64.5 34 78.4 28.6 79 25.6Z" fill="url(#AcB)"/><g clip-path="url(#AcK)"><rect x="23" y="14" width="58" height="27.4" fill="url(#AcS)"/><path class="zvNeon" style="animation-duration:2.6s" d="M22 22.8C40 20.6 60 20 82 21.6L82 24.4C60 24 40 24.8 22 25.4Z" fill="url(#AcN)"/><path d="M22 21.8C40 19.8 60 19.2 82 20.8" stroke="#c8f8ff" stroke-width=".5" fill="none" opacity=".5"/></g><path class="zvGill" d="M65.54 18.06Q62.11 24.3 65.54 30.54" stroke="#3a2a4a" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.5s;transform-origin:85% 15%" d="M66 28C63.9 29.05 61.8 30.8 61.45 32.34C63.2 31.85 64.95 30.38 66.42 28.84Z" fill="#f4a0a8"/><circle cx="71" cy="23" r="2.6" fill="#15151f"/><circle cx="71" cy="23" r="2.08" fill="url(#AcI)"/><g class="zvLook"><circle cx="71.31" cy="23.13" r="1.09" fill="#07070c"/></g><ellipse cx="71.83" cy="22.01" rx="0.78" ry="0.52" fill="#fff" opacity=".9" transform="rotate(-30 71.83 22.01)"/><circle cx="70.09" cy="24.04" r="0.29" fill="#fff" opacity=".7"/><path class="zvM" d="M78.8 25.7q-1.28 0.72 -2.56 0.16" stroke="#4a1a1a" stroke-width="0.64" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="77.92" cy="26.02" rx="1.2" ry="1.6" fill="#2a1418"/><ellipse cx="77.76" cy="26.58" rx="0.64" ry="0.48" fill="#c25a6a"/></g><ellipse class="zvSheen" cx="54" cy="19" rx="11" ry="1.4" fill="#fff" transform="rotate(-2 54 19)"/></g>'),
  (FSH.zv_platy = (e) =>
    '<defs><linearGradient id="ApB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c02a2a"/><stop offset="0.45" stop-color="#ff5a3a"/><stop offset="0.8" stop-color="#ff9a6a"/><stop offset="1" stop-color="#ffd8b8"/></linearGradient><pattern id="ApS" width="3" height="2.6" patternUnits="userSpaceOnUse"><path d="M0 2.6a1.5 1.5 0 0 1 3 0M-1.5 1.3a1.5 1.5 0 0 1 3 0M1.5 1.3a1.5 1.5 0 0 1 3 0" stroke="#ffe0c8" stroke-width=".26" fill="none" opacity="0.25"/></pattern><clipPath id="ApK"><path d="M75 27.4C74.4 17.9 61.25 14 50 14C39.5 14 32 20.8 29 22L29 32C32 33.2 39.5 41.04 50 41.04C62.5 41.04 74.4 34.28 75 27.4Z"/></clipPath><radialGradient id="ApI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#fff0c8"/><stop offset="0.7" stop-color="#e8902a"/><stop offset="1" stop-color="#5a2a0a"/></radialGradient></defs><g class="zvW tRoll"><g class="zvTail" style="animation-duration:1.4s;transform-origin:100% 50%"><path d="M30.5 22C23.9 15 11.15 16.2 12 27C11.15 37.8 23.9 39 30.5 32Z" fill="#2a1a2a"/><g stroke="#ff8a6a" stroke-width="0.45" opacity="0.4" fill="none" stroke-linecap="round"><path d="M30 27Q23.12 21.39 16.25 16.8"/><path d="M30 27Q21.17 24.36 12.34 22.2"/><path d="M30 27Q21 27 12 27"/><path d="M30 27Q21.17 29.64 12.34 31.8"/><path d="M30 27Q23.12 32.61 16.25 37.2"/></g><path d="M30 21.6C26 22 22 24 21 27 22 30 26 32 30 32.4Z" fill="#ff6a4a"/></g><g class="zvRip" style="animation-duration:2.2s;transform-origin:30% 100%"><path d="M40 16C42.7 9.7 48.1 8.65 52.6 9C55.3 11.8 56.92 14.6 58 17Z" fill="#e84a32"/><path d="M40 16C42.7 9.7 48.1 8.65 52.6 9C55.3 11.8 56.92 14.6 58 17Z" fill="none" stroke="#ffd0b8" stroke-width=".35" opacity="0.45"/></g><g class="zvRip" style="animation-duration:2.2s;animation-delay:0.7s;transform-origin:30% 0"><path d="M46 38C47.8 42.5 50.5 43.25 52.75 43C53.65 40.5 54.55 39 55 37Z" fill="#ff7a52"/><path d="M46 38C47.8 42.5 50.5 43.25 52.75 43C53.65 40.5 54.55 39 55 37Z" fill="none" stroke="#ffd0b8" stroke-width=".35" opacity="0.45"/></g><path d="M75 27.4C74.4 17.9 61.25 14 50 14C39.5 14 32 20.8 29 22L29 32C32 33.2 39.5 41.04 50 41.04C62.5 41.04 74.4 34.28 75 27.4Z" fill="url(#ApB)"/><g clip-path="url(#ApK)"><rect x="27" y="12" width="50" height="37.8" fill="url(#ApS)"/></g><path class="zvGill" d="M59.7 17.3Q55.74 24.5 59.7 31.7" stroke="#8a1a1a" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.5s;transform-origin:85% 15%" d="M60 31C57.3 32.35 54.6 34.6 54.15 36.58C56.4 35.95 58.65 34.06 60.54 32.08Z" fill="#ff9a72"/><circle cx="66" cy="23" r="3" fill="#15151f"/><circle cx="66" cy="23" r="2.4" fill="url(#ApI)"/><g class="zvLook"><circle cx="66.36" cy="23.15" r="1.26" fill="#07070c"/></g><ellipse cx="66.96" cy="21.86" rx="0.9" ry="0.6" fill="#fff" opacity=".9" transform="rotate(-30 66.96 21.86)"/><circle cx="64.95" cy="24.2" r="0.33" fill="#fff" opacity=".7"/><path class="zvM" d="M74.8 27.5q-1.6 0.9 -3.2 0.2" stroke="#6a1a1a" stroke-width="0.8" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="73.7" cy="27.9" rx="1.5" ry="2" fill="#2a1418"/><ellipse cx="73.5" cy="28.6" rx="0.8" ry="0.6" fill="#c25a6a"/></g><ellipse class="zvSheen" cx="48" cy="17" rx="8" ry="2.2" fill="#fff" transform="rotate(-6 48 17)"/></g>'),
  (FSH.zv_molly = (e) =>
    '<defs><linearGradient id="AmB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a0a14"/><stop offset="0.5" stop-color="#1c1f30"/><stop offset="1" stop-color="#3a3f58"/></linearGradient><pattern id="AmS" width="3" height="2.6" patternUnits="userSpaceOnUse"><path d="M0 2.6a1.5 1.5 0 0 1 3 0M-1.5 1.3a1.5 1.5 0 0 1 3 0M1.5 1.3a1.5 1.5 0 0 1 3 0" stroke="#7ad8c8" stroke-width=".26" fill="none" opacity="0.17"/></pattern><clipPath id="AmK"><path d="M77 27.4C76.4 20.1 62.15 15.5 50 15.5C38.5 15.5 30 21.4 27 22.6L27 31.4C30 32.6 38.5 38.5 50 38.5C63.5 38.5 76.4 32.52 77 27.4Z"/></clipPath><linearGradient id="AmD" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8862a"/><stop offset="0.18" stop-color="#2a3048"/><stop offset="1" stop-color="#121422"/></linearGradient><linearGradient id="AmT" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#141624"/><stop offset="0.8" stop-color="#2a3048"/><stop offset="1" stop-color="#e8862a"/></linearGradient><radialGradient id="AmI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#fff4c8"/><stop offset="0.7" stop-color="#c8a03a"/><stop offset="1" stop-color="#3a2a0a"/></radialGradient></defs><g class="zvW tFlare"><g class="zvTail" style="animation-duration:1.3s;transform-origin:100% 50%"><path d="M28.5 22.6C20.2 21 11.7 16 7.45 14.5C13.4 22 15.1 25.5 16.8 27C15.1 28.5 13.4 32 7.45 39.5C11.7 38 20.2 33 28.5 31.4Z" fill="url(#AmT)"/><g stroke="#6ad0c0" stroke-width="0.45" opacity="0.35" fill="none" stroke-linecap="round"><path d="M28 27Q17.73 20.12 7.45 14.5"/><path d="M28 27Q21.12 24.52 14.25 22.5"/><path d="M28 27Q22.4 27 16.8 27"/><path d="M28 27Q21.12 29.48 14.25 31.5"/><path d="M28 27Q17.73 33.88 7.45 39.5"/></g></g><g class="zvSail" style="animation-duration:2.8s;transform-origin:40% 100%"><path d="M36 18C34 6 42-2 56 0 62 2 64 8 62 17Z" fill="url(#AmD)"/><path d="M36 18C34 6 42-2 56 0 62 2 64 8 62 17Z" fill="none" stroke="#e8962a" stroke-width=".35" opacity="0.7"/></g><g class="zvRip" style="animation-duration:2s;transform-origin:30% 0"><path d="M46 37C48 42.4 51 43.3 53.5 43C54.5 40 55.5 38.2 56 36Z" fill="#1c1f30"/><path d="M46 37C48 42.4 51 43.3 53.5 43C54.5 40 55.5 38.2 56 36Z" fill="none" stroke="#6ad0c0" stroke-width=".35" opacity="0.4"/></g><path d="M77 27.4C76.4 20.1 62.15 15.5 50 15.5C38.5 15.5 30 21.4 27 22.6L27 31.4C30 32.6 38.5 38.5 50 38.5C63.5 38.5 76.4 32.52 77 27.4Z" fill="url(#AmB)"/><g clip-path="url(#AmK)"><rect x="25" y="13.5" width="54" height="33.9" fill="url(#AmS)"/><circle class="zvGlint" style="animation-duration:2.8s" cx="40" cy="24" r="0.5" fill="#9af4e4"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:0.53s" cx="46" cy="30" r="0.45" fill="#9af4e4"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:1.06s" cx="52" cy="22" r="0.5" fill="#9af4e4"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:1.59s" cx="58" cy="29" r="0.4" fill="#9af4e4"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:2.12s" cx="44" cy="19" r="0.4" fill="#9af4e4"/></g><path class="zvGill" d="M61.7 17.8Q57.74 25 61.7 32.2" stroke="#4a5a7a" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.5s;transform-origin:85% 15%" d="M62 31C59.3 32.35 56.6 34.6 56.15 36.58C58.4 35.95 60.65 34.06 62.54 32.08Z" fill="#2a3048"/><circle cx="68" cy="23.5" r="3" fill="#15151f"/><circle cx="68" cy="23.5" r="2.4" fill="url(#AmI)"/><g class="zvLook"><circle cx="68.36" cy="23.65" r="1.26" fill="#07070c"/></g><ellipse cx="68.96" cy="22.36" rx="0.9" ry="0.6" fill="#fff" opacity=".9" transform="rotate(-30 68.96 22.36)"/><circle cx="66.95" cy="24.7" r="0.33" fill="#fff" opacity=".7"/><path class="zvM" d="M76.8 27.5q-1.6 0.9 -3.2 0.2" stroke="#7a8aa0" stroke-width="0.8" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="75.7" cy="27.9" rx="1.5" ry="2" fill="#2a1418"/><ellipse cx="75.5" cy="28.6" rx="0.8" ry="0.6" fill="#c25a6a"/></g><ellipse class="zvSheen" cx="48" cy="18" rx="9" ry="1.8" fill="#fff" transform="rotate(-6 48 18)"/></g>'),
  (FSH.zv_betta = (e) =>
    '<defs><linearGradient id="AbB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a3a8a"/><stop offset="0.5" stop-color="#a47ad8"/><stop offset="1" stop-color="#e8d0ff"/></linearGradient><pattern id="AbS" width="3" height="2.6" patternUnits="userSpaceOnUse"><path d="M0 2.6a1.5 1.5 0 0 1 3 0M-1.5 1.3a1.5 1.5 0 0 1 3 0M1.5 1.3a1.5 1.5 0 0 1 3 0" stroke="#fff" stroke-width=".26" fill="none" opacity="0.19"/></pattern><clipPath id="AbK"><path d="M78 25.5C77.4 20.32 65.9 16.5 56 16.5C46 16.5 39 20.3 36 21.5L36 28.5C39 29.7 46 33.5 56 33.5C67 33.5 77.4 28.74 78 25.5Z"/></clipPath><linearGradient id="AbT" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#8a5ac8"/><stop offset="0.6" stop-color="#c48ae8"/><stop offset="1" stop-color="#ffc8e8"/></linearGradient><radialGradient id="AbI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#ffd8f0"/><stop offset="0.7" stop-color="#b44ab0"/><stop offset="1" stop-color="#3a0a3a"/></radialGradient></defs><g class="zvW tFlare"><g class="zvFlow" style="animation-duration:2.6s;transform-origin:100% 50%"><path d="M37.5 21.5C25.8 0.8 5.4 -1.4 2 11.8C-1.4 20.6 7.1 27.2 0.3 34.9C-1.4 44.8 15.6 52.5 24.1 49.2C29.2 40.4 32.6 30.25 37.5 28.5Z" fill="url(#AbT)"/><g stroke="#3a1a6a" stroke-width="0.45" opacity="0.35" fill="none" stroke-linecap="round"><path d="M37 25Q20.35 13.51 3.7 4.1"/><path d="M37 25Q19.16 20.16 1.32 16.2"/><path d="M37 25Q20.35 27.42 3.7 29.4"/><path d="M37 25Q20.35 34.08 3.7 41.5"/><path d="M37 25Q28 38.91 19 50.3"/></g></g><g class="zvFlow2" style="animation-duration:3s;transform-origin:50% 100%"><path d="M42 18C40 4 50-4 64 2 66 6 64 12 62 18Z" fill="url(#AbT)"/><path d="M42 18C40 4 50-4 64 2 66 6 64 12 62 18Z" fill="none" stroke="#3a1a6a" stroke-width=".35" opacity="0.35"/></g><g class="zvFlow2" style="animation-duration:3s;animation-delay:1.1s;transform-origin:50% 0"><path d="M44 32C40 46 48 54 62 48 62 42 60 36 58 32Z" fill="url(#AbT)"/><path d="M44 32C40 46 48 54 62 48 62 42 60 36 58 32Z" fill="none" stroke="#3a1a6a" stroke-width=".35" opacity="0.35"/></g><path d="M78 25.5C77.4 20.32 65.9 16.5 56 16.5C46 16.5 39 20.3 36 21.5L36 28.5C39 29.7 46 33.5 56 33.5C67 33.5 77.4 28.74 78 25.5Z" fill="url(#AbB)"/><g clip-path="url(#AbK)"><rect x="34" y="14.5" width="46" height="26.1" fill="url(#AbS)"/></g><path class="zvGill" d="M64.33 17.47Q60.77 23.95 64.33 30.43" stroke="#4a2a7a" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.5s;transform-origin:85% 15%" d="M66 28C63.6 29.2 61.2 31.2 60.8 32.96C62.8 32.4 64.8 30.72 66.48 28.96Z" fill="#d8b0f0"/><circle cx="70" cy="22.6" r="2.7" fill="#15151f"/><circle cx="70" cy="22.6" r="2.16" fill="url(#AbI)"/><g class="zvLook"><circle cx="70.32" cy="22.74" r="1.13" fill="#07070c"/></g><ellipse cx="70.86" cy="21.57" rx="0.81" ry="0.54" fill="#fff" opacity=".9" transform="rotate(-30 70.86 21.57)"/><circle cx="69.06" cy="23.68" r="0.3" fill="#fff" opacity=".7"/><path class="zvM" d="M77.8 25.6q-1.28 0.72 -2.56 0.16" stroke="#4a1a5a" stroke-width="0.64" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="76.92" cy="25.92" rx="1.2" ry="1.6" fill="#2a1418"/><ellipse cx="76.76" cy="26.48" rx="0.64" ry="0.48" fill="#c25a6a"/></g><ellipse class="zvSheen" cx="58" cy="19" rx="9" ry="1.5" fill="#fff" transform="rotate(-4 58 19)"/></g>'),
  (FSH.zv_gourami = (e) =>
    '<defs><linearGradient id="AgB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6a5a52"/><stop offset="0.45" stop-color="#a8988a"/><stop offset="0.8" stop-color="#d8c0a8"/><stop offset="1" stop-color="#f0a070"/></linearGradient><pattern id="AgS" width="3" height="2.6" patternUnits="userSpaceOnUse"><path d="M0 2.6a1.5 1.5 0 0 1 3 0M-1.5 1.3a1.5 1.5 0 0 1 3 0M1.5 1.3a1.5 1.5 0 0 1 3 0" stroke="#fff" stroke-width=".26" fill="none" opacity="0.17"/></pattern><clipPath id="AgK"><path d="M73 27.6C72.4 20.4 59.25 15 48 15C37.5 15 30 21.4 27 22.6L27 31.4C30 32.6 37.5 39 48 39C60.5 39 72.4 32.28 73 27.6Z"/></clipPath><radialGradient id="AgI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#fff0d8"/><stop offset="0.7" stop-color="#c8402a"/><stop offset="1" stop-color="#3a0a0a"/></radialGradient></defs><g class="zvW tRoll"><g class="zvTail" style="animation-duration:1.6s;transform-origin:100% 50%"><path d="M28.5 22.6C22.5 16 11.25 17.1 12 27C11.25 36.9 22.5 38 28.5 31.4Z" fill="#9a8a7a"/><g stroke="#fff" stroke-width="0.45" opacity="0.5" fill="none" stroke-linecap="round"><path d="M28 27Q21.88 21.86 15.75 17.65"/><path d="M28 27Q20.15 24.58 12.3 22.6"/><path d="M28 27Q20 27 12 27"/><path d="M28 27Q20.15 29.42 12.3 31.4"/><path d="M28 27Q21.88 32.14 15.75 36.35"/></g></g><g class="zvRip" style="animation-duration:2.4s;transform-origin:30% 100%"><path d="M40 17C42.7 11.6 48.1 10.7 52.6 11C55.3 13.4 56.92 15.8 58 18Z" fill="#8a7a6a"/><path d="M40 17C42.7 11.6 48.1 10.7 52.6 11C55.3 13.4 56.92 15.8 58 18Z" fill="none" stroke="#fff" stroke-width=".35" opacity="0.45"/></g><g class="zvRip" style="animation-duration:2.4s;animation-delay:0.7s;transform-origin:30% 0"><path d="M36 37C41.2 43.3 49 44.35 55.5 44C58.1 40.5 60.7 38.4 62 36Z" fill="#9a8270"/><path d="M36 37C41.2 43.3 49 44.35 55.5 44C58.1 40.5 60.7 38.4 62 36Z" fill="none" stroke="#fff" stroke-width=".35" opacity="0.45"/></g><path class="zvFeel" style="animation-duration:3.4s;transform-origin:0 0" d="M52 36Q50 46 44 55" stroke="#f0a070" stroke-width="1.2" fill="none" stroke-linecap="round"/><path class="zvFeel" style="animation-duration:3.4s;animation-delay:1.5s;transform-origin:0 0" d="M55 36Q55 46 51 56" stroke="#f0a070" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M73 27.6C72.4 20.4 59.25 15 48 15C37.5 15 30 21.4 27 22.6L27 31.4C30 32.6 37.5 39 48 39C60.5 39 72.4 32.28 73 27.6Z" fill="url(#AgB)"/><g clip-path="url(#AgK)"><rect x="25" y="13" width="50" height="35.2" fill="url(#AgS)"/><circle class="zvGlint" style="animation-duration:2.8s" cx="34" cy="22" r="0.7" fill="#fffaf0"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:0.53s" cx="38" cy="27" r="0.8" fill="#fffaf0"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:1.06s" cx="42" cy="21" r="0.7" fill="#fffaf0"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:1.59s" cx="46" cy="30" r="0.75" fill="#fffaf0"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:2.12s" cx="50" cy="24" r="0.8" fill="#fffaf0"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:2.65s" cx="54" cy="18" r="0.6" fill="#fffaf0"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:0.38s" cx="56" cy="30" r="0.7" fill="#fffaf0"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:0.91s" cx="60" cy="22" r="0.65" fill="#fffaf0"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:1.44s" cx="36" cy="31" r="0.6" fill="#fffaf0"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:1.97s" cx="44" cy="16" r="0.55" fill="#fffaf0"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:2.5s" cx="40" cy="34" r="0.6" fill="#fffaf0"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:0.23s" cx="52" cy="34" r="0.6" fill="#fffaf0"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:0.76s" cx="62" cy="27" r="0.6" fill="#fffaf0"/><path d="M30 27C40 26.4 52 26 62 25" stroke="#3a2e2a" stroke-width="1.2" stroke-dasharray="4 2.4" fill="none" opacity=".55"/></g><path class="zvGill" d="M58.7 17.8Q54.74 25 58.7 32.2" stroke="#4a3a32" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.5s;transform-origin:85% 15%" d="M60 30C57.3 31.35 54.6 33.6 54.15 35.58C56.4 34.95 58.65 33.06 60.54 31.08Z" fill="#c8b49e"/><circle cx="65" cy="23.5" r="3" fill="#15151f"/><circle cx="65" cy="23.5" r="2.4" fill="url(#AgI)"/><g class="zvLook"><circle cx="65.36" cy="23.65" r="1.26" fill="#07070c"/></g><ellipse cx="65.96" cy="22.36" rx="0.9" ry="0.6" fill="#fff" opacity=".9" transform="rotate(-30 65.96 22.36)"/><circle cx="63.95" cy="24.7" r="0.33" fill="#fff" opacity=".7"/><path class="zvM" d="M72.8 27.7q-1.6 0.9 -3.2 0.2" stroke="#3a2a2a" stroke-width="0.8" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="71.7" cy="28.1" rx="1.5" ry="2" fill="#2a1418"/><ellipse cx="71.5" cy="28.8" rx="0.8" ry="0.6" fill="#c25a6a"/></g><ellipse class="zvSheen" cx="46" cy="18" rx="9" ry="2" fill="#fff" transform="rotate(-6 46 18)"/></g>'),
  (FSH.zv_globe = (e) =>
    '<defs><radialGradient id="Ag2B" cx="0.45" cy="0.32" r="0.7"><stop offset="0" stop-color="#fffbea"/><stop offset="0.45" stop-color="#e8d48a"/><stop offset="0.75" stop-color="#b8a04a"/><stop offset="1" stop-color="#7a6a2a"/></radialGradient><linearGradient id="Ag2V" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f2ead0"/></linearGradient><radialGradient id="Ag2I" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#d8ffe8"/><stop offset="0.7" stop-color="#3a9a6a"/><stop offset="1" stop-color="#0a3a2a"/></radialGradient><clipPath id="Ag2K"><ellipse cx="46" cy="27" rx="17" ry="16"/></clipPath></defs><g class="zvW tPuff"><g class="zvTail" style="animation-duration:0.9s;transform-origin:100% 50%"><path d="M31 27C26 22 21 20 17 21 19 24 19 26 18 27 19 28 19 30 17 33 21 34 26 32 31 27Z" fill="#c8b45a"/></g><g class="zvBreath" style="animation-duration:2.4s"><path d="M62.5 27l2.6 0" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><path d="M61.83 31.37l2.49 0.73" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><path d="M59.88 35.38l2.19 1.41" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><path d="M56.81 38.71l1.7 1.96" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><path d="M52.85 41.1l1.08 2.37" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><path d="M48.35 42.34l0.37 2.57" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><path d="M43.65 42.34l-0.37 2.57" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><path d="M39.15 41.1l-1.08 2.37" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><path d="M35.19 38.71l-1.7 1.96" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><path d="M35.19 15.29l-1.7 -1.96" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><path d="M39.15 12.9l-1.08 -2.37" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><path d="M43.65 11.66l-0.37 -2.57" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><path d="M48.35 11.66l0.37 -2.57" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><path d="M52.85 12.9l1.08 -2.37" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><path d="M56.81 15.29l1.7 -1.96" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><path d="M59.88 18.62l2.19 -1.41" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><path d="M61.83 22.63l2.49 -0.73" stroke="#6a5a2a" stroke-width=".9" stroke-linecap="round"/><ellipse cx="46" cy="27" rx="17" ry="16" fill="url(#Ag2B)"/><g clip-path="url(#Ag2K)"><path d="M28 31C36 44 58 46 66 32 66 46 28 46 28 31Z" fill="url(#Ag2V)"/><circle cx="36" cy="18" r="1.4" fill="#4a3a1a"/><circle cx="44" cy="14" r="1.2" fill="#4a3a1a"/><circle cx="52" cy="15" r="1.3" fill="#4a3a1a"/><circle cx="40" cy="23" r="1.1" fill="#4a3a1a"/><circle cx="48" cy="20" r="0.9" fill="#4a3a1a"/><circle cx="32" cy="26" r="1.1" fill="#4a3a1a"/><circle cx="58" cy="19" r="1" fill="#4a3a1a"/></g><ellipse class="zvSheen" cx="42" cy="17" rx="7" ry="2.6" fill="#fff" transform="rotate(-10 42 17)"/></g><path class="zvPec" style="animation-duration:0.3s;transform-origin:0 50%" d="M50 31C46 33 45 36 46 38 49 37 51 34 50 31Z" fill="#d8c47a"/><path class="zvGill" d="M52 22Q49.25 27 52 32" stroke="#6a5a2a" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><circle cx="57" cy="22" r="3.6" fill="#15151f"/><circle cx="57" cy="22" r="2.9" fill="url(#Ag2I)"/><g class="zvLook"><circle cx="57.4" cy="22.2" r="1.5" fill="#07070c"/></g><ellipse cx="58.2" cy="20.8" rx="1" ry=".7" fill="#fff" opacity=".9"/><path class="zvM" d="M63 29.6q1.4-.8 2.8 0q-1.4 1-2.8 0Z" fill="#8a6a3a"/><g class="zvMo"><ellipse cx="64.4" cy="29.8" rx="1.8" ry="2.2" fill="#2a1418"/></g></g>'),
  (FSH.zv_ange = (e) =>
    '<defs><linearGradient id="AaB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a8a92"/><stop offset="0.35" stop-color="#e8e8ee"/><stop offset="0.7" stop-color="#f8f4e4"/><stop offset="1" stop-color="#c8b890"/></linearGradient><pattern id="AaS" width="2.6" height="2.2" patternUnits="userSpaceOnUse"><path d="M0 2.2a1.3 1.3 0 0 1 2.6 0M-1.3 1.1a1.3 1.3 0 0 1 2.6 0M1.3 1.1a1.3 1.3 0 0 1 2.6 0" stroke="#7a7a8a" stroke-width=".26" fill="none" opacity="0.19"/></pattern><radialGradient id="AaI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#ffe8b8"/><stop offset="0.7" stop-color="#c8462a"/><stop offset="1" stop-color="#3a0a0a"/></radialGradient><linearGradient id="AaF" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8c8d0"/><stop offset="1" stop-color="#f4f0e0"/></linearGradient><clipPath id="AaK"><path d="M30 25C34 12 46 5 58 8 66 11 72 18 72 25 72 32 66 39 58 42 46 45 34 38 30 25Z"/></clipPath></defs><g class="zvW tTurn"><g class="zvStream" style="animation-duration:3.4s;transform-origin:90% 100%"><path d="M46 9C44-2 36-7 24-8 32-3 37 4 40 11Z" fill="url(#AaF)"/><path d="M46 9C44-2 36-7 24-8" stroke="#1a1a24" stroke-width=".9" fill="none"/></g><g class="zvStream" style="animation-duration:3.4s;animation-delay:1.7s;transform-origin:90% 0"><path d="M46 41C44 52 36 57 22 58 30 53 36 46 40 39Z" fill="url(#AaF)"/><path d="M46 41C44 52 36 57 22 58" stroke="#1a1a24" stroke-width=".9" fill="none"/></g><g class="zvTail" style="animation-duration:2s;transform-origin:100% 50%"><path d="M31 25C26 18 20 15 13 15 17 20 18 23 17 25 18 27 17 30 13 35 20 35 26 32 31 25Z" fill="url(#AaF)"/><g stroke="#8a8a92" stroke-width="0.4" opacity="0.6" fill="none" stroke-linecap="round"><path d="M30 25Q21.5 19.5 13 15"/><path d="M30 25Q23 22.25 16 20"/><path d="M30 25Q23.5 25 17 25"/><path d="M30 25Q23 27.75 16 30"/><path d="M30 25Q21.5 30.5 13 35"/></g></g><path d="M30 25C34 12 46 5 58 8 66 11 72 18 72 25 72 32 66 39 58 42 46 45 34 38 30 25Z" fill="url(#AaB)"/><g clip-path="url(#AaK)"><rect x="28" y="4" width="46" height="44" fill="url(#AaS)"/><path d="M40 4V48" stroke="#1a1a24" stroke-width="3.2"/><path d="M51 4V48" stroke="#1a1a24" stroke-width="2.8"/><path d="M61 4V48" stroke="#1a1a24" stroke-width="2"/></g><path class="zvGill" d="M60 21Q57.25 26 60 31" stroke="#5a5a6a" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.6s;transform-origin:85% 15%" d="M58 30C55 32 52 35 51 38 54 37 57 34 59 31Z" fill="#e0dccc"/><circle cx="65" cy="22" r="2.6" fill="#15151f"/><circle cx="65" cy="22" r="2.1" fill="url(#AaI)"/><g class="zvLook"><circle cx="65.3" cy="22.1" r="1.1" fill="#07070c"/></g><ellipse cx="65.9" cy="21.1" rx=".7" ry=".5" fill="#fff"/><path class="zvM" d="M71.8 26q-1.28 0.72 -2.56 0.16" stroke="#4a4a5a" stroke-width="0.64" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="70.92" cy="26.32" rx="1.2" ry="1.6" fill="#2a1418"/><ellipse cx="70.76" cy="26.88" rx="0.64" ry="0.48" fill="#c25a6a"/></g><ellipse class="zvSheen" cx="52" cy="13" rx="7" ry="1.6" fill="#fff" transform="rotate(-20 52 13)"/></g>'),
  (FSH.zv_clown = (e) =>
    '<defs><linearGradient id="AkB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8400a"/><stop offset="0.5" stop-color="#ff7a1a"/><stop offset="1" stop-color="#ffb05a"/></linearGradient><pattern id="AkS" width="3" height="2.6" patternUnits="userSpaceOnUse"><path d="M0 2.6a1.5 1.5 0 0 1 3 0M-1.5 1.3a1.5 1.5 0 0 1 3 0M1.5 1.3a1.5 1.5 0 0 1 3 0" stroke="#ffd8a8" stroke-width=".26" fill="none" opacity="0.17"/></pattern><clipPath id="AkK"><path d="M75 27.6C74.4 18 61.25 15 50 15C39 15 31 21.2 28 22.4L28 31.6C31 32.8 39 39 50 39C62.5 39 74.4 34.2 75 27.6Z"/></clipPath><radialGradient id="AkI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#ffd8a8"/><stop offset="0.7" stop-color="#c85a1a"/><stop offset="1" stop-color="#2a0a0a"/></radialGradient></defs><g class="zvW tWiggle"><g class="zvTail" style="animation-duration:0.8s;transform-origin:100% 50%"><path d="M29.5 22.4C23.8 16 13.3 17.1 14 27C13.3 36.9 23.8 38 29.5 31.6Z" fill="#ff7a1a" stroke="#1a0a0a" stroke-width=".9" stroke-linejoin="round"/><g stroke="#1a0a0a" stroke-width="0.45" opacity="0.25" fill="none" stroke-linecap="round"><path d="M29 27Q23.25 21.86 17.5 17.65"/><path d="M29 27Q21.64 24.58 14.28 22.6"/><path d="M29 27Q21.5 27 14 27"/><path d="M29 27Q21.64 29.42 14.28 31.4"/><path d="M29 27Q23.25 32.14 17.5 36.35"/></g></g><g class="zvRip" style="animation-duration:1.6s;transform-origin:30% 100%"><path d="M38 16C41.3 9.7 47.9 8.65 53.4 9C56.7 11.8 58.68 14.6 60 17Z" fill="#ff7a1a"/><path d="M38 16C41.3 9.7 47.9 8.65 53.4 9C56.7 11.8 58.68 14.6 60 17Z" fill="none" stroke="#1a0a0a" stroke-width=".35" opacity="0.5"/></g><g class="zvRip" style="animation-duration:1.6s;animation-delay:0.4s;transform-origin:30% 0"><path d="M44 38C46 42.5 49 43.25 51.5 43C52.5 40.5 53.5 39 54 37Z" fill="#ff7a1a"/><path d="M44 38C46 42.5 49 43.25 51.5 43C52.5 40.5 53.5 39 54 37Z" fill="none" stroke="#1a0a0a" stroke-width=".35" opacity="0.5"/></g><path d="M75 27.6C74.4 18 61.25 15 50 15C39 15 31 21.2 28 22.4L28 31.6C31 32.8 39 39 50 39C62.5 39 74.4 34.2 75 27.6Z" fill="url(#AkB)"/><g clip-path="url(#AkK)"><rect x="26" y="13" width="51" height="35.2" fill="url(#AkS)"/><path d="M34 10Q31 27 34 44" stroke="#14080a" stroke-width="6.4"/><path d="M34 10Q31 27 34 44" stroke="#fff" stroke-width="4.4"/><path d="M26 22Q28 27 26 33" stroke="#14080a" stroke-width="4"/><path d="M26 22Q28 27 26 33" stroke="#fff" stroke-width="2.4"/><path d="M54 10Q50 27 54 44" stroke="#14080a" stroke-width="7.4"/><path d="M54 10Q50 27 54 44" stroke="#fff" stroke-width="5"/><path d="M68 12Q64 27 68 42" stroke="#14080a" stroke-width="5.4"/><path d="M68 12Q64 27 68 42" stroke="#fff" stroke-width="3.2"/></g><path class="zvGill" d="M64.12 17.28Q60.42 24 64.12 30.72" stroke="#1a0a0a" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.5s;transform-origin:85% 15%" d="M62 31C59.3 32.35 56.6 34.6 56.15 36.58C58.4 35.95 60.65 34.06 62.54 32.08Z" fill="#ff8a2a"/><circle cx="70" cy="22.6" r="2.8" fill="#15151f"/><circle cx="70" cy="22.6" r="2.24" fill="url(#AkI)"/><g class="zvLook"><circle cx="70.34" cy="22.74" r="1.18" fill="#07070c"/></g><ellipse cx="70.9" cy="21.54" rx="0.84" ry="0.56" fill="#fff" opacity=".9" transform="rotate(-30 70.9 21.54)"/><circle cx="69.02" cy="23.72" r="0.31" fill="#fff" opacity=".7"/><path class="zvM" d="M74.8 27.7q-1.6 0.9 -3.2 0.2" stroke="#3a0a0a" stroke-width="0.8" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="73.7" cy="28.1" rx="1.5" ry="2" fill="#2a1418"/><ellipse cx="73.5" cy="28.8" rx="0.8" ry="0.6" fill="#c25a6a"/></g><ellipse class="zvSheen" cx="46" cy="17" rx="8" ry="2" fill="#fff" transform="rotate(-6 46 17)"/></g>'),
  (FSH.zv_hippo = (e) =>
    '<defs><linearGradient id="AhB" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffd890"/><stop offset="0.5" stop-color="#f0a23a"/><stop offset="1" stop-color="#b8641a"/></linearGradient><radialGradient id="AhI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#fff8d8"/><stop offset="0.7" stop-color="#3a7a5a"/><stop offset="1" stop-color="#0a2a1a"/></radialGradient></defs><g class="zvW tBob"><g class="zvFlutter" style="animation-duration:0.22s;transform-origin:100% 50%"><path d="M46 20C38 17 34 22 35 28 38 30 42 30 46 29Z" fill="#ffe0a8"/><path d="M46 21 37 22M46 24.5 36 25.5M46 28 38 29" stroke="#c8781a" stroke-width=".4"/></g><path class="zvCurl" style="animation-duration:2.6s;transform-origin:60% 0" d="M52 38C52 47 47 52 41 51 35 50 34 44 38 42 41 40 44 43 42 45" stroke="url(#AhB)" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M58 3C64 3 68 8 67 13 65 19 61 21 61 25 61 32 59 38 51 39 45 39 43 32 45 25 47 17 51 10 53 6 54 4 56 3 58 3Z" fill="url(#AhB)"/><path d="M47 16q3 1.2 6 0" stroke="#8a4a10" stroke-width=".7" fill="none" opacity=".6"/><path d="M46.5 20q3 1.2 6 0" stroke="#8a4a10" stroke-width=".7" fill="none" opacity=".6"/><path d="M46 24q3 1.2 6 0" stroke="#8a4a10" stroke-width=".7" fill="none" opacity=".6"/><path d="M46 28q3 1.2 6 0" stroke="#8a4a10" stroke-width=".7" fill="none" opacity=".6"/><path d="M46.5 32q3 1.2 6 0" stroke="#8a4a10" stroke-width=".7" fill="none" opacity=".6"/><path d="M47.5 36q3 1.2 6 0" stroke="#8a4a10" stroke-width=".7" fill="none" opacity=".6"/><path d="M49 40q3 1.2 6 0" stroke="#8a4a10" stroke-width=".7" fill="none" opacity=".6"/><path d="M65 6.6C69 6 73 6.6 78 7.6 78.6 9 78 10.4 75 10.8 71 11.2 68 11 66 12Z" fill="url(#AhB)"/><path d="M54 3.6L55-1 57 2.6 59-2 60 3Z" fill="#ffc86a" stroke="#b8641a" stroke-width=".5"/><circle cx="62.6" cy="9.6" r="2" fill="#15151f"/><circle cx="62.6" cy="9.6" r="1.6" fill="url(#AhI)"/><g class="zvLook"><circle cx="62.9" cy="9.7" r=".8" fill="#07070c"/></g><ellipse cx="63.2" cy="8.9" rx=".55" ry=".4" fill="#fff"/><path class="zvM" d="M78 8.4v1.8" stroke="#8a4a10" stroke-width=".8" stroke-linecap="round"/><g class="zvMo"><ellipse cx="78.2" cy="9.2" rx="1.2" ry="1.6" fill="#2a1418"/></g><ellipse class="zvSheen" cx="55" cy="10" rx="2" ry="4.4" fill="#fff" transform="rotate(25 55 10)"/></g>'),
  (FSH.zv_discus = (e) =>
    '<defs><radialGradient id="AiB" cx="0.42" cy="0.35" r="0.65"><stop offset="0" stop-color="#d8fff8"/><stop offset="0.5" stop-color="#2ac8c0"/><stop offset="1" stop-color="#0a6a72"/></radialGradient><pattern id="AiS" width="2.4" height="2.2" patternUnits="userSpaceOnUse"><path d="M0 2.2a1.2 1.2 0 0 1 2.4 0M-1.2 1.1a1.2 1.2 0 0 1 2.4 0M1.2 1.1a1.2 1.2 0 0 1 2.4 0" stroke="#fff" stroke-width=".26" fill="none" opacity="0.17"/></pattern><radialGradient id="AiI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#ffd0b0"/><stop offset="0.7" stop-color="#e0281a"/><stop offset="1" stop-color="#4a0a0a"/></radialGradient><clipPath id="AiK"><circle cx="48" cy="26" r="20"/></clipPath></defs><g class="zvW tRoll"><g class="zvTail" style="animation-duration:1.5s;transform-origin:100% 50%"><path d="M30 26C25 21 20 19 16 20 18 23 18 25 17 26 18 27 18 29 16 32 20 33 25 31 30 26Z" fill="#1a9a98"/></g><g class="zvRip" style="animation-duration:2.6s;transform-origin:50% 50%"><circle cx="48" cy="26" r="21.5" fill="#e86a3a"/></g><circle cx="48" cy="26" r="20" fill="url(#AiB)"/><g clip-path="url(#AiK)"><rect x="26" y="4" width="44" height="44" fill="url(#AiS)"/><path class="zvShim" style="animation-duration:3.2s" d="M32 6Q35.4 16 32 26T32 46" stroke="#e85a2a" stroke-width="1.5" fill="none"/><path class="zvShim" style="animation-duration:3.2s;animation-delay:0.45s" d="M37.5 6Q40.9 16 37.5 26T37.5 46" stroke="#e85a2a" stroke-width="1.5" fill="none"/><path class="zvShim" style="animation-duration:3.2s;animation-delay:0.9s" d="M43 6Q46.4 16 43 26T43 46" stroke="#e85a2a" stroke-width="1.5" fill="none"/><path class="zvShim" style="animation-duration:3.2s;animation-delay:1.35s" d="M48.5 6Q51.9 16 48.5 26T48.5 46" stroke="#e85a2a" stroke-width="1.5" fill="none"/><path class="zvShim" style="animation-duration:3.2s;animation-delay:1.8s" d="M54 6Q57.4 16 54 26T54 46" stroke="#e85a2a" stroke-width="1.5" fill="none"/><path class="zvShim" style="animation-duration:3.2s;animation-delay:2.25s" d="M59.5 6Q62.9 16 59.5 26T59.5 46" stroke="#e85a2a" stroke-width="1.5" fill="none"/></g><path class="zvGill" d="M60 21Q56.7 27 60 33" stroke="#0a5a5a" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.6s;transform-origin:85% 15%" d="M58 30C55 32 53 35 52 38 55 37 58 34 59 31Z" fill="#7ae0d8"/><circle cx="62" cy="22" r="2.8" fill="#15151f"/><circle cx="62" cy="22" r="2.3" fill="url(#AiI)"/><g class="zvLook"><circle cx="62.3" cy="22.1" r="1.1" fill="#07070c"/></g><ellipse cx="63" cy="21" rx=".8" ry=".55" fill="#fff"/><path class="zvM" d="M69.6 26.2q-1.28 0.72 -2.56 0.16" stroke="#0a4a4a" stroke-width="0.64" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="68.72" cy="26.52" rx="1.2" ry="1.6" fill="#2a1418"/><ellipse cx="68.56" cy="27.08" rx="0.64" ry="0.48" fill="#c25a6a"/></g><ellipse class="zvSheen" cx="44" cy="13" rx="8" ry="2.4" fill="#fff" transform="rotate(-15 44 13)"/></g>'),
  (FSH.zv_manta = (e) =>
    '<defs><linearGradient id="AwB" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a2050"/><stop offset="0.6" stop-color="#2c3a7a"/><stop offset="1" stop-color="#4a5aa8"/></linearGradient><radialGradient id="AwI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#e8f0ff"/><stop offset="0.7" stop-color="#3a4a8a"/><stop offset="1" stop-color="#0a0a2a"/></radialGradient></defs><g class="zvW tLoop"><path class="zvWhip" style="animation-duration:2.2s;transform-origin:100% 50%" d="M34 25C24 25 14 23 2 27" stroke="#1a2050" stroke-width="1.6" fill="none" stroke-linecap="round"/><g class="zvFlap" style="animation-duration:2.4s;transform-origin:50% 100%"><path d="M80 23C72 11 56 -1 30 -1 40 9 42 17 42 23Z" fill="url(#AwB)"/><path d="M62 14C66 12 70 13 72 16 68 17 64 17 62 14Z" fill="#e8ecf8"/><path d="M30 -1C40 9 42 17 42 23" stroke="#e8ecf8" stroke-width=".8" fill="none" opacity=".7"/></g><g class="zvFlap" style="animation-duration:2.4s;transform-origin:50% 0"><path d="M80 27C72 39 56 51 30 51 40 41 42 33 42 27Z" fill="url(#AwB)"/><path d="M62 36C66 38 70 37 72 34 68 33 64 33 62 36Z" fill="#e8ecf8"/></g><path d="M40 25C40 18 56 15 70 17 78 18 83 21 83 25 83 29 78 32 70 33 56 35 40 32 40 25Z" fill="url(#AwB)"/><path d="M80 19C85 17 87 19 86 22M80 31C85 33 87 31 86 28" stroke="#2c3a7a" stroke-width="2.2" fill="none" stroke-linecap="round"/><circle cx="74" cy="20.4" r="1.5" fill="#15151f"/><circle cx="74" cy="20.4" r="1.1" fill="url(#AwI)"/><circle cx="74.4" cy="20" r=".4" fill="#fff"/><circle cx="74" cy="29.6" r="1.5" fill="#15151f"/><circle cx="74" cy="29.6" r="1.1" fill="url(#AwI)"/><circle cx="74.4" cy="29.2" r=".4" fill="#fff"/><path class="zvM" d="M82.6 23v4" stroke="#0a0a2a" stroke-width="1" stroke-linecap="round"/><g class="zvMo"><ellipse cx="82" cy="25" rx="1.6" ry="3" fill="#0a0a1a"/></g><ellipse class="zvSheen" cx="60" cy="21" rx="10" ry="1.6" fill="#fff" transform="rotate(-4 60 21)"/></g>'),
  (FSH.zv_lune = (e) =>
    '<defs><linearGradient id="AlB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a6a2a"/><stop offset="0.35" stop-color="#e8c060"/><stop offset="0.75" stop-color="#f8e8b0"/><stop offset="1" stop-color="#fffaf0"/></linearGradient><pattern id="AlS" width="3" height="2.6" patternUnits="userSpaceOnUse"><path d="M0 2.6a1.5 1.5 0 0 1 3 0M-1.5 1.3a1.5 1.5 0 0 1 3 0M1.5 1.3a1.5 1.5 0 0 1 3 0" stroke="#8a6a2a" stroke-width=".26" fill="none" opacity="0.14"/></pattern><linearGradient id="AlF" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b8902a"/><stop offset="1" stop-color="#f0d070"/></linearGradient><radialGradient id="AlI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#fff4d0"/><stop offset="0.7" stop-color="#5a6a8a"/><stop offset="1" stop-color="#0a0a1a"/></radialGradient><clipPath id="AlK"><path d="M48 7C63 7 73 16 73 27 73 38 63 46 48 46 36 46 28 38 28 27 28 16 36 7 48 7Z"/></clipPath></defs><g class="zvW tBob"><g class="zvPad" style="animation-duration:1.8s;transform-origin:50% 100%"><path d="M44 10C44-1 50-7 57-7 59 0 57 6 52 11Z" fill="url(#AlF)"/><path d="M50 9 54-5" stroke="#8a6a2a" stroke-width=".5" opacity=".6"/></g><g class="zvPad" style="animation-duration:1.8s;animation-delay:0.9s;transform-origin:50% 0"><path d="M44 44C44 55 50 60 57 60 59 53 57 47 52 43Z" fill="url(#AlF)"/><path d="M50 45 54 58" stroke="#8a6a2a" stroke-width=".5" opacity=".6"/></g><path class="zvClavus" style="animation-duration:2.2s;transform-origin:100% 50%" d="M30 15C24 19 23 27 25 33 27 38 30 40 31 40Z" fill="#d0a848"/><path d="M48 7C63 7 73 16 73 27 73 38 63 46 48 46 36 46 28 38 28 27 28 16 36 7 48 7Z" fill="url(#AlB)"/><g clip-path="url(#AlK)"><rect x="26" y="5" width="50" height="44" fill="url(#AlS)"/><circle class="zvGlint" style="animation-duration:2.8s" cx="40" cy="30" r="0.6" fill="#fff8dc"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:0.53s" cx="52" cy="20" r="0.5" fill="#fff8dc"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:1.06s" cx="46" cy="36" r="0.5" fill="#fff8dc"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:1.59s" cx="58" cy="32" r="0.55" fill="#fff8dc"/></g><path class="zvGill" d="M64 23Q61.8 27 64 31" stroke="#8a6a2a" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.7s;transform-origin:85% 15%" d="M62 30C59 32 57 35 56 37 59 37 62 34 63 31Z" fill="#e0b850"/><circle cx="66" cy="23" r="2.6" fill="#15151f"/><circle cx="66" cy="23" r="2.1" fill="url(#AlI)"/><g class="zvLook"><circle cx="66.3" cy="23.1" r="1.1" fill="#07070c"/></g><ellipse cx="66.9" cy="22" rx=".75" ry=".5" fill="#fff"/><path class="zvM" d="M71.6 28.4a1.3 1.3 0 1 0 .01 0Z" fill="#6a4a1a"/><g class="zvMo"><ellipse cx="71.6" cy="29" rx="1.8" ry="2.2" fill="#2a1418"/></g><ellipse class="zvSheen" cx="46" cy="14" rx="9" ry="2.2" fill="#fff" transform="rotate(-10 46 14)"/></g>'),
  (FSH.zv_tortue = (e) =>
    '<defs><radialGradient id="AtS" cx="0.45" cy="0.3" r="0.7"><stop offset="0" stop-color="#c8a868"/><stop offset="0.5" stop-color="#7a6a3a"/><stop offset="1" stop-color="#3a3a1a"/></radialGradient><linearGradient id="AtK" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a8b878"/><stop offset="1" stop-color="#5a6a3a"/></linearGradient><radialGradient id="AtI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#fff4d0"/><stop offset="0.7" stop-color="#4a3a1a"/><stop offset="1" stop-color="#0a0a0a"/></radialGradient><pattern id="AtP" width="2.4" height="2.4" patternUnits="userSpaceOnUse"><path d="M0 0h2.4v2.4" stroke="#3a4a1a" stroke-width=".35" fill="none"/></pattern></defs><g class="zvW tShy"><g class="zvPad" style="animation-duration:1.5s;transform-origin:80% 20%"><path d="M30 34Q18 42 12 52Q26 50 36 38Z" fill="url(#AtK)"/><path d="M30 34Q18 42 12 52Q26 50 36 38Z" fill="url(#AtP)"/></g><g class="zvPad" style="animation-duration:1.5s;animation-delay:0.75s;transform-origin:20% 20%"><path d="M56 34Q70 38 74 54Q58 50 50 38Z" fill="url(#AtK)"/><path d="M56 34Q70 38 74 54Q58 50 50 38Z" fill="url(#AtP)"/></g><path d="M22 30 12 32 22 34Z" fill="#7a8a4a"/><g class="zvHead"><path d="M62 30Q68 27 72 28" stroke="#8a9a5a" stroke-width="7" stroke-linecap="round" fill="none"/><path d="M68 21C76 19 84 23 84 28 84 33 77 35 71 33 67 31 66 24 68 21Z" fill="url(#AtK)"/><path d="M70 23h3v3h-3zM74 22.4h3v3h-3zM72 27h3v3h-3z" fill="none" stroke="#3a4a1a" stroke-width=".5" opacity=".7"/><circle cx="78" cy="25" r="1.8" fill="#15151f"/><circle cx="78" cy="25" r="1.4" fill="url(#AtI)"/><circle cx="78.5" cy="24.4" r=".45" fill="#fff"/><path class="zvM" d="M84 29.6q-2.4 .9-4.6 .3" stroke="#2a3a1a" stroke-width=".8" fill="none"/><g class="zvMo"><path d="M84 28.6q-2.6 2.6-5 1.4" stroke="#2a1418" stroke-width="2" fill="none" stroke-linecap="round"/></g></g><path d="M20 34C20 14 34 6 46 6 60 6 70 16 70 34Z" fill="url(#AtS)"/><path d="M20 34H70Q66 41 45 41 24 41 20 34Z" fill="#e8d8a0"/><path d="M26 38H64" stroke="#b8a868" stroke-width=".6"/><g fill="none" stroke="#2a2a10" stroke-width="1.1" stroke-linejoin="round" opacity=".7"><path d="M45 12 54 17V27L45 32 36 27V17Z"/><path d="M54 17 63 15M54 27 64 30M36 27 26 30M36 17 27 15M45 12V7M45 32V34"/></g><g fill="#e8c878" opacity=".35"><path d="M45 14 52 18V26L45 30 38 26V18Z"/></g><ellipse class="zvSheen" cx="38" cy="13" rx="7" ry="2" fill="#fff" transform="rotate(-30 38 13)"/></g>'),
  (FSH.zv_etoile = (e) =>
    '<defs><linearGradient id="AetB" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#e8fbff"/><stop offset="0.4" stop-color="#7fe0ff"/><stop offset="0.75" stop-color="#8a6bff"/><stop offset="1" stop-color="#ff8ad8"/></linearGradient><linearGradient id="AetT" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#ff8ad8"/><stop offset="1" stop-color="#9fe9ff" stop-opacity="0"/></linearGradient><linearGradient id="AetF" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#a98aff" stop-opacity=".75"/><stop offset="1" stop-color="#7fe0ff" stop-opacity=".85"/></linearGradient><radialGradient id="AetG" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#7fe0ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe0ff" stop-opacity="0"/></radialGradient><clipPath id="AetK"><path d="M80 25.5C79.4 17 64 13.6 50 13.6C38 13.6 30 20 26 23L26 28C30 31 38 37.4 50 37.4C64 37.4 79.4 34 80 25.5Z"/></clipPath><radialGradient id="AetI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#bff6ff"/><stop offset="0.6" stop-color="#5a4cd8"/><stop offset="1" stop-color="#140a50"/></radialGradient></defs><ellipse class="dqGlow" cx="52" cy="25.5" rx="46" ry="25" fill="url(#AetG)"/><g transform="translate(80 25.5) scale(.82) translate(-80 -25.5)"><g class="zvW tDart"><g class="zvTail" style="animation-duration:0.9s;transform-origin:100% 50%"><path d="M27 23C12 18 -2 12 -13 6C-6 18 -6 24 -6 25.5C-6 27 -6 33 -13 45C-2 39 12 33 27 28Z" fill="url(#AetT)" opacity=".8"/><path d="M26 25.5C10 25.5 -2 25.5 -13 25.5" stroke="#bff6ff" stroke-width="1.4" stroke-linecap="round" opacity=".8"/><path d="M26 24C10 20 -2 14 -12 9" stroke="#ff8ad8" stroke-width="1.2" stroke-linecap="round" opacity=".8" fill="none"/><path d="M26 27C10 31 -2 37 -12 42" stroke="#9fe9ff" stroke-width="1.2" stroke-linecap="round" opacity=".8" fill="none"/></g><g class="zvRip" style="animation-duration:1.6s;transform-origin:30% 100%"><path d="M42 18C46 3 64 -2 78 7C66 11 56 15 51 19Z" fill="url(#AetF)" stroke="#fff" stroke-width=".5" stroke-opacity=".6"/><path d="M47 16C54 8 62 5 72 6M52 17C58 11 64 8 70 8" stroke="#fff" stroke-width=".4" opacity=".5" fill="none"/><path class="dqTw" style="animation-delay:.3s" d="M78 7l1 2.4 2.5.3-1.9 1.7.5 2.5-2.1-1.3-2.1 1.3.5-2.5-1.9-1.7 2.5-.3z" fill="#fff7c8"/></g><g class="zvRip" style="animation-duration:1.6s;animation-delay:.5s;transform-origin:30% 0"><path d="M42 33C46 48 64 53 78 44C66 40 56 36 51 32Z" fill="url(#AetF)" stroke="#fff" stroke-width=".5" stroke-opacity=".6"/></g><path d="M80 25.5C79.4 17 64 13.6 50 13.6C38 13.6 30 20 26 23L26 28C30 31 38 37.4 50 37.4C64 37.4 79.4 34 80 25.5Z" fill="url(#AetB)"/><g clip-path="url(#AetK)"><circle class="dqTw" style="animation-delay:0s" cx="40" cy="22" r=".9" fill="#fff"/><circle class="dqTw" style="animation-delay:.5s" cx="47" cy="30" r="1.1" fill="#fff"/><circle class="dqTw" style="animation-delay:.9s" cx="56" cy="21" r=".8" fill="#fff"/><circle class="dqTw" style="animation-delay:1.3s" cx="60" cy="31" r="1" fill="#fff"/><circle class="dqTw" style="animation-delay:1.7s" cx="34" cy="28" r=".8" fill="#fff"/><path d="M40 22L47 30 56 21 60 31" stroke="#fff" stroke-width=".35" fill="none" opacity=".5"/></g><path class="zvPec" style="animation-duration:0.5s;transform-origin:85% 15%" d="M58 28C54 31 52 35 52 38C56 36 59 33 61 30Z" fill="#c9b8ff" opacity=".8"/><path d="M64 15.6l1.5 3.4 3.6.4-2.7 2.4.8 3.6-3.2-1.9-3.2 1.9.8-3.6-2.7-2.4 3.6-.4z" fill="#ffe9a8"/><circle cx="71" cy="22.6" r="3.6" fill="#fff"/><circle cx="71" cy="22.6" r="2.9" fill="url(#AetI)"/><g class="zvLook"><circle cx="71.4" cy="22.8" r="1.4" fill="#07070c"/></g><circle cx="70.2" cy="21.4" r=".9" fill="#fff"/><path class="zvM" d="M79.8 25.6q-1.4 0.8 -2.8 0.2" stroke="#3a2a7a" stroke-width="0.7" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="78.8" cy="26" rx="1.3" ry="1.8" fill="#2a1438"/><ellipse cx="78.6" cy="26.6" rx="0.7" ry="0.5" fill="#c25a8a"/></g></g></g>'),
  (FSH.zv_etoile2d = (e) =>
    '<defs><clipPath id="AesK"><path d="M80 25.5C79.4 17 64 13.6 50 13.6C38 13.6 30 20 26 23L26 28C30 31 38 37.4 50 37.4C64 37.4 79.4 34 80 25.5Z"/></clipPath></defs><g transform="translate(80 25.5) scale(.82) translate(-80 -25.5)"><g class="zvW tDart"><g class="zvTail" style="animation-duration:0.9s;transform-origin:100% 50%"><path d="M27 23C12 18 -2 12 -13 6C-6 18 -6 33 -13 45C-2 39 12 33 27 28Z" fill="#ff8ad8" stroke="#1a1040" stroke-width="1.8" stroke-linejoin="round"/></g><g class="zvRip" style="animation-duration:1.6s;transform-origin:30% 100%"><path d="M42 18C46 3 64 -2 78 7C66 11 56 15 51 19Z" fill="#5a8cff" stroke="#1a1040" stroke-width="1.8" stroke-linejoin="round"/></g><g class="zvRip" style="animation-duration:1.6s;animation-delay:.5s;transform-origin:30% 0"><path d="M42 33C46 48 64 53 78 44C66 40 56 36 51 32Z" fill="#5a8cff" stroke="#1a1040" stroke-width="1.8" stroke-linejoin="round"/></g><path d="M80 25.5C79.4 17 64 13.6 50 13.6C38 13.6 30 20 26 23L26 28C30 31 38 37.4 50 37.4C64 37.4 79.4 34 80 25.5Z" fill="#7a6bff" stroke="#1a1040" stroke-width="2.2" stroke-linejoin="round"/><g clip-path="url(#AesK)"><ellipse cx="54" cy="35" rx="24" ry="6" fill="#b9c8ff"/></g><circle cx="40" cy="22" r="1.1" fill="#fff"/><circle cx="56" cy="21" r="1.1" fill="#fff"/><circle cx="46" cy="29" r="1.1" fill="#fff"/><path d="M64 15.6l1.5 3.4 3.6.4-2.7 2.4.8 3.6-3.2-1.9-3.2 1.9.8-3.6-2.7-2.4 3.6-.4z" fill="#ffe9a8" stroke="#1a1040" stroke-width="1.1"/><circle cx="71" cy="22.6" r="3.6" fill="#fff" stroke="#1a1040" stroke-width="1.3"/><g class="zvLook"><circle cx="71.4" cy="22.8" r="2" fill="#1a1040"/></g><circle cx="70.4" cy="21.6" r=".8" fill="#fff"/><path class="zvM" d="M79.8 25.6q-1.4 0.8 -2.8 0.2" stroke="#1a1040" stroke-width="0.9" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="78.8" cy="26" rx="1.3" ry="1.8" fill="#2a1438"/></g></g></g>'),
  (FSH.zv_hockey = (e) =>
    '<defs><linearGradient id="Ah2B" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a6ab0"/><stop offset="0.5" stop-color="#5ab8f0"/><stop offset="1" stop-color="#d8f2ff"/></linearGradient><pattern id="Ah2S" width="3" height="2.6" patternUnits="userSpaceOnUse"><path d="M0 2.6a1.5 1.5 0 0 1 3 0M-1.5 1.3a1.5 1.5 0 0 1 3 0M1.5 1.3a1.5 1.5 0 0 1 3 0" stroke="#fff" stroke-width=".26" fill="none" opacity="0.17"/></pattern><clipPath id="Ah2K"><path d="M73 25.4C72.4 16.6 59.25 13 48 13C37.5 13 30 19.4 27 20.6L27 29.4C30 30.6 37.5 37 48 37C60.5 37 72.4 31.72 73 25.4Z"/></clipPath><radialGradient id="Ah2I" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#e8f8ff"/><stop offset="0.7" stop-color="#2a6ab0"/><stop offset="1" stop-color="#0a1a3a"/></radialGradient></defs><g class="zvW tDart"><g class="zvTail" style="animation-duration:0.8s;transform-origin:100% 50%"><path d="M28.5 20.6C21 20 15 15 12 14.5C15.75 21 18 24 18.75 25C18 26 15.75 29 12 35.5C15 35 21 30 28.5 29.4Z" fill="#4aa8e8"/><g stroke="#fff" stroke-width="0.45" opacity="0.45" fill="none" stroke-linecap="round"><path d="M28 25Q20 19.23 12 14.5"/><path d="M28 25Q21.65 21.98 15.3 19.5"/><path d="M28 25Q23.38 25 18.75 25"/><path d="M28 25Q21.65 28.02 15.3 30.5"/><path d="M28 25Q20 30.77 12 35.5"/></g></g><g class="zvRip" style="animation-duration:1.6s;transform-origin:30% 100%"><path d="M40 15C42.1 9.6 46.3 8.7 49.8 9C51.9 11.4 53.16 13.8 54 16Z" fill="#4aa8e8"/><path d="M40 15C42.1 9.6 46.3 8.7 49.8 9C51.9 11.4 53.16 13.8 54 16Z" fill="none" stroke="#fff" stroke-width=".35" opacity="0.45"/></g><g class="zvRip" style="animation-duration:1.6s;animation-delay:0.5s;transform-origin:30% 0"><path d="M44 35C46 39.5 49 40.25 51.5 40C52.5 37.5 53.5 36 54 34Z" fill="#4aa8e8"/><path d="M44 35C46 39.5 49 40.25 51.5 40C52.5 37.5 53.5 36 54 34Z" fill="none" stroke="#fff" stroke-width=".35" opacity="0.45"/></g><path d="M73 25.4C72.4 16.6 59.25 13 48 13C37.5 13 30 19.4 27 20.6L27 29.4C30 30.6 37.5 37 48 37C60.5 37 72.4 31.72 73 25.4Z" fill="url(#Ah2B)"/><g clip-path="url(#Ah2K)"><rect x="25" y="11" width="50" height="35.2" fill="url(#Ah2S)"/><path d="M34 6V46M40 6V46" stroke="#d63a52" stroke-width="2.6"/><path d="M37 6V46" stroke="#fff" stroke-width="2.4"/></g><path class="zvGill" d="M57.12 16.68Q53.42 23.4 57.12 30.12" stroke="#1b2a4a" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.5s;transform-origin:85% 15%" d="M58 29C55.3 30.35 52.6 32.6 52.15 34.58C54.4 33.95 56.65 32.06 58.54 30.08Z" fill="#4aa8e8"/><circle cx="63" cy="22" r="2.8" fill="#15151f"/><circle cx="63" cy="22" r="2.24" fill="url(#Ah2I)"/><g class="zvLook"><circle cx="63.34" cy="22.14" r="1.18" fill="#07070c"/></g><ellipse cx="63.9" cy="20.94" rx="0.84" ry="0.56" fill="#fff" opacity=".9" transform="rotate(-30 63.9 20.94)"/><circle cx="62.02" cy="23.12" r="0.31" fill="#fff" opacity=".7"/><path class="zvM" d="M72.8 25.5q-1.6 0.9 -3.2 0.2" stroke="#1b1b2f" stroke-width="0.8" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="71.7" cy="25.9" rx="1.5" ry="2" fill="#2a1418"/><ellipse cx="71.5" cy="26.6" rx="0.8" ry="0.6" fill="#c25a6a"/></g><ellipse class="zvSheen" cx="44" cy="16" rx="8" ry="2" fill="#fff" transform="rotate(-6 44 16)"/><path d="M52 30L70 49" stroke="#c98a4b" stroke-width="3" stroke-linecap="round"/><path d="M70 49L80 50" stroke="#3a2a1a" stroke-width="4" stroke-linecap="round"/><ellipse cx="82" cy="54" rx="3.2" ry="1.6" fill="#1b1b2f"/><path d="M53.8 11.8C52.2 5.6 57.4 3.4 62.8 3.8C68.2 4.2 71.4 9 72.4 18.2C68 15.4 62 13.4 53.8 11.8Z" fill="#1f4fbf"/><path d="M57 5.4Q55.6 9 55.6 12.4M60.5 4.4Q59.6 8.6 60 13.4M64.2 4.6Q64.2 9.6 65 14.4M67.8 6.2Q68.6 10.6 69.6 16" stroke="#6f93ff" stroke-width=".7" fill="none" opacity=".55"/><path d="M53.4 12.6C57 13.2 61 14 64.5 15.2C67.6 16.4 70.2 18.2 72 20.2" stroke="#eef3ff" stroke-width="3.6" fill="none" stroke-linecap="round"/><path d="M56 11.6L56.6 14.2M59.4 12.4L59.8 15M62.8 13.2L63 15.8M66.2 14.6L66 17.2M69.2 16.4L68.6 18.8" stroke="#b9c8f0" stroke-width=".8" stroke-linecap="round"/><circle cx="63" cy="3" r="2.7" fill="#eef3ff"/><circle cx="62.2" cy="2.3" r=".7" fill="#fff"/><circle cx="64" cy="3.6" r=".6" fill="#c9d6f6"/></g>'),
  (FSH.zv_gardien = (e) =>
    '<defs><linearGradient id="Ag3B" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c88a10"/><stop offset="0.5" stop-color="#ffc83a"/><stop offset="1" stop-color="#fff2c8"/></linearGradient><pattern id="Ag3S" width="3" height="2.6" patternUnits="userSpaceOnUse"><path d="M0 2.6a1.5 1.5 0 0 1 3 0M-1.5 1.3a1.5 1.5 0 0 1 3 0M1.5 1.3a1.5 1.5 0 0 1 3 0" stroke="#fff" stroke-width=".26" fill="none" opacity="0.17"/></pattern><clipPath id="Ag3K"><path d="M73 25.4C72.4 16.6 59.25 13 48 13C37.5 13 30 19.4 27 20.6L27 29.4C30 30.6 37.5 37 48 37C60.5 37 72.4 31.72 73 25.4Z"/></clipPath><radialGradient id="Ag3I" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#fff8d8"/><stop offset="0.7" stop-color="#8a6a1a"/><stop offset="1" stop-color="#2a1a0a"/></radialGradient></defs><g class="zvW tWiggle"><g class="zvTail" style="animation-duration:0.8s;transform-origin:100% 50%"><path d="M28.5 20.6C21 20 15 15 12 14.5C15.75 21 18 24 18.75 25C18 26 15.75 29 12 35.5C15 35 21 30 28.5 29.4Z" fill="#f0b42a"/><g stroke="#fff" stroke-width="0.45" opacity="0.45" fill="none" stroke-linecap="round"><path d="M28 25Q20 19.23 12 14.5"/><path d="M28 25Q21.65 21.98 15.3 19.5"/><path d="M28 25Q23.38 25 18.75 25"/><path d="M28 25Q21.65 28.02 15.3 30.5"/><path d="M28 25Q20 30.77 12 35.5"/></g></g><g class="zvRip" style="animation-duration:1.6s;transform-origin:30% 100%"><path d="M40 15C42.1 9.6 46.3 8.7 49.8 9C51.9 11.4 53.16 13.8 54 16Z" fill="#f0b42a"/><path d="M40 15C42.1 9.6 46.3 8.7 49.8 9C51.9 11.4 53.16 13.8 54 16Z" fill="none" stroke="#fff" stroke-width=".35" opacity="0.45"/></g><g class="zvRip" style="animation-duration:1.6s;animation-delay:0.5s;transform-origin:30% 0"><path d="M44 35C46 39.5 49 40.25 51.5 40C52.5 37.5 53.5 36 54 34Z" fill="#f0b42a"/><path d="M44 35C46 39.5 49 40.25 51.5 40C52.5 37.5 53.5 36 54 34Z" fill="none" stroke="#fff" stroke-width=".35" opacity="0.45"/></g><path d="M73 25.4C72.4 16.6 59.25 13 48 13C37.5 13 30 19.4 27 20.6L27 29.4C30 30.6 37.5 37 48 37C60.5 37 72.4 31.72 73 25.4Z" fill="url(#Ag3B)"/><g clip-path="url(#Ag3K)"><rect x="25" y="11" width="50" height="35.2" fill="url(#Ag3S)"/><path d="M34 6V46M40 6V46" stroke="#1d2b5a" stroke-width="2.6"/><path d="M37 6V46" stroke="#fff" stroke-width="2.4"/></g><path class="zvGill" d="M57.12 16.68Q53.42 23.4 57.12 30.12" stroke="#1b2a4a" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.5s;transform-origin:85% 15%" d="M58 29C55.3 30.35 52.6 32.6 52.15 34.58C54.4 33.95 56.65 32.06 58.54 30.08Z" fill="#f0b42a"/><circle cx="63" cy="22" r="2.8" fill="#15151f"/><circle cx="63" cy="22" r="2.24" fill="url(#Ag3I)"/><g class="zvLook"><circle cx="63.34" cy="22.14" r="1.18" fill="#07070c"/></g><ellipse cx="63.9" cy="20.94" rx="0.84" ry="0.56" fill="#fff" opacity=".9" transform="rotate(-30 63.9 20.94)"/><circle cx="62.02" cy="23.12" r="0.31" fill="#fff" opacity=".7"/><path class="zvM" d="M72.8 25.5q-1.6 0.9 -3.2 0.2" stroke="#1b1b2f" stroke-width="0.8" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="71.7" cy="25.9" rx="1.5" ry="2" fill="#2a1418"/><ellipse cx="71.5" cy="26.6" rx="0.8" ry="0.6" fill="#c25a6a"/></g><ellipse class="zvSheen" cx="44" cy="16" rx="8" ry="2" fill="#fff" transform="rotate(-6 44 16)"/><circle cx="36" cy="38" r="6.5" fill="#c8913b" stroke="#7a5420" stroke-width="1.2"/><path d="M31 36Q36 31 41 36" stroke="#7a5420" stroke-width="1" fill="none"/><path class="gstk" d="M55 30L64 46" stroke="#c98a4b" stroke-width="3" stroke-linecap="round"/><path class="gstk" d="M62 42L66 49" stroke="#2a2a3a" stroke-width="5" stroke-linecap="round"/><path class="gstk" d="M65 50L80 51" stroke="#2a2a3a" stroke-width="4.5" stroke-linecap="round"/><path d="M53.6 13.6C52.6 7 57.5 5 62.5 5.2C67.5 5.6 70.8 11 72 20.6C69.5 18.6 66 17 64.5 16.1C61 14.6 57 14 53.6 13.6Z" fill="#f4f6fa" stroke="#9aa3b5" stroke-width=".9"/><path d="M62.6 5.4Q66 10.5 64.8 16" stroke="#2a4fa8" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M53.6 13.6C57 14 61 14.6 64.5 16.1C66 17 69.5 18.6 72 20.6" stroke="#c3cbdd" stroke-width="2.4" fill="none" stroke-linecap="round"/><ellipse cx="57" cy="15.6" rx="2" ry="2.6" transform="rotate(-18 57 15.6)" fill="#dfe4ee" stroke="#9aa3b5" stroke-width=".7"/><path d="M60.5 17.4L73.4 19.6Q74.6 27 70.6 31.4Q65.6 34.4 61 31Z" fill="rgba(255,255,255,.12)" stroke="#9aa3b5" stroke-width=".9"/><path d="M64 17.9V32.4M67.4 18.5V33M70.6 19.2V31.6M61 22.2H74M61 26.2H74M61.6 30H71.4" stroke="#6f7890" stroke-width=".8" fill="none"/></g>'),
  (FSH.zv_meduse = (e) =>
    '<defs><radialGradient id="AeB" cx=".72" cy=".38" r=".8"><stop offset="0" stop-color="#ffffff"/><stop offset=".35" stop-color="#f6e6ff"/><stop offset=".7" stop-color="#d0aaf4"/><stop offset="1" stop-color="#8a62d0"/></radialGradient><radialGradient id="AeG"><stop offset="0" stop-color="#ffe8a8"/><stop offset="1" stop-color="#ff7ac8"/></radialGradient><linearGradient id="AeR" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7a52c0"/><stop offset="1" stop-color="#b48ae8"/></linearGradient><clipPath id="AeK"><path d="M50 2C72 0 83.5 11 83.5 24 83.5 37 72 48 50 46Q46.6 43.56 50 41.11Q46.6 38.67 50 36.22Q46.6 33.78 50 31.33Q46.6 28.89 50 26.44Q46.6 24 50 21.56Q46.6 19.11 50 16.67Q46.6 14.22 50 11.78Q46.6 9.33 50 6.89Q46.6 4.44 50 2Z"/></clipPath><radialGradient id="AeH"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><g class="zvTent" fill="none" stroke-linecap="round"><path d="M52 9Q44 6 36 9T20 9.9T6 8.4" stroke="#d8b8ff" stroke-width="0.55"/><path d="M52 14Q44 10.4 36 14T20 15.08T2 13.28" stroke="#ffb8e8" stroke-width="0.6"/><path d="M53 20Q43 25 34 19T12 23" stroke="#f6e4ff" stroke-width="3.2"/><path d="M53 24.5Q43 31 34 25T7 28.5" stroke="#f6e4ff" stroke-width="3"/><path d="M53 29Q43 35 34 30.4T15 34" stroke="#f6e4ff" stroke-width="3.2"/><path d="M52 34Q44 30.4 36 34T20 35.08T3 33.28" stroke="#ffb8e8" stroke-width="0.6"/><path d="M52 39Q44 36 36 39T20 39.9T8 38.4" stroke="#d8b8ff" stroke-width="0.55"/><path d="M52 43Q44 40.4 36 43T20 43.78T14 42.48" stroke="#c8e8ff" stroke-width="0.5"/><path d="M52 5Q44 2.6 36 5T20 5.72T16 4.52" stroke="#c8e8ff" stroke-width="0.5"/></g><g class="zvFrill" fill="none" stroke-linecap="round"><path d="M53 20Q43 25 34 19T12 23" stroke="#e090d8" stroke-width="1.2" stroke-dasharray=".1 2.2"/><path d="M53 24.5Q43 31 34 25T7 28.5" stroke="#e090d8" stroke-width="1.2" stroke-dasharray=".1 2.2"/><path d="M53 29Q43 35 34 30.4T15 34" stroke="#e090d8" stroke-width="1.2" stroke-dasharray=".1 2.2"/><path d="M53 21.4Q44 26.4 36 21.4T18 24.6" stroke="#c070c0" stroke-width=".5"/><path d="M53 28Q44 33 36 29T20 32" stroke="#c070c0" stroke-width=".5"/></g><g class="zvW tPulse"><g class="zvBell" style="animation-duration:2.4s;transform-origin:0 50%"><path d="M50 2C72 0 83.5 11 83.5 24 83.5 37 72 48 50 46Q46.6 43.56 50 41.11Q46.6 38.67 50 36.22Q46.6 33.78 50 31.33Q46.6 28.89 50 26.44Q46.6 24 50 21.56Q46.6 19.11 50 16.67Q46.6 14.22 50 11.78Q46.6 9.33 50 6.89Q46.6 4.44 50 2Z" fill="url(#AeB)"/><g clip-path="url(#AeK)"><ellipse cx="58" cy="24" rx="12" ry="14" fill="url(#AeH)"/><path d="M51 3.5A30 20.5 0 0 1 51 44.5" stroke="#f2e0ff" stroke-width="0.9" fill="none" opacity=".85"/><path d="M51 7.5A24 16.5 0 0 1 51 40.5" stroke="#ecd4ff" stroke-width="0.8" fill="none" opacity=".85"/><path d="M51 11.5A18 12.5 0 0 1 51 36.5" stroke="#f6e8ff" stroke-width="0.7" fill="none" opacity=".85"/><path d="M51 15.5A12 8.5 0 0 1 51 32.5" stroke="#ffffff" stroke-width="0.6" fill="none" opacity=".85"/><circle cx="60" cy="12" r=".7" fill="#fff" opacity=".7"/><circle cx="60" cy="36" r=".7" fill="#fff" opacity=".7"/><circle cx="66" cy="18" r=".7" fill="#fff" opacity=".7"/><circle cx="66" cy="30" r=".7" fill="#fff" opacity=".7"/><circle cx="56" cy="24" r=".7" fill="#fff" opacity=".7"/><circle cx="72" cy="24" r=".7" fill="#fff" opacity=".7"/><path d="M50 2C54 14 54 34 50 46" stroke="url(#AeR)" stroke-width="5" fill="none"/></g><path d="M50 2C72 0 83.5 11 83.5 24 83.5 37 72 48 50 46Q46.6 43.56 50 41.11Q46.6 38.67 50 36.22Q46.6 33.78 50 31.33Q46.6 28.89 50 26.44Q46.6 24 50 21.56Q46.6 19.11 50 16.67Q46.6 14.22 50 11.78Q46.6 9.33 50 6.89Q46.6 4.44 50 2Z" fill="none" stroke="#a47ae0" stroke-width=".7"/><g class="zvFace"><g class="zvEy"><ellipse cx="70" cy="19.4" rx="2.3" ry="2.9" fill="#3a2260"/><circle cx="70.8" cy="18.4" r=".9" fill="#fff"/><circle cx="69.4" cy="20.5" r=".4" fill="#fff"/></g><path class="zvEh" d="M67.6 20.2q2.4-3.4 4.8 0" stroke="#3a2260" stroke-width="1.5" fill="none" stroke-linecap="round"/><g class="zvEy"><ellipse cx="70" cy="28.6" rx="2.3" ry="2.9" fill="#3a2260"/><circle cx="70.8" cy="27.6" r=".9" fill="#fff"/><circle cx="69.4" cy="29.700000000000003" r=".4" fill="#fff"/></g><path class="zvEh" d="M67.6 29.400000000000002q2.4-3.4 4.8 0" stroke="#3a2260" stroke-width="1.5" fill="none" stroke-linecap="round"/><ellipse cx="66.6" cy="17" rx="1.9" ry="1.1" fill="#ff9ad5" opacity=".7"/><ellipse cx="66.6" cy="31" rx="1.9" ry="1.1" fill="#ff9ad5" opacity=".7"/><path d="M64.4 22.6q-1.3 1.4 0 2.8" stroke="#3a2260" stroke-width="1.1" fill="none" stroke-linecap="round"/></g><path class="zvSheen" d="M58 6Q72 4 80 14" stroke="#fff" stroke-width="1.4" fill="none" stroke-linecap="round" opacity=".5"/><circle class="zvGlint" style="animation-delay:0.0s;animation-duration:2.6s" cx="50.4" cy="3.5" r=".65" fill="#ffb8f0"/><circle class="zvGlint" style="animation-delay:0.22s;animation-duration:2.6s" cx="52.59" cy="8" r=".65" fill="#9ff8ff"/><circle class="zvGlint" style="animation-delay:0.44s;animation-duration:2.6s" cx="52.76" cy="12.5" r=".65" fill="#ffb8f0"/><circle class="zvGlint" style="animation-delay:0.66s;animation-duration:2.6s" cx="50.77" cy="17" r=".65" fill="#9ff8ff"/><circle class="zvGlint" style="animation-delay:0.88s;animation-duration:2.6s" cx="52.37" cy="21.5" r=".65" fill="#ffb8f0"/><circle class="zvGlint" style="animation-delay:1.1s;animation-duration:2.6s" cx="52.89" cy="26" r=".65" fill="#9ff8ff"/><circle class="zvGlint" style="animation-delay:1.32s;animation-duration:2.6s" cx="51.13" cy="30.5" r=".65" fill="#ffb8f0"/><circle class="zvGlint" style="animation-delay:1.54s;animation-duration:2.6s" cx="52.11" cy="35" r=".65" fill="#9ff8ff"/><circle class="zvGlint" style="animation-delay:1.76s;animation-duration:2.6s" cx="52.97" cy="39.5" r=".65" fill="#ffb8f0"/><circle class="zvGlint" style="animation-delay:1.98s;animation-duration:2.6s" cx="51.47" cy="44" r=".65" fill="#9ff8ff"/><circle class="zvGlint" style="animation-delay:0.3s" cx="78" cy="13" r="0.6" fill="#fff"/><circle class="zvGlint" style="animation-delay:1.1s" cx="80" cy="30" r="0.55" fill="#fff"/><circle class="zvGlint" style="animation-delay:1.9s" cx="74" cy="40" r="0.5" fill="#fff"/><circle class="zvGlint" style="animation-delay:2.4s" cx="72" cy="7" r="0.5" fill="#fff"/></g></g>'),
  (FSH.zv_royal = (e) =>
    '<defs><linearGradient id="Ar2B" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a1450"/><stop offset="0.5" stop-color="#2a47d6"/><stop offset="1" stop-color="#8aa0ff"/></linearGradient><pattern id="Ar2S" width="3" height="2.6" patternUnits="userSpaceOnUse"><path d="M0 2.6a1.5 1.5 0 0 1 3 0M-1.5 1.3a1.5 1.5 0 0 1 3 0M1.5 1.3a1.5 1.5 0 0 1 3 0" stroke="#bcd0ff" stroke-width=".26" fill="none" opacity="0.25"/></pattern><clipPath id="Ar2K"><path d="M78 25.5C77.4 20.32 66.45 16.5 57 16.5C47.5 16.5 41 20.2 38 21.4L38 28.6C41 29.8 47.5 33.5 57 33.5C67.5 33.5 77.4 28.74 78 25.5Z"/></clipPath><linearGradient id="Ar2T" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#1a2ab0"/><stop offset="0.5" stop-color="#9a3ad0"/><stop offset="0.85" stop-color="#e24bd0"/><stop offset="1" stop-color="#ffd27a"/></linearGradient><radialGradient id="Ar2I" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#ffe8a8"/><stop offset="0.7" stop-color="#c8902a"/><stop offset="1" stop-color="#2a1a0a"/></radialGradient></defs><g class="zvW tFlare"><g class="zvFlow" style="animation-duration:2.8s;transform-origin:100% 50%"><path d="M39.5 21.4C26.6 -1.4 3.8 -3.8 0 10.6C-3.8 20.2 5.7 27.4 -1.9 35.8C-3.8 46.6 15.2 55 24.7 51.4C30.4 41.8 34.2 30.4 39.5 28.6Z" fill="url(#Ar2T)"/><g stroke="#0a1050" stroke-width="0.45" opacity="0.3" fill="none" stroke-linecap="round"><path d="M39 25Q20.45 12.46 1.9 2.2"/><path d="M39 25Q19.12 19.72 -0.76 15.4"/><path d="M39 25Q20.45 27.64 1.9 29.8"/><path d="M39 25Q20.45 34.9 1.9 43"/><path d="M39 25Q29 40.18 19 52.6"/></g></g><g class="zvFlow2" style="animation-duration:3.2s;transform-origin:50% 100%"><path d="M44 18C42 2 54-6 70 2 70 7 66 13 64 18Z" fill="url(#Ar2T)"/><path d="M44 18C42 2 54-6 70 2 70 7 66 13 64 18Z" fill="none" stroke="#0a1050" stroke-width=".35" opacity="0.3"/></g><g class="zvFlow2" style="animation-duration:3.2s;animation-delay:1.2s;transform-origin:50% 0"><path d="M46 32C42 48 52 56 68 48 66 42 64 36 60 32Z" fill="url(#Ar2T)"/><path d="M46 32C42 48 52 56 68 48 66 42 64 36 60 32Z" fill="none" stroke="#0a1050" stroke-width=".35" opacity="0.3"/></g><path d="M78 25.5C77.4 20.32 66.45 16.5 57 16.5C47.5 16.5 41 20.2 38 21.4L38 28.6C41 29.8 47.5 33.5 57 33.5C67.5 33.5 77.4 28.74 78 25.5Z" fill="url(#Ar2B)"/><g clip-path="url(#Ar2K)"><rect x="36" y="14.5" width="44" height="26.1" fill="url(#Ar2S)"/><circle class="zvGlint" style="animation-duration:2.8s" cx="48" cy="22" r="0.5" fill="#d8e4ff"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:0.53s" cx="54" cy="27" r="0.45" fill="#d8e4ff"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:1.06s" cx="60" cy="21" r="0.5" fill="#d8e4ff"/><circle class="zvGlint" style="animation-duration:2.8s;animation-delay:1.59s" cx="64" cy="28" r="0.4" fill="#d8e4ff"/></g><path class="zvGill" d="M65.54 17.66Q62.11 23.9 65.54 30.14" stroke="#0a1450" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.5s;transform-origin:85% 15%" d="M66 28C63.6 29.2 61.2 31.2 60.8 32.96C62.8 32.4 64.8 30.72 66.48 28.96Z" fill="#5a7af0"/><circle cx="71" cy="22.6" r="2.6" fill="#15151f"/><circle cx="71" cy="22.6" r="2.08" fill="url(#Ar2I)"/><g class="zvLook"><circle cx="71.31" cy="22.73" r="1.09" fill="#07070c"/></g><ellipse cx="71.83" cy="21.61" rx="0.78" ry="0.52" fill="#fff" opacity=".9" transform="rotate(-30 71.83 21.61)"/><circle cx="70.09" cy="23.64" r="0.29" fill="#fff" opacity=".7"/><path class="zvM" d="M77.8 25.6q-1.28 0.72 -2.56 0.16" stroke="#0a0a3a" stroke-width="0.64" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="76.92" cy="25.92" rx="1.2" ry="1.6" fill="#2a1418"/><ellipse cx="76.76" cy="26.48" rx="0.64" ry="0.48" fill="#c25a6a"/></g><ellipse class="zvSheen" cx="60" cy="19" rx="8" ry="1.4" fill="#fff" transform="rotate(-4 60 19)"/></g>'),
  (FSH.zv_noel = (e) =>
    '<defs><linearGradient id="AxB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a0a1a"/><stop offset="0.5" stop-color="#d8263a"/><stop offset="0.85" stop-color="#ff8a8a"/><stop offset="1" stop-color="#fff0f0"/></linearGradient><pattern id="AxS" width="3" height="2.6" patternUnits="userSpaceOnUse"><path d="M0 2.6a1.5 1.5 0 0 1 3 0M-1.5 1.3a1.5 1.5 0 0 1 3 0M1.5 1.3a1.5 1.5 0 0 1 3 0" stroke="#ffe0e0" stroke-width=".26" fill="none" opacity="0.19"/></pattern><clipPath id="AxK"><path d="M74 25.5C73.4 16.6 60.25 13 49 13C38.5 13 31 19.4 28 20.6L28 29.4C31 30.6 38.5 37 49 37C61.5 37 73.4 31.72 74 25.5Z"/></clipPath><linearGradient id="AxT" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#c81a2a"/><stop offset="0.75" stop-color="#e84a5a"/><stop offset="1" stop-color="#ffffff"/></linearGradient><radialGradient id="AxI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#fff0d0"/><stop offset="0.7" stop-color="#3a6a3a"/><stop offset="1" stop-color="#0a1a0a"/></radialGradient></defs><g class="zvW tDart"><g class="zvTail" style="animation-duration:1s;transform-origin:100% 50%"><path d="M29.5 20.6C22 19.75 16 14.5 13 13.97C16.75 20.8 19 23.95 19.75 25C19 26.05 16.75 29.2 13 36.02C16 35.5 22 30.25 29.5 29.4Z" fill="url(#AxT)"/><g stroke="#fff" stroke-width="0.45" opacity="0.45" fill="none" stroke-linecap="round"><path d="M29 25Q21 18.94 13 13.97"/><path d="M29 25Q22.65 21.82 16.3 19.23"/><path d="M29 25Q24.38 25 19.75 25"/><path d="M29 25Q22.65 28.18 16.3 30.77"/><path d="M29 25Q21 31.06 13 36.02"/></g></g><g class="zvRip" style="animation-duration:2s;transform-origin:30% 100%"><path d="M40 15C42.25 9.6 46.75 8.7 50.5 9C52.75 11.4 54.1 13.8 55 16Z" fill="url(#AxT)"/><path d="M40 15C42.25 9.6 46.75 8.7 50.5 9C52.75 11.4 54.1 13.8 55 16Z" fill="none" stroke="#fff" stroke-width=".35" opacity="0.45"/></g><g class="zvRip" style="animation-duration:2s;animation-delay:0.5s;transform-origin:30% 0"><path d="M44 35C46 39.5 49 40.25 51.5 40C52.5 37.5 53.5 36 54 34Z" fill="url(#AxT)"/><path d="M44 35C46 39.5 49 40.25 51.5 40C52.5 37.5 53.5 36 54 34Z" fill="none" stroke="#fff" stroke-width=".35" opacity="0.45"/></g><path d="M74 25.5C73.4 16.6 60.25 13 49 13C38.5 13 31 19.4 28 20.6L28 29.4C31 30.6 38.5 37 49 37C61.5 37 73.4 31.72 74 25.5Z" fill="url(#AxB)"/><g clip-path="url(#AxK)"><rect x="26" y="11" width="50" height="35.2" fill="url(#AxS)"/></g><path class="zvGill" d="M59.12 16.68Q55.42 23.4 59.12 30.12" stroke="#6a0a1a" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.5s;transform-origin:85% 15%" d="M59 29C56.3 30.35 53.6 32.6 53.15 34.58C55.4 33.95 57.65 32.06 59.54 30.08Z" fill="#ff6a7a"/><circle cx="65" cy="22" r="2.8" fill="#15151f"/><circle cx="65" cy="22" r="2.24" fill="url(#AxI)"/><g class="zvLook"><circle cx="65.34" cy="22.14" r="1.18" fill="#07070c"/></g><ellipse cx="65.9" cy="20.94" rx="0.84" ry="0.56" fill="#fff" opacity=".9" transform="rotate(-30 65.9 20.94)"/><circle cx="64.02" cy="23.12" r="0.31" fill="#fff" opacity=".7"/><path class="zvM" d="M73.8 25.6q-1.6 0.9 -3.2 0.2" stroke="#5a0a1a" stroke-width="0.8" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="72.7" cy="26" rx="1.5" ry="2" fill="#2a1418"/><ellipse cx="72.5" cy="26.7" rx="0.8" ry="0.6" fill="#c25a6a"/></g><ellipse class="zvSheen" cx="46" cy="16" rx="8" ry="2" fill="#fff" transform="rotate(-6 46 16)"/><g class="zvHat" style="animation-duration:2.8s;transform-origin:80% 100%"><path d="M50 13Q55-4 40-3Q47 0 47 11Z" fill="#c8202e"/><path d="M50 13Q55-4 40-3" stroke="#8a0a1a" stroke-width=".6" fill="none"/><path d="M47 12Q57 7 68 14" stroke="#fffaf4" stroke-width="4.6" fill="none" stroke-linecap="round"/><g class="zvSwing" style="animation-duration:1.4s;transform-origin:100% 0"><circle cx="39" cy="-2.6" r="3.2" fill="#fffaf4"/></g></g></g>'),
  (FSH.zv_sapin = (e) =>
    '<defs><linearGradient id="AsB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e4a24"/><stop offset="0.5" stop-color="#2a8a46"/><stop offset="0.85" stop-color="#6ac07a"/><stop offset="1" stop-color="#d8f0c8"/></linearGradient><pattern id="AsS" width="3" height="2.6" patternUnits="userSpaceOnUse"><path d="M0 2.6a1.5 1.5 0 0 1 3 0M-1.5 1.3a1.5 1.5 0 0 1 3 0M1.5 1.3a1.5 1.5 0 0 1 3 0" stroke="#c8f0c0" stroke-width=".26" fill="none" opacity="0.22"/></pattern><clipPath id="AsK"><path d="M75 26.5C74.4 19.7 61.25 15.5 50 15.5C39 15.5 31 20.6 28 21.8L28 30.2C31 31.4 39 36.5 50 36.5C62.5 36.5 74.4 31.04 75 26.5Z"/></clipPath><linearGradient id="AsF" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5aba6a"/><stop offset="1" stop-color="#16602e"/></linearGradient><radialGradient id="AsG" cx="0.4" cy="0.35" r="0.6"><stop offset="0" stop-color="#fff6c8"/><stop offset="1" stop-color="#ffc23a"/></radialGradient><radialGradient id="AsI" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#fff4d0"/><stop offset="0.7" stop-color="#c8902a"/><stop offset="1" stop-color="#2a1a0a"/></radialGradient></defs><g class="zvW tFlare"><g class="zvTail" style="animation-duration:1.1s;transform-origin:100% 50%"><path d="M29.5 21.8C22.8 22 17.6 18 15 17.6C18.25 22.8 20.2 25.2 20.85 26C20.2 26.8 18.25 29.2 15 34.4C17.6 34 22.8 30 29.5 30.2Z" fill="#7a4a22"/><g stroke="#3a2210" stroke-width="0.45" opacity="0.5" fill="none" stroke-linecap="round"><path d="M29 26Q22 21.38 15 17.6"/><path d="M29 26Q23.43 23.58 17.86 21.6"/><path d="M29 26Q24.93 26 20.85 26"/><path d="M29 26Q23.43 28.42 17.86 30.4"/><path d="M29 26Q22 30.62 15 34.4"/></g></g><g class="zvRip" style="animation-duration:2.2s;transform-origin:50% 100%"><path d="M31 22.91L33.7 17.33L35.5 18L38.5 11.89L41.2 15.66L43.3 13.51L46 17.88Z" fill="url(#AsF)"/><path d="M37.6 13.08L38.5 11.89L39.4 13.08" stroke="#fff" stroke-width=".9" fill="none" stroke-linejoin="round"/></g><g class="zvRip" style="animation-duration:2.2s;animation-delay:0.4s;transform-origin:50% 100%"><path d="M42 18.42L44.7 12.87L46.5 14.33L49.5 8.27L52.2 13.72L54.3 11.97L57 18.12Z" fill="url(#AsF)"/><path d="M48.6 9.67L49.5 8.27L50.4 9.67" stroke="#fff" stroke-width=".9" fill="none" stroke-linejoin="round"/></g><g class="zvRip" style="animation-duration:2.2s;animation-delay:0.8s;transform-origin:50% 100%"><path d="M54 17.84L56.34 13.92L57.9 15.44L60.5 11.17L62.84 16.05L64.66 15.06L67 20.5Z" fill="url(#AsF)"/><path d="M59.72 12.29L60.5 11.17L61.28 12.29" stroke="#fff" stroke-width=".9" fill="none" stroke-linejoin="round"/></g><g class="zvRip" style="animation-duration:2.2s;animation-delay:0.2s;transform-origin:50% 0"><path d="M33 30.46L35.52 35.26L37.2 34.59L40 39.83L42.52 36.38L44.48 38.18L47 34.2Z" fill="url(#AsF)"/><path d="M39.16 38.78L40 39.83L40.84 38.78" stroke="#fff" stroke-width=".9" fill="none" stroke-linejoin="round"/></g><g class="zvRip" style="animation-duration:2.2s;animation-delay:0.6s;transform-origin:50% 0"><path d="M45 34.03L47.34 38.38L48.9 37.14L51.5 41.89L53.84 37.44L55.66 38.76L58 33.75Z" fill="url(#AsF)"/><path d="M50.72 40.77L51.5 41.89L52.28 40.77" stroke="#fff" stroke-width=".9" fill="none" stroke-linejoin="round"/></g><path d="M75 26.5C74.4 19.7 61.25 15.5 50 15.5C39 15.5 31 20.6 28 21.8L28 30.2C31 31.4 39 36.5 50 36.5C62.5 36.5 74.4 31.04 75 26.5Z" fill="url(#AsB)"/><g clip-path="url(#AsK)"><rect x="26" y="13.5" width="51" height="31.3" fill="url(#AsS)"/><path d="M30 21C38 27 46 18 54 23S66 28 72 22" stroke="#ffd25a" stroke-width="1.1" fill="none"/><path d="M29 30C37 35 46 28 55 32S64 35 70 30" stroke="#ffd25a" stroke-width="1.1" fill="none"/><circle class="zvBb" style="animation-delay:-0.23s" cx="38" cy="25.5" r="1.5" fill="#d8263a"/><circle cx="37.475" cy="24.975" r="0.5249999999999999" fill="#fff" opacity=".75"/><rect x="37.55" y="23.4" width="0.8999999999999999" height=".8" fill="#e8c050"/><circle class="zvBb" style="animation-delay:-0.46s" cx="50" cy="22.4" r="1.3" fill="#3a6ad8"/><circle cx="49.545" cy="21.945" r="0.45499999999999996" fill="#fff" opacity=".75"/><rect x="49.61" y="20.499999999999996" width="0.78" height=".8" fill="#e8c050"/><circle class="zvBb" style="animation-delay:-0.69s" cx="58" cy="30.6" r="1.4" fill="#e8b02a"/><circle cx="57.51" cy="30.110000000000003" r="0.48999999999999994" fill="#fff" opacity=".75"/><rect x="57.58" y="28.6" width="0.84" height=".8" fill="#e8c050"/><circle class="zvBb" style="animation-delay:-0.92s" cx="44" cy="32" r="1.2" fill="#c83ac8"/><circle cx="43.58" cy="31.58" r="0.42" fill="#fff" opacity=".75"/><rect x="43.64" y="30.2" width="0.72" height=".8" fill="#e8c050"/><circle class="zvBb" style="animation-delay:-1.15s" cx="64" cy="25" r="1.1" fill="#d8263a"/><circle cx="63.615" cy="24.615" r="0.385" fill="#fff" opacity=".75"/><rect x="63.67" y="23.299999999999997" width="0.66" height=".8" fill="#e8c050"/><circle class="zvGlint" style="animation-duration:1.6s" cx="33" cy="23" r=".55" fill="#fff6a0"/><circle class="zvGlint" style="animation-duration:1.6s;animation-delay:0.27s" cx="42" cy="22.4" r=".55" fill="#ff8a8a"/><circle class="zvGlint" style="animation-duration:1.6s;animation-delay:0.54s" cx="47" cy="27.6" r=".55" fill="#9af0ff"/><circle class="zvGlint" style="animation-duration:1.6s;animation-delay:0.81s" cx="53" cy="26.6" r=".55" fill="#fff6a0"/><circle class="zvGlint" style="animation-duration:1.6s;animation-delay:1.08s" cx="61" cy="23.6" r=".55" fill="#ff8a8a"/><circle class="zvGlint" style="animation-duration:1.6s;animation-delay:1.35s" cx="36" cy="32.6" r=".55" fill="#9af0ff"/><circle class="zvGlint" style="animation-duration:1.6s;animation-delay:1.62s" cx="52" cy="33" r=".55" fill="#fff6a0"/><circle class="zvGlint" style="animation-duration:1.6s;animation-delay:1.89s" cx="66" cy="28.6" r=".55" fill="#9af0ff"/></g><path class="zvGill" d="M62.33 17.87Q58.77 24.35 62.33 30.83" stroke="#0a3a1a" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".7"/><path class="zvPec" style="animation-duration:0.5s;transform-origin:85% 15%" d="M60 30C57.3 31.35 54.6 33.6 54.15 35.58C56.4 34.95 58.65 33.06 60.54 31.08Z" fill="#3a9a52"/><circle cx="68" cy="23" r="2.7" fill="#15151f"/><circle cx="68" cy="23" r="2.16" fill="url(#AsI)"/><g class="zvLook"><circle cx="68.32" cy="23.14" r="1.13" fill="#07070c"/></g><ellipse cx="68.86" cy="21.97" rx="0.81" ry="0.54" fill="#fff" opacity=".9" transform="rotate(-30 68.86 21.97)"/><circle cx="67.06" cy="24.08" r="0.3" fill="#fff" opacity=".7"/><path class="zvM" d="M74.8 26.6q-1.6 0.9 -3.2 0.2" stroke="#0a2a14" stroke-width="0.8" fill="none" stroke-linecap="round"/><g class="zvMo"><ellipse cx="73.7" cy="27" rx="1.5" ry="2" fill="#2a1418"/><ellipse cx="73.5" cy="27.7" rx="0.8" ry="0.6" fill="#c25a6a"/></g><ellipse class="zvSheen" cx="48" cy="18" rx="9" ry="1.8" fill="#fff" transform="rotate(-6 48 18)"/><path d="M60.6 15.8Q62.4 9.6 69.4 9.4" stroke="#c8902a" stroke-width=".8" fill="none" stroke-linecap="round"/><g transform="translate(8.6 -0.4) rotate(24 64 8.6)"><g class="zvStar" style="animation-duration:3s;transform-origin:50% 50%"><polygon points="64,5.6 64.82,7.87 67.23,7.95 65.33,9.43 66,11.75 64,10.4 62,11.75 62.67,9.43 60.77,7.95 63.18,7.87" fill="url(#AsG)" stroke="#c8902a" stroke-width=".5" stroke-linejoin="round"/></g></g></g>'),
  (FSH.raieaur = (e) =>
    '<defs><linearGradient id="RaW" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f6a78"/><stop offset=".4" stop-color="#22d8cc"/><stop offset=".72" stop-color="#3ab8e8"/><stop offset="1" stop-color="#9a7ae8"/></linearGradient><linearGradient id="RaA" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8bfff0" stop-opacity="0"/><stop offset=".5" stop-color="#b9fff4" stop-opacity=".8"/><stop offset="1" stop-color="#e9d6ff" stop-opacity="0"/></linearGradient><linearGradient id="RaB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a7f8a"/><stop offset="1" stop-color="#2fd1c5"/></linearGradient><radialGradient id="RaI" cx=".45" cy=".4" r=".6"><stop offset="0" stop-color="#e9fffb"/><stop offset=".7" stop-color="#2a8a9a"/><stop offset="1" stop-color="#0a1a2a"/></radialGradient><radialGradient id="RaG"><stop offset="0" stop-color="#8bfff0" stop-opacity=".35"/><stop offset="1" stop-color="#8bfff0" stop-opacity="0"/></radialGradient></defs><ellipse cx="56" cy="25" rx="36" ry="30" fill="url(#RaG)"/><g class="zvW tLoop"><path class="zvWhip" style="animation-duration:2.2s;transform-origin:100% 50%" d="M36 25C26 25 14 22 1 28" stroke="url(#RaB)" stroke-width="1.8" fill="none" stroke-linecap="round"/><circle cx="2" cy="27.6" r="1.4" fill="#fff6d0"/><g class="zvFlap" style="animation-duration:2.6s;transform-origin:50% 100%"><path d="M80 23C72 10 55 -3 28 -2C38 8 41 16 42 23Z" fill="url(#RaW)"/><path d="M38 6C50 4 62 7 72 14" stroke="url(#RaA)" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M41 13C52 11 62 13 70 18" stroke="url(#RaA)" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".8"/><g fill="#fff6d0"><circle cx="50" cy="9" r=".9"/><circle cx="60" cy="12" r=".7"/><circle cx="46" cy="16" r=".6"/></g></g><g class="zvFlap" style="animation-duration:2.6s;transform-origin:50% 0"><path d="M80 27C72 40 55 53 28 52C38 42 41 34 42 27Z" fill="url(#RaW)"/><path d="M38 44C50 46 62 43 72 36" stroke="url(#RaA)" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M41 37C52 39 62 37 70 32" stroke="url(#RaA)" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".8"/><g fill="#fff6d0"><circle cx="52" cy="41" r=".8"/><circle cx="62" cy="38" r=".6"/></g></g><path d="M40 25C40 18 56 15 70 17C78 18 83 21 83 25C83 29 78 32 70 33C56 35 40 32 40 25Z" fill="url(#RaB)"/><path d="M46 25C52 22 62 21 72 22" stroke="#b9fff4" stroke-width=".8" fill="none" opacity=".6"/><path d="M80 19C85 17 87 19 86 22M80 31C85 33 87 31 86 28" stroke="#1a7f8a" stroke-width="2.2" fill="none" stroke-linecap="round"/><circle cx="74" cy="20.4" r="1.6" fill="#15151f"/><circle cx="74" cy="20.4" r="1.2" fill="url(#RaI)"/><circle cx="74.4" cy="20" r=".4" fill="#fff"/><circle cx="74" cy="29.6" r="1.6" fill="#15151f"/><circle cx="74" cy="29.6" r="1.2" fill="url(#RaI)"/><circle cx="74.4" cy="29.2" r=".4" fill="#fff"/><g class="zvMo"><ellipse cx="82" cy="25" rx="1.4" ry="2.6" fill="#0a2a2a"/></g><ellipse class="zvSheen" cx="60" cy="21" rx="10" ry="1.6" fill="#fff" transform="rotate(-4 60 21)"/></g>'));
const FILT = 3456e5;
const WAT = 6048e5;
const aqMt = (e, t = Date.now()) => {
  const a = Math.min(e.fc, t) + FILT - t,
    s = Math.min(e.wc, t) + WAT - t;
  return { f: a, w: s, late: a <= 0 || s <= 0 };
};
function aqSave(e) {
  ((e.at = Date.now()), st.set("aq", e));
  try {
    SO.col && SO.got && SO.can && socLater();
  } catch (e) {}
}
const FNM = [
  "Bulle",
  "Nacre",
  "Écume",
  "Perle",
  "Lune",
  "Brume",
  "Coquille",
  "Marée",
  "Opale",
  "Onde",
  "Étoile",
  "Flocon",
  "Givre",
  "Lagune",
  "Corail",
  "Azur",
  "Saphir",
  "Plume",
  "Nuage",
  "Rosée",
  "Velours",
  "Ambre",
  "Cannelle",
  "Pépin",
  "Noisette",
  "Biscotte",
  "Mochi",
  "Praline",
  "Câlin",
  "Douceur",
  "Pâquerette",
  "Dragée",
  "Sirop",
  "Mirabelle",
  "Clémentine",
  "Violette",
  "Cerise",
  "Myrtille",
  "Châtaigne",
  "Réglisse",
  "Nougat",
  "Caramel",
  "Zéphyr",
  "Aurore",
  "Galet",
  "Sable",
  "Mousse",
  "Pistache",
];
const aqClN = (e) =>
  String(null == e ? "" : e)
    .replace(/[\u0000-\u001f\u007f<>]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 16);
function aqNames(e) {
  const t = {},
    a = new Set();
  return (
    FISH.forEach((s) => {
      const n = e.f[s.id],
        o = n && aqClN(n.n);
      o && ((t[s.id] = o), a.add(o.toLowerCase()));
    }),
    FISH.forEach((s) => {
      if (!e.f[s.id] || t[s.id]) return;
      let n = hs(s.id) % FNM.length,
        o = 0;
      for (; a.has(FNM[n].toLowerCase()) && o++ < FNM.length;) n = (n + 1) % FNM.length;
      ((t[s.id] = FNM[n]), a.add(FNM[n].toLowerCase()));
    }),
    t
  );
}
function aqRnd(e, t) {
  const a = new Set(Object.values(aqNames(e)).map((e) => e.toLowerCase()));
  t && a.add(String(t).toLowerCase());
  const s = FNM.filter((e) => !a.has(e.toLowerCase())),
    n = s.length ? s : FNM;
  return n[Math.floor(Math.random() * n.length)];
}
const aqOn = (e) => FISH.filter((t) => e.f[t.id] && e.f[t.id].on);
const aqHg = (e, t = Date.now()) => (aqMt(e, t).late ? [] : aqOn(e).filter((a) => t - e.f[a.id].t >= HR));
const aqM = (e) => 1e3 + DECO.reduce((t, a) => t + (e.d && 1 === e.d[a.id] ? a.p : 0), 0);
const aqGain = (e, t) => {
  let a = Math.min(999, Math.max(0, +e.r || 0));
  const s = aqM(e);
  return {
    g: t.map((e) => {
      a += fv(e) * s;
      const t = Math.floor(a / 1e3);
      return ((a -= 1e3 * t), t);
    }),
    r: a,
  };
};
const frN = (e) => String(Math.round(1e3 * e) / 1e3).replace(".", ",");
const aqHungry = () => aqHg(aqRead()).length;
const aqAlert = () => {
  const e = aqRead(),
    t = Date.now();
  return aqHg(e, t).length + (aqMt(e, t).late && aqOn(e).length ? 1 : 0);
};
const aqLateMsg = (e, t) => {
  const a = aqMt(e, t);
  return (
    (a.f <= 0 && a.w <= 0
      ? "Nettoie le filtre et change l’eau"
      : a.f <= 0
        ? "Nettoie le filtre"
        : "Change l’eau") + " : sans entretien, les poissons ne donnent plus de bulles."
  );
};
let aqBusy = 0;
const aqLv = (e, t = Date.now()) => {
  const a = aqMt(e, t),
    s = 1 - a.w / WAT;
  return {
    dt: Math.max(0, Math.min(1, 1 - a.f / FILT)),
    gr: a.w <= 0 ? 1 : Math.max(0, Math.min(1, (s - 0.6) / 0.4)),
    late: a.late,
  };
};
const SKY_A = [5.5, 8];
const SKY_B = [15.75, 16.75];
const smo = (e) => (e = Math.max(0, Math.min(1, e))) * e * (3 - 2 * e);
function skyP() {
  const e = prefs().sky;
  if ("sys" !== e) return e;
  try {
    const q = matchMedia("(prefers-color-scheme: dark)"),
      l = matchMedia("(prefers-color-scheme: light)");
    if (q.matches) return "night";
    if (l.matches) return "day";
  } catch (e) {}
  const t = document.documentElement.dataset.theme;
  return "dark" === t ? "night" : "light" === t ? "day" : "auto";
}
{
  const e = () => {
    try {
      "sys" === prefs().sky && skyBody();
    } catch (e) {}
  };
  try {
    window.__mqd = matchMedia("(prefers-color-scheme: dark)");
    window.__mqd.addEventListener ? window.__mqd.addEventListener("change", e) : window.__mqd.addListener(e);
  } catch (t) {}
  try {
    (document.addEventListener("visibilitychange", e), addEventListener("focus", e), setInterval(e, 15e3));
  } catch (t) {}
  try {
    new MutationObserver(e).observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["data-theme"],
    });
  } catch (t) {}
}
function aqSky(e = Date.now()) {
  const t = new Date(e),
    a = t.getHours() + t.getMinutes() / 60 + t.getSeconds() / 3600,
    s = skyP(),
    n =
      "day" === s
        ? 1
        : "night" === s || a < SKY_A[0] || a >= SKY_B[1]
          ? 0
          : a < SKY_A[1]
            ? smo((a - SKY_A[0]) / (SKY_A[1] - SKY_A[0]))
            : a < SKY_B[0]
              ? 1
              : 1 - smo((a - SKY_B[0]) / (SKY_B[1] - SKY_B[0])),
    o = "day" === s ? 0.5 : Math.max(0, Math.min(1, (a - SKY_A[0]) / (SKY_B[1] - SKY_A[0]))),
    i = "night" === s ? 0.5 : Math.min(1, ((a - SKY_B[0] + 24) % 24) / (24 - SKY_B[0] + SKY_A[1])),
    r = (e) => 4 + 24 * (1 - Math.sin(Math.PI * e));
  return {
    h: a,
    s: n,
    ph:
      "day" === s || "night" === s ? s : n >= 0.995 ? "day" : n <= 0.005 ? "night" : a < 12 ? "dawn" : "dusk",
    sx: 8 + 84 * o,
    sy: r(o),
    mx: 8 + 84 * i,
    my: r(i),
  };
}
const aqSkyV = (e) => ({
  "--sun": e.s.toFixed(3),
  "--wm": (4 * e.s * (1 - e.s)).toFixed(3),
  "--sx": e.sx.toFixed(1),
  "--sy": e.sy.toFixed(1),
  "--mx": e.mx.toFixed(1),
  "--my": e.my.toFixed(1),
});
let GS = 1;
function skyBody() {
  const e = aqSky(),
    t = document.body;
  ((GS = e.s),
    t.style.setProperty("--gs", e.s.toFixed(3)),
    (t.dataset.sky = e.ph),
    (t.dataset.tx = e.s >= 0.5 ? "d" : "n"));
  try {
    skyChap(!window.__skI && (window.__skI = 1));
  } catch (e) {}
}
const aqSkyStyle = (e) =>
  Object.entries(aqSkyV(aqSky(e)))
    .map(([e, t]) => e + ":" + t)
    .join(";");
const aqVars = (e, t, a = Date.now()) => {
  const s = aqLv(t, a),
    n = aqSky(a);
  (Object.entries(aqSkyV(n)).forEach(([t, a]) => e.style.setProperty(t, a)),
    (e.dataset.ph = n.ph),
    e.style.setProperty("--dt", s.dt.toFixed(3)),
    e.style.setProperty("--gr", s.gr.toFixed(3)),
    (e.dataset.late = s.late ? "1" : "0"),
    (e.dataset.dirty = s.dt > 0.01 ? "1" : "0"));
};
function aqVortex() {
  let e = "",
    t = "";
  for (let t = 0; t < 3; t++) {
    let a = "";
    for (let e = 0; e <= 44; e++) {
      const s = e / 44,
        n = 4 + 44 * s,
        o = 2.0944 * t + 9.6 * s;
      a += (e ? "L" : "M") + (50 + n * Math.cos(o)).toFixed(1) + " " + (50 + n * Math.sin(o)).toFixed(1);
    }
    e += `<path d="${a}"/>`;
  }
  for (let e = 0; e < 16; e++)
    t += `<b class="aqm-sk" style="--k:${e};--r:${10 + (e % 5) * 4}"><i style="--dl:${(0.09 * e).toFixed(2)}s"></i></b>`;
  return `<div class="aqm-vx"><div class="aqm-vs"><svg viewBox="0 0 100 100" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2.4" stroke-linecap="round" aria-hidden="true">${e}</svg></div>${t}</div>`;
}
function aqPlay(e) {
  const t = $("#tank");
  if (!t || wRM) return void aquaRefresh();
  const a = "w" === e ? 4400 : 2800,
    s = (e, a) =>
      setTimeout(() => {
        t.isConnected && a();
      }, e),
    n = (e, t) => e.forEach((e, a) => setTimeout(() => sfx(e, 0.5), 1e3 * (t + 0.55 * a)));
  if (((aqBusy = Date.now() + a + 150), aqPanel(), aqStatus(), chip(), "w" === e)) {
    const e = document.createElement("div");
    ((e.className = "aqm-air go"),
      t.insertBefore(e, t.firstChild),
      t.classList.add("aqm-dr"),
      n([392, 330, 262], 0),
      n([330, 440, 587], 2.2),
      s(700, () => t.classList.add("aqm-dry")),
      s(1900, () => {
        ((t.style.transition = "none"), aqVars(t, aqRead()), t.offsetWidth, (t.style.transition = ""));
      }),
      s(2500, () => t.classList.remove("aqm-dry")),
      s(a, () => {
        (e.remove(), t.classList.remove("aqm-dr"));
      }));
  } else
    (t.insertAdjacentHTML("beforeend", aqVortex()),
      aqVars(t, aqRead()),
      n([294, 392, 494, 659], 0),
      s(a, () => t.querySelector(".aqm-vx") && t.querySelector(".aqm-vx").remove()));
  s(a + 150, () => {
    ((aqBusy = 0), aqStatus());
  });
}
const aqFmtD = (e) => {
  const t = Math.floor(e / 864e5),
    a = Math.floor((e % 864e5) / 36e5);
  return t ? t + " j" + (a ? " " + a + " h" : "") : aqFmt(e);
};
const aqFmt = (e) => {
  const t = Math.max(1, Math.ceil(e / 6e4)),
    a = Math.floor(t / 60),
    s = t % 60;
  return a ? (s ? a + " h " + String(s).padStart(2, "0") : a + " h") : t + " min";
};
let aqTab = "fish";
let aqEd = !1;
let AQR = 4 / 3;
const dH = (e) => (e.w * AQR) / (e.ar || 1);
function dpos(e, t) {
  const a = t.p && t.p[e.id],
    o =
      a && "number" == typeof a.x && "number" == typeof a.b
        ? { x: a.x, b: a.b }
        : { x: e.x, b: "ceil" === e.k ? 100 - dH(e) : void 0 === e.b ? 7 : e.b };
  return ((o.x = Math.max(0, Math.min(100 - e.w, o.x))), o);
}
function dcl(e, t, a) {
  const s = 100 - dH(e);
  return { x: Math.max(0, Math.min(100 - e.w, t)), b: "ceil" === e.k ? s : Math.max(0, Math.min(s, a)) };
}
const aqSig = (e) => {
  try {
    return JSON.stringify([aqOn(e).map((e) => e.id), e.d, e.p, e.w, Object.keys(e.pl || {}), aqNames(e)]);
  } catch (t) {
    return "";
  }
};
let AQSIG = "";
let AQSR = 0;
function aqSyncRef() {
  clearTimeout(AQSR);
  const e = $("#tank");
  if (!e) return;
  const t = aqRead();
  if (aqSig(t) === AQSIG) return void (aqPanel(), aqStatus());
  if (AQS && Object.values(AQS.F).some((e) => "done" !== e.mode))
    return void (AQSR = setTimeout(aqSyncRef, 1200));
  aquaRefresh();
}
function tankHTML(e) {
  AQSIG = aqSig(e);
  const t = WATER.find((t) => t.id === e.w) || WATER[0],
    a = Date.now(),
    s = aqHg(e, a),
    n = new Set(s.map((e) => e.id)),
    o = aqGain(e, s).g,
    i = Object.fromEntries(s.map((e, t) => [e.id, o[t]])),
    r = aqNames(e);
  return `<div class="tank${aqEd ? " ed" : ""}" id="tank" style="--w1:${t.c1};--w2:${t.c2};--dt:${aqLv(e, a).dt.toFixed(3)};--gr:${aqLv(e, a).gr.toFixed(3)};${aqSkyStyle(a)}" data-ph="${aqSky(a).ph}" data-late="${aqMt(e, a).late ? 1 : 0}" data-dirty="${aqLv(e, a).dt > 0.01 ? 1 : 0}"><div class="skn" aria-hidden="true"></div>${"noel" === e.w ? XMBG : ""}<div class="rays"></div><div class="sky" aria-hidden="true"><div class="stars">${[
    [11, 8],
    [26, 22],
    [38, 5],
    [54, 17],
    [67, 9],
    [80, 24],
    [91, 13],
    [19, 32],
    [46, 29],
  ]
    .map(([e, t], a) => `<i style="left:${e}%;top:${t}%;--dl:${0.7 * -a}s"></i>`)
    .join(
      "",
    )}</div></div><div class="sand"></div>${aqPlHTML(e, a)}<div class="bubs">${[9, 24, 43, 62, 78, 91].map((e, t) => `<i style="left:${e}%;--dl:${1.9 * -t}s;--du:${7 + (t % 3) * 2}s"></i>`).join("")}</div>${DECO.filter(
    (t) => e.d[t.id],
  )
    .map((t) => {
      const a = dpos(t, e),
        s = aqEd && !t.fix;
      return `<svg class="dc ${t.k || ""}${s ? " mv" : ""}" data-id="${t.id}"${aqEd ? "" : ` data-a="aqdc" data-v="${t.id}"`} viewBox="${t.vb || "0 0 100 100"}" style="left:${a.x}%;width:${t.w}%;bottom:${a.b}%;aspect-ratio:${t.ar || 1};${"float" === t.k ? "animation-delay:" + (-hs(t.id) % 7) + "s" : ""}" role="img" aria-label="${t.n}"${s ? ' tabindex="0"' : ""}><rect width="100%" height="100%" fill="transparent"/>${t.svg}</svg>${aqGlowEl(t, a)}`;
    })
    .join("")}${aqOn(e)
    .map((t, a) => {
      const s = hs(t.id),
        o = 8 + ((37 * a + (s % 11)) % 46),
        l = aqWan(t, s, 16 + (s % 10), a);
      return `<style>${l.css}</style><div class="fx ${n.has(t.id) ? "h" : ""}${(window.AQFD || {})[t.id] > Date.now() ? " feed" : ""}" data-id="${t.id}" data-a="aqfish" data-v="${t.id}" role="button" tabindex="0" aria-label="${esc(r[t.id] || t.n)} (${t.n})" style="--y:${o}%;--w:${(15 * t.sz).toFixed(1)}%;--tx:${(((96 - 15 * t.sz) / (15 * t.sz)) * 100).toFixed(2)}%;--d:${l.D}s;--dl:${l.dl}s;--p:${(s % 100) / 100}"><div class="fy"><div class="fr"><div class="fi">${fishSVG(t)}</div></div><span class="hg">+${i[t.id] ?? aqGain(e, [t]).g[0]} 🫧</span></div></div>`;
    })
    .join("")}<div class="aqm-haze"></div></div>`;
}
function aqPanel0() {
  const e = aqRead(),
    t = $("#aql");
  if (t)
    if ("fish" === aqTab) {
      const a = aqOn(e).length,
        s = FISH.filter((t) => e.f[t.id]).length,
        n = aqNames(e);
      t.innerHTML =
        `<p class="aqc">Dans l’aquarium : <b id="aqc">${a} / ${MAXF}</b> · ${s} débloqués sur ${FISH.length}</p>` +
        FISH.map((t) => {
          const a = e.f[t.id],
            s = a && a.on,
            hd = !a && t.pe && !UNL();
          return `<div class="ai ${a ? "" : "lock"}${hd ? " xlk sil" : ""}"><div class="ap">${fishSVG(t)}</div><div class="atx"><b>${a ? esc(n[t.id]) : hd ? "???" : t.n}</b><small>${hd ? "Se pêche dans le jeu Pêche" : (a ? esc(t.n) + " · " : "") + (a ? (s ? "Dans l’aquarium" : "En réserve") : "À débloquer") + " · +" + frN((fv(t) * aqM(e)) / 1e3) + " 🫧 par repas"}</small></div>${a ? `<button class="sb" data-a="aqtg" data-v="${t.id}">${s ? "Retirer" : "Remettre"}</button>` : t.pe && !UNL() ? '<button class="sb lkb" disabled>🔒 Pêche</button>' : `<button class="sb buy ${!UNL() && fl < t.p ? "low" : ""}" data-a="aqbuy" data-v="f:${t.id}">Acheter · ${t.p} 🫧</button>`}</div>`;
        }).join("");
    } else if ("care" === aqTab) ((t.innerHTML = aqCareHTML()), aqCare(e));
    else {
      const a = (t) => {
        const a = void 0 !== e.d[t.id];
        return `<div class="ai ${a ? "" : "lock"}"><div class="ap sq"><svg viewBox="${t.vb || "0 0 100 100"}" aria-hidden="true">${t.svg}</svg></div><div class="atx"><b>${t.n}</b><small>${a ? (e.d[t.id] ? "Dans l’aquarium" : "Rangé") : "À débloquer"} · +${frN(t.p / 10)} % de bulles</small></div>${a ? `<button class="sb" data-a="aqdt" data-v="${t.id}">${e.d[t.id] ? "Ranger" : "Remettre"}</button>` : `<button class="sb buy ${!UNL() && fl < t.p ? "low" : ""}" data-a="aqbuy" data-v="d:${t.id}">Acheter · ${t.p} 🫧</button>`}</div>`;
      };
      t.innerHTML =
        `<p class="aqc">Les poissons sont plus heureux avec des décorations !</p><div class="aqf aqed"><div><b>${aqEd ? "Mode placement" : "Placer les décors"}</b><small>${aqEd ? "Glisse un décor dans l’aquarium, puis appuie sur Terminer." : "Déplace tes décors où tu veux."}</small></div><button class="btn" data-a="aqed">${aqEd ? "Terminer" : "Déplacer"}</button></div>${aqEd && Object.keys(e.p).length ? '<button class="lnk" data-a="aqpr">Remettre les décors à leur place</button>' : ""}` +
        DECO_G.map(
          ([e, t]) =>
            `<h3 class="aqh">${t}</h3>` +
            DECO.filter((t) => (t.g || "sea") === e)
              .map(a)
              .join(""),
        ).join("") +
        '<h3 class="aqh">Couleur de l’eau</h3>' +
        WATER.map((t) => {
          const a = e.ws.includes(t.id);
          return `<div class="ai"><div class="ap sw" style="--w1:${t.c1};--w2:${t.c2}"></div><div class="atx"><b>${t.n}</b><small>${a ? (e.w === t.id ? "Actuelle" : "Débloquée") : "À débloquer"}</small></div>${a ? `<button class="sb" data-a="aqws" data-v="${t.id}" ${e.w === t.id ? "disabled" : ""}>${e.w === t.id ? "Choisie" : "Choisir"}</button>` : `<button class="sb buy ${!UNL() && fl < t.p ? "low" : ""}" data-a="aqbuy" data-v="w:${t.id}">Acheter · ${t.p} 🫧</button>`}</div>`;
        }).join("");
    }
}
const AQI = {
  f: '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8.5 8.5v7M12 8.5v7M15.5 8.5v7"/>',
  w: '<path d="M12 3c3.6 4.6 6 7.6 6 11a6 6 0 0 1-12 0c0-3.4 2.4-6.4 6-11Z"/>',
};
const aqRow = (e, t, a) =>
  `<div class="ai aqm" id="aqm-${e}"><div class="ap sq"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${AQI[e]}</svg></div><div class="atx"><b>${t}</b><small id="aqm-${e}t"></small><div class="aqm-bar"><i id="aqm-${e}b"></i></div></div><button class="sb" data-a="aqclean" data-v="${e}">${a}</button></div>`;
const aqCareHTML = () =>
  '<p class="aqc">Nettoie le filtre tous les 4 jours et change l’eau chaque semaine : l’eau se trouble avec le filtre et verdit avec le temps. Sans entretien, les poissons ne donnent plus de bulles.</p>' +
  aqRow("f", "Filtre", "Nettoyer") +
  aqRow("w", "Eau", "Changer");
function aqCare(e, t = Date.now()) {
  const a = aqMt(e, t);
  [
    ["f", a.f, FILT, "Dans ", "À nettoyer maintenant"],
    ["w", a.w, WAT, "Dans ", "À changer maintenant"],
  ].forEach(([e, t, a, s, n]) => {
    const o = $("#aqm-" + e);
    o &&
      (o.classList.toggle("late", t <= 0),
      ($("#aqm-" + e + "t").textContent = t > 0 ? s + aqFmtD(t) : n),
      ($("#aqm-" + e + "b").style.width = Math.max(0, Math.min(100, (t / a) * 100)).toFixed(1) + "%"));
  });
}
function aqDot(e) {
  const t = $("#nav .ndot");
  t && (t.hidden = !e);
}
function aqStatus() {
  const e = aqRead(),
    t = Date.now(),
    a = aqOn(e),
    s = aqHg(e, t),
    n = aqMt(e, t).late,
    o = $("#tank");
  if (o && Date.now() >= aqBusy) {
    if (("1" === o.dataset.late) !== n) return void aquaRefresh();
    aqVars(o, e, t);
  }
  document.querySelectorAll(".tank .fx").forEach((e) =>
    e.classList.toggle(
      "h",
      s.some((t) => t.id === e.dataset.id),
    ),
  );
  const i = n && a.length > 0,
    r = !a.length || s.length || i ? 0 : Math.min(...a.map((t) => e.f[t.id].t + HR)) - t,
    l = $("#aqs");
  if (l) {
    ((l.textContent = a.length
      ? i
        ? "Entretien nécessaire"
        : s.length
          ? 1 === s.length
            ? "1 poisson a faim"
            : s.length + " poissons ont faim"
          : "Tout le monde est rassasié"
      : FISH.some((t) => e.f[t.id])
        ? "Aucun poisson dans l’aquarium"
        : "Ton aquarium est vide"),
      ($("#aqn").textContent = a.length
        ? i
          ? "Sans entretien, plus de bulles"
          : s.length
            ? 1 === s.length
              ? "+" + aqGain(e, s).g[0] + " 🫧 à récolter"
              : "Chacun donne selon sa valeur"
            : "Prochain repas dans " + aqFmt(r)
        : FISH.some((t) => e.f[t.id])
          ? "Remets un poisson à l’eau."
          : "Ton premier poisson coûte " + FISH[0].p + " 🫧."));
    const t = $("#aqb"),
      n = UNL() && a.length && !s.length;
    ((t.disabled = !i && !s.length && !n),
      t.classList.toggle("uf", !!n),
      (t.textContent = i
        ? "Entretien"
        : n
          ? "Nourrir"
          : s.length
            ? "Nourrir · +" + aqGain(e, s).g.reduce((e, t) => e + t, 0) + " 🫧"
            : a.length
              ? "Dans " + aqFmt(r)
              : "Nourrir"));
  }
  const c = $("#aqc");
  c && (c.textContent = a.length + " / " + MAXF);
  const d = $("#aqm-pt");
  (d && (d.hidden = !n), $("#aqm-f") && aqCare(e, t), aqDot(s.length + (i ? 1 : 0)));
}
function aquaRefresh() {
  const e = $("#tank");
  if (!e) return;
  const t = {},
    Q = AQS && AQS.t === e ? AQS : null;
  (e.querySelectorAll(".fx").forEach((e) => {
    t[e.dataset.id] = e.getAnimations({ subtree: !0 }).map((e) => [e.animationName, +e.currentTime]);
  }),
    (e.outerHTML = tankHTML(aqRead())),
    Q &&
      (() => {
        const e = $("#tank");
        ((Q.t = e),
          Q.P.forEach((t) => t.state < 2 && e.appendChild(t.e)),
          Object.values(Q.F).forEach((t) => {
            const a = e.querySelector('.fx[data-id="' + t.el.dataset.id + '"]');
            a
              ? ((a.style.transform = t.el.style.transform),
                (t.el = a),
                (t.fr = a.querySelector(".fr")),
                (t.fi = a.querySelector(".fi")))
              : (t.mode = "done");
          }));
      })(),
    document.querySelectorAll("#tank .fx").forEach((e) => {
      const a = t[e.dataset.id];
      a &&
        e.getAnimations({ subtree: !0 }).forEach((e) => {
          const t = a.find((t) => t[0] === e.animationName);
          t && isFinite(t[1]) && (e.currentTime = t[1]);
        });
    }),
    aqPanel(),
    aqStatus(),
    chip());
}
function aqTabTo(e) {
  const t = aqEd,
    a = document.querySelectorAll("[data-a=aqtab]");
  if (((aqTab = e), (aqEd = !1), aqOpenSh(e), !$("#tank") || !a.length)) return aquaScreen();
  a.forEach((t) => t.classList.toggle("on", t.dataset.v === e));
  const s = $("#m-aq");
  (s && (s.textContent = ""), t ? aquaRefresh() : (aqPanel(), aqStatus()));
}
function aquaScreen() {
  ((cur = null),
    (origin = "home"),
    nv("aqua"),
    (mt = "m-aq"),
    (aqEd = !1),
    (aqBusy = 0),
    (aqTab = "fish"),
    (AQR = innerWidth / innerHeight),
    (app.innerHTML = `<div class="aqfs"><header class="top aqhd"><h1 class="aqh1" data-a="aqlvt" role="button" tabindex="0" aria-expanded="false" aria-label="Aquarium : voir le niveau des poissons et des décors">Aquarium<span class="aqhi" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 5h6M3 11h10"/><path d="m11 4 2 2 2-2" stroke-width="1.6"/></svg></span></h1><div class="chip">🫧 ${FLX()}</div></header>${tankHTML(aqRead())}<div class="aqst"><b id="aqs"></b><small id="aqn"></small></div><p class="m" id="m-aq" role="status" aria-live="polite"></p><button class="aqrb aqinv" data-a="aqinv"><span class="aqri"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8l8-4 8 4v9l-8 4-8-4V8Z"/><path d="M4 8l8 4 8-4M12 12v9"/></svg></span><b>Inventaire</b></button><div class="aqbar"><button class="aqrb" data-a="aqshop"><span class="aqri"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg></span><b>Boutique</b></button><button class="aqfeedb" id="aqb" data-a="aqfeed"></button><button class="aqrb" data-a="aqcare"><span class="aqri"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c3.6 4.6 6 7.6 6 11a6 6 0 0 1-12 0c0-3.4 2.4-6.4 6-11Z"/><path d="M9 14.5a3 3 0 0 0 3 3"/></svg><i class="aqm-pt" id="aqm-pt" hidden></i></span><b>Entretien</b></button></div><button class="btn aqedb" data-a="aqed">Terminer le placement</button><div class="aqbd" id="aqbd" data-a="aqclose"></div><section class="aqsh glass" id="aqsh" data-tab="${aqTab}" aria-label="Boutique et entretien"><div class="aqsht"><div class="seg"><button class="${"fish" === aqTab ? "on" : ""}" data-a="aqtab" data-v="fish">Poissons</button><button class="${"deco" === aqTab ? "on" : ""}" data-a="aqtab" data-v="deco">Décors</button><button class="${"plant" === aqTab ? "on" : ""}" data-a="aqtab" data-v="plant">Plantes</button></div><h2 class="aqtc">Entretien</h2><button class="aqx" data-a="aqclose" aria-label="Fermer">×</button></div><div id="aql"></div></section></div>`),
    aqPanel(),
    aqStatus(),
    window.scrollTo(0, 0));
}
let AQS = null;
let AQG = {};
const aqLab = (e, t, a) => {
  if (window.aqGainShow) return;
  const s = e.getBoundingClientRect(),
    n = t.getBoundingClientRect(),
    o = document.createElement("span");
  ((o.className = "fp"),
    (o.textContent =
      "+" + (AQG[t.dataset.id] ?? fv(FISH.find((e) => e.id === t.dataset.id) || { p: 0 })) + " 🫧"),
    (o.style.left = n.left - s.left + n.width / 2 + "px"),
    (o.style.top = n.top - s.top + "px"),
    (o.style.animationDelay = (a || 0) + "s"),
    e.appendChild(o),
    setTimeout(() => o.remove(), 1900));
};
function aqStop() {
  AQS &&
    (cancelAnimationFrame(AQS.raf),
    AQS.P.forEach((e) => e.e.remove()),
    Object.values(AQS.F).forEach((e) => {
      ((e.el.style.transform = ""), e.el.classList.remove("rush"), e.fr && e.fr.classList.remove("x", "nom"));
    }),
    (AQS = null));
}
function aqFx(e, t) {
  const a = $("#tank");
  if (!a) return;
  const s = e.map((e) => a.querySelector('.fx[data-id="' + e + '"]')).filter(Boolean),
    n = a.getBoundingClientRect(),
    o = a.clientWidth,
    i = a.clientHeight;
  if (wRM) {
    for (let e = 0; e < 5; e++) {
      const e = document.createElement("i");
      ((e.className = "fd rm"),
        (e.style.transform =
          "translate(" + o * (0.3 + 0.4 * Math.random()) + "px," + i * (0.25 + 0.4 * Math.random()) + "px)"),
        a.appendChild(e),
        setTimeout(() => e.remove(), 3e3));
    }
    return void s.filter((a) => (t || e).includes(a.dataset.id)).forEach((e, t) => aqLab(a, e, 0.1 * t));
  }
  AQS && AQS.t !== a && aqStop();
  const r = AQS || (AQS = { t: a, P: [], F: {}, raf: 0, last: 0 }),
    l = s.length
      ? s.reduce((e, t) => {
          const a = t.getBoundingClientRect();
          return e + (a.left - n.left + a.width / 2);
        }, 0) /
        s.length /
        o
      : 0.5,
    c = Math.min(0.78, Math.max(0.22, l)),
    d = Math.min(0.3, 0.06 + 0.035 * s.length),
    f = Math.min(30, Math.max(4, 3 * s.length));
  for (let e = 0; e < f; e++) {
    const t = document.createElement("i");
    ((t.className = "fd"),
      a.appendChild(t),
      r.P.push({
        e: t,
        x: Math.max(0.04 * o, Math.min(0.96 * o, (c + (2 * Math.random() - 1) * d) * o)),
        y: -8,
        xs: 0,
        ph: 6 * Math.random(),
        wait: e * Math.min(0.11, 2 / f) + 0.3 * Math.random(),
        vy: i * (0.1 + 0.04 * Math.random()),
        state: 0,
        n: 0,
      }));
  }
  (s.forEach((a, s) => {
    const i = a.dataset.id;
    if (r.F[i]) return;
    const l = a.getBoundingClientRect(),
      c = a.querySelector(".fr"),
      d = a.querySelector(".fi"),
      f = parseFloat(getComputedStyle(a).animationDuration) || 20,
      u = Math.max(8, (0.94 * (o - l.width)) / f);
    r.F[i] = {
      el: a,
      fr: c,
      fi: d,
      px: l.left - n.left,
      py: l.top - n.top,
      fw: l.width,
      fh: l.height,
      mode: "rush",
      tg: null,
      eaten: 0,
      max: 3,
      dir: 1,
      face: 0,
      rt: 0,
      et: 0,
      lab: !(t || e).includes(i),
      fed: (t || e).includes(i),
      k: s,
      vmax: Math.max(125, Math.min(230, 9 * u)),
    };
  }),
    r.raf || (r.raf = requestAnimationFrame(aqStep)));
}
const AQW = {};
function aqWan(e, t, a, s, n) {
  const o = Math.random,
    i = e.id,
    r = AQW[i] || (AQW[i] = { n: 0 });
  if (!n && r.res) return ((r.f = e), (r.q = t), (r.k = s), r.res);
  ((r.f = e), (r.q = t), (r.k = s));
  const l = n ? ++r.n : 0,
    c = "hippo" === i || "meduse" === i,
    d = ("tortue" === i || "lune" === i || "meduse" === i || "hippo" === i ? 2.8 : 4.6) * (0.75 + 0.5 * o()),
    f = 96 - 15 * e.sz,
    u = 4 + Math.floor(5 * o()),
    h = [];
  const SA = ["raie", "raieaur", "tortue", "meduse", "hippo"].includes(i),
    Lo = SA ? -0.16 : -0.06,
    Hi = SA ? 1.16 : 1.06,
    DN = Math.max(30, 96 - 15 * e.sz),
    XL = -(2 + 15 * e.sz) / DN - 0.03,
    XR = 98 / DN + 0.03;
  let p = n ? n[0] : Lo + (Hi - Lo) * o(),
    m = n ? n[1] : 4 + 74 * o(),
    b = n ? n[2] : o();
  h.push([p, m, b]);
  for (let e = 1; e < u; e++) {
    let e = c ? p + 0.3 * (2 * o() - 1) : Lo + (Hi - Lo) * o(),
      t = c ? m + 34 * (2 * o() - 1) : 3 + 78 * o();
    (Math.abs(e - p) < 0.1 && (e += e < 0.5 ? 0.12 : -0.12),
      (p = Math.min(Hi, Math.max(Lo, e))),
      !c && o() < 0.14 && (p = o() < 0.5 ? XL : XR),
      (m = Math.min(80, Math.max(2, t))),
      (b = o()),
      h.push([p, m, b]));
  }
  const g = [0];
  for (let e = 1; e < h.length; e++) {
    const t = (h[e][0] - h[e - 1][0]) * f,
      a = 0.8 * (h[e][1] - h[e - 1][1]);
    g.push(g[e - 1] + Math.max(3.5, Math.hypot(t, a, 22 * (h[e][2] - h[e - 1][2])) / d));
  }
  const E = g[g.length - 1];
  let y = r.dir || 1,
    v = "",
    A = "";
  for (let e = 0; e < h.length; e++) {
    const t = ((g[e] / E) * 100).toFixed(2);
    if (
      ((A += `${t}%{translate:calc(var(--tx)*${h[e][0].toFixed(3)}) 0;top:${(h[e][1] + 16 * (h[e][2] - 0.5)).toFixed(1)}%;scale:${(0.78 + 0.9 * h[e][2]).toFixed(2)};--aqz:${h[e][2].toFixed(2)};animation-timing-function:ease-in-out}`),
      e < h.length - 1)
    ) {
      const a = (h[e + 1][0] - h[e][0]) * f;
      (Math.abs(a) > 1.5 && (y = a > 0 ? 1 : -1),
        (v += 0 === e ? `0%{transform:scaleX(${y})}` : `${t}%{transform:scaleX(${y})}`));
    }
  }
  ((v += `100%{transform:scaleX(${y})}`), (r.dir = y), (r.end = h[h.length - 1]));
  const S = `.tank .fx[data-id="${i}"]`,
    x = l ? "-" + l : "",
    M = n ? "0s" : -(o() * E * 0.9).toFixed(2) + "s";
  return (r.res = {
    D: +E.toFixed(2),
    dl: M,
    css: `@keyframes swx-${i}${x}{${A}}@keyframes flp-${i}${x}{${v}}${S}{animation:swx-${i}${x} ${E.toFixed(2)}s linear ${M} infinite}${S} .fi{animation:flp-${i}${x} ${E.toFixed(2)}s steps(1,end) ${M} infinite}@media(prefers-reduced-motion:reduce){${S},${S} .fi{animation:none}}`,
  });
}
document.addEventListener("animationiteration", (e) => {
  if (0 !== (e.animationName || "").indexOf("swx-") || e.target.className.indexOf("fx") < 0) return;
  const t = e.target,
    a = t.dataset.id,
    s = AQW[a],
    n = t.previousElementSibling;
  if (!s || !n || "STYLE" !== n.tagName) return;
  const E = s.end;
  E &&
    ((t.style.translate = "calc(var(--tx)*" + E[0].toFixed(3) + ") 0"),
    (t.style.top = (E[1] + 16 * (E[2] - 0.5)).toFixed(1) + "%"),
    (t.style.scale = (0.78 + 0.9 * E[2]).toFixed(2)));
  const o = aqWan(s.f, s.q, 0, s.k, s.end);
  ((n.textContent = o.css), t.style.setProperty("--d", o.D + "s"), t.style.setProperty("--dl", "0s"));
});
const aqNx = (e) => {
  const t = getComputedStyle(e),
    a = parseFloat(t.translate);
  return (parseFloat(t.left) || 0) + (a >= 0 || a < 0 ? (a / 100) * e.getBoundingClientRect().width : 0);
};
function aqDash(e) {
  if (wRM || !e || !e.isConnected || e._dsh) return;
  const t = e.getAnimations({ subtree: !0 }).filter((e) => /^(swx|flp)/.test(e.animationName)),
    a = t.find((e) => e.animationName.startsWith("swx"));
  if (!a) return;
  const s = a.effect.getComputedTiming(),
    n = +s.duration,
    o = +s.delay || 0,
    i = t.map((e) => +e.currentTime),
    r = +a.currentTime;
  if (!(n > 0 && isFinite(r))) return;
  const l = Math.floor((r - o) / n),
    c = Math.max(0, o + (l + 1) * n - r - 30),
    d = (a) => (
      t.forEach((e, t) => {
        e.currentTime = i[t] + a;
      }),
      aqNx(e)
    ),
    f = d(0),
    u = c + 0.6 * n;
  let h = -1,
    p = 0,
    m = 0;
  for (let e = 1; e <= 120; e++) {
    const t = (u * e) / 120,
      a = Math.abs(d(t) - f);
    if ((a > m && ((m = a), (p = t)), a >= 54)) {
      let a = (u * (e - 1)) / 120,
        s = t;
      for (let e = 0; e < 8; e++) {
        const e = (a + s) / 2;
        Math.abs(d(e) - f) >= 54 ? (s = e) : (a = e);
      }
      h = s;
      break;
    }
  }
  h < 0 && (h = p);
  const b = d(h);
  if (Math.abs(b - f) < 2) return void d(0);
  e._dsh = 1;
  const g = e.animate(
    [{ transform: "translateX(" + (f - b).toFixed(1) + "px)" }, { transform: "translateX(0px)" }],
    { duration: 760, easing: "cubic-bezier(.12,.8,.25,1)" },
  );
  g.onfinish = g.oncancel = () => {
    e._dsh = 0;
  };
}
const AQHK = [
  "On rate cent pour cent des tirs qu’on ne prend pas. Alors je tire, même dans l’océan.",
  "Garde la tête haute et la palette sur la glace : le reste suit.",
  "Un bon arrêt vaut un but. Un grand arrêt vaut une soirée entière.",
  "Ce n’est pas la rondelle qui fait l’équipe, c’est chaque passe qu’on se fait.",
  "Tombe, relève-toi, patine encore. C’est ça, le hockey. C’est ça, la vie.",
  "Le plus beau son du monde ? Une rondelle qui frappe le fond du filet.",
  "Respire, place-toi, fais confiance à tes réflexes : le filet est à toi.",
  "Les meilleures parties se gagnent dans le troisième tiers… et les meilleures journées aussi.",
  "Une patinoire gelée, des amis, une rondelle : l’hiver ne demande rien de plus.",
  "On ne compte pas les buts, on compte les sourires après la partie.",
];
function aqDash(e) {
  if (wRM || !e || !e.isConnected || e._dsh || e._qt) return;
  const t = e.querySelector(".fr"),
    a = e.querySelector(".fi");
  if (!a) return;
  const s = getComputedStyle(a).transform,
    n =
      ((s && "none" !== s && Math.sign(parseFloat(s.slice(s.indexOf("(") + 1)))) || 1) *
      (t && t.classList.contains("x") ? -1 : 1);
  e._dsh = 1;
  const o = e.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(" + 30 * n + "px)", offset: 0.3, easing: "ease-in-out" },
      { transform: "translateX(0)" },
    ],
    { duration: 850, easing: "ease-out" },
  );
  o.onfinish = o.oncancel = () => {
    e._dsh = 0;
  };
}
let aqQT = 0;
function aqQuoteSched() {
  (clearTimeout(aqQT),
    (aqQT = setTimeout(
      () => {
        try {
          aqQuoteGo();
        } catch (e) {}
        aqQuoteSched();
      },
      3e4 + 45e3 * Math.random(),
    )));
}
async function aqQuoteGo() {
  const e = document.querySelector("#tank");
  if (
    !e ||
    !e.isConnected ||
    document.hidden ||
    wRM ||
    e.classList.contains("ed") ||
    e.querySelector(".aqq") ||
    aqBusy > Date.now() ||
    (AQS && Object.values(AQS.F || {}).some((e) => "done" !== e.mode))
  )
    return;
  const t = [...e.querySelectorAll(".fx")].filter((e) => !e._dsh && e.querySelector(".fi svg"));
  if (!t.length) return;
  const a = t[Math.floor(Math.random() * t.length)],
    s = e.getBoundingClientRect(),
    n = a.getBoundingClientRect(),
    o = a.querySelector(".fr"),
    i = a.querySelector(".fi"),
    r = getComputedStyle(i).transform,
    l =
      ((r && "none" !== r && Math.sign(parseFloat(r.slice(r.indexOf("(") + 1)))) || 1) *
      (o && o.classList.contains("x") ? -1 : 1),
    c = Math.min(2.3, (0.3 * s.width) / n.width),
    d = s.width / 2 - (n.left - s.left + n.width / 2),
    f = 0.68 * s.height - (n.top - s.top + n.height / 2),
    u = document.createElement("div"),
    h = document.createElement("div"),
    p =
      ["hockey", "gardien"].includes(a.dataset.id) && Math.random() < 0.75
        ? AQHK[Math.floor(Math.random() * AQHK.length)]
        : Q[Math.floor(Math.random() * Q.length)];
  ((u.className = "aqq"),
    (u.style.cssText = `left:${n.left - s.left}px;top:${n.top - s.top}px;width:${n.width}px;height:${n.height}px`),
    (u.innerHTML = `<div style="transform:scaleX(${l})">${a.querySelector(".fi svg").outerHTML}</div>`),
    (h.className = "aqb"),
    (h.textContent = p),
    p.length > 90 && (h.style.fontSize = "13px"));
  const m = n.height * c,
    b = 0.68 * s.height - m / 2;
  ((h.style.bottom = s.height - b + 12 + "px"),
    h.style.setProperty("--tl", l * n.width * c * 0.22 + "px"),
    e.appendChild(u),
    e.appendChild(h),
    (a._qt = 1),
    (a.style.visibility = "hidden"));
  const g = () => e.isConnected && u.isConnected;
  try {
    if (
      (await u.animate([{ transform: "none" }, { transform: `translate(${d}px,${f}px) scale(${c})` }], {
        duration: 1100,
        easing: "cubic-bezier(.3,.8,.3,1)",
        fill: "forwards",
      }).finished,
      !g())
    )
      throw 0;
    if (
      (h.classList.add("on"),
      u.firstChild.animate([{ translate: "0 -3px" }, { translate: "0 3px" }], {
        duration: 1300,
        iterations: 1 / 0,
        direction: "alternate",
        easing: "ease-in-out",
      }),
      u.firstChild.firstChild.animate([{ scale: "1 1" }, { scale: "1.05 .96" }], {
        duration: 340,
        iterations: 14,
        direction: "alternate",
        easing: "ease-in-out",
      }),
      await new Promise((e) => setTimeout(e, 5e3)),
      !g())
    )
      throw 0;
    h.classList.remove("on");
    const t = n.left - s.left + n.width / 2,
      r = n.top - s.top + n.height / 2,
      l = u.getAnimations()[0];
    ((u.style.transform = `translate(${d}px,${f}px) scale(${c})`), l && l.cancel());
    const p = () => {
      const e = getComputedStyle(i).transform;
      return (
        ((e && "none" !== e && Math.sign(parseFloat(e.slice(e.indexOf("(") + 1)))) || 1) *
        (o && o.classList.contains("x") ? -1 : 1)
      );
    };
    await new Promise((s) => {
      const o = performance.now(),
        i = () => {
          if (!g()) return s();
          const l = Math.min(1, (performance.now() - o) / 1100),
            h = l < 0.5 ? 2 * l * l : 1 - Math.pow(-2 * l + 2, 2) / 2,
            m = a.getBoundingClientRect(),
            b = e.getBoundingClientRect(),
            E = m.left - b.left + m.width / 2 - t,
            y = m.top - b.top + m.height / 2 - r,
            v = m.width / n.width || 1,
            A = d + (E - d) * h,
            S = f + (y - f) * h,
            x = c + (v - c) * h;
          ((u.style.transform = `translate(${A}px,${S}px) scale(${x})`),
            l > 0.6 && (u.firstChild.style.transform = `scaleX(${p()})`),
            l < 1 ? requestAnimationFrame(i) : s());
        };
      requestAnimationFrame(i);
    });
  } catch (e) {}
  ((a.style.visibility = ""), (a._qt = 0), u.remove(), h.remove());
}
aqQuoteSched();
const GLW = {
  guirlande: () => {
    const e = ["#ff6b6b", "#ffd66b", "#6bd4ff", "#8dff9c", "#d08bff"],
      t = [];
    let a = 0;
    for (let s = 0; s < 4; s++)
      [0.25, 0.5, 0.75].forEach((n) => {
        (t.push([
          25 * s + 2 * (1 - n) * n * 12.5 + n * n * 25,
          (1 - n) * (1 - n) + 2 * (1 - n) * n * 15 + n * n * 2,
          26,
          e[a % 5],
        ]),
          a++);
      });
    return t;
  },
  lampions: () => [
    [20, 33, 110, "#ffb86b"],
    [50, 49, 110, "#ff8aa8"],
    [80, 29, 110, "#ffe08a"],
  ],
  lanterne: () => [[50, 52, 330, "#ffcf7a"]],
  xfeu: () => [
    [50, 58, 300, "#ffd27a"],
    [50, 58, 200, "#ff8ad8"],
  ],
  meduse: () => [[50, 42, 260, "#c9a8ff"]],
  cristal: () => [[50, 50, 300, "#bfe8ff"]],
};
function aqGlowEl(e, t) {
  const a = GLW[e.id];
  if (!a) return "";
  const s = a(),
    n = [...new Set(s.map((e) => e[3]))];
  return `<svg class="dc lgo ${e.k || ""}" viewBox="${e.vb || "0 0 100 100"}" style="left:${t.x}%;width:${e.w}%;bottom:${t.b}%;aspect-ratio:${e.ar || 1};${"float" === e.k ? "animation-delay:" + (-hs(e.id) % 7) + "s" : ""}" aria-hidden="true"><defs>${n.map((e) => `<radialGradient id="lg${e.slice(1)}"><stop offset="0" stop-color="${e}" stop-opacity=".62"/><stop offset=".4" stop-color="${e}" stop-opacity=".22"/><stop offset="1" stop-color="${e}" stop-opacity="0"/></radialGradient>`).join("")}</defs>${s.map(([e, t, a, s]) => `<circle cx="${e.toFixed(1)}" cy="${t.toFixed(1)}" r="${a}" fill="url(#lg${s.slice(1)})"/>`).join("")}</svg>`;
}
function aqLit() {
  if (document.hidden) return;
  const e = document.querySelector("#tank");
  if (!e) return;
  const t = parseFloat(getComputedStyle(e).getPropertyValue("--sun")),
    a = [...e.querySelectorAll(".fx")],
    s =
      isNaN(t) || t > 0.97
        ? []
        : [...e.querySelectorAll(".lgo circle")].map((e) => {
            const t = e.getBoundingClientRect(),
              a = /lg([0-9a-f]{6})/i.exec(e.getAttribute("fill") || "");
            return {
              x: t.left + t.width / 2,
              y: t.top + t.height / 2,
              r: 0.34 * t.width,
              c: a ? "#" + a[1] : "#ffd98a",
            };
          });
  a.forEach((e) => {
    let a = 0,
      n = "";
    if (s.length && !e._qt) {
      const t = e.getBoundingClientRect(),
        o = t.left + t.width / 2,
        i = t.top + t.height / 2;
      s.forEach((e) => {
        const t = Math.max(0, 1 - Math.hypot(o - e.x, i - e.y) / e.r);
        t > a && ((a = t), (n = e.c));
      });
    }
    const o = a ? (Math.min(1, 1.25 * a) * (1 - t)).toFixed(2) : "0";
    e._lit !== o && ((e._lit = o), e.style.setProperty("--lit", o), n && e.style.setProperty("--litc", n));
  });
}
function aqOpenSh(e) {
  const t = $("#aqsh"),
    a = $("#aqbd");
  (t && ((t.dataset.tab = e), t.classList.add("open"), (t.scrollTop = 0)), a && a.classList.add("open"));
}
function aqShut() {
  const e = $("#aqsh"),
    t = $("#aqbd");
  (e && e.classList.remove("open"), t && t.classList.remove("open"));
}
function aqInv() {
  const e = aqRead(),
    t = $("#aql");
  if (!t) return;
  const a = aqNames(e),
    s = FISH.filter((t) => e.f[t.id]),
    n = DECO.filter((t) => void 0 !== e.d[t.id]),
    o = s
      .map((t) => {
        const s = e.f[t.id].on;
        return `<div class="ai"><div class="ap">${fishSVG(t)}</div><div class="atx"><b>${esc(a[t.id])}</b><small>${esc(t.n)} · ${s ? "Dans l’aquarium" : "Rangé"}</small></div><button class="sb" data-a="aqtg" data-v="${t.id}">${s ? "Ranger" : "Sortir"}</button></div>`;
      })
      .join(""),
    i = n
      .map((t) => {
        const a = e.d[t.id];
        return `<div class="ai"><div class="ap sq"><svg viewBox="${t.vb || "0 0 100 100"}" aria-hidden="true">${t.svg}</svg></div><div class="atx"><b>${t.n}</b><small>${a ? "Dans l’aquarium" : "Rangé"}</small></div><button class="sb" data-a="aqdt" data-v="${t.id}">${a ? "Ranger" : "Sortir"}</button></div>`;
      })
      .join("");
  ((t.innerHTML =
    `<p class="aqc">Poissons dans l’aquarium : <b>${aqOn(e).length} / ${MAXF}</b> · décors : <b>${n.filter((t) => e.d[t.id]).length} / ${n.length}</b><br>Bonus de bulles des décors : <b>×${frN(aqM(e) / 1e3)}</b></p><div class="aqf aqed"><div><b>Placer les décors</b><small>Déplace tes décors où tu veux dans l’aquarium.</small></div><button class="btn" data-a="aqed">Déplacer</button></div>` +
    (Object.keys(e.p).length
      ? '<button class="lnk" data-a="aqpr">Remettre les décors à leur place</button>'
      : "") +
    '<h3 class="aqh">Poissons</h3>' +
    (o || '<p class="aqc">Aucun poisson pour l’instant : va faire un tour à la boutique.</p>') +
    '<h3 class="aqh">Décors</h3>' +
    (i || '<p class="aqc">Aucun décor pour l’instant : va faire un tour à la boutique.</p>') +
    aqPlInv(e)),
    aqpO(e) && Object.keys(aqpO(e)).length ? (t.dataset.ps = aqpSig(e)) : delete t.dataset.ps);
}
function aqPanel() {
  const e = $(".aqtc");
  if ((e && (e.textContent = "inv" === aqTab ? "Inventaire" : "Entretien"), "inv" === aqTab)) return aqInv();
  if ("plant" === aqTab) return aqPl();
  (DECO_G.some((e) => "float" === e[0]) ||
    (DECO_G.splice(1, 0, ["float", "Flottants"]),
    DECO.forEach((e) => {
      e.g || "float" !== e.k || (e.g = "float");
    })),
    aqPanel0());
  const t = $("#aql");
  if (!t) return;
  (t.querySelectorAll("[data-a=aqtg],[data-a=aqdt]").forEach((e) => {
    const t = document.createElement("span");
    ((t.className = "aqown"), (t.textContent = "Possédé ✓"), e.replaceWith(t));
  }),
    t.querySelectorAll(".aqed,[data-a=aqpr]").forEach((e) => e.remove()));
  const a = aqRead();
  if ("fish" === aqTab) {
    const e = [...t.querySelectorAll(":scope > .ai")];
    e.length === FISH.length &&
      AQFG.forEach(([a, s]) => {
        const n = e.filter((e, t) => aqFC(FISH[t]) === a);
        if (!n.length) return;
        const o = document.createElement("h3");
        ((o.className = "aqh"), (o.textContent = s), t.appendChild(o), n.forEach((e) => t.appendChild(e)));
      });
  }
  if (
    (t.querySelectorAll("[data-a=aqbuy]").forEach((e) => {
      const [t, s] = e.dataset.v.split(":"),
        n = ("f" === t ? FISH : "d" === t ? DECO : WATER).find((e) => e.id === s);
      if (!n) return;
      const o = e.closest(".ai"),
        i = () => {
          if (!o) return;
          o.classList.add("xlk", "sil");
          const e = o.querySelector(".atx b");
          e && (e.textContent = "???");
        };
      if ("d" === t && aqHid(n, t, a)) return void (o && o.remove());
      const r = aqTL(n, t, a);
      if ("f" !== t || "gardien" !== s || a.f.hockey)
        if (r) {
          i();
          const t = o && o.querySelector("small");
          (t && (t.textContent = "Se débloque avec l’aquarium " + r),
            (e.outerHTML = '<button class="sb lkb" disabled>🔒 Aquarium ' + r + "</button>"));
        } else if (aqXL(n)) {
          i();
          const t = o && o.querySelector("small");
          (t && (t.textContent = "Un noël pour Zeni : étape " + XM(n.lk)),
            (e.outerHTML = '<button class="sb lkb" disabled>🔒 Étape ' + XM(n.lk) + "</button>"));
        } else if (n.pe && "f" === t && !a.f[n.id] && !UNL()) {
          i();
          const t = o && o.querySelector("small");
          (t && (t.textContent = "Se pêche dans le jeu Pêche"),
            (e.outerHTML = '<button class="sb lkb" disabled>🔒 Pêche</button>'));
        } else if (aqGLk(n)) {
          i();
          const t = o && o.querySelector("small");
          (t &&
            (t.textContent = n.ad
              ? "Calendrier de l’avent : " + n.ad + " décembre"
              : n.xx
                ? "Se débloque après ???"
                : n.sl
                  ? "Se débloque à l’étape " + n.sl + " de l’histoire"
                  : "Se débloque avec Galacfish, niveau " + n.gl),
            (e.outerHTML =
              '<button class="sb lkb" disabled>🔒 ' +
              (n.ad ? "🎁 " + n.ad + " déc." : n.xx ? "???" : n.sl ? "Étape " + n.sl : "Niveau " + n.gl) +
              "</button>"));
        } else n.p || (e.textContent = "Obtenir");
      else {
        i();
        const t = o && o.querySelector("small");
        (t && (t.textContent = "Se débloque après ???"),
          (e.outerHTML = '<button class="sb lkb" disabled>🔒 ???</button>'));
      }
    }),
    "fish" === aqTab || "deco" === aqTab)
  ) {
    let e = [];
    const a = () => {
      if (!e.length) return;
      const t = document.createElement("div");
      ((t.className = "aqcar"),
        e[0].before(t),
        [
          ...e.filter((e) => e.querySelector(".buy")),
          ...e.filter((e) => e.classList.contains("xlk")),
          ...e.filter((e) => !e.querySelector(".buy") && !e.classList.contains("xlk")),
        ].forEach((e) => t.appendChild(e)),
        (e = []));
    };
    ([...t.children].forEach((t) => {
      t.classList.contains("ai") ? e.push(t) : a();
    }),
      a(),
      t.querySelectorAll("h3.aqh").forEach((e) => {
        const t = e.nextElementSibling;
        (t && t.classList.contains("aqcar")) || e.remove();
      }));
  }
}
setInterval(aqLit, 140);
const AQT = [
  [830, 530],
  [2150, 1200],
];
const AQR3 = [5, 10];
const aqWinter = () => UNL() || Date.now() >= new Date(2027, 0, 10).getTime();
const aqFC = (e) =>
  e.lk || e.ev ? "ev" : ["hippo", "raie", "tortue", "meduse", "raieaur"].includes(e.id) ? "mar" : "fish";
const AQFG = [
  ["fish", "Poissons"],
  ["mar", "Animaux marins"],
  ["ev", "Événements"],
];
function aqSpent(e) {
  let t = 0,
    a = 0;
  return (
    FISH.forEach((a) => {
      e.f[a.id] && (t += a.p);
    }),
    DECO.forEach((t) => {
      void 0 !== e.d[t.id] && (a += t.p);
    }),
    { f: t, d: a }
  );
}
function aqTier(e) {
  if (UNL()) return 3;
  const t = aqSpent(e);
  let a = 1;
  for (const [e, s] of AQT) {
    if (!(t.f >= e && t.d >= s)) break;
    a++;
  }
  return a;
}
function aqNeed(e, t) {
  if (!e || UNL() || e.lk) return 0;
  if ("f" === t) {
    if (["hippo", "discus", "raie", "lune", "tortue", "hockey", "gardien"].includes(e.id)) return 2;
    if ("royal" === e.id) return 3;
    if ("meduse" === e.id) return Date.now() < new Date(2026, 10, 16).getTime() ? 0 : 3;
  }
  return 0;
}
const aqTL = (e, t, a) => {
  const s = aqNeed(e, t);
  return s && aqTier(a || aqRead()) < s ? s : 0;
};
const aqHid = (e, t, a) =>
  "d" === t && (("winter" === e.g && !aqWinter()) || e.ch) && void 0 === (a || aqRead()).d[e.id];
function aqRewards(e) {
  const t = aqSpent(e),
    a = e.lr || {};
  let s = 0,
    n = !1;
  if (
    ([
      [0, 0, t.f],
      [0, 1, t.d],
      [1, 0, t.f],
      [1, 1, t.d],
    ].forEach(([e, t, o]) => {
      const i = e ? AQT[e - 1][t] : 0,
        r = AQT[e][t];
      [1, 2].forEach((l) => {
        const c = e + "" + t + l;
        !a[c] && o >= i + ((r - i) * l) / 3 && ((a[c] = 1), (n = !0), UNL() || (s += AQR3[l - 1]));
      });
    }),
    n)
  ) {
    const t = e.lt || 1,
      n = aqTier(e);
    if (((e.lr = a), (e.lt = n), aqSave(e), s)) {
      ((fl += s), st.set("fl", fl));
      const e = document.querySelector(".aqhd .chip");
      e && (e.textContent = "🫧 " + FLX());
    }
    if (((mt = "m-aq"), n > t))
      msg(
        "✦ Aquarium " +
          n +
          " débloqué ! De nouveaux poissons t’attendent à la boutique." +
          (s ? " +" + s + " 🫧" : ""),
      );
    else if (s) {
      const e = "✦ Palier atteint : +" + s + " 🫧";
      (msg(e),
        setTimeout(() => {
          const t = $("#m-aq");
          t && t.textContent === e && (t.textContent = "");
        }, 5e3));
    }
    (s || n > t) && (sfx(880, 0.3), setTimeout(() => sfx(1175, 0.4), 140));
  }
}
function aqLvHTML(e) {
  const t = aqTier(e),
    a = aqSpent(e),
    s = t > AQT.length,
    n = AQT[Math.min(t, AQT.length) - 1],
    o = t > 1 ? AQT[Math.min(t, AQT.length) - 2] : [0, 0],
    i = (e, t, a) => {
      const i = o[a],
        r = n[a],
        l = s ? 1 : Math.max(0, Math.min(1, (t - i) / (r - i)));
      return `<div class="aqlb"><i>${e}</i><div class="aqlt"><span style="width:${(100 * l).toFixed(1)}%"></span><em style="left:33.3%" class="${l >= 1 / 3 ? "ok" : ""}"></em><em style="left:66.6%" class="${l >= 2 / 3 ? "ok" : ""}"></em></div><small>${s ? "max" : t + " 🫧"}</small></div>`;
    };
  return `<b class="aqln">Aquarium ${Math.min(t, 3)}${s ? " · niveau max" : ""}</b>${i("🐟", a.f, 0)}${i("🪸", a.d, 1)}`;
}
const aqStatus0 = aqStatus;
const AQPD = 144e6;
const AQPW = 0;
const AQPT = [
  { id: "ulve", n: "Laitue de mer", p: 60, d: 5, h: 130, w: 19, x: 0, s: "Feuilles tendres et froissées" },
  {
    id: "caulerpa",
    n: "Raisin de mer",
    p: 90,
    d: 7,
    h: 150,
    w: 20,
    x: 12,
    s: "Petites perles vertes en grappes",
  },
  { id: "halimeda", n: "Halimède", p: 130, d: 9, h: 140, w: 19, x: 24, s: "Disques clairs empilés" },
  { id: "zostere", n: "Zostère marine", p: 170, d: 11, h: 190, w: 23, x: 34, s: "Herbier de longues lames" },
  { id: "dulse", n: "Dulse", p: 220, d: 14, h: 180, w: 22, x: 47, s: "Algue rouge aux lobes souples" },
  { id: "sargasse", n: "Sargasse", p: 280, d: 16, h: 220, w: 23, x: 58, s: "Rameaux et flotteurs dorés" },
  { id: "posidonie", n: "Posidonie", p: 350, d: 18, h: 250, w: 24, x: 70, s: "Grandes lames sombres" },
  { id: "laminaire", n: "Laminaire", p: 450, d: 21, h: 300, w: 26, x: 78, s: "Forêt de kelp ondulant" },
];
const aqpO = (e) => (window.AQG2 ? e.pl2 || (e.pl2 = {}) : e.pl || (e.pl = {}));
const aqpR = (e, t) => {
  const a = 43758.5453 * Math.sin(127.1 * e + 311.7 * t);
  return a - Math.floor(a);
};
const aqpS = (e) => {
  let t = 0;
  for (const a of e) t = (31 * t + a.charCodeAt(0)) >>> 0;
  return t;
};
const aqpG = (e, t, a = Date.now()) => {
  if (typeof UNL === "function" && UNL()) return 1;
  if (a <= e.t) return e.g;
  const s = 1 / (864e5 * t.d),
    n = Math.max(0, Math.min(a, e.f + AQPD) - e.t),
    o = a - e.t - n;
  return Math.min(1, e.g + 2 * n * s + o * s);
};
const aqpHg = (e, t = Date.now()) => t > e.f + AQPD;
const aqpCan = (e, t = Date.now()) => e.f + AQPD - t <= AQPW;
const aqpL = (e) => 0.1 + 0.9 * Math.pow(e, 0.85);
const aqpPt = (e, t, a, s, n, o, i) => [
  (1 - i) * (1 - i) * e + 2 * (1 - i) * i * a + i * i * n,
  (1 - i) * (1 - i) * t + 2 * (1 - i) * i * s + i * i * o,
];
const aqpF = (e) => e.toFixed(1);
function aqpRib(e, t, a, s, n, o, i) {
  const r = [],
    l = [];
  for (let c = 0; c <= 16; c++) {
    const d = c / 16,
      f = aqpPt(e, t, a, s, n, o, d),
      u = aqpPt(e, t, a, s, n, o, Math.min(1, d + 0.02)),
      h = aqpPt(e, t, a, s, n, o, Math.max(0, d - 0.02));
    let p = u[0] - h[0],
      m = u[1] - h[1];
    const b = Math.hypot(p, m) || 1;
    ((p /= b), (m /= b));
    const g = -m,
      E = p,
      y = Math.max(
        0.4,
        ((i.a || 1) + ((i.b || 1) - (i.a || 1)) * d + (i.g || 0) * Math.pow(Math.sin(Math.PI * d), 0.7)) *
          (1 + (i.r || 0) * Math.sin(d * (i.f || 10))),
      ),
      v = (i.v || 0) * Math.sin(d * (i.f || 10) * 0.6) * d;
    (r.push([f[0] + g * (y + v), f[1] + E * (y + v)]), l.push([f[0] - g * (y - v), f[1] - E * (y - v)]));
  }
  const c = (e) => aqpF(e[0]) + " " + aqpF(e[1]);
  return "M" + r.map(c).join("L") + "L" + l.reverse().map(c).join("L") + "Z";
}
const AQPD_ = {
  ulve: (e, t, a) => {
    const s = aqpL(e),
      n = 2 + Math.round(4 * e),
      o = t - 3;
    for (let e = 0; e < n; e++) {
      const i = e / (n - 1),
        r = 24 + 52 * i + 8 * (aqpR(e, 1) - 0.5),
        l = (0.5 + 0.35 * aqpR(e, 2)) * t * s * (1 - 0.35 * Math.abs(i - 0.5) * 2),
        c = 26 * (i - 0.5) + 10 * (aqpR(e, 3) - 0.5);
      a(
        e,
        `<path d="${aqpRib(r, o, r + 0.2 * c, o - 0.55 * l, r + c, o - l, { a: 1.5, b: 0.8, g: 9 + 3 * aqpR(e, 4), r: 0.14, f: 16, v: 2 })}" fill="${e % 2 ? "#6cc46f" : "#58b862"}" stroke="#3d8f4b" stroke-width=".7" stroke-linejoin="round"/><path d="M${aqpF(r)} ${o}Q${aqpF(r + 0.2 * c)} ${aqpF(o - 0.55 * l)} ${aqpF(r + 0.95 * c)} ${aqpF(o - 0.92 * l)}" stroke="#a6e3a2" stroke-width=".8" fill="none" opacity=".6"/>`,
      );
    }
  },
  caulerpa: (e, t, a) => {
    const s = aqpL(e),
      n = 2 + Math.round(3 * e),
      o = t - 3;
    a(
      0,
      `<path d="M8 ${o}Q50 ${o - 5} 92 ${o}" stroke="#2f7d3c" stroke-width="2.4" fill="none" stroke-linecap="round" opacity="${aqpF(0.4 + 0.6 * s)}"/>`,
    );
    for (let e = 0; e < n; e++) {
      const i = 18 + (64 * e) / (n - 1) + 6 * (aqpR(e, 1) - 0.5),
        r = (0.55 + 0.4 * aqpR(e, 2)) * t * s,
        l = 18 * (aqpR(e, 3) - 0.5),
        c = Math.max(2, Math.round((11 * s * r) / (0.7 * t)));
      let d = `<path d="M${aqpF(i)} ${o}Q${aqpF(i + l)} ${aqpF(o - 0.5 * r)} ${aqpF(i + 0.6 * l)} ${aqpF(o - r)}" stroke="#2f7d3c" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
      for (let e = 1; e <= c; e++) {
        const t = e / (c + 1),
          a = aqpPt(i, o, i + l, o - 0.5 * r, i + 0.6 * l, o - r, t),
          s = e % 2 ? -1 : 1,
          n = 3.6 - 1.3 * t,
          f = a[0] + 6 * s,
          u = a[1] - 2.4;
        d += `<path d="M${aqpF(a[0])} ${aqpF(a[1])}l${4 * s} -2" stroke="#2f7d3c" stroke-width="1"/><circle cx="${aqpF(f)}" cy="${aqpF(u)}" r="${aqpF(n)}" fill="#6fcb72" stroke="#3f9a4e" stroke-width=".6"/><circle cx="${aqpF(f - 0.9)}" cy="${aqpF(u - 0.9)}" r="${aqpF(0.35 * n)}" fill="#d4f5cf" opacity=".7"/>`;
      }
      const f = aqpPt(i, o, i + l, o - 0.5 * r, i + 0.6 * l, o - r, 1);
      ((d += `<circle cx="${aqpF(f[0])}" cy="${aqpF(f[1] - 2)}" r="2.6" fill="#7fd882" stroke="#3f9a4e" stroke-width=".6"/>`),
        a(e, d));
    }
  },
  halimeda: (e, t, a) => {
    const s = aqpL(e),
      n = 2 + Math.round(2 * e),
      o = t - 3;
    for (let e = 0; e < n; e++) {
      const i = 26 + (48 * e) / (n - 1),
        r = (0.5 + 0.4 * aqpR(e, 2)) * t * s,
        l = 26 * (aqpR(e, 3) - 0.5),
        c = Math.max(3, Math.round(r / 7));
      let d = "";
      for (let e = 0; e < c; e++) {
        const t = (e + 0.5) / c,
          a = aqpPt(i, o, i + 0.4 * l, o - 0.55 * r, i + l, o - r, t),
          s = 2 * (1 - t) * (0.4 * l) + 2 * t * (0.6 * l),
          n = 2 * (1 - t) * (0.55 * -r) + 2 * t * (0.45 * -r),
          f = 7.5 - 4.5 * t;
        d += `<ellipse cx="${aqpF(a[0])}" cy="${aqpF(a[1])}" rx="${aqpF(f)}" ry="3.2" transform="rotate(${aqpF((180 * Math.atan2(n, s)) / Math.PI + 90)} ${aqpF(a[0])} ${aqpF(a[1])})" fill="${e % 2 ? "#bfe5a8" : "#a9d995"}" stroke="#7fb878" stroke-width=".6"/>`;
      }
      a(e, d);
    }
  },
  zostere: (e, t, a) => {
    const s = aqpL(e),
      n = 4 + Math.round(8 * e),
      o = t - 3;
    a(
      0,
      `<path d="M12 ${o}L88 ${o}" stroke="#8a7a52" stroke-width="2" stroke-linecap="round" opacity="${aqpF(0.3 + 0.5 * s)}"/>`,
    );
    for (let e = 0; e < n; e++) {
      const i = e / (n - 1),
        r = 16 + 68 * i + 6 * (aqpR(e, 1) - 0.5),
        l = (0.55 + 0.4 * aqpR(e, 2)) * t * s,
        c = 22 * (i - 0.5) + 14 * (aqpR(e, 3) - 0.5);
      a(
        e,
        `<path d="M${aqpF(r)} ${o}Q${aqpF(r + 0.3 * c + 10 * (aqpR(e, 5) - 0.5))} ${aqpF(o - 0.55 * l)} ${aqpF(r + c)} ${aqpF(o - l)}" stroke="${e % 3 ? "#4fb36b" : "#7bd88f"}" stroke-width="${aqpF(2.2 + 1.2 * aqpR(e, 4))}" fill="none" stroke-linecap="round"/>`,
      );
    }
  },
  dulse: (e, t, a) => {
    const s = aqpL(e),
      n = 2 + Math.round(2 * e),
      o = t - 3;
    for (let e = 0; e < n; e++) {
      const i = e / (n - 1),
        r = 28 + 44 * i,
        l = (0.5 + 0.35 * aqpR(e, 2)) * t * s,
        c = 40 * (i - 0.5);
      let d = `<path d="${aqpRib(r, o, r + 0.3 * c, o - 0.5 * l, r + c, o - l, { a: 1.4, b: 2, g: 12, r: 0.1, f: 12 })}" fill="#a83a58" stroke="#7a2640" stroke-width=".7"/><path d="M${aqpF(r)} ${o}Q${aqpF(r + 0.3 * c)} ${aqpF(o - 0.5 * l)} ${aqpF(r + 0.95 * c)} ${aqpF(o - 0.95 * l)}" stroke="#d98aa0" stroke-width=".8" fill="none" opacity=".6"/>`;
      if (s > 0.4) {
        const t = aqpPt(r, o, r + 0.3 * c, o - 0.5 * l, r + c, o - l, 0.55),
          a = e % 2 ? -1 : 1;
        d += `<path d="${aqpRib(t[0], t[1], t[0] + 0.3 * c + 12 * a, t[1] - 0.25 * l, t[0] + 22 * a + 0.3 * c, t[1] - 0.45 * l * s, { a: 1, b: 1.6, g: 7, r: 0.1, f: 10 })}" fill="#c4566f" stroke="#7a2640" stroke-width=".6"/>`;
      }
      a(e, d);
    }
  },
  sargasse: (e, t, a) => {
    const s = aqpL(e),
      n = t - 3,
      o = 0.92 * t * s,
      i = Math.max(2, Math.round(3 + 8 * e));
    a(
      0,
      `<path d="M50 ${n}Q64 ${aqpF(n - 0.5 * o)} 44 ${aqpF(n - o)}" stroke="#7d6a25" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    );
    for (let e = 0; e < i; e++) {
      const t = 0.22 + (0.78 * (e + 0.5)) / i,
        r = aqpPt(50, n, 64, n - 0.5 * o, 44, n - o, t),
        l = e % 2 ? -1 : 1,
        c = (10 + 10 * aqpR(e, 1)) * (1.1 - 0.5 * t) * Math.min(1, 1.4 * s),
        d = r[0] + l * c,
        f = r[1] - 0.5 * c,
        u = r[0] + l * c * 0.55,
        h = r[1] - 0.1 * c + 2.5;
      a(
        e + 1,
        `<path d="M${aqpF(r[0])} ${aqpF(r[1])}Q${aqpF(r[0] + l * c * 0.5)} ${aqpF(r[1] - 0.1 * c)} ${aqpF(d)} ${aqpF(f)}" stroke="#7d6a25" stroke-width="1.3" fill="none"/><path d="${aqpRib(d, f, d + 5 * l, f - 6, d + 8 * l, f - 14 * Math.min(1, 1.3 * s), { a: 0.8, b: 0.4, g: 3.2, r: 0.1, f: 9 })}" fill="#9a8a30" stroke="#6f5f1c" stroke-width=".5"/><circle cx="${aqpF(u)}" cy="${aqpF(h)}" r="2.7" fill="#d2a843" stroke="#9c7a24" stroke-width=".6"/><circle cx="${aqpF(u - 0.8)}" cy="${aqpF(h - 0.9)}" r=".8" fill="#f6e8b0"/>`,
      );
    }
  },
  posidonie: (e, t, a) => {
    const s = aqpL(e),
      n = 4 + Math.round(6 * e),
      o = t - 3;
    a(
      0,
      `<path d="M30 ${o}Q50 ${o - 5} 70 ${o}" stroke="#6b5a3a" stroke-width="5" stroke-linecap="round" fill="none"/>`,
    );
    for (let e = 0; e < n; e++) {
      const i = e / (n - 1),
        r = 24 + 52 * i + 6 * (aqpR(e, 1) - 0.5),
        l = (0.55 + 0.4 * aqpR(e, 2)) * t * s,
        c = 30 * (i - 0.5) + 10 * (aqpR(e, 3) - 0.5);
      a(
        e,
        `<path d="${aqpRib(r, o, r + 0.2 * c, o - 0.6 * l, r + c, o - l, { a: 2.3, b: 1.8, g: 0.8 })}" fill="${e % 2 ? "#2f8a55" : "#3f9f62"}" stroke="#256c43" stroke-width=".5"/>`,
      );
    }
  },
  laminaire: (e, t, a) => {
    const s = aqpL(e),
      n = t - 3,
      o = 1 + Math.round(2 * e);
    let i = "";
    for (let e = 0; e < 7; e++)
      i += `<path d="M${aqpF(34 + 5.4 * e)} ${n}q${aqpF(1.6 * (e - 3))} -7 ${aqpF(2.4 * (e - 3))} -12" stroke="#7a5a22" stroke-width="2" fill="none" stroke-linecap="round"/>`;
    a(0, i);
    for (let e = 0; e < o; e++) {
      const i = o > 1 ? 38 + (24 * e) / (o - 1) : 50,
        r = t * (0.3 + 0.06 * aqpR(e, 2)) * s,
        l = n - 12 - r,
        c = 18 * (e - (o - 1) / 2) + 8 * (aqpR(e, 3) - 0.5),
        d = t * (0.45 + 0.1 * aqpR(e, 4)) * s,
        f = e % 2 ? -1 : 1;
      a(
        e + 1,
        `<path d="M${aqpF(i)} ${n - 8}Q${aqpF(i + 0.3 * c)} ${aqpF(n - 12 - 0.5 * r)} ${aqpF(i + c)} ${aqpF(l)}" stroke="#8a6a2a" stroke-width="${aqpF(3.4 * (0.5 + 0.5 * s))}" fill="none" stroke-linecap="round"/><path d="${aqpRib(i + c, l, i + c + 8 * f, l - 0.5 * d, i + c + 4 * f, l - d, { a: 2, b: 1, g: 10, r: 0.18, f: 15, v: 3 })}" fill="#b0842e" stroke="#7d5c1c" stroke-width=".6" stroke-linejoin="round"/><path d="M${aqpF(i + c)} ${aqpF(l)}Q${aqpF(i + c + 8 * f)} ${aqpF(l - 0.5 * d)} ${aqpF(i + c + 4 * f)} ${aqpF(l - 0.95 * d)}" stroke="#dcb866" stroke-width=".8" fill="none" opacity=".6"/>`,
      );
    }
  },
};
function aqpSVG(e, t) {
  const a = ["", ""];
  return (
    AQPD_[e.id](t, e.h, (e, t) => {
      a[e % 2] += t;
    }),
    `<g class="s1">${a[0]}</g><g class="s2">${a[1]}</g>`
  );
}
function aqPlHTML(e, t) {
  return AQPT.filter((t) => aqpO(e)[t.id])
    .map((a) => {
      const s = aqpO(e)[a.id],
        n = aqpG(s, a, t),
        o = aqpHg(s, t);
      return `<svg class="pl${o ? " hg" : ""}" data-id="${a.id}" data-q="${Math.round(80 * n) + (o ? "h" : "")}" viewBox="0 0 100 ${a.h}" style="left:${a.x}%;width:${a.w}%;aspect-ratio:100/${a.h};--sd:${(5 + (aqpS(a.id) % 4)).toFixed(1)}s" role="img" aria-label="${a.n}"><g class="pg">${aqpSVG(a, n)}</g></svg>`;
    })
    .join("");
}
const aqpSig = (e, t = Date.now()) =>
  AQPT.map((a) => {
    const s = aqpO(e)[a.id];
    return s ? Math.floor(100 * aqpG(s, a, t)) + (aqpHg(s, t) ? "h" : "") + (aqpCan(s, t) ? "c" : "") : "-";
  }).join(",");
const aqpGain = (e) => Math.round(0.1 * e.p) / 4;
const aqpPv = (e, t, a) => {
  if (window.aqpPv2) return aqpPv2(e, t, a);
  const s = Math.min(e.h, 170);
  return `<svg viewBox="0 ${e.h - s} 100 ${s}" class="plv${a ? " hg" : ""}" aria-hidden="true">${aqpSVG(e, t)}</svg>`;
};
function aqPlInv(e) {
  const t = Date.now(),
    a = aqpO(e),
    s = AQPT.filter((e) => a[e.id]);
  if (!s.length) return "";
  const n = s.filter((e) => aqpCan(a[e.id], t)).length;
  return (
    '<h3 class="aqh">Plantes</h3><p class="aqc">Nourris-les toutes les 40 h : chaque repas les fait pousser 2× plus vite pendant 40 h. Une fois adultes, elles donnent des 🫧 à chaque repas.</p>' +
    (n > 1 ? `<button class="btn aqpa" data-a="aqpa">Nourrir toutes (${n})</button>` : "") +
    s
      .map((e) => {
        const s = a[e.id],
          n = aqpG(s, e, t),
          o = aqpHg(s, t),
          i = aqpCan(s, t),
          r = Math.floor(100 * n),
          l = n >= 1,
          c = s.f + AQPD - t,
          d = (1 - n) * e.d * 864e5 * (o ? 1 : 0.5),
          f =
            (l
              ? "Adulte · +" + frN(aqpGain(e)) + " 🫧 par repas"
              : (o ? "À nourrir · pousse normalement" : "Nourrie · pousse 2× plus vite") +
                " · " +
                r +
                " % · ~" +
                aqFmtD(d)) + (l && o ? " · a faim" : ""),
          u = i
            ? `<button class="sb buy" data-a="aqpf" data-v="${e.id}">Nourrir</button>`
            : `<button class="sb" disabled>Dans ${aqFmtD(c - AQPW)}</button>`;
        return `<div class="ai${o ? " plh" : ""}"><div class="ap sq plp">${aqpPv(e, n, o)}</div><div class="atx"><b>${e.n}</b><small>${f}</small>${l ? "" : `<div class="aqm-bar"><i style="width:${r}%"></i></div>`}</div>${u}</div>`;
      })
      .join("")
  );
}
function aqPl() {
  const e = $("#aql");
  if (!e) return;
  const t = aqRead(),
    a = Date.now(),
    s = aqpO(t),
    n = AQPT.filter((e) => !s[e.id]);
  ((e.dataset.ps = aqpSig(t, a)),
    (e.innerHTML =
      '<p class="aqc">Rajoute de la vie à ton aquarium !</p>' +
      (n.length
        ? '<div class="aqcar">' +
          n
            .map(
              (e) =>
                `<div class="ai"><div class="ap sq plp">${aqpPv(e, 1, 0)}</div><div class="atx"><b>${e.n}</b><small>${e.s} · adulte en ${e.d} j · +${frN(aqpGain(e))} 🫧 par repas</small></div><button class="sb buy ${!UNL() && fl < e.p ? "low" : ""}" data-a="aqpb" data-v="${e.id}">Acheter · ${e.p} 🫧</button></div>`,
            )
            .join("") +
          "</div>"
        : '<p class="aqc">Tu as toutes les plantes. Retrouve-les dans l’inventaire.</p>')));
}
function aqPlBuy(e) {
  const t = AQPT.find((t) => t.id === e),
    a = aqRead();
  if (((mt = "m-aq"), !t || aqpO(a)[e])) return;
  if (!spend(t.p)) return;
  const s = Date.now();
  ((aqpO(a)[e] = { g: 0.03, t: s, f: s }), aqSave(a));
  try {
    const L = st.get("aq:pbl", []),
      K = "function" == typeof AK ? AK() : "aq";
    (L.push({ i: e, k: K, g: window.AQG2 ? 1 : 0, p: t.p }), st.set("aq:pbl", L.slice(-60)));
  } catch (x) {}
  (msg(t.n + " plantée ! Nourris-la toutes les 40 h pour qu’elle pousse 2× plus vite."),
    sfx(660, 0.18),
    aquaRefresh());
}
function aqPlRefund() {
  try {
    const L = st.get("aq:pbl", []);
    if (!Array.isArray(L) || !L.length) return;
    let n = 0,
      g = 0;
    const R = L.filter((x) => {
      const A = st.get(x.k || "aq", null);
      if (!A || !A.f) return !0;
      const O = x.g ? A.pl2 : A.pl;
      if (O && O[x.i]) return !0;
      (n++, (g += +x.p || 0));
      return !1;
    });
    if (n) {
      ((fl += g), st.set("fl", fl), st.set("aq:pbl", R));
      try {
        chip();
      } catch (e) {}
      try {
        msg(
          "🌿 " +
            n +
            " plante" +
            (n > 1 ? "s" : "") +
            " disparue" +
            (n > 1 ? "s" : "") +
            " remboursée" +
            (n > 1 ? "s" : "") +
            " : +" +
            g +
            " 🫧",
        );
      } catch (e) {}
    }
  } catch (e) {}
}
function aqPlFeed(e) {
  const t = aqRead(),
    a = Date.now();
  let s = 0;
  mt = "m-aq";
  let n = Math.min(999, +t.r || 0);
  if (
    (AQPT.forEach((o) => {
      const i = aqpO(t)[o.id];
      if (!i || (e && e !== o.id) || !aqpCan(i, a)) return;
      const r = aqpG(i, o, a);
      (r >= 1 && (n += 1e3 * aqpGain(o)), (i.g = r), (i.t = a), (i.f = a), s++);
    }),
    !s)
  )
    return;
  const o = Math.floor(n / 1e3);
  ((n -= 1e3 * o),
    n ? (t.r = n) : delete t.r,
    o && ((fl += o), st.set("fl", fl), chip()),
    aqSave(t),
    sfx(600, 0.15),
    msg(
      (s > 1 ? "Tes plantes sont nourries." : "Plante nourrie : elle reprend son rythme.") +
        (o ? " +" + o + " 🫧" : ""),
    ),
    aquaRefresh(),
    document.querySelectorAll(".tank .pl").forEach((t) => {
      (e && t.dataset.id !== e) || (t.classList.add("fd"), setTimeout(() => t.classList.remove("fd"), 1600));
    }));
}
function aqPlTick() {
  const e = aqRead(),
    t = Date.now();
  let a = 0;
  if (
    (document.querySelectorAll(".tank .pl").forEach((a) => {
      const s = AQPT.find((e) => e.id === a.dataset.id),
        n = s && aqpO(e)[s.id];
      if (!n) return;
      const o = aqpG(n, s, t),
        i = aqpHg(n, t),
        r = Math.round(80 * o) + (i ? "h" : "");
      if ((a.classList.toggle("hg", i), a.dataset.q !== r)) {
        a.dataset.q = r;
        const e = a.querySelector(".pg");
        e && (e.innerHTML = aqpSVG(s, o));
      }
    }),
    AQPT.forEach((s) => {
      const n = aqpO(e)[s.id];
      n && aqpHg(n, t) && a++;
    }),
    a)
  ) {
    const e = $("#nav .ndot");
    e && (e.hidden = !1);
  }
  const s = $("#aql");
  ("plant" === aqTab || "inv" === aqTab) && s && s.dataset.ps && s.dataset.ps !== aqpSig(e, t) && aqPanel();
}
const aqStatus1 = (aqStatus = function () {
  aqStatus0();
  const e = aqRead();
  aqRewards(e);
  try {
    const t = e.f.meduse,
      a = t && t.on && t.gl && Date.now() - t.gt < 18e4 && Date.now() - t.gt >= 0 ? Math.min(3, t.gl) : 0;
    document.querySelectorAll(".tank .fx[data-id=meduse]").forEach((e) => {
      (e.classList.toggle("glow", a > 0), a ? (e.dataset.gl = a) : delete e.dataset.gl);
    });
  } catch (e) {}
  const t = $(".aqst");
  if (!t) return;
  t.classList.toggle("open", !!window.AQLV);
  {
    const e = $(".aqh1");
    e &&
      (e.classList.toggle("on", !!window.AQLV),
      e.setAttribute("aria-expanded", window.AQLV ? "true" : "false"));
  }
  let a = t.querySelector(".aqlv");
  a || ((a = document.createElement("div")), (a.className = "aqlv"), t.appendChild(a));
  const s = aqLvHTML(e);
  a.dataset.h !== s && ((a.innerHTML = s), (a.dataset.h = s));
});
aqStatus = function () {
  aqStatus1();
  try {
    aqPlTick();
  } catch (e) {}
};
const aqBuy0 = aqBuy;
((aqBuy = function (e) {
  if (/^f:/.test(e) && (FISH.find((t) => "f:" + t.id === e) || {}).pe && !UNL()) return;
  const [t, a] = e.split(":"),
    s = aqRead(),
    n = ("f" === t ? FISH : "d" === t ? DECO : WATER).find((e) => e.id === a);
  if (((mt = "m-aq"), n && aqHid(n, t, s))) return;
  if ("f" === t && "gardien" === a && !s.f.hockey) return msg("Se débloque après ???.");
  const o = n && aqTL(n, t, s);
  if (o) return msg("Se débloque avec l’aquarium " + o + ".");
  aqBuy0(e);
}),
  (window.aqMedGl = (e) => {
    try {
      const t = aqRead(),
        a = t.f.meduse;
      if (!a) return;
      ((a.gl = Math.min(3, e)), (a.gt = Date.now()), aqSave(t), aqStatus());
    } catch (e) {}
  }),
  (window.aqMedEat = (e) => {
    try {
      const t = e.querySelector(".fi svg") || e.querySelector("svg");
      if (!t) return;
      const a = t.querySelector("g");
      if (!a) return;
      const s = a.querySelectorAll("path"),
        n = s[3] || s[s.length - 1];
      if (!n || t._mt) return;
      t._mt = 1;
      const o = "http://www.w3.org/2000/svg",
        i = document.createElementNS(o, "circle"),
        r = document.createElementNS(o, "path");
      (i.setAttribute("r", "3"),
        i.setAttribute("fill", "#f6c46a"),
        i.setAttribute("stroke", "#fff3cf"),
        i.setAttribute("stroke-width", "1"),
        r.setAttribute("fill", "none"),
        r.setAttribute("stroke", n.getAttribute("stroke")),
        r.setAttribute("stroke-width", "3"),
        r.setAttribute("stroke-linecap", "round"),
        (n.style.opacity = "0"),
        t.insertBefore(r, a.nextSibling),
        t.insertBefore(i, r.nextSibling),
        t.classList.remove("mgr"),
        t.getBoundingClientRect(),
        t.classList.add("mgr"));
      const l = [52, 24],
        c = [8, 27],
        d = [53, 25.5],
        f = 1500,
        u = performance.now(),
        h = (e) => (e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2),
        p = (e, t, a) => e + (t - e) * a,
        m = (e, t, a) => {
          const s = e - l[0],
            n = t - l[1],
            o = Math.hypot(s, n) || 1,
            i = -n / o,
            r = s / o;
          return `M${l[0]} ${l[1]}C${(l[0] + 0.33 * s + i * a).toFixed(1)} ${(l[1] + 0.33 * n + r * a).toFixed(1)} ${(l[0] + 0.66 * s - i * a).toFixed(1)} ${(l[1] + 0.66 * n - r * a).toFixed(1)} ${e.toFixed(1)} ${t.toFixed(1)}`;
        },
        b = (e) => {
          const a = Math.min(1, (e - u) / f);
          let s,
            o,
            l,
            g,
            E,
            y = 3;
          if (a < 0.2) {
            const e = h(a / 0.2);
            ((s = c[0]), (o = c[1]), (l = p(6, s, e)), (g = p(28, o, e)), (E = p(6, -3, e)));
          } else if (a < 0.72) {
            const e = h((a - 0.2) / 0.52);
            ((s = p(c[0], d[0] - 6, e)),
              (o = p(c[1], d[1] + 9, e) + 5 * Math.sin(e * Math.PI)),
              (l = s),
              (g = o),
              (E = p(-3, -9, e)));
          } else if (a < 0.84) {
            const e = h((a - 0.72) / 0.12);
            ((s = p(d[0] - 6, d[0], e)),
              (o = p(d[1] + 9, d[1], e)),
              (l = s),
              (g = o),
              (E = -9),
              (y = 3 * (1 - 0.5 * e)));
          } else {
            const e = h((a - 0.84) / 0.16);
            ((s = d[0]),
              (o = d[1]),
              (y = 1.5 * (1 - e)),
              (l = p(d[0] - 6, 6, e)),
              (g = p(d[1] + 9, 28, e)),
              (E = p(-9, 6, e)));
          }
          (r.setAttribute("d", m(l, g, E)),
            i.setAttribute("cx", s.toFixed(1)),
            i.setAttribute("cy", o.toFixed(1)),
            i.setAttribute("r", Math.max(0, y).toFixed(2)),
            a < 1
              ? requestAnimationFrame(b)
              : (i.remove(), r.remove(), (n.style.opacity = ""), t.classList.remove("mgr"), (t._mt = 0)));
        };
      requestAnimationFrame(b);
    } catch (e) {}
  }));
const AQMO = {
  zv_sapin: [75, 26.5],
  zv_rouge: [76, 27],
  zv_neon: [79, 25.5],
  zv_danio: [80, 25.5],
  zv_cardinal: [79, 25.6],
  zv_platy: [75, 27.4],
  zv_molly: [77, 27.4],
  zv_betta: [78, 25.6],
  zv_gourami: [73, 27.6],
  zv_globe: [67, 29.4],
  zv_ange: [72, 25.6],
  zv_clown: [75, 27.6],
  zv_hippo: [77, 9],
  zv_discus: [70, 26.4],
  zv_manta: [83, 25.4],
  zv_lune: [72, 28.6],
  zv_tortue: [83, 29],
  zv_hockey: [73, 25.5],
  zv_etoile: [80, 25.5],
  zv_etoile2d: [80, 25.5],
  zv_gardien: [73, 25.5],
  zv_meduse: [8, 27],
  zv_royal: [78, 25.6],
  zv_noel: [74, 25.6],
  z_neon: [77, 26],
  z_danio: [79, 25.5],
  z_cardinal: [78, 25.5],
  z_platy: [74, 27],
  z_molly: [77, 27],
  z_betta: [77, 25],
  z_gourami: [72, 27],
  z_globe: [66, 29],
  z_ange: [70, 25],
  z_clown: [74, 27],
  z_hippo: [76, 9],
  z_discus: [69, 26],
  z_manta: [83, 25],
  z_lune: [70, 28],
  z_tortue: [83, 29],
  z_hockey: [67, 25],
  z_gardien: [67, 25],
  z_meduse: [8, 27],
  z_royal: [76, 24],
  z_noel: [71, 26],
  rouge2: [73, 30],
  lumignon: [61, 30],
  std: [67, 25],
  tall: [59, 27],
  round: [65, 25],
  long: [71, 24],
  neon: [76, 25],
  danio: [78, 25],
  cardinal: [77, 25],
  betta: [76, 26],
  gourami: [70, 26],
  globe: [64, 25],
  hippo: [72, 8],
  manta: [83, 25],
  tortue: [83, 29],
  meduse: [8, 27],
  veil: [71, 24],
};
((window.aqMouth = (e, t) => {
  try {
    const a = FISH.find((t) => t.id === e.dataset.id),
      s = AQMO[a && a.sh] || AQMO.std,
      n = (e.querySelector(".fi svg") || e.querySelector("svg")).getScreenCTM();
    if (!n) return null;
    const o = new DOMPoint(s[0], s[1]).matrixTransform(n),
      i = t.getBoundingClientRect();
    return { x: o.x - i.left - t.clientLeft, y: o.y - i.top - t.clientTop };
  } catch (e) {
    return null;
  }
}),
  (act.aqlvt = () => {
    ((window.AQLV = !window.AQLV), aqStatus());
  }),
  (window.aqAnc = (e, t, a) => {
    try {
      const s = (e.querySelector(".fi svg") || e.querySelector("svg")).getScreenCTM();
      if (!s) return null;
      const n = new DOMPoint(a[0], a[1]).matrixTransform(s),
        o = t.getBoundingClientRect();
      return { x: n.x - o.left - t.clientLeft, y: n.y - o.top - t.clientTop };
    } catch (e) {
      return null;
    }
  }),
  (window.aqRink = function (e, t) {
    const a = $("#tank");
    if (!a) return !1;
    const s = e && a.querySelector(".fx[data-id=hockey]"),
      n = t && a.querySelector(".fx[data-id=gardien]");
    if (((t = !!n), !(e = !!s) && !t)) return !1;
    AQS && AQS.t !== a && aqStop();
    const o = AQS || (AQS = { t: a, P: [], F: {}, raf: 0, last: 0 });
    if ((e && o.F.hockey && "done" !== o.F.hockey.mode) || (t && o.F.gardien && "done" !== o.F.gardien.mode))
      return !0;
    const i = a.clientWidth,
      r = a.clientHeight,
      l = a.getBoundingClientRect(),
      c = (e, t) => {
        const a = e.getBoundingClientRect();
        return (o.F[t] = {
          el: e,
          fr: e.querySelector(".fr"),
          fi: e.querySelector(".fi"),
          px: a.left - l.left,
          py: a.top - l.top,
          fw: a.width,
          fh: a.height,
          mode: "hk",
          tg: null,
          eaten: 99,
          max: 0,
          dir: 1,
          face: 0,
          rt: 0,
          et: 0,
          lab: !0,
          k: 0,
          vmax: 240,
        });
      },
      d = e ? c(s, "hockey") : null,
      f = t ? c(n, "gardien") : null,
      u = d || f,
      h = Math.round(0.8 * r - 0.09 * u.fh - 2 - 0.035 * r),
      p = e ? (d.px + d.fw / 2 < i / 2 ? 1 : -1) : f.px + f.fw / 2 < i / 2 ? -1 : 1,
      m = Math.round(Math.min(78, Math.max(54, 0.16 * i))),
      b = Math.round(0.7 * m),
      g = p > 0 ? i - m - 24 : 24;
    (d && ((d.dir = p), s.classList.add("hkon"), (s.style.animationPlayState = "paused")),
      f && ((f.dir = -p), n.classList.add("gkon"), (n.style.animationPlayState = "paused")));
    const E = document.createElement("div");
    ((E.className = "hkg" + (p < 0 ? " l" : "")),
      (E.style.cssText = `width:${m}px;height:${b}px;left:${g}px;top:${h - b + 4}px`),
      (E.innerHTML =
        '<svg viewBox="0 0 70 50" preserveAspectRatio="none" aria-hidden="true"><defs><pattern id="hkm" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M0 0L6 6M6 0L0 6" stroke="#fff" stroke-width=".8" opacity=".75"/></pattern></defs><g class="hkn"><path d="M6 6H40Q62 10 66 48H6Z" fill="url(#hkm)"/><path d="M6 6H40Q62 10 66 48" fill="rgba(255,255,255,.12)"/></g><path d="M6 48V6H40Q62 10 66 48" fill="none" stroke="#d6363f" stroke-width="3.4" stroke-linejoin="round"/><path d="M3 48H68" stroke="#d6363f" stroke-width="3" stroke-linecap="round"/></svg>'),
      a.appendChild(E));
    let y = !1;
    E.animate(
      [
        { transform: `translateY(${-(h + 30)}px) rotate(${-6 * p}deg)`, easing: "cubic-bezier(.45,0,.9,.6)" },
        { transform: "translateY(0) rotate(0)", offset: 0.78, easing: "ease-out" },
        { transform: "translateY(-7px) rotate(1deg)", offset: 0.9, easing: "ease-in" },
        { transform: "translateY(0)" },
      ],
      { duration: 1500 },
    ).onfinish = () => {
      y = !0;
    };
    const v = [];
    if (e) {
      const e = f ? 0.8 * f.fw + 46 : 0,
        t = p > 0 ? Math.max(0.1 * i, d.fw + 10) : g + m + 34 + e,
        s = p > 0 ? g - 40 - e : Math.min(0.9 * i, i - d.fw - 10);
      for (let e = 0; e < 3; e++) {
        const n = document.createElement("i");
        n.className = "hkp";
        const o = t + (s - t) * ((e + 0.5) / 3 + 0.18 * (Math.random() - 0.5));
        a.appendChild(n);
        const i = { e: n, x: o, y: h, ok: !1, done: !1 };
        (v.push(i),
          (n.style.transform = `translate(${o.toFixed(1)}px,${h}px)`),
          (n.animate(
            [
              {
                transform: `translate(${o.toFixed(1)}px,-14px) rotate(0)`,
                easing: "cubic-bezier(.4,0,.85,.7)",
              },
              {
                transform: `translate(${(o + 6).toFixed(1)}px,${0.5 * h}px) rotate(${200 * p}deg)`,
                offset: 0.5,
              },
              {
                transform: `translate(${o.toFixed(1)}px,${h}px) rotate(360deg)`,
                offset: 0.85,
                easing: "ease-out",
              },
              { transform: `translate(${o.toFixed(1)}px,${h - 4}px) rotate(360deg)`, offset: 0.93 },
              { transform: `translate(${o.toFixed(1)}px,${h}px) rotate(360deg)` },
            ],
            { duration: 1500, delay: 250 + 380 * e, fill: "backwards" },
          ).onfinish = () => {
            i.ok = !0;
          }));
      }
    }
    const A = [79, 51],
      S = p > 0 ? g + 4 - (f ? 0.8 * f.fw : 0) : g + m - 4 + (f ? 0.8 * f.fw : 0);
    let x = e ? "wait" : "solo",
      M = "go",
      L = 0,
      T = null,
      k = 0,
      w = performance.now(),
      R = 0,
      C = 0;
    const O = (e, t) => {
        const s = document.createElement("div");
        ((s.className = "hkt" + (t ? " " + t : "")),
          (s.textContent = e),
          (s.style.left = g + m / 2 + "px"),
          (s.style.top = h - b - 8 + "px"),
          a.appendChild(s),
          setTimeout(() => s.remove(), 1100));
      },
      I = (e, t) => {
        (e.classList.remove(t),
          e.offsetWidth,
          e.classList.add(t),
          setTimeout(() => e.classList.remove(t), 700));
      },
      N = (e) => {
        C++;
        const t = E.querySelector(".hkn");
        (t &&
          t.animate(
            [
              { transform: "none" },
              { transform: `translateX(${3 * p}px) scaleX(1.05)` },
              { transform: `translateX(${-1 * p}px)` },
              { transform: "none" },
            ],
            { duration: 420, easing: "ease-out" },
          ),
          O("But !"),
          sfx(820 + 80 * C, 0.18));
        try {
          vib(12);
        } catch (e) {}
        e.e.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 500,
          delay: 350,
          fill: "forwards",
        }).onfinish = () => e.e.remove();
      },
      P = (e, t, a) => {
        (e.classList.remove(...a),
          (e.style.animationPlayState = ""),
          t && "hk" === t.mode && ((t.bk = 0), (t.mode = "back")));
      },
      U = () => {
        ((x = "end"),
          s && s.classList.remove("hks"),
          setTimeout(
            () => {
              (s && P(s, d, ["hkon"]),
                n && P(n, f, ["gkon", "gks", "gkm"]),
                o.raf || AQS !== o || (o.raf = requestAnimationFrame(aqStep)),
                (E.animate(
                  [
                    { opacity: 1, transform: "none" },
                    { opacity: 0, transform: "translateY(14px)" },
                  ],
                  { duration: 800, delay: 900, fill: "forwards" },
                ).onfinish = () => E.remove()),
                v.forEach((e) => {
                  e.done || e.e.remove();
                }));
            },
            e ? 900 : 300,
          ));
      },
      q = () => {
        (E.remove(),
          v.forEach((e) => e.e.remove()),
          s && P(s, d, ["hkon", "hks"]),
          n && P(n, f, ["gkon", "gks", "gkm"]),
          AQS !== o || o.raf || (o.raf = requestAnimationFrame(aqStep)));
      };
    setTimeout(() => {
      "end" !== x && ((x = "end"), q());
    }, 26e3);
    const D = (e, t, s, n, o) => {
        const i = aqAnc(t, a, A);
        if (!i) return 99;
        const r = s - i.x,
          l = n - i.y,
          c = Math.hypot(r, l);
        e.rt += o;
        const d = e.vmax * Math.min(1, 0.3 + e.rt / 0.5);
        if (c >= 2.5) {
          const t = Math.min(c, d * o);
          ((e.px += (r / c) * t), (e.py += (l / c) * t));
        }
        return c;
      },
      H = (e) => {
        if (!a.isConnected || AQS !== o || (d && "hk" !== d.mode) || (f && "hk" !== f.mode))
          "end" !== x && ((x = "end"), q());
        else {
          try {
            const i = Math.min(0.05, R ? (e - R) / 1e3 : 0.016);
            if (
              ((R = e),
              e - w > 22e3 && "end" !== x && U(),
              f &&
                "end" !== x &&
                ((f.dir = -p),
                "go" === M
                  ? y && D(f, n, S, h - 1, i) < 2.5 && ((M = "guard"), (L = e))
                  : D(f, n, S, h - 1 + 1.5 * Math.sin(e / 380), i)),
              "solo" === x)
            )
              "guard" === M &&
                e - L > 5e3 &&
                !Object.entries(o.F).some(
                  ([e, t]) => "hockey" !== e && "gardien" !== e && "done" !== t.mode && "back" !== t.mode,
                ) &&
                U();
            else if ("wait" === x) {
              const e = v.filter((e) => e.ok && !e.done);
              if (e.length) {
                const t = aqAnc(s, a, A) || { x: d.px, y: d.py };
                (e.sort((e, a) => Math.hypot(e.x - t.x, e.y - t.y) - Math.hypot(a.x - t.x, a.y - t.y)),
                  (T = e[0]),
                  (x = "go"),
                  (d.rt = 0));
              } else v.every((e) => e.done) && U();
            } else
              "go" === x
                ? ((d.dir = p),
                  D(d, s, T.x - 5 * p, h - 1, i) < 2.5 &&
                    (!t || "guard" === M) &&
                    ((x = "shoot"),
                    (k = 0),
                    s.classList.remove("hks"),
                    s.offsetWidth,
                    s.classList.add("hks")))
                : "shoot" === x
                  ? ((k += i),
                    k >= 0.28 &&
                      !T.done &&
                      ((T.done = !0),
                      ((e) => {
                        const s = p > 0 ? g + 0.62 * m : g + 0.38 * m;
                        if (!t) {
                          const t = Math.max(320, (Math.abs(s - e.x) / 380) * 1e3);
                          return void (e.e.animate(
                            [
                              { transform: `translate(${e.x.toFixed(1)}px,${h}px)` },
                              {
                                transform: `translate(${(s - 4 * p).toFixed(1)}px,${h - 2}px)`,
                                offset: 0.92,
                              },
                              { transform: `translate(${s.toFixed(1)}px,${h}px)` },
                            ],
                            { duration: t, easing: "cubic-bezier(.15,.7,.35,1)", fill: "forwards" },
                          ).onfinish = () => N(e));
                        }
                        const o = (aqAnc(n, a, A) || { x: S }).x;
                        if (Math.random() < 0.5) {
                          const t = o - 6 * p,
                            a = Math.max(260, Math.abs(t - e.x) / 0.42);
                          (setTimeout(() => I(n, "gks"), Math.max(0, a - 160)),
                            (e.e.animate(
                              [
                                { transform: `translate(${e.x.toFixed(1)}px,${h}px)` },
                                { transform: `translate(${t.toFixed(1)}px,${h}px)` },
                              ],
                              { duration: a, easing: "linear", fill: "forwards" },
                            ).onfinish = () => {
                              (O("Arrêt !", "sv"), sfx(300, 0.16));
                              try {
                                vib(8);
                              } catch (e) {}
                              const a = t - p * (38 + 20 * Math.random());
                              e.e.animate(
                                [
                                  { transform: `translate(${t.toFixed(1)}px,${h}px) rotate(0)` },
                                  {
                                    transform: `translate(${((t + a) / 2).toFixed(1)}px,${h - 12}px) rotate(${-180 * p}deg)`,
                                    offset: 0.4,
                                  },
                                  { transform: `translate(${a.toFixed(1)}px,${h}px) rotate(${-300 * p}deg)` },
                                ],
                                { duration: 650, easing: "ease-out", fill: "forwards" },
                              ).onfinish = () =>
                                (e.e.animate([{ opacity: 1 }, { opacity: 0 }], {
                                  duration: 450,
                                  delay: 250,
                                  fill: "forwards",
                                }).onfinish = () => e.e.remove());
                            }));
                        } else {
                          const t = Math.max(340, Math.abs(s - e.x) / 0.42),
                            a = Math.abs(o - e.x) / Math.abs(s - e.x);
                          (setTimeout(() => I(n, "gkm"), Math.max(0, t * a - 260)),
                            (e.e.animate(
                              [
                                { transform: `translate(${e.x.toFixed(1)}px,${h}px)` },
                                { transform: `translate(${s.toFixed(1)}px,${h}px)` },
                              ],
                              { duration: t, easing: "linear", fill: "forwards" },
                            ).onfinish = () => N(e)));
                        }
                      })(T)),
                    k >= 0.62 && (s.classList.remove("hks"), (T = null), (x = t ? "pause" : "wait"), (k = 0)))
                  : "pause" === x && ((k += i), k > 1.3 && (x = "wait"));
          } catch (e) {
            return ((x = "end"), void q());
          }
          "end" !== x && requestAnimationFrame(H);
        }
      };
    return (requestAnimationFrame(H), o.raf || (o.raf = requestAnimationFrame(aqStep)), !0);
  }),
  (window.aqHockey = () => aqRink(!0, !1)));
const aqFx0 = aqFx;
aqFx = function (e, t) {
  try {
    const a = (t || e).includes("hockey") && e.includes("hockey") && !!$("#tank .fx[data-id=hockey]"),
      s = (t || e).includes("gardien") && e.includes("gardien") && !!$("#tank .fx[data-id=gardien]");
    if (!wRM && (a || s)) {
      const n = e.filter((e) => !((a && "hockey" === e) || (s && "gardien" === e)));
      return (n.length && aqFx0(n, t), void aqRink(a, s));
    }
  } catch (e) {}
  return aqFx0(e, t);
};
let AQGN = 0;
let AQGI = 0;
let AQGT = 0;
function aqNear(e, t, a) {
  let s = null,
    n = 1e9;
  for (const o of e) {
    if (1 !== o.state) continue;
    const e = Math.hypot(o.xs - t, o.y - a) + 90 * o.n;
    e < n && ((n = e), (s = o));
  }
  return s;
}
function aqStep(e) {
  const t = AQS;
  if (!t) return;
  t.raf = 0;
  const a = t.t;
  if (!a.isConnected || a !== $("#tank")) return aqStop();
  const s = Math.min(0.05, t.last ? (e - t.last) / 1e3 : 0.016);
  t.last = e;
  const n = a.clientWidth,
    o = a.clientHeight;
  let i = 0;
  for (const e of t.P)
    2 !== e.state &&
      (i++,
      e.wait > 0
        ? (e.wait -= s)
        : ((e.state = 1),
          (e.ag = (e.ag || 0) + s),
          (e.ph += 2.2 * s),
          (e.y += e.vy * (0.5 + 4 * Math.exp(-2.6 * e.ag)) * s),
          (e.xs = e.x + 4 * Math.sin(e.ph)),
          (e.e.style.transform = "translate(" + e.xs.toFixed(1) + "px," + e.y.toFixed(1) + "px)"),
          e.y > 0.72 * o && ((e.state = 2), e.e.classList.add("x"), setTimeout(() => e.e.remove(), 400))));
  for (const e in t.F) {
    const r = t.F[e];
    if ("done" === r.mode) continue;
    i++;
    const l = r.el,
      G = getComputedStyle(l),
      Z = parseFloat(G.scale) || 1,
      c =
        (parseFloat(G.left) || 0) +
        ((parseFloat(G.translate) || 0) / 100) * l.offsetWidth +
        (l.offsetWidth * (1 - Z)) / 2,
      d = l.offsetTop + (l.offsetHeight * (1 - Z)) / 2;
    let f = 0;
    if ("rush" === r.mode) {
      let e = r.tg;
      if (
        ((e && 1 === e.state) ||
          (e && e.n--, (e = r.tg = aqNear(t.P, r.px + r.fw / 2, r.py + r.fh / 2)), e && e.n++),
        e)
      ) {
        const t = r.px + r.fw / 2,
          i = r.py + r.fh / 2;
        Math.abs(e.xs - t) > 0.45 * r.fw && (r.dir = e.xs > t ? 1 : -1);
        {
          const t = (t) => e.xs - t * r.fw * 0.4 - r.fw / 2;
          (t(r.dir) < -1 || t(r.dir) > n - r.fw + 1) && (r.dir = -r.dir);
        }
        const c = window.aqMouth && aqMouth(l, a),
          d = c ? c.x : t + 0.4 * r.dir * r.fw,
          u = c ? c.y : i,
          h = e.xs - d,
          p = Math.max(e.y, 0.2 * o) - u,
          m = Math.hypot(h, p),
          b = Math.hypot(h, e.y - u);
        r.rt += s;
        const g = r.vmax * Math.min(1, 0.3 + r.rt / 0.35);
        if (b <= Math.max(5, g * s))
          ((e.state = 2),
            e.n--,
            (r.tg = null),
            e.e.classList.add("x"),
            "meduse" === l.dataset.id && window.aqMedEat && ((e.e.style.opacity = 0), aqMedEat(l)),
            setTimeout(() => e.e.remove(), 320),
            r.eaten++,
            (r.mode = "eat"),
            (r.et = 0),
            r.fed && "meduse" === l.dataset.id && window.aqMedGl && aqMedGl(r.eaten),
            r.fr &&
              (r.fr.classList.remove("nom"),
              r.fr.offsetWidth,
              r.fr.classList.add("nom"),
              setTimeout(() => r.fr.classList.remove("nom"), 380)),
            r.lab || ((r.lab = !0), aqLab(a, l, 0), sfx(700 + 18 * r.k, 0.1)));
        else if (m > 0.5) {
          const e = Math.min(m, g * s);
          ((f = (h / m) * e), (r.px += f), (r.py += (p / m) * e));
        }
      } else t.P.some((e) => 0 === e.state) || (r.mode = "back");
    }
    if (
      ("eat" === r.mode &&
        ((r.et += s),
        r.et > 0.4 &&
          ((r.rt = 0),
          (r.mode =
            r.eaten < r.max &&
            t.P.filter((e) => e.state < 2).length >
              Object.values(t.F).filter((e) => 0 === e.eaten && "done" !== e.mode).length
              ? "rush"
              : "back"))),
      "back" === r.mode)
    ) {
      r.bk || ((r.bk = 1), (r.ox = r.px - c), (r.oy = r.py - d));
      const e = 0.8 * r.vmax * s,
        t = Math.exp(2.4 * -s),
        a = (t, a) => (Math.abs(a - t) > e ? t + Math.sign(a - t) * e : a),
        n = (r.ox = a(r.ox, r.ox * t)),
        o = (r.oy = a(r.oy, r.oy * t)),
        i = c + n;
      if (((f = i - r.px), (r.px = i), (r.py = d + o), Math.abs(n) < 1.5 && Math.abs(o) < 1.5)) {
        ((r.mode = "done"),
          (l.style.transform = ""),
          l.classList.remove("rush"),
          ((window.AQFD = window.AQFD || {})[l.dataset.id] = Date.now() + 12e4),
          clearTimeout(l._fd),
          (l._fd = setTimeout(() => {
            const e = document.querySelector('.tank .fx[data-id="' + l.dataset.id + '"]');
            e && (window.AQFD[l.dataset.id] || 0) <= Date.now() && e.classList.remove("feed");
          }, 12e4 + 50)),
          r.fr && r.fr.classList.remove("x"));
        continue;
      }
    }
    if (
      ("hk" !== r.mode &&
        "back" !== r.mode &&
        (() => {
          const e = Math.max(1.5, r.vmax * s),
            t = Math.max(0, Math.min(n - r.fw, r.px)) - r.px,
            a = Math.max(0, Math.min(0.8 * o - r.fh, r.py)) - r.py;
          ((r.px += Math.max(-e, Math.min(e, t))), (r.py += Math.max(-e, Math.min(e, a))));
        })(),
      l.classList.toggle("rush", "rush" === r.mode || "hk" === r.mode),
      l.classList.add("feed"),
      (l.style.transform =
        "translate(" + ((r.px - c) / Z).toFixed(1) + "px," + ((r.py - d) / Z).toFixed(1) + "px)"),
      r.fr && r.fi)
    ) {
      const e = "back" === r.mode ? (Math.abs(f) > 0.3 ? Math.sign(f) : r.face || 1) : r.dir,
        t = getComputedStyle(r.fi).transform,
        a = (t && "none" !== t && Math.sign(parseFloat(t.slice(t.indexOf("(") + 1)))) || 1;
      ((r.face = e), r.fr.classList.toggle("x", e !== a));
    }
  }
  i ? (t.raf = requestAnimationFrame(aqStep)) : aqStop();
}
function aqFeed(e) {
  mt = "m-aq";
  const t = aqRead(),
    a = Date.now(),
    s = [],
    n = [];
  if (aqMt(t, a).late && aqOn(t).length) return (msg(aqLateMsg(t, a)), !1);
  if (
    (aqOn(t).forEach((o) => {
      const i = t.f[o.id];
      (e && e !== o.id) || (n.push(o.id), (a - i.t < HR && !UNL()) || ((i.t = a), s.push(o.id)));
    }),
    !s.length)
  )
    return !1;
  const o = aqGain(
      t,
      s.map((e) => FISH.find((t) => t.id === e)),
    ),
    i = o.g.reduce((e, t) => e + t, 0);
  return (
    aqM(t),
    o.r ? (t.r = o.r) : delete t.r,
    (AQG = Object.fromEntries(s.map((e, t) => [e, o.g[t]]))),
    (fl += i),
    st.set("fl", fl),
    aqSave(t),
    chip(),
    aqStatus(),
    aqFx(n, s),
    sfx(660, 0.45),
    vib([15, 30, 15]),
    window.aqGainShow ? aqGainShow(i) : msg("✦ +" + i + " 🫧"),
    !0
  );
}
function aqBuy(e) {
  mt = "m-aq";
  const [t, a] = e.split(":"),
    s = aqRead(),
    n = ("f" === t ? FISH : "d" === t ? DECO : WATER).find((e) => e.id === a);
  if (aqXL(n)) return msg("Se débloque à l’étape " + XM(n.lk) + " d’« Un noël pour Zeni ».");
  if (aqGLk(n))
    return msg(
      n.ad
        ? "Offert par le calendrier de l’avent, le " + n.ad + " décembre."
        : n.xx
          ? "Ce poisson se débloquera plus tard."
          : n.sl
            ? "Atteins l’étape " + n.sl + " de l’histoire pour le débloquer."
            : "Termine le niveau " + n.gl + " de Galacfish pour le débloquer.",
    );
  if ("f" === t) {
    const e = FISH.find((e) => e.id === a);
    if (!e) return;
    return s.f[a]
      ? msg("Tu as déjà ce poisson : on ne peut pas le racheter.")
      : !UNL() && fl < e.p
        ? msg("Il te manque quelques bulles.")
        : aqNameOpen(e);
  }
  if ("d" === t) {
    const e = DECO.find((e) => e.id === a);
    if (!e) return;
    if (void 0 !== s.d[a]) return msg("Tu as déjà ce décor.");
    if (!spend(e.p)) return;
    ((s.d[a] = 1), aqSave(s), aquaRefresh(), msg("✦ " + e.n + " ajouté."));
  } else if ("w" === t) {
    const e = WATER.find((e) => e.id === a);
    if (!e) return;
    if (s.ws.includes(a)) return;
    if (!spend(e.p)) return;
    (s.ws.push(a), (s.w = a), aqSave(s), aquaRefresh(), msg("✦ " + e.n + "."));
  }
  sfx(740, 0.3);
}
function aqNameClose() {
  const e = $("#aqnm"),
    t = e && e.dataset.f;
  e && e.remove();
  const a = $("#nav");
  a && (a.hidden = !1);
  const s = t && document.querySelector('[data-a=aqbuy][data-v="f:' + t + '"]');
  s && s.focus();
}
function aqNameOpen(e) {
  const t = aqRead(),
    a = $("#aqnm");
  a && a.remove();
  const s = $("#nav");
  s && (s.hidden = !0);
  const n = aqRnd(t),
    o = document.createElement("div");
  ((o.className = "sfr"),
    (o.id = "aqnm"),
    (o.dataset.f = e.id),
    (o.dataset.s = n),
    o.setAttribute("role", "dialog"),
    o.setAttribute("aria-modal", "true"),
    o.setAttribute("aria-labelledby", "aqnt"),
    (o.innerHTML = `<div class="glass sfc aqnm"><h2 id="aqnt">Comment l’appeler ?</h2><div class="aqnp">${fishSVG(e)}</div><p class="note">${e.n} · ${e.p} 🫧</p><input class="ci nm" id="aqni" type="text" maxlength="16" autocomplete="off" autocapitalize="words" spellcheck="false" enterkeyhint="done" placeholder="${esc(n)}" aria-label="Nom du poisson (vide : nom au hasard)"><p class="note aqnh">Laisse vide : on choisit un nom au hasard.</p><button class="lnk" data-a="aqnr">Un autre nom au hasard</button><button class="btn" data-a="aqny">Adopter · ${e.p} 🫧</button><button class="btn alt" data-a="aqnc">Annuler</button></div>`),
    app.appendChild(o),
    o.addEventListener("click", (e) => {
      e.target === o && aqNameClose();
    }),
    o.addEventListener("keydown", (e) => {
      "Escape" === e.key
        ? (e.preventDefault(), aqNameClose())
        : "Enter" === e.key && "aqni" === e.target.id && (e.preventDefault(), act.aqny());
    }));
  const i = o.querySelector("[data-a=aqny]");
  i && i.focus();
}
function aqAdopt(e, t) {
  mt = "m-aq";
  const a = FISH.find((t) => t.id === e),
    s = aqRead();
  if (!a || s.f[e]) return void aqNameClose();
  if (!spend(a.p)) return void aqNameClose();
  const n = "gardien" === e && !(s.f.hockey && s.f.hockey.on),
    o = aqOn(s).length < MAXF && !n ? 1 : 0;
  ((s.f[e] = { t: Date.now() - HR, on: o, n: t }), aqSave(s), aqNameClose(), aquaRefresh());
  const i = o
    ? "✦ " + t + " rejoint l’aquarium."
    : n
      ? t + " attend en réserve : il lui faut le poisson hockeyeur dans l’aquarium."
      : "Aquarium complet : " + t + " attend en réserve.";
  (msg(i),
    setTimeout(() => {
      const e = $("#m-aq");
      e && e.textContent === i && (e.textContent = "");
    }, 5e3),
    sfx(740, 0.3));
}
((window.aqGainShow = (e) => {
  ((AQGN += e), clearInterval(AQGI), clearTimeout(AQGT));
  const t = Date.now(),
    a = $(".aqgn");
  (a && a.remove(),
    (AQGI = setInterval(() => {
      const e = AQS;
      if (
        e &&
        e.t &&
        e.t.isConnected &&
        (Object.values(e.F).some((e) => "done" !== e.mode && "back" !== e.mode) ||
          e.P.some((e) => 2 !== e.state)) &&
        Date.now() - t < 25e3
      )
        return;
      clearInterval(AQGI);
      const a = AQGN;
      AQGN = 0;
      const s = $(".aqhd .chip");
      if (!s || !a) return;
      const n = document.createElement("span");
      ((n.className = "aqgn"),
        n.setAttribute("role", "status"),
        (n.textContent = "+" + a + " 🫧"),
        s.insertAdjacentElement("beforebegin", n),
        (AQGT = setTimeout(() => {
          (n.classList.add("out"), setTimeout(() => n.remove(), 450));
        }, 5e3)));
    }, 200)));
}),
  setTimeout(() => {
    const e = act.aqtg;
    act.aqtg = (t) => {
      mt = "m-aq";
      const a = aqRead(),
        s = a.f.gardien,
        n = a.f.hockey;
      return "gardien" !== t || !s || s.on || (n && n.on)
        ? "hockey" === t && n && n.on && s && s.on
          ? ((n.on = 0),
            (s.on = 0),
            aqSave(a),
            aquaRefresh(),
            msg("Le gardien suit le hockeyeur en réserve."))
          : e(t)
        : msg("Le gardien a besoin du poisson hockeyeur dans l’aquarium.");
    };
    try {
      const e = aqRead();
      !e.f.gardien || !e.f.gardien.on || (e.f.hockey && e.f.hockey.on) || ((e.f.gardien.on = 0), aqSave(e));
    } catch (e) {}
  }, 0),
  Object.assign(act, {
    aqtab: (e) => aqTabTo(e),
    aqshop: () => aqTabTo("care" === aqTab || "inv" === aqTab ? "fish" : aqTab),
    aqinv: () => aqTabTo("inv"),
    aqclose: () => aqShut(),
    aqed: () => {
      ((aqEd = !aqEd), aqEd && aqShut(), aquaRefresh(), aqEd || aqTabTo("inv"));
    },
    aqpr: () => {
      const e = aqRead();
      (Object.keys(e.p).forEach((t) => {
        const a = DECO.find((e) => e.id === t);
        if (a) {
          const s = dpos(a, { p: {} });
          e.p[t] = { x: s.x, b: s.b, t: Date.now() };
        }
      }),
        aqSave(e),
        aquaRefresh());
    },
    aqfeed: () => {
      const e = aqRead();
      aqMt(e).late && aqOn(e).length ? aqTabTo("care") : aqFeed(null);
    },
    aqcare: () => aqTabTo("care"),
    aqpb: (e) => aqPlBuy(e),
    aqpf: (e) => aqPlFeed(e),
    aqpa: () => aqPlFeed(),
    aqclean: (e) => {
      if (((mt = "m-aq"), Date.now() < aqBusy)) return;
      const t = aqRead();
      if ("f" === e) t.fc = Date.now();
      else {
        if ("w" !== e) return;
        t.wc = Date.now();
      }
      (aqSave(t), aqPlay(e));
      const a = aqMt(t);
      (msg(
        ("f" === e ? "✦ Filtre nettoyé." : "✦ Eau changée : elle est toute claire.") +
          (a.late
            ? a.w <= 0
              ? " Il faut encore changer l’eau."
              : " Il faut encore nettoyer le filtre."
            : aqHg(t).length
              ? " Tes poissons te redonnent des bulles !"
              : ""),
      ),
        vib([15, 30, 15]));
    },
    aqfish: (e) => {
      {
        const t = document.querySelector('.tank .fx[data-id="' + e + '"]');
        t &&
          (t.classList.remove("tap"),
          t.offsetWidth,
          t.classList.add("tap"),
          clearTimeout(t._tp),
          (t._tp = setTimeout(() => t.classList.remove("tap"), 900)));
      }
      if (((mt = "m-aq"), !aqFeed(e))) {
        const t = aqRead(),
          a = t.f[e];
        (!a ||
          !a.on ||
          (AQS && AQS.F[e] && "done" !== AQS.F[e].mode) ||
          aqDash(document.querySelector('.tank .fx[data-id="' + e + '"]')),
          a &&
            a.on &&
            !aqMt(t).late &&
            msg(aqNames(t)[e] + " est rassasié · prochain repas dans " + aqFmt(a.t + HR - Date.now()) + "."));
      }
    },
    aqbuy: (e) => aqBuy(e),
    aqdc: (e) => {
      "xfeu" === e && aqFw();
      const t = document.querySelector('.tank .dc[data-id="' + e + '"]:not(.lgo)');
      if (!t) return;
      t.classList.remove("dtap");
      t.getBoundingClientRect();
      t.classList.add("dtap");
      clearTimeout(t._dt);
      t._dt = setTimeout(() => t.classList.remove("dtap"), 2100);
      sfx(520 + (hs(e) % 7) * 90, 0.25);
      vib(10);
    },
    aqtg: (e) => {
      mt = "m-aq";
      const t = aqRead(),
        a = t.f[e];
      if (a) {
        if (a.on) a.on = 0;
        else {
          if (aqOn(t).length >= MAXF)
            return msg(
              "L’aquarium est complet (" + MAXF + " / " + MAXF + ") : mets d’abord un poisson en réserve.",
            );
          a.on = 1;
        }
        (aqSave(t), aquaRefresh());
      }
    },
    aqdt: (e) => {
      const t = aqRead();
      void 0 !== t.d[e] && ((t.d[e] = t.d[e] ? 0 : 1), aqSave(t), aquaRefresh());
    },
    aqws: (e) => {
      const t = aqRead();
      t.ws.includes(e) && ((t.w = e), aqSave(t), aquaRefresh());
    },
  }),
  Object.assign(act, {
    aqnr: () => {
      const e = $("#aqnm"),
        t = $("#aqni");
      if (!e || !t) return;
      const a = aqRnd(aqRead(), e.dataset.s);
      ((e.dataset.s = a), (t.placeholder = a));
    },
    aqny: () => {
      const e = $("#aqnm");
      if (!e) return;
      const t = $("#aqni");
      aqAdopt(e.dataset.f, aqClN(t && t.value) || e.dataset.s);
    },
    aqnc: () => aqNameClose(),
  }));
let DR = null;
(document.addEventListener("pointerdown", (e) => {
  const t = e.target.closest && e.target.closest(".tank.ed .dc.mv");
  if (!t) return;
  const a = t.closest(".tank").getBoundingClientRect(),
    s = t.getBoundingClientRect();
  DR = { d: t, r: a, id: t.dataset.id, gx: e.clientX - s.left, gy: s.bottom - e.clientY };
  try {
    t.setPointerCapture(e.pointerId);
  } catch (e) {}
  (t.classList.add("drag"), e.preventDefault());
}),
  document.addEventListener("pointermove", (e) => {
    if (!DR) return;
    const t = DECO.find((e) => e.id === DR.id),
      a = dcl(
        t,
        ((e.clientX - DR.gx - DR.r.left) / DR.r.width) * 100,
        ((DR.r.bottom - e.clientY - DR.gy - (parseFloat(getComputedStyle(DR.d).marginBottom) || 0)) /
          DR.r.height) *
          100,
      );
    ((DR.x = a.x), (DR.b = a.b), (DR.d.style.left = a.x + "%"), (DR.d.style.bottom = a.b + "%"));
  }));
const drEnd = () => {
  if (!DR) return;
  const e = DR;
  if (((DR = null), e.d.classList.remove("drag"), void 0 === e.x)) return;
  const t = aqRead();
  ((t.p[e.id] = { x: +e.x.toFixed(2), b: +e.b.toFixed(2), t: Date.now() }), aqSave(t), aqPanel());
};
function aqRemT() {
  const e = aqRead();
  return (aqHg(e).length, aqMt(e).late && aqOn(e).length ? "Ton aquarium a besoin d’entretien" : "");
}
function aquaRemind() {
  const e = aqRemT();
  return e
    ? `<button class="glass item rem" id="aq-rem" style="--a:#6fc3e8;--b:#2a6f9a" data-a="${aqMt(aqRead()).late ? "aqcare" : "tab"}" data-v="aqua"><i>${fishSVG(FISH[0])}</i><span><b>${e}</b></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button>`
    : "";
}
function aqRemSync() {
  const e = aqRemT(),
    t = $("#aq-rem");
  if (!e && t) t.remove();
  else if (e && !t) {
    const e = $("header.top");
    e && e.insertAdjacentHTML("afterend", aquaRemind());
  } else if (e && t) {
    const a = t.querySelector("b");
    a && a.textContent !== e && (t.outerHTML = aquaRemind());
  }
}
(document.addEventListener("pointerup", drEnd),
  document.addEventListener("pointercancel", drEnd),
  document.addEventListener("keydown", (e) => {
    const t = e.target.closest && e.target.closest(".tank.ed .dc.mv"),
      a = { ArrowLeft: [-2, 0], ArrowRight: [2, 0], ArrowUp: [0, 2], ArrowDown: [0, -2] }[e.key];
    if (!t || !a) return;
    e.preventDefault();
    const s = aqRead(),
      n = DECO.find((e) => e.id === t.dataset.id),
      o = dpos(n, s),
      i = dcl(n, o.x + a[0], o.b + a[1]);
    ((s.p[n.id] = { x: +i.x.toFixed(2), b: +i.b.toFixed(2), t: Date.now() }),
      aqSave(s),
      aqPanel(),
      (t.style.left = i.x + "%"),
      (t.style.bottom = i.b + "%"));
  }),
  setInterval(() => {
    const e = $("#nav>.on"),
      t = e && e.dataset.v;
    "aqua" === t && $("#aqs")
      ? aqStatus()
      : (aqDot(aqAlert()), "daily" === t && aqRemSync(), "soc" === t && SO.dy !== socDay() && socRefresh());
  }, 1e3));
const Sy = {
  state: "off",
  col: null,
  ref: null,
  me: "",
  unsub: null,
  synced: !1,
  busy: !1,
  again: !1,
  pt: null,
  t10: null,
  at: 0,
  pv: null,
  in: "",
  err: "",
  done: "",
  cp: "",
};
let quiet = !1;
const esc = (e) =>
  String(e).replace(/[&<>"]/g, (e) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[e]);
const cnt = (e) => e.lv.reduce((e, t) => e + t.filter(Boolean).length, 0);
function readState() {
  return {
    ep: 15 & st.get("sync:ep", 0),
    fl: Math.max(0, Math.min(1e8, 0 | fl)),
    lv: G.map((e) =>
      Array.from({ length: NLM }, (t, a) => a < nl(e.id) && !!st.get(ckey(e.id) + ":" + a, !1)),
    ),
  };
}
const LSN = { match3: 20, memo: 20, maze: 20, cherche: 12, phrase: 20, caches: 20, tournade: 8, sudoku: 8 };
const PG = G.map((e, t) => (e.soon ? -1 : t)).filter((e) => e >= 0);
const PGO = PG.filter((e) => !["tournade", "maze"].includes(G[e].id));
const PGT = PG.filter((e) => "maze" !== G[e].id);
const FM = 4096;
const mkL = (e, t, a) => {
  const s = e.map(a),
    n = s.reduce((e, t) => e * t, 1) * t;
  return { pg: e, r: s, f: t, pm: n, dg: String(n - 1).length, tb: null, q: null };
};
const FST = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
  29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
  56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
  83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 105, 110, 116, 122, 128, 135, 141, 149,
  156, 164, 172, 181, 190, 200, 210, 221, 232, 244, 256, 269, 283, 297, 312, 328, 345, 362, 381, 400, 420,
  442, 464, 488, 512, 538, 566, 594, 624, 656, 689, 724, 761, 800, 840, 883, 928, 975, 1024, 1076, 1131, 1188,
  1249, 1312, 1379, 1449, 1522, 1599, 1681, 1766, 1856, 1950, 2049, 2153, 2262, 2377, 2497, 2624, 2757, 2897,
  3044, 3199, 3361, 3532, 3711, 3899, 4097, 4305, 4523, 4753, 4994, 5248, 5514, 5794, 6088, 6397, 6721, 7062,
  7421, 7797, 8193, 8609, 9046, 9505, 9987, 10494, 11027, 11586, 12174, 12792, 13441, 14124, 14840, 15594,
  16385, 17216, 18090, 19008, 19973, 20987, 22052, 23171, 24347, 25582, 26881, 28245, 29678, 31184, 32767,
];
const QS = (e) => {
  const t = e > 20 ? Math.ceil(e / 8) : e > 8 ? 3 : 2,
    a = [];
  for (let s = 0; s <= e; s += t) a.push(s);
  return (a[a.length - 1] !== e && a.push(e), a);
};
const LS = Object.assign(
  mkL(PG, FST.length, (e) => QS(Math.min(nl(G[e].id), LSN[G[e].id] || 99)).length),
  { tb: FST, q: PG.map((e) => QS(Math.min(nl(G[e].id), LSN[G[e].id] || 99))) },
);
const FZ = (e) => 1 + (["mots", "memo", "caches"].includes(G[e].id) ? 20 : 8);
const LT = mkL(PGT, 32768, FZ);
const LY = mkL(PGO, 32768, FZ);
const LM = mkL(PGO, FM, (e) => 1 + (["mots", "memo"].includes(G[e].id) ? 20 : 8));
const LO = mkL(PGO, FM, (e) => 1 + ("mots" === G[e].id ? 20 : 8));
const DG = LS.dg;
const LAY = [LO, LM, LY, LT, LS];
const MAXC = Math.max(...LAY.map((e) => e.dg + 1));
const VD = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
  [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
  [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
  [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
  [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
  [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
  [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
  [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
];
const VP = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
  [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
  [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
  [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
  [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
  [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
  [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
];
const VI = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];
const vSum = (e, t) => [...e].reverse().reduce((e, a, s) => VD[e][VP[(s + t) % 8][+a]], 0);
function encode(e) {
  let t = 0;
  LS.pg.forEach((a, s) => {
    const n = e.lv[a].filter(Boolean).length,
      o = LS.q[s];
    let i = 0;
    for (; i + 1 < o.length && o[i + 1] <= n;) i++;
    t = t * LS.r[s] + i;
  });
  const a = Math.max(0, Math.min(32767, 0 | e.fl));
  let s = 0;
  for (; s + 1 < FST.length && FST[s + 1] <= a;) s++;
  t = t * LS.f + s;
  const n = String(t).padStart(DG, "0");
  return (n + VI[vSum(n, 1)]).replace(/(\d{4})(?=\d)/g, "$1 ");
}
function parseCode(e) {
  const t = String(e || "").replace(/[\s\-_.·]/g, "");
  if (!t) return { err: "Saisis ton code." };
  if (/\D/.test(t)) return { err: "Ce code ne ressemble pas à un code à " + (DG + 1) + " chiffres." };
  if (t.length < DG + 1) return { err: "Ce code est incomplet : il fait " + (DG + 1) + " chiffres." };
  if (t.length > MAXC) return { err: "Ce code est trop long : il fait " + (DG + 1) + " chiffres." };
  const a = LAY.find((e) => e.dg + 1 === t.length),
    s = +t.slice(0, a.dg);
  if (s >= a.pm || 0 !== vSum(t, 0)) return { err: "Ce code n’est pas valide. Vérifie les chiffres." };
  let n = Math.floor(s / a.f);
  const o = {};
  for (let e = a.pg.length - 1; e >= 0; e--)
    ((o[a.pg[e]] = a.q ? a.q[e][n % a.r[e]] : n % a.r[e]), (n = Math.floor(n / a.r[e])));
  const i = s % a.f;
  return {
    fl: a.tb ? a.tb[i] : i,
    lv: G.map((e, t) => Array.from({ length: NLM }, (e, a) => a < (o[t] || 0))),
  };
}
const nw = (e, t) => {
  const a = (e - t) & 15;
  return a > 0 && a < 8;
};
function merge(e, t) {
  const a = e.lv.map((e, a) => e.map((e, s) => e || !(!t.lv[a] || !t.lv[a][s])));
  return Object.assign({}, e, {
    fl: cnt(t) > cnt(e) ? t.fl : cnt(t) === cnt(e) ? Math.max(e.fl, t.fl) : e.fl,
    lv: a,
  });
}
const same = (e, t) => JSON.stringify([e.ep, e.fl, e.lv]) === JSON.stringify([t.ep, t.fl, t.lv]);
function aqMerge(e, t) {
  const a = [e].concat(t || []).filter((e) => e && "object" == typeof e && e.f && "object" == typeof e.f);
  if (!a.length) return null;
  a.sort((e, t) => (+e.at || 0) - (+t.at || 0));
  const s = {},
    n = {},
    o = {},
    i = new Set(["nuit"]);
  let r = "nuit",
    l = 0,
    c = 0,
    d = 0,
    f = 0;
  const LR = {},
    PL = {},
    PL2 = {};
  let LT = 0;
  for (const e of a)
    ([
      ["pl", PL],
      ["pl2", PL2],
    ].forEach(([k, M]) => {
      const o = e[k];
      o &&
        "object" == typeof o &&
        Object.entries(o).forEach(([i, v]) => {
          v && "object" == typeof v && (!M[i] || (+v.t || 0) >= (+M[i].t || 0)) && (M[i] = v);
        });
    }),
      e.lr &&
        "object" == typeof e.lr &&
        Object.keys(e.lr).forEach((t) => {
          e.lr[t] && (LR[t] = 1);
        }),
      (LT = Math.max(LT, +e.lt || 0)),
      Object.entries(e.f).forEach(([e, t]) => {
        if (FISH.some((t) => t.id === e) && t && "object" == typeof t) {
          const a = s[e],
            n = aqClN(t.n) || (a && a.n) || "";
          s[e] = { t: Math.max(+t.t || 0, a ? a.t : 0), on: t.on ? 1 : 0, ...(n ? { n: n } : {}) };
        }
      }),
      Object.entries(e.d || {}).forEach(([e, t]) => {
        DECO.some((t) => t.id === e) && (n[e] = t ? 1 : 0);
      }),
      Object.entries(e.p || {}).forEach(([e, t]) => {
        DECO.some((t) => t.id === e) &&
          t &&
          "number" == typeof t.x &&
          "number" == typeof t.b &&
          (!o[e] || (+t.t || 0) >= o[e].t) &&
          (o[e] = { x: t.x, b: t.b, t: +t.t || 0 });
      }),
      (Array.isArray(e.ws) ? e.ws : []).forEach((e) => {
        WATER.some((t) => t.id === e) && i.add(e);
      }),
      e.w && WATER.some((t) => t.id === e.w) && (r = e.w),
      (l = Math.max(l, +e.at || 0)),
      (c = Math.max(c, +e.fc || 0)),
      (d = Math.max(d, +e.wc || 0)),
      (f = Math.min(999, Math.max(0, +e.r || 0))));
  let u = 0;
  FISH.forEach((e) => {
    const t = s[e.id];
    t && t.on && ++u > MAXF && (t.on = 0);
  });
  const h = (e) => Object.fromEntries(Object.entries(e).sort(([e], [t]) => (e < t ? -1 : 1)));
  return {
    f: h(s),
    d: h(n),
    p: h(o),
    ws: [...i].sort(),
    w: i.has(r) ? r : "nuit",
    at: l,
    ...(c > 0 ? { fc: c } : {}),
    ...(d > 0 ? { wc: d } : {}),
    ...(f > 0 ? { r: f } : {}),
    ...(Object.keys(LR).length ? { lr: LR } : {}),
    ...(LT ? { lt: LT } : {}),
    ...(Object.keys(PL).length ? { pl: PL } : {}),
    ...(Object.keys(PL2).length ? { pl2: PL2 } : {}),
  };
}
function fvMerge(e, t) {
  const a = [e].concat(t || []).filter((e) => e && "object" == typeof e && Array.isArray(e.l));
  if (!a.length) return null;
  a.sort((e, t) => (+e.at || 0) - (+t.at || 0));
  const s = a[a.length - 1];
  return { at: +s.at || 0, l: s.l.filter((e) => G.some((t) => t.id === e && !t.soon)) };
}
function applyState(e) {
  quiet = !0;
  try {
    if (e.rep) {
      const e = /^(c|d|p):|^(aq|fav|wd|sty|sty:i)$/;
      try {
        Object.keys(localStorage)
          .filter((t) => e.test(t))
          .forEach((e) => localStorage.removeItem(e));
      } catch (e) {}
      Object.keys(mem)
        .filter((t) => e.test(t))
        .forEach((e) => delete mem[e]);
    }
    (G.forEach((t, a) =>
      e.lv[a].forEach((e, a) => {
        e && st.set(ckey(t.id) + ":" + a, !0);
      }),
    ),
      (fl = e.fl),
      st.set("fl", fl),
      st.set("sync:ep", e.ep),
      e.aq && st.set("aq", e.aq),
      e.a2 && st.set("aq2", e.a2),
      e.a3 && st.set("aq3", e.a3),
      e.fav && st.set("fav", e.fav),
      e.wd && st.set("wd", e.wd),
      e.sty && st.set("sty", e.sty),
      e.pe && st.set("pe:seen", e.pe));
  } finally {
    quiet = !1;
  }
  (chip(), $("#tank") && aqSyncRef(), wdRefresh());
  try {
    aqPlRefund();
  } catch (e) {}
}
function accText() {
  if (!st.get("sync:acc", !1))
    return "Désactivée. Active-la pour retrouver ta progression automatiquement sur tes appareils.";
  const e = Sy.at ? new Date(Sy.at).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }) : "";
  return (
    {
      conn: "Connexion en cours…",
      ok: "Synchronisée" + (e ? " · " + e : "") + ". Visible par toi seul(e).",
      slow: "Pas de réponse pour l’instant : la progression reste ici et partira dès que possible.",
      na: "Connecte-toi (bouton ci-dessous) pour synchroniser ta progression sur tes appareils. En attendant, utilise le code.",
      err: "Synchro interrompue. Elle reprendra à la prochaine ouverture.",
      ro: "Ton accès est en lecture seule : la sauvegarde par compte demande le rôle Contributeur. Utilise le code.",
    }[Sy.state] || ""
  );
}
function sRefresh() {
  const e = $("#accs");
  e && (e.textContent = accText());
}
async function accInit() {
  if (!Sy.ref && "conn" !== Sy.state) {
    ((Sy.state = "conn"), sRefresh());
    try {
      const e = window.claude;
      if (!e || !e.use) return ((Sy.state = "na"), sRefresh());
      const [t, a] = await Promise.all([e.use("db"), e.use("user")]);
      if (!t || !a) return ((Sy.state = "na"), sRefresh());
      const s = await a.id();
      if (!s) return ((Sy.state = "na"), sRefresh());
      if (!st.get("sync:acc", !1)) return void (Sy.state = "off");
      let n = st.get("sync:dev", "");
      (n || ((n = Math.random().toString(36).slice(2, 10)), st.set("sync:dev", n)),
        (Sy.me = "p" + n),
        (Sy.col = t.collection("data/users/" + s)),
        (Sy.ref = Sy.col.doc(Sy.me)),
        (Sy.t10 = setTimeout(() => {
          Sy.synced || ((Sy.state = "slow"), sRefresh());
        }, 1e4)),
        (Sy.unsub = Sy.col.onSnapshot(onSnap, () => {
          (clearTimeout(Sy.t10),
            (Sy.unsub = null),
            (Sy.ref = null),
            (Sy.synced = !1),
            (Sy.state = "err"),
            sRefresh());
        })));
    } catch (e) {
      ((Sy.state = "na"), sRefresh());
    }
  }
}
function accOff() {
  (clearTimeout(Sy.pt), clearTimeout(Sy.t10));
  try {
    Sy.unsub && Sy.unsub();
  } catch (e) {}
  ((Sy.unsub = null), (Sy.ref = null), (Sy.col = null), (Sy.synced = !1), (Sy.state = "off"));
}
function onSnap(e) {
  const t = e.metadata || {};
  if (t.fromCache || t.hasPendingWrites) return;
  (clearTimeout(Sy.t10), (Sy.state = "ok"), (Sy.at = Date.now()));
  const a = 15 & st.get("sync:ep", 0),
    s = [];
  e.docs.forEach((e) => {
    if (e.id === Sy.me) return;
    const t = e.data();
    t && "object" == typeof t && s.push(t);
  });
  let n = a;
  s.forEach((e) => {
    nw(15 & e.ep, n) && (n = 15 & e.ep);
  });
  const o = s.filter((e) => (15 & e.ep) === n),
    i = o.reduce((e, t) => e + (+t.n || 0), 0),
    r = readState(),
    l = n !== a,
    c = G.map((e, t) =>
      Array.from(
        { length: NLM },
        (e, a) =>
          (!l && r.lv[t][a]) ||
          o.some((e) => "string" == typeof e.lv && e.nl > a && "1" === e.lv[t * e.nl + a]),
      ),
    );
  l &&
    (st.set("sync:gb", Math.max(0, ...o.map((e) => +e.gb || 0))),
    st.set("sync:g", 0),
    st.set("sync:b", 0),
    st.set("buy:b", Math.max(0, ...o.map((e) => +e.bb || 0))),
    st.set("buy:c", 0));
  const d = Math.max(0, Math.min(1e8, l ? i : r.fl + (i - st.get("sync:o", 0)))),
    f = aqMerge(
      l ? null : st.get("aq", null),
      o.map((e) => e.aq),
    ),
    a2 = aqMerge(
      l ? null : st.get("aq2", null),
      o.map((e) => e.a2),
    ),
    a3 = aqMerge(
      l ? null : st.get("aq3", null),
      o.map((e) => e.a3),
    ),
    u = fvMerge(
      l ? null : st.get("fav", null),
      o.map((e) => e.fv),
    ),
    h = wdMerge(
      l ? null : st.get("wd", null),
      o.map((e) => e.wd),
    ),
    p = styMerge(
      l ? null : st.get("sty", null),
      o.map((e) => e.sty),
    ),
    pe = (() => {
      try {
        const q = st.get("pe:seen", []),
          a = Array.isArray(q) ? q.filter((e) => "string" == typeof e) : [],
          b = a.slice();
        o.forEach(
          (e) =>
            Array.isArray(e.pe) && e.pe.forEach((e) => "string" == typeof e && !b.includes(e) && b.push(e)),
        );
        return b.length > a.length ? b : null;
      } catch (e) {
        return null;
      }
    })(),
    m = { ep: n, fl: d, lv: c, rep: l, aq: f, a2, a3, fav: u, wd: h, sty: p, pe: pe };
  ((!l &&
    same(m, r) &&
    JSON.stringify(f) === JSON.stringify(st.get("aq", null)) &&
    JSON.stringify(a2) === JSON.stringify(st.get("aq2", null)) &&
    JSON.stringify(a3) === JSON.stringify(st.get("aq3", null)) &&
    JSON.stringify(u) === JSON.stringify(st.get("fav", null)) &&
    JSON.stringify(h) === JSON.stringify(wdClean(st.get("wd", null))) &&
    JSON.stringify(p) === JSON.stringify(styClean(st.get("sty", null))) &&
    !pe) ||
    applyState(m),
    st.set("sync:o", i),
    socCredit());
  try {
    buyCredit();
  } catch (e) {}
  (Sy.synced || ((Sy.synced = !0), push()), sRefresh());
}
function schedulePush() {
  Sy.ref && Sy.synced && (clearTimeout(Sy.pt), (Sy.pt = setTimeout(push, 1500)));
}
async function push() {
  if (!Sy.ref || !Sy.synced) return;
  if (Sy.busy) return void (Sy.again = !0);
  Sy.busy = !0;
  const e = readState(),
    t = {
      ep: e.ep,
      nl: NLM,
      lv: e.lv
        .flat()
        .map((e) => (e ? 1 : 0))
        .join(""),
      n:
        e.fl -
        (+st.get("sync:b", 0) || 0) -
        st.get("sync:o", 0) -
        st.get("sync:g", 0) -
        (+st.get("buy:c", 0) || 0),
      at: Date.now(),
    },
    a = +st.get("sync:gb", 0) || 0;
  a > 0 && (t.gb = a);
  const s = +st.get("buy:b", 0) || 0;
  s > 0 && (t.bb = s);
  const n = st.get("aq", null),
    o = st.get("fav", null),
    i = wdClean(st.get("wd", null));
  n && (t.aq = n);
  {
    const x = st.get("aq2", null),
      y = st.get("aq3", null);
    (x && x.f && (t.a2 = x), y && y.f && (t.a3 = y));
  }
  (o && (t.fv = o), i && (t.wd = i));
  const r = styClean(st.get("sty", null));
  r && (t.sty = r);
  try {
    const q = st.get("pe:seen", []);
    Array.isArray(q) && q.length && (t.pe = q.filter((e) => "string" == typeof e).slice(0, 300));
  } catch (e) {}
  try {
    (await Sy.ref.set(t), (Sy.at = Date.now()), (Sy.state = "ok"));
  } catch (e) {
    Sy.state = e && "invalid_argument" === e.code ? "ro" : "err";
  }
  ((Sy.busy = !1), sRefresh(), Sy.again && ((Sy.again = !1), push()));
}
function syncHTML() {
  const e = st.get("sync:acc", !1),
    t = Sy.pv;
  let a = "";
  if (t) {
    const { R: e, L: s, M: n } = t,
      o = same(n, s),
      i = o
        ? "Cet appareil a déjà tout : rien à changer."
        : cnt(e) > cnt(s)
          ? "Ce code est le plus avancé : ses bulles sont reprises, tes niveaux terminés sont gardés."
          : cnt(e) === cnt(s)
            ? "Même avancement : tu gardes le plus de bulles, et les niveaux du code sont ajoutés."
            : "Cet appareil est plus avancé : tes bulles restent, les niveaux du code sont ajoutés.";
    a = `<div class="syv"><b>Le code</b><span>${cnt(e)} niveaux · ${e.fl} 🫧</span><b>Cet appareil</b><span>${cnt(s)} niveaux · ${s.fl} 🫧</span><i class="sep"></i><b>Après la reprise</b><span>${cnt(n)} niveaux · ${n.fl} 🫧</span><p>${i}</p></div>${o ? "" : '<button class="btn" data-a="syOk">Reprendre cette progression</button>'}<button class="btn alt" data-a="syNo">${o ? "Fermer" : "Annuler"}</button>`;
  } else a = '<button class="btn alt" data-a="syChk">Vérifier le code</button>';
  return `<h2 class="s">Sauvegarde</h2><section class="glass play sy"><p class="note">Ta sauvegarde suit ton compte : connecte-toi sur un autre appareil pour retrouver tes niveaux et tes bulles.</p><button class="tg ${e ? "on" : ""}" role="switch" aria-checked="${e}" data-a="syAcc"><span>Synchroniser avec mon compte</span><i></i></button><p class="note" id="accs" style="margin-top:8px">${accText()}</p>${window.__fb ? `<button class="btn alt" data-a="${window.__fb.u ? "fbOut" : "fbIn"}">${window.__fb.u ? "Me déconnecter (" + esc(window.__fb.u) + ")" : "Se connecter ou créer un compte"}</button>` : ""}</section>`;
}
((onSet = (e) => {
  !quiet && /^(fl|c:|aq$|aq2$|aq3$|fav$|wd$|sty$|pe:seen$)/.test(e) && schedulePush();
}),
  Object.assign(act, {
    fbIn: () => window.__fb && window.__fb.open(),
    fbOut: () => window.__fb && window.__fb.out(),
    syAcc: () => {
      const e = !st.get("sync:acc", !1);
      (st.set("sync:acc", e),
        e ? (accInit(), window.__fb && window.__fb.ready && !window.__fb.u && window.__fb.open()) : accOff(),
        prefScreen());
    },
    syCp: async () => {
      const e = encode(readState());
      let t = !1;
      try {
        (await navigator.clipboard.writeText(e), (t = !0));
      } catch (e) {}
      if (!t)
        try {
          const e = document.createRange();
          e.selectNodeContents($("#code"));
          const t = getSelection();
          (t.removeAllRanges(), t.addRange(e));
        } catch (e) {}
      const a = $("#cpb");
      a &&
        ((a.textContent = t ? "Copié ✓" : "Code sélectionné : copie-le"),
        setTimeout(() => {
          const e = $("#cpb");
          e && (e.textContent = "Copier le code");
        }, 2200));
    },
    syChk: () => {
      Sy.done = "";
      const e = parseCode(Sy.in);
      if (e.err) return ((Sy.err = e.err), (Sy.pv = null), prefScreen());
      Sy.err = "";
      const t = readState();
      ((Sy.pv = { R: e, L: t, M: merge(t, e) }), prefScreen());
    },
    syOk: () => {
      const e = Sy.pv;
      e &&
        (applyState(e.M),
        schedulePush(),
        (Sy.pv = null),
        (Sy.in = ""),
        (Sy.err = ""),
        (Sy.done = "Progression reprise ✓"),
        prefScreen());
    },
    syNo: () => {
      ((Sy.pv = null), (Sy.err = ""), (Sy.done = ""), prefScreen());
    },
  }),
  document.addEventListener("input", (e) => {
    if ("ci" === e.target.id && ((Sy.in = e.target.value), Sy.err)) {
      Sy.err = "";
      const e = $(".sy .m.err");
      e && e.remove();
    }
  }),
  document.addEventListener("keydown", (e) => {
    "Enter" === e.key && "ci" === e.target.id && (e.preventDefault(), act.syChk());
  }),
  (window.__fbDone = () => {
    (st.set("sync:acc", !0), location.reload());
  }),
  (window.__fbOut = () => {
    (st.set("sync:acc", !1), accOff(), location.reload());
  }),
  st.get("sync:acc", !1) && setTimeout(accInit, 0));
const SOA = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const SOR = /^[A-HJKMNP-Z2-9]{8}$/;
const SOK = /^[A-Za-z0-9_-]{1,128}$/;
const SG = 5;
const SMAX = 30;
const SCAP = 5e4;
const SO = {
  pf: "",
  st: "off",
  col: null,
  uid: "",
  unsub: null,
  t10: null,
  got: !1,
  can: !0,
  P: {},
  R: null,
  rec: {},
  gt: +st.get("soc:gt", 0) || 0,
  cf: "",
  cft: null,
  rm: "",
  rmt: null,
  in: "",
  nm: null,
  m: "",
  merr: !1,
  ms: "",
  mse: !1,
  busy: !1,
  again: !1,
  pt: null,
  want: !1,
  h: "",
  rk: "",
  we: !1,
  tries: 0,
};
function socDay() {
  return new Date().toLocaleDateString("sv");
}
const socOn = () => {
  const e = $("#nav>.on");
  return !!e && "soc" === e.dataset.v;
};
const socDev = () => {
  let e = st.get("sync:dev", "");
  return (e || ((e = Math.random().toString(36).slice(2, 10)), st.set("sync:dev", e)), e);
};
const socNew = () => {
  const e = new Uint32Array(8);
  return (
    window.crypto && crypto.getRandomValues
      ? crypto.getRandomValues(e)
      : e.forEach((t, a) => {
          e[a] = Math.floor(4294967296 * Math.random());
        }),
    Array.from(e, (e) => SOA[e % 31]).join("")
  );
};
const socNorm = (e) =>
  String(e || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
const socFmt = (e) => (e ? e.slice(0, 4) + "-" + e.slice(4) : "");
function socMerge(e, t) {
  const a = { code: "", name: "", nt: -1, fr: {}, s: {}, d: {}, sg: {}, cg: {}, cf: {}, av: null };
  return (
    [e, t].forEach((e) => {
      if (!e || "object" != typeof e) return;
      if (
        (!a.code && "string" == typeof e.code && SOR.test(e.code) && (a.code = e.code),
        e.g && "object" == typeof e.g && (+e.g.t || 0) >= ((a.g && a.g.t) || 0))
      ) {
        const t = (e) => Math.max(0, Math.floor(+e) || 0);
        a.g = {
          p: Math.min(SMX, t(e.g.p)),
          n: Math.min(999, t(e.g.n)),
          f: Math.min(99, t(e.g.f)),
          t: +e.g.t || 0,
        };
      }
      if (e.q && "object" == typeof e.q && WATER.some((t) => t.id === e.q.w)) {
        const t = (Array.isArray(e.q.f) ? e.q.f : [])
            .filter((e) => Array.isArray(e) && FISH.some((t) => t.id === e[0]))
            .slice(0, 40)
            .map((e) => [e[0], aqClN(e[1])]),
          s = (Array.isArray(e.q.d) ? e.q.d : []).filter((e) => DECO.some((t) => t.id === e)).slice(0, 60),
          n = {},
          o = (e) => Math.max(0, Math.min(100, +e || 0));
        (e.q.p &&
          "object" == typeof e.q.p &&
          s.forEach((t) => {
            const a = e.q.p[t];
            Array.isArray(a) && a.length >= 2 && (n[t] = [o(a[0]), o(a[1])]);
          }),
          (a.q = { f: t, d: s, p: n, w: e.q.w }));
      }
      if (e.w && "object" == typeof e.w && /^\d{4}-\d{2}-\d{2}$/.test(e.w.d) && (!a.w || e.w.d >= a.w.d)) {
        const t = (Array.isArray(e.w.p) ? e.w.p : []).filter((e) => /^[012]{5}$/.test(e)).slice(0, 6);
        a.w = { d: e.w.d, r: 1 === e.w.r || 2 === e.w.r ? e.w.r : 0, n: t.length, p: t };
      }
      const t = "string" == typeof e.name ? e.name.replace(/\s+/g, " ").trim().slice(0, 20) : "",
        s = +e.nt || 0;
      if (
        (t && s > a.nt && ((a.name = t), (a.nt = s)),
        e.fr &&
          "object" == typeof e.fr &&
          Object.entries(e.fr).forEach(([e, t]) => {
            if (!(t = +t || 0) || !SOK.test(e)) return;
            const s = a.fr[e];
            (void 0 === s || Math.abs(t) > Math.abs(s)) && (a.fr[e] = t);
          }),
        e.d &&
          "object" == typeof e.d &&
          Object.entries(e.d).forEach(([e, t]) => {
            SOK.test(e) && /^\d{4}-\d{2}-\d{2}$/.test(t) && t > (a.d[e] || "") && (a.d[e] = t);
          }),
        e.sg &&
          "object" == typeof e.sg &&
          Object.entries(e.sg).forEach(([e, t]) => {
            SOK.test(e) &&
              Array.isArray(t) &&
              "string" == typeof t[0] &&
              /^[a-z0-9]{1,16}$/.test(t[0]) &&
              (+t[2] || 0) > ((a.sg[e] && a.sg[e][2]) || 0) &&
              (a.sg[e] = [t[0], Math.max(0, Math.min(9999, Math.floor(+t[1]) || 0)), +t[2] || 0]);
          }),
        e.cg &&
          "object" == typeof e.cg &&
          Object.entries(e.cg).forEach(([e, t]) => {
            SOK.test(e) && (t = +t || 0) > (a.cg[e] || 0) && (a.cg[e] = t);
          }),
        e.cf &&
          "object" == typeof e.cf &&
          Object.entries(e.cf).forEach(([e, t]) => {
            SOK.test(e) && (t = +t || 0) && Math.abs(t) > Math.abs(a.cf[e] || 0) && (a.cf[e] = t);
          }),
        e.un &&
          "object" == typeof e.un &&
          "string" == typeof e.un.g &&
          ("" === e.un.g || /^[A-Za-z0-9_-]{3,600}_u$/.test(e.un.g)) &&
          (+e.un.t || 0) > ((a.un && a.un.t) || 0) &&
          (a.un = { g: e.un.g, t: +e.un.t || 0 }),
        e.ah &&
          "object" == typeof e.ah &&
          "string" == typeof e.ah.g &&
          /^[a-z0-9]{0,20}$/.test(e.ah.g) &&
          ("" === e.ah.w || SOK.test(e.ah.w)) &&
          (+e.ah.t || 0) > ((a.ah && a.ah.t) || 0) &&
          (a.ah = { g: e.ah.g, w: e.ah.w, t: +e.ah.t || 0 }),
        e.fv &&
          "object" == typeof e.fv &&
          Array.isArray(e.fv.l) &&
          (+e.fv.t || 0) > ((a.fv && a.fv.t) || 0) &&
          (a.fv = {
            l: e.fv.l.filter((e) => "string" == typeof e && /^[a-z0-9]{1,16}$/.test(e)).slice(0, 12),
            t: +e.fv.t || 0,
          }),
        e.hs && "object" == typeof e.hs && (+e.hs.t || 0) > ((a.hs && a.hs.t) || 0))
      ) {
        const t = {},
          s = {};
        for (const a of ["g2048", "tetris", "pc", "po", "pu", "bl", "gf", "so", "zr", "zb", "zg", "zc"]) {
          if (e.hs.k && "object" == typeof e.hs.k) {
            const s = Math.floor(+e.hs.k[a]);
            s > 0 && (t[a] = Math.min(1e7, s));
          }
          const n =
            e.hs.m && Array.isArray(e.hs.m[a])
              ? e.hs.m[a]
                  .map((e) => Math.min(1e7, Math.floor(+e) || 0))
                  .filter((e) => e > 0)
                  .slice(0, 30)
              : [];
          n.length && (s[a] = n);
        }
        a.hs = { v: "p" === e.hs.v || "f" === e.hs.v ? e.hs.v : "", t: +e.hs.t || 0, k: t, m: s };
      }
      if (e.av && "object" == typeof e.av) {
        const t = +e.av.t || 0,
          s = e.av.k,
          n = e.av.v;
        t > (a.av ? a.av.t : -1) &&
          (("e" === s && SOAV.includes(n)) ||
          ("p" === s &&
            "string" == typeof n &&
            /^data:image\/jpeg;base64,[A-Za-z0-9+/=]{20,14000}$/.test(n)) ||
          ("f" === s && "string" == typeof n && /^[a-z0-9]{1,16}$/.test(n))
            ? (a.av = { k: s, v: n, t: t })
            : s || (a.av = { k: "", v: "", t: t }));
      }
      e.s &&
        "object" == typeof e.s &&
        Object.entries(e.s).forEach(([e, t]) => {
          if (!t || "object" != typeof t || !SOK.test(e)) return;
          const s = a.s[e] || (a.s[e] = {});
          Object.entries(t).forEach(([e, t]) => {
            (t = Math.min(SCAP, Math.max(0, Math.floor(+t) || 0))) &&
              SOK.test(e) &&
              (s[e] = Math.max(s[e] || 0, t));
          });
        });
    }),
    a.nt < 0 && (a.nt = 0),
    a
  );
}
const socKey = (e) =>
  JSON.stringify([
    e.code,
    e.name,
    e.nt,
    e.g && [e.g.p, e.g.n, e.g.f],
    e.w,
    e.q,
    e.av,
    e.fv && e.fv.l,
    e.hs ? [e.hs.v, Object.entries(e.hs.k).sort(), Object.entries(e.hs.m || {}).sort()] : 0,
    Object.entries(e.sg).sort(),
    Object.entries(e.cg || {}).sort(),
    Object.entries(e.cf || {}).sort(),
    e.un ? [e.un.g, e.un.t] : 0,
    e.ah ? [e.ah.g, e.ah.w, e.ah.t] : 0,
    Object.entries(e.fr).sort(),
    Object.entries(e.d).sort(),
    Object.entries(e.s)
      .sort()
      .map(([e, t]) => [e, Object.entries(t).sort()]),
  ]);
function socMine() {
  if (!SO.got || "na" === SO.st) return;
  const e = socMerge(SO.R, st.get("soc:me", null));
  if (SO.got) {
    ((e.g = Object.assign(socProg(), { t: Date.now() })), (e.w = socWord()), (e.q = socAq()));
    {
      const t = favs().slice(0, 12);
      (e.fv && JSON.stringify(e.fv.l) === JSON.stringify(t)) || (e.fv = { l: t, t: Date.now() });
    }
    {
      e.hs && ("p" === e.hs.v || "f" === e.hs.v) && "" === infShr() && st.set("inf:sh", e.hs.v);
      const t = infShr(),
        a = "p" === t || "f" === t ? t : "",
        s = a ? infAll() : {},
        n = a ? infAll5() : {},
        o = JSON.stringify([a, s, n]);
      (!e.hs && !a) ||
        (e.hs && JSON.stringify([e.hs.v, e.hs.k || {}, e.hs.m || {}]) === o) ||
        (e.hs = { v: a, t: Date.now(), k: s, m: n });
    }
  }
  if (!e.code && SO.want && SO.can) {
    const t = new Set(Object.values(SO.P).map((e) => e.code));
    let a;
    do {
      a = socNew();
    } while (t.has(a));
    e.code = a;
  }
  e.code &&
    (e.name || (e.name = "Veilleur " + (100 + Math.floor(900 * Math.random()))),
    st.set("soc:me", e),
    st.set("soc:on", !0),
    SO.can && socKey(e) !== SO.rk && socLater());
}
function socCredit() {
  if (!SO.got) return 0;
  const e = Math.max(0, SO.gt - (+st.get("sync:gb", 0) || 0)),
    t = +st.get("sync:g", 0) || 0;
  if (e <= t) return 0;
  const a = e - t;
  return (st.set("sync:g", e), (fl = Math.min(1e8, fl + a)), st.set("fl", fl), chip(), a);
}
function socNews() {
  const e = st.get("soc:seen", {}),
    t = [];
  let a = 0;
  return (
    Object.entries(SO.rec).forEach(([s, n]) => {
      const o = n - (+e[s] || 0);
      o > 0 && (t.push((SO.P[s] && SO.P[s].name) || "Un ami"), (a += o));
    }),
    t.length
      ? 1 === t.length
        ? t[0] + " t’a offert " + a + " 🫧 ✨"
        : a + " 🫧 reçues de " + t.join(", ") + " ✨"
      : ""
  );
}
function socSeen() {
  const e = Object.assign({}, st.get("soc:seen", {}));
  let t = 0;
  (Object.entries(SO.rec).forEach(([a, s]) => {
    s > (+e[a] || 0) && ((e[a] = s), (t = 1));
  }),
    t && st.set("soc:seen", e));
}
function socDot() {
  const e = $("#nav .sdot");
  if (!e) return;
  const t = st.get("soc:seen", {});
  let a = 0;
  (Object.entries(SO.rec).forEach(([e, s]) => {
    a += Math.max(0, s - (+t[e] || 0));
  }),
    (e.hidden = !(a || cvUnreadAll()) || socOn()));
}
function socSnap(e) {
  const t = e.metadata || {};
  if (t.fromCache || t.hasPendingWrites) return;
  clearTimeout(SO.t10);
  const a = {};
  let s = null;
  (e.docs.forEach((e) => {
    const t = e.data();
    t &&
      "object" == typeof t &&
      SOK.test(e.id) &&
      ((a[e.id] = socMerge(t, null)), e.id === SO.uid && (s = t));
  }),
    (SO.P = a),
    (SO.R = s),
    (SO.got = !0),
    (SO.rk = s ? socKey(socMerge(s, null)) : ""),
    ("conn" !== SO.st && "slow" !== SO.st && "err" !== SO.st) || (SO.st = SO.can ? "ok" : "ro"));
  const n = {};
  let o = 0;
  if (
    (Object.entries(a).forEach(([e, t]) => {
      if (e === SO.uid) return;
      let a = 0;
      (Object.values(t.s).forEach((e) => {
        a += e[SO.uid] || 0;
      }),
        (a = Math.min(a, 1e6)),
        a && ((n[e] = a), (o += a)));
    }),
    (SO.rec = n),
    (SO.gt = o),
    st.set("soc:gt", o),
    socMine(),
    socCredit(),
    socOn())
  ) {
    const e = socNews();
    (e && ((SO.ms = e), (SO.mse = !1)), socSeen());
  }
  (socDot(), socRefresh(), scrOnProfiles(), chOnProfiles(), unOnProfiles());
}
async function socInit() {
  if (!SO.col && "conn" !== SO.st) {
    ((SO.st = "conn"), socRefresh());
    try {
      const e = window.claude;
      if (!e || !e.use) return ((SO.st = "na"), socRefresh());
      const [t, a] = await Promise.all([e.use("db"), e.use("user")]);
      if (!t || !a) return ((SO.st = "na"), socRefresh());
      const s = await a.id();
      if (!s || !SOK.test(s)) return ((SO.st = "na"), socRefresh());
      let n = null;
      try {
        n = await a.can("data.write");
      } catch (e) {}
      {
        const e = st.get("soc:uid", "");
        (e && e !== s && (st.set("soc:me", null), st.set("soc:seen", {})), st.set("soc:uid", s));
      }
      ((SO.uid = s),
        (SO.can = !1 !== n),
        (SO.col = t.collection("profiles")),
        (SO.ec = ""),
        (SO.t10 = setTimeout(() => {
          SO.got || ((SO.st = "slow"), socRefresh());
        }, 1e4)),
        (SO.unsub = SO.col.onSnapshot(socSnap, (e) => {
          (clearTimeout(SO.t10),
            (SO.unsub = null),
            (SO.col = null),
            (SO.got = !1),
            (SO.st = "err"),
            (SO.ec = String((e && (e.code || e.message)) || "").slice(0, 40)),
            socRefresh());
        })));
    } catch (e) {
      ((SO.st = "na"), (SO.col = null), socRefresh());
    }
  }
}
const socLater = () => {
  (clearTimeout(SO.pt), (SO.pt = setTimeout(socPush, 300)));
};
async function socPush() {
  if (!SO.col || !SO.got || !SO.can) return;
  if (SO.busy) return void (SO.again = !0);
  const e = st.get("soc:me", null);
  if (e && e.code) {
    SO.busy = !0;
    try {
      (await SO.col.doc(SO.uid).set({
        code: e.code,
        name: e.name,
        nt: e.nt,
        fr: e.fr,
        s: e.s,
        d: e.d,
        sg: e.sg || {},
        cg: e.cg || {},
        cf: e.cf || {},
        av: e.av || { k: "", v: "", t: 0 },
        fv: e.fv || { l: [], t: 0 },
        hs: e.hs || { v: "", t: 0, k: {} },
        g: Object.assign(socProg(), { t: Date.now() }),
        w: socWord(),
        q: socAq(),
        at: Date.now(),
      }),
        (SO.we = !1),
        (SO.tries = 0));
    } catch (e) {
      const t = e && e.code;
      "invalid_argument" === t || "not_granted" === t
        ? ((SO.can = !1), (SO.st = "ro"))
        : ((SO.we = !0), SO.tries++ < 3 && (clearTimeout(SO.pt), (SO.pt = setTimeout(socPush, 2e4))));
    }
    ((SO.busy = !1), SO.again && ((SO.again = !1), socPush()), socRefresh());
  }
}
const socProg = () => {
  let e = 0;
  try {
    readState().lv.forEach((t) =>
      t.forEach((t) => {
        t && e++;
      }),
    );
  } catch (e) {}
  let t = 0;
  try {
    t = Object.keys(aqRead().f || {}).length;
  } catch (e) {}
  return { p: styRead().p, n: e, f: t };
};
const socAq = () => {
  const e = aqRead(),
    t = aqNames(e),
    a = {};
  return (
    DECO.forEach((t) => {
      const s = e.p && e.p[t.id];
      e.d[t.id] &&
        s &&
        "number" == typeof s.x &&
        "number" == typeof s.b &&
        (a[t.id] = [+s.x.toFixed(1), +s.b.toFixed(1)]);
    }),
    {
      f: aqOn(e).map((e) => [e.id, t[e.id] || ""]),
      d: DECO.filter((t) => e.d[t.id]).map((e) => e.id),
      p: a,
      w: e.w,
    }
  );
};
function socTank(e) {
  const t = Date.now(),
    a = { f: {}, d: {}, p: {}, ws: [e.w], w: e.w, fc: t, wc: t, at: t };
  (e.f.forEach(([e, s]) => {
    a.f[e] = { on: 1, t: t, n: s };
  }),
    e.d.forEach((e) => {
      a.d[e] = 1;
    }),
    Object.entries(e.p).forEach(([e, s]) => {
      a.p[e] = { x: s[0], b: s[1], t: t };
    }));
  const s = aqEd,
    n = AQR;
  let o;
  ((aqEd = !1), (AQR = 4 / 3));
  try {
    o = tankHTML(a);
  } finally {
    ((aqEd = s), (AQR = n));
  }
  return o
    .replace('id="tank"', 'id="ftank"')
    .replace(/ data-a="aqfish" data-v="[^"]*" role="button" tabindex="0"/g, ' role="img"')
    .replace(/<span class="hg">[^<]*<\/span>/g, "");
}
const socWord = () => {
  const e = wdRead(),
    t = wKey(e.d);
  return e.g.length
    ? { d: e.d, r: e.r, n: e.g.length, p: e.g.map((e) => wdEval(e, t).join("")) }
    : { d: e.d, r: 0, n: 0, p: [] };
};
function socPj(e) {
  return (
    '<div class="fvp-w"><div class="sy-h" style="margin-top:0">Jouer ensemble</div><div class="fvp">' +
    [
      ["scrabble", "Motuiles"],
      ["chess", "Échecs"],
      ["hoho", "HoHo"],
      ["airhockey", "Air hockey"],
      ["galac", "Galacfish"],
    ]
      .map(([t, a]) => {
        const s = ALL.find((e) => e.id === t);
        return `<button class="btn alt" data-a="socPlay" data-v="${t}:${esc(e)}">${s ? gSv(s) : ""} ${a}</button>`;
      })
      .join("") +
    "</div></div>"
  );
}
function socFv(e, t, a) {
  const s = ((t && t.l) || []).map((e) => ALL.find((t) => t.id === e)).filter((e) => e && !gHid(e.id));
  let n =
    '<div class="sy-h">Jeux favoris</div>' +
    (s.length
      ? `<div class="fvl">${s.map((e) => `<span class="fvc"><i>${gSv(e)}</i>${esc(e.n || e.t)}</span>`).join("")}</div>`
      : '<p class="note" style="margin:0">' +
        (a ? "Tes jeux favoris (étoile ★) apparaîtront ici." : "Aucun jeu favori pour l’instant.") +
        "</p>");
  return (a || SO.pt, n);
}
function socProfile(e, t, a, s, n) {
  const o = e === SO.uid,
    i = a && a.g,
    r = a && a.w,
    l = a && a.q,
    c = socDay(),
    d = i ? CHP[sCh(i.p)] : null,
    f = i
      ? `<div class="pf-g"><div><b>${i.p}</b><small>/ ${SMX} étapes</small></div><div><b>${i.n}</b><small>niveaux terminés</small></div><div><b>${i.f}</b><small>poisson${i.f > 1 ? "s" : ""}</small></div></div><p class="note" style="margin:10px 0 0">Chapitre : ${d ? esc(d.t) : "—"}</p>`
      : '<p class="note" style="margin:0">Pas encore de progression : ton ami doit rouvrir l’onglet Social avec la dernière version du jeu.</p>';
  let u;
  if (r && r.d === c) {
    const e = r.p.length
      ? `<div class="wmini" aria-hidden="true">${r.p.map((e) => `<div>${[...e].map((e) => `<i class="${["no", "pr", "ok"][+e]}"></i>`).join("")}</div>`).join("")}</div>`
      : "";
    u = `<p class="note" style="margin:0">${1 === r.r ? "Trouvé en " + r.n + " essai" + (r.n > 1 ? "s" : "") + " ✓" : 2 === r.r ? "Pas trouvé aujourd’hui (" + r.n + " / 6 essais)" : r.n ? "En cours : " + r.n + " / 6 essais" : "Pas encore joué aujourd’hui."}</p>${e}`;
  } else u = '<p class="note" style="margin:0">Pas encore joué aujourd’hui.</p>';
  return `<button class="lnk fr-bk" data-a="socPb">${o ? "‹ Social" : "‹ Mes amis"}</button><section class="glass play soc-i pf-c"><div class="pf-r"><button class="pf-h" data-a="socPb" aria-label="Fermer le profil de ${esc(o ? t.name || "moi" : n(e))}">${s(e)}<span class="pf-n">${esc(o ? t.name || "Moi" : n(e))}</span></button>${o ? "" : `<button class="sb buy pf-pt${SO.pt === e ? " on" : ""}" data-a="socPt" data-v="${esc(e)}" aria-expanded="${SO.pt === e}">Jouer ensemble</button>`}</div>${o ? socAvEd(t) : ""}${o || SO.pt !== e ? "" : socPj(e)}<div class="sy-h">Progression</div>${f}${socFv(e, o ? t.fv : a && a.fv, o)}<div class="sy-h">Aquarium</div>${l ? `<div class="ftk">${socTank(l)}</div><p class="note" style="margin:10px 0 0">${l.f.length} poisson${l.f.length > 1 ? "s" : ""} · ${l.d.length} décor${l.d.length > 1 ? "s" : ""}</p>` : '<p class="note" style="margin:0">Pas encore visible : ton ami doit rouvrir l’onglet Social avec la dernière version du jeu.</p>'}<div class="sy-h">Mot du jour</div>${u}${o ? "" : scrProf(e) + `<button class="lnk fr-rm" data-a="socRm" data-v="${esc(e)}">${SO.rm === e ? "Confirmer le retrait" : "Retirer de mes amis"}</button><div class="pfmod"><button class="lnk" data-a="cvRep" data-v="${esc(e)}">Signaler ce joueur</button><button class="lnk" data-a="cvBlk" data-v="${esc(e)}">${cvBk(e) ? "Débloquer ce joueur" : "Bloquer ce joueur"}</button></div>`}</section>`;
}
function socBody() {
  const e = st.get("soc:me", null),
    t = (e, t) =>
      `<section class="glass play soc-i"><h2>${e}</h2><p class="note" style="margin:0">${t}</p></section>`;
  if ("na" === SO.st)
    return t(
      "Une connexion est nécessaire",
      'Connecte-toi pour ajouter des amis et discuter avec eux.<br><button class="btn" style="margin-top:12px" data-a="fbIn">Se connecter ou créer un compte</button>',
    );
  if (!(SO.can || (e && e.code)))
    return t(
      "Accès en lecture seule",
      "Pour ajouter des amis et envoyer des bulles, il faut le rôle Contributeur sur cette page. Demande à la personne qui te l’a partagée de changer ton accès.",
    );
  if (!SO.got || !e || !e.code) {
    const e = "slow" === SO.st || "err" === SO.st;
    return t(
      e ? "Pas de réponse pour l’instant" : "Un instant…",
      e
        ? "Le Social se connectera dès que possible : il réessaie tout seul. Tes bulles et tes niveaux ne bougent pas." +
            (SO.ec ? ' <small style="opacity:.7">(' + esc(SO.ec) + ")</small>" : "") +
            '</p><button class="btn" style="margin-top:14px" data-a="socRetry">Réessayer maintenant</button><p style="display:none">'
        : "Ton profil se prépare.",
    );
  }
  const a = SO.uid,
    s = SO.P,
    n = SO.can && SO.got && !!SO.col,
    o = (e) => (s[e] && s[e].name) || "Ami",
    i = (e) => socAv(e),
    r = Object.entries(e.fr)
      .filter(([, e]) => e > 0)
      .map(([e]) => e)
      .sort((e, t) => o(e).localeCompare(o(t), "fr")),
    l = Object.keys(s)
      .filter((t) => t !== a && s[t].fr[a] > 0 && !(e.fr[t] > 0))
      .sort((e, t) => o(e).localeCompare(o(t), "fr"));
  if ("__av" === SO.cv && znAdm()) return avBody();
  if (SO.cv && (e.fr[SO.cv] > 0 || "zeni" === SO.cv)) return cvBody(SO.cv);
  if (((SO.dy = socDay()), SO.pf && SO.pf === a)) return socProfile(a, e, socSelf(e), i, o);
  if (SO.pf && e.fr[SO.pf] > 0) return socProfile(SO.pf, e, s[SO.pf], i, o);
  SO.pf = "";
  const c =
      e.nt > 0
        ? `<section class="glass play soc-i"><div class="sy-h" style="margin-top:0">Mon code ami</div><div class="sadd"><div class="code" id="soc-code" aria-label="Mon code ami">${socFmt(e.code)}</div><button class="btn alt" data-a="socCp" id="soc-cp">Copier</button></div><div class="sy-h">Mon pseudo</div><div class="sadd"><input class="ci nm" id="soc-nm" type="text" maxlength="20" autocomplete="off" spellcheck="false" aria-label="Mon pseudo" value="${esc(null === SO.nm ? e.name : SO.nm)}"><button class="btn alt" data-a="socNm"${SO.can ? "" : " disabled"}>Enregistrer</button></div><p class="note" style="margin:10px 0 0">Ton pseudo et ton code sont visibles par les personnes qui ont accès à cette page.</p></section>`
        : `<section class="glass play soc-i"><div class="sy-h" style="margin-top:0">① Choisis ton pseudo</div><div class="sadd"><input class="ci nm" id="soc-nm" type="text" maxlength="20" autocomplete="off" spellcheck="false" placeholder="Ton pseudo" aria-label="Choisis ton pseudo" value="${esc(SO.nm || "")}"><button class="btn" data-a="socNm"${SO.can ? "" : " disabled"}>Valider</button></div><div class="sy-h">② Ton code ami</div><div class="sadd"><div class="code lock" aria-label="Code ami verrouillé">🔒 ••••-••••</div><button class="btn alt" disabled>Copier</button></div><p class="note" style="margin:10px 0 0"><b>Choisis d’abord ton pseudo</b> : ton code ami se débloque dès que tu l’as validé. Il sera visible, avec ton pseudo, par les personnes qui ont accès à cette page.</p></section>`,
    d = `<h2 class="s">Ajouter un ami</h2><section class="glass play soc-i"><div class="sadd"><input class="ci" id="soc-in" type="text" maxlength="14" autocomplete="off" autocapitalize="characters" autocorrect="off" spellcheck="false" placeholder="Code de ton ami" aria-label="Code ami à ajouter" value="${esc(SO.in)}"><button class="btn" data-a="socAdd"${n ? "" : " disabled"}>Ajouter</button></div><p class="m${SO.merr ? " err" : ""}" id="soc-m" role="status" aria-live="polite">${esc(SO.m)}</p></section>`,
    f = `<h2 class="s">Mes amis · ${r.length + 1}</h2><section class="glass play soc-i">${znRow()}${
      r.length
        ? `${r
            .map((t) => {
              const n = s[t],
                r = SO.rec[t];
              return (
                (e.d || {})[t],
                `<div class="fr-i"><button class="fr-o" data-a="cvOpen" data-v="${esc(t)}" aria-label="Discuter avec ${esc(o(t))}"><span data-a="socProf" data-v="${esc(t)}" style="display:contents" aria-label="Voir le profil de ${esc(o(t))}">${i(t)}</span><span class="fr-t"><b>${esc(o(t))}</b>${cvPv(t, n ? (n.fr[a] > 0 ? "Amis" : "N’a pas encore ajouté ton code") : "Profil introuvable")}</span></button><div class="fr-b"><button class="sb cvb" data-a="cvOpen" data-v="${esc(t)}" aria-label="Discuter avec ${esc(o(t))}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h16v10H9l-4 3.5v-3.5H4z"/></svg>${cvUnread(t) ? `<i>${cvUnread(t)}</i>` : ""}</button></div></div>`
              );
            })
            .join("")}`
        : '<p class="note" style="margin:0">Pas encore d’amis. Donne ton code à quelqu’un, ou saisis le sien ci-dessus.</p>'
    }<p class="m${SO.mse ? " err" : ""}" id="soc-ms" role="status" aria-live="polite">${esc(SO.ms)}</p>${SO.we ? '<p class="note" style="margin:0;text-align:center">Envoi en attente : il repartira dès que possible.</p>' : ""}</section>`,
    u = l.length
      ? `<h2 class="s">Ils t’ont ajouté</h2><section class="glass play soc-i">${l.map((e) => `<div class="fr-i">${i(e)}<div class="fr-t"><b>${esc(o(e))}</b><small>T’a ajouté(e) avec ton code</small></div><div class="fr-b"><button class="sb buy" data-a="socBack" data-v="${esc(e)}"${n ? "" : " disabled"}>Ajouter</button></div></div>`).join("")}</section>`
      : "";
  return (
    (znAdm()
      ? `<section class="glass play soc-i"><div class="fr-i"><button class="fr-o" data-a="avOpen">${znAv()}<span class="fr-t"><b>Avis reçus</b><small>Messagerie des avis envoyés à Zeni</small></span></button><div class="fr-b"><button class="sb buy" data-a="avOpen">Ouvrir</button></div></div></section>`
      : "") +
    `<section class="glass play soc-i"><div class="fr-i"><button class="fr-o" data-a="socMe" aria-label="Voir mon profil">${i(a)}<span class="fr-t"><b>${esc(e.name || "Moi")}</b><small>Mon profil · photo, progression, aquarium</small></span></button></div></section>` +
    f +
    u +
    d +
    c
  );
}
const CV = { subs: {}, D: {}, seen: {} };
const CVG = {
  carcache: "à Carcaché",
  draughts: "aux dames",
  scrabble: "à Motuiles",
  chess: "au Plateau royal",
  hoho: "à HoHo",
  airhockey: "au air hockey",
  galac: "à Galacfish (course)",
  billard: "au billard",
};
const cvId = (f, w) => [SO.uid, f].sort().join("_") + "_" + w;
function cvWatch(f) {
  if (CV.subs[f] || !SO.uid || !SOK.test(f) || f === SO.uid) return;
  ((CV.subs[f] = 1),
    (CV.D[f] = CV.D[f] || { a: [], b: [] }),
    scrDb()
      .then((db) => {
        if (!db) return;
        const c = db.collection("cv");
        [
          [SO.uid, "a"],
          [f, "b"],
        ].forEach(([w, k]) => {
          try {
            c.doc(cvId(f, w)).onSnapshot(
              (s) => {
                if ((s.metadata || {}).fromCache && !s.exists) return;
                let m = [];
                try {
                  const d = s.exists && s.data();
                  m =
                    d && Array.isArray(d.m)
                      ? d.m
                          .filter(
                            (x) =>
                              x &&
                              +x.t > 0 &&
                              ("inv" === x.k ? CVG[x.g] : "stk" === x.k ? STK[x.s] : "string" == typeof x.x),
                          )
                          .slice(-80)
                      : [];
                } catch (e) {}
                (("a" === k &&
                  CV.D[f].a.length > m.length &&
                  CV.D[f].a.slice(-1)[0].t > (m.slice(-1)[0] || { t: 0 }).t) ||
                  (CV.D[f][k] = m),
                  cvUpd(f));
              },
              () => {},
            );
          } catch (e) {}
        });
      })
      .catch(() => {}));
}
const ZEN = { m: [], av: [], sub: 0, L: null, ld: 0 };
const znAdm = () => !!(window.__fb && __fb.u && "ffxvi@pm.me" === String(__fb.u).toLowerCase());
const znAv = () =>
  `<span class="av zav" aria-hidden="true"><svg viewBox="-29 -63.5 58 58">${qzGuy("").replace('<svg viewBox="-28 -66 56 68"', '<svg x="-28" y="-66" width="56" height="68" viewBox="-28 -66 56 68"')}</svg></span>`;
const cvNm = (f) => ("zeni" === f ? "Zeni" : (SO.P[f] && SO.P[f].name) || "Ami");
const cvAv = (f) => ("zeni" === f ? znAv() : socAv(f));
function znInit() {
  if (ZEN.sub || !window.__fb || !__fb.znSub || !SO.uid) return;
  ((ZEN.sub = 1),
    __fb.znSub((m) => {
      ((ZEN.m = (m || []).filter((x) => x && +x.t > 0 && "string" == typeof x.x).slice(-80)), cvUpd("zeni"));
    }),
    __fb
      .avGet()
      .then((m) => {
        ((ZEN.av = (m || []).filter((x) => x && +x.t > 0).slice(-60)), cvUpd("zeni"));
      })
      .catch(() => {}));
}
function cvPv(t, d) {
  const M = cvMsgs(t),
    x = M[M.length - 1],
    u = cvUnread(t);
  return `<small class="cvpv${u ? " scgo" : ""}">${x ? (x.me && "inv" !== x.k ? "Toi : " : "") + esc(cvTxt(x, cvNm(t))) : esc(d)}</small>`;
}
function znRow() {
  const u = cvUnread("zeni");
  return `<div class="fr-i"><button class="fr-o" data-a="cvOpen" data-v="zeni" aria-label="Discuter avec Zeni">${znAv()}<span class="fr-t"><b>Zeni</b>${cvPv("zeni", "L’équipe de Calmos")}</span></button><div class="fr-b"><button class="sb cvb" data-a="cvOpen" data-v="zeni" aria-label="Discuter avec Zeni"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h16v10H9l-4 3.5v-3.5H4z"/></svg>${u ? `<i>${u}</i>` : ""}</button></div></div>`;
}
function avBody() {
  const L = (ZEN.L || [])
    .filter((x) => x.m.length)
    .sort((a, b) => b.m[b.m.length - 1].t - a.m[a.m.length - 1].t);
  return `<section class="glass play soc-i cvw"><div class="cvh"><button class="back" data-a="cvBack">‹ Social</button><b>Avis reçus${L.length ? " · " + L.length : ""}</b></div><div class="cvl">${
    ZEN.ld
      ? '<p class="note cvn">Chargement…</p>'
      : L.length
        ? L.map(
            (x) =>
              `<div class="avu"><b>${esc(x.n || "Joueur")}</b>${x.m
                .slice(-20)
                .map(
                  (m) =>
                    `<div class="cvm">${m.r && ZNR[m.r] ? `<em class="cvrb">${ZNR[m.r].i} ${ZNR[m.r].n}</em>` : ""}<p>${esc(m.x)}</p><small>${cvTime(m.t)}</small></div>`,
                )
                .join("")}</div>`,
          ).join("")
        : '<p class="note cvn">Aucun avis pour l’instant.</p>'
  }</div></section>`;
}
const ZNQ = [
  [
    "Bien commencer",
    [
      [
        "Par où commencer ?",
        "Ouvre l’onglet Jeux et choisis celui qui te tente : chaque jeu a ses propres niveaux. L’onglet Histoire te fait suivre mon voyage vers le pôle Nord, étape par étape. Rien ne presse, Calmos se joue à ton rythme.",
      ],
      [
        "À quoi servent les onglets du bas ?",
        "Bassin : tes poissons. Jeux : tous les jeux, rangés par sections. Histoire : l’aventure à suivre étape par étape. Social : tes amis, vos discussions… et moi ! Réglages : le son, la musique et ton compte.",
      ],
    ],
  ],
  [
    "Bulles et aquarium",
    [
      [
        "C’est quoi les bulles 🫧 ?",
        "Ce sont les petites récompenses de Calmos. Tu les gagnes en terminant des niveaux. Tu peux les utiliser pour un indice quand tu bloques, ou pour la boutique de l’aquarium.",
      ],
      [
        "Comment gagner plus de bulles ?",
        "Termine des niveaux : chacun en rapporte. À Motuiles, chaque mot posé donne 2 🫧, et le gagnant de la partie en reçoit 10.",
      ],
      [
        "Comment marche l’aquarium ?",
        "Dans l’onglet Bassin, la Boutique te permet d’acheter des poissons et des décorations avec tes bulles. Pense à les nourrir et à prendre soin d’eux : ils te tiendront compagnie.",
      ],
    ],
  ],
  [
    "Les jeux",
    [
      [
        "Comment avoir un indice ?",
        "Dans la plupart des jeux, un bouton d’indice t’aide quand tu bloques. Chaque indice coûte une bulle. Motuiles, lui, se joue sans indice.",
      ],
      [
        "Les niveaux ont-ils une fin ?",
        "Pas pour tous ! La Roue des mots, l’Anagramme, les Mots cachés, les Mots croisés, les Phrases mystères et Relie les points créent de nouveaux niveaux à l’infini.",
      ],
      [
        "Comment ranger mes jeux ?",
        "Touche l’étoile d’un jeu pour l’ajouter à tes favoris. Tu peux aussi cacher un jeu qui ne t’intéresse pas, avec le bouton prévu sur sa vignette. Dans l’onglet Jeux, la barre des sections t’amène directement à une catégorie.",
      ],
      [
        "Comment jouer à Motuiles contre l’IA ?",
        "Ouvre Motuiles, choisis le mode Normal et touche Jouer. Bats l’IA pour passer au niveau suivant : elle devient plus forte à chaque niveau. Les jumelles te montrent le meilleur mot que tu aurais pu jouer au coup précédent.",
      ],
      [
        "C’est quoi la Méditation ?",
        "C’est la zone calme de Calmos (fonction expérimentale) : des sons d’ambiance, des séances guidées et de la respiration pour te détendre, mieux dormir et apaiser le stress.",
      ],
    ],
  ],
  [
    "Amis et Social",
    [
      [
        "Comment ajouter un ami ?",
        "Dans le Social, choisis d’abord ton pseudo : ça débloque ton code ami. Donne ce code à ton ami, ou saisis le sien dans « Ajouter un ami ».",
      ],
      [
        "Comment défier un ami ?",
        "Ouvre votre discussion et touche Défier, puis choisis Motuiles, Échecs, HoHo ou Air hockey. Ton ami recevra l’invitation dans votre conversation.",
      ],
      [
        "Comment jouer avec un inconnu ?",
        "À Motuiles, passe en mode Social et touche « Chercher une partie ». Si personne n’attend, ta demande est gardée : le prochain joueur qui cherche tombera sur toi, même plus tard.",
      ],
      [
        "Comment envoyer un avis ?",
        "Ici même ! Touche « Envoyer un avis » en bas de notre discussion : l’équipe de Calmos lit tous les avis.",
      ],
    ],
  ],
  [
    "Compte et réglages",
    [
      [
        "Comment garder ma progression ?",
        "Crée un compte ou connecte-toi dans les Réglages : ta progression sera sauvegardée, et tu la retrouveras sur un autre appareil.",
      ],
      [
        "Comment régler le son et la musique ?",
        "Tout se passe dans l’onglet Réglages : tu peux y ajuster les sons et la musique comme tu préfères.",
      ],
    ],
  ],
];
const ZNW = "Salut, je suis Zeni ! Si tu es perdu comme moi et que tu as besoin de guidance, dis-le moi !";
function znLoc() {
  let w = st.get("zn:w", 0);
  w || ((w = Date.now()), st.set("zn:w", w));
  return [{ t: w, x: ZNW, w: 1, me: 0 }].concat(st.get("zn:tut", []));
}
function znAsk(qi, ai) {
  const q = ZNQ[qi] && ZNQ[qi][1][ai];
  if (!q || SO.znTy) return;
  const L = st
    .get("zn:tut", [])
    .concat([{ t: Date.now(), x: q[0], me: 1 }])
    .slice(-60);
  (st.set("zn:tut", L),
    (SO.cvPn = ""),
    (SO.znTy = 1),
    cvBot(),
    socRefresh(),
    cvScroll(),
    setTimeout(
      () => {
        const L = st
          .get("zn:tut", [])
          .concat([{ t: Date.now(), x: q[1], me: 0 }])
          .slice(-60);
        (st.set("zn:tut", L),
          (SO.znTy = 0),
          "zeni" === SO.cv && socOn() && cvRead("zeni"),
          socRefresh(),
          cvScroll(),
          socDot());
      },
      900 + Math.min(1400, 12 * q[1].length),
    ));
}
const STK = {
  salut: { z: "", t: "Salut !", c: "#6fa6ec", d: "wave", a: "stW" },
  oui: { z: "ok", t: "Oui !", c: "#3fbf7f", d: "spark", a: "stB" },
  omg: { f: "zv_globe", t: "OMG !", c: "#f2a33a", d: "excl", a: "stS" },
  jouer: { f: "zv_clown", t: "Tu veux jouer ?", c: "#a07cf0", d: "q", a: "stT" },
  youpi: { f: "zv_rouge", t: "Youpi !", c: "#ff7a59", d: "conf", a: "stB" },
  fache: { f: "zv_platy", t: "Fâché !", c: "#e0484f", d: "anger", a: "stS" },
  triste: { z: "no", t: "Triste…", c: "#5b7fd6", d: "tear", a: "stD" },
  bravo: { f: "zv_ange", t: "Bravo !", c: "#e8b23c", d: "stars", a: "stB" },
  merci: { z: "ok", t: "Merci !", c: "#ff7fb0", d: "hearts", a: "stF" },
  bisous: { f: "zv_betta", t: "Bisous !", c: "#ff6fa5", d: "hearts", a: "stF" },
  haha: { f: "zv_discus", t: "Haha !", c: "#2fb4b4", d: "haha", a: "stT" },
  nuit: { f: "zv_lune", t: "Bonne nuit", c: "#5a5fc8", d: "zzz", a: "stF" },
  oups: { f: "zv_hippo", t: "Oups !", c: "#f0a04a", d: "sweat", a: "stT" },
  hmm: { f: "zv_tortue", t: "Hmm…", c: "#7a8a5a", d: "dots", a: "stF" },
  bienjoue: { f: "zv_hockey", t: "Bien joué !", c: "#3f8fe6", d: "stars", a: "stB" },
  boude: { f: "zv_molly", t: "Je boude", c: "#6a5a8a", d: "cloud", a: "stD" },
  meduse: { f: "zv_meduse", t: "", l: "Méduse heureuse", d: "joy", a: "stF" },
  courage: { f: "zv_gardien", t: "Courage !", c: "#d9822b", d: "stars", a: "stB" },
  aplus: { f: "zv_manta", t: "À plus !", c: "#3a5fc0", d: "wave", a: "stF" },
  tropbien: { f: "zv_royal", t: "Trop bien !", c: "#8f5ee8", d: "spark", a: "stB" },
};
const STKD = {
  wave: '<g fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".9"><path d="M80 14q5 5 0 10"/><path d="M86 10q8 9 0 18"/></g>',
  spark:
    '<g fill="#ffe27a"><path d="M14 6l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6z"/><path d="M86 0l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2z"/><path d="M90 30l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z"/></g>',
  excl: '<g><path d="M60 4l-4-8M70 2l2-9M78 8l7-6" stroke="#ffd34d" stroke-width="2.4" stroke-linecap="round"/><text x="84" y="6" font-size="20" font-weight="900" fill="#ffd34d" stroke="#8a4a00" stroke-width="1.4" paint-order="stroke" font-family="Inter,system-ui,sans-serif">!!</text></g>',
  q: '<text x="80" y="6" font-size="22" font-weight="900" fill="#c9a8ff" stroke="#4a2a8a" stroke-width="1.4" paint-order="stroke" font-family="Inter,system-ui,sans-serif">?</text>',
  conf: '<g><rect x="12" y="-6" width="5" height="3" rx="1" fill="#ffd34d" transform="rotate(25 14 -4)"/><rect x="30" y="-10" width="5" height="3" rx="1" fill="#6fd0ff" transform="rotate(-20 32 -8)"/><rect x="62" y="-8" width="5" height="3" rx="1" fill="#ff7fb0" transform="rotate(40 64 -6)"/><rect x="84" y="-4" width="5" height="3" rx="1" fill="#8fe38f" transform="rotate(-35 86 -2)"/><circle cx="46" cy="-6" r="2" fill="#c9a8ff"/><circle cx="92" cy="12" r="2" fill="#ffd34d"/><circle cx="8" cy="12" r="2" fill="#ff7fb0"/></g>',
  anger:
    '<g fill="none" stroke="#ff3b4a" stroke-width="2.6" stroke-linecap="round"><path d="M80 -9c1.6 2.4 1.6 4.6 0 7"/><path d="M90 -9c-1.6 2.4-1.6 4.6 0 7"/><path d="M80.5 2c2.4-1.6 6.6-1.6 9 0"/><path d="M80.5 -12c2.4 1.6 6.6 1.6 9 0"/></g><g fill="#fff" opacity=".8"><circle cx="62" cy="2" r="3.6"/><circle cx="57" cy="-4" r="2.7"/><circle cx="53" cy="-9" r="1.8"/></g>',
  tear: '<path d="M66 28c-2 3-3 5-3 6.5a3 3 0 0 0 6 0c0-1.5-1-3.5-3-6.5z" fill="#7fc4ff" stroke="#3a7ad0" stroke-width=".8"/>',
  stars:
    '<g fill="#ffd34d" stroke="#a8740c" stroke-width=".8" stroke-linejoin="round"><path d="M14 -4l2 4.2 4.6.6-3.3 3.2.8 4.6-4.1-2.2-4.1 2.2.8-4.6-3.3-3.2 4.6-.6z"/><path d="M88 -8l1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z"/><path d="M92 24l1.2 2.5 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4z"/></g>',
  hearts:
    '<g fill="#ff6fa5" stroke="#b02a62" stroke-width=".8"><path d="M86 2c-2-3-7-2-7 2 0 3 4 5 7 8 3-3 7-5 7-8 0-4-5-5-7-2z"/><path d="M16 -4c-1.4-2-5-1.4-5 1.4 0 2 2.8 3.5 5 5.6 2.2-2.1 5-3.6 5-5.6 0-2.8-3.6-3.4-5-1.4z"/><path d="M74 -8c-1-1.4-3.5-1-3.5 1 0 1.4 2 2.4 3.5 3.9 1.5-1.5 3.5-2.5 3.5-3.9 0-2-2.5-2.4-3.5-1z"/></g>',
  haha: '<g font-family="Inter,system-ui,sans-serif" font-weight="900" fill="#fff" stroke="#1f6f6f" stroke-width="1.2" paint-order="stroke"><text x="72" y="2" font-size="11" transform="rotate(-12 72 2)">ha</text><text x="84" y="14" font-size="9" transform="rotate(10 84 14)">ha</text></g>',
  zzz: '<g font-family="Inter,system-ui,sans-serif" font-weight="900" fill="#d8dcff" stroke="#3a3f9a" stroke-width="1" paint-order="stroke"><text x="72" y="8" font-size="8">z</text><text x="79" y="1" font-size="11">z</text><text x="88" y="-7" font-size="14">z</text></g><path d="M14 -6a8 8 0 1 0 8 11 6.5 6.5 0 0 1-8-11z" fill="#ffe7a0"/>',
  sweat:
    '<path d="M70 2c-2 3-3 5-3 6.5a3 3 0 0 0 6 0c0-1.5-1-3.5-3-6.5z" fill="#bfe6ff" stroke="#3a8ad0" stroke-width=".8"/>',
  dots: '<g fill="#fff" opacity=".85"><circle cx="76" cy="10" r="2"/><circle cx="82" cy="3" r="3"/><ellipse cx="91" cy="-6" rx="8" ry="5.5"/></g><g fill="#4a5a3a"><circle cx="87.5" cy="-6" r="1"/><circle cx="91" cy="-6" r="1"/><circle cx="94.5" cy="-6" r="1"/></g>',
  joy: '<g fill="#ffe27a"><path d="M86 2l1.4 3.4 3.4 1.4-3.4 1.4-1.4 3.4-1.4-3.4-3.4-1.4 3.4-1.4z"/><path d="M10 4l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2z"/><path d="M52 -10l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z"/></g><g fill="#ff8fc0" stroke="#b02a62" stroke-width=".7"><path d="M76 -6c-1.2-1.7-4.3-1.2-4.3 1.2 0 1.7 2.4 3 4.3 4.8 1.9-1.8 4.3-3.1 4.3-4.8 0-2.4-3.1-2.9-4.3-1.2z"/><path d="M24 -8c-1-1.4-3.5-1-3.5 1 0 1.4 2 2.4 3.5 3.9 1.5-1.5 3.5-2.5 3.5-3.9 0-2-2.5-2.4-3.5-1z"/></g>',
  cloud:
    '<g><path d="M70 -2a5 5 0 0 1 9-3 4.5 4.5 0 0 1 8 2.5 3.8 3.8 0 0 1-1 7.5H71a3.6 3.6 0 0 1-1-7z" fill="#9aa3c8"/><path d="M74 9l-1.5 4M79 9l-1.5 4M84 9l-1.5 4" stroke="#7fc4ff" stroke-width="1.6" stroke-linecap="round"/></g>',
};
function stkSvg(id) {
  const S = STK[id];
  if (!S) return "";
  let c = "";
  try {
    c =
      S.z != null
        ? `<svg x="20" y="-12" width="60" height="73" viewBox="-28 -66 56 68">${qzGuy(S.z)
            .replace(/^<svg[^>]*>/, "")
            .replace(/<\/svg>$/, "")}</svg>`
        : `<svg x="0" y="2" width="100" height="60" viewBox="0 0 100 60">${FSH[S.f]({})}</svg>`;
  } catch (e) {}
  const w = Math.min(98, 20 + 6.2 * [...S.t].length);
  return `<svg class="stkv" viewBox="0 -14 100 92" role="img" aria-label="Sticker ${esc(S.t || S.l || "")}"><g${S.t ? "" : ' transform="translate(-8 6) scale(1.16)"'}><g class="ch ${S.a}">${c}</g></g><g class="dc">${STKD[S.d] || ""}</g>${S.t ? `<g class="cap"><rect x="${50 - w / 2}" y="60" width="${w}" height="16.5" rx="8.25" fill="${S.c}" stroke="#fff" stroke-width="1.6"/><text x="50" y="71.8" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff" font-family="Inter,system-ui,sans-serif">${esc(S.t)}</text></g>` : ""}</svg>`;
}
function cvSync() {
  znInit();
  if (!SO.uid || !SO.got) return;
  const e = st.get("soc:me", null);
  e &&
    e.fr &&
    Object.keys(e.fr)
      .filter((t) => e.fr[t] > 0)
      .slice(0, 24)
      .forEach(cvWatch);
}
const ZNR = {
  avis: { i: "💬", n: "Avis", p: "Ton avis sur Calmos…" },
  bug: { i: "🐞", n: "Bug", p: "Décris le bug : où, quand, ce qui se passe…" },
  coeur: { i: "💖", n: "Coup de cœur", p: "Ce que tu as adoré…" },
  frustr: { i: "😣", n: "Frustration", p: "Ce qui t’a frustré…" },
  all: { i: "📣", n: "Message à tous", p: "Message général à tous les joueurs…" },
};
const znRt = () => {
  const r = SO.znR || "avis";
  return "all" !== r || znAdm() ? r : "avis";
};
const cvBk = (f) => !!(st.get("blk", {}) || {})[f];
function cvMsgs(f) {
  if ("zeni" === f) {
    const A = znAdm();
    return ZEN.m
      .map((x) => Object.assign({}, x, { me: A ? 1 : 0 }))
      .concat(ZEN.av.map((x) => Object.assign({}, x, { me: 1 })))
      .concat(znLoc())
      .sort((x, y) => x.t - y.t);
  }
  const d = CV.D[f] || { a: [], b: [] };
  return d.a
    .map((x) => Object.assign({}, x, { me: 1 }))
    .concat((cvBk(f) ? [] : d.b).map((x) => Object.assign({}, x, { me: 0 })))
    .sort((x, y) => x.t - y.t);
}
function cvUnread(f) {
  if (cvBk(f)) return 0;
  const r = st.get("cv:rd", {})[f] || 0;
  return (
    "zeni" === f ? (znAdm() ? [] : ZEN.m).concat(znLoc().filter((x) => !x.me)) : CV.D[f] ? CV.D[f].b : []
  ).filter((x) => x.t > r).length;
}
const cvUnreadAll = () => Object.keys(CV.D).reduce((s, f) => s + cvUnread(f), cvUnread("zeni"));
function cvRead(f) {
  const m =
    "zeni" === f
      ? ZEN.m.concat(znLoc().filter((x) => !x.me)).sort((a, b) => a.t - b.t)
      : CV.D[f] && CV.D[f].b;
  if (!m || !m.length) return;
  const t = m[m.length - 1].t,
    r = Object.assign({}, st.get("cv:rd", {}));
  (r[f] || 0) < t && ((r[f] = t), st.set("cv:rd", r));
}
function cvUpd(f) {
  (SO.cv === f && socOn() && cvRead(f), socDot(), socRefresh(), SO.cv === f && cvScroll());
}
function cvScroll() {
  requestAnimationFrame(() => {
    const l = document.getElementById("cvl");
    l && (l.scrollTop = l.scrollHeight);
  });
}
async function cvSend(f, o) {
  if (!SO.uid) return !1;
  if ("zeni" !== f && cvBk(f))
    return ((SO.cvErr = "Tu as bloqué cet ami. Débloque-le pour lui écrire."), cvBot(), !1);
  if ("zeni" === f) {
    if (!window.__fb || !__fb.avPut)
      return ((SO.cvErr = "Disponible dans l’application Calmos, avec un compte."), cvBot(), !1);
    const A = znAdm() && "all" === znRt();
    A || (o = Object.assign({}, o, { r: znRt() }));
    const m = (A ? ZEN.m : ZEN.av).concat([o]).slice(A ? -80 : -60);
    (A ? (ZEN.m = m) : (ZEN.av = m), socRefresh(), cvScroll());
    try {
      return (A ? await __fb.znPut(m) : await __fb.avPut(m, (st.get("soc:me", {}) || {}).name || ""), !0);
    } catch (e) {
      return ((SO.cvErr = (A ? "Message non envoyé. " : "Retour non envoyé. ") + scrWhy(e)), cvBot(), !1);
    }
  }
  cvWatch(f);
  const d = CV.D[f] || (CV.D[f] = { a: [], b: [] }),
    m = d.a.concat([o]).slice(-60);
  ((d.a = m), socRefresh(), cvScroll());
  try {
    const db = await scrDb();
    if (!db) throw 0;
    return (await db.collection("cv").doc(cvId(f, SO.uid)).set({ m: m }), !0);
  } catch (e) {
    return ((SO.cvErr = "Message non envoyé. " + scrWhy(e)), cvBot(), !1);
  }
}
function socInv(f, g) {
  try {
    f && f !== SO.uid && SOK.test(f) && CVG[g] && cvSend(f, { t: Date.now(), k: "inv", g: g });
  } catch (e) {}
}
function cvTime(t) {
  const d = new Date(t),
    n = new Date();
  return (
    (d.toDateString() === n.toDateString()
      ? ""
      : d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" }) + " · ") +
    d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
  );
}
const cvTxt = (x, nm) =>
  "stk" === x.k
    ? "Sticker « " + (STK[x.s] ? STK[x.s].t || STK[x.s].l : "") + " »"
    : "inv" === x.k
      ? (x.me ? "Tu as défié " + nm : nm + " te défie") + " " + CVG[x.g]
      : x.x;
const cvFv = (f) => {
  const m = (st.get("soc:me", null) || {}).cf || {};
  return f in m ? m[f] > 0 : !!(st.get("cv:fav", {}) || {})[f];
};
function cvLive(g, f) {
  try {
    if (g === "scrabble") {
      typeof scrWatch === "function" && scrWatch(f);
      const e = SC.G[f];
      return !!e && !e.e;
    }
    if (g === "chess") {
      chWatch(f);
      const e = CH.G[f];
      return !!e && !chRes(e);
    }
    if (g === "draughts") {
      dmWatch(f);
      const e = DM.G[f];
      return !!e && !dmRes(e);
    }
  } catch (_) {}
  return !1;
}
function cvList(f) {
  const nm = cvNm(f),
    Z = "zeni" === f,
    M = cvMsgs(f),
    S = CV.seen[f] || (CV.seen[f] = new Map()),
    N = performance.now();
  let q = 0;
  const A = (x) => {
    const k = x.t + ":" + x.me;
    S.has(k) || S.set(k, N + 55 * Math.min(q++, 8));
    const el = N - S.get(k);
    return el > 650 ? "" : ` nw" style="--d:${Math.round(-el)}ms`;
  };
  return {
    k: M.map((x) => x.t + ":" + x.me).join(",") + "|" + (Z && SO.znTy ? 1 : 0) + "|" + M.length,
    h: M.length
      ? M.map((x) =>
          "stk" === x.k
            ? `<div class="cvs${x.me ? " me" : ""}${A(x)}">${stkSvg(x.s)}<small>${cvTime(x.t)}</small></div>`
            : "inv" === x.k
              ? `<div class="cvi${x.me ? " me" : ""}${A(x)}"><span>🎲 ${esc(cvTxt(x, nm))}</span>${x.me ? (cvLive(x.g, f) ? `<button class="sb buy" data-a="cvRes" data-v="${esc(x.g)}">Revenir à la partie</button>` : "") : `<button class="sb buy" data-a="cvGo" data-v="${esc(x.g)}">Jouer</button>`}<small>${cvTime(x.t)}</small></div>`
              : `<div class="cvm${x.me ? " me" : ""}${A(x)}">${x.r && ZNR[x.r] ? `<em class="cvrb">${ZNR[x.r].i} ${ZNR[x.r].n}</em>` : ""}<p>${esc(x.x)}</p>${!x.me && /Code\s*:\s*[A-Z0-9]{5}/.test(x.x || "") ? `<button class="sb buy" data-a="rmJoinMsg" data-v="${/Code\s*:\s*([A-Z0-9]{5})/.exec(x.x)[1]}">Rejoindre le salon</button>` : ""}${x.w ? '<button class="cvhelp" data-a="cvPn" data-v="help">J’ai besoin d’aide</button>' : ""}<small>${cvTime(x.t)}</small></div>`,
        ).join("") + (Z && SO.znTy ? '<div class="cvm cvty nw"><p><i></i><i></i><i></i></p></div>' : "")
      : Z
        ? '<p class="note cvn">Zeni te donnera ici des nouvelles de Calmos. Tu peux aussi lui envoyer ton avis.</p>'
        : '<p class="note cvn">Aucun message pour l’instant. Dis bonjour !</p>',
  };
}
function cvBot() {
  const b = document.getElementById("cvbt");
  if (!b || !SO.cv) return !1;
  b.innerHTML = cvBottom(SO.cv);
  return !0;
}
function cvBottom(f) {
  const Z = "zeni" === f;
  return `${SO.cvErr ? `<p class="note cve">${esc(SO.cvErr)}</p>` : ""}${(() => {
    const P = SO.cvPn || "",
      el = performance.now() - (SO.cvPt || 0),
      an = el < 520 ? ` style="--pd:${Math.round(-el)}ms"` : ' style="animation:none"',
      I = {
        crd: '<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="11" height="15" rx="2.2" transform="rotate(-10 9 12.5)"/><rect x="9" y="4" width="11" height="15" rx="2.2" fill="currentColor" fill-opacity=".25"/></svg>',
        def: '<svg viewBox="0 0 24 24"><path d="M5 19 15.5 8.5M15.5 8.5 17 4l3 3-4.5 1.5M8.5 15.5l-2-2M19 19 8.5 8.5M8.5 8.5 7 4 4 7l4.5 1.5M15.5 15.5l2-2"/></svg>',
        stk: '<svg viewBox="0 0 24 24"><path d="M4 5.5h16v11H10l-4.5 3.5v-3.5H4z"/><path d="M9 9.6v.4M15 9.6v.4M8.8 12.6c1.6 1.6 4.8 1.6 6.4 0"/></svg>',
        hlp: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M9.6 9.6a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1 .8-1 1.5v.4"/><circle cx="12" cy="16.8" r=".9" fill="currentColor"/></svg>',
        msg: '<svg viewBox="0 0 24 24"><path d="M4 5.5h16v11H10l-4.5 3.5v-3.5H4z"/><circle cx="8.5" cy="11" r="1" fill="currentColor"/><circle cx="12" cy="11" r="1" fill="currentColor"/><circle cx="15.5" cy="11" r="1" fill="currentColor"/></svg>',
      },
      B = (k, c, t) =>
        `<button class="cvbb ${c}${P === k ? " on" + (el < 520 ? " w" : "") : ""}" data-a="cvPn" data-v="${k}" aria-expanded="${P === k}"${t ? ` aria-label="${t}"` : ""}><i>${I[k]}</i>${t && k !== "stk" && k !== "msg" ? `<span>${t}</span>` : ""}</button>`;
    let pn = "";
    "msg" === P
      ? (pn = Z
          ? `<div class="cvpn cvzr"${an}><div class="cvrt">${Object.keys(ZNR)
              .filter((k) => "all" !== k || znAdm())
              .map(
                (k) =>
                  `<button class="cvrc${znRt() === k ? " on" : ""}" data-a="znR" data-v="${k}">${ZNR[k].i} ${ZNR[k].n}</button>`,
              )
              .join(
                "",
              )}</div><div class="cvf"><input class="ci" id="soc-cvin" type="text" maxlength="${Z ? 600 : 300}" autocomplete="off" placeholder="${Z ? ZNR[znRt()].p : "Écris un message…"}" aria-label="Message" value="${esc(SO.cvIn || "")}" enterkeyhint="send"><button class="cvsend" data-a="cvSendB" aria-label="Envoyer"><svg viewBox="0 0 24 24"><path d="M4 12 20 4l-5 16-3-6.5z"/><path d="M12 13.5 20 4"/></svg></button></div></div>`
          : `<div class="cvpn cvf"${an}><input class="ci" id="soc-cvin" type="text" maxlength="${Z ? 600 : 300}" autocomplete="off" placeholder="${Z ? ZNR[znRt()].p : "Écris un message…"}" aria-label="Message" value="${esc(SO.cvIn || "")}" enterkeyhint="send"><button class="cvsend" data-a="cvSendB" aria-label="Envoyer"><svg viewBox="0 0 24 24"><path d="M4 12 20 4l-5 16-3-6.5z"/><path d="M12 13.5 20 4"/></svg></button></div>`)
      : "def" === P
        ? (pn = `<div class="cvpn cvg"${an}>${[
            ["carcache", "Carcaché"],
            ["chess", "Échecs"],
            ["scrabble", "Motuiles"],
            ["draughts", "Dames"],
            ["hoho", "HoHo"],
            ["airhockey", "Air hockey"],
            ["galac", "Galacfish"],
            ["billard", "Billard"],
          ]
            .map(([g, n], i) => {
              const s = ALL.find((e) => e.id === g);
              return `<button class="cvgb" style="--d:${i * 50}ms" data-a="cvPg" data-v="${g}:${esc(f)}"><i>${s ? gSv(s) : ""}</i><span>${n}</span></button>`;
            })
            .join("")}</div>`)
        : "help" === P
          ? (pn = `<div class="cvpn cvq"${an}>${ZNQ.map(([c, L], i) => `<div class="cvqc"><small>${c}</small>${L.map(([q], j) => `<button class="cvqb" data-a="znAsk" data-v="${i}:${j}">${q}</button>`).join("")}</div>`).join("")}</div>`)
          : "stk" === P
            ? (pn = `<div class="cvpn cvsk"${an}>${Object.keys(STK)
                .map(
                  (k, i) =>
                    `<button class="cvsb" style="--d:${i * 25}ms" data-a="stkSend" data-v="${k}" aria-label="Envoyer le sticker ${esc(STK[k].t || STK[k].l)}">${stkSvg(k)}</button>`,
                )
                .join("")}</div>`)
            : "crd" === P &&
              (pn = `<div class="cvpn cvsoon"${an}><b>Demande de cartes</b><span>Bientôt : demande des cartes à tes amis.</span></div>`);
    return (
      pn +
      `<div class="cvbar${Z ? " zn" : ""}${performance.now() - (SO.cvOt || 0) < 700 ? " in" : ""}">${Z ? `<button class="cvbb pu${"help" === P ? " on" + (el < 520 ? " w" : "") : ""}" data-a="cvPn" data-v="help" aria-expanded="${"help" === P}"><i>${I.hlp}</i><span>J’ai besoin d’aide</span></button><button class="cvbb bl2${"msg" === P ? " on" + (el < 520 ? " w" : "") : ""}" data-a="cvPn" data-v="msg" aria-expanded="${"msg" === P}"><i>${I.msg}</i><span>Envoyer un retour</span></button>` : `${B("crd", "or", "Demande de cartes")}${B("def", "pu", "Défier")}${B("stk", "bl", "Stickers")}${B("msg", "bl2", "Message")}`}</div>`
    );
  })()}`;
}
function cvBody(f) {
  const nm = cvNm(f),
    Z = "zeni" === f,
    M = cvMsgs(f),
    S = CV.seen[f] || (CV.seen[f] = new Map()),
    N = performance.now();
  let q = 0;
  const A = (x) => {
    const k = x.t + ":" + x.me;
    S.has(k) || S.set(k, N + 55 * Math.min(q++, 8));
    const el = N - S.get(k);
    return el > 650 ? "" : ` nw" style="--d:${Math.round(-el)}ms`;
  };
  const L = cvList(f);
  return `<section class="glass play soc-i cvw${performance.now() - (SO.cvOt || 0) < 500 ? " op" : ""}" data-f="${esc(f)}"><div class="cvh"><button class="back" data-a="cvBack">‹ Social</button>${Z ? "" : `<button class="cvpr" data-a="cvProf" data-v="${esc(f)}" aria-label="Voir le profil de ${esc(nm)}" style="all:unset;cursor:pointer;display:flex;align-items:center;gap:8px;min-width:0">`}${cvAv(f)}<b>${esc(nm)}</b>${Z ? "" : "</button>"}${Z ? '<small class="zns">L’équipe de Calmos</small>' : `<button class="cvfv${cvFv(f) ? " on" : ""}" data-a="cvFav" data-v="${esc(f)}" aria-pressed="${cvFv(f)}" aria-label="${cvFv(f) ? "Retirer des favoris" : "Mettre en favori"}">${cvFv(f) ? "★" : "☆"}</button>`}</div><div class="cvl" id="cvl" data-k="${esc(L.k)}">${L.h}</div><div class="cvbt" id="cvbt">${cvBottom(f)}</div></section>`;
}
function cvSec(r) {
  r = ["zeni"].concat(r);
  const L = r
    .filter((t) => cvMsgs(t).length)
    .map((t) => {
      const M = cvMsgs(t);
      return [t, M[M.length - 1]];
    })
    .sort((x, y) => cvFv(y[0]) - cvFv(x[0]) || y[1].t - x[1].t)
    .slice(0, 6);
  if (!L.length) return "";
  return `<h2 class="s">Discussions</h2><section class="glass play soc-i">${L.map(([t, x]) => {
    const nm = cvNm(t),
      u = cvUnread(t);
    return `<div class="fr-i"><button class="fr-o" data-a="cvOpen" data-v="${esc(t)}">${cvAv(t)}<span class="fr-t"><b>${cvFv(t) ? "★ " : ""}${esc(nm)}</b><small${u ? ' class="scgo"' : ""}>${x.me && "inv" !== x.k ? "Toi : " : ""}${esc(cvTxt(x, nm).slice(0, 60))}</small></span></button><div class="fr-b">${u ? `<span class="cvu">${u}</span>` : ""}<button class="sb${u ? " buy" : ""}" data-a="cvOpen" data-v="${esc(t)}">Ouvrir</button></div></div>`;
  }).join("")}</section>`;
}
setTimeout(
  () =>
    Object.assign(act, {
      cvFav: (f) => {
        const on = !cvFv(f),
          b = Object.assign({}, st.get("cv:fav", {}) || {});
        (on ? (b[f] = 1) : delete b[f], st.set("cv:fav", b));
        const m = st.get("soc:me", null);
        if (m) {
          ((m.cf = Object.assign({}, m.cf)),
            (m.cf[f] = on ? Date.now() : -Date.now()),
            st.set("soc:me", m),
            socLater());
        }
        (shToast(on ? "Conversation mise en favori." : "Favori retiré."), (SO.h = ""), socRefresh());
      },
      cvRep: (f) => {
        const n = cvNm(f);
        location.href =
          "mailto:nextonset@pm.me?subject=" +
          encodeURIComponent("Signalement Calmos") +
          "&body=" +
          encodeURIComponent(
            "Signalement d’un joueur sur Calmos\nPseudo : " +
              n +
              "\nIdentifiant : " +
              f +
              "\n\nDécris ce qui s’est passé :\n",
          );
      },
      cvBlk: (f) => {
        const b = Object.assign({}, st.get("blk", {}) || {});
        (b[f] ? delete b[f] : (b[f] = 1),
          st.set("blk", b),
          shToast(b[f] ? "Joueur bloqué : tu ne vois plus ses messages." : "Joueur débloqué."),
          (SO.h = ""),
          socRefresh());
      },
      cvOpen: (f) => {
        ((CV.seen[f] = new Map()),
          (SO.cvOt = performance.now()),
          (SO.cvPn = ""),
          (SO.cv = f),
          (SO.cvErr = ""),
          (SO.cvIn = ""),
          (SO.pf = ""),
          cvWatch(f),
          cvRead(f),
          (SO.h = ""),
          socRefresh(),
          cvScroll(),
          socDot(),
          window.scrollTo(0, 0));
      },
      cvBack: () => {
        ((SO.cv = ""), (SO.h = ""), socRefresh());
      },
      cvProf: (e) => {
        ((SO.cv = ""),
          (SO.pf = e),
          (SO.pt = ""),
          (SO.rm = ""),
          (SO.ms = ""),
          (SO.h = ""),
          socRefresh(),
          window.scrollTo(0, 0));
      },
      cvPn: (k) => {
        ((SO.cvPn = SO.cvPn === k ? "" : k),
          (SO.cvPt = performance.now()),
          cvBot() || ((SO.h = ""), socRefresh()),
          "msg" === SO.cvPn &&
            setTimeout(() => {
              const i = document.getElementById("soc-cvin");
              i && i.focus();
            }, 60),
          cvScroll());
      },
      cvPg: (v) => {
        ((SO.cv = ""), (SO.cvPn = ""), act.socPlay(v));
      },
      avOpen: () => {
        ((SO.cv = "__av"),
          (ZEN.ld = 1),
          (SO.h = ""),
          socRefresh(),
          window.scrollTo(0, 0),
          __fb
            .avList()
            .then((L) => {
              ZEN.L = L;
            })
            .catch((e) => {
              ((ZEN.L = []), (SO.ms = "Avis indisponibles. " + scrWhy(e)));
            })
            .finally(() => {
              ((ZEN.ld = 0), (SO.h = ""), socRefresh());
            }));
      },
      znAsk: (v) => {
        const [a, b] = String(v).split(":").map(Number);
        znAsk(a, b);
      },
      stkSend: (k) => {
        STK[k] &&
          SO.cv &&
          "zeni" !== SO.cv &&
          ((SO.cvPn = ""), cvBot(), cvSend(SO.cv, { t: Date.now(), k: "stk", s: k }));
      },
      znR: (v) => {
        ZNR[v] &&
          ((SO.znR = v),
          document.querySelectorAll(".cvrc").forEach((b) => b.classList.toggle("on", b.dataset.v === v)),
          (() => {
            const i = document.getElementById("soc-cvin");
            i && ((i.placeholder = ZNR[znRt()].p), i.focus());
          })());
      },
      cvSendB: () => {
        const i = document.getElementById("soc-cvin"),
          v = ((i && i.value) || "").trim().slice(0, "zeni" === SO.cv ? 600 : 300);
        if (!v || !SO.cv) return;
        ((SO.cvIn = ""),
          (SO.cvErr = ""),
          i && (i.value = ""),
          cvSend(SO.cv, { t: Date.now(), x: v }).then(() => {
            const i = document.getElementById("soc-cvin");
            i && i.focus();
          }));
      },
      cvRes: (g) => {
        const f = SO.cv;
        SO.cv = "";
        if (g === "scrabble") {
          st.set("scr:mode", "s");
          scrOpen(f);
        } else if (g === "chess") {
          act.open("chess");
          setTimeout(() => act.chOpen(f), 150);
        } else if (g === "draughts") {
          act.open("draughts");
          setTimeout(() => act.dmOpen(f), 300);
        }
      },
      cvGo: (g) => {
        const f = SO.cv;
        ((SO.cv = ""),
          "scrabble" === g
            ? (st.set("scr:mode", "s"), scrOpen(f))
            : "draughts" === g
              ? (act.open("draughts"), setTimeout(() => act.dmOpen(f), 300))
              : "galac" === g
                ? ((GF.rcOpp = f), act.open(g))
                : "billard" === g
                  ? (act.open(g), setTimeout(() => act.biOn && act.biOn(f), 500))
                  : act.open(g));
      },
    }),
  0,
);
document.addEventListener("input", (e) => {
  "soc-cvin" === e.target.id && (SO.cvIn = e.target.value);
});
document.addEventListener("mousedown", (e) => {
  e.target.closest && e.target.closest(".cvsend") && e.preventDefault();
});
document.addEventListener("keydown", (e) => {
  "soc-cvin" === e.target.id && "Enter" === e.key && (e.preventDefault(), act.cvSendB && act.cvSendB());
});
(() => {
  const V = window.visualViewport;
  let y = 0,
    on = 0,
    raf = 0;
  const R = () => document.querySelector(".cvf.cvfx"),
    pos = () => {
      if (!on) return;
      const r = R();
      if (!r) return;
      Math.abs(scrollY - y) > 1 && window.scrollTo(0, y);
      const vh = V ? V.height : innerHeight,
        ot = V ? V.offsetTop : 0,
        d = Math.min(0, Math.round(ot + vh - r.offsetHeight - 8 - (r._b - scrollY)));
      r.style.transform = d ? `translateY(${d}px)` : "";
    },
    loop = (t) => {
      (pos(), performance.now() < t && (raf = requestAnimationFrame(() => loop(t))));
    };
  (V && (V.addEventListener("resize", pos), V.addEventListener("scroll", pos)),
    window.addEventListener("scroll", pos, { passive: !0 }),
    document.addEventListener("focusin", (e) => {
      if ("soc-cvin" !== e.target.id) return;
      const r = e.target.closest(".cvf"),
        b = document.getElementById("cvbt");
      if (!r) return;
      ((y = scrollY),
        (on = 1),
        b && (b.style.minHeight = b.offsetHeight + "px"),
        (r.style.transform = ""),
        (r._b = r.getBoundingClientRect().top + scrollY),
        r.classList.add("cvfx"),
        pos(),
        cancelAnimationFrame(raf),
        loop(performance.now() + 900),
        setTimeout(() => {
          const l = document.getElementById("cvl");
          l && (l.scrollTop = l.scrollHeight);
        }, 350));
    }),
    document.addEventListener("focusout", (e) => {
      "soc-cvin" === e.target.id &&
        setTimeout(() => {
          const a = document.activeElement;
          if (a && "soc-cvin" === a.id) return;
          on = 0;
          const r = R(),
            b = document.getElementById("cvbt");
          (r && (r.classList.remove("cvfx"), (r.style.transform = "")), b && (b.style.minHeight = ""));
        }, 120);
    }));
})();
function socRefresh() {
  if (!socOn()) return;
  const e = $("#soc");
  if (!e) return;
  if (SO.cv && "__av" !== SO.cv && "" !== SO.h) {
    const w = e.querySelector(".cvw[data-f]");
    if (w && w.dataset.f === SO.cv) {
      const l = w.querySelector("#cvl"),
        x = cvList(SO.cv);
      if (l && l.dataset.k !== x.k) {
        const nb = l.scrollHeight - l.scrollTop - l.clientHeight < 80;
        ((l.innerHTML = x.h), (l.dataset.k = x.k), nb && (l.scrollTop = l.scrollHeight));
      }
      return;
    }
  }
  const t = socBody();
  if (t === SO.h) return;
  SO.h = t;
  const a = document.activeElement,
    s = a && e.contains(a) ? a.id : "",
    n = s ? a.selectionStart : 0,
    o = s ? a.selectionEnd : 0;
  if (((e.innerHTML = t), s)) {
    const e = document.getElementById(s);
    if (e) {
      e.focus();
      try {
        e.setSelectionRange(n, o);
      } catch (e) {}
    }
  }
}
function socScreen() {
  ((cur = null),
    (origin = "home"),
    nv("soc"),
    (mt = "m"),
    (SO.want = !0),
    (SO.cf = ""),
    (SO.rm = ""),
    (SO.pf = ""),
    (SO.h = ""),
    (app.innerHTML = `<header class="top"><h1>Social</h1><div class="tr"><div class="chip">🫧 ${FLX()}</div></div></header><div id="soc" class="soc"></div>`),
    (SO.ms = ""),
    (SO.cv = ""),
    (SO.cvPn = ""),
    (SO.mse = !1),
    SO.col || "conn" === SO.st ? socMine() : socInit(),
    socSeen(),
    socDot(),
    socRefresh(),
    window.scrollTo(0, 0));
}
const socFail = (e) => {
  ((SO.ms = e), (SO.mse = !0), (SO.cf = ""), socRefresh());
};
function socAddId(e) {
  const t = st.get("soc:me", null);
  return t.fr[e] > 0
    ? "dup"
    : Object.values(t.fr).filter((e) => e > 0).length >= 30
      ? "max"
      : ((t.fr[e] = Math.max(Date.now(), Math.abs(t.fr[e] || 0) + 1)), st.set("soc:me", t), socLater(), "ok");
}
(Object.assign(act, {
  scrFrom: (e) => {
    (scrInstall(), scrOpen(e));
  },
  socMe: () => {
    ((SO.pf = SO.uid),
      (SO.rm = ""),
      (SO.ms = ""),
      (SO.mse = !1),
      (SO.h = ""),
      socRefresh(),
      window.scrollTo(0, 0));
  },
  socAvE: (e) => {
    SOAV.includes(e) && socSetAv("e", e);
  },
  socAvX: () => socSetAv("", ""),
  socAvF: (e) => {
    FISH.some((t) => t.id === e) && aqRead().f[e] && socSetAv("f", e);
  },
  socPt: (e) => {
    ((SO.pt = SO.pt === e ? "" : e), socRefresh());
  },
  socPl: (e) => {
    ((SO.pf = e), (SO.pt = e), (SO.rm = ""), (SO.ms = ""), (SO.h = ""), socRefresh(), window.scrollTo(0, 0));
  },
  socProf: (e) => {
    ((SO.pf = e), (SO.pt = ""), (SO.rm = ""), (SO.ms = ""), (SO.h = ""), socRefresh(), window.scrollTo(0, 0));
  },
  socPb: () => {
    ((SO.pf = ""), (SO.rm = ""), (SO.h = ""), socRefresh(), window.scrollTo(0, 0));
  },
  socCp: async () => {
    const e = st.get("soc:me", null);
    if (!(e && e.code && e.nt > 0)) return;
    let t = !1;
    try {
      (await navigator.clipboard.writeText(socFmt(e.code)), (t = !0));
    } catch (e) {}
    if (!t)
      try {
        const e = document.createRange();
        e.selectNodeContents($("#soc-code"));
        const t = getSelection();
        (t.removeAllRanges(), t.addRange(e));
      } catch (e) {}
    const a = $("#soc-cp");
    a &&
      ((a.textContent = t ? "Copié ✓" : "Sélectionné"),
      setTimeout(() => {
        const e = $("#soc-cp");
        e && (e.textContent = "Copier");
      }, 2200));
  },
  socNm: () => {
    const e = st.get("soc:me", null);
    if (!e || !SO.can) return;
    const t = String(null === SO.nm ? (e.nt > 0 ? e.name : "") : SO.nm)
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 20);
    if (!t) return ((SO.ms = "Choisis un pseudo (20 caractères au maximum)."), (SO.mse = !0), socRefresh());
    const a = e.nt > 0;
    ((e.name = t),
      (e.nt = Math.max(Date.now(), e.nt + 1)),
      st.set("soc:me", e),
      (SO.nm = null),
      (SO.ms = a ? "Pseudo enregistré ✓" : "Pseudo enregistré ✓ Ton code ami est débloqué."),
      (SO.mse = !1),
      socLater(),
      (SO.h = ""),
      socRefresh());
  },
  socAdd: () => {
    const e = st.get("soc:me", null),
      t = socNorm(SO.in),
      a = (e) => {
        ((SO.m = e), (SO.merr = !0), socRefresh());
      };
    if (!(e && SO.can && SO.got && SO.col)) return a("Le Social n’est pas prêt : réessaie dans un instant.");
    if (!t) return a("Saisis le code de ton ami.");
    if (!SOR.test(t))
      return a("Ce code n’est pas valide : il fait 8 lettres et chiffres, comme " + socFmt("KQ7M4XD2") + ".");
    if (t === e.code) return a("C’est ton propre code ! Donne-le plutôt à un ami.");
    const s = (e) => {
        if (!e)
          return a("Aucun ami avec ce code. Vérifie-le, et demande-lui d’ouvrir d’abord l’onglet Social.");
        const t = socAddId(e),
          s = (SO.P[e] && SO.P[e].name) || "Ton ami";
        return "dup" === t
          ? a(s + " est déjà dans tes amis.")
          : "max" === t
            ? a("Tu as atteint la limite de 30 amis.")
            : ((SO.in = ""),
              (SO.m = s + " ajouté(e) à tes amis ✓"),
              (SO.merr = !1),
              (SO.h = ""),
              void socRefresh());
      },
      n = Object.keys(SO.P).find((e) => e !== SO.uid && SO.P[e].code === t);
    return !n && window.__fb && window.__fb.lookup
      ? ((SO.m = "Recherche…"),
        (SO.merr = !1),
        socRefresh(),
        window.__fb.lookup(t).then(
          (e) => s(e && e !== SO.uid ? e : null),
          () => a("Recherche impossible pour l’instant : réessaie dans un moment."),
        ))
      : s(n);
  },
  socBack: (e) => {
    if (st.get("soc:me", null) && SO.can && SO.got && SO.col && SO.P[e])
      return "max" === socAddId(e)
        ? socFail("Tu as atteint la limite de 30 amis.")
        : ((SO.ms = SO.P[e].name + " ajouté(e) à tes amis ✓"), (SO.mse = !1), void socRefresh());
  },
  socRm: (e) => {
    const t = st.get("soc:me", null);
    if (t && t.fr[e] > 0) {
      if (SO.rm !== e)
        return (
          (SO.rm = e),
          clearTimeout(SO.rmt),
          (SO.rmt = setTimeout(() => {
            ((SO.rm = ""), socRefresh());
          }, 3500)),
          socRefresh()
        );
      (clearTimeout(SO.rmt),
        (SO.rm = ""),
        (t.fr[e] = -Math.max(Date.now(), Math.abs(t.fr[e]) + 1)),
        st.set("soc:me", t),
        (SO.cf = ""),
        (SO.pf = ""),
        (SO.ms = "Ami retiré."),
        (SO.mse = !1),
        (SO.h = ""),
        socLater(),
        socRefresh(),
        window.scrollTo(0, 0));
    }
  },
  socSend: (e) => {
    const t = st.get("soc:me", null),
      a = SO.P[e];
    if (!(t && SO.can && SO.got && SO.col))
      return socFail("Le Social n’est pas prêt : réessaie dans un instant.");
    if (!(t.fr[e] > 0 && a)) return socFail("Cet ami n’est plus dans ta liste.");
    if (((t.d = t.d || {}), (t.d[e] || "") >= socDay()))
      return socFail("Tu as déjà offert un cadeau à " + a.name + " aujourd’hui. Reviens demain !");
    const s = socDev(),
      n = t.s[s] || (t.s[s] = {});
    if ((n[e] || 0) + 5 > SCAP) return socFail("Tu as déjà beaucoup gâté cet ami !");
    ((n[e] = (n[e] || 0) + 5),
      (t.d[e] = socDay()),
      st.set("soc:me", t),
      (SO.ms = ""),
      (SO.mse = !1),
      sfx(660, 0.4),
      vib(20),
      socLater(),
      socRefresh());
  },
}),
  document.addEventListener("input", (e) => {
    const t = e.target;
    if ("soc-in" === t.id) {
      if (((SO.in = t.value), SO.merr && SO.m)) {
        ((SO.m = ""), (SO.merr = !1), (SO.h = ""));
        const e = $("#soc-m");
        e && ((e.textContent = ""), e.classList.remove("err"));
      }
    } else "soc-nm" === t.id && (SO.nm = t.value);
  }),
  document.addEventListener("keydown", (e) => {
    "Enter" === e.key &&
      ("soc-in" === e.target.id
        ? (e.preventDefault(), act.socAdd())
        : "soc-nm" === e.target.id && (e.preventDefault(), act.socNm()));
  }),
  skyBody(),
  setInterval(() => {
    (skyBody(), $("#stg") && sSky());
  }, 6e4),
  document.addEventListener("visibilitychange", () => {
    document.hidden || (skyBody(), $("#stg") && sSky());
  }),
  home(),
  aqDot(aqAlert()),
  (st.get("soc:on", !1) || st.get("sync:acc", !1)) && setTimeout(socInit, 0));
const cv = $("#snow");
const x = cv.getContext("2d");
let W;
let H;
const P = [];
const rs = () => {
  ((W = cv.width = innerWidth), (H = cv.height = innerHeight));
};
(rs(), addEventListener("resize", rs));
for (let e = 0; e < 130; e++)
  P.push({
    x: Math.random() * W,
    y: Math.random() * H,
    r: 1 + 2.5 * Math.random(),
    v: 0.15 + 0.35 * Math.random(),
    d: 6 * Math.random(),
  });
let sOn = 0;
let sT = 0;
const snow = (e) => {
  if (!prefs().snow || document.hidden)
    return (sOn && (x.clearRect(0, 0, W, H), (sOn = 0)), (sT = 0), setTimeout(snow, 300));
  if (sT && e - sT < 32) return requestAnimationFrame(snow);
  const t = (sT && Math.min(3, (e - sT) / 16.67)) || 1;
  ((sT = e || 0),
    (sOn = 1),
    x.clearRect(0, 0, W, H),
    (x.fillStyle = `rgba(${Math.round(120 + 135 * (1 - GS))},${Math.round(110 + 145 * (1 - GS))},${Math.round(200 + 55 * (1 - GS))},${(0.5 + 0.2 * (1 - GS)).toFixed(2)})`),
    x.beginPath());
  const a = !!document.querySelector("#stg[data-x]");
  a && (x.fillStyle = `rgba(255,255,255,${(0.92 - 0.1 * GS).toFixed(2)})`);
  let s = 0;
  const xm = sxOn();
  for (let e = 0, n = a ? P.length : xm ? 45 : 18; e < n; e++) {
    const n = P[e];
    if (playing && ++s > 22) break;
    if (!a && !xm) {
      ((n.y -= 0.7 * n.v * t),
        (n.d += 0.004 * t),
        (n.x += 0.3 * Math.sin(n.d) * t),
        n.y < -14 && ((n.y = H + 14), (n.x = Math.random() * W)));
      const R = 1.8 * n.r,
        c = [Math.round(200 - 110 * GS), Math.round(235 - 85 * GS), Math.round(255 - 55 * GS)].join(",");
      (x.beginPath(),
        x.arc(n.x, n.y, R, 0, 7),
        (x.fillStyle = `rgba(${c},.03)`),
        x.fill(),
        (x.strokeStyle = `rgba(${c},${(0.15 + 0.07 * (1 - GS)).toFixed(2)})`),
        (x.lineWidth = 1),
        x.stroke(),
        x.beginPath(),
        x.arc(n.x - 0.35 * R, n.y - 0.35 * R, 0.2 * R + 0.3, 0, 7),
        (x.fillStyle = `rgba(255,255,255,${(0.22 + 0.1 * GS).toFixed(2)})`),
        x.fill());
      continue;
    }
    ((n.y += n.v * t),
      (n.d += 0.004 * t),
      (n.x += 0.25 * Math.sin(n.d) * t),
      n.y > H + 5 && ((n.y = -5), (n.x = Math.random() * W)),
      x.moveTo(n.x + (a ? 1.3 * n.r : n.r), n.y),
      x.arc(n.x, n.y, a ? 1.3 * n.r : n.r, 0, 7));
  }
  (x.fill(),
    a && ((x.strokeStyle = `rgba(110,130,190,${(0.55 * GS).toFixed(2)})`), (x.lineWidth = 1), x.stroke()),
    requestAnimationFrame(snow));
};
(matchMedia("(prefers-reduced-motion: reduce)").matches || snow(),
  (() => {
    const e = (e) => document.querySelector(e),
      t = () => {
        try {
          history.pushState({ nb: 1 }, "");
        } catch (e) {}
      };
    try {
      (history.replaceState({ nb: 0 }, ""), t());
    } catch (e) {}
    addEventListener(
      "pointerdown",
      () => {
        try {
          (history.state && 1 === history.state.nb) || t();
        } catch (e) {}
      },
      !0,
    );
    const bkH = () => {
      if (e("#aqsh.open")) return (aqShut(), !0);
      if (e("#plo:not(.out)")) return (act.plx(), !0);
      {
        const q = e("#sfr .prcl2,#sfr [data-a=sfx]");
        if (q && e("#sfr")) return (q.click(), !0);
      }
      if (e("#app .aqfs") && void 0 !== aqEd && aqEd) return (act.aqed(), !0);
      const t = e(
        "#app [data-a=back],#app [data-a=chBk],#app [data-a=scrBk],#app [data-a=unBk],#app [data-a=soBk]",
      );
      if (t) return (t.click(), !0);
      const a = e("#nav>button.on");
      return !(!a || "games" === a.dataset.v || e("#nav[hidden]") || (e("#nav [data-v=games]").click(), 0));
    };
    const bkTo = () => {
      let t = e("#bkt");
      (t ||
        ((t = document.createElement("div")),
        (t.id = "bkt"),
        (t.style.cssText =
          "position:fixed;left:50%;bottom:calc(96px + max(env(safe-area-inset-bottom,0px),var(--safe-area-inset-bottom,0px)));translate:-50% 0;z-index:99999;padding:10px 16px;border-radius:99px;background:rgba(30,34,60,.9);color:#fff;font:600 13px system-ui,sans-serif;pointer-events:none;transition:opacity .3s;max-width:86vw;text-align:center"),
        document.body.appendChild(t)),
        (t.textContent = "Appuie encore sur retour pour quitter"),
        (t.style.opacity = "1"),
        clearTimeout(t._t),
        (t._t = setTimeout(() => (t.style.opacity = "0"), 2200)));
    };
    window.__calmosBack = () => {
      if (bkH()) return (t(), !0);
      if (Date.now() - (window.__bkT || 0) < 2300) return !1;
      window.__bkT = Date.now();
      bkTo();
      return !0;
    };
    addEventListener("popstate", () => {
      bkH() ? t() : (bkTo(), setTimeout(t, 2400));
    });
  })(),
  (() => {
    try {
      if (st.get("mig:cach40", 0)) return;
      const e = [ckey("caches") + ":", "p:caches:", "k:caches:"];
      for (let t = 9; t >= 0; t--)
        e.forEach((e) => {
          const a = st.get(e + (20 + t), null);
          a && (st.set(e + (40 + t), a), st.set(e + (20 + t), null));
        });
      st.set("mig:cach40", 1);
    } catch (e) {}
  })(),
  (() => {
    try {
      if (st.get("mig:cach60", 0)) return;
      const e = [ckey("caches") + ":", "p:caches:", "k:caches:"];
      for (let t = 9; t >= 0; t--)
        e.forEach((e) => {
          const a = st.get(e + (40 + t), null);
          a && (st.set(e + (60 + t), a), st.set(e + (40 + t), null));
        });
      st.set("mig:cach60", 1);
    } catch (e) {}
  })(),
  (() => {
    try {
      if (st.get("mig:tn24", 0)) return;
      const e = [ckey("tournade") + ":", "p:tournade:", "k:tournade:"];
      for (let t = 9; t >= 0; t--)
        e.forEach((e) => {
          const a = st.get(e + (8 + t), null);
          a && (st.set(e + (24 + t), a), st.set(e + (8 + t), null));
        });
      st.set("mig:tn24", 1);
    } catch (e) {}
  })(),
  (() => {
    const e = () =>
        !(("slow" !== Sy.state && "err" !== Sy.state) || !st.get("sync:acc", !1) || (accOff(), accInit(), 0)),
      t = () => {
        try {
          (() => {
            if (("slow" !== SO.st && "err" !== SO.st) || SO.got) return !1;
            clearTimeout(SO.t10);
            try {
              SO.unsub && SO.unsub();
            } catch (e) {}
            ((SO.unsub = null), (SO.col = null), (SO.st = ""), socInit());
          })();
        } catch (e) {}
        try {
          e();
        } catch (e) {}
      };
    ((act.socRetry = () => {
      try {
        if (!SO.got) {
          clearTimeout(SO.t10);
          try {
            SO.unsub && SO.unsub();
          } catch (e) {}
          ((SO.unsub = null), (SO.col = null), (SO.st = ""), socInit());
        }
      } catch (e) {}
      try {
        e();
      } catch (e) {}
    }),
      setInterval(() => {
        document.hidden || t();
      }, 2e4),
      addEventListener("online", t),
      document.addEventListener("visibilitychange", () => {
        document.hidden || setTimeout(t, 800);
      }));
  })(),
  (() => {
    try {
      if (st.get("mig:sd28", 0)) return;
      const e = [ckey("sudoku") + ":", "p:sudoku:", "k:sudoku:"];
      for (let t = 9; t >= 0; t--)
        e.forEach((e) => {
          const a = st.get(e + (8 + t), null);
          a && (st.set(e + (28 + t), a), st.set(e + (8 + t), null));
        });
      st.set("mig:sd28", 1);
    } catch (e) {}
  })(),
  (() => {
    try {
      const e = (e, t, a, s) => {
        if (st.get(s, 0)) return;
        const n = [ckey(e) + ":", "p:" + e + ":", "k:" + e + ":"];
        for (let e = 9; e >= 0; e--)
          n.forEach((s) => {
            const n = st.get(s + (t + e), null);
            n && (st.set(s + (a + e), n), st.set(s + (t + e), null));
          });
        st.set(s, 1);
      };
      (e("tournade", 24, 38, "mig:tn38"),
        e("sudoku", 28, 40, "mig:sd40"),
        e("sudoku", 40, 70, "mig:sd70"),
        e("sudoku", 70, 80, "mig:sd80"),
        e("mots", 60, 99, "mig:mo99"),
        e("croises", 8, 49, "mig:cw49"),
        e("maze", 30, 50, "mig:mz50"));
    } catch (e) {}
  })(),
  (() => {
    try {
      if (st.get("mig:tn40", 0)) return;
      const e = [ckey("tournade") + ":", "p:tournade:", "k:tournade:"];
      for (let t = 9; t >= 0; t--)
        e.forEach((e) => {
          const a = st.get(e + (38 + t), null);
          a && (st.set(e + (40 + t), a), st.set(e + (38 + t), null));
        });
      st.set("mig:tn40", 1);
    } catch (e) {}
  })(),
  (() => {
    try {
      if (st.get("mig:ph40", 0)) return;
      const e = [ckey("phrase") + ":", "p:phrase:", "k:phrase:"];
      for (let t = 9; t >= 0; t--)
        e.forEach((e) => {
          const a = st.get(e + (20 + t), null);
          a && (st.set(e + (40 + t), a), st.set(e + (20 + t), null));
        });
      st.set("mig:ph40", 1);
    } catch (e) {}
  })(),
  (() => {
    try {
      if (st.get("mig:memo30", 0)) return;
      const e = [ckey("memo") + ":", "p:memo:", "k:memo:"];
      for (let t = 9; t >= 0; t--)
        e.forEach((e) => {
          const a = st.get(e + (20 + t), null);
          a && (st.set(e + (30 + t), a), st.set(e + (20 + t), null));
        });
      st.set("mig:memo30", 1);
    } catch (e) {}
  })(),
  (() => {
    try {
      if (st.get("mig:mz30", 0)) return;
      const e = [ckey("maze") + ":", "p:maze:", "k:maze:"];
      for (let t = 9; t >= 0; t--)
        e.forEach((e) => {
          const a = st.get(e + (20 + t), null);
          a && (st.set(e + (30 + t), a), st.set(e + (20 + t), null));
        });
      st.set("mig:mz30", 1);
    } catch (e) {}
  })(),
  (() => {
    try {
      if (st.get("mig:m340", 0)) return;
      const e = [ckey("match3") + ":", "p:match3:", "k:match3:"];
      for (let t = 9; t >= 0; t--)
        e.forEach((e) => {
          const a = st.get(e + (20 + t), null);
          a && (st.set(e + (40 + t), a), st.set(e + (20 + t), null));
        });
      st.set("mig:m340", 1);
    } catch (e) {}
  })(),
  (() => {
    try {
      if (st.get("mig:m360", 0)) return;
      const e = [ckey("match3") + ":", "p:match3:", "k:match3:"],
        t = (t, a) =>
          e.forEach((e) => {
            const s = st.get(e + t, null);
            (st.set(e + a, s), st.set(e + t, null));
          });
      for (let e = 9; e >= 0; e--) t(40 + e, 60 + e);
      const a = {
        24: 25,
        25: 26,
        26: 28,
        27: 29,
        28: 31,
        29: 32,
        30: 34,
        31: 35,
        32: 37,
        33: 40,
        34: 43,
        35: 46,
        36: 48,
        37: 51,
        38: 54,
        39: 57,
      };
      for (let e = 39; e >= 24; e--) t(e, a[e]);
      const s = st.get("last", null);
      (s &&
        "match3" === s.g &&
        !s.daily &&
        (s.lv >= 40 ? (s.lv += 20) : a[s.lv] && (s.lv = a[s.lv]), st.set("last", s)),
        st.set("mig:m360", 1));
    } catch (e) {}
  })(),
  (() => {
    try {
      if (st.get("mig:m365", 0)) return;
      const e = [ckey("match3") + ":", "p:match3:", "k:match3:"],
        t = (t, a) =>
          e.forEach((e) => {
            const s = st.get(e + t, null);
            (st.set(e + a, s), st.set(e + t, null));
          });
      for (let e = 9; e >= 0; e--) t(60 + e, 65 + e);
      for (let e = 59; e >= 54; e--) t(e, e + 5);
      const a = st.get("last", null);
      (a && "match3" === a.g && !a.daily && a.lv >= 54 && ((a.lv += 5), st.set("last", a)),
        st.set("mig:m365", 1));
    } catch (e) {}
  })(),
  (() => {
    try {
      if (st.get("mig:m370", 0)) return;
      const e = [ckey("match3") + ":", "p:match3:", "k:match3:"],
        t = (t, a) =>
          e.forEach((e) => {
            const s = st.get(e + t, null);
            (st.set(e + a, s), st.set(e + t, null));
          });
      for (let e = 9; e >= 0; e--) t(65 + e, 70 + e);
      const a = { 59: 55, 55: 56, 60: 57, 61: 58, 56: 59, 62: 60, 57: 61, 63: 62, 64: 63, 58: 64 },
        s = {};
      (e.forEach((e) =>
        Object.keys(a).forEach((t) => {
          s[e + t] = st.get(e + t, null);
        }),
      ),
        e.forEach((e) => Object.keys(a).forEach((t) => st.set(e + a[t], s[e + t]))));
      const n = st.get("last", null);
      (n &&
        "match3" === n.g &&
        !n.daily &&
        (n.lv >= 65 ? (n.lv += 5) : void 0 !== a[n.lv] && (n.lv = a[n.lv]), st.set("last", n)),
        st.set("mig:m370", 1));
    } catch (e) {}
  })(),
  (() => {
    try {
      if (st.get("mig:dm11", 0)) return;
      const e = [ckey("demenage") + ":", "p:demenage:", "k:demenage:"];
      for (let t = 9; t >= 0; t--)
        e.forEach((e) => {
          const a = st.get(e + (10 + t), null);
          (st.set(e + (11 + t), a), st.set(e + (10 + t), null));
        });
      for (let e = 0; e < 10; e++) st.set("p:demenage:" + e, null);
      st.set("mig:dm11", 1);
    } catch (e) {}
  })(),
  (() => {
    const e = (e) => document.querySelector(e),
      t = "nt:log",
      a = () => {
        const e = st.get(t, []);
        return Array.isArray(e) ? e : [];
      };
    try {
      const e = a(),
        s = e.filter((e) => !String(e.id || "").startsWith("aqf"));
      s.length !== e.length && st.set(t, s);
    } catch (e) {}
    const s = () => {
      const t = (() => {
          const e = new Set();
          try {
            Object.values(SC.G || {}).some((e) => e && !e.e && e.t === e.p.indexOf(SO.uid)) &&
              e.add("scrabble");
          } catch (e) {}
          try {
            Object.keys(CH.G || {}).some((e) => CH.G[e] && "me" === chStat(e).k) && e.add("chess");
          } catch (e) {}
          try {
            unMine().some(([e, t]) => "play" === t.st && t.S && t.S[t.t] && t.S[t.t].u === SO.uid) &&
              e.add("hoho");
          } catch (e) {}
          return e;
        })(),
        a = e("#nav [data-v=games]");
      if (a) {
        let e = a.querySelector(".tdot");
        (e ||
          (a.insertAdjacentHTML("beforeend", '<i class="ndot tdot" hidden></i>'),
          (e = a.querySelector(".tdot"))),
          (e.hidden = !t.size));
      }
      ["scrabble", "chess", "hoho"].forEach((e) =>
        document.querySelectorAll(".tile.pt-" + e).forEach((a) => {
          let s = a.querySelector(".tdot");
          t.has(e) && !s
            ? a.insertAdjacentHTML("beforeend", '<i class="ndot tdot" aria-label="À toi de jouer"></i>')
            : !t.has(e) && s && s.remove();
        }),
      );
    };
    (setInterval(s, 1500), setTimeout(s, 300));
    const n = () => {
      const e = [];
      try {
        Object.entries(SC.G || {}).forEach(([t, a]) => {
          a &&
            !a.e &&
            e.push({
              g: "scrabble",
              ic: "Ⓛ",
              n: "Motuiles",
              w: "contre " + scrNm(t),
              me: a.t === a.p.indexOf(SO.uid),
            });
        });
      } catch (e) {}
      try {
        Object.keys(CH.G || {}).forEach((t) => {
          const a = CH.G[t],
            s = a && chStat(t).k;
          !a ||
            ("me" !== s && "them" !== s) ||
            e.push({ g: "chess", ic: "♞", n: "Échecs", w: "contre " + chNm(t), me: "me" === s });
        });
      } catch (e) {}
      try {
        unMine().forEach(([t, a]) => {
          ("play" !== a.st && "lobby" !== a.st) ||
            e.push({
              g: "hoho",
              ic: "🃏",
              n: "HoHo",
              w: "lobby" === a.st ? "salon en attente" : (a.S || []).length + " joueurs",
              me: "play" === a.st && a.S && a.S[a.t] && a.S[a.t].u === SO.uid,
            });
        });
      } catch (e) {}
      try {
        (window.ahInv ? ahInv() : []).forEach((t) =>
          e.push({ g: "airhockey", ic: "🏒", n: "Air hockey", w: "invitation de " + t.nm, me: !0 }),
        );
      } catch (e) {}
      return e;
    };
    ((window.mpLink = () => {
      const e = n().filter((e) => e.me).length;
      return `<button class="mplk" data-a="mpOpen">Parties en cours${e ? ` <b>${e}</b>` : ""}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>`;
    }),
      Object.assign(act, {
        mpOpen: () => {
          const t = n(),
            a = e("#mpo");
          a && a.remove();
          const s = document.createElement("div");
          ((s.className = "sfr"),
            (s.id = "mpo"),
            s.setAttribute("role", "dialog"),
            s.setAttribute("aria-modal", "true"),
            (s.innerHTML = `<div class="glass sfc"><h2 style="margin:0">Parties en cours</h2>${t.length ? `<div class="mpl">${t.map((e) => `<button data-a="mpGo" data-v="${e.g}"><i>${e.ic}</i><span><b>${esc(e.n)}</b><small>${esc(e.w)}</small></span><em class="${e.me ? "" : "w"}">${e.me ? "À toi" : "En attente"}</em></button>`).join("")}</div>` : '<p class="note" style="margin:14px 0">Aucune partie multijoueur en cours. Lance une partie de Motuiles, d’Échecs ou de HoHo avec tes amis.</p>'}<button class="btn alt" data-a="mpx">Fermer</button></div>`),
            document.body.appendChild(s));
        },
        mpx: () => {
          const t = e("#mpo");
          t && t.remove();
        },
        mpGo: (t) => {
          const a = e("#mpo");
          (a && a.remove(), act.open(t));
        },
      }));
    const o = (e, t) => {
        const a = st.get("nt:e", {});
        return t
          ? (a[e] || ((a[e] = e + ":" + Date.now()), st.set("nt:e", a)), a[e])
          : (a[e] && ((a[e] = ""), st.set("nt:e", a)), "");
      },
      i = () => a().filter((e) => !e.r).length;
    function r() {
      const t = i(),
        a = e("#nav [data-v=daily]");
      if (a) {
        let e = a.querySelector(".ntdot");
        (e ||
          (a.insertAdjacentHTML("beforeend", '<i class="ndot ntdot" hidden></i>'),
          (e = a.querySelector(".ntdot"))),
          (e.hidden = !t));
      }
      const s = e(".ntb");
      s && (s.outerHTML = ntBell());
    }
    function l(t, a) {
      if ((f(), "aqua" === t)) {
        const t = e("#nav [data-v=aqua]");
        t && t.click();
      } else
        "day" === t
          ? dayScreen()
          : "soc" === t
            ? socScreen()
            : "scr" === t
              ? a
                ? scrOpen(a)
                : scrHub()
              : "chess" === t
                ? a
                  ? (act.open("chess"), setTimeout(() => act.chOpen(a), 150))
                  : chHub()
                : "hoho" === t
                  ? a
                    ? unRoom(a)
                    : unHub()
                  : "chg" === t && window.chgOpen && chgOpen();
    }
    function nx(e) {
      if (!e) return;
      const s = st.get("nt:dis", []);
      s.includes(e) || (s.push(e), st.set("nt:dis", s.slice(-200)));
      st.set(
        t,
        a().filter((t) => t.id !== e),
      );
      try {
        r();
      } catch (e) {}
    }
    function c() {
      let s = a();
      const n = (function () {
          const e = [],
            t = (t, a, s, n, o, i) => {
              t && e.push({ id: t, ic: a, t: s, x: n, a: o, v: i || "" });
            };
          t(
            o("chg1117", !0),
            "✨",
            "Nouveautés",
            "Nouveaux jeux, Salle de jeux, mode calme… découvre tout ce qui a changé",
            "chg",
          );
          try {
            const e = aqRead(),
              a = aqMt(e).late && aqOn(e).length,
              s = aqHg(e).length;
            (t(o("aqc", !!a), "🫧", "Aquarium", "Ton aquarium a besoin d’entretien", "aqua"),
              t(
                o("aqh", !a && s > 0),
                "🐟",
                "Aquarium",
                s > 1 ? "Tes poissons ont faim" : "Ton poisson a faim",
                "aqua",
              ));
          } catch (e) {}
          try {
            const e = styRead();
            ([
              [10, "Les décorations de Noël sont débloquées dans l’aquarium"],
              [20, "Le Poisson Père Noël est débloqué dans l’aquarium"],
              [30, "Le fond « Nuit de Noël » et le Poisson sapin de Noël sont débloqués dans l’aquarium"],
            ].forEach(([a, s]) => t(o("xu" + a, (0 | e.xp) >= XM(a)), "🎄", "Aquarium de Noël", s, "aqua")),
              sxOk(e) &&
                t(
                  o("stx", (e.xp || 0) < XN() && xDust(e) >= 10 && !UNL()),
                  "🎄",
                  "Un noël pour Zeni",
                  "Un sapin est prêt : Zeni peut avancer",
                  "day",
                ));
          } catch (e) {}
          try {
            const e = st.get("soc:seen", {});
            Object.entries(SO.rec || {}).forEach(([a, s]) => {
              s > (+e[a] || 0) &&
                t(
                  "gift:" + a + ":" + s,
                  "🎁",
                  "Cadeau",
                  ((SO.P[a] && SO.P[a].name) || "Un ami") + " t’a offert des 🫧",
                  "soc",
                );
            });
          } catch (e) {}
          try {
            Object.entries(SC.G || {}).forEach(([e, a]) => {
              a &&
                !a.e &&
                a.t === a.p.indexOf(SO.uid) &&
                t("scr:" + a.id + ":" + a.n, "Ⓛ", "Motuiles", "À toi de jouer contre " + scrNm(e), "scr", e);
            });
          } catch (e) {}
          try {
            Object.keys(CH.G || {}).forEach((e) => {
              const a = CH.G[e];
              a &&
                "me" === chStat(e).k &&
                t(
                  "ch:" + a.id + ":" + a.mv.length,
                  "♞",
                  "Échecs",
                  "À toi de jouer contre " + chNm(e),
                  "chess",
                  e,
                );
            });
          } catch (e) {}
          try {
            unMine().forEach(([e, a]) => {
              const s = (a.nms && a.nms[a.h]) || scrNm(a.h);
              "lobby" !== a.st || a.h === SO.uid || unJoined(a, e, SO.uid)
                ? "play" !== a.st ||
                  !a.S.some((e) => e.u === SO.uid) ||
                  ("room" === UN.scr && UN.room === e) ||
                  t("hoho:go:" + a.id, "🃏", "HoHo", "La partie de HoHo a commencé", "hoho", e)
                : t("hoho:inv:" + a.id, "🃏", "HoHo", s + " t’invite à une partie", "hoho", e);
            });
          } catch (e) {}
          return e;
        })(),
        i = new Set(n.map((e) => e.id)),
        c = SO && "ok" === SO.st,
        f = s.filter((e) => {
          const t = String(e.id || "");
          return i.has(t) || !(/^(aqc|aqh):/.test(t) || (c && /^(gift|scr|ch|hoho):/.test(t)));
        });
      f.length !== s.length && (st.set(t, f), (s = f), e("#ntp") && d());
      const u = new Set(s.map((e) => e.id)),
        D = new Set(st.get("nt:dis", [])),
        h = n.filter((e) => !u.has(e.id) && !D.has(e.id));
      if (h.length) {
        const a = Date.now();
        (h.forEach((e) => {
          ((e.at = a), (e.r = 0));
        }),
          st.set(t, [...h.reverse(), ...s].slice(0, 50)),
          (function (t) {
            let a = e("#ntt");
            (a ||
              ((a = document.createElement("button")),
              (a.id = "ntt"),
              (a.className = "ntt"),
              (a.type = "button"),
              document.body.appendChild(a),
              a.addEventListener("click", () => {
                (a.classList.remove("on"), nx(a.dataset.id), l(a.dataset.a, a.dataset.v));
              })),
              (a.dataset.id = t.id),
              (a.dataset.a = t.a),
              (a.dataset.v = t.v || ""),
              (a.innerHTML = `<i>${t.ic}</i><span><b>${esc(t.t)}</b><small>${esc(t.x)}</small></span>`),
              a.classList.remove("on"),
              a.offsetWidth,
              a.classList.add("on"),
              clearTimeout(a._t),
              (a._t = setTimeout(() => a.classList.remove("on"), 4800)));
            try {
              sfx(880, 0.12);
            } catch (e) {}
          })(h[0]),
          e("#ntp") && d());
      }
      r();
    }
    function d() {
      const t = e("#ntp");
      if (!t) return;
      const s = a();
      t.innerHTML = `<section class="glass ntps" role="dialog" aria-label="Notifications"><div class="ntph"><h2>Notifications</h2><button class="lnk" data-a="ntClr"${s.length ? "" : " hidden"}>Tout effacer</button><button class="shb" data-a="ntClose" aria-label="Fermer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>\n  <div class="ntl">${
        s.length
          ? s
              .map(
                (e, t) =>
                  `<button class="nti${e.r ? "" : " nw"}" data-a="ntGo" data-v="${t}"><i>${e.ic}</i><span><b>${esc(e.t)}</b><small>${esc(e.x)}</small><em>${((
                    e,
                  ) => {
                    const t = Math.round((Date.now() - e) / 6e4);
                    return t < 1
                      ? "à l’instant"
                      : t < 60
                        ? "il y a " + t + " min"
                        : t < 1440
                          ? "il y a " + Math.round(t / 60) + " h"
                          : "il y a " + Math.round(t / 1440) + " j";
                  })(e.at)}</em></span></button>`,
              )
              .join("")
          : '<p class="note" style="text-align:center;margin:24px 0">Aucune notification pour l’instant.<br>Les invitations, les poissons qui ont faim et les cadeaux arriveront ici.</p>'
      }</div></section>`;
    }
    function f() {
      const t = e("#ntp");
      t && t.remove();
    }
    ((window.ntBell = () => {
      const e = i();
      return `<button class="shb ntb" data-a="ntOpen" aria-label="Notifications${e ? " : " + e + " nouvelle" + (e > 1 ? "s" : "") : ""}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/></svg>${e ? `<b class="ntc">${e > 9 ? "9+" : e}</b>` : ""}</button>`;
    }),
      Object.assign(act, {
        ntOpen: () => {
          f();
          const e = document.createElement("div");
          ((e.id = "ntp"),
            (e.className = "ntp"),
            e.addEventListener("click", (t) => {
              t.target === e && f();
            }),
            document.body.appendChild(e),
            d(),
            a().some((e) => !e.r) &&
              setTimeout(() => {
                (st.set(
                  t,
                  a().map((e) => Object.assign(e, { r: 1 })),
                ),
                  r());
              }, 1200));
        },
        ntClose: f,
        ntClr: () => {
          const q = st.get("nt:dis", []);
          (a().forEach((e) => {
            e && e.id && !q.includes(e.id) && q.push(e.id);
          }),
            st.set("nt:dis", q.slice(-200)),
            st.set(t, []),
            d(),
            r());
        },
        ntGo: (e) => {
          const t = a()[+e];
          t && (nx(t.id), l(t.a, t.v));
        },
      }),
      setTimeout(c, 2500),
      setInterval(c, 4e3));
  })(),
  document.addEventListener(
    "toggle",
    (e) => {
      e.target.classList && e.target.classList.contains("gdet") && (window.GDO = e.target.open);
    },
    !0,
  ));
try {
  30 !== CHART.length ||
    window.__chfix ||
    ((window.__chfix = 1),
    ([CHART[11], CHART[19]] = [CHART[19], CHART[11]]),
    CHART.splice(20, 0, ...CHN30),
    CHU.forEach((e) => {
      11 === e.ar && (e.ar = 19);
    }));
} catch (e) {}
try {
  if (!st.get("chm30", 0)) {
    st.set("chm30", 1);
    for (let e = 9; e >= 0; e--) {
      const t = 20 + e,
        a = 30 + e;
      for (const e of ["c:cherche:", "k:cherche:", "p:cherche:"]) {
        const s = st.get(e + t, void 0);
        null != s && !1 !== s && "" !== s && (st.set(e + a, s), st.set(e + t, "p:cherche:" === e && null));
      }
    }
  }
} catch (e) {}
try {
  if (!st.get("chm35", 0)) {
    st.set("chm35", 1);
    for (let e = 9; e >= 0; e--) {
      const t = 30 + e,
        a = 35 + e;
      for (const e of ["c:cherche:", "k:cherche:", "p:cherche:"]) {
        const s = st.get(e + t, void 0);
        null != s && !1 !== s && "" !== s && (st.set(e + a, s), st.set(e + t, "p:cherche:" === e && null));
      }
    }
  }
} catch (e) {}
