const E = [
  "🌲",
  "🌙",
  "⛄",
  "🦊",
  "🔔",
  "🕯️",
  "🧣",
  "🦉",
  "🍄",
  "🦌",
  "🧤",
  "🐻",
  "🐧",
  "🦔",
  "🍵",
  "🏔️",
  "🪵",
  "🐿️",
];
const EX = ["🎄", "⭐", "🎁", "🔔", "🕯️", "🍪", "🧦", "🦌", "🎅", "❄️", "🥂", "🎆", "🍾", "🎶", "🧸", "🕛"];
const bk = (e) => `<button class="back" data-a="back" data-v="${e}">‹ Retour</button>`;
function lastCard() {
  const e = st.get("last", null),
    t = !e || e.daily || "melange" === e.g || (!G.some((t) => t.id === e.g) && "ana" !== e.g) ? null : e,
    a = t ? ALL.find((e) => e.id === t.g) : null;
  if (!a || gHid(a.id)) return "";
  const s = isX(t.g, t.lv);
  if (s !== sxOn()) return "";
  const n = t.done && (s ? t.lv < nl(t.g) + 10 - 1 : t.lv < nl(t.g) - 1),
    o = s ? "Fêtes " + (xn(t.g, t.lv) + (n ? 1 : 0)) : "Niveau " + (t.lv + 1 + (n ? 1 : 0)),
    i = n ? "Continuer" : t.done ? "Niveaux" : "Reprendre";
  return `<section class="rc xl pt-${a.id}" style="--a:${a.a};--b:${a.b}" data-g="${a.ic}"><div class="rc-ic">${gSv(a)}</div><div class="rc-t"><small>Dernière partie</small><b>${a.n}</b><span>${o}</span></div><button class="rc-go" data-a="resume">${i}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></section>`;
}
function xmPend(id) {
  try {
    if (!sxOn()) return !1;
    if ("galac" === id) {
      const s = st.get("gf:st", {}) || {};
      for (let i = 101; i <= 110; i++) if (!(s[i] | 0)) return !0;
      return !1;
    }
    const a = nl(id);
    for (let i = 0; i < 10; i++) if (!st.get(ckey(id) + ":" + (a + i), !1)) return !0;
    return !1;
  } catch (e) {
    return !1;
  }
}
const GLG = {
  "mots":
    '<rect class="lw" x="5" y="20" width="26" height="30" rx="7"/><rect class="lgd" x="33" y="14" width="26" height="30" rx="7" transform="rotate(9 46 29)"/><text x="18" y="43" font-size="22" text-anchor="middle" class="ld ltx">M</text><g transform="rotate(9 46 29)"><text x="46" y="37" font-size="22" text-anchor="middle" class="ld ltx">T</text></g>',
  "croises":
    '<rect class="lw" x="7" y="7" width="50" height="50" rx="9"/><rect class="ld" x="24" y="7" width="16" height="16"/><rect class="ld" x="40" y="23" width="17" height="17"/><rect class="ld" x="7" y="40" width="17" height="17"/><path d="M24 23h16M24 40h16M7 23h17M40 7v16M24 40v17" stroke="rgba(0,0,0,.25)" stroke-width="2" fill="none"/><text x="15" y="35" font-size="14" text-anchor="middle" class="ld ltx">A</text><rect class="lgd" x="24" y="24" width="16" height="16"/><text x="32" y="37" font-size="13" text-anchor="middle" class="ld ltx">X</text>',
  "phrase":
    '<path class="lw" d="M10 12h44a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H34l-12 12v-12H10a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6z"/><circle class="ld" cx="20" cy="28" r="4"/><circle class="ld" cx="32" cy="28" r="4"/><circle class="lgd" cx="44" cy="28" r="4"/>',
  "tournade":
    '<g fill="none" stroke-linecap="round" stroke-width="6"><path class="lsw" d="M8 14h48"/><path class="lsw" d="M14 26h38" opacity=".85"/><path class="lsw" d="M20 38h26" opacity=".7"/><path class="lgs" d="M27 50h13"/></g>',
  "memo":
    '<g transform="rotate(-9 22 32)"><rect class="lw5" x="7" y="12" width="26" height="36" rx="6"/></g><text x="20" y="38" font-size="24" text-anchor="middle" class="lw ltx">?</text><g transform="rotate(8 44 34)"><rect class="lw" x="31" y="16" width="26" height="36" rx="6"/><path class="lgd" d="M44 25l3 6.5 7 .8-5.2 4.8 1.5 7-6.3-3.6-6.3 3.6 1.5-7-5.2-4.8 7-.8z" transform="translate(0 -1)"/></g>',
  "sudoku":
    '<rect class="lw" x="6" y="6" width="52" height="52" rx="9"/><path d="M23 6v52M41 6v52M6 23h52M6 41h52" stroke="rgba(0,0,0,.3)" stroke-width="2.5"/><text x="14.5" y="19" font-size="13" text-anchor="middle" class="ld ltx">5</text><text x="32" y="36" font-size="13" text-anchor="middle" class="ld ltx">9</text><text x="49.5" y="53" font-size="13" text-anchor="middle" class="ld ltx">3</text><rect class="lgd" x="23.5" y="41.5" width="17" height="16" rx="3" opacity=".9"/><text x="32" y="54" font-size="13" text-anchor="middle" class="ld ltx">7</text>',
  "caches":
    '<rect class="lw" x="5" y="9" width="54" height="46" rx="9"/><rect class="lgd" x="6" y="25" width="52" height="14" rx="7" transform="rotate(-18 32 32)" opacity=".95"/><text x="17" y="26" font-size="14" text-anchor="middle" class="ld ltx">M</text><text x="32" y="26" font-size="14" text-anchor="middle" class="ld ltx">O</text><text x="47" y="26" font-size="14" text-anchor="middle" class="ld ltx">T</text><text x="17" y="48" font-size="14" text-anchor="middle" class="ld ltx">S</text><text x="32" y="48" font-size="14" text-anchor="middle" class="ld ltx">E</text><text x="47" y="48" font-size="14" text-anchor="middle" class="ld ltx">U</text>',
  "maze":
    '<path class="lsw" d="M8 56V8h48v40H20V22h24v14" stroke-width="5"/><circle class="lgd" cx="32" cy="30" r="4.5"/>',
  "match3":
    '<circle class="lw" cx="17" cy="22" r="11"/><path class="lgd" d="M45 9l12 13-12 13-12-13z"/><path class="lw5" d="M32 56l-12-12 12-12 12 12z" transform="translate(-4 0)"/><path class="lgd" d="M50 44l2.6 5.6 6 .8-4.4 4 1.2 6-5.4-3-5.4 3 1.2-6-4.4-4 6-.8z" transform="scale(.8) translate(14 8)"/>',
  "demenage":
    '<path class="lw" d="M8 24l24-12 24 12v28L32 62 8 52z" transform="translate(0 -6)"/><path class="ld" d="M32 12v50M8 24l24 12 24-12" transform="translate(0 -6)" opacity=".3" stroke="#000" stroke-width="1"/><path class="lgd" d="M25 15l7 3.5 7-3.5v14l-7-3.5-7 3.5z" transform="translate(0 -3)"/>',
  "quiz":
    '<circle class="lw" cx="32" cy="32" r="26"/><text x="32" y="46" font-size="40" text-anchor="middle" class="ld ltx">?</text><circle class="lgd" cx="50" cy="14" r="7"/>',
  "cherche":
    '<circle cx="26" cy="26" r="17" fill="rgba(255,255,255,.25)" stroke="#fff" stroke-width="6"/><path class="lsw" d="M39 39l17 17" stroke-width="8"/><circle class="lgd" cx="20" cy="22" r="4.5"/><path class="lw" d="M25 31l4-4 4 4z" opacity=".9"/>',
  "blocs":
    '<rect class="lw" x="6" y="6" width="17" height="17" rx="4"/><rect class="lw" x="6" y="25" width="17" height="17" rx="4"/><rect class="lw" x="6" y="44" width="17" height="14" rx="4"/><rect class="lgd" x="25" y="44" width="17" height="14" rx="4"/><rect class="lw5" x="44" y="44" width="14" height="14" rx="4"/><rect class="lgd" x="44" y="25" width="14" height="17" rx="4"/>',
  "cuisine":
    '<path class="lw" d="M8 30a24 20 0 0 1 48 0z"/><rect class="lgd" x="6" y="33" width="52" height="6" rx="3"/><rect class="ld" x="8" y="40" width="48" height="8" rx="4"/><path class="lw" d="M8 51h48v1a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6z"/><circle class="ld" cx="22" cy="22" r="2"/><circle class="ld" cx="34" cy="18" r="2"/><circle class="ld" cx="44" cy="23" r="2"/>',
  "flow":
    '<path class="lsw" d="M14 46c0-24 36-4 36-26" stroke-width="6"/><circle class="lw" cx="14" cy="48" r="8"/><circle class="lgd" cx="50" cy="16" r="8"/><circle class="lgd" cx="14" cy="14" r="6"/><circle class="lw" cx="50" cy="50" r="6"/>',
  "g2048":
    '<rect class="lw5" x="3" y="22" width="26" height="30" rx="8"/><rect class="lgd" x="22" y="12" width="38" height="38" rx="10"/><text x="41" y="39" font-size="17" text-anchor="middle" class="ld ltx">2048</text>',
  "tetris":
    '<rect class="lw" x="6" y="8" width="16" height="16" rx="4"/><rect class="lw" x="24" y="8" width="16" height="16" rx="4"/><rect class="lw" x="42" y="8" width="16" height="16" rx="4"/><rect class="lgd" x="24" y="26" width="16" height="16" rx="4"/><rect class="lw5" x="6" y="44" width="16" height="14" rx="4"/><rect class="lw5" x="24" y="44" width="16" height="14" rx="4"/><rect class="lw5" x="42" y="44" width="16" height="14" rx="4"/>',
  "brick":
    '<rect class="lw" x="5" y="8" width="17" height="10" rx="3"/><rect class="lgd" x="23.5" y="8" width="17" height="10" rx="3"/><rect class="lw" x="42" y="8" width="17" height="10" rx="3"/><rect class="lw5" x="14" y="20" width="17" height="10" rx="3"/><rect class="lw5" x="33" y="20" width="17" height="10" rx="3"/><circle class="lgd" cx="40" cy="42" r="5"/><rect class="lw" x="18" y="53" width="30" height="7" rx="3.5"/>',
  "planetes":
    '<ellipse cx="32" cy="34" rx="30" ry="9" fill="none" stroke="#ffd86b" stroke-width="4" transform="rotate(-18 32 34)" opacity=".9"/><circle class="lw" cx="32" cy="32" r="16"/><path class="lw5" d="M20 27a14 14 0 0 1 12-9" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="3"/><path d="M5 40c14 6 40-2 54-14" fill="none" class="lgs" stroke-width="4" stroke-linecap="round" transform="rotate(0)"/>',
  "peche":
    '<path class="lw" d="M8 32c8-12 24-14 34-4l12-8v24l-12-8c-10 10-26 8-34-4z"/><circle class="ld" cx="18" cy="29" r="2.8"/><path class="lgd" d="M26 24c4 5 4 11 0 16" fill="none" stroke="#ffd86b" stroke-width="3" stroke-linecap="round"/><path class="lsw" d="M50 4v8" stroke-width="3"/>',
  "scrabble":
    '<rect class="lgd" x="8" y="8" width="48" height="48" rx="10"/><rect class="lw" x="12" y="12" width="40" height="40" rx="7"/><text x="30" y="42" font-size="28" text-anchor="middle" class="ld ltx">A</text><text x="46" y="48" font-size="9" text-anchor="middle" class="ld ltx">1</text>',
  "chess":
    '<circle class="lw" cx="32" cy="15" r="9"/><path class="lw" d="M25 25h14l3 15H22z"/><path class="lw" d="M18 42h28l3 8H15z"/><rect class="lgd" x="12" y="52" width="40" height="7" rx="3.5"/>',
  "hoho":
    '<g transform="rotate(-14 24 34)"><rect class="lw5" x="6" y="12" width="30" height="42" rx="6"/></g><g transform="rotate(10 40 32)"><rect class="lgd" x="24" y="10" width="32" height="44" rx="7"/><ellipse class="lw" cx="40" cy="32" rx="10" ry="15" transform="rotate(30 40 32)"/></g><text x="40" y="38" font-size="16" text-anchor="middle" class="ld ltx">H</text>',
  "solitaire":
    '<rect class="lw" x="10" y="5" width="44" height="54" rx="7"/><text x="32" y="42" font-size="38" text-anchor="middle" class="ld ltx">♠</text><text x="20" y="19" font-size="12" text-anchor="middle" class="ld ltx">A</text>',
  "colorie":
    '<path class="lw" d="M32 6C16 6 5 17 5 30c0 12 9 12 12 10 4-2 5 3 5 6 0 7 6 12 14 12 17 0 23-12 23-26C59 17 48 6 32 6z"/><circle class="lgd" cx="20" cy="22" r="5"/><circle class="ld" cx="33" cy="16" r="5"/><circle class="lw5" cx="46" cy="25" r="5"/><circle cx="43" cy="40" r="5" fill="#ff7aa8"/>',
  "medit":
    '<path class="lw" d="M32 8c8 8 10 20 0 30-10-10-8-22 0-30z"/><path class="lw5" d="M8 24c14 0 22 8 24 20C18 44 10 36 8 24zM56 24c-14 0-22 8-24 20 14 0 22-8 24-20z"/><path class="lgd" d="M10 52c14 8 30 8 44 0" fill="none" stroke="#ffd86b" stroke-width="4" stroke-linecap="round"/>',
  "billard":
    '<circle cx="30" cy="34" r="23" fill="rgba(0,0,0,.4)"/><circle class="lw" cx="30" cy="30" r="10"/><text x="30" y="35" font-size="13" text-anchor="middle" class="ld ltx">8</text><path d="M44 12l14-6" stroke="#ffd86b" stroke-width="5" stroke-linecap="round"/><circle cx="46" cy="48" r="7" fill="#fff"/>',
  "airhockey":
    '<circle class="lgd" cx="22" cy="22" r="15"/><circle class="lw" cx="22" cy="22" r="7"/><ellipse cx="46" cy="46" rx="11" ry="9" fill="rgba(0,0,0,.4)"/><ellipse class="lw" cx="46" cy="43" rx="11" ry="8"/>',
  "galac":
    '<path class="lw" d="M6 34c8-14 26-16 38-4l12-10v28L44 38C32 50 14 48 6 34z"/><circle class="ld" cx="17" cy="31" r="3"/><circle class="lgd" cx="50" cy="10" r="4"/><circle class="lw5" cx="40" cy="8" r="3"/><path class="lgd" d="M54 52l2 4 4.4.6-3.2 3 .8 4.4-4-2.2-4 2.2.8-4.4-3.2-3 4.4-.6z" transform="scale(.7) translate(-3 -8)"/>',
  "carcache":
    '<g transform="rotate(-12 26 34)"><rect class="lw5" x="6" y="10" width="30" height="42" rx="6"/></g><g transform="rotate(8 42 32)"><rect class="lw" x="26" y="10" width="30" height="44" rx="6"/></g><path class="lgd" d="M41 22c-8 0-11 7-11 13l11 4 11-4c0-6-3-13-11-13z"/><path d="M41 22v17M35 26l6 13M47 26l-6 13" stroke="rgba(0,0,0,.3)" stroke-width="2" fill="none"/>',
  "demineur":
    '<rect class="lw5" x="4" y="4" width="56" height="56" rx="10"/><circle class="ld" cx="30" cy="34" r="13"/><path d="M30 14v40M10 34h40M16 20l28 28M44 20L16 48" stroke="#1b1b2c" stroke-width="4" stroke-linecap="round" style="stroke:var(--b)"/><circle class="lw" cx="25" cy="29" r="3.5"/><path class="lgd" d="M46 8v14M46 8l9 4-9 4" />',
  "ana":
    '<rect class="lw" x="4" y="8" width="24" height="28" rx="7"/><text x="16" y="30" font-size="20" text-anchor="middle" class="ld ltx">A</text><rect class="lgd" x="36" y="28" width="24" height="28" rx="7"/><text x="48" y="50" font-size="20" text-anchor="middle" class="ld ltx">N</text><path class="lsw" d="M30 14h22v8M34 50H12v-8" stroke-width="4"/>',
  "wordle":
    '<rect class="lgd" x="5" y="20" width="16" height="24" rx="5"/><rect class="lw" x="24" y="20" width="16" height="24" rx="5"/><rect class="lw5" x="43" y="20" width="16" height="24" rx="5"/><text x="13" y="38" font-size="16" text-anchor="middle" class="ld ltx">W</text><text x="32" y="38" font-size="16" text-anchor="middle" class="ld ltx">O</text><text x="51" y="38" font-size="16" text-anchor="middle" class="lw ltx">R</text>',
};
const gLg = (e, c) =>
  GLG[e] ? `<svg class="${c}" viewBox="0 0 64 64" aria-hidden="true">${GLG[e]}</svg>` : "";
