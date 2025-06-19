document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".subcategory");

  sections.forEach((section) => {
    const track = section.querySelector(".product-track");
    const pages = section.querySelectorAll(".product-page");
    const btnLeft = section.querySelector(".scroll-btn.external.left");
    const btnRight = section.querySelector(".scroll-btn.external.right");
    const dotsContainer = section.querySelector(".carousel-dots");

    let currentIndex = 0;

    // Crear los puntos de navegación
    pages.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.toggle("active", i === 0);
      dot.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    });

    function updateCarousel() {
      const pageWidth = pages[0].offsetWidth;
      const offset = currentIndex * pageWidth;
      track.style.transform = `translateX(-${offset}px)`;

      // Actualizar los dots
      const dots = dotsContainer.querySelectorAll("span");
      dots.forEach((dot, i) =>
        dot.classList.toggle("active", i === currentIndex)
      );
    }

    if (btnLeft) {
      btnLeft.addEventListener("click", () => {
        currentIndex =
          currentIndex === 0 ? pages.length - 1 : currentIndex - 1;
        updateCarousel();
      });
    }

    if (btnRight) {
      btnRight.addEventListener("click", () => {
        currentIndex =
          currentIndex === pages.length - 1 ? 0 : currentIndex + 1;
        updateCarousel();
      });
    }
  });
});


