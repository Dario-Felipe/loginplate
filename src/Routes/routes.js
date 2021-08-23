import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import NotFound from '../pages/NotFound';
import ProtectedRoute from './ProtectedRoute';
import { useAuth } from '../providers/auth';

const Routes = () => {
  const { auth } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          {auth ? <Redirect from="/login" to="/" /> : <Login />}
        </Route>
        <ProtectedRoute exact path="/" component={Dashboard} />
        <ProtectedRoute path="/logout" component={Logout} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
