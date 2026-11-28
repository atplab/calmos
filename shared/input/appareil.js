// Détection du type d'appareil, en un seul endroit (avant : le même test recopié dans plusieurs scripts).
const Appareil = {
  // Écran tactile principal (téléphone, tablette).
  tactile() {
    try {
      return matchMedia("(pointer:coarse)").matches;
    } catch (e) {
      return !1;
    }
  },
  // Ordinateur : souris et fenêtre d'au moins 900 px de large.
  pc() {
    try {
      return !matchMedia("(pointer:coarse)").matches && innerWidth >= 900;
    } catch (e) {
      return !1;
    }
  },
  // Manette en cours d'utilisation (classe posée par manette.js).
  manette() {
    return document.body.classList.contains("gpon");
  },
};
