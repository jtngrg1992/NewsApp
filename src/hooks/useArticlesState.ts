import {RootState} from '../model/store';
import {useSelector} from 'react-redux';

export const useArticleList = () =>
  useSelector((state: RootState) => state.articles.list);

export const useIsFetchingArticles = () =>
  useSelector((state: RootState) => state.articles.isFetchingArticles);

export const useArticlesFetchError = () =>
  useSelector((state: RootState) => state.articles.error);
