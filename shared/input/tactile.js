// Écran tactile → actions : toucher / glisser / lacher, menu (appui long du navigateur) et balayer (geste).
const InputTactile = {
  nom: "tactile",
  actions: ["toucher", "glisser", "lacher", "menu", "balayer"],
  seuil: 40, // distance minimale (px) d'un balayage
  brancher(abo) {
    const o = abo.opts,
      cible = o.cible || window,
      arrets = [],
      veut = (a) => Input.veut(abo, a),
      pt = (e, phase) => ({ source: "tactile", phase, x: e.clientX, y: e.clientY, cible: e.target, evt: e });
    let depart = null;
    const ptr = (type, action, phase) =>
      arrets.push(
        Input.ecouter(
          cible,
          type,
          (e) => {
            if (e.pointerType !== "touch") return;
            if (type === "pointerdown") depart = { x: e.clientX, y: e.clientY };
            let r;
            if (action && veut(action)) r = Input.emettre(abo, action, pt(e, phase));
            if (type === "pointerup" && depart && veut("balayer")) {
              const dx = e.clientX - depart.x,
                dy = e.clientY - depart.y;
              if (Math.max(Math.abs(dx), Math.abs(dy)) >= InputTactile.seuil)
                Input.emettre(
                  abo,
                  "balayer",
                  Object.assign(pt(e, "geste"), {
                    dx,
                    dy,
                    direction:
                      Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "droite" : "gauche") : dy > 0 ? "bas" : "haut",
                  }),
                );
            }
            if (type === "pointerup" || type === "pointercancel") depart = null;
            return r;
          },
          o,
        ),
      );
    const balaye = veut("balayer");
    if (veut("toucher") || balaye) ptr("pointerdown", veut("toucher") ? "toucher" : null, "appui");
    if (veut("glisser")) ptr("pointermove", "glisser", "mouvement");
    if (veut("lacher") || balaye) ptr("pointerup", veut("lacher") ? "lacher" : null, "relache");
    if (balaye) ptr("pointercancel", null, "relache");
    if (veut("menu"))
      arrets.push(
        Input.ecouter(
          cible,
          "contextmenu",
          (e) => (e.pointerType === "touch" ? Input.emettre(abo, "menu", pt(e, "appui")) : undefined),
          o,
        ),
      );
    return arrets.length ? () => arrets.forEach((f) => f()) : null;
  },
};
