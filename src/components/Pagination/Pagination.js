import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Pagination.module.css';
import { fetchBooks, fetchBookCount } from '../../store/actions/bookActions';
import * as constants from '../../assets/constants/Constants';

class Pagination extends Component {
    state = {
        currentPage: 1,
        start: 1,
        end: 5,
        leftClickable: false,
        rightClickable: true
    }

    componentDidMount(){
        this.props.fetchBookCount();
    }

    pageSelectHandler = (num) => {
        this.setState(prevState => {
            this.props.fetchBooks((num-1)*constants.RESULTS_PER_PAGE);
            if(num !== 1 && num === prevState.start){
                return {
                    currentPage: num,
                    start: prevState.start - 1,
                    end: prevState.end - 1,
                    rightClickable: true
                }
            }else if(num !== Math.ceil(this.props.bookCount/constants.RESULTS_PER_PAGE) && num === prevState.end){
                return {
                    currentPage: num,
                    start: prevState.start + 1,
                    end: prevState.end + 1,
                    leftClickable: true
                }
            }else{
                return {
                    currentPage: num,
                    leftClickable: num !== 1,
                    rightClickable: num !== Math.ceil(this.props.bookCount/constants.RESULTS_PER_PAGE)
                }
            }
        })
    }

    goToFirstHandler = () => {
        this.setState(prevState => {
            this.props.fetchBooks();
            return {
                currentPage: 1,
                start: 1,
                end: 5,
                leftClickable: false,
                rightClickable: true
            }
        })
    }

    goToLastHandler = () => {
        this.setState(prevState => {
            this.props.fetchBooks((Math.ceil(this.props.bookCount/constants.RESULTS_PER_PAGE)-1)*constants.RESULTS_PER_PAGE);
            return {
                currentPage: Math.ceil(this.props.bookCount/constants.RESULTS_PER_PAGE),
                start: Math.ceil(this.props.bookCount/constants.RESULTS_PER_PAGE) - 4,
                end: Math.ceil(this.props.bookCount/constants.RESULTS_PER_PAGE),
                leftClickable: true,
                rightClickable: false
            }
        })
    }

    moveLeftHandler = () => {
        this.setState(prevState => {
            if(prevState.currentPage === 2){
                this.props.fetchBooks();
                return {
                    currentPage: 1,
                    start: 1,
                    end: 5,
                    leftClickable: false,
                    rightClickable: true
                }
            }else if(prevState.start === 1){
                this.props.fetchBooks((prevState.currentPage-2)*constants.RESULTS_PER_PAGE);
                return {
                    currentPage: prevState.currentPage - 1,
                    rightClickable: true
                }
            }else{
                this.props.fetchBooks((prevState.currentPage-2)*constants.RESULTS_PER_PAGE);
                return {
                    currentPage: prevState.currentPage - 1,
                    start: prevState.start - 1,
                    end: prevState.end - 1,
                    rightClickable: true
                }
            }
        })
    }

    moveRightHandler = () => {
        this.setState(prevState => {
            if(prevState.currentPage === Math.ceil(this.props.bookCount/constants.RESULTS_PER_PAGE)-1){
                this.props.fetchBooks((Math.ceil(this.props.bookCount/constants.RESULTS_PER_PAGE)-1)*constants.RESULTS_PER_PAGE);
                return {
                    currentPage: Math.ceil(this.props.bookCount/constants.RESULTS_PER_PAGE),
                    start: Math.ceil(this.props.bookCount/constants.RESULTS_PER_PAGE) - 4,
                    end: Math.ceil(this.props.bookCount/constants.RESULTS_PER_PAGE),
                    leftClickable: true,
                    rightClickable: false
                }
            }else if(prevState.end === Math.ceil(this.props.bookCount/constants.RESULTS_PER_PAGE)){
                this.props.fetchBooks(prevState.currentPage*constants.RESULTS_PER_PAGE);
                return {
                    currentPage: prevState.currentPage + 1,
                    leftClickable: true
                }
            }
            else{
                this.props.fetchBooks(prevState.currentPage*constants.RESULTS_PER_PAGE);
                return {
                    currentPage: prevState.currentPage + 1,
                    start: prevState.start + 1,
                    end: prevState.end + 1,
                    leftClickable: true
                }
            }
        })
    }
    
    render(){
        let arr = [];
        for(let i=this.state.start; i<=this.state.end; i++){
            arr.push(i);
        }

        let classList = this.props.loading ? [classes.Pagination, classes.Hide].join(' ') : classes.Pagination;
        
        return(
            <div className={classList}>
                <button onClick={this.goToFirstHandler} disabled={!this.state.leftClickable}>{'<<'}</button>
                <button onClick={this.moveLeftHandler} disabled={!this.state.leftClickable}>{'<'}</button>
                {
                    arr.map(item => {
                        if(parseInt(item) === parseInt(this.state.currentPage))
                            return <button key={item} style={{backgroundColor: 'rgb(171, 24, 139)'}}>{item}</button>
                        else
                            return <button key={item} onClick={() => this.pageSelectHandler(item)}>{item}</button>
                    })
                }
                <button onClick={this.moveRightHandler} disabled={!this.state.rightClickable}>{'>'}</button>
                <button onClick={this.goToLastHandler} disabled={!this.state.rightClickable}>{'>>'}</button>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        bookCount: state.bookReducer.bookCount,
        loading: state.bookReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: (offset) => dispatch(fetchBooks(offset)),
        fetchBookCount: () => dispatch(fetchBookCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);