import {
  LOGIN_USER_START,
  LOGIN_USER_FAILED,
  LOGIN_USER_PASSED,
  USER_LOGGED,
} from "./types";

export const checkUserSession = () => ({
  type: USER_LOGGED,
});

export const userLoginStart = (creds) => ({
  type: LOGIN_USER_START,
  payload: creds,
});

export const userLoginSuccess = (data) => ({
  type: LOGIN_USER_PASSED,
  payload: data,
});

export const userLoginFailed = (err) => ({
  type: LOGIN_USER_FAILED,
  payload: err,
});
