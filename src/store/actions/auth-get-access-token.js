import {
  AUTH_GET_ACCESS_TOKEN_PENDING,
  AUTH_GET_ACCESS_TOKEN_SUCCESS,
  AUTH_GET_ACCESS_TOKEN_FAILURE,
} from '../action-types';

export const authGetAccessTokenPending = (payload) => ({
  type: AUTH_GET_ACCESS_TOKEN_PENDING,
  payload,
});

export const authGetAccessTokenSuccess = (payload) => ({
  type: AUTH_GET_ACCESS_TOKEN_SUCCESS,
  payload,
});

export const authGetAccessTokenFailure = (error) => ({
  type: AUTH_GET_ACCESS_TOKEN_FAILURE,
  error,
});
