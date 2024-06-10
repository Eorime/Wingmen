import React from "react";
import { useAuth } from "../../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const auth = useAuth();

  if (!auth.authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
