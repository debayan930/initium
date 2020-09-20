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
            if(num !== 1 && num === prevState.start){
                return {
                    currentPage: num,
                    start: prevState.start - 1,
                    end: prevState.end - 1
                }
            }else if(num !== Math.ceil(this.props.bookCount/20) && num === prevState.end){
                return {
                    currentPage: num,
                    start: prevState.start + 1,
                    end: prevState.end + 1
                }
            }else{
                return {
                    currentPage: num,
                    leftClickable: num !== 1,
                    rightClickable: num !== Math.ceil(this.props.bookCount/20)
                }
            }
        })
    }

    goToFirstHandler = () => {
        this.setState({
            currentPage: 1,
            start: 1,
            end: 5,
            leftClickable: false,
            rightClickable: true
        })
    }

    goToLastHandler = () => {
        this.setState({
            currentPage: Math.ceil(this.props.bookCount/20),
            start: Math.ceil(this.props.bookCount/20) - 4,
            end: Math.ceil(this.props.bookCount/20),
            leftClickable: true,
            rightClickable: false
        })
    }

    moveLeftHandler = () => {
        this.setState(prevState => {
            if(prevState.currentPage === 2){
                return {
                    currentPage: 1,
                    start: 1,
                    end: 5,
                    leftClickable: false,
                    rightClickable: true
                }
            }else{
                return {
                    currentPage: prevState.currentPage - 1,
                    start: prevState.start - 1,
                    end: prevState.end - 1
                }
            }
        })
    }

    moveRightHandler = () => {
        this.setState(prevState => {
            if(prevState.currentPage === Math.ceil(this.props.bookCount)-1){
                return {
                    currentPage: Math.ceil(this.props.bookCount/20),
                    start: Math.ceil(this.props.bookCount/20) - 4,
                    end: Math.ceil(this.props.bookCount/20),
                    leftClickable: true,
                    rightClickable: false
                }
            }else{
                return {
                    currentPage: prevState.currentPage + 1,
                    start: prevState.start + 1,
                    end: prevState.end + 1
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
                leftClickable={this.leftClickable}
                rightClickable={this.rightClickable}
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
        fetchBooks: () => dispatch(fetchBooks()),
        fetchBookCount: () => dispatch(fetchBookCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);