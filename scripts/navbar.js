const header = document.querySelector(".header");
const menuHamburger = document.querySelector("#menu_checkbox");
const mobileMenu = document.querySelector(".header-mobile-menu-list");
const mobileMenuLinks = document.querySelectorAll(
  ".header-mobile-menu-list__item a"
);
const mobileMenuCheckbox = document.querySelector("#menu_checkbox");

/**
 * events listeners
 */
window.onscroll = toggleStickyNavbar;
menuHamburger.addEventListener("click", toggleMobileMenu);
mobileMenuLinks.forEach((link) =>
  link.addEventListener("click", closeMobileMenu)
);

/**
 * handlers
 */
function toggleStickyNavbar() {
  let headerPosition = header.offsetTop;
  let scroll = window.scrollY;

  if (scroll > headerPosition) {
    header.classList.add("header--sticky");
  } else {
    header.classList.remove("header--sticky");
  }
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("header-mobile-menu-list--open");
}

function closeMobileMenu() {
  setTimeout(() => {
    mobileMenu.classList.remove("header-mobile-menu-list--open");
    mobileMenuCheckbox.checked = false;
  }, 200);
}
