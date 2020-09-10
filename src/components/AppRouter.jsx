import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "../pages/Contact";
import Order from "../pages/Order";
import Home from "../pages/Home";
import Bill from "../pages/Bill";

const AppRouter = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/bill" component={Bill} exact />
    <Route path="/orders" component={Order} exact />
    <Route path="/contact" component={Contact} exact />
    {/*
            <Route path="/orders/:orderCat" component={}/>
        */}
  </Switch>
);

export default AppRouter;
