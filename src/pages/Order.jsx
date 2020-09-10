import React from "react";

const Order = () => (
  <div className="container is-fluid mx-5">
    <div className="columns is-centered tile is-ancestor">
      <div className="column tile is-5 is-vertical is-parent is-half has-text-centered">
        <div className="tile is-child box is-primary">
          <p className="title">Milk</p>
        </div>
        <div className="tile is-child box">
          <p className="title">Bread</p>
        </div>
        <div className="tile is-child box">
          <p className="title">Water</p>
        </div>
        <div className="tile is-child box">
          <p className="title">Previous Orders</p>
        </div>
      </div>
    </div>
  </div>
);

export default Order;
