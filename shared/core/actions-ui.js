// Table act : actions déclenchées par les boutons data-a="…" de l’interface (complétée ailleurs par Object.assign(act, …)).
const act = {
  dbook: () => demBook(),
  dbk: () => hub("demenage"),
  open: (e) => {
    if ("function" == typeof gHid && gHid(e)) return home();
    if ("function" == typeof gLock && gLock(e) && !sxOn()) return (null !== cur && home(), act.gLk(e));
    lvOpen = !1;
    const t =
      "quiz" === e
        ? start("quiz", !1, 0)
        : "quote" === e
          ? quote()
          : "wordle" === e && "function" == typeof wdScreen
            ? wdScreen()
            : "scrabble" === e
              ? scrHub()
              : "chess" === e
                ? chHub()
                : "draughts" === e
                  ? dmHub()
                  : "hoho" === e
                    ? unHub()
                    : "solitaire" === e
                      ? soHub()
                      : "medit" === e
                        ? znHub()
                        : "billard" === e
                          ? biHub()
                          : "airhockey" === e
                            ? ahHub()
                            : "galac" === e
                              ? gfHub()
                              : "carcache" === e
                                ? ccHub()
                                : "peche" === e
                                  ? pePlay()
                                  : "colorie" === e
                                    ? cbHub()
                                    : hub(e);
    return (window.scrollTo(0, 0), t);
  },
  back: (e) => ("home" === e ? home() : "day" === e ? dayScreen() : "soc" === e ? socScreen() : hub(cur)),
  play: (e) => start(cur, !1, +e),
  goLv: () => {
    const e = $("#golv"),
      t = Math.floor(+(e && e.value));
    t >= 1 && t < 1e9 ? start(cur, !1, t - 1) : e && e.focus();
  },
  soGo: () => {
    const e = $("#golv"),
      t = Math.floor(+(e && e.value));
    t >= 1 && t < 1e9 ? soNew("lv", t - 1) : e && e.focus();
  },
  dd: () => {
    const e = $(".dd:not(.xm)");
    ((lvOpen = e.classList.toggle("open")), e.querySelector(".dd-h").setAttribute("aria-expanded", lvOpen));
  },
  pick: () => {
    ((lvOpen = !(isX(cur, lv) && xmasOn())), hub(cur));
  },
  tab: (e) => ({ games: home, daily: dayScreen, set: prefScreen, aqua: aquaScreen, soc: socScreen })[e](),
  fav: (e) => {
    const t = favs().slice(),
      a = t.indexOf(e);
    (a < 0 ? t.push(e) : t.splice(a, 1), st.set("fav", { at: Date.now(), l: t }));
    const s = window.scrollY;
    (home(), window.scrollTo(0, s));
  },
  next: (e) => breathe(() => act.play(e)),
  brSkip: () => brEnd(),
  brOff: () => {
    ((prefs().breath = !1), savePrefs(), clearInterval(brT), (brT = null));
    const e = brGo;
    ((brGo = null), e && e(), msg("Respiration désactivée · à réactiver dans Réglages."));
  },
  resume: () => resume(),
  tg: (e) => {
    const t = prefs();
    ((t[e] = !t[e]), savePrefs(), apply(), prefScreen());
  },
  kbl: () => {
    const e = prefs();
    ((e.kbd = "azerty" === e.kbd ? "qwerty" : "azerty"), savePrefs());
    const t = unlTap();
    (prefScreen(), t && unlToast());
  },
  sky: (e) => {
    ((prefs().sky = ["auto", "day", "night", "sys"].includes(e) ? e : "auto"),
      savePrefs(),
      skyBody(),
      prefScreen());
  },
  rst: () => rsAsk(),
  rstNo: () => {
    const m = document.getElementById("rsmo");
    m && m.remove();
  },
  rstGo: () => {
    const m = document.getElementById("rsmo");
    m && m.remove();
    rc = !1;
    const e = /^(c|d|p):|^(fl|last|ms|mc|aq|fav|wd|sty|sty:i)$/;
    try {
      Object.keys(localStorage)
        .filter((t) => e.test(t))
        .forEach((e) => localStorage.removeItem(e));
    } catch (e) {}
    (Object.keys(mem)
      .filter((t) => e.test(t))
      .forEach((e) => delete mem[e]),
      st.set("sync:ep", (st.get("sync:ep", 0) + 1) & 15),
      st.set("sync:o", 0),
      st.set("sync:b", 0),
      st.set("sync:gb", SO.gt),
      st.set("sync:g", 0),
      st.set("buy:b", +st.get("buy:t", 0) || 0),
      st.set("buy:c", 0),
      (Sy.pv = null),
      (Sy.in = ""),
      (Sy.err = ""),
      (fl = 0),
      st.set("fl", 0),
      apMode("reg"),
      delete mem["app:mode"]);
    try {
      localStorage.removeItem("app:mode");
    } catch (e) {}
    try {
      cfGive();
    } catch (e) {}
    (prefScreen(), apChoose());
  },
};
