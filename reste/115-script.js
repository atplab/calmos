(() => {
  const KEY = "calmos-family-v1";
  const read = () => {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "null");
    } catch (e) {
      return null;
    }
  };
  const write = (v) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(v));
    } catch (e) {}
    state = v;
    apply();
  };
  let state = read();
  const minor = () => !!state && state.band !== "adult";
  const socialAllowed = () =>
    !!state && (state.band === "adult" || (state.band === "teen" && state.parent === true));
  const label = () =>
    !state
      ? "À définir"
      : state.band === "adult"
        ? "18 ans ou plus"
        : state.band === "teen"
          ? state.parent
            ? "14–17 ans · accord parental validé"
            : "14–17 ans · accord parental requis"
          : "Moins de 14 ans · mode local";
  const toast = (t) => {
    try {
      typeof shToast === "function" ? shToast(t) : typeof gToast === "function" ? gToast(t) : null;
    } catch (e) {}
  };
  const close = () => {
    const x = document.getElementById("famlock");
    x && x.remove();
  };
  const logout = () => {
    try {
      window.__fb && window.__fb.u && window.__fb.out && window.__fb.out();
    } catch (e) {}
    try {
      typeof accOff === "function" && accOff();
    } catch (e) {}
    document.querySelectorAll(".fbo").forEach((x) => x.remove());
  };
  function bridge() {
    try {
      const a = window.CalmosAds;
      a &&
        typeof a.setPrivacyMode === "function" &&
        a.setPrivacyMode({
          minor: minor(),
          childDirected: minor(),
          underAgeOfConsent: minor(),
          personalizedAds: !minor(),
          maxAdContentRating: minor() ? "G" : null,
          adsEnabled: !minor(),
        });
    } catch (e) {}
  }
  function injectSetting() {
    const root = document.querySelector("#app .oth");
    if (!root || document.getElementById("fam-setting")) return;
    const s = document.createElement("section");
    s.id = "fam-setting";
    s.className = "glass play pf fam-setting";
    s.innerHTML = `<button class="tg" type="button" data-a="famAge" data-fam="age"><span>Âge et protection familiale<small>Contrôle les comptes, le social, les achats et les publicités</small></span><b>${label()}</b></button>`;
    const ab = document.querySelector("#app .abt");
    if (ab) {
      const b = s.firstElementChild;
      b.id = "fam-setting";
      b.style.cssText = "border-bottom:1px solid rgba(255,255,255,.14);border-radius:0;margin-bottom:2px";
      ab.insertBefore(b, ab.firstChild);
    } else root.appendChild(s);
  }
  function apply() {
    document.body.classList.toggle("fam-minor", minor());
    bridge();
    if (minor() && !socialAllowed()) {
      logout();
      setTimeout(() => {
        minor() && !socialAllowed() && logout();
      }, 1500);
    }
    injectSetting();
  }
  function info(title, text, buttons) {
    close();
    const o = document.createElement("div");
    o.id = "famlock";
    o.className = "fam-lock";
    o.innerHTML = `<section class="fam-card" role="dialog" aria-modal="true" aria-labelledby="famh"><h2 id="famh">${title}</h2><p>${text}</p><div class="fam-choices">${buttons}</div></section>`;
    document.body.appendChild(o);
    return o;
  }
  function ageGate(force = false) {
    if (state && !force) return apply();
    const o = info(
      "Avant de commencer",
      "Choisis ta tranche d’âge. Calmos enregistre seulement cette tranche sur cet appareil, jamais ta date de naissance.",
      `<button class="fam-btn" data-fam="adult">18 ans ou plus</button><button class="fam-btn alt" data-fam="teen">14 à 17 ans</button><button class="fam-btn ghost" data-fam="child">Moins de 14 ans</button>${force ? '<button class="fam-btn ghost" data-fam="cancel">Annuler</button>' : ""}<p class="fam-note">Ce choix sert uniquement à appliquer les protections adaptées. Aucun avantage de jeu ne dépend de l’âge.</p>`,
    );
    o.querySelector(".fam-btn").focus();
  }
  function childInfo() {
    info(
      "Mode local protégé",
      "Calmos est prévu pour les 14 ans et plus. Les jeux locaux restent accessibles, mais les comptes, les messages, les fonctions en ligne, les achats et les publicités sont désactivés sur cet appareil.",
      '<button class="fam-btn" data-fam="continue">Continuer vers les jeux</button><button class="fam-btn ghost" data-fam="change">Modifier le choix</button>',
    );
  }
  function teenInfo() {
    info(
      "Protection des 14–17 ans",
      "Les jeux locaux sont disponibles sans publicité. Un parent ou tuteur doit autoriser l’accès au compte, aux amis, aux classements, aux messages et aux achats.",
      '<button class="fam-btn" data-fam="parent">Demander l’accord d’un parent</button><button class="fam-btn alt" data-fam="continue">Continuer en mode local</button><button class="fam-btn ghost" data-fam="change">Modifier le choix</button>',
    );
  }
  function parentGate() {
    if (!state || state.band !== "teen") return;
    const a = 4 + Math.floor(Math.random() * 5),
      b = 3 + Math.floor(Math.random() * 6);
    const o = info(
      "Autorisation parentale",
      "Cette étape doit être remplie par un parent ou un tuteur légal. Les publicités resteront désactivées. Les achats pourront être autorisés séparément par le parent sur les plateformes où ils sont disponibles.",
      `<p class="fam-note">Pour accéder aux fonctions sociales, le parent doit lire et accepter les points suivants.</p><label class="fam-check"><input id="famp1" type="checkbox"> <span>Je confirme être le parent ou le tuteur légal de cet utilisateur de 14 à 17 ans.</span></label><label class="fam-check"><input id="famp2" type="checkbox"> <span>J’autorise la création d’un compte, les classements, les amis et les messages. Je comprends que ces fonctions transmettent les données décrites dans la politique de confidentialité.</span></label><label class="fam-check"><input id="famp3" type="checkbox"> <span>J’autorise les achats facultatifs de bulles avec de l’argent réel sur les plateformes où ils sont disponibles. Chaque prix doit être confirmé avant paiement.</span></label><label for="famanswer">Question pour adulte : combien font ${a} + ${b} ?</label><input class="fam-answer" id="famanswer" inputmode="numeric" autocomplete="off"><p class="fam-error" id="famerr" role="alert"></p><button class="fam-btn" data-fam="parent-ok" data-answer="${a + b}">Autoriser les fonctions sociales</button><button class="fam-btn ghost" data-fam="parent-cancel">Retour</button>`,
    );
    setTimeout(() => o.querySelector("#famp1").focus(), 20);
  }
  function restricted() {
    if (!state) return ageGate();
    if (state.band === "teen") return parentGate();
    childInfo();
  }
  document.addEventListener(
    "click",
    (e) => {
      const b = e.target.closest && e.target.closest("[data-fam]");
      if (!b) return;
      const a = b.dataset.fam;
      if (a === "age") {
        e.preventDefault();
        e.stopImmediatePropagation();
        ageGate(true);
        return;
      }
      if (a === "adult") {
        write({ band: "adult", parent: false, at: Date.now() });
        close();
      } else if (a === "teen") {
        write({ band: "teen", parent: false, at: Date.now() });
        teenInfo();
      } else if (a === "child") {
        write({ band: "child", parent: false, at: Date.now() });
        childInfo();
      } else if (a === "continue") {
        close();
        apply();
      } else if (a === "change" || a === "age") {
        ageGate(true);
      } else if (a === "cancel") {
        close();
      } else if (a === "parent") {
        parentGate();
      } else if (a === "parent-cancel") {
        teenInfo();
      } else if (a === "parent-ok") {
        const ok1 = document.getElementById("famp1")?.checked,
          ok2 = document.getElementById("famp2")?.checked,
          ok3 = document.getElementById("famp3")?.checked,
          answer = +(document.getElementById("famanswer")?.value || NaN),
          err = document.getElementById("famerr");
        if (!ok1 || !ok2 || !ok3 || answer !== +b.dataset.answer) {
          if (err) err.textContent = "Le parent doit confirmer les trois points et répondre correctement.";
          return;
        }
        write({ ...state, parent: true, parentAt: Date.now() });
        close();
        toast("Autorisation parentale enregistrée sur cet appareil.");
      }
    },
    true,
  );
  document.addEventListener(
    "click",
    (e) => {
      if (socialAllowed()) return;
      const b =
        e.target.closest &&
        e.target.closest('[data-a="tab"][data-v="soc"],[data-net],.scso button,.cvmn button');
      if (!b) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      restricted();
    },
    true,
  );
  try {
    act.famAge = () => ageGate(true);
    const oldTab = act.tab;
    act.tab = function (v) {
      if (v === "soc" && !socialAllowed()) return restricted();
      return oldTab.apply(this, arguments);
    };
  } catch (e) {}
  try {
    const oldAdsMode = adsMode;
    adsMode = function () {
      return minor() ? "" : oldAdsMode.apply(this, arguments);
    };
  } catch (e) {}
  try {
    const oldShop = shopOpen;
    shopOpen = function () {
      if (state && state.band === "child") {
        toast("Les achats sont désactivés pour les moins de 14 ans.");
        return;
      }
      if (state && state.band === "teen" && !state.parent) {
        restricted();
        return;
      }
      return oldShop.apply(this, arguments);
    };
  } catch (e) {}
  try {
    const oldSoc = socInit;
    socInit = function () {
      if (!socialAllowed()) return restricted();
      return oldSoc.apply(this, arguments);
    };
  } catch (e) {}
  try {
    const oldDb = scrDb;
    scrDb = async function () {
      if (!socialAllowed()) {
        restricted();
        return null;
      }
      return oldDb.apply(this, arguments);
    };
  } catch (e) {}
  try {
    if (window.__fb && window.__fb.open) {
      const oldOpen = window.__fb.open;
      window.__fb.open = function () {
        if (!socialAllowed()) return restricted();
        return oldOpen.apply(this, arguments);
      };
    }
  } catch (e) {}
  const mo = new MutationObserver(() => injectSetting());
  mo.observe(document.getElementById("app") || document.body, { childList: true, subtree: true });
  window.CalmosFamily = {
    get: () => state,
    isMinor: minor,
    socialAllowed,
    change: () => ageGate(true),
    requestParent: parentGate,
  };
  setTimeout(() => {
    state ? apply() : ageGate();
  }, 180);
})();
