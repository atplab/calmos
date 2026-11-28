// Mots cachés : mots des thèmes THW (tirés de THM, donc calculés à cette place) et génération des grilles msGen.
const THW = THM.map((t) => t.w.map((e) => e[0]));
function msGen(e) {
  const R = rng(131 * e + 7),
    n = 6 + Math.min(5, Math.floor(e / 12)),
    N = 4 + Math.floor(e / 8);
  let k = 0,
    w;
  do w = THW[(thOrd(e) + k++ * 7) % THW.length].filter((x) => x.length <= n);
  while (w.length < Math.min(4, N) && k < 50);
  return { n: n, w: lvShuf(w, R).slice(0, N) };
}