const gCv = (t) => {
  const g = GLG[t.id];
  if (!g) return "";
  return `<svg class="gpt" aria-hidden="true"><defs><pattern id="gp-${t.id}" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(-16)"><g transform="translate(4 4) scale(.5)">${g}</g></pattern></defs><rect width="100%" height="100%" fill="url(#gp-${t.id})"/></svg><span class="gsh" aria-hidden="true"></span><span class="gmd" aria-hidden="true"><svg viewBox="0 0 64 64">${g}</svg></span>`;
};
function home() {
  (nv("games"), (cur = null), (origin = "home"), (wdBuf = ""), (wdPop = -1), (wdLock = !1), (wdM = ""));
  const e = favs(),
    t = (t) => {
      const a = e.includes(t.id);
      return `<div class="tw"><button class="glass tile pt-${t.id}${xmPend(t.id) ? " xmo" : ""}" style="--a:${t.a};--b:${t.b}" data-a="open" data-v="${t.id}"><i>${gSv(t)}</i><em class="tha" aria-hidden="true">${gSv(t)}</em><b>${"scrabble" === t.id || "chess" === t.id || "hoho" === t.id || "airhockey" === t.id || "carcache" === t.id ? '<svg class="mp" viewBox="0 0 24 24" role="img" aria-label="Multijoueur"><circle cx="12" cy="8" r="3.2"/><circle cx="5" cy="9.6" r="2.3"/><circle cx="19" cy="9.6" r="2.3"/><path d="M6.2 19.5c0-3.3 2.6-5.4 5.8-5.4s5.8 2.1 5.8 5.4z"/><path d="M1.3 18.6c0-2.5 1.7-4.2 4.1-4.2.7 0 1.3.1 1.9.4-1 .9-1.7 2.2-1.9 3.8z"/><path d="M22.7 18.6c0-2.5-1.7-4.2-4.1-4.2-.7 0-1.3.1-1.9.4 1 .9 1.7 2.2 1.9 3.8z"/></svg>' : ""}${t.n}</b><small>${t.soon ? "Bientôt" : t.sp ? ("scrabble" === t.id ? scrTile() : "chess" === t.id ? "" : "hoho" === t.id ? unTile() : t.sp) : ""}</small></button>${t.soon ? "" : `<button class="fv ${a ? "on" : ""}" data-a="fav" data-v="${t.id}" aria-pressed="${a}" aria-label="${a ? "Retirer " + t.n + " des favoris" : "Ajouter " + t.n + " aux favoris"}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.6l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 17l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z"/></svg></button>`}</div>`;
    },
    XH = sxOn(),
    a = gOrd(
      GD.filter(
        (e) =>
          !["hoho", "carcache", "solitaire"]
            .concat(
              window.WLG || [],
              window.BLG || [],
              window.ARG || [],
              window.SGL || [],
              window.SJL || [],
              window.RFG || [],
            )
            .includes(e.id) &&
          !gHid(e.id) &&
          (!XH || xmG(e)),
      ),
    ),
    s = a.filter((t) => !t.soon && e.includes(t.id)),
    n = a.filter((e) => !s.includes(e));
  ((app.innerHTML = `<header class="top"><h1>Calmos</h1><div class="hrt"><button class="rmkb" data-a="rmCode" aria-label="Entrer un code multijoueur">🔑 Code</button><div class="chip" title="Bulles">🫧 ${FLX()}</div></div></header>${xmBtn()}${XH ? "" : wdBlock()}${lastCard()}${s.length ? `<h2 class="s shr"><span>Favoris</span>${window.mpLink ? mpLink() : ""}</h2><div class="grid fgrid">${s.map(t).join("")}</div>` : `<h2 class="s shr"><span>${XH ? "Veillée de Noël" : "Choisis ta veillée"}</span>${window.mpLink ? mpLink() : ""}</h2>`}${gSecs(n, t)}<button class="gordb" data-a="gOrd"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4v16M4 8l4-4 4 4M16 20V4M12 16l4 4 4-4"/></svg>Modifier l’ordre des jeux</button>`),
    XH || (gLockTiles(), gUnlockCheck()));
}
const xmG = (e) =>
  !e.soon &&
  !(e.id === "caches" && caOn()) &&
  [
    "flow",
    "cuisine",
    "blocs",
    "g2048",
    "tetris",
    "brick",
    "planetes",
    "mots",
    "croises",
    "phrase",
    "tournade",
    "maze",
    "memo",
    "sudoku",
    "caches",
    "match3",
    "demenage",
    "cherche",
    "galac",
    "recif",
    "bulles",
    "sallearcade",
    "garde",
    "peche",
  ].includes(e.id);
