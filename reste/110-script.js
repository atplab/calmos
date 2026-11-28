(() => {
  /* Mode illimité : choisir le niveau de départ de chaque jeu d’arcade */
  const ICL =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>';
  const gid = () => {
    const s = st.get("ar:sel", "brick");
    return s === "garde" && st.get("ar:m:garde", "g") === "b" ? "bulles" : s;
  };
  const NM = {
    brick: "Casse-briques",
    recif: "Récif appétissant",
    garde: "Garde du Lagon",
    bulles: "Protéger Zeni",
    crabes: "Crabes Farceurs",
  };
  const curLv = (g) =>
    ({
      brick: 1,
      recif: st.get("zr:lv", 0) + 1,
      garde: st.get("zg:lv", 1),
      bulles: st.get("bz:cur", 1),
      crabes: st.get("zc:lv", 1),
    })[g] || 1;
  const go = (g, n) => {
    n = Math.max(1, Math.min(9999, n | 0));
    if (g === "brick") return act.arPl(String(n - 1));
    if (g === "recif") return act.zrGo(String(n));
    if (g === "garde") {
      st.set("zg:lv", n);
      return act.zgGo();
    }
    if (g === "bulles") {
      st.set("bz:cur", n);
      return act.bzGo();
    }
    if (g === "crabes") {
      st.set("zc:lv", n);
      return act.zcGo();
    }
  };
  const add = () => {
    if (!(typeof UNL === "function" && UNL())) return;
    const r = document.querySelector(".arw .vzhr");
    if (!r || r.querySelector("[data-a=arLvPick]")) return;
    const b = document.createElement("button");
    b.className = "vzb";
    b.dataset.a = "arLvPick";
    b.innerHTML = `<i>${ICL}</i><span>Choisir</span>`;
    r.appendChild(b);
  };
  setInterval(add, 500);
  setTimeout(() => {
    act.arLvPick = () => {
      const g = gid(),
        o = document.createElement("div");
      o.className = "cmq";
      o.innerHTML = `<div class="cmqp" role="dialog" aria-label="Choisir le niveau"><div style="font-size:26px">∞</div><h2>${NM[g] || "Niveau"}</h2><p>Mode illimité : choisis le niveau de départ.</p><input type="number" min="1" max="9999" value="${curLv(g)}" inputmode="numeric" style="width:100%;box-sizing:border-box;font:700 22px system-ui;text-align:center;padding:10px;border-radius:14px;border:0;margin-bottom:10px;background:#f4f6ff;color:#1a1f4a"><div style="display:flex;gap:6px;margin-bottom:10px">${[1, 10, 25, 50, 100].map((v) => `<button class="btn alt" data-q="${v}" style="flex:1;padding:8px 0;margin:0">${v}</button>`).join("")}</div><button class="btn" data-x="y">Jouer</button><button class="btn alt" data-x="n">Retour</button></div>`;
      document.body.appendChild(o);
      const i = o.querySelector("input");
      o.addEventListener("click", (e) => {
        const q = e.target.closest("[data-q]");
        if (q) {
          i.value = q.dataset.q;
          return;
        }
        const b = e.target.closest("[data-x]");
        if (!b && e.target !== o) return;
        o.remove();
        b && b.dataset.x === "y" && go(g, +i.value);
      });
    };
  }, 900);
})();
