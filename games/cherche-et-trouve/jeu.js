// Cherche et trouve (id « cherche ») : scènes chScene/chArt, écran pCherche.
const CHW = 1e3;
const CHH = 1400;
const chRnd = (e) => () => {
  e = (1831565813 + (e |= 0)) | 0;
  let t = Math.imul(e ^ (e >>> 15), 1 | e);
  return ((t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t), ((t ^ (t >>> 14)) >>> 0) / 4294967296);
};
function chScene(e, t, a) {
  const s = chRnd(a),
    n = CHW,
    o = CHH,
    i = e.hz * o,
    r = chArt(CHART[t] ? t : null != e.ar ? e.ar : -1, a, n, o, i),
    l = r.gy || 0,
    c = (e, t) => r.avoid.some((a) => ((e - a[0]) / a[2]) ** 2 + ((t - a[1]) / a[3]) ** 2 < 1),
    d = e.x ? 4 + 1.1 * (t - 35) : t < 20 ? t : 19 + 0.4 * (t - 19),
    f = Math.round(40 - 0.8 * d),
    u = 215 + 8 * d,
    h = e.it.length + 1,
    p = (e, t) => e + s() * (t - e),
    m = (e) => e[Math.floor(s() * e.length)],
    b = new Set(e.it.map((e) => e[0])),
    g = e.se.filter((e) => !b.has(e)),
    E = e.ge.filter((e) => !b.has(e)),
    y = o - i,
    v = p(180, 820),
    A = p(60, Math.max(100, 0.7 * i)),
    S = `<svg class="hbg" viewBox="0 0 1000 1400" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="chs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${e.sky[0]}"/><stop offset="1" stop-color="${e.sky[1]}"/></linearGradient><radialGradient id="chg"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><rect width="1000" height="1400" fill="url(#chs)"/><circle cx="${v.toFixed(0)}" cy="${A.toFixed(0)}" r="190" fill="url(#chg)"/>${r.back}${e.gr
      .map(
        (e, t) =>
          `<path d="${((e, t, a) => {
            let s = `M0 1400L0 ${e.toFixed(1)}`;
            for (let o = 0; o <= n; o += 40)
              s += `L${o} ${(e + Math.sin(o / 130 + a) * t + Math.sin(o / 47 + 2 * a) * t * 0.3).toFixed(1)}`;
            return s + "L1000 1400Z";
          })(i + t * y * 0.22 - 28, 16 + 6 * t, 6 * s())}" fill="${e}"/>`,
      )
      .join("")}${r.front}</svg>`,
    x = [];
  let M = 0,
    L = h > 4 ? 215 : 250;
  for (; x.length < h && M++ < 4e3;) {
    const t = p(70, 930),
      a = p(Math.max(130, l), 1330);
    x.some((e) => Math.hypot(e.x - t, e.y - a) < L) ||
      (!x.length && a < 0.8 * i && e.hz > 0.2) ||
      (x.push({ x: t, y: a }), M > 3e3 && x.length < h && (L = 150));
  }
  for (; x.length < h;) x.push({ x: p(70, 930), y: p(Math.max(130, l), 1330) });
  x.forEach((t, a) => {
    if (a) {
      const s = e.it[a - 1];
      ((t.k = "o"), (t.e = s[0]), (t.n = s[1]), (t.s = s[2]), (t.r = 0.78 * f));
    } else
      ((t.k = "g"),
        (t.e = ""),
        (t.n = e.x ? "Zeni" : "le petit bonhomme"),
        (t.s = e.x ? "Zeni" : "bonhomme"),
        (t.r = 0.85 * f));
  });
  const T = [],
    k = (e, t, a) => x.every((s) => Math.hypot(s.x - e, s.y - t) >= 0.5 * a + 0.14 * f);
  let w = 0;
  for (; T.length < u && w++ < 8 * u;) {
    const e = i > 240 && s() < 0.3 && !l,
      t = e ? p(50, i - 10) : p(Math.max(i - 10, l), 1370),
      a = p(10, 990);
    let n = p(24, 44) * (0.72 + (t / o) * 0.5);
    (s() < 0.06 && (n *= 1.7),
      k(a, t, n) &&
        !c(a, t) &&
        T.push({ e: m(e ? g : E), x: a, y: t, s: n, a: p(-16, 16), f: s() < 0.5 ? -1 : 1 }));
  }
  (x.forEach((e) => {
    const t = 2 + Math.floor(2 * s());
    for (let a = 0; a < t; a++) {
      const t = p(0, 2 * Math.PI),
        a = f * p(0.6, 0.82),
        n = f * p(1.05, 1.4);
      T.push({
        e: m(e.y < i - 10 && g.length ? g : E),
        x: e.x + Math.cos(t) * a,
        y: e.y + Math.abs(Math.sin(t)) * a * 0.6 + 3,
        s: n,
        a: p(-10, 10),
        f: s() < 0.5 ? -1 : 1,
      });
    }
  }),
    r.extra.forEach((e) => T.push({ e: e.e, x: e.x, y: e.y, s: e.s, a: 0, f: 1 })));
  const R = [];
  for (let e = 0; e < 16; e++) {
    const e = i > 240 && s() < 0.3 && !l,
      t = e ? p(80, i - 20) : p(Math.max(i - 70, l - 40), Math.max(i + 60, l + 50)),
      a = p(70, 130),
      o = p(0, n);
    k(o, t, 1.1 * a) &&
      !c(o, t) &&
      R.push({ e: m(e ? g : E), x: o, y: t, s: a, a: p(-8, 8), f: s() < 0.5 ? -1 : 1 });
  }
  for (let e = 0, t = 0; e < 110 && t < 900; t++) {
    const t = p(Math.max(i + 10, l), 1380),
      a = p(10, 990),
      n = p(13, 20);
    k(a, t, n) &&
      !c(a, t) &&
      (T.push({ e: m(E), x: a, y: t, s: n, a: p(-25, 25), f: s() < 0.5 ? -1 : 1 }), e++);
  }
  const C = [
    ...R.map((e) => ({
      y: -1e3 + e.y,
      h: `<span class="ht far" style="left:${e.x.toFixed(1)}px;top:${e.y.toFixed(1)}px;font-size:${e.s.toFixed(1)}px;transform:translate(-50%,-50%) rotate(${e.a.toFixed(1)}deg) scaleX(${e.f})">${e.e}</span>`,
    })),
    ...T.map((e) => ({
      y: e.y,
      h: `<span class="ht" style="left:${e.x.toFixed(1)}px;top:${e.y.toFixed(1)}px;font-size:${e.s.toFixed(1)}px;transform:translate(-50%,-50%) rotate(${e.a.toFixed(1)}deg) scaleX(${e.f})">${e.e}</span>`,
    })),
    ...x.map((e, t) => ({
      y: e.y,
      h:
        "g" === e.k
          ? `<span class="ht g" data-t="${t}" style="left:${e.x.toFixed(1)}px;top:${e.y.toFixed(1)}px;width:${(1.05 * f).toFixed(1)}px">${qzGuy("ask")}</span>`
          : `<span class="ht o" data-t="${t}" style="left:${e.x.toFixed(1)}px;top:${e.y.toFixed(1)}px;font-size:${f}px">${e.e}</span>`,
    })),
  ];
  return (C.sort((e, t) => e.y - t.y), { html: S + C.map((e) => e.h).join(""), T: x });
}
function pCherche(e) {
  const t = Math.min(lv, CHU.length - 1),
    a = CHU[t],
    s = e && Number.isInteger(e.sd) ? e.sd : (1e9 * Math.random()) | 0,
    n = chScene(a, t, s),
    o = n.T;
  let i =
      e && Array.isArray(e.f)
        ? [...new Set(e.f.filter((e) => Number.isInteger(e) && e >= 0 && e < o.length))]
        : [],
    r = !e,
    l = !1;
  snap = () => ({ sd: s, f: i });
  const c = () => playing && "cherche" === cur && document.body.contains($("#hv")),
    d = () =>
      o
        .map((e, t) => {
          const a = i.includes(t);
          return `<div class="hti${a ? " ok" : ""}" data-t="${t}"><span class="hte">${"g" === e.k ? qzGuy(a ? "ok" : "ask") : e.e}</span><small>${e.s}</small>${a ? "<b>✓</b>" : ""}</div>`;
        })
        .join("");
  (($("#nav").hidden = !0),
    (mt = "m"),
    keep(),
    (app.innerHTML = `<div class="hf" id="hf" style="--bc1:${a.bc[0]};--bc2:${a.bc[1]};--bink:${a.bc[2]};--bem:'${[...a.ge.filter((e) => e.length <= 4).slice(0, 7)].join(" ")}  '"><div class="hv" id="hv"><div class="hw" id="hw" style="width:1000px;height:1400px">${n.html}</div></div>\n<div class="htb"></div>\n<div class="hhd"><button class="back" data-a="back" data-v="hub">‹ Retour</button><span class="hsp"></span><button class="hb skh" data-a="skip">Passer</button><button class="hb hintb" data-a="hint" aria-label="Indice : coûte 1 bulle">${HBI(1)}</button><div class="chip">🫧 ${FLX()}</div></div>\n<p class="m hmsg" id="m" role="status" aria-live="polite"></p>\n<div class="skw" id="skw"></div>\n<div class="hbar"><button class="hzb" data-a="chz" data-v="-1" aria-label="Rétrécir">−</button><div class="htr" id="htr" aria-label="À trouver">${d()}</div><button class="hzb" data-a="chz" data-v="1" aria-label="Agrandir">+</button></div>\n${r ? `<div class="hov" id="hov"><div class="hcd glass"><h2>${a.n}</h2><p>${a.s}</p><div class="hli">${o.map((e) => `<span>${"g" === e.k ? '<i class="hg">' + qzGuy("ask") + "</i>" : "<i>" + e.e + "</i>"}<em>${e.n}</em></span>`).join("")}</div><button class="btn" data-a="chgo">C’est parti</button></div></div>` : ""}</div>`));
  const f = $("#hv"),
    u = $("#hw");
  let h = 1,
    p = 0,
    m = 0,
    b = 0,
    g = 0,
    E = 0.5,
    y = 3,
    v = 0,
    A = 0;
  const S = () => {
      Math.abs(h - v) < 1e-4 ||
        ((v = h),
        (u.style.willChange = "auto"),
        requestAnimationFrame(() => {
          u.style.willChange = "transform";
        }));
    },
    x = () => {
      ((() => {
        h = Math.max(E, Math.min(y, h));
        const e = CHW * h,
          t = CHH * h;
        ((p = b >= e ? (b - e) / 2 : Math.min(0, Math.max(b - e, p))),
          (m = g >= t ? (g - t) / 2 : Math.min(0, Math.max(g - t, m))));
      })(),
        (u.style.transform = `translate(${p.toFixed(1)}px,${m.toFixed(1)}px) scale(${h.toFixed(4)})`),
        Math.abs(h - v) > 1e-4 && (clearTimeout(A), (A = setTimeout(S, 350))));
    },
    M = () => {
      const e = h <= 1.001 * E;
      ((b = f.clientWidth || innerWidth),
        (g = f.clientHeight || innerHeight),
        (E = Math.max(b / CHW, g / CHH)),
        (y = Math.max(3.2 * E, 2.6)),
        (!e && u.style.transform) || (h = 1.12 * E),
        x());
    };
  (M(), (p = (b - CHW * h) / 2), (m = 0), x(), (v = h));
  const L = (e, t, a) => {
      a = Math.max(E, Math.min(y, a));
      const s = (e - p) / h,
        n = (t - m) / h;
      ((h = a), (p = e - s * h), (m = t - n * h), x());
    },
    T = () => {
      if (!document.body.contains(f)) return removeEventListener("resize", T);
      ((C = null), M());
    };
  addEventListener("resize", T);
  const k = new Map();
  let w = null,
    R = !1,
    C = null;
  const O = (e) => {
    const t = C || (C = f.getBoundingClientRect()),
      z = f.offsetWidth ? t.width / f.offsetWidth : 1;
    return [(e.clientX - t.left) / z, (e.clientY - t.top) / z];
  };
  const I = (e) => {
    const t = k.get(e.pointerId);
    if (
      t &&
      (k.delete(e.pointerId),
      k.size < 2 && (w = null),
      !R && 0 === k.size && Date.now() - t.t < 600 && N(t.x, t.y),
      1 === k.size)
    ) {
      const e = [...k.values()][0];
      ((e.sx = e.x), (e.sy = e.y), (R = !0));
    }
  };
  // Contrôles via Input : toucher un objet, glisser pour déplacer la vue, pincer ou molette pour zoomer.
  (Input.sur(
    ["toucher", "glisser", "survoler", "lacher"],
    (quoi, inf) => {
      const e = inf.evt;
      if ("toucher" === quoi) {
        if (r || l) return;
        C = null;
        try {
          f.setPointerCapture(e.pointerId);
        } catch (e) {}
        const [t, a] = O(e);
        if ((k.set(e.pointerId, { x: t, y: a, sx: t, sy: a, t: Date.now() }), (R = !1), 2 === k.size)) {
          const [e, t] = [...k.values()];
          ((w = {
            d: Math.hypot(e.x - t.x, e.y - t.y) || 1,
            s: h,
            mx: (e.x + t.x) / 2,
            my: (e.y + t.y) / 2,
            wx: ((e.x + t.x) / 2 - p) / h,
            wy: ((e.y + t.y) / 2 - m) / h,
          }),
            (R = !0));
        }
      } else if ("lacher" === quoi) I(e);
      else {
        const t = k.get(e.pointerId);
        if (!t) return;
        const [a, s] = O(e);
        if (2 === k.size && w) {
          ((t.x = a), (t.y = s));
          const [e, n] = [...k.values()],
            o = Math.hypot(e.x - n.x, e.y - n.y) || 1,
            i = (e.x + n.x) / 2,
            r = (e.y + n.y) / 2;
          return (
            (h = Math.max(E, Math.min(y, (w.s * o) / w.d))),
            (p = i - w.wx * h),
            (m = r - w.wy * h),
            void x()
          );
        }
        1 === k.size &&
          (!R && Math.hypot(a - t.sx, s - t.sy) > 8 && (R = !0),
          R && ((p += a - t.x), (m += s - t.y), x()),
          (t.x = a),
          (t.y = s));
      }
    },
    { cible: f, annulation: !0 },
  ),
    Input.sur(
      "defiler",
      (quoi, inf) => {
        const e = inf.evt;
        (e.preventDefault(), (C = null));
        const [t, a] = O(e);
        L(t, a, h * (e.deltaY < 0 ? 1.18 : 1 / 1.18));
      },
      { cible: f, passive: !1 },
    ));
  const N = (e, t) => {
      const a = (e - p) / h,
        s = (t - m) / h;
      let n = -1,
        r = 1e9;
      if (
        (o.forEach((e, t) => {
          if (i.includes(t)) return;
          const o = Math.hypot(e.x - a, e.y - s);
          o <= Math.max(e.r, 26 / h) && o < r && ((r = o), (n = t));
        }),
        n < 0)
      )
        return (
          ((e, t) => {
            const a = document.createElement("i");
            ((a.className = "hrp"),
              (a.style.left = e + "px"),
              (a.style.top = t + "px"),
              u.appendChild(a),
              setTimeout(() => a.remove(), 600));
          })(a, s),
          void sfx(330, 0.06)
        );
      P(n);
    },
    P = (e) => {
      if (i.includes(e)) return;
      (i.push(e), keep());
      const t = o[e],
        s = u.querySelector(`.ht[data-t="${e}"]`);
      s && s.classList.add("f");
      const n = $("#htr");
      if (
        (n && (n.innerHTML = d()),
        sfx(e ? 740 : 880, 0.35),
        setTimeout(() => sfx(e ? 988 : 1175, 0.45), 130),
        vib(e ? 20 : [20, 40, 20]),
        i.length >= o.length)
      ) {
        ((l = !0), msg("Tout est trouvé !"));
        const e = $(".hmsg");
        return (
          e && e.classList.add("big"),
          setTimeout(() => {
            c() && win();
          }, 1700),
          [523, 659, 784, 1047].forEach((e, t) => setTimeout(() => sfx(e, 0.6), 500 + 160 * t)),
          void (s && confetti(s))
        );
      }
      msg(
        "g" === t.k
          ? a.x
            ? "Tu as retrouvé Zeni ! Cherche encore les objets."
            : "Tu as retrouvé le petit bonhomme ! Cherche encore ses affaires."
          : "Trouvé : " + t.n + " !",
      );
    };
  {
    const e = $(".hmsg");
    let t = 0;
    e &&
      new MutationObserver(() => {
        (clearTimeout(t),
          e.textContent &&
            !l &&
            (t = setTimeout(() => {
              e.textContent = "";
            }, 5e3)));
      }).observe(e, { childList: !0, characterData: !0, subtree: !0 });
  }
  ((act.chz = (e) => {
    l ||
      (u.classList.add("sm"),
      L(b / 2, g / 2, h * (+e > 0 ? 1.4 : 1 / 1.4)),
      setTimeout(() => u.classList.remove("sm"), 450));
  }),
    (act.chgo = () => {
      r = !1;
      const e = $("#hov");
      (e && e.remove(), msg("Fais glisser la scène, pince pour agrandir, touche ce que tu trouves."));
    }),
    (act.hint = () => {
      if (r || l) return;
      const e = o.map((e, t) => t).filter((e) => !i.includes(e));
      if (!e.length || !spend(1)) return;
      const t = e[Math.floor(Math.random() * e.length)],
        a = o[t];
      (u.classList.add("sm"),
        (h = Math.max(h, 1.7 * E)),
        (p = b / 2 - a.x * h),
        (m = g / 2 - a.y * h),
        x(),
        setTimeout(() => u.classList.remove("sm"), 700));
      const s = 60 * (Math.random() - 0.5),
        n = 60 * (Math.random() - 0.5),
        c = document.createElement("i");
      ((c.className = "hrg"),
        (c.style.left = a.x + s + "px"),
        (c.style.top = a.y + n + "px"),
        u.appendChild(c),
        setTimeout(() => c.remove(), 3600),
        msg("Indice : ce que tu cherches est dans le cercle qui brille."));
    }),
    i.length >= o.length &&
      e &&
      setTimeout(() => {
        c() && win();
      }, 300),
    i.forEach((e) => {
      const t = u.querySelector(`.ht[data-t="${e}"]`);
      t && t.classList.add("f");
    }));
}
function chArt(e, t, a, s, n) {
  const o = CHART[e];
  if (!o) return { back: "", front: "", avoid: [], extra: [] };
  const i = o(chRnd(1540483477 ^ t), a, s, n),
    r = (e) => e.replace(/\d+\.\d{2,}/g, (e) => (+e).toFixed(1));
  return ((i.back = r(i.back)), (i.front = r(i.front)), i);
}
