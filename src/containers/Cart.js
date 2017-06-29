import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { clearCart, toggleCart, removeFromCart } from '../actions';
import { getItems, getTotal } from '../reducers/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        total: getTotal(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    clearCart: () => dispatch(clearCart()),
    toggleCart: () => dispatch(toggleCart()),
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
