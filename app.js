/* Imports */
import { renderVillian } from './render-utils.js';
import { getRandomItem } from './utils.js';

/* Get DOM Elements */
// messages
const scoreboardDisplay = document.getElementById('scoreboard');
const resultDisplay = document.getElementById('results-display');
//fairy card
const fairyHP = document.getElementById('fairy-hp');
const fairyImage = document.getElementById('fairy-image');
//villian
const villianList = document.getElementById('villian-list');
const addVillianForm = document.getElementById('add-villian-form');
/* State */
let defeated = 0;
let result = 'Click on a villian to hit them with glitter...';

let fairy = {
    hp: 20,
    type: 'fairy',
};

let villians = [
    {
        name: 'Brody',
        type: 'bat',
        hp: 1,
    },
    {
        name: 'Gerold',
        type: 'ghost',
        hp: 2,
    },
    {
        name: 'Michelle',
        type: 'mummy',
        hp: 3,
    },
];

// villian types
const bat = {
    type: 'bat',
    hp: 1,
};

const ghost = {
    type: 'ghost',
    hp: 2,
};

const mummy = {
    type: 'mummy',
    hp: 3,
};

const witch = {
    type: 'witch',
    hp: 4,
};

const zombie = {
    type: 'zombie',
    hp: 5,
};

const fairyAttacks = [0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5];
const villianAttacks = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3];
const villianTypes = [
    bat,
    bat,
    bat,
    ghost,
    ghost,
    ghost,
    mummy,
    mummy,
    mummy,
    witch,
    witch,
    zombie,
];

/* Events */
addVillianForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addVillianForm);
    const villianType = getRandomItem(villianTypes);

    const villian = {
        name: formData.get('name'),
        type: villianType.type,
        hp: villianType.hp,
    };
    villians.push(villian);

    result = `${villian.name} the ${villian.type} has joined the fight`;

    displayVillians();
    displayResult();

    addVillianForm.reset();
});

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

function displayVillians() {
    villianList.innerHTML = '';

    for (const villian of villians) {
        const villianEl = renderVillian(villian);
        villianList.append(villianEl);

        villianEl.addEventListener('click', () => {
            if (villian.hp < 1) {
                result = `No use throwing glitter at a dead villian`;
                displayResult();
                return;
            }
            const fairyAttack = getRandomItem(fairyAttacks);
            const villianAttack = getRandomItem(villianAttacks);

            fairy.hp = Math.max(0, fairy.hp - villianAttack);
            villian.hp = Math.max(0, villian.hp - fairyAttack);

            result = '';
            if (fairyAttack === 0) {
                result += 'You missed. ';
            } else {
                result += `You hit ${villian.name} and did ${fairyAttack} in damage. `;
            }

            if (villianAttack === 0) {
                result += `${villian.name} missed you.`;
            } else {
                result += `${villian.name} hit you and did ${villianAttack} in damage.`;
            }

            if (villian.hp < 1) {
                defeated++;
                displayScoreboard();
            }

            displayResult();
            displayFairy();
            displayVillians();
        });
    }
}

// (don't forget to call any display functions you want to run on page load!)

displayFairy();
displayResult();
displayScoreboard();
displayVillians();
