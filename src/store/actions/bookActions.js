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

export const fetchGenres = () => (
    dispatch => {
        axios.get('/genres.json')
            .then(response => dispatch(updateGenres(response.data)))
            .catch(error => console.log(error));
    }
);

export const fetchBooks = (offset = 0) => (
    dispatch => {
        const link = offset === 0 ? '/books.json?orderBy="id"&startAt=0&limitToFirst=10' : '/books.json?orderBy="id"&startAt=' + (offset+1) + '&limitToFirst=10';
        axios.get(link)
            .then(response => dispatch(updateBooks(response.data)))
            .catch(error => console.log(error));
    }
);