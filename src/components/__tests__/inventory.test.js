import React from 'react';
import { shallow, mount } from 'enzyme';

import * as actions from '../../actions'

import { isCartOpen, numberInCart } from '../../reducers/cart';
import { getInventory } from '../../reducers/inventory';

import Inventory from '../Inventory';
import InventoryList from '../Inventory/InventoryList';
import ActionBlock from '../Inventory/ActionBlock';
import Cart from '../../containers/Cart';

import inventoryData from '../../data/inventory'; 


describe('<Inventory />', () => {

	const state = {
  		cart: {
	    	open: false,
	    	items: [{id: 1, quantity: 1}, {id: 2, quantity: 1}] 
    	},
    	inventory: inventoryData['chocolates']
  	};


	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Inventory 
								inventory={getInventory(state, {})}
								open={isCartOpen(state, {})}
								numberInCart={numberInCart(state, {})}
								toggleCart={actions.toggleCart}
								addToCart={actions.addToCart}/>);
	})

	it('renders <Inventory /> without issue', () => {
		expect(wrapper.is('.inventory')).toBe(true);
	});

	it('does not render <Cart /> when open is false', () => {
		expect(wrapper.contains(<Cart />)).toBe(false);
	});

	const openState = {
  		cart: {
	    	open: true,
	    	items: [{id: 1, quantity: 1}, {id: 2, quantity: 1}] 
    	},
    	inventory: inventoryData['chocolates']
  	};

	it('renders <Cart /> when open is true', () => {
		wrapper = shallow(<Inventory 
								inventory={getInventory(openState, {})}
								open={isCartOpen(openState, {})}
								numberInCart={numberInCart(openState, {})}
								toggleCart={actions.toggleCart}
								addToCart={actions.addToCart}/>);

		expect(wrapper.contains(<Cart />)).toBe(true);
	});

	describe('<InventoryList />', () => {
		let wrapper;

		beforeEach(() => {
			wrapper = shallow(<InventoryList 
									addToCart={actions.addToCart}
									inventory={getInventory(state, {})}/>);
		})

		it('renders <InventoryList /> without issue', () => {
			expect(wrapper.is('.inventory-list')).toBe(true);
		});

		it('should render the correct amount of items', () => {
			expect(wrapper.children().length).toBe(getInventory(state, {}).length);
		})

	})

	describe('<ActionBlock />', () => {
		let wrapper;

		beforeEach(() => {
			wrapper = shallow(<ActionBlock 
									toggleCart={actions.toggleCart}
									numberInCart={numberInCart(state, {})}/>);
		})

		it('renders <ActionBlock /> without issue', () => {
			expect(wrapper.is('.action-block')).toBe(true);
		});	

		it('should show the correct amount of items cart items', () => {
			expect(wrapper.children().text()).toBe(`open model #${numberInCart(state, {})} Items in cart`);
		})

	})

});


