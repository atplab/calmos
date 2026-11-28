let brT = null;
let brGo = null;
let BR = 2;
function brEnd() {
  if (!brT) return;
  (clearInterval(brT), (brT = null));
  const e = brGo;
  ((brGo = null), e && e());
}
function breathe(e) {
  if (!prefs().breath) return e();
  (clearInterval(brT),
    (brGo = e),
    theme(cur),
    ($("#nav").hidden = !0),
    (playing = !1),
    (app.innerHTML = `<div class="top"><span></span><div class="chip">🫧 ${FLX()}</div></div><section class="glass br"><h2>Respire un instant</h2><small>Cohérence cardiaque · ${BR} respiration${BR > 1 ? "s" : ""}</small><div class="br-w"><div class="br-o" style="animation-iteration-count:${BR}"></div><div class="br-t"><b id="bp" aria-live="polite">Inspire</b><span id="bs">4</span></div></div><p class="br-d" id="bc">1 / ${BR}</p><button class="btn alt" data-a="brSkip">Passer</button><button class="lnk" data-a="brOff">Désactiver la respiration</button></section>`));
  const t = performance.now(),
    a = 12 * (BR - 1) + 10;
  let s = "";
  const n = () => {
    const e = $("#bs");
    if (!e) return (clearInterval(brT), (brT = null), void (brGo = null));
    const n = (performance.now() - t) / 1e3;
    if (n >= a) return brEnd();
    const o = Math.floor(n / 12),
      i = n % 12,
      r = i < 4 ? 0 : i < 6 ? 1 : i < 10 ? 2 : 3,
      l = o + ":" + r;
    ((e.textContent = Math.ceil([4, 6, 10, 12][r] - i)),
      l !== s &&
        ((s = l),
        ($("#bp").textContent = ["Inspire", "Retiens", "Expire", "Pause"][r]),
        ($("#bc").textContent = o + 1 + " / " + BR),
        r < 3 && sfx([330, 392, 262][r], [0.9, 0.4, 1.1][r])));
  };
  ((brT = setInterval(n, 200)), n());
}