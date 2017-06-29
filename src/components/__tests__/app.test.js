import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Navbar from '../App/Navbar'
import Inventory from '../../containers/Inventory'

describe('<App />', () => {
	let wrapper;

	beforeEach(() => {
	  	wrapper = shallow(<App />);
	})

	it('renders <App /> without issue', () => {
		expect(wrapper.is('.app')).toBe(true)
	});

	it('renders <Navbar />', function() {
		expect(wrapper.contains(<Navbar title='Sugar Sweet Sugar Shop'/>)).toBe(true)
	});

	it('renders <Inventory />', function() {
		expect(wrapper.contains(<Inventory />)).toBe(true);
	});

});

