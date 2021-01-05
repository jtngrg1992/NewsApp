import React, {useCallback, useEffect, useLayoutEffect} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  Alert,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  useArticleList,
  useArticlesFetchError,
  useIsFetchingArticles,
} from '../../hooks';
import {fetchArticles, Article} from '../../model/articles';
import {ArticleRow, NavigationButton} from './atomic-components';
import {Images} from '../../images';
import {ErrorTitle} from '../../constants';

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
      headerLeft: () => <NavigationButton image={Images.menu} />,
      headerRight: () => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <NavigationButton image={Images.search} />
          <NavigationButton image={Images.more} />
        </View>
      ),
    });
  }, []);

  useEffect(() => {
    if (error) {
      Alert.alert(ErrorTitle, error.message);
    }
  }, [error]);

  const handleItemPress = useCallback((item: Article) => {
    navigation.navigate('Detail', {article: item});
  }, []);

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Article>) => (
      <ArticleRow article={item} onPress={() => handleItemPress(item)} />
    ),
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
