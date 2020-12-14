'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btnsOpenDoc = document.querySelectorAll('.show-modal');
const btnClose = document.querySelector('.close-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenDoc.length; i++) {
  btnsOpenDoc[i].addEventListener('click', openModal);
}

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.code === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
