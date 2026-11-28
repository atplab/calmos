(() => {
  /* Lobby « Jeux de société » : une étagère de boîtes ; le lobby du jeu choisi s'ouvre dessous. Ajouter un jeu : son id dans SG + sa boîte dans BX. */
  const SG = ["scrabble", "chess"],
    SG2 = SG.concat("draughts");
  window.SGL = SG2;
  const HID = "jeuxsociete";
  const BX = {
    scrabble: {
      c: "#e9d3a1",
      d: "#b8955a",
      t: "#5a3a1a",
      f:
        '<g font-family="Georgia,serif" font-weight="800" font-size="13" text-anchor="middle">' +
        [
          ["M", 12],
          ["O", 30],
          ["T", 48],
        ]
          .map(
            ([l, x], k) =>
              `<rect x="${x - 8}" y="${30 + (k % 2) * 3}" width="16" height="17" rx="2.5" fill="#fff6e0" stroke="#a8845a"/><text x="${x}" y="${43 + (k % 2) * 3}" fill="#5a3a1a">${l}</text>`,
          )
          .join("") +
        "</g>",
    },
    draughts: {
      c: "#7a4a2a",
      d: "#4a2a14",
      t: "#f4e6d0",
      f:
        "<g>" +
        [...Array(16)]
          .map(
            (_, k) =>
              `<rect x="${6 + (k % 4) * 12}" y="${18 + Math.floor(k / 4) * 12}" width="12" height="12" fill="${(k + Math.floor(k / 4)) % 2 ? "#b58863" : "#f0d9b5"}"/>`,
          )
          .join("") +
        '<circle cx="18" cy="30" r="4.6" fill="#2a1f1a" stroke="#f0d9b5" stroke-width="1"/><circle cx="42" cy="42" r="4.6" fill="#fbf6ea" stroke="#3a2a22" stroke-width="1"/></g>',
    },
    chess: {
      c: "#3a2a22",
      d: "#20140f",
      t: "#f4e6d0",
      f:
        "<g>" +
        [...Array(16)]
          .map(
            (_, k) =>
              `<rect x="${6 + (k % 4) * 12}" y="${18 + Math.floor(k / 4) * 12}" width="12" height="12" fill="${(k + Math.floor(k / 4)) % 2 ? "#c9a27a" : "#f4e6d0"}"/>`,
          )
          .join("") +
        '<path d="M24 54h20v-4H26l3-6c-5-3-5-9 0-13l3-6 3 3c6 1 9 7 7 13l-3 3 4 6" fill="#20140f" stroke="#f4e6d0" stroke-width="1.2" transform="translate(-2 -10) scale(.9)"/></g>',
    },
  };
  const JS = {
    id: HID,
    n: "Jeux de société",
    ic: "",
    a: "#e0a35a",
    b: "#5a2a1a",
    t: "La ludothèque",
    s: "Motuiles, Échecs et Dames réunis sur l’étagère.",
    sp: "",
  };
  try {
    window.GIL &&
      (GIL[HID] =
        '<ellipse cx="32" cy="58" rx="19" ry="3.6" fill="#000" opacity=".22"/><rect x="5" y="5" width="54" height="52" rx="12" fill="#5a2a1a"/><rect x="8" y="30" width="48" height="4" fill="#c98a4a"/><rect x="8" y="50" width="48" height="4" fill="#c98a4a"/><rect x="11" y="12" width="9" height="18" rx="1.5" fill="#e9d3a1"/><rect x="21" y="15" width="8" height="15" rx="1.5" fill="#5f86d9"/><rect x="30" y="10" width="10" height="20" rx="1.5" fill="#3a2a22" stroke="#f4e6d0" stroke-width="1"/><rect x="41" y="17" width="12" height="13" rx="1.5" fill="#e8605a"/><rect x="12" y="40" width="22" height="10" rx="1.5" fill="#7fc48a"/><rect x="14" y="35" width="18" height="6" rx="1.5" fill="#f2c24a"/><circle cx="44" cy="45" r="4.5" fill="#fff"/><circle cx="42.5" cy="43.5" r=".9" fill="#3a2a22"/><circle cx="45.5" cy="46.5" r=".9" fill="#3a2a22"/>');
    const i = GD.findIndex((g) => g.id === "scrabble");
    GD.splice(i < 0 ? GD.length : i, 0, JS);
    ALL.push(JS);
    const j = GUNL.indexOf("scrabble");
    GUNL.splice(j < 0 ? GUNL.length : j, 0, HID);
    const o = st.get("g:ord", []);
    if (o.length && !o.includes(HID)) {
      const k = o.indexOf("scrabble");
      o.splice(k < 0 ? o.length : k, 0, HID);
      st.set("g:ord", o);
    }
    const m = GCAT.find((c) => c[0] === "mots");
    m && !m[2].includes(HID) && m[2].push(HID);
  } catch (e) {}
  const css = document.createElement("style");
  css.textContent = `
#sgwall{position:fixed;inset:0;z-index:0;pointer-events:none;background:radial-gradient(70% 45% at 50% 18%,rgba(255,214,140,.32),transparent 70%),repeating-linear-gradient(90deg,rgba(0,0,0,.08) 0 2px,transparent 2px 70px),linear-gradient(180deg,#6a3424 0%,#4a2218 55%,#2a120c 100%)}
#sgwall::after{content:"";position:absolute;left:0;right:0;bottom:0;height:22%;background:repeating-linear-gradient(90deg,#7a4a2a 0 60px,#6a3e22 60px 62px),linear-gradient(#5a321c,#3a1e10);box-shadow:inset 0 10px 20px rgba(0,0,0,.35)}
body.sghall #app{overflow:visible}
.sgw{position:relative;z-index:1;color:#fff8ee}.sgw .vztp{display:flex;align-items:center;gap:8px}.sgw .vztp .back{white-space:nowrap;flex:none}.sgw .vztp .rlb{flex:none;padding:8px;font-size:0;gap:0}.sgw .vztp .rlb svg{width:18px;height:18px}.sgw .vzti{flex:1;min-width:0;text-align:center}.sgw .vzti b{display:block;font:700 1.05rem/1.15 Fraunces,Georgia,serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sgw .vztp .chip{flex:none}.sgw .vztp{position:relative}
.sgsh{position:relative;max-width:520px;margin:6px auto 10px;padding:14px 14px 0;border-radius:10px 10px 4px 4px;background:linear-gradient(90deg,#3a1e10,#5a321c 6%,#5a321c 94%,#3a1e10);box-shadow:0 18px 30px rgba(0,0,0,.45),inset 0 0 0 4px #7a4a2a}
.sgrow{display:flex;align-items:flex-end;gap:10px;min-height:150px;padding:0 6px;position:relative}
.sgrow::after{content:"";position:absolute;left:-14px;right:-14px;bottom:-12px;height:14px;background:linear-gradient(#c98a4a,#8a5a30);box-shadow:0 6px 10px rgba(0,0,0,.4)}
.sgrow+.sgrow{margin-top:20px;min-height:34px}.sgrow+.sgrow .sgst i{height:8px;width:54px}.sgrow+.sgrow .sgdc i{width:16px;height:16px}.sgrow+.sgrow .sgdc u{width:12px;height:16px}
.sgb{position:relative;flex:none;width:92px;height:128px;border:0;padding:0;background:none;cursor:pointer;transform-style:preserve-3d;transition:transform .45s cubic-bezier(.3,1.4,.5,1),filter .3s;filter:brightness(.8)}
.sgb .fr{position:absolute;inset:0;border-radius:4px;background:var(--c);box-shadow:inset 0 0 0 3px rgba(255,255,255,.18),inset -6px 0 0 rgba(0,0,0,.18);overflow:hidden}
.sgb .fr svg{position:absolute;left:8%;top:6%;width:84%;height:62%}
.sgb .fr b{position:absolute;left:4px;right:4px;bottom:8px;text-align:center;font:800 12px/1.1 Fraunces,Georgia,serif;color:var(--t);text-shadow:0 1px 0 rgba(0,0,0,.2)}
.sgb .sd{position:absolute;top:2px;right:-10px;width:10px;height:calc(100% - 2px);background:var(--d);transform:skewY(-30deg);transform-origin:0 0;border-radius:0 2px 2px 0}
.sgb .tp{position:absolute;left:2px;top:-6px;width:100%;height:6px;background:color-mix(in srgb,var(--c) 80%,#fff);transform:skewX(-58deg);transform-origin:0 100%}
.sgb.on{transform:translateY(-14px) translateZ(20px) rotate(-3deg) scale(1.06);filter:drop-shadow(0 0 14px rgba(255,214,140,.75)) brightness(1.05)}
.sgb:not(.on):hover{transform:translateY(-4px)}
.sgso{flex:none;width:44px;height:96px;border-radius:3px;background:linear-gradient(90deg,var(--c),color-mix(in srgb,var(--c) 70%,#000));box-shadow:inset 0 0 0 2px rgba(255,255,255,.15);display:grid;place-items:center;writing-mode:vertical-rl;font:700 10px Fraunces,Georgia,serif;color:rgba(255,255,255,.75);opacity:.75}
.sgdc{display:flex;gap:6px;align-items:flex-end}.sgdc i{display:block;width:22px;height:22px;border-radius:5px;background:#fff;box-shadow:inset -3px -3px 0 rgba(0,0,0,.12);position:relative}.sgdc i::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 30% 30%,#3a2a22 2.2px,transparent 2.6px),radial-gradient(circle at 70% 70%,#3a2a22 2.2px,transparent 2.6px),radial-gradient(circle at 50% 50%,#3a2a22 2.2px,transparent 2.6px)}
.sgdc u{display:block;width:16px;height:22px;background:#e8605a;clip-path:polygon(50% 0,80% 18%,65% 40%,100% 60%,100% 100%,0 100%,0 60%,35% 40%,20% 18%)}
.sgst{flex:none;display:flex;flex-direction:column-reverse;gap:2px}.sgst i{display:block;width:70px;height:12px;border-radius:2px;background:var(--c);box-shadow:inset 0 -3px 0 rgba(0,0,0,.2)}
.sg3d{flex:1;min-height:120px;display:flex;align-items:center;padding:4px 0;overflow:hidden;justify-content:center;perspective:900px;perspective-origin:50% 0%;margin:-6px 0 6px;pointer-events:none}.sgbd{position:relative;width:var(--bw,200px);aspect-ratio:1;transform-style:preserve-3d;transform:rotateX(52deg) rotateZ(-14deg);animation:sgSw 9s ease-in-out infinite alternate;margin-top:-4%}@keyframes sgSw{to{transform:rotateX(52deg) rotateZ(14deg)}}.sgbd .sged{position:absolute;inset:-5%;border-radius:6px;background:linear-gradient(135deg,#8a5a30,#5a321c);transform:translateZ(-2px);box-shadow:0 30px 40px rgba(0,0,0,.55),0 0 0 2px #3a1e10}.sgbd .sged::after{content:"";position:absolute;left:0;right:0;bottom:-12px;height:12px;background:#3a1e10;transform-origin:top;transform:rotateX(-90deg)}.sgsq{position:absolute;inset:0;display:grid;grid-template-columns:repeat(8,1fr);transform:translateZ(0)}.sgsq b{display:block}.sgbd.ch .sgsq b.l{background:#f0d9b5}.sgbd.ch .sgsq b.d{background:#b58863}.sgpc{position:absolute;width:12.5%;height:12.5%;transform-style:preserve-3d}.sgpc svg{position:absolute;left:-5%;bottom:30%;width:110%;height:150%;transform-origin:50% 100%;transform:rotateX(-80deg);filter:drop-shadow(0 4px 2px rgba(0,0,0,.35))}.sgpc .chp.w path,.sgpc .chp.w circle{fill:#fbf6ea;stroke:#3a2a22}.sgpc .chp.b path,.sgpc .chp.b circle{fill:#2a1f1a;stroke:#f0d9b5}.sgbd.sc .sgsq{gap:1px;background:#c9b48a;padding:1px}.sgbd.sc .sgsq b{background:#e9ddc0;display:grid;place-items:center;font-size:10px;color:#fff}.sgbd.sc .sgsq b.tw{background:#e8605a}.sgbd.sc .sgsq b.dw{background:#f2a6b4}.sgbd.sc .sgsq b.tl{background:#4a8be0}.sgbd.sc .sgsq b.dl{background:#9fd0f0}.sgbd.sc .sgsq b.st{background:#f2a6b4}.sgtl{position:absolute;transform-style:preserve-3d}.sgtl span,.sgrk span{position:absolute;inset:6%;display:grid;place-items:center;border-radius:3px;background:linear-gradient(#fff6e0,#f0dcb0);box-shadow:0 2px 0 #b8955a,0 3px 3px rgba(0,0,0,.35);font:900 clamp(9px,2.6vw,15px)/1 Georgia,serif;color:#3a2a1a;transform:translateZ(3px)}.sgtl sub,.sgrk sub{position:absolute;right:8%;bottom:6%;font-size:.45em}.sgrk{position:absolute;left:12%;right:12%;bottom:-17%;height:12%;display:flex;gap:2%;padding:1% 2%;background:linear-gradient(#8a5a30,#5a321c);border-radius:3px;transform-origin:50% 100%;transform:translateZ(2px) rotateX(-70deg);box-shadow:0 4px 6px rgba(0,0,0,.4)}.sgrk span{position:relative;inset:auto;flex:1;transform:none}.sgw .sgbody{max-width:560px;margin:0 auto}.sgbody>.story{display:none}.sgw{min-height:calc(100dvh - 52px);display:flex;flex-direction:column;box-sizing:border-box}.sgw .sgsh{width:100%}@media(min-height:760px){.sgw .sgsh{transform:scale(1.08);transform-origin:50% 0;margin-bottom:24px}}.sgspn .glass,.sgspn section,.sgspn .opts>*,.sgspn #chh>div,.sgspn details{background:rgba(255,236,210,.07)!important;border:1px solid rgba(242,194,122,.28)!important;box-shadow:none!important;color:#fff3e0}.sgspn .chc{background:rgba(58,30,16,.6);border-color:rgba(242,194,122,.35);color:#fff3e0}.sgspn .chc.on,.sgspn [data-a=scrMode].on{background:linear-gradient(#f2c27a,#c98a4a)!important;color:#3a1e10!important}.sgspn .btn,.sgspn .rc-go{background:linear-gradient(#f2c27a,#b8743a)!important;color:#3a1e10!important}.sgw .sgbt{margin-top:auto;max-width:560px;width:100%;margin-left:auto;margin-right:auto}.sgw .vzbig{background:linear-gradient(#f2c27a,#b8743a);color:#3a1e10;box-shadow:0 0 22px rgba(242,194,122,.45),inset 0 1px 0 rgba(255,255,255,.6)}.sgw .vzbig small{color:#5a321c}.sgw .vzpill{background:rgba(58,30,16,.75);border-color:rgba(242,194,122,.45);color:#fff3e0}.sgw .vzb{--k:#f2c27a;background:rgba(58,30,16,.75)}.sgsht{position:fixed;inset:0;z-index:9000;display:flex;align-items:flex-end;justify-content:center;background:rgba(20,8,4,.55);animation:rlf .2s}.sgspn{width:min(560px,100%);max-height:86dvh;overflow:auto;box-sizing:border-box;padding:12px 12px 20px;border-radius:22px 22px 0 0;background:linear-gradient(#4a2618,#2a140c);box-shadow:0 -10px 30px rgba(0,0,0,.5);animation:rlu .35s cubic-bezier(.2,1.2,.4,1)}.sgsx{display:flex;align-items:center;justify-content:space-between;margin:0 4px 10px;color:#fff3e0;font:700 1.15rem Fraunces,Georgia,serif}.sgsx button{width:34px;height:34px;border-radius:50%;border:0;background:rgba(255,255,255,.12);color:#fff}@media(min-width:640px){.sgsht{align-items:center}.sgspn{border-radius:22px}}
.sgnm{text-align:center;margin:14px 0 4px;font:700 1.25rem Fraunces,Georgia,serif;text-shadow:0 2px 6px rgba(0,0,0,.5)}`;
  document.head.appendChild(css);
  const G = (id) => ALL.find((g) => g.id === id) || { id, n: id };
  const lk = (id) => {
    try {
      return typeof gLock === "function" && gLock(id) && !sxOn();
    } catch (e) {
      return !1;
    }
  };
  const sel = () => {
    const v = st.get("sg:sel", "scrabble");
    return SG2.includes(v) ? v : SG[0];
  };
  let ON = 0,
    _o = null;
  const box = (id) => {
    const b = BX[id] || { c: "#7a8896", d: "#4a5462", t: "#fff", f: "" };
    const vv = id === "chess" && sel() === "draughts" ? "draughts" : id;
    return `<button class="sgb${id === sel() || vv === sel() ? " on" : ""}" data-a="sgPk" data-v="${vv}" aria-label="${esc(G(id).n)}" style="--c:${b.c};--d:${b.d};--t:${b.t}"><span class="tp"></span><span class="sd"></span><span class="fr"><svg viewBox="0 0 60 60">${b.f}</svg><b>${esc(G(id).n)}</b></span></button>`;
  };
  const frame = (
    id,
  ) => `<div class="sgw"><div class="vztp"><button class="back" data-a="sgHm">‹ Accueil</button><div class="vzti"><b>Jeux de société</b><small>La ludothèque</small></div><div class="chip">🫧 ${FLX()}</div></div>
<div class="sgsh"><div class="sgrow">${SG.map(box).join("")}</div>
<div class="sgrow sgr2">${id === "chess" || id === "draughts" ? `<div class="sgmd" role="group" aria-label="Mode"><button class="${id === "chess" ? "on" : ""}" data-a="sgPk" data-v="chess" aria-pressed="${id === "chess"}"><i>♞</i><b>Échecs</b></button><button class="${id === "draughts" ? "on" : ""}" data-a="sgPk" data-v="draughts" aria-pressed="${id === "draughts"}"><i>⛀</i><b>Dames</b></button></div>` : ""}<div class="sgdc" aria-hidden="true"><u style="background:#5f86d9"></u><u style="background:#f2c24a"></u><i></i></div></div></div>
<div class="sg3d">${td(id)}</div><div class="sgbody" hidden></div><div class="vzbt sgbt"></div></div>`;
  window.sgFit = () => {
    const c = $(".sg3d"),
      b = c && c.querySelector(".sgbd");
    if (!b) return;
    const r = c.getBoundingClientRect(),
      w = Math.max(
        110,
        Math.min(230, r.width * 0.52, (r.height - 16) / (b.classList.contains("sc") ? 0.95 : 0.82)),
      );
    c.style.setProperty("--bw", Math.round(w) + "px");
  };
  addEventListener("resize", () => window.sgFit && sgFit());
  const td = (id) => {
    if (id === "chess") {
      let pc = "";
      try {
        const B = typeof CH0 !== "undefined" ? Array.from(CH0) : [];
        [
          [52, 36],
          [12, 28],
          [62, 45],
          [1, 18],
          [61, 34],
          [5, 26],
        ].forEach(([f, t]) => {
          B[t] = B[f];
          B[f] = 0;
        });
        B.forEach((v, i) => {
          if (!v) return;
          pc += `<i class="sgpc" style="left:${(i % 8) * 12.5}%;top:${Math.floor(i / 8) * 12.5}%">${typeof chPc === "function" ? chPc(v, typeof chSkin == "function" ? chSkin().cur : "f") : ""}</i>`;
        });
      } catch (e) {}
      return `<div class="sgbd ch sk-${typeof chSkin == "function" ? chSkin().cur : "f"}" style="animation-delay:-${Math.round(performance.now())}ms"><div class="sged"></div><div class="sgsq">${[...Array(64)].map((_, i) => `<b class="${((i % 8) + Math.floor(i / 8)) % 2 ? "d" : "l"}"></b>`).join("")}</div>${pc}</div>`;
    }
    if (id === "draughts") {
      let pc = "";
      try {
        const B = Array(64).fill(0);
        for (let r = 0; r < 8; r++)
          for (let c = 0; c < 8; c++)
            if ((r + c) & 1) {
              if (r < 3) B[r * 8 + c] = -1;
              else if (r > 4) B[r * 8 + c] = 1;
            }
        [
          [40, 33],
          [21, 28],
          [46, 37],
          [19, 26],
        ].forEach(([f, t]) => {
          B[t] = B[f];
          B[f] = 0;
        });
        B[12] = -2;
        B.forEach((v, i) => {
          if (!v) return;
          pc += `<i class="sgpc dm" style="left:${(i % 8) * 12.5}%;top:${Math.floor(i / 8) * 12.5}%">${typeof dmPc === "function" ? dmPc(v, typeof chSkin == "function" ? chSkin().cur : "f") : ""}</i>`;
        });
      } catch (e) {}
      return `<div class="sgbd ch sk-${typeof chSkin == "function" ? chSkin().cur : "f"}" style="animation-delay:-${Math.round(performance.now())}ms"><div class="sged"></div><div class="sgsq">${[...Array(64)].map((_, i) => `<b class="${((i % 8) + Math.floor(i / 8)) % 2 ? "d" : "l"}"></b>`).join("")}</div>${pc}</div>`;
    }
    if (id === "scrabble") {
      const N = 11,
        bon = (r, c) => {
          const a = Math.abs(r - 5),
            b = Math.abs(c - 5);
          if ((a === 5 && b === 5) || (a === 5 && b === 0) || (a === 0 && b === 5)) return "tw";
          if (a === b && a >= 2 && a <= 4) return "dw";
          if (a === 0 && b === 0) return "st";
          if ((a === 3 && b === 3) || (a === 1 && b === 4) || (a === 4 && b === 1)) return "tl";
          if ((a === 2 && b === 0) || (a === 0 && b === 2) || (a === 4 && b === 4)) return "dl";
          return "";
        };
      const V = { A: 1, C: 3, L: 1, M: 2, O: 1, S: 1, U: 1, N: 1, E: 1, I: 1, R: 1, F: 4 },
        T = {};
      "CALMOS".split("").forEach((l, k) => (T[5 * N + 2 + k] = l));
      "UNE".split("").forEach((l, k) => (T[(6 + k) * N + 4] = l));
      "OIR".split("").forEach((l, k) => (T[(6 + k) * N + 7] = l));
      const cells = [...Array(N * N)]
          .map((_, i) => {
            const r = Math.floor(i / N),
              c = i % N,
              b = bon(r, c);
            return `<b class="${b}">${b === "st" ? "★" : ""}</b>`;
          })
          .join(""),
        tiles = Object.entries(T)
          .map(
            ([i, l]) =>
              `<i class="sgtl" style="left:${((i % N) * 100) / N}%;top:${(Math.floor(i / N) * 100) / N}%;width:${100 / N}%;height:${100 / N}%"><span>${l}<sub>${V[l] || 1}</sub></span></i>`,
          )
          .join("");
      return `<div class="sgbd sc sks-${typeof scSkin == "function" ? scSkin().cur : "b"}"><div class="sged"></div><div class="sgsq" style="grid-template-columns:repeat(${N},1fr)">${cells}</div>${tiles}<div class="sgrk">${"FLOCONS"
        .split("")
        .map((l) => `<span>${l}<sub>${V[l] || 1}</sub></span>`)
        .join("")}</div></div>`;
    }
    return "";
  };
  window.sgTD = td;
  const wall = () => {
    document.body.classList.add("sghall");
    if (!document.getElementById("sgwall")) {
      const w = document.createElement("div");
      w.id = "sgwall";
      document.body.appendChild(w);
    }
    window.sgWI ||
      (window.sgWI = setInterval(() => {
        if (!document.querySelector(".sgw")) {
          const x = document.getElementById("sgwall");
          x && x.remove();
          document.body.classList.remove("sghall");
        }
      }, 400));
  };
  const wrap = () => {
    if (!ON || !SG2.includes(cur)) return;
    const a = document.getElementById("app");
    if (!a || a.querySelector(".sgw")) return;
    if (!a.querySelector(".story")) return;
    const id = cur,
      kids = [...a.children].filter((e) => !e.classList.contains("top"));
    const t = document.createElement("div");
    t.innerHTML = frame(id);
    const f = t.firstElementChild;
    const body = f.querySelector(".sgbody");
    kids.forEach((k) => body.appendChild(k));
    a.replaceChildren(f);
    {
      const os = document.querySelector(".sgsht .sgspn"),
        ob = os && os.querySelector(".sgbody");
      if (ob) {
        body.hidden = !1;
        ob.replaceWith(body);
      }
    }
    wall();
    sgBt(id);
    sgFit();
    requestAnimationFrame(sgFit);
    const nb = $("#nav");
    nb && (nb.hidden = !0);
  };
  const IC = {
    a: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M3 13v2M21 13v2"/></svg>',
    o: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
    r: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5V5.5M9 8h7M9 12h5"/></svg>',
    l: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    k: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M7 20h10v-2H8l2-4c-3-2-3-5 0-7l2-3 2 2c3 .5 5 4 4 7l-2 2 2 3"/></svg>',
  };
  const B = (a, i, t, v) =>
    `<button class="vzb" data-a="${a}"${v ? ` data-v="${v}"` : ""}><i>${i}</i><span>${t}</span></button>`;
  const q = (s) => document.querySelector(".sgbody " + s);
  window.sgBt = (id) => {
    const b = $(".sgbt");
    if (!b) return;
    let L = "",
      C = "",
      Rr = "";
    if (id === "scrabble") {
      const lv = (q(".rc-t b") || {}).textContent || "",
        m = q("[data-a=scrMode].on"),
        soc = m && m.dataset.v === "s";
      let A = [],
        T = 0;
      try {
        A = Object.keys(SC.G || {}).filter((k) => SC.G[k] && !SC.G[k].e);
        T = A.filter((k) => scrStat(k).k === "me").length;
      } catch (e) {}
      L = B("rulesGo", IC.r, "Règles") + B("sgSc", IC.k, "Skins", "sk");
      C = `<button class="vzbig" data-a="sgSc" data-v="on">Mes parties<small>${T ? T + " à toi de jouer" : "Mode social"}</small></button><button class="vzpill" data-a="sgSc" data-v="new">Nouvelle partie<small>Avec Social</small></button><button class="vzpill" data-a="sgSc" data-v="loc">À deux<small>${(() => {
        try {
          const g = scrClean(st.get("scr:loc", null));
          return g && !g.e ? "Reprendre la partie" : "Même appareil";
        } catch (e) {
          return "Même appareil";
        }
      })()}</small></button>`;
      Rr =
        B("sgSc", IC.l, "Niveau " + (typeof scrIaGl0 == "function" ? scrIaGl0() : 1), "ia") +
        B("sgSc", IC.o, "Libre", "fr");
    } else if (id === "chess") {
      const md = st.get("ch:md", "n"),
        N = st.get("ch:il", 1),
        c = (typeof CH != "undefined" && CH.cfg) || { lv: 2, col: 0 },
        sv = typeof chLoad == "function" && chLoad(),
        lt =
          (typeof CHLV != "undefined" && CHLV[c.lv - 1] ? CHLV[c.lv - 1].n : "") +
          " · " +
          (c.col > 0 ? "Blancs" : c.col < 0 ? "Noirs" : "Couleur au hasard");
      L = B("rulesGo", IC.r, "Règles") + B("sgCh", IC.k, "Skins", "sk");
      C = `<button class="vzbig" data-a="sgCh" data-v="play">Jouer<small>${sv ? "Reprendre la partie" : md === "l" ? "Libre · " + esc(lt) : "Niveau " + N}</small></button><button class="vzpill" data-a="sgCh" data-v="so">Mode social<small>${(() => {
        let n = 0;
        try {
          n = Object.keys(CH.G || {}).filter((k) => chStat(k).k === "me").length;
        } catch (e) {}
        return n ? n + " à toi de jouer" : "Avec Social";
      })()}</small></button><button class="vzpill" data-a="sgCh" data-v="loc">À deux<small>Même appareil</small></button>`;
      Rr = `<button class="vzb${md === "n" ? " on" : ""}" data-a="sgCh" data-v="n"><i>${IC.l}</i><span>Niveau ${N}</span></button><button class="vzb${md === "l" ? " on" : ""}" data-a="sgCh" data-v="li"><i>${IC.o}</i><span>Libre</span></button>`;
    } else if (id === "draughts") {
      const md = st.get("dm:md", "n"),
        N = st.get("dm:il", 1),
        c = (typeof DM != "undefined" && DM.cfg) || { lv: 2, col: 0 },
        sv = typeof dmLoad == "function" && dmLoad("ai"),
        sl = typeof dmLoad == "function" && dmLoad("loc"),
        lt =
          (typeof CHLV != "undefined" && CHLV[c.lv - 1] ? CHLV[c.lv - 1].n : "") +
          " · " +
          (c.col > 0 ? "Blancs" : c.col < 0 ? "Noirs" : "Couleur au hasard");
      L = B("rulesGo", IC.r, "Règles") + B("sgDm", IC.k, "Skins", "sk");
      C = `<button class="vzbig" data-a="sgDm" data-v="play">Jouer<small>${sv ? "Reprendre la partie" : md === "l" ? "Libre · " + esc(lt) : "Niveau " + N}</small></button><button class="vzpill" data-a="sgDm" data-v="so">Mode social<small>Avec Social</small></button><button class="vzpill" data-a="sgDm" data-v="loc">À deux<small>${sl ? "Reprendre la partie" : "Même appareil"}</small></button>`;
      Rr = `<button class="vzb${md === "n" ? " on" : ""}" data-a="sgDm" data-v="n"><i>${IC.l}</i><span>Niveau ${N}</span></button><button class="vzb${md === "l" ? " on" : ""}" data-a="sgDm" data-v="li"><i>${IC.o}</i><span>Libre</span></button>`;
    } else {
      C = `<button class="vzbig" data-a="sgOp">Jouer</button>`;
    }
    b.innerHTML = `<div class="vzhl">${L}</div><div class="vzcn">${C}</div><div class="vzhr">${Rr}</div>`;
  };
  const sheet = (focus) => {
    const body = $(".sgbody");
    if (!body) return;
    const o = document.createElement("div");
    o.className = "sgsht";
    o.innerHTML = `<div class="sgspn" role="dialog"><div class="sgsx"><b>${esc(G(cur).n)}</b><button aria-label="Fermer">✕</button></div></div>`;
    const p = o.firstChild;
    body.hidden = !1;
    p.appendChild(body);
    document.body.appendChild(o);
    if (focus && focus[0] === ".") {
      const s = p.querySelector(focus);
      s && setTimeout(() => s.scrollIntoView({ block: "center" }), 80);
    }
    if (focus === "sk") {
      const s = p.querySelector("[data-a=chsk]");
      s && setTimeout(() => s.scrollIntoView({ block: "center" }), 60);
    }
    const close = () => {
      const w = $(".sgw"),
        bd = p.querySelector(".sgbody");
      if (w && bd && !w.querySelector(".sgbody")) {
        bd.hidden = !0;
        w.insertBefore(bd, w.querySelector(".sgbt"));
      }
      o.remove();
      sgBt(cur);
    };
    o.addEventListener("click", (e) => {
      if (e.target === o || e.target.closest(".sgsx button")) close();
      else if (e.target.closest("[data-a=chStart],[data-a=dmStart],[data-a=scrIa],[data-a=scrSoc]"))
        o.remove();
    });
  };
  const show = (id) => {
    ON = 1;
    st.set("sg:sel", id);
    const y = scrollY;
    _o.call(act, id);
    wrap();
    window.scrollTo(0, 0);
  };
  let qd = 0;
  const mo = new MutationObserver(() => {
    if (qd || !ON) return;
    qd = 1;
    requestAnimationFrame(() => {
      qd = 0;
      wrap();
    });
  });
  const ob = () => {
    const a = document.getElementById("app");
    a ? mo.observe(a, { childList: !0 }) : setTimeout(ob, 200);
  };
  ob();
  setTimeout(() => {
    _o = act.open;
    act.open = function (e) {
      if (e === HID) return show(sel());
      if (!SG2.includes(e)) ON = 0;
      return _o.apply(this, arguments);
    };
    Object.assign(act, {
      sgPk: (v) => {
        if (!SG2.includes(v) || (v === cur && document.querySelector(".sgw"))) return;
        try {
          sfx(392, 0.08);
          setTimeout(() => sfx(523, 0.08), 90);
        } catch (e) {}
        const b = document.querySelector(`.sgb[data-v="${v}"]`);
        document.querySelectorAll(".sgb").forEach((x) => x.classList.toggle("on", x === b));
        const BDS = ["chess", "draughts"],
          ob = BDS.includes(cur) && BDS.includes(v) ? document.querySelector(".sg3d .sgbd") : null;
        let oa = 0;
        try {
          const an = ob && ob.getAnimations()[0];
          oa = an ? (an.effect.getComputedTiming().localTime || 0) + 260 : 0;
        } catch (e) {}
        if (ob)
          ob.querySelectorAll(".sgpc").forEach((p) => {
            p.style.transition = "opacity .22s";
            p.style.opacity = "0";
          });
        setTimeout(() => {
          show(v);
          if (!ob) return;
          const w = document.querySelector(".sg3d"),
            nb = w && w.querySelector(".sgbd");
          if (!nb) return;
          const t = document.createElement("div");
          t.innerHTML = td(v);
          const nn = t.firstElementChild;
          ob.className = nn.className;
          ob.querySelectorAll(".sgpc").forEach((p) => p.remove());
          nn.querySelectorAll(".sgpc").forEach((p) => {
            p.style.opacity = "0";
            ob.appendChild(p);
          });
          nb.replaceWith(ob);
          ob.style.animationDelay = "-" + Math.round(performance.now()) + "ms";
          requestAnimationFrame(() =>
            requestAnimationFrame(() =>
              ob.querySelectorAll(".sgpc").forEach((p) => {
                p.style.transition = "opacity .3s";
                p.style.opacity = "1";
              }),
            ),
          );
        }, 260);
      },
      sgHm: () => {
        ON = 0;
        home();
      },
      sgOp: (v) => sheet(v),
      sgDm: (v) => {
        if (typeof DM == "undefined") return;
        const S = (m) => {
          sheet();
          const o = document.querySelector(".sgsht");
          o &&
            ((o.dataset.m = m),
            ((o.querySelector(".sgsx b") || {}).textContent = {
              dsk: "Skins",
              dli: "Mode libre",
              dso: "Mode social",
            }[m]));
        };
        if (v === "sk") return S("dsk");
        if (v === "so") {
          DM.cfg.op = "net";
          st.set("dm:cfg", DM.cfg);
          dmNetInit();
          dmHubDraw();
          return S("dso");
        }
        if (v === "n") {
          st.set("dm:md", "n");
          v = "play";
        }
        if (v === "li") {
          st.set("dm:md", "l");
          DM.cfg.op = "ai";
          st.set("dm:cfg", DM.cfg);
          dmHubDraw();
          sgBt(cur);
          return S("dli");
        }
        if (v === "loc") {
          const sv = dmLoad("loc");
          if (sv) return dmBegin(sv);
          const g = dmNew({ k: "loc", me: 1 });
          st.set("dm:l", null);
          dmBegin(g);
          dmSave();
          return;
        }
        if (v === "play") {
          const sv = dmLoad("ai");
          if (sv) return dmBegin(sv);
          if (st.get("dm:md", "n") === "l") {
            DM.cfg.op = "ai";
            st.set("dm:cfg", DM.cfg);
            return act.dmStart();
          }
          const g = dmNew(dmILg(st.get("dm:il", 1)));
          st.set("dm:g", null);
          dmBegin(g);
          dmSave();
        }
      },
      sgCh: (v) => {
        if (typeof CH == "undefined") return;
        const S = (m) => {
          sheet();
          const o = document.querySelector(".sgsht");
          o &&
            ((o.dataset.m = m),
            ((o.querySelector(".sgsx b") || {}).textContent = {
              csk: "Skins",
              cso: "Mode social",
              cli: "Mode libre",
            }[m]));
        };
        if (v === "n") {
          st.set("ch:md", "n");
          v = "play";
        }
        if (v === "sk") return S("csk");
        if (v === "loc") {
          const sv = chLoad();
          if (sv && sv.k === "loc") return chBegin(sv);
          const g = chNewGame({ k: "loc", me: 1 });
          st.set("ch:g", null);
          chBegin(g);
          chSave();
          return;
        }
        if (v === "so") {
          CH.cfg.op = "net";
          st.set("ch:cfg", CH.cfg);
          CH.pk = 0;
          chNetInit();
          chHubDraw();
          S("cso");
          const o = document.querySelector(".sgsht");
          if (o) {
            const d = document.createElement("div");
            d.className = "chsow";
            o.querySelector(".sgspn").insertBefore(d, o.querySelector(".sgspn .sgbody"));
            chSoUI();
          }
          return;
        }
        if (v === "li") {
          st.set("ch:md", "l");
          CH.cfg.op = "ai";
          st.set("ch:cfg", CH.cfg);
          chHubDraw();
          sgBt(cur);
          return S("cli");
        }
        if (v === "play") {
          const sv = chLoad();
          if (sv) return chBegin(sv);
          if (st.get("ch:md", "n") === "l") {
            CH.cfg.op = "ai";
            st.set("ch:cfg", CH.cfg);
            return act.chStart();
          }
          const g = chNewGame(chILg(st.get("ch:il", 1)));
          st.set("ch:g", null);
          chBegin(g);
          chSave();
        }
      },
      sgSc: (v) => {
        if (v === "loc") return window.scrOpenLoc();
        if (v === "fr") {
          sheet();
          const o = document.querySelector(".sgsht");
          if (o) {
            o.dataset.m = "sk";
            (o.querySelector(".sgsx b") || {}).textContent = "Mode libre";
            const d = document.createElement("div");
            d.className = "scskw";
            d.innerHTML =
              `<p class="note" style="margin:0 2px">Choisis la force de l’IA. Les parties libres rapportent des bulles, mais ne font pas avancer tes niveaux.</p>` +
              SCFR.map(
                ([l, n, t]) =>
                  `<div class="scski"><div class="scskt"><b>${n}</b><small>${t}</small></div><button class="sb buy" data-a="scFr" data-v="${l}">Jouer</button></div>`,
              ).join("");
            o.querySelector(".sgspn").appendChild(d);
          }
          return;
        }
        if (v === "ia") {
          SC.frN = 0;
          const g = st.get("scr:ia", null);
          g && g.fr && st.set("scr:ia", null);
        }
        if (v === "sk") {
          sheet();
          const o = document.querySelector(".sgsht");
          if (o) {
            o.dataset.m = "sk";
            (o.querySelector(".sgsx b") || {}).textContent = "Skins";
            const d = document.createElement("div");
            d.className = "scskw";
            o.querySelector(".sgspn").appendChild(d);
            scSkUI();
          }
          return;
        }
        const w = v === "ia" ? "n" : "s",
          go = () => {
            if (v === "ia") {
              const x = q("[data-a=scrIa]");
              x ? x.click() : sheet();
            } else {
              sheet(v === "new" ? ".scbt" : "#scrh");
              const o = document.querySelector(".sgsht");
              if (o) {
                o.dataset.m = v;
                const b = o.querySelector(".sgsx b");
                b && (b.textContent = v === "new" ? "Nouvelle partie" : "Mes parties");
              }
            }
          };
        if (st.get("scr:mode", "n") !== w) {
          const m = q(`[data-a=scrMode][data-v=${w}]`);
          if (m) {
            m.click();
            return setTimeout(go, 300);
          }
        }
        go();
      },
      scFr: (v) => {
        const l = +v;
        if (!l) return;
        const o = document.querySelector(".sgsht");
        o && o.remove();
        SC.frN = l;
        st.set("scr:ia", null);
        SC.G && (SC.G.ia = null);
        scrOpenIA();
      },
      sgDo: (v) => {
        if (!v) return sheet();
        const x = document.querySelector(".sgbody " + v);
        x ? x.click() : sheet();
      },
    });
    const _h = home;
    home = function () {
      ON = 0;
      return _h.apply(this, arguments);
    };
    try {
      cur === null && document.querySelector(".tile") && home();
    } catch (e) {}
  }, 160);
})();
