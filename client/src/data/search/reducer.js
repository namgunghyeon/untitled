import moment from 'moment-timezone';
import { handleActions } from 'redux-actions';
import * as ActionTypes from './actionTypes';

function filterValidateKeyword(keywordIndex) {
  return keywordIndex.filter((item) => {
    if (item.Keyword.indexOf('"') >= 0 ||
        item.Keyword.indexOf("'") >= 0 ||
        item.Keyword.indexOf(',') >= 0) {
      return false;
    }
    return true;
  });
}

const reducer = handleActions({
  [ActionTypes.SEARCHED_KEWORDS]: (state, action) => {
    const keyword = action.payload;
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
      ...state,
      keyword,
      isSearch: isFirst,
      isMoreSearch: !isFirst,
      keywords: keyword.name === '' ? [] : state.keywords,
      start: moment().valueOf(),
    };
  },
  [ActionTypes.RECEIVED_KEWORDS]: (state, action) => {
    if (!action.payload) {
      return {
        ...state,
        isSearch: false,
        isMoreSearch: false,
      };
    }
    const isFirst = state.keyword.offset === 0;
    const receviedKeywords = action.payload.keywordIndex;
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
        loading: true,
        Keyword: '',
        Project: '',
      });
    }
    return {
      ...state,
      keywords: filterValidateKeyword(keywords),
      isSearch: false,
      isMoreSearch: false,
      end: moment().valueOf(),
    };
  },
  [ActionTypes.SEARCHED_DETAIL_KEYWORD]: state => ({
    ...state,
    isSearch: true,
  }),
  [ActionTypes.RECEIVED_DETAIL_KEYWORDS]: (state, action) => {
    const detailKeywords = [...action.payload.keyword];
    return {
      ...state,
      detailKeywords,
      isSearch: false,
      isMoreSearch: false,
    };
  },
  [ActionTypes.CHANGE_PROJECT_DETAIL]: (state, action) => {
    const project = action.payload;
    return {
      ...state,
      currentProject: project,
    };
  },
  [ActionTypes.FETCH_SUCCESS_PROJECTS]: (state, action) => {
    const projects = [...action.payload.projects];
    return {
      ...state,
      projects,
    };
  },
  [ActionTypes.FETCH_PROJECTS]: state => ({ ...state }),
}, {});

export default reducer;
