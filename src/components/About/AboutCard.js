import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            -{t("Recibido")} <span className="blue">{t("Técnico Electromecánico")}</span> {t("en la E.E.S.T N°1 de Chacabuco. (2011-2017)")}
            <br></br>
            -{t("Estudiando")} <span className="blue">{t("Técnicatura Universitaria en Programación")}</span> {t("en UTN.")} (2024)
            <br></br><br></br>
            <span className="blue">{t("Cursos realizados:")}</span>
            <br></br>
            <span className="blue">{t("Desarrollo Web")}</span> {t("en")} Coderhouse. (2021)
            <br></br>
            <span className="blue">JavaScript</span> {t("en")} Coderhouse (2022)
            <br></br>
            <span className="blue">React Js</span> {t("en")} Coderhouse (2022)
            <br></br>
            <span className="blue">SQL</span> {t("en")} Desafío Latam (2023)
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
