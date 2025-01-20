import React, { useState, useEffect } from "react";
import HeaderCss from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import FoodMexPortada from "../../assets/foodmexican_portada.jpg";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const Header = (props) => {
  const { isLoggedIn, logout } = useAuth();

  // Guardar el valor en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("login", value);
  }, [value]);

  // Leer el valor inicial de localStorage cuando el componente se monte
  useEffect(() => {
    const storedValue = localStorage.getItem("login");
    if (storedValue) {
      setValue(storedValue); // Recupera el valor
    }
  }, []);

  return (
    <>
      <header className={HeaderCss.header}>
        <h1 className={HeaderCss.titulo}>La mexicana</h1>
        {isLoggedIn && (
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? HeaderCss["isActive"] : HeaderCss["noisActive"]
            }
            onClick={logout}
          >
            Cerrar sesión
          </NavLink>
        )}
        {isLoggedIn && <HeaderCartButton onClick={props.onShowCart} />}
      </header>
      <div className={HeaderCss["main-image"]}>
        <img src={FoodMexPortada} alt="mexican food logo" />
      </div>
    </>
  );
};

export default Header;
