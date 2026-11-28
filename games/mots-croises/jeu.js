// Mots croisés (id « croises ») : grilles CW, génération cwGen et le jeu pCross(r).
const CW = [
  [
    ["LEWIS", "Auteur des Chroniques de Narnia", 4, 0, "h"],
    ["POLE", "1929 : l’aviateur Richard Byrd survole le … Sud", 1, 1, "v"],
    ["NARNIA", "1898 : naissance de C. S. Lewis, créateur du monde de …", 0, 3, "v"],
    ["ALCOTT", "1832 : naissance de Louisa May …, autrice des « Quatre Filles du docteur March »", 1, 3, "h"],
    ["ATARI", "Entreprise qui a lancé Pong", 0, 8, "v"],
    ["PONG", "1972 : sortie de ce jeu vidéo de tennis de table", 0, 6, "v"],
  ],
  [
    ["LIBAN", "1943 : ce pays du Proche-Orient devient indépendant", 3, 3, "h"],
    ["GIDE", "1869 : naissance de l’écrivain André …", 2, 4, "v"],
    ["LILLE", "Ville natale de Charles de Gaulle", 5, 0, "h"],
    ["GAULLE", "1890 : naissance à Lille du général de …", 1, 0, "v"],
    ["PIXAR", "1995 : sortie de « Toy Story », premier long métrage du studio …", 0, 6, "v"],
    ["GAMA", "1497 : Vasco de … double le cap de Bonne-Espérance", 1, 0, "h"],
    ["CAP", "Pointe de terre avancée dans la mer, comme celui de Bonne-Espérance", 0, 4, "h"],
  ],
  [
    ["NYMPHEAS", "Fleurs aquatiques peintes par Monet", 3, 1, "h"],
    ["MONET", "1840 : naissance du peintre Claude …, père de l’impressionnisme", 3, 3, "v"],
    ["LUNE", "Destination d’Apollo 12", 0, 6, "v"],
    ["GIVERNY", "Village normand où Monet cultivait son jardin", 6, 0, "h"],
    ["APOLLO", "1969 : lancement de la mission … 12 vers la Lune", 0, 3, "h"],
    ["BLY", "1889 : la journaliste Nellie … part faire le tour du monde", 1, 2, "v"],
  ],
  [
    ["BATEAU", "« Steamboat Willie » se passe sur ce moyen de transport", 4, 1, "h"],
    ["TRAIN", "1883 : les compagnies de … américaines adoptent l’heure standard", 4, 3, "v"],
    ["HEURE", "1883 : les fuseaux horaires unifient l’… aux États-Unis", 0, 4, "v"],
    ["SOURIS", "Animal star de Disney", 2, 6, "v"],
    ["DISNEY", "Walt … crée Mickey", 8, 0, "h"],
    ["MICKEY", "1928 : première apparition de la souris … au cinéma", 1, 0, "h"],
  ],
  [
    ["LONDRES", "Ville où l’on tire des feux d’artifice chaque 5 novembre", 7, 0, "h"],
    ["PARLEMENT", "Bâtiment londonien visé par Guy Fawkes en 1605", 0, 2, "v"],
    ["FAWKES", "1605 : Guy … tente de faire sauter le Parlement anglais", 2, 6, "v"],
    ["POUDRE", "Le complot de 1605 porte le nom de cette substance explosive", 0, 2, "h"],
    ["ROI", "1605 : le complot visait Jacques Ier, … d’Angleterre", 2, 2, "h"],
    ["FEUX", "Les … d’artifice illuminent la Bonfire Night", 4, 1, "h"],
  ],
  [
    ["TELEVISION", "1936 : la BBC lance à Londres le premier service régulier de …", 4, 0, "h"],
    ["DEFUNTS", "Le 2 novembre, on se souvient des fidèles …", 0, 9, "v"],
    ["RADIO", "1920 : la station KDKA lance la première émission commerciale de …", 1, 5, "v"],
    ["DAKOTA", "1889 : le Nord et le Sud deviennent deux États américains portant ce nom", 2, 0, "h"],
    ["STATION", "2000 : le premier équipage s’installe dans la … spatiale internationale", 0, 7, "v"],
  ],
  [
    ["PHARAON", "1922 : Howard Carter trouve l’entrée de la tombe d’un jeune …", 4, 0, "h"],
    ["OBAMA", "2008 : Barack … est élu président des États-Unis", 0, 2, "v"],
    ["HONGRIE", "1956 : l’armée soviétique entre à Budapest, capitale de la …", 0, 1, "h"],
    ["TOMBE", "Ce que Carter découvre dans la Vallée des Rois", 3, 5, "v"],
    ["CARTER", "1922 : l’archéologue Howard … met au jour des marches enfouies", 7, 1, "h"],
    ["EGYPTE", "Pays de Toutânkhamon", 1, 0, "v"],
  ],
  [
    ["LUNOKHOD", "1970 : premier robot mobile sur la Lune, … 1", 6, 0, "h"],
    ["CANAL", "Voie d’eau qui relie la Méditerranée à la mer Rouge", 2, 0, "v"],
    ["EUGENIE", "L’impératrice … assiste à l’inauguration en 1869", 2, 2, "v"],
    ["LESSEPS", "Ferdinand de …, promoteur français du canal", 8, 1, "h"],
    ["EGYPTE", "Pays du canal de Suez", 2, 2, "h"],
    ["SUEZ", "1869 : inauguration du canal de …", 0, 7, "v"],
  ],
  [
    ["GALAXIE", "La Voie lactée en est une", 3, 0, "h"],
    ["MARS", "La planète rouge", 2, 1, "v"],
    ["ECLIPSE", "La Lune y cache le Soleil", 0, 5, "v"],
    ["ORBITE", "Trajectoire d’un satellite autour d’une planète", 0, 0, "h"],
    ["SATURNE", "Planète aux célèbres anneaux", 2, 3, "v"],
    ["COMETE", "Astre chevelu à longue queue", 8, 0, "h"],
  ],
  [
    ["OPERA", "Spectacle où les acteurs chantent", 3, 0, "h"],
    ["PIANO", "Instrument à 88 touches", 3, 1, "v"],
    ["SOLFEGE", "Apprentissage de la lecture des notes", 7, 0, "h"],
    ["MOZART", "Compositeur de « La Flûte enchantée »", 0, 4, "v"],
    ["VIOLON", "Instrument à cordes joué avec un archet", 1, 0, "h"],
    ["HARPE", "Grand instrument à cordes pincées", 3, 6, "v"],
  ],
  [
    ["CORAIL", "Il forme des récifs dans les mers chaudes", 0, 3, "v"],
    ["BALEINE", "Le plus grand des mammifères marins", 5, 1, "h"],
    ["MAREE", "Montée et descente de la mer", 1, 7, "v"],
    ["ECUME", "Mousse blanche des vagues", 0, 2, "h"],
    ["ANCRE", "On la jette pour immobiliser le bateau", 2, 0, "h"],
    ["PHARE", "Il guide les marins la nuit", 0, 0, "v"],
  ],
  [
    ["GLACIER", "Fleuve de glace", 0, 5, "v"],
    ["CHAMOIS", "Agile animal des Alpes", 4, 0, "h"],
    ["EVEREST", "Plus haut sommet du monde", 6, 2, "h"],
    ["SOMMET", "Point le plus haut d’une montagne", 1, 8, "v"],
    ["REFUGE", "Abri pour randonneurs en altitude", 0, 1, "h"],
    ["COL", "Passage entre deux montagnes", 4, 0, "v"],
  ],
  [
    ["CHEVALET", "Support du tableau en cours", 0, 3, "v"],
    ["PALETTE", "Le peintre y mélange ses couleurs", 6, 0, "h"],
    ["PICASSO", "Peintre de « Guernica »", 3, 1, "v"],
    ["PINCEAU", "Outil du peintre", 0, 0, "h"],
    ["LOUVRE", "Musée parisien de la Joconde", 9, 0, "h"],
    ["TOILE", "Support tendu du tableau", 2, 6, "v"],
  ],
  [
    ["SOUFFLE", "Plat qui gonfle à la cuisson", 3, 0, "h"],
    ["RECETTE", "Liste d’étapes pour préparer un plat", 0, 6, "v"],
    ["CREPE", "Fine galette de la Chandeleur", 1, 2, "h"],
    ["FOUET", "Ustensile pour monter les blancs en neige", 5, 2, "h"],
    ["FOUR", "On y cuit le gâteau", 3, 4, "v"],
    ["SEL", "Il relève les plats", 3, 0, "v"],
  ],
  [
    ["CHAMPIGNON", "Il pousse sous les arbres après la pluie", 6, 0, "h"],
    ["ECUREUIL", "Rongeur roux qui cache des noisettes", 0, 5, "v"],
    ["SENTIER", "Petit chemin dans les bois", 4, 0, "h"],
    ["MOUSSE", "Elle tapisse les troncs humides", 0, 0, "h"],
    ["CHENE", "Arbre dont le fruit est le gland", 3, 9, "v"],
    ["HIBOU", "Rapace nocturne aux aigrettes", 2, 1, "h"],
  ],
  [
    ["MOLIERE", "Auteur du « Malade imaginaire »", 0, 4, "v"],
    ["ROMAN", "Long récit de fiction", 1, 3, "h"],
    ["POEME", "Texte écrit en vers", 4, 0, "h"],
    ["FABLE", "Court récit de La Fontaine avec une morale", 0, 6, "v"],
    ["VERNE", "Auteur de « Vingt Mille Lieues sous les mers »", 6, 0, "h"],
    ["HUGO", "Auteur des « Misérables »", 1, 1, "v"],
  ],
  [
    ["AMAZONE", "Fleuve d’Amérique du Sud", 0, 4, "v"],
    ["ISLANDE", "Île des volcans et des geysers", 5, 0, "h"],
    ["SAHARA", "Grand désert d’Afrique", 2, 1, "h"],
    ["ANDES", "Chaîne de montagnes d’Amérique du Sud", 2, 6, "v"],
    ["OCEAN", "Vaste étendue d’eau salée", 0, 1, "h"],
    ["NIL", "Fleuve d’Égypte", 4, 0, "v"],
  ],
  [
    ["ARROSOIR", "Il donne à boire aux plantes", 1, 0, "h"],
    ["GRAINE", "On la sème pour faire pousser une plante", 0, 7, "v"],
    ["TULIPE", "Fleur emblème des Pays-Bas", 3, 4, "h"],
    ["RATEAU", "Outil pour ramasser les feuilles", 0, 0, "v"],
    ["ROSE", "Fleur à épines", 0, 9, "v"],
    ["POTAGER", "Jardin des légumes", 5, 2, "h"],
  ],
  [
    ["SLALOM", "Descente entre des piquets", 0, 6, "v"],
    ["PATIN", "On le chausse pour glisser sur la glace", 2, 5, "h"],
    ["BIATHLON", "Ski de fond et tir à la carabine", 4, 0, "h"],
    ["SKI", "Glisse sur deux lattes", 0, 6, "h"],
    ["CURLING", "On y fait glisser des pierres sur la glace", 0, 1, "v"],
    ["LUGE", "Petit traîneau pour descendre les pentes", 1, 0, "h"],
  ],
  [
    ["ANE", "Cousin du cheval aux longues oreilles", 5, 2, "h"],
    ["COCHON", "Animal rose qui aime la boue", 0, 3, "v"],
    ["MOUTON", "On le tond pour sa laine", 1, 2, "h"],
    ["VACHE", "Elle donne du lait", 3, 0, "h"],
    ["CHEVAL", "On le monte au galop", 0, 0, "v"],
    ["POULE", "Elle pond des œufs", 0, 6, "v"],
  ],
  [
    ["CURIE", "Marie …, deux fois prix Nobel", 2, 6, "v"],
    ["MICROSCOPE", "Instrument pour voir l’infiniment petit", 2, 0, "h"],
    ["ATOME", "Plus petite partie d’un élément", 0, 4, "v"],
    ["NEWTON", "Savant de la pomme et de la gravitation", 1, 9, "v"],
    ["ENERGIE", "Capacité à produire un travail", 6, 0, "h"],
    ["AIMANT", "Il attire le fer", 0, 1, "h"],
  ],
  [
    ["CENDRILLON", "Elle perd sa pantoufle de verre", 6, 0, "h"],
    ["PERRAULT", "Auteur des « Contes de ma mère l’Oye »", 0, 7, "v"],
    ["DRAGON", "Créature qui crache du feu", 1, 9, "v"],
    ["LOUP", "Il veut manger le Petit Chaperon rouge", 0, 4, "h"],
    ["OGRE", "Géant qui dévore les enfants dans les contes", 0, 5, "v"],
    ["FEE", "Personnage à baguette magique", 5, 1, "v"],
  ],
  [
    ["MONTMARTRE", "Colline parisienne du Sacré-Cœur", 4, 0, "h"],
    ["EIFFEL", "Gustave …, ingénieur de la célèbre tour", 0, 9, "v"],
    ["SEINE", "Fleuve qui traverse Paris", 0, 5, "h"],
    ["METRO", "Train souterrain", 0, 1, "v"],
    ["PONT", "Il enjambe la rivière", 1, 3, "v"],
    ["ARC", "… de Triomphe", 3, 6, "v"],
  ],
  [
    ["BRUME", "Léger brouillard", 0, 6, "v"],
    ["VENT", "Il souffle fort pendant la tempête", 4, 5, "h"],
    ["TONNERRE", "Bruit qui suit l’éclair", 1, 1, "h"],
    ["ORAGE", "Il gronde avec éclairs et tonnerre", 1, 2, "v"],
    ["NUAGE", "Il cache le soleil", 3, 0, "h"],
    ["GRELE", "Pluie de glace", 5, 0, "h"],
  ],
  [
    ["CERVEAU", "Organe de la pensée", 2, 4, "v"],
    ["DENT", "On la brosse matin et soir", 6, 3, "h"],
    ["SQUELETTE", "Ensemble des os", 0, 6, "v"],
    ["GENOU", "Articulation au milieu de la jambe", 8, 0, "h"],
    ["COEUR", "Il bat dans la poitrine", 4, 0, "h"],
    ["POUMON", "Organe de la respiration", 0, 1, "v"],
  ],
  [
    ["TROMPETTE", "Cuivre à pistons", 4, 1, "h"],
    ["TAMBOUR", "On le frappe avec des baguettes", 0, 3, "v"],
    ["GUITARE", "Instrument à six cordes", 0, 0, "h"],
    ["FLUTE", "Instrument à vent en bois ou en métal", 1, 7, "v"],
    ["ORGUE", "Grand instrument d’église", 6, 2, "h"],
    ["CHEF", "… d’orchestre", 2, 9, "v"],
  ],
  [
    ["NAPOLEON", "Empereur des Français en 1804", 8, 0, "h"],
    ["BASTILLE", "Prison prise le 14 juillet 1789", 1, 5, "v"],
    ["PYRAMIDE", "Tombeau des pharaons", 2, 2, "h"],
    ["GAULOIS", "Ancien peuple de la Gaule", 6, 2, "h"],
    ["CHATEAU", "Demeure fortifiée du seigneur", 4, 2, "h"],
    ["ROI", "Louis XIV en était un", 0, 7, "v"],
  ],
  [
    ["PASSEPORT", "Document pour voyager à l’étranger", 0, 5, "v"],
    ["BOUSSOLE", "Son aiguille indique le nord", 6, 0, "h"],
    ["VALISE", "On y range ses affaires pour partir", 1, 7, "v"],
    ["AVION", "Il vole d’un aéroport à l’autre", 3, 1, "v"],
    ["CARTE", "Elle montre le chemin", 8, 2, "h"],
    ["GARE", "On y attend le train", 3, 0, "h"],
  ],
  [
    ["NID", "Maison des oisillons", 2, 5, "v"],
    ["HIRONDELLE", "Elle annonce le printemps", 4, 0, "h"],
    ["MESANGE", "Petit oiseau à tête bleue ou noire", 2, 1, "h"],
    ["AIGLE", "Rapace des montagnes", 0, 9, "v"],
    ["PIE", "Oiseau noir et blanc qui aime ce qui brille", 0, 2, "v"],
    ["PLUME", "Elle couvre l’oiseau", 0, 2, "h"],
  ],
  [
    ["MOUFLE", "Gant sans doigts séparés", 0, 4, "v"],
    ["IGLOO", "Maison de glace", 4, 2, "h"],
    ["FLOCON", "Petit cristal de neige", 1, 0, "h"],
    ["BONNET", "Il garde la tête au chaud", 3, 6, "v"],
    ["ECHARPE", "On l’enroule autour du cou", 7, 0, "h"],
    ["GIVRE", "Il blanchit les vitres", 3, 0, "v"],
  ],
  [
    ["CEPE", "Champignon prisé des cueilleurs", 3, 9, "v"],
    ["FEUILLE", "Elle tombe en automne", 6, 3, "h"],
    ["PLUIE", "Elle mouille les trottoirs", 3, 6, "v"],
    ["OCTOBRE", "Dixième mois de l’année", 0, 4, "v"],
    ["CITROUILLE", "Grosse courge orange", 0, 0, "h"],
    ["CHATAIGNE", "Fruit à bogue qu’on fait griller", 0, 0, "v"],
  ],
  [
    ["JONQUILLE", "Fleur jaune du printemps", 0, 6, "v"],
    ["BOURGEON", "Il éclot sur la branche", 1, 0, "h"],
    ["ABEILLE", "Elle fabrique le miel", 0, 0, "v"],
    ["PAQUES", "Fête des œufs en chocolat", 8, 2, "h"],
    ["AVRIL", "Mois des poissons farceurs", 6, 2, "h"],
    ["LILAS", "Arbuste aux grappes mauves parfumées", 4, 0, "h"],
  ],
  [
    ["SOLEIL", "Astre qui nous éclaire", 0, 6, "v"],
    ["PARASOL", "Il protège du soleil sur le sable", 1, 1, "h"],
    ["GLACE", "Dessert froid en cornet", 5, 5, "h"],
    ["VACANCES", "Période sans école", 3, 0, "h"],
    ["JUILLET", "Mois de la fête nationale", 0, 9, "v"],
    ["PLAGE", "On y bronze au bord de la mer", 1, 1, "v"],
  ],
  [
    ["OLYMPE", "Montagne des dieux grecs", 1, 0, "h"],
    ["ULYSSE", "Héros de l’« Odyssée »", 0, 1, "v"],
    ["HERCULE", "Héros aux douze travaux", 0, 5, "v"],
    ["MINOTAURE", "Monstre du labyrinthe de Crète", 1, 3, "v"],
    ["ZEUS", "Roi des dieux grecs", 7, 1, "h"],
    ["ATHENA", "Déesse grecque de la sagesse", 9, 0, "h"],
  ],
  [
    ["CHAPLIN", "Charlie …, le créateur de Charlot", 1, 0, "h"],
    ["LUMIERE", "Les frères … ont inventé le cinématographe", 1, 4, "v"],
    ["CAMERA", "Elle filme les scènes", 0, 2, "v"],
    ["ACTEUR", "Il joue un rôle", 7, 1, "h"],
    ["CESAR", "Récompense du cinéma français", 3, 6, "v"],
    ["ECRAN", "On y projette le film", 0, 0, "v"],
  ],
  [
    ["CACAO", "Fève du chocolat", 0, 2, "v"],
    ["MACARON", "Petit gâteau rond aux amandes", 2, 0, "h"],
    ["MIEL", "Les abeilles le fabriquent", 2, 0, "v"],
    ["TARTE", "Pâte garnie de fruits", 0, 4, "v"],
    ["VANILLE", "Gousse parfumée", 0, 6, "v"],
    ["CARAMEL", "Sucre fondu et doré", 6, 1, "h"],
  ],
  [
    ["POIRE", "Fruit en forme de goutte", 1, 9, "v"],
    ["KIWI", "Fruit poilu à chair verte", 3, 6, "h"],
    ["CERISE", "Petit fruit rouge à noyau", 0, 7, "v"],
    ["MANGUE", "Fruit tropical à gros noyau plat", 1, 2, "h"],
    ["ANANAS", "Fruit tropical à couronne", 0, 4, "v"],
    ["FRAISE", "Fruit rouge du printemps", 5, 0, "h"],
  ],
  [
    ["BOULANGER", "Il fait le pain", 0, 6, "v"],
    ["MEDECIN", "Il soigne les malades", 5, 0, "h"],
    ["FACTEUR", "Il distribue le courrier", 8, 0, "h"],
    ["POMPIER", "Il éteint les incendies", 0, 3, "v"],
    ["PILOTE", "Il conduit l’avion", 0, 1, "v"],
    ["JUGE", "Il rend la justice", 2, 5, "h"],
  ],
  [
    ["ESCALIER", "Il relie les étages", 0, 2, "v"],
    ["GRENIER", "Pièce sous le toit", 0, 0, "h"],
    ["CUISINE", "On y prépare les repas", 5, 0, "h"],
    ["FENETRE", "On l’ouvre pour aérer", 2, 6, "v"],
    ["TOIT", "Il couvre la maison", 3, 4, "v"],
    ["CAVE", "Pièce sous la maison", 5, 0, "v"],
  ],
  [
    ["ECHECS", "Jeu du roi et de la reine sur 64 cases", 1, 4, "v"],
    ["BILLE", "Petite boule de verre qu’on fait rouler", 4, 0, "h"],
    ["DOMINO", "Pièce à points qu’on aligne", 1, 1, "v"],
    ["DAMES", "Jeu de pions sur un damier", 1, 1, "h"],
    ["CARTES", "On les bat puis on les distribue", 5, 4, "h"],
    ["PUZZLE", "Jeu de pièces à assembler", 0, 8, "v"],
  ],
  [
    ["COCCINELLE", "Petite bête rouge à points noirs", 0, 3, "v"],
    ["GRILLON", "Il chante dans l’herbe l’été", 7, 0, "h"],
    ["LIBELLULE", "Insecte aux ailes fines près des étangs", 9, 0, "h"],
    ["PAPILLON", "Il sort de la chrysalide", 0, 6, "v"],
    ["GUEPE", "Insecte rayé qui pique", 5, 8, "v"],
    ["FOURMI", "Insecte travailleur de la fourmilière", 4, 1, "v"],
  ],
  [
    ["BOULEAU", "Arbre à l’écorce blanche", 2, 0, "h"],
    ["PALMIER", "Arbre des plages tropicales", 0, 3, "v"],
    ["OLIVIER", "Arbre méditerranéen, symbole de paix", 2, 1, "v"],
    ["ERABLE", "Sa feuille orne le drapeau canadien", 8, 0, "h"],
    ["SAPIN", "Arbre de Noël", 0, 1, "h"],
    ["SAULE", "Arbre … pleureur", 4, 5, "v"],
  ],
  [
    ["TURQUOISE", "Bleu-vert des lagons", 1, 5, "v"],
    ["INDIGO", "Bleu profond", 6, 0, "h"],
    ["VIOLET", "Mélange de rouge et de bleu", 1, 0, "h"],
    ["ORANGE", "Couleur et fruit", 9, 0, "h"],
    ["ROUGE", "Couleur des coquelicots", 0, 2, "v"],
    ["GRIS", "Couleur de la souris", 4, 0, "v"],
  ],
  [
    ["FUSEE", "Elle décolle vers l’espace", 0, 8, "v"],
    ["VOILIER", "Bateau poussé par le vent", 3, 3, "h"],
    ["VELO", "Il a deux roues et des pédales", 3, 3, "v"],
    ["CAMION", "Gros véhicule de livraison", 0, 5, "v"],
    ["TRAMWAY", "Train qui roule dans les rues", 1, 0, "h"],
    ["TAXI", "Voiture qu’on hèle dans la rue", 1, 0, "v"],
  ],
  [
    ["STYLO", "Il écrit à l’encre", 5, 3, "h"],
    ["ACCENT", "Il se pose parfois sur le e", 0, 4, "v"],
    ["CAHIER", "On y écrit en classe", 2, 4, "h"],
    ["ALPHABET", "De A à Z", 0, 0, "h"],
    ["VIRGULE", "Signe de ponctuation pour une petite pause", 0, 9, "v"],
    ["LETTRE", "On la poste dans une enveloppe", 0, 1, "v"],
  ],
  [
    ["ETNA", "Volcan de Sicile", 7, 2, "h"],
    ["LAVE", "Roche en fusion", 4, 2, "v"],
    ["CRATERE", "Bouche du volcan", 5, 0, "h"],
    ["GEYSER", "Jet d’eau chaude jaillissant du sol", 1, 6, "v"],
    ["VOLCAN", "Montagne qui crache de la lave", 2, 0, "v"],
    ["SEISME", "Tremblement de terre", 0, 4, "v"],
  ],
  [
    ["COUETTE", "Couverture moelleuse", 1, 3, "v"],
    ["REVE", "Histoire qu’on vit en dormant", 7, 0, "h"],
    ["LUNE", "Elle brille la nuit", 3, 2, "h"],
    ["BERCEUSE", "Chanson pour endormir", 2, 5, "v"],
    ["ETOILE", "Elle scintille dans le ciel nocturne", 9, 0, "h"],
    ["OREILLER", "On y pose la tête pour dormir", 0, 0, "v"],
  ],
  [
    ["COUSTEAU", "Commandant explorateur des océans", 3, 2, "h"],
    ["MAGELLAN", "Navigateur du premier tour du monde", 0, 7, "v"],
    ["ARMSTRONG", "Premier homme à marcher sur la Lune", 7, 0, "h"],
    ["CARAVELLE", "Navire des grandes découvertes", 5, 0, "h"],
    ["POLO", "Marco …, voyageur jusqu’en Chine", 0, 3, "v"],
    ["COLOMB", "Christophe …, arrivé en Amérique en 1492", 1, 0, "h"],
  ],
  [
    ["TRUITE", "Poisson des rivières fraîches", 4, 4, "h"],
    ["CYGNE", "Grand oiseau blanc au long cou", 0, 9, "v"],
    ["LOUTRE", "Elle nage sur le dos", 0, 5, "v"],
    ["ROSEAU", "Plante qui plie mais ne rompt pas", 2, 0, "h"],
    ["BARQUE", "Petit bateau à rames", 0, 0, "v"],
    ["CASTOR", "Rongeur bâtisseur de barrages", 0, 2, "v"],
  ],
  [
    ["ETOILE", "On la pose tout en haut du sapin", 3, 1, "h"],
    ["CADEAU", "On le trouve au pied du sapin", 0, 6, "v"],
    ["SAPIN", "Arbre décoré dans le salon", 0, 4, "v"],
    ["HOTTE", "Le Père Noël y range ses cadeaux", 1, 2, "v"],
    ["NOEL", "Fête du 25 décembre", 5, 0, "h"],
  ],
  [
    ["TRAINEAU", "Il glisse dans le ciel, tiré par des rennes", 2, 0, "h"],
    ["CHEMINEE", "Le Père Noël y descend", 0, 5, "v"],
    ["CLOCHE", "Elle sonne pour annoncer la fête", 0, 2, "h"],
    ["RENNE", "Animal qui tire le traîneau du Père Noël", 5, 3, "h"],
    ["LUTIN", "Petit assistant du Père Noël", 0, 0, "v"],
  ],
  [
    ["GUIRLANDE", "Elle s’enroule autour du sapin, pleine de lumières", 4, 0, "h"],
    ["BOUGIE", "Elle éclaire la table et fond doucement", 0, 2, "v"],
    ["PAPIER", "On le déchire pour ouvrir un cadeau", 0, 8, "v"],
    ["BOULE", "Décoration ronde et brillante", 1, 4, "v"],
    ["RUBAN", "Il entoure le paquet cadeau", 0, 6, "v"],
  ],
  [
    ["MARRON", "On le farcit ou on le glace", 4, 1, "h"],
    ["TRUFFE", "Chocolat rond ou champignon rare", 3, 4, "v"],
    ["NOUGAT", "Confiserie blanche aux amandes", 0, 2, "v"],
    ["BUCHE", "Dessert roulé du réveillon", 8, 0, "h"],
    ["DINDE", "Volaille rôtie du repas de fête", 2, 6, "v"],
  ],
  [
    ["CRECHE", "Elle représente la naissance de Jésus", 5, 2, "h"],
    ["BERGER", "Il garde les moutons près de l’étable", 0, 3, "v"],
    ["MAGE", "Venu d’Orient avec de l’or", 2, 7, "v"],
    ["ANGE", "Messager aux ailes blanches", 1, 0, "h"],
    ["SANTON", "Petit personnage de Provence", 0, 0, "v"],
  ],
  [
    ["EPIPHANIE", "Fête des Rois, début janvier", 3, 0, "h"],
    ["GALETTE", "On la partage pour l’Épiphanie", 0, 8, "v"],
    ["COURONNE", "Elle coiffe le roi de la galette", 6, 1, "h"],
    ["FEVE", "Petit objet caché dans la galette", 2, 0, "v"],
    ["ROI", "Il trouve la fève", 1, 2, "v"],
  ],
  [
    ["REVEILLON", "Repas de la nuit du 31 décembre", 3, 0, "h"],
    ["MINUIT", "Heure du passage à la nouvelle année", 1, 8, "v"],
    ["CONFETTI", "Petits morceaux de papier coloré", 5, 1, "h"],
    ["FETE", "On la célèbre entre amis", 0, 1, "v"],
    ["PETARD", "Il éclate avec un grand bruit", 1, 0, "h"],
  ],
  [
    ["CHAMPAGNE", "Vin pétillant du 31 décembre", 2, 0, "h"],
    ["COUPE", "On y verse le champagne", 2, 0, "v"],
    ["TOAST", "On le porte en levant son verre", 0, 2, "v"],
    ["HEURE", "Les douze coups de minuit en sonnent une", 1, 8, "v"],
    ["BULLE", "Elle monte dans le champagne", 5, 4, "h"],
  ],
  [
    ["DECEMBRE", "Mois de Noël", 6, 0, "h"],
    ["HORLOGE", "Elle sonne les douze coups", 0, 7, "v"],
    ["JANVIER", "Premier mois de l’année", 2, 1, "h"],
    ["ANNEE", "Elle change à minuit", 0, 3, "v"],
    ["HIVER", "Saison de la neige", 4, 0, "h"],
  ],
  [
    ["BONHEUR", "On se le souhaite pour l’année nouvelle", 6, 0, "h"],
    ["JOIE", "Grand bonheur partagé", 3, 4, "v"],
    ["ESPOIR", "Il fait attendre demain avec confiance", 4, 1, "h"],
    ["SANTE", "On la souhaite en trinquant", 0, 1, "v"],
    ["AMOUR", "Sentiment que l’on offre aux siens", 0, 6, "v"],
    ["PAIX", "Grande tranquillité, sans conflit", 1, 0, "h"],
  ],
];
function pCross(e) {
  const t = LVX(CW, "croises", cwGen).map((e, t) => ({
      w: e[0],
      c: e[1],
      r: e[2],
      x: e[3],
      h: "h" === e[4],
      i: t,
    })),
    a = {},
    s = new Set(e ? e.ok : []),
    n = (e) => [...e.w].map((t, a) => e.r + (e.h ? 0 : a) + "," + (e.x + (e.h ? a : 0)));
  t.forEach((e) =>
    n(e).forEach((t, s) => {
      const [n, o] = t.split(",").map(Number);
      (a[t] = a[t] || { r: n, x: o, ch: e.w[s], v: "", E: [] }).E.push(e.i);
    }),
  );
  const o = (e) => e.E.some((e) => s.has(e)),
    i = (e) => !!e.g || o(e);
  {
    const e = Object.values(a),
      s = t.map(() => 0),
      n = rng(2654435761 * (lv + 1)),
      o = Math.ceil(0.2 * e.length),
      i = Math.floor(0.3 * e.length),
      r = o + Math.floor(n() * (i - o + 1)),
      l = (e) => e.E.filter((e) => !s[e]).length,
      c = (e) => e.E.reduce((e, t) => e + s[t], 0);
    for (let a = 0; a < r; a++) {
      const a = e.filter((e) => !e.g && e.E.every((e) => s[e] < t[e].w.length - 1));
      if (!a.length) break;
      const o = Math.max(...a.map(l));
      let i = a.filter((e) => l(e) === o);
      const r = Math.min(...i.map(c));
      i = i.filter((e) => c(e) === r);
      const d = i[Math.floor(n() * i.length)];
      ((d.g = 1), (d.v = d.ch), d.E.forEach((e) => s[e]++));
    }
  }
  e &&
    Object.entries(e.v).forEach(([e, t]) => {
      a[e] && (a[e].v = t);
    });
  const r = [...new Set(t.map((e) => 100 * e.r + e.x))].sort((e, t) => e - t);
  t.forEach((e) => (e.n = r.indexOf(100 * e.r + e.x) + 1));
  const l = Math.max(...t.map((e) => e.r + (e.h ? 1 : e.w.length))),
    c = Math.max(...t.map((e) => e.x + (e.h ? e.w.length : 1)));
  let d = e ? e.s : 0,
    f = e ? e.cu : "",
    u = 0,
    h = !1,
    K = [];
  const p = () => n(t[d]),
    m = () => {
      f = p().find((e) => !a[e].v && !i(a[e])) || p()[0];
      K = [];
      const P = p();
      for (let j = P.indexOf(f) - 1; j >= 0 && i(a[P[j]]); j--) K.unshift(a[P[j]].ch);
    };
  (e || m(),
    (snap = () => ({
      v: Object.fromEntries(
        Object.entries(a)
          .filter(([e, t]) => t.v && !t.g)
          .map(([e, t]) => [e, t.v]),
      ),
      ok: [...s],
      s: d,
      cu: f,
    })));
  const b = (e) => e.replace(/[&<>]/g, (e) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[e]),
    g = (e) => {
      const n = new Set(p()),
        i = t[d],
        r = new Set(i.w);
      (frame(
        `<div class="cg" style="--c:${c}">${Array.from({ length: l * c }, (e, s) => {
          const i = (s / c) | 0,
            r = s % c,
            l = i + "," + r,
            d = a[l],
            u = t.find((e) => e.r === i && e.x === r);
          return d
            ? `<button class="cl ${o(d) ? "ok" : ""} ${d.g && !o(d) ? "g" : ""} ${n.has(l) ? "on" : ""} ${l !== f || d.g ? "" : "cur"}" data-a="cs" data-v="${l}">${u ? "<sup>" + u.n + "</sup>" : ""}${d.v}</button>`
            : "<i></i>";
        }).join(
          "",
        )}</div><div class="cc"><button data-a="cpv" aria-label="Définition précédente">‹</button><button class="cq" data-a="clist" aria-expanded="${h}" aria-label="Toutes les définitions">${i.n} ${i.h ? "Horizontalement" : "Verticalement"} (${i.w.length}) : ${b(i.c).replace(/…/g, `<span class="bk2" style="--n:${i.w.length}"></span>`)}<i>${h ? "▴" : "▾"}</i></button><button data-a="cnx" aria-label="Définition suivante">›</button></div>${
          h
            ? `<div class="cls">${t
                .map((e, t) => [e, t])
                .sort((e, t) => e[0].n - t[0].n || t[0].h - e[0].h)
                .map(
                  ([e, t]) =>
                    `<button class="cle ${t === d ? "on" : ""} ${s.has(t) ? "ok" : ""}" data-a="csel" data-v="${t}"><b>${e.n}${e.h ? "→" : "↓"}</b><span>${b(e.c)} (${e.w.length})</span></button>`,
                )
                .join("")}</div>`
            : `<div class="kb">${["AZERTYUIOP", "QSDFGHJKLM", "WXCVBN"].map((e, t) => "<div>" + [...e].map((e) => `<button data-a="ck" data-v="${e}" ${r.has(e) ? "" : "disabled"}>${e}</button>`).join("") + (2 === t ? '<button data-a="ck" data-v="⌫" aria-label="Effacer">⌫</button>' : "") + "</div>").join("")}</div>`
        }`,
        1,
      ),
        e && msg(e));
    },
    E = (e, H) => {
      if (!H && K.length && e === K[0]) return (K.shift(), g());
      K = [];
      const o = a[f];
      if (!o) return;
      i(o) || (o.v = e);
      const r = p(),
        l = r.slice(r.indexOf(f) + 1).find((e) => !i(a[e]));
      l && (K = r.slice(r.indexOf(f) + 1, r.indexOf(l)).map((e) => a[e].ch));
      let c = "";
      (o.E.slice().forEach((e) => {
        c =
          ((e) => {
            const o = t[e];
            if (s.has(e)) return "";
            const r = n(o).map((e) => a[e]);
            return r.some((e) => !e.v)
              ? ""
              : r.map((e) => e.v).join("") === o.w
                ? (s.add(e), sfx(660, 0.4), "Bien vu ✦")
                : ((u = 1),
                  r.forEach((e) => {
                    i(e) || (e.v = "");
                  }),
                  "Pas tout à fait…");
          })(e) || c;
      }),
        u && (K = []),
        (f = u ? r.find((e) => !a[e].v && !i(a[e])) || r[0] : l || f),
        (u = 0),
        g(c),
        t.every((e) => s.has(e.i)) && setTimeout(win, 900));
    };
  ((act.cs = (e) => {
    K = [];
    const t = a[e];
    t &&
      ((h = !1),
      p().includes(e)
        ? t.E.length > 1 && (f === e || i(t))
          ? ((d = t.E.find((e) => e !== d)), i(t) ? m() : (f = e))
          : i(t) || (f = e)
        : ((d = t.E.find((e) => !s.has(e))), null == d && (d = t.E[0]), i(t) ? m() : (f = e)),
      g());
  }),
    (act.clist = () => {
      ((h = !h), g());
    }),
    (act.csel = (e) => {
      ((d = +e), (h = !1), m(), g());
    }),
    (act.cpv = () => {
      ((d = (d + t.length - 1) % t.length), (h = !1), m(), g());
    }),
    (act.cnx = () => {
      ((d = (d + 1) % t.length), (h = !1), m(), g());
    }),
    (act.ck = (e) => {
      if ("⌫" !== e) return E(e);
      K = [];
      const t = p(),
        s = a[f];
      if (s.v && !i(s)) s.v = "";
      else {
        const e = t
          .slice(0, t.indexOf(f))
          .reverse()
          .find((e) => !i(a[e]));
        e && ((f = e), (a[e].v = ""));
      }
      g();
    }),
    (act.hint = () => {
      const e = p().find((e) => {
        const t = a[e];
        return !i(t) && t.v !== t.ch;
      });
      e && spend(1) && ((f = e), E(a[e].ch, 1));
    }),
    g());
}
function cwGen(a) {
  const R = rng(6151 * a + 29),
    A = THM[thOrd(a)],
    B = THM[thOrd(a + 17)],
    tg = Math.min(11, 6 + Math.floor(a / 8));
  let best = null;
  for (let t = 0; t < 40; t++) {
    const W = lvShuf(A.w, R)
        .concat(lvShuf(B.w, R))
        .map((e) => ({ k: e[0], c: e[1] }))
        .filter((e) => e.k.length >= 3 && e.k.length <= 11)
        .sort((x, y) => y.k.length - x.k.length + (R() - 0.5) * 3),
      P = lvLay(W, R, 11, tg);
    if (!best || P.length > best.length) best = P;
    if (P.length >= tg) break;
  }
  return best.map((p) => [p.w.k, p.w.c, p.r, p.c, p.h ? "h" : "v"]);
}
