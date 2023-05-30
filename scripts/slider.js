const slides = document.querySelectorAll('.slider-container input[name="slider"]');

let activeIndex = 0;
setInterval(() => {
    for(let i = 0; i < slides.length; i++) {
      slides[i].checked = false;
    }
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].checked = true;
  }, 5000);
