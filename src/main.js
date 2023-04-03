/***** 
STICKY NAVBAR
******/

const navbar = document.querySelector('.menu');

window.onscroll = toggleStickyNavbar;

function toggleStickyNavbar() {
    let navbarPosition = navbar.offsetTop;
    let scroll = window.scrollY;
    if (scroll > navbarPosition) {
        navbar.classList.add("menu-sticky")
    } else  {
        navbar.classList.remove("menu-sticky")
    }
}

/***** 
COPYRIGHT
******/

const copyright = document.querySelector('.copyright');
copyright.innerHTML = `<p>@${new Date().getFullYear()}  Budgres | All rights reserved </p>`;


/*****
 HAMBURGER MENU
 *****/

 const menuItems = document.querySelector('.menu-items');

 function onHamburgerMenuClick() {
    console.log('click')
    menuItems.className += ' responsive';
 }
