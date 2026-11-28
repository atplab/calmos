// 2048 (id « g2048 ») : niveaux G2L, couleurs G2C, écran p2048.
const G2L = [
  [4, 64],
  [4, 128],
  [4, 128],
  [4, 256],
  [3, 64],
  [4, 256],
  [5, 256],
  [4, 512],
  [3, 128],
  [4, 512],
  [5, 512],
  [4, 512],
  [3, 128],
  [4, 1024],
  [5, 1024],
  [4, 1024],
  [3, 256],
  [5, 1024],
  [4, 1024],
  [4, 2048],
  [5, 2048],
  [3, 256],
  [4, 1024],
  [5, 2048],
  [4, 2048],
  [3, 256],
  [5, 2048],
  [4, 2048],
  [5, 4096],
  [4, 2048],
  [4, 128, { rk: [5] }],
  [4, 64, { mv: 80 }],
  [4, 64, { cnt: 2 }],
  [5, 256, { rk: [12] }],
  [5, 128, { st: 1 }],
  [4, 0, { sc: 800 }],
  [4, 256, { rk: [0] }],
  [4, 256, { g4: 1 }],
  [5, 256, { mv: 250 }],
  [5, 128, { cnt: 2 }],
  [5, 512, { rk: [0] }],
  [5, 256, { st: 1 }],
  [4, 128, { mv: 120 }],
  [5, 0, { sc: 2500 }],
  [4, 64, { mv: 60 }],
  [5, 256, { rk: [6, 18] }],
  [5, 128, { cnt: 3 }],
  [4, 512, { g4: 1 }],
  [5, 0, { sc: 2e3, mv: 300 }],
  [5, 1024, { rk: [24] }],
];
const G2C = {
  2: ["#eef4fb", "#3b4a6b"],
  4: ["#d9e7f7", "#3b4a6b"],
  8: ["#aed3f6", "#24406b"],
  16: ["#82b8f0", "#fff"],
  32: ["#6895ea", "#fff"],
  64: ["#7a6ee6", "#fff"],
  128: ["#9a62d8", "#fff"],
  256: ["#c45cc4", "#fff"],
  512: ["#e0609a", "#fff"],
  1024: ["#f0846a", "#fff"],
  2048: ["#f5b942", "#fff"],
  4096: ["#ffd96a", "#6b4a10"],
};
function p2048(e) {
  const t = "g2048" === INFG,
    [a, s, n = {}] = t ? [4, 0, {}] : G2L[lv % G2L.length],
    o = new Set(n.rk || []),
    i = n.cnt || 1,
    r = n.mv || 0,
    l = n.sc || 0;
  let c = 0,
    d = [],
    f = 0,
    u = 0,
    h = null,
    p = !1,
    m = null,
    b = !1,
    g = !1,
    E = 0,
    y = 0;
  const v = (e, t, a) => {
      const s = { id: ++f, v: e, r: t, c: a, el: null };
      return (d.push(s), s);
    },
    A = () => {
      const e = [];
      for (let t = 0; t < a; t++)
        for (let s = 0; s < a; s++)
          o.has(t * a + s) || d.some((e) => e.r === t && e.c === s) || e.push([t, s]);
      return e;
    },
    S = () => {
      const e = A();
      if (!e.length) return null;
      const [t, a] = e[(Math.random() * e.length) | 0];
      return v(n.g4 ? (Math.random() < 0.9 ? 4 : 8) : Math.random() < 0.9 ? 2 : 4, t, a);
    },
    x = () => {
      const e = Array(a * a).fill(0);
      return (d.forEach((t) => (e[t.r * a + t.c] = t.v)), e);
    };
  (e && e.g && e.g.length === a * a
    ? (e.g.forEach((e, t) => {
        e && v(e, (t / a) | 0, t % a);
      }),
      (u = e.sc || 0),
      (h = e.pv || null),
      (c = e.mu || 0))
    : (S(), S()),
    (snap = () => ({ g: x(), sc: u, pv: h, mu: c })),
    t && (snap = null),
    frame(
      `<div class="g2h"><div class="g2t"><small>${t ? "Mode" : "Objectif"}</small>${t ? "<b>Infini</b>" : l ? `<b>${l} pts</b>` : `<b class="g2o" style="--tb:${G2C[s][0]};--tf:${G2C[s][1]}">${i > 1 ? i + " × " : ""}${s}</b>`}</div><div class="g2t"><small>Score</small><b id="g2s">${u}</b></div>${r ? `<div class="g2t"><small>Coups</small><b id="g2m">${r - c}</b></div>` : ""}<button class="g2u" data-a="g2u" aria-label="Annuler le dernier coup, 1 bulle"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg><span>1 🫧</span></button></div>\n  <div class="g2b" id="g2b" style="--n:${a}">${[...Array(a * a).keys()].map((e) => (o.has(e) ? '<i class="rk"></i>' : "<i></i>")).join("")}<div class="g2ar" id="g2ar"></div><div class="g2ov" id="g2ov" hidden></div></div><p class="g2k">${n.rk ? "Les glaçons ne bougent pas : les flocons s’arrêtent contre eux." : n.st ? "Tempête : deux flocons tombent à chaque glissement." : n.g4 ? "Neige épaisse : les nouveaux flocons valent 4." : r ? "Atteins l’objectif avant la fin des coups." : i > 1 ? "Fais naître " + i + " flocons " + s + " en même temps." : l ? "Atteins " + l + " points de score." : "Glisse dans une direction : tous les flocons partent ensemble."}</p>`,
      1,
    ));
  const M = $("#g2b"),
    L = (e) => `calc(var(--gp)*${e.c + 1} + ${100 * e.c}%) calc(var(--gp)*${e.r + 1} + ${100 * e.r}%)`,
    T = (e) => {
      const t = G2C[e.v] || ["#ffe9a8", "#6b4a10"];
      ((e.el.style.background = t[0]),
        (e.el.style.color = t[1]),
        (e.el.textContent = e.v),
        (e.el.dataset.d = String(e.v).length),
        e.el.classList.toggle("gl", e.v >= 128));
    },
    k = (e, t) => {
      const a = document.createElement("b");
      ((a.className = "g2x" + (t ? " " + t : "")),
        (e.el = a),
        (a.style.transition = "none"),
        (a.style.translate = L(e)),
        T(e),
        M.appendChild(a));
    },
    w = () => {
      ((() => {
        const e = M.clientWidth;
        ((y = Math.max(6, Math.round(0.025 * e))),
          (E = (e - y * (a + 1)) / a),
          M.style.setProperty("--s", E + "px"),
          M.style.setProperty("--gp", y + "px"));
      })(),
        d.forEach((e) => {
          (e.el || k(e), (e.el.style.transition = "none"), (e.el.style.translate = L(e)));
        }));
    },
    R = () => {
      $("#g2s").textContent = u;
      const e = $("#g2m");
      e && ((e.textContent = r - c), e.classList.toggle("lo", r - c <= 10));
    },
    C = () => {
      if (A().length) return !0;
      const e = x();
      for (let t = 0; t < a; t++)
        for (let s = 0; s < a; s++) {
          const n = e[t * a + s];
          if ((s < a - 1 && e[t * a + s + 1] === n) || (t < a - 1 && e[(t + 1) * a + s] === n)) return !0;
        }
      return !1;
    },
    O = (e, t) => {
      let s = !1,
        n = 0;
      const i = e.slice();
      for (let r = 0; r < a; r++) {
        const l = [...Array(a).keys()].map((e) => {
            const s = 0 === t || 2 === t ? e : a - 1 - e;
            return t < 2 ? r * a + s : s * a + r;
          }),
          c = [[]];
        l.forEach((e) => {
          o.has(e) ? c.push([]) : c[c.length - 1].push(e);
        });
        for (const t of c) {
          const a = t.map((t) => e[t]).filter(Boolean),
            o = [];
          for (let e = 0; e < a.length; e++)
            a[e] === a[e + 1] ? (o.push(2 * a[e]), (n += 2 * a[e]), e++) : o.push(a[e]);
          t.forEach((e, t) => {
            const a = o[t] || 0;
            (i[e] !== a && (s = !0), (i[e] = a));
          });
        }
      }
      return { g: i, moved: s, gain: n };
    },
    I = (e) => {
      if (b || g) return;
      if (p) return void (m = e);
      const f = x(),
        E = u,
        y = [],
        v = [];
      let A = !1;
      for (let t = 0; t < a; t++) {
        const s = [...Array(a).keys()].map((s) => {
          const n = 0 === e || 2 === e ? s : a - 1 - s;
          return e < 2 ? [t, n] : [n, t];
        });
        let n = 0,
          i = null;
        for (const [e, t] of s) {
          if (o.has(e * a + t)) {
            ((n = s.findIndex((a) => a[0] === e && a[1] === t) + 1), (i = null));
            continue;
          }
          const r = d.find((a) => a.r === e && a.c === t && !a.x);
          if (r)
            if (i && i.v === r.v && !i.m)
              ((r.r = i.r),
                (r.c = i.c),
                (r.x = 1),
                v.push(r),
                (i.v *= 2),
                (i.m = 1),
                y.push(i),
                (u += i.v),
                (A = !0));
            else {
              const [a, o] = s[n++];
              ((a === e && o === t) || (A = !0), (r.r = a), (r.c = o), (i = r));
            }
        }
      }
      if (!A) return (M.classList.remove("nm" + e), M.offsetWidth, void M.classList.add("nm" + e));
      ((h = { g: f, sc: E, mu: c }),
        c++,
        (p = !0),
        ($("#g2ar").className = "g2ar"),
        d.forEach((e) => {
          ((e.el.style.transition = ""), e.el.classList.remove("nw", "mg"));
        }),
        M.offsetWidth,
        d.forEach((e) => {
          const t = e.m ? e.v / 2 : e.v;
          ((e.el.style.translate = L(e)), e.m && (e.el.textContent = t));
        }),
        setTimeout(() => {
          if (
            (v.forEach((e) => {
              e.el.remove();
            }),
            (d = d.filter((e) => !e.x)),
            y.forEach((e) => {
              ((e.m = 0), T(e), e.el.classList.remove("mg"), e.el.offsetWidth, e.el.classList.add("mg"));
            }),
            y.length && (sfx(330 + 45 * Math.log2(Math.max(...y.map((e) => e.v))), 0.25), vib(8)),
            (() => {
              const e = [S()];
              return (n.st && e.push(S()), e.filter(Boolean));
            })().forEach((e) => k(e, "nw")),
            R(),
            sv(),
            (p = !1),
            !t && (l ? u >= l : d.filter((e) => e.v >= s).length >= i))
          )
            return (
              (b = !0),
              l
                ? M.classList.add("wonb")
                : d.filter((e) => e.v >= s).forEach((e) => e.el.classList.add("win")),
              msg(
                l
                  ? "Score atteint ✦"
                  : i > 1
                    ? i + " flocons " + s + " brillent ✦"
                    : "Le flocon " + s + " est né ✦",
              ),
              void setTimeout(win, 1400)
            );
          if (!C()) return ((g = !0), void N());
          if (r && c >= r) return ((g = !0), void N(1));
          if (null !== m) {
            const e = m;
            ((m = null), I(e));
          }
        }, 140));
    },
    N = (e) => {
      const a = $("#g2ov");
      if (((a.hidden = !1), t)) {
        const e = infSave("g2048", u);
        return (
          (a.innerHTML = `<div><b>Fin de partie</b><p>Score : ${u} pts${e ? " · nouveau record !" : " · record : " + infBest("g2048") + " pts"}</p><button class="btn" data-a="g2r">Rejouer</button></div>`),
          void requestAnimationFrame(() => a.classList.add("on"))
        );
      }
      ((a.innerHTML = `<div><b>${e ? "Plus de coups…" : "Plus de place…"}</b><p>${e ? "Les " + r + " coups sont joués." : "Aucun flocon ne peut encore bouger."}</p><button class="btn" data-a="g2u">Annuler le dernier coup · 1 🫧</button><button class="btn alt" data-a="g2r">Recommencer</button></div>`),
        requestAnimationFrame(() => a.classList.add("on")));
    },
    P = (e, t, s) => {
      ((c = s || 0),
        d.forEach((e) => e.el && e.el.remove()),
        (d = []),
        e.forEach((e, t) => {
          e && v(e, (t / a) | 0, t % a);
        }),
        (u = t),
        w(),
        d.forEach((e) => {
          e.el.classList.add("nw");
        }),
        R(),
        (g = !1));
      const n = $("#g2ov");
      (n.classList.remove("on"), (n.hidden = !0));
    };
  ((act.g2u = () => {
    if (!b && !p)
      return h
        ? void (spend(1) && (P(h.g, h.sc, h.mu), (h = null), sv(), msg("Dernier coup annulé.")))
        : msg("Rien à annuler pour l’instant.");
  }),
    (act.g2r = () => {
      if (b) return;
      const e = Array(a * a).fill(0);
      (P(e, 0, 0), S(), S(), w(), d.forEach((e) => e.el.classList.add("nw")), (h = null), sv());
    }),
    (act.hint = () => {
      if (b || g || p) return;
      const e = x();
      let t = -1,
        s = -1e9;
      for (let n = 0; n < 4; n++) {
        const o = O(e, n);
        if (!o.moved) continue;
        let i = 10 * o.g.filter((e) => !e).length + o.gain / 4;
        const r = Math.max(...o.g),
          l = o.g.indexOf(r),
          c = (l / a) | 0,
          d = l % a;
        (0 !== c && c !== a - 1) || (0 !== d && d !== a - 1) || (i += 15);
        for (let e = 0; e < 4; e++) {
          const t = O(o.g, e);
          t.moved && (i += t.g.filter((e) => !e).length);
        }
        i > s && ((s = i), (t = n));
      }
      if (t < 0 || !spend(1)) return;
      const n = $("#g2ar");
      ((n.className = "g2ar"),
        n.offsetWidth,
        (n.className = "g2ar on d" + t),
        msg(
          ["Glisse vers la gauche", "Glisse vers la droite", "Glisse vers le haut", "Glisse vers le bas"][t],
        ));
    }));
  let U = null,
    q = null;
  // Contrôles via Input : glisser sur la grille (toucher puis glisser), flèches ou ZQSD/WASD au clavier.
  (Input.sur(
    "toucher",
    (quoi, { evt: e }) => {
      ((U = e.clientX), (q = e.clientY));
      try {
        M.setPointerCapture(e.pointerId);
      } catch (e) {}
      e.preventDefault();
    },
    { cible: M },
  ),
    Input.sur(
      ["glisser", "survoler"],
      (quoi, { evt: e }) => {
        if (null === U) return;
        const t = e.clientX - U,
          a = e.clientY - q;
        Math.max(Math.abs(t), Math.abs(a)) < 26 ||
          (I(Math.abs(t) > Math.abs(a) ? (t < 0 ? 0 : 1) : a < 0 ? 2 : 3), (U = null));
      },
      { cible: M },
    ),
    Input.sur(
      "lacher",
      () => {
        U = null;
      },
      { cible: M, annulation: !0 },
    ));
  // Flèches (e.key) ou touches physiques A/D/W/S (e.code) ; l'abonnement se retire quand on a quitté le jeu.
  const D = (quoi, { evt: e }) => {
      if ("g2048" !== cur || !M.isConnected) return void arretClavier();
      const t = { bougerGauche: 0, bougerDroite: 1, monter: 2, descendre: 3 }[quoi];
      void 0 !== t && (e.preventDefault(), I(t));
    },
    arretClavier = Input.sur(["bougerGauche", "bougerDroite", "monter", "descendre"], D, {
      sources: ["clavier"],
      touches: { KeyA: "bougerGauche", KeyD: "bougerDroite", KeyW: "monter", KeyS: "descendre" },
    });
  const H = () => {
    M.isConnected ? w() : removeEventListener("resize", H);
  };
  addEventListener("resize", H);
  try {
    let ro = 0;
    new ResizeObserver(() => {
      M.isConnected && (cancelAnimationFrame(ro), (ro = requestAnimationFrame(() => M.isConnected && w())));
    }).observe(M);
  } catch (e) {}
  (w(),
    requestAnimationFrame(() => M.isConnected && w()),
    setTimeout(() => M.isConnected && w(), 450),
    d.forEach((e) => e.el.classList.add("nw")),
    C() ? r && c >= r && ((g = !0), N(1)) : ((g = !0), N()));
}
