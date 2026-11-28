function start(e, t, a, s) {
  return (
    (INFG = ""),
    "ana" === e && (!anaOn() || a >= nl(e))
      ? hub(anaOn() ? "ana" : "mots")
      : !t && a >= nl(e) && !xmasOn()
        ? hub(e)
        : ((cur = e),
          (daily = t),
          (lv = a),
          (playing = !0),
          (wsG = null),
          s || t || st.get(ckey(e) + ":" + a, !1) || (s = st.get("p:" + e + ":" + a, null) || void 0),
          theme(e, !t && a >= nl(e)),
          {
            ana: pAna2,
            nono: pNono,
            flow: pFlow,
            cuisine: pCuis,
            blocs: pBlocs,
            g2048: p2048,
            tetris: pTeconta,
            brick: pBrick,
            planetes: pPlan,
            mots: pRoue,
            croises: pCross,
            phrase: pPhrase,
            tournade: pTourne,
            maze: pMaze,
            memo: pMemo,
            sudoku: pSudoku,
            caches: pSearch,
            match3: pMatch,
            demenage: pDemen2,
            quiz: pQuiz,
            cherche: pCherche,
          }[e](s),
          void window.scrollTo(0, 0))
  );
}
var bsMu = {
  on: !1,
  L: null,
  T: 0,
  build() {
    const a = typeof AC !== "undefined" ? AC : null;
    if (!a || typeof music === "undefined" || !music || this.L) return;
    const out = a.createGain();
    out.gain.value = 0;
    out.connect(music);
    /* houle : souffle d'eau très doux qui monte et descend lentement */
    const n = a.createBuffer(1, a.sampleRate * 4, a.sampleRate),
      c = n.getChannelData(0);
    let p = 0;
    for (let k = 0; k < c.length; k++) {
      p = 0.985 * p + 0.015 * (Math.random() * 2 - 1);
      c[k] = p * 7;
    }
    const src = a.createBufferSource();
    src.buffer = n;
    src.loop = !0;
    const bp = a.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 380;
    bp.Q.value = 0.5;
    const wg = a.createGain();
    wg.gain.value = 0.05;
    const lf = a.createOscillator(),
      lg = a.createGain();
    lf.frequency.value = 0.09;
    lg.gain.value = 0.04;
    lf.connect(lg);
    lg.connect(wg.gain);
    src.connect(bp);
    bp.connect(wg);
    wg.connect(out);
    src.start();
    lf.start();
    this.L = { a, out };
  },
  set(e) {
    this.build();
    if (!this.L) return;
    this.on = !!e;
    const { a, out } = this.L;
    out.gain.cancelScheduledValues(a.currentTime);
    out.gain.setTargetAtTime(this.on ? 0.5 : 0, a.currentTime, 0.9);
    clearTimeout(this.T);
    this.k = 0;
    if (this.on) this.loop();
  },
  /* reflets : accords scintillants qui montent lentement, et un long chant grave de baleine, de loin en loin */
  loop() {
    if (!this.on || !this.L) return;
    const { a, out } = this.L,
      t = a.currentTime + 0.05;
    this.k = (this.k || 0) + 1;
    const ch = [
        [440, 554.37, 659.25],
        [392, 493.88, 587.33],
        [440, 523.25, 659.25],
        [370, 440, 554.37],
      ][this.k % 4],
      lp = a.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 1400;
    const g = a.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.014, t + 3.2);
    g.gain.linearRampToValueAtTime(0, t + 9);
    lp.connect(g);
    g.connect(out);
    ch.forEach((f, i) =>
      [-5, 5].forEach((d) => {
        const o = a.createOscillator();
        o.type = "sine";
        o.frequency.value = f;
        o.detune.value = d;
        o.connect(lp);
        o.start(t + i * 0.35);
        o.stop(t + 9.2);
      }),
    );
    if (this.k % 3 === 0) {
      const w = a.createOscillator(),
        wg = a.createGain(),
        wl = a.createBiquadFilter(),
        t2 = t + 2;
      w.type = "sine";
      w.frequency.setValueAtTime(210, t2);
      w.frequency.exponentialRampToValueAtTime(150, t2 + 7);
      wl.type = "lowpass";
      wl.frequency.value = 420;
      wg.gain.setValueAtTime(0, t2);
      wg.gain.linearRampToValueAtTime(0.022, t2 + 2.5);
      wg.gain.linearRampToValueAtTime(0, t2 + 8);
      w.connect(wl);
      wl.connect(wg);
      wg.connect(out);
      w.start(t2);
      w.stop(t2 + 8.2);
    }
    this.T = setTimeout(() => this.loop(), 9500);
  },
};
function theme(e, t) {
  const a = xmAll();
  (m3Mus(PLK && !PLPA ? "match3" === PLK : "match3" === e && !t && !a),
    ttMus(PLK && !PLPA ? "tetris" === PLK : "tetris" === e && !t && !a),
    "function" == typeof g2Mus && g2Mus(PLK && !PLPA ? "g2048" === PLK : "g2048" === e && !t && !a),
    "function" == typeof bxMus && bxMus(PLK && !PLPA ? "blocs" === PLK : "blocs" === e && !t && !a),
    cbMus(PLK && !PLPA ? "colorie" === PLK : "colorie" === e && !t && !a),
    unMus(PLK && !PLPA ? "hoho" === PLK : "hoho" === e && !t && !a),
    chMus(PLK && !PLPA ? "cherche" === PLK : "cherche" === e && !t && !a),
    lfMus(PLK && !PLPA ? "sudoku" === PLK : "sudoku" === e && !t && !a),
    ecMus(PLK && !PLPA ? "chess" === PLK : "chess" === e && !t && !a),
    dmMus(PLK && !PLPA ? "draughts" === PLK : "draughts" === e && !t && !a),
    mtMus(PLK && !PLPA ? "scrabble" === PLK : "scrabble" === e && !t && !a),
    ahMus(PLK && !PLPA ? "airhockey" === PLK : "airhockey" === e && !t && !a),
    bkMus(!1),
    "function" == typeof ccMus && ccMus(PLK && !PLPA ? "carcache" === PLK : "carcache" === e && !t && !a),
    "function" == typeof blMus && blMus(PLK && !PLPA ? "billard" === PLK : "billard" === e && !t && !a),
    "function" == typeof soMus && soMus(PLK && !PLPA ? "solitaire" === PLK : "solitaire" === e && !t && !a),
    "function" == typeof zrMus && zrMus(PLK && !PLPA ? "recif" === PLK : "recif" === e && !t && !a),
    "function" == typeof kbMus && kbMus(PLK && !PLPA ? "brick" === PLK : "brick" === e && !t && !a),
    "function" == typeof zgMus && zgMus(PLK && !PLPA ? "garde" === PLK : "garde" === e && !t && !a),
    "function" == typeof zcMus && zcMus(PLK && !PLPA ? "crabes" === PLK : "crabes" === e && !t && !a),
    "function" == typeof bzMus && bzMus(PLK && !PLPA ? "bulles" === PLK : "bulles" === e && !t && !a),
    gfMus(PLK && !PLPA ? "galac" === PLK : "galac" === e && !t && !a),
    fiMus(PLK && !PLPA ? "flow" === PLK : "flow" === e && !t && !a),
    kzMus(!(("cuisine" !== e && "peche" !== e) || t || a)),
    xmMus(!!t || a));
  const s = ALL.find((t) => t.id === e),
    n = document.body.style;
  if (
    (n.setProperty("--a", t ? "#d9453d" : s ? s.a : "#a99cf0"),
    n.setProperty("--b", t ? "#1f8a52" : s ? s.b : "#5458AB"),
    $("#tint").classList.toggle("on", !!s),
    document.body.classList.toggle("g", !!s),
    document.body.classList.toggle("seabg", "match3" === e),
    document.body.classList.toggle("felt", "hoho" === e),
    document.body.classList.toggle("chbg", "chess" === e || "draughts" === e),
    "match3" === e && !document.getElementById("seadeco"))
  ) {
    const e = document.createElement("div");
    ((e.id = "seadeco"),
      (e.className = "m3sea seadeco"),
      e.setAttribute("aria-hidden", "true"),
      (e.innerHTML =
        [8, 22, 35, 50, 63, 77, 90]
          .map(
            (e, t) =>
              `<span class="m3bu" style="left:${e}%;--s:${6 + (t % 3) * 4}px;--d:${5 + (t % 4) * 1.7}s;animation-delay:-${1.3 * t}s"></span>`,
          )
          .join("") +
        [
          ["tortue", "", 20, 34, 0],
          ["meduse", " r", 52, 26, -9],
          ["raie", "", 80, 30, -17],
        ]
          .map(
            (e) =>
              `<span class="m3fi${e[1]}" style="top:${e[2]}%;--t:${e[3]}s;animation-delay:${e[4]}s">${fishSVG(FISH.find((t) => t.id === e[0]))}</span>`,
          )
          .join("")),
      document.body.appendChild(e));
  }
  document.body.classList.toggle("xm", !!t);
  const o = $("#pat");
  s ? (o.className = "pt-" + e + " on") : o.classList.remove("on");
}
function nv(e) {
  ("aqua" !== e &&
    ["#aqsh", "#aqbd"].forEach((e) => {
      const t = $(e);
      t && (t.classList.remove("open"), (t.style.visibility = "hidden"), (t.style.transition = "none"));
    }),
    (playing = !1),
    (wsG = null),
    theme(null),
    "undefined" != typeof bsMu && bsMu.set("aqua" === e),
    prMus(!1),
    "set" !== e && ((rc = !1), (Sy.done = ""), (Sy.pv = null), (Sy.err = "")));
  const t = $("#nav");
  ((t.hidden = !1),
    t.querySelectorAll(":scope>button").forEach((t) => t.classList.toggle("on", t.dataset.v === e)));
  document.body.dataset.xt = e || "";
  try {
    xdecoBuild();
  } catch (e) {}
}
function xdecoBuild() {
  let d = $("#xdeco");
  const on = sxOn();
  d ||
    (((d = document.createElement("div")).id = "xdeco"),
    d.setAttribute("aria-hidden", "true"),
    document.body.appendChild(d));
  document.body.classList.toggle("xmd", on);
  if (!on) return ((d.innerHTML = ""), void (d.dataset.w = ""));
  const w = innerWidth,
    xt = document.body.dataset.xt || "",
    pg = Math.max(0, ["aqua", "games", "daily", "soc", "set"].indexOf(xt)),
    key = w + "|" + xt;
  if (d.dataset.w == key && d.firstChild) return;
  d.dataset.w = key;
  const n = Math.max(3, Math.round(w / (150 + 14 * pg))),
    R = rng(77 + 31 * pg);
  let o = "";
  for (let i = 0; i < n; i++) {
    const x = ((i + 0.5) * w) / n + (((R() - 0.5) * w) / n) * 0.5;
    o += xOrn(x, 0, 14 + 22 * R(), 6.5 + 2.5 * R(), i + pg * 2, R() * 4, 0);
  }
  const ch = d.dataset.xt !== xt;
  ((d.dataset.xt = xt),
    (d.dataset.pg = pg),
    (d.innerHTML = `<svg class="xdg${ch ? " xdn" : ""}" width="${w}" height="90" viewBox="0 0 ${w} 90">${o}</svg>`));
}
function xOrn(x, y, L, r, i, dl, sy) {
  sy |= 0;
  const c = ["#ff4d4d", "#ffd24a", "#3ddc84", "#5ab8ff", "#ff8ad8"][i % 5],
    a = Math.min(5, L * 0.3),
    cx = x.toFixed(1),
    cy = y + L + r,
    f = (v) => v.toFixed(1);
  let B;
  if (1 === sy) {
    let q = "";
    for (let k = 0; k < 10; k++) {
      const t = -Math.PI / 2 + (k * Math.PI) / 5,
        rr = k % 2 ? 0.6 * r : 1.4 * r;
      q += (k ? "L" : "M") + f(x + rr * Math.cos(t)) + " " + f(cy + rr * Math.sin(t));
    }
    B = `<path d="${q}Z" fill="${c}"/>`;
  } else if (2 === sy)
    B = `<ellipse cx="${cx}" cy="${f(cy + 0.3 * r)}" rx="${f(0.72 * r)}" ry="${f(1.3 * r)}" fill="${c}"/><circle cx="${f(x - 0.25 * r)}" cy="${f(cy - 0.3 * r)}" r="${f(0.2 * r)}" fill="#fff" opacity=".6"/>`;
  else if (3 === sy)
    B = `<path d="M${cx} ${f(cy - 1.3 * r)}L${f(x + 0.95 * r)} ${f(cy)}L${cx} ${f(cy + 1.3 * r)}L${f(x - 0.95 * r)} ${f(cy)}Z" fill="${c}"/><path d="M${cx} ${f(cy - 1.3 * r)}V${f(cy + 1.3 * r)}" stroke="#fff" stroke-opacity=".45"/>`;
  else if (4 === sy)
    B = `<circle cx="${cx}" cy="${f(cy)}" r="${f(r)}" fill="${c}"/><path d="M${f(x - r)} ${f(cy)}H${f(x + r)}M${f(x - 0.8 * r)} ${f(cy - 0.5 * r)}H${f(x + 0.8 * r)}M${f(x - 0.8 * r)} ${f(cy + 0.5 * r)}H${f(x + 0.8 * r)}" stroke="#fff" stroke-opacity=".6" stroke-width="1.2"/>`;
  else
    B = `<circle cx="${cx}" cy="${f(cy)}" r="${f(r)}" fill="${c}"/><circle cx="${f(x - 0.35 * r)}" cy="${f(cy - 0.4 * r)}" r="${f(0.28 * r)}" fill="#fff" opacity=".55"/>`;
  return `<g class="xde" style="--dx:${i % 2 ? 12 : -12}px;animation-delay:${Math.min(0.36, (i % 6) * 0.06)}s"><g class="xdo" style="--d:${f(a)}px;--s0:${((L - a) / L).toFixed(3)};--s1:${((L + a) / L).toFixed(3)};animation-delay:-${dl.toFixed(2)}s"><rect x="${f(x - 2.2)}" y="${f(y - 1)}" width="4.4" height="3.4" rx="1" fill="#e8c860"/><line class="xds" x1="${cx}" y1="${f(y + 2)}" x2="${cx}" y2="${f(y + L)}" stroke="#d9c58a" stroke-width="1"/><g class="xdk"><rect x="${f(x - 2.4)}" y="${f(y + L - 1.5)}" width="4.8" height="3.4" rx="1" fill="#e8c860"/>${B}</g></g></g>`;
}
let xgbL = 0;
function xgbBuild() {
  const a = $("#app");
  a && a.querySelectorAll("#xgb").forEach((e) => e.remove());
  if (
    !a ||
    !document.body.classList.contains("xmd") ||
    !["games", "soc", "set"].includes(document.body.dataset.xt)
  )
    return;
  const W = a.clientWidth,
    H = Math.max(
      a.scrollHeight,
      document.documentElement.scrollHeight - a.offsetTop - 90,
      innerHeight - a.offsetTop,
    );
  if (W < 200 || H < 200) return;
  const R = rng(33),
    C = ["#ff4d4d", "#3ddc84", "#ffd24a", "#5ab8ff", "#ff8ad8"],
    drop = Math.max(200, Math.min(0.95 * W, 420));
  let b = "";
  for (let y = 90, j = 0; y < H - 120; y += drop + 150 + 80 * R(), j++) {
    const dir = j % 2 ? -1 : 1,
      x0 = dir > 0 ? -14 : W + 14,
      x1 = dir > 0 ? W + 14 : -14,
      y0 = y,
      y1 = y + drop,
      cx = (x0 + x1) / 2,
      cy = (y0 + y1) / 2 + 0.55 * drop,
      q = (t) => [
        (1 - t) * (1 - t) * x0 + 2 * t * (1 - t) * cx + t * t * x1,
        (1 - t) * (1 - t) * y0 + 2 * t * (1 - t) * cy + t * t * y1,
      ],
      len = Math.hypot(x1 - x0, y1 - y0) * 1.18,
      m = Math.max(6, Math.floor(len / 34));
    b += `<path d="M${x0} ${y0}Q${cx} ${cy} ${x1} ${y1}" fill="none" stroke="#35503a" stroke-width="1.6" opacity=".9"/>`;
    for (let k = 1; k <= m; k++) {
      const [X, Y] = q(k / (m + 1)),
        c = C[(k + j) % 5];
      b += `<g class="xdb" style="animation-delay:-${((k % 7) * 0.37).toFixed(2)}s"><circle cx="${X.toFixed(1)}" cy="${(Y + 5).toFixed(1)}" r="9" fill="${c}" opacity=".3"/><rect x="${(X - 1.6).toFixed(1)}" y="${(Y - 1).toFixed(1)}" width="3.2" height="4" fill="#2a2a3a"/><ellipse cx="${X.toFixed(1)}" cy="${(Y + 6.5).toFixed(1)}" rx="3.4" ry="4.8" fill="${c}"/></g>`;
      k % 6 == 3 && (b += xOrn(X, Y, 14 + 20 * R(), 6 + 3 * R(), k + j, R() * 4));
    }
  }
  const d = document.createElement("div");
  d.id = "xgb";
  d.style.height = H + "px";
  d.setAttribute("aria-hidden", "true");
  d.innerHTML = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${b}</svg>`;
  xgbL = 1;
  a.appendChild(d);
}
setTimeout(() => {
  const a = $("#app");
  if (!a) return;
  let t = 0;
  new MutationObserver(() => {
    if (xgbL) {
      xgbL = 0;
      return;
    }
    (clearTimeout(t),
      (t = setTimeout(() => {
        (xgbBuild(), setTimeout(xgbBuild, 700));
      }, 60)));
  }).observe(a, { childList: !0 });
}, 0);
addEventListener("resize", () => {
  document.body.classList.contains("xmd") && (xdecoBuild(), xgbBuild());
});
const ADVF = [
  0, 10, 10, 15, 10, 0, 15, 15, 20, 15, 25, 15, 0, 20, 20, 30, 20, 20, 25, 0, 30, 30, 25, 30, 50, 0, 20, 20,
  25, 25, 30, 0,
];
const ADVS = { 5: "air", 12: "dem", 19: "deco", 25: "fish", 31: "fw" };
const ADVI = { air: "🏒", dem: "🏠", deco: "🎄", fish: "🐟", fw: "🎆" };
function advY() {
  const e = new Date();
  return 0 === e.getMonth() ? e.getFullYear() - 1 : e.getFullYear();
}
function advOn() {
  if (UNL()) return !0;
  const e = new Date(),
    t = e.getMonth();
  return 11 === t || (0 === t && e.getDate() <= 1);
}
function advOk(d) {
  return advSame(d);
}
function advPast(d) {
  if (UNL()) return !1;
  const e = new Date(),
    t = e.getMonth(),
    a = e.getDate();
  return 11 === t
    ? a > d && !(a === d + 1 && (19 === d || 25 === d))
    : 0 === t && !(31 === d && 1 === a) && d <= 31;
}
function advSame(d) {
  if (UNL()) return !0;
  const e = new Date(),
    t = e.getMonth(),
    a = e.getDate();
  return (
    (11 === t && (a === d || (a === d + 1 && (19 === d || 25 === d)))) || (31 === d && 0 === t && 1 === a)
  );
}
function advRw(d) {
  const t = ADVS[d] || "fl";
  let n = ADVF[d];
  if (("air" === t && 2026 !== advY()) || ("dem" === t && !1)) return { t: "fl", n: 40, ic: "🫧" };
  return { t: t, n: n, ic: ADVI[t] || "🫧" };
}
function advSt() {
  return st.get("adv:" + advY(), { d: {} });
}
function advWait() {
  const A = advSt();
  for (let d = 1; d <= 31; d++) if (advOk(d) && !A.d[d]) return !0;
  return !1;
}
function advBtn() {
  const w = advWait();
  return `<button class="xmfl adv${w ? " wait" : ""}" data-a="adv" aria-label="Calendrier de l’avent${w ? " : un cadeau t’attend" : ""}"><svg class="advgf" viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="32" cy="58" rx="20" ry="3.5" fill="rgba(0,0,0,.28)"/><rect x="10" y="29" width="44" height="28" rx="3.5" fill="#d8283a"/><rect x="10" y="29" width="44" height="6" fill="rgba(0,0,0,.14)"/><rect x="28" y="29" width="8" height="28" fill="#ffd25a"/><g class="advlid"><rect x="6" y="20" width="52" height="11" rx="3.5" fill="#ee4a58"/><rect x="28" y="20" width="8" height="11" fill="#ffe08a"/><path d="M32 20C24 6 11 10 20 20Z" fill="#ffd25a"/><path d="M32 20C40 6 53 10 44 20Z" fill="#ffc23a"/><circle cx="32" cy="19" r="3.6" fill="#ffe9a0"/></g><g class="advsp" fill="#fff6c8"><path class="s1" d="M8 10l1.3 3 3 1.3-3 1.3L8 18.6 6.7 15.6 3.7 14.3l3-1.3z"/><path class="s2" d="M56 6l1.1 2.6 2.6 1.1-2.6 1.1L56 13.4l-1.1-2.6-2.6-1.1 2.6-1.1z"/><path class="s3" d="M58 36l1 2.2 2.2 1-2.2 1L58 42.4l-1-2.2-2.2-1 2.2-1z"/></g></svg><span class="advl">Calendrier</span>${w ? '<i class="advbd" aria-hidden="true">!</i>' : ""}</button>`;
}
function advScreen() {
  ((cur = null), (origin = "day"), nv("daily"));
  const A = advSt(),
    k = Object.keys(A.d).length,
    D = [];
  for (let d = 1; d <= 31; d++) {
    const o = !!A.d[d],
      r = advOk(d),
      w = ADVS[d],
      g = advRw(d),
      ms = !o && !r && advPast(d);
    D.push(
      `<button class="advd${o ? " o" : r ? " rd" : ms ? " ms" : " lk"}${w ? " sp" : ""}" data-a="advD" data-v="${d}" aria-label="Jour ${d}${o ? ", ouvert" : r ? ", à ouvrir" : ms ? ", manqué" : ", pas encore disponible"}"><b>${d}</b><i aria-hidden="true">${o ? g.ic : ms ? "✖" : w ? ADVI[w] : r ? "🎁" : "🔒"}</i></button>`,
    );
  }
  ((app.innerHTML = `<div class="top stk">${bk("day")}<div class="chip">🫧 ${FLX()}</div></div><section class="glass story"><h2>Calendrier de l’avent</h2><p>Un cadeau chaque jour du 1<sup>er</sup> au 31 décembre. Ouvre chaque case le jour même : un jour manqué est perdu (les cases du 19, 25 et 31 restent ouvrables le lendemain). ${k} / 31 ouverts.</p></section><div class="advg">${D.join("")}</div>${A.d[31] || (UNL() && A.d[31]) ? '<button class="btn" style="margin-top:16px" data-a="advFw">🎆 Revoir les feux d’artifice</button>' : ""}`),
    window.scrollTo(0, 0));
}
function advModal(h) {
  const e = document.getElementById("advm");
  e && e.remove();
  const t = document.createElement("div");
  ((t.id = "advm"),
    t.setAttribute("role", "dialog"),
    t.setAttribute("aria-modal", "true"),
    (t.innerHTML = `<div class="advb">${h}<button class="btn" data-a="advX">Super !</button></div>`),
    document.body.appendChild(t));
  try {
    (sfx(660, 0.12),
      setTimeout(() => sfx(880, 0.12), 130),
      setTimeout(() => sfx(1175, 0.25), 260),
      vib([15, 30, 15]),
      confetti(t.querySelector(".advi")));
  } catch (e) {}
}
function advDo(d) {
  const A = advSt(),
    g = advRw(d),
    dt = g.t;
  if (A.d[d]) {
    let m = "Jour " + d + " · ";
    return gToast(
      m +
        ("fl" === dt
          ? "+" + g.n + " bulles"
          : {
              air: "Air hockey",
              dem: "Déménagement",
              deco: "Couronne de Noël",
              fish: "Poisson boule de Noël",
              fw: "Feux d’artifice + décor lumineux",
            }[dt]),
    );
  }
  if (!advOk(d))
    return gToast(
      advPast(d) ? "Jour manqué : il fallait l’ouvrir le jour même" : "Disponible le " + d + " décembre",
    );
  let n = g.n,
    ic = g.ic,
    ti,
    tx = "",
    go = "";
  if ("fl" === dt) ti = "+" + n + " bulles";
  else if ("air" === dt)
    ((ti = "Nouveau jeu : Air hockey"),
      (tx = "La table de air hockey est ouverte dans tes jeux."),
      (go = '<button class="btn alt" data-a="advGo" data-v="airhockey">Y jouer</button>'));
  else if ("dem" === dt) {
    if (advSame(d)) {
      const e = st.get("g:unl", []);
      (e.includes("demenage") || (e.push("demenage"), st.set("g:unl", e)),
        (ti = "Nouveau jeu : Déménagement"),
        (tx = "Ouvert tout de suite, parce que tu es là le jour même !"),
        (go = '<button class="btn alt" data-a="advGo" data-v="demenage">Y jouer</button>'));
    } else
      ((ti = "Déménagement"),
        (tx = "Tu as raté le jour même : Déménagement s’ouvrira à l’étape 80 de l’histoire."));
  } else if ("deco" === dt) {
    const e = aqRead();
    (void 0 === e.d.xcouronne && ((e.d.xcouronne = 1), aqSave(e)),
      (ti = "Décoration de Noël"),
      (tx = "La Couronne de Noël rejoint ton aquarium (boutique, onglet décors)."));
  } else if ("fish" === dt) {
    const e = aqRead();
    (e.f.boule ||
      ((e.f.boule = { t: Date.now() - HR, on: aqOn(e).length < MAXF ? 1 : 0, n: aqRnd(e) }), aqSave(e)),
      (ti = "Poisson boule de Noël"),
      (tx = "Un poisson spécial rejoint ton aquarium !"));
  } else if ("fw" === dt) {
    const e = aqRead();
    (void 0 === e.d.xfeu && ((e.d.xfeu = 1), aqSave(e)),
      (ti = "Feux d’artifice !"),
      (tx =
        "Le ciel s’illumine pour la nouvelle année. Une lumière d’artifice rejoint ton aquarium (boutique, décors)."));
  }
  (n && ((fl += n), st.set("fl", fl)),
    (A.d[d] = 1),
    st.set("adv:" + advY(), A),
    advModal(
      `<small>Jour ${d}</small><div class="advi">${ic}</div><h2>${ti}</h2>${tx ? "<p>" + tx + "</p>" : ""}${go}`,
    ),
    "fw" === dt && setTimeout(advFw, 900));
}
function advFw() {
  if (document.getElementById("advfw")) return;
  const c = document.createElement("canvas");
  ((c.id = "advfw"), document.body.appendChild(c));
  const r = Math.min(2, devicePixelRatio || 1),
    W = (c.width = innerWidth * r),
    H = (c.height = innerHeight * r),
    x = c.getContext("2d"),
    P = [],
    col = ["255,90,90", "255,214,90", "110,230,150", "110,190,255", "255,130,220", "255,255,255"];
  let t0 = performance.now(),
    nx = 0,
    run = !0;
  const cl = () => {
    ((run = !1), c.remove());
  };
  (c.addEventListener("pointerdown", cl), (x.fillStyle = "#05081c"), x.fillRect(0, 0, W, H));
  const L = (n) => {
    if (!run) return;
    const dt = Math.min(0.05, (n - (L.p || n)) / 1e3);
    L.p = n;
    const e = n - t0;
    if (e < 9e3 && n > nx) {
      nx = n + 350 + 500 * Math.random();
      const cx = W * (0.15 + 0.7 * Math.random()),
        cy = H * (0.12 + 0.4 * Math.random()),
        k = col[(Math.random() * col.length) | 0],
        m = (50 + Math.random() * 40) | 0;
      for (let i = 0; i < m; i++) {
        const a = (6.283 * i) / m,
          s = (60 + 120 * Math.random()) * r;
        P.push({ x: cx, y: cy, vx: Math.cos(a) * s, vy: Math.sin(a) * s, l: 1, k: k });
      }
      try {
        sfx(180 + 120 * Math.random(), 0.15);
      } catch (e) {}
    }
    ((x.fillStyle = "rgba(5,8,28,.2)"), x.fillRect(0, 0, W, H));
    for (let i = P.length - 1; i >= 0; i--) {
      const p = P[i];
      ((p.vy += 70 * r * dt),
        (p.vx *= 0.992),
        (p.x += p.vx * dt),
        (p.y += p.vy * dt),
        (p.l -= 0.45 * dt),
        p.l <= 0
          ? P.splice(i, 1)
          : ((x.fillStyle = "rgba(" + p.k + "," + p.l.toFixed(2) + ")"),
            x.beginPath(),
            x.arc(p.x, p.y, 2.2 * r * p.l + 0.4, 0, 6.283),
            x.fill()));
    }
    if (e > 9500 && !P.length) return cl();
    requestAnimationFrame(L);
  };
  requestAnimationFrame(L);
}
setTimeout(
  () =>
    Object.assign(act, {
      adv: () => advScreen(),
      advD: (e) => advDo(+e),
      advX: () => {
        const e = document.getElementById("advm");
        (e && e.remove(), $(".advg") && advScreen());
      },
      advGo: (e) => {
        const t = document.getElementById("advm");
        (t && t.remove(), act.open(e));
      },
      advFw: () => advFw(),
    }),
  0,
);
setTimeout(() => {
  try {
    const f = (e) =>
      '<defs><radialGradient id="XbLB" cx="0.36" cy="0.3" r="0.85"><stop offset="0" stop-color="#ff9a9a"/><stop offset="0.5" stop-color="#e8434f"/><stop offset="1" stop-color="#7a1424"/></radialGradient><linearGradient id="XbLT" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#ffe9a0"/><stop offset="1" stop-color="#e0a030"/></linearGradient><clipPath id="XbLK"><ellipse cx="54" cy="28" rx="25" ry="20"/></clipPath></defs><g class="zvW tDart"><g class="zvTail" style="animation-duration:1s;transform-origin:100% 50%"><path d="M31 25C22 17 13 14 6 11C10 21 10 35 6 45C13 42 22 38 31 31Z" fill="url(#XbLT)" stroke="#b8741a" stroke-width=".8" stroke-linejoin="round"/><path d="M30 28C22 28 14 28 8 28M29 26C22 22 15 18 9 15M29 30C22 34 15 38 9 41" stroke="#fff6d0" stroke-width=".7" opacity=".7" fill="none"/></g><g class="zvRip" style="animation-duration:1.8s;transform-origin:50% 0"><path d="M44 44C48 52 58 53 66 48C60 46 56 44 52 42Z" fill="url(#XbLT)" stroke="#b8741a" stroke-width=".7" stroke-linejoin="round"/></g><ellipse cx="54" cy="28" rx="25" ry="20" fill="url(#XbLB)"/><g clip-path="url(#XbLK)"><path d="M38 6C32 18 32 38 38 50" stroke="url(#XbLT)" stroke-width="3.4" fill="none"/><path d="M70 6C76 18 76 38 70 50" stroke="url(#XbLT)" stroke-width="3.4" fill="none"/><path d="M29 22C45 26 63 26 79 22M29 34C45 38 63 38 79 34" stroke="#ffe9a0" stroke-width="1.2" fill="none" opacity=".8"/><g fill="#fff" opacity=".9"><circle cx="46" cy="30" r="1.3"/><circle cx="56" cy="36" r="1.1"/><circle cx="62" cy="28" r="1.3"/><circle cx="50" cy="40" r="1"/><circle cx="44" cy="22" r="1"/></g><ellipse cx="45" cy="17" rx="8" ry="4" transform="rotate(-24 45 17)" fill="#fff" opacity=".38"/></g><rect x="49.5" y="4.6" width="9" height="5.4" rx="1.3" fill="url(#XbLT)" stroke="#b8741a" stroke-width=".6"/><path d="M52 4.8C52 -.4 56 -.4 56 4.8" stroke="#e0a030" stroke-width="1.5" fill="none" stroke-linecap="round"/><path class="dqTw" style="animation-delay:.5s" d="M66 9l1 2.4 2.5.3-1.9 1.7.5 2.5-2.1-1.3-2.1 1.3.5-2.5-1.9-1.7 2.5-.3z" fill="#fff7c8"/>' +
      eyeS(68, 24, 3.9) +
      '<path d="M76.4 31Q78.6 32.6 80.4 30.6" stroke="#5a0e1c" stroke-width="1.1" fill="none" stroke-linecap="round"/></g>';
    FSH.zv_boule = f;
    FISH.push({
      id: "boule",
      n: "Poisson boule de Noël",
      p: 0,
      sh: "zv_boule",
      b: "#e8434f",
      f: "#ffe9a0",
      sz: 1.15,
      ev: 1,
      ad: 25,
    });
    AQMO.zv_boule = [80, 28];
    setTimeout(
      () =>
        DECO.forEach((d) => {
          d.fix || d.__s || ((d.w = +(1.4 * d.w).toFixed(1)), (d.__s = 1));
        }),
      0,
    );
    (DECO.push({
      id: "xfeu",
      g: "xmas",
      k: "float",
      ad: 31,
      n: "Lumière d’artifice",
      p: 0,
      x: 62,
      w: 16,
      b: 62,
      svg: '<defs><radialGradient id="DxfG" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fff6c8" stop-opacity=".9"/><stop offset=".5" stop-color="#ffb84a" stop-opacity=".35"/><stop offset="1" stop-color="#ffb84a" stop-opacity="0"/></radialGradient></defs><circle class="dqGlow" cx="50" cy="58" r="42" fill="url(#DxfG)"/><path d="M50.0 49.0L50.0 28.0" stroke="#ff5a5a" stroke-width="2.4" stroke-linecap="round" opacity=".92"/><circle class="dqTw" style="animation-delay:0.00s" cx="50.0" cy="23.0" r="2.3" fill="#ff5a5a"/><path d="M53.4 49.7L58.4 37.7" stroke="#ffd25a" stroke-width="2.4" stroke-linecap="round" opacity=".92"/><circle class="dqTw" style="animation-delay:0.15s" cx="60.7" cy="32.1" r="2.3" fill="#ffd25a"/><path d="M56.4 51.6L71.2 36.8" stroke="#6ae89a" stroke-width="2.4" stroke-linecap="round" opacity=".92"/><circle class="dqTw" style="animation-delay:0.30s" cx="74.7" cy="33.3" r="2.3" fill="#6ae89a"/><path d="M58.3 54.6L70.3 49.6" stroke="#6ab8ff" stroke-width="2.4" stroke-linecap="round" opacity=".92"/><circle class="dqTw" style="animation-delay:0.45s" cx="75.9" cy="47.3" r="2.3" fill="#6ab8ff"/><path d="M59.0 58.0L80.0 58.0" stroke="#ff8ad8" stroke-width="2.4" stroke-linecap="round" opacity=".92"/><circle class="dqTw" style="animation-delay:0.60s" cx="85.0" cy="58.0" r="2.3" fill="#ff8ad8"/><path d="M58.3 61.4L70.3 66.4" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" opacity=".92"/><circle class="dqTw" style="animation-delay:0.75s" cx="75.9" cy="68.7" r="2.3" fill="#ffffff"/><path d="M56.4 64.4L71.2 79.2" stroke="#ff5a5a" stroke-width="2.4" stroke-linecap="round" opacity=".92"/><circle class="dqTw" style="animation-delay:0.90s" cx="74.7" cy="82.7" r="2.3" fill="#ff5a5a"/><path d="M53.4 66.3L58.4 78.3" stroke="#ffd25a" stroke-width="2.4" stroke-linecap="round" opacity=".92"/><circle class="dqTw" style="animation-delay:1.05s" cx="60.7" cy="83.9" r="2.3" fill="#ffd25a"/><path d="M50.0 67.0L50.0 88.0" stroke="#6ae89a" stroke-width="2.4" stroke-linecap="round" opacity=".92"/><circle class="dqTw" style="animation-delay:1.20s" cx="50.0" cy="93.0" r="2.3" fill="#6ae89a"/><path d="M46.6 66.3L41.6 78.3" stroke="#6ab8ff" stroke-width="2.4" stroke-linecap="round" opacity=".92"/><circle class="dqTw" style="animation-delay:1.35s" cx="39.3" cy="83.9" r="2.3" fill="#6ab8ff"/><path d="M43.6 64.4L28.8 79.2" stroke="#ff8ad8" stroke-width="2.4" stroke-linecap="round" opacity=".92"/><circle class="dqTw" style="animation-delay:1.50s" cx="25.3" cy="82.7" r="2.3" fill="#ff8ad8"/><path d="M41.7 61.4L29.7 66.4" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" opacity=".92"/><circle class="dqTw" style="animation-delay:1.65s" cx="24.1" cy="68.7" r="2.3" fill="#ffffff"/><path d="M41.0 58.0L20.0 58.0" stroke="#ff5a5a" stroke-width="2.4" stroke-linecap="round" opacity=".92"/><circle class="dqTw" style="animation-delay:1.80s" cx="15.0" cy="58.0" r="2.3" fill="#ff5a5a"/><path d="M41.7 54.6L29.7 49.6" stroke="#ffd25a" stroke-width="2.4" stroke-linecap="round" opacity=".92"/><circle class="dqTw" style="animation-delay:1.95s" cx="24.1" cy="47.3" r="2.3" fill="#ffd25a"/><path d="M43.6 51.6L28.8 36.8" stroke="#6ae89a" stroke-width="2.4" stroke-linecap="round" opacity=".92"/><circle class="dqTw" style="animation-delay:2.10s" cx="25.3" cy="33.3" r="2.3" fill="#6ae89a"/><path d="M46.6 49.7L41.6 37.7" stroke="#6ab8ff" stroke-width="2.4" stroke-linecap="round" opacity=".92"/><circle class="dqTw" style="animation-delay:2.25s" cx="39.3" cy="32.1" r="2.3" fill="#6ab8ff"/><circle cx="50" cy="58" r="6.2" fill="#fffbe0"/>',
    }),
      DECO.push({
        id: "xcouronne",
        g: "xmas",
        ad: 19,
        n: "Couronne de Noël",
        p: 0,
        x: 20,
        w: 14,
        svg: '<path d="M32 100L44 62M68 100L56 62" stroke="#7a5230" stroke-width="3.4" stroke-linecap="round"/><circle cx="50" cy="42" r="26" fill="none" stroke="#17603a" stroke-width="11"/><ellipse cx="76.0" cy="42.0" rx="6.4" ry="2.8" transform="rotate(76 76.0 42.0)" fill="#1f7a46"/><ellipse cx="74.9" cy="49.3" rx="6.4" ry="2.8" transform="rotate(120 74.9 49.3)" fill="#3aa860"/><ellipse cx="71.9" cy="56.1" rx="6.4" ry="2.8" transform="rotate(109 71.9 56.1)" fill="#1f7a46"/><ellipse cx="67.0" cy="61.6" rx="6.4" ry="2.8" transform="rotate(153 67.0 61.6)" fill="#3aa860"/><ellipse cx="60.8" cy="65.7" rx="6.4" ry="2.8" transform="rotate(141 60.8 65.7)" fill="#1f7a46"/><ellipse cx="53.7" cy="67.7" rx="6.4" ry="2.8" transform="rotate(186 53.7 67.7)" fill="#3aa860"/><ellipse cx="46.3" cy="67.7" rx="6.4" ry="2.8" transform="rotate(174 46.3 67.7)" fill="#1f7a46"/><ellipse cx="39.2" cy="65.7" rx="6.4" ry="2.8" transform="rotate(219 39.2 65.7)" fill="#3aa860"/><ellipse cx="33.0" cy="61.6" rx="6.4" ry="2.8" transform="rotate(207 33.0 61.6)" fill="#1f7a46"/><ellipse cx="28.1" cy="56.1" rx="6.4" ry="2.8" transform="rotate(251 28.1 56.1)" fill="#3aa860"/><ellipse cx="25.1" cy="49.3" rx="6.4" ry="2.8" transform="rotate(240 25.1 49.3)" fill="#1f7a46"/><ellipse cx="24.0" cy="42.0" rx="6.4" ry="2.8" transform="rotate(284 24.0 42.0)" fill="#3aa860"/><ellipse cx="25.1" cy="34.7" rx="6.4" ry="2.8" transform="rotate(272 25.1 34.7)" fill="#1f7a46"/><ellipse cx="28.1" cy="27.9" rx="6.4" ry="2.8" transform="rotate(317 28.1 27.9)" fill="#3aa860"/><ellipse cx="33.0" cy="22.4" rx="6.4" ry="2.8" transform="rotate(305 33.0 22.4)" fill="#1f7a46"/><ellipse cx="39.2" cy="18.3" rx="6.4" ry="2.8" transform="rotate(349 39.2 18.3)" fill="#3aa860"/><ellipse cx="46.3" cy="16.3" rx="6.4" ry="2.8" transform="rotate(338 46.3 16.3)" fill="#1f7a46"/><ellipse cx="53.7" cy="16.3" rx="6.4" ry="2.8" transform="rotate(382 53.7 16.3)" fill="#3aa860"/><ellipse cx="60.8" cy="18.3" rx="6.4" ry="2.8" transform="rotate(371 60.8 18.3)" fill="#1f7a46"/><ellipse cx="67.0" cy="22.4" rx="6.4" ry="2.8" transform="rotate(415 67.0 22.4)" fill="#3aa860"/><ellipse cx="71.9" cy="27.9" rx="6.4" ry="2.8" transform="rotate(403 71.9 27.9)" fill="#1f7a46"/><ellipse cx="74.9" cy="34.7" rx="6.4" ry="2.8" transform="rotate(448 74.9 34.7)" fill="#3aa860"/><circle cx="74.8" cy="49.7" r="2.3" fill="#e8283a"/><circle cx="59.5" cy="66.2" r="2.3" fill="#e8283a"/><circle cx="37.0" cy="64.5" r="2.3" fill="#e8283a"/><circle cx="24.3" cy="45.9" r="2.3" fill="#e8283a"/><circle cx="31.0" cy="24.3" r="2.3" fill="#e8283a"/><circle cx="52.0" cy="16.1" r="2.3" fill="#e8283a"/><circle cx="71.5" cy="27.4" r="2.3" fill="#e8283a"/><circle class="dqTw" style="animation-delay:0.00s" cx="75.5" cy="47.2" r="1.7" fill="#fff6a8"/><circle class="dqTw" style="animation-delay:0.25s" cx="64.4" cy="63.7" r="1.7" fill="#ffb0b0"/><circle class="dqTw" style="animation-delay:0.50s" cx="44.8" cy="67.5" r="1.7" fill="#b8f0ff"/><circle class="dqTw" style="animation-delay:0.75s" cx="28.3" cy="56.4" r="1.7" fill="#fff6a8"/><circle class="dqTw" style="animation-delay:1.00s" cx="24.5" cy="36.8" r="1.7" fill="#fff6a8"/><circle class="dqTw" style="animation-delay:1.25s" cx="35.6" cy="20.3" r="1.7" fill="#ffb0b0"/><circle class="dqTw" style="animation-delay:1.50s" cx="55.2" cy="16.5" r="1.7" fill="#b8f0ff"/><circle class="dqTw" style="animation-delay:1.75s" cx="71.7" cy="27.6" r="1.7" fill="#fff6a8"/><path d="M50 68C38 58 33 70 43 75C47 76.4 49.5 73 50 68ZM50 68C62 58 67 70 57 75C53 76.4 50.5 73 50 68Z" fill="#d8283a"/><path d="M48 70L42 84M52 70L58 84" stroke="#b81e2e" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="69" r="3.2" fill="#f04a58"/>',
      }));
  } catch (e) {}
}, 0);
function aqSnd(k) {
  try {
    if (!AC || !mg || !prefs().sfx) return;
    "suspended" === AC.state && AC.resume();
    const n = AC.currentTime,
      N = (d) => {
        const b = AC.createBuffer(1, Math.ceil(AC.sampleRate * d), AC.sampleRate),
          a = b.getChannelData(0);
        for (let i = 0; i < a.length; i++) a[i] = 2 * Math.random() - 1;
        const s = AC.createBufferSource();
        return ((s.buffer = b), s);
      },
      G = (v, t0, d) => {
        const g = AC.createGain();
        return (
          g.gain.setValueAtTime(v, t0),
          g.gain.exponentialRampToValueAtTime(0.001, t0 + d),
          g.connect(mg),
          g
        );
      };
    if ("up" === k) {
      const o = AC.createOscillator(),
        g = G(0.035, n, 1.1);
      ((o.type = "sine"),
        o.frequency.setValueAtTime(350, n),
        o.frequency.exponentialRampToValueAtTime(1900, n + 1.05),
        o.connect(g),
        o.start(n),
        o.stop(n + 1.15));
      const r = N(1.1),
        f = AC.createBiquadFilter();
      ((f.type = "bandpass"),
        (f.frequency.value = 3000),
        r.connect(f),
        f.connect(G(0.045, n, 1.1)),
        r.start(n));
    } else {
      const r = N(1.4),
        f = AC.createBiquadFilter();
      ((f.type = "lowpass"),
        f.frequency.setValueAtTime(5000, n),
        f.frequency.exponentialRampToValueAtTime(300, n + 1.2),
        r.connect(f),
        f.connect(G(0.2, n, 1.3)),
        r.start(n));
      const o = AC.createOscillator();
      (o.frequency.setValueAtTime(110, n),
        o.frequency.exponentialRampToValueAtTime(35, n + 0.5),
        o.connect(G(0.22, n, 0.6)),
        o.start(n),
        o.stop(n + 0.7));
      for (let i = 0; i < 26; i++) {
        const t = n + 0.25 + Math.random() * 1.7,
          c = N(0.05),
          h = AC.createBiquadFilter();
        ((h.type = "highpass"),
          (h.frequency.value = 2500 + 3e3 * Math.random()),
          c.connect(h),
          h.connect(G(0.035 + 0.045 * Math.random(), t, 0.05)),
          c.start(t));
      }
    }
  } catch (e) {}
}
function aqFw() {
  const T = document.getElementById("tank");
  if (!T || document.getElementById("aqfw")) return;
  const c = document.createElement("canvas");
  c.id = "aqfw";
  c.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:40";
  T.appendChild(c);
  const r = Math.min(2, devicePixelRatio || 1),
    W = (c.width = Math.max(10, T.clientWidth * r)),
    H = (c.height = Math.max(10, T.clientHeight * r)),
    x = c.getContext("2d"),
    o = document.createElement("canvas"),
    fs = Math.min(0.36 * W, 0.2 * H * 1.6);
  ((o.width = W), (o.height = Math.ceil(1.3 * fs)));
  const q = o.getContext("2d");
  ((q.font = "900 " + fs + "px Inter,Arial,sans-serif"),
    (q.textAlign = "center"),
    (q.textBaseline = "middle"),
    (q.fillStyle = "#fff"),
    q.fillText("2027", W / 2, o.height / 2));
  const D = q.getImageData(0, 0, W, o.height).data,
    PT = [],
    st = Math.max(4, Math.round(fs / 22));
  for (let y = 0; y < o.height; y += st)
    for (let X = 0; X < W; X += st) D[4 * (y * W + X) + 3] > 128 && PT.push([X - W / 2, y - o.height / 2]);
  const bx = W * (0.38 + 0.24 * Math.random()),
    by = H * 0.34,
    P = PT.map((p) => ({
      tx: p[0],
      ty: p[1],
      k: ["255,214,90", "255,255,255", "255,138,200", "120,210,255"][(Math.random() * 4) | 0],
      ph: 6.28 * Math.random(),
    })),
    S = [];
  for (let i = 0; i < 46; i++) {
    const a = (6.283 * i) / 46,
      s = (0.25 + 0.55 * Math.random()) * H * 0.5;
    S.push({
      x: 0,
      y: 0,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s,
      k: ["255,200,90", "255,140,140", "140,220,255"][i % 3],
    });
  }
  const t0 = performance.now(),
    RT = 1100,
    BT = 1000,
    HT = 1900,
    FT = 1200;
  aqSnd("up");
  let ex = 0;
  const L = (n) => {
    const e = n - t0;
    if (e > RT + BT + HT + FT || !c.isConnected) return void c.remove();
    x.clearRect(0, 0, W, H);
    if (e < RT) {
      const u = e / RT,
        yy = H - (H - by) * (1 - Math.pow(1 - u, 2)),
        xx = bx + Math.sin(u * 9) * W * 0.012;
      for (let i = 0; i < 14; i++) {
        const f = Math.max(0, u - i * 0.012),
          y2 = H - (H - by) * (1 - Math.pow(1 - f, 2));
        ((x.fillStyle = "rgba(255," + (200 - 8 * i) + ",120," + (0.7 - 0.05 * i).toFixed(2) + ")"),
          x.beginPath(),
          x.arc(xx + (Math.random() - 0.5) * 3 * r, y2, (3.4 - 0.18 * i) * r, 0, 6.283),
          x.fill());
      }
      ((x.fillStyle = "#fff"), x.beginPath(), x.arc(xx, yy, 3.6 * r, 0, 6.283), x.fill());
    } else {
      ex || ((ex = 1), aqSnd("bang"));
      const u = Math.min(1, (e - RT) / BT),
        E = 1 - Math.pow(1 - u, 3),
        f = e < RT + BT + HT ? 1 : Math.max(0, 1 - (e - RT - BT - HT) / FT),
        dr = e > RT + BT + HT ? ((e - RT - BT - HT) / FT) * H * 0.05 : 0;
      if (u < 0.6) {
        ((x.fillStyle = "rgba(255,244,200," + (0.9 - 1.4 * u).toFixed(2) + ")"),
          x.beginPath(),
          x.arc(bx, by, (10 + 90 * u) * r, 0, 6.283),
          x.fill());
      }
      for (const s of S) {
        const d = Math.min(1, (e - RT) / 900);
        ((x.fillStyle = "rgba(" + s.k + "," + (0.9 * (1 - d) * f).toFixed(2) + ")"),
          x.beginPath(),
          x.arc(bx + s.vx * d, by + s.vy * d + d * d * H * 0.1, 2.2 * r * (1 - 0.6 * d), 0, 6.283),
          x.fill());
      }
      for (const p of P) {
        const tw = 0.75 + 0.25 * Math.sin(p.ph + e / 110);
        ((x.fillStyle = "rgba(" + p.k + "," + (f * tw).toFixed(2) + ")"),
          x.beginPath(),
          x.arc(bx + p.tx * E, by + p.ty * E + dr, Math.max(1.4, st * 0.34) * r * (0.5 + 0.5 * E), 0, 6.283),
          x.fill());
      }
    }
    requestAnimationFrame(L);
  };
  requestAnimationFrame(L);
}
function resume() {
  const e = st.get("last", null);
  if (!e || e.daily || "melange" === e.g || (!G.some((t) => t.id === e.g) && "ana" !== e.g)) return;
  const t = isX(e.g, e.lv);
  return t === sxOn()
    ? e.done
      ? (t ? e.lv < nl(e.g) + 10 - 1 : e.lv < nl(e.g) - 1)
        ? start(e.g, !1, e.lv + 1)
        : hub(e.g)
      : void start(e.g, !1, e.lv, e.s)
    : void 0;
}
((act.skip = () => {
  const e = $("#skw");
  e &&
    (e.innerHTML =
      '<span>Passer ce niveau pour 1 🫧, sans récompense ? Tu pourras y revenir plus tard.</span><div><button class="skp y" data-a="skipy">Passer</button><button class="skp" data-a="skipn">Rester</button></div>');
}),
  (act.skipn = () => {
    const e = $("#skw");
    e && (e.innerHTML = "");
  }),
  (act.skipy = () => {
    const e = cur,
      t = lv;
    e &&
      !daily &&
      spend(1) &&
      (1e9 <= nl(e) && st.set("ski:" + e, st.get("ski:" + e, 0) + 1),
      st.set("k:" + ckey(e).slice(2) + ":" + t, !0),
      st.set("last", { g: e, daily: !1, lv: t, date: today, done: 1 }),
      (isX(e, t) ? t < nl(e) + 10 - 1 : t < nl(e) - 1)
        ? (start(e, !1, t + 1), msg("Niveau passé, sans bulles : tu pourras y revenir."))
        : hub(e));
  }));
const XMX = 30;
const XDU = 10;
const SDU = 10;
const SMX = 100;
const SMAP = 10;
const SH = 1500;
const SPRE = 440;
const SKD = [
  "#d4f6f4",
  "#c2eff2",
  "#b0e6f0",
  "#a2dcee",
  "#96d0ec",
  "#8cc4ea",
  "#85b8e6",
  "#7eaadf",
  "#789cd8",
  "#728ed0",
  "#6c80c6",
];
const SKN = [
  "#0f3a5e",
  "#0d3358",
  "#0b2c52",
  "#0a264c",
  "#082046",
  "#071b40",
  "#06173a",
  "#051334",
  "#040f2e",
  "#030c28",
  "#020a22",
];
const CHP = [
  {
    "t": "Le jardin de corail",
    "s": "Surface",
    "L": ["#fff0dc", "#f4cfa6"],
    "e": "#fff3e2",
    "p": ["#fffaf2", "#f7d3b0", "#ffffff"],
    "c": ["#ff9db0", "#e5607f"],
    "r": ["#ff9a7a", "#e0583f"],
    "k": ["#e5c9c2", "#faece8"],
    "fl": "#ffb0c4",
    "d": {
      "coral": 5,
      "anemone": 3,
      "shell": 3,
      "seagrass": 3,
      "starfish": 2,
      "stones": 2,
      "sand": 2,
      "pearl": 1,
      "bubbles": 1,
      "fish": 1,
    },
  },
  {
    "t": "La mer de courant",
    "s": "Courants",
    "L": ["#d9f7ef", "#9bdccb"],
    "e": "#ecfbf5",
    "p": ["#f3fffb", "#a8e4d4", "#ffffff"],
    "c": ["#6fe0bd", "#2fae8f"],
    "r": ["#ffb36b", "#e68a3e"],
    "k": ["#b9d2d4", "#e6f2f3"],
    "d": {
      "kelp": 4,
      "seagrass": 4,
      "shell": 2,
      "stones": 2,
      "rock": 1,
      "sand": 2,
      "starfish": 1,
      "fish": 1,
      "bubbles": 1,
    },
  },
  {
    "t": "La forêt de méduses",
    "s": "Méduses",
    "L": ["#e8e0fb", "#b9a8ee"],
    "e": "#f1ecff",
    "p": ["#f7f3ff", "#c8b8f2", "#ffffff"],
    "c": ["#c7a6ff", "#8a62e0"],
    "r": ["#ff9fd0", "#d85ea8"],
    "k": ["#bdb4dd", "#e8e3f8"],
    "d": {
      "kelp": 3,
      "anemone": 3,
      "coral": 2,
      "crystal": 2,
      "seagrass": 2,
      "jelly": 6,
      "bubbles": 1,
      "lanternfish": 1,
    },
  },
  {
    "t": "Les grottes de glace",
    "s": "Glace",
    "L": ["#f4fcff", "#c9e6f6"],
    "e": "#eef9ff",
    "p": ["#ffffff", "#bfe0f4", "#ffffff"],
    "c": ["#9fe8f2", "#4fb4d0"],
    "r": ["#e8f6ff", "#a9d3ec"],
    "k": ["#b4cbe0", "#e8f2fb"],
    "d": {
      "crystal": 5,
      "stones": 3,
      "rock": 2,
      "starfish": 2,
      "shell": 1,
      "sand": 1,
      "bubbles": 2,
      "fish": 1,
      "jelly": 1,
    },
  },
  {
    "t": "Les dunes de sable blanc",
    "s": "Sable",
    "L": ["#fff8e6", "#ecdcb6"],
    "e": "#fffaf0",
    "p": ["#fffdf6", "#efdcb4", "#ffffff"],
    "c": ["#8fe0c0", "#4fb895"],
    "r": ["#ff9db0", "#df6d86"],
    "k": ["#d9cfc0", "#f6f0e6"],
    "d": {
      "sand": 5,
      "shell": 3,
      "starfish": 3,
      "seagrass": 2,
      "stones": 2,
      "rock": 1,
      "pearl": 2,
      "fish": 1,
      "bubbles": 1,
    },
  },
  {
    "t": "La lagune des reflets",
    "s": "Reflets",
    "L": ["#d6f4f6", "#8fd6dc"],
    "e": "#eaf9fa",
    "p": ["#f4feff", "#a6e0e6", "#ffffff"],
    "c": ["#7fe3c8", "#33b8a0"],
    "r": ["#ff9d99", "#e0606e"],
    "k": ["#bcd2d8", "#e8f2f4"],
    "fl": "#ffd1e3",
    "d": {
      "lotus": 3,
      "coral": 2,
      "anemone": 2,
      "shell": 2,
      "seagrass": 2,
      "pearl": 1,
      "lanternfish": 3,
      "fish": 1,
      "bubbles": 1,
    },
  },
  {
    "t": "Le golfe d’encre",
    "s": "Encre",
    "L": ["#d5d8f2", "#8e93cc"],
    "e": "#e6e8fa",
    "p": ["#eceefc", "#a6abe0", "#ffffff"],
    "c": ["#7078c8", "#3f4592"],
    "r": ["#9a8cf0", "#6a58cf"],
    "k": ["#7e84b8", "#b8bde6"],
    "d": {
      "rock": 3,
      "kelp": 3,
      "stones": 2,
      "crystal": 2,
      "seagrass": 1,
      "ink": 5,
      "jelly": 2,
      "bubbles": 1,
      "lanternfish": 2,
    },
  },
  {
    "t": "L’archipel de corail",
    "s": "Archipel",
    "L": ["#ffe8d6", "#f6b9a0"],
    "e": "#fff2e8",
    "p": ["#fff9f2", "#f6c8ac", "#ffffff"],
    "c": ["#ff8fb0", "#e0527e"],
    "r": ["#ffb86b", "#f08a3a"],
    "k": ["#e8c8c0", "#faeae6"],
    "d": {
      "coral": 6,
      "anemone": 3,
      "shell": 3,
      "starfish": 3,
      "pearl": 2,
      "stones": 1,
      "seagrass": 2,
      "fish": 1,
      "bubbles": 1,
    },
  },
  {
    "t": "La plaine des algues dansantes",
    "s": "Algues",
    "L": ["#dff6dc", "#a4dc9f"],
    "e": "#f0fbe9",
    "p": ["#f7fff2", "#bfe6a8", "#ffffff"],
    "c": ["#7fe08a", "#35aa5a"],
    "r": ["#ffd36b", "#e8a23a"],
    "k": ["#bcd2bc", "#e6f2e6"],
    "d": {
      "kelp": 7,
      "seagrass": 5,
      "anemone": 1,
      "shell": 1,
      "stones": 1,
      "fish": 1,
      "bubbles": 2,
      "jelly": 1,
    },
  },
  {
    "t": "La fosse des aurores",
    "s": "Aurores",
    "L": ["#d8e3ff", "#9aaaf0"],
    "e": "#e9eeff",
    "p": ["#f2f5ff", "#b3c4f6", "#ffffff"],
    "c": ["#80dad2", "#40aab2"],
    "r": ["#d0a8ff", "#9a68e0"],
    "k": ["#8f9fd8", "#c6d2f6"],
    "d": {
      "crystal": 5,
      "rock": 2,
      "stones": 2,
      "pearl": 2,
      "anemone": 1,
      "jelly": 4,
      "lanternfish": 4,
      "bubbles": 1,
    },
  },
];
const BOSS = [
  {
    "n": "le Gardien de la Hâte",
    "i": "Il murmure : « Vite, vite ! » Refais la suite de perles qu’il dessine, sans te presser.",
  },
  {
    "n": "le Gardien du Doute",
    "i": "Il souffle : « Et si tu te trompais ? » Refais la suite de perles qu’il dessine, doucement.",
  },
  {
    "n": "le Gardien du Regret",
    "i": "Il traîne une coquille pleine de « si seulement ». Refais la suite de perles qu’il dessine.",
  },
  {
    "n": "le Gardien de la Colère",
    "i": "Il rougeoie comme un volcan sous-marin. Refais la suite de perles qu’il dessine, au calme.",
  },
  {
    "n": "le Gardien de la Peur",
    "i": "Il a des silhouettes monstrueuses plein les poches. Refais la suite de perles qu’il dessine.",
  },
  {
    "n": "le Gardien de l’Envie",
    "i": "Il montre les lueurs des autres. Refais la suite de perles qu’il dessine.",
  },
  {
    "n": "le Gardien de la Honte",
    "i": "Il souffle un nuage d’encre autour de toi. Refais la suite de perles qu’il dessine.",
  },
  {
    "n": "le Gardien de la Solitude",
    "i": "Il tend une perle-miroir. Refais la suite de perles qu’il dessine, en bonne compagnie de toi-même.",
  },
  {
    "n": "le Gardien du Découragement",
    "i": "Il tire une lourde ancre derrière lui. Refais la suite de perles qu’il dessine, sans te décourager.",
  },
  {
    "n": "le Gardien du Vacarme",
    "i": "Il porte tout le grondement des courants profonds. Refais la suite de perles qu’il dessine.",
  },
];
const STORY = {
  10: "Zeni se détend sur des coraux doux comme des pétales, bercé par le son des vagues de la surface. Il y affronte le Gardien de la Hâte, qui se dissout en trois respirations. « Respire profondément, c’est le seul moment où tu es vraiment présent », lui dit le gardien.",
  20: "Des courants tièdes portent Zeni d’algues en algues, et il apprend à avancer sans se presser — porté par l’eau plutôt que de lutter contre le courant. Mais le Gardien du Doute surgit. « Et si tu t’étais trompé de courant ? Et si tout ce chemin ne menait nulle part ? » Zeni baisse les yeux vers son étoile, qui scintille toujours, exactement en dessous de lui.",
  30: "Des méduses scintillantes montent et redescendent lentement, comme des lanternes qui volent au rythme du vent. Zeni apprend à lâcher prise comme le sable qui s’écoule sous ses pieds. Le Gardien du Regret traîne une coquille pleine de « si seulement », qui se vide toute seule dans le courant.",
  40: "Sous la banquise, l’eau est si calme qu’il entend son propre cœur. Le Gardien de la Colère jaillit des profondeurs, rouge comme un volcan sous-marin ; il gronde, il bouillonne, puis sa fureur monte en petites bulles d’air chaud — et, une à une, elles s’éteignent au contact de l’eau froide, car la colère n’est qu’une bulle, le calme se trouve toujours autour. Il suffit de bien chercher.",
  50: "Au fond, les vagues de sable imitent les nuages dans le ciel. Il n’a rien à prouver, et le silence devient une grande maison remplie d’eau douce. Le Gardien de la Peur a des silhouettes monstrueuses plein les poches — ce sont des algues accrochées à un rocher.",
  60: "Une lueur de poisson-lanterne dérive, et une carpe koï trace des cercles à la surface. Le Gardien de l’Envie montre les lueurs des autres, mais la sienne est petite, tiède et à lui.",
  70: "Une brume sombre plane au-dessus des récifs, et Zeni se demande ce qu’on pense de lui lorsqu’il n’est pas là. Le Gardien de la Honte souffle un nuage d’encre autour de lui… mais dans l’eau claire, l’encre se dissout toute seule : il n’y avait rien à cacher, rien à pardonner. Le petit bonhomme est parfait comme il est, peu importe ce que les autres pensent de lui dans son dos.",
  80: "Des crêtes de corail illuminées relient des récifs qui ne se ressemblent pas. Le Gardien de la Solitude lui tend une perle-miroir. En la regardant, il ne peut qu’admirer la belle personne qu’il voit dans le reflet. « Il n’y a pas deux petits bonhommes comme toi. N’oublie jamais à quel point tu es unique », lui dit le Gardien.",
  90: "Sous la lumière vacillante, Zeni s’arrête, trop fatigué d’avancer. Le Gardien du Découragement tire une lourde ancre derrière lui ; quand Zeni pose simplement la main dessus et respire, elle se met à flotter comme une bouée — même le poids le plus lourd veut remonter vers la lumière.",
  100: "L’eau y est claire comme du verre, et les rayons de lune percent jusqu’au fond — il est presque arrivé. Le dernier gardien, celui du Vacarme, porte tout le grondement des courants profonds, et il devient murmure, puis silence — comme une eau redevenue calme. C’est là que Zeni regarde enfin son étoile : une petite étoile de mer, qui brille doucement, heureuse d’être arrivée chez elle.",
};
const SPRO =
  "Une nuit, une étoile filante a traversé le ciel et a plongé dans un bassin de marée éclairé par la lune, laissant derrière elle une traînée d’écume argentée. Un petit bonhomme nommé Zeni monte sur sa pointe lumineuse, le cœur un peu lourd : il cherche la paix intérieure. L’étoile ne se laisse porter par le courant que si on lui offre une perle : dix fragments de nacre en font une, et chaque niveau terminé dans un jeu en fait tomber autant que de bulles gagnées. Et l’on ne découvrira qu’à la fin que cette étoile tombée du ciel était, en vérité, une étoile de mer.";
const sCh = (e) => (e < 1 ? 0 : Math.min(CHP.length - 1, Math.floor((e - 1) / 10)));
const styClean = (e) => {
  if (!e || "object" != typeof e) return null;
  const t = (e, t) => Math.max(0, Math.min(t, Math.floor(+e) || 0)),
    a = t(e.p, SMX),
    s = 10 * Math.floor(Math.min(a, t(e.bw, SMX)) / 10),
    n = t(e.xp, 40);
  return {
    e: Math.max(t(e.e, 1e6), 10 * a),
    p: a,
    bw: s,
    v: e.v ? 1 : 0,
    xe: Math.max(t(e.xe, 1e6), 10 * n),
    xp: n,
  };
};
const styRead = () => {
  const e = styClean(st.get("sty", null));
  return e
    ? (e.v || ((e.e += 8 * e.p), (e.v = 1), st.set("sty", styClean(e))), e)
    : { e: 0, p: 0, bw: 0, v: 1 };
};
const styWrite = (e) => {
  st.set("sty", styClean(e));
  try {
    skyChap();
  } catch (e) {}
};
const styDust = (e) => (UNL() ? 1e6 : e.e - 10 * e.p);
const styGate = (e) => e.p > 0 && e.p % 10 == 0 && e.bw < e.p;
function styMerge(e, t) {
  const a = [e]
    .concat(t || [])
    .map(styClean)
    .filter(Boolean);
  if (!a.length) return null;
  const s = (e) => Math.max(...a.map((t) => t[e]));
  return styClean({ e: s("e"), p: s("p"), bw: s("bw"), v: s("v"), xe: s("xe"), xp: s("xp") });
}
const styGain = (e = 1) => {
  const t = styRead();
  return ((t.e += Math.max(1, 0 | e)), styWrite(t), styDust(t));
};
const scHex = (e) => (
  3 === (e = e.replace("#", "")).length && (e = e.replace(/./g, "$&$&")),
  [0, 2, 4].map((t) => parseInt(e.substr(t, 2), 16))
);
const scMix = (e, t, a) => {
  const s = scHex(e),
    n = scHex(t);
  return (
    "#" +
    s
      .map((e, t) =>
        Math.round(e + (n[t] - e) * a)
          .toString(16)
          .padStart(2, "0"),
      )
      .join("")
  );
};
const scLt = (e, t) => scMix(e, "#ffffff", t);
const scDk = (e, t) => scMix(e, "#2a2250", t);
const SHL = (e, t, a, s, n = -28, o = 0.34) =>
  `<ellipse cx="${e}" cy="${t}" rx="${a}" ry="${s}" fill="#fff" opacity="${o}" transform="rotate(${n} ${e} ${t})"/>`;
const SFW = (e, t, a, s = 1) =>
  `<g transform="translate(${e} ${t}) scale(${s})">${[0, 72, 144, 216, 288].map((e) => `<circle cx="${(3.6 * Math.cos((e * Math.PI) / 180)).toFixed(1)}" cy="${(3.6 * Math.sin((e * Math.PI) / 180)).toFixed(1)}" r="2.7" fill="${a}"/>`).join("")}<circle r="2.2" fill="#ffd54a"/></g>`;
const STIER = (e, t, a, s) =>
  `<path d="M0 ${a - e}L${t} ${a}H${-t}Z" fill="${s}" stroke="${s}" stroke-width="9" stroke-linejoin="round"/>`;
const SSNOW = (e, t, a) =>
  `<path d="M0 ${a - e}L${0.55 * t} ${a - 0.45 * e}Q0 ${a - 0.3 * e} ${0.55 * -t} ${a - 0.45 * e}Z" fill="#fff" stroke="#fff" stroke-width="6" stroke-linejoin="round"/>`;
const sPal = (e, t) => {
  const a = CHP[e];
  if (!t) return a;
  const NV = window.sNT ? sNT[e % sNT.length] : ["#232a68", "#1d3a7c", "#3a3a8a", "#d6dcff"],
    s = (e, t, a = NV[0]) => scMix(e, a, t);
  return {
    ...a,
    L: a.L.map((e) => s(e, 0.58)),
    e: s(a.e, 0.55),
    p: [NV[3], scMix(NV[3], NV[2], 0.45), "#ffffff"],
    c: a.c.map((e) => s(e, 0.5, NV[1])),
    r: a.r.map((e) => s(e, 0.4, NV[2])),
    k: a.k.map((e) => s(e, 0.5)),
    night: 1,
  };
};
const qg = (a, b, x = 0, y = 0, X = 0, Y = 1) => {
  const i = "q" + (a + b).replace(/#/g, "") + x + y + X + Y;
  return [
    `<linearGradient id="${i}" x1="${x}" y1="${y}" x2="${X}" y2="${Y}"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`,
    `url(#${i})`,
  ];
};
const qr = (a, b, o = 1, p = 1) => {
  const i = "r" + (a + b).replace(/#/g, "") + Math.round(10 * o) + Math.round(10 * p);
  return [
    `<radialGradient id="${i}" cx=".4" cy=".35" r=".75"><stop offset="0" stop-color="${a}" stop-opacity="${o}"/><stop offset="1" stop-color="${b}" stop-opacity="${p}"/></radialGradient>`,
    `url(#${i})`,
  ];
};
const qd = (n, v, i = 0, x = "") =>
  `style="${x}animation-duration:${(n + ((v + i) % 3) * 1.1).toFixed(1)}s;animation-delay:-${(2.3 * v + 1.7 * i) % 7}s"`.replace(
    /(\d)\.\d{6,}/g,
    "$1",
  );
const qn = (e, c) => (e.night ? scMix(c, "#1d3a7c", 0.35) : c);
const qF = (e, v) => {
  const P = [
      ["#ffa24a", "#f0602a", "#ff8a3a"],
      ["#6cc0ff", "#2f6fe0", "#ffd84a"],
      ["#ffe589", "#ffae45", "#ff8fb0"],
    ][v % 3].map((c) => qn(e, c)),
    [d, f] = qg(P[0], P[1]),
    w =
      v % 3 == 0
        ? '<path d="M2 -9.5Q6 0 2 9.5L5.5 9.2Q9.5 0 5.5 -9.2Z" fill="#fff"/><path d="M11 -8Q14 0 11 8L13 7Q15.5 0 13 -7Z" fill="#fff"/>'
        : v % 3 == 1
          ? '<path d="M-3 -10Q2 0 -3 10L2 10Q7 0 2 -10Z" fill="#1d3a8a" opacity=".5"/>'
          : '<path d="M9 -9Q12.5 0 9 9L12 8.4Q15 0 12 -8.4Z" fill="#2a2a4a" opacity=".55"/>';
  return `<defs>${d}</defs><g class="qtail"><path d="M-13 0Q-22 -9 -29 -11Q-25 0 -29 11Q-22 9 -13 0Z" fill="${P[2]}"/></g><path d="M-5 -9Q3 -20 12 -8Z" fill="${P[2]}"/><path d="M-3 9Q0 15 6 9Z" fill="${P[2]}" opacity=".8"/><path d="M-15 0C-12 -9 -2 -12 8 -9C15 -7 19 -3 20 0C19 3 15 7 8 9C-2 12 -12 9 -15 0Z" fill="${f}"/>${w}<path d="M-9 -4Q-6 0 -9 4M-4 -5Q-1 0 -4 5M1 -6Q4 0 1 6" stroke="#fff" stroke-opacity=".28" stroke-width="1.1" fill="none"/><path d="M-8 4Q3 10 14 3Q4 12 -8 4Z" fill="#fff" opacity=".35"/><path d="M-6 -7Q3 -11 12 -7Q3 -9.5 -6 -7Z" fill="#fff" opacity=".5"/><path d="M5 2Q0 8 -3 7Q1 3 5 2Z" fill="${P[2]}"/><circle cx="13" cy="-1.6" r="2.7" fill="#fff"/><circle cx="13.7" cy="-1.6" r="1.6" fill="#1d2a44"/><circle cx="14.3" cy="-2.2" r=".6" fill="#fff"/><path d="M19.5 1Q18 2.4 16.6 2" stroke="#7a3a2a" stroke-width=".8" fill="none"/>`;
};
const SK = {
  coral: {
    w: 26,
    s: [0.85, 1.3],
    f: (e, v) => {
      const A = [e.r, e.c, [scLt(e.r[0], 0.25), scDk(e.r[1], 0.1)]][v % 3].map((c) => qn(e, c)),
        g = (d, w) =>
          `<path d="${d}" stroke="${A[1]}" stroke-width="${w}" stroke-linecap="round" fill="none"/><path d="${d}" stroke="${A[0]}" stroke-width="${w - 3}" stroke-linecap="round" fill="none"/>`,
        L = `<ellipse cx="0" cy="-1" rx="17" ry="6" fill="${A[1]}"/><ellipse cx="0" cy="-3" rx="13" ry="4.5" fill="${A[0]}"/>`;
      if (v % 3 == 1) {
        const [d, f] = qg(A[0], A[1], 0, 0, 1, 0);
        return (
          L +
          [
            [-10, 26, 5],
            [0, 40, 6],
            [10, 30, 5],
          ]
            .map(
              ([x, h, w], i) =>
                `<g class="qsw" ${qd(6, v, i, "--a:1.5deg;")}><path d="M${x - w} -2V${-h}Q${x - w} ${-h - w} ${x} ${-h - w}Q${x + w} ${-h - w} ${x + w} ${-h}V-2Z" fill="${f}"/><ellipse cx="${x}" cy="${-h}" rx="${w - 1}" ry="2.6" fill="${scDk(A[1], 0.3)}"/>${SHL(x - w / 2, -h / 2, 1.4, h / 3, 0, 0.4)}</g><defs>${d}</defs>`,
            )
            .join("")
        );
      }
      if (v % 3 == 2) {
        const [d, f] = qr(A[0], A[1]);
        return `<defs>${d}</defs><g class="qsw" ${qd(7, v, 0, "--a:2.5deg;")}><path d="M0 0V-12M0 -10C-30 -18 -30 -52 0 -58C30 -52 30 -18 0 -10Z" fill="${f}" stroke="${A[1]}" stroke-width="1.5"/><path d="M0 -10V-56M0 -12L-16 -44M0 -12L16 -44M0 -12L-24 -30M0 -12L24 -30" stroke="#fff" stroke-opacity=".4" stroke-width="1.2" fill="none"/>${SHL(-8, -44, 3, 9, 20, 0.45)}</g>${L}`;
      }
      return (
        L +
        `<g class="qsw" ${qd(6, v, 0, "--a:2deg;")}>` +
        g(
          "M0 -2V-20M0 -12Q-10 -16 -13 -30M0 -16Q9 -22 12 -36M-13 -30Q-16 -36 -14 -40M12 -36Q15 -42 12 -46M-13 -30Q-8 -38 -6 -42",
          6.5,
        ) +
        [
          [-14, -41],
          [12, -47],
          [-6, -43],
          [0, -21],
        ]
          .map(
            ([x, y]) =>
              `<circle cx="${x}" cy="${y}" r="3.6" fill="${A[0]}" stroke="${A[1]}" stroke-width="1"/><circle cx="${x - 1}" cy="${y - 1}" r="1.2" fill="#fff" opacity=".75"/>`,
          )
          .join("") +
        "</g>"
      );
    },
  },
  kelp: {
    w: 22,
    s: [0.85, 1.35],
    f: (e, v) =>
      [-11, 0, 11]
        .map((x, i) => {
          const h = 46 + (i % 2) * 16 + v * 6,
            c = qn(e, i % 2 ? e.c[0] : e.c[1]),
            [d, f] = qg(scLt(c, 0.3), scDk(c, 0.2), 0, 0, 1, 0);
          return `<defs>${d}</defs><g class="qsw" ${qd(5, v, i, "--a:5deg;")}><path d="M${x} 0C${x - 12} ${-h * 0.3} ${x + 6} ${-h * 0.55} ${x - 4} ${-h * 0.8}Q${x - 2} ${-h * 0.92} ${x + 2} ${-h}C${x + 12} ${-h * 0.7} ${x - 2} ${-h * 0.4} ${x + 6} 0Z" fill="${f}"/><path d="M${x + 2} -2C${x - 5} ${-h * 0.3} ${x + 3} ${-h * 0.6} ${x} ${-h * 0.95}" stroke="#fff" stroke-opacity=".35" stroke-width="1.2" fill="none"/></g>`;
        })
        .join(""),
  },
  seagrass: {
    w: 10,
    s: [0.8, 1.4],
    f: (e, v) =>
      [
        [-7, -18, -5],
        [-3, -24, -5],
        [2, -21, 7],
        [7, -15, 11],
      ]
        .map(
          ([x, y, X], i) =>
            `<g class="qsw" ${qd(4, v, i, "--a:7deg;")}><path d="M${x} 0Q${x - 2} ${y / 2} ${X} ${y}" stroke="${qn(e, e.c[1])}" stroke-width="2.8" stroke-linecap="round" fill="none"/><path d="M${x} 0Q${x - 2} ${y / 2} ${X} ${y}" stroke="${qn(e, e.c[0])}" stroke-width="1.1" stroke-linecap="round" fill="none"/></g>`,
        )
        .join(""),
  },
  anemone: {
    w: 16,
    s: [0.8, 1.3],
    f: (e, v) => {
      const C = qn(e, [e.r[0], e.c[0], "#ffd1e8"][v % 3]),
        D = qn(e, scDk(e.r[1], 0.1)),
        [d, f] = qg(scLt(D, 0.3), D, 1, 0, 0, 0);
      return (
        `<defs>${d}</defs><path d="M-8 0Q-10 -9 -6 -14H6Q10 -9 8 0Z" fill="${f}"/>` +
        [-1, 0, 1]
          .map(
            (g, j) =>
              `<g class="qsw" ${qd(4, v, j, "--a:7deg;")}>` +
              [0, 1, 2]
                .map((i) => {
                  const a = -Math.PI / 2 + ((j - 1) * 3 + (i - 1) * 0.5) * 0.22,
                    x = Math.cos(a) * 15,
                    y = Math.sin(a) * 24 - 12,
                    m = (x * 0.5 + (i - 1) * 2).toFixed(1);
                  return `<path d="M${(j - 1) * 3 + (i - 1) * 2} -13Q${m} ${(y * 0.55 - 8).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}" stroke="${C}" stroke-width="3" stroke-linecap="round" fill="none"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.3" fill="#fff" opacity=".9"/>`;
                })
                .join("") +
              "</g>",
          )
          .join("") +
        SHL(-3, -9, 1.8, 3.4, 0, 0.4)
      );
    },
  },
  shell: {
    w: 12,
    s: [0.8, 1.3],
    f: (e, v) => {
      const c = qn(e, [e.e, e.r[0], "#fff1f5"][v % 3]),
        d = scDk(qn(e, e.r[1]), 0.15),
        [a, f] = qr(scLt(c, 0.6), scDk(c, 0.1)),
        R = 22,
        N = 9,
        A0 = -0.94 * Math.PI,
        A1 = -0.06 * Math.PI,
        P = (t, r) => (Math.cos(t) * r).toFixed(1) + "," + (0.95 * Math.sin(t) * r).toFixed(1);
      let rim = "",
        w = "",
        l = "";
      for (let i = 0; i < N; i++) {
        const t0 = A0 + ((A1 - A0) * i) / N,
          t1 = A0 + ((A1 - A0) * (i + 1)) / N,
          m = (t0 + t1) / 2;
        rim += (i ? "" : "M" + P(t0, R)) + "Q" + P(m, 1.1 * R) + " " + P(t1, R);
        i % 2 &&
          (w += `<path d="M0 0L${P(t0, R)}Q${P(m, 1.1 * R)} ${P(t1, R)}Z" fill="${scDk(c, 0.2)}" opacity=".3"/>`);
        l += `<path d="M0 0L${P(t0, 0.96 * R)}" stroke="${d}" stroke-width=".8" opacity=".4"/>`;
      }
      return (
        `<defs>${a}</defs><path d="M0 0L${P(A0, R)}${rim.slice(rim.indexOf("Q"))}Z" fill="${f}"/>${w}${l}<path d="M${P(A0, 0.5 * R)}A${0.5 * R} ${0.48 * R} 0 0 1 ${P(A1, 0.5 * R)}M${P(A0, 0.75 * R)}A${0.75 * R} ${0.71 * R} 0 0 1 ${P(A1, 0.75 * R)}" stroke="#fff" stroke-opacity=".25" stroke-width="1" fill="none"/><path d="${rim}" stroke="${d}" stroke-width="1.3" stroke-linejoin="round" fill="none"/><path d="M-8 2L-6 -3L0 -1.5L6 -3L8 2Q0 5 -8 2Z" fill="${scDk(c, 0.18)}" stroke="${d}" stroke-width="1"/>` +
        SHL(-6, -15, 5, 2, -35, 0.5)
      );
    },
  },
  starfish: {
    w: 14,
    s: [0.8, 1.3],
    flat: 1,
    f: (e, v) => {
      const c = qn(e, [e.r[0], "#ffb36b", "#ff9db3"][v % 3]),
        [a, f] = qr(scLt(c, 0.35), scDk(c, 0.12));
      return (
        `<defs>${a}</defs><polygon points="${sStar(0, -6, 13, 5.5)}" fill="${f}" stroke="${f}" stroke-width="4" stroke-linejoin="round"/>` +
        [0, 1, 2, 3, 4]
          .map((i) => {
            const t = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
            return [4.5, 8, 11]
              .map(
                (r, k) =>
                  `<circle cx="${(Math.cos(t) * r).toFixed(1)}" cy="${(-6 + Math.sin(t) * r).toFixed(1)}" r="${1.2 - k * 0.2}" fill="${scDk(c, 0.25)}" opacity=".55"/>`,
              )
              .join("");
          })
          .join("") +
        `<circle cx="0" cy="-6" r="2.2" fill="${scLt(c, 0.5)}"/>` +
        SHL(-3, -10, 3, 1.4, -30, 0.5)
      );
    },
  },
  pearl: {
    w: 16,
    s: [0.8, 1.2],
    f: (e) => {
      const c = qn(e, e.e),
        d = scDk(qn(e, e.r[1]), 0.15),
        [a, f] = qg(scLt(c, 0.5), scDk(c, 0.12)),
        [b, g] = qr("#ffffff", "#d8b4cf");
      return `<defs>${a}${b}</defs><path d="M-15 0Q-17 -8 -13 -14L0 -9L13 -14Q17 -8 15 0Z" fill="${scDk(c, 0.2)}" stroke="${d}" stroke-width="1.2"/><g class="qpul2"><path d="M-15 0Q-19 -16 0 -22Q19 -16 15 0Q0 -6 -15 0Z" fill="${f}" stroke="${d}" stroke-width="1.3"/><path d="M0 -6L-9 -16M0 -6L0 -20M0 -6L9 -16" stroke="${d}" stroke-width="1" opacity=".4"/></g><path d="M-15 0Q-11 8 0 8Q11 8 15 0Q0 -4 -15 0Z" fill="${f}" stroke="${d}" stroke-width="1.2"/><circle cx="0" cy="-3" r="5.6" fill="${g}"/><ellipse class="qglow" ${qd(3, 0)} cx="-1.8" cy="-5" rx="1.9" ry="1.1" fill="#fff"/>`;
    },
  },
  bubbles: {
    w: 20,
    s: [0.8, 1.6],
    layer: 1,
    air: 1,
    f: (e, v) => {
      const [d, f] = qr("#ffffff", "#bfe8ff", 0.02, 0.18),
        k = e.night ? "#cfefff" : "#ffffff";
      return (
        `<defs>${d}</defs>` +
        [
          [0, 0, 6],
          [11, -22, 4],
          [-7, -36, 3],
          [6, -52, 2.4],
        ]
          .map(
            ([x, y, r], i) =>
              `<g class="qrise" ${qd(7, v, i)}><circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="${k}" stroke-opacity=".32" stroke-width="1"/><ellipse cx="${x - r * 0.35}" cy="${y - r * 0.4}" rx="${r * 0.28}" ry="${r * 0.16}" fill="#fff" opacity=".5" transform="rotate(-30 ${x - r * 0.35} ${y - r * 0.4})"/></g>`,
          )
          .join("")
      );
    },
  },
  fish: {
    w: 22,
    s: [0.6, 1.05],
    layer: 0,
    air: 1,
    f: (e, v) =>
      [[0, 0, 1, 0]]
        .map(
          ([x, y, k, i]) =>
            `<g transform="translate(${x} ${y}) scale(${k})" opacity="${e.night ? 0.7 : 1}"><g class="qfs" ${qd(15, v, i)}>${qF(e, v + i)}</g></g>`,
        )
        .join(""),
  },
  jelly: {
    w: 18,
    s: [0.8, 1.5],
    layer: 1,
    air: 1,
    f: (e, v) => {
      const c = [
          ["#e7b8ff", "#a070e8"],
          ["#a8ecff", "#4aa8e0"],
          ["#ffc2e6", "#e070b0"],
        ][v % 3].map((x) => qn(e, x)),
        [d, f] = qr(scLt(c[0], 0.55), c[1], 0.95, 0.55);
      return (
        `<defs>${d}</defs>` +
        (e.night ? `<circle cy="-8" r="32" fill="url(#sygl${e.m})" opacity=".5"/>` : "") +
        `<g class="qbob" ${qd(7, v)}><g class="qtn" ${qd(4, v, 1)}>` +
        [-9, -4, 1, 6, 11]
          .map(
            (x, i) =>
              `<path d="M${x} -1Q${x + 4} ${8 + (i % 2) * 3} ${x - 2} ${18 + (i % 3) * 4}T${x + 1} ${30 + (i % 2) * 5}" stroke="${c[0]}" stroke-width="1.7" stroke-linecap="round" fill="none" opacity=".7"/>`,
          )
          .join("") +
        `<path d="M-5 0Q-9 10 -4 18T-6 30M4 0Q9 10 3 18T6 28" stroke="${c[1]}" stroke-width="3.4" stroke-linecap="round" fill="none" opacity=".5"/></g><g class="qpul" ${qd(3.2, v, 2)}><path d="M-16 2C-17 -16 -8 -24 0 -24C8 -24 17 -16 16 2C11 -2 6 3 0 -1C-6 3 -11 -2 -16 2Z" fill="${f}" stroke="${c[0]}" stroke-opacity=".7" stroke-width="1.2"/><ellipse cx="0" cy="-10" rx="8" ry="6" fill="${c[1]}" opacity=".3"/><circle cx="-8" cy="-14" r="1.4" fill="#fff" opacity=".5"/><circle cx="7" cy="-17" r="1.1" fill="#fff" opacity=".5"/>${SHL(-6, -18, 5, 2.4, -25, 0.65)}</g></g>`
      );
    },
  },
  lanternfish: {
    w: 16,
    s: [0.8, 1.3],
    layer: 1,
    air: 1,
    f: (e, v) => {
      const b = qn(e, "#5d6fc0"),
        b2 = qn(e, "#2e3a86"),
        [d, f] = qg(b, b2);
      return (
        `<defs>${d}</defs><g class="qfs" ${qd(22, v)}><g class="qtail"><path d="M-15 0Q-24 -9 -30 -10Q-26 0 -30 10Q-24 9 -15 0Z" fill="${b2}"/></g><path d="M-3 -10Q4 -18 9 -9Z" fill="${b2}"/><path d="M10 -9Q14 -22 24 -20" stroke="#8aa0d8" stroke-width="1.5" fill="none"/><path d="M-16 0C-14 -10 0 -13 10 -9C17 -6 20 -2 20 0C20 3 17 7 10 9C0 12 -14 9 -16 0Z" fill="${f}"/><path d="M-8 -7Q2 -11 11 -7Q2 -9 -8 -7Z" fill="#fff" opacity=".35"/><path d="M20 1Q14 6 8 3" stroke="#14194a" stroke-width="1.2" fill="none"/><path d="M17 3L16 6L14.5 4.2M12 4.6L11.4 7.2L9.6 5" fill="#fff"/>` +
        [-9, -4, 1, 6, 11]
          .map(
            (x, i) =>
              `<circle cx="${x}" cy="${6.5 - (i % 2)}" r="1" fill="#bff6ff" class="qglow" ${qd(3, v, i)}/>`,
          )
          .join("") +
        `<circle cx="12" cy="-2" r="3.4" fill="#fff"/><circle cx="12.7" cy="-2" r="2" fill="#14194a"/><circle cx="13.3" cy="-2.7" r=".7" fill="#fff"/><g class="qglow" ${qd(2.6, v)}><circle cx="24" cy="-20" r="${e.night ? 14 : 9}" fill="url(#sygl${e.m})"/><circle cx="24" cy="-20" r="3.4" fill="#fff6b8"/></g></g>`
      );
    },
  },
  ink: {
    w: 44,
    s: [0.9, 1.6],
    layer: 0,
    air: 1,
    f: (e, v) => {
      const [d, f] = qr(e.night ? "#2a2d6a" : "#6a6fb8", e.night ? "#14163e" : "#3b3f86", 0.55, 0);
      return `<defs>${d}</defs><g class="qdr" ${qd(11, v)}><ellipse cx="0" cy="0" rx="42" ry="17" fill="${f}"/><ellipse cx="26" cy="-10" rx="28" ry="13" fill="${f}"/><ellipse cx="-26" cy="-8" rx="25" ry="12" fill="${f}"/></g>`;
    },
  },
  sakura: {
    w: 30,
    s: [0.85, 1.15],
    f: (e) => {
      const t = `url(#sysk${e.m})`;
      return `<path d="M-2 0Q-9 -20 0 -34Q6 -44 -2 -52" stroke="url(#sywd${e.m})" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="-20" cy="-56" r="18" fill="${t}"/><circle cx="20" cy="-58" r="17" fill="${t}"/><circle cx="-6" cy="-52" r="16" fill="${t}"/><circle cx="0" cy="-70" r="24" fill="${t}"/>${SHL(-9, -80, 10, 5.6)}<circle cx="26" cy="-16" r="2.2" fill="#ffc6da"/><circle cx="-24" cy="-7" r="2" fill="#ffc6da"/><circle cx="14" cy="-4" r="1.8" fill="#ffc6da"/>`;
    },
  },
  bonsai: {
    w: 30,
    s: [0.8, 1.15],
    f: (e) =>
      `<path d="M0 0Q-6 -14 4 -26Q10 -34 2 -42" stroke="url(#sywd${e.m})" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="-16" cy="-30" rx="17" ry="9.5" fill="${e.F}"/><ellipse cx="14" cy="-46" rx="19" ry="10" fill="${e.F}"/><ellipse cx="2" cy="-61" rx="15" ry="8.5" fill="${e.F}"/>${SHL(-8, -65, 7, 3)}`,
  },
  tree: {
    w: 28,
    s: [0.8, 1.15],
    f: (e) =>
      `<rect x="-5.5" y="-42" width="11" height="42" rx="5.5" fill="url(#sywd${e.m})"/><circle cx="-17" cy="-50" r="17" fill="${e.F}"/><circle cx="17" cy="-51" r="16" fill="${e.F}"/><circle cx="0" cy="-64" r="29" fill="${e.F}"/>${SHL(-9, -77, 11, 6.5)}`,
  },
  bush: {
    w: 24,
    s: [0.7, 1.1],
    f: (e) =>
      `<circle cx="-17" cy="-12" r="13" fill="${e.F}"/><circle cx="17" cy="-11" r="12" fill="${e.F}"/><circle cx="0" cy="-18" r="17" fill="${e.F}"/>${SHL(-6, -26, 8, 4.5)}${e.fl ? `<circle cx="-14" cy="-16" r="2.5" fill="${e.fl}"/><circle cx="8" cy="-24" r="2.5" fill="${e.fl}"/><circle cx="18" cy="-12" r="2.5" fill="${e.fl}"/>` : ""}`,
  },
  flw: {
    w: 14,
    s: [0.9, 1.3],
    f: (e) =>
      `<path d="M-9 -3V0M1 -6V0M10 -2V0" stroke="${scDk(e.c[1], 0.1)}" stroke-width="1.8" stroke-linecap="round"/>${SFW(-9, -5, e.fl || "#ffb6cf")}${SFW(1, -9, "#fff")}${SFW(10, -4, "#ffd36a")}`,
  },
  tuft: {
    w: 9,
    s: [0.8, 1.4],
    f: (e) =>
      `<path d="M-6 0Q-5 -10-9 -14M0 0Q0 -12 0 -17M6 0Q5 -10 9 -14" stroke="${e.night ? scLt(e.c[0], 0.12) : scDk(e.c[1], 0.05)}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`,
  },
  stones: {
    w: 22,
    s: [0.8, 1.25],
    f: (e) =>
      `<ellipse cx="0" cy="-7" rx="22" ry="9" fill="${e.K}"/><ellipse cx="1" cy="-20" rx="16" ry="7.5" fill="${e.K}"/><ellipse cx="-1" cy="-31" rx="10" ry="5.6" fill="${e.K}"/><ellipse cx="-7" cy="-9" rx="8" ry="2.2" fill="#fff" opacity=".45"/><ellipse cx="-4" cy="-22" rx="6" ry="1.8" fill="#fff" opacity=".45"/><ellipse cx="-3" cy="-32" rx="3.6" ry="1.4" fill="#fff" opacity=".45"/>`,
  },
  sand: {
    w: 46,
    s: [0.8, 1.2],
    flat: 1,
    f: (e) =>
      `<ellipse cx="0" cy="-2" rx="46" ry="19" fill="${e.e}"/>${[0.82, 0.6, 0.4].map((t) => `<ellipse cx="0" cy="-2" rx="${(46 * t).toFixed(1)}" ry="${(19 * t).toFixed(1)}" fill="none" stroke="${e.night ? "#7480c4" : "#e3d3ae"}" stroke-width="1.6"/>`).join("")}<ellipse cx="0" cy="-5" rx="9" ry="6" fill="${e.K}"/>${SHL(-3, -8, 3.4, 1.8)}`,
  },
  lantern: {
    w: 14,
    s: [0.9, 1.2],
    f: (e) =>
      `<ellipse cx="0" cy="-3" rx="13" ry="4.5" fill="${e.K}"/><rect x="-3.5" y="-26" width="7" height="24" rx="3" fill="${e.K}"/><rect x="-10" y="-31" width="20" height="8" rx="3" fill="${e.K}"/>${e.night ? `<circle cx="0" cy="-39" r="28" fill="url(#sygl${e.m})"/>` : ""}<rect x="-7" y="-45" width="14" height="14" rx="3" fill="${e.night ? "#ffe9a0" : "#fff3c8"}"/><path d="M-14 -45Q0 -60 14 -45Z" fill="${e.K}" stroke="${e.K}" stroke-width="3" stroke-linejoin="round"/><circle cx="0" cy="-57" r="3" fill="${e.K}"/>`,
  },
  torii: {
    w: 38,
    s: [0.85, 1.05],
    f: (e) =>
      `<rect x="-24" y="-52" width="7" height="52" rx="3" fill="${e.R}"/><rect x="17" y="-52" width="7" height="52" rx="3" fill="${e.R}"/><rect x="-27" y="-42" width="54" height="5" rx="2.5" fill="${e.R}"/><path d="M-36 -52Q0 -63 36 -52L34 -45Q0 -55 -34 -45Z" fill="${e.R}" stroke="${e.R}" stroke-width="3" stroke-linejoin="round"/>${SHL(-16, -52, 10, 2, -6, 0.4)}`,
  },
  dome: {
    w: 26,
    s: [0.85, 1.1],
    f: (e) =>
      `<rect x="-22" y="-26" width="44" height="26" rx="8" fill="#fbf3e2"/><path d="M-22 -26Q-22 -57 0 -57Q22 -57 22 -26Z" fill="${e.R}"/><path d="M-3 -57V-33H3V-57Z" fill="#2c2a6a" opacity=".45"/><rect x="-8" y="-17" width="16" height="17" rx="8" fill="#c98a56"/><path d="M6 -48L27 -68" stroke="#9aa3d6" stroke-width="5" stroke-linecap="round"/><circle cx="28" cy="-69" r="3.2" fill="#d8deff"/>${SHL(-12, -48, 8, 3, -30, 0.4)}`,
  },
  rock: {
    w: 28,
    s: [0.7, 1.2],
    f: (e) =>
      `<path d="M-27 0Q-31 -16 -17 -24Q-3 -34 14 -26Q31 -18 27 0Z" fill="${e.K}"/><ellipse cx="-6" cy="-14" rx="6" ry="2.6" fill="#2a2250" opacity=".1"/><ellipse cx="10" cy="-9" rx="4" ry="1.8" fill="#2a2250" opacity=".1"/>${SHL(-9, -22, 9, 5)}${e.sn ? '<path d="M-19 -24Q-3 -34 14 -26L9 -19Q-4 -24 -17 -17Z" fill="#fff"/>' : ""}`,
  },
  crystal: {
    w: 22,
    s: [0.8, 1.3],
    f: (e) =>
      `${e.night ? `<circle cx="0" cy="-24" r="32" fill="url(#sygl${e.m})"/>` : ""}<path d="M-14 0L-9 -26L-1 -42L8 -28L14 0Z" fill="${e.night ? "#a8ecff" : "#b9e4fb"}" stroke="${e.night ? "#a8ecff" : "#b9e4fb"}" stroke-width="5" stroke-linejoin="round"/><path d="M-1 -42L8 -28L14 0H3Z" fill="${e.night ? "#86d6f4" : "#93cff3"}" stroke="${e.night ? "#86d6f4" : "#93cff3"}" stroke-width="3" stroke-linejoin="round"/><path d="M16 0L24 -3L21 -18L15 -22Z" fill="${e.night ? "#c9f4ff" : "#cdf1ff"}" stroke="${e.night ? "#c9f4ff" : "#cdf1ff"}" stroke-width="3" stroke-linejoin="round"/>${SHL(-6, -28, 2.6, 10, -8, 0.7)}`,
  },
  mushroom: {
    w: 14,
    s: [0.9, 1.4],
    f: (e) =>
      `${e.night ? `<circle cx="0" cy="-22" r="26" fill="url(#sygl${e.m})" opacity=".7"/>` : ""}<rect x="-4.5" y="-15" width="9" height="15" rx="4" fill="#fbeedb"/><path d="M-16 -13Q-15 -36 0 -36T16 -13Q0 -9 -16 -13Z" fill="url(#symc${e.m})"/><circle cx="-6" cy="-24" r="2.6" fill="#fff"/><circle cx="4" cy="-28" r="2.2" fill="#fff"/><circle cx="8" cy="-19" r="2" fill="#fff"/>${SHL(-8, -30, 5, 2.6)}`,
  },
  pine: {
    w: 26,
    s: [0.85, 1.25],
    f: (e) =>
      `<rect x="-5" y="-16" width="10" height="16" rx="3" fill="url(#sywd${e.m})"/>${STIER(40, 26, -12, e.c[1])}${STIER(36, 21, -38, scMix(e.c[1], e.c[0], 0.5))}${STIER(32, 15, -62, e.c[0])}${SSNOW(40, 26, -12) + SSNOW(36, 21, -38) + SSNOW(32, 15, -62)}`,
  },
  snowman: {
    w: 20,
    s: [0.9, 1.2],
    f: (e) =>
      `<ellipse cx="0" cy="-13" rx="15" ry="14" fill="url(#synw${e.m})"/><circle cx="0" cy="-35" r="10.5" fill="url(#synw${e.m})"/><path d="M-1 -35l10 2.6-10 1.6z" fill="#ff9a3a"/><path d="M-6 -38q2 2 4 0M2 -38q2 2 4 0" stroke="#33305a" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M-11 -27Q0 -22 11 -27L10 -22Q0 -17-10 -22Z" fill="#ff8e9e"/><path d="M-14 -17L-26 -25M14 -17L26 -25" stroke="#9a7048" stroke-width="2.2" stroke-linecap="round"/><circle cx="0" cy="-13" r="1.5" fill="#33305a"/><circle cx="0" cy="-8" r="1.5" fill="#33305a"/>`,
  },
  bamboo: {
    w: 22,
    s: [0.9, 1.25],
    f: (e) =>
      [-16, -5, 6, 17]
        .map(
          (t, a) =>
            `<path d="M${t} 0V${-62 - 8 * a}" stroke="${e.c[1]}" stroke-width="6" stroke-linecap="round"/><path d="M${t - 3.4} ${-18 - 2 * a}h6.8M${t - 3.4} ${-38 - 3 * a}h6.8" stroke="${e.c[0]}" stroke-width="2.4" stroke-linecap="round"/><ellipse cx="${t + 6}" cy="${-62 - 8 * a}" rx="8" ry="3" fill="${e.c[0]}" transform="rotate(-24 ${t + 6} ${-62 - 8 * a})"/>`,
        )
        .join(""),
  },
  koi: {
    w: 44,
    s: [0.8, 1.2],
    flat: 1,
    f: (e) =>
      `<ellipse cx="0" cy="-3" rx="47" ry="19" fill="#fff" opacity=".6"/><ellipse cx="0" cy="-3" rx="42" ry="16" fill="url(#sywt${e.m})"/>${SHL(-14, -8, 18, 3.6, 0, 0.4)}<g transform="translate(-10 -2) rotate(-12)"><ellipse rx="9" ry="3.6" fill="#ffb25c"/><path d="M8 0L15 -4V4Z" fill="#ffb25c"/><circle cx="-5" cy="-1" r="1" fill="#33305a"/></g><g transform="translate(14 -5) rotate(170)"><ellipse rx="8" ry="3.2" fill="#fff"/><path d="M7 0L13 -3.4V3.4Z" fill="#fff"/><ellipse cx="2" rx="3" ry="2" fill="#ff7a6a"/></g>`,
  },
  lotus: {
    w: 44,
    s: [0.8, 1.2],
    flat: 1,
    f: (e) =>
      `<ellipse cx="0" cy="-3" rx="47" ry="19" fill="#fff" opacity=".6"/><ellipse cx="0" cy="-3" rx="42" ry="16" fill="url(#sywt${e.m})"/><ellipse cx="-16" cy="-1" rx="10" ry="4" fill="${e.c[0]}"/><ellipse cx="18" cy="-6" rx="9" ry="3.6" fill="${e.c[1]}"/><g transform="translate(-4 -9)">${[-52, -26, 0, 26, 52].map((e) => `<ellipse cx="0" cy="-6" rx="3.6" ry="8" fill="#ffc8dc" transform="rotate(${e})"/>`).join("")}<circle cy="-2" r="2.4" fill="#ffe27a"/></g>`,
  },
  planet: {
    w: 26,
    s: [0.8, 1.5],
    layer: 0,
    air: 1,
    f: (e, t) => {
      const a = `url(#sypa${t % 3}${e.m})`,
        s = ["#ffd9a6", "#bfe3ff", "#ffc2dc"][t % 3];
      return `${e.night ? `<circle r="44" fill="url(#sygl${e.m})" opacity=".35"/>` : ""}<ellipse rx="38" ry="10" fill="none" stroke="${s}" stroke-width="4.5" transform="rotate(-18)" opacity=".9"/><circle r="22" fill="${a}"/><path d="M-20 -6Q0 2 20 -8M-21 6Q0 14 21 4" stroke="#fff" stroke-width="2.4" fill="none" opacity=".28"/>${SHL(-8, -10, 7, 3.6)}<path d="M-38 0A38 10 0 0 0 38 0" fill="none" stroke="${s}" stroke-width="4.5" transform="rotate(-18)"/>`;
    },
  },
  moon: {
    w: 22,
    s: [0.8, 1.4],
    layer: 0,
    air: 1,
    f: (e) =>
      `<circle r="${e.night ? 44 : 36}" fill="url(#sygl${e.m})" opacity="${e.night ? 0.5 : 0.4}"/><path d="M8 -20A21 21 0 1 0 8 20A15.5 15.5 0 1 1 8 -20Z" fill="${e.night ? "#fff6d8" : "#fff3d4"}"/>${SHL(-8, -8, 3, 8, 10, 0.5)}`,
  },
  star: {
    w: 6,
    s: [0.8, 1.6],
    layer: 0,
    air: 1,
    f: (e) =>
      `<circle r="12" cy="-3" fill="url(#sygl${e.m})" opacity=".5"/><path d="M0 -13Q1.6 -1.6 13 0Q1.6 1.6 0 13Q-1.6 1.6 -13 0Q-1.6 -1.6 0 -13Z" fill="${e.night ? "#fff6c8" : "#ffffff"}"/>`,
  },
  cloud: {
    w: 40,
    s: [0.9, 1.6],
    layer: 0,
    air: 1,
    f: (e) =>
      e.night
        ? '<g opacity=".6"><g fill="#625db8"><ellipse cx="0" cy="-7" rx="54" ry="12"/><circle cx="-46" cy="-8" r="8"/><circle cx="-34" cy="-13" r="13"/><circle cx="-17" cy="-21" r="17"/><circle cx="4" cy="-27" r="21"/><circle cx="25" cy="-21" r="17"/><circle cx="40" cy="-12" r="13"/><circle cx="51" cy="-7" r="8"/></g><g fill="#8e88e6" opacity=".85"><circle cx="-17" cy="-24" r="12"/><circle cx="4" cy="-30" r="15"/><circle cx="25" cy="-24" r="12"/><circle cx="-34" cy="-16" r="8"/><circle cx="40" cy="-15" r="8"/></g><ellipse cx="0" cy="-3" rx="48" ry="6" fill="#4a45a0" opacity=".55"/></g>'
        : '<ellipse cx="0" cy="-6" rx="48" ry="12" fill="#dfe6ff"/><circle cx="-26" cy="-14" r="16" fill="#fff"/><circle cx="26" cy="-13" r="15" fill="#fff"/><circle cx="1" cy="-22" r="22" fill="#fff"/><ellipse cx="0" cy="-10" rx="46" ry="12" fill="#fff"/>',
  },
  pebble: {
    w: 20,
    s: [0.8, 1.3],
    layer: 1,
    air: 1,
    f: (e) =>
      `<path d="M-18 0Q-16 22 0 34Q16 22 18 0Z" fill="url(#syund${e.i}${e.m})"/><ellipse cx="0" cy="0" rx="19" ry="7.5" fill="${e.L[0]}"/><ellipse cx="-5" cy="-1.5" rx="9" ry="3" fill="#fff" opacity=".4"/>${SFW(7, -6, e.fl || "#ffd36a", 0.9)}`,
  },
  flant: {
    w: 14,
    s: [0.8, 1.3],
    layer: 1,
    air: 1,
    f: (e) =>
      `<circle cy="-4" r="${e.night ? 30 : 22}" fill="url(#sygl${e.m})" opacity="${e.night ? 0.9 : 0.5}"/><rect x="-8" y="-16" width="16" height="20" rx="7" fill="${e.night ? "#ffe08a" : "#ffd7a0"}"/><rect x="-8" y="-9" width="16" height="3.4" fill="#ff8f7a" opacity=".85"/><path d="M-3 4Q0 12 3 4" stroke="#ff8f7a" stroke-width="1.6" fill="none" stroke-linecap="round"/>`,
  },
  comet: {
    w: 30,
    s: [0.8, 1.3],
    layer: 1,
    air: 1,
    f: (e) =>
      `<path d="M0 -3.4L-58 15Q-60 18 -58 19L0 3.4Z" fill="url(#sycm${e.m})"/><circle r="4.4" fill="#fff6c8"/><circle r="9" fill="url(#sygl${e.m})" opacity=".8"/>`,
  },
};
function sGeo(e) {
  const t = rng(300 + 91 * e),
    a = 6 * t(),
    s = [0 === e ? [190, 1596] : [195, SH]];
  0 === e && s.push([195, 1452]);
  for (let e = 0; e < 10; e++) {
    const n = 1390 - (1225 * e) / 9,
      o = 195 + Math.sin(1.3 * e + a) * (86 + 16 * t());
    s.push([Math.max(80, Math.min(310, o)), n]);
  }
  s.push([195, 0]);
  const n = [],
    o = [];
  for (let e = 0; e < s.length - 1; e++) {
    const t = s[Math.max(0, e - 1)],
      a = s[e],
      i = s[e + 1],
      r = s[Math.min(s.length - 1, e + 2)];
    o.push(n.length);
    for (let e = 0; e < 14; e++) {
      const s = e / 14,
        o = s * s,
        l = o * s,
        c = (e, t, a, n) =>
          0.5 * (2 * t + (-e + a) * s + (2 * e - 5 * t + 4 * a - n) * o + (3 * t - e - 3 * a + n) * l);
      n.push([c(t[0], a[0], i[0], r[0]), c(t[1], a[1], i[1], r[1])]);
    }
  }
  return (n.push(s[s.length - 1]), o.push(n.length - 1), { P: s, pts: n, ix: o, o: 0 === e ? 2 : 1 });
}
const SIC = {};
function sIsl(e) {
  if (SIC[e]) return SIC[e];
  const t = sGeo(e),
    a = rng(1200 + 57 * e),
    s = t.P.slice(1, t.P.length - 1),
    n = s.map((e, t) => {
      const n = t === s.length - 1;
      return {
        x: e[0] + 26 * (a() - 0.5),
        y: e[1] + 4 + 12 * (a() - 0.5),
        rx: n ? 122 : 90 + 16 * a(),
        ry: n ? 66 : 52 + 9 * a(),
        a: 8 * (a() - 0.5),
        boss: n,
      };
    });
  return (0 === e && n.push({ x: 178, y: 1632, rx: 170, ry: 86, a: -1.5, boss: 0, crash: 1 }), (SIC[e] = n));
}
const SDP = {};
function sPlan(e) {
  if (SDP[e]) return SDP[e];
  const t = CHP[e],
    a = sGeo(e),
    s = sIsl(e),
    n = rng(900 + 131 * e),
    o = Object.keys(t.d),
    i = o.map((e) => t.d[e]),
    r = i.reduce((e, t) => e + t, 0),
    l = () => {
      let e = n() * r,
        t = 0;
      for (; e > i[t];) ((e -= i[t]), t++);
      return o[t];
    },
    c = s.filter((e) => !e.crash),
    d = a.P.slice(1, a.P.length - 1),
    f = d[d.length - 1],
    u = f[0] + (f[0] < 195 ? 62 : -62),
    h = [];
  let p = 0,
    m = 0;
  const b = (e, t, s) => {
      for (let n = 0; n < a.pts.length; n += 2) {
        const o = a.pts[n];
        if (Math.hypot(o[0] - e, o[1] - t) < s) return !1;
      }
      return !0;
    },
    g = (e, t, a) => s.some((s) => ((e - s.x) / (s.rx * a)) ** 2 + ((t - s.y) / (s.ry * a)) ** 2 < 1);
  for (let e = 0; e < 2200 && h.length < 86; e++) {
    const e = l(),
      t = SK[e],
      a = t.s[0] + n() * (t.s[1] - t.s[0]),
      o = (3 * n()) | 0;
    let i, r;
    if (t.air) {
      if (m >= 26) continue;
      if (
        ((i = 410 * n() - 10),
        (r = 30 + 1440 * n()),
        s.some(
          (e) =>
            ((i - e.x) / (1.1 * e.rx + t.w * a * 0.7)) ** 2 +
              ((r - e.y) / (1.7 * e.ry + t.w * a * 0.5)) ** 2 <
            1,
        ))
      )
        continue;
      if (!b(i, r, 40 + t.w * a * 0.9)) continue;
      if (h.some((e) => e.K.air && Math.hypot(e.x - i, e.y - r) < 1.1 * (e.K.w * e.s + t.w * a) + 14))
        continue;
      m++;
    } else {
      if (p >= 58) continue;
      const e = c[(n() * c.length) | 0];
      if (((i = e.x + (2 * n() - 1) * e.rx * 0.84), (r = e.y + (2 * n() - 1) * e.ry * 0.72), !g(i, r, 0.88)))
        continue;
      if (!b(i, r, 32 + t.w * a * 0.72)) continue;
      if (d.some((e) => Math.hypot(e[0] - i, 1.2 * (e[1] - r)) < 52)) continue;
      if (Math.hypot(u - i, 1.2 * (f[1] - r)) < 66) continue;
      if (
        !t.flat &&
        h.some(
          (e) =>
            !e.K.air && !e.K.flat && Math.hypot(e.x - i, 1.5 * (e.y - r)) < 0.85 * (e.K.w * e.s + t.w * a),
        )
      )
        continue;
      p++;
    }
    h.push({ k: e, K: t, s: a, x: i, y: r, v: o });
  }
  return (SDP[e] = h);
}
const SDC = {};
const sPP = (e, t) => {
  const a = t ? "n" : "d",
    s = sPal(e, t);
  return {
    i: e,
    m: a,
    c: s.c,
    r: s.r,
    k: s.k,
    L: s.L,
    fl: s.fl,
    sn: s.sn,
    e: s.e,
    night: t,
    F: `url(#syfo${e}${a})`,
    K: `url(#syrk${e}${a})`,
    R: `url(#syro${e}${a})`,
  };
};
function sDecor(e, t, a) {
  const s = e + (t ? "n" : "d") + a;
  if (void 0 !== SDC[s]) return SDC[s];
  const n = t ? "n" : "d",
    o = sPP(e, t);
  let i = sPlan(e).filter((e) =>
    "g" === a ? !e.K.air : "b" === a ? e.K.air && 0 === e.K.layer : e.K.air && 1 === e.K.layer,
  );
  return (
    "g" === a && (i = i.slice().sort((e, t) => (e.K.flat ? -1 : 0) - (t.K.flat ? -1 : 0) || e.y - t.y)),
    (SDC[s] = i
      .map(
        (e) =>
          `<g transform="translate(${e.x.toFixed(1)} ${e.y.toFixed(1)}) scale(${e.s.toFixed(2)})">${e.K.air || e.K.flat ? "" : `<ellipse cx="0" cy="2" rx="${(1.15 * e.K.w).toFixed(1)}" ry="${(0.34 * e.K.w).toFixed(1)}" fill="url(#syshd${n})"/>`}${e.K.f(o, e.v)}</g>`,
      )
      .join(""))
  );
}
const sStar = (e, t, a, s) => (
  (e = +e),
  (t = +t),
  Array.from({ length: 10 }, (n, o) => {
    const i = -Math.PI / 2 + (o * Math.PI) / 5,
      r = o % 2 ? s : a;
    return (e + Math.cos(i) * r).toFixed(1) + "," + (t + Math.sin(i) * r).toFixed(1);
  }).join(" ")
);
const GUYSVG = `<defs><linearGradient id="sygt" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#ffe27a"/><stop offset="1" stop-color="#ffe27a" stop-opacity="0"/></linearGradient><radialGradient id="sygs" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#fff6c2"/><stop offset="1" stop-color="#ffc83d"/></radialGradient><radialGradient id="sygg"><stop offset="0" stop-color="#fff3c0" stop-opacity=".85"/><stop offset="1" stop-color="#fff3c0" stop-opacity="0"/></radialGradient><radialGradient id="sygb" cx=".36" cy=".26" r=".98"><stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#ece6ff"/><stop offset="1" stop-color="#b9acec"/></radialGradient></defs><g class="gtl"><path d="M-8 6Q-46 24-92 4" stroke="url(#sygt)" stroke-width="12" stroke-linecap="round" fill="none"/><circle cx="-60" cy="2" r="2" fill="#fff6c8"/><circle cx="-34" cy="12" r="1.6" fill="#fff6c8"/></g><polygon points="${sStar(0, 4, 17, 8.4)}" fill="url(#sygs)" stroke="#ffc83d" stroke-width="5" stroke-linejoin="round"/><circle class="gng" cx="0" cy="-22" r="40" fill="url(#sygg)"/><g class="gy"><path d="M1 -38Q6 -46 4 -52" stroke="#a79bdc" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="4" cy="-55" r="9" fill="url(#sygg)"/><polygon points="${sStar(4, -55, 5.8, 2.8)}" fill="url(#sygs)" stroke="#ffc83d" stroke-width="1.6" stroke-linejoin="round"/><path d="M0 -39C10 -39 15.5 -29 15.5 -19C15.5 -8 9 -2 0 -2C-9 -2 -15.5 -8 -15.5 -19C-15.5 -29 -10 -39 0 -39Z" fill="url(#sygb)"/><ellipse cx="-6.4" cy="-30" rx="3.2" ry="5.4" fill="#fff" opacity=".6" transform="rotate(18 -6.4 -30)"/><path d="M-9.2 -23q3.4 3.2 6.8 0M2.4 -23q3.4 3.2 6.8 0" stroke="#4a4290" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M-2.8 -16.4q2.8 2.6 5.6 0" stroke="#7a6cc0" stroke-width="1.5" fill="none" stroke-linecap="round"/><g fill="#efb63e"><circle cx="-11.8" cy="-18.4" r="1.1"/><circle cx="-9.6" cy="-16" r="1.1"/><circle cx="-12.6" cy="-15.2" r=".9"/><circle cx="11.8" cy="-18.4" r="1.1"/><circle cx="9.6" cy="-16" r="1.1"/><circle cx="12.6" cy="-15.2" r=".9"/></g><circle cx="-14.8" cy="-10" r="4.6" fill="#e6defc" stroke="#c7bbf0" stroke-width="1"/><circle cx="14.8" cy="-10" r="4.6" fill="#e6defc" stroke="#c7bbf0" stroke-width="1"/></g>`;
const GUYAQ = GUYSVG.split("#ffe27a")
  .join("#bfeaff")
  .split("#fff6c8")
  .join("#e9fbff")
  .split("#fff3c0")
  .join("#d6f3ff");
let SGY = null;
let sBusy = !1;
let sFrag = 0;
let sMT = 0;
const SBOT = 230;
const SDEFS = (e) => {
  const t = "n" === e,
    a = (e) => (t ? scMix(e, "#232a68", 0.34) : e),
    s = (t, s, n, o = 'cx=".35" cy=".3" r=".9"') =>
      `<radialGradient id="${t}${e}" ${o}><stop offset="0" stop-color="${a(s)}"/><stop offset="1" stop-color="${a(n)}"/></radialGradient>`,
    n = (t, s, n, o = 'x1="0" y1="0" x2="0" y2="1"') =>
      `<linearGradient id="${t}${e}" ${o}><stop offset="0" stop-color="${a(s)}"/><stop offset="1" stop-color="${a(n)}"/></linearGradient>`;
  return (
    `<radialGradient id="syshd${e}"><stop offset="0" stop-color="#2a2258" stop-opacity="${t ? 0.5 : 0.3}"/><stop offset="1" stop-color="#2a2258" stop-opacity="0"/></radialGradient>` +
    n("sywd", "#dba46c", "#aa7144", 'x1="0" y1="0" x2="1" y2="0"') +
    s("sywt", "#b8f1f9", "#4fbfe3", 'cx=".4" cy=".35" r=".8"') +
    s("synw", "#ffffff", "#cfe0f6", 'cx=".35" cy=".3" r=".85"') +
    s("symc", "#d9bcff", "#a77be0") +
    s("sysk", "#ffe3ee", "#ffb6cf") +
    s("sypa0", "#ffe0b8", "#ffa87a") +
    s("sypa1", "#cfe8ff", "#7ab4ee") +
    s("sypa2", "#ffd3e6", "#e58ec0") +
    `<radialGradient id="sygl${e}"><stop offset="0" stop-color="${t ? "#ffe9a0" : "#fff3c0"}" stop-opacity="${t ? 0.95 : 0.75}"/><stop offset="1" stop-color="${t ? "#ffe9a0" : "#fff3c0"}" stop-opacity="0"/></radialGradient>` +
    `<linearGradient id="sycm${e}" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#fff6c8" stop-opacity=".95"/><stop offset="1" stop-color="#ffd36a" stop-opacity="0"/></linearGradient>` +
    n("sypd0", "#eaf7fb", "#b5d6e2") +
    n("sypd1", "#fff2e6", "#f5cfa8") +
    s("syprl", "#ffffff", "#d8b4cf") +
    s("syprg", "#f1f8fb", "#98b4c4") +
    s("systd", "#fff6c2", "#ffc83d") +
    s("systl", "#f1f3ff", "#aab6e6") +
    s("sysn", "#e3e7f6", "#9ca6cf") +
    `<linearGradient id="syfg${e}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t ? "#12163f" : "#d6d0ff"}" stop-opacity="${t ? 0.5 : 0.55}"/><stop offset=".6" stop-color="${t ? "#12163f" : "#d6d0ff"}" stop-opacity="${t ? 0.4 : 0.45}"/><stop offset="1" stop-color="${t ? "#12163f" : "#d6d0ff"}" stop-opacity="0"/></linearGradient>` +
    (t
      ? `<linearGradient id="syau${e}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#6bf0b8"/><stop offset=".55" stop-color="#7aa8ff"/><stop offset="1" stop-color="#f08ad8"/></linearGradient>` +
        ["#8a6cff", "#4fc3e6", "#ff8ccf"]
          .map(
            (e, t) =>
              `<radialGradient id="synb${t}n"><stop offset="0" stop-color="${e}" stop-opacity=".5"/><stop offset="1" stop-color="${e}" stop-opacity="0"/></radialGradient>`,
          )
          .join("")
      : "")
  );
};
const sDefsC = (e, t, a) => {
  const s = "n" === a,
    n = s ? SKN : SKD,
    o = s ? "#0a2a58" : "#3f7090";
  return `<linearGradient id="sygr${e}${a}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${n[e + 1]}"/><stop offset="1" stop-color="${n[e]}"/></linearGradient><radialGradient id="syfo${e}${a}" cx=".32" cy=".28" r=".85"><stop offset="0" stop-color="${scLt(t.c[0], 0.3)}"/><stop offset=".5" stop-color="${t.c[0]}"/><stop offset="1" stop-color="${t.c[1]}"/></radialGradient><linearGradient id="syro${e}${a}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t.r[0]}"/><stop offset="1" stop-color="${t.r[1]}"/></linearGradient><radialGradient id="syrk${e}${a}" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="${t.k[1]}"/><stop offset="1" stop-color="${t.k[0]}"/></radialGradient><linearGradient id="syit${e}${a}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t.L[0]}"/><stop offset="1" stop-color="${t.L[1]}"/></linearGradient><linearGradient id="syund${e}${a}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${scMix(t.L[1], o, 0.34)}"/><stop offset="1" stop-color="${scMix(t.L[1], o, 0.7)}"/></linearGradient>`;
};
const sPad = (e, t, a, s, n, o) => {
  const i = "n" === o;
  return `<ellipse cx="${e}" cy="${t + 5}" rx="${a}" ry="${s}" fill="${n ? "#e6b08a" : i ? "#3a6a98" : "#8fb8cc"}"/><ellipse cx="${e}" cy="${t}" rx="${a}" ry="${s}" fill="url(#sypd${n ? 1 : 0}${o})"/><ellipse cx="${e}" cy="${t - 1}" rx="${a - 7}" ry="${s - 3.5}" fill="#fff" opacity="${i ? 0.25 : 0.4}"/>`;
};
const sPill = (e, t, a, s, n, o) => {
  const i = "n" === o;
  return `<rect x="${e - (n = n || 22) / 2}" y="${t}" width="${n}" height="15" rx="7.5" fill="${i ? "#161a4a" : "#fff"}" opacity="${i ? 0.84 : 0.95}"/><text x="${e}" y="${t + 11}" text-anchor="middle" font-size="10.5" font-weight="800" fill="${s ? (i ? "#ffd86b" : "#9a6200") : i ? "#aab6f0" : "#5a64a0"}">${a}</text>`;
};
function sNode(e, t, a, s, n) {
  ((t = +t), (a = +a));
  const o = "n" === n,
    i = e <= s.p,
    r = e === s.p,
    l = e > 0 && e % 10 == 0,
    c = e > 0 && e % 5 == 0 && !l;
  if (0 === e)
    return `<g>${sPad(t, a, 30, 11, !0, n)}<path d="M${t + 13} ${a - 4}V${a - 36}" stroke="#a07850" stroke-width="3" stroke-linecap="round"/><path d="M${t + 13} ${a - 36}L${t - 3} ${a - 30}L${t + 13} ${a - 24}Z" fill="#ff8fa3" stroke="#ff8fa3" stroke-width="3" stroke-linejoin="round"/>${sPill(t, a + 2, "Départ", !0, 56, n)}</g>`;
  if (l) {
    const i = r && s.bw < e,
      l = s.bw >= e,
      c = a - 4,
      d = t + (t < 195 ? 62 : -62);
    let f = `<g>${sPad(t, a, 30, 11, l, n)}<ellipse cx="${d}" cy="${a + 2}" rx="34" ry="9" fill="url(#syshd${n})"/>${i ? `<circle cx="${d}" cy="${a - 28}" r="46" fill="#ffb43a" opacity="${o ? 0.3 : 0.25}" class="spulse"/>` : ""}`;
    f += `<path d="M${d - 27} ${c}Q${d - 33} ${c - 36} ${d - 15} ${c - 48}Q${d} ${c - 56} ${d + 15} ${c - 48}Q${d + 33} ${c - 36} ${d + 27} ${c}Z" fill="url(#sysn${n})" stroke="${o ? "#6a76b8" : "#8d97c4"}" stroke-width="2" stroke-linejoin="round"/><g fill="${o ? "#63b87c" : "#86e093"}"><circle cx="${d - 15}" cy="${c - 50}" r="7"/><circle cx="${d}" cy="${c - 55}" r="9"/><circle cx="${d + 14}" cy="${c - 50}" r="7"/></g><ellipse cx="${d - 12}" cy="${c - 36}" rx="6" ry="3" fill="#fff" opacity=".35" transform="rotate(-30 ${d - 12} ${c - 36})"/>`;
    const u = c - 28,
      h = o ? "#2a2f6a" : "#4a5384";
    return (
      (f += l
        ? `<path d="M${d - 14} ${u}q4.5 -5 9 0M${d + 5} ${u}q4.5 -5 9 0" stroke="${h}" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M${d - 6} ${u + 9}q6 5 12 0" stroke="${h}" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="${d - 16}" cy="${u + 6}" r="3.6" fill="#ff9fb2" opacity=".75"/><circle cx="${d + 16}" cy="${u + 6}" r="3.6" fill="#ff9fb2" opacity=".75"/><circle cx="${d}" cy="${c - 80}" r="9" fill="url(#syprl${n})" stroke="#e8b8d0" stroke-width="2"/><ellipse cx="${d - 3}" cy="${c - 83}" rx="3" ry="1.8" fill="#fff" opacity=".85"/>`
        : i
          ? `<circle cx="${d - 9}" cy="${u}" r="6.6" fill="#fff"/><circle cx="${d + 9}" cy="${u}" r="6.6" fill="#fff"/><circle cx="${d - 9}" cy="${u + 0.6}" r="3.8" fill="#ffae2e"/><circle cx="${d + 9}" cy="${u + 0.6}" r="3.8" fill="#ffae2e"/><circle cx="${d - 9}" cy="${u + 0.6}" r="1.8" fill="#4a3320"/><circle cx="${d + 9}" cy="${u + 0.6}" r="1.8" fill="#4a3320"/><path d="M${d - 16} ${u - 10}L${d - 4} ${u - 7}M${d + 16} ${u - 10}L${d + 4} ${u - 7}" stroke="${h}" stroke-width="2.4" stroke-linecap="round"/><ellipse cx="${d}" cy="${u + 13}" rx="3.4" ry="2.6" fill="${h}"/>`
          : `<path d="M${d - 14} ${u}h9M${d + 5} ${u}h9" stroke="${o ? "#4a5499" : "#6a74a6"}" stroke-width="2.4" stroke-linecap="round"/><path d="M${d - 5} ${u + 12}h10" stroke="${o ? "#4a5499" : "#6a74a6"}" stroke-width="2.2" stroke-linecap="round"/>`),
      f + sPill(t, a + 2, e, l, 22, n) + "</g>"
    );
  }
  const d = c ? 20 : 16.5,
    f = a - 13;
  return `<g>${sPad(t, a, c ? 27 : 24, c ? 11 : 10, i, n)}${r ? `<circle cx="${t}" cy="${f}" r="${d + 16}" fill="#fff3b0" opacity="${o ? 0.5 : 0.42}" class="spulse"/>` : ""}${c ? `<circle cx="${t}" cy="${f}" r="${d + 9}" fill="none" stroke="#fff" stroke-width="2.4" stroke-dasharray="0.1 6.4" stroke-linecap="round" opacity=".95"/>` : ""}<circle cx="${t}" cy="${f}" r="${(0.82 * d).toFixed(1)}" fill="url(#${i ? "syprl" : "syprg"}${n})" stroke="${i ? "#e8b8d0" : o ? "#5f86b0" : "#8fb4c8"}" stroke-width="3.5"/><ellipse cx="${t - 4.5}" cy="${f - 6}" rx="4.2" ry="2.3" fill="#fff" opacity=".6" transform="rotate(-30 ${t - 4.5} ${f - 6})"/>${sPill(t, a + 2, e, i, 22, n)}</g>`;
}
function sCrash(e) {
  const t = "n" === e,
    a = sPal(0, t),
    s = sPP(0, t),
    n = scMix(a.L[1], t ? "#1d2150" : "#7a5f6a", 0.5),
    o = scLt(n, t ? 0.14 : 0.3),
    i = scMix(n, t ? "#0c0e30" : "#3a2a40", 0.55),
    r = t ? "#c9d0ff" : "#ffffff",
    l = (t, a, n, o, i) => {
      const r = SK[t];
      return `<g transform="translate(${a} ${n}) scale(${o})">${r.air || r.flat ? "" : `<ellipse cx="0" cy="2" rx="${(1.15 * r.w).toFixed(1)}" ry="${(0.34 * r.w).toFixed(1)}" fill="url(#syshd${e})"/>`}${r.f(s, i || 0)}</g>`;
    },
    c = (e, t, a, s) =>
      `<polygon points="${sStar(0, 0, a, 0.48 * a)}" transform="translate(${e} ${t}) rotate(${s})" fill="url(#sygs)" stroke="#ffc83d" stroke-width="2.4" stroke-linejoin="round"/>`;
  let d = `<ellipse cx="178" cy="1632" rx="130" ry="62" fill="url(#sygl${e})" opacity="${t ? 0.6 : 0.3}"/><ellipse cx="178" cy="1644" rx="96" ry="35" fill="${n}" opacity=".38"/>`;
  return (
    (d += `<path d="M236 1646C268 1652 312 1650 356 1630" fill="none" stroke="${o}" stroke-width="30" stroke-linecap="round" opacity=".5"/><path d="M236 1646C268 1652 312 1650 356 1630" fill="none" stroke="${n}" stroke-width="20" stroke-linecap="round" opacity=".75"/>`),
    (d += [
      [262, 1659, 5, 3],
      [290, 1662, 4, 2.6],
      [318, 1654, 5.5, 3],
      [246, 1632, 4, 2.4],
      [302, 1636, 4.5, 2.6],
    ]
      .map((e) => `<ellipse cx="${e[0]}" cy="${e[1]}" rx="${e[2]}" ry="${e[3]}" fill="${n}"/>`)
      .join("")),
    (d += `<ellipse cx="178" cy="1636" rx="67" ry="26" fill="${o}"/><ellipse cx="178" cy="1640" rx="56" ry="20" fill="${i}"/><ellipse cx="178" cy="1639" rx="48" ry="15" fill="url(#sygl${e})" opacity="${t ? 0.95 : 0.7}"/>`),
    (d += l("seagrass", 232, 1630, 1.1) + l("seagrass", 264, 1640, 1) + l("seagrass", 296, 1644, 1.1)),
    (d += `<circle cx="172" cy="1630" r="46" fill="url(#sygl${e})" opacity="${t ? 0.9 : 0.55}" class="spulse"/><g transform="translate(172 1632) rotate(-24)"><polygon points="${sStar(0, 0, 31, 15)}" fill="url(#sygs)" stroke="#ffc83d" stroke-width="6" stroke-linejoin="round"/><path d="M-5 -7L2 0L-3 7" stroke="#c98f1a" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/><ellipse cx="-7" cy="-12" rx="5" ry="2.6" fill="#fff" opacity=".6" transform="rotate(-30 -7 -12)"/></g>`),
    (d += `<path d="M113 1642A65 25 0 0 0 243 1642" fill="none" stroke="${o}" stroke-width="10" stroke-linecap="round"/><ellipse cx="146" cy="1655" rx="22" ry="7" fill="${n}"/><ellipse cx="204" cy="1657" rx="18" ry="6" fill="${n}"/>`),
    (d += c(250, 1648, 6, 20) + c(300, 1650, 7, -14) + c(334, 1640, 5, 30) + c(128, 1632, 5, -20)),
    (d +=
      l("coral", 58, 1646, 1.15) +
      l("coral", 294, 1588, 0.85) +
      l("shell", 130, 1596, 1) +
      l("stones", 96, 1606, 0.95) +
      l("anemone", 104, 1688, 1, 1) +
      l("anemone", 252, 1690, 0.9) +
      l("rock", 286, 1676, 0.8)),
    (d +=
      l("seagrass", 136, 1692, 1.1) +
      l("seagrass", 214, 1702, 1) +
      l("seagrass", 268, 1670, 1.1) +
      l("seagrass", 78, 1620, 1) +
      l("seagrass", 236, 1606, 1) +
      l("seagrass", 150, 1604, 1) +
      l("seagrass", 72, 1678, 1.1) +
      l("seagrass", 276, 1612, 1)),
    (d += `<circle cx="186" cy="1598" r="11" fill="${r}" opacity=".34"/><circle cx="196" cy="1578" r="15" fill="${r}" opacity=".26" class="spulse"/><circle cx="207" cy="1555" r="19" fill="${r}" opacity=".2"/>`),
    (d +=
      l("bubbles", 64, 1856, 1.2) +
      l("bubbles", 322, 1890, 1) +
      l("bubbles", 342, 1790, 1.1) +
      l("bubbles", 44, 1806, 0.9) +
      l("bubbles", 196, 1912, 1.2) +
      l("bubbles", 352, 1766, 1) +
      l("bubbles", 26, 1744, 0.8)),
    d
  );
}
window.sNT = [
  ["#232a68", "#1d3a7c", "#3a3a8a", "#d6dcff"],
  ["#0f4452", "#0e5a66", "#1a6a7a", "#c8fbff"],
  ["#3a2272", "#4a2a8a", "#6a3aa8", "#e6d6ff"],
  ["#16443a", "#1c5a46", "#2a6a52", "#d2ffe4"],
  ["#5a2150", "#6a2a60", "#8a3a78", "#ffd6f2"],
  ["#2a3a6e", "#34508a", "#4a62a8", "#dbe6ff"],
  ["#5a3524", "#6a4430", "#8a5a3a", "#ffe6c8"],
  ["#12306a", "#0e4a8a", "#1a5ab0", "#c8e4ff"],
];
window.sNS = ["#bff6ff", "#d6fff0", "#ffe6ff", "#e6ffd0", "#ffd9ec", "#dfe8ff", "#ffe8b8", "#cfeaff"];
window.sNL = [
  ["#ffd86b", "#ff9ec8", "#8affff"],
  ["#8affff", "#b8ffcf", "#ffe58a"],
  ["#d6a6ff", "#ff9ec8", "#ffd86b"],
  ["#b8ff8a", "#8affd0", "#ffe58a"],
  ["#ff9ec8", "#ffb87a", "#d6a6ff"],
  ["#a8c4ff", "#8affff", "#ffd86b"],
  ["#ffb87a", "#ffd86b", "#ff9ec8"],
  ["#8ab8ff", "#8affff", "#d6a6ff"],
];
function sNX(e) {
  const n = rng(900 + 13 * e),
    T = sNT[e % 8],
    L = sNL[e % 8],
    id = "synt" + e;
  let o = `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T[2]}" stop-opacity=".5"/><stop offset=".55" stop-color="${T[1]}" stop-opacity=".18"/><stop offset="1" stop-color="${T[0]}" stop-opacity="0"/></linearGradient></defs><rect width="390" height="${SH}" fill="url(#${id})"/>`;
  if (e % 3 === 1 || e % 4 === 2) {
    for (let k = 0; k < 2; k++) {
      const y = 120 + k * 420 + n() * 160;
      o += `<path d="M-10 ${y.toFixed(0)}Q100 ${(y - 80).toFixed(0)} 200 ${(y - 24).toFixed(0)}T400 ${(y - 50).toFixed(0)}V${(y - 130).toFixed(0)}Q300 ${(y - 170).toFixed(0)} 190 ${(y - 110).toFixed(0)}T-10 ${(y - 150).toFixed(0)}Z" fill="${L[k % 3]}" opacity=".08" class="spulse"/>`;
    }
  }
  for (let k = 0; k < 9; k++) {
    const c = L[k % 3],
      x = (20 + 350 * n()).toFixed(0),
      y = (n() * SH).toFixed(0),
      d = (3 * n()).toFixed(1);
    o += `<circle cx="${x}" cy="${y}" r="${(9 + 8 * n()).toFixed(0)}" fill="${c}" opacity=".15" class="spulse" style="animation-delay:-${d}s"/><circle cx="${x}" cy="${y}" r="${(1.6 + 1.4 * n()).toFixed(1)}" fill="${c}" opacity=".95" class="stw" style="animation-delay:-${d}s"/>`;
  }
  return o;
}
function sSkyBg(e, t, a) {
  const s = "n" === t,
    n = rng(55 + 7 * e);
  let o = "";
  if (!s) {
    o +=
      '<defs><linearGradient id="sqrg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="1"/><stop offset=".75" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>';
    for (let i = 0; i < 4; i++) {
      const x = 30 + i * 95 + n() * 30;
      o += `<path d="M${x.toFixed(0)} 0L${(x + 60).toFixed(0)} 0L${(x + 25 - 30 * n()).toFixed(0)} ${SH}L${(x - 40).toFixed(0)} ${SH}Z" fill="url(#sqrg)" opacity=".1" class="qray" style="animation-delay:-${(2 * i).toFixed(0)}s"/>`;
    }
    let b = "";
    for (let i = 0; i < 22; i++)
      b += `<circle cx="${(390 * n()).toFixed(0)}" cy="${(n() * SH).toFixed(0)}" r="${(1.5 + 3.5 * n()).toFixed(1)}"/>`;
    return o + `<g class="qdrf" fill="none" stroke="#fff" stroke-width="1" opacity=".22">${b}</g>`;
  }
  if (0 === e) {
    const e = rng(555);
    o +=
      '<ellipse cx="120" cy="1800" rx="230" ry="110" fill="url(#synb1n)"/><ellipse cx="330" cy="1620" rx="170" ry="90" fill="url(#synb2n)"/>';
    let t = "";
    for (let a = 0; a < 26; a++)
      t += `<circle cx="${(390 * e()).toFixed(0)}" cy="${(SH + 440 * e()).toFixed(0)}" r="${(0.5 + 1.2 * e()).toFixed(1)}" opacity="${(0.35 + 0.55 * e()).toFixed(2)}"${a % 6 == 0 ? ` class="stw" style="animation-delay:-${(3 * e()).toFixed(1)}s"` : ""}/>`;
    o += `<g fill="#bff6ff">${t}</g>`;
  }
  for (let e = 0; e < 6; e++)
    o += `<ellipse cx="${(390 * n()).toFixed(0)}" cy="${(100 + 1300 * n()).toFixed(0)}" rx="${(140 + 110 * n()).toFixed(0)}" ry="${(80 + 70 * n()).toFixed(0)}" fill="url(#synb${e % 3}n)" transform="rotate(${(60 * n() - 30).toFixed(0)} 195 750)"/>`;
  if (9 === e)
    for (const e of [160, 520, 880, 1240])
      o += `<path d="M-10 ${e}Q100 ${e - 90} 200 ${e - 30}T400 ${e - 60}V${e - 150}Q300 ${e - 190} 190 ${e - 130}T-10 ${e - 170}Z" fill="url(#syaun)" opacity=".2"/>`;
  let i = "";
  for (let e = 0; e < 54; e++)
    i += `<circle cx="${(390 * n()).toFixed(0)}" cy="${(n() * SH).toFixed(0)}" r="${(0.5 + 1.2 * n()).toFixed(1)}" opacity="${(0.35 + 0.55 * n()).toFixed(2)}"${e % 6 == 0 ? ` class="stw" style="animation-delay:-${(3 * n()).toFixed(1)}s"` : ""}/>`;
  return o + sNX(e) + `<g fill="${sNS[e % 8]}">${i}</g>`;
}
function sIslSVG(e, t, a) {
  const s = "n" === t,
    n = sIsl(e);
  let o = "",
    i = "";
  return (
    n.forEach((a, n) => {
      const { x: r, y: l, rx: c, ry: d, a: f, boss: u } = a,
        h = rng(2e3 + 31 * e + n),
        p = d * (u ? 1.8 : 1.65),
        m = (h() - 0.5) * c * 0.3,
        b = `translate(${r.toFixed(1)} ${l.toFixed(1)}) rotate(${f.toFixed(1)})`;
      o += `<g transform="${b}">${s ? `<ellipse cy="${(0.2 * d).toFixed(0)}" rx="${(1.25 * c).toFixed(0)}" ry="${(1.5 * d).toFixed(0)}" fill="url(#sygl${t})" opacity=".14"/>` : ""}<path d="M${-c} 0C${(0.95 * -c).toFixed(1)} ${(0.9 * d).toFixed(1)} ${(0.45 * -c + m).toFixed(1)} ${(0.78 * p).toFixed(1)} ${m.toFixed(1)} ${p.toFixed(1)}C${(0.45 * c + m).toFixed(1)} ${(0.78 * p).toFixed(1)} ${(0.95 * c).toFixed(1)} ${(0.9 * d).toFixed(1)} ${c} 0Z" fill="url(#syund${e}${t})"/>`;
      for (let a = 0; a < 2; a++) {
        const s = (a ? 1 : -1) * c * (0.55 + 0.25 * h()),
          n = p * (0.5 + 0.3 * h()),
          i = 3.5 + 3.5 * h();
        o += `<ellipse cx="${s.toFixed(1)}" cy="${n.toFixed(1)}" rx="${i.toFixed(1)}" ry="${(0.8 * i).toFixed(1)}" fill="url(#syund${e}${t})" opacity=".85"/>`;
      }
      ((o += "</g>"),
        (i += `<g transform="${b}"><ellipse cy="7" rx="${c}" ry="${d}" fill="url(#syund${e}${t})"/><ellipse rx="${c}" ry="${d}" fill="url(#syit${e}${t})"/><ellipse cy="${(0.12 * -d).toFixed(1)}" rx="${(0.88 * c).toFixed(1)}" ry="${(0.8 * d).toFixed(1)}" fill="#fff" opacity="${s ? 0.1 : 0.2}"/><ellipse rx="${c}" ry="${d}" fill="none" stroke="${s ? "#a9b5f5" : "#fff"}" stroke-width="2" opacity=".5"/></g>`));
    }),
    o + i
  );
}
const sRibbon = (e, t, a) => {
  const s = (t, a, s) =>
    `<path d="${e}" fill="none" stroke="${t}" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round"${s ? ` opacity="${s}"` : ""}/>`;
  return (
    s(a ? "#8a96e8" : "#ffffff", 74, a ? 0.16 : 0.4) +
    s(t.p[1], 50, a ? 0.6 : 0.9) +
    s(t.p[0], 40, a ? 0.92 : 1) +
    s(t.p[2], 14, 0.55) +
    `<path d="${e}" fill="none" stroke="#fff" stroke-width="4.6" stroke-dasharray="0.1 12" stroke-linecap="round" opacity=".9"/>`
  );
};
function sMapSVG(e, t) {
  const a = "n" === t,
    s = sCh(e.p),
    n = Math.min(CHP.length, s + 2),
    o = (SMAP - n) * SH,
    i = (e) => (SMAP - 1 - e) * SH,
    r = [],
    l = [],
    c = [];
  let d = SDEFS(t),
    f = "",
    u = "",
    h = "";
  for (let o = 0; o < n; o++) {
    const n = sPal(o, a),
      p = sGeo(o),
      m = i(o),
      b = r.length;
    p.pts.forEach((e) => r.push([e[0], e[1] + m]));
    const g = (e) => (0 === o ? 1 + e : e);
    0 === o && ((l[0] = b + p.ix[1]), (c[0] = [p.P[1][0], p.P[1][1] + m]));
    for (let e = 1; e <= 10; e++)
      ((l[10 * o + e] = b + p.ix[g(e)]), (c[10 * o + e] = [p.P[g(e)][0], p.P[g(e)][1] + m]));
    d += sDefsC(o, n, t);
    const E = p.pts.map((e, t) => (t ? "L" : "M") + e[0].toFixed(1) + " " + e[1].toFixed(1)).join("");
    u += `<g transform="translate(0 ${m})">${sSkyBg(o, t, n)}</g>`;
    let y =
      `<g transform="translate(0 ${m})">` +
      sDecor(o, a, "b") +
      sIslSVG(o, t, n) +
      sRibbon(E, n, a) +
      (0 === o ? sCrash(t) : "") +
      sDecor(o, a, "g");
    {
      const t = Math.max(b, l[0]),
        s = Math.min(b + p.pts.length - 1, e.p > 0 ? l[e.p] : 0);
      e.p > 0 &&
        s > t &&
        (y += `<path d="${p.pts
          .slice(t - b, s - b + 1)
          .map((e, t) => (t ? "L" : "M") + e[0].toFixed(1) + " " + e[1].toFixed(1))
          .join(
            "",
          )}" fill="none" stroke="${a ? "#ffd86b" : "#ffc83d"}" stroke-width="5.5" stroke-dasharray="0.1 12" stroke-linecap="round"/>`);
    }
    y += sDecor(o, a, "f");
    for (let a = 0 === o ? 0 : 1; a <= 10; a++) {
      const s = 10 * o + a,
        n = c[s];
      y += sNode(s, n[0].toFixed(1), (n[1] - m).toFixed(1), e, t);
    }
    (o > s && (y += `<rect width="390" height="1500" fill="url(#syfg${t})"/>`),
      (h += `<g transform="translate(0 ${m})"><rect x="62" y="14" width="266" height="46" rx="23" fill="${a ? "#161a4a" : "#fff"}" opacity="${a ? 0.8 : 0.92}"/><text x="195" y="32" text-anchor="middle" font-size="10.5" font-weight="800" letter-spacing="1.4" fill="${a ? "#aeb8f2" : "#2f7a96"}">CHAPITRE ${o + 1} · ${n.s.toUpperCase()}</text><text x="195" y="51" text-anchor="middle" font-size="16.5" font-weight="600" font-family="Fraunces,Georgia,serif" fill="${a ? "#fff" : "#0f4565"}">${n.t}</text></g>`),
      (f += y + "</g>"));
  }
  const p = c[e.p];
  return (
    (SGY = { pts: r, nodeIx: l, NXY: c, vb0: o, R: n, cur: [p[0], p[1]] }),
    `<svg id="${a ? "smapn" : "smap"}" class="${a ? "smn" : "smd"}" viewBox="0 ${o} 390 ${n * SH + 440}"${a ? ' aria-hidden="true"' : ` role="img" aria-label="Carte du voyage : étape ${e.p} sur ${SMX}"`}><defs>${d}</defs>${u}${f}${h}</svg>`
  );
}
function sSky() {
  const e = $("#stg");
  if (!e) return;
  const t = aqSky();
  (e.style.setProperty("--sun", t.s.toFixed(3)),
    document.body.style.setProperty("--gs", t.s.toFixed(3)),
    (e.dataset.ph = t.ph));
}
function sWide() {
  const m = $("#smv"),
    g = $("#stg");
  if (!m || !g) return;
  m.querySelectorAll(".smx").forEach((e) => e.remove());
  g.classList.remove("wd");
  const W = g.clientWidth,
    S = Math.floor((innerWidth - W) / 2);
  if (S < 24) return;
  g.classList.add("wd");
  const H = m.offsetHeight || 5e3,
    X = sxOn();
  X &&
    m.querySelectorAll("svg circle").forEach((c) => {
      const x = +c.getAttribute("cx");
      (x < 0 || x > 390) && +c.getAttribute("r") <= 3.5 && c.remove();
    });
  const R = rng(X ? 91 : 57),
    pal = X ? ["255,120,110", "90,200,140", "255,214,120"] : ["255,214,120", "255,184,140", "190,200,255"];
  for (const sd of [-1, 1]) {
    const d = document.createElement("div");
    d.className = "smx";
    d.style.cssText = "left:" + (sd < 0 ? -S : W) + "px;width:" + S + "px";
    let h = X ? "" : '<div class="smst"></div>';
    for (let k = 0; k < Math.round(H / 330); k++) {
      const z = 22 + 34 * R();
      h +=
        '<i class="smo" style="left:' +
        (R() * (S - z)).toFixed(0) +
        "px;top:" +
        (R() * H).toFixed(0) +
        "px;width:" +
        z.toFixed(0) +
        "px;height:" +
        z.toFixed(0) +
        "px;--c:" +
        pal[k % 3] +
        ";animation-delay:-" +
        (7 * R()).toFixed(1) +
        "s;animation-duration:" +
        (6 + 5 * R()).toFixed(1) +
        's"></i>';
    }
    for (let k = 0; k < Math.round(H / 520); k++) {
      const w = 110 + 110 * R();
      h +=
        '<i class="smc" style="left:' +
        (R() * (S - w * 0.6) - w * 0.2).toFixed(0) +
        "px;top:" +
        (R() * H).toFixed(0) +
        "px;width:" +
        w.toFixed(0) +
        "px;height:" +
        (0.3 * w).toFixed(0) +
        "px;animation-delay:-" +
        (30 * R()).toFixed(1) +
        's"></i>';
    }
    if (!X) {
      const L =
          '<svg viewBox="0 0 20 30"><circle cx="10" cy="15" r="9" fill="#fff" fill-opacity=".18" stroke="#fff" stroke-width="1.6" stroke-opacity=".8"/><ellipse cx="6.5" cy="10.5" rx="2.6" ry="1.6" fill="#fff" opacity=".85"/></svg>',
        I =
          '<svg viewBox="0 0 60 42"><path d="M8 21Q30 4 50 21Q30 38 8 21Z" fill="#ffb36b"/><path d="M50 21L60 12V30Z" fill="#ffb36b"/><circle cx="18" cy="18" r="2.4" fill="#2a2a4a"/></svg>',
        P =
          '<svg viewBox="0 0 120 50"><g fill="currentColor"><circle cx="30" cy="32" r="16"/><circle cx="53" cy="22" r="20"/><circle cx="80" cy="30" r="17"/><rect x="22" y="30" width="72" height="18" rx="9"/></g></svg>';
      for (let k = 0; k < Math.round(H / 260); k++) {
        const z = 16 + 12 * R();
        h +=
          '<span class="sml" style="left:' +
          (R() * (S - z)).toFixed(0) +
          "px;top:" +
          (R() * H).toFixed(0) +
          "px;width:" +
          z.toFixed(0) +
          "px;animation-delay:-" +
          (9 * R()).toFixed(1) +
          "s;animation-duration:" +
          (6 + 5 * R()).toFixed(1) +
          's">' +
          L +
          "</span>";
      }
      for (let k = 0; k < Math.round(H / 380); k++) {
        const z = 100 + 90 * R();
        h +=
          '<span class="smp" style="left:' +
          (R() * (S - z * 0.7) - z * 0.15).toFixed(0) +
          "px;top:" +
          (R() * H).toFixed(0) +
          "px;width:" +
          z.toFixed(0) +
          'px">' +
          P +
          "</span>";
      }
    }
    ((d.innerHTML = h), m.appendChild(d));
  }
}
function sHudPos() {
  try {
    const e = $(".shb[data-a=sbook]");
    e && document.body.style.setProperty("--pby", e.getBoundingClientRect().top.toFixed(0) + "px");
  } catch (e) {}
  const e = $(".shc");
  e && document.body.style.setProperty("--rt", (e.getBoundingClientRect().bottom + 7).toFixed(0) + "px");
}
function sPlace(e, t) {
  const a = $("#stg"),
    s = $("#guy"),
    n = $("#smv");
  if (!(a && s && n && SGY)) return;
  n.querySelectorAll("svg.smd:not([data-ar]),svg.smn:not([data-ar])").forEach((v) => {
    const b = v.viewBox.baseVal;
    b && b.height && ((v.style.aspectRatio = b.width + "/" + b.height), v.setAttribute("data-ar", 1));
  });
  const o = a.clientWidth,
    i = a.clientHeight,
    r = o / 390,
    l = (SGY.R * SH + 440) * r;
  ((SGY.cur = [e, t]),
    a.style.setProperty("--k", r.toFixed(4)),
    (s.style.transform =
      "translate3d(" + ((e - 100) * r).toFixed(1) + "px," + ((t - 72 - SGY.vb0) * r).toFixed(1) + "px,0)"));
  const c = Math.max(0, Math.min(l - i + 230, (t - SGY.vb0) * r - 0.46 * i));
  n.style.transform = "translate3d(0," + (-c).toFixed(1) + "px,0)";
}
function sWalk(e, t, a) {
  if (!$("#guy") || !SGY) return void a();
  const s = SGY.pts.slice(SGY.nodeIx[e], SGY.nodeIx[t] + 1),
    n = [0];
  for (let e = 1; e < s.length; e++)
    n.push(n[e - 1] + Math.hypot(s[e][0] - s[e - 1][0], s[e][1] - s[e - 1][1]));
  const o = n[n.length - 1],
    i = wRM ? 500 : Math.min(3400, 1200 + 4 * o),
    r = performance.now(),
    l = (e) => {
      if (!$("#guy")) return void a();
      const t = Math.min(1, (e - r) / i),
        c = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
        [d, f] = ((e) => {
          let t = 1;
          for (; t < n.length - 1 && n[t] < e;) t++;
          const a = (e - n[t - 1]) / (n[t] - n[t - 1] || 1);
          return [s[t - 1][0] + (s[t][0] - s[t - 1][0]) * a, s[t - 1][1] + (s[t][1] - s[t - 1][1]) * a];
        })(o * c);
      (sPlace(d, f), t < 1 ? requestAnimationFrame(l) : a());
    };
  requestAnimationFrame(l);
}
const sMsg = (e) => {
  const t = $("#m");
  t &&
    ((t.textContent = e),
    clearTimeout(sMT),
    (sMT = setTimeout(() => {
      const t = $("#m");
      t && t.textContent === e && (t.textContent = "");
    }, 4200)));
};
function sHud(e) {
  return `<header class="top shud"><div class="shc" data-a="sstory" role="button" tabindex="0" aria-label="Changer d’histoire"><h1>Histoire</h1><small>${CHP[sCh(e.p)].t} · étape ${e.p} / ${SMX} ▾</small><span class="sty-bar"><b style="width:${((e.p / SMX) * 100).toFixed(1)}%"></b></span></div><div class="sht"><div class="chip" title="Bulles">🫧 ${FLX()}</div>${ntBell()}<button class="shb" data-a="sbook" aria-label="Relire l’histoire"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15H7.5A2.5 2.5 0 0 0 5 20.5z"/><path d="M5 20.5A2.5 2.5 0 0 0 7.5 23H19v-5"/><path d="M9 8h6"/></svg></button></div></header>`;
}
function sBar(e) {
  const t = styDust(e),
    a = styGate(e),
    s = e.p >= SMX && !a,
    n = Math.floor(t / 10),
    o = t % 10,
    i = `<span class="orb nac" aria-hidden="true"><i><svg viewBox="0 0 20 20" width="17" height="17"><defs><radialGradient id="orbp" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#d8b4cf"/></radialGradient></defs><circle cx="10" cy="10" r="8" fill="url(#orbp)" stroke="#c9a0c4" stroke-width="1"/><ellipse cx="7.4" cy="7" rx="2.4" ry="1.4" fill="#fff" opacity=".85"/></svg></i>${UNL() ? "" : `<span class="ring">${Array.from({ length: o }, (e, t) => `<u class="on" style="--a:${(360 * t) / o}deg"></u>`).join("")}</span>`}</span>`;
  return `<button class="plfab${PLK && !PLPA ? " on" : ""}" data-a="plr" aria-label="Lecteur de musique"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V6l11-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/></svg></button><div class="sbar" id="sbar"><div class="sbi"><span class="sdr">${i}<b role="img" aria-label="${UNL() ? "perles illimitées" : n + " perle" + (n > 1 ? "s" : "") + ", " + o + " fragment" + (o > 1 ? "s" : "") + " de nacre sur 10 pour la suivante"}">${UNL() ? "∞" : n}<em>${UNL() ? "" : n > 1 ? "perles" : "perle"}</em></b></span></div><button class="btn${!a && !s && t < 10 ? " low" : ""}" data-a="sgo" ${s || sBusy ? "disabled" : ""}>${a ? "Affronter" : "Avancer"}</button></div>${s || a ? `<div class="sgt" role="status">${s ? "Fin du premier voyage" : "Un gardien bloque le chemin"}</div>` : ""}`;
}
function prPages() {
  const R = (x, k) => x.replace(/id="(\w+)"/g, `id="p$1${k}"`).replace(/url\(#(\w+)\)/g, `url(#p$1${k})`),
    Z = (k, x, y, c, body) => `<g transform="translate(${x} ${y}) scale(${c})">${R(body, k)}</g>`,
    r = rng(808),
    stars = (n, y1) =>
      Array.from(
        { length: n },
        (_, i) =>
          `<circle cx="${(300 * r()).toFixed(0)}" cy="${(y1 * r()).toFixed(0)}" r="${(0.6 + 1.1 * r()).toFixed(1)}" fill="#fff" class="prtw" style="animation-delay:-${(4 * r()).toFixed(1)}s"/>`,
      ).join(""),
    sky = (k, a, b, c) =>
      `<defs><linearGradient id="ps${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset=".62" stop-color="${b}"/><stop offset="1" stop-color="${c}"/></linearGradient><radialGradient id="pm${k}"><stop offset="0" stop-color="#fff7dc" stop-opacity=".55"/><stop offset="1" stop-color="#fff7dc" stop-opacity="0"/></radialGradient><radialGradient id="pp${k}" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#d8b4cf"/></radialGradient></defs><rect width="300" height="210" fill="url(#ps${k})"/>`,
    moon = (k, x, y, q) =>
      `<circle cx="${x}" cy="${y}" r="${2.6 * q}" fill="url(#pm${k})"/><circle cx="${x}" cy="${y}" r="${q}" fill="#fff7dc"/><circle cx="${x - q * 0.3}" cy="${y - q * 0.2}" r="${q * 0.2}" fill="#eadfb8" opacity=".6"/><circle cx="${x + q * 0.35}" cy="${y + q * 0.3}" r="${q * 0.15}" fill="#eadfb8" opacity=".6"/>`,
    wave = (y, c, op, d) =>
      `<path class="prw" style="animation-duration:${d}s" d="M-40 ${y}Q-10 ${y - 5} 20 ${y}T80 ${y}T140 ${y}T200 ${y}T260 ${y}T320 ${y}V215H-40Z" fill="${c}" opacity="${op}"/>`,
    rocks = `<ellipse cx="30" cy="190" rx="52" ry="26" fill="#1a3350"/><ellipse cx="270" cy="188" rx="56" ry="28" fill="#1a3350"/><ellipse cx="28" cy="180" rx="38" ry="16" fill="#27496a"/><ellipse cx="274" cy="178" rx="40" ry="17" fill="#27496a"/>`,
    pool = (k) =>
      `<defs><linearGradient id="pw${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4fb0cc"/><stop offset="1" stop-color="#1d5f8c"/></linearGradient></defs>${rocks}<ellipse cx="150" cy="168" rx="130" ry="40" fill="url(#pw${k})"/><ellipse cx="150" cy="160" rx="104" ry="26" fill="#fff" opacity=".07"/>`,
    bub = (x, k) =>
      `<g class="qrise" style="animation-duration:${6 + k}s;animation-delay:-${2 * k}s"><circle cx="${x}" cy="196" r="${2 + (k % 3)}" fill="#fff" fill-opacity=".1" stroke="#fff" stroke-opacity=".4"/></g>`,
    zd = GUYSVG.slice(0, GUYSVG.indexOf("</defs>") + 7),
    zy = GUYSVG.slice(GUYSVG.indexOf('<g class="gy">')),
    EY =
      '<path d="M-9.2 -23q3.4 3.2 6.8 0M2.4 -23q3.4 3.2 6.8 0" stroke="#4a4290" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M-2.8 -16.4q2.8 2.6 5.6 0" stroke="#7a6cc0" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
    E1 =
      '<ellipse cx="-9.2" cy="-22.4" rx="3.8" ry="4.6" fill="#fff" stroke="#8a7fd0" stroke-width=".9"/><ellipse cx="-2.4" cy="-22.6" rx="3.1" ry="4.4" fill="#fff" stroke="#8a7fd0" stroke-width=".9"/><g class="prlk"><circle cx="-10.2" cy="-22.4" r="2.5" fill="#6a5fc8"/><circle cx="-3.4" cy="-22.6" r="2.3" fill="#6a5fc8"/><circle cx="-10.2" cy="-22.4" r="1.2" fill="#2a2460"/><circle cx="-3.4" cy="-22.6" r="1.1" fill="#2a2460"/><circle cx="-10.9" cy="-23.2" r=".7" fill="#fff"/><circle cx="-4" cy="-23.4" r=".6" fill="#fff"/></g><ellipse cx="-7.4" cy="-14.6" rx="1.8" ry="2.4" fill="#7a6cc0"/>',
    E2 =
      '<ellipse cx="-5.6" cy="-22.6" rx="3.6" ry="4.2" fill="#4a4290"/><ellipse cx="5.6" cy="-22.6" rx="3.6" ry="4.2" fill="#4a4290"/><circle cx="-4.6" cy="-24" r="1.5" fill="#fff"/><circle cx="6.6" cy="-24" r="1.5" fill="#fff"/><circle cx="-6.8" cy="-21.4" r=".8" fill="#fff"/><circle cx="4.4" cy="-21.4" r=".8" fill="#fff"/><path d="M-3.2 -16q3.2 3.8 6.4 0" stroke="#7a6cc0" stroke-width="1.5" fill="#7a6cc0" fill-opacity=".35" stroke-linecap="round"/>',
    FR =
      '<circle cx="11.8" cy="-18.4" r="1.1"/><circle cx="9.6" cy="-16" r="1.1"/><circle cx="12.6" cy="-15.2" r=".9"/>',
    zn = (k, m) =>
      R(
        zd +
          (m
            ? zy.replace(EY, E2)
            : `<g transform="translate(-1 0) scale(.88 1)">${zy.replace(EY, E1).replace(FR, "")}</g>`),
        k,
      ),
    P = [
      {
        a:
          sky(1, "#08183c", "#173f78", "#2c7ea4") +
          stars(26, 110) +
          moon(1, 236, 46, 17) +
          `<path d="M0 160Q40 154 90 160T200 160T300 158V210H0Z" fill="#0f3764"/><ellipse cx="236" cy="172" rx="22" ry="3" fill="#fff7dc" opacity=".35"/><ellipse cx="236" cy="182" rx="12" ry="2.4" fill="#fff7dc" opacity=".25"/>` +
          wave(172, "#16508a", 0.7, 9) +
          `<g class="prsh" style="transform-origin:0 0"><g transform="translate(40 14)"><path d="M0 0L-74 -50" stroke="#fff6c2" stroke-opacity=".7" stroke-width="3.4" stroke-linecap="round"/><circle r="12" fill="#fff6c2" opacity=".28"/><polygon points="${sStar(0, 0, 8, 3.6)}" fill="#fff6c2" stroke="#ffe27a" stroke-width="1.4" stroke-linejoin="round"/></g></g>`,
        t: "Une nuit, une étoile filante a traversé le ciel…",
      },
      {
        a:
          sky(2, "#0a1d44", "#1a4a80", "#2e82a6") +
          stars(14, 90) +
          moon(2, 70, 44, 20) +
          pool(2) +
          `<ellipse cx="150" cy="166" rx="10" ry="3" fill="#fff6c2" class="prgl"/>` +
          [0, 1, 2]
            .map(
              (i) =>
                `<ellipse class="prrip" style="animation-delay:${4.1 + 0.7 * i}s" cx="150" cy="166" rx="40" ry="11" fill="none" stroke="#fff" stroke-width="1.6"/>`,
            )
            .join("") +
          `<g class="prfall"><g transform="translate(150 6)"><path d="M0 0L0 -52" stroke="#fff6c2" stroke-opacity=".55" stroke-width="5" stroke-linecap="round"/><circle r="12" fill="#fff6c2" opacity=".3"/><polygon points="${sStar(0, 0, 9, 4)}" fill="#fff6c2" stroke="#ffe27a" stroke-width="1.4" stroke-linejoin="round"/></g></g>` +
          [
            [132, 160],
            [168, 163],
            [120, 167],
            [182, 168],
            [150, 172],
          ]
            .map(
              ([x, y], i) =>
                `<circle class="prfoam" style="animation-delay:${4.1 + 0.15 * i}s" cx="${x}" cy="${y}" r="${1.2 + (i % 2)}" fill="#e8f4ff"/>`,
            )
            .join("") +
          `<g transform="translate(262 163) scale(.8)"><g class="prhop">${zn(2, 0)}</g></g>`,
        t: "…et a plongé dans un bassin de marée éclairé par la lune, laissant derrière elle une traînée d’écume argentée.",
      },
      {
        a:
          sky(3, "#3aa7c4", "#1f6fa0", "#0e3a6e") +
          [40, 120, 200, 260]
            .map(
              (x, i) =>
                `<path class="qray" style="animation-delay:-${2 * i}s" d="M${x} 0L${x + 34} 0L${x + 8} 210L${x - 40} 210Z" fill="#fff" opacity=".07"/>`,
            )
            .join("") +
          `<ellipse cx="150" cy="212" rx="200" ry="34" fill="#d9c294"/><ellipse cx="150" cy="208" rx="176" ry="24" fill="#ead6ac"/><defs><radialGradient id="pst3" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#fff6c2"/><stop offset="1" stop-color="#ffc83d"/></radialGradient></defs><circle class="qglow" cx="150" cy="140" r="86" fill="url(#pm3)"/><ellipse cx="150" cy="184" rx="52" ry="7" fill="#b89d6c" opacity=".5"/><polygon points="${sStar(150, 142, 46, 21)}" fill="url(#pst3)" stroke="#ffc83d" stroke-width="6" stroke-linejoin="round"/><ellipse cx="136" cy="126" rx="10" ry="4.6" fill="#fff" opacity=".5" transform="rotate(-30 136 126)"/>` +
          [
            [34, 198],
            [58, 204],
            [246, 202],
            [272, 198],
          ]
            .map(
              ([x, y], i) =>
                `<g transform="translate(${x} ${y})"><g class="qsw" style="--a:6deg;animation-duration:${4 + i}s"><path d="M0 0Q-4 -16 2 -30M6 0Q9 -14 4 -24" stroke="#3aa86a" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>`,
            )
            .join("") +
          `<g transform="translate(122 128) rotate(-10) scale(.8)"><g class="prtl">${zn(3, 1)}</g></g>` +
          [
            [190, 78],
            [222, 120],
            [84, 92],
            [246, 64],
          ]
            .map(
              ([x, y], i) =>
                `<path class="prtw" style="animation-delay:-${i}s" d="M${x} ${y - 5}L${x + 1.4} ${y - 1.4}L${x + 5} ${y}L${x + 1.4} ${y + 1.4}L${x} ${y + 5}L${x - 1.4} ${y + 1.4}L${x - 5} ${y}L${x - 1.4} ${y - 1.4}Z" fill="#fff6c2"/>`,
            )
            .join("") +
          bub(70, 0) +
          bub(215, 1) +
          bub(170, 2),
        t: "Un petit bonhomme nommé Zeni monte sur sa pointe lumineuse, le cœur un peu lourd : il cherche la paix intérieure.",
      },
      {
        a:
          sky(4, "#3aa7c4", "#1f6fa0", "#0e3a6e") +
          [40, 110, 190, 250]
            .map(
              (x, i) =>
                `<path class="qray" style="animation-delay:-${2 * i}s" d="M${x} 0L${x + 36} 0L${x + 10} 210L${x - 40} 210Z" fill="#fff" opacity=".07"/>`,
            )
            .join("") +
          `<ellipse cx="150" cy="212" rx="190" ry="32" fill="#e8d2a8"/><ellipse cx="150" cy="208" rx="170" ry="24" fill="#f4e4c2"/>` +
          [
            [30, 200],
            [56, 204],
            [246, 202],
            [272, 198],
          ]
            .map(
              ([x, y], i) =>
                `<g transform="translate(${x} ${y})"><g class="qsw" style="--a:6deg;animation-duration:${4 + i}s"><path d="M0 0Q-4 -16 2 -30M6 0Q9 -14 4 -24" stroke="#3aa86a" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>`,
            )
            .join("") +
          `<g class="prbob">${Z(4, 92, 138, 2, GUYSVG)}</g><g class="prbob2"><circle cx="216" cy="98" r="40" fill="url(#pm4)" class="qglow"/><circle cx="216" cy="98" r="21" fill="url(#pp4)" stroke="#e8b8d0" stroke-width="1.4"/><ellipse cx="209" cy="90" rx="7" ry="4" fill="#fff" opacity=".85"/></g>` +
          [
            [186, 62],
            [250, 70],
            [238, 132],
            [180, 120],
          ]
            .map(
              ([x, y], i) =>
                `<path class="prtw" style="animation-delay:-${i}s" d="M${x} ${y - 5}L${x + 1.4} ${y - 1.4}L${x + 5} ${y}L${x + 1.4} ${y + 1.4}L${x} ${y + 5}L${x - 1.4} ${y + 1.4}L${x - 5} ${y}L${x - 1.4} ${y - 1.4}Z" fill="#fff"/>`,
            )
            .join("") +
          bub(120, 2) +
          bub(280, 0),
        t: "L’étoile ne se laisse porter par le courant que si on lui offre une perle.",
      },
      {
        a:
          sky(5, "#0b2a58", "#145a8a", "#2a9db0") +
          `<circle cx="150" cy="100" r="54" fill="url(#pm5)" class="qglow"/>` +
          Array.from(
            { length: 10 },
            (_, i) =>
              `<path class="prcv" style="--a:${36 * i}deg;animation-delay:${(0.12 * i).toFixed(2)}s;transform-origin:150px 100px" d="M147 97L154 94L157 101L150 105Z" fill="${["#f6d6ec", "#cdeefa", "#ffe9c8"][i % 3]}" stroke="#fff" stroke-opacity=".7" stroke-width=".8"/>`,
          ).join("") +
          `<g class="prpop" style="transform-origin:150px 100px"><circle cx="150" cy="100" r="22" fill="url(#pp5)" stroke="#e8b8d0" stroke-width="1.4"/><ellipse cx="143" cy="92" rx="7" ry="4" fill="#fff" opacity=".85"/></g>` +
          bub(40, 1) +
          bub(110, 2) +
          bub(210, 0) +
          bub(262, 3),
        t: "Dix fragments de nacre en font une, et chaque niveau terminé dans un jeu en fait tomber autant que de bulles gagnées.",
      },
    ];
  return P;
}
function sPro() {
  return sBk(prPages(), { k: 0, end: "Commencer le voyage", lb: "Prologue : Le voyage de Zeni" });
}
function sBk(P, o) {
  const n = P.length;
  let i = 0;
  const nv_ = $("#nav");
  nv_ && (nv_.style.visibility = "hidden");
  const oo = $("#sfr");
  oo && oo.remove();
  const el = document.createElement("div");
  ((el.className = "sfr pro"),
    (el.id = "sfr"),
    el.setAttribute("role", "dialog"),
    el.setAttribute("aria-modal", "true"),
    el.setAttribute("aria-label", o.lb || "Livre"),
    (el.innerHTML = `${o.x ? '<button class="prcl2" data-a="sfx" aria-label="Fermer">✕</button>' : ""}<div class="prb" id="prb"><section class="prp" aria-hidden="true"><div class="pri"><svg viewBox="0 0 300 210" preserveAspectRatio="xMidYMid slice" aria-hidden="true"></svg></div><p class="prx"></p><small class="prn"></small></section><section class="prp" aria-hidden="true"><div class="pri"><svg viewBox="0 0 300 210" preserveAspectRatio="xMidYMid slice" aria-hidden="true"></svg></div><p class="prx"></p><small class="prn"></small></section><section class="prp" aria-hidden="true"><div class="pri"><svg viewBox="0 0 300 210" preserveAspectRatio="xMidYMid slice" aria-hidden="true"></svg></div><p class="prx"></p><small class="prn"></small></section></div>${
      o.x
        ? (() => {
            const f = [];
            P.forEach((p, k) => {
              const l = p.l || "";
              (f.length && f[f.length - 1][1] === l) || f.push([k, l]);
            });
            return f.length > 1
              ? `<div class="prch" id="prch" role="group" aria-label="Aller à un chapitre">${f.map(([k, l]) => `<button type="button" data-i="${k}" aria-label="${l}">${l.replace(/^(Chapitre |ch\.)/, "")}</button>`).join("")}</div>`
              : "";
          })()
        : ""
    }<div class="prc"><button class="prv" id="prbk" aria-label="Page précédente" disabled>‹</button><span class="prd">${P.map((e, k) => `<i${k ? "" : ' class="on"'}></i>`).join("")}</span><button class="btn prnx" id="prnx">Suivant</button></div>`),
    app.appendChild(el),
    prMus(!0, o.k));
  try {
    const B = el.querySelector("#prb"),
      S = $("[data-a=sbook]"),
      C = el.querySelector(".prc");
    if (B && B.animate && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const r = B.getBoundingClientRect(),
        q = S && S.offsetParent ? S.getBoundingClientRect() : null,
        f = {
          dx: q ? q.left + q.width / 2 - (r.left + r.width / 2) : 0,
          dy: q ? q.top + q.height / 2 - (r.top + r.height / 2) : 70,
          sc: q ? Math.max(0.08, q.width / r.width) : 0.55,
        };
      el.__fly = f;
      (B.animate(
        [
          { transform: `translate(${f.dx}px,${f.dy}px) scale(${f.sc}) rotate(-4deg)`, opacity: 0 },
          { opacity: 1, offset: 0.3 },
          { transform: "none", opacity: 1 },
        ],
        { duration: 900, easing: "cubic-bezier(.2,.75,.25,1)" },
      ),
        el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, easing: "ease-out" }),
        [C, el.querySelector(".prch")].forEach(
          (C) =>
            C &&
            ((C.style.opacity = "0"),
            (C.animate(
              [
                { opacity: 0, transform: "translateY(10px)" },
                { opacity: 1, transform: "none" },
              ],
              { duration: 420, delay: 620, easing: "ease-out", fill: "forwards" },
            ).onfinish = function () {
              ((C.style.opacity = ""), this.cancel());
            })),
        ));
    }
  } catch (e) {}
  const SL = [...el.querySelectorAll(".prp")],
    dt = [...el.querySelectorAll(".prd i")],
    bk = $("#prbk"),
    nx = $("#prnx"),
    rm = matchMedia("(prefers-reduced-motion: reduce)").matches,
    TR = (e) => "perspective(2200px) rotateY(" + e + "deg)",
    hid = (e, h) => {
      rm
        ? ((e.style.transform = ""), (e.style.opacity = h ? "0" : ""))
        : ((e.style.transform = h ? TR(-100) : ""), (e.style.opacity = ""));
    },
    fill = (e, k) => {
      if (e.__k === k) return;
      e.__k = k;
      const v = e.querySelector("svg"),
        x = e.querySelector(".prx"),
        c = e.querySelector(".prn");
      if (k < 0 || k >= n) return ((v.innerHTML = ""), (x.textContent = ""), void (c.textContent = ""));
      const p = P[k];
      ((v.innerHTML = p.a),
        (x.innerHTML = p.t),
        (c.textContent = (p.l ? p.l + " · " : "") + (k + 1) + " / " + n));
    };
  let L = SL[0],
    C = SL[1],
    R = SL[2],
    busy = 0;
  const lay = () => {
    ((L.style.zIndex = 3),
      (C.style.zIndex = 2),
      (R.style.zIndex = 1),
      C.classList.add("on"),
      L.classList.remove("on"),
      R.classList.remove("on"),
      C.setAttribute("aria-hidden", "false"),
      L.setAttribute("aria-hidden", "true"),
      R.setAttribute("aria-hidden", "true"));
  };
  (SL.forEach((e) => {
    ((e.style.willChange = "transform"),
      (e.style.backfaceVisibility = e.style.webkitBackfaceVisibility = "hidden"));
  }),
    fill(C, 0),
    fill(R, 1),
    fill(L, -1),
    hid(L, !0),
    (R.style.visibility = "hidden"),
    lay());
  const up = () => {
      const q = document.getElementById("prch");
      if (!q) return;
      let a = null;
      (q.querySelectorAll("button").forEach((e) => {
        +e.dataset.i <= i && (a = e);
      }),
        q.querySelectorAll("button").forEach((e) => e.classList.toggle("on", e === a)),
        a &&
          q.scrollTo &&
          q.scrollTo({ left: a.offsetLeft - q.clientWidth / 2 + a.offsetWidth / 2, behavior: "smooth" }));
    },
    ui = () => {
      (up(),
        dt.forEach((e, k) => e.classList.toggle("on", k === i)),
        (bk.disabled = 0 === i),
        i === n - 1
          ? ((nx.textContent = o.end || "Continuer"), nx.setAttribute("data-a", "sfx"))
          : ((nx.textContent = "Suivant"), nx.removeAttribute("data-a")),
        void 0 !== P[i].k && prMu.sw(P[i].k),
        sfx(440 + 30 * i, 0.12));
    },
    go = (d, J) => {
      const j = void 0 !== J ? J : i + d;
      if (busy || j === i || j < 0 || j >= n || !el.isConnected) return;
      busy = 1;
      const fw = j > i,
        T = fw ? R : L,
        rd = T.__k === j && "hidden" !== T.style.visibility;
      (fill(T, j), (T.style.visibility = ""), (i = j), ui());
      const run = () => {
        if (!el.isConnected) return;
        const F = fw ? C : L,
          K = rm
            ? [{ opacity: 1 }, { opacity: 0 }]
            : [
                { transform: TR(0), opacity: 1 },
                { transform: TR(-80), opacity: 1, offset: 0.8 },
                { transform: TR(-100), opacity: 0 },
              ],
          fin = () => {
            if (fw) {
              hid(C, !0);
              const q = L;
              ((L = C), (C = R), (R = q));
            } else {
              hid(L, !1);
              const q = R;
              ((R = C), (C = L), (L = q), hid(L, !0));
            }
            (lay(), hid(R, !1), (R.style.visibility = ""), fill(L, j - 1), fill(R, j + 1), (busy = 0));
          };
        if (!F.animate) return fin();
        const an = F.animate(K, {
          duration: rm ? 350 : 820,
          easing: "cubic-bezier(.45,.05,.3,1)",
          fill: "forwards",
          direction: fw ? "normal" : "reverse",
        });
        an.onfinish = () => {
          (fin(), an.cancel());
        };
      };
      requestAnimationFrame(() => requestAnimationFrame(() => (rd ? run() : setTimeout(run, 180))));
    },
    jp = (j) => go(0, j);
  (setTimeout(() => {
    el.isConnected && (R.style.visibility = "");
  }, 1000),
    setTimeout(() => {
      el.isConnected && "sfr" === el.id && document.body.classList.add("bkon");
    }, 950),
    window.__bkObs ||
      ((window.__bkObs = new MutationObserver(() => {
        document.body.classList.contains("bkon") &&
          !document.querySelector("#sfr.pro") &&
          document.body.classList.remove("bkon");
      })),
      window.__bkObs.observe(app, { childList: !0 })));
  {
    const q = document.getElementById("prch");
    q &&
      (q.addEventListener("click", (e) => {
        const b = e.target.closest("button");
        b && (e.stopPropagation(), jp(+b.dataset.i));
      }),
      up());
  }
  (nx.addEventListener("click", (e) => {
    busy ? e.stopPropagation() : i < n - 1 && (e.stopPropagation(), go(1));
  }),
    bk.addEventListener("click", () => go(-1)));
  let tx = 0;
  const bb = $("#prb");
  (bb.addEventListener(
    "touchstart",
    (e) => {
      tx = e.touches[0].clientX;
    },
    { passive: !0 },
  ),
    bb.addEventListener(
      "touchend",
      (e) => {
        const d = e.changedTouches[0].clientX - tx;
        d < -40 ? go(1) : d > 40 && go(-1);
      },
      { passive: !0 },
    ),
    bb.addEventListener("click", (e) => {
      const r = bb.getBoundingClientRect();
      e.clientX > r.left + 0.6 * r.width ? i < n - 1 && go(1) : e.clientX < r.left + 0.25 * r.width && go(-1);
    }));
}
const PRX = [
  [
    "Zeni se détend sur des coraux doux comme des pétales, bercé par le son des vagues de la surface.",
    "Il y affronte le Gardien de la Hâte, qui se dissout en trois respirations.",
    "« Respire profondément, c’est le seul moment où tu es vraiment présent », lui dit le gardien.",
  ],
  [
    "Des courants tièdes portent Zeni d’algues en algues, et il apprend à avancer sans se presser — porté par l’eau plutôt que de lutter contre le courant.",
    "Mais le Gardien du Doute surgit. « Et si tu t’étais trompé de courant ? Et si tout ce chemin ne menait nulle part ? »",
    "Zeni baisse les yeux vers son étoile, qui scintille toujours, exactement en dessous de lui.",
  ],
  [
    "Des méduses scintillantes montent et redescendent lentement, comme des lanternes qui volent au rythme du vent. Zeni apprend à lâcher prise comme le sable qui s’écoule sous ses pieds.",
    "Le Gardien du Regret traîne une coquille pleine de « si seulement »,",
    "qui se vide toute seule dans le courant.",
  ],
  [
    "Sous la banquise, l’eau est si calme qu’il entend son propre cœur.",
    "Le Gardien de la Colère jaillit des profondeurs, rouge comme un volcan sous-marin ; il gronde, il bouillonne, puis sa fureur monte en petites bulles d’air chaud —",
    "et, une à une, elles s’éteignent au contact de l’eau froide, car la colère n’est qu’une bulle, le calme se trouve toujours autour. Il suffit de bien chercher.",
  ],
  [
    "Au fond, les vagues de sable imitent les nuages dans le ciel. Il n’a rien à prouver, et le silence devient une grande maison remplie d’eau douce.",
    "Le Gardien de la Peur a des silhouettes monstrueuses plein les poches —",
    "ce sont des algues accrochées à un rocher.",
  ],
  [
    "Une lueur de poisson-lanterne dérive, et une carpe koï trace des cercles à la surface.",
    "Le Gardien de l’Envie montre les lueurs des autres,",
    "mais la sienne est petite, tiède et à lui.",
  ],
  [
    "Une brume sombre plane au-dessus des récifs, et Zeni se demande ce qu’on pense de lui lorsqu’il n’est pas là.",
    "Le Gardien de la Honte souffle un nuage d’encre autour de lui… mais dans l’eau claire, l’encre se dissout toute seule : il n’y avait rien à cacher, rien à pardonner.",
    "Le petit bonhomme est parfait comme il est, peu importe ce que les autres pensent de lui dans son dos.",
  ],
  [
    "Des crêtes de corail illuminées relient des récifs qui ne se ressemblent pas.",
    "Le Gardien de la Solitude lui tend une perle-miroir. En la regardant, il ne peut qu’admirer la belle personne qu’il voit dans le reflet.",
    "« Il n’y a pas deux petits bonhommes comme toi. N’oublie jamais à quel point tu es unique », lui dit le Gardien.",
  ],
  [
    "Sous la lumière vacillante, Zeni s’arrête, trop fatigué d’avancer.",
    "Le Gardien du Découragement tire une lourde ancre derrière lui ;",
    "quand Zeni pose simplement la main dessus et respire, elle se met à flotter comme une bouée — même le poids le plus lourd veut remonter vers la lumière.",
  ],
  [
    "L’eau y est claire comme du verre, et les rayons de lune percent jusqu’au fond — il est presque arrivé.",
    "Le dernier gardien, celui du Vacarme, porte tout le grondement des courants profonds, et il devient murmure, puis silence — comme une eau redevenue calme.",
    "C’est là que Zeni regarde enfin son étoile : une petite étoile de mer, qui brille doucement, heureuse d’être arrivée chez elle.",
  ],
];
const PCZ = {
  E1: '<ellipse cx="-9.2" cy="-22.4" rx="3.8" ry="4.6" fill="#fff" stroke="#8a7fd0" stroke-width=".9"/><ellipse cx="-2.4" cy="-22.6" rx="3.1" ry="4.4" fill="#fff" stroke="#8a7fd0" stroke-width=".9"/><g class="prlk"><circle cx="-10.2" cy="-22.4" r="2.5" fill="#6a5fc8"/><circle cx="-3.4" cy="-22.6" r="2.3" fill="#6a5fc8"/><circle cx="-10.2" cy="-22.4" r="1.2" fill="#2a2460"/><circle cx="-3.4" cy="-22.6" r="1.1" fill="#2a2460"/><circle cx="-10.9" cy="-23.2" r=".7" fill="#fff"/><circle cx="-4" cy="-23.4" r=".6" fill="#fff"/></g><ellipse cx="-7.4" cy="-14.6" rx="1.8" ry="2.4" fill="#7a6cc0"/>',
  E2: '<ellipse cx="-5.6" cy="-22.6" rx="3.6" ry="4.2" fill="#4a4290"/><ellipse cx="5.6" cy="-22.6" rx="3.6" ry="4.2" fill="#4a4290"/><circle cx="-4.6" cy="-24" r="1.5" fill="#fff"/><circle cx="6.6" cy="-24" r="1.5" fill="#fff"/><circle cx="-6.8" cy="-21.4" r=".8" fill="#fff"/><circle cx="4.4" cy="-21.4" r=".8" fill="#fff"/><path d="M-3.2 -16q3.2 3.8 6.4 0" stroke="#7a6cc0" stroke-width="1.5" fill="#7a6cc0" fill-opacity=".35" stroke-linecap="round"/>',
  E3: '<path d="M-9.8 -28q3 1.8 6.2 3.2M3.6 -25q3.2 -1.4 6.2 -3.2" stroke="#4a4290" stroke-width="1.4" fill="none" stroke-linecap="round"/><ellipse cx="-5.6" cy="-21.8" rx="3" ry="3.4" fill="#3a3478"/><ellipse cx="5.6" cy="-21.8" rx="3" ry="3.4" fill="#3a3478"/><circle cx="-4.8" cy="-23" r="1.1" fill="#fff"/><circle cx="6.4" cy="-23" r="1.1" fill="#fff"/><path d="M-3.4 -14.2q3.4 -2.2 6.8 0" stroke="#7a6cc0" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
  EY: '<path d="M-9.2 -23q3.4 3.2 6.8 0M2.4 -23q3.4 3.2 6.8 0" stroke="#4a4290" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M-2.8 -16.4q2.8 2.6 5.6 0" stroke="#7a6cc0" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
};
const pcR = (x, k) => x.replace(/id="(\w+)"/g, `id="p$1${k}"`).replace(/url\(#(\w+)\)/g, `url(#p$1${k})`);
const pcZ = (k, x, y, c, m, body, fl) => {
  let b = (body || GUYSVG).replace(/<g class="gtl">.*?<\/g>/, "");
  const r = [0, PCZ.E2, PCZ.E3, PCZ.E1][m | 0];
  return (
    r && (b = b.replace(PCZ.EY, r)),
    `<g transform="translate(${x} ${y}) scale(${fl ? -c : c} ${c})"><g class="prbob">${pcR(b, k)}</g></g>`
  );
};
const pcGr = ["coral", "kelp", "seagrass", "anemone", "shell", "starfish", "pearl", "crystal"];
const pcAr = ["bubbles", "fish", "jelly", "lanternfish", "ink"];
const pcFc = (t, s) => {
  const e = (x, y) =>
    `<ellipse cx="${x}" cy="${y}" rx="5.2" ry="5.6" fill="#fff"/><circle cx="${x + (s ? 0 : 1)}" cy="${y + 1}" r="2.6" fill="#2a2460"/><circle cx="${x + 1.6}" cy="${y - 0.6}" r=".9" fill="#fff"/>`;
  return "c" === t
    ? `<path d="M-16 -4q4 4 8 0M8 -4q4 4 8 0" stroke="#3a3478" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M-5 8Q0 13 5 8" stroke="#3a3478" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="-16" cy="3" r="3" fill="#ff9db3" opacity=".55"/><circle cx="16" cy="3" r="3" fill="#ff9db3" opacity=".55"/>`
    : e(-11, -4) +
        e(11, -4) +
        ("a" === t
          ? '<path d="M-18 -14L-6 -9M18 -14L6 -9" stroke="#3a1a1a" stroke-width="2.4" stroke-linecap="round"/><path d="M-7 11Q0 5 7 11" stroke="#3a1a1a" stroke-width="2.2" fill="none" stroke-linecap="round"/>'
          : "w" === t
            ? '<path d="M-18 -9L-6 -13M18 -9L6 -13" stroke="#3a3478" stroke-width="2.2" stroke-linecap="round"/><path d="M-6 10q3 -3 6 0t6 0" stroke="#3a3478" stroke-width="2" fill="none" stroke-linecap="round"/>'
            : '<path d="M-18 -8L-6 -12M18 -8L6 -12" stroke="#3a3478" stroke-width="2.2" stroke-linecap="round"/><path d="M-6 12Q0 6 6 12" stroke="#3a3478" stroke-width="2.2" fill="none" stroke-linecap="round"/>');
};
const pcB = (x, y, r, i, c = "#ffffff") =>
  `<g class="qrise" ${qd(6, i, i)}><circle cx="${x}" cy="${y}" r="${r}" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-opacity=".6" stroke-width="1.2"/><ellipse cx="${x - r * 0.35}" cy="${y - r * 0.4}" rx="${r * 0.28}" ry="${r * 0.16}" fill="#fff" opacity=".7"/></g>`;
const pcGS = [
  { a: "#ffb35e", b: "#ff7a3a", f: "w" },
  { a: "#b8c4dc", b: "#7f8fb2", f: "w" },
  { a: "#cdb8de", b: "#8f7aa8", f: "s" },
  { a: "#ff8a6a", b: "#e0452a", f: "a" },
  { a: "#8a7ab8", b: "#4a3d82", f: "w" },
  { a: "#7fe0c8", b: "#2fa890", f: "w" },
  { a: "#6a6fc8", b: "#2c2f78", f: "s" },
  { a: "#ffd8ea", b: "#e8a8c8", f: "s" },
  { a: "#a8b4c8", b: "#5f6f8c", f: "s" },
  { a: "#b898ff", b: "#6a44d0", f: "a" },
];
const pcG = (k, s) => {
  const g = pcGS[k],
    a = s ? scMix(g.a, "#ffffff", 0.45) : g.a,
    b = s ? scMix(g.b, "#ffffff", 0.4) : g.b,
    id = "pg" + k + s,
    gr = `<defs><radialGradient id="${id}" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="${scLt(a, 0.35)}"/><stop offset="1" stop-color="${b}"/></radialGradient></defs>`,
    F = `url(#${id})`,
    fc = pcFc(s ? "c" : g.f, s),
    hl = SHL(-10, -18, 9, 4.4, -25, 0.5);
  let body = "",
    ex = "";
  switch (k) {
    case 0:
      ((body =
        `<g class="qtail"><path d="M30 0L52 -14L52 14Z" fill="${b}"/></g><ellipse rx="36" ry="28" fill="${F}"/>` +
        hl),
        (ex = s
          ? [0, 1, 2].map((i) => pcB(-50 + 34 * i, -34, 5 - i, i)).join("")
          : '<path d="M-64 -10H-44M-68 4H-46M-62 18H-44" stroke="#fff" stroke-opacity=".6" stroke-width="3" stroke-linecap="round"/><path d="M-6 14h12l-5 7 5 7h-12l5-7z" fill="#fff" opacity=".85"/>'));
      break;
    case 1:
      ((body =
        [
          [-18, 6, 22],
          [10, -6, 26],
          [30, 10, 20],
          [-2, 12, 24],
        ]
          .map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${F}"/>`)
          .join("") + hl),
        (ex = s
          ? `<polygon points="${sStar(34, -34, 8, 3.6)}" fill="#ffe27a" class="prtw"/>`
          : '<text x="30" y="-24" font-size="34" font-family="Georgia,serif" fill="#fff" font-weight="700">?</text><text x="-44" y="-18" font-size="20" font-family="Georgia,serif" fill="#fff" opacity=".7">?</text>'));
      break;
    case 2:
      ((body =
        `<circle cx="6" cy="2" r="28" fill="${F}"/><path d="M6 2m-4 0a4 4 0 1 1 8 0a8 8 0 1 1 -16 0a13 13 0 1 1 26 0a19 19 0 1 1 -38 0" stroke="${scDk(b, 0.2)}" stroke-width="2" fill="none" stroke-linecap="round"/><g transform="translate(-26 14) scale(.55)">${fc}</g>` +
        hl),
        (ex = s
          ? [0, 1, 2, 3].map((i) => pcB(-34 - 8 * i, 10 - 3 * i, 4, i)).join("")
          : [
              [-18, -38, 6],
              [-34, -52, 8],
              [-14, -62, 5],
            ]
              .map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#9aa4b8" opacity=".7"/>`)
              .join("")));
      break;
    case 3:
      ((body =
        `<path d="M-38 32L-16 -24Q0 -38 16 -24L38 32Z" fill="${F}"/><ellipse cx="0" cy="-27" rx="17" ry="6" fill="${s ? "#bfe6ff" : "#ffc24a"}"/>` +
        hl),
        (ex = [0, 1, 2]
          .map((i) => pcB(-14 + 14 * i, -40 - 6 * i, 5 - i, i, s ? "#9ad8ff" : "#ff9a5a"))
          .join("")));
      break;
    case 4:
      ((body =
        `<path d="M0 -38Q28 -32 33 8L38 34Q18 27 0 36Q-18 27 -38 34L-33 8Q-28 -32 0 -38Z" fill="${F}"/>` +
        hl),
        (ex = s
          ? [-44, -30, 36, 48]
              .map(
                (x, i) =>
                  `<path d="M${x} 34Q${x - 4} 14 ${x + 3} 0" stroke="#3aa86a" stroke-width="3.4" stroke-linecap="round" fill="none" class="qsw" ${qd(4, i, i, "--a:8deg;")}/>`,
              )
              .join("")
          : [
              [-46, 16],
              [48, 10],
            ]
              .map(
                ([x, y]) =>
                  `<path d="M${x} ${y}l-8 -20l8 6l8 -6z" fill="#201a44"/><circle cx="${x - 3}" cy="${y - 12}" r="1.6" fill="#ffd84a"/><circle cx="${x + 3}" cy="${y - 12}" r="1.6" fill="#ffd84a"/>`,
              )
              .join("")));
      break;
    case 5:
      ((body =
        `<circle r="30" fill="${F}"/><path d="M0 -30Q8 -46 20 -44" stroke="${b}" stroke-width="3" fill="none"/><circle cx="20" cy="-44" r="4" fill="${s ? "#ffe9a0" : "#fff"}"/>` +
        hl),
        (ex = s
          ? '<g class="qglow"><circle cx="50" cy="8" r="14" fill="#ffd84a" opacity=".35"/><circle cx="50" cy="8" r="6" fill="#fff3b0"/></g>'
          : [
              [-52, -20, 13],
              [50, -26, 11],
              [-44, 24, 9],
            ]
              .map(
                ([x, y, r]) =>
                  `<circle cx="${x}" cy="${y}" r="${r * 1.8}" fill="#fff3b0" opacity=".25"/><circle cx="${x}" cy="${y}" r="${r}" fill="#fff8d0"/>`,
              )
              .join("")));
      break;
    case 6:
      ((body =
        `<path d="M-30 4Q-30 -34 0 -34Q30 -34 30 4Z" fill="${F}"/>` +
        [-24, -12, 0, 12, 24]
          .map(
            (x, i) =>
              `<path d="M${x} 2Q${x + 6} 20 ${x - 4} 34T${x + 2} 56" stroke="${b}" stroke-width="6" stroke-linecap="round" fill="none" class="qsw" ${qd(4, i, i, "--a:6deg;")}/>`,
          )
          .join("") +
        hl),
        (ex = s
          ? [0, 1].map((i) => pcB(-40 + 80 * i, -10, 4, i, "#9ad8ff")).join("")
          : `<g class="qdr" ${qd(8, 1)}><ellipse cx="0" cy="-14" rx="64" ry="38" fill="#14163e" opacity=".5"/><ellipse cx="-30" cy="-4" rx="36" ry="24" fill="#14163e" opacity=".45"/></g>`));
      break;
    case 7:
      ((body =
        `<path d="M-40 6Q-44 -24 0 -30Q44 -24 40 6Q0 14 -40 6Z" fill="${F}" stroke="${scDk(b, 0.15)}" stroke-width="2"/><path d="M-40 6Q-34 34 0 36Q34 34 40 6Q0 -2 -40 6Z" fill="${scDk(a, 0.08)}" stroke="${scDk(b, 0.15)}" stroke-width="2"/><circle cx="0" cy="2" r="22" fill="#eef8ff"/><circle cx="0" cy="2" r="22" fill="none" stroke="#fff" stroke-width="3" opacity=".8"/>` +
        (s
          ? '<polygon points="' +
            sStar(0, 8, 9, 4.2) +
            '" fill="#ffd45a"/><path d="M-6 -2q2 -2 4 0M2 -2q2 -2 4 0M-4 16q4 3 8 0" stroke="#3a3478" stroke-width="1.6" fill="none" stroke-linecap="round"/>'
          : '<polygon points="' +
            sStar(0, 8, 9, 4.2) +
            '" fill="#ffd45a"/><path d="M-6 -3l4 2M6 -3l-4 2M-4 18q4 -3 8 0" stroke="#3a3478" stroke-width="1.6" fill="none" stroke-linecap="round"/>') +
        SHL(-9, -8, 6, 3, -30, 0.8)),
        (ex = ""));
      break;
    case 8:
      ((body = `<circle r="30" fill="${F}"/>` + hl),
        (ex = s
          ? `<path d="M0 -30V-62" stroke="#c8d4e8" stroke-width="2"/><circle cx="0" cy="-70" r="9" fill="#ff6b6b"/><path d="M-9 -70h18" stroke="#fff" stroke-width="3"/><g transform="translate(0 -92) scale(.55)" fill="none" stroke="#5f6f8c" stroke-width="5" stroke-linecap="round"><path d="M0 -22V18M-14 4Q0 24 14 4M-9 -14h18"/><circle cy="-26" r="4"/></g>`
          : `<path d="M0 30Q10 50 0 64" stroke="#7a8498" stroke-width="3" fill="none"/><g transform="translate(0 84)" fill="none" stroke="#5f6f8c" stroke-width="6" stroke-linecap="round"><path d="M0 -22V18M-16 4Q0 26 16 4M-10 -14h20"/><circle cy="-26" r="4.5"/></g>`));
      break;
    default:
      ((body = `<circle r="22" fill="${F}"/>` + hl),
        (ex = s
          ? `<circle r="40" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.6" class="prrip2" style="transform-origin:0 0;animation-duration:7s"/>`
          : [0, 1, 2]
              .map(
                (i) =>
                  `<circle r="34" fill="none" stroke="${b}" stroke-opacity=".6" stroke-width="3" class="prrip2" style="transform-origin:0 0;animation-duration:1.6s;animation-delay:${0.5 * i}s"/>`,
              )
              .join("")));
  }
  return `${gr}<g class="${s ? "qbob" : "prvib"}" ${s ? qd(7, k) : ""}>${ex}${body}${7 === k ? "" : `<g transform="translate(0 -2)">${fc}</g>`}</g>`;
};
const pcHero = (k, P) => {
  const sk = (n, x, y, c, v = 0) => `<g transform="translate(${x} ${y}) scale(${c})">${SK[n].f(P, v)}</g>`,
    R = rng(40 + k);
  switch (k) {
    case 0:
      return (
        sk("coral", 34, 206, 2.3, 0) +
        sk("coral", 266, 206, 2.1, 2) +
        `<path d="M-10 10Q60 -6 130 12T270 8T320 14" stroke="#fff" stroke-opacity=".3" stroke-width="3" fill="none" class="prw"/>`
      );
    case 1:
      return (
        [40, 90, 140]
          .map(
            (y, i) =>
              `<path d="M-20 ${y}Q80 ${y - 30} 160 ${y}T330 ${y - 10}" stroke="#fff" stroke-opacity=".28" stroke-width="3" fill="none" stroke-dasharray="24 18" class="prcur" style="animation-duration:${5 + i}s"/>`,
          )
          .join("") +
        sk("kelp", 30, 206, 2.2, 0) +
        sk("kelp", 270, 206, 2.2, 1)
      );
    case 2:
      return sk("jelly", 60, 70, 1.9, 0) + sk("jelly", 240, 56, 2.2, 1) + sk("jelly", 150, 30, 1.3, 2);
    case 3:
      return (
        sk("crystal", 40, 206, 2.6) +
        sk("crystal", 262, 206, 2.3) +
        sk("crystal", 100, 208, 1.5) +
        sk("crystal", 214, 208, 1.7)
      );
    case 4:
      return (
        [0, 1, 2]
          .map(
            (i) =>
              `<path d="M-20 ${188 + i * 8}Q60 ${176 + i * 8} 150 ${190 + i * 8}T330 ${186 + i * 8}" stroke="#fff" stroke-opacity=".35" stroke-width="2" fill="none"/>`,
          )
          .join("") +
        sk("starfish", 58, 204, 2.2, 0) +
        sk("shell", 250, 206, 2.1, 1)
      );
    case 5:
      return (
        `<path d="M-10 18Q40 6 90 18T200 18T310 18" stroke="#fff" stroke-opacity=".5" stroke-width="3" fill="none" class="prw"/><path d="M-10 30Q50 20 100 30T210 30T310 30" stroke="#fff" stroke-opacity=".3" stroke-width="2" fill="none" class="prw" style="animation-duration:12s"/>` +
        sk("lanternfish", 230, 70, 1.7, 0) +
        sk("anemone", 40, 206, 2, 1)
      );
    case 6:
      return (
        `<rect width="300" height="210" fill="#0c1038" opacity=".28"/>` +
        sk("ink", 80, 60, 2.2) +
        sk("ink", 230, 40, 2.4) +
        sk("kelp", 28, 206, 1.8, 1)
      );
    case 7:
      return (
        sk("coral", 30, 206, 2.1, 0) +
        sk("coral", 150, 208, 1.7, 2) +
        sk("coral", 270, 206, 2.1, 1) +
        `<path d="M30 130Q90 96 150 120T270 124" stroke="#fff3b0" stroke-opacity=".5" stroke-width="1.6" fill="none"/>` +
        [40, 80, 120, 160, 200, 240]
          .map(
            (x, i) =>
              `<circle class="qglow" ${qd(3, i, i)} cx="${x}" cy="${112 + (i % 2 ? 10 : -4)}" r="3.2" fill="#fff3b0"/>`,
          )
          .join("")
      );
    case 8:
      return [22, 70, 110, 200, 240, 282]
        .map((x, i) => sk("kelp", x, 208, 2 + 0.3 * (i % 3), i % 3))
        .join("");
    default:
      return (
        [0, 1, 2]
          .map(
            (i) =>
              `<path class="prau" style="animation-delay:-${3 * i}s" d="M-20 ${30 + i * 22}Q80 ${i * 22 - 6} 170 ${34 + i * 22}T330 ${26 + i * 22}V${52 + i * 22}Q230 ${70 + i * 22} 150 ${54 + i * 22}T-20 ${60 + i * 22}Z" fill="${["#5fe8c8", "#9a7cff", "#7fc8ff"][i]}" opacity=".22"/>`,
          )
          .join("") +
        sk("crystal", 40, 206, 2.2) +
        sk("crystal", 262, 206, 2.4) +
        sk("lanternfish", 220, 86, 1.5, 0)
      );
  }
};
const pcPage = (k, p) => {
  const P = sPP(k, 0),
    id = "pk" + k,
    top = SKD[k],
    mid = scMix(SKD[k + 1], "#1f6fa0", 0.5),
    bot = scMix(SKD[k + 1], "#0e3a6e", 0.65),
    R = rng(300 + k),
    al = Object.keys(CHP[k].d).filter((x) => pcGr.includes(x)),
    all = al.length ? al : ["coral", "seagrass"],
    wt = all.map((x) => CHP[k].d[x]),
    tot = wt.reduce((a, b) => a + b, 0),
    pick = () => {
      let r = R() * tot,
        i = 0;
      for (; r > wt[i];) r -= wt[i++];
      return all[i];
    },
    ar = Object.keys(CHP[k].d).filter((x) => pcAr.includes(x));
  let o = `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset=".55" stop-color="${mid}"/><stop offset="1" stop-color="${bot}"/></linearGradient></defs><rect width="300" height="210" fill="url(#${id})"/>`;
  o += [50, 130, 210, 270]
    .map(
      (x, i) =>
        `<path class="qray" style="animation-delay:-${2 * i}s" d="M${x} 0L${x + 30} 0L${x + 6} 210L${x - 40} 210Z" fill="#fff" opacity=".07"/>`,
    )
    .join("");
  o += pcHero(k, P);
  o += `<ellipse cx="150" cy="214" rx="200" ry="30" fill="${P.L[1]}"/><ellipse cx="150" cy="210" rx="176" ry="22" fill="${P.L[0]}"/>`;
  [
    [16, 0],
    [300, 1],
    [120, 2],
    [196, 3],
  ].forEach(([x, i]) => {
    const n = pick();
    o += `<g transform="translate(${(x + (R() * 14 - 7)).toFixed(0)} ${204 + 4 * (i % 2)}) scale(${(0.85 + 0.35 * R()).toFixed(2)})">${SK[n].f(P, i)}</g>`;
  });
  if (0 === p && ar.length) {
    const n = ar[(R() * ar.length) | 0];
    o += `<g transform="translate(${(150 + (R() * 60 - 30)) | 0} ${(60 + R() * 40) | 0}) scale(1.2)">${SK[n].f(P, 1)}</g>`;
  }
  o += [0, 1, 2, 3, 4].map((i) => pcB(30 + i * 60 + R() * 20, 196, 2 + R() * 2.4, i)).join("");
  if (0 === p)
    o += `<text x="150" y="16" text-anchor="middle" font-size="9" fill="#fff" fill-opacity=".85" font-family="Fraunces,Georgia,serif" letter-spacing="2">CHAPITRE ${k + 1}</text><text x="150" y="34" text-anchor="middle" font-size="16" fill="#fff" font-family="Fraunces,Georgia,serif" stroke="#0e3a6e" stroke-opacity=".35" stroke-width="3" paint-order="stroke">${CHP[k].t}</text>`;
  const gs = `<g transform="translate(${p ? 222 : 300} ${p ? 112 : 112}) scale(${1 === p ? 1.2 : 0.95})"><g class="prin">${pcG(k, p > 1 ? 1 : 0)}</g></g>`;
  if (0 === p) o += pcZ(k + "a", 92, 160, 1.6, 1);
  else if (1 === p) o += pcZ(k + "b", 72, 156, 1.8, 3, GUYSVG, 1) + gs;
  else if (9 === k)
    o +=
      `<g class="prxa">${pcZ(k + "c", 120, 150, 2, 0, GUYSVG)}</g><g class="prxb">${pcZ(k + "d", 120, 150, 2, 0, GUYAQ)}</g>` +
      gs +
      [
        [70, 60],
        [200, 50],
        [250, 100],
        [40, 110],
      ]
        .map(
          ([x, y], i) =>
            `<path class="prtw" style="animation-delay:-${i}s" d="M${x} ${y - 5}L${x + 1.4} ${y - 1.4}L${x + 5} ${y}L${x + 1.4} ${y + 1.4}L${x} ${y + 5}L${x - 1.4} ${y + 1.4}L${x - 5} ${y}L${x - 1.4} ${y - 1.4}Z" fill="#fff"/>`,
        )
        .join("");
  else
    o +=
      pcZ(k + "e", 110, 154, 2, 0) +
      gs +
      [
        [70, 60],
        [200, 50],
        [250, 100],
        [40, 110],
      ]
        .map(
          ([x, y], i) =>
            `<path class="prtw" style="animation-delay:-${i}s" d="M${x} ${y - 5}L${x + 1.4} ${y - 1.4}L${x + 5} ${y}L${x + 1.4} ${y + 1.4}L${x} ${y + 5}L${x - 1.4} ${y + 1.4}L${x - 5} ${y}L${x - 1.4} ${y - 1.4}Z" fill="#fff"/>`,
        )
        .join("");
  return o;
};
const pcPages = (k) =>
  PRX[k].map((t, p) => ({
    get a() {
      return pcR(pcPage(k, p), "u" + k + "_" + p);
    },
    t,
    k: k + 1,
    l: "ch." + (k + 1),
  }));
function sChap(k) {
  const i = Math.max(1, Math.min(10, k)) - 1;
  return sBk(pcPages(i), { k: i + 1, end: "Continuer", lb: "ch." + (i + 1) + " : " + CHP[i].t });
}
function sBookAll() {
  const e = styRead(),
    ks = Object.keys(STORY)
      .map(Number)
      .filter((t) => UNL() || (t <= e.p && (t % 10 != 0 || e.bw >= t)))
      .map((t) => t / 10),
    pro = prPages();
  let P = pro.map((x) => ({ ...x, k: 0, l: "Prologue" }));
  ks.forEach((t) => {
    P = P.concat(pcPages(t - 1));
  });
  return sBk(P, { k: 0, x: 1, end: "Fermer", lb: "Le livre de l’histoire" });
}
function sOv(e, t) {
  const a = $("#nav");
  a && (a.hidden = !0);
  const s = $("#sfr");
  s && s.remove();
  const n = document.createElement("div");
  ((n.className = "sfr"),
    (n.id = "sfr"),
    n.setAttribute("role", "dialog"),
    n.setAttribute("aria-modal", "true"),
    (n.innerHTML = `<div class="glass sfc">${e}<button class="btn" data-a="sfx">${t || "Continuer"}</button></div>`),
    app.appendChild(n));
}
const sFragH = (e) => `<small>Étape ${e} · ${CHP[sCh(e)].t}</small><p class="sfq">${STORY[e]}</p>`;
const XCH = [
  "La veille de Noël",
  "La vitrine",
  "Le banc sous la neige",
  "La nuit la plus longue",
  "La petite lumière",
  "Le sapin tordu",
  "Le petit pain chaud",
  "L’horloge de la place",
  "Minuit",
  "Le plus beau cadeau",
  "Le matin blanc",
  "La boulangerie",
  "Le sapin de tout le monde",
  "La dernière nuit de l’année",
  "Une année à vivre",
];
const XPRO =
  "C’est la veille de Noël. Il neige doucement sur la ville et, partout, des fenêtres s’allument. Zeni, le petit bonhomme, n’a pas de fenêtre. Pas de maison, pas de table, personne qui l’attende. Il marche, les mains dans ses manches, et regarde passer les autres avec leurs paquets. Pour avancer, il lui faut des sapins : dix boules de Noël en font un, et chaque niveau de Noël en fait tomber quelques-unes.";
const XSTORY = {
  2: "Les rues sentent la cannelle et les marrons chauds. Des enfants courent en tirant leurs parents par la manche, des guirlandes clignotent aux balcons. Zeni longe les murs pour ne gêner personne. Chaque pas qu’il fait résonne un peu plus fort que le précédent : ce soir, la ville est pleine, et lui est tout seul.",
  4: "Au détour d’une rue, une fenêtre éclairée. Autour d’une grande table, une famille rit, passe les plats, se dispute la dernière papillote. Zeni pose son front contre la vitre froide. Il y a une chaise de trop, là-dedans, mais ce n’est pas pour lui. Sa gorge se serre, et la buée de son souffle efface la scène.",
  6: "Il finit par s’asseoir sur un banc, la neige lui montant aux genoux. Pas de maison, pas de cadeau, pas de nom sur aucune étiquette. « À quoi bon continuer à marcher ? » murmure-t-il. Noël lui semble une fête pour les autres, un grand spectacle dont il n’a pas le billet. Il n’a jamais été aussi désespéré, ni aussi fatigué d’espérer.",
  8: "La nuit s’allonge. Zeni compte ce qu’il a perdu : les matins où il attendait d’aller mieux, les soirs où il attendait d’être prêt, les jours qu’il a laissés passer, bien emballés, sans jamais les ouvrir. « Combien en ai-je gâché ? » Plus il compte, plus son sac est lourd. C’est le moment le plus sombre du voyage, et pourtant, tout au fond de lui, quelque chose frémit.",
  10: "Au bout d’une ruelle, une guirlande oubliée sur une branche. Toutes ses ampoules sont éteintes, sauf une : une toute petite lumière rouge, têtue, qui clignote dans le vent. Elle ne demande rien à personne. Elle brille, c’est tout. Zeni la regarde longtemps. Quelque chose de tiède se pose sur ses épaules, et il se lève, sans trop savoir pourquoi.",
  12: "Sur un terrain vague, un sapin de travers, trop maigre pour qu’on l’ait jamais choisi. Personne ne l’a décoré, et pourtant il est là, vert sous la neige, tourné vers le ciel. Zeni lui accroche sa première boule. « Tu n’as pas besoin qu’on te regarde pour être un sapin », dit-il, et il comprend que la phrase lui était aussi un peu destinée.",
  14: "Une boulangère baisse son rideau de fer. Elle voit Zeni, ne pose aucune question et lui glisse dans la main un petit pain encore brûlant : « Joyeux Noël. » C’est tout. Zeni mange, assis sur le trottoir, et la chaleur descend jusqu’à ses orteils. Il y a des cadeaux qui ne s’emballent pas : un geste, un sourire, un matin qui sent bon le pain.",
  16: "Sur la place, la grande horloge approche de minuit. Zeni la regarde tourner. Chaque jour qui passe est un cadeau, pense-t-il, qu’on déballe ou qu’on laisse dans son papier. Il en a laissé tant sans les ouvrir ! Mais celui d’aujourd’hui est encore là, entier, avec ses flocons et son petit pain chaud. Il décide de ne plus rien remettre à plus tard.",
  18: "Les cloches sonnent. Zeni se met à courir, les bras grands ouverts, il dessine un ange dans la neige, glisse sur les pavés gelés, rit tout seul, puis rit plus fort. Il n’a ni maison ni invité, mais il a ce soir, tout entier, et pour la première fois depuis longtemps il n’en laisse pas une miette. Il est vivant, et ça se voit à ses joues rouges.",
  20: "En haut de la colline, il retrouve le sapin tordu, que le vent a rempli de neige scintillante. Zeni y accroche sa dernière boule. Il sait maintenant que le plus beau cadeau n’était ni une maison ni quelqu’un pour l’attendre : c’était d’être là, de vivre pleinement chaque jour, sans regretter aucun de ceux qui passent. Autour de lui, les fenêtres brillent. Demain, peut-être, l’une d’elles s’ouvrira. Mais ce soir, il est déjà comblé. Joyeux Noël, Zeni.",
  22: "Le lendemain, la ville dort sous une neige toute neuve. Zeni se réveille sur son banc, un peu transi mais étrangement léger. Pour la première fois, il ne compte pas ce qui lui manque : il compte les flocons sur sa manche, les petites traces d’oiseaux, la fumée qui monte des cheminées. Le jour est neuf, et il est à lui.",
  24: "Il retourne voir la boulangère, rien que pour lui dire merci. Elle lui tend un tablier : « J’ai besoin de bras pour les fêtes. » Zeni pétrit, rit, se brûle un doigt, recommence. Le soir venu, il a de la farine jusqu’aux oreilles et le cœur tout plein. Il n’a rien attendu : il a simplement dit oui.",
  26: "Avec les enfants du quartier, il décore le sapin tordu du terrain vague. Chacun apporte quelque chose : un ruban, un bouchon brillant, une étoile en papier. Le sapin n’a jamais été aussi beau, ni aussi bancal. Zeni comprend que la joie se partage comme les biscuits : plus on en donne, plus il en reste.",
  28: "La veille du Nouvel An, la ville compte à rebours. Zeni n’a toujours pas de maison, mais il connaît maintenant des prénoms, des sourires, une porte où frapper. Sur un bout de papier, il écrit tout ce qu’il a vécu de beau depuis Noël, et la liste déborde de la feuille.",
  30: "Minuit sonne et des feux d’artifice s’ouvrent au-dessus du fleuve. Zeni ne fait pas de vœu pour plus tard : il promet seulement de vivre chaque jour pleinement, les lumineux comme les gris, sans en regretter un seul. Quelqu’un lui prend la main, puis un autre. Une nouvelle année commence, et Zeni l’ouvre comme on ouvre un cadeau.",
};
const XR = 3;
let xFr = 0;
const xmAll = () => {
  try {
    return sxOn();
  } catch (e) {
    return !1;
  }
};
const sxOk = (e) => xmasOn() && (e.p >= 10 || UNL());
const sxOn = () => "xm" === st.get("sty:s", "main") && sxOk(styRead());
const xDust = (e) => (UNL() ? 1e6 : (e.xe || 0) - 10 * (e.xp || 0));
const xGain = (e = 1) => {
  const t = styRead();
  ((t.xe = (t.xe || 0) + Math.max(1, 0 | e)), styWrite(t));
};
const xFragH = (e) =>
  `<small>ch.${e / 2} · ${XTL()[e / 2 - 1].t}</small><p class="sfq">${XTL()[e / 2 - 1].x}</p>`;
let XG = null;
function XN() {
  const m = st.get("xm:mode", "");
  return "calm" === m ? 20 : "reg" === m ? 40 : 30;
}
function XMS() {
  const n = XN();
  return 20 === n ? [6, 14, 20] : 40 === n ? [14, 26, 40] : [10, 20, 30];
}
function XM(l) {
  return XMS()[l / 10 - 1] || l;
}
const XNEW = {
  "a": [
    "Le marchand de marrons",
    "Au coin d’un carrefour, un marchand de marrons souffle sur ses braises. La fumée sent la forêt et l’enfance. Zeni s’arrête, les mains tendues vers la chaleur, sans oser rien demander. L’homme lui sourit d’un air distrait et sert le client suivant. Zeni repart les doigts tièdes, un peu moins seul qu’avant.",
  ],
  "b": [
    "Le chant sous le porche",
    "Sous un porche, des enfants chantent un vieux chant de Noël, un peu faux, un peu trop fort, et personne n’en rit. Zeni s’assoit sur une marche et se surprend à fredonner. Sa voix tremble d’abord, puis tient. Chanter faux compte aussi : l’important, c’est de ne pas rester muet.",
  ],
  "c": [
    "La lettre sans adresse",
    "Zeni trouve une boîte aux lettres rouge couverte de givre. Il écrit une lettre, mais pas pour demander quoi que ce soit : seulement pour dire merci, à la lumière têtue, au petit pain chaud, à la nuit elle-même. Il la glisse dans la fente, sans adresse. Quelque part, il en est sûr, elle arrivera.",
  ],
  "d": [
    "Le bonhomme de neige",
    "Les enfants du quartier l’appellent : il manque un bras au bonhomme de neige qu’ils construisent. Zeni cherche une branche, la plante, ajuste l’écharpe. « Il te ressemble ! » rigole une petite fille. Zeni regarde le bonhomme et son sourire de cailloux, et pour une fois, il trouve que ça lui va bien.",
  ],
  "e": [
    "La table dressée",
    "À la boulangerie, la boulangère installe une longue table pour le réveillon de ceux qui n’ont personne. Elle dispose une assiette, puis une autre. « Celle-là, c’est la tienne », dit-elle. Zeni s’assoit, les joues brûlantes, et pour la première fois depuis longtemps, la chaise de trop est pour lui.",
  ],
};
function XTL() {
  const n = XN(),
    L =
      20 === n
        ? [1, 3, 4, 5, 6, 7, 9, 10, 13, 15]
        : 40 === n
          ? [1, 2, "a", 3, 4, 5, 6, "b", 7, 8, 9, "c", 10, 11, 12, "d", 13, "e", 14, 15]
          : Array.from({ length: 15 }, (e, t) => t + 1);
  return L.map((e) =>
    "number" == typeof e ? { t: XCH[e - 1], x: XSTORY[2 * e] } : { t: XNEW[e][0], x: XNEW[e][1] },
  );
}
function xmSnap() {
  st.get("xm:mode", "") || st.set("xm:mode", "calm" === APM() ? "calm" : "reg");
}
function xGeo() {
  const NN = XN();
  if (XG && XG.n === NN) return XG;
  const e = [],
    t = [],
    a = [];
  for (let t = 0; t <= NN; t++) {
    const a = t / NN;
    e.push([195 + 105 * Math.sin(a * Math.PI * 4.4 + 0.5) * (1 - 0.12 * a), 4765 - 4465 * a]);
  }
  const s = (e, t, a, s, n) =>
    0.5 * (2 * t + (-e + a) * n + (2 * e - 5 * t + 4 * a - s) * n * n + (3 * t - e - 3 * a + s) * n * n * n);
  for (let n = 0; n < NN; n++) {
    const o = e[Math.max(n - 1, 0)],
      i = e[n],
      r = e[n + 1],
      l = e[Math.min(n + 2, NN)];
    a[n] = t.length;
    for (let e = 0; e < 12; e++) {
      const a = e / 12;
      t.push([s(o[0], i[0], r[0], l[0], a), s(o[1], i[1], r[1], l[1], a)]);
    }
  }
  return ((a[NN] = t.length), t.push(e[NN]), (XG = { n: NN, H: 4940, NXY: e, pts: t, nodeIx: a }));
}
const XD = {
  shd: (e, t) =>
    `<ellipse cx="0" cy="2" rx="${(1.15 * t).toFixed(1)}" ry="${(0.34 * t).toFixed(1)}" fill="url(#syshd${e})"/>`,
  pine: (e, t) =>
    `<g transform="scale(${t.toFixed(2)})">${XD.shd(e.m, 30)}<rect x="-5" y="-16" width="10" height="16" rx="3" fill="url(#sywd${e.m})"/>${STIER(40, 26, -12, e.c[1])}${STIER(36, 21, -38, scMix(e.c[1], e.c[0], 0.5))}${STIER(32, 15, -62, e.c[0])}${SSNOW(40, 26, -12) + SSNOW(36, 21, -38) + SSNOW(32, 15, -62)}${SHL(-8, -80, 4, 7, -20, 0.3)}</g>`,
  chalet: (e, t, a) => {
    const s = e.night,
      n = `url(#xwl${a % 2}${e.m})`,
      o = `url(#xrf${a % 2}${e.m})`,
      i = s ? "#ffe08a" : "#ffd36b";
    return `<g transform="scale(${t.toFixed(2)})">${XD.shd(e.m, 40)}<rect x="20" y="-74" width="10" height="22" rx="3" fill="${s ? "#5a4a6e" : "#9a6a58"}"/><path d="M18 -75h14" stroke="#fff" stroke-width="7" stroke-linecap="round"/>${s ? "" : '<g fill="#fff" opacity=".55"><circle cx="27" cy="-86" r="4"/><circle cx="31" cy="-96" r="5.4"/><circle cx="27" cy="-108" r="6.6"/></g>'}<rect x="-32" y="-44" width="64" height="44" rx="7" fill="${n}"/><path d="M-32 -12h64" stroke="#000" stroke-opacity=".07" stroke-width="2"/><path d="M-42 -40L0 -72L42 -40Z" fill="${o}" stroke="${o}" stroke-width="10" stroke-linejoin="round"/><path d="M0 -74L22 -57Q16 -52 10 -56Q4 -50 -2 -55Q-9 -50 -14 -56Q-19 -52 -22 -57Z" fill="#fff" stroke="#fff" stroke-width="5" stroke-linejoin="round"/><path d="M-45 -38H45" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/><g fill="#fff"><circle cx="-34" cy="-35" r="2.2"/><circle cx="-12" cy="-34.5" r="2.6"/><circle cx="14" cy="-35" r="2"/><circle cx="33" cy="-34.5" r="2.4"/></g>${SHL(-14, -58, 12, 4, -36, 0.45)}${s ? `<circle cx="0" cy="-22" r="46" fill="url(#sygl${e.m})" opacity=".45"/>` : ""}<rect x="-23" y="-31" width="14" height="13" rx="4" fill="${i}"/><rect x="9" y="-31" width="14" height="13" rx="4" fill="${i}"/><path d="M-16 -31v13M-23 -24.5h14M16 -31v13M9 -24.5h14" stroke="#7a4a3a" stroke-width="1.6" opacity=".55"/><path d="M-24 -17h16M8 -17h16" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/><path d="M-7 0V-14a7 7 0 0 1 14 0V0Z" fill="${s ? "#3e2c4c" : "#8a4f3c"}"/><circle cx="4" cy="-7" r="1.2" fill="#ffd36b"/><path d="M-10 -16q10 -8 20 0" fill="none" stroke="#2f8a52" stroke-width="3.2" stroke-linecap="round"/><circle cx="0" cy="-14" r="2.2" fill="#e8434f"/>${SHL(-24, -40, 8, 3, 0, 0.25)}</g>`;
  },
  lamp: (e, t) => {
    const a = e.night;
    return `<g transform="scale(${t.toFixed(2)})">${XD.shd(e.m, 12)}<ellipse cx="0" cy="-3" rx="9" ry="3.6" fill="${a ? "#3a3a6a" : "#4a4a70"}"/><rect x="-2.6" y="-60" width="5.2" height="58" rx="2.6" fill="url(#xpo${e.m})"/><circle cx="0" cy="-74" r="${a ? 34 : 22}" fill="url(#sygl${e.m})" opacity="${a ? 1 : 0.6}"/><rect x="-8" y="-82" width="16" height="18" rx="4" fill="${a ? "#ffe9a0" : "#fff3c8"}" stroke="${a ? "#3a3a6a" : "#4a4a70"}" stroke-width="2.4"/><path d="M-11 -82Q0 -94 11 -82Z" fill="${a ? "#3a3a6a" : "#4a4a70"}" stroke="${a ? "#3a3a6a" : "#4a4a70"}" stroke-width="3" stroke-linejoin="round"/><path d="M-10 -84Q0 -94 10 -84" fill="none" stroke="#fff" stroke-width="3.6" stroke-linecap="round"/><path d="M-4 -60q4 4 8 0" fill="none" stroke="#e8434f" stroke-width="3" stroke-linecap="round"/><circle cx="0" cy="-58" r="2" fill="#2f8a52"/>${SHL(-4, -77, 2, 4, 0, 0.5)}</g>`;
  },
  gift: (e, t, a) => {
    const s = [
      ["#e8434f", "#ffd45a"],
      ["#3b9be0", "#ffffff"],
      ["#3fb36b", "#e8434f"],
    ][a % 3];
    return `<g transform="scale(${t.toFixed(2)})">${XD.shd(e.m, 14)}<rect x="-12" y="-20" width="24" height="20" rx="4" fill="${s[0]}"/><rect x="-14" y="-25" width="28" height="7" rx="3" fill="${scLt(s[0], 0.12)}"/><path d="M0 -25V0" stroke="${s[1]}" stroke-width="4"/><path d="M0 -25q-9 -9 -9 -2q0 3 9 2q9 1 9 -2q0 -7 -9 2" fill="none" stroke="${s[1]}" stroke-width="2.6" stroke-linejoin="round"/><path d="M-14 -25h28" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".9"/>${SHL(-7, -15, 3, 5, 0, 0.35)}</g>`;
  },
  pond: (e, t, a) => {
    const s = e.night;
    return `<ellipse cx="0" cy="4" rx="${t + 10}" ry="${a + 7}" fill="url(#xmd${e.m})"/><ellipse rx="${t + 8}" ry="${a + 5}" fill="url(#xmn${e.m})"/><ellipse cy="2" rx="${t}" ry="${a}" fill="url(#xic${e.m})"/><path d="M${0.55 * -t} ${0.1 * -a}q${0.3 * t} ${0.5 * -a} ${0.62 * t} ${0.1 * -a}t${0.5 * t} ${0.2 * a}M${0.3 * -t} ${0.35 * a}q${0.35 * t} ${0.35 * -a} ${0.7 * t} 0" fill="none" stroke="#fff" stroke-width="1.6" opacity="${s ? 0.35 : 0.7}" stroke-linecap="round"/>${SHL(0.35 * -t, 0.3 * -a, 0.28 * t, 0.14 * a, -6, s ? 0.25 : 0.6)}${SHL(0.3 * t, 0.25 * a, 0.14 * t, 0.08 * a, -6, s ? 0.2 : 0.45)}`;
  },
  kiosk: (e, t) => {
    const a = e.night,
      s = `url(#xrf0${e.m})`,
      n = a ? "#cfc6e6" : "#fff7ee",
      o = ["#e8434f", "#f2b632", "#3b9be0", "#3fb36b", "#c25be0"];
    let i = "";
    for (let t = 0; t < 9; t++) {
      const s = t / 8,
        n = 80 * s - 40,
        r = 7 * Math.sin(s * Math.PI) - 64;
      i +=
        (a ? `<circle cx="${n.toFixed(1)}" cy="${r.toFixed(1)}" r="5" fill="url(#sygl${e.m})"/>` : "") +
        `<circle cx="${n.toFixed(1)}" cy="${r.toFixed(1)}" r="2.3" fill="${o[t % 5]}"/>`;
    }
    return `<g transform="scale(${t})">${XD.shd(e.m, 48)}<ellipse cy="-4" rx="52" ry="12" fill="${a ? "#4a4a7a" : "#b9a7c4"}"/><ellipse cy="-8" rx="50" ry="11" fill="${a ? "#6a6a9a" : "#e6dbe8"}"/><path d="M-50 -8Q0 -2 50 -8" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>${[-38, -13, 13, 38].map((e) => `<rect x="${e - 3}" y="-66" width="6" height="58" rx="3" fill="${n}"/>`).join("")}<path d="M-40 -28h80" stroke="${n}" stroke-width="3"/>${[-30, -20, -5, 5, 20, 30].map((e) => `<path d="M${e} -28v-8" stroke="${n}" stroke-width="2"/>`).join("")}<path d="M-56 -64L0 -102L56 -64Z" fill="${s}" stroke="${s}" stroke-width="10" stroke-linejoin="round"/><path d="M0 -104L26 -86Q19 -81 12 -85Q5 -79 -2 -84Q-10 -79 -16 -85Q-22 -81 -26 -86Z" fill="#fff" stroke="#fff" stroke-width="5" stroke-linejoin="round"/><path d="M-60 -62H60" stroke="#fff" stroke-width="5" stroke-linecap="round"/>${SHL(-20, -82, 14, 4, -34, 0.4)}${i}<circle cy="-110" r="12" fill="url(#sygl${e.m})"/><polygon points="${sStar(0, -110, 7, 3.2)}" fill="url(#systd${e.m})" stroke="#ffc83d" stroke-width="2" stroke-linejoin="round"/></g>`;
  },
  bush: (e, t, a) => {
    const s = e.night,
      n = ["#ffd45a", "#e8434f", "#ffffff"];
    return `<g transform="scale(${t})">${XD.shd(e.m, 20)}<circle cx="-13" cy="-10" r="11" fill="url(#xfo${e.m})"/><circle cx="13" cy="-9" r="10" fill="url(#xfo${e.m})"/><circle cy="-16" r="14" fill="url(#xfo${e.m})"/><path d="M-22 -14Q-12 -30 0 -30Q12 -30 22 -14Q12 -20 0 -20Q-12 -20 -22 -14Z" fill="#fff"/>${[
      [-14, -8],
      [-4, -12],
      [8, -7],
      [15, -14],
      [-9, -18],
    ]
      .map(
        ([t, o], i) =>
          (s ? `<circle cx="${t}" cy="${o}" r="4.5" fill="url(#sygl${e.m})"/>` : "") +
          `<circle cx="${t}" cy="${o}" r="1.8" fill="${n[(i + a) % 3]}"/>`,
      )
      .join("")}</g>`;
  },
  fence: (e, t) => {
    const a = e.night ? "#3a3a62" : "#4a4a6e";
    let s = `<path d="M0 -12H${t}M0 -24H${t}" stroke="${a}" stroke-width="2.6"/><path d="M0 -26H${t}" stroke="#fff" stroke-width="3.6" stroke-linecap="round"/>`;
    for (let e = 0; e <= t; e += 16)
      s += `<rect x="${e - 1.4}" y="-30" width="2.8" height="30" rx="1.4" fill="${a}"/><circle cx="${e}" cy="-32" r="2.6" fill="${a}"/><circle cx="${e}" cy="-34" r="2.3" fill="#fff"/>`;
    return s;
  },
  mound: (e, t, a, s, n) =>
    `<ellipse cx="${t}" cy="${a + 0.35 * n}" rx="${s}" ry="${0.9 * n}" fill="url(#xmd${e.m})"/><ellipse cx="${t}" cy="${a}" rx="${s}" ry="${n}" fill="url(#xmn${e.m})"/>${SHL(t - 0.3 * s, a - 0.35 * n, 0.42 * s, 0.28 * n, -6, e.night ? 0.12 : 0.5)}`,
};
function xMapSVG(e, t) {
  const a = "n" === t,
    s = xGeo(),
    { H: n, NXY: o, pts: i, nodeIx: r } = s,
    l = e.xp || 0,
    c = (e) => {
      const t = 43758.5453 * Math.sin(127.1 * e + 311.7);
      return t - Math.floor(t);
    };
  SGY = { pts: i, nodeIx: r, NXY: o, vb0: 0, R: 3, cur: [o[l][0], o[l][1]] };
  const d = a ? ["#5a3563", "#2b2655", "#141840", "#0c0f2e"] : ["#fff2d8", "#efdcea", "#cbd6ec", "#a9b6d6"],
    f = a ? "#8f9ddb" : "#dbe7f8",
    u = (e) => (a ? scMix(e, "#232a68", 0.42) : e),
    h = { m: t, night: a, c: a ? ["#3f8a8a", "#1d4f55"] : ["#7fd9bb", "#3f9a7d"] },
    p = (e, a, s, n = 'x1="0" y1="0" x2="0" y2="1"') =>
      `<linearGradient id="${e}${t}" ${n}><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${s}"/></linearGradient>`,
    m = (e, a, s) =>
      `<radialGradient id="${e}${t}" cx=".38" cy=".3" r=".85"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${s}"/></radialGradient>`;
  let b =
    `<defs>${SDEFS(t)}<linearGradient id="xsk${t}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${d[0]}"/><stop offset=".38" stop-color="${d[1]}"/><stop offset=".72" stop-color="${d[2]}"/><stop offset="1" stop-color="${d[3]}"/></linearGradient><radialGradient id="xgl${t}"><stop offset="0" stop-color="#ffd27a" stop-opacity="${a ? 0.55 : 0.5}"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></radialGradient>` +
    p("xwl0", u("#f7dcc0"), u("#d9a882")) +
    p("xwl1", u("#f4e6d2"), u("#c9b298")) +
    p("xrf0", u("#e0645a"), u("#a8383a")) +
    p("xrf1", u("#4f9a7a"), u("#2a6a56")) +
    p("xpo", "#6a6a92", "#3a3a5e", 'x1="0" y1="0" x2="1" y2="0"') +
    m("xmn", a ? "#c3ccf2" : "#ffffff", a ? "#7a86c8" : "#d4e0f4") +
    p("xmd", a ? "#5a64a6" : "#b9c6e4", a ? "#3a4280" : "#9aa8d0") +
    m("xbl", a ? "#9aa6e0" : "#ffffff", a ? "#5a64a6" : "#c7d4ee") +
    m("xic", a ? "#8fa6dc" : "#e8f6ff", a ? "#46578f" : "#9ccbe8") +
    m("xfo", a ? "#3f8a8a" : "#8fe0c2", a ? "#1d4f55" : "#3f9a7d") +
    `</defs><ellipse cx="195" cy="${n + 60}" rx="300" ry="90" fill="${f}" opacity=".6"/><circle cx="${o[XN()][0]}" cy="${o[XN()][1] - 60}" r="340" fill="url(#xgl${t})"/>`;
  if (a) {
    for (let e = 0; e < 7; e++)
      b += `<ellipse cx="${(390 * c(e + 90)).toFixed(0)}" cy="${(150 + (e * (0.7 * n)) / 7 + 120 * c(e + 95)).toFixed(0)}" rx="${(140 + 110 * c(e + 99)).toFixed(0)}" ry="${(80 + 70 * c(e + 103)).toFixed(0)}" fill="url(#synb${e % 3}n)"/>`;
    let e = "";
    for (let t = 0; t < 110; t++)
      e += `<circle cx="${(390 * c(t)).toFixed(0)}" cy="${(c(t + 0.3) * n * 0.7).toFixed(0)}" r="${(0.8 + 1.5 * c(t + 9)).toFixed(1)}" opacity="${(0.45 + 0.5 * c(t + 5)).toFixed(2)}"${t % 7 == 0 ? ` class="stw" style="animation-delay:-${(3 * c(t + 13)).toFixed(1)}s"` : ""}/>`;
    b += `<g fill="#fff">${e}</g><circle cx="318" cy="150" r="60" fill="#fff6d8" opacity=".12"/><path d="M326 122A30 30 0 1 0 326 178A22 22 0 1 1 326 122Z" fill="#fff6d8"/>`;
  } else {
    b += `<circle cx="316" cy="150" r="44" fill="url(#sygl${t})" opacity=".6"/><circle cx="316" cy="150" r="26" fill="#fff8dc"/>`;
    for (let e = 0; e < 9; e++)
      b += `<g transform="translate(${(390 * c(e)).toFixed(0)} ${(200 + 210 * e + 60 * c(e + 3)).toFixed(0)}) scale(${(1 + 0.6 * c(e + 7)).toFixed(2)})" opacity=".85">${SK.cloud.f({ night: 0 })}</g>`;
  }
  for (let e = 0, t = 420; t < n; e++, t += 250) {
    const a = e % 2 == 0;
    b += XD.mound(h, a ? -20 : 410, t, 200, 72) + XD.mound(h, a ? 10 : 380, t + 40, 150, 50);
  }
  const g = (e) => {
      for (let t = 0; t < XN(); t++) {
        const a = o[t],
          s = o[t + 1];
        if (e <= a[1] && e >= s[1]) return a[0] + ((s[0] - a[0]) * (a[1] - e)) / (a[1] - s[1]);
      }
      return 195;
    },
    E = i.map((e, t) => (t ? "L" : "M") + e[0].toFixed(1) + " " + e[1].toFixed(1)).join("");
  ((b += sRibbon(E, { p: a ? ["#aab6ea", "#7684c8", "#cfd8f8"] : ["#ffffff", "#cfe0f5", "#f6faff"] }, a)),
    l > 0 &&
      (b += `<path d="${i
        .slice(0, r[l] + 1)
        .map((e, t) => (t ? "L" : "M") + e[0].toFixed(1) + " " + e[1].toFixed(1))
        .join(
          "",
        )}" fill="none" stroke="${a ? "#ffd86b" : "#ffc83d"}" stroke-width="5.5" stroke-dasharray="0.1 12" stroke-linecap="round"/>`));
  const y = [],
    v = (e, t, a) =>
      y.push({ y: t, h: `<g transform="translate(${e.toFixed(1)} ${t.toFixed(1)})">${a}</g>` });
  for (let e = 0, t = n - 110; t > 120; e++, t -= 62 + 34 * c(e)) {
    const a = g(t),
      s = c(e + 2) < 0.5 ? -1 : 1;
    let n = a + s * (105 + 55 * c(e + 4));
    ((n < 18 || n > 372) && (n = a - s * (105 + 55 * c(e + 4))),
      (n = Math.max(16, Math.min(374, n))),
      v(n, t, XD.pine(h, (82 + 52 * c(e + 6)) / 100)));
  }
  for (let e = 0, t = n - 330; t > 300; e++, t -= 300) {
    let a = g(t) + (e % 2 ? -1 : 1) * (120 + 20 * c(e + 11));
    ((a = Math.max(50, Math.min(340, a))), v(a, t + 4, XD.chalet(h, (64 + 18 * c(e + 13)) / 64, e)));
  }
  for (let e = 0, t = n - 250; t > 200; e++, t -= 190) {
    const a = g(t),
      s = e % 2 ? 1 : -1;
    v(Math.max(14, Math.min(376, a + 58 * s)), t, XD.lamp(h, 0.9));
  }
  for (let e = 0, a = n - 420; a > 380; e++, a -= 380) {
    const s = g(a),
      n = e % 2 ? 1 : -1;
    v(
      Math.max(30, Math.min(360, s + n * (70 + 30 * c(e + 31)))),
      a,
      e % 2
        ? `<g transform="scale(1.15)">${XD.shd(t, 20)}${SK.snowman.f({ m: t })}</g>`
        : XD.gift(h, 1, e) + `<g transform="translate(20 4)">${XD.gift(h, 0.7, e + 1)}</g>`,
    );
  }
  {
    const [e, s] = o[0],
      n = s + 40;
    ((b +=
      XD.mound(h, 195, n + 150, 260, 120) +
      `<path d="M${e} ${s + 6}C${e - 10} ${n + 40} 200 ${n + 80} 195 ${n + 190}" fill="none" stroke="${a ? "#7684c8" : "#cfe0f5"}" stroke-width="30" stroke-linecap="round"/><path d="M${e} ${s + 6}C${e - 10} ${n + 40} 200 ${n + 80} 195 ${n + 190}" fill="none" stroke="${a ? "#aab6ea" : "#ffffff"}" stroke-width="22" stroke-linecap="round"/>`),
      v(108, n + 70, XD.pond(h, 82, 28)),
      v(316, n + 92, XD.kiosk(h, 0.92)),
      v(70, n + 8, XD.lamp(h, 0.85)),
      v(262, n + 168, XD.lamp(h, 0.85)),
      v(30, n + 138, XD.pine(h, 0.95)),
      v(368, n + 12, XD.pine(h, 0.8)),
      v(372, n + 200, XD.pine(h, 1)),
      v(186, n + 28, XD.bush(h, 0.9, 0)),
      v(52, n + 190, XD.bush(h, 1, 1)),
      v(150, n + 150, XD.bush(h, 0.8, 2)),
      v(176, n + 112, `<g transform="scale(1.05)">${XD.shd(t, 20)}${SK.snowman.f({ m: t })}</g>`),
      v(40, n + 232, XD.fence(h, 120)),
      v(230, n + 232, XD.fence(h, 130)),
      v(
        170,
        n + 232,
        `<rect x="-5" y="-48" width="10" height="48" rx="3" fill="${a ? "#3a3a62" : "#4a4a6e"}"/><path d="M-6 -50h12" stroke="#fff" stroke-width="6" stroke-linecap="round"/><circle cy="-56" r="9" fill="url(#sygl${t})"/><circle cy="-56" r="3.4" fill="#ffe08a"/>`,
      ),
      v(
        220,
        n + 232,
        `<rect x="-5" y="-48" width="10" height="48" rx="3" fill="${a ? "#3a3a62" : "#4a4a6e"}"/><path d="M-6 -50h12" stroke="#fff" stroke-width="6" stroke-linecap="round"/><circle cy="-56" r="9" fill="url(#sygl${t})"/><circle cy="-56" r="3.4" fill="#ffe08a"/>`,
      ));
  }
  (y.sort((e, t) => e.y - t.y), (b += y.map((e) => e.h).join("")));
  {
    const [e, s] = o[XN()],
      n = ["#e8434f", "#f2b632", "#3b9be0", "#ffffff", "#e8434f", "#c25be0"];
    let i = "",
      r = "";
    for (let e = 0; e < 16; e++) {
      const s = e % 3,
        o = 0.15 + 0.55 * c(e + 20),
        l = [-14, -40, -64][s] - [32, 30, 26][s] * o * 0.85,
        d = [26, 21, 15][s] * (1 - o) * 0.9,
        f = ((2 * c(e + 40) - 1) * d).toFixed(1),
        u = l.toFixed(1);
      ((i += `<circle cx="${f}" cy="${u}" r="3.4" fill="${n[e % 6]}"/><circle cx="${(f - 1.1).toFixed(1)}" cy="${(u - 1.1).toFixed(1)}" r="1.1" fill="#fff" opacity=".7"/>`),
        a && (r += `<circle cx="${f}" cy="${u}" r="7" fill="url(#sygl${t})" opacity=".7"/>`));
    }
    const l =
      '<path d="M-22 -22Q0 -12 22 -26M-18 -48Q0 -38 18 -50M-12 -72Q0 -64 12 -74" fill="none" stroke="#ffd45a" stroke-width="1.6" stroke-dasharray="0.1 4.4" stroke-linecap="round"/>';
    ((b += `<g transform="translate(${e} ${s + 12}) scale(2.6)">${XD.shd(t, 30)}<rect x="-5" y="-16" width="10" height="16" rx="3" fill="url(#sywd${t})"/>${STIER(40, 26, -12, h.c[1])}${STIER(36, 21, -38, scMix(h.c[1], h.c[0], 0.5))}${STIER(32, 15, -62, h.c[0])}${SSNOW(40, 26, -12) + SSNOW(36, 21, -38) + SSNOW(32, 15, -62)}${l}${r}${i}${SHL(-8, -80, 4, 7, -20, 0.3)}<circle cx="0" cy="-98" r="16" fill="url(#sygl${t})"/><polygon points="${sStar(0, -98, 8.5, 4)}" fill="url(#systd${t})" stroke="#ffc83d" stroke-width="2.4" stroke-linejoin="round"/>${SHL(-2.4, -101, 1.6, 2.6, -20, 0.6)}</g>`),
      (b += `<g transform="translate(${e - 62} ${s + 22})">${XD.gift(h, 1.2, 0)}</g><g transform="translate(${e + 58} ${s + 24})">${XD.gift(h, 1.1, 1)}</g><g transform="translate(${e + 36} ${s + 34})">${XD.gift(h, 0.8, 2)}</g>`));
  }
  {
    const [e, s] = o[0],
      n = a ? "#6a4a5a" : "#a06a42";
    b += `<g transform="translate(${e} ${s})">${XD.shd(t, 30)}<rect x="-26" y="-8" width="5" height="12" rx="2" fill="${a ? "#3a2a40" : "#5a3a24"}"/><rect x="21" y="-8" width="5" height="12" rx="2" fill="${a ? "#3a2a40" : "#5a3a24"}"/><rect x="-32" y="-14" width="64" height="8" rx="4" fill="url(#sywd${t})"/><rect x="-30" y="-30" width="60" height="7" rx="3.5" fill="url(#sywd${t})"/><path d="M-20 -23v9M20 -23v9" stroke="${n}" stroke-width="4" stroke-linecap="round"/><path d="M-32 -15Q0 -21 32 -15" stroke="#fff" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M-30 -31Q0 -38 30 -31" stroke="#fff" stroke-width="5" stroke-linecap="round" fill="none"/>${SHL(-14, -28, 8, 1.4, 0, 0.4)}</g>`;
  }
  b += `<defs>${["#e8434f", "#f2b632", "#3b9be0", "#3fb36b", "#c25be0"].map((e, a) => `<radialGradient id="xbo${a}${t}" cx=".34" cy=".3" r=".8"><stop offset="0" stop-color="${scLt(e, 0.45)}"/><stop offset=".55" stop-color="${e}"/><stop offset="1" stop-color="${scDk(e, 0.35)}"/></radialGradient>`).join("")}<radialGradient id="xbof${t}" cx=".34" cy=".3" r=".8"><stop offset="0" stop-color="${a ? "#7a84c0" : "#e6ebf8"}"/><stop offset="1" stop-color="${a ? "#3d4580" : "#9aa5cc"}"/></radialGradient>${p("xcap", "#fbe7a0", "#b88a2a", 'x1="0" y1="0" x2="1" y2="0"')}</defs>`;
  for (let e = 0; e <= XN(); e++) {
    const [s, n] = o[e],
      i = e <= l,
      r = e > 0 && e % 2 == 0,
      c = r ? 17 : 13,
      d = n - c - 8;
    if (
      ((b += `<g><ellipse cx="${s}" cy="${n + 3}" rx="${c + 6}" ry="5" fill="url(#syshd${t})"/>${e === l ? `<circle cx="${s}" cy="${d}" r="${c + 17}" fill="#fff3b0" opacity="${a ? 0.5 : 0.42}" class="spulse"/>` : ""}${r ? `<circle cx="${s}" cy="${d}" r="${c + 8}" fill="none" stroke="#fff" stroke-width="2.4" stroke-dasharray="0.1 6.4" stroke-linecap="round" opacity=".95"/>` : ""}<path d="M${s} ${d - c - 1}v-6" stroke="#caa648" stroke-width="2"/><rect x="${s - 5}" y="${d - c - 6}" width="10" height="7" rx="2" fill="url(#xcap${t})"/><circle cx="${s}" cy="${d}" r="${c}" fill="url(#${i ? "xbo" + (e % 5) : "xbof"}${t})"/>${i ? `<path d="M${s - c + 1.5} ${d + 2}Q${s} ${d + 0.55 * c} ${s + c - 1.5} ${d + 2}" fill="none" stroke="#fff" stroke-width="2.2" opacity=".5"/>` : ""}${SHL(s - 0.34 * c, d - 0.4 * c, 0.3 * c, 0.17 * c, -30, 0.75)}${sPill(s, n + 5, e || "Départ", i, e ? 22 : 50, t)}</g>`),
      r)
    ) {
      const t = i ? XTL()[e / 2 - 1].t : "ch." + e / 2,
        n = Math.round(6.1 * t.length + 18),
        o = (s < 195 ? 1 : -1) > 0 ? s + c + 12 : s - c - 12 - n;
      b += `<g><rect x="${o}" y="${d - 9}" width="${n}" height="18" rx="9" fill="${a ? "#161a4a" : "#fff"}" opacity="${a ? 0.82 : 0.93}"/><text x="${o + n / 2}" y="${d + 4}" text-anchor="middle" font-size="10" font-weight="700" fill="${i ? (a ? "#ffd86b" : "#9a6200") : a ? "#aab6f0" : "#6a74a6"}">${t}</text></g>`;
    }
  }
  return `<svg id="${a ? "smapn" : "smap"}" class="${a ? "smn" : "smd"}" viewBox="0 0 390 ${n}" style="overflow:visible"${a ? ' aria-hidden="true"' : ` role="img" aria-label="Carte de Noël : étape ${l} sur ${XN()}"`}>${b}</svg>`;
}
function xHud(e) {
  const t = e.xp || 0;
  return `<header class="top shud"><div class="shc" data-a="sstory" role="button" tabindex="0" aria-label="Changer d’histoire"><h1>Histoire</h1><small>Un noël pour Zeni · étape ${t} / ${XN()} ▾</small><span class="sty-bar"><b style="width:${((t / XN()) * 100).toFixed(1)}%"></b></span></div><div class="sht"><div class="chip" title="Bulles">🫧 ${FLX()}</div>${ntBell()}<button class="shb" data-a="sbook" aria-label="Relire l’histoire"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15H7.5A2.5 2.5 0 0 0 5 20.5z"/><path d="M5 20.5A2.5 2.5 0 0 0 7.5 23H19v-5"/><path d="M9 8h6"/></svg></button></div></header>`;
}
function xBar(e) {
  const t = xDust(e),
    a = (e.xp || 0) >= XN(),
    s = Math.floor(t / 10),
    n = t % 10,
    o = `<span class="orb xm" aria-hidden="true"><i>🎄</i>${UNL() ? "" : `<span class="ring">${Array.from({ length: n }, (e, t) => `<u class="on" style="--a:${(360 * t) / n}deg"></u>`).join("")}</span>`}</span>`;
  return `<button class="plfab${PLK && !PLPA ? " on" : ""}" data-a="plr" aria-label="Lecteur de musique"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V6l11-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/></svg></button><div class="sbar" id="sbar"><div class="sbi"><span class="sdr">${o}<b role="img" aria-label="${UNL() ? "sapins illimités" : s + " sapin" + (s > 1 ? "s" : "") + ", " + n + " boule" + (n > 1 ? "s" : "") + " de Noël sur 10 pour le suivant"}">${UNL() ? "∞" : s}<em>${UNL() ? "" : s > 1 ? "sapins" : "sapin"}</em></b></span>${a ? "<small>Joyeux Noël</small>" : ""}</div><button class="btn${!a && t < 10 ? " low" : ""}" data-a="sgo" ${a || sBusy ? "disabled" : ""}>Avancer</button></div>`;
}
function xGo() {
  if (sBusy) return;
  const e = styRead();
  if (((mt = "m"), (e.xp || 0) >= XN())) return sMsg("Joyeux Noël, Zeni.");
  if (xDust(e) < 10) {
    const t = 10 - (xDust(e) % 10);
    return sMsg(
      "Il faut un sapin (10 boules de Noël) : encore " +
        t +
        " boule" +
        (t > 1 ? "s" : "") +
        ". Termine des niveaux de Noël dans les jeux.",
    );
  }
  sBusy = !0;
  const t = e.xp || 0;
  ((e.xp = t + 1), styWrite(e));
  const a = $("#sbar button");
  (a && (a.disabled = !0), sWalk(t, e.xp, () => xArrive(e.xp)));
}
function xArrive(e) {
  sBusy = !1;
  const t = e % 2 == 0,
    a = 1 + (t ? (XN() === e ? 19 + ("reg" === st.get("xm:mode", "") ? 100 : 0) : 4) : 0);
  if (((fl += a), st.set("fl", fl), !$("#smap"))) return void (t && (xFr = e));
  (sfx(t ? 784 : 660, 0.5), vib([20, 40, 20]), dayScreen());
  const M3 = XMS(),
    s = {
      [M3[0]]: "Les décorations de Noël sont débloquées dans la boutique de l’aquarium.",
      [M3[1]]: "Le Poisson Père Noël t’attend dans la boutique de l’aquarium.",
      [M3[2]]: "Le fond « Nuit de Noël » et le Poisson sapin de Noël sont débloqués pour l’aquarium.",
    }[e];
  t
    ? sOv(xFragH(e) + `<p class="sfr-g">+${a} 🫧</p>` + (s ? `<p class="sfr-g">🎁 ${s}</p>` : ""))
    : ((mt = "m"), sMsg("+1 🫧 · étape " + e));
}
((act.sstory = () => {
  const e = styRead(),
    t = sxOn(),
    a = sxOk(e);
  sOv(
    `<small>Choisir l’histoire</small><div class="sch"><button class="sck${t ? "" : " on"}" data-a="spick" data-v="main"><b>Le voyage de Zeni</b><small>${CHP[sCh(e.p)].t} · étape ${e.p} / ${SMX}</small></button><button class="sck${t ? " on" : ""}" data-a="spick" data-v="xm"${a ? "" : " disabled"}><b>🎄 Un noël pour Zeni</b><small>${a ? "Étape " + (e.xp || 0) + " / " + XN() : xmasOn() ? "Se débloque à l’étape 10 du voyage (tu es à l’étape " + e.p + ")" : "🔒 Disponible le 1er décembre"}</small></button></div>`,
    "Fermer",
  );
}),
  (act.spick = (e) => {
    "xm" === e && sxOk(styRead()) && xmSnap();
    ("xm" !== e || sxOk(styRead())) && (st.set("sty:s", "xm" === e ? "xm" : "main"), dayScreen());
  }));
const xVig = (e) => {
  const t = e / 14,
    a = scMix("#1b2150", "#8a5070", t),
    s = scMix("#2a2f70", "#e8a868", t),
    n = "xv" + e;
  let o = "";
  for (let e = 0; e < 14; e++)
    o += `<circle cx="${(300 * (0.5 * Math.sin(91.7 * e) + 0.5)) | 0}" cy="${(70 * (0.5 * Math.sin(37.3 * e) + 0.5)) | 0}" r="1.3" fill="#fff" opacity=".8"/>`;
  return `<svg class="bkv" viewBox="0 0 300 96" aria-hidden="true"><defs><linearGradient id="${n}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${s}"/></linearGradient></defs><rect width="300" height="96" rx="14" fill="url(#${n})"/>${o}<ellipse cx="150" cy="104" rx="190" ry="30" fill="#f4f8ff"/><g>${CHK.pine(70, 92, 64, "#1d4a44", "#2a6a5c", 1)}${CHK.pine(235, 94, 76, "#1d4a44", "#2a6a5c", 1)}${CHK.pine(160, 96, 48, "#1d4a44", "#2a6a5c", 1)}</g><circle cx="${70 + 160 * t}" cy="${60 - 10 * t}" r="${3 + 5 * t}" fill="#ffd45a" opacity="${0.35 + 0.65 * t}"/></svg>`;
};
function xBookS() {
  const e = styRead(),
    t = [];
  for (let a = 2; a <= (e.xp || 0); a += 2) t.push(a);
  const a = t.length < XN() / 2 ? 2 * (t.length + 1) : 0,
    s = [
      { k: "cov" },
      { k: "pro" },
      ...t.map((e) => ({ k: "fr", n: e })),
      a ? { k: "lk", n: a } : { k: "end" },
    ];
  return {
    ks: t,
    P: s,
    tab: "daily",
    bk: bk("day"),
    pg: (e, t, a) =>
      "cov" === e.k
        ? `<div class="bki"><svg viewBox="-32 -34 64 68" width="64" height="68" aria-hidden="true"><path d="M0 -30L-20 -4H-9L-24 18H-6V28H6V18H24L9 -4H20Z" fill="#2f8a62" stroke="#bfe9cf" stroke-width="2.4" stroke-linejoin="round"/><circle cx="-6" cy="2" r="3.4" fill="#e8434f"/><circle cx="8" cy="12" r="3.4" fill="#f2b632"/><polygon points="${sStar(0, -32, 7, 3.2)}" fill="#ffd45a"/></svg><h2>Un noël pour Zeni</h2><p>quinze chapitres, de Noël au Nouvel An</p><p class="bkh">Fais glisser ou touche un bord pour ouvrir</p></div>`
        : "pro" === e.k
          ? `<div class="bki"><span class="bke">Prologue</span>${xVig(0)}<p class="bkt">${XPRO}</p>${a}</div>`
          : "fr" === e.k
            ? `<div class="bki"><span class="bke">ch.${e.n / 2} · ${XTL()[e.n / 2 - 1].t}</span>${xVig(Math.round(((e.n / 2 - 1) * 14) / (XN() / 2 - 1)))}<p class="bkt">${XTL()[e.n / 2 - 1].x}</p>${a}</div>`
            : "lk" === e.k
              ? `<div class="bki"><span class="bke">ch.${e.n / 2}</span><p class="bkt" style="margin-top:34px">Cette page s’écrira plus loin dans la nuit, quand Zeni y sera arrivé.</p>${a}</div>`
              : `<div class="bki"><span class="bke">Joyeux Noël</span><p class="bkt" style="margin-top:34px">Bonne nuit, Zeni. Chaque jour est un cadeau : celui-ci, tu l’as ouvert tout entier.</p>${a}</div>`,
  };
}
function dayScreen() {
  ((cur = null), (origin = "day"), nv("daily"), (mt = "m"), (sBusy = !1), clearTimeout(sMT));
  const e = styRead(),
    t = sxOn();
  xmMus(t);
  try {
    skyChap();
  } catch (e) {}
  app.innerHTML = `<div class="stg" id="stg" data-ph="day"${t ? ' data-x="1"' : ""}><div class="smv" id="smv">${t ? xMapSVG(e, "d") : sMapSVG(e, "d")}${t ? xMapSVG(e, "n") : sMapSVG(e, "n")}<div class="sgy" id="guy"><svg viewBox="-100 -68 130 100" aria-hidden="true">${t ? GUYSVG : GUYAQ}</svg></div></div></div>${t ? xHud(e) : sHud(e)}${aquaRemind()}${xmasOn() && sxOk(e) ? `<button class="xmfl xmmd${t ? " on" : ""}" data-a="xmTog"><span aria-hidden="true">🎄</span>${t ? "Mode normal" : "Mode Noël"}</button>` : ""}<div class="xmfw">${advOn() ? advBtn() : ""}</div><p class="m shm" id="m" role="status" aria-live="polite"></p>${t ? xBar(e) : sBar(e)}`;
  const a = $("#stg"),
    s = SGY.NXY[t ? e.xp || 0 : e.p];
  if (
    (["touchmove", "wheel", "gesturestart"].forEach((e) =>
      a.addEventListener(e, (e) => e.preventDefault(), { passive: !1 }),
    ),
    sSky(),
    sHudPos(),
    sPlace(s[0], s[1]),
    sWide(),
    window.__sRz ||
      ((window.__sRz = 1),
      addEventListener("resize", () => {
        ($("#stg") && sWide(), $("#stg") && SGY && SGY.cur && (sHudPos(), sPlace(SGY.cur[0], SGY.cur[1])));
      })),
    window.__sSk ||
      ((window.__sSk = 1),
      setInterval(() => {
        $("#stg") && sSky();
      }, 6e4),
      document.addEventListener("visibilitychange", () => {
        !document.hidden && $("#stg") && sSky();
      })),
    t && xFr)
  ) {
    const e = xFr;
    ((xFr = 0), sOv(xFragH(e)));
  } else if (t && !st.get("stx:i", 0))
    (st.set("stx:i", 1), sOv(`<small>Prologue</small><p class="sfq">${XPRO}</p>`, "Commencer"));
  else if (!t && sFrag) {
    const e = sFrag;
    ((sFrag = 0), sChap(e / 10));
  } else st.get("sty:i", 0) || 0 !== e.p || 0 !== e.e || (st.set("sty:i", 1), sPro());
}
function sRef() {
  const e = styRead();
  try {
    skyChap();
  } catch (e) {}
  const t = document.createElement("div");
  t.innerHTML = sBar(e);
  const a = $("#sbar"),
    s = t.querySelector("#sbar");
  a && s && a.replaceWith(s);
  document.querySelectorAll(".sgt").forEach((e) => e.remove());
  const n = t.querySelector(".sgt");
  n && (a && s ? $("#sbar").after(n) : 0);
  const o = $(".shc small");
  o && (o.textContent = `${CHP[sCh(e.p)].t} · étape ${e.p} / ${SMX} ▾`);
  const i = $(".sty-bar b");
  i && (i.style.width = ((e.p / SMX) * 100).toFixed(1) + "%");
  const r = $(".shud .chip");
  r && (r.textContent = "🫧 " + FLX());
  sSky();
}
function sArrive(e, f) {
  sBusy = !1;
  const t = e % 5 == 0 && e % 10 != 0;
  let a = 0;
  for (let k = null == f ? e : f + 1; k <= e; k++) a += k % 5 == 0 && k % 10 != 0 ? 6 : 1;
  ((fl += a),
    st.set("fl", fl),
    $("#smap")
      ? (sfx(t ? 784 : 660, 0.5),
        vib([20, 40, 20]),
        sRef(),
        t
          ? ((mt = "m"), sMsg("+" + a + " 🫧 · étape " + e))
          : e % 10 == 0
            ? ((mt = "m"), sMsg(BOSS[sCh(e)].n.replace(/^le/, "Le") + " bloque le chemin."))
            : ((mt = "m"), sMsg("+1 🫧 · étape " + e)))
      : 0);
  try {
    gStepNotify(f, e);
  } catch (x) {}
}
function sGo() {
  if (sxOn()) return xGo();
  if (sBusy) return;
  const e = styRead();
  if (((mt = "m"), styGate(e))) return bossScreen();
  if (e.p >= SMX) return sMsg("Le voyage continue bientôt… d’autres histoires sont à venir ✦");
  if (styDust(e) < 10) {
    const t = 10 - (styDust(e) % 10);
    return sMsg(
      "Il faut une perle (10 fragments de nacre) : encore " +
        t +
        " fragment" +
        (t > 1 ? "s" : "") +
        ". Termine des niveaux dans les jeux.",
    );
  }
  sBusy = !0;
  const t = e.p,
    nd = Math.min(Math.floor(styDust(e) / 10), 10 * (Math.floor(t / 10) + 1) - t, SMX - t);
  ((e.p += Math.max(1, nd)), styWrite(e));
  const a = $("#sbar button");
  (a && (a.disabled = !0), sWalk(t, e.p, () => sArrive(e.p, t)));
}
const bkVig = (e, t) => {
  const a = CHP[e];
  return `<svg class="bkv" viewBox="0 0 300 96" aria-hidden="true"><defs><linearGradient id="bkg${e}${t ? "n" : "d"}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${(t ? SKN : SKD)[e + 1]}"/><stop offset="1" stop-color="${(t ? SKN : SKD)[e]}"/></linearGradient></defs><rect width="300" height="96" rx="14" fill="url(#bkg${e}${t ? "n" : "d"})"/>${t ? '<g fill="#fff"><circle cx="40" cy="22" r="1.4"/><circle cx="92" cy="12" r="1"/><circle cx="262" cy="46" r="1.3"/><circle cx="214" cy="14" r="1"/></g>' : '<ellipse cx="70" cy="26" rx="30" ry="8" fill="#fff" opacity=".7"/>'}<circle cx="236" cy="28" r="13" fill="${t ? "#fff6d8" : "#fff"}" opacity="${t ? 0.95 : 0.85}"/><ellipse cx="150" cy="88" rx="104" ry="20" fill="${a.L[1]}"/><ellipse cx="150" cy="82" rx="104" ry="19" fill="${a.L[0]}"/><path d="M90 80V56M90 66Q78 60 76 46M90 62Q102 56 104 42" stroke="${a.c[1]}" stroke-width="7" stroke-linecap="round" fill="none"/><path d="M90 80V56M90 66Q78 60 76 46M90 62Q102 56 104 42" stroke="${a.c[0]}" stroke-width="4" stroke-linecap="round" fill="none"/><circle cx="76" cy="44" r="4" fill="${a.c[0]}"/><circle cx="104" cy="40" r="4" fill="${a.c[0]}"/><ellipse cx="190" cy="66" rx="7" ry="9" fill="#efe9ff" stroke="#b9acec" stroke-width="1"/><path d="M190 57Q194 51 193 47" stroke="#a79bdc" stroke-width="1.4" fill="none" stroke-linecap="round"/><polygon points="${sStar(193, 45, 4.4, 2.1)}" fill="#ff9a6a"/><path d="M185 66q2 2 4 0M191 66q2 2 4 0" stroke="#4a4290" stroke-width="1" fill="none" stroke-linecap="round"/></svg>`;
};
let BKG = null;
const BKMS = 800;
const BKE = "cubic-bezier(.65,0,.35,1)";
function bkGhost(e) {
  const t = app.getBoundingClientRect(),
    a = document.createElement("div");
  const S = new Map();
  try {
    document.getAnimations().forEach((n) => {
      const l = n.effect && n.effect.target;
      l &&
        n.animationName &&
        l.closest &&
        l.closest(".qfs") &&
        app.contains(l) &&
        (S.get(l) || S.set(l, []).get(l)).push([n.animationName, n.currentTime]);
    });
  } catch (_) {}
  for (
    a.className = "bkg " + (e ? "c" : "o"),
      a.setAttribute("aria-hidden", "true"),
      a.inert = !0,
      a.style.cssText = `left:${t.left}px;top:${t.top}px;width:${t.width}px`;
    app.firstChild;
  )
    a.appendChild(app.firstChild);
  return (
    a.querySelectorAll("[data-a]").forEach((e) => e.removeAttribute("data-a")),
    a
      .querySelectorAll("#bk,#bkc,#vv,input[id],textarea[id],select[id]")
      .forEach((e) => e.removeAttribute("id")),
    e ? document.body.appendChild(a) : app.after(a),
    (() => {
      try {
        document.getAnimations().forEach((n) => {
          const l = n.effect && n.effect.target,
            r = l && S.get(l),
            m = r && n.animationName && r.find((x) => x[0] === n.animationName);
          m && (n.currentTime = m[1]);
        });
      } catch (_) {}
    })(),
    a
  );
}
function bkFly(e, t, a, s) {
  const n = e.getBoundingClientRect(),
    o = Math.max(0.04, t.width / n.width),
    i = `translate(${(t.left + t.width / 2 - n.left - n.width / 2).toFixed(1)}px,${(t.top + t.height / 2 - n.top - n.height / 2).toFixed(1)}px) scale(${o.toFixed(4)})`,
    r = { transform: "none", opacity: 1 },
    l = { transform: i, opacity: 0 };
  return e.animate(
    a ? [r, { ...r, opacity: 1, offset: 0.7 }, l] : [l, { ...r, transform: i, opacity: 1, offset: 0.3 }, r],
    { duration: 800, easing: BKE, fill: s ? "both" : "backwards" },
  );
}
function bkEnd(e, t) {
  let a = 0;
  const s = () => {
      a ||
        ((a = 1),
        clearTimeout(n),
        e.remove(),
        (window.__bkAn = 0),
        window.__bkEnd === s && (window.__bkEnd = null));
    },
    n = setTimeout(s, 1300);
  ((window.__bkEnd = s), (t.onfinish = s), (t.oncancel = s));
}
function bkStop() {
  window.__bkAn &&
    (document.getAnimations().forEach((e) => {
      const t = e.effect && e.effect.getComputedTiming();
      t && 800 === t.duration && t.iterations !== 1 / 0 && e.finish();
    }),
    window.__bkEnd && window.__bkEnd(),
    (window.__bkAn = 0));
}
function bookOpen() {
  if (!sxOn()) return storyBook();
  bkStop();
  const e = $("[data-a=sbook]");
  if (!e || !$("#stg") || wRM || !document.body.animate) return storyBook();
  const t = e.getBoundingClientRect(),
    a = bkGhost(!1);
  storyBook();
  const s = $("#bk");
  s
    ? ((window.__bkAn = 1),
      bkEnd(a, a.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 800, easing: BKE, fill: "forwards" })),
      bkFly(s, t, !1),
      document.querySelectorAll("#app>.top.stk,#app>.bkn").forEach((e) =>
        e.animate([{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }], {
          duration: 800,
          easing: BKE,
          fill: "backwards",
        }),
      ))
    : a.remove();
}
function bookClose() {
  bkStop();
  const e = $("#bk");
  if ("book" !== cur || !e || wRM || !document.body.animate) return dayScreen();
  const t = bkGhost(!0);
  dayScreen();
  const a = $("[data-a=sbook]"),
    s = t.querySelector(".bk");
  if (!a || !s) return void t.remove();
  const n = a.getBoundingClientRect();
  ((window.__bkAn = 1),
    bkEnd(t, bkFly(s, n, !0, !0)),
    t.querySelectorAll(".top.stk,.bkn").forEach((e) =>
      e.animate([{ opacity: 1 }, { opacity: 0, offset: 0.5 }, { opacity: 0 }], {
        duration: 800,
        easing: BKE,
        fill: "forwards",
      }),
    ),
    app.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 800, easing: BKE, fill: "backwards" }));
}
function bkStrip(n) {
  const f = {};
  n.forEach((e, t) => {
    if ("fr" === e.k) {
      const c = sCh(e.n);
      void 0 === f[c] && (f[c] = t);
    }
  });
  const L = [
    [0, "Couverture"],
    [1, "Prologue"],
  ];
  Object.keys(f).forEach((c) => L.push([f[c], "ch." + (+c + 1)]));
  return `<div class="bkch" id="bkch" role="group" aria-label="Aller à un chapitre">${L.map(([i, t]) => `<button type="button" data-i="${i}" aria-label="${t}${CHP[L.length > 0 ? 0 : 0] && /^Chap/.test(t) ? " : " + CHP[+t.slice(9) - 1].t : ""}">${/^Chap/.test(t) ? t.slice(9) : t}</button>`).join("")}</div>`;
}
function storyBook(e) {
  if (!e && !sxOn()) return sBookAll();
  (!e && sxOn() && (e = xBookS()),
    (cur = e ? "dbook" : "book"),
    nv(e && e.tab ? e.tab : e ? "games" : "daily"),
    e && "daily" === e.tab && xmMus(!0));
  const t = e ? null : styRead(),
    a = e
      ? e.ks
      : Object.keys(STORY)
          .map(Number)
          .filter((e) => e <= t.p && (e % 10 != 0 || t.bw >= e)),
    s = e
      ? 0
      : Object.keys(STORY)
          .map(Number)
          .find((e) => !a.includes(e)),
    n = e
      ? e.P
      : [
          { k: "cov" },
          { k: "pro" },
          ...a.map((e) => ({ k: "fr", n: e })),
          s ? { k: "lk", n: s } : { k: "end" },
        ],
    o = n.length,
    i = a.length + 1;
  let r = a.length ? i : 0;
  const l = e
      ? (t, a) => e.pg(t, a, `<span class="bkf">${a} / ${o - 1}</span>`)
      : (e, t) => {
          const a = `<span class="bkf">${t} / ${o - 1}</span>`;
          return "cov" === e.k
            ? `<div class="bki"><svg viewBox="-30 -30 60 60" width="64" height="64" aria-hidden="true"><polygon points="${sStar(0, 0, 24, 11.5)}" fill="#ffd45a" stroke="#ffe9a0" stroke-width="3" stroke-linejoin="round"/></svg><h2>Le voyage du petit bonhomme</h2><p>à la recherche de la paix intérieure</p><p class="bkh">Fais glisser ou touche un bord pour ouvrir</p></div>`
            : "pro" === e.k
              ? `<div class="bki"><span class="bke">Prologue</span>${bkVig(0, 1)}<p class="bkt">${SPRO}</p>${a}</div>`
              : "fr" === e.k
                ? `<div class="bki"><span class="bke">Étape ${e.n} · ${CHP[sCh(e.n)].t}</span>${bkVig(sCh(e.n), 0)}<p class="bkt">${STORY[e.n]}</p>${a}</div>`
                : "lk" === e.k
                  ? `<div class="bki"><span class="bke">Étape ${e.n}</span><p class="bkt" style="margin-top:34px">Cette page s’écrira plus loin sur le chemin, quand le petit bonhomme y sera arrivé.</p>${a}</div>`
                  : `<div class="bki"><span class="bke">Fin du premier voyage</span><p class="bkt" style="margin-top:34px">Bonne nuit, petit bonhomme. D’autres pages viendront.</p>${a}</div>`;
        },
    c = (e) => e < r - 3 || e > r + 3;
  app.innerHTML = `<div class="top stk">${e ? e.bk || '<button class="back" data-a="dbk">‹ Déménagement</button>' : bk("day")}<span class="tl">Le livre</span><div class="tr"><div class="chip">🫧 ${FLX()}</div></div></div><div class="bk" id="bk" role="group" aria-label="Livre de l’histoire">${n.map((e, t) => `<article class="bkp ${e.k}${t < r ? " tn" : ""}${c(t) ? " far" : ""}" data-i="${t}" style="z-index:${t < r ? t + 1 : o - t}"${t === r ? "" : ' aria-hidden="true"'}><div class="bkq bkF">${l(e, t)}${((e) => ("fr" === e.k && e.n === a[a.length - 1] ? '<i class="bkm"></i>' : ""))(e)}</div><div class="bkq bkB" aria-hidden="true"></div></article>`).join("")}</div>${e ? "" : bkStrip(n)}<div class="bkn"><button data-a="bkp" aria-label="Page précédente"${r ? "" : " disabled"}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button><span id="bkc" aria-live="polite"></span><button data-a="bkn" aria-label="Page suivante"${r < o - 1 ? "" : " disabled"}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button></div>`;
  const d = $("#bk"),
    f = () => {
      const e = $("#bkc");
      e && (e.textContent = r ? `Page ${r} / ${o - 1}` : "Couverture");
      const q = $("#bkch");
      if (q) {
        let a = null;
        (q.querySelectorAll("button").forEach((e) => {
          +e.dataset.i <= r && (a = e);
        }),
          q.querySelectorAll("button").forEach((e) => e.classList.toggle("on", e === a)),
          a &&
            q.scrollTo &&
            q.scrollTo({ left: a.offsetLeft - q.clientWidth / 2 + a.offsetWidth / 2, behavior: "smooth" }));
      }
    },
    u = () =>
      d.querySelectorAll(".bkp").forEach((e, t) => {
        e.style.zIndex = t < r ? t + 1 : o - t;
      }),
    h = (e) => {
      if (!$("#bk")) return;
      const t = Math.max(0, Math.min(o - 1, r + e));
      if (t === r) return;
      const a = r;
      ((r = t),
        d.querySelectorAll(".bkp").forEach((e, t) => {
          (t < a != t < r &&
            (e.classList.add("fl"),
            clearTimeout(e._f),
            (e._f = setTimeout(() => {
              (e.classList.remove("fl"), u());
            }, 1050))),
            e.classList.toggle("tn", t < r),
            e.classList.toggle("far", c(t)),
            t === r ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", "true"));
        }),
        u());
      const s = $("[data-a=bkp]"),
        n = $("[data-a=bkn]");
      (s && (s.disabled = !r), n && (n.disabled = r >= o - 1), f(), sfx(330, 0.12), vib(8));
    };
  ((BKG = h), f());
  {
    const q = $("#bkch");
    q &&
      q.addEventListener("click", (e) => {
        const b = e.target.closest("button");
        b && h(+b.dataset.i - r);
      });
  }
  const p = () => {
    const e = $("#bk");
    e &&
      e.querySelectorAll(".bkF .bki").forEach((e) => {
        const t = e.querySelector(".bkt");
        if (!t) return;
        ((t.style.fontSize = ""), (t.style.lineHeight = ""));
        let a = parseFloat(getComputedStyle(t).fontSize);
        for (; e.scrollHeight > e.clientHeight + 1 && a > 12;)
          ((a -= 0.5), (t.style.fontSize = a + "px"), (t.style.lineHeight = "1.5"));
      });
  };
  ((window.__bkFit = p),
    p(),
    document.fonts &&
      document.fonts.ready &&
      document.fonts.ready.then(() => {
        $("#bk") && p();
      }),
    window.__bkR ||
      ((window.__bkR = 1),
      addEventListener("resize", () => {
        $("#bk") && window.__bkFit && window.__bkFit();
      })));
  let m = 0,
    b = 0,
    g = 0;
  (d.addEventListener("pointerdown", (e) => {
    ((m = e.clientX), (b = e.clientY), (g = Date.now()));
  }),
    d.addEventListener("pointerup", (e) => {
      const t = e.clientX - m,
        a = e.clientY - b;
      if (Math.abs(t) > 40 && Math.abs(t) > 1.3 * Math.abs(a)) return h(t < 0 ? 1 : -1);
      if (Math.abs(t) < 10 && Math.abs(a) < 10 && Date.now() - g < 500) {
        const t = d.getBoundingClientRect();
        h(e.clientX - t.left > 0.45 * t.width ? 1 : -1);
      }
    }),
    window.__bkK ||
      ((window.__bkK = 1),
      document.addEventListener("keydown", (e) => {
        $("#bk") &&
          BKG &&
          "INPUT" !== e.target.tagName &&
          ("ArrowRight" === e.key
            ? (e.preventDefault(), BKG(1))
            : "ArrowLeft" === e.key && (e.preventDefault(), BKG(-1)));
      })),
    window.scrollTo(0, 0));
}
const BT = [];
const BF = [392, 440, 523, 587, 659, 784];
function bossScreen() {
  const e = styRead(),
    t = sCh(e.p),
    a = BOSS[t],
    s = a.n.replace(/^le/, "Le"),
    n = [3, 4, 5].map((e) => e + Math.floor(t / 3));
  (BT.splice(0).forEach(clearTimeout), (cur = "boss"), nv("daily"), ($("#nav").hidden = !0), (mt = "m"));
  let o = 0,
    i = [],
    r = 0,
    l = "idle";
  const c = (e, t) =>
      BT.push(
        setTimeout(() => {
          $("#cst") && e();
        }, t),
      ),
    d = (e) => {
      const t = $("#m");
      t && (t.textContent = e);
    };
  app.innerHTML = `<div class="top stk">${bk("day")}<span class="tl">Le gardien</span><div class="tr"><div class="chip">🫧 ${FLX()}</div></div></div><section class="glass play pg-boss" id="bsec"><h2>${s}</h2><p class="bi">${a.i}</p><div class="bdots" id="bdots">${n.map(() => "<i></i>").join("")}</div><div class="cst" id="cst">${BF.map(
    (e, t) => {
      const a = ((60 * t - 90) * Math.PI) / 180;
      return `<button class="cs" data-a="bst" data-v="${t}" aria-label="Perle ${t + 1}" style="left:${(50 + 37 * Math.cos(a)).toFixed(1)}%;top:${(50 + 37 * Math.sin(a)).toFixed(1)}%;--h:${52 * t + 30}"><svg viewBox="-24 -24 48 48" aria-hidden="true"><polygon points="${Array.from({ length: 20 }, (_, i) => (21 * Math.cos((i * Math.PI) / 10)).toFixed(1) + "," + (21 * Math.sin((i * Math.PI) / 10)).toFixed(1)).join(" ")}" /></svg></button>`;
    },
  ).join(
    "",
  )}</div><p class="m" id="m" role="status" aria-live="polite">Prêt ? Regarde bien les perles.</p><button class="btn" id="bgo" data-a="bgo">Commencer</button></section>`;
  const f = (e, t) => {
      const a = document.querySelector('.cs[data-v="' + e + '"]');
      a && (a.classList.add("on"), sfx(BF[e], 0.35), c(() => a.classList.remove("on"), t || 420));
    },
    u = () => {
      const e = [];
      for (let t = 0; t < n[o]; t++) {
        let a;
        do {
          a = (6 * Math.random()) | 0;
        } while (t && a === e[t - 1]);
        e.push(a);
      }
      return e;
    },
    h = () => {
      ((l = "show"),
        d("Regarde bien…"),
        i.forEach((e, t) => c(() => f(e), 500 + 800 * t)),
        c(
          () => {
            ((l = "in"), (r = 0), d("À toi : refais la suite."));
          },
          500 + 800 * i.length,
        ));
    };
  ((act.bgo = () => {
    if ("idle" !== l) return;
    const e = $("#bgo");
    (e && (e.hidden = !0), (i = u()), h());
  }),
    (act.bst = (e) => {
      if ("in" === l) {
        if ((f((e = +e), 260), e !== i[r]))
          return ((l = "show"), d("Pas tout à fait… regarde encore, sans te presser."), void c(h, 1100));
        if (!(++r < i.length)) {
          if (
            ((l = "wait"),
            o++,
            document.querySelectorAll("#bdots i").forEach((e, t) => e.classList.toggle("on", t < o)),
            o < n.length)
          )
            return (
              d("Bien vu ✦ Une autre suite…"),
              void c(() => {
                ((i = u()), h());
              }, 1300)
            );
          c(() => {
            const e = styRead();
            (styGate(e) && ((e.bw = e.p), styWrite(e), (fl += 20), st.set("fl", fl)),
              sfx(784, 0.7),
              vib([30, 60, 30]),
              chip(),
              ($("#bsec").innerHTML =
                `<h2>${s} s’apaise</h2><p class="bi">Le chemin s’ouvre devant le petit bonhomme.</p><p class="big">+20 bulles</p><button class="btn" data-a="bend">Continuer le voyage</button>`));
          }, 700);
        }
      }
    }));
}
Object.assign(act, {
  sgo: sGo,
  sbook: bookOpen,
  bkp: () => BKG && BKG(-1),
  bkn: () => BKG && BKG(1),
  sfx: () => {
    (prMus(!1), document.body.classList.remove("bkon"));
    const e = $("#sfr");
    if (e) {
      const B = e.querySelector("#prb"),
        f = e.__fly;
      if (f && B && B.animate) {
        ((e.id = "sfrx"), (e.style.pointerEvents = "none"));
        e.querySelectorAll(".prp:not(.on)").forEach((x) => (x.style.visibility = "hidden"));
        const C = e.querySelector(".prc,.prcl2");
        e.querySelectorAll(".prc,.prcl2").forEach((x) =>
          x.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 250, fill: "forwards" }),
        );
        B.animate(
          [
            { transform: "none", opacity: 1 },
            { opacity: 1, offset: 0.7 },
            { transform: `translate(${f.dx}px,${f.dy}px) scale(${f.sc}) rotate(-4deg)`, opacity: 0 },
          ],
          { duration: 700, easing: "cubic-bezier(.5,0,.75,.4)", fill: "forwards" },
        );
        const an = e.animate([{ opacity: 1 }, { opacity: 1, offset: 0.4 }, { opacity: 0 }], {
          duration: 700,
          fill: "forwards",
        });
        const t = $("#nav"),
          z = () => {
            (e.remove(), t && ((t.hidden = !1), (t.style.visibility = "")));
          };
        ((an.onfinish = z), setTimeout(z, 900));
        return;
      }
      e.remove();
    }
    const t = $("#nav");
    t && ((t.hidden = !1), (t.style.visibility = ""));
  },
  bend: () => {
    ((sFrag = styRead().p), dayScreen());
  },
});
{
  const e = act.back;
  act.back = (t) => ("day" === t && "book" === cur ? bookClose() : e(t));
}
{
  const e = act.back;
  act.back = (t) => ("mots" === t && "ana" === cur ? hub("mots") : e(t));
}
{
  const e = act.tab,
    t = ["aqua", "games", "daily", "soc", "set"],
    a = 170,
    s = "cubic-bezier(.37,0,.63,1)",
    n = document.documentElement,
    o = (e) => {
      const t = [...e.children];
      return t.some((e) => "stg" === e.id) ? t.filter((e) => "fixed" === getComputedStyle(e).position) : [e];
    },
    i = (e, t, n, i, r, l) =>
      o(e).map((o) =>
        o === e
          ? o.animate(
              [
                { transform: `translateX(${t}px)`, opacity: i },
                { transform: `translateX(${n}px)`, opacity: r },
              ],
              { duration: a, easing: s, fill: l },
            )
          : o.animate(
              [
                { translate: `${t}px 0`, opacity: i },
                { translate: `${n}px 0`, opacity: r },
              ],
              { duration: a, easing: s, fill: l },
            ),
      );
  act.tab = (s) => {
    const B = document.body;
    const o = $("#nav>button.on"),
      r = o ? t.indexOf(o.dataset.v) : -1,
      l = t.indexOf(s);
    if (
      r < 0 ||
      l < 0 ||
      r === l ||
      wRM ||
      "daily" === s ||
      B.classList.contains("calm") ||
      !document.body.animate
    )
      return e(s);
    const R = e(s);
    return (app.animate([{ opacity: 0.25 }, { opacity: 1 }], { duration: 140, easing: "ease-out" }), R);
    const c = l > r ? 1 : -1,
      d = Math.round(Math.min(innerWidth * 0.22, 84)),
      f = bkGhost(!1);
    (n.classList.add("tsl"), e(s));
    const u = () => {
        (f.remove(), document.querySelector(".bkg") || n.classList.remove("tsl"));
      },
      h = i(f, 0, -c * d, 1, 0, "forwards")[0];
    (h && ((h.onfinish = u), (h.oncancel = u)), setTimeout(u, a + 500), i(app, c * d, 0, 0, 1, "backwards"));
  };
}
const skRGB = (e) => [1, 3, 5].map((t) => parseInt(e.slice(t, t + 2), 16));
const skHEX = (e) =>
  "#" +
  e
    .map((e) =>
      Math.max(0, Math.min(255, Math.round(e)))
        .toString(16)
        .padStart(2, "0"),
    )
    .join("");
const skS2L = (e) => ((e /= 255) <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4));
const skL2S = (e) => 255 * (e <= 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055);
function skDark(e) {
  const [t, a, s] = e.map(skS2L),
    n = Math.cbrt(0.4122214708 * t + 0.5363325363 * a + 0.0514459929 * s),
    o = Math.cbrt(0.2119034982 * t + 0.6806995451 * a + 0.1073969566 * s),
    i = Math.cbrt(0.0883024619 * t + 0.2817188376 * a + 0.6299787005 * s),
    r = 0.2104542553 * n + 0.793617785 * o - 0.0040720468 * i,
    l = 1.9779984951 * n - 2.428592205 * o + 0.4505937099 * i,
    c = 0.0259040371 * n + 0.7827717662 * o - 0.808675766 * i,
    d = Math.atan2(c, l),
    f = r - 0.19;
  let u = Math.max(0.06, Math.min(0.105, 3 * Math.hypot(l, c)));
  for (let e = 0; e < 60; e++) {
    const e = u * Math.cos(d),
      t = u * Math.sin(d),
      a = Math.pow(f + 0.3963377774 * e + 0.2158037573 * t, 3),
      s = Math.pow(f - 0.1055613458 * e - 0.0638541728 * t, 3),
      n = Math.pow(f - 0.0894841775 * e - 1.291485548 * t, 3),
      o = [
        4.0767416621 * a - 3.3077115913 * s + 0.2309699292 * n,
        -1.2684380046 * a + 2.6097574011 * s - 0.3413193965 * n,
        -0.0041960863 * a - 0.7034186147 * s + 1.707614701 * n,
      ];
    if (o.every((e) => e >= -0.001 && e <= 1.001)) return o.map(skL2S);
    u *= 0.95;
  }
  return e;
}
const XSKY = [
  ["#f1f4fb", "#e4ebf7"],
  ["#eef3fb", "#e0e9f6"],
  ["#ecf3fa", "#dce8f4"],
  ["#eaf2f9", "#d9e6f2"],
  ["#ebf0fa", "#dbe2f5"],
  ["#edeffa", "#dedff5"],
  ["#efeefa", "#e1ddf3"],
  ["#f0eff9", "#e2dff2"],
  ["#eef0fa", "#dde1f4"],
  ["#f1f1f9", "#e1e3f4"],
  ["#f5f2f7", "#e4e6f5"],
];
let SKC = -1;
function skyChap(e) {
  let t = 0,
    a = !1,
    s = 0;
  try {
    const e = styRead();
    ((t = 0 | e.p), (s = 0 | e.xp), (a = sxOn()));
  } catch (e) {}
  const n = Math.min(XSKY.length - 1, Math.floor((30 * s) / XN()) >> 1),
    o = a ? -10 - n : sCh(t);
  if (o === SKC) return;
  SKC = o;
  const i = SKD.length - 1,
    r = skRGB(a ? XSKY[n][0] : SKD[Math.min(o + 1, i)]),
    l = skRGB(a ? XSKY[n][1] : SKD[o]),
    c = document.body,
    d = { "--sk-t": skHEX(r), "--sk-b": skHEX(l), "--dk-t": skHEX(skDark(r)), "--dk-b": skHEX(skDark(l)) };
  e && (c.style.transition = "none");
  for (const e in d) c.style.setProperty(e, d[e]);
  e && (getComputedStyle(c).backgroundColor, (c.style.transition = ""));
}
(skyChap(!0),
  (act.delAcc = async () => {
    if (!DLA) return ((DLA = !0), othScreen());
    DLA = !1;
    let r = "err";
    try {
      r = await window.__fb.del();
    } catch (e) {}
    ("ok" === r
      ? (accOff(), st.set("sync:acc", !1), shToast("Ton compte et tes données en ligne sont supprimés."))
      : "recent" === r
        ? shToast("Pour ta sécurité, reconnecte-toi puis réessaie.")
        : shToast("Suppression impossible pour l’instant. Réessaie, ou écris-nous."),
      othScreen());
  }),
  (act.adOff = () => {
    (st.set("ads:c", !1), shToast("Consentement aux pubs retiré."), aboutScreen());
  }),
  (act.adPriv = async () => {
    const c = window.CalmosAds;
    let ok = !1;
    try {
      ok = c && c.privacyOptions && (await c.privacyOptions());
    } catch (e) {}
    ok || shToast("Aucun choix à modifier pour l’instant.");
  }),
  (act.adYes = () => {
    st.set("ads:c", !0);
    const e = document.getElementById("adc");
    (e && e.remove(), act.adWatch());
  }),
  (act.adNo = () => {
    const e = document.getElementById("adc");
    e && e.remove();
  }),
  (act.apTerms = () => {
    ((APT = !0), apR());
  }),
  (act.apTermsBack = () => {
    ((APT = !1), apR());
  }),
  (act.apSel = (e) => {
    ((APS = "calm" === e ? "calm" : "reg"), apR());
  }),
  (act.apSet = (e) => {
    st.set("app:wel2", 1);
    apMode("reg");
    const t = document.getElementById("apm");
    (t && t.remove(), playing || home());
  }),
  (act.apPref = (e) => {
    (apMode("reg"), prefScreen());
  }));
const SHOPP = [
  ["p1", 100, "0,99 $", ""],
  ["p2", 350, "2,99 $", "+17 %"],
  ["p3", 700, "4,99 $", "+40 %"],
  ["p4", 2e3, "9,99 $", "Le plus populaire"],
  ["p5", 4500, "19,99 $", "Meilleure valeur"],
];
const SHOPL = {};
const ADS = { client: "", reward: 20, limit: 6, window: 6 * 60 * 60 * 1e3 };
let ADSL = 0;
function adsWindow() {
  const now = Date.now(),
    raw = st.get("ads:w", []),
    list = Array.isArray(raw)
      ? raw.filter((t) => Number.isFinite(t) && t > now - ADS.window && t < now + 6e4).sort((a, b) => a - b)
      : [];
  list.length === (Array.isArray(raw) ? raw.length : 0) || st.set("ads:w", list);
  return list;
}
function adsLeft() {
  return Math.max(0, ADS.limit - adsWindow().length);
}
function adsWait() {
  const t = adsWindow();
  if (t.length < ADS.limit) return "";
  const n = Math.max(1, Math.ceil((t[0] + ADS.window - Date.now()) / 6e4)),
    h = Math.floor(n / 60),
    m = n % 60;
  return h ? h + " h" + (m ? " " + m + " min" : "") : m + " min";
}
function adsMode() {
  if (window.CalmosAds && typeof window.CalmosAds.showRewarded === "function") return "native";
  if (inStore()) return "";
  return ADS.client ? "web" : "";
}
function adsLoad() {
  if (ADSL || adsMode() !== "web") return;
  ADSL = 1;
  window.adsbygoogle = window.adsbygoogle || [];
  window.adBreak = window.adConfig = function (o) {
    window.adsbygoogle.push(o);
  };
  const s = document.createElement("script");
  s.async = !0;
  s.crossOrigin = "anonymous";
  s.src =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(ADS.client);
  s.dataset.adFrequencyHint = "30s";
  s.onerror = () => {
    ADSL = -1;
  };
  document.head.appendChild(s);
  adConfig({ preloadAdBreaks: "on", sound: "on" });
}
function adsMute(m) {
  try {
    AC && (m ? AC.suspend() : AC.resume());
  } catch (e) {}
}
function adsGrant() {
  const d = adsWindow();
  if (d.length >= ADS.limit) return adsCard();
  (d.push(Date.now()), st.set("ads:w", d), (fl = Math.min(1e8, fl + ADS.reward)), st.set("fl", fl));
  try {
    chip();
  } catch (e) {}
  shToast("+" + ADS.reward + " 🫧 — merci d’avoir regardé !");
  try {
    schedulePush();
  } catch (e) {}
  adsCard();
}
function adsCard() {
  const e = document.getElementById("shad");
  if (!e) return;
  const m = adsMode(),
    l = adsLeft();
  e.innerHTML = `<span class="shai">🎬</span><span class="shat"><b>Regarder une pub</b><small>${m ? (l ? "+" + ADS.reward + " 🫧 · " + l + " pub" + (l > 1 ? "s" : "") + " disponible" + (l > 1 ? "s" : "") + " sur 6 h" : "Limite atteinte · de nouveau dans " + adsWait()) : "Bientôt disponible"}</small></span><button class="shab" data-a="adWatch" data-net${m && l ? "" : " disabled"}>${m ? (l ? "+" + ADS.reward + " 🫧" : "Reviens plus tard") : "Bientôt"}</button>`;
}
act.adWatch = async () => {
  const m = adsMode();
  if (!m || !adsLeft() || window.__adBusy) return;
  if (!0 !== st.get("ads:c", !1)) {
    if (document.getElementById("adc")) return;
    const e = document.createElement("div");
    ((e.className = "sfr"),
      (e.id = "adc"),
      e.setAttribute("role", "dialog"),
      e.setAttribute("aria-modal", "true"),
      (e.innerHTML =
        '<div class="glass sfc apmc"><h2>Regarder une pub ?</h2><p class="apd2">Les pubs sont fournies par Google. Pour les afficher, Google peut utiliser un identifiant publicitaire de ton appareil, selon ses propres règles. Tu peux refuser : le jeu reste complet, tu ne gagnes simplement pas de bulles avec les pubs. Tu peux retirer ton consentement à tout moment dans Réglages › À propos.</p><button class="btn" data-a="adYes">J’accepte, voir la pub</button><button class="btn alt" data-a="adNo">Non merci</button></div>'),
      document.body.appendChild(e));
    return;
  }
  window.__adBusy = 1;
  const b = document.querySelector('[data-a="adWatch"]');
  b && ((b.disabled = !0), (b.textContent = "…"));
  const done = () => {
    window.__adBusy = 0;
    adsCard();
  };
  if (m === "native") {
    adsMute(1);
    try {
      const ok = await window.CalmosAds.showRewarded();
      ok ? adsGrant() : shToast("Pub interrompue : pas de bulles cette fois.");
    } catch (e) {
      shToast("Aucune pub disponible pour l’instant. Réessaie plus tard.");
    }
    adsMute(0);
    return done();
  }
  adsLoad();
  if (ADSL < 0) {
    shToast("Les pubs sont bloquées sur cet appareil.");
    return done();
  }
  let got = 0;
  adBreak({
    type: "reward",
    name: "boutique-bulles",
    beforeAd: () => adsMute(1),
    afterAd: () => adsMute(0),
    beforeReward: (s) => s(),
    adViewed: () => {
      got = 1;
      adsGrant();
    },
    adDismissed: () => shToast("Pub interrompue : pas de bulles cette fois."),
    adBreakDone: (i) => {
      !got &&
        i &&
        i.breakStatus &&
        !/viewed|dismissed/.test(i.breakStatus) &&
        shToast("Aucune pub disponible pour l’instant. Réessaie plus tard.");
      done();
    },
  });
};
function shopOpen() {
  let e = document.getElementById("shpo");
  (e && e.remove(),
    (e = document.createElement("div")),
    (e.id = "shpo"),
    (e.className = "sfr"),
    e.setAttribute("role", "dialog"),
    e.setAttribute("aria-modal", "true"),
    (e.innerHTML = `<div class="glass sfc shpc"><div class="shph"><h2>🫧 Bulles</h2><button class="shpx" data-a="shopX" aria-label="Fermer">✕</button></div><p class="note">Tu as <b>${FLX()}</b> bulles. Ajoute-en pour débloquer des indices, des poissons et des décorations.</p>${shopOn() ? "" : '<p class="note" style="padding:8px 12px;border-radius:12px;background:rgba(255,200,90,.16);border:1px dashed rgba(255,214,140,.6);color:#ffe3a8">🚧 Boutique en construction : elle n’est pas encore terminée.</p>'}<div class="shad" id="shad"></div><div class="shpl">${SHOPP.map(([e, t, a, s]) => `<button class="shpi${"Le plus populaire" === s ? " hot" : ""}" data-a="shopBuy" data-v="${e}"><span class="shpn">🫧 ${t.toLocaleString("fr-CA")}</span>${s ? `<small>${s}</small>` : "<small>&nbsp;</small>"}<b>${shopOn() ? a : a + "<i>Bientôt</i>"}</b></button>`).join("")}</div><p class="note shpm">${shopOn() ? (inStore() ? "Paiement sécurisé par Google Play" : "Paiement sécurisé par Stripe · carte de crédit, Apple Pay, Google Pay") : "Carte de crédit · Apple Pay · Google Pay"}</p><p class="note shpm shpl2">Prix en dollars canadiens (CAD), taxes applicables en sus. Les bulles sont une monnaie virtuelle sans valeur réelle. Les achats sont finaux et non remboursables, sauf erreur de facturation, paiement en double ou bulles non reçues (nextonset@pm.me). En achetant, tu acceptes les <button class="lnk apk" data-a="shopTerms">conditions d’utilisation</button>.</p></div>`),
    e.addEventListener("click", (t) => {
      t.target === e && e.remove();
    }),
    document.body.appendChild(e),
    adsCard(),
    adsLoad());
}
((act.shopTerms = () => {
  const e = document.getElementById("shpo");
  (e && e.remove(), aboutScreen());
}),
  (act.shopX = () => {
    const e = document.getElementById("shpo");
    e && e.remove();
  }));
const shToast = (e) => {
  "function" == typeof gToast ? gToast(e) : "function" == typeof msg && msg(e);
};
const inStore = () => {
  try {
    return (
      document.referrer.startsWith("android-app://") && sessionStorage.setItem("twa", "1"),
      "1" === sessionStorage.getItem("twa") || /[?&]src=(play|ios)/.test(location.search)
    );
  } catch (e) {
    return !1;
  }
};
inStore();
const shopOn = () => !!window.fbShop && window.fbShop.live && (!inStore() || !!window.CalmosBilling);
function buyCredit() {
  const e = +st.get("buy:t", 0) || 0,
    t = Math.max(0, e - (+st.get("buy:b", 0) || 0)),
    a = +st.get("buy:c", 0) || 0;
  if (t <= a) return;
  const s = t - a;
  (st.set("buy:c", t), (fl = Math.min(1e8, fl + s)), st.set("fl", fl));
  try {
    chip();
  } catch (e) {}
  shToast("+" + s.toLocaleString("fr-CA") + " 🫧 — merci énormément pour ton soutien !");
  try {
    schedulePush();
  } catch (e) {}
}
((act.shopBuy = async (e) => {
  if (!shopOn()) return shToast("Les achats arrivent bientôt ✦");
  const t = document.querySelector('[data-a="shopBuy"][data-v="' + e + '"]');
  if (t) {
    if (t.dataset.busy) return;
    ((t.dataset.busy = 1), (t.style.opacity = 0.6));
  }
  const a = await (inStore() && window.CalmosBilling ? window.CalmosBilling.buy(e) : window.fbShop.buy(e));
  (t && (delete t.dataset.busy, (t.style.opacity = "")),
    a && "login" === a.err
      ? shToast("Connecte-toi à ton compte (Réglages) pour acheter des bulles.")
      : a && a.err && shToast("Le paiement n’a pas pu démarrer. Réessaie dans un instant."));
}),
  window.fbShop &&
    window.fbShop.watch((e) => {
      (st.set("buy:t", e), buyCredit());
    }));
try {
  const e = new URLSearchParams(location.search).get("achat");
  e &&
    (history.replaceState(null, "", location.pathname),
    setTimeout(
      () =>
        shToast("ok" === e ? "Paiement reçu ✦ Tes bulles arrivent dans quelques secondes." : "Achat annulé."),
      900,
    ));
} catch (e) {}
document.addEventListener("click", (e) => {
  const t = e.target.closest && e.target.closest(".chip");
  !t || t.dataset.a || t.closest("#shpo") || ((t.textContent || "").trim().startsWith("🫧") && shopOpen());
});
const offl = () => "undefined" != typeof navigator && !1 === navigator.onLine;
function netUI() {
  const e = offl();
  document.body.classList.toggle("offl", e);
  let t = document.getElementById("offp");
  t && t.remove();
}
(addEventListener("offline", netUI),
  addEventListener("online", () => {
    netUI();
    try {
      st.get("sync:acc", !1) && (Sy.ref ? push() : accInit());
    } catch (e) {}
    try {
      "function" == typeof socLater && socLater();
    } catch (e) {}
  }),
  setTimeout(netUI, 0),
  document.addEventListener(
    "click",
    (e) => {
      offl() &&
        e.target.closest &&
        e.target.closest('[data-a="tab"][data-v="soc"],[data-a="shopBuy"],[data-net]') &&
        (e.preventDefault(),
        e.stopPropagation(),
        shToast("Hors ligne : cette fonction a besoin d’Internet."));
    },
    !0,
  ),
  (act.gCat = (e) => {
    const t = document.getElementById("gc-" + e);
    if (!t) return;
    document
      .querySelectorAll("#navcw .gcats button")
      .forEach((b) => b.classList.toggle("on", b.dataset.v === e));
    const S = document.scrollingElement || document.documentElement,
      y0 = S.scrollTop,
      y = Math.max(0, Math.min(S.scrollHeight - innerHeight, t.getBoundingClientRect().top + y0 - 16));
    ((window.__gcLock = Date.now() + 1100),
      setTimeout(() => {
        ((window.__gcLock = 0), gCatOn());
      }, 1150));
    try {
      window.scrollTo({ top: y, behavior: "smooth" });
    } catch (e) {
      S.scrollTop = y;
    }
    (clearTimeout(window.__gcT),
      (window.__gcT = setTimeout(() => {
        Math.abs(S.scrollTop - y0) < 3 && Math.abs(y - y0) > 3 && ((S.scrollTop = y), window.scrollTo(0, y));
      }, 380)));
  }));
const ABOUT_MAIL = "nextonset@pm.me";
function aboutScreen() {
  ((cur = null),
    nv("set"),
    (app.innerHTML =
      '<header class="top pfh"><h1>À propos</h1></header><section class="glass play pf ab">\n<h2>Nextonset · Atplab</h2><p>« Calmos » est un jeu de détente en français, édité par <b>Nextonset</b> (Atplab). Le jeu est gratuit ; les achats de bulles sont facultatifs.</p>\n<h2>Conditions d’utilisation</h2>\n<p>En utilisant le jeu, tu acceptes ces conditions.</p>\n<ul><li>Calmos s’adresse aux personnes de 14 ans et plus. Si tu as moins de 14 ans, demande l’accord d’un parent ou d’un tuteur avant de créer un compte, d’acheter ou d’utiliser les fonctions sociales.</li><li>Le jeu est fourni pour un usage personnel, tel quel, sans garantie de disponibilité continue.</li><li>Pas de triche ni d’abus qui fausseraient les classements ou perturberaient les autres joueurs. Nextonset peut suspendre un compte en cas d’abus.</li><li>Les bulles 🫧 sont une monnaie virtuelle du jeu : ils n’ont aucune valeur réelle, ne sont ni échangeables contre de l’argent, ni transférables entre comptes.</li><li>Nextonset peut modifier le jeu, ses niveaux et ces conditions. L’utilisation continue du jeu vaut acceptation.</li><li>Ces conditions sont régies par les lois du Québec et les lois fédérales du Canada qui s’y appliquent. Si tu es consommateur, tu conserves les droits que la loi t’accorde, y compris celui d’agir devant le tribunal de ton lieu de résidence.</li></ul>\n<h2>Achats et remboursements</h2>\n<ul><li>Les achats de bulles se font sur la version web, en dollars canadiens (CAD), par carte, via le service de paiement sécurisé Stripe. Les taxes applicables peuvent s’ajouter.</li><li>Il faut être connecté à un compte. Les bulles sont ajoutées automatiquement après confirmation du paiement, en quelques secondes.</li><li>Les bulles sont un contenu numérique livré immédiatement : les achats sont finaux et non remboursables, sauf en cas d’erreur de facturation, de paiement en double ou de bulles non reçues. Dans ces cas, contacte-nous : nous corrigerons ou rembourserons.</li><li>Les bulles n’expirent pas tant que ton compte existe.</li></ul>\n<h2>Politique de confidentialité</h2>\n<p>La politique de confidentialité de Calmos est disponible sur une page publique distincte. Elle explique quelles données sont traitées, pourquoi elles le sont, avec quels fournisseurs et comment exercer tes droits.</p>\n<p><a class="btn" href="./politique-confidentialite/" target="_blank" rel="noopener">Consulter la politique de confidentialité</a></p>\n<button class="btn alt" data-a="adOff">Retirer mon consentement aux pubs</button>\n<h2>Bien-être et santé</h2><p>Calmos est un jeu de détente. Les séances guidées, les sons et la respiration ne remplacent pas un avis, un diagnostic ou un traitement médical. Si tu ne te sens pas bien, parles-en à un professionnel de la santé.</p>\n<h2>Crédits et marques</h2><ul><li>Polices Fraunces et Nunito Sans (licence SIL Open Font), chargées depuis Google Fonts.</li><li>Voix SIWIS de Piper (licence CC-BY 4.0), décrite plus bas.</li><li>Calmos n’est affilié à aucun éditeur de jeux ni à aucune marque. Les noms cités appartiennent à leurs propriétaires.</li></ul>\n<h2>Transparence sur l’utilisation de l’IA</h2><p>Calmos est imaginé, dirigé et testé par une personne, avec l’aide d’outils d’intelligence artificielle. Voici où l’IA intervient :</p><ul><li><b>Code et design :</b> une grande partie du code, des graphismes dessinés en code (poissons, décors, icônes, plateaux de jeu) et des animations a été écrite avec Claude, un assistant IA d’Anthropic, à partir des idées, des choix et des retours de Nextonset.</li><li><b>Textes :</b> certains textes (histoires, règles et consignes, séances de méditation, descriptions) ont été rédigés ou retravaillés avec l’aide de l’IA, puis relus.</li><li><b>Musiques et sons :</b> les musiques et les sons d’ambiance sont produits en direct par le code de l’application, conçu avec l’aide de l’IA.</li><li><b>Voix :</b> la « Voix Calmos » des méditations est une voix de synthèse (TTS) générée avec le logiciel libre Piper (voix SIWIS, licence CC-BY 4.0). Les autres voix guidées proviennent de la synthèse vocale de ton appareil. Les voix du salon de HoHo ont été générées avec ElevenLabs, un service de voix par IA.</li><li><b>Pendant que tu joues :</b> aucune IA ne fonctionne dans l’application. Rien ne lit tes parties ni n’analyse tes données ; les bots adverses suivent de simples règles programmées.</li></ul><p>Je suis un passionné de jeux vidéo. La plupart des jeux mobiles sont remplis de pubs, de transactions et semblent incomplets. Les jeux ne sont pas faits pour être appréciés, mais pour dépenser. Mon entourage et moi-même n’avons jamais aimé nous faire interrompre une partie par une pub, ou rester bloqués à un niveau pendant des jours. Derrière mon jeu, je voulais créer une expérience mémorable, amusante et addictive, pour que tout le monde puisse s’amuser, se relaxer avant d’aller dormir ou faire réfléchir ses neurones.</p><p>À la base, ce ne devait être qu’une application compilant des jeux de mots pour ma mère, puis je l’ai développée en application regroupant tous les jeux relaxants que j’aime. Puis, plusieurs personnes de mon entourage voulaient l’installer, et c’est là que l’idée de la commercialiser m’est venue.</p><p>Malheureusement, je n’ai pas les compétences pour créer un jeu avec du code, sans intelligence artificielle. Je l’utilise pour faire prendre vie à mes idées, pas pour me remplacer. Étant designer interactif, je m’assure que l’expérience soit la plus agréable possible, car la frustration d’avoir un bouton qui ne fonctionne pas irait à l’encontre du but de Calmos.</p><p>Mon seul objectif : que Calmos soit le jeu principal que je veux ouvrir pour me reposer, me changer les idées, m’amuser et passer un bon moment, en espérant que tu l’apprécies tout autant que moi. Chaque nouveauté, je l’essaie, la refais, la peaufine jusqu’à ce qu’elle me convienne totalement. Une question, une idée, un coup de cœur ? N’hésite pas à me contacter.</p>\n<h2>Contact</h2><p>Courriel : <b>nextonset@pm.me</b><br>Projet : github.com/atplab/calmonos</p>\n<h2>Mentions légales</h2>\n<p><b>Éditeur :</b> Emmanuel Ricard, qui exploite « Calmos » sous les noms Nextonset et Atplab (Québec, Canada).<br><b>Courriel :</b> nextonset@pm.me<br><b>Responsable de la protection des renseignements personnels :</b> Emmanuel Ricard, nextonset@pm.me</p>\n<p class="ab-s">© 2026 Nextonset · Atplab. Tous droits réservés.</p></section><button class="btn alt" data-a="aboutBack">Retour aux réglages</button>'),
    window.scrollTo(0, 0));
}
function prefScreen() {
  ((cur = null), nv("set"));
  const e = prefs(),
    t = (t, a, s) =>
      `<button class="tg ${e[t] ? "on" : ""}" role="switch" aria-checked="${!!e[t]}" data-a="tg" data-v="${t}"><span>${a}${s ? `<small>${s}</small>` : ""}</span><i></i></button>`,
    a = (t, a) =>
      `<button class="pt ${e[t] ? "on" : ""}" role="switch" aria-checked="${!!e[t]}" data-a="tg" data-v="${t}"><span>${a}</span><i></i></button>`;
  ((app.innerHTML = `<header class="top pfh"><h1>Réglages</h1></header><section class="glass play pf"><div class="cmrow">${t("calm", "Mode calme", "Animations adoucies et moins de distractions. Les jeux plus dynamiques demandent une confirmation avant de s’ouvrir.")}</div><label class="vol"><span>Volume <b id="vv">${e.vol} %</b></span><input type="range" min="0" max="100" value="${e.vol}" data-r="vol" aria-label="Volume"></label><div class="pg">${a("music", "Musique")}${a("sfx", "Effets sonores")}${a("vib", "Vibrations")}${a("snow", "Bulles animées")}</div><div class="tg pk"><span>Scores du mode infini<small>Qui peut voir tes records</small></span><div class="seg" role="radiogroup" aria-label="Partage des scores">${[
    ["p", "Global"],
    ["f", "Amis"],
    ["n", "Privé"],
  ]
    .map(
      ([e, t]) =>
        `<button role="radio" aria-checked="${(infShr() || "n") === e}" class="${(infShr() || "n") === e ? "on" : ""}" data-a="infSet" data-v="${e}">${t}</button>`,
    )
    .join(
      "",
    )}</div></div>${t("breath", "Respiration entre les niveaux", "Inspire 4 s, retiens 2 s, expire 4 s")}<div class="tg pk"><span>Jour et nuit<small>Aquarium et histoire</small></span><div class="seg" role="radiogroup" aria-label="Jour et nuit">${[
    ["auto", "Auto"],
    ["day", "Jour"],
    ["night", "Nuit"],
    ["sys", "Système"],
  ]
    .map(
      ([t, a]) =>
        `<button role="radio" aria-checked="${e.sky === t}" class="${e.sky === t ? "on" : ""}" data-a="sky" data-v="${t}">${a}</button>`,
    )
    .join(
      "",
    )}</div></div><button class="tg" data-a="kbl"><span>Clavier du mot du jour</span><b>${"azerty" === e.kbd ? "AZERTY" : "QWERTY"}</b></button></section>${syncHTML()}<section class="glass play pf" style="margin:0 0 12px"><button class="tg" data-a="ntSet"><span>Notifications<small>Choisir celles reçues hors de l’appli</small></span><b>›</b></button></section>${window.CalmosUpdate ? '<section class="glass play pf" style="margin:0 0 12px"><button class="tg" data-a="otaCheck"><span>Mettre à jour l’application<small id="otas">Vérifier si une nouvelle version est disponible</small></span><b>↻</b></button></section>' : ""}<section class="glass play pf"><button class="tg" data-a="oth"><span>Autres paramètres et informations<small>Âge et protection familiale, publicité, à propos, compte</small></span><b>›</b></button></section><p id="appv" style="text-align:center;font-size:12px;opacity:.55;margin:18px 0 6px">Version v1262 · gs514${window.__ota ? " · maj : " + window.__ota : ""}</p>`),
    (() => {
      try {
        caches.keys().then((k) => {
          const c = k
              .filter((x) => /^nds-gs/.test(x))
              .sort()
              .pop(),
            p = document.getElementById("appv");
          p && c && (p.textContent = "Version v1061 · gs313 · cache actif : " + c.replace("nds-", ""));
        });
      } catch (e) {}
    })());
}
function othScreen() {
  ((cur = null),
    nv("set"),
    (app.innerHTML = `<header class="top pfh"><h1>Autres paramètres</h1></header><section class="glass play pf abt oth"><button class="tg" data-a="about"><span>À propos<small>Nextonset, conditions, confidentialité, contact</small></span><b>›</b></button><button class="tg" id="adpo" data-a="adPriv" hidden><span>Gérer mes choix de publicité<small>Modifier ou retirer ton consentement</small></span><b>›</b></button></section><button class="btn alt" data-a="rst">Réinitialiser la progression</button>${window.__fb && window.__fb.u ? `<button class="btn alt" data-a="delAcc">${DLA ? "Confirmer : supprimer mon compte" : "Supprimer mon compte et mes données"}</button>` : ""}<button class="btn" data-a="othBack">Retour aux réglages</button>`),
    window.scrollTo(0, 0));
  try {
    const c = window.CalmosAds;
    c &&
      c.privacyRequired &&
      c.privacyRequired().then((v) => {
        const b = document.getElementById("adpo");
        b && v && (b.hidden = !1);
      });
  } catch (e) {}
}
((act.oth = othScreen), (act.othBack = () => prefScreen()));
((act.about = aboutScreen), (act.aboutBack = () => othScreen()));
let AC;
let mg;
let music;
let PLK = null;
let PLPA = !1;
const bgOn = () => !(!PLK || !1 === prefs().pbg);
function acHold() {
  try {
    "function" == typeof plTone && (plTone(!0), (AC.__tn = 1));
  } catch (e) {}
}
function acFree() {
  try {
    AC && AC.__tn && (!PLK || PLPA) && (plTone(!1), (AC.__tn = 0));
  } catch (e) {}
  if (AC && AC.__md) {
    try {
      (mg.connect(AC.destination), AC.__md.pause(), (AC.__md.srcObject = null));
    } catch (e) {}
    AC.__md = null;
  }
}
(document.addEventListener("visibilitychange", () => {
  try {
    bgOn() && document.hidden ? acHold() : acFree();
  } catch (e) {}
}),
  document.addEventListener("visibilitychange", () => {
    try {
      PLK && PLPA && plApply();
    } catch (e) {}
    try {
      if (!AC) return;
      if (document.hidden) {
        if (bgOn()) return;
        (mg.gain.cancelScheduledValues(AC.currentTime),
          mg.gain.setTargetAtTime(0, AC.currentTime, 0.025),
          clearTimeout(window.__acT),
          (window.__acT = setTimeout(() => {
            document.hidden && !bgOn() && AC.suspend();
          }, 200)));
      } else
        (clearTimeout(window.__acT), "suspended" === AC.state ? AC.resume().then(apply, apply) : apply());
    } catch (e) {}
  }));
const stMus = (k) => (on) => {
  if ("object" != typeof prMu) return;
  if (on) ((prMu.nk = k), (prMu.__pl = 1), prMu.set(!0));
  else if (prMu.__pl && !(PLK && !PLPA && /^pr\d+$/.test(PLK))) {
    prMu.__pl = 0;
    prMu.set(!1);
  }
};
const PLT = [
  ["m3", "Marée d’étoiles", "Constellations", () => m3Mus, "#3fc0cc", "#0e4f78"],
  ["tetris", "Blocs de glace", "Tèconta", () => ttMus, "#8fd8ff", "#3d4fa0"],
  ["g2048", "Les cloches qui doublent", "2048", () => g2Mus, "#ffd9a0", "#7a4a2a"],
  ["blocs", "Le jardin de bois", "Enligne-bloc", () => bxMus, "#c8e6b0", "#3a5a2a"],
  ["colorie", "Pinceaux d’hiver", "Coloriage", () => cbMus, "#ffb36b", "#a23d8a"],
  ["hoho", "Table de velours", "HoHo", () => unMus, "#2a9d68", "#0d3b29"],
  ["cherche", "Jardin sous la neige", "Cherche et trouve", () => chMus, "#9ad98a", "#2b6a4a"],
  ["sudoku", "Chiffres au calme", "Sudoku", () => lfMus, "#9a86e8", "#2a1f66"],
  ["chess", "La clairière", "Échecs", () => ecMus, "#7fb88a", "#2b5f45"],
  ["draughts", "Le damier du soir", "Dames", () => dmMus, "#d9a066", "#5a3320"],
  ["scrabble", "Les lettres du soir", "Motuiles", () => mtMus, "#e9d3a1", "#5a3a1a"],
  ["airhockey", "Glisse sur la glace", "Air hockey", () => ahMus, "#bfe8ff", "#3a5aa8"],
  ["brick", "Rue du givre", "Casse-briques", () => bkMus, "#c8adff", "#3f3a8f"],
  ["flow", "Fils de lumière", "Fils de couleur", () => fiMus, "#ff8fb8", "#5a3a9a"],
  ["base", "Calme d’origine", "Musique de fond de l’application", () => () => {}, "#a99cf0", "#5458AB"],
  ["pr0", "Le voyage de Zeni", "Mode histoire · Prologue", () => stMus(0), "#ffd9a0", "#5a3a8a"],
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((k) => [
    "pr" + k,
    "Chapitre " + k,
    "Mode histoire",
    () => stMus(k),
    ["#9fd8ff", "#ffc9a0", "#c9b0ff", "#a0e8c0", "#ffb0c8", "#ffe28a"][k % 6],
    ["#2a3f8a", "#6a3a5a", "#3a2a7a", "#1f5a5a", "#7a2a5a", "#5a4a1a"][k % 6],
  ]),
];
let PLC = 0;
let PLT0 = 0;
let PLE = 0;
let PLI = 0;
function plArt(e) {
  const t = PLT.find((t) => t[0] === e),
    a = "pa" + e;
  let s = "";
  return (
    (s = /^pr\d+$/.test(e)
      ? '<path d="M50 30q-16-8-32-4v46q16-4 32 4 16-8 32-4V26q-16-4-32 4z" fill="#fff" opacity=".9"/><path d="M50 30v46" stroke="#5a3a8a" stroke-width="2" opacity=".5"/><circle cx="72" cy="20" r="4" fill="#ffe9a8"/><circle cx="24" cy="16" r="2.4" fill="#fff"/>'
      : "base" === e
        ? '<g fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".85"><path d="M12 38q19-14 38 0t38 0"/><path d="M12 54q19-14 38 0t38 0" opacity=".7"/><path d="M12 70q19-14 38 0t38 0" opacity=".5"/></g><circle cx="50" cy="22" r="7" fill="#ffe9a8"/>'
        : "m3" === e
          ? '<path d="M0 70q12-8 25 0t25 0 25 0 25 0v30H0z" fill="#fff" opacity=".18"/><path d="M0 82q12-8 25 0t25 0 25 0 25 0v18H0z" fill="#fff" opacity=".18"/><path d="M50 18l4.5 11 12 .8-9.3 7.6 3 11.6L50 42l-10.2 7 3-11.6-9.3-7.6 12-.8z" fill="#ffe9a8"/><ellipse cx="26" cy="64" rx="9" ry="5.5" fill="#ffd18a"/><path d="M35 64l7-5v10z" fill="#ffd18a"/><circle cx="72" cy="56" r="4" fill="none" stroke="#fff" stroke-width="1.4"/><circle cx="80" cy="42" r="2.4" fill="none" stroke="#fff" stroke-width="1.2"/><circle cx="18" cy="38" r="2.6" fill="none" stroke="#fff" stroke-width="1.2"/>'
          : "tetris" === e
            ? '<g fill="#fff" opacity=".92"><rect x="30" y="26" width="18" height="18" rx="3"/><rect x="48" y="26" width="18" height="18" rx="3"/><rect x="66" y="26" width="18" height="18" rx="3"/><rect x="48" y="44" width="18" height="18" rx="3"/></g><g fill="#fff" opacity=".4"><rect x="12" y="66" width="18" height="18" rx="3"/><rect x="30" y="66" width="18" height="18" rx="3"/><rect x="48" y="66" width="18" height="18" rx="3"/><rect x="66" y="66" width="18" height="18" rx="3"/></g>'
            : "colorie" === e
              ? '<circle cx="38" cy="42" r="22" fill="#ff5d7a" opacity=".85"/><circle cx="62" cy="42" r="22" fill="#ffd24a" opacity=".85"/><circle cx="50" cy="62" r="22" fill="#4fc3ff" opacity=".85"/><path d="M20 88L78 22" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M78 22l6-8" stroke="#5a2d1a" stroke-width="5" stroke-linecap="round"/>'
              : "hoho" === e
                ? '<g transform="rotate(-18 50 62)"><rect x="24" y="22" width="34" height="50" rx="5" fill="#e5464f"/></g><g transform="rotate(0 50 62)"><rect x="33" y="20" width="34" height="50" rx="5" fill="#ffd24a"/></g><g transform="rotate(18 50 62)"><rect x="42" y="22" width="34" height="50" rx="5" fill="#3f8cff"/></g><ellipse cx="50" cy="45" rx="9" ry="14" fill="#fff" transform="rotate(30 50 45)"/>'
                : "cherche" === e
                  ? '<g fill="#fff" opacity=".35"><circle cx="20" cy="76" r="8"/><circle cx="34" cy="84" r="6"/><circle cx="80" cy="30" r="7"/></g><circle cx="44" cy="44" r="22" fill="#fff" fill-opacity=".22" stroke="#fff" stroke-width="5"/><path d="M60 60l22 22" stroke="#fff" stroke-width="7" stroke-linecap="round"/><path d="M36 50q8-14 16-4" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>'
                  : "sudoku" === e
                    ? '<g stroke="#fff" stroke-opacity=".6" stroke-width="1.4"><path d="M20 20h60v60H20zM40 20v60M60 20v60M20 40h60M20 60h60"/></g><g fill="#fff" font-family="Georgia,serif" font-size="14" text-anchor="middle"><text x="30" y="35">5</text><text x="50" y="55">3</text><text x="70" y="75">9</text><text x="70" y="35" opacity=".6">1</text><text x="30" y="75" opacity=".6">7</text></g>'
                    : "chess" === e
                      ? '<path d="M0 100V78l10-16 8 10 10-24 12 22 8-10 14-26 16 30 8-8 14 20v24z" fill="#0b2e22" opacity=".55"/><text x="50" y="66" font-size="54" text-anchor="middle" fill="#fff">♞</text>'
                      : "airhockey" === e
                        ? '<g stroke="#fff" stroke-opacity=".5" stroke-width="1.6" fill="none"><circle cx="50" cy="50" r="22"/><path d="M0 50h100"/></g><circle cx="38" cy="64" r="14" fill="#e5464f"/><circle cx="38" cy="64" r="6" fill="#a8222c"/><circle cx="66" cy="38" r="8" fill="#22283a"/>'
                        : "brick" === e
                          ? '<g fill="#fff" opacity=".9"><rect x="10" y="16" width="24" height="10" rx="2"/><rect x="38" y="16" width="24" height="10" rx="2"/><rect x="66" y="16" width="24" height="10" rx="2"/></g><g fill="#fff" opacity=".55"><rect x="24" y="30" width="24" height="10" rx="2"/><rect x="52" y="30" width="24" height="10" rx="2"/></g><circle cx="58" cy="64" r="5" fill="#ffe9a8"/><rect x="34" y="84" width="34" height="7" rx="3.5" fill="#fff"/>'
                          : '<g fill="none" stroke-width="5" stroke-linecap="round"><path d="M22 74q14-40 30-20t26-22" stroke="#ffe9a8"/><path d="M22 28q22 6 28 26t28 14" stroke="#7fe0ff"/></g><g fill="#fff"><circle cx="22" cy="74" r="6"/><circle cx="78" cy="32" r="6"/><circle cx="22" cy="28" r="6"/><circle cx="78" cy="68" r="6"/></g>'),
    `<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="${a}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t[4]}"/><stop offset="1" stop-color="${t[5]}"/></linearGradient></defs><rect width="100" height="100" fill="url(#${a})"/>${s}</svg>`
  );
}
const plFmt = (e) => Math.floor(e / 60) + ":" + String(Math.floor(e % 60)).padStart(2, "0");
const plEl = () => (PLK && !PLPA ? (Date.now() - PLT0) / 1e3 : PLE);
function plSess() {
  const e = navigator.mediaSession;
  if (e)
    try {
      const t = PLT[PLC];
      if (!PLK) return ((e.metadata = null), void (e.playbackState = "none"));
      e.playbackState = PLPA ? "paused" : "playing";
      const a = plArt(t[0]).replace(
          "<svg ",
          '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" ',
        ),
        s = new Image(),
        n = (a) => {
          e.metadata = new MediaMetadata({
            title: t[1],
            artist: "Calmos · " + t[2],
            album: "Musiques des jeux",
            artwork: a ? [{ src: a, sizes: "512x512", type: "image/png" }] : [],
          });
        };
      (n(""),
        (s.onload = () => {
          try {
            const e = document.createElement("canvas");
            ((e.width = e.height = 512),
              e.getContext("2d").drawImage(s, 0, 0, 512, 512),
              n(e.toDataURL("image/png")));
          } catch (e) {}
        }),
        (s.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(a)),
        [
          ["play", () => act.plpl()],
          ["pause", () => act.plpa()],
          ["nexttrack", () => act.plnx(1)],
          ["previoustrack", () => act.plnx(-1)],
        ].forEach(([t, a]) => {
          try {
            e.setActionHandler(t, a);
          } catch (e) {}
        }));
    } catch (e) {}
}
let PLA = null;
function plTone(e) {
  try {
    if (!e) return void (PLA && PLA.pause());
    if (!PLA) {
      const e = 8e3,
        t = 60 * e * 2,
        a = new Uint8Array(44 + t),
        s = new DataView(a.buffer),
        n = (e, t) => {
          for (let a = 0; a < t.length; a++) s.setUint8(e + a, t.charCodeAt(a));
        };
      (n(0, "RIFF"),
        s.setUint32(4, 36 + t, !0),
        n(8, "WAVEfmt "),
        s.setUint32(16, 16, !0),
        s.setUint16(20, 1, !0),
        s.setUint16(22, 1, !0),
        s.setUint32(24, e, !0),
        s.setUint32(28, 2 * e, !0),
        s.setUint16(32, 2, !0),
        s.setUint16(34, 16, !0),
        n(36, "data"),
        s.setUint32(40, t, !0));
      for (let a = 0; a < t / 2; a++)
        s.setInt16(44 + 2 * a, Math.round(24 * Math.sin((2 * Math.PI * 25 * a) / e)), !0);
      ((PLA = new Audio(URL.createObjectURL(new Blob([a], { type: "audio/wav" })))),
        (PLA.loop = !0),
        PLA.setAttribute("playsinline", ""));
    }
    PLA.play().catch(() => {});
  } catch (e) {}
}
function plApply() {
  (plTone(!!PLK && !PLPA),
    PLT.forEach((e) => {
      try {
        e[3]()(
          PLK && !PLPA
            ? e[0] === PLK
            : !(PLK && document.hidden) && void 0 !== cur && cur === ("m3" === e[0] ? "match3" : e[0]),
        );
      } catch (e) {}
    }),
    "object" == typeof xmMu && xmMu.want && xmMus(!0),
    apply());
}
function plTick() {
  if (!document.getElementById("plp")) return (clearInterval(PLI), void (PLI = 0));
  const e = plEl(),
    t = document.getElementById("ple"),
    a = document.getElementById("plpb");
  (t && (t.textContent = plFmt(e)), a && (a.style.width = (((e % 240) / 240) * 100).toFixed(1) + "%"));
}
const plFav = () => {
  try {
    const e = st.get("pl:fav", []);
    return Array.isArray(e) ? e : [];
  } catch (e) {
    return [];
  }
};
const plHe = (e, t) =>
  `<button class="plhe${t.includes(e) ? " on" : ""}" data-a="plfv" data-v="${e}" aria-label="${t.includes(e) ? "Retirer des favoris" : "Ajouter aux favoris"}" aria-pressed="${t.includes(e)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.6l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 17l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z"/></svg></button>`;
function plDraw() {
  let e = document.getElementById("plo");
  const t = e ? e.scrollTop : 0;
  if (!e) {
    ((e = document.createElement("div")),
      (e.id = "plo"),
      (e.className = "plo"),
      document.body.appendChild(e));
    let t = 0,
      a = 0,
      s = !1;
    (e.addEventListener(
      "touchstart",
      (n) => {
        ((s = !1),
          (a = 0),
          !(e.scrollTop <= 0 && 1 === n.touches.length) ||
            (n.target.closest && n.target.closest("input")) ||
            ((t = n.touches[0].clientY), (s = null)));
      },
      { passive: !0 },
    ),
      e.addEventListener(
        "touchmove",
        (n) => {
          if (null === s || !0 === s) {
            const o = n.touches[0].clientY - t;
            if (null === s)
              if (o > 8 && e.scrollTop <= 0) s = !0;
              else if (o < -4) return void (s = !1);
            !0 === s &&
              (n.preventDefault(),
              (a = Math.max(0, o)),
              (e.style.transition = "none"),
              (e.style.transform = "translateY(" + a + "px)"));
          }
        },
        { passive: !1 },
      ));
    const n = () => {
      (!0 === s &&
        ((e.style.transition = "transform .25s ease"), a > 110 ? act.plx() : (e.style.transform = "")),
        (s = !1));
    };
    (e.addEventListener("touchend", n), e.addEventListener("touchcancel", n));
  }
  const a = PLT[PLC],
    s = !!PLK && !PLPA,
    n = (e) => `<svg viewBox="0 0 24 24" aria-hidden="true">${e}</svg>`,
    o = plFav(),
    i = (e) =>
      `<div class="plrw"><button class="plr${PLK === e[0] ? " on" : ""}" data-a="plp" data-v="${e[0]}"><span class="plth">${plArt(e[0])}</span><span class="plrt"><b>${e[1]}</b><small>${e[2]}</small></span>${PLK !== e[0] || PLPA ? "" : '<i class="pleq"><u></u><u></u><u></u></i>'}</button>${plHe(e[0], o)}</div>`,
    r = PLT.map(i).join(""),
    l = PLT.filter((e) => o.includes(e[0]))
      .map(i)
      .join("");
  ((e.innerHTML = `<div class="plp" id="plp" style="--c1:${a[4]};--c2:${a[5]}"><div class="plh"><button class="plcl" data-a="plx" aria-label="Fermer">${n('<path d="M6 9l6 6 6-6"/>')}</button><b>Lecteur de musique</b><span></span></div>\n <div class="plcv${s ? " pl" : ""}">${plArt(a[0])}</div><div class="plti"><div><b>${a[1]}</b><span>Calmos · ${a[2]}</span></div>${plHe(a[0], o)}</div>\n <div class="plpbw"><div class="plpbr"><i id="plpb" style="width:0"></i></div><div class="plt"><span id="ple">${plFmt(plEl())}</span><span>en boucle</span></div></div>\n <div class="plct"><button data-a="plnx" data-v="-1" aria-label="Précédent">${n('<path d="M6 5v14M19 5L8 12l11 7z" fill="currentColor"/>')}</button><button class="plbig" data-a="plpl" aria-label="${s ? "Pause" : "Lecture"}">${n(s ? '<path d="M8 5v14M16 5v14" stroke-width="3.4"/>' : '<path d="M8 5l12 7-12 7z" fill="currentColor"/>')}</button><button data-a="plnx" data-v="1" aria-label="Suivant">${n('<path d="M18 5v14M5 5l11 7-11 7z" fill="currentColor"/>')}</button></div>\n <label class="plvo">${n('<path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/>')}<input type="range" min="0" max="100" value="${prefs().vol}" data-r="vol" aria-label="Volume"><span id="vv" hidden></span></label><button class="plbgb${!1 === prefs().pbg ? "" : " on"}" data-a="plbg" aria-pressed="${!1 !== prefs().pbg}">${n('<path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM11 18h2"/>')}<span>Musique hors de l’application<small>${!1 === prefs().pbg ? "Désactivée : la musique s’arrête quand tu quittes" : "Activée : la musique continue quand tu quittes"}</small></span><i></i></button>\n ${l ? `<h3>Favoris</h3><div class="plls">${l}</div>` : ""}<h3>Toutes les musiques</h3><div class="plls">${r}</div>${PLK ? '<button class="btn alt plsp" data-a="pls">Arrêter la lecture</button>' : ""}</div>`),
    PLI || (PLI = setInterval(plTick, 1e3)),
    plTick(),
    (e.scrollTop = t),
    document.querySelectorAll(".plfab").forEach((e) => e.classList.toggle("on", !!PLK && !PLPA)));
}
function plStart(e) {
  const t = prefs();
  (t.music || ((t.music = !0), savePrefs()),
    (PLC = (e + PLT.length) % PLT.length),
    (PLK = PLT[PLC][0]),
    (PLPA = !1),
    (PLT0 = Date.now()),
    (PLE = 0),
    audio(),
    plApply(),
    plSess(),
    plDraw());
}
(Object.assign(act, {
  plbg: () => {
    const e = prefs();
    ((e.pbg = !1 === e.pbg), savePrefs(), plDraw());
  },
  plr: plDraw,
  plx: () => {
    const e = document.getElementById("plo");
    e &&
      !e.classList.contains("out") &&
      (e.classList.add("out"),
      (e.style.transition = "transform .28s ease"),
      (e.style.transform = "translateY(100%)"),
      setTimeout(() => {
        e.classList.contains("out") && e.remove();
      }, 290));
  },
  plp: (e) => {
    const t = PLT.findIndex((t) => t[0] === e);
    if (PLK === e && !PLPA) return ((PLC = t), void act.plpa());
    plStart(t);
  },
  plpl: () => {
    if (!PLK) return plStart(PLC);
    PLPA
      ? ((PLPA = !1), (PLT0 = Date.now() - 1e3 * PLE), audio(), plApply(), plSess(), plDraw())
      : act.plpa();
  },
  plpa: () => {
    PLK && ((PLE = plEl()), (PLPA = !0), plApply(), plSess(), plDraw());
  },
  plfv: (e) => {
    const t = plFav(),
      a = t.indexOf(e);
    (a < 0 ? t.push(e) : t.splice(a, 1), st.set("pl:fav", t), plDraw());
  },
  plnx: (e) => plStart(PLC + (+e || 1)),
  pls: () => {
    ((PLK = null), (PLPA = !1), (PLE = 0), plApply(), plSess(), plDraw());
  },
}),
  (act.plMode = (e) => {
    if (e && !plUnl(e))
      return msg(
        "orbite" === e
          ? "Mode Planètes : termine d’abord 35 niveaux en mode Fruits ou Sous l’eau."
          : "Mode Sous l’eau : termine d’abord 15 niveaux du mode Fruits.",
      );
    try {
      st.set("pl:mode", e || "");
    } catch (e) {}
    hub("planetes");
  }),
  (act.chDlg = (f) => {
    const d0 = document.getElementById("chdl");
    d0 && d0.remove();
    const d = document.createElement("div");
    d.id = "chdl";
    const r = () => {
      const t = CH.cfg;
      return `<div class="chdb" role="dialog" aria-label="Règles de la partie"><h2>Règles de la partie</h2><p class="note" style="margin:0 0 12px">${"*mm" === f ? "Recherche d’un adversaire en ligne." : "Défi contre " + esc(chNm(f)) + "."} Choisis avant de commencer.</p><div class="chgr"><div class="chl">Ta couleur</div><div class="chq">${[
        [1, "Blancs"],
        [-1, "Noirs"],
        [0, "Au hasard"],
      ]
        .map(
          ([v, n]) =>
            `<button class="chc${(t.col || 0) === v ? " on" : ""}" data-a="chDlgS" data-v="col:${v}">${n}</button>`,
        )
        .join(
          "",
        )}</div></div><div class="chgr"><div class="chl">Durée de la partie <span class="chs2">par joueur</span></div><div class="chq">${CHTC.map((e) => `<button class="chc${(t.tc || 0) === e ? " on" : ""}" data-a="chDlgS" data-v="tc:${e}">${chTcT(e)}</button>`).join("")}</div></div><div class="chrow" style="margin-top:14px"><button class="btn" data-a="chDlgGo" data-v="${esc(f)}">${"*mm" === f ? "Chercher une partie" : "Envoyer le défi"}</button><button class="btn alt" data-a="chDlgX">Annuler</button></div></div>`;
    };
    window.__chDlgR = r;
    d.innerHTML = r();
    document.body.appendChild(d);
  }),
  (act.chDlgS = (v) => {
    const [k, x] = String(v).split(":");
    ("col" !== k && "tc" !== k) || ((CH.cfg[k] = +x), st.set("ch:cfg", CH.cfg));
    const d = document.getElementById("chdl");
    d && window.__chDlgR && (d.innerHTML = window.__chDlgR());
  }),
  (act.chDlgX = () => {
    const d = document.getElementById("chdl");
    d && d.remove();
  }),
  (act.chDlgGo = (v) => {
    (act.chDlgX(), "*mm" === v ? chSearch2() : act.chInv(v));
  }),
  (act.socPlay = (e) => {
    const [t, a] = String(e).split(":");
    if (!a || !SO.P[a]) return;
    const s = (e, t) => setTimeout(e, t);
    "chess" === t
      ? (act.open("chess"), s(() => act.chDlg(a), 80))
      : "scrabble" === t
        ? (act.scrOpen(a),
          s(() => {
            const e = SC.G[a];
            SC.fid !== a || (e && !e.e) || act.scNew();
          }, 1e3))
        : "hoho" === t
          ? (act.open("hoho"),
            s(() => {
              ((UN.cfg.fr = [a]), act.unMake());
            }, 80))
          : "airhockey" === t
            ? (act.open("airhockey"), s(() => act.ahAsk(a), 80))
            : "galac" === t && (act.open("galac"), s(() => act.gfRcCh(a), 500));
  }));
const INFN = { g2048: 1, tetris: 1, planetes: 1, caches: 1, blocs: 1 };
const infKey = (e) =>
  "planetes" === e
    ? "orbite" === st.get("pl:mode", "")
      ? "o"
      : "eau" === st.get("pl:mode", "")
        ? "u"
        : "c"
    : "s";
const infKeyP = (e) =>
  "planetes" === e
    ? "p" + infKey(e)
    : "caches" === e
      ? "ca"
      : "blocs" === e
        ? "bl"
        : "galac" === e
          ? "gf"
          : "solitaire" === e
            ? "so"
            : "recif" === e
              ? "zr"
              : "bulles" === e
                ? "zb"
                : "garde" === e
                  ? "zg"
                  : "crabes" === e
                    ? "zc"
                    : e;
const infTop = (e) => {
  let t = null;
  try {
    t = (st.get("inf:" + e, {}) || {})[infKey(e)];
  } catch (e) {}
  "number" == typeof t && (t = [{ s: t, t: 0 }]);
  const l = Array.isArray(t) ? t : [];
  try {
    const c = infKeyP(e),
      M = window.SO && SO.R && SO.R.hs && SO.R.hs.m && SO.R.hs.m[c];
    if (Array.isArray(M) && M.length) {
      const o = l.slice(),
        h = new Set(o.map((x) => x.s));
      M.forEach((v) => {
        v > 0 && !h.has(v) && (h.add(v), o.push({ s: v, t: 0 }));
      });
      o.sort((a, b) => b.s - a.s);
      return o.slice(0, 30);
    }
  } catch (x) {}
  return l;
};
const infBest = (e) => (infTop(e)[0] || { s: 0 }).s;
const infAll = () => {
  const e = {};
  return (
    [
      ["g2048", "g2048", "s"],
      ["tetris", "tetris", "s"],
      ["pc", "planetes", "c"],
      ["po", "planetes", "o"],
      ["gf", "galac", "s"],
      ["so", "solitaire", "s"],
      ["zr", "recif", "s"],
      ["zb", "bulles", "s"],
      ["zg", "garde", "s"],
      ["zc", "crabes", "s"],
    ].forEach(([t, a, s]) => {
      let n = null;
      try {
        n = (st.get("inf:" + a, {}) || {})[s];
      } catch (e) {}
      "number" == typeof n && (n = [{ s: n }]);
      const o = Array.isArray(n) && n[0] ? n[0].s : 0;
      o > 0 && (e[t] = o);
    }),
    e
  );
};
const infAll5 = () => {
  const e = {};
  return (
    [
      ["g2048", "g2048", "s"],
      ["tetris", "tetris", "s"],
      ["pc", "planetes", "c"],
      ["po", "planetes", "o"],
      ["gf", "galac", "s"],
      ["so", "solitaire", "s"],
      ["zr", "recif", "s"],
      ["zb", "bulles", "s"],
      ["zg", "garde", "s"],
      ["zc", "crabes", "s"],
    ].forEach(([t, a, s]) => {
      let n = null;
      try {
        n = (st.get("inf:" + a, {}) || {})[s];
      } catch (e) {}
      ("number" == typeof n && (n = [{ s: n }]),
        Array.isArray(n) &&
          n.length &&
          (e[t] = n
            .slice(0, 30)
            .map((e) => e.s)
            .filter((e) => e > 0)));
    }),
    e
  );
};
const infSave = (e, t) => {
  if (!(t > 0)) return !1;
  let a = !1;
  try {
    const s = Object.assign({}, st.get("inf:" + e, {}) || {}),
      n = infKey(e);
    let o = infTop(e).slice();
    ((a = !o.length || t > o[0].s),
      o.push({ s: t, t: Date.now() }),
      o.sort((e, t) => t.s - e.s),
      (s[n] = o.slice(0, 30)),
      st.set("inf:" + e, s));
  } catch (e) {}
  try {
    socMine();
  } catch (e) {}
  try {
    infLbSync();
  } catch (e) {}
  return a;
};
let infLB = {};
let infLBp = {};
let infLbBusy = !1;
const infLbOn = () => !!(window.__fb && window.__fb.lbPut && window.__fb.u);
async function infLbSync() {
  if (infLbOn() && !infLbBusy) {
    infLbBusy = !0;
    try {
      const e = "p" === infShr() ? infAll() : {},
        t = ((st.get("soc:me", null) || {}).name || "Joueur").slice(0, 24),
        a = Object.assign({}, st.get("inf:ls", {}) || {});
      for (const s of ["g2048", "tetris", "pc", "po", "gf", "so", "zr", "zb", "zg", "zc"]) {
        const n = e[s] ? e[s] + "|" + t : "";
        if (n !== (a[s] || ""))
          try {
            (n ? await window.__fb.lbPut(s, e[s], t) : await window.__fb.lbDel(s),
              (a[s] = n),
              (infLB = {}),
              (infLBp = {}));
          } catch (e) {}
      }
      st.set("inf:ls", a);
    } catch (e) {}
    infLbBusy = !1;
  }
}
const IC_MP =
  '<svg class="infic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.2"/><path d="M3 19c.4-3.4 3-5.2 6-5.2s5.6 1.8 6 5.2"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.4.2 3.8 1.8 4 4.5"/></svg>';
const IC_PL =
  '<svg class="infic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5"/><ellipse cx="12" cy="12" rx="10" ry="3.4" transform="rotate(-22 12 12)"/></svg>';
const IC_MD =
  '<svg class="infic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="5"/><path d="M8.6 13.2 7 21l5-2.6 5 2.6-1.6-7.8"/></svg>';
const IC_LB =
  '<svg class="infic" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="12" width="5" height="8" rx="1"/><rect x="9.5" y="5" width="5" height="15" rx="1"/><rect x="16" y="14" width="5" height="6" rx="1"/></svg>';
const infShr = () => {
  try {
    return st.get("inf:sh", "");
  } catch (e) {
    return "";
  }
};
function infDlg(e) {
  let t = $("#infd");
  if (!t) {
    if (((t = document.createElement("div")), (t.id = "infd"), e)) {
      const e = document.querySelector(".rcx-b");
      if (e) return ((t.className = "infin"), e.appendChild(t), t);
    }
    ((t.className = "infd"),
      t.setAttribute("role", "dialog"),
      t.setAttribute("aria-modal", "true"),
      document.body.appendChild(t));
  }
  return t;
}
function infAsk(e) {
  if ("" !== infShr() || $("#infd")) return;
  const t = infDlg();
  ((t.dataset.t = "ask"),
    (t.dataset.pg = e || ""),
    (t.innerHTML =
      '<div class="infb"><h2>Partager tes scores ?</h2><p>Tes records du mode infini peuvent apparaître dans les classements. Choisis qui peut les voir : tu pourras le changer plus tard dans les réglages.</p><button class="btn" data-a="infSh" data-v="p">Global (tout le monde)</button><button class="btn alt" data-a="infSh" data-v="f">Mes amis seulement</button><button class="btn alt" data-a="infSh" data-v="n">Ne pas partager</button></div>'));
}
function infRows(e, t) {
  const a = infKeyP(e),
    s = (st.get("soc:me", null) || {}).fr || {},
    n = [],
    o = infShr();
  if (
    (Object.entries(SO.P).forEach(([e, o]) => {
      const i = o && o.hs;
      e !== SO.uid &&
        i &&
        i.k &&
        i.k[a] &&
        ("w" === t
          ? "p" === i.v && n.push([e, i.k[a]])
          : ("p" === i.v || "f" === i.v) &&
            s[e] > 0 &&
            ((i.m && i.m[a]) || [i.k[a]]).forEach((t) => n.push([e, t])));
    }),
    SO.uid && ("w" === t ? "p" === o : "p" === o || "f" === o))
  )
    if ("w" === t) {
      const t = infBest(e);
      t > 0 && n.push([SO.uid, t]);
    } else
      infTop(e).forEach((e) => {
        e.s > 0 && n.push([SO.uid, e.s]);
      });
  return n.sort((e, t) => t[1] - e[1]).slice(0, 30);
}
function infList(e) {
  if (e.length <= 6) return `<ol class="infl">${e.join("")}</ol>`;
  const t = Math.ceil(e.length / 6);
  let a = "";
  for (let s = 0; s < t; s++) a += `<ol class="infl infp">${e.slice(6 * s, 6 * s + 6).join("")}</ol>`;
  return `<div class="infpg">${a}</div><div class="infdots">${[...Array(t).keys()].map((e) => `<button class="${e ? "" : "on"}" data-a="infPg" data-v="${e}" aria-label="Page ${e + 1}"></button>`).join("")}</div>`;
}
const infLbBtn = (e) =>
  document.querySelectorAll(".rcx-lb").forEach((t) => {
    (t.classList.toggle("on", e), t.setAttribute("aria-pressed", e));
  });
function infBoard(e, t) {
  const G = e,
    SF = (v) =>
      G === "solitaire"
        ? ((x) => Math.floor(x / 60) + ":" + String(x % 60).padStart(2, "0"))(Math.max(0, 1e5 - v))
        : v,
    a = infDlg(!0),
    s = st.get("soc:me", null) || {},
    U = "galac" === e ? " m" : "solitaire" === e ? "" : " pts";
  if ("ask" === a.dataset.t) return;
  const n = a.dataset.g === e && a.dataset.t === t;
  ((a.dataset.g = e), (a.dataset.t = t), n || (a.dataset.n = "0"));
  const o = {
      g2048: "2048",
      tetris: "Tèconta",
      planetes: "Planètes · " + ("o" === infKey(e) ? "Orbite" : "Classique"),
      caches: "Mots cachés · Cascade",
      galac: "Galacfish · Mode infini",
      solitaire: "Solitaire · Mode rapide",
      recif: "Récif appétissant · Mode Rank",
      bulles: "Attaque marine · Protéger Zeni",
      garde: "Attaque marine · Garde du Lagon",
      crabes: "Crabes Farceurs · Mode Rank",
    }[e],
    i = [
      ["m", "Mes scores", IC_MD],
      ["a", "Amis", IC_MP],
      ["w", "Global", IC_PL],
    ]
      .map(
        ([a, s, n]) =>
          `<button class="${a === t ? "on" : ""}" data-a="infTab" data-v="${e}:${a}">${n}${s}</button>`,
      )
      .join("");
  let r = "";
  if ("m" === t) {
    const t = ("galac" === e && !gfRkOn() ? [] : infTop(e)).slice(0, 5),
      lk = "galac" === e && !gfRkOn();
    r = t.length
      ? `${infList(t.map((e, t) => `<li><i>${t + 1}</i><span>${e.t ? new Date(e.t).toLocaleDateString("fr", { day: "numeric", month: "short" }) : "—"}</span><b>${SF(e.s)}${U}</b></li>`))}`
      : lk
        ? '<p class="note">🔒 Termine le mode histoire (niveau 100) pour débloquer l’affichage de tes scores.</p>'
        : '<p class="note">Aucun score pour l’instant : lance une partie${G==="solitaire"?" rapide":" infinie"}.</p>';
  } else if ("w" === t && window.__fb && window.__fb.lbTop) {
    infLbSync();
    const t = infKeyP(e),
      a = infLB[t];
    window.__fb.u
      ? !a || Date.now() - a.t > 6e4
        ? ((r = '<p class="note">Chargement du classement…</p>'),
          infLBp[t] ||
            ((infLBp[t] = 1),
            window.__fb
              .lbTop(t)
              .then(
                (e) => {
                  infLB[t] = { t: Date.now(), r: e };
                },
                () => {
                  infLB[t] = { t: Date.now(), r: null };
                },
              )
              .finally(() => {
                infLBp[t] = 0;
                const a = $("#infd");
                a && a.dataset.g === e && "w" === a.dataset.t && infBoard(e, "w");
              })))
        : (r = a.r
            ? a.r.length
              ? `${infList(
                  a.r.map((e, t) => {
                    let a = 0;
                    for (const t of e.id) a = (31 * a + t.charCodeAt(0)) % 360;
                    return `<li class="${e.id === SO.uid ? "me" : ""}"><i>${t + 1}</i><span class="fr-av em" style="--h:${a}" aria-hidden="true">${esc((e.n || "?")[0])}</span><span>${esc(e.n || "Joueur")}</span><b>${SF(e.s)}${U}</b></li>`;
                  }),
                )}`
              : '<p class="note">Aucun score public pour l’instant.</p>'
            : '<p class="note">Classement indisponible pour l’instant.</p>')
      : (r = '<p class="note">Connecte-toi (menu du compte) pour voir le classement mondial.</p>');
  } else if (window.claude && window.claude.use && "na" !== SO.st)
    if (SO.got) {
      const a = infRows(e, t);
      r = a.length
        ? `${infList(a.map(([e, t], a) => `<li class="${e === SO.uid ? "me" : ""}"><i>${a + 1}</i>${socAv(e)}<span>${esc(e === SO.uid ? s.name || "Moi" : (SO.P[e] && SO.P[e].name) || "Ami")}</span><b>${SF(t)}${U}</b></li>`))}`
        : `<p class="note">${"a" === t ? "Aucun score d’ami à afficher pour l’instant." : "Aucun score public pour l’instant."}</p>`;
    } else {
      (SO.col || "conn" === SO.st || socInit(), (r = '<p class="note">Chargement du classement…</p>'));
      const s = +a.dataset.n + 1;
      ((a.dataset.n = s),
        s < 10 &&
          setTimeout(() => {
            const a = $("#infd");
            a && a.dataset.g === e && a.dataset.t === t && infBoard(e, t);
          }, 1200));
    }
  else r = '<p class="note">Les classements sont offerts dans l’app Claude, connecté(e).</p>';
  (infShr(),
    (a.innerHTML = `<div class="infb"><button class="infx" data-a="infX" aria-label="Fermer">×</button><h2>${o}</h2><div class="plseg infs">${i}</div>${r}</div>`));
  const l = a.querySelector(".infpg");
  l &&
    l.addEventListener("scroll", () => {
      const e = Math.round(l.scrollLeft / (l.clientWidth || 1));
      a.querySelectorAll(".infdots button").forEach((t, a) => t.classList.toggle("on", a === e));
    });
}
Object.assign(act, {
  infBd: (e) => {
    const t = $("#infd");
    if (t && t.classList.contains("infin") && t.dataset.g === e) return gfInfOut(t);
    (t && "ask" !== t.dataset.t && t.remove(), infBoard(e, "m"), infLbBtn(!0));
  },
  infPg: (e) => {
    const t = $("#infd .infpg");
    t && t.scrollTo({ left: +e * t.clientWidth, behavior: "smooth" });
  },
  infTab: (e) => {
    const [t, a] = e.split(":");
    infBoard(t, a);
  },
  infX: () => {
    gfInfOut($("#infd"));
  },
  infSh: (e) => {
    if (!/^[pfn]$/.test(e)) return;
    try {
      (st.set("inf:sh", e), socMine());
    } catch (e) {}
    try {
      infLbSync();
    } catch (e) {}
    const t = $("#infd");
    if (t)
      if ("ask" === t.dataset.t) {
        const e = t.dataset.pg;
        (t.remove(), e && act.infGo(e));
      } else infBoard(t.dataset.g, t.dataset.t);
  },
  infSet: (e) => {
    if (/^[pfn]$/.test(e)) {
      try {
        (st.set("inf:sh", e), socMine());
      } catch (e) {}
      try {
        infLbSync();
      } catch (e) {}
      prefScreen();
    }
  },
});
const infDone = (e) => {
  let t = 0;
  try {
    for (let a = 0, N = INF1[e] ? lvMA(e) : nl(e); a < N; a++) st.get(ckey(e) + ":" + a, !1) && t++;
  } catch (e) {}
  return t;
};
const infOk = (e) => UNL() || "blocs" === e || infDone(e) >= 10;
function infCard(e) {
  if ("caches" === e) return "";
  const t = infBest(e);
  return infOk(e)
    ? `<section class="rc plmode" data-g="∞"><div class="rc-t"><small>Mode infini</small><b>Sans fin</b><span>${"planetes" === e ? "Avec le mode choisi ci-dessus. " : ""}${t ? "Record : " + t + " pts" : "Pas encore de record"}</span></div><div class="infbt"><button class="btn" data-a="infGo" data-v="${e}">Jouer</button><button class="btn alt" data-a="infBd" data-v="${e}">${IC_LB}Classement</button></div></section>`
    : `<section class="rc plmode" data-g="🔒"><div class="rc-t"><small>Mode infini</small><b>Verrouillé</b><span>Termine 10 niveaux pour le débloquer (${infDone(e)} / 10).</span></div></section>`;
}
function plModeSeg() {
  const e = plMd();
  return `<div class="rcx-m"><div class="rcx-t"><small>Mode de jeu</small><span>${"orbite" === e ? "Planètes attirées vers le centre" : "eau" === e ? "Les objets remontent vers la surface" : "Les fruits tombent au fond"}</span></div><div class="plseg"><button class="${e ? "" : "on"}" data-a="plMode" data-v="">Fruits</button><button class="${"eau" === e ? "on" : ""}" data-a="plMode" data-v="eau">Sous l’eau${plLk("eau", 15)}</button><button class="${"orbite" === e ? "on" : ""}" data-a="plMode" data-v="orbite">Planètes${plLk("orbite", 35)}</button></div></div>`;
}
function anaArea() {
  const e = lvMA("ana"),
    t = [...Array(e).keys()].filter((e) => st.get(ckey("ana") + ":" + e, !1)).length;
  if (!anaOn()) {
    const e = [...Array(60).keys()].findIndex(
      (e) => !st.get(ckey("mots") + ":" + e, !1) && !st.get("k:mots:" + e, !1),
    );
    return `<div class="rcx-b"><div class="rcx-r"><div class="rcx-t"><small>Mode Anagramme 🔒</small><span>Débloqué au niveau 12 · tu en es au niveau ${Math.max(1, e + 1)}</span></div></div></div>`;
  }
  return `<div class="rcx-b"><div class="rcx-r"><div class="rcx-t"><small>Mode Anagramme</small><span>${t ? t + " niveau" + (t > 1 ? "s" : "") + " terminé" + (t > 1 ? "s" : "") : "Aucun niveau terminé"}</span></div><button class="rc-go" data-a="open" data-v="ana">${t ? "Continuer" : "Jouer"}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></div></div>`;
}
function wdArea(e) {
  const t = anaOn(),
    a = [...Array(60).keys()].findIndex(
      (e) => !st.get(ckey("mots") + ":" + e, !1) && !st.get("k:mots:" + e, !1),
    );
  return `<div class="rcx-b"><div class="rcx-m"><div class="rcx-t"><small>Mode de jeu</small><span>${"ana" === e ? "Mots entremêlés" : "Relie les lettres"}</span></div><div class="plseg"><button class="${"mots" === e ? "on" : ""}" data-a="wdMode" data-v="mots">Roue des mots</button><button class="${"ana" === e ? "on" : ""}" data-a="wdMode" data-v="ana">${t ? "" : "🔒 "}Anagramme</button></div></div>${t ? "" : `<p class="note" style="margin:0">Anagramme se débloque au niveau 12 de la Roue des mots (tu en es au niveau ${Math.max(1, a + 1)}).</p>`}</div>`;
}
function infArea(e) {
  if ("mots" === e || "ana" === e) return wdArea(e);
  const t = infOk(e),
    a = infBest(e),
    s = t
      ? `<div class="rcx-r"><div class="rcx-t"><small>Mode infini</small><span>${a ? "Record : " + a + " pts" : "Pas encore de record"}</span></div><button class="rc-go" data-a="infGo" data-v="${e}">Jouer ∞</button><button class="rcx-lb" data-a="infBd" data-v="${e}" aria-label="Classement">${IC_LB}</button></div>`
      : `<div class="rcx-r"><div class="rcx-t"><small>Mode infini 🔒</small><span>Termine 10 niveaux (${infDone(e)} / 10)</span></div><button class="rcx-lb" data-a="infBd" data-v="${e}" aria-label="Classement">${IC_LB}</button></div>`;
  return `<div class="rcx-b">${"planetes" === e ? plModeSeg() : "caches" === e ? caSeg() : ""}${"caches" !== e ? s : ""}</div>`;
}
function caSeg() {
  const e = caOn();
  return `<div class="rcx-m"><div class="rcx-t"><small>Mode de jeu</small><span>${e ? "Les lettres tombent" : "Relie les lettres"}</span></div><div class="plseg"><button class="${e ? "" : "on"}" data-a="caMode" data-v="">Classique</button><button class="${e ? "on" : ""}${caUnl() ? "" : " lk"}" data-a="caMode" data-v="${caUnl() ? "cascade" : "lk"}">${caUnl() ? "" : "🔒 "}Cascade</button></div></div>`;
}
((act.caMode = (e) => {
  if ("lk" !== e) {
    try {
      st.set("ca:mode", "cascade" === e ? "cascade" : "");
    } catch (e) {}
    hub("caches");
  } else msg("Le mode Cascade se débloque après avoir terminé le niveau 100.");
}),
  (act.wdMode = (e) => {
    ("mots" !== e && "ana" !== e) || hub(e);
  }),
  (act.infGo = (e) => {
    if ("galac" === e) {
      if ("" === infShr() && window.claude && window.claude.use) return void ($("#infd") || infAsk(e));
      return void act.gfPlay();
    }
    if (INFN[e] && !gLock(e) && !gHid(e) && infOk(e)) {
      if ("" === infShr() && window.claude && window.claude.use) return infAsk(e);
      ((INFG = e),
        (cur = e),
        (daily = !1),
        (lv = 0),
        (playing = !0),
        (wsG = null),
        theme(e, !1),
        { g2048: p2048, tetris: pTeconta, planetes: pPlan, caches: pCasc, blocs: pBlocs }[e](void 0),
        window.scrollTo(0, 0));
    }
  }),
  setTimeout(() => {
    Object.keys(window)
      .filter((e) => /Mu$/.test(e))
      .forEach((e) => {
        const t = window[e];
        if (!t || "function" != typeof t.set || "function" != typeof t.build || t._dz0) return;
        t._dz0 = 1;
        const a = t.set;
        t.set = function (e) {
          if (e && !this.on)
            Object.keys(window)
              .filter((k) => /Mu$/.test(k))
              .forEach((k) => {
                const o = window[k];
                if (o && o !== this && o.on && "function" == typeof o.set)
                  try {
                    o.set(!1);
                  } catch (e) {}
              });
          if (e && this.L && this.L.out && this._dc && void 0 !== mg && mg) {
            try {
              this.L.out.connect(mg);
            } catch (e) {}
            this._dc = !1;
          }
          const t = a.call(this, e);
          return (
            clearTimeout(this._dz),
            !this.on &&
              this.L &&
              this.L.out &&
              !this._dc &&
              (this._dz = setTimeout(() => {
                if (!this.on && this.L && !this._dc) {
                  try {
                    (this.L.out.gain.cancelScheduledValues(AC.currentTime),
                      this.L.out.gain.setTargetAtTime(0, AC.currentTime, 0.02));
                  } catch (e) {}
                  this._dz = setTimeout(() => {
                    if (!this.on && this.L && !this._dc) {
                      try {
                        this.L.out.disconnect();
                      } catch (e) {}
                      this._dc = !0;
                    }
                  }, 350);
                }
              }, 3e3)),
            t
          );
        };
      });
  }, 0));
const DEF = {
  vol: 60,
  music: !0,
  sfx: !0,
  vib: !0,
  snow: !0,
  breath: !1,
  kbd: "qwerty",
  sky: "auto",
  bg: !1,
};
let PF = null;
const prefs = () =>
  PF ||
  (PF = (() => {
    const e = st.get("set", {}),
      t = Object.assign({}, DEF, e);
    return (22 !== e.m && ((t.breath = !1), (t.m = 22), st.set("set", t)), t);
  })());
const savePrefs = () => st.set("set", prefs());
function audio() {
  if (AC) "suspended" === AC.state && AC.resume();
  else
    try {
      ((AC = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: "playback" })),
        (mg = AC.createGain()),
        mg.connect(AC.destination),
        (music = AC.createGain()),
        (music.gain.value = 0),
        music.connect(mg),
        [110, 165, 220, 277.2, 330].forEach((e, t) => {
          const a = AC.createOscillator(),
            s = AC.createGain(),
            n = AC.createOscillator(),
            o = AC.createGain();
          ((a.frequency.value = e),
            (s.gain.value = 0.05),
            (n.frequency.value = 0.06 + 0.03 * t),
            (o.gain.value = 0.03),
            n.connect(o),
            o.connect(s.gain),
            a.connect(s),
            s.connect(music),
            a.start(),
            n.start());
        }),
        apply());
    } catch (e) {}
}
function apply() {
  if (!AC || !music) return;
  try {
    bgOn() && document.hidden ? acHold() : acFree();
  } catch (e) {}
  const e = prefs(),
    t = AC.currentTime;
  (mg.gain.setTargetAtTime(e.vol / 100, t, 0.1),
    music.gain.setTargetAtTime(
      window.ZNON
        ? 0
        : e.music && (!PLK || ("base" === PLK && !PLPA) || (PLPA && !document.hidden))
          ? ("object" == typeof prMu && prMu.on) ||
            ("object" == typeof aqMu && aqMu.on) ||
            ("object" == typeof xmMu && xmMu.on) ||
            ("object" == typeof ttMu && ttMu.on) ||
            ("object" == typeof g2Mu && g2Mu.on) ||
            ("object" == typeof bxMu && bxMu.on) ||
            ("object" == typeof cbMu && cbMu.on) ||
            ("object" == typeof unMu && unMu.on) ||
            ("object" == typeof chMu && chMu.on) ||
            ("object" == typeof lfMu && lfMu.on) ||
            ("object" == typeof ecMu && ecMu.on) ||
            ("object" == typeof dmMu && dmMu.on) ||
            ("object" == typeof mtMu && mtMu.on) ||
            ("object" == typeof ahMu && ahMu.on) ||
            ("object" == typeof bkMu && bkMu.on) ||
            ("object" == typeof ccMu && ccMu.on) ||
            ("object" == typeof blMu && blMu.on) ||
            ("object" == typeof soMu && soMu.on) ||
            ("object" == typeof zrMu && zrMu.on) ||
            ("object" == typeof kbMu && kbMu.on) ||
            ("object" == typeof zgMu && zgMu.on) ||
            ("object" == typeof zcMu && zcMu.on) ||
            ("object" == typeof bzMu && bzMu.on) ||
            ("object" == typeof gfMu && gfMu.on) ||
            ("object" == typeof fiMu && fiMu.on) ||
            ("object" == typeof kzMu && kzMu.on)
            ? ("object" == typeof ccMu && ccMu.on) ||
              ("object" == typeof soMu && soMu.on) ||
              ("object" == typeof unMu && unMu.on)
              ? 0
              : 0.0167
            : 0.6
          : 0,
      t,
      1.2,
    ),
    "object" == typeof aqMu && aqMu.vol(e.music),
    "object" == typeof xmMu && xmMu.vol(e.music),
    "object" == typeof ttMu && ttMu.vol(e.music),
    "object" == typeof g2Mu && g2Mu.vol(e.music),
    "object" == typeof bxMu && bxMu.vol(e.music),
    "object" == typeof cbMu && cbMu.vol(e.music),
    "object" == typeof unMu && unMu.vol(e.music),
    "object" == typeof chMu && chMu.vol(e.music),
    "object" == typeof lfMu && lfMu.vol(e.music),
    "object" == typeof ecMu && ecMu.vol(e.music),
    "object" == typeof dmMu && dmMu.vol(e.music),
    "object" == typeof mtMu && mtMu.vol(e.music),
    "object" == typeof ahMu && ahMu.vol(e.music),
    "object" == typeof bkMu && bkMu.vol(e.music),
    "object" == typeof ccMu && ccMu.vol(e.music),
    "object" == typeof blMu && blMu.vol(e.music),
    "object" == typeof soMu && soMu.vol(e.music),
    "object" == typeof zrMu && zrMu.vol(e.music),
    "object" == typeof kbMu && kbMu.vol(e.music),
    "object" == typeof zgMu && zgMu.vol(e.music),
    "object" == typeof zcMu && zcMu.vol(e.music),
    "object" == typeof bzMu && bzMu.vol(e.music),
    "object" == typeof gfMu && gfMu.vol(e.music),
    "object" == typeof fiMu && fiMu.vol(e.music),
    "object" == typeof kzMu && kzMu.vol(e.music));
}
function sfx(e = 520, t = 0.25) {
  if (!AC || !mg || !prefs().sfx) return;
  if ("object" == typeof xmMu && xmMu.on) return xmMu.fx(e, t);
  if ("object" == typeof aqMu && aqMu.on) return aqMu.fx(e, t);
  const a = AC.createOscillator(),
    s = AC.createGain(),
    n = AC.currentTime;
  ((a.frequency.value = e), (t = Math.max(t, 0.09)));
  const o = Math.min(0.006, t / 4);
  (s.gain.setValueAtTime(0, n),
    s.gain.linearRampToValueAtTime(0.2, n + o),
    s.gain.setTargetAtTime(0, n + o, t / 6),
    a.connect(s),
    s.connect(mg),
    a.start(n),
    a.stop(n + t + 0.2));
}
const vib = (e) => {
  prefs().vib && navigator.vibrate && navigator.vibrate(e);
};
// Glisser sur une grille (Mots cachés, Labyrinthe) : le jeu en cours expose wsG { down, move, up, cancel, … }.
(Input.sur(
  ["toucher", "glisser", "survoler", "lacher"],
  (a, i) => {
    const e = i.evt;
    "toucher" === a
      ? wsG && (wsG.all || (e.target.closest && e.target.closest(".sg,.mz-b"))) && wsG.down(e)
      : "lacher" !== a
        ? wsG && wsG.move(e)
        : "pointercancel" === e.type
          ? wsG && wsG.cancel(e)
          : wsG && wsG.up(e);
  },
  { cible: document, annulation: !0 },
),
  document.addEventListener(
    "touchstart",
    (e) => {
      wsG && wsG.ts && wsG.ts(e);
    },
    { passive: !1 },
  ),
  document.addEventListener(
    "touchmove",
    (e) => {
      wsG && wsG.tm && wsG.tm(e);
    },
    { passive: !1 },
  ),
  document.addEventListener("touchend", (e) => {
    wsG && wsG.te && wsG.te(e);
  }),
  document.addEventListener("touchcancel", (e) => {
    wsG && wsG.te && wsG.te(e);
  }),
  document.addEventListener("keydown", (e) => {
    if (!wsG || !wsG.key || e.ctrlKey || e.metaKey || e.altKey) return;
    const t = { ArrowUp: 0, ArrowRight: 1, ArrowDown: 2, ArrowLeft: 3 }[e.key],
      a = e.target;
    void 0 === t ||
      (a && ("INPUT" === a.tagName || "TEXTAREA" === a.tagName)) ||
      (e.preventDefault(), wsG.key(t));
  }),
  document.addEventListener(
    "click",
    (e) => {
      wsSw && ((wsSw = !1), e.stopPropagation(), e.preventDefault());
    },
    !0,
  ),
  document.addEventListener("click", (e) => {
    audio();
    const t = e.target.closest("[data-a]");
    t &&
      !t.disabled &&
      (apply(),
      sfx(
        t.classList.contains("kk") ? 420 : t.classList.contains("card") ? 740 : 520,
        t.classList.contains("kk") ? 0.08 : 0.25,
      ),
      vib(10),
      act[t.dataset.a] && act[t.dataset.a](t.dataset.v));
  }),
  document.addEventListener("input", (e) => {
    if ("vol" === e.target.dataset.r) {
      audio();
      const t = prefs();
      ((t.vol = +e.target.value), savePrefs(), ($("#vv").textContent = t.vol + " %"), apply());
    }
  }));