const xmBtn = () => {
  if (!xmasOn()) return "";
  const o = sxOn(),
    k = sxOk(styRead());
  return k
    ? `<button class="xmtg${o ? " on" : ""}" data-a="xmTog"><span aria-hidden="true">🎄</span><b>${o ? "Mode Noël · revenir au normal" : "Passer en mode Noël"}</b></button>`
    : `<div class="xmtg lk"><span aria-hidden="true">🔒</span><b>Mode Noël dès l’étape 10 du voyage</b></div>`;
};
setTimeout(
  () =>
    Object.assign(act, {
      xmTog: () => {
        sxOn() || xmSnap();
        st.set("sty:s", sxOn() ? "main" : "xm");
        try {
          skyChap();
        } catch (e) {}
        $("#stg") ? dayScreen() : home();
      },
    }),
  0,
);
function gNavSync() {
  const n = document.getElementById("nav");
  if (!n) return;
  let w = document.querySelector("#navcw:not(.out)");
  const A = document.getElementById("app");
  if (!A || !A.querySelector("#gcmark")) {
    w && (w.remove(), n.classList.remove("hasc"));
    return;
  }
  if (!w || w.dataset.k !== window.GCK) {
    w && w.remove();
    n.insertAdjacentHTML("afterbegin", window.GCH);
    w = document.querySelector("#navcw:not(.out)");
    w.dataset.k = window.GCK;
    n.classList.add("hasc");
  }
  gCatOn();
}
setTimeout(function g() {
  const a = document.getElementById("app");
  if (!a) return setTimeout(g, 50);
  new MutationObserver(gNavSync).observe(a, { childList: !0 });
  gNavSync();
}, 0);
function gCatEnd(n) {
  const w = n && n.parentNode;
  w &&
    w.classList &&
    (w.classList.toggle("end", n.scrollLeft + n.clientWidth >= n.scrollWidth - 4),
    w.classList.toggle("beg", n.scrollLeft > 4));
}
function gCatOn() {
  if (window.__gcLock > Date.now()) return;
  gCatEnd(document.querySelector(".gcats"));
  const n = document.querySelector(".gcats");
  if (!n) return;
  let k = "";
  document.querySelectorAll(".gcs").forEach((e) => {
    e.getBoundingClientRect().top <= 140 && (k = e.id.slice(3));
  });
  n.querySelectorAll("button").forEach((b) => {
    const o = b.dataset.v === k;
    if (o !== b.classList.contains("on")) {
      b.classList.toggle("on", o);
      o &&
        (() => {
          const r = b.getBoundingClientRect(),
            c = n.getBoundingClientRect();
          r.left < c.left + 24
            ? (n.scrollLeft -= c.left + 24 - r.left)
            : r.right > c.right - 24 && (n.scrollLeft += r.right - c.right + 24);
        })();
    }
  });
}
window.__gco ||
  ((window.__gco = 1),
  addEventListener(
    "scroll",
    () => {
      window.__gcr ||
        (window.__gcr = requestAnimationFrame(() => {
          window.__gcr = 0;
          gCatOn();
        }));
    },
    { passive: !0 },
  ));
