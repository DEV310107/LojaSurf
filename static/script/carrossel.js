let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.opacity = 0;
            slide.style.display = 'block';
            fadeIn(slide);
        } else {
            slide.style.display = 'none';
        }
    });
}

function fadeIn(element) {
    let opacity = 0;
    element.style.opacity = opacity;
    const interval = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(interval);
        }
        opacity += 0.05;
        element.style.opacity = opacity;
    }, 20);
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex);
});
