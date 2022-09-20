/* Imports */

/* Get DOM Elements */
// messages
const scoreboardDisplay = document.getElementById('scoreboard');
const resultDisplay = document.getElementById('results-display');
//fairy card
const fairyHP = document.getElementById('fairy-hp');
const fairyImage = document.getElementById('fairy-image');

/* State */
let defeated = 0;
let result = 'Click on villian to sprinkle with fairy dust...';

let fairy = {
    hp: 20,
    type: 'fairy',
};

/* Events */

/* Display Functions */
function displayScoreboard() {
    scoreboardDisplay.textContent = `You have defeated ${defeated} villians.`;
}

function displayResult() {
    resultDisplay.textContent = result;
}

function displayFairy() {
    fairyHP.textContent = Math.max(0, fairy.hp);
    if (fairy.hp < 1) {
        fairyImage.src = 'assets/other/dead.png';
    } else {
        fairyImage.src = `assets/other/${fairy.type}.png`;
    }
}

// (don't forget to call any display functions you want to run on page load!)

displayFairy();
displayResult();
displayScoreboard();
