// Déménagement (id « demenage ») : découpe dCut, scènes dSceneX, écran pDemen2.
const dSz = (e) => DSZ[e] || 26;
const dCut = (e) => {
  const t = e.s.indexOf(
    '<polygon points="' + dF([e.P(0, 0), e.P(0, e.D), e.P(0, e.D, e.Hh), e.P(0, 0, e.Hh)]) + '"',
  );
  t > 0 && (e.s = e.s.slice(0, t));
};
const dSceneX = (e) => {
  const t = dNew(e.W, e.D, e.Hh, e.c[0], e.c[1], e.c[2], e.c[3]);
  return (dCut(t), e.w(t), e.b(t), t);
};
function pDemen2(e) {
  const t = isX("demenage", lv),
    a = t ? xn("demenage", lv) - 1 : lv,
    s = t ? DXR[a % DXR.length] : DRM[a] || DRM[0],
    n = s.items,
    o = t ? dSceneX(s) : dScene(DRM[a] ? a : 0),
    i = o.P,
    r = o.vw,
    l = o.vh;
  e && 2 !== e.v && (e = null);
  const c = (e) => e.map((e) => e[0].toFixed(1) + "," + e[1].toFixed(1)).join(" "),
    d = [];
  (o.st.forEach((e, t) =>
    e.parts.forEach((a, s) => d.push(Object.assign({ id: t + "." + s, si: t, S: e }, a))),
  ),
    d.forEach((e) => {
      const t = e.S.fp,
        { u0: a, u1: s, z0: n, z1: o } = e,
        i = { front: [t(a, n), t(s, n), t(s, o), t(a, o)] };
      if ("door" === e.t) {
        const r = 0.96 * (s - a),
          l = "l" === e.hg ? -1 : 1,
          c = "l" === e.hg ? a : s,
          d = "l" === e.hg ? 0.34 : 1.15,
          f = l * r * Math.sin(d),
          u = r * Math.cos(d);
        ((i.panel = [t(c, n), t(c, n, u, f), t(c, o, u, f), t(c, o)]),
          (i.zone = i.front),
          (i.slots = [...Array(e.cap)].map((i, r) => t((a + s) / 2, o - ((r + 0.5) * (o - n)) / e.cap))),
          (i.an = "c"));
      } else {
        const r = 0.8,
          l = n + 0.06;
        ((i.floor = [t(a, l), t(s, l), t(s, l, r), t(a, l, r)]),
          (i.fr = [t(a, n, r), t(s, n, r), t(s, o, r), t(a, o, r)]),
          (i.sl = [t(a, n), t(a, n, r), t(a, o, r), t(a, o)]),
          (i.sr = [t(s, n), t(s, n, r), t(s, o, r), t(s, o)]),
          (i.panel = i.fr),
          (i.zone = dHull([...i.floor, ...i.fr])),
          (i.slots = [...Array(e.cap)].map((n, o) => t(a + ((o + 1) * (s - a)) / (e.cap + 1), l, 0.5 * r))),
          (i.an = "b"));
      }
      e.g = i;
    }));
  let f = e && e.p ? e.p.filter((e) => n.includes(e.id) && (!e.c || d.some((t) => t.id === e.c))) : [];
  const u = new Set(e && e.o ? e.o.filter((e) => d.some((t) => t.id === e)) : []),
    h = ((b = 7919 * lv + (t ? 77 : 13)), () => (b = (1103515245 * b + 12345) & 2147483647) / 2147483647),
    p = 1.05,
    m = 0.8;
  var b;
  const g = (e, t) =>
      dHull([
        i(e, t),
        i(e + p, t),
        i(e + p, t + p),
        i(e, t + p),
        i(e, t, m),
        i(e + p, t, m),
        i(e + p, t + p, m),
        i(e, t + p, m),
      ]),
    E = (e, t) => e.some((e) => dIn(e, t)) || t.some((t) => dIn(t, e)) || dIn(dCen(e), t),
    y = (e, t) => {
      const a = 0.02,
        s = e.x >= t.x + t.w - a,
        n = e.y >= t.y + t.d - a,
        o = e.x + e.w <= t.x + a,
        i = e.y + e.d <= t.y + a;
      return (
        !(!s || i) ||
        !(!n || o) ||
        (!!((s && i) || (n && o)) && e.x + e.w / 2 + e.y + e.d / 2 > t.x + t.w / 2 + t.y + t.d / 2)
      );
    },
    v = (e, t, a = 0) => {
      const s = i(e + p / 2, t + p / 2, m + a);
      return [
        [s[0] - 17, s[1] - 40],
        [s[0] + 17, s[1] - 40],
        [s[0] + 17, s[1] + 2],
        [s[0] - 17, s[1] + 2],
      ];
    },
    A = o.ch.map((e) =>
      dHull([
        i(e.x, e.y, e.z),
        i(e.x + e.w, e.y, e.z),
        i(e.x + e.w, e.y + e.d, e.z),
        i(e.x, e.y + e.d, e.z),
        i(e.x, e.y, e.z + e.h),
        i(e.x + e.w, e.y, e.z + e.h),
        i(e.x + e.w, e.y + e.d, e.z + e.h),
        i(e.x, e.y + e.d, e.z + e.h),
      ]),
    ),
    S = (e, t, a) => {
      const s = { x: e, y: t, w: p, d: p },
        n = g(e, t),
        i = v(e, t);
      return (
        !!o.ch.some((e, t) => y(e, s) && (E(A[t], i) || E(A[t], n))) ||
        a.some(([e, t]) => {
          const a = { x: e, y: t, w: p, d: p };
          return (y(a, s) && (E(g(e, t), i) || E(g(e, t), n))) || (y(s, a) && E(n, v(e, t)));
        })
      );
    },
    x = (() => {
      const e = Math.min(3, Math.max(2, Math.ceil(n.length / 4))),
        t = o.zs
          .filter((e) => "floor" !== e.k && "wall" !== e.k)
          .map((e) => e.hull)
          .concat(d.map((e) => dHull([...e.g.front, ...e.g.panel, ...(e.g.floor || [])]))),
        a = [];
      for (let e = 0.2; e <= s.W - p - 0.15; e += 0.25)
        for (let t = 0.2; t <= s.D - p - 0.15; t += 0.25) a.push([e, t, e + t + 3 * h()]);
      a.sort((e, t) => t[2] - e[2]);
      const i = (e, t) =>
          o.ch.some((a) => a.z < 0.3 && a.x < e + p && a.x + a.w > e && a.y < t + p && a.y + a.d > t),
        r = [];
      for (const s of [0, 1, 2, 3])
        for (const [n, o] of a) {
          if (r.length >= e) break;
          r.some(([e, t]) => Math.abs(e - n) < 1.3 && Math.abs(t - o) < 1.3) ||
            (s < 3 && i(n, o)) ||
            (s < 2 && t.some((e) => E(g(n, o), e))) ||
            (s < 3 && S(n, o, r)) ||
            (0 === s && r.some(([e, t]) => Math.abs(e - n) < 1.6 && Math.abs(t - o) < 1.6)) ||
            r.push([n, o]);
        }
      return r.sort((e, t) => e[0] + e[1] - (t[0] + t[1]));
    })(),
    M = x.map(() => 0),
    L = {};
  if (s.stk && x.length >= 2) {
    const e = (e) => i(x[e][0] + p / 2, x[e][1] + p / 2)[0],
      t = x.map((e, t) => t).sort((t, a) => e(t) - e(a)),
      a = t[0],
      s = t[t.length - 1];
    ((x[s] = x[a].slice()), (M[s] = m), (L[a] = s));
  }
  const T = (() => {
      if (e && e.b && e.b.length === x.length && e.b.flat().slice().sort().join() === n.slice().sort().join())
        return e.b.map((e) => e.slice());
      const t = x.map(() => []),
        a = n.slice();
      for (let e = a.length - 1; e > 0; e--) {
        const t = Math.floor(h() * (e + 1));
        [a[e], a[t]] = [a[t], a[e]];
      }
      return (a.forEach((e, a) => t[a % x.length].push(e)), t);
    })(),
    k = new Set(e && e.bo ? e.bo : []);
  let w = null,
    R = !1,
    C = !1,
    O = -1,
    I = 0;
  snap = () => ({ v: 2, p: f, o: [...u], b: T, bo: [...k] });
  const N = (e) => f.some((t) => t.id === e),
    P = () => n.filter((e) => !N(e)),
    U = (e) => T[e].filter((e) => !N(e)),
    q = (e) => (DOK[e] && DOK[e].a) || [],
    D = (e) => (DIT[e.id][2].includes(e.k) ? 2 : q(e.id).includes(e.k) ? 1 : 0),
    H = o.ch,
    G = H.length;
  let F = "",
    B = 0;
  ([
    ...o.st.map((e, t) => ({ at: e.at, t: 0, g: `<g id="dmst${t}"></g>` })),
    ...H.map((e, t) => ({ at: e.at, t: 1, g: `<g id="dmc${t}"></g>` })),
  ]
    .sort((e, t) => e.at - t.at || e.t - t.t)
    .forEach((e) => {
      ((F += o.s.slice(B, e.at) + e.g), (B = e.at));
    }),
    (F += o.s.slice(B) + `<g id="dmc${G}"></g>`));
  const z = (e, t) => {
      const a = 0.02,
        s = e.x >= t.x + t.w - a,
        n = e.y >= t.y + t.d - a,
        o = e.x + e.w <= t.x + a,
        i = e.y + e.d <= t.y + a;
      return (
        !(!s || i) ||
        !(!n || o) ||
        (!!((s && i) || (n && o)) && e.x + e.w / 2 + e.y + e.d / 2 > t.x + t.w / 2 + t.y + t.d / 2)
      );
    },
    V = (e, t, a, s) => {
      const n = { x: e, y: t, w: a, d: s };
      let o = G - 1;
      for (; o >= 0 && !z(n, H[o]);) o--;
      return o + 1;
    };
  frame(
    `<div class="dm2"><div class="dmhud"><div class="dmhn"><b>${t ? "Fêtes · " : ""}${s.n}</b><div class="dmbar" aria-hidden="true"><i id="dmpb"></i></div><small id="dmbn"></small></div><span class="dmpc" id="dmpc"></span><div class="dmbt"><button class="dmib" data-a="dmz" data-v="-1" aria-label="Dézoomer">−</button><button class="dmib" data-a="dmz" data-v="1" aria-label="Zoomer">+</button><button class="dmib" data-a="dmpause" aria-label="Pause"><svg viewBox="0 0 20 20" aria-hidden="true"><rect x="5" y="4" width="3.4" height="12" rx="1.4"/><rect x="11.6" y="4" width="3.4" height="12" rx="1.4"/></svg></button></div></div><div class="dmw2" id="dmw"><svg id="dmr" viewBox="0 0 ${r} ${l}" role="img" aria-label="${s.n}">${F}<g id="dmh"></g><g id="dmdg"></g><g id="dmfx"></g></svg></div></div>`,
    3,
  );
  const j = $("#dmr"),
    Z = () => $("#dmr") === j && playing,
    Y = (e) => {
      const t = j.getScreenCTM();
      if (!t) return null;
      const a = new DOMPoint(e.clientX, e.clientY).matrixTransform(t.inverse());
      return [a.x, a.y];
    },
    W = (e, t, a, s, n, o = "") =>
      `<g class="dmit ${o}" data-id="${e}">${"b" === s ? `<ellipse cx="${t.toFixed(1)}" cy="${(a - 0.5).toFixed(1)}" rx="${(0.34 * n).toFixed(1)}" ry="${(0.1 * n).toFixed(1)}" fill="rgba(50,30,10,.2)"/>` : ""}<rect class="dmhit" x="${(t - 0.4 * n).toFixed(1)}" y="${(a - ("c" === s ? 0.45 * n : 0.9 * n)).toFixed(1)}" width="${(0.8 * n).toFixed(1)}" height="${(0.85 * n).toFixed(1)}" fill="transparent"/><svg x="${(t - n / 2).toFixed(1)}" y="${(a - ("c" === s ? n / 2 : 0.94 * n)).toFixed(1)}" width="${n}" height="${n}" viewBox="0 0 32 32"><title>${DIT[e][0]}</title>${DIT[e][1]}</svg></g>`,
    K = (e) =>
      (e.pop ? "pop " : "") +
      (w === e.id ? "sel " : "") +
      (C && 0 === D(e) ? "bad " : "") +
      (C && 1 === D(e) ? "meh " : "") +
      (ce && ce.mv && ce.id === e.id ? "lift" : ""),
    Q = (e, t, a) => [e[0] + (t[0] - e[0]) * a, e[1] + (t[1] - e[1]) * a],
    X = (e, t, a, s) =>
      `<line x1="${e[0].toFixed(1)}" y1="${e[1].toFixed(1)}" x2="${t[0].toFixed(1)}" y2="${t[1].toFixed(1)}" stroke="${a}" stroke-width="${s}" stroke-linecap="round"/>`;
  let J = [];
  const _ = () => {
      o.st.forEach((e, t) => {
        const a = $("#dmst" + t);
        if (!a) return;
        const s = d.filter((e) => e.si === t);
        let n = "";
        ([
          ...s.filter((e) => !u.has(e.id)),
          ...s.filter((e) => u.has(e.id)).sort((e, t) => e.z0 - t.z0),
        ].forEach((t) => {
          const a = t.g,
            s = e.c;
          if (!u.has(t.id)) {
            if (
              ((n += `<polygon class="dmd" data-c="${t.id}" points="${c(a.front)}" fill="${dSh(s, "door" === t.t ? 0.96 : 0.92)}" stroke="${dSh(s, 0.55)}" stroke-width=".9" stroke-linejoin="round"/>`),
              "door" === t.t)
            ) {
              const e = "l" === t.hg ? Q(a.front[1], a.front[2], 0.5) : Q(a.front[0], a.front[3], 0.5);
              n += ((e, t) =>
                `<circle cx="${e[0].toFixed(1)}" cy="${e[1].toFixed(1)}" r="1.4" fill="#e8d9a8" stroke="${dSh(t, 0.5)}" stroke-width=".4"/>`)(
                Q(e, "l" === t.hg ? Q(a.front[0], a.front[3], 0.5) : Q(a.front[1], a.front[2], 0.5), 0.14),
                s,
              );
            } else
              n += X(
                Q(Q(a.front[0], a.front[3], 0.5), Q(a.front[1], a.front[2], 0.5), 0.4),
                Q(Q(a.front[0], a.front[3], 0.5), Q(a.front[1], a.front[2], 0.5), 0.6),
                "#e8d9a8",
                1.8,
              );
            return;
          }
          const o = f
            .filter((e) => e.c === t.id)
            .map((e) =>
              W(
                e.id,
                e.x,
                e.y,
                e.a,
                "door" === t.t ? ("wardrobe" === t.k ? 20 : "shed" === t.k ? 24 : 16) : 15,
                K(e),
              ),
            )
            .join("");
          "door" === t.t
            ? ((n += `<polygon points="${c(a.front)}" fill="#3b2a20" stroke="${dSh(s, 0.5)}" stroke-width=".9"/>`),
              (n +=
                "wardrobe" === t.k
                  ? X(Q(a.front[0], a.front[3], 0.88), Q(a.front[1], a.front[2], 0.88), "#b9c3d2", 1.6)
                  : `<polygon points="${c([Q(a.front[0], a.front[3], 0.5), Q(a.front[1], a.front[2], 0.5), Q(a.front[1], a.front[2], 0.54), Q(a.front[0], a.front[3], 0.54)])}" fill="#6b4c38"/>`),
              (n +=
                o +
                `<polygon class="dmd o" data-c="${t.id}" points="${c(a.panel)}" fill="${dSh(s, 1.05)}" stroke="${dSh(s, 0.55)}" stroke-width=".9" stroke-linejoin="round"/>`))
            : (n +=
                `<polygon points="${c(a.front)}" fill="#2e2018"/><polygon points="${c(a.sl)}" fill="${dSh(s, 0.7)}" stroke="${dSh(s, 0.5)}" stroke-width=".6"/><polygon points="${c(a.floor)}" fill="#5a4030" stroke="${dSh(s, 0.5)}" stroke-width=".6"/>` +
                o +
                `<polygon points="${c(a.sr)}" fill="${dSh(s, 0.8)}" stroke="${dSh(s, 0.5)}" stroke-width=".6"/><polygon class="dmd o" data-c="${t.id}" points="${c(a.fr)}" fill="${dSh(s, 0.95)}" stroke="${dSh(s, 0.55)}" stroke-width=".9" stroke-linejoin="round"/>` +
                X(
                  Q(Q(a.fr[0], a.fr[3], 0.5), Q(a.fr[1], a.fr[2], 0.5), 0.4),
                  Q(Q(a.fr[0], a.fr[3], 0.5), Q(a.fr[1], a.fr[2], 0.5), 0.6),
                  "#e8d9a8",
                  1.8,
                ));
        }),
          (a.innerHTML = n));
      });
      const e = [],
        t = (t, a, s) => {
          (e[t] = e[t] || []).push([a, s]);
        };
      ((() => {
        const e = [],
          t = "#c8955a";
        return (
          x.forEach(([a, s], n) => {
            const o = U(n);
            if (!o.length) return;
            let r = "";
            const l = M[n],
              d = (e, t, a = 0) => i(e, t, a + l),
              f = [d(a, s, m), d(a + p, s, m), d(a + p, s + p, m), d(a, s + p, m)],
              u = [d(a, s + p), d(a + p, s + p), d(a + p, s + p, m), d(a, s + p, m)],
              h = [d(a + p, s), d(a + p, s + p), d(a + p, s + p, m), d(a + p, s, m)],
              b = (e, a) =>
                `<polygon points="${c(e)}" fill="${a}" stroke="${dSh(t, 0.6)}" stroke-width=".8" stroke-linejoin="round"/>`,
              g = k.has(n),
              E = d(a + p / 2, s + p / 2, 0);
            if (
              ((r += `<g class="dmbx${g ? " op" : ""}${O === n ? " fresh" : ""}" data-bx="${n}">${l ? "" : `<ellipse cx="${E[0].toFixed(1)}" cy="${(E[1] + 3).toFixed(1)}" rx="${(22.05 * 1.3).toFixed(1)}" ry="${(22.05 * 0.55).toFixed(1)}" fill="rgba(50,30,10,.16)"/>`}`),
              g)
            ) {
              const e = 0.46,
                i = [Math.cos(1.05) * e, Math.sin(1.05) * e],
                l = [Math.cos(0.45) * e, -Math.sin(0.45) * e],
                c = [d(a, s, m), d(a + p, s, m), d(a + p, s - i[0], m + i[1]), d(a, s - i[0], m + i[1])],
                g = [d(a, s, m), d(a, s + p, m), d(a - i[0], s + p, m + i[1]), d(a - i[0], s, m + i[1])],
                E = [
                  d(a + p, s, m),
                  d(a + p, s + p, m),
                  d(a + p + l[0], s + p, m + l[1]),
                  d(a + p + l[0], s, m + l[1]),
                ],
                y = [
                  d(a, s + p, m),
                  d(a + p, s + p, m),
                  d(a + p, s + p + l[0], m + l[1]),
                  d(a, s + p + l[0], m + l[1]),
                ];
              r +=
                `<g class="fl">${b(g, dSh(t, 0.9)) + b(c, dSh(t, 1.04))}</g>` +
                b(u, t) +
                b(h, dSh(t, 0.82)) +
                b(f, "#5a3d22") +
                b(
                  [
                    d(a + 0.06, s + 0.06, m),
                    d(a + p - 0.06, s + 0.06, m),
                    d(a + p - 0.06, s + 0.06, 0.55),
                    d(a + 0.06, s + 0.06, 0.55),
                  ],
                  "#7a5434",
                );
              const v = d(a + p / 2, s + p / 2, m),
                A = o.slice(-1);
              (A.forEach((e, t) => {
                const a = t === A.length - 1,
                  s = a ? Math.min(32, dSz(e) + 4) : 22,
                  o = v[1] + 6 - 9 * t;
                r += `<g class="${a ? "dmtop" : "dmsk"}${a && w === e ? " sel" : ""}${O === n ? " rise" : ""}" data-id="${e}" style="${O === n ? `animation-delay:${140 * t + 120}ms` : ""}"><rect x="${(v[0] - 0.45 * s).toFixed(1)}" y="${(o - 0.94 * s).toFixed(1)}" width="${(0.9 * s).toFixed(1)}" height="${(0.94 * s).toFixed(1)}" fill="transparent"/><svg x="${(v[0] - s / 2).toFixed(1)}" y="${(o - 0.94 * s).toFixed(1)}" width="${s}" height="${s}" viewBox="0 0 32 32"><title>${DIT[e][0]}</title>${DIT[e][1]}</svg></g>`;
              }),
                (r += `<g class="fl">${b(E, dSh(t, 0.88)) + b(y, dSh(t, 1.08))}</g>`));
            } else {
              r +=
                b(u, t) +
                b(h, dSh(t, 0.82)) +
                b(f, dSh(t, 1.12)) +
                X(d(a + p / 2, s, m), d(a + p / 2, s + p, m), "#e8d2a2", 3) +
                X(d(a + p / 2, s + p, m), d(a + p / 2, s + p, m - 0.32), "#e8d2a2", 3);
              const e = Q(h[0], h[2], 0.5);
              r += `<rect x="${(e[0] - 4).toFixed(1)}" y="${(e[1] - 3).toFixed(1)}" width="8" height="5" rx="1" fill="#f4ead2" transform="skewY(-26.6)" transform-origin="${e[0].toFixed(1)} ${e[1].toFixed(1)}"/>`;
            }
            ((r += "</g>"), e.push([n, r]));
          }),
          (O = -1),
          e
        );
      })().forEach(([e, a]) => {
        const [s, n] = x[e];
        t(V(s, n, p, p), i(s + p, n + p)[1] + 0.01 * M[e], a);
      }),
        f
          .filter((e) => !e.c)
          .forEach((e) =>
            t(
              ((e) => {
                const t = null != e.zi ? o.zs[e.zi] : te([e.x, e.y - 1]);
                if (!t || "floor" === t.k) {
                  const [t, a] = ((e, t) => {
                    const a = (e - o.OX) / 21,
                      s = (2 * (t - o.OY)) / 21;
                    return [(a + s) / 2, (s - a) / 2];
                  })(e.x, e.y);
                  return V(t - 0.3, a - 0.3, 0.6, 0.6);
                }
                return "wall" === t.k ? 0 : Math.min(G, t.ci + 1);
              })(e),
              e.y,
              W(e.id, e.x, e.y, e.a, dSz(e.id), K(e)),
            ),
          ));
      for (let t = 0; t <= G; t++) {
        const a = (e[t] || [])
          .sort((e, t) => e[0] - t[0])
          .map((e) => e[1])
          .join("");
        if (J[t] !== a) {
          const e = $("#dmc" + t);
          (e && (e.innerHTML = a), (J[t] = a));
        }
      }
      (() => {
        const e = n.length,
          t = f.length,
          a = P().length,
          s = $("#dmpb"),
          o = $("#dmpc"),
          i = $("#dmbn");
        (s && (s.style.width = ((t / e) * 100).toFixed(1) + "%"),
          o && (o.textContent = t + " / " + e),
          i && (i.textContent = a ? "📦 " + a + " dans les cartons" : "Cartons vides"));
      })();
    },
    ee = (e) => {
      for (const t of o.st
        .map((e, t) => t)
        .reverse()
        .flatMap((e) => {
          const t = d.filter((t) => t.si === e);
          return [
            ...t.filter((e) => u.has(e.id)).sort((e, t) => t.z0 - e.z0),
            ...t.filter((e) => !u.has(e.id)),
          ];
        })) {
        const a = t.g,
          s = u.has(t.id);
        if (s && dIn(e, a.panel)) return { c: t, panel: 1 };
        if (s && dIn(e, a.zone)) return { c: t, inside: 1 };
        if (!s && dIn(e, a.front)) return { c: t, closed: 1 };
      }
      return null;
    },
    te = (e) => [...o.zs].reverse().find((t) => dIn(e, t.hull)),
    ae = (e, t) => {
      (t ? u.add(e.id) : u.delete(e.id), sfx(t ? 420 : 330, 0.18), vib(6), _(), sv());
    },
    se = (e, t) => {
      const a = ee(t);
      let s = null;
      if (a && (a.inside || (a.panel && "drawer" === a.c.t))) {
        const t = a.c,
          n = new Set(f.filter((a) => a.c === t.id && a.id !== e).map((e) => e.s)),
          o = [...Array(t.cap).keys()].find((e) => !n.has(e));
        if (void 0 === o) {
          const e = d.find((e) => e.S === t.S && e !== t && "door" === e.t && "door" === t.t && !u.has(e.id));
          return (
            msg(e ? "Plus de place de ce côté : ouvre l’autre porte." : "Plus de place ici."),
            sfx(260, 0.2),
            null
          );
        }
        const i = t.g.slots[o];
        s = { id: e, x: +i[0].toFixed(1), y: +i[1].toFixed(1), a: t.g.an, k: t.k, c: t.id, s: o };
      } else {
        if (a && a.closed && (DIT[e][2].includes(a.c.k) || q(e).includes(a.c.k)))
          return (
            msg(
              "door" === a.c.t
                ? "C’est fermé : touche la porte pour l’ouvrir."
                : "Touche le tiroir pour l’ouvrir.",
            ),
            null
          );
        {
          const a = te(t);
          if (!a) return (msg("Pose-le dans la pièce."), null);
          const n = dClamp(t, a.top);
          s = {
            id: e,
            x: +n[0].toFixed(1),
            y: +n[1].toFixed(1),
            a: a.a,
            k: a.k,
            c: "",
            s: 0,
            zi: o.zs.indexOf(a),
          };
        }
      }
      return (
        (f = f.filter((t) => t.id !== e)),
        (s.pop = 1),
        f.push(s),
        (w = null),
        msg(""),
        sfx(560, 0.2),
        vib(8),
        _(),
        f.forEach((e) => delete e.pop),
        sv(),
        ne(),
        s
      );
    },
    ne = () => {
      if (R) return;
      if (P().length) return void (C && ((C = !1), _()));
      const e = f.filter((e) => 0 === D(e)),
        t = f.filter((e) => 1 === D(e));
      if (((C = !0), _(), e.length || t.length)) {
        ([...e, ...t].forEach((e) => {
          e.c && u.add(e.c);
        }),
          _());
        const a = [];
        return (
          e.length &&
            a.push(
              e.length +
                (e.length > 1
                  ? " objets ne sont pas à leur place (en rouge)"
                  : " objet n’est pas à sa place (en rouge)"),
            ),
          t.length &&
            a.push(
              t.length +
                (t.length > 1
                  ? " pourraient être mieux rangés (en jaune)"
                  : " pourrait être mieux rangé (en jaune)"),
            ),
          msg(a.join(" et ") + (e.length + t.length > 1 ? " : déplace-les." : " : déplace-le.")),
          void sfx(300, 0.25)
        );
      }
      ((R = !0), oe());
    },
    oe = () => {
      const e = $("#dmfx");
      f.forEach((t, a) =>
        setTimeout(() => {
          if (Z() && e) {
            for (let s = 0; s < 5; s++) {
              const n = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
                o = 1.257 * s + a,
                i = 9 + (s % 2) * 5;
              (n.setAttribute("cx", t.x),
                n.setAttribute("cy", t.y - ("c" === t.a ? 0 : dSz(t.id) / 2)),
                n.setAttribute("r", 1.6),
                n.setAttribute("class", "dmspk"),
                n.style.setProperty("--dx", (Math.cos(o) * i).toFixed(1) + "px"),
                n.style.setProperty("--dy", (Math.sin(o) * i).toFixed(1) + "px"),
                e.appendChild(n),
                setTimeout(() => n.remove(), 900));
            }
            sfx(660 + (a % 5) * 90, 0.12);
          }
        }, 90 * a),
      );
      const t = f.length,
        a = $("#dmw");
      (setTimeout(
        () => {
          if (Z()) {
            if (a) {
              a.classList.add("dmdone");
              const e = document.createElement("div");
              ((e.className = "dmwin"),
                (e.innerHTML = `<b>Pièce terminée ✦</b><small>${t} parfaitement rangé${t > 1 ? "s" : ""}</small>`),
                a.appendChild(e));
            }
            (confetti(j), [523, 659, 784, 1047].forEach((e, t) => setTimeout(() => sfx(e, 0.5), 150 * t)));
          }
        },
        90 * f.length + 200,
      ),
        setTimeout(
          () => {
            Z() && win();
          },
          90 * f.length + 2600,
        ));
    },
    ie = { x: 0, y: 0, w: r, h: l },
    re = () => {
      ([ie.x, ie.y, ie.w].every(Number.isFinite) || ((ie.x = 0), (ie.y = 0), (ie.w = r)),
        (ie.w = Math.max(r / 3.2, Math.min(r, ie.w))),
        (ie.h = (ie.w * l) / r),
        (ie.x = Math.max(0, Math.min(r - ie.w, ie.x))),
        (ie.y = Math.max(0, Math.min(l - ie.h, ie.y))),
        j.setAttribute(
          "viewBox",
          `${ie.x.toFixed(1)} ${ie.y.toFixed(1)} ${ie.w.toFixed(1)} ${ie.h.toFixed(1)}`,
        ));
      const e = $("#dmw");
      e && e.classList.toggle("zm", ie.w < r - 1);
    },
    le = (e, t, a) => {
      const s = Math.max(r / 3.2, Math.min(r, ie.w / e)),
        n = s / ie.w;
      ((ie.x = t - (t - ie.x) * n), (ie.y = a - (a - ie.y) * n), (ie.w = s), re());
    };
  ((act.dmz = (e) => le(+e > 0 ? 1.5 : 1 / 1.5, ie.x + ie.w / 2, ie.y + ie.h / 2)),
    Input.sur(
      "defiler",
      (quoi, inf) => {
        const e = inf.evt;
        e.preventDefault();
        const t = Y(e);
        t && le(e.deltaY < 0 ? 1.15 : 1 / 1.15, t[0], t[1]);
      },
      { cible: j, passive: !1 },
    ));
  let ce = null;
  const de = new Map();
  let fe = null;
  const ue = () => {
    const e = $("#dmdg");
    e && (e.innerHTML = "");
    const t = $("#dmg");
    t && t.remove();
  };
  let he = 0,
    arretGlisser = null; // abonnement Input du glisser d’un objet (document), retiré au lâcher
  const pe = (e) => {
      ce &&
        (!ce.mv &&
          Math.hypot(e.clientX - ce.x, e.clientY - ce.y) > 6 &&
          ((ce.mv = !0),
          (w = null),
          j.querySelectorAll(".dmit.sel,.dmtop.sel").forEach((e) => e.classList.remove("sel")),
          j.querySelectorAll(`[data-id="${ce.id}"]`).forEach((e) => {
            e.classList.contains("dmdrag") || e.classList.add("lift");
          }),
          sfx(480, 0.08)),
        ce.mv &&
          (e.preventDefault(),
          ((e, t) => {
            const a = $("#dmdg"),
              s = Y(t);
            if (!a || !s) return;
            const n = Math.round(1.12 * dSz(e));
            let o = a.firstChild;
            (o && o.dataset.id === e) ||
              ((a.innerHTML = `<g class="dmdrag" data-id="${e}"><ellipse class="dmds" rx="${(0.3 * n).toFixed(1)}" ry="${(0.09 * n).toFixed(1)}" fill="rgba(40,25,10,.22)"/><svg width="${n}" height="${n}" viewBox="0 0 32 32">${DIT[e][1]}</svg></g>`),
              (o = a.firstChild));
            const i = o.querySelector("svg"),
              r = o.querySelector("ellipse"),
              l = 0.35 * n;
            (i.setAttribute("x", (s[0] - n / 2).toFixed(1)),
              i.setAttribute("y", (s[1] - 0.94 * n - l).toFixed(1)),
              r.setAttribute("cx", s[0].toFixed(1)),
              r.setAttribute("cy", s[1].toFixed(1)));
          })(ce.id, e),
          ((e) => {
            (cancelAnimationFrame(he),
              (he = requestAnimationFrame(() => {
                const t = $("#dmh");
                if (!t || !ce) return;
                const a = Y(e);
                if (!a) return;
                const s = ee(a);
                let n = null;
                if (s && s.inside) n = s.c.g.zone;
                else if (s && s.closed) n = s.c.g.front;
                else {
                  const e = te(a);
                  e && "floor" !== e.k && "wall" !== e.k && (n = e.hull);
                }
                t.innerHTML = n ? `<polygon class="dmhv" points="${c(n)}"/>` : "";
              })));
          })(e)));
    },
    me = (e) => {
      arretGlisser && (arretGlisser(), (arretGlisser = null));
      const t = ce;
      ((ce = null), ue(), (J = []));
      const a = $("#dmh");
      if ((a && (a.innerHTML = ""), t))
        if (t.mv) {
          const a = j.getBoundingClientRect();
          if (e.clientX >= a.left && e.clientX <= a.right && e.clientY >= a.top && e.clientY <= a.bottom) {
            const a = Y(e);
            a && se(t.id, a);
          }
          _();
        } else
          ((w = w === t.id ? null : t.id),
            _(),
            msg(w ? "Touche l’endroit où poser « " + DIT[w][0] + " »." : ""),
            sfx(500, 0.1));
    },
    be = () => {
      (arretGlisser && (arretGlisser(), (arretGlisser = null)), (ce = null), ue(), (J = []), _());
    };
  const ge = (e) => {
    if (!de.has(e.pointerId)) return;
    de.delete(e.pointerId);
    const t = fe;
    if (de.size) {
      const [e] = [...de.values()];
      return void (fe = { x: e.x, y: e.y, vx: ie.x, vy: ie.y, mv: !0 });
    }
    if (((fe = null), !t || t.mv || t.pinch || "pointercancel" === e.type || R)) return;
    const a = Y(e);
    if (!a) return;
    const s = t.tg && t.tg.closest && t.tg.closest(".dmbx:not(.op)");
    if (s) {
      const e = +s.dataset.bx;
      return null != L[e] && U(L[e]).length
        ? (msg("Vide d’abord le carton du dessus."), void sfx(260, 0.15))
        : (k.add(e),
          (O = e),
          sfx(300, 0.2),
          setTimeout(() => sfx(470, 0.18), 110),
          vib(10),
          _(),
          sv(),
          void msg("Les objets sortent du carton : prends celui du dessus."));
    }
    const n = ee(a);
    return n && n.closed
      ? (ae(n.c, !0), void (w || msg("door" === n.c.t ? "La porte est ouverte." : "Le tiroir est ouvert.")))
      : n && n.panel && !w
        ? (ae(n.c, !1), void msg(""))
        : void (w && se(w, a));
  };
  // Contrôles via Input : prendre un objet ou un carton, glisser la vue, pincer pour zoomer, lâcher pour poser.
  (Input.sur(
    ["toucher", "glisser", "survoler", "lacher", "menu"],
    (quoi, inf) => {
      const e = inf.evt;
      if ("toucher" === quoi) {
        let t = e.target.closest && e.target.closest(".dmtop,.dmit");
        if (!t) {
          const a = e.target.closest && e.target.closest(".dmbx.op");
          a && (t = a.querySelector(".dmtop"));
        }
        if (t && !de.size && !R) {
          (e.preventDefault(), e.stopPropagation());
          try {
            j.setPointerCapture(e.pointerId);
          } catch (e) {}
          return (
            (ce = { id: t.dataset.id, x: e.clientX, y: e.clientY, mv: !1 }),
            arretGlisser && arretGlisser(), // un seul abonnement à la fois (comme addEventListener)
            void (arretGlisser = Input.sur(
              ["glisser", "survoler", "lacher"],
              (quoi, inf) =>
                "lacher" !== quoi ? pe(inf.evt) : "pointercancel" === inf.evt.type ? be() : me(inf.evt),
              { cible: document, annulation: !0 },
            ))
          );
        }
        de.set(e.pointerId, { x: e.clientX, y: e.clientY });
        try {
          j.setPointerCapture(e.pointerId);
        } catch (e) {}
        if (1 === de.size) fe = { x: e.clientX, y: e.clientY, vx: ie.x, vy: ie.y, mv: !1, tg: e.target };
        else if (2 === de.size) {
          const [e, t] = [...de.values()],
            a = Y({ clientX: (e.x + t.x) / 2, clientY: (e.y + t.y) / 2 });
          fe = { pinch: 1, d0: Math.hypot(e.x - t.x, e.y - t.y), w0: ie.w, m0: a, mv: !0 };
        }
      } else if ("lacher" === quoi) ge(e);
      else if ("menu" === quoi) e.preventDefault();
      else {
        if (!de.has(e.pointerId) || !fe) return;
        de.set(e.pointerId, { x: e.clientX, y: e.clientY });
        const t = j.getBoundingClientRect().width;
        if (fe.pinch && 2 === de.size) {
          const [e, t] = [...de.values()],
            a = Math.hypot(e.x - t.x, e.y - t.y),
            s = j.getBoundingClientRect();
          if (!(fe.m0 && fe.d0 > 0 && s.width)) return;
          const n = Math.max(r / 3.2, Math.min(r, (fe.w0 * fe.d0) / a)),
            o = (n * l) / r,
            i = ((e.x + t.x) / 2 - s.left) / s.width,
            c = ((e.y + t.y) / 2 - s.top) / s.height;
          return ((ie.w = n), (ie.x = fe.m0[0] - i * n), (ie.y = fe.m0[1] - c * o), void re());
        }
        const a = e.clientX - fe.x,
          s = e.clientY - fe.y;
        if ((!fe.mv && Math.hypot(a, s) > 7 && (fe.mv = !0), fe.mv && ie.w < r - 1)) {
          const e = ie.w / t;
          ((ie.x = fe.vx - a * e), (ie.y = fe.vy - s * e), re());
        }
      }
    },
    { cible: j, annulation: !0 },
  ),
    (act.dmpause = () => {
      const e = n.length,
        t = f.length,
        a = $("#dmo");
      a && a.remove();
      const o = document.createElement("div");
      ((o.className = "sfr"),
        (o.id = "dmo"),
        o.setAttribute("role", "dialog"),
        o.setAttribute("aria-modal", "true"),
        (o.innerHTML = `<div class="glass sfc dmps"><small>Pause</small><h2>${s.n}</h2><div class="dmbar big"><i style="width:${((t / e) * 100).toFixed(1)}%"></i></div><p class="note">${t} objet${t > 1 ? "s" : ""} sorti${t > 1 ? "s" : ""} des cartons sur ${e}</p><button class="btn" data-a="dmx">Reprendre</button><button class="btn alt" data-a="dmrst">Recommencer la pièce</button><button class="btn alt" data-a="dmlv">Choisir une pièce</button></div>`),
        app.appendChild(o));
    }),
    (act.dmx = () => {
      const e = $("#dmo");
      e && e.remove();
    }),
    (act.dmrst = () => {
      (act.dmx(), st.set(pkey(), null), start("demenage", !1, lv));
    }),
    (act.dmlv = () => {
      (act.dmx(), hub("demenage"));
    }),
    (act.hint = () => {
      const e = T.map((e, t) => {
          const a = U(t);
          return k.has(t) && a.length ? a[a.length - 1] : null;
        }).filter(Boolean),
        t = C ? f.filter((e) => D(e) < 2).map((e) => e.id) : [],
        a = w || t[0] || e[0];
      if (!a) return void (P().length && msg("Ouvre un carton pour découvrir les objets."));
      if (!spend(3)) return;
      const s = $("#dmh");
      if (!s) return;
      const n = DIT[a][2];
      ((s.innerHTML =
        o.zs
          .filter((e) => n.includes(e.k))
          .map((e) => `<polygon class="dmhz" points="${c(e.hull)}"/>`)
          .join("") +
        d
          .filter((e) => n.includes(e.k))
          .map((e) => `<polygon class="dmhz" points="${c(u.has(e.id) ? e.g.zone : e.g.front)}"/>`)
          .join("")),
        msg(`Indice : « ${DIT[a][0]} » se range sur la zone qui brille.`),
        clearTimeout(I),
        (I = setTimeout(() => {
          const e = $("#dmh");
          e && !ce && (e.innerHTML = "");
        }, 3200)));
    }),
    _(),
    re(),
    window.__DMDBG &&
      window.__DMDBG({
        sc: o,
        CP: d,
        op: u,
        bx: T,
        bop: k,
        stk: U,
        toggle: ae,
        P: i,
        svg: j,
        placed: () => f,
        stOf: D,
        cAt: ee,
        zAt: te,
      }),
    e || !t || st.get(ckey("demenage") + ":" + lv, !1)
      ? e ||
        t ||
        !dStory[lv] ||
        st.get(ckey("demenage") + ":" + lv, !1) ||
        dmOv(`<small>${dStory[lv][0]}</small><p class="sfq">${dStory[lv][1]}</p>`, "Ouvrir les cartons")
      : dmOv(`<small>Fêtes · ${s.n}</small><p class="sfq">${s.s}</p>`, "Ouvrir les cartons"),
    e
      ? setTimeout(() => {
          Z() && ne();
        }, 300)
      : msg("Touche un carton pour l’ouvrir."));
}
