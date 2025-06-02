document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navMenu.setAttribute('data-visible', !isExpanded);
    });
});

const figures = document.querySelectorAll('.gallery figure img');
const overlay = document.getElementById('imageOverlay');
const overlayImg = document.getElementById('overlayImg');

figures.forEach(img => {
    img.addEventListener('click', () => {
        overlayImg.src = img.src;
        overlay.classList.add('show');
    });
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        overlay.classList.remove('show');
        overlay.classList.remove('clicked');
    }
});
