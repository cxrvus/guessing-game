"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInt = exports.evaluateGuess = exports.validateGuessString = exports.generateCorrectGuess = exports.config = void 0;
const states_1 = require("./states");
exports.config = {
    minGuess: 0,
    maxGuess: 100,
    maxChar: 3,
    maxCount: 7
};
states_1.STATE.INITIAL.text = states_1.STATE.INITIAL.text
    .replace('MIN', exports.config.minGuess.toString())
    .replace('MAX', exports.config.maxGuess.toString());
const generateCorrectGuess = () => (0, exports.getRandomInt)(exports.config.minGuess, exports.config.maxGuess);
exports.generateCorrectGuess = generateCorrectGuess;
const validateGuessString = (guessStr) => {
    if (!guessStr?.match(/^\d{1,3}$/))
        throw new Error(`wrong guess format: ${guessStr}`);
    const guess = parseInt(guessStr);
    if (guess > 100 || guess < 0)
        return;
    //throw new Error(`guess [${guess}] out of range (${config.maxGuess} <= x >= ${config.minGuess})`)
};
exports.validateGuessString = validateGuessString;
const evaluateGuess = (chosen, correct, history) => {
    if (chosen === correct)
        return states_1.STATE.VICTORY;
    else if (history.length + 1 > exports.config.maxCount)
        return states_1.STATE.DEFEAT;
    else if (chosen > correct)
        return states_1.STATE.LESSER;
    else if (chosen < correct)
        return states_1.STATE.GREATER;
    else
        throw new Error('AAAAAAAAA');
};
exports.evaluateGuess = evaluateGuess;
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * max + min);
};
exports.getRandomInt = getRandomInt;
