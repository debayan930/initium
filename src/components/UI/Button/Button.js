import classes from './Button.module.css';
import React from 'react';

const Button = (props) => (
    <button className={props.cancel ? [classes.Button, classes.Cancel].join(' ') : classes.Button}>
        {props.children}
    </button>
);

export default Button;