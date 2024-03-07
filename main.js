// CONECTING EMAIL NAVBAR WITH DESKTOP MENU
const navEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector('.desktop-menu');

navEmail.addEventListener("click", toogleDesktopMenu);

function toogleDesktopMenu(){
    shopCartAside.classList.add('inactive');//in order to disapear each others
    productDetailsAside.classList.add('inactive');
    menuDesktop.classList.toggle('inactive');
}

// CONECTING MENU ICON OF MOBILE WITH MOBILE MENU
const menuMobIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

menuMobIcon.addEventListener('click', toogleMobileMenu );

function toogleMobileMenu(){
    shopCartAside.classList.add('inactive');
    productDetailsAside.classList.add('inactive');
    menuMobile.classList.toggle('inactive');
}

// CONECTING CART ICON WITH SHOPPING CART ASIDE
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const shopCartAside = document.querySelector('.product-details-sc')

menuCartIcon.addEventListener('click', toogleCarritoMenu )

function toogleCarritoMenu(){
    menuDesktop.classList.add('inactive');
    menuMobile.classList.add('inactive');
    productDetailsAside.classList.add('inactive');
    shopCartAside.classList.toggle('inactive');
}

// CONECTING  PRODUCT IMAGE WITH PRODUCT DETAILS ASIDE
const productDetailsAside = document.querySelector('.product-details');
const productDetailsIcon = document.querySelector('.product-details-close');

productDetailsIcon.addEventListener('click', closeProductDetailAside)
function openProductDetailAside(){
    shopCartAside.classList.add('inactive');
    menuDesktop.classList.add('inactive');
    menuMobile.classList.add('inactive');
    productDetailsAside.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailsAside.classList.add('inactive');
}


/* CREATING THE PRODUCT LIST FROM JS */
var productList = [];
productList.push({
    name: 'Bike',
    price: '120.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computadora',
    price: '150.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Audifonos',
    price: '75.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Laptop',
    price: '40.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

for (product of productList){
    const contenedor = document.querySelector('.cards-container');
    
    const productCart = document.createElement('div');
    productCart.classList.add('product-card');
    
    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    // CONECTING  PRODUCT IMAGE WITH PRODUCT DETAILS ASIDE
    productImage.addEventListener('click', openProductDetailAside)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.append(product.price);
    const productName = document.createElement('p');
    productName.append(product.name);
    productInfoDiv.append(productPrice,productName);

    const productInfoFigure = document.createElement('figure');
    const addCartImg = document.createElement('img');
    addCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoFigure.append(addCartImg);

    productInfo.append(productInfoDiv,productInfoFigure);

    productCart.append(productImage,productInfo);
    
    contenedor.append(productCart);
}




