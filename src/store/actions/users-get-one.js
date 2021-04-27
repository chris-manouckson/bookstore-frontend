import {
  USERS_GET_ONE_PENDING,
  USERS_GET_ONE_SUCCESS,
  USERS_GET_ONE_FAILURE,
} from '../action-types';

export const usersGetOnePending = (userId) => ({
  type: USERS_GET_ONE_PENDING,
  userId,
});

export const usersGetOneSuccess = (payload) => ({
  type: USERS_GET_ONE_SUCCESS,
  payload,
});

export const usersGetOneFailure = (error) => ({
  type: USERS_GET_ONE_FAILURE,
  error,
});
