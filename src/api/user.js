import axios from "axios";
import { userLoginFailed, userLoginSuccess } from "../redux/users/actions";
import { LOGIN_URL } from "./constants";

export const login = (data) => {
  return (dispatch) => {
    return axios
      .post(LOGIN_URL, data)
      .then((resp) => {
        console.log(resp.data);
        return resp.data;
      })
      .then((data) => {
        dispatch(userLoginSuccess(data));
      })
      .catch((error) => {
        dispatch(userLoginFailed(error));
      });
  };
};
