import http from "../../http/http";
import { signInRoute, getUserAddressRoute } from "../routes/authentication";

const signIn = (signInData) => {
  return http.post(signInRoute(), signInData);
};

const getUserAddress = (userId) => {
  return http.get(getUserAddressRoute(userId));
};
const authenticationEndpoints = { signIn, getUserAddress };

export default authenticationEndpoints;
