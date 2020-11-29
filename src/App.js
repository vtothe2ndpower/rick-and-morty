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
			page: 1
		};
	}

	setQuery = (e) => {
		this.getData(`https://rickandmortyapi.com/api/character/?name=${e}`);
	};

	togglePrevious = () => {
		console.log('PREVIOUS PAGE CLICKED!');
		this.getData(this.state.info.prev);
		this.setState((curState) => ({
			page: curState.page - 1
		}));
	};

	toggleNext = () => {
		console.log(this.state.info.next);
		this.getData(this.state.info.next);
		this.setState((curState) => ({
			page: curState.page + 1
		}));
	};

	getData = (url) => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
					console.log(data.error);
					// Add Alert
				} else {
					this.setState({ characters: data.results, isLoading: false, info: data.info });
				}
			})
			.catch((err) => console.log(err));
	};

	componentDidMount() {
		this.getData('https://rickandmortyapi.com/api/character/');
	}

	render() {
		const { isLoading, characters, info, page } = this.state;
		return (
			<div className="container">
				<Header />
				<SearchBar
					getQuery={(q) => {
						this.setQuery(q);
					}}
				/>
				<Buttons handlePrevious={this.togglePrevious} handleNext={this.toggleNext} data={info} page={page} />
				<CardContainer isLoading={isLoading} characters={characters} />
			</div>
		);
	}
}

export default App;
