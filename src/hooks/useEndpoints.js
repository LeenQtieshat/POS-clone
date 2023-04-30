import validateEndpointParams from '../utils/validateEndpointParams';
import authenticationEndpoints from '../API/endpoints/authentication';
import eventsEndpoints from '../API/endpoints/events';
import orderEndpoints from '../API/endpoints/order';

const useEndpoints = () => {
  const endpoints = {
    ...authenticationEndpoints,
    ...eventsEndpoints,
    ...orderEndpoints
  };

  Object.keys(endpoints).forEach(key => {
    let originalEndpoint = endpoints[key];

    endpoints[key] = (...args) => {
      if (!originalEndpoint.length || validateEndpointParams(key, ...args)) {
        return originalEndpoint(...args);
      }
    };
  });

  return endpoints;
};

export default useEndpoints;
