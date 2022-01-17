import React, { useEffect } from "react";
import "../App.css";
import Footer from "./Footer";
import Site from "./Site";
import Cookies from "universal-cookie";
import Button from "./Button";
import Tags from "./Tags";
import Input from "./Input";

const cookies = new Cookies();
export default function Create() {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [titleProject, setTitleProject] = React.useState([]);
  const [descriptionProject, setDescriptionProject] = React.useState("");
  const [linkProject, setLinkProject] = React.useState("");
  const [skills, setSkills] = React.useState([]);
  const [cvEmail, setCvEmail] = React.useState(cookies.get("email"));
  const [newProject, setNewProject] = React.useState([]);

  console.log("title",titleProject)
  const closedSesion = () => {
    cookies.remove("email", { path: "/" });
    window.location.href = "./";
  };
  const curriculum = () => {
    window.location.href = "./curriculum";
  };
  console.log(cvEmail);

  const addProjects = () => {
    if(newProject.length < 3){
    setNewProject( newProject.concat(newProject.length+1) )
  }else{alert("No puedes agregar mas proyectos")}

    console.log(newProject);
  }

  const registerCv = () => {
    console.log(
      "name: ",
      name,
      "description: ",
      description,
      "titleProject: ",
      titleProject,
      "descriptionProject: ",
      descriptionProject,
      "linkProject: ",
      linkProject,
      "skills: ",
      skills,
      "cvEmail: ",
      cvEmail
    );

    const url = "http://localhost:3001/createcv";
    const register = {
      name: name,
      description: description,
      titleproject: titleProject,
      descriptionproject: descriptionProject,
      linkproject: linkProject,
      skill: skills,
      cvemail: cvEmail,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.agregado) {
          alert("Curriculum creado con exito");
          window.location.href = "./curriculum";
        } else {
          alert(data.error);
        }
      });
  };
  if (!cookies.get("email")) {
    window.location.href = "./";
  } else {
    return (
      <div className="mx-5">
        <Site title="Crear Curriculum"></Site>
        <div className="row">
          <div className="col p-5">
            <br />
            <div class="d-grid gap-2 col-12 mx-auto">
              <Button
                toggle="Curriculum"
                classBtn="btn-primary"
                actionBtn={curriculum}
              ></Button>
              <Button
                toggle="Cerrar Sesión"
                classBtn="btn-secondary"
                actionBtn={closedSesion}
              ></Button>
            </div>
          </div>
          <div className="col p-5 mb-3">
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">
                Nombre de Curriculum
              </label>
              <Input
                placeHolder="Escribe nombre de curriculum, ejemplo: Developer"
                setValue={setName}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Descripción
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Escribe un resumen de tu perfil"
                rows="3"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="row g-3">
              <div className="col">
                <label for="formGroupExampleInput" className="form-label">
                  Título del Proyecto
                </label>
                <Input
                  placeHolder="Escribe nombre de Proyecto"
                  setValue={setTitleProject}
                />
              </div>
              <div className="col">
                <label for="formGroupExampleInput" className="form-label">
                  Descripción del Proyecto
                </label>
                <Input
                  placeHolder="Escribe breve descripción del proyecto"
                  setValue={setDescriptionProject}
                />
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">
                  URL
                </label>
                <Input
                  placeHolder="URL del Proyecto"
                  setValue={setLinkProject}
                />
              </div>
              {newProject ? newProject.map((index)=> <div className="row g-3" key={index+1} ><div className="col">
                <label for="formGroupExampleInput" className="form-label">
                  Título del Proyecto
                </label>
                <Input
                  placeHolder="Escribe nombre de Proyecto"
                  setValue={setTitleProject}
                />
              </div>
              <div className="col">
                <label for="formGroupExampleInput" className="form-label">
                  Descripción del Proyecto
                </label>
                <Input
                  placeHolder="Escribe breve descripción del proyecto"
                  setValue={setDescriptionProject}
                />
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">
                  URL
                </label>
                <Input
                  placeHolder="URL del Proyecto"
                  setValue={setLinkProject}
                />
              </div>
              </div> ) : null}
              <div className="mb-3">
                <Button toggle="Agregar Proyecto" classBtn="btn-primary" actionBtn={addProjects} ></Button>
              </div>
              
              <div className="row g-1">
                <div className="col-md-4">
                  <Tags tags={skills} setTags={setSkills} />
                  {console.log(skills)}
                  {/* <label for="formGroupExampleInput" className="form-label">
                    Skills
                  </label>
                  <Input
                    placeHolder="Escribe una nueva skill"
                    setValue={setSkills}
                  /> */}
                </div>
                <div className="d-grid g-3 gap-2 d-md-flex justify-content-md-end">
                  <Button
                    toggle="Guardar"
                    classBtn="btn-primary"
                    actionBtn={registerCv}
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
