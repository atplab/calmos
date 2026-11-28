(function () {
  try {
    if (
      typeof PEF === "undefined" ||
      typeof FSH === "undefined" ||
      !FSH.pf ||
      PEF.some(function (x) {
        return x.id === "wdaniozebre0";
      })
    )
      return;
    var W = [
        {
          "id": "wdaniozebre0",
          "r": "c",
          "n": "Danio zébré",
          "b": "#bd8d6b",
          "c2": "#c3d3df",
          "c1": "#53341d",
          "f": "#cf6c63",
          "sp": "#f0e4db",
          "pat": ["sp", "rs", "sh"],
          "sz": 0.87,
          "bl": 23,
          "o": 18,
          "dr": "low",
          "tl": "fork",
          "w": 0,
        },
        {
          "id": "wbarbeauflamme1",
          "r": "u",
          "n": "Barbeau flamme",
          "b": "#5ec9aa",
          "c2": "#bfd6e3",
          "c1": "#165a46",
          "f": "#57db88",
          "sp": "#f0dbe1",
          "pat": ["sp", "sc", "sh"],
          "sz": 1.04,
          "bl": 22,
          "o": 15,
          "dr": "sail",
          "tl": "veil",
          "w": 1,
          "sn": 2,
          "wh": 4,
          "wl": 6,
        },
        {
          "id": "warowanadargent2",
          "r": "r",
          "n": "Arowana d’argent",
          "b": "#d454d4",
          "c2": "#cdbbe7",
          "c1": "#5f115f",
          "f": "#7fe64c",
          "sp": "#f0dbe2",
          "pat": ["v", "sh"],
          "sz": 1.18,
          "bl": 29,
          "o": 13,
          "dr": "back",
          "tl": "lun",
          "w": 2,
          "ad": 1,
          "adc": "#7fe64c",
          "mn": "#e085b2",
        },
        {
          "id": "wrasboraarlequi3",
          "r": "c",
          "n": "Rasbora arlequin",
          "b": "#a5bd6b",
          "c2": "#cbdfc3",
          "c1": "#43531d",
          "f": "#8bcf63",
          "sp": "#e1dbf0",
          "pat": ["rs", "sp", "sh"],
          "sz": 0.8,
          "bl": 20,
          "o": 10,
          "dr": "long",
          "tl": "round",
          "w": 3,
          "tr": 14,
        },
        {
          "id": "westurgeonetoil4",
          "r": "e",
          "n": "Esturgeon étoilé",
          "b": "#2065c5",
          "c2": "#c4b7ec",
          "c1": "#0a3066",
          "f": "#40c5f2",
          "sp": "#dbe4f0",
          "pat": ["dk", "v", "sh"],
          "sz": 1.31,
          "bl": 29,
          "o": 13,
          "dr": "sail",
          "tl": "fork",
          "w": 4,
          "gl": "#717cf4",
          "st": "#e0e9f5",
        },
        {
          "id": "wneondesruissea5",
          "r": "c",
          "n": "Néon des ruisseaux",
          "b": "#bd6b75",
          "c2": "#dfcbc3",
          "c1": "#531d24",
          "f": "#cf6394",
          "sp": "#f0dbde",
          "pat": ["sa", "LS", "sh"],
          "sz": 0.78,
          "bl": 21,
          "o": 7,
          "dr": "low",
          "tl": "fork",
          "w": 5,
          "sn": 5,
        },
        {
          "id": "wscalaire6",
          "r": "u",
          "n": "Scalaire",
          "b": "#5ec970",
          "c2": "#bfe3d4",
          "c1": "#165a22",
          "f": "#c557db",
          "sp": "#dbf0ec",
          "pat": ["mk", "rs", "sh"],
          "sz": 0.98,
          "bl": 26,
          "o": 15,
          "dr": "back",
          "tl": "fork",
          "w": 6,
        },
        {
          "id": "wguppysauvage7",
          "r": "c",
          "n": "Guppy sauvage",
          "b": "#916bbd",
          "c2": "#dcc3df",
          "c1": "#361d53",
          "f": "#7163cf",
          "sp": "#e6f0db",
          "pat": ["dk"],
          "sz": 0.82,
          "bl": 23,
          "o": 9,
          "dr": "spine",
          "tl": "fork",
          "w": 7,
        },
        {
          "id": "wdiscuspourpre8",
          "r": "r",
          "n": "Discus pourpre",
          "b": "#d4b454",
          "c2": "#e7c2bb",
          "c1": "#5f4c11",
          "f": "#d9e64c",
          "sp": "#dbe0f0",
          "pat": ["mk", "rs"],
          "sz": 1.1,
          "bl": 27,
          "o": 12,
          "dr": "low",
          "tl": "fork",
          "w": 8,
          "te": 1,
        },
        {
          "id": "wplatycorail9",
          "r": "c",
          "n": "Platy corail",
          "b": "#6bb9bd",
          "c2": "#c3dfd0",
          "c1": "#1d5153",
          "f": "#63cfb0",
          "sp": "#dbe1f0",
          "pat": ["rs", "LS"],
          "sz": 0.81,
          "bl": 24,
          "o": 12,
          "dr": "low",
          "tl": "round",
          "w": 9,
        },
        {
          "id": "wcichlideturquo10",
          "r": "u",
          "n": "Cichlidé turquoise",
          "b": "#c95ea6",
          "c2": "#e3bfc8",
          "c1": "#5a1643",
          "f": "#db5783",
          "sp": "#dbf0e2",
          "pat": ["H", "sp", "sh"],
          "sz": 1.0,
          "bl": 27,
          "o": 12,
          "dr": "low",
          "tl": "veil",
          "w": 10,
          "wh": 2,
          "wl": 8,
          "ad": 1,
          "adc": "#db5783",
        },
        {
          "id": "wkillidore11",
          "r": "c",
          "n": "Killi doré",
          "b": "#8abd6b",
          "c2": "#d5c3df",
          "c1": "#31531d",
          "f": "#63cf71",
          "sp": "#e3f0db",
          "pat": ["sc", "dk", "sh"],
          "sz": 0.87,
          "bl": 18,
          "o": 15,
          "dr": "low",
          "tl": "round",
          "w": 11,
        },
        {
          "id": "wpoissonpapillo12",
          "r": "r",
          "n": "Poisson-papillon",
          "b": "#545ed4",
          "c2": "#d5bbe7",
          "c1": "#11175f",
          "f": "#e6a64c",
          "sp": "#dbddf0",
          "pat": ["sc", "rs", "sh"],
          "sz": 1.24,
          "bl": 29,
          "o": 9,
          "dr": "sail",
          "tl": "round",
          "w": 12,
          "wh": 2,
          "wl": 9,
          "ad": 1,
          "adc": "#e6a64c",
        },
        {
          "id": "wcarpelune13",
          "r": "e",
          "n": "Carpe-lune",
          "b": "#c54320",
          "c2": "#ecb7ca",
          "c1": "#661d0a",
          "f": "#f2be40",
          "sp": "#dbebf0",
          "pat": ["H"],
          "sz": 1.35,
          "bl": 22,
          "o": 14,
          "dr": "sail",
          "tl": "lun",
          "w": 13,
          "gl": "#f4b871",
          "st": "#f5e5e0",
          "lu": "#e6f0c2",
          "te": 1,
        },
        {
          "id": "wbarbuscerise14",
          "r": "c",
          "n": "Barbus cerise",
          "b": "#6bbd94",
          "c2": "#dfc3d1",
          "c1": "#1d5338",
          "f": "#63cfcf",
          "sp": "#dbecf0",
          "pat": ["sc", "sh"],
          "sz": 0.77,
          "bl": 20,
          "o": 15,
          "dr": "long",
          "tl": "round",
          "w": 14,
          "tr": 14,
        },
        {
          "id": "wcarpedejade15",
          "r": "u",
          "n": "Carpe de jade",
          "b": "#b35ec9",
          "c2": "#c6bfe3",
          "c1": "#4c165a",
          "f": "#9457db",
          "sp": "#ebdbf0",
          "pat": ["v", "sh"],
          "sz": 0.95,
          "bl": 24,
          "o": 8,
          "dr": "sail",
          "tl": "round",
          "w": 15,
          "wh": 2,
          "wl": 8,
        },
        {
          "id": "wtetracitron16",
          "r": "c",
          "n": "Tétra citron",
          "b": "#b6bd6b",
          "c2": "#d1dfc3",
          "c1": "#4e531d",
          "f": "#637ecf",
          "sp": "#e0f0db",
          "pat": ["sp", "mk", "sh"],
          "sz": 0.95,
          "bl": 22,
          "o": 10,
          "dr": "two",
          "tl": "fork",
          "w": 16,
          "sn": 5,
        },
        {
          "id": "wpoissoncouteau17",
          "r": "r",
          "n": "Poisson-couteau",
          "b": "#54a4d4",
          "c2": "#bbc4e7",
          "c1": "#11425f",
          "f": "#4cdfe6",
          "sp": "#dcdbf0",
          "pat": ["sa"],
          "sz": 1.12,
          "bl": 28,
          "o": 14,
          "dr": "spine",
          "tl": "fork",
          "w": 17,
          "ad": 1,
          "adc": "#4cdfe6",
          "te": 1,
        },
        {
          "id": "wtruitedesneige18",
          "r": "u",
          "n": "Truite des neiges",
          "b": "#c95e82",
          "c2": "#e3cbbf",
          "c1": "#5a162d",
          "f": "#db5757",
          "sp": "#dbf0e9",
          "pat": ["H", "LS", "sh"],
          "sz": 1.0,
          "bl": 26,
          "o": 16,
          "dr": "two",
          "tl": "fork",
          "w": 18,
        },
        {
          "id": "wpoissonangenai19",
          "r": "c",
          "n": "Poisson-ange nain",
          "b": "#6ebd6b",
          "c2": "#c3dfd5",
          "c1": "#1f531d",
          "f": "#63cf83",
          "sp": "#dbf0e8",
          "pat": ["sc", "sh"],
          "sz": 0.93,
          "bl": 25,
          "o": 13,
          "dr": "back",
          "tl": "round",
          "w": 19,
          "tr": 14,
        },
        {
          "id": "wcyprinlacustre20",
          "r": "c",
          "n": "Cyprin lacustre",
          "b": "#806bbd",
          "c2": "#c3ccdf",
          "c1": "#2b1d53",
          "f": "#a263cf",
          "sp": "#ebf0db",
          "pat": ["sc", "dk", "sh"],
          "sz": 0.88,
          "bl": 20,
          "o": 18,
          "dr": "two",
          "tl": "fork",
          "w": 20,
          "sn": 3,
        },
        {
          "id": "wperchesoleil21",
          "r": "u",
          "n": "Perche soleil",
          "b": "#c9995e",
          "c2": "#dce3bf",
          "c1": "#5a3b16",
          "f": "#dbcb57",
          "sp": "#ebf0db",
          "pat": ["tg", "sh"],
          "sz": 1.0,
          "bl": 26,
          "o": 13,
          "dr": "two",
          "tl": "fork",
          "w": 21,
          "ad": 1,
          "adc": "#dbcb57",
        },
        {
          "id": "wmugedulac22",
          "r": "c",
          "n": "Muge du lac",
          "b": "#6bbdaf",
          "c2": "#c3d1df",
          "c1": "#1d534a",
          "f": "#cf6399",
          "sp": "#dbf0ec",
          "pat": ["sc", "sp"],
          "sz": 0.87,
          "bl": 20,
          "o": 12,
          "dr": "back",
          "tl": "round",
          "w": 22,
          "tr": 14,
        },
        {
          "id": "wbrochetmarbre23",
          "r": "r",
          "n": "Brochet marbré",
          "b": "#d454c4",
          "c2": "#e7bbc4",
          "c1": "#5f1155",
          "f": "#e64c85",
          "sp": "#f0dbed",
          "pat": ["h", "sc", "sh"],
          "sz": 1.26,
          "bl": 27,
          "o": 8,
          "dr": "low",
          "tl": "lun",
          "w": 23,
          "ad": 1,
          "adc": "#e64c85",
          "te": 1,
          "sn": 5,
        },
        {
          "id": "wpoissondragond24",
          "r": "e",
          "n": "Poisson-dragon d’ambre",
          "b": "#80c520",
          "c2": "#cdb7ec",
          "c1": "#3f660a",
          "f": "#e2f240",
          "sp": "#e4dbf0",
          "pat": ["sa", "sh"],
          "sz": 1.49,
          "bl": 29,
          "o": 11,
          "dr": "sail",
          "tl": "lun",
          "w": 24,
          "gl": "#92f471",
          "st": "#ecf5e0",
          "mn": "#93ec9a",
        },
        {
          "id": "wpoissonsablier25",
          "r": "c",
          "n": "Poisson-sablier",
          "b": "#6b83bd",
          "c2": "#dfd7c3",
          "c1": "#1d2d53",
          "f": "#7a63cf",
          "sp": "#f0eadb",
          "pat": ["h", "sp", "sh"],
          "sz": 0.92,
          "bl": 19,
          "o": 9,
          "dr": "low",
          "tl": "fork",
          "w": 25,
          "sn": 2,
        },
        {
          "id": "wblackbasstache26",
          "r": "u",
          "n": "Black-bass tacheté",
          "b": "#c95f5e",
          "c2": "#e3cebf",
          "c1": "#5a1716",
          "f": "#db9957",
          "sp": "#f0dbdb",
          "pat": ["LS", "sp", "sh"],
          "sz": 1.05,
          "bl": 28,
          "o": 10,
          "dr": "low",
          "tl": "lun",
          "w": 26,
          "sn": 4,
          "ad": 1,
          "adc": "#db9957",
        },
        {
          "id": "wtachetedesourc27",
          "r": "c",
          "n": "Tacheté de source",
          "b": "#6bbd83",
          "c2": "#c3dfd7",
          "c1": "#1d532d",
          "f": "#67cf63",
          "sp": "#f0dbea",
          "pat": ["mk", "sa"],
          "sz": 0.91,
          "bl": 18,
          "o": 12,
          "dr": "two",
          "tl": "fork",
          "w": 27,
        },
        {
          "id": "wtruitedoree28",
          "r": "r",
          "n": "Truite dorée",
          "b": "#9f54d4",
          "c2": "#bbbbe7",
          "c1": "#3f115f",
          "f": "#d94ce6",
          "sp": "#e4f0db",
          "pat": ["sc", "h", "sh"],
          "sz": 1.2,
          "bl": 24,
          "o": 13,
          "dr": "low",
          "tl": "lun",
          "w": 28,
          "wh": 2,
          "wl": 7,
          "sn": 8,
          "mn": "#e085d8",
        },
        {
          "id": "wpetitcarpillon29",
          "r": "c",
          "n": "Petit carpillon",
          "b": "#bdb36b",
          "c2": "#dfcbc3",
          "c1": "#534d1d",
          "f": "#a6cf63",
          "sp": "#e5f0db",
          "pat": ["sp", "sh"],
          "sz": 0.8,
          "bl": 20,
          "o": 17,
          "dr": "spine",
          "tl": "fork",
          "w": 29,
          "sn": 4,
        },
        {
          "id": "wsandresafran30",
          "r": "u",
          "n": "Sandre safran",
          "b": "#5eb7c9",
          "c2": "#bfe3d4",
          "c1": "#164e5a",
          "f": "#5782db",
          "sp": "#f0dfdb",
          "pat": ["h", "sh"],
          "sz": 0.98,
          "bl": 22,
          "o": 11,
          "dr": "back",
          "tl": "veil",
          "w": 30,
          "wh": 2,
          "wl": 6,
        },
        {
          "id": "wecaillegris31",
          "r": "c",
          "n": "Écaillé gris",
          "b": "#bd6b97",
          "c2": "#dfc7c3",
          "c1": "#531d3a",
          "f": "#cf63c1",
          "sp": "#f0dbe6",
          "pat": ["sc", "h", "sh"],
          "sz": 0.77,
          "bl": 19,
          "o": 12,
          "dr": "back",
          "tl": "lun",
          "w": 31,
        },
        {
          "id": "wsiluredobsidie32",
          "r": "e",
          "n": "Silure d’obsidienne",
          "b": "#49c520",
          "c2": "#e2ecb7",
          "c1": "#21660a",
          "f": "#40f26d",
          "sp": "#e0f0db",
          "pat": ["dk"],
          "sz": 1.38,
          "bl": 22,
          "o": 12,
          "dr": "long",
          "tl": "fork",
          "w": 32,
          "gl": "#71f47d",
          "st": "#e5f5e0",
          "lu": "#c2f0e4",
          "te": 1,
        },
        {
          "id": "wsaumondesglace33",
          "r": "r",
          "n": "Saumon des glaces",
          "b": "#5a54d4",
          "c2": "#bbd3e7",
          "c1": "#14115f",
          "f": "#874ce6",
          "sp": "#eff0db",
          "pat": ["LS", "H", "sh"],
          "sz": 1.13,
          "bl": 29,
          "o": 14,
          "dr": "two",
          "tl": "fork",
          "w": 33,
          "te": 1,
          "sn": 7,
        },
        {
          "id": "wgardondesbrume34",
          "r": "c",
          "n": "Gardon des brumes",
          "b": "#bd876b",
          "c2": "#c3d6df",
          "c1": "#532f1d",
          "f": "#cf6363",
          "sp": "#f0f0db",
          "pat": ["dk", "rs", "sh"],
          "sz": 0.85,
          "bl": 18,
          "o": 18,
          "dr": "back",
          "tl": "lun",
          "w": 34,
          "sn": 4,
        },
        {
          "id": "wpoissonhache35",
          "r": "u",
          "n": "Poisson-hache",
          "b": "#5ec9a2",
          "c2": "#bfe2e3",
          "c1": "#165a41",
          "f": "#57dbd6",
          "sp": "#dbf0e8",
          "pat": ["v", "sp", "sh"],
          "sz": 1.01,
          "bl": 24,
          "o": 16,
          "dr": "back",
          "tl": "fork",
          "w": 35,
          "wh": 4,
          "wl": 8,
          "ad": 1,
          "adc": "#57dbd6",
        },
        {
          "id": "wperchettedoree36",
          "r": "c",
          "n": "Perchette dorée",
          "b": "#b66bbd",
          "c2": "#dfc3d6",
          "c1": "#4f1d53",
          "f": "#a363cf",
          "sp": "#f0dbe4",
          "pat": ["h", "sh"],
          "sz": 0.84,
          "bl": 19,
          "o": 15,
          "dr": "spine",
          "tl": "lun",
          "w": 36,
          "sn": 2,
        },
        {
          "id": "womblepourpre37",
          "r": "u",
          "n": "Omble pourpre",
          "b": "#b3c95e",
          "c2": "#c7bfe3",
          "c1": "#4b5a16",
          "f": "#5767db",
          "sp": "#ebf0db",
          "pat": ["h", "H"],
          "sz": 0.95,
          "bl": 25,
          "o": 9,
          "dr": "sail",
          "tl": "fork",
          "w": 37,
          "wh": 4,
          "wl": 6,
        },
        {
          "id": "wablettedesrose38",
          "r": "c",
          "n": "Ablette des roseaux",
          "b": "#6b93bd",
          "c2": "#dfd1c3",
          "c1": "#1d3853",
          "f": "#cf7663",
          "sp": "#f0e6db",
          "pat": ["mk", "h", "sh"],
          "sz": 0.77,
          "bl": 23,
          "o": 17,
          "dr": "long",
          "tl": "lun",
          "w": 38,
          "sn": 3,
        },
        {
          "id": "wpoissonelephan39",
          "r": "r",
          "n": "Poisson-éléphant",
          "b": "#d4546e",
          "c2": "#e7c4bb",
          "c1": "#5f1121",
          "f": "#4ce693",
          "sp": "#f0dbdf",
          "pat": ["mk", "dk"],
          "sz": 1.29,
          "bl": 27,
          "o": 15,
          "dr": "low",
          "tl": "veil",
          "w": 39,
          "wh": 2,
          "wl": 9,
          "sn": 7,
          "mn": "#e0a085",
          "gl": "#f0758e",
        },
        {
          "id": "wrotenglepourpr40",
          "r": "c",
          "n": "Rotengle pourpre",
          "b": "#6bbd72",
          "c2": "#dfc3dd",
          "c1": "#1d5322",
          "f": "#7dcf63",
          "sp": "#f0dbee",
          "pat": ["tg", "sc"],
          "sz": 0.82,
          "bl": 18,
          "o": 7,
          "dr": "spine",
          "tl": "lun",
          "w": 40,
          "sn": 4,
        },
        {
          "id": "wkoinebuleuse41",
          "r": "e",
          "n": "Koï nébuleuse",
          "b": "#5f20c5",
          "c2": "#e1b7ec",
          "c1": "#2d0a66",
          "f": "#e9f240",
          "sp": "#e8f0db",
          "pat": ["sp", "mk", "sh"],
          "sz": 1.33,
          "bl": 25,
          "o": 13,
          "dr": "spine",
          "tl": "lun",
          "w": 41,
          "gl": "#ce71f4",
          "st": "#e8e0f5",
          "mn": "#ec93e8",
        },
        {
          "id": "wchevesneardois42",
          "r": "c",
          "n": "Chevesne ardoise",
          "b": "#bda26b",
          "c2": "#c3ccdf",
          "c1": "#53411d",
          "f": "#cf8863",
          "sp": "#dbe2f0",
          "pat": ["dk", "sc", "sh"],
          "sz": 0.82,
          "bl": 22,
          "o": 9,
          "dr": "long",
          "tl": "round",
          "w": 42,
        },
        {
          "id": "wtancheemeraude43",
          "r": "u",
          "n": "Tanche émeraude",
          "b": "#5ec9c6",
          "c2": "#bfe3cd",
          "c1": "#165a57",
          "f": "#db5788",
          "sp": "#f0dbdc",
          "pat": ["sc", "sa", "sh"],
          "sz": 0.96,
          "bl": 24,
          "o": 13,
          "dr": "long",
          "tl": "round",
          "w": 43,
        },
        {
          "id": "wsilurealbinos44",
          "r": "r",
          "n": "Silure albinos",
          "b": "#d454b3",
          "c2": "#e7bbbe",
          "c1": "#5f114b",
          "f": "#e64c8b",
          "sp": "#dbf0e1",
          "pat": ["sa", "sh"],
          "sz": 1.14,
          "bl": 26,
          "o": 8,
          "dr": "two",
          "tl": "veil",
          "w": 44,
          "ad": 1,
          "adc": "#e64c8b",
          "te": 1,
        },
        {
          "id": "wlochedesmousse45",
          "r": "c",
          "n": "Loche des mousses",
          "b": "#90bd6b",
          "c2": "#c3dfc9",
          "c1": "#36531d",
          "f": "#70cf63",
          "sp": "#e5f0db",
          "pat": ["h", "sp"],
          "sz": 0.73,
          "bl": 23,
          "o": 9,
          "dr": "spine",
          "tl": "fork",
          "w": 45,
          "sn": 2,
        },
        {
          "id": "wombreargente46",
          "r": "u",
          "n": "Ombre argenté",
          "b": "#5e70c9",
          "c2": "#d1bfe3",
          "c1": "#16215a",
          "f": "#db9a57",
          "sp": "#dbdff0",
          "pat": ["sp", "rs", "sh"],
          "sz": 0.98,
          "bl": 23,
          "o": 14,
          "dr": "back",
          "tl": "lun",
          "w": 46,
          "sn": 3,
          "wh": 4,
          "wl": 9,
        },
        {
          "id": "wepinochemouche47",
          "r": "c",
          "n": "Épinoche mouchetée",
          "b": "#bd766b",
          "c2": "#c3dbdf",
          "c1": "#53241d",
          "f": "#63cfb9",
          "sp": "#f0ecdb",
          "pat": ["mk", "sp"],
          "sz": 0.8,
          "bl": 23,
          "o": 13,
          "dr": "long",
          "tl": "fork",
          "w": 47,
        },
        {
          "id": "wcichlidezebrer48",
          "r": "r",
          "n": "Cichlidé zébré royal",
          "b": "#54d48a",
          "c2": "#e7bbd4",
          "c1": "#115f32",
          "f": "#4ce6c0",
          "sp": "#dbf0e4",
          "pat": ["LS", "sh"],
          "sz": 1.15,
          "bl": 26,
          "o": 10,
          "dr": "two",
          "tl": "round",
          "w": 48,
        },
        {
          "id": "whotuargente49",
          "r": "c",
          "n": "Hotu argenté",
          "b": "#a56bbd",
          "c2": "#c7c3df",
          "c1": "#441d53",
          "f": "#cf63b8",
          "sp": "#f0dbe8",
          "pat": ["h", "rs", "sh"],
          "sz": 0.76,
          "bl": 18,
          "o": 8,
          "dr": "back",
          "tl": "round",
          "w": 49,
          "tr": 14,
        },
        {
          "id": "wpoissonlame50",
          "r": "u",
          "n": "Poisson-lame",
          "b": "#c9c95e",
          "c2": "#d4e3bf",
          "c1": "#595a16",
          "f": "#5782db",
          "sp": "#dbdbf0",
          "pat": ["LS"],
          "sz": 1.09,
          "bl": 22,
          "o": 16,
          "dr": "long",
          "tl": "fork",
          "w": 50,
          "wh": 2,
          "wl": 7,
        },
        {
          "id": "wbremeambree51",
          "r": "c",
          "n": "Brème ambrée",
          "b": "#6ba4bd",
          "c2": "#dfcbc3",
          "c1": "#1d4353",
          "f": "#6379cf",
          "sp": "#f0e1db",
          "pat": ["sp", "sc"],
          "sz": 0.8,
          "bl": 18,
          "o": 18,
          "dr": "two",
          "tl": "round",
          "w": 51,
        },
        {
          "id": "wpoissonaurore52",
          "r": "e",
          "n": "Poisson-aurore",
          "b": "#c52064",
          "c2": "#b7ecd6",
          "c1": "#660a30",
          "f": "#f240c4",
          "sp": "#dbf0e7",
          "pat": ["H", "sh"],
          "sz": 1.45,
          "bl": 28,
          "o": 15,
          "dr": "spine",
          "tl": "veil",
          "w": 52,
          "gl": "#f4717b",
          "st": "#f5e0e9",
          "mn": "#ecaa93",
          "tr": 15,
        },
        {
          "id": "wvairondestourb53",
          "r": "c",
          "n": "Vairon des tourbières",
          "b": "#75bd6b",
          "c2": "#c3dfcb",
          "c1": "#24531d",
          "f": "#94cf63",
          "sp": "#eddbf0",
          "pat": ["rs", "sh"],
          "sz": 0.86,
          "bl": 22,
          "o": 8,
          "dr": "long",
          "tl": "lun",
          "w": 53,
          "sn": 2,
        },
        {
          "id": "wsaumonimperial54",
          "r": "r",
          "n": "Saumon impérial",
          "b": "#6a54d4",
          "c2": "#d5bbe7",
          "c1": "#1e115f",
          "f": "#b44ce6",
          "sp": "#ecdbf0",
          "pat": ["sp", "h", "sh"],
          "sz": 1.27,
          "bl": 27,
          "o": 8,
          "dr": "long",
          "tl": "lun",
          "w": 54,
          "wh": 2,
          "wl": 8,
          "sn": 7,
          "mn": "#c285e0",
        },
        {
          "id": "wcorydorasbronz55",
          "r": "u",
          "n": "Corydoras bronze",
          "b": "#c9905e",
          "c2": "#e3dfbf",
          "c1": "#5a3616",
          "f": "#57cadb",
          "sp": "#edf0db",
          "pat": ["h", "sc"],
          "sz": 1.07,
          "bl": 26,
          "o": 13,
          "dr": "long",
          "tl": "fork",
          "w": 55,
          "ad": 1,
          "adc": "#57cadb",
        },
        {
          "id": "wgoujondessable56",
          "r": "c",
          "n": "Goujon des sables",
          "b": "#6bbda9",
          "c2": "#dfc3ca",
          "c1": "#1d5346",
          "f": "#cf63a1",
          "sp": "#dbe7f0",
          "pat": ["v", "rs", "sh"],
          "sz": 0.93,
          "bl": 19,
          "o": 17,
          "dr": "low",
          "tl": "fork",
          "w": 56,
        },
      ],
      X = [
        {
          "id": "xgardongivre",
          "r": "c",
          "n": "Yfèfret",
          "b": "#dff2ff",
          "c2": "#ffffff",
          "c1": "#9ad0f0",
          "f": "#7ab4e0",
          "pat": ["sc", "sh"],
          "sz": 0.9,
          "bl": 18,
          "o": 11,
          "dr": "low",
          "tl": "fork",
          "x": 1,
          "st": "#ffffff",
        },
        {
          "id": "xperchesapin",
          "r": "c",
          "n": "Mon beau sapin",
          "b": "#2f8a4a",
          "c2": "#d8f0c8",
          "c1": "#144a26",
          "f": "#c8383a",
          "pat": ["v", "sh"],
          "sz": 0.9,
          "bl": 20,
          "o": 12,
          "dr": "back",
          "tl": "fork",
          "x": 1,
        },
        {
          "id": "xabletteflocon",
          "r": "c",
          "n": "Fonfond flocon",
          "b": "#f4f8ff",
          "c2": "#ffffff",
          "c1": "#a8c4e8",
          "f": "#cfe0f8",
          "pat": ["sp", "sh"],
          "sz": 0.9,
          "bl": 21,
          "o": 9,
          "dr": "low",
          "tl": "lun",
          "x": 1,
          "sp": "#9ac4f0",
          "st": "#ffffff",
        },
        {
          "id": "xgoujonpaindepi",
          "r": "c",
          "n": "Bonhomme en pain d’épices",
          "b": "#b8743a",
          "c2": "#f0c890",
          "c1": "#6a3a18",
          "f": "#f0e0c0",
          "pat": ["sp", "sh"],
          "sz": 0.9,
          "bl": 20,
          "o": 10,
          "dr": "two",
          "tl": "round",
          "x": 1,
          "sp": "#fff0d8",
        },
        {
          "id": "xrotenglesucred",
          "r": "c",
          "n": "Mon sucre d’orge",
          "b": "#fff4f4",
          "c2": "#ffffff",
          "c1": "#d8283a",
          "f": "#e8505a",
          "pat": ["LS", "sh"],
          "sz": 0.9,
          "bl": 19,
          "o": 13,
          "dr": "low",
          "tl": "fork",
          "x": 1,
        },
        {
          "id": "xtruitehoux",
          "r": "u",
          "n": "Houhoux",
          "b": "#3a8a4a",
          "c2": "#f0f8e8",
          "c1": "#d83a42",
          "f": "#c8383a",
          "pat": ["sp", "sh"],
          "sz": 1.05,
          "bl": 25,
          "o": 12,
          "dr": "back",
          "tl": "fork",
          "x": 1,
          "sp": "#d83a42",
        },
        {
          "id": "xcarpebonbon",
          "r": "u",
          "n": "Carpe bonbon",
          "b": "#ff8aa8",
          "c2": "#fff0f4",
          "c1": "#e83a68",
          "f": "#ffd0e0",
          "pat": ["LS", "sh"],
          "sz": 1.05,
          "bl": 22,
          "o": 16,
          "dr": "low",
          "tl": "veil",
          "x": 1,
          "tr": 14,
        },
        {
          "id": "xtanchecannelle",
          "r": "u",
          "n": "Sucre à la cannelle",
          "b": "#a8582a",
          "c2": "#e8b888",
          "c1": "#5a2a10",
          "f": "#c8783a",
          "pat": ["h", "sc", "sh"],
          "sz": 1.05,
          "bl": 23,
          "o": 13,
          "dr": "long",
          "tl": "round",
          "x": 1,
          "wh": 2,
          "wl": 7,
        },
        {
          "id": "xsandreetoile",
          "r": "u",
          "n": "Starlight",
          "b": "#4a6aa8",
          "c2": "#e8f0ff",
          "c1": "#16264a",
          "f": "#ffd24a",
          "pat": ["sp", "sh"],
          "sz": 1.05,
          "bl": 26,
          "o": 10,
          "dr": "two",
          "tl": "fork",
          "x": 1,
          "sp": "#ffe27a",
          "st": "#ffe27a",
        },
        {
          "id": "xbrochettrainea",
          "r": "r",
          "n": "Traîneau",
          "b": "#c8283a",
          "c2": "#fff4e8",
          "c1": "#5a0e18",
          "f": "#ffd24a",
          "pat": ["H", "sh"],
          "sz": 1.2,
          "bl": 28,
          "o": 10,
          "dr": "back",
          "tl": "lun",
          "x": 1,
          "te": 1,
          "sn": 8,
          "st": "#ffe27a",
        },
        {
          "id": "xsaumonaurorebo",
          "r": "r",
          "n": "Boréal Express",
          "b": "#2fd1a8",
          "c2": "#e0ffd8",
          "c1": "#1a5a6a",
          "f": "#a86ae8",
          "pat": ["sc", "sh"],
          "sz": 1.2,
          "bl": 27,
          "o": 13,
          "dr": "sail",
          "tl": "veil",
          "x": 1,
          "gl": "#7affd8",
          "st": "#e8ffd8",
          "tr": 15,
        },
        {
          "id": "xomblelutin",
          "r": "r",
          "n": "Lutin",
          "b": "#2a7a4a",
          "c2": "#f8e8c8",
          "c1": "#8a1a24",
          "f": "#d8283a",
          "pat": ["sp", "sh"],
          "sz": 1.2,
          "bl": 24,
          "o": 13,
          "dr": "two",
          "tl": "fork",
          "x": 1,
          "sp": "#fff",
          "mn": "#d8283a",
          "ad": 1,
          "adc": "#d8283a",
        },
        {
          "id": "xesturgeondesne",
          "r": "e",
          "n": "Yéti glacé",
          "b": "#cfe8ff",
          "c2": "#ffffff",
          "c1": "#5a8ac8",
          "f": "#a8d0ff",
          "pat": ["sc", "sh"],
          "sz": 1.4,
          "bl": 29,
          "o": 12,
          "dr": "sail",
          "tl": "veil",
          "x": 1,
          "gl": "#bfe8ff",
          "st": "#ffffff",
          "mn": "#ffffff",
          "tr": 15,
        },
        {
          "id": "xkoiduperenoel",
          "r": "e",
          "n": "HO HO HO",
          "b": "#d8283a",
          "c2": "#ffffff",
          "c1": "#7a0e1a",
          "f": "#ffffff",
          "pat": ["rd", "sc", "sh"],
          "sz": 1.4,
          "bl": 26,
          "o": 16,
          "dr": "long",
          "tl": "veil",
          "x": 1,
          "rc": "#d8283a",
          "gl": "#ff8a6a",
          "st": "#ffe27a",
          "mn": "#ffffff",
          "tr": 15,
          "wh": 2,
          "wl": 8,
        },
      ],
      now = Date.now();
    function add(o) {
      var x = {};
      for (var k in o) x[k] = o[k];
      x.sh = "pf";
      PEF.push(x);
    }
    W.forEach(function (o) {
      if (new Date(2026, 10, 28 + 7 * o.w).getTime() <= now) add(o);
    });
    X.forEach(add);
    try {
      window.gStepNotify = function (f, e) {
        if (f == null || e <= f) return;
        var n = [],
          md = [],
          L = [];
        Object.keys(GSTEP).forEach(function (g) {
          var q = GSTEP[g];
          if (q > f && q <= e) {
            var a = ALL.find(function (x) {
              return x.id === g;
            });
            if (a && !a.soon && !gHid0(g)) ("bulles" === g ? md : n).push(a.n);
          }
        });
        n.length &&
          L.push(
            (n.length > 1 ? "Nouveaux jeux disponibles : " : "Nouveau jeu disponible : ") + n.join(", "),
          );
        md.length && L.push("Nouveau mode de jeu disponible : Protéger Zeni (Garde du Lagon)");
        try {
          f < 10 && e >= 10 && xmasOn() && L.push("Mode Noël disponible");
        } catch (x) {}
        L.length &&
          setTimeout(function () {
            var t = document.getElementById("gtoast");
            t && t.remove();
            t = document.createElement("div");
            t.id = "gtoast";
            t.className = "gtoast";
            t.setAttribute("role", "status");
            t.textContent = "🎉 " + L.join(" · ");
            document.body.appendChild(t);
            setTimeout(function () {
              t.classList.add("out");
              setTimeout(function () {
                t.remove();
              }, 400);
            }, 5200);
          }, 1100);
      };
      window.pexs = function (x, y, W, H) {
        if (!peXm()) return [x, y];
        var Hs = [
            [0.6, 0.58],
            [0.82, 0.66],
            [0.66, 0.79],
          ],
          b = Hs[0],
          d = 1e9;
        Hs.forEach(function (h) {
          var q = Math.hypot(x - h[0] * W, y - h[1] * H);
          if (q < d) {
            d = q;
            b = h;
          }
        });
        return [b[0] * W, b[1] * H];
      };
      window.peHolesX = function () {
        return [
          [60, 58],
          [82, 66],
          [66, 79],
        ]
          .map(function (h) {
            return '<i class="pehl" style="left:' + h[0] + "%;top:" + h[1] + '%"><u></u></i>';
          })
          .join("");
      };
      window.pePierX = function () {
        var g = function (x, y, c, r, w) {
          return (
            '<rect x="' +
            x +
            '" y="' +
            y +
            '" width="' +
            w +
            '" height="' +
            w * 0.8 +
            '" rx="2" fill="' +
            c +
            '"/><rect x="' +
            (x + w / 2 - 1.5) +
            '" y="' +
            y +
            '" width="3" height="' +
            w * 0.8 +
            '" fill="' +
            r +
            '"/><rect x="' +
            x +
            '" y="' +
            (y + w * 0.4 - 1.5) +
            '" width="' +
            w +
            '" height="3" fill="' +
            r +
            '"/><path d="M' +
            (x + w / 2) +
            " " +
            y +
            'q-7 -9 -10 -3 q4 4 10 3 q6 1 10 -3 q-3 -6 -10 3z" fill="' +
            r +
            '"/>'
          );
        };
        return (
          '<svg class="pepi" viewBox="0 0 150 140" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="pxs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".25" stop-color="#e8f2ff"/><stop offset="1" stop-color="#9ab8e0"/></linearGradient></defs><path d="M0 16Q18 4 40 12T92 8Q122 6 138 14Q146 18 150 26V140H0Z" fill="url(#pxs)"/><path d="M0 16Q18 4 40 12T92 8Q122 6 138 14" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg><svg class="pelmp" viewBox="0 0 40 70" aria-hidden="true"><rect x="18" y="58" width="4" height="12" fill="#5a3a20"/><path d="M20 4L4 30H36Z" fill="#1f6a3a"/><path d="M20 20L2 46H38Z" fill="#27803f"/><path d="M20 34L0 62H40Z" fill="#2f9a4a"/><path d="M8 28Q20 36 32 28L20 4Z" fill="#fff" opacity=".8"/><circle class="pext" cx="12" cy="42" r="2.6" fill="#ff4a5a"/><circle class="pext" style="animation-delay:-.7s" cx="27" cy="50" r="2.6" fill="#ffd24a"/><circle class="pext" style="animation-delay:-1.3s" cx="20" cy="32" r="2.6" fill="#6ab8ff"/><circle class="pext" style="animation-delay:-.4s" cx="9" cy="56" r="2.6" fill="#ff8ad8"/><circle class="pext" style="animation-delay:-1s" cx="31" cy="58" r="2.6" fill="#4ae08a"/><path d="M20 -4l2.2 5.5 6 .4-4.6 3.8 1.6 5.8-5.2-3.3-5.2 3.3 1.6-5.8-4.6-3.8 6-.4z" fill="#ffd24a" transform="translate(0 4)"/></svg><svg class="pexg" viewBox="0 0 90 30" aria-hidden="true">' +
          g(2, 12, "#d8283a", "#ffd24a", 18) +
          g(24, 8, "#2f8a4a", "#fff", 22) +
          g(50, 14, "#4a78d8", "#ffd24a", 16) +
          g(70, 10, "#ffd24a", "#d8283a", 16) +
          "</svg>"
        );
      };
      window.peBgXn = function () {
        var C = ["#ff4a5a", "#ffd24a", "#4ae08a", "#6ab8ff", "#ff8ad8"],
          i,
          t,
          x,
          y,
          d = "";
        d +=
          '<svg class="pebg" viewBox="0 0 400 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="pxk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c1040"/><stop offset=".45" stop-color="#3a2a7e"/><stop offset="1" stop-color="#b86a9a"/></linearGradient><linearGradient id="pxi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8efff"/><stop offset=".5" stop-color="#a8d4f0"/><stop offset="1" stop-color="#6aa8d4"/></linearGradient><linearGradient id="pxa" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#6aff9a" stop-opacity="0"/><stop offset=".4" stop-color="#6aff9a" stop-opacity=".3"/><stop offset=".7" stop-color="#ff6a7a" stop-opacity=".25"/><stop offset="1" stop-color="#ff6a7a" stop-opacity="0"/></linearGradient><radialGradient id="pxm"><stop offset="0" stop-color="#fff6d0" stop-opacity=".55"/><stop offset="1" stop-color="#fff6d0" stop-opacity="0"/></radialGradient></defs><rect width="400" height="700" fill="url(#pxk)"/>';
        for (i = 0; i < 50; i++)
          d +=
            '<circle cx="' +
            ((83 * i + 17) % 400) +
            '" cy="' +
            ((47 * i + 11) % 250) +
            '" r="' +
            (0.7 + (i % 3) * 0.5) +
            '" fill="#fff" opacity="' +
            (0.35 + (i % 3) * 0.2) +
            '"/>';
        d +=
          '<path class="peau" d="M-20 120Q80 40 200 100T420 80V150Q300 180 200 160T-20 190Z" fill="url(#pxa)"/><circle cx="300" cy="90" r="74" fill="url(#pxm)"/><circle cx="300" cy="90" r="22" fill="#fff6d0"/>';
        d +=
          '<path d="M0 292L40 232L70 252L120 192L170 252L210 222L260 272L300 212L350 252L400 222V304H0Z" fill="#46468a"/><path d="M120 192L106 212L118 208L126 216L134 206ZM300 212L288 230L300 226L310 232ZM40 232L30 246L40 242L50 248Z" fill="#fff"/>';
        for (i = 0; i < 27; i++) {
          x = 16 * i - 4;
          d +=
            '<path d="M' +
            x +
            " 304L" +
            (x + 8) +
            " " +
            (304 - (24 + ((37 * i) % 22))) +
            "L" +
            (x + 16) +
            ' 304Z" fill="#17402e"/><path d="M' +
            (x + 3) +
            " " +
            (304 - (8 + ((37 * i) % 22)) * 0.5) +
            "L" +
            (x + 8) +
            " " +
            (304 - (24 + ((37 * i) % 22))) +
            "L" +
            (x + 13) +
            " " +
            (304 - (8 + ((37 * i) % 22)) * 0.5) +
            'Z" fill="#fff" opacity=".8"/>';
        }
        d +=
          '<rect x="0" y="300" width="400" height="400" fill="url(#pxi)"/><path d="M0 300Q60 292 120 300T240 298T400 300V312H0Z" fill="#fff"/>';
        d += '<ellipse cx="300" cy="400" rx="46" ry="150" fill="#fff" opacity=".22"/>';
        [
          [40, 340, 120, 372, 200, 360],
          [250, 330, 300, 380, 380, 372],
          [70, 520, 160, 560, 230, 548],
          [300, 600, 340, 640, 400, 630],
          [10, 430, 70, 470, 110, 520],
          [180, 640, 230, 610, 290, 650],
        ].forEach(function (p) {
          d +=
            '<path d="M' +
            p[0] +
            " " +
            p[1] +
            "L" +
            p[2] +
            " " +
            p[3] +
            "L" +
            p[4] +
            " " +
            p[5] +
            '" stroke="#fff" stroke-width="1.4" fill="none" opacity=".7" stroke-linejoin="round"/>';
        });
        for (i = 0; i < 22; i++)
          d +=
            '<ellipse cx="' +
            ((59 * i + 23) % 400) +
            '" cy="' +
            (320 + ((41 * i) % 360)) +
            '" rx="' +
            (5 + (i % 4) * 3) +
            '" ry="' +
            (1.6 + (i % 3)) +
            '" fill="#fff" opacity=".55"/>';
        for (i = 0; i < 16; i++)
          d +=
            '<path class="pext" style="animation-delay:' +
            (i % 5) * -0.5 +
            's" d="M' +
            ((71 * i + 31) % 390) +
            " " +
            (330 + ((53 * i) % 330)) +
            'l3 -3 3 3 -3 3z" fill="#fff"/>';
        d +=
          '<g transform="translate(332 296)"><rect x="-17" y="-22" width="34" height="22" fill="#6a4228"/><path d="M-21 -21L0 -40L21 -21Z" fill="#fff" stroke="#c8d8f0" stroke-width="1"/><rect x="9" y="-40" width="6" height="10" fill="#7a5a48"/><rect x="-11" y="-16" width="8" height="8" fill="#ffd86a"/><rect x="3" y="-16" width="8" height="8" fill="#ffd86a"/><rect x="-3" y="-12" width="6" height="12" fill="#3a2418"/></g>';
        d +=
          '<g transform="translate(96 300)"><circle cy="-8" r="10" fill="#fff"/><circle cy="-22" r="7.5" fill="#fff"/><circle cy="-32" r="5.5" fill="#fff"/><path d="M-6 -36h12l-2 -8h-8z" fill="#222"/><path d="M-5.5 -29q5.5 3 11 0" stroke="#d8283a" stroke-width="2.4" fill="none"/><path d="M0 -32l9 1.5 -9 1.5z" fill="#ff8a2a"/><circle cx="-2" cy="-33" r=".9" fill="#111"/><circle cx="2" cy="-33" r=".9" fill="#111"/></g>';
        d += '<path d="M-10 36Q100 96 200 48T410 52" stroke="#2a4a2a" stroke-width="2" fill="none"/>';
        for (i = 0; i < 22; i++) {
          t = i / 21;
          x = -10 + 420 * t;
          y = 42 + 30 * Math.sin(t * Math.PI * 3.2);
          d +=
            '<circle class="pext" style="animation-delay:' +
            (i % 5) * -0.4 +
            's" cx="' +
            x.toFixed(1) +
            '" cy="' +
            (y + 6).toFixed(1) +
            '" r="4.2" fill="' +
            C[i % 5] +
            '"/>';
        }
        function tree(x, y, s) {
          var o =
            '<g transform="translate(' +
            x +
            " " +
            y +
            ") scale(" +
            s +
            ')"><rect x="-4" y="-6" width="8" height="12" fill="#5a3a20"/>';
          [
            [0, -46, 30, "#1f6a3a"],
            [0, -26, 38, "#27803f"],
            [0, -4, 46, "#2f9a4a"],
          ].forEach(function (l) {
            o +=
              '<path d="M' +
              -l[2] +
              " " +
              (l[1] + l[2] * 0.62) +
              "L0 " +
              (l[1] - l[2] * 0.7) +
              "L" +
              l[2] +
              " " +
              (l[1] + l[2] * 0.62) +
              'Z" fill="' +
              l[3] +
              '"/><path d="M' +
              -l[2] * 0.55 +
              " " +
              (l[1] + l[2] * 0.05) +
              "Q0 " +
              (l[1] + l[2] * 0.25) +
              " " +
              l[2] * 0.55 +
              " " +
              (l[1] + l[2] * 0.05) +
              "L0 " +
              (l[1] - l[2] * 0.7) +
              'Z" fill="#fff" opacity=".85"/>';
          });
          [
            [-14, -8],
            [12, -12],
            [-6, -30],
            [10, -36],
            [0, -52],
            [-18, -20],
          ].forEach(function (b, k) {
            o +=
              '<circle class="pext" style="animation-delay:' +
              k * -0.5 +
              's" cx="' +
              b[0] +
              '" cy="' +
              b[1] +
              '" r="3.4" fill="' +
              C[k % 5] +
              '"/>';
          });
          return o + '<path d="M0 -84l3 8 8 .5-6 5 2 8-7-4.5-7 4.5 2-8-6-5 8-.5z" fill="#ffd24a"/></g>';
        }
        d +=
          tree(30, 318, 0.8) +
          tree(78, 306, 0.5) +
          tree(372, 322, 0.85) +
          tree(236, 300, 0.34) +
          tree(190, 302, 0.28);
        for (i = 0; i < 28; i++)
          d +=
            '<circle class="pexf" style="animation-duration:' +
            (9 + (i % 7) * 2) +
            "s;animation-delay:" +
            i * -1.3 +
            's" cx="' +
            ((i * 47 + 13) % 400) +
            '" cy="-10" r="' +
            (1.4 + (i % 3) * 0.7) +
            '" fill="#fff" opacity=".9"/>';
        return d + "</svg>";
      };
      var _pb = peBg;
      peBg = function () {
        return peXm() ? peBgXn() : _pb();
      };
    } catch (e) {}
    try {
      var _pp = pePlay;
      pePlay = function () {
        var r = _pp.apply(this, arguments);
        try {
          if (peXm())
            setTimeout(function () {
              msg("🎄 Mode Noël : des poissons de Noël à pêcher !");
            }, 700);
        } catch (e) {}
        return r;
      };
    } catch (e) {}
  } catch (err) {
    try {
      console.error("pw", err);
    } catch (e) {}
  }
})();
