// Trouve les déclarations de haut niveau du gros script qui n'appartiennent qu'à un jeu.
// Usage : node scripts/refacto/proprietaire.js pRoue [pAutre…]   → liste des noms (graine + aides exclusives)
const fs = require('fs'), path = require('path'), acorn = require('acorn');
const root = path.join(__dirname, '..', '..');
const { segments } = require('./lib');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const SEG = segments(html), S = SEG.filter(x => x.t === 'script');
const main = S.reduce((m, x) => (x.v.length > m.v.length ? x : m));
const ast = acorn.parse(main.v, { ecmaVersion: 'latest' });
const decl = new Map(); // nom → index d'instruction
const refs = []; // par instruction : Set des identifiants lus
ast.body.forEach((n, i) => {
  const names = [];
  if (n.type === 'FunctionDeclaration') names.push(n.id.name);
  if (n.type === 'VariableDeclaration') n.declarations.forEach(d => d.id.type === 'Identifier' && names.push(d.id.name));
  names.forEach(x => decl.set(x, i));
  const set = new Set();
  (function w(o) { if (!o || typeof o !== 'object') return; if (Array.isArray(o)) return o.forEach(w);
    if (o.type === 'Identifier') set.add(o.name);
    for (const k in o) if (k !== 'type' && k !== 'start' && k !== 'end') w(o[k]); })(n);
  refs.push(set);
});
// Références hors gros script (autres <script>, html) : comptées comme « ailleurs ».
const ailleurs = SEG.filter(x => x !== main).map(x => x.v).join('\n');
const dehors = nom => new RegExp('(^|[^\\w$.])' + nom.replace(/\$/g, '\\$') + '(?![\\w$])').test(ailleurs);
const own = new Set(process.argv.slice(2).map(x => decl.get(x)));
for (let chg = true; chg; ) {
  chg = false;
  for (const [nom, i] of decl) {
    if (own.has(i)) continue;
    const users = refs.map((r, j) => (r.has(nom) && j !== i ? j : -1)).filter(j => j >= 0);
    if (users.length && users.every(j => own.has(j)) && !dehors(nom)) { own.add(i); chg = true; }
  }
}
const noms = [...decl].filter(([, i]) => own.has(i)).map(([n]) => n);
console.log(noms.join(','));
