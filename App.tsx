import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './src/model/store';

export default () => (
  <Provider store={store}>
    <View>
      <Text> Something </Text>
    </View>
  </Provider>
);
