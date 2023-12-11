'use strict'

function ballMove() {
    document.querySelector("#ball").style.transform = "translate(1920px)";
    document.querySelector("#ball").style.transition = " 3s";
    


       console.log(document.querySelector("#ball").getBoundingClientRect()); 
       console.log(window.innerWidth);
};

document.addEventListener("DOMContentLoaded", function(){


    window.requestAnimationFrame(ballMove)

})