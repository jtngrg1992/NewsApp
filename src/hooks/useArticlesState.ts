import {useSelector} from 'react-redux';
import {RootState} from '@news/model/store';

export const useArticleList = () =>
  useSelector((state: RootState) => state.articles.list);

export const useIsFetchingArticles = () =>
  useSelector((state: RootState) => state.articles.isFetchingArticles);

export const useArticlesFetchError = () =>
  useSelector((state: RootState) => state.articles.error);
