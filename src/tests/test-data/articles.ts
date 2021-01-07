import {Article} from './../../model/articles/types';

// following is the mock article array cleanup and pre-typecasted
const mockArticles: Article[] = [
  {
    id: 0,
    title: 'Mock title',
    abstract: 'Mock Abstract',
    author: 'Mock Author',
    published: '2021-01-05',
    source: 'Mock source',
    updated: '2021-01-05',
    url: 'mock url',
    media: {
      thumbnail: 'some.url',
      mediumImage: undefined,
      largeImage: 'some.other.url',
    },
  },
  {
    id: 1,
    title: 'Mock title2',
    abstract: 'Mock Abstract2',
    author: 'Mock Author',
    published: '2021-01-05',
    source: 'Mock source',
    updated: '2021-01-05',
    url: 'mock url',
    media: {
      thumbnail: 'some.url',
    },
  },
];

// following is the mock article array in raw json format
const mockArticleJSON = [
  {
    id: 0,
    title: 'Mock title',
    abstract: 'Mock Abstract',
    byline: 'Mock Author',
    published_date: '2021-01-05',
    source: 'Mock source',
    updated: '2021-01-05',
    url: 'mock url',
    media: [
      {
        ['media-metadata']: [
          {
            format: 'Standard Thumbnail',
            url: 'some.url',
          },
          {
            format: 'mediumThreeByTwo440',
            url: 'some.other.url',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: 'Mock title2',
    abstract: 'Mock Abstract2',
    byline: 'Mock Author',
    published_date: '2021-01-05',
    source: 'Mock source',
    updated: '2021-01-05',
    url: 'mock url',
    media: [
      {
        ['media-metadata']: [
          {
            format: 'Standard Thumbnail',
            url: 'some.url',
          },
        ],
      },
    ],
  },
];

export default mockArticles;

export {mockArticleJSON};
