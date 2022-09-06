import { GameState, STATE } from "./states"

export const config = {
	minGuess: 0,
	maxGuess: 100,
	maxChar: 3,
	maxCount: 7
}



STATE.INITIAL.text = STATE.INITIAL.text
	.replace('MIN', config.minGuess.toString())
	.replace('MAX', config.maxGuess.toString())
;


export const generateCorrectGuess = () => getRandomInt(config.minGuess, config.maxGuess)

export const validateGuessString = (guessStr: string) => {
	if(!guessStr?.match(/^\d{1,3}$/))
		throw new Error(`wrong guess format: ${guessStr}`)

	const guess = parseInt(guessStr)
	if(guess > 100 || guess < 0)
		return
		//throw new Error(`guess [${guess}] out of range (${config.maxGuess} <= x >= ${config.minGuess})`)
}

export const evaluateGuess = (chosen: number, correct: number, history: number[]):GameState => {
	if(chosen === correct) return STATE.VICTORY
	else if(history.length+1 > config.maxCount) return STATE.DEFEAT
	else if(chosen > correct) return STATE.LESSER
	else if(chosen < correct) return STATE.GREATER
	else throw new Error('AAAAAAAAA')
}


export const getRandomInt = (min: number, max:number) => {
	return Math.floor(Math.random() * max + min)
}