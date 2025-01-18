import React from "react";
import PerfilLogoCss from "./PerfilLogo.module.css";
import Logo from "../../assets/logo.jpg";

const PerfilLogo = () => {
  return (
    <section className={PerfilLogoCss.logo}>
      <img src={Logo} alt="Logo food mexican" />
    </section>
  );
};

export default PerfilLogo;
