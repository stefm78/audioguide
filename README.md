# Audioguide

Audioguide Web avec narration française générée gratuitement par Piper TTS et lecture depuis GitHub Pages.

## Principe

1. Le texte narré est stocké dans `scripts/`.
2. GitHub Actions installe Piper TTS et télécharge la voix française `fr_FR-siwis-medium`.
3. Le workflow génère le fichier audio puis le convertit en MP3.
4. Le MP3 est ajouté au dépôt dans `audio/`.
5. Le workflow GitHub Pages publie le site.

Aucune clé API TTS et aucun moyen de paiement ne sont nécessaires.

## Démo

Texte source : `scripts/demo-la-rochelle.txt`

Audio produit : `audio/demo-la-rochelle.mp3`

Page publique prévue : `https://stefm78.github.io/audioguide/`

## GitHub Pages — activation unique

Dans **Settings → Pages → Build and deployment → Source**, sélectionner **GitHub Actions** si ce n’est pas déjà fait.

Après cette activation, les workflows du dépôt gèrent la génération audio et la publication.

## Structure

- `index.html` — page publique, lecteur et téléchargement MP3
- `scripts/demo-la-rochelle.txt` — texte narré
- `.github/workflows/generate-audio.yml` — génération gratuite avec Piper
- `.github/workflows/pages.yml` — publication GitHub Pages
- `audio/` — fichiers son générés

> La page indique explicitement que la voix est synthétique.
