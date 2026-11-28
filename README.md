# Calmos

Application française de jeux relaxants : une PWA (un seul `index.html`) également empaquetée pour Android avec Capacitor.
Éditeur : Nextonset (Atplab).

> `index.html` est **généré**. Ne jamais l'éditer à la main : modifier les sources puis lancer `node scripts/build-index.js`.

## Structure

```
index.src.html        squelette de la page + marqueurs /*@inclure chemin*/
index.html            page assemblée (générée)
sw.js                 service worker (cache hors ligne, nom V='nds-gsNNN')
manifest.webmanifest  manifeste PWA, icônes *.png

shared/
  core/               socle commun à tous les jeux
    stockage.js       sauvegarde locale st.get / st.set (localStorage + cache mémoire)
    utils.js          petits outils : $, app, sh, today, dkey, ckey…
    actions-ui.js     table act : actions des boutons data-a="…" (complétée par chaque jeu)
    progression.js    état de partie, bulles (spend), mode illimité, frame(), msg(), keep(), win()
    registre-jeux.js  registre des jeux G, catégories GCAT, déblocages GUNL, paliers GSTEP
  input/              couche d'input unifiée (voir plus bas)

games/<jeu>/          un dossier par jeu
  jeu.js              logique et écran du jeu (fonction pXxx(r), actions act.*)
  musique.js          musique propre au jeu, quand il en a une
  …                   fichiers supplémentaires si le jeu est gros (moteur.js, plateau.js, monde-2.js…)

reste/                code pas encore réparti
  principal-N.js      gros script d'origine découpé autour des jeux extraits (numéros renumérotés à chaque extraction)
  styles-principal.css
  NNN-script.js / NNN-style.css   petits blocs d'origine (salons, réglages, styles…)

native/calmos-native.js   pont natif : AdMob/UMP, bouton retour Android, connexion
android/                  projet Capacitor (versionCode / versionName dans android/app/build.gradle)
functions/, firestore.rules, firebase.json   classements en ligne (Firebase)
politique-confidentialite/, suppression-compte/   pages publiques
scripts/                  build et outils (voir plus bas)
src/                      anciennes sources (historique, plus utilisées par le build)
```

### Jeux (`games/`)

| Famille | Dossiers |
| --- | --- |
| Arcade | casse-briques, recif-appetissant, attaque-marine, bulles, crabes-farceurs |
| Mots | jeu-de-mots, mots-croises, phrases-mysteres, mots-caches, mot-du-jour, anagrammes, quiz, tournade |
| Logique | sudoku, memoire, relie-les-points, nonogramme, labyrinthe, 2048 |
| Calmes | meditation, coloriage, cherche-et-trouve, demenagement |
| Blocs | tetris, enligne-bloc |
| Physique | fusion-a-gogo, air-hockey, billard |
| Table / action | galacfish, cuisine, peche, solitaire, cartes (salon) |
| Plateaux | motuiles, echecs, hoho, dames |
| Autres | carcache (contient aussi les salons RM, dans la même IIFE) |

### Web et mobile

Il n'y a pas de dossiers `web/` ni `mobile/` séparés : le même code tourne partout. Ce qui dépend de la plateforme est
regroupé ainsi :

- **détection de l'appareil** : `shared/input/appareil.js` (`Appareil.pc()`, `Appareil.tactile()`, `Appareil.manette()`), le seul endroit où ce test est fait ;
- **mobile (Android)** : `native/calmos-native.js` (pubs, bouton retour via `window.__calmosBack`, connexion) et le projet `android/` ;
- **web** : `sw.js` et `manifest.webmanifest` (installation PWA, hors ligne).

## Couche d'input (`shared/input/`)

La logique des jeux ne parle que d'**actions abstraites**, jamais directement du clavier, de la souris, du tactile ou de la manette.

| Fichier | Rôle |
| --- | --- |
| `actions.js` | catalogue `InputActions` : actions et touches par défaut |
| `gestionnaire.js` | `Input.sur(...)`, abonnements, `Input.enfonce(action)` |
| `clavier.js` | clavier → actions (une touche connue donne son action, un caractère seul donne `saisir`) |
| `souris.js` | souris / stylet → `toucher`, `glisser`, `lacher`, `survoler`, `defiler`, `menu` |
| `tactile.js` | écran tactile → `toucher`, `glisser`, `lacher`, `menu`, `balayer` |
| `manette.js` | manette : simule clavier et pointeur, donc marche partout sans code dans les jeux |
| `appareil.js` | type d'appareil |

### Actions

