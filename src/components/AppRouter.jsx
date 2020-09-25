import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Contact from "../pages/Contact";
import Order from "../pages/Order";
import Home from "../pages/Home";
import Bill from "../pages/Bill";
import SignIn from "../pages/SignIn";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/users/selector";
import { checkUserSession } from "../redux/users/actions";
import Profile from "../pages/Profile";

const AppRouter = ({ curUser }) => {
  const userSession = (component) => () =>
    curUser ? component : <Redirect to="/signIn" />;

  return (
    <Switch>
      <Route path="/" render={userSession(<Home />)} exact />
      <Route path="/bill" render={userSession(<Bill />)} exact />
      <Route path="/orders" render={userSession(<Order />)} exact />
      <Route path="/contact" render={userSession(<Contact />)} exact />
      <Route path="/profile" render={userSession(<Profile />)} exact />
      <Route path="/signIn" component={SignIn} exact />
    </Switch>
  );
};

const mstp = () =>
  createStructuredSelector({
    curUser: selectCurrentUser,
  });

const mdtp = (dispatch) => ({
  checkUser: () => dispatch(checkUserSession()),
});

export default connect(mstp, mdtp)(AppRouter);
