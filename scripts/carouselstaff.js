document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector("#staffTrack");
  const dots = document.querySelectorAll("#staffDots .dot");
  const prev = document.querySelector(".staff-prev");
  const next = document.querySelector(".staff-next");

  let currentIndex = 0;
  const itemsPerSlide = 3;
  const totalCards = track.children.length;
  const totalSlides = Math.ceil(totalCards / itemsPerSlide);

  function updateCarousel() {
    const slideWidth = track.offsetWidth / itemsPerSlide;
    const offset = currentIndex * slideWidth * itemsPerSlide;
    track.style.transform = `translateX(-${offset}px)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  });

  prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  updateCarousel();
});


