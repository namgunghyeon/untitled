import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';
import * as ActionTypes from './actionTypes';
import { receiveKeywords, receiveDetailKeyword } from './actions';

export function searchKeywords(action$) {
  return action$.ofType(ActionTypes.SEARCHED_KEWORDS)
  .map(action => action.payload.keyword)
  .filter(keyword => !!keyword)
  .debounceTime(300)
  .switchMap(keyword =>
    Observable.timer(1)
    .takeUntil(action$.ofType(ActionTypes.CLEARED_SEARCH_RESULTS))
    .mergeMap(() => Observable.merge(
      ajax.getJSON(`api/search?name=${keyword}`)
      .map(res => res.data)
      .map(receiveKeywords),
    )),
  );
}

export function searchDetailKeyword(action$) {
  return action$.ofType(ActionTypes.SEARCHED_DETAIL_KEYWORD)
  .map(action => action.payload.keyword)
  .filter(keyword => !!keyword)
  .switchMap(keyword => ajax.getJSON(`api/search/detail?name=${keyword}`)
  .map(res => res.data)
  .map(receiveDetailKeyword));
}
