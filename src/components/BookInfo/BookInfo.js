import classes from './BookInfo.module.css';
import React from 'react';

const BookInfo = (props) => (
    <div className={classes.BookInfo}>  
        <span className={classes.Title}>{props.book.title}</span>
        {props.book.series ? <span className={classes.Series}>({props.book.series})</span> : null}
        <span className={classes.Author}>by <label style={{
            color: 'rgb(171, 24, 139)',
            fontWeight: 'bold'
        }}>{props.book.author}</label></span>
    </div>
);

export default BookInfo;