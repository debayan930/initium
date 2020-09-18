import React from 'react';
import Book from './Book/Book';
import classes from './BookList.module.css';

const BookList = (props) => (
    <div className={classes.BookList}>
        {
            props.books.map(book => <Book key={book.id} book={book} />)
        }
    </div>
);

export default BookList;