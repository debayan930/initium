import classes from './CartItem.module.css';
import React from 'react';
import { removeFromCart, setBookQuantity } from '../../../store/actions/cartActions';
import { connect } from 'react-redux';

const CartItem = (props) => {
    const selectChangeHandler = (e, book) => {
        props.setBookQuantity(book, e.target.value);
    }
    
    return(
    <div className={classes.CartItem}>
        <img src={`https://robohash.org/${props.book.id}.png?size=80x80&set=set3`} alt={props.book.id} className={classes.Img} />
        <div className={classes.CartItemContent}>
            <label className={classes.Title}>{props.book.title}</label>
            <label className={classes.Author}>by {props.book.author}</label>
            <label className={classes.Language}>{props.book.language}</label>
            <label className={classes.Author}>{props.book.format.format}</label>
            <label className={classes.Quantity}>Qty:&nbsp;</label>
            <select name='quantity' onChange={(e) => selectChangeHandler(e, props.book)} defaultValue={props.book.quantity}>
                {
                    [1,2,3,4].map(num => <option key={num} value={num}>{num}</option>)
                }
            </select>
        </div>
        <button className={classes.Button} onClick={() => props.removeFromCart(props.book)}>Remove</button>
        <div className={classes.Price}>
            {props.book.format.price}
        </div>
    </div>
    )
};

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setBookQuantity: (book, quantity) => dispatch(setBookQuantity(book, quantity)),
        removeFromCart: (book) => dispatch(removeFromCart(book))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);