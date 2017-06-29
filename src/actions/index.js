export const addToCart = (productId, quantity) => ({
  type: 'CART_ADD',
  payload: {
    productId,
    quantity
  }
})

export const removeFromCart = (productId) => ({
  type: 'CART_REMOVE',
  payload: {
    productId
  }
})

export const clearCart = (productId) => ({
    type: 'CART_CLEAR'
})

export const toggleCart = () => ({
  type: 'CART_TOGGLE'
})