(() => {
  /* Lobby « Salle de jeux » : les tables (air hockey, billard…) dans une salle animée. Ajouter un jeu : son id dans SJ + sa config dans CF + son dessin dans TB. */
  const SJ = ["airhockey", "billard"];
  window.SJL = SJ;
  const HID = "sallejeux";
  const JS = {
    id: HID,
    n: "Salle de jeux",
    ic: "",
    a: "#5fd0a0",
    b: "#14302a",
    t: "Les tables",
    s: "Air hockey et billard dans la salle de jeux.",
    sp: "",
  };
  try {
    window.GIL &&
      (GIL[HID] =
        '<ellipse cx="32" cy="58" rx="19" ry="3.6" fill="#000" opacity=".22"/><rect x="5" y="5" width="54" height="52" rx="12" fill="#14302a"/><path d="M24 8h16l-3 6H27z" fill="#ffd27a"/><path d="M27 14h10l12 16H15z" fill="#ffe8a8" opacity=".25"/><rect x="9" y="30" width="46" height="20" rx="4" fill="#6a3e22"/><rect x="12" y="33" width="40" height="14" rx="2" fill="#2f9a5e"/><circle cx="24" cy="40" r="2.6" fill="#fff"/><circle cx="36" cy="38" r="2.6" fill="#ffd23a"/><circle cx="40" cy="43" r="2.6" fill="#e8605a"/><circle cx="12.5" cy="33.5" r="1.6" fill="#111"/><circle cx="51.5" cy="33.5" r="1.6" fill="#111"/><circle cx="12.5" cy="46.5" r="1.6" fill="#111"/><circle cx="51.5" cy="46.5" r="1.6" fill="#111"/>');
    const i = GD.findIndex((g) => g.id === "billard");
    GD.splice(i < 0 ? GD.length : i, 0, JS);
    ALL.push(JS);
    GUNL.includes(HID) || GUNL.push(HID);
    const m = GCAT.find((c) => c[0] === "mots");
    m && !m[2].includes(HID) && m[2].push(HID);
  } catch (e) {}
  const IC = {
    r: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h11l3 3v13H5z"/><path d="M9 10h6M9 14h6"/></svg>',
    o: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
    l: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>',
    n: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15 14.5c3 0 6 2 6 5"/></svg>',
  };
  /* config des boutons : sélecteur dans le lobby du jeu (caché), libellé, sous-titre */
  const CF = {
    airhockey: {
      n: "Air hockey",
      play: () => {
        const b = q("[data-a=ahLv]");
        return ["[data-a=ahLv]", "Jouer", "Contre l’IA · Niveau " + (+((b && b.dataset.v) || 0) + 1)];
      },
      pill: ["[data-a=ahLoc]", "À deux", "Sur le même écran"],
      side: [
        ["lv", "Niveaux", IC.l],
        ["on", "En ligne", IC.n],
      ],
    },
    billard: {
      n: "Billard",
      play: () => {
        const v = window.biAiLv ? biAiLv() : 0;
        return [
          `[data-a=biGo][data-v="ai:${v}"]`,
          "Jouer",
          "Contre l’IA · " + ["Débutant", "Confirmé", "Expert"][v],
        ];
      },
      pill: ['[data-a=biGo][data-v="duo:0"]', "À deux", "Chacun son tour"],
      left: () =>
        B(
          "sjAim",
          '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="7"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/></svg>',
          "Visée<br>" + ["aucune", "courte", "complète"][st.get("bi:guide", 2)],
        ),
      side: [
        [
          '[data-a=biGo][data-v="libre:0"]',
          "Libre",
          '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 8a4 4 0 1 0 0 8c4 0 6-8 10-8a4 4 0 1 1 0 8c-4 0-6-8-10-8z"/></svg>',
          "sjDo",
        ],
        ["on", "Social", IC.n],
        [
          "sk",
          "Tables",
          '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M6 17v3M18 17v3"/><circle cx="8" cy="12" r="1.2"/></svg>',
        ],
      ],
    },
  };
  const css = document.createElement("style");
  css.textContent = `
#sjwall{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;background:linear-gradient(180deg,#0e1f1c 0%,#13302a 42%,#3a1e14 42.2%,#2a140e 60%,#1a0c08 100%)}
#sjwall::before{content:"";position:absolute;left:0;right:0;top:34%;height:8.2%;background:repeating-linear-gradient(90deg,#4a2a1a 0 3px,#5a3420 3px 46px);box-shadow:0 -3px 0 #7a4a2a,0 10px 18px rgba(0,0,0,.4)}
#sjwall::after{content:"";position:absolute;left:0;right:0;bottom:0;height:58%;background:radial-gradient(60% 40% at 50% 30%,rgba(255,220,150,.16),transparent 70%),repeating-conic-gradient(from 45deg,rgba(0,0,0,.18) 0 25%,transparent 0 50%) 0 0/46px 46px;mix-blend-mode:normal}
#sjwall .neon{position:absolute;top:19%;left:50%;transform:translateX(-50%);font:800 clamp(18px,5.5vw,30px)/1 "Fraunces",Georgia,serif;letter-spacing:.08em;color:#bfffe6;text-shadow:0 0 6px #5fffc0,0 0 16px #2fdc9a,0 0 34px #2fdc9a;animation:sjNe 7s infinite;white-space:nowrap}
#sjwall .neon i{font-style:normal;color:#ffd0f0;text-shadow:0 0 6px #ff6ad5,0 0 18px #ff3ab0}
@keyframes sjNe{0%,18%,21%,60%,100%{opacity:1}19%,20%,61%{opacity:.35}}
#sjwall .lamp{position:absolute;top:0;left:50%;width:min(340px,80vw);height:62%;transform:translateX(-50%);background:linear-gradient(180deg,transparent 0 16%,rgba(255,230,160,.0) 16%),radial-gradient(50% 100% at 50% 0,rgba(255,226,150,.22),transparent 70%);clip-path:polygon(38% 18%,62% 18%,100% 100%,0 100%)}
#sjwall .dust{position:absolute;width:3px;height:3px;border-radius:50%;background:#fff6d8;opacity:.0;animation:sjDu linear infinite}
@keyframes sjDu{0%{transform:translate(0,0);opacity:0}20%{opacity:.5}100%{transform:translate(20px,-120px);opacity:0}}
body.sjhall #app{overflow:visible}
.sjw{position:relative;z-index:1;color:#f0fff8;min-height:calc(100dvh - 52px);display:flex;flex-direction:column}
.sjw .vztp{display:flex;align-items:center;gap:8px}.sjw .vzti{flex:1;min-width:0;text-align:center}.sjw .vzti b{display:block;font:700 1.05rem/1.15 Fraunces,Georgia,serif}.sjw .vzti small{opacity:.7}
.sjpl{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin:10px 0 0}.sjpl button{border:0;border-radius:999px;padding:7px 14px;font:700 13px system-ui;color:#d8fff0;background:rgba(10,40,34,.75);box-shadow:inset 0 0 0 1.5px rgba(95,255,192,.35)}.sjpl button[aria-selected=true]{color:#0e1f1c;background:linear-gradient(#bfffe6,#5fd0a0);box-shadow:0 0 14px rgba(95,255,192,.6)}
.sjst{position:relative;flex:1;overflow:visible;min-height:300px;display:flex;align-items:center;justify-content:center;perspective:900px;touch-action:pan-y}
.sjtb{position:relative;width:min(70vw,300px);aspect-ratio:3/4.4;transform-style:preserve-3d;transition:transform .5s cubic-bezier(.3,1.3,.5,1),opacity .35s;margin-top:-8%}
.sj3{position:absolute;inset:0;transform-style:preserve-3d;transform:rotateX(50deg) rotateZ(0deg)}
@keyframes sjSw{to{transform:rotateX(50deg) rotateZ(8deg)}}
.sj3 canvas{position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:12px;transform:translateZ(0);box-shadow:0 0 0 2px rgba(0,0,0,.35)}
.sj3 i{position:absolute;display:block;font-style:normal}
.sjtb{--sd:#3a1e10;--sf:#5a321c;--lg:#2a140a;--th:30px}.sjtb.ah{--sd:#0a1a3a;--sf:#16305a;--lg:#0a1020;--th:34px}
.sj3 .ff{left:0;right:0;bottom:0;height:var(--th);background:linear-gradient(var(--sf),var(--sd));transform-origin:bottom;transform:rotateX(90deg);border-radius:0 0 10px 10px}
.sj3 .fb{left:0;right:0;top:0;height:var(--th);background:var(--sd);transform-origin:top;transform:rotateX(-90deg)}
.sj3 .fl{left:0;top:0;bottom:0;width:var(--th);background:linear-gradient(90deg,var(--sd),var(--sf));transform-origin:left;transform:rotateY(90deg)}
.sj3 .fr{right:0;top:0;bottom:0;width:var(--th);background:linear-gradient(270deg,var(--sd),var(--sf));transform-origin:right;transform:rotateY(-90deg)}
.sjtb.ah .ff{box-shadow:inset 0 3px 0 #2fd0ff,0 0 14px rgba(47,208,255,.6)}.sjtb.ah .fl,.sjtb.ah .fr{box-shadow:inset 0 0 0 1px rgba(47,208,255,.5)}
.sj3 .lg{width:22px;height:120px;background:linear-gradient(90deg,var(--lg),var(--sf) 50%,var(--lg));transform-origin:top;transform:translateZ(calc(var(--th) * -1)) rotateX(-90deg);border-radius:0 0 6px 6px}
.sjtb.bi .lg{width:26px;border-radius:0 0 10px 10px}
.sj3 .l1{left:3%;top:3%}.sj3 .l2{right:3%;top:3%}.sj3 .l3{left:3%;bottom:-120px}.sj3 .l4{right:3%;bottom:-120px}.sj3 .l3,.sj3 .l4{transform-origin:top;transform:translateY(0) translateZ(calc(var(--th) * -1)) rotateX(-90deg)}
.sj3 .sh{left:-6%;right:-6%;top:-4%;bottom:-4%;background:radial-gradient(closest-side,rgba(0,0,0,.55),transparent);transform:translateZ(-150px);filter:blur(6px)}
.sjtb.out-l{transform:translateX(-130%) rotateY(-25deg);opacity:0}.sjtb.out-r{transform:translateX(130%) rotateY(25deg);opacity:0}
.sjtb .lk{position:absolute;left:50%;top:50%;translate:-50% -50%;transform:translateZ(240px);width:max-content;max-width:92%;display:block;background:rgba(14,16,36,.84);border-radius:999px;font:800 15px system-ui;color:#fff;text-align:center;padding:12px 18px;pointer-events:none;box-shadow:0 6px 18px rgba(0,0,0,.4)}
.sjar{position:absolute;top:50%;transform:translateY(-50%);z-index:3;width:42px;height:42px;border-radius:50%;border:0;background:rgba(10,40,34,.75);color:#bfffe6;font-size:22px;box-shadow:inset 0 0 0 1.5px rgba(95,255,192,.4)}.sjar.l{left:6px}.sjar.r{right:6px}
.sjw .vzbt{margin-top:auto}
.sjbody{display:none}
.sjsht{position:fixed;inset:0;z-index:60;background:rgba(0,10,8,.6);display:flex;align-items:flex-end;justify-content:center;animation:sjIn .25s}.sjspn{width:min(560px,100%);max-height:86dvh;overflow:auto;background:linear-gradient(#13302a,#0c1f1b);border-radius:22px 22px 0 0;padding:14px 12px 24px;box-shadow:0 -10px 40px rgba(0,0,0,.5)}.sjsx{display:flex;align-items:center;justify-content:space-between;padding:0 4px 8px}.sjsx b{font:700 1.1rem Fraunces,Georgia,serif}.sjsx button{border:0;background:rgba(255,255,255,.12);color:#fff;width:34px;height:34px;border-radius:50%;font-size:16px}
.sjsht .sjbody{display:block}.sjsht .sjbody>.top{display:none}.sjsht[data-m=on] .sjbody .story{display:none}
@keyframes sjIn{from{opacity:0}}
@media (min-width:760px){.sjtb{width:min(40vw,380px)}}`;
  document.head.appendChild(css);

  const q = (s) => document.querySelector(".sjbody " + s);
  const lk = (id) => {
    try {
      return (typeof gHid0 === "function" && gHid0(id)) || (typeof gLock === "function" && gLock(id));
    } catch (e) {
      return !1;
    }
  };
  let ON = 0,
    cu = 0,
    RAF = 0,
    IN = 0,
    PEND = null;
  const STS = {};
  const slide = () => {
    if (!PEND) return;
    const t = document.getElementById("sjtb"),
      stg = t && t.parentElement;
    if (!t || !stg || t.dataset.sl) return;
    const { old, dir } = PEND;
    PEND = null;
    t.dataset.sl = 1;
    const s3 = old.querySelector(".sj3"),
      s3n = t.querySelector(".sj3");
    s3 && s3n && (s3n.style.transform = s3.style.transform);
    old.style.position = "absolute";
    old.style.pointerEvents = "none";
    stg.appendChild(old);
    const E = "cubic-bezier(.45,0,.2,1)";
    old
      .animate([{ transform: "translateX(0)" }, { transform: `translateX(${-dir * 140}vw)` }], {
        duration: 560,
        easing: E,
        fill: "forwards",
      })
      .finished.then(() => old.remove())
      .catch(() => old.remove());
    t.animate([{ transform: `translateX(${dir * 140}vw)` }, { transform: "translateX(0)" }], {
      duration: 560,
      easing: E,
    });
  };
  const sel = () => {
    const v = st.get("sj:sel", null);
    return SJ.includes(v) ? v : SJ.find((g) => !lk(g)) || SJ[0];
  };
  const G = (id) => ALL.find((g) => g.id === id) || { n: id };
  const B = (a, ic, t, v) =>
    `<button class="vzb" data-a="${a}"${v != null ? ` data-v="${v}"` : ""}><i>${ic}</i><span>${t}</span></button>`;
  const wall = () => {
    document.body.classList.add("sjhall");
    if (!document.getElementById("sjwall")) {
      const w = document.createElement("div");
      w.id = "sjwall";
      w.innerHTML =
        '<div class="lamp"></div><div class="neon">SALLE <i>DE</i> JEUX</div>' +
        [...Array(14)]
          .map(
            () =>
              `<i class="dust" style="left:${30 + Math.random() * 40}%;top:${30 + Math.random() * 30}%;animation-duration:${6 + Math.random() * 8}s;animation-delay:-${Math.random() * 10}s"></i>`,
          )
          .join("");
      document.body.appendChild(w);
    }
    window.sjWI ||
      (window.sjWI = setInterval(() => {
        if (!document.querySelector(".sjw")) {
          const x = document.getElementById("sjwall");
          x && x.remove();
          document.body.classList.remove("sjhall");
          cancelAnimationFrame(RAF);
          RAF = 0;
        }
      }, 400));
  };
  const btns = (id) => {
    if (lk(id)) {
      const t = typeof gOpenAt === "function" ? gOpenAt(id) : 0;
      return `<div class="vzhl">${B("rulesGo", IC.r, "Règles")}</div><div class="vzcn"><button class="vzbig" disabled>🔒 Bientôt<small>${"airhockey" === id ? "Disponible le 5 décembre" : t > Date.now() ? "Disponible le " + new Date(t).toLocaleDateString("fr", { day: "numeric", month: "long" }) : "Continue l’aventure"}</small></button></div><div class="vzhr"></div>`;
    }
    const c = CF[id],
      p = c.play();
    return `<div class="vzhl">${B("rulesGo", IC.r, "Règles")}${c.left ? c.left() : ""}</div><div class="vzcn"><button class="vzbig" data-a="sjDo" data-v='${p[0]}'>${p[1]}<small>${p[2]}</small></button><button class="vzpill" data-a="sjDo" data-v='${c.pill[0]}'>${c.pill[1]}<small>${c.pill[2]}</small></button></div><div class="vzhr">${c.side.map(([v, t, ic, a]) => B(a || "sjSh", ic, t, v)).join("")}</div>`;
  };
  const frame = (
    id,
  ) => `<div class="sjw"><div class="top stk vztp"><button class="back" data-a="sjHm">‹ Accueil</button><div class="vzti"><b>Salle de jeux</b><small>Les tables de Zeni</small></div><span class="chip">🫧 ${typeof FLX === "function" ? FLX() : ""}</span></div>
<div class="sjpl" role="tablist">${SJ.map((g) => `<button role="tab" data-a="sjSel" data-v="${g}" aria-selected="${g === id}">${lk(g) ? "🔒 " : ""}${CF[g].n}</button>`).join("")}</div>
<div class="sjst"><button class="sjar l" data-a="sjMv" data-v="-1" aria-label="Table précédente">‹</button><div class="sjtb ${id === "billard" ? "bi" : "ah"}" id="sjtb"><div class="sj3"><i class="fb"></i><i class="lg l1"></i><i class="lg l2"></i><i class="lg l3"></i><i class="lg l4"></i><i class="fl"></i><i class="fr"></i><i class="ff"></i><canvas id="sjcv" width="330" height="484"></canvas><i class="sh"></i></div>${lk(id) ? '<div class="lk">🔒 Bientôt dans la salle</div>' : ""}</div><button class="sjar r" data-a="sjMv" data-v="1" aria-label="Table suivante">›</button></div>
<div class="vzbt">${btns(id)}</div><div class="sjbody"></div></div>`;
  /* rend le lobby d’origine du jeu, puis l’habille avec la salle */
  const wrap = () => {
    if (!ON) return;
    const a = document.getElementById("app");
    if (!a || a.querySelector(".sjw")) return;
    if (!a.querySelector(".story")) return;
    const kids = [...a.childNodes];
    a.innerHTML = frame(cu);
    const bd = a.querySelector(".sjbody");
    kids.forEach((k) => bd.appendChild(k));
    const os = document.querySelector(".sjsht .sjspn"),
      ob = os && os.querySelector(".sjbody");
    if (ob) {
      bd.remove();
      ob.replaceWith(bd);
      bd.style.display = "block";
    }
    wall();
    anim();
    bindSw();
    slide();
  };
  const show = (id, dir) => {
    const old = dir && document.getElementById("sjtb");
    old && ((old.id = ""), old.querySelector("canvas") && (old.querySelector("canvas").id = ""));
    cu = id;
    ON = 1;
    st.set("sj:sel", id);
    const locked = lk(id);
    if (!locked) {
      IN = 1;
      try {
        _o.call(act, id);
      } catch (e) {}
      IN = 0;
    } else document.getElementById("app").innerHTML = `<div class="story" hidden></div>`;
    ON = 1;
    if (!document.querySelector("#app .story")) {
      document.getElementById("app").innerHTML = `<div class="story" hidden></div>`;
    }
    wrap();
    try {
      theme(id);
    } catch (e) {}
    PEND = dir && old ? { old, dir } : null;
    slide();
  };
  const mo = new MutationObserver(() => {
    if (!ON) return;
    const a = document.getElementById("app");
    if (a && !a.querySelector(".sjw")) {
      if (a.querySelector(".story")) requestAnimationFrame(wrap);
      else {
        const s = document.querySelector(".sjsht");
        s && s.remove();
      }
    }
  });
  setTimeout(() => {
    const a = document.getElementById("app");
    a && mo.observe(a, { childList: !0 });
  }, 200);
  const sheet = (m) => {
    const bd = document.querySelector("#app .sjbody");
    if (!bd) return;
    const pt =
        cu === "billard" && (m === "on" || m === "sk")
          ? m === "on"
            ? bd.querySelector("#bidd")
            : (bd.querySelector(".bisk") || {}).parentElement
          : null,
      mk = pt ? document.createComment("p") : null;
    pt && (pt.parentNode.insertBefore(mk, pt), m === "on" && pt.classList.add("open"));
    const o = document.createElement("div");
    o.className = "sjsht";
    o.dataset.m = m || "";
    o.innerHTML = `<div class="sjspn"><div class="sjsx"><b>${G(cu).n}</b><button aria-label="Fermer">✕</button></div></div>`;
    o.querySelector(".sjspn").appendChild(pt || bd);
    document.body.appendChild(o);
    const close = () => {
      const w = document.querySelector(".sjw");
      pt && mk.parentNode && (mk.parentNode.insertBefore(pt, mk), mk.remove());
      !pt && w && !w.querySelector(".sjbody") && w.appendChild(bd);
      o.remove();
      const v = document.querySelector(".sjw .vzbt");
      v && (v.innerHTML = btns(cu));
    };
    o.addEventListener("click", (e) => {
      if (e.target === o || e.target.closest(".sjsx button")) return close();
      const b = e.target.closest("[data-a]");
      b && /^rm(New|Code)$/.test(b.dataset.a) && close();
      b &&
        b.dataset.a === "biGo" &&
        b.dataset.v.startsWith("ai:") &&
        st.set("sj:bi", +b.dataset.v.split(":")[1]);
    });
    setTimeout(() => {
      const t =
        m === "lv"
          ? bd.querySelector("[data-a=ahDd],[data-a=biGo]")
          : m === "on"
            ? bd.querySelector("[data-a=ahOnT],[data-a=rmNew],#bonl")
            : m === "sk"
              ? bd.querySelector(".bisk")
              : null;
      if (t) {
        m === "lv" && t.dataset.a === "ahDd" && t.click();
        t.scrollIntoView({ block: "center" });
      }
    }, 60);
  };
  /* ---- tables animées ---- */

  const TB = {
    airhockey(c, w, h, s, dt) {
      if (!s.p) {
        s.p = { x: w / 2, y: h / 2, vx: 150, vy: 260 };
        s.a = { x: w / 2, y: h * 0.85 };
        s.b = { x: w / 2, y: h * 0.15 };
        s.tr = [];
        s.sc = [0, 0];
        s.fl = 0;
      }
      const p = s.p,
        R = 11,
        M = 20;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      const m = 24;
      if (p.x < m + R || p.x > w - m - R) {
        p.vx *= -1;
        p.x = Math.max(m + R, Math.min(w - m - R, p.x));
      }
      const gw = w * 0.32;
      if (p.y < m + R || p.y > h - m - R) {
        if (Math.abs(p.x - w / 2) < gw / 2) {
          s.sc[p.y < h / 2 ? 1 : 0]++;
          s.fl = 1;
          p.x = w / 2;
          p.y = h / 2;
          p.vx = (Math.random() - 0.5) * 300;
          p.vy = (Math.random() < 0.5 ? -1 : 1) * 240;
        } else {
          p.vy *= -1;
          p.y = Math.max(m + R, Math.min(h - m - R, p.y));
        }
      }
      [
        [s.a, 1],
        [s.b, -1],
      ].forEach(([q, d]) => {
        const tx = p.x + Math.sin(s.t * 2 + d) * 20,
          ty =
            d > 0 ? Math.max(h * 0.6, Math.min(h - 40, p.y + 30)) : Math.min(h * 0.4, Math.max(40, p.y - 30));
        q.x += (tx - q.x) * dt * 4;
        q.y += (ty - q.y) * dt * 3;
        const dx = p.x - q.x,
          dy = p.y - q.y,
          dd = Math.hypot(dx, dy);
        if (dd < R + M) {
          const nx = dx / dd,
            ny = dy / dd,
            sp = Math.max(280, Math.hypot(p.vx, p.vy));
          p.vx = nx * sp;
          p.vy = ny * sp;
          p.x = q.x + nx * (R + M + 1);
          p.y = q.y + ny * (R + M + 1);
          s.hit = 0.2;
        }
      });
      const sp = Math.hypot(p.vx, p.vy);
      sp > 520 && ((p.vx *= 0.995), (p.vy *= 0.995));
      s.tr.push([p.x, p.y]);
      s.tr.length > 12 && s.tr.shift();
      c.fillStyle = "#0e2a4a";
      c.fillRect(0, 0, w, h);
      c.fillStyle = "#e8f4ff";
      c.beginPath();
      c.roundRect(m - 6, m - 6, w - 2 * m + 12, h - 2 * m + 12, 30);
      c.fill();
      for (let y = m; y < h - m; y += 16)
        for (let x = m + ((y / 16) % 2) * 8; x < w - m; x += 16) {
          c.fillStyle = "rgba(80,120,170,.25)";
          c.fillRect(x, y, 1.5, 1.5);
        }
      c.strokeStyle = "#e8605a";
      c.lineWidth = 3;
      c.beginPath();
      c.moveTo(m, h / 2);
      c.lineTo(w - m, h / 2);
      c.stroke();
      c.beginPath();
      c.arc(w / 2, h / 2, 40, 0, 7);
      c.stroke();
      c.strokeStyle = "#5a8ae8";
      [m, h - m].forEach((y) => {
        c.beginPath();
        c.arc(w / 2, y, gw * 0.6, y < h / 2 ? 0 : Math.PI, y < h / 2 ? Math.PI : 0);
        c.stroke();
      });
      c.fillStyle = "#122";
      [m - 6, h - m].forEach((y) => c.fillRect(w / 2 - gw / 2, y, gw, 6));
      c.shadowColor = "#2fd0ff";
      c.shadowBlur = 16;
      c.strokeStyle = "#2fd0ff";
      c.lineWidth = 4;
      c.beginPath();
      c.roundRect(m - 6, m - 6, w - 2 * m + 12, h - 2 * m + 12, 30);
      c.stroke();
      c.shadowBlur = 0;
      s.tr.forEach(([x, y], i) => {
        c.globalAlpha = (i / s.tr.length) * 0.35;
        c.fillStyle = "#ff3ab0";
        c.beginPath();
        c.arc(x, y, R * (i / s.tr.length), 0, 7);
        c.fill();
      });
      c.globalAlpha = 1;
      c.fillStyle = "rgba(0,20,60,.3)";
      [
        [p, R],
        [s.a, M],
        [s.b, M],
      ].forEach(([q, rr]) => {
        c.beginPath();
        c.ellipse(q.x + 3, q.y + 5, rr * 1.05, rr * 0.85, 0, 0, 7);
        c.fill();
      });
      const host = c.canvas.parentElement,
        pc = (x, y, z) =>
          `left:${((x / w) * 100).toFixed(2)}%;top:${((y / h) * 100).toFixed(2)}%;transform:translate(-50%,-50%) translateZ(${z}px)`,
        A = -(s.sw || 0);
      if (!s.D || !s.D.p.isConnected) {
        const mk = (cl, st) => {
          const e = document.createElement("i");
          e.className = cl;
          st && (e.style.cssText = st);
          host.appendChild(e);
          return e;
        };
        s.D = {
          p0: mk("ahp b"),
          p: mk("ahp"),
          a0: mk("ahm b", "--c:#e8605a"),
          a: mk("ahm", "--c:#e8605a"),
          ak: mk("ahk", "--c:#e8605a"),
          b0: mk("ahm b", "--c:#5a8ae8"),
          b: mk("ahm", "--c:#5a8ae8"),
          bk: mk("ahk", "--c:#5a8ae8"),
        };
      }
      const D = s.D,
        pw = `width:${(((R * 2) / w) * 100).toFixed(2)}%;`,
        mw = `width:${(((M * 2) / w) * 100).toFixed(2)}%;`,
        kw = `width:${(((M * 0.9) / w) * 100).toFixed(2)}%;`;
      D.p0.style.cssText = pw + pc(p.x, p.y, 1);
      D.p.style.cssText = pw + pc(p.x, p.y, 4);
      [
        ["a", s.a, "#e8605a"],
        ["b", s.b, "#5a8ae8"],
      ].forEach(([k, q, col]) => {
        D[k + "0"].style.cssText = `--c:${col};` + mw + pc(q.x, q.y, 1);
        D[k].style.cssText = `--c:${col};` + mw + pc(q.x, q.y, 6);
        D[k + "k"].style.cssText =
          `--c:${col};` + kw + pc(q.x, q.y, 15) + ` rotateZ(${A.toFixed(2)}deg) rotateX(-50deg)`;
      });
      c.font = "800 16px ui-monospace,Menlo,monospace";
      c.fillStyle = "#5a8ae8";
      c.textAlign = "left";
      c.fillText(s.sc[1], 10, h / 2 - 8);
      c.fillStyle = "#e8605a";
      c.fillText(s.sc[0], 10, h / 2 + 22);
      if (s.fl > 0) {
        s.fl -= dt;
        c.fillStyle = `rgba(255,58,176,${s.fl * 0.35})`;
        c.fillRect(0, 0, w, h);
        c.globalAlpha = Math.min(1, s.fl * 2);
        c.fillStyle = "#fff";
        c.font = "800 30px Fraunces,Georgia,serif";
        c.textAlign = "center";
        c.fillText("BUT !", w / 2, h / 2 - 50);
        c.globalAlpha = 1;
      }
    },
    billard(c, w, h, s, dt) {
      const r = 9,
        m = 30,
        P = [
          [m, m],
          [w - m, m],
          [m, h / 2],
          [w - m, h / 2],
          [m, h - m],
          [w - m, h - m],
        ],
        COL = [
          "#fff",
          "#ffd23a",
          "#2a5ae8",
          "#e8302a",
          "#7a2ad0",
          "#ff8a2a",
          "#1a9a4a",
          "#8a1a1a",
          "#111",
          "#ffd23a",
          "#2a5ae8",
          "#e8302a",
          "#7a2ad0",
          "#ff8a2a",
          "#1a9a4a",
          "#8a1a1a",
        ];
      if (!s.B) {
        s.B = [];
        s.rk = 0;
      }
      const rack = () => {
        s.B = [{ x: w / 2, y: h * 0.75, vx: 0, vy: 0, c: 0, in: 0 }];
        let k = 1;
        for (let row = 0; row < 5; row++)
          for (let i = 0; i <= row; i++)
            s.B.push({
              x: w / 2 + (i - row / 2) * r * 2.05,
              y: h * 0.3 - row * r * 1.8,
              vx: 0,
              vy: 0,
              c: k++,
              in: 0,
            });
        s.cue = 1.2;
        s.ct = 0;
      };
      if (!s.B.length) rack();
      const live = s.B.filter((b) => !b.in),
        still = live.every((b) => Math.hypot(b.vx, b.vy) < 4),
        cb = s.B[0];
      if (still) {
        if (cb.in) {
          cb.in = 0;
          cb.x = w / 2;
          cb.y = h * 0.75;
          cb.a = 1;
        }
        if (live.length < 5) return (rack(), void 0);
        s.ct += dt;
        if (s.ct > 1.4) {
          const t = live.filter((b) => b.c)[Math.floor(Math.random() * (live.length - 1))];
          if (t) {
            const dx = t.x - cb.x,
              dy = t.y - cb.y,
              d = Math.hypot(dx, dy),
              sp = 520 + Math.random() * 260;
            cb.vx = (dx / d) * sp + (Math.random() - 0.5) * 30;
            cb.vy = (dy / d) * sp + (Math.random() - 0.5) * 30;
          }
          s.ct = 0;
          s.shot = 0.25;
        }
      }
      const sub = 3;
      for (let k = 0; k < sub; k++) {
        const d = dt / sub;
        live.forEach((b) => {
          b.x += b.vx * d;
          b.y += b.vy * d;
          b.vx *= 1 - 1.1 * d;
          b.vy *= 1 - 1.1 * d;
          if (b.x < m - 6 + r || b.x > w - m + 6 - r) {
            b.vx *= -0.9;
            b.x = Math.max(m - 6 + r, Math.min(w - m + 6 - r, b.x));
          }
          if (b.y < m - 6 + r || b.y > h - m + 6 - r) {
            b.vy *= -0.9;
            b.y = Math.max(m - 6 + r, Math.min(h - m + 6 - r, b.y));
          }
          P.forEach(([px, py]) => {
            Math.hypot(b.x - px, b.y - py) < r * 1.7 && ((b.in = 1), (b.vx = b.vy = 0), (s.pk = 0.4));
          });
        });
        for (let i = 0; i < live.length; i++)
          for (let j = i + 1; j < live.length; j++) {
            const a = live[i],
              b = live[j];
            if (a.in || b.in) continue;
            const dx = b.x - a.x,
              dy = b.y - a.y,
              dd = Math.hypot(dx, dy);
            if (dd < 2 * r && dd > 0) {
              const nx = dx / dd,
                ny = dy / dd,
                p = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny;
              if (p > 0) {
                a.vx -= p * nx;
                a.vy -= p * ny;
                b.vx += p * nx;
                b.vy += p * ny;
              }
              const o = (2 * r - dd) / 2;
              a.x -= nx * o;
              a.y -= ny * o;
              b.x += nx * o;
              b.y += ny * o;
            }
          }
      }
      c.fillStyle = "#5a3018";
      c.fillRect(0, 0, w, h);
      c.fillStyle = "#7a4422";
      c.beginPath();
      c.roundRect(4, 4, w - 8, h - 8, 18);
      c.fill();
      const g = c.createRadialGradient(w / 2, h * 0.4, 20, w / 2, h / 2, h * 0.7);
      g.addColorStop(0, "#3ac07a");
      g.addColorStop(1, "#1a6a40");
      c.fillStyle = g;
      c.fillRect(m - 6, m - 6, w - 2 * m + 12, h - 2 * m + 12);
      c.fillStyle = "#ffe8a8";
      [
        [0.5, 0],
        [0.25, 0],
        [0.75, 0],
      ].forEach(([x]) => {
        c.beginPath();
        c.arc(w * x, 14, 2.5, 0, 7);
        c.fill();
        c.beginPath();
        c.arc(w * x, h - 14, 2.5, 0, 7);
        c.fill();
      });
      c.strokeStyle = "rgba(255,255,255,.25)";
      c.beginPath();
      c.moveTo(m, h * 0.75);
      c.lineTo(w - m, h * 0.75);
      c.stroke();
      P.forEach(([x, y]) => {
        c.fillStyle = "#0a0604";
        c.beginPath();
        c.arc(x, y, r * 1.6, 0, 7);
        c.fill();
      });
      s.B.forEach((b) => {
        if (b.in) return;
        c.fillStyle = "rgba(0,0,0,.35)";
        c.beginPath();
        c.ellipse(b.x + 3, b.y + 4, r * 1.1, r * 0.9, 0, 0, 7);
        c.fill();
      });
      const host = c.canvas.parentElement;
      if (!s.D || !s.D[0].isConnected) {
        s.D = [...Array(16)].map((_, k) => {
          const e = document.createElement("i");
          e.className = "sjball";
          const col = COL[k];
          e.style.setProperty("--c", col);
          k > 8 && e.classList.add("st");
          k && (e.dataset.n = k);
          k === 0 && e.classList.add("cue");
          host.appendChild(e);
          return e;
        });
        s.Q = document.createElement("i");
        s.Q.className = "sjcue";
        host.appendChild(s.Q);
      }
      const A = -(s.sw || 0),
        bw = ((r * 2) / w) * 100,
        CA = Math.cos((50 * Math.PI) / 180),
        SA = Math.sin((50 * Math.PI) / 180),
        rot = (v, ax, an) => {
          const c = Math.cos(an),
            sn = Math.sin(an),
            d = v[0] * ax[0] + v[1] * ax[1] + v[2] * ax[2];
          return [
            v[0] * c + (ax[1] * v[2] - ax[2] * v[1]) * sn + ax[0] * d * (1 - c),
            v[1] * c + (ax[2] * v[0] - ax[0] * v[2]) * sn + ax[1] * d * (1 - c),
            v[2] * c + (ax[0] * v[1] - ax[1] * v[0]) * sn + ax[2] * d * (1 - c),
          ];
        };
      s.D.forEach((e, k) => {
        const b = s.B.find((x) => x.c === k);
        if (!b || b.in) {
          e.style.display = "none";
          return;
        }
        if (!b.n) {
          const a = Math.random() * 6.28;
          b.n = [Math.sin(a) * 0.35, SA * 0.9, CA * 0.9];
          b.m = [Math.cos(a), Math.sin(a) * 0.3, 0.2];
        }
        const v = Math.hypot(b.vx, b.vy);
        if (v > 1) {
          const ax = [-b.vy / v, b.vx / v, 0],
            an = (v * dt) / r;
          b.n = rot(b.n, ax, an);
          b.m = rot(b.m, ax, an);
          const L = Math.hypot(...b.n);
          b.n = b.n.map((q) => q / L);
        }
        const sx = b.n[0],
          sy = b.n[1] * CA - b.n[2] * SA,
          dp = b.n[2] * CA + b.n[1] * SA,
          mx = b.m[0],
          my = b.m[1] * CA - b.m[2] * SA,
          sa = (Math.atan2(my, mx) * 180) / Math.PI;
        e.style.cssText = `--c:${COL[k]};display:block;left:${((b.x / w) * 100).toFixed(2)}%;top:${((b.y / h) * 100).toFixed(2)}%;width:${bw.toFixed(2)}%;transform:translate(-50%,-50%) translateZ(${r}px) rotateZ(${A.toFixed(2)}deg) rotateX(-50deg);--sx:${sx.toFixed(3)};--sy:${sy.toFixed(3)};--sk:${Math.max(0, dp).toFixed(3)};--so:${dp > 0 ? 1 : 0};--sa:${(sa + 90).toFixed(1)}deg`;
      });
      if (still && !cb.in) {
        const t = live.find((b) => b.c),
          a = t ? Math.atan2(t.y - cb.y, t.x - cb.x) : -Math.PI / 2,
          pull = Math.min(1, s.ct / 1.4) * 26 + (s.shot > 0 ? 0 : 0);
        s.Q.style.cssText = `display:block;left:${((cb.x / w) * 100).toFixed(2)}%;top:${((cb.y / h) * 100).toFixed(2)}%;transform:translateZ(${r + 2}px) rotateZ(${((a * 180) / Math.PI).toFixed(1)}deg) translateX(${(-r - 6 - pull).toFixed(1)}px) rotateY(-9deg) translateX(-100%)`;
        c.strokeStyle = "rgba(255,255,255,.22)";
        c.setLineDash([4, 6]);
        c.beginPath();
        c.moveTo(cb.x, cb.y);
        c.lineTo(cb.x + Math.cos(a) * 160, cb.y + Math.sin(a) * 160);
        c.stroke();
        c.setLineDash([]);
      } else s.Q.style.display = "none";
      const L = c.createRadialGradient(w / 2, h * 0.45, 10, w / 2, h * 0.45, h * 0.65);
      L.addColorStop(0, "rgba(255,240,190,.18)");
      L.addColorStop(1, "rgba(0,0,0,.25)");
      c.fillStyle = L;
      c.fillRect(0, 0, w, h);
    },
  };
  const anim = () => {
    cancelAnimationFrame(RAF);
    const cv = document.getElementById("sjcv");
    if (!cv) return;
    const id = cu,
      c = cv.getContext("2d"),
      S = STS[id] || (STS[id] = {});
    let lt = 0;
    const f = (t) => {
      if (!cv.isConnected) return;
      RAF = requestAnimationFrame(f);
      const dt = Math.min(0.04, (t - (lt || t)) / 1e3);
      lt = t;
      S.t = (S.t || 0) + dt;
      S.sw = window.CALM && CALM() ? 0 : Math.sin(((performance.now() / 1e3) * 2 * Math.PI) / 22) * 8;
      const s3 = cv.parentElement;
      s3 && (s3.style.transform = `rotateX(50deg) rotateZ(${S.sw.toFixed(2)}deg)`);
      try {
        TB[id](c, cv.width, cv.height, S, dt);
      } catch (e) {}
    };
    RAF = requestAnimationFrame(f);
  };
  let SW = 0;
  const bindSw = () => {
    const s = document.querySelector(".sjst");
    if (!s || s.dataset.b) return;
    s.dataset.b = 1;
    let x0 = null;
    s.addEventListener("pointerdown", (e) => {
      x0 = e.clientX;
    });
    s.addEventListener("pointerup", (e) => {
      if (x0 == null) return;
      const d = e.clientX - x0;
      x0 = null;
      Math.abs(d) > 50 && act.sjMv(d < 0 ? 1 : -1);
    });
  };
  let _o;
  setTimeout(() => {
    _o = act.open;
    act.open = function (e) {
      if (IN) return _o.apply(this, arguments);
      if (e === HID) return show(sel());
      if (SJ.includes(e) && !lk(e)) return show(e);
      ON = 0;
      return _o.apply(this, arguments);
    };
    Object.assign(act, {
      sjSel: (v) => {
        if (v === cu) return;
        const d = SJ.indexOf(v) > SJ.indexOf(cu) ? 1 : -1;
        try {
          sfx(700, 0.05);
        } catch (e) {}
        show(v, d);
      },
      sjMv: (v) => {
        const i = (SJ.indexOf(cu) + +v + SJ.length) % SJ.length;
        try {
          sfx(600, 0.05);
        } catch (e) {}
        show(SJ[i], +v);
      },
      sjHm: () => {
        ON = 0;
        home();
      },
      sjSh: (v) => sheet(v),
      sjAim: () => {
        const g = st.get("bi:guide", 2);
        st.set("bi:guide", (g + 2) % 3);
        try {
          sfx(600, 0.05);
        } catch (e) {}
        const v = document.querySelector(".sjw .vzbt");
        v && (v.innerHTML = btns(cu));
      },
      sjDo: (v) => {
        const x = q(v);
        x ? x.click() : sheet();
      },
    });
    const _h = home;
    home = function () {
      ON = 0;
      return _h.apply(this, arguments);
    };
  }, 170);
})();
