import {
  FetchArticlesAction,
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  FetchArticlesFailureAction,
  FetchArticlesSuccessAction,
  Article,
} from './types';

export const fetchArticles = (): FetchArticlesAction => ({
  type: FETCH_ARTICLES,
});

export const fetchArticlesSuccess = (
  articles: Article[],
): FetchArticlesSuccessAction => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: articles,
});

export const fetchArticlesFailure = (
  error: Error,
): FetchArticlesFailureAction => ({
  type: FETCH_ARTICLES_FAILURE,
  error,
});
