'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // modal.style.display = 'block';
  // overlay.style.display = 'block';
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  // overlay.style.display = 'none';
  // modal.style.display = 'none';
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //   console.log('key pressed');
  console.log(e.key);
  if (e.key == 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
