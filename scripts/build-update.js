// Prépare une mise à jour "sans Play Store" : update/bundle-<version>.zip + update/latest.json
const fs = require('fs'), path = require('path'), cp = require('child_process'), AdmZip = require('adm-zip');
const root = path.join(__dirname, '..'), up = path.join(root, 'update');
cp.execSync('node scripts/build-www.js', { cwd: root, stdio: 'inherit' });
const native = /versionName "([^"]+)"/.exec(fs.readFileSync(path.join(root, 'android/app/build.gradle'), 'utf8'))[1];
const ver = native + '-' + new Date().toISOString().replace(/\D/g, '').slice(0, 12);
fs.rmSync(up, { recursive: true, force: true }); fs.mkdirSync(up);
const z = new AdmZip(); z.addLocalFolder(path.join(root, 'www')); z.writeZip(path.join(up, 'bundle-' + ver + '.zip'));
fs.writeFileSync(path.join(up, 'latest.json'), JSON.stringify({ version: ver, native, url: 'https://atplab.github.io/calmos/update/bundle-' + ver + '.zip' }));
console.log('Mise à jour prête :', ver);
