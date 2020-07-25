import apiClient from './api-client';

const requestUsersGetOne = async (userId) => {
  const response = await apiClient.request({
    method: 'get',
    url: `/users/${userId}`,
  });

  return response.data;
};

export default requestUsersGetOne;
