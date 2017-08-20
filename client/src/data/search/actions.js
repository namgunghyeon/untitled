import { createAction } from 'redux-actions';
import * as ActionTypes from './actionTypes';

export const searchKeywords = createAction(ActionTypes.SEARCHED_KEWORDS);
export const searchDetailKeyword = createAction(ActionTypes.SEARCHED_DETAIL_KEYWORD);
export const receiveKeywords = createAction(ActionTypes.RECEIVED_KEWORDS);
export const receiveDetailKeyword = createAction(ActionTypes.RECEIVED_DETAIL_KEYWORDS);
export const clearSearchResults = createAction(ActionTypes.CLEARED_SEARCH_RESULTS);
export const changeProject = createAction(ActionTypes.CHANGE_PROJECT_DETAIL);
export const fetchProjects = createAction(ActionTypes.FETCH_PROJECTS);
export const receiveProjects = createAction(ActionTypes.FETCH_SUCCESS_PROJECTS);
