import {
  LOGIN_USER_PASSED,
  LOGIN_USER_START,
  USER_LOGGED,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
} from "./types";

const INIT_STATE = {
  curUserDeets: null,
  isLogged: false,
  error: null,
};

export default function userReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case LOGIN_USER_START:
      return state;
    case LOGIN_USER_PASSED:
      return { ...state, curUserDeets: action.payload, isLogged: true };
    case LOGIN_USER_FAILED:
      return { ...state, error: action.payload };
    case USER_LOGGED:
      return { ...state };
    case LOGOUT_USER:
      return { ...state, curUserDeets: null, isLogged: false, error: null };
    default:
      return state;
  }
}
