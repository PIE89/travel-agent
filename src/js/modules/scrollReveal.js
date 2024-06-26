import ScrollReveal from "scrollreveal";

// Базовые настройки
ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

function scrollRevealFunc() {
  ScrollReveal().reveal(`.header, .partners`, {
    distance: "0px",
    opacity: 0,
  });

  ScrollReveal().reveal(`.popular__title`, {
    origin: "top",
  });

  ScrollReveal().reveal(`.discover__picture-hint, .discover__title`, {
    origin: "left",
  });

  ScrollReveal().reveal(
    `.discover__picture-scroll, .discover__text, .popular__controls`,
    {
      origin: "right",
    }
  );

  ScrollReveal().reveal(`.discover__picture-img`, {
    origin: "bottom",
  });
}

export default scrollRevealFunc;
