import classes from './Button.module.css';
import React from 'react';

const Button = (props) => (
    props.addToCartHandler ?
    <button className={classes.Button} onClick={() => {
        props.addToCartHandler(props.book);
        props.closeModal();
    }}>
        {props.children}
    </button> :
    <button className={props.cancel ? [classes.Button, classes.Cancel].join(' ') : classes.Button} onClick={props.closeModal}>
        {props.children}
    </button>
);

export default Button;