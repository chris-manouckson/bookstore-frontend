/* eslint-disable func-names */
import { takeLatest } from 'redux-saga/effects';

import { AUTH_LOGOUT } from '../action-types';

export function* authLogoutSaga() {
  yield takeLatest(AUTH_LOGOUT, function* () {
    yield localStorage.removeItem('accessToken');
    yield localStorage.removeItem('refreshToken');
    yield localStorage.removeItem('currentUser');
  });
}
