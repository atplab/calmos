(() => {
  /* Transitions v2 : salle d'arcade (canvas rétro) et jeux de cartes (distribution douce) */
  const css = document.createElement("style");
  css.textContent = `.trv{position:fixed;inset:0;z-index:99998;pointer-events:none}.trv canvas{width:100%;height:100%;display:block}.trv.crt::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.28) 0 2px,transparent 2px 4px),radial-gradient(120% 90% at 50% 50%,transparent 60%,rgba(0,0,0,.6));pointer-events:none;animation:trvF 2.1s forwards}@keyframes trvF{0%,80%{opacity:1}100%{opacity:0}}`;
  document.head.appendChild(css);
  const mk = (c) => {
    const o = document.createElement("div");
    o.className = "trv " + (c || "");
    const cv = document.createElement("canvas"),
      d = Math.min(2, devicePixelRatio || 1),
      W = innerWidth,
      H = innerHeight;
    cv.width = W * d;
    cv.height = H * d;
    o.appendChild(cv);
    document.body.appendChild(o);
    const x = cv.getContext("2d");
    x.scale(d, d);
    return { o, x, W, H };
  };
  const S = (f, v, t) => {
    try {
      setTimeout(() => sfx(f, v), t || 0);
    } catch (e) {}
  };
  /* ---------- Salle d'arcade ---------- */
  const INV0 = [
    [
      "..1....1..",
      "...1..1...",
      "..111111..",
      ".11.11.11.",
      "1111111111",
      "1.111111.1",
      "1.1....1.1",
      "...11.11..",
    ],
    [
      "...1111...",
      ".11111111.",
      "1111111111",
      "111..1..11",
      "1111111111",
      "..11..11..",
      ".11.11.11.",
      "11......11",
    ],
    ["..111111..", ".11111111.", "11.111.111", "1111111111", "1111111111", ".1.1..1.1.", "1........1"],
  ];
  const arc = () => {
    const { o, x, W, H } = mk("crt"),
      T0 = performance.now(),
      D = 2100,
      cols = ["#ff4fd8", "#22d3ee", "#ffd32a", "#7dffb0"],
      st = [...Array(140)].map(() => ({ a: Math.random() * 6.28, r: Math.random(), s: 0.3 + Math.random() })),
      BS = Math.max(18, Math.round(Math.min(W, H) / 18)),
      blocks = [];
    for (let yy = 0; yy < H; yy += BS)
      for (let xx = 0; xx < W; xx += BS) blocks.push([xx, yy, Math.random()]);
    S(140, 0.2);
    S(70, 0.15, 60);
    S(1600, 0.06, 520);
    S(2100, 0.08, 600);
    S(900, 0.05, 680);
    [523, 659, 784, 1046, 1318].forEach((f, i) => S(f, 0.07, 900 + i * 70));
    S(1568, 0.12, 1300);
    const font = (s) => `900 ${s}px ui-monospace,Menlo,Consolas,monospace`;
    const fr = (t) => {
      const e = t - T0,
        p = e / D;
      if (e > D) {
        o.remove();
        return;
      }
      requestAnimationFrame(fr);
      x.globalCompositeOperation = "source-over";
      x.clearRect(0, 0, W, H);
      /* allumage cathodique */
      if (e < 260) {
        x.fillStyle = "#000";
        x.fillRect(0, 0, W, H);
        const k = e / 260,
          h = Math.max(2, H * Math.pow(k, 3)),
          w = W * Math.min(1, k * 3);
        x.fillStyle = "#eaffff";
        x.shadowColor = "#7ef0ff";
        x.shadowBlur = 30;
        x.fillRect((W - w) / 2, (H - h) / 2, w, h);
        x.shadowBlur = 0;
        return;
      }
      x.fillStyle = "#05020c";
      x.fillRect(0, 0, W, H);
      /* étoiles qui foncent */
      const cx = W / 2,
        cy = H * 0.42;
      st.forEach((q) => {
        q.r += q.s * 0.012;
        if (q.r > 1.2) q.r = 0.02;
        const R = q.r * q.r * Math.max(W, H),
          px = cx + Math.cos(q.a) * R,
          py = cy + Math.sin(q.a) * R;
        x.strokeStyle = `rgba(200,240,255,${Math.min(1, q.r)})`;
        x.lineWidth = 1 + q.r * 2;
        x.beginPath();
        x.moveTo(px, py);
        x.lineTo(cx + Math.cos(q.a) * R * 0.92, cy + Math.sin(q.a) * R * 0.92);
        x.stroke();
      });
      /* soleil rétro et grille */
      const hz = H * 0.68,
        sr = Math.min(W, H) * 0.2;
      x.save();
      x.beginPath();
      x.arc(cx, hz - sr * 0.15, sr, Math.PI, 0);
      x.clip();
      const g = x.createLinearGradient(0, hz - sr * 1.2, 0, hz);
      g.addColorStop(0, "#ffd32a");
      g.addColorStop(1, "#ff4fd8");
      x.fillStyle = g;
      x.fillRect(cx - sr, hz - sr * 1.2, sr * 2, sr * 1.2);
      x.fillStyle = "#05020c";
      for (let k = 0; k < 6; k++)
        x.fillRect(cx - sr, hz - sr * 0.15 - k * sr * 0.16 - ((e / 40) % sr) * 0.16, sr * 2, 2 + k * 0.8);
      x.restore();
      x.fillStyle = "#0a0418";
      x.fillRect(0, hz, W, H - hz);
      x.strokeStyle = "rgba(255,79,216,.75)";
      x.lineWidth = 1.5;
      for (let k = -14; k <= 14; k++) {
        x.beginPath();
        x.moveTo(cx + k * 14, hz);
        x.lineTo(cx + k * W * 0.18, H);
        x.stroke();
      }
      x.strokeStyle = "rgba(34,211,238,.7)";
      const off = (e / 9) % 40;
      for (let k = 0; k < 14; k++) {
        const y = hz + Math.pow((k * 40 + off) / 560, 2) * (H - hz);
        if (y > H) break;
        x.beginPath();
        x.moveTo(0, y);
        x.lineTo(W, y);
        x.stroke();
      }
      x.shadowColor = "#ff4fd8";
      x.shadowBlur = 14;
      x.strokeStyle = "#ff4fd8";
      x.lineWidth = 2;
      x.beginPath();
      x.moveTo(0, hz);
      x.lineTo(W, hz);
      x.stroke();
      x.shadowBlur = 0;
      /* envahisseurs en pixels qui défilent */
      const sz = Math.max(34, W / 9);
      ["m", "c", "l"].forEach((kk, r) => {
        let im = null;
        try {
          im = window.ZGSPR && ZGSPR(kk);
        } catch (_) {}
        for (let k = 0; k < 6; k++) {
          const px = ((k * W) / 5 + e * (0.09 + r * 0.03) * (r % 2 ? -1 : 1)) % (W + 120),
            X = (r % 2 ? W - px : px) - 60,
            Y = H * 0.08 + r * sz * 0.9 + 50 + Math.sin(e / 160 + k) * 3;
          if (im) {
            const w = sz,
              hh = (sz * im.h) / im.w;
            x.drawImage(im, X, Y, w, hh);
          } else {
            x.fillStyle = cols[(r + k) % 4];
            x.fillRect(X, Y, sz * 0.6, sz * 0.4);
          }
        }
      });
      /* guirlande d'ampoules qui chassent */
      const n = Math.floor(((W + H) * 2) / 26),
        bi = Math.floor(e / 70);
      for (let k = 0; k < n; k++) {
        const d = k * 26,
          L = 2 * (W + H);
        let bx, by;
        if (d < W) {
          bx = d;
          by = 8;
        } else if (d < W + H) {
          bx = W - 8;
          by = d - W;
        } else if (d < 2 * W + H) {
          bx = W - (d - W - H);
          by = H - 8;
        } else {
          bx = 8;
          by = H - (d - 2 * W - H);
        }
        const on = (k + bi) % 3 === 0;
        x.fillStyle = on ? "#fff3b0" : "#5a3a20";
        on && ((x.shadowColor = "#ffd32a"), (x.shadowBlur = 12));
        x.beginPath();
        x.arc(bx, by, 4, 0, 7);
        x.fill();
        x.shadowBlur = 0;
      }
      /* HUD score */
      x.font = font(Math.max(12, W / 30));
      x.textAlign = "left";
      x.fillStyle = "#ff4fd8";
      x.fillText("1UP", 22, 40);
      x.fillStyle = "#fff";
      x.fillText(String(Math.min(999999, Math.floor(e * 420))).padStart(6, "0"), 22, 40 + W / 26);
      x.textAlign = "right";
      x.fillStyle = "#22d3ee";
      x.fillText("HI-SCORE", W - 22, 40);
      x.fillStyle = "#fff";
      x.fillText("999999", W - 22, 40 + W / 26);
      /* néon ARCADE qui s'allume en grésillant */
      const fs = Math.min(W * 0.17, 110),
        flick = e < 500 ? (Math.random() < 0.5 ? 0.15 : 1) : e < 620 && Math.random() < 0.3 ? 0.3 : 1;
      x.globalAlpha = flick;
      x.font = font(fs);
      x.textAlign = "center";
      x.lineWidth = 3;
      x.shadowColor = "#ff4fd8";
      x.shadowBlur = 30;
      x.fillStyle = "#ffe9fb";
      x.fillText("ARCADE", cx + (Math.random() - 0.5) * (e < 600 ? 6 : 0), H * 0.4);
      x.shadowBlur = 0;
      x.fillStyle = "rgba(34,211,238,.6)";
      x.fillText("ARCADE", cx - 3, H * 0.4);
      x.globalAlpha = flick * 0.9;
      x.fillStyle = "#ffe9fb";
      x.fillText("ARCADE", cx, H * 0.4);
      x.globalAlpha = 1;
      /* INSERT COIN + pièce qui tombe dans la fente */
      const sy = H * 0.4 + fs * 0.4;
      if (Math.floor(e / 220) % 2) {
        x.font = font(fs * 0.24);
        x.fillStyle = "#ffd32a";
        x.shadowColor = "#ffb400";
        x.shadowBlur = 10;
        x.fillText(e < 1250 ? "INSERT COIN" : "PLAYER 1 START", cx, sy + fs * 0.35);
        x.shadowBlur = 0;
      }
      const sl = [cx - 14, sy + fs * 0.55];
      x.fillStyle = "#1a1028";
      x.fillRect(sl[0], sl[1], 28, 40);
      x.fillStyle = "#ff3b3b";
      x.fillRect(sl[0] + 11, sl[1] + 8, 6, 24);
      if (e > 380 && e < 760) {
        const k = (e - 380) / 380,
          cyy = sl[1] - 120 + k * 130;
        x.save();
        x.translate(cx, cyy);
        x.scale(Math.cos(e / 40), 1);
        x.fillStyle = "#ffd32a";
        x.shadowColor = "#ffd32a";
        x.shadowBlur = 16;
        x.beginPath();
        x.arc(0, 0, 13, 0, 7);
        x.fill();
        x.fillStyle = "#e2a82a";
        x.beginPath();
        x.arc(0, 0, 8, 0, 7);
        x.fill();
        x.restore();
        x.shadowBlur = 0;
      }
      if (e > 740 && e < 900) {
        x.fillStyle = `rgba(255,240,180,${(900 - e) / 400})`;
        x.fillRect(0, 0, W, H);
      }
      /* dissolution en gros pixels pour révéler la salle */
      if (p > 0.68) {
        const k = (p - 0.68) / 0.32;
        x.globalCompositeOperation = "destination-out";
        blocks.forEach(([bx, by, r]) => {
          if (r < k * 1.15) x.fillRect(bx, by, BS + 1, BS + 1);
        });
        x.globalCompositeOperation = "source-over";
      }
    };
    requestAnimationFrame(fr);
    return 1350;
  };
  /* ---------- Jeux de cartes ---------- */
  const crd = () => {
    const { o, x, W, H } = mk(),
      T0 = performance.now(),
      D = 2200,
      cx = W / 2,
      cy = H / 2,
      cw = Math.min(W * 0.2, 110),
      ch = cw * 1.4,
      R = [
        ["A", "♠", 0],
        ["K", "♥", 1],
        ["Q", "♦", 1],
        ["J", "♣", 0],
        ["10", "♥", 1],
        ["9", "♠", 0],
        ["8", "♦", 1],
        ["7", "♣", 0],
        ["6", "♥", 1],
        ["5", "♠", 0],
        ["4", "♦", 1],
        ["3", "♣", 0],
      ],
      N = 24;
    const cards = [...Array(N)].map((_, i) => {
      const a = -Math.PI / 2 + (i / N) * Math.PI * 2 + 0.3,
        ring = i % 2 ? 0.42 : 0.3,
        f = R[i % R.length];
      return {
        i,
        tx: cx + Math.cos(a) * Math.min(W, H) * ring * (W > H ? 1.4 : 1),
        ty: cy + Math.sin(a) * Math.min(W, H) * ring * 1.1,
        tr: a + Math.PI / 2 + (Math.random() - 0.5) * 0.4,
        f,
        up: i % 3 !== 2,
        dl: i * 28,
      };
    });
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
      sm = (t) => Math.max(0, Math.min(1, t));
    const card = (c, X, Y, r, s, flip) => {
      x.save();
      x.translate(X, Y);
      x.rotate(r);
      x.scale(s * Math.max(0.04, Math.abs(flip)), s);
      x.shadowColor = "rgba(0,0,0,.35)";
      x.shadowBlur = 14;
      x.shadowOffsetY = 6;
      x.fillStyle = "#fff";
      x.beginPath();
      x.roundRect(-cw / 2, -ch / 2, cw, ch, cw * 0.1);
      x.fill();
      x.shadowColor = "transparent";
      if (flip < 0 || !c.up) {
        x.fillStyle = "#2e6b52";
        x.beginPath();
        x.roundRect(-cw / 2 + 4, -ch / 2 + 4, cw - 8, ch - 8, cw * 0.08);
        x.fill();
        x.strokeStyle = "rgba(255,255,255,.35)";
        x.lineWidth = 1.5;
        for (let k = -6; k < 8; k++) {
          x.beginPath();
          x.moveTo(-cw / 2 + 4 + k * cw * 0.14, -ch / 2 + 4);
          x.lineTo(-cw / 2 + 4 + k * cw * 0.14 + ch * 0.4, ch / 2 - 4);
          x.stroke();
        }
        x.fillStyle = "#f2d68a";
        x.beginPath();
        x.arc(0, 0, cw * 0.16, 0, 7);
        x.fill();
      } else {
        const col = c.f[2] ? "#c8394a" : "#24304e";
        x.fillStyle = col;
        x.font = `700 ${cw * 0.26}px Georgia,serif`;
        x.textAlign = "left";
        x.fillText(c.f[0], -cw / 2 + cw * 0.1, -ch / 2 + cw * 0.32);
        x.font = `${cw * 0.5}px Georgia,serif`;
        x.textAlign = "center";
        x.fillText(c.f[1], 0, ch * 0.12);
      }
      x.restore();
    };
    for (let k = 0; k < N; k++) S(1500 + Math.random() * 600, 0.025, 300 + k * 28);
    S(523, 0.05, 1100);
    S(659, 0.05, 1250);
    S(784, 0.06, 1400);
    const fr = (t) => {
      const e = t - T0;
      if (e > D) {
        o.remove();
        return;
      }
      requestAnimationFrame(fr);
      x.clearRect(0, 0, W, H);
      const bg = sm(e / 350) * (1 - sm((e - 1650) / 450));
      x.fillStyle = `rgba(14,64,46,${0.93 * bg})`;
      x.fillRect(0, 0, W, H);
      const gr = x.createRadialGradient(cx, cy, 0, cx, cy, Math.max(W, H) * 0.7);
      gr.addColorStop(0, `rgba(60,140,100,${0.35 * bg})`);
      gr.addColorStop(1, "rgba(0,0,0,0)");
      x.fillStyle = gr;
      x.fillRect(0, 0, W, H);
      /* le paquet se mélange au centre */
      if (e < 520) {
        for (let k = 0; k < 8; k++) {
          const w = Math.sin(e / 60 + k) * cw * 0.35 * sm(e / 200) * (1 - sm((e - 380) / 140));
          card({ up: 0 }, cx + (k % 2 ? w : -w), cy - k * 1.2, (k % 2 ? 0.06 : -0.06) * sm(e / 200), 1, -1);
        }
        return;
      }
      /* distribution en spirale douce, les cartes se retournent en arrivant */
      cards.forEach((c) => {
        const k = ease(sm((e - 520 - c.dl) / 650)),
          out = ease(sm((e - 1500 - c.dl * 0.5) / 600));
        const X = cx + (c.tx - cx) * k + (c.tx - cx) * out * 1.6,
          Y = cy + (c.ty - cy) * k + (c.ty - cy) * out * 1.6 - out * H * 0.15,
          r = c.tr * k + out * 0.6,
          fl = k < 0.6 ? -1 : Math.cos((1 - (k - 0.6) / 0.4) * Math.PI);
        x.globalAlpha = 1 - out;
        card(c, X, Y, r, 0.8 + 0.2 * k, fl);
        x.globalAlpha = 1;
      });
    };
    requestAnimationFrame(fr);
    return 1500;
  };
  /* ---------- Salle de jeux : la salle est dans le noir, la lampe s’allume doucement sur la dernière table, puis l’interface apparaît ---------- */
  const gmr = () => {
    const { o, x, W, H } = mk(),
      T0 = performance.now(),
      D = 2300;
    document.body.classList.add("sjin");
    setTimeout(() => document.body.classList.remove("sjin"), 1500);
    S(196, 0.03, 250);
    S(294, 0.025, 700);
    S(392, 0.02, 1100);
    const fr = (t) => {
      const e = t - T0;
      if (e > D) {
        o.remove();
        return;
      }
      requestAnimationFrame(fr);
      x.clearRect(0, 0, W, H);
      const sm2 = (v) => {
          v = Math.max(0, Math.min(1, v));
          return v * v * (3 - 2 * v);
        },
        L = sm2((e - 250) / 900),
        out = sm2((e - 1300) / 1000),
        fl = e > 250 && e < 420 ? (Math.sin(e / 18) > 0.2 ? 1 : 0.5) : 1;
      x.fillStyle = `rgba(3,8,7,${0.97 * (1 - out)})`;
      x.fillRect(0, 0, W, H);
      x.globalCompositeOperation = "destination-out";
      const cx = W / 2,
        cy = H * 0.48,
        g = x.createRadialGradient(cx, H * 0.05, 10, cx, cy, Math.max(W, H) * 0.75);
      g.addColorStop(0, `rgba(0,0,0,${L * fl})`);
      g.addColorStop(0.55, `rgba(0,0,0,${0.85 * L * fl})`);
      g.addColorStop(1, "rgba(0,0,0,0)");
      x.fillStyle = g;
      x.beginPath();
      x.moveTo(cx - W * 0.1, 0);
      x.lineTo(cx + W * 0.1, 0);
      x.lineTo(cx + W * 0.75, H);
      x.lineTo(cx - W * 0.75, H);
      x.fill();
      x.globalCompositeOperation = "source-over";
      const w = x.createRadialGradient(cx, H * 0.08, 4, cx, H * 0.3, H * 0.5);
      w.addColorStop(0, `rgba(255,226,150,${0.18 * L * (1 - out)})`);
      w.addColorStop(1, "rgba(255,226,150,0)");
      x.fillStyle = w;
      x.fillRect(0, 0, W, H);
    };
    requestAnimationFrame(fr);
    return 0;
  };
  setTimeout(() => {
    const _o = act.open;
    act.open = function (e) {
      const home = !!document.querySelector(".tile") && !document.querySelector(".trv,.trx");
      const fx = home && (e === "sallearcade" ? arc : e === "sallejeux" ? gmr : null);
      if (!fx) return _o.apply(this, arguments);
      const a = arguments,
        t = this,
        d = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : fx();
      setTimeout(() => _o.apply(t, a), d);
    };
  }, 600);
})();
