// Petits outils communs : $ (querySelector), app (#app), sh (mélange), today / di (date du jour), dkey / ckey (clés de sauvegarde).
const $ = (e) => document.querySelector(e);
const app = $("#app");
const sh = (e) => {
  for (let t = e.length - 1; t > 0; t--) {
    const a = Math.floor(Math.random() * (t + 1));
    [e[t], e[a]] = [e[a], e[t]];
  }
  return e;
};
const today = new Date().toLocaleDateString("sv");
const di = Math.floor(Date.now() / 864e5);
const dkey = (e) => "d:" + e + ":" + today;
const ckey = (e) =>
  "c:" +
  ("planetes" === e && "orbite" === st.get("pl:mode", "")
    ? "planetes_o"
    : "planetes" === e && "eau" === st.get("pl:mode", "")
      ? "planetes_e"
      : "caches" === e && caOn()
        ? "caches_c"
        : "sudoku" === e && sdMo()
          ? "sudoku_m"
          : e);
