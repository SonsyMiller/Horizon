let currentSlide = 0;
const slides = document.querySelectorAll('.blog-post-preview');
const totalSlides = slides.length;
const carousel = document.querySelector('.carousel');

function moveCarousel(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${currentSlide * 320}px)`; // Tamanho do card + margem
}

function autoMoveCarousel() {
    moveCarousel(1);
}

let autoSlide = setInterval(autoMoveCarousel, 3000);

// Para pausar o carrossel ao passar o mouse
document.querySelector('.carousel-container').addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
    autoSlide = setInterval(autoMoveCarousel, 3000);
});


window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    let parallaxImage = document.querySelector('.parallax');

    // Controla o movimento da imagem no sentido inverso
    let parallaxSpeed = -0.1;
    
    // Ajusta o valor de translateY para mover a imagem conforme o scroll
    parallaxImage.style.transform = 'translateY(' + scrollPosition * parallaxSpeed + 'px)';
});
;


