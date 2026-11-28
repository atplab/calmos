// Clavier → actions. Une touche connue donne son action ; un caractère seul donne « saisir » (info.touche).
const InputClavier = {
  nom: "clavier",
  action(e, opts) {
    const t = opts.touches;
    if (t && t[e.key] !== undefined) return t[e.key];
    if (t && t[e.code] !== undefined) return t[e.code];
    if (InputActions.touches[e.key]) return InputActions.touches[e.key];
    return e.key && e.key.length === 1 ? "saisir" : null;
  },
  brancher(abo) {
    const o = abo.opts,
      cible = o.cible || window,
      veutClavier =
        !abo.liste ||
        abo.liste.some((a) => !InputSouris.actions.includes(a) && !InputTactile.actions.includes(a));
    if (!veutClavier) return null;
    const h = (phase) => (e) => {
      const info = { source: "clavier", phase, touche: e.key, code: e.code, repeat: e.repeat, evt: e };
      return Input.emettre(abo, InputClavier.action(e, o), info);
    };
    const a = Input.ecouter(cible, "keydown", h("appui"), o),
      b = o.relache ? Input.ecouter(cible, "keyup", h("relache"), o) : null;
    return () => (a(), b && b());
  },
};
