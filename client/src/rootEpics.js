import { combineEpics } from 'redux-observable';
import { searchKeywords, searchDetailKeyword } from './data/search/epics';

const epics = [
  searchKeywords,
  searchDetailKeyword,
];

export default combineEpics(...epics);
