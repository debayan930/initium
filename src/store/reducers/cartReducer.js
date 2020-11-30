import * as actions from '../actionTypes';

const initialState = {
    cart: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        case actions.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item !== action.payload)
            }

        case actions.SET_BOOK_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => {
                    if(item === action.payload.book){
                        let x = item;
                        x.quantity = parseInt(action.payload.quantity, 10);
                        return x;
                    } else{
                        return item;
                    }
                })
            }

        default:
            return state;
    }
};

export default reducer;