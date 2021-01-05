export type ArticleMedia = {
  thumbnail?: string;
  mediumImage?: string;
  largeImage?: string;
};

export type Article = {
  id: number;
  url: string;
  source: string;
  published: string;
  updated: string;
  author: string;
  title: string;
  abstract: string;
  media?: ArticleMedia;
};

export type ArticlesState = {
  list: Article[];
  isFetchingArticles: boolean;
  error?: Error;
};

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';
export const FETCH_ARTICLES_PENDING = 'FETCH_ARTICLES_PENDING';

export type FetchArticlesAction = {
  type: typeof FETCH_ARTICLES;
};

export type FetchArticlesPendingAction = {
  type: typeof FETCH_ARTICLES_PENDING;
};

export type FetchArticlesSuccessAction = {
  type: typeof FETCH_ARTICLES_SUCCESS;
  payload: Article[];
};

export type FetchArticlesFailureAction = {
  type: typeof FETCH_ARTICLES_FAILURE;
  error: Error;
};

export type ArticlesActionTypes =
  | FetchArticlesAction
  | FetchArticlesSuccessAction
  | FetchArticlesFailureAction
  | FetchArticlesPendingAction;
