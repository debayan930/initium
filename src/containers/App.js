import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../hoc/Layout/Layout';
import { fetchGenres } from '../store/actions/bookActions';
import { connect } from 'react-redux';
import Spinner from '../components/UI/Spinner/Spinner';
import Cart from './Cart/Cart';
const Books = lazy(() => import('./Books/Books'));

class App extends Component {
  componentDidMount(){
    this.props.fetchGenres();
  }

  render(){
    return(
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path='/books' exact component={Books} />
              <Route path='/cart' exact component={Cart} />
            </Switch>
          </Suspense>
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
    fetchGenres: () => dispatch(fetchGenres())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
