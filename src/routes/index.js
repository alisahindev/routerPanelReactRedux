import React from "react";
import { Switch } from "react-router-dom";
import SignIn from "../pages/sigin";
import Route from "./route";
import { mainRoutes } from "./route.config";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      {mainRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          isPrivate={route.isPrivate}
        />
      ))}

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={SignIn} />
    </Switch>
  );
}
