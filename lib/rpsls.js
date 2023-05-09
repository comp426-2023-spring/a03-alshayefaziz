export {rps, rpsls}

// helper function that will find random integer
function getRandom(options) {
    return options[Math.floor(Math.random() * options.length)];
}

// helper function that will check for valid options
function checkValid(option1, options) {
    return options.includes(option1);
}

// helper function that will check if conditions have been met to win
function checkWin(opiton1, option2, winConditions) {
    return winConditions[opiton1].includes(option2);
}

/* Play function:
Essentially a parent function that has the common code that rps and rpsls will have */


/* rps, I must ensure that varibale turn is defined
Ensure that the code is case agnostic by converting to lower case
Also ensure that I have a valid set of variables */

/* I will then compare turn1 to turn2, checking if they are equivalent, if a win condition has been met or return that they have lost.*/

// same will be repeated for rpsls
