import {
  AUTH_GET_CURRENT_USER_PENDING,
  AUTH_GET_CURRENT_USER_SUCCESS,
  AUTH_GET_CURRENT_USER_FAILURE,
} from '../action-types';

export const authGetCurrentUserPending = (payload) => ({
  type: AUTH_GET_CURRENT_USER_PENDING,
  payload,
});

export const authGetCurrentUserSuccess = (payload) => ({
  type: AUTH_GET_CURRENT_USER_SUCCESS,
  payload,
});

export const authGetCurrentUserFailure = (error) => ({
  type: AUTH_GET_CURRENT_USER_FAILURE,
  error,
});
