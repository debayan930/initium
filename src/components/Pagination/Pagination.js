import React from 'react';
import classes from './Pagination.module.css';

const Pagination = (props) => {
    let arr = [];
    for(let i=props.start; i<=props.end; i++){
        arr.push(i);
    }
    
    return(
        <div className={classes.Pagination}>
            <button onClick={props.goToFirstHandler}>{'<<'}</button>
            <button disabled={props.moveLeftDisabledCheckHandler} onClick={props.moveLeftHandler}>{'<'}</button>
            {
                arr.map(item => {
                    if(parseInt(item) === parseInt(props.chosen))
                        return <button key={item} style={{backgroundColor: 'cyan'}}>{item}</button>
                    else
                        return <button key={item}>{item}</button>
                })
            }
            <button disabled={props.moveRightDisabledCheckHandler} onClick={props.moveRightHandler}>{'>'}</button>
            <button onClick={props.goToLastHandler}>{'>>'}</button>
        </div>
    )
};

export default Pagination;