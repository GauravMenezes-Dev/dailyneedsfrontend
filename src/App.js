import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import NavBar from "./components/Navbar";
import Order from "./pages/Order";
import Home from "./pages/Home";
import Bill from "./pages/Bill";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/bill" component={Bill} exact /> */}
          <Route path="/orders" component={Order} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
