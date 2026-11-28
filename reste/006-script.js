(() => {
  if (window.claude) return;
  const e = {
      apiKey: "AIzaSyDi7m8lfhpeSHjX-dvIuFkD8oL0PhO-o08",
      authDomain: "calmonus.firebaseapp.com",
      projectId: "calmonus",
      storageBucket: "calmonus.firebasestorage.app",
      messagingSenderId: "219014024976",
      appId: "1:219014024976:web:dcaa4e350cbfaf174c9f95",
    },
    t = "https://www.gstatic.com/firebasejs/10.14.1/",
    a = (window.__fb = { u: null, ready: !1, failed: !1 });
  let o = null;
  const n = () =>
    o ||
    (o = (async () => {
      const [o, n, s] = await Promise.all([
          import(t + "firebase-app.js"),
          import(t + "firebase-auth.js"),
          import(t + "firebase-firestore.js"),
        ]),
        r = o.initializeApp(e),
        c = n.getAuth(r),
        i = s.getFirestore(r);
      try {
        c.languageCode = "fr";
      } catch (e) {}
      return (
        await c.authStateReady(),
        (a.u = c.currentUser ? c.currentUser.email || "compte" : null),
        (a.ready = !0),
        n.onAuthStateChanged(c, (e) => {
          a.u = e ? e.email || "compte" : null;
        }),
        { A: o, Au: n, Fs: s, app: r, auth: c, db: i }
      );
    })().catch((e) => {
      throw ((a.failed = !0), (o = null), e);
    }));
  setTimeout(() => {
    n().catch(() => {});
  }, 0);
  const s = (e) => {
      const t = e && e.code;
      return "permission-denied" === t || "unauthenticated" === t ? "not_granted" : "unavailable";
    },
    r = (e) => {
      try {
        const t = e && null != e.j ? JSON.parse(e.j) : null;
        return t && "object" == typeof t ? t : {};
      } catch (e) {
        return {};
      }
    };
  ((window.claude = {
    use: async (e) => {
      let t;
      try {
        t = await n();
      } catch (e) {
        return null;
      }
      const { Fs: a, auth: o, db: i } = t;
      return "user" === e
        ? {
            id: async () => (o.currentUser ? o.currentUser.uid : null),
            can: async () => !0,
            isOwner: async () => !1,
            canEdit: async () => !1,
          }
        : "db" === e && o.currentUser
          ? {
              collection: (e) =>
                "profiles" === e
                  ? (function (e) {
                      const { Fs: t, db: a, auth: o } = e,
                        n = o.currentUser.uid;
                      return {
                        doc: (o) => ({
                          set: async (r) => {
                            try {
                              await t.setDoc(t.doc(a, "profiles/" + o), { j: JSON.stringify(r) });
                            } catch (e) {
                              const t = new Error((e && e.message) || "x");
                              throw ((t.code = s(e)), t);
                            }
                            o === n && p(e, n, r).catch(() => {});
                          },
                          get: async () => {
                            try {
                              const e = await t.getDoc(t.doc(a, "profiles/" + o));
                              return { exists: e.exists(), data: () => r(e.data()) };
                            } catch (e) {
                              const t = new Error((e && e.message) || "x");
                              throw ((t.code = s(e)), t);
                            }
                          },
                          delete: async () => {
                            try {
                              await t.deleteDoc(t.doc(a, "profiles/" + o));
                            } catch (e) {
                              const t = new Error((e && e.message) || "x");
                              throw ((t.code = s(e)), t);
                            }
                          },
                        }),
                        onSnapshot: (o, s) => {
                          const i = new Map(),
                            d = new Map(),
                            u = new Set(),
                            f = new Set();
                          let h = null,
                            b = [],
                            m = !1,
                            w = !1,
                            g = !1,
                            y = !1,
                            x = 0,
                            v = 0;
                          const S = () => {
                              ((x = 0),
                                !y &&
                                  m &&
                                  o({
                                    docs: [...i].map(([e, t]) => ({ id: e, data: () => t })),
                                    metadata: { fromCache: !1, hasPendingWrites: !1 },
                                  }));
                            },
                            E = () => {
                              y ||
                                x ||
                                !m ||
                                !(g || (w && [...d.keys()].every((e) => u.has(e)))) ||
                                (x = setTimeout(S, 40));
                            },
                            k = (e) => {
                              d.has(e) ||
                                e === n ||
                                d.set(
                                  e,
                                  t.onSnapshot(
                                    t.doc(a, "profiles/" + e),
                                    (t) => {
                                      y || (u.add(e), t.exists() ? i.set(e, r(t.data())) : i.delete(e), E());
                                    },
                                    () => {
                                      (u.add(e), E());
                                    },
                                  ),
                                );
                            },
                            j = () => {
                              const e = [],
                                t = (t) => {
                                  c.test(t) && t !== n && !e.includes(t) && e.push(t);
                                };
                              (h &&
                                h.fr &&
                                "object" == typeof h.fr &&
                                Object.entries(h.fr).forEach(([e, a]) => {
                                  +a > 0 && t(e);
                                }),
                                h && h.sg && "object" == typeof h.sg && Object.keys(h.sg).forEach(t),
                                f.forEach(t),
                                b.forEach(t));
                              const a = new Set(e.slice(0, 80));
                              (a.forEach(k),
                                d.forEach((e, t) => {
                                  a.has(t) || (e(), d.delete(t), i.delete(t), u.delete(t));
                                }));
                            },
                            C = t.onSnapshot(
                              t.doc(a, "profiles/" + n),
                              { includeMetadataChanges: !0 },
                              (t) => {
                                if (!y && (!t.metadata.fromCache || t.exists())) {
                                  if (
                                    ((h = t.exists() ? r(t.data()) : null),
                                    h ? i.set(n, h) : i.delete(n),
                                    (m = !0),
                                    j(),
                                    t.metadata.hasPendingWrites)
                                  )
                                    return (
                                      clearTimeout(v),
                                      void (v = setTimeout(() => {
                                        y || E();
                                      }, 6e3))
                                    );
                                  (clearTimeout(v), E(), h && p(e, n, h).catch(() => {}));
                                }
                              },
                              (e) => {
                                !y && s && s(e);
                              },
                            ),
                            A = t.onSnapshot(
                              t.doc(a, "inbox/" + n),
                              (e) => {
                                if (y) return;
                                const t = e.exists() ? e.data() : null;
                                ((b = t && "object" == typeof t ? Object.keys(t) : []), (w = !0), j(), E());
                              },
                              () => {
                                ((w = !0), E());
                              },
                            ),
                            D = setTimeout(() => {
                              ((g = !0), E());
                            }, 3e3),
                            P = {
                              addExtra: (e, t) => {
                                (f.add(e), i.set(e, t), u.add(e), j(), m && S());
                              },
                              stop: () => {
                                ((y = !0), clearTimeout(x), clearTimeout(D), clearTimeout(v));
                                try {
                                  C();
                                } catch (e) {}
                                try {
                                  A();
                                } catch (e) {}
                                (d.forEach((e) => {
                                  try {
                                    e();
                                  } catch (e) {}
                                }),
                                  d.clear());
                              },
                            };
                          return (
                            (l = P),
                            () => {
                              (P.stop(), l === P && (l = null));
                            }
                          );
                        },
                      };
                    })(t)
                  : {
                      doc: (t) => ({
                        set: async (o) => {
                          try {
                            await a.setDoc(a.doc(i, e + "/" + t), { j: JSON.stringify(o) });
                          } catch (e) {
                            const t = new Error((e && e.message) || "x");
                            throw ((t.code = s(e)), t);
                          }
                        },
                        get: async () => {
                          try {
                            const o = await a.getDoc(a.doc(i, e + "/" + t));
                            return { exists: o.exists(), data: () => r(o.data()) };
                          } catch (e) {
                            const t = new Error((e && e.message) || "x");
                            throw ((t.code = s(e)), t);
                          }
                        },
                        delete: async () => {
                          try {
                            await a.deleteDoc(a.doc(i, e + "/" + t));
                          } catch (e) {
                            const t = new Error((e && e.message) || "x");
                            throw ((t.code = s(e)), t);
                          }
                        },
                        onSnapshot: (o, n) =>
                          a.onSnapshot(
                            a.doc(i, e + "/" + t),
                            (e) =>
                              o({
                                id: t,
                                exists: e.exists(),
                                data: () => (e.exists() ? r(e.data()) : void 0),
                                metadata: {
                                  fromCache: e.metadata.fromCache,
                                  hasPendingWrites: e.metadata.hasPendingWrites,
                                },
                              }),
                            (e) => {
                              n && n(e);
                            },
                          ),
                      }),
                      onSnapshot: (t, o) =>
                        a.onSnapshot(
                          a.collection(i, e),
                          (e) =>
                            t({
                              docs: e.docs.map((e) => ({ id: e.id, data: () => r(e.data()) })),
                              metadata: {
                                fromCache: e.metadata.fromCache,
                                hasPendingWrites: e.metadata.hasPendingWrites,
                              },
                            }),
                          (e) => {
                            o && o(e);
                          },
                        ),
                    },
            }
          : null;
    },
  }),
    (window.fbShop = {
      live: !0,
      buy: async (e) => {
        let t;
        try {
          t = await n();
        } catch (e) {
          return { err: "x" };
        }
        const a = t.auth.currentUser;
        if (!a) return { err: "login" };
        try {
          const t = await a.getIdToken(),
            o = await fetch("https://us-central1-calmonus.cloudfunctions.net/createCheckout", {
              method: "POST",
              headers: { "Content-Type": "application/json", Authorization: "Bearer " + t },
              body: JSON.stringify({ pack: e }),
            });
          if (!o.ok) return { err: 401 === o.status ? "login" : "x" };
          const n = await o.json();
          return n.url ? ((location.href = n.url), {}) : { err: "x" };
        } catch (e) {
          return { err: "x" };
        }
      },
      playReady: async () => {
        try {
          return !!(await n()).auth.currentUser;
        } catch (e) {
          return !1;
        }
      },
      playVerify: async (e, k) => {
        let t;
        try {
          t = await n();
        } catch (e) {
          return { err: "x" };
        }
        const a = t.auth.currentUser;
        if (!a) return { err: "login" };
        try {
          const t = await a.getIdToken(),
            o = await fetch("https://us-central1-calmonus.cloudfunctions.net/verifyPlayPurchase", {
              method: "POST",
              headers: { "Content-Type": "application/json", Authorization: "Bearer " + t },
              body: JSON.stringify({ pack: e, token: k }),
            });
          return o.ok ? {} : { err: 401 === o.status ? "login" : "x" };
        } catch (e) {
          return { err: "x" };
        }
      },
      watch: (e) => {
        n()
          .then((t) => {
            let a = null;
            t.Au.onAuthStateChanged(t.auth, (o) => {
              (a && (a(), (a = null)),
                o &&
                  (a = t.Fs.onSnapshot(
                    t.Fs.doc(t.db, "buys/" + o.uid),
                    (t) => e((t.exists() && +t.data().t) || 0),
                    () => {},
                  )));
            });
          })
          .catch(() => {});
      },
    }));
  const c = /^[A-Za-z0-9_-]{1,128}$/,
    i = /^[A-HJKMNP-Z2-9]{8}$/,
    d = "fb:mk:",
    u = new Set();
  let l = null;
  async function p(e, t, a) {
    if (!a || "object" != typeof a) return;
    const { Fs: o, db: n } = e;
    let s;
    try {
      s = new Set(JSON.parse(localStorage.getItem(d + t)) || []);
    } catch (e) {
      s = new Set();
    }
    const r = [];
    "string" == typeof a.code &&
      i.test(a.code) &&
      r.push(["c:" + a.code, () => o.setDoc(o.doc(n, "codes/" + a.code), { u: t })]);
    const l = new Set();
    (Object.entries(a.fr || {}).forEach(([e, t]) => {
      +t > 0 && c.test(e) && l.add(e);
    }),
      Object.values(a.s || {}).forEach((e) => {
        e &&
          "object" == typeof e &&
          Object.entries(e).forEach(([e, t]) => {
            +t > 0 && c.test(e) && l.add(e);
          });
      }),
      l.forEach((e) => {
        e !== t && r.push(["i:" + e, () => o.setDoc(o.doc(n, "inbox/" + e), { [t]: 1 }, { merge: !0 })]);
      }));
    let p = !1;
    for (const [e, a] of r.filter((e) => !s.has(e[0]) && !u.has(t + e[0])).slice(0, 40)) {
      u.add(t + e);
      try {
        (await a(), s.add(e), (p = !0));
      } catch (a) {
        u.delete(t + e);
      }
    }
    if (p)
      try {
        localStorage.setItem(d + t, JSON.stringify([...s]));
      } catch (e) {}
  }
  ((a.mmPut = async (e) => {
    const t = await n(),
      F = t.Fs;
    await F.setDoc(F.doc(t.db, "mm/" + t.auth.currentUser.uid), {
      t: Date.now(),
      n: String(e || "").slice(0, 24),
    });
  }),
    (a.mmDel = async (e) => {
      const t = await n(),
        F = t.Fs;
      await F.deleteDoc(F.doc(t.db, "mm/" + e));
    }),
    (a.mmHas = async () => {
      const t = await n(),
        F = t.Fs;
      return (await F.getDoc(F.doc(t.db, "mm/" + t.auth.currentUser.uid))).exists();
    }),
    (a.mmList = async () => {
      const t = await n(),
        F = t.Fs;
      return (await F.getDocs(F.query(F.collection(t.db, "mm"), F.orderBy("t"), F.limit(20)))).docs.map(
        (e) => {
          const a = e.data() || {};
          return { id: e.id, t: +a.t || 0, n: String(a.n || "") };
        },
      );
    }),
    (a.ping = async (e) => {
      const t = await n(),
        F = t.Fs;
      c.test(e) &&
        (await F.setDoc(F.doc(t.db, "inbox/" + e), { [t.auth.currentUser.uid]: 1 }, { merge: !0 }));
    }),
    (a.addUid = async (e) => {
      const t = await n(),
        F = t.Fs;
      if (!c.test(e)) return;
      const o = await F.getDoc(F.doc(t.db, "profiles/" + e));
      o.exists() && l && l.addExtra(e, r(o.data()));
    }),
    (a.znSub = (e) => {
      let o = null;
      return (
        n()
          .then((t) => {
            const F = t.Fs;
            o = F.onSnapshot(
              F.doc(t.db, "zn/news"),
              (t) => {
                let a = [];
                try {
                  a = t.exists() ? JSON.parse(t.data().j).m || [] : [];
                } catch (e) {}
                e(a);
              },
              () => {},
            );
          })
          .catch(() => {}),
        () => {
          o && o();
        }
      );
    }),
    (a.znPut = async (e) => {
      const t = await n(),
        F = t.Fs;
      await F.setDoc(F.doc(t.db, "zn/news"), { j: JSON.stringify({ m: e }) });
    }),
    (a.avPut = async (e, o) => {
      const t = await n(),
        F = t.Fs;
      await F.setDoc(F.doc(t.db, "av/" + t.auth.currentUser.uid), {
        j: JSON.stringify({ m: e, n: String(o || "").slice(0, 24) }),
      });
    }),
    (a.avGet = async () => {
      const t = await n(),
        F = t.Fs,
        o = await F.getDoc(F.doc(t.db, "av/" + t.auth.currentUser.uid));
      try {
        return o.exists() ? JSON.parse(o.data().j).m || [] : [];
      } catch (e) {
        return [];
      }
    }),
    (a.avList = async () => {
      const t = await n(),
        F = t.Fs;
      return (await F.getDocs(F.query(F.collection(t.db, "av"), F.limit(200)))).docs.map((e) => {
        let o = {};
        try {
          o = JSON.parse(e.data().j);
        } catch (e) {}
        return { id: e.id, n: o.n || "", m: Array.isArray(o.m) ? o.m : [] };
      });
    }),
    (a.lookup = async (e) => {
      const t = await n(),
        { Fs: a, db: o, auth: s } = t;
      if (!s.currentUser || !i.test(e)) return null;
      const d = await a.getDoc(a.doc(o, "codes/" + e));
      if (!d.exists()) return null;
      const u = d.data(),
        p = u && u.u;
      if ("string" != typeof p || !c.test(p)) return null;
      const f = await a.getDoc(a.doc(o, "profiles/" + p));
      return f.exists() ? (l && l.addExtra(p, r(f.data())), p) : null;
    }));
  const f = {
    "auth/invalid-credential": "Adresse ou mot de passe incorrect.",
    "auth/wrong-password": "Adresse ou mot de passe incorrect.",
    "auth/user-not-found": "Adresse ou mot de passe incorrect.",
    "auth/invalid-email": "Cette adresse e-mail n’est pas valide.",
    "auth/email-already-in-use": "Un compte existe déjà avec cette adresse : connecte-toi.",
    "auth/weak-password": "Mot de passe trop court : 6 caractères au moins.",
    "auth/missing-password": "Entre ton mot de passe.",
    "auth/too-many-requests": "Trop d’essais. Réessaie dans quelques minutes.",
    "auth/network-request-failed": "Pas de connexion à internet.",
    "auth/unauthorized-domain": "Ce site n’est pas encore autorisé dans Firebase (domaines autorisés).",
    "auth/operation-not-allowed": "Cette méthode de connexion n’est pas activée dans Firebase.",
    "auth/popup-blocked": "La fenêtre Google a été bloquée par le navigateur.",
    "auth/account-exists-with-different-credential":
      "Un compte existe déjà avec cette adresse, avec une autre méthode.",
  };
  let h = null,
    b = "in";
  const m = (e) => h && h.querySelector(e);
  function w() {
    h && (h.remove(), (h = null));
  }
  function g() {
    if (!h) return;
    const e = "up" === b,
      pe = m("#fbe") ? m("#fbe").value : "",
      pp = m("#fbp") ? m("#fbp").value : "";
    ((h.innerHTML = `<div class="fbc" role="dialog" aria-modal="true" aria-labelledby="fbt"><h2 id="fbt">${e ? "Créer un compte" : "Se connecter"}</h2><p>${e ? "Un compte te permet de retrouver tes bulles, ton aquarium et tes amis sur tous tes appareils." : "Retrouve ta progression sur cet appareil."}</p><form id="fbf" novalidate><label for="fbe">Adresse e-mail</label><input id="fbe" type="email" autocomplete="email" inputmode="email" autocapitalize="off"><label for="fbp">Mot de passe</label><input id="fbp" type="password" autocomplete="${e ? "new-password" : "current-password"}"><div class="e" id="fbm" role="alert" hidden></div><button class="p" type="submit" id="fbs">${e ? "Créer mon compte" : "Me connecter"}</button></form><div class="sp">ou</div><button class="g" type="button" id="fbg">Continuer avec Google</button><p class="t">En continuant, tu acceptes les <a href="#" id="fbtc">conditions d’utilisation</a> et la <a href="./politique-confidentialite/" target="_blank" rel="noopener">politique de confidentialité</a>. Calmos s’adresse aux 14 ans et plus.</p>${e ? "" : '<button class="l" type="button" id="fbr">Mot de passe oublié ?</button>'}<button class="l" type="button" id="fbw">${e ? "J’ai déjà un compte" : "Créer un compte"}</button><button class="l" type="button" id="fbx">Plus tard</button></div>`),
      (m("#fbw").onclick = () => {
        ((b = e ? "in" : "up"), g());
      }),
      (m("#fbx").onclick = w),
      (m("#fbtc").onclick = (e) => {
        (e.preventDefault(), w());
        try {
          aboutScreen();
        } catch (e) {}
      }));
    const t = m("#fbr");
    (t && (t.onclick = k),
      (m("#fbf").onsubmit = (t) => {
        (t.preventDefault(),
          (async function (e) {
            const t = (m("#fbe").value || "").trim(),
              a = m("#fbp").value || "";
            if (!t) return y("Entre ton adresse e-mail.");
            if (!a) return y("Entre ton mot de passe.");
            (y(""), x(!0));
            try {
              const o = await n(),
                s = o.Au;
              (e
                ? await s.createUserWithEmailAndPassword(o.auth, t, a)
                : await s.signInWithEmailAndPassword(o.auth, t, a),
                S());
            } catch (e) {
              v(e);
            }
          })(e));
      }),
      (m("#fbg").onclick = E),
      (h.onclick = (e) => {
        e.target === h && w();
      }));
    const a = m("#fbe");
    a && ((a.value = pe), (m("#fbp").value = pp), a.focus());
  }
  const y = (e, t) => {
      const a = m("#fbm");
      a && ((a.className = t ? "o" : "e"), (a.hidden = !e), (a.textContent = e || ""));
    },
    x = (e) => {
      h && h.querySelectorAll("#fbs,#fbg").forEach((t) => (t.disabled = e));
      clearTimeout(window.__fbto);
      e &&
        (window.__fbto = setTimeout(() => {
          x(!1);
        }, 20000));
    },
    v = (e) => {
      x(!1);
      const t = e && e.code;
      if ("auth/popup-closed-by-user" === t || "auth/cancelled-popup-request" === t) return y("");
      if ("in" === b && ("auth/invalid-credential" === t || "auth/user-not-found" === t)) {
        y(
          "Adresse ou mot de passe incorrect. Tu n’as peut-être pas encore de compte : veux-tu en créer un ?",
        );
        const a = m("#fbm");
        if (a) {
          const c = document.createElement("button");
          c.type = "button";
          c.className = "l";
          c.style.cssText = "display:block;margin:8px auto 0;font-weight:700";
          c.textContent = "Créer un compte avec cette adresse";
          c.onclick = () => {
            ((b = "up"), g());
          };
          a.appendChild(c);
        }
        return;
      }
      y(f[t] || "Connexion impossible pour l’instant. Réessaie dans un moment.");
    };
  async function S() {
    w();
    try {
      window.__fbDone && window.__fbDone();
    } catch (e) {}
  }
  async function E() {
    if (inStore() && !window.CalmosAuth)
      return void y(
        "La connexion avec Google n’est pas encore disponible dans l’application. Utilise ton adresse e-mail pour te connecter ou créer un compte.",
      );
    (y(""), x(!0));
    try {
      const e = await n(),
        t = e.Au;
      (await (inStore() && window.CalmosAuth
        ? t.signInWithCredential(e.auth, t.GoogleAuthProvider.credential(await window.CalmosAuth.google()))
        : t.signInWithPopup(e.auth, new t.GoogleAuthProvider())),
        S());
    } catch (e) {
      v(e);
    }
  }
  async function k() {
    const e = (m("#fbe").value || "").trim();
    if (!e) return y("Entre d’abord ton adresse e-mail.");
    x(!0);
    try {
      const t = await n();
      (await t.Au.sendPasswordResetEmail(t.auth, e),
        x(!1),
        y("Un e-mail pour changer ton mot de passe vient d’être envoyé.", !0));
    } catch (e) {
      v(e);
    }
  }
  ((a.open = (e) => {
    if (!h) {
      if (((b = "up" === e ? "up" : "in"), !document.getElementById("fbcss"))) {
        const e = document.createElement("style");
        ((e.id = "fbcss"),
          (e.textContent =
            ".fbo{position:fixed;inset:0;z-index:2000;display:grid;place-items:center;padding:16px;background:rgba(8,10,40,.6);backdrop-filter:blur(4px);font-family:inherit}\n.fbo *{box-sizing:border-box}.fbc{width:min(100%,360px);background:#f6f2fc;color:#2e2a63;border-radius:20px;padding:22px 20px 18px;box-shadow:0 18px 50px rgba(0,0,20,.5);max-height:calc(100dvh - 32px);overflow:auto}\n.fbc h2{margin:0 0 4px;font:600 21px/1.25 Fraunces,Georgia,serif}.fbc p{margin:0 0 12px;font-size:14px;line-height:1.45;color:#4d4986}\n.fbc label{display:block;font-size:13px;font-weight:700;margin:10px 0 4px}.fbc input{width:100%;font:inherit;font-size:16px;padding:11px 12px;border-radius:12px;border:1.5px solid #b9b3e2;background:#fff;color:#2e2a63}\n.fbc input:focus{outline:2px solid #5458ab;outline-offset:1px}.fbc button{display:block;width:100%;font:inherit;font-weight:700;font-size:15px;min-height:46px;margin-top:10px;border-radius:14px;border:0;cursor:pointer}\n.fbc .p{background:#3d3a85;color:#fff}.fbc .g{background:#fff;color:#2e2a63;border:1.5px solid #b9b3e2}.fbc .l{background:none;color:#3d3a85;font-weight:600;text-decoration:underline;min-height:40px;margin-top:2px}\n.fbc button:disabled{opacity:.55}.fbc .e{margin:10px 0 0;color:#a12b2b;font-size:14px;font-weight:600}.fbc .o{margin:10px 0 0;color:#1b6b3d;font-size:14px;font-weight:600}.fbc .sp{margin:12px 0 2px;text-align:center;font-size:12px;color:#8a86c4}.fbc .t{margin:10px 0 0;font-size:12px;line-height:1.4;color:#4d4986;text-align:center}.fbc .t a{color:#3d3a85;font-weight:600}"),
          document.head.appendChild(e));
      }
      ((h = document.createElement("div")),
        (h.className = "fbo"),
        document.body.appendChild(h),
        g(),
        document.addEventListener("keydown", function e(t) {
          h ? "Escape" === t.key && w() : document.removeEventListener("keydown", e);
        }));
    }
  }),
    (a.lbTop = async (e) => {
      const t = await n(),
        { Fs: a, db: o } = t;
      return (
        await a.getDocs(a.query(a.collection(o, "lb/" + e + "/e"), a.orderBy("s", "desc"), a.limit(30)))
      ).docs.map((e) => {
        const t = e.data();
        return { id: e.id, s: t.s, n: t.n };
      });
    }),
    (a.lbPut = async (e, t, a) => {
      const o = await n(),
        { Fs: s, db: r, auth: c } = o;
      c.currentUser &&
        (await s.setDoc(s.doc(r, "lb/" + e + "/e/" + c.currentUser.uid), {
          s: Math.floor(t),
          n: String(a || "").slice(0, 24),
          t: Date.now(),
        }));
    }),
    (a.lbDel = async (e) => {
      const t = await n(),
        { Fs: a, db: o, auth: s } = t;
      s.currentUser && (await a.deleteDoc(a.doc(o, "lb/" + e + "/e/" + s.currentUser.uid)));
    }),
    (a.del = async () => {
      const t = await n(),
        { Fs: F, db: D, auth: A, Au: U } = t,
        u = A.currentUser;
      if (!u) return "none";
      const id = u.uid,
        T = async (f) => {
          try {
            await f();
          } catch (e) {}
        };
      let P = null;
      try {
        const d = await F.getDoc(F.doc(D, "profiles/" + id));
        P = d.exists() ? r(d.data()) : null;
      } catch (e) {}
      if (P && "string" == typeof P.code) await T(() => F.deleteDoc(F.doc(D, "codes/" + P.code)));
      try {
        const q = await F.getDocs(F.collection(D, "data/users/" + id));
        for (const d of q.docs) await T(() => F.deleteDoc(d.ref));
      } catch (e) {}
      for (const b of ["g2048", "tetris", "pc", "po", "pu", "ca", "bl", "gf", "so", "zr", "zb", "zg", "zc"])
        await T(() => F.deleteDoc(F.doc(D, "lb/" + b + "/e/" + id)));
      await T(() => F.deleteDoc(F.doc(D, "mm/" + id)));
      await T(() => F.deleteDoc(F.doc(D, "av/" + id)));
      if (P && P.fr && "object" == typeof P.fr)
        for (const f of Object.keys(P.fr)) {
          if (!c.test(f)) continue;
          const k = [id, f].sort();
          await T(() => F.deleteDoc(F.doc(D, "cv/" + k[0] + "_" + k[1] + "_" + id)));
        }
      await T(() => F.deleteDoc(F.doc(D, "profiles/" + id)));
      try {
        await U.deleteUser(u);
      } catch (e) {
        return e && "auth/requires-recent-login" === e.code ? "recent" : "err";
      }
      return "ok";
    }),
    (a.out = async () => {
      try {
        const e = await n();
        await e.Au.signOut(e.auth);
      } catch (e) {}
      try {
        window.__fbOut && window.__fbOut();
      } catch (e) {}
    }));
})();
