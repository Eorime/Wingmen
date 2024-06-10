import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = (user) => {
    setAuthenticated(true);
    localStorage.setItem("authenticated", true);
  };

  const logout = (user) => {
    setAuthenticated(false);
    localStorage.removeItem("authenticated");
  };

  useEffect(() => {
    console.log(
      "Stored authentication:",
      localStorage.getItem("authenticated")
    );
    const storedAuth = localStorage.getItem("authenticated");
    if (storedAuth === "true") {
      setAuthenticated(true);
    }
  }, []);

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
