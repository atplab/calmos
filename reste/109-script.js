(() => {
  /* Journal des nouveautés (ouvert depuis la notification « Nouveautés ») */
  const CL = [
    [
      "17 novembre 2026",
      [
        [
          "🦀",
          "Nouveau jeu : Crabes Farceurs",
          "Tape les farceurs qui sortent du sable dans la salle d’arcade : niveaux à l’infini, mode Rank avec classement, almanach et musique originale.",
        ],
        [
          "🎱",
          "Nouvelle catégorie : Salle de jeux",
          "Le billard et l’air hockey réunis dans une salle tamisée, avec des tables en 3D animées : billes qui roulent, palet, maillets.",
        ],
        [
          "🎲",
          "Nouvelle catégorie : Jeux de société",
          "Motuiles et Échecs sur une étagère, avec un plateau en 3D du jeu choisi.",
        ],
        [
          "🌙",
          "Mode calme ou mode régulier",
          "Choisis ton ambiance dans les Réglages : le mode calme adoucit les animations et demande une confirmation avant les jeux plus dynamiques.",
        ],
        [
          "🔤",
          "Motuiles",
          "Skins à débloquer (Hiver, Océan, Espace) qui changent aussi le fond, mode Libre contre l’IA, parties en ligne plus faciles d’accès et nouvelle musique de concentration.",
        ],
        [
          "♞",
          "Échecs",
          "Niveaux à l’infini, mode Libre (force de l’adversaire et couleur au choix), recherche de joueurs en ligne, salons avec code.",
        ],
        [
          "🎨",
          "Skins à moitié prix",
          "Un thème débloqué dans un jeu de société coûte 50 % moins cher dans l’autre.",
        ],
        [
          "🪸",
          "Jardins de l’aquarium",
          "4 nouvelles plantes pour le Jardin aquatique et 12 coraux pour le Lagon de corail.",
        ],
        [
          "🎵",
          "Nouvelles musiques",
          "2048 et Enligne-bloc ont maintenant leur propre musique, calme et propice à la concentration.",
        ],
        [
          "🧊",
          "Tèconta",
          "De nouvelles pièces de glace de 3 blocs, un puits plus étroit et une musique revisitée.",
        ],
        [
          "🔓",
          "Jeux disponibles dès le début",
          "Quiz, 2048, Récif appétissant et Attaque marine ; Protéger Zeni se débloque à l’étape 40 de l’histoire.",
        ],
        [
          "✨",
          "Petites améliorations",
          "Règles qui s’ouvrent depuis leur bouton, descriptions des jeux de mots plus claires, sons plus réactifs, page de bienvenue revue et correctifs (Constellations, Déménagement…).",
        ],
      ],
    ],
  ];
  window.chgOpen = () => {
    const o0 = document.getElementById("chgo");
    o0 && o0.remove();
    const o = document.createElement("div");
    o.className = "sfr";
    o.id = "chgo";
    o.setAttribute("role", "dialog");
    o.setAttribute("aria-modal", "true");
    o.innerHTML = `<div class="glass sfc chgc"><h2>Nouveautés</h2>${CL.map(([d, L]) => `<p class="chgd">${d}</p><ul class="chgl">${L.map(([i, t, x]) => `<li><i>${i}</i><div><b>${t}</b><span>${x}</span></div></li>`).join("")}</ul>`).join("")}<button class="btn" data-a="chgx">Super !</button></div>`;
    o.addEventListener("click", (e) => {
      (e.target === o || e.target.closest("[data-a=chgx]")) && o.remove();
    });
    document.body.appendChild(o);
  };
  const s = document.createElement("style");
  s.textContent = `.chgc{max-height:86dvh;overflow:auto;text-align:left}.chgc h2{margin:0 0 2px;text-align:center}.chgd{margin:0 0 10px;text-align:center;opacity:.7;font-size:13px}.chgl{list-style:none;margin:0 0 14px;padding:0;display:grid;gap:10px}.chgl li{display:flex;gap:10px;align-items:flex-start;padding:10px;border-radius:14px;background:rgba(255,255,255,.07)}.chgl i{font-style:normal;font-size:22px;line-height:1.1;flex:none;width:28px;text-align:center}.chgl b{display:block;font-size:14px;margin-bottom:2px}.chgl span{font-size:12.5px;opacity:.82;line-height:1.4}.chgc .btn{width:100%}`;
  document.head.appendChild(s);
  setTimeout(() => {
    act.chgx = () => {
      const o = document.getElementById("chgo");
      o && o.remove();
    };
  }, 500);
})();
