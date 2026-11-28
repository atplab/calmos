(() => {
  if (typeof sfx !== "function") return;
  const _s = sfx;
  let NB = null;
  const nz = () => {
    if (!NB) {
      const n = AC.createBuffer(1, (AC.sampleRate * 0.25) | 0, AC.sampleRate),
        c = n.getChannelData(0);
      for (let k = 0; k < c.length; k++) c[k] = (Math.random() * 2 - 1) * (1 - k / c.length);
    }
    return (NB = n);
  };
  const card = (f, d) => {
    const t = AC.currentTime,
      h = 0.85 + 0.3 * Math.random(),
      slide = d <= 0.05,
      o = AC.createBufferSource(),
      bp = AC.createBiquadFilter(),
      lp = AC.createBiquadFilter(),
      g = AC.createGain();
    o.buffer = nz();
    o.playbackRate.value = 0.8 + 0.4 * Math.random();
    bp.type = "bandpass";
    bp.frequency.value = (slide ? 1800 : 2600) * h;
    bp.Q.value = 0.9;
    lp.type = "lowpass";
    lp.frequency.value = 5200;
    const v = (slide ? 0.05 : 0.075) * h,
      L = slide ? 0.11 : 0.07;
    g.gain.setValueAtTime(1e-4, t);
    g.gain.linearRampToValueAtTime(v, t + (slide ? 0.025 : 0.004));
    g.gain.exponentialRampToValueAtTime(1e-4, t + L);
    o.connect(bp);
    bp.connect(lp);
    lp.connect(g);
    g.connect(mg);
    o.start(t);
    o.stop(t + L + 0.03);
    const k = AC.createOscillator(),
      kg = AC.createGain();
    k.type = "sine";
    k.frequency.setValueAtTime(slide ? 160 : 210, t);
    k.frequency.exponentialRampToValueAtTime(90, t + 0.06);
    kg.gain.setValueAtTime(1e-4, t);
    kg.gain.linearRampToValueAtTime(0.03 * h, t + 0.004);
    kg.gain.exponentialRampToValueAtTime(1e-4, t + 0.08);
    k.connect(kg);
    kg.connect(mg);
    k.start(t);
    k.stop(t + 0.1);
  };
  const chime = () => {
    const t = AC.currentTime;
    [523.3, 659.3, 784, 1046.5].forEach((f, i) => {
      const o = AC.createOscillator(),
        g = AC.createGain(),
        T = t + i * 0.12;
      o.type = "sine";
      o.frequency.value = f;
      g.gain.setValueAtTime(1e-4, T);
      g.gain.linearRampToValueAtTime(0.045, T + 0.02);
      g.gain.exponentialRampToValueAtTime(1e-4, T + 1.4);
      o.connect(g);
      g.connect(mg);
      o.start(T);
      o.stop(T + 1.5);
    });
    for (let i = 0; i < 6; i++)
      setTimeout(() => {
        try {
          card(700, 0.05);
        } catch (e) {}
      }, i * 70);
  };
  const P = (f, d, w) => setTimeout(() => _s(f, d), w || 0);
  sfx = function (e = 520, t = 0.25) {
    try {
      if (cur === "solitaire" && !document.querySelector(".vzf.hub")) {
        if (t >= 0.5) [523, 659, 784, 1047].forEach((f, i) => P(f, 0.4, i * 110));
        else if (typeof unCs === "function") {
          t <= 0.05 ? unCs("slide", 0) : (unCs("slide", 0), unCs("place", 70));
        }
        return;
      }
    } catch (x) {}
    return _s.apply(this, arguments);
  };
})();
