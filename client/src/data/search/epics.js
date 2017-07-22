import { Observable } from 'rxjs/Observable';
import * as ActionTypes from './actionTypes';
import { receiveKeywords } from './actions';
import { ajax } from 'rxjs/observable/dom/ajax';

export default function searchKeywords(action$) {
  return action$.ofType(ActionTypes.SEARCHED_KEWORDS)
    .map(action => action.payload.query)
    .filter(q => !!q)
    .switchMap(q =>
      Observable.timer(800)
        .takeUntil(action$.ofType(ActionTypes.CLEARED_SEARCH_RESULTS))
        .mergeMap(() => Observable.merge(
          ajax.getJSON(`https://api.github.com/search/users?q=${q}`)
            .map(res => res.items)
            .map(receiveKeywords)
        ))
    );
};
