const header = document.querySelector(".header");
const menuItems = document.querySelector(".menu-items");

window.onscroll = toggleStickyNavbar;

function toggleStickyNavbar() {
  let headerPosition = header.offsetTop;
  let scroll = window.scrollY;
  
  if (scroll > headerPosition) {
    header.classList.add("header-sticky");
  } else {
    header.classList.remove("header-sticky");
  }
}

function onHamburgerMenuClick() {
  console.log("click");
  menuItems.className += " responsive";
}