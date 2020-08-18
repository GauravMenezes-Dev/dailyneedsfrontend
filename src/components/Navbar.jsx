import React from "react";
import { Link } from "react-router-dom";
import brand from "../assets/nunu_milk.png";

const NavBar = () => (
  <div className="container is-fluid has-background-blue mb-2">
    <nav className="level">
      <Link
        to="/"
        className="level-item has-text-centered has-background-white has-text-black button mx-1 link is-info"
      >
        Home
      </Link>
      <Link
        to="/orders"
        className="level-item has-text-centered has-background-white has-text-black button mx-1 link is-info"
      >
        Order
      </Link>
      <Link to="/">
        <p className="level-item has-background-white has-text-black has-text-centered">
          <img src={brand} alt="" style={{ height: "120px" }} />
        </p>
      </Link>
      <Link
        to="/bill"
        className="link is-info has-background-white has-text-black level-item has-text-centered button mx-1"
      >
        Billing
      </Link>
      <Link
        to="/contact"
        className="link is-info level-item has-background-white has-text-black has-text-centered button mx-1"
      >
        Contact
      </Link>
    </nav>
  </div>
);

export default NavBar;
