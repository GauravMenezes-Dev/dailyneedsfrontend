import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { itemsFetchAsync } from "../redux/items/actions";
import { selectInventory } from "../redux/items/selectors";

const Inventory = ({ getItems }) => {
  useEffect(() => {
    getItems();
  }, getItems());

  console.log(items);

  return <div>Items Page</div>;
};

const mstp = createStructuredSelector({
  items: selectInventory,
});

const mdtp = (dispatch) => ({
  getItems: () => dispatch(itemsFetchAsync()),
});

export default connect(mstp, mdtp)(Inventory);
