import {takeEvery, call, put} from 'redux-saga/effects';
import {fetchArticlesSuccess, fetchArticlesFailure} from './actions';
import {FETCH_ARTICLES} from './types';

function* fetchArticles() {
  try {
    const response = yield call(
      fetch,
      'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=WvQCGKUDhY2YSxG5K4hS2bgKC0eD52Og',
    );
    console.log(response);
  } catch (e) {
    yield put(fetchArticlesFailure(e));
  }
}

function* watchFetchArticles() {
  yield takeEvery(FETCH_ARTICLES, fetchArticles);
}

export default watchFetchArticles;
