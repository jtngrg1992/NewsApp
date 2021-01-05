import {takeEvery, call, put} from 'redux-saga/effects';
import {fetchArticlesSuccess, fetchArticlesFailure} from './actions';
import {FETCH_ARTICLES, Article, ArticleMedia} from './types';

const processJSON = (articleJSON: any[]): Article[] => {
  return articleJSON.map((item) => {
    const {
      id,
      media,
      published_date,
      updated,
      title,
      url,
      abstract,
      source,
      byline,
    } = item;

    const m = media as any[];
    let articleMedia: ArticleMedia | undefined;

    if (m.length > 0) {
      const mediaMeta = m[0]['media-metadata'] as any[];
      if (mediaMeta) {
        const thumbnail = mediaMeta.find(
          (i) => i.format === 'Standard Thumbnail',
        )?.url;
        const mediumImage = mediaMeta.find(
          (i) => i.format === 'mediumThreeByTwo210',
        )?.url;
        const largeImage = mediaMeta.find(
          (i) => i.format === 'mediumThreeByTwo440',
        )?.url;

        articleMedia = {
          thumbnail,
          mediumImage,
          largeImage,
        };
      }
    }

    let itemToReturn: Article = {
      id,
      url,
      published: published_date,
      title,
      abstract,
      source,
      author: byline,
      updated,
      media: articleMedia,
    };

    return itemToReturn;
  });
};

function* fetchArticles() {
  try {
    const response = yield call(
      fetch,
      'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=WvQCGKUDhY2YSxG5K4hS2bgKC0eD52Og',
    );
    const responseJSON = yield response.json();
    const {results} = responseJSON;
    const processedResults = processJSON(results);
    yield put(fetchArticlesSuccess(processedResults));
  } catch (e) {
    yield put(fetchArticlesFailure(e));
  }
}

function* watchFetchArticles() {
  yield takeEvery(FETCH_ARTICLES, fetchArticles);
}

export default watchFetchArticles;
