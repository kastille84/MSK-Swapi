import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//import components here
import Home from "./pages/Home/Home.component";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default Router;
