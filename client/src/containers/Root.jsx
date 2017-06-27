import React from 'react';
import App from './App';
import SettingContainer from './SettingContainer';
import SearchContainer from './SearchContainer';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

function Root({ store, history }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
          <Route
            path='/main'
            component={SearchContainer}
          />
          <Route
            path='/setting'
            component={SettingContainer}
          />
        </Route>
      </Router>
    </Provider>
  )
}
export default Root;
