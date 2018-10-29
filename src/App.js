import React, { Component } from "react";

import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HashRouter as Router } from "react-router-dom";
import routes from "./routes";
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>{routes}</Router>
			</Provider>
		);
	}
}

export default App;
