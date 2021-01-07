import {
  ArticlesState,
  fetchArticles,
  fetchArticlesFailure,
  fetchArticlesSuccess,
} from './../../../model/articles';
import articlesReducer from './../../../model/articles/reducer';
import mockArticles from '../../test-data/articles';

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
