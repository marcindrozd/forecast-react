import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';

import reducer from './reducers';
import watchAsync from './sagas';
import Root from './components/Root';

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchAsync);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
