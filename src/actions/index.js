export function setClientId(clientId) {
  return {
    type: 'SET_CLIENT_ID',
    response: {
      ...clientId
    }
  };
}

export function setState(state) {
  return {
    type: 'SET_STATE',
    response: {
      ...state
    }
  };
}

export const addToCart = (productId, quantity) => ({
  type: 'CART_ADD',
  response: {
    productId,
    quantity
  }
})

export const removeFromCart = (productId) => ({
  type: 'CART_REMOVE',
  response: {
    productId
  }
})

export const clearCart = (productId) => ({
    type: 'CART_CLEAR'
})

export const toggleCart = () => ({
  type: 'CART_TOGGLE'
})