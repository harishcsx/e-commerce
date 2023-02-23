let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide() {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  if (slideIndex === totalSlides - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlide();
}

function previousSlide() {
  if (slideIndex === 0) {
    slideIndex = totalSlides - 1;
  } else {
    slideIndex--;
  }
  showSlide();
}

showSlide();
setInterval(nextSlide, 5000);