import React, { useState, useEffect } from "react";
import HeaderCss from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import FoodMexPortada from "../../assets/foodmexican_portada.jpg";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const Header = (props) => {
  const {  logout  } = useAuth();
  const [isReload, setIsReload] = useState(false);

  let IsLogin = localStorage.getItem("login");
  
  useEffect(() => {
    // Verificar si la página fue recargada
    if (performance.navigation.type ===  performance.navigation.TYPE_RELOAD) {
       setIsReload(IsLogin);
       console.log('entro reload',IsLogin);
    } 
    else{
      console.log('entro xxx',IsLogin);
    }
  }, []);

   return (
    <>
      <header className={HeaderCss.header}>
        <h1 className={HeaderCss.titulo}>La mexicana</h1>
         {isReload == true ? (
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? HeaderCss["isActive"] : HeaderCss["noisActive"]
            }
            onClick={logout}
          >
            Cerrar sesión
          </NavLink>
        ):''}
        {isReload && <HeaderCartButton onClick={props.onShowCart} />}
      </header>
      <div className={HeaderCss["main-image"]}>
        <img src={FoodMexPortada} alt="mexican food logo" />
      </div>
    </>
  );
};

export default Header;
