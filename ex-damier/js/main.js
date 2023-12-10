/**************************************************************/
/*                        Consignes                           */
/**************************************************************/
/*

L'objectif de cet exercice est de pratiquer les événements JS
sur les éléments HTML, ainsi que les fonctions.

Il s'agit de plusieurs petits exercices indépendants.
Pour chacun d'eux, il est attendu d'implémenter le code selon
une méthode permettant d'avoir un code lisible et compréhensible.

1. Dans la partie "Main Program",
on y trouve uniquement les points d'entrée de chaque exercice.
Un point d'entrée est le point de départ de toute procédure de traitement.
Dans ces exercices, il d'agira des événements sur des éléments HTML.

Exemple :
document.querySelector('.js-damier').addEventListener('click', onDamierClick);

2. Dans la partie "Event listeners", on trouvera les fonctions qui seront
appelées lorsque l'utilisateur effectuera des actions sur les éléments HTML.
Ces fonctions contiendront l'algorithme de traitement de l'événement.

Exemple :
function onDamierClick() {
  clearCheckboard();
  createDamier();
}

3. Dans la partie "Fonctions", on trouvera les fonctions qui seront utilisées
pour le traitement des événements. Elles seront appelées par
les "Event listeners".

Exemple :
function clearCheckboard() {
  ...
}
function createDamier() {
  ...
}

*/
/**************************************************************/
/*                         Données                            */
/**************************************************************/

// Les variables globales sont déclarées ici.
// Uniquement si nécéssaire.

const jsDamierBtn = document.querySelector(".js-damier");

const cells  = document.querySelectorAll(".js-cell");
const jsDiscoBtn = document.querySelector(".js-disco");

const jsLabyrinthBtn = document.querySelector(".js-labyrinth");

const grid = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

/**************************************************************/
/*                        Fonctions                           */
/**************************************************************/

// Les fonctions (appelées par les Event Listener) sont déclarées ici.

function clearDamier(){

  for(c = 0; c < cells.length; c++){

    cells[c].classList.remove("black","disco-color1", "disco-color2", "disco-color3", "disco-color4", "disco-color5", "push", "pull", "boom");

  }

};

function damier(){

  const blackDamier1 = document.querySelectorAll(".js-row1:nth-child(odd)");
  const blackDamier2 = document.querySelectorAll(".js-row2:nth-child(even)");
  const blackDamier3 = document.querySelectorAll(".js-row3:nth-child(odd)");
  const blackDamier4 = document.querySelectorAll(".js-row4:nth-child(even)");
  const blackDamier5 = document.querySelectorAll(".js-row5:nth-child(odd)");
  const blackDamier6 = document.querySelectorAll(".js-row6:nth-child(even)");
  const blackDamier7 = document.querySelectorAll(".js-row7:nth-child(odd)");
  const blackDamier8 = document.querySelectorAll(".js-row8:nth-child(even)");

  clearDamier();


  for(i = 0; i < blackDamier1.length; i++){
    

    blackDamier1[i].classList.toggle("black")
    blackDamier2[i].classList.toggle("black")
    blackDamier3[i].classList.toggle("black")
    blackDamier4[i].classList.toggle("black")
    blackDamier5[i].classList.toggle("black")
    blackDamier6[i].classList.toggle("black")
    blackDamier7[i].classList.toggle("black")
    blackDamier8[i].classList.toggle("black")

  }
  
};


function damierColor(){

  clearDamier();

  for(j = 0; j < cells.length; j++){
    let col = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
   
    if(col === 1){
      cells[j].classList.remove("disco-color2", "disco-color3", "disco-color4", "disco-color5");
      cells[j].classList.add("disco-color1");
    }

    else if(col === 2){
      cells[j].classList.remove("disco-color1", "disco-color3", "disco-color4", "disco-color5");
      cells[j].classList.add("disco-color2");
    }

    else if(col === 3){
      cells[j].classList.remove("disco-color1", "disco-color2", "disco-color4", "disco-color5");
      cells[j].classList.add("disco-color3");
    }

    else if(col === 4){
      cells[j].classList.remove("disco-color1", "disco-color2", "disco-color3", "disco-color5");
      cells[j].classList.add("disco-color4");
    }

    else if(col === 5){
      cells[j].classList.remove("disco-color1", "disco-color2", "disco-color3", "disco-color4");
      cells[j].classList.add("disco-color5");
    }

  }

};


function damierLabyrinth(){

  clearDamier();

  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      const cell = document.querySelector('.js-row' + (i + 1) + '.js-col' + (j + 1));
      if(grid[i][j] === 1){
        cell.classList.add('black');
      }
    }
  }
}


function damierPush(push){

  push.target.classList.remove("pull", "boom")
  push.target.classList.add("push")
}

function damierPull(pull){

  pull.target.classList.remove("push", "boom")
  pull.target.classList.add("pull")

}

function damierBoom(boom){

  boom.target.classList.remove("push", "pull")
  boom.target.classList.add("boom")
}

/**************************************************************/
/*                      Event listeners                       */
/**************************************************************/

// Les Event Listener sont déclarés ici.

/**************************************************************/
/*                       Main Program                         */
/**************************************************************/

// IMPORTANT Rappel : Pas de traitement ici,
// uniquement les déclarations des Event Listener.

document.addEventListener('DOMContentLoaded', function() {
 
  console.log('Damier');

  // 1. Lorsque l'utilisateur clique sur le bouton "js-damier",
  // Afficher un damier dans la grille

  // TIP : Ajouter la classe .black sur les cases concernées

 jsDamierBtn.addEventListener("click", damier);

  // 2. Lorsque l'utilisateur clique sur le bouton "js-disco",
  // Afficher un dancefloor de lumières dans la grille

  // TIP : Ajouter les classes .color1, ... .color5 aléatoirement

  jsDiscoBtn.addEventListener("click", damierColor);

  // 3. Lorsque l'utilisateur clique sur le bouton "js-labyrinth",
  // Afficher le motif présent sur le bouton dans la grille

  // TIP : Ajouter la classe .black sur les cases concernées

  jsLabyrinthBtn.addEventListener("click", damierLabyrinth);

  // 4. Lorsque l'utilisateur enfonce le bouton de la souris sur une case (classe "js-cell"),
  // Afficher "push" sur fond jaune (utiliser la classe "push")
  // Puis, lorsqu'il relâche le bouton, 
  // afficher "pull" sur fond orange (utiliser la classe "pull")
  // Enfin, s'il double clique sur la case,
  // afficher "boom" sur fond rouge (utiliser la classe "boom")
  cells.forEach(function(e){

    e.addEventListener("mousedown", damierPush);

  });

  cells.forEach(function(e){

    e.addEventListener("mouseup", damierPull);

  });

  cells.forEach(function(e){

    e.addEventListener("dblclick", damierBoom);

  });

  // 5. Lorsque l'utilisateur appuie sur une des 4 flèches du clavier,
  // Afficher bobby et le déplacer sur le grille (de case en case)

  // TIP : Ajouter la classe visible sur la div ayant l'id "bobby"
  // Le déplacer de case en case
  // dans la direction de la flèche appuyée


  // 6. Chaque seconde, un chat se déplace aléatoirement sur les cases du plateau

  // TIP : Ajouter un timer qui déplace la div ayant l'id "cat" d'une case
  // dans une direction aléatoire toutes les secondes

});
