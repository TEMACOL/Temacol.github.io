window.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".brands .carousel-track");
    const cards = document.querySelectorAll(
        ".brands .carousel-track .brand-card"
    );
    const nextBtn = document.querySelector(".brands .next");
    const prevBtn = document.querySelector(".brands .prev");
    const dots = document.querySelectorAll(".brands .dot");

    let currentIndex = 0;
    const visibleCards = 3;

    function updateCarousel(index) {
        const cardWidth = cards[0].offsetWidth + 20;
        const maxIndex = Math.ceil(cards.length / visibleCards) - 1;

        if (index > maxIndex) {
            index = 0;
        }
        if (index < 0) {
            index = maxIndex;
        }

        track.style.transform = `translateX(-${index * visibleCards * cardWidth}px)`;

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