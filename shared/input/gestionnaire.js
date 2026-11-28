// Point d'entrée unique des contrôles pour la logique des jeux.
//   const stop = Input.sur(["bougerGauche", "bougerDroite"], (action, info) => …, options);
//   stop();  // se désabonner
// options :
//   cible    : élément / document / window écouté (défaut : window ; le canvas du jeu pour toucher/glisser…)
//   capture, passive : mêmes réglages que addEventListener
//   touches  : { "a": "bougerGauche", … } touches propres au jeu (prioritaires sur InputActions.touches)
//   relache  : true pour recevoir aussi les relâchements de touche (info.phase = "relache")
//   sources  : ["clavier", "souris", "tactile"] pour limiter les méthodes de contrôle écoutées
// info contient toujours : source, phase, evt (l'événement d'origine, pour preventDefault si besoin).
// La manette (manette.js) passe par le clavier et le pointeur simulés : elle marche donc partout sans rien faire.
// Rien n'est écouté tant que personne n'est abonné : charger cette couche ne change aucun comportement.
const Input = {
  abos: [],
  tenues: {},
  modules: () => [InputClavier, InputSouris, InputTactile],
  sur(actions, fn, opts = {}) {
    const abo = { liste: actions === "*" ? null : [].concat(actions), fn, opts, arrets: [] };
    for (const m of Input.modules())
      if (!opts.sources || opts.sources.includes(m.nom)) {
        const arret = m.brancher(abo);
        arret && abo.arrets.push(arret);
      }
    Input.abos.push(abo);
    return () => Input.quitter(abo);
  },
  quitter(abo) {
    const i = Input.abos.indexOf(abo);
    if (i < 0) return;
    Input.abos.splice(i, 1);
    abo.arrets.forEach((f) => f());
  },
  veut(abo, action) {
    return !abo.liste || abo.liste.includes(action);
  },
  emettre(abo, action, info) {
    if (!action || !Input.veut(abo, action)) return;
    if (info.phase === "appui") Input.tenues[action] = 1;
    else if (info.phase === "relache") delete Input.tenues[action];
    return abo.fn(action, info);
  },
  // Vrai tant que la touche liée à l'action est enfoncée (pour les jeux qui lisent l'état à chaque image).
  enfonce(action) {
    return !!Input.tenues[action];
  },
  // Branche un écouteur natif et renvoie la fonction qui le retire.
  ecouter(cible, type, h, opts) {
    const o = { capture: !!opts.capture, passive: opts.passive };
    cible.addEventListener(type, h, o);
    return () => cible.removeEventListener(type, h, o);
  },
};
