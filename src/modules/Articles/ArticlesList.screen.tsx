import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useArticleList} from '../../hooks';
import {fetchArticles} from '../../model/articles/actions';

export default () => {
  const dispatch = useDispatch();

  const articles = useArticleList();

  console.log(articles);
  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchArticles());
    }, []),
  );

  return (
    <View>
      <Text> some thing </Text>
    </View>
  );
};
