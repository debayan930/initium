import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookList from '../../components/BookList/BookList';
import { fetchBooks } from '../../store/actions/bookActions';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Pagination from '../../components/Pagination/Pagination';
import Modal from '../../components/UI/Modal/Modal';
import BookToCart from '../../components/BookToCart/BookToCart';

class Books extends Component{
    state = {
        showModal: false,
        chosenBook: null
    }
    
    componentDidMount(){
        this.props.fetchBooks();
    }

    modalClickedHandler = () => {
        this.setState(prevState => {
            return {
                showModal: !prevState.showModal
            }
        })
    }

    chooseBookHandler = (book) => {
        this.setState(prevState => {
            return {
                showModal: true,
                chosenBook: book
            }
        })
    }

    render(){
        return( 
            <Aux>
                {this.props.loading ? <Spinner /> :
                <Aux>
                    {this.state.chosenBook ? <Modal show={this.state.showModal} clicked={this.modalClickedHandler}>
                        <BookToCart book={this.state.chosenBook} />
                    </Modal> : null}
                    <BookList
                        books={this.props.books}
                        clicked={this.chooseBookHandler}
                    />
                </Aux>
                }
                <Pagination />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.bookReducer.books,
        loading: state.bookReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: (offset) => dispatch(fetchBooks(offset))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);