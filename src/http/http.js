import axios from "axios";
import { authInterceptor, requestErrorHandler } from "./requestInterceptors";
import { responseErrorHandler, responseParser } from "./responseInterceptors";
import { isProd } from "./env";

const BASE_URL = isProd
  ? "https://ticketak-api.herokuapp.com/api/v1"
  : "http://localhost:5000/api/v1";
// TODO change this to the heroku url

console.log(isProd, BASE_URL);

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
});

http.interceptors.request.use(authInterceptor, requestErrorHandler);
http.interceptors.response.use(responseParser, responseErrorHandler);

export default http;
