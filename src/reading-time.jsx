import React from 'react'

export default class ReadingTime extends React.component {
	static propTypes = {
	    wordsPerMinute: React.propTypes.number
	};

	static defaultTypes = {
		wordsPerMinute = 270
	};

	contructor(props) {
		super(props);

		this.stata = {
			readTime = 0
		}
	}

	render() {
		return (
			<div> Hello Reading time</div>
		)
	}
}