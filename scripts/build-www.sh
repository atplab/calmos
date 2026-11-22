#!/bin/sh
# Prépare www/ pour Capacitor à partir de la version web (index.html non modifié).
set -e
cd "$(dirname "$0")/.."
rm -rf www && mkdir www
cp index.html manifest.webmanifest *.png www/
cp -r voix politique-confidentialite www/
cp native/calmos-native.js www/
python3 - <<'P'
p='www/index.html'; s=open(p,encoding='utf8').read()
assert '<head>' in s
open(p,'w',encoding='utf8').write(s.replace('<head>','<head><script src="calmos-native.js"></script>',1))
P
echo "www/ prêt"
