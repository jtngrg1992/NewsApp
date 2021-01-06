import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import ArticlesListScreen from '../../modules/Articles/ArticlesList.screen';
import {fetchArticles} from '../../model/articles';
import {testID} from '../utils';
import mockArticles from '../test-data/articles';
import {FlatListProps} from 'react-native';

jest.mock('../../hooks', () => ({
  useArticleList: () => mockArticles,
  useIsFetchingArticles: () => true,
  useArticlesFetchError: () => new Error('Mock Error'),
}));

const mockSpy = jest.fn();
jest.mock('react-redux', () => ({
  // @ts-ignore
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockSpy,
}));

describe('unit/snapshot tests for ArticlesListScreen', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ArticlesListScreen />);
  });

  afterEach(() => {
    mockSpy.mockClear();
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should ask for articles after coming in focus', () => {
    expect(mockSpy).toHaveBeenCalledWith(fetchArticles());
  });

  it('should render a flatlist for displaying article rows', () => {
    expect(wrapper.find('FlatList')).toBeDefined();
  });

  it('should render all the articles that are present in the state', () => {
    const rowTestIDs = mockArticles.map((item) => `article-row-${item.id}`);
    rowTestIDs.forEach((item) => {
      expect(wrapper.findWhere(testID(item))).toBeDefined();
    });
  });

  it('should appear refreshing if the articles are being fetched', () => {
    expect((wrapper.props() as FlatListProps<any>).refreshing).toBeTruthy();
  });
});
