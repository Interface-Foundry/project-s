// nothing to do here, but we need products node in redux store
export default (state = [], action) => {
	switch (action.type) {
    case 'SET_STATE':
      return [
        ...action.response.inventory
      ]
    case 'SET_INVENTORY':
      console.log(action.response)
      debugger
      return [
        ...action.response
      ]
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

