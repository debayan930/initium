import React from 'react';
import CartItem from './CartItem/CartItem';
import classes from './CartItemList.module.css';

const CartItemList = (props) => (
    <div className={classes.CartItemList}>
        <label className={classes.Header}>Shopping Cart</label>
        {
            props.cart.length === 0 ? <p>Cart is Empty. Please add books!!!</p> : 
            props.cart.map((item, id) => <CartItem key={id} book={item} />)
        }
    </div>
);

export default CartItemList;