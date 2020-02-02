var slides = document.querySelectorAll('.carousel img');
var currentSlide = 0;
setInterval(goRight,5000);

function goLeft() {
    slides[currentSlide].className = 'slide';
    currentSlide--;
    if (currentSlide == -1) {
        currentSlide = 2;
    }
    slides[currentSlide].className = 'slide active';
}

function goRight() {
    slides[currentSlide].className = 'slide';
    currentSlide++;
    if (currentSlide == 3) {
        currentSlide = 0;
    }
    slides[currentSlide].className = 'slide active';
}