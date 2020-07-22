import {
  USERS_GET_ALL_PENDING,
  USERS_GET_ALL_SUCCESS,
  USERS_GET_ALL_FAILURE,
} from '../action-types';

export const usersGetAllPending = (offset, limit, order, search) => ({
  type: USERS_GET_ALL_PENDING,
  offset,
  limit,
  order,
  search,
});

export const usersGetAllSuccess = (payload) => ({
  type: USERS_GET_ALL_SUCCESS,
  payload,
});

export const usersGetAllFailure = (error) => ({
  type: USERS_GET_ALL_FAILURE,
  error,
});
