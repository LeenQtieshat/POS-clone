const responseErrorHandler = err => {
  // handle response error

  console.error('Response Error : ', err);

  return Promise.reject(err);
};

const responseParser = response => {
  // parse response data

  if (response.config.method === 'get' && !response.data) {
    return Promise.reject('Response does not have data object.');
  }

  if (response.config.method === 'get') {
    return response.data;
  }

  return response;
};

export { responseParser, responseErrorHandler };
