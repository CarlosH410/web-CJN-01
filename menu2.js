document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.navbar .hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});