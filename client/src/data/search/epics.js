import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';
import * as ActionTypes from './actionTypes';
import { receiveKeywords } from './actions';

export function searchKeywords(action$) {
  return action$.ofType(ActionTypes.SEARCHED_KEWORDS)
    .map(action => action.payload.keyword)
    .filter(keyword => !!keyword)
    .switchMap(keyword =>
      Observable.timer(10)
        .takeUntil(action$.ofType(ActionTypes.CLEARED_SEARCH_RESULTS))
        .mergeMap(() => Observable.merge(
          ajax.getJSON(`https://api.github.com/search/users?q=${keyword}`)
            .map(res => res.items)
            .map(receiveKeywords),
        )),
    );
}
