// src/utils/AuthContext.js

import React, {useContext, createContext} from 'react';

const AuthContext = createContext();

export function AuthProvider({children, value}) {
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthValue(){
  return useContext(AuthContext)
}