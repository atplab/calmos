// Sauvegarde locale : st.get / st.set (localStorage + cache mémoire mem, rappel onSet).
const mem = {};
let onSet = null;
const st = {
  get(e, t) {
    if (e in mem) return mem[e];
    try {
      const a = localStorage.getItem(e);
      return null === a ? t : JSON.parse(a);
    } catch (e) {
      return t;
    }
  },
  set(e, t) {
    mem[e] = t;
    try {
      localStorage.setItem(e, JSON.stringify(t));
    } catch (e) {}
    onSet && onSet(e);
  },
};
