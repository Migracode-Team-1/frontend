import React from "react";
import "../App.css";
import Button from "./Button";
import Footer from "./Footer";
import Site from "./Site";
import Image from "./Image";
import ImageCv from "../img/img_home.png";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function Home() {
  const register = () => {
    window.location.href = "./register";
  };

  const login = () => {
    window.location.href = "./login";
  };

  return (
    <div>
      <Site title="Mi Primer Curriculum"></Site>
      <div className="row">
        <div className="col p-5">
          <h2 className="h2-home">Crea tu curriculum con nosotros</h2>
          <p className="p-home">
            Una plataforma para aquellas personas que se están introduciendo por
            primera vez en el mundo de la búsqueda de empleo, y ayudarlas a
            tener una idea de cómo crear un CV.
          </p>
          <div className="d-grid gap-2 col-12 mx-auto">
            {cookies.get("email") ? (
              <Button
                toggle="Ir a Curriculum"
                classBtn="btn-primary d-grid gap-2 col-4 mx-auto"
                actionBtn={register}
              ></Button>
            ) : (
              <div className="row p-5">
                <div className="col text-end">
                  <Button
                    toggle="Registro"
                    classBtn="btn-primary"
                    actionBtn={register}
                  ></Button>{" "}
                </div>
                <div className="col text-left">
                  <Button
                    toggle="Iniciar sesión"
                    classBtn="btn-secondary"
                    actionBtn={login}
                  ></Button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col p-5">
          <Image picture={ImageCv}></Image>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
