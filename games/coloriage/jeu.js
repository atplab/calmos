// Coloriage (id « colorie ») : dessins CBP, coloriage par cases (cb*, CB), peinture par numéros (cd*, CD), album.
const CBP = [
  {
    n: "Cœur",
    p: ["#d8ecff", "#e8485a", "#b8303f", "#ff9aa8", "#ffffff", "#b9dcff"],
    s: [
      ["r", 6, 0, 0.78, 1, 0.22],
      ["c", 2, 0.33, 0.38, 0.2],
      ["c", 2, 0.67, 0.38, 0.2],
      ["p", 2, [0.13, 0.44, 0.87, 0.44, 0.5, 0.86]],
      ["p", 3, [0.5, 0.86, 0.87, 0.44, 0.84, 0.56, 0.62, 0.8]],
      ["c", 4, 0.29, 0.32, 0.07],
      ["c", 5, 0.86, 0.12, 0.04],
      ["c", 5, 0.12, 0.18, 0.035],
    ],
  },
  {
    n: "Étoile",
    p: ["#24245a", "#ffd54a", "#f0a020", "#ffffff", "#3a3a80", "#fff2a8"],
    s: [
      ["r", 5, 0, 0.8, 1, 0.2],
      [
        "p",
        2,
        [
          0.5, 0.08, 0.61, 0.38, 0.93, 0.38, 0.67, 0.57, 0.77, 0.88, 0.5, 0.69, 0.23, 0.88, 0.33, 0.57, 0.07,
          0.38, 0.39, 0.38,
        ],
      ],
      ["p", 3, [0.5, 0.69, 0.77, 0.88, 0.67, 0.57, 0.93, 0.38, 0.61, 0.38, 0.5, 0.5]],
      ["c", 6, 0.5, 0.48, 0.07],
      ["c", 4, 0.1, 0.12, 0.035],
      ["c", 4, 0.88, 0.16, 0.035],
      ["c", 4, 0.85, 0.7, 0.03],
    ],
  },
  {
    n: "Lune",
    p: ["#1f2a5c", "#f6e7a8", "#d8c27a", "#ffffff", "#8ea0d8", "#b8c6f0"],
    s: [
      ["c", 2, 0.45, 0.42, 0.3],
      ["c", 1, 0.6, 0.34, 0.25],
      ["c", 3, 0.3, 0.5, 0.05],
      ["c", 3, 0.38, 0.62, 0.035],
      ["e", 5, 0.62, 0.8, 0.3, 0.1],
      ["e", 6, 0.42, 0.82, 0.2, 0.08],
      ["c", 4, 0.85, 0.15, 0.035],
      ["c", 4, 0.75, 0.45, 0.03],
      ["c", 4, 0.12, 0.12, 0.03],
    ],
  },
  {
    n: "Champignon",
    p: ["#cdeccf", "#e0453f", "#ffffff", "#f3e3c3", "#5aa860", "#d8c49e"],
    s: [
      ["r", 5, 0, 0.82, 1, 0.18],
      ["r", 4, 0.38, 0.48, 0.24, 0.38],
      ["r", 6, 0.54, 0.48, 0.08, 0.38],
      ["e", 2, 0.5, 0.46, 0.38, 0.26],
      ["c", 3, 0.36, 0.36, 0.07],
      ["c", 3, 0.62, 0.3, 0.06],
      ["c", 3, 0.66, 0.46, 0.05],
      ["c", 3, 0.42, 0.22, 0.045],
    ],
  },
  {
    n: "Sapin",
    p: ["#cfe6ff", "#2f8f4e", "#1f6b3a", "#8a5a3a", "#ffd54a", "#ffffff"],
    s: [
      ["r", 6, 0, 0.84, 1, 0.16],
      ["r", 4, 0.44, 0.72, 0.12, 0.14],
      ["p", 2, [0.5, 0.14, 0.82, 0.48, 0.18, 0.48]],
      ["p", 2, [0.5, 0.3, 0.88, 0.74, 0.12, 0.74]],
      ["p", 3, [0.5, 0.3, 0.88, 0.74, 0.62, 0.74]],
      ["p", 3, [0.5, 0.14, 0.82, 0.48, 0.62, 0.48]],
      [
        "p",
        5,
        [
          0.5, 0.04, 0.54, 0.12, 0.62, 0.12, 0.56, 0.17, 0.58, 0.25, 0.5, 0.2, 0.42, 0.25, 0.44, 0.17, 0.38,
          0.12, 0.46, 0.12,
        ],
      ],
      ["c", 6, 0.12, 0.2, 0.03],
      ["c", 6, 0.86, 0.3, 0.03],
    ],
  },
  {
    n: "Bonhomme de neige",
    p: ["#9fc8f0", "#ffffff", "#d6e6f5", "#2b2a3d", "#f08a30", "#e0453f"],
    s: [
      ["r", 2, 0, 0.86, 1, 0.14],
      ["c", 2, 0.5, 0.7, 0.22],
      ["c", 3, 0.58, 0.74, 0.14],
      ["c", 2, 0.5, 0.38, 0.15],
      ["r", 4, 0.36, 0.1, 0.28, 0.06],
      ["r", 4, 0.41, 0, 0.18, 0.12],
      ["p", 5, [0.5, 0.38, 0.66, 0.41, 0.5, 0.42]],
      ["c", 4, 0.45, 0.34, 0.022],
      ["c", 4, 0.56, 0.34, 0.022],
      ["r", 6, 0.34, 0.5, 0.32, 0.06],
      ["r", 6, 0.56, 0.5, 0.07, 0.16],
      ["c", 4, 0.5, 0.65, 0.025],
      ["c", 4, 0.5, 0.75, 0.025],
    ],
  },
  {
    n: "Maison",
    p: ["#bfe3ff", "#f2c38a", "#c0504a", "#7a4a2a", "#ffe680", "#6cbf5a"],
    s: [
      ["r", 6, 0, 0.82, 1, 0.18],
      ["r", 2, 0.2, 0.46, 0.6, 0.38],
      ["p", 3, [0.12, 0.48, 0.5, 0.16, 0.88, 0.48]],
      ["r", 4, 0.44, 0.62, 0.14, 0.22],
      ["r", 5, 0.26, 0.54, 0.13, 0.12],
      ["r", 5, 0.63, 0.54, 0.13, 0.12],
      ["r", 4, 0.66, 0.2, 0.08, 0.14],
      ["c", 2, 0.86, 0.14, 0.07],
    ],
  },
  {
    n: "Poisson",
    p: ["#7cc7f0", "#ff9f40", "#e06a20", "#2b2a3d", "#d8f2ff", "#3fa060"],
    s: [
      ["p", 6, [0.06, 1, 0.12, 0.6, 0.16, 1]],
      ["p", 6, [0.84, 1, 0.9, 0.66, 0.95, 1]],
      ["e", 2, 0.46, 0.48, 0.28, 0.18],
      ["p", 3, [0.7, 0.48, 0.94, 0.28, 0.94, 0.68]],
      ["p", 3, [0.4, 0.31, 0.56, 0.2, 0.6, 0.34]],
      ["c", 5, 0.3, 0.45, 0.05],
      ["c", 4, 0.3, 0.45, 0.025],
      ["c", 5, 0.78, 0.14, 0.04],
      ["c", 5, 0.86, 0.06, 0.025],
      ["p", 3, [0.42, 0.62, 0.52, 0.72, 0.56, 0.6]],
    ],
  },
  {
    n: "Fleur",
    p: ["#fff3d6", "#ff8fb8", "#ffcc33", "#4caf50", "#7cd47a", "#c0704a"],
    s: [
      ["p", 6, [0.3, 0.76, 0.7, 0.76, 0.64, 1, 0.36, 1]],
      ["r", 4, 0.47, 0.42, 0.06, 0.36],
      ["e", 5, 0.36, 0.6, 0.12, 0.05],
      ["e", 5, 0.64, 0.54, 0.12, 0.05],
      ["c", 2, 0.5, 0.18, 0.12],
      ["c", 2, 0.66, 0.3, 0.12],
      ["c", 2, 0.34, 0.3, 0.12],
      ["c", 2, 0.42, 0.46, 0.11],
      ["c", 2, 0.58, 0.46, 0.11],
      ["c", 3, 0.5, 0.32, 0.1],
    ],
  },
  {
    n: "Soleil",
    p: ["#9fd8ff", "#ffd23a", "#ffae2a", "#ffffff", "#7ccf6a", "#5bb050"],
    s: [
      ["e", 5, 0.25, 1, 0.5, 0.25],
      ["e", 6, 0.8, 1, 0.45, 0.2],
      ["p", 3, [0.5, 0.02, 0.56, 0.16, 0.44, 0.16]],
      ["p", 3, [0.5, 0.66, 0.56, 0.52, 0.44, 0.52]],
      ["p", 3, [0.16, 0.34, 0.3, 0.28, 0.3, 0.4]],
      ["p", 3, [0.84, 0.34, 0.7, 0.28, 0.7, 0.4]],
      ["p", 3, [0.26, 0.1, 0.36, 0.2, 0.28, 0.24]],
      ["p", 3, [0.74, 0.1, 0.64, 0.2, 0.72, 0.24]],
      ["p", 3, [0.26, 0.58, 0.36, 0.48, 0.28, 0.44]],
      ["p", 3, [0.74, 0.58, 0.64, 0.48, 0.72, 0.44]],
      ["c", 2, 0.5, 0.34, 0.16],
      ["e", 4, 0.78, 0.62, 0.14, 0.06],
      ["e", 4, 0.2, 0.68, 0.12, 0.05],
    ],
  },
  {
    n: "Chocolat chaud",
    p: ["#f5e1c8", "#e05a5a", "#7a4a2a", "#ffffff", "#d8d8e8", "#ffd6e0"],
    s: [
      ["e", 5, 0.48, 0.86, 0.38, 0.07],
      ["p", 2, [0.2, 0.42, 0.76, 0.42, 0.7, 0.84, 0.26, 0.84]],
      ["e", 3, 0.48, 0.44, 0.28, 0.06],
      ["c", 6, 0.42, 0.42, 0.05],
      ["c", 6, 0.54, 0.43, 0.045],
      ["p", 2, [0.76, 0.5, 0.9, 0.5, 0.9, 0.72, 0.74, 0.74, 0.75, 0.66, 0.84, 0.64, 0.84, 0.56, 0.76, 0.56]],
      ["p", 4, [0.36, 0.34, 0.4, 0.12, 0.44, 0.34]],
      ["p", 4, [0.5, 0.34, 0.54, 0.06, 0.58, 0.34]],
      ["r", 4, 0.3, 0.62, 0.36, 0.04],
    ],
  },
  {
    n: "Mitaine",
    p: ["#d8ecff", "#3f7fd0", "#ffffff", "#ffd54a", "#2f60a8", "#a8d0ff"],
    s: [
      ["c", 6, 0.15, 0.15, 0.04],
      ["c", 6, 0.85, 0.3, 0.04],
      ["c", 6, 0.2, 0.8, 0.035],
      ["e", 2, 0.52, 0.42, 0.24, 0.3],
      ["e", 5, 0.27, 0.46, 0.09, 0.14],
      ["r", 2, 0.3, 0.42, 0.44, 0.32],
      ["r", 3, 0.26, 0.74, 0.52, 0.14],
      ["r", 4, 0.32, 0.5, 0.4, 0.05],
      ["c", 4, 0.4, 0.36, 0.035],
      ["c", 4, 0.6, 0.36, 0.035],
    ],
  },
  {
    n: "Chat",
    p: ["#ffe8cc", "#f0a050", "#c87a30", "#3a8a50", "#ff8fa0", "#ffffff"],
    s: [
      ["e", 2, 0.5, 0.78, 0.28, 0.22],
      ["c", 2, 0.5, 0.42, 0.26],
      ["p", 2, [0.26, 0.3, 0.28, 0.04, 0.44, 0.2]],
      ["p", 2, [0.74, 0.3, 0.72, 0.04, 0.56, 0.2]],
      ["p", 5, [0.3, 0.24, 0.3, 0.12, 0.38, 0.2]],
      ["p", 5, [0.7, 0.24, 0.7, 0.12, 0.62, 0.2]],
      ["r", 3, 0.46, 0.17, 0.08, 0.08],
      ["r", 3, 0.3, 0.66, 0.06, 0.16],
      ["r", 3, 0.64, 0.66, 0.06, 0.16],
      ["e", 6, 0.5, 0.53, 0.12, 0.08],
      ["c", 4, 0.4, 0.4, 0.04],
      ["c", 4, 0.6, 0.4, 0.04],
      ["p", 5, [0.46, 0.48, 0.54, 0.48, 0.5, 0.53]],
    ],
  },
  {
    n: "Baleine",
    p: ["#3f8fd0", "#5a6fb8", "#c8d4f0", "#ffffff", "#7cc0f0", "#1f2a4a"],
    s: [
      ["e", 2, 0.44, 0.56, 0.34, 0.2],
      ["p", 2, [0.74, 0.52, 0.96, 0.34, 0.92, 0.56, 0.96, 0.74]],
      ["e", 3, 0.4, 0.66, 0.26, 0.09],
      ["c", 6, 0.24, 0.52, 0.025],
      ["p", 4, [0.36, 0.34, 0.3, 0.14, 0.36, 0.2, 0.4, 0.08, 0.42, 0.22, 0.48, 0.16, 0.44, 0.34]],
      ["e", 5, 0.2, 0.92, 0.2, 0.05],
      ["e", 5, 0.72, 0.94, 0.24, 0.05],
    ],
  },
  {
    n: "Voilier",
    p: ["#cfeaff", "#3f8fd0", "#a0522d", "#ffffff", "#ffd0a0", "#ffd23a"],
    s: [
      ["c", 6, 0.82, 0.16, 0.09],
      ["r", 2, 0, 0.76, 1, 0.24],
      ["p", 3, [0.18, 0.66, 0.82, 0.66, 0.72, 0.8, 0.28, 0.8]],
      ["r", 3, 0.49, 0.14, 0.03, 0.52],
      ["p", 4, [0.52, 0.16, 0.52, 0.62, 0.8, 0.62]],
      ["p", 5, [0.48, 0.24, 0.48, 0.62, 0.24, 0.62]],
      ["e", 4, 0.3, 0.88, 0.12, 0.02],
      ["e", 4, 0.74, 0.9, 0.14, 0.02],
    ],
  },
  {
    n: "Hibou",
    p: ["#2c3a6a", "#a0703a", "#e8c890", "#ffffff", "#ffb020", "#5a3a20"],
    s: [
      ["r", 6, 0, 0.84, 1, 0.06],
      ["e", 2, 0.5, 0.54, 0.26, 0.32],
      ["p", 2, [0.24, 0.3, 0.28, 0.12, 0.4, 0.26]],
      ["p", 2, [0.76, 0.3, 0.72, 0.12, 0.6, 0.26]],
      ["e", 3, 0.5, 0.64, 0.16, 0.2],
      ["c", 4, 0.4, 0.4, 0.09],
      ["c", 4, 0.6, 0.4, 0.09],
      ["c", 6, 0.41, 0.4, 0.04],
      ["c", 6, 0.59, 0.4, 0.04],
      ["p", 5, [0.46, 0.48, 0.54, 0.48, 0.5, 0.56]],
      ["c", 4, 0.84, 0.14, 0.025],
      ["c", 4, 0.14, 0.2, 0.025],
    ],
  },
  {
    n: "Renard",
    p: ["#dff0d8", "#f07a2a", "#ffffff", "#3a2a2a", "#7cbf5a", "#ffd54a"],
    s: [
      ["r", 5, 0, 0.84, 1, 0.16],
      ["c", 6, 0.12, 0.84, 0.03],
      ["c", 6, 0.86, 0.88, 0.03],
      ["e", 2, 0.74, 0.66, 0.18, 0.1],
      ["e", 3, 0.88, 0.62, 0.06, 0.06],
      ["e", 2, 0.46, 0.66, 0.2, 0.16],
      ["p", 2, [0.22, 0.42, 0.5, 0.42, 0.36, 0.62]],
      ["p", 2, [0.22, 0.42, 0.24, 0.18, 0.32, 0.34]],
      ["p", 2, [0.5, 0.42, 0.48, 0.18, 0.4, 0.34]],
      ["p", 3, [0.27, 0.48, 0.36, 0.62, 0.45, 0.48, 0.36, 0.52]],
      ["c", 4, 0.36, 0.6, 0.025],
      ["c", 4, 0.3, 0.44, 0.02],
      ["c", 4, 0.42, 0.44, 0.02],
      ["p", 4, [0.24, 0.22, 0.25, 0.3, 0.29, 0.28]],
      ["p", 4, [0.48, 0.22, 0.47, 0.3, 0.43, 0.28]],
    ],
  },
  {
    n: "Fusée",
    p: ["#1f2350", "#e8e8f0", "#7cc7f0", "#e0453f", "#ffb020", "#ffffff"],
    s: [
      ["c", 6, 0.15, 0.2, 0.025],
      ["c", 6, 0.85, 0.12, 0.025],
      ["c", 6, 0.8, 0.7, 0.02],
      ["c", 6, 0.18, 0.72, 0.02],
      ["p", 5, [0.42, 0.76, 0.58, 0.76, 0.5, 0.98]],
      ["p", 4, [0.36, 0.56, 0.3, 0.78, 0.4, 0.74]],
      ["p", 4, [0.64, 0.56, 0.7, 0.78, 0.6, 0.74]],
      ["e", 2, 0.5, 0.48, 0.14, 0.32],
      ["p", 4, [0.4, 0.26, 0.5, 0.06, 0.6, 0.26]],
      ["c", 3, 0.5, 0.42, 0.06],
      ["r", 4, 0.4, 0.72, 0.2, 0.05],
    ],
  },
  {
    n: "Cadeau",
    p: ["#e8f4ff", "#e0453f", "#ffd54a", "#b8303f", "#ffffff", "#b9d8f0"],
    s: [
      ["r", 6, 0, 0.84, 1, 0.16],
      ["r", 2, 0.2, 0.44, 0.6, 0.42],
      ["r", 4, 0.62, 0.44, 0.18, 0.42],
      ["r", 2, 0.14, 0.34, 0.72, 0.12],
      ["r", 3, 0.45, 0.34, 0.1, 0.52],
      ["e", 3, 0.38, 0.28, 0.12, 0.07],
      ["e", 3, 0.62, 0.28, 0.12, 0.07],
      ["c", 3, 0.5, 0.3, 0.05],
      ["p", 5, [0.66, 0.5, 0.78, 0.5, 0.78, 0.6, 0.66, 0.6]],
    ],
  },
  {
    n: "Bougie",
    p: ["#2a2550", "#f5e6d0", "#ffcc33", "#ff8a2a", "#4a3f80", "#c08a3a"],
    s: [
      ["c", 5, 0.5, 0.26, 0.2],
      ["e", 6, 0.5, 0.88, 0.3, 0.06],
      ["r", 6, 0.3, 0.8, 0.4, 0.08],
      ["r", 2, 0.38, 0.36, 0.24, 0.46],
      ["r", 1, 0.49, 0.3, 0.02, 0.06],
      ["e", 3, 0.5, 0.2, 0.06, 0.11],
      ["e", 4, 0.5, 0.23, 0.03, 0.05],
      ["p", 2, [0.38, 0.36, 0.44, 0.36, 0.44, 0.46]],
    ],
  },
  {
    n: "Cloche",
    p: ["#dbeefe", "#ffcc33", "#e0a020", "#e0453f", "#3a9a50", "#8a5a2a"],
    s: [
      ["p", 2, [0.32, 0.66, 0.36, 0.34, 0.5, 0.22, 0.64, 0.34, 0.68, 0.66, 0.78, 0.76, 0.22, 0.76]],
      ["p", 3, [0.56, 0.26, 0.64, 0.34, 0.68, 0.66, 0.78, 0.76, 0.58, 0.76]],
      ["c", 6, 0.5, 0.82, 0.06],
      ["e", 5, 0.3, 0.18, 0.1, 0.05],
      ["e", 5, 0.7, 0.18, 0.1, 0.05],
      ["c", 4, 0.44, 0.16, 0.06],
      ["c", 4, 0.56, 0.16, 0.06],
      ["c", 4, 0.5, 0.2, 0.05],
    ],
  },
  {
    n: "Pingouin",
    p: ["#bfe3ff", "#2b2a3d", "#ffffff", "#ffa030", "#e8f6ff", "#3fa0e0"],
    s: [
      ["r", 5, 0, 0.84, 1, 0.16],
      ["e", 2, 0.5, 0.54, 0.22, 0.32],
      ["e", 3, 0.5, 0.6, 0.14, 0.24],
      ["c", 2, 0.5, 0.28, 0.15],
      ["c", 3, 0.45, 0.27, 0.04],
      ["c", 3, 0.55, 0.27, 0.04],
      ["c", 2, 0.45, 0.27, 0.018],
      ["c", 2, 0.55, 0.27, 0.018],
      ["p", 4, [0.46, 0.32, 0.54, 0.32, 0.5, 0.37]],
      ["r", 6, 0.34, 0.38, 0.32, 0.05],
      ["e", 4, 0.42, 0.86, 0.08, 0.03],
      ["e", 4, 0.58, 0.86, 0.08, 0.03],
    ],
  },
  {
    n: "Montgolfière",
    p: ["#bfe8ff", "#ff6a6a", "#ffd54a", "#a0703a", "#5a3a20", "#ffffff"],
    s: [
      ["e", 6, 0.18, 0.3, 0.14, 0.06],
      ["e", 6, 0.82, 0.7, 0.14, 0.06],
      ["c", 2, 0.5, 0.34, 0.26],
      ["p", 2, [0.3, 0.48, 0.7, 0.48, 0.56, 0.66, 0.44, 0.66]],
      ["e", 3, 0.5, 0.36, 0.09, 0.27],
      ["r", 5, 0.43, 0.66, 0.01, 0.1],
      ["r", 5, 0.56, 0.66, 0.01, 0.1],
      ["r", 4, 0.42, 0.74, 0.16, 0.12],
    ],
  },
  {
    n: "Village de nuit",
    p: ["#1f2560", "#5a4a8a", "#ffffff", "#ffd54a", "#f6e7a8", "#e8f0ff"],
    s: [
      ["c", 5, 0.82, 0.18, 0.1],
      ["c", 1, 0.86, 0.15, 0.08],
      ["r", 6, 0, 0.8, 1, 0.2],
      ["r", 2, 0.08, 0.52, 0.26, 0.3],
      ["p", 3, [0.04, 0.54, 0.21, 0.36, 0.38, 0.54]],
      ["r", 2, 0.42, 0.46, 0.24, 0.36],
      ["p", 3, [0.38, 0.48, 0.54, 0.3, 0.7, 0.48]],
      ["r", 2, 0.72, 0.56, 0.22, 0.26],
      ["p", 3, [0.68, 0.58, 0.83, 0.44, 0.98, 0.58]],
      ["r", 4, 0.14, 0.6, 0.06, 0.07],
      ["r", 4, 0.24, 0.6, 0.06, 0.07],
      ["r", 4, 0.5, 0.56, 0.08, 0.08],
      ["r", 4, 0.78, 0.64, 0.06, 0.06],
      ["c", 3, 0.2, 0.14, 0.015],
      ["c", 3, 0.5, 0.1, 0.015],
      ["c", 3, 0.62, 0.24, 0.015],
    ],
  },
];
const cbLight = (e) => {
  const t = parseInt(e.slice(1), 16);
  return 0.299 * (t >> 16) + 0.587 * ((t >> 8) & 255) + 0.114 * (255 & t) > 200;
};
const CBN = CBP.length;
const cbSize = (e) => (e < 4 ? 12 : e < 8 ? 14 : e < 12 ? 16 : e < 18 ? 18 : 20);
function cbInPoly(e, t, a) {
  let s = !1;
  for (let n = 0, o = a.length - 2; n < a.length; o = n, n += 2) {
    const i = a[n],
      r = a[n + 1],
      l = a[o],
      c = a[o + 1];
    r > t != c > t && e < ((l - i) * (t - r)) / (c - r) + i && (s = !s);
  }
  return s;
}
function cbGrid(e) {
  const t = CBP[e],
    a = cbSize(e),
    s = new Array(a * a).fill(1);
  for (let e = 0; e < a; e++)
    for (let n = 0; n < a; n++) {
      const o = (n + 0.5) / a,
        i = (e + 0.5) / a;
      let r = 1;
      for (const e of t.s) {
        const t = e[0];
        let a = !1;
        ("r" === t
          ? (a = o >= e[2] && o < e[2] + e[4] && i >= e[3] && i < e[3] + e[5])
          : "c" === t
            ? (a = (o - e[2]) ** 2 + (i - e[3]) ** 2 <= e[4] ** 2)
            : "e" === t
              ? (a = ((o - e[2]) / e[4]) ** 2 + ((i - e[3]) / e[5]) ** 2 <= 1)
              : "p" === t && (a = cbInPoly(o, i, e[2])),
          a && (r = e[1]));
      }
      s[e * a + n] = r;
    }
  const n = [...new Set(s)].sort((e, t) => e - t),
    o = {};
  return (
    n.forEach((e, t) => (o[e] = t + 1)),
    { n: a, g: s.map((e) => o[e]), pal: n.map((e) => t.p[e - 1]) }
  );
}
const CB = { l: 0, G: null, done: null, sel: 1, cv: null, x: null, cs: 0, drag: !1, ok: !1, fl: null };
function cbSave() {
  CB.G && st.set("cb:sv:" + CB.l, CB.done.map((e) => (e ? 1 : 0)).join(""));
}
function cbLoad(e) {
  const t = st.get("cb:sv:" + e, "");
  return "string" == typeof t && t.length === CB.G.g.length
    ? [...t].map((e) => "1" === e)
    : new Array(CB.G.g.length).fill(!1);
}
function cbThumb(e) {
  const t = cbGrid(e),
    a = document.createElement("canvas"),
    s = Math.max(2, Math.round(48 / t.n));
  a.width = a.height = t.n * s;
  const n = a.getContext("2d");
  return (
    t.g.forEach((e, a) => {
      ((n.fillStyle = t.pal[e - 1]), n.fillRect((a % t.n) * s, Math.floor(a / t.n) * s, s, s));
    }),
    a.toDataURL()
  );
}
const CBHIDE = !0;
function cbHub() {
  (cbActs(), (cur = "colorie"), nv("games"), theme("colorie"));
  const e = st.get("cb:d", []),
    t = [...Array(CBN).keys()].find((t) => !e.includes(t)),
    a = void 0 === t ? CBN - 1 : t,
    s = ALL.find((e) => "colorie" === e.id) || { ic: "🎨", t: "Coloriage" },
    n = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    o = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
    i = st.get("cd:d", []),
    r = CDORD.find((e) => !i.includes(e)),
    l = void 0 === r ? CDORD[CDN - 1] : r,
    c = cdK;
  ((app.innerHTML = `<div class="top stk">${bk("home")}<div class="chip">🫧 ${FLX()}</div></div><section class="glass story pt-colorie"><i>${gSv(s)}</i><h2>${s.t}</h2><p>De grands dessins à numéros : glisse pour te déplacer, pince pour zoomer, touche une zone pour la colorier.</p></section>\n <div class="opts"><section class="rc pt-colorie" data-g="🖌️"><div class="rc-ic">🖌️</div><div class="rc-t"><small>Dessins · ${i.length ? "Continuer" : "Commencer"}</small><b>Dessin ${CDPOS[l] + 1}</b><span>${c(l)} couleurs · ${i.length} sur ${CDN} terminés</span></div><button class="rc-go" data-a="cdLv" data-v="${l}">Jouer${n}</button></section>\n <button class="albc" data-a="cdAlb" aria-label="Album photo : ${i.length} sur ${CDN} dessins terminés"><span class="albs">${(i.length ? i.slice(-3) : [null, null, null]).map((e, t, a) => `<span class="alph${null === e ? " e" : ""}" style="--r:${9 * (t - (a.length - 1) / 2)}deg;--x:${16 * (t - (a.length - 1) / 2)}px">${null === e ? "" : `<img alt="" src="${cdPic(e, 96)}">`}</span>`).join("")}</span><span class="albt"><small>Album photo</small><b>Mes dessins</b><i class="albp"><u style="width:${Math.round((100 * i.length) / CDN)}%"></u></i><em>${i.length} sur ${CDN} terminés</em></span><span class="albg" aria-hidden="true">›</span></button>\n <section class="rc pt-colorie" data-g="🎨" style="display:none"><div class="rc-ic">🎨</div><div class="rc-t"><small>Pixel art · ${e.length ? "Continuer" : "Commencer"}</small><b>${void 0 === t ? "Rejouer : " + CBP[a].n : CBP[a].n}</b><span>${e.length} sur ${CBN} pixel arts terminés</span></div><button class="rc-go" data-a="cbLv" data-v="${a}">Jouer${n}</button></section>\n <div class="dd pt-colorie${CD.ddOpen ? " open" : ""}" id="cddd"><button class="dd-h" data-a="cdDd" aria-expanded="${!!CD.ddOpen}" aria-controls="cdl"><span><b>Choisir un dessin</b><small>${i.length} / ${CDN} terminés</small></span>${o}</button><div class="dd-l" id="cdl"><div class="dd-i"><div class="lvg cbg cdg">${CDORD.map(
    (e) => {
      const t = i.includes(e);
      return `<button class="lv ${t ? "d cbt" : e === r ? "nx" : "far"}" data-a="cdLv" data-v="${e}" aria-label="Dessin ${CDPOS[e] + 1}, ${c(e)} couleurs${t ? ", terminé" : ""}">${t ? `<img src="${cdThumb(e)}" alt="">` : `${CDPOS[e] + 1}<small>${c(e)}</small>`}</button>`;
    },
  ).join(
    "",
  )}</div></div></div></div>\n <div class="dd pt-colorie${lvOpen ? " open" : ""}" id="cbdd" style="display:none"><button class="dd-h" data-a="cbDd" aria-expanded="${lvOpen}" aria-controls="lvl"><span><b>Choisir un pixel art</b><small>${e.length} / ${CBN} terminés</small></span>${o}</button><div class="dd-l" id="lvl"><div class="dd-i"><div class="lvg cbg">${[
    ...Array(CBN).keys(),
  ]
    .map((a) => {
      const s = e.includes(a);
      return `<button class="lv ${s ? "d cbt" : a === t ? "nx" : "far"}" data-a="cbLv" data-v="${a}" aria-label="${esc(CBP[a].n)}${s ? ", terminé" : ""}">${s ? `<img src="${cbThumb(a)}" alt="">` : a + 1}</button>`;
    })
    .join("")}</div></div></div></div></div>`),
    window.scrollTo(0, 0));
}
function cbScreen() {
  (cbActs(), (cur = "colorie"), nv("games"), theme("colorie"));
  {
    const e = $("#nav");
    e && (e.hidden = !0);
  }
  const e = CB.G;
  (CB.l,
    (app.innerHTML = `<div class="cbs"><div class="top stk"><button class="back" data-a="cbBk">‹ Retour</button><button class="tl tlk" data-a="cSkip" data-v="cb" aria-label="Niveau ${CB.l + 1} : toucher pour passer ce niveau"><span class="tlf">Niveau</span><span class="tls">Niv.</span>&nbsp;${CB.l + 1}<i aria-hidden="true">⏭</i></button><div class="tr"><button class="hb hintb" data-a="cbHint" aria-label="Indice : coûte 1 bulle">${HBI(1)}</button><div class="chip">🫧 ${FLX()}</div></div></div><div id="skw" class="skw"></div>\n <div class="cbpal" role="radiogroup" aria-label="Couleurs">${e.pal.map((e, t) => `<button class="cbsw${cbLight(e) ? " lt" : ""}" role="radio" data-a="cbSel" data-v="${t + 1}" style="--c:${e}" aria-label="Couleur ${t + 1}"><b>${t + 1}</b><i></i></button>`).join("")}</div>\n <div class="cbw"><canvas id="cbc" aria-label="Dessin à colorier"></canvas></div>\n <p class="m" id="m" role="status" aria-live="polite"></p>\n </div>`));
  const t = (CB.cv = $("#cbc"));
  ((CB.x = t.getContext("2d")),
    cbSizeC(),
    // Contrôles via Input : appuyer pour peindre une case, glisser pour en peindre d’autres, lâcher pour arrêter.
    Input.sur(
      ["toucher", "glisser", "survoler", "lacher"],
      (quoi, inf) =>
        "toucher" === quoi ? cbPD(inf.evt) : "lacher" === quoi ? (CB.drag = !1) : cbPM(inf.evt),
      { cible: t, annulation: !0 },
    ),
    addEventListener("resize", cbSizeC),
    CB.done.every((e) => e) && (CB.ok = !0),
    cbPick(cbNextCol(CB.sel) || 1),
    window.scrollTo(0, 0));
}
function cbSizeC() {
  const e = CB.cv;
  if (!e || !e.isConnected) return void removeEventListener("resize", cbSizeC);
  const t = Math.min(($(".cbw") || e).clientWidth || 340, 520, innerHeight - 260),
    a = Math.min(2.5, devicePixelRatio || 1);
  ((e.style.width = e.style.height = t + "px"),
    (e.width = e.height = Math.round(t * a)),
    (CB.dpr = a),
    (CB.w = t),
    cbDraw());
}
function cbLeft(e) {
  let t = 0;
  return (
    CB.G.g.forEach((a, s) => {
      a !== e || CB.done[s] || t++;
    }),
    t
  );
}
function cbNextCol(e) {
  const t = CB.G.pal.length;
  for (let a = 0; a < t; a++) {
    const s = ((e - 1 + a) % t) + 1;
    if (cbLeft(s)) return s;
  }
  return 0;
}
function cbPick(e) {
  ((CB.sel = e),
    document.querySelectorAll(".cbsw").forEach((t) => {
      const a = +t.dataset.v,
        s = cbLeft(a);
      (t.classList.toggle("on", a === e),
        t.classList.toggle("ok", !s),
        t.setAttribute("aria-checked", a === e),
        (t.querySelector("i").textContent = s || "✓"));
    }),
    cbDraw());
}
function cbDraw() {
  const e = CB.x,
    t = CB.G;
  if (!e || !t) return;
  const a = t.n,
    s = CB.cv.width,
    n = s / a,
    o = CB.dpr;
  e.clearRect(0, 0, s, s);
  const i = CB.ok;
  for (let s = 0; s < a * a; s++) {
    const o = (s % a) * n,
      r = Math.floor(s / a) * n,
      l = t.g[s];
    if (CB.done[s] || i) ((e.fillStyle = t.pal[l - 1]), e.fillRect(o, r, n + 0.6, n + 0.6));
    else {
      const t = l === CB.sel,
        a = CB.fl && CB.fl.has(s);
      ((e.fillStyle = a ? "#ffe27a" : t ? "#d9d2ff" : "#f6f4fb"),
        e.fillRect(o, r, n, n),
        (e.fillStyle = t ? "#3b2f8a" : "#9a96b5"),
        (e.font = `${t ? 800 : 600} ${Math.round(0.46 * n)}px "Nunito Sans",system-ui,sans-serif`),
        (e.textAlign = "center"),
        (e.textBaseline = "middle"),
        e.fillText(l, o + n / 2, r + n / 2 + 0.03 * n));
    }
  }
  if (!i) {
    ((e.strokeStyle = "rgba(60,50,120,.14)"), (e.lineWidth = Math.max(1, 0.6 * o)), e.beginPath());
    for (let t = 0; t <= a; t++)
      (e.moveTo(t * n, 0), e.lineTo(t * n, s), e.moveTo(0, t * n), e.lineTo(s, t * n));
    e.stroke();
  }
}
function cbCell(e) {
  const t = CB.cv.getBoundingClientRect(),
    a = CB.G.n,
    s = Math.floor(((e.clientX - t.left) / t.width) * a),
    n = Math.floor(((e.clientY - t.top) / t.height) * a);
  return s < 0 || n < 0 || s >= a || n >= a ? -1 : n * a + s;
}
function cbPaint(e, t) {
  if (e < 0 || CB.ok || CB.done[e]) return;
  const a = CB.G.g[e];
  if (a !== CB.sel) return void (t && cbBad(e));
  ((CB.done[e] = !0), CB.fl && CB.fl.delete(e), sfx(500 + 60 * a, 0.03));
  const s = cbLeft(a);
  if (!s) {
    (sfx(780, 0.12), vib(10));
    const e = cbNextCol(a);
    return (cbSave(), e ? void cbPick(e) : cbWin());
  }
  (Math.random() < 0.3 && cbSave(), cbDraw());
  const n = $(`.cbsw[data-v="${a}"] i`);
  n && (n.textContent = s);
}
function cbBad(e) {
  vib(12);
  const t = CB.x,
    a = CB.G.n,
    s = CB.cv.width / a,
    n = (e % a) * s,
    o = Math.floor(e / a) * s;
  ((t.fillStyle = "rgba(232,72,90,.55)"), t.fillRect(n, o, s, s), setTimeout(cbDraw, 260));
  const i = $("#m");
  i && (i.textContent = "Cette case porte le numéro " + CB.G.g[e] + ".");
}
function cbPD(e) {
  if (!CB.G) return;
  CB.drag = !0;
  try {
    CB.cv.setPointerCapture(e.pointerId);
  } catch (e) {}
  const t = $("#m");
  (t && (t.textContent = ""), cbPaint(cbCell(e), !0), e.preventDefault());
}
function cbPM(e) {
  CB.drag && (cbPaint(cbCell(e), !1), e.preventDefault());
}
function cbWin() {
  ((CB.ok = !0), st.set("cb:sv:" + CB.l, ""));
  const e = st.get("cb:d", []),
    t = !e.includes(CB.l);
  t && (e.push(CB.l), st.set("cb:d", e));
  const a = dmR("colorie", t ? 2 + Math.floor(CB.l / 8) : 1);
  ((fl += a), st.set("fl", fl));
  const s = $(".chip:not(.hintb)");
  (s && (s.textContent = "🫧 " + FLX()),
    cbDraw(),
    document.querySelectorAll(".cbsw").forEach((e) => {
      (e.classList.add("ok"), (e.querySelector("i").textContent = "✓"));
    }));
  const n = CB.cv;
  (n &&
    !wRM &&
    n.animate([{ transform: "scale(1)" }, { transform: "scale(1.04)" }, { transform: "scale(1)" }], {
      duration: 600,
      easing: "ease-out",
    }),
    sfx(784, 0.6),
    vib([20, 40, 20]));
  try {
    confetti(n);
  } catch (e) {}
  const o = CB.l + 1 < CBN;
  setTimeout(() => {
    const e = $(".cbs");
    e &&
      e.insertAdjacentHTML(
        "beforeend",
        `<div class="unend"><section class="glass play"><h2>${esc(CBP[CB.l].n)}</h2><p class="note" style="margin:0 0 4px">Dessin terminé !</p><p class="unrw">+${a} 🫧</p><div class="chrow">${o ? `<button class="btn" data-a="cbLv" data-v="${CB.l + 1}">Dessin suivant</button>` : ""}<button class="btn alt" data-a="cbBk">Retour</button><button class="hmb" data-a="tab" data-v="games" aria-label="Retour à l’accueil des jeux"><span class="hmi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/></svg></span>Accueil</button></div></section></div>`,
      );
  }, 1900);
}
let cbAO = !1;
function cbActs() {
  cbAO ||
    ((cbAO = !0),
    Object.assign(act, {
      cbBk: () => {
        (cbSave(), (CB.G = null), cbHub());
      },
      cbDd: () => {
        const e = $("#cbdd");
        ((lvOpen = e.classList.toggle("open")),
          e.querySelector(".dd-h").setAttribute("aria-expanded", lvOpen));
      },
      cbLv: (e) => {
        ((CB.l = Math.max(0, Math.min(CBN - 1, +e || 0))),
          (CB.G = cbGrid(CB.l)),
          (CB.done = cbLoad(CB.l)),
          (CB.ok = !1),
          (CB.sel = 1),
          (CB.fl = null),
          cbScreen());
      },
      cbSel: (e) => {
        cbPick(+e);
      },
      cbHint: () => {
        if (!CB.ok && cbLeft(CB.sel)) {
          if (!UNL()) {
            if (fl < 1) {
              const e = $("#m");
              return void (e && (e.textContent = "Il te manque une bulle pour un indice."));
            }
            ((fl -= 1), st.set("fl", fl));
            const e = $(".chip:not(.hintb)");
            e && (e.textContent = "🫧 " + FLX());
          }
          ((CB.fl = new Set()),
            CB.G.g.forEach((e, t) => {
              e !== CB.sel || CB.done[t] || CB.fl.add(t);
            }),
            cbDraw(),
            setTimeout(() => {
              ((CB.fl = null), cbDraw());
            }, 1600));
        }
      },
    }));
}
const CDN = 150;
const CDO = 100;
const CDW = 1e3;
const CDH = 1300;
const cdRng = (e) => () => {
  e = (1831565813 + (e |= 0)) | 0;
  let t = Math.imul(e ^ (e >>> 15), 1 | e);
  return ((t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t), ((t ^ (t >>> 14)) >>> 0) / 4294967296);
};
function cdHex(e, t, a) {
  ((e = ((e % 360) + 360) % 360),
    (t = Math.max(0, Math.min(100, t)) / 100),
    (a = Math.max(0, Math.min(100, a)) / 100));
  const s = (t) => (t + e / 30) % 12,
    n = t * Math.min(a, 1 - a),
    o = (e) => a - n * Math.max(-1, Math.min(s(e) - 3, 9 - s(e), 1));
  return (
    "#" +
    [o(0), o(8), o(4)]
      .map((e) =>
        Math.round(255 * e)
          .toString(16)
          .padStart(2, "0"),
      )
      .join("")
  );
}
const cdF = (e) => Math.round(10 * e) / 10;
const CP = {
  poly: (e) => "M" + e.map((t, a) => cdF(t) + (a % 2 ? (a < e.length - 1 ? "L" : "") : " ")).join("") + "Z",
  ell: (e, t, a, s, n = 0) => {
    const o = 0.5523,
      i = Math.cos(n),
      r = Math.sin(n),
      l = (a, s) => cdF(e + a * i - s * r) + " " + cdF(t + a * r + s * i);
    return `M${l(a, 0)}C${l(a, s * o)} ${l(a * o, s)} ${l(0, s)}C${l(-a * o, s)} ${l(-a, s * o)} ${l(-a, 0)}C${l(-a, -s * o)} ${l(-a * o, -s)} ${l(0, -s)}C${l(a * o, -s)} ${l(a, -s * o)} ${l(a, 0)}Z`;
  },
  blob: (e, t, a, s, n, o = 9, i = 0.22) => {
    const r = [];
    for (let l = 0; l < o; l++) {
      const c = (l / o) * Math.PI * 2,
        d = 1 + 2 * (n() - 0.5) * i;
      r.push([e + Math.cos(c) * a * d, t + Math.sin(c) * s * d]);
    }
    let l = "";
    for (let e = 0; e < o; e++) {
      const t = r[e],
        a = r[(e + 1) % o],
        s = [(t[0] + a[0]) / 2, (t[1] + a[1]) / 2];
      l +=
        (e ? "Q" : "M" + cdF((r[o - 1][0] + t[0]) / 2) + " " + cdF((r[o - 1][1] + t[1]) / 2) + "Q") +
        cdF(t[0]) +
        " " +
        cdF(t[1]) +
        " " +
        cdF(s[0]) +
        " " +
        cdF(s[1]);
    }
    return l + "Z";
  },
  band: (e, t, a, s, n, o = 0, i = CDW) => {
    let r = "M" + o + " " + cdF(n);
    for (let n = 0; n <= 28; n++) {
      const l = o + ((i - o) * n) / 28;
      r += "L" + cdF(l) + " " + cdF(e + Math.sin((l / CDW) * Math.PI * 2 * a + s) * t);
    }
    return r + "L" + i + " " + cdF(n) + "Z";
  },
  petal: (e, t, a, s, n) => {
    const o = Math.cos(a),
      i = Math.sin(a),
      r = (a, s) => cdF(e + a * o - s * i) + " " + cdF(t + a * i + s * o);
    return `M${r(0, 0)}C${r(0.3 * s, n)} ${r(0.8 * s, 0.8 * n)} ${r(s, 0)}C${r(0.8 * s, 0.8 * -n)} ${r(0.3 * s, -n)} ${r(0, 0)}Z`;
  },
  half: (e, t, a, s, n, o) => {
    const i = Math.cos(a),
      r = Math.sin(a),
      l = (a, s) => cdF(e + a * i - s * r) + " " + cdF(t + a * r + s * i),
      c = o;
    return `M${l(0, 0)}C${l(0.3 * s, n * c)} ${l(0.8 * s, 0.8 * n * c)} ${l(s, 0)}L${l(0, 0)}Z`;
  },
  rect: (e, t, a, s) => CP.poly([e, t, e + a, t, e + a, t + s, e, t + s]),
  sector: (e, t, a, s, n, o) => {
    const i = [],
      r = Math.max(3, Math.ceil((o - n) / 0.12));
    for (let a = 0; a <= r; a++) {
      const l = n + ((o - n) * a) / r;
      i.push(e + Math.cos(l) * s, t + Math.sin(l) * s);
    }
    for (let s = r; s >= 0; s--) {
      const l = n + ((o - n) * s) / r;
      i.push(e + Math.cos(l) * a, t + Math.sin(l) * a);
    }
    return CP.poly(i);
  },
  star: (e, t, a, s, n, o = -Math.PI / 2) => {
    const i = [];
    for (let r = 0; r < 2 * n; r++) {
      const l = o + (r * Math.PI) / n,
        c = r % 2 ? s : a;
      i.push(e + Math.cos(l) * c, t + Math.sin(l) * c);
    }
    return CP.poly(i);
  },
  line: (e) => "M" + e.map((t, a) => cdF(t) + (a % 2 ? (a < e.length - 1 ? "L" : "") : " ")).join(""),
  curve: (e, t, a, s, n, o) => `M${cdF(e)} ${cdF(t)}Q${cdF(a)} ${cdF(s)} ${cdF(n)} ${cdF(o)}`,
};
const cdMp2 = (e, t) =>
  e.replace(
    /([MLCQ])([^MLCQZ]*)/g,
    (e, a, s) =>
      a +
      s
        .trim()
        .split(/\s+/)
        .map(Number)
        .map((e, a) => cdF(t(e, a % 2)))
        .join(" "),
  );
