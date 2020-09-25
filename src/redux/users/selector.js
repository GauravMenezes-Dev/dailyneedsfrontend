import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.curUserDeets
);

export const selectUserLogged = createSelector(
  [selectUser],
  (user) => user.isLogged
);
