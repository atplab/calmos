(() => {
  try {
    const oR = window.requestAnimationFrame.bind(window),
      oC = window.cancelAnimationFrame.bind(window),
      oT = window.setTimeout,
      oCT = window.clearTimeout,
      oI = window.setInterval,
      pn = performance.now.bind(performance),
      dn = Date.now.bind(Date);
    let PZ = 0,
      OFF = 0,
      T0 = 0,
      QT = [];
    const QR = new Map();
    window.requestAnimationFrame = (cb) => {
      const id = oR((ts) => {
        if (PZ) {
          QR.set(id, cb);
          return;
        }
        QR.delete(id);
        cb(ts - OFF);
      });
      return id;
    };
    window.cancelAnimationFrame = (id) => {
      QR.delete(id);
      oC(id);
    };
    window.setTimeout = function (f, t) {
      if (typeof f !== "function") return oT.apply(window, arguments);
      const a = Array.prototype.slice.call(arguments, 2),
        id = oT(function () {
          if (PZ) {
            QT.push({ id, f, a, th: this });
            return;
          }
          f.apply(this, a);
        }, t);
      return id;
    };
    window.clearTimeout = function (id) {
      QT = QT.filter((q) => q.id !== id);
      return oCT(id);
    };
    window.setInterval = function (f, t) {
      if (typeof f !== "function") return oI.apply(window, arguments);
      const a = Array.prototype.slice.call(arguments, 2);
      return oI(function () {
        if (!PZ) f.apply(this, a);
      }, t);
    };
    performance.now = () => pn() - OFF;
    Date.now = () => dn() - OFF;
    const SEL = ".zrg,.pg-match3,.ung,.vzf.game,.sog",
      QS = ["zrQ", "zgQ", "zcQ", "back", "unBk", "ccQuit", "soBk"];
    let btn = null,
      ov = null;
    const stop = () => {
      if (!PZ) return;
      PZ = 0;
      OFF += pn() - T0 - (pn() - T0 > 0 ? 0 : 0);
      document.documentElement.classList.remove("pzon");
      ov && ov.remove();
      ov = null;
      const q = [...QR.entries()];
      QR.clear();
      q.forEach((e) => oR((ts) => e[1](ts - OFF)));
      const t = QT;
      QT = [];
      t.forEach((q) => {
        try {
          q.f.apply(q.th, q.a);
        } catch (e) {}
      });
    };
    const go = () => {
      if (PZ) return;
      PZ = 1;
      T0 = pn();
      document.documentElement.classList.add("pzon");
      ov = document.createElement("div");
      ov.id = "pzo";
      ov.setAttribute("role", "dialog");
      ov.setAttribute("aria-label", "Pause");
      ov.innerHTML =
        '<div class="pzc"><b>Pause</b><p>Le jeu t’attend.</p><button class="btn" id="pzr">Reprendre</button><button class="btn alt" id="pzq">Quitter</button></div>';
      document.body.appendChild(ov);
      ov.querySelector("#pzr").onclick = stop;
      ov.querySelector("#pzq").onclick = () => {
        stop();
        window.__pzq = 1;
        try {
          for (const a of QS) {
            const e = document.querySelector('#app [data-a="' + a + '"]');
            if (e) {
              e.click();
              break;
            }
          }
        } finally {
          window.__pzq = 0;
        }
      };
    };
    OFF = 0;
    const st = document.createElement("style");
    st.textContent =
      ".pzon *{animation-play-state:paused!important}#pzb{position:fixed;right:10px;top:calc(env(safe-area-inset-top,0px) + 56px);z-index:40;width:42px;height:42px;border-radius:50%;border:2px solid rgba(255,255,255,.9);background:rgba(10,10,45,.78);box-shadow:0 0 12px rgba(0,0,0,.6);display:none;align-items:center;justify-content:center;padding:0}#pzb svg{width:20px;height:20px;stroke:#fff;stroke-width:3;fill:none;stroke-linecap:round}#pzb.on{display:flex}#pzo{position:fixed;inset:0;z-index:9999;background:rgba(6,6,28,.8);display:flex;align-items:center;justify-content:center}.pzc{background:rgba(24,24,70,.96);color:#fff;border-radius:20px;padding:22px 26px;text-align:center;display:flex;flex-direction:column;gap:10px;min-width:220px}.pzc b{font-size:22px}.pzc p{margin:0 0 6px;opacity:.85}";
    const init = () => {
      document.head.appendChild(st);
      btn = document.createElement("button");
      btn.id = "pzb";
      btn.setAttribute("aria-label", "Pause");
      btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>';
      btn.onclick = go;
      document.body.appendChild(btn);
      document.addEventListener(
        "click",
        (e) => {
          const b = e.target.closest && e.target.closest("#app .back[data-pz]");
          if (b && !window.__pzq) {
            e.preventDefault();
            e.stopImmediatePropagation();
            go();
          }
        },
        !0,
      );
      oI(() => {
        const on = !!document.querySelector("#app " + SEL.split(",").join(",#app "));
        const arc = !!document.querySelector("#app .zrg");
        if (on)
          document.querySelectorAll("#app .back:not([data-pz])").forEach((b) => {
            b.dataset.pz = 1;
            b.classList.add("pzbk");
            b.setAttribute("aria-label", "Pause (retour)");
          });
        btn.classList.toggle("on", on && !document.querySelector("#app .back[data-pz]"));
        if (!on && PZ) stop();
        if (!on && !PZ) OFF = 0;
      }, 400);
    };
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
  } catch (e) {}
})();
