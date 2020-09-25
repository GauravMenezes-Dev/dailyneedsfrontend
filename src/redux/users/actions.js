import Axios from "axios";
import {
  LOGIN_USER_START,
  LOGIN_USER_FAILED,
  LOGIN_USER_PASSED,
  USER_LOGGED,
  LOGOUT_USER,
} from "./types";
import { LOGIN_URL } from "../../api/constants";

export const checkUserSession = () => ({
  type: USER_LOGGED,
});

export const userLogOut = () => ({
  type: LOGOUT_USER,
});

export const userLoginStartAsync = (creds) => {
  return (dispatch) => {
    dispatch(userLoginStart(creds));
    Axios.post(LOGIN_URL, creds)
      .then((resp) => {
        dispatch(userLoginSuccess(resp.data));
      })
      .catch((err) => {
        dispatch(userLoginFailed(err));
      });
  };
};

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
