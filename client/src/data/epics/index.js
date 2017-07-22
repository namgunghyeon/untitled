import { combineEpics } from 'redux-observable';
import searchKeywords from '../search/epics';

export default combineEpics(
  searchKeywords,
);
