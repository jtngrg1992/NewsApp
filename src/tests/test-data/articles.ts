import {Article} from './../../model/articles/types';
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

export default mockArticles;
