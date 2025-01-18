import LoginCss from "./Login.module.css";
import sushiPortada from "../../assets/logo.jpg";
import React, { useRef, useState } from "react";
import PerfilLogo from "../Platillos/PerfilLogo";
import InputLogin from "../UI/InputLogin";
import {  useNavigate } from "react-router-dom";

const Usuario = [
  {
    username:'admin@dominio.com',
    password:'Admin2025'
  }
];

const Login = (props) => {
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorMsgUsername, setErrorMsgUsername] = useState(null);

  const [errorPassword, setErrorPassword] = useState(false);
  const [errorMsgPassword, setErrorMsgPassword] = useState(null);

  const [userloggin, setUserloggin] = useState(false);
  const [userlogginMsg, setUserlogginMsg] = useState(null);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const navigateUrl = () => {
    navigate('/menu');
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    const usernameisValid = username.trim() !== "";
    const passwordisValid = password.trim() !== "";
    const formIsValid = usernameisValid && passwordisValid;
    if (!formIsValid) {
      if (!usernameisValid) {
        setErrorUsername(true);
        setErrorMsgUsername("* usuario requerido");
      }
      if (!passwordisValid) {
        setErrorPassword(true);
        setErrorMsgPassword("* password requerido");
      }
      return;
    }

    const users = Usuario.map((usuario) => {
      if (username === usuario.username && password === usuario.password ){
        console.log('entro');
          navigateUrl();
      }
      else{
          setUserloggin(true);
          setUserlogginMsg("Usuario o contraseña son incorrectas");
      }
    });
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
                  src={sushiPortada}
                  alt="profile"
                  className={LoginCss.profile}
                />
              </div>
            </div>

            <form onSubmit={submitHandler}>
              <h1>Sesión</h1>
              <InputLogin
                label="Usuario:"
                placeholder="admin@dominio.com"
                ref={usernameInputRef}
                onChange={() => {
                  setErrorUsername(false);
                  setErrorMsgUsername(null);
                }}
                errors={errorMsgUsername}
              />
              <div className={LoginCss["second-input"]}>
                <InputLogin
                  type="password"
                  label="Password:"
                  placeholder="*****"
                  ref={passwordInputRef}
                  onChange={() => {
                    setErrorPassword(false);
                    setErrorMsgPassword(null);
                  }}
                  errors={errorMsgPassword}
                />
              </div>
              <div className={LoginCss["login-button"]}>
                <button className={LoginCss.button} >Login</button>
              </div>

              <p> {userlogginMsg}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
