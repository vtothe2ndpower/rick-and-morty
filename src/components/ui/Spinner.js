import React, { Component } from 'react';
import spinner from '../../img/spinner.gif';

class Spinner extends Component {
	render() {
		return <img src={spinner} style={{ width: '200px', margin: 'auto', display: 'block' }} alt="Loading" />;
	}
}

export default Spinner;
