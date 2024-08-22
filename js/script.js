document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burger-icon');
    const navLinks = document.getElementById('nav-links');

    burgerIcon.addEventListener('click', function() {
        console.log('Burger icon clicked'); // Pour vérifier que l'événement de clic fonctionne
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
        }
    });
});

const slides = document.querySelectorAll('.carousel-slide');
const controls = document.querySelectorAll('.control');

let currentSlide = 0;
let transitionDelay = 1000; // Temps pour passer de l'image "avant" à "après" (1 seconde)
let slideInterval = 5000; // Temps entre chaque changement de slide (5 secondes)

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    controls[currentSlide].classList.remove('active');
    
    // Réinitialiser l'état de l'image "après" de la slide précédente
    const previousAfterImage = slides[currentSlide].querySelector('.after');
    previousAfterImage.classList.remove('visible');

    currentSlide = index;
    slides[currentSlide].classList.add('active');
    controls[currentSlide].classList.add('active');

    // Afficher l'image "après" après le délai avec une transition douce
    const currentAfterImage = slides[currentSlide].querySelector('.after');
    setTimeout(() => {
        currentAfterImage.classList.add('visible');
    }, transitionDelay);
}

function nextSlide() {
    let nextSlideIndex = (currentSlide + 1) % slides.length;
    showSlide(nextSlideIndex);
}

controls.forEach((control, index) => {
    control.addEventListener('click', () => {
        clearInterval(autoSlideInterval); // Arrêter le passage automatique lors d'un clic manuel
        showSlide(index);
        autoSlideInterval = setInterval(nextSlide, slideInterval); // Reprendre l'intervalle après le clic
    });
});

// Initialiser la première slide et la première transition
showSlide(0);

// Démarrer le carrousel automatique
let autoSlideInterval = setInterval(nextSlide, slideInterval);