function cdBx2(e, t) {
  let a = 1e9,
    s = 1e9,
    n = -1e9,
    o = -1e9;
  for (let i = t; i < e.length; i++) {
    const t = (e[i].d || "").match(/-?\d+\.?\d*/g);
    if (t)
      for (let e = 0; e + 1 < t.length; e += 2) {
        const i = +t[e],
          r = +t[e + 1];
        (i < a && (a = i), i > n && (n = i), r < s && (s = r), r > o && (o = r));
      }
  }
  return [a, s, n, o];
}
function cdFt2(e, t) {
  if (e.length <= t) return;
  const [a, s, n, o] = cdBx2(e, t);
  if (a > 1e8) return;
  let i = 0,
    r = 0;
  if (
    (n - a > CDW - 16 ? (i = (CDW - n - a) / 2) : a < 8 ? (i = 8 - a) : n > CDW - 8 && (i = CDW - 8 - n),
    o - s > CDH - 16 ? (r = (CDH - o - s) / 2) : s < 8 ? (r = 8 - s) : o > CDH - 8 && (r = CDH - 8 - o),
    i || r)
  )
    for (let a = t; a < e.length; a++) e[a].d && (e[a].d = cdMp2(e[a].d, (e, t) => e + (t ? r : i)));
}
const cdKeep = (e) =>
  e.forEach((e) => {
    e.d &&
      ((e.d.match(/-?\d+\.?\d*/g) || [])
        .map(Number)
        .every((e, t) => (t % 2 ? e >= 0 && e <= CDH : e >= 0 && e <= CDW)) ||
        (e.d = cdMp2(e.d, (e, t) => Math.max(0, Math.min(t ? CDH : CDW, e)))));
  });
