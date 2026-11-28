// Outils communs de la refactorisation : découpage de index.html en blocs et des scripts en unités.
const acorn = require('acorn');

// Segments de index.html : html brut / contenu d'un <script> / contenu d'un <style> (règle HTML : jusqu'au premier </script).
function segments(s) {
  const out = [], low = s.toLowerCase(); let p = 0, h = 0;
  for (;;) {
    const i = low.indexOf('<', p); if (i < 0) break;
    if (low.startsWith('<!--', i)) { p = low.indexOf('-->', i) + 3; continue; }
    const m = /^<(script|style)\b[^>]*>/.exec(low.slice(i, i + 300));
    if (!m) { p = i + 1; continue; }
    const ce = i + m[0].length, end = low.indexOf('</' + m[1], ce);
    out.push({ t: 'html', v: s.slice(h, ce) }, { t: m[1], open: s.slice(i, ce), v: s.slice(ce, end) });
    h = p = end;
  }
  out.push({ t: 'html', v: s.slice(h) });
  return out;
}

// Une expression « inerte » s'évalue sans effet de bord et sans lire aucune variable : la déplacer plus tôt ne change rien.
function inert(n) {
  if (!n) return true;
  switch (n.type) {
    case 'Literal': case 'ArrowFunctionExpression': case 'FunctionExpression': return true;
    case 'TemplateLiteral': return n.expressions.every(inert);
    case 'ArrayExpression': return n.elements.every(e => !e || (e.type !== 'SpreadElement' && inert(e)));
    case 'ObjectExpression': return n.properties.every(p => p.type === 'Property' && !p.computed && inert(p.value));
    case 'UnaryExpression': return n.operator !== 'delete' && inert(n.argument);
    case 'BinaryExpression': return inert(n.left) && inert(n.right);
    default: return false;
  }
}

const parse = src => acorn.parse(src, { ecmaVersion: 'latest' });
// Forme normalisée d'un nœud (sans positions ni écriture brute) : deux codes de même forme font exactement la même chose.
// Les chaînes a && (b && c), a || (b || c), (a, (b, c)) sont aplaties : le reformatage retire ces parenthèses inutiles.
const flat = (n, t, op) => (n && n.type === t && (!op || n.operator === op) ? (t === 'SequenceExpression' ? n.expressions : [n.left, n.right]).flatMap(m => flat(m, t, op)) : [n]);
const norm = n => JSON.stringify(n, (k, v) => {
  if (k === 'start' || k === 'end' || k === 'raw') return undefined;
  if (v && v.type === 'LogicalExpression') return { type: 'Logical', op: v.operator, items: flat(v, v.type, v.operator) };
  if (v && v.type === 'SequenceExpression') return { type: 'Seq', items: flat(v, v.type) };
  return v;
});

// Unités d'un script : chaque instruction de haut niveau ; chaque déclarateur de const/let/var devient sa propre unité.
function units(src) {
  const U = [];
  for (const n of parse(src).body) {
    if (n.type === 'EmptyStatement') continue; // « ; » isolé : ne fait rien
    if (n.type === 'VariableDeclaration') {
      for (const d of n.declarations) {
        const names = [];
        (function c(p) {
          if (!p) return;
          if (p.type === 'Identifier') names.push(p.name);
          else if (p.type === 'ObjectPattern') p.properties.forEach(q => c(q.value || q.argument));
          else if (p.type === 'ArrayPattern') p.elements.forEach(c);
          else if (p.type === 'AssignmentPattern') c(p.left);
          else if (p.type === 'RestElement') c(p.argument);
        })(d.id);
        U.push({ code: n.kind + ' ' + src.slice(d.start, d.end) + ';', names, kind: n.kind,
          inert: n.kind !== 'var' && d.id.type === 'Identifier' && inert(d.init), key: n.kind + norm(d) });
      }
    } else if (n.type === 'FunctionDeclaration') {
      U.push({ code: src.slice(n.start, n.end), names: [n.id.name], kind: 'function', inert: true, hoist: true, key: norm(n) });
    } else U.push({ code: src.slice(n.start, n.end), names: [], kind: n.type, inert: false, key: norm(n) });
  }
  U.forEach((u, i) => (u.i = i));
  return U;
}

module.exports = { segments, units, parse, norm, inert };
