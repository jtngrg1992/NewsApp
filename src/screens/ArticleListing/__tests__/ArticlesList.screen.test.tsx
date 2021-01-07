import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import ArticlesListScreen from '@news/screens/ArticleListing/ArticlesList.screen';
import {Article, fetchArticles} from '@news/model/articles';
import mockArticles from '../../../model/articles/mock-data';
import {FlatListProps, ListRenderItem} from 'react-native';
import {useNavigation} from '@react-navigation/native';

jest.mock('@news/hooks', () => ({
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
    expect((wrapper.props() as FlatListProps<any>).data?.length).toBe(
      mockArticles.length,
    );
  });

  it('should appear refreshing if the articles are being fetched', () => {
    expect((wrapper.props() as FlatListProps<any>).refreshing).toBeTruthy();
  });

  it('should navigate to detail screen if an article is tapped upon', () => {
    const props = wrapper.props() as FlatListProps<any>;
    const renderItem: ListRenderItem<Article> | null | undefined =
      props.renderItem;
    const row =
      renderItem &&
      renderItem({
        item: mockArticles[0],
        index: 0,
        separators: {
          highlight: () => {},
          unhighlight: () => {},
          updateProps: () => {},
        },
      });
    const spy = jest.spyOn(useNavigation(), 'navigate');
    row?.props.onPress();
    expect(spy).toHaveBeenCalledWith('Detail', {article: mockArticles[0]});
  });
});
