# Orléans à pied — charte éditoriale et de production

## Intention

Cette promenade part du 44 quai des Augustins et utilise le déplacement réel comme structure narrative. Elle doit fonctionner comme une journée agréable avant de fonctionner comme un cours d'histoire.

Le récit principal doit être compris par un auditeur d'environ dix ans sans prérequis historique, tout en restant assez rigoureux et dense pour un adulte curieux. Les capsules « Gourmands » portent les approfondissements afin de ne jamais surcharger le fil principal.

## Revue contradictoire retenue avant production

Le parcours a été challengé selon six angles :

1. **Historien médiéviste** — le départ aux Tourelles est conservé : commencer par le 7 mai 1429 donne une scène concrète avant d'expliquer la guerre de Cent Ans.
2. **Historien de la ville et de la Loire** — Orléans doit exister avant Jeanne ; le pont, Cenabum, le commerce et le franchissement du fleuve structurent les trois premiers épisodes.
3. **Muséologue** — l'Hôtel Cabu est privilégié le matin ; la Maison de Jeanne est placée après la pause de midi pour respecter les horaires et éviter une course avant 13 h.
4. **Dramaturge audio** — un épisode correspond à une question ou à une idée forte, pas à l'inventaire d'un monument. Les noms propres sont limités et répétés avec leur fonction lorsqu'ils sont nécessaires.
5. **Concepteur d'expérience touristique** — les grands intérieurs sont alternés avec des séquences de rue ; le Campo Santo et la rue de Bourgogne sont des respirations essentielles.
6. **Contradicteur fatigue / journée réelle** — Saint-Aignan est conservé comme dixième épisode mais explicitement facultatif. La qualité de la fin de journée prime sur le fait de « tout faire ».

## Parcours de référence — 21 août 2026, départ 10 h 30

- 10 h 30 : 44 quai des Augustins.
- Tourelles.
- Pont George-V et quais.
- Hôtel Cabu, visite ciblée avant la fermeture de 13 h.
- Pause déjeuner réelle.
- Maison de Jeanne d'Arc à la réouverture de 14 h.
- Place du Martroi puis rue Jeanne-d'Arc.
- Cathédrale Sainte-Croix.
- Hôtel Groslot.
- Campo Santo.
- Rue de Bourgogne.
- Saint-Aignan si l'énergie le permet.
- Retour par la Loire et le pont René-Thinat vers le quai des Augustins.

## Règles historiques

- Aucun faux dialogue n'est attribué à une personne réelle.
- Une tradition hagiographique, une légende ou une reconstruction est annoncée comme telle.
- Un bâtiment reconstruit ou profondément remanié n'est jamais présenté comme un décor intact de l'époque racontée.
- Les causalités simplistes sont évitées : Jeanne ne gagne pas seule le siège ; la mort de François II ne « cause » pas à elle seule les guerres de Religion ; les récits de saint Aignan ne sont pas traités comme un reportage de 451.
- Les sources institutionnelles, patrimoniales, archivistiques et de recherche sont prioritaires.

## Architecture audio

### Dix épisodes principaux

1. 7 mai 1429 : le verrou des Tourelles.
2. Traverser la Loire : le pont qui faisait la ville.
3. Avant Jeanne : pourquoi une ville est née ici.
4. Dix jours dans Orléans : Jeanne derrière la légende.
5. Comment une jeune femme devient une héroïne de bronze.
6. Sainte-Croix : la cathédrale que Jeanne n'a pas vue.
7. Groslot : quand un roi meurt à Orléans.
8. Campo Santo : les morts au cœur de la ville.
9. Rue de Bourgogne : comment vivait une ville ancienne ?
10. Saint-Aignan, Attila et le retour à la Loire.

### Capsules « Gourmands »

Les capsules sont indépendantes et facultatives. Elles répondent à une curiosité née du récit principal : vieux pont, mécanique du siège, sources sur les paroles de Jeanne, absence de portrait fiable, alliance bourguignonne, Marie Stuart, vinaigre d'Orléans, statut historique de la tradition de saint Aignan.

## Images

La page finale n'utilise que des photographies provenant de Wikimedia Commons sous licence autorisant la réutilisation (CC BY ou CC BY-SA). Chaque image affiche :

- l'auteur ;
- la licence ;
- un lien vers la page du fichier sur Wikimedia Commons.

Les images sont chargées depuis Wikimedia Commons et ne sont pas copiées dans le dépôt.

## Cartographie

La page fournit trois liens Google Maps courts plutôt qu'un itinéraire unique surchargé : matin, après-midi et retour. Chaque épisode fournit également un bouton « Y aller depuis ma position » vers sa destination. Ce découpage est volontairement plus robuste sur mobile et permet de reprendre facilement la promenade après le déjeuner ou une interruption.

## Langue et rendu audio

Tous les guides sont rendus via `scripts/render_audioguide_fr.py`. Le garde-fou de locale aligne explicitement le SSML sur `fr-FR` afin de réduire les amorces accidentelles en anglais ou en espagnol avec la voix multilingue. La CI vérifie que les manifestes résolus utilisent bien des voix `fr-FR`.
