export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
export const AUTH_LOGOUT_SUCCESS = "AUTH_LOGOUT_SUCCESS";
export const AUTH_LOGOUT_FAILURE = "AUTH_LOGOUT_FAILURE";

export const loginRequest = (username, password) => {
  return {
    type: AUTH_REQUEST,
    payload: { username, password },
  };
};

export const logOut = () => ({
  type: AUTH_LOGOUT,
});
