import {put, takeEvery} from 'redux-saga/effects';
import {fetchArticles, FETCH_ARTICLES} from '../../../model/articles';
import watchFetchArticles, {getArticles} from '../../../model/articles/sagas';

describe('unit tests for fetchArticles watcher saga', () => {
  it('should dispatch call `getArticles` generator once `fetchArticles` action is encountered', () => {
    const generator = watchFetchArticles();

    put(fetchArticles());
    expect(generator.next().value).toEqual(
      takeEvery(FETCH_ARTICLES, getArticles),
    );
  });
});
