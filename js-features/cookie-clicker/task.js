'use strict'

const counter = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');
const image = document.getElementById('cookie');
let number = counter.textContent;
let pastTime = new Date();
let presentTime = new Date();

function cookieClicker() {
    number++;
    counter.textContent = number;
    
    if (image.width === 200) {
        image.width = '300';
    } else {
        image.width = '200';
    };

    presentTime = new Date();
    speed.textContent = ((presentTime - pastTime) / 1000).toFixed(2);
    pastTime = presentTime;
    return pastTime;
}

image.onclick = cookieClicker;

