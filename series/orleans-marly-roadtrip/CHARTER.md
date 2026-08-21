# Orléans → Marly — charte éditoriale et de production

## Intention

Cette série constitue le dernier acte du voyage déjà raconté dans le Val de Loire et à Orléans. Elle ne doit jamais ressembler à une liste de « beaux endroits sur la route du retour ».

Le déplacement réel est la structure du récit. À mesure que la voiture quitte la Loire, traverse la Beauce, rejoint les vallées de l'Eure puis les forêts de l'ouest parisien, l'auditeur suit une transformation du pouvoir : défendre un royaume, bâtir, administrer, remodeler l'eau et le paysage, organiser la cour, puis contrôler l'accès au souverain.

Le récit principal doit être compris sans prérequis historique, y compris par un enfant d'environ dix ans, mais rester suffisamment dense et exact pour un adulte curieux. Les extensions « Gourmand » portent les approfondissements. Les extensions « Mise en situation » donnent chair au monde historique sans faire passer une fiction pour un document.

## Continuité avec les séries précédentes

Le point de départ n'est pas une page blanche. La route Angers → Orléans a déjà installé plusieurs repères :

- la Loire comme infrastructure, frontière et axe commercial ;
- la transformation de la forteresse en résidence ;
- la Renaissance et la cour comme nouveaux langages du pouvoir ;
- Orléans en 1429 comme moment où la monarchie doit d'abord survivre avant de pouvoir se mettre en scène.

Le prologue de cette série rappelle ces repères en moins de deux minutes et pose la question suivante : **une fois le royaume consolidé, comment le pouvoir apprend-il à façonner l'espace autour de lui ?**

## Architecture

### Épisodes principaux

1. **Quitter Orléans : après avoir sauvé le royaume, comment fabrique-t-on le pouvoir ?** — départ et Beauce.
2. **Châteaudun : que devient le monde de Jeanne après la victoire ?** — Dunois, guerre et demeure princière.
3. **Chartres : qui pouvait bâtir une montagne avant l'État moderne ?** — cathédrale, chantier et société médiévale.
4. **Maintenon : quand un roi veut déplacer une rivière** — Versailles, Eure, Vauban et limites de la puissance.
5. **Rambouillet et les Vaux : le paysage peut-il devenir politique ?** — forêt, chasse, contrôle et rupture paysagère.
6. **Dampierre : vivre dans l'orbite de Versailles** — Hardouin-Mansart, grande noblesse et langage de cour.
7. **Marly : le roi s'éloigne de Versailles sans quitter le pouvoir** — résidence sélective, Machine de Marly et conclusion du voyage.

Les 17 Tournants sont une courte respiration au sein de l'épisode 6, jamais une étape historique autonome.

## Deux niveaux d'extension

### Gourmands

Une capsule « Gourmand » répond à une question née de l'épisode principal sans être nécessaire à sa compréhension. Durée cible : 3 à 5 minutes.

Exemples : statut de bâtard au XVe siècle ; chantier gothique ; pénurie d'eau à Versailles ; chasse et hiérarchie ; peintres de Cernay ; vocabulaire de Hardouin-Mansart ; fonctionnement de la Machine de Marly.

### Mises en situation

Une mise en situation est une fiction historique courte et fortement contrainte par les faits. Durée cible : 4 à 7 minutes.

Chaque scène commence par la formule de statut suivante ou son équivalent sans ambiguïté :

> Ce qui suit est une reconstitution. Le décor, les gestes et les contraintes sont documentés ; les personnages et leurs paroles sont composites. Rien n'est présenté comme une citation.

Les personnages historiques réels ne reçoivent jamais de faux dialogue. Lorsque leur présence est utile, ils sont décrits par le narrateur ou perçus de l'extérieur par un personnage composite.

Chaque scène se termine par un « retour aux faits » qui distingue :

- ce qui est documenté ;
- ce qui est probable ou typique ;
- ce qui a été inventé uniquement pour rendre la scène audible.

## Règles de narration

- Français dès le premier mot de chaque segment.
- Aucun prérequis historique ou géographique.
- Une seule grande idée par épisode principal.
- Les dates ne sont données que lorsqu'elles structurent réellement la compréhension.
- Un nom propre est rappelé par son rôle lorsqu'il réapparaît après plusieurs minutes.
- Une incertitude reste une incertitude ; une tradition reste une tradition.
- Aucun dialogue inventé n'est attribué à une personne réelle.
- Les mots « imaginez » ou « reconstitution » ne servent jamais à maquiller une invention factuelle.
- Le paysage vu depuis la voiture sert de preuve : horizon de Beauce, éperon de Châteaudun, flèches de Chartres, vallée de l'Eure, forêt de Rambouillet, relief des Vaux, ordre classique de Dampierre.
- Les indications routières restent simples et ne remplacent jamais la navigation GPS.
- Le conducteur ne doit pas être invité à regarder un détail nécessitant de quitter la route des yeux.
- Les pauses et les observations visuelles complexes sont adressées aux passagers ou proposées uniquement à l'arrêt.
- Les fins d'épisode utilisent une synthèse naturelle de type « Alors, où en sommes-nous ? » puis ouvrent une question pour l'étape suivante.

## Règles de temps

Le parcours est conçu pour un départ d'Orléans vers 09 h 00 et une arrivée à Marly-le-Roi vers 14 h 15–14 h 45, avec 15 h 00 comme borne maximale.

Les horaires de la page sont indicatifs. Le trafic temps réel et la sécurité priment.

- Châteaudun : 10–15 min maximum.
- Chartres : 20–25 min maximum.
- Maintenon : passage / 5 min maximum.
- Rambouillet : aucun arrêt.
- Vaux-de-Cernay : aucun arrêt imposé.
- Dampierre : 0–5 min selon marge.
- Marly : arrivée, fin du récit.

Le conducteur ne mange pas en conduisant si cela nuit à son attention ; le scénario du sandwich en route vise d'abord les passagers. Une pause de sécurité reste toujours préférable si nécessaire.

## Sources

Ordre de priorité :

1. monuments nationaux, musées, services patrimoniaux et institutions publiques ;
2. sources académiques ou publications de recherche ;
3. parc naturel régional et services territoriaux pour les paysages ;
4. médiation touristique institutionnelle en complément ;
5. aucune anecdote non vérifiée n'est promue au rang de fait pour améliorer le spectacle.

## Production audio

La série reprend le moteur français du dépôt et la même logique que la série Orléans à pied : collection JSON, épisodes principaux et capsules facultatives, rendu via `scripts/render_audioguide_fr.py`, vérification d'une voix `fr-FR` pour chaque segment et publication des MP3 après fusion sur `main`.

Les extensions de mise en situation peuvent employer plusieurs voix génériques du casting existant, mais la narration principale reste stable afin que la série forme un seul voyage.
