import { all } from 'redux-saga/effects';

import {
  authSignupPendingSaga,
  authSignupSuccessSaga,
  authSignupFailureSaga,
} from './auth-signup';
import {
  authGetAccessTokenPendingSaga,
  authGetAccessTokenSuccessSaga,
  authGetAccessTokenFailureSaga,
} from './auth-get-access-token';
import {
  authLoginPendingSaga,
  authLoginSuccessSaga,
  authLoginFailureSaga,
} from './auth-login';
import {
  authGetCurrentUserPendingSaga,
  authGetCurrentUserSuccessSaga,
  authGetCurrentUserFailureSaga,
} from './auth-get-current-user';
import { authLogoutSaga } from './auth-logout';
import {
  booksGetAllPendingSaga,
  booksGetAllFailureSaga,
} from './books-get-all';
import {
  booksGetOnePendingSaga,
  booksGetOneFailureSaga,
} from './books-get-one';
import {
  usersGetAllPendingSaga,
  usersGetAllFailureSaga,
} from './users-get-all';

export default function* () {
  yield all([
    authSignupPendingSaga(),
    authSignupSuccessSaga(),
    authSignupFailureSaga(),
    authGetAccessTokenPendingSaga(),
    authGetAccessTokenSuccessSaga(),
    authGetAccessTokenFailureSaga(),
    authLoginPendingSaga(),
    authLoginSuccessSaga(),
    authLoginFailureSaga(),
    authGetCurrentUserPendingSaga(),
    authGetCurrentUserSuccessSaga(),
    authGetCurrentUserFailureSaga(),
    authLogoutSaga(),
    booksGetAllPendingSaga(),
    booksGetAllFailureSaga(),
    booksGetOnePendingSaga(),
    booksGetOneFailureSaga(),
    usersGetAllPendingSaga(),
    usersGetAllFailureSaga(),
  ]);
}
