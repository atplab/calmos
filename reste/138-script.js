(function () {
  try {
    if (
      typeof PEF === "undefined" ||
      typeof FSH === "undefined" ||
      !FSH.pf ||
      PEF.some(function (x) {
        return x.id === "a01";
      })
    )
      return;
    var L = [
      {
        "id": "a01",
        "r": "c",
        "n": "Mousseur",
        "b": "#8a9bb0",
        "c2": "#d8e4d0",
        "c1": "#5a7a3a",
        "f": "#d8e8f0",
        "pat": ["dk", "sh"],
        "sz": 0.85,
        "bl": 21,
        "o": 10,
        "dr": "low",
        "tl": "fork",
      },
      {
        "id": "a02",
        "r": "c",
        "n": "Fifi",
        "b": "#e8dc8a",
        "c2": "#fff6c8",
        "c1": "#d8a020",
        "f": "#f0e6a0",
        "pat": ["h", "sh"],
        "sz": 0.7,
        "bl": 17,
        "o": 8,
        "dr": "low",
        "tl": "fork",
      },
      {
        "id": "a03",
        "r": "c",
        "n": "Fifette",
        "b": "#d8c8a0",
        "c2": "#f0e6cc",
        "c1": "#7a5a3a",
        "f": "#c8b088",
        "pat": ["sp", "sh"],
        "sz": 0.9,
        "bl": 17,
        "o": 17,
        "dr": "low",
        "tl": "round",
        "sp": "#7a5a3a",
      },
      {
        "id": "a04",
        "r": "c",
        "n": "Olivia",
        "b": "#8a9a4a",
        "c2": "#d8d8a0",
        "c1": "#3a4a1a",
        "f": "#e88a3a",
        "pat": ["v", "sh"],
        "sz": 0.9,
        "bl": 24,
        "o": 12,
        "dr": "back",
        "tl": "fork",
      },
      {
        "id": "a05",
        "r": "c",
        "n": "Fifo",
        "b": "#7a8aa0",
        "c2": "#f4f8ff",
        "c1": "#e03a3a",
        "f": "#c0ccd8",
        "pat": ["mk", "sh"],
        "sz": 0.9,
        "bl": 22,
        "o": 11,
        "dr": "low",
        "tl": "fork",
      },
      {
        "id": "a06",
        "r": "c",
        "n": "Fifille",
        "b": "#f4c8d4",
        "c2": "#fff0f4",
        "c1": "#e89ab0",
        "f": "#f8d8e4",
        "pat": ["sh"],
        "sz": 0.8,
        "bl": 20,
        "o": 10,
        "dr": "low",
        "tl": "round",
      },
      {
        "id": "a07",
        "r": "c",
        "n": "Cui Vereur",
        "b": "#a8683a",
        "c2": "#e0b888",
        "c1": "#3a7a4a",
        "f": "#8a5a2a",
        "pat": ["sc", "sh"],
        "sz": 0.9,
        "bl": 23,
        "o": 12,
        "dr": "low",
        "tl": "fork",
        "wh": 2,
        "wl": 5,
      },
      {
        "id": "a08",
        "r": "c",
        "n": "Lavo ando",
        "b": "#a8a0c0",
        "c2": "#e8e4f4",
        "c1": "#6a6090",
        "f": "#d8d0f0",
        "pat": ["sh"],
        "sz": 0.9,
        "bl": 22,
        "o": 11,
        "dr": "low",
        "tl": "lun",
        "ad": 1,
        "adc": "#ffffff",
      },
      {
        "id": "a09",
        "r": "c",
        "n": "Pico blanco",
        "b": "#4a5a78",
        "c2": "#a8b8d0",
        "c1": "#2a3a58",
        "f": "#6a7a98",
        "pat": ["sp", "sh"],
        "sz": 0.85,
        "bl": 18,
        "o": 15,
        "dr": "two",
        "tl": "round",
        "sp": "#ffffff",
      },
      {
        "id": "a10",
        "r": "u",
        "n": "Orange",
        "b": "#e89a3a",
        "c2": "#ffd890",
        "c1": "#5a3a1a",
        "f": "#f0a848",
        "pat": ["dk", "sh"],
        "sz": 1.05,
        "bl": 24,
        "o": 13,
        "dr": "sail",
        "tl": "veil",
      },
      {
        "id": "a11",
        "r": "u",
        "n": "Emerauld ranch",
        "b": "#2ab87a",
        "c2": "#c0f0d8",
        "c1": "#0a2a1a",
        "f": "#58d89a",
        "pat": ["LS", "sh"],
        "sz": 1.05,
        "bl": 24,
        "o": 12,
        "dr": "low",
        "tl": "veil",
      },
      {
        "id": "a12",
        "r": "u",
        "n": "Moff fler",
        "b": "#b0a0d0",
        "c2": "#e8e0f8",
        "c1": "#2a2a6a",
        "f": "#2a3a8a",
        "pat": ["dk", "sh"],
        "sz": 1.05,
        "bl": 26,
        "o": 12,
        "dr": "low",
        "tl": "fork",
        "bo": 1.1,
      },
      {
        "id": "a13",
        "r": "u",
        "n": "Cramdoise",
        "b": "#f0e4c8",
        "c2": "#fff8e8",
        "c1": "#c0602a",
        "f": "#e8b080",
        "pat": ["rs", "sh"],
        "sz": 1.05,
        "bl": 22,
        "o": 15,
        "dr": "low",
        "tl": "fork",
        "sp": "#c0602a",
        "bo": 1.15,
      },
      {
        "id": "a14",
        "r": "u",
        "n": "Citronelle",
        "b": "#2ac8d0",
        "c2": "#c8f4f0",
        "c1": "#0a6a70",
        "f": "#f4e04a",
        "pat": ["sh"],
        "sz": 1.05,
        "bl": 24,
        "o": 11,
        "dr": "low",
        "tl": "fork",
        "sn": 4,
      },
      {
        "id": "a15",
        "r": "u",
        "n": "Perlement",
        "b": "#c8c0cc",
        "c2": "#f8eef0",
        "c1": "#a07888",
        "f": "#e8c0cc",
        "pat": ["sh"],
        "sz": 1.05,
        "bl": 23,
        "o": 13,
        "dr": "low",
        "tl": "fork",
        "an": "long",
        "pr": 8,
        "gl": "#ffd8e8",
      },
      {
        "id": "a16",
        "r": "u",
        "n": "Novellob",
        "b": "#1a1a22",
        "c2": "#4a4a5a",
        "c1": "#d8283a",
        "f": "#d8283a",
        "pat": ["sh"],
        "sz": 1.05,
        "bl": 24,
        "o": 12,
        "dr": "long",
        "tl": "fork",
        "df": "#d8283a",
      },
      {
        "id": "a17",
        "r": "u",
        "n": "Zigui",
        "b": "#c8803a",
        "c2": "#f0d0a0",
        "c1": "#4a2a10",
        "f": "#a86a30",
        "pat": ["tg", "sh"],
        "sz": 1.05,
        "bl": 22,
        "o": 12,
        "dr": "low",
        "tl": "fork",
        "wh": 2,
        "wl": 6,
      },
      {
        "id": "a18",
        "r": "u",
        "n": "Sonde Verte",
        "b": "#b8d88a",
        "c2": "#f0f8d0",
        "c1": "#6a9a3a",
        "f": "#f0a8b8",
        "pat": ["sc", "sh"],
        "sz": 1.05,
        "bl": 21,
        "o": 11,
        "dr": "low",
        "tl": "round",
      },
      {
        "id": "a19",
        "r": "r",
        "n": "Reflet scieur",
        "b": "#4a1a7a",
        "c2": "#c070d8",
        "c1": "#e03ac0",
        "f": "#8a3ad0",
        "pat": ["sc", "sh"],
        "sz": 1.2,
        "bl": 26,
        "o": 13,
        "dr": "spine",
        "tl": "fork",
        "gl": "#d050e0",
      },
      {
        "id": "a20",
        "r": "r",
        "n": "Voiliage",
        "b": "#f0eef4",
        "c2": "#ffffff",
        "c1": "#d0d0e0",
        "f": "#ff6a5a",
        "pat": ["sc", "sh"],
        "sz": 1.2,
        "bl": 27,
        "o": 12,
        "dr": "sail",
        "tl": "veil",
        "df": "#ff6a5a",
      },
      {
        "id": "a21",
        "r": "r",
        "n": "Longue mâchoire",
        "b": "#2a8a8a",
        "c2": "#c0e8d8",
        "c1": "#0a3a40",
        "f": "#3ac0a0",
        "pat": ["tg", "sh"],
        "sz": 1.2,
        "bl": 29,
        "o": 9,
        "dr": "back",
        "tl": "fork",
        "sn": 9,
        "te": 1,
      },
      {
        "id": "a22",
        "r": "r",
        "n": "Orangé lunaire",
        "b": "#ff8a1a",
        "c2": "#ffd8a0",
        "c1": "#1a1a1a",
        "f": "#ff9a3a",
        "pat": ["hd", "sh"],
        "sz": 1.2,
        "bl": 25,
        "o": 14,
        "dr": "low",
        "tl": "lun",
      },
      {
        "id": "a23",
        "r": "r",
        "n": "Moustacho",
        "b": "#c8ccd4",
        "c2": "#f4f4f8",
        "c1": "#d8a830",
        "f": "#e0c060",
        "pat": ["sc", "sh"],
        "sz": 1.2,
        "bl": 27,
        "o": 15,
        "dr": "low",
        "tl": "fork",
        "wh": 4,
        "wl": 9,
        "gl": "#ffd860",
      },
      {
        "id": "a24",
        "r": "r",
        "n": "Glacier des mers",
        "b": "#a8d8f0",
        "c2": "#f0fbff",
        "c1": "#5a9ad0",
        "f": "#ffffff",
        "pat": ["sc", "sh"],
        "sz": 1.2,
        "bl": 26,
        "o": 12,
        "dr": "sail",
        "tl": "veil",
        "tr": 15,
        "gl": "#bfe8ff",
      },
      {
        "id": "a25",
        "r": "e",
        "n": "Nuit des pacifiques",
        "b": "#0e1a4a",
        "c2": "#2a3a8a",
        "c1": "#6a8aff",
        "f": "#2a3a9a",
        "pat": ["sp", "sh"],
        "sz": 1.4,
        "bl": 29,
        "o": 14,
        "dr": "sail",
        "tl": "veil",
        "tr": 15,
        "sp": "#fff6c0",
        "gl": "#6a8aff",
        "st": "#ffffff",
      },
      {
        "id": "a26",
        "r": "e",
        "n": "Cuivre roseté",
        "b": "#d88a6a",
        "c2": "#ffd8c0",
        "c1": "#a85a4a",
        "f": "#6affd0",
        "pat": ["sc", "sh"],
        "sz": 1.4,
        "bl": 26,
        "o": 13,
        "dr": "sail",
        "tl": "veil",
        "tr": 15,
        "gl": "#ff9ac0",
        "st": "#ffffff",
      },
      {
        "id": "a27",
        "r": "e",
        "n": "Luminose",
        "b": "#e8a028",
        "c2": "#fff0b0",
        "c1": "#8a4a10",
        "f": "#ffd870",
        "pat": ["sc", "sh"],
        "sz": 1.4,
        "bl": 25,
        "o": 15,
        "dr": "sail",
        "tl": "veil",
        "tr": 15,
        "gl": "#ffc050",
        "lu": "#fff0a0",
      },
      {
        "id": "a28",
        "r": "e",
        "n": "Pin des marais",
        "b": "#1a4a32",
        "c2": "#6a9a7a",
        "c1": "#2a6a4a",
        "f": "#2a6a4a",
        "pat": ["sp", "sh"],
        "sz": 1.4,
        "bl": 27,
        "o": 13,
        "dr": "spine",
        "tl": "round",
        "sp": "#d8e8f0",
        "mn": "#8affd0",
        "gl": "#4affb0",
      },
      {
        "id": "a29",
        "r": "u",
        "n": "Argentine lilas",
        "b": "#c8c0e0",
        "c2": "#f4f0ff",
        "c1": "#e8b848",
        "f": "#f0a8d0",
        "pat": ["h", "sh"],
        "sz": 1.05,
        "bl": 26,
        "o": 12,
        "dr": "low",
        "tl": "lun",
      },
      {
        "id": "xn15",
        "r": "c",
        "n": "Bouboule",
        "b": "#e8b838",
        "c2": "#fff0b0",
        "c1": "#d8283a",
        "f": "#d8283a",
        "pat": ["sc", "sh"],
        "sz": 0.9,
        "bl": 17,
        "o": 17,
        "dr": "low",
        "tl": "round",
        "st": "#ffffff",
        "x": 1,
      },
      {
        "id": "xn16",
        "r": "c",
        "n": "Enneigeur",
        "b": "#f4f8ff",
        "c2": "#9ab0c8",
        "c1": "#c8d8ec",
        "f": "#b8c8dc",
        "pat": ["sh"],
        "sz": 0.9,
        "bl": 20,
        "o": 11,
        "dr": "low",
        "tl": "fork",
        "x": 1,
      },
      {
        "id": "xn17",
        "r": "c",
        "n": "Guirlandise",
        "b": "#1a2a4a",
        "c2": "#2a4a7a",
        "c1": "#ff5a7a",
        "f": "#4aa8ff",
        "pat": ["sp", "rs", "sh"],
        "sz": 0.75,
        "bl": 18,
        "o": 9,
        "dr": "low",
        "tl": "fork",
        "sp": "#ffd24a",
        "gl": "#ffe08a",
        "st": "#ffffff",
        "x": 1,
      },
      {
        "id": "xn18",
        "r": "c",
        "n": "Guillaume",
        "b": "#b8e0a8",
        "c2": "#f0fff0",
        "c1": "#4a8a4a",
        "f": "#7ac07a",
        "pat": ["sp", "sh"],
        "sz": 0.9,
        "bl": 21,
        "o": 11,
        "dr": "low",
        "tl": "fork",
        "sp": "#ffffff",
        "x": 1,
      },
      {
        "id": "xn19",
        "r": "c",
        "n": "Chococrème",
        "b": "#f0dcb0",
        "c2": "#4a2a14",
        "c1": "#3a1e0e",
        "f": "#6a3a1a",
        "pat": ["sc", "sh"],
        "sz": 0.9,
        "bl": 22,
        "o": 12,
        "dr": "low",
        "tl": "fork",
        "x": 1,
      },
      {
        "id": "xn20",
        "r": "c",
        "n": "Emballé",
        "b": "#d0d8e4",
        "c2": "#f4f8ff",
        "c1": "#e8b830",
        "f": "#e8b830",
        "pat": ["H", "mk", "sh"],
        "sz": 0.9,
        "bl": 21,
        "o": 12,
        "dr": "low",
        "tl": "fork",
        "x": 1,
      },
      {
        "id": "xn21",
        "r": "c",
        "n": "Red Velvet",
        "b": "#a81830",
        "c2": "#d85a6a",
        "c1": "#ffffff",
        "f": "#701020",
        "pat": ["mk", "sh"],
        "sz": 0.9,
        "bl": 21,
        "o": 12,
        "dr": "low",
        "tl": "fork",
        "x": 1,
      },
      {
        "id": "xn22",
        "r": "u",
        "n": "Rudolphe",
        "b": "#8a5a30",
        "c2": "#d8b080",
        "c1": "#5a3418",
        "f": "#a8703a",
        "pat": ["sh"],
        "sz": 1.05,
        "bl": 24,
        "o": 13,
        "dr": "low",
        "tl": "fork",
        "mn": "#6a4220",
        "lu": "#ff3030",
        "gl": "#ff4a4a",
        "x": 1,
      },
      {
        "id": "xn23",
        "r": "u",
        "n": "Au bûcher",
        "b": "#7a4a28",
        "c2": "#c89a68",
        "c1": "#f0dcb8",
        "f": "#6a3a1a",
        "pat": ["LS", "sc"],
        "sz": 1.05,
        "bl": 25,
        "o": 13,
        "dr": "long",
        "tl": "fork",
        "x": 1,
      },
      {
        "id": "xn24",
        "r": "u",
        "n": "Glaçonneux",
        "b": "#a8d8f4",
        "c2": "#e8f8ff",
        "c1": "#6aa8e0",
        "f": "#d8f0ff",
        "pat": ["tg", "sh"],
        "sz": 1.05,
        "bl": 23,
        "o": 12,
        "dr": "low",
        "tl": "fork",
        "gl": "#bfe8ff",
        "st": "#ffffff",
        "x": 1,
      },
      {
        "id": "xn25",
        "r": "u",
        "n": "Startop",
        "b": "#ffd23a",
        "c2": "#fff4b0",
        "c1": "#d89a10",
        "f": "#ffe27a",
        "pat": ["sh"],
        "sz": 1.05,
        "bl": 21,
        "o": 14,
        "dr": "spine",
        "tl": "fork",
        "gl": "#ffd860",
        "st": "#ffffff",
        "x": 1,
      },
      {
        "id": "xn26",
        "r": "u",
        "n": "Pompon",
        "b": "#f0f4f8",
        "c2": "#d8e0ec",
        "c1": "#a0b0c8",
        "f": "#d83040",
        "pat": ["sc", "sh"],
        "sz": 1.05,
        "bl": 22,
        "o": 12,
        "dr": "low",
        "tl": "fork",
        "mn": "#e83040",
        "x": 1,
      },
      {
        "id": "xn27",
        "r": "u",
        "n": "Tricota",
        "b": "#d83040",
        "c2": "#ffffff",
        "c1": "#ffffff",
        "f": "#ffffff",
        "pat": ["v", "sh"],
        "sz": 1.05,
        "bl": 23,
        "o": 13,
        "dr": "low",
        "tl": "fork",
        "x": 1,
      },
      {
        "id": "xn28",
        "r": "r",
        "n": "Hivreneau",
        "b": "#f4fafe",
        "c2": "#cfe4f8",
        "c1": "#a8c8e8",
        "f": "#e0f0ff",
        "pat": ["rs", "sh"],
        "sz": 1.2,
        "bl": 26,
        "o": 12,
        "dr": "sail",
        "tl": "veil",
        "tr": 15,
        "gl": "#d8f0ff",
        "st": "#ffffff",
        "x": 1,
      },
      {
        "id": "xn29",
        "r": "r",
        "n": "Kado",
        "b": "#d02838",
        "c2": "#e85a5a",
        "c1": "#f4c030",
        "f": "#f4c030",
        "pat": ["H", "mk", "sh"],
        "sz": 1.2,
        "bl": 25,
        "o": 15,
        "dr": "low",
        "tl": "fork",
        "st": "#ffe27a",
        "x": 1,
      },
      {
        "id": "xn30",
        "r": "e",
        "n": "Passin Elno",
        "b": "#1e6a3a",
        "c2": "#5aa860",
        "c1": "#ff5a5a",
        "f": "#2a8a4a",
        "pat": ["sp", "rs", "sh"],
        "sz": 1.4,
        "bl": 28,
        "o": 14,
        "dr": "back",
        "tl": "veil",
        "tr": 15,
        "sp": "#ffd24a",
        "gl": "#ffe08a",
        "st": "#ffd24a",
        "x": 1,
      },
      {
        "id": "xn31",
        "r": "r",
        "n": "Ourson",
        "b": "#f8f0e0",
        "c2": "#e0d4bc",
        "c1": "#2a2a2a",
        "f": "#e8dcc4",
        "pat": ["sh"],
        "sz": 1.2,
        "bl": 25,
        "o": 16,
        "dr": "low",
        "tl": "round",
        "su": 1,
        "x": 1,
      },
      {
        "id": "xn32",
        "r": "r",
        "n": "Luno Lolo",
        "b": "#b8c8e8",
        "c2": "#f0f4ff",
        "c1": "#6a80b8",
        "f": "#d8e4ff",
        "pat": ["rs", "sh"],
        "sz": 1.2,
        "bl": 26,
        "o": 13,
        "dr": "sail",
        "tl": "lun",
        "gl": "#fff6d0",
        "st": "#ffffff",
        "x": 1,
      },
      {
        "id": "xn33",
        "r": "r",
        "n": "Auro Lolo",
        "b": "#fffaf4",
        "c2": "#f0e8ff",
        "c1": "#ffe27a",
        "f": "#ffffff",
        "pat": ["sh"],
        "sz": 1.2,
        "bl": 25,
        "o": 13,
        "dr": "sail",
        "tl": "veil",
        "pr": 11,
        "gl": "#ffe9a0",
        "st": "#ffe27a",
        "lu": "#ffe27a",
        "x": 1,
      },
      {
        "id": "xn34",
        "r": "e",
        "n": "Clochet",
        "b": "#e8b030",
        "c2": "#fff0a0",
        "c1": "#a87810",
        "f": "#f4cc50",
        "pat": ["LS", "sh"],
        "sz": 1.4,
        "bl": 19,
        "o": 19,
        "dr": "low",
        "tl": "lun",
        "gl": "#ffc860",
        "st": "#ffffff",
        "x": 1,
      },
      {
        "id": "xn35",
        "r": "e",
        "n": "Lanre glacé",
        "b": "#bfe8f4",
        "c2": "#e8fffc",
        "c1": "#3ad8c0",
        "f": "#8af0e0",
        "pat": ["rs", "sh"],
        "sz": 1.4,
        "bl": 26,
        "o": 15,
        "dr": "sail",
        "tl": "veil",
        "tr": 15,
        "gl": "#4af0d0",
        "lu": "#aafff0",
        "x": 1,
      },
      {
        "id": "b01",
        "r": "c",
        "n": "Cherry Blossom",
        "b": "#f8c8d8",
        "c2": "#fff0f4",
        "c1": "#e87a9a",
        "f": "#ffd8e4",
        "pat": ["sp", "sh"],
        "sz": 0.85,
        "bl": 21,
        "o": 11,
        "dr": "low",
        "tl": "lun",
        "sp": "#ffffff",
        "wd": 2,
      },
      {
        "id": "b02",
        "r": "c",
        "n": "Bambou",
        "b": "#8ac060",
        "c2": "#e0f0b8",
        "c1": "#3a7a2a",
        "f": "#a8d870",
        "pat": ["v", "sh"],
        "sz": 0.8,
        "bl": 20,
        "o": 9,
        "dr": "low",
        "tl": "fork",
        "wd": 2,
      },
      {
        "id": "b03",
        "r": "c",
        "n": "Kini",
        "b": "#f8f8fc",
        "c2": "#e8ecf8",
        "c1": "#e03030",
        "f": "#ffffff",
        "pat": ["hd", "sh"],
        "sz": 0.9,
        "bl": 22,
        "o": 12,
        "dr": "low",
        "tl": "fork",
        "wd": 2,
      },
      {
        "id": "b04",
        "r": "c",
        "n": "Pierre philosophale",
        "b": "#8a8e86",
        "c2": "#c8ccc0",
        "c1": "#4a7a3a",
        "f": "#6a6e66",
        "pat": ["sp", "dk", "sh"],
        "sz": 0.9,
        "bl": 22,
        "o": 13,
        "dr": "two",
        "tl": "round",
        "sp": "#5a8a4a",
        "wd": 2,
      },
      {
        "id": "b05",
        "r": "c",
        "n": "Oranger pagrille",
        "b": "#f0b848",
        "c2": "#fff0c0",
        "c1": "#c88a20",
        "f": "#ffd070",
        "pat": ["sc", "sh"],
        "sz": 0.85,
        "bl": 20,
        "o": 12,
        "dr": "sail",
        "tl": "veil",
        "tr": 14,
        "wd": 2,
      },
      {
        "id": "b06",
        "r": "c",
        "n": "Laque desmondes",
        "b": "#14141c",
        "c2": "#c8ccd8",
        "c1": "#2a2a3a",
        "f": "#2a2a38",
        "pat": ["sh"],
        "sz": 0.9,
        "bl": 22,
        "o": 11,
        "dr": "low",
        "tl": "fork",
        "wd": 2,
      },
      {
        "id": "b07",
        "r": "c",
        "n": "Esse padrille",
        "b": "#f4e040",
        "c2": "#fffbc0",
        "c1": "#c8a010",
        "f": "#f8e870",
        "pat": ["LS", "sh"],
        "sz": 0.85,
        "bl": 21,
        "o": 11,
        "dr": "low",
        "tl": "fork",
        "wd": 2,
      },
      {
        "id": "b08",
        "r": "c",
        "n": "Ol lanto",
        "b": "#b0602a",
        "c2": "#e0a870",
        "c1": "#5a2a10",
        "f": "#8a4820",
        "pat": ["sc", "sh"],
        "sz": 0.9,
        "bl": 22,
        "o": 12,
        "dr": "low",
        "tl": "fork",
        "wd": 2,
      },
      {
        "id": "b09",
        "r": "c",
        "n": "Koï Shiro Bekko",
        "b": "#f8f4e8",
        "c2": "#ffffff",
        "c1": "#1a1a1a",
        "f": "#f0ece0",
        "pat": ["sp", "sh"],
        "sz": 0.95,
        "bl": 25,
        "o": 13,
        "dr": "low",
        "tl": "veil",
        "sp": "#1a1a1a",
        "wh": 2,
        "wl": 6,
        "wd": 2,
      },
      {
        "id": "b10",
        "r": "u",
        "n": "Koï Kohaku",
        "b": "#d8302a",
        "c2": "#ffffff",
        "c1": "#a01818",
        "f": "#f8f0f0",
        "pat": ["sh"],
        "sz": 1.05,
        "bl": 25,
        "o": 13,
        "dr": "low",
        "tl": "veil",
        "wh": 2,
        "wl": 6,
        "wd": 2,
      },
      {
        "id": "b11",
        "r": "u",
        "n": "Indigo des vagues",
        "b": "#2a3a8a",
        "c2": "#8aa0d8",
        "c1": "#e8f0ff",
        "f": "#4a60b8",
        "pat": ["sc", "rs", "sh"],
        "sz": 1.05,
        "bl": 24,
        "o": 12,
        "dr": "low",
        "tl": "fork",
        "wd": 2,
      },
      {
        "id": "b12",
        "r": "u",
        "n": "Li suket",
        "b": "#16161e",
        "c2": "#4a4a58",
        "c1": "#e82a2a",
        "f": "#2a2a38",
        "pat": ["mk", "sh"],
        "sz": 1.05,
        "bl": 24,
        "o": 12,
        "dr": "low",
        "tl": "fork",
        "wd": 2,
      },
      {
        "id": "b13",
        "r": "u",
        "n": "Ja Vertu",
        "b": "#3aa878",
        "c2": "#c0f0d8",
        "c1": "#146a48",
        "f": "#70d8a8",
        "pat": ["sc", "sh"],
        "sz": 1.05,
        "bl": 24,
        "o": 12,
        "dr": "low",
        "tl": "veil",
        "tr": 16,
        "wd": 2,
      },
      {
        "id": "b14",
        "r": "u",
        "n": "Oranda",
        "b": "#ff8a2a",
        "c2": "#ffd0a0",
        "c1": "#c84a10",
        "f": "#ffa850",
        "pat": ["sh", "sc"],
        "sz": 1.0,
        "bl": 19,
        "o": 17,
        "dr": "long",
        "tl": "veil",
        "tr": 15,
        "mn": "#ff6a1a",
        "ey": 4.6,
        "wd": 2,
      },
      {
        "id": "b15",
        "r": "u",
        "n": "Pêche des neiges",
        "b": "#ffb0a0",
        "c2": "#ffffff",
        "c1": "#ff8a78",
        "f": "#ffe4dc",
        "pat": ["sh"],
        "sz": 1.05,
        "bl": 23,
        "o": 12,
        "dr": "low",
        "tl": "veil",
        "wd": 2,
      },
      {
        "id": "b16",
        "r": "u",
        "n": "Silure du Japon",
        "b": "#6a607a",
        "c2": "#a89cb8",
        "c1": "#3a3048",
        "f": "#7a6e8a",
        "pat": ["sp", "sh"],
        "sz": 1.05,
        "bl": 28,
        "o": 11,
        "dr": "low",
        "tl": "round",
        "an": "long",
        "wh": 6,
        "wl": 12,
        "sp": "#4a4058",
        "wd": 2,
      },
      {
        "id": "b17",
        "r": "r",
        "n": "Koï Yamabuki Ogon",
        "b": "#e8b020",
        "c2": "#ffe890",
        "c1": "#a87810",
        "f": "#ffe27a",
        "pat": ["sc", "sh"],
        "sz": 1.2,
        "bl": 26,
        "o": 14,
        "dr": "sail",
        "tl": "veil",
        "tr": 15,
        "wh": 2,
        "wl": 7,
        "gl": "#ffd24a",
        "wd": 2,
      },
      {
        "id": "b18",
        "r": "r",
        "n": "Masque de nô",
        "b": "#f8f6f0",
        "c2": "#e8e4d8",
        "c1": "#d82a2a",
        "f": "#f0ece4",
        "pat": ["hd", "sh"],
        "sz": 1.2,
        "bl": 25,
        "o": 13,
        "dr": "low",
        "tl": "veil",
        "wd": 2,
      },
      {
        "id": "b19",
        "r": "r",
        "n": "Koï Asagi",
        "b": "#5a8ab8",
        "c2": "#f0a070",
        "c1": "#1a3a6a",
        "f": "#f08a50",
        "pat": ["sc", "sh"],
        "sz": 1.2,
        "bl": 26,
        "o": 13,
        "dr": "low",
        "tl": "veil",
        "wh": 2,
        "wl": 7,
        "wd": 2,
      },
      {
        "id": "b20",
        "r": "r",
        "n": "Arowana d’Asie",
        "b": "#c8d0dc",
        "c2": "#f8fcff",
        "c1": "#8a98b0",
        "f": "#d8e0ec",
        "pat": ["sc", "sh"],
        "sz": 1.25,
        "bl": 29,
        "o": 10,
        "dr": "long",
        "tl": "veil",
        "an": "long",
        "wh": 2,
        "wl": 10,
        "gl": "#e8f4ff",
        "wd": 2,
      },
      {
        "id": "b21",
        "r": "r",
        "n": "Ryukin",
        "b": "#ff5a2a",
        "c2": "#ffc0a0",
        "c1": "#c82a10",
        "f": "#ff8a5a",
        "pat": ["sh", "sc"],
        "sz": 1.2,
        "bl": 19,
        "o": 16,
        "dr": "sail",
        "tl": "veil",
        "tr": 16,
        "wd": 2,
      },
      {
        "id": "b22",
        "r": "e",
        "n": "Koï Matsuba",
        "b": "#1a1a20",
        "c2": "#6a5a30",
        "c1": "#e8b830",
        "f": "#8a7a50",
        "pat": ["rs", "sh"],
        "sz": 1.4,
        "bl": 28,
        "o": 14,
        "dr": "sail",
        "tl": "veil",
        "tr": 15,
        "wh": 2,
        "wl": 7,
        "sp": "#ffd860",
        "gl": "#ffd24a",
        "st": "#ffe27a",
        "wd": 2,
      },
      {
        "id": "b23",
        "r": "e",
        "n": "Lu alo",
        "b": "#58c8a0",
        "c2": "#e0fff0",
        "c1": "#2a8a68",
        "f": "#a8f0d0",
        "pat": ["rs", "sh"],
        "sz": 1.4,
        "bl": 19,
        "o": 19,
        "dr": "low",
        "tl": "veil",
        "gl": "#c8ffe0",
        "st": "#ffffff",
        "wd": 2,
      },
    ];
    PEF.forEach(function (f) {
      if (f.id === "koiciel" || f.id === "koidor" || f.id === "carpedragon") f.wd = 2;
      if (f.id === "koiciel") delete f.nw;
    });
    L.forEach(function (o) {
      var x = {};
      for (var k in o) x[k] = o[k];
      x.sh = "pf";
      PEF.push(x);
    });
    PEF.forEach(function (f) {
      if (f.x) f.wd = 3;
    });
    function bg2() {
      var i,
        o = "";
      var cl = "";
      [
        [40, 64, 84],
        [310, 44, 74],
        [170, 112, 96],
        [352, 150, 60],
        [66, 170, 72],
      ].forEach(function (p) {
        cl +=
          '<ellipse cx="' +
          p[0] +
          '" cy="' +
          p[1] +
          '" rx="' +
          p[2] +
          '" ry="9" fill="#ffe2a0" opacity=".26"/><ellipse cx="' +
          (p[0] + p[2] * 0.45) +
          '" cy="' +
          (p[1] + 8) +
          '" rx="' +
          p[2] * 0.7 +
          '" ry="6" fill="#ffe2a0" opacity=".18"/>';
      });
      var sw = "";
      [
        [52, 104],
        [318, 92],
        [200, 40],
      ].forEach(function (p) {
        sw +=
          '<path d="M' +
          p[0] +
          " " +
          p[1] +
          "c8 -12 24 -10 24 2 0 8 -10 9 -13 3M" +
          (p[0] + 24) +
          " " +
          (p[1] + 2) +
          'h30c8 0 8 -10 0 -10" stroke="#ffe8b8" stroke-width="1.8" fill="none" opacity=".5" stroke-linecap="round"/>';
      });
      var pagoda =
        '<g fill="#2a1020"><path d="M56 304Q104 290 152 304Z"/><rect x="92" y="290" width="16" height="12"/><path d="M78 291H122L113 283H87Z"/><rect x="94" y="277" width="12" height="7"/><path d="M84 278H116L109 270H91Z"/><rect x="96" y="265" width="8" height="6"/><path d="M88 266H112L105 258H95Z"/><rect x="99.2" y="244" width="1.6" height="14"/><circle cx="100" cy="243" r="1.8"/><path d="M132 304V284" stroke="#2a1020" stroke-width="3"/><ellipse cx="132" cy="279" rx="12" ry="5"/><ellipse cx="138" cy="272" rx="9" ry="4"/><ellipse cx="127" cy="270" rx="8" ry="4"/></g>';
      var bridge =
        '<path d="M188 306Q232 258 276 306" fill="none" stroke="#b8261e" stroke-width="5"/><path d="M188 301Q232 253 276 301" fill="none" stroke="#e8b030" stroke-width="1.3"/><path d="M200 289V302M214 276V298M232 272V298M250 276V298M264 289V302" stroke="#b8261e" stroke-width="2"/>';
      var br = "";
      [
        [10, 18, 9],
        [34, 34, 7],
        [60, 24, 8],
        [84, 46, 6],
        [20, 62, 7],
        [392, 16, 8],
        [368, 34, 7],
        [340, 22, 8],
        [380, 60, 6],
      ].forEach(function (p, j) {
        br +=
          '<circle cx="' +
          p[0] +
          '" cy="' +
          p[1] +
          '" r="' +
          p[2] +
          '" fill="' +
          (j % 2 ? "#ffb8d0" : "#ffd8e4") +
          '" opacity=".92"/><circle cx="' +
          p[0] +
          '" cy="' +
          p[1] +
          '" r="' +
          p[2] * 0.3 +
          '" fill="#e8688a"/>';
      });
      var pads = "";
      [
        [60, 430],
        [318, 548],
        [150, 632],
        [342, 420],
        [248, 664],
        [40, 566],
      ].forEach(function (p, j) {
        pads +=
          '<ellipse cx="' +
          p[0] +
          '" cy="' +
          p[1] +
          '" rx="17" ry="5" fill="#1e6a50" opacity=".92"/>' +
          (j % 2
            ? '<path d="M' +
              (p[0] - 4) +
              " " +
              (p[1] - 2) +
              "q4 -12 8 0q-4 3 -8 0M" +
              (p[0] + 1) +
              " " +
              (p[1] - 2) +
              'q6 -9 9 0q-5 3 -9 0" fill="#ffb0cc"/><circle cx="' +
              (p[0] + 3) +
              '" cy="' +
              (p[1] - 3) +
              '" r="1.6" fill="#fff0a8"/>'
            : "");
      });
      var mt =
          '<path d="M-10 302L60 250 100 272 170 222 228 270 290 244 350 278 410 252V302Z" fill="#9a3c52" opacity=".85"/><path d="M0 302Q80 272 160 302ZM210 302Q310 270 410 302Z" fill="#4a1a30"/>',
        tor =
          '<g fill="#c82a20"><rect x="322" y="296" width="5" height="40"/><rect x="356" y="296" width="5" height="40"/><path d="M310 292Q341 282 372 292L370 299H312Z"/><rect x="318" y="306" width="48" height="3.4"/></g>',
        sun = '<circle cx="296" cy="210" r="44" fill="#e8402a"/>';
      var refl =
        '<g mask="url(#p2fm)" opacity=".75"><g transform="translate(0,600) scale(1,-1)" filter="url(#p2d)">' +
        mt +
        pagoda +
        bridge +
        tor +
        sun +
        "</g></g>";
      var gl = "";
      for (i = 0; i < 13; i++) {
        var gy = 306 + i * i * 0.55 + i * 7,
          gw = 14 + i * 5 + (i % 3) * 6,
          gx = 296 + ((i * 37) % 23) - 11;
        gl +=
          '<path class="perp" style="animation-delay:' +
          -0.6 * i +
          's" d="M' +
          (gx - gw / 2) +
          " " +
          gy +
          "h" +
          gw +
          '" stroke="#ffe2a0" stroke-opacity="' +
          (0.75 - i * 0.045) +
          '" stroke-width="' +
          (1.6 + i * 0.2) +
          '" stroke-linecap="round"/>';
      }
      var rp2 = "";
      for (i = 0; i < 26; i++) {
        var ry = 312 + Math.pow(i / 26, 1.6) * 380,
          rl = 18 + (ry - 300) * 0.28 + ((i * 13) % 17),
          rx = ((i * 97) % 420) - 10;
        rp2 +=
          '<path class="perp" style="animation-delay:' +
          -0.45 * i +
          's" d="M' +
          rx +
          " " +
          ry.toFixed(1) +
          "h" +
          rl.toFixed(1) +
          '" stroke="#fff0dc" stroke-opacity="' +
          (0.1 + (ry - 300) / 2600).toFixed(2) +
          '" stroke-width="' +
          (0.8 + (ry - 300) / 260).toFixed(1) +
          '" stroke-linecap="round"/>';
      }
      var bam = "";
      [372, 390].forEach(function (x, j) {
        bam +=
          '<rect x="' +
          x +
          '" y="0" width="7" height="' +
          (460 + j * 60) +
          '" fill="#5a9a3a"/><rect x="' +
          (x + 5) +
          '" y="0" width="2" height="' +
          (460 + j * 60) +
          '" fill="#3a6a28" opacity=".5"/>';
        for (var y = 50 + j * 24; y < 440; y += 72)
          bam += '<rect x="' + (x - 1) + '" y="' + y + '" width="9" height="3" rx="1" fill="#2e5a20"/>';
      });
      [
        [110, 368],
        [190, 386],
        [290, 370],
        [380, 388],
      ].forEach(function (p) {
        bam +=
          '<path d="M' +
          p[1] +
          " " +
          p[0] +
          'q-26 -2 -38 12q26 4 38 -12z" fill="#4a8a30"/><path d="M' +
          p[1] +
          " " +
          (p[0] + 4) +
          'q-18 8 -34 4q20 -10 34 -4z" fill="#3a7a28"/>';
      });
      return (
        '<svg class="pebg" viewBox="0 0 400 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="p2s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a1a2e"/><stop offset=".35" stop-color="#b8402e"/><stop offset=".72" stop-color="#f09a4a"/><stop offset="1" stop-color="#ffd890"/></linearGradient><linearGradient id="p2w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0a460"/><stop offset=".07" stop-color="#b8605a"/><stop offset=".22" stop-color="#4e3a5c"/><stop offset=".5" stop-color="#143a4a"/><stop offset="1" stop-color="#04121a"/></linearGradient><radialGradient id="p2m"><stop offset="0" stop-color="#ffe8a8" stop-opacity=".7"/><stop offset="1" stop-color="#ffe8a8" stop-opacity="0"/></radialGradient><filter id="p2d" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.010 0.09" numOctaves="2" seed="4" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="16" xChannelSelector="R" yChannelSelector="G" result="d"/><feGaussianBlur in="d" stdDeviation="1.4"/></filter><linearGradient id="p2fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#000"/></linearGradient><mask id="p2fm" maskUnits="userSpaceOnUse" x="0" y="300" width="400" height="230"><rect x="0" y="300" width="400" height="230" fill="url(#p2fg)"/></mask><pattern id="p2sg" width="36" height="18" patternUnits="userSpaceOnUse"><g fill="none" stroke="#a8f0dc" stroke-width=".9"><circle cx="18" cy="18" r="16"/><circle cx="18" cy="18" r="11"/><circle cx="18" cy="18" r="6"/><circle cx="0" cy="9" r="16"/><circle cx="0" cy="9" r="11"/><circle cx="0" cy="9" r="6"/><circle cx="36" cy="9" r="16"/><circle cx="36" cy="9" r="11"/><circle cx="36" cy="9" r="6"/></g></pattern></defs><rect width="400" height="700" fill="url(#p2s)"/>' +
        cl +
        sw +
        '<circle cx="296" cy="210" r="92" fill="url(#p2m)"/><circle cx="296" cy="210" r="44" fill="#e8402a"/><circle cx="296" cy="210" r="44" fill="none" stroke="#ffd890" stroke-width="2" opacity=".6"/>' +
        mt +
        '<ellipse cx="200" cy="296" rx="260" ry="12" fill="#ffd8a0" opacity=".3"/>' +
        pagoda +
        bridge +
        '<rect x="0" y="300" width="400" height="400" fill="url(#p2w)"/>' +
        refl +
        "" +
        tor +
        "" +
        gl +
        rp2 +
        pads +
        bam +
        '<path d="M-4 14Q36 28 66 56T112 10M404 10Q366 30 338 56" stroke="#3a1c24" stroke-width="5" fill="none" stroke-linecap="round"/>' +
        br +
        "</svg>"
      );
    }
    function pier2() {
      return (
        '<svg class="pepi" viewBox="0 0 150 140" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0h140l10 8v132H0Z" fill="#5a3a26"/>' +
        [18, 58, 98, 134]
          .map(function (e) {
            return (
              '<rect x="' +
              (e - 5) +
              '" y="6" width="10" height="134" fill="#b8261e"/><rect x="' +
              (e - 6) +
              '" y="6" width="12" height="4" fill="#e8b030"/>'
            );
          })
          .join("") +
        [0, 1, 2, 3, 4, 5]
          .map(function (t) {
            return (
              '<path d="M0 ' +
              (18 + 20 * t) +
              'h150" stroke="#2e1a10" stroke-width="2" vector-effect="non-scaling-stroke"/>'
            );
          })
          .join("") +
        '<path d="M0 0h142" stroke="#c82a20" stroke-width="7" stroke-linecap="round" vector-effect="non-scaling-stroke"/><path d="M0 0h142" stroke="#e8b030" stroke-width="1.5" vector-effect="non-scaling-stroke"/></svg><svg class="pelmp" viewBox="0 0 40 70" aria-hidden="true"><circle cx="20" cy="30" r="22" fill="#ff9a3a" opacity=".2"/><path d="M10 70L13 62H27L30 70Z" fill="#7a7a82"/><rect x="17" y="40" width="6" height="22" fill="#8a8a92"/><rect x="11" y="28" width="18" height="12" fill="#6a6a72"/><rect x="15" y="31" width="10" height="7" fill="#ffb84a"/><path d="M6 28L20 16 34 28Z" fill="#8a8a92"/><path d="M6 28H34" stroke="#5a5a62" stroke-width="1.5"/><circle cx="20" cy="14" r="2.6" fill="#9a9aa2"/></svg>'
      );
    }
    function bg3() {
      var i,
        C = ["#ffd24a", "#ff6aa8", "#5ad8ff", "#8aff9a", "#c89aff", "#ff9a5a"];
      var fs = "";
      [
        [110, 120, 46, 0],
        [290, 90, 56, 1],
        [200, 190, 38, 2],
        [60, 230, 30, 3],
        [340, 205, 34, 4],
      ].forEach(function (f) {
        var c = C[f[3] % 6],
          k;
        for (k = 0; k < 14; k++) {
          var an = (k * Math.PI * 2) / 14,
            x1 = f[0] + Math.cos(an) * f[2] * 0.35,
            y1 = f[1] + Math.sin(an) * f[2] * 0.35,
            x2 = f[0] + Math.cos(an) * f[2],
            y2 = f[1] + Math.sin(an) * f[2];
          fs +=
            '<path d="M' +
            x1.toFixed(1) +
            " " +
            y1.toFixed(1) +
            "L" +
            x2.toFixed(1) +
            " " +
            y2.toFixed(1) +
            '" stroke="' +
            c +
            '" stroke-width="1.8" stroke-linecap="round" opacity=".85"/><circle cx="' +
            x2.toFixed(1) +
            '" cy="' +
            y2.toFixed(1) +
            '" r="2.2" fill="' +
            c +
            '"/>';
        }
        fs +=
          '<circle cx="' +
          f[0] +
          '" cy="' +
          f[1] +
          '" r="' +
          f[2] * 0.9 +
          '" fill="' +
          c +
          '" opacity=".09"/>';
      });
      var lan = "";
      [
        [44, 168],
        [336, 150],
        [176, 66],
        [252, 236],
        [128, 214],
        [372, 252],
      ].forEach(function (p) {
        lan +=
          '<circle cx="' +
          p[0] +
          '" cy="' +
          p[1] +
          '" r="20" fill="#ffb040" opacity=".22"/><ellipse cx="' +
          p[0] +
          '" cy="' +
          p[1] +
          '" rx="7" ry="9" fill="#ffb84a"/><path d="M' +
          (p[0] - 5) +
          " " +
          (p[1] - 6) +
          "h10M" +
          (p[0] - 6) +
          " " +
          p[1] +
          'h12" stroke="#c8602a" stroke-width="1"/>';
      });
      var dots = "";
      for (i = 0; i < 22; i++)
        dots +=
          '<circle cx="' +
          (10 + i * 18.4) +
          '" cy="' +
          (296 + (i % 3)) +
          '" r="2.2" fill="' +
          C[i % 6] +
          '"/>';
      var bun = "";
      [
        [-10, 30, 200, 92, 410, 30, 15, 0],
        [-10, 74, 200, 136, 410, 74, 13, 2],
      ].forEach(function (q) {
        bun +=
          '<path d="M' +
          q[0] +
          " " +
          q[1] +
          "Q" +
          q[2] +
          " " +
          q[3] +
          " " +
          q[4] +
          " " +
          q[5] +
          '" stroke="#2a1a30" stroke-width="1.6" fill="none"/>';
        for (var k = 1; k < q[6]; k++) {
          var t = k / q[6],
            x = (1 - t) * (1 - t) * q[0] + 2 * (1 - t) * t * q[2] + t * t * q[4],
            y = (1 - t) * (1 - t) * q[1] + 2 * (1 - t) * t * q[3] + t * t * q[5];
          bun +=
            '<path d="M' +
            (x - 8).toFixed(1) +
            " " +
            y.toFixed(1) +
            "L" +
            (x + 8).toFixed(1) +
            " " +
            y.toFixed(1) +
            "L" +
            x.toFixed(1) +
            " " +
            (y + 16).toFixed(1) +
            'Z" fill="' +
            C[(k + q[7]) % 6] +
            '"/>';
        }
      });
      var tents = "";
      [
        [40, 296],
        [130, 296],
        [270, 296],
        [350, 296],
      ].forEach(function (p, j) {
        tents +=
          '<path d="M' +
          (p[0] - 16) +
          " 300L" +
          p[0] +
          " 280 " +
          (p[0] + 16) +
          ' 300Z" fill="#241446"/><rect x="' +
          (p[0] - 3) +
          '" y="291" width="6" height="9" fill="' +
          C[(j + 1) % 6] +
          '" opacity=".9"/>';
      });
      var refl =
        '<g mask="url(#p3fm)" opacity=".6"><g transform="translate(0,600) scale(1,-1)" filter="url(#p3d)">' +
        fs +
        lan +
        dots +
        tents +
        "</g></g>";
      var boats = "";
      [
        [70, 440],
        [320, 520],
        [150, 604],
        [332, 420],
        [240, 654],
      ].forEach(function (p, j) {
        boats +=
          '<circle cx="' +
          p[0] +
          '" cy="' +
          (p[1] - 4) +
          '" r="15" fill="#ffb040" opacity=".22"/><path d="M' +
          (p[0] - 9) +
          " " +
          p[1] +
          "Q" +
          p[0] +
          " " +
          (p[1] + 7) +
          " " +
          (p[0] + 9) +
          " " +
          p[1] +
          'Z" fill="' +
          C[j % 6] +
          '"/><ellipse cx="' +
          p[0] +
          '" cy="' +
          (p[1] - 5) +
          '" rx="2" ry="4" fill="#ffe27a"/>';
      });
      var gl = "";
      for (i = 0; i < 16; i++) {
        var gx = ((i * 53) % 380) + 10,
          gy = 330 + i * i * 1.3 + i * 8;
        gl +=
          '<path class="perp" style="animation-delay:' +
          -0.5 * i +
          's" d="M' +
          gx +
          " " +
          gy.toFixed(1) +
          "h" +
          (10 + i * 2) +
          '" stroke="' +
          C[i % 6] +
          '" stroke-opacity=".5" stroke-width="' +
          (1.4 + i * 0.1).toFixed(1) +
          '" stroke-linecap="round"/>';
      }
      var st3 = "";
      for (i = 0; i < 26; i++)
        st3 +=
          '<circle cx="' +
          ((83 * i + 17) % 400) +
          '" cy="' +
          ((37 * i + 9) % 230) +
          '" r="' +
          (0.6 + (i % 3) * 0.4) +
          '" fill="#fff" opacity="' +
          (0.25 + (i % 3) * 0.15) +
          '"/>';
      return (
        '<svg class="pebg" viewBox="0 0 400 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="p3s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#14123a"/><stop offset=".5" stop-color="#4a1c66"/><stop offset=".85" stop-color="#d0507e"/><stop offset="1" stop-color="#ffb070"/></linearGradient><linearGradient id="p3w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8607a"/><stop offset=".08" stop-color="#8a3a7a"/><stop offset=".25" stop-color="#3a2a6a"/><stop offset=".55" stop-color="#161a48"/><stop offset="1" stop-color="#070a22"/></linearGradient><filter id="p3d" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.010 0.09" numOctaves="2" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="16" xChannelSelector="R" yChannelSelector="G" result="d"/><feGaussianBlur in="d" stdDeviation="1.4"/></filter><linearGradient id="p3fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#000"/></linearGradient><mask id="p3fm" maskUnits="userSpaceOnUse" x="0" y="300" width="400" height="230"><rect x="0" y="300" width="400" height="230" fill="url(#p3fg)"/></mask></defs><rect width="400" height="700" fill="url(#p3s)"/>' +
        st3 +
        fs +
        lan +
        '<path d="M-10 302Q90 276 190 302T410 300V302Z" fill="#1c1238"/>' +
        tents +
        dots +
        '<rect x="0" y="300" width="400" height="400" fill="url(#p3w)"/>' +
        refl +
        gl +
        boats +
        bun +
        "</svg>"
      );
    }
    function pier3() {
      var C = ["#ffd24a", "#ff6aa8", "#5ad8ff", "#8aff9a", "#c89aff", "#ff9a5a"],
        b = "";
      for (var i = 0; i < 9; i++)
        b += '<rect x="' + (4 + i * 16) + '" y="-2" width="6" height="7" rx="3" fill="' + C[i % 6] + '"/>';
      return (
        '<svg class="pepi" viewBox="0 0 150 140" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0h140l10 8v132H0Z" fill="#5a3a2c"/>' +
        [18, 58, 98, 134]
          .map(function (e) {
            return '<rect x="' + (e - 5) + '" y="6" width="10" height="134" fill="#3a2230"/>';
          })
          .join("") +
        [0, 1, 2, 3, 4, 5]
          .map(function (t) {
            return (
              '<path d="M0 ' +
              (18 + 20 * t) +
              'h150" stroke="#2a1620" stroke-width="2" vector-effect="non-scaling-stroke"/>'
            );
          })
          .join("") +
        '<path d="M0 0h142" stroke="#ffd24a" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke"/>' +
        b +
        '</svg><svg class="pelmp" viewBox="0 0 40 70" aria-hidden="true"><path d="M20 70V14" stroke="#3a2230" stroke-width="3"/><circle cx="20" cy="16" r="22" fill="#ff9ad0" opacity=".22"/><circle cx="20" cy="14" r="5" fill="#ff6aa8"/><circle cx="12" cy="26" r="4" fill="#5ad8ff"/><circle cx="28" cy="26" r="4" fill="#ffd24a"/><circle cx="20" cy="36" r="4" fill="#8aff9a"/></svg>'
      );
    }
    function ttl(w, u) {
      var n = w || 1;
      return (
        '<span class="pewi">' +
        ["🐟", "🌸", "🎉"][n - 1] +
        '</span><span class="pewn">' +
        ["Monde 1", "Monde 2", "Fêtes"][n - 1] +
        "</span><small>▾</small>"
      );
    }
    var _b = peBg;
    peBg = function () {
      return !peXm() && 2 === peWd() ? bg2() : 3 === peWd() ? bg3() : _b();
    };
    var _p = pePlay;
    pePlay = function () {
      var r = _p.apply(this, arguments);
      try {
        var sc = document.getElementById("pesc"),
          tr = document.querySelector("#peg .petr");
        if (!sc || !tr) return r;
        var w = peWd(),
          w2 = 2 === w,
          w3 = 3 === w;
        function chk() {
          if (!st.get("pe:u2n", 0) && peUn()) {
            st.set("pe:u2n", 1);
            setTimeout(function () {
              msg("🌸 Monde 2 débloqué ! Touche le titre « Monde 1 » en haut pour y aller.");
            }, 600);
            var z = document.querySelector("#peg .pet b");
            if (z && z.classList.contains("pewt")) {
              z.classList.add("nw");
              z.innerHTML = ttl(1, !0);
            }
          }
        }
        if (!peXm()) {
          var u = peUn(),
            tt = document.querySelector("#peg .pet b");
          if (tt) {
            tt.className = "pewt" + (u && 1 === w && !st.get("pe:u2s", 0) ? " nw" : "");
            tt.setAttribute("data-a", "peWd");
            tt.setAttribute("role", "button");
            tt.setAttribute("aria-label", "Changer de monde");
            tt.innerHTML = ttl(w, peUn() || peU3());
          }
        }
        try {
          kzMu.style(w3 ? "fe" : w2 ? "p2" : "pe");
        } catch (x) {}
        if (w2) {
          sc.classList.add("pewd2");
          var pg = document.getElementById("peg");
          if (pg) pg.classList.add("pewd2");
          var a = sc.querySelector(".pepi"),
            b = sc.querySelector(".pelmp");
          if (a) {
            a.insertAdjacentHTML("beforebegin", pier2());
            a.remove();
          }
          if (b) b.remove();

          for (var i = 0; i < 12; i++) {
            var e = document.createElement("i");
            e.className = "pepet";
            e.style.left = i * 8 + Math.random() * 6 + "%";
            e.style.animationDuration = 9 + Math.random() * 7 + "s";
            e.style.animationDelay = -Math.random() * 14 + "s";
            sc.appendChild(e);
          }
          setTimeout(function () {
            try {
              msg("🌸 Monde 2 : l’étang aux cerisiers. Touche le bassin pour lancer.");
            } catch (x) {}
          }, 700);
        }
        if (w3) {
          sc.classList.add("pewd3");
          var pg3 = document.getElementById("peg");
          if (pg3) pg3.classList.add("pewd3");
          var a3 = sc.querySelector(".pepi"),
            b3 = sc.querySelector(".pelmp");
          if (a3) {
            a3.insertAdjacentHTML("beforebegin", pier3());
            a3.remove();
          }
          if (b3) b3.remove();
          var CC = ["#ffd24a", "#ff6aa8", "#5ad8ff", "#8aff9a", "#c89aff", "#ff9a5a"];
          for (var j = 0; j < 16; j++) {
            var c3 = document.createElement("i");
            c3.className = "pecf";
            c3.style.background = CC[j % 6];
            c3.style.left = j * 6 + Math.random() * 5 + "%";
            c3.style.animationDuration = 8 + Math.random() * 7 + "s";
            c3.style.animationDelay = -Math.random() * 14 + "s";
            sc.appendChild(c3);
          }
          setTimeout(function () {
            try {
              msg("🎉 Monde des fêtes : les poissons des événements (pour l’instant, Noël).");
            } catch (x) {}
          }, 700);
        }
        var _ok = act.peOk;
        act.peOk = function () {
          _ok && _ok.apply(this, arguments);
          chk();
        };
        act.peWd = function () {
          if (peXm()) return msg("Le mode Noël a son propre monde de pêche.");
          var e = document.getElementById("peov");
          if (!e) return;
          var t = peSn(),
            c = peWd(),
            u2 = peUn(),
            u3 = peXr() || peXm() || peU3(),
            D = [
              [
                1,
                "🐟",
                "Monde 1",
                "Le lac de nuit",
                1,
                function (f) {
                  return !f.x && !f.wd;
                },
              ],
              [
                2,
                "🌸",
                "Monde 2",
                "L’étang aux cerisiers",
                u2,
                function (f) {
                  return 2 === f.wd;
                },
              ],
              [
                3,
                "🎉",
                "Fêtes",
                "Les poissons des événements",
                u3,
                function (f) {
                  return !!f.x;
                },
              ],
            ];
          var q = t.filter(function (i) {
              return PEF.some(function (f) {
                return f.id === i && !f.x && !f.wd;
              });
            }).length,
            lk2 =
              Date.now() < new Date(2026, 10, 28, 10).getTime()
                ? "Samedi 28 nov. à 10 h"
                : "Pêche 40 espèces du monde 1 (" + q + "/40)";
          e.onclick = function (x) {
            x.target === e && e.querySelector(".pewp") && ((e.hidden = !0), (e.innerHTML = ""));
          };
          e.hidden = !1;
          e.innerHTML =
            '<div class="pebag pewp"><div class="pebh"><h2>Choisir un monde</h2><button class="pealb pealx" data-a="peBagX" aria-label="Fermer">✕</button></div>' +
            D.map(function (d) {
              var A = PEF.filter(d[5]),
                g = A.filter(function (f) {
                  return t.includes(f.id);
                }).length;
              return (
                '<button class="pewc w' +
                d[0] +
                (d[0] === c ? " on" : "") +
                (d[4] ? "" : " lk") +
                '" data-a="peWdGo" data-v="' +
                d[0] +
                '"><span class="pewci">' +
                (d[4] ? d[1] : "🔒") +
                '</span><span class="pewct"><b>' +
                d[2] +
                "</b><small>" +
                d[3] +
                "</small><em>" +
                (d[4]
                  ? (d[0] === c ? "Tu es ici · " : "") + g + " / " + A.length + " espèces"
                  : 2 === d[0]
                    ? lk2
                    : "Pas encore disponible") +
                "</em></span></button>"
              );
            }).join("") +
            "</div>";
        };
        act.peWdGo = function (v) {
          var n = +v,
            e = document.getElementById("peov");
          if (2 === n && !peUn())
            return msg(
              "🔒 Monde 2 : " +
                (Date.now() < new Date(2026, 10, 28, 10).getTime()
                  ? "disponible samedi 28 novembre à 10 h."
                  : "pêche 40 espèces du monde 1."),
            );
          if (3 === n && !(peXr() || peXm() || peU3()))
            return msg("🔒 Monde des fêtes : pas encore disponible.");
          if (e) {
            e.hidden = !0;
            e.innerHTML = "";
          }
          if (n === peWd()) return;
          st.set("pe:wd", n);
          2 === n && st.set("pe:u2s", 1);
          pePlay();
        };
        chk();
      } catch (x) {
        try {
          console.error("pe2", x);
        } catch (y) {}
      }
      return r;
    };
  } catch (err) {
    try {
      console.error("pe2", err);
    } catch (e) {}
  }
})();
