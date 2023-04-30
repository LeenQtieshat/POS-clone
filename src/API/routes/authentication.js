import { AUTHENTICATION, USERS, ADDRESS } from "../baseURL";

const signInRoute = () => `${AUTHENTICATION}/authenticate`;
const getUserAddressRoute = (userId) => `${USERS}/${userId}${ADDRESS}`;

export { signInRoute, getUserAddressRoute };
