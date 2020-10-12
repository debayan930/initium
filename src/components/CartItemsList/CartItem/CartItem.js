import classes from './CartItem.module.css';
import React from 'react';
import Quantity from '../../UI/Quantity/Quantity';

const CartItem = (props) => (
    <div className={classes.CartItem}>
        <img src={`https://robohash.org/${props.book.id}.png?size=80x80&set=set3`} alt={props.book.id} className={classes.Img} />
        <div className={classes.CartItemContent}>
            <label className={classes.Title}>{props.book.title}</label>
            <label className={classes.Author}>by {props.book.author}</label>
            <label className={classes.Language}>{props.book.language}</label>
            <Quantity
                quantity={props.book.quantity}
                quantityDecreaseHandler={props.quantityDecreaseHandler}
                quantityIncreaseHandler={props.quantityIncreaseHandler}
            />
        </div>
        <button className={classes.Button}>Remove</button>
        <div className={classes.Price}>
            {props.book.format.price}
        </div>
    </div>
);

export default CartItem;