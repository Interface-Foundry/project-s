import { getProduct } from '../reducers/inventory';

const initialState = {
    open: false,
    items: [] // array of product ids
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CART_ADD':
            if(isInCart({cart: state}, {id: action.payload.productId})) {
                return {
                    ...state,
                    items: state.items.map(item => item.id === action.payload.productId ? { ...item, quantity: (item.quantity + action.payload.quantity) } : item)
                };
            }
            return {
                ...state,
                items: [ ...state.items, { id: action.payload.productId, quantity: action.payload.quantity}]
            };
        case 'CART_REMOVE':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.productId)
            };
        case 'CART_CLEAR':
            return {
                ...state,
                items: []
            };
        case 'CART_TOGGLE':
            return {
                ...state,
                open: !state.open
            };
        default:
            return state
    }
}

// Selectors
export function isInCart(state, props) {
    return !!state.cart.items.some(function (item) {
        return item.id === props.id;
    });
}

export function getItems(state, props) {
    return state.cart.items.map(item => getProduct(state, item));
}

export function isCartOpen(state, props) {
    return state.cart.open
}

export function getTotal(state, props) {
    return state.cart.items.reduce((acc, item) => {
        const product = getProduct(state, item);
        return acc + ( product.price * item.quantity );
    }, 0);
}
export function numberInCart(state, props) {
    return state.cart.items.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);
}

