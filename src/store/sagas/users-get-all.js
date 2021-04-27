/* eslint-disable func-names */
import { call, put, takeLatest } from 'redux-saga/effects';

import { requestUsersGetAll } from '../../api';
import { usersGetAllSuccess, usersGetAllFailure } from '../actions';
import { USERS_GET_ALL_PENDING, USERS_GET_ALL_FAILURE } from '../action-types';

export function* usersGetAllPendingSaga() {
  yield takeLatest(USERS_GET_ALL_PENDING, function* (action) {
    try {
      const { data: payload } = yield call(
        requestUsersGetAll,
        action.offset,
        action.limit,
        action.order,
        action.search,
      );

      yield put(usersGetAllSuccess(payload));
    } catch (error) {
      yield put(usersGetAllFailure(error));
    }
  });
}

export function* usersGetAllFailureSaga() {
  yield takeLatest(USERS_GET_ALL_FAILURE, function* (action) {
    const { error } = action;

    if (error.response && error.response.message) {
      // TODO: dispatch push alert action
      // eslint-disable-next-line no-console
      yield console.log(error.response);
    }
  });
}
