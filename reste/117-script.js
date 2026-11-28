try {
  GIL["🫧"] =
    '<svg viewBox="0 0 24 24" width="64" height="64"><defs><radialGradient id="g" cx=".38" cy=".32" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset=".45" stop-color="#9fdcff" stop-opacity=".55"/><stop offset="1" stop-color="#7fb8ff" stop-opacity=".85"/></radialGradient><linearGradient id="r" x1="0" y1="0" x2="1" y2="1"><stop offset=".55" stop-color="#ff9ad5" stop-opacity="0"/><stop offset="1" stop-color="#ff9ad5" stop-opacity=".55"/></linearGradient></defs><circle cx="12" cy="12" r="10" fill="url(#g)" stroke="#8fd0ff" stroke-width="1.4"/><circle cx="12" cy="12" r="10" fill="url(#r)"/><path d="M6.2 10.5a6.4 6.4 0 0 1 4.6-4.6" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/><circle cx="16.6" cy="16.4" r="1.3" fill="#fff" fill-opacity=".8"/></svg>';
} catch (e) {}
(() => {
  const E = "🫧",
    SK = /^(SCRIPT|STYLE|TEXTAREA|INPUT|CANVAS|OPTION)$/;
  function fix(n) {
    if (n.nodeType === 3) {
      const p = n.parentNode;
      if (!p || !n.data.includes(E) || SK.test(p.nodeName) || (p.classList && p.classList.contains("cbub")))
        return;
      const f = document.createDocumentFragment();
      n.data.split(E).forEach((t, i) => {
        if (i) {
          const b = document.createElement("span");
          b.className = "cbub";
          b.textContent = E;
          f.appendChild(b);
        }
        t && f.appendChild(document.createTextNode(t));
      });
      p.replaceChild(f, n);
    } else if (n.nodeType === 1 && !SK.test(n.nodeName)) {
      const w = document.createTreeWalker(n, 4),
        L = [];
      let x;
      while ((x = w.nextNode())) L.push(x);
      L.forEach(fix);
    }
  }
  new MutationObserver((m) => {
    for (const r of m) {
      if (r.type === "characterData") fix(r.target);
      else r.addedNodes.forEach(fix);
    }
  }).observe(document.body, { childList: true, subtree: true, characterData: true });
  fix(document.body);
})();
