// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import metalsReducer from './slices/metalsSlice';
import rootSaga from './saga/rootSaga';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// configure store
const store = configureStore({
  reducer: {
    metals: metalsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// run sagas
sagaMiddleware.run(rootSaga);

export default store;
