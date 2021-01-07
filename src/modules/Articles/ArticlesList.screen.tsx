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
} from '@news/hooks';
import {fetchArticles, Article} from '@news/model/articles';
import {ErrorTitle} from '@news/constants';
import {Images} from '@news/images';
import {ArticleRow, NavigationButton} from './atomic-components';

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
    console.log(error);
    if (error) {
      Alert.alert(ErrorTitle, error.message);
    }
  }, [error]);

  const handleItemPress = useCallback((item: Article) => {
    navigation.navigate('Detail', {article: item});
  }, []);

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Article>) => (
      <ArticleRow
        testID={`article-row-${item.id}`}
        article={item}
        onPress={() => handleItemPress(item)}
      />
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
