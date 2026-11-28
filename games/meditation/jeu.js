// Méditation (id « medit ») : sons et musiques zn*, voix, séances ZSES, écrans znHub/znSounds/séance, actions znActs.
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
  // Toucher le cercle (séances « sens » et « étoiles ») : action « toucher » via Input.
  Input.sur(
    "toucher",
    () => {
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
    },
    { cible: $("#zncv") },
  );
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
