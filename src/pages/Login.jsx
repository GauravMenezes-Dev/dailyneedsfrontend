import React from "react";
import { connect } from "react-redux";
import { selectCurrentUser } from "../redux/users/selector";
import { createStructuredSelector } from "reselect";

const Login = ({ curUser }) => (
  <div className="container is-fluid column">
    <div className="container box">
      <h1>Test Page for Login</h1>
    </div>
  </div>
);

const mstp = () =>
  createStructuredSelector({
    curUser: selectCurrentUser,
  });

export default connect(mstp)(Login);
