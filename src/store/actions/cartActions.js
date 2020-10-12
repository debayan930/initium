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

export const addBookQuantity = (book) => (
    {
        type: actions.INCREASE_ITEM_QUANTITY,
        payload: book
    }
);

export const removeBookQuantity = (book) => (
    {
        type: actions.DECREASE_ITEM_QUANTITY,
        payload: book
    }
);