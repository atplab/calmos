# Publier Calmos sur Google Play (Capacitor)

## Construire
1. `npm i` puis `./scripts/build-www.sh && npx cap sync android` (à refaire après chaque changement d'index.html).
2. `npx cap open android` (Android Studio). Build > Generate Signed Bundle > **AAB**. Garde le keystore et son mot de passe en lieu sûr (jamais dans git).
3. Avant chaque envoi : augmente `versionCode` (et `versionName`) dans `android/app/build.gradle`.

## Avant la mise en production
- AdMob : créer l'app et un bloc **récompensé**, puis remplacer dans `native/calmos-native.js` l'ID de bloc de test, et dans `AndroidManifest.xml` l'ID d'application de test (`ca-app-pub-3940256099942544~3347511713`). Configurer le message de consentement (UMP) dans AdMob.
- L'ID `com.nextonset.calmos` est définitif une fois publié.
- Boutique Stripe masquée en magasin (`inStore()`), v1 sans achat intégré ; pour en ajouter plus tard : Play Billing.
- Console Play : politique de confidentialité (`politique-confidentialite/`), Sécurité des données, classification IARC, déclaration des pubs, suppression de compte (URL web + bouton dans l'app), test fermé (12 testeurs / 14 jours pour un compte personnel récent).
- Fiche : icône 512, image 1024×500, captures.

## Connexion Google et achats (à configurer)
- **Connexion Google** : dans `native/calmos-native.js`, remplacer `WEB_CLIENT_ID` par le client OAuth « Web » du projet Firebase. Dans Google Cloud > Identifiants, créer aussi un client OAuth **Android** (paquet `com.nextonset.calmos` + empreinte SHA-1 de la clé de **signature Play**, visible dans la console Play > Intégrité de l'app).
- **Achats** : dans la console Play, créer 5 produits **consommables** `bulles_p1` … `bulles_p5` (mêmes paquets/prix que la boutique web). Lier le projet Google Cloud (Play Console > Configuration > Accès à l'API) et donner à `calmonus@appspot.gserviceaccount.com` l'accès aux finances/commandes. Puis `cd functions && npm i && firebase deploy --only functions` (nouvelle fonction `verifyPlayPurchase`).
- Tester avec un compte testeur de licence (achats de test sans débit).
