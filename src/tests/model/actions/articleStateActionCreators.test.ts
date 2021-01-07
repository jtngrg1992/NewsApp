import {
  fetchArticles,
  fetchArticlesFailure,
  fetchArticlesSuccess,
  FETCH_ARTICLES,
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLES_SUCCESS,
} from '@news/model/articles';
import mockArticles from '@news/tests/test-data/articles';

describe('unit tests for action creators written for article state', () => {
  it('should create FETCH_ARTICLES when fetching articles', () => {
    expect(fetchArticles()).toEqual({
      type: FETCH_ARTICLES,
    });
  });

  it('should create FETCH_ARTICLES_SUCCESS when articles are fetched', () => {
    expect(fetchArticlesSuccess(mockArticles)).toEqual({
      type: FETCH_ARTICLES_SUCCESS,
      payload: mockArticles,
    });
  });

  it('should create FETCH_ARTICLES_FAILURE when articles could not be fetched', () => {
    const mockError = new Error('error');
    expect(fetchArticlesFailure(mockError)).toEqual({
      type: FETCH_ARTICLES_FAILURE,
      error: mockError,
    });
  });
});
