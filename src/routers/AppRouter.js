import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";
import Curriculum from "../components/Curriculum";
import Create from "../components/Create";
import PrinCv from "../components/PrintCv"

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/curriculum" component={Curriculum} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/printcv" component={PrinCv} />
      </Switch>
    </Router>
  );
}
