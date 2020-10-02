import React from 'react';
import AddToCart from '../../AddToCart/AddToCart';
import BookInfo from '../../BookInfo/BookInfo';
import GenreLabel from '../../GenreLabel/GenreLabel';
import classes from './Book.module.css';

const Book = (props) => {
    return(
        <div className={classes.Book}>
            <div className={classes.Tooltip}>
		        {
                    props.book.formats.map(format => <span className={classes.Pricehover}>{format.format}&nbsp;&nbsp;₹&nbsp;{format.price}</span>)
                }
	        </div>
            <div className={classes.BookContent}>
                <img
                    src={`https://robohash.org/${props.book.id}.png?size=150x150&set=set1`}
                    alt={props.book.id}
                />
                <BookInfo book={props.book} />
                <div className={classes.GenreList}>
                    {
                        [...new Set(props.book.genres)].map((genre, id) => <GenreLabel key={id} genre={genre.toLowerCase()} />)
                    }
                </div>
            </div>
            <AddToCart book={props.book} clicked={props.clicked}>Add To Cart</AddToCart>
        </div>
    );
};

export default Book;