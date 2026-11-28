// Enligne-bloc (id « blocs ») : pièces BBC/BBS, écran pBlocs.
const BBC = ["#a066e0", "#f2b632", "#3ab8e8", "#f2752a", "#3a6ae0", "#e8403a", "#3ab84a", "#d058e0"];
const BBS = (() => {
  const e = [];
  return (
    [
      [3, [[0, 0]]],
      [
        5,
        [
          [0, 0],
          [0, 1],
        ],
      ],
      [
        5,
        [
          [0, 0],
          [0, 1],
          [0, 2],
        ],
      ],
      [
        4,
        [
          [0, 0],
          [0, 1],
          [0, 2],
          [0, 3],
        ],
      ],
      [
        2,
        [
          [0, 0],
          [0, 1],
          [0, 2],
          [0, 3],
          [0, 4],
        ],
      ],
      [
        5,
        [
          [0, 0],
          [0, 1],
          [1, 0],
          [1, 1],
        ],
      ],
      [
        1.6,
        [
          [0, 0],
          [0, 1],
          [0, 2],
          [1, 0],
          [1, 1],
          [1, 2],
          [2, 0],
          [2, 1],
          [2, 2],
        ],
      ],
      [
        2.2,
        [
          [0, 0],
          [0, 1],
          [0, 2],
          [1, 0],
          [1, 1],
          [1, 2],
        ],
      ],
      [
        4,
        [
          [0, 0],
          [1, 0],
          [1, 1],
        ],
      ],
      [
        2.4,
        [
          [0, 0],
          [1, 0],
          [2, 0],
          [2, 1],
          [2, 2],
        ],
      ],
      [
        3,
        [
          [0, 0],
          [0, 1],
          [0, 2],
          [1, 1],
        ],
      ],
      [
        3,
        [
          [0, 0],
          [0, 1],
          [1, 1],
          [1, 2],
        ],
      ],
      [
        3,
        [
          [0, 1],
          [0, 2],
          [1, 0],
          [1, 1],
        ],
      ],
      [
        3,
        [
          [0, 0],
          [1, 0],
          [2, 0],
          [2, 1],
        ],
      ],
      [
        3,
        [
          [0, 1],
          [1, 1],
          [2, 1],
          [2, 0],
        ],
      ],
      [
        1.4,
        [
          [0, 0],
          [1, 1],
        ],
      ],
      [
        1,
        [
          [0, 0],
          [1, 1],
          [2, 2],
        ],
      ],
    ].forEach(([t, a]) =>
      ((e) => {
        let t = [],
          a = e;
        for (let e = 0; e < 4; e++) {
          const e = [Math.min(...a.map((e) => e[0])), Math.min(...a.map((e) => e[1]))];
          (t.push(a.map((t) => [t[0] - e[0], t[1] - e[1]])), (a = a.map(([e, t]) => [t, -e])));
        }
        return t;
      })(a).forEach((a) =>
        ((t, a) => {
          const s = a
            .map((e) => e.join(","))
            .sort()
            .join(";");
          e.some((e) => e.k === s) || e.push({ w: t, c: a, k: s });
        })(t, a),
      ),
    ),
    e
  );
})();
function pBlocs(e) {
  const t = "blocs" === INFG,
    a = t ? 0 : lv < 10 ? 50 + 30 * lv : Math.round(90 + 45 * lv + (lv > 20 ? 20 * (lv - 20) : 0)),
    s = rng(7919 * (lv + 3) + 5);
  let n = Array(64).fill(-1),
    o = [null, null, null],
    i = 0,
    r = t ? infBest("blocs") : 0,
    l = 0,
    c = !1,
    d = !1,
    f = null,
    u = null;
  const h = (e, t, a, s) =>
      t.c.every(([t, n]) => {
        const o = a + t,
          i = s + n;
        return o >= 0 && o < 8 && i >= 0 && i < 8 && e[8 * o + i] < 0;
      }),
    p = (e) => {
      const t = [],
        a = [];
      for (let s = 0; s < 8; s++) {
        let n = !0,
          o = !0;
        for (let t = 0; t < 8; t++) (e[8 * s + t] < 0 && (n = !1), e[8 * t + s] < 0 && (o = !1));
        (n && t.push(s), o && a.push(s));
      }
      return { rows: t, cols: a };
    },
    m = (e, t, a, s, n) => {
      const o = e.slice();
      t.c.forEach(([e, t]) => (o[8 * (a + e) + s + t] = n));
      const { rows: i, cols: r } = p(o);
      return (
        i.forEach((e) => {
          for (let t = 0; t < 8; t++) o[8 * e + t] = -1;
        }),
        r.forEach((e) => {
          for (let t = 0; t < 8; t++) o[8 * t + e] = -1;
        }),
        { H: o, n: i.length + r.length, rows: i, cols: r }
      );
    },
    b = (e, t) => {
      if (!t.length) return !0;
      for (let a = 0; a < t.length; a++) {
        const s = t[a],
          n = t.filter((e, t) => t !== a);
        for (let t = 0; t < 8; t++)
          for (let a = 0; a < 8; a++)
            if (h(e, s, t, a)) {
              if (!n.length) return !0;
              if (b(m(e, s, t, a, 0).H, n)) return !0;
            }
      }
      return !1;
    },
    g = t ? Math.min(2.2, 1 + i / 3e3) : lv < 4 ? 0.3 : lv < 10 ? 0.6 : 1 + Math.min(1.2, lv / 30),
    E = () => {
      const e = BBS.map((e) => e.w * (e.c.length >= 5 ? g : 1)),
        t = e.reduce((e, t) => e + t, 0);
      let a = Math.random() * t;
      for (let t = 0; t < BBS.length; t++) if (((a -= e[t]), a <= 0)) return BBS[t];
      return BBS[0];
    },
    y = () => {
      let e = null;
      for (let t = 0; t < 80; t++) {
        const t = [E(), E(), E()];
        if (b(n, t)) {
          e = t;
          break;
        }
      }
      if (!e) {
        const t = BBS.filter((e) => e.c.length <= 3);
        for (let a = 0; a < 200 && !e; a++) {
          const a = [
            t[Math.floor(Math.random() * t.length)],
            t[Math.floor(Math.random() * t.length)],
            t[Math.floor(Math.random() * t.length)],
          ];
          b(n, a) && (e = a);
        }
      }
      (e || (e = [BBS[0], BBS[0], BBS[0]]),
        (o = e.map((e) => ({ s: e, col: Math.floor(Math.random() * BBC.length) }))));
    };
  if (
    ((snap = t
      ? null
      : () => ({ g: n, P: o.map((e) => (e ? { k: e.s.k, col: e.col } : null)), sc: i, combo: l })),
    e && Array.isArray(e.g) && 64 === e.g.length)
  ) {
    for (
      n = e.g.slice(),
        i = 0 | e.sc,
        l = 0 | e.combo,
        o = (e.P || []).map((e) => {
          if (!e) return null;
          const t = BBS.find((t) => t.k === e.k);
          return t ? { s: t, col: 0 | e.col } : null;
        });
      o.length < 3;
    )
      o.push(null);
    o.some(Boolean) || y();
  } else {
    if (!t && lv >= 10) {
      const e = Math.min(20, 4 + Math.floor(lv / 3));
      for (let t = 0; t < 3 * e && n.filter((e) => e >= 0).length < e; t++) {
        const e = Math.floor(8 * s() * 8);
        ((n[e] = Math.floor(s() * BBC.length)), (p(n).rows.length || p(n).cols.length) && (n[e] = -1));
      }
    }
    y();
  }
  frame(
    `<div class="bbh"><div class="bbsc"><small>${t ? "Mode infini" : "Objectif " + a}</small><b id="bbs">${i}</b>${t ? `<span>👑 ${r}</span>` : '<i class="bbbar"><i id="bbbr"></i></i>'}</div></div><div class="bbw"><div class="bbg" id="bbg">${n.map((e, t) => `<i class="bbc" data-i="${t}"></i>`).join("")}</div><div class="bbov" id="bbov" hidden></div></div><div class="bbt" id="bbt"></div><div class="bbdr" id="bbdr" hidden></div>`,
    1,
  );
  const v = $("#bbg"),
    A = [...v.children],
    S = $("#bbt"),
    x = $("#bbdr"),
    M = (e, t) => {
      const a = Math.max(...e.s.c.map((e) => e[1])) + 1,
        s = Math.max(...e.s.c.map((e) => e[0])) + 1;
      return `<span class="bbp" style="--w:${a};--h:${s};--cs:${t}px">${e.s.c.map(([t, a]) => `<i style="grid-row:${t + 1};grid-column:${a + 1};--c:${BBC[e.col]}"></i>`).join("")}</span>`;
    },
    L = () => {
      (A.forEach((e, t) => {
        const a = n[t];
        ((e.className = "bbc" + (a >= 0 ? " f" : "")), e.style.setProperty("--c", a >= 0 ? BBC[a] : ""));
      }),
        (S.innerHTML = o
          .map(
            (e, t) =>
              `<div class="bbs${u && u.i === t ? " hn" : ""}" data-i="${t}">${e ? M(e, 16) : ""}</div>`,
          )
          .join("")),
        ($("#bbs").textContent = i));
      const e = $("#bbbr");
      if ((e && (e.style.width = Math.min(100, (100 * i) / a) + "%"), u)) {
        const e = o[u.i];
        e &&
          e.s.c.forEach(([e, t]) => {
            const a = A[8 * (u.r + e) + u.c + t];
            a && a.classList.add("gh", "hn");
          });
      }
    },
    T = (e, t, a) => {
      if ((A.forEach((e) => e.classList.remove("gh", "bad", "cl")), !e || null == t)) return;
      const s = h(n, e.s, t, a);
      if (
        (e.s.c.forEach(([n, o]) => {
          const i = t + n,
            r = a + o;
          if (i >= 0 && i < 8 && r >= 0 && r < 8) {
            const t = A[8 * i + r];
            (t.classList.add(s ? "gh" : "bad"), t.style.setProperty("--g", BBC[e.col]));
          }
        }),
        s)
      ) {
        const { rows: s, cols: o } = m(n, e.s, t, a, e.col);
        (s.forEach((e) => {
          for (let t = 0; t < 8; t++) A[8 * e + t].classList.add("cl");
        }),
          o.forEach((e) => {
            for (let t = 0; t < 8; t++) A[8 * t + e].classList.add("cl");
          }));
      }
    },
    k = () =>
      !o.some(
        (e) =>
          e &&
          ((e, t) => {
            for (let a = 0; a < 8; a++) for (let s = 0; s < 8; s++) if (h(e, t, a, s)) return [a, s];
            return null;
          })(n, e.s),
      ),
    w = () => {
      c = !0;
      const e = $("#bbov");
      if (((e.hidden = !1), t)) {
        const t = infSave("blocs", i);
        e.innerHTML = `<div><b>Plus de place !</b><p>Score : ${i}${t ? " · nouveau record !" : " · record : " + infBest("blocs")}</p><button class="btn" data-a="bbRe">Rejouer</button></div>`;
      } else
        e.innerHTML = `<div><b>Plus de place !</b><p>Aucune pièce ne rentre. Il te manquait ${Math.max(0, a - i)} points.</p><button class="btn" data-a="bbCo">Continuer · 1 🫧</button><button class="btn alt" data-a="bbRe">Recommencer</button></div>`;
      sfx(220, 0.3);
    };
  ((act.bbRe = () => {
    (($("#bbov").hidden = !0), (n = Array(64).fill(-1)), (i = 0), (l = 0), (c = !1), y(), L());
  }),
    (act.bbCo = () => {
      c &&
        spend(1) &&
        (($("#bbov").hidden = !0),
        (c = !1),
        [...Array(8).keys()]
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .forEach((e) => {
            for (let t = 0; t < 8; t++) n[8 * e + t] = -1;
          }),
        k() && y(),
        L());
    }),
    (act.hint = () => {
      if (!c && !d)
        for (let e = 0; e < 3; e++) {
          const t = o[e];
          if (!t) continue;
          const a = o.filter((t, a) => t && a !== e).map((e) => e.s);
          for (let s = 0; s < 8; s++)
            for (let o = 0; o < 8; o++)
              if (h(n, t.s, s, o) && b(m(n, t.s, s, o, 0).H, a)) {
                if (!spend(1)) return;
                return ((u = { i: e, r: s, c: o }), L(), void msg("Essaie de poser cette pièce ici."));
              }
        }
    }),
    // Contrôles via Input : prendre une pièce (toucher), la déplacer (glisser), la poser (lacher).
    Input.sur(
      "toucher",
      (quoi, { evt: e }) => {
        const t = e.target.closest(".bbs");
        if (!t || c || d) return;
        const a = +t.dataset.i,
          s = o[a];
        if (!s) return;
        e.preventDefault();
        const n = v.getBoundingClientRect().width / 8;
        ((f = { i: a, p: s, id: e.pointerId }),
          (x.hidden = !1),
          (x.innerHTML = M(s, n - 2)),
          t.classList.add("dg"));
        try {
          S.setPointerCapture(e.pointerId);
        } catch (e) {}
        R(e);
      },
      { cible: S },
    ));
  const R = (e) => {
    if (!f || e.pointerId !== f.id) return;
    const [t, a, s, n, o] = ((e, t, a) => {
      const s = v.getBoundingClientRect(),
        n = s.width / 8,
        o = e - ((Math.max(...a.s.c.map((e) => e[1])) + 1) * n) / 2,
        i = t - (Math.max(...a.s.c.map((e) => e[0])) + 1) * n - 1.2 * n;
      return [Math.round((i - s.top) / n), Math.round((o - s.left) / n), n, o, i];
    })(e.clientX, e.clientY, f.p);
    ((x.style.transform = `translate(${n}px,${o}px)`), (f.r = t), (f.c = a), T(f.p, t, a));
  };
  (Input.sur(["glisser", "survoler"], (quoi, { evt: e }) => R(e), { cible: S }),
    Input.sur(
      "lacher",
      (quoi, { evt: e }) => {
        if ("pointercancel" === e.type) return void (f && ((f = null), (x.hidden = !0), T(null), L()));
        if (!f || e.pointerId !== f.id) return;
        const s = f;
        ((f = null), (x.hidden = !0), T(null));
        const r = ((e, s, r) => {
          const f = o[e];
          if (!f || c || d || !h(n, f.s, s, r)) return !1;
          const p = m(n, f.s, s, r, f.col),
            b = p.n,
            g = f.s.c.map(([e, t]) => 8 * (s + e) + r + t);
          ((n = p.H), (o[e] = null), (u = null));
          let E = f.s.c.length;
          return (
            b ? (l++, (E += [0, 10, 30, 60, 100, 150, 210][Math.min(6, b)] * (1 + 0.5 * (l - 1)))) : (l = 0),
            (E = Math.round(E)),
            (i += E),
            o.some(Boolean) || y(),
            L(),
            g.forEach((e) => {
              n[e] >= 0 && A[e].classList.add("pop");
            }),
            b
              ? ([
                  ...p.rows.flatMap((e) => [...Array(8).keys()].map((t) => 8 * e + t)),
                  ...p.cols.flatMap((e) => [...Array(8).keys()].map((t) => 8 * t + e)),
                ].forEach((e) => {
                  const t = A[e];
                  (t.classList.add("boom"), t.style.setProperty("--c", BBC[f.col]));
                }),
                sfx(520 + 90 * b, 0.25),
                vib(b > 1 ? [15, 30, 15] : 12),
                msg(
                  b > 1
                    ? b + " lignes ! +" + E + (l > 1 ? " · combo ×" + l : "")
                    : "+" + E + (l > 1 ? " · combo ×" + l : ""),
                ))
              : sfx(420, 0.08),
            setTimeout(() => A.forEach((e) => e.classList.remove("pop", "boom")), 450),
            !t && i >= a && !d
              ? ((d = !0), msg("Objectif atteint !"), setTimeout(win, 900), !0)
              : (k() && setTimeout(w, 500), !0)
          );
        })(s.i, s.r, s.c);
        r || L();
      },
      { cible: S, annulation: !0 },
    ),
    L(),
    msg(
      t
        ? "Place les pièces le plus longtemps possible."
        : "Complète des lignes et des colonnes pour atteindre " + a + " points.",
    ),
    k() && setTimeout(w, 400));
}
