import React, { Component, PropTypes } from 'react';

class Product extends Component {
    state = {
        quantity: 1
    }

    handleClick = () => {
        const { id, addToCart } = this.props;
        const { quantity } = this.state;

        addToCart(id, quantity);
    }

    handleOnChange = (e) => {
        const { quantity } = this.state;

        this.setState({
            quantity: parseInt(e.currentTarget.value)
        });
    }

    render() {
        const { type, price, description } = this.props;
        const { quantity } = this.state;

        return (
            <div className="product">
                <h3 className="product__type">
                    {type.toUpperCase()}
                </h3>
                <div className="product__description">{description}</div>
                <div className="product__price">${price}</div>
                <div className="product__button-wrap">
                    <button onClick={this.handleClick}>
                        Add to cart
                    </button>
                </div>
                <div className="product__quantity-wrap">
                    <label for='quantity'>Quantity: </label>
                    <input name='quantity' className="product__quantity" type="number" onChange={this.handleOnChange} value={quantity}/>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired
}

export default Product;
