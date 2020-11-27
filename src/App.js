import React, { Component } from 'react';
import Header from './components/ui/Header';
import SearchBar from './components/ui/SearchBar';
import Buttons from './components/ui/Buttons';
import CardContainer from './components/characters/CardContainer';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			characters: [],
			info: {},
			query: ''
		};
	}

	setQuery = (e) => {
		this.setState({ query: e });
	};

	togglePrevious = () => {
		console.log('PREVIOUS PAGE CLICKED!');
	};

	toggleNext = () => {
		console.log('NEXT PAGE CLICKED!');
		this.setState({ URL: this.state.info.next });
	};

	componentDidMount() {
		fetch('https://rickandmortyapi.com/api/character/')
			.then((res) => res.json())
			.then((data) => this.setState({ characters: data.results, isLoading: false, info: data.info }));
	}

	componentDidUpdate() {
		fetch(`https://rickandmortyapi.com/api/character/?name=${this.state.query}`)
			.then((res) => res.json())
			.then((data) => this.setState({ characters: data.results, isLoading: false, info: data.info }));
	}

	render() {
		const { isLoading, characters, info } = this.state;
		return (
			<div className="container">
				<Header />
				<SearchBar
					getQuery={(q) => {
						this.setQuery(q);
					}}
				/>
				<Buttons handlePrevious={this.togglePrevious} handleNext={this.toggleNext} data={info} />
				<CardContainer isLoading={isLoading} characters={characters} />
			</div>
		);
	}
}

export default App;

// Add All Characters - Pages,
// Edit Styling

// Can Filter Function Be More Efficient?
