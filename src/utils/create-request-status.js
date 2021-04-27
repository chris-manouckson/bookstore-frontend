const createRequestStatus = (params = {}) => ({
  isLoading: params.isLoading || false,
  error: params.error || null,
});

export default createRequestStatus;
