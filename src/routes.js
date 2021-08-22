import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { useAuth } from './providers/auth';

const Routes = () => {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const cookies = Cookies.get('user');
    if (cookies) {
      setAuth(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {auth ? <Redirect from="/" to="/dashboard" /> : <Login />}
        </Route>
        <Route path="/dashboard">
          {auth ? <Dashboard /> : <Redirect from="/dashboard" to="/" />}
        </Route>
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
