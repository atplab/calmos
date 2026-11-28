const SOAV = [
  "🦊",
  "🐻",
  "🦉",
  "🐧",
  "⛄",
  "🐰",
  "🦌",
  "🐱",
  "🐶",
  "🐟",
  "🐙",
  "🐢",
  "🌙",
  "⭐",
  "❄️",
  "🌲",
  "🍄",
  "🦋",
  "🐳",
  "🧸",
];
function socAv(e) {
  const t = st.get("soc:me", null),
    a = e === SO.uid ? t : SO.P[e],
    s = a && a.av,
    n = (a && a.name) || "?";
  let o = 0;
  for (const t of e) o = (31 * o + t.charCodeAt(0)) % 360;
  if (s && "p" === s.k) return `<span class="fr-av ph" aria-hidden="true"><img src="${s.v}" alt=""></span>`;
  if (s && "f" === s.k) {
    const e = FISH.find((e) => e.id === s.v);
    if (e)
      return `<span class="fr-av fi" style="--h:${o};--fb:${e.b}" aria-hidden="true">${fishSVG(e)}</span>`;
  }
  return s && "e" === s.k
    ? `<span class="fr-av em" style="--h:${o}" aria-hidden="true">${s.v}</span>`
    : `<span class="fr-av" style="--h:${o}" aria-hidden="true">${esc(([...n][0] || "?").toUpperCase())}</span>`;
}
const socSelf = (e) =>
  Object.assign(socMerge(e, null), {
    g: Object.assign(socProg(), { t: Date.now() }),
    w: socWord(),
    q: socAq(),
  });
function socAvEd(e) {
  const t = e.av && e.av.k ? e.av : null;
  return `<div class="sy-h">Photo de profil</div><div class="pf-ed"><div class="pf-big">${socAv(SO.uid)}</div><div class="pf-eb"><label class="btn alt" for="soc-ph" role="button">Choisir une photo</label><input type="file" id="soc-ph" accept="image/*" hidden>${t ? '<button class="lnk" data-a="socAvX">Revenir à l’initiale</button>' : ""}</div></div><p class="note" style="margin:12px 0 8px">Ou choisis un personnage :</p><div class="pf-em" role="group" aria-label="Personnages">${SOAV.map((e) => `<button class="pf-e${t && "e" === t.k && t.v === e ? " on" : ""}" data-a="socAvE" data-v="${e}" aria-pressed="${!(!t || "e" !== t.k || t.v !== e)}" aria-label="Personnage ${e}">${e}</button>`).join("")}</div>${socFishAv(t)}${SO.ms ? `<p class="m${SO.mse ? " err" : ""}" role="status">${esc(SO.ms)}</p>` : ""}`;
}
function socFishAv(e) {
  const t = aqRead();
  return `<p class="note" style="margin:14px 0 8px">Ou choisis un poisson ou animal marin de ton aquarium (${FISH.filter((e) => t.f[e.id]).length} / ${FISH.length}) :</p><div class="pf-em pf-fi" role="group" aria-label="Poissons">${FISH.map(
    (a) => {
      const s = !!t.f[a.id],
        n = !(!e || "f" !== e.k || e.v !== a.id);
      return `<button class="pf-e pf-f${n ? " on" : ""}${s ? "" : " lk"}" data-a="socAvF" data-v="${a.id}" aria-pressed="${n}" aria-label="${esc(a.n)}${s ? "" : " (à débloquer dans l’aquarium)"}"${s ? "" : " disabled"}>${fishSVG(a)}${s ? "" : '<i aria-hidden="true">🔒</i>'}</button>`;
    },
  ).join("")}</div>`;
}
function socSetAv(e, t) {
  const a = st.get("soc:me", null);
  a &&
    SO.can &&
    ((a.av = { k: e, v: t, t: Math.max(Date.now(), ((a.av && a.av.t) || 0) + 1) }),
    st.set("soc:me", a),
    (SO.ms = ""),
    (SO.mse = !1),
    (SO.h = ""),
    socLater(),
    socRefresh());
}
async function socPhoto(e) {
  const t = e.files && e.files[0];
  if (((e.value = ""), t))
    try {
      let e = null;
      try {
        e = await createImageBitmap(t);
      } catch (e) {}
      e ||
        (e = await new Promise((e, a) => {
          const s = new Image(),
            n = URL.createObjectURL(t);
          ((s.onload = () => {
            (URL.revokeObjectURL(n), e(s));
          }),
            (s.onerror = a),
            (s.src = n));
        }));
      const a = e.width || e.naturalWidth,
        s = e.height || e.naturalHeight,
        n = Math.min(a, s),
        o = document.createElement("canvas");
      o.width = o.height = 96;
      const i = o.getContext("2d");
      ((i.fillStyle = "#fff"),
        i.fillRect(0, 0, 96, 96),
        i.drawImage(e, (a - n) / 2, (s - n) / 2, n, n, 0, 0, 96, 96));
      let r = 0.78,
        l = o.toDataURL("image/jpeg", r);
      for (; l.length > 9e3 && r > 0.3;) ((r -= 0.12), (l = o.toDataURL("image/jpeg", r)));
      if (!/^data:image\/jpeg;base64,[A-Za-z0-9+/=]{20,14000}$/.test(l)) throw 0;
      socSetAv("p", l);
    } catch (e) {
      ((SO.ms = "Cette image n’a pas pu être utilisée : essaie une autre photo."),
        (SO.mse = !0),
        (SO.h = ""),
        socRefresh());
    }
}
document.addEventListener("change", (e) => {
  e.target && "soc-ph" === e.target.id && socPhoto(e.target);
});
const RWD = {
  flow: 3,
  nono: 6,
  mots: 5,
  caches: 3,
  croises: 6,
  phrase: 2,
  tournade: 3,
  maze: 3,
  memo: 2,
  sudoku: 7,
  demenage: 5,
  match3: 4,
  quiz: 1,
  cherche: 5,
  cuisine: 4,
};
const rw = (e, t) => {
  let a = RWD[e] || 5;
  if ("caches" === e && t >= 0) {
    if (caOn() && t >= 99) return 99 === t ? 10 : 6;
    a += caTier(t);
  }
  return a;
};