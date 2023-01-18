import React from "react";
import logoDark from "../assets/V-SD-GPB.png";
import logoLight from "../assets/V-SD-GPN.png";
// import Switcher from './Switcher'

const LoginScreen = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center blur-none bg-l-bg dark:bg-d-bg">
      {/* <div className="head-wrapper">
        <button className="buttons day-night" id="tgl">
          <div id="tgl" className="fas fa-adjust"></div>
        </button>
      </div> */}
      <div className="flex flex-col justify-center items-center h-[90vh]">
        <div className="relative w-[385px] p-5 rounded-2xl text-center shadow-l-shadow dark:shadow-d-shadow border border-solid border-l-border dark:border-d-border">
          <img
            src={document.documentElement.classList == "dark" ? logoDark : logoLight}
            alt="logo"
            className="w-full h-[140px] opacity-80 "
          />
          <h2 className="text-l-text dark:text-d-text p-1.5 text-base mt-2.5 font-extrabold tracking-[0.25rem]">
            ACCESO
          </h2>
          <div className="input" id="input">
            <div className="inputBox" id="inputBox_mail">
              <label className="text" id="text1">
                Correo del Asesor
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </span>
                </div>
                <input
                  type="username"
                  name="username"
                  id="username"
                  placeholder="usuario@securitasdirect.es"
                />
              </div>
            </div>
            <div className="inputBox" id="inputBox_pass">
              <label className="text" id="text2">
                Contraseña
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <span className="fas fa-unlock-alt"></span>
                  </span>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="**********"
                />
              </div>
            </div>
            <div className="inputBox" id="inputBox_submit">
              <button
                type="submit"
                value="Iniciar Sesion"
                id="submit"
                // onclick="validate()"
              >
                Iniciar Sesion
              </button>
            </div>
            <p className="forget text" id="text3">
              ¿Problemas de acceso?
              <br />
              Envie mail a david.castagneto@securitasdirect.es
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
