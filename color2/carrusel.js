const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
let currentIndex = 1;

nextButton.addEventListener('click', () => {
    if (currentIndex < 2) {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        currentIndex++;
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});
