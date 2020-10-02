import React from 'react';
import classes from './AddToCart.module.css';

const AddToCart = (props) => (
    <div className={classes.AddToCart} onClick={() => props.clicked(props.book)}>
        {props.children}
    </div>
);

export default AddToCart;