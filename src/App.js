import React, { Component } from "react";

import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HashRouter as Router } from "react-router-dom";
import routes from "./routes";
class App extends Component {
  render() {
    return (
      //brings in redux into app
      <Provider store={store}>
        {/*brings in router  */}
        <Router>{routes}</Router>
      </Provider>
    );
  }
}

export default App;
