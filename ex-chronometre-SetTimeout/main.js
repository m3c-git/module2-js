'use strict'

/**************************************************************/
/*                        Consignes                           */
/**************************************************************/
/*

/* Un chronomètre avec SetTimeout
Nous allons devoir créer un chronomètre sur la page (nombre de secondes écoulées depuis le chargement de la page). 
Seule contrainte pour cet exercice, nous allons devoir utiliser setTimeout et non setInterval pour générer la mise à jour du Chronomètre. */

let i = 0;
function chrono(){
  
  affichageSecondes = document.querySelector("span")

   window.setTimeout(function(){
      affichageSecondes.textContent = `${i++}`;
      chrono();
    }, 1000);
  
}

document.addEventListener('DOMContentLoaded', function() {
 
chrono()
const start = Date.now();
console.log(getTime());

});

