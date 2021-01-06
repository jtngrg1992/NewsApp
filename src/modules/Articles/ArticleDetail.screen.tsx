import {RouteProp} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import {Images} from '../../images';
import {ArticleRoutes} from '../../routers/ArticlesRouter';
import theme from '../../theme';

type DetailScreenRouteProp = RouteProp<ArticleRoutes, 'Detail'>;

export default ({route}: {route: DetailScreenRouteProp}) => {
  const article = useMemo(() => route.params.article, [route?.params.article]);

  const {title, abstract, media, author, published} = article;

  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <View style={styles.imageContainer}>
        {media?.largeImage && (
          <Image
            testID="article-large-image"
            style={styles.articleImage}
            source={{uri: media.largeImage}}
            resizeMode="cover"
          />
        )}
      </View>
      <View style={styles.detailContainer}>
        <Text testID="article-title" style={styles.title}>
          {title}
        </Text>
        <View style={[styles.row, {marginTop: 10}]}>
          <View style={styles.spacer}>
            <Text testID="article-author" style={styles.infoText}>
              {author}
            </Text>
          </View>
          <View style={[styles.row, {flex: 1, justifyContent: 'flex-end'}]}>
            <Image style={styles.calendarIcon} source={Images.calendar} />
            <Text testID="article-date" style={styles.infoText}>
              {published}
            </Text>
          </View>
        </View>
        <Text testID="article-abstract" style={styles.abstract}>
          {abstract}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  imageContainer: {
    height: 220,
    backgroundColor: theme.secondaryColor,
    width: '100%',
  },
  articleImage: {
    flex: 1,
  },
  detailContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.onBackground,
  },
  abstract: {
    fontSize: 17,
    color: theme.onBackgroundLight,
    fontWeight: '500',
    marginTop: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacer: {
    flex: 1,
  },
  infoText: {
    fontSize: 14,
    color: theme.onBackgroundLight,
    flexWrap: 'wrap',
  },
  calendarIcon: {
    height: 20,
    width: 20,
    tintColor: theme.onBackgroundLight,
    marginRight: 10,
  },
});
