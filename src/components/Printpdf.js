import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import Fondo from "../img/Fondo.png";

export default function Printpdf({ cv }) {
  const styles = StyleSheet.create({
    page: {
      padding: 30,
    },
    text: {
      fontSize: 12,
      fontFamily: "Helvetica",
      margin: 10,
    },
    subtitle: {
      fontSize: 13,
      fontWeight: "bold",
      fontFamily: "Helvetica",
      margin: 10,
    },
    subtitles: {
      fontSize: 15,
      fontFamily: "Helvetica",
      margin: 10,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#9ba1be",
    },
    resume: {
      fontSize: 12,
      fontFamily: "Helvetica",
      margin: 10,
    },
    title: {
      fontSize: 20,
      fontFamily: "Helvetica",
      margin: 10,
      fontWeight: "bold",
      textAlign: "center",
    },
    views: {},
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ height: "100%" }}>
          <Image
            src={Fondo}
            style={{ width: "100%", height: "100%", position: "absolute" }}
          />
          <Text style={styles.title}>
            {cv ? `${cv.name} ${cv.last_name}` : "..."}
          </Text>
          <Text style={styles.text}>{cv ? `Email: ${cv.email}` : "..."}</Text>
          <Text style={styles.subtitle}>{cv ? cv.cv_name : "..."}</Text>
          <Text style={styles.subtitles}>{cv ? "Resumen:" : "..."}</Text>
          <Text style={styles.resume}>{cv ? cv.description_name : "..."}</Text>
          <Text style={styles.subtitles}>{cv ? "Proyecto:" : "..."}</Text>
          <Text style={styles.text}>{cv ? cv.title : "..."}</Text>
          <Text style={styles.text}>{cv ? cv.description : "..."}</Text>
          <Text style={styles.text}>{cv ? cv.link : "..."}</Text>
          <Text style={styles.subtitles}>{cv ? "Habilidades:" : "..."}</Text>
          <Text style={styles.text}>{cv ? cv.sk_name : "..."}</Text>
        </View>
      </Page>
    </Document>
  );
}
