import {
  ArticlesState,
  ArticlesActionTypes,
  FETCH_ARTICLES_PENDING,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
} from './types';

const initialState: ArticlesState = {
  list: [],
  isFetchingArticles: false,
};

export default (
  state = initialState,
  action: ArticlesActionTypes,
): ArticlesState => {
  switch (action.type) {
    case FETCH_ARTICLES_PENDING:
      return {
        ...state,
        isFetchingArticles: true,
        error: undefined,
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isFetchingArticles: false,
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetchingArticles: false,
      };
    default:
      return state;
  }
};
