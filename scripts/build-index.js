// Assemble index.html à partir de index.src.html : chaque marqueur /*@inclure chemin*/ est remplacé par le fichier.
// Usage : node scripts/build-index.js   (à lancer après chaque modification des sources)
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const src = fs.readFileSync(path.join(root, 'index.src.html'), 'utf8');
let n = 0;
const out = src.replace(/\/\*@inclure ([^*\s]+)\*\//g, (m, f) => (n++, fs.readFileSync(path.join(root, f), 'utf8')));
fs.writeFileSync(path.join(root, 'index.html'), out);
console.log(`index.html assemblé (${n} fichiers, ${(out.length / 1e6).toFixed(2)} Mo)`);
