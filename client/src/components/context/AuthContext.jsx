import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({ token: null, email: null });

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    const email = sessionStorage.getItem("email");
    if (token && email) {
      setAuthData({ token, email });
    }
  }, []);
  

  // Login function to store token and role in sessionStorage
  const login = (token, email) => {
    console.log("Login called with:", token, email); // Debugging log
    sessionStorage.setItem("authToken", token);
    sessionStorage.setItem("email", email);
    setAuthData({ token, email });
  };
  

  // Logout function to clear token and role from sessionStorage
  const logout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("email");
    setAuthData({ token: null, email: null });
  };
  

  // Provide authentication data and login/logout functions
  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};
