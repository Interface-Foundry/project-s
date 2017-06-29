import { connect } from 'react-redux';
import Inventory from '../components/Inventory';
import { getInventory } from '../reducers/inventory';
import { isCartOpen, numberInCart } from '../reducers/cart';
import { toggleCart, addToCart } from '../actions';

const mapStateToProps = (state, props) => {
    return {
        inventory: getInventory(state, props),
        open: isCartOpen(state, props),
        numberInCart: numberInCart(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    toggleCart: () => dispatch(toggleCart()),
    addToCart: (id, quantity) => dispatch(addToCart(id, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
