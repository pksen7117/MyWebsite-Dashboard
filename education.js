let currentIndex = 0;
const carousel = document.querySelector('.certification-carousel');
const images = document.querySelectorAll('.certification-carousel img');

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('mousedown', handleTouchStart);
    document.addEventListener('mouseup', handleTouchEnd);
});

function handleKeyPress(event) {
    if (event.key === 'ArrowLeft') {
        showPreviousImage();
    } else if (event.key === 'ArrowRight') {
        showNextImage();
    }
}

let startX = 0;
let endX = 0;

function handleTouchStart(event) {
    startX = event.clientX;
}

function handleTouchEnd(event) {
    endX = event.clientX;
    handleSwipe();
}

function handleSwipe() {
    const threshold = 50;

    if (startX - endX > threshold) {
        showNextImage();
    } else if (endX - startX > threshold) {
        showPreviousImage();
    }
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

function updateCarousel() {
    const translateValue = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateValue}vw)`;
}
