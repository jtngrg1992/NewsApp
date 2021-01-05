import React, {memo} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {abs} from 'react-native-reanimated';
import {Article} from '../../../model/articles/types';
import theme from '../../../theme';

export type ArticleRowProps = {
  article: Article;
} & TouchableOpacityProps;

export const ArticleRow = memo(
  ({article, style, ...otherProps}: ArticleRowProps) => {
    const {media, title, author, source, published} = article;
    return (
      <TouchableOpacity
        style={[styles.container, StyleSheet.flatten(style)]}
        {...otherProps}>
        <View style={styles.innerContainer}>
          <View style={styles.thumbnailContainer}>
            {media?.thumbnail && (
              <Image
                style={styles.thumbnail}
                source={{uri: media.thumbnail}}
                resizeMode="cover"
              />
            )}
          </View>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{author}</Text>
            <View>
              <Text style={styles.subtitle}>{source}</Text>
              <Text style={styles.subtitle}>{published}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnailContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: theme.secondaryColor,
    marginRight: 20,
  },
  thumbnail: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    color: theme.onBackground,
  },
  subtitle: {
    fontSize: 15,
    color: theme.onBackgroundLight,
  },
});
