'use strict'

const arrayReveal = Array.from(document.querySelectorAll('.reveal'));

for (let index = 0; index < arrayReveal.length; index++) {
    const item = arrayReveal[index];
    
    window.addEventListener('scroll', function() {
        const {top, bottom} = item.getBoundingClientRect();
        if (bottom < 0 || top > window.innerHeight) { 
            item.classList.remove('reveal_active');
        } else {
            item.classList.add('reveal_active');
        }
    });
}

