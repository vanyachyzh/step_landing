/* eslint-disable no-undef */
'use strict';

const form = document.querySelector('.form');
const page = document.querySelector('.page');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

window.onload = function() {
  const hash = localStorage.getItem('hash');

  if (hash) {
    window.location.hash = hash;

    if (window.location.hash === '#menu') {
      localStorage.setItem('hash', window.location.hash);
      page.style.overflow = 'hidden';
    } else {
      page.style.overflow = 'visible';
    }
  }
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    localStorage.setItem('hash', window.location.hash);
    page.style.overflow = 'hidden';
  } else {
    localStorage.removeItem('hash');
    page.style.overflow = 'visible';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

let slideIndex = 1;

showSlides(slideIndex);

prev.addEventListener('click', () => {
  plusSlides(-1);
});

next.addEventListener('click', () => {
  plusSlides(1);
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  // dots[slideIndex - 1].className += ' active';
}
