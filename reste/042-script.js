(() => {
  if (typeof hub !== "function" || typeof kzBg !== "function") return;
  const SV = {
    l: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    r: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5V5.5M9 8h7M9 12h5"/></svg>',
    k: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  };
  const RN = ["Le Burger des Étoiles", "Le Hot-dog de minuit", "Le Sushi du lagon"];
  const DI = () => [
    kzDish({ b: "bb", p: "vi", t: ["la", "to"] }),
    kzDish({ b: "ph", p: "sa", t: ["ke", "mo"] }),
    (() => {
      try {
        return kzDish({ b: "mk", p: "sm", t: [] });
      } catch (e) {
        return "";
      }
    })(),
  ];
  let LV = "",
    DS = "";
  const sheet = (t, h) => {
    const o = $("#vzsh");
    o && o.remove();
    const d = document.createElement("div");
    d.id = "vzsh";
    d.className = "vzsh";
    d.innerHTML = `<div class="vzsp" role="dialog" aria-label="${t}"><div class="vzsx"><h2>${t}</h2><button data-a="kzShX" aria-label="Fermer">✕</button></div>${h}</div>`;
    d.addEventListener("click", (e) => {
      (e.target === d || e.target.closest("[data-a=play]")) && setTimeout(() => d.remove(), 0);
    });
    document.body.appendChild(d);
  };
  const walkers = (rs) => {
    const g = (i, m) => `<span class="kzag">${kzGuy(KZL[(i * 3 + rs) % KZL.length], m, "lw" + i)}</span>`;
    return `<div class="kzlw o1"><span class="kzwb">${g(1, "wait")}</span><span class="kzbub">…</span></div><div class="kzlw o2"><span class="kzwb">${g(2, "happy")}</span><span class="kzbub">♪</span></div><div class="kzlw o3"><span class="kzwb">${g(4, "happy")}<span class="kzty">${DI()[rs]}</span></span></div>`;
  };
  const xf = () => {
    const a = app,
      go = a.querySelector(".opts [data-a=play]") || a.querySelector("[data-a=play]");
    if (!go) return;
    const n = +go.dataset.v || 0,
      rs = Math.max(0, Math.min(2, Math.floor(n / 10))),
      lvg = a.querySelector(".lvg"),
      dd = a.querySelector(".dd-h small"),
      lvS = (a.querySelector(".opts .rc-t span") || {}).textContent || "";
    DS = (a.querySelector(".story p") || {}).textContent || "";
    LV = lvg
      ? `<p class="note" style="margin:0 0 10px">${dd ? dd.textContent : ""}</p><div class="lvg">${lvg.innerHTML}</div>`
      : "";
    const D = DI(),
      ar = ["Burger", "Hot-dog", "Sushi"]
        .map((t, i) => {
          const ok = kzReach(i),
            r = st.get("kz:ar" + i, 0);
          return `<button class="kzmp${ok ? "" : " lk"}" data-a="kzA" data-v="${i}"${ok ? "" : ' aria-disabled="true"'}><span class="kzmpd">${D[i]}</span><b>${t}</b><small>${ok ? (r ? "Record " + r : "À toi !") : SV.k + " Niv. " + (10 * i + 10)}</small></button>`;
        })
        .join("");
    a.innerHTML = `<div class="kzg ${["bu", "hd", "su"][rs]} kzlb"><div class="kzt"><button class="back" data-a="back" data-v="home">‹ Retour</button><b>${RN[rs]}</b><div class="kztr"><div class="chip">🫧 ${FLX()}</div></div></div>
<div class="kzsc">${kzBg(rs)}${kzAmb(rs, 7)}${walkers(rs)}<div class="kzct"></div></div>
<div class="kzlc"><div class="kzlrow"><button class="kzsau" data-a="kzLv"><i>${SV.l}</i><span>Niveaux</span></button>
<button class="kzplate" data-a="play" data-v="${n}"><span class="kzpd">${D[rs]}</span><b>Jouer</b><small>Niveau ${n + 1}</small></button>
<button class="kzsau" data-a="kzRu"><i>${SV.r}</i><span>Histoire</span></button></div>
<p class="kzlsub">${lvS}</p>
<div class="kztray"><div class="kztrh">Arcade · sers vite le bon plat</div><div class="kztrr">${ar}</div></div></div></div>`;
    const nb = $("#nav");
    nb && (nb.hidden = !0);
    window.scrollTo(0, 0);
  };
  const _hub = hub;
  hub = function (e) {
    const r = _hub.apply(this, arguments);
    try {
      e === "cuisine" && xf();
    } catch (x) {
      console.error(x);
    }
    return r;
  };
  setTimeout(
    () =>
      Object.assign(act, {
        kzLv: () => sheet("Choisir un niveau", LV),
        kzRu: () => sheet("L’histoire", `<p class="note" style="margin:0">${DS}</p>`),
        kzShX: () => {
          const d = $("#vzsh");
          d && d.remove();
        },
      }),
    80,
  );
})();
