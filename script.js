// Smooth Scroll on click for section navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Floating Hearts
setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💖';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 3}s`; // Random duration
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 1000); // Create a new heart every second

// Slideshow Code (with Fade Transitions)
let currentSlide = 0;
const slides = document.querySelectorAll('.photo-grid img');
const slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
    slides[currentSlide].style.opacity = 0;  // Fade out the current slide
    currentSlide = (currentSlide + 1) % slides.length;  // Move to the next slide
    slides[currentSlide].style.opacity = 1;  // Fade in the new slide
}

slides.forEach((slide, index) => {
    if (index !== 0) {
        slide.style.opacity = 0;
    }
});
