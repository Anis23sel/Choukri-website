// script.js
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    // Calculer la nouvelle position
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Défilement automatique toutes les 3 secondes
setInterval(() => moveSlide(1), 3000);
