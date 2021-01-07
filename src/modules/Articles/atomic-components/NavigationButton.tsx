import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacityProps,
} from 'react-native';
import theme from '@news/theme';

export type NavigationButtonProps = {
  image: ImageSourcePropType;
} & TouchableOpacityProps;
export const NavigationButton = ({
  image,
  style,
  ...otherProps
}: NavigationButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, StyleSheet.flatten(style)]}
      {...otherProps}>
      <Image source={image} resizeMode="contain" style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    tintColor: theme.onPrimary,
  },
});
