const slides = document.querySelectorAll(
  '.portfolio__slider input[name="slider"]'
);
const sliderElement = document.querySelector(".portfolio__slider-cards");

let activeIndex = 0;
setInterval(() => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].checked = false;
  }
  activeIndex = (activeIndex + 1) % slides.length;
  slides[activeIndex].checked = true;
}, 5000);

let touchStartX = 0;
let touchEndX = 0;

sliderElement.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
});

sliderElement.addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  let diff = touchEndX - touchStartX;

  const slides = Array.from(
    document.querySelectorAll('.portfolio__slider input[type="radio"]')
  );

  let currentIndex = slides.findIndex((slide) => slide.checked);

  if (diff < 0) {
    // swipe left, go next
    slides[(currentIndex + 1) % slides.length].checked = true;
  } else if (diff > 0) {
    // swipe right, go previous
    slides[(currentIndex - 1 + slides.length) % slides.length].checked = true;
  }
}
