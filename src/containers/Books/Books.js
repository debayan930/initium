import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookList from '../../components/BookList/BookList';
import { fetchBooks } from '../../store/actions/bookActions';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Pagination from '../../components/Pagination/Pagination';
import Modal from '../../components/UI/Modal/Modal';

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

    render(){
        return( 
            <Aux>
                {this.props.loading ? <Spinner /> :
                <Aux>
                    <Modal show={this.state.showModal} clicked={this.modalClickedHandler}>
                        Chosen Book
                    </Modal>
                    <BookList
                        books={this.props.books}
                        clicked={this.modalClickedHandler}
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