import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Schema from "./Schema";

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/schema" exact component={ Schema } />
      <Route component={ Home } />
    </Switch>
  )
}