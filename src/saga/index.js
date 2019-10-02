import { put, takeLatest, call } from 'redux-saga/effects';
import actionTypes from '../constants/actionTypes';
import { getUsers } from '../api';

export function * fetchUsers () {
  try {
    const users = yield call(getUsers);
    yield put({ type: actionTypes.GET_USERS_SUCCESS, users });
  } catch (error) {
    yield put({ type: actionTypes.GET_USERS_ERROR, error });
  }
}

export default function * rootSaga () {
  yield takeLatest(actionTypes.GET_USERS, fetchUsers);
}
