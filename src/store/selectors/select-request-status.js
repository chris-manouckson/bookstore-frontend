const selectRequestStatus = (reducerName, requestName) => (state) => state[reducerName][`${requestName}RequestStatus`];

export default selectRequestStatus;
