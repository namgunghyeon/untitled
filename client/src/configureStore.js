import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './rootReducer';
import rootEpic from './data/epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const middlewares = [
  epicMiddleware,
  routerMiddleware(browserHistory)
];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return store;
}
