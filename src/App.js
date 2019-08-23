import React, { Component } from "react";
import "./App.css";
import CardContainer from "./container/CardContainer";
import ProfileContainer from "./container/ProfileContainer";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={CardContainer} />
        <Route exact path="/Profile" component={ProfileContainer} />
      </Switch>
    );
  }
}
