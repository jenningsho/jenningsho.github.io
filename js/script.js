// Menu hamburger evenement au click
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")
 
menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})


/*  animation slider

1 : empiler les images les unes sur les autres
2 : gestion de la classe active : l'image qui aura la classe active sera celle avec une opacité de 1 , les autres seront a 0.
3 : variable utilses 
    - img__slider : liste de toutezs les images
    - etape  : permet de savoir quelle image afficher.
    - nbr__img : permet de savoir le nombre d'images.

4 : les fonctions enleverActiveImages() : permet d'enlever la classe active sur toute les images

5 : les évenements on click.
*/

const projectSlider = document.getElementsByClassName("img_slider");
console.log(projectSlider);

let etape = 0;


let nbr__img = projectSlider.length;


const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function enleverActiveImages(){
    for(let i= 0 ; i < nbr__img ; i++){
        projectSlider[i].classList.remove('active');
    }
}

// Quand on clique sur le bouton suivant
next.addEventListener("click", function(){
    etape++;
    // Si l'etape est sup ou ega aux nombre d'image
    if(etape >= nbr__img){
        etape = 0;
    }
    enleverActiveImages();
    projectSlider[etape].classList.add('active');

})


// Quand on clique sur le bouton precedent
prev.addEventListener("click", function(){
    etape--;
    // Si l'etape est sup ou ega aux nombre d'image
    if(etape < 0){
        etape = nbr__img - 1;
    }
    enleverActiveImages();
    projectSlider[etape].classList.add('active');

})

