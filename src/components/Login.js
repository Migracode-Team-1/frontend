import React, { useState } from "react";
import Site from "./Site";
import Footer from "./Footer";
import Input from "./Input";
import Button from "./Button";
import Image from "./Image";
import ImageCv from "../img/resumecv.png";
import Cookies from "universal-cookie";
import md5 from "md5";

const cookies = new Cookies();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const passwordMd5 = md5(password);

  const connect = async () => {
    const url = "http://localhost:3001/login";
    const login = { email: email, password: passwordMd5 };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });
    const data = await response.json();
    console.log(data);
    if (data.error) {
      alert("Usuario o contraseña incorrectos");
    }
    setUser(data);
  };

  const singin = async (event) => {
    const validation = () => {
      if (typeof email !== "undefined" && typeof password !== "undefined") {
        let atPosition = email.lastIndexOf("@");
        let dotPosition = email.lastIndexOf(".");

        if (
          !(
            atPosition < dotPosition &&
            atPosition > 0 &&
            email.indexOf("@@") === -1 &&
            dotPosition > 2 &&
            email.length - dotPosition > 2 &&
            password.length > 5
          )
        ) {
          return false;
        }
        return true;
      }
    };

    if (validation()) {
      connect();
    } else {
      alert("email o contraseña no son validos");
    }
  };

  if (cookies.get("email")) {
    window.location.href = "./curriculum";
  } else {
    if (user[0] !== undefined) {
      cookies.set("email", email, { path: "/" });

      window.location.href = "./curriculum";
    } else {
      return (
        <div>
          <Site title="Iniciar sesión"></Site>
          <div className="row">
            <div className="col p-5">
              <Input placeHolder="Email" setValue={setEmail}>
                {" "}
              </Input>
              <Input
                placeHolder="Contraseña"
                setValue={setPassword}
                typeInput="password"
              ></Input>
              <Button
                toggle="Iniciar sesión"
                classBtn="btn-primary d-grid gap-2 col-4 mx-auto"
                actionBtn={singin}
              ></Button>
            </div>
            <div className="col p-5">
              <Image picture={ImageCv}></Image>
            </div>
          </div>
          <Footer></Footer>
        </div>
      );
    };
  };
};
