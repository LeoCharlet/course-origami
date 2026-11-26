# Course d'Origami

Prototype jouable de **Course d'Origami**, un jeu de course arcade en papier découpé : adopte la bonne forme (Grenouille, Avion, Bateau, Renard) pour échapper à la lave, au tsunami puis à la tornade.

## Jouer

Ouvre `index.html` dans un navigateur, ou la version en ligne (GitHub Pages).

| | Joueur 1 | Joueur 2 |
|---|---|---|
| Grenouille · Avion · Bateau · Renard | `1` `2` `3` `4` | `U` `I` `O` `P` |
| Sauter / planer (maintenir) | `Espace` ou `Z`/`W` | `↑` ou `Entrée` |

- `Échap` : pause · `M` : son · `²` : calques DA (noms des calques, parallaxe, hitboxes)
- Manettes : boutons 1-4 = formes, haut / LB / RB = saut
- Mode 1 joueur contre un bot, ou 2 joueurs en écran scindé

## Pour l'équipe créa

Tout est dessiné en code, en placeholder. Le brief sous le jeu liste les palettes par biome et les assets à produire (tailles, parallaxe, animations).

Fichier unique, sans dépendance ni build : tout est dans `index.html`.

## Assets de l'équipe créa

- `assets/origamis/<forme>/<J1|J2|BOT>/` : poses de chaque origami (SVG, viewBox 200×170, J1 orange, J2 bleu, BOT gris).
- `assets/origamis/<forme>/degats/` : brûlé, déchiré, détrempé (fournis en couleurs J1). Les variantes `degats/J2/` et `degats/BOT/` sont générées automatiquement à partir de la palette J1 → J2 / BOT.
- `assets/origamis/bateau/calques/` : coque, pagaie et eau séparées pour animer le bateau qui rame.
- `assets/vagues.json` : le fond du biome d'eau, extrait de `vagues.ai` (5 bandes de vagues vectorielles, animées en parallaxe et en houle).

Pour remplacer un visuel, il suffit de remplacer le SVG du même nom : le jeu le recharge tel quel. Les sprites partagent le même cadrage (pieds du renard en 92,139, grenouille en 110,140, bateau en 100,131, avion en 100,72).
