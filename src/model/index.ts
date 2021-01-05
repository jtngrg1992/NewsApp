import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import articlesReducer from './articles/reducer';
import watchFetchArticles from './articles/sagas';

export const rootReducer = combineReducers({articles: articlesReducer});

export function* rootSaga() {
  yield all([watchFetchArticles()]);
}
