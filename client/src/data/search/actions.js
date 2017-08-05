import * as ActionTypes from './actionTypes';

export function searchKeywords(keyword) {
  return {
    type: ActionTypes.SEARCHED_KEWORDS,
    payload: {
      keyword,
    },
  };
}

export function searchDetailKeyword(keyword) {
  return {
    type: ActionTypes.SEARCHED_DETAIL_KEYWORD,
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

export function receiveDetailKeyword(query) {
  return {
    type: ActionTypes.RECEIVED_DETAIL_KEYWORDS,
    payload: {
      query,
    },
  };
}


export function clearSearchResults() {
  return {
    type: ActionTypes.CLEARED_SEARCH_RESULTS,
  };
}
