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
