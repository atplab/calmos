// Pêche : jeu (PER…pePlay)
const PER = [
  { k: "c", n: "Commun", c: "#c9d2e0", v: 1 },
  { k: "u", n: "Peu commun", c: "#7fe0a0", v: 2 },
  { k: "r", n: "Rare", c: "#7ab8ff", v: 4 },
  { k: "e", n: "Épique", c: "#c79aff", v: 7 },
  { k: "l", n: "Légendaire", c: "#ffd36b", v: 50 },
];
const PEF = [
  { id: "gardon", r: "c", n: "Gardon", sh: "std", b: "#b8c4cc", f: "#e8a0a0", sz: 0.9 },
  {
    id: "perche",
    r: "c",
    n: "Perche",
    sh: "std",
    b: "#c9c25a",
    f: "#ff9a5a",
    st: "v",
    sc: "#4a5a2a",
    sz: 0.95,
  },
  { id: "ablette", r: "c", n: "Ablette", sh: "long", b: "#dfe8f2", f: "#b8c8dc", sz: 0.85 },
  { id: "goujon", r: "c", n: "Goujon", sh: "long", b: "#a89a7a", f: "#c9b898", sp: "#6a5a3a", sz: 0.8 },
  { id: "rotengle", r: "c", n: "Rotengle", sh: "std", b: "#c8ccc0", f: "#ff5a4a", sz: 0.9 },
  { id: "breme", r: "c", n: "Brème", sh: "round", b: "#d8dce4", f: "#a8b0c0", sz: 0.95 },
  { id: "vandoise", r: "c", n: "Vandoise", sh: "long", b: "#b8d0ea", f: "#8aa8c8", sp: "#e8f2ff", sz: 0.85 },
  { id: "chevesne", r: "c", n: "Chevesne", sh: "std", b: "#6a7484", f: "#e0804a", sz: 1 },
  { id: "carassin", r: "c", n: "Carassin", sh: "std", b: "#c9a85a", f: "#e0c07a", sz: 0.9 },
  {
    id: "loche",
    r: "c",
    n: "Loche franche",
    sh: "long",
    b: "#a8946a",
    f: "#c8b48a",
    sp: "#5a4a2a",
    sz: 0.75,
  },
  { id: "epinoche", r: "c", n: "Épinoche", sh: "std", b: "#8aa0a8", f: "#e8664a", sz: 0.7 },
  { id: "hotu", r: "c", n: "Hotu", sh: "long", b: "#9aa8b4", f: "#d0a080", sz: 0.9 },
  { id: "gremille", r: "c", n: "Grémille", sh: "std", b: "#a8a070", f: "#c8c090", sp: "#4a4a2a", sz: 0.8 },
  {
    id: "spirlin",
    r: "c",
    n: "Spirlin",
    sh: "long",
    b: "#c8d4e4",
    f: "#9aaccc",
    st: "v",
    sc: "#5a6a8a",
    sz: 0.75,
  },
  {
    id: "truite",
    r: "u",
    n: "Truite arc-en-ciel",
    sh: "long",
    b: "#9ab8a0",
    f: "#c9dcc0",
    sp: "#ff8aa0",
    sz: 1,
  },
  { id: "carpe", r: "u", n: "Carpe", sh: "round", b: "#c99a4a", f: "#e8c07a", sz: 1.05 },
  { id: "tanche", r: "u", n: "Tanche", sh: "std", b: "#5a7a3a", f: "#8aa85a", sz: 1 },
  { id: "fario", r: "u", n: "Truite fario", sh: "long", b: "#b8945a", f: "#d8b880", sp: "#e84a3a", sz: 1 },
  {
    id: "miroir",
    r: "u",
    n: "Carpe miroir",
    sh: "round",
    b: "#d8a83a",
    f: "#f2d27a",
    sp: "#fff2c0",
    sz: 1.05,
  },
  {
    id: "sandre",
    r: "u",
    n: "Sandre",
    sh: "long",
    b: "#8a9a8a",
    f: "#c0ccc0",
    st: "v",
    sc: "#4a5a4a",
    sz: 1.05,
  },
  {
    id: "blackbass",
    r: "u",
    n: "Black-bass",
    sh: "std",
    b: "#5a8a4a",
    f: "#a8c890",
    st: "v",
    sc: "#2a4a2a",
    sz: 1,
  },
  { id: "ombre", r: "u", n: "Ombre commun", sh: "std", b: "#8a94a8", f: "#b88ad0", sp: "#3a3a4a", sz: 1 },
  { id: "barbeau", r: "u", n: "Barbeau", sh: "long", b: "#b8a070", f: "#e09a5a", sz: 1 },
  {
    id: "truitelac",
    r: "u",
    n: "Truite de lac",
    sh: "long",
    b: "#8aa0b8",
    f: "#b8c8d8",
    sp: "#2a3a4a",
    sz: 1.05,
  },
  { id: "lotte", r: "u", n: "Lotte", sh: "long", b: "#7a6a4a", f: "#a89a7a", sp: "#4a3a2a", sz: 1.05 },
  { id: "aspe", r: "u", n: "Aspe", sh: "long", b: "#b8c4d4", f: "#8a9ab4", sz: 1 },
  { id: "brochet", r: "r", n: "Brochet", sh: "long", b: "#6a8a4a", f: "#a8c07a", sp: "#e8f0a0", sz: 1.15 },
  { id: "saumon", r: "r", n: "Saumon", sh: "long", b: "#c8d0e0", f: "#ff9a7a", sp: "#ff8a6a", sz: 1.15 },
  {
    id: "omble",
    r: "r",
    n: "Omble chevalier",
    sh: "std",
    b: "#3a4a6a",
    f: "#ff8a5a",
    sp: "#ffd0a0",
    sz: 1.05,
  },
  { id: "huchon", r: "r", n: "Huchon", sh: "long", b: "#b88a6a", f: "#d8a888", sp: "#5a3a2a", sz: 1.2 },
  { id: "coregone", r: "r", n: "Corégone", sh: "std", b: "#d0dcea", f: "#a8b8d0", sz: 1.05 },
  {
    id: "marbree",
    r: "r",
    n: "Truite marbrée",
    sh: "long",
    b: "#8a9a6a",
    f: "#b8c890",
    sp: "#3a4a2a",
    sz: 1.1,
  },
  { id: "anguille", r: "r", n: "Anguille argentée", sh: "long", b: "#7a8aa0", f: "#a8b8cc", sz: 1.15 },
  { id: "esturgeon", r: "e", n: "Esturgeon", sh: "long", b: "#7a8aa8", f: "#b8c4dc", sc: "#4a5a78", sz: 1.3 },
  { id: "silure", r: "e", n: "Poisson-chat géant", sh: "std", b: "#5a4a3a", f: "#8a7a6a", sz: 1.3 },
  { id: "koidor", r: "e", n: "Koï dorée", sh: "std", b: "#ffcf4a", f: "#fff0b0", sp: "#ffffff", sz: 1.15 },
  {
    id: "koiciel",
    r: "l",
    aq: 1,
    nw: 1,
    n: "Koï céleste",
    sh: "koiciel",
    b: "#f4f2ff",
    f: "#ff6a3a",
    f2: "#ffd27a",
    sz: 1.3,
  },
  {
    id: "raieaur",
    r: "l",
    aq: 1,
    n: "Raie aurore",
    sh: "raieaur",
    b: "#2fd1c5",
    f: "#e9d6ff",
    sc: "#9a6ad8",
    sp: "#fff6d0",
    sz: 2.4,
  },
];
const peR = (e) => PER.find((t) => t.k === e);
function peLk() {
  let l = st.get("pe:lock", {});
  l = l && "object" == typeof l && !Array.isArray(l) ? l : {};
  const ks = Object.keys(l);
  if (ks.length) {
    try {
      const sn = st.get("pe:seen", []),
        s = Array.isArray(sn) ? sn.slice() : [],
        b = st.get("pe:bag", {}) || {};
      (ks.forEach((k) => {
        l[k] && (s.includes(k) || s.push(k), (0 | b[k]) > 0 && (b[k]--, b[k] <= 0 && delete b[k]));
      }),
        st.set("pe:seen", s),
        st.set("pe:bag", b),
        st.set("pe:lock", {}));
    } catch (e) {}
    return {};
  }
  return l;
}
setTimeout(() => {
  try {
    peLk();
  } catch (e) {}
}, 0);
function peSn() {
  const a = st.get("pe:seen", []),
    s = Array.isArray(a) ? a.slice() : [],
    b = peBag();
  let q;
  try {
    q = aqRead().f;
  } catch (e) {
    q = {};
  }
  const n0 = s.length;
  PEF.forEach((f) => {
    !s.includes(f.id) && ((0 | b[f.id]) > 0 || (f.aq && q && q[f.id])) && s.push(f.id);
  });
  if (s.length > n0)
    try {
      st.set("pe:seen", s);
    } catch (e) {}
  return s;
}
function peXm() {
  try {
    return xmAll();
  } catch (e) {
    return !1;
  }
}
function peXf() {
  return peXm();
}
function peXr() {
  return Date.now() >= new Date(2026, 11, 1).getTime();
}
function peUn() {
  try {
    if ("function" == typeof UNL && UNL()) return !0;
    if (Date.now() < new Date(2026, 10, 28, 10).getTime()) return !1;
    if (st.get("pe:u2", 0)) return !0;
    const q = peSn().filter((i) => PEF.some((f) => f.id === i && !f.x && !f.wd)).length;
    if (q >= 40) {
      st.set("pe:u2", 1);
      return !0;
    }
  } catch (e) {}
  return !1;
}
function peU3() {
  try {
    return Date.now() >= new Date(2027, 0, 9, 10).getTime() || ("function" == typeof UNL && UNL());
  } catch (e) {
    return !1;
  }
}
function peWd() {
  try {
    if (peXm()) return 1;
    const w = st.get("pe:wd", 1);
    return 2 === w && peUn() ? 2 : 3 === w && peU3() ? 3 : 1;
  } catch (e) {
    return 1;
  }
}
function peRoll() {
  const X = peXf(),
    e = 1e4 * Math.random();
  let t = e < 2 ? (X ? "e" : "l") : e < 502 ? "e" : e < 2002 ? "r" : e < 5002 ? "u" : "c";
  const W = peWd(),
    ok = (x) => !x.nw && (X ? x.x : W > 1 ? W === x.wd : !x.wd && (!x.x || peXr()));
  let a = PEF.filter((x) => ok(x) && x.r === t);
  if (!a.length) {
    t = "e";
    a = PEF.filter((x) => ok(x) && x.r === t);
  }
  return "l" === t ? a[e < 1 ? 0 : a.length > 1 ? 1 : 0] : a[Math.floor(Math.random() * a.length)];
}
function peBag() {
  const e = st.get("pe:bag", {});
  return e && "object" == typeof e ? e : {};
}
function peBg() {
  return `<svg class="pebg" viewBox="0 0 400 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs>\n<linearGradient id="pes" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b0f33"/><stop offset=".5" stop-color="#2b2a6e"/><stop offset="1" stop-color="#5a4a8e"/></linearGradient>\n<linearGradient id="pew0" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a3a7a"/><stop offset="1" stop-color="#0c1638"/></linearGradient>\n<linearGradient id="pea" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7affd0" stop-opacity="0"/><stop offset=".4" stop-color="#7affd0" stop-opacity=".28"/><stop offset=".7" stop-color="#c9a3ff" stop-opacity=".22"/><stop offset="1" stop-color="#c9a3ff" stop-opacity="0"/></linearGradient>\n<radialGradient id="pem"><stop offset="0" stop-color="#fff6d0" stop-opacity=".5"/><stop offset="1" stop-color="#fff6d0" stop-opacity="0"/></radialGradient></defs>\n<rect width="400" height="700" fill="url(#pes)"/>${[...Array(46)].map((e, t) => `<circle cx="${(83 * t + 17) % 400}" cy="${(47 * t + 11) % 240}" r="${0.7 + (t % 3) * 0.5}" fill="#fff" opacity="${0.35 + (t % 3) * 0.2}"/>`).join("")}\n<path class="peau" d="M-20 120Q80 40 200 100T420 80V140Q300 170 200 150T-20 180Z" fill="url(#pea)"/>\n<circle cx="300" cy="90" r="70" fill="url(#pem)"/><circle cx="300" cy="90" r="22" fill="#fff6d0"/>\n<path d="M0 290L40 230L70 250L120 190L170 250L210 220L260 270L300 210L350 250L400 220V300H0Z" fill="#3a3a7a"/><path d="M120 190L106 210L118 206L126 214L134 204ZM300 210L288 228L300 224L310 230Z" fill="#e8ecff"/>\n${[
    ...Array(26),
  ]
    .map((e, t) => {
      const a = 16 * t - 4;
      return `<path d="M${a} 302L${a + 7} ${302 - (26 + ((37 * t) % 24))}L${a + 14} 302Z" fill="#1c2250"/>`;
    })
    .join(
      "",
    )}\n<rect x="0" y="300" width="400" height="400" fill="url(#pew0)"/>\n${[...Array(9)].map((e, t) => `<path d="M${280 + (t % 3) * 8 - 3 * t} ${312 + 16 * t}h${36 - 3 * t}" stroke="#fff6d0" stroke-opacity="${0.45 - 0.04 * t}" stroke-width="3" stroke-linecap="round"/>`).join("")}\n${[...Array(14)].map((e, t) => `<path class="perp" style="animation-delay:${0.7 * -t}s" d="M${((67 * t) % 380) + 10} ${330 + ((53 * t) % 330)}q10 -4 20 0" stroke="#9ab8ff" stroke-opacity=".35" stroke-width="1.6" fill="none"/>`).join("")}\n</svg>`;
}
const pePier = () =>
  `<svg class="pepi" viewBox="0 0 150 140" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0h140l10 8v132H0Z" fill="#6a4a30"/>${[18, 58, 98, 134].map((e) => `<rect x="${e - 5}" y="6" width="10" height="134" fill="#4a3220"/>`).join("")}${[...Array(6)].map((e, t) => `<path d="M0 ${18 + 20 * t}h150" stroke="#4a3220" stroke-width="2" vector-effect="non-scaling-stroke"/>`).join("")}<path d="M0 0h142" stroke="#e8ecff" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg><svg class="pelmp" viewBox="0 0 40 70" aria-hidden="true"><path d="M20 70V18" stroke="#4a3220" stroke-width="4"/><circle cx="20" cy="14" r="22" fill="#ffcf7a" opacity=".2"/><circle cx="20" cy="14" r="7" fill="#ffcf7a"/></svg>`;
