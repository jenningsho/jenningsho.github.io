// Menu hamburger evenement au click
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
 
menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
});


document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
  } );

