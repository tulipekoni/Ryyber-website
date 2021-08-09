import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Screens from "views/Screens.jsx";

// global template script file
import "./laapp.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact render={(props) => <Screens {...props} />} />

      <Redirect to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
