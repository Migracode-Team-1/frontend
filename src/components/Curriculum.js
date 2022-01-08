import React, { useEffect } from "react";
import "../App.css";
import Footer from "./Footer";
import Site from "./Site";
import Cookies from "universal-cookie";
import Button from "./Button";

const cookies = new Cookies();

export default function Curriculum() {
  const [cvList, setCvList] = React.useState([]);
  useEffect(async () => {
    const response = await fetch(
      `https://miprimercurriculum-backend.herokuapp.com/cvlist/${cookies.get("email")}`
    );
    const body = await response.json();
    console.log(body);
    setCvList(body);
  }, []);

  console.log(cvList);

  const closedSesion = () => {
    cookies.remove("email", { path: "/" });
    window.location.href = "./";
  };

  const prueba = (cvid) => {
    cookies.set("curriculum_id", cvid, { path: "/" });
    //render(){ <PrintCv/>}
    window.location.href = "./printcv";
  };

  const create = () => {
    window.location.href = "./create";
  };
  // console.log("email: " + cookies.get("email"));
  if (!cookies.get("email")) {
    window.location.href = "./";
  } else {
    return (
      <div className="mx-5">
        <Site title="Curriculums"></Site>
        <div className="row">
          <div className="col p-5">
            <br />
            <div className="d-grid gap-2 col-12 mx-auto">
              <Button
                toggle="Crear Curriculum"
                classBtn="btn-primary"
                actionBtn={create}
              ></Button>
              <Button
                toggle="Cerrar Sesión"
                classBtn="btn-secondary"
                actionBtn={closedSesion}
              ></Button>
            </div>
          </div>
          <div className="col p-5">
            <h5>Listado de CV</h5>
            <ul>
              {cvList.map((cv, i) => (
                <li key={i}>
                  <Button
                    toggle={cv.cv_name}
                    classBtn="btn-primary m-1"
                    actionBtn={() => prueba(cv.id)}
                  ></Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
