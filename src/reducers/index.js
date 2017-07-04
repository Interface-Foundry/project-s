import { combineReducers } from 'redux';

import inventory from './inventory'
import cart from './cart'
import user from './user'

export default combineReducers({
	inventory,
	cart,
  user
});



