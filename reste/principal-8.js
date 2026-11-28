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
const BI = {
  W: 1000,
  H: 2000,
  R: 22.5,
  g: 7720,
  mus: 0.2,
  mur: 0.011,
  eb: 0.95,
  ec: 0.78,
  mubb: 0.06,
  cg: 60,
  sg: 54,
  pr: 40,
};
BI.COL = [
  "#f4f1e6",
  "#f2c21a",
  "#1f4fb8",
  "#d8282e",
  "#5a2a8a",
  "#ee7a1a",
  "#1f8a4a",
  "#7a1a22",
  "#15151a",
  "#f2c21a",
  "#1f4fb8",
  "#d8282e",
  "#5a2a8a",
  "#ee7a1a",
  "#1f8a4a",
  "#7a1a22",
];
BI.PK = [
  [-6, -6, 54],
  [1006, -6, 54],
  [-22, 1000, 52],
  [1022, 1000, 52],
  [-6, 2006, 54],
  [1006, 2006, 54],
];
let BG = null;
let BIO = !1;
const BISK = {
  std: {
    n: "Classique",
    r: ["#5a2e14", "#8a4a22", "#4a2410"],
    tr: "rgba(255,220,170,.25)",
    cu: "#1d5a3a",
    f: ["#2fa063", "#1d7448"],
    dm: "#f4e8c8",
    pk: "#3a2a1a",
    gold: 0,
    cue: ["#f4dcb0", "#c8904a", "#7a4a1a"],
    butt: "#1a1a1a",
    ring: "#2a6ab0",
  },
  roy: {
    n: "Royale",
    p: 400,
    r: ["#1a0a10", "#4a1424", "#12060a"],
    tr: "#e8c060",
    cu: "#14204a",
    f: ["#2c4aa8", "#121c52"],
    dm: "#ffd86a",
    pk: "#c8962a",
    gold: 1,
    cue: ["#3a2a20", "#1a120c", "#050302"],
    butt: "#c8962a",
    ring: "#ffd86a",
  },
};
const biSk = () => BISK[st.get("bi:skin", "std")] || BISK.std;
function biSegs() {
  const { W, H, cg, sg } = BI;
  return [
    [cg, 0, W - cg, 0, 0, 1],
    [cg, H, W - cg, H, 0, -1],
    [0, cg, 0, 1e3 - sg, 1, 0],
    [0, 1e3 + sg, 0, H - cg, 1, 0],
    [W, cg, W, 1e3 - sg, -1, 0],
    [W, 1e3 + sg, W, H - cg, -1, 0],
  ];
}
BI.S = biSegs();
function biRot(q, ax, ay, ang) {
  const c = Math.cos(ang),
    s = Math.sin(ang),
    [x, y, z] = q,
    d = ax * x + ay * y;
  const cx = ay * z,
    cy = -ax * z,
    cz = ax * y - ay * x;
  return [x * c + cx * s + ax * d * (1 - c), y * c + cy * s + ay * d * (1 - c), z * c + cz * s];
}
function biRack() {
  const { R } = BI,
    b = [];
  b.push({ n: 0, x: 500, y: 500, vx: 0, vy: 0, sx: 0, sy: 0, w: 0, in: !1, q: [0, 0, 1] });
  const ord = [1, 9, 2, 10, 8, 3, 11, 4, 12, 13, 5, 14, 6, 15, 7],
    rows = [[1], [9, 2], [10, 8, 3], [11, 4, 12, 5], [13, 6, 14, 15, 7]];
  const pool = [2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15].sort(() => Math.random() - 0.5),
    sol = pool.filter((e) => e < 8),
    str = pool.filter((e) => e > 8);
  const L = [[1], [0, 0], [0, 8, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]];
  L[4][0] = str.pop();
  L[4][4] = sol.pop();
  const rest = sol.concat(str).sort(() => Math.random() - 0.5);
  L.forEach((r) =>
    r.forEach((v, i) => {
      if (!v) r[i] = rest.pop();
    }),
  );
  const dy = R * 2 * Math.sin(Math.PI / 3) + 0.15;
  L.forEach((r, ri) =>
    r.forEach((n, ci) => {
      const x = 500 + (ci - ri / 2) * (2 * R + 0.3) + (Math.random() - 0.5) * 0.25,
        y = 1500 + ri * dy;
      const a = Math.random() * 6.3,
        z = Math.random() * 2 - 1,
        k = Math.sqrt(1 - z * z);
      b.push({ n, x, y, vx: 0, vy: 0, sx: 0, sy: 0, w: 0, in: !1, q: [k * Math.cos(a), k * Math.sin(a), z] });
    }),
  );
  return b.sort((a, c) => a.n - c.n);
}
function biNew(mode, lv) {
  BG = {
    mode,
    lv: lv || 0,
    b: biRack(),
    turn: 0,
    grp: [0, 0],
    st: "place",
    brk: !0,
    aim: Math.PI / 2,
    pow: 0,
    sp: [0, 0],
    msg: "",
    shot: null,
    over: -1,
    hand: !0,
    head: !0,
    moving: !1,
    ai: 0,
    guide: st.get("bi:guide", 2),
    pk: [],
  };
  if (mode === "free") {
    BG.st = "aim";
    BG.hand = !1;
    BG.brk = !1;
  }
  BG.aim = biAimAt(500, 1500);
  biAimFix();
}
function biAimAt(x, y) {
  const c = BG.b[0];
  return Math.atan2(y - c.y, x - c.x);
}
function biAimFix() {}
const biCue = () => BG.b[0];
const biOn = () => BG.b.filter((e) => !e.in);
function biType(n) {
  return n === 0 ? 0 : n === 8 ? 8 : n < 8 ? 1 : 2;
}
function biStep(dt) {
  const { R, g, mus, mur, eb, ec, W, H } = BI,
    B = BG.b,
    ev = BG.shot;
  let moving = !1;
  for (const b of B) {
    if (b.in) continue;
    const v = Math.hypot(b.vx, b.vy),
      ux = b.vx - b.sx,
      uy = b.vy - b.sy,
      u = Math.hypot(ux, uy);
    if (u > 2) {
      const a = mus * g * dt,
        k = Math.min(1, u / (3.5 * a)) * a;
      ((b.vx -= (ux / u) * k), (b.vy -= (uy / u) * k));
      ((b.sx += (ux / u) * 2.5 * k), (b.sy += (uy / u) * 2.5 * k));
      moving = !0;
    } else if (v > 0) {
      const a = mur * g * dt;
      if (v <= a) {
        b.vx = b.vy = b.sx = b.sy = 0;
      } else {
        ((b.vx -= (b.vx / v) * a), (b.vy -= (b.vy / v) * a));
        ((b.sx = b.vx), (b.sy = b.vy));
      }
      moving = !0;
    }
    b.w *= Math.exp(-dt * 0.9);
    if (Math.abs(b.w) < 0.05) b.w = 0;
    const sp = Math.hypot(b.sx, b.sy);
    if (sp > 0) {
      b.q = biRot(b.q, -b.sy / sp, b.sx / sp, (sp * dt) / R);
    }
    ((b.x += b.vx * dt), (b.y += b.vy * dt));
  }
  for (let i = 0; i < B.length; i++) {
    const a = B[i];
    if (a.in) continue;
    for (let j = i + 1; j < B.length; j++) {
      const b = B[j];
      if (b.in) continue;
      let dx = b.x - a.x,
        dy = b.y - a.y;
      const d2 = dx * dx + dy * dy;
      if (d2 >= 4 * R * R || d2 === 0) continue;
      const d = Math.sqrt(d2),
        nx = dx / d,
        ny = dy / d,
        ov = 2 * R - d;
      ((a.x -= (nx * ov) / 2), (a.y -= (ny * ov) / 2), (b.x += (nx * ov) / 2), (b.y += (ny * ov) / 2));
      const rv = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny;
      if (rv <= 0) continue;
      const jn = ((1 + eb) / 2) * rv;
      ((a.vx -= jn * nx), (a.vy -= jn * ny), (b.vx += jn * nx), (b.vy += jn * ny));
      const tx = -ny,
        ty = nx,
        rt = (a.vx - b.vx) * tx + (a.vy - b.vy) * ty + R * (a.w + b.w) * 0.02,
        jt = Math.max(-BI.mubb * jn, Math.min(BI.mubb * jn, rt / 7));
      ((a.vx -= jt * tx), (a.vy -= jt * ty), (b.vx += jt * tx), (b.vy += jt * ty));
      if (ev) {
        if (ev.first < 0 && (a.n === 0 || b.n === 0)) ev.first = a.n === 0 ? b.n : a.n;
        if (ev.first >= 0) ev.touch = !0;
      }
      biClack(rv);
    }
  }
  for (const b of B) {
    if (b.in) continue;
    for (const p of BI.PK) {
      const dx = b.x - p[0],
        dy = b.y - p[1];
      if (dx * dx + dy * dy < p[2] * p[2]) {
        b.in = !0;
        b.vx = b.vy = b.sx = b.sy = 0;
        b.drop = { x: b.x, y: b.y, px: p[0], py: p[1], t: 0 };
        BG.pk.push(b.n);
        ev && ev.pot.push(b.n);
        biThud();
        break;
      }
    }
    if (b.in) continue;
    for (const s of BI.S) {
      const [x1, y1, x2, y2, nx, ny] = s;
      const t = Math.max(
          0,
          Math.min(1, ((b.x - x1) * (x2 - x1) + (b.y - y1) * (y2 - y1)) / ((x2 - x1) ** 2 + (y2 - y1) ** 2)),
        ),
        cx = x1 + t * (x2 - x1),
        cy = y1 + t * (y2 - y1);
      let dx = b.x - cx,
        dy = b.y - cy;
      const d = Math.hypot(dx, dy);
      if (d >= R) continue;
      let mx, my;
      if (t > 0 && t < 1) {
        ((mx = nx), (my = ny));
      } else {
        ((mx = dx / (d || 1)), (my = dy / (d || 1)));
      }
      ((b.x += mx * (R - d + 0.01)), (b.y += my * (R - d + 0.01)));
      const vn = b.vx * mx + b.vy * my;
      if (vn >= 0) continue;
      const sp = Math.abs(vn),
        e = Math.max(0.58, ec - sp / 9000),
        tx = -my,
        ty = mx;
      let vt = b.vx * tx + b.vy * ty;
      vt -= b.w * R * 0.18 * Math.min(1, sp / 600);
      b.w *= 0.55;
      ((b.vx = -vn * e * mx + vt * tx), (b.vy = -vn * e * my + vt * ty));
      const sn = b.sx * mx + b.sy * my,
        st2 = b.sx * tx + b.sy * ty;
      ((b.sx = -sn * 0.5 * mx + st2 * 0.8 * tx), (b.sy = -sn * 0.5 * my + st2 * 0.8 * ty));
      if (ev) {
        ev.rail++;
        if (ev.first >= 0) ev.railAfter = !0;
        ev.rb.add(b.n);
      }
      biCush(sp);
    }
  }
  return moving;
}
function biNoise(f, v, d) {
  try {
    if (!AC || !mg || !prefs().sfx) return;
    const n = AC.currentTime,
      len = Math.max(1, Math.floor(AC.sampleRate * d)),
      buf = AC.createBuffer(1, len, AC.sampleRate),
      c = buf.getChannelData(0);
    for (let i = 0; i < len; i++) c[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 6);
    const s = AC.createBufferSource(),
      fl = AC.createBiquadFilter(),
      g = AC.createGain();
    s.buffer = buf;
    fl.type = "bandpass";
    fl.frequency.value = f;
    fl.Q.value = 3;
    g.gain.value = Math.min(1, v);
    s.connect(fl).connect(g).connect(mg);
    s.start(n);
  } catch (e) {}
}
let biLc = 0;
function biClack(v) {
  const t = performance.now();
  if (t - biLc < 18) return;
  biLc = t;
  biNoise(2600 + Math.random() * 600, Math.min(0.9, v / 2500) + 0.05, 0.05);
}
function biCush(v) {
  biNoise(380, Math.min(0.6, v / 3000) + 0.03, 0.08);
}
function biThud() {
  biNoise(220, 0.5, 0.18);
  setTimeout(() => biNoise(160, 0.3, 0.12), 90);
}
function biStrike(p, cb) {
  BG.st = "strike";
  const t0 = performance.now(),
    D = 60 + p * 70,
    an = () => {
      if (!BG || BG.st !== "strike") return;
      const k = Math.min(1, (performance.now() - t0) / D);
      BG.pow = p * (1 - k * k);
      biDraw();
      if (k < 1) requestAnimationFrame(an);
      else {
        BG.pow = 0;
        cb();
      }
    };
  an();
}
function biShoot(pow, aim, sp) {
  BG.mode === "online" &&
    !BG.rp &&
    (BG.on.sh = {
      a: +aim.toFixed(4),
      pw: +pow.toFixed(3),
      sp: [+sp[0].toFixed(3), +sp[1].toFixed(3)],
      brk: BG.brk ? 1 : 0,
      pb: BG.b.map(biArr),
    });
  const c = biCue(),
    V = 120 + pow * 4650,
    dx = Math.cos(aim),
    dy = Math.sin(aim);
  ((c.vx = V * dx), (c.vy = V * dy));
  const top = sp[1];
  ((c.sx = c.vx * 1.25 * top), (c.sy = c.vy * 1.25 * top));
  c.w = (2.5 * (sp[0] * 0.5) * V) / BI.R;
  if (Math.abs(sp[0]) > 0.05) {
    const sq = -sp[0] * 0.035 * Math.min(1, pow * 1.5);
    ((c.vx = V * Math.cos(aim + sq)), (c.vy = V * Math.sin(aim + sq)));
  }
  BG.hand = !1;
  BG.shot = { first: -1, pot: [], rail: 0, railAfter: !1, touch: !1, rb: new Set(), brk: BG.brk };
  BG.st = "moving";
  BG.pow = 0;
  biNoise(1500, 0.25 + pow * 0.5, 0.04);
  vib(12);
}
function biLeft(t) {
  return BG.b.filter((b) => !b.in && biType(b.n) === t).length;
}
function biEval() {
  BG.msg = "";
  const s = BG.shot,
    P = BG.turn,
    O = 1 - P,
    mine = BG.grp[P];
  BG.shot = null;
  if (BG.mode === "free") {
    if (biCue().in) biRespot();
    BG.st = "aim";
    BG.msg = "";
    return biDraw();
  }
  const scratch = s.pot.includes(0),
    pot8 = s.pot.includes(8),
    objs = s.pot.filter((n) => n && n !== 8);
  let foul = "";
  if (s.first < 0) foul = "Aucune bille touchée";
  else if (mine && biType(s.first) !== mine && !(biType(s.first) === 8 && biLeft(mine) === 0))
    foul = "Il fallait toucher d’abord ses propres billes";
  else if (!mine && s.first === 8 && !s.brk) foul = "La 8 ne peut pas être touchée en premier";
  if (scratch) foul = "Bille blanche empochée";
  if (!foul && !s.pot.length && !s.railAfter && !s.brk) foul = "Aucune bande touchée après le contact";
  if (s.brk && !foul && !s.pot.length && s.rb.size < 4) {
    BG.msg = "Casse trop faible : à l’adversaire.";
  }
  if (pot8) {
    const was = mine && biLeft(mine) === 0 && !objs.some((n) => biType(n) === mine);
    if (s.brk && !scratch) {
      biRespot8();
      BG.msg = "La 8 est tombée à la casse : elle est replacée.";
    } else {
      const win = !foul && mine && biLeft(mine) === 0;
      return biEnd(
        win ? P : O,
        win
          ? "La 8 dans la poche !"
          : "La 8 est tombée trop tôt" + (foul ? " (" + foul.toLowerCase() + ")" : "") + ".",
      );
    }
  }
  if (!mine && !foul && objs.length && !s.brk) {
    const t = biType(objs[0]);
    BG.grp[P] = t;
    BG.grp[O] = 3 - t;
    BG.msg = (biSelf(P) ? "Tu joues les " : biNm(P) + " joue les ") + (t === 1 ? "pleines" : "rayées") + ".";
  }
  const m2 = BG.grp[P];
  const keep = !foul && objs.length && (m2 ? objs.some((n) => biType(n) === m2) : !0);
  BG.brk = !1;
  if (foul) {
    BG.msg =
      "Faute" +
      (BG.mode === "ai" && P ? " de l’ordinateur" : "") +
      " : " +
      foul.toLowerCase() +
      ". Bille en main pour " +
      (BG.mode === "ai" && !O ? "toi" : biNm(O)) +
      ".";
    BG.turn = O;
    if (scratch || biCue().in) biRespot();
    BG.hand = !0;
    BG.head = !1;
    BG.st = "place";
    biVib();
  } else if (keep) {
    BG.st = "aim";
    if (!BG.msg) BG.msg = biSelf(P) ? "Tu continues." : biNm(P) + " continue.";
  } else {
    BG.turn = O;
    BG.st = "aim";
    if (!BG.msg) BG.msg = biSelf(O) ? "À toi de jouer." : "Au tour de " + biNm(O) + ".";
  }
  biAfter();
}
function biCap(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
function biVib() {
  vib([20, 40, 20]);
}
function biRespot() {
  const c = biCue();
  c.in = !1;
  c.drop = null;
  c.vx = c.vy = c.sx = c.sy = c.w = 0;
  c.x = 500;
  c.y = 500;
  let k = 0;
  while (biOverlap(c) && k++ < 60) c.y += 12;
}
function biRespot8() {
  const b = BG.b[8];
  b.in = !1;
  b.drop = null;
  b.x = 500;
  b.y = 1500;
  let k = 0;
  while (biOverlap(b) && k++ < 60) b.y += 10;
  BG.pk = BG.pk.filter((n) => n !== 8);
}
function biOverlap(c) {
  return BG.b.some((b) => b !== c && !b.in && Math.hypot(b.x - c.x, b.y - c.y) < 2 * BI.R);
}
function biNm(p) {
  return BG.mode === "libre"
    ? "toi"
    : BG.mode === "ai"
      ? p
        ? "l’ordinateur"
        : "toi"
      : BG.mode === "online"
        ? p === BG.on.me
          ? "toi"
          : scrNm(BG.on.opp)
        : "Joueur " + (p + 1);
}
const biSelf = (p) => (BG.mode === "ai" ? p === 0 : BG.mode === "online" ? p === BG.on.me : !1);
const biOpp = () =>
  !!BG && ((BG.mode === "ai" && BG.turn === 1) || (BG.mode === "online" && BG.turn !== BG.on.me));
const biPN = (p) =>
  BG.mode === "libre"
    ? "Toi"
    : BG.mode === "ai"
      ? p
        ? "Ordinateur"
        : "Toi"
      : BG.mode === "online"
        ? p === BG.on.me
          ? "Toi"
          : scrNm(BG.on.opp)
        : "Joueur " + (p + 1);
function biEnd(w, txt) {
  if (BG.mode === "libre") {
    BG.b = biRack();
    BG.turn = 0;
    BG.grp = [0, 0];
    BG.st = "place";
    BG.brk = !0;
    BG.hand = !0;
    BG.head = !0;
    BG.over = -1;
    BG.msg = "Nouvelle partie !";
    biDraw();
    biUI();
    return;
  }
  BG.over = w;
  BG.st = "over";
  BG.msg = txt;
  BG.mode === "online" && !BG.nopub && biPub();
  let rw = 0;
  if (BG.mode === "online" && biSelf(w) && st.get("bi:paid") !== BG.on.id) {
    st.set("bi:paid", BG.on.id);
    rw = 3;
    fl += rw;
    st.set("fl", fl);
  }
  if (BG.mode === "ai" && w === 0) {
    rw = dmR("billard", [2, 4, 7][BG.lv]);
    fl += rw;
    st.set("fl", fl);
    const s = st.get("bi:w", [0, 0, 0]);
    s[BG.lv]++;
    st.set("bi:w", s);
  }
  biDraw();
  biUI();
  setTimeout(() => {
    const o = $("#biov");
    if (!o) return;
    o.hidden = !1;
    o.innerHTML = `<div><b>${BG.mode === "ai" || BG.mode === "online" ? (biSelf(w) ? "Victoire !" : "Défaite") : biNm(w) + " gagne !"}</b><p>${esc(biCap(txt))}${rw ? " +" + rw + " 🫧" : ""}</p><div class="chrow"><button class="btn" data-a="biAgain">Rejouer</button><button class="btn alt" data-a="biBk">Menu</button></div></div>`;
    [523, 659, 784].forEach((e, t) =>
      setTimeout(() => (w === 0 || BG.mode !== "ai" ? sfx(e, 0.5) : 0), 180 * t),
    );
  }, 900);
}
function biAfter() {
  BG.mode === "libre" && (BG.turn = 0);
  biUI();
  biDraw();
  BG.mode === "online" && biPub();
  if (BG.mode === "ai" && BG.turn === 1 && BG.st !== "over") setTimeout(biAI, 700);
}
function biClear(x1, y1, x2, y2, skip) {
  const dx = x2 - x1,
    dy = y2 - y1,
    L = Math.hypot(dx, dy) || 1;
  for (const b of BG.b) {
    if (b.in || skip.includes(b)) continue;
    const t = ((b.x - x1) * dx + (b.y - y1) * dy) / (L * L);
    if (t < 0 || t > 1) continue;
    if (Math.hypot(x1 + t * dx - b.x, y1 + t * dy - b.y) < 2 * BI.R - 0.5) return !1;
  }
  return !0;
}
function biAI() {
  if (!BG || BG.st === "over" || BG.turn !== 1) return;
  const c = biCue(),
    R = BI.R,
    lv = BG.lv;
  if (BG.st === "place") {
    let best = null;
    for (let k = 0; k < 60; k++) {
      const x = 80 + Math.random() * 840,
        y = 80 + Math.random() * 1840;
      c.x = x;
      c.y = y;
      if (biOverlap(c)) continue;
      const s = biPlan();
      if (s && (!best || s.sc > best.sc)) best = { ...s, x, y };
    }
    if (best) {
      c.x = best.x;
      c.y = best.y;
    } else biRespot();
    BG.st = "aim";
    BG.hand = !1;
  }
  const pl = biPlan();
  let aim,
    pow,
    sp = [0, 0];
  if (BG.brk) {
    aim = biAimAt(500 + (Math.random() - 0.5) * 8, 1500);
    pow = 0.92 + Math.random() * 0.08;
  } else if (pl) {
    aim = pl.a;
    pow = Math.min(0.95, 0.18 + pl.d / 2600);
    sp = [(Math.random() - 0.5) * 0.2, lv ? (Math.random() - 0.55) * 0.6 : 0];
  } else {
    const t = biTargets(),
      tg =
        t.sort((a, b) => Math.hypot(a.x - c.x, a.y - c.y) - Math.hypot(b.x - c.x, b.y - c.y))[0] ||
        BG.b.find((b) => !b.in && b.n);
    aim = biAimAt(tg.x, tg.y);
    pow = 0.35;
  }
  const err = [0.05, 0.022, 0.007][lv] * (Math.random() * 2 - 1);
  aim += err;
  BG.aim = aim;
  BG.sp = sp;
  BG.st = "aiaim";
  biUI();
  let t0 = performance.now();
  const an = () => {
    if (!BG || BG.st !== "aiaim") return;
    const k = Math.min(1, (performance.now() - t0) / 900);
    BG.pow = pow * (k < 0.6 ? k / 0.6 : 1 - ((k - 0.6) / 0.4) * 0.0);
    biDraw();
    if (k < 1) requestAnimationFrame(an);
    else
      biStrike(pow * 1, () => {
        biShoot(pow, aim, sp);
        biRun();
      });
  };
  requestAnimationFrame(an);
}
function biTargets() {
  const g = BG.grp[BG.turn];
  return BG.b.filter((b) => !b.in && b.n && (g ? (biLeft(g) ? biType(b.n) === g : b.n === 8) : b.n !== 8));
}
function biPlan() {
  const c = biCue(),
    R = BI.R;
  let best = null;
  for (const b of biTargets())
    for (const p of BI.PK) {
      const px = p[0] < 0 ? 18 : p[0] > 1e3 ? 982 : 500,
        py = p[1] < 0 ? 18 : p[1] > 2e3 ? 1982 : 1e3;
      const dx = px - b.x,
        dy = py - b.y,
        L = Math.hypot(dx, dy),
        gx = b.x - (dx / L) * 2 * R,
        gy = b.y - (dy / L) * 2 * R;
      if (Math.abs(py - 1e3) < 5 && Math.abs(dy) > L * 0.85) continue;
      const ax = gx - c.x,
        ay = gy - c.y,
        La = Math.hypot(ax, ay),
        cut = Math.acos(Math.max(-1, Math.min(1, (ax * dx + ay * dy) / (La * L))));
      if (cut > 1.25) continue;
      if (!biClear(c.x, c.y, gx, gy, [c, b]) || !biClear(b.x, b.y, px, py, [b, c])) continue;
      const sc = -cut * 2.2 - L / 900 - La / 1400;
      if (!best || sc > best.sc) best = { a: Math.atan2(ay, ax), d: La + L * 1.3, sc };
    }
  return best;
}
function biRay() {
  const c = biCue(),
    R = BI.R,
    dx = Math.cos(BG.aim),
    dy = Math.sin(BG.aim);
  let tmin = 1e9,
    hit = null;
  for (const b of BG.b) {
    if (b.in || b === c) continue;
    const ox = b.x - c.x,
      oy = b.y - c.y,
      t = ox * dx + oy * dy,
      d2 = ox * ox + oy * oy - t * t,
      r2 = 4 * R * R;
    if (t < 0 || d2 > r2) continue;
    const th = t - Math.sqrt(r2 - d2);
    if (th < tmin) {
      tmin = th;
      hit = b;
    }
  }
  const lim = [(BI.W - R - c.x) / dx, (R - c.x) / dx, (BI.H - R - c.y) / dy, (R - c.y) / dy].filter(
    (t) => t > 0 && isFinite(t),
  );
  const tw = Math.min(...lim);
  if (tw < tmin) return { x: c.x + dx * tw, y: c.y + dy * tw, b: null };
  return { x: c.x + dx * tmin, y: c.y + dy * tmin, b: hit };
}
function biView() {
  const cv = $("#bicv");
  if (!cv) return null;
  const r = cv.getBoundingClientRect(),
    d = devicePixelRatio || 1;
  if (cv.width !== Math.round(r.width * d)) {
    cv.width = Math.round(r.width * d);
    cv.height = Math.round(r.height * d);
  }
  const m = r.width * 0.075,
    s = (r.width - 2 * m) / BI.W;
  return { cv, x: cv.getContext("2d"), d, m, s, w: r.width, h: r.height };
}
function biDraw() {
  const V = biView();
  if (!V || !BG) return;
  const { x: c, d, m, s, w, h } = V;
  c.setTransform(d, 0, 0, d, 0, 0);
  c.clearRect(0, 0, w, h);
  const rw = c.createLinearGradient(0, 0, w, 0);
  const K = biSk();
  rw.addColorStop(0, K.r[0]);
  rw.addColorStop(0.5, K.r[1]);
  rw.addColorStop(1, K.r[2]);
  c.fillStyle = rw;
  biRR(c, 0, 0, w, h, m * 0.6);
  c.fill();
  c.strokeStyle = K.tr;
  c.lineWidth = K.gold ? 2 : 1;
  biRR(c, 2, 2, w - 4, h - 4, m * 0.55);
  c.stroke();
  if (K.gold) {
    c.strokeStyle = "rgba(232,192,96,.55)";
    c.lineWidth = 1;
    biRR(c, m * 0.42, m * 0.42, w - m * 0.84, h - m * 0.84, m * 0.25);
    c.stroke();
    const sh = c.createLinearGradient(0, 0, w, h);
    sh.addColorStop(0, "rgba(255,255,255,.10)");
    sh.addColorStop(0.4, "rgba(255,255,255,0)");
    c.fillStyle = sh;
    biRR(c, 0, 0, w, h, m * 0.6);
    c.fill();
  }
  c.save();
  c.translate(m, m);
  c.scale(s, s);
  c.fillStyle = K.cu;
  c.fillRect(-22, -22, BI.W + 44, BI.H + 44);
  const fe = c.createRadialGradient(500, 1e3, 200, 500, 1e3, 1300);
  fe.addColorStop(0, K.f[0]);
  fe.addColorStop(1, K.f[1]);
  c.fillStyle = fe;
  c.fillRect(0, 0, BI.W, BI.H);
  if (K.gold) {
    c.save();
    c.globalAlpha = 0.07;
    c.strokeStyle = "#fff";
    c.lineWidth = 1.2;
    for (let y = -1e3; y < 2e3; y += 60) {
      c.beginPath();
      c.moveTo(0, y);
      c.lineTo(BI.W, y + BI.W);
      c.stroke();
      c.beginPath();
      c.moveTo(BI.W, y);
      c.lineTo(0, y + BI.W);
      c.stroke();
    }
    c.restore();
    c.save();
    c.globalAlpha = 0.18;
    c.strokeStyle = "#ffd86a";
    c.lineWidth = 2;
    c.beginPath();
    c.arc(500, 1e3, 160, 0, 7);
    c.stroke();
    c.beginPath();
    c.arc(500, 1e3, 120, 0, 7);
    c.stroke();
    c.restore();
  }
  c.strokeStyle = "rgba(255,255,255,.12)";
  c.lineWidth = 2;
  c.beginPath();
  c.moveTo(0, 500);
  c.lineTo(BI.W, 500);
  c.stroke();
  c.fillStyle = "rgba(255,255,255,.35)";
  [
    [500, 500],
    [500, 1500],
  ].forEach(([a, b]) => {
    c.beginPath();
    c.arc(a, b, 5, 0, 7);
    c.fill();
  });
  c.fillStyle = K.dm;
  for (let i = 1; i < 8; i++) {
    if (i === 4) continue;
    const y = i * 250;
    [-44, BI.W + 44].forEach((x) => {
      c.beginPath();
      c.arc(x, y, 6, 0, 7);
      c.fill();
    });
  }
  for (let i = 1; i < 4; i++) {
    const x = i * 250;
    [-44, BI.H + 44].forEach((y) => {
      c.beginPath();
      c.arc(x, y, 6, 0, 7);
      c.fill();
    });
  }
  for (const p of BI.PK) {
    const g = c.createRadialGradient(p[0], p[1], p[2] * 0.3, p[0], p[1], p[2] + 8);
    g.addColorStop(0, "#000");
    g.addColorStop(0.8, "#0a0a0a");
    g.addColorStop(1, K.pk);
    c.fillStyle = g;
    c.beginPath();
    c.arc(p[0], p[1], p[2] + 6, 0, 7);
    c.fill();
    if (K.gold) {
      c.strokeStyle = "#e8c060";
      c.lineWidth = 3;
      c.beginPath();
      c.arc(p[0], p[1], p[2] + 7, 0, 7);
      c.stroke();
    }
  }
  const B = BG.b,
    R = BI.R,
    cu = B[0];
  if (BG.st === "aim" || BG.st === "aiaim" || BG.st === "place" || BG.st === "pow") {
    if (
      !cu.in &&
      BG.guide > 0 &&
      !(BG.mode === "ai" && BG.turn === 1 && BG.lv > 0) &&
      !(BG.mode === "online" && biOpp())
    ) {
      const r = biRay();
      c.setLineDash([10, 10]);
      c.strokeStyle = "rgba(255,255,255,.55)";
      c.lineWidth = 2.5;
      c.beginPath();
      c.moveTo(cu.x, cu.y);
      c.lineTo(r.x, r.y);
      c.stroke();
      c.setLineDash([]);
      c.strokeStyle = "rgba(255,255,255,.6)";
      c.beginPath();
      c.arc(r.x, r.y, R, 0, 7);
      c.stroke();
      if (r.b) {
        const nx = r.b.x - r.x,
          ny = r.b.y - r.y,
          L = Math.hypot(nx, ny),
          k = BG.guide === 2 ? 260 : 110;
        c.strokeStyle = "rgba(255,240,180,.75)";
        c.lineWidth = 3;
        c.beginPath();
        c.moveTo(r.b.x, r.b.y);
        c.lineTo(r.b.x + (nx / L) * k, r.b.y + (ny / L) * k);
        c.stroke();
        if (BG.guide === 2) {
          const dx = Math.cos(BG.aim),
            dy = Math.sin(BG.aim),
            cr = (dx * ny) / L - (dy * nx) / L;
          let tx = -ny / L,
            ty = nx / L;
          if (tx * dx + ty * dy < 0) {
            tx = -tx;
            ty = -ty;
          }
          const fo = BG.sp[1];
          const vx = tx * (1 - Math.abs(fo) * 0.3) + (nx / L) * fo * 0.7,
            vy = ty * (1 - Math.abs(fo) * 0.3) + (ny / L) * fo * 0.7,
            Lv = Math.hypot(vx, vy) || 1;
          c.strokeStyle = "rgba(255,255,255,.35)";
          c.lineWidth = 2;
          c.beginPath();
          c.moveTo(r.x, r.y);
          c.lineTo(r.x + (vx / Lv) * 120, r.y + (vy / Lv) * 120);
          c.stroke();
        }
      }
    }
  }
  for (const b of B) {
    if (b.in && !b.drop) continue;
    let x = b.x,
      y = b.y,
      sc = 1,
      al = 1;
    if (b.drop) {
      b.drop.t = Math.min(1, b.drop.t + 0.06);
      const k = b.drop.t;
      x = b.drop.x + (b.drop.px - b.drop.x) * Math.min(1, k * 1.4);
      y = b.drop.y + (b.drop.py - b.drop.y) * Math.min(1, k * 1.4);
      sc = 1 - k * 0.55;
      al = 1 - k;
      if (k >= 1) {
        b.drop = null;
        continue;
      }
    }
    c.globalAlpha = al;
    c.fillStyle = "rgba(0,0,0,.35)";
    c.beginPath();
    c.ellipse(x + 5, y + 7, R * sc, R * sc * 0.9, 0, 0, 7);
    c.fill();
    biBall(c, b, x, y, R * sc);
    c.globalAlpha = 1;
  }
  if (
    (BG.st === "aim" || BG.st === "pow" || BG.st === "aiaim" || BG.st === "strike") &&
    !cu.in &&
    !(BG.mode === "ai" && BG.turn === 1 && BG.st !== "aiaim" && BG.st !== "strike") &&
    !(BG.mode === "online" && biOpp())
  ) {
    {
      let d = BG.aim - (BG.da == null ? BG.aim : BG.da);
      d = Math.atan2(Math.sin(d), Math.cos(d));
      BG.da = Math.abs(d) < 0.002 || BG.st !== "aim" ? BG.aim : (BG.da == null ? BG.aim : BG.da) + d * 0.4;
      if (BG.da !== BG.aim) requestAnimationFrame(() => BG && biDraw());
    }
    const dx = Math.cos(BG.da),
      dy = Math.sin(BG.da),
      off = R + 10 + BG.pow * 150,
      L = 900;
    c.save();
    c.translate(cu.x - dx * off, cu.y - dy * off);
    c.rotate(BG.da + Math.PI);
    c.translate(0, BG.sp[0] * R * 0.5);
    const g = c.createLinearGradient(0, -8, 0, 8);
    g.addColorStop(0, K.cue[0]);
    g.addColorStop(0.5, K.cue[1]);
    g.addColorStop(1, K.cue[2]);
    c.fillStyle = K.ring;
    c.fillRect(0, -5, 8, 10);
    c.fillStyle = "#f4f0e4";
    c.fillRect(8, -5.5, 14, 11);
    c.fillStyle = g;
    c.beginPath();
    c.moveTo(22, -6);
    c.lineTo(L * 0.7, -9);
    c.lineTo(L * 0.7, 9);
    c.lineTo(22, 6);
    c.fill();
    if (K.gold) {
      c.fillStyle = "#e8c060";
      [0.3, 0.45, 0.6].forEach((f) => c.fillRect(L * f, -7.5, 6, 15));
    }
    c.fillStyle = K.butt;
    c.beginPath();
    c.moveTo(L * 0.7, -9);
    c.lineTo(L, -12);
    c.lineTo(L, 12);
    c.lineTo(L * 0.7, 9);
    c.fill();
    c.restore();
  }
  if (BG.hand && BG.st !== "moving" && !biOpp()) {
    c.strokeStyle = "rgba(255,255,255,.8)";
    c.setLineDash([6, 6]);
    c.lineWidth = 3;
    c.beginPath();
    c.arc(cu.x, cu.y, R + 12, 0, 7);
    c.stroke();
    c.setLineDash([]);
    c.font = "34px sans-serif";
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillText("✋", cu.x + R * 1.9, cu.y - R * 1.9);
    if (BG.head) {
      c.fillStyle = "rgba(255,255,255,.06)";
      c.fillRect(0, 0, BI.W, 500);
    }
  }
  c.restore();
}
function biRR(c, x, y, w, h, r) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}
function biBall(c, b, x, y, R) {
  const col = BI.COL[b.n],
    q = b.q,
    strp = b.n > 8;
  c.save();
  c.beginPath();
  c.arc(x, y, R, 0, 7);
  c.clip();
  c.fillStyle = strp ? "#f6f2e8" : col;
  c.fillRect(x - R, y - R, 2 * R, 2 * R);
  if (strp) {
    c.fillStyle = col;
    const ang = Math.atan2(q[1], q[0]),
      qz = Math.abs(q[2]);
    c.save();
    c.translate(x, y);
    c.rotate(ang);
    c.fillRect(-R * 0.62 * (1 - qz) - R * 0.55 * qz - 1, -R, R * 1.24 * (1 - qz) + R * 1.1 * qz + 2, 2 * R);
    c.restore();
    [
      [1, q],
      [-1, [-q[0], -q[1], -q[2]]],
    ].forEach(([s, v]) => {
      if (v[2] < -0.25) return;
      c.fillStyle = "#f6f2e8";
      c.beginPath();
      c.ellipse(
        x + v[0] * R * 0.62,
        y + v[1] * R * 0.62,
        R * 0.7,
        R * 0.7 * Math.max(0.12, Math.abs(v[2])),
        Math.atan2(v[1], v[0]) + Math.PI / 2,
        0,
        7,
      );
      c.fill();
    });
  }
  if (b.n && q[2] > -0.2) {
    const k = Math.max(0, q[2] + 0.2) / 1.2,
      px = x + q[0] * R * 0.62,
      py = y + q[1] * R * 0.62,
      rr = R * 0.42;
    c.fillStyle = "#fbf8ee";
    c.beginPath();
    c.ellipse(px, py, rr, rr * Math.max(0.25, q[2]), Math.atan2(q[1], q[0]) + Math.PI / 2, 0, 7);
    c.fill();
    if (q[2] > 0.35) {
      c.fillStyle = "#111";
      c.font = `700 ${R * 0.5}px "Nunito Sans",sans-serif`;
      c.textAlign = "center";
      c.textBaseline = "middle";
      c.globalAlpha *= Math.min(1, (q[2] - 0.35) * 3);
      c.fillText(b.n, px, py + R * 0.02);
    }
    c.globalAlpha = 1;
  }
  if (b.n === 0) {
    const k = Math.max(0, q[2]);
    c.fillStyle = "#d8282e";
    c.globalAlpha = 0.85;
    c.beginPath();
    c.arc(x + q[0] * R * 0.62, y + q[1] * R * 0.62, R * 0.12 * (0.4 + k * 0.6), 0, 7);
    c.fill();
    c.globalAlpha = 1;
  }
  const g = c.createRadialGradient(x - R * 0.35, y - R * 0.4, R * 0.05, x, y, R * 1.05);
  g.addColorStop(0, "rgba(255,255,255,.75)");
  g.addColorStop(0.18, "rgba(255,255,255,.12)");
  g.addColorStop(0.7, "rgba(0,0,0,0)");
  g.addColorStop(1, "rgba(0,0,0,.38)");
  c.fillStyle = g;
  c.fillRect(x - R, y - R, 2 * R, 2 * R);
  if (biSk().gold) {
    c.fillStyle = "rgba(255,255,255,.9)";
    c.beginPath();
    c.ellipse(x - R * 0.38, y - R * 0.45, R * 0.22, R * 0.12, -0.6, 0, 7);
    c.fill();
    c.strokeStyle = "rgba(255,230,160,.35)";
    c.lineWidth = R * 0.08;
    c.beginPath();
    c.arc(x, y, R * 0.93, 0.3, 1.6);
    c.stroke();
  }
  c.restore();
}
const biArr = (b) => [b.n, +b.x.toFixed(1), +b.y.toFixed(1), b.in ? 1 : 0];
function biBalls(a) {
  const o = new Map((BG.b || []).map((b) => [b.n, b]));
  return a
    .map(([n, x, y, i]) => {
      const p = o.get(n);
      return { n, x, y, vx: 0, vy: 0, sx: 0, sy: 0, w: 0, in: !!i, q: p ? p.q : [0, 0, 1] };
    })
    .sort((a, b) => a.n - b.n);
}
function biClean(r) {
  try {
    if (
      !r ||
      "object" != typeof r ||
      !Array.isArray(r.p) ||
      2 !== r.p.length ||
      !r.p.every((e) => "string" == typeof e && SOK.test(e)) ||
      r.p.indexOf(SO.uid) < 0
    )
      return null;
    const N = Number.isFinite,
      I = (v, a, b) => N(v) && v >= a && v <= b;
    if (!(
      "string" == typeof r.id &&
      /^[a-z0-9]{1,16}$/.test(r.id) &&
      N(r.seq) &&
      I(r.turn, 0, 1) &&
      I(r.bk, 0, 1) &&
      I(r.by, 0, 1) &&
      I(r.over, -1, 1) &&
      ["aim", "place", "over"].includes(r.st) &&
      Array.isArray(r.grp) &&
      2 === r.grp.length &&
      r.grp.every((e) => I(e, 0, 2)) &&
      Array.isArray(r.pk) &&
      r.pk.length <= 16 &&
      r.pk.every((e) => I(e, 0, 15))
    ))
      return null;
    const ok = (a) =>
      Array.isArray(a) &&
      16 === a.length &&
      a.every(
        (e, i) =>
          Array.isArray(e) && 4 === e.length && e[0] === i && I(e[1], -60, 1060) && I(e[2], -60, 2060),
      );
    if (!ok(r.b)) return null;
    let sh = null;
    if (r.sh) {
      const h = r.sh;
      if (!(
        N(h.a) &&
        I(h.pw, 0, 1) &&
        Array.isArray(h.sp) &&
        2 === h.sp.length &&
        I(h.sp[0], -1, 1) &&
        I(h.sp[1], -1, 1) &&
        ok(h.pb)
      ))
        return null;
      sh = { a: h.a, pw: h.pw, sp: h.sp.slice(), brk: h.brk ? 1 : 0, pb: h.pb };
    }
    return {
      id: r.id,
      p: r.p.slice(),
      seq: r.seq,
      by: r.by,
      bk: r.bk,
      b: r.b,
      turn: r.turn,
      grp: r.grp.slice(),
      st: r.st,
      hand: r.hand ? 1 : 0,
      head: r.head ? 1 : 0,
      brk: r.brk ? 1 : 0,
      msg: String(r.msg || "").slice(0, 200),
      over: r.over,
      pk: r.pk.slice(),
      sh,
    };
  } catch (e) {
    return null;
  }
}
function biApply(r) {
  const o = BG.on;
  BG.b = biBalls(r.b);
  BG.turn = r.turn;
  BG.grp = r.grp.slice();
  BG.st = r.st;
  BG.hand = !!r.hand;
  BG.head = !!r.head;
  BG.brk = !!r.brk;
  BG.msg = r.msg;
  BG.pk = r.pk.slice();
  BG.shot = null;
  BG.da = null;
  BG.rp = null;
  o.seq = r.seq;
  o.id = r.id;
  o.bk = r.bk;
  BG.pow = 0;
  if (BG.brk && BG.st !== "over") BG.aim = biAimAt(500, 1500);
  if (r.over >= 0) {
    BG.nopub = 1;
    biEnd(r.over, r.msg);
    BG.nopub = 0;
    return;
  }
  BG.over = -1;
  const v = $("#biov");
  v && (v.hidden = !0);
  biUI();
  biDraw();
}
function biRecv(r) {
  if (!BG || BG.mode !== "online" || !BG.on) return;
  const o = BG.on;
  if (r.id === o.id && r.seq <= o.seq) return;
  if (BG.st === "moving" || BG.st === "strike") {
    r.by !== o.me && (BG.rp = r);
    return;
  }
  if (r.by !== o.me && r.id === o.id && r.sh && o.seq === r.seq - 1 && r.over < 2) {
    BG.rp = r;
    BG.b = biBalls(r.sh.pb);
    BG.turn = r.by;
    BG.brk = !!r.sh.brk;
    BG.pk = [];
    BG.over = -1;
    const v = $("#biov");
    v && (v.hidden = !0);
    BG.aim = r.sh.a;
    biShoot(r.sh.pw, r.sh.a, r.sh.sp);
    biUI();
    biRun();
    return;
  }
  biApply(r);
}
async function biPub() {
  const o = BG.on;
  if (!o) return;
  const r = {
    v: 1,
    id: o.id,
    p: o.p,
    seq: o.seq + 1,
    by: o.me,
    bk: o.bk,
    b: BG.b.map(biArr),
    turn: BG.turn,
    grp: BG.grp,
    st: BG.st,
    hand: BG.hand ? 1 : 0,
    head: BG.head ? 1 : 0,
    brk: BG.brk ? 1 : 0,
    msg: BG.msg || "",
    over: BG.over,
    pk: BG.pk,
    sh: o.sh || null,
    at: Date.now(),
  };
  o.sh = null;
  o.seq = r.seq;
  biSend(r, 0);
}
async function biSend(r, n) {
  const o = BG && BG.on;
  if (!o || o.id !== r.id) return;
  try {
    const d = await scrDb();
    if (!d) throw 0;
    await d.collection("sc").doc(o.gid).set(r);
  } catch (e) {
    if (n < 6) return void setTimeout(() => biSend(r, n + 1), 2500 * (n + 1));
    BG.msg = "Ton coup n’a pas pu être envoyé : vérifie ta connexion.";
    biUI();
  }
}
async function biWatch() {
  const o = BG.on,
    d = await scrDb();
  if (!d || !BG || BG.on !== o) return;
  o.un = d
    .collection("sc")
    .doc(o.gid)
    .onSnapshot(
      (s) => {
        if (!s || !s.exists) return;
        const r = biClean(s.data());
        r && biRecv(r);
      },
      () => {},
    );
}
function biOff() {
  if (BG && BG.on && BG.on.un) {
    try {
      BG.on.un();
    } catch (e) {}
    BG.on.un = null;
  }
}
async function biOnline(opp) {
  if (!SOK.test(opp) || !SO.uid || !SO.got) return gToast("Connecte-toi d’abord dans l’onglet Social.");
  const d = await scrDb();
  if (!d) return gToast("Le jeu en ligne n’est pas disponible ici.");
  const p = [SO.uid, opp].sort(),
    gid = p.join("_") + "_bl";
  let r = null;
  try {
    const s = await d.collection("sc").doc(gid).get();
    s.exists && (r = biClean(s.data()));
  } catch (e) {
    return gToast("Connexion impossible pour l’instant.");
  }
  biOff();
  biNew("online");
  const me = p.indexOf(SO.uid);
  BG.on = { opp, p, me, gid, id: "", seq: 0, bk: me, sh: null, un: null };
  if (r) biApply(r);
  else {
    BG.on.id = Math.random().toString(36).slice(2, 10);
    BG.turn = me;
    biPub();
  }
  biScreen();
  biWatch();
  r || socInv(opp, "billard");
}
function biOnAgain() {
  const o = BG.on;
  biOff();
  biNew("online");
  BG.on = o;
  o.bk = 1 - o.bk;
  o.id = Math.random().toString(36).slice(2, 10);
  o.sh = null;
  BG.turn = o.bk;
  biPub();
  biScreen();
  biWatch();
}
async function biOnList(n) {
  const e = $("#bonl");
  if (!e || "billard" !== cur) return;
  const a = st.get("soc:me", null);
  if (!(SO.uid && SO.got && a && a.code)) {
    e.innerHTML = `<p class="note" style="margin:0">${"na" === SO.st ? "Connecte-toi dans l’onglet Social pour jouer à distance avec tes amis." : "Un instant…"}</p>`;
    "na" === SO.st || SO.col || "conn" === SO.st || socInit();
    n < 8 && setTimeout(() => biOnList(n + 1), 1500);
    return;
  }
  const F = Object.keys(a.fr || {}).filter((k) => a.fr[k] > 0 && SO.P[k]);
  if (!F.length) {
    e.innerHTML =
      '<p class="note" style="margin:0">Ajoute un ami dans l’onglet Social pour le défier au billard.</p>';
    return;
  }
  e.innerHTML = F.map(
    (k) =>
      `<div class="fr-i"><button class="fr-o" data-a="biOn" data-v="${esc(k)}">${socAv(k)}<span class="fr-t"><b>${esc(scrNm(k))}</b><small data-bu="${esc(k)}">Partie à distance</small></span></button><div class="fr-b"><button class="sb" data-a="biOn" data-v="${esc(k)}">Jouer</button></div></div>`,
  ).join("");
  const d = await scrDb();
  if (!d) return;
  for (const k of F.slice(0, 12)) {
    try {
      const s = await d
          .collection("sc")
          .doc([SO.uid, k].sort().join("_") + "_bl")
          .get(),
        r = s.exists ? biClean(s.data()) : null,
        m = r ? r.p.indexOf(SO.uid) : 0,
        t = [...document.querySelectorAll("[data-bu]")].find((x) => x.dataset.bu === k);
      if (!t) continue;
      t.textContent = !r
        ? "Nouvelle partie"
        : r.over >= 0
          ? "Partie terminée"
          : r.turn === m
            ? "À toi de jouer"
            : "Au tour de " + scrNm(k);
      r && r.over < 0 && r.turn === m && t.classList.add("scgo");
    } catch (x) {}
  }
}
let biRaf = 0;
let biLast = 0;
function biRun() {
  cancelAnimationFrame(biRaf);
  biLast = performance.now();
  const f = (t) => {
    if (!BG || !$("#bicv")) return;
    let dt = Math.max(0.002, Math.min(0.04, (t - biLast) / 1e3));
    biLast = t;
    let mv = !1;
    const n = Math.ceil(dt / 0.0015);
    for (let i = 0; i < n; i++) mv = biStep(dt / n) || mv;
    biDraw();
    if (mv || BG.b.some((b) => b.drop)) biRaf = requestAnimationFrame(f);
    else if (BG.st === "moving") {
      if (BG.rp) {
        const r = BG.rp;
        BG.rp = null;
        biApply(r);
      } else biEval();
    }
  };
  biRaf = requestAnimationFrame(f);
}
function biUI() {
  const s = $("#bist");
  if (!s || !BG) return;
  const P = BG.turn,
    G = BG.grp,
    mode = BG.mode;
  const row = (p) => {
    const g = G[p],
      bl = g ? BG.b.filter((b) => biType(b.n) === g) : [];
    return `<div class="bip${P === p && mode !== "free" ? " on" : ""}"><b>${esc(biPN(p))}</b><span>${g ? bl.map((b) => `<i class="${b.in ? "x" : ""}" style="--c:${BI.COL[b.n]}"${b.n > 8 ? ' data-s="1"' : ""}>${b.n}</i>`).join("") : "<em>table ouverte</em>"}</span></div>`;
  };
  s.innerHTML =
    mode === "free"
      ? `<div class="bip on"><b>Entraînement libre</b><span><em>${15 - BG.pk.filter((n) => n).length} billes sur la table</em></span></div>`
      : row(0) + row(1);
  const m = $("#bim");
  m &&
    (m.textContent =
      BG.hand && BG.st !== "moving" && !biOpp()
        ? BG.head
          ? "Place la blanche dans la zone de départ, puis vise."
          : "Bille en main : place la blanche où tu veux."
        : biCap(BG.msg) ||
          (mode === "ai" && P === 1
            ? "L’ordinateur réfléchit…"
            : mode === "online" && biOpp()
              ? "En attente de " + biNm(P) + "…"
              : "Glisse sur la table pour tourner la queue (ou touche une bille pour viser), règle finement avec la molette, puis tire la jauge vers le bas."));
  const sb = $("#bisp");
  sb && (sb.style.setProperty("--x", BG.sp[0]), sb.style.setProperty("--y", -BG.sp[1]));
  const lock = BG.st === "moving" || BG.st === "over" || biOpp();
  document.querySelectorAll("#bipw,#biwh,#bisp,.bire").forEach((e) => e.classList.toggle("off", lock));
}
function biScreen() {
  biActs();
  cur = "billard";
  nv("games");
  theme("billard");
  $("#nav").hidden = !0;
  app.innerHTML = `<div class="bis"><div class="top stk"><button class="back" data-a="biBk">‹ Menu</button><span class="tl">${BG.mode === "ai" ? "Contre l’ordinateur · " + ["débutant", "confirmé", "expert"][BG.lv] : BG.mode === "duo" ? "À deux" : BG.mode === "libre" ? "Mode libre" : BG.mode === "online" ? "En ligne · " + esc(scrNm(BG.on.opp)) : "Entraînement"}</span><div class="chip">🫧 ${FLX()}</div></div>
 <div class="bist" id="bist"></div>
 <div class="biw"><div class="bipw" id="bipw" aria-label="Puissance : tire vers le bas puis relâche"><div class="bipf" id="bipf"></div><div class="bicq" id="bicq"></div><span>Tirer</span></div>
 <div class="bicw"><canvas id="bicv" aria-label="Table de billard"></canvas><button class="bisp" id="bisp" data-a="biSpin" aria-label="Effet"><i></i></button>${BG.mode === "free" ? '<button class="bire" data-a="biRe" aria-label="Replacer les billes">↺</button>' : ""}<div class="biov" id="biov" hidden></div></div>
 <div class="biwh" id="biwh" aria-label="Réglage fin de la visée : glisse vers le haut ou le bas"><div class="biwr" id="biwr"></div></div></div><p class="bim" id="bim" role="status" aria-live="polite"></p>
 <div class="bisv" id="bisv" hidden><div><b>Effet</b><p>Touche la bille blanche où la queue doit la frapper : en haut, elle suit (coulé) ; en bas, elle revient (rétro) ; sur le côté, effet latéral sur les bandes.</p><div class="bisb" id="bisb"><i></i></div><div class="chrow"><button class="btn alt" data-a="biSpC">Centrer</button><button class="btn" data-a="biSpX">OK</button></div></div></div></div>`;
  const wr = $(".biw"),
    av = innerHeight - wr.getBoundingClientRect().top - 62,
    ww = Math.min(wr.clientWidth - 2 * 54, av / 1.85);
  const cv = $("#bicv");
  cv.style.width = ww + "px";
  cv.style.height = ww * 1.85 + "px";
  $("#bipw").style.height = $("#biwh").style.height = Math.min(ww * 1.85 * 0.7, 420) + "px";
  biBind();
  biUI();
  biDraw();
  if (BG.mode === "ai" && BG.turn === 1) setTimeout(biAI, 600);
}
function biPt(e) {
  const V = biView(),
    r = V.cv.getBoundingClientRect();
  return { x: (e.clientX - r.left - V.m) / V.s, y: (e.clientY - r.top - V.m) / V.s };
}
function biCan() {
  return BG && BG.st !== "moving" && BG.st !== "over" && BG.st !== "aiaim" && BG.st !== "strike" && !biOpp();
}
function biBind() {
  const cv = $("#bicv");
  let drag = 0,
    st0 = null;
  cv.addEventListener("pointerdown", (e) => {
    if (!biCan()) return;
    const p = biPt(e),
      c = biCue();
    cv.setPointerCapture(e.pointerId);
    if (BG.hand && Math.hypot(p.x - c.x, p.y - c.y) < BI.R * 3) {
      drag = 2;
    } else {
      drag = 1;
      st0 = { x: e.clientX, y: e.clientY, a: Math.atan2(p.y - c.y, p.x - c.x), aim: BG.aim, mv: !1 };
    }
  });
  cv.addEventListener("pointermove", (e) => {
    if (!drag) return;
    const p = biPt(e),
      c = biCue();
    if (drag === 2) {
      const R = BI.R,
        x = Math.max(R, Math.min(BI.W - R, p.x)),
        y = Math.max(R, Math.min(BG.head ? 500 : BI.H - R, p.y)),
        ox = c.x,
        oy = c.y;
      c.x = x;
      c.y = y;
      if (biOverlap(c)) {
        c.x = ox;
        c.y = oy;
      }
      biDraw();
      return;
    }
    if (!st0.mv && Math.hypot(e.clientX - st0.x, e.clientY - st0.y) < 6) return;
    st0.mv = !0;
    if (BG.st === "place") BG.st = "aim";
    const a = Math.atan2(p.y - c.y, p.x - c.x);
    let d = a - st0.a;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    BG.aim = st0.aim + d;
    biDraw();
  });
  const up = (e) => {
    if (drag === 1 && st0 && !st0.mv) {
      const p = biPt(e);
      if (BG.st === "place") BG.st = "aim";
      BG.aim = biAimAt(p.x, p.y);
      biDraw();
      biUI();
    }
    if (drag === 2 && BG.st === "place") {
      BG.st = "aim";
      biUI();
    }
    drag = 0;
    st0 = null;
  };
  cv.addEventListener("pointerup", up);
  cv.addEventListener("pointercancel", () => {
    drag = 0;
    st0 = null;
  });
  const pw = $("#bipw"),
    pf = $("#bipf"),
    cq = $("#bicq");
  let pd = null;
  pw.addEventListener("pointerdown", (e) => {
    if (!biCan()) return;
    if (BG.st === "place") BG.st = "aim";
    pd = { y: e.clientY, h: pw.clientHeight, k: 0 };
    pf.style.backgroundSize = "100% " + pw.clientHeight + "px";
    pw.setPointerCapture(e.pointerId);
    BG.st = "pow";
  });
  pw.addEventListener("pointermove", (e) => {
    if (!pd) return;
    BG.pow = Math.max(0, Math.min(1, (e.clientY - pd.y) / (pd.h * 0.8)));
    pf.style.height = BG.pow * 100 + "%";
    {
      const k = Math.floor(BG.pow * 12);
      if (k !== pd.k) {
        pd.k = k;
        vib(4);
        biNoise(2400 + k * 120, 0.06, 0.012);
      }
    }
    pw.classList.toggle("hot", BG.pow > 0.85);
    cq.style.transform = `translateY(${BG.pow * pd.h * 0.8}px)`;
    biDraw();
  });
  const pup = () => {
    if (!pd) return;
    pd = null;
    const p = BG.pow;
    pf.style.height = "0";
    cq.style.transform = "";
    pw.classList.remove("hot");
    if (p < 0.03) {
      BG.st = "aim";
      BG.pow = 0;
      biDraw();
      return;
    }
    const a0 = BG.aim,
      s0 = BG.sp;
    biStrike(p, () => {
      biShoot(p, a0, s0);
      biUI();
      biRun();
    });
  };
  pw.addEventListener("pointerup", pup);
  pw.addEventListener("pointercancel", pup);
  const wh = $("#biwh"),
    wrb = $("#biwr");
  let wy = null,
    off = 0;
  wh.addEventListener("pointerdown", (e) => {
    if (!biCan()) return;
    if (BG.st === "place") BG.st = "aim";
    wy = e.clientY;
    wh.setPointerCapture(e.pointerId);
  });
  wh.addEventListener("pointermove", (e) => {
    if (wy === null) return;
    const dy = e.clientY - wy;
    wy = e.clientY;
    off += dy;
    wrb.style.backgroundPositionY = off + "px";
    if (Math.floor(off / 9) !== wh._k) {
      wh._k = Math.floor(off / 9);
      vib(3);
      biNoise(4200, 0.05, 0.01);
    }
    BG.aim += dy * 0.0011;
    biDraw();
  });
  const wup = () => {
    if (wy !== null) {
      wy = null;
      biUI();
    }
  };
  wh.addEventListener("pointerup", wup);
  wh.addEventListener("pointercancel", wup);
  const sb = $("#bisb");
  sb.addEventListener("pointerdown", (e) => {
    const r = sb.getBoundingClientRect();
    let x = ((e.clientX - r.left) / r.width) * 2 - 1,
      y = -(((e.clientY - r.top) / r.height) * 2 - 1);
    const L = Math.hypot(x, y);
    if (L > 0.85) {
      x *= 0.85 / L;
      y *= 0.85 / L;
    }
    {
      const q = 0.85 / 3,
        z = (v) => (Math.abs(v) < 0.2 ? 0 : Math.round(v / q) * q);
      ((x = z(x)), (y = z(y)));
      const L2 = Math.hypot(x, y);
      L2 > 0.85 && ((x *= 0.85 / L2), (y *= 0.85 / L2));
    }
    BG.sp = [x, y];
    sb.style.setProperty("--x", x);
    sb.style.setProperty("--y", -y);
    biUI();
    biDraw();
  });
}
function biActs() {
  if (BIO) return;
  BIO = !0;
  Object.assign(act, {
    biBk: () => {
      cancelAnimationFrame(biRaf);
      biHub();
    },
    biOn: (e) => biOnline(String(e)),
    biOnT: () => {
      const e = $("#bidd");
      ((BIOO = e.classList.toggle("open")), e.querySelector(".dd-h").setAttribute("aria-expanded", BIOO));
    },
    biGo: (e) => {
      const [m, l] = String(e).split(":");
      biNew(m, +l || 0);
      biScreen();
    },
    biAgain: () => {
      if (BG.mode === "online") return biOnAgain();
      biNew(BG.mode, BG.lv);
      biScreen();
    },
    biRe: () => {
      biNew("free", 0);
      biScreen();
    },
    biFine: (e) => {
      if (!BG || BG.st === "moving" || BG.st === "over") return;
      if (BG.st === "place") BG.st = "aim";
      BG.aim += +e * 0.0035;
      biDraw();
      biUI();
    },
    biSpin: () => {
      const v = $("#bisv");
      if (!v) return;
      v.hidden = !1;
      const sb = $("#bisb");
      sb.style.setProperty("--x", BG.sp[0]);
      sb.style.setProperty("--y", -BG.sp[1]);
    },
    biSpX: () => {
      const v = $("#bisv");
      v && (v.hidden = !0);
    },
    biSpC: () => {
      BG.sp = [0, 0];
      const sb = $("#bisb");
      sb.style.setProperty("--x", 0);
      sb.style.setProperty("--y", 0);
      biUI();
      biDraw();
    },
    biGd: (e) => {
      st.set("bi:guide", +e);
      biHub();
    },
    biSk: (e) => {
      const v = BISK[e];
      if (!v) return;
      const own = e === "std" || st.get("bi:own", []).includes(e);
      if (!own) {
        if (!UNL() && fl < v.p) return gToast("Il te faut " + v.p + " 🫧 pour la table " + v.n + ".");
        if (!spend(v.p)) return;
        st.set("bi:own", [...st.get("bi:own", []), e]);
        sfx(880, 0.3);
      }
      st.set("bi:skin", e);
      biHub();
    },
  });
}
window.biAiLv = () => {
  const w = st.get("bi:w", [0, 0, 0]);
  return (w[0] | 0) < 3 ? 0 : (w[1] | 0) < 3 ? 1 : 2;
};
var BIOO = !1;
const BIC = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
function biHub() {
  biActs();
  biOff();
  cur = "billard";
  nv("games");
  theme("billard");
  const w = st.get("bi:w", [0, 0, 0]),
    g = st.get("bi:guide", 2);
  app.innerHTML = `<div class="top stk">${bk("home")}<div class="chip">🫧 ${FLX()}</div></div><section class="glass story pt-billard"><i>${gSv({ id: "billard" })}</i><h2>Le tapis vert</h2><p>Billard américain à la bille 8. Les billes glissent, roulent, rebondissent et tournent comme sur une vraie table : donne de l’effet à la blanche pour la faire revenir (rétro), la faire suivre (coulé) ou modifier ses rebonds sur les bandes (effet latéral).</p></section>
 <div class="opts">
 <section class="rc rcx pt-billard" data-g="🎱"><div class="rc-ic">🤖</div><div class="rc-t"><small>Contre l’ordinateur</small><b>Niveau ${["Débutant", "Confirmé", "Expert"][biAiLv()]}</b><span>Victoires ${w[0]} · ${w[1]} · ${w[2]} · 3 victoires pour monter (2, 4 ou 7 🫧)</span></div><button class="rc-go" data-a="biGo" data-v="ai:${biAiLv()}">Jouer${BIC}</button></section>
 <section class="rc pt-billard" data-g="👥"><div class="rc-ic">👥</div><div class="rc-t"><small>Sur cet écran</small><b>À deux</b><span>Même appareil, chacun son tour</span></div><button class="rc-go" data-a="biGo" data-v="duo:0">Jouer${BIC}</button></section>
 <section class="rc pt-billard" data-g="♾"><div class="rc-ic">♾️</div><div class="rc-t"><small>Seul</small><b>Mode libre</b><span>À l’infini : la bille 8 rentre, une nouvelle partie commence</span></div><button class="rc-go" data-a="biGo" data-v="libre:0">Jouer${BIC}</button></section>
 <section class="rc pt-billard" data-g="🎯"><div class="rc-ic">🎯</div><div class="rc-t"><small>Sans règles</small><b>Entraînement</b><span>Travaille la casse, les effets et les rebonds</span></div><button class="rc-go" data-a="biGo" data-v="free:0">Jouer${BIC}</button></section>
 <div class="dd pt-billard${BIOO ? " open" : ""}" id="bidd"><button class="dd-h" data-a="biOnT" aria-expanded="${!!BIOO}" aria-controls="bonl"><span><b>En ligne avec un ami</b><small>Chacun son tour, la partie t’attend</small></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button><div class="dd-l"><div class="dd-i soc-i"><p class="note" style="margin:0 0 8px">Joue avec n’importe qui grâce à un code : crée-le et partage-le, ou entre celui de ton adversaire.</p><div style="display:flex;gap:8px;margin-bottom:12px"><button class="btn" data-a="rmNew" data-v="billard" style="flex:1">🔑 Créer un code</button><button class="btn alt" data-a="rmCode" style="flex:1">Entrer un code</button></div><div id="bonl"></div></div></div></div>
 </div>
 <section class="glass play"><h2>Tables</h2><div class="bisk">${Object.entries(BISK)
   .map(([k, v]) => {
     const own = k === "std" || st.get("bi:own", []).includes(k),
       on = st.get("bi:skin", "std") === k;
     return `<div class="biski"><i class="bisv-${k}"></i><b>${v.n}</b><button class="btn${on ? " alt" : ""}" data-a="biSk" data-v="${k}"${on ? " disabled" : ""}>${on ? "Utilisée" : own ? "Utiliser" : "Acheter · " + v.p + " 🫧"}</button></div>`;
   })
   .join("")}</div></section>
 <section class="glass play"><h2>Aide à la visée</h2><div class="seg">${[
   [2, "Complète"],
   [1, "Courte"],
   [0, "Aucune"],
 ]
   .map(([v, t]) => `<button class="${g === v ? "on" : ""}" data-a="biGd" data-v="${v}">${t}</button>`)
   .join("")}</div>
 <p class="note" style="margin:6px 0 0">Les règles : casse depuis la zone de départ ; la première bille empochée te donne les pleines (1 à 7) ou les rayées (9 à 15). Empoche toutes les tiennes, puis la 8. Faute (blanche empochée, mauvaise bille touchée en premier, aucune bande après le contact) : bille en main pour l’adversaire. La 8 empochée trop tôt fait perdre.</p></section>`;
  biOnList(0);
  window.scrollTo(0, 0);
}
const ZN = { vo: 0, on: !1, out: null, buf: {}, snd: {}, mus: null, ses: null, br: null, raf: 0, tm: null };
window.ZNON = !1;
function znAC() {
  try {
    audio();
  } catch (e) {}
  if (!AC || !mg) return null;
  if (!ZN.out) {
    ZN.out = AC.createGain();
    ZN.out.gain.value = 1;
    ZN.out.connect(mg);
  }
  return AC;
}
function znFlag() {
  const on = Object.keys(ZN.snd).length > 0 || !!ZN.mus || !!ZN.br;
  if (on !== ZN.on) {
    ZN.on = on;
    window.ZNON = on;
    try {
      apply();
    } catch (e) {}
  }
}
function znNoise(k) {
  if (ZN.buf[k]) return ZN.buf[k];
  const n = AC.sampleRate * 6,
    b = AC.createBuffer(2, n, AC.sampleRate);
  for (let c = 0; c < 2; c++) {
    const d = b.getChannelData(c);
    let b0 = 0,
      b1 = 0,
      b2 = 0,
      b3 = 0,
      b4 = 0,
      b5 = 0,
      b6 = 0,
      last = 0;
    for (let i = 0; i < n; i++) {
      const w = Math.random() * 2 - 1;
      if (k === "w") d[i] = w * 0.5;
      else if (k === "p") {
        b0 = 0.99886 * b0 + w * 0.0555179;
        b1 = 0.99332 * b1 + w * 0.0750759;
        b2 = 0.969 * b2 + w * 0.153852;
        b3 = 0.8665 * b3 + w * 0.3104856;
        b4 = 0.55 * b4 + w * 0.5329522;
        b5 = -0.7616 * b5 - w * 0.016898;
        d[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.09;
        b6 = w * 0.115926;
      } else {
        last = (last + 0.02 * w) / 1.02;
        d[i] = last * 3.2;
      }
    }
  }
  return (ZN.buf[k] = b);
}
function znSrc(k, dst) {
  const s = AC.createBufferSource();
  s.buffer = znNoise(k);
  s.loop = !0;
  s.loopStart = Math.random() * 2;
  s.connect(dst);
  s.start(0, Math.random() * 5);
  return s;
}
function znFilt(t, f, q) {
  const x = AC.createBiquadFilter();
  x.type = t;
  x.frequency.value = f;
  if (q) x.Q.value = q;
  return x;
}
function znLfo(f, depth, param, type) {
  const o = AC.createOscillator(),
    g = AC.createGain();
  o.type = type || "sine";
  o.frequency.value = f;
  g.gain.value = depth;
  o.connect(g).connect(param);
  o.start();
  return o;
}
function znBurst(dst, f, q, len, vol, t) {
  const s = AC.createBufferSource();
  s.buffer = znNoise("w");
  const bp = znFilt("bandpass", f, q),
    g = AC.createGain();
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.003);
  g.gain.exponentialRampToValueAtTime(0.0001, t + len);
  s.connect(bp).connect(g).connect(dst);
  s.start(t, Math.random() * 5, len + 0.05);
}
const ZSND = [
  ["mer", "Vagues", "🌊"],
  ["pluie", "Pluie", "🌧️"],
  ["orage", "Orage lointain", "⛈️"],
  ["ruisseau", "Ruisseau", "💧"],
  ["vent", "Vent", "🍃"],
  ["oiseaux", "Oiseaux", "🐦"],
  ["feu", "Feu de bois", "🔥"],
  ["grillons", "Nuit d’été", "🌙"],
  ["bol", "Bol chantant", "🔔"],
  ["blanc", "Bruit blanc", "◻️"],
  ["rose", "Bruit rose", "🌸"],
  ["brun", "Bruit brun", "🟫"],
];
function znMake(id) {
  const o = AC.createGain(),
    N = [],
    T = [],
    add = (n) => (N.push(n), n);
  o.gain.value = 0;
  o.connect(ZN.out);
  const now = () => AC.currentTime;
  if (id === "blanc") add(znSrc("w", o));
  if (id === "rose") add(znSrc("p", o));
  if (id === "brun") add(znSrc("b", o));
  if (id === "mer") {
    const lp = znFilt("lowpass", 520),
      g = AC.createGain();
    g.gain.value = 0.55;
    lp.connect(g).connect(o);
    add(znSrc("b", lp));
    add(znLfo(0.085, 0.42, g.gain));
    const hp = znFilt("bandpass", 1800, 0.7),
      g2 = AC.createGain();
    g2.gain.value = 0.05;
    hp.connect(g2).connect(o);
    add(znSrc("w", hp));
    add(znLfo(0.085, 0.05, g2.gain));
    add(znLfo(0.031, 180, lp.frequency));
  }
  if (id === "pluie" || id === "orage") {
    const hp = znFilt("highpass", id === "orage" ? 500 : 900),
      lp = znFilt("lowpass", id === "orage" ? 4500 : 7000),
      g = AC.createGain();
    g.gain.value = id === "orage" ? 0.55 : 0.45;
    hp.connect(lp).connect(g).connect(o);
    add(znSrc("p", hp));
    T.push(
      setInterval(() => {
        const t = now();
        for (let i = 0; i < 4; i++)
          if (Math.random() < 0.7)
            znBurst(
              o,
              2000 + Math.random() * 4000,
              6,
              0.02 + Math.random() * 0.03,
              0.04 + Math.random() * 0.08,
              t + Math.random() * 0.2,
            );
      }, 200),
    );
    if (id === "orage") {
      const thunder = () => {
        const t = now() + 0.1,
          s = AC.createBufferSource();
        s.buffer = znNoise("b");
        const lp2 = znFilt("lowpass", 140 + Math.random() * 80),
          g2 = AC.createGain();
        g2.gain.setValueAtTime(0, t);
        g2.gain.linearRampToValueAtTime(0.9, t + 0.4 + Math.random() * 0.6);
        g2.gain.exponentialRampToValueAtTime(0.001, t + 5 + Math.random() * 3);
        s.connect(lp2).connect(g2).connect(o);
        s.start(t, Math.random() * 4, 9);
      };
      T.push(
        setInterval(() => {
          if (Math.random() < 0.35) thunder();
        }, 6000),
      );
      setTimeout(thunder, 2500);
    }
  }
  if (id === "ruisseau") {
    [
      [900, 1.6, 0.35],
      [2200, 2.2, 0.18],
    ].forEach(([f, q, v]) => {
      const bp = znFilt("bandpass", f, q),
        g = AC.createGain();
      g.gain.value = v;
      bp.connect(g).connect(o);
      add(znSrc("w", bp));
      T.push(
        setInterval(() => {
          bp.frequency.setTargetAtTime(f * (0.6 + Math.random() * 0.9), now(), 0.05);
        }, 110),
      );
    });
  }
  if (id === "vent") {
    const bp = znFilt("bandpass", 420, 0.7),
      g = AC.createGain();
    g.gain.value = 0.6;
    bp.connect(g).connect(o);
    add(znSrc("p", bp));
    add(znLfo(0.06, 260, bp.frequency));
    add(znLfo(0.045, 0.35, g.gain));
  }
  if (id === "oiseaux") {
    const sing = () => {
      const t = now() + 0.05,
        f0 = 2200 + Math.random() * 2400,
        n = 2 + Math.floor(Math.random() * 5),
        sp = 0.09 + Math.random() * 0.08,
        p = AC.createStereoPanner ? AC.createStereoPanner() : null;
      if (p) {
        p.pan.value = Math.random() * 1.6 - 0.8;
        p.connect(o);
      }
      for (let i = 0; i < n; i++) {
        const s = AC.createOscillator(),
          g = AC.createGain(),
          a = t + i * sp * 1.4;
        s.type = "sine";
        s.frequency.setValueAtTime(f0 * (1 + (Math.random() - 0.5) * 0.15), a);
        s.frequency.exponentialRampToValueAtTime(f0 * (Math.random() < 0.5 ? 1.35 : 0.75), a + sp);
        g.gain.setValueAtTime(0, a);
        g.gain.linearRampToValueAtTime(0.06, a + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0005, a + sp);
        s.connect(g).connect(p || o);
        s.start(a);
        s.stop(a + sp + 0.05);
      }
    };
    T.push(
      setInterval(() => {
        if (Math.random() < 0.55) sing();
      }, 900),
    );
    sing();
  }
  if (id === "feu") {
    const lp = znFilt("lowpass", 380),
      g = AC.createGain();
    g.gain.value = 0.5;
    lp.connect(g).connect(o);
    add(znSrc("b", lp));
    add(znLfo(0.3, 0.12, g.gain));
    T.push(
      setInterval(() => {
        const t = now();
        for (let i = 0; i < 3; i++)
          if (Math.random() < 0.5)
            znBurst(
              o,
              1500 + Math.random() * 3500,
              2,
              0.006 + Math.random() * 0.02,
              0.08 + Math.random() * 0.25,
              t + Math.random() * 0.12,
            );
      }, 130),
    );
  }
  if (id === "grillons") {
    const lp = znFilt("lowpass", 300),
      g0 = AC.createGain();
    g0.gain.value = 0.12;
    lp.connect(g0).connect(o);
    add(znSrc("b", lp));
    T.push(
      setInterval(() => {
        const t = now() + 0.02,
          f = 4300 + Math.random() * 400;
        for (let k = 0; k < 2; k++) {
          if (Math.random() < 0.3) continue;
          const s = AC.createOscillator(),
            g = AC.createGain(),
            st0 = t + k * 0.3 + Math.random() * 0.1;
          s.frequency.value = f + k * 90;
          for (let i = 0; i < 3; i++) {
            const a = st0 + i * 0.045;
            g.gain.setValueAtTime(0, a);
            g.gain.linearRampToValueAtTime(0.025, a + 0.008);
            g.gain.linearRampToValueAtTime(0, a + 0.03);
          }
          g.gain.value = 0;
          s.connect(g).connect(o);
          s.start(st0);
          s.stop(st0 + 0.2);
        }
      }, 650),
    );
  }
  if (id === "bol") {
    const strike = () => {
      const t = now() + 0.05,
        f = [196, 220, 174.6, 233.1][Math.floor(Math.random() * 4)];
      [
        [1, 0.18],
        [2.76, 0.07],
        [5.4, 0.03],
        [1.003, 0.12],
      ].forEach(([m, v]) => {
        const s = AC.createOscillator(),
          g = AC.createGain();
        s.frequency.value = f * m;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(v, t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 9);
        s.connect(g).connect(o);
        s.start(t);
        s.stop(t + 9.2);
      });
    };
    strike();
    T.push(setInterval(strike, 11000));
  }
  return {
    o,
    stop() {
      T.forEach(clearInterval);
      o.gain.setTargetAtTime(0, now(), 0.4);
      setTimeout(() => {
        N.forEach((n) => {
          try {
            n.stop();
          } catch (e) {}
        });
        try {
          o.disconnect();
        } catch (e) {}
      }, 1500);
    },
  };
}
function znMix() {
  return st.get("zn:mix", {});
}
function znSet(id, v) {
  if (!znAC()) return;
  const m = znMix();
  m[id] = v;
  st.set("zn:mix", m);
  let s = ZN.snd[id];
  if (v > 0) {
    if (!s) s = ZN.snd[id] = znMake(id);
    s.o.gain.setTargetAtTime(v * v * 0.9, AC.currentTime, 0.3);
  } else if (s) {
    s.stop();
    delete ZN.snd[id];
  }
  znFlag();
}
function znAllOff() {
  Object.keys(ZN.snd).forEach((k) => {
    ZN.snd[k].stop();
    delete ZN.snd[k];
  });
  clearTimeout(ZN.tm);
  ZN.tm = null;
  ZN.te = 0;
  znFlag();
}
const ZMUS = {
  relax: {
    r: 146.8,
    ch: [
      [0, 7, 12, 16],
      [5, 12, 17, 21],
      [0, 7, 12, 19],
      [-5, 7, 12, 14],
    ],
    sw: 22,
    lp: 1000,
    bell: 0.45,
  },
  sommeil: {
    r: 110,
    ch: [
      [0, 7, 12],
      [5, 12, 17],
      [0, 7, 12],
    ],
    sw: 30,
    lp: 600,
    bell: 0.08,
  },
  stress: {
    r: 130.8,
    ch: [
      [0, 7, 12, 16],
      [5, 12, 17, 21],
      [-5, 2, 7, 14],
      [0, 7, 12, 16],
    ],
    sw: 24,
    lp: 950,
    bell: 0.35,
  },
  anxiete: {
    r: 123.5,
    ch: [
      [0, 7, 12, 16],
      [0, 7, 12, 19],
    ],
    sw: 22,
    lp: 850,
    bell: 0.25,
  },
  concentration: {
    r: 146.8,
    ch: [
      [0, 7, 12, 19],
      [0, 7, 14, 19],
    ],
    sw: 26,
    lp: 1000,
    bell: 0.3,
  },
  bienveillance: {
    r: 130.8,
    ch: [
      [0, 7, 12, 16],
      [5, 12, 17, 21],
      [7, 14, 19, 23],
      [0, 7, 12, 16],
    ],
    sw: 20,
    lp: 1100,
    bell: 0.5,
  },
  estime: {
    r: 146.8,
    ch: [
      [0, 7, 12, 16],
      [5, 12, 17, 21],
      [7, 14, 19, 23],
      [0, 7, 12, 19],
    ],
    sw: 20,
    lp: 1100,
    bell: 0.45,
  },
  douleur: {
    r: 110,
    ch: [
      [0, 7, 12],
      [5, 12, 17],
      [0, 7, 12, 16],
    ],
    sw: 28,
    lp: 750,
    bell: 0.15,
  },
  envie: {
    r: 123.5,
    ch: [
      [0, 7, 12, 16],
      [-5, 7, 12, 14],
      [5, 12, 17, 21],
    ],
    sw: 24,
    lp: 900,
    bell: 0.3,
  },
};
function znMusic(id, vol) {
  if (!znAC()) return;
  znMusStop();
  const P = ZMUS[id] || ZMUS.relax,
    o = AC.createGain(),
    lp = znFilt("lowpass", P.lp, 0.3),
    now = () => AC.currentTime,
    rev = AC.createDelay(1.5),
    fb = AC.createGain(),
    wet = AC.createGain(),
    dl = znFilt("lowpass", 1800);
  rev.delayTime.value = 0.42;
  fb.gain.value = 0.38;
  wet.gain.value = 0.28;
  lp.connect(o);
  lp.connect(rev);
  rev.connect(dl).connect(fb).connect(rev);
  dl.connect(wet).connect(o);
  o.connect(ZN.out);
  o.gain.value = 0;
  o.gain.setTargetAtTime(vol, now(), 4);
  let live = [];
  const play = (notes) => {
    const t = now(),
      nv = [];
    live.forEach((v) => {
      v.g.gain.cancelScheduledValues(t);
      v.g.gain.setTargetAtTime(0, t, 3.5);
      setTimeout(() => {
        try {
          v.a.stop();
          v.b.stop();
        } catch (e) {}
      }, 16e3);
    });
    notes.forEach((n, i) => {
      const f = P.r * Math.pow(2, n / 12),
        a = AC.createOscillator(),
        b = AC.createOscillator(),
        g = AC.createGain(),
        gb = AC.createGain();
      a.type = "sine";
      b.type = "sine";
      a.frequency.value = f;
      b.frequency.value = f * 2;
      gb.gain.value = 0.12;
      b.connect(gb).connect(g);
      a.connect(g);
      g.gain.value = 0;
      g.connect(lp);
      a.start(t);
      b.start(t);
      g.gain.setTargetAtTime((i ? 0.03 : 0.045) / (1 + i * 0.15), t, 3);
      nv.push({ a, b, g });
    });
    live = nv;
  };
  let ci = 0;
  play(P.ch[0]);
  const ti = setInterval(() => {
    ci = (ci + 1) % P.ch.length;
    play(P.ch[ci]);
  }, P.sw * 1e3);
  const tb = setInterval(() => {
    if (Math.random() > P.bell) return;
    const c = P.ch[ci],
      n = c[Math.floor(Math.random() * c.length)] + 12,
      t = now() + 0.05,
      f = P.r * Math.pow(2, n / 12),
      s = AC.createOscillator(),
      g = AC.createGain();
    s.type = "sine";
    s.frequency.value = f;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.014, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 7);
    s.connect(g).connect(lp);
    s.start(t);
    s.stop(t + 7.2);
  }, 5200);
  ZN.mus = {
    o,
    stop(f) {
      clearInterval(ti);
      clearInterval(tb);
      o.gain.cancelScheduledValues(now());
      o.gain.setTargetAtTime(0, now(), f || 1.5);
      setTimeout(
        () => {
          live.forEach((v) => {
            try {
              v.a.stop();
              v.b.stop();
            } catch (e) {}
          });
          try {
            o.disconnect();
          } catch (e) {}
        },
        (f || 1.5) * 5000,
      );
    },
    vol(x) {
      o.gain.setTargetAtTime(x, now(), 0.8);
    },
  };
  znFlag();
}
function znMusStop(f) {
  if (ZN.mus) {
    ZN.mus.stop(f);
    ZN.mus = null;
    znFlag();
  }
}
function znTone(f1, f2, d, v) {
  if (!znAC()) return;
  const t = AC.currentTime,
    s = AC.createOscillator(),
    g = AC.createGain();
  s.frequency.setValueAtTime(f1, t);
  s.frequency.linearRampToValueAtTime(f2, t + d);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(v || 0.05, t + 0.3);
  g.gain.linearRampToValueAtTime(0, t + d);
  s.connect(g).connect(ZN.out);
  s.start(t);
  s.stop(t + d + 0.05);
}
try {
  window.speechSynthesis &&
    speechSynthesis.addEventListener &&
    speechSynthesis.addEventListener("voiceschanged", () => {
      ZVO = null;
      const s = document.getElementById("znvs");
      s && s.options.length < 2 && ZN.pre && znPre(ZN.pre);
    });
} catch (e) {}
let ZAU = null;
const ZNATV = 1;
const ZTEST = "Bonjour. Installe-toi confortablement, et respire tranquillement.";
function znH(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = (Math.imul(h, 33) ^ s.charCodeAt(i)) >>> 0;
  return h.toString(36);
}
function znNat() {
  return st.get("zn:nat", 0) === ZNATV;
}
function znNatOn() {
  const n = st.get("zn:vname", "");
  return znNat() && (n === "" || n === "@nat");
}
function znNatList() {
  return [...new Set(ZSES.flatMap((s) => s.S.map((c) => c.t))), ZTEST, "Voici ma voix."];
}
async function znNatSrc(t) {
  const u = "voix/" + znH(t) + ".mp3";
  try {
    const m = window.caches && (await caches.match(u));
    if (m) return URL.createObjectURL(await m.blob());
  } catch (e) {}
  return u;
}
function znNatSay(t, cb) {
  const q = ++ZVQ;
  znNatSrc(t).then((src) => {
    if (q !== ZVQ) return;
    try {
      ZAU && ZAU.pause();
    } catch (e) {}
    const a = new Audio(src);
    a.volume = 0.95;
    a.playbackRate = { 0.72: 0.9, 0.8: 1, 0.9: 1.1 }[st.get("zn:vrate", 0.8)] || 1;
    ZAU = a;
    a.onplay = () => cb && cb(1);
    a.play().catch(() => cb && cb(0));
  });
}
async function znDl(id) {
  const p = $("#zndlp"),
    b = document.querySelector('[data-a="znDl"]'),
    L = znNatList();
  b && (b.disabled = !0);
  let c = null,
    n = 0,
    bad = 0;
  try {
    c = await caches.open("zn-voix-1");
  } catch (e) {}
  const one = async (t) => {
    const u = "voix/" + znH(t) + ".mp3";
    try {
      const r = await fetch(u, { cache: "reload" });
      if (!r.ok) throw 0;
      c ? await c.put(u, r) : await r.blob();
    } catch (e) {
      bad++;
    }
    n++;
    p && (p.textContent = "Téléchargement… " + Math.round((n / L.length) * 100) + " %");
  };
  const Q = L.slice();
  await Promise.all(
    [0, 1, 2, 3, 4, 5].map(async () => {
      while (Q.length) await one(Q.shift());
    }),
  );
  if (bad) {
    p &&
      (p.textContent = "Téléchargement incomplet (" + bad + " fichiers). Vérifie ta connexion et réessaie.");
    b && (b.disabled = !1);
    return;
  }
  st.set("zn:nat", ZNATV);
  st.set("zn:vname", "@nat");
  st.get("zn:voice", !0) || st.set("zn:voice", !0);
  znPre(id);
  znNatSay("Voici ma voix.");
}
let ZVO = null;
let ZVQ = 0;
function znVoices() {
  if (!window.speechSynthesis) return [];
  const V = speechSynthesis.getVoices().filter((v) => /^fr/i.test(v.lang)),
    sc = (v) =>
      (/natural|neural|premium|enhanced|wavenet|online/i.test(v.name) ? 6 : 0) +
      (/google/i.test(v.name) ? 3 : 0) +
      (/amélie|amelie|audrey|aurélie|aurelie|chantal|marie|julie|denise|sylvie|celine|céline|lea|léa/i.test(
        v.name,
      )
        ? 2
        : 0) +
      (/fr[-_]CA/i.test(v.lang) ? 1 : 0) -
      (/compact|espeak/i.test(v.name) ? 5 : 0);
  return V.sort((a, b) => sc(b) - sc(a));
}
function znVoice() {
  const V = ZVO && ZVO.length ? ZVO : (ZVO = znVoices()),
    nm = st.get("zn:vname", "");
  return V.find((v) => v.name === nm) || V[0] || null;
}
function znSay(t) {
  if (!st.get("zn:voice", !0)) return;
  if (znNatOn()) {
    try {
      window.speechSynthesis && speechSynthesis.cancel();
    } catch (e) {}
    return znNatSay(t);
  }
  if (!window.speechSynthesis) return;
  try {
    speechSynthesis.cancel();
    const q = ++ZVQ,
      parts = t
        .replace(/…/g, "…|")
        .replace(/([.!?:;])\s+/g, "$1|")
        .split("|")
        .map((s) => s.replace(/…/g, "").trim())
        .filter(Boolean),
      rate = st.get("zn:vrate", 0.8),
      v = znVoice();
    let i = 0;
    const nx = () => {
      if (q !== ZVQ || i >= parts.length) return;
      const u = new SpeechSynthesisUtterance(parts[i++]);
      u.lang = v ? v.lang : "fr-FR";
      v && (u.voice = v);
      u.rate = rate;
      u.pitch = 0.96;
      u.volume = 0.92;
      u.onend = () => setTimeout(nx, i < parts.length ? (/[.?!]$/.test(parts[i - 1]) ? 900 : 550) : 0);
      u.onerror = () => {};
      speechSynthesis.speak(u);
    };
    setTimeout(nx, 350);
  } catch (e) {}
}
function znHush() {
  ZVQ++;
  try {
    ZAU && ZAU.pause();
  } catch (e) {}
  try {
    window.speechSynthesis && speechSynthesis.cancel();
  } catch (e) {}
}
const ZB = (t, w, x) => Object.assign({ t, w }, x || {});
const ZSES = [
  {
    id: "relax",
    n: "Se détendre",
    ic: "🌿",
    c: ["#7ad8b0", "#2a7a6a"],
    d: "Respiration consciente et relâchement du corps.",
    amb: "ruisseau",
    S: [
      ZB("Installe-toi confortablement, assis ou allongé. Laisse tes épaules descendre.", 1),
      ZB("Si tu le veux, ferme les yeux, ou pose ton regard sur un point devant toi.", 1),
      ZB("Remarque simplement ta respiration, sans chercher à la changer.", 2),
      ZB("Sens l’air frais qui entre par le nez… et l’air plus tiède qui ressort.", 2),
      ZB("Laisse ton ventre se gonfler doucement à l’inspiration, et se relâcher à l’expiration.", 2),
      ZB("Inspire tranquillement… et expire un peu plus longtemps, comme un soupir.", 4, {
        br: [4, 0, 6, 0],
      }),
      ZB("À chaque expiration, laisse partir un peu de tension : le front, la mâchoire, les épaules.", 3, {
        br: [4, 0, 6, 0],
      }),
      ZB("Si des pensées arrivent, c’est normal. Remarque-les, puis reviens au souffle, sans te juger.", 3),
      ZB("Relâche les bras, les mains, jusqu’au bout des doigts.", 2),
      ZB("Relâche le ventre, le bas du dos, les jambes, les pieds.", 2),
      ZB("Tout le corps respire. Il n’y a rien d’autre à faire que d’être là.", 4),
      ZB("Reste encore quelques instants avec cette sensation de calme.", 4),
      ZB("Doucement, prends une respiration un peu plus profonde. Bouge les doigts, les orteils.", 1),
      ZB("Quand tu es prêt, ouvre les yeux. Garde un peu de ce calme avec toi.", 1, { end: 1 }),
    ],
  },
  {
    id: "sommeil",
    n: "Sommeil",
    ic: "🌙",
    c: ["#8a9ae8", "#1e2458"],
    d: "Scan corporel allongé pour laisser venir le sommeil.",
    amb: "pluie",
    sleep: 1,
    S: [
      ZB(
        "Allonge-toi dans ton lit, dans une position confortable. Pose le téléphone à côté de toi : tu n’as plus besoin de regarder l’écran.",
        2,
      ),
      ZB(
        "Laisse ton corps peser de tout son poids sur le matelas. Tu n’as plus rien à faire aujourd’hui.",
        2,
      ),
      ZB("Respire lentement. Inspire par le nez… et expire longuement.", 4, { br: [4, 0, 7, 0] }),
      ZB(
        "Porte ton attention sur tes pieds. Remarque la chaleur, le contact des draps… puis laisse-les se détendre.",
        2,
        { bp: "pieds" },
      ),
      ZB("Tes chevilles, tes mollets se relâchent… deviennent lourds et chauds.", 2, { bp: "mollets" }),
      ZB("Tes genoux, tes cuisses se détendent à leur tour.", 2, { bp: "cuisses" }),
      ZB("Ton bassin, le bas de ton dos s’enfoncent doucement dans le lit.", 2, { bp: "bassin" }),
      ZB("Ton ventre se soulève et redescend, lentement, tout seul.", 2, { bp: "ventre" }),
      ZB("Ta poitrine, tes épaules se relâchent. Laisse-les tomber.", 2, { bp: "epaules" }),
      ZB("Tes bras deviennent lourds, tes mains s’ouvrent.", 2, { bp: "bras" }),
      ZB("Ton cou et ta mâchoire se desserrent. Ta langue se pose au fond de la bouche.", 2, {
        bp: "machoire",
      }),
      ZB("Ton visage se détend : les joues, les yeux, le front.", 2, { bp: "front" }),
      ZB("Si une pensée revient, imagine-la comme un nuage qui passe, et reviens à ta respiration.", 3),
      ZB("Tout ton corps est lourd, au chaud, en sécurité.", 3, { bp: "tout" }),
      ZB("Il n’y a plus rien à faire. Laisse le sommeil venir quand il voudra…", 6, { end: 1 }),
    ],
  },
  {
    id: "stress",
    n: "Réduire le stress",
    ic: "🍃",
    c: ["#9ad8e8", "#2a5a8a"],
    d: "Relaxation musculaire progressive : contracter, puis relâcher.",
    amb: "vent",
    S: [],
  },
  {
    id: "anxiete",
    n: "Apaiser l’anxiété",
    ic: "🌊",
    c: ["#7ac8e8", "#1e4a7a"],
    d: "Soupir cyclique et ancrage par les cinq sens.",
    amb: "mer",
    S: [
      ZB(
        "Fais cet exercice assis, les pieds bien posés au sol. Ce que tu ressens est désagréable, mais ça va passer.",
        2,
      ),
      ZB(
        "Commençons par le soupir : inspire par le nez… puis une deuxième petite inspiration pour remplir les poumons… et expire très longuement par la bouche.",
        3,
        { br: "sigh" },
      ),
      ZB("Encore : double inspiration par le nez… longue expiration, comme un soupir de soulagement.", 3, {
        br: "sigh",
      }),
      ZB("Continue à ton rythme, l’expiration toujours plus longue que l’inspiration.", 5, { br: "sigh" }),
      ZB("Maintenant, ancre-toi dans l’instant. Regarde autour de toi et nomme cinq choses que tu vois.", 3, {
        sens: 5,
      }),
      ZB("Remarque quatre choses que tu peux toucher : tes vêtements, le sol sous tes pieds, tes mains…", 3, {
        sens: 4,
      }),
      ZB("Écoute trois sons autour de toi, proches ou lointains.", 3, { sens: 3 }),
      ZB("Repère deux odeurs, ou imagine deux parfums que tu aimes.", 2, { sens: 2 }),
      ZB("Remarque un goût dans ta bouche, ou prends une gorgée d’eau.", 2, { sens: 1 }),
      ZB("Sens tes pieds sur le sol. Tu es ici, maintenant.", 2),
      ZB("L’anxiété monte puis redescend, comme une vague. Laisse-la passer sans la combattre.", 3, {
        br: [4, 0, 7, 0],
      }),
      ZB("Reprends quelques soupirs lents…", 3, { br: "sigh" }),
      ZB(
        "Quand tu es prêt, reviens doucement à ce que tu faisais. Tu peux refaire cet exercice dès que tu en as besoin.",
        1,
        { end: 1 },
      ),
    ],
  },
  {
    id: "concentration",
    n: "Concentration",
    ic: "🎯",
    c: ["#e8d07a", "#7a5a1e"],
    d: "Compter ses respirations pour muscler l’attention.",
    amb: "",
    S: [
      ZB("Assieds-toi le dos droit mais détendu, les mains posées sur les cuisses.", 1),
      ZB("Choisis un point d’attention : l’air au bout du nez, ou le ventre qui bouge.", 2),
      ZB("Compte tes expirations : un… deux… jusqu’à dix, puis recommence à un.", 5, { cnt: 1 }),
      ZB(
        "Si tu perds le compte, ce n’est pas une erreur : c’est le moment même où l’attention se muscle. Recommence simplement à un.",
        5,
        { cnt: 1 },
      ),
      ZB("Continue de compter, calmement.", 6, { cnt: 1 }),
      ZB("Élargis maintenant l’attention aux sons de la pièce, sans les juger.", 3),
      ZB("Puis reviens au souffle, à un seul point.", 4, { cnt: 1 }),
      ZB("Pour finir, choisis la prochaine tâche que tu vas faire. Une seule.", 2),
      ZB("Ouvre les yeux, prêt à t’y consacrer pleinement.", 1, { end: 1 }),
    ],
  },
  {
    id: "bienveillance",
    n: "Bienveillance",
    ic: "💗",
    c: ["#ffb0c8", "#8a2a5a"],
    d: "Méditation de l’amour bienveillant (metta), pour soi et les autres.",
    amb: "bol",
    S: [
      ZB("Installe-toi et pose une main sur le cœur si tu le souhaites.", 2),
      ZB("Respire doucement. Laisse un léger sourire venir sur ton visage.", 2),
      ZB(
        "Pense à toi, tel que tu es aujourd’hui. Répète intérieurement : que je sois en sécurité. Que je sois en paix. Que je sois bon envers moi-même.",
        5,
        { ring: 0 },
      ),
      ZB(
        "Pense maintenant à quelqu’un que tu aimes. Imagine son visage. Qu’il soit en sécurité. Qu’il soit en paix. Qu’il soit heureux.",
        5,
        { ring: 1 },
      ),
      ZB(
        "Pense à une personne que tu croises sans vraiment la connaître. Qu’elle soit en paix, elle aussi.",
        4,
        { ring: 2 },
      ),
      ZB(
        "Si tu le peux, pense à une personne avec qui c’est difficile. Sans forcer : qu’elle soit en paix.",
        4,
        { ring: 3 },
      ),
      ZB("Élargis à tous les êtres : que tous soient en sécurité, en paix, libres de souffrance.", 5, {
        ring: 4,
      }),
      ZB("Remarque ce que tu ressens maintenant, sans rien changer.", 3, { ring: 4 }),
      ZB("Doucement, reviens à la pièce, en gardant cette chaleur avec toi.", 1, { end: 1 }),
    ],
  },
  {
    id: "estime",
    n: "Estime de soi",
    ic: "✨",
    c: ["#ffd890", "#8a5a2a"],
    d: "Une pause d’auto-compassion, pour se parler avec douceur.",
    amb: "",
    S: [
      ZB("Installe-toi confortablement et respire tranquillement.", 2, { br: [4, 0, 6, 0] }),
      ZB(
        "Pense à une situation qui te pèse en ce moment, ou à une critique que tu te fais souvent. Choisis quelque chose de léger pour commencer.",
        3,
      ),
      ZB("Remarque où tu le ressens dans ton corps.", 2),
      ZB("Dis-toi : c’est un moment difficile. Ça fait mal.", 3, { st: 0 }),
      ZB("Puis : les difficultés font partie de la vie. Je ne suis pas seul à vivre ça.", 3, { st: 1 }),
      ZB("Pose une main sur ton cœur ou sur ta joue, et sens sa chaleur.", 2, { st: 2 }),
      ZB("Dis-toi : que je sois bon envers moi-même. Que je m’accorde la patience dont j’ai besoin.", 3, {
        st: 2,
      }),
      ZB("Que dirais-tu à un ami qui vit la même chose ? Dis-le-toi maintenant, avec la même douceur.", 4, {
        st: 2,
      }),
      ZB("Pense à trois choses que tu as faites récemment, petites ou grandes, dont tu peux être fier.", 5, {
        stars: 1,
      }),
      ZB("Respire. Tu mérites la même gentillesse que tu offres aux autres.", 2),
      ZB("Quand tu es prêt, ouvre les yeux.", 1, { end: 1 }),
    ],
  },
  {
    id: "douleur",
    n: "Apprivoiser l’inconfort",
    ic: "🤲",
    c: ["#c8a8e8", "#4a2a7a"],
    d: "Observer une sensation désagréable avec douceur. Ne remplace pas un avis médical.",
    amb: "bol",
    S: [
      ZB("Installe-toi dans la position la moins inconfortable possible. Bouge si tu en as besoin.", 2),
      ZB("Respire lentement, avec une expiration un peu plus longue.", 3, { br: [4, 0, 6, 0] }),
      ZB(
        "Repère la zone d’inconfort. Au lieu de la fuir, observe-la avec curiosité : sa forme, sa taille, sa température.",
        3,
        { spot: 1 },
      ),
      ZB("Remarque que la sensation n’est pas figée : elle bouge, elle change d’un instant à l’autre.", 3, {
        spot: 1,
      }),
      ZB("Imagine que ton souffle va jusqu’à cette zone, et qu’à l’expiration elle s’adoucit un peu.", 4, {
        spot: 2,
        br: [4, 0, 6, 0],
      }),
      ZB(
        "Repère maintenant une zone du corps qui va bien : les mains, les pieds… et repose ton attention là.",
        3,
        { spot: 3 },
      ),
      ZB("Fais aller ton attention de l’une à l’autre, doucement, à ton rythme.", 4, { spot: 4 }),
      ZB("Accueille ce qui est là, sans te juger. Tu fais de ton mieux.", 3, { spot: 2 }),
      ZB(
        "Reviens doucement. Si l’inconfort est fort ou inhabituel, parles-en à un professionnel de santé.",
        1,
        { end: 1 },
      ),
    ],
  },
  {
    id: "envie",
    n: "Traverser une envie",
    ic: "🏄",
    c: ["#8ae0d0", "#1e5a6a"],
    d: "Surfer sur une envie (fumer, grignoter, écran…) sans y céder ni la combattre.",
    amb: "mer",
    S: [
      ZB(
        "Si une envie forte est là, tu n’as pas besoin d’y céder, ni de la combattre. Tu vas juste l’observer.",
        2,
        { wave: 0 },
      ),
      ZB("Note son intensité, de zéro à dix, avec le curseur.", 3, { wave: 0, rate: 0 }),
      ZB("Remarque où tu la ressens dans le corps : la gorge, le ventre, les mains…", 3, { wave: 0.2 }),
      ZB("Décris-la : est-elle chaude, serrée, piquante ? Change-t-elle ?", 3, { wave: 0.35 }),
      ZB("Imagine l’envie comme une vague. Elle monte, atteint un sommet…", 3, { wave: 0.55 }),
      ZB("Respire, et surfe sur la vague. Tu restes à la surface.", 5, { wave: 0.75, br: [4, 0, 6, 0] }),
      ZB("Elle redescend, doucement, comme toutes les vagues.", 4, { wave: 1 }),
      ZB("Note à nouveau son intensité. A-t-elle changé ?", 3, { wave: 1, rate: 1 }),
      ZB(
        "Chaque vague que tu laisses passer renforce ta capacité à le refaire. Si tu en as besoin, parles-en à quelqu’un de confiance ou à un professionnel.",
        2,
        { wave: 1, end: 1 },
      ),
    ],
  },
];
(() => {
  const G = [
    [
      "mains",
      "Serre les poings, fort mais sans douleur…",
      "Relâche les mains. Sens la différence, la chaleur qui arrive.",
    ],
    [
      "bras",
      "Plie les coudes et contracte les bras, comme pour montrer tes muscles…",
      "Relâche. Laisse les bras retomber, lourds.",
    ],
    ["epaules", "Monte les épaules vers les oreilles…", "Laisse-les retomber. Sens le cou se libérer."],
    ["front", "Fronce les sourcils, plisse le front…", "Relâche. Ton front devient lisse."],
    ["yeux", "Ferme fort les yeux, plisse les joues…", "Relâche ton visage."],
    ["machoire", "Serre doucement les dents…", "Relâche la mâchoire, laisse-la s’entrouvrir."],
    [
      "ventre",
      "Rentre le ventre, contracte les abdominaux…",
      "Relâche. Laisse le ventre respirer librement.",
    ],
    ["cuisses", "Serre les cuisses l’une contre l’autre…", "Relâche les jambes."],
    ["mollets", "Tire les orteils vers toi pour tendre les mollets…", "Relâche. Les mollets s’adoucissent."],
    ["pieds", "Recroqueville les orteils…", "Relâche les pieds."],
  ];
  const s = ZSES.find((e) => e.id === "stress").S;
  s.push(
    ZB(
      "Assieds-toi ou allonge-toi. Nous allons contracter puis relâcher les muscles, groupe par groupe. Contracte sans jamais forcer ni avoir mal.",
      2,
    ),
    ZB("Prends deux respirations lentes.", 2, { br: [4, 0, 6, 0] }),
  );
  G.forEach(([bp, a, b]) => {
    s.push(ZB(a, 0, { f: 5, bp, ten: 1 }), ZB(b, 1.5, { bp }));
  });
  s.push(
    ZB("Parcours ton corps : si une zone est encore tendue, relâche-la à l’expiration.", 3, { bp: "tout" }),
    ZB("Respire calmement et savoure cette détente.", 3, { br: [4, 0, 6, 0], bp: "tout" }),
    ZB("Reviens doucement, en bougeant les doigts et les orteils.", 1, { end: 1 }),
  );
})();
function znStats() {
  return st.get("zn:st", { m: 0, n: 0, d: "", s: 0 });
}
function znDone(min) {
  const s = znStats(),
    d = today;
  s.m = (s.m || 0) + min;
  s.n = (s.n || 0) + 1;
  if (s.d !== d) {
    const y = new Date(Date.now() - 864e5).toLocaleDateString("sv");
    s.s = s.d === y ? (s.s || 0) + 1 : 1;
    s.d = d;
  }
  st.set("zn:st", s);
  return s;
}
const ZIC = {
  medit:
    '<path d="M12 19c-4 0-7-2.5-8-6 2.5-.3 5 .6 6.6 2.4M12 19c4 0 7-2.5 8-6-2.5-.3-5 .6-6.6 2.4M12 19c-2-1.5-3-3.8-3-6.3 0-2.2 1.2-4.4 3-6.2 1.8 1.8 3 4 3 6.2 0 2.5-1 4.8-3 6.3z"/>',
  relax: '<path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14z"/><path d="M5 19l8-8"/>',
  sommeil:
    '<path d="M19 14.5A7.5 7.5 0 1 1 9.5 5a6 6 0 0 0 9.5 9.5z"/><path d="M17 4v3M15.5 5.5h3" stroke-width="1.4"/>',
  stress: '<path d="M3 9h11a3 3 0 1 0-3-3M3 15h15a3 3 0 1 1-3 3M3 12h7"/>',
  anxiete: '<path d="M3 10c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/><path d="M3 16c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/>',
  concentration:
    '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>',
  bienveillance: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  estime:
    '<path d="M11 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7z"/><path d="M18.5 15.5c.2 1.3.9 2 2.2 2.2-1.3.2-2 .9-2.2 2.2-.2-1.3-.9-2-2.2-2.2 1.3-.2 2-.9 2.2-2.2z" stroke-width="1.4"/>',
  douleur:
    '<path d="M7 12.5V7a1.5 1.5 0 0 1 3 0v4M10 10.5V5.5a1.5 1.5 0 0 1 3 0v5.5M13 10.5V7a1.5 1.5 0 0 1 3 0v5M16 10a1.5 1.5 0 0 1 3 0v4c0 3.9-3 7-7 7-2.5 0-4.4-1.2-5.8-3.3L4 14.4a1.5 1.5 0 0 1 2.4-1.8l.6.8"/>',
  envie:
    '<path d="M3 18c3 0 4-2 6-2s3 2 6 2 4-2 6-2"/><path d="M5 13.5c0-4.4 3.6-8 8-8 3.3 0 6 2.2 6 5 0 2.2-1.8 4-4 4-1.7 0-3-1.3-3-3 0-1.1.9-2 2-2"/>',
  sons: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
  resp: '<path d="M12 4v8M12 12c-1 1-2 1.3-3 1.3M12 12c1 1 2 1.3 3 1.3"/><path d="M9 7.5C6 7.5 4 11 4 15.5 4 17.7 5 19 6.8 19c1.7 0 2.7-1.2 2.7-3.2V9.5A2 2 0 0 0 9 7.5zM15 7.5c3 0 5 3.5 5 8 0 2.2-1 3.5-2.8 3.5-1.7 0-2.7-1.2-2.7-3.2V9.5a2 2 0 0 1 .5-2z"/>',
};
const ZGL = {
  relax: "❧",
  sommeil: "☾",
  stress: "≋",
  anxiete: "∿",
  concentration: "◎",
  bienveillance: "♡",
  estime: "✧",
  douleur: "◌",
  envie: "≈",
};
const zSv = (k) =>
  `<svg class="gsv" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ZIC[k] || ZIC.medit}</svg>`;
const zGo = (t) => `${t}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
function znHub() {
  znActs();
  znStopVis();
  cur = "medit";
  nv("games");
  theme("medit");
  const s = znStats(),
    on = Object.keys(ZN.snd).length;
  app.innerHTML = `<div class="top stk">${bk("home")}<div class="chip">🫧 ${FLX()}</div></div><details class="glass story pt-medit gdet" open><summary><i>${zSv("medit")}</i><h2>La zone calme</h2><span class="gdc" aria-hidden="true"></span></summary><p class="note" style="margin:0 0 8px"><b>🧪 Fonction expérimentale</b> : la méditation est en test, elle peut encore changer ou comporter des défauts.</p><p>Un espace pour souffler : des sons d’ambiance, des séances guidées et des exercices de respiration. Mets des écouteurs si tu peux, et installe-toi confortablement.</p>${s.n ? `<p class="note" style="margin:6px 0 0">${s.n} séance${s.n > 1 ? "s" : ""} · ${Math.round(s.m)} min au calme${s.s > 1 ? " · " + s.s + " jours de suite" : ""}</p>` : ""}</details>
 <h2 class="s">Séances guidées</h2><div class="opts znop">${ZSES.map((e) => `<section class="rc" data-g="${ZGL[e.id] || "○"}" style="--a:${e.c[0]};--b:${e.c[1]}"><div class="rc-ic">${zSv(e.id)}</div><div class="rc-t"><small>${e.sleep ? "Au lit" : "Séance guidée"}</small><b>${e.n}</b><span>${e.d}</span></div><button class="rc-go" data-a="znPre" data-v="${e.id}">${zGo("Ouvrir")}</button></section>`).join("")}</div>
 <h2 class="s">Pour souffler</h2><div class="opts znop"><section class="rc" data-g="♪" style="--a:#8ab4f0;--b:#2c4a8a"><div class="rc-ic">${zSv("sons")}</div><div class="rc-t"><small>Sons d’ambiance</small><b>Mixeur de sons</b><span>${on ? on + " son" + (on > 1 ? "s" : "") + " en cours" : "Mer, pluie, oiseaux, bruit blanc…"}</span></div><button class="rc-go" data-a="znSnd">${zGo("Ouvrir")}</button></section><section class="rc" data-g="○" style="--a:#9ae0d0;--b:#2a6a6a"><div class="rc-ic">${zSv("resp")}</div><div class="rc-t"><small>Exercice</small><b>Respiration</b><span>Règle inspiration, rétention, expiration</span></div><button class="rc-go" data-a="znBr">${zGo("Ouvrir")}</button></section></div>
 <section class="glass play znsafe"><h2>Bon à savoir</h2><p>La méditation et la respiration aident beaucoup de gens à se détendre, à mieux dormir et à apaiser le stress. Elles complètent, mais ne remplacent pas, l’aide d’un professionnel de santé.</p><p>Si un exercice te met mal à l’aise, te donne le vertige ou fait remonter des émotions difficiles, arrête-toi, respire normalement, et reviens-y plus tard ou essaie une autre séance.</p><p><b>Besoin de parler maintenant ?</b> Canada : 9-8-8, par appel ou texto, 24 h/24. France : 3114, 24 h/24. Danger immédiat : 911 (Canada) ou 112 (Europe).</p>
 <details><summary>Sources</summary><ul><li><a href="https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/">NHS : exercices de respiration contre le stress</a></li><li><a href="https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety">NCCIH (NIH) : méditation et pleine conscience, efficacité et sécurité</a></li><li><a href="https://med.stanford.edu/news/insights/2023/02/cyclic-sighing-can-help-breathe-away-anxiety.html">Stanford Medicine : le soupir cyclique</a></li><li><a href="https://pubmed.ncbi.nlm.nih.gov/28890890/">Respiration à fréquence de résonance (~6/min)</a></li><li><a href="https://www.health.wa.gov.au/Articles/N_R/Progressive-muscle-relaxation">Relaxation musculaire progressive</a></li><li><a href="https://ggia.berkeley.edu/practice/loving_kindness_meditation">Greater Good (Berkeley) : méditation de bienveillance</a></li><li><a href="https://www.sleepfoundation.org/insomnia/treatment/meditation">Sleep Foundation : méditation et sommeil</a></li></ul></details></section>`;
  window.scrollTo(0, 0);
}
function znSounds() {
  znActs();
  cur = "medit";
  nv("games");
  theme("medit");
  const m = znMix();
  app.innerHTML = `<div class="top stk"><button class="back" data-a="znHub">‹ Retour</button><span class="tl">Sons d’ambiance</span><div class="chip">🫧 ${FLX()}</div></div>
 <section class="glass play"><p class="note" style="margin:0 0 10px">Mélange les sons comme tu veux : chacun a son curseur. Ils continuent pendant les séances et la respiration.</p><div class="zns">${ZSND.map(([id, n, ic]) => `<div class="znsr${m[id] > 0 ? " on" : ""}" data-s="${id}"><button class="znst" data-a="znTg" data-v="${id}" aria-pressed="${m[id] > 0}"><i>${ic}</i><b>${n}</b></button><input type="range" min="0" max="100" value="${Math.round((m[id] || 0) * 100)}" aria-label="Volume ${n}" data-zs="${id}"></div>`).join("")}</div></section>
 <section class="glass play"><h2>Minuteur de sommeil</h2><p class="note" style="margin:0 0 8px">Les sons s’éteignent doucement à la fin.</p><div class="seg">${[
   [0, "Aucun"],
   [15, "15 min"],
   [30, "30 min"],
   [60, "1 h"],
 ]
   .map(
     ([v, t]) =>
       `<button class="${st.get("zn:tm", 0) === v ? "on" : ""}" data-a="znTm" data-v="${v}">${t}</button>`,
   )
   .join(
     "",
   )}</div><p class="note" id="zntm" style="margin:6px 0 0"></p><button class="btn alt" data-a="znOff">Tout arrêter</button></section>`;
  document.querySelectorAll("[data-zs]").forEach((r) =>
    r.addEventListener("input", () => {
      const id = r.dataset.zs,
        v = r.value / 100;
      znSet(id, v);
      const row = r.closest(".znsr");
      row.classList.toggle("on", v > 0);
      row.querySelector("button").setAttribute("aria-pressed", v > 0);
    }),
  );
  znTmShow();
  window.scrollTo(0, 0);
}
function znTmShow() {
  const e = $("#zntm");
  if (!e) return;
  e.textContent = ZN.te
    ? "Arrêt prévu à " + new Date(ZN.te).toLocaleTimeString("fr", { hour: "2-digit", minute: "2-digit" })
    : "";
}
function znTimer(min) {
  clearTimeout(ZN.tm);
  ZN.tm = null;
  ZN.te = 0;
  if (!min) return;
  ZN.te = Date.now() + min * 6e4;
  ZN.tm = setTimeout(
    () => {
      if (ZN.out && AC) {
        ZN.out.gain.setTargetAtTime(0, AC.currentTime, 8);
      }
      setTimeout(() => {
        znAllOff();
        znMusStop();
        ZN.out && (ZN.out.gain.value = 1);
      }, 45e3);
    },
    min * 6e4 - 3e4,
  );
}
function znStopVis() {
  cancelAnimationFrame(ZN.raf);
  ZN.raf = 0;
}
function znCanvas() {
  const cv = $("#zncv");
  if (!cv) return null;
  const r = cv.getBoundingClientRect(),
    d = devicePixelRatio || 1;
  if (cv.width !== Math.round(r.width * d)) {
    cv.width = Math.round(r.width * d);
    cv.height = Math.round(r.height * d);
  }
  const c = cv.getContext("2d");
  c.setTransform(d, 0, 0, d, 0, 0);
  return { c, w: r.width, h: r.height };
}
const ZBP = {
  pieds: [
    [0.43, 0.94],
    [0.57, 0.94],
  ],
  mollets: [
    [0.44, 0.8],
    [0.56, 0.8],
  ],
  cuisses: [
    [0.44, 0.64],
    [0.56, 0.64],
  ],
  bassin: [[0.5, 0.5]],
  ventre: [[0.5, 0.42]],
  epaules: [
    [0.38, 0.24],
    [0.62, 0.24],
  ],
  bras: [
    [0.32, 0.36],
    [0.68, 0.36],
  ],
  mains: [
    [0.29, 0.5],
    [0.71, 0.5],
  ],
  machoire: [[0.5, 0.15]],
  front: [[0.5, 0.07]],
  yeux: [[0.5, 0.105]],
};
function znBody(c, x0, y0, W, H, hl, col, ten) {
  c.save();
  c.translate(x0, y0);
  c.fillStyle = "rgba(255,255,255,.13)";
  c.strokeStyle = "rgba(255,255,255,.35)";
  c.lineWidth = 1.5;
  const P = (x, y) => [x * W, y * H];
  const sh = () => {
    c.beginPath();
    c.ellipse(...P(0.5, 0.1), W * 0.08, H * 0.065, 0, 0, 7);
    c.moveTo(...P(0.5, 0.17));
    c.roundRect(W * 0.4, H * 0.18, W * 0.2, H * 0.32, W * 0.06);
    c.roundRect(W * 0.31, H * 0.2, W * 0.07, H * 0.31, W * 0.035);
    c.roundRect(W * 0.62, H * 0.2, W * 0.07, H * 0.31, W * 0.035);
    c.roundRect(W * 0.405, H * 0.49, W * 0.085, H * 0.47, W * 0.04);
    c.roundRect(W * 0.51, H * 0.49, W * 0.085, H * 0.47, W * 0.04);
  };
  sh();
  c.fill();
  c.stroke();
  const pts = hl === "tout" ? Object.values(ZBP).flat() : ZBP[hl] || [];
  pts.forEach(([x, y]) => {
    const g = c.createRadialGradient(x * W, y * H, 0, x * W, y * H, W * 0.16);
    g.addColorStop(0, col);
    g.addColorStop(1, "rgba(0,0,0,0)");
    c.fillStyle = g;
    c.beginPath();
    c.arc(x * W, y * H, W * 0.16 * (ten ? 0.8 : 1), 0, 7);
    c.fill();
  });
  c.restore();
}
function znOrb(c, w, h, k, c1, c2, lab) {
  const R = Math.min(w, h) * 0.18 * (0.75 + 0.45 * k),
    x = w / 2,
    y = h / 2;
  for (let i = 3; i > 0; i--) {
    c.fillStyle = `rgba(255,255,255,${0.04 * i})`;
    c.beginPath();
    c.arc(x, y, R * (1 + i * 0.18), 0, 7);
    c.fill();
  }
  const g = c.createRadialGradient(x - R * 0.3, y - R * 0.3, R * 0.1, x, y, R);
  g.addColorStop(0, c1);
  g.addColorStop(1, c2);
  c.fillStyle = g;
  c.beginPath();
  c.arc(x, y, R, 0, 7);
  c.fill();
  if (lab) {
    c.fillStyle = "#fff";
    c.font = `700 ${Math.max(14, R * 0.28)}px "Nunito Sans",sans-serif`;
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillText(lab, x, y);
  }
}
function znBrPhase(br, t) {
  if (br === "sigh") {
    const L = [
        ["Inspire", 2, 0, 0.75],
        ["Encore un peu", 1, 0.75, 1],
        ["Expire longuement", 6, 1, 0],
      ],
      T = 9;
    let u = t % T;
    for (const [l, d, a, b] of L) {
      if (u < d) return { l, k: a + (b - a) * (u / d) };
      u -= d;
    }
    return { l: "", k: 0 };
  }
  const [i, hi, e, p] = br,
    T = i + hi + e + p;
  let u = t % T;
  if (u < i) return { l: "Inspire", k: u / i };
  u -= i;
  if (u < hi) return { l: "Retiens", k: 1 };
  u -= hi;
  if (u < e) return { l: "Expire", k: 1 - u / e };
  return { l: "Pause", k: 0 };
}
function znVis(t) {
  const V = znCanvas(),
    S = ZN.ses;
  if (!V || !S) return;
  const { c, w, h } = V,
    E = S.def,
    st0 = S.S[S.i] || {},
    el = (Date.now() - S.t0 - S.pz) / 1e3;
  c.clearRect(0, 0, w, h);
  const bg = c.createRadialGradient(w / 2, h * 0.45, 10, w / 2, h / 2, Math.max(w, h) * 0.8);
  bg.addColorStop(0, E.c[0] + "55");
  bg.addColorStop(1, E.c[1] + "00");
  c.fillStyle = bg;
  c.fillRect(0, 0, w, h);
  const id = E.id,
    tt = t / 1e3;
  let brl = "";
  if (id === "sommeil") {
    const dim = Math.min(1, el / (S.T * 0.8));
    c.fillStyle = `rgba(4,6,20,${0.35 + dim * 0.5})`;
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 40; i++) {
      const x = (((i * 97) % 100) / 100) * w,
        y = (((i * 53) % 70) / 100) * h,
        a = 0.3 + 0.7 * Math.abs(Math.sin(tt * 0.4 + i));
      c.fillStyle = `rgba(255,255,255,${a * (1 - dim * 0.6)})`;
      c.fillRect(x, y, 1.6, 1.6);
    }
    c.fillStyle = `rgba(255,244,200,${0.9 - dim * 0.5})`;
    c.beginPath();
    c.arc(w * 0.78, h * 0.18, 16, 0, 7);
    c.fill();
    c.fillStyle = `rgba(4,6,20,1)`;
    c.beginPath();
    c.arc(w * 0.78 + 7, h * 0.18 - 4, 14, 0, 7);
    c.fill();
    if (st0.bp) znBody(c, w * 0.3, h * 0.22, w * 0.4, h * 0.7, st0.bp, "rgba(160,180,255,.6)");
  }
  if (id === "stress" && st0.bp) {
    znBody(
      c,
      w * 0.28,
      h * 0.08,
      w * 0.44,
      h * 0.86,
      st0.bp,
      st0.ten ? "rgba(255,140,90,.75)" : "rgba(120,230,190,.55)",
      st0.ten,
    );
    if (st0.ten) {
      const r = (Date.now() - S.ts) / 1e3,
        k = Math.max(0, 1 - r / 5);
      c.strokeStyle = "rgba(255,190,120,.9)";
      c.lineWidth = 5;
      c.beginPath();
      c.arc(w / 2, h * 0.94, 16, -Math.PI / 2, -Math.PI / 2 + k * 6.283);
      c.stroke();
      c.fillStyle = "#fff";
      c.font = '700 13px "Nunito Sans",sans-serif';
      c.textAlign = "center";
      c.textBaseline = "middle";
      c.fillText(Math.ceil(5 * k) || "", w / 2, h * 0.13);
    }
  }
  if (id === "anxiete" && st0.sens) {
    const ic = ["👁️", "✋", "👂", "👃", "👅"],
      n = st0.sens,
      cx = w / 2,
      cy = h / 2;
    c.font = "36px sans-serif";
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillText(ic[5 - n], cx, cy - 40);
    const done = S.cnt || 0;
    for (let i = 0; i < n; i++) {
      const x = cx + (i - (n - 1) / 2) * 36;
      c.fillStyle = i < done ? E.c[0] : "rgba(255,255,255,.18)";
      c.beginPath();
      c.arc(x, cy + 30, 12, 0, 7);
      c.fill();
    }
    c.fillStyle = "rgba(255,255,255,.7)";
    c.font = '600 12px "Nunito Sans",sans-serif';
    c.fillText("Touche l’écran à chaque élément trouvé", cx, cy + 66);
  }
  if (id === "bienveillance") {
    const ring = st0.ring ?? -1,
      cx = w / 2,
      cy = h / 2;
    for (let i = 4; i >= 0; i--) {
      const r = 28 + i * Math.min(w, h) * 0.085,
        on = i <= ring;
      c.strokeStyle = on
        ? `rgba(255,${170 - i * 10},${200 - i * 10},${0.75 - i * 0.08})`
        : "rgba(255,255,255,.08)";
      c.lineWidth = on ? 6 : 2;
      c.beginPath();
      c.arc(cx, cy, r + (on ? Math.sin(tt * 1.4 - i) * 3 : 0), 0, 7);
      c.stroke();
    }
    const k = 1 + Math.sin(tt * 1.3) * 0.08;
    c.save();
    c.translate(cx, cy);
    c.scale(k, k);
    c.fillStyle = "#ff7aa8";
    c.beginPath();
    c.moveTo(0, 10);
    c.bezierCurveTo(-26, -8, -14, -30, 0, -16);
    c.bezierCurveTo(14, -30, 26, -8, 0, 10);
    c.fill();
    c.restore();
    const L = ["toi", "un proche", "une connaissance", "une personne difficile", "tous les êtres"];
    if (ring >= 0) {
      c.fillStyle = "#fff";
      c.font = '700 14px "Nunito Sans",sans-serif';
      c.textAlign = "center";
      c.fillText(L[ring], cx, h * 0.08);
    }
  }
  if (id === "estime") {
    const s = st0.st ?? -1,
      cx = w / 2,
      cy = h * 0.48,
      g = c.createRadialGradient(cx, cy, 5, cx, cy, 90 + Math.sin(tt) * 8);
    g.addColorStop(0, "rgba(255,220,150,.9)");
    g.addColorStop(1, "rgba(255,180,90,0)");
    c.fillStyle = g;
    c.beginPath();
    c.arc(cx, cy, 100, 0, 7);
    c.fill();
    c.font = "44px sans-serif";
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillText(s >= 2 ? "🤲" : "🫶", cx, cy);
    if (st0.stars) {
      const n = S.cnt || 0;
      for (let i = 0; i < 3; i++) {
        c.font = "34px sans-serif";
        c.globalAlpha = i < n ? 1 : 0.25;
        c.fillText("⭐", cx + (i - 1) * 60, h * 0.17);
      }
      c.globalAlpha = 1;
      c.fillStyle = "rgba(255,255,255,.75)";
      c.font = '600 12px "Nunito Sans",sans-serif';
      c.fillText("Touche l’écran pour chaque chose trouvée", cx, h * 0.07);
    }
  }
  if (id === "douleur") {
    znBody(c, w * 0.33, h * 0.1, w * 0.34, h * 0.66, "", null);
    const sp = st0.spot || 0;
    if (sp) {
      const a = [w * 0.5, h * 0.38],
        b = [w * 0.43, h * 0.88],
        soft = sp >= 2 ? 0.5 + 0.5 * Math.sin(tt * 0.8) : 0;
      [
        [a, `rgba(255,${120 + soft * 90},${110 + soft * 120},.75)`, sp !== 3],
        [b, "rgba(120,230,190,.7)", sp >= 3],
      ].forEach(([p, col, on]) => {
        if (!on) return;
        const g = c.createRadialGradient(p[0], p[1], 0, p[0], p[1], 38);
        g.addColorStop(0, col);
        g.addColorStop(1, "rgba(0,0,0,0)");
        c.fillStyle = g;
        c.beginPath();
        c.arc(p[0], p[1], 38, 0, 7);
        c.fill();
      });
    }
  }
  if (id === "envie") {
    const wv = st0.wave ?? 0,
      base = h * 0.75;
    c.fillStyle = "rgba(255,255,255,.08)";
    c.fillRect(0, base, w, h - base);
    c.strokeStyle = E.c[0];
    c.lineWidth = 3;
    c.beginPath();
    for (let x = 0; x <= w; x += 4) {
      const u = x / w,
        crest = Math.exp(-Math.pow((u - wv) * 4.2, 2)),
        y = base - crest * h * 0.42 - Math.sin(u * 14 + tt * 1.5) * 4;
      x ? c.lineTo(x, y) : c.moveTo(x, y);
    }
    c.stroke();
    const ux = wv * w,
      cy = base - h * 0.42 * 1 - 12;
    {
      const sx = Math.max(20, Math.min(w - 20, ux)),
        sy = cy + (wv > 0.85 ? (h * 0.4 * (wv - 0.85)) / 0.15 : 0) + 6;
      c.save();
      c.translate(sx, sy);
      c.rotate(-0.18);
      c.fillStyle = "#ffd27a";
      c.beginPath();
      c.ellipse(0, 6, 22, 4, 0, 0, 7);
      c.fill();
      c.strokeStyle = "#fff";
      c.lineWidth = 3;
      c.lineCap = "round";
      c.beginPath();
      c.moveTo(-6, 4);
      c.lineTo(-2, -10);
      c.lineTo(6, 4);
      c.moveTo(-2, -10);
      c.lineTo(-1, -20);
      c.moveTo(-1, -16);
      c.lineTo(-11, -12);
      c.moveTo(-1, -16);
      c.lineTo(10, -18);
      c.stroke();
      c.fillStyle = "#fff";
      c.beginPath();
      c.arc(0, -25, 4.5, 0, 7);
      c.fill();
      c.restore();
    }
    if (S.rt) {
      c.fillStyle = "#fff";
      c.font = '600 12px "Nunito Sans",sans-serif';
      c.fillText(`Avant : ${S.rt[0] ?? "–"} / 10   Après : ${S.rt[1] ?? "–"} / 10`, w / 2, h * 0.06);
    }
  }
  if (id === "concentration" && st0.cnt) {
    const n = (Math.floor(el / 6) % 10) + 1;
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / 5,
        x = w / 2 + Math.cos(a) * Math.min(w, h) * 0.32,
        y = h / 2 + Math.sin(a) * Math.min(w, h) * 0.32;
      c.fillStyle = i < n ? E.c[0] : "rgba(255,255,255,.15)";
      c.beginPath();
      c.arc(x, y, i === n - 1 ? 11 : 7, 0, 7);
      c.fill();
    }
    c.fillStyle = "#fff";
    c.font = '800 48px "Nunito Sans",sans-serif';
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillText(n, w / 2, h / 2);
  }
  const showOrb =
    st0.br ||
    id === "relax" ||
    (!st0.bp &&
      !st0.sens &&
      !st0.ring &&
      st0.ring !== 0 &&
      !st0.st &&
      st0.st !== 0 &&
      !st0.stars &&
      !st0.spot &&
      st0.wave === undefined &&
      !st0.cnt &&
      id !== "sommeil" &&
      id !== "bienveillance");
  if (st0.br) {
    const p = znBrPhase(st0.br, el);
    if (id === "sommeil" || id === "stress" || id === "douleur" || id === "envie") {
      c.fillStyle = "rgba(255,255,255,.85)";
      c.font = '700 15px "Nunito Sans",sans-serif';
      c.textAlign = "center";
      c.fillText(p.l, w / 2, 24);
      c.fillStyle = "rgba(255,255,255,.2)";
      c.fillRect(w * 0.3, 34, w * 0.4, 5);
      c.fillStyle = E.c[0];
      c.fillRect(w * 0.3, 34, w * 0.4 * p.k, 5);
    } else znOrb(c, w, h, p.k, E.c[0], E.c[1], p.l);
    if (S.lb !== p.l) {
      S.lb = p.l;
      vib(8);
    }
  } else if (showOrb) znOrb(c, w, h, 0.5 + 0.5 * Math.sin((tt * 2 * Math.PI) / 11), E.c[0], E.c[1], "");
}
function znPre(id) {
  znActs();
  const E = ZSES.find((e) => e.id === id);
  if (!E) return;
  cur = "medit";
  nv("games");
  theme("medit");
  const len = st.get("zn:len", 10),
    vo = st.get("zn:voice", !0),
    am = st.get("zn:am:" + id, E.amb);
  app.innerHTML = `<div class="top stk"><button class="back" data-a="znHub">‹ Retour</button><span class="tl">${E.n}</span><div class="chip">🫧 ${FLX()}</div></div>
 <details class="glass story pt-medit gdet" open style="--a:${E.c[0]};--b:${E.c[1]}"><summary><i>${zSv(id)}</i><h2>${E.n}</h2><span class="gdc" aria-hidden="true"></span></summary><p>${E.d}</p></details>
 <section class="glass play znpr"><div class="zr"><b>Durée</b><div class="seg">${[5, 10, 15, 20].map((v) => `<button class="${len === v ? "on" : ""}" data-a="znLen" data-v="${id}:${v}">${v} min</button>`).join("")}</div></div>
 <b class="zh">Son d’ambiance</b><div class="znam2">${[["", "Aucun", "🔇"], ...ZSND.filter((s) => !["blanc", "rose", "brun"].includes(s[0]))].map(([k, n, ic]) => `<button class="${am === k ? "on" : ""}" data-a="znAm" data-v="${id}:${k}" title="${n}"><i>${ic}</i><span>${n.replace("Orage lointain", "Orage").replace("Bol chantant", "Bol").replace("Nuit d’été", "Nuit").replace("Feu de bois", "Feu")}</span></button>`).join("")}</div>
 <button class="tg zt${vo ? " on" : ""}" data-a="znVo" data-v="${id}"><span>Voix guidée${window.speechSynthesis || znNat() ? "" : "<small>Télécharge la Voix Calmos pour l’entendre ici</small>"}</span><i></i></button>${
   vo
     ? `<div class="zndl2${znNat() ? " ok" : ""}"><span>🌙 <b>Voix Calmos</b><small>${znNat() ? "Téléchargée · marche hors ligne" : "Voix douce et posée, 3 Mo"}</small></span>${znNat() ? `<button data-a="znDx" data-v="${id}">Supprimer</button>` : `<button data-a="znDl" data-v="${id}">Télécharger</button>`}</div><p class="note zmini" id="zndlp">${znNat() ? "Voix SIWIS · Piper (CC-BY 4.0)" : ""}</p>${
         znNat() || window.speechSynthesis
           ? `<div class="zr"><b>Voix <small class="ztts">TTS</small></b><select id="znvs">${znNat() ? `<option value="@nat"${znNatOn() ? " selected" : ""}>🌙 Voix Calmos</option>` : ""}${
               window.speechSynthesis
                 ? znVoices()
                     .map(
                       (v) =>
                         `<option value="${esc(v.name)}"${st.get("zn:vname", "") === v.name ? " selected" : ""}>${esc(v.name.replace(/Microsoft |Google |\(.*?\)/g, "").trim() || v.name)} · ${v.lang}</option>`,
                     )
                     .join("")
                 : ""
             }</select><button class="zplay" data-a="znVoT" aria-label="Tester la voix"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z"/></svg></button></div><p class="note zmini" id="znvot"></p>`
           : ""
       }<div class="zr"><b>Vitesse</b><div class="seg">${[
         [0.72, "Lente"],
         [0.8, "Douce"],
         [0.9, "Normale"],
       ]
         .map(
           ([r, t]) =>
             `<button class="${st.get("zn:vrate", 0.8) === r ? "on" : ""}" data-a="znVr" data-v="${id}:${r}">${t}</button>`,
         )
         .join(
           "",
         )}</div></div>${/Android/i.test(navigator.userAgent) ? `<details class="zmore"><summary>Plus de voix sur ton téléphone</summary><ol><li>Ouvre <b>Paramètres › Gestion globale › Synthèse vocale</b> (ou <a href="intent:#Intent;action=com.android.settings.TTS_SETTINGS;end">ouvre-la directement</a>).</li><li>Choisis le moteur <b>Google</b> puis ⚙ › <b>Installer des données vocales</b> › <b>Français</b>.</li><li>Télécharge les voix proposées, puis reviens ici et choisis-la dans la liste.</li></ol></details>` : ""}`
     : ""
 }
 ${E.sleep ? '<p class="note zmini">Pour dormir : pose le téléphone à côté de toi. L’écran s’assombrit, la musique s’éteint doucement et les sons continuent 30 minutes.</p>' : ""}
 <button class="btn" data-a="znGo" data-v="${id}">Commencer</button></section>`;
  ZN.pre = id;
  {
    const vs = $("#znvs");
    vs &&
      vs.addEventListener("change", () => {
        st.set("zn:vname", vs.value);
        znSay("Voici ma voix.");
      });
  }
  window.scrollTo(0, 0);
}
function znStart(id) {
  const E = ZSES.find((e) => e.id === id),
    T = st.get("zn:len", 10) * 60,
    am = st.get("zn:am:" + id, E.amb);
  znAC();
  ZN.out && (ZN.out.gain.value = 1);
  const fixed = E.S.reduce((a, s) => a + (s.f || 0), 0),
    W = E.S.reduce((a, s) => a + s.w, 0),
    k = Math.max(1, (T - fixed) / W),
    S = E.S.map((s) => Object.assign({}, s, { dur: s.f || Math.max(6, s.w * k) }));
  ZN.ses = {
    def: E,
    S,
    T: S.reduce((a, s) => a + s.dur, 0),
    i: -1,
    t0: Date.now(),
    pz: 0,
    paused: 0,
    cnt: 0,
    rt: E.id === "envie" ? [null, null] : null,
  };
  if (am && !(znMix()[am] > 0)) {
    ZN.ses.am = am;
    znSet(am, 0.55);
  }
  znMusic(id, E.sleep ? 0.16 : 0.22);
  cur = "medit";
  nv("games");
  $("#nav").hidden = !0;
  app.innerHTML = `<div class="zns2${E.sleep ? " dark" : ""}" style="--c1:${E.c[0]};--c2:${E.c[1]}"><div class="top stk"><button class="back" data-a="znStop">‹ Arrêter</button><span class="tl">${E.n}</span><button class="hb" data-a="znPause" id="znpz">Pause</button></div>
 <div class="znvw"><canvas id="zncv" aria-hidden="true"></canvas><p class="zntx" id="zntx" aria-live="polite"></p></div>
 ${E.id === "envie" ? '<div class="znrt" id="znrt" hidden><input type="range" min="0" max="10" value="5" id="znri" aria-label="Intensité de l’envie"><b id="znrv">5</b><button class="btn alt" data-a="znRt">Valider</button></div>' : ""}
 <div class="znpb"><i id="znpf"></i></div><p class="znti" id="znti"></p></div>`;
  $("#zncv").addEventListener("pointerdown", () => {
    const s = ZN.ses;
    if (!s) return;
    const c = s.S[s.i] || {};
    if (c.sens && s.cnt < c.sens) {
      s.cnt++;
      vib(10);
      znTone(520 + s.cnt * 60, 520 + s.cnt * 60, 0.25, 0.04);
    } else if (c.stars && s.cnt < 3) {
      s.cnt++;
      vib(10);
      znTone(660 + s.cnt * 90, 660 + s.cnt * 90, 0.3, 0.04);
    }
  });
  const ri = $("#znri");
  ri &&
    ri.addEventListener("input", () => {
      $("#znrv").textContent = ri.value;
    });
  znNext();
  const loop = (t) => {
    if (!ZN.ses || !$("#zncv")) return;
    znVis(t);
    znTick();
    ZN.raf = requestAnimationFrame(loop);
  };
  ZN.raf = requestAnimationFrame(loop);
}
function znNext() {
  const s = ZN.ses;
  if (!s) return;
  s.i++;
  s.cnt = 0;
  if (s.i >= s.S.length) return znFinish();
  const c = s.S[s.i];
  s.ts = Date.now();
  s.se = Date.now() + c.dur * 1e3;
  const tx = $("#zntx");
  if (tx) {
    tx.classList.remove("in");
    void tx.offsetWidth;
    tx.textContent = c.t;
    tx.classList.add("in");
  }
  znSay(c.t);
  if (c.ten) znTone(300, 420, 0.4, 0.04);
  const rt = $("#znrt");
  if (rt) {
    rt.hidden = c.rate === undefined;
    if (c.rate !== undefined) {
      $("#znri").value = s.rt[0] ?? 5;
      $("#znrv").textContent = $("#znri").value;
    }
  }
  if (s.def.sleep && c.end) {
    znMusStop(40);
  }
}
function znTick() {
  const s = ZN.ses;
  if (!s || s.paused) return;
  const now = Date.now(),
    el = (now - s.t0 - s.pz) / 1e3;
  const pf = $("#znpf");
  pf && (pf.style.width = Math.min(100, (el / s.T) * 100) + "%");
  const ti = $("#znti");
  if (ti) {
    const r = Math.max(0, Math.ceil(s.T - el));
    ti.textContent = Math.floor(r / 60) + ":" + String(r % 60).padStart(2, "0");
  }
  if (now >= s.se) znNext();
}
function znFinish() {
  const s = ZN.ses;
  if (!s) return;
  znHush();
  const E = s.def,
    min = Math.round(s.T / 60);
  const S2 = znDone(min);
  let rw = 0;
  if (!s.rew) {
    rw = dmR("medit", 2);
    fl += rw;
    st.set("fl", fl);
    s.rew = 1;
  }
  if (E.sleep) {
    znTimer(30);
    znMusStop(30);
  } else {
    znMusStop(6);
    if (s.am)
      setTimeout(() => {
        ZN.ses || znSet(s.am, 0);
      }, 8000);
  }
  ZN.ses = null;
  znStopVis();
  const tx = $("#zntx");
  tx && (tx.textContent = "");
  const v = $(".znvw");
  v &&
    (v.innerHTML = `<div class="znend"><b>${E.sleep ? "Bonne nuit 🌙" : "Séance terminée"}</b><p>${E.id === "envie" && s.rt && s.rt[0] != null && s.rt[1] != null ? `Intensité de l’envie : ${s.rt[0]} → ${s.rt[1]} / 10. ` : ""}${min} min au calme · ${S2.n} séance${S2.n > 1 ? "s" : ""} en tout${rw ? " · +" + rw + " 🫧" : ""}</p><button class="btn" data-a="znHub">Revenir à la zone calme</button></div>`);
  $("#znpz") && ($("#znpz").hidden = !0);
}
function znBreath() {
  znActs();
  cur = "medit";
  nv("games");
  theme("medit");
  const c = st.get("zn:br", { i: 5, h: 0, e: 6, p: 0, m: 5, snd: 1, vib: 1 });
  const P = [
    [
      "Cohérence",
      [5, 0, 6, 0],
      "≈ 5,5 respirations/min, le rythme qui synchronise le plus le cœur et le souffle",
    ],
    ["Expiration longue", [5, 0, 7, 0], "Expirer plus longtemps qu’on inspire calme le corps (NHS)"],
    ["Respiration carrée", [4, 4, 4, 4], "Rythme égal, utile pour se recentrer"],
    ["4-7-8", [4, 7, 8, 0], "Souvent utilisée avant de dormir"],
    ["Soupir cyclique", null, "Double inspiration + longue expiration (étude de Stanford, 2023)"],
  ];
  app.innerHTML = `<div class="top stk"><button class="back" data-a="znHub">‹ Retour</button><span class="tl">Respiration</span><div class="chip">🫧 ${FLX()}</div></div>
 <section class="glass play"><h2>Préréglages</h2><div class="znpre">${P.map(([n, v, d], i) => `<button data-a="znBP" data-v="${i}"><b>${n}</b><small>${v ? v.join(" · ") : "2+1 · 0 · 6"} s</small><em>${d}</em></button>`).join("")}</div></section>
 <section class="glass play"><h2>Sur mesure</h2>${[
   ["i", "Inspiration", 1, 12],
   ["h", "Rétention", 0, 12],
   ["e", "Expiration", 1, 14],
   ["p", "Pause poumons vides", 0, 12],
 ]
   .map(
     ([k, n, a, b]) =>
       `<div class="znstp"><span>${n}</span><button data-a="znBS" data-v="${k}:-1" aria-label="Moins">−</button><b id="znb-${k}">${c[k]} s</b><button data-a="znBS" data-v="${k}:1" aria-label="Plus">+</button></div>`,
   )
   .join("")}
 <div class="znstp"><span>Durée</span><button data-a="znBS" data-v="m:-1" aria-label="Moins">−</button><b id="znb-m">${c.m} min</b><button data-a="znBS" data-v="m:1" aria-label="Plus">+</button></div>
 <p class="note" id="znbrate"></p>
 <button class="tg${c.snd ? " on" : ""}" data-a="znBT" data-v="snd"><span>Son doux à chaque phase</span><i></i></button><button class="tg${c.vib ? " on" : ""}" data-a="znBT" data-v="vib"><span>Vibration à chaque phase</span><i></i></button>
 <button class="btn" data-a="znBGo">Commencer</button><p class="note" style="margin-top:10px">Respire par le nez si tu peux, le ventre qui se gonfle. Si tu as le tournis, arrête et reprends ta respiration normale. Si tu as un problème cardiaque ou respiratoire, ou si tu es enceinte, préfère les exercices sans rétention.</p></section>`;
  znBRate();
  window.scrollTo(0, 0);
}
function znBRate() {
  const c = st.get("zn:br", { i: 5, h: 0, e: 6, p: 0, m: 5 }),
    T = c.i + c.h + c.e + c.p,
    e = $("#znbrate");
  e &&
    (e.textContent = `Un cycle dure ${T} s, soit ≈ ${(60 / T).toFixed(1).replace(".", ",")} respirations par minute.`);
}
function znBStart(pat) {
  const c = st.get("zn:br", { i: 5, h: 0, e: 6, p: 0, m: 5, snd: 1, vib: 1 }),
    br = pat || [c.i, c.h, c.e, c.p],
    T = c.m * 60;
  znAC();
  cur = "medit";
  nv("games");
  $("#nav").hidden = !0;
  ZN.br = { br, t0: Date.now(), T, lb: "" };
  znFlag();
  app.innerHTML = `<div class="zns2 znbrs"><div class="top stk"><button class="back" data-a="znBStop">‹ Arrêter</button><span class="tl">Respiration</span><span></span></div><div class="znbo"><div class="znbc" id="znbc"><span id="znbl">Prépare-toi</span><small id="znbn"></small></div></div><div class="znpb"><i id="znpf"></i></div><p class="znti" id="znti"></p><p class="note" style="text-align:center">Suis le cercle : il grandit quand tu inspires, rapetisse quand tu expires.</p></div>`;
  const bc = $("#znbc"),
    bl = $("#znbl"),
    bn = $("#znbn");
  let last = "";
  const loop = () => {
    const B2 = ZN.br;
    if (!B2 || !$("#znbc")) return;
    const el = (Date.now() - B2.t0) / 1e3 - 2;
    if (el < 0) {
      ZN.raf = requestAnimationFrame(loop);
      return;
    }
    const p = znBrPhase(br, el);
    bc.style.transform = `scale(${0.55 + 0.45 * p.k})`;
    if (p.l !== last) {
      last = p.l;
      bl.textContent = p.l;
      if (c.snd) {
        if (/Inspire|Encore/.test(p.l)) znTone(196, 262, 1.2, 0.04);
        else if (/Expire/.test(p.l)) znTone(262, 174, 1.6, 0.04);
      }
      c.vib && vib(p.l === "Inspire" ? 15 : 8);
    }
    const ph =
      br === "sigh"
        ? null
        : (() => {
            const T2 = br[0] + br[1] + br[2] + br[3];
            let u = el % T2;
            for (const d of br) {
              if (u < d) return Math.ceil(d - u);
              u -= d;
            }
            return 0;
          })();
    bn.textContent = ph ? ph + " s" : "";
    $("#znpf").style.width = Math.min(100, (el / T) * 100) + "%";
    const r = Math.max(0, Math.ceil(T - el));
    $("#znti").textContent = Math.floor(r / 60) + ":" + String(r % 60).padStart(2, "0");
    if (el >= T) {
      ZN.br = null;
      znFlag();
      const s = znDone(c.m);
      bl.textContent = "Terminé";
      bn.textContent = "";
      bc.style.transform = "scale(.8)";
      $("#znti").innerHTML =
        `${c.m} min de respiration · ${s.n} séances en tout<br><button class="btn" data-a="znHub" style="margin-top:12px">Revenir</button>`;
      return;
    }
    ZN.raf = requestAnimationFrame(loop);
  };
  ZN.raf = requestAnimationFrame(loop);
}
let ZNO = !1;
function znActs() {
  if (ZNO) return;
  ZNO = !0;
  Object.assign(act, {
    znHub: () => {
      znHush();
      if (ZN.ses) {
        ZN.ses = null;
        znMusStop();
      }
      ZN.br = null;
      znFlag();
      znStopVis();
      znHub();
    },
    znSnd: () => znSounds(),
    znBr: () => znBreath(),
    znPre: (e) => znPre(e),
    znTg: (e) => {
      const v = znMix()[e] > 0 ? 0 : 0.6;
      znSet(e, v);
      const r = document.querySelector(`.znsr[data-s="${e}"]`);
      if (r) {
        r.classList.toggle("on", v > 0);
        r.querySelector("input").value = v * 100;
        r.querySelector("button").setAttribute("aria-pressed", v > 0);
      }
    },
    znTm: (e) => {
      st.set("zn:tm", +e);
      znTimer(+e);
      document.querySelectorAll("[data-a=znTm]").forEach((b) => b.classList.toggle("on", b.dataset.v === e));
      znTmShow();
    },
    znOff: () => {
      znAllOff();
      st.set("zn:mix", {});
      znSounds();
    },
    znLen: (e) => {
      const [id, v] = e.split(":");
      st.set("zn:len", +v);
      znPre(id);
    },
    znAm: (e) => {
      const [id, k] = e.split(":");
      st.set("zn:am:" + id, k || "");
      znPre(id);
    },
    znVo: (e) => {
      st.set("zn:voice", !st.get("zn:voice", !0));
      znPre(e);
    },
    znGo: (e) => znStart(e),
    znDl: (e) => znDl(e),
    znDx: async (e) => {
      try {
        await caches.delete("zn-voix-1");
      } catch (x) {}
      st.set("zn:nat", 0);
      st.get("zn:vname", "") === "@nat" && st.set("zn:vname", "");
      znPre(e);
    },
    znVr: (e) => {
      const [id, r] = e.split(":");
      st.set("zn:vrate", +r);
      znPre(id);
    },
    znVoT: () => {
      const p = $("#znvot");
      if (znNatOn())
        return znNatSay(ZTEST, (ok) => {
          p && (p.textContent = ok ? "Voix Calmos." : "Aucun son : vérifie le volume média.");
        });
      try {
        speechSynthesis.cancel();
        const V = znVoices(),
          vv = znVoice(),
          u = new SpeechSynthesisUtterance(
            "Bonjour. Installe-toi confortablement, et respire tranquillement.",
          );
        u.lang = vv ? vv.lang : "fr-FR";
        u.rate = st.get("zn:vrate", 0.8);
        u.pitch = 0.96;
        vv && (u.voice = vv);
        let ok = 0;
        u.onstart = () => {
          ok = 1;
          p && (p.textContent = "La voix fonctionne.");
        };
        u.onerror = () => {
          p && (p.textContent = "Ton appareil a refusé de lire le texte.");
        };
        speechSynthesis.speak(u);
        setTimeout(() => {
          !ok &&
            p &&
            (p.textContent = V.length
              ? "Aucun son ? Vérifie le volume média de ton téléphone."
              : "Aucune voix française n’est installée : ajoute-la dans les réglages de synthèse vocale de ton téléphone.");
        }, 2500);
      } catch (e) {
        p && (p.textContent = "La voix n’est pas disponible ici.");
      }
    },
    znStop: () => {
      const s = ZN.ses;
      znHush();
      if (s) {
        if (s.am) znSet(s.am, 0);
        ZN.ses = null;
      }
      znMusStop();
      znStopVis();
      znHub();
    },
    znPause: () => {
      const s = ZN.ses;
      if (!s) return;
      const b = $("#znpz");
      if (s.paused) {
        s.pz += Date.now() - s.paused;
        s.se += Date.now() - s.paused;
        s.paused = 0;
        b && (b.textContent = "Pause");
        ZN.mus && ZN.mus.vol(s.def.sleep ? 0.16 : 0.22);
      } else {
        s.paused = Date.now();
        znHush();
        b && (b.textContent = "Reprendre");
        ZN.mus && ZN.mus.vol(0.04);
      }
    },
    znRt: () => {
      const s = ZN.ses;
      if (!s) return;
      const c = s.S[s.i];
      s.rt[c.rate] = +$("#znri").value;
      $("#znrt").hidden = !0;
    },
    znBP: (e) => {
      const i = +e,
        P = [[5, 0, 6, 0], [5, 0, 7, 0], [4, 4, 4, 4], [4, 7, 8, 0], null][i],
        c = st.get("zn:br", { i: 5, h: 0, e: 6, p: 0, m: 5, snd: 1, vib: 1 });
      if (!P) return znBStart("sigh");
      Object.assign(c, { i: P[0], h: P[1], e: P[2], p: P[3] });
      st.set("zn:br", c);
      znBStart();
    },
    znBS: (e) => {
      const [k, d] = e.split(":"),
        c = st.get("zn:br", { i: 5, h: 0, e: 6, p: 0, m: 5, snd: 1, vib: 1 }),
        L = { i: [1, 12], h: [0, 12], e: [1, 14], p: [0, 12], m: [1, 30] }[k];
      c[k] = Math.max(L[0], Math.min(L[1], c[k] + +d));
      st.set("zn:br", c);
      $("#znb-" + k).textContent = c[k] + (k === "m" ? " min" : " s");
      znBRate();
    },
    znBT: (e) => {
      const c = st.get("zn:br", { i: 5, h: 0, e: 6, p: 0, m: 5, snd: 1, vib: 1 });
      c[e] = c[e] ? 0 : 1;
      st.set("zn:br", c);
      znBreath();
    },
    znBGo: () => znBStart(),
    znBStop: () => {
      ZN.br = null;
      znFlag();
      znStopVis();
      znBreath();
    },
  });
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
const AHN = 20;
const AHH = 1.7;
const AHR = 0.042;
const AHM = 0.072;
const AHG = [0.32, 0.68];
const AHMAX = 3.4;
const AH = {
  mode: "",
  lv: 0,
  raf: 0,
  cv: null,
  x: null,
  W: 0,
  S: null,
  ptr: {},
  room: null,
  nr: null,
  code: "",
  fr: "",
  role: "",
  last: 0,
  hp: null,
  hpT: 0,
  ended: !1,
  cd: 0,
  unsub: null,
  pt: 0,
  msg: "",
};
const ahTo = () => ("lv" === AH.mode ? 5 : 7);
const ahLvAI = (e) => (
  (e = Math.min(e, 30)),
  {
    spd: 0.85 + 0.13 * e,
    rx: Math.max(0.05, 0.32 - 0.014 * e),
    err: Math.max(0.01, 0.13 - 0.0062 * e),
    agg: Math.min(0.95, 0.35 + 0.032 * e),
  }
);
function ahMark(e, t) {
  const a = st.get("soc:me", null);
  a &&
    ((a.ah = { g: e, w: t || "", t: Date.now() }),
    st.set("soc:me", a),
    "function" == typeof socLater && socLater());
}
function ahHub() {
  (ahActs(), ahStop(), (cur = "airhockey"), nv("games"), theme("airhockey"));
  const e = st.get("ah:d", []),
    t = (() => {
      let k = 0;
      for (; e.includes(k);) k++;
      return k;
    })(),
    N = Math.max(20, 5 * Math.ceil((t + 6) / 5)),
    a = st.get("soc:me", null),
    s =
      a && a.fr
        ? Object.keys(a.fr)
            .filter((e) => a.fr[e] > 0 && SO.P[e])
            .sort((e, t) => scrNm(e).localeCompare(scrNm(t), "fr"))
        : [],
    n = ahInv(),
    o =
      window.claude && window.claude.use
        ? SO.uid
          ? s.length
            ? `<p class="note" style="margin:0 0 6px">Invite un ami : la partie commence dès qu’il accepte.</p>${s.map((e) => `<div class="fr-i"><span class="fr-o">${socAv(e)}<span class="fr-t"><b>${esc(scrNm(e))}</b></span></span><div class="fr-b"><button class="sb buy" data-a="ahAsk" data-v="${esc(e)}">Inviter</button></div></div>`).join("")}`
            : '<p class="note" style="margin:0">Ajoute des amis dans l’onglet Amis pour les défier.</p>'
          : '<p class="note" style="margin:0">Active ton profil dans l’onglet Amis pour jouer en ligne.</p>'
        : '<p class="note" style="margin:0">Le jeu en ligne est offert dans l’app Claude.</p>',
    i = ALL.find((e) => "airhockey" === e.id) || { t: "Air hockey", s: "", ic: "🏒" },
    r = e.length,
    l = t,
    c = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    d = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  ((app.innerHTML = `<div class="top stk">${bk("home")}<div class="chip">🫧 ${FLX()}</div></div><section class="glass story pt-airhockey"><i>${gSv(i)}</i><h2>${i.t}</h2><p>Glisse ton maillet du bout du doigt et envoie la rondelle dans le but d’en face. Contre l’IA, le premier à 5 buts gagne. Dès certains niveaux, des obstacles apparaissent, et une cible dorée touchée donne la victoire directe (la rouge, celle de l’IA, la défaite) ; à deux ou en ligne, le premier à 7.</p></section>\n <div class="opts">${n.map((e) => `<section class="rc pt-airhockey" data-g="🏒"><div class="rc-ic">${socAv(e.id)}</div><div class="rc-t"><small>Invitation</small><b>${esc(e.nm)}</b><span>t’invite à une partie en ligne</span></div><button class="rc-go" data-a="ahJoin" data-v="${esc(e.g)}">Jouer${c}</button><button class="ahx" data-a="ahNo" data-v="${esc(e.g)}" aria-label="Refuser l’invitation de ${esc(e.nm)}">✕</button></section>`).join("")}\n <section class="rc rcx pt-airhockey" data-g="🏒"><div class="rc-ic">🏒</div><div class="rc-t"><small>${r ? "Continuer" : "Commencer"}</small><b>Niveau ${l + 1}</b><span>${r} gagné${r > 1 ? "s" : ""} · niveaux infinis · contre l’IA</span></div><button class="rc-go" data-a="ahLv" data-v="${l}">Jouer${c}</button><div class="dd pt-airhockey${lvOpen ? " open" : ""}" id="ahdd"><button class="dd-h" data-a="ahDd" aria-expanded="${lvOpen}" aria-controls="lvl"><span><b>Choisir un niveau</b><small>${r} gagné${r > 1 ? "s" : ""}</small></span>${d}</button><div class="dd-l" id="lvl"><div class="dd-i"><div class="lvg">${[
    ...Array(N).keys(),
  ]
    .map((a) => {
      const s = e.includes(a);
      return `<button class="lv ${s ? "d" : a === t ? "nx" : "far"}" data-a="ahLv" data-v="${a}" aria-label="Niveau ${a + 1}${s ? ", gagné" : ""}">${a + 1}</button>`;
    })
    .join(
      "",
    )}</div></div></div></div></section>\n <section class="rc" data-g="⇅"><div class="rc-ic">👥</div><div class="rc-t"><small>Sur cet écran</small><b>À deux</b><span>Posez le téléphone à plat entre vous</span></div><button class="rc-go" data-a="ahLoc">Jouer${c}</button></section>\n <div class="dd pt-airhockey${AH.onOpen ? " open" : ""}" id="ahdd2"><button class="dd-h" data-a="ahOnT" aria-expanded="${!!AH.onOpen}" aria-controls="ahonl"><span><b>En ligne avec un ami</b><small>${n.length ? n.length + " invitation" + (n.length > 1 ? "s" : "") : "Invite un ami à jouer"}</small></span>${d}</button><div class="dd-l" id="ahonl"><div class="dd-i soc-i">${o}</div></div></div>\n </div>`),
    window.scrollTo(0, 0));
}
function ahMod(e) {
  const t = 1.7,
    a = t / 2,
    s = [],
    n = [],
    o = (e, t, a, n, o) => s.push({ x: e, y: t, r: a || 0.06, ax: n || 0, sp: o || 1.2, ph: 1.7 * s.length }),
    i = (e, a) => {
      (n.push({ x: e, y: a, r: 0.05, w: "a" }), n.push({ x: 1 - e, y: t - a, r: 0.05, w: "b" }));
    };
  return (
    3 === e && o(0.5, a),
    4 === e && (o(0.3, a), o(0.7, a)),
    5 === e && i(0.14, 0.5),
    6 === e && o(0.5, a, 0.06, 0.25),
    7 === e && (o(0.5, 0.62), o(0.5, 1.08)),
    8 === e && i(0.5, 0.46),
    9 === e && (o(0.25, a), o(0.75, a), i(0.14, 0.5)),
    10 === e && (o(0.5, a - 0.2, 0.055, 0.2), o(0.5, 1.05, 0.055, 0.2, -1.2)),
    11 === e && (o(0.5, a, 0.085), i(0.14, 0.5)),
    12 === e && (o(0.3, 0.62), o(0.7, 0.62), o(0.3, 1.08), o(0.7, 1.08)),
    13 === e && (o(0.5, a, 0.06, 0.25), i(0.5, 0.46)),
    14 === e && (o(0.2, a, 0.05), o(0.5, a, 0.05), o(0.8, a, 0.05)),
    15 === e && (o(0.5, 0.63, 0.055, 0.22), o(0.5, 1.07, 0.055, 0.22, -1.3), i(0.14, 0.5)),
    16 === e && (o(0.28, 0.7), o(0.72, 0.7), o(0.28, 1), o(0.72, 1), i(0.5, 0.46)),
    17 === e && (o(0.3, a, 0.05, 0.18), o(0.5, a, 0.05, 0.18, -1.1), o(0.7, a, 0.05, 0.18)),
    18 === e &&
      (o(0.25, 0.65),
      o(0.75, 0.65),
      o(0.25, t - 0.65),
      o(0.75, t - 0.65),
      o(0.5, a, 0.06, 0.22),
      i(0.14, 0.5)),
    19 === e &&
      (o(0.2, 0.7, 0.05, 0.12),
      o(0.8, 0.7, 0.05, 0.12, -1),
      o(0.2, 1, 0.05, 0.12),
      o(0.8, 1, 0.05, 0.12, -1),
      o(0.5, a, 0.07, 0.28),
      i(0.5, 0.46),
      i(0.12, 0.8)),
    e >= 20 && ahGen(e, o, i),
    { o: s, t: n }
  );
}
function ahGen(e, o, i) {
  let h = (e * 2654435761) >>> 0;
  const R = () => {
      h = (h + 1831565813) >>> 0;
      let t = Math.imul(h ^ (h >>> 15), h | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    },
    n = Math.min(8, 4 + Math.floor((e - 20) / 4)),
    P = [];
  for (let k = 0, g = 0; k < n && g < 80; g++) {
    const r = 0.045 + 0.03 * R(),
      x = 0.14 + 0.72 * R(),
      y = 0.55 + 0.6 * R();
    if (
      Math.hypot(x - 0.5, y - 0.51) < 0.2 ||
      Math.hypot(x - 0.5, y - 1.19) < 0.2 ||
      P.some((p) => Math.hypot(p[0] - x, p[1] - y) < 0.2)
    )
      continue;
    (P.push([x, y]), k++);
    const m = R() < 0.55 ? Math.min(0.08 + 0.2 * R(), x - 0.1, 0.9 - x) : 0;
    o(x, y, r, m, (0.8 + 0.9 * R()) * (R() < 0.5 ? -1 : 1));
  }
  for (let k = 0, c = 1 + Math.min(2, Math.floor((e - 20) / 8)); k < c; k++)
    i(0.1 + 0.26 * R(), 0.3 + 0.35 * R());
}
window.ahInv = () => {
  try {
    if (!SO.uid) return [];
    const e = st.get("ah:no", []),
      t = Date.now();
    return Object.entries(SO.P)
      .filter(
        ([a, s]) =>
          a !== SO.uid &&
          s &&
          s.ah &&
          s.ah.w === SO.uid &&
          s.ah.g &&
          t - (+s.ah.t || 0) < 9e5 &&
          !e.includes(s.ah.g),
      )
      .map(([e, t]) => ({ id: e, g: t.ah.g, nm: scrNm(e) }));
  } catch (e) {
    return [];
  }
};
const ahOp = (e, t) => ({ x: e.x + (e.ax ? Math.sin(t * e.sp + e.ph) * e.ax : 0), y: e.y });
function ahNewState() {
  return {
    p: { x: 0.5, y: 0.85, vx: 0, vy: 0 },
    a: { x: 0.5, y: 1.5, vx: 0, vy: 0, tx: 0.5, ty: 1.5 },
    b: { x: 0.5, y: 0.2, vx: 0, vy: 0, tx: 0.5, ty: 0.2 },
    s: [0, 0],
    st: "play",
    pause: 0,
    ai: { t: 0, tx: 0.5, ty: 0.2, mode: "home" },
    fl: 0,
    fls: 0,
  };
}
function ahScreen(e) {
  (ahActs(), ahStop(), (cur = "airhockey"), nv("games"), theme("airhockey"));
  const t = "lv" === AH.mode ? "Niveau " + (AH.lv + 1) : "loc" === AH.mode ? "À deux" : "En ligne";
  app.innerHTML = `<div class="ahs"><div class="top stk"><button class="back" data-a="ahBk">‹ Air hockey</button><b class="sott">${t}</b><div class="chip">🫧 ${FLX()}</div></div><div class="ahw" id="ahw"><canvas id="ahc" aria-label="Table d’air hockey"></canvas><div class="ahov" id="ahov" hidden></div></div><p class="m" id="m" role="status" aria-live="polite">${e ? esc(e) : ""}</p></div>`;
  const a = (AH.cv = $("#ahc"));
  ((AH.x = a.getContext("2d")),
    ahSize(),
    (AH.ptr = {}),
    a.addEventListener("pointerdown", ahPD),
    a.addEventListener("pointermove", ahPM),
    ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => a.addEventListener(e, ahPU)),
    addEventListener("resize", ahSize),
    (AH.last = 0),
    (AH.raf = requestAnimationFrame(ahLoop)),
    window.scrollTo(0, 0));
}
function ahSize() {
  const e = AH.cv;
  if (!e || !e.isConnected) return;
  const t = Math.min(($("#ahw") || e).clientWidth || 360, 440),
    a = Math.max(300, innerHeight - 170);
  let s = t,
    n = 1.7 * s;
  n > a && ((n = a), (s = n / 1.7));
  const o = Math.min(2.5, devicePixelRatio || 1);
  ((e.style.width = s + "px"),
    (e.style.height = n + "px"),
    (e.width = Math.round(s * o)),
    (e.height = Math.round(n * o)),
    (AH.W = s),
    (AH.dpr = o));
}
const ahFlip = () => "net" === AH.mode && "g" === AH.role;
function ahPos(e) {
  const t = AH.cv.getBoundingClientRect();
  let a = (e.clientX - t.left) / t.width,
    s = ((e.clientY - t.top) / t.height) * 1.7;
  return (ahFlip() && ((a = 1 - a), (s = 1.7 - s)), { x: a, y: s });
}
function ahPD(e) {
  if (!AH.S) return;
  const t = ahPos(e);
  let a;
  if (
    ((a = "loc" === AH.mode ? (t.y > 0.85 ? "a" : "b") : "net" === AH.mode && "g" === AH.role ? "b" : "a"),
    !Object.values(AH.ptr).includes(a))
  ) {
    AH.ptr[e.pointerId] = a;
    try {
      AH.cv.setPointerCapture(e.pointerId);
    } catch (e) {}
    (ahAim(a, t), e.preventDefault());
  }
}
function ahPM(e) {
  const t = AH.ptr[e.pointerId];
  t && (ahAim(t, ahPos(e)), e.preventDefault());
}
function ahPU(e) {
  delete AH.ptr[e.pointerId];
}
function ahAim(e, t) {
  const a = AH.S[e],
    s = "a" === e ? 0.85 + AHM : AHM,
    n = "a" === e ? 1.628 : 0.778;
  if (
    ((a.tx = Math.max(AHM, Math.min(0.928, t.x))),
    (a.ty = Math.max(s, Math.min(n, t.y))),
    "net" === AH.mode && "g" === AH.role && AH.nr)
  ) {
    const e = performance.now();
    e - AH.pt > 30 &&
      ((AH.pt = e), AH.nr.presence({ r: "g", m: [+a.tx.toFixed(4), +a.ty.toFixed(4)] }).catch(() => {}));
  }
}
function ahMove(e, t, a) {
  const s = e.tx - e.x,
    n = e.ty - e.y,
    o = Math.hypot(s, n),
    i = Math.min(o, a * t),
    r = o ? e.x + (s / o) * i : e.x,
    l = o ? e.y + (n / o) * i : e.y;
  ((e.vx = (r - e.x) / t), (e.vy = (l - e.y) / t), (e.x = r), (e.y = l));
}
function ahHit(e, t) {
  const a = e.x - t.x,
    s = e.y - t.y,
    n = Math.hypot(a, s),
    o = AHR + AHM;
  if (n >= o || 0 === n) return !1;
  const i = a / n,
    r = s / n;
  ((e.x = t.x + i * o), (e.y = t.y + r * o));
  const l = (e.vx - t.vx) * i + (e.vy - t.vy) * r;
  l < 0 && ((e.vx -= 1.85 * l * i), (e.vy -= 1.85 * l * r));
  const c = Math.hypot(e.vx, e.vy);
  return (c > 3.4 && ((e.vx *= 3.4 / c), (e.vy *= 3.4 / c)), l < -0.3);
}
function ahStep(e, t) {
  const a = e.p,
    s = t / 4;
  let n = 0;
  e.t = (e.t || 0) + t;
  const o = e.mod;
  for (let t = 0; t < 4; t++) {
    if (
      ((a.x += a.vx * s),
      (a.y += a.vy * s),
      a.x < AHR
        ? ((a.x = AHR), (a.vx = 0.9 * Math.abs(a.vx)), (n = 1))
        : a.x > 0.958 && ((a.x = 0.958), (a.vx = 0.9 * -Math.abs(a.vx)), (n = 1)),
      a.x > AHG[0] && a.x < AHG[1])
    )
      for (const e of AHG)
        for (const t of [0, 1.7]) {
          const s = a.x - e,
            o = a.y - t,
            i = Math.hypot(s, o);
          if (i < AHR && i > 0) {
            const r = s / i,
              l = o / i,
              c = a.vx * r + a.vy * l;
            ((a.x = e + r * AHR),
              (a.y = t + l * AHR),
              c < 0 && ((a.vx -= 1.8 * c * r), (a.vy -= 1.8 * c * l)),
              (n = 1));
          }
        }
    else
      a.y < AHR
        ? ((a.y = AHR), (a.vy = 0.9 * Math.abs(a.vy)), (n = 1))
        : a.y > 1.658 && ((a.y = 1.658), (a.vy = 0.9 * -Math.abs(a.vy)), (n = 1));
    if (o) {
      for (const t of o.o) {
        const s = ahOp(t, e.t),
          o = a.x - s.x,
          i = a.y - s.y,
          r = Math.hypot(o, i),
          l = AHR + t.r;
        if (r < l && r > 0) {
          const e = o / r,
            t = i / r,
            c = a.vx * e + a.vy * t;
          ((a.x = s.x + e * l),
            (a.y = s.y + t * l),
            c < 0 && ((a.vx -= 2 * c * e), (a.vy -= 2 * c * t)),
            (n = 1));
        }
      }
      for (const e of o.t)
        if (Math.hypot(a.x - e.x, a.y - e.y) < e.r + 0.4 * AHR) return "a" === e.w ? "A" : "B";
    }
    if (((ahHit(a, e.a) || ahHit(a, e.b)) && (n = 2), a.y < -0.0504)) return "a";
    if (a.y > 1.7504) return "b";
  }
  {
    const q = Math.min(a.x - AHR, 0.958 - a.x),
      w = Math.min(a.y - AHR, 1.658 - a.y);
    if (q < 0.09 && w < 0.09 && Math.hypot(a.vx, a.vy) < 0.4 && (a.x < AHG[0] || a.x > AHG[1])) {
      if ((e.stk = (e.stk || 0) + t) > 0.4) {
        const d = Math.hypot(0.5 - a.x, 0.85 - a.y) || 1;
        ((a.vx = (1.7 * (0.5 - a.x)) / d + 0.4 * (Math.random() - 0.5)),
          (a.vy = (1.7 * (0.85 - a.y)) / d + 0.4 * (Math.random() - 0.5)),
          (e.stk = 0),
          sfx(300, 0.05));
      }
    } else e.stk = 0;
  }
  const i = Math.pow(0.992, 60 * t);
  return (
    (a.vx *= i),
    (a.vy *= i),
    2 === n ? sfx(520 + 80 * Math.random(), 0.04) : 1 === n && Math.hypot(a.vx, a.vy) > 0.6 && sfx(260, 0.03),
    ""
  );
}
function ahAI(e, t) {
  const a = ahLvAI(AH.lv),
    s = e.b,
    n = e.p,
    o = e.ai;
  if (((o.t -= t), o.t <= 0)) {
    o.t = a.rx * (0.7 + 0.6 * Math.random());
    const e = 2 * (Math.random() - 0.5) * a.err;
    if (n.y < 0.85 && (n.vy > -1.2 || n.y < s.y))
      if (n.y < s.y + 0.02)
        ((o.mode = "back"), (o.tx = n.x + (n.x < 0.5 ? 0.12 : -0.12)), (o.ty = Math.max(AHM, n.y - 0.16)));
      else {
        const t = 1.7,
          i = 0.5 + 3 * e - n.x,
          r = t - n.y,
          l = Math.hypot(i, r) || 1,
          c = i / l,
          d = r / l;
        Math.hypot(s.x - (n.x - c * (AHR + AHM)), s.y - (n.y - d * (AHR + AHM))) < 0.05 ||
        Math.random() < 0.25 * a.agg
          ? ((o.mode = "hit"), (o.tx = n.x + 0.18 * c), (o.ty = n.y + 0.18 * d))
          : ((o.mode = "set"), (o.tx = n.x - c * (AHR + AHM) * 1.05), (o.ty = n.y - d * (AHR + AHM) * 1.05));
      }
    else {
      o.mode = "home";
      let t = n.x;
      if (n.vy < -0.1) {
        const e = (n.y - 0.22) / -n.vy;
        t = n.x + n.vx * e;
        for (let e = 0; e < 4; e++) t < AHR ? (t = 0.084 - t) : t > 0.958 && (t = 1.916 - t);
      }
      ((o.tx = 0.5 + (t - 0.5) * (0.45 + 0.4 * a.agg) + e), (o.ty = 0.17 + 0.3 * e));
    }
  }
  ((s.tx = Math.max(AHM, Math.min(0.928, o.tx))), (s.ty = Math.max(AHM, Math.min(0.778, o.ty))));
}
function ahGoal(e, t) {
  (("A" !== t && "B" !== t) || ((e.s["A" === t ? 0 : 1] = ahTo() - 1), (t = t.toLowerCase())),
    e.s["a" === t ? 0 : 1]++,
    (e.fl = 1),
    (e.fls = "a" === t ? 1 : 0),
    sfx("a" === t ? 880 : 330, 0.22));
  try {
    vib(20);
  } catch (e) {}
  const a = e.p;
  ((a.vx = a.vy = 0),
    (a.x = 0.5),
    (a.y = "a" === t ? 0.51 : 1.19),
    (e.pause = 1),
    (e.s[0] >= ahTo() || e.s[1] >= ahTo()) &&
      ((e.st = "end"), (e.pause = 0), setTimeout(() => ahEnd(e.s[0] > e.s[1]), 700)));
}
function ahLoop(e) {
  const t = AH.cv;
  if (!t || !t.isConnected) return void ahStop();
  const a = Math.min(0.033, AH.last ? (e - AH.last) / 1e3 : 0.016);
  AH.last = e;
  const s = AH.S;
  if (s) {
    if ("net" === AH.mode && "g" === AH.role) ahGuest(a);
    else {
      if ("play" === s.st || "cd" === s.st)
        if (
          (ahMove(s.a, a, 7),
          "lv" === AH.mode && ahAI(s, a),
          "lv" === AH.mode ? ahMove(s.b, a, ahLvAI(AH.lv).spd) : ahMove(s.b, a, 7),
          "cd" === s.st)
        )
          ((s.cd -= a), s.cd <= 0 && (s.st = "play"));
        else if (s.pause > 0) s.pause -= a;
        else {
          const e = ahStep(s, a);
          e && ahGoal(s, e);
        }
      if ((s.fl > 0 && (s.fl = Math.max(0, s.fl - 1.6 * a)), "net" === AH.mode && AH.nr)) {
        const e = performance.now();
        if (e - AH.pt > 30) {
          AH.pt = e;
          const t = (e) => +e.toFixed(4);
          AH.nr
            .presence({
              r: "h",
              st: s.st,
              cd: +(s.cd || 0).toFixed(2),
              s: s.s,
              a: [t(s.a.x), t(s.a.y)],
              b: [t(s.b.x), t(s.b.y)],
              p: [t(s.p.x), t(s.p.y), t(s.p.vx), t(s.p.vy)],
              fl: +s.fl.toFixed(2),
              fs: s.fls,
            })
            .catch(() => {});
        }
        AH.hpT && e - AH.hpT > 6e3 && "end" !== s.st && ahLost();
      }
    }
    ahDraw();
  }
  AH.raf = requestAnimationFrame(ahLoop);
}
function ahGuest(e) {
  const t = AH.S,
    a = AH.hp;
  if (!a) return;
  const s = performance.now(),
    n = Math.min(0.12, (s - AH.hpT) / 1e3);
  ((t.s = a.s),
    (t.st = a.st),
    (t.cd = a.cd),
    (t.fl = a.fl),
    (t.fls = a.fs),
    (t.a.x = a.a[0]),
    (t.a.y = a.a[1]));
  const o = a.p[0] + a.p[2] * n,
    i = a.p[1] + a.p[3] * n;
  ((t.p.x += 0.6 * (o - t.p.x)),
    (t.p.y += 0.6 * (i - t.p.y)),
    Math.hypot(o - t.p.x, i - t.p.y) > 0.2 && ((t.p.x = o), (t.p.y = i)));
  const r = t.b;
  ((r.x += (r.tx - r.x) * Math.min(1, 20 * e)),
    (r.y += (r.ty - r.y) * Math.min(1, 20 * e)),
    s - AH.hpT > 6e3 && "end" !== t.st && ahLost(),
    "end" !== t.st || AH.ended || ((AH.ended = !0), setTimeout(() => ahEnd(t.s[1] > t.s[0]), 500)));
}
function ahDraw() {
  const e = AH.x,
    t = AH.S,
    a = AH.dpr,
    s = AH.W * a,
    n = 1.7 * s,
    o = ahFlip();
  (e.setTransform(1, 0, 0, 1, 0, 0),
    e.clearRect(0, 0, s, n),
    e.setTransform(o ? -s : s, 0, 0, o ? -s : s, o ? s : 0, o ? n : 0));
  const i = e.createLinearGradient(0, 0, 0, 1.7);
  (i.addColorStop(0, "#dff3ff"),
    i.addColorStop(0.5, "#f4fbff"),
    i.addColorStop(1, "#dff3ff"),
    (e.fillStyle = i),
    e.beginPath(),
    e.roundRect(0, 0, 1, 1.7, 0.06),
    e.fill(),
    (e.fillStyle = "rgba(80,140,190,.16)"));
  for (let t = 0.06; t < 1.7; t += 0.07)
    for (let a = 0.06 + (Math.round(t / 0.07) % 2) * 0.035; a < 1; a += 0.07)
      (e.beginPath(), e.arc(a, t, 0.0045, 0, 7), e.fill());
  if (
    ((e.lineWidth = 0.008),
    (e.strokeStyle = "rgba(214,54,63,.55)"),
    e.beginPath(),
    e.moveTo(0, 0.85),
    e.lineTo(1, 0.85),
    e.stroke(),
    (e.strokeStyle = "rgba(60,110,200,.45)"),
    e.beginPath(),
    e.arc(0.5, 0.85, 0.16, 0, 7),
    e.stroke(),
    e.beginPath(),
    e.arc(0.5, 0, 0.2, 0, Math.PI),
    e.stroke(),
    e.beginPath(),
    e.arc(0.5, 1.7, 0.2, Math.PI, 2 * Math.PI),
    e.stroke(),
    t &&
      t.fl > 0 &&
      ((e.fillStyle = `rgba(${t.fls ? "255,210,90" : "120,170,255"},${0.35 * t.fl})`),
      e.fillRect(0, t.fls ? 0 : 0.85, 1, 0.85)),
    (e.lineWidth = 0.03),
    (e.strokeStyle = "#2c3e66"),
    (e.lineCap = "round"),
    e.beginPath(),
    e.moveTo(0, 0),
    e.lineTo(AHG[0], 0),
    e.moveTo(AHG[1], 0),
    e.lineTo(1, 0),
    e.moveTo(0, 1.7),
    e.lineTo(AHG[0], 1.7),
    e.moveTo(AHG[1], 1.7),
    e.lineTo(1, 1.7),
    e.moveTo(0, 0),
    e.lineTo(0, 1.7),
    e.moveTo(1, 0),
    e.lineTo(1, 1.7),
    e.stroke(),
    (e.fillStyle = "#16213d"),
    e.fillRect(AHG[0], -0.02, AHG[1] - AHG[0], 0.03),
    e.fillRect(AHG[0], 1.69, AHG[1] - AHG[0], 0.03),
    !t)
  )
    return;
  const r = (t, a, s) => {
    ((e.fillStyle = "rgba(0,0,0,.15)"), e.beginPath(), e.arc(t.x + 0.008, t.y + 0.012, AHM, 0, 7), e.fill());
    const n = e.createRadialGradient(t.x - 0.02, t.y - 0.02, 0.01, t.x, t.y, AHM);
    (n.addColorStop(0, a),
      n.addColorStop(1, s),
      (e.fillStyle = n),
      e.beginPath(),
      e.arc(t.x, t.y, AHM, 0, 7),
      e.fill(),
      (e.fillStyle = s),
      e.beginPath(),
      e.arc(t.x, t.y, 0.0324, 0, 7),
      e.fill(),
      (e.fillStyle = "rgba(255,255,255,.35)"),
      e.beginPath(),
      e.arc(t.x - 0.01, t.y - 0.012, 0.01584, 0, 7),
      e.fill());
  };
  if (t.mod) {
    for (const a of t.mod.t) {
      const t = "a" === a.w;
      ((e.fillStyle = t ? "rgba(255,200,60,.35)" : "rgba(230,70,80,.3)"),
        e.beginPath(),
        e.arc(a.x, a.y, 1.5 * a.r, 0, 7),
        e.fill(),
        (e.fillStyle = t ? "#ffc83c" : "#e5464f"),
        e.beginPath(),
        e.arc(a.x, a.y, a.r, 0, 7),
        e.fill(),
        (e.strokeStyle = "#fff"),
        (e.lineWidth = 0.006),
        e.beginPath(),
        e.arc(a.x, a.y, 0.6 * a.r, 0, 7),
        e.stroke());
    }
    for (const a of t.mod.o) {
      const s = ahOp(a, t.t || 0);
      ((e.fillStyle = "rgba(0,0,0,.15)"),
        e.beginPath(),
        e.arc(s.x + 0.008, s.y + 0.012, a.r, 0, 7),
        e.fill());
      const n = e.createRadialGradient(s.x - 0.015, s.y - 0.015, 0.005, s.x, s.y, a.r);
      (n.addColorStop(0, "#8fa6d8"),
        n.addColorStop(1, "#34457a"),
        (e.fillStyle = n),
        e.beginPath(),
        e.arc(s.x, s.y, a.r, 0, 7),
        e.fill(),
        (e.strokeStyle = "#dff3ff"),
        (e.lineWidth = 0.007),
        e.beginPath(),
        e.arc(s.x, s.y, 0.55 * a.r, 0, 7),
        e.stroke());
    }
  }
  (r(t.b, "#7fb0ff", "#2f5fc4"), r(t.a, "#ff8a8f", "#c9323d"));
  const l = t.p;
  ((e.fillStyle = "rgba(0,0,0,.18)"),
    e.beginPath(),
    e.arc(l.x + 0.006, l.y + 0.009, AHR, 0, 7),
    e.fill(),
    (e.fillStyle = "#22283a"),
    e.beginPath(),
    e.arc(l.x, l.y, AHR, 0, 7),
    e.fill(),
    (e.strokeStyle = "#4b5470"),
    (e.lineWidth = 0.006),
    e.beginPath(),
    e.arc(l.x, l.y, 0.02604, 0, 7),
    e.stroke(),
    e.setTransform(1, 0, 0, 1, 0, 0),
    e.save(),
    (e.globalAlpha = 0.2),
    (e.fillStyle = "#16213d"),
    (e.font = `800 ${Math.round(0.17 * s)}px Fraunces,Georgia,serif`),
    (e.textAlign = "center"),
    (e.textBaseline = "middle"));
  {
    const a = o ? t.s[1] : t.s[0],
      i = o ? t.s[0] : t.s[1];
    (e.fillText(String(a), 0.86 * s, 0.6 * n),
      e.save(),
      e.translate(0.86 * s, 0.4 * n),
      "loc" === AH.mode && e.rotate(Math.PI),
      e.fillText(String(i), 0, 0),
      e.restore());
  }
  (e.restore(),
    "cd" === t.st &&
      t.cd > 0 &&
      (e.save(),
      (e.fillStyle = "rgba(22,33,61,.75)"),
      (e.font = `800 ${Math.round(0.22 * s)}px Fraunces,Georgia,serif`),
      (e.textAlign = "center"),
      (e.textBaseline = "middle"),
      e.fillText(String(Math.ceil(t.cd)), s / 2, n / 2),
      e.restore()));
}
function ahOv(e) {
  const t = $("#ahov");
  if (t) {
    if (!e) return ((t.hidden = !0), void (t.innerHTML = ""));
    ((t.innerHTML = `<div class="glass ahbox">${e}</div>`), (t.hidden = !1));
  }
}
function ahEnd(e) {
  const t = AH.S;
  if (!t || !$("#ahov")) return;
  t.st = "end";
  let a = 0,
    s = "";
  if ("lv" === AH.mode) {
    if (e) {
      const e = st.get("ah:d", []),
        t = !e.includes(AH.lv);
      (t && (e.push(AH.lv), st.set("ah:d", e)), (a = t ? Math.min(10, 2 + Math.floor(AH.lv / 5)) : 1));
    }
  } else "net" === AH.mode && e && (a = 2);
  if (((a = dmR("airhockey", a)), a)) {
    ((fl += a), st.set("fl", fl));
    const e = $(".chip");
    e && (e.textContent = "🫧 " + FLX());
  }
  ((s =
    "loc" === AH.mode
      ? `<h2>${t.s[0] > t.s[1] ? "Rouge" : "Bleu"} gagne !</h2><p class="note">${t.s[0]} à ${t.s[1]}</p><div class="chrow"><button class="btn" data-a="ahLoc">Rejouer</button><button class="btn alt" data-a="ahBk">Terminer</button></div>`
      : `<h2>${e ? "Victoire !" : "Défaite"}</h2><p class="note">${"g" === AH.role ? t.s[1] : t.s[0]} à ${"g" === AH.role ? t.s[0] : t.s[1]}${a ? ` · +${a} 🫧` : ""}</p><div class="chrow">${"lv" === AH.mode ? (e ? `<button class="btn" data-a="ahLv" data-v="${AH.lv + 1}">Niveau suivant</button>` : `<button class="btn" data-a="ahLv" data-v="${AH.lv}">Rejouer</button>`) : ""}<button class="btn alt" data-a="ahBk">Terminer</button></div>`),
    sfx(e ? 990 : 220, 0.3),
    ahOv(s),
    "net" === AH.mode &&
      ("h" === AH.role
        ? setTimeout(() => {
            AH.S === t && ahNetEnd();
          }, 3500)
        : ahNetEnd()));
}
function ahLost() {
  AH.ended ||
    ((AH.ended = !0),
    AH.S && (AH.S.st = "end"),
    ahOv(
      '<h2>Connexion perdue</h2><p class="note">Ton ami n’est plus là.</p><div class="chrow"><button class="btn alt" data-a="ahBk">Terminer</button></div>',
    ),
    ahNetEnd());
}
function ahStop() {
  (cancelAnimationFrame(AH.raf),
    (AH.raf = 0),
    removeEventListener("resize", ahSize),
    ("net" === AH.mode || AH.nr) && ahNetEnd());
}
function ahNetEnd() {
  const e = AH.nr;
  if (((AH.nr = null), AH.unsub)) {
    try {
      AH.unsub();
    } catch (e) {}
    AH.unsub = null;
  }
  if ((e && e.leave().catch(() => {}), "h" === AH.role && AH.code)) {
    const e = st.get("soc:me", null);
    e && e.ah && e.ah.g === AH.code && ahMark("", "");
  }
}
async function ahRoom(e) {
  try {
    const t = await window.claude.use("room");
    return t ? await t.join("ah-" + e) : null;
  } catch (e) {
    return null;
  }
}
async function ahHost(e, c) {
  const t = c || Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4);
  ((AH.mode = "net"),
    (AH.role = "h"),
    (AH.code = t),
    (AH.fr = e),
    (AH.ended = !1),
    (AH.S = ahNewState()),
    (AH.S.st = "wait"),
    (AH.hp = null),
    (AH.hpT = 0),
    ahScreen(""),
    ahOv(
      `<h2>Invitation envoyée</h2><p class="note">En attente de ${esc(scrNm(e))}…</p><div class="chrow"><button class="btn alt" data-a="ahBk">Annuler</button></div>`,
    ),
    ahMark(t, e),
    socInv(e, "airhockey"));
  const a = await ahRoom(t);
  a && AH.code === t
    ? ((AH.nr = a),
      a.presence({ r: "h", st: "wait" }).catch(() => {}),
      (AH.unsub = a.onPeers((t) => {
        const a = t.peers.find((t) => !t.isMe && t.presence && "g" === t.presence.r && (!t.by || t.by === e));
        if (a) {
          AH.hpT = performance.now();
          const t = a.presence.m;
          (Array.isArray(t) &&
            2 === t.length &&
            isFinite(t[0]) &&
            isFinite(t[1]) &&
            ((AH.S.b.tx = Math.max(AHM, Math.min(0.928, +t[0]))),
            (AH.S.b.ty = Math.max(AHM, Math.min(0.778, +t[1])))),
            "wait" === AH.S.st && ((AH.S.st = "cd"), (AH.S.cd = 3), ahOv(""), ahMark("", e)));
        } else
          "wait" !== AH.S.st &&
            "end" !== AH.S.st &&
            t.left.some((e) => e.presence && "g" === e.presence.r) &&
            ahLost();
      })))
    : AH.code === t &&
      ahOv(
        '<h2>Jeu en ligne indisponible</h2><p class="note">La salle n’a pas pu être ouverte. Réessaie plus tard.</p><div class="chrow"><button class="btn alt" data-a="ahBk">Retour</button></div>',
      );
}
async function ahGuestJoin(e) {
  ((AH.mode = "net"),
    (AH.role = "g"),
    (AH.code = e),
    (AH.ended = !1),
    (AH.S = ahNewState()),
    (AH.S.st = "wait"),
    (AH.hp = null),
    (AH.hpT = 0));
  const t = ahInv().find((t) => t.g === e);
  ((AH.fr = t ? t.id : ""),
    ahScreen(""),
    ahOv(
      '<h2>Connexion…</h2><p class="note">On rejoint la table de ton ami.</p><div class="chrow"><button class="btn alt" data-a="ahBk">Annuler</button></div>',
    ));
  const a = await ahRoom(e);
  if (!a || AH.code !== e)
    return void (
      AH.code === e &&
      ahOv(
        '<h2>Jeu en ligne indisponible</h2><p class="note">La salle n’a pas pu être rejointe.</p><div class="chrow"><button class="btn alt" data-a="ahBk">Retour</button></div>',
      )
    );
  AH.nr = a;
  const s = AH.S.b;
  (a.presence({ r: "g", m: [s.tx, s.ty] }).catch(() => {}),
    (AH.unsub = a.onPeers((e) => {
      const t = e.peers.find(
        (e) => !e.isMe && e.presence && "h" === e.presence.r && (!e.by || !AH.fr || e.by === AH.fr),
      );
      if (t) {
        const e = t.presence;
        Array.isArray(e.p) &&
          4 === e.p.length &&
          Array.isArray(e.a) &&
          Array.isArray(e.s) &&
          (AH.hp || ahOv(""),
          (AH.hp = {
            s: [+e.s[0] || 0, +e.s[1] || 0],
            st: String(e.st || "play"),
            cd: +e.cd || 0,
            a: [+e.a[0], +e.a[1]],
            p: e.p.map(Number),
            fl: +e.fl || 0,
            fs: +e.fs || 0,
          }),
          (AH.hpT = performance.now()));
      } else AH.hp && e.left.length && !AH.ended && ahLost();
    })));
  const n = Date.now(),
    o = setInterval(() => {
      AH.code !== e || AH.hp
        ? clearInterval(o)
        : Date.now() - n > 2e4 &&
          (clearInterval(o),
          ahOv(
            '<h2>Ton ami n’est plus là</h2><p class="note">L’invitation a expiré.</p><div class="chrow"><button class="btn alt" data-a="ahBk">Retour</button></div>',
          ),
          ahNetEnd());
    }, 1e3);
}
let ahAO = !1;
function ahActs() {
  ahAO ||
    ((ahAO = !0),
    Object.assign(act, {
      ahBk: () => {
        (ahStop(), (AH.mode = ""), (AH.code = ""), (AH.S = null), ahHub());
      },
      ahLv: (e) => {
        ((AH.mode = "lv"),
          (AH.lv = +e),
          (AH.role = ""),
          (AH.S = ahNewState()),
          (AH.S.mod = ahMod(AH.lv)),
          (AH.S.st = "cd"),
          (AH.S.cd = 3),
          ahScreen(""));
      },
      ahLoc: () => {
        ((AH.mode = "loc"),
          (AH.role = ""),
          (AH.S = ahNewState()),
          (AH.S.st = "cd"),
          (AH.S.cd = 3),
          ahScreen("Rouge en bas, bleu en haut."));
      },
      ahAsk: (e, c) => {
        SO.P[e] && ahHost(e, c);
      },
      ahJoin: (e) => {
        /^[a-z0-9]{4,20}$/.test(e) && ahGuestJoin(e);
      },
      ahDd: () => {
        const e = $("#ahdd");
        ((lvOpen = e.classList.toggle("open")),
          e.querySelector(".dd-h").setAttribute("aria-expanded", lvOpen));
      },
      ahOnT: () => {
        const e = $("#ahdd2");
        ((AH.onOpen = e.classList.toggle("open")),
          e.querySelector(".dd-h").setAttribute("aria-expanded", AH.onOpen));
      },
      ahNo: (e) => {
        const t = st.get("ah:no", []);
        (t.push(e), st.set("ah:no", t.slice(-30)), ahHub());
      },
    }));
}
const CBP = [
  {
    n: "Cœur",
    p: ["#d8ecff", "#e8485a", "#b8303f", "#ff9aa8", "#ffffff", "#b9dcff"],
    s: [
      ["r", 6, 0, 0.78, 1, 0.22],
      ["c", 2, 0.33, 0.38, 0.2],
      ["c", 2, 0.67, 0.38, 0.2],
      ["p", 2, [0.13, 0.44, 0.87, 0.44, 0.5, 0.86]],
      ["p", 3, [0.5, 0.86, 0.87, 0.44, 0.84, 0.56, 0.62, 0.8]],
      ["c", 4, 0.29, 0.32, 0.07],
      ["c", 5, 0.86, 0.12, 0.04],
      ["c", 5, 0.12, 0.18, 0.035],
    ],
  },
  {
    n: "Étoile",
    p: ["#24245a", "#ffd54a", "#f0a020", "#ffffff", "#3a3a80", "#fff2a8"],
    s: [
      ["r", 5, 0, 0.8, 1, 0.2],
      [
        "p",
        2,
        [
          0.5, 0.08, 0.61, 0.38, 0.93, 0.38, 0.67, 0.57, 0.77, 0.88, 0.5, 0.69, 0.23, 0.88, 0.33, 0.57, 0.07,
          0.38, 0.39, 0.38,
        ],
      ],
      ["p", 3, [0.5, 0.69, 0.77, 0.88, 0.67, 0.57, 0.93, 0.38, 0.61, 0.38, 0.5, 0.5]],
      ["c", 6, 0.5, 0.48, 0.07],
      ["c", 4, 0.1, 0.12, 0.035],
      ["c", 4, 0.88, 0.16, 0.035],
      ["c", 4, 0.85, 0.7, 0.03],
    ],
  },
  {
    n: "Lune",
    p: ["#1f2a5c", "#f6e7a8", "#d8c27a", "#ffffff", "#8ea0d8", "#b8c6f0"],
    s: [
      ["c", 2, 0.45, 0.42, 0.3],
      ["c", 1, 0.6, 0.34, 0.25],
      ["c", 3, 0.3, 0.5, 0.05],
      ["c", 3, 0.38, 0.62, 0.035],
      ["e", 5, 0.62, 0.8, 0.3, 0.1],
      ["e", 6, 0.42, 0.82, 0.2, 0.08],
      ["c", 4, 0.85, 0.15, 0.035],
      ["c", 4, 0.75, 0.45, 0.03],
      ["c", 4, 0.12, 0.12, 0.03],
    ],
  },
  {
    n: "Champignon",
    p: ["#cdeccf", "#e0453f", "#ffffff", "#f3e3c3", "#5aa860", "#d8c49e"],
    s: [
      ["r", 5, 0, 0.82, 1, 0.18],
      ["r", 4, 0.38, 0.48, 0.24, 0.38],
      ["r", 6, 0.54, 0.48, 0.08, 0.38],
      ["e", 2, 0.5, 0.46, 0.38, 0.26],
      ["c", 3, 0.36, 0.36, 0.07],
      ["c", 3, 0.62, 0.3, 0.06],
      ["c", 3, 0.66, 0.46, 0.05],
      ["c", 3, 0.42, 0.22, 0.045],
    ],
  },
  {
    n: "Sapin",
    p: ["#cfe6ff", "#2f8f4e", "#1f6b3a", "#8a5a3a", "#ffd54a", "#ffffff"],
    s: [
      ["r", 6, 0, 0.84, 1, 0.16],
      ["r", 4, 0.44, 0.72, 0.12, 0.14],
      ["p", 2, [0.5, 0.14, 0.82, 0.48, 0.18, 0.48]],
      ["p", 2, [0.5, 0.3, 0.88, 0.74, 0.12, 0.74]],
      ["p", 3, [0.5, 0.3, 0.88, 0.74, 0.62, 0.74]],
      ["p", 3, [0.5, 0.14, 0.82, 0.48, 0.62, 0.48]],
      [
        "p",
        5,
        [
          0.5, 0.04, 0.54, 0.12, 0.62, 0.12, 0.56, 0.17, 0.58, 0.25, 0.5, 0.2, 0.42, 0.25, 0.44, 0.17, 0.38,
          0.12, 0.46, 0.12,
        ],
      ],
      ["c", 6, 0.12, 0.2, 0.03],
      ["c", 6, 0.86, 0.3, 0.03],
    ],
  },
  {
    n: "Bonhomme de neige",
    p: ["#9fc8f0", "#ffffff", "#d6e6f5", "#2b2a3d", "#f08a30", "#e0453f"],
    s: [
      ["r", 2, 0, 0.86, 1, 0.14],
      ["c", 2, 0.5, 0.7, 0.22],
      ["c", 3, 0.58, 0.74, 0.14],
      ["c", 2, 0.5, 0.38, 0.15],
      ["r", 4, 0.36, 0.1, 0.28, 0.06],
      ["r", 4, 0.41, 0, 0.18, 0.12],
      ["p", 5, [0.5, 0.38, 0.66, 0.41, 0.5, 0.42]],
      ["c", 4, 0.45, 0.34, 0.022],
      ["c", 4, 0.56, 0.34, 0.022],
      ["r", 6, 0.34, 0.5, 0.32, 0.06],
      ["r", 6, 0.56, 0.5, 0.07, 0.16],
      ["c", 4, 0.5, 0.65, 0.025],
      ["c", 4, 0.5, 0.75, 0.025],
    ],
  },
  {
    n: "Maison",
    p: ["#bfe3ff", "#f2c38a", "#c0504a", "#7a4a2a", "#ffe680", "#6cbf5a"],
    s: [
      ["r", 6, 0, 0.82, 1, 0.18],
      ["r", 2, 0.2, 0.46, 0.6, 0.38],
      ["p", 3, [0.12, 0.48, 0.5, 0.16, 0.88, 0.48]],
      ["r", 4, 0.44, 0.62, 0.14, 0.22],
      ["r", 5, 0.26, 0.54, 0.13, 0.12],
      ["r", 5, 0.63, 0.54, 0.13, 0.12],
      ["r", 4, 0.66, 0.2, 0.08, 0.14],
      ["c", 2, 0.86, 0.14, 0.07],
    ],
  },
  {
    n: "Poisson",
    p: ["#7cc7f0", "#ff9f40", "#e06a20", "#2b2a3d", "#d8f2ff", "#3fa060"],
    s: [
      ["p", 6, [0.06, 1, 0.12, 0.6, 0.16, 1]],
      ["p", 6, [0.84, 1, 0.9, 0.66, 0.95, 1]],
      ["e", 2, 0.46, 0.48, 0.28, 0.18],
      ["p", 3, [0.7, 0.48, 0.94, 0.28, 0.94, 0.68]],
      ["p", 3, [0.4, 0.31, 0.56, 0.2, 0.6, 0.34]],
      ["c", 5, 0.3, 0.45, 0.05],
      ["c", 4, 0.3, 0.45, 0.025],
      ["c", 5, 0.78, 0.14, 0.04],
      ["c", 5, 0.86, 0.06, 0.025],
      ["p", 3, [0.42, 0.62, 0.52, 0.72, 0.56, 0.6]],
    ],
  },
  {
    n: "Fleur",
    p: ["#fff3d6", "#ff8fb8", "#ffcc33", "#4caf50", "#7cd47a", "#c0704a"],
    s: [
      ["p", 6, [0.3, 0.76, 0.7, 0.76, 0.64, 1, 0.36, 1]],
      ["r", 4, 0.47, 0.42, 0.06, 0.36],
      ["e", 5, 0.36, 0.6, 0.12, 0.05],
      ["e", 5, 0.64, 0.54, 0.12, 0.05],
      ["c", 2, 0.5, 0.18, 0.12],
      ["c", 2, 0.66, 0.3, 0.12],
      ["c", 2, 0.34, 0.3, 0.12],
      ["c", 2, 0.42, 0.46, 0.11],
      ["c", 2, 0.58, 0.46, 0.11],
      ["c", 3, 0.5, 0.32, 0.1],
    ],
  },
  {
    n: "Soleil",
    p: ["#9fd8ff", "#ffd23a", "#ffae2a", "#ffffff", "#7ccf6a", "#5bb050"],
    s: [
      ["e", 5, 0.25, 1, 0.5, 0.25],
      ["e", 6, 0.8, 1, 0.45, 0.2],
      ["p", 3, [0.5, 0.02, 0.56, 0.16, 0.44, 0.16]],
      ["p", 3, [0.5, 0.66, 0.56, 0.52, 0.44, 0.52]],
      ["p", 3, [0.16, 0.34, 0.3, 0.28, 0.3, 0.4]],
      ["p", 3, [0.84, 0.34, 0.7, 0.28, 0.7, 0.4]],
      ["p", 3, [0.26, 0.1, 0.36, 0.2, 0.28, 0.24]],
      ["p", 3, [0.74, 0.1, 0.64, 0.2, 0.72, 0.24]],
      ["p", 3, [0.26, 0.58, 0.36, 0.48, 0.28, 0.44]],
      ["p", 3, [0.74, 0.58, 0.64, 0.48, 0.72, 0.44]],
      ["c", 2, 0.5, 0.34, 0.16],
      ["e", 4, 0.78, 0.62, 0.14, 0.06],
      ["e", 4, 0.2, 0.68, 0.12, 0.05],
    ],
  },
  {
    n: "Chocolat chaud",
    p: ["#f5e1c8", "#e05a5a", "#7a4a2a", "#ffffff", "#d8d8e8", "#ffd6e0"],
    s: [
      ["e", 5, 0.48, 0.86, 0.38, 0.07],
      ["p", 2, [0.2, 0.42, 0.76, 0.42, 0.7, 0.84, 0.26, 0.84]],
      ["e", 3, 0.48, 0.44, 0.28, 0.06],
      ["c", 6, 0.42, 0.42, 0.05],
      ["c", 6, 0.54, 0.43, 0.045],
      ["p", 2, [0.76, 0.5, 0.9, 0.5, 0.9, 0.72, 0.74, 0.74, 0.75, 0.66, 0.84, 0.64, 0.84, 0.56, 0.76, 0.56]],
      ["p", 4, [0.36, 0.34, 0.4, 0.12, 0.44, 0.34]],
      ["p", 4, [0.5, 0.34, 0.54, 0.06, 0.58, 0.34]],
      ["r", 4, 0.3, 0.62, 0.36, 0.04],
    ],
  },
  {
    n: "Mitaine",
    p: ["#d8ecff", "#3f7fd0", "#ffffff", "#ffd54a", "#2f60a8", "#a8d0ff"],
    s: [
      ["c", 6, 0.15, 0.15, 0.04],
      ["c", 6, 0.85, 0.3, 0.04],
      ["c", 6, 0.2, 0.8, 0.035],
      ["e", 2, 0.52, 0.42, 0.24, 0.3],
      ["e", 5, 0.27, 0.46, 0.09, 0.14],
      ["r", 2, 0.3, 0.42, 0.44, 0.32],
      ["r", 3, 0.26, 0.74, 0.52, 0.14],
      ["r", 4, 0.32, 0.5, 0.4, 0.05],
      ["c", 4, 0.4, 0.36, 0.035],
      ["c", 4, 0.6, 0.36, 0.035],
    ],
  },
  {
    n: "Chat",
    p: ["#ffe8cc", "#f0a050", "#c87a30", "#3a8a50", "#ff8fa0", "#ffffff"],
    s: [
      ["e", 2, 0.5, 0.78, 0.28, 0.22],
      ["c", 2, 0.5, 0.42, 0.26],
      ["p", 2, [0.26, 0.3, 0.28, 0.04, 0.44, 0.2]],
      ["p", 2, [0.74, 0.3, 0.72, 0.04, 0.56, 0.2]],
      ["p", 5, [0.3, 0.24, 0.3, 0.12, 0.38, 0.2]],
      ["p", 5, [0.7, 0.24, 0.7, 0.12, 0.62, 0.2]],
      ["r", 3, 0.46, 0.17, 0.08, 0.08],
      ["r", 3, 0.3, 0.66, 0.06, 0.16],
      ["r", 3, 0.64, 0.66, 0.06, 0.16],
      ["e", 6, 0.5, 0.53, 0.12, 0.08],
      ["c", 4, 0.4, 0.4, 0.04],
      ["c", 4, 0.6, 0.4, 0.04],
      ["p", 5, [0.46, 0.48, 0.54, 0.48, 0.5, 0.53]],
    ],
  },
  {
    n: "Baleine",
    p: ["#3f8fd0", "#5a6fb8", "#c8d4f0", "#ffffff", "#7cc0f0", "#1f2a4a"],
    s: [
      ["e", 2, 0.44, 0.56, 0.34, 0.2],
      ["p", 2, [0.74, 0.52, 0.96, 0.34, 0.92, 0.56, 0.96, 0.74]],
      ["e", 3, 0.4, 0.66, 0.26, 0.09],
      ["c", 6, 0.24, 0.52, 0.025],
      ["p", 4, [0.36, 0.34, 0.3, 0.14, 0.36, 0.2, 0.4, 0.08, 0.42, 0.22, 0.48, 0.16, 0.44, 0.34]],
      ["e", 5, 0.2, 0.92, 0.2, 0.05],
      ["e", 5, 0.72, 0.94, 0.24, 0.05],
    ],
  },
  {
    n: "Voilier",
    p: ["#cfeaff", "#3f8fd0", "#a0522d", "#ffffff", "#ffd0a0", "#ffd23a"],
    s: [
      ["c", 6, 0.82, 0.16, 0.09],
      ["r", 2, 0, 0.76, 1, 0.24],
      ["p", 3, [0.18, 0.66, 0.82, 0.66, 0.72, 0.8, 0.28, 0.8]],
      ["r", 3, 0.49, 0.14, 0.03, 0.52],
      ["p", 4, [0.52, 0.16, 0.52, 0.62, 0.8, 0.62]],
      ["p", 5, [0.48, 0.24, 0.48, 0.62, 0.24, 0.62]],
      ["e", 4, 0.3, 0.88, 0.12, 0.02],
      ["e", 4, 0.74, 0.9, 0.14, 0.02],
    ],
  },
  {
    n: "Hibou",
    p: ["#2c3a6a", "#a0703a", "#e8c890", "#ffffff", "#ffb020", "#5a3a20"],
    s: [
      ["r", 6, 0, 0.84, 1, 0.06],
      ["e", 2, 0.5, 0.54, 0.26, 0.32],
      ["p", 2, [0.24, 0.3, 0.28, 0.12, 0.4, 0.26]],
      ["p", 2, [0.76, 0.3, 0.72, 0.12, 0.6, 0.26]],
      ["e", 3, 0.5, 0.64, 0.16, 0.2],
      ["c", 4, 0.4, 0.4, 0.09],
      ["c", 4, 0.6, 0.4, 0.09],
      ["c", 6, 0.41, 0.4, 0.04],
      ["c", 6, 0.59, 0.4, 0.04],
      ["p", 5, [0.46, 0.48, 0.54, 0.48, 0.5, 0.56]],
      ["c", 4, 0.84, 0.14, 0.025],
      ["c", 4, 0.14, 0.2, 0.025],
    ],
  },
  {
    n: "Renard",
    p: ["#dff0d8", "#f07a2a", "#ffffff", "#3a2a2a", "#7cbf5a", "#ffd54a"],
    s: [
      ["r", 5, 0, 0.84, 1, 0.16],
      ["c", 6, 0.12, 0.84, 0.03],
      ["c", 6, 0.86, 0.88, 0.03],
      ["e", 2, 0.74, 0.66, 0.18, 0.1],
      ["e", 3, 0.88, 0.62, 0.06, 0.06],
      ["e", 2, 0.46, 0.66, 0.2, 0.16],
      ["p", 2, [0.22, 0.42, 0.5, 0.42, 0.36, 0.62]],
      ["p", 2, [0.22, 0.42, 0.24, 0.18, 0.32, 0.34]],
      ["p", 2, [0.5, 0.42, 0.48, 0.18, 0.4, 0.34]],
      ["p", 3, [0.27, 0.48, 0.36, 0.62, 0.45, 0.48, 0.36, 0.52]],
      ["c", 4, 0.36, 0.6, 0.025],
      ["c", 4, 0.3, 0.44, 0.02],
      ["c", 4, 0.42, 0.44, 0.02],
      ["p", 4, [0.24, 0.22, 0.25, 0.3, 0.29, 0.28]],
      ["p", 4, [0.48, 0.22, 0.47, 0.3, 0.43, 0.28]],
    ],
  },
  {
    n: "Fusée",
    p: ["#1f2350", "#e8e8f0", "#7cc7f0", "#e0453f", "#ffb020", "#ffffff"],
    s: [
      ["c", 6, 0.15, 0.2, 0.025],
      ["c", 6, 0.85, 0.12, 0.025],
      ["c", 6, 0.8, 0.7, 0.02],
      ["c", 6, 0.18, 0.72, 0.02],
      ["p", 5, [0.42, 0.76, 0.58, 0.76, 0.5, 0.98]],
      ["p", 4, [0.36, 0.56, 0.3, 0.78, 0.4, 0.74]],
      ["p", 4, [0.64, 0.56, 0.7, 0.78, 0.6, 0.74]],
      ["e", 2, 0.5, 0.48, 0.14, 0.32],
      ["p", 4, [0.4, 0.26, 0.5, 0.06, 0.6, 0.26]],
      ["c", 3, 0.5, 0.42, 0.06],
      ["r", 4, 0.4, 0.72, 0.2, 0.05],
    ],
  },
  {
    n: "Cadeau",
    p: ["#e8f4ff", "#e0453f", "#ffd54a", "#b8303f", "#ffffff", "#b9d8f0"],
    s: [
      ["r", 6, 0, 0.84, 1, 0.16],
      ["r", 2, 0.2, 0.44, 0.6, 0.42],
      ["r", 4, 0.62, 0.44, 0.18, 0.42],
      ["r", 2, 0.14, 0.34, 0.72, 0.12],
      ["r", 3, 0.45, 0.34, 0.1, 0.52],
      ["e", 3, 0.38, 0.28, 0.12, 0.07],
      ["e", 3, 0.62, 0.28, 0.12, 0.07],
      ["c", 3, 0.5, 0.3, 0.05],
      ["p", 5, [0.66, 0.5, 0.78, 0.5, 0.78, 0.6, 0.66, 0.6]],
    ],
  },
  {
    n: "Bougie",
    p: ["#2a2550", "#f5e6d0", "#ffcc33", "#ff8a2a", "#4a3f80", "#c08a3a"],
    s: [
      ["c", 5, 0.5, 0.26, 0.2],
      ["e", 6, 0.5, 0.88, 0.3, 0.06],
      ["r", 6, 0.3, 0.8, 0.4, 0.08],
      ["r", 2, 0.38, 0.36, 0.24, 0.46],
      ["r", 1, 0.49, 0.3, 0.02, 0.06],
      ["e", 3, 0.5, 0.2, 0.06, 0.11],
      ["e", 4, 0.5, 0.23, 0.03, 0.05],
      ["p", 2, [0.38, 0.36, 0.44, 0.36, 0.44, 0.46]],
    ],
  },
  {
    n: "Cloche",
    p: ["#dbeefe", "#ffcc33", "#e0a020", "#e0453f", "#3a9a50", "#8a5a2a"],
    s: [
      ["p", 2, [0.32, 0.66, 0.36, 0.34, 0.5, 0.22, 0.64, 0.34, 0.68, 0.66, 0.78, 0.76, 0.22, 0.76]],
      ["p", 3, [0.56, 0.26, 0.64, 0.34, 0.68, 0.66, 0.78, 0.76, 0.58, 0.76]],
      ["c", 6, 0.5, 0.82, 0.06],
      ["e", 5, 0.3, 0.18, 0.1, 0.05],
      ["e", 5, 0.7, 0.18, 0.1, 0.05],
      ["c", 4, 0.44, 0.16, 0.06],
      ["c", 4, 0.56, 0.16, 0.06],
      ["c", 4, 0.5, 0.2, 0.05],
    ],
  },
  {
    n: "Pingouin",
    p: ["#bfe3ff", "#2b2a3d", "#ffffff", "#ffa030", "#e8f6ff", "#3fa0e0"],
    s: [
      ["r", 5, 0, 0.84, 1, 0.16],
      ["e", 2, 0.5, 0.54, 0.22, 0.32],
      ["e", 3, 0.5, 0.6, 0.14, 0.24],
      ["c", 2, 0.5, 0.28, 0.15],
      ["c", 3, 0.45, 0.27, 0.04],
      ["c", 3, 0.55, 0.27, 0.04],
      ["c", 2, 0.45, 0.27, 0.018],
      ["c", 2, 0.55, 0.27, 0.018],
      ["p", 4, [0.46, 0.32, 0.54, 0.32, 0.5, 0.37]],
      ["r", 6, 0.34, 0.38, 0.32, 0.05],
      ["e", 4, 0.42, 0.86, 0.08, 0.03],
      ["e", 4, 0.58, 0.86, 0.08, 0.03],
    ],
  },
  {
    n: "Montgolfière",
    p: ["#bfe8ff", "#ff6a6a", "#ffd54a", "#a0703a", "#5a3a20", "#ffffff"],
    s: [
      ["e", 6, 0.18, 0.3, 0.14, 0.06],
      ["e", 6, 0.82, 0.7, 0.14, 0.06],
      ["c", 2, 0.5, 0.34, 0.26],
      ["p", 2, [0.3, 0.48, 0.7, 0.48, 0.56, 0.66, 0.44, 0.66]],
      ["e", 3, 0.5, 0.36, 0.09, 0.27],
      ["r", 5, 0.43, 0.66, 0.01, 0.1],
      ["r", 5, 0.56, 0.66, 0.01, 0.1],
      ["r", 4, 0.42, 0.74, 0.16, 0.12],
    ],
  },
  {
    n: "Village de nuit",
    p: ["#1f2560", "#5a4a8a", "#ffffff", "#ffd54a", "#f6e7a8", "#e8f0ff"],
    s: [
      ["c", 5, 0.82, 0.18, 0.1],
      ["c", 1, 0.86, 0.15, 0.08],
      ["r", 6, 0, 0.8, 1, 0.2],
      ["r", 2, 0.08, 0.52, 0.26, 0.3],
      ["p", 3, [0.04, 0.54, 0.21, 0.36, 0.38, 0.54]],
      ["r", 2, 0.42, 0.46, 0.24, 0.36],
      ["p", 3, [0.38, 0.48, 0.54, 0.3, 0.7, 0.48]],
      ["r", 2, 0.72, 0.56, 0.22, 0.26],
      ["p", 3, [0.68, 0.58, 0.83, 0.44, 0.98, 0.58]],
      ["r", 4, 0.14, 0.6, 0.06, 0.07],
      ["r", 4, 0.24, 0.6, 0.06, 0.07],
      ["r", 4, 0.5, 0.56, 0.08, 0.08],
      ["r", 4, 0.78, 0.64, 0.06, 0.06],
      ["c", 3, 0.2, 0.14, 0.015],
      ["c", 3, 0.5, 0.1, 0.015],
      ["c", 3, 0.62, 0.24, 0.015],
    ],
  },
];
const cbLight = (e) => {
  const t = parseInt(e.slice(1), 16);
  return 0.299 * (t >> 16) + 0.587 * ((t >> 8) & 255) + 0.114 * (255 & t) > 200;
};
const CBN = CBP.length;
const cbSize = (e) => (e < 4 ? 12 : e < 8 ? 14 : e < 12 ? 16 : e < 18 ? 18 : 20);
function cbInPoly(e, t, a) {
  let s = !1;
  for (let n = 0, o = a.length - 2; n < a.length; o = n, n += 2) {
    const i = a[n],
      r = a[n + 1],
      l = a[o],
      c = a[o + 1];
    r > t != c > t && e < ((l - i) * (t - r)) / (c - r) + i && (s = !s);
  }
  return s;
}
function cbGrid(e) {
  const t = CBP[e],
    a = cbSize(e),
    s = new Array(a * a).fill(1);
  for (let e = 0; e < a; e++)
    for (let n = 0; n < a; n++) {
      const o = (n + 0.5) / a,
        i = (e + 0.5) / a;
      let r = 1;
      for (const e of t.s) {
        const t = e[0];
        let a = !1;
        ("r" === t
          ? (a = o >= e[2] && o < e[2] + e[4] && i >= e[3] && i < e[3] + e[5])
          : "c" === t
            ? (a = (o - e[2]) ** 2 + (i - e[3]) ** 2 <= e[4] ** 2)
            : "e" === t
              ? (a = ((o - e[2]) / e[4]) ** 2 + ((i - e[3]) / e[5]) ** 2 <= 1)
              : "p" === t && (a = cbInPoly(o, i, e[2])),
          a && (r = e[1]));
      }
      s[e * a + n] = r;
    }
  const n = [...new Set(s)].sort((e, t) => e - t),
    o = {};
  return (
    n.forEach((e, t) => (o[e] = t + 1)),
    { n: a, g: s.map((e) => o[e]), pal: n.map((e) => t.p[e - 1]) }
  );
}
const CB = { l: 0, G: null, done: null, sel: 1, cv: null, x: null, cs: 0, drag: !1, ok: !1, fl: null };
function cbSave() {
  CB.G && st.set("cb:sv:" + CB.l, CB.done.map((e) => (e ? 1 : 0)).join(""));
}
function cbLoad(e) {
  const t = st.get("cb:sv:" + e, "");
  return "string" == typeof t && t.length === CB.G.g.length
    ? [...t].map((e) => "1" === e)
    : new Array(CB.G.g.length).fill(!1);
}
function cbThumb(e) {
  const t = cbGrid(e),
    a = document.createElement("canvas"),
    s = Math.max(2, Math.round(48 / t.n));
  a.width = a.height = t.n * s;
  const n = a.getContext("2d");
  return (
    t.g.forEach((e, a) => {
      ((n.fillStyle = t.pal[e - 1]), n.fillRect((a % t.n) * s, Math.floor(a / t.n) * s, s, s));
    }),
    a.toDataURL()
  );
}
const CBHIDE = !0;
function cbHub() {
  (cbActs(), (cur = "colorie"), nv("games"), theme("colorie"));
  const e = st.get("cb:d", []),
    t = [...Array(CBN).keys()].find((t) => !e.includes(t)),
    a = void 0 === t ? CBN - 1 : t,
    s = ALL.find((e) => "colorie" === e.id) || { ic: "🎨", t: "Coloriage" },
    n = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    o = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
    i = st.get("cd:d", []),
    r = CDORD.find((e) => !i.includes(e)),
    l = void 0 === r ? CDORD[CDN - 1] : r,
    c = cdK;
  ((app.innerHTML = `<div class="top stk">${bk("home")}<div class="chip">🫧 ${FLX()}</div></div><section class="glass story pt-colorie"><i>${gSv(s)}</i><h2>${s.t}</h2><p>De grands dessins à numéros : glisse pour te déplacer, pince pour zoomer, touche une zone pour la colorier.</p></section>\n <div class="opts"><section class="rc pt-colorie" data-g="🖌️"><div class="rc-ic">🖌️</div><div class="rc-t"><small>Dessins · ${i.length ? "Continuer" : "Commencer"}</small><b>Dessin ${CDPOS[l] + 1}</b><span>${c(l)} couleurs · ${i.length} sur ${CDN} terminés</span></div><button class="rc-go" data-a="cdLv" data-v="${l}">Jouer${n}</button></section>\n <button class="albc" data-a="cdAlb" aria-label="Album photo : ${i.length} sur ${CDN} dessins terminés"><span class="albs">${(i.length ? i.slice(-3) : [null, null, null]).map((e, t, a) => `<span class="alph${null === e ? " e" : ""}" style="--r:${9 * (t - (a.length - 1) / 2)}deg;--x:${16 * (t - (a.length - 1) / 2)}px">${null === e ? "" : `<img alt="" src="${cdPic(e, 96)}">`}</span>`).join("")}</span><span class="albt"><small>Album photo</small><b>Mes dessins</b><i class="albp"><u style="width:${Math.round((100 * i.length) / CDN)}%"></u></i><em>${i.length} sur ${CDN} terminés</em></span><span class="albg" aria-hidden="true">›</span></button>\n <section class="rc pt-colorie" data-g="🎨" style="display:none"><div class="rc-ic">🎨</div><div class="rc-t"><small>Pixel art · ${e.length ? "Continuer" : "Commencer"}</small><b>${void 0 === t ? "Rejouer : " + CBP[a].n : CBP[a].n}</b><span>${e.length} sur ${CBN} pixel arts terminés</span></div><button class="rc-go" data-a="cbLv" data-v="${a}">Jouer${n}</button></section>\n <div class="dd pt-colorie${CD.ddOpen ? " open" : ""}" id="cddd"><button class="dd-h" data-a="cdDd" aria-expanded="${!!CD.ddOpen}" aria-controls="cdl"><span><b>Choisir un dessin</b><small>${i.length} / ${CDN} terminés</small></span>${o}</button><div class="dd-l" id="cdl"><div class="dd-i"><div class="lvg cbg cdg">${CDORD.map(
    (e) => {
      const t = i.includes(e);
      return `<button class="lv ${t ? "d cbt" : e === r ? "nx" : "far"}" data-a="cdLv" data-v="${e}" aria-label="Dessin ${CDPOS[e] + 1}, ${c(e)} couleurs${t ? ", terminé" : ""}">${t ? `<img src="${cdThumb(e)}" alt="">` : `${CDPOS[e] + 1}<small>${c(e)}</small>`}</button>`;
    },
  ).join(
    "",
  )}</div></div></div></div>\n <div class="dd pt-colorie${lvOpen ? " open" : ""}" id="cbdd" style="display:none"><button class="dd-h" data-a="cbDd" aria-expanded="${lvOpen}" aria-controls="lvl"><span><b>Choisir un pixel art</b><small>${e.length} / ${CBN} terminés</small></span>${o}</button><div class="dd-l" id="lvl"><div class="dd-i"><div class="lvg cbg">${[
    ...Array(CBN).keys(),
  ]
    .map((a) => {
      const s = e.includes(a);
      return `<button class="lv ${s ? "d cbt" : a === t ? "nx" : "far"}" data-a="cbLv" data-v="${a}" aria-label="${esc(CBP[a].n)}${s ? ", terminé" : ""}">${s ? `<img src="${cbThumb(a)}" alt="">` : a + 1}</button>`;
    })
    .join("")}</div></div></div></div></div>`),
    window.scrollTo(0, 0));
}
function cbScreen() {
  (cbActs(), (cur = "colorie"), nv("games"), theme("colorie"));
  {
    const e = $("#nav");
    e && (e.hidden = !0);
  }
  const e = CB.G;
  (CB.l,
    (app.innerHTML = `<div class="cbs"><div class="top stk"><button class="back" data-a="cbBk">‹ Retour</button><button class="tl tlk" data-a="cSkip" data-v="cb" aria-label="Niveau ${CB.l + 1} : toucher pour passer ce niveau"><span class="tlf">Niveau</span><span class="tls">Niv.</span>&nbsp;${CB.l + 1}<i aria-hidden="true">⏭</i></button><div class="tr"><button class="hb hintb" data-a="cbHint" aria-label="Indice : coûte 1 bulle">${HBI(1)}</button><div class="chip">🫧 ${FLX()}</div></div></div><div id="skw" class="skw"></div>\n <div class="cbpal" role="radiogroup" aria-label="Couleurs">${e.pal.map((e, t) => `<button class="cbsw${cbLight(e) ? " lt" : ""}" role="radio" data-a="cbSel" data-v="${t + 1}" style="--c:${e}" aria-label="Couleur ${t + 1}"><b>${t + 1}</b><i></i></button>`).join("")}</div>\n <div class="cbw"><canvas id="cbc" aria-label="Dessin à colorier"></canvas></div>\n <p class="m" id="m" role="status" aria-live="polite"></p>\n </div>`));
  const t = (CB.cv = $("#cbc"));
  ((CB.x = t.getContext("2d")),
    cbSizeC(),
    t.addEventListener("pointerdown", cbPD),
    t.addEventListener("pointermove", cbPM),
    ["pointerup", "pointercancel"].forEach((e) =>
      t.addEventListener(e, () => {
        CB.drag = !1;
      }),
    ),
    addEventListener("resize", cbSizeC),
    CB.done.every((e) => e) && (CB.ok = !0),
    cbPick(cbNextCol(CB.sel) || 1),
    window.scrollTo(0, 0));
}
function cbSizeC() {
  const e = CB.cv;
  if (!e || !e.isConnected) return void removeEventListener("resize", cbSizeC);
  const t = Math.min(($(".cbw") || e).clientWidth || 340, 520, innerHeight - 260),
    a = Math.min(2.5, devicePixelRatio || 1);
  ((e.style.width = e.style.height = t + "px"),
    (e.width = e.height = Math.round(t * a)),
    (CB.dpr = a),
    (CB.w = t),
    cbDraw());
}
function cbLeft(e) {
  let t = 0;
  return (
    CB.G.g.forEach((a, s) => {
      a !== e || CB.done[s] || t++;
    }),
    t
  );
}
function cbNextCol(e) {
  const t = CB.G.pal.length;
  for (let a = 0; a < t; a++) {
    const s = ((e - 1 + a) % t) + 1;
    if (cbLeft(s)) return s;
  }
  return 0;
}
function cbPick(e) {
  ((CB.sel = e),
    document.querySelectorAll(".cbsw").forEach((t) => {
      const a = +t.dataset.v,
        s = cbLeft(a);
      (t.classList.toggle("on", a === e),
        t.classList.toggle("ok", !s),
        t.setAttribute("aria-checked", a === e),
        (t.querySelector("i").textContent = s || "✓"));
    }),
    cbDraw());
}
function cbDraw() {
  const e = CB.x,
    t = CB.G;
  if (!e || !t) return;
  const a = t.n,
    s = CB.cv.width,
    n = s / a,
    o = CB.dpr;
  e.clearRect(0, 0, s, s);
  const i = CB.ok;
  for (let s = 0; s < a * a; s++) {
    const o = (s % a) * n,
      r = Math.floor(s / a) * n,
      l = t.g[s];
    if (CB.done[s] || i) ((e.fillStyle = t.pal[l - 1]), e.fillRect(o, r, n + 0.6, n + 0.6));
    else {
      const t = l === CB.sel,
        a = CB.fl && CB.fl.has(s);
      ((e.fillStyle = a ? "#ffe27a" : t ? "#d9d2ff" : "#f6f4fb"),
        e.fillRect(o, r, n, n),
        (e.fillStyle = t ? "#3b2f8a" : "#9a96b5"),
        (e.font = `${t ? 800 : 600} ${Math.round(0.46 * n)}px "Nunito Sans",system-ui,sans-serif`),
        (e.textAlign = "center"),
        (e.textBaseline = "middle"),
        e.fillText(l, o + n / 2, r + n / 2 + 0.03 * n));
    }
  }
  if (!i) {
    ((e.strokeStyle = "rgba(60,50,120,.14)"), (e.lineWidth = Math.max(1, 0.6 * o)), e.beginPath());
    for (let t = 0; t <= a; t++)
      (e.moveTo(t * n, 0), e.lineTo(t * n, s), e.moveTo(0, t * n), e.lineTo(s, t * n));
    e.stroke();
  }
}
function cbCell(e) {
  const t = CB.cv.getBoundingClientRect(),
    a = CB.G.n,
    s = Math.floor(((e.clientX - t.left) / t.width) * a),
    n = Math.floor(((e.clientY - t.top) / t.height) * a);
  return s < 0 || n < 0 || s >= a || n >= a ? -1 : n * a + s;
}
function cbPaint(e, t) {
  if (e < 0 || CB.ok || CB.done[e]) return;
  const a = CB.G.g[e];
  if (a !== CB.sel) return void (t && cbBad(e));
  ((CB.done[e] = !0), CB.fl && CB.fl.delete(e), sfx(500 + 60 * a, 0.03));
  const s = cbLeft(a);
  if (!s) {
    (sfx(780, 0.12), vib(10));
    const e = cbNextCol(a);
    return (cbSave(), e ? void cbPick(e) : cbWin());
  }
  (Math.random() < 0.3 && cbSave(), cbDraw());
  const n = $(`.cbsw[data-v="${a}"] i`);
  n && (n.textContent = s);
}
function cbBad(e) {
  vib(12);
  const t = CB.x,
    a = CB.G.n,
    s = CB.cv.width / a,
    n = (e % a) * s,
    o = Math.floor(e / a) * s;
  ((t.fillStyle = "rgba(232,72,90,.55)"), t.fillRect(n, o, s, s), setTimeout(cbDraw, 260));
  const i = $("#m");
  i && (i.textContent = "Cette case porte le numéro " + CB.G.g[e] + ".");
}
function cbPD(e) {
  if (!CB.G) return;
  CB.drag = !0;
  try {
    CB.cv.setPointerCapture(e.pointerId);
  } catch (e) {}
  const t = $("#m");
  (t && (t.textContent = ""), cbPaint(cbCell(e), !0), e.preventDefault());
}
function cbPM(e) {
  CB.drag && (cbPaint(cbCell(e), !1), e.preventDefault());
}
function cbWin() {
  ((CB.ok = !0), st.set("cb:sv:" + CB.l, ""));
  const e = st.get("cb:d", []),
    t = !e.includes(CB.l);
  t && (e.push(CB.l), st.set("cb:d", e));
  const a = dmR("colorie", t ? 2 + Math.floor(CB.l / 8) : 1);
  ((fl += a), st.set("fl", fl));
  const s = $(".chip:not(.hintb)");
  (s && (s.textContent = "🫧 " + FLX()),
    cbDraw(),
    document.querySelectorAll(".cbsw").forEach((e) => {
      (e.classList.add("ok"), (e.querySelector("i").textContent = "✓"));
    }));
  const n = CB.cv;
  (n &&
    !wRM &&
    n.animate([{ transform: "scale(1)" }, { transform: "scale(1.04)" }, { transform: "scale(1)" }], {
      duration: 600,
      easing: "ease-out",
    }),
    sfx(784, 0.6),
    vib([20, 40, 20]));
  try {
    confetti(n);
  } catch (e) {}
  const o = CB.l + 1 < CBN;
  setTimeout(() => {
    const e = $(".cbs");
    e &&
      e.insertAdjacentHTML(
        "beforeend",
        `<div class="unend"><section class="glass play"><h2>${esc(CBP[CB.l].n)}</h2><p class="note" style="margin:0 0 4px">Dessin terminé !</p><p class="unrw">+${a} 🫧</p><div class="chrow">${o ? `<button class="btn" data-a="cbLv" data-v="${CB.l + 1}">Dessin suivant</button>` : ""}<button class="btn alt" data-a="cbBk">Retour</button><button class="hmb" data-a="tab" data-v="games" aria-label="Retour à l’accueil des jeux"><span class="hmi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/></svg></span>Accueil</button></div></section></div>`,
      );
  }, 1900);
}
let cbAO = !1;
function cbActs() {
  cbAO ||
    ((cbAO = !0),
    Object.assign(act, {
      cbBk: () => {
        (cbSave(), (CB.G = null), cbHub());
      },
      cbDd: () => {
        const e = $("#cbdd");
        ((lvOpen = e.classList.toggle("open")),
          e.querySelector(".dd-h").setAttribute("aria-expanded", lvOpen));
      },
      cbLv: (e) => {
        ((CB.l = Math.max(0, Math.min(CBN - 1, +e || 0))),
          (CB.G = cbGrid(CB.l)),
          (CB.done = cbLoad(CB.l)),
          (CB.ok = !1),
          (CB.sel = 1),
          (CB.fl = null),
          cbScreen());
      },
      cbSel: (e) => {
        cbPick(+e);
      },
      cbHint: () => {
        if (!CB.ok && cbLeft(CB.sel)) {
          if (!UNL()) {
            if (fl < 1) {
              const e = $("#m");
              return void (e && (e.textContent = "Il te manque une bulle pour un indice."));
            }
            ((fl -= 1), st.set("fl", fl));
            const e = $(".chip:not(.hintb)");
            e && (e.textContent = "🫧 " + FLX());
          }
          ((CB.fl = new Set()),
            CB.G.g.forEach((e, t) => {
              e !== CB.sel || CB.done[t] || CB.fl.add(t);
            }),
            cbDraw(),
            setTimeout(() => {
              ((CB.fl = null), cbDraw());
            }, 1600));
        }
      },
    }));
}
const CDN = 150;
const CDO = 100;
const CDW = 1e3;
const CDH = 1300;
const cdRng = (e) => () => {
  e = (1831565813 + (e |= 0)) | 0;
  let t = Math.imul(e ^ (e >>> 15), 1 | e);
  return ((t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t), ((t ^ (t >>> 14)) >>> 0) / 4294967296);
};
function cdHex(e, t, a) {
  ((e = ((e % 360) + 360) % 360),
    (t = Math.max(0, Math.min(100, t)) / 100),
    (a = Math.max(0, Math.min(100, a)) / 100));
  const s = (t) => (t + e / 30) % 12,
    n = t * Math.min(a, 1 - a),
    o = (e) => a - n * Math.max(-1, Math.min(s(e) - 3, 9 - s(e), 1));
  return (
    "#" +
    [o(0), o(8), o(4)]
      .map((e) =>
        Math.round(255 * e)
          .toString(16)
          .padStart(2, "0"),
      )
      .join("")
  );
}
const cdF = (e) => Math.round(10 * e) / 10;
const CP = {
  poly: (e) => "M" + e.map((t, a) => cdF(t) + (a % 2 ? (a < e.length - 1 ? "L" : "") : " ")).join("") + "Z",
  ell: (e, t, a, s, n = 0) => {
    const o = 0.5523,
      i = Math.cos(n),
      r = Math.sin(n),
      l = (a, s) => cdF(e + a * i - s * r) + " " + cdF(t + a * r + s * i);
    return `M${l(a, 0)}C${l(a, s * o)} ${l(a * o, s)} ${l(0, s)}C${l(-a * o, s)} ${l(-a, s * o)} ${l(-a, 0)}C${l(-a, -s * o)} ${l(-a * o, -s)} ${l(0, -s)}C${l(a * o, -s)} ${l(a, -s * o)} ${l(a, 0)}Z`;
  },
  blob: (e, t, a, s, n, o = 9, i = 0.22) => {
    const r = [];
    for (let l = 0; l < o; l++) {
      const c = (l / o) * Math.PI * 2,
        d = 1 + 2 * (n() - 0.5) * i;
      r.push([e + Math.cos(c) * a * d, t + Math.sin(c) * s * d]);
    }
    let l = "";
    for (let e = 0; e < o; e++) {
      const t = r[e],
        a = r[(e + 1) % o],
        s = [(t[0] + a[0]) / 2, (t[1] + a[1]) / 2];
      l +=
        (e ? "Q" : "M" + cdF((r[o - 1][0] + t[0]) / 2) + " " + cdF((r[o - 1][1] + t[1]) / 2) + "Q") +
        cdF(t[0]) +
        " " +
        cdF(t[1]) +
        " " +
        cdF(s[0]) +
        " " +
        cdF(s[1]);
    }
    return l + "Z";
  },
  band: (e, t, a, s, n, o = 0, i = CDW) => {
    let r = "M" + o + " " + cdF(n);
    for (let n = 0; n <= 28; n++) {
      const l = o + ((i - o) * n) / 28;
      r += "L" + cdF(l) + " " + cdF(e + Math.sin((l / CDW) * Math.PI * 2 * a + s) * t);
    }
    return r + "L" + i + " " + cdF(n) + "Z";
  },
  petal: (e, t, a, s, n) => {
    const o = Math.cos(a),
      i = Math.sin(a),
      r = (a, s) => cdF(e + a * o - s * i) + " " + cdF(t + a * i + s * o);
    return `M${r(0, 0)}C${r(0.3 * s, n)} ${r(0.8 * s, 0.8 * n)} ${r(s, 0)}C${r(0.8 * s, 0.8 * -n)} ${r(0.3 * s, -n)} ${r(0, 0)}Z`;
  },
  half: (e, t, a, s, n, o) => {
    const i = Math.cos(a),
      r = Math.sin(a),
      l = (a, s) => cdF(e + a * i - s * r) + " " + cdF(t + a * r + s * i),
      c = o;
    return `M${l(0, 0)}C${l(0.3 * s, n * c)} ${l(0.8 * s, 0.8 * n * c)} ${l(s, 0)}L${l(0, 0)}Z`;
  },
  rect: (e, t, a, s) => CP.poly([e, t, e + a, t, e + a, t + s, e, t + s]),
  sector: (e, t, a, s, n, o) => {
    const i = [],
      r = Math.max(3, Math.ceil((o - n) / 0.12));
    for (let a = 0; a <= r; a++) {
      const l = n + ((o - n) * a) / r;
      i.push(e + Math.cos(l) * s, t + Math.sin(l) * s);
    }
    for (let s = r; s >= 0; s--) {
      const l = n + ((o - n) * s) / r;
      i.push(e + Math.cos(l) * a, t + Math.sin(l) * a);
    }
    return CP.poly(i);
  },
  star: (e, t, a, s, n, o = -Math.PI / 2) => {
    const i = [];
    for (let r = 0; r < 2 * n; r++) {
      const l = o + (r * Math.PI) / n,
        c = r % 2 ? s : a;
      i.push(e + Math.cos(l) * c, t + Math.sin(l) * c);
    }
    return CP.poly(i);
  },
  line: (e) => "M" + e.map((t, a) => cdF(t) + (a % 2 ? (a < e.length - 1 ? "L" : "") : " ")).join(""),
  curve: (e, t, a, s, n, o) => `M${cdF(e)} ${cdF(t)}Q${cdF(a)} ${cdF(s)} ${cdF(n)} ${cdF(o)}`,
};
const cdMp2 = (e, t) =>
  e.replace(
    /([MLCQ])([^MLCQZ]*)/g,
    (e, a, s) =>
      a +
      s
        .trim()
        .split(/\s+/)
        .map(Number)
        .map((e, a) => cdF(t(e, a % 2)))
        .join(" "),
  );
function cdBx2(e, t) {
  let a = 1e9,
    s = 1e9,
    n = -1e9,
    o = -1e9;
  for (let i = t; i < e.length; i++) {
    const t = (e[i].d || "").match(/-?\d+\.?\d*/g);
    if (t)
      for (let e = 0; e + 1 < t.length; e += 2) {
        const i = +t[e],
          r = +t[e + 1];
        (i < a && (a = i), i > n && (n = i), r < s && (s = r), r > o && (o = r));
      }
  }
  return [a, s, n, o];
}
function cdFt2(e, t) {
  if (e.length <= t) return;
  const [a, s, n, o] = cdBx2(e, t);
  if (a > 1e8) return;
  let i = 0,
    r = 0;
  if (
    (n - a > CDW - 16 ? (i = (CDW - n - a) / 2) : a < 8 ? (i = 8 - a) : n > CDW - 8 && (i = CDW - 8 - n),
    o - s > CDH - 16 ? (r = (CDH - o - s) / 2) : s < 8 ? (r = 8 - s) : o > CDH - 8 && (r = CDH - 8 - o),
    i || r)
  )
    for (let a = t; a < e.length; a++) e[a].d && (e[a].d = cdMp2(e[a].d, (e, t) => e + (t ? r : i)));
}
const cdKeep = (e) =>
  e.forEach((e) => {
    e.d &&
      ((e.d.match(/-?\d+\.?\d*/g) || [])
        .map(Number)
        .every((e, t) => (t % 2 ? e >= 0 && e <= CDH : e >= 0 && e <= CDW)) ||
        (e.d = cdMp2(e.d, (e, t) => Math.max(0, Math.min(t ? CDH : CDW, e)))));
  });
const CDORD = (() => {
  const A = [];
  let o = 0,
    n = CDO;
  for (let p = 0; p < CDN; p++) A.push(n < CDN && (o >= CDO || (p + 1) % 3 === 0) ? n++ : o++);
  return A;
})();
const CDPOS = (() => {
  const P = [];
  CDORD.forEach((id, p) => (P[id] = p));
  return P;
})();
const cdK = (e) =>
  e < CDO
    ? Math.min(50, 10 + Math.round((40 * e) / 39))
    : Math.min(50, 10 + Math.round(40 * Math.min(1, CDPOS[e] / 59)));
function cdScene2(l) {
  const R = cdRng(l * 7919 + 13),
    q = Math.min(1, CDPOS[l] / 59),
    th = (l - CDO) % 10,
    S = [],
    add = (d, c) => S.push({ d, c }),
    ln = (d, w = 3) => S.push({ d, w, ln: 1 }),
    jit = (h, s, li, j = 6) => cdHex(h + (R() - 0.5) * j, s + (R() - 0.5) * j, li + (R() - 0.5) * j),
    rn = (a, b) => a + R() * (b - a),
    ri = (a, b) => Math.floor(rn(a, b + 1)),
    Q = Math.round,
    sky = (n, h1, h2, l1, l2, s = 45) => {
      for (let i = 0; i < n; i++) {
        const t = i / n;
        add(
          CP.band(i ? CDH * (0.02 + t * 0.45) : -30, rn(4, 18), rn(0.6, 1.6), rn(0, 6), CDH),
          cdHex(h1 + (h2 - h1) * t, s, l1 + (l2 - l1) * t),
        );
      }
    },
    cloud = (x, y, w, li) => {
      add(CP.blob(x, y, w, w * 0.38, R, 10, 0.18), cdHex(220, 30, li));
      add(CP.blob(x - w * 0.3, y + w * 0.08, w * 0.45, w * 0.25, R, 8, 0.15), cdHex(220, 25, li - 6));
    },
    stars = (n, y1, h, li = 88) => {
      for (let i = 0; i < n; i++)
        add(CP.star(rn(30, 970), rn(30, y1), rn(10, 18), rn(4, 7), 4), jit(h, 80, li));
    },
    G =
      (f) =>
      (...a) => {
        const n0 = S.length,
          r = f(...a);
        cdFt2(S, n0);
        return r;
      },
    flower = G((cx, cy, r, hu, n) => {
      for (let i = 0; i < n; i++)
        add(CP.petal(cx, cy, (i / n) * Math.PI * 2 + rn(0, 0.2), r, r * 0.42), jit(hu, 65, 70 - (i % 2) * 8));
      add(CP.ell(cx, cy, r * 0.28, r * 0.28), jit(45, 85, 58));
    }),
    pine = G((x, y, h, hu, li) => {
      add(CP.rect(x - h * 0.05, y - h * 0.18, h * 0.1, h * 0.2), jit(25, 40, 30));
      const k = ri(3, 4);
      for (let i = 0; i < k; i++) {
        const yy = y - h * 0.15 - i * h * 0.25,
          w = h * (0.42 - i * 0.08);
        add(CP.poly([x - w, yy, x, yy - h * 0.42, x + w, yy]), jit(hu, 40, li + i * 4));
        add(
          CP.poly([
            x - w * 0.45,
            yy - h * 0.18,
            x,
            yy - h * 0.42,
            x + w * 0.45,
            yy - h * 0.18,
            x + w * 0.2,
            yy - h * 0.14,
            x,
            yy - h * 0.2,
            x - w * 0.2,
            yy - h * 0.14,
          ]),
          "#f2f6fc",
        );
      }
    });
  if (th === 0) {
    /* phare */
    sky(4 + Q(q * 4), 200, 215, 66, 92, 60);
    add(CP.ell(CDW * 0.8, CDH * 0.17, rn(60, 80), rn(60, 80)), jit(45, 90, 78));
    const cx = CDW * 0.42,
      by = CDH * 0.72,
      H = 560,
      ty = by - H;
    add(CP.poly([cx + 50, ty - 48, CDW, ty - 120, CDW, ty + 30]), jit(55, 90, 90));
    add(CP.poly([cx - 50, ty - 48, 0, ty - 120, 0, ty + 30]), jit(55, 90, 90));
    for (let i = 0; i < 2; i++) cloud(rn(150, 850), rn(120, 380), rn(90, 150), 94);
    for (let i = 0; i < 5 + Q(q * 4); i++)
      add(CP.band(CDH * (0.6 + i * 0.045), 8 + i, rn(1.5, 3), rn(0, 6), CDH), jit(205, 58, 56 - i * 3));
    add(CP.blob(cx, by + 10, 300, 110, R, 9, 0.18), jit(25, 10, 38));
    add(CP.blob(cx - 200, by + 80, 120, 60, R, 8, 0.2), jit(25, 10, 46));
    const wd = (y) => 70 - (26 * (by - y)) / H,
      N = 5;
    for (let k = 0; k < N; k++) {
      const y1 = by - (k * H) / N,
        y2 = by - ((k + 1) * H) / N;
      add(
        CP.poly([cx - wd(y1), y1, cx + wd(y1), y1, cx + wd(y2), y2, cx - wd(y2), y2]),
        k % 2 ? jit(0, 0, 96) : jit(2, 75, 52),
      );
    }
    add(CP.rect(cx - 50, ty - 70, 100, 70), jit(50, 90, 78));
    add(CP.rect(cx - 14, ty - 70, 28, 70), jit(35, 60, 40));
    add(CP.poly([cx - 70, ty - 70, cx + 70, ty - 70, cx, ty - 140]), jit(2, 70, 40));
    add(CP.rect(cx - 62, ty - 8, 124, 14), jit(240, 10, 30));
    add(CP.rect(cx - 16, by - 90, 32, 90), jit(25, 50, 32));
    add(CP.ell(cx, by - 90, 16, 16), jit(25, 50, 32));
    for (let i = 0; i < 1 + Q(q * 2); i++) {
      const x = rn(640, 880),
        y = CDH * rn(0.7, 0.88);
      add(CP.poly([x - 70, y, x + 70, y, x + 50, y + 34, x - 50, y + 34]), jit(25, 55, 38));
      add(CP.rect(x - 3, y - 120, 6, 120), jit(25, 30, 30));
      add(CP.poly([x + 6, y - 116, x + 6, y - 6, x + 70, y - 6]), jit(0, 0, 96));
      add(CP.poly([x - 6, y - 100, x - 6, y - 6, x - 50, y - 6]), jit(2, 70, 60));
    }
    for (let i = 0; i < 2 + Q(q * 4); i++) {
      const x = rn(80, 920),
        y = rn(100, CDH * 0.4);
      ln(CP.curve(x - 30, y, x - 15, y - 20, x, y), 3);
      ln(CP.curve(x, y, x + 15, y - 20, x + 30, y), 3);
    }
  } else if (th === 1) {
    /* forêt de champignons */
    add(CP.rect(0, 0, CDW, CDH), jit(165, 35, 20));
    for (let i = 0; i < 4 + Q(q * 3); i++) {
      const x = rn(-20, 940),
        w = rn(50, 100);
      add(CP.rect(x, 0, w, CDH * 0.9), jit(25, 30, 26 + rn(0, 8)));
      for (let k = 0; k < 2; k++)
        ln(
          CP.line([x + w * rn(0.2, 0.8), rn(0, CDH * 0.5), x + w * rn(0.2, 0.8), rn(CDH * 0.5, CDH * 0.88)]),
          2,
        );
    }
    for (let i = 0; i < 3 + Q(q * 3); i++)
      add(CP.ell(rn(60, 940), rn(80, 500), rn(70, 130), rn(40, 80)), jit(135, 45, 32));
    add(CP.band(CDH * 0.86, 20, 1.5, rn(0, 6), CDH), jit(110, 40, 32));
    add(CP.band(CDH * 0.93, 12, 2, rn(0, 6), CDH), jit(100, 35, 26));
    const ms = [];
    for (let i = 0; i < 3 + Q(q * 5); i++) ms.push([rn(120, 880), CDH * rn(0.66, 0.94), rn(100, 180)]);
    ms.sort((a, b) => a[1] - b[1]);
    const mush = G((x, y, s) => {
      const hu = R() < 0.3 ? rn(270, 300) : rn(-8, 20);
      add(CP.ell(x, y - s * 0.72, s * 0.82, s * 0.52), jit(hu, 70, 52));
      add(CP.rect(x - s * 0.17, y - s * 0.72, s * 0.34, s * 0.72), jit(40, 30, 88));
      add(CP.ell(x, y, s * 0.3, s * 0.07), jit(100, 40, 28));
      for (let k = 0; k < 4; k++)
        add(
          CP.ell(
            x + rn(-0.5, 0.5) * s,
            y - s * 0.95 + rn(-0.12, 0.1) * s,
            s * rn(0.07, 0.12),
            s * rn(0.05, 0.09),
          ),
          jit(0, 0, 96),
        );
    });
    ms.forEach((m) => mush(...m));
    for (let i = 0; i < 5 + Q(q * 8); i++)
      add(CP.star(rn(30, 970), rn(40, CDH * 0.75), rn(10, 15), rn(4, 6), 4), jit(58, 95, 78));
  } else if (th === 2) {
    /* ville la nuit */
    sky(5 + Q(q * 4), 235, 275, 16, 40, 50);
    add(CP.ell(CDW * 0.75, CDH * 0.14, 70, 70), jit(50, 70, 88));
    add(CP.ell(CDW * 0.78, CDH * 0.13, 60, 60), cdHex(255, 40, 24));
    stars(6 + Q(q * 8), CDH * 0.35, 50);
    const bld = (x, w, h, li, lit) => {
      add(CP.rect(x, CDH - h, w, h), jit(235, 28, li));
      const cols = Math.max(2, Math.floor(w / 38)),
        cw = (w - 20) / cols,
        rows = Math.min(Math.floor((h - 30) / 58), 4 + Q(q * 6));
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
          add(
            CP.rect(x + 10 + c * cw + 4, CDH - h + 22 + r * 58, cw - 8, 32),
            lit && R() < 0.5 ? jit(48, 90, 70) : jit(235, 30, li + 9),
          );
      if (R() < 0.5) ln(CP.line([x + w / 2, CDH - h, x + w / 2, CDH - h - rn(40, 90)]), 3);
    };
    for (let x = -20; x < CDW;) {
      const w = rn(100, 170);
      bld(x, w, rn(260, 560), 22, false);
      x += w + rn(0, 20);
    }
    for (let x = -30; x < CDW;) {
      const w = rn(110, 190);
      bld(x, w, rn(320, 820), 18, true);
      x += w + rn(0, 24);
    }
    add(CP.rect(0, CDH - 70, CDW, 70), jit(235, 12, 12));
    for (let k = 0; k < 7; k++) add(CP.rect(30 + k * 150, CDH - 38, 80, 10), jit(50, 70, 70));
  } else if (th === 3) {
    /* désert */
    sky(4 + Q(q * 3), 22, 40, 66, 90, 70);
    add(CP.ell(CDW * 0.68, CDH * 0.2, 130, 130), jit(38, 90, 82));
    add(CP.ell(CDW * 0.68, CDH * 0.2, 95, 95), jit(45, 95, 68));
    for (let i = 0; i < 2; i++) {
      const x = rn(0, 700);
      add(
        CP.poly([x, CDH * 0.56, x + 40, CDH * 0.42, x + 250, CDH * 0.42, x + 300, CDH * 0.56]),
        jit(15, 50, 62),
      );
    }
    for (let i = 0; i < 4 + Q(q * 3); i++)
      add(CP.band(CDH * (0.52 + i * 0.08), rn(25, 50), rn(0.6, 1.4), rn(0, 6), CDH), jit(35, 60, 72 - i * 5));
    const cact = G((x, y, h) => {
      const g = () => jit(135, 40, 38);
      add(CP.rect(x - h * 0.07, y - h, h * 0.14, h), g());
      add(CP.ell(x, y - h, h * 0.07, h * 0.07), g());
      add(CP.rect(x - h * 0.3, y - h * 0.5, h * 0.3, h * 0.1), g());
      add(CP.rect(x - h * 0.3, y - h * 0.78, h * 0.1, h * 0.38), g());
      add(CP.ell(x - h * 0.25, y - h * 0.78, h * 0.05, h * 0.05), g());
      add(CP.rect(x, y - h * 0.4, h * 0.28, h * 0.1), g());
      add(CP.rect(x + h * 0.18, y - h * 0.65, h * 0.1, h * 0.35), g());
      add(CP.ell(x + h * 0.23, y - h * 0.65, h * 0.05, h * 0.05), g());
      add(CP.ell(x, y - h - h * 0.05, h * 0.045, h * 0.045), jit(340, 80, 62));
      ln(CP.line([x, y - h, x, y]), 2);
    });
    const cs = [];
    for (let i = 0; i < 2 + Q(q * 4); i++) cs.push([rn(110, 890), CDH * rn(0.72, 0.95), rn(200, 400)]);
    cs.sort((a, b) => a[1] - b[1]);
    cs.forEach((c) => cact(...c));
    for (let i = 0; i < 2 + Q(q * 3); i++)
      add(CP.blob(rn(80, 920), CDH * rn(0.84, 0.97), rn(50, 90), rn(30, 50), R, 8, 0.2), jit(20, 35, 55));
  } else if (th === 4) {
    /* espace */
    add(CP.rect(0, 0, CDW, CDH), jit(250, 50, 10));
    for (let i = 0; i < 10 + Q(q * 14); i++)
      add(CP.star(rn(30, 970), rn(30, CDH - 30), rn(8, 16), rn(3, 6), 4), jit(55, 70, 88));
    const pl = G((cx, cy, r, hu, ring) => {
      if (ring) add(CP.ell(cx, cy, r * 1.9, r * 0.38, -0.35), jit(45, 50, 66));
      add(CP.ell(cx, cy, r, r), jit(hu, 55, 62));
      add(CP.ell(cx + r * 0.22, cy + r * 0.22, r * 0.72, r * 0.72), jit(hu, 55, 48));
      for (let k = 0; k < 3; k++)
        add(
          CP.ell(cx + rn(-0.5, 0.3) * r, cy + rn(-0.5, 0.4) * r, r * rn(0.08, 0.16), r * rn(0.06, 0.12)),
          jit(hu, 40, 72),
        );
    });
    [
      [220, 260, rn(110, 170), rn(0, 360), 1],
      [790, 380, rn(90, 150), rn(0, 360), 0],
      [230, 930, rn(80, 130), rn(0, 360), 0],
      [800, 1030, rn(70, 110), rn(0, 360), 1],
    ]
      .slice(0, 2 + Q(q * 2))
      .forEach((p) => pl(...p));
    const cx = 500,
      cy = CDH * 0.6;
    add(CP.poly([cx - 30, cy + 150, cx + 30, cy + 150, cx, cy + 270]), jit(30, 95, 58));
    add(CP.poly([cx - 16, cy + 150, cx + 16, cy + 150, cx, cy + 215]), jit(50, 95, 72));
    add(CP.poly([cx - 58, cy + 40, cx - 125, cy + 175, cx - 50, cy + 130]), jit(0, 75, 50));
    add(CP.poly([cx + 58, cy + 40, cx + 125, cy + 175, cx + 50, cy + 130]), jit(0, 75, 50));
    add(CP.ell(cx, cy, 64, 160), jit(220, 15, 90));
    add(CP.poly([cx - 52, cy - 95, cx, cy - 215, cx + 52, cy - 95]), jit(0, 75, 50));
    add(CP.rect(cx - 62, cy + 60, 124, 22), jit(0, 75, 50));
    add(CP.ell(cx, cy - 30, 32, 32), jit(210, 15, 70));
    add(CP.ell(cx, cy - 30, 22, 22), jit(200, 70, 60));
    ln(CP.curve(60, CDH * 0.1, 220, CDH * 0.14, 420, CDH * 0.05), 3);
    add(CP.ell(430, CDH * 0.05, 14, 14), jit(50, 40, 92));
  } else if (th === 5) {
    /* arc-en-ciel */
    sky(3 + Q(q * 3), 195, 215, 78, 94, 60);
    add(CP.ell(CDW * 0.86, CDH * 0.09, rn(50, 70), rn(50, 70)), jit(48, 95, 78));
    const cx = CDW / 2,
      cy = CDH * 0.58,
      H = [0, 22, 48, 120, 200, 250, 285];
    for (let i = 0; i < 7; i++)
      add(CP.sector(cx, cy, 0, 470 - i * 52, Math.PI, Math.PI * 2), cdHex(H[i], 80, 62));
    add(CP.sector(cx, cy, 0, 470 - 7 * 52, Math.PI, Math.PI * 2), cdHex(200, 55, 88));
    cloud(cx - 440, cy + 10, 170, 97);
    cloud(cx + 440, cy + 10, 170, 97);
    for (let i = 0; i < 1 + Q(q * 2); i++) cloud(rn(120, 880), rn(100, 260), rn(80, 130), 95);
    for (let i = 0; i < 4 + Q(q * 2); i++)
      add(
        CP.band(CDH * (0.58 + i * 0.07), rn(18, 35), rn(0.8, 1.6), rn(0, 6), CDH),
        jit(100 + i * 8, 50, 66 - i * 6),
      );
    for (let i = 0; i < 4 + Q(q * 6); i++) {
      const x = rn(60, 940),
        y = rn(CDH * 0.78, CDH * 0.96);
      ln(CP.line([x, y, x, y + 90]), 3);
      flower(x, y, rn(40, 75), rn(0, 360), ri(5, 8));
    }
  } else if (th === 6) {
    /* vitrail */
    add(CP.rect(0, 0, CDW, CDH), jit(240, 20, 14));
    const cols = 4 + Q(q * 3),
      cw = CDW / cols,
      hh = cw * 0.7,
      H = [0, 35, 50, 120, 200, 260, 310];
    for (let r = -1; r < CDH / hh + 1; r++)
      for (let c = -1; c <= cols; c++) {
        const x = c * cw + (r % 2 ? cw / 2 : 0),
          y = r * hh,
          hu = H[(((c + r * 2) % 7) + 7) % 7];
        add(
          CP.poly([x, y - hh, x + cw / 2, y, x, y + hh, x - cw / 2, y]),
          jit(hu, 70, 46 + ((r + c) % 2) * 10),
        );
        add(
          CP.poly([x, y - hh * 0.45, x + cw * 0.22, y, x, y + hh * 0.45, x - cw * 0.22, y]),
          jit(hu + 40, 75, 66),
        );
      }
    add(CP.ell(CDW / 2, CDH / 2, 210, 210), jit(240, 20, 14));
    add(CP.ell(CDW / 2, CDH / 2, 190, 190), jit(48, 80, 60));
    for (let i = 0; i < 8; i++)
      add(CP.petal(CDW / 2, CDH / 2, (i / 8) * Math.PI * 2, 180, 60), jit(i % 2 ? 340 : 200, 70, 52));
    add(CP.ell(CDW / 2, CDH / 2, 60, 60), jit(45, 90, 70));
    add(CP.star(CDW / 2, CDH / 2, 50, 22, 8), jit(0, 75, 50));
  } else if (th === 7) {
    /* marché de fruits */
    add(CP.rect(0, 0, CDW, CDH), jit(40, 40, 90));
    add(CP.rect(0, CDH * 0.5, CDW, CDH * 0.5), jit(30, 45, 52));
    for (let i = 1; i < 6; i++) ln(CP.line([0, CDH * (0.5 + i * 0.09), CDW, CDH * (0.5 + i * 0.09)]), 3);
    for (let i = 0; i < 8; i++) {
      const c = i % 2 ? jit(0, 70, 52) : jit(0, 0, 96);
      add(CP.rect(i * 125, 0, 125, 140), c);
      add(CP.ell(i * 125 + 62, 140, 62, 36), c);
    }
    const fr = [];
    for (let i = 0; i < 10 + Q(q * 12); i++)
      fr.push([rn(90, 910), CDH * rn(0.56, 0.94), rn(55, 85), ri(0, 5)]);
    fr.sort((a, b) => a[1] - b[1]);
    const fruit = G((x, y, s, t) => {
      const stem = () => {
        add(CP.rect(x - 3, y - s * 1.05, 6, s * 0.3), jit(25, 40, 30));
        add(CP.petal(x + 3, y - s * 0.9, -0.5, s * 0.5, s * 0.2), jit(115, 55, 45));
      };
      if (t === 0) {
        add(CP.ell(x, y, s, s * 0.92), jit(rn(-5, 10), 75, 52));
        add(CP.ell(x - s * 0.35, y - s * 0.3, s * 0.22, s * 0.14), jit(0, 60, 80));
        stem();
      } else if (t === 1) {
        add(CP.ell(x, y, s, s), jit(30, 95, 55));
        add(CP.ell(x - s * 0.35, y - s * 0.3, s * 0.2, s * 0.13), jit(40, 80, 80));
        add(CP.star(x, y - s * 0.95, s * 0.14, s * 0.06, 5), jit(110, 50, 35));
      } else if (t === 2) {
        add(CP.ell(x, y + s * 0.25, s * 0.85, s * 0.85), jit(65, 70, 58));
        add(CP.ell(x, y - s * 0.5, s * 0.5, s * 0.6), jit(65, 70, 58));
        add(CP.ell(x - s * 0.3, y + s * 0.1, s * 0.2, s * 0.3), jit(65, 50, 76));
        stem();
      } else if (t === 3) {
        add(CP.poly([x - s * 0.8, y - s * 0.5, x + s * 0.8, y - s * 0.5, x, y + s * 0.9]), jit(355, 80, 50));
        add(CP.star(x, y - s * 0.5, s * 0.55, s * 0.25, 6), jit(120, 55, 38));
        for (let k = 0; k < 4; k++)
          add(
            CP.ell(x + (k - 1.5) * s * 0.28, y + (k % 2 ? 0.1 : -0.15) * s, s * 0.06, s * 0.09),
            jit(50, 80, 80),
          );
      } else if (t === 4) {
        add(CP.ell(x, y, s * 1.1, s * 0.75), jit(55, 95, 60));
        add(CP.ell(x + s * 1.05, y, s * 0.15, s * 0.12), jit(55, 95, 60));
        add(CP.ell(x - s * 1.05, y, s * 0.15, s * 0.12), jit(55, 95, 60));
        add(CP.ell(x - s * 0.4, y - s * 0.25, s * 0.25, s * 0.12), jit(55, 80, 82));
      } else {
        const r = s * 0.28;
        [
          [0, 0],
          [-1, 0],
          [1, 0],
          [-0.5, 1],
          [0.5, 1],
          [0, 2],
        ].forEach((p, k) => {
          add(CP.ell(x + p[0] * r * 1.7, y - s * 0.4 + p[1] * r * 1.6, r, r), jit(285, 50, 40 + (k % 2) * 8));
        });
        add(CP.petal(x, y - s * 0.65, -Math.PI / 2, s * 0.5, s * 0.2), jit(110, 50, 40));
      }
    });
    fr.forEach((f) => fruit(...f));
  } else if (th === 8) {
    /* aurore boréale */
    sky(4 + Q(q * 3), 235, 265, 10, 26, 45);
    stars(8 + Q(q * 10), CDH * 0.4, 55);
    for (let i = 0; i < 4 + Q(q * 3); i++)
      add(
        CP.band(CDH * (0.1 + i * 0.07), rn(40, 70), rn(1, 2), rn(0, 6), CDH * 0.62),
        jit(130 + i * 22, 75, 34 + i * 3),
      );
    for (let k = 0; k < 3; k++) {
      const y = CDH * 0.58 + k * 60,
        P = [0, CDH];
      let x = 0;
      P.push(0, y + rn(-20, 20));
      while (x < CDW) {
        x += rn(60, 150);
        P.push(Math.min(CDW, x), y - rn(0, 170) * (1 - k * 0.15));
      }
      P.push(CDW, CDH);
      add(CP.poly(P), jit(225, 30, 20 + k * 5));
    }
    add(CP.band(CDH * 0.82, 16, 1.3, rn(0, 6), CDH), jit(215, 30, 92));
    add(CP.band(CDH * 0.9, 12, 2, rn(0, 6), CDH), jit(215, 25, 86));
    const bx = rn(300, 560),
      by = CDH * 0.93,
      bw = 260,
      bh = 170;
    add(CP.rect(bx, by - bh, bw, bh), jit(25, 45, 38));
    add(CP.poly([bx - 25, by - bh, bx + bw / 2, by - bh - 110, bx + bw + 25, by - bh]), jit(0, 0, 95));
    add(CP.rect(bx + bw * 0.7, by - bh - 90, 34, 70), jit(10, 40, 40));
    add(CP.rect(bx + bw * 0.4, by - bh * 0.6, bw * 0.2, bh * 0.6), jit(20, 45, 26));
    add(CP.rect(bx + bw * 0.1, by - bh * 0.75, bw * 0.2, bh * 0.25), jit(48, 95, 70));
    add(CP.rect(bx + bw * 0.7, by - bh * 0.75, bw * 0.2, bh * 0.25), jit(48, 95, 70));
    ln(
      CP.curve(bx + bw * 0.72, by - bh - 95, bx + bw * 0.6, by - bh - 170, bx + bw * 0.78, by - bh - 230),
      3,
    );
    for (let i = 0; i < 4 + Q(q * 5); i++) {
      const x = rn(30, 970);
      if (x > bx - 70 && x < bx + bw + 70) continue;
      pine(x, rn(CDH * 0.84, CDH * 1.0), rn(200, 380), 150, 18);
    }
  } else {
    /* château dans les nuages */
    sky(5 + Q(q * 4), 205, 260, 70, 92, 60);
    add(CP.ell(CDW * 0.15, CDH * 0.12, rn(50, 70), rn(50, 70)), jit(48, 95, 80));
    for (let i = 0; i < 2; i++) cloud(rn(150, 850), rn(100, 330), rn(90, 140), 95);
    const cx = CDW / 2,
      y0 = CDH * 0.74,
      st = () => jit(235, 10, 76);
    const tw = G((x, w, h, hu) => {
      add(CP.rect(x, y0 - h, w, h), st());
      const n = Math.max(2, Math.floor(w / 30));
      for (let k = 0; k < n; k++) add(CP.rect(x + k * (w / n), y0 - h - 24, w / n - 8, 24), st());
      const top = y0 - h - 24,
        pk = top - w * 1.1;
      add(CP.poly([x - w * 0.15, top, x + w / 2, pk, x + w * 1.15, top]), jit(hu, 60, 48));
      ln(CP.line([x + w / 2, pk, x + w / 2, pk - 70]), 3);
      add(CP.poly([x + w / 2, pk - 70, x + w / 2 + 55, pk - 52, x + w / 2, pk - 34]), jit(0, 75, 55));
      add(CP.rect(x + w * 0.35, y0 - h * 0.7, w * 0.3, w * 0.3), jit(48, 90, 70));
      add(CP.ell(x + w / 2, y0 - h * 0.7, w * 0.15, w * 0.15), jit(48, 90, 70));
    });
    tw(cx - 460, 90, 220, 200);
    tw(cx + 370, 90, 220, 200);
    add(CP.rect(cx - 340, y0 - 170, 680, 170), st());
    for (let k = 0; k < 13; k++) add(CP.rect(cx - 340 + k * 52.3, y0 - 194, 44, 24), st());
    tw(cx - 340, 130, 320, 0);
    tw(cx + 210, 130, 320, 0);
    if (q > 0.4) {
      tw(cx - 200, 70, 250, 280);
      tw(cx + 130, 70, 250, 280);
    }
    tw(cx - 90, 180, 430, 350);
    add(CP.rect(cx - 60, y0 - 140, 120, 140), jit(25, 45, 30));
    add(CP.ell(cx, y0 - 140, 60, 60), jit(25, 45, 30));
    for (let k = -1; k <= 1; k++) ln(CP.line([cx + k * 30, y0 - 190, cx + k * 30, y0]), 3);
    cloud(cx - 300, y0 + 10, 260, 98);
    cloud(cx + 300, y0 + 30, 260, 97);
    cloud(cx, y0 + 90, 340, 99);
    for (let i = 0; i < 2 + Q(q * 3); i++)
      add(CP.band(CDH * (0.88 + i * 0.04), 14, 1.3, rn(0, 6), CDH), cdHex(215, 30, 96 - i * 3));
    for (let i = 0; i < 2 + Q(q * 3); i++) {
      const x = rn(80, 920),
        y = rn(80, CDH * 0.3);
      ln(CP.curve(x - 25, y, x - 12, y - 18, x, y), 3);
      ln(CP.curve(x, y, x + 12, y - 18, x + 25, y), 3);
    }
  }
  cdKeep(S);
  return {
    A: S.filter((s) => s.ln || (s.c !== "#00000000" && s.c !== "#000")),
    get S() {
      return this.A.filter((s) => !s.ln);
    },
    L: [],
  };
}
function cdScene(e) {
  if (e >= CDO) return cdScene2(e);
  const t = cdRng(7919 * e + 13),
    a = Math.min(1, e / 39),
    s = e % 10,
    n = [],
    o = (e, t) => n.push({ d: e, c: t }),
    i = (e, t = 3) => n.push({ d: e, w: t, ln: 1 }),
    r = (e, a, s, n = 6) => cdHex(e + (t() - 0.5) * n, a + (t() - 0.5) * n, s + (t() - 0.5) * n),
    l = (e, a) => e + t() * (a - e),
    c = (e, t) => Math.floor(l(e, t + 1)),
    d = (e, t, a, s, n, i = 45) => {
      for (let r = 0; r < e; r++) {
        const c = r / e;
        o(
          CP.band(r ? CDH * (0.02 + 0.45 * c) : -30, l(4, 18), l(0.6, 1.6), l(0, 6), CDH),
          cdHex(t + (a - t) * c, i, s + (n - s) * c),
        );
      }
    },
    f = (e, t, a, s, n) => {
      for (let i = 0; i < e; i++) {
        const e = t + i * a * 0.35,
          c = [0, CDH];
        let d = 0;
        for (c.push(0, e + l(-30, 30)); d < CDW;)
          ((d += l(60, 170)), c.push(Math.min(CDW, d), e - l(0, a) * (1 - 0.12 * i)));
        (c.push(CDW, CDH), o(CP.poly(c), r(s, 30, n - 6 * i)));
      }
    },
    u =
      (e) =>
      (...t) => {
        const a = n.length,
          s = e(...t);
        return (cdFt2(n, a), s);
      },
    h = u((e, t, a, s) => {
      const n = c(5, 7);
      for (let i = 0; i < n; i++) {
        const l = Math.PI + ((i + 0.5) / n) * Math.PI;
        o(CP.petal(e, t, l, a, 0.32 * a), r(s, 62, 80 - (i % 2) * 8));
      }
      for (let i = 0; i < n - 1; i++) {
        const l = Math.PI + ((i + 1) / n) * Math.PI;
        o(CP.petal(e, t + 0.05 * a, l, 0.8 * a, 0.28 * a), r(s, 66, 68));
      }
      o(CP.ell(e, t - 0.12 * a, 0.22 * a, 0.12 * a), r(52, 80, 62));
      for (let n = 0; n < 3; n++)
        o(CP.petal(e, t + 0.08 * a, -Math.PI / 2 + 0.5 * (n - 1), 0.62 * a, 0.24 * a), r(s, 70, 58 + 5 * n));
    }),
    p = u((e, t, a, s, n, l, c) => {
      (o(CP.half(e, t, a, s, n, 1), r(l, 45, c)),
        o(CP.half(e, t, a, s, n, -1), r(l, 48, c - 9)),
        i(CP.line([e, t, e + Math.cos(a) * s, t + Math.sin(a) * s]), 2));
      for (let o = 1; o < 4; o++) {
        const r = (s * o) / 4.4,
          l = e + Math.cos(a) * r,
          c = t + Math.sin(a) * r;
        [1, -1].forEach((e) =>
          i(CP.line([l, c, l + Math.cos(a + 0.7 * e) * n * 0.7, c + Math.sin(a + 0.7 * e) * n * 0.7]), 1.4),
        );
      }
    }),
    m = u((e, t, a, s, n) => {
      o(CP.rect(e - 0.05 * a, t - 0.18 * a, 0.1 * a, 0.2 * a), r(25, 40, 30));
      const i = c(3, 4);
      for (let l = 0; l < i; l++) {
        const i = t - 0.15 * a - l * a * 0.25,
          c = a * (0.42 - 0.08 * l);
        o(CP.poly([e - c, i, e, i - 0.42 * a, e + c, i]), r(s, 40, n + 4 * l));
      }
    }),
    b = u((e, t, a, s, n) => {
      (o(CP.rect(e, t - s, a, s), r(n, 45, 62)),
        o(CP.poly([e - 0.1 * a, t - s, e + a / 2, t - s - 0.55 * a, e + 1.1 * a, t - s]), r(n + 180, 35, 40)),
        o(
          CP.poly([
            e - 0.1 * a,
            t - s,
            e + a / 2,
            t - s - 0.55 * a,
            e + 1.1 * a,
            t - s,
            e + 1.02 * a,
            t - s + 8,
            e + a / 2,
            t - s - 0.42 * a,
            e - 0.02 * a,
            t - s + 8,
          ]),
          "#f4f6fb",
        ),
        o(CP.rect(e + 0.38 * a, t - 0.5 * s, 0.24 * a, 0.5 * s), r(25, 45, 32)),
        o(CP.rect(e + 0.1 * a, t - 0.8 * s, 0.2 * a, 0.2 * s), r(48, 90, 68)),
        o(CP.rect(e + 0.7 * a, t - 0.8 * s, 0.2 * a, 0.2 * s), r(48, 90, 64)),
        i(CP.line([e + 0.2 * a, t - 0.8 * s, e + 0.2 * a, t - 0.6 * s]), 1.6),
        i(CP.line([e + 0.8 * a, t - 0.8 * s, e + 0.8 * a, t - 0.6 * s]), 1.6));
    }),
    g = u((e, t, a, s, n) => {
      for (let i = 0; i < n; i++)
        o(CP.petal(e, t, (i / n) * Math.PI * 2 + l(0, 0.2), a, 0.42 * a), r(s, 65, 70 - (i % 2) * 8));
      (o(CP.ell(e, t, 0.28 * a, 0.28 * a), r(45, 85, 58)),
        o(CP.ell(e - 0.06 * a, t - 0.06 * a, 0.1 * a, 0.1 * a), r(45, 85, 74)));
    }),
    E = u((e, a, s, n) => {
      (o(CP.blob(e, a, s, 0.38 * s, t, 10, 0.18), cdHex(220, 30, n)),
        o(CP.blob(e - 0.3 * s, a + 0.08 * s, 0.45 * s, 0.25 * s, t, 8, 0.15), cdHex(220, 25, n - 6)));
    }),
    y = u((e, a, s, n) => {
      const i = [],
        d = c(9, 14);
      for (let n = 0; n < d; n++) {
        const n = t() * Math.PI * 2,
          o = t() * s * 0.75;
        i.push([e + Math.cos(n) * o, a + Math.sin(n) * o * 1.15]);
      }
      (i.sort((e, t) => e[1] - t[1]),
        i.forEach(([e, t]) => {
          const a = s * l(0.24, 0.3);
          (o(CP.ell(e, t, a, a), r(n, 45, 30 + l(0, 18))),
            o(CP.ell(e - 0.35 * a, t - 0.35 * a, 0.3 * a, 0.22 * a), r(n, 30, 70)));
        }));
    }),
    v = u((e, t, a, s, n) => {
      (o(
        CP.poly([e - n * a * 0.9, t, e - n * a * 1.4, t - 0.4 * a, e - n * a * 1.4, t + 0.4 * a]),
        r(s, 70, 50),
      ),
        o(CP.ell(e, t, a, 0.5 * a), r(s, 75, 60)));
      for (let n = 0; n < 3; n++)
        o(CP.rect(e - 0.5 * a + n * a * 0.35, t - 0.45 * a, 0.12 * a, 0.9 * a), r(s + 30, 40, 92));
      (o(CP.petal(e, t - 0.4 * a, -Math.PI / 2 - 0.6 * n, 0.5 * a, 0.18 * a), r(s, 70, 45)),
        o(CP.ell(e + n * a * 0.55, t - 0.1 * a, 0.1 * a, 0.1 * a), "#ffffff"),
        o(CP.ell(e + n * a * 0.58, t - 0.1 * a, 0.05 * a, 0.05 * a), "#26243a"));
    });
  if (
    (u((e, t, a, s) => {
      const n = s.length;
      for (let s = 0; s < n; s++) {
        const i = -Math.PI / 2 - Math.PI / 2 + (s * Math.PI) / n,
          r = i + Math.PI / n;
        o(CP.sector(e, t, 0, a, i + Math.PI / 2 - Math.PI / 2, r), "#000");
      }
    }),
    0 === s)
  ) {
    (d(3 + Math.round(4 * a), 150, 190, 86, 94, 30),
      o(CP.ell(CDW * l(0.35, 0.6), 0.36 * CDH, l(240, 300), l(240, 300)), r(140, 30, 86)),
      f(2 + Math.round(2 * a), 0.5 * CDH, 160, 200, 78));
    for (let e = 0; e < 4 + Math.round(5 * a); e++)
      o(CP.band(CDH * (0.6 + 0.05 * e), 6, l(1, 3), l(0, 6), CDH), r(195, 40, 82 - 3 * e));
    const t =
        10 === e
          ? [
              [l(210, 330), l(0.68 * CDH, 0.74 * CDH)],
              [l(650, 790), l(0.8 * CDH, 0.88 * CDH)],
            ]
          : [],
      s = [];
    for (let n = 0; n < 3 + Math.round(5 * a) + (10 === e ? 3 : 0); n++) {
      let a = l(80, 920),
        n = l(0.68 * CDH, 0.95 * CDH);
      const c = l(50, 90);
      if (10 === e)
        for (
          let e = 0;
          e < 80 &&
          (t.some((e) => Math.hypot(e[0] - a, e[1] - n) < 250) ||
            s.some((e) => Math.hypot(e[0] - a, e[1] - n) < 200));
          e++
        )
          ((a = l(80, 920)), (n = l(0.66 * CDH, 0.97 * CDH)));
      (s.push([a, n]),
        o(CP.sector(a, n, 0, c, 0.3, 2 * Math.PI - 0.05).replace(/^M/, "M"), r(110, 42, 48)),
        i(CP.line([a, n, a + 0.9 * c, n]), 1.5));
    }
    const n = 1 + Math.round(2 * a);
    for (let a = 0; a < n; a++)
      10 === e && a < 2
        ? h(t[a][0], t[a][1], l(170, 230) / (1 + 0.25 * a), l(330, 350))
        : h(l(280, 720), l(0.64 * CDH, 0.8 * CDH), l(200, 280) / (1 + 0.25 * a), l(330, 350));
    for (let e = 0; e < 2; e++)
      i(CP.curve(l(300, 700), l(200, 400), l(300, 700), l(150, 350), l(300, 700), l(200, 400)), 2);
  } else if (1 === s) {
    d(2 + Math.round(3 * a), 200, 215, 90, 96, 35);
    for (let e = 0; e < 3; e++) E(l(150, 850), l(150, 600), l(90, 150), 94);
    o(
      CP.poly([
        0,
        0.16 * CDH,
        0.6 * CDW,
        0.2 * CDH,
        CDW,
        0.08 * CDH,
        CDW,
        0.12 * CDH,
        0.6 * CDW,
        0.25 * CDH,
        0,
        0.22 * CDH,
      ]),
      r(30, 40, 38),
    );
    for (let e = 0; e < 4 + Math.round(5 * a); e++)
      p(l(60, 940), l(0.12 * CDH, 0.45 * CDH), l(0, 2 * Math.PI), l(120, 200), l(40, 60), l(95, 125), 46);
    const e = 2 + Math.round(3 * a);
    for (let t = 0; t < e; t++) {
      const a = l(200, 800),
        s = CDH * (0.4 + (0.42 * t) / e) + l(0, 60);
      (o(CP.line([a, s - 140, a, s]), "#00000000"),
        i(CP.line([a, s - 150, a + l(-20, 20), s - 60]), 3),
        y(a, s, l(170, 230), l(270, 345)));
    }
    for (let e = 0; e < 2 + Math.round(2 * a); e++)
      o(CP.band(CDH * (0.88 + 0.03 * e), 5, 1.2, l(0, 6), CDH), r(100, 30, 80 - 6 * e));
  } else if (2 === s) {
    d(2 + Math.round(2 * a), 90, 120, 92, 96, 25);
    for (let e = 0; e < 3 + Math.round(3 * a); e++) {
      const e = l(20, 980),
        t = l(40, 60);
      for (let a = -20; a < 0.8 * CDH; a += l(160, 240))
        (o(CP.rect(e, a, t, l(150, 230)), r(100, 45, 52)), i(CP.line([e - 4, a, e + t + 4, a]), 3));
    }
    for (let e = 0; e < 5 + Math.round(6 * a); e++) {
      const e = l(0, 1e3),
        t = l(0, 0.4 * CDH);
      o(CP.petal(e, t, l(0, 2 * Math.PI), l(90, 150), l(14, 22)), r(115, 45, 45));
    }
    for (let e = 0; e < 4 + Math.round(4 * a); e++)
      o(
        CP.ell(CDW / 2, 0.86 * CDH, CDW * (0.7 - 0.08 * e), CDH * (0.12 - 0.012 * e)),
        r(195, 30, 80 - 3 * e),
      );
    const e = 3 + Math.round(2 * a);
    let t = 0.82 * CDH;
    for (let a = 0; a < e; a++) {
      const e = l(220, 300) * (1 - 0.12 * a),
        s = 0.42 * e;
      (o(CP.ell(0.42 * CDW, t - 0.5 * s, e, 0.55 * s), r(30, 8, 62 - 4 * a)),
        o(CP.ell(0.42 * CDW - 0.3 * e, t - 0.7 * s, 0.3 * e, 0.15 * s), r(30, 8, 75)),
        (t -= 0.95 * s));
    }
    (o(CP.rect(0.75 * CDW, 0.66 * CDH, 100, 130), r(40, 40, 88)),
      o(CP.ell(0.75 * CDW + 50, 0.66 * CDH, 50, 14), r(40, 30, 80)),
      o(CP.petal(0.75 * CDW + 50, 0.655 * CDH, -Math.PI / 2, 70, 18), r(40, 95, 60)),
      o(CP.petal(0.75 * CDW + 50, 0.655 * CDH, -Math.PI / 2, 40, 9), r(30, 95, 52)),
      g(0.2 * CDW, 0.68 * CDH, 110, l(0, 40), 5));
  } else if (3 === s) {
    (d(5 + Math.round(6 * a), 10, 45, 62, 86, 75),
      o(CP.ell(CDW * l(0.3, 0.7), 0.4 * CDH, l(90, 140), l(90, 140)), r(45, 95, 70)),
      f(3 + Math.round(3 * a), 0.42 * CDH, 220, 260, 52));
    for (let e = 0; e < 3 + Math.round(3 * a); e++)
      o(CP.band(CDH * (0.72 + 0.035 * e), 4, l(1, 3), l(0, 6), CDH), r(230, 35, 50 + 4 * e));
    for (let e = 0; e < 4 + Math.round(8 * a); e++)
      m(l(30, 970), l(0.8 * CDH, 1.02 * CDH), l(240, 420), l(130, 160), 24);
  } else if (4 === s) {
    (d(4 + Math.round(4 * a), 230, 260, 22, 40, 45),
      o(CP.ell(0.78 * CDW, 0.14 * CDH, 80, 80), r(50, 70, 86)),
      o(CP.ell(0.81 * CDW, 0.13 * CDH, 70, 70), cdHex(240, 45, 26)));
    for (let e = 0; e < 6 + Math.round(10 * a); e++)
      o(CP.star(l(30, 970), l(30, 0.35 * CDH), l(10, 18), l(4, 7), 4), r(50, 80, 88));
    for (let e = 0; e < 3; e++)
      o(CP.band(CDH * (0.5 + 0.06 * e), 20, l(0.8, 1.6), l(0, 6), CDH), r(215, 25, 90 - 4 * e));
    const t = 3 + Math.round(4 * a),
      s = [];
    for (let e = 0; e < t; e++) {
      const t = l(170, 250) / (1 + 0.12 * e),
        a = l(0, CDW - t),
        n = l(0.66 * CDH, 0.92 * CDH),
        o = t * l(0.7, 0.95),
        i = l(0, 360);
      (s.push([a - 0.12 * t, a + 1.12 * t]), b(a, n, t, o, i));
    }
    const n = [];
    for (let t = 0; t < 3 + Math.round(4 * a); t++) {
      let t = l(30, 970);
      if (4 === e) {
        const e = () => s.some((e) => t > e[0] - 70 && t < e[1] + 70) || n.some((e) => Math.abs(t - e) < 120);
        for (let a = 0; a < 200 && e(); a++) t = l(30, 970);
        if (e()) continue;
      }
      (n.push(t), m(t, l(0.7 * CDH, CDH), l(140, 220), 150, 30));
    }
  } else if (5 === s) {
    o(CP.rect(0, 0, CDW, CDH), r(260, 30, 90));
    const e = CDW / 2,
      t = CDH / 2,
      s = 5 + Math.round(4 * a),
      n = l(0, 360);
    let i = 70;
    o(CP.ell(e, t, i, i), r(n, 70, 60));
    for (let a = 0; a < s; a++) {
      const d = 8 + 2 * c(0, 4),
        f = i + (360 / s) * l(0.85, 1.1);
      for (let s = 0; s < d; s++) {
        const l = (s / d) * Math.PI * 2,
          c = ((s + 1) / d) * Math.PI * 2;
        a % 2
          ? o(
              CP.petal(
                e + Math.cos(l) * i,
                t + Math.sin(l) * i,
                l + Math.PI / d,
                1.2 * (f - i),
                0.35 * (f - i),
              ),
              r(n + 28 * a, 60, 70 - 3 * a),
            )
          : (o(CP.sector(e, t, i, f, l, c), r(n + 28 * a + (s % 2) * 14, 55, 62 + (s % 2) * 10)),
            o(
              CP.ell(
                e + (Math.cos((l + c) / 2) * (i + f)) / 2,
                t + (Math.sin((l + c) / 2) * (i + f)) / 2,
                0.18 * (f - i),
                0.18 * (f - i),
              ),
              r(n + 180, 50, 80),
            ));
      }
      i = f;
    }
    for (let e = 0; e < 4; e++) g(e % 2 ? CDW - 60 : 60, e < 2 ? 60 : CDH - 60, 50, n + 90, 6);
  } else if (6 === s) {
    d(3 + Math.round(3 * a), 190, 210, 80, 92, 45);
    for (let e = 0; e < 2; e++) E(l(150, 850), l(120, 300), l(90, 140), 95);
    for (let e = 0; e < 4 + Math.round(3 * a); e++)
      o(CP.band(CDH * (0.62 + 0.06 * e), 12, l(1, 3), l(0, 6), CDH), r(100, 45, 60 - 4 * e));
    for (let e = 0; e < 4 + Math.round(6 * a); e++) {
      const e = l(60, 940),
        t = l(0.66 * CDH, 0.95 * CDH);
      (i(CP.line([e, t, e, t + 120]), 3), g(e, t, l(60, 110), l(0, 360), c(5, 8)));
    }
    const t = 1 + Math.round(2 * a);
    for (let e = 0; e < t; e++) {
      const t = l(280, 720),
        a = CDH * (0.22 + 0.15 * e),
        s = l(200, 270) / (1 + 0.3 * e),
        n = l(0, 360),
        i = l(-0.3, 0.3);
      ([1, -1].forEach((e) => {
        (o(CP.petal(t, a, -Math.PI / 2 + 1 * e + i, s, 0.55 * s), r(n, 70, 60)),
          o(CP.petal(t, a, Math.PI / 2 + 0.6 * e + i, 0.7 * s, 0.35 * s), r(n + 20, 70, 55)),
          o(CP.ell(t + e * s * 0.5, a - 0.45 * s, 0.12 * s, 0.12 * s), r(n + 180, 60, 85)),
          o(CP.ell(t + e * s * 0.3, a + 0.4 * s, 0.08 * s, 0.08 * s), r(n + 180, 60, 80)));
      }),
        o(CP.ell(t, a, 0.07 * s, 0.42 * s), r(30, 30, 25)));
    }
    if (6 === e)
      for (let e = 0; e < 10; e++) {
        const t = 60 + ((e + l(0.1, 0.9)) * (CDW - 120)) / 10,
          a = l(0.76 * CDH, 0.95 * CDH);
        (i(CP.line([t, a, t, a + 70]), 3), g(t, a, l(34, 58), l(0, 360), c(5, 7)));
      }
  } else if (7 === s) {
    for (let e = 0; e < 5 + Math.round(4 * a); e++)
      o(CP.band(CDH * (0.1 * e), 10, l(1, 2), l(0, 6), CDH), r(195, 65, 72 - 4 * e));
    (o(CP.band(0.82 * CDH, 18, 1.3, 1, CDH), r(40, 55, 78)),
      o(CP.band(0.9 * CDH, 12, 2, 2, CDH), r(38, 50, 72)));
    const s = 4 + Math.round(5 * a);
    for (let a = 0; a < s; a++) {
      const n = 7 === e ? 40 + ((a + l(0.15, 0.85)) * (CDW - 80)) / s : l(40, 960),
        i = CDH * (7 === e ? l(0.9, 0.97) : l(0.78, 0.92)),
        d = l(-20, 30),
        f = 7 === e ? 34 : 60;
      for (let a = 0; a < c(3, 5); a++)
        o(
          CP.blob(n + l(-f, f), i - (7 === e ? l(0, 60) : l(20, 200)), l(25, 45), l(50, 90), t, 9, 0.3),
          r(d, 70, 62),
        );
    }
    for (let e = 0; e < 3 + Math.round(4 * a); e++) {
      const e = l(30, 970);
      (o(CP.band(0, 0, 1, 0, 0), "#00000000"),
        o(CP.petal(e, 0.92 * CDH, -Math.PI / 2 + l(-0.2, 0.2), l(220, 380), l(18, 28)), r(130, 45, 40)));
    }
    for (let e = 0; e < 3 + Math.round(5 * a); e++)
      v(l(160, 840), l(0.12 * CDH, 0.7 * CDH), l(80, 130), l(0, 60), t() < 0.5 ? 1 : -1);
    for (let e = 0; e < 5 + Math.round(6 * a); e++) {
      const e = l(8, 18);
      o(CP.ell(l(30, 970), l(30, 0.6 * CDH), e, e), cdHex(195, 60, 92));
    }
  } else if (8 === s) {
    d(4 + Math.round(5 * a), 200, 30, 82, 90, 55);
    for (let e = 0; e < 3 + Math.round(2 * a); e++) E(l(100, 900), l(150, 0.6 * CDH), l(80, 140), 96);
    for (let e = 0; e < 3 + Math.round(2 * a); e++)
      o(CP.band(CDH * (0.8 + 0.05 * e), 25, l(0.6, 1.4), l(0, 6), CDH), r(110, 40, 58 - 5 * e));
    const e = 2 + Math.round(3 * a);
    for (let t = 0; t < e; t++) {
      const a = l(220, 780),
        s = CDH * (0.2 + (0.45 * t) / e),
        n = l(150, 220) / (1 + 0.2 * t),
        c = [l(0, 360), l(0, 360), l(0, 360)],
        d = 6;
      for (let e = 0; e < d; e++) {
        const t = (2 * e) / d - 1,
          i = (2 * (e + 1)) / d - 1;
        for (let e = 0; e <= 10; e++) (Math.PI, Math.PI);
        const l = [];
        for (let e = 0; e <= 12; e++) {
          const o = -Math.PI / 2 + (e / 12) * Math.PI,
            i = Math.cos(o);
          l.push(a + n * t * i, s + n * Math.sin(o));
        }
        for (let e = 12; e >= 0; e--) {
          const t = -Math.PI / 2 + (e / 12) * Math.PI,
            o = Math.cos(t);
          l.push(a + n * i * o, s + n * Math.sin(t));
        }
        o(CP.poly(l), r(c[e % 3], 70, 60 + (e % 2) * 8));
      }
      (o(
        CP.poly([
          a - 0.35 * n,
          s + 0.95 * n,
          a + 0.35 * n,
          s + 0.95 * n,
          a + 0.2 * n,
          s + 1.2 * n,
          a - 0.2 * n,
          s + 1.2 * n,
        ]),
        r(c[0], 60, 50),
      ),
        o(CP.rect(a - 0.18 * n, s + 1.35 * n, 0.36 * n, 0.25 * n), r(30, 45, 40)),
        i(CP.line([a - 0.2 * n, s + 1.2 * n, a - 0.16 * n, s + 1.35 * n]), 2),
        i(CP.line([a + 0.2 * n, s + 1.2 * n, a + 0.16 * n, s + 1.35 * n]), 2));
    }
  } else {
    (o(CP.rect(0, 0, CDW, 0.6 * CDH), r(35, 50, 88)),
      o(CP.rect(0.15 * CDW, 0.06 * CDH, 0.7 * CDW, 0.34 * CDH), r(205, 55, 78)),
      o(CP.rect(0.15 * CDW, 0.06 * CDH, 0.7 * CDW, 0.12 * CDH), r(205, 55, 84)),
      i(CP.line([0.5 * CDW, 0.06 * CDH, 0.5 * CDW, 0.4 * CDH]), 5),
      i(CP.line([0.15 * CDW, 0.23 * CDH, 0.85 * CDW, 0.23 * CDH]), 5));
    const e = 8 + Math.round(6 * a),
      t = CDW / e;
    for (let a = 0; a < Math.ceil((0.4 * CDH) / t); a++)
      for (let s = 0; s < e; s++)
        o(CP.rect(s * t, 0.6 * CDH + a * t, t, t), (a + s) % 2 ? r(0, 60, 62) : r(0, 30, 92));
    const s = 0.36 * CDW,
      n = 0.64 * CDH;
    (o(CP.ell(s, n, 200, 160), r(l(0, 360), 45, 62)),
      o(CP.ell(s - 40, n - 50, 80, 40), r(0, 0, 95)),
      o(
        CP.poly([s + 180, n - 20, s + 300, n - 120, s + 310, n - 100, s + 200, n + 40]),
        r(l(0, 360), 45, 55),
      ),
      o(CP.ell(s, n - 160, 90, 26), r(30, 40, 50)),
      o(CP.ell(s, n - 190, 22, 22), r(30, 40, 45)));
    for (let e = 0; e < 2 + Math.round(2 * a); e++) {
      const e = CDW * l(0.62, 0.85),
        t = CDH * l(0.72, 0.92);
      (o(CP.ell(e, t + 40, 110, 26), r(0, 0, 92)),
        o(CP.poly([e - 70, t - 60, e + 70, t - 60, e + 55, t + 40, e - 55, t + 40]), r(l(0, 360), 55, 60)),
        o(CP.ell(e, t - 60, 70, 18), r(25, 55, 35)),
        i(CP.curve(e - 20, t - 90, e, t - 140, e - 10, t - 190), 3));
    }
    for (let e = 0; e < 3 + Math.round(3 * a); e++) {
      const e = l(80, 920),
        t = CDH * l(0.88, 0.97),
        a = l(40, 60);
      o(CP.ell(e, t, a, 0.9 * a), r(32, 60, 60));
      for (let s = 0; s < 4; s++)
        o(CP.ell(e + l(0.5 * -a, 0.5 * a), t + l(0.4 * -a, 0.4 * a), 8, 8), r(25, 60, 25));
    }
  }
  return (
    cdKeep(n),
    {
      A: n.filter((e) => e.ln || ("#00000000" !== e.c && "#000" !== e.c)),
      get S() {
        return this.A.filter((e) => !e.ln);
      },
      L: [],
    }
  );
}
function cdPal(e, t) {
  const a = (e) => {
      const t = parseInt(e.slice(1), 16);
      return [t >> 16, (t >> 8) & 255, 255 & t];
    },
    s = [...new Set(e.map((e) => e.c))].map((t) => ({
      h: t,
      v: a(t),
      n: e.filter((e) => e.c === t).length,
      m: [t],
    })),
    n = (e, t) => {
      const a = (e.v[0] + t.v[0]) / 2;
      return Math.sqrt(
        (2 + a / 256) * (e.v[0] - t.v[0]) ** 2 +
          4 * (e.v[1] - t.v[1]) ** 2 +
          (2 + (255 - a) / 256) * (e.v[2] - t.v[2]) ** 2,
      );
    };
  for (; s.length > t;) {
    let e = 0,
      t = 1,
      a = 1e9;
    for (let o = 0; o < s.length; o++)
      for (let i = o + 1; i < s.length; i++) {
        const r = n(s[o], s[i]);
        r < a && ((a = r), (e = o), (t = i));
      }
    const o = s[e],
      i = s[t],
      r = o.n + i.n;
    ((o.v = o.v.map((e, t) => (e * o.n + i.v[t] * i.n) / r)),
      (o.n = r),
      (o.m = o.m.concat(i.m)),
      s.splice(t, 1));
  }
  (s.forEach((e) => {
    e.h = "#" + e.v.map((e) => Math.round(e).toString(16).padStart(2, "0")).join("");
    const [t, a, s] = e.v.map((e) => e / 255),
      n = Math.max(t, a, s),
      o = Math.min(t, a, s),
      i = (n + o) / 2;
    let r = 0;
    if (n !== o) {
      const e = n - o;
      r = n === t ? ((a - s) / e) % 6 : n === a ? (s - t) / e + 2 : (t - a) / e + 4;
    }
    e.k = (n - o < 0.08 ? 1e3 : 10 * Math.round(((60 * r + 360) % 360) / 30)) + i;
  }),
    s.sort((e, t) => e.k - t.k));
  const o = {};
  return (s.forEach((e, t) => e.m.forEach((e) => (o[e] = t + 1))), { pal: s.map((e) => e.h), map: o });
}
function cdBuild(e) {
  const t = cdScene(e),
    a = cdK(e),
    { pal: s, map: n } = cdPal(t.S, a),
    o = [],
    i = [];
  t.A.forEach((e) => {
    e.ln
      ? i.push({ p: new Path2D(e.d), w: e.w })
      : (i.push({ r: o.length }), o.push({ p: new Path2D(e.d), c: n[e.c], d: e.d }));
  });
  const r = Math.round(CDW / 2),
    l = Math.round(CDH / 2),
    c = document.createElement("canvas");
  ((c.width = r), (c.height = l));
  const d = c.getContext("2d", { willReadFrequently: !0 });
  d.setTransform(0.5, 0, 0, 0.5, 0, 0);
  const f = new Map();
  o.forEach((e, t) => {
    const a = ((e) => (((2654435761 * (e + 1)) >>> 0) % 16777215) + 1)(t);
    (f.set(a, t), (d.fillStyle = "#" + a.toString(16).padStart(6, "0")), d.fill(e.p));
  });
  const u = d.getImageData(0, 0, r, l).data,
    h = new Int32Array(r * l).fill(-1);
  for (let e = 0; e < r * l; e++) {
    const t = (u[4 * e] << 16) | (u[4 * e + 1] << 8) | u[4 * e + 2],
      a = f.get(t);
    void 0 !== a && (h[e] = a);
  }
  const p = new Float32Array(r * l);
  for (let e = 0; e < r * l; e++) p[e] = h[e] < 0 ? 0 : 1e9;
  const m = (e, t, a) => {
    p[t] + a < p[e] && (p[e] = p[t] + a);
  };
  for (let e = 0; e < l; e++)
    for (let t = 0; t < r; t++) {
      const a = e * r + t;
      if (!p[a]) continue;
      const s = h[a];
      0 !== t && 0 !== e && h[a - 1] === s && h[a - r] === s
        ? (m(a, a - 1, 1), m(a, a - r, 1), m(a, a - r - 1, 1.414), t < r - 1 && m(a, a - r + 1, 1.414))
        : (p[a] = 1);
    }
  for (let e = l - 1; e >= 0; e--)
    for (let t = r - 1; t >= 0; t--) {
      const a = e * r + t;
      if (!p[a]) continue;
      const s = h[a];
      t !== r - 1 && e !== l - 1 && h[a + 1] === s && h[a + r] === s
        ? (m(a, a + 1, 1), m(a, a + r, 1), m(a, a + r + 1, 1.414), t > 0 && m(a, a + r - 1, 1.414))
        : (p[a] = 1);
    }
  const b = o.map(() => ({ d: 0, i: -1, n: 0 }));
  for (let e = 0; e < r * l; e++) {
    const t = h[e];
    if (t < 0) continue;
    const a = b[t];
    (a.n++, p[e] > a.d && ((a.d = p[e]), (a.i = e)));
  }
  return (
    o.forEach((e, t) => {
      const a = b[t];
      ((e.n = a.n),
        a.i >= 0 &&
          ((e.lx = 2 * ((a.i % r) + 0.5)),
          (e.ly = 2 * (Math.floor(a.i / r) + 0.5)),
          (e.fs = Math.min(110, 2 * a.d * 1.15))),
        (e.pre = a.n < 30 || e.fs < 9));
    }),
    { R: o, DR: i, pal: s, id: h, bw: r, bh: l }
  );
}
const CD = {
  l: 0,
  M: null,
  f: null,
  sel: 1,
  cv: null,
  x: null,
  z: 1,
  ox: 0,
  oy: 0,
  fit: 1,
  pt: {},
  pz: null,
  tap: null,
  ok: !1,
  hl: null,
  pat: null,
};
function cdSave() {
  if (!CD.M) return;
  let e = "";
  for (let t = 0; t < CD.f.length; t += 5) {
    let a = 0;
    for (let e = 0; e < 5; e++) CD.f[t + e] && (a |= 1 << e);
    e += a.toString(32);
  }
  st.set("cd:sv:" + CD.l, e);
}
function cdLoad() {
  const e = CD.M.R.length,
    t = CD.M.R.map((e) => !!e.pre),
    a = st.get("cd:sv:" + CD.l, "");
  if ("string" == typeof a && a.length === Math.ceil(e / 5))
    for (let s = 0; s < e; s++) (parseInt(a[Math.floor(s / 5)], 32) >> (s % 5)) & 1 && (t[s] = !0);
  return t;
}
function cdLeft(e) {
  let t = 0;
  return (
    CD.M.R.forEach((a, s) => {
      a.c !== e || CD.f[s] || t++;
    }),
    t
  );
}
function cdTotal(e) {
  let t = 0;
  return (
    CD.M.R.forEach((a) => {
      a.c === e && t++;
    }),
    t
  );
}
function cdThumb(e) {
  const t = cdScene(e),
    a = cdK(e),
    { pal: s, map: n } = cdPal(t.S, a),
    o = document.createElement("canvas");
  ((o.width = 60), (o.height = 78));
  const i = o.getContext("2d");
  return (
    i.scale(60 / CDW, 78 / CDH),
    t.S.forEach((e) => {
      ((i.fillStyle = s[n[e.c] - 1]), i.fill(new Path2D(e.d)));
    }),
    o.toDataURL()
  );
}
function cdScreen() {
  (cbActs(), (cur = "colorie"), nv("games"), theme("colorie"));
  {
    const e = $("#nav");
    e && (e.hidden = !0);
  }
  const e = CD.M;
  app.innerHTML = `<div class="cds"><div class="top stk"><button class="back" data-a="cdBk">‹ Retour</button><button class="tl tlk" data-a="cSkip" data-v="cd" aria-label="Niveau ${CDPOS[CD.l] + 1} : toucher pour passer ce niveau"><span class="tlf">Niveau</span><span class="tls">Niv.</span>&nbsp;${CDPOS[CD.l] + 1}<i aria-hidden="true">⏭</i></button><div class="tr"><button class="hb hintb" data-a="cdHint" aria-label="Indice : coûte 1 bulle">${HBI(1)}</button><div class="chip">🫧 ${FLX()}</div></div></div><div id="skw" class="skw"></div>\n <div class="cdw" id="cdw"><canvas id="cdc" aria-label="Dessin à colorier : glisse pour te déplacer, pince pour zoomer, touche une zone pour la colorier"></canvas><div class="cdz"><button data-a="cdZ" data-v="1" aria-label="Zoomer">+</button><button data-a="cdZ" data-v="-1" aria-label="Dézoomer">−</button></div></div>\n <div class="cdpal" id="cdpal" role="radiogroup" aria-label="Couleurs">${e.pal.map((e, t) => `<button class="cdsw${cbLight(e) ? " lt" : ""}" role="radio" data-a="cdSel" data-v="${t + 1}" style="--c:${e}" aria-label="Couleur ${t + 1}"><b>${t + 1}</b></button>`).join("")}</div>\n <p class="m" id="m" role="status" aria-live="polite"></p></div>`;
  const t = (CD.cv = $("#cdc"));
  CD.x = t.getContext("2d");
  const a = document.createElement("canvas");
  a.width = a.height = 16;
  const s = a.getContext("2d");
  ((s.fillStyle = "#e3e1ec"),
    s.fillRect(0, 0, 16, 16),
    (s.fillStyle = "#c9c6d6"),
    s.fillRect(0, 0, 8, 8),
    s.fillRect(8, 8, 8, 8),
    (CD.pat = CD.x.createPattern(a, "repeat")));
  try {
    CD.pat.setTransform(new DOMMatrix().scale(1.4));
  } catch (e) {}
  (cdSizeC(!0),
    t.addEventListener("pointerdown", cdPD),
    t.addEventListener("pointermove", cdPM),
    ["pointerup", "pointercancel"].forEach((e) => t.addEventListener(e, cdPU)),
    t.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        const a = t.getBoundingClientRect();
        cdZoomAt(CD.z * (e.deltaY < 0 ? 1.15 : 1 / 1.15), e.clientX - a.left, e.clientY - a.top);
      },
      { passive: !1 },
    ),
    addEventListener("resize", cdSizeC),
    CD.f.every(Boolean) && (CD.ok = !0),
    cdPick(cdNext(1) || 1),
    window.scrollTo(0, 0));
}
function cdSizeC(e) {
  const t = CD.cv;
  if (!t || !t.isConnected) return void removeEventListener("resize", cdSizeC);
  const a = Math.min(($("#cdw") || t).clientWidth || 360, 600),
    s = Math.max(260, innerHeight - t.getBoundingClientRect().top - 120),
    n = Math.min(2.5, devicePixelRatio || 1);
  ((t.style.width = a + "px"),
    (t.style.height = s + "px"),
    (t.width = Math.round(a * n)),
    (t.height = Math.round(s * n)),
    (CD.dpr = n),
    (CD.w = a),
    (CD.h = s));
  const o = Math.min(a / CDW, s / CDH);
  (!0 !== e && CD.fit
    ? ((CD.fit = o), cdClamp())
    : ((CD.fit = o), (CD.z = o), (CD.ox = (a - CDW * o) / 2), (CD.oy = (s - CDH * o) / 2)),
    cdDraw());
}
function cdClamp() {
  const e = CD.fit;
  CD.z = Math.max(0.5 * e, Math.min(14 * e, CD.z));
  const t = CDW * CD.z,
    a = CDH * CD.z,
    s = 0.75 * CD.w,
    n = 0.75 * CD.h;
  ((CD.ox = Math.min(s, Math.max(CD.w - s - t, CD.ox))),
    (CD.oy = Math.min(n, Math.max(CD.h - n - a, CD.oy))));
}
function cdZoomAt(e, t, a) {
  const s = (t - CD.ox) / CD.z,
    n = (a - CD.oy) / CD.z;
  ((CD.z = Math.max(0.5 * CD.fit, Math.min(14 * CD.fit, e))),
    (CD.ox = t - s * CD.z),
    (CD.oy = a - n * CD.z),
    cdClamp(),
    cdDraw());
}
function cdNext(e) {
  const t = CD.M.pal.length;
  for (let a = 0; a < t; a++) {
    const s = ((e - 1 + a) % t) + 1;
    if (cdLeft(s)) return s;
  }
  return 0;
}
function cdPick(e) {
  ((CD.sel = e),
    document.querySelectorAll(".cdsw").forEach((t) => {
      const a = +t.dataset.v,
        s = cdLeft(a),
        n = cdTotal(a) || 1;
      (t.classList.toggle("on", a === e),
        t.classList.toggle("ok", !s),
        t.setAttribute("aria-checked", a === e),
        t.style.setProperty("--pr", 360 * (1 - s / n) + "deg"));
    }));
  const t = $(`.cdsw[data-v="${e}"]`);
  (t && t.scrollIntoView({ behavior: wRM ? "auto" : "smooth", inline: "center", block: "nearest" }),
    cdDraw());
}
function cdDraw() {
  const e = CD.x,
    t = CD.M;
  if (!e || !t) return;
  const a = CD.dpr,
    s = CD.z,
    n = CD.ok;
  (e.setTransform(1, 0, 0, 1, 0, 0),
    e.clearRect(0, 0, CD.cv.width, CD.cv.height),
    e.setTransform(a * s, 0, 0, a * s, CD.ox * a, CD.oy * a),
    (e.fillStyle = "#ffffff"),
    e.fillRect(0, 0, CDW, CDH),
    (e.lineJoin = "round"),
    (e.lineCap = "round"),
    (e.strokeStyle = "#2a2838"),
    (e.lineWidth = Math.max(1.2, (1.6 / s) * 0.9)));
  const o = e.lineWidth;
  if (
    (t.DR.forEach((a) => {
      if (void 0 === a.r)
        return ((e.lineWidth = Math.max(0.8, 0.6 * a.w)), e.stroke(a.p), void (e.lineWidth = o));
      const s = a.r,
        i = t.R[s];
      (n || CD.f[s]
        ? (e.fillStyle = t.pal[i.c - 1])
        : CD.hl && CD.hl.has(s)
          ? (e.fillStyle = "#ffe27a")
          : i.c === CD.sel
            ? (e.fillStyle = CD.pat)
            : (e.fillStyle = "#ffffff"),
        e.fill(i.p),
        e.stroke(i.p));
    }),
    n)
  )
    return;
  const i = -CD.ox / s,
    r = -CD.oy / s,
    l = i + CD.w / s,
    c = r + CD.h / s;
  ((e.textAlign = "center"),
    (e.textBaseline = "middle"),
    (e.fillStyle = "#3a3750"),
    t.R.forEach((t, a) => {
      if (CD.f[a] || !t.lx) return;
      const n = Math.min(0.6 * t.fs, 44 / s);
      n * s < 7 ||
        t.lx < i - 50 ||
        t.lx > l + 50 ||
        t.ly < r - 50 ||
        t.ly > c + 50 ||
        ((e.font = `${t.c === CD.sel ? 800 : 500} ${n}px "Nunito Sans",system-ui,sans-serif`),
        e.fillText(t.c, t.lx, t.ly));
    }));
}
function cdHit(e) {
  const t = CD.cv.getBoundingClientRect(),
    a = (e.clientX - t.left - CD.ox) / CD.z,
    s = (e.clientY - t.top - CD.oy) / CD.z;
  if (a < 0 || s < 0 || a >= CDW || s >= CDH) return -1;
  const n = CD.x;
  n.setTransform(1, 0, 0, 1, 0, 0);
  for (let e = CD.M.R.length - 1; e >= 0; e--) if (n.isPointInPath(CD.M.R[e].p, a, s)) return e;
  return -1;
}
function cdTapAt(e) {
  if (CD.ok) return;
  const t = cdHit(e);
  if (t < 0) return;
  const a = CD.M.R[t];
  if (CD.f[t]) return;
  if (a.c !== CD.sel) {
    (vib(12), sfx(220, 0.05));
    const e = $("#m");
    return void (e && (e.textContent = "Cette zone porte le numéro " + a.c + "."));
  }
  ((CD.f[t] = !0), CD.hl && CD.hl.delete(t), sfx(520 + 80 * Math.random(), 0.05));
  const s = $("#m");
  s && (s.textContent = "");
  const n = cdLeft(a.c),
    o = $(`.cdsw[data-v="${a.c}"]`);
  if (
    (o &&
      (o.style.setProperty("--pr", 360 * (1 - n / (cdTotal(a.c) || 1)) + "deg"),
      o.classList.toggle("ok", !n)),
    Math.random() < 0.35 && cdSave(),
    !n)
  )
    return (sfx(780, 0.14), vib(10), cdSave(), CD.f.every(Boolean) ? cdWin() : cdPick(cdNext(a.c)));
  cdDraw();
}
const cdPts = () => Object.values(CD.pt);
function cdPD(e) {
  if (!CD.M) return;
  try {
    CD.cv.setPointerCapture(e.pointerId);
  } catch (e) {}
  CD.pt[e.pointerId] = { x: e.clientX, y: e.clientY };
  const t = cdPts();
  if (1 === t.length)
    CD.tap = {
      id: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      ox: CD.ox,
      oy: CD.oy,
      mv: !1,
      t: performance.now(),
    };
  else if (2 === t.length) {
    CD.tap = null;
    const e = CD.cv.getBoundingClientRect(),
      a = t[0],
      s = t[1];
    CD.pz = {
      d: Math.hypot(a.x - s.x, a.y - s.y) || 1,
      z: CD.z,
      mx: (a.x + s.x) / 2 - e.left,
      my: (a.y + s.y) / 2 - e.top,
      ox: CD.ox,
      oy: CD.oy,
    };
  }
  e.preventDefault();
}
function cdPM(e) {
  if (!CD.pt[e.pointerId]) return;
  CD.pt[e.pointerId] = { x: e.clientX, y: e.clientY };
  const t = cdPts();
  if (t.length >= 2 && CD.pz) {
    const e = CD.cv.getBoundingClientRect(),
      a = t[0],
      s = t[1],
      n = Math.hypot(a.x - s.x, a.y - s.y) || 1,
      o = (a.x + s.x) / 2 - e.left,
      i = (a.y + s.y) / 2 - e.top,
      r = CD.pz,
      l = Math.max(0.5 * CD.fit, Math.min(14 * CD.fit, (r.z * n) / r.d)),
      c = (r.mx - r.ox) / r.z,
      d = (r.my - r.oy) / r.z;
    ((CD.z = l), (CD.ox = o - c * l), (CD.oy = i - d * l), cdClamp(), cdDraw());
  } else if (CD.tap && CD.tap.id === e.pointerId) {
    const t = CD.tap,
      a = e.clientX - t.x,
      s = e.clientY - t.y;
    (!t.mv && Math.hypot(a, s) > 8 && (t.mv = !0),
      t.mv && ((CD.ox = t.ox + a), (CD.oy = t.oy + s), cdClamp(), cdDraw()));
  }
  e.preventDefault();
}
function cdPU(e) {
  delete CD.pt[e.pointerId];
  const t = CD.tap;
  (t && t.id === e.pointerId && (t.mv || "pointerup" !== e.type || cdTapAt(e), (CD.tap = null)),
    cdPts().length < 2 && (CD.pz = null));
}
function cdWin() {
  ((CD.ok = !0), st.set("cd:sv:" + CD.l, ""));
  const e = st.get("cd:d", []),
    t = !e.includes(CD.l);
  t && (e.push(CD.l), st.set("cd:d", e));
  const a = dmR("colorie", t ? 3 + Math.floor(CDPOS[CD.l] / 12) : 1);
  ((fl += a), st.set("fl", fl));
  {
    const e = $(".chip:not(.hintb)");
    e && (e.textContent = "🫧 " + FLX());
  }
  const s = CD.z,
    n = CD.ox,
    o = CD.oy,
    i = performance.now();
  CD.fit = Math.min(CD.w / CDW, CD.h / CDH);
  const r = CD.fit,
    l = (CD.w - CDW * r) / 2,
    c = (CD.h - CDH * r) / 2,
    d = (e) => {
      const t = Math.min(1, (e - i) / 700),
        a = 1 - Math.pow(1 - t, 3);
      ((CD.z = s + (r - s) * a),
        (CD.ox = n + (l - n) * a),
        (CD.oy = o + (c - o) * a),
        cdDraw(),
        t < 1 && !wRM ? requestAnimationFrame(d) : ((CD.z = r), (CD.ox = l), (CD.oy = c), cdDraw()));
    };
  (requestAnimationFrame(d),
    document.querySelectorAll(".cdsw").forEach((e) => {
      (e.classList.add("ok"), e.style.setProperty("--pr", "360deg"));
    }),
    sfx(784, 0.6),
    vib([20, 40, 20]),
    setTimeout(() => {
      try {
        confetti(CD.cv);
      } catch (e) {}
    }, 500));
  const f = CDPOS[CD.l] + 1 < CDN;
  setTimeout(() => {
    const e = $(".cds");
    e &&
      e.insertAdjacentHTML(
        "beforeend",
        `<div class="unend"><section class="glass play"><h2>Dessin ${CDPOS[CD.l] + 1}</h2><p class="note" style="margin:0 0 4px">Terminé !</p><p class="unrw">+${a} 🫧</p><div class="chrow">${f ? `<button class="btn" data-a="cdLv" data-v="${CDORD[CDPOS[CD.l] + 1]}">Dessin suivant</button>` : ""}<button class="btn alt" data-a="cdBk">Retour</button><button class="hmb" data-a="tab" data-v="games" aria-label="Retour à l’accueil des jeux"><span class="hmi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/></svg></span>Accueil</button></div></section></div>`,
      );
  }, 2200);
}
function cdOpen(e) {
  (st.get("cd:fx1", 0) || ([4, 6, 7, 10].forEach((e) => st.set("cd:sv:" + e, "")), st.set("cd:fx1", 1)),
    (CD.l = Math.max(0, Math.min(CDN - 1, +e || 0))),
    $("#m"),
    (CD.M = cdBuild(CD.l)),
    (CD.f = cdLoad()),
    (CD.ok = !1),
    (CD.hl = null),
    (CD.pt = {}),
    (CD.pz = null),
    (CD.tap = null),
    (CD.fit = 0),
    cdScreen());
}
setTimeout(() =>
  Object.assign(act, {
    cdBk: () => {
      (cdSave(), (CD.M = null), cbHub());
    },
    cdLv: (e) => cdOpen(e),
    cSkip: (e) => {
      const t = $("#skw");
      t &&
        (t.innerHTML = `<span>Passer ce ${"cd" === e ? "dessin" : "pixel art"} pour 1 🫧, sans récompense ? Tu pourras y revenir plus tard.</span><div><button class="skp y" data-a="cSkipY" data-v="${e}">Passer</button><button class="skp" data-a="skipn">Rester</button></div>`);
    },
    cSkipY: (e) => {
      if (!spend(1)) return;
      "cd" === e
        ? (cdSave(),
          CDPOS[CD.l] < CDN - 1
            ? (cdOpen(CDORD[CDPOS[CD.l] + 1]), msg("Dessin passé, sans bulles : tu pourras y revenir."))
            : ((CD.M = null), cbHub()))
        : (cbSave(),
          CB.l < CBN - 1
            ? (act.cbLv(CB.l + 1), msg("Pixel art passé, sans bulles : tu pourras y revenir."))
            : ((CB.G = null), cbHub()));
    },
    cdSel: (e) => cdPick(+e),
    cdZ: (e) => cdZoomAt(CD.z * (+e > 0 ? 1.6 : 0.625), CD.w / 2, CD.h / 2),
    cdDd: () => {
      const e = $("#cddd");
      ((CD.ddOpen = e.classList.toggle("open")),
        e.querySelector(".dd-h").setAttribute("aria-expanded", CD.ddOpen));
    },
    cdHint: () => {
      if (CD.ok || !CD.M) return;
      const e = CD.sel,
        t = CD.M.R.map((e, t) => t).filter((t) => CD.M.R[t].c === e && !CD.f[t]);
      if (!t.length) return;
      if (!UNL()) {
        if (fl < 1) {
          const e = $("#m");
          return void (e && (e.textContent = "Il te manque une bulle pour un indice."));
        }
        ((fl -= 1), st.set("fl", fl));
        const e = $(".chip:not(.hintb)");
        e && (e.textContent = "🫧 " + FLX());
      }
      const a = CD.M.R[t.reduce((e, t) => (CD.M.R[e].n <= CD.M.R[t].n ? e : t))],
        s = Math.max(CD.z, Math.min(14 * CD.fit, 24 / (0.62 * a.fs || 10))),
        n = CD.w / 2 - a.lx * s,
        o = CD.h / 2 - a.ly * s,
        i = CD.z,
        r = CD.ox,
        l = CD.oy,
        c = performance.now();
      CD.hl = new Set(t);
      const d = (e) => {
        const t = Math.min(1, (e - c) / 600),
          a = 1 - Math.pow(1 - t, 3);
        ((CD.z = i + (s - i) * a),
          (CD.ox = r + (n - r) * a),
          (CD.oy = l + (o - l) * a),
          cdClamp(),
          cdDraw(),
          t < 1 && requestAnimationFrame(d));
      };
      (requestAnimationFrame(d),
        setTimeout(() => {
          ((CD.hl = null), cdDraw());
        }, 2200));
    },
  }),
);
const cdPc = {};
function cdPic(e, t) {
  const a = e + ":" + t;
  if (cdPc[a]) return cdPc[a];
  const s = cdScene(e),
    n = cdK(e),
    { pal: o, map: i } = cdPal(s.S, n),
    r = document.createElement("canvas");
  ((r.width = t), (r.height = Math.round((t * CDH) / CDW)));
  const l = r.getContext("2d");
  return (
    l.scale(t / CDW, t / CDW),
    (l.lineJoin = l.lineCap = "round"),
    s.A.forEach((e) => {
      const t = new Path2D(e.d);
      e.ln
        ? ((l.strokeStyle = "rgba(40,36,60,.45)"), (l.lineWidth = e.w), l.stroke(t))
        : ((l.fillStyle = o[i[e.c] - 1]), l.fill(t));
    }),
    (cdPc[a] = r.toDataURL("image/jpeg", 0.9))
  );
}
function cdAlbum() {
  (cbActs(), (cur = "colorie"), nv("games"), theme("colorie"));
  const e = [...st.get("cd:d", [])].sort((e, t) => CDPOS[e] - CDPOS[t]);
  ((app.innerHTML = `<div class="top stk"><button class="back" data-a="cdAlbBk">‹ Retour</button><div class="tr"><div class="chip">🫧 ${FLX()}</div></div></div><section class="glass story pt-colorie"><i>🖼️</i><h2>Album photo</h2><p>${e.length ? `${e.length} sur ${CDN} dessins terminés. Touche un dessin pour le voir en grand.` : "Tes dessins terminés apparaîtront ici."}</p></section>${e.length ? `<div class="alb">${e.map((e) => `<button class="albi" data-a="cdAlbV" data-v="${e}" aria-label="Dessin ${CDPOS[e] + 1}"><img alt="" src="${cdPic(e, 200)}"><span>Dessin ${CDPOS[e] + 1}</span></button>`).join("")}</div>` : ""}`),
    window.scrollTo(0, 0));
}
function cdAlbV(e) {
  e = +e;
  const t = [...st.get("cd:d", [])].sort((e, t) => CDPOS[e] - CDPOS[t]),
    a = t.indexOf(e);
  if (a < 0) return;
  let s = $("#albv");
  (s ||
    ((s = document.createElement("div")),
    (s.id = "albv"),
    (s.className = "albv"),
    s.setAttribute("role", "dialog"),
    s.setAttribute("aria-label", "Dessin en grand"),
    app.appendChild(s)),
    (s.innerHTML = `<img alt="Dessin ${CDPOS[e] + 1}" src="${cdPic(e, 640)}"><b>Dessin ${CDPOS[e] + 1}</b><div class="chrow">${a > 0 ? `<button class="btn alt" data-a="cdAlbV" data-v="${t[a - 1]}" aria-label="Dessin précédent">‹</button>` : ""}${a < t.length - 1 ? `<button class="btn alt" data-a="cdAlbV" data-v="${t[a + 1]}" aria-label="Dessin suivant">›</button>` : ""}<button class="btn" data-a="cdAlbX">Fermer</button></div>`));
}
function chHub() {
  (chInstall(),
    (cur = "chess"),
    nv("games"),
    theme("chess"),
    chTheme(),
    (CH.scr = "hub"),
    (CH.fid = ""),
    (CH.g = null),
    (CH.nw = !1),
    (app.innerHTML = `<div class="top stk">${bk("home")}<div class="chip">🫧 ${FLX()}</div></div><section class="glass story pt-chess"><i>♞</i><h2>La clairière</h2><p>Une partie d’échecs au calme, sous les sapins. Joue contre le Lapereau, le Renard ou le Hibou, à deux sur le même appareil, ou à distance contre un ami. Contre un ami ou sur le même appareil, tu choisis la durée au début : sans limite, ou de 1 à 30 minutes par joueur. Chaque partie un peu longue rapporte des 🫧, que tu peux dépenser plus bas en apparences pour tes pièces.</p></section><div id="chh"></div>`),
    "net" === CH.cfg.op && chNetInit(),
    chHubDraw(),
    window.scrollTo(0, 0));
}
function chNetInit() {
  (SO.col || "conn" === SO.st || socInit(), chSyncAll());
}
setTimeout(() =>
  Object.assign(act, {
    cdAlb: () => cdAlbum(),
    cdAlbBk: () => cbHub(),
    cdAlbV: (e) => cdAlbV(e),
    cdAlbX: () => {
      const e = $("#albv");
      e && e.remove();
    },
  }),
);
const chChip = (e, t, a, s, n) =>
  `<button class="chc${s ? " on" : ""}" data-a="chcfg" data-v="${e}:${t}" aria-pressed="${s ? "true" : "false"}">${n || ""}${a}</button>`;
function chStat(e) {
  const t = CH.G[e];
  if (CH.err[e]) return { k: "err", t: "Partie injoignable pour l’instant" };
  if (!t) return CH.got[e] || !CH.subs[e] ? { k: "new", t: "Pas encore de partie" } : { k: "load", t: "…" };
  const a = chRes(t);
  if (a) return { k: "end", t: 0 === a.w ? "Partie nulle" : a.w === t.me ? "Gagné" : "Perdu" };
  const s = t.tc ? " · " + t.tc + " min" : "";
  return chTurn(t) === t.me
    ? { k: "me", t: "À toi de jouer" + s }
    : { k: "them", t: "Au tour de " + chNm(e) + s };
}
function chHubDraw() {
  const e = $("#chh");
  if (!e) return;
  const t = CH.cfg,
    a = window.scrollX,
    s = window.scrollY,
    n = chLoad(),
    o = st.get("soc:me", null);
  let i = "";
  if (n) {
    const e = chReplay(n.mv);
    i += `<section class="glass play chres"><h2>Partie en cours</h2><p class="note" style="margin:0 0 12px">${"ai" === n.k ? (n.il ? "Niveau " + n.il + " · " : "") + "Contre le " + CHLV[n.lv - 1].n : "À deux, même appareil"} · ${Math.ceil(e.ms.length / 2)} coup${e.ms.length > 2 ? "s" : ""}${"ai" === n.k ? "" : " · " + chTcT(n.tc)}</p><div class="chrow"><button class="btn" data-a="chRes">Reprendre</button><button class="btn alt" data-a="chDrop">Laisser tomber</button></div></section>`;
  }
  ((i += `<section class="glass play chnew"><h2>Nouvelle partie</h2>\n <div class="chgr"><div class="chl">Adversaire</div><div class="chq">${chChip("op", "ai", "L’ordinateur", "ai" === t.op)}${chChip("op", "net", "Un ami", "net" === t.op)}${chChip("op", "loc", "Même appareil", "loc" === t.op)}</div></div>\n ${"ai" === t.op ? `<div class="chgr"><div class="chl">Niveau</div><div class="chq">${CHLV.map((e, a) => chChip("lv", a + 1, e.n, t.lv === a + 1, '<span class="chem">' + e.e + "</span>")).join("")}</div><p class="note chdn">${CHLV[t.lv - 1].d}.</p></div>` : ""}\n ${"loc" !== t.op ? `<div class="chgr"><div class="chl">Ta couleur</div><div class="chq">${chChip("col", 1, "Blancs", 1 === t.col)}${chChip("col", -1, "Noirs", -1 === t.col)}${chChip("col", 0, "Au hasard", 0 === t.col)}</div></div>` : ""}\n ${"ai" === t.op ? "" : `<div class="chgr"><div class="chl">Durée de la partie <span class="chs2">par joueur</span></div><div class="chq">${CHTC.map((e) => chChip("tc", e, chTcT(e), t.tc === e)).join("")}</div></div>`}\n ${"net" === t.op ? "" : '<button class="btn chgo" data-a="chStart">Commencer la partie</button>'}</section>`),
    "net" === t.op && (i += chFriends(o)),
    (i += chSkinUI()),
    (e.innerHTML = i),
    window.scrollTo(a, s));
}
function chSkinUI() {
  const e = chSkin();
  return `<section class="glass play chsk"><h2>Apparence des pièces</h2><p class="note" style="margin:0 0 10px">Les 🫧 gagnées en jouant servent à habiller tes pièces.</p>${CHSK.map(
    (t) => {
      const a = !!e.own[t.id],
        s = e.cur === t.id;
      return `<div class="chski${s ? " on" : ""}"><div class="chsp">${chPc(1, t.id)}${chPc(5, t.id)}${chPc(-2, t.id)}${chPc(-6, t.id)}</div><div class="chst"><b>${t.n}</b><small>${t.d}</small></div><button class="sb${a || UNL() ? "" : " buy"}" data-a="chsk" data-v="${t.id}"${s ? " disabled" : ""}>${s ? "Choisi" : a || UNL() ? "Choisir" : sgPxL("c", t)}</button></div>`;
    },
  ).join("")}</section>`;
}
function chFriends(e) {
  const t = (e, t, a) =>
    `<section class="glass play soc-i"><h2>${e}</h2><p class="note" style="margin:0">${t}</p>${a ? `<button class="btn" style="margin-top:14px" data-a="chSoc">${a}</button>` : ""}</section>`;
  if ("na" === SO.st)
    return t(
      "Une connexion est nécessaire",
      "Jouer contre un ami demande d’être connecté(e) et d’avoir ajouté cet ami : tout se passe dans l’onglet Social.",
      "Ouvrir Social",
    );
  if (!(SO.uid && SO.got && e && e.code)) {
    const e = "slow" === SO.st || "err" === SO.st;
    return t(
      e ? "Pas de réponse pour l’instant" : "Un instant…",
      e ? "Tes amis se chargeront dès que possible." : "Tes amis arrivent.",
    );
  }
  const a = Object.keys(e.fr).filter((t) => e.fr[t] > 0 && SO.P[t]);
  if (!a.length)
    return t(
      "Il te faut un ami",
      "Ajoute un ami avec son code ami, dans l’onglet Social : vous pourrez alors jouer ensemble.",
      "Ouvrir Social",
    );
  const s = { me: 0, them: 1, new: 2, load: 2, err: 3, end: 2 };
  return `<section class="glass play soc-i"><h2 class="s" style="margin-top:0">Inviter un ami</h2><p class="note" style="margin:0 0 8px">Ta couleur et la durée ci-dessus seront utilisées pour la nouvelle partie.</p>${a
    .sort((e, t) => s[chStat(e).k] - s[chStat(t).k] || chNm(e).localeCompare(chNm(t), "fr"))
    .map((e) => {
      const t = chStat(e),
        a = "new" === t.k || "end" === t.k ? "chInv" : "chOpen",
        s = "me" === t.k ? "Jouer" : "them" === t.k ? "Voir" : "err" === t.k ? "Ouvrir" : "Inviter";
      return `<div class="fr-i"><button class="fr-o" data-a="${"end" === t.k ? "chOpen" : a}" data-v="${esc(e)}">${socAv(e)}<span class="fr-t"><b>${esc(chNm(e))}</b><small${"me" === t.k ? ' class="scgo"' : ""}>${esc(t.t)}</small></span></button><div class="fr-b"><button class="sb${"me" === t.k ? " buy" : ""}" data-a="${a}" data-v="${esc(e)}">${s}</button></div></div>`;
    })
    .join("")}</section>`;
}
function chBegin(e, t) {
  ((CH.g = e),
    (CH.fid = t || ""),
    (CH.scr = "game"),
    (CH.fl = null),
    (CH.sel = -1),
    (CH.lg = []),
    (CH.pr = null),
    (CH.m = ""),
    (CH.cf = ""),
    (CH.pay = ""),
    (CH.busy = !1),
    (CH.think = !1),
    (CH.t0 = Date.now()),
    (CH.rc = null),
    (CH.flg = !1));
  const a = "ai" === e.k ? "Contre le " + chOpp(e).n : "net" === e.k ? chNm(t) : "À deux";
  (theme("chess"),
    chTheme(),
    ($("#nav").hidden = !0),
    (app.innerHTML = `<div class="top stk"><button class="back" data-a="chBk">‹ Échecs</button><span class="tl">${esc(a)}</span><div class="tr"><div class="chip">🫧 ${FLX()}</div></div></div><section class="glass play pg-chess" id="chg" aria-label="Partie d’échecs"></section>`),
    chDraw(),
    chAfter(),
    window.scrollTo(0, 0));
}
function chOpenNet(e) {
  if ((chInstall(), !SO.uid)) return chHub();
  chWatch(e);
  const t = CH.G[e];
  if (((CH.scr = "game"), (CH.fid = e), t)) return chBegin(t, e);
  ((CH.g = null),
    theme("chess"),
    chTheme(),
    ($("#nav").hidden = !0),
    (app.innerHTML = `<div class="top stk"><button class="back" data-a="chBk">‹ Échecs</button><span class="tl">${esc(chNm(e))}</span><div class="tr"><div class="chip">🫧 ${FLX()}</div></div></div><section class="glass play pg-chess" id="chg"><p class="note">Un instant…</p></section>`));
  const a = Date.now(),
    s = setInterval(() => {
      "game" === CH.scr && CH.fid === e && null !== $("#chg")
        ? CH.G[e]
          ? (clearInterval(s), chBegin(CH.G[e], e))
          : (CH.err[e] || Date.now() - a > 9e3) &&
            (clearInterval(s),
            ($("#chg").innerHTML =
              `<h2 style="margin:0 0 6px">Partie injoignable</h2><p class="note" style="margin:0 0 14px">${esc(CH.ec[e] || "Pas de réponse du serveur.")} Ton ami doit aussi t’avoir ajouté dans Social.</p><button class="btn" data-a="chBk">Retour</button>`))
        : clearInterval(s);
    }, 300);
}
function chNewGame(e) {
  const t = CH.cfg,
    a = t.col || (Math.random() < 0.5 ? 1 : -1),
    s = Math.random().toString(36).slice(2, 10),
    n = e && "ai" === e.k ? 0 : t.tc,
    o = [6e4 * n, 6e4 * n];
  return Object.assign({ id: s, mv: [], tc: n, rm: o, r: null, dr: 0, paid: 0, me: a, lv: t.lv }, e);
}
function chAfter() {
  const e = CH.g;
  if (e && "game" === CH.scr) {
    if ("ai" === e.k && !chRes(e) && chTurn(e) !== e.me && !CH.think) {
      ((CH.think = !0), chDraw());
      const t = e.mv.length,
        a = Date.now();
      setTimeout(() => {
        if (CH.g !== e || e.mv.length !== t) return void (CH.think = !1);
        const s = chSearch(chD(e).S, e.il ? chILp(e.il) : e.lv),
          n = Math.max(0, 700 - (Date.now() - a));
        setTimeout(() => {
          ((CH.think = !1), CH.g === e && e.mv.length === t && s && !chRes(e) ? chPlay(s) : chDraw());
        }, n);
      }, 60);
    }
    chTickOn();
  }
}
function chTickOn() {
  CH.tick ||
    (CH.tick = setInterval(() => {
      if ("game" !== CH.scr || !$("#chg")) return (clearInterval(CH.tick), void (CH.tick = 0));
      chClk();
    }, 250));
}
function chClk() {
  const e = CH.g;
  if (e && e.tc) {
    for (const t of [1, -1]) {
      const a = $('#chg .chk[data-c="' + t + '"]');
      if (a) {
        const s = chRem(e, t);
        ((a.textContent = chFmt(s)),
          a.classList.toggle("lo", s < 3e4),
          a.classList.toggle("on", chRun(e) && chTurn(e) === t));
      }
    }
    if (chRun(e) && !CH.flg && !CH.busy && Date.now() > CH.fgT) {
      const t = chTurn(e),
        a = chRem(e, t);
      a <= 0 && ("net" !== e.k || t === e.me || a <= -3e3) && chFlag(t);
    }
  }
}
async function chFlag(e) {
  const t = CH.g;
  if (!t) return;
  CH.flg = !0;
  const a = { rm: t.rm.slice(), r: t.r, dr: t.dr };
  ((t.rm[e > 0 ? 0 : 1] = 0), (t.r = { w: -e, y: "tmp" }), (t.dr = 0), (CH.rc = null));
  const s = await chCommit(a);
  ((CH.flg = !1), s || (CH.fgT = Date.now() + 5e3));
}
async function chPlay(e) {
  const t = CH.g;
  if (!t || CH.busy || chRes(t)) return !1;
  const a = chTurn(t),
    s = { mv: t.mv.slice(), rm: t.rm.slice(), dr: t.dr, r: t.r };
  t.tc && t.mv.length >= 2 && (t.rm[a > 0 ? 0 : 1] = Math.max(0, chRem(t, a)));
  const n = chD(t).S.b[e.t];
  (t.mv.push(chUci(e)),
    (t.dr = 0),
    (CH.t0 = Date.now()),
    (CH.sel = -1),
    (CH.lg = []),
    (CH.pr = null),
    (CH.m = ""),
    (CH.cf = ""),
    (CH.rc = null));
  const o = await chCommit(s);
  if (o) {
    const e = chRes(t);
    (sfx(e ? 523 : n ? 240 : 330, e ? 0.4 : 0.1), vib(e ? 25 : n ? 14 : 8));
  }
  return o;
}
async function chCommit(e) {
  const t = CH.g;
  if ("net" === t.k) {
    if (!(await chSend(t))) return (e && (Object.assign(t, e), (CH.rc = null)), chDraw(), !1);
  } else chSave();
  return (chPay(t), chDraw(), chAfter(), !0);
}
async function chSend(e) {
  const t = CH.subs[e.f];
  if (!t || !t.ref) return ((CH.m = "La partie n’est pas encore prête : réessaie dans un instant."), !1);
  if (CH.busy) return !1;
  ((CH.busy = !0), chDraw());
  try {
    await t.ref.set(chDoc(e));
  } catch (e) {
    return ((CH.busy = !1), (CH.m = "Ton coup n’est pas parti. " + scrWhy(e)), !1);
  }
  return ((CH.busy = !1), (CH.G[e.f] = e), (CH.got[e.f] = !0), !0);
}
const chCf = (e) =>
  CH.cf === e
    ? (clearTimeout(CH.cft), (CH.cf = ""), !0)
    : ((CH.cf = e),
      clearTimeout(CH.cft),
      (CH.cft = setTimeout(() => {
        ((CH.cf = ""), chDraw());
      }, 3500)),
      chDraw(),
      !1);
function chTry(e, t) {
  const a = CH.g;
  if (!a || CH.busy || CH.think || chRes(a) || !chMy(a) || CH.pr) return !1;
  const s = chLegal(chD(a).S).filter((a) => a.f === e && a.t === t);
  return !!s.length && (s.length > 1 ? ((CH.pr = { f: e, t: t }), chDraw(), !0) : (chPlay(s[0]), !0));
}
function chSel(e) {
  const t = CH.g;
  if (!t || CH.busy || CH.think || chRes(t) || !chMy(t)) return;
  const a = chD(t).S,
    s = a.b[e];
  ((CH.pr = null),
    (CH.m = ""),
    (CH.sel >= 0 && CH.sel !== e && chTry(CH.sel, e)) ||
      (s && s > 0 == a.t > 0 && e !== CH.sel
        ? ((CH.sel = e), (CH.lg = chLegal(a).filter((t) => t.f === e)))
        : ((CH.sel = -1), (CH.lg = [])),
      chDraw()));
}
function chDraw() {
  const e = $("#chg");
  if (!e || "game" !== CH.scr) return;
  const t = CH.g;
  if (!t) return;
  const a = chD(t),
    s = a.S,
    n = chRes(t),
    o = s.t,
    i = chMy(t),
    r = null !== CH.fl ? CH.fl : "loc" !== t.k && t.me < 0,
    l = r ? -1 : 1,
    c = -l,
    d = a.ms.length ? a.ms[a.ms.length - 1] : null,
    f = chChk(s) && !n ? chKing(s.b, o) : -1,
    u = {};
  for (let e = 0; e < 64; e++) s.b[e] && (u[s.b[e]] = (u[s.b[e]] || 0) + 1);
  const h = { 1: 8, 2: 2, 3: 2, 4: 2, 5: 1 };
  let p = 0;
  for (const e of [1, 2, 3, 4, 5]) p += (CHV[e] / 100) * ((u[e] || 0) - (u[-e] || 0));
  const m = (e) => {
    const a = Math.round(p * e);
    return `<div class="chpl${n || o !== e ? "" : " on"}">${chAvOf(t, e)}<span class="chn"><b>${esc(chWho(t, e))}</b><span class="chcap" aria-hidden="true">${((
      e,
    ) => {
      let t = "";
      for (const a of [5, 4, 3, 2, 1]) {
        const s = Math.max(0, h[a] - (u[-e * a] || 0));
        for (let n = 0; n < s; n++) t += chPc(-e * a);
      }
      return t;
    })(
      e,
    )}${a > 0 ? "<em>+" + a + "</em>" : ""}</span></span>${t.tc ? `<span class="chk${chRun(t) && o === e ? " on" : ""}${chRem(t, e) < 3e4 ? " lo" : ""}" data-c="${e}">${chFmt(chRem(t, e))}</span>` : ""}</div>`;
  };
  let b = "";
  for (let e = 0; e < 64; e++) {
    const t = r ? 63 - e : e,
      a = s.b[t],
      n = t >> 3,
      o = 7 & t,
      i = ["chs", (n + o) & 1 ? "d" : "l"];
    (CH.sel === t && i.push("sel"),
      !d || (t !== d.f && t !== d.t) || i.push("lm"),
      t === f && i.push("ck"),
      CH.lg.some((e) => e.t === t) &&
        i.push(a || (CH.sel >= 0 && 1 === Math.abs(s.b[CH.sel]) && t === s.ep) ? "cp" : "mv"));
    const l =
      (e % 8 == 0 ? `<i class="cr">${8 - n}</i>` : "") + (e >= 56 ? `<i class="cf">${CHF[o]}</i>` : "");
    b += `<div class="${i.join(" ")}" role="gridcell" data-a="chq" data-v="${t}" aria-label="${chSq(t)}${a ? ", " + CHPN[a < 0 ? -a : a] + (a > 0 ? " blanc" : " noir") : ""}">${l}${a ? chPc(a) : ""}</div>`;
  }
  const g = CH.pr
    ? `<div class="chpr" role="dialog" aria-label="Choisir la pièce"><b>Promotion</b><div>${[5, 4, 3, 2].map((e) => `<button data-a="chpr" data-v="${e}" aria-label="${CHPN[e]}">${chPc(o > 0 ? e : -e)}</button>`).join("")}</div></div>`
    : "";
  let E;
  if (n) E = chMsg(t, n);
  else if (CH.m) E = CH.m;
  else if (CH.think) E = "Le " + chOpp(t).n + " réfléchit…";
  else {
    const e = chChk(s) ? "Échec au roi. " : "";
    E =
      "loc" === t.k
        ? e + (o > 0 ? "Aux blancs de jouer." : "Aux noirs de jouer.")
        : i
          ? e + "À toi de jouer."
          : e + "Au tour de " + chWho(t, o) + ".";
  }
  let y = "";
  for (let e = 0; e < a.sans.length; e++)
    y +=
      (e % 2 ? "" : `<span class="chnb">${e / 2 + 1}.</span>`) +
      `<span class="chmv${e === a.sans.length - 1 ? " last" : ""}">${esc(a.sans[e])}</span>`;
  let v = '<button class="sb" data-a="chfl">⇅ Retourner</button>';
  n ||
    ("net" !== t.k &&
      !t.tc &&
      t.mv.length &&
      (v += '<button class="sb" data-a="chUndo">↶ Reprendre le coup</button>'),
    "net" === t.k &&
      t.mv.length >= 2 &&
      !t.dr &&
      (v += '<button class="sb" data-a="chDraw">Proposer nulle</button>'),
    "net" === t.k && t.dr === t.me && (v += '<button class="sb" disabled>Nulle proposée…</button>'),
    "loc" === t.k &&
      t.mv.length >= 2 &&
      (v += `<button class="sb${"draw" === CH.cf ? " buy" : ""}" data-a="chDraw">${"draw" === CH.cf ? "Confirmer la nulle" : "Nulle"}</button>`),
    (v += `<button class="sb${"res" === CH.cf ? " buy" : ""}" data-a="chQuit">${"res" === CH.cf ? "Confirmer l’abandon" : "Abandonner"}</button>`));
  const A =
      n || "net" !== t.k || t.dr !== -t.me
        ? ""
        : `<div class="chof"><b>${esc(chNm(t.f))} propose la nulle.</b><div class="chrow"><button class="btn" data-a="chAcc">Accepter</button><button class="btn alt" data-a="chRef">Refuser</button></div></div>`,
    S = n
      ? `<div class="chend"><b>${esc(E)}</b>${CH.pay ? `<span class="chpay">${CH.pay}</span>` : ""}<div class="chrow"><button class="btn" data-a="chRev"${CH.busy ? " disabled" : ""}>Revanche</button><button class="btn alt" data-a="chBk">Menu</button></div></div>`
      : "",
    x = $("#chmv"),
    M = x ? x.scrollLeft : 0;
  e.innerHTML = `${S}${m(c)}<div class="chbw sk-${CH.sk}${CH.think ? " th" : ""}"><div class="chb${r ? " fl" : ""}" role="grid" aria-label="Échiquier">${b}</div>${g}</div>${m(l)}${n ? "" : `<p class="m chm" id="chm" role="status" aria-live="polite">${esc(E)}</p>`}${A}<div class="chmvs" id="chmv" aria-label="Coups joués">${y || '<span class="note">Les coups apparaîtront ici.</span>'}</div><div class="cha">${v}</div>`;
  const L = $("#chmv");
  L && (L.scrollLeft = x && M < L.scrollWidth - L.clientWidth - 40 ? M : L.scrollWidth);
}
const chMine = () => ("game" === CH.scr && CH.g ? CH.g : null);
const CHA = {
  chSoc: () => socScreen(),
  chsk: (e) => {
    const t = CHSK.find((t) => t.id === e);
    if (!t) return;
    const a = chSkin();
    if (!a.own[t.id]) {
      if (!spend(sgPx("c", t))) return;
      a.own[t.id] = 1;
    }
    ((a.cur = t.id), st.set("ch:sk", a), (CH.sk = t.id), chTheme());
    const s = $(".chip");
    (s && (s.textContent = "🫧 " + FLX()), chHubDraw());
  },
  chcfg: (e) => {
    const [t, a] = e.split(":"),
      s = +a;
    ("op" === t && ["ai", "net", "loc"].includes(a)
      ? (CH.cfg.op = a)
      : "lv" === t && s >= 1 && s <= 3
        ? (CH.cfg.lv = s)
        : "col" === t && [1, -1, 0].includes(s)
          ? (CH.cfg.col = s)
          : "tc" === t && CHTC.includes(s) && (CH.cfg.tc = s),
      st.set("ch:cfg", CH.cfg),
      "net" === CH.cfg.op && chNetInit(),
      chHubDraw());
  },
  chStart: () => {
    const e = CH.cfg;
    if ("net" === e.op) return;
    const t = "ai" === e.op ? chNewGame({ k: "ai" }) : chNewGame({ k: "loc", me: 1 });
    ("ai" === t.k && (t.lv = e.lv), st.set("ch:g", null), chBegin(t), chSave());
  },
  chRes: () => {
    const e = chLoad();
    e && chBegin(e);
  },
  chDrop: () => {
    (st.set("ch:g", null), chHubDraw());
  },
  chOpen: (e) => chOpenNet(e),
  chInv: async (e) => {
    if (!SO.uid || CH.nw) return;
    chWatch(e);
    const t = CH.subs[e];
    if (!t) return;
    CH.nw = !0;
    try {
      await t.p;
    } catch (e) {}
    const a = CH.G[e];
    if (a && !chRes(a)) return ((CH.nw = !1), chOpenNet(e));
    const s = CH.cfg.col || (Math.random() < 0.5 ? 1 : -1),
      n = chNewGame({ k: "net", f: e, me: s, p: s > 0 ? [SO.uid, e] : [e, SO.uid] });
    if ((socInv(e, "chess"), (CH.scr = "game"), (CH.fid = e), (CH.g = n), !t.ref))
      return (
        (CH.nw = !1),
        (CH.m = "La partie n’est pas encore prête : réessaie dans un instant."),
        chOpenNet(e)
      );
    CH.busy = !1;
    try {
      await t.ref.set(chDoc(n));
    } catch (e) {
      ((CH.nw = !1), (CH.scr = "hub"), (CH.g = null));
      const t = $("#chh");
      return void (
        t &&
        t.insertAdjacentHTML(
          "afterbegin",
          `<section class="glass play soc-i"><p class="note" style="margin:0">Invitation non envoyée. ${esc(scrWhy(e))}</p></section>`,
        )
      );
    }
    ((CH.nw = !1), (CH.G[e] = n), (CH.got[e] = !0), chBegin(n, e));
  },
  chBk: () => {
    ((CH.scr = "hub"), chHub());
  },
  chq: (e) => chSel(+e),
  chpr: (e) => {
    const t = CH.g,
      a = CH.pr;
    if (!t || !a) return;
    const s = chLegal(chD(t).S).find((t) => t.f === a.f && t.t === a.t && t.p === +e);
    ((CH.pr = null), s ? chPlay(s) : chDraw());
  },
  chfl: () => {
    const e = CH.g;
    if (!e) return;
    const t = null !== CH.fl ? CH.fl : "loc" !== e.k && e.me < 0;
    ((CH.fl = !t), chDraw());
  },
  chUndo: () => {
    const e = CH.g;
    if (!e || "net" === e.k || e.tc || CH.think || !e.mv.length) return;
    const t = "ai" === e.k && chTurn(e) === e.me ? 2 : 1;
    (e.mv.splice(Math.max(0, e.mv.length - t)),
      (e.r = null),
      (CH.rc = null),
      (CH.sel = -1),
      (CH.lg = []),
      (CH.pr = null),
      (CH.m = ""),
      chSave(),
      chDraw(),
      chAfter());
  },
  chDraw: async () => {
    const e = CH.g;
    if (e && !chRes(e) && !CH.busy) {
      if ("loc" === e.k) {
        if (!chCf("draw")) return;
        return ((e.r = { w: 0, y: "acc" }), (CH.rc = null), (CH.cf = ""), chSave(), void chDraw());
      }
      if ("net" === e.k && !e.dr) {
        const t = { dr: e.dr };
        ((e.dr = e.me),
          (CH.m = "Nulle proposée à " + chNm(e.f) + "."),
          (await chSend(e)) || Object.assign(e, t),
          chDraw());
      }
    }
  },
  chAcc: async () => {
    const e = CH.g;
    if (!e || "net" !== e.k || e.dr !== -e.me || chRes(e) || CH.busy) return;
    const t = { r: e.r, dr: e.dr };
    ((e.r = { w: 0, y: "acc" }), (e.dr = 0), (CH.rc = null), await chCommit(t));
  },
  chRef: async () => {
    const e = CH.g;
    if (!e || "net" !== e.k || e.dr !== -e.me || CH.busy) return;
    const t = { dr: e.dr };
    ((e.dr = 0), (await chSend(e)) || Object.assign(e, t), chDraw());
  },
  chQuit: async () => {
    const e = CH.g;
    if (!e || chRes(e) || CH.busy) return;
    if (!chCf("res")) return;
    const t = "loc" === e.k ? chTurn(e) : e.me,
      a = { r: e.r, dr: e.dr };
    ((e.r = { w: -t, y: "res" }), (e.dr = 0), (CH.rc = null), (CH.cf = ""), await chCommit(a));
  },
  chRev: async () => {
    const e = CH.g;
    if (!e || !chRes(e) || CH.busy) return;
    if (((CH.pay = ""), "net" === e.k)) {
      const t = e.f,
        a = CH.subs[t];
      if (!a || !a.ref) return;
      const s = chNewGame({
        k: "net",
        f: t,
        me: -e.me,
        p: [e.p[1], e.p[0]],
        tc: e.tc,
        rm: [6e4 * e.tc, 6e4 * e.tc],
      });
      ((CH.busy = !0), chDraw());
      try {
        await a.ref.set(chDoc(s));
      } catch (e) {
        return ((CH.busy = !1), (CH.m = "La revanche n’est pas partie. " + scrWhy(e)), void chDraw());
      }
      return ((CH.busy = !1), (CH.G[t] = s), void chBegin(s, t));
    }
    const N = e.il ? st.get("ch:il", 1) : 0,
      t = chNewGame(
        N
          ? chILg(N)
          : { k: e.k, me: "loc" === e.k ? 1 : -e.me, lv: e.lv, tc: e.tc, rm: [6e4 * e.tc, 6e4 * e.tc] },
      );
    (st.set("ch:g", null), chBegin(t), chSave());
  },
};
const chInstall = () => {
  (chDragInit(), Object.assign(act, CHA));
};
let CHD = null;
let CHDt = 0;
const chDragInit = () => {
  if (window.__chd) return;
  window.__chd = 1;
  const e = (e, t) => {
      const a = document.elementFromPoint(e, t);
      return a && a.closest ? a.closest("#chg .chs[data-v]") : null;
    },
    t = () => {
      document.querySelectorAll(".chs.dh").forEach((e) => e.classList.remove("dh"));
    },
    a = () => {
      (CHD && (CHD.g && CHD.g.remove(), CHD.t && CHD.t.classList.remove("dg")), t(), (CHD = null));
    };
  (document.addEventListener(
    "pointerdown",
    (e) => {
      CHD && a();
      const t = e.target.closest && e.target.closest("#chg .chs[data-v]");
      if (!t || ("mouse" === e.pointerType && 0 !== e.button)) return;
      const s = chMine();
      if (!s || CH.busy || CH.think || chRes(s) || !chMy(s) || CH.pr) return;
      const n = +t.dataset.v,
        o = chD(s).S,
        i = o.b[n];
      i && i > 0 == o.t > 0 && (CHD = { t: t, id: e.pointerId, x0: e.clientX, y0: e.clientY, on: !1, sq: n });
    },
    !0,
  ),
    document.addEventListener(
      "pointermove",
      (s) => {
        const n = CHD;
        if (!n || s.pointerId !== n.id) return;
        if (!n.on) {
          if (Math.hypot(s.clientX - n.x0, s.clientY - n.y0) < 8) return;
          const e = chMine();
          if (!e) return a();
          n.on = !0;
          const t = chD(e).S;
          ((CH.sel = n.sq), (CH.lg = chLegal(t).filter((e) => e.f === n.sq)), chDraw());
          const o = document.querySelector('#chg .chs[data-v="' + n.sq + '"]');
          n.t = o;
          const i = document.createElement("div");
          ((i.className = "chgh"), (i.innerHTML = o ? o.innerHTML.replace(/<i[^>]*>.*?<\/i>/g, "") : ""));
          const r = o ? o.getBoundingClientRect().width : 48;
          ((i.style.width = i.style.height = 1.15 * r + "px"),
            document.body.appendChild(i),
            (n.g = i),
            o && o.classList.add("dg"),
            vib && vib(6));
        }
        s.preventDefault();
        const o = parseFloat(n.g.style.width) || 48;
        ((n.g.style.left = s.clientX - o / 2 + "px"), (n.g.style.top = s.clientY - 0.8 * o + "px"), t());
        const i = e(s.clientX, s.clientY);
        i && CH.lg.some((e) => e.t === +i.dataset.v) && i.classList.add("dh");
      },
      { passive: !1 },
    ));
  const s = (t) => {
    const s = CHD;
    if (!s || t.pointerId !== s.id) return;
    if (!s.on) return void (CHD = null);
    CHDt = Date.now();
    const n = "pointerup" === t.type ? e(t.clientX, t.clientY) : null,
      o = n ? +n.dataset.v : -1,
      i = s.sq;
    (a(),
      (o >= 0 && o !== i && chTry(i, o)) ||
        ((CH.sel = o === i ? i : -1), CH.sel < 0 && (CH.lg = []), chDraw()));
  };
  (document.addEventListener("pointerup", s),
    document.addEventListener("pointercancel", s),
    window.addEventListener(
      "click",
      (e) => {
        Date.now() - CHDt < 80 && (e.stopPropagation(), e.preventDefault());
      },
      !0,
    ),
    document.addEventListener("dragstart", (e) => {
      CHD && e.preventDefault();
    }));
};
const DBT = [
  "La chambre",
  "La salle de bain",
  "La cuisine",
  "Le condo",
  "La chambre des parents",
  "Ta chambre",
  "La salle de bain",
  "La cuisine",
  "Le salon",
  "La cour",
];
function demBook() {
  const e = G.find((e) => "demenage" === e.id),
    t = DRM.length,
    a = [...Array(t).keys()].filter((e) => st.get(ckey("demenage") + ":" + e, !1)),
    s = [...Array(t).keys()].find((e) => !a.includes(e)),
    n = [
      { k: "cov" },
      { k: "pro" },
      ...a.map((e) => ({ k: "fr", n: e })),
      void 0 !== s ? { k: "lk", n: s } : { k: "end" },
    ];
  storyBook({
    ks: a,
    P: n,
    pg: (t, a, s) =>
      "cov" === t.k
        ? '<div class="bki"><svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><path d="M8 32 32 10l24 22" fill="none" stroke="#ffe9a0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 30v24h36V30" fill="#e8b98a" stroke="#ffe9a0" stroke-width="3" stroke-linejoin="round"/><rect x="26" y="38" width="12" height="16" rx="3" fill="#9a5f3a"/></svg><h2>Le déménagement</h2><p>l’histoire d’une maison qui se remplit</p><p class="bkh">Fais glisser ou touche un bord pour ouvrir</p></div>'
        : "pro" === t.k
          ? `<div class="bki"><span class="bke">Prologue</span><p class="bkt">${e.s}</p>${s}</div>`
          : "fr" === t.k
            ? `<div class="bki"><span class="bke">Niveau ${t.n + 1} · ${DBT[t.n]}</span><p class="bkt">${e.wl[t.n]}</p>${s}</div>`
            : "lk" === t.k
              ? `<div class="bki"><span class="bke">Niveau ${t.n + 1}</span><p class="bkt" style="margin-top:34px">Cette page s’écrira quand tu auras rangé cette pièce.</p>${s}</div>`
              : `<div class="bki"><span class="bke">La maison est complète</span><p class="bkt" style="margin-top:34px">Tout est rangé. Bonne nuit, et bienvenue chez toi.</p>${s}</div>`,
  });
}
(() => {
  if (!st.get("mig72", 0)) {
    st.set("mig72", 1);
    for (let e = 0; e < 10; e++) {
      const t = "c:mots:" + (40 + e),
        a = "c:mots:" + (60 + e),
        s = "k:mots:" + (40 + e);
      (st.get(t, !1) && (st.set(a, !0), st.set(t, null)),
        st.get(s, !1) && (st.set("k:mots:" + (60 + e), !0), st.set(s, null)));
    }
    for (let e = 0; e < 70; e++) st.set("p:mots:" + e, null);
  }
})();
var aqMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  off: 0,
  PA: [
    [48, [60, 64, 67, 71]],
    [45, [57, 60, 64, 67]],
    [41, [53, 57, 60, 64]],
    [43, [55, 59, 62, 64]],
    [40, [52, 55, 59, 62]],
    [45, [57, 60, 64, 67]],
    [41, [53, 57, 60, 64]],
    [43, [55, 59, 62, 67]],
  ],
  PB: [
    [41, [53, 57, 60, 64]],
    [40, [52, 55, 59, 62]],
    [38, [50, 53, 57, 60]],
    [43, [55, 59, 62, 67]],
    [41, [53, 57, 60, 64]],
    [40, [52, 55, 59, 62]],
    [45, [57, 60, 64, 67]],
    [43, [55, 60, 62, 67]],
  ],
  MA: [
    [
      [0, 79, 3],
      [3, 76, 1],
      [4, 79, 2],
      [6, 84, 2],
    ],
    [
      [0, 81, 3],
      [3, 79, 1],
      [4, 76, 4],
    ],
    [
      [0, 77, 3],
      [3, 81, 1],
      [4, 84, 2],
      [6, 81, 2],
    ],
    [
      [0, 79, 4],
      [4, 74, 2],
      [6, 71, 2],
    ],
    [
      [0, 76, 3],
      [3, 79, 1],
      [4, 83, 2],
      [6, 79, 2],
    ],
    [
      [0, 81, 2],
      [2, 84, 2],
      [4, 81, 2],
      [6, 76, 2],
    ],
    [
      [0, 81, 3],
      [3, 79, 1],
      [4, 77, 2],
      [6, 76, 2],
    ],
    [
      [0, 74, 4],
      [4, 79, 3],
    ],
  ],
  MB: [
    [
      [0, 84, 2],
      [2, 81, 2],
      [4, 84, 2],
      [6, 89, 2],
    ],
    [
      [0, 88, 3],
      [3, 83, 1],
      [4, 79, 4],
    ],
    [
      [0, 86, 2],
      [2, 81, 2],
      [4, 77, 2],
      [6, 81, 2],
    ],
    [
      [0, 83, 4],
      [4, 79, 2],
      [6, 74, 2],
    ],
    [
      [0, 84, 3],
      [3, 86, 1],
      [4, 88, 2],
      [6, 84, 2],
    ],
    [
      [0, 83, 2],
      [2, 79, 2],
      [4, 83, 2],
      [6, 88, 2],
    ],
    [
      [0, 84, 3],
      [3, 81, 1],
      [4, 79, 2],
      [6, 76, 2],
    ],
    [
      [0, 79, 6],
      [6, 74, 2],
    ],
  ],
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  gl(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1, a + 0.6],
      [2.76, 0.12, 0.3],
      [5.4, 0.04, 0.12],
    ].forEach(([a, i, r]) => {
      const l = o.createOscillator(),
        c = o.createGain();
      ((l.type = "sine"),
        (l.frequency.value = e * a),
        c.gain.setValueAtTime(1e-4, t),
        c.gain.exponentialRampToValueAtTime(s * i, t + 0.006),
        c.gain.exponentialRampToValueAtTime(1e-4, t + r),
        l.connect(c),
        c.connect(n),
        l.start(t),
        l.stop(t + r + 0.05));
    });
  },
  pad(i, pd, bs, len, P) {
    const e = this.L,
      t = AC,
      f = t.createBiquadFilter();
    ((f.type = "lowpass"), (f.frequency.value = 1100), (f.Q.value = 0.4));
    const g = t.createGain();
    (g.gain.setValueAtTime(1e-4, i),
      g.gain.linearRampToValueAtTime(0.055 * P, i + 0.4 * len),
      g.gain.setValueAtTime(0.055 * P, i + 0.8 * len),
      g.gain.linearRampToValueAtTime(1e-4, i + len + 1),
      f.connect(g),
      g.connect(e.bus),
      pd.forEach((n) =>
        [-6, 6].forEach((d) => {
          const o = t.createOscillator();
          ((o.type = "triangle"),
            (o.frequency.value = this.mf(n)),
            (o.detune.value = d),
            o.connect(f),
            o.start(i),
            o.stop(i + len + 1.1));
        }),
      ));
    const o = t.createOscillator(),
      b = t.createGain();
    ((o.type = "sine"),
      (o.frequency.value = this.mf(bs)),
      b.gain.setValueAtTime(1e-4, i),
      b.gain.linearRampToValueAtTime(0.09 * P, i + 0.15),
      b.gain.setValueAtTime(0.09 * P, i + len - 0.15),
      b.gain.linearRampToValueAtTime(1e-4, i + len + 0.3),
      o.connect(b),
      b.connect(e.out),
      o.start(i),
      o.stop(i + len + 0.4));
  },
  pulse(i) {
    const t = AC,
      o = t.createOscillator(),
      g = t.createGain();
    ((o.type = "sine"),
      o.frequency.setValueAtTime(95, i),
      o.frequency.exponentialRampToValueAtTime(52, i + 0.15),
      g.gain.setValueAtTime(1e-4, i),
      g.gain.exponentialRampToValueAtTime(0.07, i + 0.01),
      g.gain.exponentialRampToValueAtTime(1e-4, i + 0.35),
      o.connect(g),
      g.connect(this.L.out),
      o.start(i),
      o.stop(i + 0.4));
  },
  tick() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (e && t)
      for (this.t < t.currentTime && (this.t = t.currentTime + 0.12); this.t < t.currentTime + 0.5;) {
        const s = this.s,
          b = s >> 3,
          k = 7 & s,
          sec = b >> 3,
          bi = 7 & b,
          i = this.t,
          E = 0.43,
          [bs, pd] = (2 === sec ? this.PB : this.PA)[bi];
        0 === k && this.pad(i, pd, bs, 8 * E, [0.6, 0.9, 1.1, 0.95][sec]);
        if (sec >= 1 && !(1 & k) && !(3 === sec && 7 === bi)) {
          const ai = (1 & bi ? [0, 2, 1, 3] : [0, 1, 2, 3])[k >> 1];
          this.gl(this.mf(pd[ai] + 12), i, 0.5, 2 === sec ? 0.026 : 0.02, e.bus);
        }
        2 === sec && (0 === k || 4 === k) && this.pulse(i);
        if (0 !== sec || bi >= 4) {
          const g = 0 === sec ? 0.05 : 0.078;
          (2 === sec ? this.MB : this.MA)[bi].forEach(([st, n, d]) => {
            st === k &&
              (this.gl(this.mf(n), i, d * E, g, e.bus),
              3 === sec && d >= 2 && this.gl(this.mf(n + 12), i + 0.01, d * E, 0.03, e.bus));
          });
        }
        7 === k &&
          sec > 0 &&
          Math.random() < 0.4 &&
          this.gl(this.mf(pd[(4 * Math.random()) | 0] + 24), i, 0.4, 0.028, e.bus);
        this.t += E;
        let n = s + 1;
        (n >= 256 && (n = 64), (this.s = n));
      }
  },
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    ((t.gain.value = 0), t.connect(mg));
    const a = e.createDelay(1.5);
    a.delayTime.value = 0.45;
    const s = e.createGain();
    s.gain.value = 0.2;
    const n = e.createBiquadFilter();
    ((n.type = "lowpass"), (n.frequency.value = 1700), a.connect(n), n.connect(s), s.connect(a));
    const o = e.createGain();
    ((o.gain.value = 0.28), n.connect(o), o.connect(t));
    const i = e.createGain();
    (i.connect(t), i.connect(a));
    const r = e.createGain();
    r.gain.value = 0.55;
    const l = e.createBiquadFilter();
    ((l.type = "lowpass"), (l.frequency.value = 650), (l.Q.value = 0.8), l.connect(r), r.connect(t));
    const c = e.createOscillator(),
      d = e.createGain();
    ((c.frequency.value = 0.07),
      (d.gain.value = 360),
      c.connect(d),
      d.connect(l.frequency),
      c.start(),
      [130.8, 196, 261.6].forEach((t, a) =>
        [-7, 7].forEach((s) => {
          const n = e.createOscillator(),
            o = e.createGain(),
            i = e.createOscillator(),
            r = e.createGain();
          ((n.type = "triangle"),
            (n.frequency.value = t),
            (n.detune.value = s),
            (o.gain.value = 0.022),
            (i.frequency.value = 0.05 + 0.023 * a),
            (r.gain.value = 0.02),
            i.connect(r),
            r.connect(o.gain),
            n.connect(o),
            o.connect(l),
            n.start(),
            i.start());
        }),
      ));
    const f = 3 * e.sampleRate,
      u = e.createBuffer(1, f, e.sampleRate),
      h = u.getChannelData(0);
    let p = 0;
    for (let e = 0; e < f; e++) ((p = 0.97 * p + 0.03 * (2 * Math.random() - 1)), (h[e] = 7 * p));
    const m = e.createBufferSource();
    ((m.buffer = u), (m.loop = !0));
    const b = e.createBiquadFilter();
    ((b.type = "bandpass"), (b.frequency.value = 420), (b.Q.value = 0.6));
    const g = e.createGain();
    g.gain.value = 0.04;
    const E = e.createOscillator(),
      y = e.createGain();
    ((E.frequency.value = 0.11),
      (y.gain.value = 0.08),
      E.connect(y),
      y.connect(g.gain),
      m.connect(b),
      b.connect(g),
      g.connect(t),
      m.start(),
      E.start(),
      (this.L = { out: t, bus: i }));
  },
  pip() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (!e || !t) return;
    const a = t.currentTime,
      s = t.createOscillator(),
      n = t.createGain();
    if (((s.type = "sine"), Math.random() < 0.55)) {
      const t = 380 + 520 * Math.random();
      (s.frequency.setValueAtTime(t, a),
        s.frequency.exponentialRampToValueAtTime(1.7 * t, a + 0.14),
        n.gain.setValueAtTime(1e-4, a),
        n.gain.exponentialRampToValueAtTime(0.1, a + 0.02),
        n.gain.exponentialRampToValueAtTime(1e-4, a + 0.2),
        s.connect(n),
        n.connect(e.bus),
        s.start(a),
        s.stop(a + 0.25));
    } else {
      const o = [523.3, 587.3, 659.3, 784, 880, 1046.5],
        i = o[(Math.random() * o.length) | 0],
        r = t.createOscillator(),
        l = t.createGain();
      ((s.frequency.value = i),
        (r.frequency.value = 2 * i),
        (r.type = "sine"),
        (l.gain.value = 0.25),
        n.gain.setValueAtTime(1e-4, a),
        n.gain.exponentialRampToValueAtTime(0.08, a + 0.012),
        n.gain.exponentialRampToValueAtTime(1e-4, a + 1.5),
        s.connect(n),
        r.connect(l),
        l.connect(n),
        n.connect(e.bus),
        s.start(a),
        r.start(a),
        s.stop(a + 1.6),
        r.stop(a + 1.6));
    }
  },
  fx(e, t) {
    const a = AC;
    if (!a || !mg) return;
    const s = a.currentTime;
    if (!this.F) {
      const e = a.createGain(),
        t = a.createDelay(1),
        s = a.createGain(),
        n = a.createBiquadFilter(),
        o = a.createGain();
      ((t.delayTime.value = 0.27),
        (s.gain.value = 0.33),
        (n.type = "lowpass"),
        (n.frequency.value = 1600),
        (o.gain.value = 0.45),
        e.connect(mg),
        e.connect(t),
        t.connect(n),
        n.connect(s),
        s.connect(t),
        n.connect(o),
        o.connect(mg));
      const i = 0.6 * a.sampleRate,
        r = a.createBuffer(1, i, a.sampleRate),
        l = r.getChannelData(0);
      for (let e = 0; e < i; e++) l[e] = 2 * Math.random() - 1;
      this.F = { bus: e, nb: r };
    }
    const n = this.F,
      o = (e, t, o, i) => {
        const r = a.createBufferSource(),
          l = a.createBiquadFilter(),
          c = a.createGain();
        ((r.buffer = n.nb),
          (l.type = "bandpass"),
          (l.Q.value = 0.9),
          l.frequency.setValueAtTime(o, s),
          l.frequency.exponentialRampToValueAtTime(i, s + t),
          c.gain.setValueAtTime(1e-4, s),
          c.gain.exponentialRampToValueAtTime(e, s + 0.25 * t),
          c.gain.exponentialRampToValueAtTime(1e-4, s + t),
          r.connect(l),
          l.connect(c),
          c.connect(n.bus),
          r.start(s),
          r.stop(s + t + 0.05));
      },
      i = (e, t, s) => {
        const o = a.createOscillator(),
          i = a.createGain();
        ((o.type = "sine"),
          o.frequency.setValueAtTime(t, e),
          o.frequency.exponentialRampToValueAtTime(1.8 * t, e + 0.12),
          i.gain.setValueAtTime(1e-4, e),
          i.gain.exponentialRampToValueAtTime(s, e + 0.015),
          i.gain.exponentialRampToValueAtTime(1e-4, e + 0.17),
          o.connect(i),
          i.connect(n.bus),
          o.start(e),
          o.stop(e + 0.2));
      };
    if (t < 0.22) {
      const t = 0.9 * e;
      (i(s, t, 0.16), i(s + 0.045, 1.25 * t, 0.12), i(s + 0.1, 1.58 * t, 0.09), o(0.07, 0.2, 1800, 500));
    } else if (t >= 0.28 && e >= 800) {
      o(0.11, 0.55, 300, 1800);
      const t = a.createOscillator(),
        i = a.createGain();
      ((t.type = "sine"),
        (t.frequency.value = 1.5 * e),
        i.gain.setValueAtTime(1e-4, s + 0.12),
        i.gain.exponentialRampToValueAtTime(0.1, s + 0.14),
        i.gain.exponentialRampToValueAtTime(1e-4, s + 1.4),
        t.connect(i),
        i.connect(n.bus),
        t.start(s + 0.12),
        t.stop(s + 1.5));
    } else {
      const i = a.createOscillator(),
        r = a.createOscillator(),
        l = a.createGain(),
        c = a.createGain();
      ((i.type = "sine"),
        (r.type = "sine"),
        (i.frequency.value = e),
        (r.frequency.value = 2 * e),
        (c.gain.value = 0.22),
        l.gain.setValueAtTime(1e-4, s),
        l.gain.exponentialRampToValueAtTime(0.16, s + 0.012),
        l.gain.exponentialRampToValueAtTime(1e-4, s + Math.max(0.5, 2.2 * t)),
        i.connect(l),
        r.connect(c),
        c.connect(l),
        l.connect(n.bus),
        i.start(s),
        r.start(s),
        i.stop(s + Math.max(0.5, 2.2 * t) + 0.1),
        r.stop(s + Math.max(0.5, 2.2 * t) + 0.1),
        o(0.05, 0.3, 900, 350));
    }
  },
  loop() {
    (clearTimeout(this.T),
      this.on &&
        (!this.L && void 0 !== AC && AC && (this.build(), apply()),
        this.L && (!document.hidden || bgOn()) && prefs().music && this.tick(),
        (this.T = setTimeout(() => this.loop(), 110))));
  },
  vol(e) {
    this.L &&
      void 0 !== AC &&
      AC &&
      this.L.out.gain.setTargetAtTime(e && this.on ? 0.9 : 0, AC.currentTime, 1.4);
  },
  set(e) {
    (e = !!e) !== this.on &&
      ((this.on = e),
      e
        ? (Date.now() - (this.off || 0) > 45e3 && ((this.s = 0), (this.t = 0)), this.build(), this.loop())
        : (clearTimeout(this.T), (this.off = Date.now())),
      void 0 !== AC && AC && void 0 !== music && music && apply());
  },
};
function m3Mus(e) {
  "object" == typeof aqMu && aqMu.set(e);
}
var xmMu = {
  on: !1,
  L: null,
  T: 0,
  s: 0,
  t: 0,
  CH: [
    [43, [55, 59, 62, 67, 71, 74]],
    [40, [52, 55, 59, 64, 67, 71]],
    [48, [60, 64, 67, 72, 76, 79]],
    [50, [57, 62, 66, 69, 74, 78]],
    [43, [55, 59, 62, 67, 71, 74]],
    [40, [52, 55, 59, 64, 67, 71]],
    [48, [60, 64, 67, 72, 76, 79]],
    [50, [57, 62, 66, 69, 74, 78]],
    [40, [52, 55, 59, 64, 67, 71]],
    [48, [60, 64, 67, 72, 76, 79]],
    [43, [55, 59, 62, 67, 71, 74]],
    [50, [57, 62, 66, 69, 74, 78]],
    [48, [60, 64, 67, 72, 76, 79]],
    [43, [55, 59, 62, 67, 71, 74]],
    [45, [57, 60, 64, 69, 72, 76]],
    [50, [57, 62, 66, 69, 74, 78]],
  ],
  MEL: [
    [
      [71, 2],
      [74, 2],
      [79, 3],
      [76, 1],
    ],
    [
      [74, 2],
      [71, 2],
      [76, 4],
    ],
    [
      [76, 2],
      [79, 2],
      [76, 2],
      [72, 2],
    ],
    [
      [74, 4],
      [69, 2],
      [71, 2],
    ],
    [
      [71, 2],
      [74, 2],
      [79, 3],
      [81, 1],
    ],
    [
      [83, 3],
      [79, 1],
      [76, 4],
    ],
    [
      [79, 2],
      [76, 2],
      [74, 2],
      [72, 2],
    ],
    [
      [74, 6],
      [0, 2],
    ],
    [
      [76, 2],
      [79, 2],
      [83, 4],
    ],
    [
      [81, 2],
      [79, 2],
      [76, 4],
    ],
    [
      [74, 2],
      [79, 2],
      [83, 3],
      [81, 1],
    ],
    [
      [78, 4],
      [81, 2],
      [78, 2],
    ],
    [
      [79, 2],
      [76, 2],
      [79, 4],
    ],
    [
      [83, 2],
      [79, 2],
      [74, 4],
    ],
    [
      [76, 2],
      [72, 2],
      [71, 2],
      [69, 2],
    ],
    [
      [74, 4],
      [69, 2],
      [74, 2],
    ],
  ],
  PAT: [0, 1, 2, 3, 2, 1, 3, 2],
  E: 0.34,
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const e = void 0 !== AC ? AC : null;
    if (!e || void 0 === mg || !mg || this.L) return;
    const t = e.createGain();
    ((t.gain.value = 0), t.connect(mg));
    const a = e.createDelay(1.2),
      s = e.createGain(),
      n = e.createBiquadFilter(),
      o = e.createGain();
    ((a.delayTime.value = 0.34),
      (s.gain.value = 0.34),
      (n.type = "lowpass"),
      (n.frequency.value = 3200),
      (o.gain.value = 0.42),
      a.connect(n),
      n.connect(s),
      s.connect(a),
      n.connect(o),
      o.connect(t));
    const i = e.createGain();
    (i.connect(t), i.connect(a));
    const r = 0.4 * e.sampleRate,
      l = e.createBuffer(1, r, e.sampleRate),
      c = l.getChannelData(0);
    for (let e = 0; e < r; e++) c[e] = 2 * Math.random() - 1;
    const d = {};
    let f = 0;
    (this.MEL.forEach((e) =>
      e.forEach(([e, t]) => {
        (e && (d[f] = [e, t]), (f += t));
      }),
    ),
      (this.L = { out: t, bus: i, nb: l, M: d }));
  },
  cel(e, t, a, s, n) {
    const o = AC;
    [
      [1, 1],
      [2, 0.3],
      [4.01, 0.09],
    ].forEach(([i, r]) => {
      const l = o.createOscillator(),
        c = o.createGain();
      ((l.type = "sine"),
        (l.frequency.value = e * i),
        c.gain.setValueAtTime(1e-4, t),
        c.gain.exponentialRampToValueAtTime(s * r, t + 0.008),
        c.gain.exponentialRampToValueAtTime(1e-4, t + a / i ** 0.35),
        l.connect(c),
        c.connect(n),
        l.start(t),
        l.stop(t + a + 0.1));
    });
  },
  kal(e, t, a, s, n = 0.5) {
    const o = AC;
    [
      [1, 1, n],
      [5.4, 0.07, 0.07],
    ].forEach(([n, i, r]) => {
      const l = o.createOscillator(),
        c = o.createGain();
      ((l.type = "sine"),
        (l.frequency.value = e * n),
        c.gain.setValueAtTime(1e-4, t),
        c.gain.exponentialRampToValueAtTime(a * i, t + 0.002),
        c.gain.exponentialRampToValueAtTime(1e-4, t + r),
        l.connect(c),
        c.connect(s),
        l.start(t),
        l.stop(t + r + 0.05));
    });
  },
  harp(e, t, a, s) {
    const n = AC,
      o = n.createOscillator(),
      i = n.createGain(),
      r = n.createBiquadFilter();
    ((o.type = "triangle"),
      (o.frequency.value = e),
      (r.type = "lowpass"),
      (r.frequency.value = 2200),
      i.gain.setValueAtTime(1e-4, t),
      i.gain.exponentialRampToValueAtTime(a, t + 0.01),
      i.gain.exponentialRampToValueAtTime(1e-4, t + 1.1),
      o.connect(r),
      r.connect(i),
      i.connect(s),
      o.start(t),
      o.stop(t + 1.2));
  },
  pad(e, t, a, s, n) {
    const o = AC,
      i = o.createOscillator(),
      r = o.createGain();
    ((i.type = "sine"),
      (i.frequency.value = e),
      r.gain.setValueAtTime(1e-4, t),
      r.gain.linearRampToValueAtTime(s, t + 0.35 * a),
      r.gain.linearRampToValueAtTime(1e-4, t + 1.25 * a),
      i.connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + 1.3 * a));
  },
  jing(e, t, a, s) {
    const n = AC,
      o = n.createBufferSource(),
      i = n.createBiquadFilter(),
      r = n.createGain();
    ((o.buffer = s),
      (o.playbackRate.value = 1 + 0.2 * Math.random()),
      (i.type = "bandpass"),
      (i.frequency.value = 6800 + 1500 * Math.random()),
      (i.Q.value = 2.2),
      r.gain.setValueAtTime(1e-4, e),
      r.gain.exponentialRampToValueAtTime(t, e + 0.008),
      r.gain.exponentialRampToValueAtTime(1e-4, e + 0.14),
      o.connect(i),
      i.connect(r),
      r.connect(a),
      o.start(e),
      o.stop(e + 0.2));
  },
  tick() {
    const e = this.L,
      t = void 0 !== AC ? AC : null;
    if (e && t)
      for (this.t < t.currentTime && (this.t = t.currentTime + 0.12); this.t < t.currentTime + 0.4;) {
        const t = this.s,
          a = (t >> 3) % 16,
          s = t % 8,
          [n, o] = this.CH[a],
          i = this.t,
          r = this.E;
        (0 === s &&
          ([o[0], o[2], o[3]].forEach((t, a) => this.pad(this.mf(t - 12), i, 8 * r, 0.03, e.bus)),
          this.harp(this.mf(n), i, 0.1, e.bus)),
          4 === s && this.harp(this.mf(n + 7), i, 0.06, e.bus),
          this.harp(this.mf(o[this.PAT[s]]), i, 0 === s ? 0.05 : 0.035, e.bus));
        const l = e.M[t];
        (l && this.cel(this.mf(l[0]), i, Math.min(2.2, l[1] * r + 1), 0.13, e.bus),
          (2 !== s && 6 !== s) || this.jing(i, 0.035, e.bus, e.nb),
          5 === s &&
            Math.random() < 0.35 &&
            this.cel(this.mf(o[4 + Math.floor(2 * Math.random())] + 12), i, 1.4, 0.04, e.bus),
          (this.t += r),
          (this.s = (this.s + 1) % 128));
      }
  },
  sn(e) {
    const t = Math.round(69 + 12 * Math.log2(e / 440)),
      a = [7, 9, 11, 2, 4];
    let s = t,
      n = 99;
    for (let e = -3; e <= 3; e++)
      a.includes((((t + e) % 12) + 12) % 12) && Math.abs(e) < n && ((n = Math.abs(e)), (s = t + e));
    for (; s < 67;) s += 12;
    for (; s > 88;) s -= 12;
    return s;
  },
  fx(e, t) {
    const a = AC;
    if (!a || !mg) return;
    if (!this.F) {
      const e = a.createGain(),
        t = a.createDelay(1),
        s = a.createGain(),
        n = a.createBiquadFilter(),
        o = a.createGain();
      ((t.delayTime.value = 0.22),
        (s.gain.value = 0.28),
        (n.type = "lowpass"),
        (n.frequency.value = 3200),
        (o.gain.value = 0.38),
        e.connect(mg),
        e.connect(t),
        t.connect(n),
        n.connect(s),
        s.connect(t),
        n.connect(o),
        o.connect(mg));
      const i = 0.4 * a.sampleRate,
        r = a.createBuffer(1, i, a.sampleRate),
        l = r.getChannelData(0);
      for (let e = 0; e < i; e++) l[e] = 2 * Math.random() - 1;
      this.F = { bus: e, nb: r };
    }
    const s = this.F,
      n = a.currentTime,
      o = this.sn(e);
    t < 0.22
      ? this.kal(this.mf(o), n, 0.08, s.bus, 0.2)
      : t >= 0.6
        ? ([0, 4, 7, 12].forEach((e, t) =>
            this.cel(this.mf(this.sn(this.mf(o + e))), n + 0.09 * t, 1.4, 0.14, s.bus),
          ),
          this.jing(n + 0.3, 0.05, s.bus, s.nb))
        : this.kal(this.mf(o), n, 0.09, s.bus, 0.24);
  },
  loop() {
    (clearTimeout(this.T),
      this.on &&
        (!this.L && void 0 !== AC && AC && (this.build(), apply()),
        this.L && (!document.hidden || bgOn()) && prefs().music && this.tick(),
        (this.T = setTimeout(() => this.loop(), 120))));
  },
  vol(e) {
    this.L &&
      void 0 !== AC &&
      AC &&
      this.L.out.gain.setTargetAtTime(e && this.on ? 0.9 : 0, AC.currentTime, 0.8);
  },
  set(e) {
    (e = !!e) !== this.on &&
      ((this.on = e),
      e ? ((this.t = 0), (this.s = 0), this.build(), this.loop()) : clearTimeout(this.T),
      void 0 !== AC && AC && void 0 !== music && music && apply());
  },
};
const PRT = [
  0,
  { r: 60, s: [0, 2, 4, 5, 7, 9, 11], p: [0, 5, 3, 4, 0, 2, 3, 4], b: 72, l: "bell", h: 0 },
  { r: 62, s: [0, 2, 3, 5, 7, 9, 10], p: [0, 3, 0, 4, 0, 3, 6, 4], b: 62, l: "flute", h: 2 },
  { r: 57, s: [0, 2, 3, 5, 7, 8, 10], p: [0, 5, 2, 6, 0, 5, 3, 4], b: 54, l: "glass", h: 1, sv: 1.2 },
  { r: 64, s: [0, 2, 4, 6, 7, 9, 11], p: [0, 1, 0, 4, 0, 1, 5, 4], b: 56, l: "bell", h: 1 },
  { r: 65, s: [0, 2, 4, 5, 7, 9, 10], p: [0, 6, 3, 0, 0, 6, 3, 4], b: 66, l: "flute", h: 0 },
  { r: 55, s: [0, 2, 4, 5, 7, 9, 11], p: [0, 4, 5, 3, 0, 4, 3, 0], b: 60, l: "bell", h: 2 },
  {
    r: 62,
    s: [0, 2, 3, 5, 7, 8, 10],
    p: [0, 5, 3, 6, 0, 5, 2, 4],
    b: 50,
    l: "cello",
    h: 1,
    sv: 1.3,
    mo: -12,
  },
  { r: 58, s: [0, 2, 4, 5, 7, 9, 11], p: [0, 3, 4, 0, 5, 3, 4, 0], b: 74, l: "bell", h: 0 },
  { r: 57, s: [0, 2, 4, 5, 7, 9, 10], p: [0, 6, 3, 0, 0, 6, 4, 0], b: 68, l: "flute", h: 2 },
  { r: 63, s: [0, 2, 4, 6, 7, 9, 11], p: [0, 1, 4, 0, 5, 1, 0, 4], b: 48, l: "glass", h: 1, sv: 1.4 },
];
function prTheme(e) {
  if (!e)
    return {
      B: 1.04,
      l: "flute",
      h: 0,
      sv: 1,
      lv: 1,
      CH: [
        [36, [55, 60, 64, 71]],
        [33, [55, 60, 64, 69]],
        [41, [53, 57, 60, 64]],
        [43, [55, 59, 62, 64]],
        [40, [55, 59, 62, 67]],
        [45, [57, 60, 64, 71]],
        [41, [53, 57, 60, 64]],
        [43, [55, 62, 65, 67]],
      ],
      ML: [
        [
          [79, 2],
          [76, 1],
          [74, 1],
        ],
        [
          [72, 2],
          [76, 2],
        ],
        [
          [77, 2],
          [76, 1],
          [72, 1],
        ],
        [
          [74, 3],
          [0, 1],
        ],
        [
          [79, 2],
          [83, 1],
          [81, 1],
        ],
        [
          [79, 1.5],
          [76, 0.5],
          [72, 2],
        ],
        [
          [77, 2],
          [74, 1],
          [72, 1],
        ],
        [
          [71, 2],
          [74, 2],
        ],
      ],
    };
  const q = PRT[e];
  let a = 1013 * e;
  const R = () => {
      a = (a + 1831565813) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      return ((t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t), ((t ^ (t >>> 14)) >>> 0) / 4294967296);
    },
    M = (j) => q.r + q.s[((j % 7) + 7) % 7] + 12 * Math.floor(j / 7),
    CH = q.p.map((d) => {
      const t = [0, 2, 4, 6]
        .map((i) => M(d + i))
        .map((n) => {
          for (; n > q.r + 9;) n -= 12;
          for (; n < q.r - 7;) n += 12;
          return n;
        })
        .sort((a, b) => a - b);
      let b = M(d) - 24;
      for (; b < 31;) b += 12;
      return [b, t];
    });
  let pv = q.p[0] + 7;
  const ML = q.p.map((d, bi) => {
    const P = [
        [2, 1, 1],
        [2, 2],
        [1, 1, 2],
        [3, 1],
        [1.5, 0.5, 2],
        [1, 1, 1, 1],
      ],
      pt = 3 === bi ? [3, 1] : 7 === bi ? [2, 2] : P[(R() * P.length) | 0];
    let ix = pv;
    const out = pt.map((du, k) => {
      if (0 === k) {
        const ct = [d, d + 2, d + 4].map((i) => i + 7);
        ix = ct.reduce((a, c) => (Math.abs(c - pv) < Math.abs(a - pv) ? c : a), ct[0]);
      } else ix += (R() < 0.5 ? -1 : 1) * (R() < 0.3 ? 2 : 1);
      return (
        (ix = Math.max(5, Math.min(14, ix))),
        7 === bi && k === pt.length - 1 && (ix = 7),
        3 === bi && 1 === k ? [0, du] : [M(ix) + (q.mo || 0), du]
      );
    });
    return ((pv = ix), out);
  });
  return { B: (1.14 * 60) / q.b, CH, ML, l: q.l, h: q.h, sv: q.sv || 1, lv: 1 };
}
var prMu = {
  on: !1,
  L: null,
  T: 0,
  t: 0,
  n: 0,
  B: 0.909,
  nk: 0,
  ck: null,
  th: null,
  mf: (e) => 440 * Math.pow(2, (e - 69) / 12),
  build() {
    const a = void 0 !== AC ? AC : null;
    if (!a || void 0 === mg || !mg || this.L) return;
    const o = a.createGain();
    ((o.gain.value = 0), o.connect(mg));
    const b = a.createGain(),
      s = a.createGain(),
      l = a.createBiquadFilter(),
      c = a.createConvolver(),
      w = a.createGain(),
      f = a.createBiquadFilter(),
      r = Math.floor(3.6 * a.sampleRate),
      u = a.createBuffer(2, r, a.sampleRate);
    for (let e = 0; e < 2; e++) {
      const t = u.getChannelData(e);
      for (let e = 0; e < r; e++) t[e] = (2 * Math.random() - 1) * Math.pow(1 - e / r, 2.2);
    }
    ((c.buffer = u),
      b.connect(o),
      (s.gain.value = 0.55),
      b.connect(s),
      (l.type = "lowpass"),
      (l.frequency.value = 2600),
      s.connect(l),
      l.connect(c),
      (w.gain.value = 0.72),
      c.connect(w),
      w.connect(o),
      (f.type = "lowpass"),
      (f.frequency.value = 900),
      f.connect(b),
      (this.L = { out: o, bus: b, sl: f }));
  },
  harp(e, t, v) {
    const a = AC,
      o = this.L.bus;
    [
      [1, 1, "triangle"],
      [2, 0.25, "sine"],
    ].forEach(([r, g, y]) => {
      const s = a.createOscillator(),
        n = a.createGain();
      ((s.type = y),
        (s.frequency.value = e * r),
        n.gain.setValueAtTime(1e-4, t),
        n.gain.exponentialRampToValueAtTime(v * g, t + 0.005),
        n.gain.exponentialRampToValueAtTime(1e-4, t + 1.7),
        s.connect(n),
        n.connect(o),
        s.start(t),
        s.stop(t + 1.8));
    });
  },
  str(e, t, d, v) {
    const a = AC,
      o = this.L.sl;
    [-7, 7].forEach((r) => {
      const s = a.createOscillator(),
        n = a.createGain();
      ((s.type = "sawtooth"),
        (s.frequency.value = e),
        (s.detune.value = r),
        n.gain.setValueAtTime(1e-4, t),
        n.gain.linearRampToValueAtTime(v, t + 1.2),
        n.gain.setValueAtTime(v, t + d - 1.4),
        n.gain.linearRampToValueAtTime(1e-4, t + d),
        s.connect(n),
        n.connect(o),
        s.start(t),
        s.stop(t + d + 0.1));
    });
  },
  bass(e, t, d, v) {
    const a = AC,
      s = a.createOscillator(),
      n = a.createGain();
    ((s.type = "sine"),
      (s.frequency.value = e),
      n.gain.setValueAtTime(1e-4, t),
      n.gain.linearRampToValueAtTime(v, t + 0.12),
      n.gain.linearRampToValueAtTime(v * 0.55, t + d),
      n.gain.linearRampToValueAtTime(1e-4, t + d + 0.5),
      s.connect(n),
      n.connect(this.L.bus),
      s.start(t),
      s.stop(t + d + 0.6));
  },
  flute(e, t, d, v) {
    const a = AC,
      o = a.createOscillator(),
      o2 = a.createOscillator(),
      g = a.createGain(),
      g2 = a.createGain(),
      l = a.createOscillator(),
      lg = a.createGain();
    ((o.type = "sine"),
      (o2.type = "sine"),
      (o.frequency.value = e),
      (o2.frequency.value = 2 * e),
      (g2.gain.value = 0.12),
      (l.frequency.value = 4.8),
      lg.gain.setValueAtTime(0, t),
      lg.gain.linearRampToValueAtTime(6, t + 0.6),
      l.connect(lg),
      lg.connect(o.detune),
      g.gain.setValueAtTime(1e-4, t),
      g.gain.linearRampToValueAtTime(v, t + 0.1),
      g.gain.setValueAtTime(v, t + d - 0.1),
      g.gain.linearRampToValueAtTime(1e-4, t + d + 0.3),
      o.connect(g),
      o2.connect(g2),
      g2.connect(g),
      g.connect(this.L.bus));
    [o, o2, l].forEach((e) => {
      (e.start(t), e.stop(t + d + 0.4));
    });
  },
  lead(e, t, d, v, l) {
    const a = AC;
    "bell" === l
      ? this.bell(e, t, Math.min(2.8, 1.3 * d + 0.6), 1.5 * v)
      : "glass" === l
        ? [
            [1, 1],
            [3.01, 0.12],
          ].forEach(([r, g]) => {
            const o = a.createOscillator(),
              n = a.createGain();
            ((o.type = "sine"),
              (o.frequency.value = e * r),
              n.gain.setValueAtTime(1e-4, t),
              n.gain.linearRampToValueAtTime(v * g, t + 0.28),
              n.gain.setValueAtTime(v * g, t + d),
              n.gain.linearRampToValueAtTime(1e-4, t + d + 0.9),
              o.connect(n),
              n.connect(this.L.bus),
              o.start(t),
              o.stop(t + d + 1));
          })
        : "cello" === l
          ? (() => {
              const o = a.createOscillator(),
                n = a.createGain(),
                f = a.createBiquadFilter(),
                q = a.createOscillator(),
                qg = a.createGain();
              ((o.type = "sawtooth"),
                (o.frequency.value = e),
                (f.type = "lowpass"),
                (f.frequency.value = 720),
                qg.gain.setValueAtTime(0, t),
                qg.gain.linearRampToValueAtTime(9, t + 0.7),
                (q.frequency.value = 5),
                q.connect(qg),
                qg.connect(o.detune),
                n.gain.setValueAtTime(1e-4, t),
                n.gain.linearRampToValueAtTime(v * 0.5, t + 0.2),
                n.gain.setValueAtTime(v * 0.5, t + d - 0.1),
                n.gain.linearRampToValueAtTime(1e-4, t + d + 0.4),
                o.connect(f),
                f.connect(n),
                n.connect(this.L.bus),
                [o, q].forEach((x) => {
                  (x.start(t), x.stop(t + d + 0.5));
                }));
            })()
          : this.flute(e, t, d, v);
  },
  bell(e, t, d, v) {
    const a = AC,
      o = this.L.bus;
    [
      [1, 1, d],
      [2.76, 0.1, d * 0.25],
      [5.4, 0.03, d * 0.12],
    ].forEach(([r, g, l]) => {
      const s = a.createOscillator(),
        n = a.createGain();
      ((s.type = "sine"),
        (s.frequency.value = e * r),
        n.gain.setValueAtTime(1e-4, t),
        n.gain.exponentialRampToValueAtTime(v * g, t + 0.006),
        n.gain.exponentialRampToValueAtTime(1e-4, t + l),
        s.connect(n),
        n.connect(o),
        s.start(t),
        s.stop(t + l + 0.1));
    });
  },
  sw(e) {
    this.nk = e || 0;
  },
  bar(t) {
    (null !== this.ck && this.ck === this.nk) ||
      ((this.ck = this.nk), (this.th = prTheme(this.ck)), (this.n = 0));
    const T = this.th,
      n = this.n++,
      c = T.CH[n % 8],
      m = T.ML[n % 8],
      B = T.B,
      od = Math.floor(n / 8) % 2;
    (c[1].forEach((e) => this.str(this.mf(e), t, 4 * B + 1.4, 0.016 * T.sv)),
      this.bass(this.mf(c[0]), t, 4 * B, 0.09));
    const A = c[1].concat(c[1].slice(0, 2).map((e) => e + 12)),
      P = [
        [0, 1, 2, 3, 4, 5, 4, 3],
        [0, -1, 2, -1, 4, -1, 2, -1],
        [5, 4, 3, 2, 3, 4, 2, 1],
      ][T.h],
      Q = od && 0 === T.h ? [5, 4, 3, 2, 3, 4, 2, 1] : P;
    Q.forEach((e, k) => {
      e >= 0 && this.harp(this.mf(A[e]), t + (k * B) / 2, 0.024 + 0.008 * Math.random());
    });
    for (let k = 0; k < 3; k++)
      if (Math.random() < 0.7) {
        const q = A[Math.floor(Math.random() * A.length)] + 12;
        this.bell(
          this.mf(q + (Math.random() < 0.5 ? 12 : 0)),
          t + ((0.5 + Math.floor(Math.random() * 7)) * B) / 2,
          3.2,
          0.011,
        );
      }
    let u = 0;
    m.forEach(([e, d]) => {
      (e && this.lead(this.mf(e - (od && n % 8 < 4 ? 12 : 0)), t + u * B, d * B * 0.97, 0.06 * T.lv, T.l),
        (u += d));
    });
  },
  loop() {
    clearTimeout(this.T);
    if (!this.on) return;
    if (!this.__pl && !$("#sfr .prb")) return this.set(!1);
    if (this.L && void 0 !== AC && AC && (!document.hidden || bgOn()) && prefs().music) {
      const e = AC.currentTime;
      for (this.t < e && (this.t = e + 0.2); this.t < e + 1.4;) (this.bar(this.t), (this.t += 4 * this.th.B));
    }
    this.T = setTimeout(() => this.loop(), 200);
  },
  set(e) {
    (e = !!e) !== this.on &&
      ((this.on = e),
      e
        ? ((this.t = 0),
          (this.n = 0),
          (this.ck = null),
          this.build(),
          this.L && void 0 !== AC && AC && this.L.out.gain.setTargetAtTime(0.9, AC.currentTime, 1.2),
          this.loop())
        : (clearTimeout(this.T),
          this.L && void 0 !== AC && AC && this.L.out.gain.setTargetAtTime(0, AC.currentTime, 0.6)),
      void 0 !== AC && AC && void 0 !== music && music && apply());
  },
};
function prMus(e, k) {
  if (PLK && !PLPA && /^pr\d+$/.test(PLK)) return;
  "object" == typeof prMu && ((prMu.nk = k || 0), prMu.set(!(!e || (void 0 !== PLK && PLK && !PLPA))));
}
function xmMus(e) {
  "object" == typeof xmMu && ((xmMu.want = !!e), xmMu.set(!(!e || (void 0 !== PLK && PLK && !PLPA))));
}
Object.assign(DIT, {
  bottle: [
    "Biberon",
    '<rect x="11" y="10" width="10" height="18" rx="4" fill="#eef6ff" stroke="#9cc3e6"/><rect x="11.5" y="18" width="9" height="9.5" rx="3" fill="#ffe7b0"/><rect x="10" y="7" width="12" height="4" rx="1.5" fill="#7fc0ee"/><path d="M13.5 7Q16 1 18.5 7z" fill="#f2c79a"/><path d="M13 14h3M13 17h3M13 20h3" stroke="#9cc3e6" stroke-width="1"/>',
  ],
  diapers: [
    "Couches",
    '<rect x="5" y="9" width="22" height="18" rx="3" fill="#bfe3ff"/><rect x="5" y="9" width="22" height="6" rx="3" fill="#e9f6ff"/><circle cx="16" cy="19.5" r="4.2" fill="#ffd36b"/><path d="M14 19q2 2 4 0" stroke="#c98a2a" stroke-width="1" fill="none"/><circle cx="14.6" cy="18" r=".6" fill="#7a4a1a"/><circle cx="17.4" cy="18" r=".6" fill="#7a4a1a"/>',
  ],
  onesie: [
    "Pyjama de bébé",
    '<path d="M11 4h10l5 5-3 4-2-1v6l3 8h-6l-2-4-2 4H8l3-8v-6l-2 1-3-4z" fill="#f4b6c9"/><path d="M13 4q3 3 6 0" fill="#f8d3df"/><circle cx="16" cy="12" r="1.2" fill="#fff"/><circle cx="16" cy="16" r="1.2" fill="#fff"/><path d="M8.5 24h5M18.5 24h5" stroke="#e892ae" stroke-width="1.4"/>',
  ],
  rattle: [
    "Hochet",
    '<rect x="15" y="14" width="4" height="14" rx="2" fill="#7fc0ee" transform="rotate(-35 17 21)"/><circle cx="12" cy="11" r="7" fill="#ffd36b"/><circle cx="12" cy="11" r="4.2" fill="#ff9ab8"/><circle cx="10.5" cy="9.5" r="1.4" fill="#fff" opacity=".8"/><circle cx="24.5" cy="26" r="3" fill="#ffd36b"/>',
  ],
  coat: [
    "Manteau",
    '<path d="M16 3.5a2 2 0 1 1 2 2L16 7" fill="none" stroke="#8a8f9a" stroke-width="1.4"/><path d="M8.5 10 16 7l7.5 3L26 28H6z" fill="#c9734a"/><path d="M16 7v21" stroke="#9a5232" stroke-width="1.2"/><path d="M12 8.6l4 5 4-5" fill="#e09a70"/><circle cx="17.6" cy="15" r="1" fill="#f2d39a"/><circle cx="17.6" cy="20" r="1" fill="#f2d39a"/><path d="M9 19h4M19.5 19h4" stroke="#9a5232" stroke-width="1.2"/>',
  ],
  hat: [
    "Tuque",
    '<path d="M7 22q0-14 9-14t9 14z" fill="#d9555f"/><path d="M11 12v8M16 9v11M21 12v8" stroke="#b8414b" stroke-width="1.2"/><rect x="5.5" y="20" width="21" height="6" rx="3" fill="#f4efe6"/><circle cx="16" cy="7" r="3.5" fill="#f4efe6"/>',
  ],
  scarf: [
    "Foulard",
    '<path d="M6 8q10 6 20 0v5q-10 6-20 0z" fill="#5fae8a"/><path d="M19 12l2 15h-5l-1-14z" fill="#4f9a78"/><path d="M16.5 27v3M18.5 27v3M20.5 27v3" stroke="#4f9a78" stroke-width="1.2"/><path d="M9 10l2 3M13 11.5l1 3M23 10l-2 3" stroke="#e8f4ec" stroke-width="1.4"/>',
  ],
  boots: [
    "Bottes",
    '<path d="M5 4h8v16l6 3q3 1.5 3 5H5z" fill="#7a5236"/><path d="M5 8h8" stroke="#5c3c26" stroke-width="1.4"/><path d="M14 6h7v14l5 2.6q3 1.4 3 4.4H14z" fill="#8f6242"/><path d="M14 10h7" stroke="#6a4630" stroke-width="1.4"/><rect x="4.6" y="27" width="17.6" height="2.4" rx="1" fill="#3e2a1e"/><rect x="13.6" y="26.4" width="15.8" height="2.4" rx="1" fill="#3e2a1e"/>',
  ],
  sneakers: [
    "Espadrilles",
    '<path d="M3 18q0-6 6-6 3 0 5 3l6 2q9 2 9 7v2H3z" fill="#f4f4f8"/><path d="M3 24h26v3H3z" fill="#7fc0ee"/><path d="M9 14l2 3M12 15l2 3M15 16l1 2" stroke="#7fc0ee" stroke-width="1.4"/><path d="M20 19q4 1 6 3" stroke="#e86a6a" stroke-width="2" fill="none"/>',
  ],
  umbrella: [
    "Parapluie",
    '<path d="M4 15q12-16 24 0q-3-2-6 0-3-2-6 0-3-2-6 0-3-2-6 0z" fill="#6f86d9"/><path d="M10 13q6-9 12 0" fill="#8fa2e8"/><path d="M16 3.5v1.5" stroke="#555" stroke-width="1.6"/><path d="M16 14v11q0 3 3 3t3-3" stroke="#6b4a35" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
  ],
  keys: [
    "Clés",
    '<circle cx="11" cy="12" r="6" fill="none" stroke="#e2b84a" stroke-width="3"/><path d="M15 16l10 10M21 22l3-3M24 25l2-2" stroke="#e2b84a" stroke-width="3" stroke-linecap="round"/><circle cx="21" cy="9" r="4" fill="#e86a6a"/><circle cx="21" cy="9" r="1.4" fill="#fff" opacity=".6"/>',
  ],
  bag: [
    "Sac à main",
    '<path d="M11 12V9a5 5 0 0 1 10 0v3" fill="none" stroke="#7a4a32" stroke-width="2"/><path d="M6 12h20l-2 15H8z" fill="#c98a5a"/><path d="M6.4 15h19.2" stroke="#a96e42" stroke-width="1.2"/><rect x="14" y="16" width="4" height="3" rx="1" fill="#f2d39a"/>',
  ],
  letters: [
    "Courrier",
    '<rect x="4" y="10" width="20" height="14" rx="1.5" fill="#f4efe6" transform="rotate(-8 14 17)"/><rect x="8" y="12" width="20" height="14" rx="1.5" fill="#fff" stroke="#d9cfbd"/><path d="M8 12l10 8 10-8" fill="none" stroke="#d9cfbd" stroke-width="1.2"/><rect x="23" y="14" width="3.5" height="4" fill="#e86a6a"/>',
  ],
  pens: [
    "Pot à crayons",
    '<path d="M12 12V4l1.5-2 1.5 2v8" fill="#ffd36b"/><path d="M16.5 12V6l1.5-2 1.5 2v6" fill="#e86a6a"/><path d="M19.5 12V7.5h2.2V12" fill="#5fae8a"/><path d="M10 12h12l-1.5 16h-9z" fill="#7fc0ee"/><path d="M10.3 15h11.4" stroke="#5fa2d4" stroke-width="1.2"/>',
  ],
  folder: [
    "Classeur",
    '<rect x="7" y="4" width="16" height="24" rx="1.5" fill="#5f86d9"/><rect x="21" y="4" width="3" height="24" fill="#3e5fae"/><rect x="10" y="7" width="10" height="5" rx="1" fill="#fff"/><circle cx="15" cy="21" r="2.4" fill="none" stroke="#3e5fae" stroke-width="1.4"/>',
  ],
  notebook: [
    "Cahier",
    '<rect x="7" y="4" width="18" height="24" rx="2" fill="#f2b84a"/><path d="M10 4v24" stroke="#c98a2a" stroke-width="1.6"/><rect x="13" y="9" width="9" height="4" rx="1" fill="#fff8e6"/><path d="M5 8h4M5 13h4M5 18h4M5 23h4" stroke="#8a8f9a" stroke-width="1.4"/>',
  ],
  earth: [
    "Globe terrestre",
    '<circle cx="16" cy="13" r="9" fill="#7fc0ee"/><path d="M11 8q3 2 2 5t3 4q1 3-1 5M19 6q-1 3 2 4t3 3" fill="none" stroke="#5fae6a" stroke-width="3" stroke-linecap="round"/><path d="M7 13a9 9 0 0 0 18 0" fill="none" stroke="#c98a5a" stroke-width="1.4"/><path d="M16 22v5M11 28h10" stroke="#8a5a36" stroke-width="2.2" stroke-linecap="round"/>',
  ],
  scooter: [
    "Trottinette",
    '<path d="M22 4v20M19 4h6" stroke="#e86a6a" stroke-width="2.6" stroke-linecap="round"/><path d="M6 24h17" stroke="#555a6a" stroke-width="3" stroke-linecap="round"/><circle cx="7" cy="26" r="3" fill="#3e4352"/><circle cx="23" cy="26" r="3" fill="#3e4352"/>',
  ],
  truck: [
    "Camion jouet",
    '<path d="M3 12l3-4h10l3 4" fill="#f2c24a"/><rect x="3" y="12" width="16" height="10" rx="2" fill="#ffd36b"/><path d="M19 15h5l4 4v3h-9z" fill="#e86a6a"/><rect x="21" y="16" width="3" height="3" fill="#bfe3ff"/><circle cx="8" cy="24" r="3" fill="#3e4352"/><circle cx="23" cy="24" r="3" fill="#3e4352"/>',
  ],
  kite: [
    "Cerf-volant",
    '<path d="M16 2l9 10-9 12-9-12z" fill="#ff9ab8"/><path d="M16 2 25 12H16zM16 24 7 12h9z" fill="#ffc2d6"/><path d="M16 2v22M7 12h18" stroke="#fff" stroke-width="1.2"/><path d="M16 24q-3 2 0 3t0 4" stroke="#7a8896" stroke-width="1" fill="none"/>',
  ],
  bowl: [
    "Bols",
    '<path d="M4 15h24q-1 10-12 10T4 15z" fill="#a9d6c8"/><ellipse cx="16" cy="15" rx="12" ry="3" fill="#cdeee4"/><path d="M8 19q8 4 16 0" stroke="#7fbfae" stroke-width="1.2" fill="none"/>',
  ],
  spices: [
    "Épices",
    '<rect x="4" y="12" width="7" height="15" rx="2" fill="#e8946c"/><rect x="12.5" y="10" width="7" height="17" rx="2" fill="#5fae6a"/><rect x="21" y="13" width="7" height="14" rx="2" fill="#f2c24a"/><rect x="4" y="9" width="7" height="4" rx="1" fill="#7a5236"/><rect x="12.5" y="7" width="7" height="4" rx="1" fill="#7a5236"/><rect x="21" y="10" width="7" height="4" rx="1" fill="#7a5236"/><path d="M5.5 18h4M14 17h4M22.5 19h4" stroke="#fff" stroke-width="1.4" opacity=".7"/>',
  ],
  board: [
    "Planche à découper",
    '<rect x="4" y="9" width="22" height="16" rx="4" fill="#d9a066"/><circle cx="23" cy="13" r="1.6" fill="#8a5a36"/><path d="M8 14h11M8 18h13M8 22h9" stroke="#c48a52" stroke-width="1"/>',
  ],
  hairdryer: [
    "Séchoir",
    '<rect x="12" y="18" width="5" height="11" rx="2" fill="#a46ae0"/><path d="M5 9h15a6 6 0 0 1 0 12H5z" fill="#c58aff"/><circle cx="20" cy="15" r="3" fill="#ead9ff"/><path d="M2 12h3M2 15h3M2 18h3" stroke="#a46ae0" stroke-width="1.4"/>',
  ],
  cream: [
    "Crème",
    '<rect x="7" y="14" width="18" height="12" rx="3" fill="#ffd3e0"/><rect x="6" y="10" width="20" height="5" rx="2" fill="#f2a6c0"/><path d="M11 20h10" stroke="#fff" stroke-width="1.6"/>',
  ],
  toothpaste: [
    "Dentifrice",
    '<path d="M4 12h18l4 3v2l-4 3H4z" fill="#f4f8ff" stroke="#9cc3e6"/><path d="M8 12v8M12 12v8" stroke="#e86a6a" stroke-width="2"/><rect x="26" y="14" width="3" height="4" rx="1" fill="#7fc0ee"/>',
  ],
  laundry: [
    "Linge à laver",
    '<path d="M4 24q2-8 8-8t6 4q3-6 8-3t2 9z" fill="#9cc3e6"/><path d="M8 20q4-6 10-2" fill="#f2b84a"/><path d="M14 18q6-4 10 2" fill="#e86a6a" opacity=".85"/><rect x="4" y="24" width="24" height="3" rx="1.5" fill="#7fa6c8"/>',
  ],
});
const DOK = {
  pillow: { c: ["bed"], a: ["sofa"] },
  teddy: { c: ["bed"], a: ["wshelf", "shelf", "dresser", "side", "toybox"] },
  lamp: { c: ["side", "desk"], a: ["dresser", "wshelf", "shelf", "tv", "console"] },
  clock: { c: ["side", "wshelf"], a: ["desk", "dresser", "shelf"] },
  books: { c: ["shelf", "wshelf"], a: ["desk", "side", "dresser", "coffee"] },
  computer: { c: ["desk"], a: [] },
  shirt: { c: ["wardrobe"], a: [] },
  cshirt: { c: ["wardrobe"], a: [] },
  dress: { c: ["wardrobe"], a: [] },
  sweater: { c: ["wardrobe", "drawer"], a: [] },
  socks: { c: ["drawer"], a: ["wardrobe"] },
  poster: { c: ["wall"], a: [] },
  frame: { c: ["wall"], a: ["shelf", "wshelf", "side", "dresser", "console", "desk"] },
  mirror: { c: ["wall"], a: [] },
  plant: {
    c: ["wshelf", "shelf", "side", "dresser", "console", "table"],
    a: ["floor", "desk", "coffee", "tv", "counter", "sink"],
  },
  toothbrush: { c: ["sink"], a: ["wshelf"] },
  toothpaste: { c: ["sink"], a: ["wshelf", "bcab"] },
  soap: { c: ["sink", "tub"], a: ["wshelf"] },
  towel: { c: ["rail"], a: ["hook"] },
  shampoo: { c: ["tub"], a: ["wshelf", "sink"] },
  paper: { c: ["toilet"], a: ["rail", "bcab"] },
  duck: { c: ["tub", "toybox"], a: ["wshelf", "shelf", "sink"] },
  bathmat: { c: ["floor"], a: [] },
  hairdryer: { c: ["bcab"], a: ["sink", "wshelf"] },
  cream: { c: ["wshelf", "sink"], a: ["bcab"] },
  perfume: { c: ["dresser", "wshelf", "sink"], a: ["side", "bcab"] },
  laundry: { c: ["hamper"], a: [] },
  pot: { c: ["cab", "stove"], a: [] },
  pan: { c: ["stove", "cab"], a: [] },
  plate: { c: ["ucab"], a: ["cab", "table"] },
  mug: { c: ["ucab", "desk"], a: ["counter", "table", "side", "coffee", "wshelf"] },
  bowl: { c: ["ucab"], a: ["cab", "table"] },
  cutlery: { c: ["kdrawer"], a: ["table"] },
  spatula: { c: ["kdrawer"], a: ["counter"] },
  kettle: { c: ["stove", "counter"], a: [] },
  toaster: { c: ["counter"], a: ["table"] },
  fruit: { c: ["table"], a: ["counter"] },
  magnet: { c: ["fridge"], a: [] },
  spices: { c: ["wshelf", "ucab"], a: ["counter"] },
  board: { c: ["counter"], a: ["kdrawer", "cab"] },
  tv: { c: ["tv"], a: [] },
  gamepad: { c: ["tv"], a: ["coffee", "sofa"] },
  remote: { c: ["coffee"], a: ["sofa", "tv", "side"] },
  book: { c: ["shelf", "coffee", "side"], a: ["wshelf", "desk", "sofa", "bed", "dresser"] },
  cushion: { c: ["sofa"], a: ["bed"] },
  blanket: { c: ["sofa", "bed"], a: [] },
  vase: { c: ["side", "wshelf"], a: ["coffee", "shelf", "tv", "console", "table"] },
  quilt: { c: ["bed"], a: [] },
  jewel: { c: ["dresser"], a: ["side"] },
  bottle: { c: ["change"], a: ["shelf", "wshelf", "side"] },
  diapers: { c: ["bdrawer"], a: ["change", "shelf"] },
  onesie: { c: ["bdrawer"], a: ["change"] },
  rattle: { c: ["toybox"], a: ["bed", "shelf"] },
  blocks: { c: ["toybox"], a: ["shelf", "floor"] },
  nightlight: { c: ["wshelf", "shelf"], a: ["change", "side"] },
  horse: { c: ["floor"], a: [] },
  coat: { c: ["hook"], a: [] },
  hat: { c: ["hook"], a: ["bench", "console"] },
  scarf: { c: ["hook"], a: ["bench"] },
  boots: { c: ["shoes"], a: ["floor"] },
  sneakers: { c: ["shoes"], a: ["floor"] },
  umbrella: { c: ["ustand"], a: ["hook"] },
  keys: { c: ["console"], a: ["bench"] },
  bag: { c: ["hook", "bench"], a: ["console"] },
  letters: { c: ["console"], a: ["bench"] },
  pens: { c: ["desk"], a: ["odrawer", "wshelf"] },
  folder: { c: ["files"], a: ["shelf", "odrawer"] },
  notebook: { c: ["odrawer"], a: ["desk", "shelf"] },
  earth: { c: ["wshelf", "shelf"], a: ["desk"] },
  ball: { c: ["floor"], a: ["sandbox"] },
  bucket: { c: ["sandbox"], a: ["floor"] },
  shovel: { c: ["sandbox"], a: ["floor"] },
  truck: { c: ["sandbox"], a: ["floor"] },
  can: { c: ["flowerbed"], a: ["ptable", "floor"] },
  flowerpot: { c: ["ptable", "flowerbed"], a: ["floor"] },
  bike: { c: ["shed"], a: ["floor"] },
  scooter: { c: ["shed"], a: ["floor"] },
  kite: { c: ["shed"], a: ["ptable"] },
  chair: { c: ["floor"], a: [] },
  train: { c: ["floor", "sandbox"], a: [] },
};
Object.entries(DOK).forEach(([e, t]) => {
  DIT[e] && (DIT[e][2] = t.c);
});
const DSZ = {
  tv: 34,
  plant: 30,
  horse: 34,
  bike: 38,
  chair: 32,
  scooter: 30,
  coat: 30,
  lamp: 28,
  computer: 30,
  mirror: 28,
  poster: 28,
  frame: 24,
  umbrella: 28,
  bathmat: 30,
  quilt: 32,
  blanket: 30,
  toothbrush: 18,
  soap: 18,
  keys: 18,
  letters: 20,
  pens: 20,
  rattle: 20,
  remote: 19,
  gamepad: 22,
  magnet: 16,
  cutlery: 20,
  spatula: 20,
  clock: 22,
  perfume: 20,
  jewel: 22,
  toothpaste: 20,
  cream: 20,
  socks: 22,
  nightlight: 20,
  mug: 20,
  spices: 22,
  bottle: 20,
  duck: 20,
  earth: 24,
  notebook: 22,
};
const dSz = (e) => DSZ[e] || 26;
const dMx = (e, t, a) => [e[0] + (t[0] - e[0]) * a, e[1] + (t[1] - e[1]) * a];
const dWallShelf = (e, t, a, s, n, o = dWood) => {
  const i = "R" === t ? e.box(a, 0, n, s - a, 0.6, 0.12, o) : e.box(0, a, n, 0.6, s - a, 0.12, o),
    r =
      "R" === t
        ? [
            e.P(a + 0.15, 0.05, n),
            e.P(a + 0.15, 0.05, n - 0.35),
            e.P(s - 0.15, 0.05, n),
            e.P(s - 0.15, 0.05, n - 0.35),
          ]
        : [
            e.P(0.05, a + 0.15, n),
            e.P(0.05, a + 0.15, n - 0.35),
            e.P(0.05, s - 0.15, n),
            e.P(0.05, s - 0.15, n - 0.35),
          ];
  (e.ln(r[0], r[1], dSh(o, 0.6), 1.4), e.ln(r[2], r[3], dSh(o, 0.6), 1.4));
  const l =
    "R" === t
      ? [e.P(a, 0, n + 0.12), e.P(s, 0, n + 0.12), e.P(s, 0.6, n + 0.12), e.P(a, 0.6, n + 0.12)]
      : [e.P(0, a, n + 0.12), e.P(0.6, a, n + 0.12), e.P(0.6, s, n + 0.12), e.P(0, s, n + 0.12)];
  e.zone(
    "wshelf",
    l,
    dHull([
      ...i.hull,
      ...("R" === t ? [e.P(a, 0, n + 1.1), e.P(s, 0, n + 1.1)] : [e.P(0, a, n + 1.1), e.P(0, s, n + 1.1)]),
    ]),
  );
};
const dHooks = (e, t, a, s, n, o = "#8a5a36") => {
  const i = Math.max(3, Math.round((s - a) / 0.6));
  if ("R" === t) {
    e.pg(e.qR(a, s, n - 0.12, n + 0.22), o, dSh(o, 0.7));
    for (let t = 0; t < i; t++) {
      const o = a + ((t + 0.5) * (s - a)) / i,
        r = e.P(o, 0.05, n),
        l = e.P(o, 0.35, n - 0.1);
      e.ln(r, l, "#d9c08a", 2);
    }
    e.zone("hook", e.qR(a - 0.1, s + 0.1, n - 1.8, n + 0.4), null, "c");
  } else {
    e.pg(e.qL(a, s, n - 0.12, n + 0.22), o, dSh(o, 0.7));
    for (let t = 0; t < i; t++) {
      const o = a + ((t + 0.5) * (s - a)) / i,
        r = e.P(0.05, o, n),
        l = e.P(0.35, o, n - 0.1);
      e.ln(r, l, "#d9c08a", 2);
    }
    e.zone("hook", e.qL(a - 0.1, s + 0.1, n - 1.8, n + 0.4), null, "c");
  }
};
const dBench = (e, t, a, s, n, o = "#b98a5a") => {
  (e.box(t, a, 0, s, 0.15, 1.3, dSh(o, 0.85)), e.box(t, a + n - 0.15, 0, s, 0.15, 1.3, dSh(o, 0.85)));
  const i = e.box(t, a + 0.15, 0.12, s, n - 0.3, 0.1, dSh(o, 0.95)),
    r = [
      e.P(t + s, a + 0.2, 0.22),
      e.P(t + s, a + n - 0.2, 0.22),
      e.P(t + s, a + n - 0.2, 0.95),
      e.P(t + s, a + 0.2, 0.95),
    ];
  e.zone("shoes", r, dHull([...i.hull, ...r]), "b");
  const l = e.box(t, a, 1.3, s, n, 0.16, o);
  (e.box(t, a, 1.46, 0.25, n, 1.4, dSh(o, 0.9)), e.zone("bench", l.top, l.hull));
};
const dConsole = (e, t, a, s, n, o = "#8a5a36") => {
  ([
    [0.05, 0.05],
    [s - 0.2, 0.05],
    [0.05, n - 0.2],
    [s - 0.2, n - 0.2],
  ].forEach(([s, n]) => e.box(t + s, a + n, 0, 0.15, 0.15, 1.9, dSh(o, 0.8))),
    e.box(t + 0.05, a + 0.05, 0.5, s - 0.1, n - 0.1, 0.08, dSh(o, 0.9)));
  const i = e.box(t, a, 1.9, s, n, 0.16, o);
  e.zone("console", i.top, i.hull);
};
const dUStand = (e, t, a, s = "#5f86a8") => {
  e.cyl(t, a, 0, 0.32, 1.3, s);
  const n = e.P(t, a, 1.3),
    o = 9.4752;
  e.zone(
    "ustand",
    [
      [n[0] - o, n[1] - 28],
      [n[0] + o, n[1] - 28],
      [n[0] + o, n[1] + 4],
      [n[0] - o, n[1] + 4],
    ],
    [
      [n[0] - o - 2, n[1] - 34],
      [n[0] + o + 2, n[1] - 34],
      [n[0] + o + 2, n[1] + 1.3 * 24 + 8],
      [n[0] - o - 2, n[1] + 1.3 * 24 + 8],
    ],
    "b",
  );
};
const dChanging = (e, t, a, s, n, o = "#f4efe6", i = "L") => {
  const r = e.box(t, a, 0, s, n, 2, o),
    l = e.box(t + 0.1, a + 0.1, 2, s - 0.2, n - 0.2, 0.18, "#bfe6da", { t: "#d4f2e8" });
  (e.zone("change", l.top, dHull([...r.hull, ...l.hull])),
    dStore(e, t, a, s, n, i, o, [
      { t: "drawer", k: "bdrawer", a: 0.05, b: 0.95, z0: 1.05, z1: 1.92, cap: 2 },
      { t: "drawer", k: "bdrawer", a: 0.05, b: 0.95, z0: 0.1, z1: 0.95, cap: 2 },
    ]));
};
const dToyBox = (e, t, a, s, n, o = "#7fc0ee") => {
  const i = e.box(t, a, 0, s, n, 1, o),
    r = [
      e.P(t + 0.1, a + 0.1, 1),
      e.P(t + s - 0.1, a + 0.1, 1),
      e.P(t + s - 0.1, a + n - 0.1, 1),
      e.P(t + 0.1, a + n - 0.1, 1),
    ];
  e.pg(r, dSh(o, 0.55));
  const l = e.P(t + 0.5 * s, a + n, 0.5);
  ((e.s += `<circle cx="${l[0].toFixed(1)}" cy="${l[1].toFixed(1)}" r="5" fill="#ffd36b"/><circle cx="${(l[0] + 9).toFixed(1)}" cy="${(l[1] + 4).toFixed(1)}" r="3.4" fill="#ff9ab8"/>`),
    e.zone("toybox", r, i.hull));
};
const dRocker = (e, t, a, s = "#e8c9a0") => {
  ((e.s += `<path d="M${e.P(t, a, 0)[0].toFixed(1)} ${e.P(t, a, 0)[1].toFixed(1)}Q${e.P(t + 0.6, a + 0.6, -0.3)[0].toFixed(1)} ${e.P(t + 0.6, a + 0.6, -0.3)[1].toFixed(1)} ${e.P(t + 1.2, a + 1.2, 0)[0].toFixed(1)} ${e.P(t + 1.2, a + 1.2, 0)[1].toFixed(1)}" stroke="${dSh(s, 0.6)}" stroke-width="2.4" fill="none"/>`),
    e.box(t + 0.1, a + 0.1, 0.2, 1, 1, 0.7, dSh(s, 0.9)),
    e.box(t + 0.1, a + 0.1, 0.9, 1, 1, 0.22, s),
    e.box(t + 0.1, a + 0.1, 1.12, 0.22, 1, 1.3, dSh(s, 0.95)));
};
const dFiling = (e, t, a, s, n, o = "#9aa6b8", i = "R") => {
  const r = e.box(t, a, 0, s, n, 2.7, o);
  (e.zone("side", r.top, r.hull),
    dStore(
      e,
      t,
      a,
      s,
      n,
      i,
      o,
      [2, 1, 0].map((e) => ({
        t: "drawer",
        k: "files",
        a: 0.06,
        b: 0.94,
        z0: (2.7 * e) / 3 + 0.08,
        z1: (2.7 * (e + 1)) / 3 - 0.08,
        cap: 2,
      })),
    ));
};
const dDeskO = (e, t, a, s, n, o = dWood) => {
  (e.box(t + 0.05, a, 0, 0.22, n, 2, dSh(o, 0.8)), e.box(t + s - 1.1, a, 0, 1.05, n, 2, dSh(o, 0.92)));
  const i = e.box(t, a, 2, s, n, 0.2, o);
  (e.zone("desk", i.top, dHull([...i.hull, e.P(t + 0.05, a + n, 0)])),
    dStore(e, t + s - 1.1, a, 1.05, n, "L", dSh(o, 0.92), [
      { t: "drawer", k: "odrawer", a: 0.06, b: 0.94, z0: 1.05, z1: 1.92, cap: 2 },
      { t: "drawer", k: "odrawer", a: 0.06, b: 0.94, z0: 0.1, z1: 0.97, cap: 2 },
    ]));
};
const dUpperC = (e, t, a, s = "#e8e4da") => {
  e.box(t, 0, 3.2, a - t, 0.8, 1.4, s);
  const n = Math.max(1, Math.round((a - t) / 0.95));
  dStore(
    e,
    t,
    0,
    a - t,
    0.8,
    "L",
    s,
    [...Array(n)].map((e, t) => ({
      t: "door",
      k: "ucab",
      a: t / n + 0.02,
      b: (t + 1) / n - 0.02,
      z0: 3.28,
      z1: 4.52,
      hg: t % 2 ? "r" : "l",
      cap: 2,
    })),
  );
};
const dCounterF = (e, t, a, s, n, o = "L", i = "#e8e4da", r = "#7a8896") => {
  const l = 1.9,
    c = e.box(t, a, 0, s, n, l, r, { t: i });
  e.box(t - 0.03, a - 0.03, l, s + 0.06, n + 0.06, 0.18, i);
  const d = [e.P(t, a, 2.08), e.P(t + s, a, 2.08), e.P(t + s, a + n, 2.08), e.P(t, a + n, 2.08)];
  (e.zone("counter", d, c.hull),
    dStore(e, t, a, s, n, o, r, [
      { t: "drawer", k: "kdrawer", a: 0.04, b: 0.96, z0: 1.4, z1: l - 0.06, cap: 2 },
      ...(("L" === o ? s : n) >= 1.7
        ? [
            { t: "door", k: "cab", a: 0.04, b: 0.5, z0: 0.1, z1: l - 0.6, hg: "l", cap: 2 },
            { t: "door", k: "cab", a: 0.5, b: 0.96, z0: 0.1, z1: l - 0.6, hg: "r", cap: 2 },
          ]
        : [{ t: "door", k: "cab", a: 0.04, b: 0.96, z0: 0.1, z1: l - 0.6, hg: "l", cap: 2 }]),
    ]));
};
const dVanityC = (e, t, a, s, n, o, i = "#f1f2f7") => {
  (dVanity(e, t, a, s, n, o, i),
    dStore(e, t, a, s, n, "R", o, [
      { t: "door", k: "bcab", a: 0.05, b: 0.5, z0: 0.12, z1: 1.65, hg: "l", cap: 2 },
      { t: "door", k: "bcab", a: 0.5, b: 0.95, z0: 0.12, z1: 1.65, hg: "r", cap: 2 },
    ]));
};
const dHamper = (e, t, a, s = "#d9c08a") => {
  const n = e.box(t, a, 0, 0.9, 0.9, 1.3, s);
  for (let t = 1; t < 4; t++) {
    const a = t / 4;
    (e.ln(dMx(n.L[0], n.L[3], a), dMx(n.L[1], n.L[2], a), dSh(s, 0.7), 1),
      e.ln(dMx(n.R[0], n.R[3], a), dMx(n.R[1], n.R[2], a), dSh(s, 0.6), 1));
  }
  (e.pg(
    [
      e.P(t + 0.08, a + 0.08, 1.3),
      e.P(t + 0.82, a + 0.08, 1.3),
      e.P(t + 0.82, a + 0.82, 1.3),
      e.P(t + 0.08, a + 0.82, 1.3),
    ],
    dSh(s, 0.5),
  ),
    e.zone("hamper", n.top, n.hull));
};
const dBase = (e, t) => {
  (e.ln(e.P(0, 0, 0.12), e.P(0, e.D, 0.12), dSh(t, 0.8), 2.2),
    e.ln(e.P(0, 0, 0.12), e.P(e.W, 0, 0.12), dSh(t, 0.8), 2.2));
};
const dArtR = (e, t, a, s, n, o) => {
  (e.pg(e.qR(t - 0.1, a + 0.1, s - 0.1, n + 0.1), "#f4efe6", "#c9bfae"),
    e.pg(e.qR(t, a, s, n), o[0]),
    e.pg(
      [
        e.P(t, 0, s),
        e.P(a, 0, s),
        e.P(a, 0, s + 0.45 * (n - s)),
        e.P((t + a) / 2, 0, s + 0.7 * (n - s)),
        e.P(t, 0, s + 0.4 * (n - s)),
      ],
      o[1],
    ));
  const i = e.P(t + 0.72 * (a - t), 0, s + 0.75 * (n - s));
  e.s += `<circle cx="${i[0].toFixed(1)}" cy="${i[1].toFixed(1)}" r="2.4" fill="${o[2]}"/>`;
};
const dArtL = (e, t, a, s, n, o) => {
  (e.pg(e.qL(t - 0.1, a + 0.1, s - 0.1, n + 0.1), "#f4efe6", "#c9bfae"),
    e.pg(e.qL(t, a, s, n), o[0]),
    e.pg(
      [
        e.P(0, t, s),
        e.P(0, a, s),
        e.P(0, a, s + 0.4 * (n - s)),
        e.P(0, (t + a) / 2, s + 0.7 * (n - s)),
        e.P(0, t, s + 0.45 * (n - s)),
      ],
      o[1],
    ));
  const i = e.P(0, t + 0.3 * (a - t), s + 0.75 * (n - s));
  e.s += `<circle cx="${i[0].toFixed(1)}" cy="${i[1].toFixed(1)}" r="2.4" fill="${o[2]}"/>`;
};
const dPotPlant = (e, t, a, s = 1, n = "#d98c63") => {
  (e.cyl(t, a, 0, 0.32 * s, 0.7 * s, n), (e.ch[e.ch.length - 1].h = 2.2 * s));
  const o = e.P(t, a, 0.7 * s);
  e.s += `<g transform="translate(${o[0].toFixed(1)} ${o[1].toFixed(1)}) scale(${s})"><path d="M0 0C-12 -6-14-22-4-30C-6-18 0-10 0 0Z" fill="#5fae6a"/><path d="M0 0C12 -6 16-20 6-30C8-18 2-10 0 0Z" fill="#4f9a5a"/><path d="M0 0C-3-12 0-24 2-36C6-24 4-10 0 0Z" fill="#6fc07a"/></g>`;
};
const dCurtR = (e, t, a, s, n, o) => {
  ([
    [t - 0.45, t + 0.05],
    [a - 0.05, a + 0.45],
  ].forEach(([t, a]) => {
    (e.pg(e.qR(t, a, s - 0.6, n + 0.25), o, dSh(o, 0.8)),
      e.ln(e.P((t + a) / 2, 0, s - 0.5), e.P((t + a) / 2, 0, n + 0.2), dSh(o, 0.85), 1));
  }),
    e.ln(e.P(t - 0.6, 0.04, n + 0.35), e.P(a + 0.6, 0.04, n + 0.35), "#8a6a4a", 2));
};
const dCurtL = (e, t, a, s, n, o) => {
  ([
    [t - 0.45, t + 0.05],
    [a - 0.05, a + 0.45],
  ].forEach(([t, a]) => {
    (e.pg(e.qL(t, a, s - 0.6, n + 0.25), o, dSh(o, 0.8)),
      e.ln(e.P(0, (t + a) / 2, s - 0.5), e.P(0, (t + a) / 2, n + 0.2), dSh(o, 0.85), 1));
  }),
    e.ln(e.P(0.04, t - 0.6, n + 0.35), e.P(0.04, a + 0.6, n + 0.35), "#8a6a4a", 2));
};
const dLampF = (e, t, a) => {
  (e.box(t + 0.15, a + 0.15, 0, 0.3, 0.3, 0.08, "#7a6a5a"),
    e.box(t + 0.27, a + 0.27, 0.08, 0.06, 0.06, 3.1, "#8a7a6a", { noL: 0 }),
    e.cyl(t + 0.3, a + 0.3, 3, 0.38, 0.6, "#ffe2a8"));
};
const dClockW = (e, t, a, s) => {
  const n = "R" === t ? e.P(a, 0, s) : e.P(0, a, s);
  e.s += `<circle cx="${n[0].toFixed(1)}" cy="${n[1].toFixed(1)}" r="7" fill="#f4efe6" stroke="#8a6a4a" stroke-width="1.6"/><path d="M${n[0].toFixed(1)} ${(n[1] - 4.5).toFixed(1)}V${n[1].toFixed(1)}h3.4" stroke="#5a4a3a" stroke-width="1.2" fill="none" stroke-linecap="round"/>`;
};
const dSlide = (e, t, a) => {
  (e.box(t, a, 0, 0.15, 0.15, 2.6, "#e86a6a"),
    e.box(t + 0.85, a, 0, 0.15, 0.15, 2.6, "#e86a6a"),
    e.box(t, a, 2.4, 1, 0.9, 0.15, "#ffd36b"),
    e.pg(
      [e.P(t, a + 0.9, 2.45), e.P(t + 1, a + 0.9, 2.45), e.P(t + 1, a + 3, 0), e.P(t, a + 3, 0)],
      "#7fc0ee",
      "#5fa2d4",
    ));
};
const dShower = (e, t, a, s, n) => {
  const o = e.box(t, a, 0, s, n, 0.22, "#f4f6fa"),
    i = [
      e.P(t + 0.12, a + 0.12, 0.22),
      e.P(t + s - 0.12, a + 0.12, 0.22),
      e.P(t + s - 0.12, a + n - 0.12, 0.22),
      e.P(t + 0.12, a + n - 0.12, 0.22),
    ];
  e.pg(i, "#dfe9f2", "#b8c6d4");
  for (let o = 1; o < 6; o++)
    e.ln(
      e.P(t + 0.12 + (o * (s - 0.24)) / 6, a + 0.12, 0.23),
      e.P(t + 0.12 + (o * (s - 0.24)) / 6, a + n - 0.12, 0.23),
      "#c9d6e2",
      0.8,
    );
  const r = e.P(t + 0.15, a + 0.5 * n, 3.9);
  (e.ln(e.P(0.04, a + 0.5 * n, 3.1), e.P(0.04, a + 0.5 * n, 3.95), "#aab4c4", 2),
    (e.s += `<ellipse cx="${(r[0] + 5).toFixed(1)}" cy="${(r[1] + 1).toFixed(1)}" rx="5" ry="2.4" fill="#aab4c4"/>`),
    e.zone("tub", i, dHull([...o.hull, e.P(t, a + n, 2.2), e.P(t + s, a, 2.2), e.P(t + s, a + n, 2.2)])));
  const l = (t) => {
    e.pg(t, "rgba(190,225,245,.32)", "#9fb3c4", 1.2);
  };
  (l([e.P(t, a + n, 0.22), e.P(t + s, a + n, 0.22), e.P(t + s, a + n, 3.9), e.P(t, a + n, 3.9)]),
    l([e.P(t + s, a, 0.22), e.P(t + s, a + n, 0.22), e.P(t + s, a + n, 3.9), e.P(t + s, a, 3.9)]),
    e.ln(e.P(t + s, a + n, 0.22), e.P(t + s, a + n, 3.9), "#9fb3c4", 2.2),
    e.ln(e.P(t, a + n, 3.9), e.P(t + s, a + n, 3.9), "#9fb3c4", 1.6),
    e.ln(e.P(t + s, a, 3.9), e.P(t + s, a + n, 3.9), "#9fb3c4", 1.6),
    e.ln(e.P(t + 0.55 * s, a + n, 1.6), e.P(t + 0.55 * s, a + n, 2.4), "#e8eef4", 2.4),
    e.ch.push({ at: e.s.length, x: t, y: a, z: 0, w: s, d: n, h: 3.9 }));
};
const dVanityL = (e, t, a, s, n, o, i = "#f4f4f6") => {
  const r = e.box(t, a, 0, s, n, 1.9, o, { t: i });
  ([0.28, 0.72].forEach((o) => {
    const i = e.P(t + s * o, a + 0.5 * n, 1.9);
    e.s += `<ellipse cx="${i[0].toFixed(1)}" cy="${i[1].toFixed(1)}" rx="9" ry="4.4" fill="#dfe7ee" stroke="#b8c6d4"/>`;
    const r = e.P(t + s * o, a + 0.12, 1.9);
    e.s += `<rect x="${(r[0] - 1.5).toFixed(1)}" y="${(r[1] - 8).toFixed(1)}" width="3" height="8" rx="1.2" fill="#aab4c4"/>`;
  }),
    e.zone("sink", [e.P(t, a, 1.9), e.P(t + s, a, 1.9), e.P(t + s, a + n, 1.9), e.P(t, a + n, 1.9)], r.hull),
    dStore(e, t, a, s, n, "L", o, [
      { t: "door", k: "bcab", a: 0.03, b: 0.26, z0: 0.12, z1: 1.7, hg: "l", cap: 1 },
      { t: "door", k: "bcab", a: 0.26, b: 0.5, z0: 0.12, z1: 1.7, hg: "r", cap: 1 },
      { t: "door", k: "bcab", a: 0.5, b: 0.74, z0: 0.12, z1: 1.7, hg: "l", cap: 1 },
      { t: "door", k: "bcab", a: 0.74, b: 0.97, z0: 0.12, z1: 1.7, hg: "r", cap: 1 },
    ]));
};
const dSwing = (e, t, a, s) => {
  const n = 2.6,
    o = "#e86a6a";
  (e.ch.push({ at: e.s.length, x: t, y: a, z: 0, w: 1, d: s, h: n }),
    [[a], [a + s]].forEach(([a]) => {
      (e.ln(e.P(t, a, 0), e.P(t + 0.5, a, n), dSh(o, 0.8), 4),
        e.ln(e.P(t + 1, a, 0), e.P(t + 0.5, a, n), o, 4));
    }),
    e.box(t + 0.44, a - 0.05, 2.52, 0.12, s + 0.1, 0.14, "#c9523f"),
    [a + 0.3 * s, a + 0.7 * s].forEach((a) => {
      (e.ln(e.P(t + 0.5, a - 0.2, n - 0.05), e.P(t + 0.5, a - 0.2, 0.75), "#8a8f9a", 1.2),
        e.ln(e.P(t + 0.5, a + 0.2, n - 0.05), e.P(t + 0.5, a + 0.2, 0.75), "#8a8f9a", 1.2),
        e.box(t + 0.3, a - 0.28, 0.62, 0.4, 0.56, 0.1, "#ffd36b"));
    }),
    e.ln(e.P(t, a, 0), e.P(t, a, 0), o, 1));
};
const dYard2 = (e) => {
  for (let t = 0.35; t < 7; t += 0.5)
    (e.ln(e.P(0, t, 0.05), e.P(0, t, 2), "#b9a782", 1.2),
      e.ln(e.P(t, 0, 0.05), e.P(t, 0, 2), "#b9a782", 1.2));
  (e.ln(e.P(0, 0, 1.75), e.P(0, 7, 1.75), "#a8966f", 2),
    e.ln(e.P(0, 0, 1.75), e.P(7, 0, 1.75), "#a8966f", 2),
    [
      [2.6, 1.8],
      [3.3, 2.5],
      [3.9, 3.3],
      [4.3, 4.2],
      [4.5, 5.2],
      [4.6, 6.2],
    ].forEach(([t, a]) => {
      e.pg([e.P(t, a), e.P(t + 0.5, a), e.P(t + 0.5, a + 0.42), e.P(t, a + 0.42)], "#d9d2c2", "#bdb4a0", 0.8);
    }));
  for (let t = 0; t < 26; t++) {
    const a = 0.3 + ((37 * t) % 63) / 10,
      s = 0.3 + ((53 * t) % 65) / 10,
      n = e.P(a, s);
    e.s += `<path d="M${n[0].toFixed(1)} ${n[1].toFixed(1)}l-2-5M${n[0].toFixed(1)} ${n[1].toFixed(1)}l0-6M${n[0].toFixed(1)} ${n[1].toFixed(1)}l2-5" stroke="#6fb46a" stroke-width="1.2" stroke-linecap="round"/>`;
  }
  const t = e.box(0.4, 0.15, 0, 3.2, 1.1, 0.6, "#8a5a3a", { t: "#7a4e32" }),
    a = [e.P(0.5, 0.25, 0.6), e.P(3.5, 0.25, 0.6), e.P(3.5, 1.15, 0.6), e.P(0.5, 1.15, 0.6)];
  (e.pg(a, "#5a3d2a"),
    [
      [0.9, 0.5],
      [1.4, 0.9],
      [1.9, 0.5],
      [2.4, 0.9],
      [2.9, 0.55],
      [3.2, 0.9],
    ].forEach(([t, a], s) => {
      const n = e.P(t, a, 0.6);
      e.s += `<path d="M${n[0].toFixed(1)} ${n[1].toFixed(1)}v-7" stroke="#4f9a5a" stroke-width="1.4"/><circle cx="${n[0].toFixed(1)}" cy="${(n[1] - 8).toFixed(1)}" r="3.2" fill="${["#f08aa8", "#f4c24a", "#fff", "#a98fe0", "#ff9a5a", "#f08aa8"][s]}"/>`;
    }),
    e.zone("flowerbed", a, t.hull));
  const s = 4.3,
    n = 1.7,
    o = 2.5;
  e.box(s, 0, 0, 2.5, n, o, "#c9a06a");
  for (let t = 1; t < 9; t++) {
    const a = s + (2.5 * t) / 9;
    e.ln(e.P(a, n, 0.05), e.P(a, n, o), "#b08a58", 1);
  }
  (e.pg(
    [e.P(s - 0.15, -0.1, o), e.P(6.95, -0.1, o), e.P(6.95, 0.85, 3.4), e.P(s - 0.15, 0.85, 3.4)],
    "#8a4a3a",
    "#6a3a2a",
  ),
    e.pg(
      [e.P(s - 0.15, 0.85, 3.4), e.P(6.95, 0.85, 3.4), e.P(6.95, n + 0.15, o), e.P(s - 0.15, n + 0.15, o)],
      "#a85a46",
      "#6a3a2a",
    ),
    e.pg(
      [
        e.P(6.8, -0.1, o),
        e.P(6.8, n + 0.15, o),
        e.P(6.95, n + 0.15, o),
        e.P(6.95, 0.85, 3.4),
        e.P(6.95, -0.1, o),
      ],
      "#7a3e30",
    ));
  const i = e.P(6.8, 0.85, 1.7);
  ((e.s += `<rect x="${(i[0] - 4).toFixed(1)}" y="${(i[1] - 9).toFixed(1)}" width="8" height="8" fill="#bfe3ff" stroke="#8a6a4a" transform="skewY(-26.6)" transform-origin="${i[0].toFixed(1)} ${i[1].toFixed(1)}"/>`),
    dStore(e, s, 0, 2.5, n, "L", "#c9a06a", [
      { t: "door", k: "shed", a: 0.1, b: 0.5, z0: 0.05, z1: 2.1, hg: "l", cap: 2 },
      { t: "door", k: "shed", a: 0.5, b: 0.9, z0: 0.05, z1: 2.1, hg: "r", cap: 2 },
    ]),
    e.box(0.7, 3, 0, 1.8, 0.35, 0.8, "#a8784a"),
    dTable(e, 0.7, 3.5, 1.8, 1.3, 1.5, "#b98a5a", "ptable"),
    e.box(0.7, 5, 0, 1.8, 0.35, 0.8, "#a8784a"));
  const r = e.box(4.9, 4.5, 0, 1.9, 1.9, 0.5, "#c9a36a"),
    l = [e.P(5.05, 4.65, 0.5), e.P(6.65, 4.65, 0.5), e.P(6.65, 6.25, 0.5), e.P(5.05, 6.25, 0.5)];
  (e.pg(l, "#f0d9a0"), e.zone("sandbox", l, r.hull));
};
const dYardOld = DRM[DRM.length - 1].b;
((DRM.length = 0),
  DRM.push(
    {
      h: "Condo",
      n: "La chambre",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#c9d3f0", "#b7c3ea", "#d8b58a", "#d1ad80"],
      b: (e) => {
        (dBase(e, "#b7c3ea"),
          dWinR(e, 0.9, 2.5, 2.4, 4.4),
          dCurtR(e, 0.9, 2.5, 2.4, 4.4, "#f4c7d4"),
          dArtL(e, 2.3, 3.9, 3, 4.2, ["#f6e1b8", "#8fb0c9", "#e8946c"]),
          dWallShelf(e, "R", 3.1, 5.1, 3.5),
          dRug(e, 2.9, 2.6, 3, 2.8, "#b9a6e0"),
          dSide(e, 0, 0.1, 0.9, 0.9),
          dDesk(e, 3, 0, 2.2, 1.3),
          dWard(e, 5.4, 0, 1.6, 1.3, 4.2, "#e2d3b8", "L"),
          dBed(e, 0, 1.2, 2.6, 4.2, "#8f7fe0"),
          dChairOf(e, 3.7, 1.7),
          dDresser(e, 0, 5.6, 1.1, 1.3, 1.7, dWood, "R"),
          dPotPlant(e, 6.4, 2.2, 0.9));
      },
      items: [
        "pillow",
        "teddy",
        "lamp",
        "clock",
        "books",
        "computer",
        "shirt",
        "dress",
        "sweater",
        "socks",
        "poster",
        "plant",
      ],
    },
    {
      h: "Condo",
      n: "La salle de bain",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#cfe6ee", "#bcd9e4", "#e6eef2", "#cfdde4"],
      b: (e) => {
        (dBase(e, "#bcd9e4"),
          dWinR(e, 3.3, 5.3, 2.4, 4.5),
          dWallShelf(e, "R", 5.7, 6.9, 3.3, "#f4efe6"),
          dVanityC(e, 0, 0.3, 1.6, 2.2, "#a9825a"),
          dTub(e, 2.2, 0, 4.6, 2.2),
          dRail(e, 3.4, 5.2, 3),
          dToilet(e, 0, 3.6),
          dRug(e, 2.6, 3, 2.4, 1.4, "#9ad0e0"),
          dHamper(e, 5.8, 5.6, "#d9c08a"),
          dPotPlant(e, 0.45, 6.45, 0.7, "#7fc0ee"));
      },
      items: [
        "toothbrush",
        "toothpaste",
        "soap",
        "towel",
        "shampoo",
        "paper",
        "duck",
        "mirror",
        "bathmat",
        "hairdryer",
        "cream",
      ],
    },
    {
      h: "Condo",
      n: "La cuisine",
      stk: 1,
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#efe6d2", "#e2d8c2", "#b98a5a", "#b0814f"],
      b: (e) => {
        (dBase(e, "#e2d8c2"),
          dWinL(e, 2.3, 4.5, 2, 4.3),
          dCurtL(e, 2.3, 4.5, 2, 4.3, "#f2c79a"),
          dUpperC(e, 0.4, 3.3),
          dUpperC(e, 3.3, 5.2),
          dRug(e, 1.6, 3, 3.6, 3.2, "#e9c9b0"),
          dCounter(e, 0.4, 0, 1.5, 1.3),
          dStove(e, 1.9, 0, 1.4, 1.3),
          dCounter(e, 3.3, 0, 1.9, 1.3),
          dFridge(e, 5.4, 0, 1.4, 1.3),
          dChairOf(e, 1.3, 3.6, "#e8946c"),
          dTable(e, 2.5, 3.3, 2, 1.8, 1.7),
          dChairOf(e, 4.9, 3.6, "#e8946c"));
      },
      items: [
        "pot",
        "pan",
        "plate",
        "mug",
        "bowl",
        "cutlery",
        "spatula",
        "kettle",
        "toaster",
        "fruit",
        "magnet",
        "plant",
      ],
    },
    {
      h: "Condo",
      n: "Le salon",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#e8d9c4", "#dccbb2", "#b08e6a", "#a8865f"],
      b: (e) => {
        (dBase(e, "#dccbb2"),
          dWinR(e, 2.9, 4.9, 2.4, 4.4),
          dCurtR(e, 2.9, 4.9, 2.4, 4.4, "#a9c6d9"),
          dWallShelf(e, "L", 2.2, 4.2, 3.6),
          dRug(e, 2.4, 2, 3.6, 3.4, "#8fb0c9"),
          dSide(e, 0, 0.2, 1, 1),
          dTV(e, 2.4, 0, 2.8, 1.2),
          dShelf(e, 5.6, 0, 1.4, 1, 3.4, dWood, "L"),
          dSofa(e, 0, 1.8, 2.1, 3.8, "#6f86a8"),
          dTable(e, 3.3, 2.7, 1.6, 1.7, 0.9, dWood, "coffee"),
          dLampF(e, 0.3, 5.9));
      },
      items: [
        "tv",
        "gamepad",
        "remote",
        "books",
        "book",
        "cushion",
        "blanket",
        "vase",
        "frame",
        "lamp",
        "plant",
      ],
    },
    {
      h: "Condo",
      n: "La chambre de bébé",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#f8ead0", "#f0dfbe", "#e6cfa8", "#dfc69c"],
      b: (e) => {
        (dBase(e, "#f0dfbe"),
          dWinR(e, 3, 4.6, 2.4, 4.3),
          dCurtR(e, 3, 4.6, 2.4, 4.3, "#bfe6da"),
          dArtL(e, 1.4, 2.8, 3.2, 4.3, ["#fff6e0", "#ffc9d6", "#ffd36b"]),
          dWallShelf(e, "L", 4.4, 6.2, 3.1, "#f4efe6"),
          dRug(e, 2.4, 2.6, 3.2, 3.2, "#cfe8f6"),
          dChanging(e, 2.9, 0, 2, 1.2),
          dShelf(e, 5.3, 0, 1.5, 1, 2.8, "#f1e6d4", "L"),
          dCrib(e, 0, 0.6, 2, 3.2),
          dRocker(e, 1, 4.9, "#e8c9a0"),
          dToyBox(e, 4.6, 5, 1.6, 1.2, "#7fc0ee"));
      },
      items: [
        "blanket",
        "teddy",
        "bottle",
        "diapers",
        "onesie",
        "rattle",
        "blocks",
        "nightlight",
        "book",
        "duck",
        "horse",
      ],
    },
    {
      h: "Maison",
      n: "La nouvelle salle de bain",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#dde9e2", "#cfe0d6", "#f4f6f4", "#e2ebe5"],
      b: (e) => {
        (dBase(e, "#cfe0d6"),
          dWinL(e, 4.9, 6.3, 2.6, 4.4),
          dCurtL(e, 4.9, 6.3, 2.6, 4.4, "#b9d8c6"),
          dShower(e, 0, 0, 1.7, 1.7),
          dWallShelf(e, "L", 2.9, 4.4, 3.7, "#f4efe6"),
          dRailR(e, 5.3, 6.8, 3.1),
          dVanityL(e, 2.1, 0, 2.8, 1.25, "#7fa38f"),
          dToilet(e, 0, 3),
          dRug(e, 2.4, 2.4, 2.6, 1.6, "#a8ccb6"),
          dHamper(e, 5.9, 2, "#e8d2a8"),
          dPotPlant(e, 0.5, 6.4, 0.85, "#e8d2a8"));
      },
      items: [
        "toothbrush",
        "toothpaste",
        "soap",
        "towel",
        "shampoo",
        "perfume",
        "plant",
        "bathmat",
        "cream",
        "hairdryer",
        "laundry",
        "duck",
      ],
    },
    {
      h: "Maison",
      n: "L’entrée",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#f2e2cc", "#e8d4b8", "#c9a77e", "#c19f76"],
      b: (e) => {
        (dBase(e, "#e8d4b8"),
          dDoorR(e, 4.4, 6, 3.7, "#a87a52"),
          dHooks(e, "R", 0.9, 3.7, 3.4),
          dArtL(e, 4.6, 6, 3.1, 4.2, ["#e9f2f6", "#9ac2a0", "#f2b84a"]),
          dRug(e, 4.2, 0.9, 2, 1.6, "#c98a6a"),
          dUStand(e, 6.45, 0.5),
          dBench(e, 0, 0.8, 1.1, 2.8),
          dConsole(e, 0, 4.5, 1, 2),
          dPotPlant(e, 6.2, 6.2, 1.1));
      },
      items: [
        "coat",
        "hat",
        "scarf",
        "boots",
        "sneakers",
        "umbrella",
        "keys",
        "bag",
        "mirror",
        "plant",
        "frame",
        "letters",
      ],
    },
    {
      h: "Maison",
      n: "La chambre des parents",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#f0dccd", "#e6cdb9", "#c9a27e", "#c19a76"],
      b: (e) => {
        (dBase(e, "#e6cdb9"),
          dWinL(e, 2.4, 4.2, 2.6, 4.5),
          dCurtL(e, 2.4, 4.2, 2.6, 4.5, "#d98c6a"),
          dArtR(e, 2.7, 4.6, 3.2, 4.3, ["#fbefe2", "#e8946c", "#f2c24a"]),
          dRug(e, 2, 2.6, 3.6, 3.2, "#d9b8a0"),
          dWard(e, 0, 0.2, 1.3, 2, 4.2, "#e8d8c0", "R"),
          dChairOf(e, 0.2, 2.9, "#c98a6a"),
          dSide(e, 1.4, 0.1, 0.9, 0.9, 1.25, "#a8724a"),
          dSide(e, 5, 0.1, 0.9, 0.9, 1.25, "#a8724a"),
          dBed(e, 2.3, 0.2, 2.6, 4.2, "#e8a28a", "#8a5236", "#fbf6ee"),
          dDresser(e, 0, 4.6, 1.1, 1.9, 1.7, "#a8724a", "R"),
          dPotPlant(e, 6.4, 6.3, 1));
      },
      items: [
        "pillow",
        "quilt",
        "lamp",
        "clock",
        "perfume",
        "jewel",
        "shirt",
        "cshirt",
        "dress",
        "sweater",
        "socks",
        "frame",
        "book",
      ],
    },
    {
      h: "Maison",
      n: "Le bureau",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#dfe6ee", "#cfd9e4", "#b9956c", "#b08c64"],
      b: (e) => {
        (dBase(e, "#cfd9e4"),
          dWinL(e, 2.2, 4.4, 2.2, 4.4),
          dCurtL(e, 2.2, 4.4, 2.2, 4.4, "#9fb7d9"),
          dWallShelf(e, "R", 1.5, 4.2, 3.7),
          dClockW(e, "R", 0.8, 4.2),
          dRug(e, 1.8, 2.4, 3.2, 2.8, "#c9a6a0"),
          dPotPlant(e, 0.5, 0.6, 1),
          dDeskO(e, 1.3, 0, 3.1, 1.3),
          dShelf(e, 5, 0, 1.9, 1.1, 4.4, dWood, "L"),
          dChairOf(e, 2.3, 1.6, "#5f6f8a"),
          dFiling(e, 0, 5.4, 1.1, 1.2));
      },
      items: [
        "computer",
        "lamp",
        "books",
        "book",
        "pens",
        "folder",
        "notebook",
        "earth",
        "clock",
        "plant",
        "mug",
        "frame",
      ],
    },
    {
      h: "Maison",
      n: "La petite cour",
      W: 7,
      D: 7,
      Hh: 2.2,
      yard: 1,
      c: ["#d9c8a6", "#cdbb98", "#8fcf8a"],
      b: (e) => dYard2(e),
      items: [
        "ball",
        "bucket",
        "shovel",
        "truck",
        "can",
        "flowerpot",
        "bike",
        "scooter",
        "kite",
        "chair",
        "train",
      ],
    },
    {
      h: "Maison",
      n: "La nouvelle cuisine",
      W: 7,
      D: 7,
      Hh: 5.2,
      c: ["#f3e4c6", "#e8d6b0", "#c59a68", "#bd9262"],
      b: (e) => {
        (dBase(e, "#e8d6b0"),
          dWinL(e, 2.6, 4.6, 2, 4.3),
          dCurtL(e, 2.6, 4.6, 2, 4.3, "#e8946c"),
          dWallShelf(e, "L", 0.9, 2.1, 3.4, "#8a6a4a"),
          dUpperC(e, 0.3, 2.2, "#8a6a4a"),
          dUpperC(e, 3.6, 5.5, "#8a6a4a"),
          dRug(e, 2, 3, 3.8, 3, "#d98c63"),
          dCounterF(e, 0.3, 0, 1.9, 1.3, "L", "#d9cdb6", "#8a6a4a"),
          dStove(e, 2.2, 0, 1.4, 1.3),
          dCounterF(e, 3.6, 0, 1.9, 1.3, "L", "#d9cdb6", "#8a6a4a"),
          dFridge(e, 5.6, 0, 1.3, 1.3),
          dChairOf(e, 1.6, 3.6, "#5fa9a0"),
          dTable(e, 2.8, 3.3, 2, 1.8, 1.7),
          dChairOf(e, 5.2, 3.6, "#5fa9a0"),
          dPotPlant(e, 6.3, 6.2, 1));
      },
      items: [
        "pot",
        "pan",
        "plate",
        "bowl",
        "mug",
        "cutlery",
        "spatula",
        "kettle",
        "toaster",
        "fruit",
        "magnet",
        "spices",
        "board",
      ],
    },
  ),
  (G.find((e) => "demenage" === e.id).wl = [
    "La chambre est prête. Le lit attend déjà ses premières nuits.",
    "La salle de bain sent le savon frais. Le canard a trouvé son bain.",
    "La cuisine est rangée. Ça sent presque le café du matin.",
    "Le salon est prêt : un plaid sur le divan, la télé, et déjà des soirées tranquilles.",
    "La chambre de bébé est prête. Un mobile, une veilleuse, et beaucoup d’amour.",
    "La nouvelle salle de bain brille. La maison commence à ressembler à un chez-soi.",
    "L’entrée est prête : les manteaux sur les patères, les bottes bien rangées.",
    "La chambre des parents est prête. Un grand lit, une fenêtre, un peu de silence.",
    "Le bureau est rangé. Les idées viendront plus facilement ici.",
    "La cour est prête pour les jeux : le seau dans le sable, le vélo dans la cabane.",
    "La nouvelle cuisine est rangée. La dernière boîte est vide : bienvenue chez toi.",
  ]),
  Object.keys(dStory).forEach((e) => delete dStory[e]),
  Object.assign(dStory, {
    0: [
      "Année 1 · Le condo",
      "Tes parents emménagent dans leur tout premier condo. Des boîtes partout, une odeur de peinture fraîche… et la chambre à installer en premier.",
    ],
    4: [
      "Année 3 · Une bonne nouvelle",
      "Un bébé s’en vient ! La petite pièce du fond devient une chambre toute douce.",
    ],
    5: [
      "Année 6 · La maison",
      "Le condo devient trop petit : la famille déménage dans une vraie maison, avec une cour. On recommence à déballer.",
    ],
    9: ["Un samedi de printemps", "Il fait enfin beau. Les jouets d’extérieur attendent dans leurs boîtes."],
  }),
  (DBT.length = 0),
  DBT.push(...DRM.map((e) => e.n)),
  Object.assign(DIT, {
    map: [
      "Carte du Nord",
      '<path d="M3 7l8-3 10 3 8-3v21l-8 3-10-3-8 3z" fill="#f2e6c8"/><path d="M11 4v21M21 7v21" stroke="#d9c69a" stroke-width="1.2"/><path d="M6 19q4-6 8-2t9-6" stroke="#e8667a" stroke-width="1.6" fill="none" stroke-dasharray="2 2"/><path d="M23 8l3 3M26 8l-3 3" stroke="#3a3d52" stroke-width="1.4"/>',
    ],
    lantern: [
      "Lanterne",
      '<path d="M12 4h8M16 2v2" stroke="#6a5a4a" stroke-width="1.6"/><rect x="10" y="6" width="12" height="3" rx="1" fill="#3e4352"/><rect x="11" y="9" width="10" height="15" rx="2" fill="#ffd978"/><path d="M11 9h10v15H11z" fill="none" stroke="#3e4352" stroke-width="1.6"/><path d="M16 13q3 3 0 7-3-4 0-7z" fill="#f4a24a"/><rect x="9" y="24" width="14" height="3" rx="1" fill="#3e4352"/>',
    ],
    backpack: [
      "Sac à dos",
      '<rect x="8" y="7" width="16" height="21" rx="5" fill="#d96f4f"/><path d="M12 7V5a4 4 0 0 1 8 0v2" fill="none" stroke="#a8503a" stroke-width="2"/><rect x="11" y="17" width="10" height="7" rx="2" fill="#e8946c"/><path d="M11 13h10" stroke="#a8503a" stroke-width="1.4"/>',
    ],
    mittens: [
      "Moufles",
      '<path d="M4 26V13q0-6 5-6t5 6v13z" fill="#e8667a"/><path d="M13 17q4-2 4 2t-3 3" fill="#d9555f"/><rect x="3.5" y="24" width="11" height="4" rx="1.5" fill="#fff"/><path d="M18 26V13q0-6 5-6t5 6v13z" fill="#5fa9e0"/><rect x="17.5" y="24" width="11" height="4" rx="1.5" fill="#fff"/>',
    ],
    flask: [
      "Gourde chaude",
      '<rect x="9" y="9" width="14" height="19" rx="6" fill="#7a8896"/><rect x="9" y="14" width="14" height="8" fill="#c96a5a"/><rect x="12" y="4" width="8" height="5" rx="1.5" fill="#3e4352"/><path d="M13 18h6" stroke="#f4d9c6" stroke-width="1.2"/><path d="M14 0q1.4 1.4 0 3M18 0q1.4 1.4 0 3" stroke="#cfd8e6" stroke-width="1" fill="none"/>',
    ],
    logs: [
      "Bûches",
      '<rect x="3" y="18" width="26" height="8" rx="4" fill="#9a6a3e"/><circle cx="25" cy="22" r="3.6" fill="#d9a066"/><circle cx="25" cy="22" r="1.4" fill="none" stroke="#8a5a36"/><rect x="6" y="10" width="22" height="8" rx="4" fill="#8a5a36"/><circle cx="24" cy="14" r="3.6" fill="#e6b57a"/><circle cx="24" cy="14" r="1.4" fill="none" stroke="#9a6a3e"/>',
    ],
    compass: [
      "Boussole",
      '<circle cx="16" cy="17" r="12" fill="#e2b84a"/><circle cx="16" cy="17" r="9.5" fill="#f6f1e2"/><path d="M16 9l2.6 8h-5.2z" fill="#e8667a"/><path d="M16 25l-2.6-8h5.2z" fill="#3e4352"/><circle cx="16" cy="17" r="1.4" fill="#e2b84a"/><rect x="14.5" y="2.4" width="3" height="3" rx="1" fill="#c99a2e"/>',
    ],
    flag: [
      "Drapeau",
      '<rect x="7" y="3" width="2.4" height="26" rx="1" fill="#8a8f9a"/><path d="M9.4 4h17l-4 5 4 5h-17z" fill="#e8667a"/><path d="M15 6.4l1 2h2.2l-1.8 1.3.7 2.1-2.1-1.3-2.1 1.3.7-2.1-1.8-1.3h2.2z" fill="#fff"/><ellipse cx="8.2" cy="28.5" rx="5" ry="1.6" fill="#e6eef6"/>',
    ],
    sled: [
      "Luge",
      '<path d="M3 24h22q4 0 4-4" stroke="#c9404a" stroke-width="2.4" fill="none" stroke-linecap="round"/><rect x="5" y="13" width="20" height="5" rx="1.6" fill="#c58a54"/><path d="M8 18v6M22 18v6" stroke="#8a5a36" stroke-width="2"/><path d="M5 13q-3-3-1-6" stroke="#e2b84a" stroke-width="1.4" fill="none"/>',
    ],
    spyglass: [
      "Longue-vue",
      '<path d="M13 28l3-9 3 9" stroke="#6a5a4a" stroke-width="1.6" fill="none"/><path d="M6 21l5-3" stroke="#8a5a36" stroke-width="6" stroke-linecap="round"/><path d="M10 18l8-5" stroke="#c99a2e" stroke-width="6" stroke-linecap="round"/><path d="M17 13l9-6" stroke="#e2b84a" stroke-width="8" stroke-linecap="round"/><circle cx="27" cy="6.4" r="2.6" fill="#cfe9fa"/>',
    ],
    pstar: [
      "Étoile polaire",
      '<path d="M16 2l3.6 8.6 9.4.8-7.2 6 2.2 9.2L16 21.8 8 26.6l2.2-9.2-7.2-6 9.4-.8z" fill="#ffd978"/><path d="M16 2l3.6 8.6 9.4.8-7.2 6L16 21.8z" fill="#f4c24a"/>',
    ],
    bell: [
      "Cloche",
      '<path d="M16 5q-8 0-8 10v5l-3 4h22l-3-4v-5q0-10-8-10z" fill="#e2b84a"/><path d="M16 5q-8 0-8 10v5l-3 4h11z" fill="#f2cc5e"/><circle cx="16" cy="26.5" r="2.8" fill="#c99a2e"/><path d="M11 5q5-4 10 0" stroke="#e8667a" stroke-width="2.6" fill="none"/><circle cx="16" cy="3" r="2" fill="#3f9a62"/>',
    ],
    cookie: [
      "Biscuit",
      '<circle cx="16" cy="7" r="5" fill="#c98a4a"/><path d="M10 13h12l6 4-2 3-4-2v4l3 7-3 1.6-4-5-4 5L7 29l3-7v-4l-4 2-2-3z" fill="#c98a4a"/><circle cx="14.4" cy="6.4" r=".9" fill="#3a2a1a"/><circle cx="17.6" cy="6.4" r=".9" fill="#3a2a1a"/><path d="M14 9q2 1.4 4 0" stroke="#fff" stroke-width=".9" fill="none"/><circle cx="16" cy="15.5" r="1" fill="#e8667a"/><circle cx="16" cy="19" r="1" fill="#5fa9e0"/>',
    ],
    milk: [
      "Verre de lait",
      '<path d="M10 5h12l-2 23h-8z" fill="#f2f5fb" stroke="#cfd8e6" stroke-width="1.2"/><path d="M10.6 11h10.8l-1.4 17h-8z" fill="#fff"/><ellipse cx="16" cy="11" rx="5.4" ry="1.2" fill="#e6ecf6"/><path d="M18.6 14v10" stroke="#e6ecf6" stroke-width="1.4"/>',
    ],
    cupcake: [
      "Petit gâteau",
      '<path d="M8 17h16l-2.4 11h-11.2z" fill="#e8946c"/><path d="M11 17l1 11M14.6 17v11M18 17v11M21 17l-1 11" stroke="#c9774f" stroke-width="1"/><path d="M7 17q-1-6 5-7 1-5 4-5t4 5q6 1 5 7z" fill="#ffc2d6"/><circle cx="16" cy="4.4" r="2.6" fill="#e8445a"/><circle cx="12" cy="12.4" r=".9" fill="#5fa9e0"/><circle cx="19.4" cy="11.4" r=".9" fill="#ffd978"/><circle cx="16" cy="14.4" r=".9" fill="#7fc48a"/>',
    ],
    choco: [
      "Chocolat",
      '<rect x="6" y="5" width="20" height="22" rx="2" fill="#6a3a22"/><path d="M6 11h20M12.7 5v12M19.3 5v12" stroke="#4a2614" stroke-width="1.2"/><path d="M6 15h20v12H6z" fill="#e8667a"/><rect x="9" y="18.4" width="14" height="5" rx="1" fill="#ffd978"/>',
    ],
    wrench: [
      "Clé à molette",
      '<path d="M8 26l12-12" stroke="#9aa6b8" stroke-width="5" stroke-linecap="round"/><path d="M19 4a6 6 0 0 0-1 8l3 3a6 6 0 0 0 8-1l-4-1-2-2-1-4z" fill="#b9c3d2"/><circle cx="8" cy="26" r="1.6" fill="#7b889c"/>',
    ],
    paint: [
      "Pot de peinture",
      '<path d="M7 11h18v14q0 3-9 3t-9-3z" fill="#cfd8e6"/><ellipse cx="16" cy="11" rx="9" ry="3" fill="#5fa9e0"/><path d="M10 12v5q0 2 1.6 2t1.6-2v-4" fill="#5fa9e0"/><path d="M7 11q9-12 18 0" stroke="#8a8f9a" stroke-width="1.4" fill="none"/><rect x="15" y="18" width="8" height="5" rx="1" fill="#fff"/><circle cx="19" cy="20.5" r="1.6" fill="#e8667a"/>',
    ],
    spool: [
      "Bobine de fil",
      '<rect x="8" y="4" width="16" height="3.4" rx="1.4" fill="#c58a54"/><rect x="8" y="24.6" width="16" height="3.4" rx="1.4" fill="#c58a54"/><rect x="10" y="7.4" width="12" height="17.2" fill="#e8667a"/><path d="M10 10h12M10 13h12M10 16h12M10 19h12M10 22h12" stroke="#c9505a" stroke-width=".9"/><path d="M22 18q6 2 4 9" stroke="#e8667a" stroke-width="1.2" fill="none"/>',
    ],
    robot: [
      "Robot",
      '<rect x="15" y="2" width="2" height="4" fill="#8a8f9a"/><circle cx="16" cy="2.4" r="1.6" fill="#e8667a"/><rect x="9" y="6" width="14" height="10" rx="2.4" fill="#9fc8e0"/><circle cx="13" cy="11" r="1.8" fill="#3e4352"/><circle cx="19" cy="11" r="1.8" fill="#3e4352"/><rect x="8" y="17" width="16" height="9" rx="2" fill="#7fa6c8"/><rect x="13" y="19" width="6" height="4" rx="1" fill="#ffd978"/><path d="M8 19l-4 4M24 19l4 4" stroke="#7fa6c8" stroke-width="2.4" stroke-linecap="round"/><rect x="10" y="26" width="4" height="4" fill="#5f86a8"/><rect x="18" y="26" width="4" height="4" fill="#5f86a8"/>',
    ],
    ribbon: [
      "Ruban",
      '<path d="M16 27q8 0 12 3" stroke="#e8445a" stroke-width="3" fill="none"/><circle cx="16" cy="16" r="11" fill="#e8445a"/><circle cx="16" cy="16" r="7.6" fill="#f06a7e"/><circle cx="16" cy="16" r="4" fill="#f4efe6"/>',
    ],
    scissors: [
      "Ciseaux",
      '<path d="M11.6 19.6L22 3M20.4 19.6L10 3" stroke="#b9c3d2" stroke-width="2.4" stroke-linecap="round"/><circle cx="9" cy="23" r="4.4" fill="none" stroke="#e8667a" stroke-width="2.6"/><circle cx="23" cy="23" r="4.4" fill="none" stroke="#e8667a" stroke-width="2.6"/><circle cx="16" cy="11" r="1.2" fill="#7b889c"/>',
    ],
    tag: [
      "Étiquette",
      '<path d="M4 12l7-7h17v18H11z" fill="#f2e6c8"/><circle cx="10" cy="14" r="2" fill="#fff" stroke="#c9b894"/><path d="M15 11h9M15 15h7M15 19h5" stroke="#d96f6f" stroke-width="1.4"/><path d="M10 14q-6 6-6 14" stroke="#e8445a" stroke-width="1.4" fill="none"/>',
    ],
    paperroll: [
      "Papier cadeau",
      '<rect x="4" y="11" width="24" height="10" rx="5" fill="#3f9a62"/><path d="M8 11l3 10M14 11l3 10M20 11l3 10" stroke="#ffd978" stroke-width="1.6"/><ellipse cx="27" cy="16" rx="2.4" ry="5" fill="#f4efe6"/><circle cx="27" cy="16" r="1.2" fill="#c9b894"/><path d="M5 21q-1 4 4 6l14-2" fill="#56b07a"/>',
    ],
    tape: [
      "Ruban adhésif",
      '<circle cx="15" cy="17" r="10" fill="#f4e6a8"/><circle cx="15" cy="17" r="5" fill="#fff"/><circle cx="15" cy="17" r="10" fill="none" stroke="#e2cf7a" stroke-width="1.2"/><path d="M24 14l6 1v4l-6 1" fill="#b9c3d2"/>',
    ],
    bow: [
      "Nœud",
      '<path d="M16 16l-6 12 3-.6 3 2.6M16 16l6 12-3-.6-3 2.6" fill="#c9303f"/><path d="M16 16q-10-11-13-6t13 6zM16 16q10-11 13-6t-13 6z" fill="#e8445a"/><circle cx="16" cy="16" r="3.2" fill="#f06a7e"/>',
    ],
    carrot: [
      "Carottes",
      '<path d="M8 25L22 9l3 3L11 27q-3 1-3-2z" fill="#f08a3a"/><path d="M13 21l2 1M16 17l2 1M19 13l2 1" stroke="#c9692a" stroke-width="1.2"/><path d="M23 9q0-6 4-6-1 4-2 6 4-2 6 0-3 2-6 3" fill="#5fae6a"/>',
    ],
    apple: [
      "Pommes",
      '<path d="M16 9q-4-3-8 0-5 5-1 13 3 6 6 5 3-1 6 0 3 1 6-5 4-8-1-13-4-3-8 0z" fill="#e0524f"/><path d="M16 9q0-4 2-6" stroke="#6a3a2a" stroke-width="1.6" fill="none"/><path d="M17 6q4-3 7 0-4 2-7 0z" fill="#69b87a"/><path d="M10 13q-2 3-1 6" stroke="#f08a88" stroke-width="1.6" fill="none"/>',
    ],
    hay: [
      "Botte de foin",
      '<rect x="3" y="10" width="26" height="16" rx="3" fill="#e6c76a"/><rect x="3" y="10" width="26" height="5" rx="2" fill="#f2d98a"/><path d="M10 10v16M22 10v16" stroke="#a8743a" stroke-width="1.6"/><path d="M6 18l2 4M14 17l1 5M18 18l2 3M25 17l1 5" stroke="#c9a24a" stroke-width="1"/>',
    ],
    jingle: [
      "Grelots",
      '<path d="M3 8q13 14 26 0" stroke="#c9404a" stroke-width="3.4" fill="none"/><circle cx="8" cy="15" r="3.2" fill="#e2b84a"/><circle cx="16" cy="18" r="3.4" fill="#e2b84a"/><circle cx="24" cy="15" r="3.2" fill="#e2b84a"/><path d="M6.6 16h2.8M14.4 19h3.2M22.6 16h2.8" stroke="#a8802a" stroke-width="1"/>',
    ],
    brush: [
      "Brosse",
      '<rect x="4" y="9" width="24" height="9" rx="4" fill="#c58a54"/><path d="M6 18v7M9 18v8M12 18v7M15 18v8M18 18v7M21 18v8M24 18v7M27 18v6" stroke="#5a4636" stroke-width="1.6"/><rect x="9" y="11" width="14" height="3.4" rx="1.6" fill="#a8724a"/>',
    ],
    fork: [
      "Fourche",
      '<rect x="14.7" y="10" width="2.6" height="20" rx="1" fill="#b98a58"/><path d="M8 3v6q0 3 3 3h10q3 0 3-3V3M12.6 3v9M19.4 3v9" stroke="#9aa6b8" stroke-width="2" fill="none"/>',
    ],
    sack: [
      "Hotte",
      '<path d="M8 10q-5 8-3 15 2 4 11 4t11-4q2-7-3-15z" fill="#a8723a"/><path d="M8 10q8 4 16 0l-2-3q-6 2-12 0z" fill="#c9905a"/><rect x="11" y="2" width="5" height="6" rx="1" fill="#e8667a"/><rect x="16" y="3" width="5" height="5" rx="1" fill="#5fa9e0"/><path d="M8 17q8 3 16 0" stroke="#8a5a2a" stroke-width="1.2" fill="none"/>',
    ],
    ticket: [
      "Billet de train",
      '<path d="M3 9h26v5a2 2 0 0 0 0 4v5H3v-5a2 2 0 0 0 0-4z" fill="#f2c24a"/><path d="M10 9v14" stroke="#c99a2e" stroke-dasharray="2 2"/><path d="M14 13h11M14 17h8" stroke="#8a5a2a" stroke-width="1.4"/>',
    ],
    suitcase: [
      "Valise",
      '<rect x="4" y="10" width="24" height="17" rx="3" fill="#b9573e"/><path d="M12 10V6h8v4" fill="none" stroke="#6a3a2a" stroke-width="2"/><path d="M4 16h24" stroke="#8a3a2a" stroke-width="1.4"/><rect x="9" y="10" width="2.4" height="17" fill="#e2b84a"/><rect x="20.6" y="10" width="2.4" height="17" fill="#e2b84a"/><circle cx="7.6" cy="22" r="1.8" fill="#f4efe6"/>',
    ],
    radio: [
      "Radio",
      '<path d="M8 10L20 3" stroke="#8a8f9a" stroke-width="1.6"/><rect x="4" y="10" width="24" height="16" rx="3" fill="#5f6f8a"/><circle cx="11" cy="18" r="4.4" fill="#3e4352"/><circle cx="11" cy="18" r="2" fill="#7b889c"/><rect x="18" y="14" width="7" height="3" rx="1" fill="#9af0b0"/><circle cx="20" cy="22" r="1.4" fill="#e8667a"/><circle cx="24" cy="22" r="1.4" fill="#ffd978"/>',
    ],
    camera: [
      "Appareil photo",
      '<rect x="10" y="6" width="9" height="5" rx="1.4" fill="#5c6376"/><rect x="3" y="10" width="26" height="16" rx="3" fill="#3e4352"/><circle cx="16" cy="18" r="6" fill="#7b889c"/><circle cx="16" cy="18" r="3.6" fill="#2a3a5a"/><circle cx="15" cy="17" r="1.2" fill="#9fc8e0"/><rect x="23" y="12" width="3" height="2" rx=".6" fill="#ffd978"/>',
    ],
    skymap: [
      "Carte du ciel",
      '<rect x="4" y="3" width="24" height="26" rx="2" fill="#1f2a5a"/><circle cx="16" cy="16" r="10" fill="none" stroke="#5a6aa8" stroke-width="1"/><path d="M9 11l5 3 4-4 5 6M12 22l4-3 4 3" stroke="#9fb4e8" stroke-width=".8" fill="none"/><g fill="#fff6c0"><circle cx="9" cy="11" r="1.2"/><circle cx="14" cy="14" r="1"/><circle cx="18" cy="10" r="1.2"/><circle cx="23" cy="16" r="1"/><circle cx="12" cy="22" r="1"/><circle cx="16" cy="19" r="1.2"/><circle cx="20" cy="22" r="1"/></g>',
    ],
    bear: ["Ourson", "DIT"],
    ttrain: ["Petit train", "DIT"],
    escarf: ["Écharpe brodée", "DIT"],
  }),
  (DIT.bear[1] = DIT.teddy[1] + '<path d="M12 18l4 2 4-2-1 3-3-1-3 1z" fill="#e8445a"/>'),
  (DIT.ttrain[1] = DIT.train[1]),
  (DIT.escarf[1] = DIT.scarf[1]
    .replace(/#5fae8a/g, "#c9404a")
    .replace(/#4f9a78/g, "#a8303a")
    .replace(/#e8f4ec/g, "#ffd978")),
  Object.entries({
    map: { c: ["console", "table"], a: ["bench", "desk"] },
    lantern: { c: ["hook"], a: ["console", "table", "side", "bench"] },
    backpack: { c: ["bench", "hook"], a: ["floor"] },
    mittens: { c: ["bench", "hook"], a: ["console"] },
    flask: { c: ["counter", "table"], a: ["side"] },
    logs: { c: ["floor"], a: [] },
    compass: { c: ["desk"], a: ["odrawer", "wshelf", "shelf"] },
    flag: { c: ["wall"], a: ["floor"] },
    sled: { c: ["floor"], a: [] },
    spyglass: { c: ["desk"], a: ["wshelf", "shelf"] },
    pstar: { c: ["wall"], a: ["wshelf", "shelf"] },
    bell: { c: ["wall", "hook"], a: ["wshelf", "shelf"] },
    cookie: { c: ["coffee", "table"], a: ["counter", "side"] },
    milk: { c: ["table"], a: ["counter"] },
    cupcake: { c: ["counter"], a: ["table", "ucab"] },
    choco: { c: ["ucab"], a: ["cab", "counter"] },
    wrench: { c: ["odrawer"], a: ["desk", "shelf"] },
    paint: { c: ["shelf"], a: ["wshelf", "floor"] },
    spool: { c: ["desk"], a: ["odrawer", "shelf"] },
    robot: { c: ["shelf", "wshelf"], a: ["toybox", "floor"] },
    ribbon: { c: ["table"], a: ["desk", "shelf"] },
    scissors: { c: ["odrawer"], a: ["desk", "table"] },
    tag: { c: ["desk"], a: ["odrawer", "table"] },
    paperroll: { c: ["shelf"], a: ["floor", "table"] },
    tape: { c: ["desk"], a: ["odrawer", "table"] },
    bow: { c: ["table"], a: ["wshelf", "desk"] },
    carrot: { c: ["trough"], a: ["floor"] },
    apple: { c: ["trough"], a: ["shelf"] },
    hay: { c: ["floor"], a: [] },
    jingle: { c: ["hook"], a: ["bench", "wall"] },
    brush: { c: ["shelf"], a: ["bench"] },
    fork: { c: ["floor"], a: [] },
    sack: { c: ["sleigh"], a: ["floor"] },
    bear: { c: ["sleigh"], a: ["shelf", "table"] },
    ttrain: { c: ["sleigh"], a: ["shelf", "table"] },
    escarf: { c: ["sleigh"], a: ["hook", "table"] },
    ticket: { c: ["console"], a: ["bench"] },
    suitcase: { c: ["wshelf", "floor"], a: ["bench"] },
    radio: { c: ["desk"], a: ["shelf", "side"] },
    camera: { c: ["desk", "side"], a: ["table", "sofa"] },
    skymap: { c: ["wall"], a: ["table", "desk"] },
  }).forEach(([e, t]) => {
    ((DOK[e] = t), (DIT[e][2] = t.c));
  }),
  Object.assign(DSZ, {
    ticket: 20,
    suitcase: 28,
    radio: 24,
    camera: 22,
    skymap: 24,
    sled: 32,
    logs: 28,
    hay: 30,
    fork: 30,
    sack: 28,
    flag: 26,
    paperroll: 26,
    compass: 20,
    scissors: 20,
    tag: 20,
    tape: 20,
    bow: 22,
    cookie: 22,
    milk: 20,
    cupcake: 22,
    choco: 22,
    wrench: 22,
    spool: 20,
    jingle: 24,
    brush: 24,
    carrot: 22,
    apple: 20,
    lantern: 24,
    pstar: 24,
    bell: 24,
    spyglass: 26,
    mittens: 24,
    flask: 20,
  }));
const dTrough = (e, t, a, s, n, o = "#8a5a36") => {
  const i = e.box(t, a, 0, s, n, 1, o),
    r = [
      e.P(t + 0.12, a + 0.12, 1),
      e.P(t + s - 0.12, a + 0.12, 1),
      e.P(t + s - 0.12, a + n - 0.12, 1),
      e.P(t + 0.12, a + n - 0.12, 1),
    ];
  (e.pg(r, "#e6c76a", dSh(o, 0.7)), e.zone("trough", r, i.hull));
};
const dSleigh = (e, t, a, s, n) => {
  ([a + 0.15, a + n - 0.15].forEach((a) => {
    (e.ln(e.P(t - 0.3, a, 0.05), e.P(t + s + 0.15, a, 0.05), "#e2b84a", 2.6),
      e.ln(e.P(t + s + 0.15, a, 0.05), e.P(t + s + 0.45, a, 0.5), "#e2b84a", 2.6));
  }),
    e.box(t, a, 0.25, 0.45, n, 2.1, "#b8343e"));
  const o = e.box(t + 0.45, a, 0.25, s - 0.45, n, 1.1, "#c9404a", { t: "#7a1f2a" }),
    i = [
      e.P(t + 0.6, a + 0.15, 1.35),
      e.P(t + s - 0.15, a + 0.15, 1.35),
      e.P(t + s - 0.15, a + n - 0.15, 1.35),
      e.P(t + 0.6, a + n - 0.15, 1.35),
    ];
  (e.pg(i, "#5a1520"),
    e.ln(e.P(t + 0.45, a + n, 0.8), e.P(t + s, a + n, 0.8), "#e2b84a", 1.6),
    e.zone("sleigh", i, o.hull));
};
const dXr = (e) => () => (e = (16807 * e) % 2147483647) / 2147483647;
const dF = (e) => e.map((e) => e[0].toFixed(1) + "," + e[1].toFixed(1)).join(" ");
const dPt = (e, t, a, s) => ("L" === t ? e.P(0, a, s) : e.P(a, 0, s));
const dPl = (e, t, a) => a.map(([a, s]) => dPt(e, t, a, s));
let dXid = 0;
const dCut = (e) => {
  const t = e.s.indexOf(
    '<polygon points="' + dF([e.P(0, 0), e.P(0, e.D), e.P(0, e.D, e.Hh), e.P(0, 0, e.Hh)]) + '"',
  );
  t > 0 && (e.s = e.s.slice(0, t));
};
const dWalls = (e, t, a) => {
  const { P: s, W: n, D: o, Hh: i } = e;
  (e.pg([s(0, 0), s(0, o), s(0, o, i), s(0, 0, i)], t), e.pg([s(0, 0), s(n, 0), s(n, 0, i), s(0, 0, i)], a));
};
const dEdges = (e, t, a) => {
  const { P: s, W: n, D: o, Hh: i } = e;
  (e.pg([s(0, o, 0), s(-0.35, o, 0), s(-0.35, o, i), s(0, o, i)], dSh(t, 0.62)),
    e.pg([s(n, 0, 0), s(n, -0.35, 0), s(n, -0.35, i), s(n, 0, i)], dSh(a, 0.6)),
    e.pg([s(0, 0, i), s(0, o, i), s(-0.35, o, i), s(-0.35, 0, i)], dSh(t, 0.8)),
    e.pg([s(0, 0, i), s(n, 0, i), s(n, -0.35, i), s(0, -0.35, i)], dSh(a, 0.8)),
    e.ln(s(0, 0, 0), s(0, 0, i), dSh(t, 0.6), 1.4));
};
const dTxt = (e, t, a, s, n, o, i, r = "middle", l = 700) => {
  const c = dPt(e, t, a, s),
    d = "L" === t ? [1, -0.5] : [1, 0.5],
    f = Math.hypot(d[0], d[1]);
  e.s += `<text transform="matrix(${(d[0] / f).toFixed(3)} ${(d[1] / f).toFixed(3)} 0 1 ${c[0].toFixed(1)} ${c[1].toFixed(1)})" font-size="${o}" font-weight="${l}" fill="${i}" font-family="Fraunces,Georgia,serif" text-anchor="${r}">${n}</text>`;
};
const dLogs = (e, t) => {
  const { W: a, D: s, Hh: n } = e;
  for (let o = 0, i = 0; o < n - 0.05; o += 0.5, i++) {
    const r = Math.min(n, o + 0.5),
      l = i % 2 ? 0.93 : 1;
    (e.pg(e.qL(0, s, o, r), dSh(t, 0.94 * l)),
      e.pg(e.qR(0, a, o, r), dSh(t, l)),
      [
        ["L", s],
        ["R", a],
      ].forEach(([a, s]) => {
        (e.ln(dPt(e, a, 0, r), dPt(e, a, s, r), dSh(t, 0.62), 1.8),
          e.ln(dPt(e, a, 0, o + 0.36), dPt(e, a, s, o + 0.36), dSh(t, 1.12), 1));
        const n = dPt(e, a, s, o + 0.25);
        e.s += `<ellipse cx="${n[0].toFixed(1)}" cy="${n[1].toFixed(1)}" rx="5.4" ry="5.4" fill="${dSh(t, 1.25)}" stroke="${dSh(t, 0.7)}" stroke-width="1.2"/><circle cx="${n[0].toFixed(1)}" cy="${n[1].toFixed(1)}" r="2" fill="none" stroke="${dSh(t, 0.85)}"/>`;
      }));
  }
};
const dPlanks = (e, t, a, s = 0, n = e.Hh, o = 0.45) => {
  const i = "L" === t ? e.D : e.W;
  e.pg(
    dPl(e, t, [
      [0, s],
      [i, s],
      [i, n],
      [0, n],
    ]),
    a,
  );
  for (let r = o; r < i; r += o) e.ln(dPt(e, t, r, s), dPt(e, t, r, n), dSh(a, 0.78), 1.1);
  for (let r = o / 2; r < i; r += o)
    e.s += [s + 0.2, n - 0.2]
      .map((s) => {
        const n = dPt(e, t, r, s);
        return `<circle cx="${n[0].toFixed(1)}" cy="${n[1].toFixed(1)}" r=".9" fill="${dSh(a, 0.6)}"/>`;
      })
      .join("");
};
const dBricks = (e, t, a, s, n = 0, o = e.Hh, i = 0.42, r = 0.9) => {
  const l = "L" === t ? e.D : e.W;
  e.pg(
    dPl(e, t, [
      [0, n],
      [l, n],
      [l, o],
      [0, o],
    ]),
    a,
  );
  for (let a = n, c = 0; a < o - 0.01; a += i, c++) {
    e.ln(dPt(e, t, 0, a), dPt(e, t, l, a), s, 1);
    for (let n = ((c % 2) * r) / 2; n < l; n += r)
      n > 0 && e.ln(dPt(e, t, n, a), dPt(e, t, n, Math.min(o, a + i)), s, 1);
  }
};
const dPanels = (e, t, a) => {
  const s = "L" === t ? e.D : e.W,
    n = e.Hh;
  (e.pg(
    dPl(e, t, [
      [0, 0],
      [s, 0],
      [s, n],
      [0, n],
    ]),
    a,
  ),
    [1.1, n - 0.7].forEach((n) => e.ln(dPt(e, t, 0, n), dPt(e, t, s, n), dSh(a, 0.75), 1.4)));
  for (let o = 1.4; o < s; o += 1.4) e.ln(dPt(e, t, o, 0), dPt(e, t, o, n), dSh(a, 0.75), 1.4);
  for (let o = 0.15; o < s; o += 0.35)
    [1.25, n - 0.85].forEach((s) => {
      const n = dPt(e, t, o, s);
      e.s += `<circle cx="${n[0].toFixed(1)}" cy="${n[1].toFixed(1)}" r="1" fill="${dSh(a, 0.62)}"/>`;
    });
  e.pg(
    dPl(e, t, [
      [0, 0],
      [s, 0],
      [s, 1.1],
      [0, 1.1],
    ]),
    dSh(a, 0.86),
  );
};
const dStripes = (e, t, a, s, n = 0.4, o) => {
  const i = "L" === t ? e.D : e.W,
    r = e.Hh;
  e.pg(
    dPl(e, t, [
      [0, 0],
      [i, 0],
      [i, r],
      [0, r],
    ]),
    a,
  );
  for (let a = 0; a < i; a += 2 * n)
    e.pg(
      dPl(e, t, [
        [a, 0],
        [Math.min(i, a + n), 0],
        [Math.min(i, a + n), r],
        [a, r],
      ]),
      s,
    );
  if (o) for (let a = n; a < i; a += 2 * n) e.ln(dPt(e, t, a, 0), dPt(e, t, a, r), o, 1);
};
const dDots = (e, t, a, s, n, o, i) => {
  const r = dXr(i),
    l = "L" === t ? e.D : e.W;
  for (let i = 0; i < o; i++) {
    const o = dPt(e, t, 0.2 + r() * (l - 0.4), s + r() * (n - s));
    e.s += `<circle cx="${o[0].toFixed(1)}" cy="${o[1].toFixed(1)}" r="${(1.6 + 1.6 * r()).toFixed(1)}" fill="${a[i % a.length]}"/>`;
  }
};
const dFlPl = (e, t, a = 0.55) => {
  const { P: s, W: n, D: o } = e,
    i = dXr(7);
  for (let i = a; i < o; i += a) e.ln(s(0, i), s(n, i), dSh(t, 0.8), 1);
  for (let r = 0; r < o; r += a)
    for (let l = 2 * i(); l < n; l += 1.6 + 1.8 * i())
      e.ln(s(l, r), s(l, Math.min(o, r + a)), dSh(t, 0.8), 1);
};
const dFlSnow = (e, t = 3) => {
  const { P: a, W: s, D: n } = e,
    o = dXr(t);
  for (let t = 0; t < 90; t++) {
    const t = a(o() * s, o() * n);
    e.s += `<circle cx="${t[0].toFixed(1)}" cy="${t[1].toFixed(1)}" r="${(0.6 + 1.4 * o()).toFixed(1)}" fill="${o() < 0.5 ? "#cfe2f4" : "#fff"}"/>`;
  }
};
const dFlGrid = (e, t) => {
  const { P: a, W: s, D: n } = e;
  for (let o = 1; o < 7; o++)
    (e.ln(a(o, 0), a(o, n), dSh(t, 0.78), 1.2), e.ln(a(0, o), a(s, o), dSh(t, 0.78), 1.2));
  for (let o = 0.5; o < s; o += 1)
    for (let s = 0.5; s < n; s += 1) {
      const n = a(o, s);
      e.s += `<circle cx="${n[0].toFixed(1)}" cy="${n[1].toFixed(1)}" r="1.1" fill="${dSh(t, 0.7)}"/>`;
    }
};
const dFlBlob = (e, t, a, s, n, o, i = 18) => {
  const r = [];
  for (let o = 0; o < i; o++) {
    const l = (o / i) * Math.PI * 2,
      c = 1 + 0.12 * Math.sin(5 * l);
    r.push(e.P(t + s * c * Math.cos(l), a + n * c * Math.sin(l)));
  }
  e.pg(r, o, dSh(o, 0.8), 1);
};
const dScape = (e, t, a, s, n, o, i = {}) => {
  const r = "dx" + ++dXid,
    l = dXr(i.seed || 11),
    c = (a + s) / 2;
  let d;
  if ("arch" === i.shape) {
    const e = o - ((s - a) / 2) * (i.ar || 0.8);
    d = [
      [a, n],
      [s, n],
      [s, e],
    ];
    for (let t = 1; t < 16; t++) {
      const n = (t / 16) * Math.PI;
      d.push([c + ((s - a) / 2) * Math.cos(n), e + (o - e) * Math.sin(n)]);
    }
    d.push([a, e]);
  } else if ("round" === i.shape) {
    const e = (n + o) / 2;
    d = [];
    for (let t = 0; t < 24; t++) {
      const i = (t / 24) * Math.PI * 2;
      d.push([c + ((s - a) / 2) * Math.cos(i), e + ((o - n) / 2) * Math.sin(i)]);
    }
  } else
    d = [
      [a, n],
      [s, n],
      [s, o],
      [a, o],
    ];
  const f = dPl(e, t, d),
    u = i.sky || ["#141a4a", "#3a4a8a"],
    h = o - n;
  e.s += `<defs><linearGradient id="${r}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${u[0]}"/><stop offset="1" stop-color="${u[1]}"/></linearGradient><clipPath id="${r}c"><polygon points="${dF(f)}"/></clipPath>${(i.au || []).map((e, t) => `<linearGradient id="${r}a${t}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${e}" stop-opacity="0"/><stop offset=".55" stop-color="${e}" stop-opacity=".7"/><stop offset="1" stop-color="${e}" stop-opacity="1"/></linearGradient>`).join("")}<filter id="${r}b" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.6"/></filter><filter id="${r}g" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5"/></filter></defs><g clip-path="url(#${r}c)"><polygon points="${dF(f)}" fill="url(#${r}s)"/>`;
  for (let o = 0; o < (i.stars || 0); o++) {
    const o = dPt(e, t, a + l() * (s - a), n + h * (0.35 + 0.65 * l()));
    e.s += `<circle cx="${o[0].toFixed(1)}" cy="${o[1].toFixed(1)}" r="${(0.5 + 1.1 * l()).toFixed(1)}" fill="#fff" opacity="${(0.5 + 0.5 * l()).toFixed(2)}"/>`;
  }
  if (i.moon) {
    const o = dPt(e, t, a + 0.78 * (s - a), n + 0.8 * h);
    e.s += `<circle cx="${o[0].toFixed(1)}" cy="${o[1].toFixed(1)}" r="9" fill="#fff6d0" opacity=".25"/><circle cx="${o[0].toFixed(1)}" cy="${o[1].toFixed(1)}" r="5.4" fill="#fff6d0"/>`;
  }
  if (
    ((i.au || []).forEach((o, i) => {
      const l = (e) => n + h * (0.36 + 0.11 * i) + 0.08 * h * Math.sin(2.3 * e + 1.9 * i),
        c = (e) => h * (0.34 + 0.14 * Math.sin(1.5 * e + 2.4 * i)),
        d = [],
        f = [];
      for (let e = a - 0.2; e <= s + 0.2; e += 0.1) (d.push([e, l(e)]), f.unshift([e, l(e) + c(e)]));
      const u = dF(dPl(e, t, d.concat(f)));
      e.s += `<polygon points="${u}" fill="${o}" opacity=".35" filter="url(#${r}g)"/><polygon points="${u}" fill="url(#${r}a${i})" filter="url(#${r}b)"/>`;
      for (let n = a; n <= s; n += 0.06) {
        const a = dPt(e, t, n, l(n)),
          s = dPt(e, t, n, l(n) + c(n) * (0.55 + 0.4 * Math.abs(Math.sin(9 * n + i))));
        e.s += `<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${s[0].toFixed(1)}" y2="${s[1].toFixed(1)}" stroke="${o}" stroke-opacity=".28" stroke-width="1"/>`;
      }
    }),
    i.mt)
  ) {
    const o = [[a - 0.1, n]];
    for (let e = a - 0.1; e <= s + 0.2; e += 0.55)
      o.push([e, n + h * (0.18 + 0.22 * Math.abs(Math.sin(1.7 * e + 0.6)))]);
    (o.push([s + 0.2, n]), e.pg(dPl(e, t, o), i.mt));
  }
  if (i.houses)
    for (let o = a + 0.3; o < s - 0.2; o += 0.7 + 0.3 * l()) {
      const a = n + 0.12 * h,
        s = 0.12 * h;
      e.pg(
        dPl(e, t, [
          [o, a],
          [o + 0.4, a],
          [o + 0.4, a + s],
          [o + 0.2, a + 1.6 * s],
          [o, a + s],
        ]),
        "#3a2a4a",
      );
      const i = dPt(e, t, o + 0.2, a + 0.5 * s);
      e.s += `<rect x="${(i[0] - 1.6).toFixed(1)}" y="${(i[1] - 1.6).toFixed(1)}" width="3.2" height="3.2" fill="#ffd36b"/>`;
    }
  if (i.pines)
    for (let o = 0; o < i.pines; o++) {
      const o = a + l() * (s - a),
        r = n + h * (0.08 + 0.08 * l()),
        c = h * (0.16 + 0.14 * l());
      e.pg(
        dPl(e, t, [
          [o - 0.16, r],
          [o, r + c],
          [o + 0.16, r],
        ]),
        i.pc || "#1f4a4a",
      );
    }
  (e.pg(
    dPl(e, t, [
      [a - 0.1, n],
      [s + 0.1, n],
      [s + 0.1, n + 0.1 * h],
      [c, n + 0.14 * h],
      [a - 0.1, n + 0.09 * h],
    ]),
    i.gr || "#eef4fb",
  ),
    (e.s += `</g><polygon points="${dF(f)}" fill="none" stroke="${i.fr || "#f4f1ea"}" stroke-width="${i.fw || 4}" stroke-linejoin="round"/>`),
    i.mul &&
      (e.ln(dPt(e, t, c, n), dPt(e, t, c, o), i.fr || "#f4f1ea", 1.8),
      e.ln(dPt(e, t, a, n + 0.5 * h), dPt(e, t, s, n + 0.5 * h), i.fr || "#f4f1ea", 1.8)));
};
const dDeer = (e, t, a, s = 1, n) => {
  const o = e.P(t, a, 0);
  e.s += `<g transform="translate(${o[0].toFixed(1)} ${o[1].toFixed(1)}) scale(${s})"><path d="M-16 -22v22M-8 -21v21M8 -21v21M15 -22v22" stroke="#6a4024" stroke-width="3.6" stroke-linecap="round"/><ellipse cx="0" cy="-27" rx="19" ry="10" fill="#a8723a"/><ellipse cx="2" cy="-22" rx="13" ry="4" fill="#e6c79a"/><path d="M-14 -31q-6-9-5-20" stroke="#a8723a" stroke-width="8" stroke-linecap="round"/><ellipse cx="-22" cy="-52" rx="8" ry="6" fill="#a8723a"/><ellipse cx="-28" cy="-50" rx="3.4" ry="2.6" fill="#5a3a22"/><circle cx="-21" cy="-54" r="1.3" fill="#2a1a10"/><path d="M-19 -57q-2-10 5-15M-16 -66l6-2M-23 -57q-9-8-7-16M-29 -66l-5-3" stroke="#e2c99a" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M18 -31q5-1 5 4" stroke="#a8723a" stroke-width="4" stroke-linecap="round"/>${n ? '<path d="M-17 -40q8 6 14 14" stroke="#c9404a" stroke-width="3.4" fill="none"/><circle cx="-12" cy="-36" r="2.2" fill="#e2b84a"/><circle cx="-7" cy="-31" r="2.2" fill="#e2b84a"/>' : ""}</g>`;
};
const dGear = (e, t, a, s, n, o) => {
  const i = [];
  for (let e = 0; e < 32; e++) {
    const t = (e / 32) * Math.PI * 2,
      o = n * (e % 4 < 2 ? 1.18 : 1);
    i.push([a + o * Math.cos(t), s + o * Math.sin(t)]);
  }
  e.pg(dPl(e, t, i), o, dSh(o, 0.7), 1);
  const r = [];
  for (let e = 0; e < 16; e++) {
    const t = (e / 16) * Math.PI * 2;
    r.push([a + 0.38 * n * Math.cos(t), s + 0.38 * n * Math.sin(t)]);
  }
  e.pg(dPl(e, t, r), dSh(o, 0.7));
};
const dPine = (e, t, a, s = 1) => {
  (e.cyl(t, a, 0, 0.3 * s, 0.5 * s, "#8a5a36"), (e.ch[e.ch.length - 1].h = 2.4 * s));
  const n = e.P(t, a, 0.5 * s);
  e.s += `<g transform="translate(${n[0].toFixed(1)} ${n[1].toFixed(1)}) scale(${s})"><path d="M0-46l13 18h-6l10 14h-7l9 14h-38l9-14h-7l10-14h-6z" fill="#2f7a52"/><path d="M0-46l13 18h-6l10 14h-7l9 14H0z" fill="#276a46"/><path d="M-9-18h18M-12-4h24" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"/></g>`;
};
const dGifts = (e, t, a) => {
  [
    [0, 0, 0.9, 0.9, 0.7, "#e8667a"],
    [0.9, 0.1, 0.8, 0.8, 0.55, "#5fa9e0"],
    [0.15, 0.1, 0.65, 0.65, 0.5, "#7fc48a", ".7"],
    [1, 0.2, 0.55, 0.55, 0.45, "#f2c24a", ".55"],
  ].forEach(([s, n, o, i, r, l, c]) => {
    const d = c ? +c : 0;
    (e.box(t + s, a + n, d, o, i, r, l),
      e.ln(e.P(t + s + o / 2, a + n + i, d), e.P(t + s + o / 2, a + n + i, d + r), "#fff", 2),
      e.ln(e.P(t + s + o, a + n + i / 2, d), e.P(t + s + o, a + n + i / 2, d + r), "#fff", 2));
  });
};
const dBunting = (e, t, a, s, n, o) => {
  e.ln(dPt(e, t, a, n), dPt(e, t, s, n), "#8a6a4a", 1);
  let i = 0;
  for (let r = a + 0.05; r < s - 0.35; r += 0.45)
    e.pg(
      dPl(e, t, [
        [r, n],
        [r + 0.36, n],
        [r + 0.18, n - 0.42],
      ]),
      o[i++ % o.length],
    );
};
const dWoodStove = (e, t, a) => {
  const s = e.box(t, a, 0, 1.3, 1.1, 1.6, "#3a3d48", { t: "#2a2c34" });
  (e.pg(
    [
      e.P(t + 0.3, a + 1.1, 0.35),
      e.P(t + 1, a + 1.1, 0.35),
      e.P(t + 1, a + 1.1, 1.05),
      e.P(t + 0.3, a + 1.1, 1.05),
    ],
    "#f4a24a",
    "#2a2c34",
    1.4,
  ),
    e.pg(
      [e.P(t + 0.42, a + 1.1, 0.42), e.P(t + 0.88, a + 1.1, 0.42), e.P(t + 0.65, a + 1.1, 0.95)],
      "#ffd36b",
    ),
    e.box(t + 0.5, a + 0.4, 1.6, 0.3, 0.3, e.Hh - 1.6, "#4a4e5a"),
    e.zone("stove", s.top, s.hull));
};
const dOven = (e, t, a, s, n) => {
  const o = 2.4,
    i = e.box(t, a, 0, s, n, o, "#c0634a", { t: "#a8523c" });
  for (let i = 0.4; i < o; i += 0.4) e.ln(e.P(t + s, a, i), e.P(t + s, a + n, i), "#9a4a36", 1);
  const r = [];
  for (let o = 0; o <= 12; o++) {
    const i = (o / 12) * Math.PI;
    r.push(e.P(t + s, a + n / 2 + 0.55 * Math.cos(i), 0.35 + 0.7 * Math.sin(i)));
  }
  (r.push(e.P(t + s, a + n / 2 - 0.55, 0.35), e.P(t + s, a + n / 2 + 0.55, 0.35)),
    e.pg(r, "#2a1a14"),
    e.pg(
      [e.P(t + s, a + n / 2 - 0.35, 0.36), e.P(t + s, a + n / 2 + 0.35, 0.36), e.P(t + s, a + n / 2, 0.8)],
      "#f4a24a",
    ),
    e.box(t + s / 2 - 0.3, a + n / 2 - 0.3, o, 0.6, 0.6, e.Hh - o, "#a8523c"),
    e.zone("stove", i.top, i.hull));
};
const dFireplace = (e, t, a) => {
  const s = e.box(0, t, 0, 0.9, a, 2.2, "#d9c8b0", { t: "#c9b89e" });
  (e.pg(
    [e.P(0.9, t + 0.4, 0.2), e.P(0.9, t + a - 0.4, 0.2), e.P(0.9, t + a - 0.4, 1.4), e.P(0.9, t + 0.4, 1.4)],
    "#2a1a14",
  ),
    e.pg([e.P(0.9, t + 0.6, 0.22), e.P(0.9, t + a - 0.6, 0.22), e.P(0.9, t + a / 2, 1)], "#f4a24a"),
    e.pg([e.P(0.9, t + 0.85, 0.22), e.P(0.9, t + a - 0.85, 0.22), e.P(0.9, t + a / 2, 0.7)], "#ffd36b"),
    e.box(-0.05, t - 0.15, 2.2, 1.15, a + 0.3, 0.22, "#a8724a"),
    e.zone(
      "wshelf",
      [
        e.P(0, t - 0.15, 2.42),
        e.P(1.1, t - 0.15, 2.42),
        e.P(1.1, t + a + 0.15, 2.42),
        e.P(0, t + a + 0.15, 2.42),
      ],
      s.hull,
    ));
};
const dIceBench = (e, t, a, s, n) => {
  const o = e.box(t, a, 0, s, n, 0.9, "#d6e8f6", { t: "#e6f1fa" }),
    i = e.box(t, a, 0.9, s, n, 0.22, "#c9a27a", { t: "#d9b48a" });
  (e.box(t + 0.1, a + n - 0.7, 1.12, 0.8, 0.6, 0.3, "#e8946c"),
    e.zone("sofa", i.top, dHull([...o.hull, ...i.hull])));
};
const dIceBlock = (e, t, a, s, n, o, i) => {
  const r = e.box(t, a, 0, s, n, o, "#cfe4f4", { t: "#e3f0fa" });
  (e.ln(e.P(t, a + n, 0.5 * o), e.P(t + s, a + n, 0.5 * o), "#b6d0e6", 1),
    e.ln(e.P(t + s, a, 0.5 * o), e.P(t + s, a + n, 0.5 * o), "#b6d0e6", 1),
    e.zone(i, r.top, r.hull));
};
const dIgloo = (e) => {
  const { P: t, W: a, D: s, Hh: n } = e,
    o = (e, t) => 1.9 + (n - 1.9) * Math.cos((((e / t) * Math.PI) / 2) * 0.92);
  ([
    ["L", s, "#dcebf7"],
    ["R", a, "#e9f3fb"],
  ].forEach(([t, a, s]) => {
    const i = [
      [0, 0],
      [a, 0],
    ];
    for (let e = a; e >= 0; e -= 0.2) i.push([e, o(e, a)]);
    const r = "dx" + ++dXid,
      l = dF(dPl(e, t, i));
    e.s += `<defs><clipPath id="${r}"><polygon points="${l}"/></clipPath></defs><polygon points="${l}" fill="${s}"/><g clip-path="url(#${r})">`;
    for (let s = 0, o = 0; s < n; s += 0.55, o++) {
      (e.ln(dPt(e, t, 0, s), dPt(e, t, a, s), "#b6d0e6", 1.3),
        e.ln(dPt(e, t, 0, s + 0.08), dPt(e, t, a, s + 0.08), "#fff", 0.8));
      for (let n = (o % 2) * 0.6; n < a; n += 1.2)
        n > 0 && e.ln(dPt(e, t, n, s), dPt(e, t, n, s + 0.55), "#b6d0e6", 1.3);
    }
    e.s += "</g>";
    const c = [];
    for (let s = a; s >= 0; s -= 0.2) c.push(dPt(e, t, s, o(s, a)));
    e.s += `<polyline points="${dF(c)}" fill="none" stroke="#a9c4dc" stroke-width="3.4" stroke-linejoin="round"/>`;
  }),
    e.ln(t(0, 0, 0), t(0, 0, n), "#b6d0e6", 1.4));
};
const DNIGHT = "#232a66";
const DXR = [
  {
    n: "Le départ vers le Nord",
    s: "Zeni part pour le pôle Nord ! Dans la petite gare du village, il attend le train de nuit. Range ses affaires avant le départ : billet, valise, carte du Nord et lanterne.",
    c: ["#efe3cc", "#efe3cc", "#cdb89a", "#bfa98a"],
    w: (e) => {
      (dWalls(e, "#efe3cc", "#f4e9d6"),
        dPlanks(e, "L", "#4f7a5a", 0, 1.7, 0.32),
        dPlanks(e, "R", "#4f7a5a", 0, 1.7, 0.32),
        dEdges(e, "#efe3cc", "#f4e9d6"),
        e.pg(
          dPl(e, "L", [
            [1, 2.9],
            [3.9, 2.9],
            [3.9, 4.6],
            [1, 4.6],
          ]),
          "#2a2f3a",
          "#8a6a4a",
          2,
        ),
        dTxt(e, "L", 2.45, 4.25, "DÉPARTS", 8, "#ffd978"),
        [
          ["Pôle Nord", "22:15"],
          ["Toundra", "22:40"],
          ["Aurores", "23:05"],
        ].forEach(([t, a], s) => {
          (dTxt(e, "L", 3.7, 3.9 - 0.32 * s, t, 6.5, "#f4efe6", "start", 600),
            dTxt(e, "L", 1.2, 3.9 - 0.32 * s, a, 6.5, "#ffd978", "end", 600));
        }),
        dScape(e, "R", 1.2, 3.9, 1.9, 4.7, {
          shape: "arch",
          stars: 26,
          moon: 1,
          mt: "#9fb0d6",
          pines: 9,
          fr: "#4f7a5a",
          fw: 5,
          mul: 1,
          seed: 5,
        }),
        dClockW(e, "R", 5.2, 4.4),
        dTxt(e, "R", 5.2, 4.95, "GARE", 8, "#4f7a5a"));
    },
    b: (e) => {
      (dHooks(e, "R", 4.2, 6.6, 3.4, "#4f7a5a"),
        dWallShelf(e, "L", 4.6, 6.6, 3.6, "#4f7a5a"),
        dRug(e, 3.4, 2.2, 3, 1, "#e2b84a"),
        dBench(e, 0, 0.8, 1.1, 2.8, "#4f7a5a"),
        dConsole(e, 0, 4.5, 1, 2, "#6a4a3a"),
        dPine(e, 6.2, 6.2, 1.1));
    },
    items: ["coat", "hat", "scarf", "boots", "mittens", "backpack", "ticket", "suitcase", "map", "lantern"],
  },
  {
    n: "La cabane de la toundra",
    s: "Au milieu de la toundra glacée, Zeni trouve une cabane en rondins pour la nuit. Il range ses affaires près du poêle, bien au chaud.",
    c: ["#b9824e", "#b9824e", "#a8784a", "#9a6c40"],
    w: (e) => {
      (dLogs(e, "#b9824e"),
        dScape(e, "L", 0.8, 2.6, 2.3, 4.2, {
          stars: 14,
          moon: 1,
          mt: "#c9d6ec",
          pines: 7,
          fr: "#7a4a2a",
          fw: 5,
          mul: 1,
          seed: 9,
          sky: ["#1a2050", "#5a6aa8"],
        }));
      const t = e.P(3.6, 0, 4.4);
      ((e.s += `<g transform="translate(${t[0].toFixed(1)} ${t[1].toFixed(1)})"><path d="M0 0q-12-4-16-16M-8-4q-4-6-3-12M-13-9l-7 1M0 0q12-4 16-16M8-4q4-6 3-12M13-9l7 1" stroke="#e2c99a" stroke-width="2.6" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="3" rx="6" ry="5" fill="#7a4a2a"/></g>`),
        dFlPl(e, "#a8784a"));
    },
    b: (e) => {
      (dHooks(e, "R", 4.2, 6.6, 3.4, "#6a4024"),
        dFlBlob(e, 4.6, 4, 1.5, 1.2, "#e6d6bc"),
        dWoodStove(e, 0.6, 0.3),
        dSide(e, 0, 1.9, 0.9, 0.9, 1.25, "#8a5a36"),
        dBed(e, 0, 3, 2.4, 3.6, "#a8503a", "#6a4024", "#efe2c8"),
        dTable(e, 3.4, 2.2, 1.6, 1.4, 1.7, "#8a5a36"),
        dChairOf(e, 5.3, 2.4, "#8a5a36"),
        e.box(2.4, 0.15, 0, 1.4, 0.7, 0.5, "#9a6a3e", { t: "#c9965e" }));
    },
    items: ["pot", "kettle", "cocoa", "flask", "logs", "blanket", "pillow", "lantern", "hat", "scarf"],
  },
  {
    n: "La station du pôle Nord",
    s: "Le voici au pôle Nord ! Dans la station des explorateurs, entre la radio et les hublots, Zeni range la boussole, le drapeau et la luge.",
    c: ["#cfd8e2", "#cfd8e2", "#9aa6b4", "#8e9aa8"],
    w: (e) => {
      (dPanels(e, "L", "#cfd8e2"),
        dPanels(e, "R", "#dbe3ec"),
        dEdges(e, "#cfd8e2", "#dbe3ec"),
        e.pg(e.qL(0, e.D, 1.1, 1.35), "#e8945a"),
        e.pg(e.qR(0, e.W, 1.1, 1.35), "#e8945a"),
        dScape(e, "L", 1, 2.4, 2.6, 3.9, {
          shape: "round",
          stars: 8,
          mt: "#e6eef8",
          sky: ["#2a3a7a", "#8aa6d9"],
          gr: "#f4f8fc",
          fr: "#7b889c",
          fw: 6,
          seed: 4,
        }),
        dScape(e, "L", 3, 4.4, 2.6, 3.9, {
          shape: "round",
          stars: 8,
          sky: ["#2a3a7a", "#8aa6d9"],
          gr: "#f4f8fc",
          fr: "#7b889c",
          fw: 6,
          seed: 8,
          pines: 0,
        }));
      const t = dPt(e, "L", 3.7, 2.95);
      ((e.s += `<path d="M${t[0].toFixed(1)} ${t[1].toFixed(1)}v-16l9 3-9 4" stroke="#555" fill="#e8667a"/>`),
        e.pg(
          dPl(e, "R", [
            [1.4, 3],
            [4.2, 3],
            [4.2, 4.4],
            [1.4, 4.4],
          ]),
          "#1f2a36",
          "#7b889c",
          2,
        ));
      const a = dPt(e, "R", 2.2, 3.7);
      ((e.s += `<ellipse cx="${a[0].toFixed(1)}" cy="${a[1].toFixed(1)}" rx="13" ry="13" fill="none" stroke="#5ff59a" stroke-width="1.2" opacity=".8"/><ellipse cx="${a[0].toFixed(1)}" cy="${a[1].toFixed(1)}" rx="7" ry="7" fill="none" stroke="#5ff59a" opacity=".6"/><line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${(a[0] + 11).toFixed(1)}" y2="${(a[1] - 6).toFixed(1)}" stroke="#5ff59a" stroke-width="1.4"/>`),
        [
          [3, 4.1],
          [3, 3.75],
          [3, 3.4],
        ].forEach(([t, a], s) => e.ln(dPt(e, "R", t, a), dPt(e, "R", t + 0.9 - 0.2 * s, a), "#5ff59a", 1.4)),
        dTxt(e, "R", 2.8, 4.85, "STATION POLAIRE", 7.5, "#3e4a5c"),
        dFlGrid(e, "#9aa6b4"));
    },
    b: (e) => {
      (dHooks(e, "L", 5, 6.6, 3.4, "#5c6376"),
        dRug(e, 1.8, 2.6, 3, 2.4, "#e8945a"),
        dDeskO(e, 1.3, 0, 3.1, 1.3, "#8a96a8"),
        dShelf(e, 5, 0, 1.9, 1.1, 4.4, "#7b889c", "L"),
        dChairOf(e, 2.3, 1.6, "#e8945a"),
        dFiling(e, 0, 5.4, 1.1, 1.2, "#9aa6b8"));
    },
    items: ["compass", "flag", "sled", "earth", "notebook", "folder", "books", "radio", "mug", "coat"],
  },
  {
    n: "L’igloo des aurores",
    s: "Zeni passe la nuit dans un igloo. Par la grande ouverture, le ciel s’illumine de vert et de rose : les aurores boréales dansent au-dessus de la neige.",
    c: ["#dcebf7", "#dcebf7", "#f2f7fc", "#e8f0f8"],
    Hh: 5.6,
    w: (e) => {
      (dIgloo(e),
        dScape(e, "R", 0.9, 5.6, 0.7, 3.7, {
          shape: "arch",
          ar: 0.5,
          stars: 46,
          sky: ["#060a24", "#123a5a"],
          au: ["#5ff5b0", "#5ad8f0", "#f08ad8"],
          mt: "#1f3550",
          pines: 10,
          pc: "#0e2230",
          gr: "#dfeefa",
          fr: "#c9dff0",
          fw: 7,
          seed: 13,
        }),
        dFlSnow(e, 5));
    },
    b: (e) => {
      (dFlBlob(e, 3.6, 3.6, 1.7, 1.3, "#c9a27a"),
        dFlBlob(e, 3.6, 3.6, 1.2, 0.9, "#d9b48a"),
        dIceBench(e, 0, 1.8, 1.6, 3.6),
        dIceBlock(e, 3, 3, 1.3, 1.3, 0.9, "table"),
        dIceBlock(e, 5.6, 0.4, 1, 1, 1.6, "desk"),
        dIceBlock(e, 0, 0.2, 1, 1, 1.25, "side"),
        dIceBlock(e, 0, 5.8, 1, 1, 1.25, "side"));
      const t = e.P(6.1, 0.9, 1.6);
      e.s += `<path d="M${t[0].toFixed(1)} ${t[1].toFixed(1)}m-8 0l-6 18M${t[0].toFixed(1)} ${t[1].toFixed(1)}m0 0l0 20M${t[0].toFixed(1)} ${t[1].toFixed(1)}m8 0l6 18" stroke="#6a5a4a" stroke-width="1.4" opacity="0"/>`;
    },
    items: ["spyglass", "camera", "skymap", "pstar", "candle", "blanket", "cocoa", "flask", "globe", "book"],
  },
  {
    n: "Une maison en pain d’épices",
    s: "Au village du Père Noël, les maisons sont en pain d’épices ! Zeni aide à décorer celle-ci : sapin, guirlande, cloche et chaussettes devant la cheminée.",
    c: ["#b9783e", "#b9783e", "#f6e6e6", "#e8a8a8"],
    w: (e) => {
      (dWalls(e, "#b06e36", "#bf7c40"),
        dEdges(e, "#b06e36", "#bf7c40"),
        [
          ["L", e.D],
          ["R", e.W],
        ].forEach(([t, a]) => {
          for (let s = 0; s < a - 0.01; s += 0.5)
            e.pg(
              dPl(e, t, [
                [s, e.Hh - 0.02],
                [s + 0.5, e.Hh - 0.02],
                [s + 0.25, e.Hh - 0.42],
              ]),
              "#fff",
            );
          e.ln(dPt(e, t, 0, 1.2), dPt(e, t, a, 1.2), "#fff", 2.4);
          for (let s = 0.25; s < a; s += 0.5) {
            const a = dPt(e, t, s, 1.2);
            e.s += `<circle cx="${a[0].toFixed(1)}" cy="${(a[1] - 3).toFixed(1)}" r="2.4" fill="${["#e8445a", "#7fc48a", "#ffd978", "#5fa9e0"][Math.round(2 * s) % 4]}"/>`;
          }
          dDots(e, t, ["#e8445a", "#7fc48a", "#ffd978", "#fff"], 1.6, e.Hh - 0.7, 10, "L" === t ? 3 : 7);
        }),
        dScape(e, "R", 2.9, 4.9, 2.3, 4.3, {
          shape: "arch",
          stars: 18,
          moon: 1,
          houses: 1,
          pines: 4,
          fr: "#fff",
          fw: 5,
          mul: 1,
          seed: 21,
        }),
        [
          [0, e.D],
          [e.W, 0],
        ].forEach(([t, a]) => {
          const s = e.P(t, a, 0),
            n = e.P(t, a, e.Hh);
          e.s += `<line x1="${s[0].toFixed(1)}" y1="${s[1].toFixed(1)}" x2="${n[0].toFixed(1)}" y2="${n[1].toFixed(1)}" stroke="#fff" stroke-width="7"/><line x1="${s[0].toFixed(1)}" y1="${s[1].toFixed(1)}" x2="${n[0].toFixed(1)}" y2="${n[1].toFixed(1)}" stroke="#e8445a" stroke-width="7" stroke-dasharray="6 6"/>`;
        }));
    },
    b: (e) => {
      (dFireplace(e, 2, 2.4),
        dRug(e, 2.4, 2, 3.6, 3.4, "#c9505a"),
        dSide(e, 0, 5.2, 1, 1, 1.25, "#7a3a1a"),
        dShelf(e, 5.6, 0, 1.4, 1, 3.4, "#a8603a", "L"),
        dSofa(e, 1.4, 5.2, 3, 1.6, "#f4a6c0", !1),
        dTable(e, 3.3, 2.7, 1.6, 1.7, 0.9, "#6a3a22", "coffee"));
    },
    items: ["tree", "gift", "gift2", "garland", "stocking", "wreath", "bell", "cookie", "globe", "candle"],
  },
  {
    n: "La boulangerie des lutins",
    s: "Ça sent le chocolat chaud ! Près du grand four à pain, Zeni donne un coup de main aux lutins boulangers et range leur boutique.",
    c: ["#f4e2c8", "#f4e2c8", "#c9704a", "#e8c0a0"],
    w: (e) => {
      (dWalls(e, "#f4e2c8", "#f8ead4"),
        dBricks(e, "L", "#f4f6f8", "#cfd8e2", 0, 1.9, 0.38, 0.38),
        dBricks(e, "R", "#f4f6f8", "#cfd8e2", 0, 1.9, 0.38, 0.38),
        dEdges(e, "#f4e2c8", "#f8ead4"),
        dScape(e, "L", 0.8, 2.5, 2.4, 4.2, {
          shape: "arch",
          stars: 12,
          houses: 1,
          fr: "#a8603a",
          fw: 5,
          mul: 1,
          seed: 17,
        }),
        dTxt(e, "L", 1.65, 4.7, "Boulangerie", 11, "#a8603a", void 0, 700),
        dBunting(e, "R", 0.2, 6.8, 5, ["#e8445a", "#ffd978", "#7fc48a", "#5fa9e0"]));
    },
    b: (e) => {
      (dOven(e, 0, 3.8, 1.5, 2.2),
        dUpperC(e, 0.3, 2.2, "#c98a6a"),
        dUpperC(e, 3.6, 5.5, "#c98a6a"),
        dWallShelf(e, "R", 2.35, 3.45, 3.6, "#a8603a"),
        dRug(e, 2, 3, 3.8, 3, "#e8946c"),
        dCounterF(e, 0.3, 0, 1.9, 1.3, "L", "#f4e6d6", "#a8603a"),
        dCounterF(e, 2.2, 0, 1.4, 1.3, "L", "#f4e6d6", "#a8603a"),
        dCounterF(e, 3.6, 0, 1.9, 1.3, "L", "#f4e6d6", "#a8603a"),
        dFridge(e, 5.6, 0, 1.3, 1.3),
        dChairOf(e, 2, 3.6, "#e8667a"),
        dTable(e, 3, 3.3, 2, 1.8, 1.7, "#a8603a"),
        dChairOf(e, 5.4, 3.6, "#e8667a"),
        e.box(5.6, 5.4, 0, 0.8, 0.7, 1, "#efe2c8", { t: "#f6ecd8" }),
        e.box(6, 6.2, 0, 0.7, 0.6, 0.9, "#e6d6bc", { t: "#f6ecd8" }));
    },
    items: ["milk", "cupcake", "choco", "cocoa", "cookie", "mug", "plate", "bowl", "spatula", "pot"],
  },
  {
    n: "L’usine à jouets",
    s: "Dans l’usine à jouets, les engrenages tournent et les jouets défilent sur le tapis roulant. Zeni remet chaque jouet et chaque outil à sa place.",
    c: ["#9aa0a8", "#9aa0a8", "#a8aeb6", "#9aa0a8"],
    w: (e) => {
      (dBricks(e, "L", "#b9574a", "#8a3a32", 0, e.Hh, 0.42, 0.9),
        dPanels(e, "R", "#c9ced6"),
        dEdges(e, "#b9574a", "#c9ced6"),
        dGear(e, "L", 3.4, 3.4, 0.75, "#e2b84a"),
        dGear(e, "L", 4.6, 4.2, 0.5, "#9aa6b8"),
        dGear(e, "L", 5.4, 3.1, 0.42, "#e8667a"),
        [3.7, 4.3].forEach((t) => e.ln(dPt(e, "R", 0, t), dPt(e, "R", e.W, t), "#7b889c", 4)),
        e.ln(dPt(e, "R", 5.9, 0), dPt(e, "R", 5.9, 4.3), "#7b889c", 4));
      const t = dPt(e, "R", 5.9, 2.6);
      ((e.s += `<circle cx="${t[0].toFixed(1)}" cy="${t[1].toFixed(1)}" r="6" fill="#f4efe6" stroke="#5c6376" stroke-width="1.6"/><line x1="${t[0].toFixed(1)}" y1="${t[1].toFixed(1)}" x2="${(t[0] + 3).toFixed(1)}" y2="${(t[1] - 4).toFixed(1)}" stroke="#e8445a" stroke-width="1.4"/>`),
        dTxt(e, "R", 2.6, 4.9, "ATELIER DES JOUETS", 8, "#e8445a"));
      const { P: a, W: s, D: n } = e;
      for (let t = 0; t < 14; t++)
        e.pg(
          [
            a(0.2 + 0.45 * t, n - 0.5),
            a(0.42 + 0.45 * t, n - 0.5),
            a(0.62 + 0.45 * t, n - 0.2),
            a(0.4 + 0.45 * t, n - 0.2),
          ],
          t % 2 ? "#3a3d48" : "#f2c24a",
        );
    },
    b: (e) => {
      (dRug(e, 2, 2.4, 3, 2.6, "#5fa9e0"), dDeskO(e, 0.3, 0, 3.1, 1.3, "#b98a5a"));
      const t = e.box(3.6, 0, 0, 3.3, 1, 1.2, "#5c6376", { t: "#3a3d48" });
      for (let t = 3.8; t < 6.9; t += 0.35) e.ln(e.P(t, 1, 1.2), e.P(t, 1, 1), "#9aa6b8", 1.4);
      (e.zone("shelf", t.top, t.hull),
        e.box(6, 0.2, 1.2, 0.45, 0.45, 0.4, "#e8667a"),
        e.box(4, 0.3, 1.2, 0.4, 0.4, 0.35, "#7fc48a"),
        dShelf(e, 0, 1, 1.1, 2, 3.6, "#e8946c", "R"),
        dChairOf(e, 1.3, 1.6, "#e8667a"),
        dToyBox(e, 0, 5.2, 1.6, 1.2, "#5fa9e0"));
    },
    items: ["wrench", "paint", "spool", "robot", "train", "blocks", "ball", "horse", "duck", "rattle"],
  },
  {
    n: "L’atelier d’emballage",
    s: "Des montagnes de paquets, des rubans de toutes les couleurs : c’est l’atelier d’emballage. Zeni y range le papier, les ciseaux et les étiquettes.",
    c: ["#f4e2ea", "#f4e2ea", "#d9b08a", "#cfa680"],
    w: (e) => {
      (dStripes(e, "L", "#f4ece0", "#e8667a", 0.32, "#e2b84a"),
        dStripes(e, "R", "#3f9a62", "#36885a", 0.5),
        dDots(e, "R", ["#ffd978", "#fff"], 0.3, e.Hh - 0.3, 40, 5),
        dEdges(e, "#e8667a", "#3f9a62"),
        e.ln(dPt(e, "R", 0.6, 4.3), dPt(e, "R", 4.6, 4.3), "#8a6a4a", 2),
        ["#e8445a", "#5fa9e0", "#ffd978", "#b48ae8", "#fff", "#7fc48a", "#f08aa8"].forEach((t, a) => {
          const s = dPt(e, "R", 0.9 + 0.55 * a, 4.3);
          e.s += `<circle cx="${s[0].toFixed(1)}" cy="${s[1].toFixed(1)}" r="6.4" fill="${t}" stroke="${dSh(t, 0.75)}"/><path d="M${s[0].toFixed(1)} ${(s[1] + 5).toFixed(1)}q2 10-2 18" stroke="${t}" stroke-width="2.2" fill="none"/>`;
        }),
        dScape(e, "L", 2, 3.6, 2.6, 4.3, { stars: 16, houses: 1, fr: "#f4ece0", fw: 5, mul: 1, seed: 31 }),
        dTxt(e, "L", 5, 4.6, "Emballage", 10, "#3f9a62"),
        dFlPl(e, "#d9b08a"),
        dFlSnow(e, 9));
    },
    b: (e) => {
      (dDeskO(e, 1.3, 0, 2.4, 1.3, "#c58a54"),
        dShelf(e, 4, 0, 1.6, 1.1, 3.6, "#a8724a", "L"),
        dChairOf(e, 2, 1.6, "#e8667a"),
        dTable(e, 2.4, 3.2, 2.4, 1.8, 1.7, "#c58a54"),
        dToyBox(e, 0, 5.2, 1.6, 1.2, "#e8667a"),
        dGifts(e, 5.4, 4.6),
        dGifts(e, 5.8, 0.2));
    },
    items: ["ribbon", "bow", "scissors", "tag", "tape", "pens", "paperroll", "gift", "gift2", "stocking"],
  },
  {
    n: "L’écurie des rennes",
    s: "À l’écurie, les rennes se reposent avant la grande nuit. Zeni leur apporte des carottes et range tout le matériel.",
    c: ["#8a5a36", "#8a5a36", "#c9a86a", "#bf9e60"],
    w: (e) => {
      (dPlanks(e, "L", "#9a6a3e"),
        dPlanks(e, "R", "#a8763f"),
        dEdges(e, "#9a6a3e", "#a8763f"),
        [
          ["L", e.D],
          ["R", e.W],
        ].forEach(([t, a]) => {
          e.pg(
            dPl(e, t, [
              [0, 4.2],
              [a, 4.2],
              [a, 4.55],
              [0, 4.55],
            ]),
            "#6a4024",
          );
          for (let s = 0.8; s < a; s += 2.2)
            e.pg(
              dPl(e, t, [
                [s, 0],
                [s + 0.3, 0],
                [s + 0.3, 4.2],
                [s, 4.2],
              ]),
              "#7a4a2a",
            );
        }),
        dScape(e, "R", 2.6, 4.2, 2.8, 3.9, {
          stars: 16,
          moon: 1,
          pines: 5,
          fr: "#6a4024",
          fw: 5,
          mul: 1,
          seed: 41,
        }));
      const { P: t, W: a, D: s } = e,
        n = dXr(19);
      for (let o = 0; o < 70; o++) {
        const o = n() * a,
          i = n() * s,
          r = t(o, i),
          l = t(o + 0.25, i + 0.3 * (n() - 0.5));
        e.ln(r, l, n() < 0.5 ? "#e6c76a" : "#d9b45a", 1);
      }
    },
    b: (e) => {
      (dDeer(e, 0.7, 1.6, 1),
        dDeer(e, 0.7, 4, 0.95),
        [
          [1.6, 0.2],
          [1.6, 2.7],
          [1.6, 5.2],
        ].forEach(([t, a]) => {
          (e.box(t, a, 0, 0.18, 1.6, 1.3, "#7a4a2a", { t: "#8a5a36" }),
            e.ln(e.P(t + 0.18, a, 0.5), e.P(t + 0.18, a + 1.6, 0.5), "#6a4024", 2));
        }),
        dHooks(e, "R", 4.7, 6.7, 3.4, "#6a4024"),
        dTrough(e, 4.6, 0, 2.2, 1),
        dChest(e, 5.4, 4, 1.3, 1.3, "#7a4a2a"),
        e.box(5.6, 5.6, 0, 1.3, 1.2, 0.9, "#e6c76a", { t: "#f2d98a" }));
    },
    items: ["carrot", "apple", "hay", "fork", "jingle", "lantern", "brush", "mittens", "hat", "scarf"],
  },
  {
    n: "Le traîneau du Père Noël",
    s: "Le grand soir est arrivé ! Dehors, sous les étoiles, les rennes attendent. Zeni charge le traîneau : l’ourson pour sa fille, le petit train pour son fils et l’écharpe brodée pour sa compagne.",
    c: ["#1a2050", "#1a2050", "#f2f7fc", "#e8f0f8"],
    w: (e) => {
      ([
        ["L", e.D],
        ["R", e.W],
      ].forEach(([t, a]) => {
        dScape(e, t, 0, a, 0, e.Hh, {
          stars: 60,
          moon: "R" === t,
          mt: "#2a3a6a",
          houses: "L" === t,
          pines: 8,
          pc: "#14304a",
          sky: ["#0a0e30", "#3a3a8a"],
          fr: "#0a0e30",
          fw: 0.1,
          seed: "L" === t ? 51 : 53,
        });
        for (let s = 0.3; s < a; s += 0.9)
          e.pg(
            dPl(e, t, [
              [s, 0],
              [s + 0.18, 0],
              [s + 0.18, 1.2],
              [s + 0.09, 1.35],
              [s, 1.2],
            ]),
            "#8a5a36",
          );
        [0.45, 0.95].forEach((s) =>
          e.pg(
            dPl(e, t, [
              [0, s],
              [a, s],
              [a, s + 0.14],
              [0, s + 0.14],
            ]),
            "#a8723a",
          ),
        );
      }),
        e.ln(e.P(0, 0, 0), e.P(0, 0, e.Hh), "#0a0e30", 1),
        e.pg(
          dPl(e, "L", [
            [0.8, 1.7],
            [3.8, 1.7],
            [3.8, 3.9],
            [0.8, 3.9],
          ]),
          "#8a5a36",
          "#6a4024",
          1.4,
        ));
      for (let t = 1.1; t < 3.8; t += 0.35) e.ln(dPt(e, "L", t, 1.7), dPt(e, "L", t, 3.9), "#7a4a2a", 1);
      dFlSnow(e, 11);
    },
    b: (e) => {
      (dHooks(e, "L", 1, 3.6, 3.4, "#6a4024"),
        dRug(e, 1.8, 1.8, 4.2, 3.4, "#dfeefa"),
        dSleigh(e, 1.9, 2.4, 3, 1.8),
        dDeer(e, 5.6, 2.9, 0.9, 1),
        dDeer(e, 6.4, 3.9, 0.9, 1));
      const t = e.box(0, 4.6, 0, 1.5, 1.5, 1.6, "#b98a5a", { t: "#c99a68" });
      (e.ln(e.P(0, 6.1, 0.8), e.P(1.5, 6.1, 0.8), "#8a5a36", 1.6),
        e.ln(e.P(1.5, 4.6, 0.8), e.P(1.5, 6.1, 0.8), "#8a5a36", 1.6),
        e.zone("table", t.top, t.hull),
        dPine(e, 6.3, 0.6, 1.1));
    },
    items: ["sack", "bear", "ttrain", "escarf", "bell", "lantern", "map", "pstar", "wreath", "gift"],
  },
];
DXR.forEach((e) => {
  ((e.W = e.W || 7), (e.D = e.D || 7), (e.Hh = e.Hh || 5.2));
});
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
    j.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        const t = Y(e);
        t && le(e.deltaY < 0 ? 1.15 : 1 / 1.15, t[0], t[1]);
      },
      { passive: !1 },
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
  let he = 0;
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
      (document.removeEventListener("pointermove", pe),
        document.removeEventListener("pointerup", me),
        document.removeEventListener("pointercancel", be));
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
      (document.removeEventListener("pointermove", pe),
        document.removeEventListener("pointerup", me),
        document.removeEventListener("pointercancel", be),
        (ce = null),
        ue(),
        (J = []),
        _());
    };
  (j.addEventListener("pointerdown", (e) => {
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
        document.addEventListener("pointermove", pe),
        document.addEventListener("pointerup", me),
        void document.addEventListener("pointercancel", be)
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
  }),
    j.addEventListener("pointermove", (e) => {
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
    }));
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
  (j.addEventListener("pointerup", ge),
    j.addEventListener("pointercancel", ge),
    j.addEventListener("contextmenu", (e) => e.preventDefault()),
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
const sv = keep;
const chip = () => {
  const e = $(".chip");
  e && (e.textContent = "🫧 " + FLX());
};
const nk = (e) =>
  e
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
const GW = new Set(L.flat().concat(LB.split(" ")).map(nk));
const fits = (e, t) => {
  const a = [...t];
  for (const t of e) {
    const e = a.indexOf(t);
    if (e < 0) return !1;
    a.splice(e, 1);
  }
  return !0;
};
const rng = (e) => {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), 1 | e)),
      (e ^= e + Math.imul(e ^ (e >>> 7), 61 | e)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
};