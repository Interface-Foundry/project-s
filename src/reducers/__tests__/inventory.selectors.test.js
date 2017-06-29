import { getInventory, getProduct } from '../inventory'
import inventoryData from '../../data/inventory'; 

describe('getInventory', () => {

	const initialState = {
		inventory: inventoryData['chocolates']
	};

	it('should return the all items in inventory', () => {
		expect(getInventory(initialState, {})).toEqual(inventoryData['chocolates'])
	})

})

describe('getProduct', () => {

	const initialState = {
		inventory: inventoryData['chocolates']
	};

	it('should return the correct product from inventory', () => {
		expect(getProduct(initialState, {id: 1, quantity: 1})).toEqual({
			"description": "Milk chocolate milder and sweeter because it is made with milk and a higher sugar content than the darker varieties. It also has a smaller quantity of chocolate liquor and, therefore, fewer flavors and aromas.",
			"id": 1,
			"type": "milk",
			"quantity": 1,
			"price": 1.50
		})
	})

})
