import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookList from '../../components/BookList/BookList';
import { fetchBookCount, fetchBooks } from '../../store/actions/bookActions';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Pagination from '../../components/Pagination/Pagination';

const RESULTS_PER_PAGE = 20;

class Books extends Component{
    state = {
        currentPage: 1,
        start: 1,
        end: 5,
        leftClickable: false,
        rightClickable: true
    }

    pageSelectHandler = (num) => {
        this.setState(prevState => {
            this.props.fetchBooks((num-1)*RESULTS_PER_PAGE);
            if(num !== 1 && num === prevState.start){
                return {
                    currentPage: num,
                    start: prevState.start - 1,
                    end: prevState.end - 1,
                    rightClickable: true
                }
            }else if(num !== Math.ceil(this.props.bookCount/RESULTS_PER_PAGE) && num === prevState.end){
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
                    rightClickable: num !== Math.ceil(this.props.bookCount/RESULTS_PER_PAGE)
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
            this.props.fetchBooks((Math.ceil(this.props.bookCount/RESULTS_PER_PAGE)-1)*RESULTS_PER_PAGE);
            return {
                currentPage: Math.ceil(this.props.bookCount/RESULTS_PER_PAGE),
                start: Math.ceil(this.props.bookCount/RESULTS_PER_PAGE) - 4,
                end: Math.ceil(this.props.bookCount/RESULTS_PER_PAGE),
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
                this.props.fetchBooks((prevState.currentPage-2)*RESULTS_PER_PAGE);
                return {
                    currentPage: prevState.currentPage - 1,
                    rightClickable: true
                }
            }else{
                this.props.fetchBooks((prevState.currentPage-2)*RESULTS_PER_PAGE);
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
            if(prevState.currentPage === Math.ceil(this.props.bookCount/RESULTS_PER_PAGE)-1){
                this.props.fetchBooks((Math.ceil(this.props.bookCount/RESULTS_PER_PAGE)-1)*RESULTS_PER_PAGE);
                return {
                    currentPage: Math.ceil(this.props.bookCount/RESULTS_PER_PAGE),
                    start: Math.ceil(this.props.bookCount/RESULTS_PER_PAGE) - 4,
                    end: Math.ceil(this.props.bookCount/RESULTS_PER_PAGE),
                    leftClickable: true,
                    rightClickable: false
                }
            }else if(prevState.end === Math.ceil(this.props.bookCount/RESULTS_PER_PAGE)){
                this.props.fetchBooks(prevState.currentPage*RESULTS_PER_PAGE);
                return {
                    currentPage: prevState.currentPage + 1,
                    leftClickable: true
                }
            }
            else{
                this.props.fetchBooks(prevState.currentPage*RESULTS_PER_PAGE);
                return {
                    currentPage: prevState.currentPage + 1,
                    start: prevState.start + 1,
                    end: prevState.end + 1,
                    leftClickable: true
                }
            }
        })
    }

    componentDidMount(){
        this.props.fetchBooks();
        this.props.fetchBookCount();
    }

    render(){
        return(
           this.props.books.length === 0 ? <Spinner /> : 
        <Aux>
            <BookList books={this.props.books} />
            <Pagination
                start={this.state.start}
                end={this.state.end}
                chosen={this.state.currentPage}
                leftClickable={this.state.leftClickable}
                rightClickable={this.state.rightClickable}
                pageSelectHandler={this.pageSelectHandler}
                goToFirstHandler={this.goToFirstHandler}
                goToLastHandler={this.goToLastHandler}
                moveRightHandler={this.moveRightHandler}
                moveLeftHandler={this.moveLeftHandler}
            />
        </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.bookReducer.books,
        bookCount: state.bookReducer.bookCount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: (offset) => dispatch(fetchBooks(offset)),
        fetchBookCount: () => dispatch(fetchBookCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);