import React from 'react';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn().mockReturnValue({
    navigate: jest.fn(),
    setOptions: jest.fn(),
  }),
  useFocusEffect: jest.fn().mockImplementation((cb) => cb()),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));
