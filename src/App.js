import React from 'react';
import './App.css';

function App() {
	return (
		<NumberPad value='0'/>
	)
}

class NumberPad extends React.Component {
	handleClick(i) {

	}

	renderNumberKey(i) {
		return (
			<NumberKey>
				value = {i}
				onClick = {() => this.handleClick(i)}
			</NumberKey>
		)
	} 

	render() {
    return (
      <div>
        <div className="number-pad-row">
          {this.renderNumberKey(0)}
          {this.renderNumberKey(1)}
          {this.renderNumberKey(2)}
        </div>
        <div className="number-pad-row">
          {this.renderNumberKey(3)}
          {this.renderNumberKey(4)}
          {this.renderNumberKey(5)}
        </div>
        <div className="number-pad-row">
          {this.renderNumberKey(6)}
          {this.renderNumberKey(7)}
          {this.renderNumberKey(8)}
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
