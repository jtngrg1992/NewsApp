import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/model/store';
import ArticlesRouter from './src/routers/ArticlesRouter';

export default () => (
  <Provider store={store}>
    <NavigationContainer>
      <ArticlesRouter />
    </NavigationContainer>
  </Provider>
);
