(() => {
  /* Jardins : 4 plantes de plus pour le Jardin aquatique, 12 coraux pour le Lagon de corail (Jardin 2) */
  if (typeof AQPT !== "object" || !window.AQX) return;
  const { D, OC, ZZ, F, RG, LG, lf, cx } = AQX,
    R = aqpRib,
    PT = aqpPt,
    rr = aqpR;
  const N1 = [
    {
      id: "cabomba",
      n: "Cabomba",
      p: 520,
      d: 23,
      h: 160,
      w: 21,
      x: 6,
      s: "Tiges couvertes d’éventails légers",
    },
    { id: "anubias", n: "Anubias", p: 600, d: 25, h: 130, w: 23, x: 40, s: "Larges feuilles vert sombre" },
    { id: "vallis", n: "Vallisnérie", p: 720, d: 27, h: 170, w: 22, x: 63, s: "Longs rubans qui ondulent" },
    {
      id: "fougere",
      n: "Fougère de Java",
      p: 850,
      d: 30,
      h: 140,
      w: 23,
      x: 86,
      s: "Frondes allongées aux fines nervures",
    },
  ];
  const N2 = [
    { id: "cerveau", n: "Corail cerveau", p: 155, d: 6, h: 80, w: 22, x: 3, s: "Dôme sillonné de méandres" },
    {
      id: "champi",
      n: "Corail champignon",
      p: 210,
      d: 9,
      h: 90,
      w: 22,
      x: 12,
      s: "Disques turquoise aux fines lamelles",
    },
    {
      id: "zoanthe",
      n: "Zoanthes",
      p: 275,
      d: 12,
      h: 70,
      w: 24,
      x: 21,
      s: "Tapis de petites fleurs colorées",
    },
    {
      id: "bulle",
      n: "Corail bulle",
      p: 340,
      d: 14,
      h: 90,
      w: 20,
      x: 30,
      s: "Grappe de perles translucides",
    },
    { id: "anemone", n: "Anémone", p: 415, d: 17, h: 120, w: 22, x: 39, s: "Tentacules roses qui dansent" },
    {
      id: "soleil",
      n: "Corail soleil",
      p: 495,
      d: 20,
      h: 90,
      w: 22,
      x: 48,
      s: "Coupes orange aux tentacules d’or",
    },
    {
      id: "cornecerf",
      n: "Corne de cerf",
      p: 585,
      d: 22,
      h: 130,
      w: 23,
      x: 56,
      s: "Branches ramifiées couleur pêche",
    },
    {
      id: "eponge",
      n: "Éponge tubulaire",
      p: 675,
      d: 25,
      h: 140,
      w: 21,
      x: 64,
      s: "Tubes dorés ouverts vers la lumière",
    },
    {
      id: "cuir",
      n: "Corail cuir",
      p: 780,
      d: 27,
      h: 130,
      w: 22,
      x: 71,
      s: "Doigts souples semés de polypes",
    },
    {
      id: "table",
      n: "Corail table",
      p: 910,
      d: 30,
      h: 110,
      w: 25,
      x: 77,
      s: "Large plateau mauve sur un pied",
    },
    {
      id: "gorgone",
      n: "Gorgone éventail",
      p: 1065,
      d: 34,
      h: 150,
      w: 24,
      x: 82,
      s: "Éventail de dentelle rouge",
    },
    {
      id: "plume",
      n: "Plume de mer",
      p: 1235,
      d: 38,
      h: 160,
      w: 20,
      x: 89,
      s: "Plume dorée qui ondoie doucement",
    },
  ];
  Object.assign(OC, {
    cabomba: ["#f0ffd8", "#9ae05a", "#3a8a2a", "#d8ff9a"],
    anubias: ["#e0fff0", "#4ad08a", "#16683a", "#9affc8"],
    vallis: ["#eaffd8", "#7fd860", "#2a7a2a", "#c8ff9a"],
    fougere: ["#e8fff0", "#3ac07a", "#0f5a36", "#8affc0"],
    cerveau: ["#fff0d8", "#ffb05a", "#b0601a", "#ffd8a0"],
    champi: ["#e0fffa", "#4ae0d0", "#0f7a80", "#9afff0"],
    zoanthe: ["#fff0f8", "#ff7ac0", "#b02a7a", "#ffb0e0"],
    bulle: ["#ffffff", "#c8f0d0", "#5a9a7a", "#e8fff0"],
    anemone: ["#fff0fa", "#ff8ad8", "#a02a8a", "#ffc0f0"],
    soleil: ["#fff8d8", "#ffa83a", "#c0500a", "#ffd88a"],
    cornecerf: ["#fff0e8", "#ff9a6a", "#c04a2a", "#ffc8a8"],
    eponge: ["#fff8d8", "#ffc84a", "#c0700a", "#ffe08a"],
    cuir: ["#fffbe8", "#e8e0a0", "#8a8a4a", "#fff8c0"],
    table: ["#f4ecff", "#b49aff", "#4a2aa0", "#dcd0ff"],
    gorgone: ["#ffe8f0", "#ff5a7a", "#a01a3a", "#ffa8c0"],
    plume: ["#fff8e0", "#ffcf6a", "#c07a1a", "#ffe8a8"],
  });
  Object.assign(ZZ, {
    cabomba: 1,
    anubias: 1.2,
    vallis: 1,
    fougere: 1.1,
    cerveau: 1.35,
    champi: 1.3,
    zoanthe: 1.4,
    bulle: 1.35,
    anemone: 1.2,
    soleil: 1.35,
    cornecerf: 1.15,
    eponge: 1.05,
    cuir: 1.1,
    table: 1.2,
    gorgone: 1.05,
    plume: 1,
  });
  const T = (c, d) => ({ base: c, front: "", sway: d || "", seats: null });
  D.cabomba = (y) => {
    let a = "";
    const S = [[50, y - 138, 17]];
    [
      [34, y - 100, -8],
      [50, y - 124, 0],
      [66, y - 104, 8],
      [42, y - 80, -4],
      [58, y - 86, 4],
    ].forEach(([tx, ty, c], k) => {
      const x0 = 46 + (k % 3) * 4;
      a += `<path d="M${x0} ${y}Q${F(x0 + c)} ${F(y - (y - ty) / 2)} ${F(tx)} ${F(ty)}" stroke="#3f8a34" stroke-width="1.6" fill="none"/>`;
      const n = Math.round((y - ty) / 11);
      for (let j = 1; j <= n; j++) {
        const t = j / n,
          p = PT(x0, y, x0 + c, y - (y - ty) / 2, tx, ty, t),
          r = 9 - 4.5 * t;
        for (let q = 0; q < 7; q++) {
          const g = -Math.PI * 0.95 + (q * Math.PI * 0.95) / 3;
          a += `<path d="M${F(p[0])} ${F(p[1])}l${F(Math.cos(g) * r)} ${F(Math.sin(g) * r * 0.7)}" stroke="${q % 2 ? "#8fd860" : "#5fb848"}" stroke-width="1.3" stroke-linecap="round"/>`;
        }
      }
    });
    return {
      base:
        `<defs>${LG("cb_g", "#d6ff9a", "#3f9a34")}</defs>` +
        a +
        cx(50, y - 138, 17, 5, "url(#cb_g)", "#f0ffd8", 0),
      front: cx(50, y - 138, 17, 5, "url(#cb_g)", "#f0ffd8", 1),
      sway: "",
      seats: S,
    };
  };
  D.anubias = (y) => {
    let a = `<defs>${LG("an_g", "#5fc070", "#1a5a34")}${LG("an_l", "#7fd890", "#2a7a44")}</defs><path d="M28 ${y - 2}Q50 ${y - 8} 72 ${y - 2}" stroke="#6a5a3a" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    [
      [30, y - 4, 16, y - 64, -0.6],
      [40, y - 5, 30, y - 92, -0.3],
      [60, y - 5, 72, y - 90, 0.3],
      [70, y - 4, 86, y - 60, 0.6],
      [50, y - 6, 52, y - 100, 0],
      [46, y - 5, 36, y - 56, -0.2],
      [56, y - 5, 66, y - 58, 0.2],
    ].forEach(([x0, y0, x1, y1, b], k) => {
      const mx = x0 + (x1 - x0) * 0.42,
        my = y0 + (y1 - y0) * 0.42;
      a +=
        `<path d="M${x0} ${y0}Q${F(x0 + (x1 - x0) * 0.2)} ${F(y0 + (y1 - y0) * 0.3)} ${F(mx)} ${F(my)}" stroke="#2a6a3a" stroke-width="1.6" fill="none"/>` +
        lf(mx, my, x1, y1, 10 - Math.abs(b) * 3, b * 2, `url(#${k % 2 ? "an_l" : "an_g"})`, "#c8f0d0");
    });
    const S = [[50, y - 116, 17]];
    return {
      base: a + cx(50, y - 116, 17, 4, "url(#an_l)", "#d8ffe0", 0),
      front: cx(50, y - 116, 17, 4, "url(#an_l)", "#d8ffe0", 1),
      sway: "",
      seats: S,
    };
  };
  D.vallis = (y) => {
    let a = `<defs>${LG("va_g", "#bff0a0", "#2f7a3a")}${LG("va_d", "#8fd880", "#1f5a2a")}</defs>`,
      b = "";
    for (let k = 0; k < 11; k++) {
      const x0 = 30 + k * 4 + (rr(k, 1) - 0.5) * 3,
        h = 80 + rr(k, 2) * 45,
        c = (rr(k, 3) - 0.5) * 40,
        p = `<path d="${R(x0, y, x0 + c * 0.3, y - h * 0.55, x0 + c, y - h, { a: 1.7, b: 1.1, g: 0.3 })}" fill="url(#${k % 2 ? "va_g" : "va_d"})" opacity=".95"/>`;
      k % 3 === 1 ? (b += p) : (a += p);
    }
    const S = [
      [38, y - 134, 14],
      [64, y - 128, 14],
    ];
    return {
      base: a + S.map(([x, yy, r]) => cx(x, yy, r, 3, "url(#va_g)", "#e8ffd8", 0)).join(""),
      front: S.map(([x, yy, r]) => cx(x, yy, r, 3, "url(#va_g)", "#e8ffd8", 1)).join(""),
      sway: b,
      seats: S,
    };
  };
  D.fougere = (y) => {
    let a = `<defs>${LG("fj_g", "#6ad080", "#164a2a")}</defs><ellipse cx="50" cy="${y - 3}" rx="20" ry="5" fill="#5a4a3a"/>`;
    [
      [-1.05, 58],
      [-0.7, 74],
      [-0.35, 88],
      [0, 92],
      [0.35, 86],
      [0.7, 72],
      [1.05, 56],
    ].forEach(([t, L], k) => {
      const x0 = 44 + k * 2,
        tx = 50 + Math.sin(t) * L,
        ty = y - 6 - Math.cos(t) * L;
      a += lf(x0, y - 5, tx, ty, 6, t * 2.5, "url(#fj_g)", "#bff0c8");
      if (k === 1 || k === 5) {
        const sx = 50 + Math.sin(t) * L * 0.65,
          sy = y - 6 - Math.cos(t) * L * 0.65;
        a += lf(
          sx,
          sy,
          sx + Math.sin(t * 1.7) * 22,
          sy - Math.cos(t * 1.7) * 22,
          3.4,
          t,
          "url(#fj_g)",
          "#bff0c8",
        );
      }
    });
    const S = [[50, y - 110, 17]];
    return {
      base: a + cx(50, y - 110, 17, 4, "url(#fj_g)", "#d8ffe0", 0),
      front: cx(50, y - 110, 17, 4, "url(#fj_g)", "#d8ffe0", 1),
      sway: "",
      seats: S,
    };
  };
  D.cerveau = (y) => {
    let a = `<defs>${RG("ce_g", [
      [0, "#ffe0b0"],
      [0.6, "#f0a860"],
      [1, "#a85a2a"],
    ])}</defs><path d="M14 ${y}C14 ${y - 52} 86 ${y - 52} 86 ${y}Z" fill="url(#ce_g)"/>`;
    for (let k = 0; k < 6; k++) {
      const yy = y - 5 - k * 6.2,
        w = 34 - k * k * 0.95;
      let d = `M${F(50 - w)} ${F(yy)}`;
      for (let j = 1; j <= 8; j++) {
        const x = 50 - w + (2 * w * j) / 8;
        d += `Q${F(x - w / 8)} ${F(yy + (j % 2 ? -3.5 : 3.5))} ${F(x)} ${F(yy)}`;
      }
      a += `<path d="${d}" stroke="#8a4a20" stroke-width="1.3" fill="none" opacity=".55"/>`;
    }
    return { base: a, front: "", sway: "", seats: [[50, y - 58, 15]] };
  };
  D.champi = (y) => {
    let a = `<defs>${RG("cm_g", [
      [0, "#e0fff8"],
      [0.55, "#5ad8c8"],
      [1, "#1a7a8a"],
    ])}</defs>`;
    [
      [34, y - 30, 20, -0.12],
      [66, y - 42, 22, 0.1],
    ].forEach(([x, yy, r, ro]) => {
      a += `<path d="M${x - 3} ${y}L${x - 2} ${yy}L${x + 2} ${yy}L${x + 3} ${y}Z" fill="#3a8a8a"/><g transform="rotate(${F(ro * 57)} ${x} ${yy})"><ellipse cx="${x}" cy="${yy}" rx="${r}" ry="${F(r * 0.42)}" fill="url(#cm_g)"/>${[
        ...Array(16),
      ]
        .map((_, k) => {
          const g = (k / 16) * Math.PI * 2;
          return `<path d="M${x} ${yy}L${F(x + Math.cos(g) * r * 0.92)} ${F(yy + Math.sin(g) * r * 0.38)}" stroke="#1a6a7a" stroke-width=".7" opacity=".5"/>`;
        })
        .join("")}<ellipse cx="${x}" cy="${yy}" rx="3" ry="1.5" fill="#fff8c0"/></g>`;
    });
    return {
      base: a,
      front: "",
      sway: "",
      seats: [
        [34, y - 50, 13],
        [66, y - 64, 14],
      ],
    };
  };
  D.zoanthe = (y) => {
    let a = `<path d="M12 ${y}C20 ${y - 26} 80 ${y - 30} 88 ${y}Z" fill="#5a5a6a"/><path d="M12 ${y}C20 ${y - 26} 80 ${y - 30} 88 ${y}" stroke="#7a7a8a" stroke-width="1.2" fill="none"/>`;
    const C = [
      ["#ff8a3a", "#7affd0"],
      ["#ff4a8a", "#ffe04a"],
      ["#4ad0ff", "#ff8ad8"],
    ];
    for (let k = 0; k < 13; k++) {
      const x = 20 + k * 5 + (rr(k, 7) - 0.5) * 3,
        yy = y - 8 - Math.sin(((x - 12) / 76) * Math.PI) * 14 - rr(k, 8) * 4,
        c = C[k % 3];
      for (let q = 0; q < 8; q++) {
        const g = (q / 8) * Math.PI * 2,
          px = x + Math.cos(g) * 4,
          py = yy + Math.sin(g) * 2.4;
        a += `<ellipse cx="${F(px)}" cy="${F(py)}" rx="2" ry="1.1" fill="${c[0]}" transform="rotate(${F(g * 57)} ${F(px)} ${F(py)})"/>`;
      }
      a += `<ellipse cx="${F(x)}" cy="${F(yy)}" rx="2.4" ry="1.6" fill="${c[1]}"/>`;
    }
    return { base: a, front: "", sway: "", seats: [[50, y - 46, 15]] };
  };
  D.bulle = (y) => {
    let a = `<defs>${RG("bu_g", [
      [0, "#ffffff"],
      [0.5, "#e0f4d0"],
      [1, "#8ab89a"],
    ])}</defs><path d="M26 ${y}Q50 ${y - 10} 74 ${y}Z" fill="#7a6a5a"/>`;
    [
      [30, y - 24, 7],
      [70, y - 24, 7],
      [34, y - 11, 9],
      [66, y - 11, 9],
      [50, y - 13, 11],
      [40, y - 27, 10],
      [60, y - 27, 10],
      [50, y - 39, 10],
    ].forEach(([x, yy, r]) => {
      a += `<circle cx="${x}" cy="${F(yy)}" r="${r}" fill="url(#bu_g)" opacity=".92"/><ellipse cx="${F(x - r * 0.35)}" cy="${F(yy - r * 0.4)}" rx="${F(r * 0.3)}" ry="${F(r * 0.18)}" fill="#fff" opacity=".8"/>`;
    });
    return { base: a, front: "", sway: "", seats: [[50, y - 64, 15]] };
  };
  D.anemone = (y) => {
    let a = `<defs>${LG("ae_c", "#ffb0d0", "#a03a7a")}</defs><path d="M38 ${y}C36 ${y - 20} 40 ${y - 34} 44 ${y - 40}L56 ${y - 40}C60 ${y - 34} 64 ${y - 20} 62 ${y}Z" fill="url(#ae_c)"/>`,
      b = "";
    for (let k = 0; k < 16; k++) {
      const t = -1.3 + (2.6 * k) / 15,
        L = 30 + rr(k, 5) * 14,
        tx = 50 + Math.sin(t) * L,
        ty = y - 42 - Math.cos(t) * L * 0.9,
        c = (rr(k, 6) - 0.5) * 14,
        p = `<path d="M${F(50 + t * 4)} ${y - 40}Q${F(50 + Math.sin(t) * L * 0.5 + c)} ${F(y - 46 - Math.cos(t) * L * 0.5)} ${F(tx)} ${F(ty)}" stroke="${k % 2 ? "#d68aff" : "#ff8ac8"}" stroke-width="3.2" fill="none" stroke-linecap="round"/><circle cx="${F(tx)}" cy="${F(ty)}" r="2.2" fill="#ffe0f4"/>`;
      k % 3 ? (a += p) : (b += p);
    }
    return { base: a, front: "", sway: b, seats: [[50, y - 94, 16]] };
  };
  D.soleil = (y) => {
    let a = `<path d="M18 ${y}C24 ${y - 18} 76 ${y - 20} 82 ${y}Z" fill="#4a3a5a"/>`;
    [
      [30, y - 14],
      [42, y - 22],
      [56, y - 24],
      [68, y - 16],
      [36, y - 32],
      [62, y - 36],
      [48, y - 40],
    ].forEach(([x, yy]) => {
      for (let q = 0; q < 10; q++) {
        const g = -Math.PI + (q * Math.PI) / 9;
        a += `<path d="M${x} ${F(yy)}l${F(Math.cos(g) * 7)} ${F(Math.sin(g) * 7 - 2)}" stroke="#ffd23a" stroke-width="1.4" stroke-linecap="round"/>`;
      }
      a += `<path d="M${x - 5} ${F(yy + 8)}L${x - 6} ${F(yy)}L${x + 6} ${F(yy)}L${x + 5} ${F(yy + 8)}Z" fill="#ff7a1a"/><ellipse cx="${x}" cy="${F(yy)}" rx="6" ry="2.4" fill="#c0400a"/>`;
    });
    return { base: a, front: "", sway: "", seats: [[50, y - 62, 15]] };
  };
  D.cornecerf = (y) => {
    let a = "";
    const br = (x, yy, ang, len, w, d) => {
      const x1 = x + Math.sin(ang) * len,
        y1 = yy - Math.cos(ang) * len;
      a += `<path d="M${F(x)} ${F(yy)}L${F(x1)} ${F(y1)}" stroke="${d % 2 ? "#f59a6a" : "#ffb08a"}" stroke-width="${F(w)}" stroke-linecap="round"/>`;
      if (d > 0) {
        br(x1, y1, ang - 0.45, len * 0.72, w * 0.74, d - 1);
        br(x1, y1, ang + 0.42, len * 0.7, w * 0.74, d - 1);
      } else a += `<circle cx="${F(x1)}" cy="${F(y1)}" r="${F(w * 0.55)}" fill="#fff0e0"/>`;
    };
    br(46, y, -0.32, 34, 7, 3);
    br(55, y, 0.28, 30, 7, 3);
    return {
      base: a,
      front: "",
      sway: "",
      seats: [
        [30, y - 104, 13],
        [72, y - 98, 13],
      ],
    };
  };
  D.eponge = (y) => {
    let a = `<defs>${LG("ep_g", "#ffd27a", "#d0601a")}</defs>`;
    [
      [34, 72, 7],
      [46, 108, 8],
      [58, 88, 7.5],
      [68, 62, 6.5],
      [40, 50, 6],
    ].forEach(([x, h, w]) => {
      a += `<path d="M${x - w} ${y}C${x - w - 1} ${y - h * 0.5} ${x - w + 1} ${y - h * 0.8} ${F(x - w * 0.9)} ${y - h}L${F(x + w * 0.9)} ${y - h}C${x + w - 1} ${y - h * 0.8} ${x + w + 1} ${y - h * 0.5} ${x + w} ${y}Z" fill="url(#ep_g)"/><ellipse cx="${x}" cy="${y - h}" rx="${F(w * 0.9)}" ry="${F(w * 0.35)}" fill="#7a2a0a"/><ellipse cx="${x}" cy="${F(y - h + 0.6)}" rx="${F(w * 0.6)}" ry="${F(w * 0.2)}" fill="#3a1205"/>`;
    });
    return { base: a, front: "", sway: "", seats: [[46, y - 126, 14]] };
  };
  D.cuir = (y) => {
    let a = `<defs>${LG("cu_g", "#f4ecc8", "#a8a060")}</defs><path d="M40 ${y}C40 ${y - 20} 44 ${y - 34} 46 ${y - 44}L54 ${y - 44}C56 ${y - 34} 60 ${y - 20} 60 ${y}Z" fill="url(#cu_g)"/>`;
    [
      [-0.9, 34],
      [-0.45, 44],
      [0.45, 42],
      [0.9, 32],
      [0, 50],
    ].forEach(([t, L]) => {
      const x0 = 50 + t * 5,
        y0 = y - 42,
        c1 = x0 + Math.sin(t) * L * 0.4,
        c2 = y0 - Math.cos(t) * L * 0.6,
        tx = x0 + Math.sin(t) * L,
        ty = y0 - Math.cos(t) * L;
      a += `<path d="${R(x0, y0, c1, c2, tx, ty, { a: 6, b: 4.2 })}" fill="url(#cu_g)"/>`;
      for (let j = 1; j < 6; j++) {
        const p = PT(x0, y0, c1, c2, tx, ty, j / 6);
        a += `<circle cx="${F(p[0] + (j % 2 ? 2 : -2))}" cy="${F(p[1])}" r="1.2" fill="#fffbe8" opacity=".85"/>`;
      }
    });
    return { base: a, front: "", sway: "", seats: [[50, y - 108, 16]] };
  };
  D.table = (y) => {
    let a = `<defs>${LG("ta_g", "#d8c8ff", "#5a3aa8")}</defs><path d="M46 ${y}C47 ${y - 20} 47 ${y - 40} 48 ${y - 56}L52 ${y - 56}C53 ${y - 40} 53 ${y - 20} 54 ${y}Z" fill="#7a5ab8"/><path d="M8 ${y - 60}Q50 ${y - 76} 92 ${y - 60}Q50 ${y - 50} 8 ${y - 60}Z" fill="url(#ta_g)"/>`;
    for (let k = 0; k < 17; k++) {
      const x = 10 + k * 5,
        yy = y - 60 - Math.sin((k / 16) * Math.PI) * 7.5;
      a += `<path d="M${F(x)} ${F(yy)}l0 -5" stroke="#efe4ff" stroke-width="1.6" stroke-linecap="round"/>`;
    }
    return {
      base: a,
      front: "",
      sway: "",
      seats: [
        [30, y - 88, 13],
        [70, y - 88, 13],
      ],
    };
  };
  D.gorgone = (y) => {
    let a = "",
      m = "";
    const col = "#ff5a7a",
      tr = (x, yy, ang, len, w, d) => {
        const x1 = x + Math.sin(ang) * len,
          y1 = yy - Math.cos(ang) * len;
        a += `<path d="M${F(x)} ${F(yy)}Q${F((x + x1) / 2 + Math.cos(ang) * 3)} ${F((yy + y1) / 2)} ${F(x1)} ${F(y1)}" stroke="${col}" stroke-width="${F(w)}" fill="none" stroke-linecap="round"/>`;
        if (d > 0) {
          tr(x1, y1, ang - 0.34, len * 0.8, w * 0.75, d - 1);
          tr(x1, y1, ang + 0.34, len * 0.8, w * 0.75, d - 1);
        }
      };
    tr(50, y, 0, 28, 4.2, 4);
    for (let k = 1; k < 6; k++) {
      const r = 22 + k * 11,
        s = Math.sin(0.95) * r,
        c = Math.cos(0.95) * r;
      m += `<path d="M${F(50 - s)} ${F(y - c)}A${r} ${r} 0 0 1 ${F(50 + s)} ${F(y - c)}" stroke="${col}" stroke-width=".7" fill="none" opacity=".45"/>`;
    }
    return { base: m + a, front: "", sway: "", seats: [[50, y - 114, 15]] };
  };
  D.plume = (y) => {
    let a = `<defs>${LG("pm_g", "#fff0b0", "#e08a2a")}</defs><path d="M49 ${y}L48 ${y - 30}L52 ${y - 30}L51 ${y}Z" fill="#c07a3a"/><path d="M50 ${y - 26}Q52 ${y - 80} 50 ${y - 118}" stroke="#c07a3a" stroke-width="2" fill="none"/>`,
      b = "";
    for (let j = 0; j < 14; j++) {
      const t = j / 13,
        yy = y - 30 - t * 86,
        L = 14 * Math.sin(Math.PI * (0.15 + 0.85 * t)) + 4;
      [-1, 1].forEach((s) => {
        const p = lf(50, yy, 50 + s * L, yy - 6 - L * 0.2, 2.6, s, "url(#pm_g)", "#fff8d8");
        j % 2 ? (b += p) : (a += p);
      });
    }
    return { base: a, front: "", sway: b, seats: [[50, y - 132, 14]] };
  };
  N1.forEach((p) => AQPT.some((x) => x.id === p.id) || AQPT.push(p));
  const sync = (on) => {
    N2.forEach((p) => {
      const i = AQPT.findIndex((x) => x.id === p.id);
      on && i < 0 ? AQPT.push(p) : !on && i >= 0 && AQPT.splice(i, 1);
    });
  };
  let g2 = !!window.AQG2;
  try {
    Object.defineProperty(window, "AQG2", {
      configurable: !0,
      get: () => g2,
      set: (v) => {
        g2 = !!v;
        sync(g2);
      },
    });
  } catch (e) {}
  sync(g2);
  try {
    const _pl = aqPl;
    aqPl = function () {
      const r = _pl.apply(this, arguments);
      try {
        if (!g2) return r;
        const e = $("#aql"),
          c = e && e.querySelector(".aqcar");
        if (!c) return r;
        const C = new Set(N2.map((p) => p.id)),
          A = [],
          B = [];
        [...c.children].forEach((d) => {
          const b = d.querySelector("[data-a=aqpb]");
          (b && C.has(b.dataset.v) ? A : B).push(d);
        });
        const w = document.createElement("div");
        w.innerHTML =
          (A.length ? '<h3 class="aqh">Coraux du Lagon</h3><div class="aqcar"></div>' : "") +
          (B.length ? '<h3 class="aqh">Plantes du Jardin aquatique</h3><div class="aqcar"></div>' : "");
        const L = w.querySelectorAll(".aqcar");
        let k = 0;
        (A.length && A.forEach((d) => L[k].appendChild(d)), A.length && k++);
        B.forEach((d) => L[k].appendChild(d));
        c.replaceWith(...w.childNodes);
      } catch (x) {}
      return r;
    };
  } catch (e) {}
})();
