import { LOGIN, LOGOUT } from "../actions/auth";

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});
