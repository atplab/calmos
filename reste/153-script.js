(() => {
  const sha = async (t) =>
    [...new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t)))]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("");
  const show = (g) => {
    const o = document.createElement("div");
    o.className = "sfr";
    o.setAttribute("role", "dialog");
    o.setAttribute("aria-modal", "true");
    o.innerHTML =
      '<div class="glass sfc"><h2 style="margin:0">🎁 Cadeau</h2><p class="note" style="margin:14px 0">' +
      esc(g.m || "") +
      '</p><p style="font-weight:800;font-size:22px;margin:0 0 14px">+' +
      (+g.n || 0) +
      ' 🫧</p><button class="btn">Merci !</button></div>';
    o.querySelector("button").onclick = () => o.remove();
    document.body.appendChild(o);
    try {
      sfx(880, 0.2);
    } catch (e) {}
  };
  const chk = async () => {
    try {
      const u = window.__fb && window.__fb.u;
      if (!u || u === "compte") return;
      const r = await fetch(
        "https://raw.githubusercontent.com/atplab/calmos/main/gifts.json?" + Date.now().toString(36),
        { cache: "no-store" },
      );
      if (!r.ok) return;
      const j = await r.json();
      if (!j || !Array.isArray(j.gifts)) return;
      const h = await sha(String(u).trim().toLowerCase()),
        d = st.get("gift:done", []);
      for (const g of j.gifts) {
        if (!g || g.h !== h || d.includes(g.id)) continue;
        d.push(g.id);
        st.set("gift:done", d.slice(-50));
        fl += Math.max(0, Math.min(5e3, +g.n || 0));
        st.set("fl", fl);
        try {
          chip();
        } catch (e) {}
        show(g);
        break;
      }
    } catch (e) {}
  };
  setTimeout(chk, 6000);
  setInterval(chk, 9e4);
})();
