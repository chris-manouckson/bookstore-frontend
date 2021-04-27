import {
  BOOKS_GET_ALL_PENDING,
  BOOKS_GET_ALL_SUCCESS,
  BOOKS_GET_ALL_FAILURE,
} from '../action-types';

export const booksGetAllPending = (offset, limit, order, search) => ({
  type: BOOKS_GET_ALL_PENDING,
  offset,
  limit,
  order,
  search,
});

export const booksGetAllSuccess = (payload) => ({
  type: BOOKS_GET_ALL_SUCCESS,
  payload,
});

export const booksGetAllFailure = (error) => ({
  type: BOOKS_GET_ALL_FAILURE,
  error,
});
