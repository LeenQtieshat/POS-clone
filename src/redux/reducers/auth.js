import { getTokens } from "../../helpers/accessToken";
import decodeAccessToken from "../../helpers/decoder";
import { LOGIN, LOGOUT } from "../actions/auth";

const tokens = getTokens();

const initialState = {
  isAuthenticated: tokens.isAuthenticated || false,
  authToken: tokens.accessToken || null,
  idToken: tokens.idToken || null,
  refreshToken: tokens.refreshToken || null,
  userData: decodeAccessToken(tokens.idToken) || null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        isAuthenticated: true,
        authToken: payload.authToken,
        idToken: payload.idToken,
        refreshToken: payload.refreshToken,
        userData: decodeAccessToken(payload.idToken),
      };

    case LOGOUT:
      return {
        isAuthenticated: false,
        authToken: null,
        idToken: null,
        refreshToken: null,
      };

    default:
      return state;
  }
};

export default authReducer;
