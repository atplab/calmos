(() => {
  /* ===== Dames (jeu de dames 8×8, règles du jeu de dames « brésilien » : prise obligatoire, prise majoritaire, dames volantes, prise en arrière) ===== */
  const F8 = "abcdefgh",
    sqN = (i) => F8[i & 7] + (8 - (i >> 3)),
    nSq = (s) => (8 - +s[1]) * 8 + F8.indexOf(s[0]),
    inb = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8,
    DIRS = [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ];
  const DM = {
    scr: "",
    g: null,
    sel: -1,
    seq: [],
    m: "",
    think: 0,
    fl: null,
    pay: "",
    rc: null,
    cf: "",
    cft: 0,
    cfg: Object.assign({ op: "ai", lv: 2, col: 0 }, st.get("dm:cfg", {})),
  };
  window.DM = DM;
  if (!["ai", "loc", "net"].includes(DM.cfg.op)) DM.cfg.op = "ai";
  Object.assign(DM, { subs: {}, G: {}, got: {}, err: {}, ec: {}, fid: "", nw: 0 });
  /* ---------- moteur ---------- */
  function dmInit() {
    const b = Array(64).fill(0);
    for (let r = 0; r < 8; r++)
      for (let c = 0; c < 8; c++)
        if ((r + c) & 1) {
          if (r < 3) b[r * 8 + c] = -1;
          else if (r > 4) b[r * 8 + c] = 1;
        }
    return { b, t: 1, hm: 0 };
  }
  function capSeq(b, f) {
    const p = b[f],
      king = p === 2 || p === -2,
      own = p > 0 ? 1 : -1,
      res = [];
    b[f] = 0;
    const dfs = (pos, path, caps) => {
      let any = false;
      const r0 = pos >> 3,
        c0 = pos & 7;
      for (const [dr, dc] of DIRS) {
        let r = r0 + dr,
          c = c0 + dc;
        if (king)
          while (inb(r, c) && b[r * 8 + c] === 0) {
            r += dr;
            c += dc;
          }
        if (!inb(r, c)) continue;
        const vi = r * 8 + c,
          v = b[vi];
        if (v === 0 || v * own > 0 || caps.includes(vi)) continue;
        let lr = r + dr,
          lc = c + dc;
        while (inb(lr, lc) && b[lr * 8 + lc] === 0) {
          any = true;
          dfs(lr * 8 + lc, path.concat(lr * 8 + lc), caps.concat(vi));
          if (!king) break;
          lr += dr;
          lc += dc;
        }
      }
      if (!any && path.length) res.push({ f, path, cap: caps });
    };
    dfs(f, [], []);
    b[f] = p;
    return res;
  }
  function dmGen(S) {
    const b = S.b,
      t = S.t;
    let out = [],
      best = 0;
    for (let i = 0; i < 64; i++) {
      const p = b[i];
      if (!p || p * t < 0) continue;
      for (const m of capSeq(b, i)) {
        out.push(m);
        if (m.cap.length > best) best = m.cap.length;
      }
    }
    if (out.length) return out.filter((m) => m.cap.length === best);
    for (let i = 0; i < 64; i++) {
      const p = b[i];
      if (!p || p * t < 0) continue;
      const king = p === 2 || p === -2,
        r0 = i >> 3,
        c0 = i & 7;
      for (const [dr, dc] of DIRS) {
        if (!king && dr !== -t) continue;
        let r = r0 + dr,
          c = c0 + dc;
        while (inb(r, c) && b[r * 8 + c] === 0) {
          out.push({ f: i, path: [r * 8 + c], cap: [] });
          if (!king) break;
          r += dr;
          c += dc;
        }
      }
    }
    return out;
  }
  function dmMk(S, m) {
    const b = S.b.slice(),
      p = b[m.f];
    b[m.f] = 0;
    m.cap.forEach((i) => (b[i] = 0));
    const to = m.path[m.path.length - 1];
    let np = p;
    if ((p === 1 && to >> 3 === 0) || (p === -1 && to >> 3 === 7)) np = p * 2;
    b[to] = np;
    return { b, t: -S.t, hm: m.cap.length || Math.abs(p) === 1 ? 0 : S.hm + 1 };
  }
  const dmStr = (m) => sqN(m.f) + m.path.map(sqN).join("");
  function dmParse(s) {
    const a = String(s).match(/[a-h][1-8]/g);
    return a && a.length >= 2 ? a.map(nSq) : null;
  }
  function dmReplay(mv) {
    let S = dmInit();
    const keys = [S.b.join("") + S.t],
      sans = [];
    let n = 0;
    for (const s of mv) {
      const q = dmParse(s);
      if (!q) break;
      const m = dmGen(S).find(
        (m) => m.f === q[0] && m.path.length === q.length - 1 && m.path.every((x, i) => x === q[i + 1]),
      );
      if (!m) break;
      S = dmMk(S, m);
      keys.push(S.b.join("") + S.t);
      sans.push(sqN(m.f) + (m.cap.length ? "×" : "-") + m.path.map(sqN).join(m.cap.length ? "×" : "-"));
      n++;
    }
    return { S, keys, sans, n, last: n ? dmParse(mv[n - 1]) : null };
  }
  function dmStatus(S, keys) {
    if (!dmGen(S).length) return { w: -S.t, y: "blk" };
    if (S.hm >= 40) return { w: 0, y: "40" };
    const k = keys[keys.length - 1];
    let n = 0;
    for (const x of keys) x === k && n++;
    return n >= 3 ? { w: 0, y: "rep" } : null;
  }
  /* ---------- IA ---------- */
  function dmEv(b) {
    let s = 0;
    for (let i = 0; i < 64; i++) {
      const p = b[i];
      if (!p) continue;
      const r = i >> 3,
        c = i & 7,
        mid = c > 1 && c < 6 && r > 1 && r < 6 ? 3 : 0;
      if (p === 1) s += 100 + (7 - r) * 5 + (r === 7 ? 9 : 0) + mid;
      else if (p === -1) s -= 100 + r * 5 + (r === 0 ? 9 : 0) + mid;
      else if (p === 2) s += 300 + mid;
      else s -= 300 + mid;
    }
    return s;
  }
  function dmThink(S, P) {
    const root = dmGen(S);
    if (root.length < 2) return root[0] || null;
    const end = Date.now() + P.ms;
    let stop = false,
      nodes = 0,
      last = null;
    const nega = (s, d, a, bt, ply) => {
      if (!(++nodes & 255) && Date.now() > end) stop = true;
      if (stop) return 0;
      if (s.hm >= 40) return 0;
      const ms = dmGen(s);
      if (!ms.length) return -9e3 + ply;
      if (d <= 0) return s.t * dmEv(s.b);
      let v = -1e9;
      for (const m of ms) {
        const x = -nega(dmMk(s, m), d - 1, -bt, -a, ply + 1);
        if (stop) return 0;
        if (x > v) v = x;
        if (v > a) a = v;
        if (a >= bt) break;
      }
      return v;
    };
    for (let d = 1; d <= P.d; d++) {
      const sc = [];
      for (const m of root) {
        const v = -nega(dmMk(S, m), d - 1, -1e9, 1e9, 1);
        if (stop) break;
        sc.push({ m, v });
      }
      if (stop) break;
      last = sc;
      sc.sort((x, y) => y.v - x.v);
      root.sort(
        (x, y) => (sc.find((o) => o.m === y) || { v: -1e9 }).v - (sc.find((o) => o.m === x) || { v: -1e9 }).v,
      );
      if (sc[0].v > 8e3) break;
    }
    if (!last) return root[Math.floor(Math.random() * root.length)];
    const top = last[0].v;
    if (Math.random() < P.nz) {
      const ok = last.filter((o) => o.v >= top - P.mg);
      return ok[Math.floor(Math.random() * ok.length)].m;
    }
    const bs = last.filter((o) => o.v === top);
    return bs[Math.floor(Math.random() * bs.length)].m;
  }
  const dmP = (g) => {
    const il = g.il | 0;
    if (il)
      return {
        d: Math.min(8, 2 + Math.floor(il / 3)),
        ms: Math.min(1200, 250 + il * 60),
        nz: Math.max(0, 0.35 - 0.035 * il),
        mg: 60,
      };
    return [
      null,
      { d: 2, ms: 250, nz: 0.45, mg: 160 },
      { d: 4, ms: 600, nz: 0.1, mg: 50 },
      { d: 7, ms: 1100, nz: 0, mg: 0 },
    ][Math.max(1, Math.min(3, g.lv | 0 || 2))];
  };
  /* ---------- partie ---------- */
  const dmD = (g) => {
      const k = g.id + ":" + g.mv.join(" ");
      if (!DM.rc || DM.rc.k !== k) {
        const a = dmReplay(g.mv);
        a.k = k;
        a.st = dmStatus(a.S, a.keys);
        DM.rc = a;
      }
      return DM.rc;
    },
    dmRes = (g) => g.r || dmD(g).st,
    dmTurn = (g) => dmD(g).S.t,
    dmMy = (g) => g.k === "loc" || dmTurn(g) === g.me,
    dmOpp = (g) => (g.k === "ai" ? CHLV[Math.max(0, Math.min(2, (g.lv | 0) - 1))] : null);
  const dmILg = (n) => ({ k: "ai", il: n, lv: n < 3 ? 1 : n < 8 ? 2 : 3, me: n % 2 ? 1 : -1 });
  function dmNew(e) {
    const c = DM.cfg;
    return Object.assign(
      {
        id: Math.random().toString(36).slice(2, 10),
        mv: [],
        r: null,
        paid: 0,
        me: c.col || (Math.random() < 0.5 ? 1 : -1),
        lv: c.lv,
        il: 0,
      },
      e,
    );
  }
  function dmSave() {
    const g = DM.g;
    if (!g || g.k === "net") return;
    const key = g.k === "loc" ? "dm:l" : "dm:g";
    st.set(
      key,
      dmRes(g)
        ? null
        : { k: g.k, id: g.id, mv: g.mv, me: g.me, lv: g.lv | 0, il: g.il | 0, paid: g.paid ? 1 : 0 },
    );
  }
  function dmLoad(k) {
    const e = st.get(k === "loc" ? "dm:l" : "dm:g", null);
    if (!e || e.k !== k || !Array.isArray(e.mv) || typeof e.id !== "string") return null;
    return {
      k: e.k,
      id: e.id,
      mv: e.mv.filter((s) => /^([a-h][1-8]){2,}$/.test(s)),
      me: e.me < 0 ? -1 : 1,
      lv: Math.max(1, Math.min(3, +e.lv || 2)),
      il: Math.max(0, e.il | 0),
      paid: e.paid ? 1 : 0,
      r: null,
    };
  }
  const dmWho = (g, t) =>
    g.k === "loc"
      ? t > 0
        ? "Blancs"
        : "Noirs"
      : t === g.me
        ? "Toi"
        : g.k === "net"
          ? scrNm(g.f)
          : dmOpp(g).n;
  function dmMsg(g, r) {
    const w = r.w,
      n = dmWho(g, w),
      o = dmWho(g, -w);
    const why =
      {
        blk: "Plus aucun coup possible.",
        "40": "Quarante coups sans prise : nulle.",
        rep: "Trois fois la même position : nulle.",
        acc: "Nulle d’un commun accord.",
        res: (o === "Toi" ? "Tu as abandonné" : o + " a abandonné") + ".",
      }[r.y] || "";
    return (
      why +
      " " +
      (w === 0 ? "" : g.k === "loc" ? n + " gagnent." : n === "Toi" ? "Bravo, tu as gagné !" : n + " gagne.")
    ).trim();
  }
  function dmPay(g) {
    const r = dmRes(g);
    if (!r) return;
    if (g.k === "ai" && g.il && r.w === g.me && !g.ilw) {
      g.ilw = 1;
      st.get("dm:il", 1) <= g.il && st.set("dm:il", g.il + 1);
    }
    if (g.mv.length < 10 || g.paid) return;
    let a = 0;
    if (g.k === "loc") a = 5;
    else if (g.k === "net") {
      const p = Object.assign({}, st.get("dm:paid", {})),
        n = dmGid(g.f) + ":" + g.id;
      if (p[n]) return;
      p[n] = 1;
      const o = Object.keys(p);
      o.length > 60 && o.slice(0, o.length - 60).forEach((x) => delete p[x]);
      st.set("dm:paid", p);
      a = r.w === 0 ? 7 : r.w === g.me ? 10 : 5;
    } else {
      const s = Math.max(0, Math.min(2, (g.lv | 0) - 1));
      a = r.w === 0 ? [3, 6, 9][s] : r.w === g.me ? [5, 8, 12][s] : [2, 4, 6][s];
    }
    g.paid = 1;
    a > 0 && (scrGain(a), (DM.pay = "+" + a + " 🫧"));
  }
  const dmPcs = (S) => {
    let w = 0,
      k = 0,
      b = 0,
      l = 0;
    for (const p of S.b) {
      if (p === 1) w++;
      else if (p === 2) (k++, w++);
      else if (p === -1) b++;
      else if (p === -2) (l++, b++);
    }
    return { w, b, wk: k, bk: l };
  };
  /* ---------- pièces ---------- */
  const dmPc = (v, sk) => {
    const w = v > 0,
      king = v === 2 || v === -2;
    sk = sk || CH.sk || "f";
    return `<svg class="chp ${w ? "w" : "b"}${sk !== "f" ? " sk-" + sk : ""}" viewBox="0 0 45 45" aria-hidden="true"><circle cx="22.5" cy="25" r="17" style="fill:rgba(0,0,0,.25);stroke:none"/><circle cx="22.5" cy="22.5" r="17"/><circle class="cx" cx="22.5" cy="22.5" r="11.5"/>${sk !== "f" && !king ? '<circle class="x2" cx="22.5" cy="22.5" r="3.4" style="stroke:none"/>' : ""}${king ? '<path d="M14 29l2-11 6.5 5 6.5-5 2 11z" style="fill:#f4c542;stroke:#7a5410;stroke-width:1.3"/><circle cx="16" cy="17.5" r="1.6" style="fill:#f4c542;stroke:#7a5410;stroke-width:1"/><circle cx="22.5" cy="14.5" r="1.6" style="fill:#f4c542;stroke:#7a5410;stroke-width:1"/><circle cx="29" cy="17.5" r="1.6" style="fill:#f4c542;stroke:#7a5410;stroke-width:1"/>' : ""}</svg>`;
  };
  window.dmPc = dmPc;
  /* ---------- écrans ---------- */
  function dmHub() {
    dmInstall();
    cur = "draughts";
    nv("games");
    theme("draughts");
    try {
      chTheme();
    } catch (e) {}
    DM.scr = "hub";
    DM.g = null;
    app.innerHTML = `<div class="top stk">${bk("home")}<div class="chip">🫧 ${FLX()}</div></div><section class="glass story pt-chess"><i>⛀</i><h2>Le damier</h2><p>Une partie de dames au calme, sur le même damier que les échecs. Joue contre le Lapereau, le Renard ou le Hibou, ou à deux sur le même appareil. Les prises sont obligatoires et on doit prendre le plus de pièces possible. Chaque partie un peu longue rapporte des 🫧, que tu peux dépenser en apparences pour tes pièces.</p></section><div id="dmh"></div>`;
    dmHubDraw();
    window.scrollTo(0, 0);
  }
  const dmChip = (a, b, t, on, em) =>
    `<button class="chc${on ? " on" : ""}" data-a="dmcfg" data-v="${a}:${b}" aria-pressed="${on ? "true" : "false"}">${em || ""}${t}</button>`;
  function dmHubDraw() {
    const e = $("#dmh");
    if (!e) return;
    DM.cfg.op === "net" && dmNetInit();
    const c = DM.cfg,
      x = window.scrollX,
      y = window.scrollY,
      sv = dmLoad("ai"),
      sl = dmLoad("loc");
    let h = "";
    for (const [g, lab] of [
      [sv, "Contre le "],
      [sl, "À deux, même appareil"],
    ]) {
      if (!g) continue;
      const n = dmReplay(g.mv).n;
      h += `<section class="glass play chres"><h2>Partie en cours</h2><p class="note" style="margin:0 0 12px">${g.k === "ai" ? (g.il ? "Niveau " + g.il + " · " : "") + lab + dmOpp(g).n : lab} · ${Math.ceil(n / 2)} coup${n > 2 ? "s" : ""}</p><div class="chrow"><button class="btn" data-a="dmRes" data-v="${g.k}">Reprendre</button><button class="btn alt" data-a="dmDrop" data-v="${g.k}">Laisser tomber</button></div></section>`;
    }
    h += `<section class="glass play chnew"><h2>Nouvelle partie</h2><div class="chgr"><div class="chl">Adversaire</div><div class="chq">${dmChip("op", "ai", "L’ordinateur", c.op === "ai")}${dmChip("op", "net", "Un ami", c.op === "net")}${dmChip("op", "loc", "Même appareil", c.op === "loc")}</div></div>${c.op === "ai" ? `<div class="chgr"><div class="chl">Niveau</div><div class="chq">${CHLV.map((e, a) => dmChip("lv", a + 1, e.n, c.lv === a + 1, '<span class="chem">' + e.e + "</span>")).join("")}</div><p class="note chdn">${CHLV[c.lv - 1].d}.</p></div><div class="chgr"><div class="chl">Ta couleur</div><div class="chq">${dmChip("col", 1, "Blancs", c.col === 1)}${dmChip("col", -1, "Noirs", c.col === -1)}${dmChip("col", 0, "Au hasard", c.col === 0)}</div></div>` : ""}${c.op === "net" ? `<div class="chgr"><div class="chl">Ta couleur</div><div class="chq">${dmChip("col", 1, "Blancs", c.col === 1)}${dmChip("col", -1, "Noirs", c.col === -1)}${dmChip("col", 0, "Au hasard", c.col === 0)}</div></div>` : '<button class="btn chgo" data-a="dmStart">Commencer la partie</button>'}</section>${c.op === "net" ? dmFriends() : ""}`;
    const sk = chSkin();
    h += `<section class="glass play chsk"><h2>Apparence des pièces</h2><p class="note" style="margin:0 0 10px">Les mêmes apparences que pour les échecs.</p>${CHSK.map(
      (t) => {
        const a = !!sk.own[t.id],
          s = sk.cur === t.id;
        return `<div class="chski${s ? " on" : ""}"><div class="chsp">${dmPc(1, t.id)}${dmPc(2, t.id)}${dmPc(-1, t.id)}${dmPc(-2, t.id)}</div><div class="chst"><b>${t.n}</b><small>${t.d}</small></div><button class="sb${a || UNL() ? "" : " buy"}" data-a="dmsk" data-v="${t.id}"${s ? " disabled" : ""}>${s ? "Choisi" : a || UNL() ? "Choisir" : sgPxL("c", t)}</button></div>`;
      },
    ).join("")}</section>`;
    e.innerHTML = h;
    window.scrollTo(x, y);
  }
  function dmBegin(g, f) {
    dmInstall();
    DM.fid = g.k === "net" ? f || g.f || "" : "";
    DM.g = g;
    DM.scr = "game";
    DM.sel = -1;
    DM.seq = [];
    DM.m = "";
    DM.pay = "";
    DM.think = 0;
    DM.fl = null;
    DM.cf = "";
    cur = "draughts";
    nv("games");
    theme("draughts");
    try {
      chTheme();
    } catch (e) {}
    $("#nav").hidden = !0;
    app.innerHTML = `<div class="top stk"><button class="back" data-a="dmBk">‹ Dames</button><span class="tl">${esc(g.k === "ai" ? "Contre le " + dmOpp(g).n : g.k === "net" ? scrNm(g.f) : "À deux")}</span><div class="tr"><div class="chip">🫧 ${FLX()}</div></div></div><section class="glass play pg-chess" id="dmg" aria-label="Partie de dames"></section>`;
    dmDraw();
    dmAfter();
    window.scrollTo(0, 0);
  }
  function dmAfter() {
    const g = DM.g;
    if (!g || DM.scr !== "game") return;
    if (g.k === "ai" && !dmRes(g) && dmTurn(g) !== g.me && !DM.think) {
      DM.think = 1;
      dmDraw();
      const n = g.mv.length,
        t0 = Date.now();
      setTimeout(() => {
        if (DM.g !== g || g.mv.length !== n) {
          DM.think = 0;
          return;
        }
        const m = dmThink(dmD(g).S, dmP(g));
        setTimeout(
          () => {
            DM.think = 0;
            DM.g === g && g.mv.length === n && m && !dmRes(g) ? dmPlay(m) : dmDraw();
          },
          Math.max(0, 650 - (Date.now() - t0)),
        );
      }, 60);
    }
  }
  async function dmPlay(m) {
    const g = DM.g;
    if (!g || dmRes(g) || DM.busy) return false;
    const cap = m.cap.length,
      snap = { mv: g.mv.slice(), r: g.r };
    g.mv.push(dmStr(m));
    DM.sel = -1;
    DM.seq = [];
    DM.m = "";
    DM.cf = "";
    DM.rc = null;
    if (g.k === "net") {
      if (!(await dmSend(g))) {
        g.mv = snap.mv;
        g.r = snap.r;
        DM.rc = null;
        dmDraw();
        return false;
      }
    } else dmSave();
    dmPay(g);
    const r = dmRes(g);
    try {
      sfx(r ? 523 : cap ? 240 : 330, r ? 0.4 : 0.1);
      vib(r ? 25 : cap ? 14 : 8);
    } catch (e) {}
    dmDraw();
    dmAfter();
    return true;
  }
  function dmClick(i) {
    const g = DM.g;
    if (!g || DM.think || DM.busy || dmRes(g) || !dmMy(g)) return;
    const S = dmD(g).S,
      lg = dmGen(S),
      seq = DM.seq;
    DM.m = "";
    if (DM.sel >= 0) {
      const cand = lg.filter(
        (m) =>
          m.f === DM.sel &&
          seq.every((x, k) => m.path[k] === x) &&
          m.path.length > seq.length &&
          m.path[seq.length] === i,
      );
      if (cand.length) {
        const ns = seq.concat(i),
          ex = cand.filter((m) => m.path.length === ns.length),
          lo = cand.filter((m) => m.path.length > ns.length);
        if (!lo.length) return void dmPlay(ex[0]);
        if (lo.length === 1) return void dmPlay(lo[0]);
        DM.seq = ns;
        return void dmDraw();
      }
    }
    const p = S.b[i];
    if (p && p * S.t > 0 && i !== DM.sel) {
      if (lg.some((m) => m.f === i)) {
        DM.sel = i;
        DM.seq = [];
      } else {
        DM.sel = -1;
        DM.seq = [];
        DM.m = lg.some((m) => m.cap.length)
          ? "Prise obligatoire : une autre pièce doit prendre."
          : "Cette pièce ne peut pas bouger.";
      }
    } else {
      DM.sel = -1;
      DM.seq = [];
      lg.some((m) => m.cap.length) && (DM.m = "Prise obligatoire.");
    }
    dmDraw();
  }
  function dmDraw() {
    const e = $("#dmg");
    if (!e || DM.scr !== "game") return;
    const g = DM.g;
    if (!g) return;
    const D = dmD(g),
      S = D.S,
      res = dmRes(g),
      turn = S.t,
      my = dmMy(g),
      flip = DM.fl !== null ? DM.fl : g.k !== "loc" && g.me < 0,
      bot = flip ? -1 : 1,
      top = -bot,
      lg = my && !res && !DM.think ? dmGen(S) : [],
      pc = dmPcs(S);
    const hint = new Set(),
      from = new Set(),
      lm = new Set(D.last || []);
    if (DM.sel >= 0)
      lg.filter(
        (m) => m.f === DM.sel && DM.seq.every((x, k) => m.path[k] === x) && m.path.length > DM.seq.length,
      ).forEach((m) => hint.add(m.path[DM.seq.length]));
    const pl = (t) => {
      const n = t > 0 ? pc.w : pc.b,
        k = t > 0 ? pc.wk : pc.bk;
      return `<div class="chpl${res || turn !== t ? "" : " on"}"><span class="chav">${g.k === "loc" ? dmPc(t > 0 ? 1 : -1) : t === g.me ? (SO.uid && st.get("soc:me", null) && g.k === "net" ? socAv(SO.uid) : "🌲") : g.k === "net" ? socAv(g.f) : dmOpp(g).e}</span><span class="chn"><b>${esc(dmWho(g, t))}</b><span class="chcap" aria-hidden="true">${n} pièce${n > 1 ? "s" : ""}${k ? " · " + k + " dame" + (k > 1 ? "s" : "") : ""}</span></span></div>`;
    };
    let b = "";
    for (let e = 0; e < 64; e++) {
      const t = flip ? 63 - e : e,
        p = S.b[t],
        r = t >> 3,
        c = t & 7,
        cl = ["chs", (r + c) & 1 ? "d" : "l"];
      DM.sel === t && cl.push("sel");
      lm.has(t) && cl.push("lm");
      DM.seq.includes(t) && cl.push("sel");
      hint.has(t) && cl.push("mv");
      const l =
        (e % 8 === 0 ? `<i class="cr">${8 - (t >> 3)}</i>` : "") +
        (e >= 56 ? `<i class="cf">${F8[t & 7]}</i>` : "");
      b += `<div class="${cl.join(" ")}" role="gridcell" data-a="dmq" data-v="${t}" aria-label="${sqN(t)}${p ? ", " + (Math.abs(p) === 2 ? "dame " : "pion ") + (p > 0 ? "blanc" : "noir") : ""}">${l}${p ? dmPc(p) : ""}</div>`;
    }
    let E;
    if (res) E = dmMsg(g, res);
    else if (DM.m) E = DM.m;
    else if (DM.think) E = "Le " + dmOpp(g).n + " réfléchit…";
    else {
      const cp = lg.some((m) => m.cap.length) ? " Prise obligatoire." : "";
      E =
        g.k === "loc"
          ? (turn > 0 ? "Aux blancs de jouer." : "Aux noirs de jouer.") + cp
          : my
            ? "À toi de jouer." + cp
            : "Au tour de " + dmWho(g, turn) + ".";
    }
    let y = "";
    for (let k = 0; k < D.sans.length; k++)
      y +=
        (k % 2 ? "" : `<span class="chnb">${k / 2 + 1}.</span>`) +
        `<span class="chmv${k === D.sans.length - 1 ? " last" : ""}">${esc(D.sans[k])}</span>`;
    let v = '<button class="sb" data-a="dmfl">⇅ Retourner</button>';
    if (!res) {
      g.k !== "net" &&
        g.mv.length &&
        (v += '<button class="sb" data-a="dmUndo">↶ Reprendre le coup</button>');
      g.k === "loc" &&
        g.mv.length >= 2 &&
        (v += `<button class="sb${DM.cf === "draw" ? " buy" : ""}" data-a="dmNul">${DM.cf === "draw" ? "Confirmer la nulle" : "Nulle"}</button>`);
      v += `<button class="sb${DM.cf === "res" ? " buy" : ""}" data-a="dmQuit">${DM.cf === "res" ? "Confirmer l’abandon" : "Abandonner"}</button>`;
    }
    const S2 = res
        ? `<div class="chend"><b>${esc(E)}</b>${DM.pay ? `<span class="chpay">${DM.pay}</span>` : ""}<div class="chrow"><button class="btn" data-a="dmRev">Revanche</button><button class="btn alt" data-a="dmBk">Menu</button></div></div>`
        : "",
      x = $("#dmmv"),
      M = x ? x.scrollLeft : 0;
    e.innerHTML = `${S2}${pl(top)}<div class="chbw sk-${CH.sk}${DM.think ? " th" : ""}"><div class="chb${flip ? " fl" : ""}" role="grid" aria-label="Damier">${b}</div></div>${pl(bot)}${res ? "" : `<p class="m chm" id="chm" role="status" aria-live="polite">${esc(E)}</p>`}<div class="chmvs" id="dmmv" aria-label="Coups joués">${y || '<span class="note">Les coups apparaîtront ici.</span>'}</div><div class="cha">${v}</div>`;
    const L = $("#dmmv");
    L && (L.scrollLeft = x && M < L.scrollWidth - L.clientWidth - 40 ? M : L.scrollWidth);
  }

  /* ---------- animations du damier ---------- */
  const dmIdx = (m) => {
    const a = String(m).match(/[a-h][1-8]/g) || [];
    return a.map((x) => (8 - +x[1]) * 8 + x.charCodeAt(0) - 97);
  };
  let dmPrev = null,
    dmA = null,
    chPrev = null,
    chA = null;
  const bdAnim = (bd, pv, nw, path, el, pcH, extra) => {
    const cell = (t) => bd.querySelector(`.chs[data-v="${t}"]`),
      mv = [[path, path[path.length - 1]]].concat(extra || []),
      ST = 380,
      E = "cubic-bezier(.4,0,.2,1)";
    mv.forEach(([pa, to]) => {
      const cd = cell(to),
        pe = cd && cd.querySelector("svg");
      if (!pe) return;
      const n = pa.length - 1,
        rd = cd.getBoundingClientRect(),
        kf = [];
      pa.forEach((t, k) => {
        const c = cell(t);
        if (!c) return;
        const r = c.getBoundingClientRect();
        kf.push({
          transform: `translate(${r.left - rd.left}px,${r.top - rd.top}px)`,
          offset: k / n,
          easing: E,
        });
      });
      pe.style.position = "relative";
      pe.style.zIndex = "6";
      pe.animate(kf, { duration: ST * n, delay: -el }).onfinish = () => {
        pe.style.zIndex = "";
      };
      if (pv.b[pa[0]] && nw.b[to] && pv.b[pa[0]] !== nw.b[to])
        pe.animate([{ opacity: 0.3 }, { opacity: 1 }], { duration: ST * n + 250, delay: -el });
    });
    const src = new Set(mv.map((m) => m[0][0]));
    let k = 0;
    for (let t = 0; t < 64; t++)
      if (pv.b[t] && !src.has(t) && (!nw.b[t] || mv.some((m) => m[1] === t))) {
        const c = cell(t);
        if (!c) continue;
        const h = document.createElement("div");
        h.className = "dmgh";
        h.innerHTML = pcH(pv.b[t]);
        c.appendChild(h);
        const d = ST * (path.length - 1) * 0.7;
        h.animate([{ opacity: 1 }, { opacity: 1, offset: 0.3 }, { opacity: 0 }], {
          duration: d + 520,
          delay: -el,
          easing: "ease-in-out",
        }).onfinish = () => h.remove();
        k++;
      }
  };
  const bdGo = (pv, nw, A, path, mk, pcH, extra) => {
    const now = performance.now();
    if (pv && pv.id === nw.id && nw.n === pv.n + 1) A.v = { id: nw.id, n: nw.n, pv, t0: now };
    else if (!(A.v && A.v.id === nw.id && A.v.n === nw.n)) return;
    const el = now - A.v.t0;
    if (
      el > 2200 ||
      document.body.classList.contains("calm") ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const bd = mk();
    if (!bd) return;
    bdAnim(bd, A.v.pv, nw, path, el, pcH, extra);
  };
  const dmDraw0 = dmDraw,
    dmAv = { v: null },
    chAv = { v: null };
  dmDraw = function () {
    const g = DM.g;
    let pv = dmPrev,
      nw = null;
    try {
      if (g) {
        const D = dmD(g);
        nw = { id: g.id, n: g.mv.length, b: Array.from(D.S.b) };
      }
    } catch (e) {}
    dmDraw0.apply(this, arguments);
    dmPrev = nw;
    try {
      if (!nw) return;
      const path = dmIdx(g.mv[g.mv.length - 1]);
      if (path.length < 2) return;
      bdGo(pv, nw, dmAv, path, () => $("#dmg .chb"), dmPc);
    } catch (e) {}
  };
  if (typeof chDraw === "function") {
    const chDraw0 = chDraw;
    chDraw = function () {
      const g = CH.g;
      let pv = chPrev,
        nw = null,
        d = null;
      try {
        if (g) {
          const D = chD(g);
          d = D.ms.length ? D.ms[D.ms.length - 1] : null;
          nw = { id: g.id, n: g.mv.length, b: Array.from(D.S.b) };
        }
      } catch (e) {}
      chDraw0.apply(this, arguments);
      chPrev = nw;
      try {
        if (!nw || !d) return;
        let ex = null;
        if (pv && Math.abs(nw.b[d.t]) === 6 && Math.abs(d.t - d.f) === 2) {
          const r = d.t >> 3,
            kg = d.t > d.f;
          ex = [[[r * 8 + (kg ? 7 : 0), r * 8 + (kg ? 5 : 3)], r * 8 + (kg ? 5 : 3)]];
        }
        bdGo(
          pv,
          nw,
          chAv,
          [d.f, d.t],
          () => $("#chg .chb"),
          (v) => chPc(v),
          ex,
        );
      } catch (e) {}
    };
  }
  const dmCf = (k) => {
    if (DM.cf === k) {
      clearTimeout(DM.cft);
      DM.cf = "";
      return true;
    }
    DM.cf = k;
    clearTimeout(DM.cft);
    DM.cft = setTimeout(() => {
      DM.cf = "";
      dmDraw();
    }, 3500);
    dmDraw();
    return false;
  };
  const DMA = {
    dmq: (v) => dmClick(+v),
    dmfl: () => {
      const g = DM.g;
      if (!g) return;
      const t = DM.fl !== null ? DM.fl : g.k !== "loc" && g.me < 0;
      DM.fl = !t;
      dmDraw();
    },
    dmcfg: (v) => {
      const [a, b] = v.split(":"),
        n = +b;
      if (a === "op" && ["ai", "loc", "net"].includes(b)) DM.cfg.op = b;
      else if (a === "lv" && n >= 1 && n <= 3) DM.cfg.lv = n;
      else if (a === "col" && [1, -1, 0].includes(n)) DM.cfg.col = n;
      st.set("dm:cfg", DM.cfg);
      DM.cfg.op === "net" && dmNetInit();
      dmHubDraw();
    },
    dmsk: (v) => {
      try {
        CHA.chsk(v);
      } catch (e) {}
      dmHubDraw();
    },
    dmStart: () => {
      const c = DM.cfg,
        g = c.op === "ai" ? dmNew({ k: "ai", lv: c.lv }) : dmNew({ k: "loc", me: 1 });
      st.set(g.k === "loc" ? "dm:l" : "dm:g", null);
      dmBegin(g);
      dmSave();
    },
    dmRes: (k) => {
      const g = dmLoad(k === "loc" ? "loc" : "ai");
      g && dmBegin(g);
    },
    dmDrop: (k) => {
      st.set(k === "loc" ? "dm:l" : "dm:g", null);
      dmHubDraw();
    },
    dmBk: () => {
      DM.scr = "hub";
      dmHub();
    },
    dmUndo: () => {
      const g = DM.g;
      if (!g || DM.think || !g.mv.length || dmRes(g)) return;
      const n = g.k === "ai" && dmTurn(g) === g.me ? 2 : 1;
      g.mv.splice(Math.max(0, g.mv.length - n));
      g.r = null;
      DM.rc = null;
      DM.sel = -1;
      DM.seq = [];
      DM.m = "";
      dmSave();
      dmDraw();
      dmAfter();
    },
    dmNul: () => {
      const g = DM.g;
      if (!g || dmRes(g) || g.k !== "loc") return;
      if (!dmCf("draw")) return;
      g.r = { w: 0, y: "acc" };
      DM.cf = "";
      dmSave();
      dmDraw();
    },
    dmQuit: async () => {
      const g = DM.g;
      if (!g || dmRes(g) || DM.busy) return;
      if (!dmCf("res")) return;
      const t = g.k === "loc" ? dmTurn(g) : g.me,
        old = g.r;
      g.r = { w: -t, y: "res" };
      DM.cf = "";
      if (g.k === "net") {
        if (!(await dmSend(g))) {
          g.r = old;
          DM.rc = null;
        }
      } else dmSave();
      dmPay(g);
      dmDraw();
    },
    dmRev: async () => {
      const g = DM.g;
      if (!g || !dmRes(g) || DM.busy) return;
      DM.pay = "";
      if (g.k === "net") {
        const f = g.f,
          t = DM.subs[f];
        if (!t || !t.ref) return;
        const n = dmNew({ k: "net", f, me: -g.me, p: [g.p[1], g.p[0]] });
        n.f = f;
        DM.busy = 1;
        dmDraw();
        try {
          await t.ref.set(dmDoc(n));
        } catch (e) {
          DM.busy = 0;
          DM.m = "La revanche n’est pas partie. " + scrWhy(e);
          return void dmDraw();
        }
        DM.busy = 0;
        DM.G[f] = n;
        return void dmBegin(n, f);
      }
      const N = g.il ? st.get("dm:il", 1) : 0,
        n = dmNew(N ? dmILg(N) : { k: g.k, me: g.k === "loc" ? 1 : -g.me, lv: g.lv });
      st.set(n.k === "loc" ? "dm:l" : "dm:g", null);
      dmBegin(n);
      dmSave();
    },
  };
  const dmInstall = () => Object.assign(act, DMA);
  dmInstall();

  /* ---------- en ligne (Social) : parties sc/<uid1>_<uid2>_d ---------- */
  const dmGid = (f) => scrGid(f) + "_d",
    dmRefresh = () => {
      $("#dmh") && dmHubDraw();
    };
  const dmDoc = (g) => ({
    k: "draughts",
    v: 1,
    id: g.id,
    p: g.p,
    mv: g.mv.join(" "),
    n: g.mv.length,
    r: g.r ? [g.r.w, g.r.y] : 0,
    at: Date.now(),
  });
  function dmCleanNet(e) {
    if (
      !e ||
      typeof e !== "object" ||
      e.k !== "draughts" ||
      !Array.isArray(e.p) ||
      e.p.length !== 2 ||
      !e.p.every((x) => typeof x === "string" && SOK.test(x))
    )
      return null;
    if (
      typeof e.id !== "string" ||
      !/^[a-z0-9]{1,16}$/.test(e.id) ||
      typeof e.mv !== "string" ||
      e.mv.length > 8e3 ||
      !/^(([a-h][1-8]){2,})?( ([a-h][1-8]){2,})*$/.test(e.mv)
    )
      return null;
    const r =
      Array.isArray(e.r) &&
      e.r.length === 2 &&
      [-1, 0, 1].includes(+e.r[0]) &&
      /^[a-z0-9]{2,5}$/.test(String(e.r[1]))
        ? { w: +e.r[0], y: String(e.r[1]) }
        : null;
    return { k: "net", id: e.id, p: e.p.slice(), mv: e.mv ? e.mv.split(" ") : [], r, lv: 0, il: 0 };
  }
  function dmWatch(f) {
    if (DM.subs[f] || !SO.uid || Object.keys(DM.subs).length >= 24) return;
    const t = (DM.subs[f] = { ref: null, un: null, t: 0 });
    t.p = (async () => {
      try {
        const a = await scrDb();
        if (!a) throw 0;
        const d = (t.ref = a.collection("sc").doc(dmGid(f)));
        t.t = setTimeout(() => {
          DM.got[f] || dmRefresh();
        }, 1e4);
        t.un = d.onSnapshot(
          (x) => {
            if ((x.metadata || {}).fromCache && !x.exists) return;
            clearTimeout(t.t);
            let g = null;
            if (x.exists)
              try {
                g = dmCleanNet(x.data());
              } catch (e) {}
            g && (g.p.indexOf(SO.uid) < 0 || dmGid(f) !== g.p.slice().sort().join("_") + "_d") && (g = null);
            g && ((g.f = f), (g.me = g.p[0] === SO.uid ? 1 : -1));
            DM.G[f] = g;
            DM.got[f] = true;
            DM.err[f] = 0;
            if (g && DM.scr === "game" && DM.fid === f) dmSync(g);
            dmRefresh();
          },
          (x) => {
            clearTimeout(t.t);
            delete DM.subs[f];
            DM.err[f] = 1;
            DM.ec[f] = scrWhy(x);
            dmRefresh();
          },
        );
      } catch (x) {
        delete DM.subs[f];
        DM.err[f] = 1;
        DM.ec[f] = scrWhy(x);
        dmRefresh();
      }
    })();
  }
  function dmSync(n) {
    const g = DM.g,
      same = g && g.id === n.id && g.mv.length === n.mv.length;
    if (DM.busy && same) return;
    DM.g = n;
    DM.rc = null;
    if (!same) {
      DM.sel = -1;
      DM.seq = [];
      DM.m = "";
      DM.cf = "";
      g && g.id === n.id && n.mv.length > g.mv.length && (sfx(300, 0.1), vib(10));
    }
    dmPay(n);
    dmDraw();
    dmAfter();
  }
  async function dmSend(g) {
    const t = DM.subs[g.f];
    if (!t || !t.ref) {
      DM.m = "La partie n’est pas encore prête : réessaie dans un instant.";
      return false;
    }
    if (DM.busy) return false;
    DM.busy = 1;
    dmDraw();
    try {
      await t.ref.set(dmDoc(g));
    } catch (e) {
      DM.busy = 0;
      DM.m = "Ton coup n’est pas parti. " + scrWhy(e);
      return false;
    }
    DM.busy = 0;
    DM.G[g.f] = g;
    DM.got[g.f] = true;
    return true;
  }
  function dmNetInit() {
    try {
      SO.col || SO.st === "conn" || socInit();
    } catch (e) {}
    if (!SO.uid || !SO.got) return;
    const e = st.get("soc:me", null);
    e &&
      e.fr &&
      Object.keys(e.fr)
        .filter((t) => e.fr[t] > 0)
        .slice(0, 24)
        .forEach(dmWatch);
    typeof chOpp2 == "function" && chOpp2().slice(0, 24).forEach(dmWatch);
    if (!DM.poll) {
      DM.poll = setInterval(() => {
        if (DM.scr !== "hub" || !$("#dmh") || DM.cfg.op !== "net") {
          clearInterval(DM.poll);
          DM.poll = 0;
          return;
        }
        if (SO.uid && SO.got) {
          const e = st.get("soc:me", null);
          e &&
            e.fr &&
            Object.keys(e.fr)
              .filter((t) => e.fr[t] > 0)
              .slice(0, 24)
              .forEach(dmWatch);
        }
        dmRefresh();
      }, 2500);
    }
  }
  function dmStat(f) {
    const g = DM.G[f];
    if (DM.err[f]) return { k: "err", t: "Partie injoignable pour l’instant" };
    if (!g) return DM.got[f] || !DM.subs[f] ? { k: "new", t: "Pas encore de partie" } : { k: "load", t: "…" };
    const r = dmRes(g);
    if (r) return { k: "end", t: r.w === 0 ? "Partie nulle" : r.w === g.me ? "Gagné" : "Perdu" };
    return dmTurn(g) === g.me ? { k: "me", t: "À toi de jouer" } : { k: "them", t: "Au tour de " + scrNm(f) };
  }
  function dmFriends() {
    const o = st.get("soc:me", null),
      box = (h, p, b) =>
        `<section class="glass play soc-i"><h2>${h}</h2><p class="note" style="margin:0">${p}</p>${b ? `<button class="btn" style="margin-top:14px" data-a="dmSoc">${b}</button>` : ""}</section>`;
    if (SO.st === "na")
      return box(
        "Une connexion est nécessaire",
        "Jouer contre un ami demande d’être connecté(e) et d’avoir ajouté cet ami : tout se passe dans l’onglet Social.",
        "Ouvrir Social",
      );
    if (!(SO.uid && SO.got && o && o.code)) {
      const e = SO.st === "slow" || SO.st === "err";
      return box(
        e ? "Pas de réponse pour l’instant" : "Un instant…",
        e ? "Tes amis se chargeront dès que possible." : "Tes amis arrivent.",
      );
    }
    const a = Object.keys(o.fr).filter((t) => o.fr[t] > 0 && SO.P[t]);
    if (!a.length)
      return box(
        "Il te faut un ami",
        "Ajoute un ami avec son code ami, dans l’onglet Social : vous pourrez alors jouer ensemble.",
        "Ouvrir Social",
      );
    const ord = { me: 0, them: 1, new: 2, load: 2, err: 3, end: 2 };
    return `<section class="glass play soc-i"><h2 class="s" style="margin-top:0">Inviter un ami</h2><p class="note" style="margin:0 0 8px">Ta couleur ci-dessus sera utilisée pour la nouvelle partie.</p>${a
      .sort((x, y) => ord[dmStat(x).k] - ord[dmStat(y).k] || scrNm(x).localeCompare(scrNm(y), "fr"))
      .map((f) => {
        const t = dmStat(f),
          k = t.k === "new" || t.k === "end" ? "dmInv" : "dmOpen",
          lab = t.k === "me" ? "Jouer" : t.k === "them" ? "Voir" : t.k === "err" ? "Ouvrir" : "Inviter";
        return `<div class="fr-i"><button class="fr-o" data-a="${t.k === "end" ? "dmOpen" : k}" data-v="${esc(f)}">${socAv(f)}<span class="fr-t"><b>${esc(scrNm(f))}</b><small${t.k === "me" ? ' class="scgo"' : ""}>${esc(t.t)}</small></span></button><div class="fr-b"><button class="sb${t.k === "me" ? " buy" : ""}" data-a="${k}" data-v="${esc(f)}">${lab}</button></div></div>`;
      })
      .join("")}</section>`;
  }
  function dmOpenNet(f) {
    if (!SO.uid) return dmHub();
    dmWatch(f);
    const t = DM.G[f];
    DM.scr = "game";
    DM.fid = f;
    if (t) return dmBegin(t, f);
    DM.g = null;
    theme("draughts");
    $("#nav").hidden = !0;
    app.innerHTML = `<div class="top stk"><button class="back" data-a="dmBk">‹ Dames</button><span class="tl">${esc(scrNm(f))}</span><div class="tr"><div class="chip">🫧 ${FLX()}</div></div></div><section class="glass play pg-chess" id="dmg"><p class="note">Un instant…</p></section>`;
    const a = Date.now(),
      iv = setInterval(() => {
        if (DM.scr !== "game" || DM.fid !== f || !$("#dmg")) return clearInterval(iv);
        if (DM.G[f]) {
          clearInterval(iv);
          dmBegin(DM.G[f], f);
        } else if (DM.err[f] || Date.now() - a > 9e3) {
          clearInterval(iv);
          $("#dmg").innerHTML =
            `<h2 style="margin:0 0 6px">Partie injoignable</h2><p class="note" style="margin:0 0 14px">${esc(DM.ec[f] || "Pas de réponse du serveur.")} Ton ami doit aussi t’avoir ajouté dans Social.</p><button class="btn" data-a="dmBk">Retour</button>`;
        }
      }, 300);
  }
  Object.assign(DMA, {
    dmSoc: () => socScreen(),
    dmOpen: (f) => dmOpenNet(f),
    dmInv: async (f) => {
      if (!SO.uid || DM.nw) return;
      dmWatch(f);
      const t = DM.subs[f];
      if (!t) return;
      DM.nw = 1;
      try {
        await t.p;
      } catch (e) {}
      const a = DM.G[f];
      if (a && !dmRes(a)) {
        DM.nw = 0;
        return dmOpenNet(f);
      }
      const col = DM.cfg.col || (Math.random() < 0.5 ? 1 : -1),
        n = dmNew({ k: "net", f, me: col, p: col > 0 ? [SO.uid, f] : [f, SO.uid] });
      n.f = f;
      try {
        socInv(f, "draughts");
      } catch (e) {}
      if (!t.ref) {
        DM.nw = 0;
        DM.m = "La partie n’est pas encore prête : réessaie dans un instant.";
        return dmOpenNet(f);
      }
      DM.busy = 0;
      try {
        await t.ref.set(dmDoc(n));
      } catch (e) {
        DM.nw = 0;
        const h = $("#dmh");
        return void (
          h &&
          h.insertAdjacentHTML(
            "afterbegin",
            `<section class="glass play soc-i"><p class="note" style="margin:0">Invitation non envoyée. ${esc(scrWhy(e))}</p></section>`,
          )
        );
      }
      DM.nw = 0;
      DM.G[f] = n;
      DM.got[f] = true;
      dmBegin(n, f);
    },
  });
  try {
    CVG.draughts = "au Plateau royal (dames)";
  } catch (e) {}
  const _sp = act.socPlay;
  act.socPlay = function (e) {
    const [t, a] = String(e).split(":");
    if (t === "draughts" && a && SO.P[a]) {
      act.open("draughts");
      setTimeout(() => act.dmInv(a), 300);
      return;
    }
    return _sp.apply(this, arguments);
  };
  Object.assign(window, {
    dmHub,
    dmHubDraw,
    dmBegin,
    dmILg,
    dmNew,
    dmLoad,
    dmSave,
    dmPc,
    dmInstall,
    DMA,
    dmNetInit,
    dmStat,
    dmFriends,
    DMT: { dmGen, dmMk, dmReplay, dmInit, dmThink, dmP, dmEv, capSeq, sqN, nSq },
  });
  setTimeout(() => {
    try {
      window.RULES.draughts = {
        g: "Capturer toutes les pièces adverses, ou les bloquer pour qu’elles ne puissent plus jouer.",
        s: [
          [
            "tap",
            "Avance en diagonale",
            "Les pions avancent d’une case en diagonale, vers l’avant. Touche un pion, puis une case marquée.",
          ],
          [
            "target",
            "Prise obligatoire",
            "Sauter par-dessus une pièce adverse la capture, en avant comme en arrière. Si tu peux prendre, tu dois le faire, et choisir la prise qui capture le plus de pièces.",
          ],
          [
            "star",
            "La dame",
            "Un pion qui atteint le dernier rang devient une dame : elle se déplace et prend de loin, sur toute la diagonale.",
          ],
        ],
        t: "Garde tes pions groupés : une pièce isolée est facile à prendre.",
      };
    } catch (e) {}
  }, 600);
  try {
    GIL.draughts =
      '<rect x="6" y="6" width="52" height="52" rx="8" fill="#e8d4aa"/>' +
      [0, 1, 2, 3, 4, 5]
        .flatMap((r) =>
          [0, 1, 2, 3, 4, 5].map((c) =>
            (r + c) % 2
              ? `<rect x="${8 + c * 8}" y="${8 + r * 8}" width="8" height="8" fill="#a87a4a"/>`
              : "",
          ),
        )
        .join("") +
      '<circle cx="28" cy="20" r="5.5" fill="#2a1f1a" stroke="#f0d9b5" stroke-width="1.2"/><circle cx="36" cy="44" r="5.5" fill="#fbf6ea" stroke="#3a2a22" stroke-width="1.2"/>';
  } catch (e) {}
})();
