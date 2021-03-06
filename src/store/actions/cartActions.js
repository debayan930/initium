import * as actions from '../actionTypes';

export const addToCart = (book) => (
    {
        type: actions.ADD_TO_CART,
        payload: book
    }
);

export const removeFromCart = (book) => (
    {
        type: actions.REMOVE_FROM_CART,
        payload: book
    }
);

export const setBookQuantity = (book, quantity) => (
    {
        type: actions.SET_BOOK_QUANTITY,
        payload: {
            book: book,
            quantity: quantity
        }
    }
);