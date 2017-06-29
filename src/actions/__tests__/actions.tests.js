import expect from 'expect'
import * as actions from '..'

describe('action creators', () => {

	it('should create an action to add item to cart with a quantity', () => {
		const id = 1
		const quantity = 1
		const expectedAction = {
			type: 'CART_ADD',
			payload: { productId: id, quantity: quantity}
		}
		expect(actions.addToCart(id, quantity)).toEqual(expectedAction)
	})

	it('should create an action to remove item to cart', () => {
		const id = 1
		const expectedAction = {
			type: 'CART_REMOVE',
			payload: { productId: id }
		}
		expect(actions.removeFromCart(id)).toEqual(expectedAction)
	})

	it('should create an action to clear cart', () => {
		const expectedAction = {
			type: 'CART_CLEAR'
		}
		expect(actions.clearCart()).toEqual(expectedAction)
	})

	it('should create an action to toggle cart modal', () => {
		const expectedAction = {
			type: 'CART_TOGGLE'
		}
		expect(actions.toggleCart()).toEqual(expectedAction)
	})
})

