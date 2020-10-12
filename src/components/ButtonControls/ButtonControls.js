import React from 'react';
import Button from '../UI/Button/Button';
import Quantity from '../UI/Quantity/Quantity';
import classes from './ButtonControls.module.css';

const ButtonControls = (props) => (
    <div className={classes.ButtonControls}>
        {
            props.book.formats.map((format, id) => (
                <label key={id} className={classes.ButtonContainer}>{format.format}
                    <input type='radio' name={props.book.id} defaultChecked={id === 0} onClick={() => props.formatChooseHandler(format)} />
                    <span className={classes.ButtonCheckmark}></span>
                </label>
            ))
        }
        <div className={classes.Dropdown}>
        <span>{props.bookToAdd.language}&nbsp;<i className="fas fa-caret-down"></i></span>
            <div className={classes.DropdownContent}>
            {
                props.book.languages.map(language => {
                    return <label key={language} className={classes.LanguageLabel} onClick={() => props.languageChooseHandler(language)}>{language}</label>
                })
            }
            </div>
        </div>
        <Quantity
            quantity={props.bookToAdd.quantity}
            quantityDecreaseHandler={props.quantityDecreaseHandler}
            quantityIncreaseHandler={props.quantityIncreaseHandler}
        />
        <label className={classes.Price}>
            {props.bookToAdd.format.price}
        </label>
        <div className={classes.ButtonContainer} style={{
            display: 'block'
        }}>
            <Button addToCartHandler={props.addToCartHandler} book={props.bookToAdd} closeModal={props.closeModal}>Add to Cart</Button>
            <Button cancel={true} closeModal={props.closeModal}>Cancel</Button>
        </div>
    </div>
);

export default ButtonControls;