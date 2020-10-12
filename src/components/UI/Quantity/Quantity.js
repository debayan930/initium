import React from 'react';
import classes from './Quantity.module.css';

const Quantity = (props) => (
    <div className={classes.Quantity}>
        <button className={classes.Button} onClick={props.quantityDecreaseHandler} disabled={props.quantity === 1}>-</button>
        <label>{props.quantity}</label>
        <button className={classes.Button} onClick={props.quantityIncreaseHandler} disabled={props.quantity === 4}>+</button>
    </div>
);

export default Quantity;