const NLS = {
  mots: 99,
  croises: 49,
  memo: 30,
  caches: 167,
  phrase: 40,
  maze: 50,
  match3: 120,
  demenage: 11,
  quiz: 1,
  cherche: 35,
  tournade: 40,
  sudoku: 80,
  ana: 50,
  cuisine: 30,
  blocs: 40,
  flow: 75,
  g2048: 50,
  tetris: 66,
  brick: 50,
  planetes: 60,
};
const INF1 = { nono: 1, brick: 1, mots: 1, ana: 1, caches: 1, croises: 1, phrase: 1, flow: 1 };
const nl = (e) =>
  ("sudoku" === e && sdMo()) || INF1[e] ? 1e9 : "caches" === e && caOn() ? CANL : NLS[e] || 8;
const sdDOk = () => !0;
const sdAllC = (() => {
  let t = 0,
    v = !1;
  return () => {
    const n = Date.now();
    if (n - t < 400) return v;
    t = n;
    v = [...Array(80).keys()].every((e) => st.get("c:sudoku:" + e, !1) || st.get("k:sudoku:" + e, !1));
    return v;
  };
})();
const sdLeg = () => !!(st.get("c:sudoku_m:0", !1) || st.get("k:sudoku_m:0", !1) || st.get("sd:inf", 0) > 0);
const sdMOk = () => sdAllC();
const sdMo = () => sdAllC();
const sdMN = () => 1e9;
const sdMA = () => {
  let e = 20;
  for (
    ;
    [...Array(10).keys()].some(
      (t) => st.get("c:sudoku_m:" + (e - 10 + t), !1) || st.get("k:sudoku_m:" + (e - 10 + t), !1),
    );
  )
    e += 10;
  return e;
};
const NLM = Math.max(8, ...Object.values(NLS));
const NLX = 10;
const xmasOn = () => {
  const e = new Date(),
    t = e.getMonth();
  return UNL() || "#noel" === location.hash || 11 === t || (0 === t && e.getDate() < 9);
};
let xOpen = !1;
