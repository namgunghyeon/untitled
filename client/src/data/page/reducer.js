import { handleActions } from 'redux-actions';
import * as ActionTypes from './actionTypes';

const reducer = handleActions({
  [ActionTypes.SET_SCROLL_POSITION]: (state, action) => ({
    ...state,
    pageXOffset: action.payload.pageXOffset,
    pageYOffset: action.payload.pageYOffset,
  }),
},
{});

export default reducer;
