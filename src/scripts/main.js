'use strict';

const man = $('.installation__man');
const pen = $('.installation__pen');
const ps = $('.installation__ps');
const slots = $('.installation__slots');
const figma = $('.installation__figma');

$(document).ready(function() {
  const page = $('.page');
  const hash = localStorage.getItem('hash');

  if (hash) {
    window.location.hash = hash;

    if (window.location.hash === '#menu') {
      localStorage.setItem('hash', window.location.hash);
      page.css('overflow', 'hidden');
    } else {
      page.css('overflow', 'visible');
    }
  }
});

$(window).on('hashchange', function() {
  const page = $('.page');

  if (window.location.hash === '#menu') {
    localStorage.setItem('hash', window.location.hash);
    page.css('overflow', 'hidden');
  } else {
    localStorage.removeItem('hash');
    page.css('overflow', 'visible');
  }
});

$(document).on('mousemove', function(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  pen.css('transform', `translate(-${mouseX / 80}px,-${mouseY / 80}px)`);
  man.css('transform', `translate(-${mouseX / 60}px,-${mouseY / 60}px)`);
  figma.css('transform', `translate(-${mouseX / 100}px,-${mouseY / 100}px)`);
  slots.css('transform', `translate(-${mouseX / 50}px,-${mouseY / 50}px)`);
  ps.css('transform', `translate(-${mouseX / 50}px,-${mouseY / 50}px)`);
});

const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = sliderItems.length - 1;
  } else if (slideIndex >= sliderItems.length) {
    slideIndex = 0;
  }

  sliderItems.forEach((item, index) => {
    if (index === slideIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  currentSlide = slideIndex;
}

prevButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

showSlide(currentSlide);
