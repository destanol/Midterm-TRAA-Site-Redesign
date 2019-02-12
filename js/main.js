
var modal = document.querySelector('.modal');
var curtain = document.querySelector('.curtain');
var modalTarget = document.querySelector('.allow');
var button = document.querySelector('.close');
var modalWrap = document.querySelector('.modalWrap'); 

function closeModal() {
  modal.style.display = 'none';
  curtain.style.display = 'none';
  modalWrap.style.display = 'none';
};

function openModal() {
  modal.style.display = 'flex';
  curtain.style.display = 'flex';
};



document.addEventListener('DOMContentLoaded', openModal);

// modalTarget.addEventListener('click', openModal);

button.addEventListener('click', closeModal);

curtain.addEventListener('click', closeModal);