// Vérifie qu'un index.html reconstruit fait exactement la même chose que l'original.
// Usage : node scripts/refacto/verifier.js ancien.html nouveau.html
// - HTML hors code : identique à l'octet ; mêmes blocs <script>/<style>, dans le même ordre, mêmes balises ouvrantes.
// - Chaque <script> : mêmes unités (forme normalisée identique) ; une unité ne peut remonter que si elle est inerte
//   (ou si elle passe au-dessus d'une déclaration de fonction, qui est de toute façon hissée).
// - Chaque <style> : même CSS une fois minifié.
const fs = require('fs');
const { segments, units } = require('./lib');
const { transform } = require('lightningcss');

const [a, b] = process.argv.slice(2).map(f => fs.readFileSync(f, 'utf8'));
const A = segments(a), B = segments(b);
let err = 0;
const bad = m => { err++; if (err <= 30) console.log('✗ ' + m); };
// Après minification, on neutralise aussi les espaces facultatifs autour de , ( ) * / (lightningcss les garde dans les valeurs à var()).
const mini = css => transform({ filename: 'x.css', code: Buffer.from(css), minify: true }).code.toString().replace(/\s*([,()*/])\s*/g, '$1');

if (A.length !== B.length) bad(`nombre de blocs : ${A.length} → ${B.length}`);
for (let k = 0; k < Math.min(A.length, B.length); k++) {
  const x = A[k], y = B[k];
  if (x.t !== y.t) { bad(`bloc ${k} : ${x.t} → ${y.t}`); continue; }
  if (x.t === 'html') { if (x.v !== y.v) bad(`html du bloc ${k} modifié`); continue; }
  if (x.open !== y.open) bad(`balise du bloc ${k} modifiée`);
  if (x.t === 'style') {
    if (x.v === y.v) continue;
    let p, q; try { p = mini(x.v); q = mini(y.v); } catch (e) { p = x.v.replace(/\s+/g, ''); q = y.v.replace(/\s+/g, ''); }
    if (p !== q) bad(`CSS du bloc ${k} différent`);
    continue;
  }
  if (/type=/.test(x.open) && !/javascript|module/.test(x.open)) { if (x.v !== y.v) bad(`bloc ${k} (non JS) modifié`); continue; }
  const UA = units(x.v), UB = units(y.v);
  const pool = new Map();
  UA.forEach(u => { if (!pool.has(u.key)) pool.set(u.key, []); pool.get(u.key).push(u); });
  const seq = [];
  for (const u of UB) {
    const l = pool.get(u.key);
    if (!l || !l.length) { bad(`bloc ${k} : unité ajoutée ou modifiée : ${u.code.slice(0, 80)}`); continue; }
    seq.push(l.shift());
  }
  for (const l of pool.values()) for (const u of l) bad(`bloc ${k} : unité disparue : ${u.code.slice(0, 80)}`);
  let moved = 0;
  for (let i = 0; i < seq.length; i++) for (let j = i + 1; j < seq.length; j++) {
    const up = seq[i], down = seq[j];
    if (up.i < down.i) continue;
    moved++;
    const same = up.hoist && down.hoist && up.names[0] === down.names[0];
    if (same || !(up.inert || down.hoist))
      bad(`bloc ${k} : « ${up.code.slice(0, 50)} » ne peut pas passer avant « ${down.code.slice(0, 50)} »`);
  }
  if (moved) console.log(`bloc ${k} : ${moved} inversions d’ordre, toutes vérifiées`);
}
console.log(err ? `ÉCHEC : ${err} problème(s)` : 'OK : comportement identique');
process.exit(err ? 1 : 0);
