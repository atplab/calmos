(() => {
  /* Nonogramme en couleur : 70 images faites main, puis images créées à l’infini */
  const NI = [
    ["Cœur", "f2727f", ".a.a./aaaaa/aaaaa/.aaa./..a.."],
    ["Sapin", "5cc27a,9a6a3a", "..a../.aaa./aaaaa/..b../..b.."],
    ["Maison", "e8645a,f2d3a0", "..a../.aaa./aaaaa/.bbb./.b.b."],
    ["Flocon", "8fd3ff", "a.a.a/.aaa./aaaaa/.aaa./a.a.a"],
    ["Champignon", "e8645a,ffffff,f2d3a0", ".aaa./aabaa/aaaaa/..c../..c.."],
    ["Lune", "ffd166", ".aaa./aa.../a..../aa.../.aaa."],
    ["Tasse", "c98a5a,ffffff", ".b.b./aaaa./aaa.a/aaaa./.aa.."],
    ["Étoile", "ffd166", "..a../.aaa./aaaaa/.aaa./.a.a."],
    ["Fleur", "ff8fb8,ffd166,5cc27a", ".a.a./aabaa/.a.a./..c../.cc.."],
    ["Pomme", "e8645a,7a5a3a", "..b../.aaa./aaaaa/aaaaa/.a.a."],
    ["Cloche", "ffd166,9a6a3a", "..a../.aaa./.aaa./aaaaa/..b.."],
    ["Bonhomme", "ffffff,ff9a3a", "..a../.aba./..a../.aaa./.aaa."],
    ["Flèche", "7ec8f2", "..a../.aaa./a.a.a/..a../..a.."],
    ["Bateau", "ffffff,a0703a", "..a../.aa../aaa../bbbbb/.bbb."],
    ["Cadeau", "e8645a,ffd166", ".b.b./bbbbb/aabaa/aabaa/aabaa"],
    ["Chat", "a8b0c8,7ee08a", "a...a/aaaaa/ababa/aaaaa/.aaa."],
    ["Note", "c8a0ff", "..aaa/..a.a/..a../.aa../aaa.."],
    ["Goutte", "7ec8f2", "..a../.aaa./aaaaa/aaaaa/.aaa."],
    ["Feuille", "5cc27a,9a6a3a", "...aa/.aaaa/.aaa./aaa../b...."],
    ["Sourire", "ffd166,4a4f7a", ".aaa./ababa/aaaaa/abbba/.aaa."],
    [
      "Renard",
      "ff9a3a,ffffff,4a4f7a",
      "a......a/aa....aa/aaaaaaaa/acaaaaca/baaaaaab/bbbccbbb/.bbbbbb./..bbbb..",
    ],
    [
      "Hibou",
      "a0703a,f2e2c4,ffd166",
      "a......a/aaaaaaaa/abbaabba/abcaacba/aaaccaaa/.aaaaaa./.abbbba./..c..c..",
    ],
    [
      "Sapin décoré",
      "5cc27a,e8645a,ffd166,9a6a3a",
      "...cc.../...aa.../..aaaa../..abaa../.aaaaaa./.aaaaba./aabaaaaa/...dd...",
    ],
    ["Bonnet", "e8645a,ffffff", "...bb.../..aaaa../.aaaaaa./.aaaaaa./aaaaaaaa/bbbbbbbb/bbbbbbbb/........"],
    ["Mitaine", "7ec8f2,ffffff", ".aaa..../aaaa..../aaaa.aa./aaaaaaa./aaaaaaa./aaaaaa../bbbbb.../bbbbb..."],
    [
      "Chocolat chaud",
      "e8645a,8a5a3a,ffffff,b8c0d8",
      "......../..c..c../aaaaaa../abbbbaa./aaaaaa.a/aaaaaaa./.aaaa.../dddddddd",
    ],
    [
      "Pingouin",
      "4a4f7a,ffffff,ff9a3a",
      "..aaaa../.aaaaaa./.abaaba./.aaccaa./aabbbbaa/aabbbbaa/.abbbba./..c..c..",
    ],
    [
      "Champignon",
      "e8645a,ffffff,f2d3a0",
      "..aaaa../.abaaba./aaaaaaaa/abaaaaba/aaaaaaaa/..cccc../..cccc../.cccccc.",
    ],
    [
      "Poisson",
      "ff9a3a,ffffff,4a4f7a",
      "...aa.../..aaaa.a/.acaaaaa/aaaaaaaa/.aaaaaaa/..aaaa.a/...aa.../........",
    ],
    [
      "Papillon",
      "c8a0ff,ff8fb8,4a4f7a",
      "aa....aa/aaa..aaa/abaccaba/aaaccaaa/..bccb../.bbccbb./bbbccbbb/bb....bb",
    ],
    ["Étoile", "ffd166", "...aa.../...aa.../aaaaaaaa/.aaaaaa./..aaaa../aaaaaaa./.aa..aa./a......a"],
    ["Cœur", "e8645a,ffb0c0", ".aa..aa./abaaaaaa/aaaaaaaa/aaaaaaaa/.aaaaaa./..aaaa../...aa.../........"],
    [
      "Maison",
      "e8645a,f2d3a0,7ec8f2,9a6a3a",
      "...aa.../..aaaa../.aaaaaa./aaaaaaaa/.bbbbbb./.bcbbdb./.bbbbdb./.bbbbdb.",
    ],
    [
      "Chat",
      "a8b0c8,7ee08a,ff8fb8",
      "a......a/aa....aa/aaaaaaaa/abaaaaba/aaaccaaa/.aaaaaa./..aaaa../........",
    ],
    [
      "Bougie",
      "ffffff,ffd166,ff9a3a",
      "...b..../..bcb.../...b..../..aaa.../..aaa.../..aaa.../..aaa.../.aaaaa..",
    ],
    [
      "Glace",
      "ff8fb8,e8c08a,8a5a3a",
      "..aaaa../.aaaaaa./aacaacaa/aaaaaaaa/.bbbbbb./..bbbb../..bbbb../...bb...",
    ],
    [
      "Fusée",
      "ffffff,e8645a,7ec8f2,ff9a3a",
      "...bb.../..aaaa../..acca../..acca../..aaaa../.baaaab./bb.aa.bb/...dd...",
    ],
    ["Arbre", "5cc27a,9a6a3a", ".aaaaaa./aaaaaaaa/aaaaaaaa/aaaaaaaa/.aaaaaa./...bb.../...bb.../..bbbb.."],
    ["Nuit", "ffd166", ".aaa...a/.aa....a/aa....../aa...a../aa....../.aa...../..aa..../........"],
    ["Parapluie", "7ec8f2,4a4f7a", "...aa.../.aaaaaa./aaabaaaa/...b..../...b..../...b..../...b.b../....b..."],
    ["Cerises", "e8645a,5cc27a", "....b.b./....bb../..bb.b../..b..b../.aa..aa./aaa.aaa./aaa.aaa./.a...a.."],
    [
      "Bonhomme de neige",
      "ffffff,ff9a3a,4a4f7a",
      "..cccc../.cccccc./..aaaa../..caac../..abaa../.aaaaaa./aaacaaaa/aaaaaaaa",
    ],
    ["Ancre", "7ec8f2", "...aa.../..a..a../...aa.../aaaaaaaa/a..aa.a./a..aa..a/.a.aa.a./..aaaa.."],
    ["Couronne", "ffd166,e8645a", "......../a..aa..a/aa.aa.aa/aaaaaaaa/abaaaaba/aaaaaaaa/aaaaaaaa/........"],
    ["Lanterne", "4a4f7a,ffd166", "...aa.../..a..a../.aaaaaa./.abbbba./.abbbba./.abbbba./.aaaaaa./..aaaa.."],
    [
      "Pomme",
      "e8645a,5cc27a,8a5a3a",
      "...cc.../...c.bb./.aaaaaa./aaaaaaaa/aaaaaaaa/aaaaaaaa/.aaaaaa./..a..a..",
    ],
    [
      "Baleine",
      "7ec8f2,ffffff,4a4f7a",
      ".bb.b.../..bb..../...b..../.aaaaa.a/aaaaaaaa/acaaaaa./aaaaaa../.aaaa...",
    ],
    [
      "Gâteau",
      "ff8fb8,ffffff,e8645a,ffd166",
      "...c..../...d..../..bbbb../..aaaa../.bbbbbb./.aaaaaa./bbbbbbbb/aaaaaaaa",
    ],
    ["Cadeau", "5cc27a,e8645a", "..b..b../...bb.../bbbbbbbb/aaabbaaa/aaabbaaa/bbbbbbbb/aaabbaaa/aaabbaaa"],
    ["Flocon", "8fd3ff,cfeaff", "...aa.../.a.aa.a./..abba../aabbbbaa/aabbbbaa/..abba../.a.aa.a./...aa..."],
    [
      "Maison enneigée",
      "ffffff,e8645a,8a5a3a,ffd166",
      "....aa..../...aaaa.../..aaaaaa../.aaaaaaaa./aaaaaaaaaa/.bbbbbbbb./.bddbbddb./.bddbbddb./.bbbccbbb./.bbbccbbb.",
    ],
    [
      "Ours polaire",
      "ffffff,4a4f7a,ff8fb8",
      ".aa....aa./acaaaaaaca/.aaaaaaaa./aabaaaabaa/aaaaaaaaaa/aaaabbaaaa/aaabaabaaa/.aaaaaaaa./..aaaaaa../...aaaa...",
    ],
    [
      "Montagne",
      "ffffff,8a94b0,5cc27a",
      "....a...../...aaa..../..aabaa.../..bbbbb.a./.bbbbbbaaa/.bbbbbbbab/bbbbbbbbbb/cccccccccc/cccccccccc/cccccccccc",
    ],
    [
      "Tasse fumante",
      "3fc0b0,ffffff,8a5a3a",
      ".b..b...../..b..b..../.b..b...../aaaaaaa.../acccccaaa./aaaaaaa.a./aaaaaaa.a./aaaaaaaaa./.aaaaa..../bbbbbbbbb.",
    ],
    [
      "Grand sapin",
      "5cc27a,9a6a3a,ffd166,e8645a",
      "....cc..../....aa..../...aaaa.../...adaa.../..aaaaaa../..aaaada../.aaaaaaaa./.adaaaaaa./aaaaaaaada/....bb....",
    ],
    [
      "Chouette",
      "a0703a,f2e2c4,ffd166,4a4f7a",
      "a........a/aa......aa/aaaaaaaaaa/abbaaaabba/bddbaabddb/abbaccabba/.abbbbbba./.abbbbbba./..aaaaaa../..c....c..",
    ],
    [
      "Phare",
      "e8645a,ffffff,ffd166,7ec8f2",
      "....cc..../...aaaa.../....bb..../....aa..../....bb..../...aaaa.../...bbbb.../..aaaaaa../dddddddddd/dddddddddd",
    ],
    [
      "Lapin",
      "ffffff,ff8fb8,4a4f7a",
      "..a....a../..ab..ba../..ab..ba../..aaaaaa../.aaaaaaaa./.acaaaaca./.aaabbaaa./..aaaaaa../.aaaaaaaa./aaaaaaaaaa",
    ],
    [
      "Grand cœur",
      "e8645a,ffb0c0",
      ".aaa..aaa./aabaaaaaaa/abaaaaaaaa/aaaaaaaaaa/aaaaaaaaaa/.aaaaaaaa./..aaaaaa../...aaaa.../....aa..../..........",
    ],
    [
      "Voilier",
      "ffffff,e8645a,a0703a,7ec8f2",
      "....c...../...bca..../..bbcaa.../.bbbcaaa../bbbbcaaaa./....c...../cccccccccc/.cccccccc./dddddddddd/.d..d..d..",
    ],
    [
      "Manchot",
      "4a4f7a,ffffff,ff9a3a",
      "...aaaa.../..aaaaaa../..abaaba../..aaccaa../.aabbbbaa./aaabbbbaaa/aaabbbbaaa/..abbbba../..abbbba../..cc..cc..",
    ],
    [
      "Amanite",
      "e8645a,ffffff,f2d3a0",
      "...aaaa.../.aaabaaaa./aabaaaabaa/aaaaaaaaaa/abaaabaaba/aaaaaaaaaa/...cccc.../...cccc.../...cccc.../..cccccc..",
    ],
    [
      "Fusée lunaire",
      "ffffff,e8645a,7ec8f2,ff9a3a",
      "....bb..../...bbbb.../...aaaa.../...acca.../...acca.../..baaaab../..baaaab../.bbaaaabb./.b..dd..b./....dd....",
    ],
    [
      "Clochette",
      "ffd166,e8645a",
      "....bb..../....aa..../...aaaa.../..aaaaaa../..aaaaaa../..aaaaaa../.aaaaaaaa./aaaaaaaaaa/....bb..../..........",
    ],
    [
      "Grand papillon",
      "7ec8f2,ffd166,4a4f7a",
      "aaa....aaa/abaa..aaba/aaaaccaaaa/aabaccabaa/.aaaccaaa./...acca.../.bbbcbbb../.bbbccbbb./.bb.cc.bb./....cc....",
    ],
    [
      "Montgolfière",
      "e8645a,ffd166,a0703a",
      "...aaaa.../.aabbbbaa./.aaaaaaaa./aabbbbbbaa/aaaaaaaaaa/.aabbbbaa./..aaaaaa../...c..c.../...cccc.../...cccc...",
    ],
    [
      "Igloo",
      "ffffff,a8d8f0,4a4f7a",
      "........../........../...aaaa.../.aaaaaaaa./.bbbbbbbb./aaaaaaaaaa/bbbbbbbbbb/aaaaccaaaa/aaaccccaaa/aaaccccaaa",
    ],
    [
      "Cerf-volant",
      "e8645a,7ec8f2,ffffff",
      "....a...../...aab..../..aaabb.../.aaaabbb../aaaaabbbb./.bbbbaaa../..bbbaa.../...bca..../....c...../.....c.c..",
    ],
    [
      "Étoile filante",
      "ffd166,ff9a3a",
      "......a.../.....aaa../..aaaaaaaa/...aaaaaa./...bbaaa../..bbaa.aa./.bb......./bb......../b........./..........",
    ],
    [
      "Bonhomme et écharpe",
      "ffffff,ff9a3a,4a4f7a,e8645a",
      "...cccc.../..cccccc../...aaaa.../...caac.../...aaba.../..dddddd../.aaaacaaa./aaaaaaaaaa/aaaacaaaaa/.aaaaaaaa.",
    ],
  ];
  const NH = NI.length;
  const PL = [
    ["7ec8f2", "ffffff", "3a6ab8", "ffd166"],
    ["ff8fb8", "ffd166", "5cc27a", "8a5a3a"],
    ["5cc27a", "9a6a3a", "ffd166", "e8645a"],
    ["c8a0ff", "ff8fb8", "4a4f7a", "ffffff"],
    ["ff9a3a", "ffffff", "4a4f7a", "7ec8f2"],
    ["e8645a", "ffffff", "f2d3a0", "4a4f7a"],
    ["3fc0b0", "ffffff", "ffd166", "3a6ab8"],
    ["a8b0c8", "7ee08a", "ff8fb8", "4a4f7a"],
  ];
  const parse = ([n, p, r]) => {
    const R = r.split("/"),
      H = R.length,
      W = R[0].length,
      g = [];
    R.forEach((l) => {
      for (const c of l) g.push(c === "." ? 0 : c.charCodeAt(0) - 96);
    });
    return { name: n, pal: p.split(","), W, H, g };
  };
  const clue = (a) => {
    const r = [];
    let i = 0;
    while (i < a.length) {
      const c = a[i];
      if (!c || c < 0) {
        i++;
        continue;
      }
      let j = i;
      while (j < a.length && a[j] === c) j++;
      r.push([j - i, c]);
      i = j;
    }
    return r;
  };
  const rowsOf = (g, W, H) => [...Array(H)].map((_, y) => g.slice(y * W, y * W + W));
  const colsOf = (g, W, H) => [...Array(W)].map((_, x) => [...Array(H)].map((_, y) => g[y * W + x]));
  function ls(m, cl) {
    const n = m.length,
      k = cl.length,
      F = [];
    for (let i = 0; i <= n; i++) F.push(new Uint8Array(k + 1));
    F[n][k] = 1;
    const fit = (i, j) => {
      const [L, c] = cl[j],
        b = 1 << c;
      if (i + L > n) return 0;
      for (let x = i; x < i + L; x++) if (!(m[x] & b)) return 0;
      const g = j + 1 < k && cl[j + 1][1] === c;
      if (g) return i + L < n && m[i + L] & 1 ? 2 : 0;
      return 1;
    };
    for (let i = n - 1; i >= 0; i--)
      for (let j = k; j >= 0; j--) {
        let ok = m[i] & 1 && F[i + 1][j];
        if (!ok && j < k) {
          const f = fit(i, j),
            L = cl[j][0];
          ok = f === 1 ? F[i + L][j + 1] : f === 2 ? F[i + L + 1][j + 1] : 0;
        }
        F[i][j] = ok ? 1 : 0;
      }
    if (!F[0][0]) return null;
    const P = new Uint8Array(n),
      R = [];
    for (let i = 0; i <= n; i++) R.push(new Uint8Array(k + 1));
    R[0][0] = 1;
    for (let i = 0; i < n; i++)
      for (let j = 0; j <= k; j++) {
        if (!R[i][j] || !F[i][j]) continue;
        if (m[i] & 1 && F[i + 1][j]) {
          P[i] |= 1;
          R[i + 1][j] = 1;
        }
        if (j < k) {
          const f = fit(i, j),
            [L, c] = cl[j];
          if ((f === 1 && F[i + L][j + 1]) || (f === 2 && F[i + L + 1][j + 1])) {
            for (let x = i; x < i + L; x++) P[x] |= 1 << c;
            if (f === 2) {
              P[i + L] |= 1;
              R[i + L + 1][j + 1] = 1;
            } else R[i + L][j + 1] = 1;
          }
        }
      }
    return P;
  }
  function solves(P) {
    const { W, H, g } = P,
      k = Math.max(...g),
      full = (2 << k) - 1,
      M = new Array(W * H).fill(full),
      RC = rowsOf(g, W, H).map(clue),
      CC = colsOf(g, W, H).map(clue);
    let ch = 1,
      it = 0;
    while (ch && it++ < 60) {
      ch = 0;
      for (let y = 0; y < H; y++) {
        const idx = [...Array(W)].map((_, x) => y * W + x),
          r = ls(
            idx.map((i) => M[i]),
            RC[y],
          );
        if (!r) return 0;
        idx.forEach((i, t) => {
          if (r[t] !== M[i]) {
            M[i] = r[t];
            ch = 1;
          }
        });
      }
      for (let x = 0; x < W; x++) {
        const idx = [...Array(H)].map((_, y) => y * W + x),
          r = ls(
            idx.map((i) => M[i]),
            CC[x],
          );
        if (!r) return 0;
        idx.forEach((i, t) => {
          if (r[t] !== M[i]) {
            M[i] = r[t];
            ch = 1;
          }
        });
      }
    }
    return M.every((v) => !(v & (v - 1)));
  }
  /* Générateurs d’images */
  const GEN = [
    [
      "Petite créature",
      (S, R, set) => {
        const hw = Math.ceil(S / 2);
        let m = [...Array(S)].map((_, y) =>
          [...Array(hw)].map((_, x) => {
            const dx = (hw - 1 - x) / hw,
              dy = (y - S / 2) / (S / 2);
            return R() < 0.85 - dx * dx * 0.9 - dy * dy * 0.5 ? 1 : 0;
          }),
        );
        for (let it = 0; it < 2; it++)
          m = m.map((r, y) =>
            r.map((v, x) => {
              let n = 0;
              for (let a = -1; a <= 1; a++)
                for (let b = -1; b <= 1; b++) {
                  const yy = y + a,
                    xx = x + b;
                  if (a || b)
                    n +=
                      yy >= 0 && yy < S && (xx < hw ? xx >= 0 && m[yy][xx] : m[yy][2 * hw - 1 - xx]) ? 1 : 0;
                }
              return n >= 5 ? 1 : n <= 2 ? 0 : v;
            }),
          );
        const g = [];
        for (let y = 0; y < S; y++)
          for (let x = 0; x < S; x++) {
            const hx = x < hw ? x : S - 1 - x;
            g.push(m[y][hx] ? 1 : 0);
          }
        const ey = Math.floor(S * (0.3 + 0.1 * R())),
          ex = Math.max(1, hw - 2 - ((R() * Math.max(1, hw - 3)) | 0));
        [ex, S - 1 - ex].forEach((x) => {
          g[ey * S + x] = 2;
          R() < 0.5 && (g[(ey + 1) * S + x] = 2);
        });
        for (let y = Math.floor(S * 0.55); y < S; y++)
          for (let x = 0; x < S; x++) g[y * S + x] === 1 && (y + x * 0) % 3 == 0 && (g[y * S + x] = 3);
        return g;
      },
    ],
    [
      "Flocon",
      (S, R) => {
        const c = (S - 1) / 2,
          g = [],
          T = [];
        const k = 2 + ((R() * 3) | 0),
          rr = [];
        for (let i = 0; i < S; i++) rr.push(R());
        for (let y = 0; y < S; y++)
          for (let x = 0; x < S; x++) {
            let a = Math.abs(x - c),
              b = Math.abs(y - c);
            if (a < b) [a, b] = [b, a];
            const d = Math.round(a),
              e = Math.round(b);
            let v = 0;
            if (e === 0 || e === d) v = 1;
            else if (rr[d] < 0.45 && e <= d * 0.5) v = 1;
            else if (rr[d + e] < 0.25) v = 1;
            if (d > c - 0.1 && e > 0 && e !== d) v = 0;
            g.push(v ? 1 + (d % k === 0 ? 1 : 0) + (e === d && d % 2 ? 1 : 0) : 0);
          }
        return g;
      },
    ],
    [
      "Paysage",
      (S, R) => {
        const g = new Array(S * S).fill(0),
          h1 = R() * 6.3,
          h2 = R() * 6.3,
          f1 = 1 + R() * 2,
          sx = (R() * S) | 0,
          sy = 1 + ((R() * S * 0.25) | 0),
          sr = 1 + S / 8;
        for (let x = 0; x < S; x++) {
          const a = Math.round(S * 0.55 + S * 0.12 * Math.sin((x / S) * f1 * 3 + h1)),
            b = Math.round(S * 0.75 + S * 0.08 * Math.sin((x / S) * 5 + h2));
          for (let y = 0; y < S; y++) {
            if (y >= b) g[y * S + x] = 3;
            else if (y >= a) g[y * S + x] = y === a ? 2 : 1;
          }
        }
        for (let y = 0; y < S; y++)
          for (let x = 0; x < S; x++)
            if (!g[y * S + x] && (x - sx) ** 2 + (y - sy) ** 2 <= sr * sr) g[y * S + x] = 4;
        return g;
      },
    ],
    [
      "Fleur",
      (S, R) => {
        const g = new Array(S * S).fill(0),
          cx = (S - 1) / 2,
          cy = S * 0.33,
          r = S * (0.18 + 0.06 * R()),
          pr = S * (0.11 + 0.04 * R()),
          np = 5 + ((R() * 3) | 0),
          o = R() * 6.3;
        for (let y = 0; y < S; y++)
          for (let x = 0; x < S; x++) {
            let v = 0;
            for (let p = 0; p < np; p++) {
              const a = o + (p * 6.283) / np,
                px = cx + Math.cos(a) * r,
                py = cy + Math.sin(a) * r;
              if ((x - px) ** 2 + (y - py) ** 2 <= pr * pr) v = 1;
            }
            if ((x - cx) ** 2 + (y - cy) ** 2 <= (pr * 0.9) ** 2) v = 2;
            if (!v && y > cy + r && Math.abs(x - cx) < 0.6) v = 3;
            g[y * S + x] = v;
          }
        const ly = Math.floor(S * 0.75);
        for (let i = 1; i <= Math.floor(S * 0.2); i++) {
          g[(ly - i + 1) * S + Math.floor(cx) + i] || (g[(ly - i + 1) * S + Math.floor(cx) + i] = 3);
        }
        return g;
      },
    ],
    [
      "Maison",
      (S, R) => {
        const g = new Array(S * S).fill(0),
          w = Math.floor(S * (0.6 + 0.25 * R())),
          l = Math.floor((S - w) / 2),
          rt = Math.floor(S * 0.38),
          top = S - 1;
        for (let y = 0; y < rt; y++) {
          const hw = Math.round((((y + 1) / rt) * w) / 2 + 1);
          for (let x = Math.max(0, Math.round(S / 2 - hw)); x < Math.min(S, Math.round(S / 2 + hw)); x++)
            g[y * S + x] = 1;
        }
        for (let y = rt; y <= top; y++) for (let x = l; x < l + w; x++) g[y * S + x] = 2;
        const dw = Math.max(1, Math.floor(w / 5)),
          dx = l + Math.floor(w * (0.2 + 0.5 * R()));
        for (let y = top - Math.floor(S * 0.28); y <= top; y++)
          for (let x = dx; x < dx + dw; x++) g[y * S + x] = 4;
        const wy = rt + 1 + ((R() * 2) | 0);
        [l + 1, l + w - 3].forEach((x) => {
          if (x < dx - 1 || x > dx + dw)
            for (let a = 0; a < 2; a++) for (let b = 0; b < 2; b++) g[(wy + a) * S + x + b] = 3;
        });
        return g;
      },
    ],
    [
      "Sapin",
      (S, R) => {
        const g = new Array(S * S).fill(0),
          c = (S - 1) / 2,
          L = 2 + ((R() * 2) | 0),
          th = Math.floor(S * 0.8);
        for (let y = 1; y < th; y++) {
          const seg = Math.floor((y - 1) / ((th - 1) / L)),
            yy = (y - 1) % Math.ceil((th - 1) / L),
            w = 1 + yy + seg * 1.2;
          for (let x = 0; x < S; x++)
            if (Math.abs(x - c) <= w && Math.abs(x - c) < S / 2) g[y * S + x] = R() < 0.12 ? 3 : 1;
        }
        g[Math.floor(c)] = 4;
        g[Math.ceil(c)] = 4;
        for (let y = th; y < S; y++) for (let x = Math.floor(c); x <= Math.ceil(c); x++) g[y * S + x] = 2;
        return g;
      },
    ],
    [
      "Poisson",
      (S, R) => {
        const g = new Array(S * S).fill(0),
          cx = S * 0.42,
          cy = (S - 1) / 2,
          rx = S * (0.3 + 0.06 * R()),
          ry = S * (0.22 + 0.08 * R()),
          st = 1 + ((R() * 2) | 0);
        for (let y = 0; y < S; y++)
          for (let x = 0; x < S; x++) {
            if (((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1)
              g[y * S + x] = Math.floor((x - cx + rx) / 2) % 3 === st ? 2 : 1;
            const tx = x - (cx + rx - 1);
            if (tx > 0 && Math.abs(y - cy) <= tx * 0.9 + 0.5 && x < S) g[y * S + x] = 3;
          }
        g[Math.round(cy - ry * 0.3) * S + Math.round(cx - rx * 0.55)] = 4;
        return g;
      },
    ],
    [
      "Champignon",
      (S, R) => {
        const g = new Array(S * S).fill(0),
          c = (S - 1) / 2,
          ch = Math.floor(S * (0.5 + 0.1 * R())),
          rx = S / 2,
          sw = Math.max(1, Math.floor(S * (0.15 + 0.1 * R())));
        for (let y = 0; y < ch; y++)
          for (let x = 0; x < S; x++)
            if (((x - c) / rx) ** 2 + ((y - ch) / ch) ** 2 <= 1) g[y * S + x] = R() < 0.14 ? 2 : 1;
        for (let y = ch; y < S; y++)
          for (let x = Math.round(c - sw); x <= Math.round(c + sw); x++) g[y * S + x] = 3;
        return g;
      },
    ],
    [
      "Cœur",
      (S, R) => {
        const g = new Array(S * S).fill(0),
          k = 2 + ((R() * 3) | 0),
          dir = R() < 0.5;
        for (let y = 0; y < S; y++)
          for (let x = 0; x < S; x++) {
            const X = (x - (S - 1) / 2) / (S / 2.2),
              Y = -(y - S * 0.45) / (S / 2.2);
            if ((X * X + Y * Y - 1) ** 3 - X * X * Y ** 3 <= 0)
              g[y * S + x] = 1 + ((dir ? x + y : y) % k === 0 ? 1 : 0);
          }
        return g;
      },
    ],
    [
      "Mosaïque",
      (S, R) => {
        const h = Math.ceil(S / 2),
          q = [...Array(h)].map(() => [...Array(h)].map(() => (R() < 0.55 ? 1 + ((R() * 3) | 0) : 0))),
          g = [];
        for (let y = 0; y < S; y++)
          for (let x = 0; x < S; x++) {
            const a = y < h ? y : S - 1 - y,
              b = x < h ? x : S - 1 - x;
            g.push(q[Math.min(a, b)][Math.max(a, b)]);
          }
        return g;
      },
    ],
  ];
  const LC = {};
  const HX = [
    [
      "Pomme",
      "e8645a,5cc27a,8a5a3a",
      {
        "10": ".......cb./......cbb./..aa.ca.../.aaaaaaaa./aaaaaaaaaa/aaaaaaaaaa/aaaaaaaaaa/.aaaaaaaa./..aa..aa../..........",
      },
    ],
    [
      "Orange",
      "ff9a3a,5cc27a,ffd166",
      {
        "10": "....b.b.../...bbbb.../..aaaaaa../.aaaaaaaa./aaaabaaaaa/aaaaaaaaaa/aaaaaaaaaa/.aaaaaaaa./..aaaaaa../...aaaa...",
      },
    ],
    [
      "Pêche",
      "ff9a8a,5cc27a,e8645a",
      {
        "10": ".....bb.../....bb.b../...aaaa.../..aaaaaa../.aaaaaaaa./.aaaaacaa./.aaaaacaa./..aaaacaa./...aaaaa../....aaa...",
      },
    ],
    [
      "Champignon",
      "e8645a,ffffff,f2d3a0",
      {
        "10": "...aaaa.../..aabaaaa./.aaaaabaa./aabaaaaaaa/aaaaaaabaa/........../...cccc.../...cccc.../...cccc.../..cccccc..",
      },
    ],
    [
      "Maïs",
      "ffd166,5cc27a",
      {
        "10": "....aa..../...aaaa.../...aaaa.../...aaaa.../...aaaa.../..baaaab../..bbaabb../...bbbb.../....bb..../....bb....",
      },
    ],
    [
      "Brocoli",
      "5cc27a,a0d050",
      {
        "10": "..aa.aa.../.aaaaaaa../.aaaaaaaa./..aaaaaa../...bbbb.../....bb..../....bb..../....bb..../...bbbb.../..........",
      },
    ],
    [
      "Tomate",
      "e8645a,5cc27a",
      {
        "10": "...b.bb.../....bbb.../..aabbaa../.aaaaaaaa./aaaaaaaaaa/aaaaaaaaaa/aaaaaaaaaa/.aaaaaaaa./..aaaaaa../..........",
      },
    ],
    [
      "Gaufre",
      "e0b070,c98a3a",
      {
        "10": "aabaabaaba/bbbbbbbbbb/aabaabaaba/aabaabaaba/bbbbbbbbbb/aabaabaaba/aabaabaaba/bbbbbbbbbb/aabaabaaba/..........",
      },
    ],
    [
      "Popcorn",
      "ffffff,e8645a,ffd166",
      {
        "10": ".aa.aa.aa./aaaaaaaaaa/.aaaaaaaa./.bbabbabba/..bababab./..bbabbab./..bababab./..bbabbab./...babab../...bbbbb..",
      },
    ],
    [
      "Ballon rouge",
      "e8645a,ffffff,a8b0c8",
      {
        "10": "..aaaa..../.aabaaaa../aabaaaaaa./aaaaaaaaa./aaaaaaaaa./.aaaaaaa../..aaaaa.../...aaa..../....a...../....c.....",
      },
    ],
    [
      "Cadeau",
      "e8645a,ffd166",
      {
        "10": ".bb....bb./b..b..b..b/.bbbbbbbb./aaaabbaaaa/aaaabbaaaa/bbbbbbbbbb/aaaabbaaaa/aaaabbaaaa/aaaabbaaaa/aaaabbaaaa",
      },
    ],
    [
      "Cloche",
      "ffd166,c98a3a",
      {
        "10": "....aa..../...aaaa.../..aaaaaa../..aaaaaa../.aaaaaaaa./.aaaaaaaa./aaaaaaaaaa/bbbbbbbbbb/....bb..../..........",
      },
    ],
    [
      "Bougie",
      "ffffff,ff9a3a,ffd166",
      {
        "10": ".....c..../....cbc.../....cbc.../.....b..../...aaaaa../...aaaaa../...aaaaa../...aaaaa../...aaaaa../..aaaaaaa.",
      },
    ],
    [
      "Lunettes",
      "4a4f7a,7ec8f2",
      {
        "10": "........../........../aaaaaaaaaa/abbbaabbba/abbbaabbba/abbbaabbba/.aaa..aaa./........../........../..........",
      },
    ],
    [
      "Chapeau haut-de-forme",
      "4a4f7a,e8645a",
      {
        "10": "..aaaaaa../..aaaaaa../..aaaaaa../..bbbbbb../..aaaaaa../..aaaaaa../.aaaaaaaa./aaaaaaaaaa/........../..........",
      },
    ],
    [
      "Couronne",
      "ffd166,e8645a,7ec8f2",
      {
        "10": "a...aa...a/aa..aa..aa/aaa.aa.aaa/aaaaaaaaaa/aaaaaaaaaa/abaaacaaba/aaaaaaaaaa/aaaaaaaaaa/........../..........",
      },
    ],
    [
      "Diamant",
      "7ec8f2,ffffff,3a8fd8",
      {
        "10": "..aaaaaa../.abaaaaaa./aabaaaaaaa/aaaaaaaaaa/.aaaaaaaa./..aaaaaa../...aaaa.../....aa..../........../..........",
      },
    ],
    [
      "Bouclier",
      "4a4f7a,e8645a,ffd166",
      {
        "10": "aaaaaaaaaa/abbbbbbbba/abbbccbbba/abbbccbbba/abbcccccba/.abbccbba./.abbccbba./..abbbba../...abba.../....aa....",
      },
    ],
    [
      "Cadenas",
      "a8b0c8,ffd166",
      {
        "10": "...aaaa.../..aa..aa../..a....a../..a....a../.bbbbbbbb./.bbbbbbbb./.bbbaabbb./.bbbaabbb./.bbbbbbbb./.bbbbbbbb.",
      },
    ],
    [
      "Livre",
      "3a8fd8,ffffff,ffd166",
      {
        "10": "aaaaaaaaaa/abbbbbbbba/abbbbbbbba/abbcccbbba/abbbbbbbba/abbbbbbbba/abbbbbbbba/aaaaaaaaaa/aaaaaaaaaa/..........",
      },
    ],
    [
      "Ampoule",
      "ffd166,a8b0c8",
      {
        "10": "...aaaa.../..aaaaaa../.aaaaaaaa./.aaaaaaaa./.aaaaaaaa./..aaaaaa../...aaaa.../...bbbb.../...bbbb.../....bb....",
      },
    ],
    [
      "Tambour",
      "e8645a,ffffff,c98a3a",
      {
        "10": ".bbbbbbbb./bbbbbbbbbb/.aaaaaaaa./.acacacac./.aacacaca./.acacacac./.aaaaaaaa./..aaaaaa../........../..........",
      },
    ],
    [
      "Manette",
      "4a4f7a,e8645a,7ec8f2",
      {
        "10": "........../.aaaaaaaa./aaaaaaaaaa/aabaaaacaa/abbbaaaaca/aabaaaaaca/aaaaaaaaaa/aaa....aaa/aa......aa/..........",
      },
    ],
    [
      "Téléphone",
      "4a4f7a,7ec8f2",
      {
        "10": "..aaaaaa../..abbbba../..abbbba../..abbbba../..abbbba../..abbbba../..abbbba../..abbbba../..aaaaaa../...aaaa...",
      },
    ],
    [
      "Appareil photo",
      "4a4f7a,a8b0c8,7ec8f2",
      {
        "10": "...aaaa..a/aaaaaaaaaa/abbbbbbbba/abbcccbbba/abbcbcbbba/abbcccbbba/abbbbbbbba/aaaaaaaaaa/........../..........",
      },
    ],
    [
      "Montre",
      "4a4f7a,ffffff,e8645a",
      {
        "10": "...aaaa.../...aaaa.../..abbbba../.abbbcbba./.abbbcbba./.abcccbba./..abbbba../...aaaa.../...aaaa.../..........",
      },
    ],
    [
      "Sac à dos",
      "e8645a,c0303a,ffd166",
      {
        "10": "...aaaa.../..aaaaaa../.aaaaaaaa./.aaaaaaaa./.abbbbbba./.abbccbba./.aaaaaaaa./.aaaaaaaa./.aaaaaaaa./..aaaaaa..",
      },
    ],
    [
      "Botte",
      "8a5a3a,c98a3a",
      {
        "10": "..aaaa..../..aaaa..../..aaaa..../..aaaa..../..aaaa..../..aaaa..../.aaaaaaa../aaaaaaaaaa/bbbbbbbbbb/..........",
      },
    ],
    [
      "Chaussette",
      "ffffff,e8645a",
      {
        "10": "..bbbb..../..aaaa..../..aaaa..../..aaaa..../..aaaa..../..aaaa..../.aaaaaaa../aaaaaaaaaa/aaaaaaaaaa/.bbbbbbbb.",
      },
    ],
    [
      "T-shirt",
      "3a8fd8,ffffff",
      {
        "10": ".aa....aa./aaaa..aaaa/aaaaaaaaaa/aaaaaaaaaa/.aaaaaaaa./..aaaaaa../..aaaaaa../..aaaaaa../..aaaaaa../..aaaaaa..",
      },
    ],
    [
      "Robe",
      "ff8fb8,ffffff",
      {
        "10": "...aaaa.../...a..a.../...aaaa.../..aaaaaa../..aaaaaa../.aaaaaaaa./.aaaaaaaa./aaaaaaaaaa/aaaaaaaaaa/bbbbbbbbbb",
      },
    ],
    [
      "Bonnet",
      "e8645a,ffffff,e0b070",
      {
        "10": "....bb..../...bbbb.../..aaaaaa../.aaaaaaaa./.aaaaaaaa./.aaaaaaaa./bbbbbbbbbb/bbbbbbbbbb/........../..........",
      },
    ],
    [
      "Voiture",
      "e8645a,7ec8f2,4a4f7a",
      {
        "10": "........../...aaaa.../..abbabb../.aabbaabba/aaaaaaaaaa/aaaaaaaaaa/aaaaaaaaaa/.cc....cc./.cc....cc./..........",
      },
    ],
    [
      "Camion",
      "ffd166,7ec8f2,4a4f7a",
      {
        "10": "aaaaaaaa../aaaaaaaabb/aaaaaaaabb/aaaaaaaaaa/aaaaaaaaaa/aaaaaaaaaa/.cc..a.cc./.cc....cc./........../..........",
      },
    ],
    [
      "Bus scolaire",
      "ffd166,7ec8f2,4a4f7a",
      {
        "10": "aaaaaaaaaa/abababab.a/abababab.a/aaaaaaaaaa/aaaaaaaaaa/aaaaaaaaaa/.cc....cc./.cc....cc./........../..........",
      },
    ],
    [
      "Avion",
      "a8b0c8,7ec8f2,e8645a",
      {
        "10": "....aa..../....aa..../....aa..../aaaaaaaaaa/.aaaaaaaa./....aa..../....aa..../...aaaa.../..aaaaaa../..........",
      },
    ],
    [
      "Bateau à voile",
      "ffffff,e8645a,8a5a3a",
      {
        "10": "....cb..../....cab.../...caaab../...caaaab./..caaaaaab/..c......./cccccccccc/.cccccccc./........../..........",
      },
    ],
    [
      "Montgolfière",
      "e8645a,ffd166,8a5a3a",
      {
        "10": "..aaaaaa../.aabbbaaa./aabbbbbaaa/aabbbbbaaa/aabbbbbaaa/.aabbbaaa./..aaaaaa../...c..c.../...cccc.../...cccc...",
      },
    ],
    [
      "Grenouille",
      "5cc27a,ffffff,4a4f7a",
      {
        "10": ".aa....aa./abba..abba/abcabbacba/aaaaaaaaaa/aaaaaaaaaa/aaaaaaaaaa/.aaaaaaaa./aa.aaaa.aa/aa......aa/..........",
      },
    ],
    [
      "Singe",
      "8a5a3a,e0b070,4a4f7a",
      {
        "10": "..aaaaaa../.aaaaaaaa./aabbbbbbaa/aabcbbcbaa/.abbbbbba./.abbbbbba./..bbccbb../...bbbb.../..aaaaaa../.aa....aa.",
      },
    ],
    [
      "Ours",
      "8a5a3a,e0b070,4a4f7a",
      {
        "10": "aa......aa/aaaaaaaaaa/.aaaaaaaa./.acaaaaca./.aaabbaaa./.aabbbbaa./.aabbcbaa./..aaaaaa../........../..........",
      },
    ],
    [
      "Souris",
      "a8b0c8,ff8fb8,4a4f7a",
      {
        "10": ".aa....aa./abba..abba/abba..abba/.aaaaaaaa./.aaaaaaaa./.acaaaaca./..aabbaa../...aaaa.../....cc..../..........",
      },
    ],
    [
      "Pingouin",
      "4a4f7a,ffffff,ff9a3a",
      {
        "10": "...aaaa.../..aaaaaa../..abaabaa./..aaccaaa./.aabbbbaa./.aabbbbaa./.aabbbbaa./.aabbbbaa./..aabbaa../..cc..cc..",
      },
    ],
    [
      "Requin",
      "a8b0c8,ffffff,4a4f7a",
      {
        "10": "...a.....a/...aa...aa/..aaaa.aa./aaaaaaaaaa/aacaaaaaa./aaaaaaa.../.bbbbbbb../..bbbbb.../........../..........",
      },
    ],
    [
      "Pieuvre",
      "9a7ae0,ffffff,4a4f7a",
      {
        "10": "..aaaaaa../.aaaaaaaa./.aabaabaa./.aacaacaa./.aaaaaaaa./aaaaaaaaaa/a.a.aa.a.a/a.a.aa.a.a/.a..a..a../a..a..a..a",
      },
    ],
    [
      "Méduse",
      "ff8fb8,ffffff,4a4f7a",
      {
        "10": "..aaaaaa../.aaaaaaaa./aabaaaabaa/aacaaaacaa/aaaaaaaaaa/.a.a.a.a../.a.a.a.a../..a.a.a.a./.a.a.a.a../..........",
      },
    ],
    [
      "Hippocampe",
      "ffd166,ff9a3a,4a4f7a",
      {
        "10": "...aaa..../..aaca..../..aaaab.../...aaa..../...aaa..../..aaaa..../..aaaa..../...aaa..../....aa..../...aaa....",
      },
    ],
    [
      "Serpent",
      "5cc27a,ffd166,e8645a",
      {
        "10": "..aaaaa.../.aabaaaa../.aaaaaa.../..aaaa..../...aaaaa../....aaaaa./.....aaaa./.aaaaaaa../aaaaaaa.../..........",
      },
    ],
    [
      "Dauphin",
      "3a8fd8,ffffff,4a4f7a",
      {
        "10": ".......aa./.....aaaaa/...aaaaaaa/.aaaaaaaa./aacaaaaaa./aaaaaaaa../.bbbbbb.../..bbbb..../........../..........",
      },
    ],
    [
      "Zèbre",
      "ffffff,4a4f7a",
      {
        "10": ".aa....aa./.ab....ba./.aabaabaa./.bbbbbbbb./.bbbbbbbb./.bababbab./..aabaab../..bbbbbb../...bbbb.../..........",
      },
    ],
    [
      "Koala",
      "a8b0c8,ffffff,4a4f7a",
      {
        "10": "aaaa..aaaa/abba..abba/abbaaaabba/.aaaaaaaa./.acaaaaca./.aaabbaaa./.aaabbaaa./..aaaaaa../........../..........",
      },
    ],
    [
      "Kangourou",
      "c98a3a,e0c090,4a4f7a",
      {
        "10": ".aa...aa../.aaa.aaa../.aca.aca../.aaaaaaa../..aaaaa.../..aabbaa../.aabbbaaa./aaabbbaaa./.aa..aa.aa/.aaa.aaaaa",
      },
    ],
    [
      "Perroquet",
      "e8645a,ffd166,3a8fd8",
      {
        "10": "...aaaa.../..aaaaaa../..abaaaa../..aaacca../..aaacc.../..aaaaa.../.aaaaaa.../.aaaaaaa../..cc.aaa../..cc.cc...",
      },
    ],
    [
      "Flamant rose",
      "ff8fb8,4a4f7a,ffd166",
      {
        "10": "...aaa..../...aba..../...aaaa.../....aa..../....aa..../...aaaa.../..aaaaaa../..aaaaaa../....c...../....c.....",
      },
    ],
    [
      "Cygne",
      "ffffff,ff9a3a,4a4f7a",
      {
        "10": "....ab..../...aaa..../...aa...../...aa...../..aaa...../.aaaaaaaa./aaaaaaaaaa/.aaaaaaaa./........../..........",
      },
    ],
    [
      "Hérisson",
      "8a5a3a,e0c090,4a4f7a",
      {
        "10": "..a.a.a.a./.aaaaaaaa./aaaaaaaaaa/aaaaaaaaaa/aaaaaaabba/aaaaaaabcb/.aaaaaabbb/..aaaaaaa./..b..b..../..........",
      },
    ],
    [
      "Vache",
      "ffffff,4a4f7a,ff8fb8",
      {
        "10": "b........b/bb......bb/.aaaaaaaa./.aabaaabaa/.aabaaaaba/.aaaaaaaa./..cccccc../..cacacc../..cccccc../..........",
      },
    ],
    [
      "Cheval",
      "c98a3a,8a5a3a,4a4f7a",
      {
        "10": "..aa....../.aaaa...../.aabaa..../.aaaaaa.../..aaaaaa../...aaaaa../...aaaaaa./..aaaaaaa./..aa..aa../..aa..aa..",
      },
    ],
    [
      "Licorne",
      "ffffff,ff8fb8,ffd166",
      {
        "10": "......c.../.....cc.../.a..aaa.../aaaaaaab../.aaaaaa.../.aaaaaaa../.aaaaaaaa./.aaaaaaaa./.aa..aa.../.aa..aa...",
      },
    ],
    [
      "Fantôme",
      "ffffff,4a4f7a",
      {
        "10": "...aaaa.../..aaaaaa../.aaaaaaaa./.abbaabba./.abbaabba./.aaaaaaaa./.aaabbbaa./.aaaaaaaa./.aaaaaaaa./.aa.aa.aa.",
      },
    ],
    [
      "Sapin de Noël",
      "5cc27a,ffd166,8a5a3a",
      {
        "10": "....b...../...aaa..../..aaaaa.../...aaa..../..aaaaa.../.aaaaaaa../..aaaaa.../.aaaaaaaa./....c...../....c.....",
      },
    ],
    [
      "Bonhomme de neige",
      "ffffff,ff9a3a,4a4f7a",
      {
        "10": "...cccc.../...cccc.../...aaaa.../..acaacb../..aaaaa.../...aaa..../..aaaaa.../.aaacaaa../.aaaaaaa../..aaaaa...",
      },
    ],
    [
      "Citrouille",
      "ff9a3a,5cc27a,4a4f7a",
      {
        "10": ".....b..../...bbb..../.aaaaaaaa./aaaaaaaaaa/aacaaaacaa/aaaaaaaaaa/acaaccaaca/aaacaacaaa/.aaaaaaaa./..aaaaaa..",
      },
    ],
    [
      "Cœur",
      "e8645a,ffffff",
      {
        "10": ".aa....aa./aaaa..aaaa/aabaaaaaaa/aaaaaaaaaa/aaaaaaaaaa/.aaaaaaaa./..aaaaaa../...aaaa.../....aa..../..........",
      },
    ],
    [
      "Chapeau de sorcier",
      "4a4f7a,ffd166",
      {
        "10": "....a...../....a...../...aaa..../...aaa..../..aaaaa.../..abbbba../.aaaaaaaa./aaaaaaaaaa/aaaaaaaaaa/..........",
      },
    ],
    [
      "Œuf de Pâques",
      "ff8fb8,ffd166,7ec8f2",
      {
        "10": "...aaaa.../..aaaaaa../..abbbba../.aaaaaaaa./.cccccccc./.aaaaaaaa./.abababab./.aaaaaaaa./..aaaaaa../...aaaa...",
      },
    ],
    [
      "Étoile",
      "ffd166,ff9a3a",
      {
        "10": "....aa..../....aa..../...aaaa.../aaaaaaaaaa/.aaaaaaaa./..aaaaaa../..aaaaaa../.aaa..aaa./.aa....aa./..........",
      },
    ],
    [
      "Bonbon",
      "ff8fb8,ffffff",
      {
        "10": "........../.a......a./aaa.aaaa.a/aaaaaaaaaa/aaa.aaaa.a/.a......a./........../........../........../..........",
      },
    ],
    [
      "Sucette",
      "ff8fb8,ffffff,e0b070",
      {
        "10": "..aaaaaa../.aabbbbaa./aabaaaabaa/abaabbabaa/abababaab./aabaaaabaa/.aabbbbaa./..aaaaaa../.....c..../.....c....",
      },
    ],
    [
      "Gâteau",
      "ff8fb8,ffffff,e8645a",
      {
        "10": "....c...../....c...../..bbbbbb../..aaaaaa../.aaaaaaaa./.bbbbbbbb./.aaaaaaaa./aaaaaaaaaa/aaaaaaaaaa/..........",
      },
    ],
    [
      "Père Noël",
      "e8645a,ffffff,ff9a8a",
      {
        "10": "...aaaa.../..aaaaaa../.bbbbbbb../.bbccccb../.bcbccbcb./.bbccccbb./.bbbbbbbb./.bbbbbbbb./..bbbbbb../..........",
      },
    ],
    [
      "Sucre d'orge",
      "e8645a,ffffff",
      {
        "10": "...aaaa.../..aa..aa../..ab..ab../.....ab.../.....aa.../.....ba.../.....ab.../.....ba.../.....ab.../.....aa...",
      },
    ],
    [
      "Feuille d'érable",
      "e8645a,8a5a3a",
      {
        "10": ".....a..../..a..a..a./..aa.a.aa./a.aaaaaaa./aaaaaaaaaa/.aaaaaaaa./..aaaaaa../...aaaa.../....bb..../....bb....",
      },
    ],
    [
      "Pomme de pin",
      "8a5a3a,c98a3a",
      {
        "10": "....aa..../...abba.../..abaaba../.abaaaaba./.aabaabaa./..abaaba../..abaaba../...abba.../....aa..../..........",
      },
    ],
    [
      "Goutte d'eau",
      "3a8fd8,ffffff",
      {
        "10": "....a...../....a...../...aaa..../...aaa..../..aaaaa.../.aaaaaaa../.aabaaaaa./.aabaaaaa./..aaaaaa../...aaaa...",
      },
    ],
    [
      "Pion d'échecs",
      "4a4f7a,a8b0c8",
      {
        "10": "....aa..../...aaaa.../...aaaa.../....aa..../...aaaa.../....aa..../....aa..../...aaaa.../..aaaaaa../.aaaaaaaa.",
      },
    ],
    [
      "Pièce d'or",
      "ffd166,ff9a3a",
      {
        "10": "..aaaaaa../.aabbbbaa./aabaaaabaa/abaabbaaba/abaabaaaba/abaabbaaba/aabaaaabaa/.aabbbbaa./..aaaaaa../..........",
      },
    ],
    [
      "Coffre au trésor",
      "c98a3a,ffd166,8a5a3a",
      {
        "10": "..aaaaaa../.aaaaaaaa./aaaaaaaaaa/bbbbccbbbb/aaaaccaaaa/aaaaccaaaa/aaaaaaaaaa/aaaaaaaaaa/bbbbbbbbbb/..........",
      },
    ],
    [
      "Château",
      "a8b0c8,8a5a3a,e8645a",
      {
        "10": "a.a.aa.a.a/aaaaaaaaaa/aaaaaaaaaa/aaaaaaaaaa/aaabbbbaaa/aaabbbbaaa/aaabbbbaaa/aaabbbbaaa/aaabbbbaaa/aaabbbbaaa",
      },
    ],
    [
      "Potion magique",
      "9a7ae0,a8b0c8,ffffff",
      {
        "10": "...bbbb.../....bb..../....bb..../...aaaa.../..aaaaaa../.aaaaaaaa./.aaacaaaa./.aaaaaaaa./.aaaaaaaa./..aaaaaa..",
      },
    ],
    [
      "Ballon de foot",
      "ffffff,4a4f7a",
      {
        "10": "...bbbb.../..baaaab../.baabbaab./baaabbaaab/bbaaaabbab/.baaabbab./.babaabab./..bbbbbb../...bbbb.../..........",
      },
    ],
    [
      "Ballon de basket",
      "ff9a3a,4a4f7a",
      {
        "10": "...aaaa.../..abaaba../.aabaabaa./aaaabaaaaa/bbbbbbbbbb/aaaabaaaaa/.aabaabaa./..abaaba../...aaaa.../..........",
      },
    ],
    [
      "Raquette de tennis",
      "4a4f7a,ffd166,8a5a3a",
      {
        "10": "..aaaaaa../.abababab./.aabababa./.abababab./.aabababa./..aaaaaa../....cc..../....cc..../....cc..../....cc....",
      },
    ],
    [
      "Haltère",
      "4a4f7a,a8b0c8",
      {
        "10": "........../a........a/aa......aa/aabbbbbbaa/aabbbbbbaa/aa......aa/a........a/........../........../..........",
      },
    ],
    [
      "Trophée",
      "ffd166,c98a3a",
      {
        "10": "aaaaaaaaaa/a.aaaaaa.a/a.aaaaaa.a/.aaaaaaaa./..aaaaaa../...aaaa.../....aa..../....aa..../...bbbb.../..bbbbbb..",
      },
    ],
    [
      "Cible",
      "e8645a,ffffff",
      {
        "10": "..aaaaaa../.aabbbbaa./aabbaabbaa/abbaaaabba/abaabbaaba/abaabbaaba/abbaaaabba/aabbaabbaa/.aabbbbaa./..aaaaaa..",
      },
    ],
    [
      "Pizza part",
      "ffd166,e8645a,c98a3a",
      {
        "10": "cccccccccc/caaaaaaaac/.caabaaac./.caaaaaac./..caaaac../..caabac../...caaac../....cac.../....ccc.../..........",
      },
    ],
    [
      "Cône de glace",
      "ff8fb8,e0b070",
      {
        "10": "...aaaa.../..aaaaaa../.aaaaaaaa./.aaaaaaaa./..bbbbbb../..bbbbbb../...bbbb.../...bbbb.../....bb..../....bb....",
      },
    ],
    [
      "Bouteille d'eau",
      "7ec8f2,ffffff,3a8fd8",
      {
        "10": "...cccc.../....cc..../...aaaa.../..aaaaaa../..bbbbbb../..aaaaaa../..bbbbbb../..aaaaaa../..aaaaaa../..aaaaaa..",
      },
    ],
    [
      "Arrosoir",
      "3a8fd8,7ec8f2",
      {
        "10": "........../.aaa....bb/a..a..bbb./a..aaaaaa./.aaaaaaa../.aaaaaaa../.aaaaaaa../.aaaaaaa../..aaaaa.../..........",
      },
    ],
    [
      "Râteau",
      "8a5a3a,a8b0c8",
      {
        "10": "....a...../....a...../....a...../....a...../....a...../.bbbbbbbb./.b.b.b.b../.b.b.b.b../........../..........",
      },
    ],
    [
      "Lune",
      "ffd166,ffffff",
      {
        "10": "..aaaa..../.aaa....../aaa......./aaa......./aaa......./aaa......./aaaa....../.aaaaa..../..aaaaaaa./...aaaaa..",
      },
    ],
    [
      "Nuage",
      "ffffff,a8b0c8",
      {
        "10": "..aaaa..../.aaaaaaa../aaaaaaaaa./aaaaaaaaaa/aaaaaaaaaa/.bbbbbbbb./........../........../........../..........",
      },
    ],
    [
      "Flamme",
      "ff9a3a,ffd166",
      {
        "10": "....a...../...aa...../...aaa..../..aaaaa.../..aabaaa../.aabbbaaa./.aabbbaaa./.aaabbaaa./..aaaaaa../...aaaa...",
      },
    ],
    [
      "Papillon de nuit",
      "9a7ae0,ffd166,4a4f7a",
      {
        "10": "a........a/aa..cc..aa/aaa.cc.aaa/aaaaccaaaa/aabaccabaa/.aaaccaaa./..aa..aa../.a......a./........../..........",
      },
    ],
    [
      "Mouton",
      "ffffff,4a4f7a",
      {
        "10": "..aaaaaa../.aaaaaaaa./aaaabbbaaa/aaabbbbbaa/aaabbbbbaa/.aaabbbaa./.aaaaaaaa./..b..b..../..b..b..../..........",
      },
    ],
    [
      "Crocodile",
      "5cc27a,ffffff,4a4f7a",
      {
        "10": "........../........../.aa.aa..../aaaaaaaaaa/aabaaaaaaa/aaaaaaaaaa/.aaaaaaaaa/.a.a.a.a../........../..........",
      },
    ],
    [
      "Raie",
      "3a8fd8,4a4f7a",
      {
        "10": "........../..aaaaaa../.aaaaaaaa./aabaaaabaa/aaaaaaaaaa/.aaaaaaaa./..aaaaaa../...aaaa.../....a...../....a.....",
      },
    ],
    [
      "Smiley",
      "ffd166,4a4f7a",
      {
        "10": "...aaaa.../..aaaaaa../.aaaaaaaa./.abaaaaba./aaabaabaaa/aaaaaaaaaa/.abaaaaba./.aabbbbaa./..aaaaaa../...aaaa...",
      },
    ],
    [
      "Ancre",
      "4a4f7a",
      {
        "10": "....aa..../...a..a.../....aa..../.aaaaaaaa./....aa..../....aa..../a...aa...a/aa..aa..aa/.aa.aa.aa./..aaaaaa..",
      },
    ],
    [
      "Nœud papillon",
      "e8645a,c0303a",
      {
        "10": "........../........../aaa....aaa/aaaa..aaaa/aaaabbaaaa/aaaabbaaaa/aaaa..aaaa/aaa....aaa/........../..........",
      },
    ],
    [
      "Poisson",
      "ff9a3a,ffffff,4a4f7a",
      {
        "10": "........../........../....aaaa../.aaaaaaaa./aaabaaaaaa/aaaaaaaaaa/.aaaaaaaa./....aaaa../........../..........",
      },
    ],
    [
      "Chaussure",
      "8a5a3a,ffffff",
      {
        "10": "........../........../.aaa....../.aaa....../.aaaa...../.aaaaaaaa./aaaaaaaaaa/bbbbbbbbbb/........../..........",
      },
    ],
    [
      "Maison simple",
      "e8645a,f2d3a0,8a5a3a",
      {
        "10": "....aa..../...aaaa.../..aaaaaa../.aaaaaaaa./.bbbbbbbb./.bbccbbbb./.bbccbbbb./.bbccbbbb./.bbbbbbbb./..........",
      },
    ],
    [
      "Nœud cadeau",
      "ff8fb8,e8645a",
      {
        "10": "..aa..aa../.aaaa.aaaa/aaaaabaaaa/.aaabbaaa./..aaabbaa./.aa.bb.aa./aa..bb..aa/a...bb...a/........../..........",
      },
    ],
  ];
  const NX = [
    [
      "Palmier",
      "5cc27a,8a5a3a,f2d3a0",
      {
        "10": "........../....a...../.aaaa.aaa./....aa..../..aabbaa../.a......a./....b...../....b...../....b...../.cccbcccc.",
        "12": "............/.....aa...../.aa..aa..aa./..aaaaaaaa../....abba..../..aa..b.aa../..a..bb..a../.....b....../.....b....../.....b....../.....b....../.ccccbccccc.",
        "15": ".......a......./.......a......./.......a......./.aaaa..a..aaaa./...aaaaaaaaa.../.....aaaaa...../...aaabbbaaa.../..aaa..b..aaa../..a....b....a../.......b......./.......b......./.......b......./......bb......./....ccbbccc..../.cccccbbcccccc.",
      },
    ],
    [
      "Parasol",
      "e8645a,ffffff,8a5a3a,f2d3a0",
      {
        "10": "........../..abaaba../.aabaabaa./aaabaabaaa/aaabaabaaa/........../........../........../........../.dddddddd.",
        "12": "............/....baab..../..aabaabaa../.aaabaabaaa./aaaabaabaaaa/a..a....a..a/............/............/............/............/............/.dddddddddd.",
        "15": ".............../......aaa....../...abbaaabba.../..aabbaaabbaa../.aaabbaaabbaaa./.aaabbaaabbaaa./aaaabbaaabbaaaa/a...a..c..a...a/.......c......./.......c......./.......c......./.......c......./.......c......./.......c......./.ddddddcdddddd.",
      },
    ],
    [
      "Étoile de mer",
      "ff9a3a,ffd166",
      {
        "10": "........../........../....ab..../....aa..../.abaaaaba./..aaabaa../...aaaa.../...baab.../..a....a../..........",
        "12": "............/............/.....aa...../.....ab...../aaaaaaaaaaaa/.aabaaaabaa./...aaabaa.../...aaaaaa.../...abaaba.../...aa..aa.../...a....a.../............",
        "15": ".......a......./.......a......./.......a......./......aba....../......aaa....../..aaaaaaaaaaa../.aaabaaaaabaaa./...aaaabaaaa.../....aaaaaaa..../....aaaaaaa..../....abaaaba..../....aaa.aaa..../...aaa...aaa.../...a.......a.../...............",
      },
    ],
    [
      "Crabe",
      "e8645a,ffffff,4a4f7a",
      {
        "10": "........../........../....c.c.../aa......aa/aa.aaaa.aa/..aaccaa../..aaaaaa../.a.aaaa.a./..a....a../..........",
        "12": "............/............/....c..c..../.aa......aa./aaa......aaa/aaaaaaaaaaaa/..aaaccaaa../..aaaaaaaa../..aaaaaaaa../.a.a.aa.a.a./............/............",
        "15": ".............../.............../.............../......c..c...../.aa.........aa./aaaa.......aaaa/aaaaaaaaaaaaaaa/...aaaaaaaaa.../...aaacacaaa.../...aaaaaaaaa.../...aaaaaaaaa.../..a.a.aaa.a.a../.a..a.a.a.a..a./...a..a.a..a.../...............",
      },
    ],
    [
      "Voilier de plage",
      "ffffff,e8645a,8a5a3a,3a8fd8",
      {
        "10": "........../.....a..../....ba..../....baa.../...bbaa.../..bbbaaa../..bbbaaa../.cccccccc./..cccccc../dddddddddd",
        "12": "............/......a...../.....ba...../.....baa..../....bbaa..../....bbaaa.../...bbbaaa.../..bbbbaaaa../............/..cccccccc../...cccccc.../dddddddddddd",
        "15": ".............../.......c......./.......ca....../.......ca....../......bcaa...../.....bbcaa...../.....bbcaaa..../....bbbcaaa..../...bbbbcaaaa.../...bbbbcaaaaa../.......c......./..ccccccccccc../...ccccccccc.../ddddddddddddddd/ddddddddddddddd",
      },
    ],
    [
      "Seau et pelle",
      "e8645a,ffd166,8a5a3a",
      {
        "10": "........../........../...c.c..../..bbbbb.bb/..aaaaa.b./..aaaaa.../..aaaaa.../..aaaaa.../...aaa..../..........",
        "12": "............/............/....ccc...../...c...c..b./..bbbbbbb.bb/..aaaaaa..b./...aaaaa..c./...aaaaa..c./...aaaaa..c./...aaaaa..c./...aaaaa..c./..........c.",
        "15": ".............../.............../......cc......./....cc.cc....../...cc....c..bb./...bbbbbbbb.bb./...bbbbbbbb.bb./...aaaaaaa...c./...aaaaaaa...c./...aaaaaaa...c./....aaaaaa...c./....aaaaaa...c./....aaaaaa...c./....aaaaaa...c./.............c.",
      },
    ],
    [
      "Bouée",
      "e8645a,ffffff",
      {
        "10": "...bbbb.../..aabbaa../.aaabbaaa./baaa..aaab/bbb....bbb/bbb....bbb/baaa..aaab/.aaabbaaa./..aabbaa../...bbbb...",
        "12": "....bbbb..../..aabbbbaa../.aaaabbaaaa./.aaaabbaaaa./bbaa....aabb/bbbb....bbbb/bbbb....bbbb/bbaa....aabb/.aaaabbaaaa./.aaaabbaaaa./..aabbbbaa../....bbbb....",
        "15": "......bbb....../....abbbbba..../..aaaabbbaaaa../..aaaabbbaaaa../.aaaaab.baaaaa./.baaa.....aaab./bbbbb.....bbbbb/bbbb.......bbbb/bbbbb.....bbbbb/.baaa.....aaab./.aaaaab.baaaaa./..aaaabbbaaaa../..aaaabbbaaaa../....abbbbba..../......bbb......",
      },
    ],
    [
      "Cornet de glace",
      "ff8fb8,ffffff,e0b070",
      {
        "10": "........../...bbbb.../...bbbb.../...abaa.../...aaba.../...caac.../...cccc.../....cc..../....cc..../..........",
        "12": "............/....bbbb..../....bbbb..../...abbbba.../...abaaaa.../...aaabaa.../....aaaa..../....cccc..../.....cc...../.....cc...../.....cc...../............",
        "15": ".............../......bbb....../.....bbbbb...../.....bbbbb...../....aabbbaa..../....aabaaaa..../....aaaabaa..../....aaaaaaa..../.....caaac...../.....ccccc...../......ccc....../......ccc....../......ccc....../.......c......./.......c.......",
      },
    ],
    [
      "Brontosaure",
      "5cc27a,2f8f4f,ffffff",
      {
        "10": "........../.......ac./.......aa./.......a../...abaaa../.aababa.../.aaaaaa.../.abbab..../..bb.b..../..bb.b....",
        "12": "............/.........ac./.........aa./........aa../........aa../...aaba.a.../..abaabaa.../.aaaaaaaa.../.aaaaaaa..../...baab...../...b..b...../...b..b.....",
        "15": ".............../.............../...........aac./...........aa../...........a.../..........aa.../.....aba..aa.../...abaaaaaa..../..aaaaaabaa..../..aaaaaaaaa..../.aaaaaaaaa...../.a.abaabb....../a...b..bb....../....b..bb....../...............",
      },
    ],
    [
      "T-Rex",
      "e08a3a,ffffff,4a4f7a",
      {
        "10": "........../.......aa./......aca./...aaaaabb/..aaaa..../.aaaaaa.../.aaaaa..../...aaa..../...aaa..../...aaa....",
        "12": "............/............/.......aaca./.......aabb./...aaaaaaa../..aaaaaa..../..aaaaaa..../.aaaaaaa..../a..aaaa...../....a.a...../....a.a...../....a.a.....",
        "15": ".............../.............../..........aaa../.........aacaa./........aaaabb./....aaaaaaaaa../...aaaaaaa...../..aaaaaaaa...../..aaaaaacc...../.aaaaaaaaa...../aa.aaaaaa....../.....aaaa....../.....aaaa....../.....aaaa....../....aaaaa......",
      },
    ],
    [
      "Stégosaure",
      "7ed07a,ff9a3a,4a4f7a",
      {
        "10": "........../........../....bb..../..b.bb..../...aaab.../..aaaaaa../.aaaaaaaac/..aaaaa.../..aa.aa.../..aa.aa...",
        "12": "............/............/............/...b.bb.b.../...bbbbbb.../...aaaaab.../..aaaaaaaa../..aaaaaaaac./aaaaaaaaa.aa/...aaaaa..../...a...a..../...a...a....",
        "15": ".............../.............../......b......../......b.b....../....b.b.b.b..../....b.bbbbb..../...bbaaaabb..../...aaaaaaaa..../..aaaaaaaaaa.../..aaaaaaaaaaac./aaaaaaaaaaaaaa./....aaaaaaa..../....a...aa...../....a...aa...../....a...aa.....",
      },
    ],
    [
      "Œuf de dinosaure",
      "d8f0c0,5cc27a,ffffff",
      {
        "10": "........../....aa..../...aaaa.../..acccca../..aaaaaa../..abaaab../..aaaaaa../..abaaba../...aaba.../....aa....",
        "12": "............/............/....aaaa..../...acaaca.../..acaccaca../..aaaaaaaa../..abaaaaba../..aaaaaaaa../..aabaabaa../...aaaaaa.../...aaabaa.../.....aa.....",
        "15": ".............../.............../.....aaaaa...../....aaaaaaa..../...aacaaccaa.../...acaacaaca.../...aaaaaaaaa.../..aabaaaaaaaa../..aaaaaaaabaa../...aaaaaaaaa.../...aabaaabaa.../...aaaaaaaaa.../....aaabaaa..../.....aaaaa...../.......a.......",
      },
    ],
    [
      "Os de dinosaure",
      "f2f0e0,c8c4a8",
      {
        "10": "........../........../........../.aa....aa./.aaaaaaaa./.abbbbbba./.aa....aa./........../........../..........",
        "12": "............/............/............/.a........a./.aa......aa./.aaaaaaaaaa./.abbbbbbbba./.aa......aa./.a........a./............/............/............",
        "15": ".............../.............../.............../.............../..a.........a../.aaa.......aaa./.aaaaaaaaaaaaa./...aaaaaaaaa.../.aabbbbbbbbbaa./.aaa.......aaa./.aa.........aa./.............../.............../.............../...............",
      },
    ],
    [
      "Empreinte de dino",
      "8a6a4a",
      {
        "10": "........../....aa..../..a.aa.a../..a....a../..a.aa.a../...aaaa.../...aaaa.../...aaaa.../....aa..../..........",
        "12": "............/.....aa...../.....aa...../..aa.aa.aa../..aa....aa../..aa.aa.aa../....aaaa..../...aaaaaa.../...aaaaaa.../....aaaa..../.....aa...../............",
        "15": ".............../.......a......./......aaa....../......aaa....../...aa.aaa.aa.../...aa..a..aa.../...aa.aaa.aa.../.....aaaaa...../....aaaaaaa..../....aaaaaaa..../....aaaaaaa..../.....aaaaa...../.....aaaaa...../.......a......./...............",
      },
    ],
    [
      "Chat",
      "a8b0c8,ff8fb8,4a4f7a,ffffff",
      {
        "10": "........../..a....a../..ba..ab../.aaaaaaaa./..adaada../.aacaacaa./.aaaabaaa./..aaaaaa../...aaaa.../..........",
        "12": "............/..a......a../..ba....ab../..bbaaaabb../..aaaaaaaa../..addaadda../.aadcaacdaa./.acaaabaaca./..aaaaaaaa../...aaaaaa.../....aaaa..../............",
        "15": ".............../..a.........a../..aa.......aa../..abaa...aaba../..abbaaaaabba../..aaaaaaaaaaa../..aaadaaadaaa../..aadcaaacdaa../..aaadaaadaaa../..accaabaacca../.ccaaaaaaaaacc./...aaaaaaaaa.../....aaaaaaa..../.............../...............",
      },
    ],
    [
      "Chien",
      "e0b070,8a5a3a,ffffff,4a4f7a",
      {
        "10": "........../........../...aaaa.../.bbaaaabb./.bbdaadbb./.bbaaaabb./.bbccdcbb./...acca.../........../..........",
        "12": "............/............/.....aa...../..baaaaaab../.bbbaaaabbb./.bbbdaadbbb./.bbbaaaabbb./.bbaccdcabb./..baccccab../.....cc...../............/............",
        "15": ".............../.............../.............../.....aaaaa...../..bbaaaaaaabb../..bbaaaaaaabb../.bbbbdaaadbbbb./.bbbbaaaaabbbb./.bbbbacccabbbb./..bbaccdccabb../..bbaccdccabb../.....acdca...../.............../.............../...............",
      },
    ],
    [
      "Lapin",
      "ffffff,ff8fb8,4a4f7a",
      {
        "10": "...a..a.../...b..b.../...b..b.../...b..b.../...aaaa.../..aaaaaa../..aacaca../..aaabaa../...aaaa.../..........",
        "12": "....a..a..../...ab..ba.../...ab..ba.../...ab..ba.../....aaaa..../...aaaaaa.../...aaaaaa.../..aacaacaa../..aaaabaaa../...aaaaaa.../....aaaa..../............",
        "15": ".....a...a...../....ab...ba..../....aba.aba..../....aba.aba..../....ab...ba..../.....b...b...../.....aaaaa...../....aaaaaaa..../...aaaaaaaaa.../...aaacaacaa.../...aaaabaaaa.../...aaaacaaaa.../....aaaaaaa..../.....aaaaa...../...............",
      },
    ],
    [
      "Éléphant",
      "a8b0c8,8590aa,ffffff,4a4f7a",
      {
        "10": "........../........../........../..aaaabad./.aaaabbaa./baaaaabac./baaaaaa..a/..aaaa...a/..a..a...a/..a..a....",
        "12": "............/............/............/....a..baa../..aaaaabbda./.aaaaabbbaa./.aaaaaabbaa./baaaaaaaa.ac/.aaaaaaa..aa/..aaaaa....a/..aa..a....a/..aa..a.....",
        "15": ".............../.............../.............../.............../.....aa..baaa../...aaaaabbbada./..aaaaaabbbaaa./.aaaaaaabbbaaa./.aaaaaaaabbacc./baaaaaaaaaa..ac/b.aaaaaaaa...a./...aaaaaa....aa/...aa..aa....aa/...aa..aa....../...............",
      },
    ],
    [
      "Girafe",
      "ffd166,c98a3a,4a4f7a",
      {
        "10": ".......b../.......ca./.......a../......b.../......b.../.....ba.../.aabaa..../.aaaba..../..a......./..a.......",
        "12": "........bb../........ac../........a.../........b.../.......ba.../.......a..../......ba..../..abaaaa..../.aaaabaa..../..aaaaa...../..a........./..a.........",
        "15": "..........bb.../..........aca../..........aaa../..........a..../..........b..../.........aa..../.........b...../.........a...../....aaa.ba...../..aabaaaaa...../.aaaaabaaa...../..aaaaaaa....../...aaaaa......./...a...a......./...a...a.......",
      },
    ],
    [
      "Papillon",
      "ff8fb8,7ec8f2,4a4f7a,ffffff",
      {
        "10": "........../..aaccaa../.aaaaaaaa./.adaaaada./.aaaaaaaa./..bb..bb../..bbbbbb../..bdbbbd../..bb..bb../..........",
        "12": "............/............/.aaaa..aaaa./.aadaaaaada./.aaaaaaaaaa./.aaaaaaaaaa./..abb..bba../..bbbbbbbb../..bdbbbbdb../..bbb..bbb../............/............",
        "15": ".............../.............../..aaaa...aaaa../.aaaaaacaaaaaa./.aadaaacaaadaa./.aaaaaacaaaaaa./.aaaaaacaaaaaa./..aaaaacaaaaa../...bbb.c.bbb.../...bbbbcbbbb.../..bbdbbcbbdbb../...bbbbcbbbb.../...bbb.c.bbb.../.............../...............",
      },
    ],
    [
      "Poisson-clown",
      "ff9a3a,ffffff,4a4f7a",
      {
        "10": "........../....a...../...baa..../.aabaaa..a/.acbaaaaaa/.aabaaaaaa/.aabaaa..a/...ba...../........../..........",
        "12": "............/............/.....aa...../...abaa....a/.aaabaaaa.aa/.acabaaaaaaa/.aaabaaaaaaa/.aaabaaaa.aa/...abaa....a/............/............/............",
        "15": ".............../.......a......./.......a......./......aaa....../...abbaaba....a/..aabbaabaa..aa/.aacbbaabaa.aaa/.aaabbaabaaaaaa/.aaabbaabaa.aaa/..aabbaabaa..aa/...abbaaba....a/.............../.............../.............../...............",
      },
    ],
    [
      "Tortue",
      "5cc27a,2f8f4f,e0d090",
      {
        "10": "........../........../........../...abaa.../.aaabaaac./.abbbbbacb/caaabaaa../.ccabac.../.cc...c.../..........",
        "12": "............/............/............/.....b....../...aabaa..../..aaabaaa.c./.abbbbbbbcbc/.caaabaaa.../..aaabaaa.../.cccabacc.../..c........./............",
        "15": ".............../.............../.............../.............../.............../...aaaaaaa...../..aaaaaaaaa..c./..aaaaaaaaaacbc/..abbbbbbbbacc./.caaaaaaaaaa.../...aaaaaaaa..../..cccaaaacc..../..ccc....cc..../.............../...............",
      },
    ],
    [
      "Escargot",
      "c98a3a,ffd166,a0d080",
      {
        "10": "........../........../..aaaaa.../..ababa.c./..aababa.c/..ababa.cc/..aabaa.cc/.cccacccc./.cccccccc./..........",
        "12": "............/............/....aaa...../...abbba..../..abbaaba.cc/..abababa.cc/..abaaaba.cc/...abbbaa.cc/....aaaa..cc/.cccccccccc./.cccccccccc./............",
        "15": ".............../.............../......aa......./....aaaaaa...../...aabbbbaa.c.c/...abbaabba...c/..aababbaba...c/..aababaaba..cc/...abbaabaa.ccc/...aabbbaaa.ccc/....aaaaaa..ccc/.ccccccccccccc./.ccccccccccccc./.ccccccccccccc./...............",
      },
    ],
    [
      "Cochon",
      "ff9ac0,ff6f9f,4a4f7a",
      {
        "10": "........../.a......a./..aaaaaaa./..aaaaaa../.aacaacaa./.aaabbaaa./.aabccbaa./..aaaaaa../....aa..../..........",
        "12": "............/............/..aaaaaaaa../..aaaaaaaa../..aaaaaaaa../..aacaacaa../.aaabbbbaaa./..aabccbaa../..aaabbaaa../...aaaaaa.../............/............",
        "15": ".............../.............../..aa.......aa../..aaaaaaaaaaa../..aaaaaaaaaaa../..aaaaaaaaaaa../..aaacaaacaaa../..aaaaabaaaaa../..aaabbbbbaaa../..aaabcbcbaaa../...aabbbbbaa.../....aaaaaaa..../.....aaaaa...../.............../...............",
      },
    ],
    [
      "Poussin",
      "ffd166,ff9a3a,4a4f7a",
      {
        "10": "........../....aa..../..aaaaaa../..aaaaaa../.aacaacaa./.abaaaaba./.bbaaaabb./..aaaaaa../....aa..../..........",
        "12": "............/............/...aaaaaa.../..aaaaaaaa../..aaaaaaaa../..aacaacaa../..baabbaab../..bbaaaabb../..baaaaaab../...aaaaaa.../............/............",
        "15": ".............../.......b......./.....aaaaa...../....aaaaaaa..../...aaaaaaaaa.../..aaaaaaaaaaa../..aaacaaacaaa../..aaaaaaaaaaa../..bbaaabaaabb../..bbaaabaaabb../..bbaaaaaaabb../....aaaaaaa..../.....aaaaa...../.............../...............",
      },
    ],
    [
      "Baleine",
      "3a8fd8,ffffff,4a4f7a",
      {
        "10": "........../........../........../...aaa...a/.aaaaaaa.a/aacaaaaaa./aaaaaaaaa./.bbbbbba../...aaa..../..........",
        "12": "............/............/..b........./..b........a/...aaaaa...a/.aaaaaaaaaaa/aacaaaaaaaa./aaaaaaaaaa../.bbbbbbbba../..abbbbba.../............/............",
        "15": ".............../.............../.............../.............../.............../....aaaaaa...aa/..aaaaaaaaaa.aa/.aaaaaaaaaaaaaa/.aacaaaaaaaaaa./.aaaaaaaaaaaa../.abbbbbbbbbaa../..bbbbbbbbaa.../....aaaaaa...../.............../...............",
      },
    ],
    [
      "Hibou",
      "a0703a,e0c090,ffffff,ff9a3a",
      {
        "10": "........../..a....a../..aaaaaa../..acccca../..caccac../.aaabbaaa./.aabbbbaa./..abbbba../..abbbba../....aa....",
        "12": "............/..aa....aa../..aaaaaaaa../..aacaacaa../..acccccca../..acaccaca../..aacaacaa../..aabbbbaa../..abbbbbba../..abbbbbba../...abbbba.../............",
        "15": ".............../...a.......a.../...aa.....aa.../...aaaaaaaaa.../...aacaaacaa.../...acccaccca.../...ccacacacc.../..aacccdcccaa../..aaaabdbaaaa../..aaabbbbbaaa../..aabbbbbbbaa../...abbbbbbba.../...aabbbbbaa.../.....abbba...../...............",
      },
    ],
    [
      "Panda",
      "ffffff,4a4f7a",
      {
        "10": "........../.bb....bb./.bbaaaabb./..aaaaaa../.abbaabba./.abaaaaba./.aaabbaaa./..aaaaaa../...aaaa.../..........",
        "12": "............/..b......b../.bbb....bbb./.bbaaaaaabb./..aaaaaaaa../..abbaabba../.aaabaabaaa./..aaaaaaaa../..aaaaaaaa../...aaaaaa.../.....aa...../............",
        "15": ".............../.............../..bb.......bb../.bbbbaaaaabbbb./..bbaaaaaaabb../...aaaaaaaaa.../..aabbaaabbaa../..aaabaaabaaa../..aabbaaabbaa../..aaaaabaaaaa../..aaaaabaaaaa../...aaaabaaaa.../....aaaaaaa..../.............../...............",
      },
    ],
    [
      "Lion",
      "ff9a3a,ffd166,4a4f7a",
      {
        "10": "...aaaa.../..aaaaaa../.ababbaba./aaabbbbaaa/aabbcbcbaa/aabbbbbbaa/aabbbbbbaa/.aabbbbaa./..aaaaaa../...aaaa...",
        "12": "....aaaa..../..aaaaaaaa../.abbaaaabba./.ababbbbaba./aaabbbbbbaaa/aaabcbbcbaaa/aabbbbbbbbaa/aaabbccbbaaa/.aabbbbbbaa./.aaabbbbaaa./..aaaaaaaa../....aaaa....",
        "15": "......aaa....../....aaaaaaa..../..aaaaaaaaaaa../..abbaaaaabba../.aababbbbbabaa./.aaabbbbbbbaaa./aaabbbcbbcbbaaa/aaabbbbbbbbbaaa/aaabbbbcbbbbaaa/.aabbbbcbbbbaa./.aaabbbcbbbaaa./..aaabbbbbaaa../..aaaaabaaaaa../....aaaaaaa..../......aaa......",
      },
    ],
    [
      "Coccinelle",
      "e8645a,4a4f7a",
      {
        "10": "....bb..../...bbbb.../...abba.../..aaaaaa../.aaaaaaaa./.aabaaaba./.aaaabaaa./.aabaaaba./..aaaaaa../....aa....",
        "12": ".....bb...../....bbbb..../....bbbb..../...aabbaa.../..aaaaaaaa../.aaaaaaaaaa./.aabaaaabaa./.aaaaabaaaa./.aabaaaabaa./..aaaaaaaa../...aaaaaa.../............",
        "15": ".......b......./.....bbbbb...../.....bbbbb...../.....bbbbb...../...aaaabaaaa.../...aaaabaaaa.../..aaaaabaaaaa../..aabaabaabaa../..aaaaabaaaaa../..aaaaabaaaaa../..aaaaabaaaaa../..aabaabaabaa../...aaaabaaaa.../....aaabaaa..../.......b.......",
      },
    ],
    [
      "Abeille",
      "ffd166,4a4f7a,cfe8ff",
      {
        "10": "........../..cc..cc../..cc..cc../..ccbaccb./..aabaaa../..aabaab../..aabaaa../...abaa.../........../..........",
        "12": "............/...cc..cc.../..ccc..ccc../..ccc..ccc../..ccababcc../..caababac../..aaababab../..aaababaa../...aababa.../....abab..../............/............",
        "15": ".............../....c.....c..../...ccc...ccc.../..ccccc.ccccc../..ccccc.cccbc../..cccababbccb../...caababbac.../...aaababbab.../...aaababbaa.../..baaababbaa.../...aaababbaa.../....aababba..../......bab....../.............../...............",
      },
    ],
    [
      "Planète à anneaux",
      "ff9a3a,ffd166",
      {
        "10": "........../........../....aa..../...aaaa.../bbaaaaaabb/bbaaaaaabb/...bbbb.../....aa..../........../..........",
        "12": "............/............/............/....aaaa..../..baaaaaab../bb.aaaaaa.bb/bb.aaaaaa.bb/..bbbbbbbb../....aaaa..../............/............/............",
        "15": ".............../.............../.............../......aaa....../.....aaaaa...../....aaaaaaa..../.bbaaaaaaaaabb./bb.aaaaaaaaa.bb/.bbaaaaaaaaabb./....bbbbbbb..../.....aaaaa...../......aaa....../.............../.............../...............",
      },
    ],
    [
      "Fusée spatiale",
      "ffffff,e8645a,7ec8f2,ffd166",
      {
        "10": "........../....bb..../....bb..../...aaaa.../...acca.../...aaaa.../...aaaa.../..b.aa.b../.b..dd..b./..........",
        "12": "............/.....bb...../....abba..../....bbbb..../....acca..../....acca..../....aaaa..../....aaaa..../...baaaab.../..bb.aa.bb../.....dd...../............",
        "15": ".......b......./.......b......./......bbb....../.....abbba...../.....bbbbb...../.....aacaa...../.....accca...../.....aaaaa...../.....aaaaa...../.....aaaaa...../....baaaaab..../...bb.aaa.bb.../..b...ddd...b../.......d......./.......d.......",
      },
    ],
    [
      "Soleil",
      "ffd166,ff9a3a",
      {
        "10": "........../........../...aaaa.../..aaaaaa../..aaaaaa../..aaaaaa../..aaaaaa../...aaaa.../........../..........",
        "12": "............/...b....b.../...b.aa.b.../.bbaaaaaabb./...aaaaaa.../..aaaaaaaa../..aaaaaaaa../...aaaaaa.../.bbaaaaaabb./...b.aa.b.../...b....b.../............",
        "15": ".......b......./...bb..b..bb.../....b..b..b..../.b...aaaaa...b./.bb.aaaaaaa.bb./...aaaaaaaaa.../...aaaaaaaaa.../bbbaaaaaaaaabbb/...aaaaaaaaa.../...aaaaaaaaa.../.bb.aaaaaaa.bb./.b...aaaaa...b./....b..b..b..../...bb..b..bb.../.......b.......",
      },
    ],
    [
      "Astronaute",
      "ffffff,7ec8f2,a8b0c8,e8645a",
      {
        "10": "........../....aa..../...abba.../...aaba.../....aa..../..aaaaaa../.a.adda.a./...aaaa.../...aaaa.../...aaaa...",
        "12": "............/.....aa...../....abba..../....babb..../....abba..../.....aa...../..aaaaaaaa../.aa.adda.aa./.a..aaaa..a./....aaaa..../....aaaa..../....aaaa....",
        "15": ".............../.......a......./.....aaaaa...../.....abbba...../....ababbba..../.....abbba...../.....aaaaa...../....aaaaaaa..../...aaadddaaa.../..aaaadddaaaa../.aa.aaaaaaa.aa./.a..aaaaaaa..a./.....aa.aa...../.....aa.aa...../.....aa.aa.....",
      },
    ],
    [
      "Soucoupe volante",
      "a8b0c8,7ec8f2,ffd166",
      {
        "10": "........../........../....bb..../...bbbb.../.aaaaaaaa./aacaaaaaca/.aacaccaa./....cc..../....cc..../...cccc...",
        "12": "............/............/.....bb...../....bbbb..../....bbbb..../.aaaaaaaaaa./aacaaaaaacaa/.aaacaccaaa./.....cc...../.....cc...../....cccc..../....cccc....",
        "15": ".............../.............../.............../......bbb....../.....bbbbb...../.....bbbbb...../...aaaaaaaaa.../.aaaaaaaaaaaaa./aaacaaaaaaaacaa/.aaaacacacaaaa./.....accca...../......ccc....../.....ccccc...../.....ccccc...../.....ccccc.....",
      },
    ],
    [
      "Planète Terre",
      "3a8fd8,5cc27a,ffffff",
      {
        "10": "....aa..../..aaaaaa../.aabaabaa./.abbbaaaa./aaabaaaaaa/aaaaabbbaa/.aaaaabba./.aaaaabaa./..aacaaa../....aa....",
        "12": "............/...aaaaaa.../..aaaaaaaa../.aabbaaabaa./.aabbaaabaa./.aabbaaaaaa./.aaaaaabbaa./.aaaaaabbba./.aaaaaabbaa./..aaaaaaba../...aaccaa.../............",
        "15": ".............../....aaaaaaa..../...aaaaaaaaa.../..aaabaaabaaa../.aabbbbaaabaaa./.aaabbbaaabaaa./.aaabbaaaaaaaa./.aaaaaaaaaaaaa./.aaaaaaabbbbaa./.aaaaaaabbbbaa./.aaaaaaabbbbaa./..aaaaaaabbaa../...aaaaaaaaa.../....aaaaaaa..../...............",
      },
    ],
    [
      "Alien",
      "7ed07a,4a4f7a,ffffff",
      {
        "10": "...a..a.../...aaaa.../..aaaaaa../..abaaba../.abcaacba./.aabaabaa./..aaaaaa../..aaaaaa../...aaaa.../..........",
        "12": "...a....a.../....aaaa..../...aaaaaa.../..aaaaaaaa../..abbaabba../..acbaabca../..abbaabba../..aaaaaaaa../..aaaaaaaa../...aabbaa.../....aaaa..../............",
        "15": "....a.....a..../.....a...a...../.....aaaaa...../....aaaaaaa..../...aaaaaaaaa.../..aabbaaabbaa../..aacbbabbcaa../..aabbbabbbaa../..aabbaaabbaa../..aaaaaaaaaaa../...aaaaaaaaa.../...aaaabaaaa.../....aaaaaaa..../.....aaaaa...../...............",
      },
    ],
    [
      "Maison avec cheminée",
      "e8645a,f2d3a0,8a5a3a,7ec8f2",
      {
        "10": "........../....aa.c../...aaaac../..aaaaaa../.bbbbbbbb./.bdbbbbdb./.bdbccbdb./.bbbccbbb./.bbbccbbb./..........",
        "12": "............/.....aa.cc../....aaaacc../...aaaaaac../..aaaaaaaa../.bbbbbbbbbb./.bddbbbbddb./.bddbccbddb./.bbbbccbbbb./.bbbbccbbbb./.bbbbccbbbb./............",
        "15": ".............../.......a..cc.../......aaa.cc.../.....aaaaacc.../....aaaaaaac.../..aaaaaaaaaaa../.aaaaaaaaaaaaa./..bbbbbbbbbbb../..bddbbbbbddb../..bddbcccbddb../..bbbbcccbbbb../..bbbbcccbbbb../..bbbbcccbbbb../..bbbbcccbbbb../...............",
      },
    ],
    [
      "Lampe de salon",
      "ffd166,8a5a3a,a8b0c8",
      {
        "10": "........../..aaaaaa../..aaaaaa../..aaaaaa../.aaaaaaaa./........../........../........../...bbbb.../...bbbb...",
        "12": "............/...aaaaaa.../...aaaaaa.../..aaaaaaaa../..aaaaaaaa../.aaaaaaaaaa./............/............/............/............/...bbbbbb.../....bbbb....",
        "15": ".............../.............../...aaaaaaaaa.../...aaaaaaaaa.../...aaaaaaaaa.../..aaaaaaaaaaa../..aaaaaaaaaaa../.......c......./.......c......./.......c......./.......c......./.......c......./......bbb....../....bbbbbbb..../......bbb......",
      },
    ],
    [
      "Chaise",
      "c98a3a,8a5a3a",
      {
        "10": "..bbbbbb../..bbbbbb../..b....b../..b....b../..b....b../..aaaaaa../..b....b../..b....b../..b....b../..b....b..",
        "12": "...bbbbbb.../...b....b.../...bbbbbb.../...b....b.../...b....b.../...b....b.../..aaaaaaaa../..b......b../..b......b../..b......b../..b......b../..b......b..",
        "15": ".............../....bbbbbbb..../....bbbbbbb..../....b.....b..../....b.....b..../....b.....b..../....b.....b..../...aaaaaaaaa.../...aaaaaaaaa.../...b.......b.../...b.......b.../...b.......b.../...b.......b.../...b.......b.../...b.......b...",
      },
    ],
    [
      "Canapé",
      "9a7ae0,7a5ac0,8a5a3a",
      {
        "10": "........../........../..bbbbbb../.bbbbbbbb./bbbbbbbbbb/bbaaaaaabb/bbaaaaaabb/bbaaaaaabb/.c......c./..........",
        "12": "............/............/...bbbbbb.../..bbbbbbbb../.bbbbbbbbbb./bbbbbbbbbbbb/bbaaaaaaaabb/bbaaaaaaaabb/bbaaaaaaaabb/bbb......bbb/.c........c./............",
        "15": ".............../.............../.....bbbbb...../...bbbbbbbbb.../..bbbbbbbbbbb../..bbbbbbbbbbb../..bbbbbbbbbbb../.bbbbbbbbbbbbb./.bbaaaaaaaaabb./.bbaaaaaaaaabb./.bbaaaaaaaaabb./.bbaaaaaaaaabb./.c...........c./.c...........c./...............",
      },
    ],
    [
      "Lit douillet",
      "ffffff,7ec8f2,8a5a3a,ff8fb8",
      {
        "10": "........../........../c........./c........./c.aabbbbbb/ccbbbbbbbc/cccccccccc/cccccccccc/c........c/..........",
        "12": "............/............/cc........../cc........../cc.a......../ccaaabbbbbbb/ccbabbbbbbcc/cccccccccccc/cccccccccccc/cccccccccccc/cc........cc/............",
        "15": ".............../.............../.............../.c............./.c............./.c............./.caaaaabbbbbbb./.c.aaabbbbbbbc./.ccbbbbbbbbbbc./.ccccccccccccc./.ccccccccccccc./.ccccccccccccc./.c...........c./.c...........c./...............",
      },
    ],
    [
      "Horloge",
      "ffffff,8a5a3a,4a4f7a",
      {
        "10": "...bbbb.../..bbacbb../.baaaaaab./bbaaaaaabb/baaaaaaaab/bcaaabcacb/bbaaaaaabb/.baaaaaab./..bbacbb../...bbbb...",
        "12": "....bbbb..../..bbbacbbb../.bbaaaaaabb./.baaaaaaaab./bbaaaaaaaabb/baaaaaaaaaab/bcaaaabccacb/bbaaaaaaaabb/.baaaaaaaab./.bbaaaaaabb./..bbbacbbb../....bbbb....",
        "15": "......bbb....../....bbbbbbb..../..bbbaacaabbb../..baaaacaaaab../.bbaaaacaaaabb./.baaaaacaaaaab./bbaaaaacaaaaabb/bbcaaaabcaaacbb/bbaaaaaaaacaabb/.baaaaaaaaaaab./.bbaaaaaaaaabb./..baaaaaaaaab../..bbbaacaabbb../....bbbbbbb..../......bbb......",
      },
    ],
    [
      "Plante en pot",
      "5cc27a,c98a3a,2f8f4f",
      {
        "10": "....aa..../....aa..../..aaaaaa../..aaaaaa../..aaaaaa../..aaccaa../..bbbbbb../...bbbb.../...bbbb.../....bb....",
        "12": ".....aa...../.....aa...../...a.aa.a.../..aaaaaaaa../..aaaaaaaa../..aaaaacaa../..aaaccaaa../...bbbbbb.../....bbbb..../....bbbb..../....bbbb..../....bbbb....",
        "15": ".......a......./......aaa....../......aaa....../...aaaacaaaa.../...aaaacaaaa.../...aaaacaaaa.../...aacacacaa.../...aaacccaaa.../...aaa.c.aaa.../....bbbbbbb..../....bbbbbbb..../.....bbbbb...../.....bbbbb...../.....bbbbb...../.....bbbbb.....",
      },
    ],
    [
      "Télévision",
      "4a4f7a,7ec8f2,ff9a3a",
      {
        "10": "........../........../.aaaaaaaa./.bbbbbbaa./.bbbbbbac./.bbbbbbac./.bbbbbbaa./.bbbbbbaa./.aaaaaaaa./..........",
        "12": "...a....a.../....a..a..../............/.abbbbbbaaa./.abbbbbbaca./.abbbbbbaaa./.abbbbbbaca./.abbbbbbaaa./.abbbbbbaaa./.abbbbbbaaa./..aa....aa../............",
        "15": ".............../.....a...a...../......a.a....../.aaaaaaaaaaaaa./.abbbbbbbbaaaa./.abbbbbbbbaaaa./.abbbbbbbbaaca./.abbbbbbbbaaaa./.abbbbbbbbaaca./.abbbbbbbbaaaa./.abbbbbbbbaaaa./.abbbbbbbbaaaa./.aaaaaaaaaaaaa./...aa.....aa.../...............",
      },
    ],
    [
      "Cactus",
      "5cc27a,e8645a,c98a3a,ffd166",
      {
        "10": "........../....bb..../....aa..../..a.aa..../..aada.a../....adaa../....aa..../....da..../...cccc.../...cccc...",
        "12": "............/.....bb...../.....aa...../.....aa...../..a..da..a../..aaaaa..a../.....adaaa../.....aa...../.....da...../.....aa...../...cccccc.../...cccccc...",
        "15": ".............../.......b......./......aba....../......aaa....../...a..aaa....../...a..aaa..a.../...a..daa..a.../...aaaaaaaaa.../......aadaaa.../......aaa....../......daa....../......aaa....../....ccccccc..../....ccccccc..../....ccccccc....",
      },
    ],
    [
      "Tournesol",
      "ffd166,8a5a3a,5cc27a",
      {
        "10": "...aaaa.../.a.aaaa.a./..aabbaa../aaabbbbaaa/..aabbaa../.aaaaaaaa./...aaacc../..ccaacc../........../..........",
        "12": "...aaaaaa.../.a..aaaa..a./..aaabbaaa../...abbbba.../.aaabbbbaaa./...abbbba.../.aaaaaaaaaa./...aaaaaa.../...a.aaccc../..cccaa...../............/............",
        "15": "....aa.a.aa..../....aa.a.aa..../.aaa.aaaaa.aaa./...aaabbbaaa.../....abbbbba..../.aaaabbbbbaaaa./....abbbbba..../..aaaabcbaaaa../.aaa.aacaa.aaa./....aa.c.ac..../....aa.cccccc../..cccccc..c..../...ccc.c......./.......c......./.......c.......",
      },
    ],
    [
      "Marguerite",
      "ffffff,ffd166,5cc27a",
      {
        "10": "...aaaa.../.aa.aa.aa./..aabbaa../.aabbbbaa./...abba.../.aa.aa.aa./...aaaa.../...a..cc../........../..........",
        "12": "....aaaa..../..a.aaaa.a../..aaabbaaa../....bbbb..../.aaabbbbaaa./...abbbba.../..aa.aa.aa../..a.aaaa.a../....a..a..../.......ccc../............/............",
        "15": ".....aa.aa...../..aa.aa.aa.aa../..aaa.a.a.aaa../...aaabbbaaa.../...aabbbbbaaa../.aaaabbbbbaaaa./....abbbbba..../...aaabcbaaa.../..aaa.aca.aaa../..a..aacaa..a../.....aacaa...../.....a.cccccc../.......c.ccc.../.......c......./.......c.......",
      },
    ],
    [
      "Rose",
      "e8645a,c0303a,5cc27a",
      {
        "10": "........../...aaaa.../..abaaba../..abaaba../...abba.../....aa..../......cc../..cc....../........../..........",
        "12": "............/....aaaa..../...abbbba.../...abaaba.../...abaaba.../...aabbaa.../....aaaa..../........c.../.......ccc../..ccc......./............/............",
        "15": ".............../.....aaaaa...../....aabbbaa..../....abbabba..../...aabaaabaa.../....abaaaba..../....aabbbaa..../....aaaaaaa..../......aca....../.......c.ccc.../.......cccccc../..cccccc......./...ccc.c......./.......c......./.......c.......",
      },
    ],
    [
      "Arbre",
      "5cc27a,8a5a3a,2f8f4f",
      {
        "10": "....aa..../...aaaa.../..aacaaa../.aaaaacaa./.acaaaaaa./.aaabbaca./....bb..../....bb..../....bb..../....bb....",
        "12": ".....aa...../....aaaa..../...acaaaa.../..aaaaaaaa../.aaaaaacaaa./.aacaaaaaaa./.aaaabbacaa./.....bb...../.....bb...../.....bb...../.....bb...../............",
        "15": "......aaa....../.....aaaaa...../....aaaaaaa..../...aaacaaaaa.../..aaaaaaaaaaa../.aaaaaaaacaaaa./.aacaaaaaaaaaa./.aaaaaabaaacaa./..aaaa.b.aaaa../.......b......./.......b......./.......b......./.......b......./.......b......./...............",
      },
    ],
    [
      "Bonsaï",
      "5cc27a,8a5a3a,c98a3a",
      {
        "10": "........../..aaaa..../.aaaaaa.../..aaaaaaa./.aaabaaaa./....b...../........../.....b..../..cccccc../...c..c...",
        "12": "............/...aaa....../.aaaaaaa..../.aaaaaaaaa../..aaaaaaaaa./.aaaabaabaa./...aab.b..../......b...../......b...../......b...../...cccccc.../...c....c...",
        "15": ".............../.............../..aaaaaaaa...../..aaaaaaaa...../..aaaaaaaaaaa../...aaabaaaaaaa./..aaaabaaabaaa./..aaaab.abaaa../.......bb....../.......b......./.......b......./.......b......./.......b......./...ccccccccc.../....c.....c....",
      },
    ],
    [
      "Banane",
      "ffd166,8a6a2a",
      {
        "10": "........../........../........../aa......aa/aaa....aaa/.baaaaaaa./..aaaaaa../....aa..../........../..........",
        "12": "............/............/............/............/.aa......aa./.aa......aa./.baaaaaaaaa./..aaaaaaaa../...aaaaaa.../............/............/............",
        "15": ".............../.............../.............../.............../.aa.........aa./.aa.........aa./.aaa.......aaa./.baaa.....aaaa./.aaaaaaaaaaaaa./..aaaaaaaaaaa../....aaaaaaa..../.............../.............../.............../...............",
      },
    ],
    [
      "Fraise",
      "e8645a,5cc27a,ffd166",
      {
        "10": "........../...bbb..../.aaaaaaaa./.aaaacaaa./..acaaac../..aacaca../...aaaa.../...aaca.../...aaaa.../....aa....",
        "12": "............/.....bb...../..aaaaaaaa../.aaaaaaaaaa./.aacaacacaa./..aaaaaaaa../...acaaca.../...aaaaaa.../...aaacaa.../....aaaa..../....aaaa..../.....aa.....",
        "15": ".......b......./.......b......./.....bbbbb...../..aaaaabaaaaa../..aaaaaaaaaaa../..aaaaacaaaaa../..aacaaaaacaa../...aaaaaaaaa.../...aaacaacaa.../....aaaaaaa..../....aaaaaaa..../.....aacaa...../.....aaaaa...../.....aaaaa...../...............",
      },
    ],
    [
      "Part de pizza",
      "ffd166,e8645a,c98a3a",
      {
        "10": "........../cccccccccc/.acbccbca./.aabaabaa./..aabbaa../...abba.../...aaaa.../....ab..../....aa..../..........",
        "12": "............/.cccccccccc./.cccccccccc./.aabbaabbaa./..aaaaaaaa../..aaabbaaa../...aabbaa.../....aaaa..../....aaba..../.....aa...../.....aa...../............",
        "15": ".............../..ccccccccccc../ccccccccccccccc/.acccbcccbccca./..aabbaaabbaa../..aaabaaabaaa../...aaaabaaaa.../...aaabbbaaa.../....aaabaaa..../.....aaaaa...../.....aabaa...../......aaa....../......aaa....../.......a......./.......a.......",
      },
    ],
    [
      "Hamburger",
      "e0a050,5cc27a,8a5a3a,e8645a",
      {
        "10": "....aa..../..adadda../.aaaaaaaa./........../.bbbbbbbb./.cccccccc./.dddddddd./........../.aaaaaaaa./...aaaa...",
        "12": ".....aa...../..adaadaaa../.aaaaaaadaa./.aaaaaaaaaa./............/.bbbbbbbbbb./.cccccccccc./............/.dddddddddd./.aaaaaaaaaa./..aaaaaaaa../....aaaa....",
        "15": ".............../...aaaadaaaa.../..aadaaaaadaa../.aaaaaaaaaaaaa./.aaaaaaaaaaaaa./.............../.bbbbbbbbbbbbb./.ccccccccccccc./.ccccccccccccc./.............../.ddddddddddddd./..aaaaaaaaaaa../..aaaaaaaaaaa../...aaaaaaaaa.../......aaa......",
      },
    ],
    [
      "Cupcake",
      "ff8fb8,e0b070,e8645a,ffffff",
      {
        "10": "....cc..../...aaaa.../..aaaaaa../..aaaaaa../.aaaaaaaa./..bbaabb../..bbbbbb../...bbbb.../...bbbb.../...bbbb...",
        "12": ".....cc...../....aaaa..../...aaaaaa.../...aaaaaa.../..aaaaaaaa../..aaaaaaaa../...baaaab.../...bbbbbb.../...bbbbbb.../...bbbbbb.../...bbbbbb.../....bbbb....",
        "15": ".......c......./.....aacaa...../.....aaaaa...../....aaaaaaa..../...aaaaaaaaa.../...aaaaaaaaa.../..aaaaaaaaaaa../...aaaaaaaaa.../...bbbbbbbbb.../...bbbbbbbbb.../....bbbbbbb..../....bbbbbbb..../....bbbbbbb..../....bbbbbbb..../...............",
      },
    ],
    [
      "Carotte",
      "ff9a3a,5cc27a",
      {
        "10": "...bbbb.../...bbbb.../...aaaa.../...aaaa.../....ba..../....ab..../....aa..../....ba..../........../..........",
        "12": "....bbbb..../....bbbb..../....baab..../....aaaa..../....aaaa..../....baaa..../.....ab...../.....aa...../.....ba...../.....aa...../............/............",
        "15": ".....bbbbb...../.....bbbbb...../.....bbbbb...../....abbabba..../.....aaaaa...../.....aaaaa...../.....abaaa...../......aaa....../......aab....../......aaa....../......aaa....../.......b......./.......a......./.......a......./.......a.......",
      },
    ],
    [
      "Ananas",
      "ffd166,5cc27a,c98a3a",
      {
        "10": "........../...bbbb.../........../....aa..../...caac.../..aaccaa../..aaaaaa../..aaaaaa../...aaaa.../....aa....",
        "12": "............/.....bb...../....bbbb..../............/....aaaa..../...aaaaaa.../...aaccaa.../...aaaaaa.../...aaccaa.../...ccaacc.../...caaaac.../.....aa.....",
        "15": ".......b......./.......b......./.....b.b.b...../.......b......./.......a......./.....aaaaa...../....aaaaaaa..../....aaacaaa..../...aaacacaaa.../...aaaacaaaa.../...aaaaaaaaa.../....caaaaac..../....aaaaaaa..../.....aaaaa...../......aaa......",
      },
    ],
    [
      "Pastèque",
      "e8645a,5cc27a,4a4f7a",
      {
        "10": "........../........../baaaaaaaab/baaaaaaaab/.bacaaacb./..baacab../...bcbc.../........../........../..........",
        "12": "............/............/............/bbaaaaaaaabb/.bacaaaacab./.baaaaaaaab./..bbaacabb../...bcbbcb.../............/............/............/............",
        "15": ".............../.............../.............../bbaaaaaaaaaaabb/bbaaaaaaaaaaabb/.baaaaaaaaaaab./.bbacaaaaacabb./..bbaaacaaabb../...bbaaaaabb.../....bbcbbcb..../.......b......./.............../.............../.............../...............",
      },
    ],
    [
      "Citron",
      "ffe14d,ffffff,5cc27a",
      {
        "10": "........../........../...aaaacc./.aabaacaa./.aabaaaaa./.aaaaaaaa./.aaaaaaaa./...aaaa.../........../..........",
        "12": "............/............/.....aa.ccc./..aaaaaaca../.aabbaaaaaa./.aaaaaaaaaa./.aaaaaaaaaa./.aaaaaaaaaa./..aaaaaaaa../.....aa...../............/............",
        "15": ".............../.............../...........cc../.....aaaaaccc../...aaaaaaaca.../..aabbaaaaaaa../.aaabbaaaaaaaa./.aaaaaaaaaaaaa./.aaaaaaaaaaaaa./..aaaaaaaaaaa../...aaaaaaaaa.../.....aaaaa...../.............../.............../...............",
      },
    ],
    [
      "Fromage",
      "ffd166,f2b84a",
      {
        "10": "........../........../........../........a./.....aaba./..abaabaa./.aaaaaaaa./.bbbbbbbb./........../..........",
        "12": "............/............/............/............/.........aa./......aaaba./...baaabaaa./.aaaaaaaaaa./.bbbbbbbbbb./.bbbbbbbbbb./............/............",
        "15": ".............../.............../.............../.............../.............../...........aaa./........aaabaa./.....aaaabaaaa./..aabaaaaaaaaa./.aaaaaaaaaaaaa./.bbbbbbbbbbbbb./.bbbbbbbbbbbbb./.............../.............../...............",
      },
    ],
    [
      "Œuf au plat",
      "ffffff,ffd166,a8b0c8",
      {
        "10": "........../........../..aaaaa.../.aaabaaa../.aababaaa./.aabbbaaaa/.aaabaaaaa/.aaaaaaaa./..aa..aa../..........",
        "12": "............/............/...aaaaa..../..aaaaaaa.../.aaaabbaaa../.aaaabbbaaa./.aaabbbbaaa./.aaaabbaaaaa/.aaaaaaaaaa./.aaaaaaaaaa./........a.../............",
        "15": ".............../.............../......aa......./...aaaaaaaa..../..aaaaaaaaaa.../.aaaaabbbaaa.../.aaaababbaaaa../.aaaabbbbbaaaa./.aaaabbbbaaaaa./.aaaaabbbaaaaa./.aaaaaaaaaaaaa./.aaaaaaaaaaaaa./...aaaaaaaaaa../.............../...............",
      },
    ],
    [
      "Donut",
      "ff8fb8,e0b070,ffffff",
      {
        "10": "....bb..../..baaaab../.baaaaacb./.acaaaaaa./baaa..aaab/baca..acab/.aaaaaaaa./.bacacaab./..baaaab../....bb....",
        "12": "............/...baaaab.../..baaaaacb../.bcaaaaaaab./.aaaaaaaaaa./.aaaa..aaaa./.acaa..aaca./.aaaaaaaaaa./.bacaaaaaab./..baaacaab../...baaaab.../............",
        "15": ".............../....bbbabbb..../...baaaaaaab.../..baaaaaaacab../.bacaaaaaaaaab./.baaaaaaaaaaab./.baaaa...aaaab./.aacaa...aaaaa./.baaaa...aacab./.baaaaaaaaaaab./.baaaaaaaaaaab./..bacaaacaaab../...baaaaaaab.../....bbbabbb..../...............",
      },
    ],
    [
      "Sushi",
      "ffffff,ff9a3a,3a4a4a",
      {
        "10": "........../........../........../..bbcbbb../.bbbcbbbb./.aaacaaaa./.aaacaaaa./..aacaaa../........../..........",
        "12": "............/............/............/............/..bbbcbbbb../.bbbbcbbbbb./..aaacaaaa../.aaaacaaaaa./..aaacaaaa../...aacaaa.../............/............",
        "15": ".............../.............../.............../.............../.......b......./...bbbccbbbb.../..bbbbccbbbbb../.bbbbbccbbbbbb./..aaaaccaaaaa../..aaaaccaaaaa../..aaaaccaaaaa../...aaaccaaaa.../......aaa....../.............../...............",
      },
    ],
    [
      "Avocat",
      "5cc27a,e0e890,8a5a3a",
      {
        "10": "....aa..../...abba.../...abba.../..abbbba../..abbbba../..abccba../..abccba../..abccba../...abba.../....aa....",
        "12": "....aaaa..../....abba..../....abba..../...abbbba.../...abbbba.../..abbbbbba../..abbccbba../..abccccba../..abbccbba../...abbbba.../...aabbaa.../.....aa.....",
        "15": "......aaa....../.....aabaa...../.....abbba...../....aabbbaa..../....abbbbba..../...aabbbbbaa.../...abbbbbbba.../...abbbcbbba.../...abbcccbba.../...abcccccba.../...abbcccbba.../...abbbcbbba.../....abbbbba..../.....abbba...../......aaa......",
      },
    ],
    [
      "Toque de chef",
      "ffffff,a8b0c8",
      {
        "10": "...aaaa.../.aaaaaaaa./.aaaaaaaa./.aaaaaaaa./.aaaaaaaa./..aaaaaa../..aaaaaa../..bbbbbb../........../..........",
        "12": "....aaaa..../..aaaaaaaa../.aaaaaaaaaa./.aaaaaaaaaa./.aaaaaaaaaa./..aaaaaaaa../...aaaaaa.../...aaaaaa.../...aaaaaa.../...bbbbbb.../............/............",
        "15": ".....aaaaa...../...aaaaaaaaa.../..aaaaaaaaaaa../.aaaaaaaaaaaaa./.aaaaaaaaaaaaa./.aaaaaaaaaaaaa./..aaaaaaaaaaa../...aaaaaaaaa.../...aaaaaaaaa.../...aaaaaaaaa.../...aaaaaaaaa.../...bbbbbbbbb.../...bbbbbbbbb.../.............../...............",
      },
    ],
    [
      "Cloche de service",
      "a8b0c8,ffffff",
      {
        "10": "........../........../....bb..../..bbaaaa../.abbaaaaa./.aaaaaaaa./.aaaaaaaa./bbbbbbbbbb/.aaaaaaaa./..........",
        "12": "............/............/.....bb...../...baaaa..../..abaaaaaa../.aabaaaaaaa./.aabaaaaaaa./.aaaaaaaaaa./bbbbbbbbbbbb/............/............/............",
        "15": ".............../.............../.............../.......b......./....baabaa...../...abaaaaaaa.../..abbbaaaaaaa../.aaabaaaaaaaaa./.aaabaaaaaaaaa./.aaaaaaaaaaaaa./.bbbbbbbbbbbbb./.............../.aaaaaaaaaaaaa./.............../...............",
      },
    ],
    [
      "Tasse de café",
      "ffffff,8a5a3a,a8b0c8",
      {
        "10": "........../...c.c..../...c....../.abbbbb.../..aaaaaaa./..aaaaaaa./..aaaaa.../..aaaaa.../.ccccccc../...cccc...",
        "12": "............/......c...../......c...../............/..bbbbbbbaa./..aaaaaaa.a./..aaaaaaa.a./..aaaaaa.aa./..aaaaaa..../............/ccccccccccc./....ccc.....",
        "15": ".............../.............../.............../.....c........./.............../..abbbbbbbbaa../..aaaaaaaaaaaa./..aaaaaaaaa..a./...aaaaaaaaaaa./...aaaaaaaaaa../...aaaaaaa...../...aaaaaaa...../..cccccccccc.../.cccccccccccc../...............",
      },
    ],
    [
      "Bouteille",
      "5cc27a,ffffff",
      {
        "10": "....aa..../....aa..../....aa..../...aaaa.../...aaaa.../...bbbb.../...bbbb.../...bbbb.../...aaaa.../...aaaa...",
        "12": ".....aa...../.....aa...../.....aa...../.....aa...../....aaaa..../....aaaa..../....bbbb..../....bbbb..../....bbbb..../....aaaa..../....aaaa..../....aaaa....",
        "15": ".............../......aaa....../......aaa....../......aaa....../....aaaaaaa..../....aaaaaaa..../....aaaaaaa..../....aaaaaaa..../....bbbbbbb..../....bbbbbbb..../....bbbbbbb..../....bbbbbbb..../....aaaaaaa..../....aaaaaaa..../...............",
      },
    ],
    [
      "Frites",
      "e8645a,ffd166,ffffff",
      {
        "10": "........../...b....../..bbb..b../..bbb..b../..bbb..b../.aaaaaaaa./..aaccaa../..aaccaa../..aaaaaa../..aaaaaa..",
        "12": "............/....b..b..../..b.bb.bb.../..b.bb.bb.../..b.bb.bb.../..b.bb.bb.../..aaaaaaaa../..aaaaaaaa../..aaaccaaa../..aaaccaaa../...aaaaaa.../...aaaaaa...",
        "15": ".............../.....b..bb...../.....b.bbb...../...b.b.bbbb..../...b.b.bbbb..../...b.b.bbbb..../...b.b.bbbb..../...b.b.bbbb..../..aaaaaaaaaaa../..aaaaaaaaaaa../...aaacccaaa.../...aaacccaaa.../...aaaacaaaa.../...aaaaaaaaa.../...............",
      },
    ],
    [
      "Pizza entière",
      "ffd166,e8645a,c98a3a,5cc27a",
      {
        "10": "...cccc.../..caaaac../.caaadaac./caabaabaac/caaaaabaac/cadaadaaac/caabbabbac/.caaaaaac./..caadac../...cccc...",
        "12": "....cccc..../..ccaaaacc../.ccaaadaacc./.cabbaaaaac./caabbaabaaac/caaaaaabaaac/cadaaadaaaac/caaabbaabaac/.caabbaabac./.ccaaadaacc./..ccaaaacc../....cccc....",
        "15": "......ccc....../....cccaccc..../..ccaaaaaaacc../..caaaadaaaac../.caabbaaaaaaac./.caabbaabbaaac./ccaaaaaabbaaacc/caaaaaaaaaaaaac/ccadaaaadaaaacc/.caaabbaaabaac./.caaabbaaabaac./..caaaaaaaaac../..ccaaadaaacc../....cccaccc..../......ccc......",
      },
    ],
    [
      "Montagne enneigée",
      "8590aa,ffffff,5cc27a",
      {
        "10": "........../........../........../...b....../..aa....../..aaa.aa../.aaaaaaaa./.aaaaaaaa./aaaaaaaaaa/cccccccccc",
        "12": "............/............/............/...b......../...bb......./..aaa...b.../..aaaa.aaa../..aaaa.aaa../.aaaaaaaaaa./.aaaaaaaaaa./aaaaaaaaaaaa/cccccccccccc",
        "15": ".............../.............../.............../.............../....b........../....bb........./...aaa....b..../...aaaa..bbb.../..aaaaa..aaa.../..aaaaaaaaaaa../.aaaaaaaaaaaa../.aaaaaaaaaaaaa./aaaaaaaaaaaaaa./ccccccccccccccc/ccccccccccccccc",
      },
    ],
    [
      "Arc-en-ciel",
      "e8645a,ffd166,5cc27a,3a8fd8",
      {
        "10": "........../..aaaaaa../aaabbbbaaa/abbccccbba/bbccddccbb/bcddddddcb/ccd....dcc/cdd....ddc/........../..........",
        "12": "............/...aaaaaa.../.aaaabbaaaa./aabbbbbbbbaa/abbccccccbba/bbcccddcccbb/bccddddddccb/bcdd....ddcb/ccd......dcc/ccd......dcc/............/............",
        "15": ".............../.....aaaaa...../..aaaaaaaaaaa../.aaaabbbbbaaaa./aaabbbbbbbbbaaa/abbbcccccccbbba/bbbcccccccccbbb/bbcccdddddcccbb/bccdddd.ddddccb/bccdd.....ddccb/ccdd.......ddcc/ccdd.......ddcc/.............../.............../...............",
      },
    ],
    [
      "Nuage de pluie",
      "a8b0c8,7ec8f2",
      {
        "10": "....aaa.../..aaaaaa../.aaaaaaaa./.aaaaaaaa./..aaaaaaa./........../..b......./..b.b.b.../........../...b......",
        "12": ".....aaaa.../..aaaaaaa.../.aaaaaaaaaa./.aaaaaaaaaa./.aaaaaaaaaa./..aaaaaaaaa./............/...b....b.../.....b..b.../..b..b....../....b......./....b.......",
        "15": "......aaaaa..../....aaaaaaa..../..aaaaaaaaaa.../..aaaaaaaaaaaa./.aaaaaaaaaaaaa./..aaaaaaaaaaaa./..aaaaaaaaaaaa./...aaaaaaaaaa../.............../....b..b..b..../...b......b..../...b..b......../.............../.....b........./.....b.........",
      },
    ],
    [
      "Feu de camp",
      "ff9a3a,ffd166,8a5a3a",
      {
        "10": "........../....aa..../....aa..../...aaaa.../...aaaa.../...abba.../...abba.../....aa..../.cccccccc./.ccc..ccc.",
        "12": "............/.....aa...../.....aa...../....aaaa..../....aaaa..../...aabbaa.../...aabbaa.../...aabbaa.../....abba..../............/.cccccccccc./.cccc..cccc.",
        "15": ".............../.......a......./.......a......./......aaa....../.....aaaaa...../.....aabaa...../....aaabaaa..../....aabbaaa..../....aabbbaa..../....aabbbaa..../....aabbbaa..../......aaa....../..ccccc.ccccc../..ccccccccccc../..ccc.....ccc..",
      },
    ],
    [
      "Tente de camping",
      "e8645a,ffd166,5cc27a",
      {
        "10": "........../........../....aa..../....aa..../...aaaa.../...abba.../..aabbaa../.aaabbaaa./.aaabbaaa./cccccccccc",
        "12": "............/............/............/.....aa...../....aaaa..../....abba..../...aabbaa.../..aaabbaaa../..aaabbaaa../.aaaabbaaaa./.aaaabbaaaa./cccccccccccc",
        "15": ".............../.............../.......b......./.......b......./......aba....../.....aabaa...../.....aabaa...../....aaabaaa..../....aabbbaa..../...aaabbbaaa.../..aaaabbbaaaa../..aaaabbbaaaa../.aaaaabbbaaaaa./ccccccccccccccc/ccccccccccccccc",
      },
    ],
    [
      "Forêt de sapins",
      "2f8f4f,5cc27a,8a5a3a",
      {
        "10": "........../......bb../.aa...bb../.aa...bb../.aa..bbbb./aaaa..bb../.aa..bbbb./aaaabbbbbb/........../aaaaaaaaaa",
        "12": "........b.../..a.....b.../..a....bb.../..a....bbb../.aaa...bbb../.aaa..bbbbb./.aaa...bbb../.aaa..bbbbb./aaaa..bbbbb./..c.....c.../..c.....c.../aaaaaaaaaaaa",
        "15": "..........b..../..........b..../..........b..../..aa.....bbb.../..aa.....bbb.../..aa....bbbbb../.aaaa...bbbbb../.aaaa....bbb.../.aaaa...bbbbb../.aaaa...bbbbb../.aaaa..bbbbbbb./aaaaaa....c..../..........c..../..........c..../aaaaaaaaaaaaaaa",
      },
    ],
    [
      "Île déserte",
      "5cc27a,8a5a3a,f2d3a0,3a8fd8",
      {
        "10": "........../........../.aa....a../....aa..../..aab.a.../........../........../..cccccc../dccccccccd/dddccccddd",
        "12": "............/............/............/..aaa.aaaa../....aaa...../...a.b.a..../.....b....../............/............/.cccccbcccc./dccccccccccd/dddddccddddd",
        "15": ".............../.............../.............../..a........a.../...aaaaaaaa..../.....aaa......./....aa.baa...../...a...b..a..../.......b......./.......b......./.......b......./...ccccbcccc.../dccccccbccccccd/ddcccccccccccdd/ddddddddddddddd",
      },
    ],
    [
      "Flocon de neige",
      "7ec8f2,ffffff",
      {
        "10": "........../........../...a..a.../..a.aa.a../....bb..../....bb..../..a.aa.a../...a..a.../........../..........",
        "12": "............/...a....a.../...a....a.../....a..a..../...a.aa.a.../.....bb...../.....bb...../...a.aa.a.../....a..a..../...a....a.../...a....a.../............",
        "15": ".............../...aa..a..aa.../....a..a..a..../.....a.a.a...../..a..a...a..a../...a..a.a..a.../......aba....../aaaaaabbbaaaaaa/......aba....../...a..a.a..a.../..a..a...a..a../.....a.a.a...../....a..a..a..../...aa..a..aa.../...............",
      },
    ],
    [
      "Coquillage",
      "ff8fb8,ffffff,c98a3a",
      {
        "10": "........../...aaaa.../..aaaaaa../.aaaaaaaa./.aabaabaa./.aaaaaaaa./..aaaaaa../...bbbb.../...abba.../....cc....",
        "12": "............/....aaaa..../..abaaaaba../..abaaaaba../.aaaaaaaaaa./.baabaabaab./.ababaababa./..aaaaaaaa../...aaaaaa.../....bbbb..../....abba..../.....cc.....",
        "15": ".............../.......a......./....aaabaaa..../...abaabaaba.../..aabaabaabaa../.aaaaaabaaaaaa./.aaaabababaaaa./.abaabababaaba./..aaaaabaaaaa../...aaaabaaaa.../...ababbbaba.../....abababa..../.....abbba...../......ccc....../......ccc......",
      },
    ],
    [
      "Tricératops",
      "a8b078,ff9a3a,ffffff,4a4f7a",
      {
        "10": "........../........../......bb../......bb.c/..aaaaba../.aaaaaada./.aaaaaaaa./.aaaaa..../..a..a..../..a..a....",
        "12": "............/............/............/.......bbc../.......bbc.c/..aaaaabacc./.aaaaaaaada./.aaaaaaaaaa./aaaaaaaaaa../..aaaaa...../..a...a...../..a...a.....",
        "15": ".............../.............../.............../..........b..../.........bbbc../.........bbb..c/...aaaaabbbabc./..aaaaaaaaaaac./.aaaaaaaaaadaa./.aaaaaaaaaaaaa./aaaaaaaaaaaaa../..aaaaaaa....../..aaaa.aa....../..aa...aa....../..aa...aa......",
      },
    ],
    [
      "Ptérodactyle",
      "b07ae0,ff9a3a,4a4f7a",
      {
        "10": "........../........../aa...ac.aa/.aa..a.aa./.aaaaaaa../...aaaa.../....aa..../........../........../..........",
        "12": "............/......b...../a......c...a/.aa...aa.bb./.aaa..a.aaa./.a.aaaaaa.a./...aaaaaa.../.....aa...../............/............/............/............",
        "15": ".............../.......b......./a.............a/.a......ac...a./.aaa....a..bbb./.aaaa..aa.aaaa./.aaaaa.a.aaaaa./....aaaaaaa..../....aaaaaaa..../......aaa....../.......a......./.............../.............../.............../...............",
      },
    ],
    [
      "Théière",
      "ff8fb8,ffffff,8a5a3a",
      {
        "10": "........../........../...aaa..../...aaa..aa/aaaaaaaaa./a.abbbaa../aaabbaa.../..aaaaa.../..aaaaa.../..........",
        "12": "............/............/.....a....../...aaaa....a/...aaaa...a./aaaaaaaa.a../a.aabbbaaa../aaaabbbaa.../..aaaaaa..../...aaaa...../..aaaaaaa.../............",
        "15": ".............../.............../......a......../......a......../....aaaaa....aa/....aaaaa...aa./.aaaaaaaaa.aa../aaaaabbbaaaa.../a.aaabbbbaaa.../aaaaabbbaaa..../...aaaaaaa...../....aaaaaa...../...aaaaaaaa..../...aaaaaaaa..../...............",
      },
    ],
    [
      "Éclair",
      "ffd166,4a4f7a,a8b0c8",
      {
        "10": "....ccc.../..ccccccc./.cccccccc./..ccccccc./.....a..../....a...../...aaaa.../.....a..../....a...../..........",
        "12": "....cccc..../..cccccccc../..ccccccccc./..ccccccccc./..cccccacc../......a...../.....aa...../....aaaa..../......a...../.....a....../.....a....../............",
        "15": ".....ccccc...../...cccccccc..../..ccccccccccc../..ccccccccccc../..ccccccccccc../...ccccccaccc../........a....../.......aa....../......aaaaa..../.....aaaaa...../.......aa....../.......a......./.......a......./......a......../...............",
      },
    ],
  ];
  function lvP(n) {
    if (LC[n]) return LC[n];
    if (n < NH) return (LC[n] = parse(NI[n]));
    const k = n - NH,
      S = Math.min(15, 10 + Math.floor(k / 12));
    {
      const h = HX.length,
        T = h + NX.length,
        i = k % T,
        e = i < h ? HX[(i * 37) % h] : NX[((i - h) * 37) % NX.length],
        S2 = Math.min(15, 10 + Math.floor(Math.max(0, i - h) / 12)),
        p = S2 < 12 ? 10 : S2 < 15 ? 12 : 15;
      let P;
      for (const z of [p, 12, 10, 15]) {
        if (!e[2][z]) continue;
        P = parse([e[0], e[1], e[2][z]]);
        if (solves(P)) break;
      }
      return (LC[n] = P);
    }
    let best = null;
    for (let a = 0; a < 14; a++) {
      const R = rng(9973 * n + 7919 * a + 17),
        gi = (k * 7 + ((R() * 3) | 0)) % GEN.length,
        [name, f] = GEN[gi],
        pal = PL[(R() * PL.length) | 0].slice(),
        g = f(S, R).map((v) => (v > 4 ? 4 : v));
      {
        const sy = g.every((v, i) => v === g[((i / S) | 0) * S + S - 1 - (i % S)]),
          fl = g.map((v, i) => (v ? i : -1)).filter((i) => i >= 0),
          kk = 3 + ((R() * 4) | 0),
          cu = Math.max(1, ...g);
        for (let t = 0; t < kk && fl.length; t++) {
          const i = fl[(R() * fl.length) | 0],
            c = 1 + ((g[i] + (R() < 0.5 ? 0 : 1)) % Math.min(4, cu + 1));
          g[i] = c;
          sy && (g[((i / S) | 0) * S + S - 1 - (i % S)] = c);
        }
      }
      const cnt = g.filter(Boolean).length;
      if (cnt < S * S * 0.25 || cnt > S * S * 0.85) continue;
      const used = [...new Set(g.filter(Boolean))].sort(),
        mp = {};
      used.forEach((v, i) => (mp[v] = i + 1));
      const P = { name, pal: used.map((v) => pal[v - 1]), W: S, H: S, g: g.map((v) => (v ? mp[v] : 0)) };
      best = best || P;
      if (solves(P)) return (LC[n] = P);
    }
    return (LC[n] = best || parse(NI[n % NH]));
  }
  window.nnLv = lvP;
  window.nnSolves = solves;
  window.pNono = function (e) {
    const P = lvP(lvD("nono")),
      { W, H, pal } = P,
      N = W * H,
      S = P.g,
      S1 = S.map((v) => (v ? 1 : 0)),
      RC = rowsOf(S1, W, H).map(clue),
      CC = colsOf(S1, W, H).map(clue);
    let g = e && e.g && e.g.length === N ? e.g.map((v) => (v > 0 ? 1 : v)) : new Array(N).fill(0),
      tool = 1,
      done = !1;
    snap = () => ({ g });
    const rc = Math.max(1, ...RC.map((c) => c.length)),
      cc = Math.max(1, ...CC.map((c) => c.length)),
      cs = Math.max(
        13,
        Math.min(
          NM(),
          Math.floor(
            Math.min(
              (Math.min(innerWidth, NW()) - 26) / (0.7 * rc + W),
              innerHeight < 520 ? 1e3 : (innerHeight / NZ() - 250) / (cc + H),
            ),
          ),
        ),
      );
    const col = (c) => "#" + pal[c - 1],
      dk = (c) => {
        const h = pal[c - 1],
          v = [0, 2, 4].map((i) => parseInt(h.substr(i, 2), 16));
        return 0.3 * v[0] + 0.59 * v[1] + 0.11 * v[2] < 120;
      };
    let h = "";
    for (let y = 0; y < cc + H; y++)
      for (let x = 0; x < rc + W; x++) {
        if (y < cc && x < rc) {
          h += "<b></b>";
          continue;
        }
        if (y < cc) {
          const C = CC[x - rc],
            i = y - (cc - C.length);
          h += `<b class="nnk nk${x - rc}${i >= 0 && dk(C[i][1]) ? " dk" : ""}">${i >= 0 ? C[i][0] : !C.length && y === cc - 1 ? "0" : ""}</b>`;
          continue;
        }
        if (x < rc) {
          const C = RC[y - cc],
            i = x - (rc - C.length);
          h += `<b class="nnk nr${y - cc}${i >= 0 && dk(C[i][1]) ? " dk" : ""}">${i >= 0 ? C[i][0] : !C.length && x === rc - 1 ? "0" : ""}</b>`;
          continue;
        }
        const cx = x - rc,
          cy = y - cc;
        h += `<i class="nnc${cx % 5 == 4 && cx < W - 1 ? " nbr" : ""}${cy % 5 == 4 && cy < H - 1 ? " nbb" : ""}" data-i="${cy * W + cx}"></i>`;
      }
    frame(
      `<div class="nnp" id="nnp"><button class="nnt on" data-t="1" style="--c:#f2f0fa" aria-label="Remplir"></button><button class="nnt nnx" data-t="-1" aria-label="Marquer vide">×</button></div><div class="nnw"><div class="nng" id="nng" style="--cs:${cs}px;grid-template-columns:repeat(${rc},calc(var(--cs)*.7)) repeat(${W},var(--cs))">${h}</div></div>`,
      1,
    );
    const G = $("#nng");
    {
      const w = (G.parentElement.clientWidth || $("#nnp").clientWidth || 320) - 4,
        hh = innerHeight < 520 ? 1e3 : (innerHeight / NZ() - 250) / (cc + H),
        cA = Math.max(11, Math.min(NM(), Math.floor(Math.min(w / (0.7 * rc + W), hh)))),
        cB = Math.floor(Math.min(w / (W + 1.4 * rc), hh, NM()));
      let c2 = cA;
      if (cB >= 11 && cB >= cA * 0.97) {
        c2 = cB;
        G.parentElement.style.paddingRight = Math.round(0.7 * rc * c2) + "px";
      }
      G.style.setProperty("--cs", c2 + "px");
      try {
        const cd = G.closest(".glass,.play") || G.parentElement,
          fr = innerHeight - cd.getBoundingClientRect().bottom - 110;
        fr > 40 && NZ() <= 1 && (cd.style.marginTop = Math.floor(fr * 0.38) + "px");
      } catch (e) {}
    }
    const cells = [...G.querySelectorAll(".nnc")],
      pt = () =>
        $("#nnp")
          .querySelectorAll(".nnt")
          .forEach((b) => b.classList.toggle("on", +b.dataset.t === tool));
    pt();

    const paint = (i) => {
      const c = cells[i],
        v = g[i];
      c.style.background = v > 0 ? (done ? col(S[i]) : "#f2f0fa") : "";
      c.classList.toggle("x", v < 0);
    };
    const okL = (a, C) => {
      const r = clue(a);
      return r.length === C.length && r.every((q, i) => q[0] === C[i][0] && q[1] === C[i][1]);
    };
    const chk = (x, y) => {
      const rr = g.slice(y * W, y * W + W),
        co = [...Array(H)].map((_, t) => g[t * W + x]);
      G.querySelectorAll(".nr" + y).forEach((b) => b.classList.toggle("ok", okL(rr, RC[y])));
      G.querySelectorAll(".nk" + x).forEach((b) => b.classList.toggle("ok", okL(co, CC[x])));
    };
    const all = () => {
      for (let y = 0; y < H; y++) if (!okL(g.slice(y * W, y * W + W), RC[y])) return !1;
      for (let x = 0; x < W; x++)
        if (
          !okL(
            [...Array(H)].map((_, t) => g[t * W + x]),
            CC[x],
          )
        )
          return !1;
      return !0;
    };
    const fin = () => {
      if (done || !all()) return;
      done = !0;
      g = g.map((v) => (v < 0 ? 0 : v));
      cells.forEach((c, i) => {
        paint(i);
        c.style.setProperty("--d", ((i % W) + ((i / W) | 0)) * 22 + "ms");
      });
      G.classList.add("win");
      msg("C’est : " + P.name + " !");
      [523, 659, 784, 1047].forEach((f, t) => setTimeout(() => sfx(f, 0.18), 120 * t));
      vib(15);
      setTimeout(() => {
        st.set("p:nono:" + lv, null);
        win();
      }, 1900);
    };
    cells.forEach((_, i) => paint(i));
    for (let y = 0; y < H; y++) chk(0, y);
    for (let x = 0; x < W; x++) chk(x, 0);
    $("#nnp").addEventListener("click", (ev) => {
      const b = ev.target.closest(".nnt");
      b && ((tool = +b.dataset.t), pt(), sfx(600, 0.03));
    });
    let D = null;
    const set = (i) => {
      if (D.seen.has(i)) return;
      const x = i % W,
        y = (i / W) | 0;
      if (D.ax === null && i !== D.s) {
        D.ax = y === D.sy ? "r" : x === D.sx ? "c" : null;
        if (!D.ax) return;
      }
      if ((D.ax === "r" && y !== D.sy) || (D.ax === "c" && x !== D.sx)) return;
      D.seen.add(i);
      const v = D.m === "c" ? 0 : D.m === "x" ? -1 : tool;
      if (g[i] === v) return;
      g[i] = v;
      paint(i);
      chk(x, y);
      sfx(v ? 480 + 20 * Math.max(0, v) : 360, 0.025);
    };
    G.addEventListener("pointerdown", (ev) => {
      const c = ev.target.closest(".nnc");
      if (!c || done) return;
      ev.preventDefault();
      const i = +c.dataset.i;
      D = {
        s: i,
        sx: i % W,
        sy: (i / W) | 0,
        ax: null,
        seen: new Set(),
        m: tool < 0 ? (g[i] < 0 ? "c" : "x") : g[i] === tool ? "c" : "p",
      };
      try {
        G.setPointerCapture(ev.pointerId);
      } catch (e) {}
      set(i);
    });
    G.addEventListener("pointermove", (ev) => {
      if (!D) return;
      const el = document.elementFromPoint(ev.clientX, ev.clientY),
        c = el && el.closest && el.closest(".nnc");
      c && set(+c.dataset.i);
    });
    const up = () => {
      if (D) {
        D = null;
        vib(4);
        fin();
      }
    };
    G.addEventListener("pointerup", up);
    G.addEventListener("pointercancel", up);
    act.hint = () => {
      if (done) return;
      const bad = [];
      for (let y = 0; y < H; y++)
        for (let x = 0; x < W; x++) {
          const v = g[y * W + x] < 0 ? 0 : g[y * W + x];
          if (v !== S1[y * W + x]) {
            bad.push(y);
            break;
          }
        }
      if (!bad.length) return;
      if (!spend(1)) return;
      const y = bad[(Math.random() * bad.length) | 0];
      for (let x = 0; x < W; x++) {
        const i = y * W + x;
        g[i] = S1[i] || (g[i] < 0 ? -1 : 0);
        paint(i);
        cells[i].classList.remove("hl");
        cells[i].offsetWidth;
        cells[i].classList.add("hl");
      }
      for (let x = 0; x < W; x++) chk(x, y);
      msg("Une rangée a été révélée.");
      fin();
    };
  };
  const css = document.createElement("style");
  css.textContent = `.nnp{display:flex;gap:8px;justify-content:center;margin:2px 0 10px;flex-wrap:wrap}.nnt{width:42px;height:42px;border-radius:12px;border:2px solid rgba(255,255,255,.25);background:var(--c);box-shadow:0 2px 6px rgba(0,0,0,.25);transition:transform .15s}.nnt.on{transform:scale(1.12);border-color:#fff;box-shadow:0 0 0 3px rgba(255,255,255,.35)}.nnx{background:rgba(255,255,255,.12);color:#fff;font:700 24px system-ui}
.nnw{display:flex;justify-content:center;overflow:hidden;width:100%;padding-bottom:6px}.nng{display:grid;grid-auto-rows:var(--cs);gap:0;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent}
.nng b{display:flex;align-items:center;justify-content:center;font:800 calc(var(--cs)*.52)/1 system-ui;color:#fff;transition:opacity .25s}.nnk[style]{background:var(--c);border-radius:calc(var(--cs)*.22);margin:1px;color:#1a1f3a;text-shadow:0 0 2px rgba(255,255,255,.6)}.nnk.dk{color:#fff;text-shadow:none}.nnk:not([style]):not(:empty){background:rgba(255,255,255,.1);border-radius:calc(var(--cs)*.2);margin:calc(var(--cs)*.06) calc(var(--cs)*.04)}.nnk.ok{opacity:.32}.nng>*{box-sizing:border-box;min-width:0}
.nnc{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);margin:0;position:relative;transition:background .12s}.nnc.nbr{border-right:2px solid rgba(255,255,255,.4)}.nnc.nbb{border-bottom:2px solid rgba(255,255,255,.4)}.nnc.x::after{content:"×";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.45);font:700 calc(var(--cs)*.7)/1 system-ui}
.nnc.hl{animation:nnhl .7s}@keyframes nnhl{0%{box-shadow:inset 0 0 0 99px rgba(255,255,255,.7)}100%{box-shadow:none}}.nng.win .nnc{border-color:transparent;animation:nnwn .6s var(--d) both}@keyframes nnwn{50%{transform:scale(1.18)}}body.calm .nng.win .nnc{animation:none}`;
  document.head.appendChild(css);
  try {
    GIL.nono =
      '<rect x="8" y="8" width="48" height="48" rx="8" fill="#2a3a6e"/><g><rect x="14" y="14" width="10" height="10" rx="2" fill="#ff8fb8"/><rect x="27" y="14" width="10" height="10" rx="2" fill="#ffd166"/><rect x="40" y="14" width="10" height="10" rx="2" fill="#ff8fb8"/><rect x="14" y="27" width="10" height="10" rx="2" fill="#7ec8f2"/><rect x="27" y="27" width="10" height="10" rx="2" fill="#ff8fb8"/><rect x="40" y="27" width="10" height="10" rx="2" fill="#7ec8f2"/><rect x="27" y="40" width="10" height="10" rx="2" fill="#5cc27a"/></g>';
  } catch (e) {}
  try {
    GSV.nono =
      '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16"/><rect x="9.3" y="9.3" width="5.4" height="5.4" fill="currentColor" stroke="none"/>';
  } catch (e) {}
})();
