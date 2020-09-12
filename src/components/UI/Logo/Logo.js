import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Logo.module.css';

const goHomeHandler = (props) => {
    props.history.push('/');
}

const Logo = (props) => (
    <span
        className={classes.Logo}
        onClick={() => goHomeHandler(props)}
    >
        Librum
    </span>
);

export default withRouter(Logo);