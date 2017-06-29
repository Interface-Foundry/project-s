import reducer from '../cart'

describe('inventory reducer', () => {

  	const initialState = {};

  	it('should return the initial state', () => {
    	expect(reducer(initialState, {})).toEqual(initialState)
  	})
})
