/* eslint-disable no-undef */
'use strict';

const man = document.querySelector('.installation__man');
const pen = document.querySelector('.installation__pen');
const ps = document.querySelector('.installation__ps');
const slots = document.querySelector('.installation__slots');
const figma = document.querySelector('.installation__figma');

document.addEventListener('mousemove', function(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  pen.style.transform = `translate(-${mouseX / 80}px,-${mouseY / 80}px)`;
  man.style.transform = `translate(-${mouseX / 60}px,-${mouseY / 60}px)`;
  figma.style.transform = `translate(-${mouseX / 100}px,-${mouseY / 100}px)`;
  slots.style.transform = `translate(-${mouseX / 50}px,-${mouseY / 50}px)`;
  ps.style.transform = `translate(-${mouseX / 50}px,-${mouseY / 50}px)`;
});

// const form = document.querySelector('.form');
// const page = document.querySelector('.page');
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   form.reset();
// });

// window.onload = function() {
//   const hash = localStorage.getItem('hash');

//   if (hash) {
//     window.location.hash = hash;

//     if (window.location.hash === '#menu') {
//       localStorage.setItem('hash', window.location.hash);
//       page.style.overflow = 'hidden';
//     } else {
//       page.style.overflow = 'visible';
//     }
//   }
// };

// window.addEventListener('hashchange', () => {
//   if (window.location.hash === '#menu') {
//     localStorage.setItem('hash', window.location.hash);
//     page.style.overflow = 'hidden';
//   } else {
//     localStorage.removeItem('hash');
//     page.style.overflow = 'visible';
//   }
// });

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   form.reset();
// });

// let slideIndex = 1;

// showSlides(slideIndex);

// prev.addEventListener('click', () => {
//   plusSlides(-1);
// });

// next.addEventListener('click', () => {
//   plusSlides(1);
// });

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function showSlides(n) {
//   let i;
//   const slides = document.getElementsByClassName('mySlides');
//   const dots = document.getElementsByClassName('dot');

//   if (n > slides.length) {
//     slideIndex = 1;
//   }

//   if (n < 1) {
//     slideIndex = slides.length;
//   }

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }

//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }

//   slides[slideIndex - 1].style.display = 'block';
//   // dots[slideIndex - 1].className += ' active';
// }
