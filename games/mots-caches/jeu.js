// Mots cachés (id « caches ») : grille classique (msBuild, pSearch0) et mode cascade (ca*, pCasc) ; pSearch(r) choisit le mode.
let msP = null;
const MSN = [
  6, 6, 7, 7, 8, 8, 9, 9, 7, 8, 8, 8, 9, 8, 9, 9, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 10, 10, 10, 11, 10, 10, 10, 10, 10, 10, 11, 10, 10,
  10, 11, 10, 10, 11, 11, 11, 10, 10, 10, 10, 11, 11, 11, 10, 11, 11, 10, 10, 11, 10, 11, 10, 10, 11, 10, 10,
  10, 11, 11, 11, 11, 10, 10, 11, 11, 10, 11, 11, 10, 10, 11, 11, 10, 11, 10, 11, 10, 10, 11, 11, 11, 11, 11,
  10, 10, 10, 11, 10, 11, 11, 10, 10, 10, 11, 10, 10, 11, 10, 11, 11, 11, 11, 11, 10, 10, 10, 10, 10, 11, 10,
  10, 11, 10, 10, 11, 10, 11, 10, 10, 11, 10, 10, 10, 11, 11, 10, 11, 11, 10, 11, 11, 10, 11, 11, 7, 7, 9, 8,
  8, 9, 9, 9, 9, 9,
];
const MSL = [
  ["AURORE", "PLAID", "ASTRE", "REVE"],
  ["BOUGIE", "COCON", "GIVRE", "TAPIS"],
  ["SILENCE", "VEILLE", "FROID", "LAMPE", "SOMMEIL"],
  ["LAINE", "ETOILE", "MIEL", "ECHARPE", "COUETTE"],
  ["CHEMINEE", "SAPIN", "HIVER", "GANTS", "FLAMME", "TRAINEAU"],
  ["LUMIERE", "BONNET", "BRAISE", "CALME", "REPOS", "VELOURS"],
  ["BRUME", "CACAO", "COTON", "LUTIN", "NEIGE", "LUNE", "CHOCOLAT"],
  ["FLOCON", "DOUCEUR", "CIEL", "NUIT", "TISANE", "GLACE", "SOUPE"],
  ["TUNNEL", "CARAFE", "MIDI", "CASCADE", "GARE"],
  ["ECUREUIL", "SAVANT", "SARDINE", "LENTILLE", "AVOINE", "CANARD"],
  ["SOLEIL", "SOURCE", "PANDA", "LECTURE", "ESCARGOT", "FORGERON"],
  ["ROSEE", "MELON", "MENTHE", "POULAIN", "FRAISE", "ORCHIDEE"],
  ["CLAIRIERE", "RIVAGE", "ROMARIN", "GIRAFE", "ETANG", "CANAPE"],
  ["RUISSEAU", "VALLEE", "CIGOGNE", "POIREAU", "CHOUETTE", "LOUTRE", "RACINE"],
  ["BISCUIT", "TAUPE", "OIGNON", "POMME", "PLUIE", "PORTE"],
  ["FENETRE", "HARENG", "VACHE", "CORIANDRE", "BOULANGER", "ORAGE", "CHORALE"],
  ["TAUREAU", "FIGUE", "ESPOIR", "BICHE", "BAGUETTE", "PRUNE", "CORAIL"],
  ["NOISETTE", "VENT", "MUGUET", "BRIOCHE", "BASILIC", "GUITARE", "CANNELLE"],
  ["ABRICOT", "BONBON", "CERISE", "PECHEUR", "PLAGE", "POIRE", "PLUME"],
  ["VOLCAN", "SAGESSE", "HARPE", "SALADE", "GROTTE", "LIVRE", "TENDRESSE"],
  ["MONTAGNE", "REFUGE", "SENTIER", "BOUSSOLE", "CHAMOIS", "CORDEE", "SOMMET"],
  ["PHARE", "MOUETTE", "GALET", "MAREE", "ECUME", "VOILIER", "PORT"],
  ["GRATIN", "FONDUE", "RAGOUT", "POTAGE", "CREPE", "BEIGNET", "COMPOTE"],
  ["ROMAN", "POEME", "CONTE", "PAGE", "SIGNET", "RECIT", "GRIMOIRE"],
  ["COMETE", "GALAXIE", "ORBITE", "PLANETE", "NEBULEUSE", "ECLIPSE", "SATURNE"],
  ["CHENE", "BOULEAU", "FOUGERE", "MOUSSE", "LICHEN", "HERISSON", "BLAIREAU"],
  ["PIANO", "MELODIE", "ACCORD", "TAMBOUR", "CANON", "REFRAIN", "BERCEUSE"],
  ["SERRE", "BULBE", "GRAINE", "TERREAU", "ARROSOIR", "JACINTHE", "AMARYLLIS"],
  ["GRENIER", "ESCALIER", "PARQUET", "VERANDA", "BUFFET", "HORLOGE", "FAUTEUIL"],
  ["THEIERE", "INFUSION", "VERVEINE", "TILLEUL", "JASMIN", "SUCRE", "TASSE"],
  ["PHOQUE", "MORSE", "PINGOUIN", "RENARD", "LAGOPEDE", "HERMINE", "BALEINE"],
  ["PINCEAU", "CRAYON", "ARGILE", "TOILE", "AQUARELLE", "FUSAIN", "CHEVALET"],
  ["VALISE", "TRAIN", "BILLET", "ESCALE", "CARTE", "HORIZON", "PASSAGER"],
  ["VEILLEUSE", "REVERIE", "BERCEAU", "OREILLER", "DUVET", "PYJAMA", "CHUCHOTER"],
  ["MACARON", "GUIMAUVE", "PRALINE", "MERINGUE", "CARAMEL", "NOUGATINE", "SABLE"],
  ["BARQUE", "ROSEAU", "MOULIN", "PONTON", "ECLUSE", "NENUPHAR", "LIBELLULE"],
  ["AIGUILLE", "PELOTE", "MAILLE", "TRICOT", "MOUFLE", "CHAUSSON", "CROCHET"],
  ["BUCHERON", "COPEAU", "RABOT", "ERABLE", "NOYER", "CABANE", "SCIURE"],
  ["PRINTEMPS", "AUTOMNE", "SOLSTICE", "EQUINOXE", "FEUILLE", "RECOLTE", "SAISON"],
  ["SERENITE", "GRATITUDE", "PATIENCE", "HARMONIE", "SOURIRE", "LUMINEUX", "PAISIBLE"],
  ["PATINOIRE", "BOURRASQUE", "CONGERE", "VERGLAS", "GIBOULEE", "FRIMAS", "BLIZZARD"],
  ["LOUVETEAU", "FAON", "OURSON", "CHATON", "POUSSIN", "CANETON", "AGNEAU"],
  ["MARMITE", "LOUCHE", "FOUET", "RAPE", "PASSOIRE", "ROULEAU", "TAMIS"],
  ["CATHEDRALE", "CLOCHER", "VITRAIL", "ARCADE", "PORCHE", "CLOITRE", "DONJON"],
  ["ALBATROS", "PELICAN", "HERON", "MESANGE", "ROUGEGORGE", "PINSON", "HIRONDELLE"],
  ["TOPAZE", "RUBIS", "EMERAUDE", "QUARTZ", "AGATE", "OPALE", "JADE"],
  ["CERCEAU", "TOUPIE", "MARELLE", "CERFVOLANT", "BILLE", "DOMINO", "PUZZLE"],
  ["DUNE", "OASIS", "MIRAGE", "CARAVANE", "SABLIER", "PALMIER", "CHAMEAU"],
  ["FROMAGE", "RACLETTE", "TARTIFLETTE", "COMTE", "REBLOCHON", "BEAUFORT", "TOMME"],
  ["ATELIER", "ENCLUME", "MARTEAU", "TENAILLE", "ETABLI", "SOUFFLET", "LIME"],
  ["NUAGE", "ARCENCIEL", "ECLAIR", "TONNERRE", "GRELE", "BROUILLARD", "AVERSE"],
  ["VIOLETTE", "PIVOINE", "LILAS", "GLYCINE", "CAPUCINE", "DAHLIA", "LAVANDE"],
  ["MARIONNETTE", "THEATRE", "RIDEAU", "COULISSE", "ACTEUR", "DECOR", "APPLAUDIR"],
  ["COQUELICOT", "BLEUET", "PRAIRIE", "MEULE", "EPI", "MOISSON", "GRANGE"],
  ["ARCHIPEL", "ATOLL", "LAGON", "RECIF", "ILOT", "CRIQUE", "PRESQUILE"],
  ["CARROSSE", "CHATEAU", "PRINCESSE", "DRAGON", "FEE", "SORCIER", "LICORNE"],
  ["GOELAND", "FALAISE", "EMBRUN", "BALISE", "CHALUTIER", "FILET", "QUAI"],
  ["CONFITURE", "TARTINE", "BEURRE", "CROISSANT", "PAIN", "JUS", "BOL"],
  ["BOUGEOIR", "CHANDELLE", "MECHE", "CIRE", "FLAMBEAU", "LUEUR", "ETINCELLE"],
  ["BONTE", "GENTILLESSE", "CONFIANCE", "ECOUTE", "PARTAGE", "ACCUEIL", "ENTRAIDE"],
  ["GALAXIE", "COMETE", "ORBITE", "NEBULEUSE", "TELESCOPE", "PLANETE", "METEORE"],
  ["POTAGER", "ARROSOIR", "SEMIS", "RATEAU", "BECHE", "COMPOST", "SERRE"],
  ["PARTITION", "MELODIE", "ACCORD", "HARPE", "TAMBOUR", "CHORALE", "REFRAIN"],
  ["CORAIL", "ANEMONE", "HIPPOCAMPE", "MEDUSE", "PLANCTON", "ALGUE", "OURSIN"],
  ["FONDUE", "SOUPE", "GRATIN", "POTEE", "RAGOUT", "CASSEROLE", "MIJOTER"],
  ["SOMMET", "GLACIER", "REFUGE", "CRAMPON", "ALPAGE", "MARMOTTE", "CASCADE"],
  ["ROMAN", "LIBRAIRE", "CHAPITRE", "POEME", "ETAGERE", "MARQUEPAGE", "FABLE"],
  ["ECARLATE", "TURQUOISE", "INDIGO", "AMBRE", "VERMILLON", "OCRE", "PERVENCHE"],
  ["POIRE", "CERISE", "ABRICOT", "FRAMBOISE", "PRUNE", "GROSEILLE", "MURE"],
  ["BOULANGER", "FORGERON", "MENUISIER", "POTIER", "TISSERAND", "JARDINIER", "LUTHIER"],
  ["BRUME", "ROSEE", "BRISE", "ZEPHYR", "EMBELLIE", "ONDEE", "CRACHIN"],
  ["GRENIER", "CAVE", "VERANDA", "PALIER", "ESCALIER", "VOLET", "LUCARNE"],
  ["VALISE", "BILLET", "ESCALE", "PASSEPORT", "HORAIRE", "VOYAGEUR", "BAGAGE"],
  ["PAPILLON", "COCCINELLE", "ABEILLE", "FOURMI", "CIGALE", "LUCIOLE", "GRILLON"],
  ["FOUGERE", "MOUSSE", "CHAMPIGNON", "SENTIER", "CLAIRIERE", "GLAND", "RESINE"],
  ["LUGE", "SLALOM", "PISTE", "CURLING", "PATIN", "BIATHLON", "BOBSLEIGH"],
  ["BRIOCHE", "GAUFRE", "CREPE", "BEIGNET", "MADELEINE", "FLAN", "TARTE"],
  ["GUITARE", "TROMPETTE", "CLARINETTE", "BASSON", "HAUTBOIS", "ACCORDEON", "XYLOPHONE"],
  ["LANTERNE", "GRIMOIRE", "POTION", "ENCHANTEUR", "OGRE", "LUTIN", "TALISMAN"],
  ["BERCEUSE", "VEILLEUSE", "DOUDOU", "SIESTE", "OREILLER", "NUITEE", "SONGE"],
  ["ASTROLABE", "SEXTANT", "LATITUDE", "MERIDIEN", "ATLAS", "GLOBE"],
  ["TOURNESOL", "MARGUERITE", "JONQUILLE", "TULIPE", "PETALE", "PISTIL", "ETAMINE"],
  ["CYMBALE", "TRIANGLE", "TIMBALE", "SAXOPHONE", "HARMONICA", "OCARINA", "BANJO"],
  ["LAGUNE", "ESTUAIRE", "BOUEE", "CABOTAGE", "NAUFRAGE", "TEMPETE", "VAGUELETTE"],
  ["CHARPENTE", "POUTRE", "CLOISON", "MORTIER", "TRUELLE", "PLAFOND", "FAITAGE"],
  ["FOURRURE", "GRIFFE", "MUSEAU", "MOUSTACHE", "QUEUE", "PATTE", "SABOT"],
  ["LAVANDIN", "THYM", "SAUGE", "CERFEUIL", "CIBOULETTE", "ESTRAGON"],
  ["TOBOGGAN", "CRAMPONS", "RAQUETTE", "BATON", "MITAINE", "ANORAK", "PARKA"],
  ["PIROUETTE", "ENTRECHAT", "BALLERINA", "ARABESQUE", "SCENE", "ORCHESTRE", "FOSSE"],
  ["CARAMBOLE", "PAPAYE", "GOYAVE", "LITCHI", "MANGUE", "ANANAS", "GRENADE"],
  ["LIBELLE", "ARAIGNEE", "SCARABEE", "MOUSTIQUE", "CHENILLE", "CHRYSALIDE", "CRIQUET"],
  ["DROMADAIRE", "ZEBRE", "ELEPHANT", "RHINOCEROS", "GAZELLE", "ANTILOPE", "LEOPARD"],
  ["BALANCOIRE", "SEAU", "PELLE", "CERISIER", "BILLES", "CORDE"],
  ["SCAPHANDRE", "SOUSMARIN", "PERISCOPE", "ANCRE", "GOUVERNAIL", "HUBLOT", "PROUE"],
  ["CHEVREUIL", "SANGLIER", "LIEVRE", "BELETTE", "HULOTTE", "MARCASSIN", "CAMPAGNOL"],
  ["PALETTE", "GOUACHE", "PASTEL", "CROQUIS", "VERNIS", "SCULPTURE", "FRESQUE"],
  ["TAPISSERIE", "RIDEAUX", "COMMODE", "LUSTRE", "GUERIDON", "ARMOIRE", "CHEVET"],
  ["NAVETTE", "SATELLITE", "FUSEE", "ASTRONAUTE", "JUPITER", "NEPTUNE"],
  ["VANILLE", "GINGEMBRE", "CARDAMOME", "SAFRAN", "MUSCADE", "REGLISSE"],
  ["CREPUSCULE", "ZENITH", "OMBRE", "REFLET", "FIRMAMENT", "ECLAIRCIE", "LUMINAIRE", "CLARTE", "TENEBRES"],
  ["MARTEAU", "SCIE", "CLOU", "VIS", "ETABLI", "PINCE", "RABOT", "LIME", "EQUERRE"],
  ["POELE", "LOUCHE", "FOUET", "PASSOIRE", "BOL", "ASSIETTE"],
  ["RUE", "PONT", "PLACE", "MAIRIE", "MARCHE", "GARE", "QUAI", "SQUARE", "FONTAINE"],
  ["PLAGE", "DUNE", "GALET", "VAGUE", "SABLE", "RIVAGE", "FALAISE", "MAREE"],
  ["GENOU", "COUDE", "EPAULE", "POIGNET", "CHEVILLE", "TALON", "NUQUE", "MENTON"],
  ["PERE", "MERE", "FRERE", "SOEUR", "ONCLE", "TANTE", "COUSIN", "NEVEU"],
  ["CRAYON", "CAHIER", "GOMME", "REGLE", "CARTABLE", "TABLEAU", "CRAIE", "TROUSSE", "LECON"],
  ["NEIGE", "GRELE", "ORAGE", "TONNERRE", "ECLAIR", "VERGLAS", "BRUINE", "AVERSE"],
  ["ROSE", "LILAS", "PIVOINE", "IRIS", "MUGUET", "VIOLETTE", "ORCHIDEE", "PENSEE"],
  ["MERLE", "PIGEON", "MOINEAU", "FAUCON", "CYGNE", "PINSON"],
  ["PEINTRE", "PLOMBIER", "MACON", "MEDECIN", "PILOTE", "FACTEUR", "CUISINIER", "AVOCAT"],
  ["BRIE", "COMTE", "CHEVRE", "ROQUEFORT", "CAMEMBERT", "MUNSTER", "REBLOCHON", "CANTAL"],
  ["TRAIN", "METRO", "TRAMWAY", "BATEAU", "VELO", "CAMION", "AVION", "SCOOTER", "FERRY"],
  ["CHENE", "HETRE", "SAPIN", "ERABLE", "TILLEUL", "BOULEAU", "PEUPLIER", "FRENE", "SAULE"],
  ["CAROTTE", "POIREAU", "NAVET", "COURGE", "CHOUX", "RADIS", "ENDIVE", "ARTICHAUT"],
  ["DRAGON", "LICORNE", "SIRENE", "FEE", "GEANT", "TROLL", "SPHINX", "CENTAURE", "PHENIX"],
  ["FRANCE", "ITALIE", "ESPAGNE", "SUEDE", "NORVEGE", "GRECE", "BRESIL", "CANADA", "JAPON"],
  ["ATOME", "MOLECULE", "CELLULE", "ENERGIE", "GRAVITE", "PRISME", "LASER", "FOSSILE"],
  ["LIANE", "SAVANE", "OASIS", "CACTUS", "JUNGLE", "TOUCAN", "SINGE", "JAGUAR", "MIRAGE"],
  ["HORLOGE", "SECONDE", "MINUTE", "SEMAINE", "SAISON", "AGENDA", "AUBE", "MIDI", "SOIREE"],
  ["STYLO", "AGRAFE", "CLASSEUR", "TAMPON", "BUREAU", "LAMPE"],
  ["CLOWN", "TRAPEZE", "CHAPITEAU", "PISTE", "JONGLEUR", "MAGICIEN", "ACROBATE", "FAKIR", "LION"],
  ["ECLAIR", "CHOUX", "MACARON", "PRALINE", "CARAMEL", "CREME", "FONDANT", "MERINGUE"],
  ["DAUPHIN", "BALEINE", "REQUIN", "RAIE", "THON", "HOMARD", "CRABE", "MORUE"],
  ["ALTITUDE", "COL", "PENTE", "VERSANT", "ARETE", "CRETE", "SENTIER", "TORRENT"],
  ["BARRIERE", "PORTAIL", "ALLEE", "PELOUSE", "HAIE", "MASSIF", "BASSIN", "TERRASSE"],
  ["NOTE", "PORTEE", "CLEF", "SOLFEGE", "TEMPO", "RYTHME", "OCTAVE", "DUO"],
  ["CARTE", "BOUSSOLE", "ROUTE", "FRONTIERE", "DOUANE", "AUBERGE", "SAC", "PORT", "TRAJET"],
  ["SCENARIO", "ACTEUR", "CAMERA", "FILM", "ECRAN", "SALLE"],
  ["CHATEAU", "DONJON", "CHEVALIER", "ARMURE", "EPEE", "BLASON", "TOURNOI", "REMPART"],
  ["PIRATE", "ILE", "COFFRE", "PERROQUET", "ABORDAGE", "BUTIN", "CANON", "VOILE", "ESCALE"],
  ["THE", "CAFE", "TISANE", "CHOCOLAT", "LAIT", "JUS", "CIDRE", "SIROP"],
  ["MATELAS", "TRAVERSIN", "CHEVET", "RIDEAU", "TAPIS", "ARMOIRE", "LUSTRE", "PLAID"],
  ["TENNIS", "RUGBY", "JUDO", "BOXE", "GOLF", "NATATION", "ESCRIME", "VOLLEY", "HANDBALL"],
  ["DAMES", "ECHECS", "DOMINO", "LOTO", "TAROT", "BELOTE", "POKER", "PUZZLE", "CARTES"],
  ["SERPENT", "LEZARD", "CAMELEON", "TORTUE", "CROCODILE", "IGUANE", "VIPERE", "GECKO", "CAIMAN"],
  ["NOIX", "NOISETTE", "AMANDE", "PISTACHE", "CAJOU", "CHATAIGNE", "DATTE", "FIGUE", "RAISIN"],
  ["BAGUE", "COLLIER", "BRACELET", "DIAMANT", "RUBIS", "SAPHIR", "EMERAUDE", "PERLE", "BROCHE"],
  ["MANTEAU", "CHEMISE", "JUPE", "ROBE", "PANTALON", "CHAUSSON"],
  ["VOLCAN", "LAVE", "CRATERE", "GEYSER", "GRANIT", "CALCAIRE"],
  ["GATEAU", "BOUGIES", "INVITE", "CHANSON", "SURPRISE", "PINATA", "FETE", "JEUX", "GOUTER"],
  ["LION", "GIRAFE", "HYENE", "BUFFLE", "GNOU", "SURICATE", "GUEPARD", "AUTRUCHE", "PANTHERE"],
  ["BINETTE", "SERPETTE", "FUMIER", "ENGRAIS", "BOUTURE", "GREFFE", "TAILLE", "ARROSAGE"],
  ["VACHE", "CHEVAL", "MOUTON", "POULE", "COCHON", "GRANGE", "ETABLE", "FOIN"],
  ["STROPHE", "RIME", "VERS", "SONNET", "ODE", "BALLADE", "METAPHORE", "ELEGIE"],
  ["LUEUR", "FAISCEAU", "LAMPION", "PHARE", "NEON", "BOUGEOIR", "ECLAT", "CHANDELLE", "TORCHE"],
  ["NOCTURNE", "LUNE", "HIBOU", "VEILLEE", "OBSCUR", "CIEL", "ZENITHAL", "NUAGE", "CHUCHOTER"],
  ["BOUTIQUE", "BOULEVARD", "TROTTOIR", "FEUX", "CARREFOUR", "BANC", "ENSEIGNE", "KIOSQUE", "ARRET"],
  ["SOURCE", "RUISSEAU", "GUE", "BERGE", "MOULIN", "ECLUSE", "NENUPHAR", "ROSEAU"],
  ["BAGUETTE", "PAIN", "FARINE", "LEVURE", "PETRIN", "FOURNIL", "CROUTE", "MIE"],
  ["CONTE", "PRINCE", "PRINCESSE", "SORCIERE", "CHAPERON", "LOUP"],
  ["GOUTTE", "FLAQUE", "ETANG", "MARE", "LAC", "FLEUVE", "OCEAN", "PLUIE"],
  ["ENGRENAGE", "PISTON", "MOTEUR", "ROUE", "LEVIER", "POULIE", "RESSORT", "BOULON", "ECROU"],
  ["SIROP", "PILULE", "PANSEMENT", "AMPOULE", "VACCIN", "CACHET", "GELULE", "DOSE"],
  ["COLONNE", "ARCHE", "VOUTE", "DOME", "FRONTON", "PORCHE"],
  ["PINCEAU", "CHEVALET", "TOILE", "PORTRAIT", "PAYSAGE", "ENCRE"],
  ["VALSE", "TANGO", "SALSA", "BALLET", "POLKA", "POINTES", "FARANDOLE", "MAZURKA", "RONDE"],
  ["MARMITE", "COCOTTE", "TERRINE", "ECUMOIRE", "ENTONNOIR", "RAPE", "HACHOIR", "TAMIS"],
  ["AUBADE", "SERENADE", "REVERIE", "ASSOUPI", "BAILLER", "DORMIR"],
  ["BAMBOU", "PALMIER", "LIERRE", "ORTIE", "TREFLE", "CHARDON", "BRUYERE", "GENET", "FOUGERAIE"],
  ["ACIDE", "BASE", "SEL", "ALCOOL", "FUMEE", "CRISTAL", "ALLIAGE", "METAL", "MINERAL"],
  ["PHARES", "JETEE", "CHALUTIER", "VOILIER", "AMARRE", "ECUEIL", "CAP", "BRISANT", "ANCRAGE"],
  ["NIVEAU", "SCORE", "BONUS", "MANETTE", "JOUEUR", "QUETE", "PIXEL", "AVATAR", "NIVEAUX"],
  ["TERRIER", "NID", "RUCHE", "TANIERE", "CLAPIER", "NICHOIR", "PONTE", "COQUILLE", "GITE"],
  ["ROUGE", "ORANGE", "JAUNE", "VIOLET", "BLEU", "VERT", "MAUVE", "BEIGE", "GRIS"],
  ["ANGLE", "CERCLE", "CARRE", "LOSANGE", "RAYON", "SOMME", "DIVISER", "FRACTION"],
  ["JOIE", "CALME", "TENDRESSE", "ESPOIR", "FIERTE", "ENVIE", "DOUCEUR", "SERENITE", "RIRE"],
  ["NOEL", "HOTTE", "ANGE", "CRECHE", "BERGER"],
  ["CADEAU", "RUBAN", "PAPIER", "BOULE", "CLOCHE"],
  ["GUIRLANDE", "MARRON", "DINDE", "BUCHE", "NOUGAT", "TRUFFE"],
  ["RENNE", "ORANGE", "LETTRE", "POUPEE", "PELUCHE", "ENFANT"],
  ["SANTON", "MAGES", "COURONNE", "FAMILLE", "GALETTE"],
  ["TOAST", "COUPE", "HUITRE", "SAUMON", "DESSERT", "EPICES"],
  ["MINUIT", "REVEILLON", "CONFETTI", "PETARD", "SERPENTIN"],
  ["CHAMPAGNE", "BALLON", "DANSE", "FESTIN", "VIOLON", "FLUTE"],
  ["MANDARINE", "VISITE", "PLATEAU", "COUSSIN", "FEVE", "CALIN"],
  ["SANTE", "BONHEUR", "AMOUR", "CHANCE", "AMITIE", "PROMESSE"],
];
function msBuild(e) {
  if (msP && msP.l === e) return msP;
  const E0 = e;
  e = e >= 1e9 ? NLS.caches + e - 1e9 : e;
  const Gm = E0 < 1e9 ? msGen(e) : null,
    t = Gm ? Gm.n : MSN[e],
    a = rng(977 * e + 31),
    s = e >= 14,
    n = e >= 99 && e < 167 ? +MST[e - 99] : -1,
    o = n >= 1,
    i = 2 === n,
    r = i ? 12 : 1 === n ? 8 : 5,
    l = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ].concat(
      s
        ? [
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
          ]
        : [],
    ),
    c = () => [...(Gm ? Gm.w : MSL[e])].sort((e, t) => t.length - e.length),
    d = (e, n) => {
      const o = Array.from({ length: t }, () => Array(t).fill("")),
        i = {};
      let c = 0,
        d = 0;
      for (const s of e) {
        const e = [];
        for (let a = 0; a < t; a++)
          for (let n = 0; n < t; n++)
            for (const i of l) {
              const r = a + i[0] * (s.length - 1),
                l = n + i[1] * (s.length - 1);
              if (r < 0 || r >= t || l < 0 || l >= t) continue;
              let c = 0,
                d = !1;
              for (let e = 0; e < s.length; e++) {
                const t = o[a + i[0] * e][n + i[1] * e];
                if (t) {
                  if (t !== s[e]) {
                    d = !0;
                    break;
                  }
                  c++;
                }
              }
              !d && c < s.length && e.push([a, n, i, c]);
            }
        if (!e.length) return null;
        let n = 0;
        for (const t of e) n += 1 + t[3] * r;
        let f = a() * n,
          u = e[e.length - 1];
        for (const t of e)
          if (((f -= 1 + t[3] * r), f < 0)) {
            u = t;
            break;
          }
        const [h, p, m, b] = u;
        ((c += b), m[0] && m[1] && d++, (i[s] = []));
        for (let e = 0; e < s.length; e++) {
          const t = h + m[0] * e,
            a = p + m[1] * e;
          ((o[t][a] = s[e]), i[s].push(t + "," + a));
        }
      }
      return c >= n && (!s || d >= 2) ? { WS: e, g: o, pos: i } : null;
    };
  let f = null;
  for (const e of o ? (i ? [6, 5, 4, 3, 2, 1, 0] : [3, 2, 1, 0]) : [2, 1, 0]) {
    for (let t = 0; t < (o ? 12 : 25) && !f; t++) {
      const t = c();
      for (let a = 0; a < 40 && !f; a++) f = d(t, e);
    }
    if (f) break;
  }
  const { WS: u, g: h, pos: p } = f,
    m = [];
  let b = null;
  if (o) {
    const s = u.join(""),
      n = u.map((e) => e[0]).join("");
    b = () => (a() < 0.55 ? n[Math.floor(a() * n.length)] : s[Math.floor(a() * s.length)]);
    const o = i ? (e < 130 ? 2 : 3) : 1;
    for (const e of [...u]
      .filter((e) => e.length >= 5)
      .sort(() => a() - 0.5)
      .slice(0, o)) {
      let n = "";
      for (let t = 0; t < 40 && !n; t++) {
        const t = 1 + Math.floor(a() * (e.length - 1)),
          o = s[Math.floor(a() * s.length)];
        if (o !== e[t]) {
          const a = e.slice(0, t) + o + e.slice(t + 1);
          u.includes(a) || (n = a);
        }
      }
      if (!n) continue;
      const o = [];
      for (let e = 0; e < t; e++)
        for (let a = 0; a < t; a++)
          for (const s of l) {
            const i = e + s[0] * (n.length - 1),
              r = a + s[1] * (n.length - 1);
            if (i < 0 || i >= t || r < 0 || r >= t) continue;
            let l = 0,
              c = !1;
            for (let t = 0; t < n.length; t++) {
              const o = h[e + s[0] * t][a + s[1] * t];
              if (o) {
                if (o !== n[t]) {
                  c = !0;
                  break;
                }
                l++;
              }
            }
            !c && l < n.length && o.push([e, a, s]);
          }
      if (!o.length) continue;
      const [i, r, c] = o[Math.floor(a() * o.length)];
      for (let e = 0; e < n.length; e++) h[i + c[0] * e][r + c[1] * e] = n[e];
      m.push(n);
    }
  }
  for (let e = 0; e < t; e++)
    for (let s = 0; s < t; s++) h[e][s] || (h[e][s] = b ? b() : "ABCDEFGHILMNOPRSTUV"[Math.floor(19 * a())]);
  return (msP = { l: e, N: t, WS: u, g: h, pos: p, DC: m });
}
const CADIR = [
  [1, 0],
  [0, 1],
  [1, 1],
  [1, -1],
];
const caRng = (e) => {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), 1 | e)),
      (e ^= e + Math.imul(e ^ (e >>> 7), 61 | e)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
};
const caShuf = (e, t) => {
  for (let a = (e = e.slice()).length - 1; a > 0; a--) {
    const s = Math.floor(t() * (a + 1));
    [e[a], e[s]] = [e[s], e[a]];
  }
  return e;
};
function caWords(e, t, a) {
  const s = [];
  for (let n = 0; n < 6 && s.length < t; n++) {
    const o = THW[(7 * e + 3 + 11 * n) % THW.length].filter(
      (e) => e.length >= 3 && e.length <= 7 && !s.includes(e),
    );
    caShuf(o, a).forEach((e) => {
      s.length < t && s.push(e);
    });
  }
  return s;
}
const caGet = (e, t, a) => (t >= 0 && t < 8 && a >= 0 && a < 8 && a < e[t].length ? e[t][a].ch : null);
function caOcc(e, t) {
  const a = [],
    s = new Set(),
    n = [...t].reverse().join(""),
    o = t === n ? [t] : [t, n];
  for (let t = 0; t < 8; t++)
    for (let n = 0; n < e[t].length; n++)
      for (const [i, r] of CADIR)
        for (const l of o) {
          let o = !0;
          const c = [];
          for (let a = 0; a < l.length; a++) {
            const s = t + i * a,
              d = n + r * a;
            if (caGet(e, s, d) !== l[a]) {
              o = !1;
              break;
            }
            c.push([s, d]);
          }
          if (o) {
            const e = c
              .map((e) => e.join(":"))
              .sort()
              .join("|");
            s.has(e) || (s.add(e), a.push(c));
          }
        }
  return a;
}
function caRemove(e, t) {
  const a = e.map(() => new Set());
  return (t.forEach(([e, t]) => a[e].add(t)), e.map((e, t) => e.filter((e, s) => !a[t].has(s))));
}
function caSolve(e, t, a, s) {
  if (!t.length) return !0;
  const n = e.map((e) => e.map((e) => e.ch).join("")).join("|") + "#" + t.join(",");
  if (a.has(n)) return a.get(n);
  if (--s.n < 0) return !0;
  let o = !1;
  for (const n of t) {
    for (const i of caOcc(e, n))
      if (
        caSolve(
          caRemove(e, i),
          t.filter((e) => e !== n),
          a,
          s,
        )
      ) {
        o = !0;
        break;
      }
    if (o) break;
  }
  return (a.set(n, o), o);
}
const caOk = (e, t) => caSolve(e, t, new Map(), { n: 6e3 });
function caChain(e, t) {
  let a = t.slice();
  for (; a.length;) {
    const t = a.map((t) => [t, caOcc(e, t)]).filter((e) => e[1].length);
    if (1 !== t.length) return !1;
    ((e = caRemove(e, t[0][1][0])), (a = a.filter((e) => e !== t[0][0])));
  }
  return !0;
}
function caGen(e, t, a, s, n) {
  s = s || 8;
  for (let o = 0; o < (n ? 900 : 80); o++) {
    let o = 0;
    const i = Array.from({ length: 8 }, () => []),
      r = [...new Set(e.join(""))];
    for (let e = 0; e < 8; e++) {
      const a = Math.floor(3 * t()) + (t() < 0.5 ? 1 : 0);
      for (let s = 0; s < a; s++) i[e].push({ ch: r[Math.floor(t() * r.length)], id: o++ });
    }
    let l = !0;
    for (let a = e.length - 1; a >= 0 && l; a--) {
      const n = t() < 0.5 ? e[a] : [...e[a]].reverse().join(""),
        r = n.length,
        c = [],
        d = i.map((e) => e.length);
      for (const [e, t] of CADIR)
        for (let a = 0; a < 8; a++)
          for (let n = 0; n < s; n++) {
            const o = n + t * (r - 1);
            if (a + e * (r - 1) >= 8 || o < 0 || o >= s) continue;
            let i = !0;
            const l = new Array(8).fill(0);
            for (let s = 0; s < r; s++) {
              const o = a + e * s,
                r = n + t * s;
              if (0 === e) {
                if (0 === s && r > d[o]) {
                  i = !1;
                  break;
                }
              } else if (r > d[o]) {
                i = !1;
                break;
              }
              l[o]++;
            }
            if (i) {
              for (let e = 0; e < 8; e++)
                if (d[e] + l[e] > s) {
                  i = !1;
                  break;
                }
              i && c.push([e, t, a, n]);
            }
          }
      if (!c.length) {
        l = !1;
        break;
      }
      const [f, u, h, p] = c[Math.floor(t() * c.length)];
      for (let e = 0; e < r; e++) i[h + f * e].splice(p + u * e, 0, { ch: n[e], id: o++ });
    }
    if (
      l &&
      caOk(i, e) &&
      (!a || e.filter((e) => !caOcc(i, e).length).length >= a) &&
      (s <= 8 || i.reduce((e, t) => e + Math.max(0, t.length - 8), 0) >= 3) &&
      (!n || caChain(i, e))
    )
      return i;
  }
  return null;
}
function caBoard(e, t, a, s, n, o) {
  for (let i = 0; i < 12; i++) {
    const r = caWords(e + 97 * i, t, a),
      l = caGen(r, a, s, n, o);
    if (l) return { WS: r, cols: l };
  }
  return null;
}
function pCasc(e) {
  const t = "caches" === INFG,
    a = t ? 0 : lvD("caches");
  let s = 1,
    n = 0,
    o = 0,
    i = 6e4,
    r = null,
    l = !1,
    c = Math.floor(1e9 * Math.random()),
    d = [],
    f = [],
    u = [],
    h = [],
    p = null,
    m = null,
    b = null,
    g = !1,
    E = null,
    y = null,
    v = !1;
  const A = () => {
    const e = t
        ? Math.min(7, 4 + Math.floor((s - 1) / 2))
        : 99 === a
          ? 6
          : a >= 100
            ? 7 + Math.min(2, Math.floor((a - 100) / 5))
            : 4 + Math.min(3, Math.floor(a / 8)),
      n = caRng(t ? 31 * c + 977 * s : 977 * a + 31),
      o = caBoard(t ? s : a, e, n, !t && a >= 49 ? 2 : 0, !t && a >= 100 ? 11 : 8, !t && 99 === a);
    ((d = o.WS), (f = o.cols), (u = []), (h = []));
  };
  if ((A(), !t && e && e.cs && Array.isArray(e.M)))
    try {
      const t = [];
      for (const a of e.M) {
        const e = a.c;
        if (!d.includes(a.w)) throw 0;
        if (
          !caOcc(f, a.w).some(
            (t) =>
              t
                .map((e) => e.join(":"))
                .sort()
                .join("|") ===
              e
                .map((e) => e.join(":"))
                .sort()
                .join("|"),
          )
        )
          throw 0;
        ((f = caRemove(f, e)), u.push(a.w), t.push(a));
      }
      h = t;
    } catch (e) {
      A();
    }
  ((snap = () => (t ? null : { cs: 1, M: h })),
    t || 0 !== a || st.get("can", 0) || ((v = !0), st.set("can", 1)),
    (act.cax = () => {
      ((v = !1), x());
    }));
  const S = (e) => 7 - e,
    x = () => {
      const e = new Set();
      E && E.forEach(([t, a]) => e.add(S(a) + "," + t));
      let a = "";
      for (let t = 0; t < 8; t++)
        for (let s = 0; s < 8; s++) {
          const n = S(t),
            o = f[s][n],
            i = t + "," + s;
          if (!o) {
            a += `<span class="sc ce" data-v="${i}"></span>`;
            continue;
          }
          const r = y && y[o.id] ? y[o.id] : 0;
          a += `<button class="sc ca${e.has(i) ? " f" : ""}${p === i ? " st" : ""}${m === i ? " hn" : ""}${r ? " fl" : ""}" data-a="sg" data-v="${i}"${r ? ` style="--k:${r}"` : ""}>${o.ch}</button>`;
        }
      y = null;
      const o = t
        ? `<div class="cah"><div class="cat"><small>Vague</small><b>${s}</b></div><div class="cat"><small>Score</small><b id="cas">${n}</b></div><div class="cat tm"><small>Temps</small><b id="cat">${Math.ceil(i / 1e3)} s</b></div></div><div class="cab"><i id="cab" style="width:${Math.max(0, Math.min(100, i / 600))}%"></i></div>`
        : "";
      frame(
        `${v ? '<div class="dnote" role="note"><span>Cascade : quand tu trouves un mot, il disparaît et les lettres au-dessus tombent. Les mots changent de place à chaque fois !</span><button data-a="cax" aria-label="Fermer">OK</button></div>' : ""}${o}${f.some((e) => e.length > 8) ? `<div class="chx" style="--n:8" aria-hidden="true">${f.map((e) => `<i${e.length > 8 ? ' class="h"' : ""}></i>`).join("")}</div>` : ""}<div class="sg ca" style="--n:8">${a}</div><p class="sw">${d.map((e) => `<span class="${u.includes(e) ? "d" : ""}">${e}</span>`).join("")}</p>${t ? '<p class="note" style="text-align:center">Trouve un maximum de mots avant la fin du temps.</p>' : ""}`,
        t ? 0 : 1,
      );
    };
  act.car = () => {
    ((INFG = "caches"), pCasc(void 0), window.scrollTo(0, 0));
  };
  const M = (e) => {
    if (g || l) return;
    const a = ((e) => e.map(([e, t]) => [t, S(e)]))(e);
    if (a.some(([e, t]) => !f[e][t])) return (x(), msg("Il y a un trou dans la ligne."));
    const o = a.map(([e, t]) => f[e][t].ch).join(""),
      r = [...o].reverse().join(""),
      c = d.filter((e) => !u.includes(e)),
      p = c.find((e) => e === o || e === r);
    if (!p) return (x(), msg("Pas ici…"));
    const m = caRemove(f, a),
      b = c.filter((e) => e !== p);
    if (!caOk(m, b)) return (x(), msg("Ce mot-là n’est pas encore à toi : essaie-en un autre."));
    ((g = !0),
      (E = a),
      sfx(660, 0.4),
      vib(15),
      u.push(p),
      h.push({ w: p, c: a }),
      t && ((n += 10 * p.length), (i = Math.min(6e4, i + 4e3))),
      x(),
      msg("✦ " + p),
      setTimeout(() => {
        const e = {};
        if (
          (f.forEach((t, a) =>
            t.forEach((t, a) => {
              e[t.id] = a;
            }),
          ),
          (f = m),
          (E = null),
          (y = {}),
          f.forEach((t) =>
            t.forEach((t, a) => {
              const s = e[t.id] - a;
              s > 0 && (y[t.id] = s);
            }),
          ),
          (g = !1),
          u.length === d.length)
        ) {
          if (t)
            return (
              (n += 50 * s),
              (i = Math.min(6e4, i + 15e3)),
              s++,
              A(),
              (y = {}),
              f.forEach((e) =>
                e.forEach((e, t) => {
                  y[e.id] = 8 - t;
                }),
              ),
              void x()
            );
          (x(), setTimeout(win, 900));
        } else x();
      }, 520));
  };
  ((act.sg = (e) => {
    if (g || l) return;
    if (!p) return ((p = e), (m = null), x());
    if (p === e) return ((p = null), x());
    const [t, a] = p.split(",").map(Number),
      [s, n] = e.split(",").map(Number),
      o = s - t,
      i = n - a;
    if (((p = null), 0 !== o && 0 !== i && Math.abs(o) !== Math.abs(i)))
      return (x(), msg("En ligne droite, doucement."));
    const r = Math.max(Math.abs(o), Math.abs(i)),
      c = Math.sign(o),
      d = Math.sign(i);
    M(Array.from({ length: r + 1 }, (e, s) => [t + c * s, a + d * s]));
  }),
    (act.hint = () => {
      if (t || g) return;
      const e = d.filter((e) => !u.includes(e));
      for (const t of e)
        for (const a of caOcc(f, t))
          if (
            caOk(
              caRemove(f, a),
              e.filter((e) => e !== t),
            )
          ) {
            if (!spend(1)) return;
            return ((m = S(a[0][1]) + "," + a[0][0]), void x());
          }
    }));
  const L = (e) => {
    const t = document.elementFromPoint(e.clientX, e.clientY),
      a = t && t.closest ? t.closest(".sc") : null;
    return a && a.dataset.v ? a.dataset.v.split(",").map(Number) : null;
  };
  ((wsG = {
    down: (e) => {
      if (g || l) return;
      const t = L(e);
      t && (b = { r: t[0], c: t[1], path: [t], on: !1 });
    },
    move: (e) => {
      if (!b) return;
      const t = L(e);
      if (!t) return;
      const a = ((e, t, a, s) => {
        const n = a - e,
          o = s - t;
        if (!n && !o) return [[e, t]];
        const i = (Math.round(Math.atan2(n, o) / (Math.PI / 4)) * Math.PI) / 4,
          r = Math.round(Math.sin(i)),
          l = Math.round(Math.cos(i));
        let c = Math.round((n * r + o * l) / (r * r + l * l));
        for (c < 0 && (c = 0); c > 0 && (e + r * c < 0 || e + r * c >= 8 || t + l * c < 0 || t + l * c >= 8);)
          c--;
        return Array.from({ length: c + 1 }, (a, s) => [e + r * s, t + l * s]);
      })(b.r, b.c, t[0], t[1]);
      (a.length > 1 && !b.on && ((b.on = !0), (p = null), (m = null)),
        b.on &&
          ((b.path = a),
          ((e) => {
            const t = new Set(e.map(([e, t]) => 8 * e + t));
            app.querySelectorAll(".sg .sc").forEach((e, a) => e.classList.toggle("st", t.has(a)));
          })(a)));
    },
    up: () => {
      if (!b) return;
      const e = b;
      ((b = null),
        e.on &&
          ((wsSw = !0),
          setTimeout(() => {
            wsSw = !1;
          }, 60),
          M(e.path)));
    },
    cancel: () => {
      (b && b.on && x(), (b = null));
    },
  }),
    x(),
    t &&
      (() => {
        (clearInterval(r), (o = performance.now()));
        let e = o;
        r = setInterval(() => {
          if (!playing || !$("#cat")) return void clearInterval(r);
          const t = performance.now();
          (g || l || (i -= t - e), (e = t));
          const a = $("#cat"),
            o = $("#cab");
          (a && (a.textContent = Math.max(0, Math.ceil(i / 1e3)) + " s"),
            o && (o.style.width = Math.max(0, Math.min(100, i / 600)) + "%"),
            i <= 0 &&
              !l &&
              ((l = !0),
              clearInterval(r),
              (() => {
                const e = infSave("caches", n);
                frame(
                  `<section class="glass story pt-caches"><h2>Temps écoulé</h2><p>Vague ${s} · ${n} pts${e ? " · nouveau record !" : " · record : " + infBest("caches") + " pts"}</p><button class="btn" data-a="car">Rejouer</button></section>`,
                  0,
                );
              })()));
        }, 120);
      })());
}
function pSearch(e) {
  return caOn() || "caches" === INFG ? pCasc(e) : pSearch0(e);
}
function pSearch0(e) {
  const { N: t, WS: a, g: s, pos: n, DC: o } = msBuild(lv),
    i = e && Array.isArray(e.F) ? e.F.filter((e) => a.includes(e)) : [],
    r = { P: e && e.P && "object" == typeof e.P ? e.P : {} };
  let l = null,
    c = null,
    d = null;
  snap = () => ({ F: i, P: r.P });
  let f = lv >= 14 && !st.get("dgn", 0);
  f && st.set("dgn", 1);
  let u = lv >= 99 && lv < 167 && +MST[lv - 99] >= 1 && !st.get("hdn", 0);
  (u && st.set("hdn", 1),
    (act.dhx = () => {
      ((u = !1), h());
    }),
    (act.dgx = () => {
      ((f = !1), h());
    }));
  const h = () => {
      const e = new Set();
      (i.forEach((t) => ((r.P && r.P[t]) || n[t]).forEach((t) => e.add(t))),
        frame(
          `${u ? '<div class="dnote" role="note"><span>Niveaux difficiles : mots qui se chevauchent, faux amis (mots presque identiques), lettres leurres et plus de mots à trouver.</span><button data-a="dhx" aria-label="Fermer">OK</button></div>' : ""}${f ? '<div class="dnote" role="note"><span>Nouveau : à partir de ce niveau, les mots peuvent aussi se cacher en diagonale.</span><button data-a="dgx" aria-label="Fermer">OK</button></div>' : ""}<div class="sg" style="--n:${t}">${s
            .map((t, a) =>
              t
                .map((t, s) => {
                  const n = a + "," + s;
                  return `<button class="sc ${e.has(n) ? "f" : ""} ${l === n ? "st" : ""} ${c === n ? "hn" : ""}" data-a="sg" data-v="${n}">${t}</button>`;
                })
                .join(""),
            )
            .join(
              "",
            )}</div><p class="sw">${a.map((e) => `<span class="${i.includes(e) ? "d" : ""}">${e}</span>`).join("")}</p>`,
          1,
        ));
    },
    p = (e) => {
      const t = e.map(([e, t]) => s[e][t]).join(""),
        n = a.find((e) => e === t || e === [...t].reverse().join(""));
      n && i.includes(n)
        ? (h(), msg("Déjà trouvé"))
        : n
          ? (i.push(n),
            (r.P[n] = e.map(([e, t]) => e + "," + t)),
            sfx(660, 0.4),
            vib(15),
            h(),
            msg("✦ " + n),
            i.length === a.length && setTimeout(win, 900))
          : (h(), msg(o.includes(t) || o.includes([...t].reverse().join("")) ? "Faux ami !" : "Pas ici…"));
    };
  ((act.sg = (e) => {
    if (!l) return ((l = e), (c = null), h());
    if (l === e) return ((l = null), h());
    const [t, a] = l.split(",").map(Number),
      [s, n] = e.split(",").map(Number),
      o = s - t,
      i = n - a;
    if (((l = null), 0 !== o && 0 !== i && Math.abs(o) !== Math.abs(i)))
      return (h(), msg("En ligne droite, doucement."));
    const r = Math.max(Math.abs(o), Math.abs(i)),
      d = Math.sign(o),
      f = Math.sign(i);
    p(Array.from({ length: r + 1 }, (e, s) => [t + d * s, a + f * s]));
  }),
    (act.hint = () => {
      const e = a.filter((e) => !i.includes(e));
      e.length && spend(1) && ((c = n[e[0]][0]), h());
    }));
  const m = (e) => {
    const t = document.elementFromPoint(e.clientX, e.clientY),
      a = t && t.closest ? t.closest(".sc") : null;
    return a ? a.dataset.v.split(",").map(Number) : null;
  };
  ((wsG = {
    down: (e) => {
      const t = m(e);
      t && (d = { r: t[0], c: t[1], path: [t], on: !1 });
    },
    move: (e) => {
      if (!d) return;
      const a = m(e);
      if (!a) return;
      const s = ((e, a, s, n) => {
        const o = s - e,
          i = n - a;
        if (!o && !i) return [[e, a]];
        const r = (Math.round(Math.atan2(o, i) / (Math.PI / 4)) * Math.PI) / 4,
          l = Math.round(Math.sin(r)),
          c = Math.round(Math.cos(r));
        let d = Math.round((o * l + i * c) / (l * l + c * c));
        for (d < 0 && (d = 0); d > 0 && (e + l * d < 0 || e + l * d >= t || a + c * d < 0 || a + c * d >= t);)
          d--;
        return Array.from({ length: d + 1 }, (t, s) => [e + l * s, a + c * s]);
      })(d.r, d.c, a[0], a[1]);
      (s.length > 1 && !d.on && ((d.on = !0), (l = null), (c = null)),
        d.on &&
          ((d.path = s),
          ((e) => {
            const a = new Set(e.map(([e, a]) => e * t + a));
            app.querySelectorAll(".sc").forEach((e, t) => e.classList.toggle("st", a.has(t)));
          })(s)));
    },
    up: () => {
      if (!d) return;
      const e = d;
      ((d = null),
        e.on &&
          ((wsSw = !0),
          setTimeout(() => {
            wsSw = !1;
          }, 60),
          p(e.path)));
    },
    cancel: () => {
      (d && d.on && h(), (d = null));
    },
  }),
    h());
}
