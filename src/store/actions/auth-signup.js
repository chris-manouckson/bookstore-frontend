import {
  AUTH_SIGNUP_PENDING,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAILURE,
} from '../action-types';

export const authSignupPending = (payload) => ({
  type: AUTH_SIGNUP_PENDING,
  payload,
});

export const authSignupSuccess = (payload) => ({
  type: AUTH_SIGNUP_SUCCESS,
  payload,
});

export const authSignupFailure = (error) => ({
  type: AUTH_SIGNUP_FAILURE,
  error,
});
