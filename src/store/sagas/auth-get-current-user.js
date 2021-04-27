/* eslint-disable func-names */
import { call, put, takeLatest } from 'redux-saga/effects';

import { requestAuthGetCurrentUser } from '../../api';
import {
  authGetCurrentUserSuccess,
  authGetCurrentUserFailure,
  authGetAccessTokenPending,
} from '../actions';
import {
  AUTH_GET_CURRENT_USER_PENDING,
  AUTH_GET_CURRENT_USER_SUCCESS,
  AUTH_GET_CURRENT_USER_FAILURE,
} from '../action-types';

export function* authGetCurrentUserPendingSaga() {
  yield takeLatest(AUTH_GET_CURRENT_USER_PENDING, function* (action) {
    try {
      const { data: payload } = yield call(requestAuthGetCurrentUser, action.payload);

      yield put(authGetCurrentUserSuccess(payload));
    } catch (error) {
      yield put(authGetCurrentUserFailure(error));
    }
  });
}

export function* authGetCurrentUserSuccessSaga() {
  yield takeLatest(AUTH_GET_CURRENT_USER_SUCCESS, function* (action) {
    yield localStorage.setItem('currentUser', JSON.stringify(action.payload.user));
  });
}

export function* authGetCurrentUserFailureSaga() {
  yield takeLatest(AUTH_GET_CURRENT_USER_FAILURE, function* (action) {
    const { error } = action;

    if (error.response && error.response.message) {
      // TODO: dispatch push alert action
      // eslint-disable-next-line no-console
      yield console.log(error.response);
    } else if (
      error.response
      && error.response.status === 401
      && localStorage.getItem('refreshToken')
    ) {
      yield put(authGetAccessTokenPending());
    }
  });
}
