// Jeu de mots (id « mots ») : roue de lettres, génération roueGen et le jeu pRoue(r).
function pRoue(e) {
  const t = [...new Set(LVX(L, "mots", roueGen))],
    a = nk(t[0]),
    s = a.length,
    n = t.map((e) => ({ w: e, k: nk(e) })).filter((e) => fits(e.k, a)),
    o = new Set(n.map((e) => e.k)),
    i = n
      .filter((e) => {
        return (
          (t = e.k),
          !((/[SX]$/.test(t) && o.has(t.slice(0, -1))) || (/AUX$/.test(t) && o.has(t.slice(0, -3) + "AL")))
        );
        var t;
      })
      .sort((e, t) => e.k.length - t.k.length || e.k.localeCompare(t.k));
  let r = e ? e.got.filter((e) => e < i.length) : [],
    l = e ? e.rev : {},
    c = e && e.bn ? e.bn : [],
    d = [...a].map((e, t) => t),
    f = [],
    u = !1,
    h = null;
  snap = () => ({ got: r, rev: l, bn: c });
  const p = () => i.every((e, t) => r.includes(t)),
    m = () => {
      const e = $("#rw");
      (e.style.setProperty("--t", i.length <= 4 ? "38px" : i.length <= 8 ? "30px" : "25px"),
        (e.innerHTML = i
          .map(
            (e, t) =>
              `<div class="w">${[...e.k]
                .map((a, s) => {
                  const n = r.includes(t) || s < (l[t] || 0);
                  return `<i class="${n ? "on" : ""}">${n ? e.w[s].toUpperCase() : ""}</i>`;
                })
                .join("")}</div>`,
          )
          .join("")));
    };
  frame(
    `<div class="rw" id="rw"></div><div class="pv" id="pv"></div><div class="whw"><button class="shf" data-a="shuf" aria-label="Mélanger les lettres" title="Mélanger"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg></button><div class="whl" id="whl"><svg viewBox="0 0 100 100"><polyline id="ln" points=""/></svg>${[...a].map((e) => `<b>${e}</b>`).join("")}</div></div>`,
    1,
  );
  const b = $("#whl"),
    g = [...b.querySelectorAll("b")],
    E = [],
    y = () =>
      d.forEach((e, t) => {
        const a = -Math.PI / 2 + (2 * t * Math.PI) / s;
        ((E[e] = [50 + 35 * Math.cos(a), 50 + 35 * Math.sin(a)]),
          (g[e].style.left = E[e][0] + "%"),
          (g[e].style.top = E[e][1] + "%"));
      }),
    v = () => {
      (g.forEach((e, t) => e.classList.toggle("s", f.includes(t))),
        ($("#pv").textContent = f.map((e) => a[e]).join("")));
      const e = f.map((e) => E[e].join(","));
      (u && h && f.length && e.push(h.join(",")), $("#ln").setAttribute("points", e.join(" ")));
    },
    A = (e) => {
      const t = b.getBoundingClientRect(),
        a = ((e.clientX - t.left) / t.width) * 100,
        n = ((e.clientY - t.top) / t.height) * 100;
      h = [a, n];
      for (let e = 0; e < s; e++)
        if (Math.hypot(a - E[e][0], n - E[e][1]) < 10) {
          const t = f.indexOf(e);
          t < 0 ? f.push(e) : t === f.length - 2 && f.pop();
          break;
        }
      v();
    };
  const S = () => {
    u &&
      ((u = !1),
      (() => {
        const e = f.map((e) => a[e]).join("");
        if (!e) return;
        const t = i.findIndex((t) => t.k === e);
        if (e.length < 3) return msg("Trois lettres au moins");
        if (t >= 0) {
          if (r.includes(t)) return msg("Déjà trouvé");
          (r.push(t), sfx(660, 0.4), vib(15), m(), msg("✦ " + i[t].w), sv(), p() && setTimeout(win, 900));
        } else if (GW.has(e)) {
          if (c.includes(e)) return msg("Déjà trouvé");
          (c.push(e), fl++, st.set("fl", fl), chip(), sv(), msg("Mot bonus · +1 🫧"));
        } else msg("Ce mot dort encore…");
      })(),
      (f = []),
      v());
  };
  // Contrôles via Input : appuyer sur la roue puis glisser de lettre en lettre, lâcher pour proposer le mot.
  (Input.sur(
    ["toucher", "glisser", "survoler", "lacher", "menu"],
    (x, i) => {
      const e = i.evt;
      if ("toucher" === x) {
        ((u = !0), (f = []));
        try {
          b.setPointerCapture(e.pointerId);
        } catch (e) {}
        (A(e), e.preventDefault());
      } else "lacher" === x ? S() : "menu" === x ? e.preventDefault() : u && A(e);
    },
    { cible: b, annulation: !0 },
  ),
    (act.shuf = () => {
      (d.sort(() => Math.random() - 0.5), y(), (f = []), v());
    }),
    (act.hint = () => {
      const e = i.map((e, t) => t).filter((e) => !r.includes(e));
      if (!e.length || !spend(1)) return;
      const t = e[(Math.random() * e.length) | 0];
      ((l[t] = (l[t] || 0) + 1), l[t] >= i[t].k.length && r.push(t), m(), sv(), p() && setTimeout(win, 900));
    }),
    y(),
    m(),
    v());
}
function roueGen(a) {
  const n = wfLen(a),
    N = wfN(a, n),
    R = rng(7919 * a + 101),
    c = wfCand(n, n <= 5 ? 6e3 : 12e3, Math.min(N, n <= 4 ? 3 : 4), a);
  if (!c) return L[a % NLS.mots];
  return [c.b.w, ...wfPick(c, N, R).map((w) => w.w)];
}
