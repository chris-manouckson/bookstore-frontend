import apiClient from './api-client';

const requestAuthLogin = async (data) => {
  const response = await apiClient.request({
    method: 'post',
    url: '/auth/login',
    data,
  });

  return response.data;
};

export default requestAuthLogin;
