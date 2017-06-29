import objectAssign from 'object-assign';

var initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_INVENTORY':
      console.log(action)
      return action.inventory;
  }
  return state;
}