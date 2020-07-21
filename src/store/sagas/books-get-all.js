/* eslint-disable func-names */
import { call, put, takeLatest } from 'redux-saga/effects';

import { requestBooksGetAll } from '../../api';
import { booksGetAllSuccess, booksGetAllFailure } from '../actions';
import { BOOKS_GET_ALL_PENDING, BOOKS_GET_ALL_FAILURE } from '../action-types';

export function* booksGetAllPendingSaga() {
  yield takeLatest(BOOKS_GET_ALL_PENDING, function* (action) {
    try {
      const { data: payload } = yield call(
        requestBooksGetAll,
        action.offset,
        action.limit,
        action.order,
        action.search,
      );

      yield put(booksGetAllSuccess(payload));
    } catch (error) {
      yield put(booksGetAllFailure(error));
    }
  });
}

export function* booksGetAllFailureSaga() {
  yield takeLatest(BOOKS_GET_ALL_FAILURE, function* (action) {
    const { error } = action;

    if (error.response && error.response.message) {
      // TODO: dispatch push alert action
      // eslint-disable-next-line no-console
      yield console.log(error.response);
    }
  });
}