| Action | Sens | Touche par défaut |
| --- | --- | --- |
| `bougerGauche` / `bougerDroite` | aller à gauche / à droite | ← / → |
| `monter` / `descendre` | aller en haut / en bas | ↑ / ↓ |
| `sauter` | action principale (sauter, lancer, tirer…) | Espace |
| `valider` | valider | Entrée |
| `annuler` | annuler / revenir | Échap |
| `pause` | mettre en pause | — |
| `effacer` | effacer la dernière lettre | Retour arrière, Suppr |
| `saisir` | taper un caractère (`info.touche`) | tout caractère |
| `toucher` | appuyer sur un point (`info.x`, `info.y`, `info.cible`) | — |
| `glisser` | déplacer en restant appuyé | — |
| `lacher` | relâcher | — |
| `survoler` | déplacer la souris sans appuyer | — |
| `defiler` | molette / défilement (`info.dx`, `info.dy`) | — |
| `menu` | clic droit / appui long | — |
| `balayer` | geste de balayage (`info.direction`) | — |

Un jeu peut ajouter ses propres actions (ex. « tourner ») en les nommant dans son abonnement et en leur liant des touches.

### Utilisation

```js
const stop = Input.sur(["bougerGauche", "bougerDroite", "sauter"], (action, info) => {
  // info.source ("clavier" | "souris" | "tactile"), info.phase, info.evt (événement d'origine)
}, { touches: { a: "bougerGauche", d: "bougerDroite" } });

stop(); // se désabonner (à appeler quand on quitte le jeu)
```

Options :

- `cible` : élément, `document` ou `window` écouté (défaut `window` ; le canvas du jeu pour toucher/glisser) ;
- `capture`, `passive` : comme `addEventListener` ;
- `touches` : touches propres au jeu, prioritaires sur les touches par défaut ; `"*"` pour toutes ;
- `relache` : reçoit aussi les relâchements de touche (`info.phase = "relache"`) ;
- `annulation` : reçoit aussi `lacher` quand le contact est annulé (`pointercancel`) ;
- `sources` : limite aux méthodes listées (`["clavier"]`, `["souris", "tactile"]`…).

`Input.enfonce(action)` dit si la touche liée est tenue (jeux qui lisent l'état à chaque image).
Rien n'est écouté tant que personne n'est abonné.

Règles : les menus et boutons d'interface restent de simples clics DOM (`data-a="…"` → `act.*`) ; on n'ajoute pas de
contrôles ni d'indicateurs qui n'existent pas déjà. Quelques écouteurs restent directs exprès (`lostpointercapture`,
`dragstart`, clic capture anti-double, popovers du lobby de Galacfish).

## Build

```sh
npm install                    # une fois (acorn, prettier, lightningcss pour les outils)
node scripts/build-index.js    # index.src.html + sources → index.html
```

Chaque `/*@inclure chemin*/` de `index.src.html` est remplacé par le contenu du fichier. L'ordre des marqueurs est
l'ordre d'exécution : ne pas le changer sans raison.

Autres scripts :

- `npm run build:www` (`scripts/build-www.js`) : prépare `www/` pour Capacitor ; `npm run android` : build + `cap sync` + ouverture d'Android Studio ;
- `npm run update` (`scripts/build-update.js`, paquet `adm-zip`) : publie la mise à jour du contenu (OTA) dans le dépôt `atplab/calmos-updates`.

## Outils de refactorisation (`scripts/refacto/`)

| Outil | Usage |
| --- | --- |
| `decoupe.js` | étape 0, à usage unique : a éclaté l'ancien `index.html` en sources reformatées |
| `decouper.js` | `node scripts/refacto/decouper.js games/<jeu>/jeu.js "en-tête" "^début" "^suivant"` : sort un bloc contigu sur place sans changer l'ordre (`$` = jusqu'à la fin du fichier) |
| `proprietaire.js` | `node scripts/refacto/proprietaire.js pJeu` : liste les noms de haut niveau qui n'appartiennent qu'à ce jeu |
| `extraire.js` | `node scripts/refacto/extraire.js games/<jeu>/jeu.js "en-tête" nom1,nom2` : déplace ces déclarations à une place valide et renumérote `principal-N.js` |
| `verifier.js` | `node scripts/refacto/verifier.js avant.html index.html` : compare HTML, unités JS normalisées, ordre et CSS ; doit afficher « OK : comportement identique » (`--ajouts=Nom1,Nom2` autorise des déclarations nouvelles et inertes) |
| `lib.js` | fonctions communes aux outils |

Formatage : prettier, `printWidth` 110, `quoteProps: preserve`, `embeddedLanguageFormatting: off`.

## Marche à suivre après chaque modification

1. Modifier les sources (`games/`, `shared/`, `reste/`, `index.src.html`), jamais `index.html`.
2. Incrémenter le cache dans `sw.js` (`V='nds-gsNNN'`) et le pied de page (`Version vNNNN · gsNNN`, à chercher dans `reste/principal-*.js`).
3. `node scripts/build-index.js`.
4. Vérifier la syntaxe des scripts inline avec `node --check` (aucune erreur).
5. Pour un changement censé ne rien changer au comportement : garder l'ancien `index.html` et lancer `scripts/refacto/verifier.js`.
6. Publier l'artifact, puis tester.
7. Pousser : `git add -A .`, `git pull --rebase`, commit, `git push origin main` ; pour Android, `npm run update` (OTA).
8. Nouvelle version Play Store : incrémenter `versionCode` / `versionName` dans `android/app/build.gradle`.
