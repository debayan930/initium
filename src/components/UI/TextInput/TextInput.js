import classes from './TextInput.module.css';
import { useField } from 'formik';
import React from 'react';

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return(
        <div className={classes.InputContainer}>
            <label htmlFor={props.id || props.label}>{label}</label>
            <input className={classes.TextInput} {...field} {...props} />
            {meta.touched && meta.error ? <div className={classes.Error}>{meta.error}</div> : null}
        </div>
    );
};

export default TextInput;