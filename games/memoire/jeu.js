// Mémoire (id « memo ») : écran pMemo.
function pMemo(e) {
  const t = isX("memo", lv),
    a = t
      ? [3, 4, 4, 5, 6, 6, 7, 8, 9, 10][xn("memo", lv) - 1]
      : lv < 20
        ? 3 + (lv >> 1)
        : [13, 13, 14, 14, 15, 15, 16, 16, 17, 18][lv - 20],
    K = t ? MMX : MMN,
    s = sh([...K]).slice(0, a),
    ok0 = e && Array.isArray(e.C) && e.C.length === 2 * a && e.C.every((x) => MMI[x]);
  let n = ok0 ? e.C : sh([...s, ...s]),
    o = [],
    i = (ok0 && e.ok) || [],
    r = !1,
    mv = (ok0 && e.mv) || 0;
  snap = () => ({ C: n, ok: i, mv: mv });
  const N = n.length,
    cols = N <= 12 ? 4 : N <= 20 ? 5 : 6;
  frame(
    `<div class="mmh"><div class="mmbar"><i id="mmb"></i></div><span id="mmn"></span></div><div class="mmg" style="--n:${cols}">${n.map((k, j) => `<button class="mmc" data-a="flip" data-v="${j}" aria-label="Carte" style="--d:${Math.min(j * 22, 600)}ms"><span class="mmi"><span class="mmf mmbk"></span><span class="mmf mmfr"><svg viewBox="0 0 48 48" style="background:${MMI[k][1]}" aria-hidden="true">${MMI[k][0]}</svg></span></span></button>`).join("")}</div>`,
    1,
  );
  msg("Allume les lanternes par paires.");
  const C = [...document.querySelectorAll(".mmc")],
    up = () => {
      C.forEach((c, j) => {
        c.classList.toggle("open", o.includes(j) || i.includes(j));
        c.classList.toggle("done", i.includes(j));
      });
      $("#mmb").style.width = (100 * i.length) / N + "%";
      $("#mmn").textContent = `${i.length / 2} / ${a} lanternes · ${mv} coup${mv > 1 ? "s" : ""}`;
    };
  act.flip = (e) => {
    const j = +e;
    if (r || o.includes(j) || i.includes(j)) return;
    o.push(j);
    sfx(520 + o.length * 60, 0.04);
    2 === o.length && mv++;
    up();
    if (2 !== o.length) return;
    const [p, q] = o;
    if (n[p] === n[q]) {
      (i.push(p, q),
        (o = []),
        (r = !0),
        setTimeout(() => {
          ((r = !1),
            up(),
            sfx(784, 0.14),
            vib(10),
            [p, q].forEach((x) => {
              (C[x].classList.remove("pop"), C[x].offsetWidth, C[x].classList.add("pop"));
            }),
            i.length === N && (msg("Toutes les lanternes brillent !"), setTimeout(win, 1100)));
        }, 420));
    } else
      ((r = !0),
        setTimeout(() => [p, q].forEach((x) => C[x].classList.add("no")), 520),
        setTimeout(() => {
          ((o = []), (r = !1), C.forEach((c) => c.classList.remove("no")), up());
        }, 1100));
  };
  ((act.hint = () => {
    !r &&
      spend(1) &&
      ((r = !0),
      (o = n.map((e, t) => t)),
      up(),
      setTimeout(() => {
        ((o = []), (r = !1), up());
      }, 1500));
  }),
    up());
}
