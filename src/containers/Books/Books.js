import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookList from '../../components/BookList/BookList';
import { fetchBookCount, fetchBooks } from '../../store/actions/bookActions';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Pagination from '../../components/Pagination/Pagination';

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
            if(num in [1,2, Math.floor(this.props.bookCount/20), Math.floor(this.props.bookCount/20) + 1]){
                return {
                    currentPage: num
                }
            } else {
                return {
                    currentPage: num,
                    start: prevState.start + 1,
                    end: prevState.end + 1
                }
            }
        })
    }

    goToFirstHandler = () => {
        this.setState({
            currentPage: 1,
            start: 1,
            end: 5
        })
    }

    goToLastHandler = () => {
        this.setState({
            currentPage: Math.ceil(this.props.bookCount/20),
            start: Math.ceil(this.props.bookCount/20) - 4,
            end: Math.ceil(this.props.bookCount/20)
        })
    }

    moveLeftHandler = () => {
        this.setState(prevState => {
            return {
                currentPage: prevState.currentPage - 1,
                start: prevState.start - 1,
                end: prevState.end - 1
            }
        })
    }

    moveRightHandler = () => {
        this.setState(prevState => {
            return {
                currentPage: prevState.currentPage + 1,
                start: prevState.start + 1,
                end: prevState.end + 1
            }
        })
    }

    moveLeftDisabledCheckHandler = () => {
        if(this.state.currentPage === 1){
            return true;
        } else {
            return false
        }
    }

    moveRightDisabledCheckHandler = () => {
        if(this.state.currentPage === Math.ceil(this.props.bookCount/20)){
            return true;
        } else {
            return false
        }
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
                pageSelectHandler={this.pageSelectHandler}
                goToFirstHandler={this.goToFirstHandler}
                goToLastHandler={this.goToLastHandler}
                moveLeftDisabledCheckHandler={this.moveLeftDisabledCheckHandler}
                moveRightDisabledCheckHandler={this.moveRightDisabledCheckHandler}
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
        fetchBooks: () => dispatch(fetchBooks()),
        fetchBookCount: () => dispatch(fetchBookCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);