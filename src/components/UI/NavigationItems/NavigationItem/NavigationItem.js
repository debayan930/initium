import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => (
    <NavLink
        to={props.link}
        exact
        className={classes.Link}
        activeClassName={classes.active}
    >
        {props.item}
    </NavLink>
);

export default NavigationItem;