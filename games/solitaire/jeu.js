// Solitaire : jeu (SOLR…soActs), contrôles via Input
const SOLR = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SOS = ["♠", "♥", "♦", "♣"];
const SON = 40;
const soR = (e) => (e % 13) + 1;
const soSu = (e) => Math.floor(e / 13);
const soRed = (e) => {
  const t = soSu(e);
  return 1 === t || 2 === t;
};
function soRng(e) {
  return () => {
    e = (1831565813 + (e |= 0)) | 0;
    let t = Math.imul(e ^ (e >>> 15), 1 | e);
    return ((t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t), ((t ^ (t >>> 14)) >>> 0) / 4294967296);
  };
}
function soDeal(e) {
  const t = soRng(e),
    a = [...Array(52).keys()];
  for (let e = 51; e > 0; e--) {
    const s = Math.floor(t() * (e + 1));
    [a[e], a[s]] = [a[s], a[e]];
  }
  const s = [...Array(7)].map(() => ({ d: [], u: [] }));
  let n = 0;
  for (let e = 0; e < 7; e++) for (let t = e; t < 7; t++) s[t].d.push(a[n++]);
  return (
    s.forEach((e) => e.u.push(e.d.pop())),
    { T: s, F: [0, 0, 0, 0], S: a.slice(28).reverse(), W: [], mv: 0 }
  );
}
const soFits = (e, t) =>
  t.u.length
    ? soRed(e) !== soRed(t.u[t.u.length - 1]) && soR(t.u[t.u.length - 1]) === soR(e) + 1
    : 0 === t.d.length && 13 === soR(e);
