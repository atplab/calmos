(() => {
  let el = null;
  const sc = () => {
    const m = document.getElementById("apm");
    if (!m) return null;
    const c = [m, ...m.querySelectorAll("*")].filter(
      (e) => e.scrollHeight > e.clientHeight + 8 && /(auto|scroll)/.test(getComputedStyle(e).overflowY),
    );
    return c[0] || null;
  };
  setInterval(() => {
    const m = document.getElementById("apm");
    if (!m) {
      el && (el.remove(), (el = null));
      return;
    }
    if (!el) {
      el = document.createElement("div");
      el.id = "apsc";
      el.className = "off";
      el.innerHTML =
        '<button type="button" aria-label="Faire défiler vers le bas">Fais défiler<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>';
      document.body.appendChild(el);
      el.querySelector("button").addEventListener("click", () => {
        const c = sc();
        c && c.scrollBy({ top: Math.round(c.clientHeight * 0.7), behavior: "smooth" });
      });
    }
    const c = sc();
    el.classList.toggle("off", !c || c.scrollTop + c.clientHeight >= c.scrollHeight - 24);
  }, 300);
})();
