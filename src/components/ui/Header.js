import React, { Component } from 'react';
import titleImg from '../../img/title.png';

class Header extends Component {
	render() {
		return (
			<header className="center">
				<img src={titleImg} alt="Rick and Morty Title Logo" />
			</header>
		);
	}
}

export default Header;
