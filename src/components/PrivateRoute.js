import { useSelector } from "react-redux";
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.authReducer);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.token ? <Component {...props} /> : <Redirect to="/carrito" />
      }
    />
  );
};

export default PrivateRoute;
