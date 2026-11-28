(function () {
  "use strict";
  const J = JSON.stringify,
    PE = ["🤿", "🐠", "🦀", "🐙", "🐢", "🦈"],
    A31 = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  const GN = {
    carcache: "Carcaché",
    chess: "Échecs",
    scrabble: "Motuiles",
    draughts: "Dames",
    hoho: "Hoho",
    airhockey: "Air hockey",
    galac: "Galacfish",
    billard: "Billard",
  };
  const RMX = {
    carcache: 6,
    draughts: 2,
    chess: 2,
    scrabble: 2,
    hoho: 2,
    airhockey: 2,
    galac: 2,
    billard: 2,
  };
  const CCE = ["🐚", "🦐", "🐠", "🐡", "🦀", "🐙", "🦑", "🐢", "🦈", "🐬", "🐳", "🐋", "🦞"];
  const CCL = [
    ["Récif", "🦐", 3, [["Crevette", "🦐", 0]], 8],
    ["Anémone", "🐠", 3, [["Poisson-clown", "🐠", 1]], 10],
    ["Lagon", "🐢", 5, [["Tortue", "🐢", 1]], 14],
    [
      "Algues",
      "🦑",
      5,
      [
        ["Calamar", "🦑", 1],
        ["Crevette", "🦐", 0],
      ],
      18,
    ],
    ["Grotte", "🐙", 5, [["Poulpe", "🐙", 2]], 22],
    ["Épave", "🦈", 9, [["Requin", "🦈", 2]], 30],
    [
      "Fosse",
      "🐡",
      9,
      [
        ["Poisson-lune", "🐡", 2],
        ["Calamar", "🦑", 2],
        ["Requin", "🦈", 1],
      ],
      40,
    ],
    ["Abysses", "🐋", 9, [["Baleine", "🐋", 3]], 60],
  ];
  const LVN = ["Débutant", "Moyen", "Fort", "Expert"];
  const AVS = ["🤿", "🐠", "🦀", "🐙", "🐢", "🦈", "🐬", "🦑", "🐡", "🦞"],
    myAv = () => st.get("cc:av", "🤿");
  const CCP = [
      ["Requin", "🦈"],
      ["Poulpe", "🐙"],
      ["Baleine", "🐋"],
      ["Calamar", "🦑"],
      ["Poisson-lune", "🐡"],
      ["Tortue", "🐢"],
      ["Homard", "🦞"],
    ],
    CCN = ["Fosse", "Épave", "Banc noir", "Dorsale", "Tempête", "Gouffre", "Récif noir"];
  const ccLvl = (i) => {
    if (i < CCL.length) return CCL[i];
    const k = i - CCL.length,
      n = 1 + (k % 3),
      o = [];
    for (let j = 0; j < n; j++) {
      const q = CCP[(k + j * 2) % 7];
      o.push([q[0], q[1], k >= 8 ? 4 : 3]);
    }
    return [CCN[k % 7] + " " + (Math.floor(k / 7) + 2), CCP[k % 7][1], 9, o, 60 + 5 * Math.min(k, 40)];
  };
  const RM = {
    env: null,
    r: null,
    code: "",
    unsub: null,
    hb: null,
    cd: null,
    scr: "",
    gOpen: "",
    tries: 0,
    go: 0,
  };
  const CC = {
    S: null,
    me: 0,
    on: null,
    meta: null,
    pv: null,
    tm: null,
    mt: null,
    mo: 0,
    paid: 0,
    fm: 0,
    q: 0,
    cfg: { n: 1, lv: 1, H: 3 },
    unsub: null,
  };
  const shuf = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const ex = (d) => (typeof d.exists === "function" ? d.exists() : !!d.exists);
  const rd = (d) => {
    try {
      return ex(d) ? JSON.parse(d.data().j) : null;
    } catch (e) {
      return null;
    }
  };
  const tone = (f, d) => {
    try {
      typeof sfx === "function" && sfx(f, d || 0.1);
    } catch (e) {}
  };
  const vb = (n) => {
    try {
      navigator.vibrate && navigator.vibrate(n);
    } catch (e) {}
  };
  const myName = () => {
    const m = st.get("soc:me", null);
    return String((m && m.name) || "Toi").slice(0, 16);
  };

  /* ───────── Musique ───────── */
  (function () {
    const mk = () => {
      if (typeof bkMu !== "object") return null;
      return Object.assign({}, bkMu, {
        on: !1,
        L: null,
        T: 0,
        s: 0,
        t: 0,
        rep: 0,
        off: 0,
        E: 0.3125,
        pz(e, t, a, s, n) {
          const o = AC,
            i = o.createOscillator(),
            r = o.createGain(),
            l = o.createBiquadFilter();
          i.type = "triangle";
          i.frequency.value = e;
          l.type = "lowpass";
          l.frequency.value = 1100;
          r.gain.setValueAtTime(1e-4, t);
          r.gain.exponentialRampToValueAtTime(s, t + 0.03);
          r.gain.exponentialRampToValueAtTime(1e-4, t + a);
          i.connect(l);
          l.connect(r);
          r.connect(n);
          i.start(t);
          i.stop(t + a + 0.05);
        },
        gl(e, t, a, s, n) {
          const o = AC;
          [
            [1, 1, a + 0.5],
            [2.76, 0.08, 0.3],
          ].forEach(([k, v, d]) => {
            const l = o.createOscillator(),
              c = o.createGain();
            l.type = "sine";
            l.frequency.value = e * k;
            c.gain.setValueAtTime(1e-4, t);
            c.gain.exponentialRampToValueAtTime(s * v, t + 0.012);
            c.gain.exponentialRampToValueAtTime(1e-4, t + d);
            l.connect(c);
            c.connect(n);
            l.start(t);
            l.stop(t + d + 0.05);
          });
        },
        tok() {},
        kk(t, v, d) {
          const o = AC.createOscillator(),
            g = AC.createGain();
          o.type = "sine";
          o.frequency.setValueAtTime(95, t);
          o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
          g.gain.setValueAtTime(1e-4, t);
          g.gain.exponentialRampToValueAtTime(v, t + 0.012);
          g.gain.exponentialRampToValueAtTime(1e-4, t + 0.35);
          o.connect(g);
          g.connect(d);
          o.start(t);
          o.stop(t + 0.4);
        },
        build() {
          const A = typeof AC !== "undefined" ? AC : null;
          if (!A || typeof mg === "undefined" || !mg || this.L) return;
          const out = A.createGain();
          out.gain.value = 0;
          const lp = A.createBiquadFilter();
          lp.type = "lowpass";
          lp.frequency.value = 4500;
          lp.connect(out);
          out.connect(mg);
          const bus = A.createGain();
          bus.connect(lp);
          [
            [0.043, 0.16],
            [0.071, 0.12],
            [0.097, 0.09],
          ].forEach(([dt, g]) => {
            const d = A.createDelay(0.2),
              f = A.createBiquadFilter(),
              w = A.createGain();
            d.delayTime.value = dt;
            f.type = "lowpass";
            f.frequency.value = 1600;
            w.gain.value = g;
            bus.connect(d);
            d.connect(f);
            f.connect(w);
            w.connect(lp);
          });
          const dry = A.createGain();
          dry.connect(lp);
          const SR = A.sampleRate,
            N = SR * 5,
            M = SR,
            raw = new Float32Array(N + M);
          let l = 0;
          for (let i = 0; i < raw.length; i++) {
            l = (l + 0.02 * (Math.random() * 2 - 1)) / 1.02;
            raw[i] = l * 3.5;
          }
          const nb = A.createBuffer(1, N, SR),
            c = nb.getChannelData(0);
          for (let i = 0; i < N; i++) c[i] = raw[i];
          for (let i = 0; i < M; i++) {
            const w = i / M;
            c[i] = raw[i] * w + raw[N + i] * (1 - w);
          }
          const ns = A.createBufferSource();
          ns.buffer = nb;
          ns.loop = !0;
          const nl = A.createBiquadFilter();
          nl.type = "lowpass";
          nl.frequency.value = 170;
          nl.Q.value = 0.2;
          const ng = A.createGain();
          ng.gain.value = 0.0144;
          const lf = A.createOscillator(),
            lg = A.createGain();
          lf.frequency.value = 0.07;
          lg.gain.value = 0.0036;
          lf.connect(lg);
          lg.connect(ng.gain);
          ns.connect(nl);
          nl.connect(ng);
          ng.connect(out);
          ns.start();
          lf.start();
          this.L = { out, bus, dry, M: {} };
        },
        hh(t, v, d) {
          const A = AC;
          if (!this.NB) {
            const n = A.createBuffer(1, A.sampleRate * 0.3, A.sampleRate),
              c = n.getChannelData(0);
            for (let k = 0; k < c.length; k++) c[k] = Math.random() * 2 - 1;
            this.NB = n;
          }
          const o = A.createBufferSource(),
            f = A.createBiquadFilter(),
            g = A.createGain();
          o.buffer = this.NB;
          f.type = "highpass";
          f.frequency.value = 7000;
          g.gain.setValueAtTime(1e-4, t);
          g.gain.linearRampToValueAtTime(v, t + 0.006);
          g.gain.exponentialRampToValueAtTime(1e-4, t + 0.07);
          o.connect(f);
          f.connect(g);
          g.connect(d);
          o.start(t);
          o.stop(t + 0.1);
        },
        ep(fq, t, d, v, dst) {
          const A = AC,
            f = A.createBiquadFilter(),
            g = A.createGain();
          f.type = "lowpass";
          f.frequency.value = 1700;
          g.gain.setValueAtTime(1e-4, t);
          g.gain.linearRampToValueAtTime(v, t + 0.018);
          g.gain.exponentialRampToValueAtTime(v * 0.45, t + 0.25);
          g.gain.exponentialRampToValueAtTime(1e-4, t + d);
          [
            ["sine", 1, 1],
            ["sine", 2, 0.12],
          ].forEach(([ty, m, a]) => {
            const o = A.createOscillator(),
              og = A.createGain();
            o.type = ty;
            o.frequency.value = fq * m;
            og.gain.value = a;
            o.connect(og);
            og.connect(f);
            o.start(t);
            o.stop(t + d + 0.05);
          });
          f.connect(g);
          g.connect(dst);
        },
        CD: {
          F: [41, [57, 60, 64]],
          Dm: [38, [57, 60, 65]],
          Gm: [43, [58, 62, 65]],
          C7: [36, [58, 64, 67]],
          Bb: [46, [57, 62, 65]],
          Am: [45, [55, 60, 64]],
        },
        SQ: ["F", "Dm", "Gm", "C7", "F", "Dm", "Gm", "C7", "Bb", "Am", "Gm", "C7", "F", "Dm", "Gm", "C7"],
        MB: {
          a1: [
            [0, 72, 2],
            [2, 69, 1],
            [3, 72, 1],
            [4, 76, 3],
          ],
          a2: [
            [0, 74, 2],
            [2, 72, 1],
            [4, 69, 3],
            [7, 72, 1],
          ],
          a3: [
            [0, 70, 2],
            [2, 74, 1],
            [3, 77, 2],
            [6, 74, 2],
          ],
          a4: [
            [0, 76, 3],
            [4, 72, 2],
            [6, 70, 2],
          ],
          a5: [
            [0, 76, 2],
            [2, 79, 2],
            [4, 77, 2],
            [6, 76, 2],
          ],
          b1: [
            [0, 77, 3],
            [4, 74, 2],
            [6, 72, 2],
          ],
          b2: [
            [0, 76, 3],
            [4, 72, 1],
            [5, 74, 1],
            [6, 76, 2],
          ],
          b3: [
            [0, 74, 2],
            [2, 70, 2],
            [4, 74, 2],
            [6, 77, 2],
          ],
          b4: [
            [0, 76, 4],
            [4, 79, 2],
            [6, 76, 2],
          ],
          a6: [
            [0, 72, 4],
            [4, 76, 2],
            [6, 72, 2],
          ],
        },
        MO: ["a1", "a2", "a3", "a4", "a1", "a2", "a3", "a5", "b1", "b2", "b3", "b4", "a1", "a2", "a3", "a6"],
        tick() {
          const e = this.L,
            A = typeof AC !== "undefined" ? AC : null;
          if (!e || !A) return;
          for (this.t < A.currentTime && (this.t = A.currentTime + 0.12); this.t < A.currentTime + 0.5;) {
            const p = this.s,
              bar = p >> 3,
              k = p & 7,
              E = this.E,
              [r, v] = this.CD[this.SQ[bar]],
              intro = this.rep === 0 && bar < 4,
              T = Math.max(
                A.currentTime + 0.01,
                this.t + (k % 2 ? E * 0.33 : 0) + 0.005 * (Math.random() - 0.5),
              ),
              h = () => 0.9 + 0.2 * Math.random();
            if (k === 0) {
              v.forEach((n, j) => this.ep(this.mf(n), T + 0.014 * j, 3.2 * E, 0.045 * h(), e.bus));
              this.pz(this.mf(r), T, 3.5 * E, 0.22 * h(), e.dry);
              intro || this.kk(T, 0.09, e.dry);
            } else if (k === 5 && bar % 2) {
              v.forEach((n, j) => this.ep(this.mf(n), T + 0.01 * j, 2.2 * E, 0.026 * h(), e.bus));
            } else if (k === 4) {
              this.pz(this.mf(r + 7), T, 2.5 * E, 0.16 * h(), e.dry);
              intro || this.kk(T, 0.05, e.dry);
            }

            k % 2 === 0 && k !== 0
              ? this.hh(T, (k === 2 || k === 6 ? 0.035 : 0.02) * h(), e.dry)
              : k % 2 && !intro && this.hh(T, 0.012 * h(), e.dry);
            if (!intro) {
              const m = this.MB[this.MO[bar]].find((x) => x[0] === k);
              m && this.gl(this.mf(m[1]), T + 0.01, m[2] * E * 1.1, 0.055 * h(), e.bus);
            }
            this.t += E;
            this.s = (p + 1) % 128;
            0 === this.s && this.rep++;
          }
        },
        CH: [
          [38, [62, 66, 69, 73]],
          [43, [62, 66, 67, 71]],
          [47, [62, 66, 69, 71]],
          [45, [61, 64, 66, 71]],
          [38, [62, 66, 69, 73]],
          [43, [62, 66, 71, 74]],
          [40, [64, 67, 71, 74]],
          [45, [61, 64, 69, 73]],
        ],
        PH: [
          [
            [0, 78, 3],
            [4, 81, 2],
            [6, 85, 2],
            [8, 83, 3],
            [12, 81, 3],
          ],
          [
            [0, 83, 2],
            [2, 81, 2],
            [4, 78, 3],
            [8, 74, 2],
            [10, 78, 2],
            [12, 81, 3],
          ],
          [
            [0, 81, 3],
            [4, 78, 2],
            [6, 74, 2],
            [8, 76, 4],
            [14, 78, 2],
          ],
          [
            [0, 73, 2],
            [2, 76, 2],
            [4, 81, 3],
            [8, 85, 2],
            [10, 83, 2],
            [12, 81, 3],
          ],
          [
            [0, 85, 3],
            [4, 83, 2],
            [6, 81, 2],
            [8, 78, 3],
            [12, 81, 3],
          ],
          [
            [0, 86, 2],
            [2, 83, 2],
            [4, 81, 3],
            [8, 78, 2],
            [10, 74, 2],
            [12, 78, 3],
          ],
          [
            [0, 79, 3],
            [4, 83, 2],
            [6, 86, 2],
            [8, 83, 4],
            [14, 79, 2],
          ],
          [
            [0, 85, 2],
            [2, 81, 2],
            [4, 78, 3],
            [8, 81, 3],
            [12, 73, 4],
          ],
        ],
      });
    };
    window.ccMus = (e) => {
      if (typeof ccMu === "undefined" || !ccMu) {
        const m = mk();
        if (!m) return;
        window.ccMu = m;
      }
      ccMu.set(e);
    };
  })();

  /* ───────── Moteur ───────── */
  function ccDeck() {
    const d = [];
    for (let v = 0; v <= 12; v++) for (let k = 0; k < 8; k++) d.push(v);
    for (let k = 0; k < 4; k++) d.push(-5);
    return shuf(d);
  }
  function ccDeal(S) {
    S.deck = ccDeck();
    S.hands = [];
    for (let p = 0; p < S.n; p++) {
      const h = [];
      for (let i = 0; i < 8; i++) h.push({ v: S.deck.pop(), u: 0 });
      shuf([0, 1, 2, 3, 4, 5, 6, 7])
        .slice(0, 2)
        .forEach((i) => (h[i].u = 1));
      S.hands.push(h);
    }
    S.disc = [S.deck.pop()];
    S.turn = (S.hole - 1) % S.n;
    S.ph = "d";
    S.dr = null;
    S.end = -1;
    S.left = 0;
    S.st = "play";
  }
  function ccAvH(p) {
    try {
      const u = p && p.u;
      if (u && typeof socAv === "function" && (u === SO.uid || (SO.P && SO.P[u]))) return socAv(u);
    } catch (x) {}
    return esc((p && p.e) || "");
  }
  function ccNew(pl, H) {
    const S = {
      n: pl.length,
      pl: pl.map((p) => ({ n: p.n, e: p.e, u: p.u || "" })),
      bot: pl.map((p) => (p.lv == null ? -1 : p.lv)),
      H,
      hole: 1,
      tot: pl.map(() => 0),
      hist: [],
      seq: 1,
      gid: Date.now(),
    };
    ccDeal(S);
    return S;
  }
  function ccAcc(S) {
    const C = CC.S;
    if (!C) return !0;
    const a = S.gid || 0,
      b = C.gid || 0;
    if (a !== b) {
      if (a < b) return !1;
      CC.paid = 0;
      CC.gain = 0;
      CC.endT = 0;
      CC.mo = 0;
      return !0;
    }
    return S.seq > C.seq || S.hole > C.hole || (S.st !== C.st && S.st === "play" && S.hole >= C.hole);
  }
  function ccSc(h, all) {
    let t = 0;
    for (let c = 0; c < 4; c++) {
      const a = h[c],
        b = h[c + 4];
      if (a.u && b.u && a.v === b.v) continue;
      if (a.u || all) t += a.v;
      if (b.u || all) t += b.v;
    }
    return t;
  }
  function ccEst(h) {
    let t = 0;
    for (let c = 0; c < 4; c++) {
      const a = h[c],
        b = h[c + 4];
      if (a.u && b.u && a.v === b.v) continue;
      t += (a.u ? a.v : 6) + (b.u ? b.v : 6);
    }
    return t;
  }
  function ccTake(S, f) {
    if (f === "t") {
      S.dr = { v: S.disc.pop(), f: "t" };
    } else {
      if (!S.deck.length) {
        const top = S.disc.pop();
        S.deck = shuf(S.disc);
        S.disc = [top];
      }
      S.dr = { v: S.deck.pop(), f: "d" };
    }
    S.ph = "p";
  }
  function ccEnd(S) {
    const h = S.hands[S.turn];
    if (S.end < 0) {
      if (h.every((c) => c.u)) {
        S.end = S.turn;
        S.left = S.n - 1;
      }
    } else S.left--;
    if (S.end >= 0 && S.left <= 0) return ccFin(S);
    S.turn = (S.turn + 1) % S.n;
    S.ph = "d";
    S.dr = null;
  }
  function ccFin(S) {
    S.hands.forEach((h) => h.forEach((c) => (c.u = 1)));
    const sc = S.hands.map((h) => ccSc(h, 1));
    S.hist.push(sc);
    sc.forEach((x, i) => (S.tot[i] += x));
    S.st = S.hole >= S.H ? "end" : "hole";
    S.dr = null;
  }
  function ccPlace(S, i) {
    const h = S.hands[S.turn],
      o = h[i];
    S.disc.push(o.v);
    h[i] = { v: S.dr.v, u: 1 };
    S.dr = null;
    ccEnd(S);
  }
  function ccFlip(S, i) {
    const h = S.hands[S.turn];
    S.disc.push(S.dr.v);
    h[i].u = 1;
    S.dr = null;
    ccEnd(S);
  }
  function ccNextHole(S) {
    S.hole++;
    ccDeal(S);
  }
  function ccBest(h, v) {
    let b = { i: 0, d: -99 };
    for (let i = 0; i < 8; i++) {
      const g = h.map((c) => c),
        e0 = ccEst(h);
      g[i] = { v, u: 1 };
      const d = e0 - ccEst(g);
      if (d > b.d) b = { i, d };
    }
    return b;
  }
  function ccAIdraw(S, lv) {
    const h = S.hands[S.turn],
      t = S.disc[S.disc.length - 1];
    if (lv <= 0) return t <= 2 ? "t" : "d";
    const thr = [0, 3, 2, 1.2, 0.6][Math.min(4, lv)];
    return ccBest(h, t).d >= thr ? "t" : "d";
  }
  function ccAIplace(S, lv) {
    const h = S.hands[S.turn],
      v = S.dr.v,
      hid = [];
    h.forEach((c, i) => {
      if (!c.u) hid.push(i);
    });
    if (lv <= 0) {
      if (S.dr.f === "d" && hid.length && (v > 5 || Math.random() < 0.3))
        return { f: 1, i: hid[(Math.random() * hid.length) | 0] };
      return {
        i:
          hid.length && Math.random() < 0.6 ? hid[(Math.random() * hid.length) | 0] : (Math.random() * 8) | 0,
      };
    }
    const b = ccBest(h, v),
      thr = [0, 3, 2, 1.2, 0.6][Math.min(4, lv)];
    if (S.dr.f === "d" && hid.length && b.d < thr) {
      return { f: 1, i: hid[(Math.random() * hid.length) | 0] };
    }
    return { i: b.i };
  }

  /* ───────── Jeu : affichage ───────── */
  const hue = (v) => (v < 0 ? 48 : 190 - v * 13);
  const cardH = (c, cls, a, k) =>
    `<div class="ccc ${c.u ? "up" : ""} ${cls || ""}" ${a || ""} style="--h:${hue(c.v)};--k:${k || 0}"><div class="cci"><div class="ccb2"></div><div class="ccf"><b>${c.v}</b><i>${c.v < 0 ? "🦪" : CCE[c.v]}</i></div></div></div>`;
  function ccBubbles() {
    let s = "";
    for (let i = 0; i < 14; i++)
      s += `<span style="left:${(i * 37 + 11) % 100}%;width:${8 + ((i * 7) % 16)}px;height:${8 + ((i * 7) % 16)}px;animation-duration:${9 + ((i * 3) % 9)}s;animation-delay:-${(i * 2.3) % 12}s"></span>`;
    return `<div class="ccbg" aria-hidden="true">${s}</div>`;
  }
  function ccGrid(S, p, mine, fm) {
    const h = S.hands[p],
      pv = CC.pv,
      newH = !pv || pv.hole !== S.hole,
      tm = mine && S.turn === CC.me && S.st === "play" && S.bot[CC.me] < 0;
    let s = "";
    for (let i = 0; i < 8; i++) {
      const c = h[i],
        key = c.v + ":" + c.u,
        old = pv && !newH && pv.h[p] && pv.h[p][i];
      let cl = "";
      if (newH) cl = "dl";
      else if (old && old !== key) {
        cl = old.split(":")[0] === String(c.v) && c.u ? "fl" : "dp";
      }
      const col = i % 4,
        o = h[(i + 4) % 8];
      if (c.u && o.u && o.v === c.v) cl += " pr";
      let a = "";
      if (mine && tm && S.ph === "p") {
        if (fm) {
          if (!c.u) {
            a = `data-a="ccP" data-v="${i}"`;
            cl += " can";
          }
        } else {
          a = `data-a="ccP" data-v="${i}"`;
          cl += " can";
        }
      }
      s += cardH(c, cl, a, i);
    }
    return s;
  }
  function ccSnap(S) {
    return {
      hole: S.hole,
      h: S.hands.map((h) => h.map((c) => c.v + ":" + c.u)),
      dt: S.disc.length + ":" + S.disc[S.disc.length - 1],
      dr: S.dr ? S.dr.v : null,
    };
  }
  function ccDraw() {
    const S = CC.S;
    if (!S) return "";
    const me = CC.me,
      pv = CC.pv,
      tm = S.turn === me && S.st === "play" && S.bot[me] < 0;
    const opp = [];
    for (let p = 0; p < S.n; p++) if (p !== me) opp.push(p);
    const oh = opp
      .map(
        (p) =>
          `<div class="ccop ${S.turn === p && S.st === "play" ? "on" : ""} ${S.bot[p] >= 0 && CC.on ? "bt" : ""}"><div class="cch"><i>${ccAvH(S.pl[p])}</i><b>${esc(S.pl[p].n)}</b><em>${S.tot[p]} · ${ccSc(S.hands[p], 0)}</em></div><div class="ccg4 mini">${ccGrid(S, p, 0)}</div></div>`,
      )
      .join("");
    const top = S.disc[S.disc.length - 1],
      dt = S.disc.length + ":" + top,
      topCl = pv && pv.hole === S.hole && pv.dt !== dt ? "dp" : "";
    let msg;
    if (S.st !== "play") msg = S.st === "end" ? "Fin de la partie" : "Manche terminée !";
    else if (tm)
      msg =
        S.ph === "d"
          ? "À toi ! Pioche, ou prends la défausse."
          : CC.fm
            ? "Touche une carte cachée pour la retourner."
            : "Touche la carte à remplacer.";
    else
      msg = `${ccAvH(S.pl[S.turn])} ${esc(S.pl[S.turn].n)} ${S.ph === "d" ? "réfléchit…" : "place sa carte…"}`;
    if (S.end >= 0 && S.st === "play")
      msg = "🔔 " + esc(S.pl[S.end].n) + " a tout retourné ! Dernier tour. " + msg;
    const canD = tm && S.ph === "d",
      hid = S.hands[me].some((c) => !c.u);
    const drw = S.dr
      ? cardH({ v: S.dr.v, u: 1 }, pv && pv.dr !== S.dr.v ? "fy" : "", "", 0)
      : `<div class="ccem">${tm && S.ph === "d" ? "↑" : ""}</div>`;
    const deckC = `<div class="ccc"><div class="cci"><div class="ccb2"></div></div></div>`;
    const act1 =
      tm && S.ph === "p" && S.dr.f === "d" && hid
        ? `<button class="ccgh ${CC.fm ? "on" : ""}" data-a="ccFm">${CC.fm ? "↩ Remplacer plutôt" : "↺ Défausser et retourner une carte"}</button>`
        : "";
    const hdr = `<div class="vztp"><button class="back" data-a="ccQuit">${CC.q ? "Vraiment quitter ?" : "‹ Quitter"}</button><div class="cchd">Manche <b>${S.hole}</b>/${S.H}</div></div>`;
    const html = `<div class="vzf game">${hdr}<div class="ccs"><div class="ccops n${Math.min(opp.length, 3)}">${oh}</div>
<div class="ccmid"><div class="ccpw"><div class="ccpile ${canD ? "can" : ""}" ${canD ? 'data-a="ccD"' : ""}>${deckC}<span>${S.deck.length}</span></div><small>Pioche</small></div>
<div class="ccdrw">${drw}</div>
<div class="ccpw"><div class="ccpile ${tm && S.ph === "d" ? "can" : ""}" ${tm && S.ph === "d" ? 'data-a="ccT"' : ""}>${top === undefined ? '<div class="ccem" style="width:var(--cw);aspect-ratio:3/4"></div>' : cardH({ v: top, u: 1 }, topCl, "", 0)}</div><small>Défausse</small></div></div>
<p class="ccmsg" role="status">${msg}</p><div class="ccact">${act1}</div>
<div class="ccme ${tm ? "on" : ""}"><div class="cch"><i>${ccAvH(S.pl[me])}</i><b>${esc(S.pl[me].n)}</b><em>Total ${S.tot[me]} · cette manche ${ccSc(S.hands[me], 0)}</em></div><div class="ccg4">${ccGrid(S, me, 1, CC.fm)}</div></div></div></div>${CC.mo ? ccOv() : ""}`;
    CC.pv = ccSnap(S);
    return html;
  }
  function ccOv() {
    const S = CC.S,
      end = S.st === "end",
      hostOk = !CC.on || CC.on.host,
      best = Math.min(...S.tot);
    if (!CC.endT) CC.endT = Date.now();
    const gst = () => {
      const wl = 15e3 - (Date.now() - CC.endT);
      if (wl > 0) {
        if (!CC.eT)
          CC.eT = setTimeout(() => {
            CC.eT = null;
            CC.S && CC.S.st !== "play" && ccShow();
          }, wl + 60);
        return "";
      }
      return (
        (RM.bk ? `<button class="btn alt" data-a="rmBack">↩ Retour au salon</button>` : "") +
        `<button class="btn alt" data-a="rmHome">⌂ Accueil</button>`
      );
    };
    const head = `<tr><th></th>${S.pl.map((p) => `<th>${ccAvH(p)}</th>`).join("")}</tr>`;
    const rows = S.hist
      .map((r, i) => `<tr><td>${i + 1}</td>${r.map((x) => `<td>${x}</td>`).join("")}</tr>`)
      .join("");
    const tot = `<tr class="tt"><td>Σ</td>${S.tot.map((x) => `<td class="${x === best && end ? "win" : ""}">${x}</td>`).join("")}</tr>`;
    let btn = "",
      t = end ? "Fin de la partie" : "Manche " + S.hole + " terminée";
    if (end) {
      ccPay();
      if (!CC.endT) CC.endT = Date.now();
      const w = S.tot[CC.me] === best;
      t = w ? "🏆 Victoire !" : "Partie terminée";
      const win = S.pl
        .filter((p, i) => S.tot[i] === best)
        .map((p) => ccAvH(p) + " " + esc(p.n))
        .join(", ");
      const M = CC.meta;
      btn = `<p class="note">${w ? "Bravo ! " : ""}Vainqueur${S.tot.filter((x) => x === best).length > 1 ? "s" : ""} : ${win}.${CC.gain ? ` <b>+${CC.gain} 🫧</b>` : ""}</p>`;
      if (M && M.lv != null && w)
        btn += `<button class="btn" data-a="ccLv" data-v="${M.lv + 1}">Niveau suivant ›</button>`;
      if (!CC.on) btn += `<button class="btn alt" data-a="ccAgain">Rejouer</button>`;
      if (CC.on) {
        if (hostOk) {
          btn +=
            `<button class="btn" data-a="ccRe">↻ Rejouer</button>` +
            (RM.bk ? `<button class="btn alt" data-a="rmBack">↩ Retour au salon</button>` : "") +
            `<button class="btn alt" data-a="rmHome">⌂ Accueil</button>`;
        } else {
          btn += `<p class="note">L’hôte choisit la suite…</p>` + gst();
        }
      } else btn += `<button class="btn alt" data-a="ccHub">Menu du jeu</button>`;
    } else
      btn = hostOk
        ? `<button class="btn" data-a="ccNh">Manche suivante ›</button>`
        : `<p class="note">L’hôte lance la manche suivante…</p>` + gst();
    return `<div class="ccov"><div class="glass ccbox"><h2>${t}</h2><table class="cctb">${head}${rows}${tot}</table>${btn}</div></div>`;
  }
  function ccSn(k, t0) {
    try {
      if (typeof AC === "undefined" || !AC || !mg || !prefs().sfx) return;
      if (typeof unCs === "function" && k !== "win" && k !== "hole") {
        const m = {
          deal: ["deal"],
          draw: ["slide"],
          take: ["slide"],
          place: ["slide", "place"],
          flip: ["place"],
        }[k];
        if (m) {
          const w = (t0 || 0) * 1e3;
          unCs(m[0], w);
          m[1] && unCs(m[1], w + 70);
          return;
        }
      }
      const t = AC.currentTime + (t0 || 0) + 0.005,
        nb = AC.createBuffer(1, AC.sampleRate * 0.25, AC.sampleRate),
        d = nb.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const N = (ty, f, q, dur, v, sw) => {
        const o = AC.createBufferSource(),
          fl = AC.createBiquadFilter(),
          g = AC.createGain();
        o.buffer = nb;
        fl.type = ty;
        fl.Q.value = q;
        fl.frequency.setValueAtTime(f, t);
        sw && fl.frequency.exponentialRampToValueAtTime(sw, t + dur);
        g.gain.setValueAtTime(1e-4, t);
        g.gain.linearRampToValueAtTime(v, t + Math.min(0.02, dur / 3));
        g.gain.exponentialRampToValueAtTime(1e-4, t + dur);
        o.connect(fl);
        fl.connect(g);
        g.connect(mg);
        o.start(t);
        o.stop(t + dur + 0.02);
      };
      const T = (f, dur, v) => {
        const o = AC.createOscillator(),
          g = AC.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(f, t);
        o.frequency.exponentialRampToValueAtTime(f * 0.6, t + dur);
        g.gain.setValueAtTime(1e-4, t);
        g.gain.linearRampToValueAtTime(v, t + 0.008);
        g.gain.exponentialRampToValueAtTime(1e-4, t + dur);
        o.connect(g);
        g.connect(mg);
        o.start(t);
        o.stop(t + dur + 0.02);
      };
      const B = (f, d, w) => setTimeout(() => tone(f, d), (w || 0) + (t0 || 0) * 1e3);
      if (k === "deal") B(520 + (Math.round((t0 || 0) / 0.06) % 7) * 55, 0.07);
      else if (k === "draw") {
        B(420, 0.09);
        B(630, 0.1, 70);
      } else if (k === "flip") {
        B(660, 0.09);
        B(990, 0.14, 75);
      } else if (k === "place") {
        B(560, 0.08);
        B(380, 0.14, 70);
      } else if (k === "take") {
        B(480, 0.08);
        B(720, 0.1, 70);
      } else if (k === "win") {
        [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => tone(f, 0.4), i * 110));
      } else if (k === "hole") {
        [440, 554, 659].forEach((f, i) => setTimeout(() => tone(f, 0.3), i * 90));
      }
    } catch (e) {}
  }
  function ccSd(a, b) {
    if (!b) return;
    if (!a || a.hole !== b.hole) {
      for (let i = 0; i < 7; i++) ccSn("deal", i * 0.06);
      return;
    }
    if (a.dr == null && b.dr != null) {
      ccSn("draw");
      return;
    }
    if (a.dr != null && b.dr == null) {
      let fl = 0,
        pl = 0;
      b.h.forEach((h, p) =>
        h.forEach((c, i) => {
          const o = a.h[p] && a.h[p][i];
          if (o && o !== c) {
            const [ov, ou] = o.split(":"),
              [nv, nu] = c.split(":");
            nu === "1" && ou === "0" && ov === nv ? fl++ : pl++;
          }
        }),
      );
      pl ? (ccSn("place"), setTimeout(() => ccSn("flip"), 90)) : ccSn("flip");
    }
  }
  function ccRc() {
    const r = (e) => (e ? e.getBoundingClientRect() : null),
      q = (x) => document.querySelector(".vzf.game " + x),
      pl = document.querySelectorAll(".vzf.game .ccpile");
    if (!q(".ccs")) return null;
    return {
      g: [...document.querySelectorAll(".vzf.game .ccg4")].map((c) => [...c.children].map(r)),
      dr: r(q(".ccdrw .ccc")),
      dk: r(pl[0] && pl[0].querySelector(".ccc")),
      ds: r(pl[1] && pl[1].querySelector(".ccc")),
    };
  }
  function ccFly(el, f, dl) {
    if (!el || !f || !el.animate) return;
    const t = el.getBoundingClientRect();
    if (!t.width || !f.width) return;
    const dx = f.left + f.width / 2 - t.left - t.width / 2,
      dy = f.top + f.height / 2 - t.top - t.height / 2,
      sc = f.width / t.width;
    if (Math.abs(dx) + Math.abs(dy) < 4) return;
    el.style.animation = "none";
    el.style.zIndex = 60;
    const a = el.animate(
      [
        { transform: `translate(${dx}px,${dy}px) scale(${sc})`, boxShadow: "0 14px 22px rgba(0,0,0,.45)" },
        {
          transform: `translate(${dx * 0.35}px,${dy * 0.35 - 14}px) scale(${1 + (sc - 1) * 0.35 + 0.08})`,
          boxShadow: "0 18px 26px rgba(0,0,0,.4)",
          offset: 0.55,
        },
        { transform: "none", boxShadow: "0 0 0 rgba(0,0,0,0)" },
      ],
      { duration: 560, delay: dl || 0, easing: "cubic-bezier(.3,.7,.25,1)", fill: "backwards" },
    );
    a.onfinish = a.oncancel = () => {
      el.style.zIndex = "";
    };
  }
  function ccAnim(R, a, b) {
    const gs = [...document.querySelectorAll(".vzf.game .ccg4")],
      pl = document.querySelectorAll(".vzf.game .ccpile"),
      dr = document.querySelector(".vzf.game .ccdrw .ccc"),
      top = pl[1] && pl[1].querySelector(".ccc"),
      gi = (p) => (p === CC.me ? gs.length - 1 : p < CC.me ? p : p - 1);
    let rep = null;
    b.h.forEach((h, p) =>
      h.forEach((c, i) => {
        const o = a.h[p] && a.h[p][i];
        if (o && o !== c) {
          const [ov, ou] = o.split(":"),
            [nv, nu] = c.split(":");
          if (!(nu === "1" && ou === "0" && ov === nv)) rep = [gi(p), i];
        }
      }),
    );
    if (a.dr == null && b.dr != null) {
      ccFly(dr, a.dt !== b.dt ? R.ds : R.dk);
    } else if (a.dr != null && b.dr == null) {
      if (rep) {
        const el = gs[rep[0]] && gs[rep[0]].children[rep[1]];
        ccFly(el, R.dr);
        a.dt !== b.dt && ccFly(top, R.g[rep[0]] && R.g[rep[0]][rep[1]], 80);
      } else a.dt !== b.dt && ccFly(top, R.dr);
    }
  }
  function ccShow() {
    const S = CC.S;
    if (!S) return;
    S.st === "play" && (CC.mo = 0);
    S.st === "play" && (CC.endT = 0);
    const nb = $("#nav");
    nb && (nb.hidden = !0);
    const pv0 = CC.pv && CC.S === CC.pv.S ? CC.pv : CC.pv;
    const R0 = ccRc();
    app.innerHTML = ccDraw();
    try {
      R0 && pv0 && CC.pv && pv0.hole === CC.pv.hole && ccAnim(R0, pv0, CC.pv);
    } catch (e) {}
    ccSd(pv0, CC.pv);
    S.st !== "play" && !CC.sdE && ((CC.sdE = 1), ccSn(S.st === "end" ? "win" : "hole"));
    S.st === "play" && (CC.sdE = 0);
    if (S.st !== "play") {
      if (!CC.mo && !CC.mt)
        CC.mt = setTimeout(() => {
          CC.mt = null;
          CC.mo = 1;
          if (CC.S && CC.S.st !== "play") ccShow();
        }, 1500);
    } else {
      CC.mo = 0;
      clearTimeout(CC.mt);
      CC.mt = null;
    }
  }
  function ccNext() {
    clearTimeout(CC.tm);
    const S = CC.S;
    if (!S || S.st !== "play") return;
    const lv = S.bot[S.turn];
    if (lv < 0) return;
    if (CC.on && !CC.on.host) return;
    CC.tm = setTimeout(
      () => {
        if (CC.S !== S || S.st !== "play" || S.bot[S.turn] !== lv) return;
        if (S.ph === "d") {
          ccTake(S, ccAIdraw(S, lv));
        } else {
          const m = ccAIplace(S, lv);
          m.f ? ccFlip(S, m.i) : ccPlace(S, m.i);
        }
        ccCommit();
      },
      S.ph === "d" ? 1000 : 1250,
    );
  }
  function ccCommit() {
    const S = CC.S;
    S.seq++;
    if (CC.on)
      CC.on.db
        .collection("cc")
        .doc(CC.on.code)
        .set({ j: J(S) })
        .catch(() => gToast("Connexion instable…"));
    ccShow();
    ccNext();
  }
  function ccMine() {
    const S = CC.S;
    return S && S.st === "play" && S.turn === CC.me && S.bot[CC.me] < 0 ? S : null;
  }
  function ccPay() {
    if (CC.paid) return;
    CC.paid = 1;
    const S = CC.S,
      best = Math.min(...S.tot),
      won = S.tot[CC.me] === best,
      M = CC.meta;
    let g = 0;
    st.set("cc:g", st.get("cc:g", 0) + 1);
    won && st.set("cc:w", st.get("cc:w", 0) + 1);
    if (M && M.lv != null) {
      if (won) {
        const p = st.get("cc:p", 0);
        if (M.lv >= p) {
          st.set("cc:p", M.lv + 1);
          g = ccLvl(M.lv)[4];
        } else g = 2;
      }
    } else if (M && M.free) {
      g = won ? 1 : 0;
    } else if (CC.on) {
      g = won ? 6 : 2;
    }
    if (g) scrGain(g);
    CC.gain = g;
  }
  function ccStop() {
    clearTimeout(CC.eT);
    CC.eT = null;
    CC.endT = 0;
    clearTimeout(CC.tm);
    clearTimeout(CC.mt);
    CC.mt = null;
    CC.q = 0;
    CC.fm = 0;
    if (CC.unsub) {
      try {
        CC.unsub();
      } catch (e) {}
      CC.unsub = null;
    }
    CC.on = null;
    CC.S = null;
    CC.pv = null;
    CC.mo = 0;
  }
  function ccLocal(opps, H, meta) {
    ccStop();
    {
      const o = $("#vzsh");
      o && o.remove();
    }
    CC.meta = meta;
    CC.me = 0;
    CC.paid = 0;
    CC.gain = 0;
    CC.S = ccNew(
      [{ n: myName(), e: myAv(), u: SO.uid || "" }, ...opps.map((o) => ({ n: o[0], e: o[1], lv: o[2] }))],
      H,
    );
    cur = "carcache";
    theme("carcache");
    ccShow();
    ccNext();
    window.scrollTo(0, 0);
  }
  function ccOnline(r) {
    const env = RM.env,
      code = RM.code;
    ccStop();
    RM.unsub && RM.unsub();
    RM.unsub = null;
    clearInterval(RM.hb);
    clearInterval(RM.cd);
    RM.scr = "";
    CC.S = null;
    CC.meta = null;
    CC.paid = 0;
    CC.gain = 0;
    CC.me = r.p.findIndex((p) => p.u === env.uid);
    CC.on = { db: env.db, code, host: r.h === env.uid, uid: env.uid };
    cur = "carcache";
    theme("carcache");
    app.innerHTML = `<div class="top stk"><button class="back" data-a="ccQuit">‹ Quitter</button></div><section class="glass story pt-carcache"><i>🐚</i><h2>Manche en cours…</h2><p>Mise en place de la partie.</p></section>`;
    CC.unsub = env.db
      .collection("cc")
      .doc(code)
      .onSnapshot(
        (d) => {
          let S = null;
          try {
            S = JSON.parse(d.data().j);
          } catch (e) {}
          if (!S) return;
          if (!CC.on) return;
          if (ccAcc(S)) {
            CC.S = S;
            ccShow();
            ccNext();
          }
        },
        () => gToast("Connexion perdue"),
      );
  }

  /* ───────── Menu du jeu ───────── */
  function ccLvHtml() {
    const p = st.get("cc:p", 0),
      unl = UNL();
    const lv = CCL.map((l, i) => {
      const ok = unl || i <= p;
      return `<button class="ccl ${ok ? "" : "lk"} ${i < p ? "dn" : ""}" ${ok ? `data-a="ccLv" data-v="${i}"` : "disabled"}><i>${ok ? l[3][0][1] : "🔒"}</i><b>${i + 1}. ${l[0]}</b><small>${l[2]} manches · ${l[3].length} adv. · +${l[4]} 🫧</small>${i < p ? "<u>✓</u>" : ""}</button>`;
    }).join("");
    const nx = Math.max(p, CCL.length),
      L = ccLvl(nx);
    const inf =
      unl || p >= CCL.length
        ? `<h3 class="vzh3">Infini ∞</h3><p class="note" style="margin:0 0 8px">Les niveaux continuent sans fin, avec des adversaires de plus en plus redoutables. Niveaux terminés au-delà du huitième : <b>${Math.max(0, p - CCL.length)}</b>.</p><button class="ccl" data-a="ccLv" data-v="${nx}"><i>${L[1]}</i><b>${nx + 1}. ${L[0]}</b><small>${L[2]} manches · ${L[3].length} adv. · +${L[4]} 🫧</small></button>`
        : `<h3 class="vzh3">Infini ∞</h3><p class="note" style="margin:0">🔒 Termine les 8 niveaux pour débloquer l’histoire infinie.</p>`;
    return `<div class="ccls">${lv}</div>${inf}`;
  }
  function ccRules() {
    const C = (v, u, c) => cardH({ v, u: u ? 1 : 0 }, c || ""),
      H = () => C(0, 0),
      G = (x) => `<div class="ccg4">${x}</div>`,
      R = (n, t, d, v) =>
        `<div class="vzru"><div class="vzrh"><span>${n}</span><b>${t}</b></div><p>${d}</p><div class="vzrv">${v}</div></div>`,
      lb = (x, l) => `<div class="vzlb">${x}<small>${l}</small></div>`,
      ar = (x) => `<span class="vzar">${x || "➜"}</span>`;
    const board = G([H(), C(4, 1), H(), H(), H(), H(), C(7, 1), H()].join(""));
    return `<div class="vzrules">
${R(1, "Le but", "Chacun a 8 cartes face cachée, en 2 rangées de 4. Deux sont déjà retournées. Le <b>plus petit total</b> gagne.", `<div class="vzrw">${board}</div>`)}
${R(2, "À ton tour : pioche", "Prends la carte de la <b>pioche</b> (inconnue) ou celle du dessus de la <b>défausse</b> (visible).", `<div class="vzrow">${lb(H(), "Pioche")}<span class="vzor">ou</span>${lb(C(5, 1), "Défausse")}</div>`)}
${R(3, "Remplace une carte", "Pose-la à la place d’une de tes cartes, cachée ou non. L’ancienne carte part à la défausse.", `<div class="vzrow">${lb(C(2, 1), "Ta carte")}${ar()}${lb(H(), "Une des tiennes")}${ar()}${lb(C(2, 1), "Posée !")}</div>`)}
${R(4, "Ou défausse et retourne", "Si tu as pioché dans la <b>pioche</b>, tu peux la défausser et <b>retourner</b> une carte cachée à la place.", `<div class="vzrow">${lb(C(11, 1), "Trop forte")}${ar("🗑")}${lb(H(), "Retourne")}${ar()}${lb(C(3, 1), "Découverte")}</div>`)}
${R(5, "Les paires valent 0", "Deux cartes <b>identiques</b> dans la même colonne s’annulent : elles valent 0 chacune.", `<div class="vzrow"><div class="vzcol">${C(6, 1, "pr")}${C(6, 1, "pr")}<small>= 0 ✨</small></div><div class="vzcol">${C(3, 1)}${C(8, 1)}<small>= 11</small></div></div>`)}
${R(6, "Cartes à connaître", "La <b>perle</b> est la meilleure carte du jeu. Les hautes cartes font mal !", `<div class="vzrow">${lb(C(-5, 1), "Perle : −5")}${lb(C(0, 1), "Zéro")}${lb(C(12, 1), "Douze")}</div>`)}
${R(7, "Fin de manche", "Dès qu’un joueur a <b>tout retourné</b> 🔔, les autres jouent un <b>dernier tour</b>. Puis on compte.", `<div class="vzrw">${G([3, 6, 0, 8, 3, 2, 0, -5].map((v) => C(v, 1)).join(""))}</div>`)}
${R(8, "On compte les points", "Additionne les colonnes : les paires comptent 0.", `<div class="vzrw">${G([3, 6, 0, 8, 3, 2, 0, -5].map((v, i) => C(v, 1, i % 4 === 0 || i % 4 === 2 ? "pr" : "")).join(""))}<div class="vzsum"><span>0</span><span>8</span><span>0</span><span>3</span></div><p class="vzto">Total : <b>11</b></p></div>`)}
<p class="note" style="margin:6px 0 0;text-align:center">Après toutes les manches, le plus petit total gagne 🏆</p></div>`;
  }
  function ccSheet(k) {
    const old = $("#vzsh");
    old && old.remove();
    const c = CC.cfg,
      p = st.get("cc:p", 0);
    let t = "",
      h = "";
    const ch = (a, v, x, on) =>
        `<button class="chc${on ? " on" : ""}" data-a="ccCfg" data-v="${a}:${v}" aria-pressed="${on}">${x}</button>`,
      grp = (l, x) => `<div class="chgr"><div class="chl">${l}</div><div class="chq">${x}</div></div>`;
    if (k === "rules") {
      t = "Les règles";
      h = ccRules();
    } else if (k === "stats") {
      t = "Records";
      h = `<div class="vzstt"><div><b>${p}</b><small>niveaux réussis</small></div><div><b>${st.get("cc:g", 0)}</b><small>parties jouées</small></div><div><b>${st.get("cc:w", 0)}</b><small>victoires</small></div></div>`;
    } else if (k === "av") {
      t = "Ton joueur";
      h = `<p class="note" style="margin:0 0 10px">Ton avatar à la table, visible des autres joueurs.</p><div class="chq">${AVS.map((a) => `<button class="chc${a === myAv() ? " on" : ""}" data-a="ccAv" data-v="${a}" aria-pressed="${a === myAv()}" style="font-size:22px">${a}</button>`).join("")}</div>`;
    } else if (k === "free") {
      t = "Partie libre";
      h = `${grp("Adversaires", [1, 2, 3, 4, 5].map((n) => ch("n", n, n, c.n === n)).join(""))}${grp("Niveau", LVN.map((x, i) => ch("lv", i, x, c.lv === i)).join(""))}${grp("Manches", [1, 3, 5, 9].map((n) => ch("H", n, n, c.H === n)).join(""))}<p class="note" style="margin:6px 0 14px">Sans minuteur : prends ton temps.</p><button class="btn chgo" data-a="ccFree">Commencer la partie</button>`;
    } else if (k === "on") {
      t = "Social";
      h = `<p class="note" style="margin:0 0 12px">Jusqu’à 6 joueurs. Crée un salon, puis invite tes amis ou partage son code, ou entre le code d’un ami.</p><button class="btn chgo" data-a="rmNew" data-v="carcache">🔑 Créer un salon</button><button class="btn alt" data-a="rmCode">🔑 Rejoindre avec un code</button><button class="btn alt" data-a="rmQuick">🌐 Contre des inconnus</button>`;
    } else if (k === "lv") {
      t = "Niveaux";
      h = ccLvHtml();
    }
    const d = document.createElement("div");
    d.id = "vzsh";
    d.className = "vzsh";
    d.innerHTML = `<div class="vzsp" role="dialog" aria-label="${t}"><div class="vzsx"><h2>${t}</h2><button data-a="ccShX" aria-label="Fermer">✕</button></div>${h}</div>`;
    d.addEventListener("click", (e) => {
      if (e.target === d) d.remove();
    });
    document.body.appendChild(d);
  }
  function ccHub() {
    ccStop();
    const o = $("#vzsh");
    o && o.remove();
    cur = "carcache";
    nv("games");
    theme("carcache");
    const nb = $("#nav");
    nb && (nb.hidden = !0);
    const p = st.get("cc:p", 0),
      L = ccLvl(p),
      B = (a, v, i, t, k) =>
        `<button class="vzb" style="--k:${k}" data-a="${a}"${v ? ` data-v="${v}"` : ""}><i>${i}</i><span>${t}</span></button>`;
    app.innerHTML = `<div class="vzf hub"><div class="vzfelt"></div><div class="vztp">${bk("home")}<div class="vzti"><b>Carcaché</b><small>Salon de cartes</small></div><div class="chip">🫧 ${FLX()}</div></div>
<div class="vzmid"><div class="vzst"><div class="vzfan">${[-5, 3, 0, 9, 5].map((v, i) => `<div class="vzfc" style="--r:${(i - 2) * 13}deg;--x:${(i - 2) * 38}px;--d:${(i * 0.35).toFixed(2)}s">${cardH({ v, u: 1 }, "", "", i)}</div>`).join("")}</div><div class="vzname">Carcaché</div><p class="vzsub">Retourne, échange, forme des paires.<br>Le plus petit total gagne.</p></div></div>
<div class="vzbt"><div class="vzhl">${B("ccSh", "rules", "📖", "Règles", "#6fb7ff")}${B("ccSh", "stats", "🏆", "Records", "#ffd36a")}</div>
<div class="vzcn"><button class="vzbig" data-a="ccLv" data-v="${p}">Jouer<small>Niveau ${p + 1}</small></button><button class="vzpill" data-a="ccFree" data-v="q">Rapide<small>1 manche · ${CC.cfg.n} adv.</small></button></div>
<div class="vzhr">${B("ccSh", "free", "🎲", "Libre", "#ff9a6b")}${B("ccSh", "on", '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14c3 0 5 2 5 5"/></svg>', "Social", "#a98cff")}</div></div></div>`;
    window.scrollTo(0, 0);
  }
  /* ───────── Salons ───────── */
  async function rmEnv() {
    if (RM.env) return RM.env;
    let db = null,
      uid = "";
    try {
      db = await scrDb();
    } catch (e) {}
    if (!db) return null;
    try {
      uid = SO.uid;
      if (!uid) {
        const u = await window.claude.use("user");
        uid = await u.id();
      }
    } catch (e) {}
    if (!uid) return null;
    RM.env = { db, uid, name: myName() === "Toi" ? "Joueur " + uid.slice(0, 3) : myName() };
    return RM.env;
  }
  const rmRef = (c) => RM.env.db.collection("rm").doc(c);
  const rmPut = (c, o) => rmRef(c).set({ j: J(o) });
  const rmNew5 = () => {
    let s = "";
    for (let i = 0; i < 5; i++) s += A31[(Math.random() * 31) | 0];
    return s;
  };
  const rmNA = () => gToast("Le multijoueur n’est pas disponible ici (connexion ou compte requis).");
  function rmWatch(code) {
    RM.unsub && RM.unsub();
    RM.code = code;
    RM.go = 0;
    RM.tries = 0;
    RM.unsub = rmRef(code).onSnapshot(
      (d) => {
        RM.r = rd(d);
        rmOnRoom();
      },
      () => gToast("Connexion perdue"),
    );
    clearInterval(RM.hb);
    RM.hb = setInterval(() => {
      const r = RM.r;
      if (r && r.st === "w" && r.h === RM.env.uid) {
        r.at = Date.now();
        rmPut(code, r).catch(() => {});
      }
    }, 15000);
    clearInterval(RM.cd);
    RM.cd = setInterval(rmTick, 500);
  }
  function rmOnRoom() {
    const r = RM.r,
      env = RM.env;
    if (r && r.st === "w") RM.go = 0;
    if (!r || r.st === "x") {
      if (RM.scr === "lobby") {
        gToast("Le salon est fermé.");
        rmQuit(1);
      }
      return;
    }
    if (!r.p.some((p) => p.u === env.uid)) {
      if (r.st === "w" && r.p.length < r.mx && RM.tries++ < 4) {
        r.p.push({ u: env.uid, n: env.name, e: myAv() });
        rmPut(RM.code, r).catch(() => {});
      } else if (RM.scr === "lobby") {
        gToast("Impossible de rejoindre ce salon.");
        rmQuit(1);
      }
      return;
    }
    if (r.st === "s" && !RM.go) {
      RM.go = 1;
      rmGo();
      return;
    }
    if (RM.scr === "lobby" && rmSig(r) !== RM.sig) rmDraw();
  }
  const rmSig = (r) => JSON.stringify([r.g, r.p, r.mx, r.o, r.st, r.h]);
  function rmTick() {
    const r = RM.r,
      env = RM.env;
    if (!r || r.st !== "w" || RM.scr !== "lobby") return;
    const host = r.h === env.uid;
    if (r.o.pub && host) {
      if (r.p.length >= 2 && !r.cd) {
        r.cd = Date.now() + (r.p.length >= r.mx ? 3000 : 10000);
        rmPut(RM.code, r).catch(() => {});
      } else if (r.cd && Date.now() >= r.cd && !RM.st) {
        RM.st = 1;
        rmStart();
      }
    }
    const el = $("#rmcd");
    if (el && r.cd)
      el.textContent = "Départ dans " + Math.max(0, Math.ceil((r.cd - Date.now()) / 1e3)) + " s";
  }
  async function rmStart() {
    const r = RM.r,
      env = RM.env;
    if (!r || r.h !== env.uid || r.st !== "w" || r.p.length < 2) {
      RM.st = 0;
      return;
    }
    try {
      if (r.g === "carcache") {
        const S = ccNew(
          (() => {
            const u = [];
            return r.p.map((p, i) => {
              let e = p.e && !u.includes(p.e) ? p.e : AVS.find((a) => !u.includes(a));
              u.push(e);
              return { n: p.n, e, u: p.u };
            });
          })(),
          r.o.h || 3,
        );
        await env.db
          .collection("cc")
          .doc(RM.code)
          .set({ j: J(S) });
      }
      r.st = "s";
      r.at = Date.now();
      await rmPut(RM.code, r);
    } catch (e) {
      RM.st = 0;
      gToast("Impossible de lancer la partie.");
    }
  }
  function rmGo() {
    if (SO.uid && SO.got) return rmGo2();
    try {
      if (!SO.col && SO.st !== "conn") socInit();
    } catch (e) {}
    let n = 0;
    const t = setInterval(() => {
      if ((SO.uid && SO.got) || ++n > 25) {
        clearInterval(t);
        rmGo2();
      }
    }, 300);
  }
  const rmPoll = (fn, ms, n) => {
    let k = 0;
    const t = setInterval(async () => {
      k++;
      let d = !1;
      try {
        d = await fn();
      } catch (e) {}
      (d || k >= n) && clearInterval(t);
    }, ms);
  };
  const rmAhCode = (r) => ("rm" + RM.code + ((r.at || 0) % 1e6).toString(36)).toLowerCase();
  function rmHostX(r, o) {
    const g = r.g;
    SO.P[o.u] = SO.P[o.u] || { name: o.n };
    if (g === "hoho") {
      act.open("hoho");
      setTimeout(() => {
        UN.cfg.fr = [o.u];
        act.unMake();
      }, 120);
      const gid = unGid([SO.uid, o.u]);
      rmPoll(
        () => {
          const t = UN.G[gid];
          if (t && t.st === "lobby" && t.h === SO.uid && UN.room === gid && unJoined(t, gid, o.u)) {
            act.unLaunch();
            return !0;
          }
          return !1;
        },
        700,
        60,
      );
    } else if (g === "airhockey") {
      act.open("airhockey");
      setTimeout(() => act.ahAsk(o.u, rmAhCode(r)), 200);
    } else act.socPlay(g + ":" + o.u);
  }
  function rmGuestX(r, o) {
    const g = r.g;
    SO.P[o.u] = SO.P[o.u] || { name: o.n };
    if (g === "hoho") {
      const gid = unGid([SO.uid, o.u]);
      act.open("hoho");
      rmPoll(
        async () => {
          unWatch(gid);
          const t = UN.G[gid];
          if (t && t.st === "lobby") {
            act.unJoin(gid);
            return !0;
          }
          return !1;
        },
        700,
        60,
      );
    } else if (g === "airhockey") {
      act.open("airhockey");
      setTimeout(() => act.ahJoin(rmAhCode(r)), 500);
    } else if (g === "galac") {
      act.open("galac");
      rmPoll(
        async () => {
          const d = await scrDb();
          if (!d) return !1;
          const s = await d.collection("sc").doc(rcGid(o.u, o.u)).get(),
            h = s.exists && rcClean(s.data());
          if (h && h.st === "ch" && Date.now() - h.at < 9e5) {
            act.gfRcAc(o.u);
            return !0;
          }
          return !1;
        },
        800,
        50,
      );
    } else {
      act.open(g);
      if (g === "chess") setTimeout(() => act.chOpen(o.u), 200);
      if (g === "draughts") setTimeout(() => act.dmOpen(o.u), 500);
    }
  }
  function bwStop() {
    try {
      RM.bw && RM.bw();
    } catch (e) {}
    RM.bw = null;
  }
  function bwStart(code) {
    bwStop();
    try {
      let first = 1;
      RM.bw = rmRef(code).onSnapshot(
        (d) => {
          if ((d.metadata || {}).fromCache) return;
          const r = rd(d);
          first = 0;
          if (!r || RM.bk !== code) return;
          if (r.h === RM.env.uid && !RM.bkH) {
            RM.bkH = !0;
            if (CC.on && !CC.on.host) {
              CC.on.host = !0;
              CC.S && ccShow();
              ccNext();
            }
          }
          if (r.st === "w" && RM.scr !== "lobby") {
            bwStop();
            if (CC.on) ccStop();
            rmReturn(code);
          }
        },
        () => {},
      );
    } catch (e) {}
  }
  function rmGo2() {
    const r = RM.r,
      env = RM.env;
    if (!r) return;
    RM.bk = RM.code;
    RM.bkH = r.h === env.uid;
    bwStart(RM.code);
    RM.md = "";
    {
      const m = document.getElementById("rmmd");
      m && m.remove();
    }
    clearInterval(RM.hb);
    clearInterval(RM.cd);
    if (r.g === "carcache") return ccOnline(r);
    RM.unsub && RM.unsub();
    RM.unsub = null;
    RM.scr = "";
    const o = r.p.find((p) => p.u !== env.uid);
    if (!o) return;
    SO.P[o.u] = SO.P[o.u] || { name: o.n };
    if (!SO.col && SO.st !== "conn")
      try {
        socInit();
      } catch (e) {}
    gToast("Partie lancée depuis le salon " + RM.code);
    if (r.g === "billard") {
      act.open("billard");
      setTimeout(() => act.biOn && act.biOn(o.u), 600);
      return;
    }
    if (r.h === env.uid) {
      if (r.g === "chess") {
        CH.cfg.col = r.o.col || 0;
        CH.cfg.tc = r.o.tc || 0;
        st.set("ch:cfg", CH.cfg);
        act.open("chess");
        setTimeout(() => act.chInv(o.u), 120);
      } else rmHostX(r, o);
    } else if (r.g === "scrabble") {
      SO.P[o.u] = SO.P[o.u] || { name: o.n };
      act.scrOpen(o.u);
    } else rmGuestX(r, o);
  }
  function rmShell(h) {
    cur = "salon";
    nv("games");
    theme(RM.r && RM.r.g);
    const n = $("#nav");
    n && (n.hidden = !0);
    app.innerHTML = h;
    window.scrollTo(0, 0);
  }
  const RSL = [
    [50, 16],
    [18, 42],
    [82, 42],
    [30, 68],
    [70, 68],
    [50, 88],
  ];
  function rmRules(r, host, pub) {
    if (r.g !== "chess" || pub) return "";
    const o = r.o,
      col = o.col || 0,
      tc = o.tc || 0;
    if (!host)
      return `<div class="rmrl"><div class="chl">Règles de la partie</div><p class="note" style="margin:0">${col === 1 ? "L’hôte joue les Blancs, toi les Noirs" : col === -1 ? "L’hôte joue les Noirs, toi les Blancs" : "Couleurs tirées au hasard"} · ${chTcT(tc)}${tc ? " par joueur" : ""}.</p></div>`;
    return `<div class="rmrl"><div class="chl">Règles de la partie</div><div class="chl2">Ta couleur</div><div class="chq">${[
      [1, "Blancs"],
      [-1, "Noirs"],
      [0, "Au hasard"],
    ]
      .map(
        ([v, n]) =>
          `<button class="chc${col === v ? " on" : ""}" data-a="rmCh" data-v="col:${v}">${n}</button>`,
      )
      .join(
        "",
      )}</div><div class="chl2">Durée par joueur</div><div class="chq">${CHTC.map((e) => `<button class="chc${tc === e ? " on" : ""}" data-a="rmCh" data-v="tc:${e}">${chTcT(e)}</button>`).join("")}</div></div>`;
  }
  function rmHasFr() {
    const a = st.get("soc:me", null);
    return !!(a && a.fr && Object.keys(a.fr).some((e) => a.fr[e] > 0 && SO.P && SO.P[e]));
  }
  function rmInvUI() {
    const old = $("#rminv");
    old && old.remove();
    const a = st.get("soc:me", null),
      L =
        a && a.fr
          ? Object.keys(a.fr)
              .filter((e) => a.fr[e] > 0 && SO.P && SO.P[e])
              .sort((x, y) => scrNm(x).localeCompare(scrNm(y), "fr"))
          : [];
    const d = document.createElement("div");
    d.id = "rminv";
    d.className = "ccov";
    d.innerHTML = `<div class="glass ccbox"><h2>Inviter des amis</h2><p class="note">Ils reçoivent un message avec le code du salon.</p><div class="rminv">${L.length ? L.map((u) => `<div class="rmir"><span class="fr-o">${socAv(u)}<b>${esc(scrNm(u))}</b></span><button class="sb buy" data-a="rmInvS" data-v="${esc(u)}">Inviter</button></div>`).join("") : '<p class="note">Ajoute des amis dans l’onglet Amis pour les inviter ici.</p>'}</div><button class="btn alt" data-a="rmInvX">Fermer</button></div>`;
    document.body.appendChild(d);
    d.addEventListener("click", (e) => {
      e.target === d && d.remove();
    });
  }
  function rmDraw() {
    const r = RM.r,
      env = RM.env;
    if (!r) return;
    RM.sig = rmSig(r);
    const host = r.h === env.uid,
      pub = r.o.pub,
      cc = r.g === "carcache",
      me = r.p.find((p) => p.u === env.uid),
      mine = (me && me.e) || myAv();
    const sp = [];
    for (let i = 0; i < r.mx; i++) {
      const p = r.p[i],
        q = RSL[i];
      sp.push(
        p
          ? `<div class="rmsp in" style="left:${q[0]}%;top:${q[1]}%;--d:${(i * 0.45).toFixed(2)}s"><i>${ccAvH(p.e ? p : { e: AVS[i % 10], u: p.u })}</i><b>${esc(p.n)}${p.u === r.h ? " 👑" : ""}</b></div>`
          : `<div class="rmsp em" style="left:${q[0]}%;top:${q[1]}%;--d:${(i * 0.45).toFixed(2)}s"><i>?</i><b>En attente</b></div>`,
      );
    }
    const letters = [...RM.code].map((c) => `<span>${c}</span>`).join(""),
      taken = r.p.filter((p) => p.u !== env.uid).map((p) => p.e);
    const gi = (RGI[r.g] || ["🎮"])[0],
      chR = pub
        ? ""
        : `<div class="rmop">${host && r.st === "w" ? `<button class="rmpb" data-a="rmMd" data-v="g"><i>${gi}</i><span>${GN[r.g]}<small>Changer de jeu</small></span></button>` : `<span class="rmpb st"><i>${gi}</i><span>${GN[r.g]}<small>Jeu du salon</small></span></span>`}<button class="rmpb" data-a="rmMd" data-v="u"><i>📖</i><span>Règles<small>Comment jouer</small></span></button>${r.g === "chess" ? `<button class="rmpb" data-a="rmMd" data-v="r"><i>⚙️</i><span>Options<small>Couleur · durée</small></span></button>` : ""}</div>`;
    const tray = 0
      ? `<div class="rmtr">${AVS.map((a) => `<button class="${a === mine ? "on" : ""}" ${taken.includes(a) ? "disabled" : ""} data-a="rmAv" data-v="${a}">${a}</button>`).join("")}</div>`
      : "";
    const go = pub
      ? `<div class="rmgo" id="rmcd">${r.p.length < 2 ? "En attente d’autres joueurs…" : ""}</div>`
      : host
        ? `<button class="rmbig" data-a="rmStart" ${r.p.length < 2 ? "disabled" : ""}>${r.p.length < 2 ? "En attente d’un joueur…" : "Lancer la partie"}</button>`
        : `<div class="rmgo">L’hôte lancera la partie…</div>`;
    rmShell(`<div class="rmfs ${cc ? "sea" : ""}">${cc ? "" : ccBubbles()}<div class="rmtp"><button class="back" data-a="rmLeave">‹ Quitter</button><div class="rmti"><b>${pub ? "Recherche de joueurs" : "Salon · " + GN[r.g]}</b><small>${r.p.length}/${r.mx} joueurs${cc ? " · " + (r.o.h || 3) + " manches" : ""}</small></div><div class="chip">🫧 ${FLX()}</div></div>
${pub ? "" : `<div class="rmcode" data-a="rmCopy" role="button" aria-label="Copier le code">${letters}</div>`}
<div class="rmmid"><div class="rmhl">${pub ? "" : `<button class="rmh" data-a="rmCopy"><i>📋</i><span>Copier</span></button><button class="rmh" data-a="rmInv"><i>👥</i><span>Inviter</span></button><button class="rmh" data-a="rmShare"><i>📤</i><span>Partager</span></button>`}</div><div class="rmpool">${sp.join("")}</div><div class="rmhr">${cc && host && !pub ? `<button class="rmh" data-a="rmOpt" data-v="c"><i>🌊</i><span>${r.o.h || 3} manches</span></button>` : ""}</div></div>
${cc ? '<div class="rmsb" aria-hidden="true">🎲🃏🎴♟️🎲🃏🎴</div>' : ""}${chR}<div class="rmbt">${tray}${go}</div></div>`);
    if (RM.scr !== "lobby") RM.scr = "lobby";
    RM.md && rmModal(RM.md);
  }
  function rmModal(k) {
    const old = document.getElementById("rmmd");
    old && old.remove();
    RM.md = k || "";
    const r = RM.r;
    if (!k || !r || !RM.env) return;
    const host = r.h === RM.env.uid;
    let t, h;
    if (k === "g") {
      t = "Choisir le jeu";
      h = `<div class="rmgg">${Object.keys(GN)
        .map((x) => {
          const q = RGI[x] || ["🎮", "", ""];
          return `<button class="rmgc${r.g === x ? " on" : ""}" data-a="rmGame" data-v="${x}" ${RMX[x] < r.p.length ? "disabled" : ""}><i>${q[0]}</i><b>${GN[x]}</b><small>${q[2]}</small></button>`;
        })
        .join("")}</div>`;
    } else if (k === "u") {
      t = "Règles · " + GN[r.g];
      h = `<div class="rmru">${r.g === "carcache" ? ccRules() : `<p>${RGR[r.g] || ""}</p>`}</div>`;
    } else {
      t = "Options de la partie";
      h = rmRules(r, host, 0);
    }
    const d = document.createElement("div");
    d.id = "rmmd";
    d.className = "ccov";
    d.innerHTML = `<div class="glass ccbox"><h2>${t}</h2>${h}<button class="btn alt" data-a="rmMd" data-v="">Fermer</button></div>`;
    document.body.appendChild(d);
    d.addEventListener("click", (e) => {
      e.target === d && rmModal("");
    });
  }
  const RGI = {
    carcache: ["🐚", "Cartes · 2 à 6", "Le plus petit total gagne"],
    chess: ["♟️", "Stratégie · 2", "Échec et mat au roi adverse"],
    scrabble: ["🔤", "Mots · 2", "Forme des mots, marque des points"],
    draughts: ["⚪", "Plateau · 2", "Capture tous les pions adverses"],
    hoho: ["🎴", "Cartes · 2", "Le premier sans cartes gagne"],
    airhockey: ["🏒", "Action · 2", "Marque dans le but adverse"],
    galac: ["🐟", "Duel · 2", "Nage cosmique"],
    billard: ["🎱", "Adresse · 2", "Empoche tes boules"],
  };
  const RGR = {
    chess:
      "Mets le roi adverse en échec et mat. Chaque pièce se déplace à sa façon : le roi d’une case, la dame en ligne et en diagonale, la tour en ligne, le fou en diagonale, le cavalier en L, le pion avance et prend en diagonale. Roque, prise en passant et promotion sont permis.",
    scrabble:
      "Chacun son tour, pose des tuiles sur le plateau pour former des mots qui touchent ceux déjà posés. Les cases colorées multiplient les points. Pioche pour regarnir ton chevalet. Le plus gros score gagne.",
    draughts:
      "Déplace tes pions en diagonale d’une case. Pour capturer, saute par-dessus un pion adverse vers une case libre ; les prises sont obligatoires. Arrivé au bout, ton pion devient une dame. Capture ou bloque tous les pions adverses.",
    hoho: "Pose une carte de la même couleur ou du même symbole que celle du dessus. Si tu ne peux pas jouer, pioche. Le premier qui n’a plus de cartes gagne la manche.",
    airhockey:
      "Déplace ton maillet pour frapper le palet et l’envoyer dans le but adverse, tout en protégeant le tien. Le premier à atteindre le score fixé gagne.",
    galac:
      "Nage dans l’espace, évite les obstacles et ramasse un maximum de bulles. Celui qui va le plus loin gagne.",
    billard:
      "Vise avec la queue et choisis la force du coup. Empoche toutes les boules de ton groupe, puis la noire, sans faire de faute, pour gagner.",
  };
  async function rmOpenRoom(g, pub) {
    const env = await rmEnv();
    if (!env) return rmNA();
    RM.r = null;
    RM.st = 0;
    RM.scr = "lobby";
    let code = "";
    for (let k = 0; k < 4; k++) {
      const c = rmNew5();
      let x = null;
      try {
        x = rd(await rmRef(c).get());
      } catch (e) {}
      if (!x || Date.now() - x.at > 36e5) {
        code = c;
        break;
      }
    }
    if (!code) {
      RM.scr = "";
      return gToast("Réessaie dans un instant.");
    }
    const r = {
      g,
      h: env.uid,
      p: [{ u: env.uid, n: env.name, e: myAv() }],
      st: "w",
      mx: RMX[g] || 2,
      o: Object.assign(
        { h: CC.cfg.H, pub: 0 },
        g === "chess" ? { col: CH.cfg.col || 0, tc: CH.cfg.tc || 0 } : {},
      ),
      at: Date.now(),
    };
    try {
      await rmPut(code, r);
    } catch (e) {
      RM.scr = "";
      return rmNA();
    }
    RM.r = r;
    rmWatch(code);
    rmDraw();
    rmHasFr() &&
      setTimeout(() => {
        RM.r === r && r.st === "w" && !$("#rminv") && rmInvUI();
      }, 400);
  }
  async function rmQuick() {
    const env = await rmEnv();
    if (!env) return rmNA();
    RM.r = null;
    RM.st = 0;
    const slots = shuf([2, 3, 4, 5, 6, 7, 8, 9]).map((n) => "QPUB" + n);
    gToast("Recherche d’une partie…");
    for (const c of slots) {
      let r = null;
      try {
        r = rd(await rmRef(c).get());
      } catch (e) {}
      if (
        r &&
        r.g === "carcache" &&
        r.st === "w" &&
        r.o.pub &&
        Date.now() - r.at < 45000 &&
        r.p.length < r.mx &&
        !r.p.some((x) => x.u === env.uid)
      ) {
        r.p.push({ u: env.uid, n: env.name, e: myAv() });
        r.cd = 0;
        try {
          await rmPut(c, r);
        } catch (e) {
          continue;
        }
        RM.scr = "lobby";
        RM.r = r;
        rmWatch(c);
        rmDraw();
        return;
      }
    }
    for (const c of slots) {
      let r = null;
      try {
        r = rd(await rmRef(c).get());
      } catch (e) {}
      if (!r || r.st !== "w" || Date.now() - r.at >= 45000 || !r.o.pub) {
        const n = {
          g: "carcache",
          h: env.uid,
          p: [{ u: env.uid, n: env.name, e: myAv() }],
          st: "w",
          mx: 6,
          o: { h: 3, pub: 1 },
          at: Date.now(),
        };
        try {
          await rmPut(c, n);
        } catch (e) {
          continue;
        }
        RM.scr = "lobby";
        RM.r = n;
        rmWatch(c);
        rmDraw();
        return;
      }
    }
    gToast("Tous les salons publics sont occupés, réessaie.");
  }
  async function rmJoinCode(raw) {
    const code = String(raw || "")
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "");
    if (code.length !== 5) return "Le code a 5 caractères.";
    const env = await rmEnv();
    if (!env) return "Multijoueur indisponible ici.";
    let r = null;
    try {
      r = rd(await rmRef(code).get());
    } catch (e) {
      return "Connexion impossible.";
    }
    if (!r || r.st === "x" || Date.now() - r.at > 36e5) return "Aucun salon avec ce code.";
    if (r.st !== "w" && !r.p.some((p) => p.u === env.uid)) return "Cette partie est déjà lancée.";
    if (r.p.length >= r.mx && !r.p.some((p) => p.u === env.uid)) return "Ce salon est complet.";
    if (!r.p.some((p) => p.u === env.uid)) {
      r.p.push({ u: env.uid, n: env.name, e: myAv() });
      try {
        await rmPut(code, r);
      } catch (e) {
        return "Impossible de rejoindre.";
      }
    }
    RM.r = r;
    RM.st = 0;
    RM.scr = "lobby";
    rmWatch(code);
    rmDraw();
    return "";
  }
  async function rmQuit(silent) {
    bwStop();
    const r = RM.r,
      env = RM.env,
      g = r && r.g;
    RM.bk = "";
    RM.md = "";
    {
      const m = document.getElementById("rmmd");
      m && m.remove();
    }
    clearInterval(RM.hb);
    clearInterval(RM.cd);
    RM.unsub && RM.unsub();
    RM.unsub = null;
    RM.scr = "";
    if (r && env && !silent && r.st === "w") {
      try {
        r.p = r.p.filter((p) => p.u !== env.uid);
        if (r.h === env.uid) {
          const nh = r.p.find((p) => p.u);
          if (nh) r.h = nh.u;
          else r.st = "x";
        }
        await rmPut(RM.code, r);
      } catch (e) {}
    }
    RM.r = null;
    RM.code = "";
    const nb = $("#nav");
    nb && (nb.hidden = !1);
    const fr = RM.from;
    RM.from = "";
    fr === "soc"
      ? act.back("soc")
      : g && g !== "salon" && GN[g] && g !== "galac"
        ? act.open(g)
        : act.back("home");
  }
  async function rmReturn(code) {
    bwStop();
    const env = await rmEnv();
    if (!env) return;
    let r = null;
    try {
      r = rd(await rmRef(code).get());
    } catch (e) {}
    if (!r || r.st === "x" || !r.p.some((p) => p.u === env.uid)) {
      RM.bk = "";
      RM.r = null;
      RM.code = "";
      gToast("Le salon est fermé.");
      const nb = $("#nav");
      nb && (nb.hidden = !1);
      return act.back(RM.from === "soc" ? "soc" : "home");
    }
    if (r.h === env.uid && r.st !== "w") {
      r.st = "w";
      r.cd = 0;
      r.at = Date.now();
      try {
        await rmPut(code, r);
      } catch (e) {}
    }
    RM.st = 0;
    RM.r = r;
    RM.scr = "lobby";
    rmWatch(code);
    if (r.st !== "w") RM.go = 1;
    rmDraw();
  }
  function rmCodeUI() {
    const old = $("#rmov");
    old && old.remove();
    const d = document.createElement("div");
    d.id = "rmov";
    d.className = "ccov";
    d.innerHTML = `<div class="glass ccbox"><h2>Code multijoueur</h2><p class="note">Entre le code à 5 caractères donné par ton ami.</p><input id="rmin" class="rmin" maxlength="7" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="•••••" aria-label="Code multijoueur"><p class="note" id="rmerr" style="color:#ffb3b3;min-height:1.4em;margin:6px 0"></p><button class="btn" id="rmgo">Rejoindre le salon</button><button class="btn alt" id="rmno">Annuler</button></div>`;
    document.body.appendChild(d);
    const inp = d.querySelector("#rmin"),
      er = d.querySelector("#rmerr");
    setTimeout(() => inp.focus(), 50);
    const go = async () => {
      er.textContent = "Connexion…";
      const m = await rmJoinCode(inp.value);
      if (m) er.textContent = m;
      else d.remove();
    };
    d.querySelector("#rmgo").onclick = go;
    d.querySelector("#rmno").onclick = () => d.remove();
    inp.onkeydown = (e) => {
      if (e.key === "Enter") go();
    };
    inp.oninput = () => {
      inp.value = inp.value.toUpperCase();
    };
  }
  function rmInject() {
    if (RM.bk) return;
    const g = RM.gOpen;
    if (!GN[g] || g === "carcache" || g === "hoho" || (cur !== g && g !== "galac")) return;
    const H = new Set(),
      SEL =
        "[data-a=dmInv],[data-a=dmOpen],[data-a=chInv],[data-a=chOpen],[data-a=ahAsk],[data-a=scNew],[data-a=scrOpen],[data-a=unMake],[data-a=gfRcCh]";
    app.querySelectorAll("section").forEach((sc) => {
      if (sc.classList.contains("story")) return;
      const h = sc.querySelector("h2");
      (sc.classList.contains("soc-i") ||
        (h && /ami|multi|défi/i.test(h.textContent)) ||
        sc.querySelector(SEL) ||
        (/\bamis?\b/i.test(sc.textContent) && sc.textContent.length < 900)) &&
        H.add(sc);
    });
    document.querySelectorAll("[data-a=gfRcCh]").forEach((b) => {
      const c =
        b.closest("#gflp") ||
        b.closest("section,.fr-l") ||
        (b.parentElement && b.parentElement.parentElement);
      c && H.add(c);
    });
    H.forEach((sc) => {
      if (sc.querySelector(".rmrow") || sc.closest("#rmfs")) return;
      const d = document.createElement("div");
      d.className = "rmrow";
      d.innerHTML = `<button class="btn alt" data-a="rmNew" data-v="${g}">🔑 Créer un salon</button><button class="btn alt" data-a="rmCode">🔑 Entrer un code</button>`;
      if (g === "hoho") {
        const hh = sc.querySelector("h2");
        hh ? hh.after(d) : sc.insertBefore(d, sc.firstChild);
      } else sc.appendChild(d);
    });
  }
  {
    let t = 0;
    new MutationObserver(() => {
      clearTimeout(t);
      t = setTimeout(rmInject, 150);
    }).observe(document.getElementById("app"), { childList: !0, subtree: !0 });
  }
  window.__rmJoin = async (c) => {
    RM.from = "soc";
    const m = await rmJoinCode(c);
    m && gToast(m);
  };
  setInterval(() => {
    const o = document.getElementById("rmbk");
    o && o.remove();
    const on = RM.bk && RM.scr !== "lobby" && cur !== "salon" && !CC.on,
      H = RM.bkH;
    document.querySelectorAll(".rmbk2").forEach((x) => {
      if (!on) x.remove();
    });
    if (!on) return;
    document.querySelectorAll("button").forEach((b) => {
      if (b.classList.contains("rmbk2") || !b.offsetParent) return;
      const t = ((b.childNodes[0] && b.childNodes[0].textContent) || "").trim();
      if (!(
        /^(Revanche|Rejouer|Rejouer la manche|Manche suivante ?›?|Menu|Menu du jeu|Quitter)$/i.test(t) ||
        b.dataset.a === "scNew" ||
        b.dataset.a === "ccNh"
      ))
        return;
      const p = b.parentNode;
      if (!p || p.querySelector(".rmbk2")) return;
      if (H && !p.querySelector('[data-a="rmBack"]')) {
        const n = document.createElement("button");
        n.className = "btn alt rmbk2";
        n.dataset.a = "rmBack";
        n.textContent = "↩ Retour au salon";
        p.appendChild(n);
      }
      const h = document.createElement("button");
      h.className = "btn alt rmbk2";
      h.dataset.a = "rmHome";
      h.textContent = "⌂ Accueil";
      p.appendChild(h);
    });
  }, 700);
  setTimeout(() => {
    const _o = act.open;
    act.open = function (e) {
      RM.gOpen = e;
      const r = _o.apply(this, arguments);
      setTimeout(rmInject, 120);
      return r;
    };
    Object.assign(act, {
      rmCode: () => {
        RM.from = "";
        rmCodeUI();
      },
      rmHome: () => {
        bwStop();
        if (CC.on) {
          CC.q = 1;
          act.ccQuit();
        } else {
          RM.bk = "";
          RM.r = null;
          RM.code = "";
          const nb = $("#nav");
          nb && (nb.hidden = !1);
        }
        document.querySelectorAll(".ccov").forEach((x) => x.remove());
        act.back("home");
      },
      rmNew: (g) => {
        RM.from = "";
        rmOpenRoom(g || "carcache", 0);
      },
      rmNewS: () => {
        RM.from = "soc";
        rmOpenRoom(RM.sg || "carcache", 0);
      },
      rmCodeS: () => {
        RM.from = "soc";
        rmCodeUI();
      },
      rmSg: (v) => {
        RM.sg = v;
        SO.h = "";
        socRefresh();
      },
      rmAvT: () => {
        RM.avo = !RM.avo;
        rmDraw();
      },
      rmAv: (v) => {
        st.set("cc:av", v);
        const r = RM.r,
          m = r && r.p.find((p) => p.u === RM.env.uid);
        if (m) {
          m.e = v;
          rmPut(RM.code, r).catch(() => {});
        }
        RM.avo = !1;
        rmDraw();
      },
      ccAv: (v) => {
        st.set("cc:av", v);
        ccHub();
      },
      rmQuick: () => rmQuick(),
      rmLeave: () => rmQuit(0),
      rmJoinMsg: (v) => window.__rmJoin && window.__rmJoin(v),
      rmBack: () => {
        const c = RM.bk || (CC.on && CC.on.code);
        if (!c) return;
        if (CC.on) ccStop();
        rmReturn(c);
      },
      rmMd: (v) => rmModal(v),
      rmGame: (v) => {
        RM.md = "";
        {
          const m = document.getElementById("rmmd");
          m && m.remove();
        }
        const r = RM.r;
        if (!r || r.h !== RM.env.uid || r.st !== "w" || !GN[v] || RMX[v] < r.p.length) return;
        r.g = v;
        r.mx = RMX[v] || 2;
        r.at = Date.now();
        rmPut(RM.code, r).catch(() => {});
        rmDraw();
      },
      rmStart: () => {
        RM.st = 1;
        rmStart();
      },
      rmCh: (v) => {
        const r = RM.r;
        if (!r || r.h !== RM.env.uid || r.st !== "w" || r.g !== "chess") return;
        const [k, x] = String(v).split(":");
        if (k !== "col" && k !== "tc") return;
        r.o[k] = +x;
        CH.cfg[k] = +x;
        st.set("ch:cfg", CH.cfg);
        rmPut(RM.code, r).catch(() => {});
        rmDraw();
      },
      rmInv: () => rmInvUI(),
      rmInvX: () => {
        const d = $("#rminv");
        d && d.remove();
      },
      rmInvS: async (u) => {
        const r = RM.r;
        if (!r) return;
        const b = document.querySelector('.rminv [data-v="' + u + '"]');
        b && ((b.disabled = !0), (b.textContent = "Envoi…"));
        let ok = !1;
        try {
          ok = await cvSend(u, {
            t: Date.now(),
            x: "🎲 Rejoins mon salon " + GN[r.g] + " ! Code : " + RM.code,
          });
        } catch (e) {}
        b && ((b.textContent = ok ? "Invité ✓" : "Réessayer"), (b.disabled = !!ok));
        gToast(ok ? "Invitation envoyée" : "Invitation non envoyée");
      },
      rmOpt: (v) => {
        const r = RM.r;
        if (r && r.h === RM.env.uid && r.st === "w") {
          r.o.h = v === "c" ? { 3: 5, 5: 9, 9: 3 }[r.o.h || 3] : +v;
          CC.cfg.H = r.o.h;
          rmPut(RM.code, r).catch(() => {});
          rmDraw();
        }
      },
      rmCopy: () => {
        try {
          navigator.clipboard.writeText(RM.code);
          gToast("Code copié : " + RM.code);
        } catch (e) {
          gToast("Code : " + RM.code);
        }
      },
      rmShare: () => {
        const t = "Rejoins-moi sur " + (GN[RM.r && RM.r.g] || "Calmos") + " ! Code du salon : " + RM.code;
        try {
          navigator.share
            ? navigator.share({ text: t })
            : (navigator.clipboard.writeText(t), gToast("Texte copié"));
        } catch (e) {}
      },
      ccHub: () => ccHub(),
      ccFr: () => {
        RM.sg = "carcache";
        const d = $("#vzsh");
        d && d.remove();
        act.tab("soc");
      },
      ccCfg: (v) => {
        const [k, x] = String(v).split(":");
        CC.cfg[k] = +x;
        ccSheet("free");
        const pl = document.querySelector(".vzpill small");
        pl && (pl.textContent = "1 manche · " + CC.cfg.n + " adv.");
      },
      ccSh: (v) => ccSheet(v),
      ccShX: () => {
        const d = $("#vzsh");
        d && d.remove();
      },
      ccFree: (q) => {
        const c = CC.cfg,
          o = [
            ["Crevette", "🦐"],
            ["Poisson-clown", "🐠"],
            ["Tortue", "🐢"],
            ["Calamar", "🦑"],
            ["Requin", "🦈"],
          ]
            .slice(0, c.n)
            .map((x) => [x[0], x[1], c.lv]);
        q === "q" ? ccLocal(o, 1, { free: 1, q: 1 }) : ccLocal(o, c.H, { free: 1 });
      },
      ccLv: (v) => {
        const i = +v,
          l = ccLvl(i);
        if (!l) return;
        ccLocal(l[3], l[2], { lv: i });
      },
      ccAgain: () => {
        const M = CC.meta,
          c = CC.cfg;
        if (M && M.lv != null) act.ccLv(M.lv);
        else act.ccFree(M && M.q ? "q" : "");
      },
      ccD: () => {
        const S = ccMine();
        if (!S || S.ph !== "d") return;
        ccTake(S, "d");
        vb(8);
        ccCommit();
      },
      ccT: () => {
        const S = ccMine();
        if (!S || S.ph !== "d") return;
        ccTake(S, "t");
        vb(8);
        ccCommit();
      },
      ccFm: () => {
        CC.fm = CC.fm ? 0 : 1;
        ccShow();
      },
      ccP: (v) => {
        const S = ccMine();
        if (!S || S.ph !== "p") return;
        const i = +v;
        if (CC.fm) {
          if (S.hands[S.turn][i].u) return;
          ccFlip(S, i);
        } else ccPlace(S, i);
        CC.fm = 0;
        vb(12);
        ccCommit();
      },
      ccNh: () => {
        const S = CC.S;
        if (!S || S.st !== "hole" || (CC.on && !CC.on.host)) return;
        CC.mo = 0;
        ccNextHole(S);
        ccCommit();
      },
      ccRe: () => {
        const on = CC.on,
          S = CC.S;
        if (!on || !on.host || !S || S.st !== "end") return;
        const N = ccNew(
          S.pl.map((p) => ({ n: p.n, e: p.e, u: p.u })),
          S.H,
        );
        N.bot = S.bot.slice();
        N.seq = S.seq + 1;
        CC.S = N;
        CC.paid = 0;
        CC.gain = 0;
        CC.endT = 0;
        CC.mo = 0;
        CC.pv = null;
        ccCommit();
      },
      ccQuit: () => {
        // Venant du « Quitter » du menu Pause, c'est déjà une confirmation : on quitte directement.
        if (!CC.q && !window.__pzq) {
          CC.q = 1;
          ccShow();
          setTimeout(() => {
            if (CC.q) {
              CC.q = 0;
              CC.S && ccShow();
            }
          }, 3000);
          return;
        }
        const on = CC.on,
          S = CC.S;
        if (on && S && S.st === "play") {
          S.bot[CC.me] = 1;
          S.seq++;
          try {
            on.db
              .collection("cc")
              .doc(on.code)
              .set({ j: J(S) });
          } catch (e) {}
        }
        const code = on && on.code;
        ccStop();
        bwStop();
        if (code) {
          RM.bk = "";
          RM.go = 0;
          RM.scr = "";
          clearInterval(RM.hb);
          clearInterval(RM.cd);
          try {
            RM.unsub && RM.unsub();
          } catch (e) {}
          RM.unsub = null;
          (async () => {
            try {
              const r = rd(await rmRef(code).get());
              if (r && r.p) {
                r.p = r.p.filter((p) => p.u !== on.uid);
                const nh = r.p.find((p) => p.u);
                if (!nh) r.st = "x";
                else if (r.h === on.uid) r.h = nh.u;
                await rmPut(code, r);
              }
            } catch (e) {}
          })();
          RM.r = null;
          RM.code = "";
          const nb = $("#nav");
          nb && (nb.hidden = !1);
        }
        ccHub();
      },
    });
  }, 0);
  window.ccHub = ccHub;
  setInterval(async () => {
    try {
      const on = CC.on,
        S = CC.S;
      if (!on || !S || document.hidden || (S.st === "play" && S.turn === CC.me)) return;
      const d = await on.db.collection("cc").doc(on.code).get();
      if (CC.on !== on) return;
      let N = null;
      try {
        N = JSON.parse(d.data().j);
      } catch (e) {}
      if (N && CC.S && ccAcc(N)) {
        CC.S = N;
        ccShow();
        ccNext();
      }
    } catch (e) {}
  }, 3500);
  document.addEventListener("visibilitychange", () => {
    try {
      const on = CC.on;
      if (document.hidden || !on) return;
      try {
        CC.unsub && CC.unsub();
      } catch (e) {}
      CC.unsub = on.db
        .collection("cc")
        .doc(on.code)
        .onSnapshot(
          (d) => {
            let S = null;
            try {
              S = JSON.parse(d.data().j);
            } catch (e) {}
            if (!S || !CC.on) return;
            if (ccAcc(S)) {
              CC.S = S;
              ccShow();
              ccNext();
            }
          },
          () => {},
        );
    } catch (e) {}
  });
  const _sb = window.socBody;
  if (typeof _sb === "function")
    window.socBody = function () {
      const h = _sb.apply(this, arguments),
        k = '<h2 class="s">Ajouter un ami</h2>';
      if (h.indexOf(k) < 0) return h;
      const g = RM.sg || "carcache";
      return h.replace(
        k,
        () =>
          `<h2 class="s">Salon avec un code</h2><section class="glass play soc-i"><p class="note" style="margin:0 0 10px">Crée un salon, ou entre le code d’un ami. Tu choisiras le jeu dans le salon.</p><div style="display:flex;gap:8px;margin-top:4px"><button class="btn" data-a="rmNewS" style="flex:1">Créer un salon</button><button class="btn alt" data-a="rmCodeS" style="flex:1">Entrer un code</button></div></section>` +
          k,
      );
    };
})();
