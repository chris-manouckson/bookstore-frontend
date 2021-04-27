import apiClient from './api-client';

const requestAuthGetCurrentUser = async (accessToken) => {
  if (!accessToken && !localStorage.getItem('accessToken')) {
    return false;
  }

  const response = await apiClient.request({
    method: 'get',
    url: '/auth/current-user',
    headers: {
      Authorization: `Bearer ${accessToken || localStorage.getItem('accessToken')}`,
    },
  });

  return response.data;
};

export default requestAuthGetCurrentUser;
