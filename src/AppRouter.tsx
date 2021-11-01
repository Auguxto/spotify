import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Account } from "./pages/Account";
import { Home } from "./pages/Home";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/account" component={Account} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export { AppRouter };
