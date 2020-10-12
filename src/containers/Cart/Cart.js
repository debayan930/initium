import React from 'react';
import { connect } from 'react-redux';
import CartItemList from '../../components/CartItemsList/CartItemList';
import { addBookQuantity, removeBookQuantity } from '../../store/actions/cartActions';

const Cart = (props) => {
    return(
        <CartItemList cart={props.cart} />
    )
};

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addBookQuantity: (book) => dispatch(addBookQuantity(book)),
        removeBookQuantity: (book) => dispatch(removeBookQuantity(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);