(() => {
  if (typeof aquaScreen !== "function") return;
  const MD = ["a", "b", "c", "g", "g2"],
    NM = { a: "Aquarium", b: "Aquarium 2", c: "Aquarium 3", g: "Jardin", g2: "Jardin 2" },
    md = () => {
      const v = st.get("aq:md", "a");
      return MD.includes(v) ? v : "a";
    },
    gd = () => {
      const m = md();
      return m === "g" || m === "g2";
    };
  const AKF = (x) => (x === "b" ? "aq2" : x === "c" ? "aq3" : "aq"),
    AK = () => ($(".aqfs") ? AKF(md()) : "aq");
  window.AQG2 = md() === "g2";
  {
    const _rd = aqRead,
      _sv = aqSave;
    aqRead = function () {
      const k = AK();
      if (k === "aq") return _rd();
      const e = st.get(k, null);
      if (e && e.f && typeof e.f === "object") {
        e.d = e.d || {};
        e.p = e.p || {};
        e.pl = e.pl || {};
        e.ws = e.ws || ["nuit"];
        e.w = e.w || "nuit";
        if (!(e.fc > 0 && e.wc > 0)) {
          const t = Date.now();
          e.fc > 0 || (e.fc = t);
          e.wc > 0 || (e.wc = t);
          st.set(k, e);
        }
        return e;
      }
      const t = Date.now();
      return { f: {}, d: {}, p: {}, ws: ["nuit"], w: "nuit", at: 0, fc: t, wc: t };
    };
    aqSave = function (e) {
      const k = AK();
      if (k === "aq") return _sv(e);
      e.at = Date.now();
      st.set(k, e);
    };
  }
  const vv = (k, K, F) => {
      const e = st.get(k, null);
      return e && e[K]
        ? K === "f"
          ? FISH.reduce((a, t) => a + (e.f[t.id] ? t.p || 0 : 0), 0)
          : DECO.reduce((a, t) => a + (e.d[t.id] ? t.p || 0 : 0), 0)
        : 0;
    },
    vf = (k) => vv(k, "f"),
    vd = (k) => vv(k, "d");
  const nf = (k) => {
      const e = st.get(k, null);
      return e && e.f ? Object.keys(e.f).length : 0;
    },
    A1 = () => {
      const e = st.get("aq", null);
      return e && e.f ? e : {};
    };
  const n1 = () => Object.keys(A1().pl || {}).length,
    ok2 = () => n1() >= 7,
    okb = () => UNL() || nf("aq") >= 6 || nf("aq2") > 0,
    okc = () => UNL() || (vf("aq2") > 3125 && vd("aq2") > 1715) || nf("aq3") > 0;
  const OK = { b: okb, c: okc, g2: ok2 },
    SH = () => MD.filter((v) => !OK[v] || OK[v]() || v === md()),
    sg = () =>
      SH()
        .map((v) => v + (OK[v] && !OK[v]() ? "x" : ""))
        .join();
  const IC = {
    a: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c2.5-4.5 7-6 11.5-3.2L19.5 6v12l-5-2.8C10 18 5.5 16.5 3 12z"/></svg>',
    g: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21v-8"/><path d="M12 13c0-4 3-7 7-7 0 4-3 7-7 7z"/><path d="M12 15c0-3-2.5-5.5-6-5.5 0 3 2.5 5.5 6 5.5z"/></svg>',
    l: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
    s: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg>',
    p: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21h10M9 21l-1-6h8l-1 6"/><path d="M12 15V9"/><path d="M12 9c0-3 2-5 5-5 0 3-2 5-5 5zM12 11c0-2.4-1.8-4-4.5-4 0 2.4 1.8 4 4.5 4z"/></svg>',
    h: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="10" r="5"/><circle cx="17" cy="15" r="3.5"/><path d="M7 8.5a2 2 0 0 1 2-1.5"/></svg>',
  };
  const swH = () => {
    const m = md();
    return SH()
      .map((v) => {
        const lk = OK[v] && !OK[v]();
        return `<button role="tab" data-a="aqmd" data-v="${v}" aria-selected="${v === m}"${lk ? ' class="lk"' : ""}>${lk ? IC.l : v === "g" || v === "g2" ? IC.g : IC.a}<em class="aqn">${{ a: 1, b: 2, c: 3, g: 1, g2: 2 }[v]}</em><span>${NM[v]}</span></button>`;
      })
      .join("");
  };
  const cls = () => {
    const fs = $(".aqfs");
    if (!fs) return;
    fs.classList.toggle("gdn", gd());
    fs.classList.toggle("g2", md() === "g2");
    fs.classList.toggle("t2", md() === "b");
    fs.classList.toggle("t3", md() === "c");
  };
  const ui = () => {
    const fs = $(".aqfs");
    if (!fs || fs.querySelector(".aqsw")) return;
    cls();
    fs.insertAdjacentHTML(
      "beforeend",
      `<div class="aqsw aqsw3" role="tablist">${swH()}</div><div class="gdst"><b id="gdt">Jardin aquatique</b><small id="gdn"></small></div><button class="aqrb aqinv gdinv" data-a="gdmine"><span class="aqri">${IC.p}</span><b>Mes plantes</b></button><div class="aqbar gdbar"><button class="aqrb" data-a="gdshop"><span class="aqri">${IC.s}</span><b>Boutique</b></button><button class="aqfeedb gdfeed" id="gdb" data-a="gdfeed"></button><button class="aqrb gdh" data-a="gdall"><span class="aqri">${IC.h}</span><b>Récolter</b></button></div>`,
    );
    ttl();
    gst();
    swipe(fs);
  };
  const ttl = () => {
    const h = $(".aqfs .aqh1");
    if (h && h.firstChild && h.firstChild.nodeType === 3) h.firstChild.textContent = NM[md()];
    const t = $("#gdt");
    t && (t.textContent = md() === "g2" ? "Lagon de corail" : "Jardin aquatique");
  };
  const gst = () => {
    const e = aqRead(),
      t = Date.now(),
      o = aqpO(e),
      L = AQPT.filter((P) => o[P.id]),
      n = L.filter((P) => aqpCan(o[P.id], t)),
      hg = L.filter((P) => aqpHg(o[P.id], t)).length,
      bb = L.reduce((a, P) => a + (window.aqpBc ? aqpBc(o[P.id], P, t) : 0), 0),
      s = $("#gdn"),
      b = $("#gdb"),
      h = $(".gdh");
    if (s)
      s.textContent = L.length
        ? L.length +
          " plante" +
          (L.length > 1 ? "s" : "") +
          (bb ? " · " + bb + " bulle" + (bb > 1 ? "s" : "") : "") +
          (hg ? " · " + hg + " affamée" + (hg > 1 ? "s" : "") : "")
        : "Achète ta première plante à la boutique";
    if (b) {
      let nx = Infinity;
      L.forEach((P) => {
        nx = Math.min(nx, o[P.id].f + AQPD - AQPW - t);
      });
      b.classList.toggle("uf", !!hg);
      b.disabled = !n.length;
      b.textContent = !L.length
        ? "Nourrir"
        : n.length
          ? "Nourrir" + (n.length > 1 ? " (" + n.length + ")" : "")
          : "Dans " + aqFmtD(Math.max(6e4, nx));
    }
    if (h) {
      h.classList.toggle("on", bb > 0);
      h.dataset.n = bb || "";
    }
    const sw = $(".aqsw3");
    if (sw && sw.dataset.sg !== sg()) {
      sw.dataset.sg = sg();
      sw.innerHTML = swH();
    }
  };
  const set = (v) => {
    const fs = $(".aqfs");
    if (!fs) return;
    const m = md();
    if (m === v) return;
    if (OK[v] && !OK[v]()) {
      mt = "m-aq";
      msg(
        v === "g2"
          ? "🔒 Jardin 2 : possède 7 plantes dans le Jardin pour le débloquer (" + n1() + "/7)."
          : v === "c"
            ? "🔒 Aquarium 3 : dans l’Aquarium 2, dépense plus de 3125 🫧 en poissons (" +
              vf("aq2") +
              ") et plus de 1715 🫧 en décorations (" +
              vd("aq2") +
              ")."
            : "🔒 Aquarium 2 : possède 6 poissons dans l’Aquarium pour le débloquer (" + nf("aq") + "/6).",
      );
      const b = fs.querySelector('.aqsw [data-v="' + v + '"]');
      b && (b.classList.remove("shk"), void b.offsetWidth, b.classList.add("shk"));
      try {
        sfx(220, 0.15);
      } catch (x) {}
      return;
    }
    st.set("aq:md", v);
    window.AQG2 = v === "g2";
    {
      const m0 = $("#m-aq");
      m0 && (m0.textContent = "");
    }
    try {
      aqShut();
    } catch (x) {}
    fs.classList.add("swp");
    cls();
    const sw = fs.querySelector(".aqsw3");
    sw && (sw.innerHTML = swH());
    ttl();
    if ((v !== "a" && m !== "a") || v === "g2" || m === "g2" || AKF(v) !== AKF(m))
      try {
        aquaRefresh();
      } catch (x) {}
    gst();
    try {
      sfx(v === "a" ? 440 : v === "g" ? 520 : 620, 0.12);
    } catch (x) {}
    setTimeout(() => fs.classList.remove("swp"), 650);
    try {
      aqPanel();
    } catch (x) {}
  };
  const swipe = (fs) => {
    let x0 = 0,
      y0 = 0,
      ok = 0;
    fs.addEventListener(
      "touchstart",
      (e) => {
        const t = e.touches[0];
        ok = !aqEd && !e.target.closest(".aqsh,.aqbar,.aqsw,.plb") && e.touches.length === 1;
        x0 = t.clientX;
        y0 = t.clientY;
      },
      { passive: !0 },
    );
    fs.addEventListener(
      "touchend",
      (e) => {
        if (!ok) return;
        const t = e.changedTouches[0],
          dx = t.clientX - x0,
          dy = t.clientY - y0;
        if (Math.abs(dx) > 80 && Math.abs(dy) < 60) {
          const L = SH(),
            i = L.indexOf(md()) + (dx < 0 ? 1 : -1);
          i >= 0 && i < L.length && set(L[i]);
        }
      },
      { passive: !0 },
    );
  };
  const FX = () => (md() === "g2" ? FX2() : FX1());
  const FX2 = () => {
    let c = "";
    [
      [2, "#ff7aa8", 11, 0],
      [17, "#ffa86b", 8, 1],
      [60, "#c77dff", 9, 2],
      [77, "#ff7aa8", 12, 3],
      [92, "#ffcf6b", 8, 4],
    ].forEach(([x, col, h, k]) => {
      c += `<svg class="gdco" style="left:${x}%;height:${h}%;color:${col};--d:${(6 + (k % 3) * 1.8).toFixed(1)}s;--dl:${-k * 1.1}s" viewBox="0 0 40 60"><path d="M20 60V32M20 46L8 32V18M20 38L32 26V12M20 34V8" stroke="currentColor" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><g fill="currentColor"><circle cx="8" cy="17" r="3.4"/><circle cx="32" cy="11" r="3.4"/><circle cx="20" cy="7" r="3.4"/></g></svg>`;
    });
    let j = "";
    [
      [12, 34, 1.3],
      [50, 26, 1],
      [80, 44, 1.5],
    ].forEach(([x, y, sc], k) => {
      j += `<svg class="gdjf" style="left:${x}%;top:${y}%;--sc:${sc};--d:${8 + k * 2}s;--dl:${-k * 2.7}s;color:${["#ffb3e6", "#b9a6ff", "#ffd0a8"][k]}" viewBox="0 0 30 44"><path d="M3 18C3 5 27 5 27 18Z" fill="currentColor" opacity=".6"/><path d="M8 20q-2 10 2 20M15 20q2 12-1 22M22 20q-2 10 2 18" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".7"/></svg>`;
    });
    let p = "";
    for (let k = 0; k < 14; k++)
      p += `<i style="left:${(k * 7.4 + 5) % 100}%;--d:${10 + (k % 5) * 2}s;--dl:${-k * 1.4}s;--s:${2 + (k % 3)}px"></i>`;
    return `<div class="gdfx" aria-hidden="true"><div class="gdca"></div>${c}${j}<div class="gdmo">${p}</div></div>`;
  };
  const FX1 = () => {
    let w = "";
    [
      [6, 30, 0.9, 0],
      [16, 38, 1.1, 1],
      [30, 26, 0.8, 2],
      [64, 34, 1, 3],
      [78, 40, 1.2, 4],
      [90, 28, 0.9, 5],
    ].forEach(([x, h, s, k]) => {
      w += `<svg class="gdsw" style="left:${x}%;height:${h}%;--d:${(5 + (k % 3) * 1.6).toFixed(1)}s;--dl:${-k * 0.9}s" viewBox="0 0 20 100" preserveAspectRatio="none"><path d="M10 100C4 80 16 62 9 44S14 14 10 0" stroke="currentColor" stroke-width="${(3 * s).toFixed(1)}" fill="none" stroke-linecap="round"/><path d="M10 70q-7 -4 -8 -12M9 46q7 -3 9 -11M11 24q-6 -3 -7 -9" stroke="currentColor" stroke-width="${(2 * s).toFixed(1)}" fill="none" stroke-linecap="round"/></svg>`;
    });
    let f = "";
    [
      [22, 0, 34],
      [38, 1, 46],
      [15, 2, 58],
    ].forEach(([y, k, d]) => {
      f += `<svg class="gdfi" style="top:${y}%;--d:${d}s;--dl:${-k * 13}s;--sc:${(0.6 + k * 0.25).toFixed(2)}" viewBox="0 0 40 20"><path d="M2 10C8 2 22 2 30 10C22 18 8 18 2 10ZM30 10L39 3V17Z" fill="currentColor"/></svg>`;
    });
    let p = "";
    for (let k = 0; k < 12; k++)
      p += `<i style="left:${(k * 8.3 + 3) % 100}%;--d:${9 + (k % 5) * 2}s;--dl:${-k * 1.3}s;--s:${2 + (k % 3)}px"></i>`;
    return `<div class="gdfx" aria-hidden="true"><div class="gdca"></div>${w}${f}<div class="gdmo">${p}</div></div>`;
  };
  const _th = tankHTML;
  tankHTML = function () {
    const r = _th.apply(this, arguments),
      i = r.lastIndexOf("</div>");
    return i > 0 ? r.slice(0, i) + FX() + r.slice(i) : r;
  };
  const _as = aquaScreen;
  aquaScreen = function () {
    window.AQG2 = md() === "g2";
    const r = _as.apply(this, arguments);
    try {
      ui();
    } catch (x) {}
    return r;
  };
  const _st = aqStatus;
  aqStatus = function () {
    _st.apply(this, arguments);
    try {
      gst();
    } catch (x) {}
  };
  const _pn = aqPanel;
  aqPanel = function () {
    if (aqTab === "gpl") {
      const c = $(".aqtc");
      c && (c.textContent = "Mes plantes · " + NM[md()]);
      const l = $("#aql");
      if (l) {
        const e = aqRead(),
          h = aqPlInv(e);
        l.dataset.ps = aqpSig(e);
        l.innerHTML =
          h || '<p class="aqc">Aucune plante ici pour l’instant : va faire un tour à la boutique.</p>';
      }
      return;
    }
    return _pn.apply(this, arguments);
  };
  const _fd = aqPlFeed;
  aqPlFeed = function () {
    const r = _fd.apply(this, arguments);
    setTimeout(() => {
      try {
        gst();
      } catch (x) {}
      const fs = $(".aqfs.gdn");
      fs &&
        fs.querySelectorAll(".tank .pl").forEach((p, i) => {
          const R = p.getBoundingClientRect();
          for (let k = 0; k < 5; k++) {
            const d = document.createElement("i");
            d.className = "gddrop";
            d.style.left = R.left + R.width * (0.2 + 0.6 * Math.random()) + "px";
            d.style.top = R.top + 20 + "px";
            d.style.animationDelay = k * 0.12 + i * 0.05 + "s";
            document.body.appendChild(d);
            setTimeout(() => d.remove(), 1800);
          }
        });
    }, 50);
    return r;
  };
  const all = () => {
    const e = aqRead(),
      o = aqpO(e),
      L = AQPT.filter((P) => o[P.id] && window.aqpBc && aqpBc(o[P.id], P) > 0);
    if (!L.length) {
      mt = "m-aq";
      msg("Aucune bulle à récolter pour l’instant.");
      return;
    }
    let k = 0;
    L.forEach((P) => {
      const n = aqpBc(o[P.id], P);
      for (let j = 0; j < n; j++)
        setTimeout(() => {
          act.aqpp(P.id);
          gst();
        }, k++ * 220);
    });
  };
  setTimeout(
    () =>
      Object.assign(act, {
        aqmd: (v) => set(v),
        gdshop: () => aqTabTo("plant"),
        gdmine: () => aqTabTo("gpl"),
        gdfeed: () => aqPlFeed(),
        gdall: all,
      }),
    0,
  );
  const _tt = aqTabTo;
  aqTabTo = function (e) {
    if (!gd() && e === "plant") e = "fish";
    return _tt.call(this, e);
  };
  /* Aquarium 2/3 : les poissons de leur palier sont disponibles dès le déblocage */
  {
    const _tr = aqTier;
    aqTier = function (e) {
      const r = _tr.apply(this, arguments);
      if (!$(".aqfs")) return r;
      const m = md();
      return Math.max(r, m === "b" ? 2 : m === "c" ? 3 : 1);
    };
    const _r2 = aqRead;
    aqRead = function () {
      const e = _r2.apply(this, arguments);
      try {
        const k = AK();
        k !== "aq" && e && e.lt === undefined && (e.lt = k === "aq3" ? 3 : 2);
      } catch (x) {}
      return e;
    };
  }
})();
