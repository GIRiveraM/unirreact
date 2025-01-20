import React, { createContext, useState, useContext  } from "react";
import localStorage from "redux-persist/es/storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true); // Cambia el estado global al iniciar sesión
  };

  const logout = () => {
    localStorage.setItem("login",false);
    localStorage.removeItem('persist:mexican-food');
    setIsLoggedIn(false); // Cambia el estado global al cerrar sesión
  };

  const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
