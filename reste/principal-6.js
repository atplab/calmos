let wsG = null;
let wsSw = !1;
function confetti(e) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let t = $("#cf");
  t ||
    ((t = document.createElement("canvas")),
    (t.id = "cf"),
    t.setAttribute("aria-hidden", "true"),
    document.body.appendChild(t));
  const a = (confetti.n = (confetti.n || 0) + 1),
    s = (t.width = innerWidth),
    n = (t.height = innerHeight),
    o = t.getContext("2d"),
    i = e ? e.getBoundingClientRect() : null,
    r = s / 2,
    l = i ? Math.max(90, Math.min(n - 140, i.top + i.height / 2)) : 0.4 * n,
    c = ["#a99cf0", "#7fb6e6", "#e0a3cc", "#e8c47e", "#8fcdc4", "#ffffff", "#f4d9ff"],
    d = Array.from({ length: 120 }, (e, t) => {
      const a = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.25,
        s = 3 + 9 * Math.random();
      return {
        x: r,
        y: l,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        w: 6 + 7 * Math.random(),
        h: 3 + 5 * Math.random(),
        a: 6 * Math.random(),
        va: 0.1 * (Math.random() - 0.5),
        ph: 6 * Math.random(),
        c: c[t % c.length],
        round: t % 5 == 0,
      };
    });
  let f = 0,
    u = 0;
  const h = (e) => {
    if (a !== confetti.n) return;
    f || (f = u = e);
    const t = e - f,
      i = Math.min(3, (e - u) / 16.667);
    ((u = e), o.clearRect(0, 0, s, n));
    let r = 0;
    for (const e of d)
      ((e.vx *= Math.pow(0.965, i)),
        (e.vy = (e.vy + 0.055 * i) * Math.pow(0.965, i)),
        (e.ph += 0.045 * i),
        (e.x += (e.vx + 0.55 * Math.sin(e.ph)) * i),
        (e.y += e.vy * i),
        (e.a += e.va * i),
        e.y < n + 20 && r++,
        o.save(),
        o.translate(e.x, e.y),
        o.rotate(e.a),
        o.scale(1, 0.8 * Math.cos(1.3 * e.ph) + 0.2),
        (o.globalAlpha = Math.max(0, Math.min(1, (9500 - t) / 1800))),
        (o.fillStyle = e.c),
        e.round
          ? (o.beginPath(), o.arc(0, 0, 0.8 * e.h, 0, 7), o.fill())
          : o.fillRect(-e.w / 2, -e.h / 2, e.w, e.h),
        o.restore());
    t < 9500 && r ? requestAnimationFrame(h) : o.clearRect(0, 0, s, n);
  };
  requestAnimationFrame(h);
}
const MST = "22021112110112212212202111112012112222200221112221101210021022222212";
const CAW = 8;
const CAH = 8;
const CANL = 115;
const CAHARD = 49;
const CAHX = 3;
const caUnl = () => !0;
function caOn() {
  try {
    return "cascade" === st.get("ca:mode", "") && caUnl();
  } catch (e) {
    return !1;
  }
}
function caTier(e) {
  return caOn() ? (e < 16 ? 0 : e < 49 ? 1 : 2) : (e >= 99 && e < 167 && +MST[e - 99]) || 0;
}