import React from "react";
import { connect } from "react-redux";
import { selectCurrentUser } from "../redux/users/selector";
import { createStructuredSelector } from "reselect";
import Register from "./Register";
import Login from "./Login";

const SignIn = ({ curUser }) => (
  <div className="container is-fluid mx-4 my-4">
    <div className="container columns">
      <Register />
      <Login />
    </div>
  </div>
);

const mstp = () =>
  createStructuredSelector({
    curUser: selectCurrentUser,
  });

export default connect(mstp)(SignIn);
