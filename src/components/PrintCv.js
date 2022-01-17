import React, { useEffect } from "react";
import "../App.css";
import Footer from "./Footer";
import Site from "./Site";
import Cookies from "universal-cookie";
import Button from "./Button";
import Printpdf from "./Printpdf";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

const cookies = new Cookies();

export default function PrintCv() {
  const [cvId, setCvId] = React.useState([]);
  const [pdf, setPdf] = React.useState(false);
  const [allSkills, setAllSkills] = React.useState("");

  useEffect(async () => {
    const response = await fetch(
      `http://localhost:3001/curriculum/${cookies.get("curriculum_id")}`
    );
    const body = await response.json();
    setAllSkills(body.map((s) => s.sk_name).join(", "));
    setCvId(body);
  }, []);

  const closedSesion = () => {
    cookies.remove("email", { path: "/" });
    window.location.href = "./";
  };

  const returncv = () => {
    window.location.href = "./curriculum";
  };
  console.log(cookies.get("curriculum_id"));

  if (!cookies.get("email")) {
    window.location.href = "./";
  } else {
    if (cvId.length === 0) {
      return <h1>CARGANDO...</h1>;
    } else {
      return (
        <div className="mx-5">
          <Site title="Vista previa CV"></Site>
          <div className="row">
            <div className="col p-5">
              <br />
              <div className="d-grid gap-2 col-12 mx-auto">
                <Button
                  toggle="Ir a Curriculum"
                  classBtn="btn-primary"
                  actionBtn={returncv}
                ></Button>
                <Button
                  toggle="Cerrar Sesión"
                  classBtn="btn-secondary"
                  actionBtn={closedSesion}
                ></Button>
                <PDFDownloadLink
                  document={<Printpdf cv={cvId[0]} />}
                  fileName="miprimercurriculum.pdf"
                >
                  <Button
                    toggle="Descargar PDF"
                    classBtn="btn-secondary"
                  ></Button>
                </PDFDownloadLink>
              </div>
            </div>
            <div className="col p-5">
              {/* <h5>CV</h5> */}
              {
                allSkills ? <>
                              <PDFViewer style={{ width: "100%", height: "60vh" }}>
                                <Printpdf cv={cvId[0]} skills={allSkills} />
                              </PDFViewer>
                            </> : <h1>CARGANDO...</h1>}
            </div>
          </div>
          <Footer></Footer>
        </div>
      );
    }
  }
}
