import {all} from 'redux-saga/effects';
import watcherRepositoriesSaga from './handlers/getRepositories';

export default function* rootSaga() {
  yield all([watcherRepositoriesSaga()]);
}
