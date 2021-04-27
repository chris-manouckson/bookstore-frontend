import axios from 'axios';

const createApiClient = (config = {}) => {
  const {
    baseURL = process.env.REACT_APP_API_URL,
  } = config;

  if (!baseURL) {
    throw new Error(
      'API URL not specified! Please check your enviroment variables.',
    );
  }

  const apiClient = axios.create({
    baseURL,
  });

  return apiClient;
};

export default createApiClient();

export { createApiClient };
