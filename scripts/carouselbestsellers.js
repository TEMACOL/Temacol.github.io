document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".best-sellers .carousel-track");
    const slides = document.querySelectorAll(".best-sellers .product-slide");
    const nextBtn = document.querySelector(".best-sellers .next");
    const prevBtn = document.querySelector(".best-sellers .prev");
    const dots = document.querySelectorAll(".best-sellers .dot");

    let currentIndex = 0;
    const visibleSlides = 3;

    function updateCarousel(index) {
        const slideWidth = slides[0].offsetWidth + 20;
        const maxIndex = Math.ceil(slides.length / visibleSlides) - 1;

         if (index > maxIndex) {
            index = 0;
        }
        if (index < 0) {
            index = maxIndex;
        }

        track.style.transform = `translateX(-${index * slideWidth}px)`;

        dots.forEach((dot) => dot.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");

        currentIndex = index;
    }

    nextBtn.addEventListener("click", () => {
        updateCarousel(currentIndex + 1);
    });

    prevBtn.addEventListener("click", () => {
        updateCarousel(currentIndex - 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => updateCarousel(index));
    });
});
