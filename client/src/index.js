import React from 'react';
import ReactDOM from 'react-dom';
import 'rxjs';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import Root from './containers/Root';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();
const history = syncHistoryWithStore(
  browserHistory,
  store
);

ReactDOM.render(
  <Root
    store={store}
    history={history}
  />,
  document.getElementById('root')
);

registerServiceWorker();
