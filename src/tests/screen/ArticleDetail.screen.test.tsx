import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {ArticleDetailScreen} from '../../modules/Articles';
import mockArticles from '../test-data/articles';

describe('unit/snapshot tests for ArticleDetailScreen', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ArticleDetailScreen
        // @ts-ignore
        route={{
          params: {
            article: mockArticles[0],
          },
        }}
      />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