function gSecs(e, t) {
  if (!e.length) return "";
  const a = [...GCAT, ["autr", "Autres jeux", []]]
    .map((t) => ({ k: t[0], n: t[1], L: e.filter((e) => gCatOf(e.id) === t[0]) }))
    .filter((e) => e.L.length);
  window.GCK = a.map((e) => e.k).join();
  window.GCH = `<div id="navcw"><div class="gcats" role="navigation" aria-label="Genres de jeux" onscroll="gCatEnd(this)">${a.map((e) => `<button data-a="gCat" data-v="${e.k}">${e.n}</button>`).join("")}</div><i class="gcx gcl" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg></i><i class="gcx" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg></i></div>`;
  return (
    '<i id="gcmark" hidden></i>' +
    a
      .map(
        (e) =>
          `<h2 class="s gcs" id="gc-${e.k}"><span>${e.n}</span><small>${e.L.length}</small></h2><div class="grid">${e.L.map(t).join("")}</div>`,
      )
      .join("")
  );
}
const HBI = (e) =>
  `<svg class="hbi" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.2h5c0-.9.4-1.6 1.1-2.2A6 6 0 0 0 12 3z"/></svg><span>${e} 🫧</span>`;
function gOrd(e) {
  const t = st.get("g:ord", []),
    a = t.length ? t : GUNL,
    s = (t) => {
      const s = a.indexOf(t.id);
      return s < 0 ? 1e3 + e.indexOf(t) : s;
    };
  return e.slice().sort((e, t) => s(e) - s(t));
}
function gOrdDraw() {
  const e = gOrd(
      GD.filter(
        (e) =>
          !e.soon &&
          !["hoho", "carcache", "solitaire"]
            .concat(
              window.WLG || [],
              window.BLG || [],
              window.ARG || [],
              window.SGL || [],
              window.SJL || [],
              window.RFG || [],
            )
            .includes(e.id) &&
          !gHid0(e.id),
      ),
    ),
    t = $("#gordo .gorl");
  if (!t) return;
  const a = st.get("g:hide", []);
  t.innerHTML = e
    .map((t, s) => {
      const n = a.includes(t.id);
      return `<li class="${n ? "ghid" : ""}" style="--a:${t.a};--b:${t.b}"><i>${gSv(t)}</i><b>${esc(t.n)}</b><button class="ghd" data-a="gHide" data-v="${t.id}" aria-pressed="${n}" aria-label="${n ? "Afficher" : "Masquer"} ${esc(t.n)}"><svg viewBox="0 0 24 24" aria-hidden="true">${n ? '<path d="M3 3l18 18M10.6 6.2A10 10 0 0 1 12 6c5 0 9 6 9 6a17 17 0 0 1-3.2 3.6M6.4 8.4C4.4 10 3 12 3 12s4 6 9 6a9 9 0 0 0 3.5-.7"/>' : '<path d="M3 12s4-6 9-6 9 6 9 6-4 6-9 6-9-6-9-6z"/><circle cx="12" cy="12" r="2.6"/>'}</svg></button><button data-a="gMv" data-v="${t.id}:-1" aria-label="Monter ${esc(t.n)}"${s ? "" : " disabled"}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg></button><button data-a="gMv" data-v="${t.id}:1" aria-label="Descendre ${esc(t.n)}"${s < e.length - 1 ? "" : " disabled"}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button></li>`;
    })
    .join("");
}
setTimeout(() =>
  Object.assign(act, {
    gOrd: () => {
      const e = $("#gordo");
      e && e.remove();
      const t = document.createElement("div");
      ((t.className = "sfr"),
        (t.id = "gordo"),
        t.setAttribute("role", "dialog"),
        t.setAttribute("aria-modal", "true"),
        t.setAttribute("aria-label", "Ordre des jeux"),
        (t.innerHTML =
          '<div class="glass sfc gorc"><h2 style="margin:0 0 4px">Ordre des jeux</h2><p class="note" style="margin:0 0 10px">Monte ou descends chaque jeu avec les flèches. L’œil permet de masquer un jeu de la page des jeux.</p><ol class="gorl"></ol><div class="chrow"><button class="btn" data-a="gOrdX">Terminé</button><button class="btn alt" data-a="gOrdR">Ordre d’origine</button></div></div>'),
        document.body.appendChild(t),
        gOrdDraw());
    },
    gMv: (e) => {
      const [t, a] = e.split(":"),
        s = gOrd(
          GD.filter(
            (e) =>
              !e.soon &&
              !["hoho", "carcache", "solitaire"]
                .concat(
                  window.WLG || [],
                  window.BLG || [],
                  window.ARG || [],
                  window.SGL || [],
                  window.SJL || [],
                  window.RFG || [],
                )
                .includes(e.id) &&
              !gHid0(e.id),
          ),
        ).map((e) => e.id),
        n = s.indexOf(t),
        o = n + +a;
      if (n < 0 || o < 0 || o >= s.length) return;
      (([s[n], s[o]] = [s[o], s[n]]), st.set("g:ord", s), gOrdDraw());
      const i = $(`#gordo [data-v="${t}:${a}"]`);
      if ((i && !i.disabled && i.focus(), null === cur && "function" == typeof home)) {
        const e = scrollY;
        (home(), scrollTo(0, e));
      }
    },
    gHideQ: (e) => {
      const t = st.get("g:hide", []);
      (t.includes(e) || t.push(e), st.set("g:hide", t));
      const a = GD.find((t) => t.id === e),
        s = scrollY;
      (home(),
        scrollTo(0, s),
        gToast("« " + (a ? a.n : "Jeu") + " » masqué · réaffiche-le dans « Modifier l’ordre des jeux »"));
    },
    gHide: (e) => {
      const t = st.get("g:hide", []),
        a = t.indexOf(e);
      (a < 0 ? t.push(e) : t.splice(a, 1), st.set("g:hide", t), gOrdDraw());
      const s = $(`#gordo [data-a=gHide][data-v="${e}"]`);
      if ((s && s.focus(), null === cur && "function" == typeof home)) {
        const e = scrollY;
        (home(), scrollTo(0, e));
      }
    },
    gOrdR: () => {
      if ((st.set("g:ord", []), gOrdDraw(), null === cur && "function" == typeof home)) {
        const e = scrollY;
        (home(), scrollTo(0, e));
      }
    },
    gOrdX: () => {
      const e = $("#gordo");
      e && e.remove();
    },
  }),
);
const GAV = {
  galac: [2026, 10, 1],
  blocs: [2099, 0, 1],
  airhockey: [2026, 11, 5],
  demenage: [2026, 11, 12],
  planetes: [2026, 10, 1],
};
const gOpenAt = (e) => {
  const t = GAV[e];
  return t ? new Date(t[0], t[1], t[2]).getTime() : 0;
};
let KILL = [];
try {
  KILL = JSON.parse(localStorage.getItem("nds-kill") || "[]");
} catch (e) {}
(() => {
  try {
    fetch("https://raw.githubusercontent.com/atplab/calmonos/main/kill.json?" + Date.now().toString(36), {
      cache: "no-store",
    })
      .then((e) => (e.ok ? e.json() : null))
      .then((e) => {
        if (!e || !Array.isArray(e.hide)) return;
        const t = e.hide.filter((e) => "string" == typeof e);
        if (JSON.stringify(t) === JSON.stringify(KILL)) return;
        KILL = t;
        try {
          localStorage.setItem("nds-kill", JSON.stringify(t));
        } catch (e) {}
        0;
      })
      .catch(() => {});
  } catch (e) {}
})();
function gHid0(e) {
  return KILL.includes(e) || (Date.now() < gOpenAt(e) && !UNL());
}
function gHid(e) {
  return (
    gHid0(e) ||
    (() => {
      try {
        return st.get("g:hide", []).includes(e);
      } catch (e) {
        return !1;
      }
    })()
  );
}
function gFresh() {
  const e = st.get("g:tap", []),
    t = Date.now();
  return [...new Set([...Object.keys(GAV), ...Object.keys(GSTEP)])].filter(
    (a) =>
      t >= gOpenAt(a) &&
      (GSTEP[a] || 0) <= gStepNow() &&
      ALL.some((e) => e.id === a && !e.soon) &&
      !e.includes(a),
  );
}
function gUnlockCheck() {
  const e = gFresh();
  document.querySelectorAll(".tile[data-a=open]").forEach((t) => {
    const a = t.dataset.v;
    if (!e.includes(a)) return;
    (t.classList.add("nw"),
      (t.dataset.a = "gNew"),
      t.querySelector(".gnwb") || t.insertAdjacentHTML("beforeend", '<em class="gnwb">Nouveau !</em>'));
    const s = t.querySelector("small");
    s && (s.textContent = "");
  });
}
function gUnlockShow(e) {
  if ($("#gunl")) return;
  const t = st.get("g:tap", []),
    a = ALL.find((t) => t.id === e);
  if ((t.includes(e) || st.set("g:tap", [...t, e]), !a)) return;
  const s = document.createElement("div");
  ((s.id = "gunl"),
    (s.className = "gunl"),
    s.setAttribute("role", "dialog"),
    s.setAttribute("aria-modal", "true"),
    s.setAttribute("aria-label", "Nouveau jeu débloqué : " + a.n),
    (s.innerHTML = `<div class="gunb" style="--a:${a.a};--b:${a.b}"><div class="gunr" aria-hidden="true">${"<i></i>".repeat(12)}</div><small>Nouveau jeu débloqué !</small><div class="guni">${gSv(a)}</div><h2>${esc(a.n)}</h2><p>${esc(a.t || "")}</p><div class="chrow"><button class="btn" data-a="gUnlGo" data-v="${e}">Découvrir</button><button class="btn alt" data-a="gUnlX">Plus tard</button></div></div>`),
    document.body.appendChild(s));
  try {
    (sfx(660, 0.12),
      setTimeout(() => sfx(880, 0.12), 130),
      setTimeout(() => sfx(1175, 0.25), 260),
      vib([15, 30, 15]));
  } catch (e) {}
  setTimeout(() => {
    try {
      confetti(s.querySelector(".guni"));
    } catch (e) {}
  }, 350);
}
setTimeout(() =>
  Object.assign(act, {
    gUnlX: () => {
      const e = $("#gunl");
      e &&
        (e.classList.add("out"),
        setTimeout(() => {
          (e.remove(), null === cur && home());
        }, 300));
    },
    gNew: (e) => gUnlockShow(e),
    gUnlGo: (e) => {
      const t = $("#gunl");
      (t && t.remove(), act.open(e));
    },
  }),
);
const gStepNow = () => {
  try {
    return styRead().p || 0;
  } catch (e) {
    return 0;
  }
};
function gLock(e) {
  return (
    "peche" !== e &&
    !UNL() &&
    (GSTEP[e] || 0) > gStepNow() &&
    !st.get("g:unl", []).includes(e) &&
    !st.get("g:tap", []).includes(e)
  );
}
const xLvOn = () => xmasOn() && (UNL() || gStepNow() >= 10);
function gLockTiles() {
  document.querySelectorAll(".tile[data-a=open]").forEach((e) => {
    const t = e.dataset.v;
    if (!gLock(t)) return;
    (e.classList.add("lk"), (e.dataset.a = "gLk"));
    const a = e.querySelector("small");
    a && (a.textContent = "peche" === t ? "🔒 Aquarium niveau 2" : "🔒 Étape " + GSTEP[t]);
    const s = e.parentNode && e.parentNode.querySelector(".fv");
    s && s.remove();
  });
}
function gToast(e) {
  let t = $("#gtoast");
  (t && t.remove(),
    (t = document.createElement("div")),
    (t.id = "gtoast"),
    (t.className = "gtoast"),
    t.setAttribute("role", "status"),
    (t.textContent = e),
    document.body.appendChild(t),
    setTimeout(() => {
      (t.classList.add("out"), setTimeout(() => t.remove(), 400));
    }, 2600));
}
(setTimeout(() =>
  Object.assign(act, {
    gLk: (e) => {
      const t = ALL.find((t) => t.id === e),
        a = GSTEP[e] || 0;
      if ("peche" === e) return void gToast("La pêche se débloque quand ton aquarium atteint le niveau 2.");
      gToast(
        (t ? t.n : "Ce jeu") +
          " se débloque à l’étape " +
          a +
          " de l’histoire (tu es à l’étape " +
          gStepNow() +
          ").",
      );
      const s = $(`.tile[data-v="${e}"]`);
      s && (s.classList.remove("shk"), s.offsetWidth, s.classList.add("shk"));
    },
  }),
),
  setTimeout(() => {
    try {
      if (!st.get("g:unl0", !1)) {
        const e = st.get("g:unl", []);
        (Object.keys(GSTEP).forEach((t) => {
          gLock(t) || gHid(t) || e.includes(t) || e.push(t);
        }),
          st.set("g:unl", e),
          st.set("g:unl0", !0));
      }
    } catch (e) {}
  }, 0));
