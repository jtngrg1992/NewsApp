import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ArticleDetailScreen, ArticlesListingScreen} from '../modules/Articles';
import theme from '../theme';
import {ArticlesListingTitle} from '../constants';
import {Article} from '../model/articles';

export type ArticleRoutes = {
  Listing: undefined;
  Detail: {article: Article};
};

const Stack = createStackNavigator<ArticleRoutes>();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: theme.primaryColor,
      },
      headerTintColor: theme.onPrimary,
      title: ArticlesListingTitle,
      headerBackTitle: ' ',
    }}>
    <Stack.Screen component={ArticlesListingScreen} name="Listing" />
    <Stack.Screen component={ArticleDetailScreen} name="Detail" />
  </Stack.Navigator>
);
