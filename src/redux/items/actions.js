import { FETCH_ITEMS_URL } from "../../api/constants";
import {
  FETCH_ITEMS_FAIL,
  FETCH_ITEMS_START,
  FETCH_ITEMS_SUCCESS,
} from "./types";

export const fetchItems = () => ({
  type: FETCH_ITEMS_START,
});

export const fetchItemsSuccess = (items) => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: items,
});

export const fetchItemsFailure = (error) => ({
  type: FETCH_ITEMS_FAIL,
  payload: error,
});

export const itemsFetchAsync = () => {
  return (dispatch) => {
    dispatch(fetchItems());
    Axios.get(FETCH_ITEMS_URL)
      .then((resp) => {
        dispatch(fetchItemsSuccess(resp.data));
      })
      .catch((err) => {
        dispatch(fetchItemsFailed(err));
      });
  };
};
