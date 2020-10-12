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

        case actions.INCREASE_ITEM_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => {
                    if(item === action.payload){
                        let x = item;
                        x.quantity = x.quantity + 1;
                        return x;
                    } else{
                        return item
                    }
                })
            }

        case actions.DECREASE_ITEM_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => {
                    if(item === action.payload){
                        let x = item;
                        x.quantity = x.quantity - 1;
                        return x;
                    } else{
                        return item
                    }
                })
            }

        default:
            return state;
    }
};

export default reducer;