import React from 'react';
import BookInfo from '../BookInfo/BookInfo';
import classes from './BookToCart.module.css';
import GenreLabel from '../GenreLabel/GenreLabel';

const BookToCart = (props) => (
    <div className={classes.BookToCart}>
        <img
            src={`https://robohash.org/${props.book.id}.png?size=100x100&set=set1`}
            alt={props.book.id}
        />
        <div className={classes.BookContent}>
            <BookInfo book={props.book} />
            <div className={classes.GenreList}>
                {
                    [...new Set(props.book.genres)].map((genre, id) => <GenreLabel key={id} genre={genre.toLowerCase()} />)
                }
            </div>
        </div>
    </div>
);

export default BookToCart;