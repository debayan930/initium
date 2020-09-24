import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookList from '../../components/BookList/BookList';
import { fetchBooks } from '../../store/actions/bookActions';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Pagination from '../../components/Pagination/Pagination';

class Books extends Component{
    componentDidMount(){
        this.props.fetchBooks();
    }

    render(){
        return( 
            <Aux>
                {this.props.loading ? <Spinner /> :
                <BookList books={this.props.books} />}
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