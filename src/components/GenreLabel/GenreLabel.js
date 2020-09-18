import classes from './GenreLabel.module.css';
import React from 'react';

const GenreLabel = (props) => (
    <div className={[classes.GenreLabel, classes[props.genre]].join(' ')}>
        {props.genre}
    </div>
);

export default GenreLabel;