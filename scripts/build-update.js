// Prépare une mise à jour "sans Play Store" : update/bundle-<version>.zip + update/latest.json
const fs = require('fs'), path = require('path'), cp = require('child_process'), AdmZip = require('adm-zip');
const crypto = require('crypto');
const root = path.join(__dirname, '..'), up = path.join(root, 'update');
cp.execSync('node scripts/build-www.js', { cwd: root, stdio: 'inherit' });
const native = /versionName "([^"]+)"/.exec(fs.readFileSync(path.join(root, 'android/app/build.gradle'), 'utf8'))[1];
const ver = native + '-' + new Date().toISOString().replace(/\D/g, '').slice(0, 12);
fs.rmSync(up, { recursive: true, force: true }); fs.mkdirSync(up);
const z = new AdmZip(); z.addLocalFolder(path.join(root, 'www')); z.writeZip(path.join(up, 'bundle-' + ver + '.zip'));
const checksum = crypto.createHash('sha256').update(fs.readFileSync(path.join(up, 'bundle-' + ver + '.zip'))).digest('hex');
fs.writeFileSync(path.join(up, 'latest.json'), JSON.stringify({ version: ver, native, checksum, size: fs.statSync(path.join(up, 'bundle-' + ver + '.zip')).size, url: 'https://atplab.github.io/calmos-updates/bundle-' + ver + '.zip' }));
console.log('Mise à jour prête :', ver);
// Publie dans le dépôt séparé atplab/calmos-updates (un seul commit, remplacé à chaque fois : l'historique ne grossit pas)
const sh = c => cp.execSync(c, { cwd: up, stdio: 'inherit' });
sh('git init -q -b main'); sh('git add -A'); sh('git -c user.name=calmos -c user.email=nextonset@pm.me commit -qm ' + JSON.stringify('update ' + ver));
sh('git push -f https://github.com/atplab/calmos-updates.git main');
console.log('Publié. Disponible dans ~1 minute sur https://atplab.github.io/calmos-updates/latest.json');
