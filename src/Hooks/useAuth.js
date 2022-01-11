import React, { useContext } from 'react';
import { AuthContext } from '../Constext/AuthProvider';


const useAuth = () => {
  return useContext(AuthContext)
}

export default useAuth;