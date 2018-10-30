import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Leather from "./components/Leather/Leather";
import Cart from "./components/Cart/Cart";
import Apparel from "./components/Apparel/Apparel";
import Accessories from "./components/Accessories/Accessories";
export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Leather} exact path="/collections/leather" />
    <Route component={Apparel} exact path="/collections/apparel" />
    <Route component={Accessories} exact path="/collections/accessories" />
    <Route component={Cart} exact path="/collections/cart" />
  </Switch>
);
