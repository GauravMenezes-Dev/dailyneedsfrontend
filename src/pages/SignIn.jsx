import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectUserLogged } from "../redux/users/selector";
import Login from "./Login";

const SignIn = ({ userIsLogged }) => (
  <div className="container is-fluid mx-4 my-4">
    <div className="container columns">
      {console.log(userIsLogged)}
      {userIsLogged ? <Redirect to="/" /> : <Login />}
    </div>
  </div>
);

const mstp = createStructuredSelector({
  userIsLogged: selectUserLogged,
});

export default connect(mstp)(SignIn);
