import React from 'react';
import CartItem from './CartItem/CartItem';
import classes from './CartItemList.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import { useHistory } from 'react-router';

const calcTotal = (cart) => {
    let total = 0;
    for(let i=0;i<cart.length;i++){
        total = total + (cart[i].format.price * cart[i].quantity);
    }
    return total;
};

const CartItemList = (props) => {
    let history = useHistory();

    return(
    <div className={classes.CartItemList}>
        <label className={classes.Header}>Shopping Cart</label>
        {
            props.cart.length === 0 ? <p>Cart is Empty. Please add books!!!</p> : 
            props.cart.map((item, id) => <CartItem key={id} book={item} />)
        }
        {props.cart.length === 0 ? null : <Aux><div className={classes.Total}>
            <label className={classes.Header}>Total</label>
            <label className={classes.Header}>₹ {calcTotal(props.cart)}</label>
        </div><button className={classes.Checkout} onClick={() => history.push('/checkout')}>Checkout</button></Aux>}
    </div>
    );
};

export default CartItemList;