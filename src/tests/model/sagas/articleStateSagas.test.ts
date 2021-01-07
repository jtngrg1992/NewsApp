import {call, put, takeEvery} from 'redux-saga/effects';
import {
  ARTICLE_URL,
  fetchArticles,
  fetchArticlesFailure,
  fetchArticlesSuccess,
  FETCH_ARTICLES,
  getArticles,
} from '@news/model/articles';
import watchFetchArticles from '@news/model/articles/sagas';
import mockArticles, {mockArticleJSON} from '@news/tests/test-data/articles';

describe('unit tests for getArticles generator function', () => {
  global.fetch = jest.fn().mockReturnValue({});

  let generator: Generator;

  beforeEach(() => {
    generator = getArticles();
  });

  it('should fetch articles correctly', () => {
    const generator = getArticles();

    const value1 = generator.next().value;
    expect(value1).toEqual(call(fetch, ARTICLE_URL));

    const mockResponse = {results: mockArticleJSON};
    const value2 = generator.next({json: () => mockResponse}).value;
    expect(value2).toEqual(mockResponse);

    const value3 = generator.next(mockResponse).value;
    expect(value3).toEqual(put(fetchArticlesSuccess(mockArticles)));

    expect(generator.next().done).toBeTruthy();
  });

  it('should handle exceptions correctly', () => {
    const value1 = generator.next().value;
    expect(value1).toEqual(call(fetch, ARTICLE_URL));

    const mockError = new Error('Error');
    const value2 = generator.throw(mockError).value;
    expect(value2).toEqual(put(fetchArticlesFailure(mockError)));

    expect(generator.next().done).toBeTruthy();
  });
});

describe('unit tests for fetchArticles watcher saga', () => {
  it('should dispatch call `getArticles` generator once `fetchArticles` action is encountered', () => {
    const generator = watchFetchArticles();

    put(fetchArticles());
    expect(generator.next().value).toEqual(
      takeEvery(FETCH_ARTICLES, getArticles),
    );
  });
});
