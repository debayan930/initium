import React from 'react';
import { connect } from 'react-redux';
import CartItemList from '../../components/CartItemsList/CartItemList';

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

export default connect(mapStateToProps)(Cart);