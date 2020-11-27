import React, { Component } from 'react';

class Buttons extends Component {
	render() {
		const { data, handlePrevious, handleNext } = this.props;
		return (
			<div className="buttons">
				<p>Page 1 of {data.pages}</p>
				<button onClick={handlePrevious}>LEFT</button>
				<button onClick={handleNext}>RIGHT</button>
			</div>
		);
	}
}

export default Buttons;
