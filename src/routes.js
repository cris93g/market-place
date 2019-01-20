import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Leather from "./components/Leather/Leather";
import Cart from "./components/Cart/Cart";
import Apparel from "./components/Apparel/Apparel";
import Accessories from "./components/Accessories/Accessories";
import Cards from "./components/Cards/Cards";
export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route component={Cards} exact path="/Cards" />
		<Route component={Leather} exact path="/leather" />
		<Route component={Apparel} exact path="/apparel" />
		<Route component={Accessories} exact path="/accessories" />
		<Route component={Cart} exact path="/cart" />
	</Switch>
);
