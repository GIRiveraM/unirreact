import React from "react";
import HeaderCss from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import FoodMexPortada from "../../assets/foodmexican_portada.jpg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header className={HeaderCss.header}>
        <h1 className={HeaderCss.titulo}>La mexicana</h1>
        
        { !props.onShowLogout > 1 ?
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? HeaderCss["isActive"] : HeaderCss["noisActive"]
          }
        >
          Cerrar sesión
        </NavLink> : ''
        }
        <HeaderCartButton onClick={props.onShowCart} /> 
      </header>
      <div className={HeaderCss["main-image"]}>
        <img src={FoodMexPortada} alt="mexican food logo" />
      </div>
    </>
  );
};

export default Header;
