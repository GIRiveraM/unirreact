import React, { useState, useEffect } from "react";
import HeaderCss from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import FoodMexPortada from "../../assets/foodmexican_portada.jpg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const Header = (props) => {
  const {  logout  } = useAuth();
  const [isReload, setIsReload] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

   useEffect(()=>{
      const IsLogin = localStorage.getItem("login");
      if (IsLogin){
        setIsReload(IsLogin);
      }
  }); 
  
  const handleRedirect = () => {
    localStorage.removeItem("login");
    localStorage.removeItem('persist:mexican-food');
    setIsReload(false);
    navigate("/", { state: { redirected: true } });
  };

   return (
    <>
      <header className={HeaderCss.header}>
        <h1 className={HeaderCss.titulo}>La mexicana</h1>
         {isReload && (
          <div className={HeaderCss["logout-button"]}>
            <button className={HeaderCss.button} onClick={handleRedirect}>Cerrar sesión</button>
          </div>
        ) }
        {isReload && <HeaderCartButton onClick={props.onShowCart} />}
      </header>
      <div className={HeaderCss["main-image"]}>
        <img src={FoodMexPortada} alt="mexican food logo" />
      </div>
    </>
  );
};

export default Header;
