import * as actionTypes from '../action-types/auth';
import { createRequestStatus } from '../../utils';

const initialState = {
  signupRequestStatus: createRequestStatus(),
  getAccessTokenRequestStatus: createRequestStatus(),
  loginRequestStatus: createRequestStatus(),
  // getCurrentUserStatus: createRequestStatus(),
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SIGNUP_PENDING:
      return {
        ...state,
        signupRequestStatus: createRequestStatus({ isLoading: true }),
      };
    case actionTypes.AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        signupRequestStatus: createRequestStatus(),
      };
    case actionTypes.AUTH_SIGNUP_FAILURE:
      return {
        ...state,
        signupRequestStatus: createRequestStatus({ error: action.error }),
      };

    case actionTypes.AUTH_GET_ACCESS_TOKEN_PENDING:
      return {
        ...state,
        getAccessTokenRequestStatus: createRequestStatus({ isLoading: true }),
      };
    case actionTypes.AUTH_GET_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        getAccessTokenRequestStatus: createRequestStatus(),
      };
    case actionTypes.AUTH_GET_ACCESS_TOKEN_FAILURE:
      return {
        ...state,
        getAccessTokenRequestStatus: createRequestStatus({ error: action.error }),
      };

    case actionTypes.AUTH_LOGIN_PENDING:
      return {
        ...state,
        loginRequestStatus: createRequestStatus({ isLoading: true }),
      };
    case actionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loginRequestStatus: createRequestStatus(),
      };
    case actionTypes.AUTH_LOGIN_FAILURE:
      return {
        ...state,
        loginRequestStatus: createRequestStatus({ error: action.error }),
      };

    default:
      return state;
  }
};

export default auth;
