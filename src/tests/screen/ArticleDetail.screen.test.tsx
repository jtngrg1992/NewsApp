import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {ArticleDetailScreen} from '../../modules/Articles';
import mockArticles from '../test-data/articles';
import {testID} from '../utils';

describe('unit/snapshot tests for ArticleDetailScreen', () => {
  let wrapper: ShallowWrapper;

  const mockArticle = mockArticles[0];

  beforeEach(() => {
    wrapper = shallow(
      <ArticleDetailScreen
        // @ts-ignore
        route={{
          params: {
            article: mockArticle,
          },
        }}
      />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct image in the header', () => {
    expect(
      wrapper.findWhere(testID('article-large-image')).prop('source'),
    ).toEqual({uri: mockArticle.media?.largeImage});
  });

  it('should render correct article title in designated `Text` element', () => {
    expect(wrapper.findWhere(testID('article-title')).prop('children')).toBe(
      mockArticle.title,
    );
  });

  it('should render correct author and publishing date in designated `Text` elements', () => {
    expect(wrapper.findWhere(testID('article-author')).prop('children')).toBe(
      mockArticle.author,
    );
    expect(wrapper.findWhere(testID('article-date')).prop('children')).toBe(
      mockArticle.published,
    );
  });

  it('should render correct article abstract in designated `Text` element', () => {
    expect(wrapper.findWhere(testID('article-abstract')).prop('children')).toBe(
      mockArticle.abstract,
    );
  });

  it('should not render article image if not present', () => {
    const mockArticle = mockArticles[1];
    wrapper = shallow(
      <ArticleDetailScreen
        // @ts-ignore
        route={{
          params: {
            article: mockArticle,
          },
        }}
      />,
    );
    expect(wrapper.find(testID('article-large-image')).exists()).toBeFalsy();
  });
});
