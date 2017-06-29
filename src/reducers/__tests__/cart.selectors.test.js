import { isInCart, getItems, isCartOpen, getTotal, numberInCart } from '../cart'
import inventoryData from '../../data/inventory'; 

describe('isInCart', () => {

	const initialState = {
		open: false,
		items: [] 
	};

	it('should return false if item is not in cart', () => {
		expect(isInCart({cart: initialState}, {id: 1})).toEqual(false)
	})

	const secondState = {
		open: false,
		items: [{id: 1, quantity: 1}] 
	};

	it('should return true if item is in cart', () => {
		expect(isInCart({cart: secondState}, {id: 1})).toEqual(true)
	})

})

describe('isCartOpen', () => {
	const initialState = {
		cart: {
			open: true,
			items: [] // array of product ids
		}
	};

	it('should return true if cart is open', () => {
		expect(isCartOpen(initialState, {})).toEqual(true)
	})

	const secondState = {
		cart: {
			open: false,
			items: []  // array of product ids
		}
	};

	it('should return false if cart is open', () => {
		expect(isCartOpen(secondState, {})).toEqual(false)
	})
})

describe('getItems', () => {

	const initialState = {
		cart: {
			open: false,
			items: [] // array of product ids
		},
		inventory: inventoryData['chocolates']
	};

	it('should return empty if no items in cart', () => {
		expect(getItems(initialState, {})).toEqual([])
	})

	const secondState = {
		cart: {
			open: false,
			items: [{id: 1, quantity: 1}, {id: 2, quantity: 1}] 
		},
		inventory: inventoryData['chocolates']
	};

	it('should return all cart items', () => {
		expect(getItems(secondState, {})).toEqual([
			{
			  "description": "Milk chocolate milder and sweeter because it is made with milk and a higher sugar content than the darker varieties. It also has a smaller quantity of chocolate liquor and, therefore, fewer flavors and aromas.",
			  "id": 1,
			  "type": "milk",
			  "quantity": 1,
			  "price": 1.50
			},
			{
			  "description": "Dark chocolate has the most chocolate liquor and the most intense chocolate flavor. Look for bitter, roasted, fruit, earthy, woodsy and/or nutty notes.",
			  "id": 2,
			  "type": "dark",
			  "quantity": 1,
			  "price": 2.50,
			}
		])
	})

})

describe('getTotal', () => {
	const initialState = {
		cart: {
			open: false,
			items: [{id: 1, quantity: 2}, {id: 2, quantity: 1}]  // array of product ids
		},
		inventory: inventoryData['chocolates']
	};

	it('should return the total cost of the cart', () => {
		expect(getTotal(initialState, {})).toEqual(5.5)
	})

})

describe('numberInCart', () => {
	const initialState = {
		cart: {
			open: false,
			items: [{id: 1, quantity: 2}, {id: 2, quantity: 1}]  // array of product ids
		}
	};

	it('should return the total number of items in the cart', () => {
		expect(numberInCart(initialState, {})).toEqual(3)
	})

})

