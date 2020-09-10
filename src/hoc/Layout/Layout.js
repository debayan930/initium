import React, { Component } from 'react';
import classes from './Layout.module.css';
import Aux from '../Auxiliary/Auxiliary';

class Layout extends Component{
    state = {
        sideDrawer: false
    }

    render(){
        return(
            <Aux>
                <div className={classes.Layout}>

                </div>
            </Aux>
        );
    }
};

export default Layout;