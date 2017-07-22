import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { SearchReducer } from './data/search';


const rootReducer = combineReducers({
  search: SearchReducer,
  routing: routerReducer,
});

export default rootReducer;
