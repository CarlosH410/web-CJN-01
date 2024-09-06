// Menú de hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Función para alternar el menú de hamburguesa
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cambiar el color de fondo de la barra de navegación al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});