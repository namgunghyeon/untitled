import { combineEpics } from 'redux-observable';
import searchKeywords from './data/search/epics';

export default combineEpics(
  searchKeywords,
);
