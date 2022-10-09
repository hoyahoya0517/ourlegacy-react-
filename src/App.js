import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main/Main";
import Mens from "./Mens/Mens";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/mens">
          <Mens />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
