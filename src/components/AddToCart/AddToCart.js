import React from 'react';
import classes from './AddToCart.module.css';

const AddToCart = (props) => (
    <div className={classes.AddToCart}>
        {props.children}
    </div>
);

export default AddToCart;