import {Images} from '@news/utils/images';
import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {NavigationButton} from '../NavigationButton';

describe('unit tests for NavigationButton', () => {
  let wrapper: ShallowWrapper;

  const mockPress = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <NavigationButton image={Images.calendar} onPress={mockPress} />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct image in designated `Image` element', () => {
    const image = wrapper.find('Image');
    expect(image.prop('source')).toEqual({
      testUri: '../../../src/assets/images/calendar.png',
    });
  });
});
