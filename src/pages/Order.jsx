import React from "react";
import OrderItem from "../components/OrderItem";

const Order = () => (
  <div className="container is-fluid mx-5">
    <div className="columns is-centered tile is-ancestor">
      <div className="column is-4 is-vertical is-parent is-half has-text-centered">
        <OrderItem text="Milk" />
        <OrderItem text="Bread" />
        <OrderItem text="Water" />
      </div>
    </div>
  </div>
);

export default Order;
