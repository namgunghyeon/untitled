import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import SearchPage from '../components/pages/SearchPage';
import HomePage from '../components/pages/HomePage';

const propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

function Root({ store, history }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={HomePage}>
          <IndexRoute component={SearchPage} />
          <Route
            path="/main"
            component={SearchPage}
          />
        </Route>
      </Router>
    </Provider>
  );
}

Root.propTypes = propTypes;

export default Root;
