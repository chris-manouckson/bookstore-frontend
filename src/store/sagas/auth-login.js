/* eslint-disable func-names */
import { call, put, takeLatest } from 'redux-saga/effects';

import { requestAuthLogin } from '../../api';
import {
  authLoginSuccess,
  authLoginFailure,
  authGetCurrentUserPending,
} from '../actions';
import {
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
} from '../action-types';

export function* authLoginPendingSaga() {
  yield takeLatest(AUTH_LOGIN_PENDING, function* (action) {
    try {
      const { data: payload } = yield call(requestAuthLogin, action.payload);

      yield put(authLoginSuccess(payload));
    } catch (error) {
      yield put(authLoginFailure(error));
    }
  });
}

export function* authLoginSuccessSaga() {
  yield takeLatest(AUTH_LOGIN_SUCCESS, function* (action) {
    yield localStorage.setItem('refreshToken', action.payload.refresh_token);
    yield localStorage.setItem('accessToken', action.payload.access_token);

    yield put(authGetCurrentUserPending(action.payload.access_token));
  });
}

export function* authLoginFailureSaga() {
  yield takeLatest(AUTH_LOGIN_FAILURE, function* (action) {
    const { error } = action;

    if (error.response && error.response.message) {
      // TODO: dispatch push alert action
      // eslint-disable-next-line no-console
      yield console.log(error.response);
    }
  });
}
