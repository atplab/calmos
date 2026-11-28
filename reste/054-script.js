(() => {
  if (typeof hub !== "function") return;
  /* Salle d'arcade : casse-briques, Récif, Bulles dans des bornes en carrousel. Ajouter un futur jeu ici. */
  const AG = ["brick", "recif", "garde", "crabes"];
  window.ARG = AG.concat("bulles");
  const HID = "sallearcade";
  const JA = {
    id: HID,
    n: "Salle d’arcade",
    ic: "",
    a: "#ff5fd2",
    b: "#2a0f4a",
    t: "Les bornes de Zeni",
    s: "Casse-briques, Récif appétissant, Attaque marine et Crabes Farceurs.",
    sp: "",
  };
  try {
    window.GIL &&
      (GIL[HID] =
        '<ellipse cx="32" cy="58" rx="19" ry="3.6" fill="#000" opacity=".25"/><rect x="5" y="5" width="54" height="52" rx="12" fill="#1c0b36"/><path d="M5 44h54v1a12 12 0 0 1-12 12H17A12 12 0 0 1 5 45z" fill="#3a1a66"/><path d="M19 10h26l3 7v37H16V17z" fill="#ff5fd2"/><rect x="19" y="11" width="26" height="6" rx="1.5" fill="#ffe46a"/><rect x="20" y="20" width="24" height="17" rx="2" fill="#0a1830"/><rect x="24" y="24" width="4" height="3" fill="#5fe3ff"/><rect x="30" y="24" width="4" height="3" fill="#c58aff"/><rect x="36" y="24" width="4" height="3" fill="#ffd35a"/><circle cx="32" cy="32" r="2" fill="#fff"/><path d="M16 40h32l2 5H14z" fill="#c03aa0"/><circle cx="25" cy="41.5" r="1.8" fill="#5fe3ff"/><circle cx="37" cy="41.5" r="1.4" fill="#ffd35a"/><circle cx="41" cy="41.5" r="1.4" fill="#ff8a5c"/><rect x="29" y="48" width="6" height="3" rx="1" fill="#ffe46a"/>');
    const i = GD.findIndex((g) => g.id === "brick");
    GD.splice(i < 0 ? GD.length : i, 0, JA);
    ALL.push(JA);
    const j = GUNL.indexOf("brick");
    GUNL.splice(j < 0 ? GUNL.length : j, 0, HID);
    const o = st.get("g:ord", []);
    if (o.length && !o.includes(HID)) {
      const k = o.indexOf("brick");
      o.splice(k < 0 ? o.length : k, 0, HID);
      st.set("g:ord", o);
    }
    GCAT.forEach((c) => {
      const k = c[2].indexOf("brick");
      k >= 0 && !c[2].includes(HID) && c[2].splice(k, 0, HID);
    });
    const ca = GCAT.find((c) => c[0] === "arca");
    ca && !ca[2].includes(HID) && ca[2].unshift(HID);
  } catch (e) {}
  const css = document.createElement("style");
  css.textContent = `
.arw{position:relative;height:100dvh;min-height:0;box-sizing:border-box;margin:-20px -18px -28px;padding:20px 18px calc(28px + max(env(safe-area-inset-bottom,0px),var(--safe-area-inset-bottom,0px)));display:flex;flex-direction:column;overflow:hidden;background:radial-gradient(120% 70% at 50% 0%,#3a1466 0%,#1a0833 45%,#08030f 100%);color:#fff}
.arw .vztp{position:relative;z-index:5}
.arw:before{content:"";position:absolute;left:-20%;right:-20%;bottom:-6%;height:46%;background:repeating-linear-gradient(90deg,rgba(255,95,210,.28) 0 2px,transparent 2px 46px),repeating-linear-gradient(0deg,rgba(95,227,255,.22) 0 2px,transparent 2px 34px),linear-gradient(#170a2c,#05020a);transform:perspective(380px) rotateX(58deg);transform-origin:50% 100%;pointer-events:none}
.arw:after{content:"";position:absolute;inset:0;background:radial-gradient(40% 18% at 20% 12%,rgba(255,95,210,.18),transparent),radial-gradient(40% 18% at 80% 10%,rgba(95,227,255,.16),transparent),radial-gradient(60% 30% at 50% 78%,rgba(197,138,255,.16),transparent);pointer-events:none;animation:arAmb 6s ease-in-out infinite alternate}
@keyframes arAmb{to{opacity:.55}}
.arneon{position:relative;z-index:2;text-align:center;font:900 22px/1 system-ui;letter-spacing:.14em;color:#ffe9fb;text-shadow:0 0 6px #ff5fd2,0 0 16px #ff5fd2,0 0 34px #ff2fb8;margin:2px 0 0;animation:arFl 5s infinite}
.arneon small{display:block;font:700 11px system-ui;letter-spacing:.3em;color:#cff8ff;text-shadow:0 0 6px #5fe3ff,0 0 14px #5fe3ff;margin-top:6px}
@keyframes arFl{0%,18%,22%,60%,64%,100%{opacity:1}20%,62%{opacity:.45}}
.arlt{position:absolute;top:58px;width:3px;height:22px;background:#555;z-index:1}.arlt:after{content:"";position:absolute;left:-14px;top:20px;width:31px;height:12px;border-radius:0 0 16px 16px;background:#ffe9b0;box-shadow:0 10px 50px 22px rgba(255,220,150,.13)}
.arsw{position:relative;z-index:3;display:flex;flex-wrap:wrap;gap:5px;justify-content:center;padding:6px 6px 0}
.arsw button{border:1px solid rgba(255,255,255,.2);background:rgba(20,6,40,.6);color:#f4e8ff;border-radius:99px;padding:5px 9px;font:700 11px system-ui;white-space:nowrap;display:flex;align-items:center;gap:4px}.arsw button svg{width:13px;height:13px}
.arsw button[aria-selected=true]{background:linear-gradient(#ff5fd2,#a52a8c);border-color:#ffd0f2;box-shadow:0 0 14px rgba(255,95,210,.6)}
.arst{position:absolute;left:0;right:0;top:206px;bottom:0;z-index:3;display:flex;align-items:flex-start;padding-top:56px;box-sizing:border-box;overflow:visible;justify-content:center;perspective:900px;perspective-origin:50% 30%;min-height:0;touch-action:pan-y}.arw .vzbt{margin-top:auto;position:relative;z-index:6}.arw .arsw,.arw .arsgw,.arw .arneon{z-index:5}
.artl{transform-style:preserve-3d;animation:arSw 9s ease-in-out infinite alternate}
@keyframes arSw{from{transform:rotateX(-6deg) rotateY(-20deg)}to{transform:rotateX(-6deg) rotateY(20deg)}}
.arrg{position:relative;width:170px;height:330px;transform-style:preserve-3d;transition:transform 1.1s cubic-bezier(.45,.05,.2,1)}
.arcb{position:absolute;inset:0;transform-style:preserve-3d}
.arcb .fc{position:absolute;box-sizing:border-box;transition:filter 1s}.arcb:not(.on) .fc{filter:brightness(.38)}
.arcb .xsd{left:50%;margin-left:-55px;top:0;width:110px;height:330px;clip-path:polygon(0 0,100% 0,100% 50px,75% 60px,84% 204px,100% 213px,100% 248px,86% 252px,86% 100%,0 100%);background:linear-gradient(115deg,transparent 0 38%,var(--a) 38% 44%,transparent 44% 50%,var(--a) 50% 53%,transparent 53%),linear-gradient(90deg,color-mix(in srgb,var(--b) 55%,#000),var(--b))}
.arcb .xsl{transform:rotateY(-90deg) translateZ(85px)}.arcb .xsr{transform:rotateY(90deg) translateZ(85px) scaleX(-1)}
.arcb .xtp{left:0;top:-55px;width:170px;height:110px;background:color-mix(in srgb,var(--b) 80%,#fff 12%);transform:rotateX(90deg)}
.arcb .xbk{inset:0;background:#0a0614;transform:translateZ(-55px) rotateY(180deg)}
.arcb .xmq{left:0;right:0;top:0;height:50px;transform:translateZ(55px);background:var(--b);padding:6px}
.arcb .xmq b{display:flex;height:100%;align-items:center;justify-content:center;text-align:center;border-radius:6px;font:900 13px/1.05 system-ui;letter-spacing:.04em;color:#fff;background:linear-gradient(var(--a),color-mix(in srgb,var(--a) 55%,#000));text-shadow:0 0 8px rgba(255,255,255,.8);box-shadow:0 0 18px color-mix(in srgb,var(--a) 70%,transparent),inset 0 0 10px rgba(255,255,255,.35)}
.arcb .xgr{left:0;right:0;top:50px;height:30px;transform-origin:50% 0;transform:translateZ(55px) rotateX(-70deg);background:repeating-linear-gradient(90deg,#0c0c14 0 4px,#1e1e2a 4px 7px)}
.arcb .xsc{left:0;right:0;top:60px;height:146px;transform-origin:50% 0;transform:translateZ(27px) rotateX(4deg);background:#12121a;padding:6px 10px}
.arcb .xsc canvas{display:block;width:100%;height:100%;border-radius:10px;background:#050b18}
.arcb .xsc:after{content:"";position:absolute;inset:6px 10px;border-radius:10px;background:repeating-linear-gradient(0deg,rgba(255,255,255,.07) 0 1px,transparent 1px 3px),radial-gradient(120% 90% at 50% 40%,transparent 55%,rgba(0,0,0,.5));box-shadow:inset 0 0 22px color-mix(in srgb,var(--a) 45%,transparent);pointer-events:none}
.arcb .xlk{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:46px;height:46px;border-radius:50%;background:rgba(0,0,0,.75);display:grid;place-items:center;color:#fff;z-index:2}.arcb .xlk svg{width:24px;height:24px}
.arcb .xpn{left:0;right:0;top:204px;height:21px;transform-origin:50% 0;transform:translateZ(37px) rotateX(64deg);transform-style:preserve-3d;background:linear-gradient(color-mix(in srgb,var(--b) 70%,#fff 14%),color-mix(in srgb,var(--b) 80%,#fff 4%))}
.arpn i{position:absolute;border-radius:50%}.arcb .xpn i{position:absolute;border-radius:50%;top:5px;width:12px;height:12px}
.arcb .xpn .j{left:28px;background:#111}.arcb .xpn .j:after{content:"";position:absolute;left:-2px;bottom:3px;width:16px;height:24px;border-radius:8px 8px 3px 3px;background:radial-gradient(circle at 50% 8px,#ff6a7e 0 7px,#e8435a 7px 8px,transparent 8px),linear-gradient(90deg,transparent 5px,#333 5px 11px,transparent 11px);transform-origin:50% 100%;transform:rotateX(-64deg)}
.arcb .xpn .k1{right:62px;background:#5fe3ff;box-shadow:0 0 8px #5fe3ff}.arcb .xpn .k2{right:42px;background:#ffd35a;box-shadow:0 0 8px #ffd35a}.arcb .xpn .k3{right:22px;background:#ff5fd2;box-shadow:0 0 8px #ff5fd2}
.arcb .xlp{left:0;right:0;top:212px;height:37px;transform:translateZ(55px);background:linear-gradient(color-mix(in srgb,var(--b) 85%,#fff 8%),color-mix(in srgb,var(--b) 70%,#000));border-top:2px solid var(--a)}
.arcb .xlw{left:0;right:0;top:248px;height:82px;transform:translateZ(39px);background:linear-gradient(color-mix(in srgb,var(--b) 60%,#000),color-mix(in srgb,var(--b) 80%,#000))}
.arcb .xlw:before{content:"";position:absolute;left:50%;top:14px;width:36px;height:44px;margin-left:-18px;border-radius:5px;background:radial-gradient(circle at 50% 12px,#ff3b3b 0 2px,transparent 3px),radial-gradient(circle at 50% 28px,#ff3b3b 0 2px,transparent 3px),#16161f;box-shadow:inset 0 0 0 2px #333}
.arcb .xsh{left:-20px;top:275px;width:210px;height:110px;transform:rotateX(90deg);background:radial-gradient(closest-side,rgba(0,0,0,.7),transparent);filter:none!important}
.arnv{position:absolute;top:38%;z-index:7;width:40px;height:40px;margin-top:-20px;border-radius:50%;border:1px solid rgba(255,255,255,.3);background:rgba(20,6,40,.6);color:#fff;font:700 20px system-ui;display:grid;place-items:center}.arnv.l{left:0}.arnv.r{right:0}
.arw .vzbt{position:relative;z-index:4}
.arw .vzbig{background:linear-gradient(#ff7be0,#c22b9e);box-shadow:0 0 24px rgba(255,95,210,.55),inset 0 1px 0 rgba(255,255,255,.5);color:#fff}
.arw .vzb{--k:#5fe3ff}.arsgw{position:relative;z-index:4;display:flex;justify-content:center;padding:8px 6px 0}.arsgw:empty{display:none}.arsg{display:grid;grid-template-columns:repeat(var(--n,2),1fr);gap:6px;width:100%;max-width:420px;margin:0}.arsg button{display:flex;align-items:center;justify-content:center;gap:6px;text-align:left;border:1px solid rgba(255,255,255,.2);background:rgba(10,4,30,.7);color:#cfc2ee;border-radius:12px;padding:4px 8px;font:800 11px/1.1 ui-monospace,Menlo,Consolas,monospace;letter-spacing:.03em;transition:.25s;opacity:.7}.arsg button svg{width:26px;height:26px;flex:none}.arsg button[aria-selected=true]{opacity:1;color:#fff;border-color:#7dffb0;background:linear-gradient(135deg,rgba(125,255,176,.28),rgba(10,4,30,.8));box-shadow:0 0 12px rgba(125,255,176,.5)}.arsg button:nth-child(even)[aria-selected=true]{border-color:#ff8ae0;background:linear-gradient(135deg,rgba(255,138,224,.3),rgba(10,4,30,.8));box-shadow:0 0 12px rgba(255,95,210,.55)}.arsg button:nth-child(3n)[aria-selected=true]{border-color:#7ef0ff;background:linear-gradient(135deg,rgba(126,240,255,.3),rgba(10,4,30,.8));box-shadow:0 0 12px rgba(34,211,238,.55)}.arw.zm .vzbt,.arw.zm .arsw,.arw.zm .arneon,.arw.zm .arnv,.arw.zm .arlt,.arw.zm .vztp{opacity:0;transition:opacity .4s;pointer-events:none}.arw.zm .arcb:not(.on){opacity:0;transition:opacity .3s}#arcrt{position:fixed;inset:0;z-index:99999;pointer-events:none;overflow:hidden;animation:arCb 1.25s forwards}#arcrt i{position:absolute;inset:0;background:#eaffff;box-shadow:0 0 60px 20px #7ef0ff;animation:arCl 1.25s forwards}#arcrt:after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.35) 0 2px,transparent 2px 4px);animation:arCs 1.25s forwards}#arcrt b{position:absolute;left:0;right:0;top:20%;text-align:center;font:900 22px ui-monospace,Menlo,Consolas,monospace;letter-spacing:.2em;color:#fff;text-shadow:-2px 0 #ff2fb8,2px 0 #22d3ee,0 0 14px #fff;opacity:0;animation:arCt 1.25s steps(1) forwards}#arcrt b small{display:block;font-size:12px;margin-top:10px;color:#ffe46a;text-shadow:0 0 8px #ffb400}@keyframes arCb{0%,40%{background:#000}41%,100%{background:transparent}}@keyframes arCl{0%{transform:scale(0,.004);opacity:1}18%{transform:scale(1,.004);opacity:1}40%{transform:scale(1,1);opacity:1}62%,100%{transform:scale(1,1);opacity:0}}@keyframes arCs{0%,70%{opacity:1}100%{opacity:0}}@keyframes arCt{0%,40%{opacity:0}41%,55%{opacity:1}56%,62%{opacity:0}63%,78%{opacity:1}79%,84%{opacity:0}85%,94%{opacity:1}95%,100%{opacity:0}}.arw.zm:after{background:#000;opacity:0;animation:arZf .35s .75s forwards;z-index:9}@keyframes arZf{to{opacity:1}}
@media(prefers-reduced-motion:reduce){.artl{animation:none;transform:rotateX(-6deg) rotateY(-14deg)}}`;
  document.head.appendChild(css);
  const G = (id) => ALL.find((g) => g.id === id) || { id, n: id };
  const av = (id) => {
    try {
      return (
        !(typeof gOpenAt === "function" && gOpenAt(id) > Date.now()) || (typeof UNL === "function" && UNL())
      );
    } catch (e) {
      return !0;
    }
  };
  const lk = (id) => {
    try {
      return typeof gLock === "function" && gLock(id) && !sxOn();
    } catch (e) {
      return !1;
    }
  };
  const LST = () => AG.filter(av);
  const ico = (id) =>
    window.GIL && GIL[id] ? `<svg viewBox="0 0 64 64" aria-hidden="true">${GIL[id]}</svg>` : "";
  const SV = {
    r: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5V5.5M9 8h7M9 12h5"/></svg>',
    k: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  };
  let ANG = 0,
    IDX = 0,
    BR = null,
    SCR = 0,
    RAF = 0; /* Modes d'une borne : pour en ajouter un, ajoute [id, nom, logo GIL, démo DM] ici, puis son bloc de boutons dans bt() */
  const MODES = {
    garde: [
      ["g", "Garde du Lagon", "garde", "garde"],
      ["b", "Protéger Zeni", "bulles", "bulles"],
    ],
  };
  const mlk = (m) => {
      try {
        return typeof gLock == "function" && gLock(m[3]);
      } catch (e) {
        return !1;
      }
    },
    mget = (k) => {
      const L = MODES[k];
      if (!L) return "";
      const v = st.get("ar:m:" + k, L[0][0]);
      return L.some((m) => m[0] === v && !mlk(m)) ? v : L[0][0];
    };
  const mcur = (k) => (MODES[k] || []).find((m) => m[0] === mget(k));
  const gname = (k) => {
    const m = mcur(k);
    return m ? m[1] : G(k).n;
  };
  const swh = (id) => {
    const L = MODES[id];
    if (!L || L.length < 2) return "";
    const ic = (k) =>
      window.GIL && GIL[k] ? `<svg viewBox="0 0 64 64" aria-hidden="true">${GIL[k]}</svg>` : "";
    return `<div class="arsg" role="tablist" style="--n:${L.length}">${L.map((m) => `<button role="tab" data-a="arGm" data-v="${m[0]}" aria-selected="${m[0] === mget(id)}"${mlk(m) ? ' class="lk"' : ""}>${ic(m[2])}<span>${mlk(m) ? "🔒 " : ""}${esc(m[1])}</span></button>`).join("")}</div>`;
  };
  const SV2 = {
    al: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6c-2-1.500-5-2-8-1.500v13c3-.500 6 0 8 1.500 2-1.500 5-2 8-1.500v-13c-3-.500-6 0-8 1.500z"/><path d="M12 6v13"/></svg>',
    l: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    c: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    t: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4v1a3 3 0 0 0 4 3M16 6h4v1a3 3 0 0 1-4 3M12 13v4M8 20h8"/></svg>',
  };
  const sel = () => {
    const L = LST(),
      v = st.get("ar:sel", "brick");
    return L.includes(v) ? v : L[0];
  };
  const R = (n) => (n < 2 ? 0 : n === 2 ? 170 : Math.round(85 / Math.tan(Math.PI / n)) + 75);
  const sheet = (t, h) => {
    const o = $("#vzsh");
    o && o.remove();
    const d = document.createElement("div");
    d.id = "vzsh";
    d.className = "vzsh";
    d.innerHTML = `<div class="vzsp" role="dialog" aria-label="${t}"><div class="vzsx"><h2>${t}</h2><button data-a="arShX" aria-label="Fermer">✕</button></div>${h}</div>`;
    d.addEventListener("click", (e) => {
      e.target === d && d.remove();
    });
    document.body.appendChild(d);
  };
  const B = (a, i, t, v) =>
    `<button class="vzb" data-a="${a}"${v ? ` data-v="${v}"` : ""}><i>${i}</i><span>${t}</span></button>`;
  const P = (a, t, sm, v) =>
    `<button class="vzpill" data-a="${a}"${v ? ` data-v="${v}"` : ""}>${t}<small>${sm}</small></button>`;
  const J = (a, t, sm, v) =>
    `<button class="vzbig" data-a="${a}"${v != null ? ` data-v="${v}"` : ""}>${t}<small>${sm}</small></button>`;
  function scrape() {
    BR = null;
    if (!av("brick") || lk("brick")) return;
    SCR = 1;
    try {
      _hub("brick");
      const a = app,
        go = a.querySelector(".opts .rc-go[data-a=play]") || a.querySelector("[data-a=play]"),
        inf = a.querySelector(".opts .rcx-r"),
        ig = inf && inf.querySelector("[data-a=infGo]"),
        ib = inf && inf.querySelector("[data-a=infBd]");
      go &&
        (BR = {
          v: go.dataset.v,
          lv: (a.querySelector(".opts .rc-t b") || {}).textContent || "",
          ig: ig && ig.dataset.v,
          ib: ib && ib.dataset.v,
          it:
            ((inf && inf.querySelector(".rcx-t span")) || {}).textContent ||
            ((inf && inf.querySelector(".rcx-t small")) || {}).textContent ||
            "",
        });
    } catch (e) {}
    SCR = 0;
    app.dataset.hub = "";
    app.classList.remove("hsw");
  }
  const bt = (id) => {
    if (lk(id))
      return `<div class="vzhl"></div><div class="vzcn"><button class="vzbig" disabled>${SV.k} Verrouillé<small>Se débloque à l’étape ${(typeof GSTEP !== "undefined" && GSTEP[id]) || "?"} de l’histoire</small></button></div><div class="vzhr"></div>`;
    if (id === "recif") {
      const n = st.get("zr:lv", 0) + 1,
        rb = st.get("zr:rkb", 0);
      return `<div class="vzhl">${B("zrRu", SV.r, "Règles")}${B("zrLs", SV2.l, "Niveaux")}${B("arAl", SV2.al, "Almanach", "recif")}</div><div class="vzcn">${J("zrGo", "Jouer", "Niveau " + n, n)}${P("zrRk", "Mode Rank", rb ? "Record " + rb + " pts" : "Sans fin, 1 vie")}</div><div class="vzhr">${B("infBd", SV2.c, "Classement", "recif")}</div>`;
    }
    if (id === "bulles") {
      const l = st.get("bz:lv", 0),
        b = st.get("bz:best", 0),
        w = st.get("bz:bw", 0);
      return `<div class="vzhl">${B("bzRu", SV.r, "Règles")}${B("arAl", SV2.al, "Almanach", "bulles")}</div><div class="vzcn">${J("bzGo", "Histoire", l ? "Niveau record " + l + (b ? " · " + b + " pts" : "") : "Niveaux sans fin")}${P("bzWv", "Mode vagues", w ? "Record " + w + " pts" : "Vagues sans fin")}</div><div class="vzhr">${B("infBd", SV2.c, "Classement", "bulles")}</div>`;
    }
    if (id === "garde") {
      const bm = mget("garde") === "b",
        sw = "";
      if (bm) {
        const n = Math.max(1, st.get("bz:cur", 1)),
          rb = st.get("bz:rkb", 0);
        return (
          sw +
          `<div class="vzhl">${B("bzRu", SV.r, "Règles")}${B("arAl", SV2.al, "Almanach", "bulles")}</div><div class="vzcn">${J("bzGo", "Jouer", "Niveau " + n)}${P("bzRk", "Mode Rank", rb ? "Record " + rb + " pts" : "Sans fin, 3 vies")}</div><div class="vzhr">${B("infBd", SV2.c, "Classement", "bulles")}</div>`
        );
      }
      const n = Math.max(1, st.get("zg:lv", 1)),
        rb = st.get("zg:rkb", 0);
      return (
        sw +
        `<div class="vzhl">${B("zgRu", SV.r, "Règles")}${B("arAl", SV2.al, "Almanach", "garde")}</div><div class="vzcn">${J("zgGo", "Jouer", "Niveau " + n)}${P("zgRk", "Mode Rank", rb ? "Record " + rb + " pts" : "Sans fin, 3 vies")}</div><div class="vzhr">${B("infBd", SV2.c, "Classement", "garde")}</div>`
      );
    }
    if (id === "crabes") {
      const n = Math.max(1, st.get("zc:lv", 1)),
        rb = st.get("zc:rkb", 0);
      return `<div class="vzhl">${B("zcRu", SV.r, "Règles")}${B("arAl", SV2.al, "Almanach", "crabes")}</div><div class="vzcn">${J("zcGo", "Jouer", "Niveau " + n)}${P("zcRk", "Mode Rank", rb ? "Record " + rb + " pts" : "3 vies, ça accélère")}</div><div class="vzhr">${B("infBd", SV2.c, "Classement", "crabes")}</div>`;
    }
    const r = BR || {};
    return `<div class="vzhl">${B("arRu", SV.r, "Règles")}${B("arAl", SV2.al, "Almanach", "brick")}</div><div class="vzcn">${J("arPl", "Jouer", r.lv || "", r.v || 0)}${r.ig ? P("infGo", "Infini", r.it, r.ig) : r.it ? `<button class="vzpill" disabled>Infini<small>${r.it}</small></button>` : ""}</div><div class="vzhr">${r.ib ? B("infBd", SV2.c, "Classement", r.ib) : ""}</div>`;
  };
  /* ---- démos animées sur l'écran des bornes ---- */
  const zen = (c, x, y, r) => {
    c.fillStyle = "#f1ecff";
    c.beginPath();
    c.ellipse(x, y, r, r * 1.1, 0, 0, 7);
    c.fill();
    c.fillStyle = "#3a3070";
    c.beginPath();
    c.arc(x - r * 0.35, y - r * 0.1, r * 0.17, 0, 7);
    c.arc(x + r * 0.35, y - r * 0.1, r * 0.17, 0, 7);
    c.fill();
    c.fillStyle = "#ffd45a";
    c.beginPath();
    c.arc(x + r * 0.2, y - r * 1.5, r * 0.32, 0, 7);
    c.fill();
  };
  const eyes = (c, x, y, r) => {
    c.fillStyle = "#fff";
    c.beginPath();
    c.arc(x - r * 0.35, y - r * 0.1, r * 0.25, 0, 7);
    c.arc(x + r * 0.35, y - r * 0.1, r * 0.25, 0, 7);
    c.fill();
    c.fillStyle = "#141433";
    c.beginPath();
    c.arc(x - r * 0.3, y - r * 0.1, r * 0.12, 0, 7);
    c.arc(x + r * 0.4, y - r * 0.1, r * 0.12, 0, 7);
    c.fill();
  };
  const DM = {
    crabes(c, w, h, s, dt) {
      s.t = (s.t || 0) + dt;
      const g = c.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#3a0f4a");
      g.addColorStop(1, "#1a0a18");
      c.fillStyle = g;
      c.fillRect(0, 0, w, h);
      if (!s.H) {
        s.H = [];
        for (let r = 0; r < 2; r++)
          for (let q = 0; q < 3; q++)
            s.H.push({ x: (w * (q + 0.5)) / 3, y: h * (0.45 + r * 0.38), u: 0, v: 0, k: 0 });
      }
      s.cd = (s.cd || 0) - dt;
      if (s.cd <= 0) {
        s.cd = 0.5;
        const o = s.H[Math.floor(Math.random() * 6)];
        o.v || ((o.v = 1), (o.k = Math.random() < 0.2 ? 1 : 0));
      }
      s.H.forEach((o) => {
        o.u = Math.max(0, Math.min(1, o.u + (o.v ? dt * 6 : -dt * 5)));
        o.v && o.u >= 1 && Math.random() < dt * 1.6 && ((o.v = 0), (o.m = 0.25));
        o.m = Math.max(0, (o.m || 0) - dt);
        const rx = w * 0.13,
          ry = rx * 0.32,
          sz = rx * 0.75;
        c.fillStyle = "#0c0310";
        c.beginPath();
        c.ellipse(o.x, o.y, rx, ry, 0, 0, 7);
        c.fill();
        if (o.u > 0) {
          c.save();
          c.beginPath();
          c.rect(o.x - rx * 1.5, 0, rx * 3, o.y);
          c.clip();
          const y = o.y + sz * 0.3 - o.u * sz;
          c.fillStyle = o.k ? "#ffd23a" : "#ff6a3d";
          c.beginPath();
          c.ellipse(o.x, y, sz * 0.6, sz * 0.45, 0, Math.PI, 0);
          c.fill();
          c.fillStyle = "#fff";
          [-0.22, 0.22].forEach((d) => {
            c.beginPath();
            c.arc(o.x + d * sz, y - sz * 0.6, sz * 0.12, 0, 7);
            c.fill();
          });
          c.restore();
        }
        c.strokeStyle = "#ffb347";
        c.lineWidth = 2;
        c.beginPath();
        c.ellipse(o.x, o.y, rx, ry, 0, 0, Math.PI);
        c.stroke();
        if (o.m > 0) {
          c.save();
          c.translate(o.x + rx * 0.6, o.y - sz * 1.2);
          c.rotate(-0.6 + o.m * 3);
          c.fillStyle = "#ff6ad5";
          c.fillRect(-rx * 0.35, -ry * 1.2, rx * 0.7, ry * 1.6);
          c.fillStyle = "#a86a3a";
          c.fillRect(-2, 0, 4, sz);
          c.restore();
        }
      });
    },
    garde(c, w, h, s, dt) {
      s.t = (s.t || 0) + dt;
      if (!s.E || !s.E.length) {
        s.E = [];
        for (let r = 0; r < 3; r++) for (let q = 0; q < 5; q++) s.E.push({ q, r });
        s.fy = 0;
        s.S = [];
      }
      s.fy += dt * 4;
      const ox = Math.sin(s.t * 0.9) * 16,
        zx = w / 2 + Math.sin(s.t * 1.3) * w * 0.34;
      s.cd = (s.cd || 0) - dt;
      if (s.cd <= 0) {
        s.cd = 0.33;
        s.S.push({ x: zx, y: h - 22 });
      }
      const g = c.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#0f5a6a");
      g.addColorStop(1, "#062430");
      c.fillStyle = g;
      c.fillRect(0, 0, w, h);
      const K = ["#5a7ae0", "#ffb35a", "#ff9ed0"];
      s.E.forEach((e) => {
        e.x = w / 2 + (e.q - 2) * 20 + ox;
        e.y = 16 + e.r * 15 + s.fy;
        c.fillStyle = K[e.r];
        c.beginPath();
        c.arc(e.x, e.y + 2, 6, Math.PI, 0);
        c.fill();
        c.fillRect(e.x - 5, e.y + 2, 2, 4);
        c.fillRect(e.x - 1, e.y + 2, 2, 5);
        c.fillRect(e.x + 3, e.y + 2, 2, 4);
      });
      s.S = s.S.filter((o) => {
        o.y -= 170 * dt;
        if (o.y < 0) return !1;
        const i = s.E.findIndex((e) => Math.abs(e.x - o.x) < 7 && Math.abs(e.y - o.y) < 7);
        if (i >= 0) {
          s.E.splice(i, 1);
          return !1;
        }
        return !0;
      });
      if (s.fy > h - 90) s.E = [];
      c.strokeStyle = "#dffaff";
      c.lineWidth = 1.2;
      s.S.forEach((o) => {
        c.beginPath();
        c.arc(o.x, o.y, 2.4, 0, 7);
        c.stroke();
      });
      c.fillStyle = "#ff7a9a";
      [0.25, 0.5, 0.75].forEach((f) => c.fillRect(w * f - 9, h - 36, 18, 5));
      c.beginPath();
      c.moveTo(zx - 11, h - 4);
      c.quadraticCurveTo(zx, h - 14, zx + 11, h - 4);
      c.fill();
      zen(c, zx, h - 14, 5.5);
    },
    brick(c, w, h, s, dt) {
      if (!s.b || !s.b.some((x) => x)) s.b = Array(24).fill(1);
      if (s.x == null) {
        s.x = w / 2;
        s.y = h * 0.6;
        s.vx = 70;
        s.vy = -95;
        s.px = w / 2;
      }
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      if (s.x < 4) {
        s.x = 4;
        s.vx = Math.abs(s.vx);
      }
      if (s.x > w - 4) {
        s.x = w - 4;
        s.vx = -Math.abs(s.vx);
      }
      if (s.y < 4) {
        s.y = 4;
        s.vy = Math.abs(s.vy);
      }
      const py = h - 14;
      s.px += (s.x - s.px) * Math.min(1, dt * 8);
      if (s.y > py - 4 && s.vy > 0) {
        s.vy = -Math.abs(s.vy);
        s.vx = Math.max(-110, Math.min(110, (s.x - s.px) * 8 + (Math.random() - 0.5) * 90));
      }
      const bw = w / 6,
        bh = 10,
        q = Math.floor(s.x / bw),
        r = Math.floor((s.y - 16) / bh);
      if (r >= 0 && r < 4 && q >= 0 && q < 6 && s.b[r * 6 + q]) {
        s.b[r * 6 + q] = 0;
        s.vy *= -1;
      }
      c.fillStyle = "#0c0a24";
      c.fillRect(0, 0, w, h);
      const K = ["#ff7a9a", "#ffb35a", "#c8adff", "#6fe0ff"];
      s.b.forEach((v, i) => {
        if (!v) return;
        c.fillStyle = K[Math.floor(i / 6)];
        c.fillRect((i % 6) * bw + 1.5, 16 + Math.floor(i / 6) * bh + 1, bw - 3, bh - 2.5);
      });
      c.fillStyle = "#fff";
      c.fillRect(s.px - 15, py, 30, 5);
      c.fillStyle = "#ffd45a";
      c.beginPath();
      c.arc(s.x, s.y, 3.5, 0, 7);
      c.fill();
    },
    recif(c, w, h, s, dt) {
      s.u = (s.u || 0) + dt * 0.1;
      const x0 = 15,
        y0 = 16,
        a = w - 30,
        b = h - 32,
        per = 2 * (a + b),
        pt = (u) => {
          let d = (((u % 1) + 1) % 1) * per;
          if (d < a) return [x0 + d, y0];
          d -= a;
          if (d < b) return [x0 + a, y0 + d];
          d -= b;
          if (d < a) return [x0 + a - d, y0 + b];
          return [x0, y0 + b - (d - a)];
        };
      c.fillStyle = "#06223f";
      c.fillRect(0, 0, w, h);
      c.strokeStyle = "#3fd0e0";
      c.lineWidth = 2;
      c.fillStyle = "#0e4a6a";
      c.beginPath();
      c.roundRect(x0 + 11, y0 + 11, a - 22, b - 22, 8);
      c.fill();
      c.stroke();
      c.beginPath();
      c.roundRect(4, 5, w - 8, h - 10, 10);
      c.stroke();
      for (let k = 0; k < 26; k++) {
        const f = k / 26;
        if ((((f - s.u) % 1) + 1) % 1 > 0.82) continue;
        const p = pt(f),
          g = k % 9 === 4;
        c.fillStyle = g ? "#ff8ad0" : "#fff6e0";
        c.beginPath();
        c.arc(p[0], p[1], g ? 4 : 2, 0, 7);
        c.fill();
      }
      const flee = (s.u * 1.3) % 1 > 0.7;
      [0.21, 0.18].forEach((d, i) => {
        const p = pt(s.u - d);
        c.fillStyle = flee ? "#6f8cff" : "#3fd07a";
        c.beginPath();
        c.arc(p[0], p[1], 6 - i * 1.5, 0, 7);
        c.fill();
      });
      const e = pt(s.u - 0.15);
      c.fillStyle = flee ? "#6f8cff" : "#3fd07a";
      c.beginPath();
      c.arc(e[0], e[1], 7.5, 0, 7);
      c.fill();
      eyes(c, e[0], e[1], 7.5);
      const z = pt(s.u);
      zen(c, z[0], z[1] + 1, 7);
    },
    bulles(c, w, h, s, dt) {
      s.t = (s.t || 0) + dt;
      s.B = s.B || [];
      s.S = s.S || [];
      if (!s.B.length)
        for (let i = 0; i < 3; i++) {
          const g = Math.random() * 6.28;
          s.B.push({
            x: Math.random() * w,
            y: Math.random() * h * 0.4,
            vx: Math.cos(g) * 16,
            vy: Math.sin(g) * 16,
            s: 3,
          });
        }
      const zx = w / 2 + Math.sin(s.t * 0.8) * w * 0.3,
        zy = h * 0.68 + Math.cos(s.t * 1.1) * h * 0.14;
      s.cd = (s.cd || 0) - dt;
      if (s.cd <= 0) {
        let m = null,
          md = 1e9;
        s.B.forEach((b) => {
          const d = Math.hypot(b.x - zx, b.y - zy);
          d < md && ((md = d), (m = b));
        });
        if (m) {
          const g = Math.atan2(m.y - zy, m.x - zx);
          s.S.push({ x: zx, y: zy, vx: Math.cos(g) * 150, vy: Math.sin(g) * 150, l: 1 });
          s.cd = 0.4;
        }
      }
      s.B.forEach((b) => {
        b.x = (b.x + b.vx * dt + w) % w;
        b.y = (b.y + b.vy * dt + h) % h;
      });
      s.S = s.S.filter((o) => {
        o.x += o.vx * dt;
        o.y += o.vy * dt;
        o.l -= dt;
        if (o.l <= 0) return !1;
        for (let i = s.B.length - 1; i >= 0; i--) {
          const b = s.B[i];
          if (Math.hypot(b.x - o.x, b.y - o.y) < b.s * 5 + 4) {
            s.B.splice(i, 1);
            if (b.s > 1) {
              const g = Math.atan2(b.vy, b.vx),
                v = Math.hypot(b.vx, b.vy) * 1.3;
              [-0.8, 0.8].forEach((d) =>
                s.B.push({ x: b.x, y: b.y, vx: Math.cos(g + d) * v, vy: Math.sin(g + d) * v, s: b.s - 1 }),
              );
            }
            return !1;
          }
        }
        return !0;
      });
      const g = c.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#0c5a86");
      g.addColorStop(1, "#061a3c");
      c.fillStyle = g;
      c.fillRect(0, 0, w, h);
      s.B.forEach((b) => {
        const r = b.s * 5 + 3;
        c.fillStyle = "#4a2a8a";
        c.beginPath();
        c.arc(b.x, b.y, r, 0, 7);
        c.fill();
        eyes(c, b.x, b.y, r);
      });
      c.strokeStyle = "#dffaff";
      c.lineWidth = 1.2;
      s.S.forEach((o) => {
        c.beginPath();
        c.arc(o.x, o.y, 2.6, 0, 7);
        c.stroke();
      });
      c.fillStyle = "rgba(150,220,255,.5)";
      c.beginPath();
      c.arc(zx, zy, 9, 0, 7);
      c.fill();
      zen(c, zx, zy + 1, 5.5);
      c.fillStyle = "#cfe6f5";
      c.beginPath();
      c.ellipse(zx, zy + 6, 14, 4.5, 0, 0, 7);
      c.fill();
    },
  };
  function demo() {
    cancelAnimationFrame(RAF);
    const cs = [...document.querySelectorAll(".arcb canvas")].map((cv) => {
      cv.width = 280;
      cv.height = 260;
      const c = cv.getContext("2d");
      c.setTransform(2, 0, 0, 2, 0, 0);
      return { c, k: cv.dataset.v, s: {} };
    });
    let lt = 0,
      fc = 0,
      acc = 0;
    const f = (t) => {
      if (!$("#arrg")) return;
      RAF = requestAnimationFrame(f);
      if (document.hidden) {
        lt = 0;
        return;
      }
      const dt0 = Math.min(0.05, (t - (lt || t)) / 1e3);
      lt = t;
      fc++;
      acc += dt0;
      const on = document.querySelector(".arcb.on"),
        ov = on && on.dataset.v;
      const slow = fc % 8 === 0,
        adt = acc;
      slow && (acc = 0);
      cs.forEach((o) => {
        const fr = o.k === ov;
        if (!fr && !slow) return;
        const dt = fr ? Math.min(0.05, (t - (o.lt || t)) / 1e3) : Math.min(0.2, adt);
        o.lt = t;
        try {
          (DM[(mcur(o.k) || [])[3] || o.k] || DM.brick)(o.c, 140, 130, o.s, dt);
        } catch (e) {}
        if (Math.floor(t / 700) % 2) {
          o.c.fillStyle = "rgba(0,0,0,.45)";
          o.c.fillRect(36, 60, 68, 13);
          o.c.fillStyle = "#ffe46a";
          o.c.font = "800 8px system-ui";
          o.c.textAlign = "center";
          o.c.fillText("INSERT COIN", 70, 69.5);
        }
      });
    };
    RAF = requestAnimationFrame(f);
  }
  function upd(id, anim) {
    const L = LST(),
      n = L.length,
      i = L.indexOf(id),
      rg = $("#arrg");
    if (!rg) return;
    let d = (i - IDX) % n;
    d > n / 2 && (d -= n);
    d < -n / 2 && (d += n);
    IDX = i;
    ANG -= (d * 360) / n;
    rg.style.transition = anim ? "" : "none";
    rg.style.transform = `translateZ(${-R(n)}px) rotateY(${ANG}deg)`;
    rg.querySelectorAll(".arcb").forEach((c) => c.classList.toggle("on", c.dataset.v === id));
    document
      .querySelectorAll(".arsw button")
      .forEach((b) => b.setAttribute("aria-selected", b.dataset.v === id));
    document.querySelectorAll(".arcb").forEach((c) => {
      const m = c.querySelector(".xmq b");
      m && (m.textContent = gname(c.dataset.v));
    });
    const b = $(".arw .vzbt");
    b && (b.innerHTML = bt(id));
    const sg = $(".arsgw");
    sg && (sg.innerHTML = swh(id));
    cur = id;
    try {
      theme(id === "garde" && mget("garde") === "b" ? "bulles" : id);
    } catch (e) {}
  }
  const arFit = () => {
    const s = $("#arst"),
      t = $(".artl");
    if (!s || !t) return;
    const r = s.getBoundingClientRect(),
      k = Math.max(0.45, Math.min(1.9, Math.min((r.height - 10) / 390, (r.width - 90) / 250)));
    t.style.scale = k.toFixed(3);
  };
  addEventListener("resize", () => {
    arFit();
    setTimeout(arFit, 250);
  });
  function hall(f) {
    window.ARM = 1;
    f && AG.includes(f) && st.set("ar:sel", f);
    scrape();
    try {
      nv("games");
    } catch (e) {}
    const L = LST(),
      n = L.length,
      id = sel();
    IDX = L.indexOf(id);
    ANG = (-IDX * 360) / n;
    app.innerHTML = `<div class="arw"><i class="arlt" style="left:22%"></i><i class="arlt" style="left:76%"></i><div class="vztp"><button class="back" data-a="arHm">‹ Accueil</button><div class="vzti"><b>Salle d’arcade</b><small>Les bornes de Zeni</small></div><div class="chip">🫧 ${FLX()}</div></div>
<div class="arneon">ARCADE<small>INSERT COIN</small></div>
<div class="arsw" role="tablist">${L.map((k) => `<button role="tab" data-a="arSel" data-v="${k}" aria-selected="${k === id}">${lk(k) ? SV.k : ""}${esc(G(k).n)}</button>`).join("")}</div>
<div class="arsgw"></div><div class="arst" id="arst">${n > 1 ? '<button class="arnv l" data-a="arMv" data-v="-1" aria-label="Borne précédente">‹</button><button class="arnv r" data-a="arMv" data-v="1" aria-label="Borne suivante">›</button>' : ""}<div class="artl"><div class="arrg" id="arrg">${L.map(
      (k, j) => {
        const g = G(k);
        return `<div class="arcb" data-v="${k}" style="--a:${g.a || "#ff5fd2"};--b:${g.b || "#2a0f4a"};transform:rotateY(${(j * 360) / n}deg) translateZ(${R(n)}px)"><i class="fc xsh"></i><i class="fc xbk"></i><i class="fc xsd xsl"></i><i class="fc xsd xsr"></i><i class="fc xtp"></i><div class="fc xmq"><b>${esc(gname(k))}</b></div><i class="fc xgr"></i><div class="fc xsc"><canvas data-v="${k}"></canvas>${lk(k) ? `<span class="xlk">${SV.k}</span>` : ""}</div><div class="fc xpn"><i class="j"></i><i class="k1"></i><i class="k2"></i><i class="k3"></i></div><i class="fc xlp"></i><i class="fc xlw"></i></div>`;
      },
    ).join("")}</div></div></div>
