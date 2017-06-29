import React from 'react';
import { shallow, mount } from 'enzyme';

import * as actions from '../../actions'
import { getItems, getTotal } from '../../reducers/cart';

import Cart from '../Cart';
import CartItem from '../Cart/CartItem';

import inventoryData from '../../data/inventory'; 

describe('<Cart />', () => {

	const state = {
  		cart: {
	    	open: false,
	    	items: [{id: 1, quantity: 1}, {id: 2, quantity: 1}] 
    	},
    	inventory: inventoryData['chocolates']
  	};

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Cart 
							items={getItems(state, {})}
							total={getTotal(state, {})}
							clearCart={actions.clearCart}
							toggleCart={actions.toggleCart}
							removeFromCart={actions.removeFromCart}/>);
	})

	it('renders <Cart /> without issue', () => {
		expect(wrapper.is('.cart__modal')).toBe(true);
	});

	it('should render all items in cart', () => {
		expect(wrapper.find('.cart__items').children().length).toBe(getItems(state, {}).length);
	});

	it('should render the correct total amount', () => {
		expect(wrapper.find('.cart__total').text()).toBe(`Total: $${getTotal(state, {})}`);
	})

	const emptyState = {
  		cart: {
	    	open: false,
	    	items: [] 
    	},
    	inventory: inventoryData['chocolates']
  	};

	it('should render all items in cart', () => {
		wrapper = shallow(<Cart 
					items={getItems(emptyState, {})}
					total={getTotal(emptyState, {})}
					clearCart={actions.clearCart}
					toggleCart={actions.toggleCart}
					removeFromCart={actions.removeFromCart}/>);

		expect(wrapper.find('.no__items').text()).toBe('There are no items in your cart');
	});

	describe('<CartItem />', () => {
		beforeEach(() => {
			wrapper = shallow(<CartItem 
								{ ...getItems(state, {})[0] }
								removeFromCart={actions.removeFromCart}/>);
		})

		it('renders <CartItem /> without issue', () => {
			expect(wrapper.is('.cart__item')).toBe(true);
		});

		it('renders the correct type, quantity, price', () => {
			expect(wrapper.find('.cart__item__type').text()).toBe(`${getItems(state, {})[0].type}`);
			expect(wrapper.find('.cart__item__quantity').text()).toBe(`${getItems(state, {})[0].quantity}`);
			expect(wrapper.find('.cart__item__price').text()).toBe(`$${getItems(state, {})[0].price}`);
		});
	})
	
});









