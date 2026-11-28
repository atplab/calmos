(() => {
  /* Échecs : mode social présenté comme celui de Motuiles (parties en cours, nouvelle partie avec un ami) */
  window.chMark2 = (e) => {
    const a = st.get("soc:me", null);
    if (!a || !SOK.test(e)) return;
    a.cg = Object.assign({}, a.cg);
    a.cg[e] = Date.now();
    const k = Object.keys(a.cg);
    k.length > 40 &&
      k
        .sort((x, y) => a.cg[x] - a.cg[y])
        .slice(0, k.length - 40)
        .forEach((x) => delete a.cg[x]);
    st.set("soc:me", a);
    socLater();
  };
  window.chOpp2 = () => {
    if (!SO.uid) return [];
    const o = st.get("soc:me", null),
      s = new Set(Object.keys((o && o.cg) || {}));
    Object.entries(SO.P || {}).forEach(([e, p]) => {
      e !== SO.uid &&
        p &&
        p.cg &&
        p.cg[SO.uid] &&
        (s.add(e), o && !(o.cg && o.cg[e]) && setTimeout(() => chMark2(e), 0));
    });
    return [...s].filter((e) => SOK.test(e));
  };
  window.chSearch2 = async () => {
    if (CH.mmBusy) return;
    const me = st.get("soc:me", null),
      U = () => chSoUI();
    if (!(window.__fb && __fb.mmList)) {
      CH.mmMsg = "La recherche de partie fonctionne dans l’application Calmos, avec un compte.";
      return U();
    }
    if (!SO.uid || !SO.got || !me || !me.code) {
      CH.mmMsg = "Connecte-toi d’abord dans l’onglet Social.";
      SO.col || "conn" === SO.st || socInit();
      return U();
    }
    CH.mmBusy = 1;
    CH.mmMsg = "Recherche d’un joueur…";
    U();
    try {
      const L = (await __fb.mmList()).filter(
        (x) =>
          x.id !== SO.uid &&
          SOK.test(x.id) &&
          /^♟/.test(x.n) &&
          Date.now() - x.t < 30 * 864e5 &&
          !(CH.G[x.id] && !chRes(CH.G[x.id])),
      );
      for (const c of L) {
        try {
          await __fb.mmDel(c.id);
        } catch (e) {
          continue;
        }
        try {
          await __fb.addUid(c.id);
        } catch (e) {}
        try {
          await __fb.ping(c.id);
        } catch (e) {}
        chMark2(c.id);
        st.get("ch:mm", 0) && (st.set("ch:mm", 0), __fb.mmDel(SO.uid).catch(() => {}));
        CH.mmBusy = 0;
        CH.mmMsg = "";
        const o = document.querySelector(".sgsht");
        o && o.remove();
        return act.chInv(c.id);
      }
      await __fb.mmPut(("♟" + (me.name || "Joueur")).slice(0, 24));
      st.set("ch:mm", Date.now());
      CH.mmMsg =
        "Personne n’attend pour l’instant : ta demande est enregistrée. Le prochain joueur qui cherche une partie tombera sur toi.";
    } catch (e) {
      CH.mmMsg = "La recherche n’a pas abouti. " + (typeof scrWhy == "function" ? scrWhy(e) : "");
    }
    CH.mmBusy = 0;
    U();
  };
  window.chSoUI = () => {
    const w = document.querySelector(".chsow");
    if (!w) return;
    const mm = st.get("ch:mm", 0);
    mm &&
      window.__fb &&
      __fb.mmHas &&
      !CH.mmChk &&
      Date.now() - (CH.mmAt || 0) > 15e3 &&
      ((CH.mmChk = 1),
      (CH.mmAt = Date.now()),
      __fb
        .mmHas()
        .then((x) => {
          CH.mmChk = 0;
          x ||
            !st.get("ch:mm", 0) ||
            (st.set("ch:mm", 0),
            (CH.mmMsg = "Quelqu’un a répondu à ta recherche : ta partie est dans la liste."),
            chSyncAll(),
            chSoUI());
        })
        .catch(() => {
          CH.mmChk = 0;
        }));
    const o = st.get("soc:me", null),
      M = (t, x, b) =>
        `<div class="scsx"><b>${t}</b><p class="note">${x}</p>${b ? `<button class="btn alt" data-a="chSoc">${b}</button>` : ""}</div>`;
    const sh = document.querySelector(".sgsht");
    sh && (sh.dataset.pk = CH.pk ? "1" : "0");
    let L = "";
    if (SO.st === "na")
      L = M(
        "Une connexion est nécessaire",
        "Pour jouer en ligne, connecte-toi dans l’onglet Social.",
        "Ouvrir Social",
      );
    else if (!(SO.uid && SO.got && o && o.code)) {
      const t = SO.st === "slow" || SO.st === "err";
      L = M(
        t ? "Pas de réponse pour l’instant" : "Un instant…",
        t ? "Tes parties se chargeront dès que possible." : "Tes parties arrivent.",
      );
    } else {
      const FR = Object.keys(o.fr || {}).filter((e) => o.fr[e] > 0 && SO.P[e]),
        F = [...new Set(FR.concat(chOpp2().filter((e) => CH.G[e] || SO.P[e])))],
        O = { me: 0, them: 1, load: 2, new: 3, err: 4, end: 5 },
        srt = (x) =>
          x.sort((a, b) => O[chStat(a).k] - O[chStat(b).k] || chNm(a).localeCompare(chNm(b), "fr")),
        R = (e, inv) => {
          const t = chStat(e),
            a = inv && (t.k === "new" || t.k === "end") ? "chInv" : "chOpen",
            b =
              inv && (t.k === "new" || t.k === "end")
                ? "Défier"
                : t.k === "me"
                  ? "Jouer"
                  : t.k === "them"
                    ? "Voir"
                    : "Ouvrir";
          return `<div class="fr-i"><button class="fr-o" data-a="${a}" data-v="${esc(e)}">${socAv(e)}<span class="fr-t"><b>${esc(chNm(e))}</b><small${t.k === "me" ? ' class="scgo"' : ""}>${esc(inv && t.k === "end" ? "Partie terminée" : t.t)}</small></span></button><div class="fr-b"><button class="sb${t.k === "me" ? " buy" : ""}" data-a="${a}" data-v="${esc(e)}">${b}</button></div></div>`;
        };
      const A = srt(F.filter((e) => ["me", "them", "load", "err"].includes(chStat(e).k))),
        D = srt(F.filter((e) => chStat(e).k === "end"));
      CH.pk &&
        (L +=
          `<div class="sch2">Choisis un ami</div>` +
          (FR.length
            ? `<div class="scgl">${srt(FR.slice())
                .map((e) => R(e, 1))
                .join("")}</div>`
            : M(
                "Pas encore d’ami",
                "Ajoute un ami avec son code ami dans l’onglet Social.",
                "Ouvrir Social",
              )));
      L +=
        `<div class="sch2">Parties en cours${A.length ? " · " + A.length : ""}</div>` +
        (A.length
          ? `<div class="scgl">${A.map((e) => R(e)).join("")}</div>`
          : '<p class="note scn">Aucune partie en cours. Joue avec un ami pour commencer.</p>');
      D.length &&
        (L += `<details class="scdn"><summary>Parties terminées · ${D.length}</summary><div class="scgl">${D.map((e) => R(e)).join("")}</div></details>`);
    }
    w.innerHTML = `<section class="rc rcx pt-chess scso"><div class="rc-t"><small>Social</small><b>${mm ? "Recherche en cours" : "Parties en ligne"}</b><span>${esc(CH.mmMsg || (mm ? "Tu seras prévenu(e) dès que quelqu’un te rejoint, même plus tard." : "Avec un ami ou un joueur au hasard, plusieurs parties à la fois."))}</span></div><div class="scbt">${mm ? `<button class="rc-go" data-a="chMMx">Annuler la recherche</button>` : `<button class="rc-go" data-a="chMM"${CH.mmBusy ? " disabled" : ""}>Chercher une partie</button>`}<button class="rc-go${CH.pk ? " on" : ""}" data-a="chPk">${CH.pk ? "Fermer" : "Jouer avec un ami"}</button></div><div class="scrh">${L}</div><div class="rmrow" style="justify-content:center;width:100%"><button class="btn alt" data-a="rmNew" data-v="chess">🔑 Créer un salon</button><button class="btn alt" data-a="rmCode">🔑 Entrer un code</button></div></section>`;
  };
  setTimeout(() => {
    try {
      const _d = chHubDraw;
      chHubDraw = function () {
        const r = _d.apply(this, arguments);
        try {
          chSoUI();
        } catch (e) {}
        return r;
      };
    } catch (e) {}
    Object.assign(act, {
      chMM: () => act.chDlg("*mm"),
      chMMx: () => {
        st.set("ch:mm", 0);
        CH.mmMsg = "Recherche annulée.";
        window.__fb && __fb.mmDel && SO.uid && __fb.mmDel(SO.uid).catch(() => {});
        chSoUI();
      },
      chPk: () => {
        CH.pk = !CH.pk;
        CH.pk && chNetInit();
        chSoUI();
      },
    });
    document.addEventListener(
      "click",
      (e) => {
        if (
          e.target.closest &&
          e.target.closest(
            ".sgsht [data-a=chSoc],.sgsht [data-a=chInv],.sgsht [data-a=chOpen],.sgsht .chsow [data-a=rmNew],.sgsht .chsow [data-a=rmCode]",
          )
        ) {
          const o = e.target.closest(".sgsht"),
            w = document.querySelector(".sgw"),
            b = o.querySelector(".sgbody");
          w &&
            b &&
            !w.querySelector(".sgbody") &&
            ((b.hidden = !0), w.insertBefore(b, w.querySelector(".sgbt")));
          o.remove();
        }
      },
      !0,
    );
  }, 0);
})();
