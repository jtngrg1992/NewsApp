import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ArticlesListingScreen} from '../modules/Articles';
import theme from '../theme';
import {ArticlesListingTitle} from '../constants';

export type ArticleRoutes = {
  Listing: undefined;
};

const Stack = createStackNavigator<ArticleRoutes>();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: theme.primaryColor,
      },
      headerTintColor: theme.onPrimary,
    }}>
    <Stack.Screen
      component={ArticlesListingScreen}
      name="Listing"
      options={() => ({title: ArticlesListingTitle})}
    />
  </Stack.Navigator>
);
