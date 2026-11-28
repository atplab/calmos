// Sudoku (id « sudoku ») : grilles SDK, résolution sdkSolve, génération sdkPuzzle, écran pSudoku.
const SDK = {};
function sdkSolve(e, t) {
  const a = new Int16Array(9),
    s = new Int16Array(9),
    n = new Int16Array(9),
    o = e.slice(),
    i = (e) => 3 * ((e / 27) | 0) + (((e % 9) / 3) | 0);
  let r = 0,
    l = null;
  for (let e = 0; e < 81; e++) {
    const t = o[e];
    if (t) {
      const o = 1 << t;
      if (a[(e / 9) | 0] & o || s[e % 9] & o || n[i(e)] & o) return { n: 0 };
      ((a[(e / 9) | 0] |= o), (s[e % 9] |= o), (n[i(e)] |= o));
    }
  }
  const c = (e) => {
      let t = 0;
      for (; e;) ((e &= e - 1), t++);
      return t;
    },
    d = () => {
      let e = -1,
        f = 0,
        u = 10;
      for (let t = 0; t < 81; t++)
        if (!o[t]) {
          const o = 1022 & ~(a[(t / 9) | 0] | s[t % 9] | n[i(t)]),
            r = c(o);
          if (r < u && ((u = r), (e = t), (f = o), r < 2)) break;
        }
      if (e < 0) return (r++, l || (l = o.slice()), r >= t);
      if (!u) return !1;
      const h = (e / 9) | 0,
        p = e % 9,
        m = i(e);
      for (let t = 1; t <= 9; t++) {
        const i = 1 << t;
        if (f & i) {
          if (((o[e] = t), (a[h] |= i), (s[p] |= i), (n[m] |= i), d())) return !0;
          ((o[e] = 0), (a[h] &= ~i), (s[p] &= ~i), (n[m] &= ~i));
        }
      }
      return !1;
    };
  return (d(), { n: r, sol: l });
}
function sdkPuzzle(e) {
  if (SDK[e]) return SDK[e];
  const t = nl("sudoku"),
    a = e >= t,
    s = rng(e >= 1e5 ? 7919 * e + 31 : 7919 * (a ? e - t + 8 : e < 8 ? e : 1e3 + e) + 101),
    n = (e) => {
      for (let t = e.length - 1; t > 0; t--) {
        const a = Math.floor(s() * (t + 1));
        [e[t], e[a]] = [e[a], e[t]];
      }
      return e;
    },
    o = n([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    i = n([0, 1, 2]).flatMap((e) => n([0, 1, 2]).map((t) => 3 * e + t)),
    r = n([0, 1, 2]).flatMap((e) => n([0, 1, 2]).map((t) => 3 * e + t)),
    l = [];
  for (const e of i) for (const t of r) l.push(o[((e % 3) * 3 + ((e / 3) | 0) + t) % 9]);
  const c =
      e >= 1e5
        ? [30, 28, 26, 24, 23, 22][e % 6]
        : a
          ? [44, 41, 38, 36, 34, 32, 31, 30, 29, 28][Math.min(9, e - t)]
          : [
              52, 50, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27,
              26, 25, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
              22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
              22, 22, 22, 22, 22, 22, 22, 22,
            ][Math.min(79, Math.max(0, e))],
    d = l.slice();
  let f = 81;
  for (const e of n([...Array(81).keys()])) {
    if (f <= c) break;
    const t = d[e];
    ((d[e] = 0), 1 !== sdkSolve(d, 2).n ? (d[e] = t) : f--);
  }
  return (SDK[e] = { g: d, sol: l });
}
const sdPxC = (e, t) => {
  const a = sdPx(e, t),
    s = parseInt(a.slice(1), 16);
  return (0.299 * (s >> 16) + 0.587 * ((s >> 8) & 255) + 0.114 * (255 & s)) / 255 > 0.62 ? "pk" : "pl";
};
let SDRE = !1;
function pSudoku(e) {
  const SL = sdMo() ? (lv >= nl("sudoku") ? 2e5 + lv - nl("sudoku") : 1e5 + lv) : lv;
  if (!e && !daily && !SDRE && st.get(ckey("sudoku") + ":" + lv, !1)) {
    const { sol: e } = sdkPuzzle(SL);
    return (
      (snap = null),
      frame(
        `<p class="lit">Niveau terminé : tu avais fait apparaître ${sdPxN(SL)}.</p><div class="sd sdpxr sdview" aria-label="Image de ${sdPxN(SL)}">${e.map((e, t) => `<span class="sd-c pc ${sdPxC(SL, t)}" style="--pc:${sdPx(SL, t)}">${e}</span>`).join("")}</div><button class="btn" data-a="sdre">Recommencer le niveau</button>`,
      ),
      void (act.sdre = () => {
        ((SDRE = !0), pSudoku(null));
      })
    );
  }
  SDRE = !1;
  const { g: t, sol: a } = sdkPuzzle(SL),
    s = e && Array.isArray(e.v) && 81 === e.v.length && (e.m || lv) === SL ? e.v.slice() : t.slice();
  let n = -1;
  const H = [];
  t.forEach((v, i) => v && !s[i] && (s[i] = v));
  snap = () => ({ v: s, m: SL });
  const o = (e) => 3 * ((e / 27) | 0) + (((e % 9) / 3) | 0),
    i = () => {
      const e = new Set(),
        t = [];
      for (let e = 0; e < 9; e++)
        t.push(
          [...Array(9)].map((t, a) => 9 * e + a),
          [...Array(9)].map((t, a) => 9 * a + e),
          [...Array(9)].map((t, a) => 27 * ((e / 3) | 0) + (e % 3) * 3 + 9 * ((a / 3) | 0) + (a % 3)),
        );
      for (const a of t) {
        const t = {};
        (a.forEach((e) => {
          const a = s[e];
          a && (t[a] = t[a] || []).push(e);
        }),
          Object.values(t).forEach((t) => {
            t.length > 1 && t.forEach((t) => e.add(t));
          }));
      }
      return e;
    },
    r = () => {
      const e = i(),
        a = Array(10).fill(0),
        r = n >= 0 ? s[n] : 0;
      (s.forEach((e) => a[e]++),
        frame(
          `<div class="sd" role="grid" aria-label="Grille de sudoku">${s
            .map((a, s) => {
              const i = (s / 9) | 0,
                l = s % 9,
                c = n >= 0 && s !== n && (i === ((n / 9) | 0) || l === n % 9 || o(s) === o(n));
              return `<button style="${a ? "--pc:" + sdPx(SL, s) : ""}" class="sd-c ${a ? "pc " + sdPxC(SL, s) : ""} ${t[s] ? "gv" : ""} ${s === n ? "sel" : ""} ${c ? "rel" : ""} ${r && a === r && s !== n ? "same" : ""} ${e.has(s) ? "bad" : ""} ${l % 3 == 2 && l < 8 ? "rb" : ""} ${i % 3 == 2 && i < 8 ? "bb" : ""}" data-a="sdc" data-v="${s}" aria-label="Ligne ${i + 1}, colonne ${l + 1}${a ? ", " + a : ", vide"}">${a || ""}</button>`;
            })
            .join(
              "",
            )}</div><div class="np">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => `<button data-a="sdn" data-v="${e}" ${a[e] >= 9 ? "disabled" : ""}>${e}</button>`).join("")}<button data-a="sde" aria-label="Effacer la case">⌫</button><button class="npw" data-a="sdu" ${H.length ? "" : "disabled"}>↶ Annuler</button><button class="npw npx" data-a="sdx">Tout effacer</button></div>`,
          1,
        ));
    },
    l = () => {
      if (s.every((e, t) => e === a[t])) {
        msg("Tu as fait apparaître " + sdPxN(SL) + " !");
        const e = document.querySelector(".sd");
        (e && requestAnimationFrame(() => e.classList.add("sdpxr")), setTimeout(win, 2600));
      } else s.every((e) => e) && !i().size && msg("Presque… une case est à revoir.");
    };
  ((act.sdc = (e) => {
    ((n = +e), r());
  }),
    (act.sdn = (e) => {
      if (n < 0 || t[n]) return msg(n < 0 ? "Touche d’abord une case." : "Cette case est déjà donnée.");
      (H.push([n, s[n]]), (s[n] = s[n] === +e ? 0 : +e), r(), l());
    }),
    (act.sde = () => {
      if (n < 0) return msg("Touche d’abord une case.");
      if (t[n]) return msg("Cette case est donnée.");
      s[n] && (H.push([n, s[n]]), (s[n] = 0));
      r();
    }),
    (act.sdu = () => {
      const m = H.pop();
      if (!m) return msg("Rien à annuler.");
      if (m[0] === "all") m[1].forEach((v, i) => (s[i] = v));
      else {
        s[m[0]] = m[1];
        n = m[0];
      }
      r();
    }),
    (act.sdx = () => {
      if (!s.some((v, i) => v !== t[i])) return msg("Rien à effacer.");
      H.push(["all", s.slice()]);
      t.forEach((v, i) => (s[i] = v));
      r();
      msg("Tout effacé · « Annuler » pour revenir.");
    }),
    (act.hint = () => {
      let e = n >= 0 && !t[n] && s[n] !== a[n] ? n : s.findIndex((e, t) => e !== a[t]);
      e < 0 || !spend(1) || (H.push([e, s[e]]), (s[e] = a[e]), (n = e), r(), l());
    }),
    r());
}