const anaOn = () => !0;
function anaCard() {
  const e = lvMA("ana"),
    t = [...Array(e).keys()].filter((e) => st.get(ckey("ana") + ":" + e, !1)).length;
  if (!anaOn()) {
    const e = [...Array(60).keys()].findIndex(
      (e) => !st.get(ckey("mots") + ":" + e, !1) && !st.get("k:mots:" + e, !1),
    );
    return `<section class="rc xlk" data-g="${ANA.ic}"><div class="rc-ic">🔒</div><div class="rc-t"><small>Anagramme</small><b>Débloqué au niveau 12</b><span>Tu en es au niveau ${Math.max(1, e + 1)} du Jeu de mots</span></div></section>`;
  }
  return `<section class="rc pt-ana" style="--a:${ANA.a};--b:${ANA.b}" data-g="${ANA.ic}"><div class="rc-ic">${ANA.ic}</div><div class="rc-t"><small>Nouveau mode</small><b>Anagramme</b><span>${t ? t + " niveau" + (t > 1 ? "s" : "") + " terminé" + (t > 1 ? "s" : "") : "Aucun niveau terminé"}</span></div><button class="rc-go" data-a="open" data-v="ana">${t ? "Continuer" : "Jouer"}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></section>`;
}
function hub(e) {
  const t = (e) => ("ana" === e ? "mots" : e),
    a = app.dataset.hub || "",
    s = !!a && t(a) === t(e) && !!app.querySelector(".story.pt-" + a),
    n = ".story *,.opts>.rc *",
    o = (e) => (e.getAttribute("class") || "").replace(/\bchg\b/, "").trim(),
    i = (e) => (e.children.length ? null : e.textContent);
  let r = null;
  (s && (r = [...app.querySelectorAll(n)].map((e) => [e.tagName, o(e), i(e)])),
    (app.dataset.hub = e),
    app.classList.toggle("hsw", s));
  try {
    const e = ALL.find((e) => "caches" === e.id);
    e && (e.nox = caOn());
  } catch (e) {}
  const l = hub0(e);
  return (
    r &&
      [...app.querySelectorAll(n)].forEach((e, t) => {
        const a = r[t];
        !a || a[0] !== e.tagName || (a[1] === o(e) && a[2] === i(e)) || e.classList.add("chg");
      }),
    l
  );
}
function hub0(e) {
  if ("quiz" === e) return home();
  if ("ana" === e && !anaOn()) return hub("mots");
  ((cur = e), nv("games"), theme(e));
  const t = ALL.find((t) => t.id === e),
    a = nl(e),
    A = "sudoku" === e && sdMo() ? sdMA() : INF1[e] ? lvMA(e) : a,
    s = (st.get(dkey(e), !1), (t) => st.get(ckey(e) + ":" + t, !1)),
    n = (t) => !s(t) && st.get("k:" + ckey(e).slice(2) + ":" + t, !1),
    o = [...Array(A).keys()].findIndex((e) => !s(e) && !n(e)),
    i = [...Array(A).keys()].findIndex(n),
    r = [...Array(A).keys()].filter(n).length,
    l = o >= 0 ? o : i >= 0 ? i : a - 1,
    c = [...Array(A).keys()].filter((t) => st.get(ckey(e) + ":" + t, !1)).length,
    d = !1,
    X = sxOn() && !t.soon && !t.nox,
    f = (t) => st.get(ckey(e) + ":" + (a + t), !1),
    u = (t) => !f(t) && st.get("k:" + ckey(e).slice(2) + ":" + (a + t), !1),
    h = [...Array(10).keys()].findIndex((e) => !f(e) && !u(e)),
    p = [...Array(10).keys()].filter(f).length,
    m = [...Array(10).keys()].findIndex(u),
    b = h >= 0 ? h : m >= 0 ? m : 9,
    g = p + [...Array(10).keys()].filter(u).length;
  app.innerHTML =
    `<div class="top stk">${bk("home")}<div class="chip">🫧 ${FLX()}</div></div><details class="glass story pt-${e} gdet"${!1 !== window.GDO ? " open" : ""}><summary><i>${gSv(t)}</i><h2>${"ana" === e || "mots" === e ? "Jeu de mots" : t.t}</h2><span class="gdc" aria-hidden="true"></span></summary><p>${"ana" === e ? ALL.find((e) => "mots" === e.id).s : t.s}</p></details>` +
    (t.soon
      ? '<p class="note">Ce jeu arrive dans la prochaine version de la maquette.</p>'
      : X
        ? `<div class="opts"><section class="rc xm" data-g="✦"><div class="rc-ic">${gSv(t)}</div><div class="rc-t"><small>Spécial Noël</small><b>Niveaux de fêtes</b><span>${p} / 10 terminés · tous rejouables</span></div><button class="rc-go" data-a="play" data-v="${a + (p >= 10 ? 0 : b)}">${p >= 10 ? "Rejouer" : g ? "Continuer" : "Commencer"}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></section><div class="dd xm open pt-${e}"><div class="dd-l" id="lvl"><div class="dd-i"><div class="lvg">${Array.from({ length: 10 }, (e, t) => `<button class="lv ${f(t) ? "d" : t === b ? "nx" : "far"}" data-a="play" data-v="${a + t}" aria-label="Fêtes ${t + 1}${f(t) ? ", terminé" : ""}">${t + 1}</button>`).join("")}</div></div></div></div></div>`
        : `<div class="opts">${d && p < 10 ? `<section class="rc xm" data-g="✦"><div class="rc-ic">✦</div><div class="rc-t"><small>Spécial Noël</small><b>${h < 0 && m < 0 ? "Rejouer Fêtes 10" : "Fêtes " + (b + 1) + (h < 0 ? " (passé)" : "")}</b><span>${p} / 10 terminés</span></div><button class="rc-go" data-a="play" data-v="${a + b}" title="Jusqu’au 11 janvier">${h < 0 && m < 0 ? "Rejouer" : g ? "Continuer" : "Commencer"}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></section>` : ""}<section class="rc rcx pt-${e}${"cuisine" === e ? " kzc" + ("arc" === st.get("kz:mode", "") ? " kzarc" : "") : ""}" data-g="${t.ic}"><div class="rc-ic">${gSv(t)}</div><div class="rc-t"><small>${c ? "Continuer" : "Commencer"}</small><b>${o >= 0 ? "Niveau " + (o + 1) : i >= 0 ? "Niveau " + (i + 1) + " (passé)" : "Rejouer le niveau " + A}</b><span>${("sudoku" === e && sdMo()) || INF1[e] ? (c ? c + " niveau" + (c > 1 ? "s" : "") + " terminé" + (c > 1 ? "s" : "") : "Aucun niveau terminé") : o >= 0 ? c + " sur " + a + " terminés" + (r ? " · " + r + " passé" + (r > 1 ? "s" : "") : "") : i >= 0 ? "Un niveau passé t’attend" : "Tous les niveaux sont terminés"}</span></div><button class="rc-go" data-a="play" data-v="${l}">Jouer<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>${INFN[e] || "mots" === e || "ana" === e ? infArea(e) : ""}${"sudoku" === e ? sdSeg() : ""}${UNL() && (("sudoku" === e && sdMo()) || INF1[e]) ? '<div class="golv"><label>Aller au niveau <input id="golv" type="number" min="1" inputmode="numeric" placeholder="ex. 1203"></label><button class="rc-go" data-a="goLv">Jouer</button></div>' : ""}${"cuisine" === e ? kzModeArea() : ""}<div class="dd pt-${e}${lvOpen ? " open" : ""}"${("sudoku" === e && sdMo()) || INF1[e] ? ' style="display:none"' : ""}><button class="dd-h" data-a="dd" aria-expanded="${lvOpen}" aria-controls="lvl"><span><b>Choisir un niveau</b><small>${c} / ${a} terminés</small></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button><div class="dd-l" id="lvl"><div class="dd-i"><div class="lvg">${Array.from(
            { length: A },
            (e, t) => {
              const a = s(t),
                i = n(t);
              return `<button class="lv ${a ? "d" : i ? "sk" : t === o ? "nx" : "far"}" data-a="play" data-v="${t}" aria-label="Niveau ${t + 1}${a ? ", terminé" : i ? ", passé, à refaire pour les bulles" : ""}">${t + 1}</button>`;
            },
          ).join(
            "",
          )}</div></div></div></div></section>${"sudoku" === e ? sdAlbum() : ""}${"demenage" === e ? '<section class="rc" data-g="📖"><div class="rc-ic">📖</div><div class="rc-t"><small>Le livre</small><b>Revoir l’histoire</b><span>Les pages que tu as déjà écrites</span></div><button class="rc-go" data-a="dbook">Ouvrir<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></section>' : ""}${d && p >= 10 ? `<section class="rc xm" data-g="✦"><div class="rc-ic">✦</div><div class="rc-t"><small>Spécial Noël</small><b>${h < 0 && m < 0 ? "Rejouer Fêtes 10" : "Fêtes " + (b + 1) + (h < 0 ? " (passé)" : "")}</b><span>${p} / 10 terminés</span></div><button class="rc-go" data-a="play" data-v="${a + b}" title="Jusqu’au 11 janvier">${h < 0 && m < 0 ? "Rejouer" : g ? "Continuer" : "Commencer"}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></section>` : ""}</div>`);
}
function quote() {
  ((cur = "quote"), nv("soc"));
  let e = di % Q.length;
  const t = () => {
    app.innerHTML = `<div class="top stk">${bk("soc")}<div class="chip">🫧 ${FLX()}</div></div><section class="glass story"><h2>Le carnet du soir</h2><p class="big">«&nbsp;${Q[e]}&nbsp;»</p><button class="btn alt" data-a="nq">Une autre pensée</button></section>`;
  };
  ((act.nq = () => {
    ((e = (e + 1) % Q.length), t());
  }),
    t());
}
function s67() {
  const e = document.createElement("div");
  ((e.className = "s67"),
    e.setAttribute("aria-hidden", "true"),
    (e.innerHTML =
      '<b>6</b><b>7</b><i class="a">🙌</i><i class="b">🙌</i>' +
      Array.from(
        { length: 18 },
        (e, t) => '<u style="--a:' + 20 * t + "deg;--d:" + ((90 + 80 * Math.random()) | 0) + 'px"></u>',
      ).join("")),
    document.body.appendChild(e),
    [392, 523, 392, 523, 659].forEach((e, t) => setTimeout(() => sfx(e, 0.5), 150 * t)),
    vib([20, 40, 20, 40, 20]),
    setTimeout(() => e.remove(), 3400));
}