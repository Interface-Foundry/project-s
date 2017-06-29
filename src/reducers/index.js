import { combineReducers } from 'redux';

import inventory from './inventory'
import cart from './cart'

export default combineReducers({
	inventory,
	cart
});



