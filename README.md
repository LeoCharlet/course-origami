# Course d'Origami

Prototype jouable de **Course d'Origami**, un jeu de course arcade en papier découpé : adopte la bonne forme (Grenouille, Avion, Bateau, Renard) pour échapper à la lave, au tsunami puis à la tornade.

## Jouer

Ouvre `index.html` dans un navigateur, ou la version en ligne (GitHub Pages).

| | Joueur 1 | Joueur 2 |
|---|---|---|
| Grenouille · Avion · Bateau · Renard | `1` `2` `3` `4` | `U` `I` `O` `P` |
| Bouton d'action (sauter, monter, pagayer, s'agripper…) | `Espace` | `Entrée` |
| Joystick (couloirs, esquive, écoper) | `Z` `Q` `S` `D` | flèches |

- `Échap` : pause · `M` : son · `²` : calques DA (noms des calques, parallaxe, hitboxes)
- Manettes : boutons 1-4 = formes, gâchettes = action, stick ou croix = joystick
- Mode 1 joueur contre un bot, ou 2 joueurs en écran scindé
- Qualité graphique (menu) : Auto baisse la résolution si l'affichage ralentit ; Économe pour une borne sans carte graphique

## Déroulement

L'ordre des trois biomes est tiré au hasard à chaque partie. Chaque biome enchaîne trois épreuves de 5 à 7 secondes ; chacune exige une forme (annoncée à l'écran). Avec la mauvaise forme on ralentit, on coule ou on tombe, et la menace rattrape.

| Biome | Épreuve | Forme | Commande |
|---|---|---|---|
| Volcan | Gouffre de lave | Avion | le sol s'effondre ; maintenir l'action pour monter (l'air chaud porte et recharge le souffle), passer au-dessus des jets et sous les coulées |
| Volcan | Rivière de lave | Grenouille | action en rythme, les 4 pierres s'enfoncent de plus en plus vite |
| Volcan | Pluie de feu | Renard | boules de feu en continu, impacts annoncés ; joystick haut / bas pour changer de couloir |
| Tsunami | Tourbillon | Bateau | marteler l'action pour pagayer |
| Tsunami | Nénuphars | Grenouille | joystick pour viser un nénuphar sec, action pour sauter (on peut ressauter d'un nénuphar qui coule) |
| Tsunami | Paquets de mer | Bateau | secouer le joystick gauche / droite pour écoper |
| Tornade | Couloir de vent | Avion | joystick haut / bas (ou action maintenue pour monter), les anneaux rechargent le souffle |
| Tornade | Crête étroite | Renard | marteler l'action pendant les rafales |
| Tornade | Débris rasants | Grenouille | maintenir pour s'aplatir, relâcher pour sauter |

**Souffle de l'avion** : une jauge qui se vide en vol (plus vite en montée). Vide, l'avion redescend : il faut changer de forme ou passer dans un anneau d'air. Elle se recharge au sol ou sous une autre forme.

## Pour l'équipe créa

Tout est dessiné en code, en placeholder. Le brief sous le jeu liste les palettes par biome et les assets à produire (tailles, parallaxe, animations).

Fichier unique, sans dépendance ni build : tout est dans `index.html`.

## Assets de l'équipe créa

- `assets/origamis/<forme>/<J1|J2|BOT>/` : poses de chaque origami (SVG, viewBox 200×170, J1 orange, J2 bleu, BOT gris).
- `assets/origamis/<forme>/degats/` : brûlé, déchiré, détrempé (fournis en couleurs J1). Les variantes `degats/J2/` et `degats/BOT/` sont générées automatiquement à partir de la palette J1 → J2 / BOT.
- `assets/origamis/bateau/calques/` : coque, pagaie et eau séparées pour animer le bateau qui rame.
- `assets/obstacles/` : obstacles de la tornade (anneaux d'air avant / arrière en 4 images, projectiles, débris, crête, rafales, tornade de fond).
- `assets/vagues.json` : le fond du biome d'eau, extrait de `vagues.ai` (5 bandes de vagues vectorielles, animées en parallaxe et en houle).

Pour remplacer un visuel, il suffit de remplacer le SVG du même nom : le jeu le recharge tel quel. Les sprites partagent le même cadrage (pieds du renard en 92,139, grenouille en 110,140, bateau en 100,131, avion en 100,72).
