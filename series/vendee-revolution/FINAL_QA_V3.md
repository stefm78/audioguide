# FINAL QA V3 — Vendée, Révolution et mémoires

Date : 2026-08-20

## Verdict

**PASS — V3 narrative prête à publier**

La V3 a été réécrite pour un public qui ne connaît pratiquement rien à la Vendée, avec comme repère probable une visite du Puy du Fou. La rigueur historique reste un gate ; l'optimisation principale porte désormais sur le plaisir d'écoute, l'incarnation et l'envie d'enchaîner.

## Évaluation éditoriale après challenge

| Épisode | Score V2 | Score V3 |
|---|---:|---:|
| 1 | 76 | **90** |
| 2 | 71 | **91** |
| 3 | 80 | **93** |
| 4 | 82 | **93** |
| 5 | 84 | **95** |
| 6 | 77 | **95** |
| 7 | 91 | **97** |

Moyenne V3 : **93,4/100**.

Tests qualitatifs : canapé 7/7 PASS ; débutant 7/7 PASS ; souvenir 7/7 PASS ; transitions « encore un épisode » 6/6 PASS.

## Rendu audio V3

Statut global :

- `production=final-v3`
- `install=success`
- `render=success`
- épisodes `01,02,03,04,05,06,07`
- source de rendu : `29b6a6ae5dfebba94c86eace1bac5895e8571d34`
- commit audio : `589bfbb7c52689d3c4031ff9d4afa9cbe175ec4c`

Chaque `production-status.txt` porte `production=final-v3` et `render_rc=0`.

## Fichiers et durées approximatives

Les durées ci-dessous sont estimées à partir de la taille des MP3 et du débit de production ; les lecteurs HTML utilisent les métadonnées audio réelles.

| Épisode | MP3 | Taille | Durée approx. |
|---|---|---:|---:|
| 1 | `vendee-revolution-ep01/guide.mp3` | 6 006 188 octets | ≈ 6:15 |
| 2 | `vendee-revolution-ep02/guide.mp3` | 5 176 748 octets | ≈ 5:24 |
| 3 | `vendee-revolution-ep03/guide.mp3` | 5 222 444 octets | ≈ 5:26 |
| 4 | `vendee-revolution-ep04/guide.mp3` | 4 692 908 octets | ≈ 4:53 |
| 5 | `vendee-revolution-ep05/guide.mp3` | 4 826 156 octets | ≈ 5:02 |
| 6 | `vendee-revolution-ep06/guide.mp3` | 4 933 676 octets | ≈ 5:08 |
| 7 | `vendee-revolution-ep07/guide.mp3` | 6 096 812 octets | ≈ 6:21 |

Total approximatif : **38 min 30**.

La réduction de durée par rapport à la V2 ne vient pas d'une contrainte de format : la V3 retire surtout du commentaire méthodologique et des explications redondantes, tout en renforçant les scènes et les enchaînements.

## QA voix

- narrateur : `fr-FR-RemyMultilingualNeural`, débit `+8%`, pitch `+14Hz`, conformément au réglage retenu ;
- personnages documentaires et citations restent différenciés par les presets déjà validés ;
- aucune nouvelle campagne de calibration de voix n'a été nécessaire ;
- `resolved-cast.json` est présent pour chacun des sept épisodes.

## Cohérence de série

- EP1 installe les mémoires religieuses sans prédestination de 1793 ;
- EP2 fait vivre la fracture du serment à hauteur de paroisse ;
- EP3 montre comment des soulèvements locaux deviennent une guerre ;
- EP4 distingue Vendée royaliste et conflits révolutionnaires Girondins/Montagnards tout en reconnectant Bordeaux ;
- EP5 fait de la Virée de Galerne une histoire militaire et civile ;
- EP6 part du paysage connu du visiteur du Puy du Fou et entre dans les violences de 1794 sans transformer le débat sur le « génocide » en verdict simpliste ;
- EP7 commence par la paix de La Jaunaye, puis distingue Charette historique, Charette mémoriel et Charette spectaculaire.

## Limite de la QA automatisable

Le rendu, les fichiers, le casting, la cohérence documentaire et la structure narrative sont contrôlés. La validation du **plaisir réel à l'écoute** reste nécessairement une QA humaine : elle doit porter sur l'envie de poursuivre, les prononciations, la fatigue éventuelle, les silences et la personnalité des voix.
