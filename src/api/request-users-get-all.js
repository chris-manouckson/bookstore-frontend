import queryString from 'query-string';

import apiClient from './api-client';

const requestUsersGetAll = async (
  offset = 0,
  limit = 12,
  order = ['id', 'asc'],
  search = '',
) => {
  const response = await apiClient.request({
    method: 'get',
    url: `/users?${queryString.stringify({
      offset,
      limit,
      order,
      search,
    })}`,
  });

  return response.data;
};

export default requestUsersGetAll;
