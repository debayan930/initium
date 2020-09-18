import React from 'react';
import BookInfo from '../../BookInfo/BookInfo';
import GenreLabel from '../../GenreLabel/GenreLabel';
import classes from './Book.module.css';

const Book = (props) => (
    <div className={classes.Book}>
        <img
            src={`https://robohash.org/${props.book.id}.png?size=175x175&set=set1`}
            alt={props.book.id}
        />
        <BookInfo book={props.book} />
        {/*  */}
        <div className={classes.GenreList}>
            {
                props.book.genres.map((genre, id) => <GenreLabel key={id} genre={genre.toLowerCase()} />)
            }
        </div>
    </div>
);

export default Book;