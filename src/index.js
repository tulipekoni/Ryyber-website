import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Alternative3 from "views/landing/Alternative3.jsx";

// global template script file
import "./laapp.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact render={(props) => <Alternative3 {...props} />} />

      <Redirect to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
