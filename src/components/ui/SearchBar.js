import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		const { getQuery } = this.props;

		const onChange = (q) => {
			getQuery(q);
		};

		return (
			<section className="search">
				<form>
					<input
						type="text"
						className="form-control"
						placeholder="Search for a character"
						onChange={(e) => onChange(e.target.value)}
						autoFocus
					/>
				</form>
			</section>
		);
	}
}

export default SearchBar;
