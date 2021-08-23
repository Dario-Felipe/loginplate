import React, { createContext, useState, useContext } from 'react';
import Cookies from 'js-cookie';

const authContext = createContext();

const Auth = ({ children }) => {
  const [auth, setAuth] = useState(!!Cookies.get('user'));

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);

export default Auth;
