//rootSaga.JS
import { all } from 'redux-saga/effects';
import metalsSaga from './metalsSaga';

export default function* rootSaga() {
  yield all([metalsSaga()]);
}
