(() => {
  const GN2 = () => {
    const c = {};
    GCAT.forEach((g) => g[2].forEach((i) => (c[i] = g[1])));
    return c;
  };
  const redraw = () => {
    if (null === cur && "function" == typeof home) {
      const y = scrollY;
      (home(), scrollTo(0, y));
    }
  };
  const save = (ul) => {
    const ids = [...ul.querySelectorAll("li[data-id]")].map((l) => l.dataset.id);
    st.set("g:ord", ids);
    redraw();
  };
  window.gOrdDraw = function () {
    const e = gOrd(
        GD.filter(
          (e) =>
            !e.soon &&
            !["hoho", "carcache", "solitaire"]
              .concat(
                window.WLG || [],
                window.BLG || [],
                window.ARG || [],
                window.SGL || [],
                window.SJL || [],
                window.RFG || [],
              )
              .includes(e.id) &&
            !gHid0(e.id),
        ),
      ),
      t = $("#gordo .gorl");
    if (!t) return;
    const a = st.get("g:hide", []),
      C = GN2();
    t.innerHTML = e
      .map((g, i) => {
        const h = a.includes(g.id);
        return `<li data-id="${g.id}" class="${h ? "ghid" : ""}" style="--a:${g.a};--b:${g.b}"><span class="gorh" role="button" tabindex="0" aria-label="Déplacer ${esc(g.n)} (flèches haut/bas)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7h8M8 12h8M8 17h8"/></svg></span><i>${gSv(g)}</i><span class="gorn"><b>${esc(g.n)}</b><small>${C[g.id] || "Autres"}</small></span><button class="ghd" data-a="gHide" data-v="${g.id}" aria-pressed="${h}" aria-label="${h ? "Afficher" : "Masquer"} ${esc(g.n)}"><svg viewBox="0 0 24 24" aria-hidden="true">${h ? '<path d="M3 3l18 18M10.6 6.2A10 10 0 0 1 12 6c5 0 9 6 9 6a17 17 0 0 1-3.2 3.6M6.4 8.4C4.4 10 3 12 3 12s4 6 9 6a9 9 0 0 0 3.5-.7"/>' : '<path d="M3 12s4-6 9-6 9 6 9 6-4 6-9 6-9-6-9-6z"/><circle cx="12" cy="12" r="2.6"/>'}</svg></button><button class="gtop" data-a="gTop" data-v="${g.id}" aria-label="Mettre ${esc(g.n)} en premier"${i ? "" : " disabled"}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h12M12 19V9M7 13l5-5 5 5"/></svg></button></li>`;
      })
      .join("");
  };
  setTimeout(
    () =>
      Object.assign(act, {
        gOrd: () => {
          const o = $("#gordo");
          o && o.remove();
          const t = document.createElement("div");
          ((t.className = "sfr"),
            (t.id = "gordo"),
            t.setAttribute("role", "dialog"),
            t.setAttribute("aria-modal", "true"),
            t.setAttribute("aria-label", "Ordre des jeux"),
            (t.innerHTML =
              '<div class="glass sfc gorc"><div class="gorhd"><h2>Ordre des jeux</h2><button class="btn gdone" data-a="gOrdX">Terminé</button></div><p class="note gorp"><b>≡</b> Maintiens et glisse pour déplacer · <b>↑</b> en premier · <b>œil</b> masquer</p><ol class="gorl"></ol><button class="btn alt gorr" data-a="gOrdR">Ordre d’origine</button></div>'),
            document.body.appendChild(t),
            gOrdDraw());
        },
        gTop: (id) => {
          const ul = $("#gordo .gorl"),
            li = ul && ul.querySelector(`li[data-id="${id}"]`);
          if (!li) return;
          ul.prepend(li);
          save(ul);
          gOrdDraw();
          ul.scrollTop = 0;
        },
      }),
    60,
  );
  document.addEventListener("pointerdown", (e) => {
    const h = e.target.closest && e.target.closest("#gordo .gorh");
    if (!h) return;
    e.preventDefault();
    const li = h.closest("li"),
      ul = li.parentNode,
      box = ul;
    li.classList.add("drag");
    try {
      h.setPointerCapture(e.pointerId);
    } catch (_) {}
    let y0 = e.clientY;
    vib(10);
    const mv = (ev) => {
      li.style.transform = `translateY(${ev.clientY - y0}px)`;
      const r = box.getBoundingClientRect();
      if (ev.clientY < r.top + 40) box.scrollTop -= 10;
      else if (ev.clientY > r.bottom - 40) box.scrollTop += 10;
      const sib = [...ul.children]
        .filter((x) => x !== li)
        .find((x) => {
          const b = x.getBoundingClientRect();
          return ev.clientY > b.top && ev.clientY < b.bottom;
        });
      if (sib) {
        const vis = li.getBoundingClientRect().top;
        li.style.transform = "";
        const after = sib.compareDocumentPosition(li) & Node.DOCUMENT_POSITION_FOLLOWING;
        ul.insertBefore(li, after ? sib : sib.nextSibling);
        const nat = li.getBoundingClientRect().top;
        li.style.transform = `translateY(${vis - nat}px)`;
        y0 = ev.clientY - (vis - nat);
        sfx(440, 0.03);
      }
    };
    const up = () => {
      h.removeEventListener("pointermove", mv);
      h.removeEventListener("pointerup", up);
      h.removeEventListener("pointercancel", up);
      li.classList.remove("drag");
      li.style.transform = "";
      save(ul);
      gOrdDraw();
    };
    h.addEventListener("pointermove", mv);
    h.addEventListener("pointerup", up);
    h.addEventListener("pointercancel", up);
  });
  document.addEventListener("keydown", (e) => {
    const h = e.target.closest && e.target.closest("#gordo .gorh");
    if (!h || !/^Arrow(Up|Down)$/.test(e.key)) return;
    e.preventDefault();
    const li = h.closest("li"),
      ul = li.parentNode,
      id = li.dataset.id;
    e.key === "ArrowUp"
      ? li.previousElementSibling && ul.insertBefore(li, li.previousElementSibling)
      : li.nextElementSibling && ul.insertBefore(li.nextElementSibling, li);
    save(ul);
    gOrdDraw();
    const n = ul.querySelector(`li[data-id="${id}"] .gorh`);
    n && n.focus();
  });
})();
