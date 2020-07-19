import apiClient from './api-client';

const requestAuthSignup = async (data) => {
  const response = await apiClient.request({
    method: 'post',
    url: '/auth/signup',
    data,
  });

  return response.data;
};

export default requestAuthSignup;
