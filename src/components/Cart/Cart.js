import React, { Component, PropTypes } from 'react';
import CartItem from './CartItem';

class Cart extends Component {
    render() {
        const { items, total, clearCart, toggleCart, removeFromCart } = this.props

        return (
            <div className="cart__modal">
                <div className="cart">
                    <h1>Your Cart</h1>
                    <nav className="header">
                        <span className="cart__item__type">Type</span>
                        <span className="cart__item__quantity">Quantity</span>
                        <span className="cart__item__price">Price</span>
                    </nav>
                    {items.length > 0 ? (
                        <ul className="cart__items">
                            {items.map(item => (
                              <li key={item.id}>
                                <CartItem {...item} removeFromCart={removeFromCart}/>
                              </li>
                            ))}
                        </ul>
                    ):(
                        <div className="no__items">There are no items in your cart</div>
                    )}
                    <div className="cart__total">Total: ${total}</div>
                    <button onClick={() => (clearCart())}>
                        Clear Cart
                    </button>
                    <button onClick={() => (toggleCart())}>
                        Close Cart
                    </button>
                </div>
            </div>
        );
    }
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    clearCart: PropTypes.func,
    toggleCart: PropTypes.func,
    removeFromCart: PropTypes.func
}

export default Cart;
