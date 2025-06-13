const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".carousel-track .card");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
const visibleCards = 3;

function updateCarousel(index) {
  const cardWidth = cards[0].offsetWidth + 20;
  const maxIndex = Math.ceil(cards.length / visibleCards) - 1;

  if (index < 0) index = 0;
  if (index > maxIndex) index = maxIndex;

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
