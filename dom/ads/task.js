'use strict'

const parentRotator = document.querySelector('.rotator');
const arrayRotator = Array.from(parentRotator.children);

for (let index = 0; index < arrayRotator.length; index++) {
    const item = arrayRotator[index];
    const colorCase = item.dataset.color;
    item.style.color = colorCase;
    
}

let rotatorId;

function rotator() {
    const firstCase = parentRotator.firstElementChild;
    const activeCase = document.querySelector(".rotator__case_active");
    const nextCase = activeCase.nextElementSibling;
    const lastCase = parentRotator.lastElementChild;
    
    if (lastCase.classList.contains("rotator__case_active")) {
        lastCase.classList.remove("rotator__case_active");
        firstCase.classList.add("rotator__case_active");
    } else {
        activeCase.classList.remove("rotator__case_active");
        nextCase.classList.add("rotator__case_active");
    }
        clearInterval(rotatorId);
        let time = document.querySelector(".rotator__case_active").dataset.speed;
        rotatorId = setInterval(rotator, time);
        return rotatorId; 
}

rotator();
 
 