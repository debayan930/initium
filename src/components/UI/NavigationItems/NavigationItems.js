import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => (
    <div className={classes.NavigationItems}>
        <NavigationItem item='Books' link='/books' />
    </div>
);

export default NavigationItems;