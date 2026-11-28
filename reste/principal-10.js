const qzGuy = (e) => {
  const t = "ok" === e,
    a = "no" === e,
    s = 'stroke="#4a4290" stroke-width="1.9" fill="none" stroke-linecap="round"',
    n = t
      ? '<path class="qzsp" d="M-21 -44l1.2 2.8 2.8 1.2-2.8 1.2-1.2 2.8-1.2-2.8-2.8-1.2 2.8-1.2z" fill="#ffe27a"/><path class="qzsp s2" d="M22 -36l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z" fill="#ffe27a"/><path class="qzsp s3" d="M20 -8l.9 2 2 .9-2 .9-.9 2-.9-2-2-.9 2-.9z" fill="#fff6c8"/>'
      : "";
  return `<svg viewBox="-28 -66 56 68" aria-hidden="true"><defs><radialGradient id="qzb" cx=".36" cy=".26" r=".98"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="#ece6ff"/><stop offset="1" stop-color="#b9acec"/></radialGradient><radialGradient id="qzs" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#fff6c2"/><stop offset="1" stop-color="#ffc83d"/></radialGradient><radialGradient id="qzg"><stop offset="0" stop-color="#fff3c0" stop-opacity=".85"/><stop offset="1" stop-color="#fff3c0" stop-opacity="0"/></radialGradient></defs><ellipse cx="0" cy="-1" rx="12" ry="2.2" fill="rgba(0,0,0,.2)"/>${a ? `<path d="M1 -38Q9 -42 12 -36" stroke="#a79bdc" stroke-width="2" fill="none" stroke-linecap="round"/><polygon points="${sStar(13, -34, 4.8, 2.3)}" fill="url(#qzs)" stroke="#ffc83d" stroke-width="1.2" stroke-linejoin="round"/>` : `<path d="M1 -38Q6 -46 4 -52" stroke="#a79bdc" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="4" cy="-55" r="9" fill="url(#qzg)"/><polygon points="${sStar(4, -55, 5.8, 2.8)}" fill="url(#qzs)" stroke="#ffc83d" stroke-width="1.6" stroke-linejoin="round"/>`}<path d="M0 -39C10 -39 15.5 -29 15.5 -19C15.5 -8 9 -2 0 -2C-9 -2 -15.5 -8 -15.5 -19C-15.5 -29 -10 -39 0 -39Z" fill="url(#qzb)"/><ellipse cx="-6.4" cy="-30" rx="3.2" ry="5.4" fill="#fff" opacity=".6" transform="rotate(18 -6.4 -30)"/>${t ? `<path d="M-9.2 -21.4q3.4 -4.2 6.8 0M2.4 -21.4q3.4 -4.2 6.8 0" ${s}/><path d="M-4.6 -17.6Q0 -9.4 4.6 -17.6Z" fill="#b8456a" stroke="#b8456a" stroke-width="1" stroke-linejoin="round"/><path d="M-2.2 -13.4q2.2 -2.2 4.4 0q-2.2 1.8 -4.4 0z" fill="#ff8fa8"/><ellipse cx="-11" cy="-16.6" rx="2.7" ry="1.7" fill="#ff9db8" opacity=".7"/><ellipse cx="11" cy="-16.6" rx="2.7" ry="1.7" fill="#ff9db8" opacity=".7"/>` : a ? `<ellipse cx="-5.8" cy="-21" rx="1.9" ry="2.6" fill="#4a4290"/><ellipse cx="5.8" cy="-21" rx="1.9" ry="2.6" fill="#4a4290"/><circle cx="-5.2" cy="-22" r=".75" fill="#fff"/><circle cx="6.4" cy="-22" r=".75" fill="#fff"/><path d="M-10.4 -24.2L-3.6 -27.4M10.4 -24.2L3.6 -27.4" ${s}/><path d="M-3.8 -13Q0 -17.2 3.8 -13" stroke="#7a6cc0" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M-9.8 -17.6q2.2 2.8 0 4.6q-2.2 -1.8 0 -4.6z" fill="#8fd0ff" stroke="#5aa8e0" stroke-width=".7"/>` : '<ellipse cx="-5.8" cy="-23" rx="2.1" ry="2.9" fill="#4a4290"/><ellipse cx="5.8" cy="-23" rx="2.1" ry="2.9" fill="#4a4290"/><circle cx="-5.1" cy="-24.2" r=".85" fill="#fff"/><circle cx="6.5" cy="-24.2" r=".85" fill="#fff"/><path d="M-2.8 -16.4q2.8 2.6 5.6 0" stroke="#7a6cc0" stroke-width="1.5" fill="none" stroke-linecap="round"/>'}<g fill="#efb63e"><circle cx="-11.8" cy="-18.4" r="1.1"/><circle cx="-9.6" cy="-16" r="1.1"/><circle cx="-12.6" cy="-15.2" r=".9"/><circle cx="11.8" cy="-18.4" r="1.1"/><circle cx="9.6" cy="-16" r="1.1"/><circle cx="12.6" cy="-15.2" r=".9"/></g>${(t
    ? [
        [-17.6, -27],
        [17.6, -27],
      ]
    : a
      ? [
          [-13.6, -5.5],
          [13.6, -5.5],
        ]
      : [
          [-14.8, -10],
          [14.8, -10],
        ]
  )
    .map(([e, t]) => `<circle cx="${e}" cy="${t}" r="4.6" fill="#e6defc" stroke="#c7bbf0" stroke-width="1"/>`)
    .join("")}${n}</svg>`;
};
const CHN = [];
const CHKG = [];
const CHRY = [];
(() => {
  for (let e = 0; e < 64; e++) {
    const t = e >> 3,
      a = 7 & e,
      s = [],
      n = [],
      o = [];
    for (const [e, n] of [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ]) {
      const o = t + e,
        i = a + n;
      o >= 0 && o < 8 && i >= 0 && i < 8 && s.push(8 * o + i);
    }
    for (let e = -1; e <= 1; e++)
      for (let s = -1; s <= 1; s++) {
        if (!e && !s) continue;
        const o = t + e,
          i = a + s;
        o >= 0 && o < 8 && i >= 0 && i < 8 && n.push(8 * o + i);
      }
    for (const [e, s] of [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
      [-1, 1],
      [-1, -1],
      [1, 1],
      [1, -1],
    ]) {
      const n = [];
      let i = t + e,
        r = a + s;
      for (; i >= 0 && i < 8 && r >= 0 && r < 8;) (n.push(8 * i + r), (i += e), (r += s));
      o.push(n);
    }
    (CHN.push(s), CHKG.push(n), CHRY.push(o));
  }
})();
const CH0 = [
  -4, -2, -3, -5, -6, -3, -2, -4, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 3, 5, 6, 3, 2, 4,
];
const CHV = [0, 100, 320, 330, 500, 900, 0];
const CHRM = { 60: 3, 63: 1, 56: 2, 4: 12, 7: 4, 0: 8 };
const chStart = () => ({ b: Int8Array.from(CH0), t: 1, c: 15, ep: -1, hm: 0 });
function chAtk(e, t, a) {
  const s = t >> 3,
    n = 7 & t;
  if (a > 0) {
    if (s < 7) {
      if (n > 0 && 1 === e[t + 7]) return !0;
      if (n < 7 && 1 === e[t + 9]) return !0;
    }
  } else if (s > 0) {
    if (n > 0 && -1 === e[t - 9]) return !0;
    if (n < 7 && -1 === e[t - 7]) return !0;
  }
  const o = CHN[t],
    i = CHKG[t],
    r = 2 * a,
    l = 6 * a;
  for (let t = 0; t < o.length; t++) if (e[o[t]] === r) return !0;
  for (let t = 0; t < i.length; t++) if (e[i[t]] === l) return !0;
  const c = CHRY[t];
  for (let t = 0; t < 8; t++) {
    const s = c[t];
    for (let n = 0; n < s.length; n++) {
      const o = e[s[n]];
      if (o) {
        const e = o * a;
        if (e > 0 && (5 === e || (t < 4 ? 4 === e : 3 === e))) return !0;
        break;
      }
    }
  }
  return !1;
}
function chGen(e) {
  const t = e.b,
    a = e.t,
    s = [],
    n = (e, t) => {
      s.push({ f: e, t: t, p: 0 });
    },
    o = (e, t) => {
      for (const a of [5, 4, 3, 2]) s.push({ f: e, t: t, p: a });
    };
  for (let s = 0; s < 64; s++) {
    const i = t[s];
    if (!i || i > 0 != a > 0) continue;
    const r = i < 0 ? -i : i,
      l = 7 & s;
    if (1 === r) {
      const i = a > 0 ? -8 : 8,
        r = a > 0 ? 6 : 1,
        c = s + i,
        d = c >> 3 == (a > 0 ? 0 : 7);
      t[c] || (d ? o(s, c) : n(s, c), s >> 3 !== r || t[c + i] || n(s, c + i));
      for (const i of [-1, 1]) {
        if (l + i < 0 || l + i > 7) continue;
        const r = c + i,
          f = t[r];
        ((f && f > 0 != a > 0) || (!f && r === e.ep)) && (d ? o(s, r) : n(s, r));
      }
    } else if (2 === r || 6 === r) {
      const o = 2 === r ? CHN[s] : CHKG[s];
      for (let e = 0; e < o.length; e++) {
        const i = t[o[e]];
        (i && i > 0 == a > 0) || n(s, o[e]);
      }
      6 === r &&
        (a > 0 && 60 === s
          ? (!(1 & e.c) ||
              t[61] ||
              t[62] ||
              4 !== t[63] ||
              chAtk(t, 60, -1) ||
              chAtk(t, 61, -1) ||
              chAtk(t, 62, -1) ||
              n(60, 62),
            !(2 & e.c) ||
              t[59] ||
              t[58] ||
              t[57] ||
              4 !== t[56] ||
              chAtk(t, 60, -1) ||
              chAtk(t, 59, -1) ||
              chAtk(t, 58, -1) ||
              n(60, 58))
          : a < 0 &&
            4 === s &&
            (!(4 & e.c) ||
              t[5] ||
              t[6] ||
              -4 !== t[7] ||
              chAtk(t, 4, 1) ||
              chAtk(t, 5, 1) ||
              chAtk(t, 6, 1) ||
              n(4, 6),
            !(8 & e.c) ||
              t[3] ||
              t[2] ||
              t[1] ||
              -4 !== t[0] ||
              chAtk(t, 4, 1) ||
              chAtk(t, 3, 1) ||
              chAtk(t, 2, 1) ||
              n(4, 2)));
    } else {
      const e = CHRY[s],
        o = 4 === r ? 4 : 8;
      for (let i = 3 === r ? 4 : 0; i < o; i++) {
        const o = e[i];
        for (let e = 0; e < o.length; e++) {
          const i = t[o[e]];
          if (i) {
            i > 0 != a > 0 && n(s, o[e]);
            break;
          }
          n(s, o[e]);
        }
      }
    }
  }
  return s;
}
function chMk(e, t) {
  const a = e.b.slice(),
    s = t.f,
    n = t.t,
    o = a[s],
    i = a[n],
    r = o < 0 ? -o : o;
  let l = -1,
    c = e.c,
    d = e.hm + 1;
  if (((1 === r || i) && (d = 0), (a[n] = o), (a[s] = 0), 1 === r)) {
    if ((n !== e.ep || i || (a[n + (o > 0 ? 8 : -8)] = 0), 16 === (n > s ? n - s : s - n))) {
      const e = -o,
        t = 7 & n;
      ((t > 0 && a[n - 1] === e) || (t < 7 && a[n + 1] === e)) && (l = (s + n) / 2);
    }
    t.p && (a[n] = o > 0 ? t.p : -t.p);
  } else
    6 === r &&
      2 === (n > s ? n - s : s - n) &&
      (n > s ? ((a[s + 1] = a[s + 3]), (a[s + 3] = 0)) : ((a[s - 1] = a[s - 4]), (a[s - 4] = 0)));
  return ((c &= ~(CHRM[s] || 0) & ~(CHRM[n] || 0)), { b: a, t: -e.t, c: c, ep: l, hm: d });
}
function chKing(e, t) {
  const a = 6 * t;
  for (let t = 0; t < 64; t++) if (e[t] === a) return t;
  return -1;
}
function chLegal(e) {
  const t = [],
    a = e.t;
  for (const s of chGen(e)) {
    const n = chMk(e, s),
      o = chKing(n.b, a);
    o >= 0 && !chAtk(n.b, o, -a) && t.push(s);
  }
  return t;
}
const chChk = (e) => chAtk(e.b, chKing(e.b, e.t), -e.t);
const chKey = (e) => e.b.join("") + e.t + e.c + e.ep;
function chInsuf(e) {
  let t = 0;
  for (let a = 0; a < 64; a++) {
    const s = e[a] < 0 ? -e[a] : e[a];
    if (1 === s || 4 === s || 5 === s) return !1;
    (2 !== s && 3 !== s) || t++;
  }
  return t < 2;
}
const CHF = "abcdefgh";
const chSq = (e) => CHF[7 & e] + (8 - (e >> 3));
const chIdx = (e) => 8 * (8 - +e[1]) + CHF.indexOf(e[0]);
const chUci = (e) => chSq(e.f) + chSq(e.t) + (e.p ? "  nbrq"[e.p] : "");
function chSan(e, t, a) {
  const s = Math.abs(e.b[t.f]);
  let n;
  if (6 === s && 2 === Math.abs(t.t - t.f)) n = t.t > t.f ? "O-O" : "O-O-O";
  else {
    const o = e.b[t.t] || (1 === s && t.t === e.ep);
    if (1 === s) n = (o ? CHF[7 & t.f] + "x" : "") + chSq(t.t) + (t.p ? "=" + "  CFTD"[t.p] : "");
    else {
      n = "  CFTDR"[s];
      const i = a.filter((a) => a !== t && a.t === t.t && Math.abs(e.b[a.f]) === s);
      if (i.length) {
        const e = i.some((e) => (7 & e.f) == (7 & t.f)),
          a = i.some((e) => e.f >> 3 == t.f >> 3);
        n += e ? (a ? chSq(t.f) : 8 - (t.f >> 3)) : CHF[7 & t.f];
      }
      n += (o ? "x" : "") + chSq(t.t);
    }
  }
  const o = chMk(e, t);
  return (chChk(o) && (n += chLegal(o).length ? "+" : "#"), n);
}
function chReplay(e) {
  let t = chStart();
  const a = [chKey(t)],
    s = [],
    n = [];
  for (const o of e) {
    const e = chLegal(t),
      i = e.find((e) => chUci(e) === o);
    if (!i) break;
    (s.push(chSan(t, i, e)), n.push(i), (t = chMk(t, i)), a.push(chKey(t)));
  }
  return { S: t, keys: a, sans: s, ms: n };
}
function chStatus(e, t) {
  if (!chLegal(e).length) return chChk(e) ? { w: -e.t, y: "mat" } : { w: 0, y: "pat" };
  if (chInsuf(e.b)) return { w: 0, y: "ins" };
  if (e.hm >= 100) return { w: 0, y: "50" };
  const a = t[t.length - 1];
  let s = 0;
  for (const e of t) e === a && s++;
  return s >= 3 ? { w: 0, y: "rep" } : null;
}
const CHT = [
  null,
  [
    0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 10, 10, 20, 30, 30, 20, 10, 10, 5, 5, 10, 25, 25,
    10, 5, 5, 0, 0, 0, 20, 20, 0, 0, 0, 5, -5, -10, 0, 0, -10, -5, 5, 5, 10, 10, -20, -20, 10, 10, 5, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    -50, -40, -30, -30, -30, -30, -40, -50, -40, -20, 0, 0, 0, 0, -20, -40, -30, 0, 10, 15, 15, 10, 0, -30,
    -30, 5, 15, 20, 20, 15, 5, -30, -30, 0, 15, 20, 20, 15, 0, -30, -30, 5, 10, 15, 15, 10, 5, -30, -40, -20,
    0, 5, 5, 0, -20, -40, -50, -40, -30, -30, -30, -30, -40, -50,
  ],
  [
    -20, -10, -10, -10, -10, -10, -10, -20, -10, 0, 0, 0, 0, 0, 0, -10, -10, 0, 5, 10, 10, 5, 0, -10, -10, 5,
    5, 10, 10, 5, 5, -10, -10, 0, 10, 10, 10, 10, 0, -10, -10, 10, 10, 10, 10, 10, 10, -10, -10, 5, 0, 0, 0,
    0, 5, -10, -20, -10, -10, -10, -10, -10, -10, -20,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 10, 10, 10, 10, 10, 5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5,
    -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, 0, 0, 0, 5, 5, 0, 0, 0,
  ],
  [
    -20, -10, -10, -5, -5, -10, -10, -20, -10, 0, 0, 0, 0, 0, 0, -10, -10, 0, 5, 5, 5, 5, 0, -10, -5, 0, 5, 5,
    5, 5, 0, -5, 0, 0, 5, 5, 5, 5, 0, -5, -10, 5, 5, 5, 5, 5, 0, -10, -10, 0, 5, 0, 0, 0, 0, -10, -20, -10,
    -10, -5, -5, -10, -10, -20,
  ],
  [
    -30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50,
    -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -20, -30, -30, -40, -40, -30, -30, -20, -10, -20,
    -20, -20, -20, -20, -20, -10, 20, 20, 0, 0, 0, 0, 20, 20, 20, 30, 10, 0, 0, 10, 30, 20,
  ],
  [
    -50, -40, -30, -20, -20, -30, -40, -50, -30, -20, -10, 0, 0, -10, -20, -30, -30, -10, 20, 30, 30, 20, -10,
    -30, -30, -10, 30, 40, 40, 30, -10, -30, -30, -10, 30, 40, 40, 30, -10, -30, -30, -10, 20, 30, 30, 20,
    -10, -30, -30, -30, 0, 0, 0, 0, -30, -30, -50, -30, -30, -30, -30, -30, -30, -50,
  ],
];
function chEval(e) {
  let t = 0,
    a = 0;
  for (let t = 0; t < 64; t++) {
    const s = e[t];
    if (s) {
      const e = s < 0 ? -s : s;
      e > 1 && e < 6 && (a += CHV[e]);
    }
  }
  const s = a < 2400;
  for (let a = 0; a < 64; a++) {
    const n = e[a];
    if (!n) continue;
    const o = n > 0,
      i = o ? n : -n,
      r = CHV[i] + CHT[6 === i && s ? 7 : i][o ? a : 56 ^ a];
    t += o ? r : -r;
  }
  return t;
}
function chOrd(e, t) {
  const a = e.b;
  for (const s of t) {
    const t = a[s.t],
      n = a[s.f] < 0 ? -a[s.f] : a[s.f];
    let o = 0;
    (t ? (o = 1e3 + 10 * CHV[t < 0 ? -t : t] - CHV[n]) : 1 === n && s.t === e.ep && (o = 1100),
      s.p && (o += 800 + CHV[s.p]),
      (s.s = o));
  }
  t.sort((e, t) => t.s - e.s);
}
function chILp(n) {
  n = Math.max(1, n);
  const d = Math.min(6, 1 + Math.floor((n + 1) / 3));
  return {
    d,
    ms: Math.min(2500, 250 + n * 140),
    nz: Math.max(4, Math.round(110 / Math.pow(n, 1.15))),
    full: d < 6 ? 1 : 0,
  };
}
function chILg(n) {
  return { k: "ai", il: n, lv: n < 3 ? 1 : n < 8 ? 2 : 3, me: n % 2 ? 1 : -1 };
}
function chSearch(e, t) {
  const a =
    "object" == typeof t && t
      ? t
      : [
          null,
          { d: 1, ms: 250, nz: 110, full: 1 },
          { d: 3, ms: 900, nz: 20, full: 1 },
          { d: 6, ms: 2e3, nz: 8, full: 0 },
        ][t] || { d: 2, ms: 400, nz: 20, full: 1 };
  let s = 0,
    n = !1;
  const o = Date.now() + a.ms;
  function i(e, t, a, n) {
    s++;
    const o = chEval(e.b) * e.t;
    if (n <= 0 || o >= a) return o;
    o > t && (t = o);
    const r = chGen(e).filter((t) => e.b[t.t] || t.p || (1 === Math.abs(e.b[t.f]) && t.t === e.ep));
    chOrd(e, r);
    for (const s of r) {
      const o = chMk(e, s);
      if (chAtk(o.b, chKing(o.b, e.t), -e.t)) continue;
      const r = -i(o, -a, -t, n - 1);
      if (r >= a) return r;
      r > t && (t = r);
    }
    return t;
  }
  function r(e, t, a, l, c) {
    if ((!(1023 & ++s) && Date.now() > o && (n = !0), n)) return 0;
    if (e.hm >= 100) return 0;
    if (t <= 0) return i(e, a, l, 4);
    const d = chGen(e);
    chOrd(e, d);
    let f = -1e9,
      u = !1;
    for (const s of d) {
      const o = chMk(e, s);
      if (chAtk(o.b, chKing(o.b, e.t), -e.t)) continue;
      u = !0;
      const i = -r(o, t - 1, -l, -a, c + 1);
      if (n) return 0;
      if ((i > f && (f = i), i > a && (a = i), a >= l)) break;
    }
    return u ? f : chChk(e) ? -3e4 + c : 0;
  }
  const l = chLegal(e);
  if (!l.length) return null;
  if (1 === l.length) return l[0];
  chOrd(e, l);
  let c = l[0],
    d = new Map();
  for (let t = 1; t <= a.d; t++) {
    const s = [];
    let i = -1e9,
      f = null;
    for (const o of l) {
      const l = -r(chMk(e, o), t - 1, -1e9, a.full ? 1e9 : -i, 1);
      if (n) break;
      (s.push([o, l]), l > i && ((i = l), a.full || (f = o)));
    }
    if (n || s.length < l.length) break;
    if ((s.forEach(([e, t]) => d.set(e, t)), a.full)) {
      let e = -1e9;
      for (const [t, n] of s) {
        const s = n + Math.random() * a.nz;
        s > e && ((e = s), (c = t));
      }
    } else c = f;
    if ((l.sort((e, t) => (d.get(t) || 0) - (d.get(e) || 0)), Math.abs(d.get(l[0])) > 2e4 || Date.now() > o))
      break;
  }
  return c;
}
const CHTC = [0, 1, 3, 5, 10, 15, 30];
const CHLV = [
  { n: "Lapereau", e: "🐇", d: "Il apprend encore" },
  { n: "Renard", e: "🦊", d: "Malin et prudent" },
  { n: "Hibou", e: "🦉", d: "Réfléchit longtemps" },
];
const CH = {
  scr: "",
  cfg: Object.assign({ op: "ai", lv: 2, col: 0, tc: 0 }, st.get("ch:cfg", {})),
  g: null,
  fl: null,
  sel: -1,
  lg: [],
  pr: null,
  think: !1,
  busy: !1,
  m: "",
  cf: "",
  cft: 0,
  t0: 0,
  tick: 0,
  fgT: 0,
  flg: !1,
  subs: {},
  G: {},
  got: {},
  err: {},
  ec: {},
  slow: 0,
  fid: "",
  rc: null,
  pay: "",
  nw: !1,
};
const chGid = (e) => scrGid(e) + "_c";
const chNm = (e) => scrNm(e);
const chTcT = (e) => (e ? e + " min" : "Sans limite");
const chFmt = (e) => (
  (e = Math.max(0, Math.ceil(e / 1e3))),
  Math.floor(e / 60) + ":" + String(e % 60).padStart(2, "0")
);
const CHSV = [
  "",
  '<circle cx="22.5" cy="13" r="5.3"/><path d="M22.5 19.2c-3.4 0-5.4 1.8-5.4 4.1 0 1.9 1.1 3.3 2.5 4.4-4 2-7.2 5.6-7.2 10.3h20.2c0-4.7-3.2-8.3-7.2-10.3 1.4-1.1 2.5-2.5 2.5-4.4 0-2.3-2-4.1-5.4-4.1z"/>',
  '<path d="M11.5 38c-.5-9.5 1.5-16 7.5-20.2-1.6-.6-3-1.6-4.2-3.1 1.4-2.2 3.2-3.6 5.6-4.3L21.2 7l3.6 2.5c8.2 1.2 13.7 8.2 13.7 17.5V38z"/><path class="dt" d="M17.5 21.5c1.8-1.2 3.2-2.8 3.8-5"/><circle class="ey" cx="23" cy="14.2" r="1.3"/>',
  '<circle cx="22.5" cy="7.6" r="2.5"/><path d="M22.5 11c5.4 3.5 8.6 7.7 8.6 12.1 0 2.9-1.6 5-3.6 6.6h-10c-2-1.6-3.6-3.7-3.6-6.6 0-4.4 3.2-8.6 8.6-12.1z"/><path d="M11.5 38.2c0-3.3 2.8-5.6 6-5.6h10c3.2 0 6 2.3 6 5.6z"/><path class="dt" d="M19.8 21.8l5.4-5.6"/>',
  '<path d="M11 38v-4.6l3.2-2.6V19l-3.2-2.8V8.6h5.8v3.9h3.8V8.6h3.8v3.9h3.8V8.6H34v7.6L30.8 19v11.8l3.2 2.6V38z"/><path class="dt" d="M14.2 21.5h16.6M14.2 30h16.6"/>',
  '<circle cx="9.6" cy="14.2" r="2.3"/><circle cx="16.1" cy="11.4" r="2.3"/><circle cx="22.5" cy="10.4" r="2.3"/><circle cx="28.9" cy="11.4" r="2.3"/><circle cx="35.4" cy="14.2" r="2.3"/><path d="M9.6 16.5l4.8 14L16.1 13.7l4.6 15.6 1.8-17.6 1.8 17.6 4.6-15.6 1.7 16.8 4.8-14-2.6 19.7H12.2z"/><path d="M11.6 38.4h21.8v-3.3H11.6z"/>',
  '<path class="cx" d="M22.5 4.8v8.2M18.7 8.7h7.6"/><path d="M22.5 14c-5.6 0-9.2 3.4-9.2 7.6 0 2.5 1.4 4.3 3.1 5.7-3.6 2-5.8 5.1-5.8 9.7h23.8c0-4.6-2.2-7.7-5.8-9.7 1.7-1.4 3.1-3.2 3.1-5.7 0-4.2-3.6-7.6-9.2-7.6z"/><path class="dt" d="M16.5 27.3h12"/>',
];
const CHSK = [
  { id: "f", n: "Forêt", p: 0, d: "Les pièces de la clairière" },
  { id: "h", n: "Hiver", p: 150, d: "Tuques, écharpes et neige" },
  { id: "o", n: "Océan", p: 350, d: "Coquillages, bulles et trident" },
  { id: "e", n: "Espace", p: 600, d: "Casques, anneaux et étoiles" },
];
const CHSC =
  '<path class="x1" d="M13.2 31.2q9.3 3.2 18.6 0l.5 3.6q-9.8 3.2-19.6 0z"/><path class="dt2" d="M16.4 32.4l.7 3.5M21 33.2l.6 3.6M26 33.2l.5 3.6M30.3 32.4l.5 3.4"/><path class="x1" d="M27.6 35l3.6 5.8-3.8.8-2.2-5.2z"/>';
const CHSTAR = (e, t, a) =>
  `<path class="x2" transform="translate(${e} ${t}) scale(${a})" d="M0 -3.2l1 2.1 2.3.3-1.7 1.6.5 2.3L0 2.2l-2.1 1.1.5-2.3-1.7-1.6 2.3-.3z"/>`;
const CHX = {
  h: [
    "",
    '<path class="x1" d="M16.9 13.2c0-3.8 2.4-6.2 5.6-6.2s5.6 2.4 5.6 6.2z"/><rect class="x2" x="16.2" y="12.2" width="12.6" height="2.6" rx="1.3"/><circle class="x2" cx="22.5" cy="6.2" r="2"/>',
    '<path class="x1" d="M17.2 15.4c-.8-4.8 1.8-8.6 5.8-9.2 2.2-.2 3.8.6 4.8 2.4l-1.4 7z"/><rect class="x2" x="16.4" y="14.6" width="11.6" height="2.6" rx="1.3" transform="rotate(-6 22 16)"/><circle class="x2" cx="21.4" cy="5.6" r="2"/>',
    '<path class="x1" d="M17.2 18.4c0-4 2.2-6.8 5.3-8.2 3.1 1.4 5.3 4.2 5.3 8.2z"/><rect class="x2" x="16.4" y="17.4" width="12.2" height="2.6" rx="1.3"/><circle class="x2" cx="22.5" cy="8.6" r="2.2"/>',
    '<path class="sn" d="M10.4 12.2V8.8q1.2-3 4.6-2.6 2-1.8 4.6-.6 2.6-1.6 5.2-.2 3.6-.6 4.8 2.8v4z"/><circle class="sn" cx="13.8" cy="13.4" r="1.5"/><circle class="sn" cx="22.4" cy="13.8" r="1.3"/><circle class="sn" cx="30.6" cy="13.4" r="1.5"/>',
    CHSC,
    CHSC.replace(
      /M13.2 31.2q9.3 3.2 18.6 0l.5 3.6q-9.8 3.2-19.6 0z/,
      "M14.2 26.6q8.3 3.2 16.6 0l.5 3.6q-8.8 3.2-17.6 0z",
    )
      .replace(
        "M16.4 32.4l.7 3.5M21 33.2l.6 3.6M26 33.2l.5 3.6M30.3 32.4l.5 3.4",
        "M17 27.8l.6 3.4M21.4 28.6l.5 3.5M25.5 28.6l.4 3.5M29.3 27.8l.4 3.4",
      )
      .replace("M27.6 35l3.6 5.8-3.8.8-2.2-5.2z", "M27.4 30.4l3.6 5.4-3.8.8-2.2-4.8z"),
  ],
  o: [
    "",
    '<path class="x1" d="M16.6 12.8q5.9-9.6 11.8 0z"/><path class="dt2" d="M22.5 12.6V6.2M19.4 12.4l-1.5-4.2M25.6 12.4l1.5-4.2"/>',
    '<path class="x1" d="M33.2 14.2c3.2.8 5.6 2.8 6.8 6-2.6-.8-4.6-.6-6 .4 2.4 1 4 2.6 4.8 5.2-2.8-1-5-.8-7 .4z"/><circle class="bb" cx="15.4" cy="22.6" r="1.4"/>',
    '<circle class="bb" cx="22.5" cy="6.4" r="3.2"/><circle class="bb" cx="27.2" cy="3.4" r="1.5"/><circle class="bb" cx="21.4" cy="22.4" r="1.5"/><circle class="bb" cx="24.6" cy="19" r="1.1"/>',
    '<path class="dt2" d="M14 24q2.2-2.6 4.2 0t4.2 0 4.2 0 4.2 0"/><path class="dt2" d="M14 32.4q2.2-2.6 4.2 0t4.2 0 4.2 0 4.2 0"/><path class="x1" d="M12 38.4q-2-3 0-5.6 1 2 .6 3.4 1.2-1.6 2.4-1.8-.2 2.6-1.2 4z"/>',
    '<circle class="x2" cx="14" cy="32.4" r="1.5"/><circle class="x2" cx="18.1" cy="33.5" r="1.5"/><circle class="x2" cx="22.5" cy="33.9" r="1.5"/><circle class="x2" cx="26.9" cy="33.5" r="1.5"/><circle class="x2" cx="31" cy="32.4" r="1.5"/><path class="x1" d="M22.5 18.4l1.5 3.2 3.5.4-2.6 2.3.8 3.4-3.2-1.9-3.2 1.9.8-3.4-2.6-2.3 3.5-.4z"/>',
    '<path class="tz" d="M22.5 3.4v10M18.4 4.4v3.6a4.1 4.1 0 0 0 8.2 0V4.4"/><path class="x1" d="M13.6 28.6q4.5-2.4 8.9 0t8.9 0l.4 2.4q-4.8 2.4-9.3 0t-9.3 0z"/>',
  ],
  e: [
    "",
    '<circle class="gl" cx="22.5" cy="13" r="7.6"/>' + CHSTAR(22.5, 30.6, 1.2),
    '<path class="dt2" d="M24.4 8l2.8-3.8"/><circle class="x1" cx="27.6" cy="3.8" r="1.9"/>' +
      CHSTAR(27.4, 29.4, 1.2),
    '<ellipse class="rg" cx="22.5" cy="22.4" rx="12.6" ry="3.4" transform="rotate(-16 22.5 22.4)"/>',
    '<circle class="gl" cx="22.5" cy="24.6" r="3.2"/><path class="x1" d="M11 33.4l-4.4 6.8 4.4-.8zM34 33.4l4.4 6.8-4.4-.8z"/>',
    '<ellipse class="rg" cx="22.5" cy="21.4" rx="16.4" ry="4.4" transform="rotate(-7 22.5 21.4)"/>' +
      CHSTAR(22.5, 29.8, 1.1),
    '<ellipse class="rg" cx="22.5" cy="9.2" rx="8.8" ry="2.4"/>' + CHSTAR(22.5, 32, 1.3),
  ],
};
const CHPN = ["", "pion", "cavalier", "fou", "tour", "dame", "roi"];
const chPc = (e, t) => {
  const a = e < 0 ? -e : e;
  return `<svg class="chp ${e > 0 ? "w" : "b"}${"f" !== (t = t || CH.sk) && CHX[t] ? " sk-" + t : ""}" viewBox="0 0 45 45" aria-hidden="true">${CHSV[a]}${"f" !== t && CHX[t] ? CHX[t][a] : ""}</svg>`;
};
const CHTH = {
  f: ["#7fb88a", "#2b5f45"],
  h: ["#9cc7e8", "#2a4f7a"],
  o: ["#3fc0cc", "#0e4f78"],
  e: ["#9a86e8", "#2a1f66"],
};
function chTheme() {
  const e = CHTH[CH.sk] || CHTH.f,
    t = document.body;
  (t.style.setProperty("--a", e[0]), t.style.setProperty("--b", e[1]), (t.dataset.chsk = CH.sk));
}
function chSkin() {
  const e = st.get("ch:sk", null) || {},
    t = Object.assign({ f: 1 }, e.own && "object" == typeof e.own ? e.own : {});
  return { own: t, cur: CHSK.some((a) => a.id === e.cur && t[a.id]) ? e.cur : "f" };
}
function chD(e) {
  const t = e.id + ":" + e.mv.join(" ");
  if (!CH.rc || CH.rc.k !== t) {
    const a = chReplay(e.mv);
    ((a.k = t), (a.st = chStatus(a.S, a.keys)), (CH.rc = a));
  }
  return CH.rc;
}
CH.sk = chSkin().cur;
const chRes = (e) => e.r || chD(e).st;
const chTurn = (e) => chD(e).S.t;
const chRun = (e) => !(!(e.tc && e.mv.length >= 2) || chRes(e));
function chRem(e, t) {
  let a = e.rm[t > 0 ? 0 : 1];
  return (chRun(e) && chTurn(e) === t && "game" === CH.scr && (a -= Date.now() - CH.t0), a);
}
const chMy = (e) => "loc" === e.k || chTurn(e) === e.me;
const chOpp = (e) => ("ai" === e.k ? CHLV[e.lv - 1] : null);
function chWho(e, t) {
  return "loc" === e.k
    ? t > 0
      ? "Blancs"
      : "Noirs"
    : t === e.me
      ? "Toi"
      : "ai" === e.k
        ? chOpp(e).n
        : chNm(e.f);
}
function chAvOf(e, t) {
  return "loc" === e.k
    ? `<span class="chav">${chPc(t > 0 ? 6 : -6)}</span>`
    : t === e.me
      ? SO.uid && st.get("soc:me", null)
        ? socAv(SO.uid)
        : '<span class="chav">🌲</span>'
      : "ai" === e.k
        ? `<span class="chav">${chOpp(e).e}</span>`
        : socAv(e.f);
}
function chMsg(e, t) {
  const a = t.w,
    s = (t) => chWho(e, t),
    n = s(a),
    o = s(-a);
  return (
    ({
      mat: "Échec et mat.",
      pat: "Pat : la partie est nulle.",
      ins: "Il ne reste pas assez de pièces : nulle.",
      50: "Règle des 50 coups : nulle.",
      rep: "Trois fois la même position : nulle.",
      acc: "Nulle d’un commun accord.",
      res: ("Toi" === o ? "Tu as abandonné" : o + " a abandonné") + ".",
      tmp: "Toi" === o ? "Ton temps est écoulé." : "Temps écoulé pour " + o + ".",
    }[t.y] || "") +
    " " +
    (0 === a ? "" : "loc" === e.k ? n + " gagnent." : "Toi" === n ? "Bravo, tu as gagné !" : n + " gagne.")
  ).trim();
}
function chPay(e) {
  const t = chRes(e);
  t &&
    "ai" === e.k &&
    e.il &&
    t.w === e.me &&
    !e.ilw &&
    ((e.ilw = 1), st.get("ch:il", 1) <= e.il && st.set("ch:il", e.il + 1));
  if (!t || e.mv.length < 10 || e.paid) return;
  let a = 0;
  if ("loc" === e.k) a = 5;
  else if ("ai" === e.k) {
    const s = Math.max(0, Math.min(2, (0 | e.lv) - 1));
    a = 0 === t.w ? [3, 6, 9][s] : t.w === e.me ? [5, 8, 12][s] : [2, 4, 6][s];
  } else {
    const s = Object.assign({}, st.get("ch:paid", {})),
      n = chGid(e.f) + ":" + e.id;
    if (s[n]) return;
    s[n] = 1;
    const o = Object.keys(s);
    (o.length > 60 && o.slice(0, o.length - 60).forEach((e) => delete s[e]),
      st.set("ch:paid", s),
      (a = 0 === t.w ? 7 : t.w === e.me ? 10 : 5));
  }
  ((e.paid = 1), a > 0 && (scrGain(a), (CH.pay = "+" + a + " 🫧")));
}
function chSave() {
  const e = CH.g;
  e &&
    "net" !== e.k &&
    st.set(
      "ch:g",
      chRes(e)
        ? null
        : {
            k: e.k,
            id: e.id,
            mv: e.mv,
            tc: e.tc,
            rm: e.rm.map(Math.round),
            me: e.me,
            lv: e.lv || 0,
            il: e.il || 0,
            paid: e.paid || 0,
          },
    );
}
function chLoad() {
  const e = st.get("ch:g", null);
  if (!e || !["ai", "loc"].includes(e.k) || !Array.isArray(e.mv) || "string" != typeof e.id) return null;
  const t = e.mv.filter((e) => /^[a-h][1-8][a-h][1-8][nbrq]?$/.test(e)),
    a = CHTC.includes(+e.tc) ? +e.tc : 0;
  return {
    k: e.k,
    id: e.id,
    mv: t,
    tc: a,
    rm: Array.isArray(e.rm) && 2 === e.rm.length ? e.rm.map((e) => Math.max(0, +e || 0)) : [6e4 * a, 6e4 * a],
    me: e.me < 0 ? -1 : 1,
    lv: Math.max(1, Math.min(3, +e.lv || 2)),
    il: Math.max(0, 0 | e.il),
    r: null,
    dr: 0,
    paid: e.paid ? 1 : 0,
  };
}
function chClean(e) {
  if (
    !e ||
    "object" != typeof e ||
    "chess" !== e.k ||
    !Array.isArray(e.p) ||
    2 !== e.p.length ||
    !e.p.every((e) => "string" == typeof e && SOK.test(e))
  )
    return null;
  if (
    "string" != typeof e.id ||
    !/^[a-z0-9]{1,16}$/.test(e.id) ||
    "string" != typeof e.mv ||
    e.mv.length > 8e3 ||
    !/^([a-h][1-8][a-h][1-8][nbrq]?)?( [a-h][1-8][a-h][1-8][nbrq]?)*$/.test(e.mv)
  )
    return null;
  const t = CHTC.includes(+e.tc) ? +e.tc : 0,
    a =
      Array.isArray(e.rm) && 2 === e.rm.length
        ? e.rm.map((e) => Math.max(0, Math.min(36e5, Math.floor(+e) || 0)))
        : [6e4 * t, 6e4 * t],
    s =
      Array.isArray(e.r) &&
      2 === e.r.length &&
      [-1, 0, 1].includes(+e.r[0]) &&
      /^[a-z0-9]{2,5}$/.test(String(e.r[1]))
        ? { w: +e.r[0], y: String(e.r[1]) }
        : null;
  return {
    k: "net",
    id: e.id,
    p: e.p.slice(),
    mv: e.mv ? e.mv.split(" ") : [],
    tc: t,
    rm: a,
    r: s,
    dr: [-1, 1].includes(+e.dr) ? +e.dr : 0,
  };
}
const chDoc = (e) => ({
  k: "chess",
  v: 1,
  id: e.id,
  p: e.p,
  mv: e.mv.join(" "),
  n: e.mv.length,
  tc: e.tc,
  rm: e.rm.map((e) => Math.round(Math.max(0, e))),
  r: e.r ? [e.r.w, e.r.y] : 0,
  dr: e.dr || 0,
  at: Date.now(),
});
function chNet(e, t) {
  return ((t.f = e), (t.me = t.p[0] === SO.uid ? 1 : -1), t);
}
function chWatch(e) {
  if (CH.subs[e] || !SO.uid || Object.keys(CH.subs).length >= 24) return;
  const t = (CH.subs[e] = { ref: null, un: null, t: 0 });
  t.p = (async () => {
    try {
      const a = await scrDb();
      if (!a) throw 0;
      const s = (t.ref = a.collection("sc").doc(chGid(e)));
      ((t.t = setTimeout(() => {
        CH.got[e] || ((CH.slow = 1), chRefresh());
      }, 1e4)),
        (t.un = s.onSnapshot(
          (a) => {
            if ((a.metadata || {}).fromCache && !a.exists) return;
            clearTimeout(t.t);
            let s = null;
            if (a.exists)
              try {
                s = chClean(a.data());
              } catch (e) {}
            (s && (s.p.indexOf(SO.uid) < 0 || chGid(e) !== s.p.slice().sort().join("_") + "_c") && (s = null),
              s && chNet(e, s),
              (CH.G[e] = s),
              (CH.got[e] = !0),
              (CH.err[e] = 0),
              s && "game" === CH.scr && CH.fid === e ? chSyncGame(s) : s && chPay(s),
              chRefresh());
          },
          (a) => {
            (clearTimeout(t.t), delete CH.subs[e], (CH.err[e] = 1), (CH.ec[e] = scrWhy(a)), chRefresh());
          },
        )));
    } catch (t) {
      (delete CH.subs[e], (CH.err[e] = 1), (CH.ec[e] = scrWhy(t)), chRefresh());
    }
  })();
}
function chSyncAll() {
  if (!SO.uid || !SO.got) return;
  const e = st.get("soc:me", null);
  e &&
    e.fr &&
    Object.keys(e.fr)
      .filter((t) => e.fr[t] > 0)
      .slice(0, 24)
      .forEach(chWatch);
  typeof chOpp2 == "function" && chOpp2().slice(0, 24).forEach(chWatch);
}
const chOnProfiles = () => {
  ("hub" === CH.scr && "net" === CH.cfg.op && chSyncAll(), chRefresh());
};
function chSyncGame(e) {
  const t = CH.g,
    a = t && t.id === e.id && t.mv.length === e.mv.length;
  (CH.busy && a) ||
    ((CH.g = e),
    a ||
      ((CH.t0 = Date.now()),
      (CH.sel = -1),
      (CH.lg = []),
      (CH.pr = null),
      (CH.m = ""),
      (CH.cf = ""),
      t && t.id === e.id && e.mv.length > t.mv.length && (sfx(300, 0.1), vib(10))),
    chPay(e),
    chDraw(),
    chAfter());
}
const chRefresh = () => {
  $("#chh") && chHubDraw();
};
const UNCL = ["r", "y", "g", "b"];
const UNHX = { r: "#e8605a", y: "#f0bd3e", g: "#45ad72", b: "#4a8be0", k: "#2b2a3d" };
const UNNM = { r: "rouge", y: "jaune", g: "vert", b: "bleu" };
const UNBOT = [
  ["Lapin", "🐰"],
  ["Renard", "🦊"],
  ["Hibou", "🦉"],
];
const UNT = 15e3;
const UNRX = /^([rygb][0-9svd]|k[wf])$/;
const UN = {
  scr: "",
  g: null,
  loc: !1,
  me: 0,
  room: "",
  m: "",
  pk: -1,
  uc: !1,
  cfg: Object.assign({ nb: 2, bots: 1, fr: [] }, st.get("hoho:cfg", {})),
  subs: {},
  G: {},
  got: {},
  err: {},
  busy: !1,
  iv: 0,
  drvN: -1,
  drvT: 0,
  lastX: 0,
};
function unDeck() {
  const e = [];
  UNCL.forEach((t) => {
    e.push(t + "0");
    for (let a = 1; a <= 9; a++) e.push(t + a, t + a);
    ["s", "v", "d"].forEach((a) => e.push(t + a, t + a));
  });
  for (let t = 0; t < 4; t++) e.push("kw", "kf");
  return unShuf(e);
}
function unShuf(e) {
  for (let t = e.length - 1; t > 0; t--) {
    const a = Math.floor(Math.random() * (t + 1));
    [e[t], e[a]] = [e[a], e[t]];
  }
  return e;
}
UN.cfg.fr = [];
const unTop = (e) => e.X[e.X.length - 1];
const unOk = (e, t) => "k" === t[0] || t[0] === e.c || t[1] === unTop(e)[1];
const unNx = (e, t = 1) => (((e.t + e.d * t) % e.S.length) + e.S.length) % e.S.length;
const unCp = (e) => JSON.parse(JSON.stringify(e));
const unNm = (e, t) => e.S[t].nm;
const unNmD = (e, t) => unDN(e.S[t]);
const unCn = (e) => {
  const t = e[1];
  return "s" === t
    ? "Passe"
    : "v" === t
      ? "Inversion"
      : "d" === t
        ? "+2"
        : "w" === t
          ? "Joker"
          : "f" === t
            ? "+4"
            : t;
};
const unCnf = (e) => unCn(e) + ("k" !== e[0] ? " " + UNNM[e[0]] : "");
function unNew(e, t) {
  const a = unDeck(),
    s = e.map((e, s) => a.splice(0, (t && t.hs && t.hs[s]) || 7)),
    n = a.findIndex((e) => /^[rygb]\d$/.test(e)),
    o = a.splice(n, 1)[0];
  return Object.assign({}, t || {}, {
    k: "hoho",
    v: 1,
    id: Math.random().toString(36).slice(2, 10),
    n: (t && t.n) || 0,
    st: "play",
    S: e,
    H: s,
    D: a,
    X: [o],
    c: o[0],
    t: Math.floor(Math.random() * e.length),
    d: 1,
    dr: 0,
    w: -1,
    lg: "La partie commence",
    uc: e.map(() => 0),
    to: e.map(() => 0),
    dl: 0,
    at: Date.now(),
  });
}
function unPick(e) {
  if (!e.D.length) {
    const t = e.X.pop();
    ((e.D = unShuf(e.X.slice())), (e.X = [t]));
  }
  return e.D.pop() || null;
}
function unGive(e, t, a) {
  for (let s = 0; s < a; s++) {
    const a = unPick(e);
    a && e.H[t].push(a);
  }
}
function unPlay(e, t, a, s, n) {
  const o = unCp(e),
    i = o.H[t].splice(a, 1)[0],
    r = unNx(o, 1);
  (o.X.push(i), (o.c = "k" === i[0] ? (UNCL.includes(s) ? s : "r") : i[0]), (o.dr = 0), (o.to[t] = 0));
  let l =
    "^" +
    t +
    " {" +
    t +
    ":joue|joues} " +
    unCn(i) +
    ("k" === i[0] ? " · couleur " + UNNM[o.c] : " " + UNNM[i[0]]);
  if (!o.H[t].length)
    return (
      (o.st = "end"),
      (o.w = t),
      (o.lg = "^" + t + " {" + t + ":a posé sa dernière carte|as posé ta dernière carte} !"),
      (o.dl = 0),
      o
    );
  1 === o.H[t].length
    ? n
      ? ((o.uc[t] = 1), (l += " · « HoHo ! »"))
      : (unGive(o, t, 2), (o.uc[t] = 0), (l += " · oubli du « HoHo ! » : +2"))
    : (o.uc[t] = 0);
  const c = i[1],
    d = o.S.length;
  return (
    "s" === c
      ? ((l += " · ^" + r + " {" + r + ":passe son tour|passes ton tour}"), (o.t = unNx(o, 2)))
      : "v" === c
        ? 2 === d
          ? ((o.t = unNx(o, 2)), (l += " · {" + t + ":et rejoue|et rejoues}"))
          : ((o.d = -o.d), (o.t = unNx(o, 1)), (l += " · sens inversé"))
        : "d" === c
          ? (unGive(o, r, 2),
            (o.uc[r] = 0),
            (l += " · ^" + r + " {" + r + ":pioche 2|pioches 2}"),
            (o.t = unNx(o, 2)))
          : "f" === c
            ? (unGive(o, r, 4),
              (o.uc[r] = 0),
              (l += " · ^" + r + " {" + r + ":pioche 4|pioches 4}"),
              (o.t = unNx(o, 2)))
            : (o.t = unNx(o, 1)),
    (o.lg = l),
    o
  );
}
function unDrawA(e, t) {
  const a = unCp(e),
    s = unPick(a);
  return (
    s && a.H[t].push(s),
    (a.uc[t] = 0),
    (a.to[t] = 0),
    (a.lg = "^" + t + " {" + t + ":pioche une carte|pioches une carte}"),
    s && unOk(a, s)
      ? (a.dr = 1)
      : ((a.dr = 0), (a.t = unNx(a, 1)), (a.lg += " {" + t + ":et passe|et passes}")),
    a
  );
}
function unPass(e, t) {
  const a = unCp(e);
  return (
    (a.dr = 0),
    (a.t = unNx(a, 1)),
    (a.lg = "^" + t + " {" + t + ":garde sa carte et passe|gardes ta carte et passes}"),
    a
  );
}
function unAuto(e, t) {
  let a = e.dr ? unPass(e, t) : unDrawA(e, t);
  return (
    a.dr && ((a.dr = 0), (a.t = unNx(a, 1))),
    (a.to[t] = (e.to[t] || 0) + 1),
    (a.lg = "^" + t + " {" + t + ":n’a pas joué à temps|n’as pas joué à temps} : une carte en plus"),
    a.to[t] >= 3 &&
      !a.S[t].b &&
      ((a.S[t].b = 1),
      (a.S[t].ab = 1),
      (a.lg =
        "^" +
        t +
        " {" +
        t +
        ":semble absent : un bot joue à sa place|sembles absent : un bot joue à ta place}")),
    a
  );
}
function unBotMove(e, t) {
  let a = e;
  if (!a.dr && !a.H[t].some((e) => unOk(a, e)) && ((a = unDrawA(a, t)), !a.dr)) return a;
  const s = a.H[t],
    n = a.dr ? [s.length - 1] : s.map((e, t) => (unOk(a, e) ? t : -1)).filter((e) => e >= 0),
    o = a.H[unNx(a, 1)].length <= 2,
    i = (e) => {
      const t = s[e];
      let n;
      return (
        (n =
          "k" === t[0]
            ? "f" === t[1]
              ? o
                ? 60
                : 4
              : o
                ? 30
                : 9
            : /\d/.test(t[1])
              ? +t[1] + 20
              : o
                ? 50
                : 24),
        t[0] === a.c && (n += 3),
        n + 5 * Math.random()
      );
    };
  n.sort((e, t) => i(t) - i(e));
  const r = n[0],
    l = s[r];
  let c = a.c;
  if ("k" === l[0]) {
    const e = { r: 0, y: 0, g: 0, b: 0 };
    (s.forEach((t, a) => {
      a !== r && "k" !== t[0] && e[t[0]]++;
    }),
      (c = UNCL.reduce((t, a) => (e[a] > e[t] ? a : t), UNCL[Math.floor(4 * Math.random())])));
  }
  return unPlay(a, t, r, c, 2 === s.length && Math.random() < 0.85);
}
function unArm(e, t, a) {
  if ("play" !== e.st) return ((e.dl = 0), e);
  if (t && t.id === e.id && t.t === e.t && e.dr && t.dl) return ((e.dl = t.dl), e);
  const s = e.S[e.t].b;
  return ((e.dl = s ? Date.now() + (a ? 1950 : 1350 + 1050 * Math.random()) : a ? Date.now() + UNT : 0), e);
}
const UNFLW =
  '<svg viewBox="-12 -12 24 24" aria-hidden="true"><ellipse cy="-5.6" rx="4.1" ry="5.6" fill="#e8605a"/><ellipse cx="5.6" rx="5.6" ry="4.1" fill="#4a8be0"/><ellipse cy="5.6" rx="4.1" ry="5.6" fill="#45ad72"/><ellipse cx="-5.6" rx="5.6" ry="4.1" fill="#f0bd3e"/><circle r="2.7" fill="#fff"/></svg>';
const UNSK =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.3" fill="none" stroke="currentColor" stroke-width="3.2"/><path d="M6.3 17.7L17.7 6.3" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/></svg>';
const UNRV =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 9.5h12.5l-3.4-3.4M19.5 14.5H7l3.4 3.4" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
function unSym(e) {
  const t = e[1];
  return "s" === t
    ? UNSK
    : "v" === t
      ? UNRV
      : "d" === t
        ? "<b>+2</b>"
        : "w" === t
          ? UNFLW
          : "f" === t
            ? UNFLW + '<b class="u4">+4</b>'
            : "<b>" + t + "</b>";
}
function unCard(e, t) {
  const a = e[0],
    s = e[1],
    n = "w" === s || "f" === s ? UNFLW : unSym(e);
  return `<span class="ucard u-${a}${t ? " " + t : ""}"><span class="ucn">${"f" === s ? "<b>+4</b>" : n}</span><span class="uem">${unSym(e)}</span><span class="usf" aria-hidden="true">❄</span></span>`;
}
const unBack = (e) =>
  `<span class="ucard uback${e ? " " + e : ""}"><span class="ubk"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M26 8a13 13 0 1 0 6 21A11 11 0 0 1 26 8z" fill="#fff4cf"/><circle cx="31" cy="10" r="1.2" fill="#fff"/><circle cx="9" cy="30" r="1" fill="#fff"/><circle cx="33" cy="33" r=".9" fill="#fff"/></svg></span></span>`;
