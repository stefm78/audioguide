# Audioguide

Prototype d’audioguide Web avec narration française générée par IA et lecture audio depuis GitHub Pages.

## Démo

La page `index.html` attend le fichier :

`audio/demo-la-rochelle.mp3`

Le workflow **Generate demo audio** crée ce MP3 à partir de `scripts/demo-la-rochelle.txt` avec l’API Text-to-Speech OpenAI et une consigne de narration de type conteur historique.

## Mise en route — une seule fois

1. Dans **Settings → Secrets and variables → Actions**, créer un secret de dépôt nommé `OPENAI_API_KEY`.
2. Dans **Settings → Pages → Build and deployment → Source**, choisir **GitHub Actions**.
3. Dans **Actions**, lancer manuellement **Generate demo audio**.
4. Le MP3 généré est ajouté dans `audio/`, puis le workflow Pages republie automatiquement le site.

Le site public est prévu à l’adresse : `https://stefm78.github.io/audioguide/`.

## Structure

- `index.html` — page publique et lecteur audio
- `scripts/demo-la-rochelle.txt` — texte narré
- `.github/workflows/generate-audio.yml` — génération du MP3
- `.github/workflows/pages.yml` — publication GitHub Pages
- `audio/` — fichiers son générés

> La page indique explicitement que la voix est générée par IA.
