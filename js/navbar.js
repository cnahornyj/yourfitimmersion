// Sélectionne l'élément burger et les liens du menu
const burgerIcon = document.getElementById("burger-icon");
const navLinks = document.getElementById("nav-links");

// Ajouter un écouteur d'événements pour le clic sur l'icône burger
burgerIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Ajoute ou supprime la classe active
});
