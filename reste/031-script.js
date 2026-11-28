(() => {
  if (typeof AQPT !== "object") return;
  const F = (x) => (+x).toFixed(1);
  const RG = (id, s) =>
    `<radialGradient id="${id}" cx=".36" cy=".3" r=".75">${s.map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}"${a != null ? ` stop-opacity="${a}"` : ""}/>`).join("")}</radialGradient>`;
  const LG = (id, a, b) =>
    `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
  /* orb colours per plant: [light, mid, dark, glow] */
  const OC = {
    ulve: ["#d8fff4", "#3fe0c4", "#0f8a86", "#7ffff0"],
    caulerpa: ["#e8f6ff", "#4aa8ff", "#1a4ac8", "#8fd0ff"],
    halimeda: ["#ffe8f4", "#ff5aa8", "#b01a6a", "#ff9ad0"],
    zostere: ["#f4ffd8", "#9cff4a", "#3a9a1a", "#d0ff8a"],
    dulse: ["#f6e8ff", "#b46aff", "#5a1ab0", "#d8a8ff"],
    sargasse: ["#fff8d8", "#ffc24a", "#c0700a", "#ffe08a"],
    posidonie: ["#e8fbff", "#5ff0ff", "#1a8ab8", "#a8f8ff"],
    laminaire: ["#ffe8f0", "#ff7a9a", "#b01a4a", "#ffb0c8"],
  };
  const P2 = (x, y) => F(x) + " " + F(y);
  const lf = (x0, y0, x1, y1, w, b, fill, st, op) => {
    const dx = x1 - x0,
      dy = y1 - y0,
      l = Math.hypot(dx, dy) || 1,
      nx = -dy / l,
      ny = dx / l,
      c = (t, k) => [x0 + dx * t + nx * k, y0 + dy * t + ny * k];
    const a1 = c(0.25, w * 1.1 + b),
      a2 = c(0.72, w * 0.85 + b),
      b2 = c(0.72, -(w * 0.85) + b),
      b1 = c(0.25, -(w * 1.1) + b),
      m = c(0.5, b * 1.1);
    return (
      `<path d="M${P2(x0, y0)}C${P2(...a1)} ${P2(...a2)} ${P2(x1, y1)}C${P2(...b2)} ${P2(...b1)} ${P2(x0, y0)}Z" fill="${fill}" ${op ? `opacity="${op}"` : ""}/>` +
      (st
        ? `<path d="M${P2(x0, y0)}Q${P2(...m)} ${P2(x1 - dx * 0.08, y1 - dy * 0.08)}" stroke="${st}" stroke-width=".7" fill="none" opacity=".55" stroke-linecap="round"/>`
        : "")
    );
  };
  const cx = (x, y, r, n, col, vein, front) => {
    let b = "",
      f = "";
    n = Math.max(n, 4);
    for (let k = 0; k < n; k++) {
      const a = (-1 + (2 * k) / (n - 1)) * 1.15,
        L = r * (Math.abs(a) > 0.5 ? 1.05 - 0.15 * Math.abs(a) : 0.62),
        tx = x + Math.sin(a) * L * 1.15,
        ty = y + r * 0.75 - Math.cos(a) * L,
        s = lf(x, y + r * 0.95, tx, ty, r * 0.32, a * 2, col, vein);
      Math.abs(a) > 0.5 ? (b += s) : (f += s);
    }
    return front ? f : b;
  };
  const D = {
    ulve: (y) => {
      const G = `<defs>${LG("u_l", "#9ff5cf", "#2a9a74")}${LG("u_d", "#6fe0b0", "#1a7a5e")}</defs>`;
      let a = G;
      [
        [26, y - 36, -14],
        [38, y - 62, -8],
        [50, y - 48, 0],
        [62, y - 70, 8],
        [76, y - 40, 14],
      ].forEach(([tx, ty, b], k) => {
        a += `<path d="${aqpRib(50, y, 50 + (tx - 50) * 0.3, y - (y - ty) * 0.55, tx, ty, { a: 2.4, b: 5, g: 9, r: 0.22, f: 20, v: 2 })}" fill="url(#${k % 2 ? "u_l" : "u_d"})" opacity=".95"/><path d="M50 ${y}Q${F(50 + (tx - 50) * 0.3)} ${F(y - (y - ty) * 0.55)} ${F(tx)} ${F(ty)}" stroke="#d8fff0" stroke-width=".7" fill="none" opacity=".5"/>`;
      });
      a += `<path d="M50 ${y}C46 ${y - 30} 38 ${y - 52} 34 ${y - 64}" stroke="#2a9a74" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M50 ${y}C54 ${y - 34} 62 ${y - 58} 65 ${y - 72}" stroke="#2a9a74" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
      const S = [
        [34, y - 80, 16],
        [65, y - 88, 17],
      ];
      return {
        base: a + S.map(([x, yy, r]) => cx(x, yy, r, 5, "url(#u_l)", "#e0fff2", 0)).join(""),
        front: S.map(([x, yy, r]) => cx(x, yy, r, 5, "url(#u_l)", "#e0fff2", 1)).join(""),
        sway: "",
        seats: S,
      };
    },
    caulerpa: (y) => {
      let a = `<defs>${LG("c_t", "#b8f07a", "#3a8a3a")}${RG("c_p", [
        [0, "#f0ffd8"],
        [0.5, "#9ae05a"],
        [1, "#3a8a3a"],
      ])}</defs><path d="M8 ${y}C30 ${y - 5} 70 ${y - 3} 92 ${y - 1}" stroke="#4a9a44" stroke-width="3" fill="none" stroke-linecap="round"/>`;
      [
        [22, y - 58, -4],
        [50, y - 92, 0],
        [78, y - 64, 5],
      ].forEach(([tx, ty, c], k) => {
        const x0 = k === 1 ? 50 : k ? 72 : 28;
        a += `<path d="${aqpRib(x0, y - 1, x0 + c, y - (y - ty) / 2, tx, ty, { a: 1.8, b: 1.1 })}" fill="url(#c_t)"/>`;
        const n = Math.round((y - ty) / 7);
        for (let j = 1; j < n; j++) {
          const t = j / n,
            p = aqpPt(x0, y - 1, x0 + c, y - (y - ty) / 2, tx, ty, t),
            r = 3.6 - 1.4 * t,
            sd = j % 2 ? -1 : 1;
          a += `<circle cx="${F(p[0] + sd * (3 + r * 0.6))}" cy="${F(p[1] - 1)}" r="${F(r)}" fill="url(#c_p)"/><circle cx="${F(p[0] - sd * (2.5 + r * 0.5))}" cy="${F(p[1] - 4)}" r="${F(r * 0.85)}" fill="url(#c_p)"/>`;
        }
        if (k !== 1) a += `<circle cx="${F(tx)}" cy="${F(ty - 2)}" r="3.4" fill="url(#c_p)"/>`;
      });
      const S = [[50, y - 108, 21]];
      return {
        base: a + cx(50, y - 108, 21, 5, "url(#c_t)", "#e8ffd0", 0),
        front: cx(50, y - 108, 21, 5, "url(#c_t)", "#e8ffd0", 1),
        sway: "",
        seats: S,
      };
    },
    halimeda: (y) => {
      let a = `<defs>${RG("h_g", [
        [0, "#e8fbff"],
        [0.55, "#7fd8f0"],
        [1, "#2a7aa8"],
      ])}</defs>`;
      const sg = (x, yy, w, h, r) =>
        `<path d="M${F(x - w)} ${F(yy)}C${F(x - w)} ${F(yy - h * 1.2)} ${F(x + w)} ${F(yy - h * 1.2)} ${F(x + w)} ${F(yy)}C${F(x + w * 0.5)} ${F(yy - h * 0.25)} ${F(x - w * 0.5)} ${F(yy - h * 0.25)} ${F(x - w)} ${F(yy)}Z" fill="url(#h_g)" transform="rotate(${F(r)} ${F(x)} ${F(yy)})" opacity=".95"/>`;
      const ch = (x, yy, ang, n, w) => {
        let s = "";
        for (let k = 0; k < n; k++) {
          s += sg(x, yy, w, w * 0.95, ang * 57);
          x += Math.sin(ang) * w * 0.9;
          yy -= Math.cos(ang) * w * 0.9;
          w *= 0.94;
        }
        return [s, x, yy];
      };
      let r = ch(50, y, 0, 7, 8);
      a +=
        ch(46, y - 16, -0.5, 5, 6.5)[0] +
        ch(54, y - 22, 0.55, 5, 6.5)[0] +
        ch(48, y - 36, -0.75, 3, 5)[0] +
        ch(52, y - 40, 0.8, 3, 5)[0] +
        r[0];
      const S = [[r[1], r[2] - 14, 20]];
      return {
        base: a + cx(r[1], r[2] - 14, 20, 5, "url(#h_g)", "#fff", 0),
        front: cx(r[1], r[2] - 14, 20, 5, "url(#h_g)", "#fff", 1),
        sway: "",
        seats: S,
      };
    },
    zostere: (y) => {
      let a = `<defs>${LG("z_g", "#9ff0b0", "#1f6a4a")}</defs>`,
        b = "";
      [
        [30, y - 80, -10],
        [38, y - 108, -6],
        [46, y - 92, -2],
        [54, y - 118, 4],
        [60, y - 86, 8],
        [70, y - 100, 12],
        [40, y - 70, -14],
      ].forEach(([tx, ty, c], k) => {
        const p = `<path d="${aqpRib(48 + (k % 3) * 2, y, 48 + c * 0.4, y - (y - ty) * 0.6, tx, ty, { a: 2.2, b: 0.35, g: 0.6 })}" fill="url(#z_g)"/>`;
        k % 2 ? (b += p) : (a += p);
      });
      a += `<path d="${aqpRib(52, y, 58, y - 70, 70, y - 100, { a: 2, b: 1.2 })}" fill="url(#z_g)"/>`;
      const S = [[70, y - 118, 18]];
      return {
        base: a + cx(70, y - 118, 18, 3, "#5fc080", "#d8ffe0", 0),
        front: cx(70, y - 118, 18, 3, "#5fc080", "#d8ffe0", 1),
        sway: b,
        seats: S,
      };
    },
    dulse: (y) => {
      let a = `<defs>${LG("d_g", "#ffb0d8", "#9a1a5a")}${LG("d_l", "#ffd0e8", "#c03a7a")}</defs><path d="${aqpRib(50, y, 50, y - 12, 50, y - 24, { a: 3, b: 2 })}" fill="#a02a62"/>`,
        f = "";
      const S = [[50, y - 56, 21]];
      [-1.1, -0.65, -0.22, 0.22, 0.65, 1.1].forEach((t, k) => {
        const L = 42 - Math.abs(t) * 8,
          tx = 50 + Math.sin(t) * L,
          ty = y - 24 - Math.cos(t) * L,
          p = lf(50, y - 24, tx, ty, 9 - Math.abs(t) * 2, t * 3, `url(#${k % 2 ? "d_g" : "d_l"})`, "#ffe0f0");
        Math.abs(t) < 0.4 ? (f += p) : (a += p);
      });
      return { base: a, front: f.replace(/<path d/g, '<path opacity=".85" d'), sway: "", seats: S };
    },
    sargasse: (y) => {
      let a = `<defs>${LG("s_g", "#ffd27a", "#a8661a")}${RG("s_f", [
        [0, "#fff6d0"],
        [0.5, "#ffc84a"],
        [1, "#a8661a"],
      ])}</defs>`;
      const br = [
        [50, y, 46, y - 50, 30, y - 80],
        [48, y - 40, 58, y - 70, 70, y - 88],
      ];
      br.forEach(([x0, y0, cx_, cy_, x1, y1], k) => {
        a += `<path d="${aqpRib(x0, y0, cx_, cy_, x1, y1, { a: k ? 1.8 : 2.6, b: 1.2 })}" fill="url(#s_g)"/>`;
        for (let j = 1; j < 8; j++) {
          const t = j / 8,
            p = aqpPt(x0, y0, cx_, cy_, x1, y1, t),
            sd = j % 2 ? -1 : 1;
          a += lf(p[0], p[1], p[0] + sd * 12, p[1] - 6, 2.6, sd * 1.5, "#e8a83a", "#fff0b8");
          if (j % 3 === 0)
            a += `<circle cx="${F(p[0] - sd * 5)}" cy="${F(p[1] + 3)}" r="2.8" fill="url(#s_f)"/>`;
        }
      });
      const S = [
        [30, y - 96, 16],
        [70, y - 104, 17],
      ];
      return {
        base: a + S.map(([x, yy, r]) => cx(x, yy, r, 4, "url(#s_g)", "#fff0b8", 0)).join(""),
        front: S.map(([x, yy, r]) => cx(x, yy, r, 4, "url(#s_g)", "#fff0b8", 1)).join(""),
        sway: "",
        seats: S,
      };
    },
    posidonie: (y) => {
      let a = `<defs>${LG("p_g", "#6aa8e0", "#123a6a")}</defs>`,
        b = "",
        f = "";
      [
        [18, y - 70, -12],
        [30, y - 96, -6],
        [70, y - 96, 6],
        [82, y - 70, 12],
        [42, y - 80, -3],
        [58, y - 84, 3],
      ].forEach(([tx, ty, c], k) => {
        const p = `<path d="${aqpRib(48 + (k % 2) * 4, y, 50 + c, y - (y - ty) * 0.55, tx, ty, { a: 3, b: 2.6, g: 0.8 })}" fill="url(#p_g)"/><path d="M${48 + (k % 2) * 4} ${y}Q${F(50 + c)} ${F(y - (y - ty) * 0.55)} ${F(tx)} ${F(ty)}" stroke="#b8dcff" stroke-width=".6" fill="none" opacity=".45"/>`;
        k < 4 ? (a += p) : (b += p);
      });
      const S = [[50, y - 54, 19]];
      for (let k = 0; k < 9; k++) {
        const t = (-1 + (2 * k) / 8) * 1.25,
          tx = 50 + Math.sin(t) * 24,
          ty = y - 40 - Math.cos(t) * 18,
          p = `<path d="M50 ${y - 36}Q${F(50 + Math.sin(t) * 12)} ${F(y - 44 - Math.cos(t) * 6)} ${F(tx)} ${F(ty)}" stroke="#ff9ad0" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="${F(tx)}" cy="${F(ty)}" r="1.8" fill="#ffd8ee"/>`;
        Math.abs(t) < 0.5 ? (f += p) : (a += p);
      }
      return { base: a + b, front: f, sway: "", seats: S };
    },
    laminaire: (y) => {
      let a = `<defs>${LG("l_g", "#d0a8ff", "#4a2290")}${RG("l_b", [
        [0, "#fff"],
        [0.5, "#c89aff"],
        [1, "#5a2aa0"],
      ])}</defs>`;
      for (let k = 0; k < 6; k++) {
        const s = k - 2.5;
        a += `<path d="M${F(50 + s * 2)} ${y - 6}C${F(50 + s * 5)} ${y - 3} ${F(50 + s * 8)} ${y - 1} ${F(50 + s * 11)} ${y + 1}" stroke="#6a3a9a" stroke-width="2" fill="none" stroke-linecap="round"/>`;
      }
      a += `<path d="${aqpRib(50, y - 4, 46, y - 60, 34, y - 104, { a: 2.4, b: 1.4 })}" fill="#7a4ab0"/><path d="${aqpRib(50, y - 4, 56, y - 66, 68, y - 116, { a: 2.4, b: 1.4 })}" fill="#7a4ab0"/>`;
      const bl = (x0, y0, x1, y1, c) =>
        `<path d="${aqpRib(x0, y0, x0 + c, (y0 + y1) / 2, x1, y1, { a: 2, b: 1, g: 10, r: 0.2, f: 16, v: 2.5 })}" fill="url(#l_g)" opacity=".92"/>`;
      a +=
        bl(44, y - 50, 18, y - 96, -18) +
        bl(56, y - 58, 84, y - 110, 18) +
        bl(48, y - 30, 26, y - 64, -10) +
        bl(52, y - 36, 76, y - 72, 10);
      const S = [
        [34, y - 118, 16],
        [68, y - 130, 17],
      ];
      const pn = S.map(
        ([x, yy, r]) =>
          `<ellipse cx="${x}" cy="${F(yy + r * 0.95)}" rx="${F(r * 0.55)}" ry="${F(r * 0.4)}" fill="url(#l_b)"/>`,
      ).join("");
      return {
        base: a + pn,
        front: S.map(([x, yy, r]) => cx(x, yy, r, 3, "url(#l_g)", "#efe0ff", 1)).join(""),
        sway: "",
        seats: S,
      };
    },
  };
  const NS = (id) => D[id](100).seats.length;
  const IV = 216e5,
    bc = (s, P, t = Date.now()) => {
      const g = aqpG(s, P, t);
      if (g < 0.5 || aqpHg(s, t)) return 0;
      return Math.max(0, Math.min(NS(P.id), Math.floor((t - (s.b || s.t)) / IV)));
    },
    pr = (s, t = Date.now()) => ((t - (s.b || s.t)) % IV) / IV,
    rw = (P, s) => Math.max(0.25, Math.round((P.p / 10) * Math.min(1, aqpG(s, P))) / 4);
  const orb = (P, x, y, r, full, k, frac) => {
    const c = OC[P.id],
      id = "o_" + P.id;
    if (!full) {
      const rr = r * (0.18 + 0.5 * frac);
      return `<circle cx="${F(x)}" cy="${F(y + r - rr)}" r="${F(rr)}" fill="url(#${id})" opacity=".55" class="plsd"/>`;
    }
    return `<g class="plb" data-a="aqpp" data-v="${P.id}" style="--k:${k}"><circle cx="${F(x)}" cy="${F(y)}" r="${F(r * 1.5)}" fill="url(#h_${P.id})" class="plgl"/><circle class="plbr" cx="${F(x)}" cy="${F(y)}" r="${F(r + 3)}" fill="none" stroke="${c[3]}" stroke-width="2"/><g class="plbo"><circle cx="${F(x)}" cy="${F(y)}" r="${F(r)}" fill="url(#${id})" stroke="${c[0]}" stroke-width="1.4"/>${[
      [-0.3, 0.35, 0.16],
      [0.35, 0.2, 0.12],
      [0.1, 0.5, 0.09],
      [0.42, -0.2, 0.08],
    ]
      .map(
        ([a, b, q]) =>
          `<circle cx="${F(x + a * r)}" cy="${F(y + b * r)}" r="${F(q * r)}" fill="${c[0]}" opacity=".35"/>`,
      )
      .join(
        "",
      )}<ellipse cx="${F(x - r * 0.38)}" cy="${F(y - r * 0.42)}" rx="${F(r * 0.34)}" ry="${F(r * 0.18)}" fill="#fff" opacity=".85" transform="rotate(-35 ${F(x - r * 0.38)} ${F(y - r * 0.42)})"/><circle cx="${F(x + r * 0.45)}" cy="${F(y - r * 0.5)}" r="${F(r * 0.07)}" fill="#fff"/><g stroke="#fff" stroke-width="${F(r * 0.1)}" stroke-linecap="round" opacity=".9"><path d="M${F(x)} ${F(y - r * 0.38)}V${F(y + r * 0.38)}M${F(x - r * 0.33)} ${F(y - r * 0.19)}L${F(x + r * 0.33)} ${F(y + r * 0.19)}M${F(x + r * 0.33)} ${F(y - r * 0.19)}L${F(x - r * 0.33)} ${F(y + r * 0.19)}"/></g></g></g>`;
  };
  const ZZ = {
      ulve: 1.15,
      caulerpa: 1.05,
      halimeda: 1.15,
      zostere: 1.0,
      dulse: 1.45,
      sargasse: 1.08,
      posidonie: 1.4,
      laminaire: 0.95,
    },
    VH = 160;
  const svg = (P, g, cnt, t = Date.now(), s, HH) => {
    const H = HH || P.h,
      y = H - 3,
      d = D[P.id](y),
      c = OC[P.id],
      S = (0.38 + 0.62 * aqpL(g)) * (HH ? ZZ[P.id] : 1),
      fr = s ? pr(s, t) : 0;
    let o = "";
    if (g >= 0.5)
      d.seats.forEach(([x, yy, r], k) => {
        o += orb(P, x, yy, r, k < cnt, k, k === cnt ? fr : 0);
      });
    const defs = `<defs>${RG("o_" + P.id, [
      [0, c[0]],
      [0.55, c[1]],
      [1, c[2]],
    ])}${RG("h_" + P.id, [
      [0, c[3], 0.6],
      [1, c[3], 0],
    ])}</defs>`;
    return `${defs}<g transform="translate(50 ${y}) scale(${F(S)}) translate(-50 -${y})"><ellipse cx="50" cy="${y}" rx="22" ry="3" fill="rgba(0,30,30,.28)"/><g class="s1">${d.base}${o}${g >= 0.5 ? d.front || "" : ""}</g><g class="s2">${d.sway}</g></g>`;
  };
  aqpSVG = (P, g) => svg(P, g, g >= 0.5 ? NS(P.id) : 0);
  window.aqpPv2 = (P, g, h) =>
    `<svg viewBox="-6 6 112 150" class="plv${h ? " hg" : ""}" aria-hidden="true">${svg(P, g, g >= 0.5 ? NS(P.id) : 0, Date.now(), null, VH)}</svg>`;
  const q = (s, P, t) => {
    const o = aqpG(s, P, t);
    return Math.round(80 * o) + (aqpHg(s, t) ? "h" : "") + "b" + bc(s, P, t) + "p" + Math.floor(pr(s, t) * 8);
  };
  aqPlHTML = function (e, t) {
    return AQPT.filter((a) => aqpO(e)[a.id])
      .map((a) => {
        const s = aqpO(e)[a.id],
          n = aqpG(s, a, t),
          o = aqpHg(s, t),
          c = bc(s, a, t);
        return `<svg class="pl${o ? " hg" : ""}" data-id="${a.id}" data-q="${q(s, a, t)}" viewBox="0 0 100 ${VH}" style="left:${(a.x * 0.92 - 2).toFixed(1)}%;width:${(a.w * 1.35).toFixed(1)}%;aspect-ratio:100/${VH};--sd:${(5 + (aqpS(a.id) % 4)).toFixed(1)}s" role="img" aria-label="${a.n}"><g class="pg">${svg(a, n, c, t, s, VH)}</g></svg>`;
      })
      .join("");
  };
  aqPlTick = function () {
    const e = aqRead(),
      t = Date.now();
    let h = 0;
    document.querySelectorAll(".tank .pl").forEach((el) => {
      const P = AQPT.find((x) => x.id === el.dataset.id),
        s = P && aqpO(e)[P.id];
      if (!s) return;
      const i = aqpHg(s, t),
        qq = q(s, P, t);
      el.classList.toggle("hg", i);
      if (el.dataset.q !== qq) {
        const was = +((el.dataset.q || "").split("b")[1] || "0").split("p")[0],
          c = bc(s, P, t);
        el.dataset.q = qq;
        const g = el.querySelector(".pg");
        if (g) {
          g.innerHTML = svg(P, aqpG(s, P, t), c, t, s, VH);
          c > was && g.querySelectorAll(".plb").forEach((b, k) => k >= was && b.classList.add("in"));
        }
      }
    });
    AQPT.forEach((P) => {
      const s = aqpO(e)[P.id];
      s && aqpHg(s, t) && h++;
    });
    if (h) {
      const n = $("#nav .ndot");
      n && (n.hidden = !1);
    }
    const l = $("#aql");
    ("plant" === aqTab || "inv" === aqTab) && l && l.dataset.ps && l.dataset.ps !== aqpSig(e, t) && aqPanel();
  };
  const pop = (id) => {
    const e = aqRead(),
      t = Date.now(),
      P = AQPT.find((x) => x.id === id),
      s = P && aqpO(e)[id];
    if (!s) return;
    const c = bc(s, P, t);
    if (!c) return;
    const pl = document.querySelector(`.tank .pl[data-id="${id}"]`),
      bs = pl ? pl.querySelectorAll(".plb") : [],
      el = bs[bs.length - 1],
      r = el && el.querySelector(".plbo").getBoundingClientRect(),
      v = rw(P, s);
    s.b = t - (c - 1) * IV - ((t - (s.b || s.t)) % IV);
    aqSave(e);
    fl += v;
    st.set("fl", fl);
    try {
      chip();
    } catch (x) {}
    const ch = document.querySelector(".aqhd .chip");
    ch && (ch.textContent = "🫧 " + FLX());
    st.set("aq:bt", 1);
    try {
      sfx(520, 0.06);
      setTimeout(() => sfx(1046, 0.1), 50);
      setTimeout(() => sfx(1568, 0.12), 120);
      setTimeout(() => sfx(2093, 0.1), 200);
    } catch (x) {}
    try {
      vib([10, 20, 15]);
    } catch (x) {}
    const fin = () => {
      if (!pl) return;
      pl.dataset.q = q(s, P, Date.now());
      const gg = pl.querySelector(".pg");
      gg && (gg.innerHTML = svg(P, aqpG(s, P, t), bc(s, P, t), Date.now(), s, VH));
    };
    if (el && r) {
      el.classList.add("out");
      pl.classList.remove("hit");
      void pl.offsetWidth;
      pl.classList.add("hit");
      const C = OC[id],
        d = document.createElement("div");
      d.className = "plpop";
      d.style.left = r.left + r.width / 2 + "px";
      d.style.top = r.top + r.height / 2 + "px";
      d.style.setProperty("--c", C[1]);
      d.style.setProperty("--g", C[3]);
      d.style.setProperty("--s", Math.max(40, r.width) + "px");
      let h = `<em></em><u></u>`;
      for (let k = 0; k < 16; k++) {
        const a = k * 22.5 + Math.random() * 12,
          dd = 40 + Math.random() * 50;
        h += `<i class="${k % 3 ? "st" : "fk"}" style="--a:${a}deg;--d:${dd}px;--r:${Math.random() * 360}deg;--t:${0.6 + Math.random() * 0.4}s">${k % 3 ? "" : "❄"}</i>`;
      }
      for (let k = 0; k < Math.min(8, v); k++)
        h += `<s style="--x:${(Math.random() - 0.5) * 90}px;--y:${-30 - Math.random() * 50}px;--t:${0.25 + k * 0.06}s">❄</s>`;
      d.innerHTML = h + `<b>+${v} 🫧</b>`;
      document.body.appendChild(d);
      setTimeout(() => d.remove(), 1600);
      setTimeout(fin, 260);
      setTimeout(() => pl.classList.remove("hit"), 600);
    } else fin();
  };
  window.AQX = { D, OC, ZZ, F, RG, LG, lf, cx };
  setTimeout(() => Object.assign(act, { aqpp: pop }), 0);
})();
