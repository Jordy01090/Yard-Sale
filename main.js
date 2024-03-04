const email = document.querySelector(".navbar-email")
const menuDesktop = document.querySelector('.desktop-menu')

email.addEventListener("click", toogleDesktopMenu)

function toogleDesktopMenu(){
    menuDesktop.classList.toggle('inactive')
}
