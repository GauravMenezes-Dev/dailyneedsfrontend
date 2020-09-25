import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import brand from "../assets/nunu_milk.png";
import { userLogOut } from "../redux/users/actions";
import { selectCurrentUser } from "../redux/users/selector";

const NavBar = ({ curUser, logOut }) => {
  console.log("User details: ");
  console.log(curUser);
  return curUser != null && curUser !== "" ? (
    <div className="container is-fluid mb-4">
      <nav className="level has-background-blue">
        <LinkItem url="/" text="Home" />
        <LinkItem url="/orders" text="Orders" />
        <LinkItem url="/bill" text="Billing" />
        <Link to="/">
          <p className="level-item has-background-white has-text-black has-text-centered">
            <img src={brand} alt="" style={{ height: "120px" }} />
          </p>
        </Link>
        <LinkItem url="/contact" text="Contacts" />
        <LinkItem url="/profile" text={`Welcome ${curUser.username}!`} />
        <LogOutButton content="Log Out" logOutHandler={logOut} />
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

const LogOutButton = ({ content, logOutHandler }) => (
  <Link
    className="level-item has-text-centered has-background-white has-text-black button is-light mx-1 link is-info"
    to="#"
    onClick={logOutHandler}
  >
    {content}
  </Link>
);

const mstp = () =>
  createStructuredSelector({
    curUser: selectCurrentUser,
  });

const mdtp = (dispatch) => ({
  logOut: () => dispatch(userLogOut()),
});

export default connect(mstp, mdtp)(NavBar);
