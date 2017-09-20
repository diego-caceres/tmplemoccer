import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import ListOfCompetitions from "./components/ListOfCompetitions";
import Competition from "./components/Competition";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Competitions" component={ListOfCompetitions} />
            <Route path="/Competition/:id" component={Competition} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
