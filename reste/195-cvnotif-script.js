(function () {
  "use strict";
  const T0 = Date.now();
  window.__cvNk = window.__cvNk || {};
  function banner(f, x) {
    const nm = cvNm(f),
      txt = cvTxt(x, nm) || "",
      m = /Code\s*:\s*([A-Z0-9]{5})/.exec(txt);
    let d = document.getElementById("cvnt");
    d && d.remove();
    d = document.createElement("div");
    d.id = "cvnt";
    d.setAttribute("role", "status");
    d.innerHTML =
      '<div class="cvt"><b></b><span></span></div>' +
      (m ? '<button class="cvb" data-k="j">Rejoindre</button>' : "") +
      '<button class="cvb alt" data-k="v">Voir</button><button class="cvx" data-k="x" aria-label="Fermer">✕</button>';
    d.querySelector("b").textContent = nm;
    d.querySelector("span").textContent = txt.slice(0, 90);
    d.onclick = (e) => {
      const k = e.target.dataset && e.target.dataset.k;
      if (!k) return;
      d.remove();
      if (k === "j") window.__rmJoin && window.__rmJoin(m[1]);
      else if (k === "v") {
        try {
          act.back("soc");
        } catch (_) {}
        setTimeout(() => {
          try {
            act.cvOpen(f);
          } catch (_) {}
        }, 250);
      }
    };
    document.body.appendChild(d);
    try {
      navigator.vibrate && navigator.vibrate([60, 50, 60]);
    } catch (_) {}
    try {
      typeof sfx === "function" && sfx(660, 0.12);
    } catch (_) {}
    setTimeout(() => {
      d.isConnected && d.remove();
    }, 12000);
    try {
      if (document.hidden && window.Notification && Notification.permission === "granted")
        new Notification(nm, { body: txt });
    } catch (_) {}
  }
  function chk(f) {
    if (typeof CV === "undefined" || !CV.D || !CV.D[f] || f === "zeni" || cvBk(f)) return;
    const b = CV.D[f].b || [],
      l = b[b.length - 1];
    if (!l) return;
    let k = window.__cvNk[f];
    if (k === undefined) k = T0 - 6e5;
    if (l.t <= k) return;
    window.__cvNk[f] = l.t;
    if (l.t <= (st.get("cv:rd", {})[f] || 0)) return;
    if (SO.cv === f && typeof socOn === "function" && socOn()) return;
    banner(f, Object.assign({}, l, { me: 0 }));
  }
  const u = window.cvUpd;
  if (typeof u === "function")
    window.cvUpd = function (f) {
      try {
        chk(f);
      } catch (_) {}
      return u.apply(this, arguments);
    };
})();
