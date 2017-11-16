
// App
// ============
// All of JS is organised from here

// Imports
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div />
		);
	}
}

// Selector is fine, changes bg to red
document.querySelector('#app').style.background = 'red';

ReactDOM.render(<App />, document.querySelector('#app'));
