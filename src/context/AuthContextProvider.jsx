import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return <div>AuthContextProvider</div>;
};

export default AuthContextProvider;
