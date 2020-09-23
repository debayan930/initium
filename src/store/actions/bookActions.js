import * as actions from '../actionTypes';
import axios from '../../axios';

const updateGenres = (genres) => (
    {
        type: actions.FETCH_GENRES,
        payload: genres
    }
);

const updateBooks = (books) => (
    {
        type: actions.FETCH_BOOKS,
        payload: books
    }
);

const updateBookCount = (count) => (
    {
        type: actions.FETCH_BOOK_COUNT,
        payload: count
    }
);

const updateBooksLoading = (flag) => (
    {
        type: actions.FETCH_LOADING_STATUS,
        payload: flag
    }
);

export const fetchGenres = () => (
    dispatch => {
        axios.get('/genres.json')
            .then(response => dispatch(updateGenres(response.data)))
            .catch(error => console.log(error));
    }
);

export const fetchBooks = (offset = 0) => (
    dispatch => {
        dispatch(updateBooksLoading(true));
        const link = offset === 0 ? '/books.json?orderBy="id"&startAt=0&limitToFirst=20' : `/books.json?orderBy="id"&startAt=${offset+1}&limitToFirst=20`;
        axios.get(link)
            .then(response => {
                dispatch(updateBooks(response.data));
                dispatch(updateBooksLoading(false));
            })
            .catch(error => console.log(error));
    }
);

export const fetchBookCount = () => (
    dispatch => {
        axios.get('/bookCount.json')
            .then(response => dispatch(updateBookCount(response.data)))
            .catch(error => console.log(error));
    }
);