// État de la partie (cur, lv, playing, snap…), bulles (fl, FLX, spend), mode illimité (UNL), cadre de jeu frame(), msg(), sauvegarde keep() et victoire win().
const isX = (e, t) => t >= nl(e);
const xn = (e, t) => t - nl(e) + 1;
const UNL = () => !0 === st.get("unl", !1);
const FLX = () => (UNL() ? "∞" : fl);
let UT = [];
const unlTap = () => {
  const e = Date.now();
  return (
    (UT = UT.filter((t) => e - t < 5e3)),
    UT.push(e),
    !(UT.length < 10 || ((UT = []), st.set("unl", !UNL()), 0))
  );
};
const unlToast = () => {
  const e = document.getElementById("unlt");
  e && e.remove();
  const t = document.createElement("div");
  ((t.id = "unlt"),
    (t.className = "shm"),
    t.setAttribute("role", "status"),
    (t.textContent = UNL()
      ? "✦ Mode illimité : bulles et fragments de nacre sans fin"
      : "Mode illimité désactivé"),
    document.body.appendChild(t),
    setTimeout(() => {
      ((t.style.transition = "opacity .4s"), (t.style.opacity = "0"), setTimeout(() => t.remove(), 450));
    }, 2600));
};
let fl = st.get("fl", 0);
let cur = null;
let daily = !1;
let lv = 0;
let playing = !1;
let snap = null;
let rc = !1;
let lvOpen = !1;
let origin = "home";
let mt = "m";
const msg = (e) => {
  const t = $("#" + mt);
  t &&
    ((t.textContent = e),
    "m-aq" === mt &&
      (clearTimeout(msg._t),
      (msg._t = setTimeout(() => {
        const t = $("#m-aq");
        t && t.textContent === e && (t.textContent = "");
      }, 5e3))));
};
const spend = (e) => {
  if (UNL()) return !0;
  if (fl < e) return (msg("Il te manque quelques bulles."), !1);
  ((fl -= e), st.set("fl", fl));
  const t = $(".chip");
  return (t && (t.textContent = "🫧 " + FLX()), !0);
};
const pkey = () => "p:" + cur + ":" + lv;
const keep = () => {
  if (!playing || !snap) return;
  const e = snap();
  (st.set("last", { g: cur, daily: daily, lv: lv, date: today, s: e }), st.set(pkey(), e));
};
const frame = (e, t) => {
  playing &&
    ((mt = "m"),
    ($("#nav").hidden = !0),
    keep(),
    (app.innerHTML = `<div class="top stk">${bk("hub")}${(() => {
      const e = INFG
        ? "Mode infini"
        : isX(cur, lv)
          ? "Fêtes " + xn(cur, lv)
          : "Niveau " + (lv + 1 - (1e9 <= nl(cur) ? st.get("ski:" + cur, 0) : 0));
      return daily || INFG || "quiz" === cur || "match3" === cur
        ? `<span class="tl">${e}</span>`
        : `<button class="tl tlk" data-a="skip" aria-label="${e} : toucher pour passer ce niveau">${isX(cur, lv) ? e : '<span class="tlf">Niveau</span><span class="tls">Niv.</span>&nbsp;' + (lv + 1 - (1e9 <= nl(cur) ? st.get("ski:" + cur, 0) : 0))}<i aria-hidden="true">⏭</i></button>`;
    })()}<div class="tr">${t ? `<button class="hb hintb" data-a="hint" aria-label="Indice : coûte ${t} bulle${t > 1 ? "s" : ""}">${HBI(t)}</button>` : ""}<div class="chip">🫧 ${FLX()}</div></div></div><section class="glass play pg-${cur}" aria-label="${ALL.find((e) => e.id === cur).n}"><p class="m" id="m" role="status" aria-live="polite"></p>${e}</section>${daily ? "" : '<div class="skw" id="skw"></div>'}`));
};
const favs = () => {
  const e = st.get("fav", null);
  return e && Array.isArray(e.l) ? e.l : [];
};
function win() {
  (st.set("p:" + cur + ":" + lv, null), nv("games"), theme(cur, isX(cur, lv)));
  const e = ALL.find((e) => e.id === cur),
    t = ckey(cur) + ":" + lv,
    a = !st.get(t, !1),
    s = a ? rw(cur, lv) : 1,
    n = dmR(cur, s);
  ((fl += n),
    st.set("fl", fl),
    isX(cur, lv) ? xGain(s) : styGain(s),
    st.set(t, !0),
    st.set("last", { g: cur, daily: !1, lv: lv, date: today, done: 1 }),
    [523, 659, 784].forEach((e, t) => setTimeout(() => sfx(e, 0.7), 200 * t)),
    vib([30, 60, 30]),
    (app.innerHTML = `<div class="top"><span></span><div class="chip">🫧 ${FLX()}</div></div><section class="glass story"><h2>Bien joué</h2><p>${(e.wl && e.wl[lv]) || e.w}</p><p class="big">${n ? (a ? "+" + n + " bulles" : "Niveau refait : +" + n + " bulle" + (n > 1 ? "s" : "")) : "Mode calme : ce jeu ne donne pas de bulles"}</p><p class="sdu">${isX(cur, lv) ? "🎄 +" + s + " boule" + (s > 1 ? "s" : "") + " de Noël" : "🦪 +" + s + " fragment" + (s > 1 ? "s" : "") + " de nacre"}</p>${!1 ? '<p class="note">🔓 Nouveau mode débloqué : Anagramme, dans la page du Jeu de mots.</p>' : ""}${(isX(cur, lv) ? lv < nl(cur) + 10 - 1 : lv < nl(cur) - 1) ? `<button class="nxb" data-a="next" data-v="${lv + 1}"><span>Niveau suivant</span><span class="nxi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></button>` : ""}<button class="pkb" data-a="pick"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6.5" height="6.5" rx="1.8"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.8"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.8"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.8"/></svg>Choisir un niveau</button><button class="hmb" data-a="tab" data-v="games" aria-label="Retour à l’accueil des jeux"><span class="hmi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/></svg></span>Accueil</button></section>`),
    "caches" !== cur || (66 !== lv && 166 !== lv) || s67());
}
