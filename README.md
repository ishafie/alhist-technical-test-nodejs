# alhist-technical-test-nodejs
### Air Liquide ALHIST technical test for backend dev positions
A réaliser en nodejs.

Créez un fork du projet et pushez votre code dessus puis envoyez moi le lien.


J'ai une table "steps" dans ma base de donnée qui représente des étapes contenant une action, considérez que votre base de données vous retourne par exemple:
```
const steps = [
  {id: 1, action: 'START', next_step_id: 3},
  {id: 3, action: 'BOIRE', next_step_id: 2},
  {id: 2, action: 'DORMIR', next_step_id: 5},
  {id: 5, action: 'TRAVAILLER', next_step_id: 4},
  {id: 4, action: 'JOUER', next_step_id: 9},
  {id: 6, action: 'VOYAGER', next_step_id: 7},
  {id: 7, action: 'TERMINER', next_step_id: null},
  {id: 9, action: 'TELEPHONER', next_step_id: 6}
]
```
Le but est de parcourir la donnée dans l'ordre des next steps et de retourner un array ordonnedSteps. (vous n'avez pas besoin d'aller plus loin que le parcours de la donnée dans l'ordre et le retour des steps ordonnées.). Le premier élément est toujours celui contenant l'action "START".

1 => 3 => 2 => 5 => 4 => 9 => 6 => 7

Votre solution doit prendre en compte que l'on peut changer l'ordre des actions à volonté et en supprimer à volonté.

La solution doit être implémentée dans une fonction `searchData(steps)` qui prend en paramètres "steps" (cf exemple) et retourne un array steps ordonné.

Pour un peu plus de contexte, on imagine que les steps représentent des actions d'un robot que vous prédéfinissez, vous lui choisissez un ordre d'action et les steps doivent s'éxécuter dans l'ordre que vous avez défini, cependant vous pouvez supprimer certaines des actions que vous avez défini, ou en déplacer à souhait.

De la sorte, pour que l'on puisse stocker les steps dans une base de donnée SQL (limitation technique), on se retrouve forcé d'utiliser next_step_id pour connaitre l'ordre réel des steps et pouvoir facilement en éditer l'ordre ou en supprimer.
