import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../providers/auth';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { auth } = useAuth();

  return (
    <Route
      {...props}
      render={() =>
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
