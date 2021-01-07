import {ShallowWrapper} from 'enzyme';

export const testID = (id: string) => (node: ShallowWrapper) =>
  node.prop('testID') === id;
