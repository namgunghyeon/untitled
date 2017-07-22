import * as ActionTypes from './actionTypes';


export function searchKeywords(query) {
  return {
    type: ActionTypes.SEARCHED_KEWORDS,
    payload: {
      query
    }
  };
}

export function receiveKeywords(query) {
  return {
    type: ActionTypes.TEST,
    payload: {
      query
    }
  };
}

export function clearSearchResults() {
  return {
    type: ActionTypes.CLEARED_SEARCH_RESULTS
  };
}
