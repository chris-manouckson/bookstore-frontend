/* eslint-disable func-names */
import { call, put, takeLatest } from 'redux-saga/effects';

import { requestAuthSignup } from '../../api';
import {
  authSignupSuccess,
  authSignupFailure,
  authGetAccessTokenPending,
} from '../actions';
import {
  AUTH_SIGNUP_PENDING,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAILURE,
} from '../action-types';

export function* authSignupPendingSaga() {
  yield takeLatest(AUTH_SIGNUP_PENDING, function* (action) {
    try {
      const { data: payload } = yield call(requestAuthSignup, action.payload);

      yield put(authSignupSuccess(payload));
    } catch (error) {
      yield put(authSignupFailure(error));
    }
  });
}

export function* authSignupSuccessSaga() {
  yield takeLatest(AUTH_SIGNUP_SUCCESS, function* (action) {
    yield localStorage.setItem('refreshToken', action.payload.refresh_token);
    yield localStorage.setItem('currentUser', JSON.stringify(action.payload.user));

    yield put(authGetAccessTokenPending(action.payload.refresh_token));
  });
}

export function* authSignupFailureSaga() {
  yield takeLatest(AUTH_SIGNUP_FAILURE, function* (action) {
    const { error } = action;

    if (error.response && error.response.message) {
      // TODO: dispatch push alert action
      // eslint-disable-next-line no-console
      yield console.log(error.response);
    }
  });
}
