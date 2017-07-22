import * as ActionTypes from './actionTypes';

const initialState = [];
export default function searchResults(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SEARCHED_KEWORDS:
      return action.payload;
    case ActionTypes.TEST:
      console.log('action', action);
      return state;
    default:
      return state;
  }
}
