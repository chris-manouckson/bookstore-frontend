import * as actionTypes from '../action-types';
import { createRequestStatus } from '../../utils';

const initialState = {
  all: [],
  one: null,
  pagination: {
    offset: 0,
    limit: 12,
    total: 0,
  },
  order: {
    column_name: '',
    direction: 'asc',
  },
  search: {
    text: '',
  },

  getAllRequestStatus: createRequestStatus({}),
  getOneRequestStatus: createRequestStatus({}),
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USERS_GET_ALL_PENDING:
      return {
        ...state,
        getAllRequestStatus: createRequestStatus({ isLoading: true }),
      };
    case actionTypes.USERS_GET_ALL_SUCCESS:
      return {
        ...state,
        all: action.payload.users,
        pagination: action.payload.pagination,
        order: action.payload.order,
        search: action.payload.search,
        getAllRequestStatus: createRequestStatus(),
      };
    case actionTypes.USERS_GET_ALL_FAILURE:
      return {
        ...state,
        getAllRequestStatus: createRequestStatus({ error: action.error }),
      };

    case actionTypes.USERS_GET_ONE_PENDING:
      return {
        ...state,
        getOneRequestStatus: createRequestStatus({ isLoading: true }),
      };
    case actionTypes.USERS_GET_ONE_SUCCESS:
      return {
        ...state,
        one: action.payload.user,
        getOneRequestStatus: createRequestStatus(),
      };
    case actionTypes.USERS_GET_ONE_FAILURE:
      return {
        ...state,
        getOneRequestStatus: createRequestStatus({ error: action.error }),
      };

    default:
      return state;
  }
};

export default users;
