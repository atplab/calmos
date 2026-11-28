(() => {
  if (typeof DRM === "undefined" || typeof dNew !== "function") return;
  /* ===== Déménagement, partie 3 : dix ans plus tard, la grande maison (11 pièces). Ajouter une pièce = un objet de plus dans NR ===== */
  const I = (n, s) => [n, s];
  Object.assign(DIT, {
    helmet: I(
      "Casque de vélo",
      '<path d="M4 20q0-13 12-13t12 13z" fill="#e8605a"/><path d="M9 11q-2 4-2 9M16 8v12M23 11q2 4 2 9" stroke="#b8413c" stroke-width="1.6" fill="none"/><path d="M4 20h24v3H4z" fill="#3e4352"/><path d="M8 23l4 5h8l4-5" stroke="#3e4352" stroke-width="1.6" fill="none"/>',
    ),
    schoolbag: I(
      "Sac d’école",
      '<rect x="7" y="8" width="18" height="20" rx="5" fill="#5f86d9"/><path d="M11 8V6a5 5 0 0 1 10 0v2" fill="none" stroke="#3f5fa8" stroke-width="2"/><rect x="10" y="17" width="12" height="8" rx="2" fill="#8fb0f0"/><path d="M10 13h12" stroke="#3f5fa8" stroke-width="1.4"/><circle cx="16" cy="21" r="1.4" fill="#ffd36b"/>',
    ),
    leash: I(
      "Laisse",
      '<path d="M8 6a4 4 0 1 1 0 8M8 14q0 12 10 12t6-10" stroke="#e8605a" stroke-width="3" fill="none" stroke-linecap="round"/><rect x="21" y="11" width="6" height="6" rx="2" fill="#c9ced6"/>',
    ),
    slippers: I(
      "Pantoufles",
      '<path d="M3 22q0-9 6-9t6 9v4H3z" fill="#f2c9a8"/><path d="M4 18q5-6 10 0v-1q-5-7-10 0z" fill="#e8946c"/><path d="M17 22q0-9 6-9t6 9v4H17z" fill="#f2c9a8"/><path d="M18 18q5-6 10 0v-1q-5-7-10 0z" fill="#e8946c"/>',
    ),
    skate: I(
      "Planche à roulettes",
      '<path d="M3 13q0 4 4 4h18q4 0 4-4" stroke="#5fae8a" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="9" cy="22" r="3" fill="#ffd36b"/><circle cx="23" cy="22" r="3" fill="#ffd36b"/><path d="M9 17v3M23 17v3" stroke="#8a8f9a" stroke-width="2"/>',
    ),
    dogbed: I(
      "Panier du chien",
      '<ellipse cx="16" cy="21" rx="13" ry="7" fill="#b98a5a"/><ellipse cx="16" cy="19" rx="10" ry="4.5" fill="#f4e6d0"/><path d="M12 18q1-3 3 0M17 18q1-3 3 0" stroke="#c9a27a" stroke-width="1.4" fill="none"/><circle cx="24" cy="11" r="3" fill="#e8605a"/>',
    ),
    famphoto: I(
      "Photo de famille",
      '<rect x="4" y="6" width="24" height="20" rx="2" fill="#c9a26a"/><rect x="7" y="9" width="18" height="14" fill="#dff0fa"/><circle cx="12" cy="15" r="2.4" fill="#f2c9a8"/><circle cx="19" cy="14" r="2.8" fill="#e8b08a"/><circle cx="16" cy="18.5" r="1.8" fill="#f8dcc4"/><path d="M8 23q4-6 8 0q4-7 9 0z" fill="#7fb0d9"/>',
    ),
    mixer: I(
      "Batteur sur socle",
      '<rect x="6" y="24" width="20" height="4" rx="2" fill="#e8605a"/><path d="M9 24V9q0-4 5-4h9q3 0 3 4v2H15v13z" fill="#e8605a"/><path d="M14 20h10l-1.5 5h-7z" fill="#e6eef6"/><path d="M19 11v8" stroke="#8a8f9a" stroke-width="2"/>',
    ),
    blender: I(
      "Mélangeur",
      '<path d="M10 5h12l-2 15h-8z" fill="#cfe8f6" stroke="#8fb0c9"/><path d="M11 12h10l-1 8h-8z" fill="#f08aa8"/><rect x="9" y="20" width="14" height="8" rx="2" fill="#3e4352"/><circle cx="16" cy="24" r="1.6" fill="#7dffb0"/><rect x="9" y="3" width="14" height="3" rx="1" fill="#3e4352"/>',
    ),
    coffeemaker: I(
      "Cafetière",
      '<rect x="7" y="4" width="18" height="24" rx="3" fill="#3e4352"/><rect x="10" y="7" width="12" height="5" rx="1" fill="#6a7186"/><path d="M11 16h10l-1.5 8h-7z" fill="#cfe8f6"/><path d="M12 19h8l-1 5h-6z" fill="#7a4a2a"/><path d="M21 17q4 0 4 3t-4 3" stroke="#cfe8f6" stroke-width="1.6" fill="none"/>',
    ),
    cookbook: I(
      "Livre de recettes",
      '<rect x="6" y="5" width="20" height="23" rx="2" fill="#e8946c"/><rect x="6" y="5" width="4" height="23" fill="#c96a4a"/><circle cx="18" cy="14" r="5" fill="#fff6e0"/><path d="M15.5 14h5M18 11.500v5" stroke="#e8605a" stroke-width="1.4"/><path d="M13 23h10" stroke="#fff6e0" stroke-width="1.6"/>',
    ),
    apron: I(
      "Tablier",
      '<path d="M11 4h10v5l5 4v15H6V13l5-4z" fill="#7fc0a8"/><path d="M11 4q5 5 10 0" stroke="#4f9a82" stroke-width="1.6" fill="none"/><rect x="11" y="16" width="10" height="7" rx="2" fill="#a8dcc8"/><path d="M6 14H2M26 14h4" stroke="#4f9a82" stroke-width="1.6"/>',
    ),
    lunchbox: I(
      "Boîte à lunch",
      '<rect x="5" y="11" width="22" height="16" rx="3" fill="#f2c24a"/><path d="M5 17h22" stroke="#c99a2e" stroke-width="1.4"/><path d="M11 11V8q0-3 5-3t5 3v3" fill="none" stroke="#c99a2e" stroke-width="2"/><rect x="14" y="15.5" width="4" height="3" rx="1" fill="#fff"/>',
    ),
    teapot: I(
      "Théière",
      '<path d="M8 13h14q3 12-7 13T8 13z" fill="#8fb0d9"/><path d="M22 15q6 0 5 5t-5 3" stroke="#8fb0d9" stroke-width="2.2" fill="none"/><path d="M8 16q-5-1-5-6" stroke="#8fb0d9" stroke-width="3" fill="none" stroke-linecap="round"/><rect x="10" y="10" width="10" height="3" rx="1.5" fill="#5f86b8"/><circle cx="15" cy="8" r="2" fill="#5f86b8"/>',
    ),
    knives: I(
      "Bloc de couteaux",
      '<path d="M8 28l3-16h12l3 16z" fill="#a8724a"/><rect x="12" y="4" width="2.4" height="9" rx="1" fill="#3e4352"/><rect x="16" y="2" width="2.4" height="11" rx="1" fill="#3e4352"/><rect x="20" y="5" width="2.4" height="8" rx="1" fill="#3e4352"/><path d="M11 18h12M10.5 22h13" stroke="#8a5a36" stroke-width="1.2"/>',
    ),
    herbs: I(
      "Fines herbes",
      '<path d="M9 19h14l-2 9H11z" fill="#d98c63"/><path d="M16 19V9M16 14q-5-1-6-6 5 0 6 6zM16 12q5-1 6-6-5 0-6 6zM16 18q-4 0-6-4 4-1 6 4zM16 18q4 0 6-4-4-1-6 4z" fill="#5fae6a" stroke="#4f9a5a" stroke-width=".800"/>',
    ),
    candles: I(
      "Bougeoirs",
      '<rect x="7" y="9" width="4" height="13" rx="1" fill="#fff6e0"/><rect x="21" y="12" width="4" height="10" rx="1" fill="#fff6e0"/><path d="M9 4q2 2.5 0 5-2-2.5 0-5zM23 7q2 2.5 0 5-2-2.5 0-5z" fill="#f4a24a"/><path d="M5 22h8l-1 6H6zM19 22h8l-1 6h-6z" fill="#e2b84a"/>',
    ),
    glasses: I(
      "Coupes",
      '<path d="M5 5h9q0 9-4.5 9T5 5zM9.5 14v10M6 25h7" stroke="#8fb0c9" stroke-width="1.6" fill="#dff0fa"/><path d="M18 5h9q0 9-4.5 9T18 5zM22.5 14v10M19 25h7" stroke="#8fb0c9" stroke-width="1.6" fill="#dff0fa"/>',
    ),
    teaset: I(
      "Service à thé",
      '<path d="M4 14h12q0 9-6 9t-6-9z" fill="#fff" stroke="#c9a6c9"/><path d="M16 15q4 0 3 3t-4 2" stroke="#c9a6c9" stroke-width="1.4" fill="none"/><ellipse cx="10" cy="25" rx="9" ry="2.4" fill="#f4d6ec"/><path d="M20 8h8q0 6-4 6t-4-6z" fill="#fff" stroke="#c9a6c9"/><ellipse cx="24" cy="16" rx="6" ry="1.8" fill="#f4d6ec"/><circle cx="10" cy="17" r="1.6" fill="#f08aa8"/>',
    ),
    flowers: I(
      "Bouquet",
      '<path d="M11 18h10l-2 10h-6z" fill="#8fb0d9"/><path d="M16 18V9M13 18l-3-8M19 18l3-8" stroke="#4f9a5a" stroke-width="1.4"/><circle cx="16" cy="7" r="3.6" fill="#f08aa8"/><circle cx="9.5" cy="9" r="3.2" fill="#f4c24a"/><circle cx="22.5" cy="9" r="3.2" fill="#a98fe0"/>',
    ),
    cake: I(
      "Gâteau",
      '<rect x="5" y="15" width="22" height="11" rx="2" fill="#f4d6a8"/><path d="M5 18q2.7 3 5.5 0t5.5 0 5.5 0 5.5 0v-3H5z" fill="#f08aa8"/><rect x="15" y="7" width="2" height="7" fill="#7fc0ee"/><path d="M16 3q2 2 0 4-2-2 0-4z" fill="#f4a24a"/><ellipse cx="16" cy="27" rx="13" ry="2" fill="#e6eef6"/>',
    ),
    pitcher: I(
      "Pichet",
      '<path d="M9 6h12l2 3-1 18H10L9 9z" fill="#dff0fa" stroke="#8fb0c9"/><path d="M10.5 14h11l-.500 12h-10z" fill="#f4c24a"/><path d="M22 11q6 0 5 6t-5 5" stroke="#8fb0c9" stroke-width="2" fill="none"/><circle cx="14" cy="18" r="1.6" fill="#fff6c0"/><circle cx="18" cy="21" r="1.3" fill="#fff6c0"/>',
    ),
    painting: I(
      "Tableau",
      '<rect x="3" y="6" width="26" height="20" rx="1.5" fill="#e2b84a"/><rect x="6" y="9" width="20" height="14" fill="#9fd0f0"/><path d="M6 23l6-8 4 5 4-7 6 10z" fill="#5fae8a"/><circle cx="22" cy="12.5" r="2" fill="#ffe27a"/>',
    ),
    boardgame: I(
      "Jeu de société",
      '<rect x="4" y="10" width="24" height="16" rx="2" fill="#5f86d9"/><rect x="4" y="10" width="24" height="5" rx="2" fill="#e8605a"/><rect x="9" y="18" width="5" height="5" rx="1" fill="#fff"/><circle cx="11.5" cy="20.5" r="1" fill="#3e4352"/><circle cx="21" cy="20.5" r="3" fill="#ffd36b"/>',
    ),
    projector: I(
      "Projecteur",
      '<rect x="4" y="11" width="24" height="12" rx="3" fill="#e6eaf2"/><circle cx="21" cy="17" r="4.5" fill="#3e4352"/><circle cx="21" cy="17" r="2.4" fill="#7ec8f0"/><circle cx="9" cy="15" r="1.2" fill="#7dffb0"/><path d="M8 20h6" stroke="#9aa3b4" stroke-width="1.4"/><path d="M8 23v3M24 23v3" stroke="#6a7186" stroke-width="2"/>',
    ),
    speaker: I(
      "Haut-parleur",
      '<rect x="8" y="3" width="16" height="26" rx="3" fill="#3e4352"/><circle cx="16" cy="20" r="5.5" fill="#6a7186"/><circle cx="16" cy="20" r="2.2" fill="#22262f"/><circle cx="16" cy="9" r="2.8" fill="#6a7186"/>',
    ),
    gconsole: I(
      "Console de jeux",
      '<rect x="4" y="10" width="24" height="12" rx="3" fill="#f4f6fa"/><rect x="4" y="15" width="24" height="2" fill="#5f86d9"/><circle cx="23" cy="13" r="1.2" fill="#7dffb0"/><rect x="8" y="24" width="16" height="2.4" rx="1" fill="#c9ced6"/>',
    ),
    popcorn: I(
      "Maïs soufflé",
      '<path d="M8 13h16l-2 15H10z" fill="#fff"/><path d="M11 13l1 15M16 13v15M21 13l-1 15" stroke="#e8605a" stroke-width="2.4"/><circle cx="11" cy="10" r="3.4" fill="#fff3b0"/><circle cx="16" cy="8" r="3.8" fill="#ffe98a"/><circle cx="21" cy="10" r="3.4" fill="#fff3b0"/>',
    ),
    headset: I(
      "Casque d’écoute",
      '<path d="M6 20v-4a10 10 0 0 1 20 0v4" fill="none" stroke="#3e4352" stroke-width="3"/><rect x="3" y="18" width="6" height="10" rx="3" fill="#e8605a"/><rect x="23" y="18" width="6" height="10" rx="3" fill="#e8605a"/>',
    ),
    movies: I(
      "Films",
      '<rect x="5" y="6" width="5" height="22" rx="1" fill="#e8605a"/><rect x="11" y="4" width="5" height="24" rx="1" fill="#5f86d9"/><rect x="17" y="7" width="5" height="21" rx="1" fill="#f2c24a"/><rect x="23" y="5" width="5" height="23" rx="1" fill="#5fae8a"/><path d="M6.5 10h2M12.5 8h2M18.5 11h2M24.5 9h2" stroke="#fff" stroke-width="1.4"/>',
    ),
    beanbag: I(
      "Pouf poire",
      '<path d="M16 5q9 0 11 13 1 9-11 9T5 18Q7 5 16 5z" fill="#a98fe0"/><path d="M11 10q5-3 10 0" stroke="#8a6fd0" stroke-width="1.6" fill="none"/><ellipse cx="16" cy="12" rx="5" ry="2.4" fill="#bfa8f0"/>',
    ),
    snacks: I(
      "Croustilles",
      '<path d="M8 6l2-2 2 2 2-2 2 2 2-2 2 2 2-2v22H8z" fill="#f2c24a"/><ellipse cx="16" cy="17" rx="5.5" ry="4" fill="#e8605a"/><path d="M12.5 17h7" stroke="#fff" stroke-width="1.6"/>',
    ),
    guitar: I(
      "Guitare",
      '<path d="M20 3l3 3-9 10-3-3z" fill="#8a5a36"/><circle cx="11" cy="21" r="7.5" fill="#e8946c"/><circle cx="15" cy="16" r="4.5" fill="#e8946c"/><circle cx="11.5" cy="20.5" r="2.4" fill="#3e2a1e"/><path d="M21 4l3-2M23 6l3-2" stroke="#c9ced6" stroke-width="1.6"/>',
    ),
    laptop: I(
      "Portable",
      '<rect x="6" y="6" width="20" height="14" rx="2" fill="#3e4352"/><rect x="8" y="8" width="16" height="10" fill="#7ec8f0"/><path d="M3 22h26l-2 4H5z" fill="#c9ced6"/><path d="M13 24h6" stroke="#8a8f9a" stroke-width="1.2"/>',
    ),
    phone: I(
      "Téléphone",
      '<rect x="10" y="3" width="12" height="26" rx="3" fill="#3e4352"/><rect x="11.5" y="6" width="9" height="18" rx="1" fill="#7ec8f0"/><circle cx="16" cy="26.5" r="1.2" fill="#8a8f9a"/><path d="M13 10h6M13 13h4" stroke="#fff" stroke-width="1.2"/>',
    ),
    trophy: I(
      "Trophée",
      '<path d="M10 4h12v6q0 7-6 7t-6-7z" fill="#f2c24a"/><path d="M10 6H5q0 7 6 7M22 6h5q0 7-6 7" stroke="#e2a82a" stroke-width="2" fill="none"/><rect x="14.5" y="17" width="3" height="6" fill="#e2a82a"/><rect x="10" y="23" width="12" height="5" rx="1" fill="#8a5a36"/>',
    ),
    hoodie: I(
      "Coton ouaté",
      '<path d="M11 6q5-4 10 0l7 5-3 6-3-2v13H9V15l-3 2-3-6z" fill="#7fa3d9"/><path d="M11 6q5 7 10 0" fill="#5f86b8"/><rect x="12" y="19" width="8" height="5" rx="2" fill="#5f86b8"/><path d="M14.5 11v4M17.5 11v4" stroke="#fff" stroke-width="1"/>',
    ),
    jeans: I(
      "Jeans",
      '<path d="M8 4h16l2 24h-8l-2-14-2 14H6z" fill="#5f7fb8"/><path d="M8 8h16" stroke="#3f5f98" stroke-width="1.4"/><path d="M16 8v6" stroke="#3f5f98" stroke-width="1.2"/><rect x="10" y="9.5" width="3.5" height="3" fill="#7f9fd8"/>',
    ),
    diary: I(
      "Journal intime",
      '<rect x="7" y="5" width="18" height="23" rx="2" fill="#c98ad9"/><rect x="7" y="5" width="3.5" height="23" fill="#a96ab8"/><rect x="21" y="14" width="6" height="5" rx="1.5" fill="#f2c24a"/><path d="M16 11.500q2-2.5 3.5 0t-3.5 5q-5-2.5-3.5-5t3.5 0z" fill="#fff"/>',
    ),
    lavalamp: I(
      "Lampe à lave",
      '<path d="M12 4h8l2 18H10z" fill="#7ec8f0"/><ellipse cx="16" cy="16" rx="3" ry="4" fill="#f08aa8"/><circle cx="15" cy="9" r="1.8" fill="#f08aa8"/><path d="M9 22h14l2 6H7z" fill="#8a8f9a"/><rect x="12" y="2" width="8" height="3" rx="1" fill="#8a8f9a"/>',
    ),
    basketball: I(
      "Ballon de basket",
      '<circle cx="16" cy="16" r="12" fill="#e8843a"/><path d="M4 16h24M16 4v24M7.5 7.500q7 8.5 0 17M24.5 7.500q-7 8.5 0 17" stroke="#3e2a1e" stroke-width="1.4" fill="none"/>',
    ),
    metronome: I(
      "Métronome",
      '<path d="M12 4h8l5 24H7z" fill="#a8724a"/><path d="M13.5 8h5l3 16h-11z" fill="#f4e6d0"/><path d="M16 24L20 9" stroke="#3e4352" stroke-width="1.6"/><rect x="17.5" y="11" width="4" height="3" fill="#e2b84a"/>',
    ),
    sheets: I(
      "Partitions",
      '<rect x="6" y="4" width="20" height="24" rx="1.5" fill="#fffaf0" stroke="#c9c2b0"/><path d="M9 10h14M9 13h14M9 19h14M9 22h14" stroke="#9aa3b4" stroke-width=".800"/><circle cx="12" cy="13" r="1.6" fill="#3e4352"/><path d="M13.6 13V8l5 1" stroke="#3e4352" stroke-width="1.2" fill="none"/><circle cx="19" cy="22" r="1.6" fill="#3e4352"/><path d="M20.6 22v-5" stroke="#3e4352" stroke-width="1.2"/>',
    ),
    violin: I(
      "Violon",
      '<path d="M21 2l3 3-8 9-3-3z" fill="#5a3a26"/><path d="M12 12q5 0 6 4-1 2 1 4 1 6-5 8-7 1-9-5-1-4 3-4 1-3-1-4 0-3 5-3z" fill="#c9733a"/><path d="M9 22l8-8" stroke="#3e2a1e" stroke-width="1.2"/><path d="M4 9l22 14" stroke="#e6d6b0" stroke-width="1.2"/>',
    ),
    vinyls: I(
      "Vinyles",
      '<rect x="3" y="7" width="18" height="18" rx="1" fill="#e8946c"/><circle cx="20" cy="16" r="10" fill="#22262f"/><circle cx="20" cy="16" r="6.5" fill="none" stroke="#3e4352"/><circle cx="20" cy="16" r="3" fill="#f2c24a"/><circle cx="20" cy="16" r=".900" fill="#22262f"/>',
    ),
    turntable: I(
      "Tourne-disque",
      '<rect x="3" y="9" width="26" height="17" rx="2" fill="#a8724a"/><circle cx="13" cy="17.5" r="7" fill="#22262f"/><circle cx="13" cy="17.5" r="2" fill="#e8605a"/><path d="M25 11v6l-6 5" stroke="#c9ced6" stroke-width="1.8" fill="none"/><circle cx="25" cy="23" r="1.4" fill="#f2c24a"/>',
    ),
    mic: I(
      "Micro",
      '<rect x="12" y="3" width="8" height="13" rx="4" fill="#8a8f9a"/><path d="M13 7h6M13 10h6" stroke="#6a7186" stroke-width="1"/><path d="M8 13q0 8 8 8t8-8M16 21v5M10 27h12" stroke="#3e4352" stroke-width="2" fill="none"/>',
    ),
    tambourine: I(
      "Tambourin",
      '<ellipse cx="16" cy="16" rx="12" ry="9" fill="#e2b84a"/><ellipse cx="16" cy="14.5" rx="9.5" ry="6.5" fill="#fff6e0"/><circle cx="5" cy="18" r="2" fill="#c9ced6"/><circle cx="16" cy="25" r="2" fill="#c9ced6"/><circle cx="27" cy="18" r="2" fill="#c9ced6"/>',
    ),
    flute: I(
      "Flûte",
      '<path d="M4 25L27 6" stroke="#c9ced6" stroke-width="4" stroke-linecap="round"/><circle cx="10" cy="20" r="1.1" fill="#6a7186"/><circle cx="14" cy="16.7" r="1.1" fill="#6a7186"/><circle cx="18" cy="13.4" r="1.1" fill="#6a7186"/><circle cx="22" cy="10.1" r="1.1" fill="#6a7186"/>',
    ),
    ukulele: I(
      "Ukulélé",
      '<path d="M21 2l3 3-8 9-3-3z" fill="#8a5a36"/><ellipse cx="11" cy="20" rx="7" ry="8" fill="#f2c27a" transform="rotate(40 11 20)"/><circle cx="12" cy="19" r="2.2" fill="#3e2a1e"/><path d="M7 25l5-5" stroke="#8a5a36" stroke-width="1.4"/>',
    ),
    detergent: I(
      "Lessive",
      '<path d="M9 9h10l5 5v14H9z" fill="#5f9ad9"/><rect x="11" y="4" width="7" height="5" rx="1" fill="#e8605a"/><path d="M21 13h4" stroke="#3f6fa8" stroke-width="2"/><circle cx="15" cy="20" r="4" fill="#fff"/><path d="M13 20q2-3 4 0" stroke="#5f9ad9" stroke-width="1.2" fill="none"/>',
    ),
    iron: I(
      "Fer à repasser",
      '<path d="M3 23q2-11 14-11h8q4 0 4 5v6z" fill="#7ec8f0"/><path d="M3 23h26v3H3z" fill="#c9ced6"/><path d="M12 12q0-5 6-5h5q4 0 4 4" stroke="#3e4352" stroke-width="2.4" fill="none"/><circle cx="22" cy="18" r="1.4" fill="#fff"/>',
    ),
    basket: I(
      "Panier à linge",
      '<path d="M5 12h22l-3 16H8z" fill="#e2c89a"/><path d="M6 16h20M7 20h18M8 24h16M11 12l1 16M16 12v16M21 12l-1 16" stroke="#c9a66a" stroke-width="1"/><path d="M8 12q8-9 16 0" fill="#f08aa8"/><path d="M12 9q4-3 8 0" stroke="#fff" stroke-width="1.2" fill="none"/>',
    ),
    cleanclothes: I(
      "Linge propre",
      '<rect x="5" y="19" width="22" height="7" rx="2" fill="#7fc0a8"/><rect x="6" y="13" width="20" height="7" rx="2" fill="#f4c24a"/><rect x="7" y="7" width="18" height="7" rx="2" fill="#8fb0f0"/><path d="M10 10h6M9 16h7M8 22h8" stroke="#fff" stroke-width="1.2"/>',
    ),
    pegs: I(
      "Pinces à linge",
      '<path d="M8 4l3 20h-4zM13 4l-2 20h4z" fill="#e2b84a"/><rect x="7" y="11" width="7" height="2.4" fill="#8a8f9a"/><path d="M20 6l3 20h-4zM25 6l-2 20h4z" fill="#f08aa8"/><rect x="19" y="13" width="7" height="2.4" fill="#8a8f9a"/>',
    ),
    broom: I(
      "Balai",
      '<path d="M22 3L12 19" stroke="#c9a26a" stroke-width="2.6" stroke-linecap="round"/><path d="M8 17l8 5-5 8-9-6z" fill="#f2c24a"/><path d="M5.5 22l6 4M4 24.500l6 4" stroke="#c99a2e" stroke-width="1"/><path d="M8 17l8 5" stroke="#e8605a" stroke-width="2.4"/>',
    ),
    vacuum: I(
      "Aspirateur",
      '<rect x="5" y="17" width="17" height="10" rx="5" fill="#e8605a"/><circle cx="9" cy="28" r="2.2" fill="#3e4352"/><circle cx="19" cy="28" r="2.2" fill="#3e4352"/><path d="M19 18q5-12 8-12v20" stroke="#6a7186" stroke-width="2.4" fill="none"/><rect x="23" y="26" width="7" height="3" rx="1" fill="#3e4352"/>',
    ),
    spray: I(
      "Nettoyant",
      '<path d="M10 13h10v15H10z" fill="#7dd8c0"/><path d="M12 13V9h6v4" fill="#fff"/><path d="M11 5h10v4H11zM21 6h5M14 9l-3 4" stroke="#e8605a" stroke-width="2" fill="#e8605a"/><rect x="12" y="18" width="6" height="6" rx="1" fill="#fff"/>',
    ),
    hammer: I(
      "Marteau",
      '<path d="M15 12L8 28" stroke="#c9a26a" stroke-width="3.6" stroke-linecap="round"/><path d="M8 6l14 2 2 5-5 1-2-2-8 1z" fill="#6a7186"/><path d="M8 6l-3 4 3 2z" fill="#3e4352"/>',
    ),
    saw: I(
      "Scie",
      '<path d="M5 9l20 8-3 6-2-1-1 2-2-1-1 2-2-1-1 2-2-1-1 2-2-1-1 2-2-1z" fill="#c9ced6"/><path d="M22 14l6-2q3 5 0 10l-6-2z" fill="#e8946c"/><circle cx="26" cy="17" r="1.8" fill="#fff6e0"/>',
    ),
    screwdriver: I(
      "Tournevis",
      '<path d="M6 26l11-11" stroke="#c9ced6" stroke-width="2.6" stroke-linecap="round"/><path d="M16 12l4 4 8-7q2-3-1-5t-5 1z" fill="#f2c24a"/><path d="M20 9l4 4" stroke="#c99a2e" stroke-width="1.4"/>',
    ),
    drill: I(
      "Perceuse",
      '<path d="M6 8h15q3 0 3 4t-3 4h-5l-1 12h-6l1-12H6z" fill="#f2c24a"/><rect x="24" y="10.5" width="6" height="3" fill="#8a8f9a"/><rect x="8" y="25" width="9" height="4" rx="1" fill="#3e4352"/><path d="M9 11h9" stroke="#3e4352" stroke-width="1.6"/>',
    ),
    toolbox: I(
      "Coffre à outils",
      '<rect x="4" y="13" width="24" height="14" rx="2" fill="#e8605a"/><path d="M4 18h24" stroke="#b8413c" stroke-width="1.6"/><path d="M11 13V9q0-2 2-2h6q2 0 2 2v4" fill="none" stroke="#3e4352" stroke-width="2.4"/><rect x="14" y="16.5" width="4" height="3.6" rx="1" fill="#f2c24a"/>',
    ),
    pump: I(
      "Pompe à vélo",
      '<rect x="14" y="8" width="4" height="18" rx="1" fill="#5f86d9"/><path d="M9 6h14M16 6v3" stroke="#3e4352" stroke-width="2.6" stroke-linecap="round"/><path d="M9 27h14" stroke="#3e4352" stroke-width="3" stroke-linecap="round"/><path d="M18 22q7 0 7-7" stroke="#3e4352" stroke-width="1.6" fill="none"/>',
    ),
    flashlight: I(
      "Lampe de poche",
      '<path d="M4 12l8 2v6l-8 2z" fill="#f2c24a"/><rect x="12" y="13" width="15" height="8" rx="2" fill="#3e4352"/><rect x="17" y="15" width="5" height="3" rx="1" fill="#e8605a"/><path d="M1 11l2 2M0 17h3M1 23l2-2" stroke="#ffe98a" stroke-width="1.4"/>',
    ),
    gloves: I(
      "Gants de travail",
      '<path d="M5 28V14q0-2 2-2v-5q2-2 3 0V5q2-2 3 0v2q2-2 3 0v9l2-3q3-1 2 2l-4 8v5z" fill="#e2b84a"/><rect x="5" y="24" width="11" height="4" fill="#8a5a36"/><path d="M20 28V17l5-6q3 0 2 3l-2 5v9z" fill="#c99a2e"/>',
    ),
    mbike: I(
      "Vélo de montagne",
      '<circle cx="8" cy="21" r="6" fill="none" stroke="#3e4352" stroke-width="2.4"/><circle cx="24" cy="21" r="6" fill="none" stroke="#3e4352" stroke-width="2.4"/><path d="M8 21l5-10h8l3 10M13 11l5 10h-10M21 11l-3 10" stroke="#5fae8a" stroke-width="2" fill="none"/><path d="M11 9h5M20 8l3 1" stroke="#3e4352" stroke-width="2"/>',
    ),
    cactus: I(
      "Cactus",
      '<path d="M10 20h12l-2 9h-8z" fill="#d98c63"/><rect x="13" y="5" width="6" height="16" rx="3" fill="#5fae6a"/><path d="M13 14H9.500v-5M19 12h3.500V8" stroke="#5fae6a" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="16" cy="5.5" r="1.8" fill="#f08aa8"/>',
    ),
    orchid: I(
      "Orchidée",
      '<path d="M11 21h10l-2 8h-6z" fill="#f4f6fa" stroke="#c9ced6"/><path d="M16 21V8q4-4 8-2" stroke="#4f9a5a" stroke-width="1.4" fill="none"/><circle cx="16" cy="10" r="3.2" fill="#e08ad9"/><circle cx="22" cy="6" r="2.8" fill="#f0a8e8"/><circle cx="16" cy="10" r="1" fill="#f2c24a"/><path d="M16 21q-6-1-7-5 6 0 7 5z" fill="#5fae6a"/>',
    ),
    bonsai: I(
      "Bonsaï",
      '<rect x="8" y="23" width="16" height="5" rx="1.5" fill="#5f86b8"/><path d="M16 23q-1-5 2-8-4-1-5-4" stroke="#8a5a36" stroke-width="2.4" fill="none"/><ellipse cx="11" cy="9" rx="6" ry="4" fill="#5fae6a"/><ellipse cx="21" cy="13" rx="6" ry="3.6" fill="#4f9a5a"/><ellipse cx="17" cy="6" rx="4.5" ry="3" fill="#7fc48a"/>',
    ),
    seeds: I(
      "Semences",
      '<rect x="5" y="8" width="13" height="18" rx="1.5" fill="#f4e6c0" stroke="#c9b88a"/><circle cx="11.5" cy="15" r="3.6" fill="#e8605a"/><path d="M11.5 19v4" stroke="#4f9a5a" stroke-width="1.4"/><rect x="15" y="11" width="13" height="18" rx="1.5" fill="#e6f4d6" stroke="#a8c98a"/><circle cx="21.5" cy="18" r="3.6" fill="#f2c24a"/><path d="M21.5 22v4" stroke="#4f9a5a" stroke-width="1.4"/>',
    ),
    trowel: I(
      "Transplantoir",
      '<path d="M4 10q8-6 13 3l-4 6Q5 20 4 10z" fill="#c9ced6"/><path d="M15 16l5 5" stroke="#8a8f9a" stroke-width="2.4"/><path d="M19 20l8 8" stroke="#e8946c" stroke-width="4.4" stroke-linecap="round"/>',
    ),
    mister: I(
      "Vaporisateur",
      '<path d="M9 14h10q3 14-5 14T9 14z" fill="#9fe0d0"/><rect x="11" y="9" width="6" height="5" fill="#e6eef6"/><path d="M10 5h9v4h-9zM19 6h4M12 9l-2 4" stroke="#5fae8a" stroke-width="2" fill="#5fae8a"/><path d="M26 4l2-1M26 7h3M26 10l2 1" stroke="#7ec8f0" stroke-width="1.2"/>',
    ),
    terrarium: I(
      "Terrarium",
      '<path d="M16 3l10 7v14l-10 5-10-5V10z" fill="#dff4ee" stroke="#8a8f9a" stroke-width="1.4"/><path d="M6 21l10 3 10-3v3l-10 5-10-5z" fill="#8a5a36"/><path d="M12 22v-6M12 18q-3-1-3-4M20 22v-4" stroke="#4f9a5a" stroke-width="1.6" fill="none"/><circle cx="20" cy="16.5" r="2.4" fill="#5fae6a"/><path d="M16 3v21" stroke="#8a8f9a" stroke-width=".800"/>',
    ),
    feeder: I(
      "Mangeoire",
      '<path d="M16 2v5" stroke="#8a8f9a" stroke-width="1.4"/><path d="M5 12l11-6 11 6z" fill="#e8605a"/><rect x="10" y="12" width="12" height="11" fill="#dff0fa" stroke="#8fb0c9"/><rect x="10" y="17" width="12" height="6" fill="#e2b84a"/><rect x="6" y="23" width="20" height="3" rx="1" fill="#8a5a36"/><circle cx="25" cy="20" r="2.6" fill="#5f86d9"/><path d="M27.5 20l2 .600-2 .600z" fill="#f2c24a"/>',
    ),
    sunhat: I(
      "Chapeau de paille",
      '<ellipse cx="16" cy="20" rx="14" ry="5" fill="#f2d68a"/><path d="M8 19q0-11 8-11t8 11z" fill="#f2d68a"/><path d="M8 18q8 4 16 0v-3q-8 4-16 0z" fill="#e8605a"/>',
    ),
    tongs: I(
      "Pinces à BBQ",
      '<path d="M5 27L22 6q3-2 4 0L8 28zM9 28L26 9q3-1 3 2L11 29z" fill="#c9ced6" stroke="#8a8f9a" stroke-width=".800"/><path d="M5 27l4 1 2 1" stroke="#3e4352" stroke-width="3" stroke-linecap="round"/>',
    ),
    burgers: I(
      "Boulettes",
      '<ellipse cx="16" cy="24" rx="13" ry="4" fill="#e6eef6"/><ellipse cx="10" cy="20" rx="6" ry="3.6" fill="#8a4a2a"/><ellipse cx="21" cy="21" rx="6" ry="3.6" fill="#9a5a36"/><ellipse cx="16" cy="15" rx="6" ry="3.6" fill="#a8623a"/><path d="M12 14.500l8 1M12 16.500l8-1" stroke="#5a2a16" stroke-width="1"/>',
    ),
    condiments: I(
      "Condiments",
      '<path d="M7 12h7v16H7z" fill="#e8605a"/><path d="M9 12l1.5-7 1.5 7z" fill="#e8605a"/><rect x="8" y="17" width="5" height="6" fill="#fff"/><path d="M18 12h7v16h-7z" fill="#f2c24a"/><path d="M20 12l1.5-7 1.5 7z" fill="#f2c24a"/><rect x="19" y="17" width="5" height="6" fill="#fff"/>',
    ),
    lemonade: I(
      "Limonade",
      '<path d="M9 8h14l-2 20H11z" fill="#dff0fa" stroke="#8fb0c9"/><path d="M10 13h12l-1.5 14h-9z" fill="#ffe98a"/><circle cx="20" cy="9" r="4" fill="#f2c24a"/><circle cx="20" cy="9" r="2.4" fill="#fff3b0"/><path d="M14 4l2 22" stroke="#e8605a" stroke-width="1.6"/>',
    ),
    salad: I(
      "Salade",
      '<path d="M4 15h24q0 12-12 12T4 15z" fill="#e6eef6" stroke="#c9ced6"/><circle cx="10" cy="14" r="4" fill="#7fc48a"/><circle cx="17" cy="12" r="4.5" fill="#5fae6a"/><circle cx="23" cy="14" r="3.6" fill="#8fd49a"/><circle cx="14" cy="14.5" r="1.8" fill="#e8605a"/><circle cx="21" cy="13" r="1.5" fill="#e8605a"/>',
    ),
    marshmallow: I(
      "Guimauves",
      '<path d="M3 28L24 9" stroke="#a8724a" stroke-width="2" stroke-linecap="round"/><rect x="14" y="10" width="7" height="7" rx="2" fill="#fff" transform="rotate(-42 17.5 13.5)"/><rect x="20" y="4.5" width="7" height="7" rx="2" fill="#fff3d6" transform="rotate(-42 23.5 8)"/>',
    ),
    cooler: I(
      "Glacière",
      '<rect x="4" y="12" width="24" height="15" rx="2" fill="#5f9ad9"/><rect x="3" y="9" width="26" height="5" rx="2" fill="#f4f6fa"/><path d="M10 9V7q0-2 2-2h8q2 0 2 2v2" fill="none" stroke="#8a8f9a" stroke-width="2"/><path d="M16 16v7M12.5 18l7 3M19.5 18l-7 3" stroke="#fff" stroke-width="1.4"/>',
    ),
    frisbee: I(
      "Frisbee",
      '<ellipse cx="16" cy="17" rx="13" ry="6" fill="#f08aa8"/><ellipse cx="16" cy="15.5" rx="9" ry="3.6" fill="#f8b8cc"/><path d="M3 9l3 2M5 5l2 3" stroke="#c9ced6" stroke-width="1.4"/>',
    ),
    floatie: I(
      "Bouée flamant",
      '<ellipse cx="15" cy="22" rx="12" ry="6" fill="#f8a8c8"/><ellipse cx="15" cy="21" rx="6" ry="2.6" fill="#7ec8f0"/><path d="M24 20q4-8 0-13-3-3-5 0" stroke="#f8a8c8" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M19 7l-4 2 4 1z" fill="#3e4352"/><circle cx="21" cy="6" r=".900" fill="#3e4352"/>',
    ),
    ring: I(
      "Bouée",
      '<ellipse cx="16" cy="17" rx="13" ry="9" fill="#fff"/><path d="M4 13q4-5 8-5l2 5q-3 0-5 3zM28 13q-4-5-8-5l-2 5q3 0 5 3zM8 24q4 3 8 2v-5q-3 0-5-2zM24 24q-4 3-8 2v-5q3 0 5-2z" fill="#e8605a"/><ellipse cx="16" cy="17" rx="6" ry="4" fill="#7ec8f0"/>',
    ),
    beachball: I(
      "Ballon de plage",
      '<circle cx="16" cy="16" r="12" fill="#fff"/><path d="M16 4q-9 4-9 12t9 12q-4-12 0-24z" fill="#e8605a"/><path d="M16 4q9 4 9 12t-9 12q4-12 0-24z" fill="#5f9ad9"/><path d="M16 4q-3 12 0 24 3-12 0-24z" fill="#f2c24a"/>',
    ),
    noodle: I(
      "Nouille de piscine",
      '<path d="M5 26q0-18 10-18t7 10 6-12" stroke="#7dd87a" stroke-width="5" fill="none" stroke-linecap="round"/>',
    ),
    goggles: I(
      "Lunettes de plongée",
      '<rect x="3" y="10" width="26" height="11" rx="5" fill="#5f9ad9"/><rect x="5.5" y="12" width="9" height="7" rx="3" fill="#dff0fa"/><rect x="17.5" y="12" width="9" height="7" rx="3" fill="#dff0fa"/><path d="M26 10q2-6 2 6" stroke="#f2c24a" stroke-width="2.4" fill="none"/>',
    ),
    flippers: I(
      "Palmes",
      '<path d="M9 3q3 0 3 4l2 14q0 7-6 7t-5-7L7 7q0-4 2-4z" fill="#f2c24a"/><path d="M8 12v13M5.5 22l2 3M11 22l-2 3" stroke="#c99a2e" stroke-width="1.2"/><path d="M22 5q3 0 3 4l2 12q0 7-6 7t-5-7l4-12q0-4 2-4z" fill="#f2c24a"/><path d="M21.5 13v12" stroke="#c99a2e" stroke-width="1.2"/>',
    ),
    sunscreen: I(
      "Crème solaire",
      '<path d="M10 10h12v16q0 3-6 3t-6-3z" fill="#f2a24a"/><rect x="13" y="4" width="6" height="6" rx="1" fill="#fff"/><circle cx="16" cy="18" r="3.4" fill="#ffe98a"/><path d="M16 12.500v1.500M16 22v1.500M10.5 18H12M20 18h1.5" stroke="#ffe98a" stroke-width="1.4"/>',
    ),
    btowel: I(
      "Serviette de plage",
      '<rect x="4" y="9" width="24" height="15" rx="3" fill="#7ec8f0"/><path d="M4 13h24M4 17h24M4 21h24" stroke="#fff" stroke-width="2"/><path d="M4 9v15M28 9v15" stroke="#f2c24a" stroke-width="2"/>',
    ),
    net: I(
      "Épuisette",
      '<path d="M29 3L14 18" stroke="#c9ced6" stroke-width="2.4" stroke-linecap="round"/><ellipse cx="10" cy="21" rx="7" ry="5" fill="none" stroke="#5f86d9" stroke-width="2" transform="rotate(-40 10 21)"/><path d="M5 19q3 10 9 7M7 17l7 9M10 16l6 7" stroke="#8fb0f0" stroke-width=".900" fill="none"/>',
    ),
    chlorine: I(
      "Chlore",
      '<path d="M8 10h16v16q0 2-2 2H10q-2 0-2-2z" fill="#f4f6fa" stroke="#c9ced6"/><rect x="7" y="7" width="18" height="4" rx="1.5" fill="#5f9ad9"/><rect x="10" y="15" width="12" height="8" fill="#7ec8f0"/><path d="M12 19q2-2 4 0t4 0" stroke="#fff" stroke-width="1.4" fill="none"/>',
    ),
    watergun: I(
      "Fusil à eau",
      '<path d="M3 11h20v6H3z" fill="#7dd87a"/><path d="M12 17l-2 10h6l1-10z" fill="#5fae6a"/><rect x="14" y="5" width="9" height="6" rx="2" fill="#f2c24a"/><rect x="23" y="12.5" width="6" height="3" fill="#e8605a"/><path d="M17 17q0 4 4 4" stroke="#3e4352" stroke-width="1.6" fill="none"/>',
    ),
  });
  const K = (c, a) => ({ c, a: a || [] });
  Object.entries({
    helmet: K(["hook", "wshelf"], ["console", "bench", "shelf"]),
    schoolbag: K(["hook"], ["bench", "floor"]),
    leash: K(["hook"], ["console"]),
    slippers: K(["shoecab"], ["floor", "shoes"]),
    skate: K(["floor"], ["shoecab"]),
    dogbed: K(["floor"]),
    famphoto: K(["wall"], ["console"]),
    mixer: K(["counter", "island"], []),
    blender: K(["counter", "island"], ["cab"]),
    coffeemaker: K(["counter"], ["island"]),
    cookbook: K(["wshelf", "island"], ["counter", "table"]),
    apron: K(["hook"], ["island"]),
    lunchbox: K(["cab", "island"], ["counter", "table", "fridge"]),
    teapot: K(["stove", "counter"], ["island", "table"]),
    knives: K(["counter"], ["island"]),
    herbs: K(["island", "counter", "wshelf"], ["table"]),
    candles: K(["table", "console"], ["wshelf"]),
    glasses: K(["buffet"], ["table"]),
    teaset: K(["buffet"], ["table", "console"]),
    flowers: K(["table", "console"], ["side"]),
    cake: K(["table"], ["console"]),
    pitcher: K(["table"], ["console", "buffet"]),
    painting: K(["wall"]),
    boardgame: K(["buffet"], ["table", "console"]),
    projector: K(["wshelf"], ["coffee", "side"]),
    speaker: K(["tv", "floor"], ["side", "shelf"]),
    gconsole: K(["tv"], ["coffee"]),
    popcorn: K(["coffee", "side"], ["sofa"]),
    headset: K(["tv", "desk", "coffee"], ["sofa", "side", "bed"]),
    movies: K(["shelf", "tv"], ["coffee"]),
    beanbag: K(["floor"]),
    snacks: K(["coffee"], ["side", "sofa"]),
    guitar: K(["gstand"], ["wall", "floor", "hook"]),
    laptop: K(["desk"], ["bed"]),
    phone: K(["side", "desk"], ["bed", "wshelf"]),
    trophy: K(["shelf", "wshelf"], ["desk", "side", "dresser"]),
    hoodie: K(["wardrobe"], ["drawer", "bed"]),
    jeans: K(["wardrobe", "drawer"], []),
    diary: K(["side", "drawer"], ["desk", "bed", "shelf"]),
    lavalamp: K(["side", "desk"], ["shelf", "wshelf"]),
    basketball: K(["floor"], ["shelf", "toybox"]),
    metronome: K(["piano"], ["shelf", "side"]),
    sheets: K(["mstand"], ["piano", "shelf"]),
    violin: K(["hook"], ["shelf", "piano"]),
    vinyls: K(["shelf"], ["side", "console"]),
    turntable: K(["console", "side"], ["shelf"]),
    mic: K(["side", "console"], ["piano", "shelf"]),
    tambourine: K(["shelf"], ["piano", "side", "console"]),
    flute: K(["shelf", "wshelf"], ["piano", "mstand"]),
    ukulele: K(["hook"], ["gstand", "wall"]),
    detergent: K(["wshelf", "washtop"], ["sink"]),
    iron: K(["ironing"], ["wshelf", "washtop"]),
    basket: K(["washtop", "floor"], ["ironing"]),
    cleanclothes: K(["dryer"], ["ironing", "washtop", "basket"]),
    pegs: K(["rack"], ["wshelf", "washtop"]),
    broom: K(["hook"], ["floor"]),
    vacuum: K(["floor"]),
    spray: K(["wshelf", "sink"], ["washtop"]),
    hammer: K(["pegboard"], ["workbench", "toolchest"]),
    saw: K(["pegboard"], ["workbench"]),
    screwdriver: K(["toolchest", "pegboard"], ["workbench"]),
    drill: K(["workbench", "toolchest"], ["shelf"]),
    toolbox: K(["workbench", "shelf"], ["floor", "side"]),
    pump: K(["floor", "shelf"], ["hook"]),
    flashlight: K(["toolchest", "workbench"], ["shelf", "side"]),
    gloves: K(["workbench", "pegboard"], ["toolchest", "side"]),
    mbike: K(["floor"], ["hook"]),
    cactus: K(["pshelf"], ["potting", "side"]),
    orchid: K(["pshelf", "side"], ["potting"]),
    bonsai: K(["pshelf", "side"], ["potting"]),
    seeds: K(["potting"], ["pshelf"]),
    trowel: K(["potting"], ["pshelf", "floor"]),
    mister: K(["potting", "pshelf"], ["side"]),
    terrarium: K(["side", "pshelf"], ["potting"]),
    feeder: K(["hook"], ["pshelf"]),
    sunhat: K(["hook", "lounger"], ["sofa", "side", "table"]),
    tongs: K(["bbq"], ["side", "table"]),
    burgers: K(["bbq"], ["table", "side"]),
    condiments: K(["table", "side"], ["bbq"]),
    lemonade: K(["table"], ["side"]),
    salad: K(["table"], ["side"]),
    marshmallow: K(["firepit"], ["table"]),
    cooler: K(["floor"], ["deckbox"]),
    frisbee: K(["deckbox", "floor"], ["table"]),
    floatie: K(["pool"], ["floor", "deckbox"]),
    ring: K(["pool"], ["deckbox", "floor"]),
    beachball: K(["pool", "floor"], ["deckbox"]),
    noodle: K(["pool", "deckbox"], ["floor"]),
    goggles: K(["deckbox", "lounger"], ["side"]),
    flippers: K(["deckbox"], ["floor", "lounger"]),
    sunscreen: K(["side", "lounger"], ["deckbox", "table"]),
    btowel: K(["lounger"], ["rail", "deckbox"]),
    net: K(["poolshed"], ["floor"]),
    chlorine: K(["poolshed"], []),
    watergun: K(["deckbox"], ["pool", "floor", "lounger"]),
  }).forEach(([k, v]) => {
    DOK[k] = v;
    DIT[k][2] = v.c;
  });
  const more = (id, ...z) => {
    const d = DOK[id];
    d && z.forEach((k) => d.c.includes(k) || d.c.push(k));
  };
  more("sneakers", "shoecab");
  more("boots", "shoecab");
  more("laundry", "washer");
  more("towel", "rack");
  more("plate", "buffet");
  more("cushion", "lounger");
  more("blanket", "lounger");
  more("lamp", "piano");
  more("plant", "pshelf", "piano", "island");
  more("lantern", "table", "side", "floor");
  more("fruit", "island");
  more("plate", "island");
  more("vase", "console");
  /* ---- nouveaux meubles ---- */
  const W8 = dWood,
    Q = (o, x, y, w, d, z) => [o.P(x, y, z), o.P(x + w, y, z), o.P(x + w, y + d, z), o.P(x, y + d, z)];
  const nStairs = (o, y, n = 7, c = "#c9a27a") => {
    for (let k = 0; k < n; k++) o.box(0, y + k * 0.5, 0, 1.4, 0.5, (k + 1) * 0.36, c, { t: "#e6d2b0" });
    o.ln(o.P(1.4, y, 1.5), o.P(1.4, y + n * 0.5, n * 0.36 + 1.3), "#6a4a3a", 2.4);
    for (let k = 0; k < n; k += 2)
      o.ln(
        o.P(1.4, y + k * 0.5 + 0.25, (k + 1) * 0.36),
        o.P(1.4, y + k * 0.5 + 0.25, (k + 1) * 0.36 + 1.25),
        "#6a4a3a",
        1.4,
      );
  };
  const nShoeCab = (o, x, y, w, d, c = "#d9c4a0") => {
    const b = o.box(x, y, 0, w, d, 1.5, c);
    o.zone("console", b.top, b.hull);
    dStore(o, x, y, w, d, "L", c, [
      { t: "door", k: "shoecab", a: 0.04, b: 0.5, z0: 0.1, z1: 1.4, hg: "l", cap: 2 },
      { t: "door", k: "shoecab", a: 0.5, b: 0.96, z0: 0.1, z1: 1.4, hg: "r", cap: 2 },
    ]);
  };
  const nIsland = (o, x, y, w, d, c = "#5f7f8a") => {
    const b = o.box(x, y, 0, w, d, 1.8, c);
    const t = o.box(x - 0.12, y - 0.12, 1.8, w + 0.24, d + 0.24, 0.16, "#f1ede4");
    o.zone("island", t.top, dHull([...b.hull, ...t.hull]));
    dStore(o, x, y, w, d, "L", c, [
      { t: "drawer", k: "kdrawer", a: 0.04, b: 0.5, z0: 1.3, z1: 1.74, cap: 2 },
      { t: "drawer", k: "kdrawer", a: 0.5, b: 0.96, z0: 1.3, z1: 1.74, cap: 2 },
      { t: "door", k: "cab", a: 0.04, b: 0.5, z0: 0.1, z1: 1.22, hg: "l", cap: 2 },
      { t: "door", k: "cab", a: 0.5, b: 0.96, z0: 0.1, z1: 1.22, hg: "r", cap: 2 },
    ]);
  };
  const nChair = (o, x, y, c, f) => {
    o.box(x + 0.4, y + 0.4, 0, 0.2, 0.2, 0.8, "#555a6a");
    o.box(x, y, 0.8, 1, 1, 0.25, c);
    f === "w"
      ? o.box(x + 0.8, y, 1.05, 0.2, 1, 0.9, dSh(c, 0.9))
      : o.box(x, y + 0.8, 1.05, 1, 0.2, 0.9, dSh(c, 0.9));
  };
  const nStool = (o, x, y, c = "#e8946c") => {
    o.box(x - 0.06, y - 0.06, 0, 0.12, 0.12, 1.25, "#8a8f9a");
    o.box(x - 0.3, y - 0.3, 1.25, 0.6, 0.6, 0.14, c);
  };
  const nHood = (o, x0, x1) => {
    o.box(x0, 0, 3.3, x1 - x0, 0.9, 0.4, "#c9ced6");
    o.box(x0 + 0.35, 0, 3.7, x1 - x0 - 0.7, 0.55, 1.4, "#b4bac6");
  };
  const nBuffet = (o, x, y, w, d, c = "#8a5a3a") => {
    const b = o.box(x, y, 0, w, d, 1.9, c);
    o.zone("console", b.top, b.hull);
    dStore(o, x, y, w, d, "R", c, [
      { t: "door", k: "buffet", a: 0.03, b: 0.34, z0: 0.12, z1: 1.75, hg: "l", cap: 2 },
      { t: "door", k: "buffet", a: 0.35, b: 0.65, z0: 0.12, z1: 1.75, hg: "l", cap: 2 },
      { t: "door", k: "buffet", a: 0.66, b: 0.97, z0: 0.12, z1: 1.75, hg: "r", cap: 2 },
    ]);
  };
  const nChand = (o, x, y, c = "#e2b84a") => {
    const a = o.P(x, y, o.Hh),
      b = o.P(x, y, o.Hh - 1.5);
    o.ln(a, b, "#8a7a5a", 1.6);
    o.s +=
      `<ellipse cx="${b[0].toFixed(1)}" cy="${b[1].toFixed(1)}" rx="20" ry="7" fill="none" stroke="${c}" stroke-width="2.4"/>` +
      [-18, -7, 7, 18]
        .map(
          (d) =>
            `<circle cx="${(b[0] + d).toFixed(1)}" cy="${(b[1] - 5).toFixed(1)}" r="3.4" fill="#fff3c0"/>`,
        )
        .join("");
  };
  const nScreen = (o, x0, x1, z0, z1) => {
    o.pg(o.qR(x0 - 0.12, x1 + 0.12, z0 - 0.12, z1 + 0.12), "#2a2c34");
    o.pg(o.qR(x0, x1, z0, z1), "#eef2f8");
    o.pg(o.qR(x0 + 0.5, x1 - 2.2, z0 + 0.4, z1 - 0.9), "#bfe0f6");
  };
  const nLoft = (o, x, y, w, d, c = "#b98a5a", bl = "#5f9ad9") => {
    [
      [0, 0],
      [w - 0.18, 0],
      [0, d - 0.18],
      [w - 0.18, d - 0.18],
    ].forEach(([a, b]) => o.box(x + a, y + b, 0, 0.18, 0.18, 3.0, dSh(c, 0.8)));
    const p = o.box(x, y, 3.0, w, d, 0.22, c),
      m = o.box(x + 0.08, y + 0.08, 3.22, w - 0.16, d - 0.16, 0.28, bl, { t: dSh(bl, 1.15) });
    o.box(x + 0.08, y + 0.08, 3.5, 0.8, d - 0.16, 0.14, "#fff");
    o.zone("bed", m.top, dHull([...p.hull, ...m.hull]));
    o.ln(o.P(x, y + d, 3.9), o.P(x + w, y + d, 3.9), dSh(c, 0.8), 2.4);
    for (let k = 0; k <= 4; k++)
      o.ln(o.P(x + (w * k) / 4, y + d, 3.2), o.P(x + (w * k) / 4, y + d, 3.9), dSh(c, 0.8), 1.6);
    o.ln(o.P(x + w, y + d - 0.9, 0), o.P(x + w, y + d - 0.9, 3.2), dSh(c, 0.7), 2.2);
    o.ln(o.P(x + w, y + d - 0.3, 0), o.P(x + w, y + d - 0.3, 3.2), dSh(c, 0.7), 2.2);
    for (let z = 0.5; z < 3.1; z += 0.55)
      o.ln(o.P(x + w, y + d - 0.9, z), o.P(x + w, y + d - 0.3, z), dSh(c, 0.7), 2);
  };
  const nGStand = (o, x, y) => {
    const b = o.box(x, y, 0, 0.8, 0.8, 0.12, "#3e4352");
    o.ln(o.P(x + 0.4, y + 0.4, 0.12), o.P(x + 0.4, y + 0.4, 2.0), "#3e4352", 2.4);
    o.ln(o.P(x + 0.2, y + 0.4, 2.0), o.P(x + 0.6, y + 0.4, 2.0), "#3e4352", 2.4);
    o.zone(
      "gstand",
      b.top,
      dHull([
        ...b.hull,
        o.P(x, y, 2.3),
        o.P(x + 0.8, y + 0.8, 2.3),
        o.P(x + 0.8, y, 2.3),
        o.P(x, y + 0.8, 2.3),
      ]),
    );
  };
  const nPiano = (o, x, y, w, d) => {
    const b = o.box(x, y, 0, w, d, 2.5, "#2e2a36", { t: "#3a3644" });
    o.box(x + w, y + 0.08, 1.35, 0.42, d - 0.16, 0.16, "#f6f6f8");
    for (let k = 1; k < 12; k++)
      o.ln(
        o.P(x + w + 0.02, y + 0.08 + ((d - 0.16) * k) / 12, 1.51),
        o.P(x + w + 0.3, y + 0.08 + ((d - 0.16) * k) / 12, 1.51),
        "#22262f",
        1.6,
      );
    o.zone("piano", b.top, b.hull);
    o.box(x + w + 0.75, y + d / 2 - 0.6, 0, 0.6, 1.2, 1.0, "#6a4a3a", { t: "#c96a5a" });
  };
  const nMStand = (o, x, y) => {
    o.ln(o.P(x, y, 0), o.P(x, y, 2.0), "#3e4352", 2.4);
    o.ln(o.P(x - 0.3, y + 0.3, 0), o.P(x, y, 0.4), "#3e4352", 2);
    o.ln(o.P(x + 0.3, y + 0.3, 0), o.P(x, y, 0.4), "#3e4352", 2);
    const b = o.box(x - 0.45, y - 0.05, 2.0, 0.9, 0.1, 0.8, "#6a7186");
    o.zone("mstand", b.L, dHull([...b.hull, o.P(x - 0.45, y + 0.3, 0), o.P(x + 0.45, y + 0.3, 0)]), "c");
  };
  const nDrum = (o, x, y) => {
    o.cyl(x, y, 0.5, 0.55, 0.9, "#e8605a");
    o.ln(o.P(x - 0.4, y + 0.4, 0), o.P(x - 0.3, y + 0.3, 0.5), "#8a8f9a", 2);
    o.ln(o.P(x + 0.4, y + 0.4, 0), o.P(x + 0.3, y + 0.3, 0.5), "#8a8f9a", 2);
  };
  const nWasher = (o, x, y, k, c = "#f1f3f7") => {
    const b = o.box(x, y, 0, 1.5, 1.4, 2.1, c);
    o.pg(
      Q(o, x + 0.1, y + 1.4, 0.5, 0, 1.85)
        .slice(0, 2)
        .concat([o.P(x + 0.6, y + 1.4, 2.0), o.P(x + 0.1, y + 1.4, 2.0)]),
      "#7ec8f0",
    );
    o.zone("washtop", b.top, b.hull);
    dStore(o, x, y, 1.5, 1.4, "L", k === "dryer" ? "#e3e6ee" : "#dff0fa", [
      { t: "door", k, a: 0.17, b: 0.83, z0: 0.3, z1: 1.6, hg: "l", cap: 2 },
    ]);
  };
  const nRack = (o, x, y) => {
    [
      [0, 0],
      [1.7, 0],
      [0, 0.9],
      [1.7, 0.9],
    ].forEach(([a, b]) => o.ln(o.P(x + a, y + b, 0), o.P(x + (a ? 1.3 : 0.4), y + b, 1.7), "#c9ced6", 2));
    const t = Q(o, x, y, 1.7, 0.9, 1.7);
    o.pg(t, "rgba(230,236,244,.5)", "#aab2c0", 1.4);
    for (let k = 1; k < 5; k++)
      o.ln(o.P(x + (1.7 * k) / 5, y, 1.7), o.P(x + (1.7 * k) / 5, y + 0.9, 1.7), "#aab2c0", 1.4);
    o.box(x + 0.8, y + 0.4, 0, 0.02, 0.02, 0.02, "#ccc");
    o.zone("rack", t, dHull([...t, o.P(x, y + 0.9, 0), o.P(x + 1.7, y + 0.9, 0), o.P(x + 1.7, y, 0)]));
  };
  const nPeg = (o, y0, y1, z0, z1) => {
    const q = o.qL(y0, y1, z0, z1);
    o.pg(q, "#d9b888", "#8a6a4a", 1.6);
    for (let y = y0 + 0.25; y < y1; y += 0.3)
      for (let z = z0 + 0.25; z < z1; z += 0.3) {
        const p = o.P(0, y, z);
        o.s += `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r=".9" fill="#8a6a4a"/>`;
      }
    o.zone("pegboard", q, null, "c");
  };
  const nWork = (o, x, y, w, d) => {
    const b = o.box(x, y, 0, w, d, 1.75, "#7a8896"),
      t = o.box(x - 0.1, y - 0.1, 1.75, w + 0.2, d + 0.2, 0.2, "#c9a26a");
    o.zone("workbench", t.top, dHull([...b.hull, ...t.hull]));
    dStore(o, x, y, w, d, "R", "#7a8896", [
      { t: "drawer", k: "toolchest", a: 0.05, b: 0.95, z0: 1.0, z1: 1.65, cap: 2 },
      { t: "drawer", k: "toolchest", a: 0.05, b: 0.95, z0: 0.15, z1: 0.9, cap: 2 },
    ]);
  };
  const nChest = (o, x, y) => {
    const b = o.box(x, y, 0, 1.3, 1.1, 2.3, "#d9463a");
    o.zone("side", b.top, b.hull);
    dStore(
      o,
      x,
      y,
      1.3,
      1.1,
      "L",
      "#d9463a",
      [2, 1, 0].map((k) => ({
        t: "drawer",
        k: "toolchest",
        a: 0.06,
        b: 0.94,
        z0: k * 0.72 + 0.12,
        z1: (k + 1) * 0.72 + 0.02,
        cap: 2,
      })),
    );
  };
  const nGDoor = (o, x0, x1, h) => {
    o.pg(o.qR(x0, x1, 0, h), "#e3e7ee", "#8a93a2", 2.4);
    for (let z = h / 5; z < h - 0.05; z += h / 5) o.ln(o.P(x0, 0, z), o.P(x1, 0, z), "#aab2c0", 1.6);
    [0.3, 0.7].forEach((f) =>
      o.pg(
        o.qR(x0 + (x1 - x0) * f - 0.45, x0 + (x1 - x0) * f + 0.45, h * 0.62, h * 0.78),
        "#bfe0f6",
        "#8a93a2",
        1,
      ),
    );
  };
  const nPShelf = (o, x, y, w, c = "#b98a5a") => {
    [2.1, 1.4, 0.7].forEach((h, k) => {
      const b = o.box(x + k * 0.6, y, 0, 0.6, w, h, c, { t: dSh(c, 1.15) });
      o.zone("pshelf", b.top, b.hull);
    });
  };
  const nGlass = (o, wall, n, z0, z1) => {
    const N = wall === "L" ? o.D : o.W;
    for (let k = 0; k < n; k++) {
      const a = 0.35 + (k * (N - 0.7)) / n,
        b = a + (N - 0.7) / n - 0.25;
      wall === "L" ? dWinL(o, a, b, z0, z1, "#bfe6f6") : dWinR(o, a, b, z0, z1, "#bfe6f6");
    }
  };
  const nFence = (o, c = "#c9b48e") => {
    const { W, D } = o;
    for (let k = 0.3; k < D; k += 0.45) o.ln(o.P(0, k, 0.05), o.P(0, k, 2.05), c, 1.4);
    for (let k = 0.3; k < W; k += 0.45) o.ln(o.P(k, 0, 0.05), o.P(k, 0, 2.05), c, 1.4);
    o.ln(o.P(0, 0, 1.8), o.P(0, D, 1.8), dSh(c, 0.85), 2.2);
    o.ln(o.P(0, 0, 1.8), o.P(W, 0, 1.8), dSh(c, 0.85), 2.2);
  };
  const nGrass = (o, n = 34, x0 = 0, y0 = 0, x1 = o.W, y1 = o.D) => {
    for (let i = 0; i < n; i++) {
      const x = x0 + 0.2 + (((i * 37) % 97) / 97) * (x1 - x0 - 0.4),
        y = y0 + 0.2 + (((i * 53) % 89) / 89) * (y1 - y0 - 0.4),
        q = o.P(x, y),
        a = q[0].toFixed(1),
        b = q[1].toFixed(1);
      o.s += `<path d="M${a} ${b}l-2-5M${a} ${b}l0-6M${a} ${b}l2-5" stroke="#5fa85a" stroke-width="1.2" stroke-linecap="round"/>`;
    }
  };
  const nDeck = (o, x, y, w, d, c = "#c9a27a") => {
    o.pg(Q(o, x, y, w, d, 0), c, dSh(c, 0.7), 1);
    for (let k = 0.5; k < d; k += 0.5) o.ln(o.P(x, y + k), o.P(x + w, y + k), dSh(c, 0.78), 1);
  };
  const nBBQ = (o, x, y) => {
    [
      [0, 0],
      [1.5, 0],
      [0, 0.9],
      [1.5, 0.9],
    ].forEach(([a, b]) => o.box(x + a, y + b, 0, 0.1, 0.1, 1.3, "#3e4352"));
    const b = o.box(x, y, 1.3, 1.6, 1.0, 0.6, "#2e3038", { t: "#4a4d58" });
    for (let k = 1; k < 8; k++)
      o.ln(o.P(x + k * 0.2, y + 0.08, 1.9), o.P(x + k * 0.2, y + 0.92, 1.9), "#8a8f9a", 1.2);
    o.zone("bbq", b.top, b.hull);
    const s = o.box(x + 1.6, y + 0.1, 1.6, 0.8, 0.8, 0.1, "#8a8f9a");
    o.zone("side", s.top, s.hull);
    o.pg(
      [o.P(x, y, 1.9), o.P(x + 1.6, y, 1.9), o.P(x + 1.6, y, 2.9), o.P(x, y, 2.9)],
      "#3a3d48",
      "#22262f",
      1,
    );
  };
  const nDeckBox = (o, x, y, w, d, c = "#8fa3a8") => {
    const b = o.box(x, y, 0, w, d, 1.0, c),
      T = Q(o, x + 0.1, y + 0.1, w - 0.2, d - 0.2, 1.0);
    o.pg(T, dSh(c, 0.5));
    o.zone("deckbox", T, b.hull);
  };
  const nFire = (o, x, y) => {
    const b = o.box(x, y, 0, 1.3, 1.3, 0.5, "#9aa0aa", { t: "#6a6e78" });
    const q = o.P(x + 0.65, y + 0.65, 0.5);
    o.s += `<path d="M${q[0].toFixed(1)} ${(q[1] - 16).toFixed(1)}q7 8 3 14t-9-1q-2-5 6-13z" fill="#f4a24a"/><path d="M${q[0].toFixed(1)} ${(q[1] - 9).toFixed(1)}q3 4 1 7t-4 0q-1-3 3-7z" fill="#ffe27a"/>`;
    o.zone(
      "firepit",
      b.top,
      dHull([...b.hull, o.P(x, y, 1.3), o.P(x + 1.3, y, 1.3), o.P(x + 1.3, y + 1.3, 1.3)]),
    );
  };
  const nParasol = (o, x, y, c1 = "#e8605a", c2 = "#fff") => {
    o.box(x - 0.05, y - 0.05, 0, 0.1, 0.1, 3.9, "#8a8f9a");
    const t = o.P(x, y, 4.5),
      R = 1.7,
      pts = [...Array(8)].map((_, k) => o.P(x + Math.cos(k * 0.785) * R, y + Math.sin(k * 0.785) * R, 3.7));
    pts.forEach((p, k) => o.pg([t, p, pts[(k + 1) % 8]], k % 2 ? c2 : c1, dSh(c1, 0.7), 0.8));
  };
  const nLounger = (o, x, y, c = "#f4f6fa", cu = "#7ec8f0") => {
    o.box(x, y, 0, 0.12, 2.3, 0.5, "#c9ced6");
    o.box(x + 0.8, y, 0, 0.12, 2.3, 0.5, "#c9ced6");
    const b = o.box(x, y, 0.5, 0.92, 2.3, 0.14, c),
      m = o.box(x + 0.06, y + 0.7, 0.64, 0.8, 1.55, 0.12, cu);
    o.box(x + 0.06, y, 0.64, 0.8, 0.7, 0.75, cu, { t: dSh(cu, 1.1) });
    o.zone("lounger", m.top, dHull([...b.hull, ...m.hull]));
  };
  let pid = 0;
  const nPool = (o, x, y, w, d) => {
    const f = (a) => a.map((p) => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" "),
      op = Q(o, x, y, w, d, 0),
      id = "npl" + ++pid;
    o.pg(Q(o, x - 0.35, y - 0.35, w + 0.7, d + 0.7, 0), "#ece6d6", "#cfc7b2", 1.2);
    o.s +=
      `<clipPath id="${id}"><polygon points="${f(op)}"/></clipPath><g clip-path="url(#${id})"><polygon points="${f(op)}" fill="#3aa6d0"/><polygon points="${f([o.P(x, y, 0), o.P(x + w, y, 0), o.P(x + w, y, -0.7), o.P(x, y, -0.7)])}" fill="#8fd8ee"/><polygon points="${f([o.P(x, y, 0), o.P(x, y + d, 0), o.P(x, y + d, -0.7), o.P(x, y, -0.7)])}" fill="#74c6e2"/><polygon points="${f(Q(o, x, y, w + 1, d + 1, -0.45))}" fill="#4fbfe6" opacity=".88"/>` +
      [...Array(9)]
        .map((_, k) => {
          const p = o.P(x + 0.6 + ((k * 1.7) % (w - 0.8)), y + 0.5 + ((k * 1.1) % (d - 0.8)), -0.45);
          return `<path d="M${p[0].toFixed(1)} ${p[1].toFixed(1)}q5-3 10 0t10 0" stroke="#dff6ff" stroke-width="1.3" fill="none" opacity=".8"/>`;
        })
        .join("") +
      "</g>";
    o.pg(op, "none", "#f8f4ea", 2.4);
    const l = o.P(x + w, y + d * 0.7, 0);
    o.s += `<path d="M${l[0].toFixed(1)} ${(l[1] + 6).toFixed(1)}v-20q0-6 6-6M${(l[0] - 9).toFixed(1)} ${(l[1] + 1).toFixed(1)}v-20q0-6 6-6" stroke="#c9ced6" stroke-width="2.4" fill="none"/>`;
    o.box(x + w * 0.38, y - 1.5, 0.45, 0.7, 2.1, 0.1, "#f4f6fa", { t: "#7ec8f0" });
    o.box(x + w * 0.38 + 0.1, y - 1.4, 0, 0.5, 0.5, 0.45, "#c9ced6");
    o.zone("pool", op, null, "b");
  };
  const nPoolShed = (o, x, y, c = "#7fb0c9") => {
    const b = o.box(x, y, 0, 2.0, 1.5, 2.9, c, { t: "#f4f6fa" });
    for (let k = 1; k < 5; k++) o.ln(dMx(b.R[0], b.R[1], k / 5), dMx(b.R[3], b.R[2], k / 5), dSh(c, 0.7), 1);
    dStore(o, x, y, 2.0, 1.5, "L", c, [
      { t: "door", k: "poolshed", a: 0.14, b: 0.86, z0: 0.08, z1: 2.5, hg: "l", cap: 4 },
    ]);
  };
  /* ---- les onze pièces ---- */
  const H = "Grande maison",
    NR = [
      {
        h: H,
        n: "Le grand hall",
        W: 8,
        D: 8,
        Hh: 5.6,
        c: ["#e9e2d2", "#f1ebde", "#c9b08a", "#bfa67e"],
        b: (o) => {
          dBase(o, "#f1ebde");
          dDoorR(o, 5.2, 6.9, 3.9, "#5f7f8a");
          dHooks(o, "R", 1.9, 4.6, 3.4, "#5f7f8a");
          dArtL(o, 1.2, 2.9, 3.0, 4.6, ["#f4f6fa", "#9fd0f0", "#e2b84a"]);
          dRug(o, 4.6, 1.2, 2.6, 2.2, "#7fa3a0");
          nShoeCab(o, 1.9, 0, 2.6, 1.0);
          dUStand(o, 7.4, 0.5);
          dConsole(o, 0, 1.0, 1.0, 2.2, "#6a4a3a");
          nStairs(o, 4.2);
          dPotPlant(o, 7.2, 7.2, 1.2, "#5f7f8a");
          nChand(o, 4.4, 4.2);
        },
        items: [
          "coat",
          "schoolbag",
          "leash",
          "helmet",
          "slippers",
          "sneakers",
          "boots",
          "skate",
          "dogbed",
          "umbrella",
          "keys",
          "famphoto",
        ],
      },
      {
        h: H,
        n: "La cuisine à îlot",
        stk: 1,
        W: 8,
        D: 8,
        Hh: 5.6,
        c: ["#eef0ea", "#e2e8e0", "#d9d2c2", "#cfc8b6"],
        b: (o) => {
          dBase(o, "#e2e8e0");
          dWinL(o, 2.4, 5.0, 2.2, 4.6);
          dWallShelf(o, "L", 5.6, 7.4, 3.4, "#5f7f8a");
          dHooks(o, "L", 0.5, 1.9, 3.3, "#5f7f8a");
          nHood(o, 2.6, 4.0);
          dCounterF(o, 0.3, 0, 2.3, 1.3, "L", "#f1ede4", "#5f7f8a");
          dStove(o, 2.6, 0, 1.4, 1.3);
          dCounterF(o, 4.0, 0, 2.2, 1.3, "L", "#f1ede4", "#5f7f8a");
          dFridge(o, 6.4, 0, 1.5, 1.3);
          nIsland(o, 2.4, 3.6, 3.4, 1.5);
          nStool(o, 3.2, 5.8);
          nStool(o, 4.2, 5.8);
          nStool(o, 5.2, 5.8);
          dPotPlant(o, 0.6, 7.3, 1.1, "#5f7f8a");
        },
        items: [
          "mixer",
          "blender",
          "coffeemaker",
          "cookbook",
          "apron",
          "lunchbox",
          "teapot",
          "knives",
          "herbs",
          "plate",
          "cutlery",
          "magnet",
        ],
      },
      {
        h: H,
        n: "La salle à manger",
        W: 8,
        D: 8,
        Hh: 5.6,
        c: ["#e6d3c2", "#dcc6b2", "#a8845f", "#9f7b56"],
        b: (o) => {
          dBase(o, "#dcc6b2");
          dWinR(o, 2.2, 5.8, 2.2, 4.8);
          dCurtR(o, 2.2, 5.8, 2.2, 4.8, "#c96a5a");
          dArtL(o, 4.9, 7.0, 3.0, 4.5, ["#fbefe2", "#c96a5a", "#e2b84a"]);
          dRug(o, 2.2, 2.2, 4.6, 4.6, "#c9a68a");
          nBuffet(o, 0, 1.0, 1.1, 3.4);
          dChairOf(o, 3.0, 1.9, "#c96a5a");
          dChairOf(o, 5.0, 1.9, "#c96a5a");
          dTable(o, 2.6, 3.0, 4.0, 2.0, 1.7, "#8a5a3a");
          dChairOf(o, 3.0, 5.2, "#c96a5a");
          dChairOf(o, 5.0, 5.2, "#c96a5a");
          dPotPlant(o, 7.3, 0.7, 1.2, "#e2b84a");
          nChand(o, 4.6, 4.0);
        },
        items: [
          "candles",
          "glasses",
          "teaset",
          "flowers",
          "cake",
          "pitcher",
          "painting",
          "boardgame",
          "plate",
          "vase",
          "frame",
        ],
      },
      {
        h: H,
        n: "Le salon-cinéma",
        W: 8,
        D: 8,
        Hh: 5.6,
        c: ["#2f3552", "#3a4062", "#4a4e6a", "#444862"],
        b: (o) => {
          dBase(o, "#3a4062");
          nScreen(o, 1.6, 6.4, 2.2, 4.9);
          dWallShelf(o, "L", 3.0, 4.6, 4.2, "#8a8f9a");
          dRug(o, 2.4, 2.6, 4.2, 3.6, "#7a5fa8");
          dTV(o, 2.4, 0, 3.2, 1.0, 0.9, "#22262f");
          dShelf(o, 6.4, 0, 1.5, 1.0, 3.2, "#5b4636", "L");
          dSofa(o, 0, 2.2, 2.1, 4.0, "#c96a5a");
          dTable(o, 3.4, 3.4, 1.9, 1.9, 0.9, "#5b4636", "coffee");
          dSide(o, 0.2, 6.5, 1, 1, 1.25, "#5b4636");
          dLampF(o, 7.3, 7.2);
        },
        items: [
          "projector",
          "speaker",
          "gconsole",
          "popcorn",
          "headset",
          "movies",
          "beanbag",
          "snacks",
          "blanket",
          "cushion",
          "remote",
          "poster",
        ],
      },
      {
        h: H,
        n: "La chambre d’ado",
        W: 8,
        D: 8,
        Hh: 5.6,
        c: ["#cfe0e6", "#bfd4dc", "#b9a58a", "#b09c80"],
        b: (o) => {
          dBase(o, "#bfd4dc");
          dWinL(o, 4.4, 6.6, 2.4, 4.6);
          dCurtL(o, 4.4, 6.6, 2.4, 4.6, "#f2c24a");
          dWallShelf(o, "L", 1.0, 3.2, 4.4, "#f4f6fa");
          dRug(o, 3.0, 3.4, 3.4, 3.0, "#f2c24a");
          dDesk(o, 0.5, 0.9, 2.6, 1.3);
          nLoft(o, 0.2, 0.1, 4.4, 2.5);
          dChairOf(o, 1.4, 2.6, "#e8605a");
          dWard(o, 5.0, 0, 1.6, 1.3, 4.4, "#f4f6fa", "L");
          dDresser(o, 6.7, 0, 1.2, 1.3, 1.7, "#f4f6fa", "L");
          dSide(o, 0, 3.2, 0.9, 0.9);
          nGStand(o, 0.3, 6.6);
          dShelf(o, 0, 4.4, 1.0, 1.8, 3.0, dWood, "R");
        },
        items: [
          "guitar",
          "laptop",
          "phone",
          "trophy",
          "hoodie",
          "jeans",
          "diary",
          "lavalamp",
          "basketball",
          "pillow",
          "headset",
          "poster",
        ],
      },
      {
        h: H,
        n: "La salle de musique",
        W: 8,
        D: 8,
        Hh: 5.6,
        c: ["#e8dcc8", "#f0e6d4", "#8a5a3a", "#80522f"],
        b: (o) => {
          dBase(o, "#f0e6d4");
          dWinR(o, 5.0, 7.2, 2.4, 4.7);
          dCurtR(o, 5.0, 7.2, 2.4, 4.7, "#7a5fa8");
          dHooks(o, "R", 1.0, 3.4, 3.6, "#6a4a3a");
          dArtL(o, 5.2, 7.0, 3.1, 4.5, ["#fff6e0", "#7a5fa8", "#e2b84a"]);
          dRug(o, 3.0, 3.0, 3.6, 3.2, "#c96a5a");
          dShelf(o, 3.8, 0, 1.0, 1.0, 3.4, dWood, "L");
          nPiano(o, 0, 1.2, 1.1, 3.2);
          dConsole(o, 6.0, 0, 1.9, 1.0, "#6a4a3a");
          nMStand(o, 5.6, 1.7);
          nChair(o, 5.1, 2.3, "#7a5fa8", "n");
          dSide(o, 0.2, 5.6, 1, 1, 1.25, "#6a4a3a");
          nDrum(o, 6.4, 5.9);
        },
        items: [
          "metronome",
          "sheets",
          "violin",
          "vinyls",
          "turntable",
          "mic",
          "tambourine",
          "flute",
          "ukulele",
          "lamp",
          "plant",
        ],
      },
      {
        h: H,
        n: "La buanderie",
        W: 7,
        D: 7,
        Hh: 5.2,
        c: ["#e2eef2", "#d6e6ec", "#f1f3f7", "#dde4ec"],
        b: (o) => {
          dBase(o, "#d6e6ec");
          dWinL(o, 4.6, 6.2, 2.6, 4.4);
          dWallShelf(o, "R", 0.4, 3.4, 3.5, "#f4f6fa");
          dHooks(o, "L", 0.6, 2.6, 3.4, "#7a8896");
          dRug(o, 2.4, 2.6, 2.6, 1.8, "#7ec8f0");
          nWasher(o, 0.4, 0, "washer");
          nWasher(o, 2.0, 0, "dryer");
          dVanityL(o, 3.8, 0, 2.6, 1.25, "#7a8896");
          nRack(o, 0.3, 3.2);
          dTable(o, 3.4, 4.6, 2.6, 0.9, 1.8, "#c9d6e6", "ironing");
          dHamper(o, 5.9, 2.2, "#e2c89a");
        },
        items: [
          "detergent",
          "iron",
          "basket",
          "laundry",
          "cleanclothes",
          "pegs",
          "broom",
          "vacuum",
          "spray",
          "towel",
          "soap",
        ],
      },
      {
        h: H,
        n: "Le garage-atelier",
        W: 8,
        D: 8,
        Hh: 5.4,
        c: ["#d9dce2", "#cfd3da", "#aab0ba", "#a2a8b2"],
        b: (o) => {
          dBase(o, "#cfd3da");
          nGDoor(o, 2.6, 7.6, 4.2);
          nPeg(o, 1.0, 4.6, 2.4, 4.6);
          dHooks(o, "L", 5.4, 7.4, 3.6, "#3e4352");
          nChest(o, 0.4, 0);
          nWork(o, 0, 1.2, 1.3, 3.4);
          dShelf(o, 0, 5.2, 1.0, 2.2, 3.6, "#7a8896", "R");
          o.cyl(7.0, 6.6, 0, 0.6, 0.45, "#22262f");
          o.cyl(7.0, 6.6, 0.45, 0.6, 0.45, "#2e3038");
        },
        items: [
          "hammer",
          "saw",
          "screwdriver",
          "drill",
          "toolbox",
          "pump",
          "flashlight",
          "gloves",
          "mbike",
          "helmet",
          "skate",
        ],
      },
      {
        h: H,
        n: "La véranda",
        W: 8,
        D: 8,
        Hh: 5.4,
        c: ["#e6f0e4", "#eef6ec", "#e8e2d0", "#c9d6c2"],
        b: (o) => {
          dBase(o, "#eef6ec");
          nGlass(o, "L", 3, 1.6, 4.8);
          nGlass(o, "R", 3, 1.6, 4.8);
          dHooks(o, "R", 0.3, 1.5, 5.0, "#5f8a6a");
          nPShelf(o, 0, 0.6, 2.6);
          dRug(o, 3.0, 3.0, 3.4, 3.2, "#8fc49a");
          nPotting(o);
          dSofa(o, 0, 4.0, 2.0, 3.2, "#e2c89a");
          dSide(o, 2.4, 6.6, 1, 1, 1.25, "#b98a5a");
          dPotPlant(o, 7.3, 7.2, 1.3, "#5f8a6a");
          dPotPlant(o, 7.3, 0.7, 1.0, "#d98c63");
        },
        items: [
          "cactus",
          "orchid",
          "bonsai",
          "seeds",
          "trowel",
          "mister",
          "terrarium",
          "feeder",
          "sunhat",
          "cushion",
          "book",
        ],
      },
      {
        h: H,
        n: "La terrasse",
        W: 8,
        D: 8,
        Hh: 2.2,
        yard: 1,
        c: ["#d9c8a6", "#cdbb98", "#8fcf8a"],
        b: (o) => {
          nFence(o);
          nGrass(o, 40);
          nDeck(o, 0.2, 0.2, 7.6, 4.4);
          nBBQ(o, 0.5, 0.5);
          nParasol(o, 7.2, 0.9);
          dTable(o, 3.8, 1.2, 2.2, 2.0, 1.7, "#f1ede4");
          nChair(o, 4.4, 2.75, "#5f9ad9", "n");
          nChair(o, 5.55, 1.7, "#5f9ad9", "w");
          dSofa(o, 0.3, 2.4, 1.6, 2.1, "#7fa3a0");
          nDeckBox(o, 6.2, 3.4, 1.5, 1.0);
          nFire(o, 3.4, 5.6);
        },
        items: [
          "tongs",
          "burgers",
          "condiments",
          "lemonade",
          "salad",
          "marshmallow",
          "cooler",
          "frisbee",
          "cushion",
          "blanket",
          "lantern",
        ],
      },
      {
        h: H,
        n: "La grande cour et la piscine",
        W: 9,
        D: 9,
        Hh: 2.2,
        yard: 1,
        c: ["#d9c8a6", "#cdbb98", "#8fcf8a"],
        b: (o) => {
          nFence(o);
          nGrass(o, 46);
          nPoolShed(o, 0.3, 0.3);
          nParasol(o, 8.3, 1.0, "#f2c24a");
          nPool(o, 2.8, 2.6, 4.6, 4.0);
          nLounger(o, 0.5, 3.0);
          nLounger(o, 0.5, 5.8, "#f4f6fa", "#f08aa8");
          dSide(o, 1.6, 4.7, 0.7, 0.7, 0.9, "#f4f6fa");
          nDeckBox(o, 6.9, 0.5, 1.6, 1.0, "#f4f6fa");
        },
        items: [
          "floatie",
          "ring",
          "beachball",
          "noodle",
          "goggles",
          "flippers",
          "sunscreen",
          "btowel",
          "net",
          "chlorine",
          "watergun",
          "sunhat",
        ],
      },
    ];
  function nPotting(o) {
    dTable(o, 3.6, 0.2, 2.8, 1.1, 1.8, "#a8845a", "potting");
    o.box(3.7, 0.3, 0.5, 2.6, 0.9, 0.1, "#8a6a4a");
  }
  const N0 = DRM.length;
  if (N0 !== 11) return;
  DRM.push(...NR);
  try {
    const g = ALL.find((g) => g.id === "demenage");
    g &&
      g.wl &&
      g.wl.push(
        "Le grand hall est prêt. L’escalier monte vers dix ans de nouveaux souvenirs.",
        "La cuisine à îlot est rangée. Trois tabourets, et déjà l’odeur du café.",
        "La salle à manger est prête pour les grands soupers de famille.",
        "Le salon-cinéma est prêt : maïs soufflé, grand écran, soirée film.",
        "La chambre d’ado est rangée… pour l’instant. La guitare a trouvé sa place.",
        "La salle de musique est prête. Le piano attend ses premières notes.",
        "La buanderie est rangée. Ça sent le linge propre.",
        "Le garage est en ordre : chaque outil a son crochet.",
        "La véranda est prête. Les plantes boivent le soleil.",
        "La terrasse est prête : le feu crépite, la limonade est servie.",
        "La piscine est prête. Dernier carton vidé : tout le monde à l’eau !",
      );
  } catch (e) {}
  Object.assign(dStory, {
    11: [
      "Dix ans plus tard · La grande maison",
      "Dix ans ont passé. Les enfants ont grandi, la famille aussi : on emménage dans une grande maison, avec un escalier, un garage… et une immense cour.",
    ],
    15: [
      "À l’étage",
      "Le bébé d’autrefois est devenu un ado. Sa chambre, c’est son univers : guitare, trophées et lit en hauteur.",
    ],
    19: [
      "Le premier été",
      "Le soleil est revenu. Derrière la maison, la terrasse attend ses premières grillades.",
    ],
    21: [
      "La surprise de la cour",
      "Au fond de la cour, une grande piscine creusée ! Il ne reste qu’à sortir les bouées.",
    ],
  });
  try {
    DBT.push(...NR.map((r) => r.n));
  } catch (e) {}
  try {
    NLS.demenage = DRM.length;
  } catch (e) {}
  /* les niveaux de fêtes déjà joués se décalent après les nouvelles pièces */
  try {
    if (!st.get("dm:mig3", 0)) {
      for (let i = 40; i >= 11; i--)
        ["c:", "k:", "p:"].forEach((p) => {
          const a = p + "demenage:" + i,
            v = st.get(a, null);
          if (v !== null && v !== !1) {
            st.set(p + "demenage:" + (i + 11), v);
            st.set(a, null);
          }
        });
      st.set("dm:mig3", 1);
    }
  } catch (e) {}
})();
