"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInt = exports.evaluateGuess = exports.verifyGuessString = exports.generateCorrectGuess = void 0;
const states_1 = require("./states");
const config = {
    minGuess: 0,
    maxGuess: 100,
    maxCount: 7
};
states_1.STATE.INITIAL.text = states_1.STATE.INITIAL.text
    .replace('MIN', config.minGuess.toString())
    .replace('MAX', config.maxGuess.toString());
const generateCorrectGuess = () => (0, exports.getRandomInt)(config.minGuess, config.maxGuess);
exports.generateCorrectGuess = generateCorrectGuess;
const verifyGuessString = (guessStr) => {
    if (!guessStr?.match(/^\d{1,3}$/))
        throw new Error(`wrong guess format: ${guessStr}`);
    const guess = parseInt(guessStr);
    if (guess > 100 || guess < 0)
        throw new Error(`guess [${guess}] out of range (${config.maxGuess} <= x >= ${config.minGuess})`);
};
exports.verifyGuessString = verifyGuessString;
const evaluateGuess = (chosen, correct, history) => {
    if (chosen === correct)
        return states_1.STATE.VICTORY;
    else if (history.length + 1 > config.maxCount)
        return states_1.STATE.DEFEAT;
    else if (chosen > correct)
        return states_1.STATE.LESSER;
    else if (chosen < correct)
        return states_1.STATE.GREATER;
};
exports.evaluateGuess = evaluateGuess;
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * max + min);
};
exports.getRandomInt = getRandomInt;
