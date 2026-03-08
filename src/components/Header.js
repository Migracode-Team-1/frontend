import React from "react";
import Logo from "../img/CV.png";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function Header() {
  const home = () => {
    window.location.href = "./";
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light row">
        <div className="container-fluid">
          <a href="https://miprimercurriculum.herokuapp.com">
            <img
              src={Logo}
              alt="Logo"
              width="80"
              height="60"
              className="d-inline-block align-text-top"
              onClick={home}
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Inicio
                </NavLink>
              </li>
              {cookies.get("email") ? null: <>
              <li className="nav-item">
                <NavLink exact to="/register" className="nav-link" href="#">
                  Registrarse
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/login" className="nav-link" href="#">
                  Iniciar sesión
                </NavLink>
              </li>
              </>}
              
              {cookies.get("email") ? <li className="nav-link">Hola: {cookies.get("email")}</li>: null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
