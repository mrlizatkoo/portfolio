document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    const weatherContainer = document.getElementById('weather-content');

    
    navToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navMenu.setAttribute('data-visible', !isExpanded);
    });

    async function fetchWeather() {
        try {
            const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true'); // Paris
            const data = await response.json();
            const weather = data.current_weather;
            weatherContainer.innerHTML = `
                <p><strong>Mesto:</strong> Paríž</p>
                <p><strong>Teplota:</strong> ${weather.temperature}°C</p>
                <p><strong>Rýchlosť vetra:</strong> ${weather.windspeed} km/h</p>
            `;
        } catch (error) {
            weatherContainer.innerHTML = `<p>Chyba pri načítaní počasia.</p>`;
        }
    }

    fetchWeather();
});

const images = document.querySelectorAll('.gallery figure img');
const overlay = document.getElementById('imageOverlay');
const overlayImg = document.getElementById('overlayImg');

images.forEach(img => {
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
