// Prépare www/ pour Capacitor (fonctionne sous Windows, Mac et Linux).
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), www = path.join(root, 'www');
fs.rmSync(www, { recursive: true, force: true }); fs.mkdirSync(www);
for (const f of fs.readdirSync(root)) if (/\.(png|webmanifest)$/.test(f) || f === 'index.html') fs.copyFileSync(path.join(root, f), path.join(www, f));
for (const d of ['voix', 'politique-confidentialite']) fs.cpSync(path.join(root, d), path.join(www, d), { recursive: true });
fs.copyFileSync(path.join(root, 'native', 'calmos-native.js'), path.join(www, 'calmos-native.js'));
const p = path.join(www, 'index.html'); let s = fs.readFileSync(p, 'utf8');
if (!s.includes('<head>')) throw new Error('<head> introuvable');
fs.writeFileSync(p, s.replace('<head>', '<head><script src="calmos-native.js"></script>'));
console.log('www/ prêt');
