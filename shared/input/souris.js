// Souris (et stylet) → actions : toucher / glisser / lacher / survoler, defiler (molette), menu (clic droit).
const InputSouris = {
  nom: "souris",
  actions: ["toucher", "glisser", "lacher", "survoler", "defiler", "menu"],
  brancher(abo) {
    const o = abo.opts,
      cible = o.cible || window,
      arrets = [],
      veut = (a) => Input.veut(abo, a),
      pt = (e, phase) => ({ source: "souris", phase, x: e.clientX, y: e.clientY, cible: e.target, evt: e });
    const ptr = (type, action, phase) =>
      arrets.push(
        Input.ecouter(
          cible,
          type,
          (e) => {
            if (e.pointerType === "touch") return;
            const a = action === "glisser" && !e.buttons ? "survoler" : action;
            return veut(a) ? Input.emettre(abo, a, pt(e, phase)) : undefined;
          },
          o,
        ),
      );
    if (veut("toucher")) ptr("pointerdown", "toucher", "appui");
    if (veut("glisser") || veut("survoler")) ptr("pointermove", "glisser", "mouvement");
    if (veut("lacher")) ptr("pointerup", "lacher", "relache");
    if (veut("defiler"))
      arrets.push(
        Input.ecouter(
          cible,
          "wheel",
          (e) =>
            Input.emettre(abo, "defiler", {
              source: "souris",
              phase: "mouvement",
              dx: e.deltaX,
              dy: e.deltaY,
              x: e.clientX,
              y: e.clientY,
              cible: e.target,
              evt: e,
            }),
          o,
        ),
      );
    if (veut("menu"))
      arrets.push(
        Input.ecouter(
          cible,
          "contextmenu",
          (e) => (e.pointerType === "touch" ? undefined : Input.emettre(abo, "menu", pt(e, "appui"))),
          o,
        ),
      );
    return arrets.length ? () => arrets.forEach((f) => f()) : null;
  },
};
