import React, { Component, PropTypes } from 'react';

class ActionBlock extends Component {
	render() {
		const { numberInCart, toggleCart } = this.props
		return (
			<div className="action-block">
				<button
					className='btn btn-primary'
					onClick={() => toggleCart()}>
					open model <br/>
					#{numberInCart} Items in cart
				</button>
			</div> 
		);
	}
}

export default ActionBlock;