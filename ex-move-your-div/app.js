/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/

document.addEventListener("DOMContentLoaded", (event) => {

    //boutton click
    const carre = document.querySelector(".red");
    const btnClick = document.querySelector("#moveDiv")

        let i = 0
        console.log(i)
        btnClick.addEventListener("click", function(){
            carre.style.left = "100%"
            if(i === 0)
            {
                carre.style.left = "100%"
                carre.style.top = "0"
                console.log(i)
                i++
            }            
             if(i === 1)
            {
                carre.style.left = "100%"
                carre.style.top = "100%"            
                i++
            }
             if(i === 2)
            {
                carre.style.left = "0"
                carre.style.top = "100%"
                console.log(i)
            }
            if(i === 3)
            {
                carre.classList.remove("gauchebas")
console.log(i)
            }
 

        });





    //boutton hide
    const btnModal = document.querySelector("#hideModal");
    btnModal.addEventListener("click", function(){
        document.querySelector(".modal").classList.toggle("active")
    });
    


  });