const soFF = (e, t) => t[soSu(e)] === soR(e) - 1;
function soSolve(e, t, a, s) {
  const n = new Set();
  let o = 0;
  const i = (e) => e.map((e) => ({ d: e.d.slice(), u: e.u.slice() })),
    r = (e, t) => {
      const a = soR(e);
      if (a <= 2) return !0;
      const s = soRed(e) ? [0, 3] : [1, 2];
      return t[s[0]] >= a - 1 && t[s[1]] >= a - 1;
    },
    l = (e, t, a) => {
      let s = !0;
      for (; s;) {
        s = !1;
        for (const a of e) {
          const e = a.u[a.u.length - 1];
          void 0 !== e &&
            soFF(e, t) &&
            r(e, t) &&
            (a.u.pop(), t[soSu(e)]++, !a.u.length && a.d.length && a.u.push(a.d.pop()), (s = !0));
        }
      }
    };
  function c(e, t, a, s) {
    if (((e = i(e)), (t = t.slice()), (a = a.slice()), "tf" === s.k)) {
      const a = e[s.i],
        n = a.u.pop();
      (t[soSu(n)]++, !a.u.length && a.d.length && a.u.push(a.d.pop()));
    } else if ("pf" === s.k) (a.splice(a.indexOf(s.c), 1), t[soSu(s.c)]++);
    else if ("pt" === s.k) (a.splice(a.indexOf(s.c), 1), e[s.j].u.push(s.c));
    else if ("tt" === s.k) {
      const t = e[s.i],
        a = t.u.splice(t.u.length - s.n, s.n);
      (e[s.j].u.push(...a), !t.u.length && t.d.length && t.u.push(t.d.pop()));
    }
    return (l(e, t), [e, t, a]);
  }
  const d = i(e),
    f = t.slice(),
    u = a.slice().sort((e, t) => e - t);
  l(d, f);
  const h = (function e(t, a, i) {
    if (a.every((e) => 13 === e)) return [];
    if (++o > s) return null;
    const r = ((e, t, a) =>
      e
        .map((e) => e.d.length + ":" + e.u.join(","))
        .sort()
        .join("|") +
      "/" +
      t.join(",") +
      "/" +
      a
        .slice()
        .sort((e, t) => e - t)
        .join(","))(t, a, i);
    if (n.has(r)) return null;
    n.add(r);
    for (const n of (function (e, t, a) {
      const s = [];
      (e.forEach((e, a) => {
        const n = e.u[e.u.length - 1];
        void 0 !== n && soFF(n, t) && s.push({ k: "tf", i: a });
      }),
        a.forEach((e) => {
          soFF(e, t) && s.push({ k: "pf", c: e });
        }));
      const n = [];
      return (
        e.forEach((t, a) => {
          if (!t.u.length) return;
          const s = t.u[0];
          e.forEach((e, o) => {
            o !== a &&
              soFits(s, e) &&
              (13 !== soR(s) || t.d.length) &&
              n.push({ k: "tt", i: a, j: o, n: t.u.length, w: t.d.length });
          });
        }),
        n.sort((e, t) => t.w - e.w),
        s.push(...n),
        a.forEach((t) => {
          e.forEach((e, a) => {
            soFits(t, e) && s.push({ k: "pt", c: t, j: a });
          });
        }),
        e.forEach((a, n) => {
          for (let o = 1; o < a.u.length; o++) {
            const i = a.u[o - 1];
            if (!soFF(i, t)) continue;
            const r = a.u[o];
            e.forEach((e, t) => {
              t !== n && soFits(r, e) && s.push({ k: "tt", i: n, j: t, n: a.u.length - o });
            });
          }
        }),
        s
      );
    })(t, a, i)) {
      const [r, l, d] = c(t, a, i, n),
        f = e(r, l, d);
      if (f) return [n, ...f];
      if (o > s) return null;
    }
    return null;
  })(d, f, u);
  return { ok: !!h, path: h, nodes: o };
}
const soSolvable = (e, t) => soSolve(e.T, e.F, [...e.S, ...e.W], t || 25e3);
const SOLV = [
  262, 77, 276, 219, 351, 302, 229, 161, 22, 264, 67, 140, 58, 127, 149, 1, 284, 110, 259, 189, 57, 265, 210,
  212, 18, 324, 234, 126, 162, 174, 107, 137, 308, 32, 207, 194, 138, 336, 225, 114,
];
const SL = { g: null, mode: "", lv: 0, h: [], hint: null, m: "", el: {}, busy: !1, done: !1, t0: 0 };
const soSave = () => {
  SL.g && !SL.done
    ? st.set("sol:sv", { g: SL.g, mode: SL.mode, lv: SL.lv, h: SL.h.slice(-60) })
    : st.set("sol:sv", null);
};
function soSeed(t) {
  let s = (Math.imul(t + 1, 2654435761) >>> 0) % 2147483647 || 1;
  for (let i = 0; i < 40; i++, s++) if (soSolvable(soDeal(s), 3e3).ok) return s;
  return t + 1;
}
function soNew(e, t) {
  let a;
  if ("lv" === e) a = SOLV[t] || soSeed(t);
  else {
    const e = new Uint32Array(1);
    for (
      let t = 0;
      t < 30 &&
      (window.crypto && crypto.getRandomValues
        ? crypto.getRandomValues(e)
        : (e[0] = Math.floor(4294967295 * Math.random())),
      (a = 0 | e[0]),
      !soSolvable(soDeal(a), 3e3).ok);
      t++
    );
  }
  ((SL.g = soDeal(a)),
    (SL.g.seed = a),
    (SL.g.t0 = Date.now()),
    (SL.mode = e),
    (SL.lv = t),
    (SL.h = []),
    (SL.hint = null),
    (SL.m = ""),
    (SL.done = !1),
    soSave(),
    soScreen());
}
function soScreen() {
  (soActs(), (cur = "solitaire"), nv("games"), theme("solitaire"), (SL.el = {}));
  const e = "lv" === SL.mode ? "Niveau " + (SL.lv + 1) : 'Rapide · <span id="sotm">0:00</span>';
  ((app.innerHTML = `<div id="sog" class="sog"><div class="top stk"><button class="back" data-a="soBk">‹ Solitaire</button><b class="sott">${e}</b><div class="tr"><button class="hb hintb" data-a="soHint" aria-label="Indice : coûte 1 bulle">${HBI(1)}</button><div class="chip">🫧 ${FLX()}</div></div></div><div class="sob" id="sob"></div><p class="m somsg" id="m" role="status" aria-live="polite"></p><div class="sobt"><button class="btn alt" data-a="soUndo">Annuler</button><button class="btn alt" data-a="soRe">${"lv" === SL.mode ? "Recommencer" : "Nouvelle donne"}</button></div></div>`),
    $("#sob").addEventListener("click", soTap),
    soLay(),
    window.scrollTo(0, 0),
    clearTimeout(SL.rt),
    addEventListener("resize", soRs));
}
function soRs() {
  (clearTimeout(SL.rt),
    (SL.rt = setTimeout(() => {
      $("#sob") ? soLay() : removeEventListener("resize", soRs);
    }, 120)));
}
const SOPIP = {
  2: [
    [50, 24],
    [50, 76],
  ],
  3: [
    [50, 24],
    [50, 50],
    [50, 76],
  ],
  4: [
    [38, 24],
    [62, 24],
    [38, 76],
    [62, 76],
  ],
  5: [
    [38, 24],
    [62, 24],
    [50, 50],
    [38, 76],
    [62, 76],
  ],
  6: [
    [38, 24],
    [62, 24],
    [38, 50],
    [62, 50],
    [38, 76],
    [62, 76],
  ],
  7: [
    [38, 24],
    [62, 24],
    [50, 37],
    [38, 50],
    [62, 50],
    [38, 76],
    [62, 76],
  ],
  8: [
    [38, 24],
    [62, 24],
    [50, 37],
    [38, 50],
    [62, 50],
    [50, 63],
    [38, 76],
    [62, 76],
  ],
  9: [
    [38, 24],
    [62, 24],
    [38, 41.5],
    [62, 41.5],
    [50, 50],
    [38, 58.5],
    [62, 58.5],
    [38, 76],
    [62, 76],
  ],
  10: [
    [38, 24],
    [62, 24],
    [50, 33],
    [38, 41.5],
    [62, 41.5],
    [38, 58.5],
    [62, 58.5],
    [50, 67],
    [38, 76],
    [62, 76],
  ],
};
const soCard = (e) => {
  const t = soR(e),
    a = SOLR[t - 1],
    s = SOS[soSu(e)] + "︎",
    n = (e) => `<i class="pki${e ? " dn" : ""}"><b${10 === t ? ' class="p10"' : ""}>${a}</b><u>${s}</u></i>`,
    o =
      1 === t
        ? `<i class="ppa">${s}</i>`
        : t > 10
          ? `<i class="ppf"><b>${a}</b><u>${s}</u></i>`
          : SOPIP[t]
              .map(([e, t]) => `<i class="pp${t > 55 ? " dn" : ""}" style="left:${e}%;top:${t}%">${s}</i>`)
              .join("");
  return `<span class="pkf">${n(0)}${o}${n(1)}</span><span class="pkb"></span>`;
};
function soLay() {
  const e = $("#sob");
  if (!e || !SL.g) return;
  const t = SL.g,
    a = e.clientWidth,
    s = Math.max(3, Math.round(0.012 * a)),
    n = Math.floor((a - 6 * s) / 7),
    o = Math.round(1.42 * n);
  (e.style.setProperty("--cw", n + "px"), e.style.setProperty("--ch", o + "px"));
  const i = (e) => e * (n + s),
    r = o + Math.round(0.28 * o),
    l = Math.max(3 * o, innerHeight - e.getBoundingClientRect().top - r - 150);
  if (!e.querySelector(".sslot")) {
    let t = "";
    for (let e = 0; e < 7; e++)
      (2 !== e &&
        (t += `<span class="sslot${0 === e ? " sstk" : e > 2 ? " sfnd" : ""}" data-z="${e}"${e > 2 ? ` data-s="${SOS[e - 3]}"` : ""}></span>`),
        (t += `<span class="sslot stab" data-t="${e}"></span>`));
    e.innerHTML = t;
  }
  e.querySelectorAll(".sslot").forEach((e) => {
    const t = e.dataset.t;
    void 0 !== t
      ? ((e.style.left = i(+t) + "px"), (e.style.top = r + "px"))
      : ((e.style.left = i(+e.dataset.z) + "px"), (e.style.top = "0px"));
  });
  const c = {};
  let d = 1;
  t.S.forEach((e, t) => (c[e] = { x: i(0), y: 0, f: 0, z: d++, l: { a: "s" } }));
  const f = t.W.length;
  t.W.forEach(
    (e, t) =>
      (c[e] = {
        x: i(1) + Math.max(0, t - (f - 3)) * Math.round(0.4 * n) * (f >= 3 ? 1 : 0),
        y: 0,
        f: 1,
        z: d++,
        l: { a: "w", i: t },
      }),
  );
  for (let e = 0; e < 4; e++) {
    let a = t.F[e];
    for (let t = 1; t <= a; t++) c[13 * e + t - 1] = { x: i(3 + e), y: 0, f: 1, z: d++, l: { a: "f", s: e } };
  }
  t.T.forEach((e, t) => {
    const a = e.d.length,
      s = e.u.length;
    let n = Math.round(0.11 * o),
      f = Math.round(0.36 * o);
    a * n + Math.max(0, s - 1) * f > l - o &&
      s > 1 &&
      (f = Math.max(Math.round(0.17 * o), Math.floor((l - o - a * n) / (s - 1))));
    let u = r;
    (e.d.forEach((e) => {
      ((c[e] = { x: i(t), y: u, f: 0, z: d++, l: { a: "t", k: t } }), (u += n));
    }),
      e.u.forEach((e, a) => {
        ((c[e] = { x: i(t), y: u, f: 1, z: d++, l: { a: "t", k: t, i: a } }), (u += f));
      }));
  });
  let u = r + o;
  (Object.values(c).forEach((e) => {
    e.y + o > u && (u = e.y + o);
  }),
    (e.style.height = u + 8 + "px"),
    (SL.pos = c));
  for (let a = 0; a < 52; a++) {
    let s = SL.el[a];
    s ||
      ((s = document.createElement("span")),
      (s.className = "scd"),
      (s.dataset.c = a),
      (s.innerHTML = soCard(a)),
      s.classList.add(soRed(a) ? "sred" : "sblk"),
      e.appendChild(s),
      (SL.el[a] = s));
    const n = c[a];
    ((s.style.transform = `translate(${n.x}px,${n.y}px)`),
      (s.style.zIndex = n.z),
      s.classList.toggle("up", !!n.f),
      s.classList.toggle("hn", !(!SL.hint || SL.hint.c !== a)),
      s.classList.toggle(
        "bur",
        ("s" === n.l.a && a !== t.S[t.S.length - 1]) || ("f" === n.l.a && soR(a) !== t.F[n.l.s]),
      ));
  }
  const h = e.querySelector(".sstk");
  h && h.classList.toggle("rec", !t.S.length && t.W.length > 0);
  const p = !t.S.length && !t.W.length && t.T.every((e) => !e.d.length) && !SL.done,
    m = $(".sobt");
  if (m) {
    let e = m.querySelector("[data-a=soFin]");
    p && !e
      ? m.insertAdjacentHTML("afterbegin", '<button class="btn" data-a="soFin">Terminer</button>')
      : !p && e && e.remove();
  }
}
function soPush() {
  (SL.h.push(JSON.stringify(SL.g)), SL.h.length > 200 && SL.h.shift());
}
const soFlip = (e) => {
  !e.u.length && e.d.length && e.u.push(e.d.pop());
};
function soAfter(e) {
  const t = SL.g;
  (t.mv++, (SL.hint = null), (SL.m = ""));
  const a = $("#m");
  if ((a && (a.textContent = ""), e && (sfx(e, 0.06), vib(6)), t.F.every((e) => 13 === e))) return soWin();
  (soSave(), soLay());
}
function soTap(e) {
  if (SL.busy || SL.done) return;
  const t = SL.g,
    a = e.target.closest(".scd"),
    s = e.target.closest(".sslot");
  if (!a) return s && s.classList.contains("sstk") ? soDraw() : void 0;
  const n = +a.dataset.c,
    o = SL.pos[n].l;
  if ("s" === o.a) return soDraw();
  if ("w" === o.a) {
    if (n !== t.W[t.W.length - 1]) return;
    if (soFF(n, t.F)) return (soPush(), t.W.pop(), t.F[soSu(n)]++, soAfter(660));
    const e = soBest(n, -1);
    return e >= 0 ? (soPush(), t.W.pop(), t.T[e].u.push(n), soAfter(440)) : soNo(a);
  }
  if ("f" === o.a) {
    const e = o.s;
    if (t.F[e] !== soR(n)) return;
    const s = soBest(n, -1);
    return s >= 0 ? (soPush(), t.F[e]--, t.T[s].u.push(n), soAfter(400)) : soNo(a);
  }
  if ("t" === o.a) {
    const e = t.T[o.k];
    if (void 0 === o.i) return;
    const s = e.u.slice(o.i);
    if (1 === s.length && soFF(n, t.F)) return (soPush(), e.u.pop(), t.F[soSu(n)]++, soFlip(e), soAfter(660));
    const i = soBest(n, o.k, 0 === o.i && !e.d.length);
    return i >= 0 ? (soPush(), e.u.splice(o.i), t.T[i].u.push(...s), soFlip(e), soAfter(440)) : soNo(a);
  }
}
function soBest(e, t, a) {
  const s = SL.g;
  let n = -1;
  for (let a = 1; a <= 7; a++) {
    const o = ((t < 0 ? -1 : t) + a + 7) % 7;
    if (o === t) continue;
    const i = s.T[o];
    if (soFits(e, i)) {
      if (i.u.length) return o;
      n < 0 && (n = o);
    }
  }
  return n >= 0 && 13 === soR(e) && a ? -1 : n;
}
function soNo(e) {
  (e.classList.remove("shk"), e.offsetWidth, e.classList.add("shk"), vib(10));
}
function soDraw() {
  const e = SL.g;
  (e.S.length || e.W.length) &&
    (soPush(), e.S.length ? e.W.push(e.S.pop()) : ((e.S = e.W.reverse()), (e.W = [])), soAfter(330));
}
function soWin() {
  let e;
  if (((SL.done = !0), st.set("sol:sv", null), soLay(), "lv" === SL.mode)) {
    const t = st.get("sol:d", []),
      a = !t.includes(SL.lv);
    (a && (t.push(SL.lv), st.set("sol:d", t)), (e = a ? Math.min(8, 3 + Math.floor(SL.lv / 10)) : 1));
  } else {
    (st.set("sol:inf", st.get("sol:inf", 0) + 1), (e = 2));
    const q = Math.max(1, Math.round((Date.now() - (SL.g.t0 || Date.now())) / 1e3));
    SL.qs = q;
    SL.qr = infSave("solitaire", Math.max(1, 1e5 - q));
  }
  ((e = dmR("solitaire", e)), (fl += e), st.set("fl", fl));
  const t = $(".chip");
  (t && (t.textContent = "🫧 " + FLX()), sfx(784, 0.7), vib([20, 40, 20]));
  try {
    confetti();
  } catch (e) {}
  const a = "lv" === SL.mode;
  setTimeout(() => {
    const t = $("#sog");
    t &&
      t.insertAdjacentHTML(
        "beforeend",
        `<div class="unend"><section class="glass play"><h2>Bravo !</h2><p class="note" style="margin:0 0 4px">${SL.g.mv} coups${"lv" !== SL.mode && SL.qs ? " · " + Math.floor(SL.qs / 60) + ":" + String(SL.qs % 60).padStart(2, "0") + (SL.qr ? " · nouveau record !" : "") : ""}</p><p class="unrw">+${e} 🫧</p><div class="chrow">${"lv" === SL.mode ? (a ? '<button class="nxb" data-a="soNext"><span>Niveau suivant</span><span class="nxi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></button>' : "") : '<button class="btn" data-a="soInf">Nouvelle donne</button><button class="btn alt" data-a="infBd" data-v="solitaire">Classement</button>'}<button class="btn alt" data-a="soBk">Retour</button><button class="hmb" data-a="tab" data-v="games" aria-label="Retour à l’accueil des jeux"><span class="hmi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/></svg></span>Accueil</button></div></section></div>`,
      );
  }, 700);
}
function soHintFind() {
  const e = SL.g,
    t = (e) => e.u[e.u.length - 1];
  for (let a = 0; a < 7; a++) {
    const s = t(e.T[a]);
    if (void 0 !== s && soFF(s, e.F)) return { c: s, t: "Cette carte peut monter sur sa pile" };
  }
  const a = e.W[e.W.length - 1];
  if (void 0 !== a && soFF(a, e.F)) return { c: a, t: "Cette carte peut monter sur sa pile" };
  const s = soSolve(e.T, e.F, [...e.S, ...e.W], 15e3);
  if (s.ok && s.path && s.path.length) {
    const a = s.path[0];
    if ("tf" === a.k) return { c: t(e.T[a.i]), t: "Cette carte peut monter sur sa pile" };
    if ("tt" === a.k) {
      const t = e.T[a.i];
      return { c: t.u[t.u.length - a.n], t: "Déplace cette carte" };
    }
    if ("pf" === a.k || "pt" === a.k)
      return e.W[e.W.length - 1] === a.c
        ? { c: a.c, t: "Joue la carte de la défausse" }
        : { c: -1, t: "Pioche : le " + SOLR[soR(a.c) - 1] + " " + SOS[soSu(a.c)] + " va servir" };
  }
  return {
    c: -1,
    t:
      e.S.length || e.W.length
        ? "Essaie de piocher, ou annule quelques coups"
        : "Annule quelques coups pour trouver un autre chemin",
  };
}
function soFin() {
  if (SL.busy) return;
  SL.busy = !0;
  const e = SL.g,
    t = () => {
      if (!$("#sob")) return void (SL.busy = !1);
      let a = !1;
      for (let t = 0; t < 7 && !a; t++) {
        const s = e.T[t],
          n = s.u[s.u.length - 1];
        void 0 !== n && soFF(n, e.F) && (s.u.pop(), e.F[soSu(n)]++, (a = !0));
      }
      if (a) {
        if ((e.mv++, sfx(600 + 6 * e.F.reduce((e, t) => e + t, 0), 0.04), e.F.every((e) => 13 === e)))
          return ((SL.busy = !1), soWin());
        (soLay(), setTimeout(t, 110));
      } else SL.busy = !1;
    };
  (soPush(), t());
}
function soHub() {
  (soActs(), (cur = "solitaire"), nv("games"), theme("solitaire"));
  const e = st.get("sol:d", []),
    t = (() => {
      let t = 0;
      for (; e.includes(t);) t++;
      return t;
    })(),
    a = st.get("sol:sv", null),
    s = st.get("sol:inf", 0);
  ((app.innerHTML = `<div class="top stk">${bk("home")}<div class="chip">🫧 ${FLX()}</div></div><section class="glass story pt-solitaire"><i>♠</i><h2>La patience</h2><p>Le solitaire classique, au calme : range les cartes par couleur de l’as au roi. Touche une carte pour qu’elle trouve sa place toute seule. Toutes les donnes ont une solution.</p></section>\n ${a && a.g ? `<section class="glass play"><h2>Partie en cours</h2><p class="note" style="margin:0 0 12px">${"lv" === a.mode ? "Niveau " + (a.lv + 1) : "Mode infini"} · ${a.g.mv} coups</p><div class="chrow"><button class="btn" data-a="soRes">Reprendre</button><button class="btn alt" data-a="soDrop">Laisser tomber</button></div></section>` : ""}\n <section class="glass play"><h2>Mode infini</h2><p class="note" style="margin:0 0 12px">Une nouvelle donne au hasard à chaque partie. ${s ? s + " partie" + (s > 1 ? "s" : "") + " gagnée" + (s > 1 ? "s" : "") + "." : ""} +2 🫧 par victoire.</p><button class="btn chgo" data-a="soInf">Jouer</button></section>\n <section class="glass play"><h2>Niveaux</h2>${UNL() ? '<div class="golv"><label>Aller au niveau <input id="golv" type="number" min="1" inputmode="numeric" placeholder="ex. 1203"></label><button class="rc-go" data-a="soGo">Jouer</button></div>' : ""}<p class="note" style="margin:0 0 12px">${e.length ? e.length + " niveau" + (e.length > 1 ? "s" : "") + " terminé" + (e.length > 1 ? "s" : "") : "Aucun niveau terminé"} · de plus en plus coriaces</p><button class="btn chgo" data-a="soLv" data-v="${t}">Niveau ${t + 1}</button></section>`),
    window.scrollTo(0, 0));
}
let soAO = !1;
function soActs() {
  soAO ||
    ((soAO = !0),
    Object.assign(act, {
      soBk: () => {
        (soSave(), soHub());
      },
      soInf: () => soNew("inf", 0),
      soLv: (e) => soNew("lv", +e),
      soNext: () => soNew("lv", SL.lv + 1),
      soRes: () => {
        const e = st.get("sol:sv", null);
        if (!e) return soHub();
        ((SL.g = e.g),
          (SL.mode = e.mode),
          (SL.lv = e.lv),
          (SL.h = e.h || []),
          (SL.hint = null),
          (SL.done = !1),
          soScreen());
      },
      soDrop: () => {
        (st.set("sol:sv", null), soHub());
      },
      soUndo: () => {
        SL.busy ||
          SL.done ||
          !SL.h.length ||
          ((SL.g = JSON.parse(SL.h.pop())), (SL.hint = null), soSave(), soLay(), sfx(300, 0.05));
      },
      soRe: () => {
        SL.busy || ("lv" === SL.mode ? soNew("lv", SL.lv) : soNew("inf", 0));
      },
      soHint: () => {
        if (SL.busy || SL.done) return;
        if (!UNL()) {
          if (fl < 1) {
            const e = $("#m");
            return void (e && (e.textContent = "Il te manque une bulle pour un indice."));
          }
          ((fl -= 1), st.set("fl", fl));
          const e = $(".chip:not(.hintb)");
          e && (e.textContent = "🫧 " + FLX());
        }
        const e = soHintFind();
        SL.hint = e.c >= 0 ? e : null;
        const t = $("#m");
        if ((t && (t.textContent = e.t), soLay(), e.c < 0 && SL.g.S.length)) {
          const e = $(".sstk");
          e && (e.classList.remove("shk"), e.offsetWidth, e.classList.add("shk"));
        }
      },
      soFin: () => soFin(),
    }));
}
