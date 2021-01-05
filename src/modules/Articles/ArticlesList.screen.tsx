import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  useArticleList,
  useArticlesFetchError,
  useIsFetchingArticles,
} from '../../hooks';
import {fetchArticles} from '../../model/articles/actions';
import {Article} from '../../model/articles/types';
import {ArticleRow} from './atomic-components';

export default () => {
  const dispatch = useDispatch();

  const articles = useArticleList();
  const isFetching = useIsFetchingArticles();
  const error = useArticlesFetchError();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchArticles());
    }, []),
  );

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Article>) => <ArticleRow article={item} />,
    [],
  );

  return (
    <FlatList
      style={{flex: 1}}
      refreshControl={<RefreshControl refreshing={isFetching} />}
      refreshing={isFetching}
      data={articles}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
