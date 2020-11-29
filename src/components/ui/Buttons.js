import React, { Component } from 'react';

class Buttons extends Component {
	render() {
		const { data, handlePrevious, handleNext, page } = this.props;
		return (
			<div className="buttons">
				<p>
					Page {page} of {data.pages}
				</p>
				{page !== 1 && <i onClick={handlePrevious} className="fas fa-arrow-left" />}
				{page !== data.pages && <i onClick={handleNext} className="fas fa-arrow-right" />}
			</div>
		);
	}
}

export default Buttons;
