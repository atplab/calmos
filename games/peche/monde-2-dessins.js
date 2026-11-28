(function () {
  try {
    if (
      typeof PEF === "undefined" ||
      typeof FSH === "undefined" ||
      !FSH.pf ||
      PEF.some(function (x) {
        return x.id === "m01";
      })
    )
      return;
    var A = 44,
      S = 25,
      MN = 0;
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
    function E(x, y, r, c) {
      r = r || 3.2;
      return (
        '<circle cx="' +
        x +
        '" cy="' +
        y +
        '" r="' +
        r +
        '" fill="#fff"/><circle cx="' +
        (x + 0.6) +
        '" cy="' +
        y +
        '" r="' +
        r * 0.55 +
        '" fill="' +
        (c || "#1b1b2f") +
        '"/>'
      );
    }
    function LG(id, a, b, v) {
      return (
        '<linearGradient id="' +
        id +
        '" x1="0" y1="0" x2="' +
        (v ? 0 : 1) +
        '" y2="' +
        (v ? 1 : 0) +
        '"><stop offset="0" stop-color="' +
        a +
        '"/><stop offset="1" stop-color="' +
        b +
        '"/></linearGradient>'
      );
    }
    function RG(id, a, b) {
      return (
        '<radialGradient id="' +
        id +
        '" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="' +
        a +
        '"/><stop offset="1" stop-color="' +
        b +
        '" stop-opacity="0"/></radialGradient>'
      );
    }
    function pet(x, y, ang, len, w, fill, ex) {
      return (
        '<ellipse cx="' +
        (x + len / 2) +
        '" cy="' +
        y +
        '" rx="' +
        len / 2 +
        '" ry="' +
        w / 2 +
        '" fill="' +
        fill +
        '" transform="rotate(' +
        ang +
        " " +
        x +
        " " +
        y +
        ')"' +
        (ex || "") +
        "/>"
      );
    }
    function pol(p, fill, ex) {
      return (
        '<polygon points="' +
        p
          .map(function (q) {
            return q.join(",");
          })
          .join(" ") +
        '" fill="' +
        fill +
        '"' +
        (ex || "") +
        "/>"
      );
    }
    function pth(d, fill, ex) {
      return '<path d="' + d + '" fill="' + fill + '"' + (ex || "") + "/>";
    }
    function ln(d, c, w, ex) {
      return (
        '<path d="' +
        d +
        '" fill="none" stroke="' +
        c +
        '" stroke-width="' +
        w +
        '" stroke-linecap="round"' +
        (ex || "") +
        "/>"
      );
    }
    function rot(a) {
      return (a * Math.PI) / 180;
    }
    /* base fish (ellipse body + tail) */
    function BF(id, o, inner, pre, post) {
      var cx = o.cx || 46,
        cy = o.cy || 25,
        rx = o.rx || 26,
        ry = o.ry || 14,
        tx = cx - rx + 3,
        tr = o.tr || 16,
        th = o.th || ry + 2,
        f = o.f || o.b,
        tf = o.tf || f,
        s = "",
        t = o.tl || "fork";
      s +=
        "<defs>" +
        LG(id + "g", o.b, o.b2 || o.b, 1) +
        '<clipPath id="' +
        id +
        'c"><ellipse cx="' +
        cx +
        '" cy="' +
        cy +
        '" rx="' +
        rx +
        '" ry="' +
        ry +
        '"/></clipPath></defs>' +
        (pre || "");
      if (t === "fork")
        s += pth(
          "M" +
            tx +
            " " +
            cy +
            "L" +
            (tx - tr) +
            " " +
            (cy - th) +
            "Q" +
            (tx - tr * 0.5) +
            " " +
            cy +
            " " +
            (tx - tr) +
            " " +
            (cy + th) +
            "Z",
          tf,
        );
      else if (t === "round")
        s += pth(
          "M" +
            tx +
            " " +
            (cy - 3) +
            "Q" +
            (tx - tr) +
            " " +
            (cy - th) +
            " " +
            (tx - tr) +
            " " +
            cy +
            "Q" +
            (tx - tr) +
            " " +
            (cy + th) +
            " " +
            tx +
            " " +
            (cy + 3) +
            "Z",
          tf,
        );
      else if (t === "veil")
        s += pth(
          "M" +
            tx +
            " " +
            cy +
            "C" +
            (tx - tr * 0.3) +
            " " +
            (cy - th * 1.5) +
            " " +
            (tx - tr) +
            " " +
            (cy - th * 1.3) +
            " " +
            (tx - tr * 1.05) +
            " " +
            (cy - th * 0.3) +
            "C" +
            (tx - tr * 0.85) +
            " " +
            cy +
            " " +
            (tx - tr * 1.05) +
            " " +
            (cy + th * 0.5) +
            " " +
            (tx - tr * 1.05) +
            " " +
            (cy + th * 1.2) +
            "C" +
            (tx - tr) +
            " " +
            (cy + th * 1.5) +
            " " +
            (tx - tr * 0.3) +
            " " +
            (cy + th * 1.3) +
            " " +
            tx +
            " " +
            cy +
            "Z",
          tf,
        );
      else if (t === "lun")
        s += pth(
          "M" +
            tx +
            " " +
            (cy - 3) +
            "Q" +
            (tx - tr * 0.3) +
            " " +
            (cy - th * 1.1) +
            " " +
            (tx - tr) +
            " " +
            (cy - th * 1.5) +
            "Q" +
            (tx - tr * 0.45) +
            " " +
            cy +
            " " +
            (tx - tr) +
            " " +
            (cy + th * 1.5) +
            "Q" +
            (tx - tr * 0.3) +
            " " +
            (cy + th * 1.1) +
            " " +
            tx +
            " " +
            (cy + 3) +
            "Z",
          tf,
        );
      s +=
        '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="url(#' + id + 'g)"/>';
      s +=
        '<g clip-path="url(#' +
        id +
        'c)">' +
        (inner || "") +
        '<ellipse cx="' +
        cx +
        '" cy="' +
        (cy - ry * 0.5) +
        '" rx="' +
        rx * 0.6 +
        '" ry="' +
        ry * 0.18 +
        '" fill="#fff" opacity=".22"/></g>';
      s += o.noeye ? "" : E(cx + rx * 0.58, cy - ry * 0.2, o.ey || 3.2);
      s +=
        '<path d="M' +
        (cx + rx * 0.3) +
        " " +
        (cy - ry * 0.7) +
        "Q" +
        (cx + rx * 0.18) +
        " " +
        cy +
        " " +
        (cx + rx * 0.3) +
        " " +
        (cy + ry * 0.7) +
        '" stroke="' +
        mix(o.b, -0.4) +
        '" stroke-width="1" fill="none" opacity=".45"/>';
      s +=
        o.pc === 0
          ? ""
          : '<ellipse cx="' +
            (cx + rx * 0.1) +
            '" cy="' +
            (cy + ry * 0.35) +
            '" rx="5.5" ry="2.6" fill="' +
            (o.pcc || f) +
            '" opacity=".9" transform="rotate(22 ' +
            (cx + rx * 0.1) +
            " " +
            (cy + ry * 0.35) +
            ')"/>';
      return s + (post || "");
    }
    function flower(x, y, r, c, c2) {
      var s = "";
      for (var i = 0; i < 5; i++) {
        var a = rot(-90 + i * 72);
        s +=
          '<circle cx="' +
          (x + Math.cos(a) * r * 0.62) +
          '" cy="' +
          (y + Math.sin(a) * r * 0.62) +
          '" r="' +
          r * 0.5 +
          '" fill="' +
          c +
          '"/>';
      }
      return (
        s + '<circle cx="' + x + '" cy="' + y + '" r="' + r * 0.3 + '" fill="' + (c2 || "#ffd860") + '"/>'
      );
    }
    function maple(x, y, sz, ang, c, c2) {
      return (
        '<g transform="translate(' +
        x +
        " " +
        y +
        ") rotate(" +
        ang +
        ") scale(" +
        sz +
        ')"><path d="M0 -10L2 -5 6 -8 5 -2 10 -2 6 2 9 6 2 5 0 11 -2 5 -9 6 -6 2 -10 -2 -5 -2 -6 -8 -2 -5Z" fill="' +
        c +
        '" stroke="' +
        c2 +
        '" stroke-width=".6"/><path d="M0 -8V13M0 0L6 -4M0 0L-6 -4M0 3L5 5M0 3L-5 5" stroke="' +
        c2 +
        '" stroke-width=".6" fill="none"/></g>'
      );
    }
    /* ===== INVENTED SHAPES ===== */
    FSH.m_lan = function () {
      var s =
        "<defs>" +
        RG("lnG", "#fff0b0", "#ffb040") +
        LG("lnB", "#ffb858", "#ff7a1e", 1) +
        '<clipPath id="lnC"><path d="M24 14Q46 6 68 14L68 36Q46 44 24 36Z"/></clipPath></defs>';
      s += '<ellipse cx="46" cy="25" rx="42" ry="28" fill="url(#lnG)" opacity=".6"/>';
      for (var i = 0; i < 7; i++) {
        var y = 25 + (i - 3) * 5;
        s +=
          ln(
            "M22 25Q" + (14 - (i % 2) * 2) + " " + (25 + (i - 3) * 3) + " " + (4 + (i % 2) * 3) + " " + y,
            "#e8a030",
            1.2,
          ) +
          '<circle cx="' +
          (4 + (i % 2) * 3) +
          '" cy="' +
          y +
          '" r="1.6" fill="#ff5a2a"/>';
      }
      s +=
        pth("M36 13Q40 1 50 3Q48 8 52 12Z", "#ffb050", ' opacity=".85"') +
        pth("M38 38Q42 50 52 48Q50 43 54 38Z", "#ffb050", ' opacity=".85"');
      s +=
        pth("M24 14Q46 6 68 14L68 36Q46 44 24 36Z", "url(#lnB)") +
        '<g clip-path="url(#lnC)"><ellipse cx="46" cy="25" rx="18" ry="13" fill="#fff6c0" opacity=".55"/>';
      for (var k = 0; k < 6; k++)
        s += ln(
          "M" + (29 + k * 8) + " 8Q" + (26 + k * 8) + " 25 " + (29 + k * 8) + " 42",
          "#c8501a",
          1,
          ' opacity=".7"',
        );
      s += "</g>";
      s +=
        pth("M20 17Q23 25 20 33L26 36Q28 25 26 14Z", "#7a1a10") +
        pth("M66 14Q71 25 66 36L72 33Q75 25 72 17Z", "#7a1a10") +
        '<rect x="27" y="21" width="1" height="1" fill="none"/>';
      s += E(60, 22, 3.4) + ln("M64 29Q67 31 70 29", "#7a1a10", 1.2);
      return s;
    };
    FSH.m_bam = function () {
      var s = "<defs>" + LG("bmB", "#9ad868", "#3a8a30", 1) + "</defs>";
      s +=
        pth("M44 17Q38 3 24 0Q30 12 44 17Z", "#6ab84a") +
        pth("M44 17Q52 4 66 2Q58 13 44 17Z", "#4a9a3a") +
        pth("M12 25Q4 14 -2 11Q2 22 12 25Z", "#6ab84a") +
        pth("M12 25Q4 36 -2 39Q2 28 12 25Z", "#4a9a3a") +
        pth("M60 32Q64 43 72 44Q68 36 64 31Z", "#6ab84a");
      s += '<rect x="8" y="17" width="72" height="17" rx="8.5" fill="url(#bmB)"/>';
      [24, 42, 60].forEach(function (x) {
        s +=
          '<rect x="' +
          (x - 1.6) +
          '" y="16" width="3.2" height="19" rx="1.4" fill="#2a6a24"/><rect x="' +
          (x - 0.6) +
          '" y="16.5" width="1.2" height="18" fill="#b8e890" opacity=".6"/>';
      });
      s +=
        '<rect x="12" y="19" width="62" height="3" rx="1.5" fill="#fff" opacity=".28"/>' +
        E(70, 24, 3) +
        ln("M74 29Q77 30 79 28", "#2a5a20", 1);
      return s;
    };
    FSH.m_van = function () {
      var s = "",
        cx = 44,
        cy = 27,
        R = 33,
        N = 10,
        i,
        a0 = -168,
        a1 = -12;
      for (i = 0; i < N; i++) {
        var A0 = rot(a0 + ((a1 - a0) * i) / N),
          A1 = rot(a0 + ((a1 - a0) * (i + 1)) / N);
        s += pth(
          "M" +
            cx +
            " " +
            cy +
            "L" +
            (cx + R * Math.cos(A0)).toFixed(1) +
            " " +
            (cy + R * Math.sin(A0)).toFixed(1) +
            "Q" +
            (cx + (R + 3) * Math.cos((A0 + A1) / 2)).toFixed(1) +
            " " +
            (cy + (R + 3) * Math.sin((A0 + A1) / 2)).toFixed(1) +
            " " +
            (cx + R * Math.cos(A1)).toFixed(1) +
            " " +
            (cy + R * Math.sin(A1)).toFixed(1) +
            "Z",
          i % 2 ? "#e8382a" : "#ffc840",
          ' stroke="#8a1018" stroke-width=".5"',
        );
      }
      for (i = 0; i <= N; i += 1) {
        var B = rot(a0 + ((a1 - a0) * i) / N);
        s += ln(
          "M" +
            cx +
            " " +
            cy +
            "L" +
            (cx + R * Math.cos(B)).toFixed(1) +
            " " +
            (cy + R * Math.sin(B)).toFixed(1),
          "#7a3a10",
          1.1,
        );
      }
      s +=
        "<defs>" +
        LG("vnB", "#ff5a3a", "#a01428", 1) +
        "</defs>" +
        pth("M22 33L10 23Q12 33 10 43Z", "#ffc840") +
        '<ellipse cx="46" cy="34" rx="25" ry="11" fill="url(#vnB)"/><ellipse cx="46" cy="30" rx="15" ry="3" fill="#fff" opacity=".2"/>' +
        E(62, 31, 3);
      return s;
    };
    FSH.m_ori = function () {
      var st = ' stroke="#c4ae82" stroke-width=".6" stroke-linejoin="round"';
      return (
        pol(
          [
            [14, 25],
            [2, 12],
            [6, 25],
          ],
          "#efe0c0",
          st,
        ) +
        pol(
          [
            [14, 25],
            [6, 25],
            [2, 38],
          ],
          "#d9c8a2",
          st,
        ) +
        pol(
          [
            [36, 14],
            [46, -3],
            [58, 11],
          ],
          "#e8d6b0",
          st,
        ) +
        pol(
          [
            [34, 36],
            [44, 51],
            [56, 38],
          ],
          "#d3c096",
          st,
        ) +
        pol(
          [
            [14, 25],
            [30, 15],
            [40, 25],
          ],
          "#f3e6cb",
          st,
        ) +
        pol(
          [
            [30, 15],
            [52, 9],
            [40, 25],
          ],
          "#fffaf0",
          st,
        ) +
        pol(
          [
            [52, 9],
            [79, 25],
            [40, 25],
          ],
          "#f6ecd6",
          st,
        ) +
        pol(
          [
            [14, 25],
            [40, 25],
            [32, 36],
          ],
          "#e3d2ae",
          st,
        ) +
        pol(
          [
            [32, 36],
            [40, 25],
            [60, 36],
          ],
          "#d2bf98",
          st,
        ) +
        pol(
          [
            [40, 25],
            [79, 25],
            [60, 36],
          ],
          "#ebdcba",
          st,
        ) +
        E(65, 21, 2.8)
      );
    };
    FSH.m_chi = function () {
      var B = "#2f58c8",
        i,
        sc = "";
      sc +=
        ln("M26 20c3-6 10-4 8 1s-7 3-6-1", "#2f58c8", 1.3) +
        ln("M30 30c4-5 10-2 7 3s-7 1-5-2", "#2f58c8", 1.3) +
        ln("M44 16c4-5 9-1 6 3", "#2f58c8", 1.2) +
        ln("M42 32c3 4 9 3 8-1", "#2f58c8", 1.2);
      for (i = 0; i < 5; i++) {
        var a = rot(-90 + i * 72);
        sc +=
          '<ellipse cx="' +
          (46 + Math.cos(a) * 4.5) +
          '" cy="' +
          (25 + Math.sin(a) * 4.5) +
          '" rx="2.6" ry="1.6" fill="#2f58c8" opacity=".85" transform="rotate(' +
          (-90 + i * 72) +
          " " +
          (46 + Math.cos(a) * 4.5) +
          " " +
          (25 + Math.sin(a) * 4.5) +
          ')"/>';
      }
      sc +=
        '<circle cx="46" cy="25" r="1.8" fill="#fff"/><rect x="60" y="8" width="3.4" height="34" fill="' +
        B +
        '"/><rect x="57" y="8" width="1.2" height="34" fill="' +
        B +
        '" opacity=".6"/><rect x="26" y="8" width="2.4" height="34" fill="' +
        B +
        '" opacity=".7"/>';
      return BF(
        "chi",
        { b: "#fbfdff", b2: "#c8d8f4", f: "#eef3ff", tl: "veil", tr: 17, rx: 26, ry: 14, pcc: "#dbe6ff" },
        sc,
        pth("M32 12Q44 -3 60 11Z", "#eef3ff", ' stroke="' + B + '" stroke-width="1"') +
          ln("M40 11L44 2M48 11L50 2", "#2f58c8", 0.7),
      );
    };
    FSH.m_pag = function () {
      var s = "<defs>" + LG("pgB", "#d8281c", "#6a0a10", 1) + LG("pgR", "#3a4a6a", "#1a2238", 1) + "</defs>";
      function roof(cx, y, w, h) {
        return pth(
          "M" +
            (cx - w) +
            " " +
            (y + h) +
            "Q" +
            (cx - w * 0.45) +
            " " +
            (y + h * 0.8) +
            " " +
            cx +
            " " +
            y +
            "Q" +
            (cx + w * 0.45) +
            " " +
            (y + h * 0.8) +
            " " +
            (cx + w) +
            " " +
            (y + h) +
            "Q" +
            cx +
            " " +
            (y + h * 1.35) +
            " " +
            (cx - w) +
            " " +
            (y + h) +
            "Z",
          "url(#pgR)",
          ' stroke="#c8a030" stroke-width=".7"',
        );
      }
      s +=
        pth("M16 33L4 22Q6 33 4 44Z", "#e8a830") +
        '<rect x="43" y="-7" width="1.4" height="9" fill="#c8a030"/><circle cx="43.7" cy="-6" r="1.6" fill="#ffd860"/>';
      s +=
        '<rect x="36" y="3" width="15" height="4" fill="#b8201a"/>' +
        roof(43.5, -1, 12, 5) +
        '<rect x="32" y="12" width="23" height="5" fill="#b8201a"/>' +
        roof(43.5, 5, 17, 6) +
        '<rect x="28" y="20" width="31" height="6" fill="#b8201a"/>' +
        roof(43.5, 12, 23, 7);
      s +=
        '<circle cx="40" cy="14.5" r=".9" fill="#ffd860"/><circle cx="47" cy="14.5" r=".9" fill="#ffd860"/><circle cx="36" cy="23" r="1" fill="#ffd860"/><circle cx="43.5" cy="23" r="1" fill="#ffd860"/><circle cx="51" cy="23" r="1" fill="#ffd860"/>';
      s +=
        '<ellipse cx="44" cy="34" rx="31" ry="11" fill="url(#pgB)"/><path d="M16 33Q44 25 72 33" stroke="#ffd860" stroke-width="1.3" fill="none" opacity=".8"/><ellipse cx="44" cy="30" rx="20" ry="2.5" fill="#fff" opacity=".18"/>' +
        E(66, 31, 3.2) +
        ln("M62 38Q66 40 70 38", "#ffd860", 1);
      return s;
    };
    FSH.m_pink = function () {
      var inn = "";
      [
        [30, 20, 5],
        [40, 32, 6],
        [52, 19, 5.5],
        [58, 30, 4.5],
        [36, 25, 3.5],
        [48, 28, 4],
      ].forEach(function (p) {
        inn += flower(p[0], p[1], p[2], "#fff4f8", "#ff7aa0");
      });
      var f = "";
      [
        [8, 8, 4],
        [76, 42, 3.5],
        [70, 4, 3],
      ].forEach(function (p) {
        f += pet(p[0], p[1], -30, 5, 3, "#ffb6cc", ' opacity=".9"');
      });
      return (
        BF(
          "pnk",
          { b: "#ffd2e2", b2: "#ff98b8", f: "#ffc0d4", tl: "veil", tr: 17, pcc: "#ffc0d4" },
          inn,
          pth("M36 12Q44 0 58 11Z", "#ffc0d4"),
        ) + f
      );
    };
    FSH.m_lot = function () {
      var s = "",
        i;
      [
        [-125, 24, 14],
        [-90, 26, 15],
        [-55, 24, 14],
      ].forEach(function (p, j) {
        s += pet(
          46,
          18,
          p[0],
          p[1],
          p[2],
          j === 1 ? "#ffb0cc" : "#ff98bc",
          ' stroke="#fff" stroke-width=".6"',
        );
      });
      [150, 180, 210].forEach(function (a, j) {
        s += pet(30, 27, a, 22, 12, j === 1 ? "#ffd0e0" : "#ffb4cc", ' stroke="#fff" stroke-width=".6"');
      });
      s +=
        pet(48, 30, 60, 18, 10, "#ffc4d8", ' stroke="#fff" stroke-width=".6"') +
        pet(40, 31, 100, 16, 9, "#ffd4e4");
      s +=
        "<defs>" +
        LG("ltB", "#ffffff", "#ffc0d8", 1) +
        '</defs><ellipse cx="46" cy="27" rx="21" ry="13" fill="url(#ltB)"/>';
      s +=
        pet(34, 24, -70, 12, 8, "#ffd8e8", ' opacity=".9"') +
        pet(46, 22, -90, 13, 8, "#fff0f6", ' opacity=".9"') +
        pet(56, 24, -110, 12, 8, "#ffd8e8", ' opacity=".9"');
      s +=
        '<circle cx="46" cy="28" r="4" fill="#f4d040"/><g fill="#c89820"><circle cx="45" cy="27" r=".7"/><circle cx="47.5" cy="28" r=".7"/><circle cx="45.5" cy="30" r=".7"/></g>' +
        E(60, 25, 3);
      return s;
    };
    FSH.m_lac = function () {
      var inn =
        ln("M18 19Q46 10 72 19", "#f4c040", 1.6) +
        ln("M18 31Q46 40 72 31", "#f4c040", 1.6) +
        ln("M18 25H72", "#14141c", 1.4);
      for (var i = 0; i < 6; i++) inn += '<circle cx="' + (28 + i * 7) + '" cy="25" r="1.6" fill="#f4c040"/>';
      return BF(
        "lcq",
        { b: "#ea1c30", b2: "#7a0a16", f: "#14141c", tl: "fork", tr: 17, pcc: "#14141c" },
        inn,
        pth("M30 12Q44 -4 60 11Z", "#14141c", ' stroke="#f4c040" stroke-width="1"') +
          pth("M40 38Q46 50 56 40Z", "#14141c", ' stroke="#f4c040" stroke-width=".8"'),
      );
    };
    FSH.m_vag = function () {
      var inn = "";
      for (var r = 0; r < 4; r++)
        for (var c = 0; c < 6; c++) {
          var x = 22 + c * 10 + (r % 2) * 5,
            y = 14 + r * 8;
          for (var k = 7; k >= 3; k -= 2)
            inn += ln(
              "M" + (x - k) + " " + y + "A" + k + " " + k + " 0 0 1 " + (x + k) + " " + y,
              "#e8f4ff",
              0.9,
              ' opacity=".7"',
            );
        }
      return BF(
        "vag",
        { b: "#2f74e0", b2: "#173a96", f: "#8ac0ff", tl: "veil", tr: 16, pcc: "#8ac0ff" },
        inn,
        pth("M32 12Q44 -2 60 11Z", "#8ac0ff"),
      );
    };
    FSH.m_dra = function () {
      var s = "<defs>" + RG("drG", "#ffffff", "#bff0e8") + LG("drB", "#9cf0dc", "#3aa890", 1) + "</defs>";
      s += '<ellipse cx="40" cy="26" rx="40" ry="22" fill="url(#drG)" opacity=".35"/>';
      var d = "M6 36C16 46 24 14 38 24S56 40 64 26";
      s += ln(d, "#2a8a78", 11) + ln(d, "url(#drB)", 8.5) + ln(d, "#e8fff8", 2, ' opacity=".6"');
      for (var i = 0; i < 6; i++) {
        var x = 14 + i * 9;
        s += pol(
          [
            [x, i % 2 ? 30 : 22],
            [x + 3, i % 2 ? 38 : 12],
            [x + 6, i % 2 ? 30 : 22],
          ],
          "#ffd860",
          ' opacity=".8"',
        );
      }
      s +=
        '<ellipse cx="72" cy="24" rx="10" ry="7" fill="#5ad0b8" transform="rotate(-8 72 24)"/><ellipse cx="74" cy="26" rx="7" ry="4.5" fill="#bff6e8"/>';
      s +=
        ln("M66 18Q62 8 56 4M68 17Q68 6 64 0", "#e8c040", 1.6) +
        ln("M80 26Q84 32 80 38M78 27Q80 34 76 41", "#e8fff8", 1) +
        '<circle cx="68" cy="33" r="4" fill="#fff"/><circle cx="68" cy="33" r="6" fill="#bff6ff" opacity=".35"/>' +
        E(72, 21, 2.8, "#a01828");
      [
        [20, 30, 9],
        [48, 16, 11],
        [58, 34, 8],
        [30, 12, 7],
      ].forEach(function (p) {
        s +=
          '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="' + p[2] + '" ry="3" fill="#fff" opacity=".45"/>';
      });
      return s;
    };
    FSH.m_jad = function () {
      var inn = "";
      inn +=
        '<circle cx="46" cy="25" r="12" fill="none" stroke="#e8fff0" stroke-width="1" opacity=".5"/><circle cx="46" cy="25" r="6" fill="none" stroke="#e8fff0" stroke-width=".8" opacity=".5"/>' +
        ln("M30 14Q38 22 34 34M60 14Q54 24 58 36", "#e8fff0", 0.9, ' opacity=".45"') +
        '<ellipse cx="38" cy="15" rx="6" ry="3" fill="#fff" opacity=".5" transform="rotate(-25 38 15)"/>';
      return BF(
        "jad",
        {
          b: "#8ee8b8",
          b2: "#2a9a68",
          f: "#b8f4d4",
          cx: 45,
          rx: 22,
          ry: 20,
          tl: "veil",
          tr: 16,
          th: 18,
          pcc: "#b8f4d4",
        },
        inn,
        pth("M36 8Q44 -4 56 8Z", "#b8f4d4", ' opacity=".8"') +
          pth("M38 42Q44 52 54 42Z", "#b8f4d4", ' opacity=".8"'),
      );
    };
    FSH.m_dar = function () {
      var inn =
        ln("M20 36Q40 44 72 36", "#f4c040", 1.4) +
        ln("M24 14Q36 10 46 14", "#f4c040", 1.2) +
        ln("M28 25h12M34 19v12", "#f4c040", 1.6);
      var post =
        '<ellipse cx="59" cy="24" rx="11" ry="12.5" fill="#fff4e8"/>' +
        ln("M50 14Q56 19 64 13", "#1a1a1a", 3.2) +
        ln("M52 18L66 22", "#1a1a1a", 0) +
        '<circle cx="55" cy="23" r="3.6" fill="#fff" stroke="#1a1a1a" stroke-width="1"/><circle cx="64" cy="23" r="3.6" fill="#fff" stroke="#1a1a1a" stroke-width="1"/><circle cx="55.6" cy="23.5" r="1.7" fill="#1a1a1a"/><circle cx="64.6" cy="23.5" r="1.7" fill="#1a1a1a"/>' +
        ln("M52 31Q59 28 66 31", "#1a1a1a", 1.4) +
        ln("M52 31Q56 36 54 38M66 31Q62 36 64 38", "#1a1a1a", 1.1);
      return BF(
        "dar",
        {
          b: "#ea2a2c",
          b2: "#9a1418",
          f: "#ea2a2c",
          cx: 44,
          rx: 21,
          ry: 20,
          tl: "round",
          tr: 12,
          th: 13,
          noeye: 1,
          pcc: "#c81e22",
        },
        inn,
        "",
        post,
      );
    };
    FSH.m_sum = function () {
      var inn = "",
        i;
      for (i = 0; i < 9; i++)
        inn += ln(
          "M" + (18 + i * 2) + " " + (13 + i * 3) + "L" + (74 - i * 2) + " " + (14 + i * 3),
          "#fff",
          1.3,
          ' opacity=".35"',
        );
      [
        [22, 20, 1.6],
        [66, 36, 1.3],
        [34, 40, 1.1],
      ].forEach(function (p) {
        inn += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + p[2] + '" fill="#1a1a1e"/>';
      });
      var pre =
        pth("M26 14Q40 -2 62 10Q46 8 34 18Z", "#2a2a2e", ' opacity=".75"') +
        pth("M34 36Q42 52 56 40Q46 42 40 34Z", "#2a2a2e", ' opacity=".7"');
      var post =
        '<rect x="14" y="30" width="7" height="7" fill="#c8281c" opacity=".92"/><path d="M16 32h3M17.5 32v4" stroke="#fff" stroke-width=".9"/>';
      return BF(
        "sum",
        { b: "#e8e6e0", b2: "#2a2a30", f: "#2a2a2e", tl: "fork", tr: 18, pcc: "#2a2a2e" },
        inn,
        pre,
        post,
      );
    };
    FSH.m_kim = function () {
      var inn = "";
      [
        [26, 18],
        [36, 31],
        [30, 28],
        [46, 15],
        [44, 34],
        [54, 26],
        [66, 20],
        [64, 34],
      ].forEach(function (p, i) {
        inn += flower(p[0], p[1], 4, i % 2 ? "#fff0f4" : "#ffd860", "#e84a78");
      });
      inn +=
        '<rect x="49" y="8" width="8" height="34" fill="#f4c040"/><path d="M50 8v34M56 8v34" stroke="#b8201a" stroke-width=".8"/>';
      var pre =
        pth("M24 25Q10 8 1 14Q4 25 1 36Q10 42 24 25Z", "#f8a8c0", ' stroke="#c84a78" stroke-width=".8"') +
        flower(10, 21, 3, "#fff", "#e84a78") +
        flower(9, 31, 3, "#fff", "#e84a78");
      var post = ln("M60 13L55 37", "#fff", 2.4) + ln("M61 13L56 37", "#c8201a", 0.8);
      return BF(
        "kim",
        { b: "#ee6a90", b2: "#b83a68", f: "#f8a8c0", tl: "none", rx: 26, ry: 14, pcc: "#f8a8c0" },
        inn,
        pre,
        post,
      );
    };
    FSH.m_kit = function () {
      var s =
        "<defs>" +
        RG("ktG", "#ffd890", "#ff8a20") +
        '</defs><ellipse cx="22" cy="25" rx="24" ry="24" fill="url(#ktG)" opacity=".4"/>';
      for (var i = 0; i < 9; i++) {
        var a = 150 + i * 7.5;
        s +=
          pet(26, 26, a, 22, 5.5, i % 2 ? "#ffb04a" : "#f08a2a") +
          '<circle cx="' +
          (26 + Math.cos(rot(a)) * 22) +
          '" cy="' +
          (26 + Math.sin(rot(a)) * 22) +
          '" r="2" fill="#fff" opacity=".9"/>';
      }
      s +=
        pol(
          [
            [58, 12],
            [62, -3],
            [68, 12],
          ],
          "#f08a2a",
        ) +
        pol(
          [
            [60, 10],
            [62, 2],
            [66, 10],
          ],
          "#2a1a10",
        ) +
        pol(
          [
            [68, 13],
            [76, 2],
            [76, 17],
          ],
          "#f08a2a",
        ) +
        pol(
          [
            [70, 13],
            [75, 6],
            [75, 15],
          ],
          "#2a1a10",
        );
      s +=
        "<defs>" +
        LG("ktB", "#ffa43a", "#d8601a", 1) +
        '</defs><ellipse cx="50" cy="27" rx="25" ry="13" fill="url(#ktB)"/><ellipse cx="56" cy="33" rx="16" ry="6" fill="#fff6e8"/><ellipse cx="46" cy="21" rx="14" ry="3" fill="#fff" opacity=".2"/>' +
        E(63, 22, 3, "#7a1a30");
      s +=
        '<circle cx="74" cy="28" r="1.8" fill="#2a1a10"/>' +
        ln("M64 30L58 33M64 31L58 37", "#2a1a10", 0.7) +
        pol(
          [
            [40, 40],
            [44, 52],
            [50, 40],
          ],
          "#2a1a10",
          ' opacity=".8"',
        );
      return s;
    };
    FSH.m_tam = function () {
      var s = "<defs>" + LG("tmB", "#d8281c", "#6a0a08", 1) + LG("tmH", "#fff2d0", "#e8c880", 1) + "</defs>";
      s +=
        ln("M22 24L2 8", "#c89a58", 3.6) +
        ln("M22 28L2 44", "#a87a3a", 3.6) +
        '<circle cx="2" cy="8" r="2.4" fill="#e8c080"/><circle cx="2" cy="44" r="2.4" fill="#e8c080"/>';
      s +=
        pth("M22 10Q44 4 66 10L66 40Q44 46 22 40Z", "url(#tmB)") +
        '<rect x="22" y="9" width="3" height="32" fill="#f4c040"/><rect x="62" y="9" width="3" height="32" fill="#f4c040"/>';
      for (var i = 0; i < 6; i++)
        s +=
          '<circle cx="' +
          (28 + i * 6.8) +
          '" cy="' +
          (11.5 - Math.abs(i - 2.5) * -0.2 + (i < 3 ? i * 0.2 : (5 - i) * 0.2)) +
          '" r="1.3" fill="#ffd860"/><circle cx="' +
          (28 + i * 6.8) +
          '" cy="' +
          38.5 +
          '" r="1.3" fill="#ffd860"/>';
      s += ln("M28 14L36 36M36 14L44 36M44 14L52 36", "#f4c040", 1, ' opacity=".55"');
      s +=
        '<ellipse cx="68" cy="25" rx="8" ry="17" fill="url(#tmH)" stroke="#a87a3a" stroke-width="1.2"/><ellipse cx="68" cy="25" rx="5.5" ry="13" fill="none" stroke="#e8b040" stroke-width=".8"/>' +
        E(68, 19, 3) +
        '<path d="M64 30Q68 34 72 30" stroke="#7a1a10" stroke-width="1.4" fill="none"/>';
      return s;
    };
    FSH.m_gru = function () {
      var s = "<defs>" + LG("grB", "#ffffff", "#dfe6f0", 1) + "</defs>";
      s +=
        ln("M16 34Q4 30 1 40", "#fff", 5) +
        ln("M16 36Q8 42 4 50", "#fff", 4) +
        ln("M3 39L1 40M5 49L4 50", "#1a1a22", 3);
      s +=
        pth(
          "M20 32Q28 18 48 22Q60 26 56 36Q40 44 22 38Z",
          "url(#grB)",
          ' stroke="#c4cddc" stroke-width=".7"',
        ) +
        pth("M26 24Q34 12 46 14Q40 20 36 28Z", "#fff", ' stroke="#c4cddc" stroke-width=".7"') +
        pth("M20 24Q26 16 30 18L28 28Z", "#1a1a22", ' opacity=".85"');
      s +=
        ln("M52 26Q70 24 68 8", "#fff", 5.4) +
        ln("M52 26Q70 24 68 8", "#dfe6f0", 1.2, ' opacity=".6"') +
        '<ellipse cx="69" cy="5" rx="5.2" ry="4.4" fill="#fff"/><path d="M66 1Q69 -1 72 2Q70 5 66 4Z" fill="#e8201e"/>' +
        pol(
          [
            [73, 4],
            [83, 6],
            [73, 8],
          ],
          "#e8b030",
        ) +
        E(70.5, 5, 1.6) +
        ln("M64 7Q63 6 63 4", "#1a1a22", 1.6);
      return s;
    };
    FSH.m_tor = function () {
      var s = "<defs>" + LG("trB", "#ff8a3a", "#d8301a", 1) + LG("trP", "#f2402a", "#a8180e", 1) + "</defs>";
      s += pth("M20 28L6 18Q8 28 6 40Z", "#ff7a30");
      s +=
        '<rect x="31" y="8" width="5.5" height="30" fill="url(#trP)"/><rect x="55" y="8" width="5.5" height="30" fill="url(#trP)"/><rect x="29" y="12" width="33" height="3.4" fill="#d8301a"/>';
      s +=
        pth("M17 5Q45 7 73 5Q71 10 66 8Q45 6 24 8Q20 10 17 5Z", "#1a1a22") +
        pth("M20 4Q45 6 70 4L72 6Q45 9 18 6Z", "#f2402a", ' opacity=".0"');
      s +=
        '<ellipse cx="46" cy="32" rx="26" ry="11" fill="url(#trB)"/><ellipse cx="46" cy="28" rx="16" ry="2.8" fill="#fff" opacity=".22"/>' +
        E(63, 29, 3) +
        ln("M60 36Q64 38 68 36", "#7a1a10", 1);
      return s;
    };
    FSH.m_lun = function () {
      var inn = "";
      [
        [24, 16, 1],
        [34, 34, 1.2],
        [56, 14, 1],
        [64, 34, 0.9],
        [44, 12, 1.1],
      ].forEach(function (p) {
        inn +=
          '<path d="M' +
          p[0] +
          " " +
          (p[1] - 3) * 1 +
          "L" +
          (p[0] + 0.9) +
          " " +
          (p[1] - 0.9) +
          "L" +
          (p[0] + 3) +
          " " +
          p[1] +
          "L" +
          (p[0] + 0.9) +
          " " +
          (p[1] + 0.9) +
          "L" +
          p[0] +
          " " +
          (p[1] + 3) +
          "L" +
          (p[0] - 0.9) +
          " " +
          (p[1] + 0.9) +
          "L" +
          (p[0] - 3) +
          " " +
          p[1] +
          "L" +
          (p[0] - 0.9) +
          " " +
          (p[1] - 0.9) +
          'Z" fill="#fff6c0"/>';
      });
      inn += ln("M18 28Q46 38 72 26", "#fff", 1, ' opacity=".35"');
      var pre =
        "<defs>" +
        RG("lnG2", "#dfe6ff", "#6a7ac8") +
        '</defs><ellipse cx="14" cy="25" rx="18" ry="22" fill="url(#lnG2)" opacity=".5"/>' +
        pth("M16 11A15 15 0 1 0 16 39A11 11 0 1 1 16 11Z", "#e8ecff", ' stroke="#9aa8e0" stroke-width=".7"') +
        pth("M38 12Q46 0 58 11Z", "#aab6e8", ' opacity=".9"');
      return BF(
        "lun",
        { b: "#c4cef2", b2: "#2e3a86", f: "#aab6e8", tl: "none", cx: 48, rx: 24, ry: 14, pcc: "#aab6e8" },
        inn,
        pre,
      );
    };
    FSH.m_bon = function () {
      var s = "";
      function pad(x, y, r) {
        return (
          '<ellipse cx="' +
          x +
          '" cy="' +
          y +
          '" rx="' +
          r * 1.3 +
          '" ry="' +
          r +
          '" fill="#2a6a2a"/><ellipse cx="' +
          (x - 1) +
          '" cy="' +
          (y - 1.5) +
          '" rx="' +
          r +
          '" ry="' +
          r * 0.6 +
          '" fill="#4a9a3a"/>'
        );
      }
      s +=
        ln("M22 25Q10 20 6 8M12 22Q6 30 2 40", "#5a3a1e", 2.4) +
        pad(6, 6, 5) +
        pad(3, 40, 4) +
        pad(14, 16, 3.5);
      s +=
        ln("M40 14Q36 6 28 4M50 13Q52 4 62 2M46 12Q46 6 44 0", "#5a3a1e", 2) +
        pad(27, 3, 5.5) +
        pad(63, 2, 5) +
        pad(44, -1, 4);
      s += ln("M44 38Q48 46 58 46", "#5a3a1e", 2) + pad(60, 46, 4);
      s +=
        "<defs>" +
        LG("bnB", "#6a9a48", "#2e5a26", 1) +
        '</defs><ellipse cx="46" cy="26" rx="26" ry="13" fill="url(#bnB)"/>';
      s +=
        ln("M24 26Q34 22 40 26T54 24", "#5a3a1e", 1.2, ' opacity=".7"') +
        '<ellipse cx="46" cy="21" rx="15" ry="2.6" fill="#fff" opacity=".2"/>' +
        E(62, 23, 3) +
        ln("M64 31Q67 33 70 31", "#1e3a18", 1);
      return s;
    };
    FSH.m_pap = function () {
      var inn = "",
        i;
      for (i = 0; i < 26; i++) {
        var x = 18 + ((i * 29) % 56),
          y = 12 + ((i * 13) % 26);
        inn += ln(
          "M" +
            x +
            " " +
            y +
            "q" +
            (3 + (i % 3)) +
            " " +
            (i % 2 ? 2 : -2) +
            " " +
            (5 + (i % 2) * 2) +
            " " +
            ((i % 3) - 1),
          "#c8aa78",
          0.6,
          ' opacity=".6"',
        );
      }
      inn +=
        '<circle cx="44" cy="25" r="8" fill="none" stroke="#e8d8b8" stroke-width="1.6"/>' +
        flower(44, 25, 4, "#f2e6cc", "#e8d8b8") +
        '<path d="M24 36L36 22L24 12" stroke="#e0d0b0" stroke-width=".8" fill="none"/>';
      var zz = "";
      for (i = 0; i < 5; i++) zz += (i ? "L" : "M") + (14 - (i % 2) * 4) + " " + (9 + i * 8);
      var pre =
        pth(zz + "L22 25Z", "#f6ecd4", ' stroke="#d8c8a0" stroke-width=".6"') +
        pol(
          [
            [36, 12],
            [44, 0],
            [54, 11],
          ],
          "#efe2c4",
          ' stroke="#d8c8a0" stroke-width=".6"',
        ) +
        pol(
          [
            [36, 38],
            [44, 50],
            [54, 38],
          ],
          "#e8dab8",
          ' stroke="#d8c8a0" stroke-width=".6"',
        );
      return BF(
        "pap",
        { b: "#fffaec", b2: "#eadcbc", f: "#f2e6cc", tl: "none", cx: 47, rx: 26, ry: 14, pcc: "#efe2c4" },
        inn,
        pre,
      );
    };
    FSH.m_mat = function () {
      var s = "";
      for (var i = 0; i < 8; i++) {
        var y = 25 + (i - 3.5) * 3.6;
        s += ln("M22 25Q10 " + (25 + (i - 3.5) * 4) + " 2 " + y, "#d8b878", 1.1);
      }
      s += ln("M22 25H16", "#a8884a", 3.4) + '<circle cx="22" cy="25" r="1" fill="#a8884a"/>';
      s += ln("M38 12Q34 6 38 2Q42 -2 38 -6M50 11Q46 5 50 1Q54 -3 50 -7", "#fff", 1.6, ' opacity=".6"');
      var inn = "";
      [
        [30, 14, 2],
        [38, 12, 1.6],
        [50, 13, 2.2],
        [60, 16, 1.6],
        [46, 15, 1.2],
      ].forEach(function (p) {
        inn += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + p[2] + '" fill="#d8f4a0" opacity=".9"/>';
      });
      inn += ln("M20 24Q34 20 46 24T74 22", "#6aa82a", 1.2, ' opacity=".5"');
      return (
        s +
        BF(
          "mat",
          { b: "#a6dc52", b2: "#4e9024", f: "#d8b878", tl: "none", cx: 50, rx: 24, ry: 14, pcc: "#7ec038" },
          inn,
          "",
        )
      );
    };
    FSH.m_bud = function () {
      var s = "<defs>" + RG("bdG", "#fff6c0", "#ffd860") + LG("bdB", "#fad25a", "#c8901a", 1) + "</defs>";
      s +=
        '<circle cx="60" cy="22" r="23" fill="url(#bdG)" opacity=".75"/><circle cx="60" cy="22" r="19" fill="none" stroke="#f4c040" stroke-width="1.2" opacity=".9"/><circle cx="60" cy="22" r="15" fill="none" stroke="#fff" stroke-width=".7" opacity=".6"/>';
      s +=
        pth("M24 25Q10 10 2 14Q6 25 2 36Q10 40 24 25Z", "#f4c040", ' opacity=".9"') +
        pth("M34 13Q42 3 54 11Z", "#e8b030") +
        '<ellipse cx="44" cy="27" rx="24" ry="14" fill="url(#bdB)"/><ellipse cx="42" cy="22" rx="14" ry="3" fill="#fff" opacity=".25"/>';
      s += '<ellipse cx="62" cy="14" rx="7.5" ry="5.8" fill="#f8d868"/>';
      for (var i = 0; i < 6; i++)
        s += '<circle cx="' + (57 + i * 2.2) + '" cy="' + (11 + (i % 2) * 2) + '" r="1.3" fill="#2a3a8a"/>';
      s +=
        '<ellipse cx="62" cy="24" rx="10" ry="9.5" fill="#fad25a"/><ellipse cx="55.5" cy="31" rx="2.3" ry="8" fill="#f0c040" stroke="#c8901a" stroke-width=".5"/><ellipse cx="68.5" cy="31" rx="2.3" ry="8" fill="#f0c040" stroke="#c8901a" stroke-width=".5"/>';
      s +=
        ln("M56 22Q59 24.5 62 22M63 22Q66 24.5 69 22", "#5a3a1a", 1.3) +
        '<circle cx="62.5" cy="17.5" r="1.2" fill="#e8201e"/>' +
        ln("M59 29Q62.5 31.5 66 29", "#a8301a", 1.2);
      return s;
    };
    FSH.m_sam = function () {
      var inn = "",
        i;
      for (i = 0; i < 6; i++)
        inn +=
          '<rect x="14" y="' +
          (11 + i * 5) +
          '" width="64" height="2.4" fill="' +
          (i % 2 ? "#14141c" : "#f4c040") +
          '" opacity="' +
          (i % 2 ? ".85" : ".6") +
          '"/>';
      for (i = 0; i < 9; i++) inn += ln("M" + (22 + i * 7) + " 8V44", "#14141c", 0.8, ' opacity=".5"');
      var pre =
        pth("M12 25L2 14Q4 25 2 36Z", "#14141c", ' stroke="#b81a22" stroke-width="1"') +
        pth("M42 12L48 -2L56 10Z", "#7a0e14") +
        pth("M26 12L22 2L34 10Z", "#7a0e14");
      var post =
        '<path d="M52 12Q62 4 72 14Q74 18 70 20Q62 14 52 18Z" fill="#14141c" stroke="#f4c040" stroke-width=".8"/>' +
        pth("M60 12Q54 0 46 -6Q60 -2 66 10Z", "#f4c040") +
        pth("M64 12Q70 0 78 -5Q74 6 69 12Z", "#f4c040") +
        '<path d="M56 30Q68 26 76 30Q74 40 64 41Q56 38 56 30Z" fill="#14141c"/><path d="M60 33l2 4 2-4 2 4 2-4 2 4" stroke="#fff" stroke-width="1.1" fill="none"/>' +
        ln("M58 21L70 18", "#ff4a3a", 1.2);
      return BF(
        "sam",
        {
          b: "#c41e28",
          b2: "#7a0e14",
          f: "#14141c",
          tl: "none",
          cx: 44,
          rx: 26,
          ry: 14,
          ey: 0,
          noeye: 1,
          pcc: "#14141c",
        },
        inn,
        pre,
        post +
          '<circle cx="64" cy="22" r="2.6" fill="#fff"/><circle cx="64.6" cy="22.4" r="1.3" fill="#c81010"/><path d="M60 18L68 21" stroke="#14141c" stroke-width="1.8"/>',
      );
    };
    FSH.m_nin = function () {
      var inn = "";
      inn += ln("M20 20Q46 14 72 22", "#3a3a4a", 1, ' opacity=".6"');
      var pre =
        pol(
          [
            [12, 25],
            [2, 13],
            [5, 25],
            [2, 37],
          ],
          "#2a2a36",
        ) +
        '<g transform="translate(38 11)"><path d="M0 -9L2 -2 9 0 2 2 0 9 -2 2 -9 0 -2 -2Z" fill="#9aa4b4" stroke="#5a6272" stroke-width=".6"/><circle r="1.6" fill="#2a2a36"/></g>';
      var post =
        '<path d="M56 12L61 12L60 38L55 38Z" fill="#d8281c"/>' +
        ln("M56 18Q40 12 26 20M56 22Q42 20 30 28", "#d8281c", 2.2) +
        '<path d="M58 21Q64 17 72 22Q66 25 58 24Z" fill="#fff"/><path d="M58 20L72 19" stroke="#0a0a12" stroke-width="2.2"/><circle cx="66" cy="22" r="1.7" fill="#0a0a12"/>';
      return BF(
        "nin",
        {
          b: "#26263a",
          b2: "#0c0c16",
          f: "#2a2a36",
          tl: "none",
          cx: 46,
          rx: 26,
          ry: 14,
          noeye: 1,
          pcc: "#2a2a36",
        },
        inn,
        pre,
        post,
      );
    };
    FSH.m_fuj = function () {
      var s = "<defs>" + LG("fjB", "#6ab0f0", "#2a3a9a", 1) + "</defs>";
      s +=
        pth("M16 38L2 26Q4 38 2 50Z", "#6aa8e8") +
        pth("M12 38L40 5Q44 1 48 5L72 26Q84 30 78 38Q60 48 34 46Q18 46 12 38Z", "url(#fjB)");
      s +=
        pth("M40 5Q44 1 48 5L58 15L54 13L50 19L45 13L40 19L36 12L31 15Z", "#fff") +
        pth("M36 12L40 19L45 13L50 19L54 13", "none", ' stroke="#c8dcff" stroke-width=".8"');
      s +=
        '<ellipse cx="26" cy="22" rx="7" ry="2.2" fill="#fff" opacity=".8"/><ellipse cx="62" cy="30" rx="8" ry="2.2" fill="#fff" opacity=".7"/>' +
        ln("M16 42Q30 46 46 43T72 40", "#bfe0ff", 1, ' opacity=".6"') +
        ln("M20 46Q34 49 50 46", "#bfe0ff", 0.8, ' opacity=".5"');
      s +=
        '<ellipse cx="58" cy="38" rx="6" ry="2.4" fill="#e8f4ff" opacity=".9" transform="rotate(20 58 38)"/>' +
        E(70, 28, 3) +
        ln("M74 35Q77 36 79 34", "#1a2a6a", 1);
      return s;
    };
    FSH.m_fea = function () {
      var inn = "",
        c = ["#ff5a5a", "#ffd84a", "#5ae8ff", "#ff7ad8", "#8aff6a"],
        i,
        j;
      [
        [36, 22, 13],
        [58, 30, 9],
      ].forEach(function (b, k) {
        for (i = 0; i < 12; i++) {
          var a = rot(i * 30 + k * 15),
            x = b[0] + Math.cos(a) * b[2],
            y = b[1] + Math.sin(a) * b[2];
          inn +=
            ln("M" + b[0] + " " + b[1] + "L" + x.toFixed(1) + " " + y.toFixed(1), c[(i + k) % 5], 1.2) +
            '<circle cx="' +
            x.toFixed(1) +
            '" cy="' +
            y.toFixed(1) +
            '" r="1.4" fill="' +
            c[(i + k + 2) % 5] +
            '"/>';
        }
      });
      var pre = "";
      for (i = 0; i < 6; i++) {
        var a = rot(150 + i * 12),
          x = 24 + Math.cos(a) * 16,
          y = 25 + Math.sin(a) * 16;
        pre +=
          ln("M24 25L" + x.toFixed(1) + " " + y.toFixed(1), c[i % 5], 1.3) +
          '<circle cx="' +
          x.toFixed(1) +
          '" cy="' +
          y.toFixed(1) +
          '" r="1.8" fill="' +
          c[(i + 1) % 5] +
          '"/>';
      }
      pre += '<path d="M44 11L46 4L48 11Z" fill="#ffd84a"/>';
      return BF(
        "fea",
        { b: "#1c2260", b2: "#0a0a2e", f: "#5a6ae8", tl: "none", cx: 47, rx: 26, ry: 14, pcc: "#5a6ae8" },
        inn,
        pre,
      );
    };
    FSH.m_piv = function () {
      var s = "";
      [
        [0, 34, 22, "#ffbcd8"],
        [40, 34, 22, "#ffb0d0"],
        [80, 34, 22, "#ffbcd8"],
        [120, 34, 22, "#ffb0d0"],
        [160, 34, 22, "#ffbcd8"],
        [200, 34, 22, "#ffb0d0"],
        [240, 34, 22, "#ffbcd8"],
        [280, 34, 22, "#ffb0d0"],
        [320, 34, 22, "#ffbcd8"],
      ].forEach(function (p) {
        s += pet(46, 25, p[0], p[1] * 0.9, p[2] * 0.75, p[3], ' stroke="#ff7ab0" stroke-width=".5"');
      });
      [
        [20, 26, 17, "#ff8ac0"],
        [65, 26, 17, "#ff7ab8"],
        [110, 26, 17, "#ff8ac0"],
        [155, 26, 17, "#ff7ab8"],
        [200, 26, 17, "#ff8ac0"],
        [245, 26, 17, "#ff7ab8"],
        [290, 26, 17, "#ff8ac0"],
        [335, 26, 17, "#ff7ab8"],
      ].forEach(function (p) {
        s += pet(46, 25, p[0], p[1], p[2], p[3], ' stroke="#e8509a" stroke-width=".5"');
      });
      s +=
        "<defs>" +
        LG("pvB", "#ff9ac8", "#e03a86", 1) +
        '</defs><ellipse cx="48" cy="25" rx="15" ry="11" fill="url(#pvB)"/>';
      for (var i = 0; i < 8; i++)
        s +=
          '<circle cx="' +
          (40 + (i % 4) * 4.4) +
          '" cy="' +
          (19 + Math.floor(i / 4) * 3) +
          '" r=".9" fill="#ffe060"/>';
      s += E(55, 24, 3) + ln("M56 30Q59 32 62 30", "#a01858", 1);
      return s;
    };
    FSH.m_cli = function () {
      var s = "<defs>" + RG("clG", "#ffffff", "#bfe8ff") + LG("clB", "#e8f8ff", "#9ad0f0", 1) + "</defs>";
      s +=
        ln("M46 8Q46 -2 46 -6", "#5a6a7a", 1.2) +
        '<circle cx="46" cy="-6" r="2" fill="none" stroke="#5a6a7a" stroke-width="1.2"/>';
      s +=
        ln("M26 30L10 30", "#d8586a", 1) +
        '<rect x="2" y="30" width="9" height="23" rx="1" fill="#ffe4ea" stroke="#d8586a" stroke-width=".8" transform="rotate(8 6 40)"/>' +
        ln("M4 35H10M4 40H10M4 45H10", "#d8586a", 0.8, ' transform="rotate(8 6 40)"');
      s +=
        '<path d="M22 32Q22 8 46 8Q70 8 70 32Q70 40 66 40L26 40Q22 40 22 32Z" fill="url(#clB)" opacity=".8" stroke="#8ac0e8" stroke-width="1.2"/><path d="M28 30Q28 14 42 12" stroke="#fff" stroke-width="2" fill="none" opacity=".8" stroke-linecap="round"/><path d="M26 40Q46 44 66 40" fill="none" stroke="#8ac0e8" stroke-width="1.2"/>';
      s +=
        flower(36, 28, 3.6, "#ff9ab0", "#ffd860") +
        flower(54, 22, 3, "#ff9ab0", "#ffd860") +
        ln("M46 8V30", "#8ac0e8", 0.8) +
        '<circle cx="46" cy="32" r="3.4" fill="#e8c860" stroke="#a88a30" stroke-width=".8"/>' +
        E(60, 25, 3);
      return s;
    };
    FSH.m_phe = function () {
      var s =
        "<defs>" +
        RG("phG", "#ffe0a0", "#ff6a1a") +
        LG("phB", "#ff5a1a", "#ffc030", 1) +
        '</defs><ellipse cx="40" cy="25" rx="42" ry="26" fill="url(#phG)" opacity=".35"/>';
      var cs = ["#e8281a", "#ff7a1a", "#ffb020", "#ff5a1a", "#ffd040"];
      for (var i = 0; i < 9; i++) {
        s +=
          pet(26, 26, 152 + i * 7, 28 - (i % 2) * 5, 6, cs[i % 5]) +
          '<circle cx="' +
          (26 + Math.cos(rot(152 + i * 7)) * (28 - (i % 2) * 5)).toFixed(1) +
          '" cy="' +
          (26 + Math.sin(rot(152 + i * 7)) * (28 - (i % 2) * 5)).toFixed(1) +
          '" r="2.2" fill="#ffe060"/>';
      }
      [-110, -90, -70].forEach(function (a, j) {
        s += pet(46, 20, a, 24 - (j % 2) * 4, 7, j === 1 ? "#ff9a20" : "#ff6a1a");
      });
      [-60, -30].forEach(function (a) {
        s += pet(62, 12, a, 12, 4, "#ffd040");
      });
      s +=
        '<ellipse cx="48" cy="27" rx="24" ry="12" fill="url(#phB)"/><ellipse cx="46" cy="22" rx="14" ry="2.6" fill="#fff" opacity=".3"/>' +
        pth("M66 24L80 25L66 29Z", "#ffc030") +
        E(62, 23, 3, "#a01808");
      return s;
    };
    FSH.m_ery = function () {
      var s =
        maple(14, 25, 1.5, -90, "#e86a1a", "#8a2a0a") +
        maple(44, 8, 0.8, 0, "#f08a2a", "#8a2a0a") +
        maple(52, 43, 0.8, 170, "#d8481a", "#8a2a0a");
      s +=
        "<defs>" +
        LG("erB", "#f27a22", "#a82a10", 1) +
        '</defs><ellipse cx="48" cy="25" rx="25" ry="14" fill="url(#erB)"/>' +
        ln("M26 25H70M40 25L48 16M40 25L48 34M54 25L60 18M54 25L60 32", "#7a1a08", 0.8, ' opacity=".6"') +
        '<ellipse cx="46" cy="19" rx="14" ry="2.8" fill="#fff" opacity=".2"/>' +
        maple(50, 30, 0.5, 40, "#ffb040", "#8a2a0a") +
        E(64, 22, 3) +
        ln("M66 30Q69 32 72 30", "#6a1a08", 1);
      return s;
    };
    FSH.m_cal = function () {
      var inn =
        ln("M22 17Q36 12 52 16", "#14141a", 3.2) +
        ln("M36 10L38 40", "#14141a", 3) +
        ln("M26 28Q38 34 54 26", "#14141a", 2.6) +
        ln("M52 14Q60 26 54 36", "#14141a", 3.2) +
        ln("M62 20L70 26", "#14141a", 2.4);
      [
        [24, 36, 1.4],
        [64, 38, 1.1],
        [18, 22, 1],
      ].forEach(function (p) {
        inn += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + p[2] + '" fill="#14141a"/>';
      });
      var pre =
        ln("M30 13Q38 0 52 10", "#14141a", 2.6, ' opacity=".75"') +
        ln("M34 37Q44 52 56 40", "#14141a", 2.4, ' opacity=".7"') +
        ln("M18 25Q8 16 2 18M18 27Q8 36 2 34", "#14141a", 2.2);
      var post =
        '<rect x="64" y="31" width="8" height="8" fill="#d8281c" opacity=".92"/><path d="M66 33h4M68 33v5" stroke="#fff" stroke-width="1"/>';
      return BF(
        "cal",
        { b: "#fcfaf2", b2: "#e8e0cc", f: "#14141a", tl: "none", cx: 46, rx: 26, ry: 14, pcc: "#14141a" },
        inn,
        pre,
        post,
      );
    };
    /* ===== real fish helpers ===== */
    FSH.m_ver = function () {
      var s = "<defs>" + RG("vrG", "#e8ffff", "#9ad8e0") + "</defs>";
      s +=
        pth("M26 25L10 12Q14 25 10 38Z", "#cfeef0", ' opacity=".55" stroke="#8ac8d0" stroke-width=".6"') +
        pth("M38 12Q46 2 56 11Z", "#cfeef0", ' opacity=".5" stroke="#8ac8d0" stroke-width=".6"');
      s +=
        '<ellipse cx="48" cy="25" rx="26" ry="13" fill="#d8f6f8" opacity=".38" stroke="#8ac8d0" stroke-width="1"/><ellipse cx="46" cy="19" rx="15" ry="2.6" fill="#fff" opacity=".5"/>';
      s += ln("M24 25Q46 23 66 25", "#6a7a8a", 1.1, ' opacity=".85"');
      for (var i = 0; i < 9; i++)
        s += ln("M" + (28 + i * 4) + " 23L" + (28 + i * 4) + " 27", "#6a7a8a", 0.6, ' opacity=".7"');
      s +=
        '<ellipse cx="56" cy="30" rx="4" ry="2.6" fill="#8a6a5a" opacity=".6"/><ellipse cx="62" cy="21" rx="3" ry="2" fill="#d8b8a0" opacity=".6"/>' +
        E(66, 22, 2.6) +
        ln("M54 12Q52 25 54 38", "#8ac8d0", 0.7, ' opacity=".6"');
      return s;
    };
    FSH.m_lio = function () {
      var s = "<defs>" + LG("liB", "#e8402a", "#7a1a10", 1) + "</defs>",
        i;
      for (i = 0; i < 9; i++) {
        var a = rot(-170 + i * 17),
          x1 = 34 + Math.cos(a) * 6,
          y1 = 24 + Math.sin(a) * 4,
          x2 = 34 + Math.cos(a) * (30 + (i % 2) * 3),
          y2 = 22 + Math.sin(a) * (26 + (i % 2) * 3);
        s += ln(
          "M" + x1.toFixed(1) + " " + y1.toFixed(1) + "L" + x2.toFixed(1) + " " + y2.toFixed(1),
          i % 2 ? "#fff" : "#c82a1a",
          1.5,
        );
      }
      s += pth("M22 24Q34 -4 66 14Q40 12 22 24Z", "#f4a090", ' opacity=".35"');
      for (i = 0; i < 9; i++) {
        var b = rot(150 - i * 13),
          x3 = 50 + Math.cos(b) * 34,
          y3 = 32 + Math.sin(b) * -4 + i * 2.2;
        s += ln(
          "M52 31L" + x3.toFixed(1) + " " + Math.min(54, y3 + 8).toFixed(1),
          i % 2 ? "#fff" : "#c82a1a",
          1.3,
          ' opacity=".9"',
        );
      }
      s += pth("M24 25L8 16Q10 25 8 34Z", "#e8402a", ' stroke="#fff" stroke-width=".6"');
      s += '<ellipse cx="46" cy="27" rx="25" ry="12" fill="url(#liB)"/>';
      for (i = 0; i < 6; i++)
        s +=
          '<rect x="' +
          (26 + i * 7.5) +
          '" y="15" width="2.6" height="24" fill="#fff" opacity=".85" transform="skewX(-8)"/>';
      s +=
        '<ellipse cx="44" cy="22" rx="14" ry="2.4" fill="#fff" opacity=".18"/>' +
        E(62, 24, 3) +
        ln("M60 16L56 8M64 16L67 9", "#c82a1a", 1.4) +
        pth("M66 26L76 28L66 31Z", "#c82a1a");
      return s;
    };
    /* decor wrapper on top of pf */
    var RW = {
      wen: function (a, s, n, o) {
        return "";
      },
      koi: function () {
        return "";
      },
    };
    FSH.mx = function (e) {
      var n = e.bl || 24,
        o = e.o || 13,
        bo = e.bo || 1,
        a = A,
        s = S,
        cy = s + ((bo - 1) * o) / 2,
        ry = (o * (1 + bo)) / 2,
        id = "mxc" + ++MN,
        d = "",
        base = FSH.pf(e);
      d +=
        '<defs><clipPath id="' +
        id +
        '"><ellipse cx="' +
        a +
        '" cy="' +
        cy +
        '" rx="' +
        n +
        '" ry="' +
        ry +
        '"/></clipPath></defs><g clip-path="url(#' +
        id +
        ')">';
      (e.pt || []).forEach(function (p) {
        d +=
          '<ellipse cx="' +
          (a + p[0] * n) +
          '" cy="' +
          (s + p[1] * o) +
          '" rx="' +
          p[2] * n +
          '" ry="' +
          p[3] * o +
          '" fill="' +
          p[4] +
          '"' +
          (p[5] ? ' opacity="' + p[5] + '"' : "") +
          "/>";
      });
      (e.bars || []).forEach(function (p) {
        d +=
          '<rect x="' +
          (a + p[0] * n - p[1] / 2) +
          '" y="0" width="' +
          p[1] +
          '" height="60" fill="' +
          p[2] +
          '"' +
          (p[3] ? ' opacity="' + p[3] + '"' : "") +
          "/>";
      });
      (e.dots || []).forEach(function (p) {
        d +=
          '<circle cx="' +
          (a + p[0] * n) +
          '" cy="' +
          (s + p[1] * o) +
          '" r="' +
          p[2] +
          '" fill="' +
          (p[3] || e.dc || "#fff") +
          '"/>';
      });
      if (e.rw && RW[e.rw]) d += RW[e.rw](a, s, n, o, e);
      d += "</g>";
      if (e.rw2 && RW[e.rw2]) d += RW[e.rw2](a, s, n, o, e);
      if (e.ey !== 0) d += E(a + 0.56 * n, s - (e.eh || 0.2) * o, e.ey || 3.3);
      return base + d;
    };
    RW.mand = function (a, s, n, o) {
      var r = "";
      for (var i = 0; i < 4; i++)
        r += ln(
          "M" +
            (a - n + 3) +
            " " +
            (s - o * 0.6 + i * o * 0.42) +
            "q" +
            n * 0.3 +
            " -5 " +
            n * 0.5 +
            " 0t" +
            n * 0.5 +
            " 0t" +
            n * 0.5 +
            " 0",
          "#ff8a1a",
          2.2,
        );
      r +=
        '<circle cx="' +
        (a + n * 0.3) +
        '" cy="' +
        (s + o * 0.3) +
        '" r="2" fill="#ff8a1a"/><circle cx="' +
        (a - n * 0.2) +
        '" cy="' +
        (s - o * 0.3) +
        '" r="1.6" fill="#ffd040"/>';
      return r;
    };
    RW.ayu = function (a, s, n, o) {
      return (
        '<ellipse cx="' +
        (a + n * 0.2) +
        '" cy="' +
        (s - o * 0.1) +
        '" rx="4" ry="' +
        o * 0.6 +
        '" fill="#f2c830"/>'
      );
    };
    RW.mask = function (a, s, n, o) {
      return (
        '<rect x="' +
        (a + n * 0.34) +
        '" y="0" width="' +
        n * 0.3 +
        '" height="60" fill="#0e1a4a" opacity=".92"/>'
      );
    };
    RW.sacs = function (a, s, n, o) {
      return (
        '<ellipse cx="' +
        (a + n * 0.52) +
        '" cy="' +
        (s + o * 0.62) +
        '" rx="5.4" ry="6.4" fill="#f0f8ff" opacity=".8" stroke="#bcd0e8" stroke-width=".8"/><ellipse cx="' +
        (a + n * 0.52 - 2) +
        '" cy="' +
        (s + o * 0.62 - 2) +
        '" rx="1.8" ry="1.2" fill="#fff"/>'
      );
    };
    RW.wen = function (a, s, n, o, e) {
      var r = "";
      [
        [0.46, -0.95, 6],
        [0.7, -0.7, 5.4],
        [0.22, -0.85, 5],
        [0.58, -0.4, 4.4],
      ].forEach(function (p) {
        r +=
          '<circle cx="' +
          (a + p[0] * n) +
          '" cy="' +
          (s + p[1] * o) +
          '" r="' +
          p[2] +
          '" fill="' +
          (e.wc || "#ff9a3a") +
          '"/><circle cx="' +
          (a + p[0] * n - 1.4) +
          '" cy="' +
          (s + p[1] * o - 1.6) +
          '" r="1.5" fill="#fff" opacity=".45"/>';
      });
      return r;
    };
    RW.pearl = function (a, s, n, o) {
      var r = "";
      for (var i = 0; i < 4; i++)
        for (var j = 0; j < 7; j++)
          r +=
            '<circle cx="' +
            (a - n * 0.8 + j * n * 0.27 + (i % 2) * 4) +
            '" cy="' +
            (s - o * 0.7 + i * o * 0.5) +
            '" r="1.9" fill="#fff" opacity=".7"/>';
      return r;
    };
    RW.galx = function (a, s, n, o) {
      var r = "";
      for (var i = 0; i < 22; i++)
        r +=
          '<circle cx="' +
          (a - n * 0.8 + (((i * 37) % 100) / 100) * n * 1.6) +
          '" cy="' +
          (s - o * 0.8 + (((i * 53) % 100) / 100) * o * 1.6) +
          '" r="' +
          (0.6 + (i % 3) * 0.35) +
          '" fill="#ffe27a"/>';
      return r;
    };
    RW.perl = function (a, s, n, o) {
      var r = "";
      for (var i = 0; i < 5; i++)
        for (var j = 0; j < 9; j++)
          r +=
            '<circle cx="' +
            (a - n * 0.85 + j * n * 0.2 + (i % 2) * 3) +
            '" cy="' +
            (s - o * 0.8 + i * o * 0.4) +
            '" r="1.3" fill="#fff" opacity=".8"/>';
      return r;
    };
    RW.eyesT = function (a, s, n, o) {
      return (
        '<circle cx="' +
        (a + n * 0.5) +
        '" cy="' +
        (s - o - 1) +
        '" r="5" fill="#8a8a5a"/><circle cx="' +
        (a + n * 0.5) +
        '" cy="' +
        (s - o - 1.5) +
        '" r="3.2" fill="#fff"/><circle cx="' +
        (a + n * 0.5 + 0.6) +
        '" cy="' +
        (s - o - 1.5) +
        '" r="1.8" fill="#1b1b2f"/><circle cx="' +
        (a + n * 0.28) +
        '" cy="' +
        (s - o) +
        '" r="4.2" fill="#8a8a5a"/><circle cx="' +
        (a + n * 0.28) +
        '" cy="' +
        (s - o - 0.4) +
        '" r="2.6" fill="#fff"/><circle cx="' +
        (a + n * 0.28 + 0.5) +
        '" cy="' +
        (s - o - 0.4) +
        '" r="1.4" fill="#1b1b2f"/>'
      );
    };
    RW.drops = function (a, s, n, o) {
      var r = "";
      [
        [2, -3, 2],
        [6, -8, 1.8],
        [10, -12, 1.5],
        [14, -14, 1.2],
      ].forEach(function (p) {
        r +=
          '<circle cx="' +
          (a + n + p[0] + 1) +
          '" cy="' +
          (s + p[1]) +
          '" r="' +
          p[2] +
          '" fill="#bfe8ff" opacity=".95"/>';
      });
      return r;
    };
    RW.telesc = function (a, s, n, o) {
      return (
        '<circle cx="' +
        (a + n * 0.56) +
        '" cy="' +
        (s - o * 0.2) +
        '" r="6.2" fill="#2a2a34" stroke="#555566" stroke-width=".8"/>'
      );
    };
    /* ===== data ===== */
    var Z = function (id, r, n, b, f, sz, sh, x) {
      var o = { id: id, r: r, n: n, b: b, f: f, sz: sz, sh: sh, wd: 2 };
      for (var k in x) o[k] = x[k];
      return o;
    };
    var N = [
      Z("m01", "e", "Orange tendre et succulente", "#ffa43a", "#ffcc6a", 1.35, "m_lan"),
      Z("m02", "c", "Bamboonos", "#8ad060", "#4a9a3a", 1.15, "m_bam"),
      Z("m03", "r", "Li ventail", "#e8382a", "#ffc840", 1.35, "m_van"),
      Z("m04", "u", "Li gami", "#f6ecd6", "#d9c8a2", 1.2, "m_ori"),
      Z("m05", "r", "Li chi", "#f6f9ff", "#2f58c8", 1.25, "m_chi"),
      Z("m06", "e", "Li pagode", "#d8281c", "#e8a830", 1.4, "m_pag"),
      Z("m07", "c", "Pink blossom", "#ffd0e0", "#ffb6cc", 1.1, "m_pink"),
      Z("m08", "u", "Lotus", "#ffc4d8", "#ff98bc", 1.25, "m_lot"),
      Z("m09", "u", "Fifounet", "#ea1c30", "#14141c", 1.15, "m_lac"),
      Z("m10", "c", "Vague Lah", "#2f74e0", "#8ac0ff", 1.1, "m_vag"),
      Z("m11", "e", "Dragounet", "#5ad0b8", "#bff6e8", 1.4, "m_dra"),
      Z("m12", "r", "Jade", "#8ee8b8", "#b8f4d4", 1.2, "m_jad"),
      Z("m13", "c", "Daruma qui fait peur", "#ea2a2c", "#fff4e8", 1.1, "m_dar"),
      Z("m14", "u", "Sumie", "#cfcfd0", "#2a2a2e", 1.2, "m_sum"),
      Z("m15", "r", "Karate fish", "#ee6a90", "#f8a8c0", 1.3, "m_kim"),
      Z("m16", "e", "Majefox", "#f08a2a", "#fff6e8", 1.4, "m_kit"),
      Z("m17", "c", "Bamboum", "#d8281c", "#f4c040", 1.15, "m_tam"),
      Z("m18", "r", "Gru", "#ffffff", "#e8201e", 1.25, "m_gru"),
      Z("m19", "u", "Arche des marais", "#ff7a30", "#d8301a", 1.2, "m_tor"),
      Z("m20", "r", "Nighsky", "#c4cef2", "#e8ecff", 1.25, "m_lun"),
      Z("m21", "u", "Bonsaï", "#4a7a3a", "#5a3a1e", 1.2, "m_bon"),
      Z("m22", "c", "Papeterie", "#fffaec", "#efe2c4", 1.1, "m_pap"),
      Z("m23", "c", "Matcha", "#a6dc52", "#d8b878", 1.1, "m_mat"),
      Z("m24", "e", "Bouddha cola", "#fad25a", "#f4c040", 1.4, "m_bud"),
      Z("m25", "r", "Samouraï destructeur", "#c41e28", "#14141c", 1.3, "m_sam"),
      Z("m26", "u", "Ninjago", "#26263a", "#d8281c", 1.15, "m_nin"),
      Z("m27", "u", "Fujintain", "#4a82d8", "#ffffff", 1.25, "m_fuj"),
      Z("m28", "r", "Feu magestique", "#1c2260", "#ffd84a", 1.3, "m_fea"),
      Z("m29", "c", "Pivono", "#ff6aa8", "#ffbcd8", 1.15, "m_piv"),
      Z("m30", "u", "Ding ding ding", "#bfe8ff", "#e8c860", 1.2, "m_cli"),
      Z("m31", "e", "Phénix du fleuve", "#ff5a1a", "#ffc030", 1.4, "m_phe"),
      Z("m32", "c", "Érable de feu", "#f27a22", "#e86a1a", 1.15, "m_ery"),
      Z("m33", "u", "Calliguencendre", "#fcfaf2", "#14141a", 1.2, "m_cal"),
    ];
    function R(id, r, n, b, f, sz, x, sh) {
      N.push(Z(id, r, n, b, f, sz, sh || "pf", x));
    }
    function GD(k, c) {
      var a = [];
      for (var i = 0; i < k; i++)
        a.push([
          (((i * 37) % 100) / 100) * 1.5 - 0.75,
          (((i * 53) % 100) / 100) * 1.4 - 0.7,
          0.7 + (i % 3) * 0.3,
          c,
        ]);
      return a;
    }
    R("m34", "r", "Combattant", "#d01a3a", "#ff2a5a", 1.2, {
      c2: "#5a1a7a",
      c1: "#2a3aa8",
      pat: ["sh"],
      bl: 18,
      o: 10,
      dr: "sail",
      tl: "veil",
      tr: 19,
      th: 19,
      an: "long",
      df: "#ff4a7a",
      gl: "#ff6a9a",
    });
    R(
      "m35",
      "u",
      "Koï Sanke",
      "#f6f2ea",
      "#f2eee6",
      1.2,
      {
        c2: "#e8e2d6",
        pat: ["sh"],
        bl: 27,
        o: 13,
        dr: "low",
        tl: "veil",
        wh: 2,
        wl: 7,
        pt: [
          [-0.45, -0.2, 0.28, 0.45, "#e0301e"],
          [0.1, 0.15, 0.3, 0.4, "#e0301e"],
          [0.5, -0.3, 0.2, 0.4, "#e0301e"],
        ],
        dots: [
          [-0.2, 0.3, 1.8, "#1a1a1a"],
          [0.3, -0.35, 1.6, "#1a1a1a"],
          [-0.65, 0.2, 1.5, "#1a1a1a"],
        ],
      },
      "mx",
    );
    R(
      "m36",
      "u",
      "Koï Showa",
      "#16161c",
      "#d8d4cc",
      1.25,
      {
        c2: "#2a2a34",
        pat: ["sh"],
        bl: 27,
        o: 13,
        dr: "low",
        tl: "veil",
        wh: 2,
        wl: 7,
        pt: [
          [-0.4, 0.1, 0.3, 0.8, "#e8301e"],
          [0.2, -0.1, 0.3, 0.85, "#e8301e"],
          [0.58, 0, 0.22, 0.9, "#f8f4ea"],
          [-0.78, 0, 0.12, 0.7, "#f8f4ea"],
        ],
      },
      "mx",
    );
    R(
      "m37",
      "r",
      "Koï Tancho",
      "#fbf8f2",
      "#f6f2ea",
      1.25,
      {
        c2: "#ece6da",
        pat: ["sh"],
        bl: 27,
        o: 13,
        dr: "low",
        tl: "veil",
        wh: 2,
        wl: 7,
        pt: [[0.52, -0.3, 0.17, 0.45, "#e8201e"]],
      },
      "mx",
    );
    R(
      "m38",
      "u",
      "Koï Papillon",
      "#e8e4dc",
      "#f4f0e8",
      1.3,
      {
        c2: "#d8d4cc",
        pat: ["sh"],
        bl: 25,
        o: 12,
        dr: "sail",
        tl: "veil",
        tr: 19,
        th: 19,
        an: "long",
        pr: 11,
        wh: 2,
        wl: 9,
        pt: [
          [-0.2, -0.2, 0.3, 0.4, "#f08a2a"],
          [0.3, 0.2, 0.2, 0.4, "#f08a2a"],
        ],
      },
      "mx",
    );
    R(
      "m39",
      "r",
      "Koï Goshiki",
      "#7a8aa0",
      "#9aa8bc",
      1.25,
      {
        c2: "#aab4c4",
        pat: ["sc", "sh"],
        bl: 27,
        o: 13,
        dr: "low",
        tl: "veil",
        wh: 2,
        wl: 7,
        pt: [
          [-0.5, -0.2, 0.3, 0.5, "#dce0e8"],
          [0, 0.2, 0.3, 0.5, "#e0301e"],
          [0.35, -0.25, 0.25, 0.4, "#2a2a34"],
          [0.62, 0.1, 0.18, 0.5, "#dce0e8"],
          [-0.2, 0.5, 0.2, 0.3, "#e8a030"],
        ],
      },
      "mx",
    );
    R("m40", "r", "Koï Kujaku", "#f6f2e8", "#f4eedc", 1.3, {
      c2: "#e8dec8",
      c1: "#1a1a1a",
      sp: "#ffb030",
      pat: ["rs", "sh"],
      bl: 27,
      o: 13,
      dr: "low",
      tl: "veil",
      wh: 2,
      wl: 7,
      gl: "#fff2c0",
    });
    R(
      "m41",
      "r",
      "Koï Utsuri",
      "#14141a",
      "#e8d8a0",
      1.25,
      {
        c2: "#2a2a34",
        pat: ["sh"],
        bl: 27,
        o: 13,
        dr: "low",
        tl: "veil",
        wh: 2,
        wl: 7,
        pt: [
          [-0.3, 0, 0.3, 0.8, "#f0b030"],
          [0.3, -0.1, 0.3, 0.85, "#f0b030"],
          [0.7, 0, 0.12, 0.5, "#f0b030"],
        ],
      },
      "mx",
    );
    R(
      "m42",
      "c",
      "Poisson rouge Tête de lion",
      "#ff7a1a",
      "#ff9a4a",
      1.1,
      { c2: "#ffd0a0", pat: ["sc", "sh"], bl: 15, o: 14, dr: "none", tl: "veil", tr: 15, rw: "wen" },
      "mx",
    );
    R(
      "m43",
      "u",
      "Poisson rouge Œil-bulle",
      "#ffb830",
      "#ffd060",
      1.1,
      { c2: "#fff0b0", pat: ["sh"], bl: 16, o: 12, dr: "none", tl: "veil", tr: 15, rw2: "sacs" },
      "mx",
    );
    R(
      "m44",
      "c",
      "Poisson rouge Perle",
      "#ffe0a0",
      "#ffc070",
      1.05,
      { c2: "#ffb060", pat: ["sh"], bl: 14, o: 15, dr: "low", tl: "veil", tr: 15, rw: "perl" },
      "mx",
    );
    R(
      "m45",
      "c",
      "Shubunkin",
      "#a8c8ee",
      "#c8dcf8",
      1.1,
      {
        c2: "#dcecfc",
        pat: ["sh"],
        bl: 20,
        o: 12,
        dr: "low",
        tl: "veil",
        tr: 18,
        pt: [
          [-0.3, -0.1, 0.25, 0.5, "#e8402a"],
          [0.1, 0.2, 0.2, 0.4, "#2a2a34"],
          [0.4, -0.2, 0.2, 0.4, "#f0a030"],
          [-0.6, 0.1, 0.12, 0.4, "#2a2a34"],
        ],
      },
      "mx",
    );
    R(
      "m46",
      "c",
      "Poisson rouge Comète",
      "#fbf6ee",
      "#ff6a3a",
      1,
      {
        c2: "#ffe8d8",
        pat: ["sh"],
        bl: 24,
        o: 9,
        dr: "low",
        tl: "fork",
        tr: 22,
        th: 15,
        pt: [
          [0.55, 0, 0.35, 1, "#e8301e"],
          [-0.5, 0.1, 0.1, 0.6, "#e8301e"],
        ],
      },
      "mx",
    );
    R(
      "m47",
      "c",
      "Poisson rouge Télescope",
      "#1a1a22",
      "#3a3a4a",
      1.15,
      { c2: "#2a2a34", pat: ["sh"], bl: 17, o: 13, dr: "low", tl: "veil", tr: 18, ey: 5, rw2: "telesc" },
      "mx",
    );
    R("m48", "c", "Gourami nain", "#3a7ad8", "#e8402a", 0.95, {
      c2: "#7aa8f0",
      c1: "#e8402a",
      pat: ["LS", "sh"],
      bl: 17,
      o: 12,
      dr: "low",
      tl: "round",
      an: "long",
    });
    R("m49", "c", "Gourami baiser", "#f8a8b8", "#f488a0", 1.1, {
      c2: "#ffe0e8",
      pat: ["sh"],
      bl: 20,
      o: 15,
      dr: "low",
      tl: "round",
      pd: 1,
    });
    R(
      "m50",
      "u",
      "Gourami perlé",
      "#8a98a8",
      "#a0acba",
      1.1,
      {
        c2: "#d8dce8",
        c1: "#2a2a3a",
        pat: ["H", "sh"],
        bl: 21,
        o: 13,
        dr: "long",
        tl: "round",
        an: "long",
        rw: "perl",
      },
      "mx",
    );
    R("m51", "c", "Loche coolie", "#e8c070", "#d8b060", 1.05, {
      c2: "#f4e0a8",
      c1: "#4a2a1a",
      pat: ["v", "sh"],
      bl: 30,
      o: 5,
      dr: "long",
      tl: "round",
      tr: 8,
      wh: 6,
      wl: 6,
      an: 0,
    });
    R(
      "m52",
      "c",
      "Danio perlé galaxie",
      "#2a3a78",
      "#ff8030",
      0.85,
      { c2: "#3a4a98", pat: ["sh"], bl: 16, o: 8, dr: "low", tl: "fork", rw: "galx" },
      "mx",
    );
    R("m53", "c", "Barbus de Sumatra", "#e8b040", "#e8402a", 1, {
      c2: "#f8e0a0",
      c1: "#1a1a1a",
      pat: ["v", "sh"],
      bl: 19,
      o: 14,
      dr: "low",
      tl: "fork",
    });
    R(
      "m54",
      "c",
      "Barbus cinq bandes",
      "#dcd070",
      "#e8d880",
      1,
      {
        c2: "#f4f0b0",
        pat: ["sh"],
        bl: 20,
        o: 11,
        dr: "low",
        tl: "fork",
        bars: [
          [-0.55, 2.4, "#3a2a1a"],
          [-0.25, 2.4, "#3a2a1a"],
          [0.05, 2.4, "#3a2a1a"],
          [0.35, 2.4, "#3a2a1a"],
          [0.62, 2.4, "#3a2a1a"],
        ],
        pt: [[0.9, 0.1, 0.2, 0.5, "#e8402a"]],
      },
      "mx",
    );
    R(
      "m55",
      "c",
      "Botia clown",
      "#ff8a1a",
      "#e83a1a",
      1.05,
      {
        c2: "#ffc070",
        pat: ["sh"],
        bl: 22,
        o: 11,
        dr: "low",
        tl: "fork",
        wh: 4,
        wl: 5,
        bars: [
          [-0.5, 6, "#1a1a1a"],
          [0.05, 7, "#1a1a1a"],
          [0.62, 5, "#1a1a1a"],
        ],
      },
      "mx",
    );
    R("m56", "c", "Médaka", "#f6e8a0", "#fff8d0", 0.7, {
      c2: "#fffbe8",
      pat: ["sh"],
      bl: 13,
      o: 6,
      dr: "back",
      tl: "fork",
      ey: 3.6,
    });
    R("m57", "c", "Tétraodon nain", "#e0c838", "#f0dc58", 0.75, {
      c2: "#fff4a0",
      sp: "#5a4a1a",
      pat: ["sp", "sh"],
      bl: 12,
      o: 11,
      dr: "low",
      tl: "round",
      tr: 7,
    });
    R(
      "m58",
      "c",
      "Poisson-clown",
      "#ff7a1a",
      "#ff9a3a",
      0.9,
      {
        c2: "#ffc070",
        pat: ["sh"],
        bl: 17,
        o: 12,
        dr: "low",
        tl: "round",
        bars: [
          [0.38, 5, "#fff"],
          [-0.12, 5, "#fff"],
          [-0.72, 4, "#fff"],
        ],
        raw: 0,
      },
      "mx",
    );
    R("m59", "u", "Poisson-verre indien", "#d8f6f8", "#cfeef0", 1, {}, "m_ver");
    R("m60", "u", "Poisson-arc-en-ciel de Boeseman", "#f08a20", "#f8c040", 1.05, {
      c2: "#ffd070",
      c1: "#4a6ad0",
      pat: ["hd", "sh"],
      bl: 23,
      o: 12,
      dr: "low",
      tl: "fork",
    });
    R("m61", "u", "Saumon masou", "#7a9a96", "#8aaaa6", 1.15, {
      c2: "#f4dcd4",
      c1: "#3a4a48",
      sp: "#e86a7a",
      pat: ["dk", "sp", "sh"],
      bl: 25,
      o: 11,
      dr: "low",
      tl: "fork",
      ad: 1,
    });
    R(
      "m62",
      "u",
      "Ayu",
      "#8a9a58",
      "#aab868",
      1.1,
      { c2: "#f0f0c0", sp: "#3a3a2a", pat: ["sh"], bl: 24, o: 9, dr: "low", tl: "fork", ad: 1, rw: "ayu" },
      "mx",
    );
    R(
      "m63",
      "u",
      "Périophtalme",
      "#8a8a5a",
      "#6a8aa0",
      1,
      {
        c2: "#c8c8a0",
        sp: "#3a8ae8",
        pat: ["sp", "sh"],
        bl: 23,
        o: 9,
        dr: "sail",
        dsp: "#3a8ae8",
        tl: "round",
        pr: 9,
        ey: 0,
        rw2: "eyesT",
      },
      "mx",
    );
    R("m64", "u", "Anguille japonaise", "#4a4a3a", "#5a5a4a", 1.15, {
      c2: "#d8d0a8",
      pat: ["sh"],
      bl: 34,
      o: 4.5,
      dr: "long",
      tl: "round",
      tr: 8,
      an: "long",
      pr: 4,
    });
    R("m65", "u", "Hippocampe", "#e8b040", "#f4d070", 1, {}, "zv_hippo");
    R("m66", "u", "Requin-iridescent", "#8a9aac", "#7a8aa0", 1.25, {
      c2: "#dce6f0",
      pat: ["sh"],
      bl: 27,
      o: 11,
      dr: "low",
      tl: "fork",
      tr: 18,
      wh: 4,
      wl: 8,
      gl: "#bfe8ff",
    });
    R(
      "m67",
      "u",
      "Poisson-ange empereur",
      "#1a3a9a",
      "#f8d838",
      1.2,
      {
        c2: "#3a5ac8",
        c1: "#f8d838",
        pat: ["LS", "sh"],
        bl: 17,
        o: 17,
        dr: "sail",
        tl: "round",
        an: "long",
        rw: "mask",
      },
      "mx",
    );
    R(
      "m68",
      "r",
      "Poisson-archer",
      "#d8d4a0",
      "#c8c490",
      1.1,
      {
        c2: "#f4f0c8",
        c1: "#2a2a2a",
        pat: ["sa", "sh"],
        bl: 20,
        o: 13,
        dr: "back",
        tl: "round",
        rw2: "drops",
      },
      "mx",
    );
    R(
      "m69",
      "r",
      "Poisson-mandarin",
      "#1a9ac8",
      "#2a6aa8",
      1.1,
      {
        c2: "#8ad8e8",
        pat: ["sh"],
        bl: 17,
        o: 11,
        dr: "sail",
        df: "#2a6aa8",
        tl: "round",
        pr: 9,
        rw: "mand",
      },
      "mx",
    );
    R("m70", "r", "Poisson-lion", "#e8402a", "#c82a1a", 1.3, {}, "m_lio");
    R("m71", "r", "Fugu", "#d8c890", "#c8b880", 1.15, {
      c2: "#fff4d8",
      sp: "#6a5a3a",
      pat: ["sp", "sh"],
      bl: 19,
      o: 18,
      dr: "two",
      tl: "round",
      tr: 11,
      sw: "#1a1a2a",
      swr: "#fff",
      te: 1,
      eh: 0.15,
    });
    R("m72", "r", "Poisson-tête-de-serpent", "#6a5a38", "#7a6a48", 1.4, {
      c2: "#c8b888",
      c1: "#2a2218",
      sp: "#2a2218",
      pat: ["sc", "sp", "sh"],
      bl: 31,
      o: 9,
      dr: "long",
      an: "long",
      tl: "round",
      tr: 9,
      te: 1,
    });
    R("m73", "e", "Arowana rouge", "#d02a1a", "#e8402a", 1.4, {
      c2: "#ff9a40",
      pat: ["sc", "sh"],
      bl: 30,
      o: 10,
      dr: "long",
      tl: "veil",
      an: "long",
      wh: 2,
      wl: 10,
      gl: "#ffb040",
      st: "#ffd860",
    });
    R("m74", "e", "Silure géant du Mékong", "#6a7a8a", "#7a8a9a", 1.5, {
      c2: "#d8e0e8",
      pat: ["sh"],
      bl: 31,
      o: 15,
      dr: "low",
      tl: "fork",
      tr: 20,
      wh: 4,
      wl: 12,
      gl: "#bde0ff",
      st: "#e8f4ff",
    });
    N.forEach(function (x) {
      PEF.push(x);
    });
  } catch (err) {
    try {
      console.error("m2", err);
    } catch (e) {}
  }
})();
