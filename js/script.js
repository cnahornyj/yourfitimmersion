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
