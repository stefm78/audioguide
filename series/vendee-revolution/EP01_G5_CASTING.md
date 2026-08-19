# Épisode 1 — G5 casting et direction audio

Statut : **G5 DESIGN ACCEPT — rendu audio autorisé**

Principe : les voix primaires doivent être clairement distinctes, mais moins caricaturales que les personnages de dialogue d'un audioguide classique. Elles représentent des documents historiques, pas des reconstitutions théâtrales.

## 1. Narrateur
- Preset : `narrateur-vif`
- Voix : RemyMultilingual
- Débit : +8 %
- Hauteur : +14 Hz
- Volume : +5 %
- Direction : conteur énergique, mais ne pas accélérer les transitions graves.

## 2. Pierre Dangirard
- Preset réutilisé : `notable-hautain`
- Voix : RemyMultilingual
- Débit : -2 %
- Hauteur : -6 Hz
- Volume : +4 %
- Motif : la dénomination historique du preset n'est pas le rôle ; seuls ses paramètres sont réutilisés. La différence avec le narrateur doit évoquer une lecture posée d'un journal, sans imitation d'un homme du XVIIIe siècle.
- Passage : une seule courte transcription documentaire CCFr/BnF.

## 3. Jean Migault
- Preset réutilisé : `conspirateur`
- Voix : RemyMultilingual
- Débit : -8 %
- Hauteur : -12 Hz
- Volume : -12 %
- Motif : le preset fournit une proximité et une gravité adaptées au témoignage. Aucune intention de « secret » n'est attribuée à Migault ; seule la transformation acoustique est réutilisée.
- Passage : une phrase courte, puis retour immédiat au narrateur.

## 4. Édit de 1787
- Preset réutilisé : `aristocrate-distante`
- Voix : VivienneMultilingual
- Débit : -8 %
- Hauteur : +8 Hz
- Volume : -2 %
- Direction : lecture froide et institutionnelle, sans prétendre incarner Louis XVI ni un personnage réel.

## Challenge du comité

### Historien / archiviste
PASS : les trois interventions distinctes sont toutes identifiées par leur statut documentaire.

### Dramaturge
PASS : quatre registres suffisent. Ajouter Montfort, Bèze, Richelieu ou Louis XVI comme voix augmenterait le spectacle sans augmenter la preuve.

### Contradicteur
PASS : aucune voix ne doit faire croire qu'une citation est un dialogue reconstitué. Le lecteur web/transcription indiquera explicitement `source primaire`, `transcription documentaire` ou `voix institutionnelle`.

### QA audio à contrôler après rendu
- prononciation : Dangirard, Mouchamps, Pouzauges, Gâtine, Grignion de Montfort, Saint-Laurent-sur-Sèvre, Migault ;
- vitesse du narrateur +8 % ;
- transition narrateur → citation suffisamment audible ;
- pas d'effet dramatique excessif sur Migault ;
- durée et fatigue d'écoute ;
- pauses plus longues avant/après les trois citations documentaires.

## Verdict

**G5 design ACCEPT.** Le rendu peut être généré ; il passera ensuite en G6 écoute/QA avant publication de la série.
