import React, { Component, PropTypes } from 'react';

class Navbar extends Component {
	render() {
		const { title } = this.props
		return (
			<nav className="navbar">
				<h1>{title}</h1>
			</nav>
		);
	}
}

export default Navbar;