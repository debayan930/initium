import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const NavigationItems = (props) => (
    <div className={classes.NavigationItems}>
        <NavigationItem item='Home' link='/' />
        <NavigationItem item='Books' link='/books' />
        <NavigationItem item='Authors' link='/authors' />
        <div className={classes.Dropdown}>
            <span>Genres&nbsp;<i className="fas fa-caret-down"></i></span>
            <div className={classes.DropdownContent}>
                {
                    props.genres.length === 0 ? <p>Loading...</p> : props.genres.map(genre => {
                        const link = '/' + genre;
                        return <NavLink key={genre} to={link} exact>{genre}</NavLink>
                    })
                }
            </div>
        </div>
        <NavigationItem item='Orders' link='/orders' />
    </div>
);

const mapStateToProps = state => {
    return {
        genres: state.bookReducer.genres
    }
}

export default connect(mapStateToProps)(NavigationItems);