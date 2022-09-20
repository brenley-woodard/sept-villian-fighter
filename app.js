/* Imports */

/* Get DOM Elements */
const fairyHP = document.getElementById('fairy-hp');
const fairyImage = document.getElementById('fairy-image');
/* State */
let fairy = {
    hp: 20,
    type: 'fairy',
};
/* Events */

/* Display Functions */
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