function unProf(e) {
  return e && e !== SO.uid
    ? SO.P && SO.P[e]
      ? SO.P[e]
      : (e in UN.pf ||
          ((UN.pf[e] = null),
          (async () => {
            try {
              const t = await scrDb();
              if (!t) return;
              const a = await t.collection("profiles").doc(e).get();
              if (a && a.exists) {
                const t = a.data();
                ((UN.pf[e] = "function" == typeof socMerge ? socMerge(t, null) : t),
                  $("#ung") && (UN.g ? unDraw() : unRoomDraw()));
              }
            } catch (e) {}
          })()),
        UN.pf[e])
    : st.get("soc:me", null);
}
UN.pf = {};
const unDN = (e) => {
  if (!e) return "";
  if (e.b && !e.ab) return e.nm;
  const t = e.u && unProf(e.u);
  return (t && t.name) || e.nm;
};
function unAv(e) {
  if (e.b && !e.ab)
    return `<span class="fr-av em" style="--h:${(47 * e.nm.length) % 360}" aria-hidden="true">${e.e || "🤖"}</span>`;
  const t = e.u && unProf(e.u),
    a = t && t.av,
    s = unDN(e);
  let n = 0;
  for (const t of e.u || s) n = (31 * n + t.charCodeAt(0)) % 360;
  return a && "p" === a.k && a.v
    ? `<span class="fr-av ph" aria-hidden="true"><img src="${a.v}" alt=""></span>`
    : a && "e" === a.k && a.v
      ? `<span class="fr-av em" style="--h:${n}" aria-hidden="true">${a.v}</span>`
      : `<span class="fr-av" style="--h:${n}" aria-hidden="true">${esc(([...s][0] || "?").toUpperCase())}</span>`;
}
function unDraw() {
  const e = $("#ung");
  if (!e || !UN.g) return;
  try {
    hvWatch(UN.g);
  } catch (x) {}
  const t = UN.g,
    a = UN.me,
    s = t.S.length,
    n = t.H[a] || [],
    o = "play" === t.st,
    i = o && t.t === a && !t.S[a].b,
    r = !UN.loc,
    l = $("#unh"),
    c = l ? l.scrollLeft : 0,
    d = unHandPos(),
    f = i && !(UN.hit && Date.now() < UN.hit.u);
  let u = "";
  for (let e = 1; e < s; e++) {
    const n = (a + e) % s,
      i = t.S[n],
      r = t.H[n].length,
      l = UN.hit && UN.hit.i === n && Date.now() < UN.hit.u,
      c = UN.hit && Date.now() < UN.hit.u;
    u += `<div class="unp${o && t.t === n && !c ? " on" : ""}${l ? " hit" : ""}" data-i="${n}">${l ? `<em class="unhb">${UN.hit.t}</em>` : ""}<span class="unav">${unAv(i)}</span><b>${esc(unDN(i))}${i.ab ? " <small>(bot)</small>" : ""}</b><span class="unbk">${"<i></i>".repeat(Math.min(r, 8))}</span><span class="unn">${r} carte${r > 1 ? "s" : ""}${t.uc[n] && 1 === r ? " · <em>HoHo !</em>" : ""}</span></div>`;
  }
  const h = Math.max(200, (e.clientWidth || Math.min(innerWidth, 440) - 36) - 16),
    p = 1 + Math.floor((h - 58) / 17),
    m = n.length > p ? [n.slice(0, Math.ceil(n.length / 2)), n.slice(Math.ceil(n.length / 2))] : [n],
    b = o
      ? i
        ? "À toi de jouer"
        : t.S[a].b && t.S[a].ab
          ? "Un bot joue à ta place"
          : "Au tour de " + esc(unNmD(t, t.t))
      : "",
    g = "end" === t.st ? t.w : -1,
    E =
      g < 0
        ? ""
        : UN.loc && void 0 !== t.sty
          ? t.rwd
            ? "+" + t.rwd + " 🫧"
            : ""
          : UN.loc
            ? g === a
              ? "+" + (2 + 2 * (s - 1)) + " 🫧"
              : "+1 🫧"
            : t.S[a] && t.S[a].u === SO.uid
              ? g === a
                ? "+10 🫧"
                : "+2 🫧"
              : "",
    y = !UN.loc && t.h === SO.uid;
  ((e.innerHTML = `<div class="top stk"><button class="back" data-a="unBk">‹ HoHo</button>${void 0 !== t.sty ? `<span class="tl">Niveau ${t.sty + 1}</span>` : ""}<div class="chip">🫧 ${FLX()}</div></div>\n <div class="unop">${u}</div>\n <div class="unc"><span class="unar l ${t.d > 0 ? "up" : "dn"}" aria-hidden="true"><svg viewBox="0 0 28 72"><path d="M20 66Q2 36 18 8"/><path d="M9 11l9-3 1 9"/></svg></span><button class="btn unhoho${UN.uc ? " on" : ""}" data-a="unHoho" ${i && 2 === n.length ? "" : "disabled"} aria-pressed="${UN.uc}">HoHo !</button><button class="unk${!i || t.dr || UN.busy || n.some((e) => unOk(t, e)) ? "" : " must"}" data-a="unDraw" aria-label="Piocher" ${i && !t.dr ? "" : "disabled"}>${unBack()}<small>${t.D.length}</small><em class="unkm" aria-hidden="true">Pioche !</em></button><div class="untop" style="--cc:${UNHX[t.c]}">${t.X.length > 1 ? `<span class="unund" style="${unJit(t.X.length - 2)}" aria-hidden="true">${unCard(t.X[t.X.length - 2], "big")}</span>` : ""}<span style="${unJit(t.X.length - 1)}" class="untc ${t.X.length !== UN.lastX && wRM ? "unpop" : ""}"${UN.flyX && UN.flyX === t.X.length ? ' style="visibility:hidden"' : ""}>${unCard(unTop(t), "big" + ("k" === unTop(t)[0] ? " ukc u-" + t.c : ""))}</span></div><span class="unar r ${t.d > 0 ? "dn" : "up"}" aria-hidden="true"><svg viewBox="0 0 28 72"><path d="M20 66Q2 36 18 8"/><path d="M9 11l9-3 1 9"/></svg></span></div>\n <p class="unlg vh" role="status" aria-live="polite">${esc(unLg(t, a))}</p>\n <div class="unme${!i || (UN.hit && Date.now() < UN.hit.u) ? "" : " on"}${UN.hit && UN.hit.i === a && Date.now() < UN.hit.u ? " hit" : ""}">${UN.hit && UN.hit.i === a && Date.now() < UN.hit.u ? `<em class="unhb">${UN.hit.t}</em>` : ""}<div class="unt"><b>${b}</b>${r && i ? '<span class="untb"><i id="untm"></i></span>' : ""}</div>\n <div class="unh" id="unh">${(() => {
    let e = 0;
    return m
      .map((a) => {
        const s = e;
        return (
          (e += a.length),
          `<div class="unhr" style="--ov:${((o = a.length), o > 1 ? Math.min(6, Math.floor((h - 58) / (o - 1)) - 58) : 0)}px">${a
            .map((e, a) => {
              const o = s + a,
                r = i && (t.dr ? o === n.length - 1 && unOk(t, e) : unOk(t, e));
              return `<button class="ucd${r && f ? " ok" : ""}${f && !r ? " no" : ""}${f ? "" : " wt"}" data-a="unPlay" data-v="${o}" data-c="${e}" aria-label="${unCnf(e)}"${r ? "" : ' aria-disabled="true"'}>${unCard(e)}</button>`;
            })
            .join("")}</div>`
        );
        var o;
      })
      .join("");
  })()}</div>\n ${i && t.dr ? '<div class="unbt"><button class="btn alt" data-a="unPass">Garder et passer</button></div>' : ""}\n ${t.S[a] && t.S[a].ab && t.S[a].u === SO.uid && o ? '<button class="btn" style="margin-top:10px" data-a="unBackIn">Reprendre ma place</button>' : ""}\n ${UN.m ? `<p class="note" style="text-align:center">${esc(UN.m)}</p>` : ""}</div>\n ${g >= 0 ? `<div class="unend"><section class="glass play"><h2>${g === a ? "Tu as gagné !" : esc(unNmD(t, g)) + " a gagné"}</h2>${E ? `<p class="unrw">${E}</p>` : ""}<div class="chrow">${UN.loc || y ? '<button class="btn" data-a="unAgain">' + (void 0 !== t.sty && g === a && t.sty + 1 < UNN ? "Niveau suivant" : "Rejouer") + "</button>" : '<p class="note">L’hôte peut relancer une partie.</p>'}<button class="btn alt" data-a="unBk">Retour</button></div></section></div>` : ""}\n ${UN.pk >= 0 ? `<div class="unpk${UN.pkS ? "" : " in"}"><section class="glass play"><h2>Choisis une couleur</h2><div class="unpc">${UNCL.map((e) => `<button data-a="unCol" data-v="${e}" style="background:${UNHX[e]}" aria-label="${UNNM[e]}"></button>`).join("")}</div><button class="lnk" data-a="unCol" data-v="">Annuler</button></section></div>` : ""}`),
    (UN.lastX = t.X.length));
  const v = $("#unh");
  (v && (v.scrollLeft = c),
    (UN.pkS = UN.pk >= 0),
    unTimers(),
    unAnim(t),
    unUiAnim(t, f),
    unHandFlip(d, t),
    unTurnAnim());
}
function unTurnAnim() {
  const e = $(".unp.on"),
    t = $(".unme.on"),
    a = e ? e.dataset.i : t ? "me" : "",
    s = UN.pTurn;
  if (((UN.pTurn = a), void 0 !== s && s !== a && !wRM)) {
    if (
      (e &&
        e.animate(
          [
            {
              transform: "translateY(0) scale(1)",
              filter: "saturate(.25) brightness(.75)",
              boxShadow: "0 0 0 0 rgba(255,216,107,0)",
            },
            {
              transform: "translateY(-6px) scale(1.09)",
              filter: "saturate(1.1) brightness(1.08)",
              offset: 0.6,
            },
            { transform: "translateY(-3px) scale(1.05)", filter: "none" },
          ],
          { duration: 480, easing: "ease-out" },
        ),
      t)
    ) {
      const e = t.querySelector(".unt b");
      e &&
        e.animate(
          [
            { opacity: 0, transform: "translateY(6px) scale(.9)" },
            { opacity: 1, transform: "none" },
          ],
          { duration: 380, easing: "ease-out" },
        );
    }
    if (s && "me" !== s) {
      const e = $(`.unp[data-i="${s}"]`);
      !e ||
        e.classList.contains("on") ||
        e.classList.contains("hit") ||
        e.animate(
          [
            { transform: "translateY(-3px) scale(1.05)", filter: "brightness(1.15) saturate(1.3) sepia(.5)" },
            { transform: "none", filter: "none" },
          ],
          { duration: 420, easing: "ease-in-out" },
        );
    }
  }
}
function unDeal(e) {
  const t = UN.me,
    a = e.S.length,
    s = 1700 + 500 * Math.random(),
    n = (s - 380 - 320) / (7 * a),
    o = (e) => (e ? e.getBoundingClientRect() : null),
    i = o($(".unk .ucard") || $(".unk"));
  UN.dealT = Date.now() + s + 80;
  const r = $("#ung");
  (r && r.classList.add("undeal"), unCs("shuffle", 0));
  const l = [...document.querySelectorAll("#unh .ucd")];
  l.forEach((e) => (e.style.visibility = "hidden"));
  const c = $(".untop>.untc"),
    d = $(".untop>.unund");
  (c && (c.style.visibility = "hidden"), d && (d.style.visibility = "hidden"));
  for (let s = 0; s < 7; s++)
    for (let r = 0; r < a; r++) {
      const c = (t + 1 + r) % a,
        d = (s * a + r) * n;
      if (c === t) {
        const a = l[s];
        if (!a) continue;
        unFly(
          unCard(e.H[t][s]),
          i,
          o(a),
          d,
          () => {
            a.style.visibility = "";
          },
          null,
          380,
        );
      } else {
        const e = $(`.unp[data-i="${c}"] .unbk i:last-child`) || $(`.unp[data-i="${c}"] .unav`);
        unFly(unBack(), i, o(e), d, null, null, 380);
      }
    }
  if (c) {
    const t = c.style.transform;
    c.style.transform = "none";
    const a = o(c.firstElementChild || c);
    ((c.style.transform = t),
      unFly(
        unCard(unTop(e), "big" + ("k" === unTop(e)[0] ? " ukc u-" + e.c : "")),
        i,
        a,
        s - 320,
        () => {
          const e = $(".untop>.untc");
          e && (e.style.visibility = "");
        },
        unJ(0),
        320,
      ));
  }
  setTimeout(() => {
    const e = $("#ung");
    (e && e.classList.remove("undeal"),
      document.querySelectorAll("#unh .ucd").forEach((e) => (e.style.visibility = "")));
  }, s + 80);
}
function unHandPos() {
  const e = {},
    t = {};
  return (
    document.querySelectorAll("#unh .ucd").forEach((a) => {
      const s = a.dataset.c;
      if (!s) return;
      t[s] = (t[s] || 0) + 1;
      const n = a.getBoundingClientRect();
      e[s + "#" + t[s]] = [n.left, n.top];
    }),
    { m: e, id: UN.g && UN.g.id }
  );
}
function unHandFlip(e, t) {
  if (!e || e.id !== t.id || wRM) return;
  const a = {};
  document.querySelectorAll("#unh .ucd").forEach((t) => {
    const s = t.dataset.c;
    if (!s) return;
    a[s] = (a[s] || 0) + 1;
    const n = e.m[s + "#" + a[s]];
    if (!n) return;
    const o = t.getBoundingClientRect(),
      i = n[0] - o.left,
      r = n[1] - o.top;
    if (Math.abs(i) < 1 && Math.abs(r) < 1) return;
    const l = t.querySelector(".ucard");
    l &&
      l.animate([{ transform: `translate(${i}px,${r}px)` }, { transform: "translate(0,0)" }], {
        duration: 340,
        easing: "cubic-bezier(.3,.7,.3,1)",
      });
  });
}
function unUiAnim(e, t) {
  const a = UN.pUi && UN.pUi.id === e.id,
    s = UN.pUi || {},
    n = [...document.querySelectorAll("#unh .ucd")];
  ((UN.pUi = {
    id: e.id,
    myT: t,
    d: e.d,
    ok: n.map((e) => e.classList.contains("ok")),
    no: n.map((e) => e.classList.contains("no")),
  }),
    a &&
      !wRM &&
      (s.myT !== t &&
        n.forEach((e, a) => {
          const n = 28 * a,
            o = e.querySelector(".ucard");
          t
            ? (e.classList.contains("ok") &&
                e.animate(
                  [
                    { transform: "translateY(0)" },
                    { transform: "translateY(-15px)", offset: 0.7 },
                    { transform: "translateY(-12px)" },
                  ],
                  { duration: 380, delay: n, easing: "ease-out", fill: "backwards" },
                ),
              o &&
                o.animate(
                  [
                    { filter: "saturate(.75) brightness(.9)" },
                    {
                      filter: e.classList.contains("no")
                        ? "saturate(.5) brightness(.8)"
                        : "saturate(1) brightness(1)",
                    },
                  ],
                  { duration: 350, delay: n, fill: "backwards" },
                ))
            : (s.ok[a] &&
                e.animate([{ transform: "translateY(-12px)" }, { transform: "translateY(0)" }], {
                  duration: 320,
                  delay: n,
                  easing: "ease-in-out",
                  fill: "backwards",
                }),
              o &&
                o.animate(
                  [
                    { filter: s.no[a] ? "saturate(.5) brightness(.8)" : "saturate(1) brightness(1)" },
                    { filter: "saturate(.75) brightness(.9)" },
                  ],
                  { duration: 320, delay: n, fill: "backwards" },
                ));
        }),
      void 0 !== s.d && s.d !== e.d && unCs("rev", 250),
      void 0 !== s.d &&
        s.d !== e.d &&
        document.querySelectorAll(".unar").forEach((e) =>
          e.animate(
            [
              { transform: "scale(1) rotate(0)", opacity: 1 },
              { transform: "scale(.2) rotate(-180deg)", opacity: 0.2, offset: 0.5 },
              { transform: "scale(1.15) rotate(-360deg)", opacity: 1, offset: 0.8 },
              { transform: "scale(1) rotate(-360deg)", opacity: 1 },
            ],
            { duration: 700, easing: "ease-in-out" },
          ),
        )));
}
const unJ = (e) => ({
  r: 12 * ((Math.abs(43758.5453 * Math.sin(12.9898 * e + 4.1)) % 1) - 0.5),
  x: 8 * ((Math.abs(12543.11 * Math.sin(78.233 * e + 1.7)) % 1) - 0.5),
  y: 6 * ((Math.abs(9871.7 * Math.sin(39.425 * e + 0.3)) % 1) - 0.5),
});
const unJit = (e) => {
  const t = unJ(e);
  return `--jr:${t.r.toFixed(1)}deg;--jx:${t.x.toFixed(1)}px;--jy:${t.y.toFixed(1)}px`;
};
function unCs(e, t) {
  try {
    if (void 0 === AC || !AC || !mg || !prefs().sfx) return;
    const a = AC,
      s = a.currentTime + (t || 0) / 1e3;
    if (!unCs.B) {
      const e = 0.5 * a.sampleRate,
        t = a.createBuffer(1, e, a.sampleRate),
        s = t.getChannelData(0);
      for (let t = 0; t < e; t++) s[t] = 2 * Math.random() - 1;
      unCs.B = t;
    }
    const n = (e, t, s, n, o, i, r, l) => {
        const c = a.createBufferSource(),
          d = a.createBiquadFilter(),
          f = a.createGain();
        ((c.buffer = unCs.B),
          (d.type = l || "bandpass"),
          (d.Q.value = n),
          d.frequency.setValueAtTime(t, e),
          d.frequency.exponentialRampToValueAtTime(s, e + i + r),
          f.gain.setValueAtTime(1e-4, e),
          f.gain.exponentialRampToValueAtTime(o, e + i),
          f.gain.exponentialRampToValueAtTime(1e-4, e + i + r),
          c.connect(d),
          d.connect(f),
          f.connect(mg),
          c.start(e, 0.3 * Math.random()),
          c.stop(e + i + r + 0.03));
      },
      o = (e, t, s, n) => {
        [
          [1, 1],
          [2.3, 0.35],
        ].forEach(([o, i]) => {
          const r = a.createOscillator(),
            l = a.createGain();
          ((r.type = o > 1 ? "triangle" : "sine"),
            r.frequency.setValueAtTime(t * o * 1.25, e),
            r.frequency.exponentialRampToValueAtTime(t * o, e + 0.03),
            l.gain.setValueAtTime(1e-4, e),
            l.gain.exponentialRampToValueAtTime(s * i, e + 0.003),
            l.gain.exponentialRampToValueAtTime(1e-4, e + n),
            r.connect(l),
            l.connect(mg),
            r.start(e),
            r.stop(e + n + 0.02));
        });
      },
      i = (e, t, s, n, o) => {
        const i = a.createOscillator(),
          r = a.createGain();
        ((i.type = "sine"),
          i.frequency.setValueAtTime(t, e),
          i.frequency.exponentialRampToValueAtTime(s, e + o),
          r.gain.setValueAtTime(1e-4, e),
          r.gain.exponentialRampToValueAtTime(n, e + 0.015),
          r.gain.exponentialRampToValueAtTime(1e-4, e + o),
          i.connect(r),
          r.connect(mg),
          i.start(e),
          i.stop(e + o + 0.02));
      };
    if ("skip" === e) (i(s, 620, 560, 0.05, 0.12), i(s + 0.11, 440, 390, 0.045, 0.18));
    else if ("rev" === e)
      (n(s, 500, 2200, 0.8, 0.03, 0.12, 0.14),
        n(s + 0.2, 2200, 600, 0.8, 0.025, 0.04, 0.2),
        i(s + 0.05, 392, 400, 0.035, 0.14),
        i(s + 0.2, 523, 530, 0.04, 0.22));
    else if ("slide" === e)
      (n(s, 900, 2600, 0.9, 0.028, 0.025, 0.09), n(s, 3e3, 3e3, 0.5, 0.0055, 0.03, 0.07, "highpass"));
    else if ("place" === e) n(s, 2e3, 1400, 1.2, 0.032, 0.002, 0.03);
    else if ("deal" === e) (n(s, 2400, 1800, 1.3, 0.07, 0.002, 0.028), o(s, 300, 0.05, 0.06));
    else if ("shuffle" === e) {
      let e = s;
      for (let t = 0; t < 16; t++)
        (n(e, 2200 + 900 * Math.random(), 1800, 1.5, 0.045 + 0.02 * Math.random(), 0.002, 0.02),
          (e += 0.03 - 9e-4 * t));
      (n(e + 0.02, 800, 2800, 0.8, 0.06, 0.05, 0.12), o(e + 0.2, 220, 0.1, 0.1));
    }
  } catch (e) {}
}
function unFly(e, t, a, s, n, o, i) {
  if (((o = o || { r: 0, x: 0, y: 0 }), !t || !a || !a.width)) return void (n && n());
  const r = document.querySelector("#ung.undeal");
  unCs(r ? "deal" : "slide", s);
  const l = document.createElement("div");
  ((l.className = "unfly"), (l.innerHTML = e), document.body.appendChild(l));
  const c = l.firstElementChild,
    d = c.offsetWidth || 58,
    f = c.offsetHeight || 87,
    u = a.width / d,
    h = Math.max(0.15, Math.min(t.width / d, t.height / f)),
    p = a.left + a.width / 2 - d / 2,
    m = a.top + a.height / 2 - f / 2,
    b = t.left + t.width / 2 - d / 2 - p,
    g = t.top + t.height / 2 - f / 2 - m;
  ((l.style.left = p + "px"), (l.style.top = m + "px"));
  const E = l.animate(
    [
      { transform: `translate(${b}px,${g}px) scale(${h}) rotate(0deg)`, opacity: 0.9 },
      {
        transform: `translate(${0.45 * b}px,${0.45 * g - 14}px) scale(${((h + u) / 2) * 1.05}) rotate(${(0.5 * o.r).toFixed(1)}deg)`,
        opacity: 1,
        offset: 0.55,
      },
      { transform: `translate(${o.x}px,${o.y}px) scale(${u}) rotate(${o.r}deg)`, opacity: 1 },
    ],
    { duration: i || 520, delay: s, easing: "cubic-bezier(.33,.1,.3,1)", fill: "backwards" },
  );
  ((E.onfinish = () => {
    (l.remove(), r || unCs("place"), n && n());
  }),
    (E.oncancel = () => {
      (l.remove(), n && n());
    }));
}
function unAnim(e) {
  const t = UN.pv,
    a = { id: e.id, top: unTop(e), X: e.X.length, H: e.H.map((e) => e.length), t: e.t };
  UN.pv = a;
  const s = UN.fromR;
  if (
    ((UN.fromR = null),
    (!t || t.id !== e.id) && !wRM && "play" === e.st && 1 === e.X.length && e.H.every((e) => 7 === e.length))
  )
    return void unDeal(e);
  if (!t || t.id !== e.id || t.H.length !== a.H.length || wRM) return;
  const n = UN.me,
    o = (e) => (e ? e.getBoundingClientRect() : null),
    i = (e) =>
      e === n
        ? $("#unh")
        : $(`.unp[data-i="${e}"] .unbk i:last-child`) ||
          $(`.unp[data-i="${e}"] .unav`) ||
          $(`.unp[data-i="${e}"]`),
    r = a.X > t.X || t.top !== a.top ? t.t : -1;
  let l = 0;
  if (r >= 0) {
    const t = $(".untop>.untc");
    if (t) {
      t.style.visibility = "hidden";
      const c = r === n && s ? s : o(i(r)),
        d = (UN.flyX = a.X),
        f = t.style.transform;
      t.style.transform = "none";
      const u = o(t.firstElementChild || t);
      ((t.style.transform = f),
        unFly(
          unCard(a.top, "big" + ("k" === a.top[0] ? " ukc u-" + e.c : "")),
          c,
          u,
          0,
          () => {
            UN.flyX === d && (UN.flyX = 0);
            const e = $(".untop>.untc");
            e && (e.style.visibility = "");
          },
          unJ(a.X - 1),
        ),
        (l = 330));
    }
  }
  if (r >= 0 && ["s", "d", "f"].includes(a.top[1])) {
    const t = e.S.length,
      s = (((r + e.d) % t) + t) % t;
    s !== r &&
      ((UN.hit = {
        i: s,
        u: Date.now() + 750 + l,
        t: "s" === a.top[1] ? "Passe !" : "d" === a.top[1] ? "+2" : "+4",
      }),
      "s" === a.top[1] && unCs("skip", l + 60),
      setTimeout(() => {
        const e = $(s === n ? ".unme" : `.unp[data-i="${s}"]`);
        e &&
          !e.classList.contains("hit") &&
          (e.classList.add("hit"), e.insertAdjacentHTML("afterbegin", `<em class="unhb">${UN.hit.t}</em>`));
      }, l),
      document.querySelectorAll(".unp.on,.unme.on").forEach((e) => e.classList.remove("on")),
      document.querySelectorAll(".ucd").forEach((e) => {
        (e.classList.remove("ok", "no"), e.classList.add("wt"));
      }),
      setTimeout(() => {
        (document.querySelectorAll(".unp.hit,.unme.hit").forEach((e) => e.classList.remove("hit")),
          document.querySelectorAll(".unhb").forEach((e) => e.remove()),
          $("#ung") && UN.g && unDraw());
      }, l + 760));
  }
  const c = o($(".unk .ucard") || $(".unk"));
  a.H.forEach((a, s) => {
    const d = Math.min(4, a - t.H[s] + (s === r ? 1 : 0));
    if (!(d <= 0)) {
      for (let t = 0; t < d; t++)
        if (s === n) {
          const a = [...document.querySelectorAll("#unh .ucd")],
            s = a[a.length - d + t];
          if (!s) continue;
          ((s.style.visibility = "hidden"),
            unFly(unCard(e.H[n][e.H[n].length - d + t]), c, o(s), l + 150 * t, () => {
              s.style.visibility = "";
              const e = [...document.querySelectorAll("#unh .ucd")],
                a = s.isConnected ? s : e[e.length - d + t],
                n = a && a.querySelector(".ucard");
              n &&
                (a.classList.contains("wt") || a.classList.contains("no")) &&
                n.animate(
                  [
                    { filter: "saturate(1) brightness(1)" },
                    {
                      filter: a.classList.contains("no")
                        ? "saturate(.5) brightness(.8)"
                        : "saturate(.75) brightness(.9)",
                    },
                  ],
                  { duration: 450, easing: "ease-in-out", fill: "backwards" },
                );
            }));
        } else unFly(unBack(), c, o(i(s)), l + 150 * t);
      l += 150 * d;
    }
  });
}
document.addEventListener(
  "pointerdown",
  (e) => {
    const t = e.target && e.target.closest && e.target.closest("#unh .ucd");
    t && (UN.fromR = t.getBoundingClientRect());
  },
  !0,
);
const unLg = (e, t) =>
  String(e.lg || "")
    .replace(/\^(\d)/g, (a, s) => (+s === t ? "Tu" : unNmD(e, +s)))
    .replace(/\{(\d):([^|}]*)\|([^}]*)\}/g, (e, a, s, n) => (+a === t ? n : s));
