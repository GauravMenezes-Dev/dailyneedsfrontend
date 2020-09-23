import React from "react";
import { connect } from "react-redux";
import { selectCurrentUser } from "../redux/users/selector";
import { createStructuredSelector } from "reselect";

const Register = ({ curUser }) => (
  <div className="container is-fluid column">
    <div className="container box">
      <h1>Test Page for Register</h1>
    </div>
  </div>
);

const mstp = () =>
  createStructuredSelector({
    curUser: selectCurrentUser,
  });

export default connect(mstp)(Register);
