/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Il s'agit de plusieurs petits exercices indépendants.

*/
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

document.addEventListener('DOMContentLoaded', () => {

    console.log('Play with pets');

    // TODO : Modale
    // Lorsqu'on clique sur le bouton d'aide (identifiant : help-button)
    // Ouvrir la modale (identifiant popup-help)
    // Lorsque'on clique sur la croix en haut à droite de la modale,
    // (elle porte la classe js-close-button)
    // Fermer la modale

    const helpBtn = document.querySelector("#help-button");
    const modal = document.querySelector('#popup-help')
    const modalClose = document.querySelector(".js-close-button")

    helpBtn.addEventListener("click", function(){
        modal.style.display = "block"
    });

    modalClose.addEventListener("click", function(){
        modal.style.display = "none"
    });


    // TODO : Couverture
    // La faire défiler de gauche à droite avec les flèches
    // L'image est contenue dans un élément qui a la classe .js-main-cover

    const couverture = document.querySelector(".js-main-cover")
    let i = 0
    document.addEventListener("keydown", function(event){
        
       switch (event.code) {
        case "ArrowLeft":
            couverture.style.transform = "translate(-200px)";
            couverture.style.transition ="3s"
          break;
        case "ArrowRight":
            couverture.style.transform = "translate(200px)";
            couverture.style.transition = "3s"
          break;
        default:
          console.log("La touche " + event.code + " n'est pas autorisée.");
      } 

    });
    

    // TODO : Les races de chat
    // Afficher la bulle sur le chat au clic sur le bouton
    // L'élément est accessible via la classe .js-race-chat-cover::after

    const raceBtn = document.querySelector(".js-race-chat-cover button");
    const raceChatAfter = document.querySelector(".js-race-chat-cover");

    raceBtn.addEventListener("click", function(){
        raceChatAfter.classList.toggle("visible")
        

    });

    // TODO : Les races de chat
    // Si on clique sur l'image, changer la photo
    // L'image est contenue dans un élément qui a la classe .js-race-chat-cover

    const raceChat = document.querySelector(".js-race-chat-cover img");
    let j = 0;

    raceChat.addEventListener("click", function(){
        raceChat.setAttribute("src", "images/chat-mignon.png")

    });

    

    // TODO : Les races de chat
    // Dans la liste, Mettre en gras le Sacré de Birmanie et le Tigré
    // La liste est accessible via la classe .js-race-chat-list

    document.querySelector(".js-race-chat-list li:nth-child(6)").style.fontWeight  = "bold";
    document.querySelector(".js-race-chat-list li:nth-child(10)").style.fontWeight  = "bold";

 

});
