'use strict'

const timerHours = document.getElementById('timer-hours');
const timerMinutes = document.getElementById('timer-minutes');
const timerSeconds = document.getElementById('timer-seconds');
let hours = timerHours.textContent;
let minutes = timerMinutes.textContent;
let seconds = timerSeconds.textContent;

function countDown() {
    seconds--;
    if (seconds === -1) {
        minutes--;
        if (minutes === -1) {
            hours--;
            if (hours === -1) {
                alert('Вы победили в конкурсе!');
                return;
            }
            minutes = 59;
        }
        seconds = 59;
    }
    
    timerHours.textContent = ('0' + hours).slice(-2);
    timerMinutes.textContent = ('0' + minutes).slice(-2);
    timerSeconds.textContent = ('0' + seconds).slice(-2);

    setTimeout(countDown, 1000);
}
    
countDown();
