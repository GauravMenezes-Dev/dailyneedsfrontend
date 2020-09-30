import {
  FETCH_ITEMS_FAIL,
  FETCH_ITEMS_START,
  FETCH_ITEMS_SUCCESS,
} from "./types";

const INIT_STATE = {
  inventory: null,
  isLoading: false,
  error: null,
};

export default function itemReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FETCH_ITEMS_START:
      return { ...state, isLoading: true };

    case FETCH_ITEMS_SUCCESS:
      return { ...state, inventory: action.payload, isLoading: false };

    case FETCH_ITEMS_FAIL:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return { ...state };
  }
}
