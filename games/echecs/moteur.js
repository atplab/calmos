// Échecs : moteur, IA, sauvegarde et parties en ligne (CHN…chRefresh)
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
