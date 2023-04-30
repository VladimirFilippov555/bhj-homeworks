'use strict'

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let deadCount = 0;
let lostCount = 0;


function newGame() {
  deadCount = 0;
  lostCount = 0;
  dead.textContent = deadCount;
  lost.textContent = lostCount;
  return;
}

function getHole(index) {
  for (let i = 1; i <= index; i++) {
    let hole = document.getElementById(`hole${i}`);
    hole.onclick = function () {
      if (hole.classList.contains("hole_has-mole")) {
        deadCount++;
        dead.textContent = deadCount;
      } else {
        lostCount++;
        lost.textContent = lostCount;
      }

      if (deadCount === 10) {
        alert("Победа!");
        newGame();
      }

      if (lostCount === 5) {
        alert("Вы проиграли!");
        newGame();
      }
    };
  }
}

getHole(9);