(() => {
  if (typeof AQPD_ !== "object") return;
  const PAL = {
    ulve: ["#3fe0b0", "#147a6a", "#9fffe4", "#5ff0d0", "leaf"],
    caulerpa: ["#86e65a", "#2a8a44", "#d0ffa0", "#b4ff6a", "pearl"],
    halimeda: ["#5fd8ff", "#2a6fc0", "#c4f2ff", "#7fe8ff", "disc"],
    zostere: ["#4ad8a0", "#1a6a62", "#a8ffdc", "#ffe07a", "blade"],
    dulse: ["#ff6ac0", "#8a2070", "#ffb8e4", "#ff8ad8", "lobe"],
    sargasse: ["#ffc24a", "#a0681a", "#fff0a8", "#ffd86a", "float"],
    posidonie: ["#6a8cff", "#24338f", "#c0ceff", "#8ab0ff", "blade"],
    laminaire: ["#b07aff", "#4a2290", "#e4ccff", "#ff9ad8", "kelp"],
  };
  const F = aqpF,
    R = aqpR;
  const gen = (id) => (g, H, add) => {
    const [cA, cB, gl, pd, sty] = PAL[id],
      L = aqpL(g),
      y0 = H - 3,
      big = sty === "blade" || sty === "kelp",
      n = (big ? 3 : 2) + Math.round((big ? 3 : 2) * g),
      mid = Math.floor((n - 1) / 2);
    let top = null;
    add(
      0,
      `<defs><linearGradient id="apg-${id}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="${cB}"/><stop offset="1" stop-color="${cA}"/></linearGradient><radialGradient id="apr-${id}" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#fff"/><stop offset=".35" stop-color="${pd}"/><stop offset="1" stop-color="${cB}"/></radialGradient><radialGradient id="aph-${id}"><stop offset="0" stop-color="${gl}" stop-opacity=".55"/><stop offset="1" stop-color="${gl}" stop-opacity="0"/></radialGradient></defs><ellipse cx="50" cy="${F(y0)}" rx="${F(14 + 10 * g)}" ry="4" fill="${cB}" opacity=".7"/><ellipse cx="50" cy="${F(y0 - 1)}" rx="${F(9 + 6 * g)}" ry="2" fill="${gl}" opacity=".25"/>`,
    );
    for (let i = 0; i < n; i++) {
      const u = n > 1 ? i / (n - 1) : 0.5,
        x = 28 + 44 * u + 6 * (R(i, 1) - 0.5),
        m = i === mid,
        hh = H * L * (m ? 0.8 : 0.42 + 0.3 * R(i, 2)),
        c = (m ? 6 : 30) * (u - 0.5) + 8 * (R(i, 3) - 0.5),
        tx = x + c,
        ty = y0 - hh,
        w = big
          ? {
              a: sty === "kelp" ? 3.4 : 3,
              b: sty === "kelp" ? 4 : 1.8,
              g: sty === "kelp" ? 6 : 1.6,
              r: sty === "kelp" ? 0.22 : 0,
              f: 14,
              v: sty === "kelp" ? 2 : 0,
            }
          : { a: 2.6, b: 1, g: 0.8 };
      let s = `<path d="M${F(x)} ${F(y0)}Q${F(x + 0.25 * c)} ${F(y0 - 0.55 * hh)} ${F(tx)} ${F(ty)}" stroke="${gl}" stroke-width="${big ? 7 : 5}" stroke-linecap="round" fill="none" opacity=".18"/><path d="${aqpRib(x, y0, x + 0.25 * c, y0 - 0.55 * hh, tx, ty, w)}" fill="url(#apg-${id})" stroke="${gl}" stroke-width=".5" stroke-opacity=".7"/><path d="M${F(x)} ${F(y0)}Q${F(x + 0.25 * c)} ${F(y0 - 0.55 * hh)} ${F(tx)} ${F(ty)}" stroke="${gl}" stroke-width=".7" fill="none" opacity=".75"/>`;
      const k = big ? 0 : Math.max(1, Math.round(5 * L));
      for (let j = 1; j <= k; j++) {
        const t = j / (k + 1),
          p = aqpPt(x, y0, x + 0.25 * c, y0 - 0.55 * hh, tx, ty, t),
          sd = j % 2 ? -1 : 1,
          z = 1 - 0.4 * t;
        if (sty === "leaf" || sty === "lobe") {
          const lx = p[0] + sd * (sty === "lobe" ? 11 : 14) * z,
            ly = p[1] - (sty === "lobe" ? 4 : 8) * z,
            col = sty === "lobe" ? pd : cA;
          s += `<path d="M${F(p[0])} ${F(p[1])}Q${F(p[0] + sd * 2)} ${F(ly - 4 * z)} ${F(lx)} ${F(ly)}Q${F(p[0] + sd * 6 * z)} ${F(p[1] + 2)} ${F(p[0])} ${F(p[1])}Z" fill="${col}" stroke="${gl}" stroke-width=".5" opacity=".92"/>`;
        } else if (sty === "pearl") {
          const px = p[0] + sd * 5 * z;
          s += `<circle cx="${F(px)}" cy="${F(p[1] - 2)}" r="${F(4.6 * z)}" fill="url(#apr-${id})" stroke="${gl}" stroke-width=".4"/>`;
        } else if (sty === "disc") {
          s += `<ellipse cx="${F(p[0])}" cy="${F(p[1])}" rx="${F(9.5 * z)}" ry="${F(4.6 * z)}" fill="url(#apr-${id})" stroke="${gl}" stroke-width=".5" opacity=".9"/>`;
        } else if (sty === "float") {
          const px = p[0] + sd * 6 * z;
          s += `<path d="M${F(p[0])} ${F(p[1])}L${F(px)} ${F(p[1] - 2)}" stroke="${cA}" stroke-width=".8"/><circle cx="${F(px)}" cy="${F(p[1] - 2)}" r="${F(4 * z)}" fill="url(#apr-${id})" stroke="${gl}" stroke-width=".4"/>`;
        }
      }
      if (!m && !big && g > 0.25)
        s += `<path d="M${F(tx)} ${F(ty)}q${F(4 * (c > 0 ? 1 : -1))} -4 ${F(1.5 * (c > 0 ? 1 : -1))} -6q-2 -1 -2.5 1" stroke="${gl}" stroke-width=".9" fill="none" stroke-linecap="round"/>`;
      if (m) top = [tx, ty];
      add(i + 1, s + (m ? "%TOP%" : ""));
    }
  };
  Object.keys(PAL).forEach((id) => (AQPD_[id] = gen(id)));
  const IV = 216e5,
    MX = 2,
    bc = (s, P, t = Date.now()) => {
      const g = aqpG(s, P, t);
      if (g < 0.5 || aqpHg(s, t)) return 0;
      return Math.max(0, Math.min(MX, Math.floor((t - (s.b || s.t)) / IV)));
    },
    rw = (P, s) => Math.max(0.25, Math.round((P.p / 10) * Math.min(1, aqpG(s, P))) / 4);
  window.aqpBc = bc;
  const svg = (P, g, cnt) => {
    const a = ["", ""];
    let top = null;
    const L = aqpL(g),
      y0 = P.h - 3,
      H = P.h;
    AQPD_[P.id](g, H, (k, t) => {
      a[k % 2] += t;
    });
    const ty = y0 - H * L * 0.8,
      ps = g >= 0.4 ? 7 + (9 * (g - 0.4)) / 0.6 : 0;
    let pod = "";
    const pc = PAL[P.id];
    if (ps) {
      pod = `<circle cx="50" cy="${F(ty - ps * 0.6)}" r="${F(ps * 2.4)}" fill="url(#aph-${P.id})" class="plgl"/><path d="M${F(50 - ps)} ${F(ty - ps * 1.2)}Q${F(50 - ps * 0.9)} ${F(ty + ps * 0.3)} 50 ${F(ty + ps * 0.2)}Q${F(50 + ps * 0.9)} ${F(ty + ps * 0.3)} ${F(50 + ps)} ${F(ty - ps * 1.2)}Q${F(50 + ps * 0.5)} ${F(ty - ps * 0.7)} 50 ${F(ty - ps * 1.05)}Q${F(50 - ps * 0.5)} ${F(ty - ps * 0.7)} ${F(50 - ps)} ${F(ty - ps * 1.2)}Z" fill="url(#apr-${P.id})" stroke="${pc[2]}" stroke-width=".6"/>`;
    }
    let b = "";
    for (let k = 0; k < cnt; k++) {
      const bx = 50 + (k ? -16 : 4),
        by = ty - ps * 1.2 - 21 - k * 25;
      b += `<g class="plb" data-a="aqpp" data-v="${P.id}" style="--k:${k}"><circle cx="${F(bx)}" cy="${F(by)}" r="28" fill="transparent"/><circle cx="${F(bx)}" cy="${F(by)}" r="19" fill="url(#apb)" stroke="#e8fbff" stroke-width="1.2" stroke-opacity=".85"/><ellipse cx="${F(bx - 6.5)}" cy="${F(by - 7)}" rx="6" ry="3.4" fill="#fff" opacity=".8" transform="rotate(-30 ${F(bx - 6.5)} ${F(by - 7)})"/><path d="M${F(bx)} ${F(by - 7)}V${F(by + 7)}M${F(bx - 6)} ${F(by - 3.5)}L${F(bx + 6)} ${F(by + 3.5)}M${F(bx + 6)} ${F(by - 3.5)}L${F(bx - 6)} ${F(by + 3.5)}" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".95"/></g>`;
    }
    const mi =
      Math.floor(
        ((P.id === "zostere" || P.id === "posidonie" || P.id === "laminaire" ? 3 : 2) +
          Math.round((P.id === "zostere" || P.id === "posidonie" || P.id === "laminaire" ? 3 : 2) * g) -
          1) /
          2,
      ) + 1;
    const put = pod + b;
    a[0] = a[0].replace("%TOP%", mi % 2 === 0 ? put : "");
    a[1] = a[1].replace("%TOP%", mi % 2 === 1 ? put : "");
    return `<defs><radialGradient id="apb" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#ffffff" stop-opacity=".95"/><stop offset=".4" stop-color="#9ff4ff" stop-opacity=".55"/><stop offset="1" stop-color="#4ab8ff" stop-opacity=".35"/></radialGradient></defs><g class="s1">${a[0]}</g><g class="s2">${a[1]}</g>`;
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
        el.dataset.q = q;
        const g = el.querySelector(".pg");
        g && (g.innerHTML = svg(P, o, c));
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
    const el = document.querySelector(`.tank .pl[data-id="${id}"] .plb:last-of-type`),
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
    } catch (x) {}
    try {
      vib && vib(12);
    } catch (x) {}
    if (r) {
      const d = document.createElement("div");
      d.className = "plpop";
      d.style.left = r.left + r.width / 2 + "px";
      d.style.top = r.top + r.height / 2 + "px";
      let h = "";
      for (let k = 0; k < 10; k++) h += `<i style="--a:${k * 36}deg;--d:${18 + (k % 3) * 9}px"></i>`;
      d.innerHTML = h + `<b>+${v} 🫧</b>`;
      document.body.appendChild(d);
      setTimeout(() => d.remove(), 1100);
    }
    const pl = document.querySelector(`.tank .pl[data-id="${id}"]`);
    if (pl) {
      const g = aqpG(s, P, t),
        n = bc(s, P, t);
      pl.dataset.q = Math.round(80 * g) + (aqpHg(s, t) ? "h" : "") + "b" + n;
      const gg = pl.querySelector(".pg");
      gg && (gg.innerHTML = svg(P, g, n));
    }
  };
  setTimeout(() => {
    Object.assign(act, { aqpp: pop });
  }, 0);
  const _inv = aqPlInv;
  aqPlInv = function (e) {
    let h = _inv(e);
    AQPT.forEach((P) => {
      const s = aqpO(e)[P.id];
      if (!s) return;
      h = h.replace(
        `<b>${P.n}</b><small>`,
        `<b>${P.n}</b><small>Bulle : +${rw(P, s)} 🫧 toutes les 6 h (dès 50 %) · `,
      );
    });
    return h.replace(
      "Une fois adultes, elles donnent des 🫧 à chaque repas.",
      "À partir de 50 %, elles font des bulles : touche-les pour récolter des 🫧.",
    );
  };
})();
