import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = (user) => {
    setAuthenticated(true);
  };

  const logout = (user) => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthContextProvider;
