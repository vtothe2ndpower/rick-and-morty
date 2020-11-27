import React, { Component } from 'react';

class Card extends Component {
	render() {
		const { data } = this.props;

		return (
			<div className="card">
				<div className="card-inner">
					<div className="card-front">
						<img src={data.image} alt="" />
					</div>
					<div className="card-back">
						<h1>{data.name}</h1>
						<ul>
							<li>
								<strong>Gender:</strong> {data.gender}
							</li>
							<li>
								<strong>Species:</strong> {data.species}
							</li>
							<li>
								<strong>Status:</strong> {data.status}
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
