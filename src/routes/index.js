import React from "react";
import { Switch } from "react-router-dom";
import LoginPage from "../pages/login";
import Route from "./route";
import { mainRoutes } from "./route.config";
import Loading from "../components/loader/index";
import { connect } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Routes(props) {
  return (
    <>
      {props.loader.loading && <Loading />}
      <Switch>
        <Route path="/" exact component={LoginPage} />

        {mainRoutes.map((route) => (
          <Route
            key={route.path}
            component={route.component}
            path={route.path}
            isPrivate={route.isPrivate}
          />
        ))}

        {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
        <Route component={LoginPage} />
      </Switch>
    </>
  );
}
const mapStateToProps = (state) => ({
  loader: state.loader,
});

export default connect(mapStateToProps)(Routes);
