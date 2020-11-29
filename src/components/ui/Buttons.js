import React, { Component } from 'react';

class Buttons extends Component {
	render() {
		const { data, handlePrevious, handleNext, page } = this.props;
		return (
			<div className="buttons">
				<p>
					Page {page} of {data.pages}
				</p>
				{page !== 1 && <button onClick={handlePrevious}>LEFT</button>}
				{page !== data.pages && <button onClick={handleNext}>RIGHT</button>}
			</div>
		);
	}
}

export default Buttons;
