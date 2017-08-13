import moment from 'moment-timezone';

import * as ActionTypes from './actionTypes';

const initialState = [];
export default function searchResults(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SEARCHED_KEWORDS: {
      const keyword = action.payload.keyword;
      return {
        keyword,
        isSearch: keyword.name !== '',
        keywords: keyword.name === '' ? [] : state.keywords,
        start: moment().valueOf(),
      };
    }
    case ActionTypes.SEARCHED_DETAIL_KEYWORD: {
      return {
        ...state,
        isSearch: true,
      };
    }
    case ActionTypes.RECEIVED_KEWORDS: {
      if (!action.payload.query) {
        return state;
      }
      const isFirst = state.keyword.offset === 0;
      let keywords = [];
      if (isFirst) {
        keywords = [...action.payload.query.keywordIndex];
      } else {
        state.keywords.pop(); // Remove more key
        keywords = [...state.keywords, ...action.payload.query.keywordIndex];
      }
      if (keywords.length) {
        keywords.push({
          reserved: 'more',
        });
      }
      return {
        ...state,
        keywords,
        isSearch: false,
        end: moment().valueOf(),
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
