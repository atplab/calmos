(() => {
  if (typeof kzAmb !== "function") return;
  const T = (n) => {
    const W = n ? ["#b88452", "#8a5a30", "#5e3a1c", "#3e2410"] : ["#f3d9ae", "#dcb07a", "#b07a46", "#7a4e26"],
      p = "kt" + n;
    return `<svg class="kzat kzt2" viewBox="0 -6 80 50" aria-hidden="true"><defs><linearGradient id="${p}a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${W[0]}"/><stop offset=".6" stop-color="${W[1]}"/><stop offset="1" stop-color="${W[2]}"/></linearGradient><linearGradient id="${p}b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${W[2]}"/><stop offset="1" stop-color="${W[3]}"/></linearGradient><linearGradient id="${p}m" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3a3550"/><stop offset=".45" stop-color="#8c87a8"/><stop offset="1" stop-color="#2a2640"/></linearGradient><radialGradient id="${p}s"><stop offset="0" stop-color="#000" stop-opacity=".45"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs>
<ellipse cx="40" cy="41" rx="30" ry="4.5" fill="url(#${p}s)"/><ellipse cx="40" cy="39" rx="12" ry="2.8" fill="url(#${p}m)"/><path d="M28 39.2q12-3 24 0" stroke="#fff" stroke-opacity=".25" stroke-width=".8" fill="none"/><rect x="37.6" y="13" width="4.8" height="26" rx="1.6" fill="url(#${p}m)"/><ellipse cx="40" cy="14" rx="9" ry="2.2" fill="#000" opacity=".25"/>
<ellipse cx="40" cy="10.6" rx="36.5" ry="7.6" fill="url(#${p}b)"/><ellipse cx="40" cy="8" rx="36.5" ry="7.2" fill="url(#${p}a)"/><path d="M8 7q10-5 32-5.6" stroke="#fff" stroke-opacity=".35" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M14 9.5q26 4 52 0M20 5.6q20-2.4 40 0" stroke="${W[2]}" stroke-opacity=".35" stroke-width=".6" fill="none"/>
<ellipse cx="25" cy="8.6" rx="9.5" ry="3.2" fill="#000" opacity=".12"/><ellipse cx="25" cy="7.8" rx="9.5" ry="3.1" fill="#fff"/><ellipse cx="25" cy="7.8" rx="6.2" ry="1.9" fill="#eef0f6"/><ellipse cx="55" cy="8.6" rx="9.5" ry="3.2" fill="#000" opacity=".12"/><ellipse cx="55" cy="7.8" rx="9.5" ry="3.1" fill="#fff"/><ellipse cx="55" cy="7.8" rx="6.2" ry="1.9" fill="#eef0f6"/>
<g><rect x="37" y="0" width="6" height="7.5" rx="1.4" fill="#cfe9ff" opacity=".75"/><rect x="37" y="3.6" width="6" height="3.9" rx="1" fill="${n ? "#ffb347" : "#ff7a8a"}" opacity=".85"/><rect x="38" y=".6" width="1.2" height="6" rx=".6" fill="#fff" opacity=".8"/></g></svg>`;
  };
  const _a = kzAmb;
  kzAmb = function (e, t) {
    const r = _a.apply(this, arguments);
    if (e === 2) return r;
    return (
      `<div class="kzfl f${e}" aria-hidden="true"></div>` +
      r.replace(/<svg class="kzat"[\s\S]*?<\/svg>/g, T(e === 1 ? 1 : 0))
    );
  };
})();
