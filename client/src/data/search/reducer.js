import moment from 'moment-timezone';

import * as ActionTypes from './actionTypes';

const initialState = [];
export default function searchResults(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SEARCHED_KEWORDS: {
      const keyword = action.payload.keyword;
      if (!keyword.name) {
        return {
          ...state,
          keywords: [],
          start: 0,
          end: 0,
        };
      }
      const isFirst = keyword.offset === 0;
      return {
        keyword,
        isSearch: isFirst,
        isMoreSearch: !isFirst,
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
        return {
          ...state,
          isSearch: false,
          isMoreSearch: false,
        };
      }
      const isFirst = state.keyword.offset === 0;
      const receviedKeywords = action.payload.query.keywordIndex;
      let keywords = [];
      if (isFirst) {
        keywords = [...receviedKeywords];
      } else {
        state.keywords.pop(); // Remove more key
        keywords = [...state.keywords, ...receviedKeywords];
      }
      const limit = state.keyword.limit;
      if (receviedKeywords.length >= limit) {
        keywords.push({
          reserved: 'more',
        });
      }
      return {
        ...state,
        keywords,
        isSearch: false,
        isMoreSearch: false,
        end: moment().valueOf(),
      };
    }
    case ActionTypes.RECEIVED_DETAIL_KEYWORDS: {
      const detailKeywords = [...action.payload.query.keyword];
      return {
        ...state,
        detailKeywords,
        isSearch: false,
        isMoreSearch: false,
      };
    }
    case ActionTypes.CHANGE_PROJECT_DETAIL: {
      const project = action.payload.project;
      return {
        ...state,
        currentProject: project,
      };
    }
    default:
      return state;
  }
}
