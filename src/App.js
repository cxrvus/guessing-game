import React from 'react';
import './game.css';
import './App.css';

const CONFIRM = '$'
const CANCEL = 'x'

function App() {
	return (
		<CoreContainer/>
	)
}

function CoreContainer(){
	return (
		<div className='center'>
			<NumberDisplay/>
			<NumberPad/>
		</div>
	)
}

class NumberDisplay extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			value: ''
		}
	}

	render() {
		return (
			<textarea
				value = {this.state.value}
				className = 'number-display'
			/>
		)
	}
}

class NumberPad extends React.Component {
	handleClick(i) {

	}

	renderNumberKey(i) {
		return (
			<NumberKey
				value = {i}
				onClick = {() => this.handleClick(i)}
			/>
		)
	} 

	render() {
    return (
      <div>
        <div className="number-pad-row">
          {this.renderNumberKey(7)}
          {this.renderNumberKey(8)}
          {this.renderNumberKey(9)}
        </div>
        <div className="number-pad-row">
          {this.renderNumberKey(4)}
          {this.renderNumberKey(5)}
          {this.renderNumberKey(6)}
        </div>
        <div className="number-pad-row">
          {this.renderNumberKey(1)}
          {this.renderNumberKey(2)}
          {this.renderNumberKey(3)}
        </div>
        <div className="number-pad-row">
          {this.renderNumberKey(CANCEL)}
          {this.renderNumberKey(0)}
          {this.renderNumberKey('$')}
        </div>
      </div>
    );
	}
}

function NumberKey(props) {
	return (
		<button className='number-key'>
			{props.value}
		</button>
	)
}

export default App;
