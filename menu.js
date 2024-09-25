// Menú de hamburguesa
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

// Cambiar el color de fondo de la barra de navegación al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// carrusel

const carouselInner = document.querySelector('.carousel-inner');
 
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentIndex = 0;
const indicators = document.querySelectorAll('.indicator');
const totalItems = 4; // Number of unique items

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems;
        carouselInner.style.transition = 'none';
        carouselInner.style.transform = `translateX(${-totalItems * 100}%)`;
        setTimeout(() => {
            carouselInner.style.transition = 'transform 0.5s ease';
            currentIndex--;
            updateCarousel();
        }, 0);
        return;
    }
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems) {
        currentIndex++;
    } else {
        currentIndex = 0;
        carouselInner.style.transition = 'none';
        carouselInner.style.transform = 'translateX(0)';
        setTimeout(() => {
            carouselInner.style.transition = 'transform 0.5s ease';
            currentIndex++;
            updateCarousel();
        }, 0);
        return;
    }
    updateCarousel();
});

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        currentIndex = parseInt(indicator.getAttribute('data-index'));
        updateCarousel();
    });
});    

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
    indicators.forEach((indicator, index) => {
        if (index === currentIndex % totalItems) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
    carouselInner.querySelectorAll('.carousel-item').forEach((item, index) => {
        if (index % totalItems === currentIndex % totalItems) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
} 





       


