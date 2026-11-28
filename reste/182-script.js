(() => {
  try {
    let PAN = 0,
      last = null,
      dr = null,
      mv = 0;
    const $$ = (q) => document.querySelector(q);
    const _mp = window.sMapSVG;
    window.sMapSVG = function (e, t) {
      const r = _mp.apply(this, arguments);
      try {
        SGY.p = e.p;
      } catch (x) {}
      return r;
    };
    const _sw = window.sWalk;
    window.sWalk = function () {
      PAN = 0;
      return _sw.apply(this, arguments);
    };
    const geo = () => {
      const a = $$("#stg"),
        n = $$("#smv");
      if (!a || !n || typeof SGY === "undefined" || !SGY || !SGY.NXY) return null;
      const i = a.clientHeight,
        r = a.clientWidth / 390,
        l = (SGY.R * SH + 440) * r,
        t = SGY.cur[1],
        c0 = Math.max(0, Math.min(l - i + 230, (t - SGY.vb0) * r - 0.46 * i)),
        cHi = Math.max(c0, l - i + 40),
        p = SGY.p | 0,
        fog = p + 10 < SMX;
      let L = Math.min(p + 10, SGY.NXY.length - 1);
      while (L > 0 && !SGY.NXY[L]) L--;
      const yl = SGY.NXY[L] ? (SGY.NXY[L][1] - SGY.vb0) * r : 0,
        cLo = fog ? Math.max(0, Math.min(c0, yl - 0.42 * i)) : 0;
      return { a, n, i, r, c0, cHi, cLo, fog, yl };
    };
    let PZ = 0,
      pzT = 0,
      PL = [];
    const pz = (on) => {
      clearTimeout(pzT);
      if (on) {
        if (!PZ) {
          PZ = 1;
          const n = $$("#smv");
          if (n) {
            for (const a of document.getAnimations()) {
              const t = a.effect && a.effect.target;
              t && a.playState === "running" && n.contains(t) && PL.push(a);
            }
            for (const a of PL) a.pause();
          }
        }
      } else
        pzT = setTimeout(() => {
          PZ = 0;
          for (const a of PL)
            try {
              a.play();
            } catch (e) {}
          PL = [];
        }, 450);
    };
    const CU = { m: new Map(), lc: -1e9, hn: 0, hd: 0 };
    const cull = (g, c) => {
      const i = g.i;
      if (Math.abs(c - CU.lc) < 0.1 * i && !CU.nw) return;
      CU.nw = 0;
      const nr = g.n.getBoundingClientRect(),
        o = -nr.top + g.a.getBoundingClientRect().top;
      g.n.querySelectorAll("svg.smd,svg.smn").forEach((sv) => {
        let u = CU.m.get(sv);
        if (!u) {
          const sr = sv.getBoundingClientRect();
          if (!sr.height) {
            CU.nw = 1;
            return;
          }
          u = [];
          const w = (el) => {
            for (const k of el.children) {
              const t = k.tagName.toLowerCase();
              if (
                t === "defs" ||
                t === "style" ||
                t === "lineargradient" ||
                t === "radialgradient" ||
                t === "filter" ||
                t === "clippath" ||
                t === "mask" ||
                t === "pattern" ||
                t === "symbol"
              )
                continue;
              const b = k.getBoundingClientRect();
              if (!b.height && !b.width) continue;
              if (b.height > 0.5 * i && k.children.length) w(k);
              else if (b.height <= 1.5 * i) u.push([k, b.top - nr.top, b.bottom - nr.top, 1]);
            }
          };
          w(sv);
          CU.m.set(sv, u);
          for (const [k] of CU.m) k.isConnected || CU.m.delete(k);
        }
        const off = sv.classList.contains("smn") ? CU.hn : CU.hd,
          lo = c - 1.3 * i,
          hi = c + 2.3 * i;
        for (const e of u) {
          const v = !off && e[2] > lo && e[1] < hi ? 1 : 0;
          if (v !== e[3]) {
            e[3] = v;
            e[0].style.display = v ? "" : "none";
          }
        }
      });
      CU.lc = c;
    };
    setInterval(() => {
      document.getElementById("stg") && !document.hidden && sch();
    }, 2500);
    const apply = () => {
      const g = geo();
      if (!g) return;
      if (last !== SGY) {
        last = SGY;
        PAN = 0;
      }
      const c = Math.max(g.cLo, Math.min(g.cHi, g.c0 + PAN));
      PAN = c - g.c0;
      {
        const nw = Date.now();
        if (nw - (apply.ts || 0) > 1500) {
          apply.ts = nw;
          const sun = parseFloat(getComputedStyle(g.a).getPropertyValue("--sun")),
            d = g.n.querySelector("svg.smd"),
            nn = g.n.querySelector("svg.smn");
          if (d && nn && !isNaN(sun)) {
            const hn = sun > 0.995,
              hd = sun < 0.005;
            nn.style.visibility = hn ? "hidden" : "";
            d.style.visibility = hd ? "hidden" : "";
            if (CU.hn !== hn || CU.hd !== hd) {
              CU.hn = hn;
              CU.hd = hd;
              CU.lc = -1e9;
            }
          }
        }
      }
      cull(g, c);
      if (Math.abs(c - (apply.lc || 0)) > 0.5) {
        apply.lc = c;
        pz(1);
        dr || pz(0);
      }
      g.n.style.transform = "translate3d(0," + (-c).toFixed(1) + "px,0)";
      g.n.querySelectorAll(".smfog").forEach((x) => x.remove());
      let f = g.a.querySelector(".smfog");
      if (g.fog) {
        if (!f) {
          f = document.createElement("div");
          f.className = "smfog";
          f.setAttribute("aria-hidden", "true");
          f.innerHTML =
            '<i class="l ln"></i><i class="l ld"></i><i class="fd fdn"></i><i class="fd fdd"></i><svg class="wv" viewBox="0 0 400 64" preserveAspectRatio="none" aria-hidden="true"><path class="n" d="M0 0V26Q50 58 100 26T200 26T300 26T400 26V0Z"/><path class="d" d="M0 0V26Q50 58 100 26T200 26T300 26T400 26V0Z"/></svg><svg class="wv b" viewBox="0 0 400 64" preserveAspectRatio="none" aria-hidden="true"><path class="n" d="M0 0V26Q50 58 100 26T200 26T300 26T400 26V0Z"/><path class="d" d="M0 0V26Q50 58 100 26T200 26T300 26T400 26V0Z"/></svg>';
          g.a.appendChild(f);
        }
        f.style.transform = "translate3d(0," + (g.yl - c - 110 - 1e3).toFixed(1) + "px,0)";
      } else f && f.remove();
      let v = g.a.querySelector(".smav");
      if (g.fog) {
        if (!v) {
          v = document.createElement("div");
          v.className = "smav";
          v.setAttribute("aria-hidden", "true");
          v.innerHTML = "À venir !<small>Continue ton voyage</small>";
          g.a.appendChild(v);
        }
        v.style.opacity = Math.max(0, Math.min(1, 1 - (c - g.cLo) / 300)).toFixed(2);
      } else v && v.remove();
      let b = g.a.querySelector(".smrc");
      if (!b) {
        b = document.createElement("button");
        b.className = "smrc";
        b.textContent = "⌖ Revenir";
        b.onclick = (e) => {
          e.stopPropagation();
          PAN = 0;
          apply();
        };
        g.a.appendChild(b);
      }
      b.classList.toggle("on", Math.abs(PAN) > 40);
    };
    let q = 0;
    const sch = () => {
      q ||
        (q = requestAnimationFrame(() => {
          q = 0;
          try {
            apply();
          } catch (x) {}
        }));
    };
    const _pl = window.sPlace;
    window.sPlace = function () {
      const r = _pl.apply(this, arguments);
      try {
        apply();
      } catch (x) {}
      return r;
    };
    let vel = 0,
      lp = 0,
      lt = 0,
      IN = 0;
    const inert = () => {
      IN = 1;
      let t0 = performance.now();
      const f = () => {
        if (!IN) return;
        const n = performance.now(),
          dt = Math.min(40, n - t0);
        t0 = n;
        const p0 = PAN;
        PAN += vel * dt;
        try {
          apply();
        } catch (x) {
          IN = 0;
          return;
        }
        vel *= Math.exp(-dt / 380);
        if (Math.abs(vel) < 0.03 || Math.abs(PAN - p0) < 0.05) {
          IN = 0;
          return;
        }
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    };
    document.addEventListener(
      "pointerdown",
      (e) => {
        IN = 0;
        const a = e.target.closest && e.target.closest("#stg");
        mv = 0;
        if (!a || e.target.closest(".smrc,.shb,.shc,.sbk")) {
          dr = null;
          return;
        }
        dr = { y: e.clientY, p: PAN };
        pz(1);
        mv = 0;
        vel = 0;
        lp = PAN;
        lt = performance.now();
      },
      { passive: true },
    );
    document.addEventListener(
      "pointermove",
      (e) => {
        if (!dr) return;
        const dy = e.clientY - dr.y;
        if (Math.abs(dy) > 9) mv = 1;
        if (mv) {
          PAN = dr.p - dy;
          const nn = performance.now();
          if (lt) {
            vel = 0.7 * vel + 0.3 * ((PAN - lp) / Math.max(1, nn - lt));
          }
          lp = PAN;
          lt = nn;
          sch();
        }
      },
      { passive: true },
    );
    const up = () => {
      const had = dr && mv;
      dr && pz(0);
      dr = null;
      mv = 0;
      if (had) {
        if (performance.now() - lt < 130 && Math.abs(vel) > 0.05) inert();
        const k = (e) => {
          e.stopPropagation();
          e.preventDefault();
        };
        document.addEventListener("click", k, { capture: !0, once: !0 });
        setTimeout(() => document.removeEventListener("click", k, !0), 60);
      }
    };
    document.addEventListener("pointerup", up, { passive: true });
    document.addEventListener(
      "pointercancel",
      () => {
        dr = null;
        mv = 0;
      },
      { passive: true },
    );
    addEventListener("blur", () => {
      dr = null;
      mv = 0;
    });
    document.addEventListener(
      "wheel",
      (e) => {
        if (!e.target.closest || !e.target.closest("#stg")) return;
        PAN += e.deltaY;
        sch();
      },
      { passive: true },
    );
  } catch (e) {}
})();
