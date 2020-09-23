import React from 'react';
import classes from './Pagination.module.css';

const Pagination = (props) => {
    let arr = [];
    for(let i=props.start; i<=props.end; i++){
        arr.push(i);
    }
    
    return(
        <div className={classes.Pagination}>
            <button onClick={props.goToFirstHandler} disabled={!props.leftClickable}>{'<<'}</button>
            <button onClick={props.moveLeftHandler} disabled={!props.leftClickable}>{'<'}</button>
            {
                arr.map(item => {
                    if(parseInt(item) === parseInt(props.chosen))
                        return <button key={item} style={{backgroundColor: 'rgb(171, 24, 139)'}}>{item}</button>
                    else
                        return <button key={item} onClick={() => props.pageSelectHandler(item)}>{item}</button>
                })
            }
            <button onClick={props.moveRightHandler} disabled={!props.rightClickable}>{'>'}</button>
            <button onClick={props.goToLastHandler} disabled={!props.rightClickable}>{'>>'}</button>
        </div>
    )
};

export default Pagination;