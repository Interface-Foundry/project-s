import React, { Component, PropTypes } from 'react';
import Product from '../Product';

class InventoryList extends Component {
	render() {
		const { inventory, addToCart } = this.props
		return (
			<ul className="inventory-list">
				{inventory.map(product => (
					<li key={product.id} className="inventory-list__item">
						<Product {...product} addToCart={addToCart} />
					</li>
				))}
			</ul> 
		);
	}
}

export default InventoryList;