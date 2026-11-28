(() => {
  /* Section « Lobbies » de la page jeux : les salons regroupant plusieurs jeux */ const L = [
    "jeuxmots",
    "jeuxblocs",
    "jeuxrefl",
    "cartes",
    "sallearcade",
    "jeuxsociete",
    "sallejeux",
  ];
  const fix = () => {
    try {
      const m = GCAT.find((c) => c[0] === "mots");
      if (!m) return;
      const r = m[2].filter((x) => !L.includes(x));
      m[1] = "Catégories";
      m[2] = [...L];
      GCAT.length = 0;
      GCAT.push(m);
    } catch (e) {}
  };
  fix();
  setTimeout(() => {
    fix();
    try {
      cur === null && document.querySelector(".tile") && home();
    } catch (e) {}
    setTimeout(() => document.documentElement.classList.remove("bt"), 60);
  }, 200);
})();
