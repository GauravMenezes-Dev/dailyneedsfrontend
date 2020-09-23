import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import brand from "../assets/nunu_milk.png";
import { selectCurrentUser } from "../redux/users/selector";

const NavBar = ({ curUser }) => {
  return curUser ? (
    <div className="container is-fluid mb-4">
      <nav className="level has-background-blue">
        <LinkItem url="/" text="Home" />
        <LinkItem url="/orders" text="Orders" />
        <Link to="/">
          <p className="level-item has-background-white has-text-black has-text-centered">
            <img src={brand} alt="" style={{ height: "120px" }} />
          </p>
        </Link>
        <LinkItem url="/bill" text="Billing" />
        <LinkItem url="/contact" text="Contacts" />
      </nav>
    </div>
  ) : null;
};

const LinkItem = ({ url, text }) => (
  <Link
    to={url}
    className="level-item has-text-centered has-background-white has-text-black button is-light mx-1 link is-info"
  >
    {text}
  </Link>
);

const mstp = () =>
  createStructuredSelector({
    curUser: selectCurrentUser,
  });

export default connect(mstp)(NavBar);
