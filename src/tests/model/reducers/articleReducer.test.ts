import {
  ArticlesState,
  fetchArticles,
  fetchArticlesFailure,
  fetchArticlesSuccess,
} from '@news/model/articles';
import articlesReducer from '@news/model/articles/reducer';
import mockArticles from '@news/tests/test-data/articles';

describe('unit tests for articlesReducer', () => {
  const initialState: ArticlesState = {
    list: [],
    isFetchingArticles: false,
  };

  it('should handle `FETCH_ARTICLES` correctly', () => {
    expect(articlesReducer(initialState, fetchArticles())).toEqual({
      ...initialState,
      isFetchingArticles: true,
    });
  });

  it('should handle `FETCH_ARTICLES_SUCCESS` correctly', () => {
    expect(
      articlesReducer(initialState, fetchArticlesSuccess(mockArticles)),
    ).toEqual({
      isFetchingArticles: false,
      list: mockArticles,
    });
  });

  it('should handle `FETCH_ARTICLES_FAILURE` correctly', () => {
    const mockError = new Error('Error');
    expect(
      articlesReducer(initialState, fetchArticlesFailure(mockError)),
    ).toEqual({
      ...initialState,
      isFetchingArticles: false,
      error: mockError,
    });
  });
});
