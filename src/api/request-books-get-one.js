import apiClient from './api-client';

const requestBooksGetOne = async (bookId) => {
  if (!bookId) return false;

  const response = await apiClient.request({
    method: 'get',
    url: `/books/${bookId}`,
  });

  return response.data;
};

export default requestBooksGetOne;
