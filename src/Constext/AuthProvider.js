import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const allContexts = useFirebase();

  // const { children } = props;
  return (
    <AuthContext.Provider value={allContexts}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;