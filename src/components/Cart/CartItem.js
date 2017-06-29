import React, { Component, PropTypes } from 'react';

class CartItem extends Component {
	handleClick = () => {
		const { id, removeFromCart } = this.props;
		
		removeFromCart(id);
	}

	render() {
		const {type, price, quantity} = this.props

		return (
			<div className="cart__item">
				<span className="cart__item__type">{type}</span>
				<span className="cart__item__quantity">{quantity}</span>
				<span className="cart__item__price">${price}</span>
				<span className="cart__item__remove" onClick={this.handleClick}>Remove</span>
			</div>
		);
	}
}

CartItem.propTypes = {
	type: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	removeFromCart: PropTypes.func.isRequired
}

export default CartItem;
