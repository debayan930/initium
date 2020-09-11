import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Topbar.module.css';

const Topbar = (props) => (
    <div className={classes.Topbar}>
        <Logo />
        <NavigationItems />
    </div>
);

export default Topbar;