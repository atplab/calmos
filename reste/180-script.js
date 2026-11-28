(() => {
  const K = "aq:vis",
    V = () => {
      try {
        return st.get(K, null) || {};
      } catch (e) {
        return {};
      }
    },
    W = (o) => {
      try {
        st.set(K, o);
      } catch (e) {}
    };
  const tick = () => {
    try {
      const fs = document.querySelector(".aqfs"),
        tk = fs && fs.querySelector("#tank");
      if (!tk) return;
      if (fs.classList.contains("t2") || fs.classList.contains("t3")) {
        tk.querySelectorAll(".gdv").forEach((e) => e.remove());
        return;
      }
      const gd = fs.classList.contains("gdn"),
        n = Date.now();
      let v = V();
      if (v.id && n >= v.until) {
        tk.querySelectorAll(".fx.away").forEach((e) => e.classList.remove("away"));
        tk.querySelectorAll(".gdv").forEach((e) => {
          e.classList.add("bye");
          setTimeout(() => e.remove(), 750);
        });
        v = { next: n + (90 + 120 * Math.random()) * 1e3 };
        W(v);
      }
      if (!v.id && gd) {
        if (!v.next) {
          v.next = n + 15e3;
          W(v);
        }
        if (n >= v.next) {
          const e = aqRead(),
            L = aqOn(e);
          if (L.length >= 2) {
            const t = L[Math.floor(Math.random() * L.length)];
            v = { id: t.id, until: n + (60 + 50 * Math.random()) * 1e3 };
            W(v);
          } else {
            v.next = n + 6e4;
            W(v);
          }
        }
      }
      if (v.id && n < v.until) {
        const f = tk.querySelector('.fx[data-id="' + v.id + '"]');
        f && !f.classList.contains("away") && f.classList.add("away");
        const has = tk.querySelector(".gdv");
        if (gd && !has) {
          const t = FISH.find((x) => x.id === v.id);
          if (t) {
            const d = document.createElement("div");
            d.className = "gdv";
            d.style.cssText =
              "--y:" +
              (26 + 34 * Math.random()).toFixed(0) +
              "%;--w:" +
              (15 * t.sz).toFixed(1) +
              "%;--d:" +
              (13 + 7 * Math.random()).toFixed(1) +
              "s";
            d.setAttribute("aria-hidden", "true");
            d.innerHTML =
              '<div class="fy"><div class="fr"><div class="fi">' + fishSVG(t) + "</div></div></div>";
            tk.appendChild(d);
          }
        } else if (!gd && has) tk.querySelectorAll(".gdv").forEach((e) => e.remove());
      }
    } catch (e) {}
  };
  setInterval(tick, 1e3);
})();
