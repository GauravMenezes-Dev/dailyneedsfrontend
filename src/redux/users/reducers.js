import { login } from "../../api/user";
import {
  LOGIN_USER_PASSED,
  LOGIN_USER_START,
  USER_LOGGED,
  LOGIN_USER_FAILED,
} from "./types";

const INIT_STATE = {
  curUserDeets: null,
  error: null,
};

export default function userReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case LOGIN_USER_START:
      login(action.payload);
    case LOGIN_USER_PASSED:
      return { ...state, currUserDeets: action.payload };
    case LOGIN_USER_FAILED:
      return { ...state, error: action.payload };
    case USER_LOGGED:
      return { ...state };
    default:
      return state;
  }
}
