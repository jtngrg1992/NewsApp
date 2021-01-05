import React, {useCallback, useLayoutEffect} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  Dimensions,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  useArticleList,
  useArticlesFetchError,
  useIsFetchingArticles,
} from '../../hooks';
import {fetchArticles} from '../../model/articles/actions';
import {Article} from '../../model/articles/types';
import {ArticleRow, MenuButton} from './atomic-components';

const width = Dimensions.get('screen').width;
export default () => {
  const dispatch = useDispatch();
  const articles = useArticleList();
  const isFetching = useIsFetchingArticles();
  const error = useArticlesFetchError();
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchArticles());
    }, []),
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <MenuButton />,
    });
  }, []);

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
