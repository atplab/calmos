(function () {
  try {
    if (
      typeof PEF === "undefined" ||
      typeof FSH === "undefined" ||
      PEF.some(function (x) {
        return x.id === "vairon";
      })
    )
      return;
    var A = 44,
      S = 25;
    function mix(h, k) {
      h = h.replace("#", "");
      var r = parseInt(h.substr(0, 2), 16),
        g = parseInt(h.substr(2, 2), 16),
        b = parseInt(h.substr(4, 2), 16),
        t = k < 0 ? 0 : 255,
        p = Math.abs(k);
      return (
        "#" +
        [r, g, b]
          .map(function (c) {
            return ("0" + Math.round(c + (t - c) * p).toString(16)).slice(-2);
          })
          .join("")
      );
    }
    FSH.pf = function (e) {
      var id = "pf" + ++FSN,
        n = e.bl || 24,
        o = e.o || 13,
        sn = e.sn || 0,
        bo = e.bo || 1,
        a = A,
        s = S,
        P = e.pat || [],
        c1 = e.c1 || "#2a2a3a",
        c2 = e.c2 || mix(e.b, 0.5),
        f = e.f,
        b = e.b;
      var tx = a - n + 3,
        tr = Math.min(e.tr || 16, tx - 1),
        th = e.th || o * 0.95 + 2,
        m = "";
      var body =
        "M" +
        (a - n) +
        " " +
        s +
        "C" +
        (a - n) +
        " " +
        (s - 0.5 * o) +
        " " +
        (a - 0.45 * n) +
        " " +
        (s - o) +
        " " +
        a +
        " " +
        (s - o) +
        "C" +
        (a + 0.6 * n) +
        " " +
        (s - o) +
        " " +
        (a + n) +
        " " +
        (s - 0.4 * o) +
        " " +
        (a + n + sn) +
        " " +
        s +
        "C" +
        (a + n) +
        " " +
        (s + 0.45 * o) +
        " " +
        (a + 0.55 * n) +
        " " +
        (s + o * bo) +
        " " +
        a +
        " " +
        (s + o * bo) +
        "C" +
        (a - 0.45 * n) +
        " " +
        (s + o * bo) +
        " " +
        (a - n) +
        " " +
        (s + 0.5 * o) +
        " " +
        (a - n) +
        " " +
        s +
        "Z";
      var gl = e.gl;
      m +=
        "<defs><clipPath id='" +
        id +
        "c'><path d='" +
        body +
        "'/></clipPath><linearGradient id='" +
        id +
        "g' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='" +
        b +
        "'/><stop offset='.55' stop-color='" +
        b +
        "'/><stop offset='1' stop-color='" +
        c2 +
        "'/></linearGradient>" +
        (gl
          ? "<radialGradient id='" +
            id +
            "r'><stop offset='0' stop-color='" +
            gl +
            "' stop-opacity='.55'/><stop offset='1' stop-color='" +
            gl +
            "' stop-opacity='0'/></radialGradient>"
          : "") +
        "</defs>";
      if (gl)
        m +=
          "<ellipse cx='" +
          a +
          "' cy='" +
          s +
          "' rx='" +
          (n + 12) +
          "' ry='" +
          (o + 13) +
          "' fill='url(#" +
          id +
          "r)'/>";
      // tail
      var tl = e.tl || "fork",
        T;
      if (tl === "fork")
        T =
          "M" +
          tx +
          " " +
          s +
          "L" +
          (tx - tr) +
          " " +
          (s - th) +
          "Q" +
          (tx - tr * 0.5) +
          " " +
          s +
          " " +
          (tx - tr) +
          " " +
          (s + th) +
          "Z";
      else if (tl === "round")
        T =
          "M" +
          tx +
          " " +
          (s - 3) +
          "Q" +
          (tx - tr) +
          " " +
          (s - th) +
          " " +
          (tx - tr) +
          " " +
          s +
          "Q" +
          (tx - tr) +
          " " +
          (s + th) +
          " " +
          tx +
          " " +
          (s + 3) +
          "Z";
      else if (tl === "lun")
        T =
          "M" +
          tx +
          " " +
          (s - 3) +
          "Q" +
          (tx - tr * 0.3) +
          " " +
          (s - th * 1.1) +
          " " +
          (tx - tr) +
          " " +
          (s - th * 1.5) +
          "Q" +
          (tx - tr * 0.45) +
          " " +
          s +
          " " +
          (tx - tr) +
          " " +
          (s + th * 1.5) +
          "Q" +
          (tx - tr * 0.3) +
          " " +
          (s + th * 1.1) +
          " " +
          tx +
          " " +
          (s + 3) +
          "Z";
      else if (tl === "veil")
        T =
          "M" +
          tx +
          " " +
          s +
          "C" +
          (tx - tr * 0.3) +
          " " +
          (s - th * 1.5) +
          " " +
          (tx - tr) +
          " " +
          (s - th * 1.3) +
          " " +
          (tx - tr * 1.05) +
          " " +
          (s - th * 0.3) +
          "C" +
          (tx - tr * 0.85) +
          " " +
          s +
          " " +
          (tx - tr * 1.05) +
          " " +
          (s + th * 0.5) +
          " " +
          (tx - tr * 1.05) +
          " " +
          (s + th * 1.2) +
          "C" +
          (tx - tr) +
          " " +
          (s + th * 1.5) +
          " " +
          (tx - tr * 0.3) +
          " " +
          (s + th * 1.3) +
          " " +
          tx +
          " " +
          s +
          "Z";
      else
        T =
          "M" + tx + " " + (s - o * 0.45) + "L" + (tx - tr) + " " + s + "L" + tx + " " + (s + o * 0.45) + "Z";
      m += "<path d='" + T + "' fill='" + f + "'/>";
      if (tl === "fork" || tl === "lun" || tl === "veil")
        m +=
          "<path d='M" +
          tx +
          " " +
          s +
          "L" +
          (tx - tr * 0.85) +
          " " +
          (s - th * 0.5) +
          "M" +
          tx +
          " " +
          s +
          "L" +
          (tx - tr * 0.85) +
          " " +
          (s + th * 0.5) +
          "' stroke='" +
          mix(f, -0.3) +
          "' stroke-width='.7' opacity='.6'/>";
      // dorsal
      var dr = e.dr || "low",
        D = "";
      if (dr === "low")
        D =
          "M" +
          (a - 9) +
          " " +
          (s - o + 3) +
          "Q" +
          a +
          " " +
          (s - o - 9) +
          " " +
          (a + 11) +
          " " +
          (s - o + 3) +
          "Z";
      else if (dr === "long")
        D =
          "M" +
          (a - n * 0.8) +
          " " +
          (s - o * 0.8) +
          "Q" +
          (a - n * 0.2) +
          " " +
          (s - o - 6) +
          " " +
          (a + n * 0.6) +
          " " +
          (s - o * 0.7) +
          "Z";
      else if (dr === "back")
        D =
          "M" +
          (a - n * 0.75) +
          " " +
          (s - o * 0.7) +
          "L" +
          (a - n * 0.55) +
          " " +
          (s - o - 6) +
          "Q" +
          (a - n * 0.3) +
          " " +
          (s - o - 5) +
          " " +
          (a - n * 0.2) +
          " " +
          (s - o + 1) +
          "Z";
      else if (dr === "sail")
        D =
          "M" +
          (a - n * 0.6) +
          " " +
          (s - o + 2) +
          "Q" +
          (a - n * 0.3) +
          " " +
          (s - o - 21) +
          " " +
          (a + n * 0.35) +
          " " +
          (s - o - 15) +
          "Q" +
          (a + n * 0.4) +
          " " +
          (s - o - 6) +
          " " +
          (a + n * 0.5) +
          " " +
          (s - o + 2) +
          "Z";
      else if (dr === "two")
        D =
          "M" +
          (a - 12) +
          " " +
          (s - o + 3) +
          "Q" +
          (a - 6) +
          " " +
          (s - o - 8) +
          " " +
          a +
          " " +
          (s - o + 2) +
          "Q" +
          (a + 5) +
          " " +
          (s - o - 6) +
          " " +
          (a + 13) +
          " " +
          (s - o + 3) +
          "Z";
      else if (dr === "spine") {
        for (var i = 0; i < 6; i++) {
          var x = a - 12 + i * 4.4;
          D +=
            "M" +
            x +
            " " +
            (s - o + 2.5) +
            "L" +
            (x + 2) +
            " " +
            (s - o - 6 - (i % 2 ? 0 : 2)) +
            "L" +
            (x + 4) +
            " " +
            (s - o + 2.5) +
            "Z";
        }
      }
      if (D) m += "<path d='" + D + "' fill='" + (e.df || f) + "'/>";
      if (dr === "sail" && e.dsp)
        for (var j = 0; j < 5; j++)
          m +=
            "<circle cx='" +
            (a - n * 0.4 + j * 5) +
            "' cy='" +
            (s - o - 5 - (j % 2) * 4) +
            "' r='1.3' fill='" +
            e.dsp +
            "'/>";
      if (e.ad)
        m +=
          "<path d='M" +
          (a - n * 0.55) +
          " " +
          (s - o * 0.7) +
          "Q" +
          (a - n * 0.45) +
          " " +
          (s - o - 4) +
          " " +
          (a - n * 0.35) +
          " " +
          (s - o * 0.8) +
          "Z' fill='" +
          (e.adc || f) +
          "'/>";
      // anal / pelvic
      if (e.an === "long")
        m +=
          "<path d='M" +
          (a - n * 0.8) +
          " " +
          (s + o * 0.85) +
          "Q" +
          (a - n * 0.1) +
          " " +
          (s + o + 7) +
          " " +
          (a + n * 0.6) +
          " " +
          (s + o * 0.8) +
          "Z' fill='" +
          f +
          "'/>";
      else if (e.an !== 0)
        m +=
          "<path d='M" +
          (a - 7) +
          " " +
          (s + o - 2) +
          "Q" +
          (a - 1) +
          " " +
          (s + o + 7) +
          " " +
          (a + 8) +
          " " +
          (s + o - 2) +
          "Z' fill='" +
          f +
          "'/>";
      // body
      m += "<path d='" + body + "' fill='url(#" + id + "g)'/><g clip-path='url(#" + id + "c)'>";
      function has(k) {
        return P.indexOf(k) >= 0;
      }
      if (has("dk"))
        m +=
          "<rect x='0' y='" +
          (s - o - 1) +
          "' width='84' height='" +
          o * 0.75 +
          "' fill='" +
          c1 +
          "' opacity='.55'/>";
      if (has("rd"))
        m +=
          "<rect x='0' y='0' width='" +
          (a - 2) +
          "' height='60' fill='" +
          (e.rc || "#d8283a") +
          "' opacity='.8'/>";
      if (has("hd"))
        m += "<rect x='" + (a + n * 0.28) + "' y='0' width='60' height='60' fill='" + c1 + "' opacity='.9'/>";
      if (has("sc")) {
        var q = "";
        for (var r = 0; r < 4; r++)
          for (var k = 0; k < 9; k++) {
            var cx = a - n + 3 + k * ((2 * n) / 8.2) + (r % 2) * 3,
              cy = s - o * 0.7 + r * o * 0.5;
            q += "M" + (cx - 3) + " " + cy + "Q" + cx + " " + (cy + 3.6) + " " + (cx + 3) + " " + cy;
          }
        m +=
          "<path d='" + q + "' stroke='" + mix(b, -0.35) + "' stroke-width='.7' fill='none' opacity='.55'/>";
      }
      if (has("H"))
        m += "<rect x='0' y='" + (s - 2.6) + "' width='84' height='5.2' rx='2.6' fill='" + c1 + "'/>";
      if (has("h"))
        m += "<rect x='0' y='" + (s - 1.4) + "' width='84' height='2.8' rx='1.4' fill='" + c1 + "'/>";
      if (has("LS"))
        for (var l = -2; l <= 2; l++)
          m +=
            "<path d='M" +
            (a - n) +
            " " +
            (s + l * o * 0.32) +
            "H" +
            (a + n) +
            "' stroke='" +
            c1 +
            "' stroke-width='1.1' opacity='.75'/>";
      if (has("v"))
        for (var v = 0; v < 5; v++)
          m +=
            "<rect x='" +
            (a - n * 0.65 + v * n * 0.33) +
            "' y='" +
            (s - o - 1) +
            "' width='3.4' height='" +
            (2 * o + 2) +
            "' fill='" +
            c1 +
            "' opacity='.6'/>";
      if (has("tg"))
        for (var w = 0; w < 6; w++)
          m +=
            "<path d='M" +
            (a - n * 0.7 + w * n * 0.3) +
            " " +
            (s - o) +
            "l5 " +
            2 * o +
            "' stroke='" +
            c1 +
            "' stroke-width='2.2' opacity='.7'/>";
      if (has("sa"))
        for (var u = 0; u < 3; u++)
          m +=
            "<rect x='" +
            (a - n * 0.55 + u * n * 0.5) +
            "' y='" +
            (s - o - 1) +
            "' width='8' height='" +
            o * 0.8 +
            "' rx='3' fill='" +
            c1 +
            "' opacity='.75'/>";
      if (has("mk"))
        m +=
          "<rect x='" +
          (a + n * 0.4) +
          "' y='" +
          (s - o * 0.5) +
          "' width='7' height='" +
          o * 0.5 +
          "' rx='2' fill='" +
          c1 +
          "' opacity='.8'/>";
      if (has("sp")) {
        var pt = [
          [-0.7, -0.25],
          [-0.4, 0.15],
          [-0.15, -0.4],
          [0.05, 0.2],
          [0.2, -0.2],
          [-0.55, 0.45],
          [0.3, 0.45],
          [-0.25, 0.5],
          [0.45, 0],
          [-0.8, 0.1],
        ];
        pt.forEach(function (p, i) {
          m +=
            "<circle cx='" +
            (a + p[0] * n) +
            "' cy='" +
            (s + p[1] * o) +
            "' r='" +
            (1.2 + (i % 3) * 0.4) +
            "' fill='" +
            (e.sp || c1) +
            "' opacity='.9'/>";
        });
      }
      if (has("rs")) {
        var pr = [
          [-0.7, -0.3],
          [-0.35, 0.1],
          [-0.1, -0.4],
          [0.15, 0.15],
          [-0.5, 0.5],
          [0.3, -0.2],
          [-0.2, 0.5],
          [0.45, 0.35],
        ];
        pr.forEach(function (p) {
          m +=
            "<circle cx='" +
            (a + p[0] * n) +
            "' cy='" +
            (s + p[1] * o) +
            "' r='2.6' fill='none' stroke='" +
            c1 +
            "' stroke-width='1.1'/><circle cx='" +
            (a + p[0] * n) +
            "' cy='" +
            (s + p[1] * o) +
            "' r='.9' fill='" +
            (e.sp || "#fff") +
            "'/>";
        });
      }
      if (has("el"))
        m +=
          "<path d='M" +
          (a - n * 0.6) +
          " " +
          (s - 3) +
          "l5 -3 -2 5 5 -3 M" +
          (a - n * 0.05) +
          " " +
          (s + 2) +
          "l5 -3 -2 5 5 -3' stroke='" +
          (e.gl || "#ffe84a") +
          "' stroke-width='1.6' fill='none' stroke-linecap='round' stroke-linejoin='round'/>";
      if (has("sh"))
        m +=
          "<ellipse cx='" +
          a +
          "' cy='" +
          (s - 0.45 * o) +
          "' rx='" +
          0.6 * n +
          "' ry='" +
          0.2 * o +
          "' fill='#fff' opacity='.2'/>";
      m += "</g>";
      // gill
      m +=
        "<path d='M" +
        (a + n * 0.3) +
        " " +
        (s - o * 0.7) +
        "Q" +
        (a + n * 0.18) +
        " " +
        s +
        " " +
        (a + n * 0.3) +
        " " +
        (s + o * 0.7) +
        "' stroke='" +
        mix(b, -0.4) +
        "' stroke-width='1' fill='none' opacity='.55'/>";
      if (e.sw)
        m +=
          "<circle cx='" +
          (a + n * 0.34) +
          "' cy='" +
          (s + o * 0.05) +
          "' r='3.2' fill='" +
          e.sw +
          "' stroke='" +
          (e.swr || "#ff6a3a") +
          "' stroke-width='1.2'/>";
      // pectoral
      var pr_ = e.pr || 6;
      m +=
        "<ellipse cx='" +
        (a + n * 0.12) +
        "' cy='" +
        (s + o * 0.35) +
        "' rx='" +
        pr_ +
        "' ry='" +
        pr_ * 0.45 +
        "' fill='" +
        f +
        "' opacity='.92' transform='rotate(24 " +
        (a + n * 0.12) +
        " " +
        (s + o * 0.35) +
        ")'/>";
      // whiskers/barbels
      if (e.wh) {
        var hx = a + n + sn - 1,
          hy = s + o * 0.28;
        for (var z = 0; z < e.wh; z++) {
          var yy = hy + (z % 2) * 2.4,
            dir = z < e.wh / 2 ? 1 : 0.4;
          m +=
            "<path d='M" +
            hx +
            " " +
            yy +
            "Q" +
            (hx + 5) +
            " " +
            (yy + 4 + z) +
            " " +
            (hx + (e.wl || 7) * dir) +
            " " +
            (yy + (z % 2 ? 9 : 6)) +
            "' stroke='" +
            mix(b, -0.45) +
            "' stroke-width='1' fill='none' stroke-linecap='round'/>";
        }
      }
      // teeth
      if (e.te) {
        var mx = a + n + sn - 2;
        for (var y = 0; y < 4; y++)
          m += "<path d='M" + (mx - y * 2.4) + " " + (s + o * 0.18) + "l1.1 2.6 1.1 -2.6z' fill='#fff'/>";
      }
      // beak / paddle
      if (e.pd)
        m +=
          "<ellipse cx='" +
          (a + n + sn + 2) +
          "' cy='" +
          s +
          "' rx='6.5' ry='4.2' fill='" +
          mix(b, -0.1) +
          "'/>";
      // sucker
      if (e.su)
        m +=
          "<ellipse cx='" +
          (a + n + 1) +
          "' cy='" +
          (s + 1) +
          "' rx='3.1' ry='3.6' fill='" +
          c2 +
          "' stroke='" +
          mix(b, -0.45) +
          "' stroke-width='.8'/><circle cx='" +
          (a + n + 1) +
          "' cy='" +
          (s + 1) +
          "' r='1.3' fill='#3a1a1a'/>";
      // crest/mane
      if (e.mn)
        for (var g = 0; g < 5; g++)
          m +=
            "<path d='M" +
            (a + n * 0.35 - g * 4) +
            " " +
            (s - o + 1) +
            "Q" +
            (a + n * 0.28 - g * 4) +
            " " +
            (s - o - 9 - (g % 2) * 3) +
            " " +
            (a + n * 0.12 - g * 4) +
            " " +
            (s - o - 3) +
            "' stroke='" +
            e.mn +
            "' stroke-width='2' fill='none' stroke-linecap='round'/>";
      // lure
      if (e.lu)
        m +=
          "<path d='M" +
          (a + n * 0.4) +
          " " +
          (s - o + 1) +
          "Q" +
          (a + n * 0.7) +
          " " +
          (s - o - 14) +
          " " +
          (a + n + sn - 2) +
          " " +
          (s - o - 7) +
          "' stroke='" +
          mix(b, 0.3) +
          "' stroke-width='1.4' fill='none'/><circle cx='" +
          (a + n + sn - 2) +
          "' cy='" +
          (s - o - 7) +
          "' r='5.5' fill='url(#" +
          id +
          "r)'/><circle cx='" +
          (a + n + sn - 2) +
          "' cy='" +
          (s - o - 7) +
          "' r='2.3' fill='" +
          e.lu +
          "'/>";
      // eye
      var ey = e.ey || 3.3;
      m += eyeS(a + 0.56 * n, s - (e.eh || 0.2) * o, ey);
      // sparkles
      if (e.st)
        [
          [10, -3, 3],
          [76, 6, 2.4],
          [18, 50, 2.2],
          [66, -5, 2],
        ].forEach(function (p) {
          m +=
            "<path d='M" +
            p[0] +
            " " +
            (p[1] - p[2]) +
            "L" +
            (p[0] + 0.7) +
            " " +
            (p[1] - 0.7) +
            "L" +
            (p[0] + p[2]) +
            " " +
            p[1] +
            "L" +
            (p[0] + 0.7) +
            " " +
            (p[1] + 0.7) +
            "L" +
            p[0] +
            " " +
            (p[1] + p[2]) +
            "L" +
            (p[0] - 0.7) +
            " " +
            (p[1] + 0.7) +
            "L" +
            (p[0] - p[2]) +
            " " +
            p[1] +
            "L" +
            (p[0] - 0.7) +
            " " +
            (p[1] - 0.7) +
            "Z' fill='" +
            e.st +
            "'/>";
        });
      return m;
    };
    var F = [
      // COMMUNS
      {
        id: "vairon",
        r: "c",
        n: "Vairon",
        b: "#b8b890",
        c2: "#f2f0d8",
        c1: "#3a3a2a",
        f: "#d8c8a0",
        pat: ["h", "sh"],
        n_: 0,
        sz: 0.75,
        _: { bl: 22, o: 10, dr: "low", tl: "fork" },
      },
      {
        id: "bouviere",
        r: "c",
        n: "Bouvière",
        b: "#c8d4e0",
        c2: "#ffffff",
        c1: "#3ad0c0",
        f: "#ff9a5a",
        pat: ["h", "sh"],
        sz: 0.8,
        _: { bl: 20, o: 13, dr: "low", tl: "fork" },
      },
      {
        id: "chabot",
        r: "c",
        n: "Chabot",
        b: "#8a7a5a",
        c2: "#b8a888",
        c1: "#4a3a2a",
        sp: "#3a2a1a",
        f: "#a89868",
        pat: ["sa", "sp"],
        sz: 0.8,
        _: { bl: 21, o: 11, bo: 0.8, dr: "two", tl: "round", pr: 11, eh: 0.35 },
      },
      {
        id: "lamproie",
        r: "c",
        n: "Lamproie de Planer",
        b: "#8a8a7a",
        c2: "#d8d8c0",
        sp: "#4a4a3a",
        f: "#a8a88a",
        pat: ["sp"],
        sz: 0.9,
        _: { bl: 28, o: 6, dr: "long", tl: "whip", an: 0, su: 1, tr: 10, pr: 3 },
      },
      {
        id: "soleil",
        r: "c",
        n: "Poisson-soleil",
        b: "#e8a04a",
        c2: "#ffd860",
        c1: "#3a9ac0",
        f: "#f0b060",
        pat: ["tg"],
        sz: 0.85,
        _: { bl: 17, o: 17, dr: "spine", tl: "fork", sw: "#1a1a2a", swr: "#ff5a3a" },
      },
      {
        id: "gambusie",
        r: "c",
        n: "Gambusie",
        b: "#a8b8a8",
        c2: "#e8f0e0",
        sp: "#2a3a2a",
        f: "#d8e0c8",
        pat: ["sp"],
        sz: 0.7,
        _: { bl: 19, o: 10, dr: "low", tl: "round" },
      },
      {
        id: "able",
        r: "c",
        n: "Able de Heckel",
        b: "#c0ccd8",
        c2: "#f8fcff",
        c1: "#8aa0b8",
        f: "#ff8a6a",
        pat: ["H"],
        sz: 0.8,
        _: { bl: 21, o: 10, dr: "low", tl: "fork" },
      },
      {
        id: "ide",
        r: "c",
        n: "Ide mélanote",
        b: "#6a6a5a",
        c2: "#e0d8b8",
        f: "#e8603a",
        pat: ["sc"],
        sz: 0.95,
        _: { bl: 25, o: 14, dr: "low", tl: "fork" },
      },
      {
        id: "bordeliere",
        r: "c",
        n: "Brème bordelière",
        b: "#b0b8c0",
        c2: "#e8eef4",
        f: "#8a98a8",
        pat: ["sc"],
        sz: 0.85,
        _: { bl: 17, o: 18, dr: "low", tl: "fork" },
      },
      {
        id: "pseudoras",
        r: "c",
        n: "Pseudorasbora",
        b: "#98a8a0",
        c2: "#e8ecd8",
        c1: "#2a3a3a",
        f: "#b8c4b0",
        pat: ["h", "sc"],
        sz: 0.75,
        _: { bl: 20, o: 10, dr: "low", tl: "round" },
      },
      {
        id: "epinochette",
        r: "c",
        n: "Épinochette",
        b: "#7a9a6a",
        c2: "#d8e8b8",
        c1: "#3a5a2a",
        f: "#a8c890",
        pat: ["sa"],
        sz: 0.65,
        _: { bl: 17, o: 10, dr: "spine", tl: "round" },
      },
      {
        id: "mulet",
        r: "c",
        n: "Mulet porc",
        b: "#8a9aa4",
        c2: "#f0f4f4",
        c1: "#5a6a74",
        f: "#a8b4bc",
        pat: ["LS"],
        sz: 1,
        _: { bl: 27, o: 12, sn: 1, dr: "two", tl: "fork" },
      },
      {
        id: "gobie",
        r: "c",
        n: "Gobie fluviatile",
        b: "#a89878",
        c2: "#d8c8a8",
        c1: "#4a3a2a",
        sp: "#5a4a2a",
        f: "#c8b898",
        pat: ["sp", "mk"],
        sz: 0.75,
        _: { bl: 21, o: 10, bo: 0.8, dr: "two", tl: "round", pr: 10, eh: 0.4 },
      },
      {
        id: "barbotte",
        r: "c",
        n: "Barbotte brune",
        b: "#6a5a3a",
        c2: "#a89870",
        c1: "#2a2218",
        f: "#8a7a58",
        pat: ["dk"],
        sz: 0.85,
        _: { bl: 22, o: 12, wh: 4, dr: "low", tl: "round" },
      },
      // PEU COMMUNS
      {
        id: "alose",
        r: "u",
        n: "Alose feinte",
        b: "#aebcd0",
        c2: "#f8fcff",
        sp: "#20304a",
        f: "#8aa0c0",
        pat: ["sc", "sp", "sh"],
        sz: 1,
        _: { bl: 27, o: 13, dr: "low", tl: "fork" },
      },
      {
        id: "carpecuir",
        r: "u",
        n: "Carpe cuir",
        b: "#b8884a",
        c2: "#e8c888",
        f: "#d8a860",
        pat: ["sh"],
        sz: 1.05,
        _: { bl: 25, o: 17, wh: 2, dr: "long", tl: "fork" },
      },
      {
        id: "amour",
        r: "u",
        n: "Amour blanc",
        b: "#7a9a6a",
        c2: "#e8f0d0",
        f: "#a8c088",
        pat: ["sc"],
        sz: 1.05,
        _: { bl: 27, o: 14, dr: "low", tl: "fork" },
      },
      {
        id: "ombrearc",
        r: "u",
        n: "Ombre arctique",
        b: "#5a8a98",
        c2: "#c0d8e0",
        sp: "#2a4a5a",
        f: "#7a5ad0",
        df: "#7a5ad0",
        dsp: "#e0c8ff",
        pat: ["sp", "sh"],
        sz: 1,
        _: { bl: 25, o: 12, dr: "sail", tl: "fork" },
      },
      {
        id: "crappie",
        r: "u",
        n: "Crapet noir",
        b: "#c0c8b0",
        c2: "#f0f4e8",
        sp: "#3a4a3a",
        f: "#a0b090",
        pat: ["sp"],
        sz: 0.95,
        _: { bl: 19, o: 17, dr: "spine", tl: "fork" },
      },
      {
        id: "orfe",
        r: "u",
        n: "Ide dorée",
        b: "#f0a050",
        c2: "#ffd8a0",
        f: "#ffb060",
        pat: ["sc", "sh"],
        sz: 1,
        _: { bl: 24, o: 13, dr: "low", tl: "fork" },
      },
      {
        id: "truitemer",
        r: "u",
        n: "Truite de mer",
        b: "#aab8c8",
        c2: "#f4f8fc",
        sp: "#1a2a3a",
        f: "#7a8aa0",
        pat: ["sp", "sh"],
        sz: 1.05,
        _: { bl: 27, o: 13, dr: "low", tl: "lun" },
      },
      {
        id: "bar",
        r: "u",
        n: "Bar rayé",
        b: "#a8b8b0",
        c2: "#eef4f0",
        c1: "#2a3a3a",
        f: "#7a8a88",
        pat: ["LS"],
        sz: 1.05,
        _: { bl: 27, o: 14, dr: "two", tl: "fork" },
      },
      {
        id: "truitefont",
        r: "u",
        n: "Omble de fontaine",
        b: "#5a7a58",
        c2: "#ff9a4a",
        sp: "#ffe08a",
        f: "#ff7a3a",
        pat: ["sp", "sh"],
        sz: 1,
        _: { bl: 25, o: 12, dr: "low", tl: "fork" },
      },
      {
        id: "barbue",
        r: "u",
        n: "Barbue de rivière",
        b: "#8a98a8",
        c2: "#dde4ec",
        sp: "#2a3a4a",
        f: "#6a7a8a",
        pat: ["sp"],
        sz: 1.05,
        _: { bl: 25, o: 12, wh: 4, wl: 9, dr: "low", tl: "fork" },
      },
      {
        id: "sandrevolga",
        r: "u",
        n: "Sandre de Volga",
        b: "#9a9a78",
        c2: "#e8e8c8",
        c1: "#4a4a3a",
        f: "#b8b898",
        pat: ["v"],
        sz: 1.05,
        _: { bl: 26, o: 11, dr: "two", tl: "fork", ey: 3.9 },
      },
      {
        id: "tanchedoree",
        r: "u",
        n: "Tanche dorée",
        b: "#e8c040",
        c2: "#fff0a0",
        f: "#f0d060",
        pat: ["sc", "sh"],
        sz: 1,
        _: { bl: 22, o: 15, wh: 2, dr: "low", tl: "round" },
      },
      // RARES
      {
        id: "spatule",
        r: "r",
        n: "Poisson-spatule",
        b: "#7a8aa0",
        c2: "#d0d8e8",
        f: "#5a6a88",
        pat: ["sh"],
        sz: 1.25,
        _: { bl: 26, o: 13, sn: 6, pd: 1, dr: "low", tl: "fork" },
      },
      {
        id: "lepisoste",
        r: "r",
        n: "Lépisosté",
        b: "#8a9a58",
        c2: "#e8e8b8",
        c1: "#5a6a38",
        sp: "#3a4a28",
        f: "#6a7a3a",
        pat: ["sc", "sp"],
        sz: 1.25,
        _: { bl: 28, o: 8, sn: 10, te: 1, dr: "back", tl: "round" },
      },
      {
        id: "brochettigre",
        r: "r",
        n: "Brochet tigre",
        b: "#5a8a4a",
        c2: "#d8e8b0",
        c1: "#2a4a2a",
        f: "#e87a3a",
        pat: ["tg"],
        sz: 1.2,
        _: { bl: 28, o: 11, sn: 7, te: 1, dr: "back", tl: "fork" },
      },
      {
        id: "piranha",
        r: "r",
        n: "Piranha",
        b: "#8a98a8",
        c2: "#ff5a3a",
        sp: "#f0f4ff",
        f: "#c04a3a",
        pat: ["sp", "sh"],
        sz: 1.05,
        _: { bl: 19, o: 17, te: 1, ad: 1, adc: "#c04a3a", dr: "low", tl: "fork" },
      },
      {
        id: "sockeye",
        r: "r",
        n: "Saumon rouge",
        b: "#d8284a",
        c2: "#f06a6a",
        c1: "#4a8a68",
        f: "#a81a3a",
        pat: ["hd", "sh"],
        sz: 1.2,
        _: { bl: 26, o: 13, sn: 1, dr: "low", tl: "fork" },
      },
      {
        id: "gymnote",
        r: "r",
        n: "Anguille électrique",
        b: "#4a4a52",
        c2: "#e8c85a",
        gl: "#ffe84a",
        f: "#8a8a6a",
        pat: ["el"],
        sz: 1.3,
        _: { bl: 29, o: 8, dr: "none", an: "long", tl: "whip", tr: 9, pr: 3 },
      },
      {
        id: "truiteleo",
        r: "r",
        n: "Truite léopard",
        b: "#c8a878",
        c2: "#fff0d0",
        c1: "#3a2a1a",
        sp: "#fff",
        f: "#e88a4a",
        pat: ["rs", "sh"],
        sz: 1.15,
        _: { bl: 26, o: 13, ad: 1, adc: "#e88a4a", dr: "low", tl: "fork" },
      },
      // EPIQUES
      {
        id: "arapaima",
        r: "e",
        n: "Arapaïma",
        b: "#5a6a58",
        c2: "#e8d8a8",
        rc: "#d8283a",
        f: "#c8383a",
        gl: "#ff8a6a",
        st: "#ffd0a0",
        pat: ["rd", "sc", "sh"],
        sz: 1.45,
        _: { bl: 29, o: 12, dr: "back", tl: "round", tr: 15 },
      },
      {
        id: "carpedragon",
        r: "e",
        n: "Carpe dragon",
        b: "#1fb89a",
        c2: "#ffe08a",
        f: "#ffd24a",
        mn: "#ffd24a",
        gl: "#7affd8",
        st: "#fff6c0",
        pat: ["sc", "sh"],
        sz: 1.35,
        _: { bl: 24, o: 16, wh: 2, wl: 11, dr: "long", tl: "veil", tr: 15 },
      },
      {
        id: "lanterne",
        r: "e",
        n: "Poisson-lanterne",
        b: "#2a2a5a",
        c2: "#5a4a9a",
        sp: "#8affff",
        f: "#4a3a8a",
        gl: "#6aa8ff",
        lu: "#9affff",
        te: 1,
        st: "#cfe8ff",
        pat: ["sp"],
        sz: 1.35,
        _: { bl: 22, o: 17, dr: "spine", tl: "round", ey: 4 },
      },
    ];
    F.forEach(function (x) {
      var o = x._;
      delete x._;
      delete x.n_;
      for (var k in o) x[k] = o[k];
      x.sh = "pf";
      PEF.push(x);
    });
  } catch (err) {
    try {
      console.error("pf", err);
    } catch (e) {}
  }
})();
