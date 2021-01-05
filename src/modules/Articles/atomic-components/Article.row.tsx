import React, {memo} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Images} from '../../../images';
import {Article} from '../../../model/articles';
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
        <View style={[styles.filler, styles.centralizedRow]}>
          <View style={styles.thumbnailContainer}>
            {media?.thumbnail && (
              <Image
                style={styles.thumbnail}
                source={{uri: media.thumbnail}}
                resizeMode="cover"
              />
            )}
          </View>
          <View style={styles.filler}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
            <Text style={[styles.subtitle, {marginTop: 10}]}>{author}</Text>
            <View style={[styles.bottomRow, styles.centralizedRow]}>
              <Text style={styles.subtitle}>{source}</Text>
              <View style={styles.filler} />
              <View style={styles.centralizedRow}>
                <Image style={styles.calendarIcon} source={Images.calendar} />
                <Text style={styles.subtitle}>{published}</Text>
              </View>
            </View>
          </View>
          <View>
            <Image source={Images.next} style={styles.nextIcon} />
          </View>
        </View>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  centralizedRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  filler: {
    flex: 1,
  },
  thumbnailContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: theme.secondaryColor,
    marginRight: 15,
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
  bottomRow: {
    marginTop: 5,
  },
  calendarIcon: {
    height: 15,
    width: 15,
    tintColor: theme.onBackgroundLight,
    marginRight: 6,
  },
  nextIcon: {
    tintColor: theme.onBackgroundLight,
    height: 15,
    width: 15,
    marginLeft: 15,
  },
});
