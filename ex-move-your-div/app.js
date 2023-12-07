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
        btnClick.addEventListener("click", function(){
            if(i === 0)
            {
                document.querySelector(".modal").classList.remove("active")

                carre.style.left = "100%"
                carre.style.top = "0"
                console.log(i)
                i++
            }            
            else if(i === 1)
            {
                carre.style.left = "100%"
                carre.style.top = "50%"   
                console.log(i)         
                i++
                
            }
             else if(i === 2)
            {
                carre.style.left = "0"
                carre.style.top = "50%"
                i++
                console.log(i)
            }
            else if(i === 3)
            {
                carre.style.left = "0"
                carre.style.top = "0"
                document.querySelector(".modal").classList.add("active")
                i = 0

            console.log(i)
            }
 

        });





    //boutton hide
    const btnModal = document.querySelector("#hideModal");
    btnModal.addEventListener("click", function(){
        document.querySelector(".modal").classList.toggle("active")
    });
    


  });