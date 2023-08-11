// Tonggle Class Active

const navbarNav = document.querySelector('.navbar-nav');

// While hamburger menu clicked
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}
//

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Testimoni
const testimonialsSlider = document.querySelector('.testimonials-slider');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentPosition = 0;

prevButton.addEventListener('click', () => {
  currentPosition += 100; // Sesuaikan perubahan ini dengan lebar setiap testimonial
  if (currentPosition > 0) {
    currentPosition = 0;
  }
  testimonialsSlider.style.transform = `translateX(${currentPosition}%)`;
});

nextButton.addEventListener('click', () => {
  currentPosition -= 100; // Sesuaikan perubahan ini dengan lebar setiap testimonial
  const maxPosition = -((testimonialsSlider.children.length - 1) * 100); // Sesuaikan ini dengan jumlah testimonial
  if (currentPosition < maxPosition) {
    currentPosition = maxPosition;
  }
  testimonialsSlider.style.transform = `translateX(${currentPosition}%)`;
});

