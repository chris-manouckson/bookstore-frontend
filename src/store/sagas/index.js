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

export default function* () {
  yield all([
    authSignupPendingSaga(),
    authSignupSuccessSaga(),
    authSignupFailureSaga(),
    authGetAccessTokenPendingSaga(),
    authGetAccessTokenSuccessSaga(),
    authGetAccessTokenFailureSaga(),
  ]);
}
