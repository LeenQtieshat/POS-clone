const authInterceptor = request => {
  const authToken = localStorage.getItem('authToken');

  request.headers['Authorization'] = `Bearer ${authToken}`;
  return request;
};

const requestErrorHandler = err => {
  // handle response error

  return Promise.reject(err);
};

export { authInterceptor, requestErrorHandler };
