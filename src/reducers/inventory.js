// nothing to do here, but we need products node in redux store
export default (state = {}, action) => {
	switch (action.type) {
		default:
			return state
	}
}

// selectors
export function getInventory(state, props) {
	return state.inventory;
}

export function getProduct(state, props) {
	let product = state.inventory.find(item => item.id === props.id);
	product.quantity = props.quantity
	return product
}

