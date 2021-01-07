import {call, put} from 'redux-saga/effects';
import {
  ARTICLE_URL,
  fetchArticlesFailure,
  fetchArticlesSuccess,
  getArticles,
} from '../../../model/articles';
import mockArticles, {mockArticleJSON} from '../../test-data/articles';

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
