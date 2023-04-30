const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export default getAuthToken;
