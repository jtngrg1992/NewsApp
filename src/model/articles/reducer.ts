import {ArticlesState, ArticlesActionTypes} from './types';

const initialState: ArticlesState = {
  list: [],
};

export default (state = initialState, action: ArticlesActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
};
