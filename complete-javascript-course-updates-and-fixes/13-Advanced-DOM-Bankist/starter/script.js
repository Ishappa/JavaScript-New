'use strict';

///////////////////////////////////////
// Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('first-cls');
message.innerHTML =
  'we use cookies for improve the functionality. <button class="btn--demo"> click </button>';

// console.log(message);
// header.prepend(message);
header.append(message);
// header.before(message);
// header.after(message);

//delete
document.querySelector('.btn--demo').addEventListener('click', function () {
  // message.remove();
  message.parentElement.removeChild(message);
});

//styles
// message.style.backgroundColor = '#37383d';
// message.style.color = 'white';
// message.style.fontSize = '15px';
// message.style.width = '120%';
// // message.style.alignContent = 'center';

// message.style.display = 'flex';
// message.style.justifyContent = 'center';
// message.style.padding = '10px';

// console.log(getComputedStyle(message));

// Scrolling properties
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords1 = section1.getBoundingClientRect();
  console.log(s1coords1);

  console.log(e.target.getBoundingClientRect());

  console.log('current scroll (x/y)', window.scrollX, window.scrollY);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling working=======================================

  // window.scrollTo(
  //   s1coords1.left + window.scrollX,
  //   s1coords1.top + window.scrollY
  // );

  //-----------------or ------------------

  // window.scrollTo({
  //   left: s1coords1.left + window.scrollX,
  //   top: s1coords1.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  //-------------or-----------------
  section1.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    // inline: 'nearest',
  });
});

// =======================================================================
