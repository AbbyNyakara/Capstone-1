// Mobile Menu
const open = document.querySelector('.top-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const close = document.querySelector('.cancel');

open.addEventListener('click', () => {
  mobileMenu.classList.add('show');
});

close.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
});

// Create more button

const displayButton = document.getElementById('display-button');
const allFeatures = document.querySelectorAll('.featured-section .feature');

displayButton.addEventListener('click', () => {
  // alert("hello");
  allFeatures.forEach((oneFeature) => {
    oneFeature.classList.add('load-all');
    oneFeature.classList.remove('onload-display');
    displayButton.innerHTML = 'End of display';
  });
});