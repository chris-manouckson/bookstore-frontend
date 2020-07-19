import * as actionTypes from '../action-types/auth';
import { createRequestStatus } from '../../utils';

const initialState = {
  signupRequestStatus: createRequestStatus(),
  getAccessTokenStatus: createRequestStatus(),
  // loginRequestStatus: createRequestStatus(),
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
        getAccessTokenStatus: createRequestStatus({ isLoading: true }),
      };
    case actionTypes.AUTH_GET_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        getAccessTokenStatus: createRequestStatus(),
      };
    case actionTypes.AUTH_GET_ACCESS_TOKEN_FAILURE:
      return {
        ...state,
        getAccessTokenStatus: createRequestStatus({ error: action.error }),
      };

    default:
      return state;
  }
};

export default auth;
