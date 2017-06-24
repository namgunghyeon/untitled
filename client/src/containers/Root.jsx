import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

function Root({ store, history }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
        </Route>
      </Router>
    </Provider>
  )
}
export default Root;
