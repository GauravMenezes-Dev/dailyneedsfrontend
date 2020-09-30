import { combineReducers } from "redux";
import userReducer from "./users/reducers";
import itemReducer from "./items/reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import session from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const authConfig = {
  key: "user",
  storage: session,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: persistReducer(authConfig, userReducer),
  item: itemReducer,
});

export default persistReducer(persistConfig, rootReducer);
