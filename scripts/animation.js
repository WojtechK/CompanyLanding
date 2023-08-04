const elementsToAnimate = document.querySelectorAll("[data-animation]");
elementsToAnimate.forEach((elem) => {
  elem.classList.add("element-to-animate");
});

const fadeInObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        // Element becomes fully visible
        entry.target.classList.add("fade-in");
      } else if (!entry.isIntersecting && entry.intersectionRatio === 0) {
        // Element disappears from the viewport
        entry.target.classList.remove("fade-in");
      }
    });
  },
  {
    threshold: [0, 1],
  }
);

elementsToAnimate.forEach((element) => {
  fadeInObserver.observe(element);
});
