import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import SettingContainer from './SettingContainer';
import SearchContainer from './SearchContainer';

const propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

function Root({ store, history }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={SearchContainer} />
          <Route
            path="/main"
            component={SearchContainer}
          />
          <Route
            path="/settings"
            component={SettingContainer}
          />
        </Route>
      </Router>
    </Provider>
  );
}
Root.propTypes = propTypes;
export default Root;
