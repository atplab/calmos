const qzGuy = (e) => {
  const t = "ok" === e,
    a = "no" === e,
    s = 'stroke="#4a4290" stroke-width="1.9" fill="none" stroke-linecap="round"',
    n = t
      ? '<path class="qzsp" d="M-21 -44l1.2 2.8 2.8 1.2-2.8 1.2-1.2 2.8-1.2-2.8-2.8-1.2 2.8-1.2z" fill="#ffe27a"/><path class="qzsp s2" d="M22 -36l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z" fill="#ffe27a"/><path class="qzsp s3" d="M20 -8l.9 2 2 .9-2 .9-.9 2-.9-2-2-.9 2-.9z" fill="#fff6c8"/>'
      : "";
  return `<svg viewBox="-28 -66 56 68" aria-hidden="true"><defs><radialGradient id="qzb" cx=".36" cy=".26" r=".98"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="#ece6ff"/><stop offset="1" stop-color="#b9acec"/></radialGradient><radialGradient id="qzs" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#fff6c2"/><stop offset="1" stop-color="#ffc83d"/></radialGradient><radialGradient id="qzg"><stop offset="0" stop-color="#fff3c0" stop-opacity=".85"/><stop offset="1" stop-color="#fff3c0" stop-opacity="0"/></radialGradient></defs><ellipse cx="0" cy="-1" rx="12" ry="2.2" fill="rgba(0,0,0,.2)"/>${a ? `<path d="M1 -38Q9 -42 12 -36" stroke="#a79bdc" stroke-width="2" fill="none" stroke-linecap="round"/><polygon points="${sStar(13, -34, 4.8, 2.3)}" fill="url(#qzs)" stroke="#ffc83d" stroke-width="1.2" stroke-linejoin="round"/>` : `<path d="M1 -38Q6 -46 4 -52" stroke="#a79bdc" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="4" cy="-55" r="9" fill="url(#qzg)"/><polygon points="${sStar(4, -55, 5.8, 2.8)}" fill="url(#qzs)" stroke="#ffc83d" stroke-width="1.6" stroke-linejoin="round"/>`}<path d="M0 -39C10 -39 15.5 -29 15.5 -19C15.5 -8 9 -2 0 -2C-9 -2 -15.5 -8 -15.5 -19C-15.5 -29 -10 -39 0 -39Z" fill="url(#qzb)"/><ellipse cx="-6.4" cy="-30" rx="3.2" ry="5.4" fill="#fff" opacity=".6" transform="rotate(18 -6.4 -30)"/>${t ? `<path d="M-9.2 -21.4q3.4 -4.2 6.8 0M2.4 -21.4q3.4 -4.2 6.8 0" ${s}/><path d="M-4.6 -17.6Q0 -9.4 4.6 -17.6Z" fill="#b8456a" stroke="#b8456a" stroke-width="1" stroke-linejoin="round"/><path d="M-2.2 -13.4q2.2 -2.2 4.4 0q-2.2 1.8 -4.4 0z" fill="#ff8fa8"/><ellipse cx="-11" cy="-16.6" rx="2.7" ry="1.7" fill="#ff9db8" opacity=".7"/><ellipse cx="11" cy="-16.6" rx="2.7" ry="1.7" fill="#ff9db8" opacity=".7"/>` : a ? `<ellipse cx="-5.8" cy="-21" rx="1.9" ry="2.6" fill="#4a4290"/><ellipse cx="5.8" cy="-21" rx="1.9" ry="2.6" fill="#4a4290"/><circle cx="-5.2" cy="-22" r=".75" fill="#fff"/><circle cx="6.4" cy="-22" r=".75" fill="#fff"/><path d="M-10.4 -24.2L-3.6 -27.4M10.4 -24.2L3.6 -27.4" ${s}/><path d="M-3.8 -13Q0 -17.2 3.8 -13" stroke="#7a6cc0" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M-9.8 -17.6q2.2 2.8 0 4.6q-2.2 -1.8 0 -4.6z" fill="#8fd0ff" stroke="#5aa8e0" stroke-width=".7"/>` : '<ellipse cx="-5.8" cy="-23" rx="2.1" ry="2.9" fill="#4a4290"/><ellipse cx="5.8" cy="-23" rx="2.1" ry="2.9" fill="#4a4290"/><circle cx="-5.1" cy="-24.2" r=".85" fill="#fff"/><circle cx="6.5" cy="-24.2" r=".85" fill="#fff"/><path d="M-2.8 -16.4q2.8 2.6 5.6 0" stroke="#7a6cc0" stroke-width="1.5" fill="none" stroke-linecap="round"/>'}<g fill="#efb63e"><circle cx="-11.8" cy="-18.4" r="1.1"/><circle cx="-9.6" cy="-16" r="1.1"/><circle cx="-12.6" cy="-15.2" r=".9"/><circle cx="11.8" cy="-18.4" r="1.1"/><circle cx="9.6" cy="-16" r="1.1"/><circle cx="12.6" cy="-15.2" r=".9"/></g>${(t
    ? [
        [-17.6, -27],
        [17.6, -27],
      ]
    : a
      ? [
          [-13.6, -5.5],
          [13.6, -5.5],
        ]
      : [
          [-14.8, -10],
          [14.8, -10],
        ]
  )
    .map(([e, t]) => `<circle cx="${e}" cy="${t}" r="4.6" fill="#e6defc" stroke="#c7bbf0" stroke-width="1"/>`)
    .join("")}${n}</svg>`;
};
