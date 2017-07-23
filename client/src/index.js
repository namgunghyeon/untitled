import React from 'react';
import ReactDOM from 'react-dom';
import 'rxjs';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'semantic-ui-css/semantic.min.css';
import Root from './containers/Root';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const history = syncHistoryWithStore(
  browserHistory,
  store,
);

ReactDOM.render(
  <Root
    store={store}
    history={history}
  />,
  document.getElementById('root'),
);

registerServiceWorker();
