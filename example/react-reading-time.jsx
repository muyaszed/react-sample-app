import React from 'react'
import ReactDOM from 'react-dom'
// var React = require('react');
// var ReactDOM = require('react-dom');

class ReactReadingTime extends React.Component {
	render() {
		return (
			React.createElement('div', {className: 'container'}, 'Hello My React!')
		) 
	}
}

ReactDOM.render(<ReactReadingTime />, document.getElementById('react'))