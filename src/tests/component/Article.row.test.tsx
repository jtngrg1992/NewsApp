import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {ArticleRow, ArticleRowProps} from '@news/modules/Articles';
import {testID} from '../utils';
import mockArticles from '../test-data/articles';

describe('unit/snapshot tests for ArticleRow', () => {
  let wrapper: ShallowWrapper;

  const mockProps: ArticleRowProps = {
    onPress: jest.fn(),
    article: mockArticles[0],
  };

  beforeEach(() => (wrapper = shallow(<ArticleRow {...mockProps} />)));

  it('should render correctly with the supplied mock article', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct title in designated `Text` element', () => {
    expect(wrapper.findWhere(testID('article-title')).prop('children')).toBe(
      mockProps.article.title,
    );
  });

  it('should render correct author in designated `Text` element', () => {
    expect(wrapper.findWhere(testID('article-author')).prop('children')).toBe(
      mockProps.article.author,
    );
  });

  it('should render correct image as article thumbnail', () => {
    expect(
      wrapper.findWhere(testID('article-thumbnail')).prop('source'),
    ).toEqual({
      uri: mockProps.article.media!.thumbnail,
    });
  });

  it('should call `onPress` prop when tapped upon', () => {
    wrapper.findWhere(testID('touchable')).props().onPress();
    expect(mockProps.onPress).toBeCalledTimes(1);
  });
});
