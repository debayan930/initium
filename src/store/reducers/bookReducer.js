import * as actions from '../actionTypes';

const initialState = {
    genres: [],
    books: [],
    bookCount: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.FETCH_GENRES:
            return {
                ...state,
                genres: action.payload
            };

        case actions.FETCH_BOOKS:
            return {
                ...state,
                books: action.payload
            }

        case actions.FETCH_BOOK_COUNT:
            return {
                ...state,
                bookCount: action.payload
            }

        default:
            return state;
    }
}

export default reducer;