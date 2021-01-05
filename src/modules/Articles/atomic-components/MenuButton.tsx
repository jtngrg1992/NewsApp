import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Images} from '../../../images';
import theme from '../../../theme';

export const MenuButton = () => (
  <TouchableOpacity style={styles.container}>
    <Image style={styles.icon} source={Images.menu} resizeMode="contain" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 50,

    tintColor: theme.onPrimary,
  },
});
