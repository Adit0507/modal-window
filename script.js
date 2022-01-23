'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');


const openModal = function() {                  // REALLY IMPORTANT
   
    modal.classList.remove('hidden');            // Here ('.hidden') won't be used.
    overlay.classList.remove('hidden'); 
};

const closeModal = function() {                 // REALLY IMPORTANT
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


for(let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', 
    openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {       // Refers to ARROW KEYS
    console.log(e.key);

    if(e.key == 'Escape' && !modal.classList.contains
    ('hidden')) {
        closeModal(); 
    }     
});