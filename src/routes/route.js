import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import DefaultLayout from "../pages/layouts";
import AuthLayout from "../pages/layouts/auth";
import { readLocalStorage } from "../helpers";

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const signed = useSelector((state) => state.auth.data.token);
  const localSign =
    readLocalStorage("loginData") &&
    readLocalStorage("loginData").token &&
    readLocalStorage("loginData").token;

  /**
   * Redirect user to SignIn page if he tries to access a private route
   * without authentication.
   */
  if (!localSign && isPrivate && !signed) {
    return <Redirect to="/" />;
  }
  /**
   * Redirect user to Main page if he tries to access a non private route
   * (SignIn or SignUp) after being authenticated.
   */
  if ((!isPrivate && signed) || (!isPrivate && localSign)) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed || localSign ? AuthLayout : DefaultLayout;
  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
