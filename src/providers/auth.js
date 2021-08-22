import React, { createContext, useState, useContext } from 'react';

const authContext = createContext();

const Auth = ({ children }) => {
  const [auth, setAuth] = useState(false);

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);

export default Auth;
