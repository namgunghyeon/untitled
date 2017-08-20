import { combineEpics } from 'redux-observable';
import { searchKeywords, searchDetailKeyword, fetchProjects } from './data/search/epics';

const epics = [
  searchKeywords,
  searchDetailKeyword,
  fetchProjects,
];

export default combineEpics(...epics);
