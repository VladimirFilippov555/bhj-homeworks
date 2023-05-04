'use strict'

const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const arrayLink = Array.from(document.querySelectorAll('.dropdown__link'));

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
});

for (let index = 0; index < arrayLink.length; index++) {
    const item = arrayLink[index].closest('.dropdown__item');
    item.onclick = () => {
       dropdownValue.textContent = arrayLink[index].textContent;
       dropdownList.classList.remove('dropdown__list_active');
       return false;
    };
}
