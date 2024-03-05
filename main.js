const navEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-details')

navEmail.addEventListener("click", toogleDesktopMenu);
menuHamburguer.addEventListener('click', toogleMobileMenu )
menuCarritoIcon.addEventListener('click', toogleCarritoMenu )

function toogleDesktopMenu(){
    menuDesktop.classList.toggle('inactive');
}
function toogleMobileMenu(){
    menuMobile.classList.toggle('inactive');
}
function toogleCarritoMenu(){
    menuCarrito.classList.toggle('inactive')
}

