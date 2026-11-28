// Étape 0 de la refactorisation (outil à usage unique) : éclate index.html en fichiers sources reformatés.
// Usage : node scripts/refacto/decoupe.js   → écrit index.src.html, shared/core/*, reste/*
const fs = require('fs'), path = require('path');
const prettier = require('prettier');
const { segments, units } = require('./lib');
const root = path.join(__dirname, '..', '..');

// Fichiers tirés du gros script principal. ancre = unité non inerte dont la place fixe celle du fichier (sinon : au début).
const PLAN = [
  { f: 'shared/core/stockage.js', noms: ['mem', 'onSet', 'st'] },
  { f: 'shared/core/utils.js', noms: ['$', 'app', 'sh', 'today', 'di', 'dkey', 'ckey'] },
  { f: 'shared/core/actions-ui.js', noms: ['act'] },
  { f: 'shared/core/progression.js', ancre: 'fl', noms: ['isX', 'xn', 'UNL', 'FLX', 'UT', 'unlTap', 'unlToast', 'fl', 'cur', 'daily', 'lv',
    'playing', 'snap', 'rc', 'lvOpen', 'origin', 'mt', 'msg', 'spend', 'pkey', 'keep', 'frame', 'favs', 'win'] },
  { f: 'shared/core/registre-jeux.js', ancre: 'GD', noms: ['G', 'SP', 'ORD', 'GD', 'DL', 'GCAT', 'gCatOf', 'GUNL', 'GSTEP'] },
];
const TETE = {
  'shared/core/stockage.js': 'Sauvegarde locale : st.get / st.set (localStorage + cache mémoire mem, rappel onSet).',
  'shared/core/utils.js': 'Petits outils communs : $ (querySelector), app (#app), sh (mélange), today / di (date du jour), dkey / ckey (clés de sauvegarde).',
  'shared/core/actions-ui.js': 'Table act : actions déclenchées par les boutons data-a="…" de l’interface (complétée ailleurs par Object.assign(act, …)).',
  'shared/core/progression.js': 'État de la partie (cur, lv, playing, snap…), bulles (fl, FLX, spend), mode illimité (UNL), cadre de jeu frame(), msg(), sauvegarde keep() et victoire win().',
  'shared/core/registre-jeux.js': 'Registre des jeux : liste G, SP, ORD, GD, DL ; catégories GCAT ; déblocages GUNL ; paliers GSTEP.',
};

const fmt = (code, parser) => prettier.format(code, { parser, printWidth: 110, quoteProps: 'preserve', embeddedLanguageFormatting: 'off' });

(async () => {
  const S = segments(fs.readFileSync(path.join(root, 'index.html'), 'utf8'));
  const code = S.filter(x => x.t !== 'html');
  const mainJs = code.filter(x => x.t === 'script').reduce((m, x) => (x.v.length > m.v.length ? x : m));
  const mainCss = code.filter(x => x.t === 'style').reduce((m, x) => (x.v.length > m.v.length ? x : m));
  const files = {}; let html = '', nb = 0;
  for (const x of S) {
    if (x.t === 'html') { html += x.v; continue; }
    nb++;
    const id = (/id="([^"]+)"/.exec(x.open) || [])[1];
    const num = String(nb).padStart(3, '0') + (id ? '-' + id : '');
    let parts;
    if (x === mainJs) {
      const U = units(x.v), owner = new Map();
      PLAN.forEach(p => p.noms.forEach(n => owner.set(n, p)));
      const of = u => (u.names.length && owner.get(u.names[0])) || null;
      const anc = new Map(PLAN.map(p => [p, p.ancre ? U.find(u => u.names.includes(p.ancre)).i : -1]));
      parts = []; let cur = null, k = 0;
      const emit = p => parts.push({ f: p.f, code: U.filter(u => of(u) === p).map(u => u.code).join('\n'), tete: TETE[p.f] });
      const done = new Set();
      for (const u of U) {
        for (const p of PLAN) if (!done.has(p) && anc.get(p) < u.i) { done.add(p); emit(p); cur = null; }
        if (of(u)) continue;
        if (!cur) { cur = { f: `reste/principal-${++k}.js`, code: '' }; parts.push(cur); }
        cur.code += u.code + '\n';
      }
    } else if (x.t === 'script') parts = [{ f: `reste/${num}-script.js`, code: x.v }];
    else parts = [{ f: x === mainCss ? 'reste/styles-principal.css' : `reste/${num}-style.css`, code: x.v }];
    for (const p of parts) {
      const css = p.f.endsWith('.css');
      let out = await fmt(p.code, css ? 'css' : 'babel');
      if (p.tete) out = `// ${p.tete}\n` + out;
      files[p.f] = out;
    }
    html += parts.map(p => `/*@inclure ${p.f}*/`).join('\n');
  }
  for (const [f, v] of Object.entries(files)) { fs.mkdirSync(path.dirname(path.join(root, f)), { recursive: true }); fs.writeFileSync(path.join(root, f), v); }
  fs.writeFileSync(path.join(root, 'index.src.html'), html);
  console.log(Object.keys(files).length + ' fichiers écrits');
})();
