import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import fire from '../../services/fire';
import { useAuth } from '../../providers/auth';

const Logout = () => {
  const { setAuth } = useAuth();

  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        Cookies.remove('user');
        setAuth(false);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return <Redirect to="/login" />;
};

export default Logout;
