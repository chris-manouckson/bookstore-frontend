/* eslint-disable func-names */
import { call, put, takeLatest } from 'redux-saga/effects';

import { requestAuthGetAccessToken } from '../../api';
import {
  authGetAccessTokenSuccess,
  authGetAccessTokenFailure,
  authLogout,
} from '../actions';
import {
  AUTH_GET_ACCESS_TOKEN_PENDING,
  AUTH_GET_ACCESS_TOKEN_SUCCESS,
  AUTH_GET_ACCESS_TOKEN_FAILURE,
} from '../action-types';

export function* authGetAccessTokenPendingSaga() {
  yield takeLatest(AUTH_GET_ACCESS_TOKEN_PENDING, function* (action) {
    try {
      const { data: payload } = yield call(requestAuthGetAccessToken, action.payload);

      yield put(authGetAccessTokenSuccess(payload));
    } catch (error) {
      yield put(authGetAccessTokenFailure(error));
    }
  });
}

export function* authGetAccessTokenSuccessSaga() {
  yield takeLatest(AUTH_GET_ACCESS_TOKEN_SUCCESS, function* (action) {
    yield localStorage.setItem('accessToken', action.payload.access_token);
  });
}

export function* authGetAccessTokenFailureSaga() {
  yield takeLatest(AUTH_GET_ACCESS_TOKEN_FAILURE, function* (action) {
    const { error } = action;

    yield put(authLogout());

    if (error.response && error.response.message) {
      // TODO: dispatch push alert action
      // eslint-disable-next-line no-console
      yield console.log(error.response);
    }
  });
}
