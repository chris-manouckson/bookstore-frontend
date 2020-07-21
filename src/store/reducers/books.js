import * as actionTypes from '../action-types';
import { createRequestStatus } from '../../utils';

const initialState = {
  all: [],
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
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BOOKS_GET_ALL_PENDING:
      return {
        ...state,
        getAllRequestStatus: createRequestStatus({ isLoading: true }),
      };
    case actionTypes.BOOKS_GET_ALL_SUCCESS:
      return {
        ...state,
        all: action.payload.books,
        pagination: action.payload.pagination,
        order: action.payload.order,
        search: action.payload.search,
        getAllRequestStatus: createRequestStatus(),
      };
    case actionTypes.BOOKS_GET_ALL_FAILURE:
      return {
        ...state,
        getAllRequestStatus: createRequestStatus({ error: action.error }),
      };

    default:
      return state;
  }
};

export default books;
