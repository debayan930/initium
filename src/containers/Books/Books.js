import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookList from '../../components/BookList/BookList';
import { fetchBooks } from '../../store/actions/bookActions';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Pagination from '../../components/Pagination/Pagination';
import Modal from '../../components/UI/Modal/Modal';
import BookToCart from '../../components/BookToCart/BookToCart';
import { addToCart } from '../../store/actions/cartActions';

class Books extends Component{
    state = {
        showModal: false,
        chosenBook: null,
        bookToAdd: null
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
                chosenBook: book,
                bookToAdd: {
                    id: book.id,
                    title: book.title,
                    author: book.author,
                    language: book.languages[0],
                    format: book.formats[0],
                    quantity: 1
                }
            }
        })
    }

    formatChooseHandler = (format) => {
        this.setState(prevState => {
            return {
                bookToAdd: {
                    ...prevState.bookToAdd,
                    format: format
                }
            }
        });
    }

    languageChooseHandler = (language) => {
        this.setState(prevState => {
            return {
                bookToAdd: {
                    ...prevState.bookToAdd,
                    language: language
                }
            }
        });
    }

    quantityIncreaseHandler = () => {
        this.setState(prevState => {
            return {
                bookToAdd: {
                    ...prevState.bookToAdd,
                    quantity: prevState.bookToAdd.quantity + 1
                }
            }
        })
    }

    quantityDecreaseHandler = () => {
        this.setState(prevState => {
            return {
                bookToAdd: {
                    ...prevState.bookToAdd,
                    quantity: prevState.bookToAdd.quantity - 1
                }
            }
        })
    }

    addToCartHandler = (book) => {
        this.props.addToCart(book);
    }

    render(){
        return( 
            <Aux>
                {this.props.loading ? <Spinner /> :
                <Aux>
                    {this.state.chosenBook ? <Modal show={this.state.showModal} clicked={this.modalClickedHandler}>
                        <BookToCart
                            book={this.state.chosenBook}
                            formatChooseHandler={this.formatChooseHandler}
                            languageChooseHandler={this.languageChooseHandler}
                            bookToAdd={this.state.bookToAdd}
                            closeModal={this.modalClickedHandler}
                            quantityIncreaseHandler={this.quantityIncreaseHandler}
                            quantityDecreaseHandler={this.quantityDecreaseHandler}
                            addToCartHandler={this.addToCartHandler}
                        />
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
        loading: state.bookReducer.loading,
        cart: state.cartReducer.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: (offset) => dispatch(fetchBooks(offset)),
        addToCart: (book) => dispatch(addToCart(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);