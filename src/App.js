import React, {Component} from 'react';
import './game.css';
import './App.css';
import * as Core from './core'
import { STATE } from "./states"

const SUBMIT = '$'
const CLEAR = 'x'

function App() {
	return (
		<CoreContainer/>
	)
}

class CoreContainer extends Component{
	constructor(props){
		super(props)
		this.state = {
			guess: '',
			correct: Core.generateCorrectGuess(),
			gameState: STATE.INITIAL,
			history: []
		}
	}

	handleGuessInput = (evt) => {
		const isFromKey = evt.target.nodeName === 'BUTTON'
		const value = evt.target.value
		const char = isFromKey ? value : value.substring(value.length - 1)

		if (!isFromKey && value.length < this.state.guess.length){
			this.setState((state) => ({
				guess: state.guess.substring(0, state.guess.length-1)
			}))
		}
		else if(char === '\n' || (isFromKey && char === SUBMIT))
			this.submitGuess()
		else if (isFromKey && char === CLEAR)
			this.setState({ guess: '' })
		else if(this.state.guess.length > Core.config.maxChar - 1)
			this.setState((state) => ({
				guess: state.guess
			}))
		else if (char.match(/^\d$/)){
			this.setState((state) => ({
				guess: state.guess += char
			}))
		}

	}

	submitGuess = () => {
		Core.validateGuessString(this.state.guess)
		this.setState((state) => ({
			guess: '',
			history: state.history.concat(state.guess),
			gameState: Core.evaluateGuess(
				parseInt(state.guess),
				state.correct,
				state.history
			)
		}))
	}

	render = () => {
		return (
		<div className='center'>
			<p>{`correct: ${this.state.correct} | tries: ${this.state.history.length}`}</p>
			<DialogueDisplay text = {this.state.gameState.text}/>
			<NumberDisplay value = {this.state.guess} onChange = {this.handleGuessInput}/>
			<NumberPad keyPressHandler = {this.handleGuessInput}/>
		</div>
		)
	}
}

const DialogueDisplay = (props) => {
	return (
		<div>{props.text}</div>
	)
}

const NumberDisplay = (props) => {
	return (
		<textarea
			value = {props.value}
			className = 'number-display'
			onChange = {props.onChange}
		/>
	)
}

const NumberPad = (props) => {
	const renderNumberKey = (char) => {
		return (
			<NumberKey
				value = {char}
				onClick = {props.keyPressHandler}
			/>
		)
	} 

    return (
      <div>
        <div className="number-pad-row">
          {renderNumberKey(7)}
          {renderNumberKey(8)}
          {renderNumberKey(9)}
        </div>
        <div className="number-pad-row">
          {renderNumberKey(4)}
          {renderNumberKey(5)}
          {renderNumberKey(6)}
        </div>
        <div className="number-pad-row">
          {renderNumberKey(1)}
          {renderNumberKey(2)}
          {renderNumberKey(3)}
        </div>
        <div className="number-pad-row">
          {renderNumberKey(CLEAR)}
          {renderNumberKey(0)}
          {renderNumberKey(SUBMIT)}
        </div>
      </div>
    );
}

const NumberKey = (props) => {
	return (
		<button className='number-key' onClick={props.onClick} value={props.value}>
			{props.value}
		</button>
	)
}

export default App;
