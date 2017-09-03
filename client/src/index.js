import React from 'react';
import ReactDOM from 'react-dom';
import 'rxjs';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const history = syncHistoryWithStore(
  browserHistory,
  store,
);

ReactDOM.render(
  <App
    store={store}
    history={history}
  />,
  document.getElementById('root'),
);

registerServiceWorker();
