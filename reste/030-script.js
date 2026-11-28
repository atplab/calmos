(() => {
  if (typeof AQPD_ !== "object") return;
  const F = aqpF,
    R = aqpR,
    Rb = aqpRib,
    Pt = aqpPt;
  const Q = (x, y, cx, cy, X, Y) => `M${F(x)} ${F(y)}Q${F(cx)} ${F(cy)} ${F(X)} ${F(Y)}`;
  const gr = (id, a, b) =>
    `<linearGradient id="${id}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
  const rg = (id, a, b, c) =>
    `<radialGradient id="${id}" cx=".38" cy=".32" r=".72"><stop offset="0" stop-color="${a}"/><stop offset=".45" stop-color="${b}"/><stop offset="1" stop-color="${c}"/></radialGradient>`;
  const D = {
    ulve(g, H) {
      const L = aqpL(g),
        y = H - 3,
        n = 3 + Math.round(3 * g);
      let a = "",
        b = "",
        top = [50, y];
      a += `<defs>${gr("ul1", "#1f9a78", "#8ff5c8")}</defs>`;
      for (let i = 0; i < n; i++) {
        const u = i / (n - 1),
          x = 26 + 48 * u,
          h = H * L * (0.45 + 0.4 * R(i, 2)) * (1 - 0.3 * Math.abs(u - 0.5)),
          c = 36 * (u - 0.5) + 10 * (R(i, 3) - 0.5),
          X = x + c,
          Y = y - h,
          p = `<path d="${Rb(x, y, x + 0.3 * c, y - 0.5 * h, X, Y, { a: 2, b: 6, g: 12 + 5 * R(i, 4), r: 0.28, f: 22, v: 3 })}" fill="url(#ul1)" fill-opacity=".88" stroke="#c4ffe4" stroke-width=".7" stroke-opacity=".8"/><path d="${Q(x, y, x + 0.3 * c, y - 0.5 * h, X, Y)}" stroke="#e4fff2" stroke-width=".6" fill="none" opacity=".6"/>`;
        i % 2 ? (b += p) : (a += p);
        if (Y < top[1]) top = [X, Y];
      }
      return { a, b, top, ho: `<circle cx="${F(top[0])}" cy="${F(top[1])}" r="4" fill="#d4fff0"/>` };
    },
    caulerpa(g, H) {
      const L = aqpL(g),
        y = H - 3,
        n = 2 + Math.round(3 * g);
      let a = `<defs>${rg("ca1", "#f4ffd8", "#9cf05a", "#3a9a3a")}</defs><path d="M6 ${y}Q50 ${y - 6} 94 ${y}" stroke="#4fae4a" stroke-width="3" fill="none" stroke-linecap="round"/>`,
        b = "",
        top = [50, y];
      for (let i = 0; i < n; i++) {
        const x = 16 + (68 * i) / (n - 1 || 1),
          h = H * L * (i === Math.floor(n / 2) ? 0.78 : 0.45 + 0.25 * R(i, 2)),
          c = 10 * (R(i, 3) - 0.5),
          X = x + c,
          Y = y - h;
        let p = `<path d="${Q(x, y, x + c * 0.3, y - h / 2, X, Y)}" stroke="#4fae4a" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
        const k = Math.max(3, Math.round((14 * L * h) / (0.7 * H)));
        for (let j = 0; j < k; j++) {
          const t = 0.15 + (0.85 * j) / k,
            q = Pt(x, y, x + c * 0.3, y - h / 2, X, Y, t),
            r = 4.2 - 1.6 * t;
          [-1, 1].forEach(
            (sd) =>
              (p += `<circle cx="${F(q[0] + sd * 5 * (1 - 0.3 * t))}" cy="${F(q[1])}" r="${F(r)}" fill="url(#ca1)" stroke="#d8ffb0" stroke-width=".4"/>`),
          );
        }
        p += `<circle cx="${F(X)}" cy="${F(Y)}" r="3.6" fill="url(#ca1)"/>`;
        i % 2 ? (b += p) : (a += p);
        if (Y < top[1]) top = [X, Y];
      }
      return {
        a,
        b,
        top,
        ho: `<circle cx="${F(top[0])}" cy="${F(top[1] - 2)}" r="5.5" fill="url(#ca1)" stroke="#f0ffd0" stroke-width=".8"/>`,
      };
    },
    halimeda(g, H) {
      const L = aqpL(g),
        y = H - 3;
      let a = `<defs>${rg("ha1", "#ffffff", "#8ff0ff", "#2a8ac8")}</defs>`,
        b = "",
        top = [50, y];
      const seg = (x, yy, ang, d, k, side) => {
        let s = "";
        for (let j = 0; j < k; j++) {
          const w = 9 - 2.2 * d - 0.15 * j,
            hh = 6.5 - 1.2 * d;
          x += Math.sin(ang) * hh * 1.05;
          yy -= Math.cos(ang) * hh * 1.05;
          s += `<ellipse cx="${F(x)}" cy="${F(yy)}" rx="${F(w)}" ry="${F(hh * 0.62)}" transform="rotate(${F(ang * 57.3)} ${F(x)} ${F(yy)})" fill="url(#ha1)" fill-opacity=".9" stroke="#e0fbff" stroke-width=".5"/>`;
          if (yy < top[1]) top = [x, yy - hh * 0.6];
        }
        if (d < 2 && k > 2) {
          const n2 = Math.round(k * 0.6);
          s += seg(x, yy, ang - 0.45, d + 1, n2, 0) + seg(x, yy, ang + 0.45, d + 1, n2, 1);
        }
        return s;
      };
      const k = 1 + Math.round(7 * L);
      a += seg(42, y + 2, -0.15, 0, k, 0);
      b += seg(58, y + 2, 0.25, 1, Math.max(1, k - 2), 1);
      return {
        a,
        b,
        top,
        ho: `<circle cx="${F(top[0])}" cy="${F(top[1])}" r="4.5" fill="#fff" opacity=".9"/>`,
      };
    },
    zostere(g, H) {
      const L = aqpL(g),
        y = H - 3,
        n = 4 + Math.round(5 * g);
      let a = `<defs>${gr("zo1", "#0f5a4e", "#5ff0b8")}</defs>`,
        b = "",
        top = [50, y];
      for (let i = 0; i < n; i++) {
        const u = i / (n - 1),
          x = 30 + 40 * u,
          h = H * L * (0.5 + 0.42 * R(i, 2)),
          c = 30 * (u - 0.5) + 12 * (R(i, 3) - 0.5),
          X = x + c,
          Y = y - h,
          p = `<path d="${Rb(x, y, x + 0.15 * c, y - 0.6 * h, X, Y, { a: 1.8, b: 1.4, g: 0.2 })}" fill="url(#zo1)" stroke="#9affd8" stroke-width=".4"/><circle cx="${F(X)}" cy="${F(Y)}" r="1.4" fill="#d8fff0" class="plsp" style="--dl:${F(-i * 0.6)}s"/>`;
        i % 2 ? (b += p) : (a += p);
        if (Y < top[1]) top = [X, Y];
      }
      return {
        a,
        b,
        top,
        ho: `<path d="M${F(top[0])} ${F(top[1] + 6)}v-12" stroke="#ffe07a" stroke-width="3" stroke-linecap="round"/>${[0, 1, 2, 3].map((j) => `<circle cx="${F(top[0] + (j % 2 ? 2 : -2))}" cy="${F(top[1] + 4 - j * 3.5)}" r="1.6" fill="#fff4b0"/>`).join("")}`,
      };
    },
    dulse(g, H) {
      const L = aqpL(g),
        y = H - 3;
      let a = `<defs>${gr("du1", "#7a1a5a", "#ff8ad0")}</defs>`,
        b = "",
        top = [50, y];
      const br = (x, yy, ang, len, d) => {
        const X = x + Math.sin(ang) * len,
          Y = yy - Math.cos(ang) * len;
        let s = `<path d="${Rb(x, yy, (x + X) / 2 + 3 * Math.cos(ang), (yy + Y) / 2, X, Y, { a: 3.2 - d * 0.6, b: 4.4 - d * 0.7, g: 2 })}" fill="url(#du1)" stroke="#ffc8ea" stroke-width=".5"/>`;
        if (Y < top[1]) top = [X, Y];
        if (d < 3 && len > 8)
          s += br(X, Y, ang - 0.42, len * 0.72, d + 1) + br(X, Y, ang + 0.42, len * 0.72, d + 1);
        else
          s += `<circle cx="${F(X)}" cy="${F(Y)}" r="${F(4.2 - d * 0.5)}" fill="#ff9ad8" stroke="#ffd8f0" stroke-width=".5"/>`;
        return s;
      };
      const len = H * L * 0.3;
      a += br(50, y, -0.08, len, 0);
      if (g > 0.4) b += br(46, y, -0.6, len * 0.55, 1) + br(54, y, 0.6, len * 0.55, 1);
      return {
        a,
        b,
        top,
        ho: `<path d="M${F(top[0] - 6)} ${F(top[1])}Q${F(top[0])} ${F(top[1] - 9)} ${F(top[0] + 6)} ${F(top[1])}Q${F(top[0])} ${F(top[1] + 3)} ${F(top[0] - 6)} ${F(top[1])}Z" fill="#ffb8e6" stroke="#fff" stroke-width=".6"/>`,
      };
    },
    sargasse(g, H) {
      const L = aqpL(g),
        y = H - 3,
        n = 2 + Math.round(2 * g);
      let a = `<defs>${rg("sa1", "#fffbe0", "#ffd24a", "#a86a10")}</defs>`,
        b = "",
        top = [50, y];
      for (let i = 0; i < n; i++) {
        const u = n > 1 ? i / (n - 1) : 0.5,
          x = 34 + 32 * u,
          h = H * L * (i === Math.floor(n / 2) ? 0.8 : 0.5 + 0.2 * R(i, 2)),
          c = 22 * (u - 0.5),
          X = x + c,
          Y = y - h;
        let p = `<path d="${Q(x, y, x + c * 0.4 - 6, y - h / 2, X, Y)}" stroke="#c8861e" stroke-width="2" fill="none" stroke-linecap="round"/>`;
        const k = Math.round(9 * L);
        for (let j = 1; j <= k; j++) {
          const t = j / (k + 1),
            q = Pt(x, y, x + c * 0.4 - 6, y - h / 2, X, Y, t),
            sd = j % 2 ? -1 : 1;
          p += `<path d="M${F(q[0])} ${F(q[1])}q${F(sd * 5)} -3 ${F(sd * 9)} -1q${F(-sd * 2)} 1 ${F(-sd * 1)} 2.5q${F(-sd * 3)} -.5 ${F(-sd * 8)} -1.5z" fill="#e8a83a" stroke="#ffe08a" stroke-width=".4"/>`;
          if (j % 2 === 0)
            p += `<circle cx="${F(q[0] - sd * 6)}" cy="${F(q[1] + 3)}" r="2.6" fill="url(#sa1)" stroke="#fff3c0" stroke-width=".4"/>`;
        }
        i % 2 ? (b += p) : (a += p);
        if (Y < top[1]) top = [X, Y];
      }
      return {
        a,
        b,
        top,
        ho: `<circle cx="${F(top[0])}" cy="${F(top[1])}" r="5.5" fill="url(#sa1)" stroke="#fff3c0" stroke-width=".8"/>`,
      };
    },
    posidonie(g, H) {
      const L = aqpL(g),
        y = H - 3,
        n = 4 + Math.round(4 * g);
      let a = `<defs>${gr("po1", "#141f6a", "#6a8cff")}</defs><ellipse cx="50" cy="${y}" rx="18" ry="4" fill="#3a2a5a"/>`,
        b = "",
        top = [50, y];
      for (let i = 0; i < n; i++) {
        const u = i / (n - 1),
          x = 40 + 20 * u,
          h = H * L * (0.5 + 0.4 * R(i, 2)) * (1 - 0.25 * Math.abs(u - 0.5)),
          c = 46 * (u - 0.5),
          X = x + c,
          Y = y - h;
        let p = `<path d="${Rb(x, y - 2, x + 0.2 * c, y - 0.6 * h, X, Y, { a: 3.4, b: 3, g: 0.6 })}" fill="url(#po1)" stroke="#aabaff" stroke-width=".5"/>`;
        for (let j = 1; j < 4; j++) {
          const q = Pt(x, y - 2, x + 0.2 * c, y - 0.6 * h, X, Y, j / 4.3);
          p += `<circle cx="${F(q[0])}" cy="${F(q[1])}" r="1.1" fill="#9ff0ff" class="plsp" style="--dl:${F(-(i + j) * 0.4)}s"/>`;
        }
        i % 2 ? (b += p) : (a += p);
        if (Y < top[1]) top = [X, Y];
      }
      return { a, b, top, ho: `<circle cx="${F(top[0])}" cy="${F(top[1])}" r="3.6" fill="#bff6ff"/>` };
    },
    laminaire(g, H) {
      const L = aqpL(g),
        y = H - 3,
        n = 1 + Math.round(2 * g);
      let a = `<defs>${gr("la1", "#3a1680", "#c89aff")}${rg("la2", "#fff", "#ff9ad8", "#8a2a8a")}</defs>`,
        b = "",
        top = [50, y];
      for (let k = 0; k < 7; k++)
        a += `<path d="M${F(36 + 4.6 * k)} ${y}q${F(1.8 * (k - 3))} -6 ${F(2.6 * (k - 3))} -11" stroke="#6a3a9a" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
      for (let i = 0; i < n; i++) {
        const x = n > 1 ? 40 + (20 * i) / (n - 1) : 50,
          st = H * L * (0.22 + 0.05 * R(i, 2)),
          c = 16 * (i - (n - 1) / 2),
          sx = x + c * 0.4,
          sy = y - 10 - st,
          bl = H * L * (0.55 + 0.1 * R(i, 4)),
          X = sx + c * 0.8,
          Y = sy - bl;
        let p = `<path d="${Q(x, y - 8, x + c * 0.2, y - 10 - st / 2, sx, sy)}" stroke="#7a4aaa" stroke-width="${F(2 + 2 * L)}" fill="none" stroke-linecap="round"/><path d="${Rb(sx, sy, sx + c * 0.6 + 6, sy - bl * 0.5, X, Y, { a: 3, b: 2, g: 11, r: 0.2, f: 16, v: 3 })}" fill="url(#la1)" stroke="#e4ccff" stroke-width=".6"/><path d="${Q(sx, sy, sx + c * 0.6 + 6, sy - bl * 0.5, X, Y)}" stroke="#f0e0ff" stroke-width=".7" fill="none" opacity=".5"/>`;
        i % 2 ? (b += p) : (a += p);
        if (Y < top[1]) top = [X, Y];
      }
      return {
        a,
        b,
        top,
        ho: `<ellipse cx="${F(top[0])}" cy="${F(top[1] - 1)}" rx="5" ry="6" fill="url(#la2)" stroke="#ffe0f4" stroke-width=".7"/>`,
      };
    },
  };
  const IV = 216e5,
    MX = 2,
    bc = (s, P, t = Date.now()) => {
      const g = aqpG(s, P, t);
      if (g < 0.5 || aqpHg(s, t)) return 0;
      return Math.max(0, Math.min(MX, Math.floor((t - (s.b || s.t)) / IV)));
    },
    rw = (P, s) => Math.max(0.25, Math.round((P.p / 10) * Math.min(1, aqpG(s, P))) / 4);
  const svg = (P, g, cnt, v) => {
    const d = D[P.id](g, P.h),
      [tx, ty] = d.top;
    let bb = "";
    for (let k = 0; k < cnt; k++) {
      const bx = tx + (k ? -15 : 3),
        by = ty - 24 - k * 26;
      bb += `<g class="plb" data-a="aqpp" data-v="${P.id}" style="--k:${k}"><circle cx="${F(bx)}" cy="${F(by)}" r="30" fill="transparent"/><circle class="plbr" cx="${F(bx)}" cy="${F(by)}" r="22" fill="none" stroke="#bff8ff" stroke-width="2"/><circle cx="${F(bx)}" cy="${F(by)}" r="19" fill="url(#apb2)" stroke="#ffffff" stroke-width="1.8"/><ellipse cx="${F(bx - 7)}" cy="${F(by - 8)}" rx="6" ry="3.4" fill="#fff" opacity=".9" transform="rotate(-30 ${F(bx - 7)} ${F(by - 8)})"/><g stroke="#0a5a8a" stroke-width="2.6" stroke-linecap="round"><path d="M${F(bx)} ${F(by - 8)}V${F(by + 8)}M${F(bx - 7)} ${F(by - 4)}L${F(bx + 7)} ${F(by + 4)}M${F(bx + 7)} ${F(by - 4)}L${F(bx - 7)} ${F(by + 4)}"/></g><circle cx="${F(bx + 15)}" cy="${F(by - 14)}" r="2" fill="#fff" class="plsp"/></g>`;
    }
    const pt = `<circle cx="${F(tx)}" cy="${F(ty)}" r="14" fill="url(#apgl)" class="plgl"/>${d.ho || ""}`;
    return `<defs><radialGradient id="apb2" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#ffffff"/><stop offset=".45" stop-color="#c8f8ff"/><stop offset="1" stop-color="#5fd0ff"/></radialGradient><radialGradient id="apgl"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><g class="s1">${d.a}${g >= 0.4 ? pt : ""}${bb}</g><g class="s2">${d.b}</g>`;
  };
  aqpSVG = (P, g) => svg(P, g, 0);
  aqPlHTML = function (e, t) {
    return AQPT.filter((a) => aqpO(e)[a.id])
      .map((a) => {
        const s = aqpO(e)[a.id],
          n = aqpG(s, a, t),
          o = aqpHg(s, t),
          c = bc(s, a, t);
        return `<svg class="pl${o ? " hg" : ""}" data-id="${a.id}" data-q="${Math.round(80 * n) + (o ? "h" : "") + "b" + c}" viewBox="0 0 100 ${a.h}" style="left:${a.x}%;width:${a.w}%;aspect-ratio:100/${a.h};--sd:${(5 + (aqpS(a.id) % 4)).toFixed(1)}s" role="img" aria-label="${a.n}"><g class="pg">${svg(a, n, c)}</g></svg>`;
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
      const o = aqpG(s, P, t),
        i = aqpHg(s, t),
        c = bc(s, P, t),
        q = Math.round(80 * o) + (i ? "h" : "") + "b" + c;
      el.classList.toggle("hg", i);
      if (el.dataset.q !== q) {
        const nw = c > +(el.dataset.q.split("b")[1] || 0);
        el.dataset.q = q;
        const g = el.querySelector(".pg");
        if (g) {
          g.innerHTML = svg(P, o, c);
          nw && g.querySelectorAll(".plb").forEach((b, k) => k === c - 1 && b.classList.add("in"));
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
    const bs = document.querySelectorAll(`.tank .pl[data-id="${id}"] .plb`),
      el = bs[bs.length - 1],
      r = el && el.getBoundingClientRect(),
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
    try {
      sfx(990, 0.08);
      setTimeout(() => sfx(1480, 0.12), 60);
      setTimeout(() => sfx(1975, 0.1), 130);
    } catch (x) {}
    try {
      vib(12);
    } catch (x) {}
    const fin = () => {
      const pl = document.querySelector(`.tank .pl[data-id="${id}"]`);
      if (pl) {
        const g = aqpG(s, P, t),
          n = bc(s, P, t);
        pl.dataset.q = Math.round(80 * g) + (aqpHg(s, t) ? "h" : "") + "b" + n;
        const gg = pl.querySelector(".pg");
        gg && (gg.innerHTML = svg(P, g, n));
      }
    };
    if (r) {
      const d = document.createElement("div");
      d.className = "plpop";
      d.style.left = r.left + r.width / 2 + "px";
      d.style.top = r.top + r.height / 2 + "px";
      let h = `<u></u>`;
      for (let k = 0; k < 12; k++) h += `<i style="--a:${k * 30}deg;--d:${22 + (k % 3) * 12}px"></i>`;
      d.innerHTML = h + `<b>+${v} 🫧</b>`;
      document.body.appendChild(d);
      setTimeout(() => d.remove(), 1300);
      el.classList.add("out");
      setTimeout(fin, 180);
    } else fin();
    if (!st.get("aq:bt", 0)) st.set("aq:bt", 1);
  };
  setTimeout(() => Object.assign(act, { aqpp: pop }), 0);
  const hint = () => {
    if (st.get("aq:bt", 0)) return;
    const b = document.querySelector(".tank .plb");
    if (!b || document.querySelector(".plhint")) return;
    const r = b.getBoundingClientRect(),
      d = document.createElement("div");
    d.className = "plhint";
    d.textContent = "Touche les bulles pour récolter des 🫧";
    d.style.top = r.top - 14 + "px";
    document.body.appendChild(d);
    const w = d.offsetWidth / 2 + 8;
    d.style.left = Math.min(innerWidth - w, Math.max(w, r.left + r.width / 2)) + "px";
    setTimeout(() => d.remove(), 4200);
  };
  setInterval(() => {
    try {
      $("#tank") && hint();
    } catch (x) {}
  }, 3000);
})();
