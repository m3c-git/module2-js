'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
const firingBtn = document.querySelector("#firing-button");
const rocket = document.querySelector("#rocket");

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
let i = 3;
let affichage = document.querySelector("span");
function decompte(){
    
    const interval = setInterval(function(){

    affichage.textContent = `${--i}`;
    
    if(i === 0){

            rocket.setAttribute("src", "images/rocket3.gif");
            rocket.classList.add("tookOff");
            affichage.textContent = "0";
            console.log("zero")
            clearInterval(interval)
        }

    }, 1000);
    firingBtn.classList.add("disabled");
    affichage.textContent = `${i}`;
    rocket.setAttribute("src", "images/rocket2.gif");
    
    
}





/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    
    firingBtn.addEventListener("click", decompte)
    
    
    });