function unTimers() {
  const e = UN.g;
  if (!e || UN.loc) return;
  const t = Date.now(),
    a = "play" === e.st && e.dl && !e.S[e.t].b ? Math.max(0, Math.min(1, (e.dl - t) / UNT)) : 0;
  document.querySelectorAll(".unp").forEach((t) => {
    t.style.setProperty("--p", +t.dataset.i === e.t ? a : 0);
  });
  const s = $("#untm");
  s && (s.style.width = (100 * a).toFixed(1) + "%");
}
function unSolo(e) {
  const t = [{ u: SO.uid || "me", nm: "Toi", b: 0 }];
  (UNBOT.slice(0, e).forEach(([e, a]) => t.push({ u: "", nm: e, e: a, b: 1 })),
    (UN.loc = !0),
    (UN.me = 0),
    (UN.uc = !1),
    (UN.pk = -1),
    (UN.m = ""),
    (UN.room = ""));
  const a = unNew(t);
  (unArm(a, null, !1), (UN.g = a), unSave(), unScreen());
}
const UNN = 24;
const UNTI = [
  [
    "Le petit salon",
    "Zeni t’invite près du poêle : Lapin voudrait une partie. Tu commences avec peu de cartes, le temps de te réchauffer.",
  ],
  ["La veillée", "Renard rejoint la table. La veillée s’allonge et les cartes s’empilent."],
  ["Le grand tournoi", "Hibou organise un tournoi. Trois adversaires, et des mains bien garnies."],
  ["La nuit des cartes", "Dernière nuit : les bots ont peu de cartes en main. Garde ton sang-froid !"],
];
const unSL = (e) => {
  const t = Math.floor(e / 6),
    a = e % 6;
  return { t: t, k: a, nb: [1, 2, 3, 3][t], hm: Math.min(9, 4 + a + t), hb: Math.max(4, 7 - t) };
};
const unSDone = (e) => st.get(ckey("hoho") + ":" + e, !1);
const unSNext = () => {
  for (let e = 0; e < UNN; e++) if (!unSDone(e)) return e;
  return UNN - 1;
};
function unStory(e) {
  const t = unSL(e),
    a = [{ u: SO.uid || "me", nm: "Toi", b: 0 }];
  (UNBOT.slice(0, t.nb).forEach(([e, t]) => a.push({ u: "", nm: e, e: t, b: 1 })),
    (UN.loc = !0),
    (UN.me = 0),
    (UN.uc = !1),
    (UN.pk = -1),
    (UN.m = ""),
    (UN.room = ""));
  const s = unNew(a, { sty: e, hs: a.map((e, a) => (a ? t.hb : t.hm)) });
  (unArm(s, null, !1), (UN.g = s), unSave(), unScreen());
}
function unStoryCard() {
  const e = unSNext(),
    t = [...Array(UNN).keys()].filter(unSDone).length,
    a = unSL(e),
    s = UNTI[a.t];
  return `<section class="rc rcx pt-hoho" data-g="🃏"><div class="rc-ic">${gSv(ALL.find((e) => "hoho" === e.id))}</div><div class="rc-t"><small>${t ? "Continuer" : "Commencer"} · Histoire</small><b>Niveau ${e + 1}</b><span>${esc(s[0])} · ${t} sur ${UNN} terminés</span></div><button class="rc-go" data-a="unSt" data-v="${e}">Jouer<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button><div class="rcx-b"><p class="note" style="margin:0">${esc(s[1])} Tu as ${a.hm} cartes, ${a.nb > 1 ? "les " + a.nb + " bots en ont" : "le bot en a"} ${a.hb}.</p></div><div class="dd pt-hoho${lvOpen ? " open" : ""}"><button class="dd-h" data-a="dd" aria-expanded="${lvOpen}" aria-controls="unlvl"><span><b>Choisir un niveau</b><small>${t} / ${UNN} terminés</small></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button><div class="dd-l" id="unlvl"><div class="dd-i"><div class="lvg">${[...Array(UNN).keys()].map((t) => `<button class="lv ${unSDone(t) ? "d" : t === e ? "nx" : "far"}" data-a="unSt" data-v="${t}"${t > e ? " disabled" : ""} aria-label="Niveau ${t + 1}${unSDone(t) ? ", terminé" : ""}">${t + 1}</button>`).join("")}</div></div></div></div></section>`;
}
function unSave() {
  UN.loc && st.set("hoho:sv", UN.g && "play" === UN.g.st ? UN.g : null);
}
function unScreen() {
  (unActs(),
    (cur = "hoho"),
    nv("games"),
    theme("hoho"),
    (UN.scr = "game"),
    (app.innerHTML = '<div id="ung" class="ung"></div>'),
    (UN.lastX = -1),
    unDraw(),
    clearInterval(UN.iv),
    (UN.iv = setInterval(unTick, 350)),
    window.scrollTo(0, 0));
}
async function unCommit(e) {
  const t = UN.g;
  if (((UN.m = ""), UN.loc)) return ((UN.g = unArm(e, t, !1)), unSave(), unAfter(t), unDraw(), !0);
  (((e = unArm(e, t, !0)).n = (t ? t.n : 0) + 1), (e.at2 = Date.now()));
  const a = UN.subs[UN.room];
  if (!a || !a.ref) return ((UN.m = "Connexion à la partie en cours…"), unDraw(), !1);
  ((UN.busy = !0), (UN.g = e), unAfter(t), unDraw());
  try {
    await a.ref.set(e);
  } catch (e) {
    return ((UN.busy = !1), (UN.g = t), (UN.m = "Le coup n’est pas parti. " + scrWhy(e)), unDraw(), !1);
  }
  return ((UN.busy = !1), (UN.G[UN.room] = e), !0);
}
function unAfter(e) {
  const t = UN.g;
  if (t)
    if ("end" !== t.st || (e && "end" === e.st && e.id === t.id)) e && e.X.length !== t.X.length && vib(8);
    else {
      unPay(t);
      const e = t.w === UN.me;
      if ((sfx(e ? 784 : 330, e ? 0.7 : 0.3), vib(e ? [20, 40, 20] : 15), e))
        try {
          confetti();
        } catch (e) {}
    }
}
function unPay(e) {
  if (UN.loc && void 0 !== e.sty) {
    const t = ckey("hoho") + ":" + e.sty,
      a = !st.get(t, !1);
    let s = 0;
    return (
      e.w === UN.me ? (st.set(t, !0), (s = a ? rw("hoho") : 1)) : (s = 0),
      (s = dmR("hoho", s)),
      (e.rwd = s),
      void (s && scrGain(s))
    );
  }
  if (UN.loc) {
    const t = e.S.length,
      a = dmR("hoho", e.w === UN.me ? 2 + 2 * (t - 1) : 1);
    return void (a && scrGain(a));
  }
  unPayN(e);
}
function unPayN(e) {
  const t = e.S.findIndex((e) => e.u === SO.uid);
  if (t < 0) return;
  const a = st.get("hoho:paid", []);
  if (!a.includes(e.id)) {
    (a.push(e.id), st.set("hoho:paid", a.slice(-60)));
    {
      const a = dmR("hoho", e.w === t ? 10 : 2);
      a && scrGain(a);
    }
  }
}
function unTick() {
  if (!$("#ung")) return (clearInterval(UN.iv), void (UN.iv = 0));
  unTimers();
  const e = UN.g;
  if (!e || "play" !== e.st || UN.busy || (UN.pk >= 0 && UN.loc)) return;
  if (UN.dealT && Date.now() < UN.dealT)
    return void (
      UN.loc &&
      e.dl &&
      e.S[e.t].b &&
      e.dl < UN.dealT + 500 &&
      (e.dl = UN.dealT + 500 + 600 * Math.random())
    );
  const t = Date.now(),
    a = e.t,
    s = e.S[a];
  if (UN.loc) return void (s.b && e.dl && t >= e.dl && unCommit(unBotMove(e, a)));
  if (UN.drvN === e.n && t - UN.drvT < 4e3) return;
  const n = e.h === SO.uid,
    o = e.S.filter((e) => !e.b && e.u).map((e) => e.u),
    i = o.indexOf(SO.uid),
    r = (a) => {
      ((UN.drvN = e.n), (UN.drvT = t), unCommit(a));
    };
  if (a === UN.me && !s.b) return void (e.dl && t >= e.dl && ((UN.pk = -1), r(unAuto(e, a))));
  const l = n ? 0 : i < 0 ? 9e9 : 4500 + 2500 * i;
  s.b ? t >= e.dl + l && r(unBotMove(e, a)) : t >= e.dl + 1500 + l && r(unAuto(e, a));
}
const HVK = {
  gagne: ["gagne1", "gagne2"],
  hoho: ["hoho1", "hoho2", "hoho3"],
  skip: ["pasoser"],
  give: ["prendca"],
  piger: ["piger1", "piger2", "piger3"],
  one: ["choix"],
  many: ["opt1", "opt2"],
  seul: ["seul1", "seul2", "seul3"],
  oubli: ["oubli1", "oubli2"],
};
const HVL = Object.values(HVK).flat();
const HVC = "hoho-voix-2";
let HVP = 0;
let HVQ = [];
function hvOn() {
  return st.get("hoho:vx", 0) === 1 && st.get("hoho:vxd", 0) === 1;
}
async function hvSrc(k) {
  const u = "voix/hoho/" + k + ".mp3";
  try {
    const m = window.caches && (await caches.match(u));
    if (m) return URL.createObjectURL(await m.blob());
  } catch (e) {}
  return u;
}
function hvPlay(k) {
  HVP = 1;
  const nx = () => {
    HVP = 0;
    const n = HVQ.shift();
    n && hvPlay(n);
  };
  hvSrc(k).then((s) => {
    const a = new Audio(s);
    a.volume = 0.7;
    a.onended = nx;
    a.onerror = nx;
    a.play().catch(nx);
  });
}
function hvSay(g, pri, force) {
  if (!force && !hvOn()) return;
  const L = HVK[g];
  if (!L) return;
  const k = L[Math.floor(Math.random() * L.length)];
  if (HVP) {
    pri && (HVQ = [k]);
    return;
  }
  hvPlay(k);
}
function hvWatch(g) {
  const p = UN.hvp,
    me = UN.me;
  UN.hvp = { id: g.id, x: g.X.length, st: g.st, t: g.t };
  if (!p || p.id !== g.id || !hvOn()) return;
  if (g.st === "end") {
    p.st !== "end" && g.w === me && hvSay("gagne", 1);
    return;
  }
  if (g.st !== "play") return;
  if (g.X.length > p.x) {
    const c = g.X[g.X.length - 1][1],
      by = p.t,
      v = (((by + g.d) % g.S.length) + g.S.length) % g.S.length;
    const atk = c === "d" || c === "f";
    if (atk && by === me) hvSay("give", 1);
    else if (by === me && /oubli du/.test(g.lg || "")) hvSay("oubli", 1);
    else if (atk && v === me) hvSay("piger", 1);
    else if ((atk || c === "s") && by !== me && v !== me) hvSay("skip", 1);
  }
  if (g.t === me && p.t !== me && !g.dr && !(g.S[me] && g.S[me].b)) {
    const n = (g.H[me] || []).filter((c) => unOk(g, c)).length;
    n === 1 ? hvSay("one", 0) : n > 1 ? hvSay("many", 0) : hvSay("seul", 0);
  }
}
function hvDraw() {
  const e = $("#hvx");
  if (!e) return;
  const d = st.get("hoho:vxd", 0) === 1,
    on = st.get("hoho:vx", 0) === 1;
  d && hvTop();
  e.innerHTML = d
    ? `<button class="tg${on ? " on" : ""}" data-a="hvTg"><span>🎙️ Voix du salon<small>Réactions à voix haute pendant la partie</small></span><i></i></button><button class="lnk hvdx" data-a="hvDx">Supprimer la voix</button>`
    : `<div class="zndl2"><span>🎙️ <b>Voix du salon</b><small>Réactions à voix haute pendant la partie · 0,2 Mo</small></span><button data-a="hvDl">Télécharger</button></div><p class="note zmini" id="hvp"></p>`;
}
async function hvTop() {
  try {
    await caches.delete("hoho-voix-1");
    const c = await caches.open(HVC);
    for (const k of HVL) {
      const u = "voix/hoho/" + k + ".mp3";
      if (!(await c.match(u))) {
        const r = await fetch(u);
        r.ok && (await c.put(u, r));
      }
    }
  } catch (e) {}
}
async function hvDl() {
  const p = $("#hvp"),
    b = document.querySelector('[data-a="hvDl"]');
  b && (b.disabled = !0);
  let c = null,
    n = 0,
    bad = 0;
  try {
    c = await caches.open(HVC);
  } catch (e) {}
  await Promise.all(
    HVL.map(async (k) => {
      const u = "voix/hoho/" + k + ".mp3";
      try {
        const r = await fetch(u, { cache: "reload" });
        if (!r.ok) throw 0;
        c ? await c.put(u, r) : await r.blob();
      } catch (e) {
        bad++;
      }
      n++;
      p && (p.textContent = "Téléchargement… " + Math.round((n / HVL.length) * 100) + " %");
    }),
  );
  if (bad) {
    p && (p.textContent = "Téléchargement incomplet. Vérifie ta connexion et réessaie.");
    b && (b.disabled = !1);
    return;
  }
  st.set("hoho:vxd", 1);
  st.set("hoho:vx", 1);
  hvDraw();
  hvSay("hoho", 1);
}
function unHub() {
  (unActs(),
    (cur = "hoho"),
    nv("games"),
    theme("hoho"),
    (UN.scr = "hub"),
    (UN.g = null),
    (UN.room = ""),
    clearInterval(UN.iv),
    (UN.iv = 0),
    (app.innerHTML = `<div class="top stk">${bk("home")}<div class="chip">🫧 ${FLX()}</div></div><section class="glass story pt-hoho"><i>🃏</i><h2>Le salon de cartes</h2><p>Débarrasse-toi de toutes tes cartes avant les autres : pose une carte de la même couleur ou du même symbole, et sers-toi des cartes spéciales. Contre des bots, ou à distance avec jusqu’à 3 amis.</p></section><section class="glass play hvs" id="hvx"></section><div id="unhb"></div>`),
    hvDraw(),
    SO.col || "conn" === SO.st || "function" != typeof socInit || socInit(),
    unSync(),
    unHubDraw(),
    window.scrollTo(0, 0));
}
function unMSeg(e) {
  return `<section class="glass play unmd"><div class="rcx-t"><small>Mode de jeu</small></div><div class="plseg unseg" role="group" aria-label="Mode de jeu">${[
    ["story", "Histoire"],
    ["bots", "Bots"],
    ["fr", "Amis"],
  ]
    .map(
      (t) =>
        `<button class="${e === t[0] ? "on" : ""}" data-a="unMode" data-v="${t[0]}" aria-pressed="${e === t[0]}">${t[1]}</button>`,
    )
    .join("")}</div></section>`;
}
function unHubDraw() {
  const e = $("#unhb");
  if (!e) return;
  const t = UN.cfg,
    a = window.scrollX,
    s = window.scrollY,
    n = st.get("hoho:sv", null);
  let o = "";
  const i = st.get("hoho:mode", "story");
  ((o += unRooms()),
    n &&
      "hoho" === n.k &&
      "play" === n.st &&
      (o += `<section class="glass play"><div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px;margin:0 0 12px"><h2 style="margin:0">Partie en cours</h2><small class="note" style="margin:0">${null != n.sty ? "Mode histoire" : "Contre " + (n.S.length - 1) + " bot" + (n.S.length > 2 ? "s" : "")}</small></div><div class="chrow"><button class="btn" data-a="unRes">Reprendre</button><button class="btn alt" data-a="unDrop">Laisser tomber</button></div></section>`),
    (o += unMSeg(i)),
    "story" === i && (o += unStoryCard()),
    "bots" === i &&
      (o += `<section class="glass play"><h2>Contre des bots</h2><div class="chgr"><div class="chl">Nombre de bots</div><div class="chq">${[
        1, 2, 3,
      ]
        .map(
          (e) =>
            `<button class="chc${t.nb === e ? " on" : ""}" data-a="unCfg" data-v="nb:${e}" aria-pressed="${t.nb === e}">${UNBOT.slice(
              0,
              e,
            )
              .map((e) => e[1])
              .join("")} ${e}</button>`,
        )
        .join(
          "",
        )}</div></div><p class="note" style="margin:6px 0 14px">Sans minuteur : prends ton temps.</p><button class="btn chgo" data-a="unGo">Commencer la partie</button></section>`),
    "fr" === i && (o += unSalon() + unFriends()),
    (o += `<section class="glass play unrl"><h2>Les cartes</h2><div class="unrg">${["r5", "gs", "bv", "yd", "kw", "kf"].map((e) => unCard(e, "sm")).join("")}</div><p class="note" style="margin:10px 0 0"><b>Passe</b> : le suivant passe son tour. <b>Inversion</b> : le sens change. <b>+2</b> : le suivant pioche 2 et passe. <b>Joker</b> : tu choisis la couleur. <b>+4</b> : tu choisis la couleur, le suivant pioche 4 et passe. Quand il te reste 2 cartes, touche <b>HoHo !</b> avant de jouer, sinon tu pioches 2 cartes.</p></section>`),
    (e.innerHTML = o),
    window.scrollTo(a, s));
}
function unFriends() {
  const e = (e, t, a) =>
    `<section class="glass play soc-i"><h2>Avec des amis</h2><p class="note" style="margin:0"><b>${e}</b><br>${t}</p>${a ? `<button class="btn" style="margin-top:14px" data-a="chSoc">${a}</button>` : ""}</section>`;
  if ("na" === SO.st)
    return e(
      "Une connexion est nécessaire",
      "Jouer avec des amis demande d’être connecté(e) et de les avoir ajoutés : tout se passe dans l’onglet Social.",
      "Ouvrir Social",
    );
  const t = st.get("soc:me", null);
  if (!(SO.uid && SO.got && t && t.code)) {
    const t = "slow" === SO.st || "err" === SO.st;
    return e(
      t ? "Pas de réponse pour l’instant" : "Un instant…",
      t ? "Tes amis se chargeront dès que possible." : "Tes amis arrivent.",
    );
  }
  const a = Object.keys(t.fr)
    .filter((e) => t.fr[e] > 0 && SO.P[e])
    .sort((e, t) => scrNm(e).localeCompare(scrNm(t), "fr"));
  if (!a.length)
    return e(
      "Il te faut un ami",
      "Ajoute un ami avec son code ami, dans l’onglet Social : vous pourrez alors jouer ensemble.",
      "Ouvrir Social",
    );
  const s = UN.cfg.fr.filter((e) => a.includes(e)),
    n = s.length,
    o = n >= 3;
  return `<section class="glass play soc-i"><h2>Avec des amis</h2><p class="note" style="margin:0 0 6px">Choisis jusqu’à 3 amis (4 joueurs en tout). 15 secondes par tour.</p>${a
    .map((e) => {
      const t = s.includes(e);
      return `<div class="fr-i"><button class="fr-o" data-a="unFr" data-v="${esc(e)}">${socAv(e)}<span class="fr-t"><b>${esc(scrNm(e))}</b><small>${t ? "Invité" : "Toucher pour inviter"}</small></span></button><div class="fr-b"><button class="sb${t ? " buy" : ""}" data-a="unFr" data-v="${esc(e)}" aria-pressed="${t}"${!t && o ? " disabled" : ""}>${t ? "✓" : "Inviter"}</button></div></div>`;
    })
    .join(
      "",
    )}\n ${n && n < 3 ? `<div class="chgr"><div class="chl">Compléter avec des bots jusqu’à 4 joueurs</div><div class="chq"><button class="chc${UN.cfg.bots ? " on" : ""}" data-a="unCfg" data-v="bots:1" aria-pressed="${!!UN.cfg.bots}">Oui</button><button class="chc${UN.cfg.bots ? "" : " on"}" data-a="unCfg" data-v="bots:0" aria-pressed="${!UN.cfg.bots}">Non</button></div></div>` : ""}\n <button class="btn chgo" style="margin-top:14px" data-a="unMake" ${n ? "" : "disabled"}>${n ? "Créer le salon (" + (n + 1 + (UN.cfg.bots && n < 3 ? 3 - n : 0)) + " joueurs)" : "Choisis au moins un ami"}</button></section>`;
}
function unMine() {
  const e = [];
  return (
    Object.entries(UN.G).forEach(([t, a]) => {
      !a ||
        a.p.indexOf(SO.uid) < 0 ||
        ("end" !== a.st && "off" !== a.st && (Date.now() - (a.at || 0) > 288e5 || e.push([t, a])));
    }),
    e
  );
}
function unJoined(e, t, a) {
  if (a === e.h) return !0;
  const s = a === SO.uid ? st.get("soc:me", null) : SO.P[a];
  return !!(s && s.un && s.un.g === t && (+s.un.t || 0) >= (e.at || 0) - 2e3);
}
function unRooms() {
  const e = unMine();
  return e.length
    ? `<section class="glass play soc-i"><h2>Parties entre amis</h2>${e
        .map(([e, t]) => {
          const a = unDN({ u: t.h, nm: (t.nms && t.nms[t.h]) || scrNm(t.h) }),
            s = t.h === SO.uid,
            n = unJoined(t, e, SO.uid);
          let o, i, r;
          if ("lobby" === t.st)
            ((o = s ? "Ton salon" : "Invitation de " + a),
              (i = s ? "En attente des joueurs" : n ? "Tu as rejoint le salon" : "Te propose une partie"),
              (r = s || n ? ["unOpen", "Ouvrir"] : ["unJoin", "Rejoindre"]));
          else {
            const e = t.S.findIndex((e) => e.u === SO.uid);
            ((o =
              "Partie avec " +
              t.S.filter((e) => e.u !== SO.uid)
                .map(unDN)
                .join(", ")),
              (i = e < 0 ? "Tu regardes la partie" : t.t === e ? "À toi de jouer" : "En cours"),
              (r = ["unOpen", e === t.t ? "Jouer" : "Ouvrir"]));
          }
          return `<div class="fr-i"><button class="fr-o" data-a="${r[0]}" data-v="${esc(e)}"><span class="fr-av em" style="--h:10" aria-hidden="true">🃏</span><span class="fr-t"><b>${esc(o)}</b><small>${esc(i)}</small></span></button><div class="fr-b"><button class="sb buy" data-a="${r[0]}" data-v="${esc(e)}">${r[1]}</button></div></div>`;
        })
        .join("")}</section>`
    : "";
}
const unTile = () => {
  if (!SO.uid) return "";
  const e = unMine().filter(([e, t]) =>
    "lobby" === t.st
      ? t.h !== SO.uid && !unJoined(t, e, SO.uid)
      : t.t === t.S.findIndex((e) => e.u === SO.uid),
  );
  return e.length ? ("lobby" === e[0][1].st ? "Invitation au HoHo" : "À toi de jouer") : "";
};
function unTileUp() {
  const e = $(".tile.pt-hoho small");
  e && (e.textContent = unTile());
}
const unGid = (e) => e.slice().sort().join("_") + "_u";
function unClean(e, t) {
  return !e ||
    "object" != typeof e ||
    "hoho" !== e.k ||
    !Array.isArray(e.p) ||
    e.p.length < 2 ||
    e.p.length > 4 ||
    !e.p.every((e) => "string" == typeof e && SOK.test(e)) ||
    unGid(e.p) !== t ||
    e.p.indexOf(e.h) < 0
    ? null
    : "lobby" === e.st ||
        "off" === e.st ||
        (!(!Array.isArray(e.S) || e.S.length < 2 || e.S.length > 4) &&
          Array.isArray(e.H) &&
          e.H.length === e.S.length &&
          Array.isArray(e.X) &&
          e.X.length &&
          Array.isArray(e.D) &&
          [...e.D, ...e.X, ...e.H.flat()].every((e) => UNRX.test(e)) &&
          UNCL.includes(e.c) &&
          e.t >= 0 &&
          e.t < e.S.length)
      ? e
      : null;
}
async function unWatch(e) {
  if (UN.subs[e] || !SO.uid || Object.keys(UN.subs).length >= 8) return;
  const t = (UN.subs[e] = { ref: null, un: null });
  try {
    const a = await scrDb();
    if (!a) throw 0;
    const s = (t.ref = a.collection("sc").doc(e));
    t.un = s.onSnapshot(
      (t) => {
        if ((t.metadata || {}).fromCache && !t.exists) return;
        let a = null;
        if (t.exists)
          try {
            a = unClean(t.data(), e);
          } catch (e) {}
        ((UN.G[e] = a),
          (UN.got[e] = !0),
          (UN.err[e] = 0),
          a && "end" === a.st && unPayNet(a),
          "room" === UN.scr && UN.room === e ? unRoomSync(a) : "hub" === UN.scr && unHubDraw(),
          unTileUp());
      },
      (t) => {
        (delete UN.subs[e],
          (UN.err[e] = scrWhy(t)),
          "room" === UN.scr && UN.room === e && ((UN.m = UN.err[e]), unRoomDraw()));
      },
    );
  } catch (t) {
    (delete UN.subs[e], (UN.err[e] = scrWhy(t)));
  }
}
function unPayNet(e) {
  unPayN(e);
}
function unSync() {
  if (!SO.uid || !SO.got) return;
  const e = new Set(),
    t = st.get("soc:me", null),
    a = Date.now();
  (t && t.un && t.un.g && e.add(t.un.g),
    Object.entries(SO.P).forEach(([t, s]) => {
      t !== SO.uid &&
        s.un &&
        s.un.g &&
        s.un.g.split("_").includes(SO.uid) &&
        a - (+s.un.t || 0) < 288e5 &&
        e.add(s.un.g);
    }),
    [...e].slice(0, 8).forEach(unWatch));
}
function unOnProfiles() {
  (unSync(),
    unTileUp(),
    "hub" === UN.scr
      ? unHubDraw()
      : "room" === UN.scr && UN.G[UN.room] && "lobby" === UN.G[UN.room].st && unRoomDraw());
}
function unMark(e) {
  const t = st.get("soc:me", null);
  t && ((t.un = { g: e, t: Date.now() }), st.set("soc:me", t), "function" == typeof socLater && socLater());
}
function unRoom(e) {
  (unActs(),
    (cur = "hoho"),
    nv("games"),
    theme("hoho"),
    (UN.scr = "room"),
    (UN.room = e),
    (UN.loc = !1),
    (UN.g = null),
    (UN.m = ""),
    (UN.pk = -1),
    (UN.uc = !1),
    (app.innerHTML = '<div id="ung" class="ung"></div>'),
    (UN.lastX = -1),
    unWatch(e),
    clearInterval(UN.iv),
    (UN.iv = setInterval(unTick, 350)),
    unRoomSync(UN.G[e]),
    window.scrollTo(0, 0));
}
function unRoomSync(e) {
  if (!e || "lobby" === e.st || "off" === e.st) return ((UN.g = null), unRoomDraw());
  const t = UN.g;
  (UN.busy && t && t.id === e.id && e.n < t.n) ||
    (t && t.id === e.id && e.n < t.n) ||
    ((t && t.id === e.id) || ((UN.uc = !1), (UN.pk = -1), (UN.lastX = -1)),
    (UN.g = e),
    (UN.me = Math.max(
      0,
      e.S.findIndex((e) => e.u === SO.uid),
    )),
    t && t.id === e.id && t.n !== e.n ? unAfter(t) : "end" === e.st && unPayN(e),
    e.t !== UN.me && (UN.pk = -1),
    unDraw());
}
function unRoomDraw() {
  const e = $("#ung");
  if (!e) return;
  const t = UN.room,
    a = UN.G[t],
    s = `<div class="top stk"><button class="back" data-a="unBk">‹ HoHo</button><div class="chip">🫧 ${FLX()}</div></div>`;
  if (!a)
    return void (e.innerHTML =
      s +
      `<section class="glass play"><h2>${UN.err[t] ? "Salon injoignable" : "Connexion au salon…"}</h2><p class="note" style="margin:0">${esc(UN.err[t] || "Un instant.")}</p></section>`);
  if ("off" === a.st)
    return void (e.innerHTML =
      s +
      '<section class="glass play"><h2>Salon fermé</h2><p class="note" style="margin:0">L’hôte a fermé ce salon.</p><button class="btn" style="margin-top:14px" data-a="unBk">Retour</button></section>');
  const n = a.h === SO.uid,
    o = (e) => unDN({ u: e, nm: (a.nms && a.nms[e]) || scrNm(e) }),
    i = (e) => unJoined(a, t, e),
    r = a.p.filter(i),
    l = a.bt ? Math.max(0, 4 - r.length) : 0,
    c = r.length + l;
  e.innerHTML =
    s +
    `<section class="glass play soc-i"><h2>Salon de HoHo</h2><p class="note" style="margin:0 0 6px">${n ? "Lance la partie quand tes amis sont là. Ceux qui ne sont pas arrivés ne joueront pas." : "En attente que " + esc(o(a.h)) + " lance la partie."}</p>${a.p.map((e) => `<div class="fr-i"><span class="fr-o">${unAv({ u: e, nm: o(e) })}<span class="fr-t"><b>${esc(o(e))}${e === a.h ? " · hôte" : ""}</b><small>${i(e) ? "✓ Dans le salon" : "En attente…"}</small></span></span></div>`).join("")}${l ? `<div class="fr-i"><span class="fr-o"><span class="fr-av em" style="--h:200" aria-hidden="true">🤖</span><span class="fr-t"><b>${l} bot${l > 1 ? "s" : ""}</b><small>Complètent la table</small></span></span></div>` : ""}\n ${n ? `<div class="chrow" style="margin-top:14px"><button class="btn" data-a="unLaunch" ${c >= 2 ? "" : "disabled"}>Lancer la partie (${c} joueurs)</button><button class="btn alt" data-a="unClose">Fermer le salon</button></div>` : `<div class="chrow" style="margin-top:14px">${i(SO.uid) ? "" : '<button class="btn" data-a="unJoin" data-v="' + esc(t) + '">Rejoindre</button>'}<button class="btn alt" data-a="unBk">Retour</button></div>`}\n ${UN.m ? `<p class="note">${esc(UN.m)}</p>` : ""}</section>`;
}
async function unSetDoc(e, t) {
  const a = UN.subs[e];
  (a && a.ref) || (await unWatch(e));
  const s = UN.subs[e];
  if (!s || !s.ref) throw new Error("unavailable");
  (await s.ref.set(t), (UN.G[e] = t));
}
let unAO = !1;
function unActs() {
  if (unAO) return;
  ((unAO = !0),
    Object.assign(act, {
      unMode: (e) => {
        /^(story|bots|fr)$/.test(e) && (st.set("hoho:mode", e), unHubDraw());
      },
      unCfg: (e) => {
        const [t, a] = e.split(":");
        ((UN.cfg[t] = +a), st.set("hoho:cfg", { nb: UN.cfg.nb, bots: UN.cfg.bots }), unHubDraw());
      },
      unGo: () => unSolo(UN.cfg.nb),
      unSt: (e) => {
        const t = +e;
        t >= 0 && t < UNN && t <= unSNext() && unStory(t);
      },
      unRes: () => {
        const e = st.get("hoho:sv", null);
        if (!e) return unHubDraw();
        ((UN.loc = !0),
          (UN.me = 0),
          (UN.g = e),
          (UN.uc = !1),
          (UN.pk = -1),
          (UN.m = ""),
          unArm(UN.g, null, !1),
          unScreen());
      },
      unDrop: () => {
        (st.set("hoho:sv", null), unHubDraw());
      },
      unBk: () => {
        (UN.loc && unSave(), (UN.pk = -1), unHub());
      },
      unAgain: async () => {
        if (UN.loc && UN.g && void 0 !== UN.g.sty) {
          const e = UN.g.sty;
          return unStory(UN.g.w === UN.me && e + 1 < UNN ? e + 1 : e);
        }
        if (UN.loc) return unSolo(UN.g ? UN.g.S.length - 1 : UN.cfg.nb);
        const e = UN.g;
        if (!e || e.h !== SO.uid) return;
        const t = unNew(
          e.S.map((e) => (e.ab ? Object.assign({}, e, { b: 0, ab: 0 }) : Object.assign({}, e))),
          { h: e.h, p: e.p, nms: e.nms, bt: e.bt, n: e.n },
        );
        (unArm(t, null, !0), (t.n = e.n + 1));
        try {
          (await unSetDoc(UN.room, t), (UN.g = t), (UN.uc = !1), unDraw());
        } catch (e) {
          ((UN.m = "La nouvelle partie n’a pas pu démarrer. " + scrWhy(e)), unDraw());
        }
      },
      unPlay: (e) => {
        const t = UN.g,
          a = +e;
        if (!t || "play" !== t.st || t.t !== UN.me || t.S[UN.me].b || UN.busy) return;
        const s = t.H[UN.me],
          n = s[a];
        if (!n) return;
        if (!(t.dr ? a === s.length - 1 && unOk(t, n) : unOk(t, n)))
          return (
            (UN.m = t.dr
              ? "Tu peux poser la carte piochée, ou la garder."
              : "Cette carte ne va pas : même couleur ou même symbole."),
            vib(10),
            void unDraw()
          );
        if ("k" === n[0]) return ((UN.pk = a), void unDraw());
        const o = UN.uc;
        ((UN.uc = !1), unCommit(unPlay(t, UN.me, a, null, o)));
      },
      unCol: (e) => {
        const t = UN.g,
          a = UN.pk;
        if (((UN.pk = -1), !e || !t || a < 0)) return void unDraw();
        const s = UN.uc;
        ((UN.uc = !1), unCommit(unPlay(t, UN.me, a, e, s)));
      },
      unDraw: () => {
        const e = UN.g;
        !e ||
          "play" !== e.st ||
          e.t !== UN.me ||
          e.dr ||
          e.S[UN.me].b ||
          UN.busy ||
          ((UN.uc = !1), unCommit(unDrawA(e, UN.me)));
      },
      unPass: () => {
        const e = UN.g;
        e && "play" === e.st && e.t === UN.me && e.dr && !UN.busy && unCommit(unPass(e, UN.me));
      },
      unHoho: () => {
        const e = UN.g;
        e &&
          e.t === UN.me &&
          2 === e.H[UN.me].length &&
          ((UN.uc = !UN.uc), UN.uc && (sfx(660, 0.1), vib(10), hvSay("hoho", 1)), unDraw());
      },
      hvDl: () => hvDl(),
      hvTg: () => {
        st.set("hoho:vx", hvOn() ? 0 : 1);
        hvDraw();
        hvOn() && hvSay("hoho", 1);
      },
      hvDx: async () => {
        try {
          await caches.delete(HVC);
        } catch (e) {}
        st.set("hoho:vxd", 0);
        st.set("hoho:vx", 0);
        hvDraw();
      },
      unBackIn: () => {
        const e = UN.g;
        if (!e) return;
        const t = unCp(e);
        ((t.S[UN.me].b = 0),
          (t.S[UN.me].ab = 0),
          (t.to[UN.me] = 0),
          (t.lg = "^" + UN.me + " {" + UN.me + ":reprend sa place|reprends ta place}"),
          unCommit(t));
      },
      unFr: (e) => {
        const t = UN.cfg.fr,
          a = t.indexOf(e);
        (a >= 0 ? t.splice(a, 1) : t.length < 3 && t.push(e), unHubDraw());
      },
      unMake: async () => {
        const e = UN.cfg.fr.slice(0, 3);
        if (!e.length || !SO.uid) return;
        const t = st.get("soc:me", null) || {},
          a = [SO.uid, ...e],
          s = unGid(a),
          n = {};
        ((n[SO.uid] = (t.name || "Hôte").slice(0, 20)), e.forEach((e) => (n[e] = scrNm(e).slice(0, 20))));
        const o = {
          k: "hoho",
          v: 1,
          id: Math.random().toString(36).slice(2, 10),
          n: 0,
          st: "lobby",
          h: SO.uid,
          p: a.slice().sort(),
          nms: n,
          bt: e.length < 3 && UN.cfg.bots ? 1 : 0,
          at: Date.now(),
        };
        {
          const q = a.map((u) => ({ u, nm: n[u], b: 0 }));
          q.sort((x, y) => (x.u === SO.uid ? -1 : y.u === SO.uid ? 1 : 0));
          o.bt &&
            UNBOT.slice(0, Math.max(0, 4 - q.length)).forEach(([nm, em]) =>
              q.push({ u: "", nm, e: em, b: 1 }),
            );
          var g = unNew(q, { h: SO.uid, p: o.p, nms: n, bt: o.bt });
          unArm(g, null, !0);
          g.n = 1;
        }
        try {
          (await unSetDoc(s, g),
            o.p.forEach((x) => x !== SO.uid && socInv(x, "hoho")),
            unMark(s),
            (UN.cfg.fr = []),
            unRoom(s));
        } catch (e) {
          UN.m = "";
          const t = $("#unhb");
          t &&
            t.insertAdjacentHTML(
              "afterbegin",
              `<p class="note">Le salon n’a pas pu être créé. ${esc(scrWhy(e))}</p>`,
            );
        }
      },
      unJoin: (e) => {
        const t = e || UN.room;
        (unMark(t), "room" === UN.scr && UN.room === t ? unRoomDraw() : unRoom(t));
      },
      unOpen: (e) => unRoom(e),
      unLaunch: async () => {
        const e = UN.room,
          t = UN.G[e];
        if (!t || t.h !== SO.uid || "lobby" !== t.st) return;
        const a = [t.h, ...t.p.filter((a) => a !== t.h && unJoined(t, e, a))].map((e) => ({
          u: e,
          nm: (t.nms && t.nms[e]) || scrNm(e),
          b: 0,
        }));
        if (
          (t.bt &&
            UNBOT.slice(0, Math.max(0, 4 - a.length)).forEach(([e, t]) =>
              a.push({ u: "", nm: e, e: t, b: 1 }),
            ),
          a.length < 2)
        )
          return;
        const s = unNew(a, { h: t.h, p: t.p, nms: t.nms, bt: t.bt });
        (unArm(s, null, !0), (s.n = 1));
        try {
          (await unSetDoc(e, s), unRoomSync(s));
        } catch (e) {
          ((UN.m = "La partie n’a pas pu démarrer. " + scrWhy(e)), unRoomDraw());
        }
      },
      unClose: async () => {
        const e = UN.room,
          t = UN.G[e];
        if (t && t.h === SO.uid) {
          try {
            await unSetDoc(e, Object.assign({}, t, { st: "off", at: Date.now() }));
          } catch (e) {}
          (unMark(""), unHub());
        }
      },
    }));
  const e = act.unCol;
  act.unCol = (t) => {
    const a = t && $(`.unpk [data-a=unCol][data-v="${t}"]`);
    if (!a || wRM || UN.pkBusy) return e(t);
    ((UN.pkBusy = !0),
      a.animate(
        [{ transform: "scale(1)" }, { transform: "scale(1.18)", offset: 0.45 }, { transform: "scale(.94)" }],
        { duration: 230, easing: "ease-out", fill: "forwards" },
      ));
    const s = $(".unpk section"),
      n = $(".unpk");
    (s &&
      s.animate(
        [
          { opacity: 1, transform: "none" },
          { opacity: 0, transform: "scale(.88)" },
        ],
        { duration: 200, delay: 120, fill: "forwards" },
      ),
      n && n.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, delay: 120, fill: "forwards" }),
      setTimeout(() => {
        ((UN.pkBusy = !1), e(t));
      }, 310));
  };
}