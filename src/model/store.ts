import {rootReducer, rootSaga} from './index';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export {store};

export type RootState = ReturnType<typeof rootReducer>;