<div class="vzbt"></div></div>`;
    const nb = $("#nav");
    nb && (nb.hidden = !0);
    upd(id, 0);
    demo();
    window.scrollTo(0, 0);
    arFit();
    requestAnimationFrame(arFit);
    document.body.classList.add("arhall");
    if (!document.getElementById("arwall")) {
      const w = document.createElement("div");
      w.id = "arwall";
      document.body.appendChild(w);
    }
    window.arWI ||
      (window.arWI = setInterval(() => {
        if (!document.querySelector(".arw")) {
          const x = document.getElementById("arwall");
          x && x.remove();
          document.body.classList.remove("arhall");
        }
      }, 400));
    const aw = $(".arw");
    let ZM = 0;
    aw.addEventListener(
      "click",
      (e) => {
        const b = e.target.closest(".vzbt button");
        if (!b || ZM || b.disabled) return;
        const a = b.dataset.a,
          v = b.dataset.v;
        if (
          !["arPl", "infGo", "zrGo", "zrRk", "bzGo", "bzWv", "zgGo", "zgRk", "bzRk", "zcGo", "zcRk"].includes(
            a,
          ) ||
          0
        )
          return;
        e.stopPropagation();
        e.preventDefault();
        ZM = 1;
        try {
          sfx(1900, 0.05);
          setTimeout(() => sfx(2500, 0.07), 70);
          setTimeout(() => sfx(170, 0.14), 250);
          setTimeout(() => sfx(988, 0.09), 430);
          setTimeout(() => sfx(1319, 0.3), 520);
          vib && vib(15);
        } catch (x) {}
        const tl = $(".artl");
        tl.style.transform = getComputedStyle(tl).transform;
        tl.style.animation = "none";
        tl.offsetWidth;
        tl.style.transition = "transform 1s cubic-bezier(.5,0,.3,1)";
        tl.style.transform = "translateY(-39px) translateZ(520px)";
        aw.classList.add("zm");
        setTimeout(() => {
          if (!document.body.contains(aw)) return;
          cancelAnimationFrame(RAF);
          const o = $("#arcrt");
          o && o.remove();
          const d = document.createElement("div");
          d.id = "arcrt";
          d.innerHTML = "<i></i><b>JOUEUR 1<small>PRÊT !</small></b>";
          document.body.appendChild(d);
          setTimeout(() => d.remove(), 1300);
          try {
            sfx(90, 0.2);
            [262, 330, 392, 523, 784].forEach((f, i) => setTimeout(() => sfx(f, 0.07), 480 + i * 70));
          } catch (x) {}
          try {
            act[a](v);
          } catch (x) {}
        }, 1100);
      },
      !0,
    );
    const s = $("#arst");
    let x0 = null,
      dx = 0,
      drg = 0;
    const rgE = $("#arrg"),
      Rn = R(n);
    s.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button")) return;
      x0 = e.clientX;
      dx = 0;
      drg = 0;
      e.pointerType === "mouse" && e.preventDefault();
    });
    addEventListener("pointermove", (e) => {
      if (x0 == null || !rgE.isConnected) return;
      dx = e.clientX - x0;
      if (Math.abs(dx) > 6) {
        drg = 1;
        rgE.style.transition = "none";
        rgE.style.transform = `translateZ(${-Rn}px) rotateY(${ANG + dx * 0.35}deg)`;
      }
    });
    addEventListener("pointerup", () => {
      if (x0 == null) return;
      x0 = null;
      if (!rgE.isConnected) return;
      rgE.style.transition = "";
      if (Math.abs(dx) > 40 && n > 1) {
        mv(dx < 0 ? 1 : -1);
      } else {
        rgE.style.transform = `translateZ(${-Rn}px) rotateY(${ANG}deg)`;
      }
      if (drg) setTimeout(() => (drg = 0), 30);
    });
    s.addEventListener(
      "click",
      (e) => {
        if (drg) {
          e.stopPropagation();
          return;
        }
      },
      !0,
    );
    s.addEventListener("click", (e) => {
      const c = e.target.closest(".arcb");
      if (!c || e.target.closest("button")) return;
      if (c.dataset.v === sel()) {
        const b = $(".arw .vzbig:not([disabled])");
        b && b.click();
      } else pick(c.dataset.v);
    });
  }
  function pick(v) {
    const L = LST();
    if (!L.includes(v) || (v === sel() && $("#arrg"))) return;
    st.set("ar:sel", v);
    try {
      sfx(330, 0.12);
      setTimeout(() => sfx(520, 0.08), 160);
    } catch (e) {}
    upd(v, 1);
  }
  const mv = (d) => {
    const L = LST();
    pick(L[(L.indexOf(sel()) + d + L.length) % L.length]);
  };
  const _hub = hub;
  hub = function (e) {
    if (e === "brick" && !SCR) return hall("brick");
    return _hub.apply(this, arguments);
  };
  setTimeout(() => {
    Object.assign(act, {
      arSel: (v) => pick(v),
      arGm: (v) => {
        const k = sel();
        if (!MODES[k] || v === mget(k)) return;
        const mm = MODES[k].find((m) => m[0] === v);
        if (mm && mlk(mm)) {
          try {
            gToast("🔒 " + mm[1] + " se débloque à l’étape " + (GSTEP[mm[3]] || 0) + " de l’histoire.");
          } catch (e) {}
          return;
        }
        st.set("ar:m:" + k, v);
        try {
          sfx(560, 0.08);
          setTimeout(() => sfx(860, 0.08), 90);
        } catch (e) {}
        const b = $(".arw .vzbt");
        b && (b.innerHTML = bt(k));
        const sg = $(".arsgw");
        sg && (sg.innerHTML = swh(k));
        document.querySelectorAll(".arcb").forEach((c) => {
          const m = c.querySelector(".xmq b");
          m && (m.textContent = gname(c.dataset.v));
        });
        try {
          theme(k === "garde" && v === "b" ? "bulles" : k);
        } catch (e) {}
      },
      arMv: (v) => mv(+v),
      arPl: (v) => {
        cur = "brick";
        act.play(v);
      },
      arHm: () => {
        window.ARM = 0;
        cancelAnimationFrame(RAF);
        home();
      },
      arShX: () => {
        const d = $("#vzsh");
        d && d.remove();
      },
      arRu: () => {
        const g = G(sel());
        sheet(g.n, `<p class="note" style="margin:0">${g.s || ""}</p>`);
      },
    });
    const _o = act.open;
    act.open = function (e) {
      if (e === "bulles") return hall("garde");
      if (e === HID || AG.includes(e)) return hall(AG.includes(e) ? e : 0);
      return _o.apply(this, arguments);
    };
    const _h = home;
    home = function () {
      if (window.ARM && (AG.includes(cur) || cur === HID || cur === "bulles")) return hall();
      window.ARM = 0;
      return _h.apply(this, arguments);
    };
    try {
      cur === null && document.querySelector(".tile") && home();
    } catch (e) {}
  }, 120);
  setTimeout(() => {
    [
      ["zrQ", "recif"],
      ["bzQ", "garde"],
    ].forEach(([k, g]) => {
      const o = act[k];
      o &&
        (act[k] = function () {
          try {
            o.apply(this, arguments);
          } catch (e) {}
          hall(g);
        });
    });
  }, 500);
})();

(() => {
  const fit = () => {
    const st = document.querySelector(".arw .arst"),
      g = st && st.querySelector(".arrg");
    if (!g) return;
    const key = [innerWidth, innerHeight, st.clientHeight].join("|");
    if (g.__fz && g.__fz.k === key) {
      g.style.scale = g.__fz.s;
      g.style.translate = g.__fz.t;
      return;
    }
    const h = st.clientHeight,
      v = Math.max(0.5, Math.min(1.32, ((h - 150) / 395) * 1.17));
    {
      const a1 = document.querySelector(".arw .arsw"),
        a2 = document.querySelector(".arw .arsgw"),
        b1 = document.querySelector(".arw .vzbt"),
        fk = [
          innerWidth,
          innerHeight,
          h,
          (a2 && a2.offsetHeight > 20 && (window.__arSH = a2.offsetHeight),
          Math.round((a1 ? a1.offsetTop + a1.offsetHeight : 0) + (window.__arSH || 54))),
          b1 ? b1.offsetTop : 0,
          a1 ? a1.offsetHeight : 0,
        ].join("|");
      g.dataset.t0 || (g.dataset.t0 = Date.now());
      if (g.dataset.fk === fk) return;
      if (g.dataset.fk && !g.__go) {
        if (g.dataset.pk !== fk) {
          g.dataset.pk = fk;
          clearTimeout(g.__tm);
          g.__tm = setTimeout(() => {
            g.__go = 1;
            try {
              fit();
            } finally {
              g.__go = 0;
            }
          }, 1300);
        }
        return;
      }
      Date.now() - g.dataset.t0 > 2200 && (g.dataset.fk = fk);
    }
    g.style.scale = v.toFixed(3);
    let vv = v;
    g.style.translate = "0px 0px";
    const M = () => {
      const q0 = g.getBoundingClientRect(),
        mq = [...g.querySelectorAll(".xmq")]
          .map((e) => e.getBoundingClientRect())
          .sort((a, b) => b.width - a.width)[0],
        w = document.querySelector(".arw .arsgw"),
        w2 = document.querySelector(".arw .arsw"),
        vb = document.querySelector(".arw .vzbt"),
        cb = w2
          ? Math.max(
              w2.getBoundingClientRect().bottom + (window.__arSH || 54),
              w && w.offsetHeight ? w.getBoundingClientRect().bottom + 12 : 0,
            )
          : 0;
      return {
        top: mq ? mq.top : q0.top,
        bot: q0.bottom,
        cb,
        lim: vb ? vb.getBoundingClientRect().top + 60 : q0.bottom,
        h: q0.height,
      };
    };
    if (matchMedia("(orientation:landscape) and (min-width:900px) and (min-height:561px)").matches) {
      g.style.translate = "0px 0px";
      g.style.scale = Math.max(0.6, Math.min(1.7, (h - 70) / 340)).toFixed(3);
    } else if (innerWidth >= 700) {
      let m = M();
      if (m.cb && m.h) {
        const f = Math.max(0.4, Math.min(1.6, (m.lim - (m.cb + 10)) / (m.bot - m.top)));
        vv = Math.max(0.45, Math.min(1.32, vv * f));
        g.style.scale = vv.toFixed(3);
        let tr = 0;
        for (let k = 0; k < 8; k++) {
          m = M();
          const d = m.cb + 10 - m.top;
          if (Math.abs(d) < 1.5) break;
          tr += d * (k ? 0.9 : 1);
          g.style.translate = "0px " + tr.toFixed(1) + "px";
        }
      }
    } else
      for (let k = 0; k < 3; k++) {
        const m = M();
        if (!m.cb || !m.h) break;
        const q0 = g.getBoundingClientRect(),
          c = (q0.top + q0.bottom) / 2,
          need = m.cb + 14;
        if (m.top >= need - 1) break;
        const f = (c - need) / (c - m.top);
        if (!(f > 0.3)) break;
        vv = Math.max(0.5, vv * f);
        g.style.scale = vv.toFixed(3);
      }
    Date.now() - (+g.dataset.t0 || 0) > 2200 && (g.__fz = { k: key, s: g.style.scale, t: g.style.translate });
  };
  try {
    new MutationObserver(fit).observe(document.body, { childList: true, subtree: true });
  } catch (x) {}
  addEventListener("resize", fit);
  setInterval(fit, 600);
})();
