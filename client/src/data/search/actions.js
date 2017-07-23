import * as ActionTypes from './actionTypes';


export function searchKeywords(keyword) {
  return {
    type: ActionTypes.SEARCHED_KEWORDS,
    payload: {
      keyword,
    },
  };
}

export function receiveKeywords(query) {
  return {
    type: ActionTypes.RECEIVED_KEWORDS,
    payload: {
      query,
    },
  };
}

export function clearSearchResults() {
  console.log('teststset');
  return {
    type: ActionTypes.CLEARED_SEARCH_RESULTS,
  };
}
