import * as ActionTypes from './actionTypes';

const initialState = [];
export default function searchResults(state = initialState, action) {
    switch (action.type) {
    case ActionTypes.SEARCHED_KEWORDS:
        return action.payload;
    case ActionTypes.RECEIVED_KEWORDS: {
        const keywords = [...action.payload.query.search];
        return {
            keywords,
        };
    }
    default:
        return state;
    }
}
