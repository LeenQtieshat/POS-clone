export const saveAccessToken = (accessToken, idToken, refreshToken) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("idToken", idToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const deleteAccessToken = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("idToken");
  localStorage.removeItem("refreshToken");
};

export const getTokens = () => {
  return {
    accessToken: localStorage.getItem("accessToken"),
    idToken: localStorage.getItem("idToken"),
    refreshToken: localStorage.getItem("refreshToken"),
    isAuthenticated: localStorage.getItem("accessToken") ? true : false,
  };
};
