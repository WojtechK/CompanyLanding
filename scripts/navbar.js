const header = document.querySelector(".header");

window.onscroll = toggleStickyNavbar;

function toggleStickyNavbar() {
  let headerPosition = header.offsetTop;
  let scroll = window.scrollY;
  
  if (scroll > headerPosition) {
    header.classList.add("header--sticky");
  } else {
    header.classList.remove("header--sticky");
  }
}
