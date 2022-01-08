import React, { useState } from "react";
import Site from "./Site";
import Footer from "./Footer";
import Button from "./Button";
import Input from "./Input";
import Image from "./Image";
import ImageCv from "../img/candidate.png";
import md5 from "md5";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordMd5 = md5(password);

  const connect = async () => {
    const url = "https://miprimercurriculum-backend.herokuapp.com/register";
    const register = {
      email: email,
      password: passwordMd5,
      name: name,
      lastName: lastName,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    });
    const data = await response.json();
    //console.log(data);
    if (data.email) {
      alert("Usuario dado de alta con exito");
      window.location.href = "./";
    } else {
      alert(data.error);
    }
  };

  const register = (event) => {
    const validation = () => {
      if (
        typeof email !== "undefined" &&
        typeof password !== "undefined" &&
        typeof name !== "undefined" &&
        typeof lastName !== "undefined"
      ) {
        let atPosition = email.lastIndexOf("@");
        let dotPosition = email.lastIndexOf(".");

        if (
          !(
            atPosition < dotPosition &&
            atPosition > 0 &&
            email.indexOf("@@") === -1 &&
            dotPosition > 2 &&
            email.length - dotPosition > 2 &&
            password.length > 5 &&
            name.length > 2 &&
            lastName.length > 2
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
      alert("datos no validos");
    }
  };

  if (cookies.get("email")) {
    window.location.href = "./curriculum";
  } else {
    return (
      <div>
        {/* <Header></Header> */}
        <Site title="Registrarse"></Site>
        <div className="row">
          <div className="col p-5">
            <Input placeHolder="Nombres" setValue={setName}></Input>
            <Input placeHolder="Apellidos" setValue={setLastName}></Input>
            <Input placeHolder="Email" setValue={setEmail}></Input>
            <Input
              placeHolder="Contraseña"
              setValue={setPassword}
              typeInput="password"
            ></Input>
            <Button
              toggle="Registro"
              classBtn="btn-primary d-grid gap-2 col-4 mx-auto"
              actionBtn={register}
            ></Button>
          </div>
          <div className="col p-5">
            <Image picture={ImageCv}></Image>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