function pePlay() {
  if ("function" == typeof gLock && gLock("peche")) return;
  ((cur = "peche"), (daily = !1), (playing = !1), (snap = null), theme("peche"));
  try {
    kzMu.style("pe");
  } catch (e) {}
  const e = ++KZRUN,
    t = () => e === KZRUN && "peche" === cur && !!document.getElementById("peg");
  ((app.innerHTML = `<div class="peg" id="peg"><div class="pet"><button class="back pehome" data-a="back" data-v="home" aria-label="Retour"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11.5 12 4.5l8 7"/><path d="M6 10v9h4.5v-5h3v5H18v-9"/></svg></button><b>Pêche</b><div class="petr"><button class="hb pebk" data-a="peOdds" aria-label="Probabilités"><span>%</span></button><div class="chip" id="pefl">🫧 ${FLX()}</div></div></div>\n<div class="pesc${peXm() ? " pexm" : ""}" id="pesc">${peBg()}${peXm() ? peHolesX() : ""}<div class="pesh"><i style="top:62%;animation-duration:26s"></i><i style="top:74%;animation-duration:34s;animation-delay:-12s"></i><i style="top:84%;animation-duration:30s;animation-delay:-20s" class="r"></i></div>${peXm() ? pePierX() : pePier()}<button class="pedk" data-a="peBook" aria-label="Carnet de pêche" style="left:max(4px,calc(20% - 84px))"><svg viewBox="0 0 40 40" aria-hidden="true"><ellipse cx="20" cy="35" rx="15" ry="3" fill="#000" opacity=".3"/><rect x="6" y="9" width="28" height="25" rx="3" fill="#8a2f3a" stroke="#4a1018" stroke-width="1.4"/><rect x="9" y="9" width="3" height="25" fill="#5e1a24"/><rect x="14" y="13" width="16" height="10" rx="1.5" fill="#f3d58a" stroke="#a8781a" stroke-width=".8"/><path d="M22 15.5l1.5 3 3.3.5-2.4 2.3.6 3.2-3-1.6-3 1.6.6-3.2-2.4-2.3 3.3-.5z" fill="#8a2f3a" transform="translate(-.2 -1.4) scale(.95) translate(1 1)"/><path d="M14 28h16" stroke="#f3d58a" stroke-width="1.4" stroke-linecap="round"/></svg></button><button class="pedk" data-a="peBag" aria-label="Ouvrir le panier" style="left:calc(20% + 34px)"><svg viewBox="0 0 40 40" aria-hidden="true"><ellipse cx="20" cy="35" rx="15" ry="3" fill="#000" opacity=".3"/><path d="M9 17Q20 -2 31 17" fill="none" stroke="#7a4e22" stroke-width="2.6" stroke-linecap="round"/><path d="M5 17h30l-3.5 17H8.5z" fill="#c8924a" stroke="#6a4218" stroke-width="1.4" stroke-linejoin="round"/><path d="M6.5 23h27M7.6 29h24.8M14 17l1.2 17M20 17v17M26 17l-1.2 17" stroke="#8a5a28" stroke-width="1.2"/></svg><b class="pebdg" id="pebn">0</b></button><svg class="peln" id="peln" aria-hidden="true"><path id="perd" d="" stroke="#8a5a30" stroke-width="3.2" stroke-linecap="round" fill="none"/><path id="pelp" d="" stroke="#e8ecff" stroke-opacity=".75" stroke-width="1.4" fill="none"/><circle id="perh" r="6" cx="-20" cy="-20" fill="#fff" stroke="#cfc8ea" stroke-width="1.2"/></svg>\n<div class="pezn" id="pezn">${"function" == typeof qzGuy ? qzGuy("ask") : ""}</div>\n\n<div class="pefl" id="pefo" hidden><svg viewBox="0 0 20 30" aria-hidden="true"><path d="M10 0v8" stroke="#fff" stroke-width="1.4"/><ellipse cx="10" cy="14" rx="6" ry="7" fill="#ff5a5a"/><path d="M4 14a6 7 0 0 0 12 0z" fill="#fff"/><ellipse cx="10" cy="21" rx="9" ry="2.2" fill="#9ab8ff" opacity=".5"/></svg><b class="pex" id="pex" hidden>!</b></div></div>\n<div class="pehud"><p class="m pem" id="m" role="status" aria-live="polite">${peXm() ? "Touche un trou dans la glace pour lancer ta ligne." : "Touche le lac pour lancer ta ligne."}</p><div class="pepr" id="pepr" hidden><i id="pepi"></i><b class="pete"><i id="pete"></i></b></div><button class="btn pebt" id="pebt" data-a="peAct">Lancer</button></div><div class="peov" id="peov" hidden></div></div>`),
    ($("#nav").hidden = !0),
    (mt = "m"));
  {
    const U = document.createElement("div");
    ((U.className = "peup"), U.append($("#pepr"), $("#m")), $("#pesc").appendChild(U));
  }
  const a = $("#pesc"),
    s = $("#pefo"),
    n = $("#pelp"),
    o = $("#pebt"),
    i = $("#pepr"),
    r = $("#pepi");
  let l = { st: "idle", x: 0, y: 0, fish: null, p: 0, hold: !1, pull: 0, pt: 0, t0: 0, bite: 0 },
    c = 0;
  const d = () => a.clientWidth,
    f = () => a.clientHeight,
    u = () => ({ x: 0.33 * d(), y: 0.62 * f() }),
    h = () => {
      const e = peBag(),
        t = Object.values(e).reduce((e, t) => e + (0 | t), 0),
        a = $("#pebn");
      a && (a.textContent = t);
    };
  h();
  const p = () => {
      const e = u(),
        t = $("#perd"),
        H = $("#perh");
      H && (H.setAttribute("cx", 0.2 * d() + 15), H.setAttribute("cy", 0.8 * f() - 10));
      if ((t && t.setAttribute("d", `M${0.2 * d() + 15} ${0.8 * f() - 10}L${e.x} ${e.y}`), s.hidden))
        return void n.setAttribute("d", "");
      const a = "reel" === l.st ? (l.pull ? 2 : 14) : 30;
      n.setAttribute("d", `M${e.x} ${e.y}Q${(e.x + l.x) / 2} ${Math.max(e.y, l.y) + a} ${l.x} ${l.y}`);
    },
    m = (e, t) => {
      s.style.transform = `translate(${e - 10}px,${t - 21}px)`;
    },
    b = (e, t) => {
      ((o.textContent = e), (o.dataset.a = t));
    },
    g = (e) => {
      ((l.st = "idle"),
        (s.hidden = !0),
        (i.hidden = !0),
        ($("#pex").hidden = !0),
        b("Lancer", "peAct"),
        e && msg(e),
        p());
    },
    E = (e, a) => {
      if ("idle" !== l.st) return;
      const n = u(),
        o = d(),
        i = f();
      ((e = Math.max(0.42 * o, Math.min(o - 20, e))),
        (a = Math.max(0.5 * i, Math.min(0.86 * i, a))),
        (l.st = "cast"),
        (s.hidden = !1),
        b("…", "peAct"),
        sfx(420, 0.12));
      const r = performance.now(),
        c = (s) => {
          if (!t()) return;
          const o = Math.min(1, (s - r) / 750);
          if (
            ((l.x = n.x + (e - n.x) * o),
            (l.y = n.y + (a - n.y) * o - Math.sin(o * Math.PI) * i * 0.18),
            m(l.x, l.y),
            p(),
            o < 1)
          )
            return requestAnimationFrame(c);
          ((l.st = "wait"),
            (l.t0 = performance.now()),
            (l.bite = l.t0 + 2500 + 5500 * Math.random()),
            sfx(240, 0.15),
            msg("Patience… le flotteur se balance."),
            b("Ramener", "peAct"),
            y());
        };
      requestAnimationFrame(c);
    },
    y = () => {
      cancelAnimationFrame(c);
      const e = (a) => {
        if (!t()) return;
        const s = (a - l.t0) / 1e3;
        if ("wait" === l.st) {
          const e = Math.sin(9 * s) * (Math.sin(1.3 * s) > 0.92 ? 3 : 0);
          (m(l.x, l.y + 1.6 * Math.sin(2 * s) + e),
            a >= l.bite &&
              ((l.st = "bite"),
              (l.bt = a),
              ($("#pex").hidden = !1),
              sfx(700, 0.2),
              vib([20, 40, 20]),
              msg("Ça mord ! Ferre vite !"),
              b("Ferrer !", "peAct")));
        } else if ("bite" === l.st)
          (m(l.x, l.y + 6 + 3 * Math.sin(30 * s)),
            a - l.bt > 3e3 &&
              ((l.st = "wait"),
              ($("#pex").hidden = !0),
              (l.bite = a + 2500 + 5e3 * Math.random()),
              msg("Le poisson est reparti. Un autre viendra…"),
              b("Ramener", "peAct")));
        else if ("reel" === l.st) {
          const e = l.fish,
            t = "curel".indexOf(e.r),
            s = Math.min(0.05, (a - (l.ln || a)) / 1e3);
          ((l.ln = a),
            a >= l.pt &&
              ((l.pull = l.pull ? 0 : 1),
              (l.pt = a + (l.pull ? 700 + 250 * t : 1600 - 200 * t + 900 * Math.random())),
              l.pull
                ? (msg("Il tire ! Relâche un peu…"), sfx(300, 0.08))
                : msg("Il se fatigue : remonte-le doucement.")));
          const EH = l.hold && a >= (l.lk || 0),
            n = 0.3 - 0.04 * t;
          ((l.p += EH ? (l.pull ? -0.1 - 0.03 * t : n) * s : (l.pull ? -0.03 * (1 + t) : 0) * s),
            (l.p = Math.max(0, Math.min(1, l.p))),
            (r.style.width = 100 * l.p + "%"),
            i.classList.toggle("pl", !!l.pull),
            (l.te = Math.max(0, (l.te || 0) + (EH && l.pull ? [0.3, 0.55, 0.85, 0.95, 1.6][t] : -0.45) * s)));
          const o = $("#pete");
          if (
            ((e.chest || "l" === e.r) && (l.te = Math.min(l.te, 0.9)),
            o && ((o.style.width = Math.min(100, 100 * l.te) + "%"), o.classList.toggle("hi", l.te > 0.6)),
            l.te >= 1)
          ) {
            (cancelAnimationFrame(c), sfx(180, 0.3), vib(60));
            const t =
              "l" === e.r || "e" === e.r
                ? "un poisson très puissant"
                : "r" === e.r
                  ? "un beau poisson"
                  : "le poisson";
            return void g(
              "Oh ! " + t[0].toUpperCase() + t.slice(1) + " s’est décroché… Relâche quand il tire !",
            );
          }
          const d = u(),
            f = l.p;
          if (
            ((l.x = l.rx + (d.x + 30 - l.rx) * f + (l.pull ? 4 * Math.sin(a / 60) : 0)),
            (l.y = l.ry + (d.y + 20 - l.ry) * f),
            m(l.x, l.y + 2 * Math.sin(a / 90)),
            p(),
            l.p >= 1)
          )
            return A();
        }
        c = requestAnimationFrame(e);
      };
      c = requestAnimationFrame(e);
    },
    v = () => {
      ((l.pr = []),
        (l.lk = 0),
        (l.fish = Math.random() < 0.02 ? { id: "*chest", r: "r", n: "Coffre", chest: 1 } : peRoll()),
        (l.st = "reel"),
        (l.p = 0.08),
        (l.te = 0),
        (l.pull = 0),
        (l.pt = performance.now() + 900),
        (l.rx = l.x),
        (l.ry = l.y),
        (l.ln = 0),
        ($("#pex").hidden = !0),
        (i.hidden = !1),
        sfx(520, 0.15),
        msg(
          "l" === l.fish.r
            ? "Quelle force… c’est un poisson extraordinaire !"
            : "e" === l.fish.r
              ? "Il est lourd ! Prends ton temps."
              : "Ferré ! Maintiens le bouton sans lâcher pour remonter.",
        ),
        b("Maintenir pour remonter", "peHold"),
        i.classList.toggle("lg", "l" === l.fish.r));
    },
    A = () => {
      cancelAnimationFrame(c);
      if (l.fish.chest) return (g(""), h(), void PEC());
      const e = l.fish,
        t = peR(e.r),
        a = peBag(),
        s = peSn(),
        n = !s.includes(e.id);
      n || ((a[e.id] = 1 + (0 | a[e.id])), st.set("pe:bag", a));
      if (n) {
        (s.push(e.id), st.set("pe:seen", s));
        try {
          styGain(1);
          msg("🦪 +1 fragment de nacre");
        } catch (x) {}
      }
      (h(),
        sfx("l" === e.r ? 990 : 784, 0.35),
        vib("l" === e.r ? [40, 60, 40, 60, 80] : [20, 30, 20]),
        g(""));
      const o = $("#peov");
      ((o.hidden = !1),
        (o.innerHTML = `<div class="pecard pr${e.r}"><small style="color:${t.c}">${t.n}${n ? " · nouveau !" : ""}</small><div class="pefi">${fishSVG(e)}</div><h2>${e.n}</h2><p>${n ? "Première prise de cette espèce : elle entre dans l’almanach (elle ne se vend pas)." : "Doublon : il va dans ton panier. Vends-le " + t.v + " 🫧" + (e.aq ? " ou offre-le à l’aquarium" : "") + "."}</p><button class="btn" data-a="peOk">${n ? "Continuer" : "Dans le panier"}</button></div>`));
    },
    S = (e) => {
      if ("reel" !== l.st) return;
      if (e && !l.hold) {
        const n = performance.now(),
          p = (l.pr = (l.pr || []).filter((x) => n - x < 1200));
        p.push(n);
        if (p.length >= 3) {
          l.lk = n + 1500;
          l.pr = [];
          msg("Ne tapote pas : maintiens le bouton sans lâcher !");
        }
      }
      l.hold = e;
    };
  (Input.sur(
    "toucher",
    (_, { evt: e }) => {
      if (e.target.closest && e.target.closest(".pedk")) return;
      if ("idle" === l.st) {
        const t = a.getBoundingClientRect();
        E(...pexs(e.clientX - t.left, e.clientY - t.top, t.width, t.height));
      } else "bite" === l.st ? v() : "reel" === l.st && S(!0);
    },
    { cible: a },
  ),
    Input.sur(
      "toucher",
      (_, { evt: e }) => {
        "reel" === l.st && (e.preventDefault(), S(!0));
      },
      { cible: o },
    ));
  const x = () => S(!1);
  (Input.sur("lacher", x, { annulation: !0 }),
    Object.assign(act, {
      peAct: () => {
        t() &&
          ("idle" === l.st
            ? E(...pexs(d() * (0.55 + 0.35 * Math.random()), f() * (0.58 + 0.25 * Math.random()), d(), f()))
            : "bite" === l.st
              ? v()
              : "wait" === l.st && (cancelAnimationFrame(c), g("Ligne ramenée.")));
      },
      peHold: () => {},
      peOk: () => {
        const e = $("#peov");
        (e && ((e.hidden = !0), (e.innerHTML = "")),
          msg(peXm() ? "Touche un trou dans la glace pour relancer." : "Touche le lac pour relancer."));
      },
      peBag: () => L(),
      peBook: () => act.peAl(),
      peAlW: (e) => {
        const w = +e;
        if (2 === w && !peUn())
          return msg(
            Date.now() < new Date(2026, 10, 28, 10).getTime()
              ? "🔒 Monde 2 : disponible samedi 28 novembre à 10 h."
              : "🔒 Monde 2 : pêche 40 espèces du monde 1.",
          );
        if (3 === w && !(peXr() || peXm() || peU3())) return msg("🔒 Monde des fêtes : dès le 1er décembre.");
        act.__s.w = w;
        act.peAl();
      },
      peAlR: (e) => {
        act.__s.r = e || "";
        act.peAl();
      },
      peAlF: (e) => {
        act.__s.f = e || "";
        act.peAl();
      },
      peAl: () => {
        const e = $("#peov");
        if (!e) return;
        const S = act.__s || (act.__s = { w: 1, r: "", f: "" }),
          t = peSn(),
          u2 = peUn(),
          u3 = peXr() || peXm() || peU3(),
          WL = [
            [1, "Monde 1", "🐟", (f) => !f.x && !f.wd, 1],
            [2, "Monde 2", "🌸", (f) => 2 === f.wd, u2],
            [3, "Fêtes", "🎄", (f) => !!f.x, u3],
          ];
        WL.find((x) => x[0] === S.w && x[4]) || (S.w = 1);
        const W = WL.find((x) => x[0] === S.w),
          A = PEF.filter(W[3]),
          got = A.filter((f) => t.includes(f.id)).length,
          pc = A.length ? Math.round((100 * got) / A.length) : 0,
          ok = (g) => ("ok" === S.f ? g : "no" === S.f ? !g : !0),
          card = (g, sv, nm, c) =>
            `<div class="pebki${g ? "" : " no"}"${g ? ` style="box-shadow:inset 0 0 0 1.5px ${c}"` : ""}><span>${sv}</span><small>${g ? nm : "???"}</small></div>`;
        let h = "";
        PER.forEach((r) => {
          if (S.r && S.r !== r.k) return;
          const L = A.filter((f) => f.r === r.k);
          if (!L.length) return;
          const g = L.filter((f) => t.includes(f.id)).length,
            V = L.filter((f) => ok(t.includes(f.id)));
          h +=
            `<h3 class="pebkh" style="color:${r.c}">${r.n} <small>${g}/${L.length}</small><em>${r.v} 🫧</em></h3>` +
            (V.length
              ? `<div class="pebkg">${V.map((f) => card(t.includes(f.id), fishSVG(f), f.n, r.c)).join("")}</div>`
              : '<p class="kzsm">Rien ici avec ce filtre.</p>');
        });
        if (1 === S.w && !S.r) {
          const M = [
            ["cristalf", "Poisson cristal"],
            ["marais", "Coffre des marais"],
          ].filter((x) => ok(!!peOwn(x[0])));
          M.length &&
            (h += `<h3 class="pebkh" style="color:#9ff0ff">Mythique <small>dans les coffres</small></h3><div class="pebkg">${M.map((x) => card(!!peOwn(x[0]), peIco(x[0]), x[1], "#9ff0ff")).join("")}</div>`);
        }
        h || (h = '<p class="kzsm">Rien à afficher avec ce filtre.</p>');
        const chip = (a, v, cur, l, c) =>
          `<button class="pealc${cur === v ? " on" : ""}" data-a="${a}" data-v="${v}"${c ? ` style="--c:${c}"` : ""}>${l}</button>`;
        ((e.hidden = !1),
          (e.innerHTML = `<div class="pebag peal"><div class="pealh"><div class="pebh"><h2>Almanach</h2><button class="pealb pealq" data-a="peOdds" aria-label="Probabilités">%</button><button class="pealb pealx" data-a="peBagX" aria-label="Fermer">✕</button></div><div class="pealt">${WL.map((x) => `<button class="pealw${x[0] === S.w ? " on" : ""}${x[4] ? "" : " lk"}" data-a="peAlW" data-v="${x[0]}">${x[4] ? x[2] : "🔒"}<span>${x[1]}</span></button>`).join("")}</div><div class="pealp"><i style="width:${pc}%"></i><b>${got} / ${A.length} · ${pc} %</b></div><div class="pealr">${chip("peAlR", "", S.r, "Toutes")}${PER.map((r) => chip("peAlR", r.k, S.r, r.n, r.c)).join("")}</div></div>${h}</div>`));
      },
      peSell: (e) => {
        const t = peBag(),
          a = PEF.find((t) => t.id === e);
        if (!(a && t[e] > 0)) return;
        const LK = peLk(),
          sl = t[e] - (LK[e] ? 1 : 0);
        if (sl <= 0) return msg("Garde ta nouvelle espèce : tu pourras vendre les suivantes.");
        const s = sl * peR(a.r).v;
        (LK[e] ? (t[e] = 1) : delete t[e],
          st.set("pe:bag", t),
          (fl += s),
          st.set("fl", fl),
          sfx(880, 0.2),
          msg("+" + s + " 🫧"),
          L(),
          h(),
          M());
      },
      peSellAll: () => {
        const e = peBag(),
          LK = peLk();
        let t = 0;
        for (const a in e) {
          const s = PEF.find((e) => e.id === a);
          if (s && "l" !== s.r) {
            const q = (0 | e[a]) - (LK[a] ? 1 : 0);
            q > 0 && ((t += q * peR(s.r).v), LK[a] ? (e[a] = 1) : delete e[a]);
          }
        }
        if (!t) return msg("Rien à vendre pour l’instant.");
        (st.set("pe:bag", e),
          (fl += t),
          st.set("fl", fl),
          sfx(880, 0.25),
          msg("Tu as vendu ta pêche : +" + t + " 🫧"),
          L(),
          h(),
          M());
      },
      peAq: (e) => {
        const t = peBag(),
          a = PEF.find((t) => t.id === e && t.aq);
        if (!(a && t[e] > 0)) return;
        const s = aqRead();
        if (s.f[e]) return msg("Ce poisson nage déjà dans ton aquarium.");
        const n = "function" != typeof aqOn || void 0 === MAXF || aqOn(s).length < MAXF;
        ((s.f[e] = { t: Date.now(), on: n ? 1 : 0, n: a.n }),
          aqSave(s),
          t[e]--,
          t[e] || delete t[e],
          (() => {
            const q = peLk();
            q[e] && (delete q[e], st.set("pe:lock", q));
          })(),
          st.set("pe:bag", t),
          sfx(990, 0.3),
          msg(a.n + " nage maintenant dans ton aquarium" + (n ? " !" : " (en réserve).")),
          L(),
          h());
      },
      peBagX: () => {
        const e = $("#peov");
        e && ((e.hidden = !0), (e.innerHTML = ""));
      },
      peHelp: () => {
        const e = $("#peov");
        if (!e) return;
        st.set("pe:w", 1);
        const F = PEF.find((x) => !x.x) || PEF[0],
          B =
            '<svg viewBox="0 0 20 30"><path d="M10 0v8" stroke="#fff" stroke-width="1.4"/><ellipse cx="10" cy="14" rx="6" ry="7" fill="#ff5a5a"/><path d="M4 14a6 7 0 0 0 12 0z" fill="#fff"/><ellipse cx="10" cy="21" rx="9" ry="2.2" fill="#9ab8ff" opacity=".5"/></svg>',
          K =
            '<svg viewBox="0 0 40 40"><rect x="6" y="9" width="28" height="25" rx="3" fill="#8a2f3a" stroke="#4a1018" stroke-width="1.4"/><rect x="9" y="9" width="3" height="25" fill="#5e1a24"/><rect x="14" y="13" width="16" height="10" rx="1.5" fill="#f3d58a" stroke="#a8781a" stroke-width=".8"/><path d="M14 28h16" stroke="#f3d58a" stroke-width="1.4" stroke-linecap="round"/></svg>',
          P =
            '<svg viewBox="0 0 40 40"><path d="M9 17Q20 -2 31 17" fill="none" stroke="#7a4e22" stroke-width="2.6" stroke-linecap="round"/><path d="M5 17h30l-3.5 17H8.5z" fill="#c8924a" stroke="#6a4218" stroke-width="1.4" stroke-linejoin="round"/><path d="M6.5 23h27M7.6 29h24.8M14 17l1.2 17M20 17v17M26 17l-1.2 17" stroke="#8a5a28" stroke-width="1.2"/></svg>',
          H = (i, t) => '<div class="pehw"><span class="pehi">' + i + "</span><p>" + t + "</p></div>";
        e.hidden = !1;
        e.innerHTML =
          '<div class="pecard pehc"><h2 style="margin:0 0 4px">Comment pêcher</h2>' +
          H(B, "<b>1. Lance.</b> Touche le lac pour lancer ta ligne, puis attends que le flotteur plonge.") +
          H(
            '<span style="font:800 26px system-ui;color:#ffd45a">!</span>',
            "<b>2. Ferre.</b> Quand « Ça mord ! » s’affiche, touche vite pour ferrer.",
          ) +
          H(
            fishSVG(F),
            "<b>3. Remonte.</b> Maintiens le bouton sans lâcher. Quand le poisson tire, relâche ; quand il se fatigue, maintiens à nouveau. Marteler le bouton ne marche pas : il faut maintenir.",
          ) +
          H(
            K,
            "<b>4. Almanach.</b> Ta première prise de chaque espèce entre dans l’almanach pour toujours. Elle ne se vend pas.",
          ) +
          H(
            P,
            "<b>5. Doublons.</b> Les poissons en double vont dans ton panier : vends-les contre des bulles 🫧 ou offre certains à ton aquarium.",
          ) +
          '<button class="btn" data-a="peBagX">J’ai compris</button></div>';
      },
    }));
  const M = () => {
    const e = $("#pefl");
    e && (e.textContent = "🫧 " + FLX());
  };
  function L() {
    const e = $("#peov");
    if (!e) return;
    const t = peBag(),
      a = peSn(),
      s = aqRead(),
      LK = peLk(),
      n = PEF.filter((e) => t[e.id] > 0)
        .map((e) => {
          const a = peR(e.r),
            n = t[e.id],
            sl = n - (LK[e.id] ? 1 : 0);
          return `<div class="pebr"><span class="pebf">${fishSVG(e)}</span><span class="pebt2"><b>${e.n} × ${n}</b><small style="color:${a.c}">${a.n} · ${a.v} 🫧 pièce</small></span><span class="pebb">${sl > 0 ? `<button class="sb" data-a="peSell" data-v="${e.id}">Vendre · ${sl * a.v} 🫧</button>` : `<small class="pebk1">Nouvelle espèce : gardée</small>`}${e.aq ? `<button class="sb buy" data-a="peAq" data-v="${e.id}"${s.f[e.id] ? " disabled" : ""}>${s.f[e.id] ? "Déjà à l’aquarium" : "Aquarium"}</button>` : ""}</span></div>`;
        })
        .join(""),
      o = PEF.filter((e) => "l" !== e.r).reduce(
        (e, a) => e + Math.max(0, (0 | t[a.id]) - (LK[a.id] ? 1 : 0)) * peR(a.r).v,
        0,
      );
    ((e.hidden = !1),
      (e.innerHTML = `<div class="pebag"><div class="pebh"><h2>Ton panier</h2><button class="pealb pealx" data-a="peBagX" aria-label="Fermer">✕</button></div><p class="kzsm">Carnet de pêche : ${a.filter((i) => PEF.some((f) => f.id === i && !f.x && !f.wd)).length} / ${PEF.filter((f) => !f.x && !f.wd).length} espèces découvertes</p><p class="kzsm">Seuls les doublons se vendent : ta première prise de chaque espèce reste dans l’almanach.</p>${n || '<p class="kzsm">Ton panier est vide. Lance ta ligne !</p>'}${o ? `<button class="btn" data-a="peSellAll">Tout vendre · ${o} 🫧</button><p class="kzsm">Les poissons légendaires ne sont pas vendus avec le reste.</p>` : ""}</div>`));
  }
  (g(),
    st.get("pe:w", 0) ||
      setTimeout(() => {
        t() && act.peHelp();
      }, 350));
}
