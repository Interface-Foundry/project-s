import React, { Component, PropTypes } from 'react';
import Cart from '../../containers/Cart';
import InventoryList from './InventoryList';
import ActionBlock from './ActionBlock';

class Inventory extends Component {
	render() {

		const { inventory, open, numberInCart, addToCart, toggleCart } = this.props;
	  
		return (
			<div className='inventory'>
				<InventoryList 
					addToCart={addToCart}
					inventory={inventory}/>  
				<ActionBlock 
					toggleCart={toggleCart}
					numberInCart={numberInCart}/>
				{open && (
					<Cart />
				)}
			</div>
		);
	}
}

Inventory.propTypes = {
	inventory: PropTypes.array,
	open: PropTypes.bool.isRequired,
	numberInCart: PropTypes.number.isRequired,
	toggleCart: PropTypes.func.isRequired,
	addToCart: PropTypes.func.isRequired
}

export default Inventory;
