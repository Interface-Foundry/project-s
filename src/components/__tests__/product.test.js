import React from 'react';
import { shallow, mount } from 'enzyme';

import * as actions from '../../actions'

import Product from '../Product';

import inventoryData from '../../data/inventory'; 

describe('<Product />', () => {

	let wrapper;

	const onChange = () => {

	}

	beforeEach(() => {
		wrapper = shallow(<Product 
								{...inventoryData['chocolates'][0]}
								addToCart={actions.addToCart}/>);
	})

	it('renders <Product /> without issue', () => {
		expect(wrapper.is('.product')).toBe(true);
	});

	it('renders the correct type, description, price', () => {
		expect(wrapper.find('.product__type').text()).toBe(inventoryData['chocolates'][0].type.toUpperCase());
		expect(wrapper.find('.product__description').text()).toBe(inventoryData['chocolates'][0].description);
		expect(wrapper.find('.product__price').text()).toBe(`$${inventoryData['chocolates'][0].price}`);
	});

});
