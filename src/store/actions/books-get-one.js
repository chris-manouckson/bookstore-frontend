import {
  BOOKS_GET_ONE_PENDING,
  BOOKS_GET_ONE_SUCCESS,
  BOOKS_GET_ONE_FAILURE,
} from '../action-types';

export const booksGetOnePending = (bookId) => ({
  type: BOOKS_GET_ONE_PENDING,
  bookId,
});

export const booksGetOneSuccess = (payload) => ({
  type: BOOKS_GET_ONE_SUCCESS,
  payload,
});

export const booksGetOneFailure = (error) => ({
  type: BOOKS_GET_ONE_FAILURE,
  error,
});
