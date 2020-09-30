import { createSelector } from "reselect";

const selectItems = (state) => state.item;

export const selectInventory = createSelector(
  [selectItems],
  (item) => item.inventory
);

export const isLoading = createSelector(
  [selectItems],
  (item) => item.isLoading
);
