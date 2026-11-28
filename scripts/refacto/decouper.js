// Sort un bloc CONTIGU d'un fichier reste/principal-N.js vers un fichier de jeu, sur place (aucun changement d'ordre),
// puis renumérote les principal-N.js. Utile quand le jeu contient des instructions qui ne sont pas des déclarations
// (Object.assign(act, …), IIFE…) qu'extraire.js ne sait pas déplacer.
// Usage : node scripts/refacto/decouper.js games/<jeu>/jeu.js "Commentaire d'en-tête" "^début" "^suivant"
//   début   : regex de la première ligne du bloc (incluse)
//   suivant : regex de la première ligne APRÈS le bloc (exclue), cherchée après le début
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..', '..'), R = (f) => path.join(root, f);
const [cible, tete, rd, rf] = process.argv.slice(2);
let src = fs.readFileSync(R('index.src.html'), 'utf8');
const fichiers = [...src.matchAll(/\/\*@inclure (reste\/principal-\d+\.js)\*\//g)].map((x) => x[1]);
let f, L, a = -1, b = -1;
for (f of fichiers) {
  L = fs.readFileSync(R(f), 'utf8').split('\n');
  a = L.findIndex((l) => new RegExp(rd).test(l));
  if (a >= 0) break;
}
if (a < 0) throw 'début introuvable';
b = L.findIndex((l, i) => i > a && new RegExp(rf).test(l));
if (b < 0) throw 'suivant introuvable dans ' + f;
fs.mkdirSync(path.dirname(R(cible)), { recursive: true });
fs.writeFileSync(R(cible), (tete ? '// ' + tete + '\n' : '') + L.slice(a, b).join('\n').replace(/\n+$/, '') + '\n');
const avant = L.slice(0, a).join('\n').replace(/\n+$/, '') + '\n', apres = L.slice(b).join('\n');
// Renumérotation : f devient [f, cible, f+1], les suivants sont décalés de 1.
const n = +f.match(/(\d+)\.js$/)[1], max = Math.max(...fichiers.map((x) => +x.match(/(\d+)\.js$/)[1]));
for (let i = max; i > n; i--) fs.renameSync(R(`reste/principal-${i}.js`), R(`reste/principal-${i + 1}.js`));
fs.writeFileSync(R(f), avant);
fs.writeFileSync(R(`reste/principal-${n + 1}.js`), apres);
for (let i = max; i > n; i--) src = src.replace(`/*@inclure reste/principal-${i}.js*/`, `/*@inclure reste/principal-${i + 1}.js*/`);
src = src.replace(`/*@inclure ${f}*/`, `/*@inclure ${f}*/\n/*@inclure ${cible}*/\n/*@inclure reste/principal-${n + 1}.js*/`);
fs.writeFileSync(R('index.src.html'), src);
console.log(`${cible} : lignes ${a + 1}–${b} de ${f} ; ${max + 1} fichiers principal`);
