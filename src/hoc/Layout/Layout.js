import React, { Component } from 'react';
import classes from './Layout.module.css';
import Aux from '../Auxiliary/Auxiliary';
import Topbar from '../../components/UI/Topbar/Topbar';

class Layout extends Component{
    state = {
        sideDrawer: false
    }

    render(){
        return(
            <Aux>
                <Topbar />
                <div className={classes.Layout}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
};

export default Layout;