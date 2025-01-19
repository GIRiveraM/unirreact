import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import LoginCss from "./Login.module.css";
import PerfilLogo from "../Platillos/PerfilLogo";
import logoPortada from "../../assets/logo.jpg";
import InputLogin from "../UI/InputLogin";
import {  useNavigate } from "react-router-dom";

const Login = () => {

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "admin@dominio.com" && formData.password === "admin123") {
      login(); // Cambiar el estado global
      navigateUrl(); // navegamos a la pagina
    } else {
      setError("Credenciales incorrectas");
    }
  };

  const navigateUrl = () => {
    navigate('/menu');
  };
  return (
    <>
      <PerfilLogo />
      <div className={LoginCss.main}>
        <div className={LoginCss["sub-main"]}>
            <div>
              <div className={LoginCss.imgs}>
                  <div className={LoginCss["container-image"]}>
                      <img
                        src={logoPortada}
                        alt="profile"
                        className={LoginCss.profile}
                      />
                  </div>
              </div>

              <form onSubmit={handleSubmit}>
                  <h1>Inicio de sesión</h1>
                  <InputLogin 
                    label ="Usuario"
                    type = "email"
                    name = "email"
                    value = { formData.email }
                    placeholder = "admin@dominio.com"
                    onChange = { (e) => setFormData({...formData, email: e.target.value })}
                  />
                  <div className={LoginCss["second-input"]}>
                    <InputLogin 
                      label = "Contraseña"
                      type = "password"
                      name = "password"
                      placeholder = "*****"
                      value = { formData.password }
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                  </div>
                  {error && <p> { error }</p>}
                  <div className={LoginCss["login-button"]}>
                    <button className={LoginCss.button} >Iniciar sesión</button>
                  </div>
              </form>
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;