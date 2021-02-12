import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { fakeAuth } from './Login';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  // understand rest ... 2 hours ... also because, why is it sent location, even though there is no Route before? See app,

  console.log('rest is', rest)

  return (
    <Route {...rest}>
      {fakeAuth.isAuthenticated === true ?
        <Component />
        :
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      }
    </Route>
  );
};

export default PrivateRoute;
