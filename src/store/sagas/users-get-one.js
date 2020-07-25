/* eslint-disable func-names */
import { call, put, takeLatest } from 'redux-saga/effects';

import { requestUsersGetOne } from '../../api';
import { usersGetOneSuccess, usersGetOneFailure } from '../actions';
import { USERS_GET_ONE_PENDING, USERS_GET_ONE_FAILURE } from '../action-types';

export function* usersGetOnePendingSaga() {
  yield takeLatest(USERS_GET_ONE_PENDING, function* (action) {
    try {
      const { data: payload } = yield call(requestUsersGetOne, action.userId);

      yield put(usersGetOneSuccess(payload));
    } catch (error) {
      yield put(usersGetOneFailure(error));
    }
  });
}

export function* usersGetOneFailureSaga() {
  yield takeLatest(USERS_GET_ONE_FAILURE, function* (action) {
    const { error } = action;

    if (error.response && error.response.message) {
      // TODO: dispatch push alert action
      // eslint-disable-next-line no-console
      yield console.log(error.response);
    }
  });
}
