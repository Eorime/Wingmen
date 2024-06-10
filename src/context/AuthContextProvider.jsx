import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null);

  const login = (user) => {
    setAuthenticated(user);
  };

  const logout = (user) => {
    setAuthenticated(null);
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
