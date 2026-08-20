# FINAL QA — Vendée, Révolution et mémoires

Date: 2026-08-20

## Verdict

**PASS — publication finale autorisée**

Le rendu global final a terminé avec `install=success` et `render=success` pour les épisodes 01 à 07. Les sept MP3 finaux sont présents dans `audio/guides/vendee-revolution-epXX/guide.mp3`.

## Vérifications de livraison

| Épisode | Titre | Taille MP3 | Durée approximative* |
|---|---|---:|---:|
| 1 | Avant la Vendée : une terre de mémoires religieuses | 9,459,116 octets | 9:51 |
| 2 | 1789-1793 : la liberté et le serment | 6,240,812 octets | 6:30 |
| 3 | Mars 1793 : pourquoi ici la révolte devient une guerre | 6,675,884 octets | 6:57 |
| 4 | Nantes, Bordeaux, Paris : la Révolution se déchire | 6,816,428 octets | 7:06 |
| 5 | La Grande Armée disparaît : Cholet et la Virée de Galerne | 6,238,124 octets | 6:30 |
| 6 | 1794 : la guerre contre les populations | 6,878,636 octets | 7:10 |
| 7 | Charette : l'homme, la défaite, la légende | 7,547,180 octets | 7:52 |

\* Durées estimées à partir de la taille des fichiers et du débit MP3 de production ; les lecteurs HTML utilisent les métadonnées du fichier pour la durée exacte.

## Cohérence de série

- Ordre chronologique et transitions vérifiés : mémoires religieuses → Révolution et serment → mars 1793 → fractures révolutionnaires → Virée de Galerne → violences de 1794 → Charette et mémoire.
- Distinction maintenue entre département de la Vendée et Vendée militaire.
- Le lien La Rochelle / protestantisme est traité comme contexte historique et non comme causalité mécanique de 1793.
- Bordeaux et les Girondins sont distingués de l'insurrection royaliste vendéenne.
- L'épisode 6 reconnecte explicitement Les Epesses et l'incendie du château du Puy du Fou en janvier 1794.
- L'épisode 7 distingue Charette historique, mémoire vendéenne et représentation spectaculaire au Puy du Fou.
- La controverse sur la qualification de « génocide » est présentée comme controverse historiographique, pas comme consensus.
- Aucune parole fictive n'est attribuée à un personnage réel ; les interventions incarnées sont documentées dans les métadonnées et sources de chaque guide.

## QA audio / publication

- Narrateur final : Remy, débit +8 %, conformément à la calibration retenue.
- Les fichiers `resolved-cast.json` sont présents pour les sept épisodes.
- La page finale charge chaque MP3 avec cache-busting.
- Les transcriptions et sources sont chargées à la demande depuis `resolved-cast.json`.
- Navigation interne épisode précédent / suivant présente sur la page unique.
- L'ancienne URL `episode-1.html` redirige vers la page finale afin de ne pas casser le lien déjà partagé.

## Source de vérité

- Scripts finaux : `scripts/guides/vendee-revolution-ep01.json` à `ep07.json`
- Audios finaux : `audio/guides/vendee-revolution-ep01/` à `ep07/`
- Page publique : `series/vendee-revolution/index.html`
