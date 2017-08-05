import * as ActionTypes from './actionTypes';

const initialState = [];
export default function searchResults(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SEARCHED_KEWORDS: {
      return {
        ...action.payload,
        isSearch: action.payload.keyword !== '',
        keywords: action.payload.keyword === '' ? [] : state.keywords,
      };
    }
    case ActionTypes.SEARCHED_DETAIL_KEYWORD: {
      return {
        ...state,
        isSearch: true,
      };
    }
    case ActionTypes.RECEIVED_KEWORDS: {
      const keywords = [...action.payload.query.keywordIndex];
      return {
        keywords,
        isSearch: false,
      };
    }
    case ActionTypes.RECEIVED_DETAIL_KEYWORDS: {
      const detailKeywords = [...action.payload.query.keyword];
      return {
        ...state,
        detailKeywords,
        isSearch: false,
      };
    }
    default:
      return state;
  }
}
