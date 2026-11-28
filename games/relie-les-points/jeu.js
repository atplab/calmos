// Relie les points (id « flow ») : niveaux FLC/FLO, génération flGen, écran pFlow.
const FLC = [
  "#ff5a5f",
  "#4f8cff",
  "#3ccf6e",
  "#ffd84a",
  "#ff9a3c",
  "#5fe0e6",
  "#e65cd7",
  "#a06cff",
  "#b8e986",
  "#f2f2f2",
  "#c9874a",
  "#ff8fb1",
];
const flSz = (e) => (e < 5 ? 5 : e < 15 ? 6 : e < 30 ? 7 : e < 45 ? 8 : 9);
const FLO = (() => {
  const e = rng(424242),
    t = [...Array(49).keys()]
      .map((e) => e + 10)
      .map((e) => [e, flSz(e)])
      .concat([...Array(15).keys()].map((e) => [100 + e, 6]));
  for (let a = t.length - 1; a > 0; a--) {
    const s = Math.floor(e() * (a + 1));
    [t[a], t[s]] = [t[s], t[a]];
  }
  return [...[...Array(10).keys()].map((e) => [e, flSz(e)]), ...t.slice(0, 39), [59, 9], ...t.slice(39)];
})();
function flGen(e) {
  const t = FLO[e] || [e, e >= NLS.flow && e % 3 == 2 ? 8 : 7];
  return flGen0(t[0], t[1]);
}
function flGen0(e, t) {
  const a = rng(2246822519 * (e + 3) + 17),
    s = t * t,
    n = (e) => {
      const a = (e / t) | 0,
        s = e % t,
        n = [];
      return (
        a && n.push(e - t),
        a < t - 1 && n.push(e + t),
        s && n.push(e - 1),
        s < t - 1 && n.push(e + 1),
        n
      );
    };
  let o = null;
  for (let e = 0; e < 300; e++) {
    let e = [];
    for (let a = 0; a < t; a++) for (let s = 0; s < t; s++) e.push(a * t + (a % 2 ? t - 1 - s : s));
    for (let t = 0; t < 60 * s; t++) {
      a() < 0.5 && e.reverse();
      const t = n(e[0]),
        s = t[(a() * t.length) | 0],
        o = e.indexOf(s);
      o > 1 && (e = e.slice(0, o).reverse().concat(e.slice(o)));
    }
    const i = t - 1 + (a() < 0.5 ? 0 : 1) + (t >= 9 && a() < 0.5 ? 1 : 0),
      r = Array(i).fill(3);
    let l = s - 3 * i;
    const c = r.map(() => 0.3 + a() * a() * 2.5),
      d = c.reduce((e, t) => e + t, 0);
    for (let e = 0; e < i; e++) {
      const t = Math.floor((l * c[e]) / d);
      r[e] += t;
    }
    let f = s - r.reduce((e, t) => e + t, 0);
    for (; f-- > 0;) r[(a() * i) | 0]++;
    const u = [];
    let h = 0;
    for (const t of r) (u.push(e.slice(h, h + t)), (h += t));
    const p =
      10 *
        u.filter((e) => {
          return (
            (a = e[0]),
            (s = e[e.length - 1]),
            Math.abs(((a / t) | 0) - ((s / t) | 0)) + Math.abs((a % t) - (s % t)) === 1
          );
          var a, s;
        }).length +
      u.filter((e) => e.every((a) => ((a / t) | 0) == ((e[0] / t) | 0)) || e.every((a) => a % t === e[0] % t))
        .length;
    if (((!o || p < o.sc) && (o = { sc: p, S: u }), 0 === p)) break;
  }
  const i = o.S.map((e) => (a() < 0.5 ? e.slice().reverse() : e));
  return { n: t, S: i, F: i.map((e) => [e[0], e[e.length - 1]]) };
}
function pFlow(e) {
  const t = flGen(lvD("flow")),
    a = t.n,
    s = t.F.length,
    n = a * a,
    o = {};
  t.F.forEach(([e, t], a) => {
    ((o[e] = a), (o[t] = a));
  });
  const i = (e, t) => Math.abs(((e / a) | 0) - ((t / a) | 0)) + Math.abs((e % a) - (t % a)) === 1;
  let r = e && 2 === e.v && e.p && e.p.length === s ? e.p.map((e) => e.slice()) : t.F.map(() => []),
    l = (e && e.mv) || 0,
    c = -1,
    d = null,
    f = r.map(() => !1),
    u = !1;
  snap = () => ({ v: 2, p: r, mv: l });
  const h = () => {
      const e = Array(n).fill(-1);
      return (r.forEach((t, a) => t.forEach((t) => (e[t] = a))), e);
    },
    p = (e) => FLC[e % FLC.length],
    m = (e) => (e % a) + 0.5,
    b = (e) => 0.5 + ((e / a) | 0);
  let g = "";
  for (let e = 1; e < a; e++) g += `M${e} 0V${a}M0 ${e}H${a}`;
  frame(
    `<div class="fls" id="fls"></div><div class="flw"><svg class="flv" id="flv" viewBox="-.06 -.06 ${a + 0.12} ${a + 0.12}">\n  <g>${[...Array(n).keys()].map((e) => `<rect class="flc" id="fc${e}" x="${(e % a) + 0.04}" y="${0.04 + ((e / a) | 0)}" width=".92" height=".92" rx=".1" style="--d:${35 * ((e % a) + ((e / a) | 0))}ms"/>`).join("")}</g>\n  <path class="flg" d="M0 0H${a}V${a}H0Z${g}"/>\n  <circle class="flcur" id="flcur" r=".62" cx="-5" cy="-5"/>\n  <g>${t.F.map((e, t) => `<polyline class="flp" id="fp${t}" stroke="${p(t)}" points=""/>`).join("")}</g>\n  <g>${t.F.map(([e, t], a) => [e, t].map((e) => `<circle class="fld" data-c="${a}" fill="${p(a)}" cx="${m(e)}" cy="${b(e)}" r=".34"/>`).join("")).join("")}</g>\n </svg></div>`,
    1,
  );
  const E = $("#flv"),
    y = $("#flcur"),
    v = () => {
      const e = h();
      for (let t = 0; t < n; t++) $("#fc" + t).style.fill = e[t] < 0 ? "" : p(e[t]);
      r.forEach((e, t) => $("#fp" + t).setAttribute("points", e.map((e) => m(e) + "," + b(e)).join(" ")));
      const t = r.map((e, t) =>
        ((e) => {
          const t = r[e];
          return t.length > 1 && o[t[t.length - 1]] === e && t[t.length - 1] !== t[0];
        })(t),
      );
      (E.querySelectorAll(".fld").forEach((e) => {
        const a = +e.dataset.c;
        (e.classList.toggle("ok", t[a]),
          t[a] && !f[a] && (e.classList.remove("pop"), e.getBBox(), e.classList.add("pop")));
      }),
        t.forEach((e, t) => {
          ($("#fp" + t).classList.toggle("ok", e), e && !f[t] && d && (sfx(520 + 40 * t, 0.25), vib(12)));
        }),
        (f = t));
      const a = e.filter((e) => e >= 0).length;
      return (
        ($("#fls").innerHTML =
          `<span>Fils <b>${t.filter(Boolean).length}/${s}</b></span><span>Coups <b>${l}</b></span><span>Grille <b>${Math.round((100 * a) / n)} %</b></span>`),
        { ok: t, f: a }
      );
    },
    A = (e) => {
      const t = E.getBoundingClientRect(),
        s = (a + 0.12) / t.width;
      return [(e.clientX - t.left) * s - 0.06, (e.clientY - t.top) * s - 0.06];
    },
    S = ([e, t]) => (e < 0 || t < 0 || e >= a || t >= a ? -1 : (0 | t) * a + (0 | e)),
    x = () => {
      const e = new Set(d.p);
      r = d.base.map((t, a) => {
        if (a === d.c) return d.p;
        const s = t.findIndex((t) => e.has(t));
        return s < 0 ? t.slice() : t.slice(0, s);
      });
    },
    M = (e) => {
      const t = d.p,
        a = t[t.length - 1];
      if (e === a) return !0;
      const s = t.indexOf(e);
      return s >= 0
        ? ((t.length = s + 1), !0)
        : !(
            !i(a, e) ||
            (t.length > 1 && o[a] === d.c) ||
            (void 0 !== o[e] && o[e] !== d.c) ||
            (t.push(e), 0)
          );
    };
  const L = () => {
    if (!d) return;
    const e = JSON.stringify(r) !== d.b0;
    (e && d.c !== c && (l++, (c = d.c)), (d = null), E.classList.remove("drg"));
    const t = v();
    (e && sv(), T(t));
  };
  // Contrôles via Input : appuyer sur un point ou un tuyau, glisser pour le tracer, lâcher pour finir.
  // lostpointercapture n’est pas une action d’entrée : il reste un écouteur direct (L ne fait rien deux fois).
  (Input.sur(
    ["toucher", "glisser", "survoler", "lacher"],
    (k, inf) => {
      const e = inf.evt;
      if ("toucher" === k) {
        if (u) return;
        const t = A(e),
          a = S(t);
        if (a < 0) return;
        const s = h();
        let n, i;
        if (void 0 !== o[a]) ((n = o[a]), (i = [a]));
        else {
          if (!(s[a] >= 0)) return;
          ((n = s[a]), (i = r[n].slice(0, r[n].indexOf(a) + 1)));
        }
        d = { c: n, p: i, base: r.map((e) => e.slice()), b0: JSON.stringify(r) };
        try {
          E.setPointerCapture(e.pointerId);
        } catch (e) {}
        (y.setAttribute("cx", t[0]),
          y.setAttribute("cy", t[1]),
          (y.style.fill = p(n)),
          E.classList.add("drg"),
          x(),
          v(),
          e.preventDefault());
      } else if ("lacher" === k) L(e);
      else {
        if (!d) return;
        const t = A(e);
        (y.setAttribute("cx", t[0]),
          y.setAttribute("cy", t[1]),
          ((e) => {
            let t = d.p[d.p.length - 1],
              s = 0;
            for (; t !== e && s++ < 20;) {
              if (d.p.includes(e)) {
                M(e);
                break;
              }
              const s = ((e / a) | 0) - ((t / a) | 0),
                o = (e % a) - (t % a),
                r =
                  Math.abs(s) >= Math.abs(o)
                    ? [t + Math.sign(s) * a, t + Math.sign(o)]
                    : [t + Math.sign(o), t + Math.sign(s) * a];
              let l = !1;
              for (const e of r)
                if (e !== t && e >= 0 && e < n && i(t, e) && M(e)) {
                  l = !0;
                  break;
                }
              if (!l) break;
              t = d.p[d.p.length - 1];
            }
            (x(), v());
          })(S([Math.min(a - 0.01, Math.max(0, t[0])), Math.min(a - 0.01, Math.max(0, t[1]))])));
      }
    },
    { cible: E, annulation: !0 },
  ),
    E.addEventListener("lostpointercapture", L));
  const T = (e) => {
    u ||
      (e.ok.every(Boolean) &&
        (e.f === n
          ? ((u = !0), E.classList.add("won"), msg("Toute la grille brille ✦"), setTimeout(win, 1300))
          : msg("Tous les fils sont reliés : remplis aussi toute la grille.")));
  };
  ((act.hint = () => {
    if (u) return;
    const e = r.findIndex(
      (e, a) => e.join() !== t.S[a].join() && e.join() !== t.S[a].slice().reverse().join(),
    );
    if (e < 0 || !spend(1)) return;
    const a = new Set(t.S[e]);
    r = r.map((s, n) => {
      if (n === e) return t.S[e].slice();
      const o = s.findIndex((e) => a.has(e));
      return o < 0 ? s : s.slice(0, o);
    });
    const s = $("#fp" + e);
    (s.classList.remove("hn"), s.getBBox(), s.classList.add("hn"), sv(), T(v()));
  }),
    v());
}
