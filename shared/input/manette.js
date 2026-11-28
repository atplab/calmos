// Manette (Gamepad API). Mode « navigation » : déplace le focus et clique les boutons ; mode « curseur » : pointeur
// virtuel ; mode « jeu » : simule les touches du clavier (flèches, Espace, Entrée, Échap) et le pointeur.
// Les jeux branchés sur Input reçoivent donc la manette via clavier.js / souris.js sans code en plus.
// Le bouton Sélect. change de mode. Doit rester tôt dans la page : il observe les écouteurs keydown ajoutés ensuite.
(function () {
  "use strict";
  const _a = EventTarget.prototype.addEventListener,
    _r = EventTarget.prototype.removeEventListener,
    KD = new Set();
  EventTarget.prototype.addEventListener = function (t, f, o) {
    if (t === "keydown" && (this === window || this === document || this === document.body) && f !== GPK)
      KD.add(f);
    return _a.call(this, t, f, o);
  };
  EventTarget.prototype.removeEventListener = function (t, f, o) {
    if (t === "keydown") KD.delete(f);
    return _r.call(this, t, f, o);
  };
  const GPK = () => {};
  const GP = {
    foc: null,
    fk: "",
    lx: 200,
    ly: 300,
    cx: 195,
    cy: 390,
    p: {},
    rt: {},
    t: 0,
    force: "",
    fc: "",
    ca: 0,
    cc: null,
    cd: 0,
    held: {},
    sh: 0,
    pd: 0,
  };
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const SEL = '[data-a],button,a[href],input,select,textarea,[role=button],[tabindex]:not([tabindex="-1"])';
  const MOD = "#vzsh,#rmov,.ccov,.sfr,[role=dialog],[aria-modal=true]";
  const vis = (e) => {
    const r = e.getBoundingClientRect();
    if (r.width < 4 || r.height < 4) return !1;
    const c = getComputedStyle(e);
    if (c.visibility === "hidden" || c.pointerEvents === "none" || c.display === "none") return !1;
    if (e.disabled || e.getAttribute("aria-disabled") === "true" || e.type === "hidden") return !1;
    return !e.closest("[hidden],[inert]");
  };
  function root() {
    const m = $$(MOD).filter((e) => {
      const r = e.getBoundingClientRect();
      return r.width > 0 && r.height > 0 && getComputedStyle(e).visibility !== "hidden";
    });
    return m.length ? m[m.length - 1] : document.body;
  }
  function cands() {
    const n = performance.now();
    if (GP.cc && n - GP.cd < 120 && GP.cr === root()) return GP.cc;
    const r = root(),
      L = $$(SEL, r)
        .filter(vis)
        .filter((e) => e.id !== "gpcur");
    const out = L.filter((e) => !L.some((o) => o !== e && e.contains(o)));
    GP.cc = out;
    GP.cd = n;
    GP.cr = r;
    return out;
  }
  const bigCanvas = () =>
    $$("canvas").some((c) => {
      if (c.id === "snow") return !1;
      const r = c.getBoundingClientRect();
      return (
        r.width > innerWidth * 0.6 &&
        r.height > innerHeight * 0.4 &&
        getComputedStyle(c).visibility !== "hidden"
      );
    });
  const curId = () =>
    (typeof cur !== "undefined" && cur ? cur : "") + "|" + (root() === document.body ? 0 : 1);
  function mode() {
    if (GP.force && GP.fc === curId()) return GP.force;
    if (root() !== document.body) return "nav";
    const n = cands().length;
    if (KD.size > 0 && n < 7) return "game";
    if (bigCanvas() && n <= 4) return "game";
    return "nav";
  }
  function setFoc(e) {
    if (GP.foc) GP.foc.classList.remove("gpf");
    GP.foc = e;
    if (!e) return;
    e.classList.add("gpf");
    GP.fk = (e.dataset.a || "") + "|" + (e.dataset.v || "");
    const r = e.getBoundingClientRect();
    GP.lx = r.left + r.width / 2;
    GP.ly = r.top + r.height / 2;
    try {
      e.scrollIntoView({ block: "nearest", inline: "nearest" });
    } catch (x) {}
  }
  function pick(L) {
    let f = L.find((e) => GP.fk !== "|" && (e.dataset.a || "") + "|" + (e.dataset.v || "") === GP.fk);
    if (f) return f;
    f = L.find((e) => e.matches("[data-a=ccD],[data-a=ccP]"));
    if (f) return f;
    let b = null,
      bs = 1e9;
    for (const e of L) {
      const r = e.getBoundingClientRect(),
        d = Math.hypot(r.left + r.width / 2 - GP.lx, r.top + r.height / 2 - GP.ly);
      if (d < bs) {
        bs = d;
        b = e;
      }
    }
    return b || L.find((e) => e.getBoundingClientRect().top >= 0) || L[0];
  }
  function move(dir) {
    const L = cands();
    if (!L.length) return;
    let f = GP.foc;
    if (!f || !f.isConnected || !L.includes(f)) return setFoc(pick(L));
    const r = f.getBoundingClientRect(),
      cx = r.left + r.width / 2,
      cy = r.top + r.height / 2;
    let best = null,
      bs = 1e9,
      alt = null,
      as = 1e9;
    for (const e of L) {
      if (e === f) continue;
      const q = e.getBoundingClientRect(),
        dx = q.left + q.width / 2 - cx,
        dy = q.top + q.height / 2 - cy;
      let p, s;
      if (dir === "d") {
        p = dy;
        s = dx;
      } else if (dir === "u") {
        p = -dy;
        s = dx;
      } else if (dir === "r") {
        p = dx;
        s = dy;
      } else {
        p = -dx;
        s = dy;
      }
      if (p <= 2) continue;
      const sc = p + 2.5 * Math.abs(s);
      if (Math.abs(s) <= p * 1.8) {
        if (sc < bs) {
          bs = sc;
          best = e;
        }
      } else if (sc < as) {
        as = sc;
        alt = e;
      }
    }
    const t = best || alt;
    t && setFoc(t);
  }
  function ok() {
    const f = GP.foc;
    if (!f || !f.isConnected || !vis(f)) {
      const L = cands();
      if (!L.length) return null;
      setFoc(pick(L));
      return GP.foc;
    }
    return f;
  }
  function press() {
    const f = ok();
    if (!f) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(f.tagName)) {
      f.focus();
      return;
    }
    f.click();
  }
  function back() {
    const r = root(),
      q =
        r !== document.body
          ? "[data-a=ccShX],[data-a=sfx],.vzsx button,#rmno,[data-a=ccHub],[data-a=ccLv]"
          : "[data-a=ccQuit],[data-a=rmLeave],.back,[data-a=back]";
    const b = $$(q, r).find(vis);
    if (r !== document.body && !b) {
      const c = $$("button", r).find(vis);
      if (c && /(fermer|annuler|continuer|ok)/i.test(c.textContent)) c.click();
      return;
    }
    b && b.click();
  }
  function scrollR(dy) {
    if (!dy) return;
    let e = GP.foc;
    while (e && e !== document.body) {
      const c = getComputedStyle(e);
      if (/(auto|scroll)/.test(c.overflowY) && e.scrollHeight > e.clientHeight + 2) {
        e.scrollTop += dy;
        return;
      }
      e = e.parentElement;
    }
    window.scrollBy(0, dy);
  }
  function key(type, k, code, kc, rep) {
    const ev = new KeyboardEvent(type, {
      key: k,
      code: code,
      keyCode: kc,
      which: kc,
      bubbles: !0,
      cancelable: !0,
      repeat: !!rep,
    });
    try {
      Object.defineProperty(ev, "keyCode", { get: () => kc });
      Object.defineProperty(ev, "which", { get: () => kc });
    } catch (e) {}
    const t =
      document.activeElement && /^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)
        ? document.body
        : document.activeElement || document.body;
    t.dispatchEvent(ev);
  }
  const KM = {
    u: ["ArrowUp", "ArrowUp", 38],
    d: ["ArrowDown", "ArrowDown", 40],
    l: ["ArrowLeft", "ArrowLeft", 37],
    r: ["ArrowRight", "ArrowRight", 39],
    A: [" ", "Space", 32],
    X: ["Enter", "Enter", 13],
    B: ["Escape", "Escape", 27],
    ST: ["Enter", "Enter", 13],
  };
  function fire(type, x, y, down) {
    const el = document.elementFromPoint(x, y) || document.body,
      o = {
        bubbles: !0,
        cancelable: !0,
        clientX: x,
        clientY: y,
        screenX: x,
        screenY: y,
        pointerId: 77,
        pointerType: "mouse",
        isPrimary: !0,
        button: 0,
        buttons: down ? 1 : 0,
        view: window,
      },
      m = { pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup" }[type];
    try {
      el.dispatchEvent(new PointerEvent(type, o));
      el.dispatchEvent(new MouseEvent(m, o));
      if (type === "pointerup") el.dispatchEvent(new MouseEvent("click", o));
    } catch (e) {}
    return el;
  }
  function cur$() {
    let c = document.getElementById("gpcur");
    if (!c) {
      c = document.createElement("div");
      c.id = "gpcur";
      document.body.appendChild(c);
    }
    return c;
  }
  function tip(t) {
    try {
      gToast(t);
    } catch (e) {}
  }
  const MN = { nav: "navigation", cursor: "curseur", game: "touches (jeu)" };
  function cycle() {
    const m = mode(),
      o = ["nav", "cursor", "game"],
      n = o[(o.indexOf(m) + 1) % 3];
    GP.force = n;
    GP.fc = curId();
    const c = cur$();
    c.style.display = n === "cursor" ? "block" : "none";
    if (n === "cursor") {
      GP.cx = GP.lx || innerWidth / 2;
      GP.cy = GP.ly || innerHeight / 2;
    }
    tip("🎮 Mode " + MN[n]);
  }
  function loop(ts) {
    requestAnimationFrame(loop);
    const pad = [...(navigator.getGamepads ? navigator.getGamepads() : [])].find((g) => g && g.connected);
    if (!pad) return;
    const dt = Math.min(0.05, (ts - (GP.t || ts)) / 1e3);
    GP.t = ts;
    const b = (i) => !!(pad.buttons[i] && pad.buttons[i].pressed),
      ax = pad.axes,
      dz = (v) => (Math.abs(v) > 0.2 ? v : 0);
    const s = {
      u: b(12) || ax[1] < -0.55,
      d: b(13) || ax[1] > 0.55,
      l: b(14) || ax[0] < -0.55,
      r: b(15) || ax[0] > 0.55,
      A: b(0),
      B: b(1),
      X: b(2),
      Y: b(3),
      LB: b(4),
      RB: b(5),
      SEL: b(8),
      ST: b(9),
    };
    const rise = (k) => s[k] && !GP.p[k],
      fall = (k) => !s[k] && GP.p[k],
      any = Object.values(s).some(Boolean) || Math.abs(dz(ax[3] || 0)) > 0;
    const on = document.body.classList.contains("gpon");
    if (any && !on) {
      document.body.classList.add("gpon");
      if (rise("A") || rise("u") || rise("d") || rise("l") || rise("r")) {
        GP.p = Object.assign({}, s);
        if (mode() === "nav") {
          ok();
          return;
        }
      }
    }
    const m = mode(),
      now = ts;
    if (GP.foc && !GP.foc.isConnected && m === "nav") {
      const L = cands();
      L.length && setFoc(pick(L));
    }
    if (rise("SEL")) {
      cycle();
    } else if (m === "nav") {
      for (const d of ["u", "d", "l", "r"]) {
        if (s[d]) {
          if (rise(d)) {
            move(d);
            GP.rt[d] = now + 380;
          } else if (now > GP.rt[d]) {
            move(d);
            GP.rt[d] = now + 130;
          }
        }
      }
      if (rise("A")) press();
      if (rise("B")) back();
      if (rise("LB") || rise("RB")) {
        const n = document.getElementById("nav");
        if (n && !n.hidden) {
          const bs = $$("button", n).filter(vis),
            i = bs.findIndex((e) => e.classList.contains("on")),
            t = bs[i + (rise("RB") ? 1 : -1)];
          t && t.click();
        }
      }
      if (rise("X")) {
        const e = $$("[data-a=ccD]").find(vis);
        e && e.click();
      }
      if (rise("Y")) {
        const e = $$("[data-a=ccT]").find(vis);
        e && e.click();
      }
      if (rise("ST") && bigCanvas())
        (fire("pointerdown", innerWidth / 2, innerHeight / 2, 1),
          fire("pointerup", innerWidth / 2, innerHeight / 2, 0));
    } else if (m === "cursor") {
      const c = cur$();
      let vx = dz(ax[0] || 0) + (s.r ? 1 : 0) - (s.l ? 1 : 0),
        vy = dz(ax[1] || 0) + (s.d ? 1 : 0) - (s.u ? 1 : 0);
      if (vx || vy) {
        GP.cx = Math.max(0, Math.min(innerWidth - 1, GP.cx + vx * dt * 520));
        GP.cy = Math.max(0, Math.min(innerHeight - 1, GP.cy + vy * dt * 520));
        fire("pointermove", GP.cx, GP.cy, s.A);
      }
      c.style.left = GP.cx + "px";
      c.style.top = GP.cy + "px";
      c.style.display = "block";
      if (rise("A")) {
        GP.dn = 1;
        fire("pointerdown", GP.cx, GP.cy, 1);
      }
      if (fall("A")) {
        GP.dn = 0;
        fire("pointerup", GP.cx, GP.cy, 0);
      }
      if (rise("B")) back();
    } else {
      for (const d of ["u", "d", "l", "r"]) {
        const k = KM[d];
        if (s[d] && !GP.held[d]) {
          GP.held[d] = now + 260;
          key("keydown", k[0], k[1], k[2], 0);
          if (KD.size === 0 && !bigCanvas()) {
            GP.force = "nav";
            GP.fc = curId();
            key("keyup", k[0], k[1], k[2]);
            GP.held[d] = 0;
            move(d);
          }
        } else if (s[d] && GP.held[d] && now > GP.held[d]) {
          GP.held[d] = now + 55;
          key("keydown", k[0], k[1], k[2], 1);
        } else if (!s[d] && GP.held[d]) {
          GP.held[d] = 0;
          key("keyup", k[0], k[1], k[2]);
        }
      }
      for (const x of ["A", "X", "B", "ST"]) {
        const k = KM[x];
        if (rise(x)) key("keydown", k[0], k[1], k[2], 0);
        if (fall(x)) key("keyup", k[0], k[1], k[2]);
      }
      if (rise("Y") && bigCanvas())
        (fire("pointerdown", innerWidth / 2, innerHeight / 2, 1),
          fire("pointerup", innerWidth / 2, innerHeight / 2, 0));
    }
    const ry = dz(ax[3] || 0);
    ry && scrollR(ry * dt * 900);
    GP.p = Object.assign({}, s);
  }
  _a.call(window, "gamepadconnected", () =>
    tip("🎮 Manette connectée · A valider · B retour · Sélect. change de mode"),
  );
  _a.call(window, "gamepaddisconnected", () => {
    document.body.classList.remove("gpon");
    const c = document.getElementById("gpcur");
    c && (c.style.display = "none");
  });
  const off = (e) => {
    if (e.isTrusted) {
      document.body.classList.remove("gpon");
      const c = document.getElementById("gpcur");
      c && GP.force === "cursor" && 0;
    }
  };
  _a.call(document, "pointerdown", off, !0);
  _a.call(
    window,
    "keydown",
    (e) => {
      if (e.isTrusted) document.body.classList.remove("gpon");
    },
    !0,
  );
  requestAnimationFrame(loop);
  window.__GP = GP;
})();
