import apiClient from './api-client';

const requestAuthGetAccessToken = async (refreshToken) => {
  const response = await apiClient.request({
    method: 'get',
    url: '/auth/access-token',
    headers: {
      Authorization: `Bearer ${refreshToken || localStorage.getItem('refreshToken')}`,
    },
  });

  return response.data;
};

export default requestAuthGetAccessToken;
