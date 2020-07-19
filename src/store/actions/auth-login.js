import {
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
} from '../action-types';

export const authLoginPending = (payload) => ({
  type: AUTH_LOGIN_PENDING,
  payload,
});

export const authLoginSuccess = (payload) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload,
});

export const authLoginFailure = (error) => ({
  type: AUTH_LOGIN_FAILURE,
  error,
});
