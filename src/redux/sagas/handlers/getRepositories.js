import {call, put, takeLatest} from 'redux-saga/effects';
import {
  GET_REPOSITORIES_REQUEST,
  GET_REPOSITORIES_SUCCESS,
  GET_REPOSITORIES_FAILURE,
} from '../../actions/index';
import requestGetRepositories from '../requests/getRepositories';

// put a slight delay so the loading indicator animation won't cut off halfway
const delay = time => new Promise(resolve => setTimeout(resolve, time));

function* handleGetRepositories() {
  try {
    const repositories = yield call(requestGetRepositories);
    // yield call(delay, 1000);
    yield put({
      type: GET_REPOSITORIES_SUCCESS,
      repositories: repositories,
    });
  } catch (error) {
    yield put({type: GET_REPOSITORIES_FAILURE, message: error.message});
  }
}

function* watcherRepositoriesSaga() {
  yield takeLatest(GET_REPOSITORIES_REQUEST, handleGetRepositories);
}

export default watcherRepositoriesSaga;
