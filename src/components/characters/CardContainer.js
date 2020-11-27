import React, { Component } from 'react';
import Card from './Card';
import Spinner from '../ui/Spinner';

class CardContainer extends Component {
	render() {
		const { characters, isLoading } = this.props;

		return isLoading ? (
			<Spinner />
		) : (
			<section className="cards">{characters.map((item) => <Card key={item.id} data={item} />)}</section>
		);
	}
}

export default CardContainer;
