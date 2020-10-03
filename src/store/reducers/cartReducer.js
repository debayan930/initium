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

        default:
            return state;
    }
};

export default reducer;