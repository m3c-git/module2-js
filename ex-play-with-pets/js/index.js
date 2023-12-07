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

    document.addEventListener("keydown", function(event){
        let = i = 0
       switch (event.code) {
        case "ArrowLeft":
            console.log(event.code)
            i--
            couverture.style.margin = `1em 1em 1em ${i}%`;
          break;
        case "ArrowRight":
            console.log(event.code)
            i++
            couverture.style.margin = `1em 1em 1em ${i}%`;
          break;
        default:
          console.log("La touche " + event.code + " n'est pas autorisée.");
      } 

    });
    

    // TODO : Les races de chat
    // Afficher la bulle sur le chat au clic sur le bouton
    // L'élément est accessible via la classe .js-race-chat-cover::after


    // TODO : Les races de chat
    // Si on clique sur l'image, changer la photo
    // L'image est contenue dans un élément qui a la classe .js-race-chat-cover


    // TODO : Les races de chat
    // Dans la liste, Mettre en gras le Sacré de Birmanie et le Tigré
    // La liste est accessible via la classe .js-race-chat-list

});
