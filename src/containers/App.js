import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../hoc/Layout/Layout';
import { fetchBooks, fetchGenres } from '../store/actions/bookActions';
import { connect } from 'react-redux';
import Aux from '../hoc/Auxiliary/Auxiliary';

class App extends Component {
  componentDidMount(){
    this.props.fetchGenres();
  }

  helloHandler = (offset) => {
    this.props.fetchBooks(offset);
  }

  render(){
    return(
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/' exact render={() => {
              return (
                <Aux>
                  {/* <button onClick={() => this.helloHandler(0)}>1</button>
                  <button onClick={() => this.helloHandler(10)}>2</button>
                  <button onClick={() => this.helloHandler(20)}>3</button>
                  <button onClick={() => this.helloHandler(30)}>4</button> */}
                </Aux>
              );
            }} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
};

const mapStateToProps = state => {
  return {
    genres: state.bookReducer.genres,
    books: state.bookReducer.books
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGenres: () => dispatch(fetchGenres()),
    fetchBooks: (offset) => dispatch(fetchBooks(offset))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