const CDORD = (() => {
  const A = [];
  let o = 0,
    n = CDO;
  for (let p = 0; p < CDN; p++) A.push(n < CDN && (o >= CDO || (p + 1) % 3 === 0) ? n++ : o++);
  return A;
})();
const CDPOS = (() => {
  const P = [];
  CDORD.forEach((id, p) => (P[id] = p));
  return P;
})();
const cdK = (e) =>
  e < CDO
    ? Math.min(50, 10 + Math.round((40 * e) / 39))
    : Math.min(50, 10 + Math.round(40 * Math.min(1, CDPOS[e] / 59)));
function cdScene2(l) {
  const R = cdRng(l * 7919 + 13),
    q = Math.min(1, CDPOS[l] / 59),
    th = (l - CDO) % 10,
    S = [],
    add = (d, c) => S.push({ d, c }),
    ln = (d, w = 3) => S.push({ d, w, ln: 1 }),
    jit = (h, s, li, j = 6) => cdHex(h + (R() - 0.5) * j, s + (R() - 0.5) * j, li + (R() - 0.5) * j),
    rn = (a, b) => a + R() * (b - a),
    ri = (a, b) => Math.floor(rn(a, b + 1)),
    Q = Math.round,
    sky = (n, h1, h2, l1, l2, s = 45) => {
      for (let i = 0; i < n; i++) {
        const t = i / n;
        add(
          CP.band(i ? CDH * (0.02 + t * 0.45) : -30, rn(4, 18), rn(0.6, 1.6), rn(0, 6), CDH),
          cdHex(h1 + (h2 - h1) * t, s, l1 + (l2 - l1) * t),
        );
      }
    },
    cloud = (x, y, w, li) => {
      add(CP.blob(x, y, w, w * 0.38, R, 10, 0.18), cdHex(220, 30, li));
      add(CP.blob(x - w * 0.3, y + w * 0.08, w * 0.45, w * 0.25, R, 8, 0.15), cdHex(220, 25, li - 6));
    },
    stars = (n, y1, h, li = 88) => {
      for (let i = 0; i < n; i++)
        add(CP.star(rn(30, 970), rn(30, y1), rn(10, 18), rn(4, 7), 4), jit(h, 80, li));
    },
    G =
      (f) =>
      (...a) => {
        const n0 = S.length,
          r = f(...a);
        cdFt2(S, n0);
        return r;
      },
    flower = G((cx, cy, r, hu, n) => {
      for (let i = 0; i < n; i++)
        add(CP.petal(cx, cy, (i / n) * Math.PI * 2 + rn(0, 0.2), r, r * 0.42), jit(hu, 65, 70 - (i % 2) * 8));
      add(CP.ell(cx, cy, r * 0.28, r * 0.28), jit(45, 85, 58));
    }),
    pine = G((x, y, h, hu, li) => {
      add(CP.rect(x - h * 0.05, y - h * 0.18, h * 0.1, h * 0.2), jit(25, 40, 30));
      const k = ri(3, 4);
      for (let i = 0; i < k; i++) {
        const yy = y - h * 0.15 - i * h * 0.25,
          w = h * (0.42 - i * 0.08);
        add(CP.poly([x - w, yy, x, yy - h * 0.42, x + w, yy]), jit(hu, 40, li + i * 4));
        add(
          CP.poly([
            x - w * 0.45,
            yy - h * 0.18,
            x,
            yy - h * 0.42,
            x + w * 0.45,
            yy - h * 0.18,
            x + w * 0.2,
            yy - h * 0.14,
            x,
            yy - h * 0.2,
            x - w * 0.2,
            yy - h * 0.14,
          ]),
          "#f2f6fc",
        );
      }
    });
  if (th === 0) {
    /* phare */
    sky(4 + Q(q * 4), 200, 215, 66, 92, 60);
    add(CP.ell(CDW * 0.8, CDH * 0.17, rn(60, 80), rn(60, 80)), jit(45, 90, 78));
    const cx = CDW * 0.42,
      by = CDH * 0.72,
      H = 560,
      ty = by - H;
    add(CP.poly([cx + 50, ty - 48, CDW, ty - 120, CDW, ty + 30]), jit(55, 90, 90));
    add(CP.poly([cx - 50, ty - 48, 0, ty - 120, 0, ty + 30]), jit(55, 90, 90));
    for (let i = 0; i < 2; i++) cloud(rn(150, 850), rn(120, 380), rn(90, 150), 94);
    for (let i = 0; i < 5 + Q(q * 4); i++)
      add(CP.band(CDH * (0.6 + i * 0.045), 8 + i, rn(1.5, 3), rn(0, 6), CDH), jit(205, 58, 56 - i * 3));
    add(CP.blob(cx, by + 10, 300, 110, R, 9, 0.18), jit(25, 10, 38));
    add(CP.blob(cx - 200, by + 80, 120, 60, R, 8, 0.2), jit(25, 10, 46));
    const wd = (y) => 70 - (26 * (by - y)) / H,
      N = 5;
    for (let k = 0; k < N; k++) {
      const y1 = by - (k * H) / N,
        y2 = by - ((k + 1) * H) / N;
      add(
        CP.poly([cx - wd(y1), y1, cx + wd(y1), y1, cx + wd(y2), y2, cx - wd(y2), y2]),
        k % 2 ? jit(0, 0, 96) : jit(2, 75, 52),
      );
    }
    add(CP.rect(cx - 50, ty - 70, 100, 70), jit(50, 90, 78));
    add(CP.rect(cx - 14, ty - 70, 28, 70), jit(35, 60, 40));
    add(CP.poly([cx - 70, ty - 70, cx + 70, ty - 70, cx, ty - 140]), jit(2, 70, 40));
    add(CP.rect(cx - 62, ty - 8, 124, 14), jit(240, 10, 30));
    add(CP.rect(cx - 16, by - 90, 32, 90), jit(25, 50, 32));
    add(CP.ell(cx, by - 90, 16, 16), jit(25, 50, 32));
    for (let i = 0; i < 1 + Q(q * 2); i++) {
      const x = rn(640, 880),
        y = CDH * rn(0.7, 0.88);
      add(CP.poly([x - 70, y, x + 70, y, x + 50, y + 34, x - 50, y + 34]), jit(25, 55, 38));
      add(CP.rect(x - 3, y - 120, 6, 120), jit(25, 30, 30));
      add(CP.poly([x + 6, y - 116, x + 6, y - 6, x + 70, y - 6]), jit(0, 0, 96));
      add(CP.poly([x - 6, y - 100, x - 6, y - 6, x - 50, y - 6]), jit(2, 70, 60));
    }
    for (let i = 0; i < 2 + Q(q * 4); i++) {
      const x = rn(80, 920),
        y = rn(100, CDH * 0.4);
      ln(CP.curve(x - 30, y, x - 15, y - 20, x, y), 3);
      ln(CP.curve(x, y, x + 15, y - 20, x + 30, y), 3);
    }
  } else if (th === 1) {
    /* forêt de champignons */
    add(CP.rect(0, 0, CDW, CDH), jit(165, 35, 20));
    for (let i = 0; i < 4 + Q(q * 3); i++) {
      const x = rn(-20, 940),
        w = rn(50, 100);
      add(CP.rect(x, 0, w, CDH * 0.9), jit(25, 30, 26 + rn(0, 8)));
      for (let k = 0; k < 2; k++)
        ln(
          CP.line([x + w * rn(0.2, 0.8), rn(0, CDH * 0.5), x + w * rn(0.2, 0.8), rn(CDH * 0.5, CDH * 0.88)]),
          2,
        );
    }
    for (let i = 0; i < 3 + Q(q * 3); i++)
      add(CP.ell(rn(60, 940), rn(80, 500), rn(70, 130), rn(40, 80)), jit(135, 45, 32));
    add(CP.band(CDH * 0.86, 20, 1.5, rn(0, 6), CDH), jit(110, 40, 32));
    add(CP.band(CDH * 0.93, 12, 2, rn(0, 6), CDH), jit(100, 35, 26));
    const ms = [];
    for (let i = 0; i < 3 + Q(q * 5); i++) ms.push([rn(120, 880), CDH * rn(0.66, 0.94), rn(100, 180)]);
    ms.sort((a, b) => a[1] - b[1]);
    const mush = G((x, y, s) => {
      const hu = R() < 0.3 ? rn(270, 300) : rn(-8, 20);
      add(CP.ell(x, y - s * 0.72, s * 0.82, s * 0.52), jit(hu, 70, 52));
      add(CP.rect(x - s * 0.17, y - s * 0.72, s * 0.34, s * 0.72), jit(40, 30, 88));
      add(CP.ell(x, y, s * 0.3, s * 0.07), jit(100, 40, 28));
      for (let k = 0; k < 4; k++)
        add(
          CP.ell(
            x + rn(-0.5, 0.5) * s,
            y - s * 0.95 + rn(-0.12, 0.1) * s,
            s * rn(0.07, 0.12),
            s * rn(0.05, 0.09),
          ),
          jit(0, 0, 96),
        );
    });
    ms.forEach((m) => mush(...m));
    for (let i = 0; i < 5 + Q(q * 8); i++)
      add(CP.star(rn(30, 970), rn(40, CDH * 0.75), rn(10, 15), rn(4, 6), 4), jit(58, 95, 78));
  } else if (th === 2) {
    /* ville la nuit */
    sky(5 + Q(q * 4), 235, 275, 16, 40, 50);
    add(CP.ell(CDW * 0.75, CDH * 0.14, 70, 70), jit(50, 70, 88));
    add(CP.ell(CDW * 0.78, CDH * 0.13, 60, 60), cdHex(255, 40, 24));
    stars(6 + Q(q * 8), CDH * 0.35, 50);
    const bld = (x, w, h, li, lit) => {
      add(CP.rect(x, CDH - h, w, h), jit(235, 28, li));
      const cols = Math.max(2, Math.floor(w / 38)),
        cw = (w - 20) / cols,
        rows = Math.min(Math.floor((h - 30) / 58), 4 + Q(q * 6));
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
          add(
            CP.rect(x + 10 + c * cw + 4, CDH - h + 22 + r * 58, cw - 8, 32),
            lit && R() < 0.5 ? jit(48, 90, 70) : jit(235, 30, li + 9),
          );
      if (R() < 0.5) ln(CP.line([x + w / 2, CDH - h, x + w / 2, CDH - h - rn(40, 90)]), 3);
    };
    for (let x = -20; x < CDW;) {
      const w = rn(100, 170);
      bld(x, w, rn(260, 560), 22, false);
      x += w + rn(0, 20);
    }
    for (let x = -30; x < CDW;) {
      const w = rn(110, 190);
      bld(x, w, rn(320, 820), 18, true);
      x += w + rn(0, 24);
    }
    add(CP.rect(0, CDH - 70, CDW, 70), jit(235, 12, 12));
    for (let k = 0; k < 7; k++) add(CP.rect(30 + k * 150, CDH - 38, 80, 10), jit(50, 70, 70));
  } else if (th === 3) {
    /* désert */
    sky(4 + Q(q * 3), 22, 40, 66, 90, 70);
    add(CP.ell(CDW * 0.68, CDH * 0.2, 130, 130), jit(38, 90, 82));
    add(CP.ell(CDW * 0.68, CDH * 0.2, 95, 95), jit(45, 95, 68));
    for (let i = 0; i < 2; i++) {
      const x = rn(0, 700);
      add(
        CP.poly([x, CDH * 0.56, x + 40, CDH * 0.42, x + 250, CDH * 0.42, x + 300, CDH * 0.56]),
        jit(15, 50, 62),
      );
    }
    for (let i = 0; i < 4 + Q(q * 3); i++)
      add(CP.band(CDH * (0.52 + i * 0.08), rn(25, 50), rn(0.6, 1.4), rn(0, 6), CDH), jit(35, 60, 72 - i * 5));
    const cact = G((x, y, h) => {
      const g = () => jit(135, 40, 38);
      add(CP.rect(x - h * 0.07, y - h, h * 0.14, h), g());
      add(CP.ell(x, y - h, h * 0.07, h * 0.07), g());
      add(CP.rect(x - h * 0.3, y - h * 0.5, h * 0.3, h * 0.1), g());
      add(CP.rect(x - h * 0.3, y - h * 0.78, h * 0.1, h * 0.38), g());
      add(CP.ell(x - h * 0.25, y - h * 0.78, h * 0.05, h * 0.05), g());
      add(CP.rect(x, y - h * 0.4, h * 0.28, h * 0.1), g());
      add(CP.rect(x + h * 0.18, y - h * 0.65, h * 0.1, h * 0.35), g());
      add(CP.ell(x + h * 0.23, y - h * 0.65, h * 0.05, h * 0.05), g());
      add(CP.ell(x, y - h - h * 0.05, h * 0.045, h * 0.045), jit(340, 80, 62));
      ln(CP.line([x, y - h, x, y]), 2);
    });
    const cs = [];
    for (let i = 0; i < 2 + Q(q * 4); i++) cs.push([rn(110, 890), CDH * rn(0.72, 0.95), rn(200, 400)]);
    cs.sort((a, b) => a[1] - b[1]);
    cs.forEach((c) => cact(...c));
    for (let i = 0; i < 2 + Q(q * 3); i++)
      add(CP.blob(rn(80, 920), CDH * rn(0.84, 0.97), rn(50, 90), rn(30, 50), R, 8, 0.2), jit(20, 35, 55));
  } else if (th === 4) {
    /* espace */
    add(CP.rect(0, 0, CDW, CDH), jit(250, 50, 10));
    for (let i = 0; i < 10 + Q(q * 14); i++)
      add(CP.star(rn(30, 970), rn(30, CDH - 30), rn(8, 16), rn(3, 6), 4), jit(55, 70, 88));
    const pl = G((cx, cy, r, hu, ring) => {
      if (ring) add(CP.ell(cx, cy, r * 1.9, r * 0.38, -0.35), jit(45, 50, 66));
      add(CP.ell(cx, cy, r, r), jit(hu, 55, 62));
      add(CP.ell(cx + r * 0.22, cy + r * 0.22, r * 0.72, r * 0.72), jit(hu, 55, 48));
      for (let k = 0; k < 3; k++)
        add(
          CP.ell(cx + rn(-0.5, 0.3) * r, cy + rn(-0.5, 0.4) * r, r * rn(0.08, 0.16), r * rn(0.06, 0.12)),
          jit(hu, 40, 72),
        );
    });
    [
      [220, 260, rn(110, 170), rn(0, 360), 1],
      [790, 380, rn(90, 150), rn(0, 360), 0],
      [230, 930, rn(80, 130), rn(0, 360), 0],
      [800, 1030, rn(70, 110), rn(0, 360), 1],
    ]
      .slice(0, 2 + Q(q * 2))
      .forEach((p) => pl(...p));
    const cx = 500,
      cy = CDH * 0.6;
    add(CP.poly([cx - 30, cy + 150, cx + 30, cy + 150, cx, cy + 270]), jit(30, 95, 58));
    add(CP.poly([cx - 16, cy + 150, cx + 16, cy + 150, cx, cy + 215]), jit(50, 95, 72));
    add(CP.poly([cx - 58, cy + 40, cx - 125, cy + 175, cx - 50, cy + 130]), jit(0, 75, 50));
    add(CP.poly([cx + 58, cy + 40, cx + 125, cy + 175, cx + 50, cy + 130]), jit(0, 75, 50));
    add(CP.ell(cx, cy, 64, 160), jit(220, 15, 90));
    add(CP.poly([cx - 52, cy - 95, cx, cy - 215, cx + 52, cy - 95]), jit(0, 75, 50));
    add(CP.rect(cx - 62, cy + 60, 124, 22), jit(0, 75, 50));
    add(CP.ell(cx, cy - 30, 32, 32), jit(210, 15, 70));
    add(CP.ell(cx, cy - 30, 22, 22), jit(200, 70, 60));
    ln(CP.curve(60, CDH * 0.1, 220, CDH * 0.14, 420, CDH * 0.05), 3);
    add(CP.ell(430, CDH * 0.05, 14, 14), jit(50, 40, 92));
  } else if (th === 5) {
    /* arc-en-ciel */
    sky(3 + Q(q * 3), 195, 215, 78, 94, 60);
    add(CP.ell(CDW * 0.86, CDH * 0.09, rn(50, 70), rn(50, 70)), jit(48, 95, 78));
    const cx = CDW / 2,
      cy = CDH * 0.58,
      H = [0, 22, 48, 120, 200, 250, 285];
    for (let i = 0; i < 7; i++)
      add(CP.sector(cx, cy, 0, 470 - i * 52, Math.PI, Math.PI * 2), cdHex(H[i], 80, 62));
    add(CP.sector(cx, cy, 0, 470 - 7 * 52, Math.PI, Math.PI * 2), cdHex(200, 55, 88));
    cloud(cx - 440, cy + 10, 170, 97);
    cloud(cx + 440, cy + 10, 170, 97);
    for (let i = 0; i < 1 + Q(q * 2); i++) cloud(rn(120, 880), rn(100, 260), rn(80, 130), 95);
    for (let i = 0; i < 4 + Q(q * 2); i++)
      add(
        CP.band(CDH * (0.58 + i * 0.07), rn(18, 35), rn(0.8, 1.6), rn(0, 6), CDH),
        jit(100 + i * 8, 50, 66 - i * 6),
      );
    for (let i = 0; i < 4 + Q(q * 6); i++) {
      const x = rn(60, 940),
        y = rn(CDH * 0.78, CDH * 0.96);
      ln(CP.line([x, y, x, y + 90]), 3);
      flower(x, y, rn(40, 75), rn(0, 360), ri(5, 8));
    }
  } else if (th === 6) {
    /* vitrail */
    add(CP.rect(0, 0, CDW, CDH), jit(240, 20, 14));
    const cols = 4 + Q(q * 3),
      cw = CDW / cols,
      hh = cw * 0.7,
      H = [0, 35, 50, 120, 200, 260, 310];
    for (let r = -1; r < CDH / hh + 1; r++)
      for (let c = -1; c <= cols; c++) {
        const x = c * cw + (r % 2 ? cw / 2 : 0),
          y = r * hh,
          hu = H[(((c + r * 2) % 7) + 7) % 7];
        add(
          CP.poly([x, y - hh, x + cw / 2, y, x, y + hh, x - cw / 2, y]),
          jit(hu, 70, 46 + ((r + c) % 2) * 10),
        );
        add(
          CP.poly([x, y - hh * 0.45, x + cw * 0.22, y, x, y + hh * 0.45, x - cw * 0.22, y]),
          jit(hu + 40, 75, 66),
        );
      }
    add(CP.ell(CDW / 2, CDH / 2, 210, 210), jit(240, 20, 14));
    add(CP.ell(CDW / 2, CDH / 2, 190, 190), jit(48, 80, 60));
    for (let i = 0; i < 8; i++)
      add(CP.petal(CDW / 2, CDH / 2, (i / 8) * Math.PI * 2, 180, 60), jit(i % 2 ? 340 : 200, 70, 52));
    add(CP.ell(CDW / 2, CDH / 2, 60, 60), jit(45, 90, 70));
    add(CP.star(CDW / 2, CDH / 2, 50, 22, 8), jit(0, 75, 50));
  } else if (th === 7) {
    /* marché de fruits */
    add(CP.rect(0, 0, CDW, CDH), jit(40, 40, 90));
    add(CP.rect(0, CDH * 0.5, CDW, CDH * 0.5), jit(30, 45, 52));
    for (let i = 1; i < 6; i++) ln(CP.line([0, CDH * (0.5 + i * 0.09), CDW, CDH * (0.5 + i * 0.09)]), 3);
    for (let i = 0; i < 8; i++) {
      const c = i % 2 ? jit(0, 70, 52) : jit(0, 0, 96);
      add(CP.rect(i * 125, 0, 125, 140), c);
      add(CP.ell(i * 125 + 62, 140, 62, 36), c);
    }
    const fr = [];
    for (let i = 0; i < 10 + Q(q * 12); i++)
      fr.push([rn(90, 910), CDH * rn(0.56, 0.94), rn(55, 85), ri(0, 5)]);
    fr.sort((a, b) => a[1] - b[1]);
    const fruit = G((x, y, s, t) => {
      const stem = () => {
        add(CP.rect(x - 3, y - s * 1.05, 6, s * 0.3), jit(25, 40, 30));
        add(CP.petal(x + 3, y - s * 0.9, -0.5, s * 0.5, s * 0.2), jit(115, 55, 45));
      };
      if (t === 0) {
        add(CP.ell(x, y, s, s * 0.92), jit(rn(-5, 10), 75, 52));
        add(CP.ell(x - s * 0.35, y - s * 0.3, s * 0.22, s * 0.14), jit(0, 60, 80));
        stem();
      } else if (t === 1) {
        add(CP.ell(x, y, s, s), jit(30, 95, 55));
        add(CP.ell(x - s * 0.35, y - s * 0.3, s * 0.2, s * 0.13), jit(40, 80, 80));
        add(CP.star(x, y - s * 0.95, s * 0.14, s * 0.06, 5), jit(110, 50, 35));
      } else if (t === 2) {
        add(CP.ell(x, y + s * 0.25, s * 0.85, s * 0.85), jit(65, 70, 58));
        add(CP.ell(x, y - s * 0.5, s * 0.5, s * 0.6), jit(65, 70, 58));
        add(CP.ell(x - s * 0.3, y + s * 0.1, s * 0.2, s * 0.3), jit(65, 50, 76));
        stem();
      } else if (t === 3) {
        add(CP.poly([x - s * 0.8, y - s * 0.5, x + s * 0.8, y - s * 0.5, x, y + s * 0.9]), jit(355, 80, 50));
        add(CP.star(x, y - s * 0.5, s * 0.55, s * 0.25, 6), jit(120, 55, 38));
        for (let k = 0; k < 4; k++)
          add(
            CP.ell(x + (k - 1.5) * s * 0.28, y + (k % 2 ? 0.1 : -0.15) * s, s * 0.06, s * 0.09),
            jit(50, 80, 80),
          );
      } else if (t === 4) {
        add(CP.ell(x, y, s * 1.1, s * 0.75), jit(55, 95, 60));
        add(CP.ell(x + s * 1.05, y, s * 0.15, s * 0.12), jit(55, 95, 60));
        add(CP.ell(x - s * 1.05, y, s * 0.15, s * 0.12), jit(55, 95, 60));
        add(CP.ell(x - s * 0.4, y - s * 0.25, s * 0.25, s * 0.12), jit(55, 80, 82));
      } else {
        const r = s * 0.28;
        [
          [0, 0],
          [-1, 0],
          [1, 0],
          [-0.5, 1],
          [0.5, 1],
          [0, 2],
        ].forEach((p, k) => {
          add(CP.ell(x + p[0] * r * 1.7, y - s * 0.4 + p[1] * r * 1.6, r, r), jit(285, 50, 40 + (k % 2) * 8));
        });
        add(CP.petal(x, y - s * 0.65, -Math.PI / 2, s * 0.5, s * 0.2), jit(110, 50, 40));
      }
    });
    fr.forEach((f) => fruit(...f));
  } else if (th === 8) {
    /* aurore boréale */
    sky(4 + Q(q * 3), 235, 265, 10, 26, 45);
    stars(8 + Q(q * 10), CDH * 0.4, 55);
    for (let i = 0; i < 4 + Q(q * 3); i++)
      add(
        CP.band(CDH * (0.1 + i * 0.07), rn(40, 70), rn(1, 2), rn(0, 6), CDH * 0.62),
        jit(130 + i * 22, 75, 34 + i * 3),
      );
    for (let k = 0; k < 3; k++) {
      const y = CDH * 0.58 + k * 60,
        P = [0, CDH];
      let x = 0;
      P.push(0, y + rn(-20, 20));
      while (x < CDW) {
        x += rn(60, 150);
        P.push(Math.min(CDW, x), y - rn(0, 170) * (1 - k * 0.15));
      }
      P.push(CDW, CDH);
      add(CP.poly(P), jit(225, 30, 20 + k * 5));
    }
    add(CP.band(CDH * 0.82, 16, 1.3, rn(0, 6), CDH), jit(215, 30, 92));
    add(CP.band(CDH * 0.9, 12, 2, rn(0, 6), CDH), jit(215, 25, 86));
    const bx = rn(300, 560),
      by = CDH * 0.93,
      bw = 260,
      bh = 170;
    add(CP.rect(bx, by - bh, bw, bh), jit(25, 45, 38));
    add(CP.poly([bx - 25, by - bh, bx + bw / 2, by - bh - 110, bx + bw + 25, by - bh]), jit(0, 0, 95));
    add(CP.rect(bx + bw * 0.7, by - bh - 90, 34, 70), jit(10, 40, 40));
    add(CP.rect(bx + bw * 0.4, by - bh * 0.6, bw * 0.2, bh * 0.6), jit(20, 45, 26));
    add(CP.rect(bx + bw * 0.1, by - bh * 0.75, bw * 0.2, bh * 0.25), jit(48, 95, 70));
    add(CP.rect(bx + bw * 0.7, by - bh * 0.75, bw * 0.2, bh * 0.25), jit(48, 95, 70));
    ln(
      CP.curve(bx + bw * 0.72, by - bh - 95, bx + bw * 0.6, by - bh - 170, bx + bw * 0.78, by - bh - 230),
      3,
    );
    for (let i = 0; i < 4 + Q(q * 5); i++) {
      const x = rn(30, 970);
      if (x > bx - 70 && x < bx + bw + 70) continue;
      pine(x, rn(CDH * 0.84, CDH * 1.0), rn(200, 380), 150, 18);
    }
  } else {
    /* château dans les nuages */
    sky(5 + Q(q * 4), 205, 260, 70, 92, 60);
    add(CP.ell(CDW * 0.15, CDH * 0.12, rn(50, 70), rn(50, 70)), jit(48, 95, 80));
    for (let i = 0; i < 2; i++) cloud(rn(150, 850), rn(100, 330), rn(90, 140), 95);
    const cx = CDW / 2,
      y0 = CDH * 0.74,
      st = () => jit(235, 10, 76);
    const tw = G((x, w, h, hu) => {
      add(CP.rect(x, y0 - h, w, h), st());
      const n = Math.max(2, Math.floor(w / 30));
      for (let k = 0; k < n; k++) add(CP.rect(x + k * (w / n), y0 - h - 24, w / n - 8, 24), st());
      const top = y0 - h - 24,
        pk = top - w * 1.1;
      add(CP.poly([x - w * 0.15, top, x + w / 2, pk, x + w * 1.15, top]), jit(hu, 60, 48));
      ln(CP.line([x + w / 2, pk, x + w / 2, pk - 70]), 3);
      add(CP.poly([x + w / 2, pk - 70, x + w / 2 + 55, pk - 52, x + w / 2, pk - 34]), jit(0, 75, 55));
      add(CP.rect(x + w * 0.35, y0 - h * 0.7, w * 0.3, w * 0.3), jit(48, 90, 70));
      add(CP.ell(x + w / 2, y0 - h * 0.7, w * 0.15, w * 0.15), jit(48, 90, 70));
    });
    tw(cx - 460, 90, 220, 200);
    tw(cx + 370, 90, 220, 200);
    add(CP.rect(cx - 340, y0 - 170, 680, 170), st());
    for (let k = 0; k < 13; k++) add(CP.rect(cx - 340 + k * 52.3, y0 - 194, 44, 24), st());
    tw(cx - 340, 130, 320, 0);
    tw(cx + 210, 130, 320, 0);
    if (q > 0.4) {
      tw(cx - 200, 70, 250, 280);
      tw(cx + 130, 70, 250, 280);
    }
    tw(cx - 90, 180, 430, 350);
    add(CP.rect(cx - 60, y0 - 140, 120, 140), jit(25, 45, 30));
    add(CP.ell(cx, y0 - 140, 60, 60), jit(25, 45, 30));
    for (let k = -1; k <= 1; k++) ln(CP.line([cx + k * 30, y0 - 190, cx + k * 30, y0]), 3);
    cloud(cx - 300, y0 + 10, 260, 98);
    cloud(cx + 300, y0 + 30, 260, 97);
    cloud(cx, y0 + 90, 340, 99);
    for (let i = 0; i < 2 + Q(q * 3); i++)
      add(CP.band(CDH * (0.88 + i * 0.04), 14, 1.3, rn(0, 6), CDH), cdHex(215, 30, 96 - i * 3));
    for (let i = 0; i < 2 + Q(q * 3); i++) {
      const x = rn(80, 920),
        y = rn(80, CDH * 0.3);
      ln(CP.curve(x - 25, y, x - 12, y - 18, x, y), 3);
      ln(CP.curve(x, y, x + 12, y - 18, x + 25, y), 3);
    }
  }
  cdKeep(S);
  return {
    A: S.filter((s) => s.ln || (s.c !== "#00000000" && s.c !== "#000")),
    get S() {
      return this.A.filter((s) => !s.ln);
    },
    L: [],
  };
}
function cdScene(e) {
  if (e >= CDO) return cdScene2(e);
  const t = cdRng(7919 * e + 13),
    a = Math.min(1, e / 39),
    s = e % 10,
    n = [],
    o = (e, t) => n.push({ d: e, c: t }),
    i = (e, t = 3) => n.push({ d: e, w: t, ln: 1 }),
    r = (e, a, s, n = 6) => cdHex(e + (t() - 0.5) * n, a + (t() - 0.5) * n, s + (t() - 0.5) * n),
    l = (e, a) => e + t() * (a - e),
    c = (e, t) => Math.floor(l(e, t + 1)),
    d = (e, t, a, s, n, i = 45) => {
      for (let r = 0; r < e; r++) {
        const c = r / e;
        o(
          CP.band(r ? CDH * (0.02 + 0.45 * c) : -30, l(4, 18), l(0.6, 1.6), l(0, 6), CDH),
          cdHex(t + (a - t) * c, i, s + (n - s) * c),
        );
      }
    },
    f = (e, t, a, s, n) => {
      for (let i = 0; i < e; i++) {
        const e = t + i * a * 0.35,
          c = [0, CDH];
        let d = 0;
        for (c.push(0, e + l(-30, 30)); d < CDW;)
          ((d += l(60, 170)), c.push(Math.min(CDW, d), e - l(0, a) * (1 - 0.12 * i)));
        (c.push(CDW, CDH), o(CP.poly(c), r(s, 30, n - 6 * i)));
      }
    },
    u =
      (e) =>
      (...t) => {
        const a = n.length,
          s = e(...t);
        return (cdFt2(n, a), s);
      },
    h = u((e, t, a, s) => {
      const n = c(5, 7);
      for (let i = 0; i < n; i++) {
        const l = Math.PI + ((i + 0.5) / n) * Math.PI;
        o(CP.petal(e, t, l, a, 0.32 * a), r(s, 62, 80 - (i % 2) * 8));
      }
      for (let i = 0; i < n - 1; i++) {
        const l = Math.PI + ((i + 1) / n) * Math.PI;
        o(CP.petal(e, t + 0.05 * a, l, 0.8 * a, 0.28 * a), r(s, 66, 68));
      }
      o(CP.ell(e, t - 0.12 * a, 0.22 * a, 0.12 * a), r(52, 80, 62));
      for (let n = 0; n < 3; n++)
        o(CP.petal(e, t + 0.08 * a, -Math.PI / 2 + 0.5 * (n - 1), 0.62 * a, 0.24 * a), r(s, 70, 58 + 5 * n));
    }),
    p = u((e, t, a, s, n, l, c) => {
      (o(CP.half(e, t, a, s, n, 1), r(l, 45, c)),
        o(CP.half(e, t, a, s, n, -1), r(l, 48, c - 9)),
        i(CP.line([e, t, e + Math.cos(a) * s, t + Math.sin(a) * s]), 2));
      for (let o = 1; o < 4; o++) {
        const r = (s * o) / 4.4,
          l = e + Math.cos(a) * r,
          c = t + Math.sin(a) * r;
        [1, -1].forEach((e) =>
          i(CP.line([l, c, l + Math.cos(a + 0.7 * e) * n * 0.7, c + Math.sin(a + 0.7 * e) * n * 0.7]), 1.4),
        );
      }
    }),
    m = u((e, t, a, s, n) => {
      o(CP.rect(e - 0.05 * a, t - 0.18 * a, 0.1 * a, 0.2 * a), r(25, 40, 30));
      const i = c(3, 4);
      for (let l = 0; l < i; l++) {
        const i = t - 0.15 * a - l * a * 0.25,
          c = a * (0.42 - 0.08 * l);
        o(CP.poly([e - c, i, e, i - 0.42 * a, e + c, i]), r(s, 40, n + 4 * l));
      }
    }),
    b = u((e, t, a, s, n) => {
      (o(CP.rect(e, t - s, a, s), r(n, 45, 62)),
        o(CP.poly([e - 0.1 * a, t - s, e + a / 2, t - s - 0.55 * a, e + 1.1 * a, t - s]), r(n + 180, 35, 40)),
        o(
          CP.poly([
            e - 0.1 * a,
            t - s,
            e + a / 2,
            t - s - 0.55 * a,
            e + 1.1 * a,
            t - s,
            e + 1.02 * a,
            t - s + 8,
            e + a / 2,
            t - s - 0.42 * a,
            e - 0.02 * a,
            t - s + 8,
          ]),
          "#f4f6fb",
        ),
        o(CP.rect(e + 0.38 * a, t - 0.5 * s, 0.24 * a, 0.5 * s), r(25, 45, 32)),
        o(CP.rect(e + 0.1 * a, t - 0.8 * s, 0.2 * a, 0.2 * s), r(48, 90, 68)),
        o(CP.rect(e + 0.7 * a, t - 0.8 * s, 0.2 * a, 0.2 * s), r(48, 90, 64)),
        i(CP.line([e + 0.2 * a, t - 0.8 * s, e + 0.2 * a, t - 0.6 * s]), 1.6),
        i(CP.line([e + 0.8 * a, t - 0.8 * s, e + 0.8 * a, t - 0.6 * s]), 1.6));
    }),
    g = u((e, t, a, s, n) => {
      for (let i = 0; i < n; i++)
        o(CP.petal(e, t, (i / n) * Math.PI * 2 + l(0, 0.2), a, 0.42 * a), r(s, 65, 70 - (i % 2) * 8));
      (o(CP.ell(e, t, 0.28 * a, 0.28 * a), r(45, 85, 58)),
        o(CP.ell(e - 0.06 * a, t - 0.06 * a, 0.1 * a, 0.1 * a), r(45, 85, 74)));
    }),
    E = u((e, a, s, n) => {
      (o(CP.blob(e, a, s, 0.38 * s, t, 10, 0.18), cdHex(220, 30, n)),
        o(CP.blob(e - 0.3 * s, a + 0.08 * s, 0.45 * s, 0.25 * s, t, 8, 0.15), cdHex(220, 25, n - 6)));
    }),
    y = u((e, a, s, n) => {
      const i = [],
        d = c(9, 14);
      for (let n = 0; n < d; n++) {
        const n = t() * Math.PI * 2,
          o = t() * s * 0.75;
        i.push([e + Math.cos(n) * o, a + Math.sin(n) * o * 1.15]);
      }
      (i.sort((e, t) => e[1] - t[1]),
        i.forEach(([e, t]) => {
          const a = s * l(0.24, 0.3);
          (o(CP.ell(e, t, a, a), r(n, 45, 30 + l(0, 18))),
            o(CP.ell(e - 0.35 * a, t - 0.35 * a, 0.3 * a, 0.22 * a), r(n, 30, 70)));
        }));
    }),
    v = u((e, t, a, s, n) => {
      (o(
        CP.poly([e - n * a * 0.9, t, e - n * a * 1.4, t - 0.4 * a, e - n * a * 1.4, t + 0.4 * a]),
        r(s, 70, 50),
      ),
        o(CP.ell(e, t, a, 0.5 * a), r(s, 75, 60)));
      for (let n = 0; n < 3; n++)
        o(CP.rect(e - 0.5 * a + n * a * 0.35, t - 0.45 * a, 0.12 * a, 0.9 * a), r(s + 30, 40, 92));
      (o(CP.petal(e, t - 0.4 * a, -Math.PI / 2 - 0.6 * n, 0.5 * a, 0.18 * a), r(s, 70, 45)),
        o(CP.ell(e + n * a * 0.55, t - 0.1 * a, 0.1 * a, 0.1 * a), "#ffffff"),
        o(CP.ell(e + n * a * 0.58, t - 0.1 * a, 0.05 * a, 0.05 * a), "#26243a"));
    });
  if (
    (u((e, t, a, s) => {
      const n = s.length;
      for (let s = 0; s < n; s++) {
        const i = -Math.PI / 2 - Math.PI / 2 + (s * Math.PI) / n,
          r = i + Math.PI / n;
        o(CP.sector(e, t, 0, a, i + Math.PI / 2 - Math.PI / 2, r), "#000");
      }
    }),
    0 === s)
  ) {
    (d(3 + Math.round(4 * a), 150, 190, 86, 94, 30),
      o(CP.ell(CDW * l(0.35, 0.6), 0.36 * CDH, l(240, 300), l(240, 300)), r(140, 30, 86)),
      f(2 + Math.round(2 * a), 0.5 * CDH, 160, 200, 78));
    for (let e = 0; e < 4 + Math.round(5 * a); e++)
      o(CP.band(CDH * (0.6 + 0.05 * e), 6, l(1, 3), l(0, 6), CDH), r(195, 40, 82 - 3 * e));
    const t =
        10 === e
          ? [
              [l(210, 330), l(0.68 * CDH, 0.74 * CDH)],
              [l(650, 790), l(0.8 * CDH, 0.88 * CDH)],
            ]
          : [],
      s = [];
    for (let n = 0; n < 3 + Math.round(5 * a) + (10 === e ? 3 : 0); n++) {
      let a = l(80, 920),
        n = l(0.68 * CDH, 0.95 * CDH);
      const c = l(50, 90);
      if (10 === e)
        for (
          let e = 0;
          e < 80 &&
          (t.some((e) => Math.hypot(e[0] - a, e[1] - n) < 250) ||
            s.some((e) => Math.hypot(e[0] - a, e[1] - n) < 200));
          e++
        )
          ((a = l(80, 920)), (n = l(0.66 * CDH, 0.97 * CDH)));
      (s.push([a, n]),
        o(CP.sector(a, n, 0, c, 0.3, 2 * Math.PI - 0.05).replace(/^M/, "M"), r(110, 42, 48)),
        i(CP.line([a, n, a + 0.9 * c, n]), 1.5));
    }
    const n = 1 + Math.round(2 * a);
    for (let a = 0; a < n; a++)
      10 === e && a < 2
        ? h(t[a][0], t[a][1], l(170, 230) / (1 + 0.25 * a), l(330, 350))
        : h(l(280, 720), l(0.64 * CDH, 0.8 * CDH), l(200, 280) / (1 + 0.25 * a), l(330, 350));
    for (let e = 0; e < 2; e++)
      i(CP.curve(l(300, 700), l(200, 400), l(300, 700), l(150, 350), l(300, 700), l(200, 400)), 2);
  } else if (1 === s) {
    d(2 + Math.round(3 * a), 200, 215, 90, 96, 35);
    for (let e = 0; e < 3; e++) E(l(150, 850), l(150, 600), l(90, 150), 94);
    o(
      CP.poly([
        0,
        0.16 * CDH,
        0.6 * CDW,
        0.2 * CDH,
        CDW,
        0.08 * CDH,
        CDW,
        0.12 * CDH,
        0.6 * CDW,
        0.25 * CDH,
        0,
        0.22 * CDH,
      ]),
      r(30, 40, 38),
    );
    for (let e = 0; e < 4 + Math.round(5 * a); e++)
      p(l(60, 940), l(0.12 * CDH, 0.45 * CDH), l(0, 2 * Math.PI), l(120, 200), l(40, 60), l(95, 125), 46);
    const e = 2 + Math.round(3 * a);
    for (let t = 0; t < e; t++) {
      const a = l(200, 800),
        s = CDH * (0.4 + (0.42 * t) / e) + l(0, 60);
      (o(CP.line([a, s - 140, a, s]), "#00000000"),
        i(CP.line([a, s - 150, a + l(-20, 20), s - 60]), 3),
        y(a, s, l(170, 230), l(270, 345)));
    }
    for (let e = 0; e < 2 + Math.round(2 * a); e++)
      o(CP.band(CDH * (0.88 + 0.03 * e), 5, 1.2, l(0, 6), CDH), r(100, 30, 80 - 6 * e));
  } else if (2 === s) {
    d(2 + Math.round(2 * a), 90, 120, 92, 96, 25);
    for (let e = 0; e < 3 + Math.round(3 * a); e++) {
      const e = l(20, 980),
        t = l(40, 60);
      for (let a = -20; a < 0.8 * CDH; a += l(160, 240))
        (o(CP.rect(e, a, t, l(150, 230)), r(100, 45, 52)), i(CP.line([e - 4, a, e + t + 4, a]), 3));
    }
    for (let e = 0; e < 5 + Math.round(6 * a); e++) {
      const e = l(0, 1e3),
        t = l(0, 0.4 * CDH);
      o(CP.petal(e, t, l(0, 2 * Math.PI), l(90, 150), l(14, 22)), r(115, 45, 45));
    }
    for (let e = 0; e < 4 + Math.round(4 * a); e++)
      o(
        CP.ell(CDW / 2, 0.86 * CDH, CDW * (0.7 - 0.08 * e), CDH * (0.12 - 0.012 * e)),
        r(195, 30, 80 - 3 * e),
      );
    const e = 3 + Math.round(2 * a);
    let t = 0.82 * CDH;
    for (let a = 0; a < e; a++) {
      const e = l(220, 300) * (1 - 0.12 * a),
        s = 0.42 * e;
      (o(CP.ell(0.42 * CDW, t - 0.5 * s, e, 0.55 * s), r(30, 8, 62 - 4 * a)),
        o(CP.ell(0.42 * CDW - 0.3 * e, t - 0.7 * s, 0.3 * e, 0.15 * s), r(30, 8, 75)),
        (t -= 0.95 * s));
    }
    (o(CP.rect(0.75 * CDW, 0.66 * CDH, 100, 130), r(40, 40, 88)),
      o(CP.ell(0.75 * CDW + 50, 0.66 * CDH, 50, 14), r(40, 30, 80)),
      o(CP.petal(0.75 * CDW + 50, 0.655 * CDH, -Math.PI / 2, 70, 18), r(40, 95, 60)),
      o(CP.petal(0.75 * CDW + 50, 0.655 * CDH, -Math.PI / 2, 40, 9), r(30, 95, 52)),
      g(0.2 * CDW, 0.68 * CDH, 110, l(0, 40), 5));
  } else if (3 === s) {
    (d(5 + Math.round(6 * a), 10, 45, 62, 86, 75),
      o(CP.ell(CDW * l(0.3, 0.7), 0.4 * CDH, l(90, 140), l(90, 140)), r(45, 95, 70)),
      f(3 + Math.round(3 * a), 0.42 * CDH, 220, 260, 52));
    for (let e = 0; e < 3 + Math.round(3 * a); e++)
      o(CP.band(CDH * (0.72 + 0.035 * e), 4, l(1, 3), l(0, 6), CDH), r(230, 35, 50 + 4 * e));
    for (let e = 0; e < 4 + Math.round(8 * a); e++)
      m(l(30, 970), l(0.8 * CDH, 1.02 * CDH), l(240, 420), l(130, 160), 24);
  } else if (4 === s) {
    (d(4 + Math.round(4 * a), 230, 260, 22, 40, 45),
      o(CP.ell(0.78 * CDW, 0.14 * CDH, 80, 80), r(50, 70, 86)),
      o(CP.ell(0.81 * CDW, 0.13 * CDH, 70, 70), cdHex(240, 45, 26)));
    for (let e = 0; e < 6 + Math.round(10 * a); e++)
      o(CP.star(l(30, 970), l(30, 0.35 * CDH), l(10, 18), l(4, 7), 4), r(50, 80, 88));
    for (let e = 0; e < 3; e++)
      o(CP.band(CDH * (0.5 + 0.06 * e), 20, l(0.8, 1.6), l(0, 6), CDH), r(215, 25, 90 - 4 * e));
    const t = 3 + Math.round(4 * a),
      s = [];
    for (let e = 0; e < t; e++) {
      const t = l(170, 250) / (1 + 0.12 * e),
        a = l(0, CDW - t),
        n = l(0.66 * CDH, 0.92 * CDH),
        o = t * l(0.7, 0.95),
        i = l(0, 360);
      (s.push([a - 0.12 * t, a + 1.12 * t]), b(a, n, t, o, i));
    }
    const n = [];
    for (let t = 0; t < 3 + Math.round(4 * a); t++) {
      let t = l(30, 970);
      if (4 === e) {
        const e = () => s.some((e) => t > e[0] - 70 && t < e[1] + 70) || n.some((e) => Math.abs(t - e) < 120);
        for (let a = 0; a < 200 && e(); a++) t = l(30, 970);
        if (e()) continue;
      }
      (n.push(t), m(t, l(0.7 * CDH, CDH), l(140, 220), 150, 30));
    }
  } else if (5 === s) {
    o(CP.rect(0, 0, CDW, CDH), r(260, 30, 90));
    const e = CDW / 2,
      t = CDH / 2,
      s = 5 + Math.round(4 * a),
      n = l(0, 360);
    let i = 70;
    o(CP.ell(e, t, i, i), r(n, 70, 60));
    for (let a = 0; a < s; a++) {
      const d = 8 + 2 * c(0, 4),
        f = i + (360 / s) * l(0.85, 1.1);
      for (let s = 0; s < d; s++) {
        const l = (s / d) * Math.PI * 2,
          c = ((s + 1) / d) * Math.PI * 2;
        a % 2
          ? o(
              CP.petal(
                e + Math.cos(l) * i,
                t + Math.sin(l) * i,
                l + Math.PI / d,
                1.2 * (f - i),
                0.35 * (f - i),
              ),
              r(n + 28 * a, 60, 70 - 3 * a),
            )
          : (o(CP.sector(e, t, i, f, l, c), r(n + 28 * a + (s % 2) * 14, 55, 62 + (s % 2) * 10)),
            o(
              CP.ell(
                e + (Math.cos((l + c) / 2) * (i + f)) / 2,
                t + (Math.sin((l + c) / 2) * (i + f)) / 2,
                0.18 * (f - i),
                0.18 * (f - i),
              ),
              r(n + 180, 50, 80),
            ));
      }
      i = f;
    }
    for (let e = 0; e < 4; e++) g(e % 2 ? CDW - 60 : 60, e < 2 ? 60 : CDH - 60, 50, n + 90, 6);
  } else if (6 === s) {
    d(3 + Math.round(3 * a), 190, 210, 80, 92, 45);
    for (let e = 0; e < 2; e++) E(l(150, 850), l(120, 300), l(90, 140), 95);
    for (let e = 0; e < 4 + Math.round(3 * a); e++)
      o(CP.band(CDH * (0.62 + 0.06 * e), 12, l(1, 3), l(0, 6), CDH), r(100, 45, 60 - 4 * e));
    for (let e = 0; e < 4 + Math.round(6 * a); e++) {
      const e = l(60, 940),
        t = l(0.66 * CDH, 0.95 * CDH);
      (i(CP.line([e, t, e, t + 120]), 3), g(e, t, l(60, 110), l(0, 360), c(5, 8)));
    }
    const t = 1 + Math.round(2 * a);
    for (let e = 0; e < t; e++) {
      const t = l(280, 720),
        a = CDH * (0.22 + 0.15 * e),
        s = l(200, 270) / (1 + 0.3 * e),
        n = l(0, 360),
        i = l(-0.3, 0.3);
      ([1, -1].forEach((e) => {
        (o(CP.petal(t, a, -Math.PI / 2 + 1 * e + i, s, 0.55 * s), r(n, 70, 60)),
          o(CP.petal(t, a, Math.PI / 2 + 0.6 * e + i, 0.7 * s, 0.35 * s), r(n + 20, 70, 55)),
          o(CP.ell(t + e * s * 0.5, a - 0.45 * s, 0.12 * s, 0.12 * s), r(n + 180, 60, 85)),
          o(CP.ell(t + e * s * 0.3, a + 0.4 * s, 0.08 * s, 0.08 * s), r(n + 180, 60, 80)));
      }),
        o(CP.ell(t, a, 0.07 * s, 0.42 * s), r(30, 30, 25)));
    }
    if (6 === e)
      for (let e = 0; e < 10; e++) {
        const t = 60 + ((e + l(0.1, 0.9)) * (CDW - 120)) / 10,
          a = l(0.76 * CDH, 0.95 * CDH);
        (i(CP.line([t, a, t, a + 70]), 3), g(t, a, l(34, 58), l(0, 360), c(5, 7)));
      }
  } else if (7 === s) {
    for (let e = 0; e < 5 + Math.round(4 * a); e++)
      o(CP.band(CDH * (0.1 * e), 10, l(1, 2), l(0, 6), CDH), r(195, 65, 72 - 4 * e));
    (o(CP.band(0.82 * CDH, 18, 1.3, 1, CDH), r(40, 55, 78)),
      o(CP.band(0.9 * CDH, 12, 2, 2, CDH), r(38, 50, 72)));
    const s = 4 + Math.round(5 * a);
    for (let a = 0; a < s; a++) {
      const n = 7 === e ? 40 + ((a + l(0.15, 0.85)) * (CDW - 80)) / s : l(40, 960),
        i = CDH * (7 === e ? l(0.9, 0.97) : l(0.78, 0.92)),
        d = l(-20, 30),
        f = 7 === e ? 34 : 60;
      for (let a = 0; a < c(3, 5); a++)
        o(
          CP.blob(n + l(-f, f), i - (7 === e ? l(0, 60) : l(20, 200)), l(25, 45), l(50, 90), t, 9, 0.3),
          r(d, 70, 62),
        );
    }
    for (let e = 0; e < 3 + Math.round(4 * a); e++) {
      const e = l(30, 970);
      (o(CP.band(0, 0, 1, 0, 0), "#00000000"),
        o(CP.petal(e, 0.92 * CDH, -Math.PI / 2 + l(-0.2, 0.2), l(220, 380), l(18, 28)), r(130, 45, 40)));
    }
    for (let e = 0; e < 3 + Math.round(5 * a); e++)
      v(l(160, 840), l(0.12 * CDH, 0.7 * CDH), l(80, 130), l(0, 60), t() < 0.5 ? 1 : -1);
    for (let e = 0; e < 5 + Math.round(6 * a); e++) {
      const e = l(8, 18);
      o(CP.ell(l(30, 970), l(30, 0.6 * CDH), e, e), cdHex(195, 60, 92));
    }
  } else if (8 === s) {
    d(4 + Math.round(5 * a), 200, 30, 82, 90, 55);
    for (let e = 0; e < 3 + Math.round(2 * a); e++) E(l(100, 900), l(150, 0.6 * CDH), l(80, 140), 96);
    for (let e = 0; e < 3 + Math.round(2 * a); e++)
      o(CP.band(CDH * (0.8 + 0.05 * e), 25, l(0.6, 1.4), l(0, 6), CDH), r(110, 40, 58 - 5 * e));
    const e = 2 + Math.round(3 * a);
    for (let t = 0; t < e; t++) {
      const a = l(220, 780),
        s = CDH * (0.2 + (0.45 * t) / e),
        n = l(150, 220) / (1 + 0.2 * t),
        c = [l(0, 360), l(0, 360), l(0, 360)],
        d = 6;
      for (let e = 0; e < d; e++) {
        const t = (2 * e) / d - 1,
          i = (2 * (e + 1)) / d - 1;
        for (let e = 0; e <= 10; e++) (Math.PI, Math.PI);
        const l = [];
        for (let e = 0; e <= 12; e++) {
          const o = -Math.PI / 2 + (e / 12) * Math.PI,
            i = Math.cos(o);
          l.push(a + n * t * i, s + n * Math.sin(o));
        }
        for (let e = 12; e >= 0; e--) {
          const t = -Math.PI / 2 + (e / 12) * Math.PI,
            o = Math.cos(t);
          l.push(a + n * i * o, s + n * Math.sin(t));
        }
        o(CP.poly(l), r(c[e % 3], 70, 60 + (e % 2) * 8));
      }
      (o(
        CP.poly([
          a - 0.35 * n,
          s + 0.95 * n,
          a + 0.35 * n,
          s + 0.95 * n,
          a + 0.2 * n,
          s + 1.2 * n,
          a - 0.2 * n,
          s + 1.2 * n,
        ]),
        r(c[0], 60, 50),
      ),
        o(CP.rect(a - 0.18 * n, s + 1.35 * n, 0.36 * n, 0.25 * n), r(30, 45, 40)),
        i(CP.line([a - 0.2 * n, s + 1.2 * n, a - 0.16 * n, s + 1.35 * n]), 2),
        i(CP.line([a + 0.2 * n, s + 1.2 * n, a + 0.16 * n, s + 1.35 * n]), 2));
    }
  } else {
    (o(CP.rect(0, 0, CDW, 0.6 * CDH), r(35, 50, 88)),
      o(CP.rect(0.15 * CDW, 0.06 * CDH, 0.7 * CDW, 0.34 * CDH), r(205, 55, 78)),
      o(CP.rect(0.15 * CDW, 0.06 * CDH, 0.7 * CDW, 0.12 * CDH), r(205, 55, 84)),
      i(CP.line([0.5 * CDW, 0.06 * CDH, 0.5 * CDW, 0.4 * CDH]), 5),
      i(CP.line([0.15 * CDW, 0.23 * CDH, 0.85 * CDW, 0.23 * CDH]), 5));
    const e = 8 + Math.round(6 * a),
      t = CDW / e;
    for (let a = 0; a < Math.ceil((0.4 * CDH) / t); a++)
      for (let s = 0; s < e; s++)
        o(CP.rect(s * t, 0.6 * CDH + a * t, t, t), (a + s) % 2 ? r(0, 60, 62) : r(0, 30, 92));
    const s = 0.36 * CDW,
      n = 0.64 * CDH;
    (o(CP.ell(s, n, 200, 160), r(l(0, 360), 45, 62)),
      o(CP.ell(s - 40, n - 50, 80, 40), r(0, 0, 95)),
      o(
        CP.poly([s + 180, n - 20, s + 300, n - 120, s + 310, n - 100, s + 200, n + 40]),
        r(l(0, 360), 45, 55),
      ),
      o(CP.ell(s, n - 160, 90, 26), r(30, 40, 50)),
      o(CP.ell(s, n - 190, 22, 22), r(30, 40, 45)));
    for (let e = 0; e < 2 + Math.round(2 * a); e++) {
      const e = CDW * l(0.62, 0.85),
        t = CDH * l(0.72, 0.92);
      (o(CP.ell(e, t + 40, 110, 26), r(0, 0, 92)),
        o(CP.poly([e - 70, t - 60, e + 70, t - 60, e + 55, t + 40, e - 55, t + 40]), r(l(0, 360), 55, 60)),
        o(CP.ell(e, t - 60, 70, 18), r(25, 55, 35)),
        i(CP.curve(e - 20, t - 90, e, t - 140, e - 10, t - 190), 3));
    }
    for (let e = 0; e < 3 + Math.round(3 * a); e++) {
      const e = l(80, 920),
        t = CDH * l(0.88, 0.97),
        a = l(40, 60);
      o(CP.ell(e, t, a, 0.9 * a), r(32, 60, 60));
      for (let s = 0; s < 4; s++)
        o(CP.ell(e + l(0.5 * -a, 0.5 * a), t + l(0.4 * -a, 0.4 * a), 8, 8), r(25, 60, 25));
    }
  }
  return (
    cdKeep(n),
    {
      A: n.filter((e) => e.ln || ("#00000000" !== e.c && "#000" !== e.c)),
      get S() {
        return this.A.filter((e) => !e.ln);
      },
      L: [],
    }
  );
}
function cdPal(e, t) {
  const a = (e) => {
      const t = parseInt(e.slice(1), 16);
      return [t >> 16, (t >> 8) & 255, 255 & t];
    },
    s = [...new Set(e.map((e) => e.c))].map((t) => ({
      h: t,
      v: a(t),
      n: e.filter((e) => e.c === t).length,
      m: [t],
    })),
    n = (e, t) => {
      const a = (e.v[0] + t.v[0]) / 2;
      return Math.sqrt(
        (2 + a / 256) * (e.v[0] - t.v[0]) ** 2 +
          4 * (e.v[1] - t.v[1]) ** 2 +
          (2 + (255 - a) / 256) * (e.v[2] - t.v[2]) ** 2,
      );
    };
  for (; s.length > t;) {
    let e = 0,
      t = 1,
      a = 1e9;
    for (let o = 0; o < s.length; o++)
      for (let i = o + 1; i < s.length; i++) {
        const r = n(s[o], s[i]);
        r < a && ((a = r), (e = o), (t = i));
      }
    const o = s[e],
      i = s[t],
      r = o.n + i.n;
    ((o.v = o.v.map((e, t) => (e * o.n + i.v[t] * i.n) / r)),
      (o.n = r),
      (o.m = o.m.concat(i.m)),
      s.splice(t, 1));
  }
  (s.forEach((e) => {
    e.h = "#" + e.v.map((e) => Math.round(e).toString(16).padStart(2, "0")).join("");
    const [t, a, s] = e.v.map((e) => e / 255),
      n = Math.max(t, a, s),
      o = Math.min(t, a, s),
      i = (n + o) / 2;
    let r = 0;
    if (n !== o) {
      const e = n - o;
      r = n === t ? ((a - s) / e) % 6 : n === a ? (s - t) / e + 2 : (t - a) / e + 4;
    }
    e.k = (n - o < 0.08 ? 1e3 : 10 * Math.round(((60 * r + 360) % 360) / 30)) + i;
  }),
    s.sort((e, t) => e.k - t.k));
  const o = {};
  return (s.forEach((e, t) => e.m.forEach((e) => (o[e] = t + 1))), { pal: s.map((e) => e.h), map: o });
}
function cdBuild(e) {
  const t = cdScene(e),
    a = cdK(e),
    { pal: s, map: n } = cdPal(t.S, a),
    o = [],
    i = [];
  t.A.forEach((e) => {
    e.ln
      ? i.push({ p: new Path2D(e.d), w: e.w })
      : (i.push({ r: o.length }), o.push({ p: new Path2D(e.d), c: n[e.c], d: e.d }));
  });
  const r = Math.round(CDW / 2),
    l = Math.round(CDH / 2),
    c = document.createElement("canvas");
  ((c.width = r), (c.height = l));
  const d = c.getContext("2d", { willReadFrequently: !0 });
  d.setTransform(0.5, 0, 0, 0.5, 0, 0);
  const f = new Map();
  o.forEach((e, t) => {
    const a = ((e) => (((2654435761 * (e + 1)) >>> 0) % 16777215) + 1)(t);
    (f.set(a, t), (d.fillStyle = "#" + a.toString(16).padStart(6, "0")), d.fill(e.p));
  });
  const u = d.getImageData(0, 0, r, l).data,
    h = new Int32Array(r * l).fill(-1);
  for (let e = 0; e < r * l; e++) {
    const t = (u[4 * e] << 16) | (u[4 * e + 1] << 8) | u[4 * e + 2],
      a = f.get(t);
    void 0 !== a && (h[e] = a);
  }
  const p = new Float32Array(r * l);
  for (let e = 0; e < r * l; e++) p[e] = h[e] < 0 ? 0 : 1e9;
  const m = (e, t, a) => {
    p[t] + a < p[e] && (p[e] = p[t] + a);
  };
  for (let e = 0; e < l; e++)
    for (let t = 0; t < r; t++) {
      const a = e * r + t;
      if (!p[a]) continue;
      const s = h[a];
      0 !== t && 0 !== e && h[a - 1] === s && h[a - r] === s
        ? (m(a, a - 1, 1), m(a, a - r, 1), m(a, a - r - 1, 1.414), t < r - 1 && m(a, a - r + 1, 1.414))
        : (p[a] = 1);
    }
  for (let e = l - 1; e >= 0; e--)
    for (let t = r - 1; t >= 0; t--) {
      const a = e * r + t;
      if (!p[a]) continue;
      const s = h[a];
      t !== r - 1 && e !== l - 1 && h[a + 1] === s && h[a + r] === s
        ? (m(a, a + 1, 1), m(a, a + r, 1), m(a, a + r + 1, 1.414), t > 0 && m(a, a + r - 1, 1.414))
        : (p[a] = 1);
    }
  const b = o.map(() => ({ d: 0, i: -1, n: 0 }));
  for (let e = 0; e < r * l; e++) {
    const t = h[e];
    if (t < 0) continue;
    const a = b[t];
    (a.n++, p[e] > a.d && ((a.d = p[e]), (a.i = e)));
  }
  return (
    o.forEach((e, t) => {
      const a = b[t];
      ((e.n = a.n),
        a.i >= 0 &&
          ((e.lx = 2 * ((a.i % r) + 0.5)),
          (e.ly = 2 * (Math.floor(a.i / r) + 0.5)),
          (e.fs = Math.min(110, 2 * a.d * 1.15))),
        (e.pre = a.n < 30 || e.fs < 9));
    }),
    { R: o, DR: i, pal: s, id: h, bw: r, bh: l }
  );
}
const CD = {
  l: 0,
  M: null,
  f: null,
  sel: 1,
  cv: null,
  x: null,
  z: 1,
  ox: 0,
  oy: 0,
  fit: 1,
  pt: {},
  pz: null,
  tap: null,
  ok: !1,
  hl: null,
  pat: null,
};
function cdSave() {
  if (!CD.M) return;
  let e = "";
  for (let t = 0; t < CD.f.length; t += 5) {
    let a = 0;
    for (let e = 0; e < 5; e++) CD.f[t + e] && (a |= 1 << e);
    e += a.toString(32);
  }
  st.set("cd:sv:" + CD.l, e);
}
function cdLoad() {
  const e = CD.M.R.length,
    t = CD.M.R.map((e) => !!e.pre),
    a = st.get("cd:sv:" + CD.l, "");
  if ("string" == typeof a && a.length === Math.ceil(e / 5))
    for (let s = 0; s < e; s++) (parseInt(a[Math.floor(s / 5)], 32) >> (s % 5)) & 1 && (t[s] = !0);
  return t;
}
function cdLeft(e) {
  let t = 0;
  return (
    CD.M.R.forEach((a, s) => {
      a.c !== e || CD.f[s] || t++;
    }),
    t
  );
}
function cdTotal(e) {
  let t = 0;
  return (
    CD.M.R.forEach((a) => {
      a.c === e && t++;
    }),
    t
  );
}
function cdThumb(e) {
  const t = cdScene(e),
    a = cdK(e),
    { pal: s, map: n } = cdPal(t.S, a),
    o = document.createElement("canvas");
  ((o.width = 60), (o.height = 78));
  const i = o.getContext("2d");
  return (
    i.scale(60 / CDW, 78 / CDH),
    t.S.forEach((e) => {
      ((i.fillStyle = s[n[e.c] - 1]), i.fill(new Path2D(e.d)));
    }),
    o.toDataURL()
  );
}
function cdScreen() {
  (cbActs(), (cur = "colorie"), nv("games"), theme("colorie"));
  {
    const e = $("#nav");
    e && (e.hidden = !0);
  }
  const e = CD.M;
  app.innerHTML = `<div class="cds"><div class="top stk"><button class="back" data-a="cdBk">‹ Retour</button><button class="tl tlk" data-a="cSkip" data-v="cd" aria-label="Niveau ${CDPOS[CD.l] + 1} : toucher pour passer ce niveau"><span class="tlf">Niveau</span><span class="tls">Niv.</span>&nbsp;${CDPOS[CD.l] + 1}<i aria-hidden="true">⏭</i></button><div class="tr"><button class="hb hintb" data-a="cdHint" aria-label="Indice : coûte 1 bulle">${HBI(1)}</button><div class="chip">🫧 ${FLX()}</div></div></div><div id="skw" class="skw"></div>\n <div class="cdw" id="cdw"><canvas id="cdc" aria-label="Dessin à colorier : glisse pour te déplacer, pince pour zoomer, touche une zone pour la colorier"></canvas><div class="cdz"><button data-a="cdZ" data-v="1" aria-label="Zoomer">+</button><button data-a="cdZ" data-v="-1" aria-label="Dézoomer">−</button></div></div>\n <div class="cdpal" id="cdpal" role="radiogroup" aria-label="Couleurs">${e.pal.map((e, t) => `<button class="cdsw${cbLight(e) ? " lt" : ""}" role="radio" data-a="cdSel" data-v="${t + 1}" style="--c:${e}" aria-label="Couleur ${t + 1}"><b>${t + 1}</b></button>`).join("")}</div>\n <p class="m" id="m" role="status" aria-live="polite"></p></div>`;
  const t = (CD.cv = $("#cdc"));
  CD.x = t.getContext("2d");
  const a = document.createElement("canvas");
  a.width = a.height = 16;
  const s = a.getContext("2d");
  ((s.fillStyle = "#e3e1ec"),
    s.fillRect(0, 0, 16, 16),
    (s.fillStyle = "#c9c6d6"),
    s.fillRect(0, 0, 8, 8),
    s.fillRect(8, 8, 8, 8),
    (CD.pat = CD.x.createPattern(a, "repeat")));
  try {
    CD.pat.setTransform(new DOMMatrix().scale(1.4));
  } catch (e) {}
  (cdSizeC(!0),
    // Contrôles via Input : toucher / glisser / lâcher (peindre, déplacer, pincer), molette = zoom.
    Input.sur(
      ["toucher", "glisser", "survoler", "lacher"],
      (quoi, inf) => ("toucher" === quoi ? cdPD : "lacher" === quoi ? cdPU : cdPM)(inf.evt),
      { cible: t, annulation: !0 },
    ),
    Input.sur(
      "defiler",
      (quoi, inf) => {
        const e = inf.evt;
        e.preventDefault();
        const a = t.getBoundingClientRect();
        cdZoomAt(CD.z * (e.deltaY < 0 ? 1.15 : 1 / 1.15), e.clientX - a.left, e.clientY - a.top);
      },
      { cible: t, passive: !1 },
    ),
    addEventListener("resize", cdSizeC),
    CD.f.every(Boolean) && (CD.ok = !0),
    cdPick(cdNext(1) || 1),
    window.scrollTo(0, 0));
}
function cdSizeC(e) {
  const t = CD.cv;
  if (!t || !t.isConnected) return void removeEventListener("resize", cdSizeC);
  const a = Math.min(($("#cdw") || t).clientWidth || 360, 600),
    s = Math.max(260, innerHeight - t.getBoundingClientRect().top - 120),
    n = Math.min(2.5, devicePixelRatio || 1);
  ((t.style.width = a + "px"),
    (t.style.height = s + "px"),
    (t.width = Math.round(a * n)),
    (t.height = Math.round(s * n)),
    (CD.dpr = n),
    (CD.w = a),
    (CD.h = s));
  const o = Math.min(a / CDW, s / CDH);
  (!0 !== e && CD.fit
    ? ((CD.fit = o), cdClamp())
    : ((CD.fit = o), (CD.z = o), (CD.ox = (a - CDW * o) / 2), (CD.oy = (s - CDH * o) / 2)),
    cdDraw());
}
function cdClamp() {
  const e = CD.fit;
  CD.z = Math.max(0.5 * e, Math.min(14 * e, CD.z));
  const t = CDW * CD.z,
    a = CDH * CD.z,
    s = 0.75 * CD.w,
    n = 0.75 * CD.h;
  ((CD.ox = Math.min(s, Math.max(CD.w - s - t, CD.ox))),
    (CD.oy = Math.min(n, Math.max(CD.h - n - a, CD.oy))));
}
function cdZoomAt(e, t, a) {
  const s = (t - CD.ox) / CD.z,
    n = (a - CD.oy) / CD.z;
  ((CD.z = Math.max(0.5 * CD.fit, Math.min(14 * CD.fit, e))),
    (CD.ox = t - s * CD.z),
    (CD.oy = a - n * CD.z),
    cdClamp(),
    cdDraw());
}
function cdNext(e) {
  const t = CD.M.pal.length;
  for (let a = 0; a < t; a++) {
    const s = ((e - 1 + a) % t) + 1;
    if (cdLeft(s)) return s;
  }
  return 0;
}
function cdPick(e) {
  ((CD.sel = e),
    document.querySelectorAll(".cdsw").forEach((t) => {
      const a = +t.dataset.v,
        s = cdLeft(a),
        n = cdTotal(a) || 1;
      (t.classList.toggle("on", a === e),
        t.classList.toggle("ok", !s),
        t.setAttribute("aria-checked", a === e),
        t.style.setProperty("--pr", 360 * (1 - s / n) + "deg"));
    }));
  const t = $(`.cdsw[data-v="${e}"]`);
  (t && t.scrollIntoView({ behavior: wRM ? "auto" : "smooth", inline: "center", block: "nearest" }),
    cdDraw());
}
function cdDraw() {
  const e = CD.x,
    t = CD.M;
  if (!e || !t) return;
  const a = CD.dpr,
    s = CD.z,
    n = CD.ok;
  (e.setTransform(1, 0, 0, 1, 0, 0),
    e.clearRect(0, 0, CD.cv.width, CD.cv.height),
    e.setTransform(a * s, 0, 0, a * s, CD.ox * a, CD.oy * a),
    (e.fillStyle = "#ffffff"),
    e.fillRect(0, 0, CDW, CDH),
    (e.lineJoin = "round"),
    (e.lineCap = "round"),
    (e.strokeStyle = "#2a2838"),
    (e.lineWidth = Math.max(1.2, (1.6 / s) * 0.9)));
  const o = e.lineWidth;
  if (
    (t.DR.forEach((a) => {
      if (void 0 === a.r)
        return ((e.lineWidth = Math.max(0.8, 0.6 * a.w)), e.stroke(a.p), void (e.lineWidth = o));
      const s = a.r,
        i = t.R[s];
      (n || CD.f[s]
        ? (e.fillStyle = t.pal[i.c - 1])
        : CD.hl && CD.hl.has(s)
          ? (e.fillStyle = "#ffe27a")
          : i.c === CD.sel
            ? (e.fillStyle = CD.pat)
            : (e.fillStyle = "#ffffff"),
        e.fill(i.p),
        e.stroke(i.p));
    }),
    n)
  )
    return;
  const i = -CD.ox / s,
    r = -CD.oy / s,
    l = i + CD.w / s,
    c = r + CD.h / s;
  ((e.textAlign = "center"),
    (e.textBaseline = "middle"),
    (e.fillStyle = "#3a3750"),
    t.R.forEach((t, a) => {
      if (CD.f[a] || !t.lx) return;
      const n = Math.min(0.6 * t.fs, 44 / s);
      n * s < 7 ||
        t.lx < i - 50 ||
        t.lx > l + 50 ||
        t.ly < r - 50 ||
        t.ly > c + 50 ||
        ((e.font = `${t.c === CD.sel ? 800 : 500} ${n}px "Nunito Sans",system-ui,sans-serif`),
        e.fillText(t.c, t.lx, t.ly));
    }));
}
function cdHit(e) {
  const t = CD.cv.getBoundingClientRect(),
    a = (e.clientX - t.left - CD.ox) / CD.z,
    s = (e.clientY - t.top - CD.oy) / CD.z;
  if (a < 0 || s < 0 || a >= CDW || s >= CDH) return -1;
  const n = CD.x;
  n.setTransform(1, 0, 0, 1, 0, 0);
  for (let e = CD.M.R.length - 1; e >= 0; e--) if (n.isPointInPath(CD.M.R[e].p, a, s)) return e;
  return -1;
}
function cdTapAt(e) {
  if (CD.ok) return;
  const t = cdHit(e);
  if (t < 0) return;
  const a = CD.M.R[t];
  if (CD.f[t]) return;
  if (a.c !== CD.sel) {
    (vib(12), sfx(220, 0.05));
    const e = $("#m");
    return void (e && (e.textContent = "Cette zone porte le numéro " + a.c + "."));
  }
  ((CD.f[t] = !0), CD.hl && CD.hl.delete(t), sfx(520 + 80 * Math.random(), 0.05));
  const s = $("#m");
  s && (s.textContent = "");
  const n = cdLeft(a.c),
    o = $(`.cdsw[data-v="${a.c}"]`);
  if (
    (o &&
      (o.style.setProperty("--pr", 360 * (1 - n / (cdTotal(a.c) || 1)) + "deg"),
      o.classList.toggle("ok", !n)),
    Math.random() < 0.35 && cdSave(),
    !n)
  )
    return (sfx(780, 0.14), vib(10), cdSave(), CD.f.every(Boolean) ? cdWin() : cdPick(cdNext(a.c)));
  cdDraw();
}
const cdPts = () => Object.values(CD.pt);
function cdPD(e) {
  if (!CD.M) return;
  try {
    CD.cv.setPointerCapture(e.pointerId);
  } catch (e) {}
  CD.pt[e.pointerId] = { x: e.clientX, y: e.clientY };
  const t = cdPts();
  if (1 === t.length)
    CD.tap = {
      id: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      ox: CD.ox,
      oy: CD.oy,
      mv: !1,
      t: performance.now(),
    };
  else if (2 === t.length) {
    CD.tap = null;
    const e = CD.cv.getBoundingClientRect(),
      a = t[0],
      s = t[1];
    CD.pz = {
      d: Math.hypot(a.x - s.x, a.y - s.y) || 1,
      z: CD.z,
      mx: (a.x + s.x) / 2 - e.left,
      my: (a.y + s.y) / 2 - e.top,
      ox: CD.ox,
      oy: CD.oy,
    };
  }
  e.preventDefault();
}
function cdPM(e) {
  if (!CD.pt[e.pointerId]) return;
  CD.pt[e.pointerId] = { x: e.clientX, y: e.clientY };
  const t = cdPts();
  if (t.length >= 2 && CD.pz) {
    const e = CD.cv.getBoundingClientRect(),
      a = t[0],
      s = t[1],
      n = Math.hypot(a.x - s.x, a.y - s.y) || 1,
      o = (a.x + s.x) / 2 - e.left,
      i = (a.y + s.y) / 2 - e.top,
      r = CD.pz,
      l = Math.max(0.5 * CD.fit, Math.min(14 * CD.fit, (r.z * n) / r.d)),
      c = (r.mx - r.ox) / r.z,
      d = (r.my - r.oy) / r.z;
    ((CD.z = l), (CD.ox = o - c * l), (CD.oy = i - d * l), cdClamp(), cdDraw());
  } else if (CD.tap && CD.tap.id === e.pointerId) {
    const t = CD.tap,
      a = e.clientX - t.x,
      s = e.clientY - t.y;
    (!t.mv && Math.hypot(a, s) > 8 && (t.mv = !0),
      t.mv && ((CD.ox = t.ox + a), (CD.oy = t.oy + s), cdClamp(), cdDraw()));
  }
  e.preventDefault();
}
function cdPU(e) {
  delete CD.pt[e.pointerId];
  const t = CD.tap;
  (t && t.id === e.pointerId && (t.mv || "pointerup" !== e.type || cdTapAt(e), (CD.tap = null)),
    cdPts().length < 2 && (CD.pz = null));
}
function cdWin() {
  ((CD.ok = !0), st.set("cd:sv:" + CD.l, ""));
  const e = st.get("cd:d", []),
    t = !e.includes(CD.l);
  t && (e.push(CD.l), st.set("cd:d", e));
  const a = dmR("colorie", t ? 3 + Math.floor(CDPOS[CD.l] / 12) : 1);
  ((fl += a), st.set("fl", fl));
  {
    const e = $(".chip:not(.hintb)");
    e && (e.textContent = "🫧 " + FLX());
  }
  const s = CD.z,
    n = CD.ox,
    o = CD.oy,
    i = performance.now();
  CD.fit = Math.min(CD.w / CDW, CD.h / CDH);
  const r = CD.fit,
    l = (CD.w - CDW * r) / 2,
    c = (CD.h - CDH * r) / 2,
    d = (e) => {
      const t = Math.min(1, (e - i) / 700),
        a = 1 - Math.pow(1 - t, 3);
      ((CD.z = s + (r - s) * a),
        (CD.ox = n + (l - n) * a),
        (CD.oy = o + (c - o) * a),
        cdDraw(),
        t < 1 && !wRM ? requestAnimationFrame(d) : ((CD.z = r), (CD.ox = l), (CD.oy = c), cdDraw()));
    };
  (requestAnimationFrame(d),
    document.querySelectorAll(".cdsw").forEach((e) => {
      (e.classList.add("ok"), e.style.setProperty("--pr", "360deg"));
    }),
    sfx(784, 0.6),
    vib([20, 40, 20]),
    setTimeout(() => {
      try {
        confetti(CD.cv);
      } catch (e) {}
    }, 500));
  const f = CDPOS[CD.l] + 1 < CDN;
  setTimeout(() => {
    const e = $(".cds");
    e &&
      e.insertAdjacentHTML(
        "beforeend",
        `<div class="unend"><section class="glass play"><h2>Dessin ${CDPOS[CD.l] + 1}</h2><p class="note" style="margin:0 0 4px">Terminé !</p><p class="unrw">+${a} 🫧</p><div class="chrow">${f ? `<button class="btn" data-a="cdLv" data-v="${CDORD[CDPOS[CD.l] + 1]}">Dessin suivant</button>` : ""}<button class="btn alt" data-a="cdBk">Retour</button><button class="hmb" data-a="tab" data-v="games" aria-label="Retour à l’accueil des jeux"><span class="hmi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/></svg></span>Accueil</button></div></section></div>`,
      );
  }, 2200);
}
function cdOpen(e) {
  (st.get("cd:fx1", 0) || ([4, 6, 7, 10].forEach((e) => st.set("cd:sv:" + e, "")), st.set("cd:fx1", 1)),
    (CD.l = Math.max(0, Math.min(CDN - 1, +e || 0))),
    $("#m"),
    (CD.M = cdBuild(CD.l)),
    (CD.f = cdLoad()),
    (CD.ok = !1),
    (CD.hl = null),
    (CD.pt = {}),
    (CD.pz = null),
    (CD.tap = null),
    (CD.fit = 0),
    cdScreen());
}
setTimeout(() =>
  Object.assign(act, {
    cdBk: () => {
      (cdSave(), (CD.M = null), cbHub());
    },
    cdLv: (e) => cdOpen(e),
    cSkip: (e) => {
      const t = $("#skw");
      t &&
        (t.innerHTML = `<span>Passer ce ${"cd" === e ? "dessin" : "pixel art"} pour 1 🫧, sans récompense ? Tu pourras y revenir plus tard.</span><div><button class="skp y" data-a="cSkipY" data-v="${e}">Passer</button><button class="skp" data-a="skipn">Rester</button></div>`);
    },
    cSkipY: (e) => {
      if (!spend(1)) return;
      "cd" === e
        ? (cdSave(),
          CDPOS[CD.l] < CDN - 1
            ? (cdOpen(CDORD[CDPOS[CD.l] + 1]), msg("Dessin passé, sans bulles : tu pourras y revenir."))
            : ((CD.M = null), cbHub()))
        : (cbSave(),
          CB.l < CBN - 1
            ? (act.cbLv(CB.l + 1), msg("Pixel art passé, sans bulles : tu pourras y revenir."))
            : ((CB.G = null), cbHub()));
    },
    cdSel: (e) => cdPick(+e),
    cdZ: (e) => cdZoomAt(CD.z * (+e > 0 ? 1.6 : 0.625), CD.w / 2, CD.h / 2),
    cdDd: () => {
      const e = $("#cddd");
      ((CD.ddOpen = e.classList.toggle("open")),
        e.querySelector(".dd-h").setAttribute("aria-expanded", CD.ddOpen));
    },
    cdHint: () => {
      if (CD.ok || !CD.M) return;
      const e = CD.sel,
        t = CD.M.R.map((e, t) => t).filter((t) => CD.M.R[t].c === e && !CD.f[t]);
      if (!t.length) return;
      if (!UNL()) {
        if (fl < 1) {
          const e = $("#m");
          return void (e && (e.textContent = "Il te manque une bulle pour un indice."));
        }
        ((fl -= 1), st.set("fl", fl));
        const e = $(".chip:not(.hintb)");
        e && (e.textContent = "🫧 " + FLX());
      }
      const a = CD.M.R[t.reduce((e, t) => (CD.M.R[e].n <= CD.M.R[t].n ? e : t))],
        s = Math.max(CD.z, Math.min(14 * CD.fit, 24 / (0.62 * a.fs || 10))),
        n = CD.w / 2 - a.lx * s,
        o = CD.h / 2 - a.ly * s,
        i = CD.z,
        r = CD.ox,
        l = CD.oy,
        c = performance.now();
      CD.hl = new Set(t);
      const d = (e) => {
        const t = Math.min(1, (e - c) / 600),
          a = 1 - Math.pow(1 - t, 3);
        ((CD.z = i + (s - i) * a),
          (CD.ox = r + (n - r) * a),
          (CD.oy = l + (o - l) * a),
          cdClamp(),
          cdDraw(),
          t < 1 && requestAnimationFrame(d));
      };
      (requestAnimationFrame(d),
        setTimeout(() => {
          ((CD.hl = null), cdDraw());
        }, 2200));
    },
  }),
);
const cdPc = {};
function cdPic(e, t) {
  const a = e + ":" + t;
  if (cdPc[a]) return cdPc[a];
  const s = cdScene(e),
    n = cdK(e),
    { pal: o, map: i } = cdPal(s.S, n),
    r = document.createElement("canvas");
  ((r.width = t), (r.height = Math.round((t * CDH) / CDW)));
  const l = r.getContext("2d");
  return (
    l.scale(t / CDW, t / CDW),
    (l.lineJoin = l.lineCap = "round"),
    s.A.forEach((e) => {
      const t = new Path2D(e.d);
      e.ln
        ? ((l.strokeStyle = "rgba(40,36,60,.45)"), (l.lineWidth = e.w), l.stroke(t))
        : ((l.fillStyle = o[i[e.c] - 1]), l.fill(t));
    }),
    (cdPc[a] = r.toDataURL("image/jpeg", 0.9))
  );
}
function cdAlbum() {
  (cbActs(), (cur = "colorie"), nv("games"), theme("colorie"));
  const e = [...st.get("cd:d", [])].sort((e, t) => CDPOS[e] - CDPOS[t]);
  ((app.innerHTML = `<div class="top stk"><button class="back" data-a="cdAlbBk">‹ Retour</button><div class="tr"><div class="chip">🫧 ${FLX()}</div></div></div><section class="glass story pt-colorie"><i>🖼️</i><h2>Album photo</h2><p>${e.length ? `${e.length} sur ${CDN} dessins terminés. Touche un dessin pour le voir en grand.` : "Tes dessins terminés apparaîtront ici."}</p></section>${e.length ? `<div class="alb">${e.map((e) => `<button class="albi" data-a="cdAlbV" data-v="${e}" aria-label="Dessin ${CDPOS[e] + 1}"><img alt="" src="${cdPic(e, 200)}"><span>Dessin ${CDPOS[e] + 1}</span></button>`).join("")}</div>` : ""}`),
    window.scrollTo(0, 0));
}
function cdAlbV(e) {
  e = +e;
  const t = [...st.get("cd:d", [])].sort((e, t) => CDPOS[e] - CDPOS[t]),
    a = t.indexOf(e);
  if (a < 0) return;
  let s = $("#albv");
  (s ||
    ((s = document.createElement("div")),
    (s.id = "albv"),
    (s.className = "albv"),
    s.setAttribute("role", "dialog"),
    s.setAttribute("aria-label", "Dessin en grand"),
    app.appendChild(s)),
    (s.innerHTML = `<img alt="Dessin ${CDPOS[e] + 1}" src="${cdPic(e, 640)}"><b>Dessin ${CDPOS[e] + 1}</b><div class="chrow">${a > 0 ? `<button class="btn alt" data-a="cdAlbV" data-v="${t[a - 1]}" aria-label="Dessin précédent">‹</button>` : ""}${a < t.length - 1 ? `<button class="btn alt" data-a="cdAlbV" data-v="${t[a + 1]}" aria-label="Dessin suivant">›</button>` : ""}<button class="btn" data-a="cdAlbX">Fermer</button></div>`));
}
