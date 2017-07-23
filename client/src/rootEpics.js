import { combineEpics } from 'redux-observable';
import { searchKeywords } from './data/search/epics';

const epics = [
  searchKeywords,
];

export default combineEpics(...epics);
