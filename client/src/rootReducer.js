import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { SearchReducer } from './data/search';
import { PageReducer } from './data/page';

const rootReducer = combineReducers({
  page: PageReducer,
  search: SearchReducer,
  routing: routerReducer,
});

export default rootReducer;
