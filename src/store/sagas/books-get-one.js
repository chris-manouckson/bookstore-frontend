/* eslint-disable func-names */
import { call, put, takeLatest } from 'redux-saga/effects';

import { requestBooksGetOne } from '../../api';
import { booksGetOneSuccess, booksGetOneFailure } from '../actions';
import { BOOKS_GET_ONE_PENDING, BOOKS_GET_ONE_FAILURE } from '../action-types';

export function* booksGetOnePendingSaga() {
  yield takeLatest(BOOKS_GET_ONE_PENDING, function* (action) {
    try {
      const { data: payload } = yield call(requestBooksGetOne, action.bookId);

      yield put(booksGetOneSuccess(payload));
    } catch (error) {
      yield put(booksGetOneFailure(error));
    }
  });
}

export function* booksGetOneFailureSaga() {
  yield takeLatest(BOOKS_GET_ONE_FAILURE, function* (action) {
    const { error } = action;

    if (error.response && error.response.message) {
      // TODO: dispatch push alert action
      // eslint-disable-next-line no-console
      yield console.log(error.response);
    }
  });
}
