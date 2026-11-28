// Sort des déclarations de haut niveau des fichiers reste/principal-N.js vers un fichier de jeu, à une place
// qui garde l'ordre d'exécution valide (mêmes règles que verifier.js), puis renumérote les principal-N.js.
// Usage : node scripts/refacto/extraire.js games/<jeu>/jeu.js "Commentaire d'en-tête" nom1,nom2,…
const fs = require('fs'), path = require('path'), acorn = require('acorn');
const { inert } = require('./lib');
const root = path.join(__dirname, '..', '..'), R = (f) => path.join(root, f);
const [cible, tete, liste] = process.argv.slice(2), voulus = new Set(liste.split(','));
let src = fs.readFileSync(R('index.src.html'), 'utf8');
// Fichiers du gros script : le <script> qui contient les principal-N.js.
const bloc = /<script>((?:\/\*@inclure [^*]+\*\/\n?)+)<\/script>/g;
let m, B;
while ((m = bloc.exec(src))) if (m[1].includes('reste/principal-')) B = m;
const fichiers = [...B[1].matchAll(/\/\*@inclure ([^*]+)\*\//g)].map((x) => x[1]);
const st = []; // instructions dans l'ordre global
for (const f of fichiers) {
  const txt = fs.readFileSync(R(f), 'utf8');
  let prev = 0;
  for (const n of acorn.parse(txt, { ecmaVersion: 'latest' }).body) {
    const names = n.type === 'FunctionDeclaration' ? [n.id.name] : n.type === 'VariableDeclaration' ? n.declarations.map((d) => d.id.name) : [];
    const pris = names.filter((x) => voulus.has(x));
    if (pris.length && pris.length !== names.length) throw `${f} : instruction mixte ${names}`;
    if (pris.length && !/^reste\/principal-/.test(f)) throw `${f} : ${pris} hors de reste/principal-*`;
    st.push({ f, a: prev, b: n.end, txt, E: pris.length > 0, hoist: n.type === 'FunctionDeclaration',
      inert: n.type === 'FunctionDeclaration' || (n.type === 'VariableDeclaration' && n.kind !== 'var' && n.declarations.every((d) => d.id.type === 'Identifier' && inert(d.init))) });
    pris.forEach((x) => voulus.delete(x));
    prev = n.end;
  }
}
if (voulus.size) throw 'introuvables : ' + [...voulus];
const iE = st.map((s, i) => (s.E ? i : -1)).filter((i) => i >= 0);
const ok = (p) => st.every((o, j) => o.E || iE.every((i) => {
  if (i > j && j >= p) return st[i].inert || o.hoist; // le jeu remonte au-dessus de o
  if (i < j && j < p) return o.inert || st[i].hoist; // o remonte au-dessus du jeu
  return true;
}));
let p = -1;
for (let q = iE[0]; q <= iE[iE.length - 1] + 1; q++) if (ok(q)) { p = q; break; }
if (p < 0) throw 'aucune place valide';
// Place : avant l'instruction p (ou après la dernière extraite si p est en fin de script).
const ref = st[p] || null;
const code = st.filter((s) => s.E).map((s) => s.txt.slice(s.a, s.b).replace(/^\s*\n/, '')).join('\n');
fs.mkdirSync(path.dirname(R(cible)), { recursive: true });
fs.writeFileSync(R(cible), (tete ? '// ' + tete + '\n' : '') + code + '\n');
// Réécrit chaque fichier source en morceaux : [texte avant la place] [cible] [texte après].
const out = [];
for (const f of fichiers) {
  const S = st.filter((s) => s.f === f);
  if (!S.some((s) => s.E) && !(ref && ref.f === f)) { out.push(f); continue; }
  const txt = fs.readFileSync(R(f), 'utf8');
  let cur = '', morceaux = [];
  S.forEach((s, k) => {
    if (s === ref) { morceaux.push(cur); cur = ''; morceaux.push(null); }
    if (!s.E) cur += txt.slice(s.a, s.b);
    if (k === S.length - 1) cur += txt.slice(s.b);
  });
  morceaux.push(cur);
  for (const x of morceaux) {
    if (x === null) out.push(cible);
    else if (x.trim()) { const nf = `reste/tmp-${out.length}.js`; fs.writeFileSync(R(nf), x.replace(/^\s*\n/, '') ); out.push(nf); }
  }
  fs.unlinkSync(R(f));
}
if (!out.includes(cible)) out.push(cible);
// Renumérote les morceaux restants : principal-1, 2, …
let k = 0;
const nouv = out.map((f) => (/^reste\/(principal|tmp)-/.test(f) ? ((k++), f) : f));
const tmp = nouv.map((f) => f);
k = 0;
tmp.forEach((f, i) => {
  if (!/^reste\/(principal|tmp)-/.test(f)) return;
  const nf = `reste/principal-${++k}.js`;
  fs.renameSync(R(f), R(nf + '.x'));
  nouv[i] = nf;
});
nouv.forEach((f) => fs.existsSync(R(f + '.x')) && fs.renameSync(R(f + '.x'), R(f)));
src = src.replace(B[1], nouv.map((f) => `/*@inclure ${f}*/`).join('\n'));
fs.writeFileSync(R('index.src.html'), src);
console.log(`${cible} : ${iE.length} instructions, placées avant l'instruction ${p} ; ${k} fichiers principal`);
