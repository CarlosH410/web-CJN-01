document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Evento para el clic en el menú hamburguesa
    hamburger.addEventListener('click', () => {
        // Alternar clases "active" para la animación de la hamburguesa y la visibilidad del menú
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en cualquier enlace dentro del menú
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            // Si el menú está activo, lo cerramos
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
